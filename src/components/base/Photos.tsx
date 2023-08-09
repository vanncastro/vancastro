import { useEffect } from 'react';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';
import { useCallback, useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Container } from './Container';

const StyledImage = styled.img`
    height: 200px;
    object-fit: cover;
`;

const StyledTitle = styled.p`
    font-family: var(--font-family);
    line-height: 30px;
    font-weight: bold;
    color: var(--white);
`;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1300px;
    margin: 0 auto;
    border-bottom: 0;
    color: var(--white);

    .Mui-expanded {
        background-color: var(--primary);
    }

    @media (max-width: 768px) {
        max-width: 90%;
    }
`;
const StyledImageList = styled(ImageList)`
    .react-simple-image-viewer {
        &__next,
        &__previous {
            color: var(--background);
            opacity: 0.8;
            height: max-content;
        }
        &__close {
            color: var(--background);
            opacity: 0.8;
            margin-top: 40px;
        }
    }
`;

const itemData = [
    {
        img: '/photobook/tulio_nunes.png',
        title: 'Tulio Nunes Class 7',
        author: 'Tulio Nunes',
    },
    {
        img: '/photobook/milton_tonial.png',
        title: 'Milton Tonial Road Test 7',
        author: 'Milton Tonial',
    },

    {
        img: '/photobook/tulio_nunes.png',
        title: 'Tulio Nunes Class 7',
        author: 'Tulio Nunes',
    },
    {
        img: '/photobook/milton_tonial.png',
        title: 'Milton Tonial Road Test 7',
        author: 'Milton Tonial',
    },
    {
        img: '/photobook/tulio_nunes.png',
        title: 'Tulio Nunes Class 7',
        author: 'Tulio Nunes',
    },
    {
        img: '/photobook/milton_tonial.png',
        title: 'Milton Tonial Road Test 7',
        author: 'Milton Tonial',
    },
    {
        img: '/photobook/tulio_nunes.png',
        title: 'Tulio Nunes Class 7',
        author: 'Tulio Nunes',
    },
    {
        img: '/photobook/milton_tonial.png',
        title: 'Milton Tonial Road Test 7',
        author: 'Milton Tonial',
    },
    {
        img: '/photobook/tulio_nunes.png',
        title: 'Tulio Nunes Class 7',
        author: 'Tulio Nunes',
    },
    {
        img: '/photobook/milton_tonial.png',
        title: 'Milton Tonial Road Test 7',
        author: 'Milton Tonial',
    },
];

const images = itemData.reduce((curr, acc) => {
    curr.push(acc.img);
    return curr;
}, []);

export const Photos = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const [colsPerView, setColsPerView] = useState(1);

    const handleResize = () => {
        if (window.innerWidth >= 1600) {
            setColsPerView(5);
        } else if (window.innerWidth >= 992) {
            setColsPerView(5);
        } else if (window.innerWidth >= 768) {
            setColsPerView(3);
        } else {
            setColsPerView(1);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (isViewerOpen) {
            document.documentElement.style.overflowY = 'hidden';
        } else {
            document.documentElement.style.overflowY = '';
        }
    }, [isViewerOpen]);

    const openImageViewer = useCallback(index => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <Container height={'100%'}>
            <StyledContainer>
                <Accordion TransitionProps={{ unmountOnExit: true }} sx={{ backgroundColor: 'var(--primary)' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{ color: 'var(--white' }} />}
                        aria-controls={`photo-content`}
                        id={`photo-header`}
                    >
                        <StyledTitle>View Our Past Alumni Photos</StyledTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <StyledImageList
                            sx={{
                                margin: '0 auto',
                                maxWidth: { lg: '90%', xl: '90%' },
                            }}
                            cols={colsPerView}
                            rowHeight={200}
                        >
                            {itemData.map((item, index) => (
                                <ImageListItem key={index} onClick={() => openImageViewer(index)}>
                                    <StyledImage src={item.img} srcSet={item.img} alt={item.title} loading="lazy" />
                                    <ImageListItemBar
                                        title={item.title}
                                        subtitle={item.author}
                                        onClick={() => openImageViewer(index)}
                                        actionIcon={
                                            <IconButton
                                                sx={{ color: 'var(--white)' }}
                                                aria-label={`info about ${item.title}`}
                                            >
                                                <AspectRatioIcon />
                                            </IconButton>
                                        }
                                    />
                                </ImageListItem>
                            ))}

                            {isViewerOpen && (
                                <ImageViewer
                                    backgroundStyle={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
                                    src={images}
                                    currentIndex={currentImage}
                                    disableScroll
                                    closeOnClickOutside={true}
                                    onClose={closeImageViewer}
                                />
                            )}
                        </StyledImageList>
                    </AccordionDetails>
                </Accordion>
            </StyledContainer>
        </Container>
    );
};
