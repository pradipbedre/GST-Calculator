function getVal() {
  var a = Number(document.getElementById("b1").value);
  var p1 = a + 18 * (a / 100);
  document.getElementById("b2").value = p1;
}
