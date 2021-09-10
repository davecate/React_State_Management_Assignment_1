import React from "react"
import PostContent from "./PostContent"

// parent: App.js
// siblings: PostCreate.js
// children: PostContent.js

function PostList( { posts, setPosts } ) {

  // map thru posts array, create new post components with id's attached
  const postList = posts.map( (post, index) => {

    post.id = `${index}`

    // call in PostContent.js to create new post
    return <PostContent 
    type={post.type} 
    post={post} 
    posts={posts} 
    setPosts={setPosts}
    key={index} 
    /> 

  })

  return <div className="post-list">
         {postList}
         </div>

}

export default PostList
