import React from 'react';
import styled from 'styled-components';
import { Container } from './base/Container';
import SpaIcon from '@mui/icons-material/Spa';
import StarIcon from '@mui/icons-material/Star';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

export const Prices = () => {
    const pricePlans = [
        {
            id: 1,
            title: 'Individual',
            description: 'includes \n 1 class (90 min)',
            old_price: '$120,00',
            price: '90.00',
            icon: <SpaIcon fontSize="inherit" />,
        },
        {
            id: 2,
            imageSrc: 'https://via.placeholder.com/300x200',
            title: 'Pro Plan',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nunc eu ipsum consectetur tincidunt.',
            price: '49.99',
            old_price: null,
            icon: <StarIcon fontSize="inherit" />,
        },
        {
            id: 3,
            imageSrc: 'https://via.placeholder.com/300x200',
            title: 'Premium Plan',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel nunc eu ipsum consectetur tincidunt.',
            price: '99.99',
            old_price: null,
            icon: <WorkspacePremiumIcon fontSize="inherit" />,
        },
    ];

    return (
        <Container title="prices" id="prices" darkTitleColor>
            <StyledDiv>
                {pricePlans.map(plan => (
                    <StyledPriceCard key={plan.id}>
                        <StyledIcon>{plan.icon}</StyledIcon>

                        <StyledPriceTitle>{plan.title}</StyledPriceTitle>
                        <StyledPriceDescription>{plan.description}</StyledPriceDescription>
                        <StyledOldPrice>{plan.old_price}</StyledOldPrice>
                        <StyledPrice>{`$${plan.price}`}</StyledPrice>

                        <StyledButton>Inquire</StyledButton>
                    </StyledPriceCard>
                ))}
            </StyledDiv>
        </Container>
    );
};

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    max-width: 80%;
    margin: 0 auto;

    @media (max-width: 800px) {
        margin: 150px auto;
        flex-direction: column;
    }
`;

const StyledPriceCard = styled.div`
    text-align: center;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin: 2rem;
    transition: box-shadow 0.3s ease-in-out;
    background-color: #fff;
    min-width: 300px;
    max-width: 301px;

    &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
        min-width: 259px;
        max-width: 260px;
        margin: 0 auto 20px;
    }
`;

const StyledIcon = styled.span`
    font-size: 90px;
    color: var(--primary);
`;

const StyledPriceTitle = styled.h2`
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1rem;
    background-color: var(--primary);
    color: var(--white);
    padding: 4px;
    width: 100%;
    border-radius: 5px;
    letter-spacing: 3px;
    font-family: var(--font-family);
`;

const StyledPriceDescription = styled.p`
    font-size: 1rem;
    margin-bottom: 2rem;
    font-family: var(--font-family);
    text-align: left;
    width: 95%;
`;

const StyledPrice = styled.p`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
    font-family: var(--font-family);
`;

const StyledButton = styled.button`
    width: auto;
    font-size: 1.2rem;
    letter-spacing: 2px;
    font-family: var(--font-family);
    padding: 1rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: var(--background);
    color: var(--primary);
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
        background-color: var(--primary);
        color: #fff;
        transition: all 0.3s ease-in-out;
    }
`;

const StyledOldPrice = styled(StyledPrice)`
    text-decoration: line-through;
    color: red;
    font-size: 1.3rem;
    margin-bottom: -20px;
    height: 30px;
`;
