import { useAtom } from 'jotai';
import { favouritesAtom } from '@/store';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ArtworkCard from "@/components/ArtworkCard";
import Card from 'react-bootstrap/Card';

export default function Favourites() {
    const [favouritesList] = useAtom(favouritesAtom);

    if (!favouritesList) {
        return null;
    }

    return (
      <>
        {favouritesList.length > 0 && (
            <Row className="gy-4">
                {favouritesList.map((currentObjectID) => (
                    <Col lg={3} key={currentObjectID}>
                        <ArtworkCard objectID={currentObjectID} />
                    </Col>
                ))}
            </Row>
        )}
        {favouritesList.length === 0 && (
            <Card>
                <Card.Body>
                    <h4>Nothing Here.</h4>
                    Try adding some new artwork to the list.
                </Card.Body>
            </Card>
        )}
      </>
    );
  }