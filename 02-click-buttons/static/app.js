document.getElementById('clickme').addEventListener('click', () => {
  let xhr = new XMLHttpRequest()
  let stories = document.getElementById('stories')
  let status = document.getElementById('status')
  xhr.open('POST', '/click', true)
  xhr.send()
})
