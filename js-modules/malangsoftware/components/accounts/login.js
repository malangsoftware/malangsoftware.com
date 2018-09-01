'use strict'

var login = `
<b-col lg="12 h-100">
    <b-row class="h-100">
        <b-col md="12" class="xcontainer">
            <div class="custcard card-container width340">
                <!-- <img class="profile-img-card" src="//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120" alt="" /> -->
                <img id="profile-img" class="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                <p id="profile-name" class="profile-name-card"></p>
                <form class="form-signin">
                    <span id="reauth-email" class="reauth-email"></span>
                    <input v-model="input.email" type="email" id="inputEmail" class="form-control cust-form-control" placeholder="Email address" required autofocus>
                    <input v-model="input.password" type="password" id="inputPassword" class="form-control cust-form-control" placeholder="Password" required>
                    <div id="remember" class="checkbox">
                        <label>
                            <input type="checkbox" value="remember-me"> Remember me
                        </label>
                    </div>
                    <button class="btn btn-lg btn-primary btn-block btn-signin" @click="login()">Sign in</button>
                </form><!-- /form -->
                <a href="#" class="forgot-password">
                    Forgot the password?
                </a>
            </div><!-- /card-container -->
        </b-col>
    </b-row>
</b-col>
`;
var malangsoftwareConfig = config.malangsoftware;
var apiConfig = malangsoftwareConfig.api;

var LoginTemplate = Vue.component('login-template', {
    template: login,
    data: function () {
        return {
            input: {
                email: '',
                password: ''
            }
        }
    },
    created: function () {
        console.log('... login created');
        this.check();
    },
    mounted: function () {
        this.$root.$emit('changeRoute', 'login');
        this.check();
    },
    methods: {
        check: function () {
            const currenttoken = localStorage.getItem('current_token');
            if (!currenttoken) {
                this.$router.replace({ name: "login" });
            } else {
                this.$router.replace({ name: "my_account" });
            }
        },
        login: function () {
            if(this.input.email != "" && this.input.password != "") {
                var formdata = new URLSearchParams();
                formdata.append('user_email', this.input.email);
                formdata.append('user_password', this.input.password);
                axios({
                    headers: apiConfig.headers.post,
                    baseURL: apiConfig.baseurl,
                    url: apiConfig.endpoints.login.path,
                    method: apiConfig.endpoints.login.type,
                    data: formdata
                })
                .then((res) => {
                    const token = res
                        && res.data
                        && res.data.data
                        && res.data.data.items
                        && res.data.data.items.token
                            ? res.data.data.items.token
                            : '';
                    const email = res
                        && res.data
                        && res.data.data
                        && res.data.data.items
                        && res.data.data.items.email
                            ? res.data.data.items.email
                            : '';

                    localStorage.setItem('current_token', token);
                    localStorage.setItem('current_email', email);
                    this.$router.replace({ name: "my_account" });
                })
                .catch((err) => {
                    this.$root.$emit('show_notif', {type: 'danger', message: err.response.data.message})
                    console.log({err});
                });
            } else {
                this.$root.$emit('show_notif', {type: 'warning', message: 'A email and password must be present'});
            }
        }
    }
});

export default LoginTemplate;
