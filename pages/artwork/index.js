import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Pagination } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useSWR from 'swr';
import ArtworkCard from "@/components/ArtworkCard";
import Card from 'react-bootstrap/Card';
import validObjectIDList from '@/public/data/validObjectIDList.json'

const PER_PAGE = 12;

export default function ArtWorkHome() {
    const [artworkList, setArtworkList] = useState();
    const [page, setPage] = useState(1);
    const router = useRouter();
    let finalQuery = router.asPath.split('?')[1];

    const { data, error } = useSWR(`https://collectionapi.metmuseum.org/public/collection/v1/search?${finalQuery}`);

    useEffect(() => {
        if (data) {
            const results = [];
            let filteredResults = validObjectIDList.objectIDs.filter(x => data.objectIDs?.includes(x));

            for (let i = 0; i < filteredResults.length; i += PER_PAGE) {
                const chunk = filteredResults.slice(i, i + PER_PAGE);
                results.push(chunk);
            }

            setArtworkList(results);
            setPage(1);
        }
      }, [data]);

    function previous() {
        if (page > 1) {
          setPage(page - 1);
        }
      };
    
    function next() {
        if(page < artworkList.length)
        setPage(page + 1);
    };

    if (error) {
        return <Error statusCode={404} />;
    }

    if (!artworkList) {
        return null;
    }

    return (
      <>
        {artworkList.length > 0 && (
            <Row className="gy-4">
                {artworkList[page -1]?.map((currentObjectID) => (
                    <Col lg={3} key={currentObjectID}>
                        <ArtworkCard objectID={currentObjectID} />
                    </Col>
                ))}
            </Row>
        )}
        {artworkList.length === 0 && (
            <Card>
                <Card.Body>
                    <h4>Nothing Here</h4>
                    Try searching for something else
                </Card.Body>
            </Card>
        )}
        <br />
        {artworkList.length > 0 && (
            <Row className="gy-4">
                <Col>
                    <Pagination>
                        <Pagination.Prev onClick={previous} disabled={page === 1} />
                        <Pagination.Item >{page}</Pagination.Item>
                        <Pagination.Next onClick={next} />
                    </Pagination>
                </Col>
            </Row>
        )}
      </>
    );
  }