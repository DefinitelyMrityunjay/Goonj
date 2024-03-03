import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faUsers, faCalendarAlt, faClock, faTags, faMoneyBillAlt}from '@fortawesome/free-solid-svg-icons';
import footerstyles from "@/styles/footer.module.scss"
import eventsData from '../data/eventsInfo.json';
import Navbar from '@/components/navbar/navbar';
const EventsPage = () => {
  const [events] = useState(eventsData);

  return (
    
    <div className="page-container">
      <Navbar/>
      <div className="banner">
        <img src="/events-hero.svg" alt="Event Banner" />
      </div>
      <div className="events-container">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <img src={event.src} alt={event.alt} />
            <div className="eventsCardData">
            <h2 className="event-name">{event.eventName.toUpperCase()}</h2>
            {/* <div className ="eventOrg">Organised by: {event.organizingClub}</div>

            <div className="events-sub">
            <div><FontAwesomeIcon icon={faCalendarAlt} /> {event.date}</div>
            <div><FontAwesomeIcon icon={faClock} /> {event.time}</div>
            <div><FontAwesomeIcon icon={faUsers} /> {event.members}</div>
            </div>
            <div  className="events-sub">
            <div> <FontAwesomeIcon icon={faMapMarkerAlt} /> {event.venue}</div>
            <div> <FontAwesomeIcon icon={faTags} /> {event.genre}</div>
            </div>
            <div  className="events-sub">
            <div>{event.registrationFee} <FontAwesomeIcon icon={faMoneyBillAlt} /></div>
            </div> */}
            <div className="eventReg"><a href={event.registerLink} >Register Now</a></div>
            </div>
          </div>
        ))}
        <div className={footerstyles.footer}>
        <p>© Goonj&apos;24 Digital Operations</p>
        <p style={{color:"white"}}>
        Designed by Akashdeep 
        <br/> 
        Developed by{" "}
      
        <a href="/">
          Hitesh Bandhu,&nbsp;
        </a>
        <a href="/">
            Kanika Tiwari,&nbsp;
        </a>
        <a href="/">
        Mayur Sehgal,&nbsp;
        </a>
        <a href="/">
          Bhargavi Goyal
        </a>
        </p>
        <p>Powered and Secured By <a style={{color:"white"}} rel="follow" target="_blank" href="https://quinji.com">Quinji Tech</a></p>
    </div>
      </div>
      <style jsx>{`
        .page-container {
          background : #fc6700;
          height : 100vh;
          z-index:-99;
          margin: 0 0;
          height : auto;
          font-size:14px /* Add left and right margin */
        }

        .banner {
          text-align: center;
          margin-bottom: 20px;
        }
        
        .banner img {
          margin-top : 90px;
          max-width: 100%;
        }

        .events-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap:30px;
          
          margin: 50px/* Negative margin to compensate for card padding */

        }

        .event-card {
          background : #fde53b;
          z-index: 5;
            flex-basis: calc(33.33% - 20px); 
        min-width:300px;
          padding: 10px;
          display:flex;
          flex-direction:column;
          border: 2px solid #000;
          border-radius: 20px;
          height: auto;
          box-shadow: 14px 14px 12px rgba(0, 0, 0, 0.7);
          position: relative;
          overflow: hidden; /* Hide overflow */
        }

        .event-card img {
        width: auto;
        height: auto;
        padding-bottom:5px;
        border-radius: 10px 10px 0 0; 
        object-fit: cover;
        }

        .eventsCardData{
            display:flex;
            flex-direction:column;
            align-items:center;
            gap:8px
        }
        .event-name {
          text-transform: uppercase;
          font-size: 24px;
          text-align: center;
          padding-top:8px;
          font-family : Protest Riot, sans-serif;
         
        }

.eventOrg{
    font-size: 18px;
    text-align: center;
    font-family : Oswald, sans-serif;
    
}

.events-sub{
    display:flex;
    width:100%;
    align-items:center;
justify-content:center;
gap:16px;

padding:5px

}

.events-sub div{
    
    border-radius: 50px;
   border:2px solid black;
    padding:8px
}

        .eventReg {
        position:relative
        
       width: 75%;
          background-color: #007bff;
          
          text-align: center;
          padding: 15px;
          border-radius: 50px;
          
          /* Ensure button stays above card content */
        }


        .eventReg a{
            color: #fff;
            text-decoration: none;
            font-size:18px;
        }

        .eventReg:hover {
          background-color: #0056b3;
        }

        @media (max-width: 768px) {
          .event-card {
            width: calc(50% - 20px);
          }
        }

        @media (max-width: 480px) {
          .event-card {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default EventsPage;