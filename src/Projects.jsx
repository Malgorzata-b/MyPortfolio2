import IconHTML from "/iconHTML.png";
import IconCSS from "/iconCSS.png";
import IconFigma from "/iconFigma.png";
import IconJS from "/iconJS.png";
import IconReact from "/iconReact.png";
import IconMySQL from "/iconMySQL.png";
// import IconGitHub from "/iconGitHub.png";
// import IconLivePage from "/iconLivePage.png";
import Lavenda from "/Lavenda.png";
import MapApi from "/MapApi.png";
import ReactJule from "/ReactJule.png";
import MySQLImage from "/SQL.png";
import MySQLProject from "/MySQL.pdf";
import Chess from "/Chess.png";

import styled from "styled-components";

const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3vh 0;
  border: 4px solid var(--black);
  // border: 4px solid red;
  border-radius: 40px;
  max-width: 70rem;
  background: linear-gradient(to right top, var(--dark), var(--green));
  box-shadow: 0px 0px 15px 6px var(--black);
`;

const ContainerProjects = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 3rem;
`;

const ImgProject = styled.img`
  max-width: 20rem;
  height: 23rem;
  border-radius: 20px;
  border: 2px solid var(--black);
  margin: 2vh 2vw;
  box-shadow: 0px 0px 15px 6px var(--black);
`;

const InformationProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-right: 3vw;
  max-width: 50rem;
`;

const TitleProject = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  padding-top: 0.9vh;
  text-shadow: 0px 3px 3px var(--ShadowButton);
`;

const ParagraphProject = styled.p`
  font-size: 2rem;
  text-align: center;
  padding-right: 1.2vw;
  max-width: 45rem;
`;

const IconsContainerProject = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 7rem;
  max-width: 45rem;
  border-radius: 20px;
  padding: 1vh 1vw;
  // border: 2px solid red;
`;

const IconImageProject = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border: 2px solid black;
  box-shadow: 0px 0px 15px 3px var(--black);
`;

const LinksContainerIcons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 18rem;
  cursor: pointer;
`;

const IconsContainerTools = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 15rem;
  cursor: pointer;
`;

// const IconImageLivePage = styled.img`
//   width: 4.5rem;
//   height: 4.5rem;
//   // border: 2px solid black;
//   // box-shadow: 0px 0px 15px 3px var(--black);

//   //  &:hover {
//   //   background-color: var(--ShadowButton);
//   //   color: var(--dark);
//   //   box-shadow: 0px 0px 26px 0px var(--ShadowButton);
// `;
const GitHubMySQLIcons = styled.img`
  height: 4rem;
  width: 4rem;
  box-shadow: 0px 0px 15px 3px var(--black);
`;

// const JSIconImage = styled.img`
//   width: 4.5rem;
//   height: 4.5rem;
//   border-radius: 50%;
// `;
const Link = styled.a``;

const ParagraphIconsLinks = styled.p`
  font-size: 2rem;
  text-align: center;
  text-decoration: underline;
  font-family: "Playfair Display", serif;
  text-shadow: 0px 3px 3px var(--ShadowButton);
  width: 9.06rem;
`;

const ContainerIconsLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  max-width: 25rem;
`;

// const ButtonLinks = styled.button`
//   background-color: transparent;
//   width: 8rem;
//   height: 4rem;
//   border-radius: 5rem;
//   cursor: pointer;
//   &:hover {
//     background-color: var(--ShadowButton);
//     color: var(--dark);
//     cursor: pointer;
//     box-shadow: 0px 0px 2px 2px var(--ShadowButton);
//   }
// `;

const ButtonLinks = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 16rem;
  height: 4rem;
  border: 8px solid black;
  border-radius: 5rem;
  cursor: pointer;
  margin-top: 5vh;

  &:hover {
    background-color: var(--ShadowButton);
    color: var(--dark);
    box-shadow: 0px 0px 2px 2px var(--ShadowButton);
  }
`;

const LinkGitLive = styled.a`
 color: white;
  font-size: 1.6rem;
  font-weight: 600;
  text-decoration: none;
 
  }
