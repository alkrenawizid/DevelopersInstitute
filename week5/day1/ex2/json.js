// PARSE
const fromjson = '{"result":true, "count":42}';
const toobj = JSON.parse(fromjson); //convert a JSON string into a JS object
console.log("typeof(fromjson) : ", typeof(fromjson), " typeof(toobj) : ", 
	typeof(toobj), "toobj['count'] : ", toobj["count"])

//STRINGIFY
const fromobj = {username:"John", age:25};
const tojson = JSON.stringify(fromobj)
console.log(typeof(fromobj), typeof(tojson), tojson)

//NESTED OBJECT EXAMPLE
const jsonString = `{
    "employees":[
        {"firstName":"John", "lastName":"Doe"},
        {"firstName":"Anna", "lastName":"Smith"},
        {"firstName":"Peter", "lastName":"Jones"}
    ]
}`

const parsedObject = JSON.parse(jsonString);
console.log(parsedObject["employees"]) //receive only the employees object