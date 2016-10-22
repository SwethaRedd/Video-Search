$("#goBtn").click(function(){
var what = $("#what").val();

	var url ="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q="+what+"&key=AIzaSyByBUpxwKJ20EEKZr8XdLHpWvy_T3D3irg";

	$.getJSON( url, function(data) {
    var resultsArray=data.items;
    var html="";
   	for(var i =0;i<resultsArray.length;i++){
      var jaffa=resultsArray[i].id.videoId;
     		html += '<div class="thumbnails">'
        html += "<tr><td><img src='"+resultsArray[i].snippet.thumbnails.default.url+"'</td><td>"+resultsArray[i].snippet.title+"</td><td><a href=\"https://www.youtube.com/watch?v="+resultsArray[i].id.videoId+"\" target=_new class=\"btn btn-primary\">Play video</a></td></tr>";

        //  +'ID: <a href="https://www.youtube.com/watch?v='+jaffa+'"><img src = "'+resultsArray[i].snippet.thumbnails.default.url+'"></a>'
     			// '</div>';
   			  
   		};
//https://www.youtube.com/watch?v='+jaffa+
//'<a href="https://www.youtube.com/watch?v='+jaffa+'">Link</a>'
   	
  		$("#results").html(html);

	});

});
