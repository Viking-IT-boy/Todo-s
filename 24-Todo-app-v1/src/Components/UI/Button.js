import styles from './Button.module.css';

function Button(props) {
  const { onClick, children, title, disabled = false } = props
  return (
    <button
    {...props}
      className={styles.button}
      onClick={onClick} // можно удалить - логика останеться
      title={title} //можно удалить - логика преложения так же останеться 
      //так же можно удалить с конста эти параметры и оно будет так же работать
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
