import { Injectable} from '@angular/core';
import { Init } from "./initial-Books";

@Injectable()
export class BooksService extends Init {
  constructor() {
    super();
    console.log("Initializing Books service ...");
    this.load();
  }

  getBookCount() {
    let Books = JSON.parse(localStorage.getItem('Books'));
    return Books.length;
  }
  getQuestionCount(id:any,id_id:any) {
    let Books = JSON.parse(localStorage.getItem('Books'));
    return Books[id-1].subdomain[id_id-1].question.length;
  }
  

  getBooks() {
    let Books = JSON.parse(localStorage.getItem('Books'));
    let score:any;
    let flag=1;
    for(let i=0;i<Books.length;i++)
    { score=0;
      for(let j=0;j<Books[i].subdomain.length;j++)
      {
        if(Books[i].subdomain[j].sub_score==0)
        {
          flag=0;
          score="test not complete";
        break;}
        score+=Books[i].subdomain[j].sub_score;
      }
      if(flag==0)
      Books[i].score=score;
      else
      Books[i].score=score/Books[i].subdomain.length;
    }
    return Books;
  }
  getScore(id:any) {
    let Books = JSON.parse(localStorage.getItem('Books'));
    let score:number[]=[];
    for(let i=0;i<Books[id-1].subdomain.length;i++)
    {
      score[i]=Books[id-1].subdomain[i].sub_score;
    }
    
    return score;
  }
   getSubdomain(id:any) {
    let Books = JSON.parse(localStorage.getItem('Books'));
    let subdom:any[]=[];
    for(let i=0;i<Books[id-1].subdomain.length;i++)
    {
      subdom[i]=Books[id-1].subdomain[i].title;
    }
    
    return subdom;
  }
  

  getBook(id: any) {
    let Books = JSON.parse(localStorage.getItem('Books'));
    let book:any = null;
    for (let i = 0; i < Books.length; i++) {
      if (Books[i].id == id) {
        book = Books[i];
        break;
      }
    }
    return book;
  }
  getQuestion(id:any,id_id: any) {
    let Books = JSON.parse(localStorage.getItem('Books'));
    let question:any = null;
    for (let i in Books.subdomain) {
   // x += "<h1>" + Books.subdomain[i].name + "</h1>";
    for (let j in Books.subdomain[i].question) {

        question+= Books.subdomain[i].question[j];
    }
}
    return question;
  }

  addBook(newBook: any) {
    let Books = JSON.parse(localStorage.getItem('Books'));
    Books.push(newBook);
    localStorage.setItem('Books', JSON.stringify(Books));
  }

  updateBook(updatedBook: any) {
    let Books = JSON.parse(localStorage.getItem('Books'));
    for (let i = 0; i < Books.length; i++) {
      if (Books[i].id == updatedBook.id) {
        Books[i] = updatedBook;
      }
    }
    localStorage.setItem('Books', JSON.stringify(Books));
  }
  updateScore(score: any,id_id:any,id:any) {
   let Books = JSON.parse(localStorage.getItem('Books'));
    let book = Books[id-1];
    
    console.log(book);
        let question=book.subdomain[id_id-1];
        console.log(question);
        question.sub_score=score;
        console.log(question.sub_score);
        
    localStorage.setItem('Books', JSON.stringify(Books));
  }
 

  deleteBook(id: any) {
    let Books = JSON.parse(localStorage.getItem('Books'));
    for (let i = 0; i < Books.length; i++) {
      if (Books[i].id == id) {
        Books.splice(i, 1);
      }
       
    }
    localStorage.setItem('Books', JSON.stringify(Books));
  }
}
