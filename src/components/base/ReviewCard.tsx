import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';

import YouTube from 'react-youtube';

import styled from 'styled-components';

const StyledCard = styled(Card)`
    max-width: 345px;
    margin: 20px auto;
    margin-top: 100px;

    @media (max-width: 600px) {
        max-width: 100%;
        margin-bottom: 200px;
    }
`;

const StyledAvatar = styled(Avatar)`
    background-color: red;
`;

const StyledFooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const options = {
    height: '350px',
    width: '100%',
    playerVars: {
        // You can add any YouTube player parameters here
        autoplay: 0,
    },
};

export const ReviewCard = ({
    review,
}: {
    review: {
        name: string;
        avatar: string;
        rating: number;
        text: string;
        source: string;
        url: string;
        source_id: string;
    };
}) => {
    const { name, avatar, rating, source, url, source_id } = review;

    return (
        <StyledCard className="mySwiper">
            <CardHeader
                avatar={<StyledAvatar aria-label={name} src={avatar} />}
                title={name}
                subheader={<Rating name="read-only" value={rating} readOnly />}
            />
            <CardContent>
                {/* <Typography variant="body2" color="textSecondary" component="p">
                    {text}
                </Typography> */}
                <YouTube videoId={source_id} opts={options} />
            </CardContent>
            <CardContent>
                <StyledFooterContainer>
                    <div>
                        <Typography variant="caption" color="textSecondary" component="p">
                            Reviewed on {source}
                        </Typography>
                        <Typography variant="caption" color="textSecondary" component="p">
                            <a href={url} target="_blank" rel="noopener noreferrer">
                                View on {source}
                            </a>
                        </Typography>
                    </div>
                </StyledFooterContainer>
            </CardContent>
        </StyledCard>
    );
};
