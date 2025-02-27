import Top from "../../components/public/Top";
import Footer from "../../components/public/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import palml from "../../assets/images/palml.jpeg";
import palmr from "../../assets/images/palmr.jpeg";
import * as motion from "motion/react-client";
import { enterFromLeft, enterFromRight, idleAnimation } from "../../lib/palmAnim";
import Guia from "../../components/user/Guia";

export default function BasePages() {
  return (
    <>
    <div className="w-screen max-w-screen min-h-screen overflow-hidden relative">
       {/* Esta es la navbar*/}
      <Top />

      {/* Aqui va el apartado de las reservas, en el caso de ir a reserva, se quita este div*/}
      <div className="w-full -translate-y-14 md:-translate-y-32 flex items-center justify-center">
      <Guia />
      </div>

      {/*PALMERITA IZQUIERDA*/}
      <motion.div
        initial="initial"
        animate="animate"
        variants={enterFromLeft}
        className="absolute -left-2 -z-10"
      >
        <motion.div variants={idleAnimation} animate="animate">
          <img src={palml} />
        </motion.div>
      </motion.div>
      
      {/* PALMERITA DERECHA */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={enterFromRight}
        className="absolute -right-2 bottom-24 -z-10"
      >
        <motion.div variants={idleAnimation} animate="animate">
          <img src={palmr} />
        </motion.div>
      </motion.div>

{/* El contenido va a partir de aqui */}
      
    </div>
     {/*Coloque el Footer afuera para ocupar espacio, si se pone dentro, se "achica" el total y el footer se descuadra hacia arriba */}
    <Footer />
    </>
  );
}
