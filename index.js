/*jshint esversion: 6*/

const express = require("express"),
  morgan = require("morgan");
const app = express();

//express.static
//"documentation.html" file from public folder
app.use(express.static("public"));
//Morgan middleware function to log all requests
app.use(morgan("common"));

let users = [
  {
    id: 1,
    Username: "Will Gjedsted",
    Password: "1234",
    Email: "william@gmail.com",
    Birthday: "11/04/1990",
    FavoriteMovies: [],
  },
  {
    id: 2,
    Username: "Thom Yorke",
    Password: "5678",
    Email: "h.monet1104@yahoo.com",
    Birthday: "10/07/1968",
    FavoriteMovies: [],
  },
  {
    id: 3,
    Username: "Jonny Greenwood",
    Password: "5555",
    Email: "seank@gmail.com",
    Birthday: "11/05/1971",
    FavoriteMovies: [],
  },
  {
    id: 4,
    Username: "Colin Greenwood",
    Password: "5555",
    Email: "seank@gmail.com",
    Birthday: "06/26/1968",
    FavoriteMovies: [],
  },
  {
    id: 5,
    Username: "Ed O'brien",
    Password: "5555",
    Email: "seank@gmail.com",
    Birthday: "04/14/1968",
    FavoriteMovies: [],
  },
  {
    id: 6,
    Username: "Phil Selway",
    Password: "5555",
    Email: "seank@gmail.com",
    Birthday: "11/04/1990",
    FavoriteMovies: [],
  },
];
let movies = [
  {
    id: 1,
    Title: "Silence of the Lambs",
    Description:
      "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
    Genre: {
      Name: "Thriller",
      Description:
        "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience.",
    },
    Director: {
      Name: "Jonathan Demme",
      Bio:
        "Robert Jonathan Demme was an American director, producer, and screenwriter.",
      Birth: "1944",
      Death: "2017",
    },

    ImagePath:
      "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,677,1000_AL_.jpg",
    Featured: true,
  },
  {
    id: 2,
    Title: "Joker",
    Description:
      "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
    Genre: {
      Name: "Drama",
      Description:
        "In film and television, drama is a genre of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone. ... These terms tend to indicate a particular setting or subject-matter, or else they qualify the otherwise serious tone of a drama with elements that encourage a broader range of moods.",
    },
    Director: {
      Name: "Todd Phillips",
      Bio:
        "Todd Phillips was born on December 20, 1970 in Brooklyn, New York City, New York, USA as Todd Bunzl. He is a producer and director, known for Joker (2019), Old School (2003) and Due Date (2010).",
      Birth: "1970",
      Death: "",
    },

    ImagePath:
      "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    Featured: true,
  },
  {
    id: 3,
    Title: "Vertigo",
    Description:
      "A former police detective juggles wrestling with his personal demons and becoming obsessed with a hauntingly beautiful woman.",
    Genre: {
      Name: "Mystery",
      Description:
        "The mystery genre is a genre of fiction that follows a crime (like a murder or a disappearance) from the moment it is committed to the moment it is solved. Mystery novels are often called “whodunnits” because they turn the reader into a detective trying to figure out the who, what, when, and how of a particular crime.",
    },
    Director: {
      Name: "Alfred Hitchcock",
      Bio:
        "Sir Alfred Joseph Hitchcock KBE (13 August 1899 – 29 April 1980) was an English film director, producer, and screenwriter. He is one of the most influential and widely studied filmmakers in the history of cinema.[1] Known as the 'Master of Suspense', he directed over 50 feature films[a] in a career spanning six decades, becoming as well known as any of his actors thanks to his many interviews, his cameo roles in most of his films, and his hosting and producing of the television anthology Alfred Hitchcock Presents (1955–65). His films garnered 46 Academy Award nominations including six wins, although he never won for Best Director despite having had five nominations.",
      Birth: "1899",
      Death: "1980",
    },

    ImagePath:
      "https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg",
    Featured: true,
  },
  {
    id: 4,
    Title: "Harry Potter and the Deathly Hallows: Part 2",
    Description:
      "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
    Genre: {
      Name: "Adventure",
      Description:
        "Adventure. Adventure film is a genre that revolves around the conquests and explorations of a protagonist. The purpose of the conquest can be to retrieve a person or treasure, but often the main focus is simply the pursuit of the unknown. These films generally take place in exotic locations and play on historical myths.",
    },
    Director: {
      Name: "David Yates",
      Bio:
        "David Yates was born on October 8, 1963 in St. Helens, Merseyside, England. He is a director and producer, known for Harry Potter and the Deathly Hallows: Part 2 (2011), Harry Potter and the Order of the Phoenix (2007) and The Legend of Tarzan (2016).",
      Birth: "1963",
      Death: "",
    },

    ImagePath:
      "https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX667_CR0,0,667,999_AL_.jpg",
    Featured: true,
  },
  {
    id: 5,
    Title: "Finding Nemo",
    Description:
      "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
    Genre: {
      Name: "Adventure",
      Description:
        "Adventure. Adventure film is a genre that revolves around the conquests and explorations of a protagonist. The purpose of the conquest can be to retrieve a person or treasure, but often the main focus is simply the pursuit of the unknown. These films generally take place in exotic locations and play on historical myths.",
    },
    Director: {
      Name: "Andrew Stanton",
      Bio:
        "Andrew Stanton has been a major creative force at Pixar Animation Studios since 1990, when he became the second animator and ninth employee to join the company's elite group of computer animation pioneers.",
      Birth: "1965",
      Death: "",
    },

    ImagePath:
      "https://m.media-amazon.com/images/M/MV5BZTAzNWZlNmUtZDEzYi00ZjA5LWIwYjEtZGM1NWE1MjE4YWRhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    Featured: true,
  },
  {
    id: 6,
    Title: "Alien",
    Description:
      "After a space merchant vessel receives an unknown transmission as a distress call, one of the crew is attacked by a mysterious life form and they soon realize that its life cycle has merely begun.",
    Genre: {
      Name: "Sci- Fi",
      Description:
        "Science fiction (or sci-fi) is a film genre that uses speculative, fictional science-based depictions of phenomena that are not fully accepted by mainstream science, such as extraterrestrial lifeforms, alien worlds, extrasensory perception and time travel, along with futuristic elements such as spacecraft, robots, cyborgs, interstellar travel or other technologies. Science fiction films have often been used to focus on political or social issues, and to explore philosophical issues like the human condition.",
    },
    Director: {
      Name: "Ridley Scott",
      Bio:
        "Described by film producer Michael Deeley as the 'very best eye in the business', director Ridley Scott was born on November 30, 1937 in South Shields, Tyne and Wear (then County Durham).",
      Birth: "1963",
      Death: "",
    },

    ImagePath:
      "https://images-na.ssl-images-amazon.com/images/I/91SfgExSaAL._AC_SL1500_.jpg",
    Featured: true,
  },
  {
    id: 6,
    Title: "Kill Bill",
    Description:
      "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
    Genre: {
      Name: "Action",
      Description:
        "Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, rescues and frantic chases.",
    },
    Director: {
      Name: "Quentin Tarantino",
      Bio:
        "Quentin Jerome Tarantino was born in Knoxville, Tennessee. His father, Tony Tarantino, is an Italian-American actor and musician from New York, and his mother, Connie (McHugh), is a nurse from Tennessee. Quentin moved with his mother to Torrance, California, when he was four years old.",
      Birth: "1963",
      Death: "",
    },

    ImagePath:
      "",
    Featured: true,
  },
];

