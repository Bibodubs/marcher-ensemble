import { useEffect, useRef, useState } from 'react';
import './index.css';

export default function App() {
  const aboutRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-black text-black flex flex-col items-center justify-start p-4 transition-all duration-700 ease-in-out">
      <h1 className="text-center text-lg md:text-2xl font-mono text-white mt-12 mb-8">01000010 01101111 01101110 01101010 01101111 01110101 01110010</h1>
      <div className="w-full max-w-2xl bg-white text-black border border-black rounded-2xl shadow-xl p-6">
        <h2 className="text-xl font-semibold mb-2">Écouter</h2>
        <p className="mb-4 text-base">Un extrait sonore hébergé sur SoundCloud.</p>
        <iframe
          title="Marcher Seul"
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          allow="autoplay; encrypted-media"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1710601809&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
        <div className="text-[10px] text-gray-400 overflow-hidden whitespace-nowrap text-ellipsis font-[Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif] font-light">
          <a href="https://soundcloud.com/bibodubs" title="Bibo" target="_blank" rel="noreferrer" className="text-gray-400 no-underline hover:underline">Bibo</a> · 
          <a href="https://soundcloud.com/bibodubs/marcher-seul" title="Marcher Seul" target="_blank" rel="noreferrer" className="text-gray-400 no-underline hover:underline">Marcher Seul</a>
        </div>
      </div>
      <section ref={aboutRef} className={`w-full max-w-3xl mt-12 text-white transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-sm leading-relaxed whitespace-pre-line">
          Subtil et brutal, mélodique et ciselé, des free-party aux festivals, Bibo est un archétype de la polyvalence et la complémentarité. Chez lui, le yin et le yang s'entremêlent et fusionnent pour donner naissance à son œuvre, une sonorité unique, une fresque musicale hors des cadres, riche et libre.

          À l'aise avec l'informatique depuis son adolescence, il a débuté la musique électronique dans sa chambre. Autodidacte, il se forme régulièrement pour suivre les évolutions technologiques de la musique électronique et faire évoluer sa musique et sa pratique aux tendances actuelles.

          Membre actif d'une association de sonorisation de soirée depuis plus de 4 ans, il a animé plusieurs événements musicaux tels que des festivals, des soirées privées et des free party où il s’est produit dans sa région et au-delà.

          Ces derniers mois Antoine, a eu l’occasion de se produire (pour des DJ set et en tant qu'ingénieur son) à plusieurs festivals dont Planète Sauvage (Plus de 1000 personnes), l’Ode mère, Dès les premières Lueurs d’octobre ainsi qu’en free-party. De par ses diverses expériences Bibo a acquis et développé des compétences dans différents domaines de l’univers musical et sonore : DJ, live, organisation de soirées, régie son, technicien plateau.

          Les couleurs musicales de ses compositions sont variées allant du hip-hop à la techno en passant par la bass music qu'il apprécie tout particulièrement. Comme tout artiste, il évolue constamment dans son art et puise son inspiration dans le travail de nombreux artistes comme Infekt, Enei, Boys Noize, Plk, Josman.

          Bibo a pour ambition de faire vibrer son public et de transmettre sa passion et son énergie au travers de sa musique !
        </p>
      </section>
    </div>
  );
}