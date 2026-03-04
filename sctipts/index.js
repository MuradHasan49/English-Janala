let datafetch = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
        .then(res => res.json())
        .then(data => displayData(data.data))
}

let displayData = (items) => {
    let showInHTML = document.getElementById("buttonDisplay")
    for (let item of items){
        console.log(item)
        const createDiv = document.createElement("div")
        createDiv.innerHTML=`
       <button class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open-reader"></i> Lesson-${item.level_no}</button>
        `
        showInHTML.appendChild(createDiv)
    }
}

datafetch()