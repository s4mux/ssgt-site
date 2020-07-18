module.exports = {
    baseTemplate: "sites/template.html",
    styles: [
        "/css/bootstrap.min.css",
        "/css/style.css"
    ],
    scripts:[
        "/js/jquery.min.js",
        "/js/bootstrap.bundle.min.js",
        "/js/anime.min.js",
        "/js/main.js"
    ],
    sites: [
        {
            template: "sites/home.html",
            permalink: "/",
            navbar: "Home"
        },
        {
            template: "sites/jahresprogramm.html",
            permalink: "/jahresprogramm/",
            title: "Jahresprogramm",
            navbar: "Jahresprogramm"
        },
        {
            template: "sites/aergerameisterschaft.html",
            permalink: "/aergerameisterschaft/",
            title: "Ärgerameisterschaft",
            navbar: "Ärgerameisterschaft"
        },
        {
            template: "sites/vorstand.html",
            permalink: "/vorstand/",
            title: "Vorstand",
            navbar: "Vorstand",
            context: "vorstand.js"
        }//,
        //{
        //    "template": "sites/archiv.html",
        //    "permalink": "/archiv/",
        //    "title": "Archiv",
        //    "navbar": "Archiv"
        //}
    ]
}