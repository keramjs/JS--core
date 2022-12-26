function createBook(title, author, read){
    return{
        Title:title,
        Author:author,
        read:false,
        behaviour(){
            return `${this.Title} was wrritten by ${this.Author} And I ${this.read? 'have' : "havn't"} read this`
        },
        readBook(){
            this.read = true;
        }
    }
};

let book1 = createBook('Mythos','Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day','David Sedaris');
book2.readBook();
let book3 = createBook("Aunts aren't Gentlemen",'PG Wodehouse');

console.log(book1.behaviour());
console.log(book2.behaviour());
console.log(book3.behaviour());
// blabla bla
