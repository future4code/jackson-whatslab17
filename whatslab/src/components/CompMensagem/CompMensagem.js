import React from 'react'
import styled from 'styled-components'

const MsgRow = styled.div`
    box-sizing: border-box;
    padding: 20px 15px;
`

const MsgBox = styled.div`
    border-radius: 5px;
    max-width: 70%;
    background-color: white;
    box-shadow: 0 2px 1px rgb(200,200,200);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const MsgUser = styled.p`
    font-weight: bold;
    margin: 5px 8px 0 8px;
    text-align: left;
`

const MsgMsg = styled.p`
    margin: 5px 8px;
    text-align: left;
`


export class CompMensagem extends React.Component {
    // state = {
    //     nomeUser: 'raphael',
    //     mensagem:'Mensagem teste',
    // }

    render() {
        return (
            <MsgRow>
                <MsgBox>
                    <MsgUser>{this.props.nomeUser}</MsgUser>
                    <MsgMsg>{this.props.mensagem}</MsgMsg>
                </MsgBox>
            </MsgRow>
        )
    }


}