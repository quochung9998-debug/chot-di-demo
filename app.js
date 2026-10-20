"use strict";
const DISHES=[
["Phở bò","🍜",55000,"nuoc","no",["bo"],"Hương vị đậm đà, hợp bữa sáng hoặc trưa"],
["Phở gà","🍲",50000,"nuoc","no",["ga"],"Nước dùng thanh, dễ ăn"],
["Bún bò Huế","🍜",60000,"nuoc","yes",["bo"],"Đậm vị, cay nhẹ"],
["Bún riêu cua","🍲",45000,"nuoc","no",["hai-san"],"Vị chua dịu và thơm"],
["Hủ tiếu Nam Vang","🍜",55000,"nuoc","no",["heo"],"Nước dùng ngọt thanh"],
["Mì hoành thánh","🍜",50000,"nuoc","no",["heo"],"Hoành thánh mềm thơm"],
["Bánh canh cua","🦀",65000,"nuoc","no",["hai-san"],"Sợi bánh canh dai, nước dùng sánh"],
["Bún thịt nướng","🥗",45000,"com","no",["heo"],"Tươi mát với rau và nước mắm"],
["Cơm tấm sườn","🍚",50000,"com","no",["heo"],"Món cơm quen thuộc của Sài Gòn"],
["Cơm gà xối mỡ","🍗",55000,"com","no",["ga"],"Gà giòn cùng cơm nóng"],
["Cơm chiên hải sản","🍤",60000,"com","no",["hai-san"],"Cơm chiên thơm, đậm đà"],
["Cơm bò lúc lắc","🥩",75000,"com","no",["bo"],"Thịt bò mềm, ăn cùng cơm"],
["Bánh mì thịt","🥖",30000,"nhanh","no",["heo"],"Gọn nhẹ, tiện mang đi"],
["Bánh mì chay","🥖",30000,"chay","no",["chay"],"Rau củ tươi và sốt chay"],
["Gỏi cuốn tôm thịt","🥬",40000,"nhanh","no",["hai-san"],"Thanh mát, nhẹ bụng"],
["Bánh xèo","🥞",60000,"nhanh","no",["hai-san"],"Vỏ giòn và rau xanh"],
["Bún chả","🍢",55000,"com","no",["heo"],"Thịt nướng thơm cùng bún"],
["Mì Quảng","🍜",55000,"nuoc","no",["ga"],"Đặc sản miền Trung"],
["Cơm chay","🥦",45000,"chay","no",["chay"],"Đa dạng rau củ"],
["Bún chay","🍲",45000,"chay","no",["chay"],"Nước dùng rau củ thanh"],
["Bánh ướt chay","🥗",40000,"chay","no",["chay"],"Nhẹ nhàng, dễ ăn"],
["Salad rau củ","🥗",50000,"chay","no",["chay"],"Nhiều rau xanh, tươi ngon"],
["Bún đậu mắm tôm","🍱",65000,"com","no",["heo"],"Món ăn nhóm bạn yêu thích"],
["Lẩu Thái","🍲",140000,"nhom","yes",["hai-san"],"Chua cay cho nhóm bạn"],
["Lẩu nấm chay","🍄",120000,"chay","no",["chay"],"Phù hợp đi ăn cùng nhau"],
["Pizza phô mai","🍕",120000,"nhom","no",["chay"],"Lựa chọn chia sẻ"],
["Gà rán","🍗",75000,"nhanh","no",["ga"],"Giòn rụm, nhanh gọn"],
["Bò né","🥩",70000,"com","no",["bo"],"Bò nóng trên chảo"],
["Bánh cuốn","🥟",40000,"nhanh","no",["heo"],"Bánh mềm, nhân thịt"],
["Cháo sườn","🥣",35000,"nuoc","no",["heo"],"Ấm bụng, dễ ăn"],
["Bún mắm","🍜",65000,"nuoc","no",["hai-san"],"Hương vị miền Tây"],
["Cơm cá kho","🐟",55000,"com","no",["hai-san"],"Bữa cơm gia đình"],
["Sushi","🍣",120000,"nhom","no",["hai-san"],"Đổi vị cùng ẩm thực Nhật"],
["Tokbokki","🍢",65000,"nhanh","yes",["chay"],"Bánh gạo Hàn Quốc"],
["Mì cay","🍜",65000,"nuoc","yes",["hai-san"],"Vị cay tê hấp dẫn"],
["Xôi mặn","🍙",30000,"nhanh","no",["heo"],"Tiện lợi cho bữa sáng"]
].map((a,id)=>({id,name:a[0],emoji:a[1],price:a[2],category:a[3],spicy:a[4]==="yes",tags:a[5],description:a[6]}));
const FOOD_STORIES=[["Miền Bắc Việt Nam","Phở gắn với văn hóa ẩm thực miền Bắc, đặc biệt phổ biến ở Hà Nội và Nam Định; sau đó lan rộng khắp cả nước.","Vietnamese pho bo"],["Miền Bắc Việt Nam","Phở gà là biến thể quen thuộc của phở Việt, phổ biến ở miền Bắc với nước dùng từ xương gà.","Vietnamese chicken pho"],["Huế, miền Trung","Bún bò Huế gắn với ẩm thực cố đô Huế, nổi bật bởi vị sả, mắm ruốc và nước dùng đậm đà.","Bun bo Hue"],["Miền Bắc Việt Nam","Bún riêu là món bún dân dã có riêu cua đồng, được biết đến rộng rãi trong ẩm thực Bắc Bộ.","Bun rieu"],["Nam Vang và Nam Bộ","Hủ tiếu Nam Vang có liên hệ với ẩm thực Phnom Penh (Nam Vang), được biến đổi phù hợp khẩu vị miền Nam Việt Nam.","Hu tieu Nam Vang"],["Ẩm thực Hoa – Việt","Mì hoành thánh có nguồn gốc từ truyền thống mì và hoành thánh Trung Hoa, rất quen thuộc trong cộng đồng Hoa ở Việt Nam.","Wonton noodle soup"],["Nam Bộ Việt Nam","Bánh canh cua là biến thể bánh canh phổ biến ở miền Nam, kết hợp sợi bánh dai và nước dùng cua.","Banh canh cua"],["Nam Bộ Việt Nam","Bún thịt nướng phổ biến ở miền Nam với thịt nướng, rau sống, bún và nước mắm chua ngọt.","Bun thit nuong"],["Sài Gòn – Nam Bộ","Cơm tấm gắn với văn hóa ăn uống bình dân Sài Gòn, từ hạt gạo tấm đến đĩa cơm sườn quen thuộc.","Com tam"],["Ẩm thực Việt Nam","Cơm gà xối mỡ là món cơm gà phổ biến tại nhiều quán ăn Việt, nổi bật nhờ lớp da gà giòn.","Vietnamese fried chicken rice"],["Ẩm thực Á Đông","Cơm chiên xuất hiện trong nhiều nền ẩm thực châu Á; biến thể hải sản rất phổ biến tại Việt Nam.","Seafood fried rice"],["Ẩm thực Việt – Pháp","Bò lúc lắc là món thịt bò áp chảo phổ biến ở Việt Nam, thường được xem là chịu ảnh hưởng từ kỹ thuật nấu ăn phương Tây.","Bo luc lac"],["Việt Nam, chịu ảnh hưởng Pháp","Bánh mì Việt Nam phát triển từ baguette thời Pháp thuộc rồi biến thành món ăn đường phố với nhiều loại nhân riêng.","Banh mi"],["Ẩm thực chay Việt Nam","Bánh mì chay là biến thể của bánh mì Việt Nam với nhân thực vật, phù hợp người muốn hạn chế thịt cá.","Vegetarian banh mi"],["Nam Bộ Việt Nam","Gỏi cuốn thường được biết đến như món cuốn tươi miền Nam, kết hợp bánh tráng, rau, bún và tôm thịt.","Goi cuon"],["Miền Trung và Nam Bộ","Bánh xèo có nhiều biến thể vùng miền; phiên bản miền Nam thường có kích thước lớn, ăn cùng nhiều rau.","Banh xeo"],["Hà Nội, miền Bắc","Bún chả là đặc sản nổi tiếng của Hà Nội, gồm thịt nướng, bún, nước chấm và rau sống.","Bun cha"],["Quảng Nam, miền Trung","Mì Quảng là đặc sản Quảng Nam, dùng sợi mì bản rộng cùng ít nước dùng, rau và nhiều loại nhân.","Mi Quang"],["Ẩm thực chay Việt Nam","Cơm chay phổ biến trong truyền thống ăn chay Việt Nam, nhất là tại các quán chay và bữa cơm gia đình.","Vietnamese vegetarian rice"],["Ẩm thực chay Việt Nam","Bún chay là biến thể không thịt cá của các món bún Việt, thường dùng nước dùng rau củ và đậu phụ.","Vietnamese vegetarian noodle soup"],["Ẩm thực chay Việt Nam","Bánh ướt chay là phiên bản dùng nhân và món ăn kèm từ thực vật của bánh ướt Việt Nam.","Banh uot"],["Ẩm thực quốc tế","Salad rau củ có nhiều truyền thống chế biến trên thế giới, hiện phổ biến trong thực đơn ăn nhẹ hiện đại.","Vegetable salad"],["Miền Bắc Việt Nam","Bún đậu mắm tôm gắn với ẩm thực bình dân Hà Nội và miền Bắc, gồm bún, đậu rán và mắm tôm.","Bun dau mam tom"],["Thái Lan","Lẩu Thái lấy cảm hứng từ hương vị chua cay Thái Lan, thường kết hợp sả, lá chanh và nhiều nguyên liệu nhúng.","Thai hot pot"],["Ẩm thực chay hiện đại","Lẩu nấm chay là biến thể lẩu dùng nấm, rau và nước dùng thực vật, phổ biến tại các nhà hàng chay.","Mushroom hot pot"],["Ý","Pizza gắn với ẩm thực Ý, nổi tiếng nhất là truyền thống pizza Napoli; pizza phô mai có nhiều biến thể.","Cheese pizza"],["Ẩm thực quốc tế","Gà rán hiện diện trong nhiều nền ẩm thực; kiểu gà rán giòn hiện đại phổ biến rộng rãi nhờ các chuỗi thức ăn nhanh.","Fried chicken"],["Việt Nam, ảnh hưởng phương Tây","Bò né là món bò áp chảo trên chảo nóng phổ biến ở Việt Nam, thường ăn cùng bánh mì và trứng.","Bo ne Vietnamese"],["Miền Bắc Việt Nam","Bánh cuốn là món bánh tráng hấp mỏng lâu đời trong ẩm thực miền Bắc, thường cuốn nhân thịt và mộc nhĩ.","Banh cuon"],["Miền Bắc Việt Nam","Cháo sườn là món cháo bình dân quen thuộc tại Hà Nội và nhiều tỉnh miền Bắc, thường ăn nóng.","Chao suon"],["Miền Tây Nam Bộ","Bún mắm gắn với ẩm thực vùng sông nước miền Tây, sử dụng mắm cá làm nền hương vị nước dùng.","Bun mam"],["Ẩm thực gia đình Việt","Cá kho là cách chế biến lâu đời trong mâm cơm Việt Nam, có nhiều biến thể theo vùng miền.","Vietnamese braised fish"],["Nhật Bản","Sushi là món ăn Nhật Bản dựa trên cơm trộn giấm kết hợp nhiều loại nguyên liệu như cá, rong biển và rau.","Sushi Japanese"],["Hàn Quốc","Tteokbokki là món bánh gạo nổi tiếng ở Hàn Quốc; phiên bản sốt cay đỏ rất phổ biến trong ẩm thực đường phố.","Tteokbokki"],["Hàn Quốc, biến thể tại Việt Nam","Mì cay nhiều cấp độ phổ biến tại Việt Nam lấy cảm hứng từ hương vị mì cay Hàn Quốc và được điều chỉnh theo khẩu vị địa phương.","Korean spicy noodle soup"],["Việt Nam","Xôi mặn là biến thể xôi ăn cùng nhiều loại thịt và đồ mặn, rất quen thuộc trong bữa sáng và đồ ăn nhanh Việt Nam.","Vietnamese sticky rice xoi man"]];
DISHES.forEach((d,i)=>{d.region=FOOD_STORIES[i][0];d.origin=FOOD_STORIES[i][1];d.imageQuery=FOOD_STORIES[i][2]});
const AREAS=["Quận 1","Quận 3","Quận 5","Quận 7","Quận 10","Quận 12","Bình Thạnh","Gò Vấp","Phú Nhuận","Thủ Đức","Tân Bình","Tân Phú","Bình Tân"];

