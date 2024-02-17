import styles from "@/styles/stylesComponents/register.module.css";
import Boton_Submit from '@/components/boton_submit';
import Buton from '@/components/boton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faEye } from '@fortawesome/free-solid-svg-icons'
function Boton({ titulo, clase, passType, manejarVistaCampo , manejarChange, manejarSubmit }) {
    const salvar =  <FontAwesomeIcon icon={faAddressCard} style={{ marginLeft: '0.5em' }}  />;
    const ver =  <FontAwesomeIcon icon={faEye}  />;
    return (
        <form onSubmit={manejarSubmit}>
            
            <div className={styles.login_div}>
                <center><h3>{titulo}</h3></center><br></br>
                <div className="mb-3">
                    <label className={`form-label ${styles.label_form}`} htmlFor="exampleInputEmail1">Nombre Completo</label>
                    <input type="text" className="form-control" placeholder="nombre completo" onChange={manejarChange} name="nombre" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className={`form-label ${styles.label_form}`} htmlFor="exampleInputEmail1">Correo electrónico</label>
                    <input type="email" className="form-control" placeholder="email" onChange={manejarChange} name="email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className={`form-label ${styles.label_form}`} htmlFor="exampleInputPassword1">Contraseña</label>
                    <input type={passType === true ? 'text' : 'password'} className={`form-control ${clase === 'misma' ? styles.misma : styles.diferente}`} id="passwordid" onChange={manejarChange} name="password" placeholder="password" />
                </div>
                <div className="mb-3">
                    <label className={`form-label ${styles.label_form}`} htmlFor="exampleInputPassword1">Repetir Contraseña</label>
                    <input type={passType === true ? 'text' : 'password'} className={`form-control ${clase === 'misma' ? styles.misma : styles.diferente}`} id="password_copyid" onChange={manejarChange} name="password_copy" placeholder="password" />
                </div>
                <Buton texto={ver} tipoBoton="btn btn-warning" manejarClick={manejarVistaCampo}  />
                <Boton_Submit texto="Enviar" placeholder="Ingresar ai sistema" icono={salvar} registrar={true} />
            </div>
        </form>
    );
}

export default Boton;