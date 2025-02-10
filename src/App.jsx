import { useState } from "react";
import Navbar1 from "./NavBar1";
import Navbar2 from "./NavBar2";
import NavBar from "./NavBar";
import nor from "/no.png";
import eng from "/en.png";
import pol from "/pl.png";

import styled from "styled-components";

const LanguageSection = styled.section`
  //   border: 2px solid red;
  background: linear-gradient(
    to right top,
    var(--dark),
    var(--NavBarButtonBackgroundColor)
  );
`;

const LanguageNav = styled.div`
  //   border: 9px solid yellow;
  max-width: 18vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5vh;

  background-color: transparent;
`;

const LanguageButton = styled.button`
  background-color: transparent;
  border: 2px solid var(--black);
  box-shadow: 0px 0px 15px 3px var(--black);
  border-radius: 50%;
  cursor: pointer;
   width: 2rem;
  height: 2rem;

  &:hover {
    background-color: var(--ShadowButton);
    color: var(--dark);
    box-shadow: 0px 0px 2px 2px var(--ShadowButton);
`;

const ImgLanguage = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;

export default function App() {
  const [language, setLanguage] = useState("no");

  function RenderNavBar() {
    switch (language) {
      case "en":
        return <Navbar1 />;
      case "pl":
        return <Navbar2 />;
      default:
        return <NavBar />;
    }
  }

  return (
    <LanguageSection id="LanguageSection">
      <LanguageNav id="LanguageNav">
        <LanguageButton id="LanguageButton" onClick={() => setLanguage("no")}>
          {" "}
          <ImgLanguage id="ImgLanguage" src={nor} alt="Nor" />
        </LanguageButton>
        <LanguageButton id="LanguageButton" onClick={() => setLanguage("en")}>
          {" "}
          <ImgLanguage id="ImgLanguage" src={eng} alt="Eng" />
        </LanguageButton>
        <LanguageButton id="LanguageButton" onClick={() => setLanguage("pl")}>
          {" "}
          <ImgLanguage id="ImgLanguage" src={pol} alt="Pol" />
        </LanguageButton>
      </LanguageNav>
      {RenderNavBar()}
    </LanguageSection>
  );
}
