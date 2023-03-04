fetch("https://dummyjson.com/users")
    .then(res => res.json())
    .then(res => reload(res))

let cont = document.querySelector('.container')
let elem1 = document.querySelector('.elem')
let elem2 = document.querySelector('.elem2')
let elem3 = document.querySelector('.elem3')

function reload(data) {
    for (let item of data) {
        // a
        let elem = document.createElement('div')
        let span = document.createElement('span')
        let img = document.createElement('img')
        let ageText = document.createElement('p')
        let age = document.createElement('p')
        let h2 = document.createElement('h2')
        // b
        span.classList.add('span')
        age.classList.add('age')
        elem.classList.add('elem')

        img.src = item.image
        h2.innerHTML = item.firstName + ' ' + item.lastName
        age.innerHTML = item.age
        ageText.innerHTML = 'Age'

        // c
        cont.append(elem1, elem2, elem3)
        elem1.append(h2, age, img)
        elem2.append(h2, age, img)
        elem3.append(h2, age, img)

        if (item.age < 25) {
            elem1.append(elem)
        } else if (item.age > 25 && item.age <= 35) {
            elem2.append(elem)
        } else if (item.age > 35) {
            elem3.append(elem)
        }
    }
}

