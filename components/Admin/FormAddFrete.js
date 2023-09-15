import React from 'react'

function FormAddFrete(props) {
  return (
    <form method="post" onSubmit={props.handleAdd} className="formCupom">
        <h1>Cadastre um novo frete</h1>
        <input type="text" name="nome" id="nome" placeholder="nome" onChange={e => props.setNome(e.target.value)} required />
        <input 
            type="text"
            step="1" 
            name="valor" 
            id="valor" 
            placeholder="valor do item"  
            onChange={e => props.setValor(e.target.value)}
            required
        />

        <button type="submit">Salvar</button>
        <button type="submit" onClick={e => {props.closeModal()}}>fechar</button>
    </form>
  )
}

export default FormAddFrete