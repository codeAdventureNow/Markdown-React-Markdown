import './App.css';
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';

const textOnLoad = `# Welcome To Markdown Previewer
## Git Hub Flavored
[Inline-style link](https://www.google.com)
${`<div>Hello world of markdown</div>`}

- Apples
- Oranges
- Bananas


\`\`\`
function test() {
  console.log("little code block");
};
  \`\`\`

> Block quotes *make* **you** look smart!

![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)

`;

function App() {
  const [preview, setPreview] = useState(textOnLoad);

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
        <ReactMarkdown className='markdown'>{preview}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