/* Location module: no paid API; precise coordinates stay in memory only. */
const AREA_CENTERS={
"Quận 1":[10.7768,106.7009],"Quận 3":[10.7843,106.6847],
"Quận 5":[10.7544,106.6677],"Quận 7":[10.7359,106.7219],
"Quận 10":[10.7726,106.6678],"Quận 12":[10.8628,106.6537],
"Bình Thạnh":[10.8036,106.7075],"Gò Vấp":[10.8387,106.6653],
"Phú Nhuận":[10.7993,106.6801],"Thủ Đức":[10.8493,106.7538],
"Tân Bình":[10.8015,106.6521],"Tân Phú":[10.7917,106.6280],
"Bình Tân":[10.7653,106.6035]
};
let liveLocation=null, gpsPending=false, mapInstance=null, mapMarker=null;
const coordinates=()=>liveLocation||{lat:AREA_CENTERS[state.area][0],lng:AREA_CENTERS[state.area][1],source:"district",accuracy:null};
const readableCoords=l=>l.lat.toFixed(5)+", "+l.lng.toFixed(5);
const sourceLabel=l=>l.source==="gps"?"GPS của thiết bị":l.source==="pin"?"Điểm bạn đã ghim":l.source==="manual"?"Tọa độ bạn nhập":"Trung tâm "+state.area+" (ước lượng)";
function locationSummary(){
  const l=coordinates();
  return '<div class="card tint"><div class="row between"><strong>📍 Điểm xuất phát tìm quán</strong><span class="muted">'+(liveLocation?"Đã chọn":"Tạm dùng khu vực")+'</span></div>'+
  '<p style="margin:8px 0 3px"><b>'+sourceLabel(l)+'</b></p>'+
  '<p class="muted" style="margin:0">'+readableCoords(l)+(l.accuracy?" · Sai số GPS khoảng "+Math.round(l.accuracy)+"m":"")+'</p>'+
  '<div class="row" style="margin-top:12px;flex-wrap:wrap"><button class="btn sm ghost" id="gps" '+(gpsPending?"disabled":"")+'>◎ '+(gpsPending?"Đang định vị...":"Lấy GPS")+'</button><button class="btn sm ghost" id="pick-map">◉ Chọn trên bản đồ</button>'+(liveLocation?'<button class="btn sm ghost" id="clear-location">Đặt lại</button>':'')+'</div>'+
  (state.gps?'<div class="alert" style="margin-top:10px">'+state.gps+'</div>':'')+
  '<details style="margin-top:12px"><summary class="muted" style="cursor:pointer">Nhập tọa độ thủ công (vĩ độ, kinh độ)</summary>'+
  '<div class="grid" style="margin-top:9px"><input id="lat-input" type="number" inputmode="decimal" step="any" min="-90" max="90" placeholder="Vĩ độ (10.78)" value="'+(liveLocation?liveLocation.lat:"")+'"><input id="lng-input" type="number" inputmode="decimal" step="any" min="-180" max="180" placeholder="Kinh độ (106.69)" value="'+(liveLocation?liveLocation.lng:"")+'"></div>'+
  '<button class="btn sm ghost" id="set-coords" style="margin-top:8px">Dùng tọa độ này</button></details>'+
  '<p class="muted" style="margin:10px 0 0">Tọa độ chính xác không được lưu vào lịch sử hay gửi về máy chủ CHỐT ĐI. Google Maps nhận từ khóa và điểm tìm kiếm khi bạn chọn mở Maps.</p></div>';
}
function gpsLocate(){
  if(gpsPending)return;
  if(!window.isSecureContext){state.gps="GPS yêu cầu HTTPS. Hãy mở bản GitHub Pages qua https://.";render();return}
  if(!navigator.geolocation){state.gps="Thiết bị/trình duyệt không hỗ trợ GPS. Hãy dùng bản đồ hoặc nhập tọa độ.";render();return}
  gpsPending=true;state.gps="Đang xin phép truy cập vị trí…";render();
  navigator.geolocation.getCurrentPosition(pos=>{
    gpsPending=false;
    const {latitude:lat,longitude:lng,accuracy}=pos.coords;
    liveLocation={lat,lng,accuracy,source:"gps"};
    state.gps="Đã nhận vị trí. Bạn có thể thay đổi điểm xuất phát trên bản đồ.";
    render();
  },err=>{
    gpsPending=false;
    const messages={1:"Bạn đã từ chối quyền GPS. Hãy cho phép vị trí trong cài đặt trình duyệt hoặc chọn điểm thủ công.",2:"Không lấy được tín hiệu GPS. Hãy thử lại hoặc chọn thủ công.",3:"GPS quá thời gian chờ. Hãy thử lại hoặc chọn thủ công."};
    state.gps=messages[err.code]||"Có lỗi khi định vị. Vui lòng chọn thủ công.";render();
  },{enableHighAccuracy:true,timeout:12000,maximumAge:60000});
}
function setManualCoords(){
 const latInput=document.querySelector("#lat-input"), lngInput=document.querySelector("#lng-input");
 const la=latInput&&latInput.value.trim(),lo=lngInput&&lngInput.value.trim();
 const lat=Number(la),lng=Number(lo);
 if(!la||!lo||!Number.isFinite(lat)||!Number.isFinite(lng)||Math.abs(lat)>90||Math.abs(lng)>180){
  state.gps="Tọa độ không hợp lệ. Vĩ độ từ -90 đến 90, kinh độ từ -180 đến 180.";render();return;
 }
 liveLocation={lat,lng,source:"manual",accuracy:null};
 state.gps="Đã cập nhật điểm xuất phát từ tọa độ thủ công.";render();
}
function loadLeaflet(){
 return new Promise((resolve,reject)=>{
  if(window.L){resolve();return}
  if(!document.querySelector("#leaflet-css")){
    const css=document.createElement("link");css.id="leaflet-css";css.rel="stylesheet";css.href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";document.head.appendChild(css);
  }
  const script=document.createElement("script");script.src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
  script.onload=()=>resolve();script.onerror=()=>reject(new Error("Không tải được bản đồ. Hãy kiểm tra mạng hoặc nhập tọa độ thủ công."));
  document.head.appendChild(script);
 });
}
async function openPicker(){
 if(mapInstance){mapInstance.remove();mapInstance=null;mapMarker=null}
 let modal=document.createElement("div");modal.className="map-overlay";modal.id="map-overlay";
 modal.innerHTML='<div class="map-dialog"><div class="row between"><b>Chạm bản đồ để ghim vị trí</b><button id="close-map" class="icon-btn" aria-label="Đóng">×</button></div><p class="muted">Dùng hai ngón tay để zoom hoặc chạm vào điểm xuất phát bạn muốn.</p><div id="location-map" style="height:min(65vh,450px);border-radius:14px;background:#e6e5dd;margin:12px 0"></div><button class="btn full" id="confirm-pin" disabled>Xác nhận vị trí</button><p class="muted" style="margin:10px 0 0">Bản đồ OpenStreetMap qua Leaflet · không cần API key</p></div>';
 document.body.appendChild(modal);document.querySelector("#close-map").onclick=()=>{if(mapInstance)mapInstance.remove();mapInstance=null;modal.remove()};
 let picked=null;
 try{
  await loadLeaflet();
  if(!document.getElementById("location-map"))return;
  const c=coordinates();
  mapInstance=L.map("location-map").setView([c.lat,c.lng],liveLocation?15:13);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; OpenStreetMap contributors'}).addTo(mapInstance);
  mapMarker=L.marker([c.lat,c.lng]).addTo(mapInstance);
  mapInstance.on("click",e=>{
    picked={lat:e.latlng.lat,lng:e.latlng.lng,accuracy:null,source:"pin"};
    mapMarker.setLatLng(e.latlng);document.querySelector("#confirm-pin").disabled=false;
  });
  setTimeout(()=>{if(mapInstance)mapInstance.invalidateSize()},150);
  document.querySelector("#confirm-pin").onclick=()=>{
    if(!picked)return;
    liveLocation=picked;state.gps="Đã chọn vị trí trên bản đồ.";
    mapInstance.remove();mapInstance=null;modal.remove();render();
  };
 }catch(e){
  const el=document.getElementById("location-map");if(el)el.textContent=e.message;
 }
}
function openGoogleMaps(){
 const d=current();if(!d)return;
 const loc=coordinates();
 // Search term is ONLY the food name. Coordinates set the map viewport, never part of the textual query.
 const term=encodeURIComponent(d.name);
 const lat=loc.lat.toFixed(5),lng=loc.lng.toFixed(5);
 const url="https://www.google.com/maps/search/"+term+"/@"+lat+","+lng+",14z?hl=vi";
 window.open(url,"_blank","noopener,noreferrer");
}

