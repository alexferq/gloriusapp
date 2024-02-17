import styles from '@/styles/stylesComponents/tabla.module.css'
import Boton from './boton'
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

function Tabla({encabezados, filas, titulo, editar, eliminar}) {
   const agregarIglesia = () => {
    router.push('/iglesia/agregar');
   }

   const router = useRouter();
    return ( 
            <div className={styles.cuerpoTabla}>
                <div className={styles.titulo_tabla}>
                    <h2>{titulo}</h2>
                </div>

                <div className={styles.area_boton}>
                  <Boton texto="Agregar Iglesia" tipoBoton="btn btn-primary" manejarClick={agregarIglesia} />
                </div>

                <table className={styles.rwd_table}>
                <thead>
                  <tr className={styles.tr_table}>
                    {encabezados.map((enca, index) => (
                        <th className={styles.th_table} key={index}>{enca}</th>
                    ))}
                    <th className={styles.th_table}>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                    {filas.map(fila => (
                        <tr className={styles.tr_table} key={fila.id}>
                         <td className={styles.td_table}>{fila.nombre}</td>
                         <td className={styles.td_table}>{fila.pais}</td>
                         <td className={styles.td_table}>{fila.ciudad}</td>
                         <td className={styles.td_table}>{fila.direccion}</td>
                         <td className={styles.td_table}>{fila.telefono}</td>
                         <td className={styles.td_table}>
                           {/* <Boton texto="Editar" tipoBoton="btn_editar btn_editar_small" manejarClick={() => editar(fila.id)} />
                           <Boton texto="Eliminar" tipoBoton="btn_eliminar btn_eliminar_small" manejarClick={() => eliminar(fila.id)} /> */}
                           {/* <FontAwesomeIcon icon="arrow-down-9-1" /> */}
                           <Link className="btn_ver btn_ver_small" href={`/iglesia/${fila.id}`}>
                                Ver
                           </Link>
                         </td>
                       </tr>
                    ))}
                 
                </tbody>
              </table>
            </div>
     );
}

export default Tabla;