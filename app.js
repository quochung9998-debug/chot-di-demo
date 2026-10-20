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
 // Google Maps search is free to open but controls its own results and search radius.
 const focus=loc.lat.toFixed(5)+","+loc.lng.toFixed(5);
 const keyword=d.name+" gần "+focus;
 window.open("https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(keyword),"_blank","noopener,noreferrer");
}

const VENUES=["Bếp Ngon Góc Phố","Quán Nhà Mình","Bếp Xinh Sài Gòn","Góc Ăn Trưa","Tiệm Ăn Vui Vẻ","Bếp Nhỏ Hôm Nay","Quán Ăn Quen","Góc Bếp Ấm","Bếp Tươi Mỗi Ngày","Tiệm Cơm Thân Quen","Món Ngon Gần Nhà","Ngõ Ẩm Thực","Bếp Chọn Đi","Bữa Trưa 365","Quán Thương Nhớ","Tiệm Ăn Phố","Bếp Hẹn Hò","Góc Ăn Nhanh","Bếp Chiều Nay","Món Ngon Mỗi Ngày","Quán Bình Dân","Bếp Lạ","Tiệm Vị Nhà","Quán Hợp Gu","Bếp Ở Đây"];
const STORAGE_KEY="chotdi-demo-v1";
const read=()=>{try{return JSON.parse(localStorage.getItem(STORAGE_KEY))||{}}catch{return {}}};
const stored=read();
const state={screen:"home",area:stored.area||"Quận 3",budget:stored.budget||70000,category:"all",spicy:false,veg:false,distance:3,people:1,time:30,last:null,history:stored.history||[],favorites:stored.favorites||[],excluded:[],gps:"",notice:""};
const money=n=>Number(n).toLocaleString("vi-VN")+"đ";
const save=()=>{try{localStorage.setItem(STORAGE_KEY,JSON.stringify({area:state.area,budget:state.budget,history:state.history,favorites:state.favorites}))}catch{}};
const app=document.querySelector("#app");
function nav(page){state.screen=page;render();window.scrollTo({top:0,behavior:"instant"})}
function set(k,v){state[k]=v;if(k==="area"||k==="budget")save();render()}
function reset(){state.category="all";state.spicy=false;state.veg=false;state.budget=70000;state.excluded=[];nav("filters")}
function pool(){return DISHES.filter(d=>d.price<=state.budget&&(state.category==="all"||d.category===state.category)&&(!state.veg||d.tags.includes("chay"))&&(!state.spicy||d.spicy))}
function choose(){let p=pool();if(!p.length){state.notice="Không tìm thấy món phù hợp. Hãy tăng ngân sách hoặc nới bộ lọc.";nav("filters");return}let fresh=p.filter(d=>!state.excluded.includes(d.id));if(!fresh.length){state.excluded=[];fresh=p}const item=fresh[Math.floor(Math.random()*fresh.length)];state.excluded.push(item.id);state.last=item.id;state.notice="";state.history.unshift({id:item.id,at:new Date().toISOString(),area:state.area});state.history=state.history.slice(0,30);save();nav("result")}
function current(){return DISHES.find(d=>d.id===state.last)}
function fav(id){state.favorites=state.favorites.includes(id)?state.favorites.filter(x=>x!==id):[...state.favorites,id];save();render()}
function filterPage(){return '<section class="page"><div class="eyebrow">Bước 1 / 2 • Chọn nhu cầu</div><h2>Hôm nay bạn muốn <span class="accent">ăn gì?</span></h2><p>Chọn nhanh vài thông tin. CHỐT ĐI sẽ gợi ý 1 món phù hợp thay vì để bạn tìm mãi.</p>'+ (state.notice?'<div class="alert">'+state.notice+'</div>':'')+'<div class="form"><label for="area">📍 Khu vực bạn muốn ăn</label><select id="area">'+AREAS.map(a=>'<option '+(a===state.area?'selected':'')+'>'+a+'</option>').join("")+'</select>'+locationSummary()+<label>💰 Ngân sách tối đa / người: <span class="accent" id="budget-val">'+money(state.budget)+'</span></label><input aria-label="Ngân sách" id="budget" type="range" min="30000" max="200000" step="5000" value="'+state.budget+'"/><div class="row between muted"><span>30.000đ</span><span>200.000đ</span></div><label>🍴 Loại món</label><div class="chips">'+[["all","Tất cả"],["com","Cơm & bún"],["nuoc","Món nước"],["nhanh","Ăn nhanh"],["chay","Ăn chay"],["nhom","Ăn cùng nhóm"]].map(([x,t])=>'<button class="chip '+(state.category===x?'selected':'')+'" data-category="'+x+'">'+t+'</button>').join("")+'</div><label>🥗 Chế độ ăn</label><div class="chips"><button class="chip '+(state.veg?'selected':'')+'" id="veg">Chỉ món chay</button><button class="chip '+(state.spicy?'selected':'')+'" id="spicy">Thích món cay</button></div><label>📏 Bán kính tìm quán (tùy chọn demo)</label><div class="segment">'+[1,3,5,10].map(n=>'<button data-distance="'+n+'" class="'+(state.distance===n?'selected':'')+'">'+n+' km</button>').join("")+'</div><div class="summary">Có <b>'+pool().length+' món</b> phù hợp bộ lọc. Bán kính và GPS chỉ mang tính minh họa; dữ liệu quán demo không được xác minh.</div><button class="btn full" id="choose">CHỐT MÓN NGAY →</button></div></section>'}
function home(){return '<section class="page"><div class="hero"><div class="eyebrow">Ứng dụng chốt món thông minh</div><div class="food-art">🍜🥢</div><h1>Hôm nay <span class="accent">ăn gì?</span><br/>Để <span class="accent">CHỐT ĐI!</span></h1><p>Chọn ngân sách, khẩu vị và khu vực. Một chạm để biết món gì hợp hôm nay.</p><button class="btn full" id="start">CHỐT NGAY →</button></div><div class="eyebrow">3 bước đơn giản</div><div class="grid"><div class="feature"><div class="emoji">📍</div><strong>1. Chọn nhu cầu</strong><p>Ngân sách, khu vực, sở thích</p></div><div class="feature"><div class="emoji">🎲</div><strong>2. Chốt một món</strong><p>Gợi ý nhanh, không đau đầu</p></div><div class="feature"><div class="emoji">🍽️</div><strong>3. Tìm quán</strong><p>Tham khảo quán và mở Maps</p></div><div class="feature"><div class="emoji">♡</div><strong>4. Lưu lại</strong><p>Giữ món ngon cho lần sau</p></div></div><div class="card tint"><h3>CHỐT ĐI khác gì tìm kiếm thông thường?</h3><p style="margin-bottom:0">Thay vì hiện hàng trăm lựa chọn, chúng tôi giúp bạn <b>ra một quyết định trước</b>, sau đó mới tìm địa điểm.</p></div><p class="fine">Bản demo sử dụng món ăn và quán mô phỏng phục vụ thử nghiệm ý tưởng.</p></section>'}
function result(){const d=current();if(!d)return home();return '<section class="page"><div class="eyebrow">Bước 2 / 2 • Đã chốt!</div><div class="result"><span class="big-emoji">'+d.emoji+'</span><div class="mini">MÓN ĂN DÀNH CHO BẠN</div><h1>'+d.name+'</h1><p>'+d.description+'</p><div class="price">Khoảng '+money(d.price)+'</div><div class="info"><span class="tag">📍 '+state.area+'</span><span class="tag">💰 ≤ '+money(state.budget)+'</span>'+(d.spicy?'<span class="tag">🌶️ Có vị cay</span>':'')+'</div></div><div class="row"><button class="btn full" id="venues">TÌM QUÁN ĂN →</button><button class="icon-btn" id="heart" aria-label="Yêu thích">'+(state.favorites.includes(d.id)?'♥':'♡')+'</button></div><button class="btn ghost full" style="margin-top:10px" id="again">⟳ Không thích? CHỐT LẠI</button><button class="btn ghost full" style="margin-top:10px" id="edit">Sửa bộ lọc</button><p class="fine">Giá chỉ là ước tính minh họa, không phải giá bán được xác minh.</p></section>'}
function places(){
 const d=current();if(!d)return home();
 const l=coordinates();
 return '<section class="page"><div class="eyebrow">Tìm quán gần tôi · Bản miễn phí</div><h2>Tìm <span class="accent">'+d.name+'</span> gần bạn</h2>'+
 '<p>CHỐT ĐI chuyển bạn sang Google Maps để tìm quán thật. Bạn có thể thay đổi điểm xuất phát ngay bên dưới.</p>'+
 locationSummary()+
 '<div class="card"><div class="row between"><b>🔎 Từ khóa tìm kiếm</b><span class="muted">Google Maps</span></div><p style="margin:10px 0"><strong>'+d.name+'</strong> · gần '+readableCoords(l)+'</p><p class="muted" style="margin:0">Điểm xuất phát: '+sourceLabel(l)+'</p></div>'+
 '<button class="btn full" id="maps">↗ XEM QUÁN THẬT TRÊN GOOGLE MAPS</button>'+
 '<button class="btn ghost full" style="margin-top:10px" id="back-result">← Quay lại món đã chốt</button>'+
 '<div class="alert" style="margin-top:20px">Google Maps tự quyết định kết quả và khoảng cách tìm kiếm. Bộ lọc bán kính '+state.distance+' km và giá '+money(state.budget)+' chưa thể ép chính xác trên Google Maps miễn phí. Hãy kiểm tra địa chỉ, giờ mở cửa và thực đơn của quán trước khi đi.</div></section>';
}
function collection(kind){const hs=kind==="history"?state.history.map(v=>({...v,d:DISHES.find(d=>d.id===v.id)})):state.favorites.map(id=>({id,d:DISHES.find(d=>d.id===id)}));const title=kind==="history"?"Lịch sử CHỐT":"Món yêu thích";return '<section class="page"><div class="eyebrow">Bộ sưu tập của bạn</div><h2>'+title+'</h2><p>'+(kind==="history"?"Các món bạn từng CHỐT, lưu trên thiết bị hiện tại.":"Danh sách món bạn đã thả tim, lưu trên thiết bị hiện tại.")+'</p>'+(hs.length?hs.filter(x=>x.d).map(v=>'<div class="card item"><span class="icon">'+v.d.emoji+'</span><div class="text"><h3>'+v.d.name+'</h3><p>'+money(v.d.price)+(v.at?' · '+new Date(v.at).toLocaleDateString("vi-VN"):'')+'</p></div><button class="btn sm ghost" data-view="'+v.d.id+'">Xem →</button></div>').join(""):'<div class="empty"><div class="big">🍜</div><h3>Chưa có món nào</h3><p>Hãy bắt đầu CHỐT một món để lưu vào đây.</p><button class="btn" id="start">CHỐT NGAY</button></div>')+'</section>'}
function explore(){return '<section class="page"><div class="eyebrow">Khám phá ẩm thực</div><h2>36 món ăn, <span class="accent">tha hồ CHỐT</span></h2><p>Khám phá danh sách món trong bản demo. Dữ liệu và giá chỉ dùng để mô phỏng.</p><div class="grid">'+DISHES.map(d=>'<div class="feature"><div class="emoji">'+d.emoji+'</div><strong>'+d.name+'</strong><p style="margin-bottom:9px">'+money(d.price)+'</p><button class="btn ghost sm" data-view="'+d.id+'">Xem món</button></div>').join("")+'</div></section>'}
function render(){app.innerHTML=state.screen==="home"?home():state.screen==="filters"?filterPage():state.screen==="result"?result():state.screen==="venues"?places():state.screen==="explore"?explore():state.screen==="history"?collection("history"):collection("favorites");document.querySelectorAll("[data-nav]").forEach(b=>b.classList.toggle("active",b.dataset.nav===state.screen||(state.screen==="filters"||state.screen==="result"||state.screen==="venues")&&b.dataset.nav==="home"));bind()}
function bind(){const on=(id,cb)=>{const el=document.getElementById(id);if(el)el.addEventListener("click",cb)};on("start",()=>nav("filters"));on("choose",choose);on("again",choose);on("edit",()=>nav("filters"));on("venues",()=>nav("venues"));on("back-result",()=>nav("result"));on("heart",()=>{if(current())fav(current().id)});on("veg",()=>set("veg",!state.veg));on("spicy",()=>set("spicy",!state.spicy));on("maps",openGoogleMaps);on("gps",gpsLocate);on("pick-map",openPicker);on("clear-location",()=>{liveLocation=null;state.gps="Đã quay về trung tâm khu vực được chọn (ước lượng).";render()});on("set-coords",setManualCoords);const area=document.getElementById("area");if(area)area.onchange=e=>set("area",e.target.value);const budget=document.getElementById("budget");if(budget)budget.oninput=e=>{state.budget=Number(e.target.value);document.querySelector("#budget-val").textContent=money(state.budget);save()};document.querySelectorAll("[data-category]").forEach(b=>b.onclick=()=>set("category",b.dataset.category));document.querySelectorAll("[data-distance]").forEach(b=>b.onclick=()=>set("distance",Number(b.dataset.distance)));document.querySelectorAll("[data-view]").forEach(b=>b.onclick=()=>{state.last=Number(b.dataset.view);nav("result")})}
document.querySelectorAll("[data-nav]").forEach(b=>b.onclick=()=>nav(b.dataset.nav));document.querySelector("#logo").onclick=()=>nav("home");render();