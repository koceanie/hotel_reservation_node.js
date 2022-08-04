// let json = {
//     "id": 11,
//     "title" : "수정시기키",
//     "description" : "수정을 해보았읍니다",
//     "test1" : undefined,
//     "test2" : null,
//     "test3" : ''
// };

// if (json.test3 == !true) {
//     json.test3 = undefined
//   }

// console.log(json.test1==true);
// console.log(json.test2==true);
// console.log(json.test3===undefined);

// console.log(json.test3)

let title = "슈퍼막스막스막스";
let description = null;
let id = 11;

const list = [];

if (title) {
  list.push(`title = "${title}"`);
}

if (description) {
  list.push(`description = "${description}"`);
}

console.log(list);

const query = `UPDATE books
    SET ${list}
    WHERE id = ${id}`;
console.log(query);

// json = function(json) {
//     return JSON.parse(JSON.stringify(json))
//     };

// console.log(json)
