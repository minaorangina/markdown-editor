window.onload = function(){
    var converter = new showdown.Converter(),
        pad = document.getElementById('pad'),
        md = document.getElementById('markdown');

    var convertTextToMarkdown = function(){
        var convertedToMarkdwon =
        md.innerHTML = converter.makeHtml(pad.value);
    };

    pad.addEventListener('input', convertTextToMarkdown);
    convertTextToMarkdown();
};
