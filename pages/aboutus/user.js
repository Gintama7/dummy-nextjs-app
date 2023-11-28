

const User = (props) => {
  return (
    <div>
   {props.id<=3 ?  <h1>{props.info.name} {props.info.role}</h1> : <h1> Developer doesn't exist</h1> }
    </div>
  )
}

export default User
