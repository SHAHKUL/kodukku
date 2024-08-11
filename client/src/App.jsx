import "./App.css";
import Data from "./Data";
import Form from "./Form";
import { Routes, Route } from "react-router-dom";
import Update from "./Update";
function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Form />
              <Data />
            </>
          }
        />
        <Route path="/edit/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
