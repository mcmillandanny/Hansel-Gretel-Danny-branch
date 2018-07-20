console.log(`Hanesel and Gretel Project`)


// var controller = new SrcollMagic.controller();


// scene1.addIndicators({
// 	name: 'triggerdown',
// 	indent: 100,
// 	colorStart: 'yellow',
// 	colorTrigger: 'red'
// })

// var scene1 = new SrcollMagic.Scene({
// 	triggerElement: 'test-text';
// }).setTween('animate1', 0.5, { backgroundColor: red })

// controller.addScene(scene1)


// text-scaling-demo

// var scale_text = TweenMax.to('.test-text', 1, {
// 	transform: 'rotate(90deg)',
// 	 ease: Linear.easeNone
// });


// var controller = new ScrollMagic.Controller();

// var scale_text = new ScrollMagic.Scene({
//   triggerElement: '.part2'
// })
// // .setTween(scale_text);

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
	triggerElement: '#test-text'
})
.setClassToggle('#test-text', 'show')
.addTo(controller);









