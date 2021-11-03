import CrudLivro from "./createBook.js";

class DeleteBook{
   deletaLivro(id){ 
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json"); 
    
        let requestOptions = {
            method: 'DELETE',
            headers: myHeaders, 
            redirect: 'follow'
        };    

        let atualiza = new CrudLivro();
        atualiza.manusearLivro(requestOptions,id); 
        window.location.href = "http://127.0.0.1:5500/html/consultar.html";     
    }   
}

export default DeleteBook;