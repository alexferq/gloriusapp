import styles from "@/styles/stylesComponents/boton_submit.module.css";


function Boton_Submit({texto, icono, placeholder, registrar}) {
    return ( 
        <button type="submit" data-bs-toggle="tooltip" data-bs-placement="top" title={placeholder} className={ registrar === true ? `btn ${styles.btn_registrar}` : `btn btn-danger ${styles.btn_login}`}>
            {texto}{icono}
        </button>
     );
}

export default Boton_Submit;