//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  document.querySelector('.content-title').classList.remove('scroll-animate')
  document.querySelector('.content-desc').classList.remove('scroll-animate')
  document.querySelector('.nasa-img').classList.remove('scroll-animate')
  const choice = document.querySelector('input').value
  console.log(choice)

  const url = `https://api.nasa.gov/planetary/apod?api_key=JcNvMoGmd0ObgkfFMPWsrgVfdfYQXsjPUyuuZdmB&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if ( data.media_type === 'image' ) {
          document.querySelector('.nasa-img').src = data.hdurl
        } else if( data.media_type === 'video' ) {
          document.querySelector('iframe').src = data.url
        }
        document.querySelector('.nasa-img').classList.add('scroll-animate')
        document.querySelector('.content-title').classList.add('py-2')
        document.querySelector('.content-title').classList.add('scroll-animate')
        document.querySelector('.content-title').innerText = data.title
        document.querySelector('.content-desc').classList.add('py-3')
        document.querySelector('.content-desc').classList.add('text-scroll')
        document.querySelector('.content-desc').classList.add('scroll-animate')
        document.querySelector('.content-desc').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

