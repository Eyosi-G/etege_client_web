import React from 'react'

interface IProps {
    title: string;
    order: number
}
const ProgressCircle = (props: IProps) => {
    return (
        <div className='flex flex-col items-center relative z-10  bg-white'>
            <div className='h-10 w-10 md:h-16 md:w-16 rounded-full bg-black text-white flex items-center justify-center border border-black text-sm md:text-lg font-bold'>{props.order
            }
            </div>
            <div className='text-sm mt-2 md:mt-4'>{props.title}</div>
        </div>
    )
}

export default ProgressCircle