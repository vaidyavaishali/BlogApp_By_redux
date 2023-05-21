import { useState } from "react"
import NewBlogReducer from "../../redux/slice/addblogSlice"
import { AddBlog } from "../../redux/slice/addblogSlice"
import { useDispatch, useSelector } from "react-redux"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom"
const AddNewBlog = () => {
  const [input, setInput] = useState({ title: "", description: "", file: "" })
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const data = useSelector((state) => (state))
  console.log(input)

  const NewBlog = () => {
    dispatch(AddBlog(input))
    navigate("/home")
  }

  return (
    <>
      <div className="login-container" style={{width:"100vw"}} >
        <h1>BlogPost</h1>
        {/* <div className="email-container">
          <label>Title</label>
          <input type="text" id="email-input" onChange={(e) => { setInput({ ...input, title: e.target.value }) }} />
        </div>
        <div>
          <span>Desciption</span>
          <textarea rows={3} cols={30} onChange={(e) => { setInput({ ...input, description: e.target.value }) }} ></textarea>
        </div>
        <div >
          <label>Image</label>
          <input type="text" onChange={(e) => { setInput({ ...input, file: e.target.value }) }} className="img" />
        </div> */}
        <div style={{width:"30%", margin:"auto", textAlign:"center"}}>
          <FloatingLabel
            controlId="floatingInput"
            label="Title"
            className="mb-3 input">
            <Form.Control type="text" placeholder="name@example.com" style={{ height: "7vh" }} onChange={(e) => { setInput({ ...input, title: e.target.value }) }} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Desciption" className='input'>
            <Form.Control type="text" style={{ height: "7vh" }} onChange={(e) => { setInput({ ...input, description: e.target.value }) }} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Image" className='input'>
            <Form.Control type="text" placeholder="file" style={{ height: "7vh" }} onChange={(e) => { setInput({ ...input, file: e.target.value }) }} />
          </FloatingLabel>


          <button id="login-btn" onClick={() => { NewBlog() }} style={{}}>Post</button>
        </div>

      </div>
    </>
  )
}
export default AddNewBlog