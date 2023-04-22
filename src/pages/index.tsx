import React, { useState } from 'react';

import { Header } from '../components/Header';

import { Landing } from '../components/Landing';
import { Reviews } from '../components/Reviews';
import { Drivers } from '../components/Drivers';
import { Footer } from '../components/Footer';
import { About } from '../components/About';
import { Photos } from '../components/base/Photos';
import { Prices } from '../components/Prices';
import { ScrollTop } from 'src/components/base/ScrollTop';

export default function Home() {
    const [selectedPerson, setSelectedPerson] = useState('');

    const handleSelectedPerson = (person: string) => {
        setSelectedPerson(person);
    };

    return (
        <>
            <span id="back-to-top-anchor"></span>
            <Header selectedPerson={selectedPerson} />
            <Landing handleSelectedPerson={handleSelectedPerson} />
            <About />
            <Prices />
            <Drivers />
            <Reviews />
            <Photos />
            <Footer />
            <ScrollTop />
        </>
    );
}
