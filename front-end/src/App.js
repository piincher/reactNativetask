import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from '../src/pages/HomePage.component';
import VideoPlayer from './pages/SingleVideoPage.component';
function App() {
	return (
		<Router>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/videos/:id" component={VideoPlayer} />
		</Router>
	);
}

export default App;
