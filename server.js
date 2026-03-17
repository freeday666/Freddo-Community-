require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); // om CFX API te gebruiken

const app = express();
app.use(cors());
app.use(express.json());

// Vul hier je echte CFX server token en URL in
const CFX_SERVER_API = "http://127.0.0.1:30120"; 
const CFX_TOKEN = "JOUW_CFX_SERVER_TOKEN";

// Players ophalen via CFX API
app.get('/players', async (req,res)=>{
  try{
    const response = await fetch(`${CFX_SERVER_API}/players.json?token=${CFX_TOKEN}`);
    const players = await response.json();
    // Voeg ID toe voor buttons
    const mapped = players.map((p,i)=>({id:i+1,name:p.name}));
    res.json(mapped);
  }catch(err){
    res.status(500).json([]);
  }
});

// Server status ophalen (CFX API)
app.get('/servers', async (req,res)=>{
  // demo status
  res.json([{id:1,name:"FiveM Server",status:"🟢 Online"}]);
});

// Server actions
app.post('/server/start/:id',(req,res)=>res.json({message:"Server started"}));
app.post('/server/stop/:id',(req,res)=>res.json({message:"Server stopped"}));
app.post('/server/restart/:id',(req,res)=>res.json({message:"Server restarted"}));

// Kick/Ban speler
app.post('/kick/:id',(req,res)=>res.json({message:"Player kicked"}));
app.post('/ban/:id',(req,res)=>res.json({message:"Player banned"}));

app.listen(3000,()=>console.log("FiveM backend running on port 3000"));
