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
  
  var siteContext =site.hasOwnProperty("context") ?  require("../" + config.dev.content + site.context) : {};
  var siteTemplate = Handlebars.compile(fs.readFileSync(config.dev.content + site.template, {encoding: 'utf8'}));
  baseContext.content = siteTemplate(siteContext);

  //Then, we render the site in the base template
  
  baseContext.title =site.hasOwnProperty("title") ?  site.title : null;
  if(site.hasOwnProperty("navbar")){
    baseContext.navbar.forEach(item =>{
      if(item.name == site.navbar){
        item.active = true;
      }
    });
  }
  const template = Handlebars.compile(fs.readFileSync(config.dev.content + siteConfig.baseTemplate, {encoding: 'utf8'}));
  fs.mkdirSync(config.dev.outdir + "/" + site.permalink, {recursive: true});
  fs.writeFileSync( config.dev.outdir + "/" + site.permalink + "/index.html", template(baseContext));

  baseContext.navbar.forEach(item =>{
    item.active = false;
  });
  

}


function CreateBaseContext(){

  //Read Stylesheets
  var styles = [];
  siteConfig.styles.forEach(element => {
    styles.push(fs.readFileSync(config.dev.content + element, "utf8"));
  });
  
  //Read Scripts
  var scripts = [];
  siteConfig.scripts.forEach(element => {
    scripts.push(fs.readFileSync(config.dev.content + element, "utf8"));
  });

  //Create Date
  const months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
  today = new Date();
  dateString = "" + today.getDate() + ". " + months[today.getMonth()] + " " + today.getFullYear();

  //Collect data for navbar
  var navbar = [];
  siteConfig.sites.forEach(element => {
    if(element.hasOwnProperty("navbar")){
      navbar.push({name: element.navbar, link: element.permalink, active: false});
    }
  });



  return { 
    content: "",
    date: dateString, 
    fullYear: today.getFullYear(), 
    styles: styles, 
    scripts: scripts,
    navbar: navbar
  };
}

baseContext = CreateBaseContext();


siteConfig.sites.forEach(element => {
  CreateSite(element, baseContext, "index.html");
});


