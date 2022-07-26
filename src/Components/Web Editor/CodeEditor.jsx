import React from "react";
import Editor from "@monaco-editor/react";
import Heading from "./Heading";
import Firebase from "../../firebase";

const db = Firebase.database();
const Fid = Firebase.auth();

export default function BroCode(prop) {
  const { value, lang, setValue, displayName } = prop;

  function handleEditorChange(value, event) {

    let id = Fid.currentUser.uid;  //get user id

    //update code in database
    // lang = html or css or javascript
    db.ref("/Users/" + id + "/" + lang + "/test1/")
      .set({
        value,
      })
      .then((doc) => {
        console.log(doc);
      });

    setValue(value);
  }
  return (
    <td>
      <div className="editor">

        
        <Heading name={displayName} />

        <Editor
          width="100%"
          height="50vh"
          defaultLanguage={lang}
          defaultValue={value}
          theme="vs-dark"
          onChange={handleEditorChange}  //on change code
        />
      </div>
    </td>
  );
}
