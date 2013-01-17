var lawnchair = Lawnchair({name:'lawnchair'},function(e){
  console.log('storage open');
  count();
});
var lorem = '';
$(document).on('click', 'button', function(){
	var id = $(this).attr('id');
	lorem = $('#lorem').text();
	if(id == 'add_100'){
		add_dummies(100);
	}else if(id == 'add_1000'){
		add_dummies(1000);
	}else if(id == 'add_9001'){
		add_dummies(9001);
	}else if(id == 'read_all'){
		read_all();
	}else if(id == 'nuke'){
		nuke();
		$('#counter').text('0');
	}
});

function add_dummies(quantity){
	for (var i = quantity - 1; i >= 0; i--) {
		var uuid = lawnchair.uuid();
		var val = 'heres a '+lawnchair.uuid()+' value';
		lawnchair.save({key:uuid, value:{num:val, text:lorem}})
	};
	$ct = $('#counter')

	$ct.text(parseInt($ct.text())+quantity)
}

function nuke(){
	lawnchair.nuke();
}

function read_all(){
	var output = [];
	var total = parseInt($('#counter').text());
  lawnchair.each(function(dummy, i){
  	//console.log(dummy.value);
  	//output.push(dummy.value);
  	if (total - 1 == i){
  		console.log('done');
		  //$('#output').html(output.join('<br>'));  		
  	}
  });
}
var couter = 0;
function count(){
  $('#counter').text(0);  
	lawnchair.each(function(derp, i){
		counter = i+1;
	  $('#counter').text(counter);  		
	});
}