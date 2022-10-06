import React from 'react';
import styled from "styled-components";
import { ArrowBack, ArrowForward } from "@material-ui/icons";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #a7a4a1;
  position: relative;
  
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.position === "left" && "10px"};
  right: ${(props) => props.position === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.9;
`;

const Carousel =  () => {
    return (
        <Container>
            <Arrow position="left">
                <ArrowBack/>
            </Arrow>
            <Arrow position="right">
                <ArrowForward/>
                
            </Arrow>
        </Container>
    );
};    
  
export default Carousel;
