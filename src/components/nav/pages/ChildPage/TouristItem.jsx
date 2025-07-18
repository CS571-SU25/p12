import React, { useState } from "react";
import { Card, Button, Carousel } from "react-bootstrap";

export default function TouristItem(props){

    const [showMore, setShowMore] = useState(false);

    const markShowMore = () =>{
        setShowMore(oldShowMore => !oldShowMore);
    };

    return <Card>
        <Card.Img src = {props.tourist.images[0].src.startsWith("http") ? props.tourist.images[0].src : `${import.meta.env.BASE_URL}${props.tourist.images[0].src.replace(/^\/+/, "")}`} 
        alt = {props.tourist.images[0].alt} style={{ aspectRatio: "1/1" }}/>
    </Card>
}