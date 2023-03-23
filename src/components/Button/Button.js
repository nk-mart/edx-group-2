
function Button(props) {
    const { functionToDo, content, className } = props;
    return (
      <button className={className} onClick={() => functionToDo()}>
        {content}
      </button>
    );
  }
  
  export default Button;