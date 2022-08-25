import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../index.css'
import MovieDetails from "./MovieDetails";

let title = React.createRef() /*this is a react feature that allows to store a DOM element in a variable*/
let year = React.createRef()
const apiKey = import.meta.env.VITE_APP_API_KEY

export default class GetMovieData extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            dataApi: {},
            title: '',
            year:"" ,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    fetchApi = async (title, year) => {
        var response = ''
        if (year === undefined){
            response = await fetch(`http://www.omdbapi.com/?t=${title}&plot=full&apikey=${apiKey}`)
        }else{
            response = await fetch(`http://www.omdbapi.com/?t=${title}&y=${year}&plot=full&apikey=${apiKey}`)
        }
        const data = await response.json()
        this.setState({
            dataApi: data
        })
    }

    handleClick = () => {
        this.fetchApi(title.current.value, year.current.value)
        console.log(this.state.dataApi)
    }

    render(){
        return(
            <div>
                <input type='text' name='title' placeholder ="Title" ref={title}/>
                <input type='number' name='year' placeholder ="Year" ref={year}/>
                <button onClick={this.handleClick}>Click</button>
                <MovieDetails 
                posterLink={this.state.dataApi.Poster}
                movieTitle={this.state.dataApi.Title}
                year={this.state.dataApi.Year}
                parentalRating={this.state.dataApi.Rated}
                runningTime={this.state.dataApi.Runtime}
                genre={this.state.dataApi.Genre}
                imdbRating={this.state.dataApi.imdbRating}
                plot={this.state.dataApi.Plot}
                director={this.state.dataApi.Director}
                writer={this.state.dataApi.Writer}
                actors={this.state.dataApi.Actors}
                country={this.state.dataApi.Country}
                languages={this.state.dataApi.Language}
                released={this.state.dataApi.Released}
                awards={this.state.dataApi.Awards}
                boxOffice={this.state.dataApi.BoxOffice}
                type={this.state.dataApi.Type}
                />
            </div>
        )
    }
}