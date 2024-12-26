import { useState } from "react";
import { toDoItem } from "./toDoLists";
import MyMenu from "./templates/menu";
import MyFooter from "./templates/footer";

function getDetail (obj) {
    var txt = '';
    txt = "[[ ข้อมูลกิจกรรม ]]\n";
    txt+= `รหัส: ${obj.id}`;
    alert(txt);
}

function ItemDisplay({item}: {item: any}) {
    return (
    <div className="basis-1/4 mt-2 ms-2">
    <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{item.created}</p>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-5" onClick={()=>getDetail(item)}>รายละเอียด</button>
    </a>
    </div>
    );
}

function toDoLists() {
    const [cpStatus, setCpStatus] = useState(null);

    const toDoItems = toDoItem.filter((item) => {
        if (cpStatus === null) return true;
        return item.completed === cpStatus;
    });

    const listItems = toDoItems.map((item, index) =>
        <ItemDisplay key={index} item={item} />
    );

    function handleComplete (cs: any) {
        setCpStatus(cs);
    }

    return (
    <div className="m-0">
        <MyMenu />
        <div className="m-5">
        <h2 className="p-2 mb-5 text-2xl font-bold dark:text-white border-s-8 border-green-400">รายการสิ่งที่ต้องทำ</h2>
        <div className="flex flex-row justify-center">
            <span className="me-2 mb-2 p-3">สถานะดำเนินการ:</span>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleComplete(null)}>All</button>
            <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => handleComplete(true)}>Completed</button>
            <button type="button" className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900" onClick={() => handleComplete(false)}>Incomplete</button>
            </div>
            <div className="flex flex-row">
            {listItems}    
            </div>
        </div>
        <MyFooter />
    </div>
    );
}

export default toDoLists;