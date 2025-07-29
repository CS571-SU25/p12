import React, { useState } from "react";
import { Card, Button, Carousel, Modal } from "react-bootstrap";

export default function TouristItem({ tourist }) {

    const [showMore, setShowMore] = useState(false);

    const markSave = () => {

    }

    return <>
        <Card className="h-100">
            <Card.Img variant="top" src={tourist.images[0].src.startsWith("http") ? tourist.images[0].src : `${import.meta.env.BASE_URL}${tourist.images[0].src.replace(/^\/+/, "")}`}
                alt={tourist.images[0].alt} style={{ aspectRatio: "1/1", objectFit: "cover" }} />

            <Card.Body className="d-flex flex-column">
                <h2 className="h5 card-title">{tourist.name}</h2>
                <p className="text-muted mb-1">{tourist.region}</p>
                <p className="text-muted mb-1">{tourist.interests.join(', ')}   </p>
                <div className="mt-auto d-flex gap-2">
                    <Button variant="secondary" size="sm" onClick={() => setShowMore(true)}>
                        Show Details
                    </Button>
                    <Button variant="success" size="sm" onClick={markSave}>
                        ⭐ Save
                    </Button>
                </div>
            </Card.Body>
        </Card>

        <Modal show={showMore} onHide={() => setShowMore(false)} size="md" centered scrollable>
            <Modal.Header closeButton>
                <Modal.Title as="h3">{tourist.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                <Carousel variant="dark">
                    {tourist.images.map((img, idx) => (
                        <Carousel.Item key={idx} interval={3000}>
                            <img
                                className="d-block w-100"
                                src={
                                    img.src.startsWith("http")
                                        ? img.src
                                        : `${import.meta.env.BASE_URL}${img.src.replace(/^\/+/, "")}`
                                }
                                alt={img.alt}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>

                <div className="mt-4">
                    <h4>Description</h4>
                    <p>{tourist.description}</p>
                    <p>Location: {tourist.region}</p>
                    <p>You can: {tourist.interests.join(', ')}</p>
                    {tourist.highlights && (
                        <>
                            <h4>Highlights</h4>
                            <ul>
                                {tourist.highlights.map((h, i) => (
                                    <li key={i}>{h}</li>
                                ))}
                            </ul>
                        </>
                    )}

                </div>

            </Modal.Body>
            <Modal.Footer>
                 <Button variant="secondary" onClick={() => setShowMore(false)}>
                    Close
                 </Button>
            </Modal.Footer>
        </Modal>
    </>


}