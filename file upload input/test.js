// input- file upload
const files = document.querySelector("#files");

files.onchange = function () {
  const fileName = this.files[0]?.name;
  const label = document.querySelector("#filesName");
  label.innerText = fileName ?? "Select file";
};

