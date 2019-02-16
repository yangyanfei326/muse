$(function(){
    $.ajax({
        url:"http://localhost:3000/header.html",
        type:"get",
        success:function(res){
            $("<link rel='StyleSheet' href='../css/header.css'>").appendTo("head")
            $("<link rel='stylesheet' href='../css/common.css'>").appendTo("head")
            $(res).replaceAll("header")
          // $("#header").html(res)
        }
    })
})