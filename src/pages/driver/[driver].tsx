import { useRouter } from 'next/router';

import { Header } from '../../components/Header';
import { pageSettings } from '../../utils/pageSettings';
import { Schedule } from '../../components/base/Schedule';
import { DriverAbout } from '../../components/base/DriverAbout';
import { Footer } from 'src/components/Footer';
import { Contact } from 'src/components/Contact';
import { CircularIndeterminate } from '../../components/base/Loading';
import styled from 'styled-components';

const StyledDiv = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    position: relative;
`;

const StyledText = styled.p`
    position: absolute;
    text-align: center;
    top: 35%;
    font-size: 2em;
`;

export default function Drivers() {
    const { query, isReady } = useRouter();

    const selectedDriver = pageSettings[String(query['driver'])] ? String(query['driver']) : '';
    const driverExists = isReady && pageSettings.current_drivers.includes(selectedDriver.toLowerCase());

    return (
        <>
            <Header driverPage={driverExists} />
            {!isReady ? (
                <CircularIndeterminate />
            ) : Boolean(pageSettings[String(query['driver'])]) ? (
                <div>
                    <DriverAbout selectedDriver={selectedDriver} />
                    <Schedule selectedDriver={selectedDriver} />
                </div>
            ) : (
                <StyledDiv>
                    <StyledText>no driver found</StyledText>
                </StyledDiv>
            )}
            <Contact />
            <Footer />
        </>
    );
}
