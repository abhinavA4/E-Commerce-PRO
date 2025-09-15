import React from 'react'

export const SecNavbar = () => {
    return (
        <div>
            <ul className='flex justify-evenly items-center max-w-7xl mx-auto py-2'>
                <li className='text-purple-900 hover:text-purple-500 cursor-pointer'>High-Resolution</li>
                <li className='text-purple-900 hover:text-purple-500 cursor-pointer'>Military</li>
                <li className='text-purple-900 hover:text-purple-500 cursor-pointer'>Symbols</li>
                <li className='text-purple-900 hover:text-purple-500 
                cursor-pointer'>Cars</li>
                <li className='text-purple-900 hover:text-purple-500 cursor-pointer'>Architecture</li>
                <li className='text-purple-900 hover:text-purple-500 
                cursor-pointer'>Maps</li>
                <li className='text-purple-900 hover:text-purple-500 cursor-pointer'>AI-Image</li>
                <li className='text-purple-900 hover:text-purple-500 cursor-pointer'>X-Banners</li>
                <li className='text-purple-900 hover:text-purple-500 cursor-pointer'>Meme-BaseImage</li>
            </ul>
        </div>
    )
}
