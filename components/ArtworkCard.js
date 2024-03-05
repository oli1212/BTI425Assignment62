import Link from 'next/link';
import Error from 'next/error';
import useSWR from 'swr';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ArtworkCard(object) {

    const { data, error } = useSWR(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${object.objectID}`);

    if (error) {
        return <Error statusCode={404} />;
    }

    if (!data) {
        return null;
    }

    const { primaryImageSmall, title, objectDate, classification, medium } = data;

    return (
        <Card>
            {primaryImageSmall ? (
                <Card.Img variant="top" src={primaryImageSmall} />
            ) : (
                <Card.Img variant="top" src="https://via.placeholder.com/375x375.png?text=[+Not+Available+]" />
            )}
            <Card.Body>
                <Card.Title>{title || 'N/A'}</Card.Title>
                <Card.Text>
                    Date: {objectDate || 'N/A'} <br />
                    Classification: {classification || 'N/A'} <br />
                    Medium: {medium || 'N/A'}
                </Card.Text>
                <Link href={`/artwork/${object.objectID}`} passHref legacyBehavior>
                    <Button variant="btn btn-outline-primary"><b>ID:</b> {object.objectID}</Button>
                </Link>
            </Card.Body>
        </Card>
    );
  }