const container = document.querySelector('.container')
const input = document.getElementById('golan');
const buton = document.querySelector('button');
document.body.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        console.log(input.value);
        let his = input.value
        input.value = ""
        const data = document.createElement("div");
        data.innerText = `${his}`;
        container.appendChild(data);
    }


})

buton.addEventListener("click", () => {
    console.log(input.value);
    let his = input.value
    input.value = ""
    const data = document.createElement("div");
    data.innerText = `${his}`;
    container.appendChild(data);


})
const pa = document.createElement("h1");
pa.innerText = `ferid aqamaliyev`;
container.appendChild(pa);