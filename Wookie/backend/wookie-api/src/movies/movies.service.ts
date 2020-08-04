import {ConflictException, Injectable, NotFoundException} from '@nestjs/common';
import { Movie } from "./movie.model";

// load the json file, i would prefer to use Firebase database
// but Nest.js was in the requirement

import * as MOCKED_MOVIES from "./../../resources/movies.json";
import {type} from "os";

@Injectable()
export class MoviesService {

    get movies() : any  {
        return MOCKED_MOVIES.movies;
    }

    getMovieById(id: string) : Movie {
        const row = this.movies.find((r) => r.id === id);

        if (!row) {
            throw  new NotFoundException();
        }
        return row;
    }

    getMovieBySlug(slug: string) : Movie {
        const row = this.movies.find((r) => r.slug === slug);

        if (!row) {
            throw  new NotFoundException();
        }
        return row;
    }

    get categories() : string[] {
        const movies = this.movies;


        if (!movies) {
            throw  new NotFoundException();
        }

        let categories = [];
        movies.map(m => {
            // if genres is not empty and array
            categories = categories.concat(m.genres.filter((item) => categories.indexOf(item) < 0));
        })

        return categories;
    }
}
