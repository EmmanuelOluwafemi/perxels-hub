import React from 'react';

import Styled from 'styled-components'

import triangle from '../assets/images/triangle.png';

const Content = () => (
    <StyledContent>
        <img src={triangle} alt="pattern" />
        <div className="container">
            <h4>Perxels Design School</h4>
            <p>
                Perxels is a design school that provides training and mentorship 
                to UIUX designers to grow and thrive in the industry.
            </p>

            <h4>Perxels Community</h4>
            <p>
                A supportive community of designers from all over the world who 
                are passionate about learning and growing together.
            </p>

            <h4>Objective for the community</h4>
            <p>
                To build a close group of engaging designers who are passionate about learning and growing together; 
                where they share relevant ideas, exchange resources, engage in design sprint, organise AMA (Ask Me Anything) 
                sessions, portfolio review, design meetups etc.
                In the community, you would be also exposed to job and internship opportunities, accountability and 
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