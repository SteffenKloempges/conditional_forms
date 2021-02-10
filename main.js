let input = document.getElementById("input")
let result = document.getElementById("result")

function greaterThan() {
    event.preventDefault()

    if (input.value >= 18) {
        result.innerHTML = "come in"
    } else {
        result.innerHTML = "sorry bro, keine shisha für dich"
    }
}