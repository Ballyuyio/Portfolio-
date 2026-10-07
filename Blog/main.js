// ========================================================
// Assignment 5: JavaScript Post and Reply
// ให้นักศึกษาเขียนโค้ด JavaScript เพื่อจัดการการ Post และ Clear ข้อความ
// ========================================================

window.onload = setupFunction;
var id = "67120501057"
let postCount = 1;
var clickButton = document.getElementById("Post");
clickButton.onclick = postFunction;

function setupFunction() {
    // ให้นักศึกษากำหนดชื่อหัวข้อของหน้าเว็บที่ id="top"
    alert(id);
    document.getElementById("top").innerText = "Patnawan";
   
}

// สร้างตัวแปรนับลำดับการโพสต์ชื่อว่า postCount และกำหนดค่าเริ่มต้นเป็น 0


function postFunction() {
    // TODO: ให้นักศึกษาเขียนโค้ดในส่วนนี้
    // 1. อ่านค่าข้อความจาก textarea (id="message")
    let messageInput = document.getElementById("message").value;
    let messageText = messageInput;

    if (messageInput === "")
    {
        alert("กรุณาใส่ข้อความ");
        return;
    }
    // 2. นำข้อความไปใส่ในแต่ละกล่องตามลำดับ:
    //    - ครั้งที่ 1 ใส่ใน id="topic"
    if (postCount ===1)
    {
        document.getElementById("topic").innerText = messageText;
        
    }
    else if(postCount ===2)
    {
        document.getElementById("reply1").innerText = messageText;
    }
    else if(postCount ===3)
    {
        document.getElementById("reply2").innerText = messageText;
    }
    else if (postCount ===4)
    {
        alert("โพสครบ 3 ข้อความ");
         document.getElementById("topic").innerText = "";
         document.getElementById("reply1").innerText = "";
          document.getElementById("reply2").innerText = "";
          postCount =0;
        
    }

    messageInput.value = "";
    postCount++;
    //    - ครั้งที่ 2 ใส่ใน id="reply1"
    //    - ครั้งที่ 3 ใส่ใน id="reply2"
    // 3. เคลียร์ข้อความใน textarea ให้ว่างหลังจากโพสต์
    // 4. เพิ่มค่า postCount
}

function clearFunction() {
    document.getElementById("topic").innerText = "";
    document.getElementById("reply1").innerText ="";
    document.getElementById("reply2").innerText ="";

    postCount = 1;
    return;
    // TODO: ให้นักศึกษาเขียนโค้ดในส่วนนี้
    // 1. ล้างข้อความใน id="topic", id="reply1", id="reply2"
    // 2. ล้างข้อความใน textarea (id="message")
    // 3. รีเซ็ตตัวแปร postCount กลับเป็นค่าเริ่มต้น
}
