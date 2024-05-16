import "react-toastify/dist/ReactToastify.css";
import axios from '../interceptors/request';

export async function login(email: string, password: string){
    const data = await axios.post("https://api.homologation.cliqdrive.com.br/auth/login/", 
        {email,password}
    )
    return data
}