import MyAPI from "../api/MyAPI"

function PostPage(props) {
  

  // event handlers
  const handleFormSubmit = async (event) => {
    event.preventDefault()

    const postData = {
      message: event.target.elements["message"]
    }

    const data = await MyAPI.sendMessage(postData)

    if (data) {
      console.log(">> post: okay")
    }
    else {
      console.log(">> post: not okay")
    }

  }

  // render
  const renderForm = () => {
    return (
      <form method="POST" onSubmit={ handleFormSubmit } >
        <label>Message: </label>
        <input name="message" placeholder="enter message" />
        <br />
        <button type="submit">Submit</button>
      </form>
    )
  }
  
  return (
    <div>
      <h2>Post Page</h2>
      { renderForm() }
    </div>
  )
}

export default PostPage;