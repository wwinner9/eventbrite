import React from "react";
import './style.css'
import { BiPlus,BiSearch,BiUser} from 'react-icons/bi' 
import {IoTicketOutline,IoHeartOutline,ioplus, IoSearch} from 'react-icons/io5'


export default function NavBar(){
    return(
        <div id="navContent">
            <div className="leftHeader">
                <h4>eventbrite</h4>
                <div id="searchIcon"><BiSearch size='22' /></div><input type="search" name="search" id="search" placeholder="Search Events" />
            </div>

            <div className="rightHeader">
                <ul>                    
                    <li id="firstLi"><BiPlus size={25}/> <a href="#" >Create any Event</a></li>
                    <li><IoHeartOutline size={25}/> <a href="#">Likes</a></li>
                    <li><IoTicketOutline  size={25}/> <a href="#">Tickets</a></li> 
                </ul>

                <div className="userSide">
                    <div className="avatar">
                        <img src="https://i1.sndcdn.com/avatars-000328724656-5o7u72-t500x500.jpg" alt="avatar photo" id="avatar"/>
                    </div>
                    <p><strong>Fernando Wwinner</strong></p>
                </div>
            </div>
            <div className="hideUserTools">
                <li> <a href="#"><IoSearch size={25}/></a></li>
                <li> <a href="#"><BiUser  size={25}/></a></li> 
            </div>

        </div>
    );
}