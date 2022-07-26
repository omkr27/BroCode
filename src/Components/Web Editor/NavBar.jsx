import React from "react";
import Firebase from "../../firebase";
import NavBarPrefix from "../NavBarPrefix";

const db = Firebase.database();
const Fid = Firebase.auth();

export default function NavBar() {



  const downloadTxtFile = async () => {
    let id = Fid.currentUser.uid;
    let HTMLTxt, CSSTxt, JavascriptTxt;


    // get html css javascript from firebase
    await db
      .ref("/Users/" + id + "/html/test1/")
      .once("value", (snapshot) => {
        if (snapshot.val() !== null) {
          HTMLTxt = snapshot.val().value;
        }
      })
      .catch((e) => console.log(e));

    await db
      .ref("/Users/" + id + "/css/test1/")
      .once("value", (snapshot) => {
        if (snapshot.val() !== null) {
          CSSTxt = snapshot.val().value;
        }
      })
      .catch((e) => console.log(e));

    await db
      .ref("/Users/" + id + "/javascript/test1/")
      .once("value", (snapshot) => {
        if (snapshot.val() !== null) {
          JavascriptTxt = snapshot.val().value;
        }
      })
      .catch((e) => console.log(e));

    const element = document.createElement("a");

    // convert into html file
    const fileHTML = new Blob([HTMLTxt], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(fileHTML);
    element.download = "index.html";
    document.body.appendChild(element);
    element.click();

        // convert into css file
    const fileCSS = new Blob([CSSTxt], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(fileCSS);
    element.download = "style.css";
    document.body.appendChild(element);
    element.click();

        // convert into javascript file
    const fileJavaScript = new Blob([JavascriptTxt], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(fileJavaScript);
    element.download = "script.js";
    document.body.appendChild(element);
    element.click();
  };


  return (
    <div className="navbar p-3">

      <NavBarPrefix name="webED" />  

      <button
        onClick={downloadTxtFile}
        style={{
          borderRadius: 50,
          backgroundColor: "#6b5b95",
          padding: 10,
          marginRight: 20,
        }}
      >
        <text style={{ color: "#fff" }}>DOWNLOAD</text>
      </button>

      <button
        onClick={() => {
          


          // logout function
          Firebase.auth()
            .signOut()
            .then(function (data) {
              console.log("data", data);
              // Sign-out successful.
            })
            .catch(function (error) {
              console.log("error", error);
              // An error happened
            });
        }}
        style={{
          borderRadius: 50,
          backgroundColor: "#6b5b95",
          padding: 10,
          marginLeft: 20,
        }}
      >
        <text style={{ color: "#fff" }}>LOG OUT</text>
      </button>
    </div>
  );
}
