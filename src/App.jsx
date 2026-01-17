import "./App.css"
import Form from "./components/Form"
import Header from "./components/Header"

import Report from "./components/Report"
import Contextprovider from "./Contextprovider"
const App = () => {
  return (
    <>


      <Contextprovider>
        
        <div class="Weatherbg">
          
          <div class="Container">
            <Header/>
            <Form />
            <Report />
          </div>
        </div>

      </Contextprovider>





    </>
  )
}
export default App