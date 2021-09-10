import React from "react";
import DeletePost from "./DeletePost"

// parent: PostList.js
// children: DeletePost.js

function PostContent ( { type, post, posts, setPosts } ) {

    // returns post content and delete button
    return (
        <fieldset className="post">
            <div className="postContent" style={{marginTop: 20}}>
                {/* based on selected type, post either text or an  image */}
                {type === "Text" ? post.content : ( <img type={type} src={post.content} alt=""/> ) }
            </div>
            <br/>
            {/* call in DeletePost.js for delete button */}
            <div className="postButtons">
                <DeletePost post={post} posts={posts} setPosts={setPosts} />
            </div>
        </fieldset>
    )

}

export default PostContent