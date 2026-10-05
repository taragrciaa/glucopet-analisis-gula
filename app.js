function boot(){
const NIL=()=>({style:{},classList:{toggle(){},add(){},remove(){}},addEventListener(){},scrollIntoView(){},dataset:{},value:''});
const $=s=>document.querySelector(s)||NIL(),$$=s=>[...document.querySelectorAll(s)];
const ls={get:k=>{try{return localStorage.getItem(k)}catch(e){return null}},set:(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}}};
const load=k=>{try{return JSON.parse(ls.get(k))}catch(e){return null}};

/* ---------- Navigasi (floating pill) ---------- */
const TABS=[['faktapedia','Faktapedia'],['kalkulator','Kalkulator'],['lens','Gula Lens'],['kuliner','Kuliner'],['hydration','Hidrasi']];
const IC={faktapedia:'<path d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
kalkulator:'<rect x="5" y="2" width="14" height="20" rx="3"/><path d="M8 6h8M8 11h2M14 11h2M8 15h2M14 15h2M8 18h2M14 18h2"/>',
lens:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
kuliner:'<path d="M7 3v8a2 2 0 0 0 2 2v8M5 3v6M9 3v6M17 21V3c-2 1-3 4-3 8h3"/>',
hydration:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>'};
$('#bnav').innerHTML=TABS.map(([id,l])=>`<button class="nb" data-t="${id}" aria-label="${l}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${IC[id]}</svg>${l}</button>`).join('');
function go(id){if(!TABS.some(t=>t[0]===id))id='faktapedia';$$('.tab').forEach(t=>t.classList.toggle('active',t.id===id));$$('.nb').forEach(b=>b.classList.toggle('on',b.dataset.t===id));scrollTo({top:0,behavior:'smooth'});try{history.replaceState(null,'','#'+id)}catch(e){}}
document.addEventListener('click',e=>{const b=e.target.closest('[data-t]');if(b)go(b.dataset.t)});
go(location.hash.slice(1)||'faktapedia');
function toast(t){const d=document.createElement('div');d.className='toast';d.textContent=t;document.body.append(d);setTimeout(()=>d.remove(),1800)}

/* ---------- Faktapedia ---------- */
const art=(e,e2,a,b)=>`<div class="art" style="--a:${a};--b:${b}"><svg viewBox="0 0 200 110" aria-hidden="true"><circle cx="30" cy="25" r="22" fill="#fff" opacity=".3"/><circle cx="175" cy="88" r="30" fill="#fff" opacity=".25"/><path d="M0 95q50-30 100 0t100-10v25H0z" fill="#fff" opacity=".35"/><text x="100" y="80" font-size="70" text-anchor="middle">${e}</text><text x="36" y="52" font-size="26" text-anchor="middle">${e2}</text><text x="168" y="50" font-size="22" text-anchor="middle">${e2}</text><path d="M150 12l4 9 9 4-9 4-4 9-4-9-9-4 9-4z" fill="#fff"/></svg></div>`;
const DANGER=[['🧬','🩸','Diabetes Tipe-2 Usia Muda & Resistensi Insulin','Gula berlebih terus-menerus membuat sel makin kebal terhadap insulin. Gula darah menumpuk dan pankreas kelelahan, bahkan di usia 20-an.','#FF6B8B','#8A2BE2'],
['⚡','😵','Sugar Spike & Sugar Crash','Gula darah melonjak cepat lalu jatuh drastis: lemas, mengantuk, brain fog saat belajar atau kuliah, dan pengin ngemil manis lagi.','#fbbf24','#FF6B8B'],
['🧏‍♀️','🧴','Skin Aging & Jerawat','Glikasi: gula menempel pada kolagen dan elastin sehingga kulit kaku, kusam, dan keriput lebih cepat. Lonjakan insulin juga memicu jerawat.','#00F5D4','#8A2BE2'],
['🌸','🩺','PCOS & Ketidakseimbangan Hormon','Insulin tinggi mendorong hormon androgen naik pada remaja perempuan: haid tidak teratur, jerawat hormonal, dan bulu berlebih.','#f9a8d4','#a78bfa'],
['🫀','🍔','Non-Alcoholic Fatty Liver','Fruktosa berlebih diolah hati menjadi lemak. Lama-lama lemak menumpuk di hati, bahkan pada orang yang tampak kurus.','#fb923c','#FF6B8B'],
['🦷','🪥','Karies Gigi & Peradangan Sistemik','Bakteri mulut mengubah gula jadi asam yang mengikis email gigi. Peradangan gusi kronis juga dikaitkan dengan peradangan di seluruh tubuh.','#67e8f9','#00F5D4'],
['😴','🌙','Kualitas Tidur & Mood Swings','Naik-turun gula darah, terutama dari minuman manis malam hari, dikaitkan dengan tidur gelisah. Efek crash bikin mood gampang berubah dan cepat marah.','#c4b5fd','#8A2BE2']];
const SPIKE=`<div class="art" style="--a:#fde68a;--b:#fb7185"><svg viewBox="0 0 200 110" role="img" aria-label="Grafik sugar spike dan crash"><path d="M12 10v88h180" stroke="#fff" stroke-width="2" fill="none"/><path d="M14 78h178" stroke="#2A1B4D" stroke-dasharray="3 4" opacity=".5"/><path d="M14 78C40 78 50 18 75 20S110 102 132 98 165 80 192 80" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/><text x="56" y="14" font-size="9" font-weight="800" fill="#2A1B4D">SPIKE</text><text x="112" y="108" font-size="9" font-weight="800" fill="#2A1B4D">CRASH</text><ellipse cx="160" cy="26" rx="26" ry="9" fill="#fb923c" stroke="#fff" stroke-width="2" transform="rotate(-12 160 26)"/><g fill="#fff"><circle cx="150" cy="40" r="2.5"/><circle cx="160" cy="43" r="2.5"/><circle cx="170" cy="40" r="2.5"/></g><text x="124" y="58" font-size="8" font-weight="800" fill="#2A1B4D">Pankreas → insulin</text></svg></div>`;
const SKIN=`<div class="art" style="--a:#fecdd3;--b:#c4b5fd"><svg viewBox="0 0 200 110" role="img" aria-label="Lapisan kulit: kolagen dan elastin rusak akibat glikasi"><rect width="200" height="26" fill="#fda4af"/><rect y="26" width="200" height="84" fill="#fde7d9"/><circle cx="46" cy="24" r="9" fill="#e11d48"/><circle cx="46" cy="20" r="3" fill="#fff"/><path d="M0 52q25-14 50 0t50 0 50 0 50 0" stroke="#fff" stroke-width="4" fill="none"/><path d="M0 72q25 14 50 0t50 0 50 0 50 0" stroke="#7c3aed" stroke-width="3" fill="none"/><path d="M100 72l12-8m10 8l10 6m10-4l16 8" stroke="#e11d48" stroke-width="3" stroke-dasharray="3 4"/><g fill="#fbbf24" stroke="#b45309"><circle cx="40" cy="52" r="6"/><circle cx="110" cy="52" r="6"/><circle cx="160" cy="72" r="6"/></g><text x="80" y="16" font-size="9" fill="#fff" font-weight="800">Epidermis + jerawat</text><text x="6" y="102" font-size="8" fill="#2A1B4D" font-weight="800">Kolagen (putih) &amp; elastin (ungu) rusak oleh gula</text></svg></div>`;
const LIVER=`<div class="art" style="--a:#fed7aa;--b:#fda4af"><svg viewBox="0 0 200 110" role="img" aria-label="Hati menumpuk lemak akibat fruktosa"><path d="M34 62C34 32 84 24 124 32c40 8 58 26 48 46-8 16-40 20-70 16S34 82 34 62z" fill="#be123c"/><g fill="#fde047" stroke="#ca8a04"><circle cx="70" cy="56" r="7"/><circle cx="100" cy="46" r="9"/><circle cx="128" cy="60" r="7"/><circle cx="90" cy="72" r="6"/><circle cx="148" cy="48" r="5"/><circle cx="112" cy="76" r="5"/></g><rect x="6" y="6" width="24" height="30" rx="5" fill="#fff"/><text x="8" y="24" font-size="7" font-weight="800" fill="#2A1B4D">HFCS</text><path d="M30 24l22 12" stroke="#fff" stroke-width="3" stroke-dasharray="4 3"/><text x="40" y="106" font-size="9" font-weight="800" fill="#2A1B4D">Fruktosa → lemak menumpuk di hati</text></svg></div>`;
const CUSTOM={1:SPIKE,2:SKIN,4:LIVER};
$('#danger').innerHTML=DANGER.map(([e,e2,t,p,a,b],i)=>`<article class="card dc" tabindex="0">${CUSTOM[i]||art(e,e2,a,b)}<h3>${t}</h3><p>${p}</p></article>`).join('');
const ALIAS=[['Sukrosa (Sucrose)','Gula meja: gabungan glukosa dan fruktosa.','Gula pasir, minuman manis, kue, permen.','Cepat menaikkan gula darah; berlebihan memicu karies gigi dan kenaikan berat badan.'],
['HFCS','Sirup jagung fruktosa tinggi: pemanis cair dari pati jagung.','Soda, minuman kemasan, saus, roti kemasan.','Fruktosa berlebih diolah hati jadi lemak, dikaitkan dengan fatty liver dan resistensi insulin.'],
['Maltodextrin','Karbohidrat olahan dari pati. Rasanya tidak terlalu manis tapi indeks glikemiknya tinggi.','Minuman bubuk, kopi sachet, snack, suplemen.','Gula darah naik cepat walau kamu tidak merasa makan yang manis.'],
['Dextrose','Nama lain glukosa dari jagung.','Permen, minuman olahraga, roti, sosis olahan.','Cepat diserap sehingga memicu sugar spike lalu crash.'],
['Agave Nectar','Sirup dari tanaman agave dengan kandungan fruktosa tinggi.','Minuman "sehat", granola, kopi premium.','Tetap gula tambahan; fruktosanya membebani hati jika berlebihan.'],
['Evaporated Cane Juice','Sari tebu yang diuapkan, pada dasarnya gula tebu kurang olahan.','Yogurt, granola bar, minuman berlabel natural.','Dihitung gula tambahan, sama seperti gula pasir.'],
['Glukosa','Gula sederhana, sumber energi utama tubuh.','Sirup, permen, minuman isotonik.','Diserap sangat cepat: lonjakan gula darah lalu lemas.'],
['Fruktosa','Gula buah. Kalau ditambahkan terpisah, dampaknya berbeda dari buah utuh yang berserat.','Soda, minuman kemasan, selai.','Diproses di hati; berlebihan berubah menjadi lemak hati.'],
['Sirup Beras','Pemanis dari beras yang difermentasi.','Snack bar "alami", sereal, camilan sehat.','Indeks glikemik tinggi, gula darah naik cepat.'],
['Molase','Sirup kental hitam sisa pembuatan gula tebu.','Kue jahe, saus BBQ, gula merah.','Ada sedikit mineral, tapi tetap gula tambahan.'],
['Madu','Pemanis alami yang sekitar 80% terdiri dari gula.','Teh madu, saus, granola, minuman kekinian.','Kalau ditambahkan ke makanan atau minuman, tetap dihitung gula tambahan.'],
['Konsentrat Jus Buah','Jus yang airnya diuapkan sehingga gulanya pekat.','Jus kemasan, permen buah, yogurt rasa buah.','Serat hilang, gula terkonsentrasi dan cepat diserap.']];
$('#alias').innerHTML=ALIAS.map((a,i)=>`<button data-i="${i}">${a[0]}</button>`).join('');
$('#alias').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const a=ALIAS[b.dataset.i];$('#mb').innerHTML=`<h3 class="gt">${a[0]}</h3><p><b>📖 Pengertian:</b> ${a[1]}</p><p><b>🛒 Biasa ditemukan di:</b> ${a[2]}</p><p><b>🧍 Efek pada tubuh:</b> ${a[3]}</p><small class="muted">Aturan cepat: kalau bahan ini ada di 3 urutan pertama komposisi, produknya tinggi gula.</small>`;$('#modal').hidden=false});
const MI=['<path d="M18 22h28v32a6 6 0 0 1-6 6H24a6 6 0 0 1-6-6z" fill="#fbbf24"/><rect x="16" y="14" width="32" height="10" rx="4" fill="#b45309"/><path d="M26 34h12v10a6 6 0 0 1-12 0z" fill="#fff" opacity=".6"/>',
'<rect x="14" y="10" width="36" height="44" rx="5" fill="#a78bfa"/><path d="M14 18h36" stroke="#fff" stroke-dasharray="3 3"/><text x="32" y="43" font-size="24" text-anchor="middle" fill="#fff" font-weight="800">0</text>',
'<circle cx="32" cy="38" r="18" fill="#f43f5e"/><path d="M32 20c0-8 6-10 10-10 0 6-4 10-10 10z" fill="#22c55e"/><path d="M32 20v-6" stroke="#7c2d12" stroke-width="3"/>',
'<path d="M12 52C12 24 30 10 54 10c0 26-14 44-42 42z" fill="#22c55e"/><path d="M12 52L44 22" stroke="#fff" stroke-width="3"/>',
'<path d="M16 22h32v34H16z" fill="#fb923c"/><path d="M16 22l8-10h16l8 10z" fill="#fdba74"/><circle cx="32" cy="40" r="8" fill="#fff"/><path d="M42 8l-6 14" stroke="#e11d48" stroke-width="3"/>',
'<path d="M32 8C32 8 14 30 14 42a18 18 0 0 0 36 0C50 30 32 8 32 8z" fill="#e11d48"/><path d="M24 44a8 8 0 0 0 8 8" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>',
'<path d="M44 8A24 24 0 1 0 56 44 20 20 0 0 1 44 8z" fill="#fde047"/><circle cx="48" cy="40" r="2" fill="#fff"/>',
'<path d="M12 22h34v18a14 14 0 0 1-14 14h-6A14 14 0 0 1 12 40z" fill="#a16207"/><path d="M46 26h4a6 6 0 0 1 0 14h-4" stroke="#a16207" stroke-width="4" fill="none"/><path d="M22 6q4 6 0 10m10-10q4 6 0 10" stroke="#8A2BE2" stroke-width="3" fill="none" stroke-linecap="round"/>',
'<circle cx="32" cy="36" r="22" fill="#fcd34d"/><circle cx="24" cy="32" r="3" fill="#2A1B4D"/><circle cx="40" cy="32" r="3" fill="#2A1B4D"/><path d="M22 44q10 10 20 0" stroke="#2A1B4D" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M10 10l6 8M54 10l-6 8M32 4v8" stroke="#f43f5e" stroke-width="3" stroke-linecap="round"/>',
'<g fill="#8A2BE2"><rect x="6" y="24" width="8" height="16" rx="2"/><rect x="14" y="18" width="8" height="28" rx="2"/><rect x="42" y="18" width="8" height="28" rx="2"/><rect x="50" y="24" width="8" height="16" rx="2"/></g><rect x="22" y="30" width="20" height="4" fill="#2A1B4D"/>'];
const MYTHS=[['Gula Aren, Madu & Gula Jawa','Bebas dikonsumsi tanpa batas karena alami.','Kalori dan kadar glukosanya tetap dihitung sebagai gula tambahan (added sugar) yang dapat menaikkan gula darah.'],
['Pemanis Buatan Zero Calorie','100% sehat tanpa efek samping.','Konsumsi berlebih dapat memengaruhi sensitivitas reseptor rasa manis dan merusak mikrobioma usus.'],
['Buah Segar vs Boba','Buah segar sama bahayanya dengan minuman boba manis.','Buah utuh kaya serat (fiber) alami yang melambatkan penyerapan gula darah.'],
['Stevia','Stevia sepenuhnya sintetis dan berbahaya bagi tubuh.','Stevia adalah pemanis alami berbasis ekstrak daun tanaman, relatif aman dan bebas kalori jika digunakan bijak.'],
['Jus Buah Kemasan','Sama sehatnya dengan makan buah potong utuh.','Jus kemasan sering kehilangan serat utuh dan ditambahi sirup fruktosa cair pekat.'],
['Diabetes Hanya untuk Lansia','Diabetes hanya menyerang lansia atau orang tua.','Kasus diabetes tipe-2 pada remaja Gen Z melonjak akibat gaya hidup sedenter dan kebiasaan minuman kekinian.'],
['Satu-satunya Pemicu Diabetes','Makanan manis adalah SATU-SATUNYA pemicu diabetes.','Karbohidrat olahan berlebih, kurang tidur (begadang), dan stres kronis juga memicu resistensi insulin.'],
['Minuman Panas vs Dingin','Cuma minuman dingin yang tinggi kandungan gulanya.','Kopi panas berbahan flavoured syrup atau krimer kental manis bisa punya kadar gula yang sama tingginya.'],
['Gula Bikin Hiperaktif','Makanan manis langsung membuat anak atau remaja hiperaktif.','Penelitian medis menunjukkan fenomena ini lebih sering dipicu suasana dan lingkungan sosial, bukan molekul gula secara langsung.'],
['Rajin Olahraga = Bebas Boba','Kalau rutin olahraga, boleh minum boba atau manis sebanyak-banyaknya.','Olahraga membakar kalori, namun sugar spike tetap dapat memicu resistensi insulin dan peradangan internal.']];
$('#myths').innerHTML=MYTHS.map(([t,m,f],i)=>`<button class="card flip" aria-label="${t}"><div class="fi"><div class="fa"><svg class="mi" viewBox="0 0 64 64" aria-hidden="true">${MI[i]}</svg><b>${t}</b><small>❌ Mitos: ${m}</small></div><div class="fb"><b>✅ Fakta</b>${f}</div></div></button>`).join('');
$('#myths').addEventListener('click',e=>{const f=e.target.closest('.flip');if(f)f.classList.toggle('f')});
const CRAVING=[['🧊','Metode Delay 15 Menit','Saat ingin boba atau minuman manis, alihkan perhatian 15 menit: minum air dingin atau jalan santai. Sebagian besar craving reda dengan sendirinya.'],
['🍫','Trik Dark Chocolate (>70%)','Ambil 1 potong kecil dark chocolate murni. Rasa pahit-manisnya memuaskan dorongan dopamin tanpa sugar spike besar.'],
['🍋','Infused Water Citrus & Mint','Sensasi segar asam dari lemon atau daun mint membantu mengecoh lidah yang haus rasa manis.'],
['🥜','Kombinasi Protein + Serat','Kalau lapar manis, makan pisang atau apel bersama segenggam almond atau peanut butter murni supaya kenyang lebih lama.'],
['😴','Cek Tidur & Hidrasi','Craving manis di siang atau sore sering jadi sinyal kurang air putih atau kurang tidur semalam. Minum dulu, tidur cukup.'],
['🍵','Teh Kayu Manis (Cinnamon)','Seduhan teh kayu manis hangat dapat membantu meredakan rasa ingin ngemil manis. Tanpa gula tambahan ya.'],
['📉','Turunkan Bertahap','Kurangi gula sekitar 25% tiap minggu (100% → 75% → 50% → 25%). Lidah menyesuaikan pelan-pelan, jadi tidak terasa menyiksa.'],
['🍌','Nice Cream Pisang Beku','Blender pisang beku sampai creamy. Teksturnya mirip es krim, manisnya alami, tanpa gula tambahan.'],
['🛒','Atur Lingkungan','Jangan stok minuman manis di kamar atau kulkas. Siapkan air putih dan buah di tempat yang paling mudah dijangkau.']];
$('#craving').innerHTML=CRAVING.map(([e,t,d])=>`<button class="card flip" aria-label="${t}"><div class="fi"><div class="fa"><span class="emo">${e}</span><b>${t}</b><small>Tap untuk lihat triknya</small></div><div class="fb"><b>${t}</b>${d}</div></div></button>`).join('');
$('#craving').addEventListener('click',e=>{const f=e.target.closest('.flip');if(f)f.classList.toggle('f')});
$('#hacks').innerHTML=[['🧋','Boba: pilih less sugar 25%'],['🥤','Soda → air soda + jeruk nipis'],['🍌','Wafer → pisang + selai kacang'],['☕','Kopi susu → tanpa gula tambahan']].map(([e,t])=>`<div class="card hk"><span>${e}</span>${t}</div>`).join('');

