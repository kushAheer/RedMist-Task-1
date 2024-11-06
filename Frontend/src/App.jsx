
import './App.css'
import ProductAdditionals from './components/Forms/ProductAdditionals'
import ProductCatalog from './components/Forms/ProductCatalog'
import ProductCreate from './components/Forms/ProductCreate'
import ProductGeneralInfo from './components/Forms/ProductGeneralInfo'
import ProductMedia from './components/Forms/ProductMedia'
import AppLayout from './components/Layout/AppLayout'
import ProgressBar from './components/UI/ProgressBar'
import { useSelector } from 'react-redux'
import HomePage from './pages/HomePage'

function App() {
	//create
	//general info
	//catalog
	//additionals
	//media

	const step = useSelector((state) => state.progress.step)

	const content = () => {
		switch (step) {
			case 0:
				return <ProductCreate />
			case 1:
				return <ProductGeneralInfo />
			case 2:
				return <ProductCatalog />
			case 3:
				return <ProductAdditionals />
			case 4:
				return <ProductMedia />
			case 5:
				return <HomePage />
		}
	}

	

	return (
    
		<>
			<AppLayout>
				{content()}
			</AppLayout>
		</>
  )
}

export default App
