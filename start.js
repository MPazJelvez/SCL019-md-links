const fs = require('fs');
const path = require('path');

//existe ruta?
const existenceVerification = (pathLink) => (fs.existsSync(pathLink));

//verificar extensión
const extensionVerification = (pathLink) => (path.extname(pathLink) === '.md');

//es archivo?
const file = (pathLink) => fs.statSync(pathLink);

module.exports ={
    existenceVerification,
    extensionVerification
}
