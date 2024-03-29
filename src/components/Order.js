import React from 'react'
import moment from 'moment'
import Currency from "react-currency-formatter"
import Image from "next/image"

function Order({id, amount, amountShipping, items, timestamp, name}) {
  return (
    <div>
        <div className='relative border rounded-md'>
            <div className='flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600'>
                <div>
                    <p className='font-bold text-xs uppercase'>
                        Order Placed
                    </p>
                    <p>{moment.unix(timestamp).format("DD MMM YYYY HH:mm:ss")}</p>
                </div>
                <div>
                    <p className='text-xs font-bold uppercase'>Total</p>
                    <p>
                        <Currency quantity={amount} currency="GBP"/>
                    </p>
                </div>
                <p className='text-sm self-end whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500'>{items.length} items</p>
                <p className='absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap'>ORDER #{id}</p>
        
            </div>
            <div className='p-5 sm:p-10'>
                <div className='flex space-x-6 overflow-x-auto'>
                    {name.split(',').map((name) => (
                        <Image src={`/${name}.jpg`}   height={'180'}
                        width={'95'} className=' object-cotain sm:h-32 bg-[#d1c3b3d9] text-center'
                        alt={`${name}`}/>
                    ))}
                </div>
                <div className='flex space-x-6 overflow-x-auto'>
                    {name.split(',').map((name) => (
                        <div className='text-xs w-[95px] mt-2'><p className='uppercase text-center'>{name}</p></div>
                    ))}
                </div>
                

            </div>

        </div>

    </div>
  )
}

export default Order