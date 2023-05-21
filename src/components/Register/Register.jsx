import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import "./login.css"\
// import "../Login/login.css"
import "../Register/register.css"
import { Link } from 'react-router-dom';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterData } from '../../redux/slice/registerSlice';

function Register() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const error = useSelector((state) => (state.register.error_register))
    const [registerData, setRegisterData] = useState({ email: "", password: "", confirm_password: "" })

    const RegisterUser = () => {
        if (validateUser(registerData)) {
            dispatch(RegisterData(registerData))
            alert("Register Successfully..!!")
            navigate("/")
        } else {
            console.log(error)
        }
    }
    let validateUser = (value) => {
        if (!value.email) {
            alert('email is required')
            return 0
        } else if (!value.password) {
            alert('password is required')
            return 0
        }
        else if (value.password.length < 6) {
            alert('length of password greater than 6')
            return 0
        }
        else if (value.password.length > 10) {
            alert('length of password smaller than 10')
            return 0
        }
        else if (!value.confirm_password) {
            alert('confirmpassword is required')
            return 0
        }
        else if (value.password !== value.confirm_password) {
            alert('password doesnt match')
            return 0
        }
        return 1
    }

    return (
        <>
            <div className='login'>
                <h3 className='text-center'>Register</h3>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3 input">
                    <Form.Control type="email" placeholder="name@example.com" style={{ height: "7vh" }} onChange={(e) => { setRegisterData({ ...registerData, email: e.target.value }) }} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password" className='input'>
                    <Form.Control type="password" placeholder="Password" style={{ height: "7vh" }} onChange={(e) => { setRegisterData({ ...registerData, password: e.target.value }) }} />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="confirm password" className='input'>
                    <Form.Control type="password" placeholder="confirm passwird" style={{ height: "7vh" }} onChange={(e) => { setRegisterData({ ...registerData, confirm_password: e.target.value }) }} />
                </FloatingLabel>
                <Button variant="primary" className='login-btn' onClick={() => { RegisterUser() }}>Register</Button>
                <Link to="/"> <Button  variant="wariung"  className='login-btn border-primary'>Already Have an account ?</Button></Link>
            </div>

        </>
    );
}

export default Register;