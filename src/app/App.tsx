import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from '../nav/Nav';
import Search from '../search/Search';
import Home from '../home/Home';
import Detailed from '../detailed/Detailed';
import Error from '../error/Error';
import mockData from '../util/mock-data';
import { getNews } from '../util/api-calls';
import { News, Articles } from '../util/interface';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [articles, setArticles] = useState<Articles[] | null>(null)
  const [newsReel, setNewsReel] = useState<Articles[] | null>(null)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    setError('');

    // getNews('sources', 'bbc-news')
    //   .then(data => formatData(data))
    //   .catch(err => setError(err));

    formatData(mockData);

  }, [])

  function formatData(data: News) {
    if(data) {
      data.articles.forEach((article) => {
        let newDate = article.publishedAt.split('T')[0]
        article.publishedAt = newDate
      })
      setArticles(data.articles)
      const newsUpdate = data.articles.slice(1)
      setNewsReel(newsUpdate)
    }
  }

  return (
    <>
      <Nav />
      <Search articles={articles} />
      <h1 className='heading1'>Current Pulse</h1>
      <h2 className='heading2'>Your Spot For Top Headlines Every Day</h2>
      <Routes>
        <Route path='/' element={<Home articles={articles} newsReel={newsReel} />} />
        <Route path='/article/:title' element={<Detailed articles={articles}/>} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
