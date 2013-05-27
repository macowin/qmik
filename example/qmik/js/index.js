/**
 * 网站共用组件
 */
(function(Q, define) {
	var doc = document, win = window, loc = location;
	define(function(require, exports, module) {
		require("Qmik.fade");
		Q.extend(exports, {
			// 显示导航
			showNav : function(id) {
				Q("div.panel").hide();
				Q("#head a").rmClass("head_click_a");
				id = id || "home";
				var tar = Q("#" + id);
				var flag = tar.attr("url") || "home";
				Q("#" + flag).fadeOut(1);
				tar.addClass("head_click_a");
			},
			// 初始化首页
			init : function() {
				console.log("init:")
				Q(document).ready(function() {
					var m = document.getElementById("about");
					Q("#head a[tag=nav]").click(function(a) {
						Q.nav.use(Q(this).attr("module"), [
							Q(this).attr("id")
						])
					});
				});
			}
		})
	});
})(Qmik, Qmik.define);
