import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../UIs/Card';
import { NavLink } from 'react-router-dom';

const databaseAPI = 'http://localhost:3001/database';

function Browse() {
  const [producs, setProducts] = useState([]);

  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const producsFilter = producs.filter((res) => {
    res.name = res.name.toLowerCase()
    return res.name.includes(search.toLowerCase());
  });

  const searchHandler = (e) => {
    setSearch(e.target.value); 
    };

  const getproducs = () => axios.get(databaseAPI);
  //const getCountries = () => axios.get(countriesAPI);

  useEffect(() => {
    setLoading(true);
    Promise.all([getproducs()]).then(function (results) {
      const producsData = results[0]; 
      setProducts(producsData.data);

      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="page">
      <NavLink to="/add" className="addCard">Add new card </NavLink>
      <div className="search" >
        <label> Search </label>
        <input type="text" className="searchImput" placeholder="🔍" onChange={searchHandler} />
      </div>
    
      <div className="showCards" >
        {producsFilter.map((recipe) => (
          <Card
            key={recipe.id}
            name={recipe.name}
            data={recipe}

            {...recipe}
          />
        ))}
      </div>

    </div>
  );
};

export default Browse;
