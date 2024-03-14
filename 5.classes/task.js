class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = state;
        this.type = type;
    };
    fix(){
        this.state = this._state * 1.5;
    };
    
    set state(newState){
        if(newState < 0){
            this._state = 0;
        }else if(newState > 100){
            this._state = 100;
        }else {
            this._state = newState;
        }
    };
    get state(){
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null){
        super(name, releaseDate, pagesCount, state, type);
        this.type = "magazine";
    };
}
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = null){
        super(name, releaseDate, pagesCount, state, type);
        this.author = author;
        this.type = "book";
    };
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100){
        super(author, name, releaseDate, pagesCount, state);
        this.type = "novel";
    };
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100){
        super(author, name, releaseDate, pagesCount, state);
        this.type = "fantastic";
    };
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100){
        super(author, name, releaseDate, pagesCount, state);
        this.type = "detective";
    };
}


const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
);

class Library {
    constructor(name, books){
        this.name = name;
        this.books = [];
    }
    addBook(book){
        if(book.state > 30){
            this.books.push(book);
            console.log(`${book.name} успешно добавлена в библиотеку.`);
        } else {
            console.log(`${book.name} не может быть добавлена в библиотеку из-за низкого состояния.`);
        }
    }
    findBookBy(type, value){
        for (const book of this.books) {
            if (book[type] === value) {
                return book;
            }
        }
        return null;
    }
    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                const book = this.books[i];
                this.books.splice(i, 1);
                return book;
            }
        }
        return null;
    }
}
const library = new Library("Библиотека имени Ленина");

library.addBook(
 new DetectiveBook(
   "Артур Конан Дойл",
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
 )
);
library.addBook(
 new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
 )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3