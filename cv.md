#Mikhailevich Silvestr

##Photo
![Me](me.jpg)
##Contacts:
    - **Phone:** _+37525 913-00-11_
    - **telegram:** _sv\_telegram_
    - **Discord:** _kitiket1999_
    - **GitHub:** _kitiket1999_

##About myself:
    >I want to learn JS, to realise my ideas.
    >I like cleanliness and order in house and in life, but I like to do spontaneous things too.
    >Being fair is my main principle.
    >Like to wash dishes 🤡
    >I work as a cook at night and try to develop my project.

##Skills:
    >I'm a good cook.
    >I can work with wood and artificial stone,
    >do simple repairs.
    >I easily find a common language with any people.
    >I can try to solve problem or search for decision for many hours in a row, but 
    >I don't think that it is a profitable approach) I dont like to ask for help.

    >I can copy or create simple project, using html,css,js,php,mysql


##Code example:
[Codepen](https://codepen.io/kitiket/pen/gOQWVQv)
```
<div>
  <video class="video" muted autoplay pleload loop playsinline="true"></video>
  <video class="video" muted autoplay pleload loop playsinline="true"></video>
  <video class="video" muted autoplay pleload loop playsinline="true"></video>
</div>

<style type="text/css">
	body {
  		background-color: black;
	}
	div {
	  	width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 30px;
	}
	.video {
		height: 250px;
		width: fit-content;
		max-width: 31%;
		cursor: pointer;
	}
</style>

<script type="text/javascript">
	let half_link = 'https://iloveyou.cards/RSSchool/media/'
	let video_class = document.getElementsByClassName('video');
	video_class[0].src = half_link + 'pupipu.mp4';
	video_class[1].src = half_link + 'crunchy.mp4';
	video_class[2].src = half_link + 'hoseobi.mp4';

	function mute_all() {
		for (i=0; i < video_class.length; i++) {
			video_class[i].muted = true;
		};	
	}

	(function () {
		for (i=0; i < video_class.length; i++) {
			video_class[i].addEventListener('click', event => {
				if(event.target.muted) {
					mute_all()
					event.target.muted = false;
					event.target.currentTime = 0;
				} else {
					event.target.muted = true;
				}
			})
		}
	})()
</script>
```

##Experience
<https://eurocomfort.by> 
    **_Download site structure from side project with wget._** 
    **Fix mobile devices adaptation (after using wget).**
    **Add phone numbers, social networks links, animations.** 
    **Add sliders, popups with extra information by clicking all positions.**
    **Create order calculation form.**
    **Implement function of sending all forms data to telegram.**
<https://earnex.ru>
    **Totally my idea. All you find here is my author’s work😂**
<https://popusk.ru>
    **This project is addition for my twitch stream.** 
    **All blocks and elements created for integration into broadcast.**
    **Subject: competition between viewers by requests.**
    _\*There is no SESSIONS.\*_
<https://iloveyou.cards/create>
    **Works in demo mode. Most of functions are disabled now.**
    **Subject: virtual gift card creation.**

##Education 
    - Self education

##Languages
    - English - A1
    - Russian - Native