import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header'
import Footer from './components/footer'
import { BlocksContainer } from './containers/blocks_container';

function App() {
  return (
    <div className="App">
      <Header/>
      <BlocksContainer/>
      <Footer className="App-footer"/>
    </div>
  );
}

export default App;
