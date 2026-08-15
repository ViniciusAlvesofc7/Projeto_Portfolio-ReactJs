import Cards from './cards/Cards'
import { faJs, faHtml5, faCss3, faSass, faBootstrap, faReact } from '@fortawesome/free-brands-svg-icons'
import { faWater } from "@fortawesome/free-solid-svg-icons"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
import { useGSAP } from "@gsap/react";
import pjtDjefilmes from '/image/projeto-djefilmes.png'
import pjtBarbearia from '/image/projeto-barbearia.png'
import pjtClinica from '/image/projeto-clinica.png'
import pjtHamburgueria from '/image/projeto-hamburgueria-tailwindcss.png'
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

const Projetos = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray(".projetos-card");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                scrub: true,
                markers: false,
                start: "top 80%",
                end: "bottom 85%",
            },
        });

        cards.forEach((card) => {
            tl.fromTo(
                card,
                {
                    opacity: 0,
                    y: 200,
                    x: 500,
                    rotate: 90,
                },
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    rotate: 0,
                    ease: "power3.out",
                    duration: 0.5,
                }
            );
        });

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach((st) => st.kill());
        }
    }, { scope: sectionRef });


    return (


        <section className="w-full overflow-hidden flex flex-col items-center justify-center px-6 pt-14 pb-40" id="projetos">
            <h2 className="text-white font-bold p-2 mb-16 text-2xl border-b-[2px] border-cyan-600">Projetos</h2>

            <div ref={sectionRef} className='flex gap-10 justify-center flex-wrap'>
                <Cards
                    img={pjtDjefilmes}
                    alt="Djefilmes"
                    title="DJEFilmes"
                    icon={[faHtml5, faCss3, faJs, faReact, faWater]}
                    text="Landing page responsiva desenvolvida com ReactJS e TailwindCSS, para um fotógrafo e videomaker."
                    link="https://djefilmes.vercel.app"
                    github="https://github.com/ViniciusAlvesofc7/Eliabe"
                />

                <Cards
                    img={pjtBarbearia}
                    alt="Barbearia"
                    title="Barbearia"
                    icon={[faHtml5, faCss3, faJs, faBootstrap, faReact]}
                    text="Uma landing page responsiva, desenvolvida para meios de estudos e aprendizagem da ferramenta Bootstrap."
                    link="https://viniciusalvesofc7.github.io/Projeto-Barbearia/"
                    github="https://github.com/ViniciusAlvesofc7/Projeto-Barbearia"
                />

                <Cards
                    img={pjtClinica}
                    alt="Clinica Odontológica"
                    title="Clinica Odontológica"
                    icon={[faHtml5, faCss3, faJs, faSass]}
                    text="Aplicação web que tem como objetivo consolidar os conhecimentos adquiridos em HTML, CSS, JavaScript e Sass."
                    link="https://viniciusalvesofc7.github.io/clinica-odontologica/"
                    github="https://github.com/ViniciusAlvesofc7/clinica-odontologica"
                />

                <Cards
                    img={pjtHamburgueria}
                    alt="Hamburgueria"
                    title="Hamburgueria"
                    icon={[faHtml5, faCss3, faJs, faReact, faWater]}
                    text="Sistema de Pedidos de Hamburgueria, desenvolvido com TailwindCSS e JavaScript, para fins de estudo."
                    link="https://viniciusalvesofc7.github.io/Projeto-hamburgueria-tailwindcss/"
                    github="https://github.com/ViniciusAlvesofc7/Projeto-hamburgueria-tailwindcss"
                />
            </div>

            <Link to="/projetos">
                <button
                    className="w-40 h-10 bg-cyan-800 text-white font-bold rounded-lg hover:bg-cyan-600 transition-all duration-300 mt-8 border-2 border-cyan-600 cursor-pointer"
                >
                    Ver mais
                </button>
            </Link>


        </section>
    )
}

export default Projetos
