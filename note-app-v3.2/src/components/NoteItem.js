import React from 'react';
import PropType from 'prop-types';
import NoteItemBody from './NoteItemBody';
import DeleteButton from './DeleteButton';
import { Link } from "react-router-dom";

function NoteItem({ title, body, createdAt, id, onDelete }) {
 return (
   <div className="note-item">
     <Link className="note-fill" to= {"/detail/" + id}>
      <NoteItemBody title={title} body={body} createdAt={createdAt} />
     </Link>
     <DeleteButton id={id} onDelete={onDelete} />
   </div>
 );
}

NoteItem.propType = {
  title: PropType.string.isRequired,
  body: PropType.string.isRequired,
  createdAt: PropType.string.isRequired,
  id: PropType.number.isRequired,
  onDelete: PropType.func.isRequired,
};

export default NoteItem;