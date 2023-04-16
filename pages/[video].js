import Menu from "@/components/Menu";
import DarkModeSwitch from "@/components/Menu/components/DarkModeSwitch";
import { useRouter } from "next/router";
import styled from "styled-components";

const VideoStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  iframe {
    margin-top: 64px;
  }
`;

export default function Video() {
  const router = useRouter();
  const params = router.query.id;

  return (
    <VideoStyled>
      <Menu>
        <DarkModeSwitch />
      </Menu>
      <iframe width="420" height="345" src={`https://www.youtube.com/embed/${params}`}>
      </iframe>
    </VideoStyled>

  )
}