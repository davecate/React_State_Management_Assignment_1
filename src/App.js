import React, { useState } from "react";
import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

// children: PostCreate.js, PostList.js

function App() {

  // declare initial form state
  const initialFormState = {
    id: "",
    type: "Text",
    content: ""
  }

  // declare all state variables for child components

  const [formData, setFormData] = useState( { ...initialFormState } )

  const [type, setType] = useState("Text")

  const [posts, setPosts] = useState([]);

  return (

    <div className="App">
      {/* call in PostCreate.js to create posts */}
      <PostCreate 
      initialFormState={initialFormState} 
      formData={formData} 
      setFormData={setFormData}
      type={type} 
      setType={setType}
      posts={posts}
      setPosts={setPosts}
      />
      
      {/* call in PostList.js to display posts */}
      <PostList 
      type={type}
      posts={posts} 
      setPosts={setPosts}/>

    </div>

  );
}

export default App;
