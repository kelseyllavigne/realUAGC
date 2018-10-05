var DateFormatter = {
  getShortTime: function(date) {
    var hour = date.getHours();
    hour = hour % 12;
    hour = hour ? hour : 12;
    var minutes = date.getMinutes();
    var ampm = hour >= 12 ? 'PM' : 'AM';
    return hour + ":" + minutes + " " + ampm;
  },

  getLongTime: function(date) {
    var hour = date.getHours();
    hour = hour % 12;
    hour = hour ? hour : 12;
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hour >= 12 ? 'PM' : 'AM';
    return hour + ":" + minutes + ":" + seconds + " " + ampm;
  },

  getShortDate: function(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return month + "/" + day + "/" + year;
  },

  getLongDate: function(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    var day = date.getDate();
    var month = monthNames[date.getMonth()];
    var year = date.getFullYear();
    return month + " " + day + ", " + year;
  },

  getShortDateTime: function(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var hour = date.getHours();
    hour = hour % 12;
    hour = hour ? hour : 12;
    var minutes = date.getMinutes();
    var ampm = hour >= 12 ? 'PM' : 'AM';
    return month + "/" + day + "/" + year + " " + hour + ":" + minutes + " " + ampm;
  },
  
  getLongDateTime: function(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var numberDate = date.getDate();
    var day = weekDay[date.getDay()];
    var month = monthNames[date.getMonth()];
    var year = date.getFullYear();
    var hour = date.getHours();
    hour = hour % 12;
    hour = hour ? hour : 12;
    var minutes = date.getMinutes();
    var ampm = hour >= 12 ? 'PM' : 'AM';
    return day + ", " + month + " " + numberDate + ", " + year + " " + hour + ":" + minutes + " " + ampm;
  }
}

//CONSOLE LOG CHECKS
var getShortTime = DateFormatter.getShortTime(new Date());
    console.log('Get Short Time ' + getShortTime);

var getLongTime = DateFormatter.getLongTime(new Date());
    console.log('Get Long Time ' + getLongTime);

var getShortDate = DateFormatter.getShortDate(new Date());
    console.log('Get Short Date ' + getShortDate);

var getLongDate = DateFormatter.getLongDate(new Date());
    console.log('Get Long Date ' + getLongDate);

var getShortDateTime = DateFormatter.getShortDateTime(new Date());
    console.log('Get Short Date Time ' + getShortDateTime);

var getLongDateTime = DateFormatter.getLongDateTime(new Date());
    console.log('Get Long Date Time ' + getLongDateTime);
