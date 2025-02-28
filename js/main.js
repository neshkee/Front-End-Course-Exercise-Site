function navigation(){
    var $toggle = $('.toggle');
    var $nav = $('.nav-container');
    var active = 'toggle-active';

    $toggle.on('click', function(){
        if( $(this).hasClass(active)){
            $(this).removeClass(active);
            $nav.slideUp();
        } else{
            $this.addClass(active);
            $nav.slideDown();
        }
    })
}

navigation();
 

