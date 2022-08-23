/*
not pasted, rly.
rezy.pw | ripsite1337
*/
var flag;
function calc(){
	s1 = Number($("#s1").val()); 
	s2 = Number($("#s2").val()); 
	
	if(s1 >= s2)
	{
		$("#summ").val('Звания выбраны не верно!');
		flag = false;
	}
	else
	{
		full_summ = $("#s2 option:selected").attr('price') - $("#s1 option:selected").attr('price')
                
                if($("#onemore").prop("checked")) full_summ = full_summ * 1.3;
                if($("#skincheck").prop("checked")) full_summ = full_summ * 1.45;
                if($("#lobbycheck").prop("checked")) full_summ = full_summ * 2;
                if($("#fastcheck").prop("checked")) full_summ = full_summ * 2;
		$("#summ").val(Math.round(full_summ)+' рублей');
		$("#sum").val(Math.round(full_summ));
		
		flag = true;
	}
	
	
	
	$("#pic1").attr('src','./images/rank/'+s1+'.png'); 
	$("#pic2").attr('src','./images/rank/'+s2+'.png');
}

$("#s1").change(function(){calc();});
$("#s2").change(function(){calc();});
$("#skincheck").change(function(){calc();});
$("#lobbycheck").change(function(){calc();});
$("#fastcheck").change(function(){calc();});
$("#onemore").change(function(){calc();});

calc();