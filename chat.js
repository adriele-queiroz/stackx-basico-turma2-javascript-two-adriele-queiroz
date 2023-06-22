/**
 * Chatlab - Conceitos de array/object em Javascript.
 * 
 * Implemente as funções a partir daqui.
 */

// Exemplo: function minhaFuncao() { ... }

let listaMensagens = [];

function adicionarMensagem(apelido, mensagem) {
  listaMensagens.push({apelido, mensagem}); 
      
}


// Função para formatar as mensagens em HTML
function formatarMensagens() 
{       
  let htmlData = '';   

  for (let i = 0; i < listaMensagens.length; i++) {      

    let mensagem = listaMensagens[i];     
   
  htmlData += ` 
      <div class="chat-message">
      <span class="chat-message-apelido">${mensagem.apelido}</span>
      <span class="chat-message-item">${mensagem.mensagem}</span>
      </div>`;
    
  }
  return htmlData;
}
  

// Funçao atualizar HTML    

function atualizarHTML()
{
  let chatMessages = document.getElementById('chat-messages');
  chatMessages.innerHTML = formatarMensagens();
} 

// Função de funcionalidade do botão

function commitMessageClickHandler() 
{      
     
let input = document.getElementById('message-input');

if (input.value.trim().length == 0)
{
  input.focus();
  return;
}

adicionarMensagem('Stackx', input.value);
atualizarHTML();
document.getElementById('message-input').value = ``;

}

window.addEventListener('load', function () {
  atualizarHTML()
});
  
      


// --------------------------------
// Não remover estas linhas
// --------------------------------
module.exports =
{
  listaMensagens,
  adicionarMensagem,
  formatarMensagens,
  atualizarHTML,
  commitMessageClickHandler
};
// --------------------------------