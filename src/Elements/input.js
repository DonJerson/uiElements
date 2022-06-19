
function Input(props) {
  const placeholder = props.placeholder? props.placeholder : 'Search';
  const type = props.type? props.type : 'text';

  const method=(e)=>{
    if(props.method){
      props.method(e.target.value);
    }
  }
  
  return (
    <>
    <input className="input" onChange={method} value={props.value}

    type={type} placeholder={placeholder} />
    </>
  );
}

export default Input;
