const fileSystem = require('fs')

//Read file before
const privateInformation = fileSystem.readFileSync("./privateInformation.txt", "utf-8");

console.log(`===== Before written ===== \n${privateInformation}`);

//write file
const additionalInfo = `${privateInformation}PhoneNumber : 070-0445-0445\nModified at : ${Date.now()}`;
fileSystem.writeFileSync("./privateInformation.txt", additionalInfo);

console.log("===== Successfully File written! ===== \n");

// read File after
const updatedPrivateInformation = fileSystem.readFileSync("./privateInformation.txt", "utf-8");

console.log(`===== After written ===== \n${updatedPrivateInformation}`);


//동기용

console.log("추가적으로 실행되어야 하는 코드 1"); 
console.log("추가적으로 실행되어야 하는 코드 2");
console.log("추가적으로 실행되어야 하는 코드 3");
console.log("추가적으로 실행되어야 하는 코드 4");