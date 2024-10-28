import React from 'react';

function Calculadora() {
    const numero1 = 5;
    const numero2 = 3;
    return (
      <div>
        <p>La suma de { numero1 } y {numero2 } es: {numero1 + numero2}</p>
      </div>
    );
  }
  function Profile() {
    const user = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
      };
    
        return (
          <>
            <h1>{user.name}</h1>
            <img
              className="avatar"
              src={user.imageUrl}
              alt={'Photo of ' + user.name}
              style={{
                width: user.imageSize,
            height: user.imageSize
          }}
        />
      </>
    );
  }
