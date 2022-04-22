import './App.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './components/Modal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModalOpen = () => setModalOpen(!modalOpen)

  return (
    <div >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="save-button"
        onClick={() => setModalOpen(!modalOpen)}
        
      >
        Button
      </motion.button>
      <Modal handleClose={toggleModalOpen} modalState={modalOpen} />
    </div>
  )
}
export default App;
