$(document).ready(function() {
	$('.tweetTotal').on('click','.user', function() {
            $(this).closest('.tweetTotal').find('.userTimeline').slideDown();
          });
});