'use strict'

var FooterTemplate = () => import('./components/footer.js');
var HeaderTemplate = () => import('./components/header.js');
var RightTemplate = () => import('./components/right-sidebar.js');
var LeftTemplate = () => import('./components/left-sidebar.js');

var IndexTemplate = () => import('./components/index.js');

var router = new VueRouter({
    routes: [
        { path: '/', name: 'home', component: IndexTemplate },
        // { path: '/account/login', name: 'login', component: LoginTemplate },
        // { path: '/account/me', name: 'my_account', component: MeTemplate },
        // { path: '/sentiment', name: 'sentiment', component: SentimentMainTemplate },
        // { path: '/sentiment/sentences', name: 'sentiment_sentences', component: SentimentSentencesTemplate },
        // { path: '/sentiment/vocabularies', name: 'sentiment_vocab', component: SentimentVocabTemplate },
        // { path: '/sentiment/menu3', name: 'sentiment_menu_3', component: SentimentMainTemplate },
        // { path: '/sentiment/menu4', name: 'sentiment_menu_4', component: SentimentMainTemplate }
    ]
});

var vm = new Vue({
    el: '#app',
    router,
    data: function () {
        return {
            listmenu: 'home',
            currentRoute: 'home', // home
            mainComponent: {
                RightSide: { show: true, data: [] },
                LeftSide: { show: true, data: [] },
                Header: { show: true, data: [] },
                Footer: { show: true, data: [] },
            },
            notifications: {
                type: 'warning',
                message: 'this is message',
                dismissSecs: 5,
                dismissCountDown: 0,
                showDismissibleAlert: false
            }
        }
    },
    created: function () {
        // console.log('... app created');
    },
    mounted: function () {
        // this.notifications.dismissCountDown = 5;
    },
    components: {
        'footer-template': FooterTemplate,
        'header-template': HeaderTemplate,
        'left-sidebar-template': LeftTemplate,
        'right-sidebar-template': RightTemplate
    },
    props: ['currentmenu'],
    methods: {
        sendNotif: function (type, message) {
            console.log('sending notification');
        },
        dismissNotif (dismissCountDown) {
            this.notifications.dismissCountDown = dismissCountDown
        }
    }
});

vm.$on('changeRoute', function (route) {
    // console.log('route changed to', route);
    this.currentRoute = route;
    // console.log({
    //     cur: this.currentRoute,
    //     route
    // })
    if (route == 'home') {
        vm.mainComponent.LeftSide.show = false;
        vm.mainComponent.RightSide.show = false;
        vm.mainComponent.Header.show = false;
        vm.mainComponent.Footer.show = false;
    } else {
        vm.mainComponent.LeftSide.show = true;
        vm.mainComponent.RightSide.show = true;
        vm.mainComponent.Header.show = true;
        vm.mainComponent.Footer.show = true;
    }
});
vm.$on('show_notif', function (data) {
    // console.log('showing notif')
    var type = 'warning';
    var message = 'this is message';
    if (data) {
        if (data.type) {
            type = data.type;
        }
        if (data.message) {
            message = data.message;
        }
    }
    vm.notifications.type = type;
    vm.notifications.message = message;
    vm.notifications.dismissCountDown = 5;
})