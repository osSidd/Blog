import { Link } from "react-router-dom";

export default function Login(){
    return (
            <form className='form' action="">
                <h1 className='form-heading'>Login Form</h1>

                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" placeholder='Email'/>

                <label htmlFor="password">Password:</label>
                <input type="password" name='password' id='password' placeholder='Password'/>

                <button type="submit">Log in</button>
                <div>Haven't registered yet? <Link to="/signup">Sign up</Link></div>
            </form>
    )
}