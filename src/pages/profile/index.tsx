import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getUserInfo } from "../../api/crud/getUserInfo";

export function Profile() {

  const [token, setToken] = useState(localStorage.getItem('token'))
  const [profile, setProfile] = useState<any>('');
  
  function logOut(){
    localStorage.removeItem('token');
    setToken('');
  }

  useEffect(()=> {
    getUserInfo().then(response => setProfile(response.data))    
  },[])
  //console.log(profile)
  if(!token){
    return <Navigate to='/'/>
  }

  return (
    <>
    {profile ? 
      <>
        <header className="bg-white w-full h-20 absolute">
          <button onClick={logOut} data-cy='logOutBtn' className="bg-[#02274f] text-white py-3 px-32 font-semibold rounded-lg m-4 float-right">Logout</button>
        </header>
        <main className="bg-[#f1f5f9]" data-cy='main'>
          <div className="shadow-2xl rounded-xl shadow-black/50 w-[450px] h-[400px] px-5 flex justify-center flex-col bg-white gap-10">
            <div className="flex items-center justify-center flex-col">
              <h1 className="w-full text-center">Profile picture</h1>
              <img src={`${profile.avatar}`} alt='homem bem vestido' className="w-20 h-20 rounded-lg" />
            </div>

            <div className="flex flex-col gap-6 w-full">
              <div className="flex flex-col gap-2">
                <label htmlFor="gmail" className="font-medium"><span className="font-normal">Your</span> Name</label>
                <input placeholder={`${profile.name}`}  id='gmail' className="rounded-lg p-3 bg-[#f1f1f1] cursor-default" readOnly/>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium"><span className="font-normal">Your</span> E-mail</label>
                <input placeholder={`${profile.email}`} className="rounded-lg p-3 bg-[#f1f1f1] cursor-default" readOnly/>
              </div>
            </div>
          </div>
        </main>  
      </>
      :
        <p className="w-full h-screen flex justify-center items-center" data-cy='loading'>Loading...</p>
    }
    </>
  );
}