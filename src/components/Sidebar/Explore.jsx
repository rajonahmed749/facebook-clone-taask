import React from 'react';
import { FiSave } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { BsFillFileEarmarkPostFill, BsCalendar4Event } from "react-icons/bs";

function Explore() {
    const Informations = [
        { title: 'Saved Post', icon: <FiSave /> },
        { title: 'People', icon: <AiOutlineUser /> },
        { title: 'Groups', icon: <HiUserGroup /> },
        { title: 'Pages', icon: <BsFillFileEarmarkPostFill /> },
        { title: 'Events', icon: <BsCalendar4Event /> }
    ]

    return (
        <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '8px', marginTop: '7px' }}>
            <h5 style={{ fontWeight: 'bold' }}>Explore</h5>
            {
                Informations.map((info) => {
                    return (
                        <div style={{ marginTop: '1px' }}>
                            <p>{info.icon} {info.title}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Explore