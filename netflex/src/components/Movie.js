import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ModalMovie from "./ModalMovie";
import {useState} from 'react';

function Movie(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
      <>
       <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.movie.poster_path} />
        <Card.Body>
          <Card.Title>{props.movie.title}</Card.Title>
          <Button variant="primary" onClick={handleShow}>show details</Button>
        </Card.Body>
      </Card>

      <ModalMovie show={show}  handleClose={handleClose} movieData = {props.movie}/>
      </>
    )
    }
    
    export default Movie;