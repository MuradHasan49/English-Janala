let datafetch = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then(data => displayData(data.data))
}

let showLevelButton = (id) => {
    console.log(id)
    let levelAPI = `https://openapi.programming-hero.com/api/level/${id}`
    console.log(levelAPI)
    fetch(levelAPI)
        .then(res => res.json())
        .then(data => disPlayButtonResults(data.data))
}
let disPlayButtonResults = (itemdata) => {
    console.log(itemdata)
    let showWord = document.getElementById("word_container")
    showWord.innerHTML = "";
    itemdata.forEach(item => {
        console.log(item)
        let newDiv = document.createElement('div')
        newDiv.innerHTML = `
                   <div class=" bg-white py-15 px-5 rounded-lg text-center space-y-4 m-4">
                <h2 class="font-bold text-2xl ">${item.word}</h2>
                <p>Meaning /Pronounciation</p>
                <h2 class="bangla font-semibold text-[#18181B] text-2xl ">"${item.meaning}/ ${item.pronunciation}"</h2>
                <div class="flex justify-between items-center ">
                    <button class="btn"><i class="fa-solid fa-circle-info"></i></button>
                    <button class="btn"><i class="fa-solid fa-volume-high"></i></button>
                </div>
            </div>
        `
        showWord.append(newDiv)
    });
}

let displayData = (items) => {
    let showInHTML = document.getElementById("buttonDisplay")
    for (let item of items) {
        const createDiv = document.createElement("div")
        createDiv.innerHTML = `
       <button  onclick="showLevelButton(${item.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open-reader"></i> Lesson-${item.level_no}</button>
        `
        showInHTML.appendChild(createDiv)
    }
}

datafetch()