//GET requests
app.get("/", function (req, res) {
  res.send("Welcome to Flix Fix!");
});
app.get("/movies", function (req, res) {
  res.json(movies);
});
app.get("/movies/:Title", (req, res) => {
  res.json(
    movies.find((movie) => {
      return movie.Title === req.params.Title;
    })
  );
});
app.get("/movies/director/:Name", (req, res) => {
  res.json(
    movies.find((movie) => {
      return movie.Director.Name === req.params.Name;
    })
  );
});

app.get("/movies/genres/:Name", (req, res) => {
  res.json(
    movies.find((movie) => {
      return movie.Genre.Name === req.params.Name;
    })
  );
});
//User endpoints
app.get("/users", function (req, res) {
  res.json(users);
});
//adds user
app.post("/users", (req, res) => {
  res.status(500).send("User added!");
});

app.get("/users/:Username", (req, res) => {
  res.json(
    users.find((user) => {
      return user.Username === req.params.Username;
    })
  );
});

//updates user information
app.put("/users/:Username", (req, res) => {
  res.json(
    users.find((user) => {
      return user.Username === req.params.Username;
    })
  );
});



//allows user to add movie to favorites
app.post("/users/:Username/favorites", (req, res) => {
  res.status(500).send("Succesfully added movie to favorites!");
});

//allows user to remove movie from favorites
app.delete("/users/:Username/favorites", (req, res) => {
  res.status(500).send("Successfully removed movie from favorites.");
});

//allows user to deregister
app.delete("/users/:Email", (req, res) => {
  res.status(500).send("User Deleted.");
});

app.get("/documentation", (req, res) => {
  res.sendFile("public/documentation.html", { root: __dirname });
});

//error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000, () => {
  console.log("Your app is listening on port 3000.");
});