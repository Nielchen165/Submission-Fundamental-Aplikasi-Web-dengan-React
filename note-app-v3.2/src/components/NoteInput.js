import React from 'react';
import PropTypes from 'prop-types';
import { LocaleConsumer } from '../contexts/LocaleContext';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: '',
      body: '',
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      }
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
   return (
    <LocaleConsumer>
    {
      ({ locale }) => {
        return (
          <form className='note-input' onSubmit={this.onSubmitEventHandler}>
            <input type="text" placeholder={locale === 'id' ? 'Judul' : 'Title'} value={this.state.title} onChange={this.onTitleChangeEventHandler} />
            <textarea type="text" placeholder={locale === 'id' ? 'Isi' : 'Body'} value={this.state.body} onChange={this.onBodyChangeEventHandler} />
            <button type="submit">{locale === 'id' ? 'Tambah' : 'Add'}</button>
          </form>
        )
      }
    }
  </LocaleConsumer>
   )
 }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
 }

export default NoteInput;