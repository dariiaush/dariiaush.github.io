$( document ).ready(function() {
    $("#btn-form").on("click", function(){
		sendAjaxForm('result_form', 'ajax_form', 'calc.php');
		return false; 
	});
});

 
function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url: calc.php, //url страницы (action_ajax_form.php)
        type: "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#"+ajax_form).serialize(),
        success: function(response) { //Данные отправлены успешно
        	result = $.parseJSON(response);
        	$('#result_form').html('<br>Результат: '+ result);
    	},
    	error: function(response) { // Данные не отправлены
            $('#result_form').html('Ошибка. Данные не отправлены.');
    	}
 	});
}