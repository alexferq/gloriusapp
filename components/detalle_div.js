function Detalle_Div({titulo, valor, style}) {
    return ( 
        <div className={style.iglesia_cont}>
            <div className={style.iglesia_col}>
                <span className={style.titulo}>{titulo}</span>
            </div>
            <div className={style.iglesia_col_info}>
                <span className={style.valor}>{valor}</span>
            </div>
        </div>
     );
}

export default Detalle_Div;