import fs from "node:fs";
import EventEmitter from "node:events";
import os from "node:os";
import http from "node:http";

class Logger extends EventEmitter {
    log(message) {
        console.log(message);
        this.emit('task complete !');
    }
}


const logger = new Logger();

const hostname = '127.0.0.1';
const port = 3000;

// logger.on('print computer\'s infos', (arg) => {
//     console.log('Completed task !')
// });

var infomation = {
    OSType: os.type(),
    Platform: os.platform(),
    RAM: os.totalmem(),
    USEDRAM: os.totalmem() - os.freemem(),
    CPU: os.cpus(),
};


fs.writeFile('D:\\OpenS\\homework.txt', JSON.stringify(infomation, null, 2), (err) => {
    if (err){
        console.log(err);
        return;
    }
    // logger.log('print computer\'s infos');
    logger.log('Task complete, writting file success !');
});

logger.on('task complete!', () =>{
    console.log('Completed task !');
});

http
    .createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(JSON.stringify(infomation, null, 2));
        res.end();
    })
.listen(port, hostname, () =>{
    console.log(`Server đang chạy ở địa chỉ http://${hostname}:${port}/`);
});

