/*elems*/

const text = document.querySelector("#text")
const submit = document.querySelector("#submit")
const prevContainer = document.querySelector("#prev")
const newContainer = document.querySelector("#new")
const resultContainer = document.querySelector("#result")

/*values*/

const url = "https://image.pollinations.ai/prompt/"
let prompt

/*functions*/

async function initGPT() {
    let message = `Let´s play a role game. In this game you are going to be GPT-D, which stands
    for GPT-DESCRIPTOR, this means that you are going to help me to make prompts for generating
    images in an AI image generator model called Pollinations.
    Whenever I give you a prompt, you are going to expand it and make the best possible prompt out
    of it, remember to be visual, always specify that the image needs to be ultra realistic and
    in HD. Don´t add any extra comment or explanation, just give me the evolved prompt.`

    await FREEGPT.talk(message,1)
}

initGPT()

async function process() {
    prompt = text.value
    let isEmpty = (prompt.split(" ").join("") === "")

    if(isEmpty) {
        alert("Invalid prompt given")
    }

    let response = await FREEGPT.talk(prompt,1)

    newContainer.innerHTML = response

    response = encodeURIComponent(response)

    const img = document.createElement("img")

    img.src = url + response

    resultContainer.innerHTML = ""
    resultContainer.appendChild(img)

    prevContainer.innerHTML = prompt

}

/*events*/

submit.addEventListener("click", process)