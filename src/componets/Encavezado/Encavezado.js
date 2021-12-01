import React from 'react';
import s from './Encavezado.module.css'

export default function Encavezado() {
    return (
        <>
            <div className={s.header}>
                <img
                    alt=""
                    src="/logo.svg"
                    className={s.header__img}
                    />
                Estrategia digital para su negocio
            </div>
        </>
    )
}