/* ---------- Helper ---------- */
const lvl=(g,k=0)=>g>=25?['r','Tinggi Gula','🔴']:g>=10?['y','Sedang','🟡']:k>=300?['y','Tinggi Kalori','🟡']:['g','Aman','🟢'];
const sdt=g=>String(+(g/4).toFixed(1));
const RATES=[['🏃‍♂️','Joging / Lari',10],['🚶‍♀️','Jalan cepat',4.5],['🚴‍♂️','Gowes sepeda',7.5],['🧘‍♀️','Skipping / Workout',12]];
const burnHTML=k=>k<=0?'<p>🎉 Tidak ada kalori yang perlu dibakar.</p>':`<div class="burn">${RATES.map(([i,n,r])=>`<div class="b"><big>${i}</big><b>${Math.max(5,Math.round(k/r))} menit</b><small>${n}</small></div>`).join('')}</div><small class="muted">Estimasi untuk berat badan ±60 kg.</small>`;
function resultHTML(n,g,k,note,rk){const[c,l,d]=rk||lvl(g,k);return`<div class="card pad"><h3>${n}</h3><span class="badge ${c}">${d} ${l}</span><div class="nums"><div><b class="gt">${g} g</b>gula</div><div><b class="gt">${sdt(g)} 🍵</b>sdt</div><div><b class="gt">${k}</b>kkal</div></div><p>${g>=25?'Satu porsi ini sudah melewati separuh batas aman remaja (25 g).':g>=10?'Boleh sesekali, imbangi dengan gerak.':k>=300?'Gulanya rendah, tapi kalori dan garamnya tinggi. Jaga porsi.':'Relatif aman, tetap jaga porsi.'}</p><h4>🔥 Cara membakarnya</h4>${burnHTML(k)}<p>${g||k?`💧 Disarankan minum +${Math.min(4,Math.max(1,Math.ceil(g/12)))} gelas air putih ekstra untuk bantu metabolisme.`:'💧 Pilihan terbaik! Pertahankan.'}</p>${g||k?`<button class="btn add" data-n="${n}" data-g="${g}" data-k="${k}">+ Catat ke Konsumsi Gula Hari Ini</button>`:'<button class="btn alt wadd">+ Catat Air Putih 250 ml</button>'}${note?`<p><small class="muted">${note}</small></p>`:''}</div>`}

