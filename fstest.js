var fs = require('fs');
var obj = 
{
    "first_name": "Anahit",
    "last_name": "Petrosyan",
    "age": 19,
    "tumo_student": true
};
var myJson = JSON.stringify(obj);

fs.writeFileSync('obj.json', myJson);