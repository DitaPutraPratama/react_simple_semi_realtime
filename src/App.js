import { BrowserRouter, Route, Routes } from "react-router-dom";
import SensorList from "./components/sensorList";
import ChartSensor from "./components/chartSensor";
import Navbar from "./components/navbar";
import About from "./components/about";
import Notifikasi from "./components/notifikasi";
import { Helmet } from 'react-helmet'

export default function App() {
	return (
		<div className="bg-green-50 max-lg:h-screen lg:h-screen md:h-full sm:h-full">
		<Helmet>
			<title>Air Guard</title>
		</Helmet>
			<BrowserRouter>
				<Navbar />
				<Notifikasi/>
					<Routes>
						<Route path='/' element={<SensorList />} />
						<Route path='/detail' element={<ChartSensor />} />
						<Route path='/about' element={<About />} />
					</Routes>
			</BrowserRouter>
		</div>
	);
}
