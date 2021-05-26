//---------------Tabs---------------------
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})


//--------------Add tags  label
$(document).ready(function() {
    // Add Tags
    $(".dropdown").on("click", ".dropdown-menu > li", function() {
      if ( !$(this).hasClass("added") ) {
        $(this).addClass("added");
        var color = $(this).find("svg:first-child>circle").attr('fill')
        $(".tag-area").append('<div class="tag" style="background-color:'+ color +'">' + $(this).text() + '<span><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M4.99999 4.05732L8.29999 0.757324L9.24266 1.69999L5.94266 4.99999L9.24266 8.29999L8.29999 9.24266L4.99999 5.94266L1.69999 9.24266L0.757324 8.29999L4.05732 4.99999L0.757324 1.69999L1.69999 0.757324L4.99999 4.05732Z" fill="white"/></svg></span></div>');
      }
    });
    // Remove Tags
    $(".wrapper").on("click", ".tag > span", function() {
      $(this).parent().remove();
      var objectText = $(this).parent().text().slice(0,-1);
      $(".dropdown-menu > li:contains('" + objectText + "')").removeClass("added");
    });
    
  });

  $(document).ready(function() {
    // Add Tags team
    $(".dropdown2").on("click", ".dropdown-menu2 > li", function() {
      if ( !$(this).hasClass("added2") ) {
        $(this).addClass("added2");
        var image = $(this).find("img").attr('src')
        var name =  $(this).find("p").text()
        var people = $(this).find('span').text()
        var col = $(this).find(".name_circle").attr('style')
        if($(this).children(".name_circle").length){
            $(".tag-area2").append('<div class="tag2" ><div class="tag-title"><p>'+name+'</p></div><div class="name_circle" style="'+col+'"><span>'+people+'</span></div></div>');

        }
        else{
            $(".tag-area2").append('<div class="tag2" ><div class="tag-title"><p>'+name+'</p></div><img src="'+image+'"></div>');
        }

      }
    });
   
 


  });

  $(document).ready(function() {
    // Add Tags manager
    $(".dropdown3").on("click", ".dropdown-menu3 > li", function() {
      if ( !$(this).hasClass("added3") ) {
        $(this).addClass("added3");
        var image = $(this).find("img").attr('src')
        var name =  $(this).find("p").text()
        $(".tag-area3").append('<div class="tag3" ><div class="tag_overlay"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M4.99999 4.05732L8.29999 0.757324L9.24266 1.69999L5.94266 4.99999L9.24266 8.29999L8.29999 9.24266L4.99999 5.94266L1.69999 9.24266L0.757324 8.29999L4.05732 4.99999L0.757324 1.69999L1.69999 0.757324L4.99999 4.05732Z" fill="white" fill-opacity="0.88"/></svg></div><div class="tag-title"><p>'+name+'</p></div><img src="'+image+'"></div>');
      }
      // $(".wrapper3").on("click", ".added3 > h5", function() {
      //   $(this).parent().removeClass("added3");
      //   $(".tag3").empty()
      // });
    });

  });


  //---------modal

  $(document).ready(function() {
    $("a.fancybox").fancybox()
  });



  ///---------Addto do------------

  $(".task-content-left-list-input input").focus(function(){
    $(".ok path").css("fill", "#E65F05");
  });

  $(".task-content-left-list-input input").focusout(function(){
    $(".ok path").css("fill", "#B2B3B3");
  });
  
  $(document).ready(function() {
    $('.add-to').click(function(){
      $(this).hide();
      $('.task-content-left-list').show()
    });

   
  });


  $(document).ready(function() {
    $('.close').click(function(){
      $('.add-to').show();
      $('.task-content-left-list').hide()
    });

   
   });



  //-----new list

   $('.task-content-left-title').click(function(){
      $('.task-content-left-list2').show()
      $(".ok-list path").css("fill", "#E65F05");
   });

   $('.close-list').click(function(){
    $('.task-content-left-list2').hide()
    $(".ok-list path").css("fill", "#B2B3B3");

 });








///////selectt dropdown

 var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);





//textarea focus

$(".textarea-content textarea").focus(function(){
  $(".text-area-bottom-send svg path").css("fill", "#E65F05");
  $(".text-area-bottom-send p").css("color", "#E65F05");
  $(".textarea-content").css("border", "2px solid #E65F05");

  $(".text-area-bottom-icon svg path").css("fill", "#78797D");
});

$(".textarea-content textarea").focusout(function(){
  $(".text-area-bottom-send svg path").css("fill", "#9D9E9F");
  $(".text-area-bottom-send p").css("color", "#9D9E9F");
  $(".textarea-content").css("border", "2px solid #E0E0E0");
  $(".text-area-bottom-icon svg path").css("fill", "#9D9E9F");


});




//data plugin
$(".datep").flatpickr();

//gallery settings
$("[data-fancybox]").fancybox({
  thumbs          : false,
  hash            : false,
  loop            : true,
  keyboard        : true,
  toolbar         : false,
  animationEffect : false,
  arrows          : true,
  clickContent    : false
});


//dropdown-aside-menu


$('.dropdown-ul').hide()
$('.li-a').click(function(e){
  e.preventDefault();    
  $(this).addClass("active-li")
  $('.dropdown-ul').slideToggle('slow',function (){
    if($('.dropdown-ul').is(":visible")){
      $(".arr").css("transform", "rotate(0deg)")
    }
    else{
      $(".arr").css("transform", "rotate(180deg)")
    }
   
});
})

$('.dropdown-ul li').click(function(e){
  e.preventDefault(); 
  $(this).addClass("ul-li-active")

})




//reply

$('.reply-icon').click(function(e){
  
  $(".textarea-content-reply").show()

})

//edit

$('.edit p').click(function(e){
  
  var text_edit = $('.text_edit').text();   
  $('#textarea').append(text_edit); 
  $(".textarea-content").css("border", "2px solid #E65F05");

})

