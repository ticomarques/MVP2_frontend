import React from 'react'

function FormUpdateFrete({setNome, setValor, handleUpdate, closeModal2, editFrete}) {
  return (
    <form method="post" onSubmit={(e) => handleUpdate(e)} className="formCupom">
        <h1>Edite um Frete</h1>
        <p></p>
        <input 
          type="text" 
          name="nome"
          id="nome"
          placeholder={editFrete.nome}
          onChange={e => setNome(e.target.value)} 
          required 
        />
        <input 
            type="text" 
            name="valor" 
            id="valor" 
            placeholder={editFrete.valor}
            onChange={e => setValor(e.target.value)}
            required
        />

        <button type="submit">Salvar</button>
        <button type="submit" onClick={e => {closeModal2()}}>fechar</button>
    </form>
  )
}

export default FormUpdateFrete