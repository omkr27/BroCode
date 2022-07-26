let initialHTML = `
<!doctype html>
<html lang="en">

<head>
    <title> Test1</title>
</head>

<body>
    <button>Welcome to BRO/CODE Online Editor</button>
</body>

</html>`;
let initialCSS = `
body {
  background:#6b5b95;
  color : white;
}

button {
  position: absolute;
  
  left : 42.5vw;
  top : 42%;
  
  height: 5em;
  width: 15em;
  
  background: #444;
  background: linear-gradient(top, #555, #333);
  border: none;
  border-top: 3px solid white;
  border-radius: 0 0 0.2em 0.2em;
  color: #fff;
  font-family: Helvetica, Arial, Sans-serif;
  font-size: 1em;
  transform-origin: 50% 5em;
}`;

let initialJS = `// Javascript here!`;

export { initialHTML, initialCSS, initialJS };
