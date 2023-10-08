import { Link } from "react-router-dom";

export default function Signup(){
    return (
            <form className='form' action="">
                <h1 className='form-heading'>Signup Form</h1>
                <label htmlFor="name">Name:</label>
                <input type="text" name='name' id='name' placeholder='Name'/>

                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" placeholder='Email'/>

                <label htmlFor="password">Password:</label>
                <input type="password" name='password' id='password' placeholder='Password'/>

                <label htmlFor="confirm-password">Confirm password:</label>
                <input type="password" name='confirm-password' id='confirm-password' placeholder='Confirm password'/>

                <label htmlFor="phone">Phone:</label>
                <input type="text" name="phone" id="phone" placeholder='Phone'/>

                <label htmlFor="gender">Gender:</label>
                <div className='input-wrapper'>
                    <input type="radio" name="gender" id="gender" value="male"/><span>Male</span>            
                </div>
                <div className='input-wrapper'>
                    <input type="radio" name="gender" id="gender" value="female" /><span>Female</span>
                </div>
                <div className='input-wrapper'>
                    <input type="radio" name="gender" id="gender" value="other" /><span>Others</span>
                </div>

                <label htmlFor="about">How did you hear about this?</label>
                <div className='input-wrapper'>
                    <input type="checkbox" name="linkedin" id="about" /><span>Linkedin</span>
                </div>
                <div className='input-wrapper'>
                    <input type="checkbox" name="friends" id="about" /><span>Friends</span>
                </div>
                <div className='input-wrapper'>
                    <input type="checkbox" name="job portal" id="about" /><span>Job portal</span>
                </div>
                <div className='input-wrapper'>
                    <input type="checkbox" name="others" id="about" /><span>Others</span>
                </div>  

                <label htmlFor="city">City:</label>
                <select name="city" id="city">
                    <option value="mumbai">Mumbai</option>
                    <option value="pune">Pune</option>
                    <option value="ahmedabad">Ahmedabad</option>
                </select>

                <label htmlFor="state">State:</label>
                <div>Auto suggest</div>

                <button type="submit">sign up</button>
                <div>Already signed up? <Link to="/login">Log in</Link></div>
            </form>
    )
}