# Wookie - Back End

This directory will be for the back end API made with Nest.js

Please put the `movies.json in the "resources" folder`.

###  URL

- http://locathost:3001/v1/movies
- http://locathost:3001/v1/movies/categories
- http://locathost:3001/v1/movies/view/id/[id]
- http://locathost:3001/v1/movies/view/slug/[slug]

### Actions 

-   getMovies() 
-   getMovieById(id)

## Deploy the project 

* We should to have the docker image available before the deadline O_O

- docker build --tag wookie-api:1.0 .
- docker run --publish 3001:3001 --detach --name wapi wookie-api:1.0

## Dev env

-   npm  start dev