import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';

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

const review = {
    name: 'John Doe',
    avatar: 'https://picsum.photos/id/1011/60/60',
    rating: 4.7,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae sapien vel metus bibendum sodales. Quisque sed magna eget velit feugiat porttitor. In euismod suscipit sagittis. Sed ut turpis non enim fringilla hendrerit ac eu velit.',
    source: 'Google',
    url: 'https://www.google.com/',
};

export const ReviewCard = () => {
    const { name, avatar, rating, text, source, url } = review;

    return (
        <StyledCard>
            <CardHeader
                avatar={<StyledAvatar aria-label={name} src={avatar} />}
                title={name}
                subheader={<Rating name="read-only" value={rating} readOnly />}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {text}
                </Typography>
            </CardContent>
            <CardContent>
                <Typography variant="caption" color="textSecondary" component="p">
                    Reviewed on {source}
                </Typography>
                <Typography variant="caption" color="textSecondary" component="p">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        View on {source}
                    </a>
                </Typography>
            </CardContent>
        </StyledCard>
    );
};
