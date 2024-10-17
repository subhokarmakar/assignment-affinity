const { TextEncoder, TextDecoder } = require("util");
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const { PollWidgetApp } = require("../app.js");

describe("PollWidgetApp Class", () => {
  let pollWidget;

  beforeEach(() => {
    document.body.innerHTML = '<div id="pollwidgetapp"></div>';

    pollWidget = new PollWidgetApp({
      question: "How you like the Opinary test?",
      options: [
        "It was great and so challenging.",
        "Not bad, but you can improve.",
        "It was a nightmare, never again.",
      ],
    });
  });

  afterEach(() => {
    jest.resetModules();
    pollWidget = null;
  });

  test("should render the poll question correctly", () => {
    const pollContainer = document.getElementById("pollwidgetapp");
    expect(pollContainer).toBeTruthy();
    expect(pollContainer.innerHTML).toContain("How you like the Opinary test?");
  });
});
