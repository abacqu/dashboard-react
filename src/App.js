import logo from './logo.svg';
import './App.css';
import Rating from "./components/Rating";
import Review from "./components/Review";
import Sentiment from "./components/Sentiment";
import Sidebar from "./components/Sidebar";
import Visitor from "./components/Visitor";
import "./styles.css"

const App = () => {
  return ( 
    <div className="dashboard">
    <Sidebar />
    <Review />
    <Rating />
    <Sentiment />
    <Visitor />
    </div>  
  );
}

export default App;
