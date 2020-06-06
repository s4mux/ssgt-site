const fs = require("fs")
const config = require("./config");

const Handlebars = require("handlebars");

const siteConfig = require("../" + config.dev.siteConfig);



//Create HTML Pages:

if (!fs.existsSync(config.dev.outdir)){
  fs.mkdirSync(config.dev.outdir);
}



function CreateSite(site, baseContext, destination){

  //First, we render the site with its context (if any)

  if("object" !== typeof site) throw "site must be an Object";
  if(!site.hasOwnProperty("template")) throw "site must have property template"
  
  var siteContext =site.hasOwnProperty("context") ?  site.context : {};
  var siteTemplate = Handlebars.compile(fs.readFileSync(config.dev.content + site.template, {encoding: 'utf8'}));
  var content = siteTemplate(siteContext);

  //Then, we render the site in the base template


//var index = fs.readFileSync("../content/index.html");

const template = Handlebars.compile(fs.readFileSync(config.dev.content + siteConfig.baseTemplate, {encoding: 'utf8'}));

const months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]

today = new Date();
dateString = "" + today.getDate() + ". " + months[today.getMonth()] + " " + today.getFullYear();

fs.writeFileSync( config.dev.outdir + "/" + destination, template({ content: content, date: dateString, fullYear: today.getFullYear() }));

}


CreateSite({template: "index.html"}, {}, "index.html");