

import React, { useEffect, useState } from "react";

import Botao from '../Botao/Botao';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import './Formulario.css';

const Formulario = (props) => {
    
    // const times = [
    //     'Programação',
    //     'Front-End',
    //     'Data-Science',
    //     'Devops',
    //     'UX e Design',
    //     'Mobile',
    //     'Inovação e Gestão'
    // ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime]= useState ('')

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log( 'Form foi submetido', nome, cargo, imagem, time);
        props.aoColaboradorCadastrado ({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem ('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2> Preencha os dados para criar o card do colaborador </h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome"  valor={nome} aoAlterado={valor => setNome(valor)}/>
                <CampoTexto obrigatorio={true}  label="Cargo" placeholder="Digite o seu cargo" valor={cargo} aoAlterado={valor => setCargo(valor)}/>
                <CampoTexto obrigatorio={true}  label="Imagem" placeholder="Insira a sua imagem" valor={imagem} aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa obrigatorio={true}  label ="Time" items={props.times} valor={time} aoAlterado={valor => setTime(valor)}/>
                <Botao texto="Enviar"> Enviar </Botao>        
            </form>
        </section>
    )
}

export default Formulario;