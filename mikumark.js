/**
 * MikuMark.js
 * 2018.2.7
 * Mikukonai @ GitHub
 */

;

// (一级)目录大纲
var bookmark_title = [];

// 20180124 路径判断
// 注意：采用[%%icon_path%%]这样的格式替换掉prefixHTML中的路径
var uri = window.location.pathname.split('/');
var uri_len = uri.length;
var root_path = '.';
var article_path;
if(uri[uri_len-2] === 'article') {
	root_path = (root_path + '.');
}
else {
}
article_path = root_path + '/article';
var icon_path = root_path + '/img/icon';

function LongString(string_in_comment){
	return string_in_comment.toString().match(/\/\*([\s\S]*?)\*\//)[1]
};
var prefixHTML = LongString(function(){/*
<!--所有页面共用部分 开始-->
<!--所有页面共用部分 开始-->
<!--所有页面共用部分 开始-->

<!--1、导航菜单-->
<div id="public_menu" class="public-menu">
	<!-- 中间标题 -->
	<div id="top_menu_title" style="text-align: center; color: #ffffff; font-size: 14px; font-weight: 700; width:100%; position:absolute;z-index: -1;" onclick="$('html, body').animate({ scrollTop: 0 }, 'fast');">MikuMark.js MD解释器</div>

	<!-- 左端按钮 -->
	<!-- <button onclick="history.go(-1);" class="public-menu-button-back" style="width:60px;"><img src="[%%icon_path%%]/back.png" style="height:14px;width:11px;margin-bottom: 2px;margin-left: 5px;"> 返回</button> -->
	<button onclick="window.location='[%%root_path%%]/article.html';" class="public-menu-button-back" style="width:40px;text-align: center;font-weight: bold;color:#ffffff;font-size:13px;"><img src="[%%icon_path%%]/posts.png" style="margin-bottom:3px;height:16px;width:16px;"></button>

	<button onclick="window.location='[%%root_path%%]/index.html';" class="public-menu-button" style="width:100px;text-align: center;font-weight: bold;" title="Mikukonai的个人网页"><span style="color:#66ccff;">Miku</span><span style="color:#ff99bb;">konai</span></button>
	<button onclick="window.location='[%%root_path%%]/article.html';" class="public-menu-button" style="width:100px;text-align: center;font-weight: bold;" title="返回文章列表"><img src="[%%icon_path%%]/posts.png" style="margin-bottom:3px;height:16px;width:16px;"> 文章列表</button>

<!-- 	<button onclick="$('html, body').animate({ scrollTop: 0 }, 'fast');" class="public-menu-button" style="width:30px;text-align: center;"><img src="[%%icon_path%%]/idea.png" style="margin-bottom:3px;height:16px;width:16px;" title="回到顶部"></button> -->

	<!-- 右端按钮 -->
	<button id="menu_toggle" class="public-menu-button-menu" style="padding-top:0;" title="展开/关闭主菜单">
		<div style="width:12px;height:12px;margin:auto;text-align: center;vertical-align: middle;">
			<div id="menu_toggle_bar_1" class="menu-toggle-bar-1-hor"></div>
			<div id="menu_toggle_bar_2" class="menu-toggle-bar-2-hor"></div>
			<div id="menu_toggle_bar_3" class="menu-toggle-bar-3-hor"></div>
		</div>
	</button>
</div>


<!--2、菜单背景暗遮罩（只在弹出菜单时显示）-->
<div id="shadow_mask" class="shadow-mask">1</div>


<!--3、主菜单 开始-->
<div id="menu" class="menu-container">
	<!--主人信息-->
	<div id="menu_titlebg" class="top-title-menu" style="padding-top: 0; background-image: url('https://upload-images.jianshu.io/upload_images/2840222-d6d721958176b1bf.jpg');">
		<img id="menu_avatar_img" src="https://upload.jianshu.io/users/upload_avatars/2840222/40700648-3ef5-4190-9d72-28fcf4aab3dc.jpg"  class="avatar">
		<div class="top-name">初音没有来</div>
		<div class="top-line" style="margin-top: -2px;">mikukonai</div>
		<div class="top-line" style="font-size: 11px;">怕什么真理无穷，进一步有进一步的欢喜</div>
	</div>

	<!--搜索-->
	<div style="text-align: center; height: 35px; line-height: 35px;font-size: 14px;">
		<table><tr>
		<td><input id="search_input" class="search-box" placeholder="输入搜索内容……"></td>
		<td><button id="search_button" class="search-button"><img src="[%%icon_path%%]/search.png" style="height:20px;width:20px;"></button></td>
		</tr></table>
	</div>

	<!--搜索建议图层-->
	<div class="search-result" id="search_result">
		<span style="padding-left: 15px; color:#66ccff; font-size: 15px; line-height: 40px;border-left: 5px solid #66ccff;">搜索建议</span>
		<div style="float:right;font-size: 15px;line-height: 40px;padding-right:20px;" onclick="$('#search_result').hide();">关闭</div>
		<table>
			<!--此处内容由脚本生成-->
		</table>
	</div>

	<!--链接-->
	<div style="text-align: center; height: 50px; line-height: 50px;font-size: 14px;">
		<a href="http://weibo.com/mikukonai" class="public-menu-link">
			<img src="[%%icon_path%%]/weibo.png" style="margin-bottom:3px;height:21px;width:28px;"> 微博</a>
		<span style="padding: 0 10px 0 10px;">·</span>
		<a href="https://github.com/mikukonai" class="public-menu-link">
			<img src="[%%icon_path%%]/github.png" style="margin-bottom:3px;height:21px;width:21px;"> GitHub</a>
		<span style="padding: 0 10px 0 10px;">·</span>
		<a href="https://www.zhihu.com/people/mikukonai" class="public-menu-link">
			<img src="[%%icon_path%%]/zhihu.png" style="margin-bottom:3px;height:21px;width:21px;"> 知乎</a>
	</div>

	<!--导航-->
	<button id="navbutton_index" onclick="window.location='[%%root_path%%]/index.html'" class="menu-button">
		<img src="[%%icon_path%%]/home.png" style="margin-bottom:3px;height:16px;width:16px;">
		<span>首页</span>
	</button>
	<button id="navbutton_poster" onclick="window.location='[%%root_path%%]/poster.html'" class="menu-button"">
		<img src="[%%icon_path%%]/idea.png" style="margin-bottom:3px;height:16px;width:16px;">
		<span>Poster</span>
	</button>
	<button id="navbutton_article" onclick="window.location='[%%root_path%%]/article.html'" class="menu-button"">
		<img src="[%%icon_path%%]/posts.png" style="margin-bottom:3px;height:16px;width:16px;">
		<span>文章</span>
	</button>
	<button id="navbutton_links" onclick="window.location='[%%article_path%%]/links.html'" class="menu-button"">
		<img src="[%%icon_path%%]/bookmark.png" style="margin-bottom:3px;height:16px;width:16px;">
		<span>书签</span>
	</button>
	<button id="navbutton_about" onclick="window.location='[%%root_path%%]/aaaabout.html'" class="menu-button"">
		<img src="[%%icon_path%%]/about.png" style="margin-bottom:3px;height:16px;width:16px;">
		<span>关于</span>
	</button>
	<button id="navbutton_style_spec" onclick="window.location='[%%article_path%%]/style_spec.html'" class="menu-button"">
		<img src="[%%icon_path%%]/spec.png" style="margin-bottom:3px;height:15px;width:15px;">
		<span>版式规范</span>
	</button>

	<!--蓝色底线-->
	<div style="height: 5px; width:100%;background-color: #66ccff;"></div>

	<!--PC端（宽度大于650px）在菜单底部显示格言-->
	<div class="motto">
	<!-- <img src="[%%icon_path%%]/miku.png" style="width:100px;height:100px;margin-bottom: 20px;"><br> -->版权所有 &copy; 2016-2018 Mikukonai</div>
</div>
<!--3、主菜单 结束-->


<!-- 4、顶部标题栏 -->
<div id="top_titlebg" class="top-title" style="background-image: url('https://upload-images.jianshu.io/upload_images/2840222-d6d721958176b1bf.jpg');">
</div>

<!--所有页面共用部分 暂时结束-->
<!--所有页面共用部分 暂时结束-->
<!--所有页面共用部分 暂时结束-->

<!-- 灰色背景的容器 -->
<div class="main-container">

	<!-- 这个可以用来显示过滤条件 
	<div class="content-beginning"></div>-->

	<!-- 锚，用于生成poster定位 -->
	<div id="poster_anchor"></div>

	<!-- 底部提示语 -->
	<div class="content-ending" onclick="$('html, body').animate({ scrollTop: 0 }, 'fast');">- System.gc(); -</div>

</div>
<!-- 灰色背景的容器 结束 -->

<!--所有页面共用部分 开始-->
<!-- 5、版权栏 -->
<div class="bottom-copyright-hl">END</div>
<div class="bottom-copyright">
	<div class="bottom-copyright-content">版权所有 © 2016-<span id="copyright_year">2018</span> Mikukonai</div>
	<div class="bottom-copyright-content"><span><a id="bottomlink_index" class="bottom-copyright-link" href="[%%root_path%%]/index.html">首页</a></span><span> · </span><span><a id="bottomlink_copyright" class="bottom-copyright-link" href="[%%article_path%%]/copyright.html">权利声明</a></span><span> · </span><span><a id="bottomlink_style_spec" class="bottom-copyright-link" href="[%%article_path%%]/style_spec.html">版式规范</a></span></div>
	<div class="bottom-copyright-content" style="color:#cccccc;">Proudly powered by MikuMark.js / Framework <span id="framework_version"></span></div>
</div>
<!--所有页面共用部分 结束-->
*/});
// 替换[%%icon_path%%]为实际路径
prefixHTML = prefixHTML.replace(/\[\%\%icon\_path\%\%\]/g , icon_path);
// 随后会被framework.js替换
prefixHTML = prefixHTML.replace(/\[\%\%root\_path\%\%\]/g , root_path);
// prefixHTML = prefixHTML.replace(/\[\%\%article\_path\%\%\]/g , article_path);

const C_STAR = '@STAR@';
const C_WAVE = "@WAVE@";
const C_REVQ = "@REVQ@";
const C_LSQB = "@LSQB@";
const C_RSQB = "@RSQB@";
const C_LRDB = "@LRDB@";
const C_RRDB = "@RRDB@";
const C_DOLR = "@DOLR@"; // $
const C_VERT = "@VERT@"; // |
const C_PLUS = "@PLUS@"; // +
const C_MNUS = "@MNUS@"; // -
const C_BSLT = "@BSLT@"; // \
const C_SHRP = "@SHRP@"; // #
const C_AMPS = "@AMPS@"; // &

var min = function(a,b) {
	if(a <= b) {return a;}
	else {return b;}
};
function inparaStyleParser(paragraph) {
	var html = '';
	// 首先将所有换行符解释为<br>
	paragraph = paragraph.replace(/\n{1}/g, '<br>');

	// 第0趟扫描：行内代码

	var currentIndex = 0;
	var codeIndexs = [];
	while(currentIndex < paragraph.length) {
		// 计算最近`的位置
		var codeOffset = paragraph.substring(currentIndex).search(/\`/g);
		var codeIndex = currentIndex + codeOffset;
		if(codeOffset >= 0) {
			codeIndexs.push(codeIndex);
			currentIndex = codeIndex + 1;
		}
		else {
			break;
		}
	}
	var pindex = 0; // 原文分片起始位置
	// 只看偶数个分隔符，后面的悬挂分隔符不管
	for(var i = 0; i < codeIndexs.length - (codeIndexs.length % 2); i++) {
		var index = codeIndexs[i];
		var slice = paragraph.substring(pindex, index);
		if(i % 2 == 0) {
			html += slice;
		}
		else {
			// 元字符替换
			slice = slice
			.replace(/\*/g, C_STAR).replace(/\~/g, C_WAVE).replace(/\`/g, C_REVQ)
			.replace(/\[/g, C_LSQB).replace(/\]/g, C_RSQB).replace(/\(/g, C_LRDB)
			.replace(/\)/g, C_RRDB).replace(/\$/g, C_DOLR).replace(/\|/g, C_VERT)
			.replace(/\+/g, C_PLUS).replace(/\\/g, C_BSLT).replace(/\#/g, C_SHRP)
			.replace(/\-/g, C_MNUS).replace(/\&/g, C_AMPS);
			html += ('<code>' + slice + '</code>');
		}
		pindex = index + 1;
	}
	html += paragraph.substring(pindex);

	paragraph = html;
	html = '';

	// 第一趟扫描：颜色文本
	var currentIndex = 0;
	var lastSeparator = 'N';
	var lastColor = '';
	while(currentIndex >= 0 && currentIndex < paragraph.length) {
		// 分别计算左右括号的index paragraph.length
		var leftOffset = paragraph.substring(currentIndex).search(/\[\[\#[0-9A-Fa-f]{6}\:/g);
		var leftIndex = currentIndex + leftOffset;
		var rightOffset = paragraph.substring(currentIndex).search(/\#\]\]/g);
		var rightIndex = currentIndex + rightOffset;

		var slice = '';
		if(leftOffset < 0 && rightOffset < 0) {
			break;
		}
		// 判断哪个在前
		if(leftOffset >= 0 && rightOffset >= 0 && leftOffset < rightOffset) {
			// 取当前字符串并拼接html
			slice = paragraph.substring(currentIndex, leftIndex);
			if(lastSeparator === 'L') {
				html += ('<span style="color:' + lastColor + ';">' + slice);
			}
			else if(lastSeparator === 'R') {
				html += ('</span>' + slice);
			}
			else if(lastSeparator === 'N') {
				html += (slice);
			}
			lastColor = paragraph.substring(leftIndex + 2, leftIndex + 9);
			currentIndex = leftIndex + 10;
			lastSeparator = 'L';
		}
		else if(leftOffset >= 0 && rightOffset >= 0 && leftOffset > rightOffset){
			// 取当前字符串并拼接html
			slice = paragraph.substring(currentIndex, rightIndex);
			if(lastSeparator === 'L') {
				html += ('<span style="color:' + lastColor + ';">' + slice);
			}
			else if(lastSeparator === 'R') {
				html += ('</span>' + slice);
			}
			else if(lastSeparator === 'N') {
				html += (slice);
			}
			currentIndex = rightIndex + 3;
			lastSeparator = 'R';
		}
		else if(leftOffset < 0 && rightOffset >= 0) {
			// 取当前字符串并拼接html
			slice = paragraph.substring(currentIndex, rightIndex);
			if(lastSeparator === 'L') {
				html += ('<span style="color:' + lastColor + ';">' + slice);
			}
			else if(lastSeparator === 'R') {
				html += ('</span>' + slice);
			}
			else if(lastSeparator === 'N') {
				html += (slice);
			}
			currentIndex = rightIndex + 3;
			lastSeparator = 'R';
		}
		else {
			break;
		}
	}
	var slice = paragraph.substring(currentIndex);
	if(lastSeparator === 'L' || lastSeparator === 'N') {
		html += (slice);
	}
	else if(lastSeparator === 'R') {
		html += ('</span>' + slice);
	}

	paragraph = html;
	html = '';

	// 第二趟扫描：粗体文本

	var currentIndex = 0;
	var boldIndexs = [];
	while(currentIndex <= paragraph.length) {
		// 计算最近**的位置
		var boldOffset = paragraph.substring(currentIndex).search(/\*\*/g);
		var boldIndex = currentIndex + boldOffset;
		if(boldOffset >= 0) {
			boldIndexs.push(boldIndex);
			currentIndex = boldIndex + 2;
		}
		else {
			break;
		}
	}
	var pindex = 0; // 原文分片起始位置
	// 只看偶数个分隔符，后面的悬挂分隔符不管
	for(var i = 0; i < boldIndexs.length - (boldIndexs.length % 2); i++) {
		var index = boldIndexs[i];
		var slice = paragraph.substring(pindex, index);
		if(i % 2 == 0) {
			html += slice;
		}
		else {
			html += ('<strong>' + slice + '</strong>');
		}
		pindex = index + 2;
	}
	html += paragraph.substring(pindex);

	paragraph = html;
	html = '';

	// 第三趟扫描：斜体文本

	var currentIndex = 0;
	var italicIndexs = [];
	while(currentIndex < paragraph.length) {
		// 计算最近**的位置
		var italicOffset = paragraph.substring(currentIndex).search(/\*/g);
		var italicIndex = currentIndex + italicOffset;
		if(italicOffset >= 0) {
			italicIndexs.push(italicIndex);
			currentIndex = italicIndex + 1;
		}
		else {
			break;
		}
	}
	var pindex = 0; // 原文分片起始位置
	// 只看偶数个分隔符，后面的悬挂分隔符不管
	for(var i = 0; i < italicIndexs.length - (italicIndexs.length % 2); i++) {
		var index = italicIndexs[i];
		var slice = paragraph.substring(pindex, index);
		if(i % 2 == 0) {
			html += slice;
		}
		else {
			html += ('<i>' + slice + '</i>');
		}
		pindex = index + 1;
	}
	html += paragraph.substring(pindex);

	paragraph = html;
	html = '';

	// 第四趟扫描：删除线文本

	var currentIndex = 0;
	var delIndexs = [];
	while(currentIndex < paragraph.length) {
		// 计算最近~的位置
		var delOffset = paragraph.substring(currentIndex).search(/~/g);
		var delIndex = currentIndex + delOffset;
		if(delOffset >= 0) {
			delIndexs.push(delIndex);
			currentIndex = delIndex + 1;
		}
		else {
			break;
		}
	}
	var pindex = 0; // 原文分片起始位置
	// 只看偶数个分隔符，后面的悬挂分隔符不管
	for(var i = 0; i < delIndexs.length - (delIndexs.length % 2); i++) {
		var index = delIndexs[i];
		var slice = paragraph.substring(pindex, index);
		if(i % 2 == 0) {
			html += slice;
		}
		else {
			html += ('<del>' + slice + '</del>');
		}
		pindex = index + 1;
	}
	html += paragraph.substring(pindex);

	paragraph = html;
	html = '';

	// 最后一趟扫描：超链接[]()
	// 超链接是不允许嵌套的

	var currentIndex = 0;
	while(currentIndex >= 0 && currentIndex < paragraph.length) {
		// 分别计算[、](、]的位置(?!\[)
		var leftSBOffset = paragraph.substring(currentIndex).search(/\[/g);
		var leftSBIndex = currentIndex + leftSBOffset;

		var middleOffset = paragraph.substring(currentIndex).search(/\]\(/g);
		var middleIndex = currentIndex + middleOffset;

		var rightRBOffset = paragraph.substring(currentIndex).search(/\)/g);
		var rightRBIndex = currentIndex + rightRBOffset;

		// 判断超链接是否存在
		if(!(leftSBOffset < middleOffset && middleOffset < rightRBOffset)) {
			break;
		}

		// 计算链接文本和URL。若URL为空，则以文本为URL。圆括号不可省略
		var text = paragraph.substring(leftSBIndex + 1, middleIndex);
		var urlstr = paragraph.substring(middleIndex + 2, rightRBIndex);
		if(urlstr === '') {urlstr = text;}
		var before = paragraph.substring(currentIndex, leftSBIndex);

		html += before;
		html += ('<a href="' + urlstr + '">' + text + '</a>');

		currentIndex = rightRBIndex + 1;
	}
	// 尾部
	var after = paragraph.substring(currentIndex);
	html += after;

	return html;
}





// 段落级样式处理器（不包括引用和代码段这些需要段落上下文信息的）

function paragraphParser(paragraph) {
	var html = '';
	// 标题
	if(/^#.+/.test(paragraph) == true) {
		// 计算井号数量（标题层级）
		var sharps = paragraph.match(/^#+(?=[^#])/i)[0];
		var level = sharps.length;
		// 计算标题文本
		var titleFrom = paragraph.search(/#(?=[^#])/i) + 1; // 最后一个井号的下一位
		var title = paragraph.substring(titleFrom); // 截取井号后面的内容（含空格）
		title = title.replace(/^( )+(?!( ))/i, ""); // 去掉#号和内容之间的空格
		// 组装HTML
		html += ('<h1 id="' + title + '" class="target-fix"></h1>');
		html += ('<h' + level + '>');
		html += title;
		html += ('</h' + level + '>');
		// Push目录level + '@@@' + 
		if(level == 1) {
			bookmark_title.push((title));
		}
	}

	// 有序列表+
	else if(/^\++[\s\S]+/.test(paragraph) == true) {
		html += '<p>';
		// 按行分割列表项
		var lines = paragraph.split("\n");
		// 层级计数器
		var currentLevel = 0;
		lines.forEach(function(line, index, lines) {
			// 计算+号数量（列表层级）
			var plus = line.match(/^\++(?=[^\+])/i);
			if(plus == null) {
				html += paragraph; return html;
			}
			var level = plus[0].length;
			// 计算列表文本
			var itemFrom = line.search(/\+(?=[^\+])/i) + 1; // 最后一个+号的下一位
			var item = line.substring(itemFrom); // 截取+号后面的内容（含空格）
			item = item.replace(/^( )+(?!( ))/i, ""); // 去掉+号和内容之间的空格
			// 判断层级是否改变
			if(level > currentLevel) { // 嵌套加深，则按照差值在内容后输出<ol>
				var diff = level - currentLevel;
				for(var c = 0; c < diff; c++) {
					html += '<ol>';
				}
				html += '<li>';
				html += inparaStyleParser(item);
				currentLevel = level;
			}
			else if(level < currentLevel){ // 嵌套退出，则按照差值增加闭合标签
				var diff = currentLevel - level;
				for(var c = 0; c < diff; c++) {
					html += '</li></ol>';
				}
				html += '</li><li>';
				html += inparaStyleParser(item);
				currentLevel = level;
			}
			else { // 保持同级
				html += '</li><li>';
				html += inparaStyleParser(item);
				currentLevel = level;
			}
		});
		// 闭合列表标签
		for(var c = 0; c < currentLevel; c++) {
			html += '</li></ol>';
		}
		html += '</p>';
	}

	// 分割线
	else if(/^\-{3,}$/.test(paragraph) == true) {
		console.log('当前段落=\n' + paragraph);
		html += '<hr>';
	}

	// 无序列表-
	else if(/^\-+[\s\S]+/.test(paragraph) == true) {
		html += '<p>';
		// 按行分割列表项
		var lines = paragraph.split("\n");
		// 层级计数器
		var currentLevel = 0;
		lines.forEach(function(line, index, lines) {
			// 计算-号数量（列表层级）
			var minus = line.match(/^\-+(?=[^\-])/i);
			if(minus == null) {
				html += paragraph; return html;
			}
			var level = minus[0].length;
			// 计算列表文本
			var itemFrom = line.search(/\-(?=[^\-])/i) + 1; // 最后一个-号的下一位
			var item = line.substring(itemFrom); // 截取-号后面的内容（含空格）
			item = item.replace(/^( )+(?!( ))/i, ""); // 去掉-号和内容之间的空格
			// 判断层级是否改变
			if(level > currentLevel) { // 嵌套加深，则按照差值在内容后输出<ol>
				var diff = level - currentLevel;
				for(var c = 0; c < diff; c++) {
					html += '<ul>';
				}
				html += '<li>';
				html += inparaStyleParser(item);
				currentLevel = level;
			}
			else if(level < currentLevel){ // 嵌套退出，则按照差值增加闭合标签
				var diff = currentLevel - level;
				for(var c = 0; c < diff; c++) {
					html += '</li></ul>';
				}
				html += '</li><li>';
				html += inparaStyleParser(item);
				currentLevel = level;
			}
			else { // 保持同级
				html += '</li><li>';
				html += inparaStyleParser(item);
				currentLevel = level;
			}
		});
		// 闭合列表标签
		for(var c = 0; c < currentLevel; c++) {
			html += '</li></ul>';
		}
		html += '</p>';
	}


	// 网易云音乐插件
	else if(/^\|{3}.+\|{3}$/.test(paragraph) == true) {
		console.log('网易云音乐插件\n' + paragraph);
		var musicURL = paragraph.substring(3, paragraph.length - 3);
		html += '<div style="text-align: center;"><iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="';
		html += musicURL;//eg. https://music.163.com/outchain/player?type=2&id=527425519&auto=0&height=66
		html += '"></iframe></div>';
	}

	// 表格
	else if(/^\|[\s\S]+\|$/g.test(paragraph) == true) {
		// 按行分割
		var rows = paragraph.split("\n");
		// 分割线标识
		var hasHeadline = false;

		html += '<table class="md-table">';

		rows.forEach(function(row, index, rows) {
			var cols = row.split("|");
			if(cols.length <= 2) {console.log("Syntax error.");return;}
			if(cols.length == 3 && /\-{3,}/i.test(cols[1])==true) {
				hasHeadline = true;
			}
			else {
				html += '<tr>';
				// TD表格主体
				if(hasHeadline == true) {
					for(var c = 1; c < cols.length - 1; c++) {
						html += ('<td>' + inparaStyleParser(cols[c]) + '</td>');
					}
				}
				// TH表头
				else {
					for(var c = 1; c < cols.length - 1; c++) {
						html += ('<th>' + inparaStyleParser(cols[c]) + '</th>');
					}
				}
				html += '</tr>';
			}
		});
		html += '</table>';
	}

	// 图片
	else if(/^\!\[.+\]\(.+\)$/g.test(paragraph) == true) {
		var imgTitle = paragraph.match(/^\!\[.+\]\(/g)[0];
		imgTitle = imgTitle.substring(2, imgTitle.length - 2);
		var imgURL = paragraph.match(/\]\([^(\]\()]+\)$/g)[0];
		imgURL = imgURL.substring(2, imgURL.length - 1);

		html += '<div class="imgbox">';
		html += '<img src="';
		html += imgURL;
		html += '"><div class="imgtitle">';
		html += inparaStyleParser(imgTitle);
		html += '</div></div>';
	}

	// 居中段落
	else if(/^\:.+/g.test(paragraph) == true) {
		// 计算段落文本
		var center = paragraph.substring(1); // 截取:号后面的内容（含空格）
		center = center.replace(/^( )+(?!( ))/i, ""); // 去掉:号和内容之间的空格

		html += '<p style="text-align:center;text-indent:0;">';
		html += inparaStyleParser(center);
		html += '</p>';
	}

	// LaTeX
	else if(/^\$\$.+\$\$$/g.test(paragraph) == true) {
		html += '<p>' + paragraph + '</p>';
	}

	// 普通段落（除上述种类的段落和引用、代码块两种）
	else {
		html += ('<p>' + inparaStyleParser(paragraph) + '</p>');
	}

	return html;
}

// 全局括号层数计数器，用于支持跨段落括号匹配计数
var blevel = 0;

function codeHighlighter(code, lang) {
	// console.log('【当前代码】\n' + code);


	// 辅助函数：寻找某位置开始的匹配右括号位置
	var findPairedBraket = function(str, leftIndex) {
		var level = 0;
		var braketFlag = false;
		for(var i = leftIndex; i < str.length; i++) {
// console.log('[codeHighlighter]查看字符 ' + str[i]);
			if(str[i] === '(') {level++; braketFlag = true;}
			else if(str[i] === ')') {level--;}
			if(braketFlag == true && level == 0) {
				return i;
			}
		}
		return str.length;
	};

	// 转义字符换回
	// code = code.replace(new RegExp('&nbsp;', 'g'), ' ');
	code = code
	.replace(new RegExp(C_STAR,'g'), '*').replace(new RegExp(C_WAVE,'g'), '~').replace(new RegExp(C_REVQ,'g'), '`')
	.replace(new RegExp(C_LSQB,'g'), '[').replace(new RegExp(C_RSQB,'g'), ']').replace(new RegExp(C_LRDB,'g'), '(')
	.replace(new RegExp(C_RRDB,'g'), ')').replace(new RegExp(C_DOLR,'g'), '$').replace(new RegExp(C_VERT,'g'), '|')
	.replace(new RegExp(C_PLUS,'g'), '+').replace(new RegExp(C_BSLT,'g'), '\\').replace(new RegExp(C_SHRP,'g'), '#')
	.replace(new RegExp(C_MNUS,'g'), '-').replace(new RegExp(C_AMPS,'g'), '&');

	// 屏蔽标签
	code = code.replace(new RegExp(/\>/g), '&gt;').replace(new RegExp(/\</g), '&lt;');
	// var pseudoTag = code.match(/\<.*\>/g);
	// if(pseudoTag != null) {
	// 	for(var i = 0; i < pseudoTag.length; i++) {
	// 		var tag = pseudoTag[i];
	// 		code = code.replace(tag, ('&lt;' + tag.substring(1, tag.length-1) + '&gt;'));
	// 	}
	// }

	var html = '';
	var state = '';

	// var blevel = 0;
	var bcolor = ['#222222','#FF0000', '#FF8C00', '#32CD32', '#20B2AA', '#6A5ACD', 'purple'];

	// HTML尖括号应特别处理（主要用于Lisp这种没有中置运算符的语言）
	var regexTagBracket = new RegExp(/(\&lt\;)|(\&gt\;)/g);

	// 空格正则（词法分割单元之一）
	var regexSpace = new RegExp(/\s/g);
	// 字符串正则
	var regexString = new RegExp(/\".*?\"/g);
	// 直接数正则
	var regexNumber = new RegExp(/((0x[0-9A-Fa-f]+)|([0-9]*\.[0-9]+[Ff]?)|([0-9]+[Ll]?))\b/g);
	// 预处理正则
	var regexPrecompile = new RegExp(/\#([^(t\b)(f\b)\\]).+(?=(\n|$))/g);

	// Lisp标识符正则
	var regexIdentifierLisp = new RegExp(/[A-Za-z\/\_\-\+\=\.\,\:\!\@\#\$\^\*\&\?][0-9A-Za-z\/\_\-\+\=\.\,\:\!\@\#\$\^\*\&\;\?]*(?=( |\)|\n|$))/g);
	// Lisp关键字正则
	var regexKeywordLisp = new RegExp(/((access)|(and)|(begin)|(bkpt)|(case)|(cond)|(cons-stream)|(default-object\?)|(define)|(define-integrable)|(define-macro)|(define-structure)|(define-syntax)|(delay)|(do)|(fluid-let)|(if)|(in-package)|(lambda)|(let)|(let\*)|(let-syntax)|(letrec)|(local-declare)|(macro)|(make-environment)|(named-lambda)|(or)|(quasiquote)|(quote)|(scode-quote)|(sequence)|(set!)|(the-environment)|(unassigned\?)|(using-syntax)|(cons)|(car)|(cdr)|(caar)|(cddr)|(list)|(display)|(newline)|(printf))(?=( |\)|\n|$))/g);
	// Lisp布尔量正则
	var regexBooleanLisp = new RegExp(/^\#([tf]|(\\[^ \)\n]+))(?=( |\)|\n|$))/g);
	// Lisp注释正则
	var regexCommentLisp = new RegExp(/\;.*(?=(\n|$))/g);
	
	
	// C关键字正则
	var regexKeywordC = new RegExp(/((if)|(else)|(while)|(switch)|(case)|(default)|(volatile)|(continue)|(break)|(goto)|(do)|(static)|(const)|(struct)|(union)|(enum)|(class)|(return)|(sizeof)|(asm)|(auto)|(bool)|(catch)|(const_cast)|(delete)|(dynamic_cast)|(explicit)|(export)|(extern)|(false)|(for)|(friend)|(inline)|(mutable)|(namespace)|(new)|(operator)|(private)|(protected)|(public)|(register)|(reinterpret_cast)|(signed)|(static_cast)|(template)|(this)|(throw)|(true)|(try)|(typedef)|(typeid)|(typename)|(unsigned)|(using)|(virtual)|(wchar_t)|(alignas)|(alignof)|(char16_t)|(char32_t)|(constexpr)|(decltype)|(noexcept)|(nullptr)|(static_assert)|(thread_local))\b/g);
	// C类型正则
	var regexTypeC = new RegExp(/((int)|(char)|(float)|(double)|(long)|(boolean)|(String)|(void)|(short)|(Integer)|(Object))[\*]?\b/g);
	// C注释正则
	var regexCommentC = new RegExp(/(\/\/.+(?=(\n|$)))|(\/\*[\s\S]*\*\/)/g);
	// C标识符正则
	var regexIdentifierC = new RegExp(/[A-Za-z\_][0-9A-Za-z\_]*\b/g);
	// C宏名（全大写标识符）正则
	var regexMacroC = new RegExp(/[A-Z\_][0-9A-Z\_]*\b/g);
	// C运算符正则
	var regexOperatorC = new RegExp(/(\+)|(\-)|(\*)|(\/)|(\\)|(\~)|(\!)|(\%)|(\&(?!([gl]t\;)))|(\+\+)|(\-\-)|(\=)|(\&gt\;)|(\&lt\;)|(\&gt\;\=)|(\&lt\;\=)|(\=\=)|(\:\:)|(\:)|(\?)|(\[)|(\])/g);


	// 从左到右扫描源代码，进行词法分析
	for(var i = 0; i < code.length; i++) {
		var current = code[i]; // 当前字符
		var suffix = code.substring(i); // 当前字符往后的字符串


		/////////////////////////////////////
		// C C++ Java
		/////////////////////////////////////
		if(lang.toLowerCase() === 'c' || lang.toLowerCase() === 'c++' || lang.toLowerCase() === 'java') {

			// 当前字符是空白字符：一般而言只有一个空白字符，所以直接向前跳
			if(suffix.search(regexSpace) == 0) {
				html += current;
				continue;
			}
			// 直接数
			else if(suffix.search(regexNumber) == 0) {
				var number = suffix.match(regexNumber)[0];
				html += ('<span class="code-number">' + number + '</span>');
				i = i + number.length - 1;
			}
			// 字符串
			else if(suffix.search(regexString) == 0) {
				var str = suffix.match(regexString)[0];
				html += ('<span class="code-string">' + str + '</span>');
				i = i + str.length - 1;
			}
			// 预处理
			else if(suffix.search(regexPrecompile) == 0) {
				var precompile = suffix.match(regexPrecompile)[0];
				html += ('<span class="code-precompile">' + precompile + '</span>');
				i = i + precompile.length - 1;
			}




			// C注释
			else if(suffix.search(regexCommentC) == 0) {
				var commentc = suffix.match(regexCommentC)[0];
				html += ('<span class="code-comment">' + commentc + '</span>');
				i = i + commentc.length - 1;
			}
			// C关键字
			else if(suffix.search(regexKeywordC) == 0) {
				var kwc = suffix.match(regexKeywordC)[0];
				html += ('<span class="code-keyword">' + kwc + '</span>');
				i = i + kwc.length - 1;
			}
			// C宏名
			else if(suffix.search(regexMacroC) == 0) {
				var macro = suffix.match(regexMacroC)[0];
				html += ('<span class="code-macro">' + macro + '</span>');
				i = i + macro.length - 1;
			}
			// C运算符
			else if(suffix.search(regexOperatorC) == 0) {
				var optr = suffix.match(regexOperatorC)[0];
				html += ('<span class="code-operator">' + optr + '</span>');
				i = i + optr.length - 1;
			}
			// 类型
			else if(suffix.search(regexTypeC) == 0) {
				var typename = suffix.match(regexTypeC)[0];
				html += ('<span class="code-type">' + typename + '</span>');
				i = i + typename.length - 1;
			}
			// 标识符
			else if(suffix.search(regexIdentifierC) == 0) {
				var idt = suffix.match(regexIdentifierC)[0];
				html += ('<span class="code-identifier">' + idt + '</span>');
				i = i + idt.length - 1;
			}
			else {
				html += current;
			}
		}

		/////////////////////////////////////
		// JavaScript
		/////////////////////////////////////
		else if(lang.toLowerCase() === 'javascript') {
			
		}

		/////////////////////////////////////
		// Lisp / Scheme
		/////////////////////////////////////
		else if(lang.toLowerCase() === 'lisp' || lang.toLowerCase() === 'scheme') {
			// // 尖括号必须首先处理，以免被当成注释
			// if(suffix.search(regexTagBracket) == 0) {
			// 	html += suffix.match(regexTagBracket)[0];
			// 	i = i + 3; // &lt;的长度-1
			// }
			// 当前字符是空白字符：一般而言只有一个空白字符，所以直接向前跳
			if(suffix.search(regexSpace) == 0) {
				html += current;
				continue;
			}
			// 直接数
			else if(suffix.search(regexNumber) == 0) {
				var number = suffix.match(regexNumber)[0];
				html += ('<span class="code-number">' + number + '</span>');
				i = i + number.length - 1;
			}
			// 字符串
			else if(suffix.search(regexString) == 0) {
				var str = suffix.match(regexString)[0];
				html += ('<span class="code-string">' + str + '</span>');
				i = i + str.length - 1;
			}
			// 预处理
			else if(suffix.search(regexPrecompile) == 0) {
				var precompile = suffix.match(regexPrecompile)[0];
				html += ('<span class="code-precompile">' + precompile + '</span>');
				i = i + precompile.length - 1;
			}
			// 关键字
			else if(suffix.search(regexKeywordLisp) == 0) {
				var keyword = suffix.match(regexKeywordLisp)[0];
				html += ('<span class="code-keyword">' + keyword + '</span>');
				i = i + keyword.length - 1;
			}
			// 布尔
			else if(suffix.search(regexBooleanLisp) == 0) {
				var bool = suffix.match(regexBooleanLisp)[0];
				html += ('<span class="code-boolean">' + bool + '</span>');
				i = i + bool.length - 1;
			}
			// 标识符
			else if(suffix.search(regexIdentifierLisp) == 0) {
				var idt = suffix.match(regexIdentifierLisp)[0];
				html += ('<span class="code-identifier">' + idt + '</span>');
				i = i + idt.length - 1;
			}
			// 注释
			else if(suffix.search(regexCommentLisp) == 0) {
				var comment = suffix.match(regexCommentLisp)[0];
				html += ('<span class="code-comment">' + comment + '</span>');
				i = i + comment.length - 1;
			}
			// 左括号
			else if(current === '(') {
				html += ('<span style="color:' + bcolor[blevel % 7] + ';">' + current + '</span>');
				blevel++;
			}
			// 右括号
			else if(current === ')') {
				blevel--;
				html += ('<span style="color:' + bcolor[blevel % 7] + ';">' + current + '</span>');
			}
			// quote
			else if(current === '\'') {
				// quoteFlag = true;
				// 判断其后是symbol还是list
				if(code[i+1] === '(') {
					var rightIndex = findPairedBraket(code, i);
					var quoted = code.substring(i, rightIndex + 1);
					html += ('<span class="code-quote">' + quoted + '</span>');
					i = rightIndex;
				}
				else {
					var quoted = code.substring(i + 1).match(regexIdentifierLisp)[0];
					if(quoted != null) {
						html += ('<span class="code-quote">\'' + quoted + '</span>');
					}
					i = i + quoted.length;
				}
			}

			else {
				html += current;
			}
		}

		/////////////////////////////////////
		// Python
		/////////////////////////////////////
		else if(lang.toLowerCase() === 'python') {
			
		}

		/////////////////////////////////////
		// Bash
		/////////////////////////////////////
		else if(lang.toLowerCase() === 'bash') {
			
		}
		else {
			html += current;
		}

	}
	return html;
}


// 段落上下文处理器（引用和代码块两类样式的处理器）
// 注意：输入的是预处理后的原文，输出为最终的HTML

function contextParser(text) {
	var html = '<div class="md-content">';
	// html += '<div id="top_titlebg" class="top-title" style="background-image: url(\'https://upload-images.jianshu.io/upload_images/2840222-d6d721958176b1bf.jpg\');"></div>';

	// 标题
	html += '<div class="md-title">' + metadata.title + '</div>';

	// 文章信息
	html += '<div class="md-metadata">';
	if(typeof(metadata.begin_date) != 'undefined' && /\d\d\d\d\-\d\d-\d\d/.test(metadata.begin_date) == true) {
		html += (metadata.begin_date.replace(/\-/,"年").replace(/\-/,"月") + '日 | ');
	}
	if(typeof(metadata.author) != 'undefined') {
		var author = metadata.author.toString();
		if(author.toLowerCase() === 'mikukonai') {
			html += 'Mikukonai 本站原创';
		}
		else {
			html += ('原文作者 ' + author);
		}
	}
	
	html += '</div>';

	// 目录div的锚（在其后插入）
	html += '<div id="bookmark_anchor"></div>';

	// 正文在这里（有padding）
	html += '<div class="md-mainblock">';

	// 全局的引用块计数
	var quoteFlag = false;
	var quoteLevel = 0;

	// 全局的代码块标识
	var codeFlag = false;
	// 全局的代码块语言标识
	var codeLanguage = '';

	// 第一步：段落分割
	var paragraphs = text.split(/\n{2,}/g);

	// 第二步：遍历各个段落，判断段落类型
	for(var pcount = 0; pcount < paragraphs.length; pcount++) {
		var paragraph = paragraphs[pcount];

		// 是否引用段？
		if(/^>.+/g.test(paragraph) == true) {
			quoteFlag = true;
			// 计算>号数量（引用层级）
			var sharps = paragraph.match(/^>+(?=[^>])/i)[0];
			var level = sharps.length;

			// 计算引用文本
			var quoteFrom = paragraph.search(/\>(?=[^\>])/i) + 1; // 最后一个>号的下一位
			var quote = paragraph.substring(quoteFrom); // 截取>号后面的内容（含空格）
			quote = quote.replace(/^( )+(?!( ))/i, ""); // 去掉>号和内容之间的空格


			// 判断层级是否改变
			if(level > quoteLevel) { // 嵌套加深
				var diff = level - quoteLevel;
				for(var c = 0; c < diff; c++) {
					html += '<blockquote>';
				}
				html += paragraphParser(quote);
				quoteLevel = level;
			}
			else if(level < quoteLevel){ // 嵌套退出
				var diff = quoteLevel - level;
				for(var c = 0; c < diff; c++) {
					html += '</blockquote>';
				}
				html += paragraphParser(quote);
				quoteLevel = level;
			}
			else { // 保持同级，不加标签
				html += paragraphParser(quote);
				quoteLevel = level;
			}
		}

		// 代码
		else if(/((```)|(```(\:.*)?))/g.test(paragraph) == true) {
			var codeLanguages = paragraph.match(/\:.*/g);
			if(codeLanguages != null) {
				codeLanguage = codeLanguages[0].substring(1);
			}
			else {
				codeLanguage = '.';
			}
// console.log('【代码定界符 ' + codeLanguage + ' 代码块！】\n' + paragraph);
			if(codeFlag == false) {
				codeFlag = true;
				blevel = 0;
				html += '<pre><code class="prettyprint lang- prettyprinted">';
			}
			else {
				codeFlag = false;
				html = html.substring(0, html.length - 1); // 删掉最后一个回车
				html += '</code></pre>';
			}
		}

		// 除引用和代码之外的段落
		else {
			// 处理代码块
			if(codeFlag == true) {
// console.log('【捕获野生 ' + codeLanguage + ' 代码块！】\n' + paragraph);
				html += codeHighlighter(paragraph, codeLanguage);
				html += "\n\n";
				continue;
			}
			// 闭合引用标签，并退出引用状态
			if(quoteFlag == true) {
				for(var c = 0; c < quoteLevel; c++) {
					html += '</blockquote>';
				}
				quoteLevel = 0;
			}
			quoteFlag = false;
			html += paragraphParser(paragraph);
		}
	}
	html += '</div></div>';
	return html;
}


function mikumark(string, metadata) {
	// var string = poster;//$('xmp').html();

	// 预处理：转义字符替换，去掉开头的空格
	string = string
	.replace(/\\(?!\\)[\*]/g, C_STAR).replace(/\\(?!\\)[~]/g, C_WAVE).replace(/\\(?!\\)[`]/g, C_REVQ)
	.replace(/\\(?!\\)[\[]/g, C_LSQB).replace(/\\(?!\\)[\]]/g, C_RSQB).replace(/\\(?!\\)[\(]/g, C_LRDB)
	.replace(/\\(?!\\)[\)]/g, C_RRDB).replace(/\\(?!\\)[\$]/g, C_DOLR).replace(/\\(?!\\)[\|]/g, C_VERT)
	.replace(/\\(?!\\)[\+]/g, C_PLUS).replace(/\\(?!\\)[\\]/g, C_BSLT).replace(/\\(?!\\)[#]/g, C_SHRP)
	.replace(/\\(?!\\)[\-]/g, C_MNUS).replace(/\\(?!\\)[\&]/g, C_AMPS).replace(/^\s+(?=[\S])/i, "");

	// 预处理之二：适应遗留文本，在每个```前后强行加两个换行符(```)|
	var codeDelim = string.match(/\n((```)|(```(\:.*)?))\n/g);
	if(codeDelim != null) {
		for(var i = 0; i < codeDelim.length; i++) {
			var delim = codeDelim[i];
			string = string.replace(new RegExp(delim,'g'), ('\n\n' + delim + '\n\n'));
		}
	}
	string = string.replace(/\n```\n/g, '\n\n```\n\n');

	// 预处理之三：将所有空格翻译成&nbsp;
	// string = string.replace(/ /g, '&nbsp;');

	var html = contextParser(string);

	// 元字符换回
	html = html
	.replace(new RegExp(C_STAR,'g'), '*').replace(new RegExp(C_WAVE,'g'), '~').replace(new RegExp(C_REVQ,'g'), '`')
	.replace(new RegExp(C_LSQB,'g'), '[').replace(new RegExp(C_RSQB,'g'), ']').replace(new RegExp(C_LRDB,'g'), '(')
	.replace(new RegExp(C_RRDB,'g'), ')').replace(new RegExp(C_DOLR,'g'), '$').replace(new RegExp(C_VERT,'g'), '|')
	.replace(new RegExp(C_PLUS,'g'), '+').replace(new RegExp(C_BSLT,'g'), '\\').replace(new RegExp(C_SHRP,'g'), '#')
	.replace(new RegExp(C_MNUS,'g'), '-').replace(new RegExp(C_AMPS,'g'), '&');

	// 必须将所有&nbsp;换回空格
	// html = html.replace(/\&nbsp\;/g, ' ');

	$('#poster_anchor').after(html);

	// 在bookmark_anchor后插入目录
	var bmHtml = '<div class="md-bookmark">';
	bmHtml += '<div class="md-bookmark-header" onclick="$(\'#bmlist\').slideToggle(200);">目录 · 本文约';
	bmHtml += (string.split(/[\u4e00-\u9fa5\b]/g).length - 1);
	bmHtml += '字</div>';
	bmHtml += '<ul id="bmlist" style="margin: 15px;display: none;">';
	for(var i = 0; i < bookmark_title.length; i++) {
		bmHtml += '<li><a href="#' + bookmark_title[i] + '">' + bookmark_title[i] + '</a></li>';
	}
	bmHtml += '</ul></div>';
	$('#bookmark_anchor').after(bmHtml);

	// 修改菜单栏标题
	$('#top_menu_title').html(metadata.title);
	$('title').html(metadata.title + ' - Mikukonai');
}

