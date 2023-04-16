import styled from "styled-components";
import Search from "./components/Search";
import DarkModeSwitch from "./components/DarkModeSwitch";
import Link from "next/link";

const StyledMenu = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};
  border: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  position: fixed;
  width: 100%;

  .text {
    color: ${({ theme }) => theme.textColorBase || "#222222"};
  }

  @media (max-width: 600px) {
    height: auto;
    flex-direction: column;
    padding-bottom: 8px;
  }
`;

export default function Menu({ filterValue, setFilterValue }) {

  return (
    <StyledMenu>
      <Link
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
        href='/'
      >
        <img
          style={{
            maxWidth: "48px",
          }}
          src="https://www.svgrepo.com/download/13671/youtube.svg"
        />
        <h1 className="text">helptechTube</h1>
      </Link>
      <Search filterValue={filterValue} setFilterValue={setFilterValue} />
      <DarkModeSwitch />
    </StyledMenu>
  );
}
