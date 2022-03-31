
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import List from './../../components/list/List';
import axios from "axios";
import { useEffect, useState } from "react";

const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDQ3ZjBiMjA4MzczYTM0YjE1ODkyOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0ODczMjk2MiwiZXhwIjoxNjQ5MTY0OTYyfQ.xo9MY4WeBc8tcPVhUulwaC2RqPNWhtvJqAuPD1Dts28"
            },
          }
        );
        // setLists(res.data);
        console.log('====================================');
        console.log(res);
        console.log('====================================');
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
    
      <List/>
      <List/>
     
    </div>
  );
};

export default Home;