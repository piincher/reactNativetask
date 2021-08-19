import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from '../src/pages/HomePage.component';
import VideoPlayer from './pages/SingleVideoPage.component';
import VideoUploadPage from './pages/UploadPage.component';
function App() {
	return (
		<Router>
			<Route exact path="/" component={HomePage} />
			<Route path="/videos/:id" component={VideoPlayer} />
			<Route path="/upload" component={VideoUploadPage} />
		</Router>
	);
}

export default App;
