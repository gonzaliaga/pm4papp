

import Container from "react-bootstrap/esm/Container";
import {Pizzas} from "../../componentes/Pizzas/Pizzas";
import Image from "react-bootstrap/esm/Image";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import pizza1 from "../../assets/imagenes/pizzas/pizza1.jpg";
import pizza2 from "../../assets/imagenes/pizzas/pizza2.jpg";
import pizza3 from "../../assets/imagenes/pizzas/pizza3.jpg";
import pizza4 from "../../assets/imagenes/pizzas/pizza4.jpg";
import pizza5 from "../../assets/imagenes/pizzas/pizza5.jpg";
import pizza6 from "../../assets/imagenes/pizzas/pizza6.jpg";
import pizza7 from "../../assets/imagenes/pizzas/pizza7.jpg";
import pizza8 from "../../assets/imagenes/pizzas/pizza8.jpg";
import pizza9 from "../../assets/imagenes/pizzas/pizza9.jpg";




function Menu(){
  return (


    <Container>
    <Row className="m-3">
     <Col md={4} className="mb-2">
    <div className="card">
     <Image src={pizza1} fluid />
     <Pizzas name= "Garlic Fugazza"
            description= "Salsa garlic parmesan de base, extra cebolla fresca, queso mozzarella y un toque de orégano."
            valor= {12000}/>
   </div>
   </Col> 
   
   <Col md={4} className="mb-2">
     <div className="card">
     <Image src={pizza7} fluid />
     <Pizzas name= "Chicken Garlic"
            description= "Extra salsa, doble pollo grillados, salsa garlic, queso mozzarella y queso parmesano/romano."
            valor= {12000}/>
   </div>
   </Col> 
   <Col md={4} className="mb-2">
   <div className="card">
   <Image src={pizza3} fluid />
     <Pizzas name= "Vegan BBQ SHOT"
            description= "Delicioso NotChicken acompañado de aceitunas negras, cebolla, queso vegano y shot de bbq"
            valor= {12000}/>
   </div>
   </Col>
   </Row>  

   <Row className="m-3">
    
   <Col md={4} className="mb-2 ">
   <div className="card" >
   <Image src={pizza2} fluid />
     <Pizzas name= "La Cordillerana"
            description= "Delicioso chorizo, carne, pimentón y cebolla"
            valor= {9990}/>
   </div>
   </Col>
   <Col md={4} className="mb-2">
   <div className="card" >
   <Image src={pizza5} fluid />
     <Pizzas name= "Napolitana Cherry"
            description= "Queso mozzarella, orégano y tomate cherry."
            valor= {9900}/>
   </div>
   </Col>
  
   <Col md={4} className="mb-2">
   <div className="card" >
   <Image src={pizza6} fluid />
     <Pizzas name= "Todas las Carnes"
            description= "Queso mozzarella, pepperoni, jamón, tocino, salchicha italiana."
            valor= {12000}/>
   </div>
   </Col>
   </Row>  
   <Row className="m-3">
     <Col md={4} className="mb-2">
     <div className="card" >
     <Image src={pizza7} fluid />
     <Pizzas name= "Italiana"
            description= "Queso mozzarella, orégano, pepperoni, salchicha italiana, aceitunas negras, champiñón."
            valor= {9990}/>
   </div>
   </Col> 
  
   <Col md={4} className="mb-2">
   <div className="card">
   <Image src={pizza9} fluid />
     <Pizzas name= "The Works"
            description= "Queso mozzarella, pepperoni, jamón, salchicha italiana, cebolla, pimiento verde, aceitunas negras, champiñón."
            valor= {12000}/>
   </div>
   </Col>
   <Col md={4} className="mb-2">
     <div className="card">
     <Image src={pizza4} fluid />
     <Pizzas name= "The vegan royal"
            description= "Champiñon, pimiento verde, aceitunas negras, Not Meat (carne plant based) y queso vegano."
            valor= {12000}/>
   </div>
   </Col> 

   </Row>  
   <Row className="m-3">
    
   <Col md={4} className="mb-2">
   <div className="card" >
   <Image src={pizza8} fluid />
     <Pizzas name= "Hawaiana"
            description= "Piña, jamón y extra queso mozzarella."
            valor= {12000}/>
   </div>
   </Col>
   <Col md={4} className="mb-2">
   <div className="card" >
   <Image src={pizza8} fluid />
     <Pizzas name= "Super pepperoni"
            description= "Extra queso mozzarella, doble pepperoni."
            valor= {12000}/>
   </div>
   </Col>
   <Col md={4} className="mb-2">
   <div className="card" >
   <Image src={pizza9} fluid />
     <Pizzas name= "Napolitana"
            description= "Queso mozzarella, orégano, tomate."
            valor= {9990}/>
   </div>
   </Col>
   </Row>  
   </Container>
  
  )
}

export default Menu;