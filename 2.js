const jsonString = `

{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
}`;

const data = JSON.parse(jsonString);
const list = data.list;
const result = {
    list: [],
};

for(elem of list){
    const name = elem.name;
    const age = Number(elem.age);
    const prof = elem.prof;

    result.list.push({name, age, prof});
}

console.log(result);