import React, { useEffect } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

function TextEditor() {
    useEffect(()=>{
        new Quill ('#quill',{theme:"snow"})
    },[])
  return (
    <div id='quill'>
      
    </div>
  )
}

export default TextEditor
