'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { fadeInUp, stagger } from '../animations/index.animations'
import Modal from 'react-modal';
import axios from "axios";
import Header from '../../components/Admin/Header';
import Footer from '../../components/Footer';
import FormAddCumpom from "../../components/Admin/FormAddCumpom";
import FormUpdateCumpom from "../../components/Admin/FormUpdateCumpom";

function Cupom() {
  const [cupons, setCupons] = useState([]);
  const [categories, setCategories] = useState([]);
  const [idCupom, setIdCupom] = useState('')

  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [editCupom, setEditCupom] = useState({});

  useEffect(() => {
    fetchCupom();
    fetch("http://localhost:3000/api/categories")
    .then((res) => res.json())
    .then((data) => {
      setCategories(data);
    })
  }, []);

  const fetchCupom = () => {
    fetch("http://localhost:8000/cupom")
    .then((res) => res.json())
    .then((data) => {
      setCupons(data.Cupons);
    });
  }

  //Handle Add - Efetua adição de uma cupom no banco
  const handleAdd = async (e) => {
    e.preventDefault();
    const obj = {
      nome,
      valor
    }

    const resultAdd = await axios.post('http://localhost:8000/cupom', obj)

    if(resultAdd.status !== 200) {
      console.log('Erro inesperado!')
    }
    closeModal();
    fetchCupom();
  }

  //Handle Delete - Efetua deleção de um cupom pelo nome
  const handleDelete = async (e, item) => {
    e.preventDefault();
    const fetchResult = await axios.delete(`http://localhost:8000/cupom?nome=${item}`)

    if(fetchResult.status !== 200) {
      console.log('Erro inesperado!')
    }
    fetchCupom()
  }

  const handleUpdate = async (e) => {
    e.preventDefault();

    const obj = {
      id: editCupom.id,
      nome,
      valor
    }
    
    const resultAdd = await axios.put('http://localhost:8000/cupom', obj)

    if(resultAdd.status !== 200) {
      console.log('Erro inesperado!')
    }
    closeModal2();
    fetchCupom();
  }


  /** MODAL */
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const openModal2 = () => {
    setIsOpen2(true);
  }

  const closeModal2 = () => {
    setIsOpen2(false);
  }



  return (
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }} className='container'>

      <Header categories={categories}/>

      <div className="content-admin">
        <div className="product-galery">
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className='title'>
            <h1>Cupom </h1>
          </motion.div>

          <div className="cupom-toolbar">
              <button onClick={openModal} className="button-adicionar">Adicionar</button>
          </div>
          
          <div className="line">
            <motion.div variants={stagger} className='product-row'>

              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Cupom</th>
                    <th>Valor final</th>
                    <th>Ação</th>
                  </tr>
                </thead>

                <tbody>
                {
                  cupons.map(cupom => (
                    <tr key={cupom.id}>
                      <td>{cupom.id}</td>
                      <td>{cupom.nome}</td>
                      <td>{cupom.valor*100}%</td>
                      <td>
                          <a href="#" onClick={e => {openModal2(); setEditCupom(cupom)}}>Editar </a>
                           |  
                          <a href="#" onClick={e => handleDelete(e, cupom.nome)}> Apagar</a>
                      </td>
                  </tr>
                  ))
                }
                </tbody>
              </table>

            </motion.div>
          </div>
        </div>
      </div>
        
      <Footer />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Cadastrar cupom"
      >
        <div className="container-modal">
          <div className="form-add-cupom">
                <FormAddCumpom 
                  setNome={setNome}
                  setValor={setValor}
                  handleAdd={handleAdd}
                  closeModal={closeModal}
                />
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={modalIsOpen2}
        onRequestClose={closeModal2}
        style={customStyles}
        contentLabel="Editar cupom"
      >
        <div className="container-modal">
          <div className="form-add-cupom">
                <FormUpdateCumpom 
                  setNome={setNome}
                  setValor={setValor}
                  handleUpdate={handleUpdate}
                  closeModal2={closeModal2}
                  editCupom={editCupom}
                />
          </div>
        </div>
      </Modal>
  </motion.div>
  )
}

export default Cupom;