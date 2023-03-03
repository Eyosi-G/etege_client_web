import React, { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import InputField from '../components/InputField'
import OrderCompleted from '../components/OrderCompleted'
import OrderSummary from '../components/OrderSummary'
import SuccessDialog from '../components/SuccessDialog'
import { useAppSelector } from '../hooks/redux-hook'
import { useCreateOrderMutation } from '../services/api/orderService'

interface IFormValues {
    email: string,
    firstName: string,
    lastName: string,
    shippingAddress: string,
    city: string,
    appartment?: string,
    phoneNumber: string
}
const CheckoutPage = () => {
    const [openOrderSummary, setOpenOrderSummary] = useState(false)
    const toggleOrderSummary = () => {
        setOpenOrderSummary(!openOrderSummary)
    }
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            email: "",
            firstName: "",
            lastName: "",
            shippingAddress: "",
            city: "",
            appartment: "",
            phoneNumber: ""
        }
    })

    const { products } = useAppSelector(state => state.cart)
    const total = Object.values(products).map(product => product.total).reduce((prev, current) => prev + current, 0)

    const [createOrderHandler, { isSuccess, isLoading }] = useCreateOrderMutation()

    return (
        <div>
            {/* <OrderCompleted /> */}
            <div className='flex justify-center'>
                <div className='w-[87%] '>
                    <div className='md:hidden justify-center py-2 flex'>
                        <h1 className='px-10 font-bold text-lg tracking-widest uppercase mt-9 mb-3'>
                            <span className='p-2 '>Everything</span>
                            <span className='p-2 bg-black text-white'>Addis</span>
                        </h1>
                    </div>
                    <div className='lg:hidden mb-5 '>
                        <div onClick={toggleOrderSummary}  className='hover:cursor-pointer flex justify-between bg-black text-white p-3 text-sm'>
                            <div className='outline-none flex space-x-2 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                                <p>Show Order Summary</p>
                                {openOrderSummary ?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                    </svg>
                                    : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                }
                            </div>
                            <div>{`${total} ETB`}</div>
                        </div>
                        {openOrderSummary && <OrderSummary />}
                    </div>


                    <div className='grid grid-cols-7 gap-2'>
                        <form onSubmit={handleSubmit((data) => {
                            const info = data as IFormValues;

                            createOrderHandler({
                                customerEmail: info.email,
                                customerName: `${info.firstName} ${info.lastName}`,
                                city: info.city,
                                customerPhone: info.phoneNumber,
                                items: Object.values(products).map(({ product, quantity }) => {
                                    return {
                                        productId: product.id,
                                        quantity
                                    }
                                }),
                                shippingAddress: info.shippingAddress,
                                appartment: info.appartment
                            })

                        })} className='col-span-full  lg:col-span-4  p-2 space-y-5'>
                            <div className='hidden md:flex justify-center py-2'>
                                <h1 className='px-10 font-bold text-3xl tracking-widest uppercase mt-9 mb-3'>
                                    <span className='p-2 '>Everything</span>
                                    <span className='p-2 bg-black text-white'>Addis</span>
                                </h1>
                            </div>
                          {isSuccess && <SuccessDialog  message='Congradulation ! Your order is successfuly submited, you will recieve an email to follow the status of your order. '/>}
                            <InputField
                                options={{
                                    required: "Email is required",
                                    pattern: {
                                        message: "Email is invalid",
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    }
                                }}
                                register={register}
                                errors={errors}
                                name='email'
                                title='Email'
                                isRequired={true} />

                            <div className='grid grid-cols-2 gap-2' >
                                <InputField
                                    register={register}
                                    errors={errors}
                                    name='firstName'
                                    title='First Name'
                                    isRequired={true}
                                    options={{
                                        required: "First name is required",
                                    }}
                                />

                                <InputField
                                    register={register}
                                    errors={errors}
                                    name='lastName'
                                    title='Last Name'
                                    isRequired={true}
                                    options={{
                                        required: "Last name is required",
                                    }}
                                />
                            </div>
                            <InputField
                                register={register}
                                errors={errors}
                                name='shippingAddress'
                                title='Shipping Address'
                                isRequired={true}
                                options={{
                                    required: "Shopping address is required",
                                }}
                            />

                            <InputField
                                register={register}
                                errors={errors}
                                name='city'
                                title='City'
                                isRequired={true}
                                options={{
                                    required: "City is required",
                                }}
                            />

                            <InputField
                                register={register}
                                errors={errors}
                                name='appartment'
                                title='Apartment,Suite,etc (Optional)'

                            />

                            <InputField
                                register={register}
                                errors={errors}
                                name='phoneNumber'
                                title='Phone Number'
                                isRequired={true}
                                options={{
                                    required: "Phone is required",
                                    pattern: {
                                        message: "Phone is invalid",
                                        value: /(\+\s*2\s*5\s*1\s*9\s*(([0-9]\s*){8}\s*))|(0\s*9\s*(([0-9]\s*){8}))/
                                    }
                                }}
                            />

                            <div className='mt-3 pb-10 flex justify-between items-center text-sm md:text-base'>
                                <button onClick={() => navigate(-1)} className='outline-none flex space-x-1 md:space-x-2 items-center justify-center '>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-3 h-3 text-black">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                    </svg>
                                    <span className='text-gray-400 tracking-widest '>RETURN TO CART</span>
                                </button>
                                <button className={`outline-none bg-black tracking-widest px-2 py-1 md:px-5 md:py-3 uppercase  text-white rounded-sm disabled:bg-gray-500 `} disabled={isLoading}>
                                    {isLoading ? "Submitting..." : "Submit Order"}
                                </button>
                            </div>
                        </form>
                        <div className='col-span-full hidden lg:block lg:col-span-3  '>
                            <div className='mt-9'>
                                <OrderSummary />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutPage