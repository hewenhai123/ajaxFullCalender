
$(function () {
    var postnName=$("#username").val();
  $.ajax({
      url: "/getCalendar",
      type:"post",
      data:{"username":postnName},
      success:function(res){
          initFullCalendar(res)
      }

  });
 function initFullCalendar(data) {
     var calendarEl = document.getElementById('calendar');
     var calendar = new FullCalendar.Calendar(calendarEl, {
         plugins: [ 'interaction', 'dayGrid' ],
         defaultDate: '2019-03-12',
         editable: true,
         eventLimit: true, // allow "more" link when too many events
         events: data
     });
     calendar.render();
 }


});




