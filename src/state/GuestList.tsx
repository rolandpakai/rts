import { ChangeEvent, useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const onChange = (e: ChangeEvent<HTMLInputElement>):void => {
    setName(e.target.value);
  }

  const onClick = () => {
    setName('');
    setGuests([...guests, name]);
  }

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map(guest => <li key={guest}>{guest}</li>)}
      </ul>
      <input value={name} onChange={onChange} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  )
};

export default GuestList;