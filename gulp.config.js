module.exports = {
    app:{
        base: "app/",
        assets: "app/assets/**/*",
        styles: "app/assets/**/*.css",
        less: "app/**/*.less",
        scripts: "app/scripts/*.js",
        baseHtml: "app/base.html",
        libs: "node_modules/**/*",
        compiledLibsStyles: [
                'node_modules/bootstrap/dist/css/bootstrap.min.css',
                'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
                'node_modules/font-awesome/css/font-awesome.min.css'],
         compiledLibsScripts:[
                'node_modules/jquery/dist/jquery.min.js',
                'node_modules/bootstrap/dist/js/bootstrap.min.js',
                'node_modules/carousel/index.js'],
        compiledLibsFonts:[
            'node_modules/font-awesome/fonts/fontawesome-webfont.eot',
            'node_modules/font-awesome/fonts/fontawesome-webfont.svg',
            'node_modules/font-awesome/fonts/fontawesome-webfont.ttf',
            'node_modules/font-awesome/fonts/fontawesome-webfont.woff',
            'node_modules/font-awesome/fonts/fontawesome-webfont.woff2',
        ]
    },
    dist: {
        base: "dist/",
        assets: "dist/assets/",
        styles: "app/styles/",
        baseHtml: "dist/base.html",
        indexHtml: "dist/index.html",
        libs: "dist/node_modules",
        scripts: "dist/scripts",
        fonts: "dist/fonts/",
        compiledSources: [
                'dist/**/*.js',
                'dist/**/*.css']
    }
}