var Body = {
  setColor:function(color) {
    //document.querySelector('body').style.color=color;
    $('body').css('color', color);
  },
  setBackgroundColor:function(color) {
    //document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor', color);
    //document는 객체, querySelector는 함수이면서 객체에 소속 : method
  }
}
var Links = {
  setColor:function(color) {
    // var i=0;
    // var alist=document.querySelectorAll('a');
    // while(i<alist.length) {
    //   alist[i].style.color = color;
    //   i += 1
    // }
    $('a').css('color', color);
  }
}
function nightDayHandler(self) {
  var target = document.querySelector('body');
  if(self.value === 'night') {
    Body.setColor('white');
    Body.setBackgroundColor('black');
    self.value = 'day' ;

    Links.setColor('powderblue');
  }
  else {
    Body.setColor('black');
    Body.setBackgroundColor('white');
    self.value = 'night' ;

    Links.setColor('blue')
  }
}
