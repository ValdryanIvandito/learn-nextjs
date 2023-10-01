import React from "react";

interface Props {
  params: { id: number; photoid: number };
}

const PhotosPage = ({ params: { id, photoid } }: Props) => {
  return (
    <div>
      <h1>PhotosPage</h1>
      <p>UserID : {id}</p>
      <p>PhotoID : {photoid}</p>
    </div>
  );
};

export default PhotosPage;
