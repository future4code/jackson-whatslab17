import React from 'react';
import styled from 'styled-components';
import { CompMensagem } from '../CompMensagem/CompMensagem';
import { CompMensagemEu } from '../CompMensagemEu/CompMensagemEu';


const FormDiv = styled.div`

`

const ListaBaloes = styled.div`
  margin: 0 0 30px 0;
`

const FormStyle = styled.div`
    display: flex;
    justify-content: center;
    height: 40px;
    margin: 15px 0;
`
const FormUsuario = styled.input`
    margin-right: 20px;
    padding: 0 0 0 5px;
    width: 100px;
    border: none;
    border-radius: 7px;
    box-shadow: 0 2px 1px rgb(200,200,200);
    outline: none;
`
const FormMsg = styled.input`
    margin-right: 20px;
    padding: 0 0 0 5px;
    width: 250px;
    border: none;
    border-radius: 7px;
    box-shadow: 0 2px 1px rgb(200,200,200);
    outline: none;
`

const Button = styled.button`
    width: 80px;
    background-color: orange;
    color: white;
    font-size: 15px;
    font-weight: bold;
    border: none;
    border-radius: 7px;
    box-shadow: 0 2px 1px rgb(200,200,200);
    outline: none;
`


export class Formulario extends React.Component {

  state = {
    formulario: [],
    valorInputUsuario: "",
    valorInputMensagem: "",
  };

    adicionaBalao = () => {
      if (this.state.valorInputUsuario !== '' && this.state.valorInputMensagem !== '') {
          const novaMensagem = {
              usuario: this.state.valorInputUsuario,
              mensagem: this.state.valorInputMensagem
          }
          const novoMensagens = [...this.state.formulario, novaMensagem];
          this.setState({ formulario: novoMensagens, valorInputUsuario:'', valorInputMensagem:''})
      }
    };  

      
    onChangeInputUsuario = (event) => {
        console.log(event.key)
        this.setState({ valorInputUsuario: event.target.value });
      };

    onChangeInputMensagem = (event) => {
        this.setState({ valorInputMensagem: event.target.value });
      };

    
      render() {
          let listaDeBaloes
          if (this.state.formulario.length > 0) {
              listaDeBaloes = this.state.formulario.map((formulario) => {
                  let compMensagemTemp
                  if (formulario.usuario === 'eu') {
                      compMensagemTemp = 
                          <CompMensagemEu
                              nomeUser={formulario.usuario}
                              mensagem = {formulario.mensagem}
                          />
                  } else {
                      compMensagemTemp = 
                          <CompMensagem
                              nomeUser={formulario.usuario}
                              mensagem = {formulario.mensagem}
                          />
                  }
                  return (compMensagemTemp);
              });
          }
          
          return (
              <FormDiv>
                  <ListaBaloes>{listaDeBaloes}</ListaBaloes>
                  <FormStyle>
                      <FormUsuario
                        value={this.state.valorInputUsuario}
                        onChange={this.onChangeInputUsuario}
                        placeholder={"Usuário"}
                      />
                      <FormMsg
                        value={this.state.valorInputMensagem}
                        onChange={this.onChangeInputMensagem}
                        placeholder={"Mensagem"}
                      />
                      <Button onClick={this.adicionaBalao}>Enviar</Button>
                  </FormStyle>
              </FormDiv>  
          );
  }
}
