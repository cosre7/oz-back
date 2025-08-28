import fs from "fs";
import path from "path";
const RESULT_DIR = "./results";

function makeResultsDir() {
    fs.mkdirSync(RESULT_DIR);
}

function makeTxtFile(fileName, content, isDateNate) {
    console.log(fileName, content);
    try {
        if (!fs.existsSync(RESULT_DIR)) {
            makeResultsDir();
        }
        if (isDateNate) {
            fileName = new Date().toISOString().split("T")[0] + "_" + fileName;
        }
        const filePath = path.join(RESULT_DIR, fileName);
        if (fs.existsSync(filePath)) {
            // 기존에 파일이 존재하면 아래에 내용 추가
            const originContent = fs.readFileSync(filePath, "utf8");
            console.log(originContent);
            const newContent = originContent + "\n" + content;
            fs.writeFileSync(filePath, newContent);
        } else {
            // 기존에 파일이 존재하지 않으면 새 파일 생성
            fs.writeFileSync(filePath, content);
        }
    } catch (err) {
        console.error(err);
    }
}

function readTxtFile(fileName) {
    console.log(fileName);
    const filePath = path.join(RESULT_DIR, fileName);
    const content = fs.readFileSync(filePath, "utf8");
    console.log(content);
}

const txtManager = {
    makeResultsDir,
    readTxtFile,
    makeTxtFile,
};

export default txtManager;
