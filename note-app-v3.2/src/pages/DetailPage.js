import React from 'react';
import { useParams } from "react-router-dom";
import { getNote, showFormattedDate } from '../utils/api'

function DetailPage() {
 const params = useParams();
 const [note, setNote] = React.useState([]);
 React.useEffect(() => {
    getNote(params.id).then(({ data }) => {
      setNote(data);
    });
  }, []);
 return (
   <div className="note-detail__body">
     <h3 className="note-detail__title">{note.title}</h3>
     <h4 className="note-detail__date">{showFormattedDate(note.createdAt)}</h4>
     <p className="note-detail__inbody">{note.body}</p>
   </div>
 );
}

export default DetailPage;