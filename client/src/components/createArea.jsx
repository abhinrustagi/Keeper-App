import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  const [visibility, changeVisibility] = useState(false);

  function expandTitle() {
    changeVisibility(true);
  }

  function hideTitle() {
    changeVisibility(false);
  }

  return (
    <div>
      <form className="Add__Note" onMouseLeave={hideTitle}>
        {visibility && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
          onMouseDown={expandTitle}
        />
        <button onClick={submitNote}>
          <i className="fas fa-plus"></i>
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
