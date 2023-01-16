// Initialize some global variables
const internet = new XMLHttpRequest();
var htmlStr = document.documentElement.innerHTML;

// Insert site parts
insertHeader();
insertContents();
insertFooter();

// Update page
document.documentElement.innerHTML = htmlStr;
alert("test");

// ----- Begin function declarations

function insertHeader()
{
    const headerUrl = "/partial/header.html";
    const headerReplace = "<!--HEADER-->";

    internet.open("GET", headerUrl, false);
    internet.send(null);
    if (internet.status == 200)
    {
        const header = internet.responseText;
        while (htmlStr.includes(headerReplace)) htmlStr = htmlStr.replace(headerReplace, header);
    }
}
function insertContents()
{
    const tableReplace = "<!--TABLE OF CONTENTS-->";

    var table = document.createElement("div");
    table.setAttribute("id", "table-of-contents");

    var title = document.createElement("h2");
    title.textContent = "Table of Contents";

    table.appendChild(title);

    var list = document.createElement("ul");

    var titleObjects = document.getElementsByClassName("para-title");
    for (var i = 0; i < titleObjects.length; i++)
    {
        var appendLink = document.createElement("a");
        appendLink.setAttribute("class", "nounderline");
        appendLink.setAttribute("href", "#" + titleObjects[i].id);
        appendLink.textContent = titleObjects[i].textContent;

        var append = document.createElement("li");
        append.appendChild(appendLink);

        list.appendChild(append);
    }

    table.appendChild(list);

    while (htmlStr.includes(tableReplace)) htmlStr = htmlStr.replace(tableReplace, table.outerHTML);
}
function insertFooter()
{
    const footerUrl = "/partial/footer.html"
    const footerReplace = "<!--FOOTER-->";
    
    internet.open("GET", footerUrl, false);
    internet.send(null);
    if (internet.status == 200)
    {
        const footer = internet.responseText;
        while (htmlStr.includes(footerReplace)) htmlStr = htmlStr.replace(footerReplace, footer);
    }
}
