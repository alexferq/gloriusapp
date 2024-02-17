function Input_text({tipo, style, valor, nombre, handlerChange}) {
    return ( 
        <>
            <input type={tipo} className={style.input_text_form} value={valor} name={nombre} onChange={handlerChange} />
        </>
     );
}

export default Input_text;