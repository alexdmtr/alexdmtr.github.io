'use strict';

/**

*/
function updateMarkdown() {
  var urlBase = location.href.substring(0, location.href.lastIndexOf("/") + 1)

  var url = urlBase + 'content.md';

  $.get(url, function (data) {
    console.log(data);

    var converter = new showdown.Converter();
    var html = converter.makeHtml(data);

    $("#markdown-html").html(html);
  });
}

updateMarkdown();
