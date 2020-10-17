import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';
import SearchBar from './SearchBar';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);
  return (
    <div className='container'>
      <h1>Pixabay Images</h1>
      <SearchBar searchImages={(searchTerm) => setTerm(searchTerm)} />
      {!loading && images.length === 0 && <h1>Images Not Found</h1>}
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div className='images-grid'>
          {images.map((image) => {
            return <ImageCard key={image.id} {...image} />;
          })}
        </div>
      )}
    </div>
  );
};

export default App;
