// Initialize some global variables
const internet = new XMLHttpRequest();
var htmlStr = document.documentElement.innerHTML;

// Insert site parts
insertHeader();
insertFooter();

// Update page
document.documentElement.innerHTML = htmlStr;

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
