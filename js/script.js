$(document).ready(function(){
  $(".programme_wrapper").slice(0,6).show();
  $("#seeMore").click(function(e){
    e.preventDefault();
    $(".programme_wrapper:hidden").slice(0,3).fadeIn("slow");
    
    if($(".programme_wrapper:hidden").length == 0){
       $("#seeMore").fadeOut("slow");
      }
  });
  
  /*-----add program field dynamically to form sheetal 14jan2022----------*/
   $(".prog_box").click(function(e){  
   var prog_name=this.id; 
   $('#00N0o00000Nnreu').val(prog_name);
  });
  
  /***********************************/
   $(".learn_more").click(function(e){

    // var brochure_link = $(this).closest("form").find("input[name='brochure_link']").val();
    var brochure_link = $(this).siblings('.brochure_link').val();
    $('#brochure').val(brochure_link);
   var prog_name=$(this).siblings('.prog_name').val();
   $('#00N0o00000Nnreu').val(prog_name);
  });
  
})

$(".form99").on("submit", function() {
  //e.preventDefault();
  
    if($(".brochure_check").is(":checked") )
  {
    
      
      
              var brochure_link = $(this).closest("form").find("input[name='brochure']").val();
        if(brochure_link!='')
        {
          alert("Brochure will be downloaded shortly");
        //console.log(brochure_link);return false;
              window.open(brochure_link);
       
        /*setTimeout(function(){  var link = document.createElement('a');
        link.href = brochure_link;
        link.download = brochure_link;
        link.click();
        link.remove(); }, 3000);
       setTimeout(function(){  return true; }, 7000);*/                    
               return true; 
          
          
        }
        
       return true; 
  
  }
  else 
  {

    return true;
  }
    
  });





//popup
 $(".form_btn_wrp, button.close, .banner_cta").click(function() {
  $(".form_wrapper").fadeToggle("slow");
});


$('.prog_box').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

   var $carousel = $('.speak_slider');

var settings = {
  dots: true,
  arrows: false,
  slide: '.slick-slideshow__slide',
  slidesToShow: 3,
  centerMode: true,
  centerPadding: '40px',
};

function setSlideVisibility() {
  //Find the visible slides i.e. where aria-hidden="false"
  var visibleSlides = $carousel.find('.slick-slideshow__slide[aria-hidden="false"]');
  //Make sure all of the visible slides have an opacity of 1
  $(visibleSlides).each(function() {
    $(this).css('opacity', 1);
  });

  //Set the opacity of the first and last partial slides.
  $(visibleSlides).first().prev().css('opacity', 0);
}

$carousel.slick(settings);
$carousel.slick('slickGoTo', 1);
setSlideVisibility();

$carousel.on('afterChange', function() {
  setSlideVisibility();
});


$(document).ready(function(){
  $('.mgmt_select').change(function(){ 
    let category = $('.mgmt_select').val();
    var url = window.location.origin+window.location.pathname;
    //console.log(window.location);
    location.replace(url+'?category='+category);
    //filterRecords()
 });

  $('input[type="radio"]').change(function(){
    filterRecords()
  });   
});

function filterRecords(){
  let category = $('.mgmt_select').val();
  let filter = $('input[name="programmes"]:checked').val();

  let classes = '';
  classes += category ? '.'+category : '';
  classes += filter ? '.'+filter : '';
  console.log(classes)

  $('.all').show();
  $('.all').not(classes).hide();
  // $(classes).show();
} 


// $(document).ready(function(event){
//   $('.mgmt_select').change(function(){
//     $this = $(this);
//     $('.programme_wrapper').hide();
//     $('.'+$this.val()).show();
//     console.log("showing "+$this.val()+" boxes");
//     $('input[type="radio"]').click(function(){
//         var inputValue = $(this).attr("value");
//         var targetBox = $("." + inputValue);
//         $(".all").not(targetBox).hide();
//         $(targetBox).show();
//     });
//    });
// });