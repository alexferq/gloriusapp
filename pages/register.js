import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/router";
import styles from "@/styles/stylesComponents/login.module.css";
import Swal from 'sweetalert2';
import Register_Form from '@/components/register_form';


export default function RegisterPage() {
    const [credentials, setCredentials] = useState({
        nombre: '',
        email: '',
        password: '',
        password_copy: ''
    })
    const [active, setActive] = useState('diferente');
    const [tipo, setTipo] = useState(false);
    const router = useRouter();
    const handlerChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })

        if (e.target.name === 'password') {
            if (e.target.value === credentials.password_copy) {
                setActive('misma');
            } else {
                setActive('diferente');
            }
        }
        if (e.target.name === 'password_copy') {
            if (e.target.value === credentials.password) {
                setActive('misma');
            } else {
                setActive('diferente');
            }
        }
    }

    const typeHandler = () => {
        setTipo(!tipo);
    };

    const clearFields = () => {
        setCredentials({
            email: '',
            password: '',
        });
        console.log('limpira')
    };

    const handlerSubmit = async (e) => {
        e.preventDefault()
        try {
            if (credentials.password === credentials.password_copy) {
                const resp = await axios.post('/api/auth/register', credentials);
                if (resp.status === 200) {
                    Swal.fire({
                        title: "Usuario registrado correctamente",
                        showDenyButton: false,
                        showCancelButton: false,
                        confirmButtonText: "ACEPTAR",
                    }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                            router.push('/login');
                        } 
                    });
                }
            } else {
                Swal.fire({
                    title: "Mensaje",
                    text: "Las contaseñas son diferentes",
                    icon: "error"
                });
            }

        } catch (error) {
            console.log(error.response);
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
            <Register_Form titulo="Registrar" clase={active} passType={tipo} manejarVistaCampo={typeHandler} manejarChange={handlerChange} manejarSubmit={handlerSubmit} />
        </div>
    )
}
