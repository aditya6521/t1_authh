import logo from './logo.svg';
import './App.css';
import { auth} from './firebase_config';

import { useAuthState } from 'react-firebase-hooks/auth';
import { SignIn, SignOut } from './auth';
import { ChatRoom } from './chatroom';



function App() {

  const [user] = useAuthState(auth);

  return ( 
    <div className="App">
      <header>
        <h1>Chat App</h1>
        <SignOut/>
      </header>

      <section>
        {user ? <ChatRoom/> : <SignIn/>}
      </section>

    </div>
  );
}

export default App;
