import React from 'react'
import styled from 'styled-components'

const MsgRow = styled.div`
    box-sizing: border-box;
    padding: 20px 15px 0 15px;
    display: flex;
    justify-content: flex-end;
`

const MsgBox = styled.div`
    border-radius: 5px;
    max-width: 80%;
    padding: 5px;
    background-color: rgb(220,248,198);
    box-shadow: 0 2px 1px rgb(200,200,200);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

// const MsgUser = styled.p`
//     font-weight: bold;
//     margin: 5px 8px 0 8px;
//     text-align: left;
// `

const MsgMsg = styled.p`
    margin: 5px 8px;
    text-align: left;
`


export class CompMensagemEu extends React.Component {
    render() {
        let impressao
        if (this.props.nomeUser !== '' && this.props.mensagem !== '') {
            impressao = 
                <MsgRow>
                    <MsgBox>
                        {/* <MsgUser>{this.props.nomeUser}</MsgUser> */}
                        <MsgMsg>{this.props.mensagem}</MsgMsg>
                    </MsgBox>
                </MsgRow>
        } else {
            impressao = <div></div>
        }

        return (impressao)
    }


}