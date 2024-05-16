import axios from '../../api/interceptors/response';

export async function getUserInfo(){
    const data = axios.get('https://api.homologation.cliqdrive.com.br/auth/profile/')
    return data
}