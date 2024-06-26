import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import logo from '../../assets/B2Bit Logo.png'
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../api/crud/login";
import { useNavigate } from "react-router-dom";

export function Home() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  async function postUser(e: any){
    e.preventDefault()
    login(email, password)
      .then((response) => {
        navigate('/profile')
        localStorage.setItem("token", `Bearer ${response.data.tokens.access}`)
        //console.log(response)
      })
      .catch(() => {
        if(!email || !password){
          toast.error("Por favor, preencha todos os campos", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });

        }
        else {
          toast.error("Email ou senha incorretos", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
          });
        }
      })
      console.log(email)
      console.log(password)
  }

  
  return (
    <main>
        <div className="shadow-2xl rounded-xl shadow-black/50 w-[438px] h-[534px] px-5 flex gap-10 justify-center flex-col">
        <img src={logo} className='w-[295px] h-[116px] mx-auto'/>
        <form className="flex flex-col gap-6 w-full" onSubmit={postUser} id="user">
          <div className="flex flex-col gap-2">
            <label htmlFor="gmail" className="font-medium">E-mail</label>
            <input 
              data-cy='inputEmail'
              onChange={e => setEmail(e.target.value)}
              placeholder="@gmail.com"  id='gmail' className="rounded-lg p-3 bg-[#f1f1f1]" type="email" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-medium">Password</label>
            <input 
              data-cy='inputPassword'
              onChange={e => setPassword(e.target.value)}
              placeholder="*********************" id="password" className="rounded-lg p-3 bg-[#f1f1f1]" type="password"/>
          </div>
          <button type="submit" data-cy='signInBtn' className="bg-[#02274f] w-full rounded-lg text-white p-3">Sign In</button>
        </form>
      </div>
      <div data-cy='toast'>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />'
      </div>
    </main>
  );
}