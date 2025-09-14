import React from 'react'

export const Cardd = ({nameTag="ARTWORK-99" , imgTag = "pro-1.jpg" , altTag = "Flag"}) => {
    return (
        <div>
            <div>
                <img src={`${nameTag}.svg`} alt={nameTag} loading="lazy" className='w-full h-60 object-cover border-2'/>
                <h1 className='text-center text-xl uppercase cursor-pointer hover:text-[#6611f5]'>{nameTag}</h1>
            </div>
        </div> 
    )
}
