import styled from "styled-components";

export const HomePage = styled.div`
  height: 80vh;
  background: #bdc3c7; 
  background: -webkit-linear-gradient(to right, #bdc3c7, #2c3e50); 
  background: linear-gradient(to right, #bdc3c7, #2c3e50);
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    margin-right: 20px;
    text-align: center;
    color: #ffffff;
    font-size: 30px;
  }
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 20px;
    }
  }
`;
