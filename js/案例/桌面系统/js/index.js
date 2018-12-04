window.onload = function(){
		//获取所有动态调整元素
		var menu_boxDom = document.getElementById("menu_box");
		var menuDom = document.getElementById("menu");
		var menuChildDoms = menuDom.getElementsByTagName("li");
		/*start menu_box*/
		(function(){
				document.oncontextmenu = function(e){
					//右键显示菜单
					var x = e.clientX;
					var y = e.clientY;
					menu_boxDom.style.top = y-5+"px";
					menu_boxDom.style.left = x-5+"px";
					menu_boxDom.style.display = "block";
					menu_boxDom.style.opacity = 1;
					//禁止掉浏览器右键的默认行为
					return false;
				};
				//任意键按下，当前菜单消失
				document.addEventListener("mousedown",function(){
					menu_boxDom.style.opacity = 0;
					menu_boxDom.style.display = "none";
				},false);
				//封装test键值
				var menuKey = {
					New:function(){
							new_();
						},
					Newfile:function(){
							new_file();
						},
					Refresh:function(){
						alert("刷新")
					},
					Music:function(){
							music_play();
						},
					Movie:function(){
						alert("电影")
					},
					Exit:function(){
						alert("退出")
					}
				};
				//将对象转换为类数组进行传值
				var menuValue = [];
				for(var key in menuKey){
					menuValue.push(menuKey[key])
				};
				for(var i= 0;i<menuValue.length;i++){
					menuChildDoms[i].addEventListener("mousedown",menuValue[i],false);
				};
				
			})();
			/*end menu_box*/
			/*start new*/
			function new_(){
				var NewDom = document.createElement("div");
							NewDom.className = "desk_icon";
							var html = "<p class='iconfont' style='font-size:40px;color:#E6D995;margin-left:10px'>&#xe6a8;</p>文件夹项";
							NewDom.innerHTML = html;
							NewDom.style.marginTop = "5px";
							NewDom.style.animation = "file_in 0.6s ease";
							document.body.appendChild(NewDom);
			}
			/*end new*/
			/*start new_file*/
			function new_file(){
				//定义窗口标题
							var window_boxDoms = document.createElement("div");
							window_boxDoms.className = "window_box";
							window_boxDoms.innerHTML =   "<div class='title_box'>"+
															"<h2>弗兰纳忠</h2>"+
															"<a href='javascript:void(0)'>关闭</a>"+
															"<a href='javascript:void(0)'>最大化</a>"+
															"<a href='javascript:void(0)'>最小化</a>"+
															"</div>"+
															"<div class='resize'></div>";
							document.body.appendChild(window_boxDoms);
							window_boxMove();
			}
			/*end new_file*/
			/*start music_player*/
			//创建点击被歌曲
			(function(){
		//创建音乐播放器对象
		var musicDom = document.getElementById("audio");
		var music_menu = [
			//咱们结婚吧
			{
				src:"music/齐晨 - 咱们结婚吧.mp3",
				bg:"url('img/咱们结婚吧.jpg') no-repeat",
				music_name:"咱们结婚吧",
				music_player:"齐晨",
				lyric:"[]\n"+
					"[00:00.33]咱们结婚吧-齐晨\n"+
					"[00:03.06]作词：Jane欢欢&张维作曲：高磊\n"+
					"[00:20.05]洁白的婚纱\n"+
					"[00:22.02]手捧着鲜花\n"+
					"[00:24.24]美丽得像童话\n"+
					"[00:28.55]想起那年初夏\n"+
					"[00:30.71]我为你牵挂\n"+
					"[00:32.78]在一起就犯傻\n"+
					"[00:35.25]丘比特轻轻飞过月光下\n"+
					"[00:39.77]潘多拉她听到了回答\n"+
					"[00:44.11]礼堂钟声 在敲打 幸福的密码\n"+
					"[00:52.63]哦My Love 咱们结婚吧\n"+
					"[00:57.21]好想和你拥有一个家\n"+
					"[01:01.15]这一生最美的梦啊\n"+
					"[01:06.02]有你陪伴我同闯天涯\n"+
					"[01:09.85]哦My Love 咱们结婚吧\n"+
					"[01:14.43]我会用一生去爱你的\n"+
					"[01:18.84]我愿把一切都放下\n"+
					"[01:23.42]给你幸福的家\n"+
					"[01:47.77]洁白的婚纱\n"+
					"[01:49.97]手捧着鲜花\n"+
					"[01:52.04]美丽得像童话\n"+
					"[01:56.40]想起那年初夏\n"+
					"[01:58.42]我为你牵挂\n"+
					"[02:00.61]在一起就犯傻\n"+
					"[02:03.14]丘比特轻轻飞过月光下\n"+
					"[02:07.61]潘多拉她听到了回答\n"+
					"[02:11.90]礼堂钟声 在敲打 幸福的密码\n"+
					"[02:20.42]哦My Love 咱们结婚吧\n"+
					"[02:25.11]好想和你拥有一个家\n"+
					"[02:28.97]这一生最美的梦啊\n"+
					"[02:33.89]有你陪伴我同闯天涯\n"+
					"[02:37.60]哦My Love 咱们结婚吧\n"+
					"[02:42.19]我会用一生去爱你的\n"+
					"[02:46.71]我愿把一切都放下\n"+
					"[02:51.30]给你幸福的家\n"+
					"[02:57.02]哦My Love 咱们结婚吧\n"+
					"[03:01.50]好想和你拥有一个家\n"+
					"[03:05.43]这一生最美的梦啊\n"+
					"[03:10.24]有你陪伴我同闯天涯\n"+
					"[03:14.06]哦My Love 咱们结婚吧\n"+
					"[03:18.64]我会用一生去爱你的\n"+
					"[03:23.23]我愿把一切都放下\n"+
					"[03:27.81]给你幸福的家\n"
			},
			//红玫瑰
			{
				src:"music/陈奕迅 - 红玫瑰.mp3",
				bg:"url('img/红玫瑰.jpg') no-repeat",
				music_name:"红玫瑰",
				music_player:"陈奕迅",
				lyric:"[]\n"+
					"[00:00.79]红玫瑰 - 陈奕迅\n"+
					"[00:02.90]词：李焯雄 曲：梁翘柏 编曲：梁翘柏\n"+
					"[00:16.22]梦里梦到醒不来的梦\n"+
					"[00:18.83]红线里被软禁的红\n"+
					"[00:23.68]所有刺激剩下疲乏的痛\n"+
					"[00:26.84]再无动于衷\n"+
					"[00:30.12]从背后抱你的时候\n"+
					"[00:33.96]期待的却是她的面容\n"+
					"[00:37.65]说来实在嘲讽 我不太懂\n"+
					"[00:41.37]偏渴望你懂\n"+
					"[00:44.84]是否幸福轻得太沉重\n"+
					"[00:48.49]过度使用不痒不痛\n"+
					"[00:52.41]烂熟透红空洞了的瞳孔\n"+
					"[00:56.43]终于掏空 终于有始无终\n"+
					"[00:59.82]得不到的永远在骚动\n"+
					"[01:03.49]被偏爱的 都有恃无恐\n"+
					"[01:07.53]玫瑰的红 容易受伤的梦\n"+
					"[01:11.42]握在手中却流失于指缝\n"+
					"[01:14.81]又落空\n"+
					"[01:31.25]红是朱砂痣烙印心口\n"+
					"[01:33.89]红是蚊子血般平庸\n"+
					"[01:38.64]时间美化那仅有的悸动\n"+
					"[01:41.97]也磨平激动\n"+
					"[01:45.20]从背后抱你的时候\n"+
					"[01:48.98]期待的却是她的面容\n"+
					"[01:52.64]说来实在嘲讽\n"+
					"[01:55.03]我不太懂 偏渴望你懂\n"+
					"[01:59.78]是否幸福轻得太沉重\n"+
					"[02:03.48]过度使用 不痒不痛\n"+
					"[02:07.24]烂熟透红空洞了的瞳孔\n"+
					"[02:11.44]终于掏空 终于有始无终\n"+
					"[02:14.75]得不到的永远在骚动\n"+
					"[02:18.50]被偏爱的都有恃无恐\n"+
					"[02:22.47]玫瑰的红 容易受伤的梦\n"+
					"[02:26.63]握在手中却流失于指缝\n"+
					"[02:29.67]又落空\n"+
					"[02:44.84]是否说爱都太过沉重\n"+
					"[02:48.44]过度使用不痒不痛\n"+
					"[02:52.23]烧得火红 蛇行缠绕心中\n"+
					"[02:56.45]终于冷冻终于有始无终\n"+
					"[02:59.81]得不到的永远在骚动\n"+
					"[03:03.44]被偏爱的都有恃无恐\n"+
					"[03:07.46]玫瑰的红 容易受伤的梦\n"+
					"[03:11.52]握在手中却流失于指缝\n"+
					"[03:14.98]得不到的永远在骚动\n"+
					"[03:18.48]被偏爱的 都有恃无恐\n"+
					"[03:22.28]玫瑰的红 伤口绽放的梦\n"+
					"[03:26.41]握在手中却流失于指缝\n"+
					"[03:29.74]再落空\n"
			},
			//南山南
			{
				src:"music/马頔-南山南.mp3",
				bg:"url('img/南山南.jpg') no-repeat",
				music_name:"南山南",
				music_player:"马頔",
				lyric:"[]\n"+
					"[00:00.52]你在南方的艳阳里\n"+
					"[00:04.06]大雪纷飞\n"+
					"[00:08.37]我在北方的寒夜里\n"+
					"[00:10.85]四季如春\n"+
					"[00:14.73]如果天黑之前来得及\n"+
					"[00:18.36]我要忘了你的眼睛\n"+
					"[00:22.14]穷极一生\n"+
					"[00:24.16]做不完一场梦\n"+
					"[00:30.01]他不再和谁谈论相逢的孤岛\n"+
					"[00:37.12]因为心里早已荒无人烟\n"+
					"[00:44.34]他的心里再装不下一个家\n"+
					"[00:51.64]做一个只对自己说谎的哑巴\n"+
					"[00:58.72]他说你任何为人称道的美丽\n"+
					"[01:02.67]不及他第一次遇见你\n"+
					"[01:07.34]时光苟延残喘\n"+
					"[01:09.74]无可奈何\n"+
					"[01:13.92]如果所有土地连在一起\n"+
					"[01:17.35]走上一生\n"+
					"[01:18.06]只为拥抱你\n"+
					"[01:21.01]喝醉了他的梦\n"+
					"[01:24.90]晚安\n"+
					"[02:13.49]他听见有人唱着古老的歌\n"+
					"[02:20.51]唱着今天还在远方\n"+
					"[02:23.59]发生的像在她眼睛里\n"+
					"[02:30.38]看到的孤岛\n"+
					"[02:35.14]没有悲伤\n"+
					"[02:36.83]但也没有花朵\n"+
					"[02:43.16]你在南方的艳阳里大雪纷飞\n"+
					"[02:50.77]我在北方的寒夜里四季如春\n"+
					"[02:57.61]如果天黑之前来得及\n"+
					"[03:00.82]我要忘了你的眼睛穷极一生\n"+
					"[03:06.46]做不完一场梦\n"+
					"[03:12.49]你在南方的艳阳里大雪纷飞\n"+
					"[03:20.32]我在北方的寒夜里四季如春\n"+
					"[03:26.83]如果天黑之前来得及\n"+
					"[03:30.28]我要忘了你的眼睛穷极一生\n"+
					"[03:36.10]做不完一场梦\n"+
					"[03:41.86]大梦初醒\n"+
					"[03:43.54]荒唐了一生\n"+
					"[03:49.63]南山南\n"+
					"[03:53.00]北秋悲\n"+
					"[03:56.80]南山有谷堆南风喃\n"+
					"[04:07.81]北海北北海有墓碑\n"+
					"[04:18.86]南山南\n"+
					"[04:22.52]北秋悲\n"+
					"[04:26.20]南山有谷堆南风喃\n"+
					"[04:37.35]北海北北海有墓碑\n"+
					"[04:48.52]北海有墓碑\n"
			},
			//惊叹号
			{
				src:"music/周杰伦 - 惊叹号.mp3",
				bg:"url('img/惊叹号.jpg') no-repeat",
				music_name:"惊叹号",
				music_player:"周杰伦",
				lyric:"[]\n"+
					"[ti:惊叹号]\n"+
					"[00:00.22]惊叹号 - 周杰伦\n"+
					"[00:43.97]越山丘 过哑口 云端的空气稀薄\n"+
					"[00:51.83]这街头 敌意多 烟硝弥漫不了我\n"+
					"[01:00.03]空袭对我是种罗嗦\n"+
					"[01:06.35]警报呢 是让你们有 时间走\n"+
					"[01:19.12]哇 靠毅力极限燃烧\n"+
					"[01:21.10]哇 靠斗志仰天咆啸\n"+
					"[01:23.17]哇 靠自己创作跑道 靠！！！！！！！\n"+
					"[01:27.34]靠 毅力极限燃烧\n"+
					"[01:29.28]哇 靠斗志仰天咆啸\n"+
					"[01:31.38]哇 靠高速奔向目标 靠！！！！！！！\n"+
					"[01:46.79]顺向坡 从不走 逆着风清醒了我\n"+
					"[01:54.99]我沉默 话不多 赢的时候才开口\n"+
					"[02:03.00]势均力敌才叫战斗\n"+
					"[02:09.37]希望呢 你们是像样 的对手\n"+
					"[02:22.12]哇 靠毅力极限燃烧\n"+
					"[02:24.19]哇 靠斗志仰天咆啸\n"+
					"[02:26.26]哇 靠自己创作跑道 靠！！！！！！！\n"+
					"[02:30.49]靠 毅力极限燃烧\n"+
					"[02:32.36]哇 靠斗志仰天咆啸\n"+
					"[02:34.38]哇 靠高速奔向目标 靠！！！！！！！\n"+
					"[03:03.19]哇 靠毅力极限燃烧\n"+
					"[03:04.88]哇 靠斗志仰天咆啸\n"+
					"[03:06.94]哇 靠自己创作跑道 哇 靠\n"+
					"[03:11.00]高楼的视野 不知名的街\n"+
					"[03:13.04]霓虹侵略 庸俗了这一切\n"+
					"[03:15.04]是与非 隔着路口对决\n"+
					"[03:17.07]我主宰 我自己的世界\n"+
					"[03:19.12]横着写 意气风发的谁\n"+
					"[03:21.21]永不放弃 去超越 去粉碎 是非\n"+
					"[03:27.27]哇 靠毅力极限燃烧\n"+
					"[03:29.29]哇 靠斗志仰天咆啸\n"+
					"[03:31.36]哇 靠自己创作跑道 靠！！！！！！！\n"+
					"[03:35.55]靠 毅力极限燃烧\n"+
					"[03:37.42]哇 靠斗志仰天咆啸\n"+
					"[03:39.49]哇 靠高速奔向目标 靠！！！！！！！ 靠\n"
			},
			//小苹果
			{
				src:"music/小苹果.mp3",
				bg:"url('img/小苹果.jpg') no-repeat",
				music_name:"小苹果",
				music_player:"筷子兄弟",
				lyric:"[]\n"+
					"[00:00.98]小苹果(电影《老男孩之猛龙过江》宣传曲)-筷子兄弟\n"+
					"[00:17.04]我种下一颗种子\n"+
					"[00:18.90]终于长出了果实\n"+
					"[00:20.59]今天是个伟大日子\n"+
					"[00:24.71]摘下星星送给你\n"+
					"[00:26.36]拽下月亮送给你\n"+
					"[00:28.27]让太阳每天为你升起\n"+
					"[00:32.31]变成蜡烛燃烧自己\n"+
					"[00:34.14]只为照亮你\n"+
					"[00:36.27]把我一切都献给你\n"+
					"[00:37.92]只要你欢喜\n"+
					"[00:40.12]你让我每个明天都 变得有意义\n"+
					"[00:43.94]生命虽短爱你永远 不离不弃\n"+
					"[00:47.50]你是我的小呀小苹果儿\n"+
					"[00:51.31]怎么爱你都不嫌多\n"+
					"[00:54.72]红红的小脸儿温暖我的心窝\n"+
					"[00:59.14]点亮我生命的火 火火火火火\n"+
					"[01:03.09]你是我的小呀小苹果儿\n"+
					"[01:06.66]就像天边最美的云朵\n"+
					"[01:10.07]春天又来到了花开满山坡\n"+
					"[01:14.44]种下希望就会收获\n"+
					"[01:33.91]从不觉得你讨厌\n"+
					"[01:35.46]你的一切都喜欢\n"+
					"[01:37.38]有你的每天都新鲜\n"+
					"[01:41.57]有你阳光更灿烂\n"+
					"[01:43.35]有你黑夜不黑暗\n"+
					"[01:45.32]你是白云我是蓝天\n"+
					"[01:49.22]春天和你漫步在盛开的 花丛间\n"+
					"[01:53.08]夏天夜晚陪你一起看 星星眨眼\n"+
					"[01:56.86]秋天黄昏与你徜徉在 金色麦田\n"+
					"[02:00.76]冬天雪花飞舞有你 更加温暖\n"+
					"[02:04.35]你是我的小呀小苹果儿\n"+
					"[02:08.14]怎么爱你都不嫌多\n"+
					"[02:11.50]红红的小脸儿温暖我的心窝\n"+
					"[02:15.93]点亮我生命的火 火火火火火\n"+
					"[02:20.02]你是我的小呀小苹果儿\n"+
					"[02:23.45]就像天边最美的云朵\n"+
					"[02:26.86]春天又来到了花开满山坡\n"+
					"[02:31.25]种下希望就会收获\n"+
					"[02:50.82]你是我的小呀小苹果儿\n"+
					"[02:54.37]怎么爱你都不嫌多\n"+
					"[02:57.85]红红的小脸儿温暖我的心窝\n"+
					"[03:01.99]点亮我生命的火 火火火火火\n"+
					"[03:05.79]你是我的小呀小苹果儿\n"+
					"[03:09.56]就像天边最美的云朵\n"+
					"[03:12.92]春天又来到了花开满山坡\n"+
					"[03:17.37]种下希望就会收获\n"
			},
			//李白
			{
				src:"music/李荣浩-李白.mp3",
				bg:"url('img/李白.jpg') no-repeat",
				music_name:"李白",
				music_player:"李荣浩",
				lyric:"[]\n"+
					"[00:00.70]李白 - 李荣浩\n"+
					"[00:01.71]词：李荣浩 曲：李荣浩\n"+
					"[00:18.15]大部分人要我学习去看 世俗的眼光\n"+
					"[00:26.47]我认真学习了世俗眼光 世俗到天亮\n"+
					"[00:34.31]一部外国电影没听懂一句话\n"+
					"[00:38.61]看完结局才是笑话\n"+
					"[00:42.63]你看我多乖多聪明多么听话 多奸诈\n"+
					"[00:51.48]喝了几大碗米酒再离开是为了模仿\n"+
					"[00:59.83]一出门不小心吐的那幅是谁的书画\n"+
					"[01:07.66]你一天一口一个 亲爱的对方\n"+
					"[01:11.92]多么不流行的模样\n"+
					"[01:16.04]都应该练练书法再出门闯荡\n"+
					"[01:19.67]才会有人热情买帐\n"+
					"[01:23.50]要是能重来 我要选李白\n"+
					"[01:27.66]几百年前做的好坏 没那么多人猜\n"+
					"[01:31.83]要是能重来 我要选李白\n"+
					"[01:35.72]至少我还能写写诗来澎湃 逗逗女孩\n"+
					"[01:40.18]要是能重来 我要选李白\n"+
					"[01:43.98]创作也能到那么高端 被那么多人崇拜\n"+
					"[01:51.77]要是能重来\n"+
					"[01:54.17]喝了几大碗米酒再离开是为了模仿\n"+
					"[02:02.48]一出门不小心吐的那幅是谁的书画\n"+
					"[02:10.25]你一天一口一个 亲爱的对方\n"+
					"[02:14.46]多么不流行的模样\n"+
					"[02:18.57]都应该练练书法再出门闯荡\n"+
					"[02:22.13]才会有人热情买帐\n"+
					"[02:26.14]要是能重来 我要选李白\n"+
					"[02:30.36]几百年前做的好坏 没那么多人猜\n"+
					"[02:34.65]要是能重来 我要选李白\n"+
					"[02:38.08]至少我还能写写诗来澎湃 逗逗女孩\n"+
					"[02:42.76]要是能重来 我要选李白\n"+
					"[02:46.64]创作也能到那么高端 被那么多人崇拜\n"+
					"[02:54.38]要是能重来\n"+
					"[03:27.71]要是能重来 我要选李白\n"+
					"[03:32.84]几百年前做的好坏 没那么多人猜\n"+
					"[03:37.01]要是能重来 我要选李白\n"+
					"[03:40.70]至少我还能写写诗来澎湃 逗逗女孩\n"+
					"[03:45.43]要是能重来 我要选李白\n"+
					"[03:49.26]创作也能到那么高端 被那么多人崇拜\n"+
					"[03:56.71]要是能重来\n"
			},
			//听见下雨的声音
			{
				src:"music/听见下雨的声音.mp3",
				bg:"url('img/听见下雨的声音.jpg') no-repeat",
				music_name:"听见下雨的声音",
				music_player:"魏如昀",
				lyric:"[]\n"+
					"[00:00.36]听见下雨的声音(电影《听见下雨的声音》主题曲) - 魏如昀\n"+
					"[00:02.48]词：方文山 曲：周杰伦\n"+
					"[00:23.52]竹篱上  停留着  蜻蜓\n"+
					"[00:29.07]玻璃瓶里插满  小小  森林\n"+
					"[00:36.87]青春  嫩绿的很  鲜明\n"+
					"[00:46.23]百叶窗  折射的  光影\n"+
					"[00:51.72]像有着心事的  一张  表情\n"+
					"[00:59.77]而你  低头拆信  想知道关于我的事情\n"+
					"[01:10.44]青苔入镜  檐下风铃  摇晃曾经\n"+
					"[01:20.11]回忆是  一行行无从  剪接的风景  爱始终年轻\n"+
					"[01:33.22]而我听见  下雨的声音\n"+
					"[01:39.02]想起你用唇语  说爱情\n"+
					"[01:44.70]幸福也可以  很安静\n"+
					"[01:50.63]我付出一直  很小心\n"+
					"[01:56.18]终于听见  下雨的声音\n"+
					"[02:01.98]于是我的世界  被吵醒\n"+
					"[02:07.53]就怕情绪红  了眼睛\n"+
					"[02:13.50]不舍的泪在  彼此的  脸上透明\n"+
					"[02:44.88]爱在过境  缘份不停  谁在担心\n"+
					"[02:54.31]窗台上  滴落的雨滴\n"+
					"[02:58.67]轻敲着伤心  凄美而动听\n"+
					"[03:07.35]而我听见  下雨的声音\n"+
					"[03:13.15]想起你用唇语  说爱情\n"+
					"[03:18.83]热恋的时刻  最任性\n"+
					"[03:24.69]不顾一切的  给约定\n"+
					"[03:30.18]终于听见  下雨的声音\n"+
					"[03:35.93]于是我的世界  被吵醒\n"+
					"[03:41.79]发现你始终  很靠近\n"+
					"[03:47.53]默默的陪在  我身边  态度坚定\n"
			},
			//恋人心
			{
				src:"music/魏新雨-恋人心.mp3",
				bg:"url('img/恋人心.jpg') no-repeat",
				music_name:"恋人心",
				music_player:"魏新雨",
				lyric:"[]\n"+
					"[00:00.76]恋人心 - 魏新雨\n"+
					"[00:06.24]词：张超 曲：张超\n"+
					"[00:28.72]化作风化作雨化作春走向你\n"+
					"[00:34.15]梦如声梦如影梦是遥望的掌印\n"+
					"[00:39.95]化作烟化作泥化作云飘向你\n"+
					"[00:45.76]思如海恋如城思念最遥不可及\n"+
					"[00:52.15]你问西湖水偷走她的几分美\n"+
					"[00:57.81]时光一去不再信誓旦旦留给谁\n"+
					"[01:03.37]你问长江水淘尽心酸的滋味\n"+
					"[01:09.19]剩半颗恋人心唤不回\n"+
					"[01:38.91]化作诗化作笔化作灯写着你\n"+
					"[01:44.33]默念着轻叹着那些深沉的字句\n"+
					"[01:50.15]化作路化作径化作情找寻你\n"+
					"[01:56.03]爱一次梦一场思念最遥遥无期\n"+
					"[02:01.93]你问西湖水偷走她的几分美\n"+
					"[02:08.02]时光一去不再信誓旦旦留给谁\n"+
					"[02:13.56]你问长江水淘尽心酸的滋味\n"+
					"[02:19.46]剩半颗恋人心唤不回\n"+
					"[02:25.44]你问西湖水偷走她的几分美\n"+
					"[02:31.15]时光一去不再信誓旦旦留给谁\n"+
					"[02:36.98]你问长江水淘尽心酸的滋味\n"+
					"[02:42.83]剩半颗恋人心唤不回\n"+
					"[02:48.70]剩半颗恋人心唤不回\n"+
					"[02:54.51]剩半颗恋人心唤不回\n"
			},
			//以后的以后
			{
				src:"music/庄心妍-以后的以后.mp3",
				bg:"url('img/以后的以后.jpg') no-repeat",
				music_name:"以后的以后",
				music_player:"庄心妍",
				lyric:"[]\n"+
					"[00:00.43]以后的以后 - 庄心妍\n"+
					"[00:01.74]词：玉镯儿 曲：陈伟\n"+
					"[00:33.59]风决定要走 云怎么挽留\n"+
					"[00:41.46]曾经抵死纠缠放空的手\n"+
					"[00:49.32]情缘似流水 覆水总难收\n"+
					"[00:56.97]我还站在你离开 离开的路口\n"+
					"[01:04.50]你既然无心 我也该放手\n"+
					"[01:11.92]何必痴痴傻傻纠缠不休\n"+
					"[01:19.89]是情深缘浅 留一生遗憾\n"+
					"[01:27.55]还是情浅缘深 一辈子怨偶\n"+
					"[01:35.51]没有我以后 一个人少喝点酒\n"+
					"[01:42.82]窗台外的衣服有没有人来收\n"+
					"[01:49.49]以后的以后 你是谁的某某某\n"+
					"[01:58.21]若是再见 只会让人更难受\n"+
					"[02:06.20]没有你以后 一个人四处旅游\n"+
					"[02:13.84]在某时某地交上三两个朋友\n"+
					"[02:21.15]以后的以后 我牵着别人衣袖\n"+
					"[02:29.34]若是有缘再见 也要学会笑着问候\n"+
					"[02:53.27]你既然无心 我也该放手\n"+
					"[03:00.47]何必痴痴傻傻纠缠不休\n"+
					"[03:08.54]是情深缘浅 留一生遗憾\n"+
					"[03:15.97]还是情浅缘深 一辈子怨偶\n"+
					"[03:24.06]没有我以后 一个人少喝点酒\n"+
					"[03:31.27]窗台外的衣服有没有人来收\n"+
					"[03:38.26]以后的以后 你是谁的某某某\n"+
					"[03:46.77]若是再见 只会让人更难受\n"+
					"[03:54.96]没有你以后 一个人四处旅游\n"+
					"[04:02.16]在某时某地交上三两个朋友\n"+
					"[04:09.91]以后的以后 我牵着别人衣袖\n"+
					"[04:17.92]若是有缘再见 也要学会笑着问候\n"+
					"[04:25.79]若是有缘再见 也要学会笑着问候\n"
			}

			];
		//定义点击内容切换音乐以及上下曲播放暂停
		var changeMusic_mark = true;
		function changeMusic(){
			var music_listDom = document.getElementById("music_list_box");
			var trDoms = music_listDom.getElementsByTagName("tr");
			//获取歌曲信息对象
			var music_iconDom = document.getElementById("music_icon");
			var music_nameDom = document.getElementById("music_name");
			var music_playerDom = document.getElementById("music_player");
			for(var i=1;i<trDoms.length;i++){
				trDoms[i].index = i;
				trDoms[i].onclick = function(){
					//路径
					musicDom.src = music_menu[this.index - 1].src;
					//歌手图
					music_iconDom.style.background = music_menu[this.index - 1].bg;
					music_iconDom.style.backgroundSize = "90px 90px";
					//歌名
					music_nameDom.innerHTML = music_menu[this.index - 1].music_name;
					//歌手名
					music_playerDom.innerHTML = music_menu[this.index - 1].music_player;
					musicDom.play();
					//if(mark){
						//$("#play").css({backgroundPosition:"-108px -45px"});
					//}else if(!){
						$("#play").css({backgroundPosition:"-337px -90px"});
						changeMusic_mark = false;
					//}
					this_index = this.index;
					//$("#lyric").val(music_menu[this_index - 1].lyric);
					//alert($("#lyric").val());
					$("#lyric_list").html(" ");
					var lyric_color = ["#6c6","#66f","#c90","#fcf"];
					var colorIndex = Math.floor(Math.random()*4);
					lyric(music_menu[this_index - 1].lyric,"lyric_box","lyric_list",musicDom,lyric_color[colorIndex]);
					function domName(id){
						return document.getElementById(id);
					}
					function lyric(lyric_ID,lyric_box_ID,liric_list_ID,audio_ID,selectColor){
						var lyric_boxDom = domName(lyric_box_ID);
						var lyric_listDom = domName(liric_list_ID);
						var audioDom = audio_ID;
						var lyric = lyric_ID;
						var html1 = null,html2 = null;
						var arr1 = lyric.split("\n"),arr2 = [],arr2_left = [],arr2_right = [];
						for (var i = 1;i<arr1.length;i++ ){
							arr2_left.push(arr1[i].split("]")[0]);
							arr2_right.push(arr1[i].split("]")[1]);
							
						};
						var arr2_left_left = [];
						for (var i = 0;i<arr2_left.length ;i++ ){
							//arr2_left_left.push(arr2_left[i].split("[")[0]);
							arr2_left_left.push(arr2_left[i].split("[")[1]);
						
						};
						var arr_min = [],arr_sec = [],arr_total = [];
						for(var j=0;j<arr2_left_left.length - 1;j++){
							arr_min.push(arr2_left_left[j].split(":")[0]);
							arr_sec.push(arr2_left_left[j].split(":")[1]);
							arr_total.push(arr_min[j]*60 + arr_sec[j]*1);
						}
						//��ȡ�������е�ʱ��  �Լ�ʱ���Ӧ�ĸ������
						//alert(arr_total[20]+"==========="+arr2_right[20]);
						//����ʾ���
						lyric_listDom.style.top = (lyric_boxDom.clientHeight / 2)+"px";
						lyric_boxDom.style.border = "5px solid "+selectColor+"";
						//���ֲ��ţ���ȡʱ��
						var currenttime = null;
						//alert(audioDom.duration);
						audioDom.ontimeupdate = function(){
							currenttime = audioDom.currentTime;
							var s = lyric_listDom.children;
							for(var i = 0;i<s.length;i++){
								if(s[i].id <= currenttime){
									s[i].style.color = selectColor?selectColor:"red";
									s[i].style.fontSize = "26px";
									lyric_listDom.style.top = (lyric_boxDom.clientHeight / 2)-i*25+"px";
									if(s[i-1]){
										s[i-1].style.color = "#fff";
										s[i-1].style.fontSize = "18px";
									}
								}
								
							}
							if(currenttime >= s[s.length-1].id){
									s[s.length-1].style.fontSize = "18px";
									s[s.length-1].style.color = "#fff";
								};
							
							var current_time = this.currentTime;
							document.getElementById("music_current_time").innerHTML = timeFormat(current_time);
							//随时间增高的icon
							var height = Math.floor((1 / this.duration) * this.currentTime * 100);
							document.getElementById("music_icon_loading").innerHTML = height+"%";
							document.getElementById("music_icon_mask").style.height = height +"%";

						}
						//���Ԫ�ص���ҳ
						for (var i = 0;i<arr_total.length;i++){
							lyric_listDom.innerHTML += "<li id="+arr_total[i]+" style='height:36px line-height:36px;letter-spacing:1px;margin:0px'>"+arr2_right[i]+"</li>";
						};

					};
				};
			};
			if(!musicDom.src)musicDom.src = music_menu[0].src;
			//控制暂停播放
			function play_stop(){
				$("#play").click(function(){
					if(changeMusic_mark){
						musicDom.play();
						$("#play").css({backgroundPosition:"-337px -90px"});
						changeMusic_mark = false;
					}else if(!changeMusic_mark){
						musicDom.pause();
						$("#play").css({backgroundPosition:"-108px -45px"});
						changeMusic_mark = true;
					}
				});
				
			};
			play_stop();
			
		};
		changeMusic();
		
		//歌曲时间进度
		function timer(){
			musicDom.oncanplaythrough = function(){
				var total_time = this.duration;
				document.getElementById("music_total_time").innerHTML = timeFormat(total_time);
			};
			//musicDom.ontimeupdate = function(){
				
			//}
		};
		timer();
		//时间格式化
		function timeFormat(time){
			var tt_m = Math.floor(time / 60);
			var tt_s = Math.floor(time % 60);
			tt_m = (tt_m/10 < 1)?("0"+tt_m):tt_m;
			tt_s = (tt_s/10 < 1)?("0"+tt_s):tt_s;
			return t = tt_m+":"+tt_s;
		}
		//音量控制
			function Volume(){
				var volume_controlDom = document.getElementById("volume_control");
				var volume_control_barDom = document.getElementById("volume_control_bar");
				var volumeDom = document.getElementById("volume");
				volume_controlDom.addEventListener("click",function(e){
					volumeDom.style.backgroundPosition = "-185px 2px";
					var ev = e||window.event;
					var parentLeft = volume_controlDom.parentElement.offsetLeft + volume_controlDom.offsetLeft;
					var bar_l = ev.clientX - parentLeft;
					var lip = bar_l / volume_controlDom.offsetWidth;
					musicDom.volume = lip -3;
					volume_control_barDom.style.left = (bar_l -210)+"px";
					
				},false);
				//定义音量开关;
				var changeVolumemark = true;
				//开关声音
				volumeDom.addEventListener("click",function(){
						if(musicDom.volume != 0 || changeVolumemark){
							this.style.backgroundPosition = "-185px -56px";
							musicDom.volume = 0;
							changeVolumemark = false;
						}else if(musicDom.volume = 0 || !changeVolumemark){
							this.style.backgroundPosition = "-185px 2px";
							musicDom.volume = volume_control_barDom.offsetLeft / volume_controlDom.offsetWidth;
							changeVolumemark = true;
						};
					},false);
				
			};
		Volume();
		function music_console_box_slider(){
			var music_console_boxDom = document.getElementById("music_console_box");
			var slider_switchDom =  document.getElementById("slider_switch");
			var music_list_boxDom = document.getElementById('music_list_box');
			var slider_mark = true;
			slider_switchDom.addEventListener("click",function(){
				if(slider_mark){
					move(music_console_boxDom,"left",0,-538,-8)
					music_list_boxDom.style.transition = 'all .5s ease';
					music_list_boxDom.style.opacity = 0;
					slider_mark = false;
				}else if(!slider_mark){
					move(music_console_boxDom,"left",-528,0,8)
					music_list_boxDom.style.transition = 'all .5s ease';
					music_list_boxDom.style.opacity = 1;
					slider_mark = true;
				}
			},false);
		};
		music_console_box_slider();
		
		//定义动画函数
		function move(obj,key,start,target,speed){
			var timer = null;
			clearInterval(timer);
			if(start<target){
				timer = setInterval(function(){
				obj["style"][key] = start + speed +"px";
				document.getElementById("slider_switch").style.backgroundPosition = "-46px -1px";
				if(speed==-1*start){
						document.getElementById("slider_switch").style.backgroundPosition = "-1px -1px";
						clearInterval(timer);
					};
				speed += 20;
				},20);
				
			}else if(start>target){//0 -528
				timer = setInterval(function(){
				obj["style"][key] = start + speed +"px";
				document.getElementById("slider_switch").style.backgroundPosition = "-46px -1px";
					if(speed==target){
						document.getElementById("slider_switch").style.backgroundPosition = "-24px -1px";
						clearInterval(timer);
					};
				speed -= 20;
				},20);
			}
		}
		
	})();
	
			/*end music_player*/
			/*start music_lyric*/
			function music_play(){
				$("#all_lyrics_box").animate({width:"100%",height:"100%"});
					$("#bottom_box").fadeOut();
					/*musicPlay and musicPause*/
					
					$(".lyric_close_btn").click(function(){
						$("#all_lyrics_box").animate({width:"0px",height:"0px"});
					});
					$("#all_lyrics_box").contextmenu(function(){
						return false;
					})
					$(".lyric_danmu_btn").click(function(){
						$("#dm_open").trigger("click");
						});
					$(".lyric_close_btn").click(function(){
						$("#audio_nanshan").src="";
						$("#bottom_box").fadeIn();
						
					});
			}
			/*end music_lyric*/
			/*start dm_box*/
			(function(){
				//动画列表
				var arr = ["openDownLeftRetourn","openDownRightRetourn","openUpLeftRetourn","openUpRightRetourn","perspectiveDownRetourn","perspectiveLeftRetourn","perspectiveRightRetourn"];
				
				//定义点击开关切换动画的函数
				$("#dm_open").click(function(){
					$("#dm_box").css("display","block").animate({height:"100%",width:"100%"},function(){
						/*$("#dm_open").css("display","none");*/
					});
					init();
					$("#dm_input").focus();
					
				});
				$("#dm_close").click(function(){
					$("#dm_box").animate({height:"0",width:"0%"},function(){
						$(this).css("display","none");
						//$("#bottom_box").fadeIn();
						/*$("#dm_open").css("display","block");*/
					});

				});
				
				//初始化弹幕
				function init(){
					//获取元素
					$("#dm_body").find("p").each(function(){
						//定义距离上边高度
						var time = randomTime();
						var _index = $(this).index();
						var _width = $(this).width();
						var _top = _index*50+10;
						//判断边界
						if(_top >= ($(window).height() - 200)){
							_top = _top - $(window).height();
						}
						var _left = $(window).width() - _width;
						$(this).css({top:_top+"px",left:_left+"px",color:randomColor()}).animate({left:-1*_width+"px"},time,function(){
							$(this).remove();
						});
					})

				};
				//获取输入框中的内容并添加到页面中
				function add(){
					var html = $("#dm_input").val();
					var $p = $("<p class='magictime "+arr[Math.floor(Math.random()*7)]+"'>"+html+"</p>");
					if($p)$p.appendTo($("#dm_body"));
					$("#dm_input").val("");
					$("#dm_input").focus();
				}
				//当鼠标点击发表评论时触发
				$("#dm_button").click(function(){
					add();
					//init();
					var _last = $("#dm_body").find("p").last();
					var _randomTop = randomRange()*40;
					_last.css({top:1000+"px",left:300+"px",color:randomColor()}).animate({top:_randomTop+"px",left:1800+"px"});
					_last.animate({left:-300+"px"},randomTime(),function(){
							$(this).remove();
						});
				});
				//随机颜色
				function randomColor(){
					var r = Math.floor(Math.random()*256);
					var g = Math.floor(Math.random()*256);
					var b = Math.floor(Math.random()*256);
					return "rgb("+r+","+g+","+b+")";
				}
				//随机速度
				function randomTime(){
					return Math.floor(Math.random()*10000+10000);
				}
				//随机的index来随机化top
				function randomRange(){
					return Math.floor(Math.random()*20)
				};
				$(document).keydown(function(e){
					if(e.keyCode == 13){
						$("#dm_button").trigger("click");
					}
				});
			})();
			/*end dm_box*/
			/*start window_box*/
			var zindex = 1;
			var window_boxMove = function(){
				var ww = window.innerWidth;
				var wh = window.innerHeight;  //可获取窗口的大小---width，height。
				//var boxDoms = document.getElementsByClassName("box");
				var titleDoms = document.getElementsByClassName("title_box");
				var titleDom = Array.prototype.slice.call(titleDoms);
				//var zindex = 1;//初始化层次
				titleDom.forEach(function(win){
					
					win.onmousedown = function(e){
					zindex++;//每次点击在原基础上++
					var sx = e.clientX;
					var sy = e.clientY;
					var width = this.parentElement.offsetWidth;
					var height = this.parentElement.offsetHeight;
					this.parentElement.style.zIndex = zindex;
					var sl = this.parentElement.offsetLeft;
					var st = this.parentElement.offsetTop;
					var x = sx - sl;
					var y = sy - st;
					//定义mouseover的函数
					var movefn = function(e){
						var ex = e.clientX;
						var ey = e.clientY;
						var el = ex-x;
						var et = ey-y;
						var judgex = ww-el-width;
						var judgey = wh-et-height;
							if(judgex>=0&&judgey>=0&&el>=0&&et>=0){//判断边界
							win.parentElement.style.left = el+"px";
							win.parentElement.style.top = et+"px";
							};
						};
					document.addEventListener("mousemove",movefn,false);
					document.onmouseup = function(){
						document.removeEventListener("mousemove",movefn,false);
							//return false;
						};
					};
				//最大化
				win.children[2].addEventListener("mousedown",function(){
					var winstyle = win.parentElement.style;
						winstyle.transition = "all 0.6s ease";
						winstyle.top = "0px";
						winstyle.left = "0px";
						winstyle.width = ww+"px";
						winstyle.height = wh+"px";
						winstyle.border = "0px solid transparent";
						//winstyle.transition = "all 0.3s ease";
						win.parentElement.lastElementChild.style.display = "none";
				},false);
				
				//resize
				win.parentElement.lastElementChild.addEventListener("mousedown",function(e){
					var sl = e.clientX;
					var st = e.clientY;
					var width = win.parentElement.offsetWidth;
					var height = win.parentElement.offsetHeight;
					mark = true;
					//绑定鼠标移动事件
					document.onmousemove = function(e){
						var el = e.clientX;
						var et = e.clientY;
						var plusx = el - sl;
						var plusy = et - st;
						var w = width+plusx;
						var h = height+plusy;
						if(w<ww&&h<wh){
							win.parentElement.style.width = (w<=300?300:w)+"px";
							win.parentElement.style.height = (h<=300?300:h)+"px";
						}else{
							win.parentElement.style.width = (w>ww?ww-16:w)+"px";
							win.parentElement.style.height = (h>wh?wh-16:h)+"px";
						}
					};
				},false);
				document.addEventListener("mouseup",function(e){
							document.onmousemove = function(e){
								return false;
							};
						},false);
				win.children[1].onmousedown = function(e){
					var this_ = this.parentElement.parentElement;
					this_.style.opacity = "0";
					this_.style.transition = "all 0.5s ease";
					setTimeout(function(){
						document.body.removeChild(this_);
					},500);
					//阻止冒泡
					e.stopPropagation();
				}
				});
			};
			/*end window_box*/
			/*start bottombox*/
			(function(){
				//获取box 和span  对象
				var boxDom = document.getElementById("bottom_box");
				var spanDoms = boxDom.getElementsByTagName("span");
				var flag = 0;
				//绑定事件
				document.body.onmousemove = function(e){
					var x = e.clientX;
					var y = e.clientY;
					for(var i=0;i<spanDoms.length;i++){
						var spanleft = spanDoms[i].offsetLeft + spanDoms[i].offsetWidth / 2;
						var spantop = boxDom.offsetTop + spanDoms[i].offsetWidth /2;
						var x1 = x - spanleft;
						var y1 = spantop - y;
						if(y1 < 50){
							var d = Math.floor(Math.sqrt(Math.pow(x1,2) + Math.pow(y1,2)));
							var bit = 2 * (1 - d / 300);
							if(bit<=1) bit = 1;
							if(flag === 0){
								spanDoms[i].style.transition = 'all .1s ease-in-out';
							}
							spanDoms[i].style.width = bit * 50+"px";
							spanDoms[i].style.height = bit * 50+"px";
						}else{
							spanDoms[i].style.width = 50+"px";
							spanDoms[i].style.height = 50+"px";
						}
					};
				};
			})();
			/*end bottombox*/
	}