import Error from 'next/error';
import useSWR from 'swr';
import Card from 'react-bootstrap/Card';

export default function ArtworkCardDetail(object) {

    const { data, error } = useSWR(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${object.objectID}`);

    if (error) {
        return <Error statusCode={404} />;
    }

    if (!data) {
        return null;
    }

    const { primaryImageSmall, title, objectDate, classification, medium, artistDisplayName, creditLine, dimensions } = data;

    return (
        <Card>
            {primaryImageSmall ? (
                <Card.Img variant="top" src={data.primaryImage} />
            ) : (
                <Card.Img variant="top" src="https://via.placeholder.com/375x375.png?text=[+Not+Available+]" />
            )}
            <Card.Body>
                <Card.Title>{title || 'N/A'}</Card.Title>
                <Card.Text>
                    <b>Date:</b> {objectDate || 'N/A'} <br />
                    <b>Classification:</b> {classification || 'N/A'} <br />
                    <b>Medium:</b> {medium || 'N/A'}
                    <br /> <br />
                    <b>Artist:</b> {artistDisplayName || 'N/A'} (<a href={data.artistWikidata_URL} target="_blank" rel="noreferrer" >wiki</a>) <br />
                    <b>Credit Line:</b> {creditLine || 'N/A'} <br />
                    <b>Dimensions:</b> {dimensions || 'N/A'}
                </Card.Text>
            </Card.Body>
        </Card>
    );
  }