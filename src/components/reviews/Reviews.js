import React from "react";
import "./Reviews.css";
import data from "./data";

function Reviews() {
  return (
    <section class="reviews" id="reviews">
      <div className="heading">
        <h3>reviews</h3>
      </div>

      <div className="box-container">
        {data.map((review) => {
          return (
            <div className="box" key={review.id}>
              <img src={review.img} alt="/" />
              <h3>John Doe</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                qui accusamus autem! Veniam exercitationem adipisci in excepturi
                labore magni voluptatibus?
              </p>
              <div className="stars">
                {review.star}
                {review.star}
                {review.star}
                {review.star}
                {review.halfStar}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Reviews;
