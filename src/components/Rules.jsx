import React from 'react';

import Styled from 'styled-components';

import List from './List';

import tri from '../assets/images/tri.svg';

const Rules = () => {
    return (
        <StyledRule>
            <img src={tri} alt="tri pattern" />
            <div className="container">
                <h4>Rules of engagement</h4>
                <List text="Share only relevant information relating to product design and building products on the platform." />
                <List text="Engage in group discussions actively, don’t be a ghost community member" />
                <List text="Acknowledge important messages sent to the community. For example; AMA sessions, social media discussions, campaigns, job opportunity post etc" />
                <List text="Be directly involved in AMA sessions, social media discussions and campaigns" />
                <List text="Always give feedback and share ideas on how we can improve the community continually for you" />
                <List text="Follow Perxels on all social media platforms and actively engage with its content" />
                <List text="Vulgar words are not allowed on the platform" />
            </div>
        </StyledRule>
    )
}

export default Rules;

const StyledRule = Styled.div`
    overflow-x: hidden;
    position: relative;

    img {
        position: absolute;
        bottom: 0;
        left: 55%;

        @media (max-width: 768px) {
            left: 100%;
        }
    }

    h4 {
        max-width: 670px;
        font-size: 1.8rem;
        font-weight: 600;
        color: #34296B;
        margin-bottom: 1.5rem;
    }
`;