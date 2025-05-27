import { useEffect, useRef, useState } from 'react';
import '../components/Carousel.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import action1 from '../assets/action1.jpg';
import action2 from '../assets/action2.jpg';
import action3 from '../assets/action3.jpg';
import action4 from '../assets/action4.jpg';

function NosActions() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const [section1Visible, setSection1Visible] = useState(false);
  const [section2Visible, setSection2Visible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const checkVisibility = (ref, setVisible) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setVisible(true);
        }
      };

      checkVisibility(section1Ref, setSection1Visible);
      checkVisibility(section2Ref, setSection2Visible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header />
      
      {/* Section 1 */}
      <div className="section" ref={section1Ref}>
        <div className={`content-row ${section1Visible ? 'visible' : ''}`}>
          <div className="text-block">
            <h2>Sensibilisation dans les écoles</h2>
            <p>
              Nous organisons des interventions dans les établissements scolaires pour sensibiliser les
              jeunes aux maladies chroniques, à l’inclusion et à la solidarité.
            </p>
          </div>
            <Carousel images={[action1, action2, action3]} />
        </div>
      </div>

      {/* Section 2 */}
      <div className="section" ref={section2Ref}>
        <div className={`content-row reversed ${section2Visible ? 'visible' : ''}`}>
          <div className="text-block">
            <h2>Collectes de fonds sportives</h2>
            <p>
              Des événements sportifs sont organisés régulièrement pour rassembler la communauté et
              récolter des fonds pour la recherche et le soutien aux malades.
            </p>
          </div>
          <Carousel images={[action1, action2, action3]} />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default NosActions;
