import './App.css';
import React, { useEffect, useState } from 'react';
import ImageComponent from './ImageComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {

  const [imagesArray, setImagesArray] = useState([])

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}&count=10`)
      .then(res => res.json())
      .then(arrayOfImages => setImagesArray([...arrayOfImages]))
    // return () => {
    //   cleanup
    // }
  }, [])

  return (
    <Container className="homePageContainer">
      <Row id="spacestagram" as="h1">Spacestagram</Row>
      <Row as="h3">Solar-Powered by NASA's Astronomy Picture of the Day (APOD) API</Row>
      { imagesArray.length > 0 
      ? imagesArray.map(image => (
        <ImageComponent imageData={image} />
      ))
      : <img id="loadingGif" src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="loading"/>
      }
    </Container>
  )
}

export default App;
