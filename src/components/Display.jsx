import React, {useEffect, useRef} from "react";

function Display ({exp, result, caretPos}) {
    const expRef = useRef(null);
    
    const beforeCaret = exp.slice(0, caretPos);
    const afterCaret = exp.slice(caretPos);

    useEffect (() => {
        if(expRef.current) {
            expRef.current.scrollLeft = expRef.current.scrollWidth
        }
    }, [exp, caretPos])

    return (
        <div className="bg-green-100 rounded-lg mt-10 h-32 w-72 md:w-94 p-3
        shadow-[inset_0_0_8px_rgba(0,0,0,0.6)] shadow-black text-xl">
            <div className="bg-green-200 flex flex-col justify-between w-full h-full">
                <div ref={expRef} className="flex items-center text-left min-w-0 overflow-hidden whitespace-nowrap w-full">
                    <span>{beforeCaret}</span>
                    <span className="bg-gray-600 w-px h-5 blink-caret"></span>
                    <span>{afterCaret}</span>
                </div>
                <div>
                    <p className="text-right">{result}</p>
                </div>
            </div>
        </div>
    )
}

export default Display