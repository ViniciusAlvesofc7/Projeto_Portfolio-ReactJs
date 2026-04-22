import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import Header from './components/Header'
import Sobre from './components/Sobre'
import Habilidades from './components/Habilidades'
import Projetos from './components/Projetos'
import Certificados from './components/Certificados'
import Contato from './components/Contato'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import './index.css'

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false)

  return (
    <>
      {!loadingComplete && <Preloader onComplete={() => setLoadingComplete(true)} />}

      <AnimatePresence>
        {loadingComplete ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <Header />
            <Sobre />
            <Habilidades />
            <Projetos />
            <Certificados />
            <Contato />
            <Footer />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}

export default App
