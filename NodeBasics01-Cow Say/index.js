const userInfo = require('./information');
var cowsay  =  require ("cowsay");

console.log ( cowsay.say ( { 
    text : `Hello I'm ${userInfo.wilder.nom} from ${userInfo.wilder.campus} Campus` , 
    e : "oO" , 
    T : "U " 
} ) );

//console.log(`Hello I'm ${userInfo.wilder.nom} from ${userInfo.wilder.campus} Campus`);