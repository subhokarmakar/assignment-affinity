class PollWidgetApp {
  constructor(config) {
    this.question = config.question;
    this.options = config.options;
    this.results = config.results || Array(this.options.length).fill(0);
    this.renderPoll();
  }

  renderPoll() {
    const pollWidgetAppContainer = document.getElementById("pollwidgetapp");
    pollWidgetAppContainer.innerHTML = `
            <h2>${this.question}</h2>
            <ul>
                ${this.options
                  .map(
                    (option, index) => `<li key=${index}>
                    <button onclick="newPollWidget.vote(${index})">${option}</button>
                </li>`
                  )
                  .join("")}
            </ul>
            <div id="pollresultsdiv" style="display:none;">
                ${this.renderResults()}
            </div>
        `;
  }

  renderResults() {
    return this.results
      .map(
        (votes, index) => `
            <p>- ${this.options[index]}: ${votes} votes</p>
        `
      )
      .join("");
  }

  vote(index) {
    this.results[index]++;
    localStorage.setItem("pollresultsdiv", JSON.stringify(this.results));
    this.showResults();
  }

  showResults() {
    const resultsDiv = document.getElementById("pollresultsdiv");
    resultsDiv.style.display = "block";
    // resultsDiv.style.display = "flex";
    // resultsDiv.style.flexDirection = "column";
    resultsDiv.innerHTML = this.renderResults();
  }
}

// Example question - 1
const newPollWidget = new PollWidgetApp({
  question: "How you like the Opinary test?",
  options: [
    "It was great and so challenging.",
    "Not bad, but you can improve.",
    "It was a nightmare, never again.",
  ],
});

// Example question - 2
// const newPollWidget = new PollWidgetApp({
//   question: "How you feel today?",
//   options: [
//     "Brilliant! I have so much energy.",
//     "Always can be worse.",
//     "Please, end my misery.",
//   ],
// });

module.exports = { PollWidgetApp };
