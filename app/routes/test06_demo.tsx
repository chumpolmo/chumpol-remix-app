import { useState } from 'react';

let initialPlayers = [
    { id: 0, name: 'Mohamed Salah' },
    { id: 1, name: 'Virgil van Dijk'},
    { id: 2, name: 'Alisson Becker'},
  ];
let nextId = initialPlayers.length;

export default function List() {
  const [name, setName] = useState('');
  const [players, setPlayers] = useState(initialPlayers);

  return (
    <div className='m-5'>
      <h1 className='text-lg font-bold'>นักแตะที่คุณชอบ:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        className='border border-rose-600'
      />
      <button
        onClick={() => {
            setPlayers([
            ...players,
            { id: nextId++, name: name }
            ]);
            console.log(nextId);
        }}
        className='m-1 border border-rose-600 bg-rose-400 w-16'
      >Add</button>
      <div className='mt-5'>
      <h1 className='text-lg font-bold'>รายชื่อนักแตะที่สร้างแรงบันดาลใจ:</h1>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {(index+1) +') ' + player.name+' '}
            <button onClick={() => {
              setPlayers(
                players.filter(a =>
                  a.id !== player.id
                )
              );
            }}
            className='m-1 border border-rose-600 bg-rose-300 w-16'
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
    <div className='mt-5 border-t text-center text-red-600'>
        I &#x2665; Liverpool
    </div>
    </div>
  );
}
