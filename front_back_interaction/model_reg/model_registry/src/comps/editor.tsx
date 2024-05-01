const options = {
    autoIndent: 'full',
    contextmenu: true,
    fontFamily: 'monospace',
    fontSize: 13,
    lineHeight: 24,
    hideCursorInOverviewRuler: true,
    matchBrackets: 'always',
    minimap: {
      enabled: true,
    },
    scrollbar: {
      horizontalSliderSize: 4,
      verticalSliderSize: 18,
    },
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: 'line',
    automaticLayout: true,
  };


  import React, { useState, useEffect } from 'react';
  import MonacoEditor from 'react-monaco-editor';
  
  const CodeEditor = () => {
    const [code, setCode] = useState('');
    const [file, setFile] = useState();
    const [language, setLanguage] = useState('javascript');
  
    const handleFileChange = (event) => {
      if (event.target.files) {
        setFile(event.target.files[0]);
      }
    };
  
    useEffect(() => {
      if (file) {
        var reader = new FileReader();
        reader.onload = async (e) => {
          setCode(e.target.result);
        };
        reader.readAsText(file);
        let newLanguage = 'javascript';
        const extension = file.name.split('.').pop();
        if (['css', 'html', 'python', 'dart'].includes(extension)) {
          newLanguage = extension;
        }
        setLanguage(newLanguage);
      }
    }, [file]);
  
  // The Options object goes here and is passed to the editor below
  
    return (
      <div>
        <div>
          <input type="file" onChange={handleFileChange} /> 
        </div>
        <hr />
        <MonacoEditor
          height="800"
          language={language}
          value={code}
          options={options}
        />
      </div>
    );
  };
  
  const App = () => (
    <div>
      <h2>Monaco Editor </h2>
      <CodeEditor />
    </div>
  );
  export default App;