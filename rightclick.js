//add - custom blank page seller links -- 
// The onClicked callback function.
function onClickHandler(info, tab) {

	x 			= JSON.stringify(info)
	x 			= info.selectionText;
	let index 	= tab.index + 1;
	// what was clicked? 
	// x = info.menuItemId;
	
	// alert ("something clicked" + x );
	
	address_home = "上海市普陀区金鼎路298弄45号"
	address_target = x

	newURL = `https://ditu.amap.com/dir?from[name]=${address_home}&to[name]=${address_target}&type=bus&dateTime=now`
	chrome.tabs.create({ url: newURL , 'index': index});
	
};


chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {
  // Create one test item for each context type.
  var contexts = ["selection"];
  for (var i = 0; i < contexts.length; i++) {
    var context = contexts[i];
    //var title = "Search eBay %s '" + context + "' menu item";
	var title = "查询高德地图  ' %s '";
	
    var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});
	}
});
