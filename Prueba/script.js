$(document).ready(function(){
    $("#fecha").datepicker();
    $("#checkdisponibilidad").on("click", function(){
        var selectedDate = $("#fecha").val();
        $getJSON(https://github.com/carlosltn0203/casera.ec/blob/e02cb3de85ca67004f31c24ec6aa9791c0002c0e/Prueba/disponibilidad.json,function(data){
            console.log(data);
        });
    });
});
