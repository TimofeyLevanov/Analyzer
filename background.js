var objectURLID;
stats = chrome.contextMenus.create
(
  {
    id: "allStats",
    title: "Общая статиститка",
    contexts: ["all"],
    onclick: stats
  }, 
  function(){}
);	

var objectURLID;
DAU = chrome.contextMenus.create
(
  {
    id: "DAU",
    title: "DAU",
    contexts: ["all"],
    onclick: DAU
  }, 
  function(){}
);	

function DAU(info, tab){
		var d = new Date();
	var today = d.toJSON().slice(0,10);
   // d.setMonth(d.getMonth() - 1);
	var x = 6;//Колличество дней + 1 в выборке.
		for (var i = 0; i<x;i++){
			d -= 86400000;
		}
		d = new Date(d);

	   var monthAgoDate = d.toJSON().slice(0,10);
	   var newURL ="https://www.appodeal.com/dashboard?skip_direct=0&show_dau=1&usevertica=1&extra_filters=0&limit_requests=0&limit_impressions=0&limit_revenue=0&limit_clicks=0&limit_ct=&see_as=17826&preset_with_columns=1&chart_detalisation=date&detalisation%5B%5D=banner_type&date_to="+today+ "&date_from="+monthAgoDate+"&compare_dates=0"
	  
	    
		 chrome.tabs.create({url: newURL, active: false }) ;	
}

function stats(info, tab)
{
	var d = new Date();
	var today = d.toJSON().slice(0,10);
   // d.setMonth(d.getMonth() - 1);
	var x = 6;//Колличество дней + 1 в выборке.
		for (var i = 0; i<x;i++){
			d -= 86400000;
		}
		d = new Date(d);

	   var monthAgoDate = d.toJSON().slice(0,10);
	   var newURL ="https://www.appodeal.com/dashboard?&do_not_split_exchange=1skip_direct=1&usevertica=1&extra_filters=0&limit_requests=0&limit_impressions=0&limit_revenue=0&limit_clicks=0&limit_ct=&see_as=17826&preset_with_columns=1&chart_detalisation=default&detalisation%5B%5D=date&detalisation%5B%5D=network&detalisation%5B%5D=banner_type&date_to=" + today + "&date_from=" + monthAgoDate + "&compare_dates=0"
	  
	    // var indexNewTab = activeTab.index + 1;
		 chrome.tabs.create({url: newURL, active: false }) ;
		
		 chrome.runtime.sendMessage({problem: "work?"}, function(response) {
			try {//делаем запрос к странице, если её нет, то происходит ошибка. Тогда при обработке ошибки, открывается страница.
				if(response.farewell == "yes"){
					console.log("страница уже открыта");
				}
			} catch (err) {
					chrome.tabs.create({url: 'popup.html', active: false }) ;
			}
		});
}

downloadItem = chrome.contextMenus.create
(
  {
    id: "utilsExtDownloadMenuItem",
    title: "toCheckList",
    contexts: ["all"],
    onclick: downloadItem
  }, 
  function(){}
);	

function downloadItem(info, tab)
{
	var d = new Date();
   // d.setMonth(d.getMonth() - 1);
	var x = 3;//Колличество дней + 1 в выборке.
		for (var i = 0; i<x;i++){
			d -= 86400000;
		}
		d = new Date(d);

	   var theeDaysAgo = d.toJSON().slice(0,10);
	var newURL  =  "https://www.appodeal.com/dashboard?skip_direct=1&usevertica=1&extra_filters=1&admin_rows_limit=80&admin_sort_by=1&limit_requests=0&limit_impressions=0&limit_revenue=0&limit_clicks=0&limit_ct=&see_as=17826&preset_with_columns=1&chart_detalisation=default&detalisation%5B%5D=app&date_to=" + theeDaysAgo + "&date_from=" + theeDaysAgo + "&compare_dates=0"

	chrome.tabs.create({ url: newURL, active: false });

}
var links = new Map([
['AdColony (Ad Network)','10'],
['Admob (Ad Network)','20'],
['Ad Server Campaigns','5'],
['Adtelligent (DSP)','11490'],
['All in One Media (Ad Network)','1410'],
['Altamob (DSP)','10541'],
['Amadoad (DSP)','7928'],
['Amazon Ads (Ad Network)','30'],
['AppGrowth (DSP)','9608'],
['Applift (DSP)','11320'],
['Applovin (Ad Network)','50'],
['Appnext (DSP)','11430'],
['Appreciate (DSP)','8047'],
['Avazu (DSP)','11380'],
['Avocarrot (Ad Exchange)','190'],
['Axonix (DSP)','8262'],
['Backfill','1830'],
['Beeline Programmatic (DSP)','9758'],
['BIDEASE (DSP)','9741'],
['Bucksense (DSP)','9879'],
['Chartboost (Ad Network)','60'],
['Criteo (DSP)','11410'],
['Edge226 (DSP)','10641'],
['Engage (DSP)','11370'],
['Epom (DSP)','11390'],
['Facebook (Ad Network)','130'],
['Flurry (Ad Network)','180'],
['Fractional Media (DSP)','8098'],
['Fyber (Ad Network)','1900'],
['Getintent (DSP)','11280'],
['Getloyal DSP (DSP)','9642'],
['Google DFP (Ad Network)','1330'],
['Hybrid DSP (DSP)','10184'],
['HyperAdx (DSP)','9232'],
['Index Exchange (DSP)','9747'],
['InMobi (Ad Network)','140'],
['Inneractive (Ad Exchange)','260'],
['IronSource (Ad Network)','1280'],
['Jampp (DSP)','11300'],
['Kayzen (DSP)','11540'],
['LeadBolt (DSP)','10580'],
['Liftoff (DSP)','11530'],
['LiquidM (DSP)','8237'],
['Manage.com (DSP)','10700'],
['Mintegral (Ad Network)','1790'],
['Mintegral (DSP)','8046'],
['MoPub (Ad Exchange)','230'],
['MyTarget (Ad Network)','120'],
['Ogury (Ad Network)','1770'],
['OpenX (Ad Exchange)','250'],
['Oxonux Digital Media Pvt Ltd (DSP)','11400'],
['Persona.ly (DSP)','10042'],
['Pollfish (Ad Network)','1890'],
['Pubmatic (DSP)','11570'],
['PubNative (Ad Network)','200'],
['Pubnative (DSP)','9768'],
['Rocket 10 (Ad Network)','290'],
['Rubicon (DSP)','11460'],
['Service Messages','40'],
['Smaato (Ad Exchange)','80'],
['Smaato SDK (Ad Exchange)','1750'],
['SoloMath (DSP)','11480'],
['StartApp (Ad Network)','160'],
['Tapjoy (Ad Network)','1020'],
['Test Ads','2'],
['TestAgency (DSP)','11440'],
['Tremor (Ad Network)','1300'],
['Unity Ads (Ad Network)','90'],
['Vdopia (Ad Network)','1090'],
['Vihub (Ad Network)','1060'],
['Vungle (Ad Network)','100'],
['Woobi (DSP)','8016'],
['xAd (DSP)','8005'],
['Yandex (Ad Network)','150'],
['Yeahmobi (DSP)','7930'],
['Zorka Mobi (DSP)','11360'],
['Aggregated campaigns data','0'],
['Appodeal Exchange','1260']
]); 

