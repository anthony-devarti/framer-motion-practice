import { motion } from "framer-motion";
import Backdrop from "../Backdrop";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ handleClose, text, modalState }) => {
  return (
      <motion.div
        onClick={handleClose}
        className="backdrop"
        animate={modalState ? { opacity: 1 } : { opacity: 0 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
            onClick={(e) => e.stopPropagation()}
            className="modal orange-gradient"
            variants={dropIn}
            initial="hidden"
            animate={modalState ? "visible" : "hidden"}
            exit="exit"
        >
            <p>{text}</p>
            <button onClick={handleClose}>Close</button>
        </motion.div>
      </motion.div>
  );
};

export default Modal;
