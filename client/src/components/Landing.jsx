import React from 'react';
import UndrawBooks from '../assets/Undraw_Books.svg'
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>England's most awarded manga platform</h1>
                        <h2>Find your dream manga with <span className="orange">MangaVendor</span></h2>
                        <Link to="/manga">
                            <button className='btn'>Browse Manga</button>
                        </Link>
                    </div>
                    <figure className='header__img--wrapper'>
                        <img src={UndrawBooks} alt="" />
                    </figure>
                </div>
            </header>

        </section>
    );
}

export default Landing;
