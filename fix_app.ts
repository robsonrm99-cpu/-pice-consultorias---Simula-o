import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');
content = content.replace(/text-slate-400/g, 'text-zinc-500');
content = content.replace(/bg-slate-200/g, 'bg-zinc-800');
content = content.replace(/border-slate-200/g, 'border-zinc-800');
fs.writeFileSync('src/App.tsx', content);

let meta = JSON.parse(fs.readFileSync('metadata.json', 'utf-8'));
meta.name = "Ápice Consultoria em Consórcios";
meta.description = "Funil de vendas e simulação para Ápice Consultoria";
fs.writeFileSync('metadata.json', JSON.stringify(meta, null, 2));
