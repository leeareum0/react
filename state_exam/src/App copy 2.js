import { useState } from "react";
import "./shop.css";
import TestComponentHeader from "./Component/TestComponent0";
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
  const showStar = (count) => {
    const starArr = new Array();
    for (let i = 0; i < count; i++) {
      starArr.push(<img key={"star" + i} src="/img/star-on.png"></img>);
    }
    return starArr;
  };
  return (
    <div className="App">
      <div className="wrap">
      <TestComponentHeader />
        {/* <div className="header">
          <div>모자팜</div>
        </div> */}
        <div className="content">
          <div className="title">
            <span className="material-icons">local_fire_department</span>
            <span className="material-icons">local_fire_department</span>
            <span>인기상품</span>
            <span className="material-icons">local_fire_department</span>
            <span className="material-icons">local_fire_department</span>
          </div>
          <div className="product-list">

            {productList.map((product, index) => {
              return (
                <div className="product" key={"product" + index}>
                  <div className="product-img">
                    <span
                      className="material-icons"
                      onClick={() => {
                        const changeLike = product.likes === 0 ? 1 : 0;
                        const newProductList = [...productList];
                        newProductList[index].likes = changeLike;
                        setProductList(newProductList);
                      }}
                    >
                      {product.likes === 1 ? "favorite" : "favorite_border"}
                    </span>
                    <img src={product.img}></img>
                  </div>
                  <div className="product-info">
                    <div className="product-title">{product.productName}</div>
                    <div className="product-price">
                      {product.productPrice} 원
                    </div>
                    <div className="star-rate">{showStar(product.star)}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="footer">
          <div>footer</div>
        </div>
      </div>
    </div>
  );
}
export default App;