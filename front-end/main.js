(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"workshopDescription\" class=\"jumbotron\">\n  <h1 class=\"display-4\">{{ title }}</h1>\n  <p class=\"lead\">{{ description }}</p>\n</div>\n<div class=\"row mt4\">\n  <div class=\"col pl-4\">\n    <app-calendar></app-calendar>\n  </div>\n</div>\n\n<app-sessions-list></app-sessions-list>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sessions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sessions.service */ "./src/app/sessions.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(sessionsService) {
        this.sessionsService = sessionsService;
        this.title = 'LWT Sessions Scheduler';
        this.description = 'View all LWT events and add the ones you are most interested in to your calendar.';
        //Populate the sessions data to make it available for the rest
        //of the application
        this.sessionsService.getSessions().subscribe();
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sessions_service__WEBPACK_IMPORTED_MODULE_2__["SessionsService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _limit_to_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./limit-to.pipe */ "./src/app/limit-to.pipe.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/calendar/calendar.component.ts");
/* harmony import */ var _sessions_list_sessions_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sessions-list/sessions-list.component */ "./src/app/sessions-list/sessions-list.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_7__["CalendarComponent"],
                _sessions_list_sessions_list_component__WEBPACK_IMPORTED_MODULE_8__["SessionsListComponent"],
                _limit_to_pipe__WEBPACK_IMPORTED_MODULE_5__["LimitToPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            entryComponents: [],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/calendar/calendar.component.css":
/*!*************************************************!*\
  !*** ./src/app/calendar/calendar.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".date {\n  font-weight: 400;\n  opacity: 0.5;\n}\n\n#calendarDateHeader:hover {\n  background-color: #f8f9fa;\n}\n\n.btn{\n  white-space:normal !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbiNjYWxlbmRhckRhdGVIZWFkZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuXG4uYnRue1xuICB3aGl0ZS1zcGFjZTpub3JtYWwgIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/calendar/calendar.component.html":
/*!**************************************************!*\
  !*** ./src/app/calendar/calendar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center pb-1\">\n  <h1>My Calendar</h1>\n</div>\n\n<div class=\"row pb-4 pr-2 justify-content-center\">\n  <div *ngIf=\"!calendarEvents || calendarEvents.length == 0\">\n    <h4>Your calendar is currently empty</h4>\n  </div>\n  <div\n    [ngClass]=\"{'col-sm-4': true, 'text-center': true, 'border-right': !isLast}\"\n    *ngFor=\"let calendarDay of calendarEvents; last as isLast\"\n  >\n    <div id=\"calendarDateHeader\" class=\"row\">\n      <h5 class=\"col-12\">{{ calendarDay.day | date : 'EEEE' : timezone }}</h5>\n      <span class=\"col-12 date\">{{ calendarDay.day | date : 'MMM d' : timezone }}</span>\n    </div>\n\n    <button\n      type=\"button\"\n      [ngClass]=\"{'btn': true , 'btn-sm': true, 'btn-outline-info': !session.hasConflict, 'btn-outline-danger': session.hasConflict, 'col-sm-12': true, 'mt-2': true, 'mb-2': true}\"\n      *ngFor=\"let session of calendarDay.sessions\"\n    >\n      {{ session.startTime | date : 'hh:mm a' : timezone }}: {{ session.name }}\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/calendar/calendar.component.ts":
/*!************************************************!*\
  !*** ./src/app/calendar/calendar.component.ts ***!
  \************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sessions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sessions.service */ "./src/app/sessions.service.ts");
/* harmony import */ var _shared_session_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/session-util */ "./src/app/shared/session-util.ts");




/**
* Component responsible for constructing the view of sessions that have been
* added to the user's calendar
*/
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(sessionsService) {
        this.sessionsService = sessionsService;
        this.timezone = 'PST';
    }
    /**
    * Component responsible for setting the events currently in the calendar
    */
    CalendarComponent.prototype.setCalendarEvents = function (sessions) {
        this.filterSessionsInCalendar(sessions);
    };
    /**
    * Filter sessions depending on whether or not they are in the calendar
    * @param sessions - the sessions to be filtered
    */
    CalendarComponent.prototype.filterSessionsInCalendar = function (sessions) {
        var filteredSessions = sessions.filter(function (session) { return session.isSelected; });
        //Group sessions by the day when they occur, ignoring the time
        var sessionsByDay = filteredSessions.reduce(function (obj, session) {
            return _shared_session_util__WEBPACK_IMPORTED_MODULE_3__["default"].groupSessions(obj, session);
        }, {});
        //Create SessionsByDay and sort sessions
        var sortedSessions = Object.keys(sessionsByDay)
            .map(function (key) { return _shared_session_util__WEBPACK_IMPORTED_MODULE_3__["default"].sortGroupedSessions(key, sessionsByDay); });
        var sortedGroups = _shared_session_util__WEBPACK_IMPORTED_MODULE_3__["default"].sortGroups(sortedSessions);
        this.calendarEvents = sortedGroups;
    };
    /**
    * Upon initialization, retrieve all the sessions for display
    */
    CalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setCalendarEvents(this.sessionsService.ghcSessions);
        this.sessionsUpdateSubscription = this.sessionsService
            .ghcSessionsChange.subscribe(function (sessions) {
            return _this.setCalendarEvents(sessions);
        });
    };
    CalendarComponent.prototype.ngOnDestroy = function () {
        this.sessionsUpdateSubscription.unsubscribe();
    };
    CalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.css */ "./src/app/calendar/calendar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sessions_service__WEBPACK_IMPORTED_MODULE_2__["SessionsService"]])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/limit-to.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/limit-to.pipe.ts ***!
  \**********************************/
/*! exports provided: LimitToPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LimitToPipe", function() { return LimitToPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LimitToPipe = /** @class */ (function () {
    function LimitToPipe() {
    }
    LimitToPipe.prototype.transform = function (value, args) {
        var limit = args ? args : 500;
        var trail = '...';
        return value.length > limit ? value.substring(0, limit) + trail : value;
    };
    LimitToPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'limitTo' })
    ], LimitToPipe);
    return LimitToPipe;
}());



