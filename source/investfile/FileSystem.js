const fileSystem = require('fs')

//Read file before
fileSystem.readFile("./privateInformation.txt", "utf-8", (err, data1) => {
    console.log(`===== Before written ===== \n${data1}`);

    const additionalInfo = `${data1}PhoneNumber : 070-0445-0445\nModified at : ${Date.now()}`;
    
    // Write File
    fileSystem.writeFile("./privateInformation.txt", additionalInfo, "utf-8", (err, data2) => {
        console.log("===== Successfully File written! ===== \n");

        // read File after
        fileSystem.readFile("./privateInformation.txt", "utf-8", (err, data3) => {
            console.log(`===== After written ===== \n${data3}`);
        });
    });
});

//동기용
console.log("추가적으로 실행되어야 하는 코드 1"); 
console.log("추가적으로 실행되어야 하는 코드 2");
console.log("추가적으로 실행되어야 하는 코드 3");
console.log("추가적으로 실행되어야 하는 코드 4");