const express=require('express'),cors=require('cors'),fs=require('fs'),path=require('path');
const app=express();app.use(cors());app.use(express.json());
const root=path.join(__dirname,'..');const deviceRoot=path.join(root,'devices');
function readDevices(){const out=[];for(const brand of fs.readdirSync(deviceRoot)){const dir=path.join(deviceRoot,brand);if(!fs.statSync(dir).isDirectory())continue;for(const f of fs.readdirSync(dir).filter(x=>x.endsWith('.json'))){try{out.push(JSON.parse(fs.readFileSync(path.join(dir,f),'utf8')))}catch(e){console.error('Bad JSON',f)}}}return out}
app.get('/api/devices',(req,res)=>res.json(readDevices()));
app.get('/api/devices/:id',(req,res)=>{const d=readDevices().find(x=>x.id===req.params.id);if(!d)return res.status(404).json({error:'Device not found'});res.json(d)});
app.get('/api/health',(req,res)=>res.json({ok:true}));
app.use(express.static(path.join(root,'frontend')));
app.listen(process.env.PORT||3000,()=>console.log('DeviceIQ running'));
