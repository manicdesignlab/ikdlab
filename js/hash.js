$(document).ready(function(){
  var url = 'modal.html#books',
    hash = url.split('#')[1];
if (hash) {
$('.modalcontent').addClass('momo');
$('body').append('<div class="modal-overlay2"></div>');
}
else {
  $('.modalcontent').css('display','none');

}
});
