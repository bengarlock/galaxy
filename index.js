
const root = document.getElementById("galaxy-wrapper")

const compPerformance = performance.now()

//configure star setup here
let numberOfStars = 500 - compPerformance
let numberofCircles = 15
let circleSize = 2000

const colors = [
    'red',
    '#bbff00',
    '#4565ff',
    '#1b91f5',
    '#6ea1e2',
    '#9c75ff',
    '#ffffff',
]

document.addEventListener("DOMContentLoaded", () => {

    const genRandomNumberRange = (min, max) => {
        return Math.floor(Math.random() * (min + max) + min)
    }

    const rotate = (index) => {
        const boxes = document.querySelectorAll("div.circle")
        boxes.forEach(box => {
            box.style.transform = "rotate" +
                `(${String(Number(box.dataset.rotationStart) +
                    Number(box.dataset.rotationSpeed) * index /2)}deg)`
        })
    }

    const genCircles = () => {
        let index = 0
        //adjust number of circles
        while (index < numberofCircles) {
            const circle = document.createElement('div')
            circle.className = "circle"
            //radius of circles
            const size = genRandomNumberRange(100, circleSize)
            const sizeProperty = String(size) + "px"

            circle.dataset.rotationStart = String(Math.floor(Math.random() * Math.floor(360)))
            let min = Math.ceil(1);
            let max = Math.floor(2);

            circle.dataset.rotationSpeed = String(Math.floor(Math.random() * (min + max) + min))
            circle.style.transform = "rotate" + `(${circle.dataset.rotationStart}deg)`
            circle.style.width = sizeProperty
            circle.style.height = sizeProperty
            circle.style.left = "calc" + `(50% - ${size/2}px)`
            circle.style.top = "calc" + `(50% - ${size/2}px)`
            circle.style.zIndex = `${Number(index) * -1}`

            let starIndex = 0
            while (starIndex < numberOfStars) {

                const star = document.createElement("div")
                star.className = "star5px"
                star.style.left = String(genRandomNumberRange(1, 100)) + "%"
                star.style.top = String(genRandomNumberRange(1, 100)) + "%"
                star.style.backgroundColor = `${String(colors[genRandomNumberRange(0, 7)])}`
                circle.append(star)
                starIndex++
            }
            root.append(circle)
            index++
        }
    }


    async function runRotate() {
        let index = 0
        while (index < Infinity) {
            await new Promise(r => setTimeout(r, 150));
            rotate(index)
            index++
        }
    }


    genCircles()
    runRotate()

})







