import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: '', content: '' });
  const [editing, setEditing] = useState(false);
  const [editNoteId, setEditNoteId] = useState(null);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNote((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editing) {
      try {
        await axios.put(`/api/notes/${editNoteId}`, newNote);
      } catch (error) {
        console.error('Error updating note:', error);
      }
    } else {
      try {
        await axios.post('/api/notes', newNote);
      } catch (error) {
        console.error('Error creating note:', error);
      }
    }
    resetFormAndEditing();
    fetchNotes();
  };

  const handleEdit = (note) => {
    setEditing(true);
    setEditNoteId(note._id);
    setNewNote({ title: note.title, content: note.content });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/notes/${id}`);
      fetchNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const handleCancel = () => {
    // Reset editing state and clear form
    resetFormAndEditing();
  };

  const resetFormAndEditing = () => {
    setEditing(false);
    setEditNoteId(null);
    setNewNote({ title: '', content: '' });
  };

  return (
    <section className="notes">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={newNote.title} onChange={handleInputChange} />
        <label htmlFor="content">Content:</label>
        <textarea id="content" name="content" rows="4" value={newNote.content} onChange={handleInputChange}></textarea>
        <button type="submit">{editing ? 'Update Note' : 'Add Note'}</button>
        {editing && (
          <button type="button" onClick={handleCancel}>Cancel</button> // Note the type="button" to prevent form submission
        )}
      </form>
      <ul className="grid-container">
        {notes.map((note) => (
          <li key={note._id} className="card">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <div className="buttons">
              <button className="notes-edit" onClick={() => handleEdit(note)}>Edit</button>
              <button className="notes-delete" onClick={() => handleDelete(note._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Notes;
