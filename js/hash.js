$(document).ready(function(){
  var urlHash = location.hash;

  // URLにアンカーが存在する場合
  if(urlHash){
    // アンカーが#osakaかどうかを判断する
    if (urlHash == '#books') {
      $('modalcontent22').css('display','block');
      $('body').append('<div class="modal-overlay2"></div>');
    } else {
    }
  }
});
