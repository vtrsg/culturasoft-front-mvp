import styled from "styled-components";

export const ProductsPage = styled.div`
  height: 80vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  h3 {
    color: #3374db;
    font-size: 22px;
  }
  p {
    text-align: start;
    margin: 80px;
    color: #999;
    font-size: 18px;
  }
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    button {
      margin: 10px;
      height: 50px;
      width: 250px;
      border: 1px solid #3374db;
      border-radius: 5px;
      background: #3374db;
      color: #ffffff;
      font-size: 16px;
      cursor: pointer;

      &:hover {
        background: #ffffff;
        color: #3374db;
      }
    }
    a {
      text-decoration: none;
    }
  }
  @media (max-width: 800px) {
    height: auto;
    div {
      flex-direction: column;
      button {
        margin: 10px;
        height: 50px;
        width: 150px;
        font-size: 12px;
      }
    }
  }
`;
