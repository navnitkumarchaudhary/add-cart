import styled from 'styled-components';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  padding:0;
  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 20px;
  }
  img {
    align-self: center;
    width: 250px;
    height: 210px;
  }
   strong {
    font-size: 16px;
    line-height: 20px;
    color: #333;
    margin-top: 15px;
  }
   span {
    font-size: 14px;
    font-weight:bold;
  }
  button {
    background: #7159c1;
    color: #fff;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: auto;
    display: flex;
    align-items: center;
    transition: background 0.2s;
    &:hover {
      background: #7159ee;
    }
    div {
      display: flex;
      align-items: center;
      padding: 12px;
      background: rgba(0, 0, 0, 0.1);
      svg {
        margin-right: 5px;
      }
    }
    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
    }
  }
`;

export const FilterItems = styled.div`
  display: flex;
  padding:0;
  align-items: center;
  flex-direction: row;
  input{
    width:20%;
    height:24px;
    border-radius:20px;
    border:none;
    font-size:14px;
    text-align:center;
    margin-right:30px;
    margin-left: 30px;
  }
   p {
    padding:0 15px;
    cursor:pointer;
    color:#fff;
    font-size: 14px;
    font-weight:bold;
    &:hover{
      color: green;
    }
    &:active {
      color: #0000FF;
      color: blue;
    }
  }
  
`;
