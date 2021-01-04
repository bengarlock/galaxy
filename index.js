
const root = document.getElementById("home")

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
    while (index < 20) {
        const circle = document.createElement('div')
        circle.className = "circle"
        const size = genRandomNumberRange(100, 2000)
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

        let starIndex = 0
        while (starIndex < 1000) {
            const colors = [
                '#ff0303',
                '#bbff00',
                '#4565ff',
                '#1b91f5',
                '#6ea1e2',
                '#9c75ff',
                '#ffffff',
            ]
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





