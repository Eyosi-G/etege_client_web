import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import Description from './Description'
import SizeAndFit from './SizeAndFit'
import 'react-quill/dist/quill.bubble.css';

interface IProps {
    description: string;
}
const ProductDetail = (props: IProps) => {
    const [value, setValue] = useState("")

    useEffect(() => {
        setValue(props.description)
    }, [props.description])

    return (
        <div className='mt-10 '>
            <div className='relative'>
                <div className='flex space-x-4 tracking-widest'>
                    <div>DESCRIPTION</div>
                </div>
            </div>
            <div>
                <ReactQuill readOnly={true} theme='bubble' value={value} />
            </div>
        </div>
    )
}

export default ProductDetail