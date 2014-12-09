(function($){
	$.fn.asiion = function(options){
		var settings = $.extend({
			startingIndexPoint: 1000,
			menus: {
				default: {
					title: 'Title of Aside Onion',
					content: 'Can be HTML.<br/><button>YEAH BUTTON</button>.',
					icon: 'images/html5-blue.png'
				}
			},
			width: 80,
			animationTime: 500,
			defaultIcon: 'images/html5-blue.png'
		}, options),
			template = '<div class="asiion" id="">'+
				'<div class="asiion-overlay asiion-close"></div>'+
				'<div class="asiion-menu">'+
					'<div class="asiion-top">'+
						'<img class="asiion-icon" src="#"/>'+
						'<h3 class="asiion-title"></h3>'+
						'<span class="asiion-close asiion-x">X</span>'+
					'</div>'+
					'<div class="asiion-content"></div>'+
				'</div>'+
			'</div>';

		$('body').on('click', '.asiion-open', function() {
			var asiion = $(this).attr('asiion'),
				menu = settings.menus[asiion]?settings.menus[asiion]:settings.menus['default'];

			if(!$('#'+asiion).length){
				var $template = $(template);

				$template.css('z-index', settings.startingIndexPoint + 1);
				$template.find('.asiion-overlay').css('z-index', settings.startingIndexPoint + 2);
				$template.find('.asiion-menu').css({
					'z-index': settings.startingIndexPoint + 3,
					width: settings.width + '%',
					'max-width': settings.width + '%',
					right: '-' + settings.width + '%'
				});

				$template.attr('id', asiion);
				$template.find('.asiion-title').html(menu.title);
				$template.find('.asiion-content').html(menu.content);
				$template.find('.asiion-icon').attr('src', menu.icon?menu.icon:settings.defaultIcon);
				$template.find('.asiion-close').attr('asiion', asiion);

				$('body').append($template);
			}
			
			var $asiion = $('#'+asiion);

			$asiion.css('display', 'block');
			$asiion.find('.asiion-overlay').stop().fadeIn(settings.animationTime);
			$asiion.find('.asiion-menu').stop().animate(
				{
					right: 0
				},
				settings.animationTime
			);
			if(index = $asiion.index('.asiion:visible')) {
				$('.asiion-menu:visible').eq(index - 1).animate({
					right: (settings.width>50?100 - settings.width:settings.width) + '%'
				},
				settings.animationTime);
			}
		}).on('click', '.asiion-close', function() {
			var $asiion = $('#'+$(this).attr('asiion'));

			$asiion.find('.asiion-overlay').stop().fadeOut(settings.animationTime);
			if(index = $asiion.index('.asiion:visible')) {
				$('.asiion-menu:visible').eq(index - 1).animate({
					right: 0
				},
				settings.animationTime);
			}
			$asiion.find('.asiion-menu').stop().animate(
				{
					right: '-' + settings.width + '%'
				},
				settings.animationTime,
				function() {
					$asiion.css('display', 'none');
				}
			);
		});
	}
})(jQuery);

jQuery(document).ready(function($){
	$(this).asiion({
		width: 50,
		menus: {
			test: {
				title: 'It worked?',
				content: 'This content proves so.<br/><button class="asiion-open" asiion="second-window">Second Window</button>'
			},
			'second-window': {
				title: "It's getting better?",
				content: 'Sure it is! Let\'s try another one <button class="asiion-open" asiion="anoterOne">Open</button><button class="asiion-close">Close</button>'
			},
			anoterOne: {
				title: 'I know',
				content: 'Everybody knows'
			}
		}
	});
});