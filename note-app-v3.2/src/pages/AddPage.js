import React from 'react';
import NoteInput from '../components/NoteInput';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/api';
import { LocaleConsumer } from '../contexts/LocaleContext';

function AddPage() {
  const navigate = useNavigate();

  function onAddNoteHandler(note) {
    addNote(note);
    navigate('/');
  }

  return (
    <LocaleConsumer>
    {
      ({ locale }) => {
        return (
          <section>
           <h2>{locale === 'id' ? 'Tambah Catatan' : 'Add Note'}</h2>
           <NoteInput addNote={onAddNoteHandler} />
          </section>
        )
      }
    }
  </LocaleConsumer>

  )
}

export default AddPage;