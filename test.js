function jstest() {
  var sumq = "$$x^2=0$$";
  document.getElementById("a").innerHTML = sumq;
  MathJax.Hub.Queue(["Typeset",MathJax.Hub, "a"]);
}