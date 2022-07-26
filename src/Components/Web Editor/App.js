import React from "react";
import CodeEditor from "./CodeEditor";
import "bootstrap/dist/css/bootstrap.min.css";
import { initialHTML, initialCSS, initialJS } from "./InitialValues";
import { useState, useEffect } from "react";
import ColumnResizer from "react-column-resizer";
import "./App.css";
import NavBar from "./NavBar";
import Firebase from "../../firebase";

const db = Firebase.database();
const Fid = Firebase.auth();

export function App() {
  const [htmlValue, setHtml] = useState(initialHTML);
  const [cssValue, setCSS] = useState(initialCSS);
  const [jsValue, setJs] = useState(initialJS);

  //for code output
  const [Code, setCode] = useState(`
<html>
<body>${htmlValue}</body>
<style>${cssValue}</style>
<script>${jsValue}</script>
</html>`);

  useEffect(() => {
    //get login user id
    let id = Fid.currentUser.uid;

    //chck if code is present in database
    //html
    db.ref("/Users/" + id + "/html/test1/")
      .once("value", (snapshot) => {
        if (snapshot.val() !== null) {
          setHtml(snapshot.val().value);
        }
      })
      .catch((e) => console.log(e));

    //css
    db.ref("/Users/" + id + "/css/test1/")
      .once("value", (snapshot) => {
        if (snapshot.val() !== null) {
          setCSS(snapshot.val().value);
        }
      })
      .catch((e) => console.log(e));

    //javascript
    db.ref("/Users/" + id + "/javascript/test1/")
      .once("value", (snapshot) => {
        if (snapshot.val() !== null) {
          setJs(snapshot.val().value);
        }
      })
      .catch((e) => console.log(e));

    const timeout = setTimeout(() => {
      setCode(`
      <html>
      <body>${htmlValue}</body>
      <style>${cssValue}</style>
      <script>${jsValue}</script>
      </html>`);
    }, 250); //250 millisec
    return () => clearTimeout(timeout);
  }, [htmlValue, cssValue, jsValue]);

  return (
    <>
      <NavBar className="navbar p-3" />

      <center>
        <div className="pane top-pane">
          <table>
            <tbody>
              <tr>

                <CodeEditor
                  displayName="HTML"
                  lang="html"
                  value={htmlValue}
                  setValue={setHtml}
                />

                <ColumnResizer className="columnResizer resizer" minWidth={0} />

                <CodeEditor
                  displayName="CSS"
                  lang="css"
                  value={cssValue}
                  setValue={setCSS}
                />

                <ColumnResizer className="columnResizer resizer" minWidth={0} />

                <CodeEditor
                  displayName="Javascript"
                  lang="javascript"
                  value={jsValue}
                  setValue={setJs}
                />
              </tr>
            </tbody>
          </table>
        </div>

        {/* { console.log(Code) } */}
        <div className="outputScreen">
          <iframe
            srcDoc={Code}  //input code
            title="output"
            width="100%"
            height="100%"
            frameBorder="0"
            sandbox="allow-scripts"
            loading="lazy"
          ></iframe>
        </div>
      </center>
    </>
  );
}
