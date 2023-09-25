import "./ProductList.css";

const ProductList = (props) => {
  const productList = props.productList;
  const changeLike = props.changeLike;
  return (
    <div className="product-list">
      {productList.map((product, index) => {
        return (
          <Product
            key={"product" + index}
            product={product}
            changeLike={changeLike}
            index={index}
          />
        );
      })}
    </div>
  );
};

const Product = (props) => {
  const product = props.product;
  const changeLike = props.changeLike;
  const index = props.index;
  return (
    <div className="product">
      <div className="product-img">
        <Likes likes={product.likes} changeLike={changeLike} index={index} />
        <img src={product.img}></img>
      </div>
      <div className="product-info">
        <div className="product-title">{product.productName}</div>
        <div className="product-price">{product.productPrice} 원</div>
        <div className="star-rate">
          <StarRate star={product.star} />
        </div>
      </div>
    </div>
  );
};
const StarRate = (props) => {
  const star = props.star;
  const starRate = () => {
    const arr = new Array();
    for (let i = 0; i < star; i++) {
      arr.push(<img key={"star" + i} src="/img/star-on.png"></img>);
    }
    return arr;
  };
  return <>{starRate()}</>;
};
const Likes = (props) => {
  const likes = props.likes;
  const changeLike = props.changeLike;
  const index = props.index;
  return (
    <span
      className="material-icons"
      onClick={() => {
        changeLike(index);
      }}
    >
      {likes === 0 ? "favorite_border" : "favorite"}
    </span>
  );
};
export default ProductList;