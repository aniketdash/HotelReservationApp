import React from 'react';
import Hero from '../componenets/Hero';
import Banner from '../componenets/Banner';
import {Link} from 'react-router-dom';
import RoomContainer from "../componenets/RoomContainer";

const  Rooms = () => {
    return (
        <>
       <Hero hero="roomsHero">
           <Banner title="our rooms">
               <Link to='/' className="btn-primary">
                   return home
               </Link>
           </Banner>
       </Hero>
       <RoomContainer />
       </>
    )
}

export default Rooms
