import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './featured.scss';

export default function Featured({ type, setGenre }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDQ3ZjBiMjA4MzczYTM0YjE1ODkyOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODczMjk2MiwiZXhwIjoxNjQ5MTY0OTYyfQ.xo9MY4WeBc8tcPVhUulwaC2RqPNWhtvJqAuPD1Dts28',
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, [type]);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === 'movies' ? 'Movies' : 'Series'}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="comedy">Comedy</option>
            <option value="action">Action</option>
            <option value="crime">Crime</option>
            <option value="adventure">Adventure</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        // src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        src={content?.img}
        alt=""
      />
      <div className="info">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4221/4221419.png"
          // src={content.imgTitle}
          alt=""
        />
        <span className="Bigtitle">{content?.title}</span>

        <span className="desc">{content?.desc}</span>
        <div className="buttons">
          {/* <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button> */}
        </div>
      </div>
    </div>
  );
}
