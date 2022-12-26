function createBook(title, author, read=false){
    return{
        title,
        author,
        read,
        behaviour(){
            return `${this.title} was wrritten by ${this.author} And I ${this.read? 'have' : "havn't"} read this`
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
