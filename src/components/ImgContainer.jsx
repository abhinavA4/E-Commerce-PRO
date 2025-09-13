import React from 'react'

export const ImgContainer = () => {
    return (
        <div>
            <img src="pro-3.jpg" className='w-full max-h-160 object-cover'/>
                <ul className='bg-purple-500 text-white flex justify-evenly items-center h-15'>
                    <li>Quality Guarantee</li>
                    <li>Free Shipping Over $30</li>
                    <li>Free Returns</li>
                </ul>
        </div>
    )
}
