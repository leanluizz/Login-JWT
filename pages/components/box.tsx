import Image from "next/image"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import 'animate.css';
import { useContext, useEffect } from "react";
import { Context } from "./context.tsx";

export function Box(props: any){
const log = (...e: any) =>  console.log(e)
let {settitle, setlegend, Login,setLogin}: any = useContext(Context)


const ForSide = (e: any) => {
    e.preventDefault()
} 

if(process.browser){

const ButtonForm: any= document.querySelectorAll(".btn")
 const Form: any = document.querySelectorAll("form")
  const Background: any = document.querySelector("#background")
  const Forgot: any = document.querySelector("a")
    const Email:any = document.querySelector('#email')
    const PasswordConfirm: any = document.querySelector('#password-confirm')
     const BTNdATE: any = document.querySelector('#btn-data')
     
  useEffect(() => {

    ButtonForm[0].addEventListener("click", () => {

        Form[0].style = "left : -200%; transition: 1.5s;"
        Background.style = "animation: SliderToRight 1.5s forwards;"
        Form[1].style = "right : 25%; transition: 1.5s;"
        Form[2].style = "animation: FormSidetoRight 1.5s forwards;"
        setLogin(true)
        

       setTimeout(() => {
        settitle("Sign in to website")
        setlegend("or use your email for sign your credentials")
        Email.remove()
        PasswordConfirm.remove()
        Forgot.innerHTML = "Forgot your password ?"
        Forgot.style.display = "block"
    }, 500);
        
    })
  }, []) 



  useEffect(() => {
     ButtonForm[1].addEventListener("click", () => {

        Form[1].style = "right : -200%; transition: 1.5s;"
        Background.style = "animation: SliderToLeft 1.5s forwards;"
        Form[0].style = "left : 25%; transition: 1.5s;"
        Form[2].style = "animation: FormSidetoLeft 1.5s forwards;"
        setLogin(false)
        
            setTimeout(() => {
                settitle("Create account")
                setlegend("or use your email for registration")
               Form[2].insertBefore(Email, ButtonForm[2])
               Form[2].insertBefore(PasswordConfirm, Email)
               Forgot.style.display = "none"
            }, 500);                  
        })      
  }, [])

    }
    
    return(
        <form onSubmit={ForSide} className="text-center animate__animated animate__rubberBand" id={props.box}>
            <h1 className="text-dark">{props.title}</h1>
            <p className="text-dark fs-6 ">{props.legendA}</p>
            <p className="text-dark fs-6  p-3">{props.legendB}</p>
            <button type="submit" className="btn btn-outline-dark">{props.button}</button>
        </form>
    )
}
