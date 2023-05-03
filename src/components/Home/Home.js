import './Home.scss';
import React, { useEffect } from 'react';
import orphelio from '../../images/pandaCode.png';
import { useState } from 'react';
import Spinner from '../Spinner/Spinner';
import voyage from '../../images/voyage.png';
import logo from '../../images/logo.svg';
import Footer from '../Footer/Footer';


const Home = () => {
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setSpinner(false);
        }, 1400);
    },[])

    return (
        spinner ? <Spinner/> :
        <div className="home">

            <div className="home-title">
                <div className='home-profil-logo'>
                    <img className='home-logo' src={logo} alt="Panda"/>
                </div>
                <p className='home-subtitle javascript'>
                    Hello World !
                </p>
                <img className='home-voyage' alt='avion' src={voyage}/>
            </div>
            

            <div className="home-content">

                <p className='home-text'>
                    Welcom<span className='green'>e</span>, <br/>
                     <span className='green'>I</span>'m <span className='green'>O</span>rphelio Bourebi<span className='green'>a</span>,<br/> 
                    <span className='green'>F</span>rench  <span className='green'>W</span>eb <span className='green'>D</span>eveloper, <br/>
                    <span className='green'>F</span>ull Stack <span className='javascript'> JavaScript</span> .
                </p>


                <div className='home-profil'>
                    <img className='home-pic' src={orphelio} alt="Panda"/>
                </div>

                
            </div>
            <>
            <Footer/>
            </>
        </div>
        
    )
};

export default Home;
