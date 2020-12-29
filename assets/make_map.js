//make map, marker, cluster using kakao map api

var mapview = document.getElementById('map-view');
var cardview = document.getElementById('card-view');

mapview.onclick = function () {
    board.style.display = 'none';
    map.style.display = '';
}
cardview.onclick = function () {
    map.style.display = 'none';
    board.style.display = '';;
}

var mapContainer = document.getElementById('map');
var positions = [];
var mapOption = {
    center: new kakao.maps.LatLng(37.551311, 126.945565),
    level: 1
};

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

//마커를 묶을 클러스터 구현
var clusterer = new kakao.maps.MarkerClusterer({
    map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
    averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
    minLevel: 2,
    disableClickZoom: true // 클러스터 할 최소 지도 레벨 
});

$(document).ready(function () {
    $.ajax({
        async: false,
        type: "GET",
        url: "/api/totalBoard",
        success: function (res) {
            res.map((a) => {
                var label = document.createElement('label');
                label.innerHTML =
                    `<img classs = "bd-placeholder-img card-img-top" src="../uploads/${a.image}"></img>
                        <div class="popup-body">
                            <a href=/board/read/${a._id}>${a.title}</a>
                        </div>`

                if (!a.latitude || !a.longitude) {
                    var latlng = new kakao.maps.LatLng(0.0, 0.0);
                    positions.push({
                        content: label,
                        latlng: latlng
                    });
                }
                else {
                    var latlng = new kakao.maps.LatLng(a.latitude, a.longitude);
                    positions.push({
                        content: label,
                        latlng: latlng
                    });
                }
            })
            // marker, cluster make and map mouse events
            markerMaker();
            clusterMaker();
        }
    });
});

function markerMaker() {

    for (var i = 0; i < positions.length; i++) {
        var marker = new kakao.maps.Marker({
            map, // 마커를 표시할 지도
            position: positions[i].latlng // 마커의 위치
        });

        var infowindow = new kakao.maps.InfoWindow({
            content: positions[i].content, // 인포윈도우에 표시할 내용
        });

        //mouse over && mouse out event 
        kakao.maps.event.addListener(marker, 'mouseover', makeMarkerOverListener(marker, infowindow));
        kakao.maps.event.addListener(marker, 'mouseout', makeMarkerOutListener(marker, infowindow));

        //마커 클러스터에 추가
        clusterer.addMarker(marker);
    }
}

function clusterMaker(){
    kakao.maps.event.addListener(clusterer, 'clusterclick', function(cluster) {
        makeClusterClickListener(cluster);
    });
}

function makeMarkerOverListener(marker, infowindow) {
    return function () {
        //만약 cluster side bar가 열려있다면 display : none;
        // $(document).ready(function () {
        //     $(".sidebar-wrapper").css.display = none;
        // });
        infowindow.open(map, marker);
    }
}

function makeMarkerOutListener(marker, infowindow) {
    return function () {
        infowindow.close();
    }
}

//왜 makeMarker 처럼 고차함수 쓰면 안돼지?
function makeClusterClickListener(cluster) {
    //get arrays of makrer which belongs to this cluster
    var clusters = cluster.getMarkers();
    $(document).ready(function () {
        $('.ui.sidebar')
        .sidebar('setting', 'transition', 'overlay')
        .sidebar('toggle');
    });
}
