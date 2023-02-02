import styled from "styled-components";

export const Container = styled.div`
  width: 217.56px;
  height: 285px;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .one {
    width: 168px;
    height: 113px;
    background: #d9d9d9;
    border-radius: 8px;
    margin-bottom: 24px;
    margin-top: 23px;
    background: linear-gradient(0.25turn, transparent, #fff, transparent),
      linear-gradient(#eee, #eee),
      radial-gradient(38px circle at 19px 19px, #eee 50%, transparent 51%),
      linear-gradient(#eee, #eee);
    background-repeat: no-repeat;
    background-size: 315px 250px, 315px 180px, 100px 100px, 225px 30px;
    background-position: -315px 0, 0 0, 0px 190px, 50px 195px;
    animation: loading 1.5s infinite;
  }

  .two {
  }

  .div-1 {
    width: 168px;
    height: 22px;
    background: #d9d9d9;
    margin-bottom: 12px;
    background: linear-gradient(0.25turn, transparent, #fff, transparent),
      linear-gradient(#eee, #eee),
      radial-gradient(38px circle at 19px 19px, #eee 50%, transparent 51%),
      linear-gradient(#eee, #eee);
    background-repeat: no-repeat;
    background-size: 315px 250px, 315px 180px, 100px 100px, 225px 30px;
    background-position: -315px 0, 0 0, 0px 190px, 50px 195px;
    animation: loading 1.5s infinite;
  }
  .div-2 {
    width: 168px;
    height: 22px;
    background: #d9d9d9;
    margin-bottom: 12px;
    background: linear-gradient(0.25turn, transparent, #fff, transparent),
      linear-gradient(#eee, #eee),
      radial-gradient(38px circle at 19px 19px, #eee 50%, transparent 51%),
      linear-gradient(#eee, #eee);
    background-repeat: no-repeat;
    background-size: 315px 250px, 315px 180px, 100px 100px, 225px 30px;
    background-position: -315px 0, 0 0, 0px 190px, 50px 195px;
    animation: loading 1.5s infinite;
  }
  .div-3 {
    width: 168px;
    height: 22px;
    background: #d9d9d9;
    margin-bottom: 12px;
    background: linear-gradient(0.25turn, transparent, #fff, transparent),
      linear-gradient(#eee, #eee),
      radial-gradient(38px circle at 19px 19px, #eee 50%, transparent 51%),
      linear-gradient(#eee, #eee);
    background-repeat: no-repeat;
    background-size: 315px 250px, 315px 180px, 100px 100px, 225px 30px;
    background-position: -315px 0, 0 0, 0px 190px, 50px 195px;
    animation: loading 1.5s infinite;
  }

  @keyframes loading {
    to {
      background-position: 315px 0, 0 0, 0 190px, 50px 195px;
    }
  }
`;
