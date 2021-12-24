$(document).ready(function(){
    $(".show-project").click(function(){
        let projectName = this.id;
      $("."+projectName).fadeIn("slow");
      $(".wrapper").animate({ opacity: '0.4'});
    });
  });

$(document).ready(function(){
    $(".close-project").click(function(){
      $(".lightbox").hide();
      $(".wrapper").animate({ opacity: '1'});
    });
  });


  

