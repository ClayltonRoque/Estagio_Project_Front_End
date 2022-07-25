import styles from '../CrachaCard/cracha.module.css'
import { useEffect, useState } from "react";

export function Cardcracha () {
    const [name, setName] = useState([])
    const [função, setFunção] = useState([])
    const [admissão, setAdmissão] = useState([])
    const [typeBlood, setTypeBlood] = useState([])
    const [id, setId] = useState([])
    useEffect(() => {
        const colaborador =  JSON.parse(localStorage.colaborador)
        setName(colaborador.name)
        setFunção(colaborador.role)
        setAdmissão(colaborador.admission)
        setTypeBlood(colaborador.type_blood)
        setId(colaborador.id)
    },[])
    return (
        <div className={styles.main}>
            <div className={styles.card}>
                <div className={styles.cardFront}>
                    <header>NormaLabs</header>
                    <img className={styles.imgFront} src='/img/userImg.svg'></img>
                    <footer>
                        <label className={styles.label1}>Nome</label>
                        <h2 className={styles.fronth3}>{name}</h2>
                        <label className={styles.label2} >Função</label>
                        <h2 className={styles.fronth2}>{função}</h2>
                        <h1>Funcionario</h1>
                    </footer>   
                </div>
                <div className={styles.cardBack}>
                    <header>NormaLabs</header>
                    <footer>
                        <label className={styles.label3}>Nome</label>
                        <h2 className={styles.backh3}>{name}</h2>
                        <label className={styles.label4}>Admissão</label>
                        <h2 className={styles.backh2}>{admissão}</h2>
                        <label className={styles.label5}>Matricula</label>
                        <h2 className={styles.backh2}>00{id}</h2>
                        <label className={styles.label6}>Tipo Sanguineo</label>
                        <h2 className={styles.backh2}>{typeBlood}</h2>
                        <h1>Funcionario</h1>
                    </footer>    
                </div>
            </div>
        </div>
    )
}