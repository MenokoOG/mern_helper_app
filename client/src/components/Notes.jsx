import React, { useState, useEffect } from 'react';
import './Notes.css'; // Import your CSS file
import axios from 'axios';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: '', content: '' });

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('/api/notes');
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setNewNote(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/api/notes', newNote);
      fetchNotes();
      setNewNote({ title: '', content: '' });
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  return (
    <section className="notes">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={newNote.title}
          onChange={handleInputChange}
        />
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          name="content"
          rows="4"
          cols="50"
          value={newNote.content}
          onChange={handleInputChange}
        ></textarea>
        <button type="submit">Add Note</button>
      </form>
      <ul>
        {notes.map(note => (
          <li key={note._id}>
            <strong>{note.title}</strong>: {note.content}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Notes;
