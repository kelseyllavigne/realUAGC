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

//TESTS
var bday = new Date(1988, 4, 26, 9, 11);
var bdayLongDateTime = DateFormatter.getLongDateTime(new Date(bday));
var bdayShortDateTime = DateFormatter.getShortDateTime(new Date(bday));
var bdayLongDate = DateFormatter.getLongDate(new Date(bday));
var bdayShortDate = DateFormatter.getShortDate(new Date(bday));
var bdayLongTime = DateFormatter.getLongTime(new Date(bday));
var bdayShortTime = DateFormatter.getShortTime(new Date(bday));

var bdayStringLongDateTime = "Thursday, May 26, 1988 9:11 AM";
var bdayStringShortDateTime = "5/26/1988 9:11 AM";
var bdayStringLongDate = "May 26, 1988";
var bdayStringShortDate = "5/26/1988";
var bdayStringLongTime = "9:11:0 AM";
var bdayStringShortTime = "9:11 AM";

var bdayStringYear = 1988;
var bdayStringDate = 26;

//LONGDATETIME
if (bdayLongDateTime === bdayStringLongDateTime) {
  console.log("success");
}
else {
  try {
    if (bday.getFullYear != bdayStringYear) throw "wrong year";
    if (bday.getDate != bdayStringDate) throw "wrong date";
  }
  catch(err) {
    console.log("bday is showing the " + err);
  }
}

//SHORT DATE TIME
if (bdayShortDateTime === bdayStringShortDateTime) {
  console.log("success");
}
else {
  try {
    if (bday.getFullYear != bdayStringYear) throw "wrong year";
    if (bday.getDate != bdayStringDate) throw "wrong date";
  }
  catch(err) {
    console.log("bday is showing the " + err);
  }
}

//LONG DATE
if (bdayLongDate === bdayStringLongDate) {
  console.log("success");
}
else {
  try {
    if (bday.getFullYear != bdayStringYear) throw "wrong year";
    if (bday.getDate != bdayStringDate) throw "wrong date";
  }
  catch(err) {
    console.log("bday is showing the " + err);
  }
}

//SHORT DATE
if (bdayShortDate === bdayStringShortDate) {
  console.log("success");
}
else {
  try {
    if (bday.getFullYear != bdayStringYear) throw "wrong year";
    if (bday.getDate != bdayStringDate) throw "wrong date";
  }
  catch(err) {
    console.log("bday is showing the " + err);
  }
}

//LONG TIME
if (bdayLongTime === bdayStringLongTime) {
  console.log("success");
}
else {
  try {
    if (bday.getFullYear != bdayStringYear) throw "wrong year";
    if (bday.getDate != bdayStringDate) throw "wrong date";
  }
  catch(err) {
    console.log("bday is showing the " + err);
  }
}

//SHORT TIME
if (bdayShortTime === bdayStringShortTime) {
  console.log("success");
}
else {
  try {
    if (bday.getFullYear != bdayStringYear) throw "wrong year";
    if (bday.getDate != bdayStringDate) throw "wrong date";
  }
  catch(err) {
    console.log("bday is showing the " + err);
  }
}
