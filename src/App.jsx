import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import MoviePage from './Components/Movie';

const fightImg =
    'https://akns-images.eonline.com/eol_images/Entire_Site/2019914/rs_685x1024-191014113838-634-fight-club-poster.cl.101419.jpg?fit=around%7C685:1024&output-quality=90&crop=685:1024;center,top';
const inceptionImg =
    'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/70d11a78e989809e22a5f7a275e6bb2f5011836407edf0d1cad9ab1fcd1c47e2._RI_V_TTW_.jpg';
const blackwidowImg = 'https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg';
const defaultImg =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAC7CAMAAACjH4DlAAAAXVBMVEUpMTRnjLEiJiNcfJxrkbgkKSgoLzEmLS5EWWxXdpM0QkxAVGUuOT9kiKslKytSbohPaYJggqM+UF8wO0I6SldIX3Q2RE9LY3oyP0crNDk+UWFWdJA7S1lPaH9jhacMRR/OAAADlElEQVR4nO3c7XKqMBSFYSi4CSCB8CGkKvd/mUfAVoNgHUiPdbuef51aprwDAQLiOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP6NAbiySAT17jVYIZFNloUVZ1cjg2Wu1WJypxLUqUVn87LVaiLbKtxuj46vti+4wwvKmMUjEs9drkaBSv1HDdVX1isOHPA45fIuGHLV89rot8DH8861oIksa0Q6BP569bgucc3gbsmbjMchhb5HIYeCWo9/kly+SVQ4K9GlU3RXLT7M55dBNlXbXHfu6WrqBMMpBTfx1zq6KhT3Y5CAdeZcLmHa37LqDTY5tap5o74sli2ScY8nmwSVHUI0uw/wqWtCDTY56PPNRl/M5Zs9NuOSQ2aiGG4r5s4/oc2ZXYpMjHefw5ictxN7NDpM93jAH6dM6t+nklPn75aAy7H+fTu0vXHLcHFnmdgfKz2Nu0k4cetjkEKMavmimclBwmW0Ob2cGuOSgnWfmULvJv9nGV58pb3YnLjkcKcxpdTG5bezMZDeXemxyUCSSy5mYX01tHAGZI0ySCGn2YJPDISevPZWctF74OTmM5sfxbSpVlcYn+OQ4BZFadNM/x6aYOsaSbt0bbWh8lFMOx9GlOPkstlMf11O3MBOVX/fgleN0HD2ZPt8o5+5uX4+nzHLMIhnP1EhUeVnAu+TQ4Z1HH7LvJTDNMdpf6HNiFL0S7s5/wDMHRdr4udjfreG2mR56sMxBjrfPrzYQEd6v0e0vh/4AwzGHLivfVeXXBhLE9/eUgddfADPMQU3abQ3ZefvQdDMVMqmfHmGYQ59nkVXe/USifuwBsrR74odhju9L/bS7Exf8PG4wzkEkLvcms1LK+NFHLVnmOJinW573aA2OOUgezEmg5PEHT/nloObeqfi75SA5e9X6hjkoEt699X2vHNtov+p5fV45qBHrvr3AKseqUZRfDpmt/WYLrxyPXachB3IgB3Ighwk5DMhhMHOsPO/weeXIkpUyTjkcvV2pvw/BJoez9kuS/UL45LACOQwMcqhSB5boUr1wjuEQmWQitkRk55n3V8zx9UoCi+8kGJanjq/4SgLK10wV3+HlL/k+k039Ozlqi4Pz/xQcbh6cXS05Hl7xZSYdKoTVl5n0w4dY+p3kv6DIhVX5ou/f/hlEtk46Bmve7wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABj/wCGXEuzlUGJPAAAAABJRU5ErkJggg==';
function App() {
    const movies = [
        new Movie('Example', [2.5, 1, 5, 3, 4], defaultImg, 'doodly boodly'),
        new Movie('Fight Club', [4, 2, 4, 5, 5], fightImg, 'wow what a movie'),
        new Movie('INCEPTION', [5, 4, 4, 4], inceptionImg, 'weee this is good'),
        new Movie('Black Widow', [4, 3, 5, 3, 4], blackwidowImg, 'wawa so much wow'),
        new Movie('Example2', [4, 2, 5], defaultImg, 'a triple A'),
        new Movie('Example3', [3, 4, 1], defaultImg, 'good and old'),
    ];

    const getTopMovies = () => {
        const tops = [...movies];
        tops.sort((a, b) => b.rating - a.rating);
        return tops.slice(0, 3);
    };

    return (
        <div className='App'>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<HomePage topMovies={getTopMovies()} />} />
                    <Route path='/homepage' element={<HomePage topMovies={getTopMovies()} />} />
                    {movies.map((v, i) => {
                        return (
                            <Route
                                key={i}
                                path={`movie-${v.id}`}
                                element={<MoviePage movie={movies[i]} movies={movies} />}
                            />
                        );
                    })}
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;

let movieId = 0;
class Movie {
    constructor(name, ratings, img, description) {
        this.id = movieId++;

        this.name = name;
        this.ratings = ratings;
        this.img = img;
        this.description = description;
    }

    rate(rating) {
        this.ratings.push(rating);
    }

    get rating() {
        return (this.ratings.reduce((sum, a) => sum + a) / this.ratings.length).toFixed(2);
    }
}
