import React from 'react'
import s from './From.module.css'

export default function From() {
    return (
        <div className={s.from}>
            <h2>Registrate</h2>
            <div>
                <label >Nombre: </label>
                <input type="text" id="uname" name="name" required></input>
                <br/>
                <label >whatsapp: </label>
                <input type="password" id="uname" name="pass" required></input>
                <br/>
                <label >Correo electronico: </label>
                <input type="password" id="uname" name="mail" required></input>
                <br/>
                <label for="cars">Tipo Negocio:</label>
                <select  name="opcion">
                    <option value="op_1">Option 1</option>
                    <option value="op_2">Option 2</option>
                    <option value="op_3">Option 3</option>
                </select>
                <br/>
                <button>Enviar</button>
            </div>
            

        </div>
    )
}
