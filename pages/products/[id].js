import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from 'next/router'
import { stagger, fadeInUp } from '../animations/products_id.animations';
import { useEffect, useState } from 'react';


const Product = ( ) => {

const [count, setCount] = useState(0)
const [fretes, setFretes] = useState()
const [cupom, setCupom] = useState()
const [cumpomSearch, setCupomSearch] = useState()
const [cumpomValido, setCupomValido] = useState(false)

const handleIncrement = () => {
  setCount(count+1);
}
const handleDecrement = () => {
  count > 0 ? setCount(count-1) : 0;
}


const [product, setProduct] = useState({})
const router = useRouter();
useEffect(() => {
  fetchProductById()
}, [product, router.query.id])

useEffect(() => {
  fetch(`http://localhost:8001/frete`)
  .then((res) => res.json())
  .then((data) => {
    setFretes(data.fretes);
  })
  fetch(`http://localhost:8000/cupom`)
  .then((res) => res.json())
  .then((data) => {
    setCupom(data.Cupons);
  })
}, [])

const fetchProductById = async () => {
  fetch(`https://apicatalog.mycodewave.com/products/${router.query.id}`)
  .then((res) => res.json())
  .then((data) => {
    setProduct(data[0]);
  })
}

const handleCheckCupom  = (e) => {
  e.preventDefault();
  const result = cupom.filter((item) => { return item.nome === cumpomSearch})
  result.length > 0 ? setCupomValido(true) : setCupomValido(false)
}

  return (
  <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
    <div className='fullscreen'>
      <div className='product'>
        <motion.div
          className='img'
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}>
          <motion.img
            key={product?.image}
            src={`../${product?.image}`}
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 200, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
          />
        </motion.div>
        <div className='product-details'>
          <motion.div variants={stagger} className='inner'>
            <motion.div variants={fadeInUp}>
              <Link href='/' className='go-back'>
                  Back to products
              </Link>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <span className='category'>Protein</span>
            </motion.div>
            <motion.h1 variants={fadeInUp}>{product?.name}</motion.h1>
            <motion.p variants={fadeInUp}>{product?.details}</motion.p>
            <motion.div variants={fadeInUp} className='additonals'>
              <span>Soy Free</span>
              <span>Gluten Free</span>
            </motion.div>
            <motion.div variants={fadeInUp} className='qty-price'>
              <div className='qty'>
                <div className={count === 0 ? 'minus' : 'add add_mod'} onClick={handleDecrement}>-</div>
                <div className='amount'>{count}</div>
                <div className='add' onClick={handleIncrement}>+</div>
              </div>
              <span className='price'>{product?.price}</span>
            </motion.div>
            <motion.div variants={fadeInUp} className='btn-row'>
              <button className='add-to-cart'> Add to cart</button>
              <button className='subscribe'> Subscribe</button>
            </motion.div>
            <motion.div variants={fadeInUp} className=''>
              
              <div className="controls-flex">
                <div className="cupom-box">
                  <p><strong>Frete</strong></p>
                  <div className="fretes">
                  {fretes?.map((item) => (
                    <p key={item.id}>{item.nome} - R$ {item.valor}</p>
                  ))}
                  </div>
                </div>

                <div className="cupom-box">
                  <p><strong>Cupom</strong></p>
                  <input type="text" onChange={(e) => {setCupomSearch(e.target.value)}}/>
                  <button className='add-to-cart' onClick={(e) => handleCheckCupom(e)}> Checar</button>
                  {cumpomValido ? (<p>Cupom válido</p>) : (<p>Cupom não aplicado</p>)}
                </div>
              </div>
              
            </motion.div>

          </motion.div>
        </div>
      </div>
    </div>
  </motion.div>
)};

// Product.getInitialProps = async function(context) {
//   const { id } = context.query;
//   console.log(context.query)
//   const res = await fetch(
//     `https://my-json-server.typicode.com/wrongakram/demo/products/${id}`
//   );
//   const product = await res.json();
//   return { product };
// };

export default Product;