/***/ }),

/***/ "./src/app/mock-sessions-list.ts":
/*!***************************************!*\
  !*** ./src/app/mock-sessions-list.ts ***!
  \***************************************/
/*! exports provided: SESSIONSLIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SESSIONSLIST", function() { return SESSIONSLIST; });
var SESSIONSLIST = [{ "startTime": "6:00 PM", "location": "Mainstage: Castro Theatre", "isSelected": 0, "topic": "N/A", "hasConflict": 0, "startDate": "THURSDAY, FEBRUARY 28", "id": 3, "speakers": [], "name": "Opening Address & Tech Crawl", "emcee": "N/A" }, { "startTime": "4:30 PM", "location": "Mainstage: Castro Theatre", "isSelected": 1, "topic": "N/A", "hasConflict": 0, "startDate": "THURSDAY, FEBRUARY 28", "id": 1, "speakers": [], "name": "Badge Pickup", "emcee": "N/A" }, { "startTime": "10:00 AM", "location": "TOAD HALL", "isSelected": 0, "topic": "Hardware & Data", "hasConflict": 0, "startDate": "SATURDAY, MARCH 2", "id": 77, "speakers": [{ "name": "Jo Balme", "position": "Embedded Software Engineer, Zipline International" }], "name": "Hit the Ground Flying: Evolving Life-Saving Hardware in the Field", "emcee": "Roz Harris, Recruiting Manager (Product, Design, & Security), Slack" }, { "startTime": "9:40 AM", "location": "Mainstage: Castrotheatre", "isSelected": 0, "topic": "GLORIOUS MORNING KEYNOTES", "hasConflict": 0, "startDate": "FRIDAY, MARCH 1", "id": 7, "speakers": [{ "name": "Andrea Minkow", "twitter": "@andreaminkow", "position": "Founder, Andrea Minkow Consulting" }, { "name": "Danielle Moodie-Mills", "twitter": "@DeeTwoCents", "position": "VP, SKDK & Host of #WokeAF on Sirius XM" }], "name": "Let’s Get This Summit Started", "emcee": "N/A" }, { "startTime": "2:45 PM", "location": "THE CAFE", "isSelected": 0, "topic": "Democracy & Technology", "hasConflict": 0, "startDate": "SATURDAY, MARCH 2", "id": 115, "speakers": [{ "name": "Britt Binler", "twitter": "@brittbinler", "position": "Software Engineer, The New York Times" }], "name": "Live-Coverage Technology at The New York Times", "emcee": "Adi Barreto, Senior Account Executive, Textio and Dom Brassey Brand Strategy, Mapbox" }, { "startTime": "3:15 PM", "location": "THE CAFE", "isSelected": 0, "topic": "Democracy & Technology", "hasConflict": 0, "startDate": "SATURDAY, MARCH 2", "id": 117, "speakers": [{ "name": "Jenny Lin", "twitter": "@_jennylin", "position": "Engineering Manager, Facebook" }], "name": "Working Together for a Safer Internet", "emcee": "Adi Barreto, Senior Account Executive, Textio and Dom Brassey Brand Strategy, Mapbox" }, { "startTime": "2:00 PM", "location": "TOAD HALL", "isSelected": 0, "topic": "Engineering the UX: Testing + Quality", "hasConflict": 0, "startDate": "FRIDAY, MARCH 1", "id": 47, "speakers": [{ "name": "Erica Ehrhardt", "twitter": "@EricaEEhrhardt", "position": "Software Engineer, Thumbtack" }], "name": "Engineering Around ADHD", "emcee": "Rebecca Abara, Senior Technical Project Manager & Agile Coach, Etsy" }, { "startTime": "2:30 PM", "location": "BADLANDS", "isSelected": 1, "topic": "Future Trends & Innovation", "hasConflict": 0, "startDate": "SATURDAY, MARCH 2", "id": 122, "speakers": [{ "name": "Joanna Dillon", "twitter": "@joannadillon", "position": "Responsible Minerals & Supply Chain Sustainability, Cisco" }], "name": "How Blockchain Will Transform Supply Chain — From Mine to Design", "emcee": "KC Choice, Trust & Safety Fraud Specialist, Patreon and Rachel Ho, Global Product Marketing Manager, SAP Analytics" }, { "startTime": "2:30 PM", "location": "include.io Theatre", "isSelected": 1, "topic": "Get Your Skills On: Career Development", "hasConflict": 0, "startDate": "SATURDAY, MARCH 2", "id": 130, "speakers": [{ "name": "Sarah Yang", "twitter": "@cr8_love", "position": "Talent Content Marketing Manager, Workday" }], "name": "5 Steps for Hacking Creativity", "emcee": "Stacey Stevenson, Managing Director, Contact Center Experience, Charles Schwab and Lyn Muldrow, UI Engineer & Writer" }, { "startTime": "10:30 AM", "location": "TOAD HALL", "isSelected": 0, "topic": "Hardware & Data", "hasConflict": 0, "startDate": "SATURDAY, MARCH 2", "id": 79, "speakers": [{ "name": "Mia Gil Epner", "position": "Software Engineer, Expanse" }], "name": "GDPR & Attribution: A Dive into WHOIS Data", "emcee": "Roz Harris, Recruiting Manager (Product, Design, & Security), Slack" }, { "startTime": "6:00 PM", "location": "The Cafe - 2369 Market Street", "isSelected": 1, "topic": "N/A", "hasConflict": 0, "startDate": "FRIDAY, MARCH 1", "id": 69, "speakers": [], "name": "Afterparty", "emcee": "N/A" }, { "startTime": "3:00 PM", "location": "TOAD HALL", "isSelected": 0, "topic": "Engineer as Architect: Code + Infrastructure", "hasConflict": 0, "startDate": "SATURDAY, MARCH 2", "id": 110, "speakers": [{ "name": "Avani Wildani", "twitter": "@peaceea", "position": "Assistant Professor of Math & Computer Science, Emory University" }], "name": "Neural Computing 101", "emcee": "Leslie O'Harrow, Tax Partner, PwC" }, { "startTime": "9:50 AM", "location": "Mainstage: Castrotheatre", "isSelected": 0, "topic": "GLORIOUS MORNING KEYNOTES", "hasConflict": 0, "startDate": "FRIDAY, MARCH 1", "id": 8, "speakers": [{ "name": "Paola Ramos", "twitter": "@paoramos", "position": "Host, VICE’s “Latinx” & Contributor, Telemundo" }, { "name": "Tammy Baldwin", "twitter": "@SenatorBaldwin", "position": "US Senator, Wisconsin" }], "name": "Fireside Chat", "emcee": "Andrea Minkow, Founder, Andrea Minkow Consulting and Danielle Moodie-Mills, VP, SKDK & Host of #WokeAF on Sirius XM" }, { "startTime": "3:00 PM", "location": "Mainstage: Castrotheatre", "isSelected": 0, "topic": "AFTERNOON KEYNOTES", "hasConflict": 0, "startDate": "FRIDAY, MARCH 1", "id": 62, "speakers": [{ "name": "Alicia Garza", "twitter": "@aliciagarza", "position": "Principal, Black Futures Lab & Co-founder, #BlackLivesMatter" }], "name": "Fireside Chat", "emcee": "N/A" }, { "startTime": "11:45 AM", "location": "Mainstage: Castrotheatre", "isSelected": 1, "topic": "SATURDAY LATE MORNING KEYNOTES", "hasConflict": 0, "startDate": "SATURDAY, MARCH 2", "id": 94, "speakers": [{ "name": "Stephenie Landry", "twitter": "@stlandry", "position": "VP of Amazon Prime Now, AmazonFresh & Restaurants" }], "name": "Better Together: Merging the Strengths of Amazon & Whole Foods Market", "emcee": "Andrea Minkow, Founder, Andrea Minkow Consulting and Danielle Moodie-Mills, VP, SKDK & Host of #WokeAF on Sirius XM" }, { "startTime": "3:00 PM", "location": "THE CAFE", "isSelected": 0, "topic": "Career Lessons & Pro-Tips", "hasConflict": 0, "startDate": "FRIDAY, MARCH 1", "id": 57, "speakers": [{ "name": "Faith Ng'etich", "twitter": "@faith__ngetich", "position": "Software Developer, Andela" }], "name": "Crowdsourced Learning as Part of a Distributed Team", "emcee": "Zen Mak, Head of Staffing, X, The Moonshot Factory" }, { "startTime": "2:15 PM", "location": "Mainstage: Castrotheatre", "isSelected": 0, "topic": "AFTERNOON KEYNOTES", "hasConflict": 0, "startDate": "FRIDAY, MARCH 1", "id": 60, "speakers": [{ "name": "Cindi Leive", "twitter": "@cindi_leive", "position": "Senior Fellow, USC, Former Editor, Glamour & Journalist" }, { "name": "Moj Mahdara", "twitter": "@mojism", "position": "Founder & CEO, Beautycon" }, { "name": "Amy Taylor", "position": "President & CMO, Red Bull North America" }, { "name": "Diedra Nelson", "position": "Chief Financial Officer, The Wing" }], "name": "Fireside Chat: Leadership Lessons, Persistence & How to Become a Boss", "emcee": "N/A" }, { "startTime": "2:15 PM", "location": "TOAD HALL", "isSelected": 0, "topic": "Engineering the UX: Testing + Quality", "hasConflict": 0, "startDate": "FRIDAY, MARCH 1", "id": 48, "speakers": [{ "name": "Anais Farges", "position": "Head of IT, Instacart" }], "name": "Building Out IT systems at Scale", "emcee": "Rebecca Abara, Senior Technical Project Manager & Agile Coach, Etsy" }];


/***/ }),

