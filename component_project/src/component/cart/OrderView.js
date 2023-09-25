import "./OrderView.css";

const OrderView = () => {
  return (
    <div className="order-main">
      <div className="main">
        <h2>주문결제</h2>
      </div>
      <div className="cart-main-bottom">
        <div className="cart-main-bottom-first">
          <div class="cart-header">
            <h4>구매자님</h4>
            <p>오늘도 변함없이 방문해 주셔서 감사드립니다.</p>
          </div>
          <div class="cart-list">
            <h3>상품정보</h3>
            <hr></hr>
            <br></br>
            <img src="/image/img.jpg"></img>
            <div className="cartInfo">
              <div>한반도 공룡 시리즈 2차 해남이크누스_동메달</div>
              <div>수량 : 1개</div>
            </div>
            <div className="text-box">
              49,500원 + 배송비 0원 - 할인 0원 ={" "}
              <span className="p">49,500원</span>
            </div>
            <div className="text">
              <ul>
                <li>
                  배송료는 업체의 기본배송정책과 상품마다 배송정책이 다를 수가
                  있습니다.
                </li>
                <li>
                  상품명에 적용된 배송정책은 상품에게만 적용되며, 기본정책에는
                  영향을 받지 않습니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="order-title">
          <h2>주문하시는 분</h2>
        </div>
        <div className="order-table">
          <table>
            <tbody>
              <tr>
                <th>고객명</th>
                <td>구매자</td>
              </tr>
              <tr>
                <th>거주자 주소</th>
                <td>서울시 영등포구</td>
              </tr>
              <tr>
                <th>휴대폰번호</th>
                <td>010-1234-1234</td>
              </tr>
              <tr>
                <th>이메일주소</th>
                <td>order@naver.com</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="payFrm">
          <h3>결제정보</h3>
          <div className="price">총 상품금액</div>
          <p>49,500원</p>
          <div className="price">총 할인금액</div>
          <p>0원</p>
          <div className="price">총 배송비</div>
          <p>0원</p>
          <hr></hr>
          <br></br>
          <div className="t-price">총 금액</div>
          <p>49,500원</p>
          <button type="submit" className="buyBtn">
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderView;
