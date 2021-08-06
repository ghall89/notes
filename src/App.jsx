import { useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import Sidebar from './components/Sidebar.jsx';
import Main from './components/Main.jsx';

function App() {
	const [notes, setNotes] = useState([]);
	const [activeNote, setActiveNote] = useState(false);

	const onAddNote = () => {
		const newNote = {
			id: uuid(),
			title: 'Untitled',
			body: '',
			lastModified: Date.now()
		};
		setNotes([newNote, ...notes]);
	};

	const onEditNote = updatedNote => {
		const updatedNoteArr = notes.map(note => {
			if (note.id === activeNote) {
				return updatedNote;
			}

			return note;
		});

		setNotes(updatedNoteArr);
	};

	const onDeleteNote = id => {
		setNotes(notes.filter(note => note.id !== id));
	};

	const getActiveNote = () => notes.find(note => note.id === activeNote);

	return (
		<div className="App">
			<Sidebar
				notes={notes}
				onAddNote={onAddNote}
				onDeleteNote={onDeleteNote}
				activeNote={activeNote}
				setActiveNote={setActiveNote}
			/>
			<Main activeNote={getActiveNote()} onEditNote={onEditNote} />
		</div>
	);
}

export default App;
