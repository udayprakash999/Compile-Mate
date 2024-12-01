function run() {
  let htmlCode = document.getElementById("htmlCode").value;
  let cssCode = document.getElementById("cssCode").value;
  let jsCode = document.getElementById("jsCode").value;

  localStorage.setItem("htmlCode", htmlCode);
  localStorage.setItem("cssCode", cssCode);
  localStorage.setItem("jsCode", jsCode);

  outputFrame = document.getElementById("output").contentWindow.document;
  outputFrame.open();
  outputFrame.writeln(`
      <html>
      <head>
          <style>${cssCode}</style>
      </head>
      <body>
          ${htmlCode}
          <script>${jsCode}</script>
      </body>
      </html>
  `);
  outputFrame.close();
}

function openPanel(panelName, elmnt) {
  let tabcontent = document.getElementsByClassName("tabcontent");

  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  let tablinks = document.getElementsByClassName("tablink");

  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  let panel = document.getElementById(panelName);
  panel.style.display = "block";
  elmnt.style.backgroundColor = "#6cc878";

  document.getElementById("htmlCode").value =
    localStorage.getItem("htmlCode") || "";
  document.getElementById("cssCode").value =
    localStorage.getItem("cssCode") || "";
  document.getElementById("jsCode").value =
    localStorage.getItem("jsCode") || "";

  run();
}

document.getElementById("htmlCode").addEventListener("keyup", run);
document.getElementById("cssCode").addEventListener("keyup", run);
document.getElementById("jsCode").addEventListener("keyup", run);

document.getElementById("defaultOpen").click();
