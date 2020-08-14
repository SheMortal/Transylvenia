import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/banner";
import { Link } from "react-router-dom";
import Services from '../components/services';
// import FeaturedRooms from '../components/FeaturedRooms';

export default function Home() {
    return (
        <div className="Home">
            <Hero>
            <Banner title="Hotel Trasylvania" subtitle="NO HUMANS ALLOWED">
                <Link to="/rooms" className="btn-primary">our rooms
                </Link>
            </Banner>
            </Hero>
            <Services></Services>
            {/* <FeaturedRooms></FeaturedRooms> */}
        </div>
    )
}

