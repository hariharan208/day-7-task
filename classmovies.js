class movie 
{
    constructor(title,studio,rating='PG')
    {
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }

getPg(arr)
{
    let data=arr.filter( function(d){
        if(d.rating =="Pg")
        return d.title;
        else return false
    });

    console.log(data);
}
getMovies()
{
    console.log(`
    Title: ${this.title}
    Studio: ${this.studio}
    Rating: ${this.rating}
    `);
}

}
let movie1=new movie("casino royale","fox studio","PG13");
let movie2=new movie("spiderman","marvel studio","PG");
let movie3=new movie("jumanji","columbia studio","R");
let movie4=new movie("ironman","marvel studio","PG");
let movie5=new movie("venom","sony studio","PG");

const arr=[movie1,movie2,movie3,movie4,movie5];
let a=movie1.getPg(arr);
movie2.getMovies();

