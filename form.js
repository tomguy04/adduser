$(document).ready(function(){
    $('#form1').submit(function(){
          var fname = $("#firstname").val();
          var lname = $("#lastname").val();
          var email = $("#emailaddress").val();
          var phone = $("#contactno").val();
          var row = "<tr><td>" + fname + "</td>" + "<td>" + lname + "</td>" + "<td>" + email + "</td>" + "<td>" + phone + "</td>" + "</tr>";
          console.log(row);
         $("table tbody").append(row);
         return false
            //$('</th>').append()
            
            
    });
})


// // $('h3, p').click(function(){
//     $(this).parent().append('<h2>HOWDY CODING DOJO!</h2>');
// })
