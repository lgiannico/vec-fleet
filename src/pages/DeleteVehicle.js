import React ,{ useState }from "react";
import { Button, Form, Row, Col, Container, Alert } from "react-bootstrap";
import { InfoCard } from '../components/InfoCard';
import axios from "axios";

function DeleteVehicle() {
  const [vechicle, setVehicle] = useState('');
  const [patent, setPatent] = useState('');
  const [result, setResult] = useState('');


  
  const handleChanges = (e) => {
    setPatent(e.target.value,)
     
  }; 

  const handleSubmit =(value)=>{
    axios
    .get("https://localhost:5001/api/Vehicle/"+patent)
    .then((result) => {
      // result.data.articles.length>0?( setArticles( { articles: result.data.articles}),fetch(true)) :fetch(false)
     setVehicle( result.data)
     console.log(result)

    })
    .catch((error) => {
      console.log("somethig was wrong");
    })
}
 
// };
const handleDisabled =()=>{

  axios
  .put("https://localhost:5001/api/Vehicle/"+patent)
  .then((result) => {
    // result.data.articles.length>0?( setArticles( { articles: result.data.articles}),fetch(true)) :fetch(false)
   setResult( result.data)
   console.log(result)

  })
  .catch((error) => {
    console.log("somethig was wrong");
  })
  setPatent('')
}

const handleDelete=()=>{

  axios
  .delete("https://localhost:5001/api/Vehicle/"+patent)
  .then((result) => {
    // result.data.articles.length>0?( setArticles( { articles: result.data.articles}),fetch(true)) :fetch(false)
   setResult( result.data)
   console.log(result)

  })
  .catch((error) => {
    console.log("somethig was wrong");
  })
  setPatent('')
}



  return (
    <Container fluid="md">
         <br />
         <br />
         <br />
      <Row>
        <Col></Col>
        <Col xs={6}>
          <Form noValidate 
          
          >
            <Form.Group className="mb-3" controlId="form"> 
              <Form.Control
                type="text"
                placeholder="Ingrese patente del vehiculo a eliminar / dar de baja"
                required
                name="patent"
                 onChange={handleChanges }
              />
            </Form.Group>           
          </Form>
        </Col>
        <Col >
        <Button variant="primary" type="submit" onClick={handleSubmit}>
              Buscar
            </Button>
        </Col>
      </Row>
      <br />
      <br />
      <br />
        {vechicle != '' &&  
        <div>
        <InfoCard
        patent={vechicle.patent}
        description={vechicle.brand}
        urlToImage={vechicle.model}
        chasisNumber={vechicle.chasisNumber}
        wheels={vechicle.wheels}
        image={vechicle.urlImage}
      />
      <Row className="justify-content-md-center">
      <Col  ></Col>
      <Col  ></Col>
      <Col  ></Col>
      <Col  >
      <br />
      <Button variant="danger" type="submit" onClick={handleDelete}>
            .  eliminar      .
            </Button>
      </Col>
      <Col  >
      <br />
      <Button variant="warning" type="submit" onClick={handleDisabled}>
              deshabilitar
            </Button>
      </Col>
      </Row>
      <br />
         <br />
      {result == 1 && (
         
        <Alert key={1} variant='success'>
          Vehiculo deshabilitado/ borrado  satisfactoriamente
      
        </Alert>
      )}
      </div>
            }
     
    </Container>
  );
}

export default DeleteVehicle;
