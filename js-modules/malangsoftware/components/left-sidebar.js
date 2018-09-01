'use strict'

const leftsidebar = `
    <b-list-group>
        <b-list-group-item class="no-border" v-for="m in menus[currentmenu]" :key="m.l">
            <b-link :to="{name: m.l}" class="no-style-link">
                <b-row>
                    <b-col lg="2">
                        <b class="fa fs20 mr-3" :class="m.i"></b>
                    </b-col>
                    <b-col lg="8">
                        {{m.c}}
                    </b-col>
                </b-row>
            </b-link>
        </b-list-group-item>
    </b-list-group>
`;

const menus = {
    'home': [
        {i: 'fa-gamepad', c: 'Dashboard', l: 'home'},
        {i: 'fa-globe', c: 'Sentiment', l: 'sentiment'}
    ],
    'accounts': [
        {i: 'fa-gamepad', c: 'Dashboard', l: 'sentiment'}
    ],
    'sentiments': [
        {i: 'fa-gamepad', c: 'Dashboard', l: 'sentiment'},
        {i: 'fa-globe', c: 'Sentences', l: 'sentiment_sentences'},
        {i: 'fa-glasses', c: 'Vocabularies', l: 'sentiment_vocab'},
        {i: 'fa-gavel', c: 'Menu Me 4', l: 'sentiment_menu_3'},
        {i: 'fa-headphones', c: 'Menu Me 5', l: 'sentiment_menu_4'}
    ]
}
var LeftTemplate = Vue.component('left-sidebar-template', {
    props: ['currentmenu'],
    data: function () {
        return {
            menus
        }
    },
    created: function () {
        console.log('... left-sidebar created');
    },
    mounted: function () {
        console.log('... left-sidebar mounted');
        console.log('-->', this.$root.currentRoute);
        console.log('-->', this.currentmenu);
    },
    template: leftsidebar
});

export default LeftTemplate;
