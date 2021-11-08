import { useRef } from 'react'
import styles from './Code.module.css'

const Code = (props) => {

  let htmlRef = useRef()
  let cssRef = useRef()
  let copyHtmlButtonRef = useRef()
  let copyCssButtonRef = useRef()

  const copyCss = () => {
    navigator.clipboard.writeText(cssRef.current.innerText)
    copyCssButtonRef.current.textContent = 'Copied!'
    setTimeout(() => {
      copyCssButtonRef.current.textContent = 'Copy'
    }, 1500)
  }

  const copyHtml = () => {
    navigator.clipboard.writeText(htmlRef.current.innerText)
    copyHtmlButtonRef.current.textContent = 'Copied!'
    setTimeout(() => {
      copyHtmlButtonRef.current.textContent = 'Copy'
    }, 1500)
  }

  return (
    <div className={styles.code}>
      <div className={styles.container}><button className={styles.copyButton} ref={copyHtmlButtonRef} onClick={copyHtml}>Copy</button>
      <span className={styles.codeHeader}>HTML Code:</span>
      <div ref={htmlRef} className={styles.html}>
        { `<footer class="${props.data.className}">`}<br />
        {`<p>${props.data.text}</p>`}<br />
        { `</footer>` }<br />
        <br />
      </div>
      </div>

      <div className={styles.container}><button className={styles.copyButton} ref={copyCssButtonRef} onClick={copyCss}>Copy</button>
        <span className={styles.codeHeader}>CSS Code:</span>
        <div ref={cssRef} >
        {`.${props.data.className} {`}<br />
        <span className={styles.indentCode}>
        <span>width: 100%;</span><br />
        <span>text-align: center;</span><br />
        {`font-size: ${props.data.fontSize}px`};<br />
        {`font-weight: ${props.data.fontWeight}`};<br />
        {`color: ${props.data.color}`};<br />
        {`background-color: ${props.data.backgroundColor}`};<br />
        {`padding: ${props.data.padding}px`};<br /></span>
        {`}`}
        </div>
      </div>


    </div>
  )

}

export default Code