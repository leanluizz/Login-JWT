import next from "next/types";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
export default function Login (){

    const [Date, setDate] = useState({
        user:"",
        password:"",
    })

    const handleInput = (e: any) => {
        setDate({...Date, [e.target.name]: e.target.value})
    }

    const sendData = async () => {
        await fetch("http://localhost:3001/login_cell", {
            method: "POST",
            headers:{
                'Content-Type': "application/json"
            },
            body: JSON.stringify({Date})
        })
        }

    return(
        <div className="p-2">
            <h1 className="text-break text-center pb-2">Sign in</h1>
            <div className="d-flex justify-content-around align-items-center pt-2 pb-4"> 
            <button className="svgbutton"><svg width="1rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg></button>
            <button className="svgbutton"><svg width="2rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z" /></svg></button>
            <button className="svgbutton"><svg width="1.3rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg></button>
            </div>
            <p className="text-break">or use your email for sign your credentials</p>
            <input type="text" onChange={handleInput} name="user" className="form-control mb-3" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
            <input type="password" onChange={handleInput} name="password" className="form-control mb-3" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"></input>
            <button onClick={sendData} type="submit" className="outline-0 border-0 text-light rounded-2 bg-success text-break">Submit</button>
        </div>
    )
}