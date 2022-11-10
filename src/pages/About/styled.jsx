import styled from "styled-components";

export const AboutPage = styled.div`
  height: 80vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  p {
    text-align: start;
    margin: 80px;
    color: #999;
    font-size: 18px;
  }
  h3 {
    color: #3374db;
    font-size: 22px;
  }
  @media (max-width: 800px) {
    height: auto;
  }
`;
