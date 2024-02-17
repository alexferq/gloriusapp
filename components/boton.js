import styles from "@/styles/stylesComponents/boton.module.css";

function Boton({texto, icono, tipoBoton, manejarClick}) {
    return ( 
        <button type="button" className={`${tipoBoton} ${styles.btn_login}`} onClick={manejarClick}>
        {texto} {icono}
      </button>
     );
}

export default Boton;