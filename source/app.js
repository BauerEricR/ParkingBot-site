var React = require('react');
import List from "./resources/List"
import Header from "./resources/Header"
import Body from "./resources/Body"
import Footer from "./resources/Footer"


function App(){
  return(
    <div>
      <Header />
      <List />
      <Body />
      <Footer />
    </div>
  )
}

export default App;
