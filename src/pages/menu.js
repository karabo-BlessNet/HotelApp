import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

export default function Menu() {
    return (
        <>
        <Hero hero="defaultHero">
        </Hero>
        <Banner title="This is menu" subtitle="xxxxxxxxxx">
                <Link to="/rooms" className="btn btn-primary">
                   Click to view our Rooms
                </Link>
        </Banner>
        
        <FeaturedRooms/>
        <Services/> 
        </>

    )
}
