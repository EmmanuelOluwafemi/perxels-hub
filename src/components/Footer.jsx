import React from 'react';

import Styled from 'styled-components';

const Footer = () => (
    <StyledFooter>
        <div className="container">
            <div data-aos="fade-up" data-aos-easing="linear"  data-aos-delay="300" className="footerContent">
                <p>
                    Accepting this means that you agree to the rules of engagement as 
                    described above and not following the rules of engagement means we 
                    can decide to take you out of the platform at our own discretion
                </p>

                <a href="https://chat.whatsapp.com/BfJEEYIjAQ42pmcPusnMBK">I AGREE</a>
            </div>

            <div className="footnote">
                Copyright @ 2021 Perxels
            </div>
        </div>
    </StyledFooter>
)

export default Footer;

const StyledFooter = Styled.footer`
    width: 100%;

    .footerContent {
        margin-top: 4rem;
        width: 100%;
        max-width: 1050px;
        padding: 2rem 3rem;
        background: #34296B;
        margin-bottom: 3rem;
        padding-bottom: 5rem;

        @media (max-width: 768px) {
            padding: 2rem 1.5rem;
            padding-bottom: 4rem;
        }

        p {
            max-width: 620px;
            font-size: 1.25rem;
            font-weight: 400;
            color: #fff;
            line-height: 1.5;
            margin-bottom: 3rem;
        }

        a {
            font-size: 1.3rem;
            font-weight: 600;
            color: #34296B;
            background: #FFC600;
            padding: 1rem 3rem;
            text-decoration: none;
        }
    }

    .footnote {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
        font-weight: 400;
        color: #34296B;
        text-align: center;
        margin-bottom: 3rem;
    }
`;