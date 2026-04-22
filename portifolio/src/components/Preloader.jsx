import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'

const DRAW_DURATION = 3
const EXIT_DELAY = 0.4

function Preloader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const hideTimer = window.setTimeout(() => {
      setIsVisible(false)
    }, (DRAW_DURATION + EXIT_DELAY) * 1000)

    return () => window.clearTimeout(hideTimer)
  }, [])

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible ? (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <motion.div
            className="preloader__content"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.svg
              className="preloader__signature"
              viewBox="0 0 900 220"
              role="img"
              aria-label="Vinicius Alves"
            >
              <motion.text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="preloader__name"
                initial={{ strokeDashoffset: 1200 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: DRAW_DURATION, ease: 'easeInOut' }}
              >
                Vinicius Alves
              </motion.text>
            </motion.svg>

            <motion.span
              className="preloader__tag"
              initial={{ opacity: 0, letterSpacing: '0.5em' }}
              animate={{ opacity: 1, letterSpacing: '0.18em' }}
              transition={{ delay: 1.1, duration: 0.8, ease: 'easeOut' }}
            >
              FRONT-END DEVELOPER
            </motion.span>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default Preloader
