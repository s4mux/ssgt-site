const fs = require("fs")
const config = require("./config");

const siteMethods = require("./sites")
const homepageMethods = require("./homepage")

const sites = fs.readdirSync(config.dev.sites)
.map(site => site.slice(0, -3))
.map(site => siteMethods.createSite(site));

console.log(sites);



//Create HTML Pages:

if (!fs.existsSync(config.dev.outdir)){
  fs.mkdirSync(config.dev.outdir);
}

siteMethods.renderSites(sites);
homepageMethods.addHomePage(sites);