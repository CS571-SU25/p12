import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import TouristItem from "./ChildPage/TouristItem"
import { useSavedComposite } from "../../SavedCompositeContext"
import { useData } from '../../DataContext';


const COLORS = {
  primary: '#c60c30',    // HK flag red
  background: '#f2f2f2', // light neutral
  formBg: '#ffffff',     // white for form
  buttonText: '#ffffff'
};

export default function TouristAttractionsPage() {

  //const [tourist, setTourist] = useState([]);
  const { tourists, loading } = useData();
  const { isSaved, toggle } = useSavedComposite();


  //filter: implement 'refine data' pattern
  const [filterRegion, setFilterRegion] = useState("");
  const [filterInterest, setFilterInterest] = useState("");
  const [filterRecommended, setFilterRecommended] = useState(false);


  // derive unique regions 
  const regions = [];
  tourists.forEach((t) => {
    if (!regions.includes(t.region)) {
      regions.push(t.region);
    }
  });
  regions.sort();
  const othersIndex = regions.indexOf("Others");
  if (othersIndex > -1) {
    regions.splice(othersIndex, 1);
    regions.push("Others");
  }
  //console.log(regions);

  // derive unique interests
  const interests = [];
  tourists.forEach((t) => {
    if (Array.isArray(t.interests)) {
      t.interests.forEach((i) => {
        if (!interests.includes(i)) {
          interests.push(i);
        }
      });
    }
  });
  interests.sort();
  //console.log(interests);

  //Apply filter
  const filteredList = tourists.filter((t) => {
    if (filterRegion && t.region !== filterRegion) return false;
    if (filterInterest && !t.interests.includes(filterInterest)) return false;
    if (filterRecommended && !t.highlyRecommended) return false;
    return true;
  });

  const clearFilters = () => {
    setFilterRegion("");
    setFilterInterest("");
    setFilterRecommended(false);
  };

  if (loading) return <div>Loading...</div>;


  return <div style={{ backgroundColor: COLORS.background, minHeight: '100vh', padding: '2rem' }}>
    <Container>
      <h1 style={{ color: COLORS.primary, marginBottom: '0.5rem' }}>Tourist Attractions</h1>
      <p style={{ color: '#333', marginBottom: '1.5rem' }}>Explore and refine attractions with Hong Kong flair.</p>

      <Card style={{ backgroundColor: COLORS.formBg, borderColor: COLORS.primary, marginBottom: '2rem' }}>
        <Card.Body>

          <Card.Title as="h2" style={{ color: COLORS.primary, fontSize: '1.25rem' }}>
            Refine Attractions
          </Card.Title>

          <Form className="d-flex flex-wrap align-items-end">
            <Form.Group controlId="filterRegion" className="me-3 mb-3">
              <Form.Label style={{ fontWeight: '600' }}>Region</Form.Label>
              <Form.Select
                value={filterRegion}
                onChange={e => setFilterRegion(e.target.value)}
                aria-label="Filter by region">
                <option value="">All</option>
                {regions.map(r => <option key={r} value={r}>{r}</option>)}
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="filterInterest" className="me-3 mb-3">
              <Form.Label style={{ fontWeight: '600' }}>Interest</Form.Label>
              <Form.Select
                value={filterInterest}
                onChange={e => setFilterInterest(e.target.value)}
                aria-label="Filter by interest">
                <option value="">All</option>
                {interests.map(i => <option key={i} value={i}>{i}</option>)}
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="filterRecommended" className="d-flex align-items-center me-3 mb-3">
              <Form.Check
                type="checkbox"
                label="Highly Recommended"
                checked={filterRecommended}
                onChange={e => setFilterRecommended(e.target.checked)}
              />
            </Form.Group>

            <Button
              onClick={clearFilters}
              style={{ backgroundColor: COLORS.primary, borderColor: COLORS.primary, color: COLORS.buttonText }}
              className="mb-3">
              Clear Filters
            </Button>


          </Form>
        </Card.Body>

      </Card>

      <Row xs={1} sm={1} md={2} lg={2} className="g-4">
        {filteredList.map(spot => (
          <Col key={spot.id}>
            <TouristItem tourist={spot} saved={isSaved("tourist", spot.id)} onToggleSave={() => toggle("tourist", spot.id)}/>
          </Col>
        ))}
      </Row>

    </Container>

  </div>
}