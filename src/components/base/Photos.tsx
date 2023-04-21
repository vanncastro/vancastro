/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';
import { useCallback, useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import { Container } from './Container';

const StyledImage = styled.img`
    height: 200px;
    object-fit: cover;
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
            setColsPerView(2);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const openImageViewer = useCallback(index => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <Container paddingBottom="20px">
            <ImageList
                sx={{
                    margin: '0 auto',
                    maxWidth: { lg: '90%', xl: '90%' },
                }}
                cols={colsPerView}
                rowHeight={200}
            >
                {itemData.map((item, index) => (
                    <ImageListItem key={index}>
                        <StyledImage src={item.img} srcSet={item.img} alt={item.title} loading="lazy" />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.author}
                            onClick={() => openImageViewer(index)}
                            actionIcon={
                                <IconButton sx={{ color: 'red' }} aria-label={`info about ${item.title}`}>
                                    <AspectRatioIcon />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}

                {isViewerOpen && (
                    <ImageViewer
                        src={images}
                        currentIndex={currentImage}
                        disableScroll={false}
                        closeOnClickOutside={true}
                        onClose={closeImageViewer}
                    />
                )}
            </ImageList>
        </Container>
    );
};
