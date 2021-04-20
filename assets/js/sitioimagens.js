const urlBase = "https://ptsibackend.herokuapp.com/sitio"

window.onload = () => {
    // References to HTML objects   
    const tblimagens = document.getElementById("tblimagens")

    const renderimagens = async() => {
        let strHtml = `
          <thead>
           <tr>
           <td>Nome</td>
           <td>Descrição</td>
           <td>Imagens</td>
           </tr>
          </thead>
        `
        const response = await fetch(`${urlBase}`)
        const sitios = await response.json()
        for (const sitio of sitios) {
            strHtml += `
                <tr>
                    <td>${sitio.nome}</td>
                     <td>${sitio.descrição}</td>
                     <td><button class="btn_vermais" id = ${sitio.id_sitio} name=btnimagens onclick="reply_click(this.id)">Ver Imagens</td>

                </tr>
                
            `
        }
        strHtml += "</tbody>"
        tblimagens.innerHTML = strHtml
    }

    renderimagens()
}


