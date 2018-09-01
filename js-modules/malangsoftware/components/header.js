'use strict'

const appMenu = `
    <b-popover target="app-menu-top" triggers="click" placement="bottom">
        <!--template slot="title">Apps</template-->
        <b-row class="pad20 width265">
            <b-col class="text-center"> <b-link :to="{name: 'home'}" class="fa fa-cloud fs35 dishover"></b-link> </b-col>
            <b-col class="text-center"> <b-link :to="{name: 'sentiment'}" class="fa fa-comment fs35 dishover"></b-link> </b-col>
            <b-col class="text-center"> <b-link :to="{name: ''}" class="fa fa-database fs35 dishover"></b-link> </b-col>
        </b-row>
        <b-row class="pad20 width265">
            <b-col class="text-center"> <b-link :to="{name: ''}" class="fa fa-cubes fs35 dishover"></b-link> </b-col>
            <b-col class="text-center"> <b-link :to="{name: ''}" class="fa fa-credit-card fs35 dishover"></b-link> </b-col>
            <b-col class="text-center"> <b-link :to="{name: ''}" class="fa fa-user fs35 dishover"></b-link> </b-col>
        </b-row>
        <b-row class="pad20 width265">
            <b-col class="text-center"> <b-link :to="{name: ''}" class="fa fa-award fs35 dishover"></b-link> </b-col>
            <b-col class="text-center"> <b-link :to="{name: ''}" class="fa fa-chart-pie fs35 dishover"></b-link> </b-col>
            <b-col class="text-center"> <b-link :to="{name: ''}" class="fa fa-ellipsis-h fs35 dishover"></b-link> </b-col>
        </b-row>
    </b-popover>
`;
const header = `
    <b-row class="pad20 bbottom mb10">
        <b-col md="2">1 of 3</b-col>
        <b-col md="7">2 of 3</b-col>
        <b-col md="3">
            <b-nav class="pul-right">
                <b-nav-item active class="pad-t5">
                    <b-link :to="{name: 'my_account'}">My Account</b-link>
                </b-nav-item>
                <b-nav-item class="pad-t5">
                    <b class="fa fa-th fs20" id="app-menu-top"></b>
                    ${appMenu}
                </b-nav-item>
                <b-nav-item class="pad-t5">
                    <b class="fa fa-bell fs20"></b>
                </b-nav-item>
                <b-nav-item class="pad-t3">
                    <b-link :to="{name: 'login'}" class="btn btn-primary btn-sm"> Login </b-link>
                </b-nav-item>
            </b-nav>
        </b-col>
    </b-row>
`;
var HeaderTemplate = Vue.component('header-template', {
    data: function () {
        return {
            a: 'ok'
        }
    },
    created: function () {
        console.log('... header created');
    },
    mounted: function () {
        console.log('... header mounted');
    },
    template: header
});

export default HeaderTemplate;
