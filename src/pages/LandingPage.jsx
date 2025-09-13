import React from 'react'
import { Navbar } from '../components/Navbar'
import { SecNavbar } from '../components/SecNavbar'
import { ImgContainer } from '../components/ImgContainer'

export const LandingPage = () => {
    return (
        <div className='pb-20'>
            <Navbar/>
            <SecNavbar/>
            <ImgContainer/>
        </div>
    )
}
