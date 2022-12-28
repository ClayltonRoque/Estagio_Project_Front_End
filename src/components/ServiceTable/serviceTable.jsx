import styles from "../ServiceTable/serviceTable.module.css";

export function ServiceTable() {
  return (
    <div className={styles.main}>
      <div className={styles.gridContainer}>
        <div>
          Nome
          <p>Concerto Mouse</p>
        </div>
        <div>
          Status
          <p>Concerto Mouse</p>
        </div>
        <div>
          Solitações
          <p>Concerto Mouse</p>
        </div>
        <div>
          Finalizadas
          <p>Concerto Mouse</p>
          <p>Concerto Mouse</p>
          <p>Concerto Mouse</p>
          <p>Concerto Mouse</p>
          <p>Concerto Mouse</p>
          <p>Concerto Mouse</p>
          <p>Concerto Mouse</p>
          <p>Concerto Mouse</p>
          <p>Concerto Mouse</p>
          <p>Concerto Mouse</p>
        </div>
        <div>
          Ações
          <p>
            <button className={styles.actionButton}>Finalizar</button>
          </p>
          <p>
            <button className={styles.actionButton}>Finalizar</button>
          </p>
          <p>
            <button className={styles.actionButton}>Finalizar</button>
          </p>
          <p>
            <button className={styles.actionButton}>Finalizar</button>
          </p>
          <p>
            <button className={styles.actionButton}>Finalizar</button>
          </p>
          <p>
            <button className={styles.actionButton}>Finalizar</button>
          </p>
          <p>
            <button className={styles.actionButton}>Finalizar</button>
          </p>
          <p>
            <button className={styles.actionButton}>Finalizar</button>
          </p>
          <p>
            <button className={styles.actionButton}>Finalizar</button>
          </p>
          <p>
            <button className={styles.actionButton}>Finalizar</button>
          </p>
        </div>
      </div>
    </div>
  );
}
