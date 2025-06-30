const { useState, useEffect } = React;

function App() {
  const [notes, setNotes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [note, setNote] = useState({ title: '', content: '' });

  useEffect(() => {
    const stored = localStorage.getItem("notes");
    if (stored) setNotes(JSON.parse(stored));
  }, []);

  const handleCreate = () => {
    if (!note.title || !note.content) {
      alert("Both fields required");
      return;
    }
    const newNote = {
      ...note,
      id: Date.now(),
      date: new Date().toLocaleDateString("en-GB"),
    };
    const updated = [...notes, newNote];
    setNotes(updated);
    localStorage.setItem("notes", JSON.stringify(updated));
    setNote({ title: '', content: '' });
    setShowModal(false);
  };

  return (
    <div>
      <header>
        <h1>Taskify</h1>
        <div>
          <button>Tasks</button>
          <button>Notes</button>
          <button>Profile</button>
          <button className="logout">Logout</button>
        </div>
      </header>

      <div className="container">
        <h2>My Notes</h2>
        <button className="new-note-btn" onClick={() => setShowModal(true)}>+ New Note</button>
        <input type="text" className="search" placeholder="Search notes..." />

        {notes.map((n) => (
          <div key={n.id} className="note-card">
            <h3>{n.title}</h3>
            <pre>{n.content}</pre>
            <small>{n.date}</small>
          </div>
        ))}

        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h2>New Note</h2>
              <label>
                <strong>Title</strong>
                <input
                  type="text"
                  value={note.title}
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                  placeholder="Enter note title"
                />
              </label>
              <label>
                <strong>Content</strong>
                <textarea
                  value={note.content}
                  onChange={(e) => setNote({ ...note, content: e.target.value })}
                  placeholder="Enter note content"
                  rows="4"
                />
              </label>
              <div className="modal-buttons">
                <button onClick={() => setShowModal(false)}>Cancel</button>
                <button className="create" onClick={handleCreate}>Create Note</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
