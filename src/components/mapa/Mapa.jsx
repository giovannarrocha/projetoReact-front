import React,{useState} from 'react';
import "./Mapa.css";

const Mapa = () => {
    const [width, setWidth] = useState('600');
    const [hight, setHight] = useState('450');
    return(
        <>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.8038810654307!2d-46.846974885023286!3d-23.503572484711675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf02202e89fb5d%3A0x4a3159906e651676!2sAv.%20Tambore%2C%20267%20-%20Tambor%C3%A9%2C%20Barueri%20-%20SP%2C%2006460-000!5e0!3m2!1spt-BR!2sbr!4v1600286549469!5m2!1spt-BR!2sbr" 
                    width={width} height={hight} frameborder="0" style={{border:0}} allowfullscreen="true" aria-hidden="false" tabindex="0">
                </iframe>
            </div>
        </>
    )
};

export default Mapa;