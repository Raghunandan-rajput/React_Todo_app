import Form from "./Components/Form";
import ListGroup from "./Components/ListGroup";
import Navbar from "./Components/Navbar";
import { GlobalProvider } from "./Context/GlobalContext";

function App() {
  return (
    <>
      <GlobalProvider>
        <div className="backgroundchange">
          <Navbar />
          <Form />
          <ListGroup />
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;
//how to set javascript react in visual studio code?