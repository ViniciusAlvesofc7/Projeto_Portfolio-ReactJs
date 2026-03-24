import { faAnglesRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import avatar from "/image/Avatar-Vinicius.png"

const Sobre = () => {

    const scrollContato = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth'
        });
    }

    // const handleDownload = () => {
    //     const link = document.createElement('a');
    //     link.href =  `${import.meta.env.BASE_URL}pdf/Curriculo_Vinicius_Alves_FrontEnd.pdf`;
    //     link.download = 'Curriculo_Vinicius_Alves_FrontEnd.pdf';
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // }

    return (
        <section className="w-full pt-24 pb-40 px-6" id="sobre">

            <div className="flex flex-col-reverse md:flex-row md:justify-evenly justify-center items-center w-full">

                <div className="flex-col items-center justify-center text-center mt-6">
                    <h2 className="text-4xl font-bold text-white text-start ml-5">Olá, eu sou </h2>
                    <span className="text-5xl font-bold text-cyan-800">Vinicius Alves</span>
                    <p className="text-sm text-white">Desenvolvedor Front-End | Javascript | React</p>
                    <div className="flex justify-center gap-4 mt-6">
                        <a href="pdf/Curriculo_Vinicius_Alves_Front-end.pdf" download="Curriculo_Vinicius_Alves_FrontEnd.pdf" className="w-36 h-12 
                        flex justify-center items-center bg-cyan-800/80 text-white text-md rounded-xl border-[1px] border-cyan-600 hover:bg-cyan-600 transition-all duration-500 hover:scale-110 cursor-pointer">Download CV</a>
                        <button onClick={() => { scrollContato('contato') }} className="w-36 h-12 text-white text-md rounded-xl border-[1px] border-cyan-600 hover:bg-cyan-600 transition-all duration-500 hover:scale-110 cursor-pointer">Entrar em contato</button>
                    </div>
                </div>

                <div className="flex justify-center ">
                    <div className="w-[350px] aspect-square overflow-hidden rounded-full border-[5px] border-cyan-700 outline-[5px] transition-all duration-500 hover:scale-110 outline-cyan-900 cursor-pointer">
                        <img src={avatar} alt="Minha Foto" className="w-full h-full object-cover " />
                    </div>
                </div>

            </div>

            <div className="mt-30 text-center max-w-[1200px] mx-auto">
                <h2 className="font-bold text-white text-2xl">Sobre mim</h2>
                <p className="mt-2 text-white">Programador Front-End e Desenvolvedor Web, com interesse crescente por tecnologia e inovação. Busco evoluir constantemente como desenvolvedor, explorando novas ferramentas e boas práticas de programação. Atualmente, dedico meu tempo a criar projetos próprios e aprimorar minhas habilidades, com o objetivo de construir uma carreira sólida na área e contribuir com soluções úteis e bem desenvolvidas.</p>
            </div>

            <div className="text-center mt-20 animate-bounce ">
                <FontAwesomeIcon icon={faAnglesRight} className="text-white text-3xl cursor-pointer  rotate-90" />
            </div>


        </section>
    )
}

export default Sobre
