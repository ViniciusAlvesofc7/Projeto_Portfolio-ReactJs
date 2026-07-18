import { FaAngleDoubleDown } from "react-icons/fa";
import { faJs, faHtml5, faCss3, faSass, faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faWater } from "@fortawesome/free-solid-svg-icons"

import { useNavigate } from "react-router-dom";
import Cards from "../../components/cards/Cards";

import pjtBarbearia from '/image/projeto-barbearia.png'
import pjtClinica from '/image/projeto-clinica.png'
import pjtHamburgueria from '/image/projeto-hamburgueria-tailwindcss.png'



const PageProjetos = () => {
    const navigate = useNavigate();

    return (
    <div>
        <header className="flex justify-center items-center w-full py-2 px-4 bg-principal-escura border-b-[1px] border-b-cyan-800 ">
            <h1 onClick={() => { navigate('/') }} className="text-gray-100 font-semibold text-3xl cursor-pointer">Portfólio</h1>
        </header>

        <div className="flex justify-start items-center px-2  border-b-[1px] border-b-cyan-800 bg-cyan-800 w-full"
        
        >
            <FaAngleDoubleDown onClick={() => { navigate('/') }} className=" text-2xl text-[#0A0C0D] rotate-90 cursor-pointer hover:animate-bounce" />
        </div>

        <main className="flex flex-col justify-center items-center w-full py-4 px-2 gap-8">
            <h2 className="text-center border-b-[2px] border-b-cyan-800 text-gray-100 font-semibold text-2xl py-1">Projetos</h2>
        
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <Cards
                    img={pjtBarbearia}
                    alt="Barbearia"
                    title="Barbearia"
                    icon={[faHtml5, faCss3, faJs, faBootstrap]}
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
                    icon={[faHtml5, faCss3, faJs, faWater]}
                    text="Sistema de Pedidos de Hamburgueria, desenvolvido com TailwindCSS e JavaScript, para fins de estudo."
                    link="https://viniciusalvesofc7.github.io/Projeto-hamburgueria-tailwindcss/"
                    github="https://github.com/ViniciusAlvesofc7/Projeto-hamburgueria-tailwindcss"
                />
            </div>
        </main>
      
    </div>
  )
}

export default PageProjetos
