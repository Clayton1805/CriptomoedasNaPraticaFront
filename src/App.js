import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Provider from "./context/Provider";
import DraftPage from "./pages/DraftPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Provider>
          <Switch>
            <Route exact path="/draft" component={ DraftPage } />
            {/* <Route exact path="/login" component={} /> */}
            <Route exact path="/" component={ () => <Redirect to="/draft" /> } />
          </Switch>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
