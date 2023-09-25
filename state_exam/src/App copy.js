import "./shop.css";
import {useState} from "react";

function App() {
  const [productList, setProductList] = useState([
    {
      productNo : 1,
      productName : "놀부모자",
      img : "/img/product1.jpeg",
      productPrice : 19900,
      star : 4,
      likes : 1,
    },
    {
      productNo : 2,
      productName : "해바라기모자",
      img : "/img/product2.jpeg",
      productPrice : 25600,
      star : 3,
      likes : 0,
    },
    {
      productNo : 3,
      productName : "파라오모자",
      img : "/img/product3.jpeg",
      productPrice : 23800,
      star : 5,
      likes : 1,
    },
    {
      productNo : 4,
      productName : "붕어빵모자",
      img : "/img/product4.jpeg",
      productPrice : 15600,
      star : 2,
      likes : 0,
    },
  ]);
  return (
    <div className="App">
      <div className="wrap">
        <div className="header"> 
          <div>모자팜</div>
          </div>
          <div className="content">
            <div className="title">
            <span className="material-icons">local_fire_department</span>
            <span className="material-icons">local_fire_department</span>
            <span class="material-icons">
favorite_border
</span>인기상품
            <span className="material-icons">local_fire_department</span>
            <span className="material-icons">local_fire_department</span>
            </div>
          <div className="product-list">
            <div className="product">
            <div className="product-img">
                <img src={productList[0].img}></img>
              </div>
              <div className="product-info">
                <div className="product-title">{productList[0].productName}
                </div>
                <div className="product-price">
                  {productList[0].productPrice} 원
                </div>
                <div className="star-rate">{productList[0].star}
                </div>
              </div>
            </div>
            <div className="product">
              <div className="product-img">
                <img src={productList[1].img}></img>
              </div>
              <div className="product-info">
                <div className="product-title">{productList[1].productName}
                </div>
                <div className="product-price">
                  {productList[1].productPrice} 원
                </div>
                <div className="star-rate">{productList[1].star}
                </div>
              </div>
            </div>
            <div className="product">
              <div className="product-img">
                <img src={productList[2].img}></img>
              </div>
              <div className="product-info">
                <div className="product-title">{productList[2].productName}
                </div>
                <div className="product-price">
                  {productList[2].productPrice} 원
                </div>
                <div className="star-rate">{productList[2].star}
                </div>
              </div>
            </div>
            <div className="product">
              <div className="product-img">
                <img src={productList[3].img}></img>
              </div>
              <div className="product-info">
                <div className="product-title">{productList[3].productName}
                </div>
                <div className="product-price">
                  {productList[3].productPrice} 원
                </div>
                <div className="star-rate">{productList[3].star}
                </div>
              </div>
            </div>
          </div>
            
          </div>
          <div className="footer">
          <div>여기는 footer</div>
          </div>
      </div>
    </div>
  );
}

export default App;
