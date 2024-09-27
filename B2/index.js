import http from "node:http";
import hello from  "./demo.js";
import os from "node:os" //os
import fs from "node:fs"; //file system
import EventEmitter from "node:events";//evenemiiter


const eventEmitter = new EventEmitter();
const hostname = '127.0.0.1';
const port = 3000;

// eventEmitter.on("end", () => {
//     console.log("done !");
// });
// eventEmitter.emit("end");

eventEmitter.on("end", (number, x) => {
    console.log(`done ${number} ${x} !!`);
});
eventEmitter.emit("end", 2, 3);
eventEmitter.emit("end", 4, 5);
eventEmitter.emit("end", 6, 7);


//path
import path from "node:path";

const notes = "/users/joe/notes.txt";
let name = 'abc';
let file = 'xyz.txt';

path.basename(notes); //notes.txt

let a = path.join(name, file);

console.log(a);

// end path
//FS

let data =  fs.readFileSync('./me.txt', 'utf8') 
console.log(data);
console.log("buoi 2");
//write file
fs.writeFileSync('./me.txt', 'hello world');


hello();
// console.log("Server dang duoc chay o dia chi http://localhost:8080")//hien thi cho de tim

http
    .createServer((request, response) => {
        response.write("<h1>Hello express !</h1>")
        response.write("<h2>Cac ban co on khong ?</h2>")
        response.write("<center><h3><s>Dung co phong bat nha =)))</s></h3></center>")
        response.end();
    })
// .listen(8080)
.listen(port, hostname, () =>{
    console.log(`Server dang chay o dia chi http://${hostname}:${port}/`);
});