//
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
	  if (request.greeting == "hello"){
		sendResponse({test: objectURLID});
		console.log(objectURLID);
	  }
	  //var indexNewTab1 = activeTab.index;
	  if (request.link == "link"){
        				var d = new Date();
				var today = d.toJSON().slice(0,10);
			   // d.setMonth(d.getMonth() - 1);
				var x = 30;//Колличество дней + 1 в выборке.
					for (var i = 0; i<x;i++){
						d -= 86400000;
					}
					d = new Date(d);
		
				   var monthAgoDate = d.toJSON().slice(0,10);
		var newURL2 = " https://www.appodeal.com/dashboard?app%5B%5D=" + request.id +"&network%5B%5D="+links.get(request.network)+"&do_not_split_exchange=1&skip_direct=1&usevertica=1&extra_filters=0&limit_requests=0&limit_impressions=0&limit_revenue=0&limit_clicks=0&limit_ct=&see_as=17826&preset_with_columns=1&chart_detalisation=date&detalisation%5B%5D=date&detalisation%5B%5D=banner_type&date_to="+today+"&date_from="+monthAgoDate+"&compare_dates=0"
		//  alert(request.network);
		// alert(links.get(request.network));
	    //index: indexNewTab1,
		  chrome.tabs.create({ url: newURL2, active: false });
		  
	  }
	});
	
chrome.browserAction.onClicked.addListener(function(activeTab){
	var tab=false;
	chrome.runtime.sendMessage({Indification: "indification"}, function(response) {
		try {
		console.log(response.message);
		if(response.message==true){
            tab=true;
		}
		} catch (err) {
            tab=true;
		}
		if(tab){

			var indexNewTab;
			var objectURL = activeTab.url;
			if(objectURL.includes('appodeal.com/admin/apps/')) {  
		
				var d = new Date();
				var today = d.toJSON().slice(0,10);
			   // d.setMonth(d.getMonth() - 1);
				var x = 6;//Колличество дней + 1 в выборке.
					for (var i = 0; i<x;i++){
						d -= 86400000;
					}
					d = new Date(d);
		
				   var monthAgoDate = d.toJSON().slice(0,10);
				var newURL = '';
				objectURLID = objectURL.split("/")[objectURL.split("/").length - 1];
				newURL = "https://www.appodeal.com/dashboard?app%5B%5D=" + objectURLID + "&do_not_split_exchange=1&skip_direct=1&usevertica=1&extra_filters=0&limit_requests=0&limit_impressions=0&limit_revenue=0&limit_clicks=0&limit_ct=&see_as=17826&preset_with_columns=1&chart_detalisation=date&detalisation%5B%5D=date&detalisation%5B%5D=network&detalisation%5B%5D=banner_type&date_to=" + today + "&date_from=" + monthAgoDate + "&compare_dates=0";
				//connectionsStatuses = 'https://www.appodeal.com/admin/apps/'+ objectURLID + '/network_connections';
				indexNewTab = activeTab.index + 1;
		
				chrome.tabs.create({ url: newURL, index: indexNewTab, active: false });
				chrome.tabs.create({url: 'popup.html', index: ++indexNewTab, active: false }) ;
			//	chrome.tabs.create({ url: newURL, index: indexNewTab, active: false });
		
				//chrome.tabs.create({ url: connectionsStatuses, index: ++indexNewTab, active: false });
		
			}
			/*chrome.runtime.sendMessage({problem: "work?"}, function(response) {
				try {//делаем запрос к странице, если её нет, то происходит ошибка. Тогда при обработке ошибки, открывается страница.
					if(response.farewell == "yes"){
						console.log("страница уже открыта");
					}
				} catch (err) {
					chrome.tabs.create({url: 'popup.html', index: ++indexNewTab, active: false }) ;
				}
			});*/
		
		
			//chrome.tabs.create({url: 'popup.html', index: ++indexNewTab, active: false }) ;
		
		
		/*
			setTimeout(function(){
				chrome.runtime.sendMessage({ID: objectURL.split("/")[objectURL.split("/").length - 1]}, function(response) {
				});
			   },6000); 
		*/
			}
	});

});



  