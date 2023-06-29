import Image from "next/image"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import { SyntheticEvent, useContext, useEffect, useLayoutEffect, useState } from "react";
import { ModalComponent } from "./ModalError.tsx"
import { Context } from './context.tsx'
    
export function Form(props: any) {
    let { handleShow, Login, setIs }: any = useContext(Context)
    let [Warning, setWarning] = useState<String>('')
    let [Title, setTitle] = useState<String>('')
    let [classModalInput, setclassModalInput] = useState<String>('')
    let [BackgroundModal, setBackgroundModal] = useState<String>('')
    let [displayBtnModalClose, setdisplayBtnModalClose] = useState<String>('')
    let [displayBtnModalRescue, setdisplayBtnModalRescue] = useState<String>('')

    const [Date, setDate] = useState({
        user:"",
        password:"",
        email:""
    })

    const handleInput = (e: any) => {
        setDate({...Date, [e.target.name]: e.target.value})
    }
    const Submit = (e: SyntheticEvent) => {
        e.preventDefault()
        setTitle("Warning!")
        setclassModalInput("d-none")
        setBackgroundModal('bg-danger')
        setdisplayBtnModalClose('d-block')
        setdisplayBtnModalRescue('d-none')

        const Inputs = document.querySelectorAll('.register')
      
   const registerData = async () => {
            await fetch("http://localhost:3000/api/hello", {
                method: "POST",
                headers:{
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({Date})
            })
            .then(response => response.status === 200  ? setIs(true) : setIs(false))
            }
        if(!Login){ //Register
                

            let StatusBox: any = document.querySelector(".bg-opacity-75")
            StatusBox.style.display = "block"
            StatusBox.classList.add('animate__animated', 'animate__backInLeft');
            setTimeout(() => {
            StatusBox.classList.add('animate__animated', 'animate__backOutLeft');
            }, 2000);

        let inputValid = Inputs[1].value == Inputs[2].value
        Inputs.forEach((i: any) => i.value == '' || !inputValid ? (e.preventDefault(), handleShow()) : registerData())
        if (!inputValid) {
            setWarning("Passwords not are same")
        } else {
            setWarning("Empty forms entries")
        }
         }else{ // Login
            e.preventDefault()
            const sendData = async () => {
            await fetch("http://localhost:3001/login", {
                method: "POST",
                headers:{
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({Date})
            })
            .then(response => response.status == 200  ? setIs(true) : setIs(false))
            }
            sendData()
         }
        
    }

    useEffect(() => {
        const getResetPassword = document.querySelector("a")
        getResetPassword?.addEventListener("click", () => {
            handleShow()
            setTitle('Rescue your password with your email')
            setclassModalInput("d-block mx-auto w-75 rounded-2 border-2 bg-primary form-control")
            setWarning('')
            setBackgroundModal('')
            setdisplayBtnModalClose('d-none')
            setdisplayBtnModalRescue('d-block')
        })
    }, 
    [])
    

    return (
        <>
            <ModalComponent warning={Warning} 
            title={Title}
            button="Close"
            cls={classModalInput}
            bg={BackgroundModal}
            rescue="Submit"
            displayRescue={displayBtnModalRescue}
            displayClose={displayBtnModalClose}
            />
            <form onSubmit={Submit} action="./api/hello" id={props.id} className="p-1 mx-auto text-center animate__animated animate__rubberBand">
                <h1 className="pb-5 pt-5 text-break animate__animated animate__rubberBand" >{props.title}</h1>
                <div className="d-flex justify-content-around align-items-center">
                    <button className="svgbutton"><svg width="1rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg></button>
                    <button className="svgbutton"><svg width="2rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z" /></svg></button>
                    <button className="svgbutton"><svg width="1.3rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg></button>
                </div>

                <p className="text-center text-break pt-5 pb-5">{props.legend}</p>
                <input type="text" name="user" onChange={handleInput} id="inputs" className="form-control mb-3 register" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                <input type="password" name="password" onChange={handleInput} className="form-control mb-3 register" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"></input>
                <input type="password" id="password-confirm" className="form-control mb-3 register" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"></input>
                <input type="email" id="email" name="email" onChange={handleInput} className="form-control mb-3 register" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"></input>
                <button type="submit" id="btn-data" className="btn btn-success text-break">Submit</button>
                <p className="text-center mt-1"><a href="#" className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"></a></p>
            </form>
        </>


    )
}
