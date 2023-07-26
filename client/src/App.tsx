import React from 'react';
import {io} from 'socket.io-client';
import MessageBubble from './components/MessageBubble';

const socket = io('http://localhost:8080');

// client-side
socket.on("connect", () => {
	console.log(socket.id); 
  });
  
  socket.on("disconnect", () => {
	console.log(socket.id);
  });
const App = () => {
  return (
	<div>
		<h1>
			Hello World!!!!
		</h1>
		<MessageBubble />
	</div>
  )
}

export default App;
