import React, {useState} from "react";

export const Boton = () => {
    const [numero, texto] = useState('0-Cero');
  return (
    <div className="boxPadre">
    <div className="showBox">{numero}</div>
    <div className="btnBox">
        <button className="btn" onClick={() => texto("1-Uno")}>1</button>
        <button className="btn" onClick={() => texto("2-Dos")}>2</button>
        <button className="btn" onClick={() => texto("3-Dos")}>3</button>
    </div>
</div>
  )
}
