import styles from "@/styles/stylesComponents/login.module.css";
import styles_button from "@/styles/stylesComponents/boton_submit.module.css";
import Boton_Submit from '@/components/boton_submit';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'
function Boton({ titulo, valores, manejarChange, manejarSubmit }) {
    const salvar =  <FontAwesomeIcon icon={faKey} style={{ marginLeft: '0.5em' }}  />;
    return (
        <form onSubmit={manejarSubmit}>
            
            <div className={styles.login_div}>
                <center><h3>{titulo}</h3></center><br></br>
                <div className="mb-3">
                    <label className={`form-label ${styles.label_form}`} htmlFor="exampleInputEmail1">Correo electrónico</label>
                    <input type="email" className="form-control"  placeholder="email" onChange={manejarChange} name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
                </div>
                <div className="mb-3">
                    <label className={`form-label ${styles.label_form}`} htmlFor="exampleInputPassword1">Contraseña</label>
                    <input type="password" className="form-control" value={valores.password} onChange={manejarChange} name="password" placeholder="password" />
                </div>
                <Link className={`btn btn-primary ${styles_button.btn_login}`} href={`/register`}>
                    Registrar 
                <FontAwesomeIcon icon={faUser} style={{ marginLeft: '0.5em' }} />
                </Link>
                <Boton_Submit texto="Ingresar" icono={salvar} />
            </div>
        </form>
    );
}

export default Boton;