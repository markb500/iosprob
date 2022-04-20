var sumq;
function jstest() {
  sumq = "$$x^3=0$$";
  document.getElementById("a").innerHTML = sumq;
  MathJax.Hub.Queue(["Typeset",MathJax.Hub, "a"]);
}