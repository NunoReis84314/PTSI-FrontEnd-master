function fetchSondagens(id_sitio){
  var sondagens = {}  
  return fetch('https://ptsibackend.herokuapp.com/sitiosondagens/'+id_sitio, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(result => {
            response = result.json();
            sondagens = response;
            return sondagens;
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