import styled from 'styled-components';
import Image from 'next/image';

import { Container } from './base/Container';

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`;

const StyledImage = styled(Image)`
    object-fit: contain;
    margin: 40px 0 100px;
    border-radius: 5px;
    border: 2px solid var(--primary);
    box-shadow: var(--primary) 0px 20px 30px -10px;
`;

export const Partnerships = () => {
    return (
        <Container title={'Partnerships'} id="Partnership" hasLightBackground darkTitleColor height="100%">
            <StyledContainer>
                <StyledImage src="/partnership/elaine_yoshida.jpg" width={400} height={400} alt="elaine yoshida" />
                <a href="https://facebook.com/icbcknowledgetestmaterial" target="_blank">
                    <StyledImage src="/partnership/kika_.jpg" width={400} height={400} alt="kika" />
                </a>
            </StyledContainer>
        </Container>
    );
};
