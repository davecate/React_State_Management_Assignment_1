import React from "react"

// child of App.js
// siblings: PostList.js

function PostCreate( { initialFormState, formData, setFormData, type, setType, posts } ) {

  // declare new post object, taking in content data from the formData state & type from the type state
  const newPost = { 
    id: "",
    type: type,
    content: formData.content 
  }

  // handler for textarea/input: adds content data to formData state
  const handleChange = (event) => setFormData( {...formData, [event.target.name]: event.target.value} )

  // handler for type selector: sets "type" state to image or text
  const handleTypeChange = (event) => setType(event.target.value)

  // handler for submit button: pushes new post object into posts array and resets formData state
  const handleSubmit = (event) => {
    event.preventDefault()
    posts.push(newPost)
    console.log(posts)
    setFormData( { ...initialFormState } )
  }

  // form that creates posts
  return (
    <form name="create" id="create" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Create</legend>
        <div>
          {/* select post type */}
          <label htmlFor="type">Type: </label>
          <select 
          id="type" 
          name="type"
          onChange={handleTypeChange} 
          required={true}>
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </div>
        <div>
          {/* based on post type, change content field to text mode or image mode */}
          <label htmlFor="content">Content: </label>
          {type === "Text" ? (
            // text mode: takes in text, adds text to post
            <textarea 
            id="content" 
            name="content" 
            value={formData.content} 
            onChange={handleChange}
            required={true} 
            rows={3} 
            />
          ) : (
            // image mode: takes in image url, adds image to post
            <input 
            id="content" 
            name="content" 
            type="url" 
            value={formData.content} 
            onChange={handleChange}
            required={true} 
            />
          ) }
        </div>
        <div>
          {/* submit button */}
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  )
}

export default PostCreate;
