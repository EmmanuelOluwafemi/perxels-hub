import React from 'react';

import Styled from 'styled-components';

import pattern from '../assets/images/pattern.png';

const TopPattern = () => {
    return (
        <StyledPatterm src={pattern} alt="pattern" />
    )
}

export default TopPattern;

const StyledPatterm = Styled.img`
    position: fixed;
    top: 0;
    left: 0;
    width: 30%;
    height: auto;
    z-index: -1;

    @media (max-width: 768px) {
        width: 80%;
    }
`;