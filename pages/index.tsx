import { Form } from "../pages/components/form.tsx"
import { Box } from "../pages/components/box.tsx"
import Status  from "../pages/components/status.tsx"
import  Dropdown  from './cell/dropdown.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import Head from 'next/head';
import { Context } from "../pages/components/context.tsx"
import {useContext, useEffect, useState } from 'react';

export default function Home() {

   let {title, legend, Is}: any = useContext(Context)

const flex: string= "d-flex justify-content-around align-items-center rounded-8"
const none: string = "d-none justify-content-around align-items-center rounded-8" 
const [screen, setscreen] = useState<any>()

useEffect(() => { 
   setscreen(window.innerWidth < 900 ? none : flex)
}, [])

  return (
   <>
   <Head>
   <title>Form</title>
   </Head>
   
   <Status
   boxClass={`${Is == true ? "bg-success" : "bg-danger"} bg-gradient bg-opacity-75 w-25 height-status-box position-absolute z-3`}
   textClass="text-center text-light p-4"
   fail="Ocurred an error..."
   success="Register was a success, you can login now!!"/>
   <Dropdown />
<div id="Login_box" className='rounded-1 d-flex justify-content-beetween align-items-center'>
   <div id='background' className={screen}>
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
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossOrigin="anonymous"></script>
   </>
  )
}
