import React from "react";

const ItemE = () => {
  return (
    <div className="rounded bg-light d-flex flex-column p-3 pt-3 my-4 shadow justify-content-between">
      <div className="d-flex justify-content-between">
        <a href="#" className="btn btn-secondary text-light fw-bold">
          NEW
        </a>
        <div>
          <a href="#">
            <i className="fa-solid fas fa-list-ul fs-3 text-muted"></i>
          </a>
          <a href="#">
            <i className="fa-regular fa-heart  fs-3 text-secondary ms-3 "></i>
          </a>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center my-3">
        <img
          src="https://5.imimg.com/data5/PH/TG/GLADMIN-60213000/solid-wood-one-seater-sofa-500x500.png"
          width="250px"
          height="150px"
          alt="Green Sofa"
          className="text-center mt-2"
        />
      </div>
      <h4 className="text-center text-secondary">Grey Sofa</h4>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <i className="fa-solid fa-star text-warning"></i>
          <i className="fa-solid fa-star text-warning"></i>
          <i className="fa-solid fa-star text-warning"></i>
          <i className="fa-solid fa-star text-warning"></i>
          <i className="fa-solid fa-star text-secondary"></i>
        </div>
        <div className="input-group w-50">
          <input
            disabled
            type="text"
            className="form-control border-2 bg-light"
            placeholder="Rp 1.000.000"
          />
          <div
            className="input-group-text bg-light border-2"
            id="btnGroupAddon"
          >
            <i className="fa-solid fa-cart-shopping text-secondary"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemE;
