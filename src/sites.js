const config = require("./config");
const fm = require("front-matter");
const marked = require("marked");
const fs = require("fs");

const createSite = sitePath => {
    const data = fs.readFileSync(`${config.dev.sites}/${sitePath}.md`, "utf8");
    const content = fm(data);
    content.body = marked(content.body);
    content.path = sitePath;
    return content;
};

const posthtml = data => `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${data.attributes.description}" />
        <title>${data.attributes.title}</title>
    </head>
    <body>
        <header>
            <a href="/">Go back home</a>
        </header>
        <div class="content">
                <h1>${data.attributes.title}</h1>
            <p>${new Date(parseInt(data.attributes.date)).toDateString()}</p>
            <hr />
            ${data.body}
        </div>
    </body>
</html>
`;


const renderSites = sites => {
    sites.forEach(site => {
        if (!fs.existsSync(`${config.dev.outdir}/${site.path}`)){
          fs.mkdirSync(`${config.dev.outdir}/${site.path}`);
        }
    
        fs.writeFile(
          `${config.dev.outdir}/${site.path}/index.html`,
          posthtml(site),
          e => {
            if (e) throw e;
            console.log(`${site.path}/index.html was created successfully`);
          }
        );
      });
};

module.exports = {
    createSite: createSite,
    renderSites: renderSites
}