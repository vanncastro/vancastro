import React from 'react';

import { Header } from '../components/Header';

import { Landing } from '../components/Landing';
import { Reviews } from '../components/Reviews';
import { Drivers } from '../components/Drivers';
import { Footer } from '../components/Footer';
import { About } from '../components/About';
import { Photos } from '../components/base/Photos';
import { Prices } from '../components/Prices';
import { ScrollTop } from 'src/components/base/ScrollTop';
import { Policies } from 'src/components/Policies';
import { Contact } from 'src/components/Contact';

export default function Home() {
    return (
        <>
            <span id="back-to-top-anchor"></span>
            <Header driverPage={false} />
            <Landing />
            <About />
            <Prices />
            <Drivers />
            <Reviews />
            <Photos />
            <Policies />
            <Contact />
            <Footer />
            <ScrollTop />
        </>
    );
}
