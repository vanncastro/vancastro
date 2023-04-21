import styled from 'styled-components';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';

const StyledBox = styled.div`
    display: flex;
    margin-bottom: 20px;

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const StyledImage = styled.img`
    width: 75px;
    height: 75px;
    border-radius: 50%;
    margin-right: 20px;

    @media (max-width: 600px) {
        margin-right: 0;
        margin-bottom: 10px;
    }
`;

const awardsData = [
    {
        id: 1,
        imageSrc: <MilitaryTechIcon />,
    },
    {
        id: 2,
        imageSrc: <MilitaryTechIcon />,
    },
    {
        id: 3,
        imageSrc: <MilitaryTechIcon />,
    },
];

export const Awards: any = () => {
    return awardsData.map(e => {
        return (
            <StyledBox key={'awards' + e.id}>
                {/* <StyledImage src={e.imageSrc} alt="Award Image" /> */}
                {e.imageSrc}
            </StyledBox>
        );
    });
};
