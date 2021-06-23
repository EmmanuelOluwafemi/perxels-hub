import React from 'react';

import Styled from 'styled-components'

import triangle from '../assets/images/triangle.png';
import whiteTri from '../assets/images/white-tri.svg';

const Content = () => (
    <StyledContent>
        <img src={triangle} alt="pattern" />
        <img className="white" src={whiteTri} alt="pattern" />
        <div className="container">
            <h4 data-aos="fade-up" data-aos-easing="linear"  data-aos-delay="200">Perxels Design School</h4>
            <p data-aos="fade-up" data-aos-easing="linear"  data-aos-delay="300">
                Perxels is a design school that provides training and mentorship 
                to UIUX designers to grow and thrive in the industry.
            </p>

            <h4 data-aos="fade-up" data-aos-easing="linear"  data-aos-delay="200">Perxels Community</h4>
            <p data-aos="fade-up" data-aos-easing="linear"  data-aos-delay="300">
                A supportive community of designers from all over the world who 
                are passionate about learning and growing together.
            </p>

            <h4 data-aos="fade-up" data-aos-easing="linear"  data-aos-delay="200">Objective for the community</h4>
            <p data-aos="fade-up" data-aos-easing="linear"  data-aos-delay="300">
                To build a close group of engaging designers who are passionate about learning and growing together; 
                where they share relevant ideas, exchange resources, engage in design sprint, organise AMA (Ask Me Anything) 
                sessions, portfolio review, design meetups etc.
                In the community, you would also be exposed to job and internship opportunities, accountability and 
                study partners who would challenge you to become a much better designer.
            </p>
        </div>
    </StyledContent>
)

export default Content;

const StyledContent = Styled.section`
    margin-top: 4rem;
    position: relative;

    img {
        position: absolute;
        right: 0;
        top: 40%;

        &.white {
            top: 100%;
            right: 30%;
        }

        @media (max-width: 768px) {
            width: 3rem;
            height: auto;
        }
    }

    h4 {
        font-size: 1.8rem;
        font-weight: 600;
        color: #34296B;
        margin-bottom: 1.5rem;
    }

    p {
        font-size: 1.25rem;
        font-weight: 400;
        color: #000;
        max-width: 670px;
        margin-bottom: 2.1rem;
        line-height: 1.4;
    }
`;