import { useEffect } from "react";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Login() {
  const [id,setid]=useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if(!!localStorage.getItem('userId')){
      alert('logged in')
      setTimeout(() => {
          navigate('/cart')
      }, 2000)
    }
  }, [])

  const handleLogin = (e) => {

    e.preventDefault();
    // check user

    if(id === 'shreya' && password === '1234'){
      // you are logged in

      localStorage.setItem('userId', id);
      setTimeout(() => {
        navigate('/cart')
      }, 2000)

    } else{
      alert('wrong id password', id, password)
    }



  }

  return (
    <div className="bg-blue-100  mt-20 w-96 ">
      <p className="mb-4 text-2xl">Please login to your account</p>
      <div className="mb-4">
        <input
          type="text"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlInput1"
          placeholder="Username"
          onChange={e=>setid(e.target.value.trim())}
        />
      </div>

      <div className="mb-4">
        <input
          type="password"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlInput1"
          placeholder="Password"
          onChange={e=>setPassword(e.target.value.trim())}

        />
      </div>
      <button

        type="button"
        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={handleLogin}
      >
        Login
      </button>



    </div>
  )
}
export default Login