import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../index.css'
import CrewAndCast from "./CrewAndCast";
import OtherDetails from "./OtherDetails";

export default function MovieDetails(props){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-3 m-2">
                    <aside className="border rounded-2 text-center d-flex flex-column justify-content-center align-items-center bg-dark text-light p-4"
                    style={{
                        background: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(45,45,45,1) 35%, rgba(74,74,74,1) 100%)',
                        minHeight: '300px'
                    }}>
                        <figure>
                            {props.posterLink === undefined ? null : 
                            <img src={props.posterLink} className='img-fluid border' alt="Poster" title="Poster"/>}
                        </figure>
                        <section>
                            <header>
                                <h3>{props.movieTitle} {props.year === undefined ? null : 
                                <h3 style={{display: 'inline'}}>({props.year})</h3>}</h3>
                            </header>
                            <p>{props.parentalRating}  {props.runningTime}</p>
                            <p>{props.genre}</p>
                        </section>
                        <footer className="mt-4">
                            {props.imdbRating === undefined ? null : 
                            <div>
                                <p>imdb Rating</p>
                                <h4>{props.imdbRating}</h4>
                            </div>}
                        </footer>
                    </aside>
                </div>

                <div className="col-md-8 m-2">
                    <div className="bg-dark text-light d-flex flex-column justify-content-center align-items-center p-4 border rounded-2"
                    style={{background: 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(45,45,45,1) 35%, rgba(74,74,74,1) 100%)'}}>
                        <article>
                            {props.plot}
                        </article>
                        <div className="mt-3" style={{width: "100%"}}>
                            <div>
                                <CrewAndCast 
                                director={props.director}
                                writer={props.writer}
                                actors={props.actors}/>
                            </div>
                            <div className="mt-3">
                                <OtherDetails
                                country={props.country}
                                languages={props.languages}
                                released={props.released}
                                awards={props.awards}
                                boxOffice={props.boxoffice}
                                type={props.type}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}