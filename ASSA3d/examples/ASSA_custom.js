var ASSA3d = ASSA3d || {};
ASSA3d.Scene = function() {
    this.objs = []
};
ASSA3d.Scene.prototype = {
    constructor: ASSA3d.Scene,
    add: function(a) {
        this.objs.push(a)
    },
    length: function() {
        return this.objs.length
    },
    sort: function() {
        this.objs.sort(function(a, b) {
            return a.screenPos.z - b.screenPos.z
        })
    }
};
ASSA3d.Vec3 = function(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0
};
ASSA3d.Vec3.prototype = {
    constructor: ASSA3d.Vec3,
    set: function(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this
    },
    add: function(a, b) {
        this.x = a.x + b.x;
        this.y = a.y + b.y;
        this.z = a.z + b.z;
        return this
    },
    addSelf: function(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this
    },
    sub: function(a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
        this.z = a.z - b.z;
        return this
    },
    lengthSq: function() {
        var x = this.x,
            y = this.y,
            z = this.z;
        return x * x + y * y + z * z
    },
    length: function() {
        return Math.sqrt(this.lengthSq())
    },
    divScalar: function(s) {
        if (s) {
            this.x /= s;
            this.y /= s;
            this.z /= s
        } else {
            this.x = 0;
            this.y = 0;
            this.z = 0
        }
        return this
    },
    mulScalar: function(s) {
        this.x *= s;
        this.y *= s;
        this.z *= s;
        return this
    },
    normalize: function() {
        return this.divScalar(this.length())
    },
    cross: function(a, b) {
        this.x = a.y * b.z - a.z * b.y;
        this.y = a.z * b.x - a.x * b.z;
        this.z = a.x * b.y - a.y * b.x;
        return this
    },
    copy: function(v) {
        this.x = v.x;
        this.y = v.y;
        this.z = v.z;
        return this
    },
    dot: function(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z
    },
    negSelf: function() {
        this.x *= -1;
        this.y *= -1;
        this.z *= -1;
        return this
    }
};
ASSA3d.Vec4 = function(x, y, z, w) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
    this.w = w || 1
};
ASSA3d.Vec4.prototype = {
    constructor: ASSA3d.Vec4,
    set: function(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
        return this
    },
    divScalar: function(s) {
        if (s) {
            this.x /= s;
            this.y /= s;
            this.z /= s;
            this.w /= s
        } else {
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.w = 0
        }
        return this
    },
    mulSelf: function(s) {
        this.x *= s;
        this.y *= s;
        this.z *= s;
        this.w *= s;
        return this
    },
    copy: function(v) {
        this.x = v.x;
        this.y = v.y;
        this.z = v.z;
        this.w = (v.w !== undefined) ? v.w : 1;
        return this
    }
};
ASSA3d.Mat4 = function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
    this.set(a || 1, b || 0, c || 0, d || 0, e || 0, f || 1, g || 0, h || 0, i || 0, j || 0, k || 1, l || 0, m || 0, n || 0, o || 0, p || 1)
};
ASSA3d.Mat4.prototype = {
    constructor: ASSA3d.Mat4,
    set: function(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
        this.n11 = a;
        this.n12 = b;
        this.n13 = c;
        this.n14 = d;
        this.n21 = e;
        this.n22 = f;
        this.n23 = g;
        this.n24 = h;
        this.n31 = i;
        this.n32 = j;
        this.n33 = k;
        this.n34 = l;
        this.n41 = m;
        this.n42 = n;
        this.n43 = o;
        this.n44 = p;
        return this
    },
    setIdentity: function() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
    },
    setTranslation: function(x, y, z) {
        return this.set(1, 0, 0, x, 0, 1, 0, y, 0, 0, 1, z, 0, 0, 0, 1)
    },
    setOrthogonalT: function(u, v, n) {
        return this.set(u.x, v.x, n.x, 0, u.y, v.y, n.y, 0, u.z, v.z, n.z, 0, 0, 0, 0, 1)
    },
    setOrthogonal: function(u, v, n) {
        return this.set(u.x, u.y, u.z, 0, v.x, v.y, v.z, 0, n.x, n.y, n.z, 0, 0, 0, 0, 1)
    },
    setModelview: function(a) {
        var u = a.hv,
            v = a.up,
            n = a.at;
        var b = a.position;
        return this.set(-u.x, -u.y, -u.z, +u.x * b.x + u.y * b.y + u.z * b.z, v.x, v.y, v.z, -v.x * b.x - v.y * b.y - v.z * b.z, -n.x, -n.y, -n.z, +n.x * b.x + n.y * b.y + n.z * b.z, 0, 0, 0, 1)
    },
    setFrustum: function(l, r, b, t, n, f) {
        return this.set(2 * n / (r - l), 0, (r + l) / (r - l), 0, 0, 2 * n / (t - b), (t + b) / (t - b), 0, 0, 0, (n + f) / (n - f), 2 * n * f / (n - f), 0, 0, -1, 0)
    },
    setPerspective: function(a) {
        var n = a.near;
        var f = a.far;
        var t = n * Math.tan(a.fov * Math.PI / 360.0);
        var b = -t;
        var l = b * a.aspect;
        var r = t * a.aspect;
        return this.setFrustum(l, r, b, t, n, f)
    },
    setViewport: function(a, b) {
        return this.set(a / 2, 0, 0, a / 2, 0, -b / 2, 0, b / 2, 0, 0, 1, 0, 0, 0, 0, 1)
    },
    mulVec4: function(v) {
        var a = v.x,
            vy = v.y,
            vz = v.z,
            vw = v.w;
        v.x = this.n11 * a + this.n12 * vy + this.n13 * vz + this.n14 * vw;
        v.y = this.n21 * a + this.n22 * vy + this.n23 * vz + this.n24 * vw;
        v.z = this.n31 * a + this.n32 * vy + this.n33 * vz + this.n34 * vw;
        v.w = this.n41 * a + this.n42 * vy + this.n43 * vz + this.n44 * vw;
        return v
    }
};
ASSA3d.LC = function() {
    this.position = new ASSA3d.Vec3(0, 0, 0);
    this.up = new ASSA3d.Vec3(0, 1, 0);
    this.at = new ASSA3d.Vec3(0, 0, 1);
    this.hv = new ASSA3d.Vec3(1, 0, 0);
    this.screenPos = new ASSA3d.Vec4();
    this.visible = false
};
ASSA3d.LC.prototype = {
    constructor: ASSA3d.LC,
    lookAt: function(x, y, z) {
        var a = this.position;
        var b = this.at;
        this.at.x = x - a.x;
        this.at.y = y - a.y;
        this.at.z = z - a.z;
        this.at.normalize();
        this.hv.cross(this.up, this.at);
        this.hv.normalize();
        this.up.cross(this.at, this.hv)
    }
};
ASSA3d.Projector = function() {
    _modelviewMat = new ASSA3d.Mat4();
    _perspectiveMat = new ASSA3d.Mat4();
    _rMat = new ASSA3d.Mat4();
    _tMat = new ASSA3d.Mat4();
    _particleV = new ASSA3d.Vec4();
    _face4vertics = new Array(8);
    for (var i = 0; i < 8; i++) {
        _face4vertics[i] = new ASSA3d.Vec4()
    }
};
ASSA3d.Projector.prototype = {
    constructor: ASSA3d.Projector,
    projectScene: function(k, l) {
        _modelviewMat.setModelview(l);
        _perspectiveMat.setPerspective(l);
        var m = l.near;
        for (var i = 0; i < k.objs.length; i++) {
            var o = k.objs[i];
            var p = o.position;
            o.screenPos.copy(p);
            _rMat.setOrthogonalT(o.hv, o.up, o.at);
            _tMat.setTranslation(p.x, p.y, p.z);
            updateBeforePerspective(o.screenPos)
        }
        k.sort();
        for (var i = 0; i < k.objs.length; i++) {
            var o = k.objs[i];
            var p = o.position;
            _rMat.setOrthogonalT(o.hv, o.up, o.at);
            _tMat.setTranslation(p.x, p.y, p.z);
            if (o instanceof ASSA3d.Particle) {
                if (o.screenPos.z <= -m) {
                    var n = o.screenPos;
                    _perspectiveMat.mulVec4(n);
                    n.divScalar(n.w);
                    if (Math.abs(n.x) > 1 || Math.abs(n.y) > 1 || Math.abs(n.z) > 1) {
                        o.visible = false
                    } else {
                        o.visible = true
                    }
                } else {
                    o.visible = false
                }
            } else if (o instanceof ASSA3d.Face4) {
                o.vertics[0].copy(o.p1);
                o.vertics[1].copy(o.p2);
                o.vertics[2].copy(o.p3);
                o.vertics[3].copy(o.p4);
                o.cnt = 4;
                for (var j = 0; j < 4; j++) {
                    updateBeforePerspective(o.vertics[j])
                }
                clipFacePlane(o, 2, -m, true);
                if (o.cnt == 0) {
                    o.visible = false;
                    continue
                }
                var n = o.screenPos;
                _perspectiveMat.mulVec4(n);
                n.divScalar(n.w);
                for (var j = 0; j < o.cnt; j++) {
                    _perspectiveMat.mulVec4(o.vertics[j]);
                    o.vertics[j].divScalar(o.vertics[j].w)
                }
                clipFacePlane(o, 0, -1, false);
                if (o.cnt == 0) {
                    o.visible = false;
                    continue
                }
                clipFacePlane(o, 0, 1, true);
                if (o.cnt == 0) {
                    o.visible = false;
                    continue
                }
                clipFacePlane(o, 1, -1, false);
                if (o.cnt == 0) {
                    o.visible = false;
                    continue
                }
                clipFacePlane(o, 1, 1, true);
                if (o.cnt == 0) {
                    o.visible = false;
                    continue
                }
                clipFacePlane(o, 2, -1, false);
                if (o.cnt == 0) {
                    o.visible = false;
                    continue
                }
                clipFacePlane(o, 2, 1, true);
                if (o.cnt == 0) {
                    o.visible = false;
                    continue
                }
                o.visible = true
            }
        }

        function updateBeforePerspective(v) {
            _tMat.mulVec4(v);
            _rMat.mulVec4(v);
            _modelviewMat.mulVec4(v)
        };

        function clipFacePlane(c, d, e, f) {
            function getT(a, b) {
                return (a == b) ? 0 : -a / (b - a)
            }

            function paraEqu(a, b, t) {
                return a + (b - a) * t
            }
            var g = 0;
            for (var i = 0; i < c.cnt; i++) {
                var a = c.vertics[i % c.cnt];
                var b = c.vertics[(i + 1) % c.cnt];
                var h = 0,
                    bd = 0;
                if (d == 0) {
                    if (f) {
                        if (a.x > e && b.x <= e) {
                            var t = getT(a.x - e, b.x - e);
                            _face4vertics[g].y = paraEqu(a.y, b.y, t);
                            _face4vertics[g].z = paraEqu(a.z, b.z, t);
                            _face4vertics[g].x = e;
                            g++
                        } else if (a.x <= e && b.x <= e) {
                            _face4vertics[g].copy(a);
                            g++
                        } else if (a.x <= e && b.x > e) {
                            _face4vertics[g].copy(a);
                            g++;
                            var t = getT(a.x - e, b.x - e);
                            _face4vertics[g].y = paraEqu(a.y, b.y, t);
                            _face4vertics[g].z = paraEqu(a.z, b.z, t);
                            _face4vertics[g].x = e;
                            g++
                        } else if (a.x > e && b.x > e) {} else {}
                    } else {
                        if (a.x < e && b.x >= e) {
                            var t = getT(a.x - e, b.x - e);
                            _face4vertics[g].y = paraEqu(a.y, b.y, t);
                            _face4vertics[g].z = paraEqu(a.z, b.z, t);
                            _face4vertics[g].x = e;
                            g++
                        } else if (a.x >= e && b.x >= e) {
                            _face4vertics[g].copy(a);
                            g++
                        } else if (a.x >= e && b.x < e) {
                            _face4vertics[g].copy(a);
                            g++;
                            var t = getT(a.x - e, b.x - e);
                            _face4vertics[g].y = paraEqu(a.y, b.y, t);
                            _face4vertics[g].z = paraEqu(a.z, b.z, t);
                            _face4vertics[g].x = e;
                            g++
                        } else if (a.x < e && b.x < e) {} else {}
                    }
                } else if (d == 1) {
                    if (f) {
                        if (a.y > e && b.y <= e) {
                            var t = getT(a.y - e, b.y - e);
                            _face4vertics[g].x = paraEqu(a.x, b.x, t);
                            _face4vertics[g].z = paraEqu(a.z, b.z, t);
                            _face4vertics[g].y = e;
                            g++
                        } else if (a.y <= e && b.y <= e) {
                            _face4vertics[g].copy(a);
                            g++
                        } else if (a.y <= e && b.y > e) {
                            _face4vertics[g].copy(a);
                            g++;
                            var t = getT(a.y - e, b.y - e);
                            _face4vertics[g].x = paraEqu(a.x, b.x, t);
                            _face4vertics[g].z = paraEqu(a.z, b.z, t);
                            _face4vertics[g].y = e;
                            g++
                        } else if (a.y > e && b.y > e) {} else {}
                    } else {
                        if (a.y < e && b.y >= e) {
                            var t = getT(a.y - e, b.y - e);
                            _face4vertics[g].x = paraEqu(a.x, b.x, t);
                            _face4vertics[g].z = paraEqu(a.z, b.z, t);
                            _face4vertics[g].y = e;
                            g++
                        } else if (a.y >= e && b.y >= e) {
                            _face4vertics[g].copy(a);
                            g++
                        } else if (a.y >= e && b.y < e) {
                            _face4vertics[g].copy(a);
                            g++;
                            var t = getT(a.y - e, b.y - e);
                            _face4vertics[g].x = paraEqu(a.x, b.x, t);
                            _face4vertics[g].z = paraEqu(a.z, b.z, t);
                            _face4vertics[g].y = e;
                            g++
                        } else if (a.y < e && b.y < e) {} else {}
                    }
                } else if (d == 2) {
                    if (f) {
                        if (a.z > e && b.z <= e) {
                            var t = getT(a.z - e, b.z - e);
                            _face4vertics[g].y = paraEqu(a.y, b.y, t);
                            _face4vertics[g].x = paraEqu(a.x, b.x, t);
                            _face4vertics[g].z = e;
                            g++
                        } else if (a.z <= e && b.z <= e) {
                            _face4vertics[g].copy(a);
                            g++
                        } else if (a.z <= e && b.z > e) {
                            _face4vertics[g].copy(a);
                            g++;
                            var t = getT(a.z - e, b.z - e);
                            _face4vertics[g].y = paraEqu(a.y, b.y, t);
                            _face4vertics[g].x = paraEqu(a.x, b.x, t);
                            _face4vertics[g].z = e;
                            g++
                        } else if (a.z > e && b.z > e) {} else {}
                    } else {
                        if (a.z < e && b.z >= e) {
                            var t = getT(a.z - e, b.z - e);
                            _face4vertics[g].y = paraEqu(a.y, b.y, t);
                            _face4vertics[g].x = paraEqu(a.x, b.x, t);
                            _face4vertics[g].z = e;
                            g++
                        } else if (a.z >= e && b.z >= e) {
                            _face4vertics[g].copy(a);
                            g++
                        } else if (a.z >= e && b.z < e) {
                            _face4vertics[g].copy(a);
                            g++;
                            var t = getT(a.z - e, b.z - e);
                            _face4vertics[g].y = paraEqu(a.y, b.y, t);
                            _face4vertics[g].x = paraEqu(a.x, b.x, t);
                            _face4vertics[g].z = e;
                            g++
                        } else if (a.z < e && b.z < e) {} else {}
                    }
                } else {}
            }
            for (var i = 0; i < g; i++) {
                c.vertics[i].copy(_face4vertics[i])
            }
            c.cnt = g
        }
    },
};
ASSA3d.Particle = function(r, a, b) {
    ASSA3d.LC.call(this);
    this.r = r || 1;
    this.color = a || 'rgba(128,128,128,1.0)';
    this.prog = b || null
};
ASSA3d.Particle.prototype = new ASSA3d.LC();
ASSA3d.Particle.prototype.constructor = ASSA3d.Particle;
ASSA3d.Face4 = function(a, b, c) {
    ASSA3d.LC.call(this);
    this.p1 = new ASSA3d.Vec3(-1, -1, 0);
    this.p2 = new ASSA3d.Vec3(1, -1, 0);
    this.p3 = new ASSA3d.Vec3(1, 1);
    this.p4 = new ASSA3d.Vec3(-1, 1);
    this.vertics = new Array(8);
    for (var i = 0; i < 8; i++) {
        this.vertics[i] = new ASSA3d.Vec4()
    }
    this.cnt = 0;
    this.faceColor = a || 'rgba(128,128,128,1.0)';
    this.edgeColor = b || null;
    this.prog = c || null
};
ASSA3d.Face4.prototype = new ASSA3d.LC();
ASSA3d.Face4.prototype.constructor = ASSA3d.Face4;
ASSA3d.Camera = function(a, b, c, d) {
    ASSA3d.LC.call(this);
    this.fov = a || 45.0;
    this.aspect = b || 1.0;
    this.near = c || 0.1;
    this.far = d || 1000
};
ASSA3d.Camera.prototype = new ASSA3d.LC();
ASSA3d.Camera.prototype.constructor = ASSA3d.Camera;
ASSA3d.Renderer = function(f) {
    var f = f || document.createElement('canvas');
    var g = f.width;
    var h = f.height;
    var k = new ASSA3d.Mat4().setViewport(g, h);
    var l = f.getContext('2d');
    var m = new ASSA3d.Projector();
    this.render = function(c, d) {
        l.clearRect(0, 0, g, h);
        m.projectScene(c, d);
        for (var i = 0; i < c.objs.length; i++) {
            var o = c.objs[i];
            if (o.visible) {
                if (o instanceof ASSA3d.Particle) {
                    k.mulVec4(o.screenPos);
                    var e = o.screenPos;
                    if (o.prog) {
                        o.prog(o, l)
                    } else {
                        fillCircle(e.x, e.y, o.r, o.color)
                    }
                } else if (o instanceof ASSA3d.Face4) {
                    for (var j = 0; j < o.cnt; j++) {
                        k.mulVec4(o.vertics[j])
                    }
                    if (o.cnt > 2) {
                        if (o.prog) {
                            o.prog(o, l)
                        } else {
                            l.beginPath();
                            var a = o.vertics[0];
                            var b = o.vertics[1];
                            l.moveTo(a.x, a.y);
                            for (j = 1; j < o.cnt; j++) {
                                a = o.vertics[j % o.cnt];
                                b = o.vertics[(j + 1) % o.cnt];
                                l.lineTo(a.x, a.y)
                            }
                            l.closePath();
                            l.fillStyle = o.faceColor;
                            l.fill();
                            if (o.edgeColor) {
                                l.strokeStyle = o.edgeColor;
                                l.stroke()
                            }
                        }
                    }
                }
            }
        }
    };

    function fillCircle(x, y, r, a) {
        l.beginPath();
        l.arc(x, y, r, 0, Math.PI * 2, false);
        l.fillStyle = a || 'rgba(128,128,128,1.0)';
        l.fill();
        l.closePath()
    };

    function drawLine(a, b, c, d, e) {
        l.beginPath();
        l.moveTo(a, b);
        l.lineTo(c, d);
        l.closePath();
        l.strokeStyle = e || 'rgba(255,255,0,1.0)';
        l.stroke()
    }
};