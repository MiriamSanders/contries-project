import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import PixaInput from './PixaInput';
import PixaItem from './PixaItem';
import persistToLocalStoragePixa from './service/cacheData';

function Pixa() {
  const [infoItem, setInfoItem] = useState([]);

  useEffect(() => {
    doApi('cat');
  }, []);

  const doApi = async (query) => {
    setInfoItem([]);
    let url = 'https://pixabay.com/api/?key=52395405-557654a74e6b7f7ed978ed5b8&q=' + query;
    console.log(url);

    try {
      let resp =await persistToLocalStoragePixa(query,url);
      console.log(resp);
      setInfoItem(resp.data.hits);
    } catch (err) {
      console.log(err);
      alert('we encountered a problem, please come back later');
    }
  };

  return (
    <div className="container">
      <h2>Pixabay App</h2>
      <PixaInput doApi={doApi} />
      <PixaItem data={infoItem} />
    </div>
  );
}

export default Pixa;
