import styles from './Builder.module.css';

const Builder = (props) => {
  return (
    <div className={styles.builder}>
      <div>
        <label htmlFor="className">Class Name:</label>
        <input
          id="className"
          type="text"
          value={props.data.className}
          onChange={(event) => props.handleChange(event)}
        />
      </div>
      <div>
        <span>Text:</span>
        <input
          id="text"
          type="text"
          value={props.data.text}
          onChange={(event) => props.handleChange(event)}
        />
      </div>
      <div>
        <span>Text Size:</span>
        <input
          id="fontSize"
          type="range"
          min="4"
          max="144"
          value={props.data.fontSize}
          onChange={(event) => props.handleChange(event)}
        />
      </div>
      <div>
        <span>Font Weight:</span>
        <input
          id="fontWeight"
          type="range"
          min="100"
          max="900"
          step="100"
          value={props.data.fontWeight}
          onChange={(event) => props.handleChange(event)}
        />
      </div>
      <div>
        <span>Padding:</span>
        <input
          id="padding"
          type="range"
          min="0"
          max="128"
          value={props.data.padding}
          onChange={(event) => props.handleChange(event)}
        />
      </div>
      <div>
        <span>Text Color: </span>
        <input
          className={styles.colorPicker}
          id="color"
          type="color"
          value={props.data.color}
          onChange={(event) => props.handleChange(event)}
        />
      </div>
      <div>
        <span>Background Color: </span>
        <input
          className={styles.colorPicker}
          id="backgroundColor"
          type="color"
          value={props.data.backgroundColor}
          onChange={(event) => props.handleChange(event)}
        />
      </div>
    </div>
  );
};

export default Builder;
