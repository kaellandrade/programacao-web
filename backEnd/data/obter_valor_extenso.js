var valor = '1000000,12';
var extenso = require('extenso');

export const valorExtenso = extenso(valor, { number: { decimalSeparator: 'dot' }, mode: 'currency' } );


