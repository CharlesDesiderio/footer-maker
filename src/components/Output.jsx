const Output = (props) => {
  return (
    <footer style={{ width: '100%', backgroundColor: props.data.backgroundColor, color: props.data.color, padding: `${props.data.padding}px`, fontSize: `${props.data.fontSize}px`, textAlign: 'center' }} >{ props.data.text }</footer>
  )
}

export default Output