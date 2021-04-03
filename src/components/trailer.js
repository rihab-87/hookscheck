import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import StarRatingComponent from "react-star-rating-component";
import "./trailer.css";
import { Row, Col, Container } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";

export default function trailer({ match, data }) {
  var mvfilter = data.filter((el) => el.id == match.params.name);
  return (
    <div>
      {/*  *****************navbar************** */}
      <nav className="navbar navbar-expand-sm bg-light nav-pos fixed-top ">
        <ul className="nav-pos-trailer" style={{ listStyleType: "none" }}>
          <li>
            <Link className="navbar-brand" to="/">
              <img src="movie.svg" alt="Logo" style={{ width: "40px" }} />{" "}
              <h4 className="styl-logo">APP</h4>
            </Link>
          </li>
          <li className="nav-item">
            {" "}
            <div className="nav-link star-box " style={{ fontSize: 30 }}>
              <StarRatingComponent
                name="app4"
                editing={false}
                starCount={5}
                value={mvfilter[0].rate}
                emptyStarColor={"#8d108d"}
              />
            </div>
          </li>
          <li className="nav-item">
            {" "}
            <Link className="nav-link styl-link-trailer" to="/">
              Home
            </Link>
          </li>
        </ul>
      </nav>
      {/* ******************** * descriptiontrailer ********************* */}
      <Container   className="className" style={{ marginTop: "150px", marginBottom: "150px" }}>
        <Row >
          <Col >
            {" "}
            <h2 className="title-style">Description</h2>
            <div className="pos-descr">
              {" "}
              <Bounce left>
                <p className="descr-style">{mvfilter[0].description} </p>{" "}
              </Bounce>{" "}
            </div>
          </Col>
          <Col>
            {" "}
            <h2 className="title-style">Trailer</h2>
            <Bounce right>
              <ReactPlayer className="pos-descr" url={mvfilter[0].trailer} />{" "}
            </Bounce>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
