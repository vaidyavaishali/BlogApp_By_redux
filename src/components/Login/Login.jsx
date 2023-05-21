import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import '../Login/login.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { LoginData } from '../../redux/slice/loginSlice';
function Login() {
  // const dispatch = useDispatch()

  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const dispatch = useDispatch()
  const login = useSelector((state)=>(state.data))
  console.log(login)
  const navigate = useNavigate()
  const LoginUser = () => {
    if (validate) {
      console.log("okkkk")
      dispatch(LoginData(loginData))
      alert("Login successfully")
      navigate("/home")

    } else {
      alert("not found")
    }
  }
  // console.log(loginData)

  const validate = (value) => {
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
    return 1
  }
  return (
    <>
      <div className='login'>
        <h3 className='text-center mb-3'>Login</h3>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3 input">
          <Form.Control type="email" placeholder="name@example.com" style={{ height: "7vh" }} onChange={(e) => { setLoginData({ ...loginData, email: e.target.value }) }} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password" className='input'>
          <Form.Control type="password" placeholder="Password" style={{ height: "7vh" }} onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }) }} />
        </FloatingLabel>
        <Button variant="primary" className='login-btn' onClick={() => { LoginUser() }}>Login</Button>
        <Link to="/register"> <Button variant="wariung" className='login-btn border border-primary'>Dont Have an account ?</Button></Link>
      </div>

    </>
  );
}

export default Login;