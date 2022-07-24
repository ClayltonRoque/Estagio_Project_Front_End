import styles from './login.module.css'
import Head from '../../../node_modules/next/head'
import { useState } from 'react'
import axios from "axios"
import { useRouter } from 'next/router';
import { HeadersDefaults } from 'axios'
// import Image from '../../../node_modules/next/image'
// import person from '/public/img/person_black_24dp.svg'

interface CommonHeaderProperties extends HeadersDefaults {
    token: string;
  }

export function Login() {
    const router = useRouter();

    const startValues = {
        login: "",
        password: "",
    }

    const [values,setValues] = useState(startValues)

    function onChange(ev: { target: { name: any; value: any; }; }) {
        const { name, value } = ev.target;
        console.log(name, value)
        console.log(values)
        setValues({ ...values, [name]: value })
    }

    
    async function loginFunction() {
        const {data: {token, colaborador}} = await axios.post('http://localhost:3000/coloborador_authenticate', values);
        localStorage.setItem("colaborador", JSON.stringify(colaborador))
        localStorage.setItem('token', JSON.stringify(token));
        axios.defaults.headers = {
            token: `${token}`
          } as CommonHeaderProperties;
        router.push("/home")
    }

    function onSubmit(ev) {
        ev.preventDefault()
        loginFunction();
    }

    return (
        <div className={styles.main}>
              <Head> <title>Login</title> </Head>

            <div className={styles.card}>
            <header>Login</header>
                <form onSubmit={onSubmit}>
                    {/* <span>
                    <Image className={styles.img} src={person}></Image>
                    </span> */}
                    <div>
                    
                    <label htmlFor='user'>Usuario</label>
                      {/* <Image id={styles.socorro} src={person}/> */}
                    <input id='user' placeholder='Digite seu usuario' name="login" onChange={onChange} /> 
                   
                    </div>
                    <div>
                    <label htmlFor='senha'>Senha</label>
                    <input id='senha' placeholder='Digite sua Senha' name="password" onChange={onChange} />
                    {/* <span>
                    <Image src={person}></Image>
                    </span> */}
                    </div>
                    
                    <button onSubmit={(ev)=> {onSubmit(ev)}}>Entrar </button>
                 
                    </form>
            </div>
        </div>
    )
}