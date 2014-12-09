aside-onion
===========

This is a jQuery Plugin called Aside Onion.

### The name means...?

This is not a plugin that puts onions aside. Why would? Or... Why wouldn't?  
For real now. **Aside** stands for ***aside content***, which are made and controlled by this plugin, and **Onion** means that you gonna cry for your life trying to implement this; no, **Onion** stands for ***layers***, yes, layers.

So, Aside Onion can be tranlated as aside content in layers.

### I understand ... nothing

Well, don't feel sorry. I will draw for you.  
Seeing at the example I've made for you, the HTML page will have just one button:  
<img src="http://i.imgur.com/3X6TmMs.png" style="float:left;"/>  
  
Clicking on that button, will activate the script and then, magic happens:  
<img src="http://i.imgur.com/LTfcMeP.png" width="300" style="float:left;" />  
  
And there is another magic button. Push it with all your might:  
<img src="http://i.imgur.com/M0x9Rj9.png" width="300" style="float:left;" />  
  
Gosh. So much magic. There is another button? Push it now. Can't wait anymore:  
<img src="http://i.imgur.com/7uvQDby.png" width="300" style="float:left;" />  

As you can imagine, this user *jQuery.animate* to slide, and you can close each panel, but, it's just as seen magic going away. I will save you from this suffering. You're welcome.

### Implementation

It's simple as 1,2,3. And, I will present as 1,2,3.

1- Implement the external files:
```html
<link rel="stylesheet" href="css/main.css">
<link rel="stylesheet" href="css/aside-onion.css">
<script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
<script type="text/javascript" src="js/jquery-aside-onion.js"></script>
```
> You just need jQuery(if possible 2.1.1), Aside Onion JS and CSS

2- Create the script which contains the data:
```js
jQuery(document).ready(function($){
	$(this).asiion({
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
```

3- Implement any tag that can be clicked with class **asiion-open** and attribute **asiion="test"**
```html
<button class="asiion-open" asiion="test">OPEN MENU</button>
```

This is it for now. Later I will explain which parameters you can send throw ```$(document).asiion();```.

### Tasks

Things I want to implement:
- [ ] Documentation
- [ ] Dinamyc content
- [ ] Dinamyc content by URL
- [ ] Make template possible to change
- [ ] Get template by URL
- [ ] Aside menu from left to right
- [ ] Think on new things to add
