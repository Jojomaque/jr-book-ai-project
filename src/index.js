function displayExtract(response) {
  console.log("chapter generated");
  new Typewriter("#book", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateBookExtract(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "01t385ae4o4576bbb84530da05b3d38f";

  let prompt = `user instructions: display the first chapter from the chosen book by ernest hemmingway ${instructionsInput.value}`;
  let context =
    "You are an expert on ernest hemmingway, your mission is to display the first chapter of the selected book. Make sure to follow the user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("generating chapter");
  console.log(`prompt:${prompt}`);
  console.log(`context:${context}`);

  // Make a call to the API
  axios.get(apiUrl).then(displayExtract);
}

//Display the generated poem

let bookFormElement = document.querySelector("#book-extract-form");
bookFormElement.addEventListener("submit", generateBookExtract);
