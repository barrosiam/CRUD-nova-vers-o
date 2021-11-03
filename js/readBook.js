class Consulta {
    consultarLivro(sucesso, id) {

      let url = `http://localhost:3000/cadastros/`;

      if(id){
        url= url+id; 
      }
  
      fetch(url)
        .then(function (resposta) {
          return resposta.json();
        })
        .then(function (dados) {
          sucesso(dados);
        })
        .catch(function (erro) {
          (console.log('Seu cadastro não foi realizado, pois houve um erro'));
        });
    }
  }
  
  export default Consulta;
  