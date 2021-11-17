let lista = ''

let clientes = ['André', 'Thiago', 'Pedro', 'José', 'João', 'Paulo']

for (let contador = 0; contador <= clientes.length -1; contador++) {
   let cliente= clientes[contador]

   lista += `<li>${cliente}</li>`
    
}

document.querySelector('#listaClientes').innerHTML = lista