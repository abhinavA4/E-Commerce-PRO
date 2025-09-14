import React from 'react'

export const Cardd = ({nameTag="ARTWORK-99" , priceTag="$99" , imgTag = "pro-1.jpg" , altTag = "Flag"}) => {
    return (
        <div>
            <div>
                <img src={imgTag} alt={altTag} loading="lazy" className='w-full h-60 object-cover pb-2'/>
                <h3>{nameTag}</h3>
                <h3>{priceTag}</h3>
            </div>
        </div>
    )
}
