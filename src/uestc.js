// 外部依赖

var Application = require('./application');


// 构造方法

function createApplication() {
    return new Application();
}

exports = module.exports = createApplication;


//课程信息
//'http://eams.uestc.edu.cn/eams/electionLessonInfo.action?lesson.id=226456';

//人员查询
// http://portal.uestc.edu.cn/pnull.portal?action=fetchUsers&.ia=false&.f=f20889&.pmn=view&.pen=personnelGroupmanager
// start:0
// limit:10
// groupId:PG.2012019050019.root61182_PG.2012019050019.3885
// oper_type:normal_user
// term:余泽江