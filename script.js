$(document).ready(function(){
    $("#fecha").datepicker();
    $("#checkdisponibilidad").on("click", function(){
        var selectedDate = $("#fecha").val();
        $getJSON(https://github.com/carlosltn0203/casera.ec/blob/929ccac84429c7951eb28df1060ad2b0bd889cc6/disponibilidad.json,function(data){
            console.log(data);
        });
    });
});
