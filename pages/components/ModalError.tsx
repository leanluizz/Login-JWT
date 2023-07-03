import 'bootstrap/dist/css/bootstrap.min.css';
import React, { ReactPropTypes, useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Context} from './context.tsx'
import { Roboto } from 'next/font/google';
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

<<<<<<< HEAD
export function ModalComponent({warning}: any) {

  let {show, handleClose}: any = useContext(Context)

=======
export function ModalComponent({warning, title, displayRescue,displayClose, bg, cls, button, rescue}: any) {
  let [data, setdata] = useState('')
  const handleInputEmail = (e: any) => setdata(e.target.value);
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
const sendEmail = async () => {
  emailRegex.test(data) == true ? 
  await fetch("http://localhost:3001/rescuePasswd", {
      method: "POST",
      headers:{
          'Content-Type': "application/json"
      },
      body: JSON.stringify({data})
  }) : alert("Ocorreu algum erro");
  
  }

  let {show, handleClose}: any = useContext(Context)
>>>>>>> ae6447750ba41f2355cd6971f777a245cc44609a
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header  closeButton>
<<<<<<< HEAD
          <Modal.Title>Warning!</Modal.Title>
        </Modal.Header>
        <Modal.Body className={`bg-danger text-light ${roboto.className}`}>
          {warning}
          </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
=======
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={`${bg} text-light ${roboto.className}`} >
          {warning}
          <form onSubmit={(e) => e.preventDefault()}>
          <input type="email" id='inputEmail' onChange={handleInputEmail} className={cls}  />
          </form>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" className={displayClose} onClick={handleClose}>
            {button}
          </Button>
          <Button variant="outline-secondary" className={displayRescue} onClick={sendEmail}>
            {rescue}
>>>>>>> ae6447750ba41f2355cd6971f777a245cc44609a
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}