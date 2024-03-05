import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  return (
    <>
    <Container>
      <Row>
        <Col>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg" fluid rounded/>
        </Col>
      </Row>
      <Row>
      <Col lg={6}>
        <p>The Metropolitan Museum of Art, colloquially referred to as the Met,[a] is an art museum in New York City. It is the largest art museum in the Americas and fourth-largest in the world.
        </p>
        <p>As of 2022, the museum welcomed 3,208,832 visitors, making it the third-most visited museum in the United States and the eighth-most visited art museum in the world.[5] Its permanent collection contains over two million works,[1] divided among 17 curatorial departments. The main building at 1000 Fifth Avenue, along the Museum Mile on the eastern edge of Central Park on Manhattan's Upper East Side, is by area one of the world's largest art museums. The first portion of the approximately 2-million-square-foot (190,000 m2) building was built in 1880. A much smaller second location, The Cloisters at Fort Tryon Park in Upper Manhattan, contains an extensive collection of art, architecture, and artifacts from medieval Europe.
        </p>
        </Col>
        <Col lg={6}>
        <p>The Metropolitan Museum of Art was founded in 1870 with its mission to bring art and art education to the American people. The museum's permanent collection consists of works of art ranging from the ancient Near East and ancient Egypt, through classical antiquity to the contemporary world. It includes paintings, sculptures, and graphic works from many European Old Masters, as well as an extensive collection of American, modern, and contemporary art. The Met also maintains extensive holdings of African, Asian, Oceanian, Byzantine, and Islamic art. The museum is home to encyclopedic collections of musical instruments, costumes, and decorative arts and textiles, as well as antique weapons and armor from around the world. Several notable interiors, ranging from 1st-century Rome through modern American design, are installed in its galleries.
        </p>
        <p>
          <a href="https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art" target="_blank" rel="noreferrer">
            https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art
          </a>
        </p>
        </Col>
      </Row>
    </Container>
    </>
  );
}
