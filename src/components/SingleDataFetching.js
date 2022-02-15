import axios from "axios";
import React, { useEffect, useState } from "react";

const SingleDataFetching = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState([]);
  const [idFromButtonClick, setIdFromButtonClick] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };
  return (
    <div>
      <h1>I fetch Single data usig useEffect and axios</h1>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <li key={post.id}>{post.title}</li>
    </div>
  );
};

export default SingleDataFetching;
