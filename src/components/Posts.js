import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../store/action/posts";

const Posts = () => {

  //Get Posts JsonPlaceholder 
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setPosts(data));
      })
      .catch((err) => console.log(err));
  }, []);


  //Active Posts Onclick
  const setDuration = (e) => {
    document.querySelectorAll(".posts-item").forEach((e) => {
      e.classList.remove("posts-active");
    });
    e.target.classList.toggle("posts-active");
  };

  return (
    <div className="posts">
      <h3 className="posts-name">Posts</h3>
      {posts.map((evt, i) => (
        <div key={i} onClick={(e) => setDuration(e)} className="posts-item">
          <h4>{evt.title}</h4>
          <p>{evt.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
