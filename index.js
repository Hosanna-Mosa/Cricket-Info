let jsResponse = {
    "fact" : "Hi Guru",
    "Game" : "Free fire"
};

let changedToJSON = JSON.stringify(jsResponse);
console.log(changedToJSON);


let changedToOject = JSON.parse(changedToJSON);
console.log(changedToOject);
