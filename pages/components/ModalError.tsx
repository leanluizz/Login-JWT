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

export function ModalComponent({warning}: any) {


  let {show, handleClose}: any = useContext(Context)
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header  closeButton>
          <Modal.Title>Warning!</Modal.Title>
        </Modal.Header>
        <Modal.Body className={`bg-danger text-light ${roboto.className}`} >
          {warning}
          </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" className="bg-secondary text-light" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}