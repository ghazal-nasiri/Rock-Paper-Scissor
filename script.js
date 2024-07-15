const yourChoice = document.querySelector(".yourChoice");
const items = ["rock", "paper", "scissors"];
const hearts = document.querySelectorAll(".hearts");
const displayYourChoice = document.querySelector(".displayYourChoice img");
const displayRobotChoice = document.querySelector(".displayRobotChoice img");
const result = document.querySelector(".result");
yourChoice.addEventListener("click", (e) => {
    setTimeout(() => {
        displayYourChoice.classList.remove("yourAnimation");
        displayRobotChoice.classList.remove("robotAnimation");
        const yourSelectedItem = e.target;
        if (yourSelectedItem.nodeName === "IMG") {
            const randomNumber = Math.floor(Math.random() * 3);
            const robotChoice = items[randomNumber];
            displayYourChoice.alt = yourSelectedItem.alt;
            displayYourChoice.src = `assets/images/${yourSelectedItem.alt}.png`;
            displayRobotChoice.alt = robotChoice;
            displayRobotChoice.src = `assets/images/${robotChoice}.png`
        }
        if (!(displayRobotChoice.alt == displayYourChoice.alt)) {
            switch (displayYourChoice.alt) {
                case "rock":
                    displayRobotChoice.alt == "scissors" ? reductionOfPoints(hearts[1]) : reductionOfPoints(hearts[0])
                    break;
                case "paper":
                    displayRobotChoice.alt == "rock" ? reductionOfPoints(hearts[1]) : reductionOfPoints(hearts[0])
                    break;
                case "scissors":
                    displayRobotChoice.alt == "paper" ? reductionOfPoints(hearts[1]) : reductionOfPoints(hearts[0])
                    break;
            }
        }
        if (hearts[0].children.length == 0) {
            resultGame("win", "lose", "You Lose!")
        }
        else if (hearts[1].children.length == 0) {
            resultGame("lose", "win", "You Win!")
        }
        result.addEventListener("click", () => {
            restart();

        })
    }, 1900);
    resetToRock();
    displayYourChoice.classList.add("yourAnimation");
    displayRobotChoice.classList.add("robotAnimation");
});
function reductionOfPoints(element) {
    element.removeChild(element.lastElementChild);
}
function restart() {
    result.style.display = "none";
    hearts[0].innerHTML = "";
    hearts[1].innerHTML = "";
    for (let i = 1; i <= 3; i++)
        hearts.forEach(e => {
            e.innerHTML += `<img src="assets/images/heart.png" alt="heart" class="iconHeart">`
        });
    resetToRock();
}

function resetToRock() {
    displayYourChoice.alt = 'rock';
    displayYourChoice.src = `assets/images/rock.png`;
    displayRobotChoice.alt = "rock";
    displayRobotChoice.src = `assets/images/rock.png`
}

function resultGame(remove, add, text) {
    result.style.display = "block";
    result.classList.remove(remove);
    result.classList.add(add);
    result.querySelector("div").textContent = text;
}

