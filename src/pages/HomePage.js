import React from "react";
import { Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import { postActions } from "../redux/actions/post.actions";
import { Card, Button } from "react-bootstrap";
import "./Homepage.css";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const [commentBody, setCommentBody] = useState();
  const onCreateComment = (post) => {
    dispatch(postActions.createPostComment(post, commentBody));
    setCommentBody("");
  };
  return (
    <Card>
      {post.photos[0] && (
        <Card.Img
          variant="top"
          src={post.photos[0].url}
          style={{ height: 500, width: 500 }}
        />
      )}
      <Card.Body>
        <Card.Title>{post.body}</Card.Title>

        <input
          value={commentBody}
          onChange={(e) => setCommentBody(e.target.value)}
        ></input>
        <Row>
          {post.comments.map((c) => (
            <p>{c.body}</p>
          ))}
        </Row>
        <Button onClick={() => onCreateComment(post)} variant="primary">
          Comment
        </Button>
      </Card.Body>
    </Card>
  );
};
const HomePage = () => {
  const dispatch = useDispatch();
  const { loading, error, posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(postActions.getPosts());
    return {};
  }, [dispatch]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>We have an error!</h1>;

  return (
    <div className="homepage">
      <Sidebar />
      <div className="homepage__card">
        {posts.map((p) => (
          <Post post={p} />
        ))}
      </div>
    </div>
  );
};

export { HomePage };
