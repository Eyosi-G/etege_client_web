import React, { useState } from 'react'
import FooterContent from './FooterContent';
export enum OpenType {
    contact,
    support,
    company
}

const Footer = () => {

    const [contactOpen, setContactOpen] = useState(false)
    const [supportOpen, setSupportOpen] = useState(false)
    const [companyOpen, setCompanyOpen] = useState(false)


    const toggleOpen = (type: OpenType) => {
        switch (type) {
            case OpenType.company:
                setCompanyOpen(!companyOpen)
                break;
            case OpenType.support:
                setSupportOpen(!supportOpen)
                break;
            case OpenType.contact:
                setContactOpen(!contactOpen)
                break
        }
    }

    const first =
        <div className='flex space-x-4 items-center'>
            <div>
                <img src="/icons/shipping.png" className='w-14' />
            </div>
            <div>
                <div className='text-lg'>Free Shipping</div>
                <div className='capitalize font-thin text-sm'>For all Addis Ababa orders over 3000 ETB</div>
            </div>
        </div>;

    const second =
        <div className='flex space-x-4 items-center'>
            <div>
                <img src="/icons/envelope.png" className='w-14' />
            </div>
            <div>
                <div className='text-lg'>Support</div>
                <div className='capitalize font-thin text-sm'>Questions? We're happy to help!</div>
            </div>
        </div>;


    const third =
        <div className='flex space-x-4 items-center'>
            <div>
                <img src="/icons/quality.png" className='w-14' />
            </div>
            <div>
                <div className='text-lg'>Quality Assured</div>
                <div className='capitalize font-thin text-sm'>Good quality products</div>
            </div>
        </div>;


    return (
        <div className='mt-10'>
            <div className='flex justify-center  bg-gray-100'>
                <div className='grid grid-cols-1 md:grid-cols-3  p-10 gap-10'>
                    {first}
                    {second}
                    {third}
                </div>
            </div>
            <div className='bg-gray-800 py-5 text-white'>
                <div className='grid grid-cols-5 p-2'>
                    <div className='flex justify-center col-span-full md:col-span-1'>
                        <div className=''>
                            <h1 className='text-3xl text-center relative w-fit text-white'>
                                etege
                                <div className='absolute -bottom-2 flex space-x-1 ml-2'>
                                    <div className='h-1 w-2 rounded-full' style={{ backgroundColor: "#39FF14" }}></div>
                                    <div className='h-1 w-5 rounded-full' style={{ backgroundColor: "#39FF14" }}></div>
                                </div>
                            </h1>
                        </div>
                    </div>
                    <FooterContent spanTwo={false} open={supportOpen} toggleOpen={() => toggleOpen(OpenType.support)} title='Support'>
                        <div>Privacy Policy</div>
                        <div>Quality Assurance</div>
                        <div>Terms of Service</div>
                    </FooterContent>
                    <FooterContent spanTwo={false} open={companyOpen} toggleOpen={() => toggleOpen(OpenType.company)} title='Company'>
                        <div>Our Story</div>
                        <div>Careers</div>
                    </FooterContent>
                    <FooterContent spanTwo={true} open={contactOpen} toggleOpen={() => toggleOpen(OpenType.contact)} title='Contact Us'>
                        <div className='flex space-x-2 items-center'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                            </div>
                            <div>08119788311</div>
                        </div>
                        <div className='flex space-x-2 items-center'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                                </svg>
                            </div>
                            <div>minimalofficial@megaperintis.co.ids</div>
                        </div>
                    </FooterContent>
                </div>
            </div>


        </div>
    )
}

export default Footer