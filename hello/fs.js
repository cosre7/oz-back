import fs from "fs";
import os from "os";

function testFS() {
    console.log("fs START");

    // os 모듈
    // console.log(os.tmpdir());
    // console.log(os.freemem());
    // console.log(os.homedir());
    // console.log(os.hostname());
    // console.log(os.platform());
    // console.log(os.release());
    // console.log(os.tmpdir());
    // console.log(os.type());
    // console.log(os.version());

    fs.writeFileSync("test.txt", "hello world");
    const data = fs.readFileSync("test.txt", "utf8");
    console.log(data);
    console.log("fs END");
}

export default testFS;
