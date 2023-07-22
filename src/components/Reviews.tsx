import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Navigation, Thumbs } from 'swiper';
import { Container } from './base/Container';
import { ReviewCard } from './base/ReviewCard';
import styled from 'styled-components';
import { pageSettings } from 'src/utils/pageSettings';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const StyledSwiper = styled.div`
    max-width: 90%;
    margin: 0 auto;
`;

const SwiperContainer = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 600px) {
        max-width: 90%;
        margin: 0 auto;
    }
`;

export const Reviews = () => {
    const [slidesPerView, setSlidesPerView] = useState(1);

    const handleResize = () => {
        if (window.innerWidth >= 1800) {
            setSlidesPerView(5);
        } else if (window.innerWidth >= 1200) {
            setSlidesPerView(4);
        } else if (window.innerWidth >= 768) {
            setSlidesPerView(3);
        } else if (window.innerWidth >= 600) {
            setSlidesPerView(2);
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
        <Container title="Our Reviews" darkTitleColor height="100%" paddingBottom="50px" id="reviews">
            <SwiperContainer>
                <div className="swiper-button image-swiper-button-prev ">
                    <IoIosArrowBack />
                </div>
                <StyledSwiper>
                    <Swiper
                        slidesPerView={slidesPerView}
                        slidesPerGroup={1}
                        spaceBetween={10}
                        navigation={{
                            nextEl: '.image-swiper-button-next',
                            prevEl: '.image-swiper-button-prev',
                            disabledClass: 'swiper-button-disabled',
                        }}
                        grabCursor={true}
                        // autoplay={{ delay: 4500, disableOnInteraction: true, pauseOnMouseEnter: true }}
                        modules={[Autoplay, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        {pageSettings.reviews.map((event, i) => {
                            return (
                                <SwiperSlide key={`${i}+reviews`}>
                                    <ReviewCard review={event} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </StyledSwiper>

                <div className="swiper-button image-swiper-button-next">
                    <IoIosArrowForward />
                </div>
            </SwiperContainer>
        </Container>
    );
};
