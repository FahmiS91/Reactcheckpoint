import Header from './Comp/Header'
import MyCard from './Comp/Card'
import Formulaire from './Comp/Formulaire'
import {Row} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <Header/>
      <Row>
        <MyCard/>
        <MyCard/>
        <MyCard/>
      </Row>
      <Formulaire/>
      
      
    </div>
  );
}

export default App;
