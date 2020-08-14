import React from 'react';
import styled from 'styled-components';


export class Formulario extends React.Component {

    state = {
        formulario: [
          {
            usuario: "",
            mensagem: ""
          }
        ],

        valorInputUsuario: "",
        valorInputMensagem: ""
      };

    adicionaBalao = () => {
        
        const novaMensagem = {
        
          usuario: this.state.valorInputUsuario,
          mensagem: this.state.valorInputMensagem
        };
    
        const novoMensagens = [...this.state.mensagens, novaMensagem];

        this.setState({ formulario: novoMensagens });
      };  

    onChangeInputUsuario = (event) => {

        this.setState({ valorInputUsuario: event.target.value });
      };

    onChangeInputMensagem = (event) => {
    
        this.setState({ valorInputMensagem: event.target.value });
      };

      render() {

        const listaDeBaloes = this.state.formulario.map((formulario) => {
            return (
              <p>
                {formulario.usuario} - {formulario.mensagem}
              </p>
            );
          });

          
           return (
            <div>{listaDeBaloes}</div>
                <div>
                    <input
                     value={this.state.valorInputUsuario}
                     onChange={this.onChangeInputUsuario}
                     placeholder={"Usuário"}
                    />
                    <input
                     value={this.state.valorInputMensagem}
                     onChange={this.onChangeInputMensagem}
                     placeholder={"Mensagem"}
                    />
                    <button onClick={this.adicionaBalao}>Enviar</button>
                </div>
     );
  }
}
