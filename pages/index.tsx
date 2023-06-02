import Image from 'next/image'
import { Form } from "../pages/components/form.tsx"
import  { ModalComponent } from "./components/ModalError.tsx"
import { Box } from "../pages/components/box.tsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import Head from 'next/head';
import { Context, ContexProvider } from "../pages/components/context.tsx"
import { useContext, useState } from 'react';

export default function Home() {

   let {title, legend}: any = useContext(Context)

   const Modal = <ModalComponent/>
  return (
   <>

   <Head>
   <title>Form</title>
   </Head>
<div id="Login_box" className='rounded-1 d-flex justify-content-beetween align-items-center'>
   <div id='background' className='d-flex justify-content-around align-items-center rounded-8'>
      <Box
      box="First_box"
      title="Welcome Back!"
      legendA="To keep connected with us please"
      legendB="login with your personal info!"
      button="Sign in"
      />

      <Box
      box="Second_box"
      title="Hello, Friend!"
      legendA="Enter your personal details"
      legendB="and start with us!"
      button="Sign up"
      />
   </div>

   <Form
      title={title}
      legend={legend}
   />
</div>
   </>
  )
}
