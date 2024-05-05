import React, { useEffect, useRef } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

function TextEditor() {
    let wraper=useRef()

    useEffect(()=>{
        const editor=document.createElement('div')
        wraper.current.append(editor)
        new Quill(editor, {
            modules: {
              toolbar: [
                [{ header: [1, 2, false] }],
                ['bold', 'italic', 'underline','link','color','font'],
                ['image','video', 'code-block','align'],
              ],
            },
            placeholder: 'Compose an epic...',
            theme: 'snow', // or 'bubble'
          });
    },[])
  
  return (
    <div id='quill' className='editor' ref={wraper}>
      
    </div>
  )
}

export default TextEditor
