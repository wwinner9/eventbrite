import React from 'react';
import {FiHeart, FiUser} from 'react-icons/fi';
import './style.css';



export default function Card(props){

    function handleFavorite(e){
        const t= e.target
        t.style.color='red'

        console.log(t)
    }

    return(
        <div className="cardContent">
            <div className="topCard">
                <img src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F97589470%2F20036478386%2F1%2Foriginal.20200324-152257?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C292%2C3000%2C1500&s=da08c659f2c0b3d6599c3c77e5a2e5b4" alt="card image" />
                <div className="favorite" onClick={handleFavorite}>
                    <FiHeart/>

                </div>
            </div>
            <div className="legendCard">
                <a href="#"  id="eventTittle">How to Improve your memory luanda</a>
                <p><strong id="eventTime"> Mon , sep 13,7:00 PM +43 More events</strong></p>
                <p id="eventType">(Online Event)' Luanda,</p>
                <div className="response">                    
                    <p id="eventPay">Free</p>
                    <p id="eventOwner"><strong>IrisReading.com</strong></p>
                    <div className="followers"  >
                        <FiUser/>
                        <strong>{props.number} followers</strong>
                    </div>
                </div>
            </div>
            
        </div>
    )
}