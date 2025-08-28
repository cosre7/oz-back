import testFS from "./hello/fs.js";
import hello from "./hello/hello.js";
import TxtManager from "./hello/TxtManager.js";
import logMessage from "./homework/logger.js";

// testFS();
// hello();
// TxtManager.makeTxtFile("test.txt", "hello world3", true);
// TxtManager.readTxtFile("test.txt");

// 2025.08.28 day45 로거 만들기
// logMessage("첫번째 로그메시지");
// logMessage("애플리케이션이 시작되었습니다.");
logMessage("두번째 로그메시지");
logMessage("애플리케이션이 실행중입니다.");

console.log("로그 메시지 저장 완료");
