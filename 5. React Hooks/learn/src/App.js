import Counter from "./useEffect/counter";
import useInput from "./useInput";

const App = () =>{
  const [email, handleEmailChange] = useInput('');
  const [password, handlePasswordChange] = useInput('');
  const [confirmPassword, handleConfirmPasswordChange] = useInput('');

  return(
    <form>
      <input value={email} type="email" onChange={handleEmailChange}/>
      <input value={password} type="password" onChange={handlePasswordChange}/>
      <input value={confirmPassword} type="password" onChange={handleConfirmPasswordChange}/>
    </form>
  )
}

export default App;