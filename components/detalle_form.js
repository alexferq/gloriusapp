const { default: Input_text } = require("./input_text");

function Detalle_Form({titulo, valor, style, nombre, handlerChange}) {
    return ( 
        <div className={style.iglesia_cont}>
            <div className={style.iglesia_col}>
                <span className={style.titulo}>{titulo}</span>
            </div>
            <div className={style.iglesia_col_info}>
                <Input_text tipo="text" style={style} valor={valor} nombre={nombre} handlerChange={handlerChange} />
            </div>
        </div>
     );
}

export default Detalle_Form;