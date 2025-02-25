import React from 'react';
import ReactDOM from 'react-dom/client';

function FriendsForMe(props) {
  const friends = props.friends;
  return (
    <>
      <h1>About Friends!!</h1>
      { friends.length > 0 &&
        <h2>
          You have {friends.length} friends for you!!!
        </h2>
      }
         <h3>You have no friends for you!!!</h3>
    </>
  );
}
const friends = ['ABCD', 'MDA', 'SP', 'ABR'];
const friendss = [];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FriendsForMe friends={friendss} />);
