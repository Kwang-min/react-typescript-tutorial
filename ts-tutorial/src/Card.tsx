import React from "react";

type Image = {
  src: string;
  alt: string;
};

interface CardProps {
  image?: Image;
  title: string;
  content: string;
}

const Card = ({ image, title, content }: CardProps) => {
  return (
    <div>
      {image && <img src={image.src} alt={image.alt} />}
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;