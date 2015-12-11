/*!CK:1489412189!*/
/*1448312030,*/
//

if (self.CavalryLogger) {
    CavalryLogger.start_js(["SCzko"]);
}

__d("VideoProjection", [], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = {
        FLAT: "flat",
        EQUIRECTANGULAR: "equirectangular",
        CUBEMAP: "cubemap",
        PYRAMID: "pyramid"
    };
}, null);
__d("createExponentialMovingAverage", [], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();

    function h(k) {
        var l = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1],
            m = l;
        return function(n) {
            return m += k * (n - m);
        };
    }

    function i(k) {
        return function(l) {
            return 1 - Math.exp(-l / k);
        };
    }

    function j(k) {
        var l = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1],
            m = l,
            n = i(k);
        return function(o, p) {
            return m += n(p) * (o - m);
        };
    }
    h.createContinuous = j;
    f.exports = h;
}, null);
__d('VelocityTracker', ['createExponentialMovingAverage', 'performanceNow'], function a(b, c, d, e, f, g, h, i) {
    if (c.__markCompiled) c.__markCompiled();

    function j() {
        'use strict';
        var k = arguments.length <= 0 || arguments[0] === undefined ? 50 : arguments[0],
            l = arguments.length <= 1 || arguments[1] === undefined ? {
                x: 0,
                y: 0
            } : arguments[1];
        this.$VelocityTracker1 = l.x;
        this.$VelocityTracker2 = l.y;
        this.$VelocityTracker3 = h.createContinuous(k, this.$VelocityTracker1);
        this.$VelocityTracker4 = h.createContinuous(k, this.$VelocityTracker2);
    }
    j.prototype.update = function(k, l) {
        'use strict';
        var m = i();
        if (!this.$VelocityTracker5) {
            this.$VelocityTracker5 = {
                x: k,
                y: l
            };
            this.$VelocityTracker6 = m;
            return 0;
        }
        var n = m - this.$VelocityTracker6;
        this.$VelocityTracker1 = this.$VelocityTracker3(k - this.$VelocityTracker5.x, n);
        this.$VelocityTracker2 = this.$VelocityTracker4(l - this.$VelocityTracker5.y, n);
        this.$VelocityTracker5 = {
            x: k,
            y: l
        };
        this.$VelocityTracker6 = m;
        return n;
    };
    j.prototype.getVelocityX = function() {
        'use strict';
        return Math.trunc(this.$VelocityTracker1);
    };
    j.prototype.getVelocityY = function() {
        'use strict';
        return Math.trunc(this.$VelocityTracker2);
    };
    j.prototype.getVelocity = function() {
        'use strict';
        return Math.trunc(Math.sqrt(this.$VelocityTracker1 * this.$VelocityTracker1 + this.$VelocityTracker2 * this.$VelocityTracker2));
    };
    f.exports = j;
}, null);
__d("bezier", [], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    f.exports = function(h, i, j, k, l) {
        var m = function(p) {
                var q = 1 - p;
                return 3 * q * q * p * h + 3 * q * p * p * j + p * p * p;
            },
            n = function(p) {
                var q = 1 - p;
                return 3 * q * q * p * i + 3 * q * p * p * k + p * p * p;
            },
            o = function(p) {
                var q = 1 - p;
                return 3 * (2 * (p - 1) * p + q * q) * h + 3 * (-p * p * p + 2 * q * p) * j;
            };
        return function(p) {
            var q = p,
                r, s, t, u, v, w;
            for (t = q, w = 0; w < 8; w++) {
                u = m(t) - q;
                if (Math.abs(u) < l) return n(t);
                v = o(t);
                if (Math.abs(v) < 1e-06) break;
                t = t - u / v;
            }
            r = 0, s = 1, t = q;
            if (t < r) return n(r);
            if (t > s) return n(s);
            while (r < s) {
                u = m(t);
                if (Math.abs(u - q) < l) return n(t);
                if (q > u) {
                    r = t;
                } else s = t;
                t = (s - r) * .5 + r;
            }
            return n(t);
        };
    };
}, null);
__d('VideoWithPlayerVersionInvariant', [], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();

    function h(i, j) {
        'use strict';
        this.$VideoWithPlayerVersionInvariant1 = i;
        this.$VideoWithPlayerVersionInvariant2 = j;
        this.$VideoWithPlayerVersionInvariant3 = i.addListener('stateChange', (function() {
            return this.$VideoWithPlayerVersionInvariant4();
        }).bind(this));
    }
    h.prototype.$VideoWithPlayerVersionInvariant4 = function() {
        'use strict';
        if (!this.$VideoWithPlayerVersionInvariant1.isState('ready')) return;
        if (!this.$VideoWithPlayerVersionInvariant1.isPlayerVersion(this.$VideoWithPlayerVersionInvariant2)) this.$VideoWithPlayerVersionInvariant1.setState('fallback');
        this.$VideoWithPlayerVersionInvariant3.remove();
    };
    f.exports = h;
}, null);
__d("GLMatrix", [], function a(b, c, d, e, f, g) {
    c.__markCompiled && c.__markCompiled();
    (function(h, i) {
        i(h);
    }(f.exports, function(h) {
        "use strict";
        var i = 1e-06,
            j = {};
        (function() {
            if (typeof(Float32Array) != 'undefined') {
                var ba = new Float32Array(1),
                    ca = new Int32Array(ba.buffer);
                j.invsqrt = function(da) {
                    var ea = da * .5;
                    ba[0] = da;
                    var fa = 1.5;
                    ca[0] = 1597463007 - (ca[0] >> 1);
                    var ga = ba[0];
                    return ga * (fa - (ea * ga * ga));
                };
            } else j.invsqrt = function(da) {
                return 1 / Math.sqrt(da);
            };
        })();
        var k = null;

        function l(ba) {
            k = ba;
            return k;
        }

        function m() {
            k = (typeof Float32Array !== 'undefined') ? Float32Array : Array;
            return k;
        }
        m();
        var n = {};
        n.create = function(ba) {
            var ca = new k(3);
            if (ba) {
                ca[0] = ba[0];
                ca[1] = ba[1];
                ca[2] = ba[2];
            } else ca[0] = ca[1] = ca[2] = 0;
            return ca;
        };
        n.createFrom = function(ba, ca, da) {
            var ea = new k(3);
            ea[0] = ba;
            ea[1] = ca;
            ea[2] = da;
            return ea;
        };
        n.set = function(ba, ca) {
            ca[0] = ba[0];
            ca[1] = ba[1];
            ca[2] = ba[2];
            return ca;
        };
        n.equal = function(ba, ca) {
            return ba === ca || (Math.abs(ba[0] - ca[0]) < i && Math.abs(ba[1] - ca[1]) < i && Math.abs(ba[2] - ca[2]) < i);
        };
        n.add = function(ba, ca, da) {
            if (!da || ba === da) {
                ba[0] += ca[0];
                ba[1] += ca[1];
                ba[2] += ca[2];
                return ba;
            }
            da[0] = ba[0] + ca[0];
            da[1] = ba[1] + ca[1];
            da[2] = ba[2] + ca[2];
            return da;
        };
        n.subtract = function(ba, ca, da) {
            if (!da || ba === da) {
                ba[0] -= ca[0];
                ba[1] -= ca[1];
                ba[2] -= ca[2];
                return ba;
            }
            da[0] = ba[0] - ca[0];
            da[1] = ba[1] - ca[1];
            da[2] = ba[2] - ca[2];
            return da;
        };
        n.multiply = function(ba, ca, da) {
            if (!da || ba === da) {
                ba[0] *= ca[0];
                ba[1] *= ca[1];
                ba[2] *= ca[2];
                return ba;
            }
            da[0] = ba[0] * ca[0];
            da[1] = ba[1] * ca[1];
            da[2] = ba[2] * ca[2];
            return da;
        };
        n.negate = function(ba, ca) {
            if (!ca) ca = ba;
            ca[0] = -ba[0];
            ca[1] = -ba[1];
            ca[2] = -ba[2];
            return ca;
        };
        n.scale = function(ba, ca, da) {
            if (!da || ba === da) {
                ba[0] *= ca;
                ba[1] *= ca;
                ba[2] *= ca;
                return ba;
            }
            da[0] = ba[0] * ca;
            da[1] = ba[1] * ca;
            da[2] = ba[2] * ca;
            return da;
        };
        n.normalize = function(ba, ca) {
            if (!ca) ca = ba;
            var da = ba[0],
                ea = ba[1],
                fa = ba[2],
                ga = Math.sqrt(da * da + ea * ea + fa * fa);
            if (!ga) {
                ca[0] = 0;
                ca[1] = 0;
                ca[2] = 0;
                return ca;
            } else if (ga === 1) {
                ca[0] = da;
                ca[1] = ea;
                ca[2] = fa;
                return ca;
            }
            ga = 1 / ga;
            ca[0] = da * ga;
            ca[1] = ea * ga;
            ca[2] = fa * ga;
            return ca;
        };
        n.cross = function(ba, ca, da) {
            if (!da) da = ba;
            var ea = ba[0],
                fa = ba[1],
                ga = ba[2],
                ha = ca[0],
                ia = ca[1],
                ja = ca[2];
            da[0] = fa * ja - ga * ia;
            da[1] = ga * ha - ea * ja;
            da[2] = ea * ia - fa * ha;
            return da;
        };
        n.length = function(ba) {
            var ca = ba[0],
                da = ba[1],
                ea = ba[2];
            return Math.sqrt(ca * ca + da * da + ea * ea);
        };
        n.squaredLength = function(ba) {
            var ca = ba[0],
                da = ba[1],
                ea = ba[2];
            return ca * ca + da * da + ea * ea;
        };
        n.dot = function(ba, ca) {
            return ba[0] * ca[0] + ba[1] * ca[1] + ba[2] * ca[2];
        };
        n.direction = function(ba, ca, da) {
            if (!da) da = ba;
            var ea = ba[0] - ca[0],
                fa = ba[1] - ca[1],
                ga = ba[2] - ca[2],
                ha = Math.sqrt(ea * ea + fa * fa + ga * ga);
            if (!ha) {
                da[0] = 0;
                da[1] = 0;
                da[2] = 0;
                return da;
            }
            ha = 1 / ha;
            da[0] = ea * ha;
            da[1] = fa * ha;
            da[2] = ga * ha;
            return da;
        };
        n.lerp = function(ba, ca, da, ea) {
            if (!ea) ea = ba;
            ea[0] = ba[0] + da * (ca[0] - ba[0]);
            ea[1] = ba[1] + da * (ca[1] - ba[1]);
            ea[2] = ba[2] + da * (ca[2] - ba[2]);
            return ea;
        };
        n.dist = function(ba, ca) {
            var da = ca[0] - ba[0],
                ea = ca[1] - ba[1],
                fa = ca[2] - ba[2];
            return Math.sqrt(da * da + ea * ea + fa * fa);
        };
        var o = null,
            p = new k(4);
        n.unproject = function(ba, ca, da, ea, fa) {
            if (!fa) fa = ba;
            if (!o) o = v.create();
            var ga = o,
                ha = p;
            ha[0] = (ba[0] - ea[0]) * 2 / ea[2] - 1;
            ha[1] = (ba[1] - ea[1]) * 2 / ea[3] - 1;
            ha[2] = 2 * ba[2] - 1;
            ha[3] = 1;
            v.multiply(da, ca, ga);
            if (!v.inverse(ga)) return null;
            v.multiplyVec4(ga, ha);
            if (ha[3] === 0) return null;
            fa[0] = ha[0] / ha[3];
            fa[1] = ha[1] / ha[3];
            fa[2] = ha[2] / ha[3];
            return fa;
        };
        var q = n.createFrom(1, 0, 0),
            r = n.createFrom(0, 1, 0),
            s = n.createFrom(0, 0, 1),
            t = n.create();
        n.rotationTo = function(ba, ca, da) {
            if (!da) da = w.create();
            var ea = n.dot(ba, ca),
                fa = t;
            if (ea >= 1) {
                w.set(x, da);
            } else if (ea < (1e-06 - 1)) {
                n.cross(q, ba, fa);
                if (n.length(fa) < 1e-06) n.cross(r, ba, fa);
                if (n.length(fa) < 1e-06) n.cross(s, ba, fa);
                n.normalize(fa);
                w.fromAngleAxis(Math.PI, fa, da);
            } else {
                var ga = Math.sqrt((1 + ea) * 2),
                    ha = 1 / ga;
                n.cross(ba, ca, fa);
                da[0] = fa[0] * ha;
                da[1] = fa[1] * ha;
                da[2] = fa[2] * ha;
                da[3] = ga * .5;
                w.normalize(da);
            }
            if (da[3] > 1) {
                da[3] = 1;
            } else if (da[3] < -1) da[3] = -1;
            return da;
        };
        n.str = function(ba) {
            return '[' + ba[0] + ', ' + ba[1] + ', ' + ba[2] + ']';
        };
        var u = {};
        u.create = function(ba) {
            var ca = new k(9);
            if (ba) {
                ca[0] = ba[0];
                ca[1] = ba[1];
                ca[2] = ba[2];
                ca[3] = ba[3];
                ca[4] = ba[4];
                ca[5] = ba[5];
                ca[6] = ba[6];
                ca[7] = ba[7];
                ca[8] = ba[8];
            } else ca[0] = ca[1] = ca[2] = ca[3] = ca[4] = ca[5] = ca[6] = ca[7] = ca[8] = 0;
            return ca;
        };
        u.createFrom = function(ba, ca, da, ea, fa, ga, ha, ia, ja) {
            var ka = new k(9);
            ka[0] = ba;
            ka[1] = ca;
            ka[2] = da;
            ka[3] = ea;
            ka[4] = fa;
            ka[5] = ga;
            ka[6] = ha;
            ka[7] = ia;
            ka[8] = ja;
            return ka;
        };
        u.determinant = function(ba) {
            var ca = ba[0],
                da = ba[1],
                ea = ba[2],
                fa = ba[3],
                ga = ba[4],
                ha = ba[5],
                ia = ba[6],
                ja = ba[7],
                ka = ba[8];
            return ca * (ka * ga - ha * ja) + da * (-ka * fa + ha * ia) + ea * (ja * fa - ga * ia);
        };
        u.inverse = function(ba, ca) {
            var da = ba[0],
                ea = ba[1],
                fa = ba[2],
                ga = ba[3],
                ha = ba[4],
                ia = ba[5],
                ja = ba[6],
                ka = ba[7],
                la = ba[8],
                ma = la * ha - ia * ka,
                na = -la * ga + ia * ja,
                oa = ka * ga - ha * ja,
                pa = da * ma + ea * na + fa * oa,
                qa;
            if (!pa) return null;
            qa = 1 / pa;
            if (!ca) ca = u.create();
            ca[0] = ma * qa;
            ca[1] = (-la * ea + fa * ka) * qa;
            ca[2] = (ia * ea - fa * ha) * qa;
            ca[3] = na * qa;
            ca[4] = (la * da - fa * ja) * qa;
            ca[5] = (-ia * da + fa * ga) * qa;
            ca[6] = oa * qa;
            ca[7] = (-ka * da + ea * ja) * qa;
            ca[8] = (ha * da - ea * ga) * qa;
            return ca;
        };
        u.multiply = function(ba, ca, da) {
            if (!da) da = ba;
            var ea = ba[0],
                fa = ba[1],
                ga = ba[2],
                ha = ba[3],
                ia = ba[4],
                ja = ba[5],
                ka = ba[6],
                la = ba[7],
                ma = ba[8],
                na = ca[0],
                oa = ca[1],
                pa = ca[2],
                qa = ca[3],
                ra = ca[4],
                sa = ca[5],
                ta = ca[6],
                ua = ca[7],
                va = ca[8];
            da[0] = na * ea + oa * ha + pa * ka;
            da[1] = na * fa + oa * ia + pa * la;
            da[2] = na * ga + oa * ja + pa * ma;
            da[3] = qa * ea + ra * ha + sa * ka;
            da[4] = qa * fa + ra * ia + sa * la;
            da[5] = qa * ga + ra * ja + sa * ma;
            da[6] = ta * ea + ua * ha + va * ka;
            da[7] = ta * fa + ua * ia + va * la;
            da[8] = ta * ga + ua * ja + va * ma;
            return da;
        };
        u.multiplyVec2 = function(ba, ca, da) {
            if (!da) da = ca;
            var ea = ca[0],
                fa = ca[1];
            da[0] = ea * ba[0] + fa * ba[3] + ba[6];
            da[1] = ea * ba[1] + fa * ba[4] + ba[7];
            return da;
        };
        u.multiplyVec3 = function(ba, ca, da) {
            if (!da) da = ca;
            var ea = ca[0],
                fa = ca[1],
                ga = ca[2];
            da[0] = ea * ba[0] + fa * ba[3] + ga * ba[6];
            da[1] = ea * ba[1] + fa * ba[4] + ga * ba[7];
            da[2] = ea * ba[2] + fa * ba[5] + ga * ba[8];
            return da;
        };
        u.set = function(ba, ca) {
            ca[0] = ba[0];
            ca[1] = ba[1];
            ca[2] = ba[2];
            ca[3] = ba[3];
            ca[4] = ba[4];
            ca[5] = ba[5];
            ca[6] = ba[6];
            ca[7] = ba[7];
            ca[8] = ba[8];
            return ca;
        };
        u.equal = function(ba, ca) {
            return ba === ca || (Math.abs(ba[0] - ca[0]) < i && Math.abs(ba[1] - ca[1]) < i && Math.abs(ba[2] - ca[2]) < i && Math.abs(ba[3] - ca[3]) < i && Math.abs(ba[4] - ca[4]) < i && Math.abs(ba[5] - ca[5]) < i && Math.abs(ba[6] - ca[6]) < i && Math.abs(ba[7] - ca[7]) < i && Math.abs(ba[8] - ca[8]) < i);
        };
        u.identity = function(ba) {
            if (!ba) ba = u.create();
            ba[0] = 1;
            ba[1] = 0;
            ba[2] = 0;
            ba[3] = 0;
            ba[4] = 1;
            ba[5] = 0;
            ba[6] = 0;
            ba[7] = 0;
            ba[8] = 1;
            return ba;
        };
        u.transpose = function(ba, ca) {
            if (!ca || ba === ca) {
                var da = ba[1],
                    ea = ba[2],
                    fa = ba[5];
                ba[1] = ba[3];
                ba[2] = ba[6];
                ba[3] = da;
                ba[5] = ba[7];
                ba[6] = ea;
                ba[7] = fa;
                return ba;
            }
            ca[0] = ba[0];
            ca[1] = ba[3];
            ca[2] = ba[6];
            ca[3] = ba[1];
            ca[4] = ba[4];
            ca[5] = ba[7];
            ca[6] = ba[2];
            ca[7] = ba[5];
            ca[8] = ba[8];
            return ca;
        };
        u.toMat4 = function(ba, ca) {
            if (!ca) ca = v.create();
            ca[15] = 1;
            ca[14] = 0;
            ca[13] = 0;
            ca[12] = 0;
            ca[11] = 0;
            ca[10] = ba[8];
            ca[9] = ba[7];
            ca[8] = ba[6];
            ca[7] = 0;
            ca[6] = ba[5];
            ca[5] = ba[4];
            ca[4] = ba[3];
            ca[3] = 0;
            ca[2] = ba[2];
            ca[1] = ba[1];
            ca[0] = ba[0];
            return ca;
        };
        u.str = function(ba) {
            return '[' + ba[0] + ', ' + ba[1] + ', ' + ba[2] + ', ' + ba[3] + ', ' + ba[4] + ', ' + ba[5] + ', ' + ba[6] + ', ' + ba[7] + ', ' + ba[8] + ']';
        };
        var v = {};
        v.create = function(ba) {
            var ca = new k(16);
            if (ba) {
                ca[0] = ba[0];
                ca[1] = ba[1];
                ca[2] = ba[2];
                ca[3] = ba[3];
                ca[4] = ba[4];
                ca[5] = ba[5];
                ca[6] = ba[6];
                ca[7] = ba[7];
                ca[8] = ba[8];
                ca[9] = ba[9];
                ca[10] = ba[10];
                ca[11] = ba[11];
                ca[12] = ba[12];
                ca[13] = ba[13];
                ca[14] = ba[14];
                ca[15] = ba[15];
            }
            return ca;
        };
        v.createFrom = function(ba, ca, da, ea, fa, ga, ha, ia, ja, ka, la, ma, na, oa, pa, qa) {
            var ra = new k(16);
            ra[0] = ba;
            ra[1] = ca;
            ra[2] = da;
            ra[3] = ea;
            ra[4] = fa;
            ra[5] = ga;
            ra[6] = ha;
            ra[7] = ia;
            ra[8] = ja;
            ra[9] = ka;
            ra[10] = la;
            ra[11] = ma;
            ra[12] = na;
            ra[13] = oa;
            ra[14] = pa;
            ra[15] = qa;
            return ra;
        };
        v.set = function(ba, ca) {
            ca[0] = ba[0];
            ca[1] = ba[1];
            ca[2] = ba[2];
            ca[3] = ba[3];
            ca[4] = ba[4];
            ca[5] = ba[5];
            ca[6] = ba[6];
            ca[7] = ba[7];
            ca[8] = ba[8];
            ca[9] = ba[9];
            ca[10] = ba[10];
            ca[11] = ba[11];
            ca[12] = ba[12];
            ca[13] = ba[13];
            ca[14] = ba[14];
            ca[15] = ba[15];
            return ca;
        };
        v.equal = function(ba, ca) {
            return ba === ca || (Math.abs(ba[0] - ca[0]) < i && Math.abs(ba[1] - ca[1]) < i && Math.abs(ba[2] - ca[2]) < i && Math.abs(ba[3] - ca[3]) < i && Math.abs(ba[4] - ca[4]) < i && Math.abs(ba[5] - ca[5]) < i && Math.abs(ba[6] - ca[6]) < i && Math.abs(ba[7] - ca[7]) < i && Math.abs(ba[8] - ca[8]) < i && Math.abs(ba[9] - ca[9]) < i && Math.abs(ba[10] - ca[10]) < i && Math.abs(ba[11] - ca[11]) < i && Math.abs(ba[12] - ca[12]) < i && Math.abs(ba[13] - ca[13]) < i && Math.abs(ba[14] - ca[14]) < i && Math.abs(ba[15] - ca[15]) < i);
        };
        v.identity = function(ba) {
            if (!ba) ba = v.create();
            ba[0] = 1;
            ba[1] = 0;
            ba[2] = 0;
            ba[3] = 0;
            ba[4] = 0;
            ba[5] = 1;
            ba[6] = 0;
            ba[7] = 0;
            ba[8] = 0;
            ba[9] = 0;
            ba[10] = 1;
            ba[11] = 0;
            ba[12] = 0;
            ba[13] = 0;
            ba[14] = 0;
            ba[15] = 1;
            return ba;
        };
        v.transpose = function(ba, ca) {
            if (!ca || ba === ca) {
                var da = ba[1],
                    ea = ba[2],
                    fa = ba[3],
                    ga = ba[6],
                    ha = ba[7],
                    ia = ba[11];
                ba[1] = ba[4];
                ba[2] = ba[8];
                ba[3] = ba[12];
                ba[4] = da;
                ba[6] = ba[9];
                ba[7] = ba[13];
                ba[8] = ea;
                ba[9] = ga;
                ba[11] = ba[14];
                ba[12] = fa;
                ba[13] = ha;
                ba[14] = ia;
                return ba;
            }
            ca[0] = ba[0];
            ca[1] = ba[4];
            ca[2] = ba[8];
            ca[3] = ba[12];
            ca[4] = ba[1];
            ca[5] = ba[5];
            ca[6] = ba[9];
            ca[7] = ba[13];
            ca[8] = ba[2];
            ca[9] = ba[6];
            ca[10] = ba[10];
            ca[11] = ba[14];
            ca[12] = ba[3];
            ca[13] = ba[7];
            ca[14] = ba[11];
            ca[15] = ba[15];
            return ca;
        };
        v.determinant = function(ba) {
            var ca = ba[0],
                da = ba[1],
                ea = ba[2],
                fa = ba[3],
                ga = ba[4],
                ha = ba[5],
                ia = ba[6],
                ja = ba[7],
                ka = ba[8],
                la = ba[9],
                ma = ba[10],
                na = ba[11],
                oa = ba[12],
                pa = ba[13],
                qa = ba[14],
                ra = ba[15];
            return (oa * la * ia * fa - ka * pa * ia * fa - oa * ha * ma * fa + ga * pa * ma * fa + ka * ha * qa * fa - ga * la * qa * fa - oa * la * ea * ja + ka * pa * ea * ja + oa * da * ma * ja - ca * pa * ma * ja - ka * da * qa * ja + ca * la * qa * ja + oa * ha * ea * na - ga * pa * ea * na - oa * da * ia * na + ca * pa * ia * na + ga * da * qa * na - ca * ha * qa * na - ka * ha * ea * ra + ga * la * ea * ra + ka * da * ia * ra - ca * la * ia * ra - ga * da * ma * ra + ca * ha * ma * ra);
        };
        v.inverse = function(ba, ca) {
            if (!ca) ca = ba;
            var da = ba[0],
                ea = ba[1],
                fa = ba[2],
                ga = ba[3],
                ha = ba[4],
                ia = ba[5],
                ja = ba[6],
                ka = ba[7],
                la = ba[8],
                ma = ba[9],
                na = ba[10],
                oa = ba[11],
                pa = ba[12],
                qa = ba[13],
                ra = ba[14],
                sa = ba[15],
                ta = da * ia - ea * ha,
                ua = da * ja - fa * ha,
                va = da * ka - ga * ha,
                wa = ea * ja - fa * ia,
                xa = ea * ka - ga * ia,
                ya = fa * ka - ga * ja,
                za = la * qa - ma * pa,
                ab = la * ra - na * pa,
                bb = la * sa - oa * pa,
                cb = ma * ra - na * qa,
                db = ma * sa - oa * qa,
                eb = na * sa - oa * ra,
                fb = (ta * eb - ua * db + va * cb + wa * bb - xa * ab + ya * za),
                gb;
            if (!fb) return null;
            gb = 1 / fb;
            ca[0] = (ia * eb - ja * db + ka * cb) * gb;
            ca[1] = (-ea * eb + fa * db - ga * cb) * gb;
            ca[2] = (qa * ya - ra * xa + sa * wa) * gb;
            ca[3] = (-ma * ya + na * xa - oa * wa) * gb;
            ca[4] = (-ha * eb + ja * bb - ka * ab) * gb;
            ca[5] = (da * eb - fa * bb + ga * ab) * gb;
            ca[6] = (-pa * ya + ra * va - sa * ua) * gb;
            ca[7] = (la * ya - na * va + oa * ua) * gb;
            ca[8] = (ha * db - ia * bb + ka * za) * gb;
            ca[9] = (-da * db + ea * bb - ga * za) * gb;
            ca[10] = (pa * xa - qa * va + sa * ta) * gb;
            ca[11] = (-la * xa + ma * va - oa * ta) * gb;
            ca[12] = (-ha * cb + ia * ab - ja * za) * gb;
            ca[13] = (da * cb - ea * ab + fa * za) * gb;
            ca[14] = (-pa * wa + qa * ua - ra * ta) * gb;
            ca[15] = (la * wa - ma * ua + na * ta) * gb;
            return ca;
        };
        v.toRotationMat = function(ba, ca) {
            if (!ca) ca = v.create();
            ca[0] = ba[0];
            ca[1] = ba[1];
            ca[2] = ba[2];
            ca[3] = ba[3];
            ca[4] = ba[4];
            ca[5] = ba[5];
            ca[6] = ba[6];
            ca[7] = ba[7];
            ca[8] = ba[8];
            ca[9] = ba[9];
            ca[10] = ba[10];
            ca[11] = ba[11];
            ca[12] = 0;
            ca[13] = 0;
            ca[14] = 0;
            ca[15] = 1;
            return ca;
        };
        v.toMat3 = function(ba, ca) {
            if (!ca) ca = u.create();
            ca[0] = ba[0];
            ca[1] = ba[1];
            ca[2] = ba[2];
            ca[3] = ba[4];
            ca[4] = ba[5];
            ca[5] = ba[6];
            ca[6] = ba[8];
            ca[7] = ba[9];
            ca[8] = ba[10];
            return ca;
        };
        v.toInverseMat3 = function(ba, ca) {
            var da = ba[0],
                ea = ba[1],
                fa = ba[2],
                ga = ba[4],
                ha = ba[5],
                ia = ba[6],
                ja = ba[8],
                ka = ba[9],
                la = ba[10],
                ma = la * ha - ia * ka,
                na = -la * ga + ia * ja,
                oa = ka * ga - ha * ja,
                pa = da * ma + ea * na + fa * oa,
                qa;
            if (!pa) return null;
            qa = 1 / pa;
            if (!ca) ca = u.create();
            ca[0] = ma * qa;
            ca[1] = (-la * ea + fa * ka) * qa;
            ca[2] = (ia * ea - fa * ha) * qa;
            ca[3] = na * qa;
            ca[4] = (la * da - fa * ja) * qa;
            ca[5] = (-ia * da + fa * ga) * qa;
            ca[6] = oa * qa;
            ca[7] = (-ka * da + ea * ja) * qa;
            ca[8] = (ha * da - ea * ga) * qa;
            return ca;
        };
        v.multiply = function(ba, ca, da) {
            if (!da) da = ba;
            var ea = ba[0],
                fa = ba[1],
                ga = ba[2],
                ha = ba[3],
                ia = ba[4],
                ja = ba[5],
                ka = ba[6],
                la = ba[7],
                ma = ba[8],
                na = ba[9],
                oa = ba[10],
                pa = ba[11],
                qa = ba[12],
                ra = ba[13],
                sa = ba[14],
                ta = ba[15],
                ua = ca[0],
                va = ca[1],
                wa = ca[2],
                xa = ca[3];
            da[0] = ua * ea + va * ia + wa * ma + xa * qa;
            da[1] = ua * fa + va * ja + wa * na + xa * ra;
            da[2] = ua * ga + va * ka + wa * oa + xa * sa;
            da[3] = ua * ha + va * la + wa * pa + xa * ta;
            ua = ca[4];
            va = ca[5];
            wa = ca[6];
            xa = ca[7];
            da[4] = ua * ea + va * ia + wa * ma + xa * qa;
            da[5] = ua * fa + va * ja + wa * na + xa * ra;
            da[6] = ua * ga + va * ka + wa * oa + xa * sa;
            da[7] = ua * ha + va * la + wa * pa + xa * ta;
            ua = ca[8];
            va = ca[9];
            wa = ca[10];
            xa = ca[11];
            da[8] = ua * ea + va * ia + wa * ma + xa * qa;
            da[9] = ua * fa + va * ja + wa * na + xa * ra;
            da[10] = ua * ga + va * ka + wa * oa + xa * sa;
            da[11] = ua * ha + va * la + wa * pa + xa * ta;
            ua = ca[12];
            va = ca[13];
            wa = ca[14];
            xa = ca[15];
            da[12] = ua * ea + va * ia + wa * ma + xa * qa;
            da[13] = ua * fa + va * ja + wa * na + xa * ra;
            da[14] = ua * ga + va * ka + wa * oa + xa * sa;
            da[15] = ua * ha + va * la + wa * pa + xa * ta;
            return da;
        };
        v.multiplyVec3 = function(ba, ca, da) {
            if (!da) da = ca;
            var ea = ca[0],
                fa = ca[1],
                ga = ca[2];
            da[0] = ba[0] * ea + ba[4] * fa + ba[8] * ga + ba[12];
            da[1] = ba[1] * ea + ba[5] * fa + ba[9] * ga + ba[13];
            da[2] = ba[2] * ea + ba[6] * fa + ba[10] * ga + ba[14];
            return da;
        };
        v.multiplyVec4 = function(ba, ca, da) {
            if (!da) da = ca;
            var ea = ca[0],
                fa = ca[1],
                ga = ca[2],
                ha = ca[3];
            da[0] = ba[0] * ea + ba[4] * fa + ba[8] * ga + ba[12] * ha;
            da[1] = ba[1] * ea + ba[5] * fa + ba[9] * ga + ba[13] * ha;
            da[2] = ba[2] * ea + ba[6] * fa + ba[10] * ga + ba[14] * ha;
            da[3] = ba[3] * ea + ba[7] * fa + ba[11] * ga + ba[15] * ha;
            return da;
        };
        v.translate = function(ba, ca, da) {
            var ea = ca[0],
                fa = ca[1],
                ga = ca[2],
                ha, ia, ja, ka, la, ma, na, oa, pa, qa, ra, sa;
            if (!da || ba === da) {
                ba[12] = ba[0] * ea + ba[4] * fa + ba[8] * ga + ba[12];
                ba[13] = ba[1] * ea + ba[5] * fa + ba[9] * ga + ba[13];
                ba[14] = ba[2] * ea + ba[6] * fa + ba[10] * ga + ba[14];
                ba[15] = ba[3] * ea + ba[7] * fa + ba[11] * ga + ba[15];
                return ba;
            }
            ha = ba[0];
            ia = ba[1];
            ja = ba[2];
            ka = ba[3];
            la = ba[4];
            ma = ba[5];
            na = ba[6];
            oa = ba[7];
            pa = ba[8];
            qa = ba[9];
            ra = ba[10];
            sa = ba[11];
            da[0] = ha;
            da[1] = ia;
            da[2] = ja;
            da[3] = ka;
            da[4] = la;
            da[5] = ma;
            da[6] = na;
            da[7] = oa;
            da[8] = pa;
            da[9] = qa;
            da[10] = ra;
            da[11] = sa;
            da[12] = ha * ea + la * fa + pa * ga + ba[12];
            da[13] = ia * ea + ma * fa + qa * ga + ba[13];
            da[14] = ja * ea + na * fa + ra * ga + ba[14];
            da[15] = ka * ea + oa * fa + sa * ga + ba[15];
            return da;
        };
        v.scale = function(ba, ca, da) {
            var ea = ca[0],
                fa = ca[1],
                ga = ca[2];
            if (!da || ba === da) {
                ba[0] *= ea;
                ba[1] *= ea;
                ba[2] *= ea;
                ba[3] *= ea;
                ba[4] *= fa;
                ba[5] *= fa;
                ba[6] *= fa;
                ba[7] *= fa;
                ba[8] *= ga;
                ba[9] *= ga;
                ba[10] *= ga;
                ba[11] *= ga;
                return ba;
            }
            da[0] = ba[0] * ea;
            da[1] = ba[1] * ea;
            da[2] = ba[2] * ea;
            da[3] = ba[3] * ea;
            da[4] = ba[4] * fa;
            da[5] = ba[5] * fa;
            da[6] = ba[6] * fa;
            da[7] = ba[7] * fa;
            da[8] = ba[8] * ga;
            da[9] = ba[9] * ga;
            da[10] = ba[10] * ga;
            da[11] = ba[11] * ga;
            da[12] = ba[12];
            da[13] = ba[13];
            da[14] = ba[14];
            da[15] = ba[15];
            return da;
        };
        v.rotate = function(ba, ca, da, ea) {
            var fa = da[0],
                ga = da[1],
                ha = da[2],
                ia = Math.sqrt(fa * fa + ga * ga + ha * ha),
                ja, ka, la, ma, na, oa, pa, qa, ra, sa, ta, ua, va, wa, xa, ya, za, ab, bb, cb, db, eb, fb, gb;
            if (!ia) return null;
            if (ia !== 1) {
                ia = 1 / ia;
                fa *= ia;
                ga *= ia;
                ha *= ia;
            }
            ja = Math.sin(ca);
            ka = Math.cos(ca);
            la = 1 - ka;
            ma = ba[0];
            na = ba[1];
            oa = ba[2];
            pa = ba[3];
            qa = ba[4];
            ra = ba[5];
            sa = ba[6];
            ta = ba[7];
            ua = ba[8];
            va = ba[9];
            wa = ba[10];
            xa = ba[11];
            ya = fa * fa * la + ka;
            za = ga * fa * la + ha * ja;
            ab = ha * fa * la - ga * ja;
            bb = fa * ga * la - ha * ja;
            cb = ga * ga * la + ka;
            db = ha * ga * la + fa * ja;
            eb = fa * ha * la + ga * ja;
            fb = ga * ha * la - fa * ja;
            gb = ha * ha * la + ka;
            if (!ea) {
                ea = ba;
            } else if (ba !== ea) {
                ea[12] = ba[12];
                ea[13] = ba[13];
                ea[14] = ba[14];
                ea[15] = ba[15];
            }
            ea[0] = ma * ya + qa * za + ua * ab;
            ea[1] = na * ya + ra * za + va * ab;
            ea[2] = oa * ya + sa * za + wa * ab;
            ea[3] = pa * ya + ta * za + xa * ab;
            ea[4] = ma * bb + qa * cb + ua * db;
            ea[5] = na * bb + ra * cb + va * db;
            ea[6] = oa * bb + sa * cb + wa * db;
            ea[7] = pa * bb + ta * cb + xa * db;
            ea[8] = ma * eb + qa * fb + ua * gb;
            ea[9] = na * eb + ra * fb + va * gb;
            ea[10] = oa * eb + sa * fb + wa * gb;
            ea[11] = pa * eb + ta * fb + xa * gb;
            return ea;
        };
        v.rotateX = function(ba, ca, da) {
            var ea = Math.sin(ca),
                fa = Math.cos(ca),
                ga = ba[4],
                ha = ba[5],
                ia = ba[6],
                ja = ba[7],
                ka = ba[8],
                la = ba[9],
                ma = ba[10],
                na = ba[11];
            if (!da) {
                da = ba;
            } else if (ba !== da) {
                da[0] = ba[0];
                da[1] = ba[1];
                da[2] = ba[2];
                da[3] = ba[3];
                da[12] = ba[12];
                da[13] = ba[13];
                da[14] = ba[14];
                da[15] = ba[15];
            }
            da[4] = ga * fa + ka * ea;
            da[5] = ha * fa + la * ea;
            da[6] = ia * fa + ma * ea;
            da[7] = ja * fa + na * ea;
            da[8] = ga * -ea + ka * fa;
            da[9] = ha * -ea + la * fa;
            da[10] = ia * -ea + ma * fa;
            da[11] = ja * -ea + na * fa;
            return da;
        };
        v.rotateY = function(ba, ca, da) {
            var ea = Math.sin(ca),
                fa = Math.cos(ca),
                ga = ba[0],
                ha = ba[1],
                ia = ba[2],
                ja = ba[3],
                ka = ba[8],
                la = ba[9],
                ma = ba[10],
                na = ba[11];
            if (!da) {
                da = ba;
            } else if (ba !== da) {
                da[4] = ba[4];
                da[5] = ba[5];
                da[6] = ba[6];
                da[7] = ba[7];
                da[12] = ba[12];
                da[13] = ba[13];
                da[14] = ba[14];
                da[15] = ba[15];
            }
            da[0] = ga * fa + ka * -ea;
            da[1] = ha * fa + la * -ea;
            da[2] = ia * fa + ma * -ea;
            da[3] = ja * fa + na * -ea;
            da[8] = ga * ea + ka * fa;
            da[9] = ha * ea + la * fa;
            da[10] = ia * ea + ma * fa;
            da[11] = ja * ea + na * fa;
            return da;
        };
        v.rotateZ = function(ba, ca, da) {
            var ea = Math.sin(ca),
                fa = Math.cos(ca),
                ga = ba[0],
                ha = ba[1],
                ia = ba[2],
                ja = ba[3],
                ka = ba[4],
                la = ba[5],
                ma = ba[6],
                na = ba[7];
            if (!da) {
                da = ba;
            } else if (ba !== da) {
                da[8] = ba[8];
                da[9] = ba[9];
                da[10] = ba[10];
                da[11] = ba[11];
                da[12] = ba[12];
                da[13] = ba[13];
                da[14] = ba[14];
                da[15] = ba[15];
            }
            da[0] = ga * fa + ka * ea;
            da[1] = ha * fa + la * ea;
            da[2] = ia * fa + ma * ea;
            da[3] = ja * fa + na * ea;
            da[4] = ga * -ea + ka * fa;
            da[5] = ha * -ea + la * fa;
            da[6] = ia * -ea + ma * fa;
            da[7] = ja * -ea + na * fa;
            return da;
        };
        v.frustum = function(ba, ca, da, ea, fa, ga, ha) {
            if (!ha) ha = v.create();
            var ia = (ca - ba),
                ja = (ea - da),
                ka = (ga - fa);
            ha[0] = (fa * 2) / ia;
            ha[1] = 0;
            ha[2] = 0;
            ha[3] = 0;
            ha[4] = 0;
            ha[5] = (fa * 2) / ja;
            ha[6] = 0;
            ha[7] = 0;
            ha[8] = (ca + ba) / ia;
            ha[9] = (ea + da) / ja;
            ha[10] = -(ga + fa) / ka;
            ha[11] = -1;
            ha[12] = 0;
            ha[13] = 0;
            ha[14] = -(ga * fa * 2) / ka;
            ha[15] = 0;
            return ha;
        };
        v.perspective = function(ba, ca, da, ea, fa) {
            var ga = da * Math.tan(ba * Math.PI / 360),
                ha = ga * ca;
            return v.frustum(-ha, ha, -ga, ga, da, ea, fa);
        };
        v.ortho = function(ba, ca, da, ea, fa, ga, ha) {
            if (!ha) ha = v.create();
            var ia = (ca - ba),
                ja = (ea - da),
                ka = (ga - fa);
            ha[0] = 2 / ia;
            ha[1] = 0;
            ha[2] = 0;
            ha[3] = 0;
            ha[4] = 0;
            ha[5] = 2 / ja;
            ha[6] = 0;
            ha[7] = 0;
            ha[8] = 0;
            ha[9] = 0;
            ha[10] = -2 / ka;
            ha[11] = 0;
            ha[12] = -(ba + ca) / ia;
            ha[13] = -(ea + da) / ja;
            ha[14] = -(ga + fa) / ka;
            ha[15] = 1;
            return ha;
        };
        v.lookAt = function(ba, ca, da, ea) {
            if (!ea) ea = v.create();
            var fa, ga, ha, ia, ja, ka, la, ma, na, oa, pa = ba[0],
                qa = ba[1],
                ra = ba[2],
                sa = da[0],
                ta = da[1],
                ua = da[2],
                va = ca[0],
                wa = ca[1],
                xa = ca[2];
            if (pa === va && qa === wa && ra === xa) return v.identity(ea);
            la = pa - va;
            ma = qa - wa;
            na = ra - xa;
            oa = 1 / Math.sqrt(la * la + ma * ma + na * na);
            la *= oa;
            ma *= oa;
            na *= oa;
            fa = ta * na - ua * ma;
            ga = ua * la - sa * na;
            ha = sa * ma - ta * la;
            oa = Math.sqrt(fa * fa + ga * ga + ha * ha);
            if (!oa) {
                fa = 0;
                ga = 0;
                ha = 0;
            } else {
                oa = 1 / oa;
                fa *= oa;
                ga *= oa;
                ha *= oa;
            }
            ia = ma * ha - na * ga;
            ja = na * fa - la * ha;
            ka = la * ga - ma * fa;
            oa = Math.sqrt(ia * ia + ja * ja + ka * ka);
            if (!oa) {
                ia = 0;
                ja = 0;
                ka = 0;
            } else {
                oa = 1 / oa;
                ia *= oa;
                ja *= oa;
                ka *= oa;
            }
            ea[0] = fa;
            ea[1] = ia;
            ea[2] = la;
            ea[3] = 0;
            ea[4] = ga;
            ea[5] = ja;
            ea[6] = ma;
            ea[7] = 0;
            ea[8] = ha;
            ea[9] = ka;
            ea[10] = na;
            ea[11] = 0;
            ea[12] = -(fa * pa + ga * qa + ha * ra);
            ea[13] = -(ia * pa + ja * qa + ka * ra);
            ea[14] = -(la * pa + ma * qa + na * ra);
            ea[15] = 1;
            return ea;
        };
        v.fromRotationTranslation = function(ba, ca, da) {
            if (!da) da = v.create();
            var ea = ba[0],
                fa = ba[1],
                ga = ba[2],
                ha = ba[3],
                ia = ea + ea,
                ja = fa + fa,
                ka = ga + ga,
                la = ea * ia,
                ma = ea * ja,
                na = ea * ka,
                oa = fa * ja,
                pa = fa * ka,
                qa = ga * ka,
                ra = ha * ia,
                sa = ha * ja,
                ta = ha * ka;
            da[0] = 1 - (oa + qa);
            da[1] = ma + ta;
            da[2] = na - sa;
            da[3] = 0;
            da[4] = ma - ta;
            da[5] = 1 - (la + qa);
            da[6] = pa + ra;
            da[7] = 0;
            da[8] = na + sa;
            da[9] = pa - ra;
            da[10] = 1 - (la + oa);
            da[11] = 0;
            da[12] = ca[0];
            da[13] = ca[1];
            da[14] = ca[2];
            da[15] = 1;
            return da;
        };
        v.str = function(ba) {
            return '[' + ba[0] + ', ' + ba[1] + ', ' + ba[2] + ', ' + ba[3] + ', ' + ba[4] + ', ' + ba[5] + ', ' + ba[6] + ', ' + ba[7] + ', ' + ba[8] + ', ' + ba[9] + ', ' + ba[10] + ', ' + ba[11] + ', ' + ba[12] + ', ' + ba[13] + ', ' + ba[14] + ', ' + ba[15] + ']';
        };
        var w = {};
        w.create = function(ba) {
            var ca = new k(4);
            if (ba) {
                ca[0] = ba[0];
                ca[1] = ba[1];
                ca[2] = ba[2];
                ca[3] = ba[3];
            } else ca[0] = ca[1] = ca[2] = ca[3] = 0;
            return ca;
        };
        w.createFrom = function(ba, ca, da, ea) {
            var fa = new k(4);
            fa[0] = ba;
            fa[1] = ca;
            fa[2] = da;
            fa[3] = ea;
            return fa;
        };
        w.set = function(ba, ca) {
            ca[0] = ba[0];
            ca[1] = ba[1];
            ca[2] = ba[2];
            ca[3] = ba[3];
            return ca;
        };
        w.equal = function(ba, ca) {
            return ba === ca || (Math.abs(ba[0] - ca[0]) < i && Math.abs(ba[1] - ca[1]) < i && Math.abs(ba[2] - ca[2]) < i && Math.abs(ba[3] - ca[3]) < i);
        };
        w.identity = function(ba) {
            if (!ba) ba = w.create();
            ba[0] = 0;
            ba[1] = 0;
            ba[2] = 0;
            ba[3] = 1;
            return ba;
        };
        var x = w.identity();
        w.calculateW = function(ba, ca) {
            var da = ba[0],
                ea = ba[1],
                fa = ba[2];
            if (!ca || ba === ca) {
                ba[3] = -Math.sqrt(Math.abs(1 - da * da - ea * ea - fa * fa));
                return ba;
            }
            ca[0] = da;
            ca[1] = ea;
            ca[2] = fa;
            ca[3] = -Math.sqrt(Math.abs(1 - da * da - ea * ea - fa * fa));
            return ca;
        };
        w.dot = function(ba, ca) {
            return ba[0] * ca[0] + ba[1] * ca[1] + ba[2] * ca[2] + ba[3] * ca[3];
        };
        w.inverse = function(ba, ca) {
            var da = ba[0],
                ea = ba[1],
                fa = ba[2],
                ga = ba[3],
                ha = da * da + ea * ea + fa * fa + ga * ga,
                ia = ha ? 1 / ha : 0;
            if (!ca || ba === ca) {
                ba[0] *= -ia;
                ba[1] *= -ia;
                ba[2] *= -ia;
                ba[3] *= ia;
                return ba;
            }
            ca[0] = -ba[0] * ia;
            ca[1] = -ba[1] * ia;
            ca[2] = -ba[2] * ia;
            ca[3] = ba[3] * ia;
            return ca;
        };
        w.conjugate = function(ba, ca) {
            if (!ca || ba === ca) {
                ba[0] *= -1;
                ba[1] *= -1;
                ba[2] *= -1;
                return ba;
            }
            ca[0] = -ba[0];
            ca[1] = -ba[1];
            ca[2] = -ba[2];
            ca[3] = ba[3];
            return ca;
        };
        w.length = function(ba) {
            var ca = ba[0],
                da = ba[1],
                ea = ba[2],
                fa = ba[3];
            return Math.sqrt(ca * ca + da * da + ea * ea + fa * fa);
        };
        w.normalize = function(ba, ca) {
            if (!ca) ca = ba;
            var da = ba[0],
                ea = ba[1],
                fa = ba[2],
                ga = ba[3],
                ha = Math.sqrt(da * da + ea * ea + fa * fa + ga * ga);
            if (ha === 0) {
                ca[0] = 0;
                ca[1] = 0;
                ca[2] = 0;
                ca[3] = 0;
                return ca;
            }
            ha = 1 / ha;
            ca[0] = da * ha;
            ca[1] = ea * ha;
            ca[2] = fa * ha;
            ca[3] = ga * ha;
            return ca;
        };
        w.add = function(ba, ca, da) {
            if (!da || ba === da) {
                ba[0] += ca[0];
                ba[1] += ca[1];
                ba[2] += ca[2];
                ba[3] += ca[3];
                return ba;
            }
            da[0] = ba[0] + ca[0];
            da[1] = ba[1] + ca[1];
            da[2] = ba[2] + ca[2];
            da[3] = ba[3] + ca[3];
            return da;
        };
        w.multiply = function(ba, ca, da) {
            if (!da) da = ba;
            var ea = ba[0],
                fa = ba[1],
                ga = ba[2],
                ha = ba[3],
                ia = ca[0],
                ja = ca[1],
                ka = ca[2],
                la = ca[3];
            da[0] = ea * la + ha * ia + fa * ka - ga * ja;
            da[1] = fa * la + ha * ja + ga * ia - ea * ka;
            da[2] = ga * la + ha * ka + ea * ja - fa * ia;
            da[3] = ha * la - ea * ia - fa * ja - ga * ka;
            return da;
        };
        w.multiplyVec3 = function(ba, ca, da) {
            if (!da) da = ca;
            var ea = ca[0],
                fa = ca[1],
                ga = ca[2],
                ha = ba[0],
                ia = ba[1],
                ja = ba[2],
                ka = ba[3],
                la = ka * ea + ia * ga - ja * fa,
                ma = ka * fa + ja * ea - ha * ga,
                na = ka * ga + ha * fa - ia * ea,
                oa = -ha * ea - ia * fa - ja * ga;
            da[0] = la * ka + oa * -ha + ma * -ja - na * -ia;
            da[1] = ma * ka + oa * -ia + na * -ha - la * -ja;
            da[2] = na * ka + oa * -ja + la * -ia - ma * -ha;
            return da;
        };
        w.scale = function(ba, ca, da) {
            if (!da || ba === da) {
                ba[0] *= ca;
                ba[1] *= ca;
                ba[2] *= ca;
                ba[3] *= ca;
                return ba;
            }
            da[0] = ba[0] * ca;
            da[1] = ba[1] * ca;
            da[2] = ba[2] * ca;
            da[3] = ba[3] * ca;
            return da;
        };
        w.toMat3 = function(ba, ca) {
            if (!ca) ca = u.create();
            var da = ba[0],
                ea = ba[1],
                fa = ba[2],
                ga = ba[3],
                ha = da + da,
                ia = ea + ea,
                ja = fa + fa,
                ka = da * ha,
                la = da * ia,
                ma = da * ja,
                na = ea * ia,
                oa = ea * ja,
                pa = fa * ja,
                qa = ga * ha,
                ra = ga * ia,
                sa = ga * ja;
            ca[0] = 1 - (na + pa);
            ca[1] = la + sa;
            ca[2] = ma - ra;
            ca[3] = la - sa;
            ca[4] = 1 - (ka + pa);
            ca[5] = oa + qa;
            ca[6] = ma + ra;
            ca[7] = oa - qa;
            ca[8] = 1 - (ka + na);
            return ca;
        };
        w.toMat4 = function(ba, ca) {
            if (!ca) ca = v.create();
            var da = ba[0],
                ea = ba[1],
                fa = ba[2],
                ga = ba[3],
                ha = da + da,
                ia = ea + ea,
                ja = fa + fa,
                ka = da * ha,
                la = da * ia,
                ma = da * ja,
                na = ea * ia,
                oa = ea * ja,
                pa = fa * ja,
                qa = ga * ha,
                ra = ga * ia,
                sa = ga * ja;
            ca[0] = 1 - (na + pa);
            ca[1] = la + sa;
            ca[2] = ma - ra;
            ca[3] = 0;
            ca[4] = la - sa;
            ca[5] = 1 - (ka + pa);
            ca[6] = oa + qa;
            ca[7] = 0;
            ca[8] = ma + ra;
            ca[9] = oa - qa;
            ca[10] = 1 - (ka + na);
            ca[11] = 0;
            ca[12] = 0;
            ca[13] = 0;
            ca[14] = 0;
            ca[15] = 1;
            return ca;
        };
        w.slerp = function(ba, ca, da, ea) {
            if (!ea) ea = ba;
            var fa = ba[0] * ca[0] + ba[1] * ca[1] + ba[2] * ca[2] + ba[3] * ca[3],
                ga, ha, ia, ja;
            if (Math.abs(fa) >= 1) {
                if (ea !== ba) {
                    ea[0] = ba[0];
                    ea[1] = ba[1];
                    ea[2] = ba[2];
                    ea[3] = ba[3];
                }
                return ea;
            }
            ga = Math.acos(fa);
            ha = Math.sqrt(1 - fa * fa);
            if (Math.abs(ha) < .001) {
                ea[0] = (ba[0] * .5 + ca[0] * .5);
                ea[1] = (ba[1] * .5 + ca[1] * .5);
                ea[2] = (ba[2] * .5 + ca[2] * .5);
                ea[3] = (ba[3] * .5 + ca[3] * .5);
                return ea;
            }
            ia = Math.sin((1 - da) * ga) / ha;
            ja = Math.sin(da * ga) / ha;
            ea[0] = (ba[0] * ia + ca[0] * ja);
            ea[1] = (ba[1] * ia + ca[1] * ja);
            ea[2] = (ba[2] * ia + ca[2] * ja);
            ea[3] = (ba[3] * ia + ca[3] * ja);
            return ea;
        };
        w.fromRotationMatrix = function(ba, ca) {
            if (!ca) ca = w.create();
            var da = ba[0] + ba[4] + ba[8],
                ea;
            if (da > 0) {
                ea = Math.sqrt(da + 1);
                ca[3] = .5 * ea;
                ea = .5 / ea;
                ca[0] = (ba[7] - ba[5]) * ea;
                ca[1] = (ba[2] - ba[6]) * ea;
                ca[2] = (ba[3] - ba[1]) * ea;
            } else {
                var fa = w.fromRotationMatrix.s_iNext = w.fromRotationMatrix.s_iNext || [1, 2, 0],
                    ga = 0;
                if (ba[4] > ba[0]) ga = 1;
                if (ba[8] > ba[ga * 3 + ga]) ga = 2;
                var ha = fa[ga],
                    ia = fa[ha];
                ea = Math.sqrt(ba[ga * 3 + ga] - ba[ha * 3 + ha] - ba[ia * 3 + ia] + 1);
                ca[ga] = .5 * ea;
                ea = .5 / ea;
                ca[3] = (ba[ia * 3 + ha] - ba[ha * 3 + ia]) * ea;
                ca[ha] = (ba[ha * 3 + ga] + ba[ga * 3 + ha]) * ea;
                ca[ia] = (ba[ia * 3 + ga] + ba[ga * 3 + ia]) * ea;
            }
            return ca;
        };
        u.toQuat4 = w.fromRotationMatrix;
        (function() {
            var ba = u.create();
            w.fromAxes = function(ca, da, ea, fa) {
                ba[0] = da[0];
                ba[3] = da[1];
                ba[6] = da[2];
                ba[1] = ea[0];
                ba[4] = ea[1];
                ba[7] = ea[2];
                ba[2] = ca[0];
                ba[5] = ca[1];
                ba[8] = ca[2];
                return w.fromRotationMatrix(ba, fa);
            };
        })();
        w.identity = function(ba) {
            if (!ba) ba = w.create();
            ba[0] = 0;
            ba[1] = 0;
            ba[2] = 0;
            ba[3] = 1;
            return ba;
        };
        w.fromAngleAxis = function(ba, ca, da) {
            if (!da) da = w.create();
            var ea = ba * .5,
                fa = Math.sin(ea);
            da[3] = Math.cos(ea);
            da[0] = fa * ca[0];
            da[1] = fa * ca[1];
            da[2] = fa * ca[2];
            return da;
        };
        w.toAngleAxis = function(ba, ca) {
            if (!ca) ca = ba;
            var da = ba[0] * ba[0] + ba[1] * ba[1] + ba[2] * ba[2];
            if (da > 0) {
                ca[3] = 2 * Math.acos(ba[3]);
                var ea = j.invsqrt(da);
                ca[0] = ba[0] * ea;
                ca[1] = ba[1] * ea;
                ca[2] = ba[2] * ea;
            } else {
                ca[3] = 0;
                ca[0] = 1;
                ca[1] = 0;
                ca[2] = 0;
            }
            return ca;
        };
        w.str = function(ba) {
            return '[' + ba[0] + ', ' + ba[1] + ', ' + ba[2] + ', ' + ba[3] + ']';
        };
        var y = {};
        y.create = function(ba) {
            var ca = new k(2);
            if (ba) {
                ca[0] = ba[0];
                ca[1] = ba[1];
            } else {
                ca[0] = 0;
                ca[1] = 0;
            }
            return ca;
        };
        y.createFrom = function(ba, ca) {
            var da = new k(2);
            da[0] = ba;
            da[1] = ca;
            return da;
        };
        y.add = function(ba, ca, da) {
            if (!da) da = ca;
            da[0] = ba[0] + ca[0];
            da[1] = ba[1] + ca[1];
            return da;
        };
        y.subtract = function(ba, ca, da) {
            if (!da) da = ca;
            da[0] = ba[0] - ca[0];
            da[1] = ba[1] - ca[1];
            return da;
        };
        y.multiply = function(ba, ca, da) {
            if (!da) da = ca;
            da[0] = ba[0] * ca[0];
            da[1] = ba[1] * ca[1];
            return da;
        };
        y.divide = function(ba, ca, da) {
            if (!da) da = ca;
            da[0] = ba[0] / ca[0];
            da[1] = ba[1] / ca[1];
            return da;
        };
        y.scale = function(ba, ca, da) {
            if (!da) da = ba;
            da[0] = ba[0] * ca;
            da[1] = ba[1] * ca;
            return da;
        };
        y.dist = function(ba, ca) {
            var da = ca[0] - ba[0],
                ea = ca[1] - ba[1];
            return Math.sqrt(da * da + ea * ea);
        };
        y.set = function(ba, ca) {
            ca[0] = ba[0];
            ca[1] = ba[1];
            return ca;
        };
        y.equal = function(ba, ca) {
            return ba === ca || (Math.abs(ba[0] - ca[0]) < i && Math.abs(ba[1] - ca[1]) < i);
        };
        y.negate = function(ba, ca) {
            if (!ca) ca = ba;
            ca[0] = -ba[0];
            ca[1] = -ba[1];
            return ca;
        };
        y.normalize = function(ba, ca) {
            if (!ca) ca = ba;
            var da = ba[0] * ba[0] + ba[1] * ba[1];
            if (da > 0) {
                da = Math.sqrt(da);
                ca[0] = ba[0] / da;
                ca[1] = ba[1] / da;
            } else ca[0] = ca[1] = 0;
            return ca;
        };
        y.cross = function(ba, ca, da) {
            var ea = ba[0] * ca[1] - ba[1] * ca[0];
            if (!da) return ea;
            da[0] = da[1] = 0;
            da[2] = ea;
            return da;
        };
        y.length = function(ba) {
            var ca = ba[0],
                da = ba[1];
            return Math.sqrt(ca * ca + da * da);
        };
        y.squaredLength = function(ba) {
            var ca = ba[0],
                da = ba[1];
            return ca * ca + da * da;
        };
        y.dot = function(ba, ca) {
            return ba[0] * ca[0] + ba[1] * ca[1];
        };
        y.direction = function(ba, ca, da) {
            if (!da) da = ba;
            var ea = ba[0] - ca[0],
                fa = ba[1] - ca[1],
                ga = ea * ea + fa * fa;
            if (!ga) {
                da[0] = 0;
                da[1] = 0;
                da[2] = 0;
                return da;
            }
            ga = 1 / Math.sqrt(ga);
            da[0] = ea * ga;
            da[1] = fa * ga;
            return da;
        };
        y.lerp = function(ba, ca, da, ea) {
            if (!ea) ea = ba;
            ea[0] = ba[0] + da * (ca[0] - ba[0]);
            ea[1] = ba[1] + da * (ca[1] - ba[1]);
            return ea;
        };
        y.str = function(ba) {
            return '[' + ba[0] + ', ' + ba[1] + ']';
        };
        var z = {};
        z.create = function(ba) {
            var ca = new k(4);
            if (ba) {
                ca[0] = ba[0];
                ca[1] = ba[1];
                ca[2] = ba[2];
                ca[3] = ba[3];
            } else ca[0] = ca[1] = ca[2] = ca[3] = 0;
            return ca;
        };
        z.createFrom = function(ba, ca, da, ea) {
            var fa = new k(4);
            fa[0] = ba;
            fa[1] = ca;
            fa[2] = da;
            fa[3] = ea;
            return fa;
        };
        z.set = function(ba, ca) {
            ca[0] = ba[0];
            ca[1] = ba[1];
            ca[2] = ba[2];
            ca[3] = ba[3];
            return ca;
        };
        z.equal = function(ba, ca) {
            return ba === ca || (Math.abs(ba[0] - ca[0]) < i && Math.abs(ba[1] - ca[1]) < i && Math.abs(ba[2] - ca[2]) < i && Math.abs(ba[3] - ca[3]) < i);
        };
        z.identity = function(ba) {
            if (!ba) ba = z.create();
            ba[0] = 1;
            ba[1] = 0;
            ba[2] = 0;
            ba[3] = 1;
            return ba;
        };
        z.transpose = function(ba, ca) {
            if (!ca || ba === ca) {
                var da = ba[1];
                ba[1] = ba[2];
                ba[2] = da;
                return ba;
            }
            ca[0] = ba[0];
            ca[1] = ba[2];
            ca[2] = ba[1];
            ca[3] = ba[3];
            return ca;
        };
        z.determinant = function(ba) {
            return ba[0] * ba[3] - ba[2] * ba[1];
        };
        z.inverse = function(ba, ca) {
            if (!ca) ca = ba;
            var da = ba[0],
                ea = ba[1],
                fa = ba[2],
                ga = ba[3],
                ha = da * ga - fa * ea;
            if (!ha) return null;
            ha = 1 / ha;
            ca[0] = ga * ha;
            ca[1] = -ea * ha;
            ca[2] = -fa * ha;
            ca[3] = da * ha;
            return ca;
        };
        z.multiply = function(ba, ca, da) {
            if (!da) da = ba;
            var ea = ba[0],
                fa = ba[1],
                ga = ba[2],
                ha = ba[3];
            da[0] = ea * ca[0] + fa * ca[2];
            da[1] = ea * ca[1] + fa * ca[3];
            da[2] = ga * ca[0] + ha * ca[2];
            da[3] = ga * ca[1] + ha * ca[3];
            return da;
        };
        z.rotate = function(ba, ca, da) {
            if (!da) da = ba;
            var ea = ba[0],
                fa = ba[1],
                ga = ba[2],
                ha = ba[3],
                ia = Math.sin(ca),
                ja = Math.cos(ca);
            da[0] = ea * ja + fa * ia;
            da[1] = ea * -ia + fa * ja;
            da[2] = ga * ja + ha * ia;
            da[3] = ga * -ia + ha * ja;
            return da;
        };
        z.multiplyVec2 = function(ba, ca, da) {
            if (!da) da = ca;
            var ea = ca[0],
                fa = ca[1];
            da[0] = ea * ba[0] + fa * ba[1];
            da[1] = ea * ba[2] + fa * ba[3];
            return da;
        };
        z.scale = function(ba, ca, da) {
            if (!da) da = ba;
            var ea = ba[0],
                fa = ba[1],
                ga = ba[2],
                ha = ba[3],
                ia = ca[0],
                ja = ca[1];
            da[0] = ea * ia;
            da[1] = fa * ja;
            da[2] = ga * ia;
            da[3] = ha * ja;
            return da;
        };
        z.str = function(ba) {
            return '[' + ba[0] + ', ' + ba[1] + ', ' + ba[2] + ', ' + ba[3] + ']';
        };
        var aa = {};
        aa.create = function(ba) {
            var ca = new k(4);
            if (ba) {
                ca[0] = ba[0];
                ca[1] = ba[1];
                ca[2] = ba[2];
                ca[3] = ba[3];
            } else {
                ca[0] = 0;
                ca[1] = 0;
                ca[2] = 0;
                ca[3] = 0;
            }
            return ca;
        };
        aa.createFrom = function(ba, ca, da, ea) {
            var fa = new k(4);
            fa[0] = ba;
            fa[1] = ca;
            fa[2] = da;
            fa[3] = ea;
            return fa;
        };
        aa.add = function(ba, ca, da) {
            if (!da) da = ca;
            da[0] = ba[0] + ca[0];
            da[1] = ba[1] + ca[1];
            da[2] = ba[2] + ca[2];
            da[3] = ba[3] + ca[3];
            return da;
        };
        aa.subtract = function(ba, ca, da) {
            if (!da) da = ca;
            da[0] = ba[0] - ca[0];
            da[1] = ba[1] - ca[1];
            da[2] = ba[2] - ca[2];
            da[3] = ba[3] - ca[3];
            return da;
        };
        aa.multiply = function(ba, ca, da) {
            if (!da) da = ca;
            da[0] = ba[0] * ca[0];
            da[1] = ba[1] * ca[1];
            da[2] = ba[2] * ca[2];
            da[3] = ba[3] * ca[3];
            return da;
        };
        aa.divide = function(ba, ca, da) {
            if (!da) da = ca;
            da[0] = ba[0] / ca[0];
            da[1] = ba[1] / ca[1];
            da[2] = ba[2] / ca[2];
            da[3] = ba[3] / ca[3];
            return da;
        };
        aa.scale = function(ba, ca, da) {
            if (!da) da = ba;
            da[0] = ba[0] * ca;
            da[1] = ba[1] * ca;
            da[2] = ba[2] * ca;
            da[3] = ba[3] * ca;
            return da;
        };
        aa.set = function(ba, ca) {
            ca[0] = ba[0];
            ca[1] = ba[1];
            ca[2] = ba[2];
            ca[3] = ba[3];
            return ca;
        };
        aa.equal = function(ba, ca) {
            return ba === ca || (Math.abs(ba[0] - ca[0]) < i && Math.abs(ba[1] - ca[1]) < i && Math.abs(ba[2] - ca[2]) < i && Math.abs(ba[3] - ca[3]) < i);
        };
        aa.negate = function(ba, ca) {
            if (!ca) ca = ba;
            ca[0] = -ba[0];
            ca[1] = -ba[1];
            ca[2] = -ba[2];
            ca[3] = -ba[3];
            return ca;
        };
        aa.length = function(ba) {
            var ca = ba[0],
                da = ba[1],
                ea = ba[2],
                fa = ba[3];
            return Math.sqrt(ca * ca + da * da + ea * ea + fa * fa);
        };
        aa.squaredLength = function(ba) {
            var ca = ba[0],
                da = ba[1],
                ea = ba[2],
                fa = ba[3];
            return ca * ca + da * da + ea * ea + fa * fa;
        };
        aa.lerp = function(ba, ca, da, ea) {
            if (!ea) ea = ba;
            ea[0] = ba[0] + da * (ca[0] - ba[0]);
            ea[1] = ba[1] + da * (ca[1] - ba[1]);
            ea[2] = ba[2] + da * (ca[2] - ba[2]);
            ea[3] = ba[3] + da * (ca[3] - ba[3]);
            return ea;
        };
        aa.str = function(ba) {
            return '[' + ba[0] + ', ' + ba[1] + ', ' + ba[2] + ', ' + ba[3] + ']';
        };
        if (h) {
            h.glMatrixArrayType = k;
            h.MatrixArray = k;
            h.setMatrixArrayType = l;
            h.determineMatrixArrayType = m;
            h.glMath = j;
            h.vec2 = y;
            h.vec3 = n;
            h.vec4 = aa;
            h.mat2 = z;
            h.mat3 = u;
            h.mat4 = v;
            h.quat4 = w;
        }
        return {
            glMatrixArrayType: k,
            MatrixArray: k,
            setMatrixArrayType: l,
            determineMatrixArrayType: m,
            glMath: j,
            vec2: y,
            vec3: n,
            vec4: aa,
            mat2: z,
            mat3: u,
            mat4: v,
            quat4: w
        };
    }));
}, null);
__d("degToRad", [], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();

    function h(i) {
        return i * Math.PI / 180;
    }
    f.exports = h;
}, null);
__d('getErrorNameFromWebGLErrorCode', [], function a(b, c, d, e, f, g) {
    if (c.__markCompiled) c.__markCompiled();
    var h = {
        '0': 'NO_ERROR',
        '1280': 'INVALID_ENUM',
        '1281': 'INVALID_VALUE',
        '1282': 'INVALID_OPERATION',
        '1285': 'OUT_OF_MEMORY',
        '1286': 'INVALID_FRAMEBUFFER_OPERATION',
        '37442': 'CONTEXT_LOST_WEBGL'
    };

    function i(j) {
        if (!(j in h)) return 'UNKNOWN_ERROR';
        return h[j];
    }
    f.exports = i;
}, null);
__d('VideoSphericalRenderer', ['VideoProjection', 'GLMatrix', 'degToRad', 'getErrorNameFromWebGLErrorCode'], function a(b, c, d, e, f, g, h, i, j, k) {
    if (c.__markCompiled) c.__markCompiled();
    var l = i.mat4,
        m = window.devicePixelRatio || 1;

    function n(o, p, q) {
        'use strict';
        this.$VideoSphericalRenderer1 = null;
        this.$VideoSphericalRenderer2 = q;
        this.$VideoSphericalRenderer3 = null;
        this.$VideoSphericalRenderer4 = null;
        this.$VideoSphericalRenderer5 = null;
        this.$VideoSphericalRenderer6 = true;
        this.$VideoSphericalRenderer7 = o;
        this.$VideoSphericalRenderer8 = p;
        this.$VideoSphericalRenderer9 = l.create();
        this.$VideoSphericalRenderer10 = l.create();
        this.$VideoSphericalRenderer11 = false;
        this.$VideoSphericalRenderer12 = null;
        this.$VideoSphericalRenderer13 = null;
        this.$VideoSphericalRenderer14 = null;
        this.$VideoSphericalRenderer8.addEventListener('webglcontextlost', (function(r) {
            return this.$VideoSphericalRenderer15(r);
        }).bind(this));
        this.$VideoSphericalRenderer8.addEventListener('webglcontextrestored', (function(r) {
            return this.$VideoSphericalRenderer16(r);
        }).bind(this));
        this.$VideoSphericalRenderer17();
    }
    n.prototype.setErrorHandler = function(o) {
        'use strict';
        this.$VideoSphericalRenderer3 = o;
    };
    n.prototype.$VideoSphericalRenderer15 = function(o) {
        'use strict';
        o.preventDefault();
        this.$VideoSphericalRenderer11 = true;
    };
    n.prototype.$VideoSphericalRenderer16 = function(o) {
        'use strict';
        this.$VideoSphericalRenderer11 = false;
        this.$VideoSphericalRenderer17();
    };
    n.prototype.setAutoUpdateTexture = function(o) {
        'use strict';
        this.$VideoSphericalRenderer6 = o;
    };
    n.prototype.updateViewportDimensions = function(o, p) {
        'use strict';
        this.$VideoSphericalRenderer8.width = o * m;
        this.$VideoSphericalRenderer8.height = p * m;
        l.perspective(this.$VideoSphericalRenderer2.fieldOfView, this.$VideoSphericalRenderer8.width / this.$VideoSphericalRenderer8.height, .1, 100, this.$VideoSphericalRenderer9);
        this.$VideoSphericalRenderer1.viewport(0, 0, this.$VideoSphericalRenderer1.drawingBufferWidth, this.$VideoSphericalRenderer1.drawingBufferHeight);
    };
    n.prototype.$VideoSphericalRenderer17 = function() {
        'use strict';
        this.$VideoSphericalRenderer18();
        this.updateViewportDimensions(this.$VideoSphericalRenderer8.clientWidth, this.$VideoSphericalRenderer8.clientHeight);
        if (!this.$VideoSphericalRenderer19()) throw new Error('Failed to intialize shaders: ' + k(this.$VideoSphericalRenderer1.getError()));
        if (this.$VideoSphericalRenderer2.projectionType == h.CUBEMAP) {
            this.$VideoSphericalRenderer20(this.$VideoSphericalRenderer2.expansionCoef);
        } else this.$VideoSphericalRenderer21();
        this.$VideoSphericalRenderer22();
        this.$VideoSphericalRenderer1.clearColor(0, 0, 0, 1);
        this.$VideoSphericalRenderer7.setAttribute('crossorigin', 'anonymous');
    };
    n.prototype.$VideoSphericalRenderer18 = function() {
        'use strict';
        if (typeof b.WebGLRenderingContext !== 'function') throw new Error('WebGLRenderingContext not available.');
        var o = ['webgl', 'experimental-webgl', 'webkit-3d', 'moz-webgl'],
            p = null,
            q = null,
            r = Event.listen(this.$VideoSphericalRenderer8, 'webglcontextcreationerror', function(u) {
                return q = u.statusMessage;
            });
        for (var s = 0; s < o.length; s++) {
            try {
                p = this.$VideoSphericalRenderer8.getContext(o[s]);
            } catch (t) {}
            if (p) break;
        }
        r.remove();
        this.$VideoSphericalRenderer1 = p;
        if (!this.$VideoSphericalRenderer1) {
            if (!q) q = 'Unknown error.';
            throw new Error('Failed to acquire 3D rendering context: ' + q);
        }
    };
    n.prototype.$VideoSphericalRenderer19 = function() {
        'use strict';
        var o = this.$VideoSphericalRenderer23();
        if (!o) return false;
        var p = this.$VideoSphericalRenderer24();
        if (!p) return false;
        this.$VideoSphericalRenderer4 = this.$VideoSphericalRenderer1.createProgram();
        this.$VideoSphericalRenderer1.attachShader(this.$VideoSphericalRenderer4, o);
        this.$VideoSphericalRenderer1.attachShader(this.$VideoSphericalRenderer4, p);
        this.$VideoSphericalRenderer1.linkProgram(this.$VideoSphericalRenderer4);
        if (!this.$VideoSphericalRenderer1.getProgramParameter(this.$VideoSphericalRenderer4, this.$VideoSphericalRenderer1.LINK_STATUS)) return false;
        this.$VideoSphericalRenderer1.useProgram(this.$VideoSphericalRenderer4);
        this.$VideoSphericalRenderer4.vertexPositionAttribute = this.$VideoSphericalRenderer1.getAttribLocation(this.$VideoSphericalRenderer4, 'aVertexPosition');
        this.$VideoSphericalRenderer1.enableVertexAttribArray(this.$VideoSphericalRenderer4.vertexPositionAttribute);
        this.$VideoSphericalRenderer4.textureCoordAttribute = this.$VideoSphericalRenderer1.getAttribLocation(this.$VideoSphericalRenderer4, 'aTextureCoord');
        this.$VideoSphericalRenderer1.enableVertexAttribArray(this.$VideoSphericalRenderer4.textureCoordAttribute);
        this.$VideoSphericalRenderer4.pMatrixUniform = this.$VideoSphericalRenderer1.getUniformLocation(this.$VideoSphericalRenderer4, 'uPMatrix');
        this.$VideoSphericalRenderer4.mvMatrixUniform = this.$VideoSphericalRenderer1.getUniformLocation(this.$VideoSphericalRenderer4, 'uMVMatrix');
        this.$VideoSphericalRenderer4.samplerUniform = this.$VideoSphericalRenderer1.getUniformLocation(this.$VideoSphericalRenderer4, 'uSampler');
        this.$VideoSphericalRenderer4.uFlag = this.$VideoSphericalRenderer1.getUniformLocation(this.$VideoSphericalRenderer4, 'uFlag');
        return true;
    };
    n.prototype.$VideoSphericalRenderer22 = function() {
        'use strict';
        this.$VideoSphericalRenderer5 = this.$VideoSphericalRenderer1.createTexture();
        this.$VideoSphericalRenderer5.image = this.$VideoSphericalRenderer7;
        this.$VideoSphericalRenderer1.bindTexture(this.$VideoSphericalRenderer1.TEXTURE_2D, this.$VideoSphericalRenderer5);
        this.$VideoSphericalRenderer1.texParameteri(this.$VideoSphericalRenderer1.TEXTURE_2D, this.$VideoSphericalRenderer1.TEXTURE_MAG_FILTER, this.$VideoSphericalRenderer1.LINEAR);
        this.$VideoSphericalRenderer1.texParameteri(this.$VideoSphericalRenderer1.TEXTURE_2D, this.$VideoSphericalRenderer1.TEXTURE_MIN_FILTER, this.$VideoSphericalRenderer1.LINEAR);
        this.$VideoSphericalRenderer1.texParameteri(this.$VideoSphericalRenderer1.TEXTURE_2D, this.$VideoSphericalRenderer1.TEXTURE_WRAP_S, this.$VideoSphericalRenderer1.CLAMP_TO_EDGE);
        this.$VideoSphericalRenderer1.texParameteri(this.$VideoSphericalRenderer1.TEXTURE_2D, this.$VideoSphericalRenderer1.TEXTURE_WRAP_T, this.$VideoSphericalRenderer1.CLAMP_TO_EDGE);
        this.$VideoSphericalRenderer1.bindTexture(this.$VideoSphericalRenderer1.TEXTURE_2D, null);
    };
    n.prototype.$VideoSphericalRenderer21 = function() {        
        'use strict';
        // console.log("$VideoSphericalRenderer21");
        var o = 30,
            p = 30,
            q = 2,
            r = [],
            s = [],
            t, u;
        for (t = 0; t <= o; t++) {
            var v = (t / o - .5) * Math.PI,
                w = Math.sin(v),
                x = Math.cos(v);
            for (u = 0; u <= p; u++) {
                var y = (u / p - .5) * 2 * Math.PI,
                    z = Math.sin(y),
                    aa = Math.cos(y),
                    ba = aa * x,
                    ca = w,
                    da = z * x,
                    ea = u / p,
                    fa = t / o;
                s.push(ea);
                s.push(fa);
                r.push(q * ba);
                r.push(q * ca);
                r.push(q * da);
            }
        }
        var ga = [];
        for (t = 0; t < o; t++)
            for (u = 0; u < p; u++) {
                var ha = t * (p + 1) + u,
                    ia = ha + p + 1;
                ga.push(ha);
                ga.push(ia);
                ga.push(ha + 1);
                ga.push(ia);
                ga.push(ia + 1);
                ga.push(ha + 1);
            }
        this.$VideoSphericalRenderer12 = this.$VideoSphericalRenderer1.createBuffer();
        this.$VideoSphericalRenderer1.bindBuffer(this.$VideoSphericalRenderer1.ARRAY_BUFFER, this.$VideoSphericalRenderer12);
        this.$VideoSphericalRenderer1.bufferData(this.$VideoSphericalRenderer1.ARRAY_BUFFER, new Float32Array(s), this.$VideoSphericalRenderer1.STATIC_DRAW);
        this.$VideoSphericalRenderer12.itemSize = 2;
        this.$VideoSphericalRenderer12.numItems = s.length / 2;
        this.$VideoSphericalRenderer13 = this.$VideoSphericalRenderer1.createBuffer();
        this.$VideoSphericalRenderer1.bindBuffer(this.$VideoSphericalRenderer1.ARRAY_BUFFER, this.$VideoSphericalRenderer13);
        this.$VideoSphericalRenderer1.bufferData(this.$VideoSphericalRenderer1.ARRAY_BUFFER, new Float32Array(r), this.$VideoSphericalRenderer1.STATIC_DRAW);
        this.$VideoSphericalRenderer13.itemSize = 3;
        this.$VideoSphericalRenderer13.numItems = r.length / 3;
        this.$VideoSphericalRenderer14 = this.$VideoSphericalRenderer1.createBuffer();
        this.$VideoSphericalRenderer1.bindBuffer(this.$VideoSphericalRenderer1.ELEMENT_ARRAY_BUFFER, this.$VideoSphericalRenderer14);
        this.$VideoSphericalRenderer1.bufferData(this.$VideoSphericalRenderer1.ELEMENT_ARRAY_BUFFER, new Uint16Array(ga), this.$VideoSphericalRenderer1.STATIC_DRAW);
        this.$VideoSphericalRenderer14.itemSize = 1;
        this.$VideoSphericalRenderer14.numItems = ga.length;
    };
    n.prototype.$VideoSphericalRenderer20 = function(o) {
        'use strict';
        // console.log("$VideoSphericalRenderer20");
        var p = 2,
            q = 3,
            r = [5, 1, 3, 7, 0, 4, 6, 2, 6, 7, 3, 2, 0, 1, 5, 4, 4, 5, 7, 6, 1, 0, 2, 3],
            s = [];
        for (var t = 0; t < r.length; t++) {
            var u = r[t] >> 2 & 1,
                v = r[t] >> 1 & 1,
                w = r[t] >> 0 & 1;
            s.push(u * 2 - 1);
            s.push(v * 2 - 1);
            s.push(w * 2 - 1);
        }
        this.$VideoSphericalRenderer13 = this.$VideoSphericalRenderer1.createBuffer();
        this.$VideoSphericalRenderer1.bindBuffer(this.$VideoSphericalRenderer1.ARRAY_BUFFER, this.$VideoSphericalRenderer13);
        this.$VideoSphericalRenderer1.bufferData(this.$VideoSphericalRenderer1.ARRAY_BUFFER, new Float32Array(s), this.$VideoSphericalRenderer1.STATIC_DRAW);
        // console.log("3 : " + s);
        this.$VideoSphericalRenderer13.itemSize = 3;
        this.$VideoSphericalRenderer13.numItems = s.length / 3;
        var x = [],
            y = 1 / q,
            z = 1 / p,
            aa = (o - 1) / 2;
        for (var ba = 0; ba < p; ++ba)
            for (var ca = 0; ca < q; ++ca) {
                var da = p - 1 - ba,
                    ea = ca;
                x.push((ea + aa) * y);
                x.push((da + aa) * z);
                x.push((ea + 1 - aa) * y);
                x.push((da + aa) * z);
                x.push((ea + 1 - aa) * y);
                x.push((da + 1 - aa) * z);
                x.push((ea + aa) * y);
                x.push((da + 1 - aa) * z);
            }
        this.$VideoSphericalRenderer12 = this.$VideoSphericalRenderer1.createBuffer();
        this.$VideoSphericalRenderer1.bindBuffer(this.$VideoSphericalRenderer1.ARRAY_BUFFER, this.$VideoSphericalRenderer12);
        this.$VideoSphericalRenderer1.bufferData(this.$VideoSphericalRenderer1.ARRAY_BUFFER, new Float32Array(x), this.$VideoSphericalRenderer1.STATIC_DRAW);
        // console.log("2 : " + x);
        this.$VideoSphericalRenderer12.itemSize = 2;
        this.$VideoSphericalRenderer12.numItems = x.length / 2;
        var fa = [];
        for (var ga = 0; ga < r.length; ga += 4) {
            fa.push(ga);
            fa.push(ga + 2);
            fa.push(ga + 1);
            fa.push(ga);
            fa.push(ga + 3);
            fa.push(ga + 2);
        }
        this.$VideoSphericalRenderer14 = this.$VideoSphericalRenderer1.createBuffer();
        this.$VideoSphericalRenderer1.bindBuffer(this.$VideoSphericalRenderer1.ELEMENT_ARRAY_BUFFER, this.$VideoSphericalRenderer14);
        this.$VideoSphericalRenderer1.bufferData(this.$VideoSphericalRenderer1.ELEMENT_ARRAY_BUFFER, new Uint16Array(fa), this.$VideoSphericalRenderer1.STATIC_DRAW);
        // console.log("1 : " + fa);
        this.$VideoSphericalRenderer14.itemSize = 1;
        this.$VideoSphericalRenderer14.numItems = fa.length;
    };
    n.prototype.$VideoSphericalRenderer23 = function() {
        'use strict';
        var o = this.$VideoSphericalRenderer1.createShader(this.$VideoSphericalRenderer1.VERTEX_SHADER),
            p = '\n      attribute vec3 aVertexPosition;\n      attribute vec2 aTextureCoord;\n\n      uniform mat4 uMVMatrix;\n      uniform mat4 uPMatrix;\n\n'+
            'varying highp vec2 vTextureCoord;\n\n'+
            'void main(void) {\n'+
            '   gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n'+
            '   vTextureCoord = aTextureCoord;\n'+
            '}\n    ';
        this.$VideoSphericalRenderer1.shaderSource(o, p);
        this.$VideoSphericalRenderer1.compileShader(o);
        if (!this.$VideoSphericalRenderer1.getShaderParameter(o, this.$VideoSphericalRenderer1.COMPILE_STATUS)) return null;
        return o;
    };
    n.prototype.$VideoSphericalRenderer24 = function() {
        'use strict';
        var o = this.$VideoSphericalRenderer1.createShader(this.$VideoSphericalRenderer1.FRAGMENT_SHADER),
            p = "" +
"varying highp vec2 vTextureCoord;\n"+
"uniform sampler2D uSampler;\n"+
"uniform lowp vec2 uFlag;\n"+
"void main(void) {\n"+
"   if(uFlag[0] > 0.0){\n"+
"       gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n"+
"   }else{\n"+
"       gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));\n"+
"   }\n"+
"}";
            
        this.$VideoSphericalRenderer1.shaderSource(o, p);
        this.$VideoSphericalRenderer1.compileShader(o);
        if (!this.$VideoSphericalRenderer1.getShaderParameter(o, this.$VideoSphericalRenderer1.COMPILE_STATUS)) return null;
        return o;
    };
    n.prototype.$VideoSphericalRenderer25 = function() {
        'use strict';
        this.$VideoSphericalRenderer1.bindTexture(this.$VideoSphericalRenderer1.TEXTURE_2D, this.$VideoSphericalRenderer5);
        this.$VideoSphericalRenderer1.pixelStorei(this.$VideoSphericalRenderer1.UNPACK_FLIP_Y_WEBGL, true);
        try {
            this.$VideoSphericalRenderer1.texImage2D(this.$VideoSphericalRenderer1.TEXTURE_2D, 0, this.$VideoSphericalRenderer1.RGBA, this.$VideoSphericalRenderer1.RGBA, this.$VideoSphericalRenderer1.UNSIGNED_BYTE, this.$VideoSphericalRenderer5.image);
        } catch (o) {
            this.$VideoSphericalRenderer3 && this.$VideoSphericalRenderer3(o);
        }
        this.$VideoSphericalRenderer1.bindTexture(this.$VideoSphericalRenderer1.TEXTURE_2D, null);
    };
    n.prototype.render = function(o, p) {
        'use strict';
        // console.log(o, p);
        if (this.$VideoSphericalRenderer11) return;
        if (this.$VideoSphericalRenderer6) this.$VideoSphericalRenderer25();
        l.identity(this.$VideoSphericalRenderer10);
        l.rotateX(this.$VideoSphericalRenderer10, j(p));
        l.rotateY(this.$VideoSphericalRenderer10, j(o + 90));
        this.$VideoSphericalRenderer1.clear(this.$VideoSphericalRenderer1.COLOR_BUFFER_BIT | this.$VideoSphericalRenderer1.DEPTH_BUFFER_BIT);
        this.$VideoSphericalRenderer1.activeTexture(this.$VideoSphericalRenderer1.TEXTURE0);
        this.$VideoSphericalRenderer1.bindTexture(this.$VideoSphericalRenderer1.TEXTURE_2D, this.$VideoSphericalRenderer5);
        this.$VideoSphericalRenderer1.uniform1i(this.$VideoSphericalRenderer4.samplerUniform, 0);
        
        this.$VideoSphericalRenderer1.bindBuffer(this.$VideoSphericalRenderer1.ARRAY_BUFFER, this.$VideoSphericalRenderer13);
        this.$VideoSphericalRenderer1.vertexAttribPointer(this.$VideoSphericalRenderer4.vertexPositionAttribute, this.$VideoSphericalRenderer13.itemSize, this.$VideoSphericalRenderer1.FLOAT, false, 0, 0);
        this.$VideoSphericalRenderer1.bindBuffer(this.$VideoSphericalRenderer1.ARRAY_BUFFER, this.$VideoSphericalRenderer12);
        this.$VideoSphericalRenderer1.vertexAttribPointer(this.$VideoSphericalRenderer4.textureCoordAttribute, this.$VideoSphericalRenderer12.itemSize, this.$VideoSphericalRenderer1.FLOAT, false, 0, 0);
        this.$VideoSphericalRenderer1.bindBuffer(this.$VideoSphericalRenderer1.ELEMENT_ARRAY_BUFFER, this.$VideoSphericalRenderer14);
		// console.log(this.$VideoSphericalRenderer9);
		// console.log(this.$VideoSphericalRenderer10);
        this.$VideoSphericalRenderer1.uniformMatrix4fv(this.$VideoSphericalRenderer4.pMatrixUniform, false, this.$VideoSphericalRenderer9);
        this.$VideoSphericalRenderer1.uniformMatrix4fv(this.$VideoSphericalRenderer4.mvMatrixUniform, false, this.$VideoSphericalRenderer10);
        this.$VideoSphericalRenderer1.uniform2fv(this.$VideoSphericalRenderer4.uFlag, [0.0, 0.0]);
        this.$VideoSphericalRenderer1.drawElements(this.$VideoSphericalRenderer1.TRIANGLES, this.$VideoSphericalRenderer14.numItems, this.$VideoSphericalRenderer1.UNSIGNED_SHORT, 0);
        this.$VideoSphericalRenderer1.uniform2fv(this.$VideoSphericalRenderer4.uFlag, [1.0, 0.0]);
        this.$VideoSphericalRenderer1.drawArrays(this.$VideoSphericalRenderer1.LINE_LOOP, 0, 24);
        this.$VideoSphericalRenderer1.bindTexture(this.$VideoSphericalRenderer1.TEXTURE_2D, null);
    };
    f.exports = n;
}, null);
__d('VideoPlayerHTML5Spherical', ['Event', 'EventEmitter', 'CSS', 'DOM', 'DOMQuery', 'DOMDimensions', 'SubscriptionsHandler', 'VelocityTracker', 'VideoSphericalRenderer', 'arrayContains', 'cx', 'getElementRect', 'performanceNow', 'requestAnimationFrame', 'Keys', 'Banzai'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w) {
    if (c.__markCompiled) c.__markCompiled();
    var x, y, z = l.scry(window.document.body, '#globalContainer')[0] || window.document.body,
        aa = ['W', 'A', 'S', 'D'].reduce(function(ca, da) {
            ca[da] = da.charCodeAt(0);
            return ca;
        }, {});
    x = babelHelpers.inherits(ba, i);
    y = x && x.prototype;

    function ba(ca, da) {
        'use strict';
        y.constructor.call(this);
        this.$VideoPlayerHTML5Spherical1 = ca;
        this.$VideoPlayerHTML5Spherical2 = da;
        this.$VideoPlayerHTML5Spherical3 = new n();
        this.$VideoPlayerHTML5Spherical4 = {
            x: 0,
            y: 0
        };
        this.$VideoPlayerHTML5Spherical5 = {
            x: 0,
            y: 0
        };
        this.$VideoPlayerHTML5Spherical6 = new o();
        this.$VideoPlayerHTML5Spherical7 = {
            yaw: da.initialHeading,
            pitch: da.initialPitch
        };
        this.$VideoPlayerHTML5Spherical8();
        this.$VideoPlayerHTML5Spherical9 = Date.now();
    }
    ba.prototype.getSubscriptions = function() {
        'use strict';
        return {
            remove: (function() {
                return this.$VideoPlayerHTML5Spherical3.release();
            }).bind(this)
        };
    };
    ba.prototype.$VideoPlayerHTML5Spherical10 = function(ca) {
        'use strict';
        this.$VideoPlayerHTML5Spherical11.focus();
        if (!this.$VideoPlayerHTML5Spherical12) this.emit('DOM/click', ca);
        this.$VideoPlayerHTML5Spherical12 = false;
    };
    ba.prototype.$VideoPlayerHTML5Spherical8 = function() {
        'use strict';
        var ca = m.getElementDimensions(this.$VideoPlayerHTML5Spherical1),
            da = k.create('canvas', {
                width: ca.width,
                height: ca.height,
                className: "_2a6s",
                tabIndex: 0
            });
        this.$VideoPlayerHTML5Spherical3.addSubscriptions(h.listen(da, 'mousedown', (function(fa) {
            return this.$VideoPlayerHTML5Spherical13(fa);
        }).bind(this)), h.listen(da, 'click', (function(fa) {
            return this.$VideoPlayerHTML5Spherical10(fa);
        }).bind(this)), h.listen(da, 'mouseleave', (function() {
            return this.$VideoPlayerHTML5Spherical14();
        }).bind(this)), h.listen(da, 'mouseenter', (function() {
            return this.$VideoPlayerHTML5Spherical15();
        }).bind(this)), h.listen(da, 'keydown', (function(fa) {
            return this.$VideoPlayerHTML5Spherical16(fa);
        }).bind(this)), h.listen(da, 'keyup', (function(fa) {
            return this.$VideoPlayerHTML5Spherical17(fa);
        }).bind(this)), h.listen(this.$VideoPlayerHTML5Spherical1, 'loadeddata', (function() {
            return this.forceUpdateNextFrame();
        }).bind(this)), h.listen(this.$VideoPlayerHTML5Spherical1, 'seeked', (function() {
            return this.forceUpdateNextFrame();
        }).bind(this)));
        var ea = new p(this.$VideoPlayerHTML5Spherical1, da, this.$VideoPlayerHTML5Spherical2);
        ea.setErrorHandler(this.$VideoPlayerHTML5Spherical18.bind(this));
        k.insertAfter(this.$VideoPlayerHTML5Spherical1, da);
        j.hide(this.$VideoPlayerHTML5Spherical1);
        j.show(da);
        this.$VideoPlayerHTML5Spherical19 = t();
        this.$VideoPlayerHTML5Spherical20 = 0;
        this.$VideoPlayerHTML5Spherical21 = 0;
        this.$VideoPlayerHTML5Spherical22 = 0;
        this.$VideoPlayerHTML5Spherical23 = 0;
        this.$VideoPlayerHTML5Spherical24 = 0;
        this.$VideoPlayerHTML5Spherical25 = [];
        this.$VideoPlayerHTML5Spherical26 = false;
        this.$VideoPlayerHTML5Spherical27 = {
            left: 0,
            right: 0,
            up: 0,
            down: 0
        };
        this.$VideoPlayerHTML5Spherical28 = this.$VideoPlayerHTML5Spherical29.bind(this);
        this.$VideoPlayerHTML5Spherical11 = da;
        this.$VideoPlayerHTML5Spherical30 = ea;
        this.setDimensions(ca.width, ca.height);
        u(this.$VideoPlayerHTML5Spherical28);
    };
    ba.prototype.$VideoPlayerHTML5Spherical18 = function(ca) {
        'use strict';
        this.$VideoPlayerHTML5Spherical1.pause();
        this.emit('error', {
            error: 'SPHERICAL_RENDER_ERROR',
            message: ca.message
        });
    };
    ba.prototype.$VideoPlayerHTML5Spherical29 = function() {
        'use strict';
        var ca = t(),
            da = ca - this.$VideoPlayerHTML5Spherical19;
        if (this.$VideoPlayerHTML5Spherical31) {
            var ea = 0;
            if (q(this.$VideoPlayerHTML5Spherical25, 'left')) ea = da;
            if (q(this.$VideoPlayerHTML5Spherical25, 'right')) ea = -da;
            var fa = this.$VideoPlayerHTML5Spherical2.dragVelocityFactor || .08;
            this.setViewport(this.$VideoPlayerHTML5Spherical21 + ea * fa, this.$VideoPlayerHTML5Spherical22);
        }
        if (this.$VideoPlayerHTML5Spherical26) {
            var ga = this.$VideoPlayerHTML5Spherical2.keyboardVelocityFactor || .08,
                ha = da * (-this.$VideoPlayerHTML5Spherical27.left + this.$VideoPlayerHTML5Spherical27.right),
                ia = da * (-this.$VideoPlayerHTML5Spherical27.up + this.$VideoPlayerHTML5Spherical27.down);
            this.$VideoPlayerHTML5Spherical32(ha * ga, ia * ga);
        }
        this.$VideoPlayerHTML5Spherical19 = ca;
        u(this.$VideoPlayerHTML5Spherical28);
        if (this.$VideoPlayerHTML5Spherical1.readyState >= this.$VideoPlayerHTML5Spherical1.HAVE_CURRENT_DATA) {
            this.$VideoPlayerHTML5Spherical20++;
            if (this.$VideoPlayerHTML5Spherical33() || this.$VideoPlayerHTML5Spherical34) {
                this.$VideoPlayerHTML5Spherical30.render(this.$VideoPlayerHTML5Spherical21 - this.$VideoPlayerHTML5Spherical23 + this.$VideoPlayerHTML5Spherical7.yaw, Math.max(-90, Math.min(this.$VideoPlayerHTML5Spherical22 - this.$VideoPlayerHTML5Spherical24 - this.$VideoPlayerHTML5Spherical7.pitch, 90)));
                this.$VideoPlayerHTML5Spherical34 = false;
            }
        }
    };
    ba.prototype.$VideoPlayerHTML5Spherical33 = function() {
        'use strict';
        return !(this.$VideoPlayerHTML5Spherical1.paused || this.$VideoPlayerHTML5Spherical1.ended);
    };
    ba.prototype.freeze = function() {
        'use strict';
        this.$VideoPlayerHTML5Spherical30.setAutoUpdateTexture(false);
    };
    ba.prototype.unfreeze = function() {
        'use strict';
        this.$VideoPlayerHTML5Spherical30.setAutoUpdateTexture(true);
    };
    ba.prototype.setViewport = function(ca, da) {
        'use strict';
        this.$VideoPlayerHTML5Spherical35();
        this.$VideoPlayerHTML5Spherical21 = ca;
        this.$VideoPlayerHTML5Spherical22 = Math.max(-90, Math.min(90, da));
        this.forceUpdateNextFrame();
    };
    ba.prototype.setDimensions = function(ca, da) {
        'use strict';
        this.$VideoPlayerHTML5Spherical30.updateViewportDimensions(ca, da);
        this.forceUpdateNextFrame();
    };
    ba.prototype.$VideoPlayerHTML5Spherical13 = function(ca) {
        'use strict';
        this.$VideoPlayerHTML5Spherical36 = true;
        this.$VideoPlayerHTML5Spherical37 = null;
        j.addClass(z, "_2a6t");
        j.addClass(this.$VideoPlayerHTML5Spherical11, "_2a6t");
        this.$VideoPlayerHTML5Spherical38 = this.$VideoPlayerHTML5Spherical11.clientWidth;
        this.$VideoPlayerHTML5Spherical39 = h.listen(b.document.body, 'mousemove', (function(da) {
            return this.$VideoPlayerHTML5Spherical40(da);
        }).bind(this));
        this.$VideoPlayerHTML5Spherical41 = h.listen(b.document.body, 'mouseup', (function(da) {
            return this.$VideoPlayerHTML5Spherical42(da);
        }).bind(this));
        this.$VideoPlayerHTML5Spherical5 = {
            x: ca.screenX,
            y: ca.screenY
        };
        this.$VideoPlayerHTML5Spherical6.update(ca.screenX, ca.screenY);
        this.emit('updateViewportBegin');
        h.kill(ca);
    };
    ba.prototype.$VideoPlayerHTML5Spherical40 = function(ca) {
        'use strict';
        if (this.$VideoPlayerHTML5Spherical36) {
            this.$VideoPlayerHTML5Spherical4 = {
                x: ca.clientX,
                y: ca.clientY
            };
            this.$VideoPlayerHTML5Spherical43 = true;
            var da = this.$VideoPlayerHTML5Spherical44();
            if (!this.$VideoPlayerHTML5Spherical25.length) this.$VideoPlayerHTML5Spherical23 = (ca.screenX - this.$VideoPlayerHTML5Spherical5.x) * da;
            this.$VideoPlayerHTML5Spherical24 = (ca.screenY - this.$VideoPlayerHTML5Spherical5.y) * da;
            var ea = this.$VideoPlayerHTML5Spherical22,
                fa = this.$VideoPlayerHTML5Spherical21;
            this.setViewport(fa, ea);
            this.$VideoPlayerHTML5Spherical6.update(ca.screenX, ca.screenY);
            h.kill(ca);
        }
    };
    ba.prototype.$VideoPlayerHTML5Spherical14 = function() {
        'use strict';
        if (this.$VideoPlayerHTML5Spherical36) {
            this.$VideoPlayerHTML5Spherical31 = true;
            this.$VideoPlayerHTML5Spherical45();
        }
    };
    ba.prototype.$VideoPlayerHTML5Spherical15 = function() {
        'use strict';
        this.$VideoPlayerHTML5Spherical46();
    };
    ba.prototype.$VideoPlayerHTML5Spherical16 = function(ca) {
        'use strict';
        h.prevent(ca);
        var da = this.$VideoPlayerHTML5Spherical47(ca);
        if (da) {
            this.$VideoPlayerHTML5Spherical27[da] = 1;
            this.$VideoPlayerHTML5Spherical26 = true;
        }
    };
    ba.prototype.$VideoPlayerHTML5Spherical17 = function(ca) {
        'use strict';
        h.prevent(ca);
        var da = this.$VideoPlayerHTML5Spherical47(ca);
        if (da) {
            this.$VideoPlayerHTML5Spherical27[da] = 0;
            var ea = false;
            for (var fa in this.$VideoPlayerHTML5Spherical27)
                if (this.$VideoPlayerHTML5Spherical27.hasOwnProperty(fa) && this.$VideoPlayerHTML5Spherical27[fa] > 0) {
                    ea = true;
                    break;
                }
            this.$VideoPlayerHTML5Spherical26 = ea;
        }
    };
    ba.prototype.$VideoPlayerHTML5Spherical47 = function(ca) {
        'use strict';
        var da = h.getKeyCode(ca),
            ea = null;
        switch (da) {
            case v.LEFT:
            case aa.A:
                ea = 'left';
                break;
            case v.UP:
            case aa.W:
                ea = 'up';
                break;
            case v.RIGHT:
            case aa.D:
                ea = 'right';
                break;
            case v.DOWN:
            case aa.S:
                ea = 'down';
                break;
            default:
        }
        return ea;
    };
    ba.prototype.$VideoPlayerHTML5Spherical32 = function(ca, da) {
        'use strict';
        this.setViewport(this.$VideoPlayerHTML5Spherical21 += ca, this.$VideoPlayerHTML5Spherical22 += da);
    };
    ba.prototype.$VideoPlayerHTML5Spherical45 = function() {
        'use strict';
        if (!this.$VideoPlayerHTML5Spherical31) return;
        var ca = s(this.$VideoPlayerHTML5Spherical11);
        this.$VideoPlayerHTML5Spherical25 = [];
        if (this.$VideoPlayerHTML5Spherical4.x <= ca.left) {
            this.$VideoPlayerHTML5Spherical25.push('left');
            j.addClass(z, "_2a6u");
        }
        if (this.$VideoPlayerHTML5Spherical4.x >= ca.right) {
            this.$VideoPlayerHTML5Spherical25.push('right');
            j.addClass(z, "_2a6v");
        }
        u((function() {
            return this.$VideoPlayerHTML5Spherical45();
        }).bind(this));
    };
    ba.prototype.$VideoPlayerHTML5Spherical46 = function() {
        'use strict';
        if (!this.$VideoPlayerHTML5Spherical31) return;
        this.$VideoPlayerHTML5Spherical31 = false;
        this.$VideoPlayerHTML5Spherical25 = [];
        j.removeClass(z, "_2a6u");
        j.removeClass(z, "_2a6v");
    };
    ba.prototype.$VideoPlayerHTML5Spherical42 = function(ca) {
        'use strict';
        if (this.$VideoPlayerHTML5Spherical36) {
            this.$VideoPlayerHTML5Spherical36 = false;
            j.removeClass(z, "_2a6t");
            j.removeClass(this.$VideoPlayerHTML5Spherical11, "_2a6t");
            this.$VideoPlayerHTML5Spherical46();
            this.$VideoPlayerHTML5Spherical39.remove();
            this.$VideoPlayerHTML5Spherical41.remove();
            this.$VideoPlayerHTML5Spherical6.update(ca.screenX, ca.screenY);
            this.$VideoPlayerHTML5Spherical32(-this.$VideoPlayerHTML5Spherical23, -this.$VideoPlayerHTML5Spherical24);
            this.$VideoPlayerHTML5Spherical23 = 0;
            this.$VideoPlayerHTML5Spherical24 = 0;
            this.$VideoPlayerHTML5Spherical37 = new o(300, {
                x: this.$VideoPlayerHTML5Spherical6.getVelocityX(),
                y: this.$VideoPlayerHTML5Spherical6.getVelocityY()
            });
            this.$VideoPlayerHTML5Spherical48 = {
                x: ca.screenX,
                y: ca.screenY
            };
            this.$VideoPlayerHTML5Spherical6 = new o();
            this.$VideoPlayerHTML5Spherical49();
            this.emit('updateViewportEnd');
            if (this.$VideoPlayerHTML5Spherical43) {
                this.$VideoPlayerHTML5Spherical43 = false;
                this.$VideoPlayerHTML5Spherical12 = true;
                h.kill(ca);
            }
        }
    };
    ba.prototype.$VideoPlayerHTML5Spherical49 = function() {
        'use strict';
        var ca = this.$VideoPlayerHTML5Spherical37;
        if (!ca || !this.$VideoPlayerHTML5Spherical48) return;
        var da = ca.update(this.$VideoPlayerHTML5Spherical48.x, this.$VideoPlayerHTML5Spherical48.y),
            ea = this.$VideoPlayerHTML5Spherical44(),
            fa = (1000 - da) / 1000 * ca.getVelocityX() * ea,
            ga = (1000 - da) / 1000 * ca.getVelocityY() * ea;
        this.$VideoPlayerHTML5Spherical32(-fa, -ga);
        if (Math.trunc(fa * 10) || Math.trunc(ga * 10)) u((function() {
            return this.$VideoPlayerHTML5Spherical49();
        }).bind(this));
    };
    ba.prototype.$VideoPlayerHTML5Spherical44 = function() {
        'use strict';
        var ca = this.$VideoPlayerHTML5Spherical2.panningVelocityFactor || 15,
            da = this.$VideoPlayerHTML5Spherical2.fieldOfView;
        return 360 / da / this.$VideoPlayerHTML5Spherical38 * ca;
    };
    ba.prototype.forceUpdateNextFrame = function() {
        'use strict';
        this.$VideoPlayerHTML5Spherical34 = true;
    };
    ba.prototype.$VideoPlayerHTML5Spherical35 = function() {
        'use strict';
        var ca = Date.now();
        if (ca - this.$VideoPlayerHTML5Spherical9 >= 1000) {
            this.$VideoPlayerHTML5Spherical9 = ca;
            w.post('spherical_video_viewport', {
                video_fbid: this.$VideoPlayerHTML5Spherical2.videoID,
                yaw_degrees: this.$VideoPlayerHTML5Spherical21,
                pitch_degrees: this.$VideoPlayerHTML5Spherical22,
                roll_degrees: 0,
                field_of_view_y: this.$VideoPlayerHTML5Spherical2.fieldOfView,
                aspect_ratio: this.$VideoPlayerHTML5Spherical1.height / this.$VideoPlayerHTML5Spherical1.width,
                video_player_position: this.$VideoPlayerHTML5Spherical1.currentTime,
                timestamp: this.$VideoPlayerHTML5Spherical9
            });
        }
    };
    f.exports = ba;
}, null);
__d('VideoSphericalOverlay', ['cx', 'invariant', 'performanceNow', 'requestAnimationFrame', 'bezier', 'Event', 'CSS'], function a(b, c, d, e, f, g, h, i, j, k, l, m, n) {
    if (c.__markCompiled) c.__markCompiled();
    var o = [{
        progress: 0,
        value: 0
    }, {
        progress: .25,
        value: 30
    }, {
        progress: .75,
        value: -30
    }, {
        progress: 1,
        value: 0
    }];

    function p(t, u, v) {
        !(t.length > 1) ? i(0): undefined;
        !(t[0].progress === 0) ? i(0): undefined;
        !(t[t.length - 1].progress === 1) ? i(0): undefined;
        var w = 0;
        return function x(y) {
            var z = y / u,
                aa = w;
            if (z >= 1) {
                w = t.length - 1;
                return t[t.length - 1].value;
            }
            if (z <= 0) {
                w = 0;
                return t[0].value;
            }
            while (t[aa].progress < z) aa++;
            while (t[aa - 1].progress > z) aa--;
            w = aa;
            var ba = t[aa - 1].value,
                ca = t[aa].value,
                da = z - t[aa - 1].progress,
                ea = t[aa].progress - t[aa - 1].progress,
                fa = da / ea;
            return (ba + v(fa) * (ca - ba));
        };
    }
    var q = 8000,
        r = p(o, q, l(.25, .1, .25, 1, 1000 / 60 / q / 4));

    function s(t, u) {
        'use strict';
        this.$VideoSphericalOverlay1 = true;
        this.$VideoSphericalOverlay2 = u;
        this.$VideoSphericalOverlay3 = t;
        t.addListener('beginPlayback', (function() {
            return this.$VideoSphericalOverlay4();
        }).bind(this));
        t.addListener('pausePlayback', (function() {
            return this.$VideoSphericalOverlay5();
        }).bind(this));
        t.addListener('updateViewportBegin', (function() {
            return this.$VideoSphericalOverlay5();
        }).bind(this));
        t.addListener('clickVideo', (function() {
            return this.$VideoSphericalOverlay5();
        }).bind(this));
        t.addListener('stateChange', (function() {
            return this.$VideoSphericalOverlay6();
        }).bind(this));
        m.listen(u, 'animationend', (function() {
            return this.$VideoSphericalOverlay7();
        }).bind(this));
    }
    s.prototype.$VideoSphericalOverlay8 = function() {
        'use strict';
        this.$VideoSphericalOverlay9 = true;
        this.$VideoSphericalOverlay10 = j();
        n.addClass(this.$VideoSphericalOverlay3.getRootNode(), "_2dz6");
        n.addClass(this.$VideoSphericalOverlay2, "_2dz7");
        k((function() {
            return this.$VideoSphericalOverlay11();
        }).bind(this));
    };
    s.prototype.$VideoSphericalOverlay5 = function() {
        'use strict';
        this.$VideoSphericalOverlay9 = false;
        n.removeClass(this.$VideoSphericalOverlay3.getRootNode(), "_2dz6");
        n.removeClass(this.$VideoSphericalOverlay2, "_2dz7");
    };
    s.prototype.$VideoSphericalOverlay6 = function() {
        'use strict';
        if (this.$VideoSphericalOverlay3.isState('fallback')) {
            this.$VideoSphericalOverlay1 = false;
            this.$VideoSphericalOverlay5();
        }
    };
    s.prototype.$VideoSphericalOverlay4 = function() {
        'use strict';
        if (this.$VideoSphericalOverlay1) {
            this.$VideoSphericalOverlay1 = false;
            this.$VideoSphericalOverlay8();
        }
    };
    s.prototype.$VideoSphericalOverlay11 = function() {
        'use strict';
        if (!this.$VideoSphericalOverlay9) return;
        var t = j() - this.$VideoSphericalOverlay10,
            u = r(t);
        this.$VideoSphericalOverlay3.setSphericalViewport(u, 0);
        k((function() {
            return this.$VideoSphericalOverlay11();
        }).bind(this));
    };
    s.prototype.$VideoSphericalOverlay7 = function() {
        'use strict';
        this.$VideoSphericalOverlay5();
    };
    f.exports = s;
}, null);
__d('VideoWithSphericalErrorMessage', ['fbt'], function a(b, c, d, e, f, g, h) {
    if (c.__markCompiled) c.__markCompiled();

    function i(j) {
        'use strict';
        this.$VideoWithSphericalErrorMessage1 = j;
        this.$VideoWithSphericalErrorMessage2 = j.addListener('optionsChange', (function() {
            return this.$VideoWithSphericalErrorMessage3();
        }).bind(this));
        this.$VideoWithSphericalErrorMessage3();
    }
    i.prototype.$VideoWithSphericalErrorMessage4 = function(j, k) {
        'use strict';
        this.$VideoWithSphericalErrorMessage1.setOption('VideoErrorOverlay', j, k);
    };
    i.prototype.$VideoWithSphericalErrorMessage3 = function() {
        'use strict';
        if (this.$VideoWithSphericalErrorMessage1.getOption('VideoErrorOverlay', 'available')) {
            this.$VideoWithSphericalErrorMessage4('title', h._("360\ub3c4 \ub3d9\uc601\uc0c1\uc744 \uc7ac\uc0dd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"));
            this.$VideoWithSphericalErrorMessage4('message', h._("\uc774 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc7ac\uc0dd\ud560 \uc218 \uc5c6\ub294 \ub3d9\uc601\uc0c1\uc785\ub2c8\ub2e4"));
            this.$VideoWithSphericalErrorMessage4('linkURL', 'https://www.facebook.com/help/851697264925946');
            this.$VideoWithSphericalErrorMessage4('linkTitle', h._("\ub354 \uc54c\uc544\ubcf4\ub824\uba74 \ud074\ub9ad\ud558\uc138\uc694"));
            this.$VideoWithSphericalErrorMessage2.remove();
        }
    };
    f.exports = i;
}, null);