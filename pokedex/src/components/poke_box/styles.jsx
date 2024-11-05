import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 30px;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 350px;
  margin: 10px;
  color: black;
  height: 180px;
`;

export const ImgContainer = styled.div`
  width: 150px;
  

  img {
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const AtributosContainer = styled.div`
  display: flex;
  align-items: center;
  /* gap: 0px 30px; */

  .type_stats{
    display: flex;
    flex-direction: row;
  }

  .stats{
    display: grid;
    grid-template-columns: 60px 60px;
  }
  div{
    width: 150px;
  }

  h3 {
    margin-bottom: 10px;
    color: #333;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 5px 0;
    color: #555;
  }
`;