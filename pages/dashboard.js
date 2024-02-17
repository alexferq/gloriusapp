import axios from 'axios'
import React from 'react'
import {useState} from 'react'
import { useRouter } from "next/router";
import styles from "@/styles/stylesComponents/dashboard.module.css";
import Swal from 'sweetalert2';
import Boton from '@/components/boton';


export default function Dashboard() {
    const [user, setUser] = useState({
        email: '',
        user: ''
    })
    const router = useRouter();
    const getProfile = async () => {
        try {
            const resp = await axios.get('api/profile');
            console.log(resp);
            setUser(resp.data);
            
        } catch (error) {
            console.log(error.response)
        }
    }
    const logoutProfile = async () => {
        try {
            const response = await axios.post('/api/auth/logout');
            console.log(response)
            if(response.status===200){
                router.push('/login');
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className={`container ${styles.dashboard_div}`}>
    <h1>Dashboard</h1>
    <pre>
        {JSON.stringify(user, null, 2)}
    </pre>

    {/* <button className={`btn btn-success ${styles.btn_login}`} onClick={(() => getProfile())}>
        Get Profile
    </button> */}
    <Boton texto="Get Profile" tipoBoton="btn btn-success" manejarClick={getProfile}  />
    {/* <button className={`btn btn-primary ${styles.btn_login}`} onClick={() => logoutProfile()}>Log out</button> */}
    <Boton texto="Log out" tipoBoton="btn btn-primary" manejarClick={logoutProfile}  />
</div>
  )
}
