import React, { useState } from "react";
import { Card, Button, Carousel, Modal } from "react-bootstrap";

export default function TouristItem({ food, saved = false, onToggleSave = () => { } }) {
    const [showMore, setShowMore] = useState(false);

    return <>
        <Card className="h-100" style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', position: "relative", }}>
            <Card.Body className="d-flex p-3 gap-3">
                <div style={{ width: "40%", flexShrink: 0, borderRadius: 8, overflow: "hidden", position: "relative", }}>
                    <Card.Img src={food.images?.[0]?.src?.startsWith("http") ? food.images[0].src : `${import.meta.env.BASE_URL || ""}${(food.images?.[0]?.src || "").replace(/^\/+/, "")}`}
                        alt={food.images[0].alt}
                        style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", display: "block", }} />

                </div>
                <div className="d-flex flex-column flex-grow-1" style={{ paddingRight: 8 }}>
                    <h2 className="h5 mb-1">{food.name}</h2>
                    <strong className="text-muted mb-1">{food.classification}</strong>
                    <p className="text-muted mb-1">Estimated cost: {food.estimatedMinCost}</p>
                    <div className="mt-auto d-flex gap-2 mb-2">
                        <Button variant="secondary" size="sm" onClick={() => setShowMore(true)}>
                            Show Details
                        </Button>
                        <Button variant="success" size="sm" onClick={onToggleSave} aria-label={saved ? "Unsave" : "Save"}>
                            {saved ? "❤ Saved" : "⭐ Save"}
                        </Button>
                    </div>
                </div>
            </Card.Body>
        </Card>

        <Modal show={showMore} onHide={() => setShowMore(false)} size="md" centered scrollable>
            <Modal.Header closeButton>
                <Modal.Title as="h3">{food.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                <Carousel variant="dark">
                    {food.images.map((img, idx) => (
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
                    <p>{food.description}</p>
                    <strong>{food.classification}</strong>
                    <p>Estimated cost: {food.estimatedMinCost}</p>

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