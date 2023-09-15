import Head from 'next/head'
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { fadeInUp, stagger } from './animations/index.animations'
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://apicatalog.mycodewave.com/products")
    .then((res) => res.json())
    .then((data) => {
      setProducts(data);
    });
    fetch("https://apicatalog.mycodewave.com/categories")
    .then((res) => res.json())
    .then((data) => {
      setCategories(data);
    })
  }, []);

  return (
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }} className='container'>

      <Header categories={categories}/>

      <div className="product-galery">
         <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className='title'>
          <h1>Select a protein powder</h1>
        </motion.div>
        
        <div className="line">
          <motion.div variants={stagger} className='product-row'>
            {products.map(product => (
              <Link
                key={product.id}
                href='/products/[id]'
                as={`/products/${product.id}`}>
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='card'>
                  <span className='category'>Protein</span>
                  <motion.img
                    initial={{ x: 60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    key={product.image}
                    src={product.image}
                    width={250}
                  />
                  <div className='product-info'>
                    <h4>{product.name}</h4>
                    <span>{product.price}</span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
              
      <Footer />

  </motion.div>
  )
}

export default Home;