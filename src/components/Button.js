function Button(props){
    console.log(props)
const {functionToDo, content}= props
    return (<button onClick={()=> functionToDo()}> {content}</button>)
}

export default Button