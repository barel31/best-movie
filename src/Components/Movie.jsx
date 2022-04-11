import React, { useState } from 'react';
import './Movie.css';
import { Link } from 'react-router-dom';

export default function Movie(props) {
    const [refresh, _Refresh] = useState();

    props.movies.sort((a, b) => a.name.normalize().localeCompare(b.name.normalize()));

    const Rate = (rate) => {
        props.movie.rate(rate);
        _Refresh(!refresh);
        alert('Thank you for your rating!');
    };

    return (
        <div className='Movie'>
            <h2>Movie name: {props.movie.name}</h2>
            <img src={props.movie.img} alt={props.movie.name} width='350' height='350'></img>
            <div className='InfoFlex'>
                <h2>Description: {props.movie.description}</h2>
                <h2>{props.movie.rating}</h2>
            </div>

            <div className='Rating'>
                <div onClick={() => Rate(1)}>1</div>
                <div onClick={() => Rate(2)}>2</div>
                <div onClick={() => Rate(3)}>3</div>
                <div onClick={() => Rate(4)}>4</div>
                <div onClick={() => Rate(5)}>5</div>
            </div>

            <div className='MoviesList'>
                {' '}
                {/* todo add links*/}
                {props.movies.map((v, i) => {
                    return (
                        <Link key={i} to={`/movie-${v.id}`}>
                            <div className='MovieBoxItem' style={{backgroundImage: `url("${v.img}")`, backgroundSize: 'cover'}}>
                                <h3>{v.name}</h3>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
