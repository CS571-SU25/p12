import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TouristItem from "./ChildPage/TouristItem"

export default function TouristAttractionsPage() {

    const [tourist, setTourist] = useState([]);

    useEffect(() => {
      const base = import.meta.env.BASE_URL;

      fetch(`${base}data/TouristPageData.json`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setTourist(data);
      })
    },[])

  return <>
  <h1>Tourist Attraction Page: Under Construction. Please read the last section of the page</h1>;

  <Container fluid>
    <Row className="g-4 align-items-start">
      {tourist.map((tourist) => (
        <Col key={tourist.id} xs={12} sm={6} md={4} lg={3}>
          <TouristItem tourist={tourist}/>
        </Col>
      ))}
    </Row>
  </Container>

  <p>I am still implementing the web. It is expected to have a filter function that searchs based on regions / interests / whether
    highly recommended. The user can save their favorites when they log in.
  </p>
  </> 
}