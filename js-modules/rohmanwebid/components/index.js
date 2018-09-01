'use strict'

const chartpie = ``;
const experiences = `
<!-- #EXPERIENCE# -->
<section id="experience" class="section section-experience wow fadeInUp" data-wow-offset="40" style="visibility: visible; animation-name: fadeInUp;">
    <div class="header-section">
        <h2 class="h2-section">EXPERIENCE</h2>
    </div>
    <b-row>
        <div class="col-md-10 col-md-offset-1">
            <span class="icon-experience">
                <i class="fa fa-briefcase"></i>
            </span>
            <div class="all-experience">
                <!-- single experience -->
                <div class="experience-content" v-for="exp in my_experiences">
                    <span class="period-experience">{{exp.name}}</span>
                    <h3 class="specialty-name">{{exp.title}}</h3>
                    <h3 class="company-name">{{exp.company}}</h3>
                    <p class="prg-experience">{{exp.content}}</p>
                </div>
                <!-- / single experience -->
            </div>
        </div>
    </b-row>
</section>
`;
const skils = `
<!-- #SKILLS# -->
<section id="skills" class="section section-skills wow fadeInUp" data-wow-offset="40" style="visibility: visible; animation-name: fadeInUp;">
    <div class="header-section">
        <h2 class="h2-section">SKILLS</h2>
    </div>
    <b-row>
        <b-col md="5">
            <div class="professional-skills">
                <div class="title-skills">
                    <h3>PROFESSIONAL SKILLS</h3>
                </div>
                <!-- single skill -->
                <div class="skill" v-for="skill in myskils">
                    <div class="title-progress">
                        <span class="skill-name">{{skill.name}}</span>
                        <span class="skill-value">{{skill.percent}}</span>
                    </div>
                    <div class="progress">
                        <div class="progress-bar progress1" role="progressbar" :aria-valuenow="skill.percent" aria-valuemin="0" 
                            aria-valuemax="100" :style="{width: skill.percent + '%'}">
                        </div>
                    </div>
                </div>
                <!-- / single skill -->
            </div>
        </b-col>
        <b-col md="7">
            <div class="additional-skills">
                <div class="title-skills">
                    <h3>OTHER SKILLS</h3>
                </div>
                <div class="circle-progress">
                    <b-row>
                        <!-- single circle skill -->
                        <b-col sm="4">
                            <div class="circle">
                                <div class="chart-percentage">
                                    <span>90%</span>
                                </div>
                                <div class="chart" data-percent="90">
                                    <!-- canvas -->
                                    <canvas height="110" width="110"></canvas>
                                </div>
                                <div class="name-circle">
                                    <span>English</span>
                                </div>
                            </div>
                        </b-col>
                        <!-- / single circle skill -->
                        <!-- single circle skill -->
                        <b-col sm="4">
                            <div class="circle">
                                <div class="chart-percentage">
                                    <span>80%</span>
                                </div>
                                <div class="chart" data-percent="80">
                                    <!-- canvas -->
                                    <canvas height="110" width="110"></canvas>
                                </div>
                                <div class="name-circle">
                                    <span>Creativity</span>
                                </div>
                            </div>
                        </b-col>
                        <!-- / single circle skill -->
                        <!-- single circle skill -->
                        <b-col sm="4">
                            <div class="circle">
                                <div class="chart-percentage">
                                    <span>65%</span>
                                </div>
                                <div class="chart" data-percent="65">
                                    <!-- canvas -->
                                    <canvas height="110" width="110"></canvas>
                                </div>
                                <div class="name-circle">
                                    <span>Teamwork</span>
                                </div>
                            </div>
                        </b-col>
                        <!-- / single circle skill -->
                    </b-row>
                </div>
                <div class="other-skills">
                    <b-row>
                        <b-col sm="6">
                            <div class="other">
                                <!-- single other skill -->
                                <div class="skill" v-for="i in other_skils.list1">
                                    <i class="fa fa-check-square-o" aria-hidden="true"></i>
                                    <span>{{ i.name }}</span>
                                </div>
                                <!-- / single other skill -->
                            </div>
                        </b-col>
                        <b-col sm="6">
                            <div class="other">
                                <!-- single other skill -->
                                <div class="skill" v-for="i in other_skils.list2">
                                    <i class="fa fa-check-square-o" aria-hidden="true"></i>
                                    <span>{{ i.name }}</span>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </div>
        </b-col>
    </b-row>
</section>
`;
const about = `
    <!-- #ABOUT# -->
    <section id="about" class="section section-about wow fadeInUp" style="visibility: visible; animation-name: fadeInUp;">
        <div class="profile">
            <b-row>
                <b-col sm="4">
                    <div class="photo-profile">
                        <img src="assets/themes/rohmanwebid/images/me.png" :alt="name" width="200">
                    </div>
                    <a href="cv/cv-1.pdf" target="cv">
                        <div class="download-resume">
                            <i class="fa fa-cloud-download" aria-hidden="true"></i>
                            <span class="text-download">DOWNLOAD RESUME</span>
                        </div>
                    </a>
                    <div class="available">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        <span class="text-available" style="color:#ea5a33">available on freelance</span>
                    </div>
                </b-col>
                <b-col sm="8">
                    <div class="info-profile">
                        <h2>{{name}}</h2>
                        <h3>web developer &amp; backend developer</h3>
                        <p>Hello! Saya {{name}}. Seorang Web Developer dengan lebih dari 5th pengalaman.
                        Pengalaman dalam segala situasi dari siklus development untuk project-project web yang dikerjakan.
                        Saya mempunyai pengalaman dibeberapa programming diantaranya NodeJS, PHP, Mysql, HTML5, CSS3, jQuery. Dan background kuat pada Server & Manajemen tim.</p>
                        <b-row>
                            <b-col sm="12" md="6">
                                <ul class="ul-info">
                                    <li class="li-info">
                                        <span class="title-info">Age</span>
                                        <span class="info">{{age}}</span>
                                    </li>
                                    <li class="li-info">
                                        <span class="title-info">Address</span>
                                        <span class="info">{{address}}</span>
                                    </li>
                                    <li class="li-info">
                                        <span class="title-info">Email</span>
                                        <span class="info">{{email}}</span>
                                    </li>
                                </ul>
                            </b-col>
                            <b-col sm="12" md="6">
                                <ul class="ul-info">
                                    <li class="li-info">
                                        <span class="title-info">Phone</span>
                                        <span class="info">{{phone}}</span>
                                    </li>
                                    <li class="li-info">
                                        <span class="title-info">Website</span>
                                        <span class="info">{{website}}</span>
                                    </li>
                                    <li class="li-info">
                                        <span class="title-info">Nationality</span>
                                        <span class="info">{{national}}</span>
                                    </li>
                                </ul>
                            </b-col>
                            <b-col sm="12" md="12" style="padding-top: 100px;">
                                <span class="title-links">Social Links</span>
                                <ul class="ul-social-links">
                                    <li class="li-social-links">
                                        <a :href="social_links.fb" target="blank" data-tootik="Facebook" data-tootik-conf="square">
                                            <i class="fa fa-facebook" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li class="li-social-links">
                                        <a :href="social_links.tw" target="blank" data-tootik="Twitter" data-tootik-conf="square">
                                            <i class="fa fa-twitter" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li class="li-social-links">
                                        <a :href="social_links.gp" target="blank" data-tootik="Google Plus" data-tootik-conf="square">
                                            <i class="fa fa-google-plus" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li class="li-social-links">
                                        <a :href="social_links.ln" target="blank" data-tootik="Linkedin" data-tootik-conf="square">
                                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li class="li-social-links">
                                        <a :href="social_links.dr" target="blank" data-tootik="Dribbble" data-tootik-conf="square">
                                            <i class="fa fa-dribbble" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li class="li-social-links">
                                        <a :href="social_links.pt" target="blank" data-tootik="Pinterest" data-tootik-conf="square">
                                            <i class="fa fa-pinterest-p" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li class="li-social-links">
                                        <a :href="social_links.vm" target="blank" data-tootik="Vimeo" data-tootik-conf="square">
                                            <i class="fa fa-vimeo" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li class="li-social-links">
                                        <a :href="social_links.bh" target="blank" data-tootik="Behance" data-tootik-conf="square">
                                            <i class="fa fa-behance" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                </ul>
                            </b-col>
                        </b-row>
                    </div>
                </b-col>
            </b-row>
        </div>
    </section>
`;
const index = `
    <div class="container">
        ${about}
        ${skils}
        ${experiences}
    </div>
`;
var IndexTemplate = Vue.component('index-template', {
    data: function () {
        return {
            name: 'Akhmad Abdul Rohman',
            age: '24',
            email: 'rohmanmail@gmail.com',
            phone: '0823-3230-3931',
            address: 'Jl. Tebet Barat VIB No. 1',
            website: 'rohman.web.id',
            national: 'Indonesia',
            social_links: {
                'fb': 'https://facebook.com/rohmanwebid001',
                'ig': 'https://instagram.com/rohmanwebid001',
                'tw': 'https://twitter.com/rohmanwebid',
                'gp': 'https://plus.google.com/+RohmanAhmadGo',
                'ln': 'https://linkedin.com/in/rohmanahmad001',
                'dr': 'https://dribble.com',
                'pt': 'https://pinterest.com',
                'vm': 'https://vimeo.com',
                'bh': 'https://behance.com'
            },
            myskils: [
                { 'name': 'Node Js - MongoDB', 'percent': 80 },
                { 'name': 'PHP - Mysql', 'percent': 90 },
                { 'name': 'JQuery', 'percent': 93 },
                { 'name': 'HTML & CSS', 'percent': 70 },
                { 'name': 'Linux Server', 'percent': 90 }
            ],
            other_skils: {
                list1: [
                    { 'name': 'Vue JS', 'percent': 75 },
                    { 'name': 'Angular JS', 'percent': 90 },
                    { 'name': 'Codeigniter', 'percent': 93 }
                ],
                list2: [
                    { 'name': 'Express JS', 'percent': 70 },
                    { 'name': 'Restify JS', 'percent': 70 },
                    { 'name': 'Adonis JS', 'percent': 80 }
                ]
            },
            my_experiences: [
                {
                    name: 'Mar 2017 - Current',
                    title: 'Backend Developer',
                    company: 'PT. Ivonesia Solusi Data',
                    content: 'Sampai saat ini saya masih diperusahaan ini, disini saya membuat, memperbaiki selaga sesuatu yang berhubungan dengan aplikasi yang saya buat dan bertanggung jawab atas kelancaran aplikasi pada client perusahaan.'
                },
                {
                    name: 'Jan 2017 - Mar 2017',
                    title: 'Fullstack Developer',
                    company: 'PT. Magicsoft Asia System Ltd',
                    content: 'Diperusahaan ini saya bertanggung jawab dengan jalannya aplikasi yang saya dan tim buat, serta menangani berbagai ancaman dari kelemahan sistem.'
                },
                {
                    name: 'Sept 2013 - Jan 2017',
                    title: 'Fullstack Developer',
                    company: 'CV Surya Semesta Digital Media',
                    content: 'Memulai Karir didunia teknologi disini, belajar dan berkreasi didunia digital. Saya bertanggung jawab semua in/out data, mengatasi berbagai masalah sistem mulai dari kesiapan server sampai penanganan bug aplikasi website.'
                }
            ]
        }
    },
    created: function () {
        // console.log('... index created');
    },
    mounted: function () {
        // console.log('... index mounted');
        this.$root.$emit('changeRoute', 'home');
    },
    template: index,
    components: {}
});

export default IndexTemplate;
