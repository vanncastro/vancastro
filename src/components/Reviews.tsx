import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Navigation } from 'swiper';
import { Container } from './base/Container';
import { ReviewCard } from './base/ReviewCard';
import styled from 'styled-components';

const StyledSwiper = styled.div`
    max-width: 90%;
    margin: 0 auto;
`;

export const Reviews = () => {
    const [slidesPerView, setSlidesPerView] = useState(1);

    const handleResize = () => {
        if (window.innerWidth >= 992) {
            setSlidesPerView(4);
        } else if (window.innerWidth >= 768) {
            setSlidesPerView(3);
        } else {
            setSlidesPerView(1);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Container title="Our Reviews" darkTitleColor height="100%" paddingBottom="50px">
            <StyledSwiper>
                <Swiper
                    slidesPerView={slidesPerView}
                    slidesPerGroup={2}
                    spaceBetween={10}
                    loop={true}
                    grabCursor={true}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: true,
                    }}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    {[...Array(10)].map((_, i) => {
                        return (
                            <SwiperSlide key={`${i}+reviews`}>
                                <ReviewCard />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </StyledSwiper>
        </Container>
    );
};
