import { useState } from 'react';
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa';

const ToggleLamp = () => {
  const [lamp, setLamp] = useState('off');

  const toggleLamp = () => {
    setLamp((lamp) => (lamp === 'off' ? 'on' : 'off'));
  };

  const renderButtonIcon = (lamp) =>{
    return (lamp === 'on') ? <FaLightbulb/> : <FaRegLightbulb/>
  }

  return(
    <div className={lamp}>
      <button onClick={toggleLamp}>{renderButtonIcon(lamp)}</button>
      <h3>Hooks keren!</h3>
    </div>
  )
};

export default ToggleLamp;