import React from "react";
import styled from "styled-components";
import color from "./../assets/color.png";
import Cal from "./MainPage/Calendar";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";

const Test = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f5f3fe;
`;
const MainDiv = styled.div`
  position: absolute;
  width: 1200px;
  height: 600px;

  margin-top: 78px;
  margin-left: 69px;
  margin-right: 69px;
  background: #f8f8f8;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
`;
const BackColor = styled.img`
  position: absolute;
  width: 548px;
  height: 503px;
  margin-left: 100px;
  margin-top: 100px;
  background: #f8f8f8;
`;

const Header = styled.div`
  background: #f8f8f8;
  width: 10%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
`;

const Todays = styled.div`
  background: #f8f8f8;
  width: 30%;
  border-radius: 20px;
`;
const Calendar = styled.div`
  background: #f8f8f8;
  width: 60%;
  border-radius: 20px;
`;
const Main = () => {
  return (
    <Test>
      <MainDiv className="MainDiv">
        {/* <BackColor src={color} style={{ opacity: 0.2 }} /> */}
        <Header>
          <AiOutlineCalendar className="AiOutlineCalendar" />
          <FaRegAddressBook className="FaRegAddressBook" />
          <GrMapLocation className="GrMapLocation" />
        </Header>
        <Todays>sadcfvcg</Todays>
        <Calendar>
          <Cal />
        </Calendar>
      </MainDiv>
    </Test>
  );
};

export default Main;