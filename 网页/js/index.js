
document.addEventListener('DOMContentLoaded',function(){
    function rnd(n,m){
        return parseInt(Math.random()*(m-n)+n);
    }
    var oCont = document.querySelector('#container');
        var oDiv=document.querySelector('.word');
        var str='CSS3 with HTML5 / Javascript Animation';

        for(var i=0; i<str.length;i++){
            var oSpan=document.createElement('span');
            oSpan.innerHTML=str.charAt(i);

            oDiv.appendChild(oSpan);
        }

        var aSpan=oDiv.children;
        var i=0;
        var timer=setInterval(function(){
            aSpan[i].style.textShadow='0 0 0 #FFF';
            aSpan[i].style.opacity=1;
            i++;
            if(i==aSpan.length){
                clearInterval(timer);
            }
        },200);
/*导航跳转*/
    (function(){
        var oUl = document.querySelector('.nav');
        var aLi = oUl.children;
        aLi[1].onclick = function(){
            move(oCont,{left:-2000,top:0},{type:Tween.Cubic.easeOut})
        }
        aLi[2].onclick = function(){
            move(oCont,{left:0,top:-1300},{type:Tween.Cubic.easeOut})
        }
        aLi[3].onclick = function(){
            move(oCont,{left:-2000,top:-1300},{type:Tween.Cubic.easeOut});
        }
    })();
    /*canvas*/
    /*(function(){
        var oC=document.querySelector('canvas');

        var gd=oC.getContext('2d');
        var oCw=document.documentElement.clientWidth;
        var oCh=document.documentElement.clientHeight;
        oC.width=oCw;
        oC.height=oCh;

        var N=10;
        var iNum=100;

        var aPos=[]; //[{l:100,t:100}]
        var w=1;
        var h=1;

        //保存状态坐标
        var oldArr=[];
        //[
        //[
        //	{l:100,t:100},
        //	{l:100,t:100},
        //	{l:100,t:100},
        //	{l:100,t:100},
        //	{l:100,t:100},
        //],
        //[
        //	{l:100,t:100},
        //	{l:100,t:100},
        //	{l:100,t:100},
        //	{l:100,t:100},
        //	{l:100,t:100},
        //]
        //];

        gd.fillStyle='#blue';
        for(var i=0; i<N;i++){
            var x=rnd(0,oCw-w);
            var y=rnd(0,oCh-h);
            gd.fillRect(x,y,w,h);

            aPos.push({
                l:x,
                t:y,
                speedX:rnd(-5,5),
                speedY:rnd(-5,5),
            });

        }

        setInterval(function(){
            gd.clearRect(0,0,oC.width,oC.height);

            var arr=[];
            for(var i=0; i<N;i++){

                if(aPos[i].l<=0){
                    aPos[i].speedX*=-1;
                }
                if(aPos[i].t<=0){
                    aPos[i].speedY*=-1;
                }
                if(aPos[i].l>=oCw-w){
                    aPos[i].speedX*=-1;
                }
                if(aPos[i].t>=oCh-h){
                    aPos[i].speedY*=-1;
                }

                aPos[i].l=aPos[i].l+aPos[i].speedX;
                aPos[i].t=aPos[i].t+aPos[i].speedY;

                //保存数组
                arr[i]={l:aPos[i].l,t:aPos[i].t};


                gd.fillRect(aPos[i].l,aPos[i].t,w,h);
            }

            if(iNum<oldArr.length){
                oldArr.shift();
            }

            oldArr.push(arr);

            //画影子
            for(var i=0; i<oldArr.length;i++){
                gd.beginPath();
                gd.strokeStyle='rgba(26,126,128,'+
                    i/100+')';
                gd.moveTo(oldArr[i][0].l,oldArr[i][0].t);
                for(var j=1;j<oldArr[i].length;j++){
                    gd.lineTo(oldArr[i][j].l,oldArr[i][j].t);
                }
                gd.closePath();
                gd.stroke();
            }
            //连线
            gd.beginPath();
            gd.strokeStyle='#7AFF27';
            gd.moveTo(aPos[0].l,aPos[0].t);
            for(var i=1;i<aPos.length;i++){
                gd.lineTo(aPos[i].l,aPos[i].t);
            }
            gd.closePath();
            gd.stroke();

        },16);
    })();*/
    /*ABout导航*/
    (function(){
        var oUl = document.querySelector('.about-nav');
        var aLi = oUl.children;
        aLi[0].onclick = function(){
            move(oCont,{left:0,top:0},{type:Tween.Cubic.easeOut})
        };
        aLi[1].onclick = function() {
            move(oCont, {left: -2000, top: 0}, {type: Tween.Cubic.easeOut});
        }
        aLi[2].onclick = function(){
            move(oCont,{left:-2000,top:-1300},{type:Tween.Cubic.easeOut});
        }

    })();
    /*cancas*/
    (function(){

        var canvas = document.getElementById('canvas'),
            ctx = canvas.getContext('2d'),
            w = canvas.width = window.innerWidth,
            h = canvas.height = window.innerHeight,

            hue = 217,
            stars = [],
            count = 0,
            maxStars = 1200;

        var canvas2 = document.createElement('canvas'),
            ctx2 = canvas2.getContext('2d');
        canvas2.width = 100;
        canvas2.height = 100;
        var half = canvas2.width / 2,
            gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
        gradient2.addColorStop(0.025, '#fff');
        gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
        gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
        gradient2.addColorStop(1, 'transparent');

        ctx2.fillStyle = gradient2;
        ctx2.beginPath();
        ctx2.arc(half, half, half, 0, Math.PI * 2);
        ctx2.fill();

// End cache

        function random(min, max) {
            if (arguments.length < 2) {
                max = min;
                min = 0;
            }

            if (min > max) {
                var hold = max;
                max = min;
                min = hold;
            }

            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function maxOrbit(x, y) {
            var max = Math.max(x, y),
                diameter = Math.round(Math.sqrt(max * max + max * max));
            return diameter / 2;
        }

        var Star = function() {

            this.orbitRadius = random(maxOrbit(w, h));
            this.radius = random(60, this.orbitRadius) / 12;
            this.orbitX = w / 2;
            this.orbitY = h / 2;
            this.timePassed = random(0, maxStars);
            this.speed = random(this.orbitRadius) / 900000;
            this.alpha = random(2, 10) / 10;

            count++;
            stars[count] = this;
        }

        Star.prototype.draw = function() {
            var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
                y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
                twinkle = random(10);

            if (twinkle === 1 && this.alpha > 0) {
                this.alpha -= 0.05;
            } else if (twinkle === 2 && this.alpha < 1) {
                this.alpha += 0.05;
            }

            ctx.globalAlpha = this.alpha;
            ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
            this.timePassed += this.speed;
        }

        for (var i = 0; i < maxStars; i++) {
            new Star();
        }

        function animation() {
            ctx.globalCompositeOperation = 'source-over';
            ctx.globalAlpha = 0.8;
            ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)';
            ctx.fillRect(0, 0, w, h)

            ctx.globalCompositeOperation = 'lighter';
            for (var i = 1, l = stars.length; i < l; i++) {
                stars[i].draw();
            };

            window.requestAnimationFrame(animation);
        }

        animation();
    })();
    /*work导航*/
    (function(){
            var oUl = document.querySelector('.work-nav');
            var aLi = oUl.children;
            aLi[0].onclick = function(){
                move(oCont,{left:0,top:0},{type:Tween.Cubic.easeOut})
            };
            aLi[1].onclick = function() {
                move(oCont, {left: 0, top: -1300}, {type: Tween.Cubic.easeOut});
            }
            aLi[2].onclick = function(){
                move(oCont,{left:-2000,top:-1300},{type:Tween.Cubic.easeOut});
            }
        })();
    /*爆炸效果*/
    (function(){
        var oBox=document.querySelector('.work-box');
        //布局转换
        var R=5;
        var C=8;
        for(var i=0; i<R;i++){
            for(var j=0;j<C;j++){
                var oSpan=document.createElement('span');
                var w=oBox.offsetWidth/C;
                var h=oBox.offsetHeight/R;
                oSpan.style.width=w+'px';
                oSpan.style.height=h+'px';
                oSpan.style.left=j*w+'px';
                oSpan.style.top=i*h+'px';

                oSpan.style.backgroundImage='url(image/0.png)';
                oSpan.style.backgroundPosition=-j*w+'px '+-i*h+'px';

                oBox.appendChild(oSpan);
            }
        }

        var aSpan=oBox.children;
        var iNow=0;
        var bReady=true;

        oBox.onclick=function(){
            if(!bReady)return;
            bReady=false;
            iNow++;
            for(var i=0; i<aSpan.length;i++){
                aSpan[i].style.transition='1.8s cubic-bezier(0, 0.92, 0.14, -0.93)';
                var x2=oBox.offsetWidth/2;
                var y2=oBox.offsetHeight/2;
                var x1=aSpan[i].offsetWidth/2+aSpan[i].offsetLeft;
                var y1=aSpan[i].offsetHeight/2+aSpan[i].offsetTop;
                var a=y2-y1;
                var b=x2-x1;

                aSpan[i].style.opacity=0;
                aSpan[i].style.transform='perspective(800px) scale('+rnd(15,20)/10+') translate3d('+-b+'px,'+-a+'px,100px) rotateZ('+rnd(-360,360)+'deg) rotateX('+rnd(-360,360)+'deg) rotateY('+rnd(-360,360)+'deg)';
            }
        };

        aSpan[0].addEventListener('transitionend',function(){
            for(var i=0; i<aSpan.length;i++){
                aSpan[i].style.transition='none';
                aSpan[i].style.opacity=1;
                aSpan[i].style.transform='perspective(800px) scale(1) translate3d(0,0,0) rotateZ(0) rotateX(0) rotateY(0)';

                aSpan[i].style.backgroundImage='url(image/'+iNow%3+'.png)';
                oBox.style.backgroundImage='url(image/'+(iNow+1)%3+'.png)';
            }

            bReady=true;

        },false);

    })();
    /*鼠标移动*/
    (function(){
        function a2d(n){
            return 180/Math.PI*n;
        }
            var oUl = document.querySelector('.work-mov')
            var aLi = oUl.children;
            var aP = oUl.getElementsByTagName('p');
            //PosTrans(aLi[0],aP[0]);
            aLi[0].onclick = function(){
                oCont.style.left = '-2000px';
                oCont.style.top = '-1280';
            };
            aLi[1].onclick = function(){
                /*top:1280px;
                left: 4000px;*/
                oCont.style.top = '-1280px';
                oCont.style.left = '-4000px';
            }
            for(var i=0;i<aLi.length;i++){
                PosTrans(aLi[i],aP[i]);
            };
            function PosTrans(obj,son){
                var cx=obj.offsetLeft+obj.offsetWidth/2;
                var cy=obj.offsetTop+obj.offsetHeight/2;


                function getDir(ev){
                    var x=ev.clientX;
                    var y=ev.clientY;

                    var a=cy-y;
                    var b=x-cx;

                    //角度
                    var deg=a2d(Math.atan2(a,b));
                    /*document.title=Math.round((deg+180)/90)%4;*/
                    return Math.round((deg+180)/90)%4;
                }

                obj.onmouseenter=function(ev){

                    switch(getDir(ev)){
                        case 0:
                            son.style.left=-150+'px';
                            son.style.top=0+'px';

                            break;
                        case 1:
                            son.style.left=0+'px';
                            son.style.top=150+'px';

                            break;
                        case 2:
                            son.style.left=150+'px';
                            son.style.top=0+'px';
                            break;
                        case 3:
                            son.style.left=0+'px';
                            son.style.top=-150+'px';
                            break;
                    }
                    move(son,{top:0,left:0});
                };

                obj.onmouseleave=function(ev){
                    switch(getDir(ev)){
                        case 0:
                            move(son,{left:-150,top:0});
                            break;
                        case 1:
                            move(son,{left:0,top:150});
                            break;
                        case 2:
                            move(son,{left:150,top:0});
                            break;
                        case 3:
                            move(son,{left:0,top:-150});
                            break;
                    }
                };
            }
    })();
    /*link*/
    (function(){

    })();
    /*3D环鼠标移入导航*/
    (function(){
        var oUl = document.querySelector('.contact-nav');
        var aLi = oUl.children;
        aLi[0].onclick = function(){
            move(oCont,{left:0,top:0},{type:Tween.Cubic.easeOut})
        };
        aLi[1].onclick = function() {
            move(oCont, {left: 0, top: -1300}, {type: Tween.Cubic.easeOut});
        }
        aLi[2].onclick = function(){
            move(oCont,{left:-2000,top:0},{type:Tween.Cubic.easeOut});
        }
    })();

    /*3D环图页面调整导航*/
    (function(){
        var oUl = document.querySelector('.solid-nav');
        var aLi = oUl.children;
        aLi[0].onclick = function(){
            move(oCont,{left:0,top:0})/*
            oCont.style.left='0px';
            oCont.style.top = '0px';*/
        };
        aLi[1].onclick = function() {/*
            oCont.style.left='0px';
            oCont.style.top = '-1300px';*/
            move(oCont,{left:0,top:-1300})
        }
        aLi[2].onclick = function(){/*
            oCont.style.left='-2000px';
            oCont.style.top = '-1300px';*/
            move(oCont,{left:-2000,top:-1300})
        };
        aLi[3].onclick = function(){/*
            oCont.style.left = '-2000px';
            oCont.style.top = '0';*/
            move(oCont,{left:-2000,top:0});
        }
    })();
/*3D页面*/
    (function(){
        var oUl=document.querySelector('.list');

        var N=11;
        for(var i=0;i<N;i++){
            var oLi=document.createElement('li');
            oLi.style.transition='1s '+(N-i)*200+'ms';
            oLi.style.backgroundImage='url(img2/'+(i+1)+'.jpg)';

            oLi.innerHTML='<span></span>';

            var oSpan=oLi.children[0];

            oSpan.style.backgroundImage='url(img2/'+(i+1)+'.jpg)';

            //360/N*i li旋转的角度
            (function(i,oLi){
                setTimeout(function(){
                    oLi.style.transform='rotateY('+(360/N*i)+'deg) translateZ(350px)';

                },0);
            })(i,oLi);

            oUl.appendChild(oLi);
        }

        var aLi=oUl.children;
        var y=0;
        var x=20*3;
        var speedX=0;
        var lastSpeedX=0;
        var speedY=0;
        var lastSpeedY=0;
        var timer=null;

        document.onmousedown=function(ev){
            clearInterval(timer);

            var disY=ev.clientX-y;
            var disX=ev.clientY-x;
            document.onmousemove=function(ev){
                y=ev.clientX-disY;
                x=ev.clientY-disX;
                change(y/3,x/3);

                speedX=ev.clientX-lastSpeedX;
                lastSpeedX=ev.clientX;
                speedY=ev.clientY-lastSpeedY;
                lastSpeedY=ev.clientY;
            }
            document.onmouseup=function(){
                document.onmousemove=null;
                document.onmouseup=null;
                clearInterval(timer);
                timer=setInterval(function(){
                    speedX*=0.9;
                    speedY*=0.9;
                    y+=speedX;
                    x+=speedY;
                    change(y/3,x/3);
                    if(Math.round(speedX)==0 && Math.round(speedY)==0){
                        clearInterval(timer);
                        //alert('停止了');
                    }
                },30);

            };
            return false;
        };



        aLi[0].addEventListener('transitionend',function(){
            change();
        },false);

        function change(y,x){

            oUl.style.transform='perspective(800px) rotateX('+-x+'deg)';

            for(var i=0; i<aLi.length;i++){
                aLi[i].style.transition='none';
                aLi[i].style.transform='rotateY('+(i*360/N+y)+'deg) translateZ(350px)';

                //比例
                var n=Math.abs(Math.abs(i*360/N+y)%360-180)/180;
                if(n<0.4){n=0.4}
                aLi[i].style.opacity=n;

                //aLi[i].innerHTML=n;
            }
        }

    })();
    /*wall墙导航*/
    (function(){
        var oUl = document.querySelector('.wall-nav');
        var aLi = oUl.children;
        aLi[0].onclick = function(){
            oCont.style.left='0px';
            oCont.style.top = '0px';
        };
        aLi[1].onclick = function() {
            oCont.style.left='0px';
            oCont.style.top = '-1300px';
        }
        aLi[2].onclick = function(){
            oCont.style.left='-2000px';
            oCont.style.top = '-1300px';
        };
        aLi[3].onclick = function(){
            oCont.style.left = '-2000px';
            oCont.style.top = '0';
        }
    })();
    /*wall墙网页*/

        /*var oDiv = document.querySelector('.wall-img');
        var aLi = oDiv.children;
        /!*var oBtn=document.querySelector('input');*!/
        var aPos = [];


        /!*oBtn.onclick=function(){
         aPos.sort(function(){
         return 0.5-Math.random();
         });
         console.log(aPos);

         for(var i=0; i<aLi.length;i++){
         aLi[i].index=i;
         move(aLi[i],{top:aPos[i].top,left:aPos[i].left},{type:Tween.Bounce.easeIn})
         }

         }*!/


        //[{left:100,top:100},{left:100,top:100}]
        //布局转换
        for (var i = 0; i < aLi.length; i++) {
            aPos.push({left: aLi[i].offsetLeft, top: aLi[i].offsetTop});
        }
        console.log('第一次', aPos);

        for (var i = 0; i < aPos.length; i++) {
            aLi[i].style.left = aPos[i].left + 'px';
            aLi[i].style.top = aPos[i].top + 'px';
            aLi[i].style.position = 'absolute';
            aLi[i].style.margin = 0;
        }

        for (var i = 0; i < aLi.length; i++) {
            aLi[i].index = i;
            aLi[i].onmousedown = function (ev) {
                var disX = ev.clientX - this.offsetLeft;
                var disY = ev.clientY - this.offsetTop;
                var _this = this;
                for (var i = 0; i < aLi.length; i++) {
                    aLi[i].style.zIndex = 0;
                }
                _this.style.zIndex++;
                document.onmousemove = function (ev) {
                    var x = ev.clientX - disX;
                    var y = ev.clientY - disY;
                    _this.style.left = x + 'px';
                    _this.style.top = y + 'px';
                    alert(1)
                    console.log(x, y);
                    for (var i = 0; i < aLi.length; i++) {
                        aLi[i].style.border = '';
                    }
                    //返回出来个最近的对象
                    var oNear = findNearest(_this);
                    if (oNear) {
                        oNear.style.border = '1px solid red';
                    }

                }
                document.onmouseup = function () {
                    document.onmousemove = null;
                    document.onmouseup = null;

                    var oNear = findNearest(_this);
                    var objL = aPos[_this.index].left;
                    var objT = aPos[_this.index].top;
                    if (oNear) {
                        oNear.style.border = '';
                        var oNearL = aPos[oNear.index].left;
                        var oNearT = aPos[oNear.index].top;
                        move(_this, {left: oNearL, top: oNearT});
                        move(oNear, {left: objL, top: objT});
                        var temp = _this.index;
                        _this.index = oNear.index;
                        oNear.index = temp;
                    } else {
                        //没撞到
                        move(_this, {top: objT, left: objL});
                    }
                }
                return false;
            };
        }

        function findNearest(obj) {

            var minVal = new Date().getTime();
            var minIndex = -1;

            for (var i = 0; i < aLi.length; i++) {
                if (obj == aLi[i]) {
                    continue
                }
                if (colltest(obj, aLi[i])) {

                    var val = getDis(obj, aLi[i]);

                    if (val < minVal) {
                        minVal = val;
                        minIndex = i;
                    }

                }
            }

            if (minIndex < 0) {
                return null;
            } else {
                return aLi[minIndex];
            }
        }


        function colltest(obj1, obj2) {
            var l1 = obj1.offsetLeft;
            var r1 = l1 + obj1.offsetWidth;
            var t1 = obj1.offsetTop;
            var b1 = t1 + obj1.offsetHeight;

            var l2 = obj2.offsetLeft;
            var r2 = l2 + obj2.offsetWidth;
            var t2 = obj2.offsetTop;
            var b2 = t2 + obj2.offsetHeight;

            if (r1 > l2 && b1 > t2 && l1 < r2 && t1 < b2) {
                //撞上了
                return true;
            } else {
                //没撞上
                return false;
            }

        }

        function getDis(obj1, obj2) {
            var b = obj1.offsetLeft - obj2.offsetLeft;
            var a = obj2.offsetTop - obj1.offsetTop;

            var c = Math.sqrt(a * a + b * b);
            return c;
        }*/
        /*分块翻转效果*/
    /*(function(){

            var oBox=document.querySelector('.wall-box');

            //布局转换
            var R=4;
            var C=7;
            for(var i=0; i<R;i++){
                for(var j=0;j<C;j++){
                    var oSpan=document.createElement('span');
                    var w=oBox.offsetWidth/C;
                    var h=oBox.offsetHeight/R;
                    oSpan.style.width=w+'px';
                    oSpan.style.height=h+'px';
                    oSpan.style.left=j*w+'px';
                    oSpan.style.top=i*h+'px';

                    oSpan.innerHTML='<i class="front"></i><i class="back"></i>';

                    var oFront=oSpan.children[0];
                    var oBack=oSpan.children[1];

                    oFront.style.backgroundImage='url(../img/0.jpg)';
                    oFront.style.backgroundPosition=-j*w+'px '+-i*h+'px';
                    oBack.style.backgroundImage='url(../img/1.jpg)';
                    oBack.style.backgroundPosition=-j*w+'px '+-i*h+'px';
                    oBox.appendChild(oSpan);

                    //自定义一个属性
                    oSpan.dataset.r=i;
                    oSpan.dataset.c=j;
                }
            }


            var aSpan=oBox.children;
            var iNow=0;
            var bReady=true;
            oBox.onclick=function(){
                if(!bReady)return;
                bReady=false;
                iNow++;
                for(var i=0;i<aSpan.length;i++){

                    var n=parseInt(aSpan[i].dataset.c)+parseInt(aSpan[i].dataset.r);
                    aSpan[i].style.transition='1s '+n*200+'ms';
                    aSpan[i].style.transform='perspective(800px) rotateY(180deg)';
                }
            };

            aSpan[aSpan.length-1].addEventListener('transitionend',function(){

                for(var i=0;i<aSpan.length;i++){
                    aSpan[i].style.transition='none';
                    aSpan[i].style.transform='perspective(800px) rotateY(0deg)';

                    aSpan[i].children[0].style.backgroundImage='url(../img/'+iNow%3+'.jpg)';
                    aSpan[i].children[1].style.backgroundImage='url(../img/'+(iNow+1)%3+'.jpg)';

                }

                bReady=true;

            },false);
    })();*/

},false)