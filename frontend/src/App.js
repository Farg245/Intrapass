import Navbar from "./components/Navbar";
import Home from "./pages/Home.js";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Payment from "./pages/Payment";
import Analysis from "./pages/Analysis";
import ConfirmPayment from "./pages/ConfirmPayment"
import Redirecting from "./pages/Redirecting"
import NotFound from "./pages/404"
import PaymentResults from "./pages/PaymentResults"
import ViewshortAnalysis from "./pages/ViewshortAnalysis";
import ViewlongAnalysis from "./pages/ViewlongAnalysis";
import ChargesBy from "./pages/ChargesBy";
import ChargesByResults from "./pages/ChargesByResults";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/payment">
              <Payment></Payment>
            </Route>
            <Route exact path="/paymentresults">
              <PaymentResults></PaymentResults>
            </Route>
            <Route exact path="/analysis">
              <Analysis></Analysis>
            </Route>
            <Route exact path="/viewshortanalysis">
              <ViewshortAnalysis></ViewshortAnalysis>
            </Route>
            <Route exact path="/viewlonganalysis">
              <ViewlongAnalysis></ViewlongAnalysis>
            </Route>
            <Route exact path='/confirmpayment'>
              <ConfirmPayment></ConfirmPayment>
            </Route>
            <Route exact path='/chargesby'>
              <ChargesBy></ChargesBy>
            </Route>
            <Route exact path='/chargesbyresults'>
              <ChargesByResults></ChargesByResults>
            </Route>
            <Route exact path='/redirecting'>
              <Redirecting></Redirecting>
            </Route>
            <Route exact path='/404'>
              <NotFound></NotFound>
            </Route>
            <Redirect to="/404"/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
