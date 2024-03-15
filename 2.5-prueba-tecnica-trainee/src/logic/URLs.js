export const getURLS = ({ gifs }) => {
    let arrayGIFS = []
  
    gifs.map( gif => {
      arrayGIFS.push(gif.images.original.url)
    })
  
    return arrayGIFS
  }