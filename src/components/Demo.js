import React from 'react'
import './Demo.css'

const Demo = () => {
  return (
    <div className='demo' id='demo'>
    <div className="container">
        <div className="col-1">
            <p>More than 100 Financial Planners</p>
            <p>One Philosophy</p>
            <p>Every single one of our financial advisors receives rigorous training according to John Doe's philosophy based on academic research including that if nobel laureate in Economical and Behavioral Finance</p>
            <button className="button">Get you free financial analysis</button>
        </div>
        <div className="col-2">
            <iframe width='570' height='320' src='https://www.youtube.com/embed/oeqP5JtihMA'  title='Youtube video player' allowFullScreen></iframe>
        </div>
    </div>
    
    </div>
  )
}

export default Demo
