function chi(n) {
 if (n < 10) {
  return '0' + n
 }
 else {
  return n
 }
}
ju = setInterval(function () {
 if (document.querySelector("body").getAttribute("data-js-state") === "loaded") {
  if (jko < 1) {
   var jkop = document.createElement("div");
   jkop.innerHTML = 'test'
   if (document.getElementsByClassName("post-body entry-content float-container").length > 0) {
    document.getElementsByClassName("post-body entry-content float-container")[0].prepend(jkop);
    document.getElementsByClassName("comments")[0].style.display = "none";
    if (document.querySelectorAll(".post-body").length > 0) {
     var text = document.querySelector(".post-body").innerText
    }
    jko += 1;
    if (document.querySelectorAll(".FeaturedPost").length > 0) {
     document.querySelectorAll(".FeaturedPost")[0].style.marginBottom = "5px";
    }
   }
   if (gu >= document.querySelectorAll(".post-timestamp time").length) {
    clearInterval(ju);
   }

   for (var i = 0; i < document.querySelectorAll(".post-timestamp time").length; i++) {
    var jttime = new Date(document.querySelectorAll(".post-timestamp time")[i].getAttribute("datetime"));
    var jttxt = jttime.getFullYear() + "/" + chi(jttime.getMonth() + 1) + "/" + chi(jttime.getDate()) + " " + chi(jttime.getHours()) + ":" + chi(jttime.getMinutes());
    if (jttxt === document.querySelectorAll(".post-timestamp time")[i].innerText) {
     gu += 1;
    }
   }

   for (var i = 0; i < document.querySelectorAll(".post-timestamp time").length; i++) {
    var jttime = new Date(document.querySelectorAll(".post-timestamp time")[i].getAttribute("datetime"));
    var jttxt = jttime.getFullYear() + "/" + chi(jttime.getMonth() + 1) + "/" + chi(jttime.getDate()) + " " + chi(jttime.getHours()) + ":" + chi(jttime.getMinutes());
    document.querySelectorAll(".post-timestamp time")[i].innerText = jttxt;
    document.querySelectorAll(".post-timestamp")[i].style.margin = 0;
    document.querySelectorAll(".post-timestamp")[i].style.padding = 0;
   }
  }
 }
}, 1);