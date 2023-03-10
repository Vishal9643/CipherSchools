import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
  border-radius: 20px;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Texts = styled.div``;
const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h3`
  font-size: 14px;
  font-weight: 300;
  color: ${({ theme }) => theme.textSoft};
  margin: 8px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = () => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container>
        <Image src="https://img.freepik.com/premium-vector/black-yellow-grunge-modern-youtube-thumbnail-background_562076-122.jpg" />
        <Details>
          <ChannelImage src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-youtube-social-media-round-icon-png-image_6315993.png" />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Test Channel</ChannelName>
            <Info>974,764 views • 14 hours ago </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
