import React from 'react'

export const Cardd = ({nameTag="ARTWORK-99" , priceTag="$99" , imgTag = "pro-1.jpg"}) => {
    return (
        <div className=''>
            <div className=''>
                <img src={imgTag} className='w-full pb-2 rounded-xl' />
                <h3>{nameTag}</h3>
                <h3>{priceTag}</h3>
            </div>
        </div>
    )
}
