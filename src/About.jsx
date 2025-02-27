import Image3 from "/Image1.jpg";
import Image2 from "/Image2.jpg";
import Image1 from "/Image3.jpg";
import Image4 from "/Image4.jpg";
import IconHTML from "/iconHTML.png";
import IconCSS from "/iconCSS.png";
import IconFigma from "/iconFigma.png";
import IconJS from "/iconJS.png";
import IconReact from "/iconReact.png";
import IconPython from "/iconPython.png";
import IconMySQL from "/iconMySQL.png";

// import { Link } from "react-router-dom";

import styled from "styled-components";

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
`;

const ImageContainerProfil = styled.div``;

const ImageAurora = styled.img`
  width: 18rem;
  height: 28rem;
  border: 3px solid var(--black);
  border-radius: 5%;
  box-shadow: 0px 4px 4px 2px var(--black);
`;

const CaruselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: transparent;
  border-radius: 20px;
  box-shadow: 4px 4px 8px var(--CaruselColorShadowLight);
  padding: 1.5vh 1.5vw;
  max-width: 50rem;
  // border: 2px solid red;
`;

const ImageContainerImg = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  max-width: 30rem;
  // height: 10.5rem;
  // border: 4px solid yellow;
  box-shadow: 4px 4px 8px var(--CaruselColorShadowLight);
  border-radius: 20px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 33rem;
  height: 25rem;
  border-radius: 5%;
  // border: solid 5px green;
  box-shadow: 4px 4px 8px var(--CaruselColorShadowLight);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: transparent;
  // background-color: white;
  max-width: 8rem;
  // border: 7px solid rgb(18, 26, 20);
`;

const LinkButton = styled.button`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  margin-bottom: 0.5rem;
  border-radius: 50%;
  box-shadow: 0 1px 5px var(--CaruselColorShadowDark),
    inset 1px 1px 2px var(--CaruselColorShadowLightSecond);
  background-color: var(--CaruselColorBackground);
  background-image: linear-gradient(
    var(--CaruselColorBackgroundImageLight),
    var(--CaruselColorBackgroundImageDark)
  );
`;

const CompetencesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding-top: 3.5rem;
`;

const Paragraph = styled.p`
  font-weight: 700;
  font-size: 2.5rem;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconImage = styled.img`
  width: 4rem;
  height: 4rem;
`;

const JSIconImage = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;

const IconTitle = styled.p`
  font-weight: 300;
  font-size: 1.7rem;
`;

const AboutMeContainer = styled.div`
  display: flex;
  max-width: 90rem;
  background: linear-gradient(to right top, var(--dark), var(--green));
  padding: 5vh 5vw;
  border-radius: 20px;
  box-shadow: 0px 0px 15px 6px var(--black);
`;

const Description = styled.p`
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  max-width: 95%;
  text-indent: 4rem;
  padding-left: 2vw;
  font-size: 2rem;
`;

export default function About() {
  return (
    <>
      <ImagesContainer id="Images-Container">
        <ImageContainerProfil id="Image">
          <ImageAurora id="Profil" src={Image4} alt="Aurora" />
        </ImageContainerProfil>
        <CaruselContainer id="carousel-container">
          <ImageContainerImg id="Image-Gallery">
            <Image className="Photo" id="photo-1" src={Image1} alt="Image3" />
            <Image className="Photo" id="photo-2" src={Image2} alt="Image2" />
            <Image className="Photo" id="photo-3" src={Image3} alt="Image1" />
          </ImageContainerImg>
          <ButtonContainer id="button-container">
            <LinkButton
              id="buttonImage"
              onClick={() =>
                document
                  .getElementById("photo-1")
                  .scrollIntoView({ behavior: "smooth", block: "nearest" })
              }
            />

            <LinkButton
              id="buttonImage"
              onClick={() =>
                document
                  .getElementById("photo-2")
                  .scrollIntoView({ behavior: "smooth", block: "nearest" })
              }
            />

            <LinkButton
              id="buttonImage"
              onClick={() =>
                document
                  .getElementById("photo-3")
                  .scrollIntoView({ behavior: "smooth", block: "nearest" })
              }
            />
          </ButtonContainer>
        </CaruselContainer>
        <CompetencesContainer id="Competences">
          <Paragraph id="CompetancesTitle">Jeg Kan: </Paragraph>
          <IconContainer id="CompetencesIconContainer" className="HTML">
            <IconImage id="Icon" src={IconHTML} alt="HTML" />
            <IconTitle id="Title-competences">HTML</IconTitle>
          </IconContainer>
          <IconContainer id="CompetencesIconContainer" className="CSS">
            <IconImage id="Icon" src={IconCSS} alt="CSS" />
            <IconTitle id="Title-competences">CSS</IconTitle>
          </IconContainer>
          <IconContainer id="CompetencesIconContainer" className="FIGMA">
            <IconImage id="Icon" src={IconFigma} alt="FIGMA" />
            <IconTitle id="Title-competences">Figma</IconTitle>
          </IconContainer>
          <IconContainer id="CompetencesIconContainer" className="JS">
            <JSIconImage id="Icon" src={IconJS} alt="JS" />
            <IconTitle id="Title-competences">JavaScript</IconTitle>
          </IconContainer>
          <IconContainer id="CompetencesIconContainer" className="REACT">
            <IconImage id="Icon" src={IconReact} alt="REACT" />
            <IconTitle id="Title-competences">React</IconTitle>
          </IconContainer>
          <IconContainer id="CompetencesIconContainer" className="Python ">
            <IconImage id="Icon" src={IconPython} alt="Python" />
            <IconTitle id="Title-competences">Python</IconTitle>
          </IconContainer>
          <IconContainer id="CompetencesIconContainer" className="MySQL">
            <IconImage id="Icon" src={IconMySQL} alt="MySQL" />
            <IconTitle id="Title-competences">MySQL</IconTitle>
          </IconContainer>
        </CompetencesContainer>
      </ImagesContainer>
      <AboutMeContainer id="AboutMe">
        <Description id="Description">
          Hei!
          <br />
          Jeg er Malgorzata og jeg er veldig spent på å starte min reise som
          frontend-utvikler. Med en positiv holdning og lærevillighet trives jeg
          med å takle nye utfordringer og finne analytiske løsninger på
          oppgaver. De siste seks månedene har jeg studert frontend-utvikling
          gjennom et kurs på IT-Utvikler AMO/Kodehode, hvor jeg har fått
          praktisk erfaring med HTML, CSS, JavaScript, React og Figma.
          <br />
          <br /> Nå ser jeg aktivt etter en praksisplass hvor jeg kan anvende
          disse ferdighetene i en reell arbeidssituasjon. For tiden jobber jeg
          som assistentlærer ved Johannes Learning Center, hvor jeg støtter
          undervisningen i norsk, engelsk, programmering, matematikk og musikk.
          Denne rollen har styrket min evne til samarbeid og tilpasning i ulike
          læringsmiljøer.
          <br />
          <br /> På fritiden liker jeg å spille sjakk, tilbringe tid med familie
          og venner, og forfølge min lidenskap for musikk og reising. Jeg er
          klar for nye utfordringer som dataanalytiker eller programmerer. Jeg
          er ivrig etter å bidra med mine analytiske og
          programmeringsferdigheter til et dynamisk team og skape en meningsfull
          påvirkning.
        </Description>
      </AboutMeContainer>
    </>
  );
}
