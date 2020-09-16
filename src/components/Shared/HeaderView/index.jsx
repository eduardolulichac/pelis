import React from "react";

const HeaderView = ({ title, buttonName, actionBtn }) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <h2>{title}</h2>
      </div>
      <div className="col-md-6 text-right">
        <button className="btn btn-primary" onClick={() => actionBtn()}>
          {buttonName}
        </button>
      </div>
    </div>
  );
};

export default HeaderView;
