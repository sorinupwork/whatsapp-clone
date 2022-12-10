import React from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatIcon from "@mui/icons-material/Chat";

function Sidebar() {
  return (
    <Container>
      <Header>
        <UserAvatar />

        <IconsContainer>
          <ChatIcon />
          <MoreVertIcon />
        </IconsContainer>
      </Header>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div``;

const Header = styled.div``;

const UserAvatar = styled(Avatar)``;

const IconsContainer = styled.div``;
