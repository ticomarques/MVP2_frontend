import React from 'react'

function FormUpdateCumpom({setNome, setValor, handleUpdate, closeModal2, editCupom}) {
  return (
    <form method="post" onSubmit={(e) => handleUpdate(e)} className="formCupom">
        <h1>Edite um cupom</h1>
        <p></p>
        <input 
          type="text" 
          name="nome"
          id="nome"
          placeholder={editCupom.nome}
          onChange={e => setNome(e.target.value)} 
          required 
        />
        <input 
            type="text" 
            name="valor" 
            id="valor" 
            placeholder={editCupom.valor}
            onChange={e => setValor(e.target.value)}
            required
        />

        <button type="submit">Salvar</button>
        <button type="submit" onClick={e => {closeModal2()}}>fechar</button>
    </form>
  )
}

export default FormUpdateCumpom