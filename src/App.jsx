import React from "react";

import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import Produtos from "./data/produtos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import SetInput from "./components/formulario/SetInput";
import Contador from "./components/contador/Contador";


export default _ =>
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#01 - Primeiro Componente" color="#FC7753" border="#FC7753">
                <Primeiro></Primeiro>
            </Card>
            <Card titulo="#03 - Fragmento">
                <Fragmento />
            </Card>
            <Card titulo="#02 - Com Parâmetro">
                <ComParametro
                    titulo="Situação do aluno"
                    aluno="João Victor!! "
                    nota={9.3}
                />
            </Card>
            <Card titulo="#04 - Desafio aleatório">
                <Aleatorio min={10} max={60} />
            </Card>

            <Card titulo="#05 - Desafio aleatório">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="João" />
                    <FamiliaMembro nome="Victor" />
                </Familia>
            </Card>

            <Card titulo="#06 - Repetição">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#07 - Exercicio Repetição">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#08 - Renderização Condicional">
                <UsuarioInfo></UsuarioInfo>
                <ParOuImpar></ParOuImpar>
            </Card>

            <Card titulo="#09 - Comunicação Direta">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#10 - Comunicação Indireta">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#11 - Ambiente Controlado (Input)">
                <SetInput></SetInput>
            </Card>

            <Card titulo="#12 - Contador">
                <Contador numeroInicial={""}></Contador>
            </Card>
        </div>
    </div>
