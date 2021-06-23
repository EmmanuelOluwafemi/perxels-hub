import React from 'react';

import Styled from 'styled-components';

import logo from '../assets/icons/logo.svg';

const Header = () => {
    return (
        <StyledHeader>
            <div className="container">
                <img src={logo} alt="perxels logo" />
            </div>
        </StyledHeader>
    )
}

export default Header;

const StyledHeader = Styled.header`
    width: 100%;
    margin: 80px 0;

    img {
        width: 250px;
        height: auto;
    }
`;