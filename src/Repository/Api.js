import axios from "axios";

const Baseurl = `https://issa-backend.vercel.app/api/v1/`


export const user_login = async () => {
    try{
        const res = await axios.post(`${Baseurl}superAdmin/signin`)
        console.log(res)
    }catch{}
}