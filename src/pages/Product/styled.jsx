import styled from "styled-components";

export const ProductPage = styled.div`
  height: auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  h3 {
    margin: 0;
    color: #3374db;
    font-size: 20px;
  }
  p {
    text-align: start;
    margin: 80px;
    color: #999;
    font-size: 18px;
  }
  img {
    height: 500px;
    width: 800px;
  }
  div {
    margin-bottom: 10px;
  }
  @media (max-width: 800px) {
    img {
      height: 250px;
      width: 400px;
    }
  }
`;
