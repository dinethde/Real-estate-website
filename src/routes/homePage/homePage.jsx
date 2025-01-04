import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe
            eius, cupiditate ipsum in provident voluptas quia aspernatur
            incidunt aut ipsa consequuntur praesentium at tempore explicabo
            voluptatum? Commodi, itaque nostrum.
          </p>
          {/* <SearchBar /> */}

          <div className="boxes">
            <div className="box">
              <h2>16+</h2>
              <p>Years of Experience</p>
            </div>

            <div className="box">
              <h2>200</h2>
              <p>Award gained</p>
            </div>

            <div className="box">
              <h2>2000+</h2>
              <p>Property Ready</p>
            </div>
          </div>

          <a href="" className="primary-button">
            <Link to={"/list"}>See all listings</Link>
            <img src="/Arrow.svg" alt="" />
          </a>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
