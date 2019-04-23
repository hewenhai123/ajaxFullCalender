
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
         events: [
             {
                 title: 'All Day Event',
                 start: '2019-03-01',
                 editable:false
             },
             {
                 title: 'Long Event',
                 start: '2019-03-07',
                 end: '2019-03-10'
             },
             {
                 groupId: 999,
                 title: 'Repeating Event',
                 start: '2019-03-09T16:00:00'
             },
             {
                 groupId: 999,
                 title: 'Repeating Event',
                 start: '2019-03-16T16:00:00'
             },
             {
                 title: 'Conference',
                 start: '2019-03-11',
                 end: '2019-03-13'
             },
             {
                 title: 'Meeting',
                 start: '2019-03-12T10:30:00',
                 end: '2019-03-12T12:30:00'
             },
             {
                 title: 'Lunch',
                 start: '2019-03-12T12:00:00'
             },
             {
                 title: 'Meeting',
                 start: '2019-03-12T14:30:00'
             },
             {
                 title: 'Happy Hour',
                 start: '2019-03-12T17:30:00'
             },
             {
                 title: 'Dinner',
                 start: '2019-03-12T20:00:00'
             },
             {
                 title: 'Birthday Party',
                 start: '2019-03-13T07:00:00'
             },
             {
                 title: 'Click for Google',
                 url: 'http://google.com/',
                 start: '2019-03-28'
             }
         ]
     });
     calendar.render();
 }


});




