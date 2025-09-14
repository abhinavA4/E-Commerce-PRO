import React from 'react'

export const SecNavbar = () => {
    return (
        <div>
            <ul className='flex justify-evenly items-center max-w-4xl mx-auto py-2'>
                <li className='text-purple-900 hover:text-purple-500 cursor-pointer'>Africa</li>
                <li className='text-purple-900 hover:text-purple-500 cursor-pointer'>Antarctica</li>
                <li className='text-purple-900 hover:text-purple-500 cursor-pointer'>Asia</li>
                <li className='text-purple-900 hover:text-purple-500 cursor-pointer'>Australia</li>
                <li className='text-purple-900 hover:text-purple-500 cursor-pointer'>Europe</li>
                <li className='text-purple-900 hover:text-purple-500 cursor-pointer'>North America</li>
                <li className='text-purple-900 hover:text-purple-500 cursor-pointer'>South America</li>
            </ul>
        </div>
    )
}
