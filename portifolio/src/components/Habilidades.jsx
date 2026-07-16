
import Skills from "./skills/Skills"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
import { useGSAP } from "@gsap/react";
import { SiFirebase, SiTailwindcss, SiTypescript } from "react-icons/si";
import { BsBootstrap, BsTypescript } from "react-icons/bs";
import { BiLogoTypescript } from "react-icons/bi";
import { FaBootstrap, FaCss3, FaHtml5, FaJs, FaReact, FaSass } from "react-icons/fa";
import { FaT } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const Habilidades = () => {

  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".skills-card",{
      scale: 0, 
      y: 60,           // vem de cima
      opacity: 0,
      transformOrigin: "center center",
    }, {
      scale: 1,
      y: 0,            // vem de baixo
      opacity: 1,       // fade
      stagger: 0.5,    // efeito em cascata
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // quando a seção entra
        end: "bottom 80%", // quando a seção sai
        scrub: true,
      },
    });
  }, { scope: sectionRef });


  return (
    <section className="w-full flex flex-col items-center pt-14 pb-40 px-6" id="skills">
        <h2 className="text-white font-bold p-2 mb-16 text-2xl border-b-[2px] border-cyan-600">Habilidades</h2>

        <div ref={sectionRef} className="flex gap-10 flex-wrap justify-center">
            <Skills nome="HTML5" icon={FaHtml5}/>
            <Skills nome="CSS3" icon={FaCss3}/>
            <Skills nome="JavaScript" icon={FaJs}/>
            <Skills nome="React" icon={FaReact}/>
            <Skills nome="TypeScript" icon={SiTypescript}/>
            <Skills nome="Sass" icon={FaSass}/>
            <Skills nome="Bootstrap" icon={FaBootstrap}/>
            <Skills nome="Tailwind" icon={SiTailwindcss}/>
            <Skills nome="Firebase" icon={SiFirebase}/>
        </div>
      
    </section>
  )
}

export default Habilidades
