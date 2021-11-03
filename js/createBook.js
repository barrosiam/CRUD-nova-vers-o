class CrudLivro {
    manusearLivro(requestOptions, id, sucesso) {
     
      let url = `http://localhost:3000/cadastros`;
      if(id){
        url+= `/${id}`;
      }
     
      fetch(url,requestOptions)
        .then((resposta) =>
            resposta.json()
        )
        .then((dados) => {
            sucesso(dados)
        })
        .catch((erro)  =>{
          (console.log('Seu cadastro não foi realizado, pois houve um erro'));
        });
    }
  }  
  export default CrudLivro;
