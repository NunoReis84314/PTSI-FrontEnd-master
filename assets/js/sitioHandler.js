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

function fetchContextos(id_sitio){
  return fetch('https://ptsibackend.herokuapp.com/sitio/'+id_sitio, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(result => {
            response = result.json();
            return response;
      }).catch((error) => {return error})
}