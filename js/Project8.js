var map = new BMap.Map("myMap");// 创建地图实例  
var point = new BMap.Point(120.141375,30.257806);// 创建西湖点坐标 
map.centerAndZoom(point,14);
var marker = new BMap.Marker(point);   
map.addOverlay(marker);
marker.enableDragging();    
marker.addEventListener("dragend", function(e)
{    
    alert("当前位置：" + e.point.lng + ", " + e.point.lat);    
})
map.enableScrollWheelZoom();
map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl()); 
var local = new BMap.LocalSearch(map, {
    pageCapacity: 6,
    renderOptions: 
    {
        map: map,
        panel: "result",
        autoViewport: false
    }
});
var transit = new BMap.TransitRoute(map, {
    renderOptions: 
    {
        map: map,
        panel: "route"
    }
});
local.searchNearby("宾馆", "西湖风景区");
var hznu = new BMap.Point(120.019973,30.294177);
var markerArr=[];
local.setMarkersSetCallback(function(pois){
    for(var i = 0; i < pois.length; i++)
    {
        markerArr[i] = pois[i].marker;
        pois[i].marker.addEventListener("click", function(e){
         	  transit.clearResults();
            transit.search(hznu,this.z.title);
        });
          
    }
});
var opts = 
{
    width: 300, 
    height: 200,    
    title: "<span style='color:#FF0033'>"+"地点：",
}
var school_info=[
    [120.015015,30.296074,"杭州师范大学博文苑8号楼",'../img/7号楼.jpg'],
    [120.012265,30.296288,"杭州师范大学篮球场",'../img/篮球场.jpg'],
    [120.022173,30.298767,"杭州师范大学图书馆",'../img/图书馆.jpg'],
    [120.019991,30.294893, "杭州师范大学阿里巴巴商学院",'../img/阿里巴巴商学院.jpg'],
    [120.014277,30.295111,"杭州师范大学体育场",'../img/体育场.jpg'],
    [120.019146,30.296421,"恕园13号楼一鸣面包店",'../img/教学区.jpg']
];
for(var i = 0; i < school_info.length; i++)
{
  	var point= new BMap.Marker(new BMap.Point(school_info[i][0],school_info[i][1]));
  	var address = school_info[i][2];
  	map.addOverlay(point);
  	var div=document.createElement("div");
  	div.style.width='200px';
  	div.style.height='140px';
  	var img=document.createElement('img');
  	img.setAttribute('src',school_info[i][3]);
  	img.style.width='290px';
  	img.style.height='160px';
  	div.append(address);
  	div.append(img);
  	OnClick(div,point);
}
function OnClick(div,point)
{
  	point.addEventListener("click",function(e){
  	var p = e.target;
  	var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
  	var infoWindow = new BMap.InfoWindow(div,opts);
  	map.openInfoWindow(infoWindow,point);
  	});
}