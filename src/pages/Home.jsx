import { useEffect, useRef, useState } from 'react';
import './Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import mission from '../assets/mission.jpg';
import evenement from '../assets/evenement.jpg';

function Home() {
  const [missionVisible, setMissionVisible] = useState(false);
  const [eventVisible, setEventVisible] = useState(false);
  const missionRef = useRef(null);
  const eventRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const checkVisibility = (ref, setVisible) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setVisible(true);
        }
      };

      checkVisibility(missionRef, setMissionVisible);
      checkVisibility(eventRef, setEventVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header />
      <div className="picture full-screen">
        <div className="content">
        </div>
      </div>

      {/* Section 1 - Qui sommes-nous */}
      <div className="section" ref={missionRef}>
        <div className={`content-row ${missionVisible ? 'visible' : ''}`}>
          <div className="text-block">
            <h2>Qui sommes-nous ?</h2>
            <p>
              DASSOS s'engage activement dans la lutte contre le cancer, la spondylarthrite ankylosante
              et les maladies inflammatoires chroniques de l'intestin (MICI). Son objectif principal est
              de récolter des fonds pour soutenir la recherche médicale et améliorer la qualité de vie
              des personnes touchées par ces maladies.
            </p>
          </div>
          <div className="image-block">
            <img src={mission} alt="Mission" />
          </div>
        </div>
      </div>

      {/* Section 2 - Notre dernier événement */}
      <div className="section" ref={eventRef}>
        <div className={`content-row reversed ${eventVisible ? 'visible' : ''}`}>
          <div className="text-block">
            <h2>Notre dernier événement</h2>
            <p>
              Lors de notre dernier événement, nous avons réuni la communauté autour de la sensibilisation
              aux maladies inflammatoires et avons levé des fonds pour soutenir la recherche médicale.
            </p>
          </div>
          <div className="image-block">
            <img src={evenement} alt="Dernier événement" />
          </div>
        </div>
      </div>

      <a
        href="https://www.helloasso.com/associations/dassos"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-button"
      >
        Nous aider
      </a>

      <Footer />
    </>
  );
}

export default Home;
