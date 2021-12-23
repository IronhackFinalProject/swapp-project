// import "../App.css";

// function chatprofile() {
//   return (
//     <div className="App">
//       <h2>CHAT PROFILE</h2>
//     </div>
//   );
// }

// export default chatprofile;
import { ChatEngine } from 'react-chat-engine';

function Chat() {
	return (
		<ChatEngine
			height= "84vh"
			projectID='8c253c6f-864b-4700-a8b0-f3789313f737'
			userName='FerAdmin'
			userSecret='987654321'
		/>
	);
}

export default Chat;