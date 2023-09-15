'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { fadeInUp, stagger } from '../animations/index.animations'
import Modal from 'react-modal';
import axios from "axios";
import Header from '../../components/Admin/Header';
import Footer from '../../components/Footer';
import FormAddFrete from "../../components/Admin/FormAddFrete";
import FormUpdateFrete from "../../components/Admin/FormUpdateFrete";

function Frete() {
  const [fretes, setFretes] = useState([]);
  const [categories, setCategories] = useState([]);

  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [editFrete, setEditFrete] = useState({});

  useEffect(() => {
    fetchFrete();
    fetch("http://localhost:3000/api/categories")
    .then((res) => res.json())
    .then((data) => {
      setCategories(data);
    })
  }, []);

  const fetchFrete = () => {
    fetch("http://localhost:8001/frete")
    .then((res) => res.json())
    .then((data) => {
      setFretes(data.fretes);
    });
  }

  //Handle Add - Efetua adição de um frete no banco
  const handleAdd = async (e) => {
    e.preventDefault();
    const obj = {
      nome,
      valor
    }

    const resultAdd = await axios.post('http://localhost:8001/frete', obj)

    if(resultAdd.status !== 200) {
      console.log('Erro inesperado!')
    }
    closeModal();
    fetchFrete();
  }

  //Handle Delete - Efetua deleção de um frete pelo nome
  const handleDelete = async (e, item) => {
    e.preventDefault();
    const fetchResult = await axios.delete(`http://localhost:8001/frete?nome=${item}`)

    if(fetchResult.status !== 200) {
      console.log('Erro inesperado!')
    }
    fetchFrete()
  }

  const handleUpdate = async (e) => {
    e.preventDefault();

    const obj = {
      id: editFrete.id,
      nome,
      valor
    }
    
    const resultAdd = await axios.put('http://localhost:8001/frete', obj)

    if(resultAdd.status !== 200) {
      console.log('Erro inesperado!')
    }
    closeModal2();
    fetchFrete();
  }


  /** MODAL */
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);
  //Modal.setAppElement('#root');

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
            <h1>Frete </h1>
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
                    <th>Frete</th>
                    <th>Valor</th>
                    <th>Ação</th>
                  </tr>
                </thead>

                <tbody>
                {
                  fretes.map(frete => (
                    <tr key={frete.id}>
                      <td>{frete.id}</td>
                      <td>{frete.nome}</td>
                      <td>R$ {frete.valor}</td>
                      <td>
                          <a href="#" onClick={e => {openModal2(); setEditFrete(frete)}}>Editar </a>
                           |  
                          <a href="#" onClick={e => handleDelete(e, frete.nome)}> Apagar</a>
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
        contentLabel="Cadastrar frete"
      >
        <div className="container-modal">
          <div className="form-add-cupom">
                <FormAddFrete 
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
        contentLabel="Editar frete"
      >
        <div className="container-modal">
          <div className="form-add-cupom">
                <FormUpdateFrete 
                  setNome={setNome}
                  setValor={setValor}
                  handleUpdate={handleUpdate}
                  closeModal2={closeModal2}
                  editFrete={editFrete}
                />
          </div>
        </div>
      </Modal>
  </motion.div>
  )
}

export default Frete;