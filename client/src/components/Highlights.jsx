import { icon } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Highlight from './ui/Highlight';

const Highlights = () => {
    return (
        <section id='highlights'>
            <div className='container'>
                <div className="row__">
                    <h2 className="section__title">
                        Why choose <span className='orange'>MangaVendor</span>
                    </h2>
                    <div className='highlight__wrapper'>
                        <Highlight
                            icon={<FontAwesomeIcon icon="bolt" />}
                            title="Easy and Quick"
                            para="Get access to the manga you purchase online instantly."
                        />
                        <Highlight
                            icon={<FontAwesomeIcon icon="book-open" />}
                            title="10,000+ Manga"
                            para="MangaVendor has manga of a wide variety, including your favorite classics to new manga!"
                        />
                        <Highlight
                            icon={<FontAwesomeIcon icon="tags" />}
                            title="Affordable"
                            para="Get your hands on popular manga for low as £10."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Highlights;
