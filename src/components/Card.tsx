import React from "react";

const Card: React.FC<{ url: string; author: string }> = ({ url, author }) => {
  return (
    <div className="wrapper">
      <div className="img-container">
        <img src={url} alt="" />
      </div>
      <p>{author}</p>
    </div>
  );
};

export default Card;
