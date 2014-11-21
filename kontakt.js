/**
 * @author Alex
 */

var main=function(){
  var Imie=$('input[name=Imie]').val();
  var Nazw=$('input[name=Nazwisko]').val();
  var Email=$('input[name=email]').val();
  var Wiadomosc=$('textarea[name=wiadomosc]').val();
  
  
  $('#button').click(function(){
  		 		
  		if(Imie.length===0){
  			$('#imie').addClass('alarm');
  		}
  		else{
  			$('#imie').removeClass('alarm');}	
  		
  		if(Nazw.length===0){
  			$('#nazwisko').addClass('alarm');
  		}
  		else{
  			$('#nazwisko').removeClass('alarm');
  		}
  		
  		if(Email.length===0){
  			$('#imail').addClass('alarm');
  		}
  		else{
  			$('#imail').removeClass('alarm');
  		}
  		
  		if(Wiadomosc.length===0){
  			$('#wiad').addClass('alarm');
  		}
  		else{
  			$('#wiad').removeClass('alarm');
  		}

  		
  		
  });
  

  
};
$(document).ready(main);



	