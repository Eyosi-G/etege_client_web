import React from 'react'
interface IProps {
    size: string;
    isSelected?: boolean;
}
const SizeButton = (props: IProps) => {
    return (
        <div className={`h-9 w-9 sm:h-12 sm:w-12 sm:text-sm text-xs uppercase  font-mono rounded-full border flex justify-center items-center border-black ${props.isSelected && "bg-black text-white"}`}>
            {props.size}
        </div>
    )
}

export default SizeButton