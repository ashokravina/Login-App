import './index.css'

const Message=props=> {
  const{isLoggIn}=props 
  const Heading= isLoggIn ? 'Welcome User' : 'Please Login'
  return <h1 className="heading">{Heading}</h1>
}
export default Message