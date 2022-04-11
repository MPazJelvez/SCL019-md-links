const {existenceVerification,
extensionVerification} = require('../start.js');
const pathTest = 'C:/Users/mpazj/OneDrive\Desktop\Laboratoria\PROYECTO MD LINKS\SCL019-md-links\README.md';
const file = './README.md'
const file2 = './texto.txt'

describe('verificación de existencia de archivo', () => [

    it('Archivo existe y devuelve true', () => {
        expect(existenceVerification(file)).toBe(true)
    }),
    it('Archivo no existe y devuelve false', () => {
        expect(extensionVerification(pathTest)).toBe(false)
    })
]);