import React, { Component } from 'react';
import Hero from "../components/Hero";
import Banner from "../components/banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";

class Rooms extends Component {
    render() {
        return (
            <>
            <Hero hero="roomsHero">
                <Banner title="our rooms">
                <Link to='/' className="btn-primary">
                return home
                </Link>
                </Banner>
            </Hero>
            <RoomsContainer></RoomsContainer>
            </>
        );
    }
}

export default Rooms;
