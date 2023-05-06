import React, { useEffect, useState } from "react";
import image from '../assets/images/profil.jpg';
import '../assets/styles/accueil.css';

const Accueil = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Développeur", "Designer Web", "UI/UX Designer" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) ;}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
    
        setText(updateText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <>
            <div className="ac">
                <div className="container">
                    <div className="container-content">
                        <img src={ image } alt=''/>
                        <h3>Bienvenue sur mon portfolio</h3>
                        <h1>Bonjour, je m'appelle Njaka Tahiana RASOLOFOMANANA</h1>
                        <h2>Je suis un <span>{ text }</span></h2>
                        <p>Etudiant en troisième année de Licence en Informatique et télécommunication à l'institut Supérieur Polytechnique de Madagascar.
                            Sérieux et dynamiques, je peux apporter les connaissances que j'ai acquise et mes capacités pour contribuer aux bons 
                            performances d'une entreprise.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accueil