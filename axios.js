axios.get('https://api.github.com/users/Galdino6328')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    }); 