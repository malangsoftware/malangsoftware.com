'use strict'

const rightsidebar = `
    <h1>{{ a }}</h1>
`;
var RightTemplate = Vue.component('right-sidebar-template', {
    data: function () {
        return {
            a: 'ok'
        }
    },
    created: function () {
        console.log('... right-sidebar created');
    },
    mounted: function () {
        console.log('... right-sidebar mounted');
    },
    template: rightsidebar
});

export default RightTemplate;
