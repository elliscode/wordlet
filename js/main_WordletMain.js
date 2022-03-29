requirejs.config({
    urlArgs: "cachebust=000",
    bundles: {
        'js/script.js': ['WordletMain']
    }
});

requirejs(["WordletMain"], function (WordletMain) {
    console.log('Running "WordletMain.ts" by using requirejs');
});