import React from "react";

function Display ({exp, result}) {
    return (
        <div className="bg-green-100 rounded-lg mt-10 h-32 p-3 flex flex-col justify-between
        shadow-[inset_0_0_8px_rgba(0,0,0,0.6)] shadow-black text-xl">
            <p className="pl-2 text-left truncate">{exp}</p>
            <p className="pr-2 text-right">{result}</p>
        </div>
    )
}

export default Display