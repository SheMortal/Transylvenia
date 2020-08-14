import React, { Component } from 'react';
import { FaParking, FaSwimmingPool } from "react-icons/fa";
import {GiShamblingZombie, GiWitchFlight} from "react-icons/gi";
import Title from './Title';
export default class services extends Component {
    state = {
        services: [
            {
                icon: <FaParking />,
                title: "free parking",
                info: 'Free private parking is possible in the woods'
            },
            {
                icon: <GiShamblingZombie />,
                title: "Luggage help",
                info: 'Zombies to help carry your luggage to your room'
            },
            {
                icon: <GiWitchFlight />,
                title: "Housekeeping",
                info: 'If your wolf pup has an accident, housekeeping will clean up with magic'
            },
            {
                icon: <FaSwimmingPool />,
                title: "Pool and view",
                info: '24/7 Swimming pool'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='services' />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <artitle Key={index} className="services">
                       <span>{item.icon}</span> 
                       <h6>{item.title}</h6>
                       <p>{item.info}</p>
                        </artitle>
            })}
                </div>

            </section>
        );
    }
}
