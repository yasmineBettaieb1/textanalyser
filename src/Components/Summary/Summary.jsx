import React from 'react'

const Summary = () => {
  return (
    <div className="result-bar">
    <div className="result-box">
      <span className="box-title">Words</span>
      <span className="box-value">0</span>
    </div>
    <div className="result-box">
      <span className="box-title">Characters</span>
      <span className="box-value">0</span>
    </div>
    <div className="result-box">
      <span className="box-title">Sentences</span>
      <span className="box-value">0</span>
    </div>
    <div className="result-box">
      <span className="box-title">Paragraphs </span>
      <span className="box-value">0</span>
    </div>
    <div className="result-box">
      <span className="box-title">Pronouns</span>
      <span className="box-value">0</span>
    </div>
  </div>
  
  )
}

export default Summary