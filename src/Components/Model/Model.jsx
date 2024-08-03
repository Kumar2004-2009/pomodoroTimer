import { AnimatePresence } from 'framer-motion'
import React from 'react'
import Backdrop from './Backdrop'
import ModelContainer from './ModelContainer'

const Model = ({isOpen,onClose}) => {
  return (
    <>
        <AnimatePresence>
            {isOpen && <>
                <Backdrop/>
                <ModelContainer isOpen={isOpen} onClose={onClose}/>
            </>}
        </AnimatePresence>
    </>
  )
}

export default Model
