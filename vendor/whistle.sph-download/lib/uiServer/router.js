const setSettings = require('./cgi/setSetting');
const init = require('./cgi/initEnv');
const pageData = require('./cgi/pageData');
const remove = require('./cgi/removeData');
const down = require('./cgi/downLoad');
const find = require('./cgi/find');
const douyinUser = require('./cgi/douyinUser');
const douyinUrl = require('./cgi/douyinUrl');
const douyinSearch = require('./cgi/douyinSearch');
const douyinUserMoritor = require('./cgi/douyinUserMonitorPre');
const douyinUserMoritorLists = require('./cgi/douyinUserMonitorLists');
const douyinUserMonitorAdd = require('./cgi/douyinUserMonitorAdd');
const douyinUserMonitorRemove = require('./cgi/douyinUserMonitorRemove');
const douyinUserMonitorSchedule = require('./cgi/douyinUserMonitorSchedule');
const douyinUserMonitorLiveRecord = require('./cgi/douyinUserMonitorLiveRecord');
const douyinUserMonitorState = require('./cgi/douyinUserMonitorState');
const douyinUserMonitorQWMessage = require('./cgi/douyinUserMonitorQWMessage');

module.exports = (router) => {
  router.post('/cgi-bin/set-settings', setSettings);
  router.get('/cgi-bin/init',init );
  router.get('/cgi-bin/data',pageData );
  router.get('/cgi-bin/remove',remove );
  router.post('/cgi-bin/down',down );
  router.post('/cgi-bin/find',find );
  router.post('/cgi-bin/dy/user',douyinUser );
  router.post('/cgi-bin/dy/m/user',douyinUserMoritor );
  router.post('/cgi-bin/dy/m/users',douyinUserMoritorLists );
  router.post('/cgi-bin/dy/m/monitor',douyinUserMonitorAdd );
  router.post('/cgi-bin/dy/m/remove',douyinUserMonitorRemove );
  router.post('/cgi-bin/dy/m/schedule',douyinUserMonitorSchedule );
  router.post('/cgi-bin/dy/m/live/record',douyinUserMonitorLiveRecord );
  router.post('/cgi-bin/dy/m/schedule/state',douyinUserMonitorState );
  router.post('/cgi-bin/dy/m/qwmessage',douyinUserMonitorQWMessage );
  router.post('/cgi-bin/dy/urls',douyinUrl );
  router.post('/cgi-bin/dy/search',douyinSearch );
};