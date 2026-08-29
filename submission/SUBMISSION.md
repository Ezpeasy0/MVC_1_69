# SUBMISSION \- Exit Exam MVC 1/2569 (เสาร์เช้า)

## 1\. วิธีเปิดโปรแกรม

- ภาษา/เฟรมเวิร์ก: JavaScript (React \+ Vite) บน Node.js  
- Entry point / คำสั่งเปิดโปรแกรม:

  1\. เปิด Terminal ในโฟลเดอร์โปรเจกต์  
  2\. รันคำสั่ง \`npm install\` เพื่อติดตั้ง dependencies  
  3\. รันคำสั่ง \`npm run dev\` เพื่อเริ่มต้นการทำงาน  
  4\. เปิดเว็บเบราว์เซอร์ไปที่ \`http://localhost:5173\`

- หมายเหตุที่จำเป็น (ถ้ามี): \-

## 2\. ตารางเชื่อมโยง Requirements

| Requirement | Model / Domain | Controller / Action | View / Screen |
| :---- | :---- | :---- | :---- |
| R1 | talentModel.js  | useTalentController.js  | App.jsx, JudgeSelector.jsx, ContestantList.jsx, SummaryView.jsx  |
| R2 | talentModel.vote()  | handleVote()  | JudgeSelector.jsx, ContestantList.jsx  |
| R3 | talentModel.getContestantStatus()  | getContestantList(), refreshData()  | ContestantList.jsx, SummaryView.jsx  |
| R4 | talentModel.useGoldenBuzzer()  | handleGoldenBuzzer()  | ContestantList.jsx, SummaryView.jsx  |
| R5 | talentModel  | errorMessage, try-catch  | SummaryView.jsx, App.jsx  |

## 3\. ผลการทดสอบ

| กรณี | ผ่าน/ไม่ผ่าน | หมายเหตุ (เฉพาะที่จำเป็น) |
| :---- | :---- | :---- |
| T1 | ผ่าน | \- |
| T2 | ผ่าน | \- |
| T3 | ผ่าน | \- |
| T4 | ผ่าน | \- |
| T5 | ผ่าน | \- |
| T6 | ผ่าน | \- |

## 4\. ความแตกต่างระหว่างแบบที่ออกกับโปรแกรมจริง (ถ้ามี)

ระบุไม่เกิน 3 ข้อ 1\. 2\. 3\.

1. ใช้ React Custom Hook (\`useTalentController\`) ทำหน้าที่เป็น Controller แทน Controller Class   
2. คำนวณผลสรุปแบบ Dynamic จาก Array ข้อมูล ณ เวลาที่ร้องขอ 

## 5\. บันทึกการใช้ Generative AI

หากไม่ได้ใช้ ให้ระบุ **ไม่ได้ใช้ Generative AI**

| เวลาโดยประมาณ | เครื่องมือ | ใช้เพื่ออะไร | นำคำแนะนำไปใช้อย่างไร |
| :---- | :---- | :---- | :---- |
| 9.50 | gemini | สอบถามแนวคิดการจัดโครงสร้าง MVC ใน React และวิธีใช้ Custom Hook  | นำแนวคิดมาออกแบบและแบ่งไฟล์ models, controllers, views  |
| 10.30 | gemini | สอบถามไวยากรณ์ Syntax ของ JavaScript Array Methods  | นำมาเขียนเงื่อนไขการเช็คคะแนนใน Model  |
| 11.10 | gemini | สอบถามวิธีแก้ไขข้อผิดพลาดของการตรวจสอบเงื่อนไข State ซ้ำ  | นำแนวทางดีบักมาไล่ตรวจสอบและแก้ Logic ในไฟล์ Model  |

