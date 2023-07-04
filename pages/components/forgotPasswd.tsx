import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../components/context.tsx'


export default function forgotPasswd(){
const { showModalForgot, setshowModalForgot } = useContext(Context)
    const handleClose = () => setshowModalForgot(false);
    const handleShow = () => setshowModalForgot(true);

const [error, seterror] = useState("")

function ErrorResponse (){
    return seterror("Oops this email dont exist!"), setTimeout(() => {
        seterror(error)
    }, 2000);
}

    let [data, setdata] = useState('')
    const handleInputEmail = (e: any) => setdata(e.target.value);
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    const sendEmail = async () => {
    emailRegex.test(data) == true ? (
    await fetch("http://localhost:3001/sendEmail", {
        method: "POST",
        headers:{
            'Content-Type': "application/json"
        },
        body: JSON.stringify({data})
    }), location.replace("http://localhost:3000/confirm-email"))
    : ErrorResponse()
    }

    return(
        <>

        <a href="#" onClick={handleShow} className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"></a>

        <Modal show={showModalForgot} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Resend email</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-light bg-primary">
            Wich is your email?
            <form action='/confirm-email' onSubmit={sendEmail}>
          <input onChange={handleInputEmail} type="text" maxLength={30} className='form-control w-100 border-0 rounded-1 outline-none'></input>
          </form>
            </Modal.Body>
          <Modal.Footer>
            <p className='text-center'>{error}</p>
          </Modal.Footer>
        </Modal>
      </>
    )
}