`;

export default function Projects() {
  return (
    <>
      <ContainerProjects id="Container-Projects">
        <ProjectContainer id="Project-con" className="Lavenda">
          <Link
            href="https://www.figma.com/proto/C0ZEPPAKgMSvHtZ3RHsjcN/Assignment-4%3A-Adding-a-Carousel-to-our-site?node-id=1-144&t=x4vijPfQ1caeBFYa-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
            target="_blank"
          >
            {" "}
            <ImgProject id="ImgProject" src={Lavenda} alt="Lavenda" />
          </Link>

          <InformationProjectContainer id="Information-project">
            <TitleProject id="title-project">
              Project 1 <br />
              Lavenda-Art
            </TitleProject>
            <ParagraphProject id="paragraph-project">
              Prosjekte er en konseptbutikk på nett designet i Figma. Siden er
              laget med tanke på salg av lavendelprodukter. Designet har
              harmoniske farger, brukervennlig navigasjon og en moderne struktur
              som fremhever den naturlige karakteren til produktene.
            </ParagraphProject>
            <IconsContainerProject id="Icons-container">
              <LinksContainerIcons id="Links-containerIcons">
                <ParagraphIconsLinks id="LagetMeds">
                  Laget med:
                </ParagraphIconsLinks>
                <ContainerIconsLinks>
                  <IconImageProject id="Icons" src={IconFigma} alt="Figma" />
                </ContainerIconsLinks>
              </LinksContainerIcons>
              <LinksContainerIcons id="Links-containerIcons">
                {/* <ParagraphIconsLinks>Linker til:</ParagraphIconsLinks> */}
                <ContainerIconsLinks id="ButtonContainer">
                  <ButtonLinks id="Button">
                    <LinkGitLive
                      href="https://www.figma.com/design/C0ZEPPAKgMSvHtZ3RHsjcN/Assignment-4%3A-Adding-a-Carousel-to-our-site?node-id=0-1&t=XANvlzWFNnBc32YS-1"
                      target="_blank"
                    >
                      <p id="TitleButtonLinks">Figma</p>
                    </LinkGitLive>
                  </ButtonLinks>
                  <ButtonLinks id="Button">
                    <LinkGitLive
                      href="https://www.figma.com/proto/C0ZEPPAKgMSvHtZ3RHsjcN/Assignment-4%3A-Adding-a-Carousel-to-our-site?node-id=1-144&t=x4vijPfQ1caeBFYa-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
                      target="_blank"
                    >
                      <p id="TitleButtonLinks">Live</p>
                    </LinkGitLive>
                  </ButtonLinks>
                  {/* <Link href="https://www.figma.com/design/C0ZEPPAKgMSvHtZ3RHsjcN/Assignment-4%3A-Adding-a-Carousel-to-our-site?node-id=0-1&t=XANvlzWFNnBc32YS-1">
                    <IconImageLivePage
                      className="Icons"
                      src={IconFigma}
                      alt="Figma"
                    />
                  </Link>
                  <Link href="https://www.figma.com/proto/C0ZEPPAKgMSvHtZ3RHsjcN/Assignment-4%3A-Adding-a-Carousel-to-our-site?node-id=1-144&t=x4vijPfQ1caeBFYa-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1">
                    <IconImageLivePage
                      className="Icons"
                      src={IconLivePage}
                      alt="LivePage"
                    />
                  </Link> */}
                </ContainerIconsLinks>
              </LinksContainerIcons>
            </IconsContainerProject>
          </InformationProjectContainer>
        </ProjectContainer>

        <ProjectContainer id="Project-con" className="Countries">
          <Link
            href="https://malgorzata-b.github.io/Oppgave-API-/"
            target="_blank"
          >
            <ImgProject id="ImgProject" src={MapApi} alt="Countries" />
          </Link>

          <InformationProjectContainer id="Information-project">
            <TitleProject id="title-project">
              Project 2 <br />
              Countries - API
            </TitleProject>
            <ParagraphProject id="paragraph-project">
              Prosjektet er en app laget med JavaScript som bruker data fra et
              API. Den lar brukere se informasjon om land, som flagg, befolkning
              og regioner, med responsivt design i HTML og CSS.
            </ParagraphProject>
            <IconsContainerProject id="Icons-container">
              <IconsContainerTools id="Icons-container-tools">
                <ParagraphIconsLinks id="LagetMed">
                  Laget med:
                </ParagraphIconsLinks>
                <ContainerIconsLinks id="containerIconsTools">
                  <IconImageProject id="Icons" src={IconJS} alt="JS" />
                  <IconImageProject id="Icons" src={IconHTML} alt="HTML" />
                  <IconImageProject id="Icons" src={IconCSS} alt="CSS" />{" "}
                </ContainerIconsLinks>
              </IconsContainerTools>
              <LinksContainerIcons id="Links-containerIcons">
                {/* <ParagraphIconsLinks>Linker til:</ParagraphIconsLinks> */}
                <ContainerIconsLinks id="ButtonContainer">
                  <ButtonLinks id="Button">
                    <LinkGitLive
                      href="https://github.com/Malgorzata-b/Oppgave-API-"
                      target="_blank"
                    >
                      <p id="TitleButtonLinks">GitHub</p>
                    </LinkGitLive>
                  </ButtonLinks>
                  <ButtonLinks id="Button">
                    <LinkGitLive
                      href="https://malgorzata-b.github.io/Oppgave-API-/"
                      target="_blank"
                    >
                      <p id="TitleButtonLinks">Live</p>
                    </LinkGitLive>
                  </ButtonLinks>

                  {/* <Link href="https://github.com/Malgorzata-b/Oppgave-API-">
                    <GitHubMySQLIcons
                      className="Icons GitHubIcon"
                      src={IconGitHub}
                      alt="GitHub"
                    />
                  </Link> */}
                  {/* <Link href="https://malgorzata-b.github.io/Oppgave-API-/">
                    <IconImageLivePage
                      className="Icons"
                      src={IconLivePage}
                      alt="LivePage"
                    />
                  </Link> */}
                </ContainerIconsLinks>
              </LinksContainerIcons>
            </IconsContainerProject>
          </InformationProjectContainer>
        </ProjectContainer>
      </ContainerProjects>
      <ContainerProjects id="ØnskelisterProject-Container">
        <ProjectContainer id="Project-con" className="Ønskelister">
          <Link
            href="https://malgorzata-b.github.io/Jule-React/"
            target="_blank"
          >
            <ImgProject id="ImgProject" src={ReactJule} alt="Ønskelister" />
          </Link>

          <InformationProjectContainer id="Information-project">
            <TitleProject id="title-project">
              Project 3 <br /> Ønskelister
            </TitleProject>
            <ParagraphProject id="paragraph-project">
              Dette prosjektet er en app laget med React. Den lar brukere lage
              og organisere ønskelister. HTML og CSS er brukt for å lage et
              responsivt design.
            </ParagraphProject>
            <IconsContainerProject id="Icons-container">
              <IconsContainerTools id="Icons-container-tools">
                <ParagraphIconsLinks id="LagetMed">
                  Laget med:
                </ParagraphIconsLinks>
                <ContainerIconsLinks id="containerIconsTools">
                  <IconImageProject id="Icons" src={IconReact} alt="React" />
                  <IconImageProject id="Icons" src={IconHTML} alt="HTML" />
                  <IconImageProject id="Icons" src={IconCSS} alt="CSS" />
                </ContainerIconsLinks>
              </IconsContainerTools>
              <LinksContainerIcons id="Links-containerIcons">
                {/* <ParagraphIconsLinks>Linker til:</ParagraphIconsLinks> */}
                <ContainerIconsLinks id="ButtonContainer">
                  <ButtonLinks id="Button">
                    <LinkGitLive
                      href="https://github.com/Malgorzata-b/Jule-React"
                      target="_blank"
                    >
                      <p id="TitleButtonLinks">GitHub</p>
                    </LinkGitLive>
                  </ButtonLinks>
                  <ButtonLinks id="Button">
                    <LinkGitLive
                      href="https://malgorzata-b.github.io/Jule-React/"
                      target="_blank"
                    >
                      <p id="TitleButtonLinks">Live</p>
                    </LinkGitLive>
                  </ButtonLinks>

                  {/* <Link href="https://github.com/Malgorzata-b/Jule-React">
                    <GitHubMySQLIcons
                      className="Icons GitHubIcon"
                      src={IconGitHub}
                      alt="GitHub"
                    />
                  </Link>
                  <Link href="https://malgorzata-b.github.io/Jule-React/">
                    <IconImageLivePage
                      className="Icons"
                      src={IconLivePage}
                      alt="LivePage"
                    />
                  </Link> */}
                </ContainerIconsLinks>
              </LinksContainerIcons>
            </IconsContainerProject>
          </InformationProjectContainer>
        </ProjectContainer>
      </ContainerProjects>
      <ContainerProjects id="Container-Projects">
        <ProjectContainer id="Project-con" className="MySQL-Project">
          <Link href={MySQLProject} target="_blank">
            <ImgProject id="ImgProject" src={MySQLImage} alt="MySQL-Project" />
          </Link>
          <InformationProjectContainer id="Information-project">
            <TitleProject id="title-project">
              Project 4 <br />
              MySQL
            </TitleProject>
            <ParagraphProject id="paragraph-project">
              Dette prosjektet bruker MySQL for å analysere Airbnb-data fra New
              York. Det involverer oppretting av flere tabeller og bruk av ulike
              funksjoner for databehandling.
            </ParagraphProject>
            <IconsContainerProject
              id="Icons-container"
              className=" MySQLContainer"
            >
              <LinksContainerIcons id="Links-containerIcons">
                <ParagraphIconsLinks id="LagetMed">
                  Laget med:
                </ParagraphIconsLinks>
                <ContainerIconsLinks>
                  <GitHubMySQLIcons
                    id="Icons"
                    className=" MySQLIcon"
                    src={IconMySQL}
                    alt="MySQL"
                  />
                </ContainerIconsLinks>
              </LinksContainerIcons>
              <LinksContainerIcons id="Links-containerIcons">
                {/* <ParagraphIconsLinks>Linker til:</ParagraphIconsLinks> */}
                <ContainerIconsLinks>
                  <ButtonLinks id="Button">
                    <LinkGitLive href={MySQLProject} target="_blank">
                      <p id="TitleButtonLinks">Live</p>
                    </LinkGitLive>
                  </ButtonLinks>
                  {/* <Link href={MySQLProject}>
                    <IconImageLivePage
                      className="Icons"
                      src={IconLivePage}
                      alt="LivePage"
                    />
                  </Link> */}
                </ContainerIconsLinks>
              </LinksContainerIcons>
            </IconsContainerProject>
          </InformationProjectContainer>
        </ProjectContainer>
        <ProjectContainer id="Project-con" className="Chess">
          <Link
            href="https://malgorzata-b.github.io/DOM-Manipulation-Chess/"
            target="_blank"
          >
            <ImgProject id="ImgProject" src={Chess} alt="Chess" />
          </Link>

          <InformationProjectContainer id="Information-project">
            <TitleProject id="title-project">
              Project 5 <br /> Chess
            </TitleProject>
            <ParagraphProject id="paragraph-project">
              Prosjektet går ut på å lage et sjakkbrett ved hjelp av JavaScript,
              HTML og CSS. DOM-manipulasjon ble brukt. Målet var å presentere de
              grunnleggende reglene i sjakk.
            </ParagraphProject>
            <IconsContainerProject id="Icons-container">
              <IconsContainerTools id="Icons-container-tools">
                <ParagraphIconsLinks id="LagetMed">
                  Laget med:
                </ParagraphIconsLinks>
                <ContainerIconsLinks id="containerIconsTools">
                  <IconImageProject id="Icons" src={IconJS} alt="JS" />
                  <IconImageProject id="Icons" src={IconHTML} alt="HTML" />
                  <IconImageProject id="Icons" src={IconCSS} alt="CSS" />{" "}
                </ContainerIconsLinks>
              </IconsContainerTools>
              <LinksContainerIcons id="Links-containerIcons">
                {/* <ParagraphIconsLinks>Linker til:</ParagraphIconsLinks> */}
                <ContainerIconsLinks id="ButtonContainer">
                  <ButtonLinks id="Button">
                    <LinkGitLive
                      href="https://github.com/Malgorzata-b/DOM-Manipulation-Chess"
                      target="_blank"
                    >
                      <p id="TitleButtonLinks">GitHub</p>
                    </LinkGitLive>
                  </ButtonLinks>
                  <ButtonLinks id="Button">
                    <LinkGitLive
                      href="https://malgorzata-b.github.io/DOM-Manipulation-Chess/"
                      target="_blank"
                    >
                      <p id="TitleButtonLinks">Live</p>
                    </LinkGitLive>
                  </ButtonLinks>

                  {/* <Link href="https://github.com/Malgorzata-b/DOM-Manipulation-Chess">
                    <GitHubMySQLIcons
                      className="Icons GitHubIcon"
                      src={IconGitHub}
                      alt="GitHub"
                    />
                  </Link>
                  <Link href="https://malgorzata-b.github.io/DOM-Manipulation-Chess/">
                    <IconImageLivePage
                      className="Icons"
                      src={IconLivePage}
                      alt="LivePage"
                    />
                  </Link> */}
                </ContainerIconsLinks>
              </LinksContainerIcons>
            </IconsContainerProject>
          </InformationProjectContainer>
        </ProjectContainer>
      </ContainerProjects>
    </>
  );
}
