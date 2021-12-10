//define dom elements
const tagcontainer = document.querySelector('#tags')
const excuseContainer = document.querySelector('.excuses')
const getExcuse = () => {
  fetch('https://api.lazydesignerexcuses.com/tags')
    .then((res) => res.json())
    .then((data) => getTags(data.tags))
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

//hide the tagcontainer when no excuse or tags are generated
getTags = (tags) => {
  let generatedTags = ''
  tagcontainer.classList.add('visible')

  //get the value of each single tag available as options in select element
  tags.map((tag) => {
    generatedTags += `
    <option value="${tag}">
      ${capitalizeFirstLetter(tag)}
    </option>`
  })

  tagcontainer.innerHTML = generatedTags
}

//get excuse from specific tag choosen from the seleect options
const getOption = () => {
  let excuses = ''
  //get the tag value
  const value = document.getElementById('tags').value
  fetch(`https://api.lazydesignerexcuses.com/random/${value}`)
    .then((res) => res.json())
    .then((data) => {
      excuses += `
      <div class="excuse">
        <p>${data.Excuse}<p>
      </div>
        `
      //append the excuses to the excuse container in html
      excuseContainer.innerHTML = excuses
    })
}

//get random excuse on button click
const getRandom = () => {
  let excuses = ''
  const value = document.getElementById('tags').value
  fetch('https://api.lazydesignerexcuses.com/random')
    .then((res) => res.json())
    .then((data) => {
      excuses += `
          <div class="excuse">
            <p>${data.Excuse}<p>
          </div>
          `
      //append the excuses to the excuse container in html
      excuseContainer.innerHTML = excuses
    })
    .then(console.error())
}
