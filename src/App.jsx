import React, { useState } from "react";
import "./App.css";

function App() {
  // State สำหรับเก็บข้อความ Greeting Message และข้อความใน Input
  const [greeting, setGreeting] = useState("Greeting Message");
  const [newGreeting, setNewGreeting] = useState("");

  // ฟังก์ชันจัดการเมื่อข้อความใน Input เปลี่ยน
  function handleInputChange(event) {
    const value = event.target.value; // ดึงค่าที่พิมพ์ใน Input
    setNewGreeting(value); // อัปเดต State newGreeting ด้วยค่าที่พิมพ์
  }

  // ฟังก์ชันจัดการเมื่อกดปุ่ม "Update text"
  function handleUpdateText() {
    setGreeting(newGreeting); // อัปเดตข้อความในกล่อง Greeting Message
  }

// ลองทำเสริม ตัวปุ่ม Enter
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleUpdateText(); // เรียกฟังก์ชัน handleUpdateText เมื่อกดปุ่ม Enter
    }
  }

  return (
    <div className="App">
      {/* กล่องแสดง Greeting Message */}
      <div className="greeting-container">{greeting}</div>

      {/* Input สำหรับใส่ข้อความใหม่ */}
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={newGreeting} // เชื่อม State กับ Input
          onChange={function (event) {
            handleInputChange(event); // เรียกฟังก์ชัน handleInputChange เมื่อ Input เปลี่ยน
          }}
          onKeyDown={function (event) {
            handleKeyPress(event); // เรียกฟังก์ชัน handleKeyPress เมื่อกดปุ่ม
          }}
        />
      </div>

      {/* ปุ่ม Update Text */}
      <div className="buttons">
        <button onClick={function () {
          handleUpdateText(); // เรียกฟังก์ชัน handleUpdateText เมื่อกดปุ่ม
        }}>
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
