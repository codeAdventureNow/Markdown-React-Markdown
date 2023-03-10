import './App.css';
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';

function App() {
  // const clean = purify.sanitize('<b>hello there</b>');
  const [preview, setPreview] = useState('');
  console.log(preview);
  const html = preview;
  // const html = marked.parse('# Marked in Node.js\n\nRendered by **marked**.');

  return (
    <div className='App'>
      <div id='editor'>
        <h3 className='title'>Editor</h3>

        <textarea
          className='text-area'
          value={preview}
          onChange={(e) => setPreview(e.target.value)}
        ></textarea>
      </div>

      <div id='preview'>
        <h3 className='title'>Previewer</h3>
        <ReactMarkdown className='markdown'>{html}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
