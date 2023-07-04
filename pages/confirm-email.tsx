import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

setTimeout(() => {
    handleShow()
}, 500);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Resend email</Modal.Title>
        </Modal.Header>
        <Modal.Body>Insert the code</Modal.Body>
        <Modal.Footer>
        <div className='d-flex'>
        <input  type="text" maxlength="1" className={`w-25 ms-5 text-center p-4 border border-bottom`}></input>
        <input  type="text" maxlength="1" className={`w-25 ms-5 text-center p-4 border border-bottom`}></input>
        <input  type="text" maxlength="1" className={`w-25 ms-5 text-center p-4 border border-bottom`}></input>
        <input  type="text" maxlength="1" className={`w-25 ms-5 text-center p-4 border border-bottom`}></input>
        </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;