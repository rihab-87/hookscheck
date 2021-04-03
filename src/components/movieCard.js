import React from "react";

import { Card } from "react-bootstrap";
import "./moviecard.css";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";

export default function movieCard({ movie }) {
  return (
    <Link to={`/${movie.id}`}>
      <Card
        style={{ width: "18rem", marginTop: "30px", height: "450px" }}
        className="card-style"
      >
        <Card.Img variant="top" src={movie.Img} style={{ height: "320px" }} />
        <Card.Body>
          <Card.Title
            style={{
              fontFamily: "Georgia, 'Times New Roman', Times, serif",
              fontSize: "large",
              fontWeight: 700,
              textAlign: "center",
              color: "black",
            }}
          >
            {movie.title}
          </Card.Title>

          <Card.Text>
            <div style={{ fontSize: 20, textAlign: "center" }}>
              <StarRatingComponent
                name="app4"
                editing={false}
                starCount={5}
                value={movie.rate}
              />
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

