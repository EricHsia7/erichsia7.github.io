let icon_pull_request = '<svg stroke-miterlimit="10" style="fill-rule:nonzero;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;" version="1.1" viewBox="0 0 64 64" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M35.386 0.0417611C35.1765-0.0450168 34.9361 0.00264456 34.7464 0.192251C33.5584 1.38033 26.416 8.48504 25.228 9.67312C24.9929 9.9082 24.9929 10.3034 25.228 10.5384L34.7464 20.0569C35.1257 20.4361 35.7622 20.1417 35.7622 19.6055L35.7622 13.2849L38.3206 13.2849C43.5572 13.2849 47.8014 17.5292 47.8014 22.7657L47.8014 45.565C44.125 46.8922 41.4809 50.3489 41.4809 54.4815C41.4809 59.743 45.7379 64 50.9994 64C56.2609 64 60.5178 59.743 60.5179 54.4815C60.5179 50.3489 57.8737 46.8922 54.1973 45.565L54.1973 22.7657C54.1973 14.0052 47.0812 6.92668 38.3206 6.92668L35.7622 6.92668L35.7622 0.606098C35.7622 0.337954 35.5955 0.128539 35.386 0.0417611ZM50.9994 51.3212C52.7369 51.3212 54.1596 52.744 54.1596 54.4815C54.1596 56.219 52.7369 57.6042 50.9994 57.6042C49.2619 57.6042 47.8767 56.219 47.8767 54.4815C47.8767 52.744 49.2619 51.3212 50.9994 51.3212ZM13.0006 0.568476C7.73913 0.568476 3.48215 4.86308 3.48215 10.1246C3.48215 14.2572 6.12633 17.6863 9.80273 19.0035L9.80273 45.565C6.12632 46.8922 3.48215 50.3489 3.48215 54.4815C3.48215 59.743 7.73914 64 13.0006 64C18.2622 64 22.5191 59.743 22.5191 54.4815C22.5191 50.3489 19.875 46.8922 16.1986 45.565L16.1986 19.0035C19.875 17.6863 22.5191 14.2572 22.5191 10.1246C22.5191 4.86308 18.2621 0.568476 13.0006 0.568476ZM13.0006 6.9643C14.7381 6.9643 16.1233 8.38708 16.1233 10.1246C16.1233 11.8621 14.7381 13.2473 13.0006 13.2473C11.2631 13.2473 9.84035 11.8621 9.84035 10.1246C9.84035 8.38708 11.2631 6.9643 13.0006 6.9643ZM13.0006 51.3212C14.7381 51.3212 16.1233 52.744 16.1233 54.4815C16.1233 56.219 14.7381 57.6042 13.0006 57.6042C11.2631 57.6042 9.84035 56.219 9.84035 54.4815C9.84035 52.744 11.2631 51.3212 13.0006 51.3212Z" fill="var(--f-4e4e4e)" fill-rule="nonzero" opacity="1" stroke="none"/></svg>'

function chi(n) {
 if (n < 10) {
  return '0' + n
 }
 else {
  return n
 }
}
function createHTML(json) {
 var html = ''
 var changes_arr = []
 var changes = function (title, description, prs) {
  return '<li class="changes"><div class="changes_title">' + title + '<a href="' + prs + '"><div class="changes_prs">' + icon_pull_request + '</div></a></div><div class="changes_description">' + description + '</div><div class="changes_line_box"> <div class="changes_line"> </div></div></li>'
 }
 var list = json.changes
 var list_len = list.length
 for (var e = 0; e < list_len; e++) {
  changes_arr.push(changes(list[e].title, list[e].description, list[e].prs_link))
 }
 html = changes_arr.join('')
 return html
}
var ju;
var gu = 0;
var jko = 0;
ju = setInterval(function () {
 if (document.querySelector("body").getAttribute("data-js-state") === "loaded") {
  if (jko < 1) {
   if (document.getElementsByClassName("post-body entry-content float-container").length > 0) {
    //document.getElementsByClassName("comments")[0].style.display = "none";
    if (document.querySelectorAll(".post-body").length > 0) {
     var text = document.querySelector(".post-body").innerText
     var json = JSON.parse(text)
     var html = createHTML(json)
     document.querySelectorAll(".post-title")[0].innerHTML = json.repo_name
     document.title = json.repo_name
     document.getElementsByClassName("post-body entry-content float-container")[0].innerHTML = html;
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
    var jttxt = jttime.getFullYear() + "/" + chi(jttime.getMonth() + 1) + "/" + chi(jttime.getDate())
    document.querySelectorAll(".post-timestamp time")[i].innerText = jttxt;
    document.querySelectorAll(".post-timestamp")[i].style.margin = 0;
    document.querySelectorAll(".post-timestamp")[i].style.padding = 0;
   }
  }
 }
}, 1);