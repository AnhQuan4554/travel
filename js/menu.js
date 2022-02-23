//làm nút bấm màu xanh tìm kiếm 
var x = document.querySelectorAll('.background__seach-top-iteam ')

x.forEach(function(e){

    e.onclick= function(){
var background__seach_top_list = document.querySelector('.background__seach-top-iteam.active')
       
            background__seach_top_list.classList.remove('active')
            e.classList.add('active');
            check_Quick_Seach();

    }
}) 

function check_Quick_Seach(){
    var seach = document.querySelector('#seachs')
    var background__seach_bottom__active = document.querySelector('.background__seach-bottom--active')
    if(seach.classList.contains('active')==true){
        background__seach_bottom__active.style.display = "flex"
    }
    else{
        background__seach_bottom__active.style.display = "none"

    }
}