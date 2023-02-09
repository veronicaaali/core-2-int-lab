document.querySelectorAll('.grid-container').forEach(grid => {
  grid.addEventListener('click', event => {
    console.log('navvin ', `./pages/${event.target.id}.html`)
    window.location.href = `./pages/${event.target.id}.html`;
  })
})