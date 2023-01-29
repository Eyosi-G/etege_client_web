import React from 'react'

const HomeSection = () => {
    // const { height } = useWindowDimension()
    // const percentHeight = (height * 20)/ 100
    return (
        <div className={`mx-10 my-10 mt-14 grid grid-cols-2 `}>
            <div className='col-span-full order-2 md:col-span-1 md:order-1 bg-black flex flex-col items-center justify-center text-white p-10 '>
                <h1 className='text-2xl font-bold md:text-4xl text-center '>Timeless Wardrobe Collections</h1>
                <div className='text-justify md:text-center mt-5'>
                    We offer a collection of wardrobe essentials that will never go out of style and help you make the most out of your closet
                </div>
            </div>
            <img className='col-span-full order-1 md:col-span-1 md:order-2  h-full w-full object-cover items-center object-top' src="http://localhost:5000/public/8dd601f8-9633-4b9a-b423-ca5cc3383eec.png" />

        </div>
    )
}

export default HomeSection