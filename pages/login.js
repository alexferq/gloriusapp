import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/router";
import styles from "@/styles/stylesComponents/login.module.css";
import Swal from 'sweetalert2';
import Login_Form from '@/components/login_form';


export default function LoginPage() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const router = useRouter();
  const handlerChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const clearFields = () => {
    setCredentials({
      email: credentials.email,
      password: '',
    });
  };

  const handlerSubmit = async (e) => {
    e.preventDefault()
    try {
      const resp = await axios.post('/api/auth/login', credentials);
      console.log(credentials)
      console.log(resp)
      if (resp.status === 200) {
        router.push('/dashboard');
      }
    } catch (error) {
      console.log(error);
      console.log(credentials)
      clearFields();
      Swal.fire({
        title: "Mensaje",
        text: error.response.data.error,
        icon: "error"
      });
    }
  }
  return (
    <div className={`container ${styles.login_div_main}`}>
      <Login_Form titulo="LOGIN" valores={credentials} manejarChange={handlerChange} manejarSubmit={handlerSubmit}/>
    </div>
  )
}
