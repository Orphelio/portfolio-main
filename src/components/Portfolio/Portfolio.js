import './Portfolio.scss';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Spinner from '../Spinner/Spinner';
import panda from '../../images/panda.png';
import Footer from '../Footer/Footer';

const Portfolio = () => {
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setSpinner(false);
        }, 1400);
    },[])

    return (
        spinner ? <Spinner/> :
        <div className="portfolio">

            
               
                <p className='portfolio-subtitle javascript'>
                   Portfolio
                </p>
                
            
            

            <div className="portfolio-content">

            <img className='portfolio-panda' alt='panda' src={panda}/>

                <p className='portfolio-text'>

                
                    Oup<span className='green'>s</span>, <br/>
                     <span className='green'>S</span>o <span className='green'>S</span>orry<span className='green'></span>,<br/> 
                    <span className='green'>M</span>y  <span className='green'>W</span>orks <span className='green'>I</span>s <br/>
                    <span className='green'>C</span>oming <span className='javascript'> Soon</span> .
                </p>


                

                
            </div>
            <Footer/>
        </div>

    )
};

export default Portfolio;
