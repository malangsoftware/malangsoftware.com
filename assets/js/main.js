requirejs.config({
    //By default load any module IDs from js/lib
    // baseUrl: 'js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../../js-modules/'
    }
});

require([
    './assets/js/bootstrap-vue/bootstrap-vue.js',
    './assets/js/bootstrap-vue/polyfill.min.js',
    './js-modules/components/header.js',
    './js-modules/components/left-sidebar.js',
    './js-modules/components/right-sidebar.js',
    './js-modules/components/footer.js',
    './js-modules/app.js'
]);