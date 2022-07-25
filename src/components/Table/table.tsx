import React from 'react';
import { Table } from 'reactstrap';
import styles from '../Table/table.module.css'
import { useEffect, useState } from "react";
import axios from "axios"
import { HeadersDefaults } from 'axios'

interface CommonHeaderProperties extends HeadersDefaults {
    token: string;
  }

export function ServiceTablee() {

    async function getServices() {
        const response = await axios.get("http://localhost:3000/services")
        setService(response.data)
      };

    const [service, setService] = useState([])

    useEffect(() => {
     
      const token = localStorage.getItem("token")
      axios.defaults.headers = {
        token: `${token}`
      } as CommonHeaderProperties;
      getServices()
    })

    async function Atendimento ( {servicos} ) {
      const response = await axios.post("http://localhost:3000/attendence_service", {
        id: servicos.id
      })
    }

    async function FinalizarAtendimento ( {servicos} ) {
      const response = await axios.post("http://localhost:3000/finalize_service", {
        id: servicos.id
      })
    }

 

    const TodosServicos = ({ servicos }) => {
      return(
        <div className={styles.main}>
        <Table responsive bordered className={styles.gridContainer} >
          <thead >
            <tr>
              <th>Nome</th>
              <th>solicitante</th>
              <th>Status</th>
              <th>situação</th>
              <th>Data i</th>
              <th>Data f</th>
              <th>Action </th>
            </tr>
          </thead>
         
          <tbody>
            {servicos.map((servico, key) => {

             if(servico.status == "Em atendimento") {
               return (<tr key={key}>   
                <td>{servico.name}</td>
                <td>{servico.requester}</td>
                <td>{servico.status}</td>
                <td><button className={styles.atendimentoStatusButton}></button></td>
                <td>{servico.solicitation}</td>
                <td>{servico.end}</td>
                <td>{<button >atender</button> ?
                <button className={styles.atendimentoActionButton}>Encerrar</button> :
                <button >excluir</button>}</td>
              </tr>)

            } 
            
            if(servico.status == "pendente") {
              return (<tr key={key}>   
                <td>{servico.name}</td>
                <td>{servico.requester}</td>
                <td>{servico.status}</td>
                <td><button className={styles.pendenteStatusButton}></button></td>
                <td>{servico.solicitation}</td>
                <td>{servico.end}</td>
                <td>{<button >atender</button> ?
                <button  className={styles.pendenteActionButton}>Atender</button> :
                <button>excluir</button>}</td>
              </tr>)
            } 
            
            if(servico.status == "Finalizado") {
              return (<tr key={key}>   
                <td>{servico.name}</td>
                <td>{servico.requester}</td>
                <td>{servico.status}</td>
                <td><button className={styles.finalizadoStatusButton}></button></td>
                <td>{servico.solicitation}</td>
                <td>{servico.end}</td>
                <td>{<button >atender</button> ?
                <button className={styles.finalizadoActionButton}>Finalizar</button> :
                <button>excluir</button>}</td>
              </tr>)
            } 

             })}
          </tbody>
        </Table>
        </div>
      )
    }

   
    return (
      <div>
        <TodosServicos servicos={service}/>
      </div>
    );
}

function token(token: any): any {
  throw new Error('Function not implemented.');
}









{/* <div className={styles.main}>
<button onClick={getServices}></button>
<div >
<Table className={styles.gridContainer} >
<thead >
  {service.map( (servici) => <th>{ servici }</th>)}
  <tr>
    <th></th>
    <th>Status</th>
    <th>Data i</th>
    <th>Data f</th>
    <th>Action </th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Concerto Mouse Concerto Mouse Concerto Mouse Concerto Mouse Concerto Mouse Concerto Mouses</td>
    <td>Concerto Mouse</td>
    <td>Concerto Mouse</td>
    <td>Concerto Mouse</td>
    <td>Concerto Mouse</td>
  </tr>
  <tr>
    <td>Concerto Mouse Concerto Mouse Concerto Mouse Concerto Mouse Concerto Mouse Concerto Mouses</td>
    <td>Concerto Mouse</td>
    <td>Concerto Mouse</td>
    <td>Concerto Mouse</td>
    <td>Concerto Mouse</td>
  </tr>
</tbody>
</Table>
</div>
</div> */}