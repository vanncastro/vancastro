import styled from 'styled-components';
import Image from 'next/image';

import { Container } from './base/Container';

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;

    @media (max-width: 768px) {
        display: block;
    }
`;

const StyledImage = styled(Image)`
    object-fit: contain;
    margin: 40px 0 100px;
    border-radius: 5px;
    border: 2px solid var(--primary);
    box-shadow: var(--primary) 0px 20px 30px -10px;

    @media (max-width: 768px) {
        display: block;
        width: 80%;
        height: 40%;
        margin: 20px auto 0;
    }
`;

export const Partnerships = () => {
    return (
        <Container
            title={'Partners'}
            id="Partners"
            hasLightBackground
            darkTitleColor
            height="100%"
            paddingBottom={'40px'}
        >
            <StyledContainer>
                <StyledImage src="/partnership/elaine_yoshida.jpg" width={400} height={400} alt="elaine yoshida" />
                <a href="https://facebook.com/icbcknowledgetestmaterial" target="_blank">
                    <StyledImage src="/partnership/kika_.jpg" width={400} height={400} alt="kika" />
                </a>
            </StyledContainer>
        </Container>
    );
};
