import React,{useState,useEffect} from 'react'
import './row.css'
import axios from '../../js/axios'
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const Row = (props) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const base_url = "http://image.tmdb.org/t/p/original";
  
    useEffect(() => {
      async function fetchData() {
        const request = await axios.get(props.fetchUrl);
        setMovies(request.data.results);
        return request;
      }
      fetchData();
    }, [props.fetchUrl]);
    const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};
    const handleClick = (movie) => {
		if (trailerUrl) {
			setTrailerUrl("");
		} else {
			movieTrailer(movie?.original_name || movie?.title || "")
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search);
					setTrailerUrl(urlParams.get("v"));
				})
				.catch((error) => console.log(error));
		}
	};
  
    return (
      <div className="row">
        <h1>{props.title}</h1>
        <div className="row__posters">
				{movies.map((movie) => (
					<img
						key={movie.id}
						onClick={() => handleClick(movie)}
						className={`row__poster ${props.isLargeRow && "row__posterLarge"}`}
						src={`${base_url}${
							props.isLargeRow ? movie.poster_path : movie.backdrop_path
						}`}
						alt={movie.name}
					/>
				))}
			</div>

			<div className="row__youtube">
				{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
			</div>
      </div>
    );
  };
  
  export default Row
