//a

class movie {
    constructor (title , studio , rating){
        this.title= title;
        this.studio = studio;
        this.rating = rating;
    }
}
var a = new movie("iron man" , "marvel studio" , "PG");
 console.log(a);

//b



class movie {
    constructor (title , rating){
        this.title= title;
        this.rating = rating;
    }
}
var a = new movie("iron man" , "PG");
 console.log(a);


 
// c

class movie{
    constructor(title,rating){
        this.title=title;
        this.rating=rating;

    }
    static getPG(movies){
        var pgmovies=[];
        for (var movie of movies){
            if(movie.rating ==="PG"){
                pgmovies.push(movie);
            }
        }
        return pgmovies;
    }
}
var flim1 = new movie("iron man", "u");
var flim2 = new movie("joker", "PG");
var flim3 = new movie("avatar","h");

var movies=[flim1,flim2,flim3];
console.log(movie.getPG(movies));



//d

class movie{
    constructor (title , studio , rating){
        this.title= title;
        this.studio = studio;
        this.rating = rating;
    }
}
var a = new movie("Casino Royale" , "Eon Productions” , "PG13");
 console.log(a);

