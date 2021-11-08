const Builder = (props) => {
  
  return (
    <div>
      Class Name: <input id="className" type="text" value={props.data.className} onChange={(event) => props.handleChange(event)} />      
      Text: <input id="text" type="text" value={props.data.text} onChange={(event) => props.handleChange(event)} />
      Text Size: <input id="fontSize" type="range" min="4" max="144" value={props.data.fontSize} onChange={(event) => props.handleChange(event)} />
      Padding: <input id="padding" type="range" min="0" max="128" value={props.data.padding} onChange={(event) => props.handleChange(event)} />
      Text Color: <input id="color" type="color" value={props.data.color} onChange={(event) => props.handleChange(event)} />
      Background Color: <input id="backgroundColor" type="color" value={props.data.backgroundColor} onChange={(event) => props.handleChange(event)} />
      <p>bgcol: {props.data.backgroundColor} </p>

    </div>
  )
}

export default Builder