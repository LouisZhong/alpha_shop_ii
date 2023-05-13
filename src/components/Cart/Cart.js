
// import minus from 'assets/icons/minus.svg'
import minus from '../../assets/icons/minus.svg'
import plus from '../../assets/icons/plus.svg'
import cartScss from './Cart.module.scss'
import product1 from '../../assets/images/product-1.jpg'
import product2 from '../../assets/images/product-2.jpg'


export default function Product () {
  return (
    <section className={cartScss.cartContainer}>
      <h3 className={cartScss.productTitle}>購物籃</h3>
      <section className={cartScss.productList} data-total-price="0">
        <div className={cartScss.productContainer} data-count="0" data-price="3999">
          <img src={product1} className={cartScss.productImg} />
          <div className={cartScss.productInfo}>
            <div className={cartScss.productName}>破壞補丁修身牛仔褲</div>
            <div className={cartScss.productControlContainer}>
              <div className={cartScss.productControl}>
                <img src={minus} className={cartScss.minus} alt="minus"/>
                <span className={cartScss.productCount}>1</span>
                <img src={plus} className={cartScss.plus} alt="plus" />
              </div>
            </div>
            <div className={cartScss.productPrice}>3999</div>
          </div>
        </div>
        <div className={cartScss.productContainer} data-count="0" data-price="1299">
          <img src={product2} className={cartScss.productImg} />
          <div className={cartScss.productInfo}>
            <div className={cartScss.productName}>刷色直筒牛仔褲</div>
            <div className={cartScss.productControlContainer}>
              <div className={cartScss.productControl}>
                <img src={minus} className={cartScss.minus} alt="minus" />
                <span className={cartScss.productCount}>1</span>
                <img src={plus} className={cartScss.plus} alt="plus" />
              </div>
            </div>
            <div className={cartScss.productPrice}>1299</div>
          </div>
        </div>
      </section>
      <section className={`${cartScss.cartInfo} ${cartScss.shipping}`}>
        <div class="text">運費</div>
        <div class="price">free</div>
      </section>
      <section className={`${cartScss.cartInfo} ${cartScss.total}`}>
        <div class="text">小計</div>
        <div class="price">5200</div>
      </section>
    </section>
  )
}
