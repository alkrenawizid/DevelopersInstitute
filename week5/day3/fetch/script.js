fetch('https://api.giphy.com/v1/gifs/search?q=sun&limit=1&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
    // Handle success
    .then(response => response.json())
    .then(json => {
      json.data
        .map(gif => gif.images.fixed_height.url)
        .forEach(url => {
          let img = document.createElement('img')
          img.src = url
          document.body.appendChild(img)
        })
    })
    .catch(err => console.log('Request Failed', err)); // Catch errors