/***/ "./src/app/sessions-list/sessions-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/sessions-list/sessions-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nlc3Npb25zLWxpc3Qvc2Vzc2lvbnMtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sessions-list/sessions-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/sessions-list/sessions-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center pl-2 pb-1\">\n  <h1>LWT Sessions</h1>\n</div>\n\n<div class=\"row sticky-top float-right pr-4\">\n  <button\n    class=\"btn btn-secondary sticky-top float-right\"\n    (click)=\"onScroll('Thursday')\"\n  >\n    Go to Thursday\n  </button>\n  <button\n    class=\"btn btn-secondary\"\n    (click)=\"onScroll('Friday')\"\n  >\n    Go to Friday\n  </button>\n  <button\n    class=\"btn btn-secondary\"\n    (click)=\"onScroll('Saturday')\"\n  >\n    Go to Saturday\n  </button>\n  <button\n    class=\"btn btn-secondary\"\n    (click)=\"onScroll('workshopDescription')\"\n  >\n    Back to top\n  </button>\n</div>\n\n<div data-id=\"{{ sessionsGroup.day | date: 'EEEE' : timezone }}\" class=\"pt-4\" *ngFor=\"let sessionsGroup of sessionsByDay\">\n  <div class=\"row pl-4\">\n    <h2>{{ sessionsGroup.day | date : 'EEEE' : timezone }}</h2>\n  </div>\n\n  <div class=\"row p-1\">\n    <div\n      *ngFor=\"let session of sessionsGroup.sessions; let i = index\"\n      class=\"col-sm-4 mt-4\"\n    >\n      <div class=\"card border-secondary\">\n        <h5 class=\"card-header\">\n          {{ session.name }}\n        </h5>\n\n        <div class=\"card-body\">\n          <h6 class=\"card-subtitle mb-2 text-muted\">\n            <span class=\"oi oi-clock\" title=\"Time\" aria-hidden=\"true\"></span>\n              Start time: {{ session.startTime | date : 'hh:mm a' : timezone }}\n            <span class=\"oi oi-map-marker pl-2\"\n              *ngIf=\"session.location\"\n              title=\"Location\"\n              aria-hidden=\"true\"\n            ></span>\n              {{ session.location ? session.location : ''}}\n          </h6>\n\n          <span class=\"badge badge-info\" *ngIf=\"session.topic\">\n            {{ session.topic ? session.topic : '' }}\n          </span>\n\n          <div class=\"card-text pt-2\" *ngIf=\"session.speakers\">\n            Speaker(s):\n\n            <div class=\"mt-2 col-12 text-center\" *ngFor=\"let speaker of session.speakers\">\n              <p class=\"mb-0\">\n                <span\n                  class=\"oi oi-person pr-2\"\n                  title=\"Speaker\"\n                  aria-hidden=\"true\"\n                ></span>\n                {{ speaker.name }}\n              </p>\n              <p class=\"mb-0\" *ngIf=\"speaker.position\">\n                {{ speaker.position }}\n              </p>\n              <a *ngIf=\"speaker.twitter\" href=\"https://www.twitter.com/{{speaker.twitter}}\" target=\"_blank\">\n                @{{ speaker.twitter }}\n              </a>\n\n            </div>\n          </div>\n\n\n          <div class=\"row mt-1\">\n            <div class=\"col-12\">\n              <span class=\"float-right\">\n                <button\n                  *ngIf=\"!session.isSelected\"\n                  [ngClass]=\"{'btn': true, 'btn-primary': true, 'btn-sm': true, 'disabled': processingSession === session.id}\"\n                  (click)=\"addToCalendar(session.id)\"\n                >\n                  Add to Calendar\n                </button>\n                <button\n                  [id] = \"'removeFromCalendar' + session.id\"\n                  *ngIf=\"session.isSelected\"\n                  [ngClass]=\"{'btn': true, 'btn-danger': true, 'btn-sm': true, 'disabled': processingSession === session.id}\"\n                  (click)=\"removeFromCalendar(session.id)\"\n                >\n                  Remove from Calendar\n                </button>\n              </span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"card-footer text-muted\" *ngIf=\"session.hasConflict\">\n            <i>This session conflicts with another on your calendar</i>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sessions-list/sessions-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/sessions-list/sessions-list.component.ts ***!
  \**********************************************************/
