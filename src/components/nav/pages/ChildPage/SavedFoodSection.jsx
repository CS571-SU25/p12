import React, { useState, useMemo } from "react";
import { Row, Col, Card, Form, Container } from "react-bootstrap";
import { useSavedComposite } from "../../../SavedCompositeContext"
import { useData } from "../../../DataContext"
import SavedFoodCard from "./SavedFoodCard";

export default function SavedFoodSection() {
    const { foods, loading } = useData();
    const { getSavedIdsByType } = useSavedComposite();

    const [classificationFilter, setClassificationFilter] = useState("All");
    const savedIds = getSavedIdsByType("food");

    const savedFood = useMemo(() => {
        return foods
            .filter((f) => savedIds.includes(String(f.id)))
            .filter(
                (f) => classificationFilter === "All" || f.classification === classificationFilter
            );
    }, [foods, classificationFilter, savedIds]);

    const classificationOptions = useMemo(() => {
        const set = new Set(
            foods
                .filter((f) => savedIds.includes(String(f.id)))
                .map((f) => f.classification)
                .filter(Boolean)
        );
        return ["All", ...Array.from(set)];
    }, [foods, savedIds]);

    if (loading) {
        return <div>Loading saved food...</div>;
    }


    return (
        <Container>
            <Card
                style={{
                    padding: "1rem",
                    borderRadius: 8,
                    marginBottom: "1rem",
                    border: "1px solid #ccc",
                }}
            >
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                    <div>
                        <label
                            htmlFor="classification-select"
                            style={{ fontWeight: 600, display: "block" }}
                        >
                            Classification
                        </label>
                        <Form.Select
                            id="classification-select"
                            style={{ cursor: "pointer" }}
                            value={classificationFilter}
                            onChange={(e) => setClassificationFilter(e.target.value)}
                        >
                            {classificationOptions.map((c) => (
                                <option key={c} value={c}>
                                    {c}
                                </option>
                            ))}
                        </Form.Select>
                    </div>
                </div>
            </Card>

            {savedFood.length === 0 ? (
                <Card style={{ padding: "1rem", borderRadius: 8 }}>
                    <Card.Body>
                        <p style={{ margin: 0 }}>
                            There is no saved food matching the filter. Try clearing the classification.
                        </p>
                    </Card.Body>
                </Card>
            ) : (
                <Row xs={1} md={2} className="g-4">
                    {savedFood.map((food) => (
                        <Col key={food.id}>
                            <SavedFoodCard food={food} />
                        </Col>
                    ))}
                </Row>
            )}

        </Container>
    )

}