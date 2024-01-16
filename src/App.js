import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// completly fine as this is public key
const promise = loadStripe(
  'pk_test_51OZGIdSG3yi8p7yuOUpz81UgnFFiyduWJBf1lIewPMzjpzUJyjSjzMm9TQVkj7XV6i7gaFR5sZpI28NZBSEOsDI100RLlJjfxy'
);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
