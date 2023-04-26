import styles from './Input.module.css';
const Input = function ({ inputValue, setInputValue }) {
  return (
    <input
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Enter your location"
      className={styles.input}
      type="text"
    />
  );
};

export default Input;
