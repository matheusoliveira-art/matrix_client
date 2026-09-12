  function installMatrixMouseTrail() {
    'use strict';

    // Emoji List
    const ALL_EMOJI = [
        '😀','😃','😄','😁','😆','😅','😂','🤣','😊','😇','🙂','🙃','😉','😌','😍','🥰','😘','😗','😙','😚','😋','😛','😝','😜','🤪','🤨','🧐','🤓','😎','🤩','🥳','😏','😒','😞','😔','😟','😕','🙁','☹️','😣','😖','😫','😩','🥺','😢','😭','😤','😠','😡','🤬','🤯','😳','🥵','🥶','😱','😨','😰','😥','😓','🤗','🤔','🤭','🤫','🤥','😶','😐','😑','😬','🙄','😯','😦','😧','😮','😲','🥱','😴','🤤','😪','😵','🤐','🥴','🤢','🤮','🤧','😷','🤒','🤕','🤑','🤠','😈','👿','👹','👺','🤡','💩','👻','💀','☠️','👽','👾','🤖','🎃','😺','😸','😹','😻','😼','😽','🙀','😿','😾','👶','🧒','👦','👧','🧑','👱','👨','🧔','👩','🧓','👴','👵','🙍','🙎','🙅','🙆','💁','🙋','🧏','🙌','🙇','🧎','🤏','👏','🤲','🫶','🫸','🫷','💪','🦾','🦿','🦵','🦶','👂','🦻','👃','🧠','🫀','🫁','🦷','🦴','👀','👁️','👅','👄','🫦','🐶','🐱','🐭','🐹','🐰','🐻','🐼','🐨','🐯','🦁','🐮','🐷','🐸','🐵','🐔','🐧','🐦','🐤','🐣','🐥','🐺','🦊','🦝','🐗','🐴','🦄','🐝','🐛','🦋','🐌','🐞','🐜','🦟','🦗','🕷️','🕸️','🦂','🐢','🐍','🦎','🦖','🦕','🐙','🦑','🦐','🦞','🦀','🐡','🐠','🐟','🐬','🐳','🐋','🦈','🐊','🐅','🐆','🦓','🦍','🦧','🐘','🦛','🦏','🐪','🐫','🦒','🦘','🐃','🐂','🐄','🐖','🐏','🐑','🐐','🦌','🐕','🐩','🦮','🐕‍🦺','🐈','🐈‍⬛','🐓','🦃','🦅','🕊️','🦢','🦩','🦚','🦜','🐦‍⬛','🐦‍🔥','🐲','🐉','🐚','🦠','🍇','🍈','🍉','🍊','🍋','🍌','🍍','🥭','🍎','🍏','🍐','🍑','🍒','🍓','🫐','🥝','🍅','🫒','🥥','🥑','🍆','🥔','🥕','🌽','🌶️','🫑','🥒','🥬','🥦','🧄','🧅','🍄','🥜','🫘','🌰','🍞','🥐','🥖','🫓','🥨','🥯','🥞','🧇','🧀','🍖','🍗','🥩','🥓','🍔','🍟','🍕','🌭','🥪','🌮','🌯','🫔','🥙','🧆','🥚','🍳','🥘','🍲','🫕','🥣','🥗','🍿','🧈','🧂','🥫','🍱','🍘','🍙','🍚','🍛','🍜','🍝','🍠','🍢','🍣','🍤','🍥','🥮','🍡','🥟','🥠','🥡','🦪','🍦','🍧','🍨','🍩','🍪','🎂','🍰','🧁','🥧','🍫','🍬','🍭','🍮','🍯','🍼','🥛','☕','🫖','🍵','🍶','🍾','🍷','🍸','🍹','🍺','🍻','🥂','🥃','🫗','🥤','🧋','🧃','🧉','🍽️','🍴','🥄','🔪','🫙','🏺','🚗','🚕','🚙','🚌','🚎','🏎️','🚓','🚑','🚒','🚐','🚚','🚛','🚜','🏍️','🛵','🛺','🚲','🛴','🛹','🚏','🛣️','🛤️','⛽','🚨','🚥','🚦','🛑','🚧','⚓','⛵','🛶','🚤','🛳️','⛴️','🛥️','🚢','✈️','🛩️','🛫','🛬','🪂','💺','🚁','🚟','🚠','🚡','🛰️','🚀','🛸','🏠','🏡','🏘️','🏚️','🏗️','🏭','🏢','🏬','🏣','🏤','🏥','🏦','🏨','🏪','🏫','🏩','💒','🏛️','⛪','🕌','🕍','🛕','🕋','⛩️','🗾','🗼','🗽','🗿','🌁','🌃','🌄','🌅','🌆','🌇','🌉','🌌','🌊','🏞️','🏜️','🏖️','🏝️','🏔️','⛰️','🌋','🏕️','🏟️','⚽','🏀','🏈','⚾','🥎','🎾','🏐','🏉','🥏','🎱','🪀','🏓','🏸','🏒','🏑','🥍','🏏','🪃','🥅','⛳','🪁','🏹','🎣','🤿','🩱','🎽','🥋','🥊','🩳','🤼','🤸','⛸️','🥌','🛷','🛼','🎿','⛷️','🏂','🪂','🏋️','🤺','🤾','🏌️','🏇','🧘','🏄','🏊','🤽','🚣','🧗','🚵','🚴','🎮','🕹️','🎲','♟️','🃏','🀄','🎴','🎯','🎳','🎰','🎨','🖌️','🖍️','🎭','🎤','🎧','🎼','🎹','🥁','🎷','🎺','🎸','🪕','🎻','🎬','🎞️','🎥','🎦','⌚','📱','📲','💻','⌨️','🖥️','🖨️','🖱️','🖲️','🗜️','💽','💾','💿','📀','📼','📷','📸','📹','📽️','📞','☎️','📟','📠','📺','📻','🎙️','🎚️','🎛️','🧭','⏰','🕰️','⌛','⏳','📡','🔋','🪫','🔌','💡','🔦','🕯️','🪔','🧯','🧰','🪛','🔩','⚙️','🪚','🔨','🪓','⛏️','🔧','⚒️','🧲','🛞','🔗','⛓️','🪝','🪥','🪒','🧹','🧺','🧻','🧼','🪣','🧴','🪞','🪟','🛏️','🪑','🛋️','🪜','🚪','🛎️','🧳','🛍️','🛒','🎁','🎀','🎈','🎉','🎊','🎋','🎌','🎍','🎎','🎏','🎐','🎑','🎃','🎄','🧧','🧨','🪅','🪄','🎩','👑','👒','🎓','🧢','⛑️','💄','💍','💎','👜','👛','🩴','👡','👢','👞','👟','🥾','🥿','🧦','🧤','🧣','🧥','👖','👕','👚','👗','👘','👙','🩲','🧴','🧷','📿','🔮','⚱️','🧪','🧫','🩻','🧬','🔭','🔬','💉','💊','🩹','🩺','🔫','💣','🧨','🗡️','⚔️','🛡️','❤️','🧡','💛','💚','💙','💜','🖤','🤍','🤎','💔','❣️','💕','💞','💓','💗','💖','💘','💝','💟','☮️','✝️','☪️','🕉️','☸️','✡️','🔯','🕎','☯️','☦️','🛐','⛎','♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓','🆔','⚛️','🉑','☢️','☣️','📴','📳','🈶','🈚','🈸','🈺','🈷️','✴️','🆚','💮','🉐','㊙️','㊗️','🈴','🈵','🈹','🈲','🅰️','🅱️','🆎','🆑','🅾️','🆘','❌','⭕','🛑','⛔','📛','🚫','💯','💢','♨️','🚷','🚯','🚳','🚱','🔞','📵','🚭','❗','❕','❓','❔','‼️','⁉️','🔅','🔆','〽️','⚠️','🚸','🔱','⚜️','🔰','♻️','✅','🈯','💹','❇️','✳️','❎','🌐','💠','Ⓜ️','🌀','💤','🏧','🚾','♿','🅿️','🛗','🈳','🈂️','🛂','🛃','🛄','🛅','🚹','🚺','🚼','⚧','🚻','🚮','🎦','📶','🈁','🔣','ℹ️','🔤','🔡','🔠','🆖','🆗','🆙','🆒','🆕','🆓','0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟','🔢','#️⃣','*️⃣','⏏️','▶️','⏸','⏯','⏹','⏺','⏭','⏮','⏩','⏪','⏫','⏬','◀️','🔼','🔽','➡️','⬅️','⬆️','⬇️','↗️','↘️','↙️','↖️','↕️','↔️','↩️','↪️','⤴️','⤵️','🔀','🔁','🔂','🔄','🔃','🎵','🎶','➕','➖','➗','✖️','♾','💲','💱','™️','©️','®️','〰️','➰','➿','🔚','🔙','🔛','🔝','🔜','✔️','☑️','🔘','🔴','🟠','🟡','🟢','🔵','🟣','⚫','⚪','🟤','🔺','🔻','🔸','🔹','🔶','🔷','🔳','🔲','▪️','▫️','◾','◽','◼️','◻️','🟥','🟧','🟨','🟩','🟦','🟪','⬛','⬜','🟫','🔈','🔇','🔉','🔊','🔔','🔕','📣','📢','👁‍🗨','💬','💭','🗯','🕐','🕑','🕒','🕓','🕔','🕕','🕖','🕗','🕘','🕙','🕚','🕛'
    ];

    // Settings
    let on = false, len = 15, sz = 6, clr = '#0ff', glow = true, fade = 0.95, mode = 'fade';
    let grad = false, g1 = '#0ff', g2 = '#f0f', rainbow = false, shape = 'circle';
    let emOn = false, emList = ['✨','💫','🌟','🔥','💎','😎','🤩','💀','🦋','🌈'];
    let fx = 'ripple', fSize = 80, fDur = 600;
    let fxColors = { ripple:'#0ff', blast:'#f0f', shockwave:'#ff0', orbital:'#0f0', confetti:'#f00' };
    let fxGrads = { ripple:false, blast:false, shockwave:false, orbital:false, confetti:false };
    let fxG1 = { ripple:'#0ff', blast:'#f0f', shockwave:'#ff0', orbital:'#0f0', confetti:'#f00' };
    let fxG2 = { ripple:'#00f', blast:'#0ff', shockwave:'#fff', orbital:'#0f0', confetti:'#ff0' };

    // Saved Data
    try {
        on = localStorage.getItem('mx_mt_on') !== 'false';
        len = +localStorage.getItem('mx_mt_len') || 15;
        sz = +localStorage.getItem('mx_mt_sz') || 6;
        clr = localStorage.getItem('mx_mt_clr') || '#0ff';
        glow = localStorage.getItem('mx_mt_glw') !== 'false';
        fade = +localStorage.getItem('mx_mt_fd') || 0.95;
        mode = localStorage.getItem('mx_mt_md') || 'fade';
        grad = localStorage.getItem('mx_mt_gr') === 'true';
        g1 = localStorage.getItem('mx_mt_g1') || '#0ff';
        g2 = localStorage.getItem('mx_mt_g2') || '#f0f';
        rainbow = localStorage.getItem('mx_mt_rb') === 'true';
        shape = localStorage.getItem('mx_mt_sh') || 'circle';
        emOn = localStorage.getItem('mx_mt_em') === 'true';
        emList = JSON.parse(localStorage.getItem('mx_mt_es')) || ['✨','💫','🌟','🔥','💎','😎','🤩','💀','🦋','🌈'];
        fx = localStorage.getItem('mx_mt_fx') || 'ripple';
        fSize = +localStorage.getItem('mx_mt_fs') || 80;
        fDur = +localStorage.getItem('mx_mt_fdur') || 600;
        // Merge Effect Colors
        fxColors = Object.assign({}, { ripple:'#0ff', blast:'#f0f', shockwave:'#ff0', orbital:'#0f0', confetti:'#f00' }, JSON.parse(localStorage.getItem('mx_mt_fxc') || '{}'));
        // Merge Effect Gradients
        fxGrads = Object.assign({}, { ripple:false, blast:false, shockwave:false, orbital:false, confetti:false }, JSON.parse(localStorage.getItem('mx_mt_fxg') || '{}'));
        // Merge Gradient Color1
        fxG1 = Object.assign({}, { ripple:'#0ff', blast:'#f0f', shockwave:'#ff0', orbital:'#0f0', confetti:'#f00' }, JSON.parse(localStorage.getItem('mx_mt_fx1') || '{}'));
        // Merge Gradient Color2
        fxG2 = Object.assign({}, { ripple:'#00f', blast:'#0ff', shockwave:'#fff', orbital:'#0f0', confetti:'#ff0' }, JSON.parse(localStorage.getItem('mx_mt_fx2') || '{}'));
        // Empty Emoji
        if (!emList.length) emList = ['✨'];
    } catch(e) {}

    // Animation State
    let pts = [], efx = [], mx = 0, my = 0, lx = 0, ly = 0;
    let rid = null, cvs = null, ctx = null, modal = null, hue = 0;
    let locked = false, lkX = innerWidth/2, lkY = innerHeight/2;

    // Canvas
    function initCvs() {
        if (cvs) { cvs.remove(); removeEventListener('resize', rsz); }
        cvs = document.createElement('canvas'); cvs.id = 'mt-cvs';
        cvs.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:2147483646';
        document.body.appendChild(cvs); ctx = cvs.getContext('2d'); rsz(); addEventListener('resize', rsz);
    }
    // Canvas Size
    function rsz() { if (cvs) { cvs.width = innerWidth; cvs.height = innerHeight; } }

    // Color Interpolation
    function lerp(a, b, t) {
        const ra = parseInt(a.slice(1,3),16), ga = parseInt(a.slice(3,5),16), ba = parseInt(a.slice(5,7),16);
        const rb = parseInt(b.slice(1,3),16), gb = parseInt(b.slice(3,5),16), bb = parseInt(b.slice(5,7),16);
        return `rgb(${Math.round(ra+(rb-ra)*t)},${Math.round(ga+(gb-ga)*t)},${Math.round(ba+(bb-ba)*t)})`;
    }
    // Trail Color
    function tClr(i, t) { return rainbow ? `hsl(${(hue+i*15)%360},100%,60%)` : grad ? lerp(g1,g2,t>1?i/(t-1):0) : clr; }
    // Effect Color
    function getFxColor() {
        if (!fxGrads[fx]) return fxColors[fx];
        return lerp(fxG1[fx], fxG2[fx], Math.random());
    }

    // Shape
    function dShape(x, y, s, sh) {
        ctx.beginPath(); const h = s/2;
        switch(sh) {
            case'square':ctx.rect(x-h,y-h,s,s);break;
            case'triangle':ctx.moveTo(x,y-h);ctx.lineTo(x+h,y+h);ctx.lineTo(x-h,y+h);ctx.closePath();break;
            case'star':for(let i=0;i<5;i++){const a=i*4*Math.PI/5-Math.PI/2,r=i%2===0?h:h/2;i===0?ctx.moveTo(x+r*Math.cos(a),y+r*Math.sin(a)):ctx.lineTo(x+r*Math.cos(a),y+r*Math.sin(a));}ctx.closePath();break;
            case'heart':ctx.moveTo(x,y+h);ctx.bezierCurveTo(x-h,y,x-h,y-h,x,y-h/3);ctx.bezierCurveTo(x+h,y-h,x+h,y,x,y+h);break;
            case'diamond':ctx.moveTo(x,y-h);ctx.lineTo(x+h,y);ctx.lineTo(x,y+h);ctx.lineTo(x-h,y);ctx.closePath();break;
            case'hexagon':for(let i=0;i<6;i++){const a=i*Math.PI/3-Math.PI/2;i===0?ctx.moveTo(x+h*Math.cos(a),y+h*Math.sin(a)):ctx.lineTo(x+h*Math.cos(a),y+h*Math.sin(a));}ctx.closePath();break;
            case'cross':const w=s/4;ctx.moveTo(x-w,y-h);ctx.lineTo(x+w,y-h);ctx.lineTo(x+w,y-w);ctx.lineTo(x+h,y-w);ctx.lineTo(x+h,y+w);ctx.lineTo(x+w,y+w);ctx.lineTo(x+w,y+h);ctx.lineTo(x-w,y+h);ctx.lineTo(x-w,y+w);ctx.lineTo(x-h,y+w);ctx.lineTo(x-h,y-w);ctx.lineTo(x-w,y-w);ctx.closePath();break;
            default:ctx.arc(x,y,h,0,Math.PI*2);
        }
        ctx.fill();
    }

    // Particle
    function addPt(x, y) {
        const em = emOn ? (emList[Math.floor(Math.random() * emList.length)] || '✨') : null;
        pts.push({x,y,s:sz,life:1,em});
        if(pts.length>len) pts.shift();
    }
    // Effect
    function addFx(x, y) {
        const n = {blast:20,confetti:35,orbital:14}[fx] || 4;
        const scale = fSize / 80;
        const now = Date.now();
        for(let i=0;i<n;i++){
            const e = {x,y,createdAt:now,tp:fx,clr:getFxColor()};
            switch(fx){
                case'blast':const a=Math.PI*2*i/n;e.vx=Math.cos(a)*(3+Math.random()*5)*scale;e.vy=Math.sin(a)*(3+Math.random()*5)*scale;e.sz=(3+Math.random()*4)*scale;break;
                case'ripple':e.startRad=10+i*20*scale;e.rad=e.startRad;e.max=fSize;break;
                case'shockwave':e.startRad=5+(i%2)*15*scale;e.rad=e.startRad;e.max=fSize*(i%2?1.5:1);break;
                case'orbital':e.ang=Math.PI*2*i/n;e.orb=30*scale;break;
                case'confetti':e.vx=(Math.random()-.5)*14*scale;e.vy=(-5-Math.random()*10)*scale;e.sz=(4+Math.random()*6)*scale;e.rot=Math.random()*360;e.rsp=(Math.random()-.5)*12;break;
            }
            efx.push(e);
        }
    }

    // Draw
    function draw() {
        if(!cvs||!on) return;
        ctx.clearRect(0,0,cvs.width,cvs.height);
        const t = pts.length;
        for(let i=0;i<t;i++){
            const p = pts[i]; let a = p.life;
            if(mode==='trail') a=.3+(i/t)*.7;
            else if(mode==='sparkle') a=p.life*(Math.sin(Date.now()*.008+i*.5)*.4+.6);
            else if(mode==='ribbon') a=p.life*(.5+.5*Math.sin(i*.3+Date.now()*.005));
            else if(mode==='pulse') a=p.life*(.7+.3*Math.sin(Date.now()*.01+i));
            else if(mode==='swirl') a=p.life;
            const c = tClr(i,t);
            ctx.save(); if(glow){ctx.shadowBlur=10;ctx.shadowColor=c;} ctx.globalAlpha=a;
            if(emOn&&p.em){const fs=p.s*p.life*2.5;ctx.font=`${fs}px serif`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(p.em,p.x,p.y);}
            else {ctx.fillStyle=c;dShape(p.x,p.y,p.s*p.life*(mode==='trail'?(.3+(i/t)*.7):1), shape);}
            ctx.restore();
        }
        for(const e of efx){
            ctx.save(); if(glow){ctx.shadowBlur=8;ctx.shadowColor=e.clr;} ctx.globalAlpha=Math.max(0, e.life);
            ctx.strokeStyle=e.clr; ctx.fillStyle=e.clr; ctx.lineWidth=2;
            switch(e.tp){
                case'ripple':case'shockwave':ctx.beginPath();ctx.arc(e.x,e.y,e.rad,0,Math.PI*2);ctx.stroke();break;
                case'orbital':const ox=e.x+Math.cos(e.ang)*e.orb,oy=e.y+Math.sin(e.ang)*e.orb;ctx.beginPath();ctx.arc(ox,oy,3,0,Math.PI*2);ctx.fill();break;
                case'confetti':ctx.save();ctx.translate(e.x,e.y);ctx.rotate(e.rot*Math.PI/180);ctx.fillRect(-e.sz/2,-e.sz/4,e.sz,e.sz/2);ctx.restore();break;
                case'blast':ctx.beginPath();ctx.arc(e.x,e.y,e.sz,0,Math.PI*2);ctx.fill();break;
            }
            ctx.restore();
        }
    }

    // Loop
    function upd() {
        const now = Date.now();
        for(let p of pts){
            if(mode==='fade'||mode==='sparkle'||mode==='ribbon'||mode==='pulse'||mode==='swirl'){p.life*=fade;p.s*=.98;}
            else if(mode==='trail'){p.life=1;p.s=sz;}
        }
        pts=pts.filter(p=>p.life>.02&&p.s>.3);
        for(let i=efx.length-1;i>=0;i--){
            const e=efx[i];
            e.life = 1 - (now - e.createdAt) / fDur;
            if(e.life <= 0) { efx.splice(i,1); continue; }
            if(e.tp==='ripple'||e.tp==='shockwave'){
                e.rad = e.startRad + (e.max - e.startRad) * (1 - e.life);
            }
            if(e.tp==='orbital'){e.orb+=2;e.ang+=.1;}
            if(e.tp==='confetti'){e.x+=e.vx;e.y+=e.vy;e.vy+=.3;e.rot+=e.rsp;}
            if(e.tp==='blast'){e.x+=e.vx||0;e.y+=e.vy||0;}
        }
        if(rainbow) hue=(hue+.8)%360;
        draw();
    }

    // Pointer Lock
    document.addEventListener('pointerlockchange', () => {
        locked = !!document.pointerLockElement;
        if (locked) { lkX = innerWidth/2; lkY = innerHeight/2; }
        else { lx = ly = null; }
    });

    // Mouse Move
    function move(e){
        if(!on) return;
        if(locked){lkX+=e.movementX;lkY+=e.movementY;lkX=Math.max(0,Math.min(innerWidth,lkX));lkY=Math.max(0,Math.min(innerHeight,lkY));mx=lkX;my=lkY;}
        else{mx=e.clientX;my=e.clientY;}
        if(lx===null||ly===null){lx=mx;ly=my;}
        if(Math.hypot(mx-lx,my-ly)>2){addPt(mx,my);lx=mx;ly=my;}
    }
    // Click Effect
    function clk(e){ if(!on) return; addFx(locked?lkX:e.clientX, locked?lkY:e.clientY); }
    // Animation Frame
    function anim(){ if(!on){rid=null;return;} upd(); rid=requestAnimationFrame(anim); }
    // Start Trail
    function start(){ if(rid)cancelAnimationFrame(rid); initCvs(); document.addEventListener('mousemove',move); document.addEventListener('click',clk); rid=requestAnimationFrame(anim); }
    // Stop Trail
    function stop(){ document.removeEventListener('mousemove',move); document.removeEventListener('click',clk); if(rid){cancelAnimationFrame(rid);rid=null;} if(cvs){cvs.remove();cvs=null;ctx=null;removeEventListener('resize',rsz);} pts=[];efx=[]; }
    // Toggle ON/OFF
    function toggle(){ on=!on; localStorage.setItem('mx_mt_on',on); on?start():stop(); }

    // Settings
    function settings(){
        if(modal){modal.remove();modal=null;}
        modal=document.createElement('div');modal.id='mt-modal';
        Object.assign(modal.style,{position:'fixed',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:'360px',maxHeight:'80vh',background:'#0a0a1a',border:'1px solid #0ff',borderRadius:'14px',zIndex:'2147483649',fontFamily:'Segoe UI,sans-serif',boxShadow:'0 20px 50px rgba(0,0,0,0.8),0 0 30px #0ff',display:'flex',flexDirection:'column'});

        const modes = ['fade','trail','sparkle','ribbon','pulse','swirl'];
        const modeNames = {fade:'Fade',trail:'Trail',sparkle:'Sparkle',ribbon:'Ribbon',pulse:'Pulse',swirl:'Swirl'};
        const mdOpt = modes.map(m=>`<option value="${m}" ${mode===m?'selected':''}>${modeNames[m]}</option>`).join('');
        const shOpt = ['Circle','Square','Triangle','Star','Heart','Diamond','Hexagon','Cross'].map(s=>`<option value="${s}" ${shape===s?'selected':''}>${s}</option>`).join('');
        const fxOpt = ['ripple','blast','shockwave','orbital','confetti'].map(f=>`<option value="${f}" ${fx===f?'selected':''}>${f.charAt(0).toUpperCase()+f.slice(1)}</option>`).join('');

        modal.innerHTML = `
<div style="padding:10px 14px;background:#05050f;border-radius:14px 14px 0 0;border-bottom:1px solid #0ff;display:flex;justify-content:space-between;align-items:center;">
<span style="color:#0ff;font-weight:bold;font-size:12px;">⚙️ Settings</span>
<button id="mt-x" style="background:none;border:none;color:#0ff;cursor:pointer;font-size:14px;">✕</button></div>
<div style="padding:12px 14px;overflow-y:auto;flex:1;">
<div style="background:#0a0a1a;border:1px solid #1a1a2a;border-radius:10px;padding:10px;margin-bottom:10px;">
<div style="color:#0ff;font-weight:bold;font-size:10px;margin-bottom:8px;">Trail Particles</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
<div><label style="color:#888;font-size:9px;">Mode</label><select id="mt-md" class="s-sel">${mdOpt}</select></div>
<div><label style="color:#888;font-size:9px;">Shape</label><select id="mt-sh" class="s-sel">${shOpt}</select></div>
<div><label id="lbl-ln" style="color:#888;font-size:9px;">Length: ${len}</label><input type="range" id="mt-ln" class="s-rng" min="5" max="100" value="${len}"></div>
<div><label id="lbl-sz" style="color:#888;font-size:9px;">Size: ${sz}</label><input type="range" id="mt-sz" class="s-rng" min="2" max="100" value="${sz}"></div>
<div><label id="lbl-fd" style="color:#888;font-size:9px;">Fade: ${fade.toFixed(2)}</label><input type="range" id="mt-fd" class="s-rng" min=".85" max=".995" step=".005" value="${fade}"></div></div>
<div style="margin-top:6px;"><input type="color" id="mt-cl" value="${clr}" class="s-clr"></div>
<div style="display:flex;gap:8px;margin-top:6px;flex-wrap:wrap;">
<label class="s-chk"><input type="checkbox" id="mt-rb" ${rainbow?'checked':''}> Rainbow</label>
<label class="s-chk"><input type="checkbox" id="mt-gr" ${grad?'checked':''}> Gradient</label>
<label class="s-chk"><input type="checkbox" id="mt-gl" ${glow?'checked':''}> Glow</label>
<label class="s-chk"><input type="checkbox" id="mt-em" ${emOn?'checked':''}> Emoji</label></div>
<div id="gr-div" style="display:${grad?'flex':'none'};gap:6px;margin-top:4px;"><input type="color" id="mt-g1" value="${g1}" class="s-clr" style="flex:1;"><input type="color" id="mt-g2" value="${g2}" class="s-clr" style="flex:1;"></div>
<div id="em-div" style="display:${emOn?'block':'none'};margin-top:8px;border:1px solid #1a1a2a;border-radius:8px;overflow:hidden;">
<div style="padding:4px 6px;background:#111;color:#0ff;font-size:9px;display:flex;justify-content:space-between;"><span>Pick Emojis</span><span id="em-cnt" style="color:#888;">${emList.length}/15</span></div>
<div id="em-grd" style="padding:4px;max-height:100px;overflow-y:auto;background:#05050f;display:grid;grid-template-columns:repeat(12,1fr);gap:2px;"></div>
<div id="em-sel" style="border-top:1px solid #1a1a2a;padding:4px 6px;background:#0a0a1a;min-height:26px;display:flex;flex-wrap:wrap;gap:3px;align-items:center;"></div></div></div>
<div style="background:#0a0a1a;border:1px solid #1a1a2a;border-radius:10px;padding:10px;margin-bottom:10px;">
<div style="color:#f0f;font-weight:bold;font-size:10px;margin-bottom:8px;">Click Effect</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
<div><label style="color:#888;font-size:9px;">Effect</label><select id="mt-fx" class="s-sel">${fxOpt}</select></div>
<div><label id="lbl-fs" style="color:#888;font-size:9px;">Size: ${fSize}</label><input type="range" id="mt-fs" class="s-rng" min="30" max="200" value="${fSize}"></div>
<div><label id="lbl-fdur" style="color:#888;font-size:9px;">Duration: ${fDur}ms</label><input type="range" id="mt-fdur" class="s-rng" min="200" max="1500" step="50" value="${fDur}"></div></div>
<div style="margin-top:6px;"><input type="color" id="mt-fc" value="${fxColors[fx]}" class="s-clr"></div>
<div style="margin-top:4px;"><label class="s-chk"><input type="checkbox" id="mt-fg" ${fxGrads[fx]?'checked':''}> Effect Gradient</label></div>
<div id="fg-div" style="display:${fxGrads[fx]?'flex':'none'};gap:6px;margin-top:4px;"><input type="color" id="mt-fg1" value="${fxG1[fx]}" class="s-clr" style="flex:1;"><input type="color" id="mt-fg2" value="${fxG2[fx]}" class="s-clr" style="flex:1;"></div></div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;">
<button id="mt-rst" class="s-rst">Reset All</button>
<button id="mt-done" class="s-done">Done</button></div>
<div style="background:#0a0a1a;border:1px solid #1a1a2a;border-radius:10px;padding:10px;color:#888;font-size:9px;line-height:1.5;">
<div style="color:#0ff;font-weight:bold;margin-bottom:4px;">ℹ️ Info</div>
• <b>Mode</b> changes trail behaviour (Fade, Trail, Sparkle…).<br>
• <b>Shape</b> sets particle shape (Circle, Star…).<br>
• <b>Length/Size/Fade</b> control trail density.<br>
• <b>Rainbow</b> cycles colours; <b>Gradient</b> blends two colours.<br>
• <b>Glow</b> adds neon aura; <b>Emoji</b> uses chosen icons.<br>
• <b>Click Effect</b> triggers on click – Size scales it, Duration sets lifetime.<br>
• <b>Effect Gradient</b> gives each particle a random blend of two colours.<br>
• Hotkeys: <b>Alt+5</b> settings.<br>
• <b>Made by Itz_Krishna AKA Everlasting</b><br>
• <b>Discord:</b> <a href="https://discord.gg/Ma7pz4R8tw" target="_blank" style="color:#0ff;">Join our Discord</a></div></div>`;
        document.body.appendChild(modal);

        const close = () => { if(modal){modal.remove();modal=null;} };
        document.getElementById('mt-x').onclick = close;
        document.getElementById('mt-done').onclick = close;
        modal.onclick = (e) => { if(e.target === modal) close(); };

        const $ = id => document.getElementById(id);
        const bind = (id, ev, fn) => $(id).addEventListener(ev, fn);

        bind('mt-md', 'change', e => { mode = e.target.value; localStorage.setItem('mx_mt_md', mode); });
        bind('mt-sh', 'change', e => { shape = e.target.value; localStorage.setItem('mx_mt_sh', shape); });
        bind('mt-ln', 'input', e => { len = +e.target.value; $('lbl-ln').textContent = 'Length: '+len; localStorage.setItem('mx_mt_len', len); });
        bind('mt-sz', 'input', e => { sz = +e.target.value; $('lbl-sz').textContent = 'Size: '+sz; localStorage.setItem('mx_mt_sz', sz); });
        bind('mt-fd', 'input', e => { fade = +e.target.value; $('lbl-fd').textContent = 'Fade: '+fade.toFixed(2); localStorage.setItem('mx_mt_fd', fade); });
        bind('mt-cl', 'input', e => { clr = e.target.value; localStorage.setItem('mx_mt_clr', clr); });
        bind('mt-rb', 'change', e => { rainbow = e.target.checked; localStorage.setItem('mx_mt_rb', rainbow); });
        bind('mt-gr', 'change', e => { grad = e.target.checked; $('gr-div').style.display = grad?'flex':'none'; localStorage.setItem('mx_mt_gr', grad); });
        bind('mt-g1', 'input', e => { g1 = e.target.value; localStorage.setItem('mx_mt_g1', g1); });
        bind('mt-g2', 'input', e => { g2 = e.target.value; localStorage.setItem('mx_mt_g2', g2); });
        bind('mt-gl', 'change', e => { glow = e.target.checked; localStorage.setItem('mx_mt_glw', glow); });
        bind('mt-em', 'change', e => { emOn = e.target.checked; localStorage.setItem('mx_mt_em', emOn); close(); settings(); });
        bind('mt-fx', 'change', e => {
            fx = e.target.value; localStorage.setItem('mx_mt_fx', fx);
            $('mt-fc').value = fxColors[fx];
            $('mt-fg').checked = fxGrads[fx];
            $('fg-div').style.display = fxGrads[fx]?'flex':'none';
            $('mt-fg1').value = fxG1[fx];
            $('mt-fg2').value = fxG2[fx];
        });
        bind('mt-fs', 'input', e => { fSize = +e.target.value; $('lbl-fs').textContent = 'Size: '+fSize; localStorage.setItem('mx_mt_fs', fSize); });
        bind('mt-fdur', 'input', e => { fDur = +e.target.value; $('lbl-fdur').textContent = 'Duration: '+fDur+'ms'; localStorage.setItem('mx_mt_fdur', fDur); });
        bind('mt-fc', 'input', e => { fxColors[fx] = e.target.value; localStorage.setItem('mx_mt_fxc', JSON.stringify(fxColors)); });
        bind('mt-fg', 'change', e => { fxGrads[fx] = e.target.checked; $('fg-div').style.display = fxGrads[fx]?'flex':'none'; localStorage.setItem('mx_mt_fxg', JSON.stringify(fxGrads)); });
        bind('mt-fg1', 'input', e => { fxG1[fx] = e.target.value; localStorage.setItem('mx_mt_fx1', JSON.stringify(fxG1)); });
        bind('mt-fg2', 'input', e => { fxG2[fx] = e.target.value; localStorage.setItem('mx_mt_fx2', JSON.stringify(fxG2)); });
        // Reset All
        bind('mt-rst', 'click', () => {
            on = true; len = 15; sz = 6; clr = '#0ff'; glow = true; fade = 0.95; mode = 'fade';
            grad = false; g1 = '#0ff'; g2 = '#f0f'; rainbow = false; shape = 'circle';
            emOn = false; emList = ['✨','💫','🌟','🔥','💎','😎','🤩','💀','🦋','🌈'];
            fx = 'ripple'; fSize = 80; fDur = 600;
            fxColors = { ripple:'#0ff', blast:'#f0f', shockwave:'#ff0', orbital:'#0f0', confetti:'#f00' };
            fxGrads = { ripple:false, blast:false, shockwave:false, orbital:false, confetti:false };
            fxG1 = { ripple:'#0ff', blast:'#f0f', shockwave:'#ff0', orbital:'#0f0', confetti:'#f00' };
            fxG2 = { ripple:'#00f', blast:'#0ff', shockwave:'#fff', orbital:'#0f0', confetti:'#ff0' };
            localStorage.setItem('mx_mt_on', on);
            localStorage.setItem('mx_mt_len', len);
            localStorage.setItem('mx_mt_sz', sz);
            localStorage.setItem('mx_mt_clr', clr);
            localStorage.setItem('mx_mt_glw', glow);
            localStorage.setItem('mx_mt_fd', fade);
            localStorage.setItem('mx_mt_md', mode);
            localStorage.setItem('mx_mt_gr', grad);
            localStorage.setItem('mx_mt_g1', g1);
            localStorage.setItem('mx_mt_g2', g2);
            localStorage.setItem('mx_mt_rb', rainbow);
            localStorage.setItem('mx_mt_sh', shape);
            localStorage.setItem('mx_mt_em', emOn);
            localStorage.setItem('mx_mt_es', JSON.stringify(emList));
            localStorage.setItem('mx_mt_fx', fx);
            localStorage.setItem('mx_mt_fs', fSize);
            localStorage.setItem('mx_mt_fdur', fDur);
            localStorage.setItem('mx_mt_fxc', JSON.stringify(fxColors));
            localStorage.setItem('mx_mt_fxg', JSON.stringify(fxGrads));
            localStorage.setItem('mx_mt_fx1', JSON.stringify(fxG1));
            localStorage.setItem('mx_mt_fx2', JSON.stringify(fxG2));
            if(modal){modal.remove();modal=null;}
            settings();
        });

        // Emoji Picker
        if (emOn) {
            const g = $('em-grd'), s = $('em-sel'), c = $('em-cnt');
            function rG() {
                g.innerHTML = ALL_EMOJI.map(e => `<div data-e="${e}" style="font-size:14px;text-align:center;padding:1px;cursor:pointer;border-radius:3px;border:1px solid ${emList.includes(e)?'#0ff':'transparent'};background:${emList.includes(e)?'rgba(0,255,255,.15)':'transparent'};">${e}</div>`).join('');
                g.querySelectorAll('div').forEach(el => el.onclick = () => {
                    const e = el.dataset.e;
                    emList.includes(e) ? emList = emList.filter(x => x !== e) : emList.length < 15 && emList.push(e);
                    localStorage.setItem('mx_mt_es', JSON.stringify(emList)); rG(); rS();
                });
            }
            function rS() {
                c.textContent = emList.length + '/15';
                s.innerHTML = emList.length === 0 ? '<span style="color:#555;font-size:9px;">Click above to add</span>' : emList.map(e => `<span style="display:inline-flex;align-items:center;gap:2px;background:#111;border-radius:4px;padding:1px 4px;font-size:14px;">${e}<b data-e="${e}" style="color:#f66;cursor:pointer;font-size:9px;margin-left:2px;">✕</b></span>`).join('');
                s.querySelectorAll('b').forEach(b => b.onclick = ev => { ev.stopPropagation(); emList = emList.filter(x => x !== b.dataset.e); localStorage.setItem('mx_mt_es', JSON.stringify(emList)); rG(); rS(); });
            }
            rG(); rS();
        }
    }

    // Styles
    const css = document.createElement('style');
    css.textContent = `#mt-modal::-webkit-scrollbar{width:4px}#mt-modal::-webkit-scrollbar-thumb{background:#1a1a2a;border-radius:2px}.s-sel{width:100%;background:#111;border:1px solid #333;border-radius:6px;padding:5px;color:#e0e0ff;font-size:10px;cursor:pointer;outline:none}.s-sel:focus{border-color:#0ff}.s-rng{width:100%;accent-color:#0ff}.s-clr{width:100%;height:28px;border-radius:6px;border:1px solid #333;background:#111;cursor:pointer;padding:2px}.s-chk{display:flex;align-items:center;gap:3px;color:#888;font-size:9px;cursor:pointer}.s-chk input{accent-color:#0ff}.s-rst{background:#1a1a2a;border:1px solid #f66;color:#f66;border-radius:8px;padding:8px;font-size:11px;cursor:pointer;font-weight:bold}.s-rst:hover{background:#f66;color:#000}.s-done{background:#0ff;color:#000;border:none;border-radius:8px;padding:8px;font-size:11px;cursor:pointer;font-weight:bold}.s-done:hover{opacity:.8}`;
    document.head.appendChild(css);

    // Hotkeys ALT+5
    addEventListener('keydown', e => {
        if (e.altKey && e.key === '5') { e.preventDefault(); settings(); }
    });

    // Start
    if (on) start();

  }
