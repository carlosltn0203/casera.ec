$(document).ready(function(){
    $("#fecha").datepicker();
    $("#checkdisponibilidad").on("click", function(){
        var selectedDate = $("#fecha").val();
        $getJSON(,function(data){
            console.log(data);
        });
    });
});