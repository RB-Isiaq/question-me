import React from "react";

import { storage } from "./firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import MainHeader from "./components/UI/MainHeader";
import QuestionForm from "./components/Form/QuestionForm";

function App() {
  const submitQuestion = (type, url, file, text) => {
    if (type === "file") {
      const fileRef = ref(storage, `files/${file.name + v4()}`);

      uploadBytes(fileRef, file).then(() => {
        alert("File uploaded succesfully");
      });
    }

    if (type === "text" || type === "url") {
      fetch(
        "https://question-me-dbd4f-default-rtdb.firebaseio.com/question.json",
        {
          method: "POST",
          body: JSON.stringify({
            type,
            url,
            text,
          }),
        }
      ).then(() => {
        alert("Details uploaded succesfully");
      });
    }
  };

  return (
    <>
      <MainHeader />
      <QuestionForm onSubmitForm={submitQuestion} />
    </>
  );
}

export default App;
