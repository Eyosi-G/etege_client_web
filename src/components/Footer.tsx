import React from 'react'

const Footer = () => {
    const first =
        <div className='flex space-x-2 items-center'>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-9 h-9">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
            </div>
            <div>
                <div className='text-lg'>Free Shipping</div>
                <div className='capitalize font-thin text-sm'>For all Addis Ababa orders over 3000 ETB</div>
            </div>
        </div>;

    const second =
        <div className='flex space-x-2 items-center'>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-9 h-9">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>

            </div>
            <div>
                <div className='text-lg'>SUPPORT</div>
                <div className='capitalize font-thin text-sm'>Questions? We're happy to help!</div>
            </div>
        </div>;


    return (
        <div className='mt-10'>
            <div className='flex justify-center  bg-gray-100'>
                <div className=' grid grid-cols-2 w-2/3 p-10 gap-10'>
                    {first}
                    {second}
                </div>
            </div>
            <div className='bg-gray-800 py-5 text-white'>
                <div className='grid grid-cols-5 '>
                    <div className=''>
                        <div className='flex justify-center pb-4'>
                            <h1 className='text-xl md:text-3xl text-center relative w-fit text-white'>
                                etege
                                <div className='absolute -bottom-2 flex space-x-1 ml-2'>
                                    <div className='h-1 w-2 rounded-full' style={{ backgroundColor: "#39FF14" }}></div>
                                    <div className='h-1 w-5 rounded-full' style={{ backgroundColor: "#39FF14" }}></div>
                                </div>
                            </h1>
                        </div>
                    </div>
                    <div className='tracking-wider'>
                        <div>SUPPORT</div>
                        <div className='font-thin mt-2 space-y-2'>
                            <div>Privacy Policy</div>
                            <div>Quality Assurance</div>
                            <div>Terms of Service</div>
                        </div>
                    </div>
                    <div className='tracking-wider'>
                        <div>COMPANY</div>
                        <div className='font-thin mt-2 space-y-2'>
                            <div>Our Story</div>
                            <div>Careers</div>
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <div>CONTACT US</div>
                        <div className='font-thin mt-2 space-y-2'>
                            <div className='flex space-x-2 items-center'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>

                                </div>
                                <div>08119788311</div>
                            </div>
                            <div className='flex space-x-2 items-center'>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                                    </svg>
                                </div>
                                <div>minimalofficial@megaperintis.co.ids</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Footer