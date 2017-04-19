$(init)
		function init()
		{
			var a = 1;
			$(".ui-container1-square").each(function(index, el) {
				index++;
				var r = 255 - index * 20;
				var g = 10 * index;
				var b = 20 * index;
				$(el).css("background-color", "rgb(" + r + "," + g + "," + b + ")");
				$(el).data("picture", index);
			});
			$(".ui-container1-square").each(function(index) {
				index++;
				
			});
			$("#ui-container1-wrapper").hide();

			$(".ui-container1-square").click(function() {
				/* Act on the event */
				var index = $(this).data("picture");
				var r = 255 - index * 20;
				var g = 10 * index;
				var b = 20 * index;
				$("#ui-container1-wrapper").fadeIn(500);
				$("#ui-container1-wrapper-picture").css("background-color","rgb(" + r + "," + g + "," + b + ")");
				$(this).text(a);
				a++;
			});

			$("#ui-container1-wrapper").click(function(){
				/* Act on the event */
				$("#ui-container1-wrapper").fadeOut('fast');
			});

			$(".ui-container2-box2-turn").hide();
			$(".ui-container2-box2-turn:first").fadeIn(100).siblings('.ui-container2-box2-turn').fadeOut(100);
			$(".ui-container2-botton:first").css("box-shadow"," -3px 0 5px #000000 inset");

			$(".ui-container2-botton").click(function() {
				/* Act on the event */
				var i = $(this).index();
				$(".ui-container2-box2-turn:eq(" + i +")").fadeIn(200).siblings('.ui-container2-box2-turn').fadeOut(100);
				$(".ui-container2-botton:eq("+ i +")").css("box-shadow","-2px 0 5px #000000 inset").siblings('.ui-container2-botton').css("box-shadow","2px 2px 5px #000000");
			});
				$(".ui-container3-addBotton").on('click', function() {
				add();
			});
				$(".ui-container3-box-deleteBox").on('click', function() {
				remove(this);
			});
		}

		function add()
		{
			var body = $('<div></div>').addClass('ui-container3-box');
			var index = $('<div></div>').addClass('ui-container3-box-square');
			var emp = $('<div></div>').addClass('ui-container3-box-emptyRectangle');
			var del = $('<div></div>').addClass('ui-container3-box-deleteBox').append('Delete');
			del.on('click', function() {
				event.preventDefault();
				/* Act on the event */
				remove(this);
			});
			body.append(index).append(emp).append(del);
			$(".ui-container3-addBotton").before(body);
			reindex();
			if(index.text()>6)
			{
				$(".ui-container3").css("height","auto");
			}
			else if(index.text()<=6)
			{
				$(".ui-container3").css("height","600px");
			}
		}
		function reindex()
		{
			$('.ui-container3-box-square').each(function(index, el) {
				$(el).text(index + 1);
			});
		}
		function remove(el)
		{
			$(el).parent().remove();
			reindex();
		}