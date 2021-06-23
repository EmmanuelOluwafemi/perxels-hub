import React from 'react';

import Styled from 'styled-components';

const List = ({ text }) => {
    return (
        <StyledList data-aos="fade-up" data-aos-easing="linear"  data-aos-delay="300">
            <div className="circle"></div>
            <div className="text">{text}</div>
        </StyledList>
    )
}

export default List;

const StyledList = Styled.div`
    width: 100%;
    max-width: 670px;
    display: grid;
    grid-template-columns: 7% 90%;
    grid-gap: .6rem;
    padding-left: 1.5rem;
    margin-bottom: 2.5rem;

    @media (max-width: 768px) {
        padding-left: 0;
    }

    .circle {
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background: #34296B;
        margin-top: 6px;
    }

    .text {
        font-size: 1.25rem;
        font-weight: 400;
        color: #000;
        line-height: 1.4;
    }
`;