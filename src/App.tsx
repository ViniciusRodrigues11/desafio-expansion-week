import React from 'react';
import ReactPlayer from 'react-player'
import { FiCheckCircle } from 'react-icons/fi'
import { Fade } from "react-awesome-reveal";

import './App.css';

import Creative01 from './assets/creative1.svg'
import Creative02 from './assets/creative2.svg'
import Creative03 from './assets/creative3.svg'
import Creative04 from './assets/creative4.svg'
import vid from './assets/vid.mp4'

function App() {
  return (
    <>
      <div className="box-intro">
        <div className="first-content">
          <Fade>
            <img src={Creative01} alt="" />
          </Fade>

          <div>

            <h1>Criatividade</h1>
            <p>“Criatividade é a arte de conectar ideias.” Steve Jobs</p>

          </div>
        </div>

        <div className="second-content">
          <Fade direction="left">
            <div className="card">
              <p>A criatividade, mais do que algo inato,
              pode ser construída por meio de conhecimentos
              sobre determinado assunto, resiliência e até as próprias
              experiências profissionais. Esta talvez seja a “soft skill”
              mais importantes para os momentos de
             crise vivenciados pelas empresas.</p>
            </div>
          </Fade>
          <Fade direction="right"><img src={Creative02} alt="" /></Fade>



        </div>

      </div>

      <div className="box-media" >
        <Fade>
          <div className="box-video">
            <div className="video-filter"></div>
            <ReactPlayer

              url={vid}
              loop={true}
              muted={true}
              autoPlay={true}
              controls={false}
              playing={true}
              width="auto"
              height="45vh"
            />
          </div>
        </Fade>
        <div className="box-steps">
          <Fade direction="up"><img src={Creative03} alt="" /></Fade>

          <Fade>
          <div>
            <p><FiCheckCircle size={20} color="#fff" /> Mantenha a mente aberta</p>
            <p><FiCheckCircle size={20} color="#fff" /> Exercite seu cérebro</p>
            <p><FiCheckCircle size={20} color="#fff" /> Valorize suas ideias</p>
          </div>
          </Fade>

        </div>


        <div className="footer-infos">
          <Fade>
            <p>“Em 2015, a criatividade era considerada como a 10ª habilidade
            mais importante para o mercado de trabalho.
            Desde então, ela galgou posições e hoje é considerada o
          terceiro skill principal para quem busca se tornar um profissional bem-sucedido.”</p></Fade>
          <Fade direction="left">
            <img src={Creative04} alt="" />
          </Fade>
        </div>

      </div>

    </>
  );
}

export default App;
