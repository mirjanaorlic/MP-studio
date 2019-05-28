// Accordion
var acc = document.getElementsByClassName("acc__list-item");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        var innerContent = this.nextElementSibling;
        if (innerContent.style.maxHeight){
            innerContent.style.maxHeight = null;
        } else {
            for(j = 0; j < acc.length; j++) {
                acc[j].nextElementSibling.style.maxHeight = null;
              }
            innerContent.style.maxHeight = "20rem";
        } 
    });
}
//////// Tabs scripts 
if(document.body.classList.contains('shop')) {
    var tab1 = document.querySelector('.tabs__list-item1');
    var tab2 = document.querySelector('.tabs__list-item2');
    var tab3 = document.querySelector('.tabs__list-item3');
    var tab4 = document.querySelector('.tabs__list-item4');
  
    tab1.addEventListener("click", function() {
      document.querySelector('.card1').classList.toggle("active");
      remove('.card2');
      remove('.card3');
      remove('.card4');
    });
    tab2.addEventListener("click", function() {
      document.querySelector('.card2').classList.toggle("active");
      remove('.card1');
      remove('.card3');
      remove('.card4');
    });
    tab3.addEventListener("click", function() {
      document.querySelector('.card3').classList.toggle("active");
      remove('.card1');
      remove('.card2');
      remove('.card4');
    });
    tab4.addEventListener("click", function() {
      document.querySelector('.card4').classList.toggle("active");
      remove('.card1');
      remove('.card2');
      remove('.card3');
    });
  
    function remove(a) {
      document.querySelector(a).classList.remove('active');
    }
  
    document.querySelector(".defaultOpen").click();
}
