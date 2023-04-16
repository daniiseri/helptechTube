import config from "../config.json";
import styled from "styled-components";
import Menu from "@/components/Menu";
import { StyledTimeline } from "@/components/TimeLine";
import { Footer } from "@/components/Footer";
import React, { useContext } from "react";
import { RunVideoContext } from "@/contexts/RunVideo";
import Link from "next/link";
import { formaterUrl } from "@/utils/formatUrl";

function HomePage() {
  const { setVideoUrl } = useContext(RunVideoContext);
  const [filterValue, setFilterValue] = React.useState("");

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Menu filterValue={filterValue} setFilterValue={setFilterValue} />
        <Header />
        <TimeLine searchValue={filterValue} playlists={config.playlists} setVideoUrl={setVideoUrl} />
        <Footer favorites={config.favorites} />
      </div>
    </>
  );
}

export default HomePage;

const StyledHeader = styled.div`
  background-color: ${({theme}) => theme.backgroundLevel1};

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;

const StyledBanner = styled.div`
  background-image: url(${({ bg }) => bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 230px;
`;
function Header() {
  return (
    <StyledHeader>
      <StyledBanner bg={config.bg} />
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function TimeLine(props) {
  const playlistNames = Object.keys(props.playlists);
  
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValue = props.searchValue.toLowerCase();
                  return titleNormalized.includes(searchValue);
                })
                .map((video) => {
                  return (
                    <Link key={video.url} href={`/video?id=${formaterUrl(video.url)}`}>
                      <img src={video.thumb} />
                      <span>{video.title}</span>
                    </Link>
                  );
                })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
