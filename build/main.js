webpackJsonp([4],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		265,
		3
	],
	"../pages/contact/contact.module": [
		267,
		2
	],
	"../pages/skills/skills.module": [
		268,
		1
	],
	"../pages/work/work.module": [
		266,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 149;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__work_work__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
import {
  PolysparesPage
} from '../polyspares/polyspares';


import {
  GetintouchPage
} from '../getintouch/getintouch';

import {
  BravecamPage
} from '../bravecam/bravecam';

//import { NgxAni } from 'ngxani';
*/
var HomePage = (function () {
    // myAlert: boolean;
    function HomePage(navCtrl, alertCtrl, events) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.aboutPage = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.workPage = __WEBPACK_IMPORTED_MODULE_3__work_work__["a" /* WorkPage */];
        //getintouchPage = GetintouchPage;
        this.deutsch = false;
        this.slideNo = 0;
        this.about = true;
        this.secondaryBright = false;
        this.nextSlideNo = 1;
        this.slidesData = [{
                img: "assets/img/brittik_basu.jpg",
                headline: "Brittik Basu",
                headlineDE: "Brittik Basu",
                paragraph: "UX Designer & Hybrid App Developer",
                paragraphDE: "UX Designer & Hybrid App Developer"
            },
            {
                img: "assets/img/brittik_basu.jpg",
                headline: "My Skills",
                headlineDE: "Meine Fähigkeiten",
                paragraph: "Things I'm good at",
                paragraphDE: "Dinge, an denen ich  bin"
            },
            {
                img: "assets/img/brittik_basu.jpg",
                headline: "My Work",
                headlineDE: "Meine Arbeit",
                paragraph: "Exciting projects I've worked on",
                paragraphDE: "Spannende Projekte, die ich gearbeitet habe",
            },
            {
                img: "assets/img/brittik_basu.jpg",
                headline: "Get in Touch",
                headlineDE: "in Kontakt kommen",
                paragraph: "hello(at)brittikbasu.com",
                paragraphDE: "Dinge, an denen ich  bin",
            },
            {
                img: "",
                headline: "",
                paragraph: ""
            }
        ];
        this.events.publish('language:changed', this.deutsch);
    }
    HomePage.prototype.ionViewDidLoad = function () {
        /*
        let alert = this.alertCtrl.create({
              title: 'Hi There Awesome Person!',
              subTitle: 'My website is a work in progress and will be ready by the end of this month (March, 2017). Dont let this stop you from checking it out now :)',
              buttons: ['OK COOL!']
            });
            alert.present();
        */
    };
    HomePage.prototype.languageChanged = function () {
        this.deutsch = !this.deutsch;
        console.log("language changed");
        this.events.publish('language:changed', this.deutsch);
    };
    HomePage.prototype.goToSlide = function () {
        this.slides.slideTo(2, 500);
    };
    HomePage.prototype.errorFree = function () {
        if (this.slides.getActiveIndex() > this.slides.length() - 1) {
            console.log("Slide Overflow Detected");
            if (this.nextSlideNo > 4) {
                this.nextSlideNo--;
            }
        }
        else {
            this.slideNo = this.slides.getActiveIndex();
            if (this.nextSlideNo > this.slides.length() - 1) {
                this.nextSlideNo--;
            }
            else {
                this.nextSlideNo = this.slides.getActiveIndex() + 1;
            }
        }
    };
    HomePage.prototype.slideChanged = function () {
        var _this = this;
        console.log("Current index is", this.slideNo);
        this.errorFree();
        console.log("nextSlideNo is", this.nextSlideNo);
        if (this.slideNo == 0) {
            this.secondaryBright = false;
            this.about = true;
            this.contact = false;
            this.work = false;
            console.log("on about slide");
            //this.slides.slideTo(0, 500);
        }
        else if (this.slideNo == 1) {
            this.work = true;
            this.about = false;
            this.contact = false;
            console.log("on skills slide");
            // this.slides.slideTo(1, 500);
            window.setTimeout(function () { return _this.secondaryBright = true; }, 750);
        }
        else if (this.slideNo == 2) {
            this.contact = false;
            this.work = false;
            this.about = false;
            console.log("on work slide");
            // this.slides.slideTo(2, 500);
            window.setTimeout(function () { return _this.secondaryBright = true; }, 350);
        }
        else if (this.slideNo == 3) {
            this.contact = true;
            this.work = false;
            this.about = false;
            console.log("on contact slide");
            //this.slides.slideTo(3, 500);
            window.setTimeout(function () { return _this.secondaryBright = true; }, 350);
        }
    };
    HomePage.prototype.slide = function (where) {
        if (where == "next") {
            this.slides.slideNext();
        }
        else if (where == "prev") {
            this.slides.slidePrev();
        }
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
], HomePage.prototype, "slides", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/ubuntu/bfolio/src/pages/home/home.html"*/'<ion-header class="header-container" style="position: absolute">\n  <ion-item class="me-container">\n    <ion-avatar item-left (click)="this.slides.slideTo(0,500)">\n      <img src="{{slidesData[slideNo].img}}" />\n    </ion-avatar>\n    <h2 [class.secondary-bright]="secondaryBright" *ngIf="!deutsch">{{slidesData[slideNo].headline}}</h2>\n    <h2 [class.secondary-bright]="secondaryBright" *ngIf="deutsch">{{slidesData[slideNo].headlineDE}}</h2>\n    <p *ngIf="!deutsch" (click)="animation(rect)">{{slidesData[slideNo].paragraph}}</p>\n    <p *ngIf="deutsch">{{slidesData[slideNo].paragraphDE}}</p>\n  </ion-item>\n  <!--<ion-item class="deutsch-toggle">\n    <ion-toggle (tap)="languageChanged()">\n    </ion-toggle>\n    <ion-label>Deutsch</ion-label>\n    <h1>de</h1>\n  </ion-item>\n-->\n <!-- <div class="header-buttons">\n    <button class="header-back-button " round ion-button large icon-left color="secondary" (click)=\'this.slide("prev")\' *ngIf="slideNo > 0">\n  <ion-icon name="arrow-back"></ion-icon>\n</button>\n    <button class="header-forward-button show-only-on-laptop animated pulse" round ion-button large icon-right color="secondary"\n      (click)=\'this.slide("next")\' *ngIf="this.slideNo != 3">\n  <ng-container *ngIf="!deutsch">{{slidesData[nextSlideNo].headline}}</ng-container>\n    <ng-container *ngIf="deutsch">{{slidesData[nextSlideNo].headlineDE}}</ng-container>\n  <ion-icon name="arrow-forward"></ion-icon>\n</button>\n  </div>\n-->\n</ion-header>\n\n\n<ion-content fullscreen="true">\n  \n  \n  \n    <ion-slides class="tabs-area" pager direction="horizontal" (ionSlideDidChange)="slideChanged()" paginationType="progress" effect="coverflow" speed="1250">\n  \n      <ion-slide class="slide-about">\n       <!-- <ion-header no-border>\n          <ion-toolbar>\n             <ion-item class="deutsch-toggle">\n    <ion-toggle [(ngModel)]="deutsch" (tap)="languageChanged()"></ion-toggle>\n      <ion-label>Deutsch</ion-label>\n  \n  </ion-item>\n          </ion-toolbar>\n        </ion-header>\n        -->\n  \n  \n        <page-about></page-about>\n  \n           <!--\n <ion-footer no-border class="slide-footer show-only-on-mobile" style="margin:0 auto">\n          <div class="blur-bg"></div>\n          <ion-toolbar>\n    \n    <button ion-button icon-right color="secondary-text"  clear class="next-slide-button" (click)=\'this.slide("next")\'>\n    <ion-icon name="ios-arrow-back"> </ion-icon> \n    <ion-icon name="ios-arrow-back"> </ion-icon>\n    <ion-icon name="ios-arrow-back"> </ion-icon>   \n    <p> Swipe left</p>\n    <ion-icon name="ios-arrow-back"> </ion-icon>\n    <ion-icon name="ios-arrow-back"> </ion-icon>\n  </button>\n\n          </ion-toolbar>\n        </ion-footer>\n        -->\n\n  \n       \n  \n      </ion-slide>\n  \n  \n      <ion-slide class="slide-skills">\n        <!-- <ion-header no-border>\n          <ion-toolbar>\n            <button ion-button round (click)=\'this.slide("prev")\' outline color="primary-dark" class="slide-up" style="position:fixed; border-color: rgba(13, 58, 71, 0.22);">\n              <ion-icon name="arrow-up"></ion-icon></button>\n          </ion-toolbar>\n        </ion-header>\n        -->\n       <page-skills></page-skills>\n       <!-- <ion-footer no-border class="slide-footer">\n          <div class="blur-bg"></div>\n          <ion-toolbar>\n            <button ion-button icon-right color="secondary-text"  outline class="next-slide-button" round (click)=\'this.slide("next")\' when="sm">\n    My Work\n    <ion-icon name="arrow-down"></ion-icon>\n  </button>\n          </ion-toolbar>\n        </ion-footer>\n  -->\n  \n  \n      </ion-slide>\n  \n  \n  \n      <ion-slide class="slide-work">\n        <!-- <ion-header no-border>\n          <ion-toolbar>\n            <button ion-button round (click)=\'this.slide("prev")\' outline color="primary" class="slide-up" style="position:fixed; border-color:rgba(19, 79, 127, 0.55);">\n              <ion-icon name="arrow-up"></ion-icon></button>\n          </ion-toolbar>\n        </ion-header>\n        -->\n        <page-work></page-work>\n        \n       <!-- <ion-footer no-border class="slide-footer">\n                  <div class="blur-bg"></div>\n          <ion-toolbar>\n            <button ion-button color="primary" icon-right outline class="next-slide-button" round (click)=\'this.slide("next")\' when="sm">\n    Get in touch\n    <ion-icon name="arrow-down"></ion-icon>\n  </button>\n          </ion-toolbar>\n        </ion-footer>\n        -->\n     \n          \n      </ion-slide>\n  \n  \n  \n      <ion-slide class="slide-contact">\n       <!-- <ion-header no-border>\n          <ion-toolbar>\n            <button ion-button round (click)=\'this.slide("prev")\' outline color="primary" class="slide-up" style="position:fixed; border-color: rgba(13, 58, 71, 0.22);">\n              <ion-icon name="arrow-up"></ion-icon></button>\n          </ion-toolbar>\n        </ion-header>\n        -->  \n  <page-contact></page-contact>\n      </ion-slide>\n  \n  \n    </ion-slides>\n  \n<ion-footer>\n    <ion-toolbar>\n        \n    <ion-grid class="slide-bar">\n\n        <ion-row>\n          <ion-col  [class.button-active]="this.slideNo == 0" (tap)="this.slides.slideTo(0)">\n            <ion-row><ion-col><ion-icon name="home" class="icon-color"></ion-icon></ion-col></ion-row>\n            <ion-row><ion-col class="text-color">Home</ion-col></ion-row>\n          </ion-col>\n\n\n          <ion-col  [class.button-active]="this.slideNo == 1" (tap)="this.slides.slideTo(1)">\n              <ion-row><ion-col><ion-icon name="code-working" class="icon-color"></ion-icon></ion-col></ion-row>\n              <ion-row><ion-col class="text-color">Skills</ion-col></ion-row>\n            </ion-col>\n            <ion-col (tap)="this.slides.slideTo(2)" [class.button-active]="this.slideNo == 2">\n                <ion-row><ion-col><ion-icon name="briefcase" class="icon-color"></ion-icon></ion-col></ion-row>\n                <ion-row><ion-col class="text-color">Work</ion-col></ion-row>\n              </ion-col>\n              <ion-col (tap)="this.slides.slideTo(3)" [class.button-active]="this.slideNo == 3">\n                  <ion-row><ion-col><ion-icon name="contact" class="icon-color"></ion-icon></ion-col></ion-row>\n                  <ion-row><ion-col class="text-color">Contact</ion-col></ion-row>\n                </ion-col>\n        </ion-row>\n      </ion-grid>\n                </ion-toolbar>\n              </ion-footer>\n\n  </ion-content>\n  \n  \n  \n  <script>\n    (function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n    })(window,document,\'script\',\'https://www.google-analytics.com/analytics.js\',\'ga\');\n  \n    ga(\'create\', \'UA-42932342-1\', \'auto\');\n    ga(\'send\', \'pageview\');\n  \n  </script>'/*ion-inline-end:"/home/ubuntu/bfolio/src/pages/home/home.html"*/,
        queries: {
            content: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */]('content')
        }
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ContactPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ContactPage = (function () {
    function ContactPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/home/ubuntu/bfolio/src/pages/contact/contact.html"*/'<!--\n  Generated template for the ContactPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<div class="slide-container">\n    <ng-container *ngIf = "!deutsch">\n      <h1>Let\'s discuss your UX</h1>\n<p margin-top>\nAs a UX designer, I can work with you to design usable solutions that your users need.\n</p>\n    </ng-container>\n\n     <ng-container *ngIf = "deutsch">\n      <h1>Lassen Sie uns Ihre UX besprechen</h1>\n<p margin-top>\nAls UX-Designer kann ich mit Ihnen arbeiten, um nutzbare Lösungen zu entwerfen, die Ihre Benutzer benötigen.\n</p>\n    </ng-container>\n\n<div class="social-buttons">\n  <a target="_blank" href="https://m.me/brittikbasu"><button ion-button outline padding color="secondary-text" class="social-btn" round>\n<ion-icon name="chatbubbles" style="font-size:1.5em"></ion-icon>\n</button></a>\n<a target="_blank" href="https://www.linkedin.com/in/brittikbasu"><button ion-button outline padding color="secondary-text" class="social-btn" round>\n<ion-icon name="logo-linkedin" style="font-size:1.5em"></ion-icon>\n</button></a>\n<div class="social-breaker"></div>\n<a target="_blank" href="mailto:hello@brittikbasu.com"><button ion-button outline padding color="secondary-text" class="social-btn" round>\n<ion-icon name="mail" style="font-size:1.5em"></ion-icon>\n</button></a>\n<a target="_blank" href="https://github.com/brittikbasu"><button ion-button outline padding color="secondary-text" class="social-btn" round>\n<ion-icon name="logo-github" style="font-size:1.5em"></ion-icon>\n</button></a>\n</div>\n      <button ion-button outline icon-right color="secondary-text" round (click)="switchTabs(2)" style="margin-top:2.5vh;">\n<ng-container *ngIf = "!deutsch">\nContact Form\n</ng-container>\n<ng-container *ngIf = "deutsch">\nKontakt Formular\n</ng-container>\n<ion-icon name="paper-plane"></ion-icon>\n</button>\n  </div>\n\n\n\n<script>\n(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\nm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n})(window,document,\'script\',\'https://www.google-analytics.com/analytics.js\',\'ga\');\n\nga(\'create\', \'UA-42932342-1\', \'auto\');\nga(\'send\', \'pageview\');\n\n</script>'/*ion-inline-end:"/home/ubuntu/bfolio/src/pages/contact/contact.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SkillsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SkillsPage = (function () {
    function SkillsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SkillsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SkillsPage');
    };
    return SkillsPage;
}());
SkillsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-skills',template:/*ion-inline-start:"/home/ubuntu/bfolio/src/pages/skills/skills.html"*/'<!--\n  Generated template for the SkillsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--\n  Generated template for the SkillsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>skills</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n-->\n<ion-content class="slide-container">\n    <div class="spacer"></div>\n    <div class="spacer"></div>\n  \n  <div *ngIf="!deutsch">\n    <h1>UX Design</h1>\n    <p>\n      As a UX designer, I work with you to design usable solutions that your users need. I develop concepts, personas, storyboards,\n      wireframes and prototypes to clearly communicate these solutions.\n    </p>\n  \n    <h1>Front-end Development</h1>\n  \n    <p>\n      I love bringing my designs to life! Front-end development allows me to do so. I use Angular and Ionic framework to give my\n      web apps a native feel. Progressive web apps are the future!\n    </p>\n  \n  \n    <h1>Brand & Identity Design</h1>\n    <p>\n      My skills in UX Design translate well into understanding how you wish to be perceived as a brand and enables me to craft\n      your distinctive personality across touchpoints.</p>\n  </div>\n  \n  <div *ngIf="deutsch">\n    <h1>UX Design</h1>\n    <p>\n     Als UX-Designer arbeite ich mit Ihnen zusammen, um nutzbare Lösungen zu entwerfen, die Ihre Benutzer benötigen. Ich entwickle konzepte, personen, storyboards, Wireframes und Prototypen, um diese Lösungen klar zu kommunizieren.\n    </p>\n  \n    <h1>Front-end Entwicklung</h1>\n  \n    <p>\n      Ich liebe es, meine Entwürfe zum Leben zu erwecken! Front-End-Entwicklung erlaubt mir, dies zu tun. Ich verwende Angular und Ionische Rahmen, um meine zu geben Web-Apps ein natives Gefühl. Progressive Web-Apps sind die Zukunft!\n    </p>\n  \n  \n    <h1>Brand & Identity Design</h1>\n    <p>\n      Meine Fähigkeiten in UX Design übersetzen gut in das Verständnis, wie du als Marke wahrgenommen werden möchtest und mir erlaubt, zu handeln Ihre unverwechselbare Persönlichkeit über Berührungspunkte.</p>\n  </div>\n  \n  \n  \n    <div class="spacer"></div>\n  \n  \n  \n  </ion-content>\n  \n  <script>\n    (function (i, s, o, g, r, a, m) {\n      i[\'GoogleAnalyticsObject\'] = r;\n      i[r] = i[r] || function () {\n        (i[r].q = i[r].q || []).push(arguments)\n      }, i[r].l = 1 * new Date();\n      a = s.createElement(o),\n        m = s.getElementsByTagName(o)[0];\n      a.async = 1;\n      a.src = g;\n      m.parentNode.insertBefore(a, m)\n    })(window, document, \'script\', \'https://www.google-analytics.com/analytics.js\', \'ga\');\n  \n    ga(\'create\', \'UA-42932342-1\', \'auto\');\n    ga(\'send\', \'pageview\');\n  \n  </script>\n  '/*ion-inline-end:"/home/ubuntu/bfolio/src/pages/skills/skills.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], SkillsPage);

//# sourceMappingURL=skills.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(215);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_skills_skills__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_work_work__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_skills_skills__["a" /* SkillsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_work_work__["a" /* WorkPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work/work.module#WorkPageModule', name: 'WorkPage', segment: 'work', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/skills/skills.module#SkillsPageModule', name: 'SkillsPage', segment: 'skills', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_skills_skills__["a" /* SkillsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_work_work__["a" /* WorkPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/ubuntu/bfolio/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/ubuntu/bfolio/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/home/ubuntu/bfolio/src/pages/about/about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n\n <!--  <div class="intro">\n <hr class="me">\n    <h2>Hey there! I\'d love to be the catalyst to your app\'s success.</h2>\n  <h3>\n   I\'m good at understanding and then communicating this understanding in a way that let\'s us conceptualize features that your users need. Coming from the startup world I know how important it is to design UX in a way that makes business sense and ticks your KPI\'s. There has to be a balance. First comes love and then comes money. A delightful UX makes your users fall in love with your app and then monetization becomes easier. I\'d love to be the catalyst to your app\'s success..\n  </h3>\n<hr class="me">\n  </div>\n  -->\n\n  <script>\n      (function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n      })(window,document,\'script\',\'https://www.google-analytics.com/analytics.js\',\'ga\');\n    \n      ga(\'create\', \'UA-42932342-1\', \'auto\');\n      ga(\'send\', \'pageview\');\n    \n    </script>\n    \n    <ion-content class="slide-container">\n      <div class="spacer"></div>\n        <div class="spacer"></div>\n    \n    <div *ngIf="!deutsch">\n    \n      <!--<h1 margin-bottom>Hey there! I\'d love to be the catalyst to your app\'s success.</h1>-->\n       <h1 padding-left padding-right>Hey there! I\'m a UX designer who loves to code :)</h1>\n    \n      <p margin-top padding-left padding-right>\n       I\'m good at understanding problems and then communicating this understanding in a way that let\'s us conceptualize features that your users need.\n       Coming from the startup world I know how important it is to design UX in a way that makes business sense and ticks your KPI\'s.\n       There has to be a balance. First comes love and then comes money.\n       A delightful UX makes your users fall in love with your app.<!-- and then monetization becomes easier.\n       It\'s all about serving value to users that\'s easy to use or intuitive. This keeps them coming back.\n      --></p>\n    </div>\n    <div *ngIf="deutsch">\n    <h1 padding-left padding-right>Sie da! Ich bin ein UX Designer, der liebt zu Code :)\n    </h1>\n    \n     <p margin-top padding-left padding-right>\n      Ich bin gut in Probleme zu verstehen und dann dieses Verständnis in einer Art und Weise zu kommunizieren, die uns lassen Sie uns Merkmale konzeptionieren, die Ihre Benutzer benötigen.\n      Von der Startup-Welt komme ich, wie wichtig es ist, UX in einer Weise zu entwerfen, die Geschäftssinn macht und Ihre KPIs tickt.\n      Es muss eine Balance geben. Zuerst kommt Liebe und kommt dann Geld.\n      Eine herrliche UX macht Ihre Benutzer verlieben sich in Ihre App.<!-- and then monetization becomes easier.\n       It\'s all about serving value to users that\'s easy to use or intuitive. This keeps them coming back.\n      --></p>\n    </div>\n    </ion-content>\n'/*ion-inline-end:"/home/ubuntu/bfolio/src/pages/about/about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the WorkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var WorkPage = (function () {
    function WorkPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WorkPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WorkPage');
    };
    return WorkPage;
}());
WorkPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-work',template:/*ion-inline-start:"/home/ubuntu/bfolio/src/pages/work/work.html"*/'<!--\n  Generated template for the WorkPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<div class="slide-container">\n    \n      <div class="spacer"></div>\n      <div class="spacer"></div>\n    \n      <ion-card [navPush]="bravecamPage">\n    \n        <div class="card-info-container">\n          <div class="card-title">Brave Cam\n            <ion-icon name="arrow-forward" color="secondary-light" class="card-arrow"></ion-icon>\n          </div>\n                <div class="card-subtitle" *ngIf="!deutsch">Android app to fight racism</div>\n          <div class="card-subtitle" *ngIf="deutsch">App, um Rassismus zu bekämpfen</div>\n        </div>\n    \n        <img class="card-image" src="assets/img/card-brave-cam.png" />\n    \n        <div class="card-button">\n     <button ion-button full color="secondary-light" class="cover" *ngIf="!deutsch">Know More</button>\n        <button ion-button full color="secondary-light" class="cover" *ngIf="deutsch">Mehr wissen</button>    </div>\n    \n      </ion-card>\n    \n      <ion-card [navPush]="chaldiyePage">\n    \n        <div class="card-info-container">\n          <div class="card-title">\n            <div class="view-history">\n              <div>\n                Chaldiye\n                <ion-icon name="arrow-forward" color="secondary-light" class="card-arrow"></ion-icon>\n              </div>\n            </div>\n          </div>\n          <div class="card-subtitle" *ngIf= "!deutsch">App for an Adventure Startup</div>\n                <div class="card-subtitle" *ngIf= "deutsch">App für ein Abenteuer-Startup</div>\n    \n        </div>\n    \n        <img class="card-image" src="assets/img/card-huntfactor.jpg" />\n    \n        <div class="card-button">\n     <button ion-button full color="secondary-light" class="cover" *ngIf="!deutsch">Know More</button>\n        <button ion-button full color="secondary-light" class="cover" *ngIf="deutsch">Mehr wissen</button>    </div>\n    \n      </ion-card>\n    \n      <ion-card [navPush]="polysparesPage">\n    \n        <div class="card-info-container">\n          <div class="card-title">Polyspares\n            <ion-icon name="arrow-forward" color="secondary-light" class="card-arrow"></ion-icon>\n          </div>\n          <div class="card-subtitle"*ngIf="!deutsch">Website for spares exporter</div>\n          <div class="card-subtitle"*ngIf="deutsch">Webseite für Ersatzteile Exporteur</div>\n        </div>\n    \n        <img class="card-image" src="assets/img/card-polyspares.jpg" />\n    \n    <div class="card-button">\n        <button ion-button full color="secondary-light" class="cover" *ngIf="!deutsch">Know More</button>\n        <button ion-button full color="secondary-light" class="cover" *ngIf="deutsch">Mehr wissen</button>\n    \n    </div>\n    \n      </ion-card>\n    \n       <ion-card [navPush]="polizeigewaltPage">\n        <div class="card-info-container">\n          <div class="card-title">Polizeigewalt\n            <ion-icon name="arrow-forward" color="secondary-light" class="card-arrow"></ion-icon>\n          </div>\n          <div class="card-subtitle" *ngIf = "!deutsch">Logo design for a non-profit</div>\n          <div class="card-subtitle" *ngIf = "deutsch">Logo-Design für eine Non-Profit</div>\n    \n        </div>\n        <img class="card-image" src="assets/img/card-polizei-gewalt.jpg" />\n    \n        <div class="card-button">\n     <button ion-button full color="secondary-light" class="cover" *ngIf="!deutsch">Know More</button>\n        <button ion-button full color="secondary-light" class="cover" *ngIf="deutsch">Mehr wissen</button>      </div>\n      </ion-card>\n    <div class="spacer"></div>\n    <div class="spacer"></div>\n    \n    \n    </div>\n    \n    \n    \n    <script>\n      (function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n      })(window,document,\'script\',\'https://www.google-analytics.com/analytics.js\',\'ga\');\n    \n      ga(\'create\', \'UA-42932342-1\', \'auto\');\n      ga(\'send\', \'pageview\');\n    \n    </script>'/*ion-inline-end:"/home/ubuntu/bfolio/src/pages/work/work.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], WorkPage);

//# sourceMappingURL=work.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map