/*! exports provided: SessionsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsListComponent", function() { return SessionsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sessions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sessions.service */ "./src/app/sessions.service.ts");
/* harmony import */ var _shared_session_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/session-util */ "./src/app/shared/session-util.ts");




/**
* Component responsible for the logic to display the list of GHC sessions
*/
var SessionsListComponent = /** @class */ (function () {
    function SessionsListComponent(sessionsService) {
        this.sessionsService = sessionsService;
        this.timezone = 'PST';
    }
    /**
    * Groups and sets the sessions to the screen
    */
    SessionsListComponent.prototype.setSessions = function (sessions) {
        var sessionsByDay = sessions.reduce(function (obj, session) {
            return _shared_session_util__WEBPACK_IMPORTED_MODULE_3__["default"].groupSessions(obj, session);
        }, {});
        //Create SessionsByDay and sort sessions
        var sortedSessions = Object.keys(sessionsByDay)
            .map(function (key) { return _shared_session_util__WEBPACK_IMPORTED_MODULE_3__["default"].sortGroupedSessions(key, sessionsByDay); });
        var sortedGroups = _shared_session_util__WEBPACK_IMPORTED_MODULE_3__["default"].sortGroups(sortedSessions);
        this.sessionsByDay = sortedGroups;
    };
    /**
    * Upon initialization, retrieve all the sessions for display
    */
    SessionsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setSessions(this.sessionsService.ghcSessions);
        this.sessionsUpdateSubscription = this.sessionsService
            .ghcSessionsChange.subscribe(function (sessions) {
            _this.setSessions(sessions);
            _this.processingSession = undefined;
        });
    };
    SessionsListComponent.prototype.ngOnDestroy = function () {
        this.sessionsUpdateSubscription.unsubscribe();
    };
    /**
    * Scrolls the window back to the workshopDescription element
    */
    SessionsListComponent.prototype.onScroll = function (elementId) {
        window.document.getElementById(elementId).scrollIntoView();
    };
    /**
    * Adds the session to the calendar and refreshes the page
    * @param sessionId - the if of the session being added to the calendar
    */
    SessionsListComponent.prototype.addToCalendar = function (sessionId) {
        this.processingSession = sessionId;
        this.sessionsService.updateSession(sessionId, true).subscribe(function (_) {
            console.log("Added session id=" + sessionId + " to calendar");
        });
    };
    /**
    * Removes the session from the calendar and refreshes the page
    * @param sessionId - the if of the session being removed from the calendar
    */
    SessionsListComponent.prototype.removeFromCalendar = function (sessionId) {
        this.processingSession = sessionId;
        this.sessionsService.updateSession(sessionId, false).subscribe(function (_) {
            console.log("Removed session id=" + sessionId + " from calendar");
        });
    };
    SessionsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sessions-list',
            template: __webpack_require__(/*! ./sessions-list.component.html */ "./src/app/sessions-list/sessions-list.component.html"),
            styles: [__webpack_require__(/*! ./sessions-list.component.css */ "./src/app/sessions-list/sessions-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sessions_service__WEBPACK_IMPORTED_MODULE_2__["SessionsService"]])
    ], SessionsListComponent);
    return SessionsListComponent;
}());



