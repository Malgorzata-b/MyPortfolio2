import Header from "./Header.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import React, { useRef } from "react";

import styled from "styled-components";

const HeaderSection = styled.header`
  height: 84vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 1.5vw;
  justify-content: space-between;
`;

const NavBarSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  height: 10vh;
  z-index: 100;
  background: linear-gradient(to right top, var(--dark), var(--green));
`;

const NavBarNavigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
  background-color: transparent;
`;

const NavBarButton = styled.button`
  color: var(--white);
  background-color: var(--NavBarButtonBackgroundColor);
  font-size: 1.5rem;
  width: 8rem;
  height: 3rem;
  border-radius: 5rem;
  border: 4px solid var(--NavBarButtonBorderColor);
  box-shadow: 1px 4px 4px 0px var(--NavBarButtonShadowColor);
  cursor: pointer;

  &:hover {
    background-color: var(--ShadowButton);
    color: var(--dark);
    cursor: pointer;
    box-shadow: 0px 0px 2px 2px var(--ShadowButton);
  }
`;

const MainSection = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 4vh 2vw;
  // height: 210rem;
  max-width: 100%;
`;

const AboutSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  padding: 4vh 2vw;
  border-radius: 20px;
  // border: 2px solid red;
  max-width: 95%;
  backdrop-filter: blur(5px);
`;

const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  max-width: 95%;
  padding: 4vh 3vw;
  border-radius: 20px;
  backdrop-filter: blur(5px);
  // border: 2px solid red;
`;

const FooterSection = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2vw;
  max-width: 100%;
  background: linear-gradient(to right top, var(--dark), var(--green));
  backdrop-filter: blur(10px);
  // border: 2px solid red;
`;

export default function Navbar() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  return (
    <>
      <HeaderSection id="HomePage" ref={homeRef}>
        <Header />
      </HeaderSection>

      <NavBarSection id="Navbar-Section">
        <NavBarNavigation id="Navbar-container">
          <NavBarButton
            id="ButtonNavBar"
            onClick={() => scrollToSection(homeRef)}
          >
            Hjem
          </NavBarButton>

          <NavBarButton
            id="ButtonNavBar"
            onClick={() => scrollToSection(aboutRef)}
          >
            Om meg
          </NavBarButton>

          <NavBarButton
            id="ButtonNavBar"
            onClick={() => scrollToSection(projectsRef)}
          >
            Prosjekter
          </NavBarButton>

          <NavBarButton
            id="ButtonNavBar"
            onClick={() => scrollToSection(contactRef)}
          >
            Kontakt
          </NavBarButton>
        </NavBarNavigation>
      </NavBarSection>

      <MainSection id="Information-container">
        <AboutSection ref={aboutRef} id="About-container">
          <About />
        </AboutSection>

        <ProjectsSection ref={projectsRef} id="Projects-container">
          <Projects />
        </ProjectsSection>
      </MainSection>

      <FooterSection id="Contact" ref={contactRef}>
        <Contact />
      </FooterSection>
    </>
  );
}
