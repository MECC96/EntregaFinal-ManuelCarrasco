import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";


const Ticket = ({buyer, id}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
            <div>
                <div className="row d-flex justify-content-center align-intems-center">
                    <Button variant="primary" className='col-md-4 my-3' onClick={handleShow}>
                        Ver Ticket
                    </Button>
                </div>
                <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title className='text-center'>¡Gracias por tu compra!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <span className='text-center my-3'><b>Datos del Comprador</b></span>
                        <p><span>- Nombre y Apellido:</span> {buyer.buyer.name}</p>
                        <p><span>- Email:</span> {buyer.buyer.email}</p>
                        <p><span>- Teléfono:</span> {buyer.buyer.phone}</p>
                        <p><span>- Fecha de compra:</span> {buyer.orderDate}</p>
                        <p><span>- Monto Total:</span> {buyer.total}</p>
                        <p><span>- Código de compra:</span> {id}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Link className="btn btn-primary">Volver a la página principal</Link>
                    </Modal.Footer>
                </Modal>
            </div>
    );
}    

export default Ticket;
