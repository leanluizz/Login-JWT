import next from "next/types";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './login.tsx'
export default function (){

if (process.browser) {
    const LoginCell = document.querySelector("#LoginCell") 
    console.log(LoginCell);
}

    return(
        <div className="dropdown ps-3 me-1">
        <button type="button" id='Login' className="rounded-4 text-center overflow-hidden text-break fw-bold outline-0 border-0 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
          Login
        </button>
        <ul className="dropdown-menu">
        <Login />
        </ul>
      </div>
    )
}