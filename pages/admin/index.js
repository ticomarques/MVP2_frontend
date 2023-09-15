
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { fadeInUp, stagger } from '../animations/index.animations'
import Header from '../../components/Admin/Header';
import Footer from '../../components/Footer';

function Admin() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/categories")
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
          <h1>Admin area</h1>
          <div className="content-admin">
            <p className="mensagem-admin">bem vindo ao painel de administração da loja.</p>
          </div>
        </motion.div>
      </div>
        
      <Footer />

  </motion.div>
  )
}

export default Admin;