var config = {
    rohmanwebid: {
        api: {
            baseurl: 'http://vbox-microservices.malangsoftware.com',
            headers: {
                post: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Accept": "application/json"
                }
            },
            endpoints: {
                login: {
                    path: '/api/users/login',
                    type: 'POST'
                }
            }
        }
    }
}
