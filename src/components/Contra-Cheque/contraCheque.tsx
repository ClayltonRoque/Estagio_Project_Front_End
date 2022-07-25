import styles from '../Contra-Cheque/contraCheque.module.css'
import { useEffect, useState } from "react";

export function ContraChequeCard () {
    const [name, setName] = useState([])
    useEffect(() => {
        const colaborador =  JSON.parse(localStorage.colaborador)
        setName(colaborador)
    },[])
    return (
        <div className={styles.main}>
            <div className={styles.card}>
                <header><p>Nome: {name.name}</p>
                <p>Profissão: {name.role}</p>
                <p>Data Admissão: {name.admission}</p> 
                </header>
                <main>
                    <p>Salario<span>1.500,00 R$</span></p>
                    <p>Descontos<span>- 50,00 R$</span></p>
                    <p>Inss<span>- 80,00 R$</span></p>
                    <p>Salario-Familia<span>100,00 R$</span></p>
                </main>
                
            </div>
            
        </div>
    )
}