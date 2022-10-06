import React from 'react';
// import Navbar from "styled-components";
import styled from "styled-components";

const Container = styled.div`
    height:30px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Message = () => {
    return (
        <Container>
            AWOOF! BUY ANYTHING UNDER ₦30,000 FOR FREE SHIPPING!!
        </Container>
    )
}
export default Message;
