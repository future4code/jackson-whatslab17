import React from 'react'
import styled from 'styled-components'

import { CompMensagem } from '../CompMensagem/CompMensagem'


const TelaPrincipal = styled.div`
    border: 1px solid black;
    background-color: rgb(240,240,240);
    margin: 1vh auto auto auto;
    width: 500px;
    height: 98vh;
`

export class ComponenteTela extends React.Component {
    render() {
        return(
        <TelaPrincipal>
            <CompMensagem
                nomeUser = {'raphael'}
                mensagem = {'Mensagem de teste'}
            />
        </TelaPrincipal>
        )
    }

}