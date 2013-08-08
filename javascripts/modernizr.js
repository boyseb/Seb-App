window.Modernizr = function(a, b, c) {
    function D(a) {
        j.cssText = a
    }
    function E(a, b) {
        return D(n.join(a + ";") + (b || ""))
    }
    function F(a, b) {
        return typeof a === b
    }
    function G(a, b) {
        return !!~("" + a).indexOf(b)
    }
    function H(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!G(e, "-") && j[e] !== c)
                return b == "pfx" ? e : !0
        }
        return !1
    }
    function I(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c)
                return d === !1 ? a[e] : F(f, "function") ? f.bind(d || b) : f
        }
        return !1
    }
    function J(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + p.join(d + " ") + d).split(" ");
        return F(b, "string") || F(b, "undefined") ? H(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), I(e, b, c))
    }
    function K() {
        e.input = function(c) {
            for (var d = 0, e = c.length; d < e; d++)
                u[c[d]] = c[d] in k;
            return u.list && (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), u
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), e.inputtypes = function(a) {
            for (var d = 0, e, f, h, i = a.length; d < i; d++)
                k.setAttribute("type", f = a[d]), e = k.type !== "text", e && (k.value = l, k.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k), h = b.defaultView, e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0, g.removeChild(k)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = k.checkValidity && k.checkValidity() === !1 : e = k.value != l)), t[a[d]] = !!e;
            return t
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var d = "2.6.2", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k = b.createElement("input"), l = ":)", m = {}.toString, n = " -webkit- -moz- -o- -ms- ".split(" "), o = "Webkit Moz O ms", p = o.split(" "), q = o.toLowerCase().split(" "), r = {svg: "http://www.w3.org/2000/svg"}, s = {}, t = {}, u = {}, v = [], w = v.slice, x, y = function(a, c, d, e) {
        var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body");
        if (parseInt(d, 10))
            while (d--)
                j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
        return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
    }, z = function(b) {
        var c = a.matchMedia || a.msMatchMedia;
        if (c)
            return c(b).matches;
        var d;
        return y("@media " + b + " { #" + h + " { position: absolute; } }", function(b) {
            d = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)["position"] == "absolute"
        }), d
    }, A = function() {
        function d(d, e) {
            e = e || b.createElement(a[d] || "div"), d = "on" + d;
            var f = d in e;
            return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = F(e[d], "function"), F(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f
        }
        var a = {select: "input",change: "input",submit: "form",reset: "form",error: "img",load: "img",abort: "img"};
        return d
    }(), B = {}.hasOwnProperty, C;
    !F(B, "undefined") && !F(B.call, "undefined") ? C = function(a, b) {
        return B.call(a, b)
    } : C = function(a, b) {
        return b in a && F(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function(b) {
        var c = this;
        if (typeof c != "function")
            throw new TypeError;
        var d = w.call(arguments, 1), e = function() {
            if (this instanceof e) {
                var a = function() {
                };
                a.prototype = c.prototype;
                var f = new a, g = c.apply(f, d.concat(w.call(arguments)));
                return Object(g) === g ? g : f
            }
            return c.apply(b, d.concat(w.call(arguments)))
        };
        return e
    }), s.flexbox = function() {
        return J("flexWrap")
    }, s.flexboxlegacy = function() {
        return J("boxDirection")
    }, s.canvas = function() {
        var a = b.createElement("canvas");
        return !!a.getContext && !!a.getContext("2d")
    }, s.canvastext = function() {
        return !!e.canvas && !!F(b.createElement("canvas").getContext("2d").fillText, "function")
    }, s.webgl = function() {
        return !!a.WebGLRenderingContext
    }, s.touch = function() {
        var c;
        return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : y(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
            c = a.offsetTop === 9
        }), c
    }, s.geolocation = function() {
        return "geolocation" in navigator
    }, s.postmessage = function() {
        return !!a.postMessage
    }, s.websqldatabase = function() {
        return !!a.openDatabase
    }, s.indexedDB = function() {
        return !!J("indexedDB", a)
    }, s.hashchange = function() {
        return A("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
    }, s.history = function() {
        return !!a.history && !!history.pushState
    }, s.draganddrop = function() {
        var a = b.createElement("div");
        return "draggable" in a || "ondragstart" in a && "ondrop" in a
    }, s.websockets = function() {
        return "WebSocket" in a || "MozWebSocket" in a
    }, s.rgba = function() {
        return D("background-color:rgba(150,255,150,.5)"), G(j.backgroundColor, "rgba")
    }, s.hsla = function() {
        return D("background-color:hsla(120,40%,100%,.5)"), G(j.backgroundColor, "rgba") || G(j.backgroundColor, "hsla")
    }, s.multiplebgs = function() {
        return D("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(j.background)
    }, s.backgroundsize = function() {
        return J("backgroundSize")
    }, s.borderimage = function() {
        return J("borderImage")
    }, s.borderradius = function() {
        return J("borderRadius")
    }, s.boxshadow = function() {
        return J("boxShadow")
    }, s.textshadow = function() {
        return b.createElement("div").style.textShadow === ""
    }, s.opacity = function() {
        return E("opacity:.55"), /^0.55$/.test(j.opacity)
    }, s.cssanimations = function() {
        return J("animationName")
    }, s.csscolumns = function() {
        return J("columnCount")
    }, s.cssgradients = function() {
        var a = "background-image:", b = "gradient(linear,left top,right bottom,from(#9f9),to(white));", c = "linear-gradient(left top,#9f9, white);";
        return D((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, -a.length)), G(j.backgroundImage, "gradient")
    }, s.cssreflections = function() {
        return J("boxReflect")
    }, s.csstransforms = function() {
        return !!J("transform")
    }, s.csstransforms3d = function() {
        var a = !!J("perspective");
        return a && "webkitPerspective" in g.style && y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
            a = b.offsetLeft === 9 && b.offsetHeight === 3
        }), a
    }, s.csstransitions = function() {
        return J("transition")
    }, s.fontface = function() {
        var a;
        return y('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
            var e = b.getElementById("smodernizr"), f = e.sheet || e.styleSheet, g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
            a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0
        }), a
    }, s.generatedcontent = function() {
        var a;
        return y(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
            a = b.offsetHeight >= 3
        }), a
    }, s.video = function() {
        var a = b.createElement("video"), c = !1;
        try {
            if (c = !!a.canPlayType)
                c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
        } catch (d) {
        }
        return c
    }, s.audio = function() {
        var a = b.createElement("audio"), c = !1;
        try {
            if (c = !!a.canPlayType)
                c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "")
        } catch (d) {
        }
        return c
    }, s.localstorage = function() {
        try {
            return localStorage.setItem(h, h), localStorage.removeItem(h), !0
        } catch (a) {
            return !1
        }
    }, s.sessionstorage = function() {
        try {
            return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0
        } catch (a) {
            return !1
        }
    }, s.webworkers = function() {
        return !!a.Worker
    }, s.applicationcache = function() {
        return !!a.applicationCache
    }, s.svg = function() {
        return !!b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect
    }, s.inlinesvg = function() {
        var a = b.createElement("div");
        return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == r.svg
    }, s.smil = function() {
        return !!b.createElementNS && /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate")))
    }, s.svgclippaths = function() {
        return !!b.createElementNS && /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath")))
    };
    for (var L in s)
        C(s, L) && (x = L.toLowerCase(), e[x] = s[L](), v.push((e[x] ? "" : "no-") + x));
    return e.input || K(), e.addTest = function(a, b) {
        if (typeof a == "object")
            for (var d in a)
                C(a, d) && e.addTest(d, a[d]);
        else {
            a = a.toLowerCase();
            if (e[a] !== c)
                return e;
            b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
        }
        return e
    }, D(""), i = k = null, function(a, b) {
        function k(a, b) {
            var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
        }
        function l() {
            var a = r.elements;
            return typeof a == "string" ? a.split(" ") : a
        }
        function m(a) {
            var b = i[a[g]];
            return b || (b = {}, h++, a[g] = h, i[h] = b), b
        }
        function n(a, c, f) {
            c || (c = b);
            if (j)
                return c.createElement(a);
            f || (f = m(c));
            var g;
            return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
        }
        function o(a, c) {
            a || (a = b);
            if (j)
                return a.createDocumentFragment();
            c = c || m(a);
            var d = c.frag.cloneNode(), e = 0, f = l(), g = f.length;
            for (; e < g; e++)
                d.createElement(f[e]);
            return d
        }
        function p(a, b) {
            b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                return r.shivMethods ? n(c, a, b) : b.createElem(c)
            }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) {
                return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
            }) + ");return n}")(r, b.frag)
        }
        function q(a) {
            a || (a = b);
            var c = m(a);
            return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
        }
        var c = a.html5 || {}, d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, f, g = "_html5shiv", h = 0, i = {}, j;
        (function() {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function() {
                    b.createElement("a");
                    var a = b.createDocumentFragment();
                    return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                }()
            } catch (c) {
                f = !0, j = !0
            }
        })();
        var r = {elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS: c.shivCSS !== !1,supportsUnknownElements: j,shivMethods: c.shivMethods !== !1,type: "default",shivDocument: q,createElement: n,createDocumentFragment: o};
        a.html5 = r, q(b)
    }(this, b), e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, e.mq = z, e.hasEvent = A, e.testProp = function(a) {
        return H([a])
    }, e.testAllProps = J, e.testStyles = y, e.prefixed = function(a, b, c) {
        return b ? J(a, b, c) : J(a, "pfx")
    }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + v.join(" ") : ""), e
}(this, this.document), Modernizr.addTest("csspositionsticky", function() {
    var a = "position:", b = "sticky", c = document.createElement("modernizr"), d = c.style;
    return d.cssText = a + Modernizr._prefixes.join(b + ";" + a).slice(0, -a.length), d.position.indexOf(b) !== -1
}), Modernizr.addTest("filereader", function() {
    return !!(window.File && window.FileList && window.FileReader)
}), Modernizr.addTest("eventsource", !!window.EventSource), Modernizr.addTest("xhr2", "FormData" in window), function() {
    function a(b, c) {
        b instanceof a ? (this.enc = b.enc, this.pos = b.pos) : (this.enc = b, this.pos = c)
    }
    function b(a, b, c, d, e) {
        this.stream = a, this.header = b, this.length = c, this.tag = d, this.sub = e
    }
    function e(a) {
        var b, e, f = "";
        for (b = 0; b + 3 <= a.length; b += 3)
            e = parseInt(a.substring(b, b + 3), 16), f += c.charAt(e >> 6) + c.charAt(e & 63);
        b + 1 == a.length ? (e = parseInt(a.substring(b, b + 1), 16), f += c.charAt(e << 2)) : b + 2 == a.length && (e = parseInt(a.substring(b, b + 2), 16), f += c.charAt(e >> 2) + c.charAt((e & 3) << 4));
        while ((f.length & 3) > 0)
            f += d;
        return f
    }
    function f(a) {
        var b = "", e, f = 0, g;
        for (e = 0; e < a.length; ++e) {
            if (a.charAt(e) == d)
                break;
            v = c.indexOf(a.charAt(e));
            if (v < 0)
                continue;
            f == 0 ? (b += u(v >> 2), g = v & 3, f = 1) : f == 1 ? (b += u(g << 2 | v >> 4), g = v & 15, f = 2) : f == 2 ? (b += u(g), b += u(v >> 2), g = v & 3, f = 3) : (b += u(g << 2 | v >> 4), b += u(v & 15), f = 0)
        }
        return f == 1 && (b += u(g << 2)), b
    }
    function g(a) {
        var b = f(a), c, d = new Array;
        for (c = 0; 2 * c < b.length; ++c)
            d[c] = parseInt(b.substring(2 * c, 2 * c + 2), 16);
        return d
    }
    function k(a, b, c) {
        a != null && ("number" == typeof a ? this.fromNumber(a, b, c) : b == null && "string" != typeof a ? this.fromString(a, 256) : this.fromString(a, b))
    }
    function l() {
        return new k(null)
    }
    function m(a, b, c, d, e, f) {
        while (--f >= 0) {
            var g = b * this[a++] + c[d] + e;
            e = Math.floor(g / 67108864), c[d++] = g & 67108863
        }
        return e
    }
    function n(a, b, c, d, e, f) {
        var g = b & 32767, h = b >> 15;
        while (--f >= 0) {
            var i = this[a] & 32767, j = this[a++] >> 15, k = h * i + j * g;
            i = g * i + ((k & 32767) << 15) + c[d] + (e & 1073741823), e = (i >>> 30) + (k >>> 15) + h * j + (e >>> 30), c[d++] = i & 1073741823
        }
        return e
    }
    function o(a, b, c, d, e, f) {
        var g = b & 16383, h = b >> 14;
        while (--f >= 0) {
            var i = this[a] & 16383, j = this[a++] >> 14, k = h * i + j * g;
            i = g * i + ((k & 16383) << 14) + c[d] + e, e = (i >> 28) + (k >> 14) + h * j, c[d++] = i & 268435455
        }
        return e
    }
    function u(a) {
        return q.charAt(a)
    }
    function w(a, b) {
        var c = r[a.charCodeAt(b)];
        return c == null ? -1 : c
    }
    function x(a) {
        for (var b = this.t - 1; b >= 0; --b)
            a[b] = this[b];
        a.t = this.t, a.s = this.s
    }
    function y(a) {
        this.t = 1, this.s = a < 0 ? -1 : 0, a > 0 ? this[0] = a : a < -1 ? this[0] = a + DV : this.t = 0
    }
    function z(a) {
        var b = l();
        return b.fromInt(a), b
    }
    function A(a, b) {
        var c;
        if (b == 16)
            c = 4;
        else if (b == 8)
            c = 3;
        else if (b == 256)
            c = 8;
        else if (b == 2)
            c = 1;
        else if (b == 32)
            c = 5;
        else {
            if (b != 4) {
                this.fromRadix(a, b);
                return
            }
            c = 2
        }
        this.t = 0, this.s = 0;
        var d = a.length, e = !1, f = 0;
        while (--d >= 0) {
            var g = c == 8 ? a[d] & 255 : w(a, d);
            if (g < 0) {
                a.charAt(d) == "-" && (e = !0);
                continue
            }
            e = !1, f == 0 ? this[this.t++] = g : f + c > this.DB ? (this[this.t - 1] |= (g & (1 << this.DB - f) - 1) << f, this[this.t++] = g >> this.DB - f) : this[this.t - 1] |= g << f, f += c, f >= this.DB && (f -= this.DB)
        }
        c == 8 && (a[0] & 128) != 0 && (this.s = -1, f > 0 && (this[this.t - 1] |= (1 << this.DB - f) - 1 << f)), this.clamp(), e && k.ZERO.subTo(this, this)
    }
    function B() {
        var a = this.s & this.DM;
        while (this.t > 0 && this[this.t - 1] == a)
            --this.t
    }
    function C(a) {
        if (this.s < 0)
            return "-" + this.negate().toString(a);
        var b;
        if (a == 16)
            b = 4;
        else if (a == 8)
            b = 3;
        else if (a == 2)
            b = 1;
        else if (a == 32)
            b = 5;
        else {
            if (a != 4)
                return this.toRadix(a);
            b = 2
        }
        var c = (1 << b) - 1, d, e = !1, f = "", g = this.t, h = this.DB - g * this.DB % b;
        if (g-- > 0) {
            h < this.DB && (d = this[g] >> h) > 0 && (e = !0, f = u(d));
            while (g >= 0)
                h < b ? (d = (this[g] & (1 << h) - 1) << b - h, d |= this[--g] >> (h += this.DB - b)) : (d = this[g] >> (h -= b) & c, h <= 0 && (h += this.DB, --g)), d > 0 && (e = !0), e && (f += u(d))
        }
        return e ? f : "0"
    }
    function D() {
        var a = l();
        return k.ZERO.subTo(this, a), a
    }
    function E() {
        return this.s < 0 ? this.negate() : this
    }
    function F(a) {
        var b = this.s - a.s;
        if (b != 0)
            return b;
        var c = this.t;
        b = c - a.t;
        if (b != 0)
            return this.s < 0 ? -b : b;
        while (--c >= 0)
            if ((b = this[c] - a[c]) != 0)
                return b;
        return 0
    }
    function G(a) {
        var b = 1, c;
        return (c = a >>> 16) != 0 && (a = c, b += 16), (c = a >> 8) != 0 && (a = c, b += 8), (c = a >> 4) != 0 && (a = c, b += 4), (c = a >> 2) != 0 && (a = c, b += 2), (c = a >> 1) != 0 && (a = c, b += 1), b
    }
    function H() {
        return this.t <= 0 ? 0 : this.DB * (this.t - 1) + G(this[this.t - 1] ^ this.s & this.DM)
    }
    function I(a, b) {
        var c;
        for (c = this.t - 1; c >= 0; --c)
            b[c + a] = this[c];
        for (c = a - 1; c >= 0; --c)
            b[c] = 0;
        b.t = this.t + a, b.s = this.s
    }
    function J(a, b) {
        for (var c = a; c < this.t; ++c)
            b[c - a] = this[c];
        b.t = Math.max(this.t - a, 0), b.s = this.s
    }
    function K(a, b) {
        var c = a % this.DB, d = this.DB - c, e = (1 << d) - 1, f = Math.floor(a / this.DB), g = this.s << c & this.DM, h;
        for (h = this.t - 1; h >= 0; --h)
            b[h + f + 1] = this[h] >> d | g, g = (this[h] & e) << c;
        for (h = f - 1; h >= 0; --h)
            b[h] = 0;
        b[f] = g, b.t = this.t + f + 1, b.s = this.s, b.clamp()
    }
    function L(a, b) {
        b.s = this.s;
        var c = Math.floor(a / this.DB);
        if (c >= this.t) {
            b.t = 0;
            return
        }
        var d = a % this.DB, e = this.DB - d, f = (1 << d) - 1;
        b[0] = this[c] >> d;
        for (var g = c + 1; g < this.t; ++g)
            b[g - c - 1] |= (this[g] & f) << e, b[g - c] = this[g] >> d;
        d > 0 && (b[this.t - c - 1] |= (this.s & f) << e), b.t = this.t - c, b.clamp()
    }
    function M(a, b) {
        var c = 0, d = 0, e = Math.min(a.t, this.t);
        while (c < e)
            d += this[c] - a[c], b[c++] = d & this.DM, d >>= this.DB;
        if (a.t < this.t) {
            d -= a.s;
            while (c < this.t)
                d += this[c], b[c++] = d & this.DM, d >>= this.DB;
            d += this.s
        } else {
            d += this.s;
            while (c < a.t)
                d -= a[c], b[c++] = d & this.DM, d >>= this.DB;
            d -= a.s
        }
        b.s = d < 0 ? -1 : 0, d < -1 ? b[c++] = this.DV + d : d > 0 && (b[c++] = d), b.t = c, b.clamp()
    }
    function N(a, b) {
        var c = this.abs(), d = a.abs(), e = c.t;
        b.t = e + d.t;
        while (--e >= 0)
            b[e] = 0;
        for (e = 0; e < d.t; ++e)
            b[e + c.t] = c.am(0, d[e], b, e, 0, c.t);
        b.s = 0, b.clamp(), this.s != a.s && k.ZERO.subTo(b, b)
    }
    function O(a) {
        var b = this.abs(), c = a.t = 2 * b.t;
        while (--c >= 0)
            a[c] = 0;
        for (c = 0; c < b.t - 1; ++c) {
            var d = b.am(c, b[c], a, 2 * c, 0, 1);
            (a[c + b.t] += b.am(c + 1, 2 * b[c], a, 2 * c + 1, d, b.t - c - 1)) >= b.DV && (a[c + b.t] -= b.DV, a[c + b.t + 1] = 1)
        }
        a.t > 0 && (a[a.t - 1] += b.am(c, b[c], a, 2 * c, 0, 1)), a.s = 0, a.clamp()
    }
    function P(a, b, c) {
        var d = a.abs();
        if (d.t <= 0)
            return;
        var e = this.abs();
        if (e.t < d.t) {
            b != null && b.fromInt(0), c != null && this.copyTo(c);
            return
        }
        c == null && (c = l());
        var f = l(), g = this.s, h = a.s, i = this.DB - G(d[d.t - 1]);
        i > 0 ? (d.lShiftTo(i, f), e.lShiftTo(i, c)) : (d.copyTo(f), e.copyTo(c));
        var j = f.t, m = f[j - 1];
        if (m == 0)
            return;
        var n = m * (1 << this.F1) + (j > 1 ? f[j - 2] >> this.F2 : 0), o = this.FV / n, p = (1 << this.F1) / n, q = 1 << this.F2, r = c.t, s = r - j, t = b == null ? l() : b;
        f.dlShiftTo(s, t), c.compareTo(t) >= 0 && (c[c.t++] = 1, c.subTo(t, c)), k.ONE.dlShiftTo(j, t), t.subTo(f, f);
        while (f.t < j)
            f[f.t++] = 0;
        while (--s >= 0) {
            var u = c[--r] == m ? this.DM : Math.floor(c[r] * o + (c[r - 1] + q) * p);
            if ((c[r] += f.am(0, u, c, s, 0, j)) < u) {
                f.dlShiftTo(s, t), c.subTo(t, c);
                while (c[r] < --u)
                    c.subTo(t, c)
            }
        }
        b != null && (c.drShiftTo(j, b), g != h && k.ZERO.subTo(b, b)), c.t = j, c.clamp(), i > 0 && c.rShiftTo(i, c), g < 0 && k.ZERO.subTo(c, c)
    }
    function Q(a) {
        var b = l();
        return this.abs().divRemTo(a, null, b), this.s < 0 && b.compareTo(k.ZERO) > 0 && a.subTo(b, b), b
    }
    function R(a) {
        this.m = a
    }
    function S(a) {
        return a.s < 0 || a.compareTo(this.m) >= 0 ? a.mod(this.m) : a
    }
    function T(a) {
        return a
    }
    function U(a) {
        a.divRemTo(this.m, null, a)
    }
    function V(a, b, c) {
        a.multiplyTo(b, c), this.reduce(c)
    }
    function W(a, b) {
        a.squareTo(b), this.reduce(b)
    }
    function X() {
        if (this.t < 1)
            return 0;
        var a = this[0];
        if ((a & 1) == 0)
            return 0;
        var b = a & 3;
        return b = b * (2 - (a & 15) * b) & 15, b = b * (2 - (a & 255) * b) & 255, b = b * (2 - ((a & 65535) * b & 65535)) & 65535, b = b * (2 - a * b % this.DV) % this.DV, b > 0 ? this.DV - b : -b
    }
    function Y(a) {
        this.m = a, this.mp = a.invDigit(), this.mpl = this.mp & 32767, this.mph = this.mp >> 15, this.um = (1 << a.DB - 15) - 1, this.mt2 = 2 * a.t
    }
    function Z(a) {
        var b = l();
        return a.abs().dlShiftTo(this.m.t, b), b.divRemTo(this.m, null, b), a.s < 0 && b.compareTo(k.ZERO) > 0 && this.m.subTo(b, b), b
    }
    function $(a) {
        var b = l();
        return a.copyTo(b), this.reduce(b), b
    }
    function _(a) {
        while (a.t <= this.mt2)
            a[a.t++] = 0;
        for (var b = 0; b < this.m.t; ++b) {
            var c = a[b] & 32767, d = c * this.mpl + ((c * this.mph + (a[b] >> 15) * this.mpl & this.um) << 15) & a.DM;
            c = b + this.m.t, a[c] += this.m.am(0, d, a, b, 0, this.m.t);
            while (a[c] >= a.DV)
                a[c] -= a.DV, a[++c]++
        }
        a.clamp(), a.drShiftTo(this.m.t, a), a.compareTo(this.m) >= 0 && a.subTo(this.m, a)
    }
    function ab(a, b) {
        a.squareTo(b), this.reduce(b)
    }
    function bb(a, b, c) {
        a.multiplyTo(b, c), this.reduce(c)
    }
    function cb() {
        return (this.t > 0 ? this[0] & 1 : this.s) == 0
    }
    function db(a, b) {
        if (a > 4294967295 || a < 1)
            return k.ONE;
        var c = l(), d = l(), e = b.convert(this), f = G(a) - 1;
        e.copyTo(c);
        while (--f >= 0) {
            b.sqrTo(c, d);
            if ((a & 1 << f) > 0)
                b.mulTo(d, e, c);
            else {
                var g = c;
                c = d, d = g
            }
        }
        return b.revert(c)
    }
    function eb(a, b) {
        var c;
        return a < 256 || b.isEven() ? c = new R(b) : c = new Y(b), this.exp(a, c)
    }
    function fb(a, b) {
        return new k(a, b)
    }
    function gb(a, b) {
        var c = "", d = 0;
        while (d + b < a.length)
            c += a.substring(d, d + b) + "\n", d += b;
        return c + a.substring(d, a.length)
    }
    function hb(a) {
        return a < 16 ? "0" + a.toString(16) : a.toString(16)
    }
    function ib(a, b) {
        if (b < a.length + 11)
            return alert("Message too long for RSA"), null;
        var c = new Array, d = a.length - 1;
        while (d >= 0 && b > 0) {
            var e = a.charCodeAt(d--);
            e < 128 ? c[--b] = e : e > 127 && e < 2048 ? (c[--b] = e & 63 | 128, c[--b] = e >> 6 | 192) : (c[--b] = e & 63 | 128, c[--b] = e >> 6 & 63 | 128, c[--b] = e >> 12 | 224)
        }
        c[--b] = 0;
        var f = 0, g = 0, h = 0;
        while (b > 2)
            h == 0 && (g = ob.random.randomWords(1, 0)[0]), f = g >> h & 255, h = (h + 8) % 32, f != 0 && (c[--b] = f);
        return c[--b] = 2, c[--b] = 0, new k(c)
    }
    function jb() {
        this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, this.dmq1 = null, this.coeff = null
    }
    function kb(a, b) {
        a != null && b != null && a.length > 0 && b.length > 0 ? (this.n = fb(a, 16), this.e = parseInt(b, 16)) : alert("Invalid RSA public key")
    }
    function lb(a) {
        return a.modPowInt(this.e, this.n)
    }
    function mb(a) {
        var b = ib(a, this.n.bitLength() + 7 >> 3);
        if (b == null)
            return null;
        var c = this.doPublic(b);
        if (c == null)
            return null;
        var d = c.toString(16);
        return (d.length & 1) == 0 ? d : "0" + d
    }
    function nb(a) {
        var b = this.encrypt(a);
        return b ? e(b) : null
    }
    a.prototype.get = function(a) {
        a == undefined && (a = this.pos++);
        if (a >= this.enc.length)
            throw "Requesting byte offset " + a + " on a stream of length " + this.enc.length;
        return this.enc[a]
    }, a.prototype.hexDigits = "0123456789ABCDEF", a.prototype.hexByte = function(a) {
        return this.hexDigits.charAt(a >> 4 & 15) + this.hexDigits.charAt(a & 15)
    }, a.prototype.hexDump = function(a, b) {
        var c = "";
        for (var d = a; d < b; ++d) {
            c += this.hexByte(this.get(d));
            switch (d & 15) {
                case 7:
                    c += "  ";
                    break;
                case 15:
                    c += "\n";
                    break;
                default:
                    c += " "
            }
        }
        return c
    }, a.prototype.parseStringISO = function(a, b) {
        var c = "";
        for (var d = a; d < b; ++d)
            c += String.fromCharCode(this.get(d));
        return c
    }, a.prototype.parseStringUTF = function(a, b) {
        var c = "", d = 0;
        for (var e = a; e < b; ) {
            var d = this.get(e++);
            d < 128 ? c += String.fromCharCode(d) : d > 191 && d < 224 ? c += String.fromCharCode((d & 31) << 6 | this.get(e++) & 63) : c += String.fromCharCode((d & 15) << 12 | (this.get(e++) & 63) << 6 | this.get(e++) & 63)
        }
        return c
    }, a.prototype.reTime = /^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/, a.prototype.parseTime = function(a, b) {
        var c = this.parseStringISO(a, b), d = this.reTime.exec(c);
        return d ? (c = d[1] + "-" + d[2] + "-" + d[3] + " " + d[4], d[5] && (c += ":" + d[5], d[6] && (c += ":" + d[6], d[7] && (c += "." + d[7]))), d[8] && (c += " UTC", d[8] != "Z" && (c += d[8], d[9] && (c += ":" + d[9]))), c) : "Unrecognized time: " + c
    }, a.prototype.parseInteger = function(a, b) {
        var c = b - a;
        if (c > 4) {
            c <<= 3;
            var d = this.get(a);
            if (d == 0)
                c -= 8;
            else
                while (d < 128)
                    d <<= 1, --c;
            return "(" + c + " bit)"
        }
        var e = 0;
        for (var f = a; f < b; ++f)
            e = e << 8 | this.get(f);
        return e
    }, a.prototype.parseBitString = function(a, b) {
        var c = this.get(a), d = (b - a - 1 << 3) - c, e = "(" + d + " bit)";
        if (d <= 20) {
            var f = c;
            e += " ";
            for (var g = b - 1; g > a; --g) {
                var h = this.get(g);
                for (var i = f; i < 8; ++i)
                    e += h >> i & 1 ? "1" : "0";
                f = 0
            }
        }
        return e
    }, a.prototype.parseOctetString = function(a, b) {
        var c = b - a, d = "(" + c + " byte) ";
        c > 20 && (b = a + 20);
        for (var e = a; e < b; ++e)
            d += this.hexByte(this.get(e));
        return c > 20 && (d += String.fromCharCode(8230)), d
    }, a.prototype.parseOID = function(a, b) {
        var c, d = 0, e = 0;
        for (var f = a; f < b; ++f) {
            var g = this.get(f);
            d = d << 7 | g & 127, e += 7, g & 128 || (c == undefined ? c = parseInt(d / 40) + "." + d % 40 : c += "." + (e >= 31 ? "bigint" : d), d = e = 0), c += String.fromCharCode()
        }
        return c
    }, b.prototype.typeName = function() {
        if (this.tag == undefined)
            return "unknown";
        var a = this.tag >> 6, b = this.tag >> 5 & 1, c = this.tag & 31;
        switch (a) {
            case 0:
                switch (c) {
                    case 0:
                        return "EOC";
                    case 1:
                        return "BOOLEAN";
                    case 2:
                        return "INTEGER";
                    case 3:
                        return "BIT_STRING";
                    case 4:
                        return "OCTET_STRING";
                    case 5:
                        return "NULL";
                    case 6:
                        return "OBJECT_IDENTIFIER";
                    case 7:
                        return "ObjectDescriptor";
                    case 8:
                        return "EXTERNAL";
                    case 9:
                        return "REAL";
                    case 10:
                        return "ENUMERATED";
                    case 11:
                        return "EMBEDDED_PDV";
                    case 12:
                        return "UTF8String";
                    case 16:
                        return "SEQUENCE";
                    case 17:
                        return "SET";
                    case 18:
                        return "NumericString";
                    case 19:
                        return "PrintableString";
                    case 20:
                        return "TeletexString";
                    case 21:
                        return "VideotexString";
                    case 22:
                        return "IA5String";
                    case 23:
                        return "UTCTime";
                    case 24:
                        return "GeneralizedTime";
                    case 25:
                        return "GraphicString";
                    case 26:
                        return "VisibleString";
                    case 27:
                        return "GeneralString";
                    case 28:
                        return "UniversalString";
                    case 30:
                        return "BMPString";
                    default:
                        return "Universal_" + c.toString(16)
                }
                ;
            case 1:
                return "Application_" + c.toString(16);
            case 2:
                return "[" + c + "]";
            case 3:
                return "Private_" + c.toString(16)
        }
    }, b.prototype.content = function() {
        if (this.tag == undefined)
            return null;
        var a = this.tag >> 6;
        if (a != 0)
            return this.sub == null ? null : "(" + this.sub.length + ")";
        var b = this.tag & 31, c = this.posContent(), d = Math.abs(this.length);
        switch (b) {
            case 1:
                return this.stream.get(c) == 0 ? "false" : "true";
            case 2:
                return this.stream.parseInteger(c, c + d);
            case 3:
                return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(c, c + d);
            case 4:
                return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(c, c + d);
            case 6:
                return this.stream.parseOID(c, c + d);
            case 16:
            case 17:
                return "(" + this.sub.length + " elem)";
            case 12:
                return this.stream.parseStringUTF(c, c + d);
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 26:
                return this.stream.parseStringISO(c, c + d);
            case 23:
            case 24:
                return this.stream.parseTime(c, c + d)
        }
        return null
    }, b.prototype.toString = function() {
        return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (this.sub == null ? "null" : this.sub.length) + "]"
    }, b.prototype.print = function(a) {
        a == undefined && (a = ""), document.writeln(a + this);
        if (this.sub != null) {
            a += "  ";
            for (var b = 0, c = this.sub.length; b < c; ++b)
                this.sub[b].print(a)
        }
    }, b.prototype.toPrettyString = function(a) {
        a == undefined && (a = "");
        var b = a + this.typeName() + " @" + this.stream.pos;
        this.length >= 0 && (b += "+"), b += this.length, this.tag & 32 ? b += " (constructed)" : (this.tag == 3 || this.tag == 4) && this.sub != null && (b += " (encapsulates)"), b += "\n";
        if (this.sub != null) {
            a += "  ";
            for (var c = 0, d = this.sub.length; c < d; ++c)
                b += this.sub[c].toPrettyString(a)
        }
        return b
    }, b.prototype.posStart = function() {
        return this.stream.pos
    }, b.prototype.posContent = function() {
        return this.stream.pos + this.header
    }, b.prototype.posEnd = function() {
        return this.stream.pos + this.header + Math.abs(this.length)
    }, b.decodeLength = function(a) {
        var b = a.get(), c = b & 127;
        if (c == b)
            return c;
        if (c > 3)
            throw "Length over 24 bits not supported at position " + (a.pos - 1);
        if (c == 0)
            return -1;
        b = 0;
        for (var d = 0; d < c; ++d)
            b = b << 8 | a.get();
        return b
    }, b.hasContent = function(c, d, e) {
        if (c & 32)
            return !0;
        if (c < 3 || c > 4)
            return !1;
        var f = new a(e);
        c == 3 && f.get();
        var g = f.get();
        if (g >> 6 & 1)
            return !1;
        try {
            var h = b.decodeLength(f);
            return f.pos - e.pos + h == d
        } catch (i) {
            return !1
        }
    }, b.decode = function(c) {
        c instanceof a || (c = new a(c, 0));
        var d = new a(c), e = c.get(), f = b.decodeLength(c), g = c.pos - d.pos, h = null;
        if (b.hasContent(e, f, c)) {
            var i = c.pos;
            e == 3 && c.get(), h = [];
            if (f >= 0) {
                var j = i + f;
                while (c.pos < j)
                    h[h.length] = b.decode(c);
                if (c.pos != j)
                    throw "Content size is not correct for container starting at offset " + i
            } else
                try {
                    for (; ; ) {
                        var k = b.decode(c);
                        if (k.tag == 0)
                            break;
                        h[h.length] = k
                    }
                    f = i - c.pos
                } catch (l) {
                    throw "Exception while decoding undefined length content: " + l
                }
        } else
            c.pos += f;
        return new b(d, g, f, e, h)
    };
    var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", d = "=", h, i = 0xdeadbeefcafe, j = (i & 16777215) == 15715070;
    j && navigator.appName == "Microsoft Internet Explorer" ? (k.prototype.am = n, h = 30) : j && navigator.appName != "Netscape" ? (k.prototype.am = m, h = 26) : (k.prototype.am = o, h = 28), k.prototype.DB = h, k.prototype.DM = (1 << h) - 1, k.prototype.DV = 1 << h;
    var p = 52;
    k.prototype.FV = Math.pow(2, p), k.prototype.F1 = p - h, k.prototype.F2 = 2 * h - p;
    var q = "0123456789abcdefghijklmnopqrstuvwxyz", r = new Array, s, t;
    s = "0".charCodeAt(0);
    for (t = 0; t <= 9; ++t)
        r[s++] = t;
    s = "a".charCodeAt(0);
    for (t = 10; t < 36; ++t)
        r[s++] = t;
    s = "A".charCodeAt(0);
    for (t = 10; t < 36; ++t)
        r[s++] = t;
    R.prototype.convert = S, R.prototype.revert = T, R.prototype.reduce = U, R.prototype.mulTo = V, R.prototype.sqrTo = W, Y.prototype.convert = Z, Y.prototype.revert = $, Y.prototype.reduce = _, Y.prototype.mulTo = bb, Y.prototype.sqrTo = ab, k.prototype.copyTo = x, k.prototype.fromInt = y, k.prototype.fromString = A, k.prototype.clamp = B, k.prototype.dlShiftTo = I, k.prototype.drShiftTo = J, k.prototype.lShiftTo = K, k.prototype.rShiftTo = L, k.prototype.subTo = M, k.prototype.multiplyTo = N, k.prototype.squareTo = O, k.prototype.divRemTo = P, k.prototype.invDigit = X, k.prototype.isEven = cb, k.prototype.exp = db, k.prototype.toString = C, k.prototype.negate = D, k.prototype.abs = E, k.prototype.compareTo = F, k.prototype.bitLength = H, k.prototype.mod = Q, k.prototype.modPowInt = eb, k.ZERO = z(0), k.ONE = z(1), jb.prototype.doPublic = lb, jb.prototype.setPublic = kb, jb.prototype.encrypt = mb, jb.prototype.encrypt_b64 = nb, "use strict";
    var ob = {cipher: {},hash: {},keyexchange: {},mode: {},misc: {},codec: {},exception: {corrupt: function(a) {
                this.toString = function() {
                    return "CORRUPT: " + this.message
                }, this.message = a
            },invalid: function(a) {
                this.toString = function() {
                    return "INVALID: " + this.message
                }, this.message = a
            },bug: function(a) {
                this.toString = function() {
                    return "BUG: " + this.message
                }, this.message = a
            },notReady: function(a) {
                this.toString = function() {
                    return "NOT READY: " + this.message
                }, this.message = a
            }}};
    typeof module != "undefined" && module.exports && (module.exports = ob), ob.cipher.aes = function(a) {
        this._tables[0][0][0] || this._precompute();
        var b, c, d, e, f, g = this._tables[0][4], h = this._tables[1], i = a.length, j = 1;
        if (i !== 4 && i !== 6 && i !== 8)
            throw new ob.exception.invalid("invalid aes key size");
        this._key = [e = a.slice(0), f = []];
        for (b = i; b < 4 * i + 28; b++) {
            d = e[b - 1];
            if (b % i === 0 || i === 8 && b % i === 4)
                d = g[d >>> 24] << 24 ^ g[d >> 16 & 255] << 16 ^ g[d >> 8 & 255] << 8 ^ g[d & 255], b % i === 0 && (d = d << 8 ^ d >>> 24 ^ j << 24, j = j << 1 ^ (j >> 7) * 283);
            e[b] = e[b - i] ^ d
        }
        for (c = 0; b; c++, b--)
            d = e[c & 3 ? b : b - 4], b <= 4 || c < 4 ? f[c] = d : f[c] = h[0][g[d >>> 24]] ^ h[1][g[d >> 16 & 255]] ^ h[2][g[d >> 8 & 255]] ^ h[3][g[d & 255]]
    }, ob.cipher.aes.prototype = {encrypt: function(a) {
            return this._crypt(a, 0)
        },decrypt: function(a) {
            return this._crypt(a, 1)
        },_tables: [[[], [], [], [], []], [[], [], [], [], []]],_precompute: function() {
            var a = this._tables[0], b = this._tables[1], c = a[4], d = b[4], e, f, g, h = [], i = [], j, k, l, m, n, o;
            for (e = 0; e < 256; e++)
                i[(h[e] = e << 1 ^ (e >> 7) * 283) ^ e] = e;
            for (f = g = 0; !c[f]; f ^= j || 1, g = i[g] || 1) {
                m = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4, m = m >> 8 ^ m & 255 ^ 99, c[f] = m, d[m] = f, l = h[k = h[j = h[f]]], o = l * 16843009 ^ k * 65537 ^ j * 257 ^ f * 16843008, n = h[m] * 257 ^ m * 16843008;
                for (e = 0; e < 4; e++)
                    a[e][f] = n = n << 24 ^ n >>> 8, b[e][m] = o = o << 24 ^ o >>> 8
            }
            for (e = 0; e < 5; e++)
                a[e] = a[e].slice(0), b[e] = b[e].slice(0)
        },_crypt: function(a, b) {
            if (a.length !== 4)
                throw new ob.exception.invalid("invalid aes block size");
            var c = this._key[b], d = a[0] ^ c[0], e = a[b ? 3 : 1] ^ c[1], f = a[2] ^ c[2], g = a[b ? 1 : 3] ^ c[3], h, i, j, k = c.length / 4 - 2, l, m = 4, n = [0, 0, 0, 0], o = this._tables[b], p = o[0], q = o[1], r = o[2], s = o[3], t = o[4];
            for (l = 0; l < k; l++)
                h = p[d >>> 24] ^ q[e >> 16 & 255] ^ r[f >> 8 & 255] ^ s[g & 255] ^ c[m], i = p[e >>> 24] ^ q[f >> 16 & 255] ^ r[g >> 8 & 255] ^ s[d & 255] ^ c[m + 1], j = p[f >>> 24] ^ q[g >> 16 & 255] ^ r[d >> 8 & 255] ^ s[e & 255] ^ c[m + 2], g = p[g >>> 24] ^ q[d >> 16 & 255] ^ r[e >> 8 & 255] ^ s[f & 255] ^ c[m + 3], m += 4, d = h, e = i, f = j;
            for (l = 0; l < 4; l++)
                n[b ? 3 & -l : l] = t[d >>> 24] << 24 ^ t[e >> 16 & 255] << 16 ^ t[f >> 8 & 255] << 8 ^ t[g & 255] ^ c[m++], h = d, d = e, e = f, f = g, g = h;
            return n
        }}, ob.bitArray = {bitSlice: function(a, b, c) {
            return a = ob.bitArray._shiftRight(a.slice(b / 32), 32 - (b & 31)).slice(1), c === undefined ? a : ob.bitArray.clamp(a, c - b)
        },extract: function(a, b, c) {
            var d, e = Math.floor(-b - c & 31);
            return (b + c - 1 ^ b) & -32 ? d = a[b / 32 | 0] << 32 - e ^ a[b / 32 + 1 | 0] >>> e : d = a[b / 32 | 0] >>> e, d & (1 << c) - 1
        },concat: function(a, b) {
            if (a.length === 0 || b.length === 0)
                return a.concat(b);
            var c, d, e = a[a.length - 1], f = ob.bitArray.getPartial(e);
            return f === 32 ? a.concat(b) : ob.bitArray._shiftRight(b, f, e | 0, a.slice(0, a.length - 1))
        },bitLength: function(a) {
            var b = a.length, c;
            return b === 0 ? 0 : (c = a[b - 1], (b - 1) * 32 + ob.bitArray.getPartial(c))
        },clamp: function(a, b) {
            if (a.length * 32 < b)
                return a;
            a = a.slice(0, Math.ceil(b / 32));
            var c = a.length;
            return b &= 31, c > 0 && b && (a[c - 1] = ob.bitArray.partial(b, a[c - 1] & 2147483648 >> b - 1, 1)), a
        },partial: function(a, b, c) {
            return a === 32 ? b : (c ? b | 0 : b << 32 - a) + a * 1099511627776
        },getPartial: function(a) {
            return Math.round(a / 1099511627776) || 32
        },equal: function(a, b) {
            if (ob.bitArray.bitLength(a) !== ob.bitArray.bitLength(b))
                return !1;
            var c = 0, d;
            for (d = 0; d < a.length; d++)
                c |= a[d] ^ b[d];
            return c === 0
        },_shiftRight: function(a, b, c, d) {
            var e, f = 0, g;
            d === undefined && (d = []);
            for (; b >= 32; b -= 32)
                d.push(c), c = 0;
            if (b === 0)
                return d.concat(a);
            for (e = 0; e < a.length; e++)
                d.push(c | a[e] >>> b), c = a[e] << 32 - b;
            return f = a.length ? a[a.length - 1] : 0, g = ob.bitArray.getPartial(f), d.push(ob.bitArray.partial(b + g & 31, b + g > 32 ? c : d.pop(), 1)), d
        },_xor4: function(a, b) {
            return [a[0] ^ b[0], a[1] ^ b[1], a[2] ^ b[2], a[3] ^ b[3]]
        }}, ob.codec.hex = {fromBits: function(a) {
            var b = "", c, d;
            for (c = 0; c < a.length; c++)
                b += ((a[c] | 0) + 0xf00000000000).toString(16).substr(4);
            return b.substr(0, ob.bitArray.bitLength(a) / 4)
        },toBits: function(a) {
            var b, c = [], d;
            a = a.replace(/\s|0x/g, ""), d = a.length, a += "00000000";
            for (b = 0; b < a.length; b += 8)
                c.push(parseInt(a.substr(b, 8), 16) ^ 0);
            return ob.bitArray.clamp(c, d * 4)
        }}, ob.codec.utf8String = {fromBits: function(a) {
            var b = "", c = ob.bitArray.bitLength(a), d, e;
            for (d = 0; d < c / 8; d++)
                (d & 3) === 0 && (e = a[d / 4]), b += String.fromCharCode(e >>> 24), e <<= 8;
            return decodeURIComponent(escape(b))
        },toBits: function(a) {
            a = unescape(encodeURIComponent(a));
            var b = [], c, d = 0;
            for (c = 0; c < a.length; c++)
                d = d << 8 | a.charCodeAt(c), (c & 3) === 3 && (b.push(d), d = 0);
            return c & 3 && b.push(ob.bitArray.partial(8 * (c & 3), d)), b
        }}, ob.codec.base64 = {_chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",fromBits: function(a, b, c) {
            var d = "", e, f = 0, g = ob.codec.base64._chars, h = 0, i = ob.bitArray.bitLength(a);
            c && (g = g.substr(0, 62) + "-_");
            for (e = 0; d.length * 6 < i; )
                d += g.charAt((h ^ a[e] >>> f) >>> 26), f < 6 ? (h = a[e] << 6 - f, f += 26, e++) : (h <<= 6, f -= 6);
            while (d.length & 3 && !b)
                d += "=";
            return d
        },toBits: function(a, b) {
            a = a.replace(/\s|=/g, "");
            var c = [], d, e = 0, f = ob.codec.base64._chars, g = 0, h;
            b && (f = f.substr(0, 62) + "-_");
            for (d = 0; d < a.length; d++) {
                h = f.indexOf(a.charAt(d));
                if (h < 0)
                    throw new ob.exception.invalid("this isn't base64!");
                e > 26 ? (e -= 26, c.push(g ^ h >>> e), g = h << 32 - e) : (e += 6, g ^= h << 32 - e)
            }
            return e & 56 && c.push(ob.bitArray.partial(e & 56, g, 1)), c
        }}, ob.codec.base64url = {fromBits: function(a) {
            return ob.codec.base64.fromBits(a, 1, 1)
        },toBits: function(a) {
            return ob.codec.base64.toBits(a, 1)
        }}, ob.beware === undefined && (ob.beware = {}), ob.beware["CBC mode is dangerous because it doesn't protect message integrity."] = function() {
        ob.mode.cbc = {name: "cbc",encrypt: function(a, b, c, d) {
                if (d && d.length)
                    throw new ob.exception.invalid("cbc can't authenticate data");
                if (ob.bitArray.bitLength(c) !== 128)
                    throw new ob.exception.invalid("cbc iv must be 128 bits");
                var e, f = ob.bitArray, g = f._xor4, h = f.bitLength
                (b), i = 0, j = [];
                if (h & 7)
                    throw new ob.exception.invalid("pkcs#5 padding only works for multiples of a byte");
                for (e = 0; i + 128 <= h; e += 4, i += 128)
                    c = a.encrypt(g(c, b.slice(e, e + 4))), j.splice(e, 0, c[0], c[1], c[2], c[3]);
                return h = (16 - (h >> 3 & 15)) * 16843009, c = a.encrypt(g(c, f.concat(b, [h, h, h, h]).slice(e, e + 4))), j.splice(e, 0, c[0], c[1], c[2], c[3]), j
            },decrypt: function(a, b, c, d) {
                if (d && d.length)
                    throw new ob.exception.invalid("cbc can't authenticate data");
                if (ob.bitArray.bitLength(c) !== 128)
                    throw new ob.exception.invalid("cbc iv must be 128 bits");
                if (ob.bitArray.bitLength(b) & 127 || !b.length)
                    throw new ob.exception.corrupt("cbc ciphertext must be a positive multiple of the block size");
                var e, f = ob.bitArray, g = f._xor4, h, i, j = [];
                d = d || [];
                for (e = 0; e < b.length; e += 4)
                    h = b.slice(e, e + 4), i = g(c, a.decrypt(h)), j.splice(e, 0, i[0], i[1], i[2], i[3]), c = h;
                h = j[e - 1] & 255;
                if (h == 0 || h > 16)
                    throw new ob.exception.corrupt("pkcs#5 padding corrupt");
                i = h * 16843009;
                if (!f.equal(f.bitSlice([i, i, i, i], 0, h * 8), f.bitSlice(j, j.length * 32 - h * 8, j.length * 32)))
                    throw new ob.exception.corrupt("pkcs#5 padding corrupt");
                return f.bitSlice(j, 0, j.length * 32 - h * 8)
            }}
    }, ob.misc.hmac = function(a, b) {
        this._hash = b = b || ob.hash.sha256;
        var c = [[], []], d, e = b.prototype.blockSize / 32;
        this._baseHash = [new b, new b], a.length > e && (a = b.hash(a));
        for (d = 0; d < e; d++)
            c[0][d] = a[d] ^ 909522486, c[1][d] = a[d] ^ 1549556828;
        this._baseHash[0].update(c[0]), this._baseHash[1].update(c[1])
    }, ob.misc.hmac.prototype.encrypt = ob.misc.hmac.prototype.mac = function(a, b) {
        var c = (new this._hash(this._baseHash[0])).update(a, b).finalize();
        return (new this._hash(this._baseHash[1])).update(c).finalize()
    }, ob.hash.sha256 = function(a) {
        this._key[0] || this._precompute(), a ? (this._h = a._h.slice(0), this._buffer = a._buffer.slice(0), this._length = a._length) : this.reset()
    }, ob.hash.sha256.hash = function(a) {
        return (new ob.hash.sha256).update(a).finalize()
    }, ob.hash.sha256.prototype = {blockSize: 512,reset: function() {
            return this._h = this._init.slice(0), this._buffer = [], this._length = 0, this
        },update: function(a) {
            typeof a == "string" && (a = ob.codec.utf8String.toBits(a));
            var b, c = this._buffer = ob.bitArray.concat(this._buffer, a), d = this._length, e = this._length = d + ob.bitArray.bitLength(a);
            for (b = 512 + d & -512; b <= e; b += 512)
                this._block(c.splice(0, 16));
            return this
        },finalize: function() {
            var a, b = this._buffer, c = this._h;
            b = ob.bitArray.concat(b, [ob.bitArray.partial(1, 1)]);
            for (a = b.length + 2; a & 15; a++)
                b.push(0);
            b.push(Math.floor(this._length / 4294967296)), b.push(this._length | 0);
            while (b.length)
                this._block(b.splice(0, 16));
            return this.reset(), c
        },_init: [],_key: [],_precompute: function() {
            function d(a) {
                return (a - Math.floor(a)) * 4294967296 | 0
            }
            var a = 0, b = 2, c;
            a: for (; a < 64; b++) {
                for (c = 2; c * c <= b; c++)
                    if (b % c === 0)
                        continue a;
                a < 8 && (this._init[a] = d(Math.pow(b, .5))), this._key[a] = d(Math.pow(b, 1 / 3)), a++
            }
        },_block: function(a) {
            var b, c, d, e, f = a.slice(0), g = this._h, h = this._key, i = g[0], j = g[1], k = g[2], l = g[3], m = g[4], n = g[5], o = g[6], p = g[7];
            for (b = 0; b < 64; b++)
                b < 16 ? c = f[b] : (d = f[b + 1 & 15], e = f[b + 14 & 15], c = f[b & 15] = (d >>> 7 ^ d >>> 18 ^ d >>> 3 ^ d << 25 ^ d << 14) + (e >>> 17 ^ e >>> 19 ^ e >>> 10 ^ e << 15 ^ e << 13) + f[b & 15] + f[b + 9 & 15] | 0), c = c + p + (m >>> 6 ^ m >>> 11 ^ m >>> 25 ^ m << 26 ^ m << 21 ^ m << 7) + (o ^ m & (n ^ o)) + h[b], p = o, o = n, n = m, m = l + c | 0, l = k, k = j, j = i, i = c + (j & k ^ l & (j ^ k)) + (j >>> 2 ^ j >>> 13 ^ j >>> 22 ^ j << 30 ^ j << 19 ^ j << 10) | 0;
            g[0] = g[0] + i | 0, g[1] = g[1] + j | 0, g[2] = g[2] + k | 0, g[3] = g[3] + l | 0, g[4] = g[4] + m | 0, g[5] = g[5] + n | 0, g[6] = g[6] + o | 0, g[7] = g[7] + p | 0
        }}, ob.random = {randomWords: function(a, b) {
            var c = [], d, e = this.isReady(b), f;
            if (e === this._NOT_READY)
                throw new ob.exception.notReady("generator isn't seeded");
            e & this._REQUIRES_RESEED && this._reseedFromPools(!(e & this._READY));
            for (d = 0; d < a; d += 4)
                (d + 1) % this._MAX_WORDS_PER_BURST === 0 && this._gate(), f = this._gen4words(), c.push(f[0], f[1], f[2], f[3]);
            return this._gate(), c.slice(0, a)
        },setDefaultParanoia: function(a) {
            this._defaultParanoia = a
        },addEntropy: function(a, b, c) {
            c = c || "user";
            var d, e, f, g = (new Date).valueOf(), h = this._robins[c], i = this.isReady(), j = 0;
            d = this._collectorIds[c], d === undefined && (d = this._collectorIds[c] = this._collectorIdNext++), h === undefined && (h = this._robins[c] = 0), this._robins[c] = (this._robins[c] + 1) % this._pools.length;
            switch (typeof a) {
                case "number":
                    b === undefined && (b = 1), this._pools[h].update([d, this._eventId++, 1, b, g, 1, a | 0]);
                    break;
                case "object":
                    var k = Object.prototype.toString.call(a);
                    if (k === "[object Uint32Array]") {
                        f = [];
                        for (e = 0; e < a.length; e++)
                            f.push(a[e]);
                        a = f
                    } else {
                        k !== "[object Array]" && (j = 1);
                        for (e = 0; e < a.length && !j; e++)
                            typeof a[e] != "number" && (j = 1)
                    }
                    if (!j) {
                        if (b === undefined) {
                            b = 0;
                            for (e = 0; e < a.length; e++) {
                                f = a[e];
                                while (f > 0)
                                    b++, f >>>= 1
                            }
                        }
                        this._pools[h].update([d, this._eventId++, 2, b, g, a.length].concat(a))
                    }
                    break;
                case "string":
                    b === undefined && (b = a.length), this._pools[h].update([d, this._eventId++, 3, b, g, a.length]), this._pools[h].update(a);
                    break;
                default:
                    j = 1
            }
            if (j)
                throw new ob.exception.bug("random: addEntropy only supports number, array of numbers or string");
            this._poolEntropy[h] += b, this._poolStrength += b, i === this._NOT_READY && (this.isReady() !== this._NOT_READY && this._fireEvent("seeded", Math.max(this._strength, this._poolStrength)), this._fireEvent("progress", this.getProgress()))
        },isReady: function(a) {
            var b = this._PARANOIA_LEVELS[a !== undefined ? a : this._defaultParanoia];
            return this._strength && this._strength >= b ? this._poolEntropy[0] > this._BITS_PER_RESEED && (new Date).valueOf() > this._nextReseed ? this._REQUIRES_RESEED | this._READY : this._READY : this._poolStrength >= b ? this._REQUIRES_RESEED | this._NOT_READY : this._NOT_READY
        },getProgress: function(a) {
            var b = this._PARANOIA_LEVELS[a ? a : this._defaultParanoia];
            return this._strength >= b ? 1 : this._poolStrength > b ? 1 : this._poolStrength / b
        },startCollectors: function() {
            if (this._collectorsStarted)
                return;
            if (window.addEventListener)
                window.addEventListener("load", this._loadTimeCollector, !1), window.addEventListener("mousemove", this._mouseCollector, !1);
            else {
                if (!document.attachEvent)
                    throw new ob.exception.bug("can't attach event");
                document.attachEvent("onload", this._loadTimeCollector), document.attachEvent("onmousemove", this._mouseCollector)
            }
            this._collectorsStarted = !0
        },stopCollectors: function() {
            if (!this._collectorsStarted)
                return;
            window.removeEventListener ? (window.removeEventListener("load", this._loadTimeCollector, !1), window.removeEventListener("mousemove", this._mouseCollector, !1)) : window.detachEvent && (window.detachEvent("onload", this._loadTimeCollector), window.detachEvent("onmousemove", this._mouseCollector)), this._collectorsStarted = !1
        },addEventListener: function(a, b) {
            this._callbacks[a][this._callbackI++] = b
        },removeEventListener: function(a, b) {
            var c, d, e = this._callbacks[a], f = [];
            for (d in e)
                e.hasOwnProperty(d) && e[d] === b && f.push(d);
            for (c = 0; c < f.length; c++)
                d = f[c], delete e[d]
        },_pools: [new ob.hash.sha256],_poolEntropy: [0],_reseedCount: 0,_robins: {},_eventId: 0,_collectorIds: {},_collectorIdNext: 0,_strength: 0,_poolStrength: 0,_nextReseed: 0,_key: [0, 0, 0, 0, 0, 0, 0, 0],_counter: [0, 0, 0, 0],_cipher: undefined,_defaultParanoia: 6,_collectorsStarted: !1,_callbacks: {progress: {},seeded: {}},_callbackI: 0,_NOT_READY: 0,_READY: 1,_REQUIRES_RESEED: 2,_MAX_WORDS_PER_BURST: 65536,_PARANOIA_LEVELS: [0, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024],_MILLISECONDS_PER_RESEED: 3e4,_BITS_PER_RESEED: 80,_gen4words: function() {
            for (var a = 0; a < 4; a++) {
                this._counter[a] = this._counter[a] + 1 | 0;
                if (this._counter[a])
                    break
            }
            return this._cipher.encrypt(this._counter)
        },_gate: function() {
            this._key = this._gen4words().concat(this._gen4words()), this._cipher = new ob.cipher.aes(this._key)
        },_reseed: function(a) {
            this._key = ob.hash.sha256.hash(this._key.concat(a)), this._cipher = new ob.cipher.aes(this._key);
            for (var b = 0; b < 4; b++) {
                this._counter[b] = this._counter[b] + 1 | 0;
                if (this._counter[b])
                    break
            }
        },_reseedFromPools: function(a) {
            var b = [], c = 0, d;
            this._nextReseed = b[0] = (new Date).valueOf() + this._MILLISECONDS_PER_RESEED;
            for (d = 0; d < 16; d++)
                b.push(Math.random() * 4294967296 | 0);
            for (d = 0; d < this._pools.length; d++) {
                b = b.concat(this._pools[d].finalize()), c += this._poolEntropy[d], this._poolEntropy[d] = 0;
                if (!a && this._reseedCount & 1 << d)
                    break
            }
            this._reseedCount >= 1 << this._pools.length && (this._pools.push(new ob.hash.sha256), this._poolEntropy.push(0)), this._poolStrength -= c, c > this._strength && (this._strength = c), this._reseedCount++, this._reseed(b)
        },_mouseCollector: function(a) {
            var b = a.x || a.clientX || a.offsetX || 0, c = a.y || a.clientY || a.offsetY || 0;
            ob.random.addEntropy([b, c], 2, "mouse")
        },_loadTimeCollector: function(a) {
            ob.random.addEntropy((new Date).valueOf(), 2, "loadtime")
        },_fireEvent: function(a, b) {
            var c, d = ob.random._callbacks[a], e = [];
            for (c in d)
                d.hasOwnProperty(c) && e.push(d[c]);
            for (c = 0; c < e.length; c++)
                e[c](b)
        }}, function() {
        try {
            var a = new Uint32Array(32);
            crypto.getRandomValues(a), ob.random.addEntropy(a, 1024, "crypto.getRandomValues")
        } catch (b) {
        }
    }(), function() {
        for (var a in ob.beware)
            ob.beware.hasOwnProperty(a) && ob.beware[a]()
    }();
    var pb = {sjcl: ob,version: "1.3.3"};
    pb.generateAesKey = function() {
        return {key: ob.random.randomWords(8, 0),encrypt: function(a) {
                return this.encryptWithIv(a, ob.random.randomWords(4, 0))
            },encryptWithIv: function(a, b) {
                var c = new ob.cipher.aes(this.key), d = ob.codec.utf8String.toBits(a), e = ob.mode.cbc.encrypt(c, d, b), f = ob.bitArray.concat(b, e);
                return ob.codec.base64.fromBits(f)
            }}
    }, pb.create = function(a) {
        return new pb.EncryptionClient(a)
    }, pb.EncryptionClient = function(a) {
        var c = this, d = [];
        c.publicKey = a, c.version = pb.version;
        var e = function(a, b) {
            var c, d, e;
            c = document.createElement(a);
            for (d in b)
                b.hasOwnProperty(d) && (e = b[d], c.setAttribute(d, e));
            return c
        }, f = function(a) {
            return window.jQuery && a instanceof jQuery ? a[0] : a.nodeType && a.nodeType === 1 ? a : document.getElementById(a)
        }, h = function(a) {
            var b = [], c, d, e, f;
            a.typeName() === "INTEGER" && (c = a.posContent(), d = a.posEnd(), e = a.stream.hexDump(c, d).replace(/[ \n]/g, ""), b.push(e));
            if (a.sub !== null)
                for (f = 0; f < a.sub.length; f++)
                    b = b.concat(h(a.sub[f]));
            return b
        }, i = function(a) {
            var b = [], c = a.children, d, e;
            for (e = 0; e < c.length; e++)
                d = c[e], d.attributes["data-encrypted-name"] ? b.push(d) : d.children.length > 0 && (b = b.concat(i(d)));
            return b
        }, j = function() {
            var c, d, e, f, i;
            try {
                c = g(a), d = b.decode(c)
            } catch (j) {
                throw "Invalid encryption key. Please use the key labeled 'Client-Side Encryption Key'"
            }
            e = h(d);
            if (e.length !== 2)
                throw "Invalid encryption key. Please use the key labeled 'Client-Side Encryption Key'";
            return f = e[0], i = e[1], rsa = new jb, rsa.setPublic(f, i), rsa
        }, k = function() {
            return {key: ob.random.randomWords(8, 0),sign: function(a) {
                    var b = new ob.misc.hmac(this.key, ob.hash.sha256), c = b.encrypt(a);
                    return ob.codec.base64.fromBits(c)
                }}
        };
        c.encrypt = function(a) {
            var b = j();
            return aes = pb.generateAesKey(), hmac = k(), ciphertext = aes.encrypt(a), signature = hmac.sign(ob.codec.base64.toBits(ciphertext)), combinedKey = ob.bitArray.concat(aes.key, hmac.key), encodedKey = ob.codec.base64.fromBits(combinedKey), encryptedKey = b.encrypt_b64(encodedKey), prefix = "$bt4|javascript_" + c.version.replace(/\./g, "_") + "$", prefix + encryptedKey + "$" + ciphertext + "$" + signature
        }, c.encryptForm = function(a) {
            var b, g, h, j, k, l;
            a = f(a), l = i(a);
            while (d.length > 0)
                a.removeChild(d[0]), d.splice(0, 1);
            for (k = 0; k < l.length; k++)
                b = l[k], h = b.getAttribute("data-encrypted-name"), g = c.encrypt(b.value), b.removeAttribute("name"), j = e("input", {value: g,type: "hidden",name: h}), d.push(j), a.appendChild(j)
        }, c.onSubmitEncryptForm = function(a, b) {
            var d;
            a = f(a), d = function(d) {
                return c.encryptForm(a), b ? b(d) : d
            }, window.jQuery ? window.jQuery(a).submit(d) : a.addEventListener ? a.addEventListener("submit", d, !1) : a.attachEvent && a.attachEvent("onsubmit", d)
        }, c.formEncrypter = {encryptForm: c.encryptForm,extractForm: f,onSubmitEncryptForm: c.onSubmitEncryptForm}, ob.random.startCollectors()
    }, window.Braintree = pb, typeof define == "function" && define("braintree", function() {
        return pb
    })
}(), function(a) {
    function F(a, b) {
        return function(c) {
            return M(a.call(this, c), b)
        }
    }
    function G(a, b) {
        return function(c) {
            return this.lang().ordinal(a.call(this, c), b)
        }
    }
    function H() {
    }
    function I(a) {
        K(this, a)
    }
    function J(a) {
        var b = a.years || a.year || a.y || 0, c = a.months || a.month || a.M || 0, d = a.weeks || a.week || a.w || 0, e = a.days || a.day || a.d || 0, f = a.hours || a.hour || a.h || 0, g = a.minutes || a.minute || a.m || 0, h = a.seconds || a.second || a.s || 0, i = a.milliseconds || a.millisecond || a.ms || 0;
        this._input = a, this._milliseconds = i + h * 1e3 + g * 6e4 + f * 36e5, this._days = e + d * 7, this._months = c + b * 12, this._data = {}, this._bubble()
    }
    function K(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    }
    function L(a) {
        return a < 0 ? Math.ceil(a) : Math.floor(a)
    }
    function M(a, b) {
        var c = a + "";
        while (c.length < b)
            c = "0" + c;
        return c
    }
    function N(a, c, d, e) {
        var f = c._milliseconds, g = c._days, h = c._months, i, j, k;
        f && a._d.setTime(+a._d + f * d);
        if (g || h)
            i = a.minute(), j = a.hour();
        g && a.date(a.date() + g * d), h && a.month(a.month() + h * d), f && !e && b.updateOffset(a);
        if (g || h)
            a.minute(i), a.hour(j)
    }
    function O(a) {
        return Object.prototype.toString.call(a) === "[object Array]"
    }
    function P(a, b) {
        var c = Math.min(a.length, b.length), d = Math.abs(a.length - b.length), e = 0, f;
        for (f = 0; f < c; f++)
            ~~a[f] !== ~~b[f] && e++;
        return e + d
    }
    function Q(a) {
        return a ? A[a] || a.toLowerCase().replace(/(.)s$/, "$1") : a
    }
    function R(a, b) {
        return b.abbr = a, f[a] || (f[a] = new H), f[a].set(b), f[a]
    }
    function S(a) {
        if (!a)
            return b.fn._lang;
        if (!f[a] && g)
            try {
                require("./lang/" + a)
            } catch (c) {
                return b.fn._lang
            }
        return f[a]
    }
    function T(a) {
        return a.match(/\[.*\]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
    }
    function U(a) {
        var b = a.match(j), c, d;
        for (c = 0, d = b.length; c < d; c++)
            E[b[c]] ? b[c] = E[b[c]] : b[c] = T(b[c]);
        return function(e) {
            var f = "";
            for (c = 0; c < d; c++)
                f += b[c] instanceof Function ? b[c].call(e, a) : b[c];
            return f
        }
    }
    function V(a, b) {
        function d(b) {
            return a.lang().longDateFormat(b) || b
        }
        var c = 5;
        while (c-- && k.test(b))
            b = b.replace(k, d);
        return B[b] || (B[b] = U(b)), B[b](a)
    }
    function W(a, b) {
        switch (a) {
            case "DDDD":
                return n;
            case "YYYY":
                return o;
            case "YYYYY":
                return p;
            case "S":
            case "SS":
            case "SSS":
            case "DDD":
                return m;
            case "MMM":
            case "MMMM":
            case "dd":
            case "ddd":
            case "dddd":
                return q;
            case "a":
            case "A":
                return S(b._l)._meridiemParse;
            case "X":
                return t;
            case "Z":
            case "ZZ":
                return r;
            case "T":
                return s;
            case "MM":
            case "DD":
            case "YY":
            case "HH":
            case "hh":
            case "mm":
            case "ss":
            case "M":
            case "D":
            case "d":
            case "H":
            case "h":
            case "m":
            case "s":
                return l;
            default:
                return new RegExp(a.replace("\\", ""))
        }
    }
    function X(a) {
        var b = (r.exec(a) || [])[0], c = (b + "").match(x) || ["-", 0, 0], d = +(c[1] * 60) + ~~c[2];
        return c[0] === "+" ? -d : d
    }
    function Y(a, b, c) {
        var d, e = c._a;
        switch (a) {
            case "M":
            case "MM":
                e[1] = b == null ? 0 : ~~b - 1;
                break;
            case "MMM":
            case "MMMM":
                d = S(c._l).monthsParse(b), d != null ? e[1] = d : c._isValid = !1;
                break;
            case "D":
            case "DD":
            case "DDD":
            case "DDDD":
                b != null && (e[2] = ~~b);
                break;
            case "YY":
                e[0] = ~~b + (~~b > 68 ? 1900 : 2e3);
                break;
            case "YYYY":
            case "YYYYY":
                e[0] = ~~b;
                break;
            case "a":
            case "A":
                c._isPm = S(c._l).isPM(b);
                break;
            case "H":
            case "HH":
            case "h":
            case "hh":
                e[3] = ~~b;
                break;
            case "m":
            case "mm":
                e[4] = ~~b;
                break;
            case "s":
            case "ss":
                e[5] = ~~b;
                break;
            case "S":
            case "SS":
            case "SSS":
                e[6] = ~~(("0." + b) * 1e3);
                break;
            case "X":
                c._d = new Date(parseFloat(b) * 1e3);
                break;
            case "Z":
            case "ZZ":
                c._useUTC = !0, c._tzm = X(b)
        }
        b == null && (c._isValid = !1)
    }
    function Z(a) {
        var b, c, d = [];
        if (a._d)
            return;
        for (b = 0; b < 7; b++)
            a._a[b] = d[b] = a._a[b] == null ? b === 2 ? 1 : 0 : a._a[b];
        d[3] += ~~((a._tzm || 0) / 60), d[4] += ~~((a._tzm || 0) % 60), c = new Date(0), a._useUTC ? (c.setUTCFullYear(d[0], d[1], d[2]), c.setUTCHours(d[3], d[4], d[5], d[6])) : (c.setFullYear(d[0], d[1], d[2]), c.setHours(d[3], d[4], d[5], d[6])), a._d = c
    }
    function $(a) {
        var b = a._f.match(j), c = a._i, d, e;
        a._a = [];
        for (d = 0; d < b.length; d++)
            e = (W(b[d], a).exec(c) || [])[0], e && (c = c.slice(c.indexOf(e) + e.length)), E[b[d]] && Y(b[d], e, a);
        c && (a._il = c), a._isPm && a._a[3] < 12 && (a._a[3] += 12), a._isPm === !1 && a._a[3] === 12 && (a._a[3] = 0), Z(a)
    }
    function _(a) {
        var b, c, d, e = 99, f, g;
        for (f = 0; f < a._f.length; f++)
            b = K({}, a), b._f = a._f[f], $(b), c = new I(b), g = P(b._a, c.toArray()), c._il && (g += c._il.length), g < e && (e = g, d = c);
        K(a, d)
    }
    function ab(a) {
        var b, c = a._i, d = u.exec(c);
        if (d) {
            a._f = "YYYY-MM-DD" + (d[2] || " ");
            for (b = 0; b < 4; b++)
                if (w[b][1].exec(c)) {
                    a._f += w[b][0];
                    break
                }
            r.exec(c) && (a._f += " Z"), $(a)
        } else
            a._d = new Date(c)
    }
    function bb(b) {
        var c = b._i, d = h.exec(c);
        c === a ? b._d = new Date : d ? b._d = new Date(+d[1]) : typeof c == "string" ? ab(b) : O(c) ? (b._a = c.slice(0), Z(b)) : b._d = c instanceof Date ? new Date(+c) : new Date(c)
    }
    function cb(a, b, c, d, e) {
        return e.relativeTime(b || 1, !!c, a, d)
    }
    function db(a, b, c) {
        var e = d(Math.abs(a) / 1e3), f = d(e / 60), g = d(f / 60), h = d(g / 24), i = d(h / 365), j = e < 45 && ["s", e] || f === 1 && ["m"] || f < 45 && ["mm", f] || g === 1 && ["h"] || g < 22 && ["hh", g] || h === 1 && ["d"] || h <= 25 && ["dd", h] || h <= 45 && ["M"] || h < 345 && ["MM", d(h / 30)] || i === 1 && ["y"] || ["yy", i];
        return j[2] = b, j[3] = a > 0, j[4] = c, cb.apply({}, j)
    }
    function eb(a, c, d) {
        var e = d - c, f = d - a.day(), g;
        return f > e && (f -= 7), f < e - 7 && (f += 7), g = b(a).add("d", f), {week: Math.ceil(g.dayOfYear() / 7),year: g.year()}
    }
    function fb(a) {
        var c = a._i, d = a._f;
        return c === null || c === "" ? null : (typeof c == "string" && (a._i = c = S().preparse(c)), b.isMoment(c) ? (a = K({}, c), a._d = new Date(+c._d)) : d ? O(d) ? _(a) : $(a) : bb(a), new I(a))
    }
    function gb(a, c) {
        b.fn[a] = b.fn[a + "s"] = function(a) {
            var d = this._isUTC ? "UTC" : "";
            return a != null ? (this._d["set" + d + c](a), b.updateOffset(this), this) : this._d["get" + d + c]()
        }
    }
    function hb(a) {
        b.duration.fn[a] = function() {
            return this._data[a]
        }
    }
    function ib(a, c) {
        b.duration.fn["as" + a] = function() {
            return +this / c
        }
    }
    var b, c = "2.1.0", d = Math.round, e, f = {}, g = typeof module != "undefined" && module.exports, h = /^\/?Date\((\-?\d+)/i, i = /(\-)?(\d*)?\.?(\d+)\:(\d+)\:(\d+)\.?(\d{3})?/, j = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g, k = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, l = /\d\d?/, m = /\d{1,3}/, n = /\d{3}/, o = /\d{1,4}/, p = /[+\-]?\d{1,6}/, q = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, r = /Z|[\+\-]\d\d:?\d\d/i, s = /T/i, t = /[\+\-]?\d+(\.\d{1,3})?/, u = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/, v = "YYYY-MM-DDTHH:mm:ssZ", w = [["HH:mm:ss.S", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], x = /([\+\-]|\d\d)/gi, y = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), z = {Milliseconds: 1,Seconds: 1e3,Minutes: 6e4,Hours: 36e5,Days: 864e5,Months: 2592e6,Years: 31536e6}, A = {ms: "millisecond",s: "second",m: "minute",h: "hour",d: "day",w: "week",M: "month",y: "year"}, B = {}, C = "DDD w W M D d".split(" "), D = "M D H h m s w W".split(" "), E = {M: function() {
            return this.month() + 1
        },MMM: function(a) {
            return this.lang().monthsShort(this, a)
        },MMMM: function(a) {
            return this.lang().months(this, a)
        },D: function() {
            return this.date()
        },DDD: function() {
            return this.dayOfYear()
        },d: function() {
            return this.day()
        },dd: function(a) {
            return this.lang().weekdaysMin(this, a)
        },ddd: function(a) {
            return this.lang().weekdaysShort(this, a)
        },dddd: function(a) {
            return this.lang().weekdays(this, a)
        },w: function() {
            return this.week()
        },W: function() {
            return this.isoWeek()
        },YY: function() {
            return M(this.year() % 100, 2)
        },YYYY: function() {
            return M(this.year(), 4)
        },YYYYY: function() {
            return M(this.year(), 5)
        },gg: function() {
            return M(this.weekYear() % 100, 2)
        },gggg: function() {
            return this.weekYear()
        },ggggg: function() {
            return M(this.weekYear(), 5)
        },GG: function() {
            return M(this.isoWeekYear() % 100, 2)
        },GGGG: function() {
            return this.isoWeekYear()
        },GGGGG: function() {
            return M(this.isoWeekYear(), 5)
        },e: function() {
            return this.weekday()
        },E: function() {
            return this.isoWeekday()
        },a: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !0)
        },A: function() {
            return this.lang().meridiem(this.hours(), this.minutes(), !1)
        },H: function() {
            return this.hours()
        },h: function() {
            return this.hours() % 12 || 12
        },m: function() {
            return this.minutes()
        },s: function() {
            return this.seconds()
        },S: function() {
            return ~~(this.milliseconds() / 100)
        },SS: function() {
            return M(~~(this.milliseconds() / 10), 2)
        },SSS: function() {
            return M(this.milliseconds(), 3)
        },Z: function() {
            var a = -this.zone(), b = "+";
            return a < 0 && (a = -a, b = "-"), b + M(~~(a / 60), 2) + ":" + M(~~a % 60, 2)
        },ZZ: function() {
            var a = -this.zone(), b = "+";
            return a < 0 && (a = -a, b = "-"), b + M(~~(10 * a / 6), 4)
        },z: function() {
            return this.zoneAbbr()
        },zz: function() {
            return this.zoneName()
        },X: function() {
            return this.unix()
        }};
    while (C.length)
        e = C.pop(), E[e + "o"] = G(E[e], e);
    while (D.length)
        e = D.pop(), E[e + e] = F(E[e], 2);
    E.DDDD = F(E.DDD, 3), H.prototype = {set: function(a) {
            var b, c;
            for (c in a)
                b = a[c], typeof b == "function" ? this[c] = b : this["_" + c] = b
        },_months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months: function(a) {
            return this._months[a.month()]
        },_monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort: function(a) {
            return this._monthsShort[a.month()]
        },monthsParse: function(a) {
            var c, d, e;
            this._monthsParse || (this._monthsParse = []);
            for (c = 0; c < 12; c++) {
                this._monthsParse[c] || (d = b([2e3, c]), e = "^" + this.months(d, "") + "|^" + this.monthsShort(d, ""), this._monthsParse[c] = new RegExp(e.replace(".", ""), "i"));
                if (this._monthsParse[c].test(a))
                    return c
            }
        },_weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays: function(a) {
            return this._weekdays[a.day()]
        },_weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort: function(a) {
            return this._weekdaysShort[a.day()]
        },_weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin: function(a) {
            return this._weekdaysMin[a.day()]
        },weekdaysParse: function(a) {
            var c, d, e;
            this._weekdaysParse || (this._weekdaysParse = []);
            for (c = 0; c < 7; c++) {
                this._weekdaysParse[c] || (d = b([2e3, 1]).day(c), e = "^" + this.weekdays(d, "") + "|^" + this.weekdaysShort(d, "") + "|^" + this.weekdaysMin(d, ""), this._weekdaysParse[c] = new RegExp(e.replace(".", ""), "i"));
                if (this._weekdaysParse[c].test(a))
                    return c
            }
        },_longDateFormat: {LT: "h:mm A",L: "MM/DD/YYYY",LL: "MMMM D YYYY",LLL: "MMMM D YYYY LT",LLLL: "dddd, MMMM D YYYY LT"},longDateFormat: function(a) {
            var b = this._longDateFormat[a];
            return !b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(a) {
                return a.slice(1)
            }), this._longDateFormat[a] = b), b
        },isPM: function(a) {
            return (a + "").toLowerCase()[0] === "p"
        },_meridiemParse: /[ap]\.?m?\.?/i,meridiem: function(a, b, c) {
            return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
        },_calendar: {sameDay: "[Today at] LT",nextDay: "[Tomorrow at] LT",nextWeek: "dddd [at] LT",lastDay: "[Yesterday at] LT",lastWeek: "[Last] dddd [at] LT",sameElse: "L"},calendar: function(a, b) {
            var c = this._calendar[a];
            return typeof c == "function" ? c.apply(b) : c
        },_relativeTime: {future: "in %s",past: "%s ago",s: "a few seconds",m: "a minute",mm: "%d minutes",h: "an hour",hh: "%d hours",d: "a day",dd: "%d days",M: "a month",MM: "%d months",y: "a year",yy: "%d years"},relativeTime: function(a, b, c, d) {
            var e = this._relativeTime[c];
            return typeof e == "function" ? e(a, b, c, d) : e.replace(/%d/i, a)
        },pastFuture: function(a, b) {
            var c = this._relativeTime[a > 0 ? "future" : "past"];
            return typeof c == "function" ? c(b) : c.replace(/%s/i, b)
        },ordinal: function(a) {
            return this._ordinal.replace("%d", a)
        },_ordinal: "%d",preparse: function(a) {
            return a
        },postformat: function(a) {
            return a
        },week: function(a) {
            return eb(a, this._week.dow, this._week.doy).week
        },_week: {dow: 0,doy: 6}}, b = function(a, b, c) {
        return fb({_i: a,_f: b,_l: c,_isUTC: !1})
    }, b.utc = function(a, b, c) {
        return fb({_useUTC: !0,_isUTC: !0,_l: c,_i: a,_f: b})
    }, b.unix = function(a) {
        return b(a * 1e3)
    }, b.duration = function(a, c) {
        var d = b.isDuration(a), e = typeof a == "number", f = d ? a._input : e ? {} : a, g = i.exec(a), h, j;
        return e ? c ? f[c] = a : f.milliseconds = a : g && (h = g[1] === "-" ? -1 : 1, f = {y: 0,d: ~~g[2] * h,h: ~~g[3] * h,m: ~~g[4] * h,s: ~~g[5] * h,ms: ~~g[6] * h}), j = new J(f), d && a.hasOwnProperty("_lang") && (j._lang = a._lang), j
    }, b.version = c, b.defaultFormat = v, b.updateOffset = function() {
    }, b.lang = function(a, c) {
        if (!a)
            return b.fn._lang._abbr;
        c ? R(a, c) : f[a] || S(a), b.duration.fn._lang = b.fn._lang = S(a)
    }, b.langData = function(a) {
        return a && a._lang && a._lang._abbr && (a = a._lang._abbr), S(a)
    }, b.isMoment = function(a) {
        return a instanceof I
    }, b.isDuration = function(a) {
        return a instanceof J
    }, b.fn = I.prototype = {clone: function() {
            return b(this)
        },valueOf: function() {
            return +this._d + (this._offset || 0) * 6e4
        },unix: function() {
            return Math.floor(+this / 1e3)
        },toString: function() {
            return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        },toDate: function() {
            return this._offset ? new Date(+this) : this._d
        },toISOString: function() {
            return V(b(this).utc(), "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        },toArray: function() {
            var a = this;
            return [a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds()]
        },isValid: function() {
            return this._isValid == null && (this._a ? this._isValid = !P(this._a, (this._isUTC ? b.utc(this._a) : b(this._a)).toArray()) : this._isValid = !isNaN(this._d.getTime())), !!this._isValid
        },utc: function() {
            return this.zone(0)
        },local: function() {
            return this.zone(0), this._isUTC = !1, this
        },format: function(a) {
            var c = V(this, a || b.defaultFormat);
            return this.lang().postformat(c)
        },add: function(a, c) {
            var d;
            return typeof a == "string" ? d = b.duration(+c, a) : d = b.duration(a, c), N(this, d, 1), this
        },subtract: function(a, c) {
            var d;
            return typeof a == "string" ? d = b.duration(+c, a) : d = b.duration(a, c), N(this, d, -1), this
        },diff: function(a, c, d) {
            var e = this._isUTC ? b(a).zone(this._offset || 0) : b(a).local(), f = (this.zone() - e.zone()) * 6e4, g, h;
            return c = Q(c), c === "year" || c === "month" ? (g = (this.daysInMonth() + e.daysInMonth()) * 432e5, h = (this.year() - e.year()) * 12 + (this.month() - e.month()), h += (this - b(this).startOf("month") - (e - b(e).startOf("month"))) / g, h -= (this.zone() - b(this).startOf("month").zone() - (e.zone() - b(e).startOf("month").zone())) * 6e4 / g, c === "year" && (h /= 12)) : (g = this - e, h = c === "second" ? g / 1e3 : c === "minute" ? g / 6e4 : c === "hour" ? g / 36e5 : c === "day" ? (g - f) / 864e5 : c === "week" ? (g - f) / 6048e5 : g), d ? h : L(h)
        },from: function(a, c) {
            return b.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!c)
        },fromNow: function(a) {
            return this.from(b(), a)
        },calendar: function() {
            var a = this.diff(b().startOf("day"), "days", !0), c = a < -6 ? "sameElse" : a < -1 ? "lastWeek" : a < 0 ? "lastDay" : a < 1 ? "sameDay" : a < 2 ? "nextDay" : a < 7 ? "nextWeek" : "sameElse";
            return this.format(this.lang().calendar(c, this))
        },isLeapYear: function() {
            var a = this.year();
            return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
        },isDST: function() {
            return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
        },day: function(a) {
            var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            if (a != null) {
                if (typeof a == "string") {
                    a = this.lang().weekdaysParse(a);
                    if (typeof a != "number")
                        return this
                }
                return this.add({d: a - b})
            }
            return b
        },month: function(a) {
            var c = this._isUTC ? "UTC" : "", d, e;
            if (a != null) {
                if (typeof a == "string") {
                    a = this.lang().monthsParse(a);
                    if (typeof a != "number")
                        return this
                }
                return d = this.date(), this.date(1), this._d["set" + c + "Month"](a), this.date(Math.min(d, this.daysInMonth())), b.updateOffset(this), this
            }
            return this._d["get" + c + "Month"]()
        },startOf: function(a) {
            a = Q(a);
            switch (a) {
                case "year":
                    this.month(0);
                case "month":
                    this.date(1);
                case "week":
                case "day":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return a === "week" && this.weekday(0), this
        },endOf: function(a) {
            return this.startOf(a).add(a, 1).subtract("ms", 1)
        },isAfter: function(a, c) {
            return c = typeof c != "undefined" ? c : "millisecond", +this.clone().startOf(c) > +b(a).startOf(c)
        },isBefore: function(a, c) {
            return c = typeof c != "undefined" ? c : "millisecond", +this.clone().startOf(c) < +b(a).startOf(c)
        },isSame: function(a, c) {
            return c = typeof c != "undefined" ? c : "millisecond", +this.clone().startOf(c) === +b(a).startOf(c)
        },min: function(a) {
            return a = b.apply(null, arguments), a < this ? this : a
        },max: function(a) {
            return a = b.apply(null, arguments), a > this ? this : a
        },zone: function(a) {
            var c = this._offset || 0;
            return a == null ? this._isUTC ? c : this._d.getTimezoneOffset() : (typeof a == "string" && (a = X(a)), Math.abs(a) < 16 && (a *= 60), this._offset = a, this._isUTC = !0, c !== a && N(this, b.duration(c - a, "m"), 1, !0), this)
        },zoneAbbr: function() {
            return this._isUTC ? "UTC" : ""
        },zoneName: function() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        },daysInMonth: function() {
            return b.utc([this.year(), this.month() + 1, 0]).date()
        },dayOfYear: function(a) {
            var c = d((b(this).startOf("day") - b(this).startOf("year")) / 864e5) + 1;
            return a == null ? c : this.add("d", a - c)
        },weekYear: function(a) {
            var b = eb(this, this.lang()._week.dow, this.lang()._week.doy).year;
            return a == null ? b : this.add("y", a - b)
        },isoWeekYear: function(a) {
            var b = eb(this, 1, 4).year;
            return a == null ? b : this.add("y", a - b)
        },week: function(a) {
            var b = this.lang().week(this);
            return a == null ? b : this.add("d", (a - b) * 7)
        },isoWeek: function(a) {
            var b = eb(this, 1, 4).week;
            return a == null ? b : this.add("d", (a - b) * 7)
        },weekday: function(a) {
            var b = (this._d.getDay() + 7 - this.lang()._week.dow) % 7;
            return a == null ? b : this.add("d", a - b)
        },isoWeekday: function(a) {
            return a == null ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)
        },lang: function(b) {
            return b === a ? this._lang : (this._lang = S(b), this)
        }};
    for (e = 0; e < y.length; e++)
        gb(y[e].toLowerCase().replace(/s$/, ""), y[e]);
    gb("year", "FullYear"), b.fn.days = b.fn.day, b.fn.months = b.fn.month, b.fn.weeks = b.fn.week, b.fn.isoWeeks = b.fn.isoWeek, b.fn.toJSON = b.fn.toISOString, b.duration.fn = J.prototype = {_bubble: function() {
            var a = this._milliseconds, b = this._days, c = this._months, d = this._data, e, f, g, h;
            d.milliseconds = a % 1e3, e = L(a / 1e3), d.seconds = e % 60, f = L(e / 60), d.minutes = f % 60, g = L(f / 60), d.hours = g % 24, b += L(g / 24), d.days = b % 30, c += L(b / 30), d.months = c % 12, h = L(c / 12), d.years = h
        },weeks: function() {
            return L(this.days() / 7)
        },valueOf: function() {
            return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + ~~(this._months / 12) * 31536e6
        },humanize: function(a) {
            var b = +this, c = db(b, !a, this.lang());
            return a && (c = this.lang().pastFuture(b, c)), this.lang().postformat(c)
        },add: function(a, c) {
            var d = b.duration(a, c);
            return this._milliseconds += d._milliseconds, this._days += d._days, this._months += d._months, this._bubble(), this
        },subtract: function(a, c) {
            var d = b.duration(a, c);
            return this._milliseconds -= d._milliseconds, this._days -= d._days, this._months -= d._months, this._bubble(), this
        },get: function(a) {
            return a = Q(a), this[a.toLowerCase() + "s"]()
        },as: function(a) {
            return a = Q(a), this["as" + a.charAt(0).toUpperCase() + a.slice(1) + "s"]()
        },lang: b.fn.lang};
    for (e in z)
        z.hasOwnProperty(e) && (ib(e, z[e]), hb(e.toLowerCase()));
    ib("Weeks", 6048e5), b.duration.fn.asMonths = function() {
        return (+this - this.years() * 31536e6) / 2592e6 + this.years() * 12
    }, b.lang("en", {ordinal: function(a) {
            var b = a % 10, c = ~~(a % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
            return a + c
        }}), g && (module.exports = b), typeof ender == "undefined" && (this.moment = b), typeof define == "function" && define.amd && define("moment", [], function() {
        return b
    })
}.call(this), function(window, undefined) {
    function isArraylike(a) {
        var b = a.length, c = jQuery.type(a);
        return jQuery.isWindow(a) ? !1 : a.nodeType === 1 && b ? !0 : c === "array" || c !== "function" && (b === 0 || typeof b == "number" && b > 0 && b - 1 in a)
    }
    function createOptions(a) {
        var b = optionsCache[a] = {};
        return jQuery.each(a.match(core_rnotwhite) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    function Data() {
        Object.defineProperty(this.cache = {}, 0, {get: function() {
                return {}
            }}), this.expando = jQuery.expando + Math.random()
    }
    function dataAttr(a, b, c) {
        var d;
        if (c === undefined && a.nodeType === 1) {
            d = "data-" + b.replace(rmultiDash, "-$1").toLowerCase(), c = a.getAttribute(d);
            if (typeof c == "string") {
                try {
                    c = c === "true" ? !0 : c === "false" ? !1 : c === "null" ? null : +c + "" === c ? +c : rbrace.test(c) ? JSON.parse(c) : c
                } catch (e) {
                }
                data_user.set(a, b, c)
            } else
                c = undefined
        }
        return c
    }
    function returnTrue() {
        return !0
    }
    function returnFalse() {
        return !1
    }
    function safeActiveElement() {
        try {
            return document.activeElement
        } catch (a) {
        }
    }
    function sibling(a, b) {
        while ((a = a[b]) && a.nodeType !== 1)
            ;
        return a
    }
    function winnow(a, b, c) {
        if (jQuery.isFunction(b))
            return jQuery.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return jQuery.grep(a, function(a) {
                return a === b !== c
            });
        if (typeof b == "string") {
            if (isSimple.test(b))
                return jQuery.filter(b, a, c);
            b = jQuery.filter(b, a)
        }
        return jQuery.grep(a, function(a) {
            return core_indexOf.call(b, a) >= 0 !== c
        })
    }
    function manipulationTarget(a, b) {
        return jQuery.nodeName(a, "table") && jQuery.nodeName(b.nodeType === 1 ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function disableScript(a) {
        return a.type = (a.getAttribute("type") !== null) + "/" + a.type, a
    }
    function restoreScript(a) {
        var b = rscriptTypeMasked.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }
    function setGlobalEval(a, b) {
        var c = a.length, d = 0;
        for (; d < c; d++)
            data_priv.set(a[d], "globalEval", !b || data_priv.get(b[d], "globalEval"))
    }
    function cloneCopyEvent(a, b) {
        var c, d, e, f, g, h, i, j;
        if (b.nodeType !== 1)
            return;
        if (data_priv.hasData(a)) {
            f = data_priv.access(a), g = jQuery.extend({}, f), j = f.events, data_priv.set(b, g);
            if (j) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; c < d; c++)
                        jQuery.event.add(b, e, j[e][c])
            }
        }
        data_user.hasData(a) && (h = data_user.access(a), i = jQuery.extend({}, h), data_user.set(b, i))
    }
    function getAll(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return b === undefined || b && jQuery.nodeName(a, b) ? jQuery.merge([a], c) : c
    }
    function fixInput(a, b) {
        var c = b.nodeName.toLowerCase();
        if (c === "input" && manipulation_rcheckableType.test(a.type))
            b.checked = a.checked;
        else if (c === "input" || c === "textarea")
            b.defaultValue = a.defaultValue
    }
    function vendorPropName(a, b) {
        if (b in a)
            return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = cssPrefixes.length;
        while (e--) {
            b = cssPrefixes[e] + c;
            if (b in a)
                return b
        }
        return d
    }
    function isHidden(a, b) {
        return a = b || a, jQuery.css(a, "display") === "none" || !jQuery.contains(a.ownerDocument, a)
    }
    function getStyles(a) {
        return window.getComputedStyle(a, null)
    }
    function showHide(a, b) {
        var c, d, e, f = [], g = 0, h = a.length;
        for (; g < h; g++) {
            d = a[g];
            if (!d.style)
                continue;
            f[g] = data_priv.get(d, "olddisplay"), c = d.style.display, b ? (!f[g] && c === "none" && (d.style.display = ""), d.style.display === "" && isHidden(d) && (f[g] = data_priv.access(d, "olddisplay", css_defaultDisplay(d.nodeName)))) : f[g] || (e = isHidden(d), (c && c !== "none" || !e) && data_priv.set(d, "olddisplay", e ? c : jQuery.css(d, "display")))
        }
        for (g = 0; g < h; g++) {
            d = a[g];
            if (!d.style)
                continue;
            if (!b || d.style.display === "none" || d.style.display === "")
                d.style.display = b ? f[g] || "" : "none"
        }
        return a
    }
    function setPositiveNumber(a, b, c) {
        var d = rnumsplit.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function augmentWidthOrHeight(a, b, c, d, e) {
        var f = c === (d ? "border" : "content") ? 4 : b === "width" ? 1 : 0, g = 0;
        for (; f < 4; f += 2)
            c === "margin" && (g += jQuery.css(a, c + cssExpand[f], !0, e)), d ? (c === "content" && (g -= jQuery.css(a, "padding" + cssExpand[f], !0, e)), c !== "margin" && (g -= jQuery.css(a, "border" + cssExpand[f] + "Width", !0, e))) : (g += jQuery.css(a, "padding" + cssExpand[f], !0, e), c !== "padding" && (g += jQuery.css(a, "border" + cssExpand[f] + "Width", !0, e)));
        return g
    }
    function getWidthOrHeight(a, b, c) {
        var d = !0, e = b === "width" ? a.offsetWidth : a.offsetHeight, f = getStyles(a), g = jQuery.support.boxSizing && jQuery.css(a, "boxSizing", !1, f) === "border-box";
        if (e <= 0 || e == null) {
            e = curCSS(a, b, f);
            if (e < 0 || e == null)
                e = a.style[b];
            if (rnumnonpx.test(e))
                return e;
            d = g && (jQuery.support.boxSizingReliable || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + augmentWidthOrHeight(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    function css_defaultDisplay(a) {
        var b = document, c = elemdisplay[a];
        if (!c) {
            c = actualDisplay(a, b);
            if (c === "none" || !c)
                iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), b = (iframe[0].contentWindow || iframe[0].contentDocument).document, b.write("<!doctype html><html><body>"), b.close(), c = actualDisplay(a, b), iframe.detach();
            elemdisplay[a] = c
        }
        return c
    }
    function actualDisplay(a, b) {
        var c = jQuery(b.createElement(a)).appendTo(b.body), d = jQuery.css(c[0], "display");
        return c.remove(), d
    }
    function buildParams(a, b, c, d) {
        var e;
        if (jQuery.isArray(b))
            jQuery.each(b, function(b, e) {
                c || rbracket.test(a) ? d(a, e) : buildParams(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d)
            });
        else if (!c && jQuery.type(b) === "object")
            for (e in b)
                buildParams(a + "[" + e + "]", b[e], c, d);
        else
            d(a, b)
    }
    function addToPrefiltersOrTransports(a) {
        return function(b, c) {
            typeof b != "string" && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(core_rnotwhite) || [];
            if (jQuery.isFunction(c))
                while (d = f[e++])
                    d[0] === "+" ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function inspectPrefiltersOrTransports(a, b, c, d) {
        function g(h) {
            var i;
            return e[h] = !0, jQuery.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                if (typeof j == "string" && !f && !e[j])
                    return b.dataTypes.unshift(j), g(j), !1;
                if (f)
                    return !(i = j)
            }), i
        }
        var e = {}, f = a === transports;
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }
    function ajaxExtend(a, b) {
        var c, d, e = jQuery.ajaxSettings.flatOptions || {};
        for (c in b)
            b[c] !== undefined && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && jQuery.extend(!0, a, d), a
    }
    function ajaxHandleResponses(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while (i[0] === "*")
            i.shift(), d === undefined && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c)
            f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        if (f)
            return f !== i[0] && i.unshift(f), c[f]
    }
    function ajaxConvert(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f) {
            a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift();
            if (f)
                if (f === "*")
                    f = i;
                else if (i !== "*" && i !== f) {
                    g = j[i + " " + f] || j["* " + f];
                    if (!g)
                        for (e in j) {
                            h = e.split(" ");
                            if (h[1] === f) {
                                g = j[i + " " + h[0]] || j["* " + h[0]];
                                if (g) {
                                    g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                    break
                                }
                            }
                        }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {state: "parsererror",error: g ? l : "No conversion from " + i + " to " + f}
                            }
                }
        }
        return {state: "success",data: b}
    }
    function createFxNow() {
        return setTimeout(function() {
            fxNow = undefined
        }), fxNow = jQuery.now()
    }
    function createTweens(a, b) {
        jQuery.each(b, function(b, c) {
            var d = (tweeners[b] || []).concat(tweeners["*"]), e = 0, f = d.length;
            for (; e < f; e++)
                if (d[e].call(a, b, c))
                    return
        })
    }
    function Animation(a, b, c) {
        var d, e, f = 0, g = animationPrefilters.length, h = jQuery.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            var b = fxNow || createFxNow(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length;
            for (; g < i; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({elem: a,props: jQuery.extend({}, b),opts: jQuery.extend(!0, {specialEasing: {}}, c),originalProperties: b,originalOptions: c,startTime: fxNow || createFxNow(),duration: c.duration,tweens: [],createTween: function(b, c) {
                var d = jQuery.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                e = !0;
                for (; c < d; c++)
                    j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }}), k = j.props;
        propFilter(k, j.opts.specialEasing);
        for (; f < g; f++) {
            d = animationPrefilters[f].call(j, a, k, j.opts);
            if (d)
                return d
        }
        return createTweens(j, k), jQuery.isFunction(j.opts.start) && j.opts.start.call(a, j), jQuery.fx.timer(jQuery.extend(i, {elem: a,anim: j,queue: j.opts.queue})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    function propFilter(a, b) {
        var c, d, e, f, g;
        for (c in a) {
            d = jQuery.camelCase(c), e = b[d], f = a[c], jQuery.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = jQuery.cssHooks[d];
            if (g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c], b[c] = e)
            } else
                b[d] = e
        }
    }
    function defaultPrefilter(a, b, c) {
        var d, e, f, g, h, i, j, k, l, m = this, n = a.style, o = {}, p = [], q = a.nodeType && isHidden(a);
        c.queue || (k = jQuery._queueHooks(a, "fx"), k.unqueued == null && (k.unqueued = 0, l = k.empty.fire, k.empty.fire = function() {
            k.unqueued || l()
        }), k.unqueued++, m.always(function() {
            m.always(function() {
                k.unqueued--, jQuery.queue(a, "fx").length || k.empty.fire()
            })
        })), a.nodeType === 1 && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], jQuery.css(a, "display") === "inline" && jQuery.css(a, "float") === "none" && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", m.always(function() {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
        })), h = data_priv.get(a, "fxshow");
        for (d in b) {
            f = b[d];
            if (rfxtypes.exec(f)) {
                delete b[d], i = i || f === "toggle";
                if (f === (q ? "hide" : "show")) {
                    if (f !== "show" || h === undefined || h[d] === undefined)
                        continue;
                    q = !0
                }
                p.push(d)
            }
        }
        g = p.length;
        if (g) {
            h = data_priv.get(a, "fxshow") || data_priv.access(a, "fxshow", {}), "hidden" in h && (q = h.hidden), i && (h.hidden = !q), q ? jQuery(a).show() : m.done(function() {
                jQuery(a).hide()
            }), m.done(function() {
                var b;
                data_priv.remove(a, "fxshow");
                for (b in o)
                    jQuery.style(a, b, o[b])
            });
            for (d = 0; d < g; d++)
                e = p[d], j = m.createTween(e, q ? h[e] : 0), o[e] = h[e] || jQuery.style(a, e), e in h || (h[e] = j.start, q && (j.end = j.start, j.start = e === "width" || e === "height" ? 1 : 0))
        }
    }
    function Tween(a, b, c, d, e) {
        return new Tween.prototype.init(a, b, c, d, e)
    }
    function genFx(a, b) {
        var c, d = {height: a}, e = 0;
        b = b ? 1 : 0;
        for (; e < 4; e += 2 - b)
            c = cssExpand[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }
    function getWindow(a) {
        return jQuery.isWindow(a) ? a : a.nodeType === 9 && a.defaultView
    }
    var rootjQuery, readyList, core_strundefined = typeof undefined, location = window.location, document = window.document, docElem = document.documentElement, _jQuery = window.jQuery, _$ = window.$, class2type = {}, core_deletedIds = [], core_version = "2.0.0", core_concat = core_deletedIds.concat, core_push = core_deletedIds.push, core_slice = core_deletedIds.slice, core_indexOf = core_deletedIds.indexOf, core_toString = class2type.toString, core_hasOwn = class2type.hasOwnProperty, core_trim = core_version.trim, jQuery = function(a, b) {
        return new jQuery.fn.init(a, b, rootjQuery)
    }, core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, core_rnotwhite = /\S+/g, rquickExpr = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, rmsPrefix = /^-ms-/, rdashAlpha = /-([\da-z])/gi, fcamelCase = function(a, b) {
        return b.toUpperCase()
    }, completed = function() {
        document.removeEventListener("DOMContentLoaded", completed, !1), window.removeEventListener("load", completed, !1), jQuery.ready()
    };
    jQuery.fn = jQuery.prototype = {jquery: core_version,constructor: jQuery,init: function(a, b, c) {
            var d, e;
            if (!a)
                return this;
            if (typeof a == "string") {
                a.charAt(0) === "<" && a.charAt(a.length - 1) === ">" && a.length >= 3 ? d = [null, a, null] : d = rquickExpr.exec(a);
                if (d && (d[1] || !b)) {
                    if (d[1]) {
                        b = b instanceof jQuery ? b[0] : b, jQuery.merge(this, jQuery.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : document, !0));
                        if (rsingleTag.test(d[1]) && jQuery.isPlainObject(b))
                            for (d in b)
                                jQuery.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
                        return this
                    }
                    return e = document.getElementById(d[2]), e && e.parentNode && (this.length = 1, this[0] = e), this.context = document, this.selector = a, this
                }
                return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a)
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : jQuery.isFunction(a) ? c.ready(a) : (a.selector !== undefined && (this.selector = a.selector, this.context = a.context), jQuery.makeArray(a, this))
        },selector: "",length: 0,toArray: function() {
            return core_slice.call(this)
        },get: function(a) {
            return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
        },pushStack: function(a) {
            var b = jQuery.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },each: function(a, b) {
            return jQuery.each(this, a, b)
        },ready: function(a) {
            return jQuery.ready.promise().done(a), this
        },slice: function() {
            return this.pushStack(core_slice.apply(this, arguments))
        },first: function() {
            return this.eq(0)
        },last: function() {
            return this.eq(-1)
        },eq: function(a) {
            var b = this.length, c = +a + (a < 0 ? b : 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
        },map: function(a) {
            return this.pushStack(jQuery.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },end: function() {
            return this.prevObject || this.constructor(null)
        },push: core_push,sort: [].sort,splice: [].splice}, jQuery.fn.init.prototype = jQuery.fn, jQuery.extend = jQuery.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        typeof g == "boolean" && (j = g, g = arguments[1] || {}, h = 2), typeof g != "object" && !jQuery.isFunction(g) && (g = {}), i === h && (g = this, --h);
        for (; h < i; h++)
            if ((a = arguments[h]) != null)
                for (b in a) {
                    c = g[b], d = a[b];
                    if (g === d)
                        continue;
                    j && d && (jQuery.isPlainObject(d) || (e = jQuery.isArray(d))) ? (e ? (e = !1, f = c && jQuery.isArray(c) ? c : []) : f = c && jQuery.isPlainObject(c) ? c : {}, g[b] = jQuery.extend(j, f, d)) : d !== undefined && (g[b] = d)
                }
        return g
    }, jQuery.extend({expando: "jQuery" + (core_version + Math.random()).replace(/\D/g, ""),noConflict: function(a) {
            return window.$ === jQuery && (window.$ = _$), a && window.jQuery === jQuery && (window.jQuery = _jQuery), jQuery
        },isReady: !1,readyWait: 1,holdReady: function(a) {
            a ? jQuery.readyWait++ : jQuery.ready(!0)
        },ready: function(a) {
            if (a === !0 ? --jQuery.readyWait : jQuery.isReady)
                return;
            jQuery.isReady = !0;
            if (a !== !0 && --jQuery.readyWait > 0)
                return;
            readyList.resolveWith(document, [jQuery]), jQuery.fn.trigger && jQuery(document).trigger("ready").off("ready")
        },isFunction: function(a) {
            return jQuery.type(a) === "function"
        },isArray: Array.isArray,isWindow: function(a) {
            return a != null && a === a.window
        },isNumeric: function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        },type: function(a) {
            return a == null ? String(a) : typeof a == "object" || typeof a == "function" ? class2type[core_toString.call(a)] || "object" : typeof a
        },isPlainObject: function(a) {
            if (jQuery.type(a) !== "object" || a.nodeType || jQuery.isWindow(a))
                return !1;
            try {
                if (a.constructor && !core_hasOwn.call(a.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (b) {
                return !1
            }
            return !0
        },isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },error: function(a) {
            throw new Error(a)
        },parseHTML: function(a, b, c) {
            if (!a || typeof a != "string")
                return null;
            typeof b == "boolean" && (c = b, b = !1), b = b || document;
            var d = rsingleTag.exec(a), e = !c && [];
            return d ? [b.createElement(d[1])] : (d = jQuery.buildFragment([a], b, e), e && jQuery(e).remove(), jQuery.merge([], d.childNodes))
        },parseJSON: JSON.parse,parseXML: function(a) {
            var b, c;
            if (!a || typeof a != "string")
                return null;
            try {
                c = new DOMParser, b = c.parseFromString(a, "text/xml")
            } catch (d) {
                b = undefined
            }
            return (!b || b.getElementsByTagName("parsererror").length) && jQuery.error("Invalid XML: " + a), b
        },noop: function() {
        },globalEval: function(code) {
            var script, indirect = eval;
            code = jQuery.trim(code), code && (code.indexOf("use strict") === 1 ? (script = document.createElement("script"), script.text = code, document.head.appendChild(script).parentNode.removeChild(script)) : indirect(code))
        },camelCase: function(a) {
            return a.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase)
        },nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },each: function(a, b, c) {
            var d, e = 0, f = a.length, g = isArraylike(a);
            if (c)
                if (g)
                    for (; e < f; e++) {
                        d = b.apply(a[e], c);
                        if (d === !1)
                            break
                    }
                else
                    for (e in a) {
                        d = b.apply(a[e], c);
                        if (d === !1)
                            break
                    }
            else if (g)
                for (; e < f; e++) {
                    d = b.call(a[e], e, a[e]);
                    if (d === !1)
                        break
                }
            else
                for (e in a) {
                    d = b.call(a[e], e, a[e]);
                    if (d === !1)
                        break
                }
            return a
        },trim: function(a) {
            return a == null ? "" : core_trim.call(a)
        },makeArray: function(a, b) {
            var c = b || [];
            return a != null && (isArraylike(Object(a)) ? jQuery.merge(c, typeof a == "string" ? [a] : a) : core_push.call(c, a)), c
        },inArray: function(a, b, c) {
            return b == null ? -1 : core_indexOf.call(b, a, c)
        },merge: function(a, b) {
            var c = b.length, d = a.length, e = 0;
            if (typeof c == "number")
                for (; e < c; e++)
                    a[d++] = b[e];
            else
                while (b[e] !== undefined)
                    a[d++] = b[e++];
            return a.length = d, a
        },grep: function(a, b, c) {
            var d, e = [], f = 0, g = a.length;
            c = !!c;
            for (; f < g; f++)
                d = !!b(a[f], f), c !== d && e.push(a[f]);
            return e
        },map: function(a, b, c) {
            var d, e = 0, f = a.length, g = isArraylike(a), h = [];
            if (g)
                for (; e < f; e++)
                    d = b(a[e], e, c), d != null && (h[h.length] = d);
            else
                for (e in a)
                    d = b(a[e], e, c), d != null && (h[h.length] = d);
            return core_concat.apply([], h)
        },guid: 1,proxy: function(a, b) {
            var c, d, e;
            return typeof b == "string" && (c = a[b], b = a, a = c), jQuery.isFunction(a) ? (d = core_slice.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(core_slice.call(arguments)))
            }, e.guid = a.guid = a.guid || jQuery.guid++, e) : undefined
        },access: function(a, b, c, d, e, f, g) {
            var h = 0, i = a.length, j = c == null;
            if (jQuery.type(c) === "object") {
                e = !0;
                for (h in c)
                    jQuery.access(a, b, h, c[h], !0, f, g)
            } else if (d !== undefined) {
                e = !0, jQuery.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(jQuery(a), c)
                }));
                if (b)
                    for (; h < i; h++)
                        b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)))
            }
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },now: Date.now,swap: function(a, b, c, d) {
            var e, f, g = {};
            for (f in b)
                g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b)
                a.style[f] = g[f];
            return e
        }}), jQuery.ready.promise = function(a) {
        return readyList || (readyList = jQuery.Deferred(), document.readyState === "complete" ? setTimeout(jQuery.ready) : (document.addEventListener("DOMContentLoaded", completed, !1), window.addEventListener("load", completed, !1))), readyList.promise(a)
    }, jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        class2type["[object " + b + "]"] = b.toLowerCase()
    }), rootjQuery = jQuery(document), function(a, b) {
        function eb(a) {
            return Y.test(a + "")
        }
        function fb() {
            var a, b = [];
            return a = function(c, d) {
                return b.push(c += " ") > e.cacheLength && delete a[b.shift()], a[c] = d
            }
        }
        function gb(a) {
            return a[s] = !0, a
        }
        function hb(a) {
            var b = l.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            }finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }
        function ib(a, b, c, d) {
            var e, f, g, h, i, j, m, p, q, v;
            (b ? b.ownerDocument || b : t) !== l && k(b), b = b || l, c = c || [];
            if (!a || typeof a != "string")
                return c;
            if ((h = b.nodeType) !== 1 && h !== 9)
                return [];
            if (n && !d) {
                if (e = Z.exec(a))
                    if (g = e[1]) {
                        if (h === 9) {
                            f = b.getElementById(g);
                            if (!f || !f.parentNode)
                                return c;
                            if (f.id === g)
                                return c.push(f), c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && r(b, f) && f.id === g)
                            return c.push(f), c
                    } else {
                        if (e[2])
                            return H.apply(c, b.getElementsByTagName(a)), c;
                        if ((g = e[3]) && u.getElementsByClassName && b.getElementsByClassName)
                            return H.apply(c, b.getElementsByClassName(g)), c
                    }
                if (u.qsa && (!o || !o.test(a))) {
                    p = m = s, q = b, v = h === 9 && a;
                    if (h === 1 && b.nodeName.toLowerCase() !== "object") {
                        j = pb(a), (m = b.getAttribute("id")) ? p = m.replace(ab, "\\$&") : b.setAttribute("id", p), p = "[id='" + p + "'] ", i = j.length;
                        while (i--)
                            j[i] = p + qb(j[i]);
                        q = T.test(a) && b.parentNode || b, v = j.join(",")
                    }
                    if (v)
                        try {
                            return H.apply(c, q.querySelectorAll(v)), c
                        } catch (w) {
                        }finally {
                            m || b.removeAttribute("id")
                        }
                }
            }
            return yb(a.replace(Q, "$1"), b, c, d)
        }
        function jb(a, b) {
            var c = b && a, d = c && (~b.sourceIndex || D) - (~a.sourceIndex || D);
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function kb(a, c, d) {
            var e;
            return d ? b : (e = a.getAttributeNode(c)) && e.specified ? e.value : a[c] === !0 ? c.toLowerCase() : null
        }
        function lb(a, c, d) {
            var e;
            return d ? b : e = a.getAttribute(c, c.toLowerCase() === "type" ? 1 : 2)
        }
        function mb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return c === "input" && b.type === a
            }
        }
        function nb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return (c === "input" || c === "button") && b.type === a
            }
        }
        function ob(a) {
            return gb(function(b) {
                return b = +b, gb(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function pb(a, b) {
            var c, d, f, g, h, i, j, k = y[a + " "];
            if (k)
                return b ? 0 : k.slice(0);
            h = a, i = [], j = e.preFilter;
            while (h) {
                if (!c || (d = R.exec(h)))
                    d && (h = h.slice(d[0].length) || h), i.push(f = []);
                c = !1;
                if (d = S.exec(h))
                    c = d.shift(), f.push({value: c,type: d[0].replace(Q, " ")}), h = h.slice(c.length);
                for (g in e.filter)
                    (d = X[g].exec(h)) && (!j[g] || (d = j[g](d))) && (c = d.shift(), f.push({value: c,type: g,matches: d}), h = h.slice(c.length));
                if (!c)
                    break
            }
            return b ? h.length : h ? ib.error(a) : y(a, i).slice(0)
        }
        function qb(a) {
            var b = 0, c = a.length, d = "";
            for (; b < c; b++)
                d += a[b].value;
            return d
        }
        function rb(a, b, c) {
            var e = b.dir, f = c && e === "parentNode", g = w++;
            return b.first ? function(b, c, d) {
                while (b = b[e])
                    if (b.nodeType === 1 || f)
                        return a(b, c, d)
            } : function(b, c, h) {
                var i, j, k, l = v + " " + g;
                if (h) {
                    while (b = b[e])
                        if (b.nodeType === 1 || f)
                            if (a(b, c, h))
                                return !0
                } else
                    while (b = b[e])
                        if (b.nodeType === 1 || f) {
                            k = b[s] || (b[s] = {});
                            if ((j = k[e]) && j[0] === l) {
                                if ((i = j[1]) === !0 || i === d)
                                    return i === !0
                            } else {
                                j = k[e] = [l], j[1] = a(b, c, h) || d;
                                if (j[1] === !0)
                                    return !0
                            }
                        }
            }
        }
        function sb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            } : a[0]
        }
        function tb(a, b, c, d, e) {
            var f, g = [], h = 0, i = a.length, j = b != null;
            for (; h < i; h++)
                if (f = a[h])
                    if (!c || c(f, d, e))
                        g.push(f), j && b.push(h);
            return g
        }
        function ub(a, b, c, d, e, f) {
            return d && !d[s] && (d = ub(d)), e && !e[s] && (e = ub(e, f)), gb(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || xb(b || "*", h.nodeType ? [h] : h, []), q = a && (f || !b) ? tb(p, m, a, h, i) : p, r = c ? e || (f ? a : o || d) ? [] : g : q;
                c && c(q, r, h, i);
                if (d) {
                    j = tb(r, n), d(j, [], h, i), k = j.length;
                    while (k--)
                        if (l = j[k])
                            r[n[k]] = !(q[n[k]] = l)
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)
                                (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)
                            (l = r[k]) && (j = e ? J.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else
                    r = tb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }
        function vb(a) {
            var b, c, d, f = a.length, g = e.relative[a[0].type], h = g || e.relative[" "], j = g ? 1 : 0, k = rb(function(a) {
                return a === b
            }, h, !0), l = rb(function(a) {
                return J.call(b, a) > -1
            }, h, !0), m = [function(a, c, d) {
                    return !g && (d || c !== i) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
                }];
            for (; j < f; j++)
                if (c = e.relative[a[j].type])
                    m = [rb(sb(m), c)];
                else {
                    c = e.filter[a[j].type].apply(null, a[j].matches);
                    if (c[s]) {
                        d = ++j;
                        for (; d < f; d++)
                            if (e.relative[a[d].type])
                                break;
                        return ub(j > 1 && sb(m), j > 1 && qb(a.slice(0, j - 1)).replace(Q, "$1"), c, j < d && vb(a.slice(j, d)), d < f && vb(a = a.slice(d)), d < f && qb(a))
                    }
                    m.push(c)
                }
            return sb(m)
        }
        function wb(a, b) {
            var c = 0, f = b.length > 0, g = a.length > 0, h = function(h, j, k, m, n) {
                var o, p, q, r = [], s = 0, t = "0", u = h && [], w = n != null, x = i, y = h || g && e.find.TAG("*", n && j.parentNode || j), z = v += x == null ? 1 : Math.random() || .1;
                w && (i = j !== l && j, d = c);
                for (; (o = y[t]) != null; t++) {
                    if (g && o) {
                        p = 0;
                        while (q = a[p++])
                            if (q(o, j, k)) {
                                m.push(o);
                                break
                            }
                        w && (v = z, d = ++c)
                    }
                    f && ((o = !q && o) && s--, h && u.push(o))
                }
                s += t;
                if (f && t !== s) {
                    p = 0;
                    while (q = b[p++])
                        q(u, r, j, k);
                    if (h) {
                        if (s > 0)
                            while (t--)
                                !u[t] && !r[t] && (r[t] = F.call(m));
                        r = tb(r)
                    }
                    H.apply(m, r), w && !h && r.length > 0 && s + b.length > 1 && ib.uniqueSort(m)
                }
                return w && (v = z, i = x), u
            };
            return f ? gb(h) : h
        }
        function xb(a, b, c) {
            var d = 0, e = b.length;
            for (; d < e; d++)
                ib(a, b[d], c);
            return c
        }
        function yb(a, b, c, d) {
            var f, g, i, j, k, l = pb(a);
            if (!d && l.length === 1) {
                g = l[0] = l[0].slice(0);
                if (g.length > 2 && (i = g[0]).type === "ID" && b.nodeType === 9 && n && e.relative[g[1].type]) {
                    b = (e.find.ID(i.matches[0].replace(bb, cb), b) || [])[0];
                    if (!b)
                        return c;
                    a = a.slice(g.shift().value.length)
                }
                f = X.needsContext.test(a) ? 0 : g.length;
                while (f--) {
                    i = g[f];
                    if (e.relative[j = i.type])
                        break;
                    if (k = e.find[j])
                        if (d = k(i.matches[0].replace(bb, cb), T.test(g[0].type) && b.parentNode || b)) {
                            g.splice(f, 1), a = d.length && qb(g);
                            if (!a)
                                return H.apply(c, d), c;
                            break
                        }
                }
            }
            return h(a, l)(d, b, !n, c, T.test(a)), c
        }
        function zb() {
        }
        var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s = "sizzle" + -(new Date), t = a.document, u = {}, v = 0, w = 0, x = fb(), y = fb(), z = fb(), A = !1, B = function() {
            return 0
        }, C = typeof b, D = 1 << 31, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = E.indexOf || function(a) {
            var b = 0, c = this.length;
            for (; b < c; b++)
                if (this[b] === a)
                    return b;
            return -1
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"), O = "\\[" + L + "*(" + M + ")" + L + "*(?:([*^$|!~]?=)" + L + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + N + ")|)|)" + L + "*\\]", P = ":(" + M + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + O.replace(3, 8) + ")*)|.*)\\)|)", Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), R = new RegExp("^" + L + "*," + L + "*"), S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), T = new RegExp(L + "*[+~]"), U = new RegExp("=" + L + "*([^\\]'\"]*)" + L + "*\\]", "g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = {ID: new RegExp("^#(" + M + ")"),CLASS: new RegExp("^\\.(" + M + ")"),TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),ATTR: new RegExp("^" + O),PSEUDO: new RegExp("^" + P),CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),"boolean": new RegExp("^(?:" + K + ")$", "i"),needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")}, Y = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, $ = /^(?:input|select|textarea|button)$/i, _ = /^h\d$/i, ab = /'|\\/g, bb = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, cb = function(a, b) {
            var c = "0x" + b - 65536;
            return c !== c ? b : c < 0 ? String.fromCharCode(c + 65536) : String.fromCharCode(c >> 10 | 55296, c & 1023 | 56320)
        };
        try {
            H.apply(E = I.call(t.childNodes), t.childNodes), E[t.childNodes.length].nodeType
        } catch (db) {
            H = {apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++])
                        ;
                    a.length = c - 1
                }}
        }
        g = ib.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? b.nodeName !== "HTML" : !1
        }, k = ib.setDocument = function(a) {
            var c = a ? a.ownerDocument || a : t;
            if (c === l || c.nodeType !== 9 || !c.documentElement)
                return l;
            l = c, m = c.documentElement, n = !g(c), u.getElementsByTagName = hb(function(a) {
                return a.appendChild(c.createComment("")), !a.getElementsByTagName("*").length
            }), u.attributes = hb(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), u.getElementsByClassName = hb(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", a.getElementsByClassName("i").length === 2
            }), u.sortDetached = hb(function(a) {
                return a.compareDocumentPosition(l.createElement("div")) & 1
            }), u.getById = hb(function(a) {
                return m.appendChild(a).id = s, !c.getElementsByName || !c.getElementsByName(s).length
            }), u.getById ? (e.find.ID = function(a, b) {
                if (typeof b.getElementById !== C && n) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, e.filter.ID = function(a) {
                var b = a.replace(bb, cb);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (e.find.ID = function(a, c) {
                if (typeof c.getElementById !== C && n) {
                    var d = c.getElementById(a);
                    return d ? d.id === a || typeof d.getAttributeNode !== C && d.getAttributeNode("id").value === a ? [d] : b : []
                }
            }, e.filter.ID = function(a) {
                var b = a.replace(bb, cb);
                return function(a) {
                    var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), e.find.TAG = u.getElementsByTagName ? function(a, b) {
                if (typeof b.getElementsByTagName !== C)
                    return b.getElementsByTagName(a)
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if (a === "*") {
                    while (c = f[e++])
                        c.nodeType === 1 && d.push(c);
                    return d
                }
                return f
            }, e.find.CLASS = u.getElementsByClassName && function(a, b) {
                if (typeof b.getElementsByClassName !== C && n)
                    return b.getElementsByClassName(a)
            }, p = [], o = [];
            if (u.qsa = eb(c.querySelectorAll))
                hb(function(a) {
                    a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || o.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll(":checked").length || o.push(":checked")
                }), hb(function(a) {
                    var b = l.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("t", ""), a.querySelectorAll("[t^='']").length && o.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), o.push(",.*:")
                });
            return (u.matchesSelector = eb(q = m.webkitMatchesSelector || m.mozMatchesSelector || m.oMatchesSelector || m.msMatchesSelector)) && hb(function(a) {
                u.disconnectedMatch = q.call(a, "div"), q.call(a, "[s!='']:x"), p.push("!=", P)
            }), o = o.length && new RegExp(o.join("|")), p = p.length && new RegExp(p.join("|")), r = eb(m.contains) || m.compareDocumentPosition ? function(a, b) {
                var c = a.nodeType === 9 ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !!d && d.nodeType === 1 && !!(c.contains ? c.contains(d) : a.compareDocumentPosition && a.compareDocumentPosition(d) & 16)
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a)
                            return !0;
                return !1
            }, B = m.compareDocumentPosition ? function(a, b) {
                if (a === b)
                    return A = !0, 0;
                var d = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b);
                if (d)
                    return d & 1 || !u.sortDetached && b.compareDocumentPosition(a) === d ? a === c || r(t, a) ? -1 : b === c || r(t, b) ? 1 : j ? J.call(j, a) - J.call(j, b) : 0 : d & 4 ? -1 : 1;
                return a.compareDocumentPosition ? -1 : 1
            } : function(a, b) {
                var d, e = 0, f = a.parentNode, g = b.parentNode, h = [a], i = [b];
                if (a === b)
                    return A = !0, 0;
                if (!f || !g)
                    return a === c ? -1 : b === c ? 1 : f ? -1 : g ? 1 : j ? J.call(j, a) - J.call(j, b) : 0;
                if (f === g)
                    return jb(a, b);
                d = a;
                while (d = d.parentNode)
                    h.unshift(d);
                d = b;
                while (d = d.parentNode)
                    i.unshift(d);
                while (h[e] === i[e])
                    e++;
                return e ? jb(h[e], i[e]) : h[e] === t ? -1 : i[e] === t ? 1 : 0
            }, l
        }, ib.matches = function(a, b) {
            return ib(a, null, null, b)
        }, ib.matchesSelector = function(a, b) {
            (a.ownerDocument || a) !== l && k(a), b = b.replace(U, "='$1']");
            if (u.matchesSelector && n && (!p || !p.test(b)) && (!o || !o.test(b)))
                try {
                    var c = q.call(a, b);
                    if (c || u.disconnectedMatch || a.document && a.document.nodeType !== 11)
                        return c
                } catch (d) {
                }
            return ib(b, l, null, [a]).length > 0
        }, ib.contains = function(a, b) {
            return (a.ownerDocument || a) !== l && k(a), r(a, b)
        }, ib.attr = function(a, c) {
            (a.ownerDocument || a) !== l && k(a);
            var d = e.attrHandle[c.toLowerCase()], f = d && d(a, c, !n);
            return f === b ? u.attributes || !n ? a.getAttribute(c) : (f = a.getAttributeNode(c)) && f.specified ? f.value : null : f
        }, ib.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ib.uniqueSort = function(a) {
            var b, c = [], d = 0, e = 0;
            A = !u.detectDuplicates, j = !u.sortStable && a.slice(0), a.sort(B);
            if (A) {
                while (b = a[e++])
                    b === a[e] && (d = c.push(e));
                while (d--)
                    a.splice(c[d], 1)
            }
            return a
        }, f = ib.getText = function(a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (!e)
                for (; b = a[d]; d++)
                    c += f(b);
            else if (e === 1 || e === 9 || e === 11) {
                if (typeof a.textContent == "string")
                    return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling)
                    c += f(a)
            } else if (e === 3 || e === 4)
                return a.nodeValue;
            return c
        }, e = ib.selectors = {cacheLength: 50,createPseudo: gb,match: X,attrHandle: {},find: {},relative: {">": {dir: "parentNode",first: !0}," ": {dir: "parentNode"},"+": {dir: "previousSibling",first: !0},"~": {dir: "previousSibling"}},preFilter: {ATTR: function(a) {
                    return a[1] = a[1].replace(bb, cb), a[3] = (a[4] || a[5] || "").replace(bb, cb), a[2] === "~=" && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), a[1].slice(0, 3) === "nth" ? (a[3] || ib.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * (a[3] === "even" || a[3] === "odd")), a[5] = +(a[7] + a[8] || a[3] === "odd")) : a[3] && ib.error(a[0]), a
                },PSEUDO: function(a) {
                    var b, c = !a[5] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[4] ? a[2] = a[4] : c && V.test(c) && (b = pb(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }},filter: {TAG: function(a) {
                    var b = a.replace(bb, cb).toLowerCase();
                    return a === "*" ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },CLASS: function(a) {
                    var b = x[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && x(a, function(a) {
                        return b.test(typeof a.className == "string" && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                    })
                },ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ib.attr(d, a);
                        return e == null ? b === "!=" : b ? (e += "", b === "=" ? e === c : b === "!=" ? e !== c : b === "^=" ? c && e.indexOf(c) === 0 : b === "*=" ? c && e.indexOf(c) > -1 : b === "$=" ? c && e.slice(-c.length) === c : b === "~=" ? (" " + e + " ").indexOf(c) > -1 : b === "|=" ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },CHILD: function(a, b, c, d, e) {
                    var f = a.slice(0, 3) !== "nth", g = a.slice(-4) !== "last", h = b === "of-type";
                    return d === 1 && e === 0 ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), t = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : l.nodeType === 1)
                                            return !1;
                                    o = p = a === "only" && !o && "nextSibling"
                                }
                                return !0
                            }
                            o = [g ? q.firstChild : q.lastChild];
                            if (g && t) {
                                k = q[s] || (q[s] = {}), j = k[a] || [], n = j[0] === v && j[1], m = j[0] === v && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (l.nodeType === 1 && ++m && l === b) {
                                        k[a] = [v, n, m];
                                        break
                                    }
                            } else if (t && (j = (b[s] || (b[s] = {}))[a]) && j[0] === v)
                                m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : l.nodeType === 1) && ++m) {
                                        t && ((l[s] || (l[s] = {}))[a] = [v, m]);
                                        if (l === b)
                                            break
                                    }
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },PSEUDO: function(a, b) {
                    var c, d = e.pseudos[a] || e.setFilters[a.toLowerCase()] || ib.error("unsupported pseudo: " + a);
                    return d[s] ? d(b) : d.length > 1 ? (c = [a, a, "", b], e.setFilters.hasOwnProperty(a.toLowerCase()) ? gb(function(a, c) {
                        var e, f = d(a, b), g = f.length;
                        while (g--)
                            e = J.call(a, f[g]), a[e] = !(c[e] = f[g])
                    }) : function(a) {
                        return d(a, 0, c)
                    }) : d
                }},pseudos: {not: gb(function(a) {
                    var b = [], c = [], d = h(a.replace(Q, "$1"));
                    return d[s] ? gb(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)
                            if (f = g[h])
                                a[h] = !(b[h] = f)
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }),has: gb(function(a) {
                    return function(b) {
                        return ib(a, b).length > 0
                    }
                }),contains: gb(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || f(b)).indexOf(a) > -1
                    }
                }),lang: gb(function(a) {
                    return W.test(a || "") || ib.error("unsupported lang: " + a), a = a.replace(bb, cb).toLowerCase(), function(b) {
                        var c;
                        do
                            if (c = n ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(), c === a || c.indexOf(a + "-") === 0;
                        while ((b = b.parentNode) && b.nodeType === 1);
                        return !1
                    }
                }),target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },root: function(a) {
                    return a === m
                },focus: function(a) {
                    return a === l.activeElement && (!l.hasFocus || l.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },enabled: function(a) {
                    return a.disabled === !1
                },disabled: function(a) {
                    return a.disabled === !0
                },checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && !!a.checked || b === "option" && !!a.selected
                },selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeName > "@" || a.nodeType === 3 || a.nodeType === 4)
                            return !1;
                    return !0
                },parent: function(a) {
                    return !e.pseudos.empty(a)
                },header: function(a) {
                    return _.test(a.nodeName)
                },input: function(a) {
                    return $.test(a.nodeName)
                },button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && a.type === "button" || b === "button"
                },text: function(a) {
                    var b;
                    return a.nodeName.toLowerCase() === "input" && a.type === "text" && ((b = a.getAttribute("type")) == null || b.toLowerCase() === a.type)
                },first: ob(function() {
                    return [0]
                }),last: ob(function(a, b) {
                    return [b - 1]
                }),eq: ob(function(a, b, c) {
                    return [c < 0 ? c + b : c]
                }),even: ob(function(a, b) {
                    var c = 0;
                    for (; c < b; c += 2)
                        a.push(c);
                    return a
                }),odd: ob(function(a, b) {
                    var c = 1;
                    for (; c < b; c += 2)
                        a.push(c);
                    return a
                }),lt: ob(function(a, b, c) {
                    var d = c < 0 ? c + b : c;
                    for (; --d >= 0; )
                        a.push(d);
                    return a
                }),gt: ob(function(a, b, c) {
                    var d = c < 0 ? c + b : c;
                    for (; ++d < b; )
                        a.push(d);
                    return a
                })}};
        for (c in {radio: !0,checkbox: !0,file: !0,password: !0,image: !0})
            e.pseudos[c] = mb(c);
        for (c in {submit: !0,reset: !0})
            e.pseudos[c] = nb(c);
        h = ib.compile = function(a, b) {
            var c, d = [], e = [], f = z[a + " "];
            if (!f) {
                b || (b = pb(a)), c = b.length;
                while (c--)
                    f = vb(b[c]), f[s] ? d.push(f) : e.push(f);
                f = z(a, wb(e, d))
            }
            return f
        }, e.pseudos.nth = e.pseudos.eq, zb.prototype = e.filters = e.pseudos, e.setFilters = new zb, u.sortStable = s.split("").sort(B).join("") === s, k(), [0, 0].sort(B), u.detectDuplicates = A, hb(function(a) {
            a.innerHTML = "<a href='#'></a>";
            if (a.firstChild.getAttribute("href") !== "#") {
                var b = "type|href|height|width".split("|"), c = b.length;
                while (c--)
                    e.attrHandle[b[c]] = lb
            }
        }), hb(function(a) {
            if (a.getAttribute("disabled") != null) {
                var b = K.split("|"), c = b.length;
                while (c--)
                    e.attrHandle[b[c]] = kb
            }
        }), jQuery.find = ib, jQuery.expr = ib.selectors, jQuery.expr[":"] = jQuery.expr.pseudos, jQuery.unique = ib.uniqueSort, jQuery.text = ib.getText, jQuery.isXMLDoc = ib.isXML, jQuery.contains = ib.contains
    }(window);
    var optionsCache = {};
    jQuery.Callbacks = function(a) {
        a = typeof a == "string" ? optionsCache[a] || createOptions(a) : jQuery.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function(l) {
            b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0;
            for (; h && g < f; g++)
                if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                    b = !1;
                    break
                }
            d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
        }, k = {add: function() {
                if (h) {
                    var c = h.length;
                    (function g(b) {
                        jQuery.each(b, function(b, c) {
                            var d = jQuery.type(c);
                            d === "function" ? (!a.unique || !k.has(c)) && h.push(c) : c && c.length && d !== "string" && g(c)
                        })
                    })(arguments), d ? f = h.length : b && (e = c, j(b)
                    )
                }
                return this
            },remove: function() {
                return h && jQuery.each(arguments, function(a, b) {
                    var c;
                    while ((c = jQuery.inArray(b, h, c)) > -1)
                        h.splice(c, 1), d && (c <= f && f--, c <= g && g--)
                }), this
            },has: function(a) {
                return a ? jQuery.inArray(a, h) > -1 : !!h && !!h.length
            },empty: function() {
                return h = [], f = 0, this
            },disable: function() {
                return h = i = b = undefined, this
            },disabled: function() {
                return !h
            },lock: function() {
                return i = undefined, b || k.disable(), this
            },locked: function() {
                return !i
            },fireWith: function(a, b) {
                return b = b || [], b = [a, b.slice ? b.slice() : b], h && (!c || i) && (d ? i.push(b) : j(b)), this
            },fire: function() {
                return k.fireWith(this, arguments), this
            },fired: function() {
                return !!c
            }};
        return k
    }, jQuery.extend({Deferred: function(a) {
            var b = [["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]], c = "pending", d = {state: function() {
                    return c
                },always: function() {
                    return e.done(arguments).fail(arguments), this
                },then: function() {
                    var a = arguments;
                    return jQuery.Deferred(function(c) {
                        jQuery.each(b, function(b, f) {
                            var g = f[0], h = jQuery.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = h && h.apply(this, arguments);
                                a && jQuery.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [a] : arguments)
                            })
                        }), a = null
                    }).promise()
                },promise: function(a) {
                    return a != null ? jQuery.extend(a, d) : d
                }}, e = {};
            return d.pipe = d.then, jQuery.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[a ^ 1][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },when: function(a) {
            var b = 0, c = core_slice.call(arguments), d = c.length, e = d !== 1 || a && jQuery.isFunction(a.promise) ? d : 0, f = e === 1 ? a : jQuery.Deferred(), g = function(a, b, c) {
                return function(d) {
                    b[a] = this, c[a] = arguments.length > 1 ? core_slice.call(arguments) : d, c === h ? f.notifyWith(b, c) : --e || f.resolveWith(b, c)
                }
            }, h, i, j;
            if (d > 1) {
                h = new Array(d), i = new Array(d), j = new Array(d);
                for (; b < d; b++)
                    c[b] && jQuery.isFunction(c[b].promise) ? c[b].promise().done(g(b, j, c)).fail(f.reject).progress(g(b, i, h)) : --e
            }
            return e || f.resolveWith(j, c), f.promise()
        }}), jQuery.support = function(a) {
        var b = document.createElement("input"), c = document.createDocumentFragment(), d = document.createElement("div"), e = document.createElement("select"), f = e.appendChild(document.createElement("option"));
        return b.type ? (b.type = "checkbox", a.checkOn = b.value !== "", a.optSelected = f.selected, a.reliableMarginRight = !0, a.boxSizingReliable = !0, a.pixelPosition = !1, b.checked = !0, a.noCloneChecked = b.cloneNode(!0).checked, e.disabled = !0, a.optDisabled = !f.disabled, b = document.createElement("input"), b.value = "t", b.type = "radio", a.radioValue = b.value === "t", b.setAttribute("checked", "t"), b.setAttribute("name", "t"), c.appendChild(b), a.checkClone = c.cloneNode(!0).cloneNode(!0).lastChild.checked, a.focusinBubbles = "onfocusin" in window, d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", a.clearCloneStyle = d.style.backgroundClip === "content-box", jQuery(function() {
            var b, c, e = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box", f = document.getElementsByTagName("body")[0];
            if (!f)
                return;
            b = document.createElement("div"), b.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", f.appendChild(b).appendChild(d), d.innerHTML = "", d.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", jQuery.swap(f, f.style.zoom != null ? {zoom: 1} : {}, function() {
                a.boxSizing = d.offsetWidth === 4
            }), window.getComputedStyle && (a.pixelPosition = (window.getComputedStyle(d, null) || {}).top !== "1%", a.boxSizingReliable = (window.getComputedStyle(d, null) || {width: "4px"}).width === "4px", c = d.appendChild(document.createElement("div")), c.style.cssText = d.style.cssText = e, c.style.marginRight = c.style.width = "0", d.style.width = "1px", a.reliableMarginRight = !parseFloat((window.getComputedStyle(c, null) || {}).marginRight)), f.removeChild(b)
        }), a) : a
    }({});
    var data_user, data_priv, rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, rmultiDash = /([A-Z])/g;
    Data.uid = 1, Data.accepts = function(a) {
        return a.nodeType ? a.nodeType === 1 || a.nodeType === 9 : !0
    }, Data.prototype = {key: function(a) {
            if (!Data.accepts(a))
                return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = Data.uid++;
                try {
                    b[this.expando] = {value: c}, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, jQuery.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },set: function(a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if (typeof b == "string")
                f[b] = c;
            else if (jQuery.isEmptyObject(f))
                this.cache[e] = b;
            else
                for (d in b)
                    f[d] = b[d]
        },get: function(a, b) {
            var c = this.cache[this.key(a)];
            return b === undefined ? c : c[b]
        },access: function(a, b, c) {
            return b === undefined || b && typeof b == "string" && c === undefined ? this.get(a, b) : (this.set(a, b, c), c !== undefined ? c : b)
        },remove: function(a, b) {
            var c, d, e = this.key(a), f = this.cache[e];
            if (b === undefined)
                this.cache[e] = {};
            else {
                jQuery.isArray(b) ? d = b.concat(b.map(jQuery.camelCase)) : b in f ? d = [b] : (d = jQuery.camelCase(b), d = d in f ? [d] : d.match(core_rnotwhite) || []), c = d.length;
                while (c--)
                    delete f[d[c]]
            }
        },hasData: function(a) {
            return !jQuery.isEmptyObject(this.cache[a[this.expando]] || {})
        },discard: function(a) {
            delete this.cache[this.key(a)]
        }}, data_user = new Data, data_priv = new Data, jQuery.extend({acceptData: Data.accepts,hasData: function(a) {
            return data_user.hasData(a) || data_priv.hasData(a)
        },data: function(a, b, c) {
            return data_user.access(a, b, c)
        },removeData: function(a, b) {
            data_user.remove(a, b)
        },_data: function(a, b, c) {
            return data_priv.access(a, b, c)
        },_removeData: function(a, b) {
            data_priv.remove(a, b)
        }}), jQuery.fn.extend({data: function(a, b) {
            var c, d, e = this[0], f = 0, g = null;
            if (a === undefined) {
                if (this.length) {
                    g = data_user.get(e);
                    if (e.nodeType === 1 && !data_priv.get(e, "hasDataAttrs")) {
                        c = e.attributes;
                        for (; f < c.length; f++)
                            d = c[f].name, d.indexOf("data-") === 0 && (d = jQuery.camelCase(d.substring(5)), dataAttr(e, d, g[d]));
                        data_priv.set(e, "hasDataAttrs", !0)
                    }
                }
                return g
            }
            return typeof a == "object" ? this.each(function() {
                data_user.set(this, a)
            }) : jQuery.access(this, function(b) {
                var c, d = jQuery.camelCase(a);
                if (e && b === undefined) {
                    c = data_user.get(e, a);
                    if (c !== undefined)
                        return c;
                    c = data_user.get(e, d);
                    if (c !== undefined)
                        return c;
                    c = dataAttr(e, d, undefined);
                    if (c !== undefined)
                        return c;
                    return
                }
                this.each(function() {
                    var c = data_user.get(this, d);
                    data_user.set(this, d, b), a.indexOf("-") !== -1 && c !== undefined && data_user.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },removeData: function(a) {
            return this.each(function() {
                data_user.remove(this, a)
            })
        }}), jQuery.extend({queue: function(a, b, c) {
            var d;
            if (a)
                return b = (b || "fx") + "queue", d = data_priv.get(a, b), c && (!d || jQuery.isArray(c) ? d = data_priv.access(a, b, jQuery.makeArray(c)) : d.push(c)), d || []
        },dequeue: function(a, b) {
            b = b || "fx";
            var c = jQuery.queue(a, b), d = c.length, e = c.shift(), f = jQuery._queueHooks(a, b), g = function() {
                jQuery.dequeue(a, b)
            };
            e === "inprogress" && (e = c.shift(), d--), f.cur = e, e && (b === "fx" && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },_queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return data_priv.get(a, c) || data_priv.access(a, c, {empty: jQuery.Callbacks("once memory").add(function() {
                    data_priv.remove(a, [b + "queue", c])
                })})
        }}), jQuery.fn.extend({queue: function(a, b) {
            var c = 2;
            return typeof a != "string" && (b = a, a = "fx", c--), arguments.length < c ? jQuery.queue(this[0], a) : b === undefined ? this : this.each(function() {
                var c = jQuery.queue(this, a, b);
                jQuery._queueHooks(this, a), a === "fx" && c[0] !== "inprogress" && jQuery.dequeue(this, a)
            })
        },dequeue: function(a) {
            return this.each(function() {
                jQuery.dequeue(this, a)
            })
        },delay: function(a, b) {
            return a = jQuery.fx ? jQuery.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },promise: function(a, b) {
            var c, d = 1, e = jQuery.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            };
            typeof a != "string" && (b = a, a = undefined), a = a || "fx";
            while (g--)
                c = data_priv.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }});
    var nodeHook, boolHook, rclass = /[\t\r\n]/g, rreturn = /\r/g, rfocusable = /^(?:input|select|textarea|button)$/i;
    jQuery.fn.extend({attr: function(a, b) {
            return jQuery.access(this, jQuery.attr, a, b, arguments.length > 1)
        },removeAttr: function(a) {
            return this.each(function() {
                jQuery.removeAttr(this, a)
            })
        },prop: function(a, b) {
            return jQuery.access(this, jQuery.prop, a, b, arguments.length > 1)
        },removeProp: function(a) {
            return this.each(function() {
                delete this[jQuery.propFix[a] || a]
            })
        },addClass: function(a) {
            var b, c, d, e, f, g = 0, h = this.length, i = typeof a == "string" && a;
            if (jQuery.isFunction(a))
                return this.each(function(b) {
                    jQuery(this).addClass(a.call(this, b, this.className))
                });
            if (i) {
                b = (a || "").match(core_rnotwhite) || [];
                for (; g < h; g++) {
                    c = this[g], d = c.nodeType === 1 && (c.className ? (" " + c.className + " ").replace(rclass, " ") : " ");
                    if (d) {
                        f = 0;
                        while (e = b[f++])
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        c.className = jQuery.trim(d)
                    }
                }
            }
            return this
        },removeClass: function(a) {
            var b, c, d, e, f, g = 0, h = this.length, i = arguments.length === 0 || typeof a == "string" && a;
            if (jQuery.isFunction(a))
                return this.each(function(b) {
                    jQuery(this).removeClass(a.call(this, b, this.className))
                });
            if (i) {
                b = (a || "").match(core_rnotwhite) || [];
                for (; g < h; g++) {
                    c = this[g], d = c.nodeType === 1 && (c.className ? (" " + c.className + " ").replace(rclass, " ") : "");
                    if (d) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0)
                                d = d.replace(" " + e + " ", " ");
                        c.className = a ? jQuery.trim(d) : ""
                    }
                }
            }
            return this
        },toggleClass: function(a, b) {
            var c = typeof a, d = typeof b == "boolean";
            return jQuery.isFunction(a) ? this.each(function(c) {
                jQuery(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function() {
                if (c === "string") {
                    var e, f = 0, g = jQuery(this), h = b, i = a.match(core_rnotwhite) || [];
                    while (e = i[f++])
                        h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e)
                } else if (c === core_strundefined || c === "boolean")
                    this.className && data_priv.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : data_priv.get(this, "__className__") || ""
            })
        },hasClass: function(a) {
            var b = " " + a + " ", c = 0, d = this.length;
            for (; c < d; c++)
                if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(rclass, " ").indexOf(b) >= 0)
                    return !0;
            return !1
        },val: function(a) {
            var b, c, d, e = this[0];
            if (!arguments.length) {
                if (e)
                    return b = jQuery.valHooks[e.type] || jQuery.valHooks[e.nodeName.toLowerCase()], b && "get" in b && (c = b.get(e, "value")) !== undefined ? c : (c = e.value, typeof c == "string" ? c.replace(rreturn, "") : c == null ? "" : c);
                return
            }
            return d = jQuery.isFunction(a), this.each(function(c) {
                var e, f = jQuery(this);
                if (this.nodeType !== 1)
                    return;
                d ? e = a.call(this, c, f.val()) : e = a, e == null ? e = "" : typeof e == "number" ? e += "" : jQuery.isArray(e) && (e = jQuery.map(e, function(a) {
                    return a == null ? "" : a + ""
                })), b = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                if (!b || !("set" in b) || b.set(this, e, "value") === undefined)
                    this.value = e
            })
        }}), jQuery.extend({valHooks: {option: {get: function(a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }},select: {get: function(a) {
                    var b, c, d = a.options, e = a.selectedIndex, f = a.type === "select-one" || e < 0, g = f ? null : [], h = f ? e + 1 : d.length, i = e < 0 ? h : f ? e : 0;
                    for (; i < h; i++) {
                        c = d[i];
                        if ((c.selected || i === e) && (jQuery.support.optDisabled ? !c.disabled : c.getAttribute("disabled") === null) && (!c.parentNode.disabled || !jQuery.nodeName(c.parentNode, "optgroup"))) {
                            b = jQuery(c).val();
                            if (f)
                                return b;
                            g.push(b)
                        }
                    }
                    return g
                },set: function(a, b) {
                    var c, d, e = a.options, f = jQuery.makeArray(b), g = e.length;
                    while (g--) {
                        d = e[g];
                        if (d.selected = jQuery.inArray(jQuery(d).val(), f) >= 0)
                            c = !0
                    }
                    return c || (a.selectedIndex = -1), f
                }}},attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (!a || f === 3 || f === 8 || f === 2)
                return;
            if (typeof a.getAttribute === core_strundefined)
                return jQuery.prop(a, b, c);
            if (f !== 1 || !jQuery.isXMLDoc(a))
                b = b.toLowerCase(), d = jQuery.attrHooks[b] || (jQuery.expr.match.boolean.test(b) ? boolHook : nodeHook);
            if (c === undefined)
                return d && "get" in d && (e = d.get(a, b)) !== null ? e : (e = jQuery.find.attr(a, b), e == null ? undefined : e);
            if (c !== null)
                return d && "set" in d && (e = d.set(a, c, b)) !== undefined ? e : (a.setAttribute(b, c + ""), c);
            jQuery.removeAttr(a, b)
        },removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(core_rnotwhite);
            if (f && a.nodeType === 1)
                while (c = f[e++])
                    d = jQuery.propFix[c] || c, jQuery.expr.match.boolean.test(c) && (a[d] = !1), a.removeAttribute(c)
        },attrHooks: {type: {set: function(a, b) {
                    if (!jQuery.support.radioValue && b === "radio" && jQuery.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }}},propFix: {"for": "htmlFor","class": "className"},prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (!a || g === 3 || g === 8 || g === 2)
                return;
            return f = g !== 1 || !jQuery.isXMLDoc(a), f && (b = jQuery.propFix[b] || b, e = jQuery.propHooks[b]), c !== undefined ? e && "set" in e && (d = e.set(a, c, b)) !== undefined ? d : a[b] = c : e && "get" in e && (d = e.get(a, b)) !== null ? d : a[b]
        },propHooks: {tabIndex: {get: function(a) {
                    return a.hasAttribute("tabindex") || rfocusable.test(a.nodeName) || a.href ? a.tabIndex : -1
                }}}}), boolHook = {set: function(a, b, c) {
            return b === !1 ? jQuery.removeAttr(a, c) : a.setAttribute(c, c), c
        }}, jQuery.each(jQuery.expr.match.boolean.source.match(/\w+/g), function(a, b) {
        var c = jQuery.expr.attrHandle[b] || jQuery.find.attr;
        jQuery.expr.attrHandle[b] = function(a, b, d) {
            var e = jQuery.expr.attrHandle[b], f = d ? undefined : (jQuery.expr.attrHandle[b] = undefined) != c(a, b, d) ? b.toLowerCase() : null;
            return jQuery.expr.attrHandle[b] = e, f
        }
    }), jQuery.support.optSelected || (jQuery.propHooks.selected = {get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }}), jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        jQuery.propFix[this.toLowerCase()] = this
    }), jQuery.each(["radio", "checkbox"], function() {
        jQuery.valHooks[this] = {set: function(a, b) {
                if (jQuery.isArray(b))
                    return a.checked = jQuery.inArray(jQuery(a).val(), b) >= 0
            }}, jQuery.support.checkOn || (jQuery.valHooks[this].get = function(a) {
            return a.getAttribute("value") === null ? "on" : a.value
        })
    });
    var rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|contextmenu)|click/, rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
    jQuery.event = {global: {},add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = data_priv.get(a);
            if (!q)
                return;
            c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = jQuery.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(a) {
                return typeof jQuery === core_strundefined || !!a && jQuery.event.triggered === a.type ? undefined : jQuery.event.dispatch.apply(g.elem, arguments)
            }, g.elem = a), b = (b || "").match(core_rnotwhite) || [""], j = b.length;
            while (j--) {
                h = rtypenamespace.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort();
                if (!n)
                    continue;
                l = jQuery.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = jQuery.event.special[n] || {}, k = jQuery.extend({type: n,origType: p,data: d,handler: c,guid: c.guid,selector: e,needsContext: e && jQuery.expr.match.needsContext.test(e),namespace: o.join(".")}, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, (!l.setup || l.setup.call(a, d, o, g) === !1) && a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), jQuery.event.global[n] = !0
            }
            a = null
        },remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = data_priv.hasData(a) && data_priv.get(a);
            if (!q || !(i = q.events))
                return;
            b = (b || "").match(core_rnotwhite) || [""], j = b.length;
            while (j--) {
                h = rtypenamespace.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort();
                if (!n) {
                    for (n in i)
                        jQuery.event.remove(a, n + b[j], c, d, !0);
                    continue
                }
                l = jQuery.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                while (f--)
                    k = m[f], (e || p === k.origType) && (!c || c.guid === k.guid) && (!h || h.test(k.namespace)) && (!d || d === k.selector || d === "**" && k.selector) && (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                g && !m.length && ((!l.teardown || l.teardown.call(a, o, q.handle) === !1) && jQuery.removeEvent(a, n, q.handle), delete i[n])
            }
            jQuery.isEmptyObject(i) && (delete q.handle, data_priv.remove(a, "events"))
        },trigger: function(a, b, c, d) {
            var e, f, g, h, i, j, k, l = [c || document], m = core_hasOwn.call(a, "type") ? a.type : a, n = core_hasOwn.call(a, "namespace") ? a.namespace.split(".") : [];
            f = g = c = c || document;
            if (c.nodeType === 3 || c.nodeType === 8)
                return;
            if (rfocusMorph.test(m + jQuery.event.triggered))
                return;
            m.indexOf(".") >= 0 && (n = m.split("."), m = n.shift(), n.sort()), i = m.indexOf(":") < 0 && "on" + m, a = a[jQuery.expando] ? a : new jQuery.Event(m, typeof a == "object" && a), a.isTrigger = d ? 2 : 3, a.namespace = n.join("."), a.namespace_re = a.namespace ? new RegExp("(^|\\.)" + n.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = undefined, a.target || (a.target = c), b = b == null ? [a] : jQuery.makeArray(b, [a]), k = jQuery.event.special[m] || {};
            if (!d && k.trigger && k.trigger.apply(c, b) === !1)
                return;
            if (!d && !k.noBubble && !jQuery.isWindow(c)) {
                h = k.delegateType || m, rfocusMorph.test(h + m) || (f = f.parentNode);
                for (; f; f = f.parentNode)
                    l.push(f), g = f;
                g === (c.ownerDocument || document) && l.push(g.defaultView || g.parentWindow || window)
            }
            e = 0;
            while ((f = l[e++]) && !a.isPropagationStopped())
                a.type = e > 1 ? h : k.bindType || m, j = (data_priv.get(f, "events") || {})[a.type] && data_priv.get(f, "handle"), j && j.apply(f, b), j = i && f[i], j && jQuery.acceptData(f) && j.apply && j.apply(f, b) === !1 && a.preventDefault();
            return a.type = m, !d && !a.isDefaultPrevented() && (!k._default || k._default.apply(l.pop(), b) === !1) && jQuery.acceptData(c) && i && jQuery.isFunction(c[m]) && !jQuery.isWindow(c) && (g = c[i], g && (c[i] = null), jQuery.event.triggered = m, c[m](), jQuery.event.triggered = undefined, g && (c[i] = g)), a.result
        },dispatch: function(a) {
            a = jQuery.event.fix(a);
            var b, c, d, e, f, g = [], h = core_slice.call(arguments), i = (data_priv.get(this, "events") || {})[a.type] || [], j = jQuery.event.special[a.type] || {};
            h[0] = a, a.delegateTarget = this;
            if (j.preDispatch && j.preDispatch.call(this, a) === !1)
                return;
            g = jQuery.event.handlers.call(this, a, i), b = 0;
            while ((e = g[b++]) && !a.isPropagationStopped()) {
                a.currentTarget = e.elem, c = 0;
                while ((f = e.handlers[c++]) && !a.isImmediatePropagationStopped())
                    if (!a.namespace_re || a.namespace_re.test(f.namespace))
                        a.handleObj = f, a.data = f.data, d = ((jQuery.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), d !== undefined && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation())
            }
            return j.postDispatch && j.postDispatch.call(this, a), a.result
        },handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || a.type !== "click"))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || a.type !== "click") {
                        d = [];
                        for (c = 0; c < h; c++)
                            f = b[c], e = f.selector + " ", d[e] === undefined && (d[e] = f.needsContext ? jQuery(e, this).index(i) >= 0 : jQuery.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({elem: i,handlers: d})
                    }
            return h < b.length && g.push({elem: this,handlers: b.slice(h)}), g
        },props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks: {},keyHooks: {props: "char charCode key keyCode".split(" "),filter: function(a, b) {
                return a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode), a
            }},mouseHooks: {props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter: function(a, b) {
                var c, d, e, f = b.button;
                return a.pageX == null && b.clientX != null && (c = a.target.ownerDocument || document, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), !a.which && f !== undefined && (a.which = f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0), a
            }},fix: function(a) {
            if (a[jQuery.expando])
                return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = rmouseEvent.test(e) ? this.mouseHooks : rkeyEvent.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new jQuery.Event(f), b = d.length;
            while (b--)
                c = d[b], a[c] = f[c];
            return a.target.nodeType === 3 && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },special: {load: {noBubble: !0},focus: {trigger: function() {
                    if (this !== safeActiveElement() && this.focus)
                        return this.focus(), !1
                },delegateType: "focusin"},blur: {trigger: function() {
                    if (this === safeActiveElement() && this.blur)
                        return this.blur(), !1
                },delegateType: "focusout"},click: {trigger: function() {
                    if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input"))
                        return this.click(), !1
                },_default: function(a) {
                    return jQuery.nodeName(a.target, "a")
                }},beforeunload: {postDispatch: function(a) {
                    a.result !== undefined && (a.originalEvent.returnValue = a.result)
                }}},simulate: function(a, b, c, d) {
            var e = jQuery.extend(new jQuery.Event, c, {type: a,isSimulated: !0,originalEvent: {}});
            d ? jQuery.event.trigger(e, null, b) : jQuery.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }}, jQuery.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, jQuery.Event = function(a, b) {
        if (!(this instanceof jQuery.Event))
            return new jQuery.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.getPreventDefault && a.getPreventDefault() ? returnTrue : returnFalse) : this.type = a, b && jQuery.extend(this, b), this.timeStamp = a && a.timeStamp || jQuery.now(), this[jQuery.expando] = !0
    }, jQuery.Event.prototype = {isDefaultPrevented: returnFalse,isPropagationStopped: returnFalse,isImmediatePropagationStopped: returnFalse,preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = returnTrue, a && a.preventDefault && a.preventDefault()
        },stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = returnTrue, a && a.stopPropagation && a.stopPropagation()
        },stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = returnTrue, this.stopPropagation()
        }}, jQuery.each({mouseenter: "mouseover",mouseleave: "mouseout"}, function(a, b) {
        jQuery.event.special[a] = {delegateType: b,bindType: b,handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                if (!e || e !== d && !jQuery.contains(d, e))
                    a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b;
                return c
            }}
    }), jQuery.support.focusinBubbles || jQuery.each({focus: "focusin",blur: "focusout"}, function(a, b) {
        var c = 0, d = function(a) {
            jQuery.event.simulate(b, a.target, jQuery.event.fix(a), !0)
        };
        jQuery.event.special[b] = {setup: function() {
                c++ === 0 && document.addEventListener(a, d, !0)
            },teardown: function() {
                --c === 0 && document.removeEventListener(a, d, !0)
            }}
    }), jQuery.fn.extend({on: function(a, b, c, d, e) {
            var f, g;
            if (typeof a == "object") {
                typeof b != "string" && (c = c || b, b = undefined);
                for (g in a)
                    this.on(g, b, c, a[g], e);
                return this
            }
            c == null && d == null ? (d = b, c = b = undefined) : d == null && (typeof b == "string" ? (d = c, c = undefined) : (d = c, c = b, b = undefined));
            if (d === !1)
                d = returnFalse;
            else if (!d)
                return this;
            return e === 1 && (f = d, d = function(a) {
                return jQuery().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = jQuery.guid++)), this.each(function() {
                jQuery.event.add(this, a, d, c, b)
            })
        },one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj, jQuery(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if (typeof a == "object") {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            if (b === !1 || typeof b == "function")
                c = b, b = undefined;
            return c === !1 && (c = returnFalse), this.each(function() {
                jQuery.event.remove(this, a, c, b)
            })
        },trigger: function(a, b) {
            return this.each(function() {
                jQuery.event.trigger(a, b, this)
            })
        },triggerHandler: function(a, b) {
            var c = this[0];
            if (c)
                return jQuery.event.trigger(a, b, c, !0)
        }});
    var isSimple = /^.[^:#\[\.,]*$/, rneedsContext = jQuery.expr.match.needsContext, guaranteedUnique = {children: !0,contents: !0,next: !0,prev: !0};
    jQuery.fn.extend({find: function(a) {
            var b, c, d, e = this.length;
            if (typeof a != "string")
                return b = this, this.pushStack(jQuery(a).filter(function() {
                    for (d = 0; d < e; d++)
                        if (jQuery.contains(b[d], this))
                            return !0
                }));
            c = [];
            for (d = 0; d < e; d++)
                jQuery.find(a, this[d], c);
            return c = this.pushStack(e > 1 ? jQuery.unique(c) : c), c.selector = (this.selector ? this.selector + " " : "") + a, c
        },has: function(a) {
            var b = jQuery(a, this), c = b.length;
            return this.filter(function() {
                var a = 0;
                for (; a < c; a++)
                    if (jQuery.contains(this, b[a]))
                        return !0
            })
        },not: function(a) {
            return this.pushStack(winnow(this, a || [], !0))
        },filter: function(a) {
            return this.pushStack(winnow(this, a || [], !1))
        },is: function(a) {
            return !!a && (typeof a == "string" ? rneedsContext.test(a) ? jQuery(a, this.context).index(this[0]) >= 0 : jQuery.filter(a, this).length > 0 : this.filter(a).length > 0)
        },closest: function(a, b) {
            var c, d = 0, e = this.length, f = [], g = rneedsContext.test(a) || typeof a != "string" ? jQuery(a, b || this.context) : 0;
            for (; d < e; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : c.nodeType === 1 && jQuery.find.matchesSelector(c, a))) {
                        c = f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? jQuery.unique(f) : f)
        },index: function(a) {
            return a ? typeof a == "string" ? core_indexOf.call(jQuery(a), this[0]) : core_indexOf.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },add: function(a, b) {
            var c = typeof a == "string" ? jQuery(a, b) : jQuery.makeArray(a && a.nodeType ? [a] : a), d = jQuery.merge(this.get(), c);
            return this.pushStack(jQuery.unique(d))
        },addBack: function(a) {
            return this.add(a == null ? this.prevObject : this.prevObject.filter(a))
        }}), jQuery.each({parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        },parents: function(a) {
            return jQuery.dir(a, "parentNode")
        },parentsUntil: function(a, b, c) {
            return jQuery.dir(a, "parentNode", c)
        },next: function(a) {
            return sibling(a, "nextSibling")
        },prev: function(a) {
            return sibling(a, "previousSibling")
        },nextAll: function(a) {
            return jQuery.dir(a, "nextSibling")
        },prevAll: function(a) {
            return jQuery.dir(a, "previousSibling")
        },nextUntil: function(a, b, c) {
            return jQuery.dir(a, "nextSibling", c)
        },prevUntil: function(a, b, c) {
            return jQuery.dir(a, "previousSibling", c)
        },siblings: function(a) {
            return jQuery.sibling((a.parentNode || {}).firstChild, a)
        },children: function(a) {
            return jQuery.sibling(a.firstChild)
        },contents: function(a) {
            return jQuery.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : jQuery.merge([], a.childNodes)
        }}, function(a, b) {
        jQuery.fn[a] = function(c, d) {
            var e = jQuery.map(this, b, c);
            return a.slice(-5) !== "Until" && (d = c), d && typeof d == "string" && (e = jQuery.filter(d, e)), this.length > 1 && (guaranteedUnique[a] || jQuery.unique(e), a[0] === "p" && e.reverse()), this.pushStack(e)
        }
    }), jQuery.extend({filter: function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), b.length === 1 && d.nodeType === 1 ? jQuery.find.matchesSelector(d, a) ? [d] : [] : jQuery.find.matches(a, jQuery.grep(b, function(a) {
                return a.nodeType === 1
            }))
        },dir: function(a, b, c) {
            var d = [], e = c !== undefined;
            while ((a = a[b]) && a.nodeType !== 9)
                if (a.nodeType === 1) {
                    if (e && jQuery(a).is(c))
                        break;
                    d.push(a)
                }
            return d
        },sibling: function(a, b) {
            var c = [];
            for (; a; a = a.nextSibling)
                a.nodeType === 1 && a !== b && c.push(a);
            return c
        }});
    var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, rtagName = /<([\w:]+)/, rhtml = /<|&#?\w+;/, rnoInnerhtml = /<(?:script|style|link)/i, manipulation_rcheckableType = /^(?:checkbox|radio)$/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rscriptType = /^$|\/(?:java|ecma)script/i, rscriptTypeMasked = /^true\/(.*)/, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, wrapMap = {option: [1, "<select multiple='multiple'>", "</select>"],thead: [1, "<table>", "</table>"],tr: [2, "<table><tbody>", "</tbody></table>"],td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],_default: [0, "", ""]};
    wrapMap.optgroup = wrapMap.option, wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.col = wrapMap.thead, wrapMap.th = wrapMap.td, jQuery.fn.extend({text: function(a) {
            return jQuery.access(this, function(a) {
                return a === undefined ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(a))
            }, null, a, arguments.length)
        },append: function() {
            return this.domManip(arguments, function(a) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var b = manipulationTarget(this, a);
                    b.appendChild(a)
                }
            })
        },prepend: function() {
            return this.domManip(arguments, function(a) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var b = manipulationTarget(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },remove: function(a, b) {
            var c, d = a ? jQuery.filter(a, this) : this, e = 0;
            for (; (c = d[e]) != null; e++)
                !b && c.nodeType === 1 && jQuery.cleanData(getAll(c)), c.parentNode && (b && jQuery.contains(c.ownerDocument, c) && setGlobalEval(getAll(c, "script")), c.parentNode.removeChild(c));
            return this
        },empty: function() {
            var a, b = 0;
            for (; (a = this[b]) != null; b++)
                a.nodeType === 1 && (jQuery.cleanData(getAll(a, !1)), a.textContent = "");
            return this
        },clone: function(a, b) {
            return a = a == null ? !1 : a, b = b == null ? a : b, this.map(function() {
                return jQuery.clone(this, a, b)
            })
        },html: function(a) {
            return jQuery.access(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (a === undefined && b.nodeType === 1)
                    return b.innerHTML;
                if (typeof a == "string" && !rnoInnerhtml.test(a) && !wrapMap[(rtagName.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(rxhtmlTag, "<$1></$2>");
                    try {
                        for (; c < d; c++)
                            b = this[c] || {}, b.nodeType === 1 && (jQuery.cleanData(getAll(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },replaceWith: function() {
            var a = jQuery.map(this, function(a) {
                return [a.nextSibling, a.parentNode]
            }), b = 0;
            return this.domManip(arguments, function(c) {
                var d = a[b++], e = a[b++];
                e && (jQuery(this).remove(), e.insertBefore(c, d))
            }, !0), b ? this : this.remove()
        },detach: function(a) {
            return this.remove(a, !0)
        },domManip: function(a, b, c) {
            a = core_concat.apply([], a);
            var d, e, f, g, h, i, j = 0, k = this.length, l = this, m = k - 1, n = a[0], o = jQuery.isFunction(n);
            if (o || !(k <= 1 || typeof n != "string" || jQuery.support.checkClone || !rchecked.test(n)))
                return this.each(function(d) {
                    var e = l.eq(d);
                    o && (a[0] = n.call(this, d, e.html())), e.domManip(a, b, c)
                });
            if (k) {
                d = jQuery.buildFragment(a, this[0].ownerDocument, !1, !c && this), e = d.firstChild, d.childNodes.length === 1 && (d = e);
                if (e) {
                    f = jQuery.map(getAll(d, "script"), disableScript), g = f.length;
                    for (; j < k; j++)
                        h = d, j !== m && (h = jQuery.clone(h, !0, !0), g && jQuery.merge(f, getAll(h, "script"))), b.call(this[j], h, j);
                    if (g) {
                        i = f[f.length - 1].ownerDocument, jQuery.map(f, restoreScript);
                        for (j = 0; j < g; j++)
                            h = f[j], rscriptType.test(h.type || "") && !data_priv.access(h, "globalEval") && jQuery.contains(i, h) && (h.src ? jQuery._evalUrl(h.src) : jQuery.globalEval(h.textContent.replace(rcleanScript, "")))
                    }
                }
            }
            return this
        }}), jQuery.each({appendTo: "append",prependTo: "prepend",insertBefore: "before",insertAfter: "after",replaceAll: "replaceWith"}, function(a, b) {
        jQuery.fn[a] = function(a) {
            var c, d = [], e = jQuery(a), f = e.length - 1, g = 0;
            for (; g <= f; g++)
                c = g === f ? this : this.clone(!0), jQuery(e[g])[b](c), core_push.apply(d, c.get());
            return this.pushStack(d)
        }
    }), jQuery.extend({clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = jQuery.contains(a.ownerDocument, a);
            if (!jQuery.support.noCloneChecked && (a.nodeType === 1 || a.nodeType === 11) && !jQuery.isXMLDoc(a)) {
                g = getAll(h), f = getAll(a);
                for (d = 0, e = f.length; d < e; d++)
                    fixInput(f[d], g[d])
            }
            if (b)
                if (c) {
                    f = f || getAll(a), g = g || getAll(h);
                    for (d = 0, e = f.length; d < e; d++)
                        cloneCopyEvent(f[d], g[d])
                } else
                    cloneCopyEvent(a, h);
            return g = getAll(h, "script"), g.length > 0 && setGlobalEval(g, !i && getAll(a, "script")), h
        },buildFragment: function(a, b, c, d) {
            var e, f, g, h, i, j, k = 0, l = a.length, m = b.createDocumentFragment(), n = [];
            for (; k < l; k++) {
                e = a[k];
                if (e || e === 0)
                    if (jQuery.type(e) === "object")
                        jQuery.merge(n, e.nodeType ? [e] : e);
                    else if (!rhtml.test(e))
                        n.push(b.createTextNode(e));
                    else {
                        f = f || m.appendChild(b.createElement("div")), g = (rtagName.exec(e) || ["", ""])[1].toLowerCase(), h = wrapMap[g] || wrapMap._default, f.innerHTML = h[1] + e.replace(rxhtmlTag, "<$1></$2>") + h[2], j = h[0];
                        while (j--)
                            f = f.firstChild;
                        jQuery.merge(n, f.childNodes), f = m.firstChild, f.textContent = ""
                    }
            }
            m.textContent = "", k = 0;
            while (e = n[k++]) {
                if (d && jQuery.inArray(e, d) !== -1)
                    continue;
                i = jQuery.contains(e.ownerDocument, e), f = getAll(m.appendChild(e), "script"), i && setGlobalEval(f);
                if (c) {
                    j = 0;
                    while (e = f[j++])
                        rscriptType.test(e.type || "") && c.push(e)
                }
            }
            return m
        },cleanData: function(a) {
            var b, c, d, e = a.length, f = 0, g = jQuery.event.special;
            for (; f < e; f++) {
                c = a[f];
                if (jQuery.acceptData(c)) {
                    b = data_priv.access(c);
                    if (b)
                        for (d in b.events)
                            g[d] ? jQuery.event.remove(c, d) : jQuery.removeEvent(c, d, b.handle)
                }
                data_user.discard(c), data_priv.discard(c)
            }
        },_evalUrl: function(a) {
            return jQuery.ajax({url: a,type: "GET",dataType: "text",async: !1,global: !1,success: jQuery.globalEval})
        }}), jQuery.fn.extend({wrapAll: function(a) {
            var b;
            return jQuery.isFunction(a) ? this.each(function(b) {
                jQuery(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = jQuery(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while (a.firstElementChild)
                    a = a.firstElementChild;
                return a
            }).append(this)), this)
        },wrapInner: function(a) {
            return jQuery.isFunction(a) ? this.each(function(b) {
                jQuery(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = jQuery(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },wrap: function(a) {
            var b = jQuery.isFunction(a);
            return this.each(function(c) {
                jQuery(this).wrapAll(b ? a.call(this, c) : a)
            })
        },unwrap: function() {
            return this.parent().each(function() {
                jQuery.nodeName(this, "body") || jQuery(this).replaceWith(this.childNodes)
            }).end()
        }});
    var curCSS, iframe, rdisplayswap = /^(none|table(?!-c[ea]).+)/
    , rmargin = /^margin/, rnumsplit = new RegExp("^(" + core_pnum + ")(.*)$", "i"), rnumnonpx = new RegExp("^(" + core_pnum + ")(?!px)[a-z%]+$", "i"), rrelNum = new RegExp("^([+-])=(" + core_pnum + ")", "i"), elemdisplay = {BODY: "block"}, cssShow = {position: "absolute",visibility: "hidden",display: "block"}, cssNormalTransform = {letterSpacing: 0,fontWeight: 400}, cssExpand = ["Top", "Right", "Bottom", "Left"], cssPrefixes = ["Webkit", "O", "Moz", "ms"];
    jQuery.fn.extend({css: function(a, b) {
            return jQuery.access(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (jQuery.isArray(b)) {
                    d = getStyles(a), e = b.length;
                    for (; g < e; g++)
                        f[b[g]] = jQuery.css(a, b[g], !1, d);
                    return f
                }
                return c !== undefined ? jQuery.style(a, b, c) : jQuery.css(a, b)
            }, a, b, arguments.length > 1)
        },show: function() {
            return showHide(this, !0)
        },hide: function() {
            return showHide(this)
        },toggle: function(a) {
            var b = typeof a == "boolean";
            return this.each(function() {
                (b ? a : isHidden(this)) ? jQuery(this).show() : jQuery(this).hide()
            })
        }}), jQuery.extend({cssHooks: {opacity: {get: function(a, b) {
                    if (b) {
                        var c = curCSS(a, "opacity");
                        return c === "" ? "1" : c
                    }
                }}},cssNumber: {columnCount: !0,fillOpacity: !0,fontWeight: !0,lineHeight: !0,opacity: !0,orphans: !0,widows: !0,zIndex: !0,zoom: !0},cssProps: {"float": "cssFloat"},style: function(a, b, c, d) {
            if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style)
                return;
            var e, f, g, h = jQuery.camelCase(b), i = a.style;
            b = jQuery.cssProps[h] || (jQuery.cssProps[h] = vendorPropName(i, h)), g = jQuery.cssHooks[b] || jQuery.cssHooks[h];
            if (c === undefined)
                return g && "get" in g && (e = g.get(a, !1, d)) !== undefined ? e : i[b];
            f = typeof c, f === "string" && (e = rrelNum.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(jQuery.css(a, b)), f = "number");
            if (c == null || f === "number" && isNaN(c))
                return;
            f === "number" && !jQuery.cssNumber[h] && (c += "px"), !jQuery.support.clearCloneStyle && c === "" && b.indexOf("background") === 0 && (i[b] = "inherit");
            if (!g || !("set" in g) || (c = g.set(a, c, d)) !== undefined)
                i[b] = c
        },css: function(a, b, c, d) {
            var e, f, g, h = jQuery.camelCase(b);
            return b = jQuery.cssProps[h] || (jQuery.cssProps[h] = vendorPropName(a.style, h)), g = jQuery.cssHooks[b] || jQuery.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), e === undefined && (e = curCSS(a, b, d)), e === "normal" && b in cssNormalTransform && (e = cssNormalTransform[b]), c === "" || c ? (f = parseFloat(e), c === !0 || jQuery.isNumeric(f) ? f || 0 : e) : e
        }}), curCSS = function(a, b, c) {
        var d, e, f, g = c || getStyles(a), h = g ? g.getPropertyValue(b) || g[b] : undefined, i = a.style;
        return g && (h === "" && !jQuery.contains(a.ownerDocument, a) && (h = jQuery.style(a, b)), rnumnonpx.test(h) && rmargin.test(b) && (d = i.width, e = i.minWidth, f = i.maxWidth, i.minWidth = i.maxWidth = i.width = h, h = g.width, i.width = d, i.minWidth = e, i.maxWidth = f)), h
    }, jQuery.each(["height", "width"], function(a, b) {
        jQuery.cssHooks[b] = {get: function(a, c, d) {
                if (c)
                    return a.offsetWidth === 0 && rdisplayswap.test(jQuery.css(a, "display")) ? jQuery.swap(a, cssShow, function() {
                        return getWidthOrHeight(a, b, d)
                    }) : getWidthOrHeight(a, b, d)
            },set: function(a, c, d) {
                var e = d && getStyles(a);
                return setPositiveNumber(a, c, d ? augmentWidthOrHeight(a, b, d, jQuery.support.boxSizing && jQuery.css(a, "boxSizing", !1, e) === "border-box", e) : 0)
            }}
    }), jQuery(function() {
        jQuery.support.reliableMarginRight || (jQuery.cssHooks.marginRight = {get: function(a, b) {
                if (b)
                    return jQuery.swap(a, {display: "inline-block"}, curCSS, [a, "marginRight"])
            }}), !jQuery.support.pixelPosition && jQuery.fn.position && jQuery.each(["top", "left"], function(a, b) {
            jQuery.cssHooks[b] = {get: function(a, c) {
                    if (c)
                        return c = curCSS(a, b), rnumnonpx.test(c) ? jQuery(a).position()[b] + "px" : c
                }}
        })
    }), jQuery.expr && jQuery.expr.filters && (jQuery.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, jQuery.expr.filters.visible = function(a) {
        return !jQuery.expr.filters.hidden(a)
    }), jQuery.each({margin: "",padding: "",border: "Width"}, function(a, b) {
        jQuery.cssHooks[a + b] = {expand: function(c) {
                var d = 0, e = {}, f = typeof c == "string" ? c.split(" ") : [c];
                for (; d < 4; d++)
                    e[a + cssExpand[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }}, rmargin.test(a) || (jQuery.cssHooks[a + b].set = setPositiveNumber)
    });
    var r20 = /%20/g, rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
    jQuery.fn.extend({serialize: function() {
            return jQuery.param(this.serializeArray())
        },serializeArray: function() {
            return this.map(function() {
                var a = jQuery.prop(this, "elements");
                return a ? jQuery.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(a) && (this.checked || !manipulation_rcheckableType.test(a))
            }).map(function(a, b) {
                var c = jQuery(this).val();
                return c == null ? null : jQuery.isArray(c) ? jQuery.map(c, function(a) {
                    return {name: b.name,value: a.replace(rCRLF, "\r\n")}
                }) : {name: b.name,value: c.replace(rCRLF, "\r\n")}
            }).get()
        }}), jQuery.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = jQuery.isFunction(b) ? b() : b == null ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        b === undefined && (b = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional);
        if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a))
            jQuery.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                buildParams(c, a[c], b, e);
        return d.join("&").replace(r20, "+")
    }, jQuery.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        jQuery.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), jQuery.fn.extend({hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },unbind: function(a, b) {
            return this.off(a, null, b)
        },delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },undelegate: function(a, b, c) {
            return arguments.length === 1 ? this.off(a, "**") : this.off(b, a || "**", c)
        }});
    var ajaxLocParts, ajaxLocation, ajax_nonce = jQuery.now(), ajax_rquery = /\?/, rhash = /#.*$/, rts = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, _load = jQuery.fn.load, prefilters = {}, transports = {}, allTypes = "*/".concat("*");
    try {
        ajaxLocation = location.href
    } catch (e) {
        ajaxLocation = document.createElement("a"), ajaxLocation.href = "", ajaxLocation = ajaxLocation.href
    }
    ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [], jQuery.fn.load = function(a, b, c) {
        if (typeof a != "string" && _load)
            return _load.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = a.slice(h), a = a.slice(0, h)), jQuery.isFunction(b) ? (c = b, b = undefined) : b && typeof b == "object" && (e = "POST"), g.length > 0 && jQuery.ajax({url: a,type: e,dataType: "html",data: b}).done(function(a) {
            f = arguments, g.html(d ? jQuery("<div>").append(jQuery.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, f || [a.responseText, b, a])
        }), this
    }, jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        jQuery.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), jQuery.extend({active: 0,lastModified: {},etag: {},ajaxSettings: {url: ajaxLocation,type: "GET",isLocal: rlocalProtocol.test(ajaxLocParts[1]),global: !0,processData: !0,async: !0,contentType: "application/x-www-form-urlencoded; charset=UTF-8",accepts: {"*": allTypes,text: "text/plain",html: "text/html",xml: "application/xml, text/xml",json: "application/json, text/javascript"},contents: {xml: /xml/,html: /html/,json: /json/},responseFields: {xml: "responseXML",text: "responseText",json: "responseJSON"},converters: {"* text": String,"text html": !0,"text json": jQuery.parseJSON,"text xml": jQuery.parseXML},flatOptions: {url: !0,context: !0}},ajaxSetup: function(a, b) {
            return b ? ajaxExtend(ajaxExtend(a, jQuery.ajaxSettings), b) : ajaxExtend(jQuery.ajaxSettings, a)
        },ajaxPrefilter: addToPrefiltersOrTransports(prefilters),ajaxTransport: addToPrefiltersOrTransports(transports),ajax: function(a, b) {
            function w(a, b, f, h) {
                var j, q, r, t, v, w = b;
                if (s === 2)
                    return;
                s = 2, g && clearTimeout(g), c = undefined, e = h || "", u.readyState = a > 0 ? 4 : 0, j = a >= 200 && a < 300 || a === 304, f && (t = ajaxHandleResponses(k, u, f)), t = ajaxConvert(k, t, u, j);
                if (j)
                    k.ifModified && (v = u.getResponseHeader("Last-Modified"), v && (jQuery.lastModified[d] = v), v = u.getResponseHeader("etag"), v && (jQuery.etag[d] = v)), a === 204 ? w = "nocontent" : a === 304 ? w = "notmodified" : (w = t.state, q = t.data, r = t.error, j = !r);
                else {
                    r = w;
                    if (a || !w)
                        w = "error", a < 0 && (a = 0)
                }
                u.status = a, u.statusText = (b || w) + "", j ? n.resolveWith(l, [q, w, u]) : n.rejectWith(l, [u, w, r]), u.statusCode(p), p = undefined, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [u, k, j ? q : r]), o.fireWith(l, [u, w]), i && (m.trigger("ajaxComplete", [u, k]), --jQuery.active || jQuery.event.trigger("ajaxStop"))
            }
            typeof a == "object" && (b = a, a = undefined), b = b || {};
            var c, d, e, f, g, h, i, j, k = jQuery.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? jQuery(l) : jQuery.event, n = jQuery.Deferred(), o = jQuery.Callbacks("once memory"), p = k.statusCode || {}, q = {}, r = {}, s = 0, t = "canceled", u = {readyState: 0,getResponseHeader: function(a) {
                    var b;
                    if (s === 2) {
                        if (!f) {
                            f = {};
                            while (b = rheaders.exec(e))
                                f[b[1].toLowerCase()] = b[2]
                        }
                        b = f[a.toLowerCase()]
                    }
                    return b == null ? null : b
                },getAllResponseHeaders: function() {
                    return s === 2 ? e : null
                },setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return s || (a = r[c] = r[c] || a, q[a] = b), this
                },overrideMimeType: function(a) {
                    return s || (k.mimeType = a), this
                },statusCode: function(a) {
                    var b;
                    if (a)
                        if (s < 2)
                            for (b in a)
                                p[b] = [p[b], a[b]];
                        else
                            u.always(a[u.status]);
                    return this
                },abort: function(a) {
                    var b = a || t;
                    return c && c.abort(b), w(0, b), this
                }};
            n.promise(u).complete = o.add, u.success = u.done, u.error = u.fail, k.url = ((a || k.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = jQuery.trim(k.dataType || "*").toLowerCase().match(core_rnotwhite) || [""], k.crossDomain == null && (h = rurl.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === ajaxLocParts[1] && h[2] === ajaxLocParts[2] && (h[3] || (h[1] === "http:" ? "80" : "443")) === (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443")))), k.data && k.processData && typeof k.data != "string" && (k.data = jQuery.param(k.data, k.traditional)), inspectPrefiltersOrTransports(prefilters, k, b, u);
            if (s === 2)
                return u;
            i = k.global, i && jQuery.active++ === 0 && jQuery.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !rnoContent.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (ajax_rquery.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = rts.test(d) ? d.replace(rts, "$1_=" + ajax_nonce++) : d + (ajax_rquery.test(d) ? "&" : "?") + "_=" + ajax_nonce++)), k.ifModified && (jQuery.lastModified[d] && u.setRequestHeader("If-Modified-Since", jQuery.lastModified[d]), jQuery.etag[d] && u.setRequestHeader("If-None-Match", jQuery.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && u.setRequestHeader("Content-Type", k.contentType), u.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + (k.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers)
                u.setRequestHeader(j, k.headers[j]);
            if (!k.beforeSend || k.beforeSend.call(l, u, k) !== !1 && s !== 2) {
                t = "abort";
                for (j in {success: 1,error: 1,complete: 1})
                    u[j](k[j]);
                c = inspectPrefiltersOrTransports(transports, k, b, u);
                if (!c)
                    w(-1, "No Transport");
                else {
                    u.readyState = 1, i && m.trigger("ajaxSend", [u, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                        u.abort("timeout")
                    }, k.timeout));
                    try {
                        s = 1, c.send(q, w)
                    } catch (v) {
                        if (!(s < 2))
                            throw v;
                        w(-1, v)
                    }
                }
                return u
            }
            return u.abort()
        },getJSON: function(a, b, c) {
            return jQuery.get(a, b, c, "json")
        },getScript: function(a, b) {
            return jQuery.get(a, undefined, b, "script")
        }}), jQuery.each(["get", "post"], function(a, b) {
        jQuery[b] = function(a, c, d, e) {
            return jQuery.isFunction(c) && (e = e || d, d = c, c = undefined), jQuery.ajax({url: a,type: b,dataType: e,data: c,success: d})
        }
    }), jQuery.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents: {script: /(?:java|ecma)script/},converters: {"text script": function(a) {
                return jQuery.globalEval(a), a
            }}}), jQuery.ajaxPrefilter("script", function(a) {
        a.cache === undefined && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), jQuery.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {send: function(d, e) {
                    b = jQuery("<script>").prop({async: !0,charset: a.scriptCharset,src: a.url}).on("load error", c = function(a) {
                        b.remove(), c = null, a && e(a.type === "error" ? 404 : 200, a.type)
                    }), document.head.appendChild(b[0])
                },abort: function() {
                    c && c()
                }}
        }
    });
    var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({jsonp: "callback",jsonpCallback: function() {
            var a = oldCallbacks.pop() || jQuery.expando + "_" + ajax_nonce++;
            return this[a] = !0, a
        }}), jQuery.ajaxPrefilter("json jsonp", function(a, b, c) {
        var d, e, f, g = a.jsonp !== !1 && (rjsonp.test(a.url) ? "url" : typeof a.data == "string" && !(a.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(a.data) && "data");
        if (g || a.dataTypes[0] === "jsonp")
            return d = a.jsonpCallback = jQuery.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, g ? a[g] = a[g].replace(rjsonp, "$1" + d) : a.jsonp !== !1 && (a.url += (ajax_rquery.test(a.url) ? "&" : "?") + a.jsonp + "=" + d), a.converters["script json"] = function() {
                return f || jQuery.error(d + " was not called"), f[0]
            }, a.dataTypes[0] = "json", e = window[d], window[d] = function() {
                f = arguments
            }, c.always(function() {
                window[d] = e, a[d] && (a.jsonpCallback = b.jsonpCallback, oldCallbacks.push(d)), f && jQuery.isFunction(e) && e(f[0]), f = e = undefined
            }), "script"
    }), jQuery.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {
        }
    };
    var xhrSupported = jQuery.ajaxSettings.xhr(), xhrSuccessStatus = {0: 200,1223: 204}, xhrId = 0, xhrCallbacks = {};
    window.ActiveXObject && jQuery(window).on("unload", function() {
        for (var a in xhrCallbacks)
            xhrCallbacks[a]();
        xhrCallbacks = undefined
    }), jQuery.support.cors = !!xhrSupported && "withCredentials" in xhrSupported, jQuery.support.ajax = xhrSupported = !!xhrSupported, jQuery.ajaxTransport(function(a) {
        var b;
        if (jQuery.support.cors || xhrSupported && !a.crossDomain)
            return {send: function(c, d) {
                    var e, f, g = a.xhr();
                    g.open(a.type, a.url, a.async, a.username, a.password);
                    if (a.xhrFields)
                        for (e in a.xhrFields)
                            g[e] = a.xhrFields[e];
                    a.mimeType && g.overrideMimeType && g.overrideMimeType(a.mimeType), !a.crossDomain && !c["X-Requested-With"] && (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c)
                        g.setRequestHeader(e, c[e]);
                    b = function(a) {
                        return function() {
                            b && (delete xhrCallbacks[f], b = g.onload = g.onerror = null, a === "abort" ? g.abort() : a === "error" ? d(g.status || 404, g.statusText) : d(xhrSuccessStatus[g.status] || g.status, g.statusText, typeof g.responseText == "string" ? {text: g.responseText} : undefined, g.getAllResponseHeaders()))
                        }
                    }, g.onload = b(), g.onerror = b("error"), b = xhrCallbacks[f = xhrId++] = b("abort"), g.send(a.hasContent && a.data || null)
                },abort: function() {
                    b && b()
                }}
    });
    var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/, rfxnum = new RegExp("^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i"), rrun = /queueHooks$/, animationPrefilters = [defaultPrefilter], tweeners = {"*": [function(a, b) {
                var c, d, e = this.createTween(a, b), f = rfxnum.exec(b), g = e.cur(), h = +g || 0, i = 1, j = 20;
                if (f) {
                    c = +f[2], d = f[3] || (jQuery.cssNumber[a] ? "" : "px");
                    if (d !== "px" && h) {
                        h = jQuery.css(e.elem, a, !0) || c || 1;
                        do
                            i = i || ".5", h /= i, jQuery.style(e.elem, a, h + d);
                        while (i !== (i = e.cur() / g) && i !== 1 && --j)
                    }
                    e.unit = d, e.start = h, e.end = f[1] ? h + (f[1] + 1) * c : c
                }
                return e
            }]};
    jQuery.Animation = jQuery.extend(Animation, {tweener: function(a, b) {
            jQuery.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            var c, d = 0, e = a.length;
            for (; d < e; d++)
                c = a[d], tweeners[c] = tweeners[c] || [], tweeners[c].unshift(b)
        },prefilter: function(a, b) {
            b ? animationPrefilters.unshift(a) : animationPrefilters.push(a)
        }}), jQuery.Tween = Tween, Tween.prototype = {constructor: Tween,init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (jQuery.cssNumber[c] ? "" : "px")
        },cur: function() {
            var a = Tween.propHooks[this.prop];
            return a && a.get ? a.get(this) : Tween.propHooks._default.get(this)
        },run: function(a) {
            var b, c = Tween.propHooks[this.prop];
            return this.options.duration ? this.pos = b = jQuery.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Tween.propHooks._default.set(this), this
        }}, Tween.prototype.init.prototype = Tween.prototype, Tween.propHooks = {_default: {get: function(a) {
                var b;
                return a.elem[a.prop] == null || !!a.elem.style && a.elem.style[a.prop] != null ? (b = jQuery.css(a.elem, a.prop, ""), !b || b === "auto" ? 0 : b) : a.elem[a.prop]
            },set: function(a) {
                jQuery.fx.step[a.prop] ? jQuery.fx.step[a.prop](a) : a.elem.style && (a.elem.style[jQuery.cssProps[a.prop]] != null || jQuery.cssHooks[a.prop]) ? jQuery.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }}}, Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }}, jQuery.each(["toggle", "show", "hide"], function(a, b) {
        var c = jQuery.fn[b];
        jQuery.fn[b] = function(a, d, e) {
            return a == null || typeof a == "boolean" ? c.apply(this, arguments) : this.animate(genFx(b, !0), a, d, e)
        }
    }), jQuery.fn.extend({fadeTo: function(a, b, c, d) {
            return this.filter(isHidden).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        },animate: function(a, b, c, d) {
            var e = jQuery.isEmptyObject(a), f = jQuery.speed(b, c, d), g = function() {
                var b = Animation(this, jQuery.extend({}, a), f);
                g.finish = function() {
                    b.stop(!0)
                }, (e || data_priv.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return typeof a != "string" && (c = b, b = a, a = undefined), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                var b = !0, e = a != null && a + "queueHooks", f = jQuery.timers, g = data_priv.get(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && rrun.test(e) && d(g[e]);
                for (e = f.length; e--; )
                    f[e].elem === this && (a == null || f[e].queue === a) && (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && jQuery.dequeue(this, a)
            })
        },finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = data_priv.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = jQuery.timers, g = d ? d.length : 0;
                c.finish = !0, jQuery.queue(this, a, []), e && e.cur && e.cur.finish && e.cur.finish.call(this);
                for (b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; b < g; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }}), jQuery.each({slideDown: genFx("show"),slideUp: genFx("hide"),slideToggle: genFx("toggle"),fadeIn: {opacity: "show"},fadeOut: {opacity: "hide"},fadeToggle: {opacity: "toggle"}}, function(a, b) {
        jQuery.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), jQuery.speed = function(a, b, c) {
        var d = a && typeof a == "object" ? jQuery.extend({}, a) : {complete: c || !c && b || jQuery.isFunction(a) && a,duration: a,easing: c && b || b && !jQuery.isFunction(b) && b};
        d.duration = jQuery.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in jQuery.fx.speeds ? jQuery.fx.speeds[d.duration] : jQuery.fx.speeds._default;
        if (d.queue == null || d.queue === !0)
            d.queue = "fx";
        return d.old = d.complete, d.complete = function() {
            jQuery.isFunction(d.old) && d.old.call(this), d.queue && jQuery.dequeue(this, d.queue)
        }, d
    }, jQuery.easing = {linear: function(a) {
            return a
        },swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }}, jQuery.timers = [], jQuery.fx = Tween.prototype.init, jQuery.fx.tick = function() {
        var a, b = jQuery.timers, c = 0;
        fxNow = jQuery.now();
        for (; c < b.length; c++)
            a = b[c], !a() && b[c] === a && b.splice(c--, 1);
        b.length || jQuery.fx.stop(), fxNow = undefined
    }, jQuery.fx.timer = function(a) {
        a() && jQuery.timers.push(a) && jQuery.fx.start()
    }, jQuery.fx.interval = 13, jQuery.fx.start = function() {
        timerId || (timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval))
    }, jQuery.fx.stop = function() {
        clearInterval(timerId), timerId = null
    }, jQuery.fx.speeds = {slow: 600,fast: 200,_default: 400}, jQuery.fx.step = {}, jQuery.expr && jQuery.expr.filters && (jQuery.expr.filters.animated = function(a) {
        return jQuery.grep(jQuery.timers, function(b) {
            return a === b.elem
        }).length
    }), jQuery.fn.offset = function(a) {
        if (arguments.length)
            return a === undefined ? this : this.each(function(b) {
                jQuery.offset.setOffset(this, a, b)
            });
        var b, c, d = this[0], e = {top: 0,left: 0}, f = d && d.ownerDocument;
        if (!f)
            return;
        return b = f.documentElement, jQuery.contains(b, d) ? (typeof d.getBoundingClientRect !== core_strundefined && (e = d.getBoundingClientRect()), c = getWindow(f), {top: e.top + c.pageYOffset - b.clientTop,left: e.left + c.pageXOffset - b.clientLeft}) : e
    }, jQuery.offset = {setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = jQuery.css(a, "position"), l = jQuery(a), m = {};
            k === "static" && (a.style.position = "relative"), h = l.offset(), f = jQuery.css(a, "top"), i = jQuery.css(a, "left"), j = (k === "absolute" || k === "fixed") && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), jQuery.isFunction(b) && (b = b.call(a, c, h)), b.top != null && (m.top = b.top - h.top + g), b.left != null && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }}, jQuery.fn.extend({position: function() {
            if (!this[0])
                return;
            var a, b, c = this[0], d = {top: 0,left: 0};
            return jQuery.css(c, "position") === "fixed" ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), jQuery.nodeName(a[0], "html") || (d = a.offset()), d.top += jQuery.css(a[0], "borderTopWidth", !0), d.left += jQuery.css(a[0], "borderLeftWidth", !0)), {top: b.top - d.top - jQuery.css(c, "marginTop", !0),left: b.left - d.left - jQuery.css(c, "marginLeft", !0)}
        },offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || docElem;
                while (a && !jQuery.nodeName(a, "html") && jQuery.css(a, "position") === "static")
                    a = a.offsetParent;
                return a || docElem
            })
        }}), jQuery.each({scrollLeft: "pageXOffset",scrollTop: "pageYOffset"}, function(a, b) {
        var c = "pageYOffset" === b;
        jQuery.fn[a] = function(d) {
            return jQuery.access(this, function(a, d, e) {
                var f = getWindow(a);
                if (e === undefined)
                    return f ? f[b] : a[d];
                f ? f.scrollTo(c ? window.pageXOffset : e, c ? e : window.pageYOffset) : a[d] = e
            }, a, d, arguments.length, null)
        }
    }), jQuery.each({Height: "height",Width: "width"}, function(a, b) {
        jQuery.each({padding: "inner" + a,content: b,"": "outer" + a}, function(c, d) {
            jQuery.fn[d] = function(d, e) {
                var f = arguments.length && (c || typeof d != "boolean"), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return jQuery.access(this, function(b, c, d) {
                    var e;
                    return jQuery.isWindow(b) ? b.document.documentElement["client" + a] : b.nodeType === 9 ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : d === undefined ? jQuery.css(b, c, g) : jQuery.style(b, c, d, g)
                }, b, f ? d : undefined, f, null)
            }
        })
    }), jQuery.fn.size = function() {
        return this.length
    }, jQuery.fn.andSelf = jQuery.fn.addBack, typeof module == "object" && typeof module.exports == "object" ? module.exports = jQuery : typeof define == "function" && define.amd && define("jquery", [], function() {
        return jQuery
    }), typeof window == "object" && typeof window.document == "object" && (window.jQuery = window.$ = jQuery)
}(window), function() {
    var a;
    jQuery.expr.cacheLength = 500, a = jQuery.event.add, jQuery.event.add = function(b, c, d, e, f) {
        return f && jQuery.find.compile(f), a.apply(this, arguments)
    }
}.call(this), function(a) {
    function b(b, d, e) {
        var f = this;
        return this.on("click.pjax", b, function(b) {
            var g = a.extend({}, p(d, e));
            g.container || (g.container = a(this).attr("data-pjax") || f), c(b, g)
        })
    }
    function c(b, c, d) {
        d = p(c, d);
        var f = b.currentTarget;
        if (f.tagName.toUpperCase() !== "A")
            throw "$.fn.pjax or $.pjax.click requires an anchor element";
        if (b.which > 1 || b.metaKey || b.ctrlKey || b.shiftKey || b.altKey)
            return;
        if (location.protocol !== f.protocol || location.hostname !== f.hostname)
            return;
        if (f.hash && f.href.replace(f.hash, "") === location.href.replace(location.hash, ""))
            return;
        if (f.href === location.href + "#")
            return;
        var g = {url: f.href,container: a(f).attr("data-pjax"),target: f}, h = a.extend({}, g, d), i = a.Event("pjax:click");
        a(f).trigger(i, [h]), i.isDefaultPrevented() || (e(h), b.preventDefault())
    }
    function d(b, c, d) {
        d = p(c, d);
        var f = b.currentTarget;
        if (f.tagName.toUpperCase() !== "FORM")
            throw "$.pjax.submit requires a form element";
        var g = {type: f.method.toUpperCase(),url: f.action,data: a(f).serializeArray(),container: a(f).attr("data-pjax"),target: f};
        e(a.extend({}, g, d)), b.preventDefault()
    }
    function e(b) {
        function h(b, d) {
            var e = a.Event(b, {relatedTarget: c});
            return f.trigger(e, d), !e.isDefaultPrevented()
        }
        b = a.extend(!0, {}, a.ajaxSettings, e.defaults, b), a.isFunction(b.url) && (b.url = b.url());
        var c = b.target, d = o(b.url).hash, f = b.context = q(b.container);
        b.data || (b.data = {}), b.data._pjax = f.selector;
        var i;
        b.beforeSend = function(a, c) {
            c.type !== "GET" && (c.timeout = 0), a.setRequestHeader("X-PJAX", "true"), a.setRequestHeader("X-PJAX-Container", f.selector);
            if (!h("pjax:beforeSend", [a, c]))
                return !1;
            c.timeout > 0 && (i = setTimeout(function() {
                h("pjax:timeout", [a, b]) && a.abort("timeout")
            }, c.timeout), c.timeout = 0), b.requestUrl = o(c.url).href
        }, b.complete = function(a, c) {
            i && clearTimeout(i), h("pjax:complete", [a, c, b]), h("pjax:end", [a, b])
        }, b.error = function(a, c, d) {
            var e = t("", a, b), f = h("pjax:error", [a, c, d, b]);
            b.type == "GET" && c !== "abort" && f && g(e.url)
        }, b.success = function(c, i, j) {
            var k = typeof a.pjax.defaults.version == "function" ? a.pjax.defaults.version() : a.pjax.defaults.version, l = j.getResponseHeader("X-PJAX-Version"), n = t(c, j, b);
            if (k && l && k !== l) {
                g(n.url);
                return
            }
            if (!n.contents) {
                g(n.url);
                return
            }
            e.state = {id: b.id || m(),url: n.url,title: n.title,container: f.selector,fragment: b.fragment,timeout: b.timeout}, (b.push || b.replace) && window.history.replaceState(e.state, n.title, n.url), document.activeElement.blur(), n.title && (document.title = n.title), f.html(n.contents);
            var p = f.find("input[autofocus], textarea[autofocus]").last()[0];
            p && document.activeElement !== p && p.focus(), u(n.scripts), typeof b.scrollTo == "number" && a(window).scrollTop(b.scrollTo);
            if (d !== "") {
                var q = o(n.url);
                q.hash = d, e.state.url = q.href, window.history.replaceState(e.state, n.title, q.href);
                var r = a(q.hash);
                r.length && a(window).scrollTop(r.offset().top)
            }
            h("pjax:success", [c, i, j, b])
        }, e.state || (e.state = {id: m(),url: window.location.href,title: document.title,container: f.selector,fragment: b.fragment,timeout: b.timeout}, window.history.replaceState(e.state, document.title));
        var j = e.xhr;
        j && j.readyState < 4 && (j.onreadystatechange = a.noop, j.abort()), e.options = b;
        var j = e.xhr = a.ajax(b);
        return j.readyState > 0 && (b.push && !b.replace && (y(e.state.id, f.clone().contents()), window.history.pushState(null, "", n(b.requestUrl))), h("pjax:start", [j, b]), h("pjax:send", [j, b])), e.xhr
    }
    function f(b, c) {
        var d = {url: window.location.href,push: !1,replace: !0,scrollTo: !1};
        return e(a.extend(d, p(b, c)))
    }
    function g(a) {
        window.history.replaceState(null, "", "#"), window.location.replace(a)
    }
    function k(b) {
        var c = b.state;
        if (c && c.container) {
            if (h && i == c.url)
                return;
            if (e.state.id === c.id)
                return;
            var d = a(c.container);
            if (d.length) {
                var f, j = v[c.id];
                e.state && (f = e.state.id < c.id ? "forward" : "back", z(f, e.state.id, d.clone().contents()));
                var k = a.Event("pjax:popstate", {state: c,direction: f});
                d.trigger(k);
                var l = {id: c.id,url: c.url,container: d,push: !1,fragment: c.fragment,timeout: c.timeout,scrollTo: !1};
                j ? (d.trigger("pjax:start", [null, l]), c.title && (document.title = c.title), d.html(j), e.state = c, d.trigger("pjax:end", [null, l])) : e(l), d[0].offsetHeight
            } else
                g(location.href)
        }
        h = !1
    }
    function l(b) {
        var c = a.isFunction(b.url) ? b.url() : b.url, d = b.type ? b.type.toUpperCase() : "GET", e = a("<form>", {method: d === "GET" ? "GET" : "POST",action: c,style: "display:none"});
        d !== "GET" && d !== "POST" && e.append(a("<input>", {type: "hidden",name: "_method",value: d.toLowerCase()}));
        var f = b.data;
        if (typeof f == "string")
            a.each(f.split("&"), function(b, c) {
                var d = c.split("=");
                e.append(a("<input>", {type: "hidden",name: d[0],value: d[1]}))
            });
        else if (typeof f == "object")
            for (key in f)
                e.append(a("<input>", {type: "hidden",name: key,value: f[key]}));
        a(document.body).append(e), e.submit()
    }
    function m() {
        return (new Date).getTime()
    }
    function n(a) {
        return a.replace(/\?_pjax=[^&]+&?/, "?").replace(/_pjax=[^&]+&?/, "").replace(/[\?&]$/, "")
    }
    function o(a) {
        var b = document.createElement("a");
        return b.href = a, b
    }
    function p(b, c) {
        return b && c ? c.container = b : a.isPlainObject(b) ? c = b : c = {container: b}, c.container && (c.container = q(c.container)), c
    }
    function q(b) {
        b = a(b);
        if (!b.length)
            throw "no pjax container for " + b.selector;
        if (b.selector !== "" && b.context === document)
            return b;
        if (b.attr("id"))
            return a("#" + b.attr("id"));
        throw "cant get selector for pjax container!"
    }
    function r(a, b) {
        return a.filter(b).add(a.find(b))
    }
    function s(b) {
        return a.parseHTML(b, document, !0)
    }
    function t(b, c, d) {
        var e = {};
        e.url = n(c.getResponseHeader("X-PJAX-URL") || d.requestUrl);
        if (/<html/i.test(b))
            var f = a(s(b.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0])), g = a(s(b.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]));
        else
            var f = g = a(s(b));
        if (g.length === 0)
            return e;
        e.title = r(f, "title").last().text();
        if (d.fragment) {
            if (d.fragment === "body")
                var h = g;
            else
                var h = r(g, d.fragment).first();
            h.length && (e.contents = h.contents(), e.title || (e.title = h.attr("title") || h.data("title")))
        } else
            /<html/i.test(b) || (e.contents = g);
        return e.contents && (e.contents = e.contents.not(function() {
            return a(this).is("title")
        }), e.contents.find("title").remove(), e.scripts = r(e.contents, "script[src]").remove(), e.contents = e.contents.not(e.scripts)), e.title && (e.title = a.trim(e.title)), e
    }
    function u(b) {
        if (!b)
            return;
        var c = a("script[src]");
        b.each(function() {
            var b = this.src, d = c.filter(function() {
                return this.src === b
            });
            if (d.length)
                return;
            var e = document.createElement("script");
            e.type = a(this).attr("type"), e.src = a(this).attr("src"), document.head.appendChild(e)
        })
    }
    function y(a, b) {
        v[a] = b, x.push(a);
        while (w.length)
            delete v[w.shift()];
        while (x.length > e.defaults.maxCacheLength)
            delete v[x.shift()]
    }
    function z(a, b, c) {
        var d, e;
        v[b] = c, a === "forward" ? (d = x, e = w) : (d = w, e = x), d.push(b), (b = e.pop()) && delete v[b]
    }
    function A() {
        return a("meta").filter(function() {
            var b = a(this).attr("http-equiv");
            return b && b.toUpperCase() === "X-PJAX-VERSION"
        }).attr("content")
    }
    function B() {
        a.fn.pjax = b, a.pjax = e, a.pjax.enable = a.noop, a.pjax.disable = C, a.pjax.click = c, a.pjax.submit = d, a.pjax.reload = f, a.pjax.defaults = {timeout: 650,push: !0,replace: !1,type: "GET",dataType: "html",scrollTo: 0,maxCacheLength: 20,version: A}, a(window).on("popstate.pjax", k)
    }
    function C() {
        a.fn.pjax = function() {
            return this
        }, a.pjax = l, a.pjax.enable = B, a.pjax.disable = a.noop, a.pjax.click = a.noop, a.pjax.submit = a.noop, a.pjax.reload = function() {
            window.location.reload()
        }, a(window).off("popstate.pjax", k)
    }
    var h = !0, i = window.location.href, j = window.history.state;
    j && j.container && (e.state = j), "state" in window.history && (h = !1);
    var v = {}, w = [], x = [];
    a.inArray("state", a.event.props) < 0 && a.event.props.push("state"), a.support.pjax = window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/), a.support.pjax ? B() : C()
}(jQuery), function() {
    (typeof Zepto == "undefined" || Zepto === null) && $.ajaxSetup({beforeSend: function(a, b) {
            var c, d;
            if (!b.global)
                return;
            return c = b.context || document, d = $.Event("ajaxBeforeSend"), $(c).trigger(d, [a, b]), d.isDefaultPrevented() ? !1 : d.result
        }})
}.call(this), function() {
    var a, b, c, d, e;
    typeof Zepto != "undefined" && Zepto !== null ? (a = function(a) {
        var b, c, d, e;
        c = document.createEvent("Events");
        for (d in a)
            e = a[d], c[d] = e;
        return c.initEvent("" + a.type + ":prepare", !0, !0), b = function(b, d) {
            return function() {
                return b.apply(a), d.apply(c)
            }
        }, c.preventDefault = b(a.preventDefault, c.preventDefault), c.stopPropagation = b(a.stopPropagation, c.stopPropagation), c.stopImmediatePropagation = b(a.stopImmediatePropagation, c.stopImmediatePropagation), a.target.dispatchEvent(c), c.result
    }, window.addEventListener("click", a, !0), window.addEventListener("submit", a, !0)) : (b = null, c = function(a) {
        var c;
        a.timeStamp !== b && (c = a.type, a.type = "" + c + ":prepare", $.event.trigger(a, [], a.target, !1), a.type = c, b = a.timeStamp)
    }, d = function(a) {
        return function() {
            $(this).on("" + a + ".prepare", function() {
            })
        }
    }, e = function(a) {
        return function() {
            $(this).off("" + a + ".prepare", function() {
            })
        }
    }, $.event.special.click = {preDispatch: c}, $.event.special.submit = {preDispatch: c}, $.event.special["click:prepare"] = {setup: d("click"),teardown: e("click")}, $.event.special["submit:prepare"] = {setup: d("submit"),teardown: e("submit")})
}.call(this), function() {
    $(document).on("ajaxBeforeSend", function(a, b, c) {
        if (!c.dataType)
            return b.setRequestHeader("Accept", "*/*;q=0.5, " + c.accepts.script)
    })
}.call(this), function() {
    $(document).on("click:prepare", "a[data-confirm], button[data-confirm]", function(a) {
        var b;
        if (b = $(this).attr("data-confirm"))
            confirm(b) || (a.stopImmediatePropagation(), a.preventDefault())
    })
}.call(this), function() {
    var a;
    $(document).on("ajaxBeforeSend", function(a, b, c) {
        var d;
        if (c.crossDomain)
            return;
        if (c.type === "GET")
            return;
        if (d = $('meta[name="csrf-token"]').attr("content"))
            return b.setRequestHeader("X-CSRF-Token", d)
    }), $(document).on("submit:prepare", "form", function() {
        var b, c, d, e;
        b = $(this);
        if (b.is("form[data-remote]"))
            return;
        if (!this.method || this.method.toUpperCase() === "GET")
            return;
        if (!a(b.attr("action")))
            return;
        d = $('meta[name="csrf-param"]').attr("content"), e = $('meta[name="csrf-token"]').attr("content"), d != null && e != null && (b.find("input[name=" + d + "]")[0] || (c = document.createElement("input"), c.setAttribute("type", "hidden"), c.setAttribute("name", d), c.setAttribute("value", e), b.prepend(c)))
    }), a = function(a) {
        var b, c;
        return b = document.createElement("a"), b.href = a, c = b.href.split("/", 3).join("/"), location.href.indexOf(c) === 0
    }
}.call(this), function() {
    $(document).on("submit:prepare", "form", function() {
        var a, b, c, d, e, f, g, h, i;
        h = $(this).find("input[type=submit][data-disable-with]");
        for (d = 0, f = h.length; d < f; d++)
            b = h[d], b = $(b), b.attr("data-enable-with", b.val() || "Submit"), (c = b.attr("data-disable-with")) && b.val(c), b[0].disabled = !0;
        i = $(this).find("button[type=submit][data-disable-with]")
        ;
        for (e = 0, g = i.length; e < g; e++)
            a = i[e], a = $(a), a.attr("data-enable-with", a.html() || ""), (c = a.attr("data-disable-with")) && a.html(c), a[0].disabled = !0
    }), $(document).on("ajaxComplete", "form", function() {
        var a, b, c, d, e, f, g, h;
        g = $(this).find("input[type=submit][data-enable-with]");
        for (c = 0, e = g.length; c < e; c++)
            b = g[c], $(b).val($(b).attr("data-enable-with")), b.disabled = !1;
        h = $(this).find("button[type=submit][data-enable-with]");
        for (d = 0, f = h.length; d < f; d++)
            a = h[d], $(a).html($(a).attr("data-enable-with")), a.disabled = !1
    })
}.call(this), function() {
    $(document).on("click", "a[data-method]", function(a) {
        var b, c, d, e;
        b = $(this);
        if (b.is("a[data-remote]"))
            return;
        e = b.attr("data-method").toLowerCase();
        if (e === "get")
            return;
        return c = document.createElement("form"), c.method = "POST", c.action = b.attr("href"), c.style.display = "none", e !== "post" && (d = document.createElement("input"), d.setAttribute("type", "hidden"), d.setAttribute("name", "_method"), d.setAttribute("value", e), c.appendChild(d)), document.body.appendChild(c), $(c).submit(), a.preventDefault(), !1
    })
}.call(this), function() {
    $(document).on("click", "a[data-remote]", function(a) {
        var b, c, d, e, f;
        c = $(this), d = {}, d.context = this;
        if (e = c.attr("data-method"))
            d.type = e;
        if (f = this.href)
            d.url = f;
        if (b = c.attr("data-type"))
            d.dataType = b;
        return $.ajax(d), a.preventDefault(), !1
    }), $(document).on("submit", "form[data-remote]", function(a) {
        var b, c, d, e, f, g;
        d = $(this), e = {}, e.context = this;
        if (f = d.attr("method"))
            e.type = f;
        if (g = this.action)
            e.url = g;
        if (b = d.serializeArray())
            e.data = b;
        if (c = d.attr("data-type"))
            e.dataType = c;
        return $.ajax(e), a.preventDefault(), !1
    }), $(document).on("ajaxSend", "[data-remote]", function(a, b) {
        $(this).data("remote-xhr", b)
    }), $(document).on("ajaxComplete", "[data-remote]", function(a, b) {
        var c;
        typeof (c = $(this)).removeData == "function" && c.removeData("remote-xhr")
    })
}.call(this), function() {
    var a;
    a = "form[data-remote] input[type=submit],\nform[data-remote] button[type=submit],\nform[data-remote] button:not([type]),\nform[data-remote-submit] input[type=submit],\nform[data-remote-submit] button[type=submit],\nform[data-remote-submit] button:not([type])", $(document).on("click", a, function() {
        var a, b, c, d, e, f;
        e = $(this), b = e.closest("form"), c = b.find(".js-submit-button-value"), (d = e.attr("name")) ? (a = e.is("input[type=submit]") ? "Submit" : "", f = e.val() || a, c[0] ? (c.attr("name", d), c.attr("value", f)) : (c = document.createElement("input"), c.setAttribute("type", "hidden"), c.setAttribute("name", d), c.setAttribute("value", f), c.setAttribute("class", "js-submit-button-value"), b.prepend(c))) : c.remove()
    })
}.call(this), d3 = function() {
    function h(a) {
        return a != null && !isNaN(a)
    }
    function j(a) {
        return a.length
    }
    function k(a) {
        var b = 1;
        while (a * b % 1)
            b *= 10;
        return b
    }
    function l(a, b) {
        try {
            for (var c in b)
                Object.defineProperty(a.prototype, c, {value: b[c],enumerable: !1})
        } catch (d) {
            a.prototype = b
        }
    }
    function m() {
    }
    function p() {
    }
    function q(a, b, c) {
        return function() {
            var d = c.apply(b, arguments);
            return d === b ? a : d
        }
    }
    function r() {
    }
    function s(a) {
        function d() {
            var c = b, d = -1, e = c.length, f;
            while (++d < e)
                (f = c[d].on) && f.apply(this, arguments);
            return a
        }
        var b = [], c = new m;
        return d.on = function(d, e) {
            var f = c.get(d), g;
            return arguments.length < 2 ? f && f.on : (f && (f.on = null, b = b.slice(0, g = b.indexOf(f)).concat(b.slice(g + 1)), c.remove(d)), e && b.push(c.set(d, {on: e})), a)
        }, d
    }
    function t() {
        a.event.stopPropagation(), a.event.preventDefault()
    }
    function u() {
        var b = a.event, c;
        while (c = b.sourceEvent)
            b = c;
        return b
    }
    function v(a, b) {
        function c() {
            a.on(b, null)
        }
        a.on(b, function() {
            t(), c()
        }, !0), setTimeout(c, 0)
    }
    function w(b) {
        var c = new r, d = 0, e = arguments.length;
        while (++d < e)
            c[arguments[d]] = s(c);
        return c.of = function(d, e) {
            return function(f) {
                try {
                    var g = f.sourceEvent = a.event;
                    f.target = b, a.event = f, c[f.type].apply(d, e)
                }finally {
                    a.event = g
                }
            }
        }, c
    }
    function y(b, e) {
        var f = b.ownerSVGElement || b;
        if (f.createSVGPoint) {
            var g = f.createSVGPoint();
            if (x < 0 && (d.scrollX || d.scrollY)) {
                f = a.select(c.body).append("svg").style("position", "absolute").style("top", 0).style("left", 0);
                var h = f[0][0].getScreenCTM();
                x = !h.f && !h.e, f.remove()
            }
            return x ? (g.x = e.pageX, g.y = e.pageY) : (g.x = e.clientX, g.y = e.clientY), g = g.matrixTransform(b.getScreenCTM().inverse()), [g.x, g.y]
        }
        var i = b.getBoundingClientRect();
        return [e.clientX - i.left - b.clientLeft, e.clientY - i.top - b.clientTop]
    }
    function A(a) {
        var b = -1, c = a.length, d = [];
        while (++b < c)
            d.push(a[b]);
        return d
    }
    function B(a) {
        return Array.prototype.slice.call(a)
    }
    function E(a) {
        return D(a, K), a
    }
    function L(a) {
        return function() {
            return F(a, this)
        }
    }
    function M(a) {
        return function() {
            return G(a, this)
        }
    }
    function O(b, c) {
        function d() {
            this.removeAttribute(b)
        }
        function e() {
            this.removeAttributeNS(b.space, b.local)
        }
        function f() {
            this.setAttribute(b, c)
        }
        function g() {
            this.setAttributeNS(b.space, b.local, c)
        }
        function h() {
            var a = c.apply(this, arguments);
            a == null ? this.removeAttribute(b) : this.setAttribute(b, a)
        }
        function i() {
            var a = c.apply(this, arguments);
            a == null ? this.removeAttributeNS(b.space, b.local) : this.setAttributeNS(b.space, b.local, a)
        }
        return b = a.ns.qualify(b), c == null ? b.local ? e : d : typeof c == "function" ? b.local ? i : h : b.local ? g : f
    }
    function P(a) {
        return a.trim().replace(/\s+/g, " ")
    }
    function R(b) {
        return new RegExp("(?:^|\\s+)" + a.requote(b) + "(?:\\s+|$)", "g")
    }
    function S(a, b) {
        function d() {
            var d = -1;
            while (++d < c)
                a[d](this, b)
        }
        function e() {
            var d = -1, e = b.apply(this, arguments);
            while (++d < c)
                a[d](this, e)
        }
        a = a.trim().split(/\s+/).map(T);
        var c = a.length;
        return typeof b == "function" ? e : d
    }
    function T(a) {
        var b = R(a);
        return function(c, d) {
            if (e = c.classList)
                return d ? e.add(a) : e.remove(a);
            var e = c.getAttribute("class") || "";
            d ? (b.lastIndex = 0, b.test(e) || c.setAttribute("class", P(e + " " + a))) : c.setAttribute("class", P(e.replace(b, " ")))
        }
    }
    function U(a, b, c) {
        function d() {
            this.style.removeProperty(a)
        }
        function e() {
            this.style.setProperty(a, b, c)
        }
        function f() {
            var d = b.apply(this, arguments);
            d == null ? this.style.removeProperty(a) : this.style.setProperty(a, d, c)
        }
        return b == null ? d : typeof b == "function" ? f : e
    }
    function V(a, b) {
        function c() {
            delete this[a]
        }
        function d() {
            this[a] = b
        }
        function e() {
            var c = b.apply(this, arguments);
            c == null ? delete this[a] : this[a] = c
        }
        return b == null ? c : typeof b == "function" ? e : d
    }
    function W(a) {
        return {__data__: a}
    }
    function X(a) {
        return function() {
            return J(this, a)
        }
    }
    function Y(b) {
        return arguments.length || (b = a.ascending), function(a, c) {
            return !a - !c || b(a.__data__, c.__data__)
        }
    }
    function Z() {
    }
    function $(b, c, d) {
        function i() {
            var a = this[e];
            a && (this.removeEventListener(b, a, a.$), delete this[e])
        }
        function j() {
            var a = g(c, z(arguments));
            i.call(this), this.addEventListener(b, this[e] = a, a.$ = d), a._ = c
        }
        function k() {
            var c = new RegExp("^__on([^.]+)" + a.requote(b) + "$"), d;
            for (var e in this)
                if (d = e.match(c)) {
                    var f = this[e];
                    this.removeEventListener(d[1], f, f.$), delete this[e]
                }
        }
        var e = "__on" + b, f = b.indexOf("."), g = ab;
        f > 0 && (b = b.substring(0, f));
        var h = _.get(b);
        return h && (b = h, g = bb), f ? c ? j : i : c ? Z : k
    }
    function ab(b, c) {
        return function(d) {
            var e = a.event;
            a.event = d, c[0] = this.__data__;
            try {
                b.apply(this, c)
            }finally {
                a.event = e
            }
        }
    }
    function bb(a, b) {
        var c = ab(a, b);
        return function(a) {
            var b = this, d = a.relatedTarget;
            (!d || d !== b && !(d.compareDocumentPosition(b) & 8)) && c.call(b, a)
        }
    }
    function cb(a, b) {
        for (var c = 0, d = a.length; c < d; c++)
            for (var e = a[c], f = 0, g = e.length, h; f < g; f++)
                (h = e[f]) && b(h, f, c);
        return a
    }
    function db(a) {
        return D(a, eb), a
    }
    function jb() {
    }
    function kb(a, b, c) {
        return new lb(a, b, c)
    }
    function lb(a, b, c) {
        this.h = a, this.s = b, this.l = c
    }
    function nb(a, b, c) {
        function f(a) {
            return a > 360 ? a -= 360 : a < 0 && (a += 360), a < 60 ? d + (e - d) * a / 60 : a < 180 ? e : a < 240 ? d + (e - d) * (240 - a) / 60 : d
        }
        function g(a) {
            return Math.round(f(a) * 255)
        }
        var d, e;
        return a %= 360, a < 0 && (a += 360), b = b < 0 ? 0 : b > 1 ? 1 : b, c = c < 0 ? 0 : c > 1 ? 1 : c, e = c <= .5 ? c * (1 + b) : c + b - c * b, d = 2 * c - e, Ob(g(a + 120), g(a), g(a - 120))
    }
    function sb(a) {
        return a > 0 ? 1 : a < 0 ? -1 : 0
    }
    function tb(a) {
        return Math.acos(Math.max(-1, Math.min(1, a)))
    }
    function ub(a) {
        return a > 1 ? ob / 2 : a < -1 ? -ob / 2 : Math.asin(a)
    }
    function vb(a) {
        return (Math.exp(a) - Math.exp(-a)) / 2
    }
    function wb(a) {
        return (Math.exp(a) + Math.exp(-a)) / 2
    }
    function xb(a) {
        return (a = Math.sin(a / 2)) * a
    }
    function yb(a, b, c) {
        return new zb(a, b, c)
    }
    function zb(a, b, c) {
        this.h = a, this.c = b, this.l = c
    }
    function Bb(a, b, c) {
        return Cb(c, Math.cos(a *= qb) * b, Math.sin(a) * b)
    }
    function Cb(a, b, c) {
        return new Db(a, b, c)
    }
    function Db(a, b, c) {
        this.l = a, this.a = b, this.b = c
    }
    function Jb(a, b, c) {
        var d = (a + 16) / 116, e = d + b / 500, f = d - c / 200;
        return e = Lb(e) * Fb, d = Lb(d) * Gb, f = Lb(f) * Hb, Ob(Nb(3.2404542 * e - 1.5371385 * d - .4985314 * f), Nb(-0.969266 * e + 1.8760108 * d + .041556 * f), Nb(.0556434 * e - .2040259 * d + 1.0572252 * f))
    }
    function Kb(a, b, c) {
        return yb(Math.atan2(c, b) * rb, Math.sqrt(b * b + c * c), a)
    }
    function Lb(a) {
        return a > .206893034 ? a * a * a : (a - 4 / 29) / 7.787037
    }
    function Mb(a) {
        return a > .008856 ? Math.pow(a, 1 / 3) : 7.787037 * a + 4 / 29
    }
    function Nb(a) {
        return Math.round(255 * (a <= .00304 ? 12.92 * a : 1.055 * Math.pow(a, 1 / 2.4) - .055))
    }
    function Ob(a, b, c) {
        return new Pb(a, b, c)
    }
    function Pb(a, b, c) {
        this.r = a, this.g = b, this.b = c
    }
    function Rb(a) {
        return a < 16 ? "0" + Math.max(0, a).toString(16) : Math.min(255, a).toString(16)
    }
    function Sb(a, b, c) {
        var d = 0, e = 0, f = 0, g, h, i;
        g = /([a-z]+)\((.*)\)/i.exec(a);
        if (g) {
            h = g[2].split(",");
            switch (g[1]) {
                case "hsl":
                    return c(parseFloat(h[0]), parseFloat(h[1]) / 100, parseFloat(h[2]) / 100);
                case "rgb":
                    return b(Wb(h[0]), Wb(h[1]), Wb(h[2]))
            }
        }
        return (i = Xb.get(a)) ? b(i.r, i.g, i.b) : (a != null && a.charAt(0) === "#" && (a.length === 4 ? (d = a.charAt(1), d += d, e = a.charAt(2), e += e, f = a.charAt(3), f += f) : a.length === 7 && (d = a.substring(1, 3), e = a.substring(3, 5), f = a.substring(5, 7)), d = parseInt(d, 16), e = parseInt(e, 16), f = parseInt(f, 16)), b(d, e, f))
    }
    function Tb(a, b, c) {
        var d = Math.min(a /= 255, b /= 255, c /= 255), e = Math.max(a, b, c), f = e - d, g, h, i = (e + d) / 2;
        return f ? (h = i < .5 ? f / (e + d) : f / (2 - e - d), a == e ? g = (b - c) / f + (b < c ? 6 : 0) : b == e ? g = (c - a) / f + 2 : g = (a - b) / f + 4, g *= 60) : h = g = 0, kb(g, h, i)
    }
    function Ub(a, b, c) {
        a = Vb(a), b = Vb(b), c = Vb(c);
        var d = Mb((.4124564 * a + .3575761 * b + .1804375 * c) / Fb), e = Mb((.2126729 * a + .7151522 * b + .072175 * c) / Gb), f = Mb((.0193339 * a + .119192 * b + .9503041 * c) / Hb);
        return Cb(116 * e - 16, 500 * (d - e), 200 * (e - f))
    }
    function Vb(a) {
        return (a /= 255) <= .04045 ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)
    }
    function Wb(a) {
        var b = parseFloat(a);
        return a.charAt(a.length - 1) === "%" ? Math.round(b * 2.55) : b
    }
    function Yb(a) {
        return typeof a == "function" ? a : function() {
            return a
        }
    }
    function Zb(a) {
        return a
    }
    function $b(a) {
        return a.length === 1 ? function(b, c) {
            a(b == null ? c : null)
        } : a
    }
    function _b(b, c) {
        function f(b, d, e) {
            arguments.length < 3 && (e = d, d = null);
            var f = a.xhr(b, c, e);
            return f.row = function(a) {
                return arguments.length ? f.response((d = a) == null ? g : h(a)) : d
            }, f.row(d)
        }
        function g(a) {
            return f.parse(a.responseText)
        }
        function h(a) {
            return function(b) {
                return f.parse(b.responseText, a)
            }
        }
        function i(a) {
            return a.map(j).join(b)
        }
        function j(a) {
            return d.test(a) ? '"' + a.replace(/\"/g, '""') + '"' : a
        }
        var d = new RegExp('["' + b + "\n]"), e = b.charCodeAt(0);
        return f.parse = function(a, b) {
            var c;
            return f.parseRows(a, function(a, d) {
                if (c)
                    return c(a, d - 1);
                var e = new Function("d", "return {" + a.map(function(a, b) {
                    return JSON.stringify(a) + ": d[" + b + "]"
                }).join(",") + "}");
                c = b ? function(a, c) {
                    return b(e(a), c)
                } : e
            })
        }, f.parseRows = function(a, b) {
            function l() {
                if (h >= g)
                    return d;
                if (k)
                    return k = !1, c;
                var b = h;
                if (a.charCodeAt(b) === 34) {
                    var f = b;
                    while (f++ < g)
                        if (a.charCodeAt(f) === 34) {
                            if (a.charCodeAt(f + 1) !== 34)
                                break;
                            ++f
                        }
                    h = f + 2;
                    var i = a.charCodeAt(f + 1);
                    return i === 13 ? (k = !0, a.charCodeAt(f + 2) === 10 && ++h) : i === 10 && (k = !0), a.substring(b + 1, f).replace(/""/g, '"')
                }
                while (h < g) {
                    var i = a.charCodeAt(h++), j = 1;
                    if (i === 10)
                        k = !0;
                    else if (i === 13)
                        k = !0, a.charCodeAt(h) === 10 && (++h, ++j);
                    else if (i !== e)
                        continue;
                    return a.substring(b, h - j)
                }
                return a.substring(b)
            }
            var c = {}, d = {}, f = [], g = a.length, h = 0, i = 0, j, k;
            while ((j = l()) !== d) {
                var m = [];
                while (j !== c && j !== d)
                    m.push(j), j = l();
                if (b && !(m = b(m, i++)))
                    continue;
                f.push(m)
            }
            return f
        }, f.format = function(a) {
            if (Array.isArray(a[0]))
                return f.formatRows(a);
            var c = new p, d = [];
            return a.forEach(function(a) {
                for (var b in a)
                    c.has(b) || d.push(c.add(b))
            }), [d.map(j).join(b)].concat(a.map(function(a) {
                return d.map(function(b) {
                    return j(a[b])
                }).join(b)
            })).join("\n")
        }, f.formatRows = function(a) {
            return a.map(i).join("\n")
        }, f
    }
    function fc() {
        var a, b = Date.now(), c = cc;
        while (c)
            a = b - c.then, a >= c.delay && (c.flush = c.callback(a)), c = c.next;
        var d = gc() - b;
        d > 24 ? (isFinite(d) && (clearTimeout(ec), ec = setTimeout(fc, d)), dc = 0) : (dc = 1, hc(fc))
    }
    function gc() {
        var a = null, b = cc, c = Infinity;
        while (b)
            b.flush ? (delete bc[b.callback.id], b = a ? a.next = b.next : cc = b.next) : (c = Math.min(c, b.then + b.delay), b = (a = b).next);
        return c
    }
    function mc(a, b) {
        var c = Math.pow(10, Math.abs(8 - b) * 3);
        return {scale: b > 8 ? function(a) {
                return a / c
            } : function(a) {
                return a * c
            },symbol: a}
    }
    function pc(a, b) {
        return b - (a ? Math.ceil(Math.log(a) / Math.LN10) : 1)
    }
    function qc(a) {
        return a + ""
    }
    function tc(a, b) {
        a && vc.hasOwnProperty(a.type) && vc[a.type](a, b)
    }
    function wc(a, b, c) {
        var d = -1, e = a.length - c, f;
        b.lineStart();
        while (++d < e)
            f = a[d], b.point(f[0], f[1]);
        b.lineEnd()
    }
    function xc(a, b) {
        var c = -1, d = a.length;
        b.polygonStart();
        while (++c < d)
            wc(a[c], b, 1);
        b.polygonEnd()
    }
    function Cc() {
        function f(a, b) {
            a *= qb, b = b * qb / 2 + ob / 4;
            var f = a - c, g = Math.cos(b), h = Math.sin(b), i = e * h, j = zc, k = Ac, l = d * g + i * Math.cos(f), m = i * Math.sin(f);
            zc = j * l - k * m, Ac = k * l + j * m, c = a, d = g, e = h
        }
        var a, b, c, d, e;
        Bc.point = function(g, h) {
            Bc.point = f, c = (a = g) * qb, d = Math.cos(h = (b = h) * qb / 2 + ob / 4), e = Math.sin(h)
        }, Bc.lineEnd = function() {
            f(a, b)
        }
    }
    function Dc(b) {
        function h(a, b) {
            a < c && (c = a), a > e && (e = a), b < d && (d = b), b > f && (f = b)
        }
        function i() {
            g.point = g.lineEnd = Z
        }
        var c, d, e, f, g = {point: h,lineStart: Z,lineEnd: Z,polygonStart: function() {
                g.lineEnd = i
            },polygonEnd: function() {
                g.point = h
            }};
        return function(h) {
            return f = e = -(c = d = Infinity), a.geo.stream(h, b(g)), [[c, d], [e, f]]
        }
    }
    function Kc(a, b) {
        if (Ec)
            return;
        ++Fc, a *= qb;
        var c = Math.cos(b *= qb);
        Gc += (c * Math.cos(a) - Gc) / Fc, Hc += (c * Math.sin(a) - Hc) / Fc, Ic += (Math.sin(b) - Ic) / Fc
    }
    function Lc() {
        var a, b;
        Ec = 1, Mc(), Ec = 2;
        var c = Jc.point;
        Jc.point = function(d, e) {
            c(a = d, b = e)
        }, Jc.lineEnd = function() {
            Jc.point(a, b), Nc(), Jc.lineEnd = Nc
        }
    }
    function Mc() {
        function d(d, e) {
            d *= qb;
            var f = Math.cos(e *= qb), g = f * Math.cos(d), h = f * Math.sin(d), i = Math.sin(e), j = Math.atan2(Math.sqrt((j = b * i - c * h) * j + (j = c * g - a * i) * j + (j = a * h - b * g) * j), a * g + b * h + c * i);
            Fc += j, Gc += j * (a + (a = g)), Hc += j * (b + (b = h)), Ic += j * (c + (c = i))
        }
        var a, b, c;
        if (Ec > 1)
            return;
        Ec < 1 && (Ec = 1, Fc = Gc = Hc = Ic = 0), Jc.point = function(e, f) {
            e *= qb;
            var g = Math.cos(f *= qb);
            a = g * Math.cos(e), b = g * Math.sin(e), c = Math.sin(f), Jc.point = d
        }
    }
    function Nc() {
        Jc.point = Kc
    }
    function Oc(a) {
        var b = a[0], c = a[1], d = Math.cos(c);
        return [d * Math.cos(b), d * Math.sin(b), Math.sin(c)]
    }
    function Pc(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
    }
    function Qc(a, b) {
        return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]
    }
    function Rc(a, b) {
        a[0] += b[0], a[1] += b[1], a[2] += b[2]
    }
    function Sc(a, b) {
        return [a[0] * b, a[1] * b, a[2] * b]
    }
    function Tc(a) {
        var b = Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
        a[0] /= b, a[1] /= b, a[2] /= b
    }
    function Uc() {
        return !0
    }
    function Vc(a) {
        return [Math.atan2(a[1], a[0]), Math.asin(Math.max(-1, Math.min(1, a[2])))]
    }
    function Wc(a, b) {
        return Math.abs(a[0] - b[0]) < pb && Math.abs(a[1] - b[1]) < pb
    }
    function Xc(a, b, c, d, e) {
        var f = [], g = [];
        a.forEach(function(a) {
            if ((b = a.length - 1) <= 0)
                return;
            var b, c = a[0], d = a[b];
            if (Wc(c, d)) {
                e.lineStart();
                for (var h = 0; h < b; ++h)
                    e.point((c = a[h])[0], c[1]);
                e.lineEnd();
                return
            }
            var i = {point: c,points: a,other: null,visited: !1,entry: !0,subject: !0}, j = {point: c,points: [c],other: i,visited: !1,entry: !1,subject: !1};
            i.other = j, f.push(i), g.push(j), i = {point: d,points: [d],other: null,visited: !1,entry: !1,subject: !0}, j = {point: d,points: [d],other: i,visited: !1,entry: !0,subject: !1}, i.other = j, f.push(i), g.push(j)
        }), g.sort(b), Yc(f), Yc(g);
        if (!f.length)
            return;
        if (c)
            for (var h = 1, i = !c(g[0].point), j = g.length; h < j; ++h)
                g[h].entry = i = !i;
        var k = f[0], l, m, n;
        for (; ; ) {
            l = k;
            while (l.visited)
                if ((l = l.next) === k)
                    return;
            m = l.points, e.lineStart();
            do {
                l.visited = l.other.visited = !0;
                if (l.entry) {
                    if (l.subject)
                        for (var h = 0; h < m.length; h++)
                            e.point((n = m[h])[0], n[1]);
                    else
                        d(l.point, l.next.point, 1, e);
                    l = l.next
                } else {
                    if (l.subject) {
                        m = l.prev.points;
                        for (var h = m.length; --h >= 0; )
                            e.point((n = m[h])[0], n[1])
                    } else
                        d(l.point, l.prev.point, -1, e);
                    l = l.prev
                }
                l = l.other, m = l.points
            } while (!l.visited);
            e.lineEnd()
        }
    }
    function Yc(a) {
        if (!(b = a.length))
            return;
        var b, c = 0, d = a[0], e;
        while (++c < b)
            d.next = e = a[c], e.prev = d, d = e;
        d.next = e = a[0], e.prev = d
    }
    function Zc(b, c, d) {
        return function(e) {
            function h(a, c) {
                b(a, c) && e.point(a, c)
            }
            function i(a, b) {
                f.point(a, b)
            }
            function j() {
                g.point = i, f.lineStart()
            }
            function k() {
                g.point = h, f.lineEnd()
            }
            function s(a, b) {
                q.point(a, b), r.push([a, b])
            }
            function t() {
                q.lineStart(), r = []
            }
            function u() {
                s(r[0][0], r[0][1]), q.lineEnd();
                var a = q.clean(), b = p.buffer(), c, d = b.length;
                if (!d) {
                    o = !0, n += ad(r, -1), r = null;
                    return
                }
                r = null;
                if (a & 1) {
                    c = b[0], m += ad(c, 1);
                    var d = c.length - 1, f = -1, g;
                    e.lineStart();
                    while (++f < d)
                        e.point((g = c[f])[0], g[1]);
                    e.lineEnd();
                    return
                }
                d > 1 && a & 2 && b.push(b.pop().concat(b.shift())), l.push(b.filter($c))
            }
            var f = c(e), g = {point: h,lineStart: j,lineEnd: k,polygonStart: function() {
                    g.point = s, g.lineStart = t, g.lineEnd = u, o = !1, n = m = 0, l = [], e.polygonStart()
                },polygonEnd: function() {
                    g.point = h, g.lineStart = j, g.lineEnd = k, l = a.merge(l);
                    if (l.length)
                        Xc(l, bd, null, d, e);
                    else if (m < -pb || o && n < -pb)
                        e.lineStart(), d(null, null, 1, e), e.lineEnd();
                    e.polygonEnd(), l = null
                },sphere: function() {
                    e.polygonStart(), e.lineStart(), d(null, null, 1, e), e.lineEnd(), e.polygonEnd()
                }}, l, m, n, o, p = _c(), q = c(p), r;
            return g
        }
    }
    function $c(a) {
        return a.length > 1
    }
    function _c() {
        var a = [], b;
        return {lineStart: function() {
                a.push(b = [])
            },point: function(a, c) {
                b.push([a, c])
            },lineEnd: Z,buffer: function() {
                var c = a;
                return a = [], b = null, c
            },rejoin: function() {
                a.length > 1 && a.push(a.pop().concat(a.shift()))
            }}
    }
    function ad(a, b) {
        if (!(c = a.length))
            return 0;
        var c, d = 0, e = 0, f = a[0], g = f[0], h = f[1], i = Math.cos(h), j = Math.atan2(b * Math.sin(g) * i, Math.sin(h)), k = 1 - b * Math.cos(g) * i, l = j, m, n;
        while (++d < c) {
            f = a[d], i = Math.cos(h = f[1]), m = Math.atan2(b * Math.sin(g = f[0]) * i, Math.sin(h)), n = 1 - b * Math.cos(g) * i;
            if (Math.abs(k - 2) < pb && Math.abs(n - 2) < pb)
                continue;
            Math.abs(n) < pb || Math.abs(k) < pb || (Math.abs(Math.abs(m - j) - ob) < pb ? n + k > 2 && (e += 4 * (m - j)) : Math.abs(k - 2) < pb ? e += 4 * (m - l) : e += ((3 * ob + m - j) % (2 * ob) - ob) * (k + n)), l = j, j = m, k = n
        }
        return e
    }
    function bd(a, b) {
        return ((a = a.point)[0] < 0 ? a[1] - ob / 2 - pb : ob / 2 - a[1]) - ((b = b.point)[0] < 0 ? b[1] - ob / 2 - pb : ob / 2 - b[1])
    }
    function dd(a) {
        var b = NaN, c = NaN, d = NaN, e;
        return {lineStart: function() {
                a.lineStart(), e = 1
            },point: function(f, g) {
                var h = f > 0 ? ob : -ob, i = Math.abs(f - b);
                Math.abs(i - ob) < pb ? (a.point(b, c = (c + g) / 2 > 0 ? ob / 2 : -ob / 2), a.point(d, c), a.lineEnd(), a.lineStart(), a.point(h, c), a.point(f, c), e = 0) : d !== h && i >= ob && (Math.abs(b - d) < pb && (b -= d * pb), Math.abs(f - h) < pb && (f -= h * pb), c = ed(b, c, f, g), a.point(d, c), a.lineEnd(), a.lineStart(), a.point(h, c), e = 0), a.point(b = f, c = g), d = h
            },lineEnd: function() {
                a.lineEnd(), b = c = NaN
            },clean: function() {
                return 2 - e
            }}
    }
    function ed(a, b, c, d) {
        var e, f, g = Math.sin(a - c);
        return Math.abs(g) > pb ? Math.atan((Math.sin(b) * (f = Math.cos(d)) * Math.sin(c) - Math.sin(d) * (e = Math.cos(b)) * Math.sin(a)) / (e * f * g)) : (b + d) / 2
    }
    function fd(a, b, c, d) {
        var e;
        if (a == null)
            e = c * ob / 2, d.point(-ob, e), d.point(0, e), d.point(ob, e), d.point(ob, 0), d.point(ob, -e), d.point(0, -e), d.point(-ob, -e), d.point(-ob, 0), d.point(-ob, e);
        else if (Math.abs(a[0] - b[0]) > pb) {
            var f = (a[0] < b[0] ? 1 : -1) * ob;
            e = c * f / 2, d.point(-f, e), d.point(0, e), d.point(f, e)
        } else
            d.point(b[0], b[1])
    }
    function gd(a) {
        function f(a, c) {
            return Math.cos(a) * Math.cos(c) > b
        }
        function g(a) {
            var b, e, g, j, k;
            return {lineStart: function() {
                    j = g = !1, k = 1
                },point: function(l, m) {
                    var n = [l, m], o, p = f(l, m), q = c ? p ? 0 : i(l, m) : p ? i(l + (l < 0 ? ob : -ob), m) : 0;
                    !b && (j = g = p) && a.lineStart();
                    if (p !== g) {
                        o = h(b, n);
                        if (Wc(b, o) || Wc(n, o))
                            n[0] += pb, n[1] += pb, p = f(n[0], n[1])
                    }
                    if (p !== g)
                        k = 0, p ? (a.lineStart(), o = h(n, b), a.point(o[0], o[1])) : (o = h(b, n), a.point(o[0], o[1]), a.lineEnd()), b = o;
                    else if (d && b && c ^ p) {
                        var r;
                        !(q & e) && (r = h(n, b, !0)) && (k = 0, c ? (a.lineStart(), a.point(r[0][0], r[0][1]), a.point(r[1][0], r[1][1]), a.lineEnd()) : (a.point(r[1][0], r[1][1]), a.lineEnd(), a.lineStart(), a.point(r[0][0], r[0][1])))
                    }
                    p && (!b || !Wc(b, n)) && a.point(n[0], n[1]), b = n, g = p, e = q
                },lineEnd: function() {
                    g && a.lineEnd(), b = null
                },clean: function() {
                    return k | (j && g) << 1
                }}
        }
        function h(a, c, d) {
            var e = Oc(a), f = Oc(c), g = [1, 0, 0], h = Qc(e, f), i = Pc(h, h), j = h[0], k = i - j * j;
            if (!k)
                return !d && a;
            var l = b * i / k, m = -b * j / k, n = Qc(g, h), o = Sc(g, l), p = Sc(h, m);
            Rc(o, p);
            var q = n, r = Pc(o, q), s = Pc(q, q), t = r * r - s * (Pc(o, o) - 1);
            if (t < 0)
                return;
            var u = Math.sqrt(t), v = Sc(q, (-r - u) / s);
            Rc(v, o), v = Vc(v);
            if (!d)
                return v;
            var w = a[0], x = c[0], y = a[1], z = c[1], A;
            x < w && (A = w, w = x, x = A);
            var B = x - w, C = Math.abs(B - ob) < pb, D = C || B < pb;
            !C && z < y && (A = y, y = z, z = A);
            if (D ? C ? y + z > 0 ^ v[1] < (Math.abs(v[0] - w) < pb ? y : z) : y <= v[1] && v[1] <= z : B > ob ^ (w <= v[0] && v[0] <= x)) {
                var E = Sc(q, (-r + u) / s);
                return Rc(E, o), [v, Vc(E)]
            }
        }
        function i(b, d) {
            var e = c ? a : ob - a, f = 0;
            return b < -e ? f |= 1 : b > e && (f |= 2), d < -e ? f |= 4 : d > e && (f |= 8), f
        }
        var b = Math.cos(a), c = b > 0, d = Math.abs(b) > pb, e = ud(a, 6 * qb);
        return Zc(f, g, e)
    }
    function id(c, d, e, f) {
        function g(a, b) {
            return Math.abs(a[0] - c) < pb ? b > 0 ? 0 : 3 : Math.abs(a[0] - e) < pb ? b > 0 ? 2 : 1 : Math.abs(a[1] - d) < pb ? b > 0 ? 1 : 0 : b > 0 ? 3 : 2
        }
        function h(a, b) {
            return i(a.point, b.point)
        }
        function i(a, b) {
            var c = g(a, 1), d = g(b, 1);
            return c !== d ? c - d : c === 0 ? b[1] - a[1] : c === 1 ? a[0] - b[0] : c === 2 ? a[1] - b[1] : b[0] - a[0]
        }
        function j(a, b) {
            var g = b[0] - a[0], h = b[1] - a[1], i = [0, 1];
            return Math.abs(g) < pb && Math.abs(h) < pb ? c <= a[0] && a[0] <= e && d <= a[1] && a[1] <= f : jd(c - a[0], g, i) && jd(a[0] - e, -g, i) && jd(d - a[1], h, i) && jd(a[1] - f, -h, i) ? (i[1] < 1 && (b[0] = a[0] + i[1] * g, b[1] = a[1] + i[1] * h), i[0] > 0 && (a[0] += i[0] * g, a[1] += i[0] * h), !0) : !1
        }
        return function(k) {
            function r(a) {
                var b = g(a, -1), h = s([b === 0 || b === 3 ? c : e, b > 1 ? f : d]);
                return h
            }
            function s(a) {
                var c = 0, d = o.length, e = a[1];
                for (var f = 0; f < d; ++f)
                    for (var g = 1, h = o[f], i = h.length, j = h[0]; g < i; ++g)
                        b = h[g], j[1] <= e ? b[1] > e && t(j, b, a) > 0 && ++c : b[1] <= e && t(j, b, a) < 0 && --c, j = b;
                return c !== 0
            }
            function t(a, b, c) {
                return (b[0] - a[0]) * (c[1] - a[1]) - (c[0] - a[0]) * (b[1] - a[1])
            }
            function u(a, b, h, j) {
                var k = 0, l = 0;
                if (a == null || (k = g(a, h)) !== (l = g(b, h)) || i(a, b) < 0 ^ h > 0) {
                    do
                        j.point(k === 0 || k === 3 ? c : e, k > 1 ? f : d);
                    while ((k = (k + h + 4) % 4) !== l)
                } else
                    j.point(b[0], b[1])
            }
            function v(a, b) {
                return c <= a && a <= e && d <= b && b <= f
            }
            function w(a, b) {
                v(a, b) && k.point(a, b)
            }
            function E() {
                q.point = G, o && o.push(p = []), D = !0, C = !1, A = B = NaN
            }
            function F() {
                n && (G(x, y), z && C && m.rejoin(), n.push(m.buffer())), q.point = w, C && k.lineEnd()
            }
            function G(a, b) {
                a = Math.max(-hd, Math.min(hd, a)), b = Math.max(-hd, Math.min(hd, b));
                var c = v(a, b);
                o && p.push([a, b]);
                if (D)
                    x = a, y = b, z = c, D = !1, c && (k.lineStart(), k.point(a, b));
                else if (c && C)
                    k.point(a, b);
                else {
                    var d = [A, B], e = [a, b];
                    j(d, e) ? (C || (k.lineStart(), k.point(d[0], d[1])), k.point(e[0], e[1]), c || k.lineEnd()) : (k.lineStart(), k.point(a, b))
                }
                A = a, B = b, C = c
            }
            var l = k, m = _c(), n, o, p, q = {point: w,lineStart: E,lineEnd: F,polygonStart: function() {
                    k = m, n = [], o = []
                },polygonEnd: function() {
                    k = l, (n = a.merge(n)).length ? (k.polygonStart(), Xc(n, h, r, u, k), k.polygonEnd()) : s([c, d]) && (k.polygonStart(), k.lineStart(), u(null, null, 1, k), k.lineEnd(), k.polygonEnd()), n = o = p = null
                }}, x, y, z, A, B, C, D;
            return q
        }
    }
    function jd(a, b, c) {
        if (Math.abs(b) < pb)
            return a <= 0;
        var d = a / b;
        if (b > 0) {
            if (d > c[1])
                return !1;
            d > c[0] && (c[0] = d)
        } else {
            if (d < c[0])
                return !1;
            d < c[1] && (c[1] = d)
        }
        return !0
    }
    function kd(a, b) {
        function c(c, d) {
            return c = a(c, d), b(c[0], c[1])
        }
        return a.invert && b.invert && (c.invert = function(c, d) {
            return c = b.invert(c, d), c && a.invert(c[0], c[1])
        }), c
    }
    function ld(a) {
        function d(b) {
            function l(c, d) {
                c = a(c, d), b.point(c[0], c[1])
            }
            function m() {
                f = NaN, k.point = n, b.lineStart()
            }
            function n(k, l) {
                var m = Oc([k, l]), n = a(k, l);
                e(f, g, d, h, i, j, f = n[0], g = n[1], d = k, h = m[0], i = m[1], j = m[2], c, b), b.point(f, g)
            }
            function o() {
                k.point = l, b.lineEnd()
            }
            function p() {
                var a, l, p, q, r, s, t;
                m(), k.point = function(b, c) {
                    n(a = b, l = c), p = f, q = g, r = h, s = i, t = j, k.point = n
                }, k.lineEnd = function() {
                    e(f, g, d, h, i, j, p, q, a, r, s, t, c, b), k.lineEnd = o, o()
                }
            }
            var d, f, g, h, i, j, k = {point: l,lineStart: m,lineEnd: o,polygonStart: function() {
                    b.polygonStart(), k.lineStart = p
                },polygonEnd: function() {
                    b.polygonEnd(), k.lineStart = m
                }};
            return k
        }
        function e(c, d, f, g, h, i, j, k, l, m, n, o, p, q) {
            var r = j - c, s = k - d, t = r * r + s * s;
            if (t > 4 * b && p--) {
                var u = g + m, v = h + n, w = i + o, x = Math.sqrt(u * u + v * v + w * w), y = Math.asin(w /= x), z = Math.abs(Math.abs(w) - 1) < pb ? (f + l) / 2 : Math.atan2(v, u), A = a(z, y), B = A[0], C = A[1], D = B - c, E = C - d, F = s * D - r * E;
                if (F * F / t > b || Math.abs((r * D + s * E) / t - .5) > .3)
                    e(c, d, f, g, h, i, B, C, z, u /= x, v /= x, w, p, q), q.point(B, C), e(B, C, z, u, v, w, j, k, l, m, n, o, p, q)
            }
        }
        var b = .5, c = 16;
        return d.precision = function(a) {
            return arguments.length ? (c = (b = a * a) > 0 && 16, d) : Math.sqrt(b)
        }, d
    }
    function md(a) {
        return nd(function() {
            return a
        })()
    }
    function nd(b) {
        function u(a) {
            return a = e(a[0] * qb, a[1] * qb), [a[0] * g + o, p - a[1] * g]
        }
        function v(a) {
            return a = e.invert((a[0] - o) / g, (p - a[1]) / g), a && [a[0] * rb, a[1] * rb]
        }
        function w() {
            e = kd(d = qd(l, m, n), c);
            var a = c(j, k);
            return o = h - a[0] * g, p = i + a[1] * g, u
        }
        var c, d, e, f = ld(function(a, b) {
            return a = c(a, b), [a[0] * g + o, p - a[1] * g]
        }), g = 150, h = 480, i = 250, j = 0, k = 0, l = 0, m = 0, n = 0, o, p, q = cd, r = Zb, s = null, t = null;
        return u.stream = function(a) {
            return od(d, q(f(r(a))))
        }, u.clipAngle = function(a) {
            return arguments.length ? (q = a == null ? (s = a, cd) : gd((s = +a) * qb), u) : s
        }, u.clipExtent = function(a) {
            return arguments.length ? (t = a, r = a == null ? Zb : id(a[0][0], a[0][1], a[1][0], a[1][1]), u) : t
        }, u.scale = function(a) {
            return arguments.length ? (g = +a, w()) : g
        }, u.translate = function(a) {
            return arguments.length ? (h = +a[0], i = +a[1], w()) : [h, i]
        }, u.center = function(a) {
            return arguments.length ? (j = a[0] % 360 * qb, k = a[1] % 360 * qb, w()) : [j * rb, k * rb]
        }, u.rotate = function(a) {
            return arguments.length ? (l = a[0] % 360 * qb, m = a[1] % 360 * qb, n = a.length > 2 ? a[2] % 360 * qb : 0, w()) : [l * rb, m * rb, n * rb]
        }, a.rebind(u, f, "precision"), function() {
            return c = b.apply(this, arguments), u.invert = c.invert && v, w()
        }
    }
    function od(a, b) {
        return {point: function(c, d) {
                d = a(c * qb, d * qb), c = d[0], b.point(c > ob ? c - 2 * ob : c < -ob ? c + 2 * ob : c, d[1])
            },sphere: function() {
                b.sphere()
            },lineStart: function() {
                b.lineStart()
            },lineEnd: function() {
                b.lineEnd()
            },polygonStart: function() {
                b.polygonStart()
            },polygonEnd: function() {
                b.polygonEnd()
            }}
    }
    function pd(a, b) {
        return [a, b]
    }
    function qd(a, b, c) {
        return a ? b || c ? kd(sd(a), td(b, c)) : sd(a) : b || c ? td(b, c) : pd
    }
    function rd(a) {
        return function(b, c) {
            return b += a, [b > ob ? b - 2 * ob : b < -ob ? b + 2 * ob : b, c]
        }
    }
    function sd(a) {
        var b = rd(a);
        return b.invert = rd(-a), b
    }
    function td(a, b) {
        function g(a, b) {
            var g = Math.cos(b), h = Math.cos(a) * g, i = Math.sin(a) * g, j = Math.sin(b), k = j * c + h * d;
            return [Math.atan2(i * e - k * f, h * c - j * d), Math.asin(Math.max(-1, Math.min(1, k * e + i * f)))]
        }
        var c = Math.cos(a), d = Math.sin(a), e = Math.cos(b), f = Math.sin(b);
        return g.invert = function(a, b) {
            var g = Math.cos(b), h = Math.cos(a) * g, i = Math.sin(a) * g, j = Math.sin(b), k = j * e - i * f;
            return [Math.atan2(i * e + j * f, h * c + k * d), Math.asin(Math.max(-1, Math.min(1, k * c - h * d)))]
        }, g
    }
    function ud(a, b) {
        var c = Math.cos(a), d = Math.sin(a);
        return function(e, f, g, h) {
            if (e != null) {
                e = vd(c, e), f = vd(c, f);
                if (g > 0 ? e < f : e > f)
                    e += g * 2 * ob
            } else
                e = a + g * 2 * ob, f = a;
            var i;
            for (var j = g * b, k = e; g > 0 ? k > f : k < f; k -= j)
                h.point((i = Vc([c, -d * Math.cos(k), -d * Math.sin(k)]))[0], i[1])
        }
    }
    function vd(a, b) {
        var c = Oc(b);
        c[0] -= a, Tc(c);
        var d = tb(-c[1]);
        return ((-c[2] < 0 ? -d : d) + 2 * Math.PI - pb) % (2 * Math.PI)
    }
    function wd(b, c, d) {
        var e = a.range(b, c - pb, d).concat(c);
        return function(a) {
            return e.map(function(b) {
                return [a, b]
            })
        }
    }
    function xd(b, c, d) {
        var e = a.range(b, c - pb, d).concat(c);
        return function(a) {
            return e.map(function(b) {
                return [b, a]
            })
        }
    }
    function yd(a) {
        return a.source
    }
    function zd(a) {
        return a.target
    }
    function Ad(a, b, c, d) {
        var e = Math.cos(b), f = Math.sin(b), g = Math.cos(d), h = Math.sin(d), i = e * Math.cos(a), j = e * Math.sin(a), k = g * Math.cos(c), l = g * Math.sin(c), m = 2 * Math.asin(Math.sqrt(xb(d - b) + e * g * xb(c - a))), n = 1 / Math.sin(m), o = m ? function(a) {
            var b = Math.sin(a *= m) * n, c = Math.sin(m - a) * n, d = c * i + b * k, e = c * j + b * l, g = c * f + b * h;
            return [Math.atan2(e, d) * rb, Math.atan2(g, Math.sqrt(d * d + e * e)) * rb]
        } : function() {
            return [a * rb, b * rb]
        };
        return o.distance = m, o
    }
    function Dd() {
        function d(d, e) {
            var f = Math.sin(e *= qb), g = Math.cos(e), h = Math.abs((d *= qb) - a), i = Math.cos(h);
            Bd += Math.atan2(Math.sqrt((h = g * Math.sin(h)) * h + (h = c * f - b * g * i) * h), b * f + c * g * i), a = d, b = f, c = g
        }
        var a, b, c;
        Cd.point = function(e, f) {
            a = e * qb, b = Math.sin(f *= qb), c = Math.cos(f), Cd.point = d
        }, Cd.lineEnd = function() {
            Cd.point = Cd.lineEnd = Z
        }
    }
    function Ed(a) {
        var b = 0, c = ob / 3, d = nd(a), e = d(b, c);
        return e.parallels = function(a) {
            return arguments.length ? d(b = a[0] * ob / 180, c = a[1] * ob / 180) : [b / ob * 180, c / ob * 180]
        }, e
    }
    function Fd(a, b) {
        function g(a, b) {
            var c = Math.sqrt(e - 2 * d * Math.sin(b)) / d;
            return [c * Math.sin(a *= d), f - c * Math.cos(a)]
        }
        var c = Math.sin(a), d = (c + Math.sin(b)) / 2, e = 1 + c * (2 * d - c), f = Math.sqrt(e) / d;
        return g.invert = function(a, b) {
            var c = f - b;
            return [Math.atan2(a, c) / d, Math.asin((e - (a * a + c * c) * d * d) / (2 * d))]
        }, g
    }
    function Gd(a, b) {
        var c = a(b[0]), d = a([.5 * (b[0][0] + b[1][0]), b[0][1]]), e = a([b[1][0], b[0][1]]), f = a(b[1]), g = d[1] - c[1], h = d[0] - c[0], i = e[1] - d[1], j = e[0] - d[0], k = g / h, l = i / j, m = .5 * (k * l * (c[1] - e[1]) + l * (c[0] + d[0]) - k * (d[0] + e[0])) / (l - k), n = (.5 * (c[0] + d[0]) - m) / k + .5 * (c[1] + d[1]), o = f[0] - m, p = f[1] - n, q = c[0] - m, r = c[1] - n, s = o * o + p * p, t = q * q + r * r, u = Math.atan2(p, o), v = Math.atan2(r, q);
        return function(b) {
            var c = b[0] - m, d = b[1] - n, e = c * c + d * d, f = Math.atan2(d, c);
            if (s < e && e < t && u < f && f < v)
                return a.invert(b)
        }
    }
    function Kd() {
        function e(a, b) {
            Id += d * a - c * b, c = a, d = b
        }
        var a, b, c, d;
        Jd.point = function(f, g) {
            Jd.point = e, a = c = f, b = d = g
        }, Jd.lineEnd = function() {
            e(a, b)
        }
    }
    function Ld() {
        function d(c, d) {
            b.push("M", c, ",", d, a)
        }
        function e(a, d) {
            b.push("M", a, ",", d), c.point = f
        }
        function f(a, c) {
            b.push("L", a, ",", c)
        }
        function g() {
            c.point = d
        }
        function h() {
            b.push("Z")
        }
        var a = Sd(4.5), b = [], c = {point: d,lineStart: function() {
                c.point = e
            },lineEnd: g,polygonStart: function() {
                c.lineEnd = h
            },polygonEnd: function() {
                c.lineEnd = g, c.point = d
            },pointRadius: function(b) {
                return a = Sd(b), c
            },result: function() {
                if (b.length) {
                    var a = b.join("");
                    return b = [], a
                }
            }};
        return c
    }
    function Nd(a, b) {
        if (Ec)
            return;
        Gc += a, Hc += b, ++Ic
    }
    function Od() {
        function c(c, d) {
            var e = c - a, f = d - b, g = Math.sqrt(e * e + f * f);
            Gc += g * (a + c) / 2, Hc += g * (b + d) / 2, Ic += g, a = c, b = d
        }
        var a, b;
        if (Ec !== 1) {
            if (!(Ec < 1))
                return;
            Ec = 1, Gc = Hc = Ic = 0
        }
        Md.point = function(d, e) {
            Md.point = c, a = d, b = e
        }
    }
    function Pd() {
        Md.point = Nd
    }
    function Qd() {
        function e(a, b) {
            var e = d * a - c * b;
            Gc += e * (c + a), Hc += e * (d + b), Ic += e * 3, c = a, d = b
        }
        var a, b, c, d;
        Ec < 2 && (Ec = 2, Gc = Hc = Ic = 0), Md.point = function(f, g) {
            Md.point = e, a = c = f, b = d = g
        }, Md.lineEnd = function() {
            e(a, b)
        }
    }
    function Rd(a) {
        function d(c, d) {
            a.moveTo(c, d), a.arc(c, d, b, 0, 2 * ob)
        }
        function e(b, d) {
            a.moveTo(b, d), c.point = f
        }
        function f(b, c) {
            a.lineTo(b, c)
        }
        function g() {
            c.point = d
        }
        function h() {
            a.closePath()
        }
        var b = 4.5, c = {point: d,lineStart: function() {
                c.point = e
            },lineEnd: g,polygonStart: function() {
                c.lineEnd = h
            },polygonEnd: function() {
                c.lineEnd = g, c.point = d
            },pointRadius: function(a) {
                return b = a, c
            },result: Z};
        return c
    }
    function Sd(a) {
        return "m0," + a + "a" + a + "," + a + " 0 1,1 0," + -2 * a + "a" + a + "," + a + " 0 1,1 0," + 2 * a + "z"
    }
    function Td(a) {
        var b = ld(function(b, c) {
            return a([b * rb, c * rb])
        });
        return function(a) {
            return a = b(a), {point: function(b, c) {
                    a.point(b * qb, c * qb)
                },sphere: function() {
                    a.sphere()
                },lineStart: function() {
                    a.lineStart()
                },lineEnd: function() {
                    a.lineEnd()
                },polygonStart: function() {
                    a.polygonStart()
                },polygonEnd: function() {
                    a.polygonEnd()
                }}
        }
    }
    function Ud(a, b) {
        function c(b, c) {
            var d = Math.cos(b), e = Math.cos(c), f = a(d * e);
            return [f * e * Math.sin(b), f * Math.sin(c)]
        }
        return c.invert = function(a, c) {
            var d = Math.sqrt(a * a + c * c), e = b(d), f = Math.sin(e), g = Math.cos(e);
            return [Math.atan2(a * f, d * g), Math.asin(d && c * f / d)]
        }, c
    }
    function Xd(a, b) {
        function g(a, b) {
            var c = Math.abs(Math.abs(b) - ob / 2) < pb ? 0 : f / Math.pow(d(b), e);
            return [c * Math.sin(e * a), f - c * Math.cos(e * a)]
        }
        var c = Math.cos(a), d = function(a) {
            return Math.tan(ob / 4 + a / 2)
        }, e = a === b ? Math.sin(a) : Math.log(c / Math.cos(b)) / Math.log(d(b) / d(a)), f = c * Math.pow(d(a), e) / e;
        return e ? (g.invert = function(a, b) {
            var c = f - b, d = sb(e) * Math.sqrt(a * a + c * c);
            return [Math.atan2(a, c) / e, 2 * Math.atan(Math.pow(f / d, 1 / e)) - ob / 2]
        }, g) : $d
    }
    function Yd(a, b) {
        function f(a, b) {
            var c = e - b;
            return [c * Math.sin(d * a), e - c * Math.cos(d * a)]
        }
        var c = Math.cos(a), d = a === b ? Math.sin(a) : (c - Math.cos(b)) / (b - a), e = c / d + a;
        return Math.abs(d) < pb ? pd : (f.invert = function(a, b) {
            var c = e - b;
            return [Math.atan2(a, c) / d, e - sb(d) * Math.sqrt(a * a + c * c)]
        }, f)
    }
    function $d(a, b) {
        return [a, Math.log(Math.tan(ob / 4 + b / 2))]
    }
    function _d(a) {
        var b = md(a), c = b.scale, d = b.translate, e = b.clipExtent, f;
        return b.scale = function() {
            var a = c.apply(b, arguments);
            return a === b ? f ? b.clipExtent(null) : b : a
        }, b.translate = function() {
            var a = d.apply(b, arguments);
            return a === b ? f ? b.clipExtent(null) : b : a
        }, b.clipExtent = function(a) {
            var g = e.apply(b, arguments);
            if (g === b) {
                if (f = a == null) {
                    var h = ob * c(), i = d();
                    e([[i[0] - h, i[1] - h], [i[0] + h, i[1] + h]])
                }
            } else
                f && (g = null);
            return g
        }, b.clipExtent(null)
    }
    function ce(a, b) {
        var c = Math.cos(b) * Math.sin(a);
        return [Math.log((1 + c) / (1 - c)) / 2, Math.atan2(Math.tan(b), Math.cos(a))]
    }
    function de(a) {
        function h(f) {
            function o() {
                h.push("M", e(a(i), g))
            }
            var h = [], i = [], j = -1, k = f.length, l, m = Yb(b), n = Yb(c);
            while (++j < k)
                d.call(this, l = f[j], j) ? i.push([+m.call(this, l, j), +n.call(this, l, j)]) : i.length && (o(), i = []);
            return i.length && o(), h.length ? h.join("") : null
        }
        var b = ee, c = fe, d = Uc, e = he, f = e.key, g = .7;
        return h.x = function(a) {
            return arguments.length ? (b = a, h) : b
        }, h.y = function(a) {
            return arguments.length ? (c = a, h) : c
        }, h.defined = function(a) {
            return arguments.length ? (d = a, h) : d
        }, h.interpolate = function(a) {
            return arguments.length ? (typeof a == "function" ? f = e = a : f = (e = ge.get(a) || he).key, h) : f
        }, h.tension = function(a) {
            return arguments.length ? (g = a, h) : g
        }, h
    }
    function ee(a) {
        return a[0]
    }
    function fe(a) {
        return a[1]
    }
    function he(a) {
        return a.join("L")
    }
    function ie(a) {
        return he(a) + "Z"
    }
    function je(a) {
        var b = 0, c = a.length, d = a[0], e = [d[0], ",", d[1]];
        while (++b < c)
            e.push("V", (d = a[b])[1], "H", d[0]);
        return e.join("")
    }
    function ke(a) {
        var b = 0, c = a.length, d = a[0], e = [d[0], ",", d[1]];
        while (++b < c)
            e.push("H", (d = a[b])[0], "V", d[1]);
        return e.join("")
    }
    function le(a, b) {
        return a.length < 4 ? he(a) : a[1] + oe(a.slice(1, a.length - 1), pe(a, b))
    }
    function me(a, b) {
        return a.length < 3 ? he(a) : a[0] + oe((a.push(a[0]), a), pe([a[a.length - 2]].concat(a, [a[1]]), b))
    }
    function ne(a, b) {
        return a.length < 3 ? he(a) : a[0] + oe(a, pe(a, b))
    }
    function oe(a, b) {
        if (b.length < 1 || a.length != b.length && a.length != b.length + 2)
            return he(a);
        var c = a.length != b.length, d = "", e = a[0], f = a[1], g = b[0], h = g, i = 1;
        c && (d += "Q" + (f[0] - g[0] * 2 / 3) + "," + (f[1] - g[1] * 2 / 3) + "," + f[0] + "," + f[1], e = a[1], i = 2);
        if (b.length > 1) {
            h = b[1], f = a[i], i++, d += "C" + (e[0] + g[0]) + "," + (e[1] + g[1]) + "," + (f[0] - h[0]) + "," + (f[1] - h[1]) + "," + f[0] + "," + f[1];
            for (var j = 2; j < b.length; j++, i++)
                f = a[i], h = b[j], d += "S" + (f[0] - h[0]) + "," + (f[1] - h[1]) + "," + f[0] + "," + f[1]
        }
        if (c) {
            var k = a[i];
            d += "Q" + (f[0] + h[0] * 2 / 3) + "," + (f[1] + h[1] * 2 / 3) + "," + k[0] + "," + k[1]
        }
        return d
    }
    function pe(a, b) {
        var c = [], d = (1 - b) / 2, e, f = a[0], g = a[1], h = 1, i = a.length;
        while (++h < i)
            e = f, f = g, g = a[h], c.push([d * (g[0] - e[0]), d * (g[1] - e[1])]);
        return c
    }
    function qe(a) {
        if (a.length < 3)
            return he(a);
        var b = 1, c = a.length
        , d = a[0], e = d[0], f = d[1], g = [e, e, e, (d = a[1])[0]], h = [f, f, f, d[1]], i = [e, ",", f];
        ye(i, g, h);
        while (++b < c)
            d = a[b], g.shift(), g.push(d[0]), h.shift(), h.push(d[1]), ye(i, g, h);
        b = -1;
        while (++b < 2)
            g.shift(), g.push(d[0]), h.shift(), h.push(d[1]), ye(i, g, h);
        return i.join("")
    }
    function re(a) {
        if (a.length < 4)
            return he(a);
        var b = [], c = -1, d = a.length, e, f = [0], g = [0];
        while (++c < 3)
            e = a[c], f.push(e[0]), g.push(e[1]);
        b.push(ue(xe, f) + "," + ue(xe, g)), --c;
        while (++c < d)
            e = a[c], f.shift(), f.push(e[0]), g.shift(), g.push(e[1]), ye(b, f, g);
        return b.join("")
    }
    function se(a) {
        var b, c = -1, d = a.length, e = d + 4, f, g = [], h = [];
        while (++c < 4)
            f = a[c % d], g.push(f[0]), h.push(f[1]);
        b = [ue(xe, g), ",", ue(xe, h)], --c;
        while (++c < e)
            f = a[c % d], g.shift(), g.push(f[0]), h.shift(), h.push(f[1]), ye(b, g, h);
        return b.join("")
    }
    function te(a, b) {
        var c = a.length - 1;
        if (c) {
            var d = a[0][0], e = a[0][1], f = a[c][0] - d, g = a[c][1] - e, h = -1, i, j;
            while (++h <= c)
                i = a[h], j = h / c, i[0] = b * i[0] + (1 - b) * (d + j * f), i[1] = b * i[1] + (1 - b) * (e + j * g)
        }
        return qe(a)
    }
    function ue(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
    }
    function ye(a, b, c) {
        a.push("C", ue(ve, b), ",", ue(ve, c), ",", ue(we, b), ",", ue(we, c), ",", ue(xe, b), ",", ue(xe, c))
    }
    function ze(a, b) {
        return (b[1] - a[1]) / (b[0] - a[0])
    }
    function Ae(a) {
        var b = 0, c = a.length - 1, d = [], e = a[0], f = a[1], g = d[0] = ze(e, f);
        while (++b < c)
            d[b] = (g + (g = ze(e = f, f = a[b + 1]))) / 2;
        return d[b] = g, d
    }
    function Be(a) {
        var b = [], c, d, e, f, g = Ae(a), h = -1, i = a.length - 1;
        while (++h < i)
            c = ze(a[h], a[h + 1]), Math.abs(c) < 1e-6 ? g[h] = g[h + 1] = 0 : (d = g[h] / c, e = g[h + 1] / c, f = d * d + e * e, f > 9 && (f = c * 3 / Math.sqrt(f), g[h] = f * d, g[h + 1] = f * e));
        h = -1;
        while (++h <= i)
            f = (a[Math.min(i, h + 1)][0] - a[Math.max(0, h - 1)][0]) / (6 * (1 + g[h] * g[h])), b.push([f || 0, g[h] * f || 0]);
        return b
    }
    function Ce(a) {
        return a.length < 3 ? he(a) : a[0] + oe(a, Be(a))
    }
    function De(a, b, c, d) {
        var e, f, g, h, i, j, k;
        return e = d[a], f = e[0], g = e[1], e = d[b], h = e[0], i = e[1], e = d[c], j = e[0], k = e[1], (k - g) * (h - f) - (i - g) * (j - f) > 0
    }
    function Ee(a, b, c) {
        return (c[0] - b[0]) * (a[1] - b[1]) < (c[1] - b[1]) * (a[0] - b[0])
    }
    function Fe(a, b, c, d) {
        var e = a[0], f = c[0], g = b[0] - e, h = d[0] - f, i = a[1], j = c[1], k = b[1] - i, l = d[1] - j, m = (h * (i - j) - l * (e - f)) / (l * g - h * k);
        return [e + m * g, i + m * k]
    }
    function He(a, b) {
        var c = {list: a.map(function(a, b) {
                return {index: b,x: a[0],y: a[1]}
            }).sort(function(a, b) {
                return a.y < b.y ? -1 : a.y > b.y ? 1 : a.x < b.x ? -1 : a.x > b.x ? 1 : 0
            }),bottomSite: null}, d = {list: [],leftEnd: null,rightEnd: null,init: function() {
                d.leftEnd = d.createHalfEdge(null, "l"), d.rightEnd = d.createHalfEdge(null, "l"), d.leftEnd.r = d.rightEnd, d.rightEnd.l = d.leftEnd, d.list.unshift(d.leftEnd, d.rightEnd)
            },createHalfEdge: function(a, b) {
                return {edge: a,side: b,vertex: null,l: null,r: null}
            },insert: function(a, b) {
                b.l = a, b.r = a.r, a.r.l = b, a.r = b
            },leftBound: function(a) {
                var b = d.leftEnd;
                do
                    b = b.r;
                while (b != d.rightEnd && e.rightOf(b, a));
                return b = b.l, b
            },del: function(a) {
                a.l.r = a.r, a.r.l = a.l, a.edge = null
            },right: function(a) {
                return a.r
            },left: function(a) {
                return a.l
            },leftRegion: function(a) {
                return a.edge == null ? c.bottomSite : a.edge.region[a.side]
            },rightRegion: function(a) {
                return a.edge == null ? c.bottomSite : a.edge.region[Ge[a.side]]
            }}, e = {bisect: function(a, b) {
                var c = {region: {l: a,r: b},ep: {l: null,r: null}}, d = b.x - a.x, e = b.y - a.y, f = d > 0 ? d : -d, g = e > 0 ? e : -e;
                return c.c = a.x * d + a.y * e + (d * d + e * e) * .5, f > g ? (c.a = 1, c.b = e / d, c.c /= d) : (c.b = 1, c.a = d / e, c.c /= e), c
            },intersect: function(a, b) {
                var c = a.edge, d = b.edge;
                if (!c || !d || c.region.r == d.region.r)
                    return null;
                var e = c.a * d.b - c.b * d.a;
                if (Math.abs(e) < 1e-10)
                    return null;
                var f = (c.c * d.b - d.c * c.b) / e, g = (d.c * c.a - c.c * d.a) / e, h = c.region.r, i = d.region.r, j, k;
                h.y < i.y || h.y == i.y && h.x < i.x ? (j = a, k = c) : (j = b, k = d);
                var l = f >= k.region.r.x;
                return l && j.side === "l" || !l && j.side === "r" ? null : {x: f,y: g}
            },rightOf: function(a, b) {
                var c = a.edge, d = c.region.r, e = b.x > d.x;
                if (e && a.side === "l")
                    return 1;
                if (!e && a.side === "r")
                    return 0;
                if (c.a === 1) {
                    var f = b.y - d.y, g = b.x - d.x, h = 0, i = 0;
                    !e && c.b < 0 || e && c.b >= 0 ? i = h = f >= c.b * g : (i = b.x + b.y * c.b > c.c, c.b < 0 && (i = !i), i || (h = 1));
                    if (!h) {
                        var j = d.x - c.region.l.x;
                        i = c.b * (g * g - f * f) < j * f * (1 + 2 * g / j + c.b * c.b), c.b < 0 && (i = !i)
                    }
                } else {
                    var k = c.c - c.a * b.x, l = b.y - k, m = b.x - d.x, n = k - d.y;
                    i = l * l > m * m + n * n
                }
                return a.side === "l" ? i : !i
            },endPoint: function(a, c, d) {
                a.ep[c] = d;
                if (!a.ep[Ge[c]])
                    return;
                b(a)
            },distance: function(a, b) {
                var c = a.x - b.x, d = a.y - b.y;
                return Math.sqrt(c * c + d * d)
            }}, f = {list: [],insert: function(a, b, c) {
                a.vertex = b, a.ystar = b.y + c;
                for (var d = 0, e = f.list, g = e.length; d < g; d++) {
                    var h = e[d];
                    if (a.ystar > h.ystar || a.ystar == h.ystar && b.x > h.vertex.x)
                        continue;
                    break
                }
                e.splice(d, 0, a)
            },del: function(a) {
                for (var b = 0, c = f.list, d = c.length; b < d && c[b] != a; ++b)
                    ;
                c.splice(b, 1)
            },empty: function() {
                return f.list.length === 0
            },nextEvent: function(a) {
                for (var b = 0, c = f.list, d = c.length; b < d; ++b)
                    if (c[b] == a)
                        return c[b + 1];
                return null
            },min: function() {
                var a = f.list[0];
                return {x: a.vertex.x,y: a.ystar}
            },extractMin: function() {
                return f.list.shift()
            }};
        d.init(), c.bottomSite = c.list.shift();
        var g = c.list.shift(), h, i, j, k, l, m, n, o, p, q, r, s, t;
        for (; ; ) {
            f.empty() || (h = f.min());
            if (g && (f.empty() || g.y < h.y || g.y == h.y && g.x < h.x))
                i = d.leftBound(g), j = d.right(i), n = d.rightRegion(i), s = e.bisect(n, g), m = d.createHalfEdge(s, "l"), d.insert(i, m), q = e.intersect(i, m), q && (f.del(i), f.insert(i, q, e.distance(q, g))), i = m, m = d.createHalfEdge(s, "r"), d.insert(i, m), q = e.intersect(m, j), q && f.insert(m, q, e.distance(q, g)), g = c.list.shift();
            else {
                if (!!f.empty())
                    break;
                i = f.extractMin(), k = d.left(i), j = d.right(i), l = d.right(j), n = d.leftRegion(i), o = d.rightRegion(j), r = i.vertex, e.endPoint(i.edge, i.side, r), e.endPoint(j.edge, j.side, r), d.del(i), f.del(j), d.del(j), t = "l", n.y > o.y && (p = n, n = o, o = p, t = "r"), s = e.bisect(n, o), m = d.createHalfEdge(s, t), d.insert(k, m), e.endPoint(s, Ge[t], r), q = e.intersect(k, m), q && (f.del(k), f.insert(k, q, e.distance(q, n))), q = e.intersect(m, l), q && f.insert(m, q, e.distance(q, n))
            }
        }
        for (i = d.right(d.leftEnd); i != d.rightEnd; i = d.right(i))
            b(i.edge)
    }
    function Ie(a) {
        return a.x
    }
    function Je(a) {
        return a.y
    }
    function Ke() {
        return {leaf: !0,nodes: [],point: null,x: null,y: null}
    }
    function Le(a, b, c, d, e, f) {
        if (!a(b, c, d, e, f)) {
            var g = (c + e) * .5, h = (d + f) * .5, i = b.nodes;
            i[0] && Le(a, i[0], c, d, g, h), i[1] && Le(a, i[1], g, d, e, h), i[2] && Le(a, i[2], c, h, g, f), i[3] && Le(a, i[3], g, h, e, f)
        }
    }
    function Me(b, c) {
        b = a.rgb(b), c = a.rgb(c);
        var d = b.r, e = b.g, f = b.b, g = c.r - d, h = c.g - e, i = c.b - f;
        return function(a) {
            return "#" + Rb(Math.round(d + g * a)) + Rb(Math.round(e + h * a)) + Rb(Math.round(f + i * a))
        }
    }
    function Ne(a) {
        var b = [a.a, a.b], c = [a.c, a.d], d = Pe(b), e = Oe(b, c), f = Pe(Qe(c, b, -e)) || 0;
        b[0] * c[1] < c[0] * b[1] && (b[0] *= -1, b[1] *= -1, d *= -1, e *= -1), this.rotate = (d ? Math.atan2(b[1], b[0]) : Math.atan2(-c[0], c[1])) * rb, this.translate = [a.e, a.f], this.scale = [d, f], this.skew = f ? Math.atan2(e, f) * rb : 0
    }
    function Oe(a, b) {
        return a[0] * b[0] + a[1] * b[1]
    }
    function Pe(a) {
        var b = Math.sqrt(Oe(a, a));
        return b && (a[0] /= b, a[1] /= b), b
    }
    function Qe(a, b, c) {
        return a[0] += c * b[0], a[1] += c * b[1], a
    }
    function Se(a, b) {
        return b -= a = +a, function(c) {
            return a + b * c
        }
    }
    function Te(b, c) {
        var d = [], e = [], f, g = a.transform(b), h = a.transform(c), i = g.translate, j = h.translate, k = g.rotate, l = h.rotate, m = g.skew, n = h.skew, o = g.scale, p = h.scale;
        return i[0] != j[0] || i[1] != j[1] ? (d.push("translate(", null, ",", null, ")"), e.push({i: 1,x: Se(i[0], j[0])}, {i: 3,x: Se(i[1], j[1])})) : j[0] || j[1] ? d.push("translate(" + j + ")") : d.push(""), k != l ? (k - l > 180 ? l += 360 : l - k > 180 && (k += 360), e.push({i: d.push(d.pop() + "rotate(", null, ")") - 2,x: Se(k, l)})) : l && d.push(d.pop() + "rotate(" + l + ")"), m != n ? e.push({i: d.push(d.pop() + "skewX(", null, ")") - 2,x: Se(m, n)}) : n && d.push(d.pop() + "skewX(" + n + ")"), o[0] != p[0] || o[1] != p[1] ? (f = d.push(d.pop() + "scale(", null, ",", null, ")"), e.push({i: f - 4,x: Se(o[0], p[0])}, {i: f - 2,x: Se(o[1], p[1])})) : (p[0] != 1 || p[1] != 1) && d.push(d.pop() + "scale(" + p + ")"), f = e.length, function(a) {
            var b = -1, c;
            while (++b < f)
                d[(c = e[b]).i] = c.x(a);
            return d.join("")
        }
    }
    function Ue(a, b) {
        var c = {}, d = {}, e;
        for (e in a)
            e in b ? c[e] = Ye(e)(a[e], b[e]) : d[e] = a[e];
        for (e in b)
            e in a || (d[e] = b[e]);
        return function(a) {
            for (e in c)
                d[e] = c[e](a);
            return d
        }
    }
    function Ve(a, b) {
        var c, d, e, f = 0, g = 0, h = [], i = [], j, k;
        a += "", b += "", We.lastIndex = 0;
        for (d = 0; c = We.exec(b); ++d)
            c.index && h.push(b.substring(f, g = c.index)), i.push({i: h.length,x: c[0]}), h.push(null), f = We.lastIndex;
        f < b.length && h.push(b.substring(f));
        for (d = 0, j = i.length; (c = We.exec(a)) && d < j; ++d) {
            k = i[d];
            if (k.x == c[0]) {
                if (k.i)
                    if (h[k.i + 1] == null) {
                        h[k.i - 1] += k.x, h.splice(k.i, 1);
                        for (e = d + 1; e < j; ++e)
                            i[e].i--
                    } else {
                        h[k.i - 1] += k.x + h[k.i + 1], h.splice(k.i, 2);
                        for (e = d + 1; e < j; ++e)
                            i[e].i -= 2
                    }
                else if (h[k.i + 1] == null)
                    h[k.i] = k.x;
                else {
                    h[k.i] = k.x + h[k.i + 1], h.splice(k.i + 1, 1);
                    for (e = d + 1; e < j; ++e)
                        i[e].i--
                }
                i.splice(d, 1), j--, d--
            } else
                k.x = Se(parseFloat(c[0]), parseFloat(k.x))
        }
        while (d < j)
            k = i.pop(), h[k.i + 1] == null ? h[k.i] = k.x : (h[k.i] = k.x + h[k.i + 1], h.splice(k.i + 1, 1)), j--;
        return h.length === 1 ? h[0] == null ? i[0].x : function() {
            return b
        } : function(a) {
            for (d = 0; d < j; ++d)
                h[(k = i[d]).i] = k.x(a);
            return h.join("")
        }
    }
    function Xe(b, c) {
        var d = a.interpolators.length, e;
        while (--d >= 0 && !(e = a.interpolators[d](b, c)))
            ;
        return e
    }
    function Ye(a) {
        return a == "transform" ? Te : Xe
    }
    function Ze(a, b) {
        var c = [], d = [], e = a.length, f = b.length, g = Math.min(a.length, b.length), h;
        for (h = 0; h < g; ++h)
            c.push(Xe(a[h], b[h]));
        for (; h < e; ++h)
            d[h] = a[h];
        for (; h < f; ++h)
            d[h] = b[h];
        return function(a) {
            for (h = 0; h < g; ++h)
                d[h] = c[h](a);
            return d
        }
    }
    function bf(a) {
        return function(b) {
            return b <= 0 ? 0 : b >= 1 ? 1 : a(b)
        }
    }
    function cf(a) {
        return function(b) {
            return 1 - a(1 - b)
        }
    }
    function df(a) {
        return function(b) {
            return .5 * (b < .5 ? a(2 * b) : 2 - a(2 - 2 * b))
        }
    }
    function ef(a) {
        return a * a
    }
    function ff(a) {
        return a * a * a
    }
    function gf(a) {
        if (a <= 0)
            return 0;
        if (a >= 1)
            return 1;
        var b = a * a, c = b * a;
        return 4 * (a < .5 ? c : 3 * (a - b) + c - .75)
    }
    function hf(a) {
        return function(b) {
            return Math.pow(b, a)
        }
    }
    function jf(a) {
        return 1 - Math.cos(a * ob / 2)
    }
    function kf(a) {
        return Math.pow(2, 10 * (a - 1))
    }
    function lf(a) {
        return 1 - Math.sqrt(1 - a * a)
    }
    function mf(a, b) {
        var c;
        return arguments.length < 2 && (b = .45), arguments.length ? c = b / (2 * ob) * Math.asin(1 / a) : (a = 1, c = b / 4), function(d) {
            return 1 + a * Math.pow(2, 10 * -d) * Math.sin((d - c) * 2 * ob / b)
        }
    }
    function nf(a) {
        return a || (a = 1.70158), function(b) {
            return b * b * ((a + 1) * b - a)
        }
    }
    function of(a) {
        return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
    }
    function pf(b, c) {
        b = a.hcl(b), c = a.hcl(c);
        var d = b.h, e = b.c, f = b.l, g = c.h - d, h = c.c - e, i = c.l - f;
        return g > 180 ? g -= 360 : g < -180 && (g += 360), function(a) {
            return Bb(d + g * a, e + h * a, f + i * a) + ""
        }
    }
    function qf(b, c) {
        b = a.hsl(b), c = a.hsl(c);
        var d = b.h, e = b.s, f = b.l, g = c.h - d, h = c.s - e, i = c.l - f;
        return g > 180 ? g -= 360 : g < -180 && (g += 360), function(a) {
            return nb(d + g * a, e + h * a, f + i * a) + ""
        }
    }
    function rf(b, c) {
        b = a.lab(b), c = a.lab(c);
        var d = b.l, e = b.a, f = b.b, g = c.l - d, h = c.a - e, i = c.b - f;
        return function(a) {
            return Jb(d + g * a, e + h * a, f + i * a) + ""
        }
    }
    function sf(a, b) {
        return b -= a, function(c) {
            return Math.round(a + b * c)
        }
    }
    function tf(a, b) {
        return b = b - (a = +a) ? 1 / (b - a) : 0, function(c) {
            return (c - a) * b
        }
    }
    function uf(a, b) {
        return b = b - (a = +a) ? 1 / (b - a) : 0, function(c) {
            return Math.max(0, Math.min(1, (c - a) * b))
        }
    }
    function vf(a) {
        var b = a.source, c = a.target, d = xf(b, c), e = [b];
        while (b !== d)
            b = b.parent, e.push(b);
        var f = e.length;
        while (c !== d)
            e.splice(f, 0, c), c = c.parent;
        return e
    }
    function wf(a) {
        var b = [], c = a.parent;
        while (c != null)
            b.push(a), a = c, c = c.parent;
        return b.push(a), b
    }
    function xf(a, b) {
        if (a === b)
            return a;
        var c = wf(a), d = wf(b), e = c.pop(), f = d.pop(), g = null;
        while (e === f)
            g = e, e = c.pop(), f = d.pop();
        return g
    }
    function yf(a) {
        a.fixed |= 2
    }
    function zf(a) {
        a.fixed &= -7
    }
    function Af(a) {
        a.fixed |= 4, a.px = a.x, a.py = a.y
    }
    function Bf(a) {
        a.fixed &= -5
    }
    function Cf(a, b, c) {
        var d = 0, e = 0;
        a.charge = 0;
        if (!a.leaf) {
            var f = a.nodes, g = f.length, h = -1, i;
            while (++h < g) {
                i = f[h];
                if (i == null)
                    continue;
                Cf(i, b, c), a.charge += i.charge, d += i.charge * i.cx, e += i.charge * i.cy
            }
        }
        if (a.point) {
            a.leaf || (a.point.x += Math.random() - .5, a.point.y += Math.random() - .5);
            var j = b * c[a.point.index];
            a.charge += a.pointCharge = j, d += j * a.point.x, e += j * a.point.y
        }
        a.cx = d / a.charge, a.cy = e / a.charge
    }
    function Ff(b, c) {
        return a.rebind(b, c, "sort", "children", "value"), b.nodes = b, b.links = Jf, b
    }
    function Gf(a) {
        return a.children
    }
    function Hf(a) {
        return a.value
    }
    function If(a, b) {
        return b.value - a.value
    }
    function Jf(b) {
        return a.merge(b.map(function(a) {
            return (a.children || []).map(function(b) {
                return {source: a,target: b}
            })
        }))
    }
    function Lf(a) {
        return a.x
    }
    function Mf(a) {
        return a.y
    }
    function Nf(a, b, c) {
        a.y0 = b, a.y = c
    }
    function Qf(b) {
        return a.range(b.length)
    }
    function Rf(a) {
        var b = -1, c = a[0].length, d = [];
        while (++b < c)
            d[b] = 0;
        return d
    }
    function Sf(a) {
        var b = 1, c = 0, d = a[0][1], e, f = a.length;
        for (; b < f; ++b)
            (e = a[b][1]) > d && (c = b, d = e);
        return c
    }
    function Tf(a) {
        return a.reduce(Uf, 0)
    }
    function Uf(a, b) {
        return a + b[1]
    }
    function Vf(a, b) {
        return Wf(a, Math.ceil(Math.log(b.length) / Math.LN2 + 1))
    }
    function Wf(a, b) {
        var c = -1, d = +a[0], e = (a[1] - d) / b, f = [];
        while (++c <= b)
            f[c] = e * c + d;
        return f
    }
    function Xf(b) {
        return [a.min(b), a.max(b)]
    }
    function Yf(a, b) {
        return a.parent == b.parent ? 1 : 2
    }
    function Zf(a) {
        var b = a.children;
        return b && b.length ? b[0] : a._tree.thread
    }
    function $f(a) {
        var b = a.children, c;
        return b && (c = b.length) ? b[c - 1] : a._tree.thread
    }
    function _f(a, b) {
        var c = a.children;
        if (c && (e = c.length)) {
            var d, e, f = -1;
            while (++f < e)
                b(d = _f(c[f], b), a) > 0 && (a = d)
        }
        return a
    }
    function ag(a, b) {
        return a.x - b.x
    }
    function bg(a, b) {
        return b.x - a.x
    }
    function cg(a, b) {
        return a.depth - b.depth
    }
    function dg(a, b) {
        function c(a, d) {
            var e = a.children;
            if (e && (i = e.length)) {
                var f, g = null, h = -1, i;
                while (++h < i)
                    f = e[h], c(f, g), g = f
            }
            b(a, d)
        }
        c(a, null)
    }
    function eg(a) {
        var b = 0, c = 0, d = a.children, e = d.length, f;
        while (--e >= 0)
            f = d[e]._tree, f.prelim += b, f.mod += b, b += f.shift + (c += f.change)
    }
    function fg(a, b, c) {
        a = a._tree, b = b._tree;
        var d = c / (b.number - a.number);
        a.change += d, b.change -= d, b.shift += c, b.prelim += c, b.mod += c
    }
    function gg(a, b, c) {
        return a._tree.ancestor.parent == b.parent ? a._tree.ancestor : c
    }
    function hg(a, b) {
        return a.value - b.value
    }
    function ig(a, b) {
        var c = a._pack_next;
        a._pack_next = b, b._pack_prev = a, b._pack_next = c, c._pack_prev = b
    }
    function jg(a, b) {
        a._pack_next = b, b._pack_prev = a
    }
    function kg(a, b) {
        var c = b.x - a.x, d = b.y - a.y, e = a.r + b.r;
        return e * e - c * c - d * d > .001
    }
    function lg(a) {
        function n(a) {
            c = Math.min(a.x - a.r, c), d = Math.max(a.x + a.r, d), e = Math.min(a.y - a.r, e), f = Math.max(a.y + a.r, f)
        }
        if (!(b = a.children) || !(m = b.length))
            return;
        var b, c = Infinity, d = -Infinity, e = Infinity, f = -Infinity, g, h, i, j, k, l, m;
        b.forEach(mg), g = b[0], g.x = -g.r, g.y = 0, n(g);
        if (m > 1) {
            h = b[1], h.x = h.r, h.y = 0, n(h);
            if (m > 2) {
                i = b[2], pg(g, h, i), n(i), ig(g, i), g._pack_prev = i, ig(i, h), h = g._pack_next;
                for (j = 3; j < m; j++) {
                    pg(g, h, i = b[j]);
                    var o = 0, p = 1, q = 1;
                    for (k = h._pack_next; k !== h; k = k._pack_next, p++)
                        if (kg(k, i)) {
                            o = 1;
                            break
                        }
                    if (o == 1)
                        for (l = g._pack_prev; l !== k._pack_prev; l = l._pack_prev, q++)
                            if (kg(l, i))
                                break;
                    o ? (p < q || p == q && h.r < g.r ? jg(g, h = k) : jg(g = l, h), j--) : (ig(g, i), h = i, n(i))
                }
            }
        }
        var r = (c + d) / 2, s = (e + f) / 2, t = 0;
        for (j = 0; j < m; j++)
            i = b[j], i.x -= r, i.y -= s, t = Math.max(t, i.r + Math.sqrt(i.x * i.x + i.y * i.y));
        a.r = t, b.forEach(ng)
    }
    function mg(a) {
        a._pack_next = a._pack_prev = a
    }
    function ng(a) {
        delete a._pack_next, delete a._pack_prev
    }
    function og(a, b, c, d) {
        var e = a.children;
        a.x = b += d * a.x, a.y = c += d * a.y, a.r *= d;
        if (e) {
            var f = -1, g = e.length;
            while (++f < g)
                og(e[f], b, c, d)
        }
    }
    function pg(a, b, c) {
        var d = a.r + c.r, e = b.x - a.x, f = b.y - a.y;
        if (d && (e || f)) {
            var g = b.r + c.r, h = e * e + f * f;
            g *= g, d *= d;
            var i = .5 + (d - g) / (2 * h), j = Math.sqrt(Math.max(0, 2 * g * (d + h) - (d -= h) * d - g * g)) / (2 * h);
            c.x = a.x + i * e + j * f, c.y = a.y + i * f - j * e
        } else
            c.x = a.x + d, c.y = a.y
    }
    function qg(b) {
        return 1 + a.max(b, function(a) {
            return a.y
        })
    }
    function rg(a) {
        return a.reduce(function(a, b) {
            return a + b.x
        }, 0) / a.length
    }
    function sg(a) {
        var b = a.children;
        return b && b.length ? sg(b[0]) : a
    }
    function tg(a) {
        var b = a.children, c;
        return b && (c = b.length) ? tg(b[c - 1]) : a
    }
    function ug(a) {
        return {x: a.x,y: a.y,dx: a.dx,dy: a.dy}
    }
    function vg(a, b) {
        var c = a.x + b[3], d = a.y + b[0], e = a.dx - b[1] - b[3], f = a.dy - b[0] - b[2];
        return e < 0 && (c += e / 2, e = 0), f < 0 && (d += f / 2, f = 0), {x: c,y: d,dx: e,dy: f}
    }
    function wg(a) {
        var b = a[0], c = a[a.length - 1];
        return b < c ? [b, c] : [c, b]
    }
    function xg(a) {
        return a.rangeExtent ? a.rangeExtent() : wg(a.range())
    }
    function yg(a, b, c, d) {
        var e = c(a[0], a[1]), f = d(b[0], b[1]);
        return function(a) {
            return f(e(a))
        }
    }
    function zg(a, b) {
        var c = 0, d = a.length - 1, e = a[c], f = a[d], g;
        f < e && (g = c, c = d, d = g, g = e, e = f, f = g);
        if (b = b(f - e))
            a[c] = b.floor(e), a[d] = b.ceil(f);
        return a
    }
    function Ag(b, c, d, e) {
        var f = [], g = [], h = 0, i = Math.min(b.length, c.length) - 1;
        b[i] < b[0] && (b = b.slice().reverse(), c = c.slice().reverse());
        while (++h <= i)
            f.push(d(b[h - 1], b[h])), g.push(e(c[h - 1], c[h]));
        return function(c) {
            var d = a.bisect(b, c, 1, i) - 1;
            return g[d](f[d](c))
        }
    }
    function Bg(a, b, c, d) {
        function g() {
            var g = Math.min(a.length, b.length) > 2 ? Ag : yg, i = d ? uf : tf;
            return e = g(a, b, i, c), f = g(b, a, i, Xe), h
        }
        function h(a) {
            return e(a)
        }
        var e, f;
        return h.invert = function(a) {
            return f(a)
        }, h.domain = function(b) {
            return arguments.length ? (a = b.map(Number), g()) : a
        }, h.range = function(a) {
            return arguments.length ? (b = a, g()) : b
        }, h.rangeRound = function(a) {
            return h.range(a).interpolate(sf)
        }, h.clamp = function(a) {
            return arguments.length ? (d = a, g()) : d
        }, h.interpolate = function(a) {
            return arguments.length ? (c = a, g()) : c
        }, h.ticks = function(b) {
            return Fg(a, b)
        }, h.tickFormat = function(b, c) {
            return Gg(a, b, c)
        }, h.nice = function() {
            return zg(a, Dg), g()
        }, h.copy = function() {
            return Bg(a, b, c, d)
        }, g()
    }
    function Cg(b, c) {
        return a.rebind(b, c, "range", "rangeRound", "interpolate", "clamp")
    }
    function Dg(a) {
        return a = Math.pow(10, Math.round(Math.log(a) / Math.LN10) - 1), a && {floor: function(b) {
                return Math.floor(b / a) * a
            },ceil: function(b) {
                return Math.ceil(b / a) * a
            }}
    }
    function Eg(a, b) {
        var c = wg(a), d = c[1] - c[0], e = Math.pow(10, Math.floor(Math.log(d / b) / Math.LN10)), f = b / d * e;
        return f <= .15 ? e *= 10 : f <= .35 ? e *= 5 : f <= .75 && (e *= 2), c[0] = Math.ceil(c[0] / e) * e, c[1] = Math.floor(c[1] / e) * e + e * .5, c[2] = e, c
    }
    function Fg(b, c) {
        return a.range.apply(a, Eg(b, c))
    }
    function Gg(b, c, d) {
        var e = -Math.floor(Math.log(Eg(b, c)[2]) / Math.LN10 + .01);
        return a.format(d ? d.replace(nc, function(a, b, c, d, f, g, h, i, j, k) {
            return [b, c, d, f, g, h, i, j || "." + (e - (k === "%") * 2), k].join("")
        }) : ",." + e + "f")
    }
    function Hg(a, b, c, d) {
        function e(b) {
            return a(c(b))
        }
        return e.invert = function(b) {
            return d(a.invert(b))
        }, e.domain = function(b) {
            return arguments.length ? (b[0] < 0 ? (c = Lg, d = Mg) : (c = Jg, d = Kg), a.domain(b.map(c)), e) : a.domain().map(d)
        }, e.base = function(a) {
            return arguments.length ? (b = +a, e) : b
        }, e.nice = function() {
            return a.domain(zg(a.domain(), Ng(b))), e
        }, e.ticks = function() {
            var e = wg(a.domain()), f = [];
            if (e.every(isFinite)) {
                var g = Math.log(b), h = Math.floor(e[0] / g), i = Math.ceil(e[1] / g), j = d(e[0]), k = d(e[1]), l = b % 1 ? 2 : b;
                if (c === Lg) {
                    f.push(-Math.pow(b, -h));
                    for (; h++ < i; )
                        for (var m = l - 1; m > 0; m--)
                            f.push(-Math.pow(b, -h) * m)
                } else {
                    for (; h < i; h++)
                        for (var m = 1; m < l; m++)
                            f.push(Math.pow(b, h) * m);
                    f.push(Math.pow(b, h))
                }
                for (h = 0; f[h] < j; h++)
                    ;
                for (i = f.length; f[i - 1] > k; i--)
                    ;
                f = f.slice(h, i)
            }
            return f
        }, e.tickFormat = function(a, f) {
            arguments.length < 2 && (f = Ig);
            if (!arguments.length)
                return f;
            var g = Math.log(b), h = Math.max(.1, a / e.ticks().length), i = c === Lg ? (j = -1e-12, Math.floor) : (j = 1e-12, Math.ceil), j;
            return function(a) {
                return a / d(g * i(c(a) / g + j)) <= h ? f(a) : ""
            }
        }, e.copy = function() {
            return Hg(a.copy(), b, c, d)
        }, Cg(e, a)
    }
    function Jg(a) {
        return Math.log(a < 0 ? 0 : a)
    }
    function Kg(a) {
        return Math.exp(a)
    }
    function Lg(a) {
        return -Math.log(a > 0 ? 0 : -a)
    }
    function Mg(a) {
        return -Math.exp(-a)
    }
    function Ng(a) {
        a = Math.log(a);
        var b = {floor: function(b) {
                return Math.floor(b / a) * a
            },ceil: function(b) {
                return Math.ceil(b / a) * a
            }};
        return function() {
            return b
        }
    }
    function Og(a, b) {
        function e(b) {
            return a(c(b))
        }
        var c = Pg(b), d = Pg(1 / b);
        return e.invert = function(b) {
            return d(a.invert(b))
        }, e.domain = function(b) {
            return arguments.length ? (a.domain(b.map(c)), e) : a.domain().map(d)
        }, e.ticks = function(a) {
            return Fg(e.domain(), a)
        }, e.tickFormat = function(a, b) {
            return Gg(e.domain(), a, b)
        }, e.nice = function() {
            return e.domain(zg(e.domain(), Dg))
        }, e.exponent = function(a) {
            if (!arguments.length)
                return b;
            var f = e.domain();
            return c = Pg(b = a), d = Pg(1 / b), e.domain(f)
        }, e.copy = function() {
            return Og(a.copy(), b)
        }, Cg(e, a)
    }
    function Pg(a) {
        return function(b) {
            return b < 0 ? -Math.pow(-b, a) : Math.pow(b, a)
        }
    }
    function Qg(b, c) {
        function g(a) {
            return e[((d.get(a) || d.set(a, b.push(a))) - 1) % e.length]
        }
        function h(c, d) {
            return a.range(b.length).map(function(a) {
                return c + d * a
            })
        }
        var d, e, f;
        return g.domain = function(a) {
            if (!arguments.length)
                return b;
            b = [], d = new m;
            var e = -1, f = a.length, h;
            while (++e < f)
                d.has(h = a[e]) || d.set(h, b.push(h));
            return g[c.t].apply(g, c.a)
        }, g.range = function(a) {
            return arguments.length ? (e = a, f = 0, c = {t: "range",a: arguments}, g) : e
        }, g.rangePoints = function(a, d) {
            arguments.length < 2 && (d = 0);
            var i = a[0], j = a[1], k = (j - i) / (Math.max(1, b.length - 1) + d);
            return e = h(b.length < 2 ? (i + j) / 2 : i + k * d / 2, k), f = 0, c = {t: "rangePoints",a: arguments}, g
        }, g.rangeBands = function(a, d, i) {
            arguments.length < 2 && (d = 0), arguments.length < 3 && (i = d);
            var j = a[1] < a[0], k = a[j - 0], l = a[1 - j], m = (l - k) / (b.length - d + 2 * i);
            return e = h(k + m * i, m), j && e.reverse(), f = m * (1 - d), c = {t: "rangeBands",a: arguments}, g
        }, g.rangeRoundBands = function(a, d, i) {
            arguments.length < 2 && (d = 0), arguments.length < 3 && (i = d);
            var j = a[1] < a[0], k = a[j - 0], l = a[1 - j], m = Math.floor((l - k) / (b.length - d + 2 * i)), n = l - k - (b.length - d) * m;
            return e = h(k + Math.round(n / 2), m), j && e.reverse(), f = Math.round(m * (1 - d)), c = {t: "rangeRoundBands",a: arguments}, g
        }, g.rangeBand = function() {
            return f
        }, g.rangeExtent = function() {
            return wg(c.a[0])
        }, g.copy = function() {
            return Qg(b, c)
        }, g.domain(b)
    }
    function Vg(b, c) {
        function e() {
            var e = 0, g = c.length;
            d = [];
            while (++e < g)
                d[e - 1] = a.quantile(b, e / g);
            return f
        }
        function f(b) {
            return isNaN(b = +b) ? NaN : c[a.bisect(d, b)]
        }
        var d;
        return f.domain = function(c) {
            return arguments.length ? (b = c.filter(function(a) {
                return !isNaN(a)
            }).sort(a.ascending), e()) : b
        }, f.range = function(a) {
            return arguments.length ? (c = a, e()) : c
        }, f.quantiles = function() {
            return d
        }, f.copy = function() {
            return Vg(b, c)
        }, e()
    }
    function Wg(a, b, c) {
        function f(b) {
            return c[Math.max(0, Math.min(e, Math.floor(d * (b - a))))]
        }
        function g() {
            return d = c.length / (b - a), e = c.length - 1, f
        }
        var d, e;
        return f.domain = function(c) {
            return arguments.length ? (a = +c[0], b = +c[c.length - 1], g()) : [a, b]
        }, f.range = function(a) {
            return arguments.length ? (c = a, g()) : c
        }, f.copy = function() {
            return Wg(a, b, c)
        }, g()
    }
    function Xg(b, c) {
        function d(d) {
            return c[a.bisect(b, d)]
        }
        return d.domain = function(a) {
            return arguments.length ? (b = a, d) : b
        }, d.range = function(a) {
            return arguments.length ? (c = a, d) : c
        }, d.copy = function() {
            return Xg(b, c)
        }, d
    }
    function Yg(a) {
        function b(a) {
            return +a
        }
        return b.invert = b, b.domain = b.range = function(c) {
            return arguments.length ? (a = c.map(b), b) : a
        }, b.ticks = function(b) {
            return Fg(a, b)
        }, b.tickFormat = function(b, c) {
            return Gg(a, b, c)
        }, b.copy = function() {
            return Yg(a)
        }, b
    }
    function _g(a) {
        return a.innerRadius
    }
    function ah(a) {
        return a.outerRadius
    }
    function bh(a) {
        return a.startAngle
    }
    function ch(a) {
        return a.endAngle
    }
    function dh(a) {
        var b, c = -1, d = a.length, e, f;
        while (++c < d)
            b = a[c], e = b[0], f = b[1] + Zg, b[0] = e * Math.cos(f), b[1] = e * Math.sin(f);
        return a
    }
    function eh(a) {
        function l(h) {
            function x() {
                l.push("M", g(a(n), k), j, i(a(m.reverse()), k), "Z")
            }
            var l = [], m = [], n = [], o = -1, p = h.length, q, r = Yb(b), s = Yb(d), t = b === c ? function() {
                return v
            } : Yb(c), u = d === e ? function() {
                return w
            } : Yb(e), v, w;
            while (++o < p)
                f.call(this, q = h[o], o) ? (m.push([v = +r.call(this, q, o), w = +s.call(this, q, o)]), n.push([+t.call(this, q, o), +u.call(this, q, o)])) : m.length && (x(), m = [], n = []);
            return m.length && x(), l.length ? l.join("") : null
        }
        var b = ee, c = ee, d = 0, e = fe, f = Uc, g = he, h = g.key, i = g, j = "L", k = .7;
        return l.x = function(a) {
            return arguments.length ? (b = c = a, l) : c
        }, l.x0 = function(a) {
            return arguments.length ? (b = a, l) : b
        }, l.x1 = function(a) {
            return arguments.length ? (c = a, l) : c
        }, l.y = function(a) {
            return arguments.length ? (d = e = a, l) : e
        }, l.y0 = function(a) {
            return arguments.length ? (d = a, l) : d
        }, l.y1 = function(a) {
            return arguments.length ? (e = a, l) : e
        }, l.defined = function(a) {
            return arguments.length ? (f = a, l) : f
        }, l.interpolate = function(a) {
            return arguments.length ? (typeof a == "function" ? h = g = a : h = (g = ge.get(a) || he).key, i = g.reverse || g, j = g.closed ? "M" : "L", l) : h
        }, l.tension = function(a) {
            return arguments.length ? (k = a, l) : k
        }, l
    }
    function fh(a) {
        return a.radius
    }
    function gh(a) {
        return [a.x, a.y]
    }
    function hh(a) {
        return function() {
            var b = a.apply(this, arguments), c = b[0], d = b[1] + Zg;
            return [c * Math.cos(d), c * Math.sin(d)]
        }
    }
    function ih() {
        return 64
    }
    function jh() {
        return "circle"
    }
    function kh(a) {
        var b = Math.sqrt(a / ob);
        return "M0," + b + "A" + b + "," + b + " 0 1,1 0," + -b + "A" + b + "," + b + " 0 1,1 0," + b + "Z"
    }
    function oh(a, b) {
        return D(a, ph), a.id = b, a
    }
    function th(a, b, c, d) {
        var e = a.id;
        return cb(a, typeof c == "function" ? function(a, f, g) {
            a.__transition__[e].tween.set(b, d(c.call(a, a.__data__, f, g)))
        } : (c = d(c), function(a) {
            a.__transition__[e].tween.set(b, c)
        }))
    }
    function uh(a) {
        return a == null && (a = ""), function() {
            this.textContent = a
        }
    }
    function vh(b, c, d, e) {
        var f = b.__transition__ || (b.__transition__ = {active: 0,count: 0}), g = f[d];
        if (!g) {
            var h = e.time;
            return g = f[d] = {tween: new m,event: a.dispatch("start", "end"),time: h,ease: e.ease,delay: e.delay,duration: e.duration}, ++f.count, a.timer(function(e) {
                function o(e) {
                    return f.active > d ? q() : (f.active = d, k.start.call(b, i, c), g.tween.forEach(function(a, d) {
                        (d = d.call(b, i, c)) && n.push(d)
                    }), p(e) || a.timer(p, 0, h), 1)
                }
                function p(a) {
                    if (f.active !== d)
                        return q();
                    var e = (a - l) / m, g = j(e), h = n.length;
                    while (h > 0)
                        n[--h].call(b, g);
                    if (e >= 1)
                        return q(), k.end.call(b, i, c), 1
                }
                function q() {
                    return --f.count ? delete f[d] : delete b.__transition__, 1
                }
                var i = b.__data__, j = g.ease, k = g.event, l = g.delay, m = g.duration, n = [];
                return l <= e ? o(e) : a.timer(o, l, h), 1
            }, 0, h), g
        }
    }
    function yh(a, b) {
        a.attr("transform", function(a) {
            return "translate(" + b(a) + ",0)"
        })
    }
    function zh(a, b) {
        a.attr("transform", function(a) {
            return "translate(0," + b(a) + ")"
        })
    }
    function Ah(a, b, c) {
        e = [];
        if (c && b.length > 1) {
            var d = wg(a.domain()), e, f = -1, g = b.length, h = (b[1] - b[0]) / ++c, i, j;
            while (++f < g)
                for (i = c; --i > 0; )
                    (j = +b[f] - i * h) >= d[0] && e.push(j);
            for (--f, i = 0; ++i < c && (j = +b[f] + i * h) < d[1]; )
                e.push(j)
        }
        return e
    }
    function Fh() {
        this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
    }
    function Oh(a, b, c) {
        function d(b) {
            var c = a(b), d = f(c, 1);
            return b - c < d - b ? c : d
        }
        function e(c) {
            return b(c = a(new Dh(c - 1)), 1), c
        }
        function f(a, c) {
            return b(a = new Dh(+a), c), a
        }
        function g(a, d, f) {
            var g = e(a), h = [];
            if (f > 1)
                while (g < d)
                    c(g) % f || h.push(new Date(+g)), b(g, 1);
            else
                while (g < d)
                    h.push(new Date(+g)), b(g, 1);
            return h
        }
        function h(a, b, c) {
            try {
                Dh = Fh;
                var d = new Fh;
                return d._ = a, g(d, b, c)
            }finally {
                Dh = Date
            }
        }
        a.floor = a, a.round = d, a.ceil = e, a.offset = f, a.range = g;
        var i = a.utc = Ph(a);
        return i.floor = i, i.round = Ph(d), i.ceil = Ph(e), i.offset = Ph(f), i.range = h, a
    }
    function Ph(a) {
        return function(b, c) {
            try {
                Dh = Fh;
                var d = new Fh;
                return d._ = b, a(d, c)._
            }finally {
                Dh = Date
            }
        }
    }
    function Qh(a, b, c, d) {
        var e, f, g = 0, h = b.length, i = c.length;
        while (g < h) {
            if (d >= i)
                return -1;
            e = b.charCodeAt(g++);
            if (e === 37) {
                f = ai[b.charAt(g++)];
                if (!f || (d = f(a, c, d)) < 0)
                    return -1
            } else if (e != c.charCodeAt(d++))
                return -1
        }
        return d
    }
    function Rh(b) {
        return new RegExp("^(?:" + b.map(a.requote).join("|") + ")", "i")
    }
    function Sh(a) {
        var b = new m, c = -1, d = a.length;
        while (++c < d)
            b.set(a[c].toLowerCase(), c);
        return b
    }
    function Th(a, b, c) {
        a += "";
        var d = a.length;
        return d < c ? (new Array(c - d + 1)).join(b) + a : a
    }
    function bi(a, b, c) {
        Vh.lastIndex = 0;
        var d = Vh.exec(b.substring(c));
        return d ? c += d[0].length : -1
    }
    function ci(a, b, c) {
        Uh.lastIndex = 0;
        var d = Uh.exec(b.substring(c));
        return d ? c += d[0].length : -1
    }
    function di(a, b, c) {
        Yh.lastIndex = 0;
        var d = Yh.exec(b.substring(c));
        return d ? (a.m = Zh.get(d[0].toLowerCase()), c += d[0].length) : -1
    }
    function ei(a, b, c) {
        Wh.lastIndex = 0;
        var d = Wh.exec(b.substring(c));
        return d ? (a.m = Xh.get(d[0].toLowerCase()), c += d[0].length) : -1
    }
    function fi(a, b, c) {
        return Qh(a, _h.c.toString(), b, c)
    }
    function gi(a, b, c) {
        return Qh(a, _h.x.toString(), b, c)
    }
    function hi(a, b, c) {
        return Qh(a, _h.X.toString(), b, c)
    }
    function ii(a, b, c) {
        ri.lastIndex = 0;
        var d = ri.exec(b.substring(c, c + 4));
        return d ? (a.y = +d[0], c += d[0].length) : -1
    }
    function ji(a, b, c) {
        ri.lastIndex = 0;
        var d = ri.exec(b.substring(c, c + 2));
        return d ? (a.y = ki(+d[0]), c += d[0].length) : -1
    }
    function ki(a) {
        return a + (a > 68 ? 1900 : 2e3)
    }
    function li(a, b, c) {
        ri.lastIndex = 0;
        var d = ri.exec(b.substring(c, c + 2));
        return d ? (a.m = d[0] - 1, c += d[0].length) : -1
    }
    function mi(a, b, c) {
        ri.lastIndex = 0;
        var d = ri.exec(b.substring(c, c + 2));
        return d ? (a.d = +d[0], c += d[0].length) : -1
    }
    function ni(a, b, c) {
        ri.lastIndex = 0;
        var d = ri.exec(b.substring(c, c + 2));
        return d ? (a.H = +d[0], c += d[0].length) : -1
    }
    function oi(a, b, c) {
        ri.lastIndex = 0;
        var d = ri.exec(b.substring(c, c + 2));
        return d ? (a.M = +d[0], c += d[0].length) : -1
    }
    function pi(a, b, c) {
        ri.lastIndex = 0;
        var d = ri.exec(b.substring(c, c + 2));
        return d ? (a.S = +d[0], c += d[0].length) : -1
    }
    function qi(a, b, c) {
        ri.lastIndex = 0;
        var d = ri.exec(b.substring(c, c + 3));
        return d ? (a.L = +d[0], c += d[0].length) : -1
    }
    function si(a, b, c) {
        var d = ti.get(b.substring(c, c += 2).toLowerCase());
        return d == null ? -1 : (a.p = d, c)
    }
    function ui(a) {
        var b = a.getTimezoneOffset(), c = b > 0 ? "-" : "+", d = ~~(Math.abs(b) / 60), e = Math.abs(b) % 60;
        return c + Th(d, "0", 2) + Th(e, "0", 2)
    }
    function wi(a) {
        return a.toISOString()
    }
    function xi(b, c, d) {
        function e(a) {
            return b(a)
        }
        return e.invert = function(a) {
            return zi(b.invert(a))
        }, e.domain = function(a) {
            return arguments.length ? (b.domain(a), e) : b.domain().map(zi)
        }, e.nice = function(a) {
            return e.domain(zg(e.domain(), function() {
                return a
            }))
        }, e.ticks = function(d, f) {
            var g = yi(e.domain());
            if (typeof d != "function") {
                var h = g[1] - g[0], i = h / d, j = a.bisect(Di, i);
                if (j == Di.length)
                    return c.year(g, d);
                if (!j)
                    return b.ticks(d).map(zi);
                Math.log(i / Di[j - 1]) < Math.log(Di[j] / i) && --j, d = c[j], f = d[1], d = d[0].range
            }
            return d(g[0], new Date(+g[1] + 1), f)
        }, e.tickFormat = function() {
            return d
        }, e.copy = function() {
            return xi(b.copy(), c, d)
        }, a.rebind(e, b, "range", "rangeRound", "interpolate", "clamp")
    }
    function yi(a) {
        var b = a[0], c = a[a.length - 1];
        return b < c ? [b, c] : [c, b]
    }
    function zi(a) {
        return new Date(a)
    }
    function Ai(a) {
        return function(b) {
            var c = a.length - 1, d = a[c];
            while (!d[1](b))
                d = a[--c];
            return d[0](b)
        }
    }
    function Bi(a) {
        var b = new Date(a, 0, 1);
        return b.setFullYear(a), b
    }
    function Ci(a) {
        var b = a.getFullYear(), c = Bi(b), d = Bi(b + 1);
        return b + (a - c) / (d - c)
    }
    function Li(a) {
        var b = new Date(Date.UTC(a, 0, 1));
        return b.setUTCFullYear(a), b
    }
    function Mi(a) {
        var b = a.getUTCFullYear(), c = Li(b), d = Li(b + 1);
        return b + (a - c) / (d - c)
    }
    function Ni(a) {
        return a.responseText
    }
    function Oi(a) {
        return JSON.parse(a.responseText)
    }
    function Pi(a) {
        var b = c.createRange();
        return b.selectNode(c.body), b.createContextualFragment(a.responseText)
    }
    function Qi(a) {
        return a.responseXML
    }
    var a = {version: "3.1.5"};
    Date.now || (Date.now = function() {
        return +(new Date)
    });
    var c = document, d = window;
    try {
        c.createElement("div").style.setProperty("opacity", 0, "")
    } catch (e) {
        var f = d.CSSStyleDeclaration.prototype, g = f.setProperty;
        f.setProperty = function(a, b, c) {
            g.call(this, a, b + "", c)
        }
    }
    a.ascending = function(a, b) {
        return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN
    }, a.descending = function(a, b) {
        return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN
    }, a.min = function(a, b) {
        var c = -1, d = a.length, e, f;
        if (arguments.length === 1) {
            while (++c < d && ((e = a[c]) == null || e != e))
                e = undefined;
            while (++c < d)
                (f = a[c]) != null && e > f && (e = f)
        } else {
            while (++c < d && ((e = b.call(a, a[c], c)) == null || e != e))
                e = undefined;
            while (++c < d)
                (f = b.call(a, a[c], c)) != null && e > f && (e = f)
        }
        return e
    }, a.max = function(a, b) {
        var c = -1, d = a.length, e, f;
        if (arguments.length === 1) {
            while (++c < d && ((e = a[c]) == null || e != e))
                e = undefined;
            while (++c < d)
                (f = a[c]) != null && f > e && (e = f)
        } else {
            while (++c < d && ((e = b.call(a, a[c], c)) == null || e != e))
                e = undefined;
            while (++c < d)
                (f = b.call(a, a[c], c)) != null && f > e && (e = f)
        }
        return e
    }, a.extent = function(a, b) {
        var c = -1, d = a.length, e, f, g;
        if (arguments.length === 1) {
            while (++c < d && ((e = g = a[c]) == null || e != e))
                e = g = undefined;
            while (++c < d)
                (f = a[c]) != null && (e > f && (e = f), g < f && (g = f))
        } else {
            while (++c < d && ((e = g = b.call(a, a[c], c)) == null || e != e))
                e = undefined;
            while (++c < d)
                (f = b.call(a, a[c], c)) != null && (e > f && (e = f), g < f && (g = f))
        }
        return [e, g]
    }, a.sum = function(a, b) {
        var c = 0, d = a.length, e, f = -1;
        if (arguments.length === 1)
            while (++f < d)
                isNaN(e = +a[f]) || (c += e);
        else
            while (++f < d)
                isNaN(e = +b.call(a, a[f], f)) || (c += e);
        return c
    }, a.mean = function(a, b) {
        var c = a.length, d, e = 0, f = -1, g = 0;
        if (arguments.length === 1)
            while (++f < c)
                h(d = a[f]) && (e += (d - e) / ++g);
        else
            while (++f < c)
                h(d = b.call(a, a[f], f)) && (e += (d - e) / ++g);
        return g ? e : undefined
    }, a.quantile = function(a, b) {
        var c = (a.length - 1) * b + 1, d = Math.floor(c), e = +a[d - 1], f = c - d;
        return f ? e + f * (a[d] - e) : e
    }, a.median = function(b, c) {
        return arguments.length > 1 && (b = b.map(c)), b = b.filter(h), b.length ? a.quantile(b.sort(a.ascending), .5) : undefined
    }, a.bisector = function(a) {
        return {left: function(b, c, d, e) {
                arguments.length < 3 && (d = 0), arguments.length < 4 && (e = b.length);
                while (d < e) {
                    var f = d + e >>> 1;
                    a.call(b, b[f], f) < c ? d = f + 1 : e = f
                }
                return d
            },right: function(b, c, d, e) {
                arguments.length < 3 && (d = 0), arguments.length < 4 && (e = b.length);
                while (d < e) {
                    var f = d + e >>> 1;
                    c < a.call(b, b[f], f) ? e = f : d = f + 1
                }
                return d
            }}
    };
    var i = a.bisector(function(a) {
        return a
    });
    a.bisectLeft = i.left, a.bisect = a.bisectRight = i.right, a.shuffle = function(a) {
        var b = a.length, c, d;
        while (b)
            d = Math.random() * b-- | 0, c = a[b], a[b] = a[d], a[d] = c;
        return a
    }, a.permute = function(a, b) {
        var c = [], d = -1, e = b.length;
        while (++d < e)
            c[d] = a[b[d]];
        return c
    }, a.zip = function() {
        if (!(f = arguments.length))
            return [];
        for (var b = -1, c = a.min(arguments, j), d = new Array(c); ++b < c; )
            for (var e = -1, f, g = d[b] = new Array(f); ++e < f; )
                g[e] = arguments[e][b];
        return d
    }, a.transpose = function(b) {
        return a.zip.apply(a, b)
    }, a.keys = function(a) {
        var b = [];
        for (var c in a)
            b.push(c);
        return b
    }, a.values = function(a) {
        var b = [];
        for (var c in a)
            b.push(a[c]);
        return b
    }, a.entries = function(a) {
        var b = [];
        for (var c in a)
            b.push({key: c,value: a[c]});
        return b
    }, a.merge = function(a) {
        return Array.prototype.concat.apply([], a)
    }, a.range = function(a, b, c) {
        arguments.length < 3 && (c = 1, arguments.length < 2 && (b = a, a = 0));
        if ((b - a) / c === Infinity)
            throw new Error("infinite range");
        var d = [], e = k(Math.abs(c)), f = -1, g;
        a *= e, b *= e, c *= e;
        if (c < 0)
            while ((g = a + c * ++f) > b)
                d.push(g / e);
        else
            while ((g = a + c * ++f) < b)
                d.push(g / e);
        return d
    }, a.map = function(a) {
        var b = new m;
        for (var c in a)
            b.set(c, a[c]);
        return b
    }, l(m, {has: function(a) {
            return n + a in this
        },get: function(a) {
            return this[n + a]
        },set: function(a, b) {
            return this[n + a] = b
        },remove: function(a) {
            return a = n + a, a in this && delete this[a]
        },keys: function() {
            var a = [];
            return this.forEach(function(b) {
                a.push(b)
            }), a
        },values: function() {
            var a = [];
            return this.forEach(function(b, c) {
                a.push(c)
            }), a
        },entries: function() {
            var a = [];
            return this.forEach(function(b, c) {
                a.push({key: b,value: c})
            }), a
        },forEach: function(a) {
            for (var b in this)
                b.charCodeAt(0) === o && a.call(this, b.substring(1), this[b])
        }});
    var n = "\0", o = n.charCodeAt(0);
    a.nest = function() {
        function g(a, d, h) {
            if (h >= c.length)
                return f ? f.call(b, d) : e ? d.sort(e) : d;
            var i = -1, j = d.length, k = c[h++], l, n, o, p = new m, q;
            while (++i < j)
                (q = p.get(l = k(n = d[i]))) ? q.push(n) : p.set(l, [n]);
            return a ? (n = a(), o = function(b, c) {
                n.set(b, g(a, c, h))
            }) : (n = {}, o = function(b, c) {
                n[b] = g(a, c, h)
            }), p.forEach(o), n
        }
        function h(a, b) {
            if (b >= c.length)
                return a;
            var e = [], f = d[b++];
            return a.forEach(function(a, c) {
                e.push({key
                    : a,values: h(c, b)})
            }), f ? e.sort(function(a, b) {
                return f(a.key, b.key)
            }) : e
        }
        var b = {}, c = [], d = [], e, f;
        return b.map = function(a, b) {
            return g(b, a, 0)
        }, b.entries = function(b) {
            return h(g(a.map, b, 0), 0)
        }, b.key = function(a) {
            return c.push(a), b
        }, b.sortKeys = function(a) {
            return d[c.length - 1] = a, b
        }, b.sortValues = function(a) {
            return e = a, b
        }, b.rollup = function(a) {
            return f = a, b
        }, b
    }, a.set = function(a) {
        var b = new p;
        if (a)
            for (var c = 0; c < a.length; c++)
                b.add(a[c]);
        return b
    }, l(p, {has: function(a) {
            return n + a in this
        },add: function(a) {
            return this[n + a] = !0, a
        },remove: function(a) {
            return a = n + a, a in this && delete this[a]
        },values: function() {
            var a = [];
            return this.forEach(function(b) {
                a.push(b)
            }), a
        },forEach: function(a) {
            for (var b in this)
                b.charCodeAt(0) === o && a.call(this, b.substring(1))
        }}), a.behavior = {}, a.rebind = function(a, b) {
        var c = 1, d = arguments.length, e;
        while (++c < d)
            a[e = arguments[c]] = q(a, b, b[e]);
        return a
    }, a.dispatch = function() {
        var a = new r, b = -1, c = arguments.length;
        while (++b < c)
            a[arguments[b]] = s(a);
        return a
    }, r.prototype.on = function(a, b) {
        var c = a.indexOf("."), d = "";
        c >= 0 && (d = a.substring(c + 1), a = a.substring(0, c));
        if (a)
            return arguments.length < 2 ? this[a].on(d) : this[a].on(d, b);
        if (arguments.length === 2) {
            if (b == null)
                for (a in this)
                    this.hasOwnProperty(a) && this[a].on(d, null);
            return this
        }
    }, a.event = null, a.mouse = function(a) {
        return y(a, u())
    };
    var x = /WebKit/.test(d.navigator.userAgent) ? -1 : 0, z = B;
    try {
        z(c.documentElement.childNodes)[0].nodeType
    } catch (C) {
        z = A
    }
    var D = [].__proto__ ? function(a, b) {
        a.__proto__ = b
    } : function(a, b) {
        for (var c in b)
            a[c] = b[c]
    };
    a.touches = function(a, b) {
        return arguments.length < 2 && (b = u().touches), b ? z(b).map(function(b) {
            var c = y(a, b);
            return c.identifier = b.identifier, c
        }) : []
    }, a.behavior.drag = function() {
        function e() {
            this.on("mousedown.drag", f).on("touchstart.drag", f)
        }
        function f() {
            function m() {
                var b = e.parentNode;
                return h != null ? a.touches(b).filter(function(a) {
                    return a.identifier === h
                })[0] : a.mouse(b)
            }
            function n() {
                if (!e.parentNode)
                    return o();
                var a = m(), b = a[0] - j[0], c = a[1] - j[1];
                k |= b | c, j = a, t(), f({type: "drag",x: a[0] + i[0],y: a[1] + i[1],dx: b,dy: c})
            }
            function o() {
                f({type: "dragend"}), k && (t(), a.event.target === g && v(l, "click")), l.on(h != null ? "touchmove.drag-" + h : "mousemove.drag", null).on(h != null ? "touchend.drag-" + h : "mouseup.drag", null)
            }
            var e = this, f = b.of(e, arguments), g = a.event.target, h = a.event.touches ? a.event.changedTouches[0].identifier : null, i, j = m(), k = 0, l = a.select(d).on(h != null ? "touchmove.drag-" + h : "mousemove.drag", n).on(h != null ? "touchend.drag-" + h : "mouseup.drag", o, !0);
            c ? (i = c.apply(e, arguments), i = [i.x - j[0], i.y - j[1]]) : i = [0, 0], h == null && t(), f({type: "dragstart"})
        }
        var b = w(e, "drag", "dragstart", "dragend"), c = null;
        return e.origin = function(a) {
            return arguments.length ? (c = a, e) : c
        }, a.rebind(e, b, "on")
    };
    var F = function(a, b) {
        return b.querySelector(a)
    }, G = function(a, b) {
        return b.querySelectorAll(a)
    }, H = c.documentElement, I = H.matchesSelector || H.webkitMatchesSelector || H.mozMatchesSelector || H.msMatchesSelector || H.oMatchesSelector, J = function(a, b) {
        return I.call(a, b)
    };
    typeof Sizzle == "function" && (F = function(a, b) {
        return Sizzle(a, b)[0] || null
    }, G = function(a, b) {
        return Sizzle.uniqueSort(Sizzle(a, b))
    }, J = Sizzle.matchesSelector);
    var K = [];
    a.selection = function() {
        return fb
    }, a.selection.prototype = K, K.select = function(a) {
        var b = [], c, d, e, f;
        typeof a != "function" && (a = L(a));
        for (var g = -1, h = this.length; ++g < h; ) {
            b.push(c = []), c.parentNode = (e = this[g]).parentNode;
            for (var i = -1, j = e.length; ++i < j; )
                (f = e[i]) ? (c.push(d = a.call(f, f.__data__, i)), d && "__data__" in f && (d.__data__ = f.__data__)) : c.push(null)
        }
        return E(b)
    }, K.selectAll = function(a) {
        var b = [], c, d;
        typeof a != "function" && (a = M(a));
        for (var e = -1, f = this.length; ++e < f; )
            for (var g = this[e], h = -1, i = g.length; ++h < i; )
                if (d = g[h])
                    b.push(c = z(a.call(d, d.__data__, h))), c.parentNode = d;
        return E(b)
    };
    var N = {svg: "http://www.w3.org/2000/svg",xhtml: "http://www.w3.org/1999/xhtml",xlink: "http://www.w3.org/1999/xlink",xml: "http://www.w3.org/XML/1998/namespace",xmlns: "http://www.w3.org/2000/xmlns/"};
    a.ns = {prefix: N,qualify: function(a) {
            var b = a.indexOf(":"), c = a;
            return b >= 0 && (c = a.substring(0, b), a = a.substring(b + 1)), N.hasOwnProperty(c) ? {space: N[c],local: a} : a
        }}, K.attr = function(b, c) {
        if (arguments.length < 2) {
            if (typeof b == "string") {
                var d = this.node();
                return b = a.ns.qualify(b), b.local ? d.getAttributeNS(b.space, b.local) : d.getAttribute(b)
            }
            for (c in b)
                this.each(O(c, b[c]));
            return this
        }
        return this.each(O(b, c))
    }, a.requote = function(a) {
        return a.replace(Q, "\\$&")
    };
    var Q = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
    K.classed = function(a, b) {
        if (arguments.length < 2) {
            if (typeof a == "string") {
                var c = this.node(), d = (a = a.trim().split(/^|\s+/g)).length, e = -1;
                if (b = c.classList) {
                    while (++e < d)
                        if (!b.contains(a[e]))
                            return !1
                } else {
                    b = c.getAttribute("class");
                    while (++e < d)
                        if (!R(a[e]).test(b))
                            return !1
                }
                return !0
            }
            for (b in a)
                this.each(S(b, a[b]));
            return this
        }
        return this.each(S(a, b))
    }, K.style = function(a, b, c) {
        var e = arguments.length;
        if (e < 3) {
            if (typeof a != "string") {
                e < 2 && (b = "");
                for (c in a)
                    this.each(U(c, a[c], b));
                return this
            }
            if (e < 2)
                return d.getComputedStyle(this.node(), null).getPropertyValue(a);
            c = ""
        }
        return this.each(U(a, b, c))
    }, K.property = function(a, b) {
        if (arguments.length < 2) {
            if (typeof a == "string")
                return this.node()[a];
            for (b in a)
                this.each(V(b, a[b]));
            return this
        }
        return this.each(V(a, b))
    }, K.text = function(a) {
        return arguments.length ? this.each(typeof a == "function" ? function() {
            var b = a.apply(this, arguments);
            this.textContent = b == null ? "" : b
        } : a == null ? function() {
            this.textContent = ""
        } : function() {
            this.textContent = a
        }) : this.node().textContent
    }, K.html = function(a) {
        return arguments.length ? this.each(typeof a == "function" ? function() {
            var b = a.apply(this, arguments);
            this.innerHTML = b == null ? "" : b
        } : a == null ? function() {
            this.innerHTML = ""
        } : function() {
            this.innerHTML = a
        }) : this.node().innerHTML
    }, K.append = function(b) {
        function d() {
            return this.appendChild(c.createElementNS(this.namespaceURI, b))
        }
        function e() {
            return this.appendChild(c.createElementNS(b.space, b.local))
        }
        return b = a.ns.qualify(b), this.select(b.local ? e : d)
    }, K.insert = function(b, d) {
        function e(a, e) {
            return this.insertBefore(c.createElementNS(this.namespaceURI, b), d.call(this, a, e))
        }
        function f(a, e) {
            return this.insertBefore(c.createElementNS(b.space, b.local), d.call(this, a, e))
        }
        return b = a.ns.qualify(b), typeof d != "function" && (d = L(d)), this.select(b.local ? f : e)
    }, K.remove = function() {
        return this.each(function() {
            var a = this.parentNode;
            a && a.removeChild(this)
        })
    }, K.data = function(a, b) {
        function g(a, c) {
            var d, e = a.length, f = c.length, g = Math.min(e, f), k = new Array(f), l = new Array(f), n = new Array(e), o, p;
            if (b) {
                var q = new m, r = new m, s = [], t;
                for (d = -1; ++d < e; )
                    t = b.call(o = a[d], o.__data__, d), q.has(t) ? n[d] = o : q.set(t, o), s.push(t);
                for (d = -1; ++d < f; )
                    t = b.call(c, p = c[d], d), (o = q.get(t)) ? (k[d] = o, o.__data__ = p) : r.has(t) || (l[d] = W(p)), r.set(t, p), q.remove(t);
                for (d = -1; ++d < e; )
                    q.has(s[d]) && (n[d] = a[d])
            } else {
                for (d = -1; ++d < g; )
                    o = a[d], p = c[d], o ? (o.__data__ = p, k[d] = o) : l[d] = W(p);
                for (; d < f; ++d)
                    l[d] = W(c[d]);
                for (; d < e; ++d)
                    n[d] = a[d]
            }
            l.update = k, l.parentNode = k.parentNode = n.parentNode = a.parentNode, h.push(l), i.push(k), j.push(n)
        }
        var c = -1, d = this.length, e, f;
        if (!arguments.length) {
            a = new Array(d = (e = this[0]).length);
            while (++c < d)
                if (f = e[c])
                    a[c] = f.__data__;
            return a
        }
        var h = db([]), i = E([]), j = E([]);
        if (typeof a == "function")
            while (++c < d)
                g(e = this[c], a.call(e, e.parentNode.__data__, c));
        else
            while (++c < d)
                g(e = this[c], a);
        return i.enter = function() {
            return h
        }, i.exit = function() {
            return j
        }, i
    }, K.datum = function(a) {
        return arguments.length ? this.property("__data__", a) : this.property("__data__")
    }, K.filter = function(a) {
        var b = [], c, d, e;
        typeof a != "function" && (a = X(a));
        for (var f = 0, g = this.length; f < g; f++) {
            b.push(c = []), c.parentNode = (d = this[f]).parentNode;
            for (var h = 0, i = d.length; h < i; h++)
                (e = d[h]) && a.call(e, e.__data__, h) && c.push(e)
        }
        return E(b)
    }, K.order = function() {
        for (var a = -1, b = this.length; ++a < b; )
            for (var c = this[a], d = c.length - 1, e = c[d], f; --d >= 0; )
                if (f = c[d])
                    e && e !== f.nextSibling && e.parentNode.insertBefore(f, e), e = f;
        return this
    }, K.sort = function(a) {
        a = Y.apply(this, arguments);
        for (var b = -1, c = this.length; ++b < c; )
            this[b].sort(a);
        return this.order()
    }, K.on = function(a, b, c) {
        var d = arguments.length;
        if (d < 3) {
            if (typeof a != "string") {
                d < 2 && (b = !1);
                for (c in a)
                    this.each($(c, a[c], b));
                return this
            }
            if (d < 2)
                return (d = this.node()["__on" + a]) && d._;
            c = !1
        }
        return this.each($(a, b, c))
    };
    var _ = a.map({mouseenter: "mouseover",mouseleave: "mouseout"});
    _.forEach(function(a) {
        "on" + a in c && _.remove(a)
    }), K.each = function(a) {
        return cb(this, function(b, c, d) {
            a.call(b, b.__data__, c, d)
        })
    }, K.call = function(a) {
        var b = z(arguments);
        return a.apply(b[0] = this, b), this
    }, K.empty = function() {
        return !this.node()
    }, K.node = function() {
        for (var a = 0, b = this.length; a < b; a++)
            for (var c = this[a], d = 0, e = c.length; d < e; d++) {
                var f = c[d];
                if (f)
                    return f
            }
        return null
    };
    var eb = [];
    a.selection.enter = db, a.selection.enter.prototype = eb, eb.append = K.append, eb.insert = K.insert, eb.empty = K.empty, eb.node = K.node, eb.select = function(a) {
        var b = [], c, d, e, f, g;
        for (var h = -1, i = this.length; ++h < i; ) {
            e = (f = this[h]).update, b.push(c = []), c.parentNode = f.parentNode;
            for (var j = -1, k = f.length; ++j < k; )
                (g = f[j]) ? (c.push(e[j] = d = a.call(f.parentNode, g.__data__, j)), d.__data__ = g.__data__) : c.push(null)
        }
        return E(b)
    }, K.transition = function() {
        var a = rh || ++qh, b = [], c, d, e = Object.create(sh);
        e.time = Date.now();
        for (var f = -1, g = this.length; ++f < g; ) {
            b.push(c = []);
            for (var h = this[f], i = -1, j = h.length; ++i < j; )
                (d = h[i]) && vh(d, i, a, e), c.push(d)
        }
        return oh(b, a)
    };
    var fb = E([[c]]);
    fb[0].parentNode = H, a.select = function(a) {
        return typeof a == "string" ? fb.select(a) : E([[a]])
    }, a.selectAll = function(a) {
        return typeof a == "string" ? fb.selectAll(a) : E([z(a)])
    }, a.behavior.zoom = function() {
        function n() {
            this.on("mousedown.zoom", x).on("mousemove.zoom", z).on(ib + ".zoom", y).on("dblclick.zoom", A).on("touchstart.zoom", B).on("touchmove.zoom", C).on("touchend.zoom", B)
        }
        function o(a) {
            return [(a[0] - b[0]) / e, (a[1] - b[1]) / e]
        }
        function p(a) {
            return [a[0] * e + b[0], a[1] * e + b[1]]
        }
        function q(a) {
            e = Math.max(g[0], Math.min(g[1], a))
        }
        function r(a, c) {
            c = p(c), b[0] += a[0] - c[0], b[1] += a[1] - c[1]
        }
        function s() {
            j && j.domain(i.range().map(function(a) {
                return (a - b[0]) / e
            }).map(i.invert)), l && l.domain(k.range().map(function(a) {
                return (a - b[1]) / e
            }).map(k.invert))
        }
        function u(c) {
            s(), a.event.preventDefault(), c({type: "zoom",scale: e,translate: b})
        }
        function x() {
            function j() {
                f = 1, r(a.mouse(b), i), u(c)
            }
            function k() {
                f && t(), g.on("mousemove.zoom", null).on("mouseup.zoom", null), f && a.event.target === e && v(g, "click.zoom")
            }
            var b = this, c = h.of(b, arguments), e = a.event.target, f = 0, g = a.select(d).on("mousemove.zoom", j).on("mouseup.zoom", k), i = o(a.mouse(b));
            d.focus(), t()
        }
        function y() {
            c || (c = o(a.mouse(this))), q(Math.pow(2, hb() * .002) * e), r(a.mouse(this), c), u(h.of(this, arguments))
        }
        function z() {
            c = null
        }
        function A() {
            var b = a.mouse(this), c = o(b), d = Math.log(e) / Math.LN2;
            q(Math.pow(2, a.event.shiftKey ? Math.ceil(d) - 1 : Math.floor(d) + 1)), r(b, c), u(h.of(this, arguments))
        }
        function B() {
            var b = a.touches(this), d = Date.now();
            f = e, c = {}, b.forEach(function(a) {
                c[a.identifier] = o(a)
            }), t();
            if (b.length === 1) {
                if (d - m < 500) {
                    var g = b[0], i = o(b[0]);
                    q(e * 2), r(g, i), u(h.of(this, arguments))
                }
                m = d
            }
        }
        function C() {
            var b = a.touches(this), d = b[0], e = c[d.identifier];
            if (g = b[1]) {
                var g, i = c[g.identifier];
                d = [(d[0] + g[0]) / 2, (d[1] + g[1]) / 2], e = [(e[0] + i[0]) / 2, (e[1] + i[1]) / 2], q(a.event.scale * f)
            }
            r(d, e), m = null, u(h.of(this, arguments))
        }
        var b = [0, 0], c, e = 1, f, g = gb, h = w(n, "zoom"), i, j, k, l, m;
        return n.translate = function(a) {
            return arguments.length ? (b = a.map(Number), s(), n) : b
        }, n.scale = function(a) {
            return arguments.length ? (e = +a, s(), n) : e
        }, n.scaleExtent = function(a) {
            return arguments.length ? (g = a == null ? gb : a.map(Number), n) : g
        }, n.x = function(a) {
            return arguments.length ? (j = a, i = a.copy(), b = [0, 0], e = 1, n) : j
        }, n.y = function(a) {
            return arguments.length ? (l = a, k = a.copy(), b = [0, 0], e = 1, n) : l
        }, a.rebind(n, h, "on")
    };
    var gb = [0, Infinity], hb, ib = "onwheel" in c ? (hb = function() {
        return -a.event.deltaY * (a.event.deltaMode ? 120 : 1)
    }, "wheel") : "onmousewheel" in c ? (hb = function() {
        return a.event.wheelDelta
    }, "mousewheel") : (hb = function() {
        return -a.event.detail
    }, "MozMousePixelScroll");
    jb.prototype.toString = function() {
        return this.rgb() + ""
    }, a.hsl = function(a, b, c) {
        return arguments.length === 1 ? a instanceof lb ? kb(a.h, a.s, a.l) : Sb("" + a, Tb, kb) : kb(+a, +b, +c)
    };
    var mb = lb.prototype = new jb;
    mb.brighter = function(a) {
        return a = Math.pow(.7, arguments.length ? a : 1), kb(this.h, this.s, this.l / a)
    }, mb.darker = function(a) {
        return a = Math.pow(.7, arguments.length ? a : 1), kb(this.h, this.s, a * this.l)
    }, mb.rgb = function() {
        return nb(this.h, this.s, this.l)
    };
    var ob = Math.PI, pb = 1e-6, qb = ob / 180, rb = 180 / ob;
    a.hcl = function(b, c, d) {
        return arguments.length === 1 ? b instanceof zb ? yb(b.h, b.c, b.l) : b instanceof Db ? Kb(b.l, b.a, b.b) : Kb((b = Ub((b = a.rgb(b)).r, b.g, b.b)).l, b.a, b.b) : yb(+b, +c, +d)
    };
    var Ab = zb.prototype = new jb;
    Ab.brighter = function(a) {
        return yb(this.h, this.c, Math.min(100, this.l + Eb * (arguments.length ? a : 1)))
    }, Ab.darker = function(a) {
        return yb(this.h, this.c, Math.max(0, this.l - Eb * (arguments.length ? a : 1)))
    }, Ab.rgb = function() {
        return Bb(this.h, this.c, this.l).rgb()
    }, a.lab = function(b, c, d) {
        return arguments.length === 1 ? b instanceof Db ? Cb(b.l, b.a, b.b) : b instanceof zb ? Bb(b.l, b.c, b.h) : Ub((b = a.rgb(b)).r, b.g, b.b) : Cb(+b, +c, +d)
    };
    var Eb = 18, Fb = .95047, Gb = 1, Hb = 1.08883, Ib = Db.prototype = new jb;
    Ib.brighter = function(a) {
        return Cb(Math.min(100, this.l + Eb * (arguments.length ? a : 1)), this.a, this.b)
    }, Ib.darker = function(a) {
        return Cb(Math.max(0, this.l - Eb * (arguments.length ? a : 1)), this.a, this.b)
    }, Ib.rgb = function() {
        return Jb(this.l, this.a, this.b)
    }, a.rgb = function(a, b, c) {
        return arguments.length === 1 ? a instanceof Pb ? Ob(a.r, a.g, a.b) : Sb("" + a, Ob, nb) : Ob(~~a, ~~b, ~~c)
    };
    var Qb = Pb.prototype = new jb;
    Qb.brighter = function(a) {
        a = Math.pow(.7, arguments.length ? a : 1);
        var b = this.r, c = this.g, d = this.b, e = 30;
        return !b && !c && !d ? Ob(e, e, e) : (b && b < e && (b = e), c && c < e && (c = e), d && d < e && (d = e), Ob(Math.min(255, Math.floor(b / a)), Math.min(255, Math.floor(c / a)), Math.min(255, Math.floor(d / a))))
    }, Qb.darker = function(a) {
        return a = Math.pow(.7, arguments.length ? a : 1), Ob(Math.floor(a * this.r), Math.floor(a * this.g), Math.floor(a * this.b))
    }, Qb.hsl = function() {
        return Tb(this.r, this.g, this.b)
    }, Qb.toString = function() {
        return "#" + Rb(this.r) + Rb(this.g) + Rb(this.b)
    };
    var Xb = a.map({aliceblue: "#f0f8ff",antiquewhite: "#faebd7",aqua: "#00ffff",aquamarine: "#7fffd4",azure: "#f0ffff",beige: "#f5f5dc",bisque: "#ffe4c4",black: "#000000",blanchedalmond: "#ffebcd",blue: "#0000ff",blueviolet: "#8a2be2",brown: "#a52a2a",burlywood: "#deb887",cadetblue: "#5f9ea0",chartreuse: "#7fff00",chocolate: "#d2691e",coral: "#ff7f50",cornflowerblue: "#6495ed",cornsilk: "#fff8dc",crimson: "#dc143c",cyan: "#00ffff",darkblue: "#00008b",darkcyan: "#008b8b",darkgoldenrod: "#b8860b",darkgray: "#a9a9a9",darkgreen: "#006400",darkgrey: "#a9a9a9",darkkhaki: "#bdb76b",darkmagenta: "#8b008b",darkolivegreen: "#556b2f",darkorange: "#ff8c00",darkorchid: "#9932cc",darkred: "#8b0000",darksalmon: "#e9967a",darkseagreen: "#8fbc8f",darkslateblue: "#483d8b",darkslategray: "#2f4f4f",darkslategrey: "#2f4f4f",darkturquoise: "#00ced1",darkviolet: "#9400d3",deeppink: "#ff1493",deepskyblue: "#00bfff",dimgray: "#696969",dimgrey: "#696969",dodgerblue: "#1e90ff",firebrick: "#b22222",floralwhite: "#fffaf0",forestgreen: "#228b22",fuchsia: "#ff00ff",gainsboro: "#dcdcdc",ghostwhite: "#f8f8ff",gold: "#ffd700",goldenrod: "#daa520",gray: "#808080",green: "#008000",greenyellow: "#adff2f",grey: "#808080",honeydew: "#f0fff0",hotpink: "#ff69b4",indianred: "#cd5c5c",indigo: "#4b0082",ivory: "#fffff0",khaki: "#f0e68c",lavender: "#e6e6fa",lavenderblush: "#fff0f5",lawngreen: "#7cfc00",lemonchiffon: "#fffacd",lightblue: "#add8e6",lightcoral: "#f08080",lightcyan: "#e0ffff",lightgoldenrodyellow: "#fafad2",lightgray: "#d3d3d3",lightgreen: "#90ee90",lightgrey: "#d3d3d3",lightpink: "#ffb6c1",lightsalmon: "#ffa07a",lightseagreen: "#20b2aa",lightskyblue: "#87cefa",lightslategray: "#778899",lightslategrey: "#778899",lightsteelblue: "#b0c4de",lightyellow: "#ffffe0",lime: "#00ff00",limegreen: "#32cd32",linen: "#faf0e6",magenta: "#ff00ff",maroon: "#800000",mediumaquamarine: "#66cdaa",mediumblue: "#0000cd",mediumorchid: "#ba55d3",mediumpurple: "#9370db",mediumseagreen: "#3cb371",mediumslateblue: "#7b68ee",mediumspringgreen: "#00fa9a",mediumturquoise: "#48d1cc",mediumvioletred: "#c71585",midnightblue: "#191970",mintcream: "#f5fffa",mistyrose: "#ffe4e1",moccasin: "#ffe4b5",navajowhite: "#ffdead",navy: "#000080",oldlace: "#fdf5e6",olive: "#808000",olivedrab: "#6b8e23",orange: "#ffa500",orangered: "#ff4500",orchid: "#da70d6",palegoldenrod: "#eee8aa",palegreen: "#98fb98",paleturquoise: "#afeeee",palevioletred: "#db7093",papayawhip: "#ffefd5",peachpuff: "#ffdab9",peru: "#cd853f",pink: "#ffc0cb",plum: "#dda0dd",powderblue: "#b0e0e6",purple: "#800080",red: "#ff0000",rosybrown: "#bc8f8f",royalblue: "#4169e1",saddlebrown: "#8b4513",salmon: "#fa8072",sandybrown: "#f4a460",seagreen: "#2e8b57",seashell: "#fff5ee",sienna: "#a0522d",silver: "#c0c0c0",skyblue: "#87ceeb",slateblue: "#6a5acd",slategray: "#708090",slategrey: "#708090",snow: "#fffafa",springgreen: "#00ff7f",steelblue: "#4682b4",tan: "#d2b48c",teal: "#008080",thistle: "#d8bfd8",tomato: "#ff6347",turquoise: "#40e0d0",violet: "#ee82ee",wheat: "#f5deb3",white: "#ffffff",whitesmoke: "#f5f5f5",yellow: "#ffff00",yellowgreen: "#9acd32"});
    Xb.forEach(function(a, b) {
        Xb.set(a, Sb(b, Ob, nb))
    }), a.functor = Yb, a.xhr = function(b, c, e) {
        function k() {
            var a = j.status;
            !a && j.responseText || a >= 200 && a < 300 || a === 304 ? g.load.call(f, i.call(f, j)) : g.error.call(f, j)
        }
        var f = {}, g = a.dispatch("progress", "load", "error"), h = {}, i = Zb, j = new (d.XDomainRequest && /^(http(s)?:)?\/\//.test(b) ? XDomainRequest : XMLHttpRequest);
        return "onload" in j ? j.onload = j.onerror = k : j.onreadystatechange = function() {
            j.readyState > 3 && k()
        }, j.onprogress = function(b) {
            var c = a.event;
            a.event = b;
            try {
                g.progress.call(f, j)
            }finally {
                a.event = c
            }
        }, f.header = function(a, b) {
            return a = (a + "").toLowerCase(), arguments.length < 2 ? h[a] : (b == null ? delete h[a] : h[a] = b + "", f)
        }, f.mimeType = function(a) {
            return arguments.length ? (c = a == null ? null : a + "", f) : c
        }, f.response = function(a) {
            return i = a, f
        }, ["get", "post"].forEach(function(a) {
            f[a] = function() {
                return f.send.apply(f, [a].concat(z(arguments)))
            }
        }), f.send = function(a, d, e) {
            arguments.length === 2 && typeof d == "function" && (e = d, d = null), j.open(a, b, !0), c != null && !("accept" in h) && (h.accept = c + ",*/*");
            if (j.setRequestHeader)
                for (var g in h)
                    j.setRequestHeader(g, h[g]);
            return c != null && j.overrideMimeType && j.overrideMimeType(c), e != null && f.on("error", e).on("load", function(a) {
                e(null, a)
            }), j.send(d == null ? null : d), f
        }, f.abort = function() {
            return j.abort(), f
        }, a.rebind(f, g, "on"), arguments.length === 2 && typeof c == "function" && (e = c, c = null), e == null ? f : f.get($b(e))
    }, a.csv = _b(",", "text/csv"), a.tsv = _b("  ", "text/tab-separated-values");
    var ac = 0, bc = {}, cc = null, dc, ec;
    a.timer = function(a, b, c) {
        if (arguments.length < 3) {
            if (arguments.length < 2)
                b = 0;
            else if (!isFinite(b))
                return;
            c = Date.now()
        }
        var d = bc[a.id];
        d && d.callback === a ? (d.then = c, d.delay = b) : bc[a.id = ++ac] = cc = {callback: a,then: c,delay: b,next: cc}, dc || (ec = clearTimeout(ec), dc = 1, hc(fc))
    }, a.timer.flush = function() {
        var a, b = Date.now(), c = cc;
        while (c)
            a = b - c.then, c.delay || (c.flush = c.callback(a)), c = c.next;
        gc()
    };
    var hc = d.requestAnimationFrame || d.webkitRequestAnimationFrame || d.mozRequestAnimationFrame || d.oRequestAnimationFrame || d.msRequestAnimationFrame || function(a) {
        setTimeout(a, 17)
    }, ic = ".", jc = ",", kc = [3, 3], lc = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(mc);
    a.formatPrefix = function(b, c) {
        var d = 0;
        return b && (b < 0 && (b *= -1), c && (b = a.round(b, pc(b, c))), d = 1 + Math.floor(1e-12 + Math.log(b) / Math.LN10), d = Math.max(-24, Math.min(24, Math.floor((d <= 0 ? d + 1 : d - 1) / 3) * 3))), lc[8 + d / 3]
    }, a.round = function(a, b) {
        return b ? Math.round(a * (b = Math.pow(10, b))) / b : Math.round(a)
    }, a.format = function(b) {
        var c = nc.exec(b), d = c[1] || " ", e = c[2] || ">", f = c[3] || "", g = c[4] || "", h = c[5], i = +c[6], j = c[7], k = c[8], l = c[9], m = 1, n = "", o = !1;
        k && (k = +k.substring(1));
        if (h || d === "0" && e === "=")
            h = d = "0", e = "=", j && (i -= Math.floor((i - 1) / 4));
        switch (l) {
            case "n":
                j = !0, l = "g";
                break;
            case "%":
                m = 100, n = "%", l = "f";
                break;
            case "p":
                m = 100, n = "%", l = "r";
                break;
            case "b":
            case "o":
            case "x":
            case "X":
                g && (g = "0" + l.toLowerCase());
            case "c":
            case "d":
                o = !0, k = 0;
                break;
            case "s":
                m = -1, l = "r"
        }
        g === "#" && (g = ""), l == "r" && !k && (l = "g");
        if (k != null)
            if (l == "g")
                k = Math.max(1, Math.min(21, k));
            else if (l == "e" || l == "f")
                k = Math.max(0, Math.min(20, k));
        l = oc.get(l) || qc;
        var p = h && j;
        return function(b) {
            if (o && b % 1)
                return "";
            var c = b < 0 || b === 0 && 1 / b < 0 ? (b = -b, "-") : f;
            if (m < 0) {
                var q = a.formatPrefix(b, k);
                b = q.scale(b), n = q.symbol
            } else
                b *= m;
            b = l(b, k), !h && j && (b = rc(b));
            var r = g.length + b.length + (p ? 0 : c.length), s = r < i ? (new Array(r = i - r + 1)).join(d) : "";
            return p && (b = rc(s + b)), ic && b.replace(".", ic), c += g, (e === "<" ? c + b + s : e === ">" ? s + c + b : e === "^" ? s.substring(0, r >>= 1) + c + b + s.substring(r) : c + (p ? b : s + b)) + n
        }
    };
    var nc = /(?:([^{])?([<>=^]))?([+\- ])?(#)?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i, oc = a.map({b: function(a) {
            return a.toString(2)
        },c: function(a) {
            return String.fromCharCode(a)
        },o: function(a) {
            return a.toString(8)
        },x: function(a) {
            return a.toString(16)
        },X: function(a) {
            return a.toString(16).toUpperCase()
        },g: function(a, b) {
            return a.toPrecision(b)
        },e: function(a, b) {
            return a.toExponential(b)
        },f: function(a, b) {
            return a.toFixed(b)
        },r: function(b, c) {
            return (b = a.round(b, pc(b, c))).toFixed(Math.max(0, Math.min(20, pc(b * (1 + 1e-15), c))))
        }}), rc = Zb;
    if (kc) {
        var sc = kc.length;
        rc = function(a) {
            var b = a.lastIndexOf("."), c = b >= 0 ? "." + a.substring(b + 1) : (b = a.length, ""), d = [], e = 0, f = kc[0];
            while (b > 0 && f > 0)
                d.push(a.substring(b -= f, b + f)), f = kc[e = (e + 1) % sc];
            return d.reverse().join(jc || "") + c
        }
    }
    a.geo = {}, a.geo.stream = function(a, b) {
        a && uc.hasOwnProperty(a.type) ? uc[a.type](a, b) : tc(a, b)
    };
    var uc = {Feature: function(a, b) {
            tc(a.geometry, b)
        },FeatureCollection: function(a, b) {
            var c = a.features, d = -1, e = c.length;
            while (++d < e)
                tc(c[d].geometry, b)
        }}, vc = {Sphere: function(a, b) {
            b.sphere()
        },Point: function(a, b) {
            var c = a.coordinates;
            b.point(c[0], c[1])
        },MultiPoint: function(a, b) {
            var c = a.coordinates, d = -1, e = c.length, f;
            while (++d < e)
                f = c[d], b.point(f[0], f[1])
        },LineString: function(a, b) {
            wc(a.coordinates, b, 0)
        },MultiLineString: function(a, b) {
            var c = a.coordinates, d = -1, e = c.length;
            while (++d < e)
                wc(c[d], b, 0)
        },Polygon: function(a, b) {
            xc(a.coordinates, b)
        },MultiPolygon: function(a, b) {
            var c = a.coordinates, d = -1, e = c.length;
            while (++d < e)
                xc(c[d], b)
        },GeometryCollection: function(a, b) {
            var c = a.geometries, d = -1, e = c.length;
            while (++d < e)
                tc(c[d], b)
        }};
    a.geo.area = function(b) {
        return yc = 0, a.geo.stream(b, Bc), yc
    };
    var yc, zc, Ac, Bc = {sphere: function() {
            yc += 4 * ob
        },point: Z,lineStart: Z,lineEnd: Z,polygonStart: function() {
            zc = 1, Ac = 0, Bc.lineStart = Cc
        },polygonEnd: function() {
            var a = 2 * Math.atan2(Ac, zc);
            yc += a < 0 ? 4 * ob + a : a, Bc.lineStart = Bc.lineEnd = Bc.point = Z
        }};
    a.geo.bounds = Dc(Zb), a.geo.centroid = function(b) {
        Ec = Fc = Gc = Hc = Ic = 0, a.geo.stream(b, Jc);
        var c;
        if (Fc && Math.abs(c = Math.sqrt(Gc * Gc + Hc * Hc + Ic * Ic)) > pb)
            return [Math.atan2(Hc, Gc) * rb, Math.asin(Math.max(-1, Math.min(1, Ic / c))) * rb]
    };
    var Ec, Fc, Gc, Hc, Ic, Jc = {sphere: function() {
            Ec < 2 && (Ec = 2, Fc = Gc = Hc = Ic = 0)
        },point: Kc,lineStart: Mc,lineEnd: Nc,polygonStart: function() {
            Ec < 2 && (Ec = 2, Fc = Gc = Hc = Ic = 0), Jc.lineStart = Lc
        },polygonEnd: function() {
            Jc.lineStart = Mc
        }}, cd = Zc(Uc, dd, fd), hd = 1e9;
    a.geo.projection = md, a.geo.projectionMutator = nd, (a.geo.equirectangular = function() {
        return md(pd)
    }).raw = pd.invert = pd, a.geo.rotation = function(a) {
        function b(b) {
            return b = a(b[0] * qb, b[1] * qb), b[0] *= rb, b[1] *= rb, b
        }
        return a = qd(a[0] % 360 * qb, a[1] * qb, a.length > 2 ? a[2] * qb : 0), b.invert = function(b) {
            return b = a.invert(b[0] * qb, b[1] * qb), b[0] *= rb, b[1] *= rb, b
        }, b
    }, a.geo.circle = function() {
        function e() {
            var b = typeof a == "function" ? a.apply(this, arguments) : a, c = qd(-b[0] * qb, -b[1] * qb, 0).invert, e = [];
            return d(null, null, 1, {point: function(a, b) {
                    e.push(a = c(a, b)), a[0] *= rb, a[1] *= rb
                }}), {type: "Polygon",coordinates: [e]}
        }
        var a = [0, 0], b, c = 6, d;
        return e.origin = function(b) {
            return arguments.length ? (a = b, e) : a
        }, e.angle = function(a) {
            return arguments.length ? (d = ud((b = +a) * qb, c * qb), e) : b
        }, e.precision = function(a) {
            return arguments.length ? (d = ud(b * qb, (c = +a) * qb), e) : c
        }, e.angle(90)
    }, a.geo.distance = function(a, b) {
        var c = (b[0] - a[0]) * qb, d = a[1] * qb, e = b[1] * qb, f = Math.sin(c), g = Math.cos(c), h = Math.sin(d), i = Math.cos(d), j = Math.sin(e), k = Math.cos(e), l;
        return Math.atan2(Math.sqrt((l = k * f) * l + (l = i * j - h * k * g) * l), h * j + i * k * g)
    }, a.geo.graticule = function() {
        function s() {
            return {type: "MultiLineString",coordinates: t()}
        }
        function t() {
            return a.range(Math.ceil(e / l) * l, d, l).map(p).concat(a.range(Math.ceil(i / m) * m, h, m).map(q)).concat(a.range(Math.ceil(c / j) * j, b, j).filter(function(a) {
                return Math.abs(a % l) > pb
            }).map(n)).concat(a.range(Math.ceil(g / k) * k, f, k).filter(function(a) {
                return Math.abs(a % m) > pb
            }).map(o))
        }
        var b, c, d, e, f, g, h, i, j = 10, k = j, l = 90, m = 360, n, o, p, q, r = 2.5;
        return s.lines = function() {
            return t().map(function(a) {
                return {type: "LineString",coordinates: a}
            })
        }, s.outline = function() {
            return {type: "Polygon",coordinates: [p(e).concat(q(h).slice(1), p(d).reverse().slice(1), q(i).reverse().slice(1))]}
        }, s.extent = function(a) {
            return arguments.length ? s.majorExtent(a).minorExtent(a) : s.minorExtent()
        }, s.majorExtent = function(a) {
            return arguments.length ? (e = +a[0][0], d = +a[1][0], i = +a[0][1], h = +a[1][1], e > d && (a = e, e = d, d = a), i > h && (a = i, i = h, h = a), s.precision(r)) : [[e, i], [d, h]]
        }, s.minorExtent = function(a) {
            return arguments.length ? (c = +a[0][0], b = +a[1][0], g = +a[0][1], f = +a[1][1], c > b && (a = c, c = b, b = a), g > f && (a = g, g = f, f = a), s.precision(r)) : [[c, g], [b, f]]
        }, s.step = function(a) {
            return arguments.length ? s.majorStep(a).minorStep(a) : s.minorStep()
        }, s.majorStep = function(a) {
            return arguments.length ? (l = +a[0], m = +a[1], s) : [l, m]
        }, s.minorStep = function(a) {
            return arguments.length ? (j = +a[0], k = +a[1], s) : [j, k]
        }, s.precision = function(a) {
            return arguments.length ? (r = +a, n = wd(g, f, 90), o = xd(c, b, r), p = wd(i, h, 90), q = xd(e, d, r), s) : r
        }, s.majorExtent([[-180, -90 + pb], [180, 90 - pb]]).minorExtent([[-180, -80 - pb], [180, 80 + pb]])
    }, a.geo.greatArc = function() {
        function f() {
            return {type: "LineString",coordinates: [c || b.apply(this, arguments), e || d.apply(this, arguments)]}
        }
        var b = yd, c, d = zd, e;
        return f.distance = function() {
            return a.geo.distance(c || b.apply(this, arguments), e || d.apply(this, arguments))
        }, f.source = function(a) {
            return arguments.length ? (b = a, c = typeof a == "function" ? null : a, f) : b
        }, f.target = function(a) {
            return arguments.length ? (d = a, e = typeof a == "function" ? null : a, f) : d
        }, f.precision = function() {
            return arguments.length ? f : 0
        }, f
    }, a.geo.interpolate = function(a, b) {
        return Ad(a[0] * qb, a[1] * qb, b[0] * qb, b[1] * qb)
    }, a.geo.length = function(b) {
        return Bd = 0, a.geo.stream(b, Cd), Bd
    };
    var Bd, Cd = {sphere: Z,point: Z,lineStart: Dd,lineEnd: Z,polygonStart: Z,polygonEnd: Z};
    (a.geo.conicEqualArea = function() {
        return Ed(Fd)
    }).raw = Fd, a.geo.albersUsa = function() {
        function i(a) {
            return j(a)(a)
        }
        function j(a) {
            var f = a[0], g = a[1];
            return g > 50 ? c : f < -140 ? d : g < 21 ? e : b
        }
        var b = a.geo.conicEqualArea().rotate([98, 0]).center([0, 38]).parallels([29.5, 45.5]), c = a.geo.conicEqualArea().rotate([160, 0]).center([0, 60]).parallels([55, 65]), d = a.geo.conicEqualArea().rotate([160, 0]).center([0, 20]).parallels([8, 18]), e = a.geo.conicEqualArea().rotate([60, 0]).center([0, 10]).parallels([8, 18]), f, g, h;
        return i.invert = function(a) {
            return f(a) || g(a) || h(a) || b.invert(a)
        }, i.scale = function(a) {
            return arguments.length ? (b.scale(a), c.scale(a * .6), d.scale(a), e.scale(a * 1.5), i.translate(b.translate())) : b.scale()
        }, i.translate = function(a) {
            if (!arguments.length)
                return b.translate();
            var j = b.scale(), k = a[0], l = a[1];
            return b.translate(a), c.translate([k - .4 * j, l + .17 * j]), d.translate([k - .19 * j, l + .2 * j]), e.translate([k + .58 * j, l + .43 * j]), f = Gd(c, [[-180, 50], [-130, 72]]), g = Gd(d, [[-164, 18], [-154, 24]]), h = Gd(e, [[-67.5, 17.5], [-65, 19]]), i
        }, i.scale(1e3)
    };
    var Hd, Id, Jd = {point: Z,lineStart: Z,lineEnd: Z,polygonStart: function() {
            Id = 0, Jd.lineStart = Kd
        },polygonEnd: function() {
            Jd.lineStart = Jd.lineEnd = Jd.point = Z, Hd += Math.abs(Id / 2)
        }}, Md = {point: Nd,lineStart: Od,lineEnd: Pd,polygonStart: function() {
            Md.lineStart = Qd
        },polygonEnd: function() {
            Md.point = Nd, Md.lineStart = Od, Md.lineEnd = Pd
        }};
    a.geo.path = function() {
        function g(c) {
            return c && a.geo.stream(c, e(f.pointRadius(typeof b == "function" ? +b.apply(this, arguments) : b))), f.result()
        }
        var b = 4.5, c, d, e, f;
        return g.area = function(b) {
            return Hd = 0, a.geo.stream(b, e(Jd)), Hd
        }, g.centroid = function(b) {
            return Ec = Gc = Hc = Ic = 0, a.geo.stream(b, e(Md)), Ic ? [Gc / Ic, Hc / Ic] : undefined
        }, g.bounds = function(a) {
            return Dc(e)(a)
        }, g.projection = function(a) {
            return arguments.length ? (e = (c = a) ? a.stream || Td(a) : Zb, g) : c
        }, g.context = function(a) {
            return arguments.length ? (f = (d = a) == null ? new Ld : new Rd(a), g) : d
        }, g.pointRadius = function(a) {
            return arguments.length ? (b = typeof a == "function" ? a : +a, g) : b
        }, g.projection(a.geo.albersUsa()).context(null)
    }, a.geo.albers = function() {
        return a.geo.conicEqualArea().parallels([29.5, 45.5]).rotate([98, 0]).center([0, 38]).scale(1e3)
    };
    var Vd = Ud(function(a) {
        return Math.sqrt(2 / (1 + a))
    }, function(a) {
        return 2 * Math.asin(a / 2)
    });
    (a.geo.azimuthalEqualArea = function() {
        return md(Vd)
    }).raw = Vd;
    var Wd = Ud(function(a) {
        var b = Math.acos(a);
        return b && b / Math.sin(b)
    }, Zb);
    (a.geo.azimuthalEquidistant = function() {
        return md(Wd)
    }).raw = Wd, (a.geo.conicConformal = function() {
        return Ed(Xd)
    }).raw = Xd, (a.geo.conicEquidistant = function() {
        return Ed(Yd)
    }).raw = Yd;
    var Zd = Ud(function(a) {
        return 1 / a
    }, Math.atan);
    (a.geo.gnomonic = function() {
        return md(Zd)
    }).raw = Zd, $d.invert = function(a, b) {
        return [a, 2 * Math.atan(Math.exp(b)) - ob / 2]
    }, (a.geo.mercator = function() {
        return _d($d)
    }).raw = $d;
    var ae = Ud(function() {
        return 1
    }, Math.asin);
    (a.geo.orthographic = function() {
        return md(ae)
    }).raw = ae;
    var be = Ud(function(a) {
        return 1 / (1 + a)
    }, function(a) {
        return 2 * Math.atan(a)
    });
    (a.geo.stereographic = function() {
        return md(be)
    }).raw = be, ce.invert = function(a, b) {
        return [Math.atan2(vb(a), Math.cos(b)), ub(Math.sin(b) / wb(a))]
    }, (a.geo.transverseMercator = function() {
        return _d(ce)
    }).raw = ce, a.geom = {}, a.svg = {}, a.svg.line = function() {
        return de(Zb)
    };
    var ge = a.map({linear: he,"linear-closed": ie,"step-before": je,"step-after": ke,basis: qe,"basis-open": re,"basis-closed": se,bundle: te,cardinal: ne,"cardinal-open": le,"cardinal-closed": me,monotone: Ce});
    ge.forEach(function(a, b) {
        b.key = a, b.closed = /-closed$/.test(a)
    });
    var ve = [0, 2 / 3, 1 / 3, 0], we = [0, 1 / 3, 2 / 3, 0], xe = [0, 1 / 6, 2 / 3, 1 / 6];
    a.geom.hull = function(a) {
        function d(a) {
            if (a.length < 3)
                return [];
            var d = Yb(b), e = Yb(c), f = a.length, g, h = f - 1, i = [], j = [], k, l, m, n = 0, o, p, q, r, s, t, u, v;
            if (d === ee && c === fe)
                g = a;
            else
                for (l = 0, g = []; l < f; ++l)
                    g.push([+d.call(this, k = a[l], l), +e.call(this, k, l)]);
            for (l = 1; l < f; ++l)
                g[l][1] < g[n][1] ? n = l : g[l][1] == g[n][1] && (n = g[l][0] < g[n][0] ? l : n);
            for (l = 0; l < f; ++l) {
                if (l === n)
                    continue;
                p = g[l][1] - g[n][1], o = g[l][0] - g[n][0], i.push({angle: Math.atan2(p, o),index: l})
            }
            i.sort(function(a, b) {
                return a.angle - b.angle
            }), u = i[0].angle, t = i[0].index, s = 0;
            for (l = 1; l < h; ++l)
                m = i[l].index, u == i[l].angle ? (o = g[t][0] - g[n][0], p = g[t][1] - g[n][1], q = g[m][0] - g[n][0], r = g[m][1] - g[n][1], o * o + p * p >= q * q + r * r ? i[l].index = -1 : (i[s].index = -1, u = i[l].angle, s = l, t = m)) : (u = i[l].angle, s = l, t = m);
            j.push(n);
            for (l = 0, m = 0; l < 2; ++m)
                i[m].index !== -1 && (j.push(i[m].index), l++);
            v = j.length;
            for (; m < h; ++m) {
                if (i[m].index === -1)
                    continue;
                while (!De(j[v - 2], j[v - 1], i[m].index, g))
                    --v;
                j[v++] = i[m].index
            }
            var w = [];
            for (l = 0; l < v; ++l)
                w.push(a[j[l]]);
            return w
        }
        var b = ee, c = fe;
        return arguments.length ? d(a) : (d.x = function(a) {
            return arguments.length ? (b = a, d) : b
        }, d.y = function(a) {
            return arguments.length ? (c = a, d) : c
        }, d)
    }, a.geom.polygon = function(a) {
        return a.area = function() {
            var b = 0, c = a.length, d = a[c - 1][1] * a[0][0] - a[c - 1][0] * a[0][1];
            while (++b < c)
                d += a[b - 1][1] * a[b][0] - a[b - 1][0] * a[b][1];
            return d * .5
        }, a.centroid = function(b) {
            var c = -1, d = a.length, e = 0, f = 0, g, h = a[d - 1], i;
            arguments.length || (b = -1 / (6 * a.area()));
            while (++c < d)
                g = h, h = a[c], i = g[0] * h[1] - h[0] * g[1], e += (g[0] + h[0]) * i, f += (g[1] + h[1]) * i;
            return [e * b, f * b]
        }, a.clip = function(b) {
            var c, d = -1, e = a.length, f, g, h = a[e - 1], i, j, k;
            while (++d < e) {
                c = b.slice(), b.length = 0, i = a[d], j = c[(g = c.length) - 1], f = -1;
                while (++f < g)
                    k = c[f], Ee(k, h, i) ? (Ee(j, h, i) || b.push(Fe(j, k, h, i)), b.push(k)) : Ee(j, h, i) && b.push(Fe(j, k, h, i)), j = k;
                h = i
            }
            return b
        }, a
    }, a.geom.delaunay = function(a) {
        var b = a.map(function() {
            return []
        }), c = [];
        return He(a, function(c) {
            b[c.region.l.index].push(a[c.region.r.index])
        }), b.forEach(function(b, d) {
            var e = a[d], f = e[0], g = e[1];
            b.forEach(function(a) {
                a.angle = Math.atan2(a[0] - f, a[1] - g)
            }), b.sort(function(a, b) {
                return a.angle - b.angle
            });
            for (var h = 0, i = b.length - 1; h < i; h++)
                c.push([e, b[h], b[h + 1]])
        }), c
    }, a.geom.voronoi = function(b) {
        function g(b) {
            var c, g = b.map(function() {
                return []
            }), h = Yb(d), i = Yb(e), j, k, l = b.length, m = 1e6;
            if (h === ee && i === fe)
                c = b;
            else
                for (c = [], k = 0; k < l; ++k)
                    c.push([+h.call(this, j = b[k], k), +i.call(this, j, k)]);
            He(c, function(a) {
                var b, c, d, e, f, h;
                a.a === 1 && a.b >= 0 ? (b = a.ep.r, c = a.ep.l) : (b = a.ep.l, c = a.ep.r), a.a === 1 ? (f = b ? b.y : -m, d = a.c - a.b * f, h = c ? c.y : m, e = a.c - a.b * h) : (d = b ? b.x : -m, f = a.c - a.a * d, e = c ? c.x : m, h = a.c - a.a * e);
                var i = [d, f], j = [e, h];
                g[a.region.l.index].push(i, j), g[a.region.r.index].push(i, j)
            }), g = g.map(function(b, d) {
                var e = c[d][0], f = c[d][1], g = b.map(function(a) {
                    return Math.atan2(a[0] - e, a[1] - f)
                }), h = a.range(b.length).sort(function(a, b) {
                    return g[a] - g[b]
                });
                return h.filter(function(a, b) {
                    return !b || g[a] - g[h[b - 1]] > pb
                }).map(function(a) {
                    return b[a]
                })
            }), g.forEach(function(a, b) {
                var d = a.length;
                if (!d)
                    return a.push([-m, -m], [-m, m], [m, m], [m, -m]);
                if (d > 2)
                    return;
                var e = c[b], f = a[0], g = a[1], h = e[0], i = e[1], j = f[0], k = f[1], l = g[0], n = g[1], o = Math.abs(l - j), p = n - k;
                if (Math.abs(p) < pb) {
                    var q = i < k ? -m : m;
                    a.push([-m, q], [m, q])
                } else if (o < pb) {
                    var r = h < j ? -m : m;
                    a.push([r, -m], [r, m])
                } else {
                    var q = (l - j) * (k - i) < (j - h) * (n - k) ? m : -m, s = Math.abs(p) - o;
                    Math.abs(s) < pb ? a.push([p < 0 ? q : -q, q]) : (s > 0 && (q *= -1), a.push([-m, q], [m, q]))
                }
            });
            if (f)
                for (k = 0; k < l; ++k)
                    f(g[k]);
            for (k = 0; k < l; ++k)
                g[k].point = b[k];
            return g
        }
        var c = null, d = ee, e = fe, f;
        return arguments.length ? g(b) : (g.x = function(a) {
            return arguments.length ? (d = a, g) : d
        }, g.y = function(a) {
            return arguments.length ? (e = a, g) : e
        }, g.size = function(b) {
            return arguments.length ? (b == null ? f = null : (c = [+b[0], +b[1]], f = a.geom.polygon([[0, 0], [0, c[1]], c, [c[0], 0]]).clip), g) : c
        }, g.links = function(a) {
            var b, c = a.map(function() {
                return []
            }), f = [], g = Yb(d), h = Yb(e), i, j, k = a.length;
            if (g === ee && h === fe)
                b = a;
            else
                for (j = 0; j < k; ++j)
                    b.push([+g.call(this, i = a[j], j), +h.call(this, i, j)]);
            return He(b, function(b) {
                var d = b.region.l.index, e = b.region.r.index;
                if (c[d][e])
                    return;
                c[d][e] = c[e][d] = !0, f.push({source: a[d],target: a[e]})
            }), f
        }, g.triangles = function(b) {
            if (d === ee && e === fe)
                return a
                .geom.delaunay(b);
            var c, f, g = Yb(d), h = Yb(e), i, j, k;
            for (j = 0, c = [], k = b.length; j < k; ++j)
                f = [+g.call(this, i = b[j], j), +h.call(this, i, j)], f.data = i, c.push(f);
            return a.geom.delaunay(c).map(function(a) {
                return a.map(function(a) {
                    return a.data
                })
            })
        }, g)
    };
    var Ge = {l: "r",r: "l"};
    a.geom.quadtree = function(a, b, c, d, e) {
        function i(a) {
            function x(a, b, c, d, e, f, g, h) {
                if (isNaN(c) || isNaN(d))
                    return;
                if (a.leaf) {
                    var i = a.x, j = a.y;
                    if (i != null)
                        if (Math.abs(i - c) + Math.abs(j - d) < .01)
                            y(a, b, c, d, e, f, g, h);
                        else {
                            var k = a.point;
                            a.x = a.y = a.point = null, y(a, k, i, j, e, f, g, h), y(a, b, c, d, e, f, g, h)
                        }
                    else
                        a.x = c, a.y = d, a.point = b
                } else
                    y(a, b, c, d, e, f, g, h)
            }
            function y(a, b, c, d, e, f, g, h) {
                var i = (e + g) * .5, j = (f + h) * .5, k = c >= i, l = d >= j, m = (l << 1) + k;
                a.leaf = !1, a = a.nodes[m] || (a.nodes[m] = Ke()), k ? e = i : g = i, l ? f = j : h = j, x(a, b, c, d, e, f, g, h)
            }
            var i, j = Yb(f), k = Yb(g), l, m, n, o, p, q, r, s;
            if (b != null)
                p = b, q = c, r = d, s = e;
            else {
                r = s = -(p = q = Infinity), l = [], m = [], o = a.length;
                if (h)
                    for (n = 0; n < o; ++n)
                        i = a[n], i.x < p && (p = i.x), i.y < q && (q = i.y), i.x > r && (r = i.x), i.y > s && (s = i.y), l.push(i.x), m.push(i.y);
                else
                    for (n = 0; n < o; ++n) {
                        var t = +j(i = a[n], n), u = +k(i, n);
                        t < p && (p = t), u < q && (q = u), t > r && (r = t), u > s && (s = u), l.push(t), m.push(u)
                    }
            }
            var v = r - p, w = s - q;
            v > w ? s = q + v : r = p + w;
            var z = Ke();
            z.add = function(a) {
                x(z, a, +j(a, ++n), +k(a, n), p, q, r, s)
            }, z.visit = function(a) {
                Le(a, z, p, q, r, s)
            }, n = -1;
            if (b == null) {
                while (++n < o)
                    x(z, a[n], l[n], m[n], p, q, r, s);
                --n
            } else
                a.forEach(z.add);
            return l = m = a = i = null, z
        }
        var f = ee, g = fe, h;
        return (h = arguments.length) ? (f = Ie, g = Je, h === 3 && (e = c, d = b, c = b = 0), i(a)) : (i.x = function(a) {
            return arguments.length ? (f = a, i) : f
        }, i.y = function(a) {
            return arguments.length ? (g = a, i) : g
        }, i.size = function(a) {
            return arguments.length ? (a == null ? b = c = d = e = null : (b = c = 0, d = +a[0], e = +a[1]), i) : b == null ? null : [d, e]
        }, i)
    }, a.interpolateRgb = Me, a.transform = function(b) {
        var d = c.createElementNS(a.ns.prefix.svg, "g");
        return (a.transform = function(a) {
            d.setAttribute("transform", a);
            var b = d.transform.baseVal.consolidate();
            return new Ne(b ? b.matrix : Re)
        })(b)
    }, Ne.prototype.toString = function() {
        return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
    };
    var Re = {a: 1,b: 0,c: 0,d: 1,e: 0,f: 0};
    a.interpolateNumber = Se, a.interpolateTransform = Te, a.interpolateObject = Ue, a.interpolateString = Ve;
    var We = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
    a.interpolate = Xe, a.interpolators = [function(a, b) {
            var c = typeof b;
            return (c === "string" || c !== typeof a ? Xb.has(b) || /^(#|rgb\(|hsl\()/.test(b) ? Me : Ve : b instanceof jb ? Me : c === "object" ? Array.isArray(b) ? Ze : Ue : Se)(a, b)
        }], a.interpolateArray = Ze;
    var $e = function() {
        return Zb
    }, _e = a.map({linear: $e,poly: hf,quad: function() {
            return ef
        },cubic: function() {
            return ff
        },sin: function() {
            return jf
        },exp: function() {
            return kf
        },circle: function() {
            return lf
        },elastic: mf,back: nf,bounce: function() {
            return of
        }}), af = a.map({"in": Zb,out: cf,"in-out": df,"out-in": function(a) {
            return df(cf(a))
        }});
    a.ease = function(a) {
        var b = a.indexOf("-"), c = b >= 0 ? a.substring(0, b) : a, d = b >= 0 ? a.substring(b + 1) : "in";
        return c = _e.get(c) || $e, d = af.get(d) || Zb, bf(d(c.apply(null, Array.prototype.slice.call(arguments, 1))))
    }, a.interpolateHcl = pf, a.interpolateHsl = qf, a.interpolateLab = rf, a.interpolateRound = sf, a.layout = {}, a.layout.bundle = function() {
        return function(a) {
            var b = [], c = -1, d = a.length;
            while (++c < d)
                b.push(vf(a[c]));
            return b
        }
    }, a.layout.chord = function() {
        function k() {
            var b = {}, k = [], m = a.range(f), n = [], o, p, q, r, s;
            c = [], d = [], o = 0, r = -1;
            while (++r < f) {
                p = 0, s = -1;
                while (++s < f)
                    p += e[r][s];
                k.push(p), n.push(a.range(f)), o += p
            }
            h && m.sort(function(a, b) {
                return h(k[a], k[b])
            }), i && n.forEach(function(a, b) {
                a.sort(function(a, c) {
                    return i(e[b][a], e[b][c])
                })
            }), o = (2 * ob - g * f) / o, p = 0, r = -1;
            while (++r < f) {
                q = p, s = -1;
                while (++s < f) {
                    var t = m[r], u = n[t][s], v = e[t][u], w = p, x = p += v * o;
                    b[t + "-" + u] = {index: t,subindex: u,startAngle: w,endAngle: x,value: v}
                }
                d[t] = {index: t,startAngle: q,endAngle: p,value: (p - q) / o}, p += g
            }
            r = -1;
            while (++r < f) {
                s = r - 1;
                while (++s < f) {
                    var y = b[r + "-" + s], z = b[s + "-" + r];
                    (y.value || z.value) && c.push(y.value < z.value ? {source: z,target: y} : {source: y,target: z})
                }
            }
            j && l()
        }
        function l() {
            c.sort(function(a, b) {
                return j((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2)
            })
        }
        var b = {}, c, d, e, f, g = 0, h, i, j;
        return b.matrix = function(a) {
            return arguments.length ? (f = (e = a) && e.length, c = d = null, b) : e
        }, b.padding = function(a) {
            return arguments.length ? (g = a, c = d = null, b) : g
        }, b.sortGroups = function(a) {
            return arguments.length ? (h = a, c = d = null, b) : h
        }, b.sortSubgroups = function(a) {
            return arguments.length ? (i = a, c = null, b) : i
        }, b.sortChords = function(a) {
            return arguments.length ? (j = a, c && l(), b) : j
        }, b.chords = function() {
            return c || k(), c
        }, b.groups = function() {
            return d || k(), d
        }, b
    }, a.layout.force = function() {
        function r(a) {
            return function(b, c, d, e) {
                if (b.point !== a) {
                    var f = b.cx - a.x, g = b.cy - a.y, h = 1 / Math.sqrt(f * f + g * g);
                    if ((e - c) * h < l) {
                        var i = b.charge * h * h;
                        return a.px -= f * i, a.py -= g * i, !0
                    }
                    if (b.point && isFinite(h)) {
                        var i = b.pointCharge * h * h;
                        a.px -= f * i, a.py -= g * i
                    }
                }
                return !b.charge
            }
        }
        function s(c) {
            c.px = a.event.x, c.py = a.event.y, b.resume()
        }
        var b = {}, c = a.dispatch("start", "tick", "end"), d = [1, 1], e, f, g = .9, h = Df, i = Ef, j = -30, k = .1, l = .8, m = [], n = [], o, p, q;
        return b.tick = function() {
            if ((f *= .99) < .005)
                return c.end({type: "end",alpha: f = 0}), !0;
            var b = m.length, e = n.length, h, i, l, s, t, u, v, w, x;
            for (i = 0; i < e; ++i) {
                l = n[i], s = l.source, t = l.target, w = t.x - s.x, x = t.y - s.y;
                if (u = w * w + x * x)
                    u = f * p[i] * ((u = Math.sqrt(u)) - o[i]) / u, w *= u, x *= u, t.x -= w * (v = s.weight / (t.weight + s.weight)), t.y -= x * v, s.x += w * (v = 1 - v), s.y += x * v
            }
            if (v = f * k) {
                w = d[0] / 2, x = d[1] / 2, i = -1;
                if (v)
                    while (++i < b)
                        l = m[i], l.x += (w - l.x) * v, l.y += (x - l.y) * v
            }
            if (j) {
                Cf(h = a.geom.quadtree(m), f, q), i = -1;
                while (++i < b)
                    (l = m[i]).fixed || h.visit(r(l))
            }
            i = -1;
            while (++i < b)
                l = m[i], l.fixed ? (l.x = l.px, l.y = l.py) : (l.x -= (l.px - (l.px = l.x)) * g, l.y -= (l.py - (l.py = l.y)) * g);
            c.tick({type: "tick",alpha: f})
        }, b.nodes = function(a) {
            return arguments.length ? (m = a, b) : m
        }, b.links = function(a) {
            return arguments.length ? (n = a, b) : n
        }, b.size = function(a) {
            return arguments.length ? (d = a, b) : d
        }, b.linkDistance = function(a) {
            return arguments.length ? (h = typeof a == "function" ? a : +a, b) : h
        }, b.distance = b.linkDistance, b.linkStrength = function(a) {
            return arguments.length ? (i = typeof a == "function" ? a : +a, b) : i
        }, b.friction = function(a) {
            return arguments.length ? (g = +a, b) : g
        }, b.charge = function(a) {
            return arguments.length ? (j = typeof a == "function" ? a : +a, b) : j
        }, b.gravity = function(a) {
            return arguments.length ? (k = +a, b) : k
        }, b.theta = function(a) {
            return arguments.length ? (l = +a, b) : l
        }, b.alpha = function(d) {
            return arguments.length ? (d = +d, f ? d > 0 ? f = d : f = 0 : d > 0 && (c.start({type: "start",alpha: f = d}), a.timer(b.tick)), b) : f
        }, b.start = function() {
            function s(b, c) {
                var d = t(a), e = -1, f = d.length, g;
                while (++e < f)
                    if (!isNaN(g = d[e][b]))
                        return g;
                return Math.random() * c
            }
            function t() {
                if (!l) {
                    l = [];
                    for (c = 0; c < e; ++c)
                        l[c] = [];
                    for (c = 0; c < f; ++c) {
                        var b = n[c];
                        l[b.source.index].push(b.target), l[b.target.index].push(b.source)
                    }
                }
                return l[a]
            }
            var a, c, e = m.length, f = n.length, g = d[0], k = d[1], l, r;
            for (a = 0; a < e; ++a)
                (r = m[a]).index = a, r.weight = 0;
            for (a = 0; a < f; ++a)
                r = n[a], typeof r.source == "number" && (r.source = m[r.source]), typeof r.target == "number" && (r.target = m[r.target]), ++r.source.weight, ++r.target.weight;
            for (a = 0; a < e; ++a)
                r = m[a], isNaN(r.x) && (r.x = s("x", g)), isNaN(r.y) && (r.y = s("y", k)), isNaN(r.px) && (r.px = r.x), isNaN(r.py) && (r.py = r.y);
            o = [];
            if (typeof h == "function")
                for (a = 0; a < f; ++a)
                    o[a] = +h.call(this, n[a], a);
            else
                for (a = 0; a < f; ++a)
                    o[a] = h;
            p = [];
            if (typeof i == "function")
                for (a = 0; a < f; ++a)
                    p[a] = +i.call(this, n[a], a);
            else
                for (a = 0; a < f; ++a)
                    p[a] = i;
            q = [];
            if (typeof j == "function")
                for (a = 0; a < e; ++a)
                    q[a] = +j.call(this, m[a], a);
            else
                for (a = 0; a < e; ++a)
                    q[a] = j;
            return b.resume()
        }, b.resume = function() {
            return b.alpha(.1)
        }, b.stop = function() {
            return b.alpha(0)
        }, b.drag = function() {
            e || (e = a.behavior.drag().origin(Zb).on("dragstart.force", yf).on("drag.force", s).on("dragend.force", zf));
            if (!arguments.length)
                return e;
            this.on("mouseover.force", Af).on("mouseout.force", Bf).call(e)
        }, a.rebind(b, c, "on")
    };
    var Df = 20, Ef = 1;
    a.layout.hierarchy = function() {
        function d(e, g, h) {
            var i = b.call(f, e, g);
            e.depth = g, h.push(e);
            if (i && (k = i.length)) {
                var j = -1, k, l = e.children = [], m = 0, n = g + 1, o;
                while (++j < k)
                    o = d(i[j], n, h), o.parent = e, l.push(o), m += o.value;
                a && l.sort(a), c && (e.value = m)
            } else
                c && (e.value = +c.call(f, e, g) || 0);
            return e
        }
        function e(a, b) {
            var d = a.children, g = 0;
            if (d && (i = d.length)) {
                var h = -1, i, j = b + 1;
                while (++h < i)
                    g += e(d[h], j)
            } else
                c && (g = +c.call(f, a, b) || 0);
            return c && (a.value = g), g
        }
        function f(a) {
            var b = [];
            return d(a, 0, b), b
        }
        var a = If, b = Gf, c = Hf;
        return f.sort = function(b) {
            return arguments.length ? (a = b, f) : a
        }, f.children = function(a) {
            return arguments.length ? (b = a, f) : b
        }, f.value = function(a) {
            return arguments.length ? (c = a, f) : c
        }, f.revalue = function(a) {
            return e(a, 0), a
        }, f
    }, a.layout.partition = function() {
        function d(a, b, c, e) {
            var f = a.children;
            a.x = b, a.y = a.depth * e, a.dx = c, a.dy = e;
            if (f && (h = f.length)) {
                var g = -1, h, i, j;
                c = a.value ? c / a.value : 0;
                while (++g < h)
                    d(i = f[g], b, j = i.value * c, e), b += j
            }
        }
        function e(a) {
            var b = a.children, c = 0;
            if (b && (f = b.length)) {
                var d = -1, f;
                while (++d < f)
                    c = Math.max(c, e(b[d]))
            }
            return 1 + c
        }
        function f(a, f) {
            var g = b.call(this, a, f);
            return d(g[0], 0, c[0], c[1] / e(g[0])), g
        }
        var b = a.layout.hierarchy(), c = [1, 1];
        return f.size = function(a) {
            return arguments.length ? (c = a, f) : c
        }, Ff(f, b)
    }, a.layout.pie = function() {
        function f(g) {
            var h = g.map(function(a, c) {
                return +b.call(f, a, c)
            }), i = +(typeof d == "function" ? d.apply(this, arguments) : d), j = ((typeof e == "function" ? e.apply(this, arguments) : e) - i) / a.sum(h), k = a.range(g.length);
            c != null && k.sort(c === Kf ? function(a, b) {
                return h[b] - h[a]
            } : function(a, b) {
                return c(g[a], g[b])
            });
            var l = [];
            return k.forEach(function(a) {
                var b;
                l[a] = {data: g[a],value: b = h[a],startAngle: i,endAngle: i += b * j}
            }), l
        }
        var b = Number, c = Kf, d = 0, e = 2 * ob;
        return f.value = function(a) {
            return arguments.length ? (b = a, f) : b
        }, f.sort = function(a) {
            return arguments.length ? (c = a, f) : c
        }, f.startAngle = function(a) {
            return arguments.length ? (d = a, f) : d
        }, f.endAngle = function(a) {
            return arguments.length ? (e = a, f) : e
        }, f
    };
    var Kf = {};
    a.layout.stack = function() {
        function h(i, j) {
            var k = i.map(function(a, c) {
                return b.call(h, a, c)
            }), l = k.map(function(a) {
                return a.map(function(a, b) {
                    return [f.call(h, a, b), g.call(h, a, b)]
                })
            }), m = c.call(h, l, j);
            k = a.permute(k, m), l = a.permute(l, m);
            var n = d.call(h, l, j), o = k.length, p = k[0].length, q, r, s;
            for (r = 0; r < p; ++r) {
                e.call(h, k[0][r], s = n[r], l[0][r][1]);
                for (q = 1; q < o; ++q)
                    e.call(h, k[q][r], s += l[q - 1][r][1], l[q][r][1])
            }
            return i
        }
        var b = Zb, c = Qf, d = Rf, e = Nf, f = Lf, g = Mf;
        return h.values = function(a) {
            return arguments.length ? (b = a, h) : b
        }, h.order = function(a) {
            return arguments.length ? (c = typeof a == "function" ? a : Of.get(a) || Qf, h) : c
        }, h.offset = function(a) {
            return arguments.length ? (d = typeof a == "function" ? a : Pf.get(a) || Rf, h) : d
        }, h.x = function(a) {
            return arguments.length ? (f = a, h) : f
        }, h.y = function(a) {
            return arguments.length ? (g = a, h) : g
        }, h.out = function(a) {
            return arguments.length ? (e = a, h) : e
        }, h
    };
    var Of = a.map({"inside-out": function(b) {
            var c = b.length, d, e, f = b.map(Sf), g = b.map(Tf), h = a.range(c).sort(function(a, b) {
                return f[a] - f[b]
            }), i = 0, j = 0, k = [], l = [];
            for (d = 0; d < c; ++d)
                e = h[d], i < j ? (i += g[e], k.push(e)) : (j += g[e], l.push(e));
            return l.reverse().concat(k)
        },reverse: function(b) {
            return a.range(b.length).reverse()
        },"default": Qf}), Pf = a.map({silhouette: function(a) {
            var b = a.length, c = a[0].length, d = [], e = 0, f, g, h, i = [];
            for (g = 0; g < c; ++g) {
                for (f = 0, h = 0; f < b; f++)
                    h += a[f][g][1];
                h > e && (e = h), d.push(h)
            }
            for (g = 0; g < c; ++g)
                i[g] = (e - d[g]) / 2;
            return i
        },wiggle: function(a) {
            var b = a.length, c = a[0], d = c.length, e, f, g, h, i, j, k, l, m, n = [];
            n[0] = l = m = 0;
            for (f = 1; f < d; ++f) {
                for (e = 0, h = 0; e < b; ++e)
                    h += a[e][f][1];
                for (e = 0, i = 0, k = c[f][0] - c[f - 1][0]; e < b; ++e) {
                    for (g = 0, j = (a[e][f][1] - a[e][f - 1][1]) / (2 * k); g < e; ++g)
                        j += (a[g][f][1] - a[g][f - 1][1]) / k;
                    i += j * a[e][f][1]
                }
                n[f] = l -= h ? i / h * k : 0, l < m && (m = l)
            }
            for (f = 0; f < d; ++f)
                n[f] -= m;
            return n
        },expand: function(a) {
            var b = a.length, c = a[0].length, d = 1 / b, e, f, g, h = [];
            for (f = 0; f < c; ++f) {
                for (e = 0, g = 0; e < b; e++)
                    g += a[e][f][1];
                if (g)
                    for (e = 0; e < b; e++)
                        a[e][f][1] /= g;
                else
                    for (e = 0; e < b; e++)
                        a[e][f][1] = d
            }
            for (f = 0; f < c; ++f)
                h[f] = 0;
            return h
        },zero: Rf});
    a.layout.histogram = function() {
        function f(f, g) {
            var h = [], i = f.map(c, this), j = d.call(this, i, g), k = e.call(this, j, i, g), l, g = -1, m = i.length, n = k.length - 1, o = b ? 1 : 1 / m, p;
            while (++g < n)
                l = h[g] = [], l.dx = k[g + 1] - (l.x = k[g]), l.y = 0;
            if (n > 0) {
                g = -1;
                while (++g < m)
                    p = i[g], p >= j[0] && p <= j[1] && (l = h[a.bisect(k, p, 1, n) - 1], l.y += o, l.push(f[g]))
            }
            return h
        }
        var b = !0, c = Number, d = Xf, e = Vf;
        return f.value = function(a) {
            return arguments.length ? (c = a, f) : c
        }, f.range = function(a) {
            return arguments.length ? (d = Yb(a), f) : d
        }, f.bins = function(a) {
            return arguments.length ? (e = typeof a == "number" ? function(b) {
                return Wf(b, a)
            } : Yb(a), f) : e
        }, f.frequency = function(a) {
            return arguments.length ? (b = !!a, f) : b
        }, f
    }, a.layout.tree = function() {
        function e(a, e) {
            function h(a, b) {
                var d = a.children, e = a._tree;
                if (d && (f = d.length)) {
                    var f, g = d[0], i, k = g, l, m = -1;
                    while (++m < f)
                        l = d[m], h(l, i), k = j(l, i, k), i = l;
                    eg(a);
                    var n = .5 * (g._tree.prelim + l._tree.prelim);
                    b ? (e.prelim = b._tree.prelim + c(a, b), e.mod = e.prelim - n) : e.prelim = n
                } else
                    b && (e.prelim = b._tree.prelim + c(a, b))
            }
            function i(a, b) {
                a.x = a._tree.prelim + b;
                var c = a.children;
                if (c && (e = c.length)) {
                    var d = -1, e;
                    b += a._tree.mod;
                    while (++d < e)
                        i(c[d], b)
                }
            }
            function j(a, b, d) {
                if (b) {
                    var e = a, f = a, g = b, h = a.parent.children[0], i = e._tree.mod, j = f._tree.mod, k = g._tree.mod, l = h._tree.mod, m;
                    while (g = $f(g), e = Zf(e), g && e)
                        h = Zf(h), f = $f(f), f._tree.ancestor = a, m = g._tree.prelim + k - e._tree.prelim - i + c(g, e), m > 0 && (fg(gg(g, a, d), a, m), i += m, j += m), k += g._tree.mod, i += e._tree.mod, l += h._tree.mod, j += f._tree.mod;
                    g && !$f(f) && (f._tree.thread = g, f._tree.mod += k - j), e && !Zf(h) && (h._tree.thread = e, h._tree.mod += i - l, d = a)
                }
                return d
            }
            var f = b.call(this, a, e), g = f[0];
            dg(g, function(a, b) {
                a._tree = {ancestor: a,prelim: 0,mod: 0,change: 0,shift: 0,number: b ? b._tree.number + 1 : 0}
            }), h(g), i(g, -g._tree.prelim);
            var k = _f(g, bg), l = _f(g, ag), m = _f(g, cg), n = k.x - c(k, l) / 2, o = l.x + c(l, k) / 2, p = m.depth || 1;
            return dg(g, function(a) {
                a.x = (a.x - n) / (o - n) * d[0], a.y = a.depth / p * d[1], delete a._tree
            }), f
        }
        var b = a.layout.hierarchy().sort(null).value(null), c = Yf, d = [1, 1];
        return e.separation = function(a) {
            return arguments.length ? (c = a, e) : c
        }, e.size = function(a) {
            return arguments.length ? (d = a, e) : d
        }, Ff(e, b)
    }, a.layout.pack = function() {
        function e(a, e) {
            var f = b.call(this, a, e), g = f[0];
            g.x = 0, g.y = 0, dg(g, function(a) {
                a.r = Math.sqrt(a.value)
            }), dg(g, lg);
            var h = d[0], i = d[1], j = Math.max(2 * g.r / h, 2 * g.r / i);
            if (c > 0) {
                var k = c * j / 2;
                dg(g, function(a) {
                    a.r += k
                }), dg(g, lg), dg(g, function(a) {
                    a.r -= k
                }), j = Math.max(2 * g.r / h, 2 * g.r / i)
            }
            return og(g, h / 2, i / 2, 1 / j), f
        }
        var b = a.layout.hierarchy().sort(hg), c = 0, d = [1, 1];
        return e.size = function(a) {
            return arguments.length ? (d = a, e) : d
        }, e.padding = function(a) {
            return arguments.length ? (c = +a, e) : c
        }, Ff(e, b)
    }, a.layout.cluster = function() {
        function e(a, e) {
            var f = b.call(this, a, e), g = f[0], h, i = 0;
            dg(g, function(a) {
                var b = a.children;
                b && b.length ? (a.x = rg(b), a.y = qg(b)) : (a.x = h ? i += c(a, h) : 0, a.y = 0, h = a)
            });
            var j = sg(g), k = tg(g), l = j.x - c(j, k) / 2, m = k.x + c(k, j) / 2;
            return dg(g, function(a) {
                a.x = (a.x - l) / (m - l) * d[0], a.y = (1 - (g.y ? a.y / g.y : 1)) * d[1]
            }), f
        }
        var b = a.layout.hierarchy().sort(null).value(null), c = Yf, d = [1, 1];
        return e.separation = function(a) {
            return arguments.length ? (c = a, e) : c
        }, e.size = function(a) {
            return arguments.length ? (d = a, e) : d
        }, Ff(e, b)
    }, a.layout.treemap = function() {
        function k(a, b) {
            var c = -1, d = a.length, e, f;
            while (++c < d)
                f = (e = a[c]).value * (b < 0 ? 0 : b), e.area = isNaN(f) || f <= 0 ? 0 : f
        }
        function l(a) {
            var b = a.children;
            if (b && b.length) {
                var c = f(a), d = [], e = b.slice(), g, h = Infinity, j, m = i === "slice" ? c.dx : i === "dice" ? c.dy : i === "slice-dice" ? a.depth & 1 ? c.dy : c.dx : Math.min(c.dx, c.dy), p;
                k(e, c.dx * c.dy / a.value), d.area = 0;
                while ((p = e.length) > 0)
                    d.push(g = e[p - 1]), d.area += g.area, i !== "squarify" || (j = n(d, m)) <= h ? (e.pop(), h = j) : (d.area -= d.pop().area, o(d, m, c, !1), m = Math.min(c.dx, c.dy), d.length = d.area = 0, h = Infinity);
                d.length && (o(d, m, c, !0), d.length = d.area = 0), b.forEach(l)
            }
        }
        function m(a) {
            var b = a.children;
            if (b && b.length) {
                var c = f(a), d = b.slice(), e, g = [];
                k(d, c.dx * c.dy / a.value), g.area = 0;
                while (e = d.pop())
                    g.push(e), g.area += e.area, e.z != null && (o(g, e.z ? c.dx : c.dy, c, !d.length), g.length = g.area = 0);
                b.forEach(m)
            }
        }
        function n(a, b) {
            var c = a.area, d, e = 0, f = Infinity, g = -1, h = a.length;
            while (++g < h) {
                if (!(d = a[g].area))
                    continue;
                d < f && (f = d), d > e && (e = d)
            }
            return c *= c, b *= b, c ? Math.max(b * e * j / c, c / (b * f * j)) : Infinity
        }
        function o(a, b, d, e) {
            var f = -1, g = a.length, h = d.x, i = d.y, j = b ? c(a.area / b) : 0, k;
            if (b == d.dx) {
                if (e || j > d.dy)
                    j = d.dy;
                while (++f < g)
                    k = a[f], k.x = h, k.y = i, k.dy = j, h += k.dx = Math.min(d.x + d.dx - h, j ? c(k.area / j) : 0);
                k.z = !0, k.dx += d.x + d.dx - h, d.y += j, d.dy -= j
            } else {
                if (e || j > d.dx)
                    j = d.dx;
                while (++f < g)
                    k = a[f], k.x = h, k.y = i, k.dx = j, i += k.dy = Math.min(d.y + d.dy - i, j ? c(k.area / j) : 0);
                k.z = !1, k.dy += d.y + d.dy - i, d.x += j, d.dx -= j
            }
        }
        function p(a) {
            var c = h || b(a), e = c[0];
            return e.x = 0, e.y = 0, e.dx = d[0], e.dy = d[1], h && b.revalue(e), k([e], e.dx * e.dy / e.value), (h ? m : l)(e), g && (h = c), c
        }
        var b = a.layout.hierarchy(), c = Math.round, d = [1, 1], e = null, f = ug, g = !1, h, i = "squarify", j = .5 * (1 + Math.sqrt(5));
        return p.size = function(a) {
            return arguments.length ? (d = a, p) : d
        }, p.padding = function(a) {
            function b(b) {
                var c = a.call(p, b, b.depth);
                return c == null ? ug(b) : vg(b, typeof c == "number" ? [c, c, c, c] : c)
            }
            function c(b) {
                return vg(b, a)
            }
            if (!arguments.length)
                return e;
            var d;
            return f = (e = a) == null ? ug : (d = typeof a) === "function" ? b : d === "number" ? (a = [a, a, a, a], c) : c, p
        }, p.round = function(a) {
            return arguments.length ? (c = a ? Math.round : Number, p) : c != Number
        }, p.sticky = function(a) {
            return arguments.length ? (g = a, h = null, p) : g
        }, p.ratio = function(a) {
            return arguments.length ? (j = a, p) : j
        }, p.mode = function(a) {
            return arguments.length ? (i = a + "", p) : i
        }, Ff(p, b)
    }, a.random = {normal: function(a, b) {
            var c = arguments.length;
            return c < 2 && (b = 1), c < 1 && (a = 0), function() {
                var c, d, e;
                do
                    c = Math.random() * 2 - 1, d = Math.random() * 2 - 1, e = c * c + d * d;
                while (!e || e > 1);
                return a + b * c * Math.sqrt(-2 * Math.log(e) / e)
            }
        },logNormal: function() {
            var b = a.random.normal.apply(a, arguments);
            return function() {
                return Math.exp(b())
            }
        },irwinHall: function(a) {
            return function() {
                for (var b = 0, c = 0; c < a; c++)
                    b += Math.random();
                return b / a
            }
        }}, a.scale = {}, a.scale.linear = function() {
        return Bg([0, 1], [0, 1], Xe, !1)
    }, a.scale.log = function() {
        return Hg(a.scale.linear().domain([0, Math.LN10]), 10, Jg, Kg)
    };
    var Ig = a.format(".0e");
    a.scale.pow = function() {
        return Og(a.scale.linear(), 1)
    }, a.scale.sqrt = function() {
        return a.scale.pow().exponent(.5)
    }, a.scale.ordinal = function() {
        return Qg([], {t: "range",a: [[]]})
    }, a.scale.category10 = function() {
        return a.scale.ordinal().range(Rg)
    }, a.scale.category20 = function() {
        return a.scale.ordinal().range(Sg)
    }, a.scale.category20b = function() {
        return a.scale.ordinal().range(Tg)
    }, a.scale.category20c = function() {
        return a.scale.ordinal().range(Ug)
    };
    var Rg = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"], Sg = ["#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5"], Tg = ["#393b79", "#5254a3", "#6b6ecf", "#9c9ede", "#637939", "#8ca252", "#b5cf6b", "#cedb9c", "#8c6d31", "#bd9e39", "#e7ba52", "#e7cb94", "#843c39", "#ad494a", "#d6616b", "#e7969c", "#7b4173", "#a55194", "#ce6dbd", "#de9ed6"], Ug = ["#3182bd", "#6baed6", "#9ecae1", "#c6dbef", "#e6550d", "#fd8d3c", "#fdae6b", "#fdd0a2", "#31a354", "#74c476", "#a1d99b", "#c7e9c0", "#756bb1", "#9e9ac8", "#bcbddc", "#dadaeb", "#636363", "#969696", "#bdbdbd", "#d9d9d9"];
    a.scale.quantile = function() {
        return Vg([], [])
    }, a.scale.quantize = function() {
        return Wg(0, 1, [0, 1])
    }, a.scale.threshold = function() {
        return Xg([.5], [0, 1])
    }, a.scale.identity = function() {
        return Yg([0, 1])
    }, a.svg.arc = function() {
        function e() {
            var e = a.apply(this, arguments), f = b.apply(this, arguments), g = c.apply(this, arguments) + Zg, h = d.apply(this, arguments) + Zg, i = (h < g && (i = g, g = h, h = i), h - g), j = i < ob ? "0" : "1", k = Math.cos(g), l = Math.sin(g), m = Math.cos(h), n = Math.sin(h);
            return i >= $g ? e ? "M0," + f + "A" + f + "," + f + " 0 1,1 0," + -f + "A" + f + "," + f + " 0 1,1 0," + f + "M0," + e + "A" + e + "," + e + " 0 1,0 0," + -e + "A" + e + "," + e + " 0 1,0 0," + e + "Z" : "M0," + f + "A" + f + "," + f + " 0 1,1 0," + -f + "A" + f + "," + f + " 0 1,1 0," + f + "Z" : e ? "M" + f * k + "," + f * l + "A" + f + "," + f + " 0 " + j + ",1 " + f * m + "," + f * n + "L" + e * m + "," + e * n + "A" + e + "," + e + " 0 " + j + ",0 " + e * k + "," + e * l + "Z" : "M" + f * k + "," + f * l + "A" + f + "," + f + " 0 " + j + ",1 " + f * m + "," + f * n + "L0,0" + "Z"
        }
        var a = _g, b = ah, c = bh, d = ch;
        return e.innerRadius = function(b) {
            return arguments.length ? (a = Yb(b), e) : a
        }, e.outerRadius = function(a) {
            return arguments.length ? (b = Yb(a), e) : b
        }, e.startAngle = function(a) {
            return arguments.length ? (c = Yb(a), e) : c
        }, e.endAngle = function(a) {
            return arguments.length ? (d = Yb(a), e) : d
        }, e.centroid = function() {
            var e = (a.apply(this, arguments) + b.apply(this, arguments)) / 2, f = (c.apply(this, arguments) + d.apply(this, arguments)) / 2 + Zg;
            return [Math.cos(f) * e, Math.sin(f) * e]
        }, e
    };
    var Zg = -ob / 2, $g = 2 * ob - 1e-6;
    a.svg.line.radial = function() {
        var a = de(dh);
        return a.radius = a.x, delete a.x, a.angle = a.y, delete a.y, a
    }, je.reverse = ke, ke.reverse = je, a.svg.area = function() {
        return eh(Zb)
    }, a.svg.area.radial = function() {
        var a = eh(dh);
        return a.radius = a.x, delete a.x, a.innerRadius = a.x0, delete a.x0, a.outerRadius = a.x1, delete a.x1, a.angle = a.y, delete a.y, a.startAngle = a.y0, delete a.y0, a.endAngle = a.y1, delete a.y1, a
    }, a.svg.chord = function() {
        function f(c, d) {
            var e = g(this, a, c, d), f = g(this, b, c, d);
            return "M" + e.p0 + i(e.r, e.p1, e.a1 - e.a0) + (h(e, f) ? j(e.r, e.p1, e.r, e.p0) : j(e.r, e.p1, f.r, f.p0) + i(f.r, f.p1, f.a1 - f.a0) + j(f.r, f.p1, e.r, e.p0)) + "Z"
        }
        function g(a, b, f, g) {
            var h = b.call(a, f, g), i = c.call(a, h, g), j = d.call(a, h, g) + Zg, k = e.call(a, h, g) + Zg;
            return {r: i,a0: j,a1: k,p0: [i * Math.cos(j), i * Math.sin(j)],p1: [i * Math.cos(k), i * Math.sin(k)]}
        }
        function h(a, b) {
            return a.a0 == b.a0 && a.a1 == b.a1
        }
        function i(a, b, c) {
            return "A" + a + "," + a + " 0 " + +(c > ob) + ",1 " + b
        }
        function j(a, b, c, d) {
            return "Q 0,0 " + d
        }
        var a = yd, b = zd, c = fh, d = bh, e = ch;
        return f.radius = function(a) {
            return arguments.length ? (c = Yb(a), f) : c
        }, f.source = function(b) {
            return arguments.length ? (a = Yb(b), f) : a
        }, f.target = function(a) {
            return arguments.length ? (b = Yb(a), f) : b
        }, f.startAngle = function(a) {
            return arguments.length ? (d = Yb(a), f) : d
        }, f.endAngle = function(a) {
            return arguments.length ? (e = Yb(a), f) : e
        }, f
    }, a.svg.diagonal = function() {
        function d(d, e) {
            var f = a.call(this, d, e), g = b.call(this, d, e), h = (f.y + g.y) / 2, i = [f, {x: f.x,y: h}, {x: g.x,y: h}, g];
            return i = i.map(c), "M" + i[0] + "C" + i[1] + " " + i[2] + " " + i[3]
        }
        var a = yd, b = zd, c = gh;
        return d.source = function(b) {
            return arguments.length ? (a = Yb(b), d) : a
        }, d.target = function(a) {
            return arguments.length ? (b = Yb(a), d) : b
        }, d.projection = function(a) {
            return arguments.length ? (c = a, d) : c
        }, d
    }, a.svg.diagonal.radial = function() {
        var b = a.svg.diagonal(), c = gh, d = b.projection;
        return b.projection = function(a) {
            return arguments.length ? d(hh(c = a)) : c
        }, b
    }, a.svg.symbol = function() {
        function c(c, d) {
            return (lh.get(a.call(this, c, d)) || kh)(b.call(this, c, d))
        }
        var a = jh, b = ih;
        return c.type = function(b) {
            return arguments.length ? (a = Yb(b), c) : a
        }, c.size = function(a) {
            return arguments.length ? (b = Yb(a), c) : b
        }, c
    };
    var lh = a.map({circle: kh,cross: function(a) {
            var b = Math.sqrt(a / 5) / 2;
            return "M" + -3 * b + "," + -b + "H" + -b + "V" + -3 * b + "H" + b + "V" + -b + "H" + 3 * b + "V" + b + "H" + b + "V" + 3 * b + "H" + -b + "V" + b + "H" + -3 * b + "Z"
        },diamond: function(a) {
            var b = Math.sqrt(a / (2 * nh)), c = b * nh;
            return "M0," + -b + "L" + c + ",0" + " 0," + b + " " + -c + ",0" + "Z"
        },square: function(a) {
            var b = Math.sqrt(a) / 2;
            return "M" + -b + "," + -b + "L" + b + "," + -b + " " + b + "," + b + " " + -b + "," + b + "Z"
        },"triangle-down": function(a) {
            var b = Math.sqrt(a / mh), c = b * mh / 2;
            return "M0," + c + "L" + b + "," + -c + " " + -b + "," + -c + "Z"
        },"triangle-up": function(a) {
            var b = Math.sqrt(a / mh), c = b * mh / 2;
            return "M0," + -c + "L" + b + "," + c + " " + -b + "," + c + "Z"
        }});
    a.svg.symbolTypes = lh.keys();
    var mh = Math.sqrt(3), nh = Math.tan(30 * qb), ph = [], qh = 0, rh, sh = {ease: gf,delay: 0,duration: 250};
    ph.call = K.call, ph.empty = K.empty, ph.node = K.node, a.transition = function(a) {
        return arguments.length ? rh ? a.transition() : a : fb.transition()
    }, a.transition.prototype = ph, ph.select = function(a) {
        var b = this.id, c = [], d, e, f;
        typeof a != "function" && (a = L(a));
        for (var g = -1, h = this.length; ++g < h; ) {
            c.push(d = []);
            for (var i = this[g], j = -1, k = i.length; ++j < k; )
                (f = i[j]) && (e = a.call(f, f.__data__, j)) ? ("__data__" in f && (e.__data__ = f.__data__), vh(e, j, b, f.__transition__[b]), d.push(e)) : d.push(null)
        }
        return oh(c, b)
    }, ph.selectAll = function(a) {
        var b = this.id, c = [], d, e, f, g, h;
        typeof a != "function" && (a = M(a));
        for (var i = -1, j = this.length; ++i < j; )
            for (var k = this[i], l = -1, m = k.length; ++l < m; )
                if (f = k[l]) {
                    h = f.__transition__[b], e = a.call(f, f.__data__, l), c.push(d = []);
                    for (var n = -1, o = e.length; ++n < o; )
                        vh(g = e[n], n, b, h), d.push(g)
                }
        return oh(c, b)
    }, ph.filter = function(a) {
        var b = [], c, d, e;
        typeof a != "function" && (a = X(a));
        for (var f = 0, g = this.length; f < g; f++) {
            b.push(c = []);
            for (var d = this[f], h = 0, i = d.length; h < i; h++)
                (e = d[h]) && a.call(e, e.__data__, h) && c.push(e)
        }
        return oh(b, this.id, this.time).ease(this.ease())
    }, ph.tween = function(a, b) {
        var c = this.id;
        return arguments.length < 2 ? this.node().__transition__[c].tween.get(a) : cb(this, b == null ? function(b) {
            b.__transition__[c].tween.remove(a)
        } : function(d) {
            d.__transition__[c].tween.set(a, b)
        })
    }, ph.attr = function(b, c) {
        function f() {
            this.removeAttribute(e)
        }
        function g() {
            this.removeAttributeNS(e.space, e.local)
        }
        if (arguments.length < 2) {
            for (c in b)
                this.attr(c, b[c]);
            return this
        }
        var d = Ye(b), e = a.ns.qualify(b);
        return th(this, "attr." + b, c, function(a) {
            function b() {
                var b = this.getAttribute(e), c;
                return b !== a && (c = d(b, a), function(a) {
                    this.setAttribute(e, c(a))
                })
            }
            function c() {
                var b = this.getAttributeNS(e.space, e.local), c;
                return b !== a && (c = d(b, a), function(a) {
                    this.setAttributeNS(e.space, e.local, c(a))
                })
            }
            return a == null ? e.local ? g : f : (a += "", e.local ? c : b)
        })
    }, ph.attrTween = function(b, c) {
        function e(a, b) {
            var e = c.call(this, a, b, this.getAttribute(d));
            return e && function(a) {
                this.setAttribute(d, e(a))
            }
        }
        function f(a, b) {
            var e = c.call(this, a, b, this.getAttributeNS(d.space, d.local));
            return e && function(a) {
                this.setAttributeNS(d.space, d.local, e(a))
            }
        }
        var d = a.ns.qualify(b);
        return this.tween("attr." + b, d.local ? f : e)
    }, ph.style = function(a, b, c) {
        function g() {
            this.style.removeProperty(a)
        }
        var e = arguments.length;
        if (e < 3) {
            if (typeof a != "string") {
                e < 2 && (b = "");
                for (c in a)
                    this.style(c, a[c], b);
                return this
            }
            c = ""
        }
        var f = Ye(a);
        return th(this, "style." + a, b, function(b) {
            function e() {
                var e = d.getComputedStyle(this, null).getPropertyValue(a), g;
                return e !== b && (g = f(e, b), function(b) {
                    this.style.setProperty(a, g(b), c)
                })
            }
            return b == null ? g : (b += "", e)
        })
    }, ph.styleTween = function(a, b, c) {
        return arguments.length < 3 && (c = ""), this.tween("style." + a, function(e, f) {
            var g = b.call(this, e, f, d.getComputedStyle(this, null).getPropertyValue(a));
            return g && function(b) {
                this.style.setProperty(a, g(b), c)
            }
        })
    }, ph.text = function(a) {
        return th(this, "text", a, uh)
    }, ph.remove = function() {
        return this.each("end.transition", function() {
            var a;
            !this.__transition__ && (a = this.parentNode) && a.removeChild(this)
        })
    }, ph.ease = function(b) {
        var c = this.id;
        return arguments.length < 1 ? this.node().__transition__[c].ease : (typeof b != "function" && (b = a.ease.apply(a, arguments)), cb(this, function(a) {
            a.__transition__[c].ease = b
        }))
    }, ph.delay = function(a) {
        var b = this.id;
        return cb(this, typeof a == "function" ? function(c, d, e) {
            c.__transition__[b].delay = a.call(c, c.__data__, d, e) | 0
        } : (a |= 0, function(c) {
            c.__transition__[b].delay = a
        }))
    }, ph.duration = function(a) {
        var b = this.id;
        return cb(this, typeof a == "function" ? function(c, d, e) {
            c.__transition__[b].duration = Math.max(1, a.call(c, c.__data__, d, e) | 0)
        } : (a = Math.max(1, a | 0), function(c) {
            c.__transition__[b].duration = a
        }))
    }, ph.each = function(a, b) {
        var c = this.id;
        if (arguments.length < 2) {
            var d = sh, e = rh;
            rh = c, cb(this, function(b, d, e) {
                sh = b.__transition__[c], a.call(b, b.__data__, d, e)
            }), sh = d, rh = e
        } else
            cb(this, function(d) {
                d.__transition__[c].event.on(a, b)
            });
        return this
    }, ph.transition = function() {
        var a = this.id, b = ++qh, c = [], d, e, f, g;
        for (var h = 0, i = this.length; h < i; h++) {
            c.push(d = []);
            for (var e = this[h], j = 0, k = e.length; j < k; j++) {
                if (f = e[j])
                    g = Object.create(f.__transition__[a]), g.delay += g.duration, vh(f, j, b, g);
                d.push(f)
            }
        }
        return oh(c, b)
    }, a.svg.axis = function() {
        function l(l) {
            l.each(function() {
                var l = a.select(this), m = i == null ? b.ticks ? b.ticks.apply(b, h) : b.domain() : i, n = j == null ? b.tickFormat ? b.tickFormat.apply(b, h) : String : j, o = Ah(b, m, k), p = l.selectAll(".tick.minor").data(o, String), q = p.enter().insert("line", ".tick").attr("class", "tick minor").style("opacity", 1e-6), r = a.transition(p.exit()).style("opacity", 1e-6).remove(), s = a.transition(p).style("opacity", 1), t = l.selectAll(".tick.major").data(m, String), u = t.enter().insert("g", "path").attr("class", "tick major").style("opacity", 1e-6), v = a.transition(t.exit()).style("opacity", 1e-6).remove(), w = a.transition(t).style("opacity", 1), x, y = xg(b), z = l.selectAll(".domain").data([0]), A = (z.enter().append("path").attr("class", "domain"), a.transition(z)), B = b.copy(), C = this.__chart__ || B;
                this.__chart__ = B, u.append("line"), u.append("text");
                var D = u.select("line"), E = w.select("line"), F = t.select("text").text(n), G = u.select("text"), H = w.select("text");
                switch (c) {
                    case "bottom":
                        x = yh, q.attr("y2", e), s.attr("x2", 0).attr("y2", e), D.attr("y2", d), G.attr("y", Math.max(d, 0) + g), E.attr("x2", 0).attr("y2", d), H.attr("x", 0).attr("y", Math.max(d, 0) + g), F.attr("dy", ".71em").style("text-anchor", "middle"), A.attr("d", "M" + y[0] + "," + f + "V0H" + y[1] + "V" + f);
                        break;
                    case "top":
                        x = yh, q.attr("y2", -e), s.attr("x2", 0).attr("y2", -e), D.attr("y2", -d), G.attr("y", -(Math.max(d, 0) + g)), E.attr("x2", 0).attr("y2", -d), H.attr("x", 0).attr("y", -(Math.max(d, 0) + g)), F.attr("dy", "0em").style("text-anchor", "middle"), A.attr("d", "M" + y[0] + "," + -f + "V0H" + y[1] + "V" + -f);
                        break;
                    case "left":
                        x = zh, q.attr("x2", -e), s.attr("x2", -e).attr("y2", 0), D.attr("x2", -d), G.attr("x", -(Math.max(d, 0) + g)), E.attr("x2", -d).attr("y2", 0), H.attr("x", -(Math.max(d, 0) + g)).attr("y", 0), F.attr("dy", ".32em").style("text-anchor", "end"), A.attr("d", "M" + -f + "," + y[0] + "H0V" + y[1] + "H" + -f);
                        break;
                    case "right":
                        x = zh, q.attr("x2", e), s.attr("x2", e).attr("y2", 0), D.attr("x2", d), G.attr("x", Math.max(d, 0) + g), E.attr("x2", d).attr("y2", 0), H.attr("x", Math.max(d, 0) + g).attr("y", 0), F.attr("dy", ".32em").style("text-anchor", "start"), A.attr("d", "M" + f + "," + y[0] + "H0V" + y[1] + "H" + f)
                }
                if (b.ticks)
                    u.call(x, C), w.call(x, B), v.call(x, B), q.call(x, C), s.call(x, B), r.call(x, B);
                else {
                    var I = B.rangeBand() / 2, J = function(a) {
                        return B(a) + I
                    };
                    u.call(x, J), w.call(x, J)
                }
            })
        }
        var b = a.scale.linear(), c = wh, d = 6, e = 6, f = 6, g = 3, h = [10], i = null, j, k = 0;
        return l.scale = function(a) {
            return arguments.length ? (b = a, l) : b
        }, l.orient = function(a) {
            return arguments.length ? (c = a in xh ? a + "" : wh, l) : c
        }, l.ticks = function() {
            return arguments.length ? (h = arguments, l) : h
        }, l.tickValues = function(a) {
            return arguments.length ? (i = a, l) : i
        }, l.tickFormat = function(a) {
            return arguments.length ? (j = a, l) : j
        }, l.tickSize = function(a, b) {
            if (!arguments.length)
                return d;
            var c = arguments.length - 1;
            return d = +a, e = c > 1 ? +b : d, f = c > 0 ? +arguments[c] : d, l
        }, l.tickPadding = function(a) {
            return arguments.length ? (g = +a, l) : g
        }, l.tickSubdivide = function(a) {
            return arguments.length ? (k = +a, l) : k
        }, l
    };
    var wh = "bottom", xh = {top: 1,right: 1,bottom: 1,left: 1};
    a.svg.brush = function() {
        function i(b) {
            b.each(function() {
                var b = a.select(this), d = b.selectAll(".background").data([0]), g = b.selectAll(".extent").data([0]), h = b.selectAll(".resize").data(f, String), n;
                b.style("pointer-events", "all").on("mousedown.brush", m).on("touchstart.brush", m), d.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), g.enter().append("rect").attr("class", "extent").style("cursor", "move"), h.enter().append("g").attr("class", function(a) {
                    return "resize " + a
                }).style("cursor", function(a) {
                    return Bh[a]
                }).append("rect").attr("x", function(a) {
                    return /[ew]$/.test(a) ? -3 : null
                }).attr("y", function(a) {
                    return /^[ns]/.test(a) ? -3 : null
                }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), h.style("display", i.empty() ? "none" : null), h.exit().remove(), c && (n = xg(c), d.attr("x", n[0]).attr("width", n[1] - n[0]), k(b)), e && (n = xg(e), d.attr("y", n[0]).attr("height", n[1] - n[0]), l(b)), j(b)
            })
        }
        function j(a) {
            a.selectAll(".resize").attr("transform", function(a) {
                return "translate(" + g[+/e$/.test(a)][0] + "," + g[+/^s/.test(a)][1] + ")"
            })
        }
        function k(a) {
            a.select(".extent").attr("x", g[0][0]), a.selectAll(".extent,.n>rect,.s>rect").attr("width", g[1][0] - g[0][0])
        }
        function l(a) {
            a.select(".extent").attr("y", g[0][1]), a.selectAll(".extent,.e>rect,.w>rect").attr("height", g[1][1] - g[0][1])
        }
        function m() {
            function A() {
                var b = a.event.changedTouches;
                return b ? a.touches(f, b)[0] : a.mouse(f)
            }
            function B() {
                a.event.keyCode == 32 && (s || (u = null, v[0] -= g[1][0], v[1] -= g[1][1], s = 2), t())
            }
            function C() {
                a.event.keyCode == 32 && s == 2 && (v[0] += g[1][0], v[1] += g[1][1], s = 0, t())
            }
            function D() {
                var b = A(), d = !1;
                w && (b[0] += w[0], b[1] += w[1]), s || (a.event.altKey ? (u || (u = [(g[0][0] + g[1][0]) / 2, (g[0][1] + g[1][1]) / 2]), v[0] = g[+(b[0] < u[0])][0], v[1] = g[+(b[1] < u[1])][1]) : u = null), q && E(b, c, 0) && (k(o), d = !0), r && E(b, e, 1) && (l(o), d = !0), d && (j(o), n({type: "brush",mode: s ? "move" : "resize"}))
            }
            function E(a, b, c) {
                var d = xg(b), e = d[0], f = d[1], i = v[c], j = g[1][c] - g[0][c], k, l;
                s && (e -= i, f -= j + i), k = Math.max(e, Math.min(f, a[c])), s ? l = (k += i) + j : (u && (i = Math.max(e, Math.min(f, 2 * u[c] - k))), i < k ? (l = k, k = i) : l = i);
                if (g[0][c] !== k || g[1][c] !== l)
                    return h = null, g[0][c] = k, g[1][c] = l, !0
            }
            function F() {
                D(), o.style("pointer-events", "all").selectAll(".resize").style("display", i.empty() ? "none" : null), a.select("body").style("cursor", null), x.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), n({type: "brushend"}), t()
            }
            var f = this, m = a.select(a.event.target), n = b.of(f, arguments), o = a.select(f), p = m.datum(), q = !/^(n|s)$/.test(p) && c, r = !/^(e|w)$/.test(p) && e, s = m.classed("extent"), u, v = A(), w, x = a.select(d).on("mousemove.brush", D).on("mouseup.brush", F).on("touchmove.brush", D).on("touchend.brush", F).on("keydown.brush", B).on("keyup.brush", C);
            if (s)
                v[0] = g[0][0] - v[0], v[1] = g[0][1] - v[1];
            else if (p) {
                var y = +/w$/.test(p), z = +/^n/.test(p);
                w = [g[1 - y][0] - v[0], g[1 - z][1] - v[1]], v[0] = g[y][0], v[1] = g[z][1]
            } else
                a.event.altKey && (u = v.slice());
            o.style("pointer-events", "none").selectAll(".resize").style("display", null), a.select("body").style("cursor", m.style("cursor")), n({type: "brushstart"}), D(), t()
        }
        var b = w(i, "brushstart", "brush", "brushend"), c = null, e = null, f = Ch[0], g = [[0, 0], [0, 0]], h;
        return i.x = function(a) {
            return arguments.length ? (c = a, f = Ch[!c << 1 | !e], i) : c
        }, i.y = function(a) {
            return arguments.length ? (e = a, f = Ch[!c << 1 | !e], i) : e
        }, i.extent = function(a) {
            var b, d, f, j, k;
            return arguments.length ? (h = [[0, 0], [0, 0]], c && (b = a[0], d = a[1], e && (b = b[0], d = d[0]), h[0][0] = b, h[1][0] = d, c.invert && (b = c(b), d = c(
            d)), d < b && (k = b, b = d, d = k), g[0][0] = b | 0, g[1][0] = d | 0), e && (f = a[0], j = a[1], c && (f = f[1], j = j[1]), h[0][1] = f, h[1][1] = j, e.invert && (f = e(f), j = e(j)), j < f && (k = f, f = j, j = k), g[0][1] = f | 0, g[1][1] = j | 0), i) : (a = h || g, c && (b = a[0][0], d = a[1][0], h || (b = g[0][0], d = g[1][0], c.invert && (b = c.invert(b), d = c.invert(d)), d < b && (k = b, b = d, d = k))), e && (f = a[0][1], j = a[1][1], h || (f = g[0][1], j = g[1][1], e.invert && (f = e.invert(f), j = e.invert(j)), j < f && (k = f, f = j, j = k))), c && e ? [[b, f], [d, j]] : c ? [b, d] : e && [f, j])
        }, i.clear = function() {
            return h = null, g[0][0] = g[0][1] = g[1][0] = g[1][1] = 0, i
        }, i.empty = function() {
            return c && g[0][0] === g[1][0] || e && g[0][1] === g[1][1]
        }, a.rebind(i, b, "on")
    };
    var Bh = {n: "ns-resize",e: "ew-resize",s: "ns-resize",w: "ew-resize",nw: "nwse-resize",ne: "nesw-resize",se: "nwse-resize",sw: "nesw-resize"}, Ch = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []];
    a.time = {};
    var Dh = Date, Eh = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    Fh.prototype = {getDate: function() {
            return this._.getUTCDate()
        },getDay: function() {
            return this._.getUTCDay()
        },getFullYear: function() {
            return this._.getUTCFullYear()
        },getHours: function() {
            return this._.getUTCHours()
        },getMilliseconds: function() {
            return this._.getUTCMilliseconds()
        },getMinutes: function() {
            return this._.getUTCMinutes()
        },getMonth: function() {
            return this._.getUTCMonth()
        },getSeconds: function() {
            return this._.getUTCSeconds()
        },getTime: function() {
            return this._.getTime()
        },getTimezoneOffset: function() {
            return 0
        },valueOf: function() {
            return this._.valueOf()
        },setDate: function() {
            Gh.setUTCDate.apply(this._, arguments)
        },setDay: function() {
            Gh.setUTCDay.apply(this._, arguments)
        },setFullYear: function() {
            Gh.setUTCFullYear.apply(this._, arguments)
        },setHours: function() {
            Gh.setUTCHours.apply(this._, arguments)
        },setMilliseconds: function() {
            Gh.setUTCMilliseconds.apply(this._, arguments)
        },setMinutes: function() {
            Gh.setUTCMinutes.apply(this._, arguments)
        },setMonth: function() {
            Gh.setUTCMonth.apply(this._, arguments)
        },setSeconds: function() {
            Gh.setUTCSeconds.apply(this._, arguments)
        },setTime: function() {
            Gh.setTime.apply(this._, arguments)
        }};
    var Gh = Date.prototype, Hh = "%a %b %e %X %Y", Ih = "%m/%d/%Y", Jh = "%H:%M:%S", Kh = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], Lh = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], Mh = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], Nh = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    a.time.year = Oh(function(b) {
        return b = a.time.day(b), b.setMonth(0, 1), b
    }, function(a, b) {
        a.setFullYear(a.getFullYear() + b)
    }, function(a) {
        return a.getFullYear()
    }), a.time.years = a.time.year.range, a.time.years.utc = a.time.year.utc.range, a.time.day = Oh(function(a) {
        var b = new Dh(1970, 0);
        return b.setFullYear(a.getFullYear(), a.getMonth(), a.getDate()), b
    }, function(a, b) {
        a.setDate(a.getDate() + b)
    }, function(a) {
        return a.getDate() - 1
    }), a.time.days = a.time.day.range, a.time.days.utc = a.time.day.utc.range, a.time.dayOfYear = function(b) {
        var c = a.time.year(b);
        return Math.floor((b - c - (b.getTimezoneOffset() - c.getTimezoneOffset()) * 6e4) / 864e5)
    }, Eh.forEach(function(b, c) {
        b = b.toLowerCase(), c = 7 - c;
        var d = a.time[b] = Oh(function(b) {
            return (b = a.time.day(b)).setDate(b.getDate() - (b.getDay() + c) % 7), b
        }, function(a, b) {
            a.setDate(a.getDate() + Math.floor(b) * 7)
        }, function(b) {
            var d = a.time.year(b).getDay();
            return Math.floor((a.time.dayOfYear(b) + (d + c) % 7) / 7) - (d !== c)
        });
        a.time[b + "s"] = d.range, a.time[b + "s"].utc = d.utc.range, a.time[b + "OfYear"] = function(b) {
            var d = a.time.year(b).getDay();
            return Math.floor((a.time.dayOfYear(b) + (d + c) % 7) / 7)
        }
    }), a.time.week = a.time.sunday, a.time.weeks = a.time.sunday.range, a.time.weeks.utc = a.time.sunday.utc.range, a.time.weekOfYear = a.time.sundayOfYear, a.time.format = function(a) {
        function c(c) {
            var d = [], e = -1, f = 0, g, h, i;
            while (++e < b)
                if (a.charCodeAt(e) === 37) {
                    d.push(a.substring(f, e)), (h = $h[g = a.charAt(++e)]) != null && (g = a.charAt(++e));
                    if (i = _h[g])
                        g = i(c, h == null ? g === "e" ? " " : "0" : h);
                    d.push(g), f = e + 1
                }
            return d.push(a.substring(f, e)), d.join("")
        }
        var b = a.length;
        return c.parse = function(b) {
            var c = {y: 1900,m: 0,d: 1,H: 0,M: 0,S: 0,L: 0}, d = Qh(c, a, b, 0);
            if (d != b.length)
                return null;
            "p" in c && (c.H = c.H % 12 + c.p * 12);
            var e = new Dh;
            return e.setFullYear(c.y, c.m, c.d), e.setHours(c.H, c.M, c.S, c.L), e
        }, c.toString = function() {
            return a
        }, c
    };
    var Uh = Rh(Kh), Vh = Rh(Lh), Wh = Rh(Mh), Xh = Sh(Mh), Yh = Rh(Nh), Zh = Sh(Nh), $h = {"-": "",_: " ",0: "0"}, _h = {a: function(a) {
            return Lh[a.getDay()]
        },A: function(a) {
            return Kh[a.getDay()]
        },b: function(a) {
            return Nh[a.getMonth()]
        },B: function(a) {
            return Mh[a.getMonth()]
        },c: a.time.format(Hh),d: function(a, b) {
            return Th(a.getDate(), b, 2)
        },e: function(a, b) {
            return Th(a.getDate(), b, 2)
        },H: function(a, b) {
            return Th(a.getHours(), b, 2)
        },I: function(a, b) {
            return Th(a.getHours() % 12 || 12, b, 2)
        },j: function(b, c) {
            return Th(1 + a.time.dayOfYear(b), c, 3)
        },L: function(a, b) {
            return Th(a.getMilliseconds(), b, 3)
        },m: function(a, b) {
            return Th(a.getMonth() + 1, b, 2)
        },M: function(a, b) {
            return Th(a.getMinutes(), b, 2)
        },p: function(a) {
            return a.getHours() >= 12 ? "PM" : "AM"
        },S: function(a, b) {
            return Th(a.getSeconds(), b, 2)
        },U: function(b, c) {
            return Th(a.time.sundayOfYear(b), c, 2)
        },w: function(a) {
            return a.getDay()
        },W: function(b, c) {
            return Th(a.time.mondayOfYear(b), c, 2)
        },x: a.time.format(Ih),X: a.time.format(Jh),y: function(a, b) {
            return Th(a.getFullYear() % 100, b, 2)
        },Y: function(a, b) {
            return Th(a.getFullYear() % 1e4, b, 4)
        },Z: ui,"%": function() {
            return "%"
        }}, ai = {a: bi,A: ci,b: di,B: ei,c: fi,d: mi,e: mi,H: ni,I: ni,L: qi,m: li,M: oi,p: si,S: pi,x: gi,X: hi,y: ji,Y: ii}, ri = /^\s*\d+/, ti = a.map({am: 0,pm: 1});
    a.time.format.utc = function(b) {
        function d(a) {
            try {
                Dh = Fh;
                var b = new Dh;
                return b._ = a, c(b)
            }finally {
                Dh = Date
            }
        }
        var c = a.time.format(b);
        return d.parse = function(a) {
            try {
                Dh = Fh;
                var b = c.parse(a);
                return b && b._
            }finally {
                Dh = Date
            }
        }, d.toString = c.toString, d
    };
    var vi = a.time.format.utc("%Y-%m-%dT%H:%M:%S.%LZ");
    a.time.format.iso = Date.prototype.toISOString && +(new Date("2000-01-01T00:00:00.000Z")) ? wi : vi, wi.parse = function(a) {
        var b = new Date(a);
        return isNaN(b) ? null : b
    }, wi.toString = vi.toString, a.time.second = Oh(function(a) {
        return new Dh(Math.floor(a / 1e3) * 1e3)
    }, function(a, b) {
        a.setTime(a.getTime() + Math.floor(b) * 1e3)
    }, function(a) {
        return a.getSeconds()
    }), a.time.seconds = a.time.second.range, a.time.seconds.utc = a.time.second.utc.range, a.time.minute = Oh(function(a) {
        return new Dh(Math.floor(a / 6e4) * 6e4)
    }, function(a, b) {
        a.setTime(a.getTime() + Math.floor(b) * 6e4)
    }, function(a) {
        return a.getMinutes()
    }), a.time.minutes = a.time.minute.range, a.time.minutes.utc = a.time.minute.utc.range, a.time.hour = Oh(function(a) {
        var b = a.getTimezoneOffset() / 60;
        return new Dh((Math.floor(a / 36e5 - b) + b) * 36e5)
    }, function(a, b) {
        a.setTime(a.getTime() + Math.floor(b) * 36e5)
    }, function(a) {
        return a.getHours()
    }), a.time.hours = a.time.hour.range, a.time.hours.utc = a.time.hour.utc.range, a.time.month = Oh(function(b) {
        return b = a.time.day(b), b.setDate(1), b
    }, function(a, b) {
        a.setMonth(a.getMonth() + b)
    }, function(a) {
        return a.getMonth()
    }), a.time.months = a.time.month.range, a.time.months.utc = a.time.month.utc.range;
    var Di = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6], Ei = [[a.time.second, 1], [a.time.second, 5], [a.time.second, 15], [a.time.second, 30], [a.time.minute, 1], [a.time.minute, 5], [a.time.minute, 15], [a.time.minute, 30], [a.time.hour, 1], [a.time.hour, 3], [a.time.hour, 6], [a.time.hour, 12], [a.time.day, 1], [a.time.day, 2], [a.time.week, 1], [a.time.month, 1], [a.time.month, 3], [a.time.year, 1]], Fi = [[a.time.format("%Y"), Uc], [a.time.format("%B"), function(a) {
                return a.getMonth()
            }], [a.time.format("%b %d"), function(a) {
                return a.getDate() != 1
            }], [a.time.format("%a %d"), function(a) {
                return a.getDay() && a.getDate() != 1
            }], [a.time.format("%I %p"), function(a) {
                return a.getHours()
            }], [a.time.format("%I:%M"), function(a) {
                return a.getMinutes()
            }], [a.time.format(":%S"), function(a) {
                return a.getSeconds()
            }], [a.time.format(".%L"), function(a) {
                return a.getMilliseconds()
            }]], Gi = a.scale.linear(), Hi = Ai(Fi);
    Ei.year = function(a, b) {
        return Gi.domain(a.map(Ci)).ticks(b).map(Bi)
    }, a.time.scale = function() {
        return xi(a.scale.linear(), Ei, Hi)
    };
    var Ii = Ei.map(function(a) {
        return [a[0].utc, a[1]]
    }), Ji = [[a.time.format.utc("%Y"), Uc], [a.time.format.utc("%B"), function(a) {
                return a.getUTCMonth()
            }], [a.time.format.utc("%b %d"), function(a) {
                return a.getUTCDate() != 1
            }], [a.time.format.utc("%a %d"), function(a) {
                return a.getUTCDay() && a.getUTCDate() != 1
            }], [a.time.format.utc("%I %p"), function(a) {
                return a.getUTCHours()
            }], [a.time.format.utc("%I:%M"), function(a) {
                return a.getUTCMinutes()
            }], [a.time.format.utc(":%S"), function(a) {
                return a.getUTCSeconds()
            }], [a.time.format.utc(".%L"), function(a) {
                return a.getUTCMilliseconds()
            }]], Ki = Ai(Ji);
    return Ii.year = function(a, b) {
        return Gi.domain(a.map(Mi)).ticks(b).map(Li)
    }, a.time.scale.utc = function() {
        return xi(a.scale.linear(), Ii, Ki)
    }, a.text = function() {
        return a.xhr.apply(a, arguments).response(Ni)
    }, a.json = function(b, c) {
        return a.xhr(b, "application/json", c).response(Oi)
    }, a.html = function(b, c) {
        return a.xhr(b, "text/html", c).response(Pi)
    }, a.xml = function() {
        return a.xhr.apply(a, arguments).response(Qi)
    }, a
}(), d3.tip = function() {
    function g(a) {
        e = u(a), f = e.createSVGPoint(), document.body.appendChild(d)
    }
    function h() {
        return "n"
    }
    function i() {
        return [0, 0]
    }
    function j() {
        return " "
    }
    function l() {
        var a = v();
        return {top: a.n.y - d.offsetHeight,left: a.n.x - d.offsetWidth / 2}
    }
    function m() {
        var a = v();
        return {top: a.s.y,left: a.s.x - d.offsetWidth / 2}
    }
    function n() {
        var a = v();
        return {top: a.e.y - d.offsetHeight / 2,left: a.e.x}
    }
    function o() {
        var a = v();
        return {top: a.w.y - d.offsetHeight / 2,left: a.w.x - d.offsetWidth}
    }
    function p() {
        var a = v();
        return {top: a.nw.y - d.offsetHeight,left: a.nw.x - d.offsetWidth}
    }
    function q() {
        var a = v();
        return {top: a.ne.y - d.offsetHeight,left: a.ne.x}
    }
    function r() {
        var a = v();
        return {top: a.sw.y,left: a.sw.x - d.offsetWidth}
    }
    function s() {
        var a = v();
        return {top: a.se.y,left: a.e.x}
    }
    function t() {
        var a = document.createElement("div");
        return a.style.position = "absolute", a.style.display = "none", a.style.boxSizing = "border-box", a
    }
    function u(a) {
        a = a.node();
        if (a.tagName.toLowerCase() == "svg")
            return a;
        while (a.parentNode) {
            a = a.parentNode;
            if (a.tagName.toLowerCase() == "svg")
                return a
        }
        return null
    }
    function v() {
        var a = d3.event.target, b = {}, c = a.getScreenCTM(), d = a.getBBox(), e = d.width, g = d.height, h = d.x, i = d.y, j = document.body.scrollTop;
        return scrollLeft = document.body.scrollLeft, document.documentElement && document.documentElement.scrollTop && (j = document.documentElement.scrollTop, scrollLeft = document.documentElement.scrollLeft), f.x = h + scrollLeft, f.y = i + j, b.nw = f.matrixTransform(c), f.x += e, b.ne = f.matrixTransform(c), f.y += g, b.se = f.matrixTransform(c), f.x -= e, b.sw = f.matrixTransform(c), f.y -= g / 2, b.w = f.matrixTransform(c), f.x += e, b.e = f.matrixTransform(c), f.x -= e / 2, f.y -= g / 2, b.n = f.matrixTransform(c), f.y += g, b.s = f.matrixTransform(c), b
    }
    var a = h, b = i, c = j, d = t(), e = null, f = null;
    g.show = function() {
        var e = c.apply(this, arguments), f = b.apply(this, arguments), h = a.apply(this, arguments), i = k.keys(), j = d3.select(d), l = 0, m;
        j.html(e).style("display", "block");
        for (l; l < i.length; l++)
            j.classed(i[l], !1);
        return m = k.get(h).apply(this), j.classed(h, !0).style({top: m.top + f[0] + "px",left: m.left + f[1] + "px"}), g
    }, g.hide = function() {
        return d.style.display = "none", d.innerHTML = "", g
    }, g.attr = function(a, b) {
        return arguments.length < 2 ? d3.select(d).attr(a) : (d3.select(d).attr(a, b), g)
    }, g.style = function(a, b) {
        return arguments.length < 2 ? d3.select(d).style(a) : (d3.select(d).style(a, b), g)
    }, g.direction = function(b) {
        return arguments.length ? (a = b == null ? b : d3.functor(b), g) : a
    }, g.offset = function(a) {
        return arguments.length ? (b = a == null ? a : d3.functor(a), g) : b
    }, g.html = function(a) {
        return arguments.length ? (c = a == null ? a : d3.functor(a), g) : c
    };
    var k = d3.map({n: l,s: m,e: n,w: o,nw: p,ne: q,sw: r,se: s});
    return g
}, function() {
    $.fn.fire = function(a) {
        var b, c, d, e, f, g, h, i;
        if (b = arguments[1])
            $.isPlainObject(b) ? f = b : $.isArray(b) ? c = b : $.isFunction(b) && (d = b);
        if (b = arguments[2])
            $.isArray(b) ? c = b : $.isFunction(b) && (d = b);
        (b = arguments[3]) && $.isFunction(b) && (d = b), e = this[0], f == null && (f = {}), (h = f.cancelable) == null && (f.cancelable = !!d), (i = f.bubbles) == null && (f.bubbles = !0), c == null && (c = []), g = function() {
            var b;
            return b = $.Event(a, f), $.event.trigger(b, c, e, !b.bubbles), d && !b.isDefaultPrevented() && d.call(e, b), b
        };
        if (!f.async)
            return g();
        delete f.async, setTimeout(g, 0)
    }
}.call(this), function() {
    var a, b, c;
    a = [], $.pageUpdate = function(b) {
        b == null && (b = function() {
        }), a.push(b)
    }, $.pageUpdate.before = function() {
    }, $.pageUpdate.beforeEach = function() {
    }, $.pageUpdate.after = function() {
    }, $.pageUpdate.afterEach = function() {
    }, $.fn.pageUpdate = function() {
        var b, c, d, e, f, g;
        for (d = 0, f = this.length; d < f; d++) {
            b = this[d], $.pageUpdate.before(b);
            for (e = 0, g = a.length; e < g; e++)
                c = a[e], $.pageUpdate.beforeEach(b, c), c.apply(b), $.pageUpdate.afterEach(b, c);
            $.pageUpdate.after(b)
        }
        return this
    }, $(document).ready(b = function() {
        return $.fn.pageUpdate.call([document.body])
    }), $(document).on("pjax:complete", c = function(a) {
        return $.fn.pageUpdate.call([a.target])
    })
}.call(this), function() {
    var a, b, c, d, e, f, g, h, i, j, k, l = [].indexOf || function(a) {
        for (var b = 0, c = this.length; b < c; b++)
            if (b in this && this[b] === a)
                return b;
        return -1
    };
    g = "[ ]", b = "[x]", h = RegExp("^(?:\\s*[-+*]|(?:\\d+\\.))?\\s*(" + b.replace(/([\[\]])/g, "\\$1") + "|" + g.replace(/([\[\]])/g, "\\$1") + ")(?=\\s)"), a = /^`{3}(?:\s*\w+)?[\S\s].*[\S\s]^`{3}$/mg, i = RegExp("^(" + b.replace(/[\[\]]/g, "\\$1") + "|" + g.replace(/[\[\]]/g, "\\$1") + ").+$", "g"), k = function(c, d, e) {
        var f, j, k, m;
        return f = c.replace(/\r/g, "").replace(a, "").replace(i, "").split("\n"), j = 0, m = function() {
            var a, i, m, n;
            m = c.split("\n"), n = [];
            for (a = 0, i = m.length; a < i; a++)
                k = m[a], l.call(f, k) >= 0 && k.match(h) && (j += 1, j === d && (k = e ? k.replace(g, b) : k.replace(b, g))), n.push(k);
            return n
        }(), m.join("\n")
    }, j = function(a) {
        var b, c, d, e;
        return b = a.closest(".js-task-list-container"), c = b.find(".js-task-list-field"), e = 1 + b.find(".task-list-item-checkbox").index(a), d = a.prop("checked"), c.fire("tasklist:change", [e, d], function() {
            return c.val(k(c.val(), e, d)), c.trigger("change"), c.fire("tasklist:changed", [e, d])
        })
    }, $(document).on("change", ".task-list-item-checkbox", function() {
        return j($(this))
    }), e = function(a) {
        if (a.find(".js-task-list-field").length > 0)
            return a.find(".task-list-item").addClass("enabled").find(".task-list-item-checkbox").attr("disabled", null), a.addClass("is-task-list-enabled").trigger("tasklist:enabled")
    }, f = function(a) {
        var b, c, d, f;
        f = [];
        for (c = 0, d = a.length; c < d; c++)
            b = a[c], f.push(e($(b)));
        return f
    }, c = function(a) {
        return a.find(".task-list-item").removeClass("enabled").find(".task-list-item-checkbox").attr("disabled", "disabled"), a.removeClass("is-task-list-enabled").trigger("tasklist:disabled")
    }, d = function(a) {
        var b, d, e, f;
        f = [];
        for (d = 0, e = a.length; d < e; d++)
            b = a[d], f.push(c($(b)));
        return f
    }, $.fn.taskList = function(a) {
        var b, c;
        return b = $(this).closest(".js-task-list-container"), c = {enable: f,disable: d}, c[a || "enable"](b)
    }, $.pageUpdate(function() {
        return $(".js-task-list-container.js-task-list-enable").taskList()
    })
}.call(this), function() {
    "use strict";
    var a = function(a, b) {
        var c = a.style[b];
        a.currentStyle ? c = a.currentStyle[b] : window.getComputedStyle && (c = document.defaultView.getComputedStyle(a, null).getPropertyValue(b));
        if (c == "auto" && b == "cursor") {
            var d = ["a"];
            for (var e = 0; e < d.length; e++)
                if (a.tagName.toLowerCase() == d[e])
                    return "pointer"
        }
        return c
    }, b = function(a) {
        if (!l.prototype._singleton)
            return;
        a || (a = window.event);
        var b;
        this !== window ? b = this : a.target ? b = a.target : a.srcElement && (b = a.srcElement), l.prototype._singleton.setCurrent(b)
    }, c = function(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
    }, d = function(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
    }, e = function(a, b) {
        if (a.addClass)
            return a.addClass(b), a;
        if (b && typeof b == "string") {
            var c = (b || "").split(/\s+/);
            if (a.nodeType === 1)
                if (!a.className)
                    a.className = b;
                else {
                    var d = " " + a.className + " ", e = a.className;
                    for (var f = 0, g = c.length; f < g; f++)
                        d.indexOf(" " + c[f] + " ") < 0 && (e += " " + c[f]);
                    a.className = e.replace(/^\s+|\s+$/g, "")
                }
        }
        return a
    }, f = function(a, b) {
        if (a.removeClass)
            return a.removeClass(b), a;
        if (b && typeof b == "string" || b === undefined) {
            var c = (b || "").split(/\s+/);
            if (a.nodeType === 1 && a.className)
                if (b) {
                    var d = (" " + a.className + " ").replace(/[\n\t]/g, " ");
                    for (var e = 0, f = c.length; e < f; e++)
                        d = d.replace(" " + c[e] + " ", " ");
                    a.className = d.replace(/^\s+|\s+$/g, "")
                } else
                    a.className = ""
        }
        return a
    }, g = function(b) {
        var c = {left: 0,top: 0,width: b.width || b.offsetWidth || 0,height: b.height || b.offsetHeight || 0,zIndex: 9999}, d = a(b, "zIndex");
        d && d != "auto" && (c.zIndex = parseInt(d, 10));
        while (b) {
            var e = parseInt(a(b, "borderLeftWidth"), 10), f = parseInt(a(b, "borderTopWidth"), 10);
            c.left += isNaN(b.offsetLeft) ? 0 : b.offsetLeft, c.left += isNaN(e) ? 0 : e, c.top += isNaN(b.offsetTop) ? 0 : b.offsetTop, c.top += isNaN(f) ? 0 : f, b = b.offsetParent
        }
        return c
    }, h = function(a) {
        return (a.indexOf("?") >= 0 ? "&" : "?") + "nocache=" + (new Date).getTime()
    }, i = function(a) {
        var b = [];
        return a.trustedDomains && (typeof a.trustedDomains == "string" ? b.push("trustedDomain=" + a.trustedDomains) : b.push("trustedDomain=" + a.trustedDomains.join(","))), b.join("&")
    }, j = function(a, b) {
        if (b.indexOf)
            return b.indexOf(a);
        for (var c = 0, d = b.length; c < d; c++)
            if (b[c] === a)
                return c;
        return -1
    }, k = function(a) {
        if (typeof a == "string")
            throw new TypeError("ZeroClipboard doesn't accept query strings.");
        return a.length ? a : [a]
    }, l = function(a, b) {
        a && (l.prototype._singleton || this).glue(a);
        if (l.prototype._singleton)
            return l.prototype._singleton;
        l.prototype._singleton = this, this.options = {};
        for (var c in o)
            this.options[c] = o[c];
        for (var d in b)
            this.options[d] = b[d];
        this.handlers = {}, l.detectFlashSupport() && p()
    }, m, n = [];
    l.prototype.setCurrent = function(b) {
        m = b, this.reposition(), b.getAttribute("title") && this.setTitle(b.getAttribute("title")), this.setHandCursor(a(b, "cursor") == "pointer")
    }, l.prototype.setText = function(a) {
        a && a !== "" && (this.options.text = a, this.ready() && this.flashBridge.setText(a))
    }, l.prototype.setTitle = function(a) {
        a && a !== "" && this.htmlBridge.setAttribute("title", a)
    }, l.prototype.setSize = function(a, b) {
        this.ready() && this.flashBridge.setSize(a, b)
    }, l.prototype.setHandCursor = function(a) {
        this.ready() && this.flashBridge.setHandCursor(a)
    }, l.version = "1.1.7";
    var o = {moviePath: "ZeroClipboard.swf",trustedDomains: null,text: null,hoverClass: "zeroclipboard-is-hover",activeClass: "zeroclipboard-is-active",allowScriptAccess: "sameDomain"};
    l.setDefaults = function(a) {
        for (var b in a)
            o[b] = a[b]
    }, l.destroy = function() {
        l.prototype._singleton.unglue(n);
        var a = l.prototype._singleton.htmlBridge;
        a.parentNode.removeChild(a), delete l.prototype._singleton
    }, l.detectFlashSupport = function() {
        var a = !1;
        try {
            new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && (a = !0)
        } catch (b) {
            navigator.mimeTypes["application/x-shockwave-flash"] && (a = !0)
        }
        return a
    };
    var p = function() {
        var a = l.prototype._singleton, b = document.getElementById("global-zeroclipboard-html-bridge");
        if (!b) {
            var c = '      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="global-zeroclipboard-flash-bridge" width="100%" height="100%">         <param name="movie" value="' + a.options.moviePath + h(a.options.moviePath) + '"/>         <param name="allowScriptAccess" value="' + a.options.allowScriptAccess + '"/>         <param name="scale" value="exactfit"/>         <param name="loop" value="false"/>         <param name="menu" value="false"/>         <param name="quality" value="best" />         <param name="bgcolor" value="#ffffff"/>         <param name="wmode" value="transparent"/>         <param name="flashvars" value="' + i(a.options) + '"/>         <embed src="' + a.options.moviePath + h(a.options.moviePath) + '"           loop="false" menu="false"           quality="best" bgcolor="#ffffff"           width="100%" height="100%"           name="global-zeroclipboard-flash-bridge"           allowScriptAccess="always"           allowFullScreen="false"           type="application/x-shockwave-flash"           wmode="transparent"           pluginspage="http://www.macromedia.com/go/getflashplayer"           flashvars="' + i(a.options) + '"           scale="exactfit">         </embed>       </object>';
            b = document.createElement("div"), b.id = "global-zeroclipboard-html-bridge", b.setAttribute("class", "global-zeroclipboard-container"), b.setAttribute("data-clipboard-ready", !1), b.style.position = "absolute", b.style.left = "-9999px", b.style.top = "-9999px", b.style.width = "15px", b.style.height = "15px", b.style.zIndex = "9999", b.innerHTML = c, document.body.appendChild(b)
        }
        a.htmlBridge = b, a.flashBridge = document["global-zeroclipboard-flash-bridge"] || b.children[0].lastElementChild
    };
    l.prototype.resetBridge = function() {
        this.htmlBridge.style.left = "-9999px", this.htmlBridge.style.top = "-9999px", this.htmlBridge.removeAttribute("title"), this.htmlBridge.removeAttribute("data-clipboard-text"), f(m, this.options.activeClass), m = null, this.options.text = null
    }, l.prototype.ready = function() {
        var a = this.htmlBridge.getAttribute("data-clipboard-ready");
        return a === "true" || a === !0
    }, l.prototype.reposition = function() {
        if (!m)
            return !1;
        var a = g(m);
        this.htmlBridge.style.top = a.top + "px", this.htmlBridge.style.left = a.left + "px", this.htmlBridge.style.width = a.width + "px", this.htmlBridge.style.height = a.height + "px", this.htmlBridge.style.zIndex = a.zIndex + 1, this.setSize(a.width, a.height)
    }, l.dispatch = function(a, b) {
        l.prototype._singleton.receiveEvent(a, b)
    }, l.prototype.on = function(a, b) {
        var c = a.toString().split(/\s/g);
        for (var d = 0; d < c.length; d++)
            a = c[d].toLowerCase().replace(/^on/, ""), this.handlers[a] || (this.handlers[a] = b);
        this.handlers.noflash && !l.detectFlashSupport() && this.receiveEvent("onNoFlash", null)
    }, l.prototype.addEventListener = l.prototype.on, l.prototype.off = function(a, b) {
        var c = a.toString().split(/\s/g);
        for (var d = 0; d < c.length; d++) {
            a = c[d].toLowerCase().replace(/^on/, "");
            for (var e in this.handlers)
                e === a && this.handlers[e] === b && delete this.handlers[e]
        }
    }, l.prototype.removeEventListener = l.prototype.off, l.prototype.receiveEvent = function(a, b) {
        a = a.toString().toLowerCase().replace(/^on/, "");
        var c = m;
        switch (a) {
            case "load":
                if (b && parseFloat(b.flashVersion.replace(",", ".").replace(/[^0-9\.]/gi, "")) < 10) {
                    this.receiveEvent("onWrongFlash", {flashVersion: b.flashVersion});
                    return
                }
                this.htmlBridge.setAttribute("data-clipboard-ready", !0);
                break;
            case "mouseover":
                e(c, this.options.hoverClass);
                break;
            case "mouseout":
                f(c, this.options.hoverClass), this.resetBridge();
                break;
            case "mousedown":
                e(c, this.options.activeClass);
                break;
            case "mouseup":
                f(c, this.options.activeClass);
                break;
            case "datarequested":
                var d = c.getAttribute("data-clipboard-target"), g = d ? document.getElementById(d) : null;
                if (g) {
                    var h = g.value || g.textContent || g.innerText;
                    h && this.setText(h)
                } else {
                    var i = c.getAttribute("data-clipboard-text");
                    i && this.setText(i)
                }
                break;
            case "complete":
                this.options.text = null
        }
        if (this.handlers[a]) {
            var j = this.handlers[a];
            typeof j == "function" ? j.call(c, this, b) : typeof j == "string" && window[j].call(c, this, b)
        }
    }, l.prototype.glue = function(a) {
        a = k(a);
        for (var d = 0; d < a.length; d++)
            j(a[d], n) == -1 && (n.push(a[d]), c(a[d], "mouseover", b))
    }, l.prototype.unglue = function(a) {
        a = k(a);
        for (var c = 0; c < a.length; c++) {
            d(a[c], "mouseover", b);
            var e = j(a[c], n);
            e != -1 && n.splice(e, 1)
        }
    }, typeof module != "undefined" ? module.exports = l : typeof define == "function" && define.amd ? define(function() {
        return l
    }) : window.ZeroClipboard = l
}(), function() {
}.call(this);
