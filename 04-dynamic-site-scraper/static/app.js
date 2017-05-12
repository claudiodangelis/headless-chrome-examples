let xhr = new XMLHttpRequest()
let stories = document.getElementById('stories')
let status = document.getElementById('status')
xhr.open('GET', '/stories', true)
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    status.innerHTML = ''
    JSON.parse(xhr.responseText).forEach((story) => {
      let paragraph = document.createElement('li')
      let anchor = document.createElement('a')
      anchor.href = story.link
      anchor.textContent = story.title
      anchor.className = 'story'
      paragraph.appendChild(anchor)
      stories.appendChild(paragraph)
    })
  }
}
xhr.setRequestHeader('Content-Type', 'application/json')
setTimeout(() => {
  xhr.send()
}, 500)
