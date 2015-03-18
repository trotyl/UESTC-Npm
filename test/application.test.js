var assert = require('assert');
var _ = require('lodash');

var Course = require('../src/course');
var uestc = require('../src/uestc');


describe('Application ', function () {
    var app;

    beforeEach(function () {
        app = uestc();
    });

    describe('#.ctor()', function () {
        it('should create the right object', function () {
            assert.equal(0, _.keys(app._users_).length);
            assert.equal(0, _.keys(app._courses_).length);
            assert.equal(0, _.keys(app.notices).length);
            assert.equal(null, app.current);
            assert.equal(false, !app._carrier_);
        });
    });

    describe('#__broke__()', function () {
        it('should be able to login', function (done) {
            app.__broke__('2012019050020', '811073')
                .then(function (user) {
                    assert.equal('2012019050020', user._number_);
                    done();
                });
        });
    });

    describe('#__searchForCoursesLocal__()', function () {
        var course0, course1, course2;

        beforeEach(function () {
            course0 = new Course('A');
            course0.title = 'AA';
            course0.instructor = 'AAA';
            course1 = new Course('B');
            course1.title = 'BB';
            course1.instructor = 'BBB';
            course2 = new Course('C');
            course2.title = 'CC';
            course2.instructor = 'CCC';
            app._courses_ = {'A': course0, 'B': course1, 'C': course2};
        });

        it('should be able to get local meets options', function (done) {
            app.__searchForCoursesLocal__({title: 'B', instructor: 'B'})
                .nodeify(function (err, courses) {
                    assert.equal(1, courses.length);
                    assert.equal(course1, courses[0]);
                    done();
                });
        });
    });

    describe('#identify()', function () {
        it('should generate the right user', function () {
            var user = app.identify('2012019050031', '12345678');
            assert.equal('2012019050031', user._number_);
            assert.equal(user, app._users_[user._number_]);
        });

        it('should generate the right user when wait', function (done) {
            var user = app.identify('2012019050020', '811073', true).nodeify(function (err, backUser) {
                assert.equal('2012019050020', backUser._number_);
                done();
            });
        });

        it('should keep the same user', function () {
            var user1 = app.identify('2012019050031', '12345678');
            var user2 = app.identify('2012019050031', '12345678');
            assert.equal(user1, user2);
        })
    });

    describe('#searchForCourses()', function () {
        it('should get the courses', function (done) {
            var options = {
                instructor: '徐世中'
            };
            app.__broke__('2012019050020', '811073').nodeify(function () {
                app.searchForCourses(options).nodeify(function (err, courses) {
                    assert.equal('徐世中', courses[0].instructor);
                    done();
                });
            });
        });
    });

    describe('#reset()', function () {
        it('should reset all the properties', function () {
            app.reset();
            assert.equal(null, app._users_.current);
        });
    });
});