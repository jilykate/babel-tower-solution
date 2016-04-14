var inputs = process.argv.slice(2);
var result = inputs.map(s => s.charAt(0).toUpperCase())
                    .reduce((a,b) => (a+b));
//console.log(inputs.map(s => s.charAt(0).toUpperCase()));
console.log(result);
