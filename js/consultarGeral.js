import CrudLivro from "./createBook.js";

class GetBook{
    pegaLivro(lbTitulo,lbAno,lbAutor,lbGenero,lbEditora,lbEdicao){   
        let objeto = JSON.stringify({
            "titulo": lbTitulo,
            "anoLancamento": lbAno,
            "autor": lbAutor,
            "genero": lbGenero,
            "editora":  lbEditora,
            "edicao": lbEdicao,
        })

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json"); 
    
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: objeto,
            redirect: 'follow'
        };    

        let envio = new CrudLivro();
        envio.manusearLivro(requestOptions); 
     
    }
}

export default CreateBook;