import React from "react";
import styled from "styled-components";
import Dashboard from "../../assets/dashboard.svg";
import FreeGround from "../../assets/free.svg";
import Challenges from "../../assets/challenge.svg";
import Chat from "../../assets/talk.svg";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <>
      <Container>
        <SideButtons>
          <TopSide>
            <Button to="/dashboard">
              <Menu>
                <ImageContainer>
                  <MenuItemIcon src={Dashboard} alt="Icon" />
                </ImageContainer>
                <Title>Dashboard</Title>
              </Menu>
            </Button>
          </TopSide>
          <MiddleSide>
            <Button to="/">
              <Menu>
                <ImageContainer>
                  <MenuItemIcon src={FreeGround} alt="Icon" />
                </ImageContainer>
                <Title>Free Ground</Title>
              </Menu>
            </Button>
            <Button to="/">
              <Menu>
                <ImageContainer>
                  <MenuItemIcon src={Challenges} alt="Icon" />
                </ImageContainer>
                <Title>Challenges</Title>
              </Menu>
            </Button>
            <Button to="/">
              <Menu>
                <ImageContainer>
                  <MenuItemIcon src={Chat} alt="Icon" />
                </ImageContainer>
                <Title>Chat with RM</Title>
              </Menu>
            </Button>
          </MiddleSide>
        </SideButtons>
        <Socialmediacontainer>
          <Socialitems>
          <Icondiv>
              <Socialicon
                src={require("../../assets/linkedindash.svg").default}
                alt="linkedin"
              />
            </Icondiv>
            <Icondiv>
              <Socialicon
                src={require("../../assets/twitter.png")}
                alt="twitter"
              />
            </Icondiv>
            <Icondiv>
              <Socialicon
                src={require("../../assets/facebookdash.svg").default}
                alt="facebook"
              />
            </Icondiv>
            <Icondiv>
              <Socialicon
                src={require("../../assets/instagramdash.svg").default}
                alt="insta"
              />
            </Icondiv>
            <Icondiv>
              <Socialicon
                src={require("../../assets/youtubedash.svg").default}
                alt="youtube"
              />
            </Icondiv>
          </Socialitems>
        </Socialmediacontainer>
      </Container>
    </>
  );
}
const ImageContainer = styled.div`
  width: 16px;
  margin-right: 20px;
`;
const Title = styled.span`
  font-family: "gorditamedium";
  color: #333333;
  font-size: 15px;
  font-weight: 500;
`;
const SideButtons = styled.div``;
const Menu = styled.div`
  padding: 10px 21px;
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`;
const MenuItemIcon = styled.img`
  display: block;
  width: 100%;
`;
const Button = styled(Link)`
  height: 46px;
  display: flex;
  color: #fff;
  cursor: pointer;
  &.active {
    border-left: 4px solid green;
    align-items: center;
    background: #f4f4fe;
  }
`;
const Socialmediacontainer = styled.div`
  width: 100%;
`;
const Socialitems = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;
const Icondiv = styled.div`
  width: 100%;
  margin-left: 10px;
`;
const Socialicon = styled.img`
  display: block;
  width: 20px;
`;
const Container = styled.div`
  background: #f9f9fb;
  width: 218px;
  position: fixed;
  z-index: 300;
  top: 70px;
  left: 0;
  transition: all 0.4s ease;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const TopSide = styled.div`
  margin: 30px 0;
`;
const MiddleSide = styled.div``;

export default SideBar;
