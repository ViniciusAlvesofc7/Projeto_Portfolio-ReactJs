import { Route, Routes } from "react-router-dom" 
import Home from "./page/Home/Home.jsx"
import PageProjetos from "./page/Projetos/PageProjetos.jsx"


function App() {

  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projetos" element={<PageProjetos />} />

    </Routes>
    </>
  )
}

export default App
