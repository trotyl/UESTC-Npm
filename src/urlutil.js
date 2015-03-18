// 外部依赖


// 构造函数

function UrlUtil() {
}

module.exports = UrlUtil;


// 静态字段


// 静态方法

UrlUtil.getAppSearchCoursesPreMeta = function (user) {
    return {
        url: 'http://eams.uestc.edu.cn/eams/publicSearch.action',
        jar: user._jar_
    }
};

UrlUtil.getAppSearchCoursesMeta = function (user, options) {
    return {
        url: 'http://eams.uestc.edu.cn/eams/publicSearch!search.action',
        form: {
            'lesson.course.name': options.name || '',
            'teacher.name': options.instructor || '',
            'limitGroup.grade': options.grade || ''
        },
        jar: user._jar_
    }
};

UrlUtil.getAppSearchPeoplePreMeta = function (user) {
    return {
        url: 'http://portal.uestc.edu.cn/pnull.portal?action=globalGroupsTree&.ia=false&.pmn=view&.pen=personnelGroupmanager&groupId&identity=undefined&authorize=undefined',
        jar: user._jar_
    }
};

UrlUtil.getAppSearchPeopleMeta = function (user, term, limit) {
    return {
        url: 'http://portal.uestc.edu.cn/pnull.portal?action=fetchUsers&.ia=false&.pmn=view&.pen=personnelGroupmanager',
        form: {
            'limit': limit,
            'oper_type': 'normal_user',
            'term': term
        },
        jar: user._jar_
    };
};

UrlUtil.getEamsMeta = function (user) {
    return {
        url: 'http://eams.uestc.edu.cn/eams/home.action',
        jar: user._jar_
    }
};

UrlUtil.getEnsureLoginMeta = function (user) {
    return {
        url: 'http://portal.uestc.edu.cn/login.portal',
        jar: user._jar_
    }
};

UrlUtil.getUserDetailMeta = function (user) {
    return {
        url: 'http://eams.uestc.edu.cn/eams/stdDetail.action',
        jar: user._jar_
    }
};

UrlUtil.getUserLoginMeta = function (number, password) {
    return {
        url: 'https://uis.uestc.edu.cn/amserver/UI/Login',
        form: {
            'IDToken0': '',
            'IDToken1': number,
            'IDToken2': password,
            'IDButton': 'Submit',
            'goto': 'aHR0cDovL3BvcnRhbC51ZXN0Yy5lZHUuY24vbG9naW4ucG9ydGFs',
            'encoded': 'true',
            'gx_charset': 'UTF-8'
        }
    };
};


