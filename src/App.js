import React from 'react' 
import './App.css'; 
import NavBar from './components/navbar/navbar'
import Info from './components/Info/info'
import Card from './components/Card/card'
import { GoChevronDown } from 'react-icons/go';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

//import eventApi from './services/eventbrite';
import UI from './services/ui';





function App() {

  //Initialize the AOS Library 
  AOS.init()

  //Instaciate the EventBrite Class 
  //const evbApi= new eventApi()

  const ui = new UI(); 

  return (
    <div id="app">
      <header>
        <NavBar/>
      </header>
    
      <section id="banner">
          <div id="blackS">
          <div className="legend">
            <div data-aos="fade-right" className="topLetter">
              <h1>NOW</h1>
              <h2>IS</h2>
            </div>

            <div data-aos="fade-left" className="bottomLetter">
              <h1>YOUR</h1>
              <h2>TIME</h2>
            </div>
            <div className="btnDivv">
            <button id="btnInfo">Find your next event</button>
          </div> 
          </div>
          
          </div>
      </section>

      <article>
        <Info/>
      </article>

      <section id="eventContainer">
        <div className="top">
            <h1>Popular in </h1>
            <p><GoChevronDown size={37}/></p>
            <h1>Luanda</h1>
        </div>

        <nav>
          <ul>
            <li><a href="#"></a>All</li>
            <li><a href="#"></a>For you</li>
            <li><a href="#"></a>Online</li>
            <li><a href="#"></a>Today</li>
            <li><a href="#"></a>This weekend</li>
            <li><a href="#"></a>Free</li>
            <li><a href="#"></a>Music</li>
            <li><a href="#"></a>Food & Drink</li>
            <li><a href="#"></a>Charity & Causes</li>
          </ul>
        </nav>

        <div id="cardContainer">
          <h2 id="tittle" >Events in Luanda</h2>
          <ul> 
            <li><Card/> </li>
            <li><Card/> </li>
            <li><Card/> </li>
            <li><Card/> </li>
            <li><Card/> </li>
            <li><Card/> </li>
            <li><Card/> </li>
            <li><Card/> </li>
          </ul>
          
        </div>
        
        
      </section>

      <section id="moreEvents"> 
        <div data-aos="fade-right" className="moreCardContent">
          <h2>More Events</h2>
          <ul>
            <li><Card/></li>
            <li><Card/></li>
            <li><Card/></li>
            <li><Card/></li>
          </ul>
        </div>

        <div className="btnDiv">
          <button id="btnMore">See more</button>

        </div>
        
      </section>

      <footer>

        <p>© 2021 Eventbrite</p>

        <nav>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Carrers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Investor</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">CA Privacy Notices</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>
        </nav>

        <div className="usa">
          <p>United State</p>
          <GoChevronDown/>
        </div>
      </footer>

    </div>

  );
}

export default App;
