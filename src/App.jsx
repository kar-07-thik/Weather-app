import "./App.css"
import Form from "./components/Form"

import Report from "./components/Report"
import Contextprovider from "./Contextprovider"
const App = () => {
  return (
    <>
      <div class="Weatherbg">

        <Contextprovider>
          
          <div class="Container">
            <Form />
            <Report />
          </div>

        </Contextprovider>

  

    </div >

    </>
  )
}
export default App