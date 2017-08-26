var num = 1;
var loadingPage = function () {
	getInformation();
};

var getInformation = function () {
	var url = "https://itunes.apple.com/search?term=taylor+swift&limit=200";
	$.getJSON(url, function (response) {
		var info = response.results;
		console.log(info);
		info.forEach(function (info) {
			showingInformation(info);
		})

	});
};

var showingInformation = function (info) {
	var songName = info.trackCensoredName;
	console.log(songName);

	var collectionName = info.collectionName;
	console.log(collectionName);

	var trackId = info.trackId;
	console.log(trackId);

	var songImage = info.artworkUrl100;
	console.log(songImage);
	
	var songContainer = $("#songInfo-container");
	
	
	
	var li = $("<li/>");
	li.addClass("row");
	var pNum = $("<p/>");
	pNum.text(num++);
	pNum.addClass("grey-text col m1 s1")
	li.append(pNum);
	li.append(pNum);
	var img = $("<img/>");
	img.addClass("col m4 s4")
	img.attr("src",songImage);
	li.append(img);
	li.addClass("collection-item");
	var p = $("<p/>");
	var p1 = $("<p/>");
	var p2 = $("<p/>");
	p.addClass("blue-text");
	p.text("SONG:" + " " +songName);
	p1.text("COLLECTION:" +" " +collectionName);
	p2.text("TRACK-ID:" + " " + trackId);
	p.addClass("col m6 s6");
	p1.addClass("col m6 s6");
	p2.addClass("col m6 s6");
	li.append(p);
	li.append(p1);
	li.append(p2);
	songContainer.append(li);
	
	
	li.mouseover(function(){
		li.addClass("grey  lighten-1");
	});
	
	li.mouseout(function(){
		li.removeClass("grey  lighten-1");
	})
	
};

$(document).ready(loadingPage);