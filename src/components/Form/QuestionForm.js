import React, { useRef, Fragment, useState, } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./QuestionForm.module.css";

const QuestionForm = (props) => {
  const [textType, setTextType] = useState(true);
  const [urlType, setUrlType] = useState(false);
  const [fileType, setFileType] = useState(false);

  const questionRef = useRef();
  const urlInputRef = useRef();
  const fileInputRef = useRef();
  const textInputRef = useRef();

  const selectHandler = (e) => {
    const questionType = e.target.value;

    if (questionType === "text") {
      setTextType(true);
      setFileType(false);
      setUrlType(false);
    }
    if (questionType === "url") {
      setUrlType(true);
      setTextType(false);
      setFileType(false);
    }
    if (questionType === "file") {
      setFileType(true);
      setUrlType(false);
      setTextType(false);
    }
  };

  const submitQuestionHandler = (event) => {
    event.preventDefault();
    let url;
    let text;
    let file;
    const questionType = questionRef.current.value;

    if (urlType) {
      url = urlInputRef.current.value;
      setUrlType(false);
    }
    if (textType) {
      text = textInputRef.current.value;
      setTextType(false);
    }
    if (fileType) {
      file = fileInputRef.current.files[0];
      setFileType(false);
    }

    props.onSubmitForm(questionType, url, file, text);
  };

  return (
    <Fragment>
      <Card className={classes.input}>
        <form onSubmit={submitQuestionHandler}>
          <label htmlFor="question">Question type</label>
          <select ref={questionRef} onChange={selectHandler}>
            <option value="text">Text</option>
            <option value="url">Url</option>
            <option value="file">File</option>
          </select>

          {urlType && <label htmlFor="url">Url link</label>}
          {urlType && <input id="url" type="url" ref={urlInputRef} required />}

          {fileType && <label htmlFor="file">File format</label>}
          {fileType && (
            <input id="file" type="file" ref={fileInputRef} required />
          )}

          {textType && <label htmlFor="text">Text</label>}
          {textType && (
            <textarea
              id="text"
              type="text"
              rows={10}
              ref={textInputRef}
              required
            ></textarea>
          )}

          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuestionForm;
