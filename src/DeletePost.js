import React from "react";

// parent: PostContent.js

function DeletePost ( { post, posts, setPosts } ) {

    // filter through posts array and remove the selected post
    const deletePost = (indexToDelete) => {
        setPosts(posts.filter(post => post.id !== indexToDelete))
    }
    // delete button: selects a post for deletion by passing in its id value
    return <button name="delete" onClick={() => deletePost(post.id)} style={{marginTop: "auto"}}>
            Delete
           </button>

}

export default DeletePost 