const VENUES=["Bếp Ngon Góc Phố","Quán Nhà Mình","Bếp Xinh Sài Gòn","Góc Ăn Trưa","Tiệm Ăn Vui Vẻ","Bếp Nhỏ Hôm Nay","Quán Ăn Quen","Góc Bếp Ấm","Bếp Tươi Mỗi Ngày","Tiệm Cơm Thân Quen","Món Ngon Gần Nhà","Ngõ Ẩm Thực","Bếp Chọn Đi","Bữa Trưa 365","Quán Thương Nhớ","Tiệm Ăn Phố","Bếp Hẹn Hò","Góc Ăn Nhanh","Bếp Chiều Nay","Món Ngon Mỗi Ngày","Quán Bình Dân","Bếp Lạ","Tiệm Vị Nhà","Quán Hợp Gu","Bếp Ở Đây"];

/* Curated demo tags: broad ingredients, not verified recipes or allergy guarantees. */
const FOOD_META=[
["man","nuoc",["bo"]],["man","nuoc",["ga"]],["man","nuoc",["bo"]],["man","nuoc",["hai-san"]],
["man","nuoc",["heo"]],["man","nuoc",["heo"]],["man","nuoc",["hai-san"]],["man","kho",["heo"]],
["man","kho",["heo"]],["man","kho",["ga"]],["man","kho",["hai-san"]],["man","kho",["bo"]],
["man","kho",["heo"]],["chay","kho",["chay"]],["man","kho",["hai-san","heo"]],
["man","kho",["hai-san"]],["man","kho",["heo"]],["man","kho",["ga"]],
["chay","kho",["chay"]],["chay","nuoc",["chay"]],["chay","kho",["chay"]],
["chay","kho",["chay"]],["man","kho",["heo"]],["man","nuoc",["hai-san"]],
["chay","nuoc",["chay"]],["chay","kho",["chay"]],["man","kho",["ga"]],
["man","kho",["bo"]],["man","kho",["heo"]],["man","nuoc",["heo"]],
["man","nuoc",["hai-san"]],["man","kho",["hai-san"]],["man","kho",["hai-san"]],
["chay","kho",["chay"]],["man","nuoc",["hai-san"]],["man","kho",["heo"]]
];
DISHES.forEach((d,i)=>{
 const [diet,texture,ingredients]=FOOD_META[i];
 d.diet=diet;d.texture=texture;d.ingredients=ingredients;
});
const foodLabels={bo:"Thịt bò",heo:"Thịt heo",ga:"Thịt gà","hai-san":"Cá / hải sản"};

