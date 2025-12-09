import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios
  .post("https://formsubmit.co/ajax/4be8820f1cc70012aeb9bde5c611356f", {
    name: "FormSubmit",
    message: "I'm from Devro LABS",
  })
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
