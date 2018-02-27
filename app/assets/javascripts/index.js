function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
} 


$(document).ready(function(){
    // Set the interval to be 5 seconds
    var t = setInterval(function(){
        $("#carousel ul").animate({marginLeft:-480},1000,function(){
            $(this).find("li:last").after($(this).find("li:first"));
            $(this).css({marginLeft:0});
        })
    },5000);
});

 $right.on('click', function() {
    $('#carousel  > li:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#carousel');
});

$left.on('click', function() {
    $('#carousel  > li:first')
    .fadeOut(1000)
    $('#carousel > li:last')
    .fadeIn(1000)
    .prependTo('#carousel ul');
});
