import React from 'react'

export const SecNavbar = () => {
    return (
        <div>
            <ul className='flex justify-evenly items-center max-w-4xl mx-auto py-2'>
                <li className='text-purple-900 hover:text-purple-500 cursor-pointer'>Military</li>
                <li className='text-purple-900 hover:text-purple-500 cursor-pointer'>Architecture</li>
                <li className='text-purple-900 hover:text-purple-500 cursor-pointer'>Symbols</li>
                <li className='text-purple-900 hover:text-purple-500 cursor-pointer'>High-Resolution</li>
                <li className='text-purple-900 hover:text-purple-500 cursor-pointer'>AI-Image</li>
                <li className='text-purple-900 hover:text-purple-500 cursor-pointer'>X-Banner</li>
                <li className='text-purple-900 hover:text-purple-500 cursor-pointer'>Meme-BaseImage</li>
            </ul>
        </div>
    )
}
