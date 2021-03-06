import axios from 'axios';
import {useEffect , useState , useCallback} from 'react'
import Cookies from 'universal-cookie';
import Layout from "../components/Layout"
import authAtom from "../store/authAtom"
import { useAtom } from 'jotai'
import {useRouter} from  'next/router'

export default function me(){
    const [profile , setProfile] = useState({});
    const [, setAuth] = useAtom(authAtom)
    const router = useRouter();
    useEffect(() => {
        axios.get(`${process.env.API_HOST}/me`)
            .then(response =>  setProfile(response.data))
            .catch(error => console.warn(error))
    }, [])

    const logout = useCallback (() => {
        const cookies = new Cookies();
        cookies.remove('token')
        setAuth(auth => ({...auth , token: null , user : null}))
        delete axios.defaults.headers.common.Authorization;
        router.push('/')
    }, [])

    
    const rrr = profile.created_at;
    const date = new Date(rrr);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    let userDate = year + '-' + month + '-' + day + " " + hour + ' : ' + min 
 
   

    return <Layout>
        <div className="container">
            <dl>
                <dt>이메일</dt>
                <dd>{profile.email}</dd>
                <dt>이름</dt>
                <dd>{profile.name}</dd>
                <dt>가입일시</dt>
                <dd>{userDate}</dd>
            </dl>
        

            <button className="btn btn-danger" onClick={logout}>로그아웃</button>
        </div>
    </Layout>
}


export const getServerSideProps = async ({req , res , resolvedUrl}) => {
    const cookies = new Cookies(req.headers.cookie);
    console.log('cookies ::' , cookies)
    const token = cookies.get('token');

    if(token){
        return{
            props : {}
        }
    }else{
        return {
            redirect: {
                destination: '/auth/sign-in?ref=' + resolvedUrl,
                permanent: false,
            }
        }
    }
}