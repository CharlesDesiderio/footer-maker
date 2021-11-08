const Code = (props) => {


  // className: 'footer',
  // text: 'Sample Text',
  // fontSize: '16',
  // padding: '8',
  // color: '#ffffff',
  // backgroundColor: '#000000'

  return (
    <div>
      {`.${props.data.className} {`}<br />
      {`font-size: ${props.data.fontSize}px`}<br />
      {`color: ${props.data.color}`}<br />
      {`background-color: ${props.data.backgroundColor}`}<br />
      {`padding: ${props.data.padding}px`}<br />
      {`}`}

      {/* {`${}`} */}
    </div>
  )

}

export default Code