import styled from "styled-components";

const FooterStyled = styled.footer`
  width: 100%;
  display: flex;
  gap: 16px;
  padding: 16px 32px;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  img:hover {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${({theme}) => theme.textColorBase};
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export function Footer(props) {
  return (
    <FooterStyled>
      {props.favorites.map((data) => {
        return (
          <a
            key={data.nickname}
            href={`https://github.com/${data.nickname}`}
            target="_blank"
          >
            <img src={`https://github.com/${data.nickname}.png`} />
            <small>@{data.nickname}</small>
          </a>
        );
      })}
    </FooterStyled>
  );
}
