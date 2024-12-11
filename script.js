let advice = ''
    document.getElementById("fetchButton").addEventListener("click", async () => {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
            .then(data => {
                advice = data.slip.advice;
                document.getElementById("response").innerHTML = advice;
            });
})

document.getElementById("Translate").addEventListener("click", async () => {
    const translatedElement = document.getElementById('translated');

    // Show "Translating..." while waiting for the translation
    translatedElement.textContent = "Translating...";

    fetch(`https://lingva.ml/api/v1/en/es/${advice}`)
        .then(res => res.json())
        .then(data => {
            translatedElement.textContent = data.translation
        })
        .catch(err => console.error(err));
})