console.log(year)

// hozzunk létre 2 komponenst

const monthSectionComponent = function (inner, id) {
    return `
        <section id="${id}">${inner}</section>
    `
} // meghívásra kerülnek a year-ben szereplő adatok

const dayCardComponent = function (year, month, day) {
    return`
        <div class="card">
            <time datetime="${year}">${year}</time>
            <time datetime="${month}">${month}</time>
            <time datetime="${day}">${day}</time>
        </div>
    `
} // dayCardComponent-en belül meghatározásra kerül a year, month és date sorrend, a time datetime attribute a browser számára is egyértelművé teszi, hogy dátumról, illetve annak részeiről van szó

const loadEvent = function () {
    const rootElement = document.getElementById("root");
    // root div-be kerül megjelenítésre a függvény megoldása
    
    for (const month of year) {
        let sectionInner = ""
            // először az éven belüli hónap szekciók kerülnek meghatározásra a year.js-ben lévő month-ok alapján
        for (let index = 1; index <= month.days; index++) {
            sectionInner += dayCardComponent(2022, month.month, index)
        }
            // az index a napok lesznek, amiknek a maximuma a years.js-en belül a month.days résznl kerültek maximalizálásra, emiatt egyenként csak ezen limitig haladhat a függvény, egyben az évszám is meghatározásra kerül
        console.log(sectionInner)
            // ellenőrzés miatt írtuk bele

        rootElement.insertAdjacentHTML("beforeend", monthSectionComponent(sectionInner, month.id))
        
    } // hónap section-ök egymást követően kerüljenek megjelenítésre?
}

window.addEventListener("load", loadEvent) //meghívásra kerül a függvény

// anonim function esetén az csak egy jelzés, ha a függvénynek van neve akkor ne tegyünk space-t a zárójel elé

// ${} template literal behívja az összeset