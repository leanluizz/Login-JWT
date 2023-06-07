import next from "next/types";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function (){
    return(
        <div className="p-2">
            <h1 className="text-break text-center">Sign in</h1>
            <p className="text-break">or use your email for sign your credentials</p>
            <input type="text" name="user" className="form-control mb-3" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
            <input type="password" name="password" className="form-control mb-3" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"></input>
            <button type="submit" className="outline-0 border-0 text-light rounded-2 bg-success text-break">Submit</button>
        </div>
    )
}