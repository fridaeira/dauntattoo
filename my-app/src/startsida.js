import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Appstart() {
  return (
    <Container>
      <h1 style={{ marginTop: "30px", marginBottom: "30px" }}>
        VÄLKOMMEN TILL DAUN TATTOO
      </h1>
      <Row>
        <Col>
          <img src="philip1.jpg" alt="Bild på Philip Daun" />
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Hej och välkomen till Daun Tattoo! Mitt namn är Philip Daun och det
            är jag som står bakom Daun Tattoo. Jag har arbetat som tatuerare
            sedan 2018. Idag driver jag en egen tatueringsstudio i min hemstad
            Tranås. Jag har alltid haft en kreativ sida som har fått utlopp på
            olika sätt genom åren. När jag sedan hittade till
            tatueringsbranschen föll jag direkt för den typen av kreativitet och
            konst. Sedan dess har jag arbetat hårt för att nå dit jag är idag
            och jag kan stolt välkomna er till min egen studio på Norra
            Storgatan i Tranås.<br></br>I min studio vill jag att alla ska känna
            sig välkomna och trygga. Att tatuera sig är en stor grej och därför
            är det viktigt att du som kund ska känna dig trygg med mig som
            tatuerare och i min studio. Därför är studion inredd på ett
            avslappnat och trevligt sätt, det utlovas alltid godis för snabb
            energipåfyllning och om du blir sugen på kaffe finns det att tillgå
            i köket. Om du behöver en paus under tiden vi tatuerar vill jag att
            du ska känna dig trygg i att meddela mig det, att tatuera sig gör
            ont och ibland behöver man en paus!
          </p>
        </Col>
      </Row>
      <h2
        className="font-link2"
        style={{
          color: "#B70A16",
          textAlign: "center",
          fontSize: "40px",
          marginTop: "30px",
        }}
      >
        "DON´T BE SAD GO GET A TATTOO"
      </h2>
    </Container>
  );
}
