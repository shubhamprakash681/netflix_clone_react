import React, { useState } from "react";
import "../styles/home.scss";
import Row from "./Row";

import axios from "axios";

import banner_img from "./cov_images/movCovImg.jpg";
import { useEffect } from "react";

const api_key = "628ae41b7cf5e7ed695d966bfe52720c";
const url = "https://api.themoviedb.org/3/movie";
const imgUrl = "https://image.tmdb.org/t/p/original";

const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [bannerImg, setBannerImg] = useState(banner_img);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      const {
        data: { results },
      } = await axios.get(
        `${url}/${upcoming}?api_key=${api_key}&language=en-US&page=1`
      );
      setUpcomingMovies(results);
    };

    const fetchNowPlayingMovies = async () => {
      const {
        data: { results },
      } = await axios.get(
        `${url}/${nowPlaying}?api_key=${api_key}&language=en-US&page=1`
      );
      setNowPlayingMovies(results);
    };

    const fetchPopularMovies = async () => {
      const {
        data: { results },
      } = await axios.get(
        `${url}/${popular}?api_key=${api_key}&language=en-US&page=1`
      );
      setPopularMovies(results);
    };

    const fetchTopRatedMovies = async () => {
      const {
        data: { results },
      } = await axios.get(
        `${url}/${topRated}?api_key=${api_key}&language=en-US&page=1`
      );
      setTopRatedMovies(results);
    };

    fetchUpcomingMovies();
    fetchNowPlayingMovies();
    fetchPopularMovies();
    fetchTopRatedMovies();
  }, []);

  useEffect(() => {
    if (popularMovies[0]) {
      // console.log(popularMovies[0].poster_path);
      const tempUrl = `${imgUrl}/${popularMovies[0].poster_path}`;
      // console.log("turl:", tempUrl);
      setBannerImg(`${tempUrl}`);
    }
  }, [popularMovies]);

  // console.log("here", upcomingMovies);

  return (
    <>
      <section className="home">
        <div
          className="banner"
          style={{
            backgroundImage: `url(${bannerImg})`,
          }}
        >
          {/* <img src={bannerImg} alt="" /> */}
        </div>

        <Row
          key={Number(1)}
          tittle="Upcoming Movies"
          allMovies={upcomingMovies}
        />
        <Row
          key={Number(2)}
          tittle="Top Rated Movies"
          allMovies={topRatedMovies}
        />
        <Row
          key={Number(3)}
          tittle="Popular Movies"
          allMovies={popularMovies}
        />
        <Row
          key={Number(4)}
          tittle="Now Playing"
          allMovies={nowPlayingMovies}
        />
      </section>
    </>
  );
};

export default Home;
