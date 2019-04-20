var movies = [
    {
        title: "In burgers we trust",
        hasWatched: true,
        rating: 5
    },
    {
        title: "Frozen",
        hasWatched: false,
        rating: 4.5
    },
    {
        title: "Belly",
        hasWatched: true,
        rating: 4.5
    }
]

// we are making a for loop
// we are creating a result string
// 


function buildString(movie) {
    var result = "You have ";
    if(movie.hasWatched) {
        result += "watched ";
    }  else {
            result += "not seen ";
    }
    // here we are using the \ to take the space of the result if it has been watched or else not watched
    //  movie.rating will call the rating key: value  pair from the movie object array
    result += "\"" + movie.title + "\" "
    result += movie.rating + " stars";
    console.log(result)
}

movies.forEach(function(movie) {
    console.log(buildString(movie));
    
});