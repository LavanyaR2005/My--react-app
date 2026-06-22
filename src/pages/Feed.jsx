import { useState } from "react";

function Feed() {

const currentUser =
JSON.parse(localStorage.getItem("currentUser"));

const [post, setPost] = useState("");

const [posts, setPosts] = useState(
JSON.parse(localStorage.getItem("posts")) || []
);

const createPost = () => {

```
if (!post.trim()) {
  alert("Write something first");
  return;
}

const newPost = {
  author: currentUser?.name || "Anonymous",
  content: post,
  date: new Date().toLocaleString(),
  likes: 0,
  comments: []
};

const updatedPosts = [
  newPost,
  ...posts
];

localStorage.setItem(
  "posts",
  JSON.stringify(updatedPosts)
);

setPosts(updatedPosts);
setPost("");
```

};

const likePost = (index) => {


const updatedPosts = [...posts];

updatedPosts[index].likes =
  (updatedPosts[index].likes || 0) + 1;

setPosts(updatedPosts);

localStorage.setItem(
  "posts",
  JSON.stringify(updatedPosts)
);


};

const addComment = (index) => {


const text =
  prompt("Enter your comment");

if (!text) return;

const updatedPosts = [...posts];

if (!updatedPosts[index].comments) {
  updatedPosts[index].comments = [];
}

updatedPosts[index].comments.push({
  user: currentUser?.name || "Anonymous",
  text: text
});

setPosts(updatedPosts);

localStorage.setItem(
  "posts",
  JSON.stringify(updatedPosts)
);


};

return ( <div className="page-container">

```
  <h1>
    🚀 Alumni Community Feed
  </h1>

  <div className="feed-post-box">

    <textarea
      rows="4"
      value={post}
      onChange={(e) =>
        setPost(e.target.value)
      }
      placeholder="Share updates with alumni..."
    />

    <br />

    <button onClick={createPost}>
      Post
    </button>

  </div>

  {posts.length > 0 ? (

    posts.map((p, index) => (

      <div
        key={index}
        className="feed-card"
      >

        <div className="feed-header">

          <img
            className="feed-avatar"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
          />

          <div>

            <div className="feed-author">
              {p.author}
            </div>

            <div className="feed-date">
              {p.date}
            </div>

          </div>

        </div>

        <div className="feed-content">
          {p.content}
        </div>

        <div className="feed-actions">

          <button
            onClick={() =>
              likePost(index)
            }
          >
            ❤️ {p.likes || 0} Likes
          </button>

          <button
            onClick={() =>
              addComment(index)
            }
          >
            💬 Comment
          </button>

          <button>
            🔗 Share
          </button>

        </div>

        {p.comments &&
          p.comments.length > 0 && (

          <div
            style={{
              marginTop: "15px"
            }}
          >

            <h4>
              Comments
            </h4>

            {p.comments.map(
              (comment, i) => (

                <p key={i}>
                  <strong>
                    {comment.user}
                  </strong>
                  : {comment.text}
                </p>

              )
            )}

          </div>

        )}

      </div>

    ))

  ) : (

    <p className="no-posts">
      No posts yet.
    </p>

  )}

</div>


);
}

export default Feed;
