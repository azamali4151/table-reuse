import React, { Component } from 'react';
import Table from '../common/table.component';
import RatingComponent from '../common/rating-component';

class Movies extends React.Component {
    state = {
        headers:['Rank & Title','IMBD Rating','Your Rating','Action'],
        movies:[
            {id:1,movie_name:'The Shawshank Redemption',rating:'9.2',your_rating:true,action:'512'},
            {id:2,movie_name:'The Godfather',rating:'9.1', your_rating:false,action:'517'},
            {id:3,movie_name:'The Godfather: Part II ',rating:'9.0',your_rating:true,action:'519'},
            {id:4,movie_name:'The Dark Knight',rating:'9.0',your_rating:false,action:'519'},
            {id:5,movie_name:'12 Angry Men ',rating:'8.9',your_rating:true,action:'519'},
        ]
    }

    handleToggleClick = (movieID) =>{
        const movies = [...this.state.movies]
        const movie =  movies.find(movie => movie.id === movieID)
        movie.your_rating = !(movie.your_rating)
        this.setState(movies);
    }
    render() { 
        const columns = [
            {lable:'ID',path:'id',content: (movie,key)=><td>{movie[key]}</td>},
            {lable:'Rank & Title',path:'movie_name',content: (movie,key)=><td>{movie[key]}</td>},
            {lable:'IMBD Rating',path:'rating',content: (movie,key)=><td> {movie[key]}</td>},
            {lable:'Your Rating',path:'your_rating',content: (movie,key)=><td><RatingComponent israted={movie[key]} id ={movie.id} handleToggleClick={this.handleToggleClick}/></td>},
            {lable:'Action',path:'action',content: (movie,key)=><td>{movie[key]}</td>},
        ]
        
        return(
            <Table 
            header={this.state.headers}
            data ={this.state.movies}
            columns ={columns}
            />
        );
    }
}
 
export default Movies;