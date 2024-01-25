// import React, { useState } from 'react'
// import { Container, Row, Col } from 'react-bootstrap';
// import { Link,useNavigate } from 'react-router-dom';
// const Login = () => {
//     const [email,setEmail] =  useState()
//     const [password,setPassword] =  useState()
//     let navigate = useNavigate()
//     const handleNavigate = () =>{
//         navigate('/dashboard')
//     }
//     const canSave = Boolean(email) && Boolean(password)

//   return (
//     <Container>
//         <label>Email:</label>
//          <input type='text' 
//          className='form-control shadow-none' 
//          value={email}
//          onChange={(e)=>setEmail(e.target.value)}
//          placeholder='Enter your Email'/>

//         <label>Password:</label>
//             <input type='text'
//             className='form-control shadow-none' 
//             value={password}
//          onChange={(e)=>setPassword(e.target.value)}
//              placeholder='Enter your Password'/>

//             <button
//              className='btn btn-success mt-3'
//              onClick={handleNavigate}
//              disabled={!canSave}
//              >LOGIN</button>
            
//     </Container>
//   )
// }

// export default Login