const innerHeight = window.innerHeight

function show(variable) {
  return console.log(variable).toString()
}

const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});