import React, {useEffect, useState} from 'react'
import './covid.css';
import OurCountry from './OurCountry/OurCountry';
const Covid = () => {
    const [data, setData] = useState([]);
    const getCovidData = async () => {
        try{
          const res = await fetch('https://data.covid19india.org/data.json', {
            mode: 'cors',
            'Content-Type': 'application/json'
          });
          const jsonData = await res.json();
          console.log(jsonData.statewise);
            setData(jsonData.statewise[0]);
        }catch (err){
            console.log(err);
        }
    }
    
    useEffect(() => {
        
        getCovidData();
    }, []);
  
    return (
        <>
        <section>
          <h1>🔴 LIVE</h1>
          <h2>COVID-19 CORONA VIRUS TRACKER</h2>  
         
          <ul>
             {/* <li className= "card">
                <div className= "card_main-country">
                <div className= "card_inner">
                  <p className="card_name"><span> OUR </span> COUNTRY</p>
                  <p className="card_total card_small">INDIA</p>
                  </div>
                </div>
              </li> */}
              {/* <li className= "card">
                <div className= "card_main-recovered">
                <div className= "card_inner">
                  <p className="card_name"><span>TOTAL </span> RECOVERED</p>
                  <p className="card_total card_small">{data.recovered}</p>
                  </div>
                </div>
              </li>
              <li className= "card">
                <div className= "card_main-confirmed">
                <div className= "card_inner">
                  <p className="card_name"><span> TOTAL </span> CONFIRMED</p>
                  <p className="card_total card_small">{data.confirmed}</p>
                  </div>
                </div>
              </li>
              <li className= "card">
                <div className= "card_main-deaths">
                <div className= "card_inner">
                  <p className="card_name"><span> TOTAL </span> DEATHS</p>
                  <p className="card_total card_small">{data.deaths}</p>
                  </div>
                </div>
              </li>
              <li className= "card">
                <div className= "card_main-active">
                <div className= "card_inner">
                  <p className="card_name"><span> TOTAL </span> ACTIVE</p>
                  <p className="card_total card_small">{data.active}</p>
                  </div>
                </div>
              </li>
              <li className= "card">
                <div className= "card_main-update">
                <div className= "card_inner">
                  <p className="card_name"><span> LAST </span> UPDATED</p>
                  <p className="card_total card_small">{data.lastupdatedtime}</p>
                  </div>
                </div>
              </li> */}
              
          </ul> 
        <OurCountry />
        </section>
        </>
    )
}

export default Covid
