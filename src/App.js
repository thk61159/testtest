import Navigation from './components/Navigation'
import ClassList from './components/ClassList'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
		<BrowserRouter>
			<Routes>
				<Route path='/testtest' element={<Navigation />}>
					<Route index element={<Home />}></Route>
					{/* <Route path='about' element={<About />}></Route> */}
					{/* <Route path='*' element={<Page404 />}></Route> */}
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App;
