var JctipsPlugin={homeUrl:"http://cp.3g.cn/jctips/index.html#/home",tabli:$(".jctab-one li"),mjfb:$("#mjfb"),mjbs:$("#mjbs"),qw:$("#qw"),jccontent:$("#jccontent"),refresh:".refresh",imgurl:"http://res.3g.cn/images/jctips/",init:function(){this.load()},load:function(){JctipsPlugin.bindData();JctipsPlugin.showTab(0)},bindEvent:function(){JctipsPlugin.tabli.on("click",function(e){JctipsPlugin.tabli.removeClass("cur");$(this).addClass("cur");var index=$(this).index();JctipsPlugin.showTab(index)});$(JctipsPlugin.refresh).on("click",function(){if(storage.getItem("jct")){storage.removeItem("jct")}JctipsPlugin.bindData()})},showTab:function(tabindex){JctipsPlugin.mjfb.addClass("hide");JctipsPlugin.mjbs.addClass("hide");JctipsPlugin.qw.addClass("hide");if(tabindex==0){JctipsPlugin.mjfb.removeClass("hide")}else{if(tabindex==1){JctipsPlugin.mjbs.removeClass("hide")}else{if(tabindex==2){JctipsPlugin.qw.removeClass("hide")}}}},bindData:function(){var rd=new Date().getTime();$.ajax({url:"http://tips.3g.cn/jctips/Interface/recommend",data:{rd:rd},dataType:"jsonp",success:function(data){if(data.fb!=null){JctipsPlugin.mjfb.html("");JctipsPlugin.mjfb.html(JctipsPlugin.mjhtml(data.fb))}else{JctipsPlugin.mjfb.html("");if(data.qw!=null){JctipsPlugin.mjfb.html(JctipsPlugin.qwhtml(data.qw))}}if(data.bs!=null){JctipsPlugin.mjbs.html("");JctipsPlugin.mjbs.html(JctipsPlugin.mjhtml(data.bs))}else{JctipsPlugin.mjbs.html("");if(data.qw!=null){JctipsPlugin.mjbs.html(JctipsPlugin.qwhtml(data.qw))}}if(data.qw!=null){JctipsPlugin.qw.html("");JctipsPlugin.qw.html(JctipsPlugin.qwhtml(data.qw))}JctipsPlugin.bindEvent()}})},mjhtml:function(data){var html="";html+='<div class="jcinfo">';if(data.type==0){html+=' <div><img src="'+JctipsPlugin.imgurl+'fb.png"></div>'}else{if(data.type==1){html+=' <div><img src="'+JctipsPlugin.imgurl+'bs.png"></div>'}}html+=' <div><p style="border-bottom: 1px solid #f2f2f2;"><span style="color: #F57634;font-size:20px;">'+data.userName+"</span></p>";html+='<p><span style="color: #F57634;">'+data.orderNum+"人</span><span>已订阅</span></p></div>";html+='<div><a href="http://cp.3g.cn/jctips/pages/mingjia-detail.html?backurl=http://cp.3g.cn/jctips/index.html&id='+data.expertId+'">订阅推荐</a></div>';html+="</div>";html+='<div class="jctabdetail">';html+='<table cellpadding="5" cellspacing="0">';html+='<tr style="font-weight: bold;">';html+="<td>比赛时间:"+data.gameDate+"</td>";html+="<td>专家近5场战绩</td>";html+="</tr>";html+="<tr>";html+='<td><span style="color:#F57634">'+data.hostName+'</span>vs<span style="color:#F57634">'+data.guestName+"</span></td>";html+="<td>"+JctipsPlugin.getRecommendStatus(data.zj)+"</td>";html+="</tr></table></div>";html+='<div class="jcrecommend">';html+='<img src="'+JctipsPlugin.imgurl+'/fire.png">';html+='<a style="color: #F57634;padding-left: 10px;" href="http://cp.3g.cn/jctips/register.html?backurl=index.html">免费注册即送98元现金>></a>';html+="</div>";return html},qwhtml:function(data){var html="";html+='<div class="jcinfo">';if(data.type==0){html+=' <div><img src="'+JctipsPlugin.imgurl+'fb.png"></div>'}else{if(data.type==1){html+=' <div><img src="'+JctipsPlugin.imgurl+'bs.png"></div>'}}html+=' <div><p style="border-bottom: 1px solid #f2f2f2;"><span style="color: #F57634;font-size:20px;">'+data.userName+"</span></p>";html+='<p><span style="color: #F57634;">'+data.orderNum+"人</span><span>已订阅</span></p></div>";html+='<div><a href="http://cp.3g.cn/qiuwang/">订阅推荐</a></div>';html+="</div>";html+='<div class="jctabdetail">';html+='<table cellpadding="5" cellspacing="0">';html+='<tr style="font-weight: bold;">';html+="<td>昨日推荐</td>";html+="<td>专家近5场战绩</td>";html+="</tr>";html+="<tr>";html+=' <td><span style="color:#F57634">'+data.des+"</span>";if(data.result==1){html+='<span style="color:#ED1E17;font-weight:bolder">中</span>'}else{if(data.result==2){html+='<span style="color:#DBD6D6;font-weight:bolder">输</span>'}else{if(data.result==0){html+='<span style="color:#F57634;font-weight:bolder">走</span>'}}}html+="</td>";html+="<td>"+JctipsPlugin.getRecommendStatus(data.zj)+"</td>";html+="</tr></table></div>";html+='<div class="jcrecommend">';html+='<img src="'+JctipsPlugin.imgurl+'/fire.png">';html+='<a style="color: #F57634;padding-left: 10px;" href="http://cp.3g.cn/jctips/register.html?backurl=index.html">充值10000即送2000>></a>';html+="</div>";return html},getRecommendStatus:function(recommendresult){var html="";if(recommendresult!=""){var arr=recommendresult.split("|");for(var i=0;i<arr.length;i++){switch(arr[i]){case"0":html+='<span class="spandraw">走</span>';break;case"1":html+='<span class="spanwin">赢</span>';break;case"2":html+='<span class="spanlose">输</span>';break}}}return html}};JctipsPlugin.init();