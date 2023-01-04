import React from 'react'


interface IProps {
    title: string;
    children: React.ReactNode
    toggleOpen: () => void;
    open: boolean;
    spanTwo: boolean
}
const FooterContent = (props: IProps) => {
    return (
        <div className={`col-span-full my-2  ${props.spanTwo ? "md:col-span-2" : "md:col-span-1"}`}>
            <div className='flex justify-between'>
                <div className='font-normal tracking-wider'>{props.title}</div>
                <div className='md:hidden' onClick={() => props.toggleOpen()}>
                    {
                        props.open ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                    }
                </div>
            </div>
            <div className='hidden md:block'>
                <div className='font-thin mt-2 space-y-2 '>{props.children}</div>
            </div>
            <div className='md:hidden'>
                {props.open && <div className='font-thin text-sm mt-2 space-y-2'>{props.children}</div>}
            </div>
        </div>
    )
}

export default FooterContent