import { useState } from "react";
import MyMenu from "./templates/menu";
import MyFooter from "./templates/footer";

function Calculator() {
    const [cntPlu1, setCntPlu1] = useState(0);
    const [cntMul2, setCntMul2] = useState(0);
    const [cntMin2, setCntMin2] = useState(0);

    return (
    <div className="m-0">
        <MyMenu />
        <div className="m-5">
        <h2 className="p-2 mb-5 text-2xl font-bold dark:text-white border-s-8 border-green-400">เครื่องคิดเลขแบบเร็ว</h2>
            <div className="flex flex-row justify-center">
                <p className="w-1/3 flex justify-center text-gray-500 text-8xl dark:text-white">{cntPlu1}</p>
                <p className="w-1/3 flex justify-center text-blue-500 text-8xl dark:text-white">{cntMul2}</p>
                <p className="w-1/3 flex justify-center text-green-500 text-8xl dark:text-white">{cntMin2}</p>
            </div>
            <div className="flex flex-row justify-center">
            <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={()=>setCntPlu1(cntPlu1 + 1)}>+1</button>
            <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={()=>setCntMul2(cntPlu1 * 2)}>{cntPlu1}x2</button>
            <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={()=>setCntMin2(cntMul2 - 2)}>{cntPlu1}-2</button>
            </div>
        </div>
        <MyFooter />
    </div>
    );
}

export default Calculator;