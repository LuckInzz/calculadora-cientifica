import React from "react";

function Button ({value, type, onClick}) {

    const getButtonStyles = () => {
        let bgColor, borderColor

        switch(type){
            case 'black-buttons':
                return 'bg-gray-600 border-gray-700 h-7 w-10 md:w-14 mb-2 mt-2 text-[10px] md:text-[13px]'
            case 'green-buttons':
                return 'bg-lime-500 border-lime-600 h-10 mb-2 text-[13px] md:text-[16px]'
            case 'gray-buttons':
                return 'bg-gray-400 border-gray-500 h-10 mb-2 text-[13px] md:text-[16px]'
        }
    }

    return (
        <button className={`${getButtonStyles()} text-white p-1 rounded-lg 
        cursor-pointer border-b-3 border-r-3 transition-all duration-70 
        active:border-b-0 active:border-r-0 shadow-[-4px_-4px_8px_rgba(0,0,0,0.6)]`}
        onClick={() => onClick(value)}>{value}</button>
    )
}

export default Button