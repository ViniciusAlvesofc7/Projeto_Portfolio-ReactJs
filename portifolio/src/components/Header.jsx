import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import {  useState } from 'react';
import ModalMenu from './modal/ModalMenu';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };


  return (
    <section>
      <div className="fixed flex justify-between items-center w-full py-2 px-4 bg-principal-escura border-b-[1px] border-b-cyan-800  z-100">
        <button className="  relative w-8 h-8 flex justify-center items-center  text-cyan-800 text-2xl cursor-pointer hover:text-cyan-600 transition-all duration-300" onClick={() => { handleOpenMenu() }}>
          <FontAwesomeIcon icon={faBars} className={`absolute transition-all duration-600 ${openMenu ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'}`} />

          <FontAwesomeIcon icon={faXmark} className={`absolute transition-all duration-600 ${openMenu ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-75'}`} />
        </button>

        <h1 className="text-gray-100 font-semibold text-3xl">Portfólio</h1>

        <div> 
          {/* className={`flex items-center ${classLight} w-20 h-8 bg-cyan-800 cursor-pointer rounded-full hover:bg-cyan-600 transition-all duration-300 px-1`} onClick={toggleLigth}>
          <div className={`w-7 h-7 rounded-full bg-principal-escura ${classLight}`}></div> */}
        </div>
      </div>
      <ModalMenu isOpen={openMenu} setOpenMenu={setOpenMenu} />
    </section>
  )
}
export default Header
