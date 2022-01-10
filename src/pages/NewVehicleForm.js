import React, { useState } from "react";
import { Button, Form, Row, Col, Container, Alert } from "react-bootstrap";
import axios from "axios";

export default function NewVehicleForm() {
  const [form, compForm] = useState({
    brand: "",
    model: "",
    patent: "",
    wheels: "",
    url: "",
    chasisNumber: "",
  });
  const [color, setColor] = useState("");

  const handleChanges = (e) => {
    console.log(e.target.value, e.target.name);
    compForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit=async(e)=>{
  //     console.log(e)
  //     await axios.post('https://localhost:5001/weatherforecast',{params:{Brand : 'ford'}})
  //     // {params:{Brand :form.brand,Model:form.model,patent:form.patent,wheels:form.wheels,UrlImage:form.url,chasisNumber:form.chasisNumber}})
  //     .then(result=>{
  //         console('llego')
  //     })
  //     .catch(error=>{
  //         console.log("somethig was wrong")
  //     })
  //     console.log()
  // }

  var url = "https://localhost:5001/api/Vehicle";
  // var data = {Brand :form.brand,Model:form.model,patent:form.patent,wheels:form.wheels,UrlImage:form.url,chasisNumber:form.chasisNumber}
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify({
        Brand: form.brand,
        Model: form.model,
        patent: form.patent,
        wheels: form.wheels,
        UrlImage: form.url,
        chasisNumber: form.chasisNumber,
      }), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => console.log(res.json()))
      .catch(setColor("warning"))
      .then(setColor("success"));
    e.target.reset();
    compForm("");
  };

 

  return (
    <Container fluid="md">
      <Row>
        <Col></Col>
        <Col xs={6}>
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="form">
              <br />
              <br />
              <Form.Label>Patente</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                required
                name="patent"
                onChange={handleChanges}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form">
              <Form.Label>Numero de chasis</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                required
                name="chasisNumber"
                onChange={handleChanges}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form">
              <Form.Label>Cantidad Ruedas</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                name="wheels"
                onChange={handleChanges}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form">
              <Form.Label>Marca</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                required
                name="brand"
                onChange={handleChanges}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form">
              <Form.Label>Modelo</Form.Label>
              <Form.Control
                type="text"
                placeholder="ingrese modelo y anio"
                name="model"
                onChange={handleChanges}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="form">
              <Form.Label>foto de Modelo</Form.Label>
              <Form.Control
                type="text"
                placeholder="ingrese url de la imagen"
                name="url"
                onChange={handleChanges}
              />
              {/* //       e => {
            // console.log("e.target.value", e.target.value,e.target.name)}} /> */}
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
              Agregar
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
      <br />
      {color == "success" && (
        <Alert key={1} variant={color}>
          Vehiculo agregado correctamente
      
        </Alert>
      )}
    </Container>
  );
}
