import { log } from "console";
import fs from "fs";
import path from "path";
const LOG_DIR = "./log";

/**
 * 메시지를 로그 파일에 기록합니다.
 * @param {string} message - 기록할 메시지
 */
function logMessage(message) {
    // 로그 디렉토리가 존재하지 않으면 생성
    if (!fs.existsSync(LOG_DIR)) {
        fs.mkdirSync(LOG_DIR);
    }

    // 파일 이름 생성 (예시: 2025-08-28.log)
    const logFileName = new Date().toISOString().split("T")[0] + ".log";
    const filePath = path.join(LOG_DIR, logFileName);

    // 타임스탬프와 함께 메시지를 로그 파일에 추가
    const timestamp = new Date().toISOString().split(".")[0];
    const logLine = `${timestamp} - ${message}\n`;
    fs.appendFileSync(filePath, logLine);
}

export default logMessage;
