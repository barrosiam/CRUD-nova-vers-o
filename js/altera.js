import CrudLivro from "./createBook.js";

class UpdateBook{
    atualizaLivro(objeto){       

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json"); 
    
        let requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: objeto,
            redirect: 'follow'
        };    

        const id = location.search.split("id=")[1];
        if(id){
            let atualiza = new CrudLivro();
            atualiza.manusearLivro(requestOptions,id);  
        }
            
    }
}

export default UpdateBook;