import React, { useEffect, useState } from 'react';
import Loader from './Loader/Loader';
import RenderList from './RenderList/RenderList';
import SearchBar from './SearchBar/SearchBar';
import './App.styles.css';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [inputSearch, setInputSearch] = useState('');
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const API_KEY = '36730001-9966eb2ff0700192767337e13';

  const changeLimit = () => {
    setLimit(prevLimit => prevLimit + 10);
    fetchFromApi();
    console.log('zmieniam limit');
  };
  useEffect(() => {
    fetchFromApi();
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit]);
  useEffect(() => {
    if (inputSearch.length === 0 && images.length < 0) {
      setImages([]);
    }
  }, [images, inputSearch]);

  const handleChange = e => {
    const { value } = e.target;
    setInputSearch(value);
  };

  const fetchFromApi = async () => {
    setIsLoading(true);
    try {
      // const { inputSearch, limit, page, API_KEY } = this.state;
      const response = await fetch(
        `https://pixabay.com/api/?q=${inputSearch}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${limit}`
      );
      const data = await response.json();

      setImages(data.hits);
    } catch (error) {
      console.log('error', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputSearch.length === 0) {
      setImages([]);
      alert('Search input cannot me empty');
    } else {
      fetchFromApi();
    }
  };

  return (
    <div className="app">
      <SearchBar
        inputSearch={inputSearch}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      ></SearchBar>

      {isLoading ? <Loader /> : <RenderList images={images} />}
      <button
        type="button"
        name="showMore"
        onClick={changeLimit}
        className="more_button"
      >
        Show More
      </button>
    </div>
  );
};

export default Gallery;