/* ---------- Daily Sugar Tracker ---------- */
const day=new Date().toDateString();
let LOG=load('gg_log');if(!LOG||LOG.d!==day||!Array.isArray(LOG.items))LOG={d:day,items:[]};LOG.items=LOG.items.filter(i=>i&&isFinite(i.g)&&isFinite(i.k));
let LIM=+ls.get('gg_lim')||50;
function renderTrk(){const g=Math.round(LOG.items.reduce((s,i)=>s+i.g,0)),k=LOG.items.reduce((s,i)=>s+i.k,0),p=Math.min(100,Math.round(g/LIM*100)),c=g>LIM?'r':g>LIM*.7?'y':'g';
$('#trk').innerHTML=`<h2 class="gt">📊 Gula Tracker Harian</h2><div class="card pad"><div class="nums"><div><b class="gt">${g} g</b>terkonsumsi</div><div><b class="gt">${sdt(g)} 🍵</b>sdt</div><div><b class="gt">${LIM} g</b>batas aman</div></div><div class="bar"><i class="${c}" style="width:${p}%"></i></div><p>${g>LIM?'🔴 Melewati batas! Imbangi dengan gerak dan air putih.':g>LIM*.7?'🟡 Hampir batas. Pilih yang tanpa gula dulu.':'🟢 Masih aman. Lanjut hari ini!'} (${k} kkal tercatat)</p>${LOG.items.length?`<ul class="log">${LOG.items.map((i,x)=>`<li><span>${i.n}</span><b>${i.g} g</b><button class="del" data-x="${x}" aria-label="Hapus ${i.n}">✕</button></li>`).join('')}</ul><button class="btn alt" id="rs">Reset hari ini</button>`:'<p class="muted">Belum ada catatan. Tekan "+ Catat" di Kuliner atau Gula Lens.</p>'}</div>`;
$('#chip').textContent=`${g}/${LIM} g`;$('#hs').textContent=`Hari ini kamu mencatat ${g} g dari batas ${LIM} g.`;ls.set('gg_log',JSON.stringify(LOG));renderDash()}
function renderDash(){const g=Math.round(LOG.items.reduce((s,i)=>s+i.g,0)),k=LOG.items.reduce((s,i)=>s+i.k,0),t=target(),wp=Math.min(100,Math.round(H.ml/t*100));
$('#dash').innerHTML=`<h2 class="gt">📈 Dashboard Total Harian</h2><div class="card pad"><div class="nums"><div><b class="gt">${H.ml} ml</b>air putih (${wp}%)</div><div><b class="gt">${g} g</b>gula</div><div><b class="gt">${k}</b>kalori</div></div>${g>LIM?`<h4>⚠️ Asupan berlebih. Burn Solution-mu:</h4>${burnHTML(k)}<p>${wp<100?'💧 Lengkapi air putihmu sampai '+t+' ml supaya metabolisme lancar.':'💧 Air putihmu sudah cukup, pertahankan!'}</p>`:`<p>${k?'✅ Gulamu masih di bawah batas. Burn Solution muncul otomatis kalau melewati '+LIM+' g.':'Belum ada konsumsi tercatat hari ini.'}</p>`}</div>`}
function add(n,g,k){LOG.items.push({n,g:+g,k:+k});renderTrk();toast('✓ Tercatat: '+n)}
$('#trk').addEventListener('click',e=>{const d=e.target.closest('.del');if(d){LOG.items.splice(+d.dataset.x,1