/***/ }),

/***/ "./src/app/sessions.service.ts":
/*!*************************************!*\
  !*** ./src/app/sessions.service.ts ***!
  \*************************************/
/*! exports provided: SessionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsService", function() { return SessionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _mock_sessions_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mock-sessions-list */ "./src/app/mock-sessions-list.ts");






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
/**
* Service responsible for performing operations on GHC sessions
*/
var SessionsService = /** @class */ (function () {
    function SessionsService(http) {
        var _this = this;
        this.http = http;
        this.getSessionsUrl = undefined;
        this.updateSessionsBaseUrl = undefined;
        this.ghcSessionsChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.ghcSessions = [];
        this.sessionsUpdateSubscription = this.ghcSessionsChange
            .subscribe(function (sessions) { return _this.ghcSessions = sessions; });
    }
    /**
    * Get all GHC Sessions from the server
    */
    SessionsService.prototype.getSessions = function () {
        var _this = this;
        if (!this.getSessionsUrl) {
            var sessions = this.transformResponse(_mock_sessions_list__WEBPACK_IMPORTED_MODULE_5__["SESSIONSLIST"]);
            this.ghcSessionsChange.next(sessions);
            console.log(sessions);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(sessions);
        }
        return this.http.get(this.getSessionsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) { return _this.log('fetched sessions'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return _this.transformResponse(response); }), 
        //Propagate change in the sessions to all subscribers
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (sessions) { return _this.ghcSessionsChange.next(sessions); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getSessions', [])));
    };
    SessionsService.prototype.transformResponse = function (response) {
        return response.map(
        //Convert server session to the format that the front end expects
        function (serverSession) {
            var startTime = serverSession.startDate + ", 2019 " + serverSession.startTime + " PST";
            serverSession.startTime = new Date(startTime);
            serverSession.topic = serverSession.topic === 'N/A' ? undefined : serverSession.topic;
            serverSession.location = serverSession.location === 'N/A' ? undefined : serverSession.location;
            serverSession.isSelected ? serverSession.isSelected = true
                : serverSession.isSelected = false;
            serverSession.hasConflict ? serverSession.hasConflict = true
                : serverSession.hasConflict = false;
            if (serverSession.speakers && serverSession.speakers.length == 0) {
                serverSession.speakers = undefined;
            }
            else {
                for (var speaker in serverSession.speakers) {
                    serverSession.speakers.forEach(function (speaker) {
                        if (speaker.twitter) {
                            speaker.twitter = speaker.twitter.replace('@', '');
                        }
                    });
                }
            }
            return serverSession;
        });
    };
    /**
    * Update the GHC Session in question to add it to or remove it from
    * the calendar
    * @param sessionId - identifier of the session being updated
    * @param isSelected - whether we are adding or removing the session from
    * the calendar
    */
    SessionsService.prototype.updateSession = function (sessionId, isSelected) {
        var _this = this;
        var updateInfo = {
            isSelected: isSelected ? 1 : 0
        };
        return this.http.post(this.updateSessionsBaseUrl.replace('{id}', sessionId.toString()), updateInfo, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("updated session id=" + sessionId); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.getSessions().subscribe(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateSession')));
    };
    /**
    * Handle Http operation that failed. Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
    SessionsService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            _this.log(operation + " failed: " + error);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    /**
    * Logs a message. Currently using the console.
    * Could log by sending it to the server instead.
    * @param message - the message being logged
    */
    SessionsService.prototype.log = function (message) {
        console.log(message);
    };
    SessionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SessionsService);
    return SessionsService;
}());



/***/ }),

