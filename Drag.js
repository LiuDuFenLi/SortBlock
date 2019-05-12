if($('#J_info-flow').length != 0){
	(function (){
		window.x = new Sortable(goodsdrag, {
			group: "goodsdrag",
		/*	store: {
				get: function (sortable) {
					var order = localStorage.getItem(sortable.options.group);
					return order ? order.split('|') : [];
				},
				set: function (sortable) {
					var order = sortable.toArray();
					localStorage.setItem(sortable.options.group, order.join('|'));
				}
			},*/
		});
		var btnCont = '<a href="javascript:void(0)" id="draggid">提交</a>';
		$('body').append(btnCont);
		$('#draggid').css({
							"width":"40px",
							"height":"26px",
							"text-align":"center",
							"line-height":"26px",
							"background-color":"#666",
							"color":"#fff",
							"font-size":"14px",
							"position":"fixed",
							"right":"0",
							"top":"0",
							"z-index":"9999",
							"display":"block"
						});
		$('#draggid').click(function(){
			var tid = $('#goodsdrag').attr("tid");
			var dragboxL =  new Array();
			$('#goodsdrag li').each(function(){
				var thisGid = $(this).attr('gid');
				dragboxL.push(thisGid);
			});
			$.post('http://mall.114la.com/?ac=update_goods_order',{tid:tid,suggest:dragboxL},function(data){
				 var dataObj = eval("(" + data + ")");
				  if (dataObj.code == 0) {
						alert("操作成功");	  
				  }else if(dataObj.code == 1){
						alert("操作失败，请稍后再试。");	 
				  }else if(dataObj.code == 2){
						alert("未登录");	 
				  }	
			});	
		});
	})();
}