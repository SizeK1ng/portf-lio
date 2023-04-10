window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var scrollPercent = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;

  if (scrollPercent > 20) {
    document.getElementById("btn-topo").style.display = "block";
  } else {
    document.getElementById("btn-topo").style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
