import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import home from '../../assets/images/home.png'
import skill from '../../assets/images/skill.png'
import contact from '../../assets/images/contact.png'
import project from '../../assets/images/project.png'

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        } 

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return (
        <>
            <div className={scrolled ? "scrolled" : ""}>
                <nav className="header">
                    <h1 className="title">Portfolio</h1>
                    <ul>
                        <li><Link to='/mon-portfolio' className="content"><img src={ home } alt=''/>Accueil</Link></li>
                        <li><Link to='/mon-portfolio/competences' className="content"><img src={ skill } alt=''/>Compétences</Link></li>
                        <li><Link to='/mon-portfolio/contacts' className="content"><img src={ contact } alt=''/>Contacts</Link></li>
                        <li><Link to='/mon-portfolio/projets' className="content"><img src={ project } alt=''/>Projets</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header