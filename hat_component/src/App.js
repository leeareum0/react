import "./shop.css";
import Header from "./component/common/Header";
import Footer from "./component/common/Footer";
import Title from "./component/product/Title";
import ProductList from "./component/product/ProductList";
import { useState } from "react";

function App() {
  const [productList, setProductList] = useState([
    {
      productNo: 1,
      productName: "놀부모자",
      img: "/img/product1.jpeg",
      productPrice: 19900,
      star: 4,
      likes: 1,
    },
    {
      productNo: 2,
      productName: "해바라기모자",
      img: "/img/product2.jpeg",
      productPrice: 25600,
      star: 3,
      likes: 0,
    },
    {
      productNo: 3,
      productName: "파라오모자",
      img: "/img/product3.jpeg",
      productPrice: 23800,
      star: 5,
      likes: 1,
    },
    {
      productNo: 4,
      productName: "붕어빵모자",
      img: "/img/product4.jpeg",
      productPrice: 15600,
      star: 2,
      likes: 0,
    },
  ]);
  const changeLike = (index) => {
    const newProductList = [...productList];
    const likesStaus = newProductList [index].likes;
    const changeStaus = likesStaus === 0 ? 1 : 0;
    newProductList[index].likes = changeStaus;
    setProductList(newProductList);
  };
  return (
    <div className="App">
      <div className="wrap">
        <Header />
        <div className="content">
          <Title />
          <ProductList productList={productList} changeLike={changeLike} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
