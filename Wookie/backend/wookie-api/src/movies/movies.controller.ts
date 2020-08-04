import {Controller, Get, Param} from '@nestjs/common';
import {MoviesService} from "./movies.service";
import {Movie} from "./movie.model";

@Controller('v1/movies')
export class MoviesController {

    constructor(private moviesService: MoviesService) {}

    @Get('/view/id/:id')
    getMovieById(@Param('id') id : string): Movie {
        return this.moviesService.getMovieById(id);
    }

    @Get('/view/slug/:slug')
    getMovieBySlug(@Param('slug') slug : string): Movie {
        return this.moviesService.getMovieBySlug(slug);
    }

    @Get()
    getAllMovies(): Movie[] {
        return this.moviesService.movies;
    }

    @Get('/categories')
    getAllCategories(): string[] {
        return this.moviesService.categories;
    }
}
