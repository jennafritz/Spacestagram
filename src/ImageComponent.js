import React, { useState } from "react"
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button'
import Image from "react-bootstrap/Image"

export default function ImageComponent({imageData}) {

    const [liked, setLiked] = useState(false)
    const [showDescription, setShowDescription] = useState(false)

    const toggleLike = () => {
        setLiked(!liked)
    }

    const toggleDescription = () => {
        setShowDescription(!showDescription)
    }

    return(
        <Card className="photoCard">
            <Card.Img src={imageData.url} alt={`APOD from ${imageData.date}`}/>
            <Card.Body>
                <Card.Title>{imageData.title}</Card.Title>
                { liked 
                    ? <Image className="likedHeart" src="https://www.downloadclipart.net/large/11072-red-heart-design.png" alt="heart icon"/>
                    : null
                }
                <h5 className="imageDate">{imageData.date}</h5>
                {/* <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            Read More */}
                        {/* </Accordion.Header>
                        <Accordion.Body> */}
                {showDescription ? 
                    <Card.Text>
                        {imageData.explanation}
                    </Card.Text>
                    : null    
                }
                <Button variant="link" onClick={() => toggleDescription()}>
                   {showDescription ? "Hide Description" : "Show Description"}
                </Button>
                <Button variant="outline-dark" onClick={() => toggleLike()}>{liked ? "Unlike" : "Like"}</Button>
            </Card.Body>
        </Card>
    )
}