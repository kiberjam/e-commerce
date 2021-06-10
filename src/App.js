import React from "react";
import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardPage from "./components/DashboardPage";
import ProductCreateController from "./controllers/ProductCreate";
import ProductDetailController from "./controllers/ProductDetail";
import ProductEditController from "./controllers/ProductEdit";
import ProductListController from "./controllers/ProductList";

function App() {
  useEffect(() => {
    localStorage.setItem("myProducts", JSON.stringify(dummyData));
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <DashboardPage />
          </Route>
          <Route exact path="/products">
            <ProductListController />
          </Route>
          <Route exact path="/products/create">
            <ProductCreateController />
          </Route>
          <Route path="/products/:id/edit">
            <ProductEditController />
          </Route>
          <Route path="/products/:id">
            <ProductDetailController />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

const dummyData = [
  {
    id: "0000001GIq9JNwG_",
    category: "printer",
    name: "HP - OfficeJet Pro 9015 Wireless All-In-One Instant Ink",
    price: "229.99",
    imageURL:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6320/6320038_sd.jpg;maxHeight=640;maxWidth=550",
  },
  {
    id: "0000001YIyDeL0yC",
    category: "monoblock",
    name: "Surface Studio 2",
    price: "3499.99",
    imageURL:
      "https://www.hpi.com/images/detailed/24/Screen_Shot_2018-10-09_at_10.56.25_AM_bdv3-xs_b3lm-b1_phvu-i4.png",
  },
  {
    id: "000000mhT-CGdPQ0",
    category: "laptop",
    name: "Surface Pro 7",
    price: "749.00",
    imageURL:
      "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4tjV5?ver=eab4&q=90&m=6&h=270&w=270&b=%23FFFFFFFF&f=jpg&o=f&aim=true",
  },

  {
    id: "000000lPedjztJfg",
    category: "laptop",
    name: "Macbook Air 13-inch, M1 Chip",
    price: "999.00",
    imageURL:
      "https://www.techinn.com/f/13754/137543058_5/apple-macbook-air-13-i3-1.1-8gb-256gb-laptop.jpg",
  },
];
