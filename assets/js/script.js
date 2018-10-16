// $(function(){
//   $('#green').click(function(){
//     $('#text').css({'color':'green'});
//   });
//   $('#red').click(function(){
//     $('#text').css({'color':'red'});
//   });
//   $('#blue').click(function(){
//     $('#text').css({'color':'blue'});
//   })
// });

$(function(){
  $('.color').click(function(){
    divColor = $(this).attr('id'); 
    $('#text').css('color', divColor);
  });
});
