import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/api';

function NoteItemBody({ title, body, createdAt }) {
 return (
   <div className="note-item__body">
     <h3 className="note-item__title">{title}</h3>
     <h4 className="note-item__date">{showFormattedDate(createdAt)}</h4>
     <p className="note-item__inbody">{body}</p>
   </div>
 );
}

NoteItemBody.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
}

export default NoteItemBody;