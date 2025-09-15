import React from 'react'
import { Navbar } from '../components/Navbar'
import { SecNavbar } from '../components/SecNavbar'
import { ImgContainer } from '../components/ImgContainer'
import { FlagGallery} from '../components/FlagGallery'
import { Footer } from '../components/Footer'


export const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <SecNavbar />
            <ImgContainer />
            <FlagGallery/>
            <Footer/>
        </div>
    )
}
