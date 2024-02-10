function Button(){
  const name = 'shivam';

  let fullName = (name) => {
    return name;
  }
  return <button className="btn btn-primary">click here {fullName(name)}</button>
}
export default Button;