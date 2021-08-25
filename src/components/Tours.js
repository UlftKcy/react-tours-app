import React, { useState } from "react";

const Tours = ({ tours, removeTour }) => {
  const [readMore, setreadMore] = useState(false);
  
  return (
    <div className="cards rounded-3">
      <h2 className="text-center">Our Tours</h2>
      <div className="underline"></div>
      {tours.map((tour) => {
        const { name, info, image, price, id } = tour;
        return (
          <div classname="tour-item">
            <img src={image} alt={name} className="tour-image my-4"></img>
            <div classname="tour-body">
              <div className="tour-header">
                <h5 classname="tour-title">{name}</h5>
                <p classname="tour-price">${price}</p>
              </div>
              <p classname="tour-text">
                {readMore ? info : info.slice(0, 200)}...
                <button
                  className="readBtn"
                  onClick={() => setreadMore(!readMore)}
                  style={{ cursor: "pointer" }}
                >
                  {readMore ? `Read Less` : `Read More`}
                </button>
              </p>
            </div>
            <div className="d-flex">
              <button
                onClick={() => removeTour(id)}
                className="btn btn-outline-danger mx-auto w-50 p-1"
              >
                Not Interested
              </button>
            </div>
            <hr className="border border-success"></hr>
          </div>
        );
      })}
    </div>
  );
};
export default Tours;
