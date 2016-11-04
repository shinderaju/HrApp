var HrApp = angular.module('HrApp');
HrApp.factory('timeDiff',['$rootScope',function($rootScope){
  var diffTime = {};
  return {

  changed : function(inTime, outTime) {
      var diffTime = {};
      var inHour = inTime.getHours();
      var inMin = inTime.getMinutes();
      var outHour = outTime.getHours();
      var outMin = outTime.getMinutes();
      if (inHour > outHour) {
          diffTime.diffHour = (24 - inHour) + outHour;
      } else {
          diffTime.diffHour = outHour - inHour;
      }

      if (inMin > outMin) {
          diffTime.diffMin = 60 - (inMin - outMin);
          diffTime.diffHour = diffTime.diffHour - 1;
      } else {
          diffTime.diffMin = outMin - inMin;
      }
      return (diffTime);
  }
}
}]);
