const fs = require('fs');
const path = require('path');
const start = require('./start.js');
const colors = require('colors');

process.stdout.write(' \n')
process.stdout.write('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨\n')
process.stdout.write(colors.rainbow('✨ ------ BIENVENID@ A MD-LINKS!! ------✨ \n'));
process.stdout.write('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨\n')
process.stdout.write(' \n')

let pathLink ="";

//verifica si existe la ruta
const exists = start.existenceVerification;

//convierte la ruta en absoluta
const path1 = path.resolve(pathLink)

//solicita que el usuario agregue la ruta a analizar
process.stdout.write(colors.cyan('Ingresa la ruta que deseas analizar:'));

//input para que el usuario escriba la ruta
process.stdin.on('data', function(data){
  
  //comvierte la data en string y el trim le quita los espacios y "enters" innecesarios
  pathLink = data.toString().trim();

  //Imprime el nombre de la ruta a través de una plantilla
  process.stdout.write(colors.magenta(`La ruta es: ${pathLink} \n`));

  //si existe....
if(exists(pathLink)){
  process.stdout.write(colors.green('¡EXISTE!😊 \n')); //se imprime esto
  process.stdout.write(colors.yellow('Trasformando la ruta en absoluta... \n')); //esto
  process.stdout.write(colors.green(path1 + '\n')); //y finalmente imprimimos la ruta absoluta que logramos con resolve
}else if(!exists(pathLink)){ //de lo contrario
  process.stdout.write(colors.red('No existe!😟 \n'))}  //nos indica que no existe

// process.stdout.write('Deseas continuar y analizar otra ruta?  \n')

// exit and stop process
  process.exit()
});
