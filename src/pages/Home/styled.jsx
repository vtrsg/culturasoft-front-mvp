import styled from "styled-components";

export const HomePage = styled.div`
  height: 80vh;
  background-image: url("http://culturasoft.com.br/images/logocs-p.jpg");
  background-repeat: no-repeat;
  background-color: #fff;
  background-position: left center;
  display: flex;
  justify-content: end;
  align-items: center;
  h1 {
    margin-right: 20px;
    text-align: center;
    color: #999999;
    font-size: 30px;
  }
  @media (max-width: 800px) {
    background-position: top center;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 20px;
    }
  }
`;
