//App.js

import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
	{
		id: '0',
		message: 'Hey!',

		// This calls the next id
		// i.e. id 1 in this case
		trigger: '1',
	}, {
		id: '1',

		// This message appears in
		// the bot chat bubble
		message: 'Please write your username',
		trigger: '2'
	}, {
		id: '2',

	
		user: true,
		trigger: '3',
	}, {
		id: '3',
		message: " hi {previousValue}, how can I help you?",
		trigger: 4
	}, {
		id: '4',
		options: [

		
			{ value: 1, label: 'View Courses' },
			{ value: 2, label: 'Read Articles' },

		],
		end: true
	}
];

// Creating our own theme
const theme = {
	background: '#C9FF8F',
	headerBgColor: '#197B22',
	headerFontSize: '20px',
	botBubbleColor: '#0F3789',
	headerFontColor: 'white',
	botFontColor: 'white',
	userBubbleColor: '#FF5733',
	userFontColor: 'white',
};

// Set some properties of the bot
const config = {
	botAvatar: "https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-vector-user-young-boy-avatar-icon-png-image_1538408.jpg",
	floating: true,
};

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<ChatBot

				
					headerTitle="ChatBot"
					steps={steps}
					{...config}

				/>
			</ThemeProvider>
		</div>
	);
}

export default App;
