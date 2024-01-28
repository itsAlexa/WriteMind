import { useState, MutableRefObject } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '/src/App.css'

interface EditorProps {
    textRef: MutableRefObject<string> | undefined
}

function Editor(props: EditorProps) {
    const [value, setValue] = useState('');
    const handleTextChange = (text: any) => {
        setValue(text);
        if(props.textRef) {
            props.textRef.current = text
        }
    }
    return (
        <div className="text-container">
            <ReactQuill theme="snow" value={value} onChange={handleTextChange} />
        </div>
    ) 
}

export default Editor;