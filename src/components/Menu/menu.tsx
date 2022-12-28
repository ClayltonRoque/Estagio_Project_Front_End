import Head from "../../../node_modules/next/head";
import styles from "../Menu/menu.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { funcionarioPdf } from "../Pdf/pdf";

export function Menu() {
  const [name, setName] = useState("");
  useEffect(() => {
    const colaborador = JSON.parse(localStorage.colaborador);
    setName(colaborador.name);
  }, []);

  const router = useRouter();

  function onSubmitContraCheque(ev: { preventDefault: () => void }) {
    ev.preventDefault();
    router.push("/contra-cheque");
  }

  function onSubmitCracha(ev: { preventDefault: () => void }) {
    ev.preventDefault();
    router.push("/cracha");
  }

  function onSubmitServiceDesk(ev: { preventDefault: () => void }) {
    ev.preventDefault();
    router.push("/service-desk");
  }

  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <Head>
          {" "}
          <title>Home</title>{" "}
        </Head>
        <header>
          Bem Vindo <strong>{name}</strong>
        </header>
        <form onSubmit={onSubmitContraCheque}>
          <button onClick={funcionarioPdf}>Acesse seu contra-cheque</button>
        </form>
        <form onSubmit={onSubmitCracha}>
          <button>Acesse seu cracha</button>
        </form>
        <form onSubmit={onSubmitServiceDesk}>
          <button>Acesso ao service desk</button>
        </form>
      </div>
    </div>
  );
}
