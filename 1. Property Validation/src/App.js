import User from "./propTypes/User";
import PropTypesString from "./propTypes/PropTypesString";
import PropTypesBoolean from "./propTypes/PropTypesBool";
import PropTypesNumber from "./propTypes/PropTypesNumber";
import PropTypesArray from "./propTypes/PropTypesArrayOf";
import PropTypesObject from "./propTypes/PropTypesObject";
import PropTypesFunc from "./propTypes/PropTypesFunc";
import PropTypesInstanceOf from "./propTypes/PropTypesInstanceOf";
import PropTypesOneOf from "./propTypes/PropTypesOneOf";

const App = () => {
  const user = new User(1,'Adit', 'Gunuk', '081289503000');
  return (
    // <PropTypesString />
    // <PropTypesFunc onClick={()=>{alert('test')}}/>
    <PropTypesOneOf mode="light"/>
  );
};

export default App;