/* Wikimedia Commons: real licensed photos with source links, loaded only when visible.
   Search results are illustrations; if no suitable photo is available, keep the emoji. */
const photoCache=new Map();
const wikiEndpoint="https://commons.wikimedia.org/w/api.php";
function safeText(text){return String(text||"").replace(/<[^>]*>/g,"").replace(/&nbsp;/g," ").trim()}
function foodPicture(d,large=false){
 return '<div class="photo-box '+(large?"large":"")+'" data-food-photo="'+d.id+'"><span class="photo-emoji">'+d.emoji+'</span></div>';
}
function photoCredit(d){
 return '<div class="food-credit" data-food-credit="'+d.id+'">Ảnh minh họa: Wikimedia Commons (nếu có ảnh phù hợp)</div>';
}
let photoActive=0; const photoPending=[];
function schedulePhoto(task){return new Promise(resolve=>{photoPending.push({task,resolve});flushPhotos()})}
function flushPhotos(){while(photoActive<3&&photoPending.length){const job=photoPending.shift();photoActive++;Promise.resolve().then(job.task).then(job.resolve,()=>job.resolve(null)).finally(()=>{photoActive--;flushPhotos()})}}
function requestPhoto(d){
 if(photoCache.has(d.id))return Promise.resolve(photoCache.get(d.id));
 const task=async()=>{
   if(photoCache.has(d.id))return photoCache.get(d.id);
   try{
     const qs=new URLSearchParams({action:"query",format:"json",generator:"search",
       gsrsearch:d.imageQuery,gsrnamespace:"6",gsrlimit:"8",
       prop:"imageinfo",iiprop:"url|extmetadata",iiurlwidth:"640",origin:"*"});
     const ctrl=new AbortController();
     const timer=setTimeout(()=>ctrl.abort(),8500);
     let data;
     try{
       const response=await fetch(wikiEndpoint+"?"+qs.toString(),{signal:ctrl.signal,mode:"cors"});
       if(!response.ok)throw Error("Commons unavailable");
       data=await response.json();
     }finally{clearTimeout(timer)}
     const candidates=Object.values((data.query&&data.query.pages)||{}).filter(p=>{
       const info=p.imageinfo&&p.imageinfo[0];
       return info&&info.thumburl&&/\.(jpg|jpeg|png|webp)$/i.test(p.title)&&
         !/logo|flag|map|icon|drawing|diagram|illustration|restaurant|menu|poster/i.test(p.title);
     });
     candidates.sort((a,b)=>{
       const aa=a.title.toLowerCase(),bb=b.title.toLowerCase();
       const key=d.imageQuery.split(" ")[0].toLowerCase();
       return Number(bb.includes(key))-Number(aa.includes(key));
     });
     const normalized=q=>q.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9 ]/g," ").trim();
     const terms=normalized(d.imageQuery).split(/\s+/).filter(w=>w.length>2&&w!=="vietnamese"&&w!=="food");
     const best=candidates.map(p=>({p,score:terms.filter(t=>normalized(p.title).includes(t)).length})).sort((a,b)=>b.score-a.score)[0];
     const page=best&&best.score>=Math.min(2,terms.length)?best.p:null,info=page&&page.imageinfo[0];
     if(!info){photoCache.set(d.id,null);return null}
     const m=info.extmetadata||{};
     const photo={url:info.thumburl,page:info.descriptionurl||"https://commons.wikimedia.org/wiki/"+encodeURIComponent(page.title.replace(/ /g,"_")),
       license:safeText(m.LicenseShortName&&m.LicenseShortName.value)||"Xem giấy phép",
       artist:safeText(m.Artist&&m.Artist.value).slice(0,100)||"Tác giả trên Commons"};
     photoCache.set(d.id,photo);return photo;
   }catch{photoCache.set(d.id,null);return null}
 };
 // Limit concurrent metadata requests to protect Commons and mobile performance.
 return schedulePhoto(task);
}
function hydratePhotoNode(el){
 if(el.dataset.loaded)return;
 el.dataset.loaded="1";
 const d=DISHES[Number(el.dataset.foodPhoto)];if(!d)return;
 requestPhoto(d).then(photo=>{
   if(!photo||!el.isConnected)return;
   const img=document.createElement("img");img.src=photo.url;img.alt="Ảnh minh họa "+d.name+" từ Wikimedia Commons";img.loading="lazy";img.decoding="async";
   img.onerror=()=>{img.remove();el.classList.remove("has-photo")};
   el.appendChild(img);el.classList.add("has-photo");
   const credit=document.querySelector('[data-food-credit="'+d.id+'"]');
   if(credit){
     credit.textContent="Ảnh: "+photo.artist+" · "+photo.license+" · Wikimedia Commons · ";
     const link=document.createElement("a");link.href=photo.page;link.textContent="Xem nguồn";link.target="_blank";link.rel="noopener noreferrer";credit.appendChild(link);
   }
 });
}
function hydratePhotos(){
 const elements=[...document.querySelectorAll("[data-food-photo]")];
 if(!("IntersectionObserver" in window)){elements.slice(0,10).forEach(hydratePhotoNode);return}
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){hydratePhotoNode(entry.target);observer.unobserve(entry.target)}
 }),{rootMargin:"180px"});
 elements.forEach(el=>observer.observe(el));
}
function originPanel(d){
 return '<div class="card origin-panel"><div class="eyebrow">Câu chuyện ẩm thực</div>'+
 '<h3>🌏 Nguồn gốc & vùng miền</h3><p><b>'+d.region+'</b></p><p>'+d.origin+'</p>'+
 '<p class="muted">Thông tin giới thiệu tổng quan về món ăn, không phải kết luận về nơi phát minh đầu tiên.</p>'+
 photoCredit(d)+'</div>';
}
const STORAGE_KEY="chotdi-demo-v1";
const read=()=>{try{return JSON.parse(localStorage.getItem(STORAGE_KEY))||{}}catch{return {}}};
const stored=read();
const state={
 screen:"home",area:stored.area||"Quận 3",budget:stored.budget||70000,
 category:"all",diet:"all",texture:"all",heat:"all",avoid:[],
 distance:3,people:1,time:30,last:null,
 history:stored.history||[],favorites:stored.favorites||[],excluded:[],gps:"",notice:""
};
const money=n=>Number(n).toLocaleString("vi-VN")+"đ";
const save=()=>{try{localStorage.setItem(STORAGE_KEY,JSON.stringify({area:state.area,budget:state.budget,history:state.history,favorites:state.favorites}))}catch{}};
const app=document.querySelector("#app");
function nav(page){state.screen=page;render();window.scrollTo({top:0,behavior:"instant"})}
function set(k,v){state[k]=v;state.notice="";if(k==="area"||k==="budget")save();render()}
function reset(){Object.assign(state,{category:"all",diet:"all",texture:"all",heat:"all",avoid:[],budget:70000,excluded:[],notice:""});save();render()}
function toggleAvoid(key){state.avoid=state.avoid.includes(key)?state.avoid.filter(x=>x!==key):[...state.avoid,key];state.notice="";render()}
function pool(){
 return DISHES.filter(d=>
   d.price<=state.budget &&
   (state.category==="all"||d.category===state.category) &&
   (state.diet==="all"||d.diet===state.diet) &&
   (state.texture==="all"||d.texture===state.texture) &&
   (state.heat==="all"||(state.heat==="spicy"?d.spicy:!d.spicy)) &&
   !state.avoid.some(key=>d.ingredients.includes(key))
 );
}
function choose(){
 const available=pool();
 if(!available.length){state.notice="Không còn món phù hợp với toàn bộ điều kiện. Hãy bỏ bớt nguyên liệu cần tránh, đổi dạng món hoặc tăng ngân sách.";nav("filters");return}
 let fresh=available.filter(d=>!state.excluded.includes(d.id));
 if(!fresh.length){state.excluded=[];fresh=available}
 const item=fresh[Math.floor(Math.random()*fresh.length)];
 state.excluded.push(item.id);state.last=item.id;state.notice="";
 state.history.unshift({id:item.id,at:new Date().toISOString(),area:state.area});
 state.history=state.history.slice(0,30);save();nav("result");
}
function current(){return DISHES.find(d=>d.id===state.last)}
function fav(id){state.favorites=state.favorites.includes(id)?state.favorites.filter(x=>x!==id):[...state.favorites,id];save();render()}
function optionButtons(field,options){
 return '<div class="chips">'+options.map(([value,title])=>
 '<button type="button" class="chip '+(state[field]===value?"selected":"")+'" data-pref="'+field+'" data-value="'+value+'" aria-pressed="'+(state[field]===value)+'">'+title+'</button>'
 ).join("")+'</div>';
}
function filterPage(){
 const matched=pool().length;
 return '<section class="page">'+
 '<div class="eyebrow">Bước 1 / 2 • Cá nhân hóa nhu cầu</div>'+
 '<h2>Bạn muốn ăn <span class="accent">món như thế nào?</span></h2>'+
 '<p>Chọn càng đúng nhu cầu, CHỐT ĐI càng dễ đề xuất một món hợp ý.</p>'+
 (state.notice?'<div class="alert" role="status">'+state.notice+'</div>':'')+
 '<div class="form">'+
 '<label for="area">📍 Khu vực muốn ăn</label>'+
 '<select id="area">'+AREAS.map(a=>'<option '+(a===state.area?"selected":"")+'>'+a+'</option>').join("")+'</select>'+
 locationSummary()+
 '<div class="filter-block"><div class="filter-step">1 • Yêu cầu bắt buộc</div>'+
 '<label>🥬 Chế độ ăn</label>'+
 optionButtons("diet",[["all","Không giới hạn"],["man","Ăn mặn"],["chay","Ăn chay"]])+
 '<p class="muted">Chọn “Ăn chay” sẽ loại tất cả món gắn nhãn thịt/cá trong bộ dữ liệu demo.</p>'+
 '<label>🍜 Dạng món</label>'+
 optionButtons("texture",[["all","Bất kỳ"],["kho","Món khô"],["nuoc","Món nước"]])+
 '<label>🚫 Không muốn ăn nguyên liệu nào?</label>'+
 '<div class="chips">'+Object.entries(foodLabels).map(([key,label])=>
 '<button type="button" class="chip '+(state.avoid.includes(key)?"selected":"")+'" data-avoid="'+key+'" aria-pressed="'+state.avoid.includes(key)+'">'+(state.avoid.includes(key)?"✓ ":"")+label+'</button>'
 ).join("")+'</div>'+
 '<p class="muted">Đây là bộ lọc sở thích dựa trên nguyên liệu chính; không dùng để bảo đảm an toàn dị ứng hoặc ăn chay nghiêm ngặt.</p>'+
 '<label>🌶️ Mức độ cay</label>'+
 optionButtons("heat",[["all","Không quan trọng"],["no","Không cay"],["spicy","Có cay"]])+
 '<label for="budget">💰 Ngân sách tối đa/người: <span class="accent" id="budget-val">'+money(state.budget)+'</span></label>'+
 '<input aria-label="Ngân sách" id="budget" type="range" min="30000" max="200000" step="5000" value="'+state.budget+'"/>'+
 '<div class="row between muted"><span>30.000đ</span><span>200.000đ</span></div></div>'+
 '<div class="filter-block"><div class="filter-step">2 • Sở thích thêm</div>'+
 '<label>🍽️ Nhóm món</label>'+
 optionButtons("category",[["all","Tất cả"],["com","Cơm & bún"],["nuoc","Món nước"],["nhanh","Ăn nhanh"],["chay","Nhóm món chay"],["nhom","Ăn cùng nhóm"]])+
 '<label>📏 Bán kính tìm quán (tham khảo)</label>'+
 '<div class="segment">'+[1,3,5,10].map(n=>
 '<button type="button" data-distance="'+n+'" class="'+(state.distance===n?"selected":"")+'">'+n+' km</button>'
 ).join("")+'</div></div>'+
 '<div class="summary" aria-live="polite"><b>'+matched+' / '+DISHES.length+' món</b> phù hợp với các bộ lọc.'+
 (matched===0?'<p style="margin:6px 0 0">Hãy thử chọn “Bất kỳ”, “Không giới hạn” hoặc tăng ngân sách để có thêm món.</p>':'')+
 '<p style="margin:5px 0 0">Bán kính sẽ dùng khi tìm quán; chưa giới hạn kết quả Google Maps miễn phí.</p></div>'+
 '<button class="btn full" id="choose" '+(!matched?"disabled":"")+'>CHỐT MÓN NGAY →</button>'+
 '<button class="btn ghost full" style="margin-top:10px" id="reset-filters">Đặt lại bộ lọc</button>'+
 '</div></section>';
}
function home(){return '<section class="page"><div class="hero"><div class="eyebrow">Ứng dụng chốt món thông minh</div><div class="food-art">🍜🥢</div><h1>Hôm nay <span class="accent">ăn gì?</span><br/>Để <span class="accent">CHỐT ĐI!</span></h1><p>Chọn ngân sách, khẩu vị và khu vực. Một chạm để biết món gì hợp hôm nay.</p><button class="btn full" id="start">CHỐT NGAY →</button></div><div class="eyebrow">3 bước đơn giản</div><div class="grid"><div class="feature"><div class="emoji">📍</div><strong>1. Chọn nhu cầu</strong><p>Ngân sách, khu vực, sở thích</p></div><div class="feature"><div class="emoji">🎲</div><strong>2. Chốt một món</strong><p>Gợi ý nhanh, không đau đầu</p></div><div class="feature"><div class="emoji">🍽️</div><strong>3. Tìm quán</strong><p>Tham khảo quán và mở Maps</p></div><div class="feature"><div class="emoji">♡</div><strong>4. Lưu lại</strong><p>Giữ món ngon cho lần sau</p></div></div><div class="card tint"><h3>CHỐT ĐI khác gì tìm kiếm thông thường?</h3><p style="margin-bottom:0">Thay vì hiện hàng trăm lựa chọn, chúng tôi giúp bạn <b>ra một quyết định trước</b>, sau đó mới tìm địa điểm.</p></div><p class="fine">Bản demo sử dụng món ăn và quán mô phỏng phục vụ thử nghiệm ý tưởng.</p></section>'}
function result(){const d=current();if(!d)return home();return '<section class="page"><div class="eyebrow">Bước 2 / 2 • Đã chốt!</div><div class="result">'+foodPicture(d,true)+'<div class="mini">MÓN ĂN DÀNH CHO BẠN</div><h1>'+d.name+'</h1><p>'+d.description+'</p><div class="price">Khoảng '+money(d.price)+'</div><div class="info"><span class="tag">📍 '+state.area+'</span><span class="tag">💰 ≤ '+money(state.budget)+'</span>'+(d.spicy?'<span class="tag">🌶️ Có vị cay</span>':'')+'</div></div>'+originPanel(d)+'<div class="row"><button class="btn full" id="venues">TÌM QUÁN ĂN →</button><button class="icon-btn" id="heart" aria-label="Yêu thích">'+(state.favorites.includes(d.id)?'♥':'♡')+'</button></div><button class="btn ghost full" style="margin-top:10px" id="again">⟳ Không thích? CHỐT LẠI</button><button class="btn ghost full" style="margin-top:10px" id="edit">Sửa bộ lọc</button><p class="fine">Giá chỉ là ước tính minh họa, không phải giá bán được xác minh.</p></section>'}
function places(){
 const d=current();if(!d)return home();
 const l=coordinates();
 return '<section class="page"><div class="eyebrow">Tìm quán gần tôi · Bản miễn phí</div><h2>Tìm <span class="accent">'+d.name+'</span> gần bạn</h2>'+
 '<p>CHỐT ĐI chuyển bạn sang Google Maps để tìm quán thật. Bạn có thể thay đổi điểm xuất phát ngay bên dưới.</p>'+
 locationSummary()+
 '<div class="card"><div class="row between"><b>🔎 Từ khóa tìm kiếm</b><span class="muted">Google Maps</span></div><p style="margin:10px 0"><strong>'+d.name+'</strong> · khu vực bản đồ tại '+readableCoords(l)+'</p><p class="muted" style="margin:0">Điểm xuất phát: '+sourceLabel(l)+'</p></div>'+
 '<button class="btn full" id="maps">↗ XEM QUÁN THẬT TRÊN GOOGLE MAPS</button>'+
 '<button class="btn ghost full" style="margin-top:10px" id="back-result">← Quay lại món đã chốt</button>'+
 '<div class="alert" style="margin-top:20px">Google Maps tự quyết định kết quả và khoảng cách tìm kiếm. Bộ lọc bán kính '+state.distance+' km và giá '+money(state.budget)+' chưa thể ép chính xác trên Google Maps miễn phí. Hãy kiểm tra địa chỉ, giờ mở cửa và thực đơn của quán trước khi đi.</div></section>';
}
function collection(kind){const hs=kind==="history"?state.history.map(v=>({...v,d:DISHES.find(d=>d.id===v.id)})):state.favorites.map(id=>({id,d:DISHES.find(d=>d.id===id)}));const title=kind==="history"?"Lịch sử CHỐT":"Món yêu thích";return '<section class="page"><div class="eyebrow">Bộ sưu tập của bạn</div><h2>'+title+'</h2><p>'+(kind==="history"?"Các món bạn từng CHỐT, lưu trên thiết bị hiện tại.":"Danh sách món bạn đã thả tim, lưu trên thiết bị hiện tại.")+'</p>'+(hs.length?hs.filter(x=>x.d).map(v=>'<div class="card item"><span class="icon">'+v.d.emoji+'</span><div class="text"><h3>'+v.d.name+'</h3><p>'+money(v.d.price)+(v.at?' · '+new Date(v.at).toLocaleDateString("vi-VN"):'')+'</p></div><button class="btn sm ghost" data-view="'+v.d.id+'">Xem →</button></div>').join(""):'<div class="empty"><div class="big">🍜</div><h3>Chưa có món nào</h3><p>Hãy bắt đầu CHỐT một món để lưu vào đây.</p><button class="btn" id="start">CHỐT NGAY</button></div>')+'</section>'}
function explore(){return '<section class="page"><div class="eyebrow">Khám phá ẩm thực</div><h2>'+DISHES.length+' món ăn, <span class="accent">có gì thú vị?</span></h2><p>Chọn món để xem hình ảnh thực tế, nguồn gốc và câu chuyện ẩm thực. Ảnh minh họa lấy từ Wikimedia Commons, tùy độ sẵn có và kết nối mạng.</p><div class="grid food-grid">'+DISHES.map(d=>'<div class="feature food-card">'+foodPicture(d)+'<strong>'+d.name+'</strong><p class="muted">'+d.region+'</p><p style="margin-bottom:9px">'+money(d.price)+'</p><button class="btn ghost sm" data-view="'+d.id+'">Chi tiết →</button></div>').join("")+'</div></section>'}
function render(){app.innerHTML=state.screen==="home"?home():state.screen==="filters"?filterPage():state.screen==="result"?result():state.screen==="venues"?places():state.screen==="explore"?explore():state.screen==="history"?collection("history"):collection("favorites");document.querySelectorAll("[data-nav]").forEach(b=>b.classList.toggle("active",b.dataset.nav===state.screen||(state.screen==="filters"||state.screen==="result"||state.screen==="venues")&&b.dataset.nav==="home"));bind();hydratePhotos()}
function bind(){const on=(id,cb)=>{const el=document.getElementById(id);if(el)el.addEventListener("click",cb)};on("start",()=>nav("filters"));on("choose",choose);on("again",choose);on("edit",()=>nav("filters"));on("venues",()=>nav("venues"));on("back-result",()=>nav("result"));on("heart",()=>{if(current())fav(current().id)});on("reset-filters",reset);document.querySelectorAll("[data-pref]").forEach(b=>b.onclick=()=>set(b.dataset.pref,b.dataset.value));document.querySelectorAll("[data-avoid]").forEach(b=>b.onclick=()=>toggleAvoid(b.dataset.avoid));on("maps",openGoogleMaps);on("gps",gpsLocate);on("pick-map",openPicker);on("clear-location",()=>{liveLocation=null;state.gps="Đã quay về trung tâm khu vực được chọn (ước lượng).";render()});on("set-coords",setManualCoords);const area=document.getElementById("area");if(area)area.onchange=e=>set("area",e.target.value);const budget=document.getElementById("budget");if(budget)budget.oninput=e=>{state.budget=Number(e.target.value);document.querySelector("#budget-val").textContent=money(state.budget);const summary=document.querySelector(".summary");if(summary){const n=pool().length;summary.querySelector("b").textContent=n+" / "+DISHES.length+" món";document.getElementById("choose").disabled=n===0;}save()};document.querySelectorAll("[data-distance]").forEach(b=>b.onclick=()=>set("distance",Number(b.dataset.distance)));document.querySelectorAll("[data-view]").forEach(b=>b.onclick=()=>{state.last=Number(b.dataset.view);nav("result")})}
document.querySelectorAll("[data-nav]").forEach(b=>b.onclick=()=>nav(b.dataset.nav));document.querySelector("#logo").onclick=()=>nav("home");render();