let notes = [
  {
    id: 1,
    title: 'Dimas Saputra',
    body: 'dimasmds',
    imageUrl: '/images/dimasmds.jpeg',
  },
  {
    id: 2,
    title: 'Arif Faizin',
    body: 'arifaizin',
    imageUrl: '/images/arifaizin.jpeg',
  },
  {
    id: 3,
    title: 'Rahmat Fajri',
    body: 'rfajri27',
    imageUrl: '/images/rfajri27.jpeg',
  },
]

function getNotes() {
  return notes;
}

function addNote(note) {
  notes = [...notes, { id: +new Date(), imageUrl: '/images/default.jpg', ...note }];
}

function deleteNote(id) {
  notes = notes.filter((note) => note.id !== id);
}

export { getNotes, addNote, deleteNote };