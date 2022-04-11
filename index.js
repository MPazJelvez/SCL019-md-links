const fs = require('fs');
const path = require('path');
const start = require('./start.js');
// const chalk = require('chalk');

process.stdout.write('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨\n')
process.stdout.write('✨ ------ BIENVENID@ A MD-LINKS!! ------✨ \n')
process.stdout.write('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨\n')

let pathLink ="";

const path1 = path.resolve(pathLink)

const exists = start.existenceVerification;

process.stdout.write('Ingresa la ruta que deseas analizar:')

process.stdin.on('data', function(data){
  
  pathLink = data.toString().trim();

  process.stdout.write(`Ruta: ${pathLink} \n`);
if(exists(pathLink)){
  process.stdout.write('Existe!😊 \n');
  process.stdout.write('Trasformando la ruta en absoluta... \n');
  process.stdout.write(path1 + '\n');
}else if(!exists(pathLink)){
  process.stdout.write('No existe!😟 \n')} 

// process.stdout.write('Deseas continuar y analizar otra ruta?  \n')
// exit and stop process
  process.exit()
})