/***/ "./src/app/sessionsByDay.ts":
/*!**********************************!*\
  !*** ./src/app/sessionsByDay.ts ***!
  \**********************************/
/*! exports provided: SessionsByDay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsByDay", function() { return SessionsByDay; });
var SessionsByDay = /** @class */ (function () {
    function SessionsByDay() {
    }
    return SessionsByDay;
}());



/***/ }),

/***/ "./src/app/shared/session-util.ts":
/*!****************************************!*\
  !*** ./src/app/shared/session-util.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sessionsByDay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sessionsByDay */ "./src/app/sessionsByDay.ts");

var SessionUtil = /** @class */ (function () {
    function SessionUtil() {
    }
    /**
    * Group sessions by the day when they occur (ignoring the time)
    * @param groupings - the object to hold the groupings
    * @param session - the session to be added to the group
    */
    SessionUtil.groupSessions = function (groupings, session) {
        var sessionDate = new Date(session.startTime);
        sessionDate.setHours(11, 59, 0, 0);
        var key = sessionDate.toString();
        groupings[key] = groupings[key] || [];
        groupings[key].push(session);
        return groupings;
    };
    /**
    * Sort the sessions under a group by startDate. If the start dates are the
    * same, then sort by endDate
    * @param key - the key of the group
    * @param sessionsByDay - the group that holds the session
    */
    SessionUtil.sortGroupedSessions = function (key, sessionsByDay) {
        var sessionGroup = new _sessionsByDay__WEBPACK_IMPORTED_MODULE_0__["SessionsByDay"]();
        sessionGroup.day = new Date(key);
        sessionGroup.sessions = sessionsByDay[key].sort(function (session1, session2) {
            return session1.startTime - session2.startTime;
        });
        return sessionGroup;
    };
    /**
    * Sort the groups of sessions by the day that they are for
    * @param sessionsByDay - An array of session groups
    */
    SessionUtil.sortGroups = function (sessionsByDay) {
        return sessionsByDay.sort(function (group1, group2) {
            var day1 = +group1.day;
            var day2 = +group2.day;
            return day1 - day2;
        });
    };
    return SessionUtil;
}());
/* harmony default export */ __webpack_exports__["default"] = (SessionUtil);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/agathao/Documents/LWT/front-end/SessionsScheduler/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map