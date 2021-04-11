import React,{useState} from 'react';
import './slider.css'

function ColorSlider(){

  const [color,setColor] = useState({hue:'297',saturation:'46',light:'53'})

  const handleRangeChange = e => {
    console.log("changing", e.target.name, color)
    setColor({...color, [e.target.name]:e.target.value})
  }
  return (
    <div style={{marginTop:"40px", minWidth:"40%"}}>
      <div className="slide-container">
        <input 
          onInput={handleRangeChange}
          type="range" 
          id="hue" 
          name="hue"
          min="0" 
          max="360"
          value={color.hue}
        />
        <div className="slide-text-container">
          <label for="hue">Hue: </label>
          <div className="slide-text-number">{color.hue}</div>
        </div>
      </div>
      <div className="slide-container">
        <input 
          onInput={handleRangeChange}
          type="range" 
          id="saturation" 
          name="saturation"
          min="0" 
          max="100"
          value={color.saturation}
        />
        <div className="slide-text-container">
          <label for="saturation">Sat: </label>
          <div className="slide-text-number">{color.saturation}%</div>
        </div>
      </div>
      <div className="slide-container">
        <input 
          onInput={handleRangeChange}
          type="range" 
          id="light" 
          name="light"
          min="0" 
          max="100"
          value={color.light}
        />
        <div className="slide-text-container">
          <label for="light">Light: </label>
          <div className="slide-text-number">{color.light}%</div>
        </div>
      </div>
      <div 
        className="slide-color-box"
        style={{backgroundColor:`hsla(${color.hue},${color.saturation}%,${color.light}%,1)`}}   
      >
      </div>
    </div>
  )
}

export default ColorSlider;