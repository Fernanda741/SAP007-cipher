import cipher from "./cipher.js";

document.getElementById("btnEncode").addEventListener("click", encode);
document.getElementById("btnDecode").addEventListener("click", decode);
document.getElementById("btnClear").addEventListener("click", clear);

function encode() {
  let texto = document.getElementById("message").value.toUpperCase(); 
  let offset = Number(document.getElementById("offset").value); 
  document.getElementById("result").value = cipher.encode(offset, texto); 
}
function decode() {
  let texto = document.getElementById("message").value.toUpperCase();
  let offset = Number(document.getElementById("offset").value);

  document.getElementById("txtResult").value = cipher.decode(offset, texto);
}

function clear() {
  document.getElementById("message").value = "";
  document.getElementById("result").value = "";
  document.getElementById("offset").value = "1";
}
