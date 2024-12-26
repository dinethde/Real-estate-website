import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

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
          <SearchBar />
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
        </div>
      </div>
      <div className="imgContainer">
        <img src="./bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
