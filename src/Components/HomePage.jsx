import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage(props) {
    return (
        <div className='HomePage'>
            <h1>BM</h1>
            {props.topMovies.map((v, i) => {
                return (
                    <Link key={i} to={`/movie-${v.id}`}>
                        <div style={{ backgroundImage: `url("${v.img}")` }} className='MovieTop'>
                            <h3>{v.name}</h3>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
