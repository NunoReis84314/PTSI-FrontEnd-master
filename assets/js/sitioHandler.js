function fetchSondagens(id_sitio){
    return fetch('https://ptsibackend.herokuapp.com/sitio/'+id_sitio, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(result => {
            response = result.json();
            return response;
      }).catch((error) => {return error})
};

function fetchUEs(id_sitio){
    return fetch('https://ptsibackend.herokuapp.com/sitioUEIDsitio/'+id_sitio, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(result => {
            response = result.json();
            if (response.length == 0) {
                let vazio = "";
                return vazio;
            } else {
                return response;
            }
      }).catch((error) => {return error})
}

function fetchContextoGeog(id_sitio){
  var geog ={};
  return fetch('https://ptsibackend.herokuapp.com/sitioContextoIDsitio/'+id_sitio, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(result => {
          response = result.json();
          geog=response;
          //geog.relevo_geral=response.relevo_geral;
          //geog.unidade_relevo=response.unidade_relevo;
          //geog.local_implantacao=response.local_implantacao;
          return geog;
      }).catch((error) => {return error})
}

function fetchContextoGeol(id_sitio){
  var geol ={};
  return fetch('https://ptsibackend.herokuapp.com/sitiocontextogeolIDsitio/'+id_sitio, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(result => {
      response = result.json();
      geol=response;
      return geol;
    }).catch((error) => {return error})
}