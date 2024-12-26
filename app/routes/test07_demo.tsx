import { useState } from "react";

export default function MyCardForm() {
    const [myName, setMyName] = useState('');
    const [myActive, setMyActive] = useState(true);
    const [myMajor, setMajor] = useState('');
    const [myTemplate, setMyTemplate] = useState('');
    const [myAddress, setMyAddress] = useState('');

    function handleSubmit(e) {
      e.preventDefault();
  
      const form = e.target;
      const formData = new FormData(form);
  
      const formJson = Object.fromEntries(formData.entries());
      console.log(formJson);
    }
  
    return (
    <div className="m-5">
        <form method="post" onSubmit={handleSubmit}>
          <label className="text-lg font-bold">
              การเพิ่มข้อมูลนามบัตร
          </label><hr />
          <label>
            ชื่อ-สกุล: <input name="myName" defaultValue="" className="border border-blue-200" onChange={(e) => setMyName(e.target.value)} />
          </label><br />
          <label>
            สถานะของบัตร: <input type="checkbox" name="myActive" defaultChecked={true} onChange={(e) => setMyActive(e.target.checked)} />
          </label>
          <p>
          สาขาวิชา:<br />
          <label className="m-2"><input type="radio" name="myMajor" value="IT" onChange={(e) => setMajor(e.target.value)} /> เทคโนโลยีสารสนเทศ</label>
          <label className="m-2"><input type="radio" name="myMajor" value="CS" onChange={(e) => setMajor(e.target.value)} /> วิทยาการคอมพิวเตอร์</label>
          <label className="m-2"><input type="radio" name="myMajor" value="DBI" onChange={(e) => setMajor(e.target.value)} /> นวัตกรรมธุรกิจดิจิทัล</label>
          </p>
          <p>
            เลือกรูปแบบนามบัตร:
            <select
            value={myTemplate} // ควบคุมการเลือกข้อมูลให้ตรงกับตัวแปรสเตท
            onChange={e => setMyTemplate(e.target.value)} // อัปเดตตัวแปรเสตท
            >
                <option value="">เลือกรูปแบบ</option>
                <option value="bg-red-700">Apple</option>
                <option value="bg-yellow-300">Banana</option>
                <option value="bg-orange-400">Orange</option>
            </select>
        </p>
        <p>
          <label>
          ติดต่อ:<br />
          <textarea
            name="myAddress"
            rows={4}
            cols={40}
            className="border border-blue-200"
            value={myAddress} // ควบคุมค่าของ input ให้ตรงกับตัวแปรสเตท
            onChange={e => setMyAddress(e.target.value)} // อัปเดตตัวแปรเสตท
          />
          </label>
        </p>
        <hr />
        <button type="reset" className="bg-green-300 m-2 p-2">เคลียร์ฟอร์ม</button>
        <button type="submit" className="bg-red-300 m-2 p-2">บันทึกฟอร์ม</button>
        <hr />
        <label className="text-lg font-bold">ข้อมูลนามบัตร</label><hr />
        <p>นามบัตร: { myName !== '' ? <>คุณ {myName}</> : <>กรุณากรอกชื่อ-สกุล</> }</p>
        <p>สถานะบัตร: { myActive ? <>เปิดใช้งาน</> : <>ยังไม่เปิดใช้งาน</> }</p>
        <p>สาขาวิชา: { myMajor !== '' ? myMajor : <>กรุณาเลือกสาขาวิชา</> }</p>
        <p>ที่อยู่: { myAddress !== '' ? myAddress : <>กรุณาระบุที่อยู่</> }</p>
          รูปแบบนามบัตร: 
          { 
            myTemplate !== '' ?
            <div className={"shadow box-border h-32 w-52 p-4 border-4 " + myTemplate}></div> : 
	        <div>กรุณาเลือกรูปแบบนามบัตร</div>
          }
        </form>
    </div>);  

  }
