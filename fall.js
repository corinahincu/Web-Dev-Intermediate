
const randomPercent = () => { return parseInt(Math.random() * 100)} 
const randomTurns = () => { return Math.random() * 5} 
const randomTime = () => { return parseInt(Math.random() * 50)} 
const randomLeaf = () => { return parseInt(Math.random() * 4 + 1)} 
const randomDuration = () => { return parseInt(Math.random) }


const addLeaf = (number) => {
  let parent = document.querySelector(`.layer-${number}`)
  let leftPercentS = randomPercent()
  let leftPercentE = randomPercent()
  let turnX = randomTurns()
  let turnY = randomTurns()
  let turnZ = randomTurns()
  let delay = randomPercent()
  let randomTopE = randomPercent()
  let duration = randomPercent()
  let scale = 0.3 / number
  parent.innerHTML += 
  ` 
    <div class=" leaf leaf-${randomLeaf()} fall" 
          style=" 
            --fall-start-s: ${scale};
            --fall-end-s: ${scale + 0.2};
            --fall-start-top: -10%;
            --fall-end-top: ${90 + randomTopE}%;
            --fall-start-left: ${leftPercentS}%;
            --fall-end-left: ${leftPercentE}%;
            --fall-end-rx: ${turnX}turn;
            --fall-delay: ${delay}s;
            --fall-duration: ${duration}s;
            --fall-start-ry: ${turnY}turn;
            --fall-end-ry: ${turnY}turn;
            --fall-start-rz: ${turnZ}turn;
            --fall-end-rz: ${turnZ}turn;
    "></div>
  `
  // HW1 : add random duration, rotationY,Z - done
}

const addLeaves = () => {
  for( let i=0; i<100; i++) {
    let number = parseInt(Math.random() * 2 + 1)
    addLeaf(number)
  }
}

addLeaves()

//HW2 : similar add multiple rays 4-5 : loops, functions, random 
// rays

const randomRay = () => { return parseInt(Math.random() * 4 + 1)}

const addRay = (number) => {
  let parent = document.querySelector('.container')

  parent.innerHTML += `
    <div class="ray ray-${randomRay()}" 
      style="
      "
    ></div>
  `
}

const addRays = () => {
  for (let i=0; i<5; i++) {
    addRay()
  }
}

addRays()


