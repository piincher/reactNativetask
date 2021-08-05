import HomePage from '../src/pages/HomePage.component';
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
	return (
		<Router>
			<Route exact path="/" component={HomePage} />
		</Router>
	);
}

export default App;
