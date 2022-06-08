import React, {useState} from 'react'
import image from '.././image'
import axios from 'axios'

const Signup = () => {

    const [fName, setfName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');


        const SignUpUser = async(e) => {
            e.preventDefault();
            console.log(fName,email,password,cPassword);
            try {
                const response = await axios.post('http://localhost:8080/create',JSON.stringify({fName,email,password,cPassword}),
                    {
                        headers: {'Content-Type': 'application/json'},
                        withCredentials: true
                    }
                );

            } catch (error) {
                if (error) {
                    console.log('error');
                }
            }
        }

  return (
    <section className="signup">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign Up</h2>
                        <form method="POST" className="register-form" id="register-form">
                            <div className="form-group">
                                <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" id="name" placeholder="Your Name" onChange={(e)=>{setfName(e.target.value)}} value={fName}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email" onChange={(e)=>{setEmail(e.target.value)}} value={email} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" onChange={(e)=>{setCPassword(e.target.value)}} value={cPassword} />
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                                <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Register"/>
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure><img src={image.signup} alt="sing up image"/></figure>
                        <a href="/signin" className="signup-image-link">I am already member</a>
                    </div>
                </div>
            </div>
        </section>
 )
}

export default Signup