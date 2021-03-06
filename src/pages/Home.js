import React from 'react';
import Hero from "../componenets/Hero";
import Banner from '../componenets/Banner';
import {Link} from 'react-router-dom';
import Services from '../componenets/Services';
import FeaturedRooms from '../componenets/FeaturedRooms';


export default function Home() {
    return (
        <>
        <Hero>
            <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
                <Link to="/rooms" className="btn-primary">
                    our rooms
                </Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
        
        </>
    )
}

