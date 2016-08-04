$(function(){
	// 添加背景泡泡;

	for(var i=0;i<200;i++){
		var r1=Math.floor(Math.random()*225);
		var g1=Math.floor(Math.random()*225);
		var b1=Math.floor(Math.random()*225);
		var ws=Math.floor(Math.random()*10+30);
		var ls=Math.floor(Math.random()*1366);
		var ts=Math.floor(Math.random()*667);

		$('<div>')
		.addClass('bubble')
		.css({
			background:'rgba('+r1+','+g1+','+b1+',0.8)',
			width:ws,
			height:ws,
			top:ts,
			left:ls,
		})
		.attr('id',i)
		.appendTo('.men')
	}



	// for(var i=100;i<300;i++){
	// 	var ws=Math.floor(Math.random()*10+30);
	// 	var ls=Math.floor(Math.random()*1250);
	// 	var ts=Math.floor(Math.random()*560);

	// 	$('<div>')
	// 	.addClass('bubble')
	// 	.css({
	// 		background:'red',
	// 		width:ws,
	// 		height:ws,
	// 		top:ts,
	// 		left:ls,
	// 		opacity:0.9
	// 	})
	// 	.attr('id',i)
	// 	.appendTo('.men')
	// }

	function zuoyoudong(obj){
		setInterval(function(){
			$(obj).animate({left:parseInt(obj.style.left)+50}).animate({left:parseInt(obj.style.left)})
		
		},1000)
	}


	function youzuodong(obj){
		setInterval(function(){
			$(obj).animate({left:parseInt(obj.style.left)-50}).animate({left:parseInt(obj.style.left)})
	
		},1000)
	}
	function shangxiadong(obj){
		setInterval(function(){
			$(obj).animate({top:parseInt(obj.style.top)-50}).animate({top:parseInt(obj.style.top)})
		
		},1000)
	}
	function xiashangdong(obj){
		setInterval(function(){
			$(obj).animate({top:parseInt(obj.style.top)+50}).animate({top:parseInt(obj.style.top)})
		
		},1000)
	}
	for(var i=0;i<100;i++){
		if(i%2==0){
			zuoyoudong($('.bubble')[i])
		}else{
			youzuodong($('.bubble')[i])

		}
		
	}
	for(var i=100;i<150;i++){
		if(i%2==0){
			shangxiadong($('.bubble')[i])
		}else{
			xiashangdong($('.bubble')[i])

		}
		
	}

	for(var i=150;i<200;i++){
		if(i%3==0){
			$($('.bubble')[i]).addClass('yuanquan')
		}else{
			$($('.bubble')[i]).addClass('yuanquan2')

		}
		
	}
	
	// 添加方块
	for(var i=0;i<15;i++){
		for(var j=0;j<44;j++){
			$('<div>')
			.addClass('gezi')
			.attr('id',i+'-'+j)
			.appendTo('.snake');
		}
	}
	// 初始化蛇的位置。让蛇的位置最初在左上角占据三个格子；
	// data   数据
	// a:蛇的位置坐标
	var she=[
		{x:0,y:0},
		{x:0,y:1},
		{x:0,y:2}
	];
	// b:蛇的位置坐标知否存在   用以判断蛇会不会把自己装了
	var shebiao={
		'0-0':true,
		'0-1':true,
		'0-2':true
	}

	for(var i=0;i<she.length;i++){
		if(i==she.length-1){
		$('#'+she[i].x+'-'+she[i].y).addClass('shetouyou');
		}else{
		$('#'+she[i].x+'-'+she[i].y).addClass('sheshen');
	}

	}

	// 放食物
	 foods=function(){
		do{
		var x=Math.floor(Math.random()*15);
		var y=Math.floor(Math.random()*44);
		}while(shebiao[x+'-'+y])
		$('#'+x+'-'+y).addClass('yellow');
		$('<div>+10</div>').addClass('grades').appendTo('#'+x+'-'+y);
		$('#'+parseInt(x+1)+'-'+parseInt(y)).animate({top:20}).delay(20).animate({top:0});
		$('#'+parseInt(x-1)+'-'+parseInt(y)).animate({top:-20}).delay(20).animate({top:0});
		$('#'+parseInt(x)+'-'+parseInt(y+1)).animate({left:20}).delay(20).animate({left:0});
		$('#'+parseInt(x)+'-'+parseInt(y-1)).animate({left:-20}).delay(20).animate({left:0});

		$('#'+parseInt(x+2)+'-'+parseInt(y)).animate({top:15}).delay(20).animate({top:0});
		$('#'+parseInt(x-2)+'-'+parseInt(y)).animate({top:-15}).delay(20).animate({top:0});
		$('#'+parseInt(x)+'-'+parseInt(y+2)).animate({left:15}).delay(20).animate({left:0});
		$('#'+parseInt(x)+'-'+parseInt(y-2)).animate({left:-15}).delay(20).animate({left:0});




		$('#'+parseInt(x+3)+'-'+parseInt(y)).animate({top:10}).delay(20).animate({top:0});
		$('#'+parseInt(x-3)+'-'+parseInt(y)).animate({top:-10}).delay(20).animate({top:0});
		$('#'+parseInt(x)+'-'+parseInt(y+3)).animate({left:10}).delay(20).animate({left:0});
		$('#'+parseInt(x)+'-'+parseInt(y-3)).animate({left:-10}).delay(20).animate({left:0});





		$('#'+parseInt(x+4)+'-'+parseInt(y)).animate({top:5}).delay(20).animate({top:0});
		$('#'+parseInt(x-4)+'-'+parseInt(y)).animate({top:-5}).delay(20).animate({top:0});
		$('#'+parseInt(x)+'-'+parseInt(y+4)).animate({left:5}).delay(20).animate({left:0});
		$('#'+parseInt(x)+'-'+parseInt(y-4)).animate({left:-5}).delay(20).animate({left:0});
		return {x:x,y:y};
		
	}

	var shiwu=foods();
	// 返回蛇的坐标
	var zuobiao =function(obj){
		return obj.x+'-'+obj.y;
	}
	// 上下左右键让蛇动起来
	var fangxiang='you';
	$(document).on('keydown',function(e){
		e.preventDefault();
		var fangxiangbiao={
			'xia':40,
			'shang':38,
			'zuo':37,
			'you':39
		}
		if(Math.abs(e.keyCode-fangxiangbiao[fangxiang])==2){
			return;
		}
		if(e.keyCode==37){
			fangxiang='zuo';			
		}if(e.keyCode==38){
			fangxiang='shang';
		}if(e.keyCode==39){
			fangxiang='you';
		}if(e.keyCode==40){
			fangxiang='xia';
		}
	})

	// 让蛇移动起来
	var i=0;
	move =function(){
		var oldhead=she[she.length-1];
		if(fangxiang=='you'){
			var newhead={x:oldhead.x,y:oldhead.y+1};
		}else if(fangxiang=='xia'){
			var newhead={x:oldhead.x+1,y:oldhead.y};
		}else if(fangxiang=='zuo'){
			var newhead={x:oldhead.x,y:oldhead.y-1};
		}else if(fangxiang=='shang'){
			var newhead={x:oldhead.x-1,y:oldhead.y};
		}
		if(shebiao[newhead.x+'-'+newhead.y]){
			$('.fenshu').html('当前得分:'+i);
			$('.zhuangsile').css({display:'block'})
			zanting();
			return;
		}
		if(newhead.x==15||newhead.y==44||newhead.x==-1||newhead.y==-1){
			$('.fenshu').html('当前得分:'+i);
			$('.zhuangsile').css({display:'block'});
			zanting();
			return;
		}

		if(newhead.x==shiwu.x&&newhead.y==shiwu.y){
			$('#'+zuobiao(shiwu)).removeClass('yellow');
			$('.grades').animate({opacity:1}).delay(200).animate({opacity:0},function(){
				$('#'.shiwu.x+'-'+shiwu.y).remove('.grades');
			});
			$('#audio')[0].play();
			i+=10;
			$('.dangqianfenshu').html('分数:<span>'+i+'</span>');
			shiwu=foods();			
		}else{	
			var weiba=she.shift();
			delete shebiao[weiba.x+'-'+weiba.y];
			$('#'+zuobiao(weiba)).removeClass('sheshen');
		}
		if(fangxiang=='you'){
			$('#'+zuobiao(newhead)).addClass('shetouyou');
		}else if(fangxiang=='zuo'){
			$('#'+zuobiao(newhead)).addClass('shetouzuo');
		}else if(fangxiang=='shang'){
			$('#'+zuobiao(newhead)).addClass('shetoushang');
		}else{
			$('#'+zuobiao(newhead)).addClass('shetouxia');
		}		
		$('#'+zuobiao(oldhead)).attr('class','gezi');
		$('#'+zuobiao(oldhead)).addClass('sheshen');
		shebiao[newhead.x+'-'+newhead.y]=true;
		if(fangxiang=='you'){
			$('#'+parseInt(newhead.x+1)+'-'+parseInt(newhead.y)).animate({top:10}).delay(50).animate({top:0});
			$('#'+parseInt(newhead.x-1)+'-'+parseInt(newhead.y)).animate({top:-10}).delay(50).animate({top:0});		
			$('#'+parseInt(newhead.x)+'-'+parseInt(newhead.y+2)).animate({left:20}).delay(50).animate({left:0});
		}else if(fangxiang=='zuo')	{
			$('#'+parseInt(newhead.x+1)+'-'+parseInt(newhead.y)).animate({top:10}).delay(50).animate({top:0});
			$('#'+parseInt(newhead.x-1)+'-'+parseInt(newhead.y)).animate({top:-10}).delay(50).animate({top:0});		
			$('#'+parseInt(newhead.x)+'-'+parseInt(newhead.y-2)).animate({left:-20}).delay(50).animate({left:0});
		}else if(fangxiang=='xia'){
			$('#'+parseInt(newhead.x+2)+'-'+parseInt(newhead.y)).animate({top:10}).delay(50).animate({top:0});		
			$('#'+parseInt(newhead.x)+'-'+parseInt(newhead.y+1)).animate({left:10}).delay(50).animate({left:0});
			$('#'+parseInt(newhead.x)+'-'+parseInt(newhead.y-1)).animate({left:-10}).delay(50).animate({left:0});
		}else{
			$('#'+parseInt(newhead.x-2)+'-'+parseInt(newhead.y)).animate({top:-10}).delay(50).animate({top:0});		
			$('#'+parseInt(newhead.x)+'-'+parseInt(newhead.y+1)).animate({left:10}).delay(50).animate({left:0});
			$('#'+parseInt(newhead.x)+'-'+parseInt(newhead.y-1)).animate({left:-10}).delay(50).animate({left:0});
		}
		
		she.push(newhead);
	}



$('#one').on('click',function(e){
		e.stopPropagation();

	$('#one')[0].checked=true;
	$('#two')[0].checked=false;		
})

$('#two').on('click',function(e){
		e.stopPropagation();

	$('#two')[0].checked=true;
	$('#one')[0].checked=false;		
})

	
//事件间隔函数
	var t;
	var kaishi=function(){
		clearInterval(t)
		if($('#one')[0].checked){
			$('#two')[0].checked=false;
			$('.zantingxia').addClass('xialai');
			$('.dangqianfenshu').addClass('xialai');
			$('.nandu').addClass('xialai');
			$('.kaishi').addClass('xialai');
			t=setInterval(move,200);
		}else if($('#two')[0].checked){
			$('#one')[0].checked=false;
			t=setInterval(move,100);

		}
		 
	}
	var zanting=function(){	
		clearInterval(t);
	}
	$(document).on('keydown',function(e){
		if(e.keyCode==32){
			$('.beijing').css({display:'none'});
			if($(document).attr('zhuangtai')=='1'){
				zanting();
				$(document).attr('zhuangtai','0');
			}else{					
				kaishi();
				$(document).attr('zhuangtai','1');
			}
		}
	});


// kaishi();
	// 开始游戏按钮
	$('.kaishi').on('click',function(){
		kaishi();
		if($('document').attr('zhuangtai')=='1'){
				$(document).attr('zhuangtai','0');
		}else{
				$(document).attr('zhuangtai','1');

		}
	})


	$('.zantingxia').on('click',function(){
		zanting();
		if($('document').attr('zhuangtai')=='1'){
				$(document).attr('zhuangtai','0');
		}else{
				$(document).attr('zhuangtai','1');

		}
	})




	$('.chongxinkaishi').on('click',function(){
		window.location.reload();
		
	});
// })




	$('.nandu').on('click',function(e){
		e.stopPropagation();
		$('.nanduxuanze').addClass('xialai');
	})


	$(document).on('click',function(e){
		e.stopPropagation();
		$('.nanduxuanze').removeClass('xialai');
	})


	$('.kaishiba').on('click',function(){	
		$('.men').removeClass('chuchu');
		$('.bigx').removeClass('xianxian');
		$('.men').addClass('xiaoshi');
		$('.bigx').addClass('chuxianle');
	})


	$('#fanhui').on('click',function(){
		$('.men').removeClass('xiaoshi');
		$('.men').addClass('chuchu');
		$('.bigx').removeClass('chuxianle');
		$('.bigx').addClass('xianxian');
		window.location.reload();
		

	})
})