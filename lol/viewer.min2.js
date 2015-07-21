(function($) {
    if (!$.fn.on) {
        $.fn.on = function(events, selector, data, handler) {
            var self = this;
            var args = arguments.length;
            if (args > 3) {
                return self.delegate(selector, events, data, handler)
            } else if (args > 2) {
                if (typeof selector === "string") {
                    return self.delegate(selector, events, data)
                } else {
                    return self.bind(events, selector, data)
                }
            } else {
                return self.bind(events, selector)
            }
        }
    }
    if (!$.fn.off) {
        $.fn.off = function(events, selector, handler) {
            var self = this;
            var args = arguments.length;
            if (typeof selector === "string") {
                if (args > 2) {
                    return self.undelegate(selector, events, handler)
                } else if (args > 1) {
                    return self.undelegate(selector, events)
                } else {
                    return self.undelegate()
                }
            } else {
                if (args > 1) {
                    handler = selector;
                    return self.unbind(events, handler)
                } else if (args > 0) {
                    return self.unbind(events)
                } else {
                    return self.unbind()
                }
            }
        }
    }
})(this.jQuery);
(function(_global) {
    "use strict";
    var shim = {};
    if (typeof exports === "undefined") {
        if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
            shim.exports = {};
            define(function() {
                return shim.exports
            })
        } else {
            shim.exports = typeof window !== "undefined" ? window : _global
        }
    } else {
        shim.exports = exports
    }(function(exports) {
        if (!GLMAT_EPSILON) {
            var GLMAT_EPSILON = 1e-6
        }
        if (!GLMAT_ARRAY_TYPE) {
            var GLMAT_ARRAY_TYPE = typeof Float32Array !== "undefined" ? Float32Array : Array
        }
        if (!GLMAT_RANDOM) {
            var GLMAT_RANDOM = Math.random
        }
        var glMatrix = {};
        glMatrix.setMatrixArrayType = function(type) {
            GLMAT_ARRAY_TYPE = type
        };
        if (typeof exports !== "undefined") {
            exports.glMatrix = glMatrix
        }
        var degree = Math.PI / 180;
        glMatrix.toRadian = function(a) {
            return a * degree
        };
        var vec2 = {};
        vec2.create = function() {
            var out = new GLMAT_ARRAY_TYPE(2);
            out[0] = 0;
            out[1] = 0;
            return out
        };
        vec2.clone = function(a) {
            var out = new GLMAT_ARRAY_TYPE(2);
            out[0] = a[0];
            out[1] = a[1];
            return out
        };
        vec2.fromValues = function(x, y) {
            var out = new GLMAT_ARRAY_TYPE(2);
            out[0] = x;
            out[1] = y;
            return out
        };
        vec2.copy = function(out, a) {
            out[0] = a[0];
            out[1] = a[1];
            return out
        };
        vec2.set = function(out, x, y) {
            out[0] = x;
            out[1] = y;
            return out
        };
        vec2.add = function(out, a, b) {
            out[0] = a[0] + b[0];
            out[1] = a[1] + b[1];
            return out
        };
        vec2.subtract = function(out, a, b) {
            out[0] = a[0] - b[0];
            out[1] = a[1] - b[1];
            return out
        };
        vec2.sub = vec2.subtract;
        vec2.multiply = function(out, a, b) {
            out[0] = a[0] * b[0];
            out[1] = a[1] * b[1];
            return out
        };
        vec2.mul = vec2.multiply;
        vec2.divide = function(out, a, b) {
            out[0] = a[0] / b[0];
            out[1] = a[1] / b[1];
            return out
        };
        vec2.div = vec2.divide;
        vec2.min = function(out, a, b) {
            out[0] = Math.min(a[0], b[0]);
            out[1] = Math.min(a[1], b[1]);
            return out
        };
        vec2.max = function(out, a, b) {
            out[0] = Math.max(a[0], b[0]);
            out[1] = Math.max(a[1], b[1]);
            return out
        };
        vec2.scale = function(out, a, b) {
            out[0] = a[0] * b;
            out[1] = a[1] * b;
            return out
        };
        vec2.scaleAndAdd = function(out, a, b, scale) {
            out[0] = a[0] + b[0] * scale;
            out[1] = a[1] + b[1] * scale;
            return out
        };
        vec2.distance = function(a, b) {
            var x = b[0] - a[0],
                y = b[1] - a[1];
            return Math.sqrt(x * x + y * y)
        };
        vec2.dist = vec2.distance;
        vec2.squaredDistance = function(a, b) {
            var x = b[0] - a[0],
                y = b[1] - a[1];
            return x * x + y * y
        };
        vec2.sqrDist = vec2.squaredDistance;
        vec2.length = function(a) {
            var x = a[0],
                y = a[1];
            return Math.sqrt(x * x + y * y)
        };
        vec2.len = vec2.length;
        vec2.squaredLength = function(a) {
            var x = a[0],
                y = a[1];
            return x * x + y * y
        };
        vec2.sqrLen = vec2.squaredLength;
        vec2.negate = function(out, a) {
            out[0] = -a[0];
            out[1] = -a[1];
            return out
        };
        vec2.normalize = function(out, a) {
            var x = a[0],
                y = a[1];
            var len = x * x + y * y;
            if (len > 0) {
                len = 1 / Math.sqrt(len);
                out[0] = a[0] * len;
                out[1] = a[1] * len
            }
            return out
        };
        vec2.dot = function(a, b) {
            return a[0] * b[0] + a[1] * b[1]
        };
        vec2.cross = function(out, a, b) {
            var z = a[0] * b[1] - a[1] * b[0];
            out[0] = out[1] = 0;
            out[2] = z;
            return out
        };
        vec2.lerp = function(out, a, b, t) {
            var ax = a[0],
                ay = a[1];
            out[0] = ax + t * (b[0] - ax);
            out[1] = ay + t * (b[1] - ay);
            return out
        };
        vec2.random = function(out, scale) {
            scale = scale || 1;
            var r = GLMAT_RANDOM() * 2 * Math.PI;
            out[0] = Math.cos(r) * scale;
            out[1] = Math.sin(r) * scale;
            return out
        };
        vec2.transformMat2 = function(out, a, m) {
            var x = a[0],
                y = a[1];
            out[0] = m[0] * x + m[2] * y;
            out[1] = m[1] * x + m[3] * y;
            return out
        };
        vec2.transformMat2d = function(out, a, m) {
            var x = a[0],
                y = a[1];
            out[0] = m[0] * x + m[2] * y + m[4];
            out[1] = m[1] * x + m[3] * y + m[5];
            return out
        };
        vec2.transformMat3 = function(out, a, m) {
            var x = a[0],
                y = a[1];
            out[0] = m[0] * x + m[3] * y + m[6];
            out[1] = m[1] * x + m[4] * y + m[7];
            return out
        };
        vec2.transformMat4 = function(out, a, m) {
            var x = a[0],
                y = a[1];
            out[0] = m[0] * x + m[4] * y + m[12];
            out[1] = m[1] * x + m[5] * y + m[13];
            return out
        };
        vec2.forEach = function() {
            var vec = vec2.create();
            return function(a, stride, offset, count, fn, arg) {
                var i, l;
                if (!stride) {
                    stride = 2
                }
                if (!offset) {
                    offset = 0
                }
                if (count) {
                    l = Math.min(count * stride + offset, a.length)
                } else {
                    l = a.length
                }
                for (i = offset; i < l; i += stride) {
                    vec[0] = a[i];
                    vec[1] = a[i + 1];
                    fn(vec, vec, arg);
                    a[i] = vec[0];
                    a[i + 1] = vec[1]
                }
                return a
            }
        }();
        vec2.str = function(a) {
            return "vec2(" + a[0] + ", " + a[1] + ")"
        };
        if (typeof exports !== "undefined") {
            exports.vec2 = vec2
        }
        var vec3 = {};
        vec3.create = function() {
            var out = new GLMAT_ARRAY_TYPE(3);
            out[0] = 0;
            out[1] = 0;
            out[2] = 0;
            return out
        };
        vec3.clone = function(a) {
            var out = new GLMAT_ARRAY_TYPE(3);
            out[0] = a[0];
            out[1] = a[1];
            out[2] = a[2];
            return out
        };
        vec3.fromValues = function(x, y, z) {
            var out = new GLMAT_ARRAY_TYPE(3);
            out[0] = x;
            out[1] = y;
            out[2] = z;
            return out
        };
        vec3.copy = function(out, a) {
            out[0] = a[0];
            out[1] = a[1];
            out[2] = a[2];
            return out
        };
        vec3.set = function(out, x, y, z) {
            out[0] = x;
            out[1] = y;
            out[2] = z;
            return out
        };
        vec3.add = function(out, a, b) {
            out[0] = a[0] + b[0];
            out[1] = a[1] + b[1];
            out[2] = a[2] + b[2];
            return out
        };
        vec3.subtract = function(out, a, b) {
            out[0] = a[0] - b[0];
            out[1] = a[1] - b[1];
            out[2] = a[2] - b[2];
            return out
        };
        vec3.sub = vec3.subtract;
        vec3.multiply = function(out, a, b) {
            out[0] = a[0] * b[0];
            out[1] = a[1] * b[1];
            out[2] = a[2] * b[2];
            return out
        };
        vec3.mul = vec3.multiply;
        vec3.divide = function(out, a, b) {
            out[0] = a[0] / b[0];
            out[1] = a[1] / b[1];
            out[2] = a[2] / b[2];
            return out
        };
        vec3.div = vec3.divide;
        vec3.min = function(out, a, b) {
            out[0] = Math.min(a[0], b[0]);
            out[1] = Math.min(a[1], b[1]);
            out[2] = Math.min(a[2], b[2]);
            return out
        };
        vec3.max = function(out, a, b) {
            out[0] = Math.max(a[0], b[0]);
            out[1] = Math.max(a[1], b[1]);
            out[2] = Math.max(a[2], b[2]);
            return out
        };
        vec3.scale = function(out, a, b) {
            out[0] = a[0] * b;
            out[1] = a[1] * b;
            out[2] = a[2] * b;
            return out
        };
        vec3.scaleAndAdd = function(out, a, b, scale) {
            out[0] = a[0] + b[0] * scale;
            out[1] = a[1] + b[1] * scale;
            out[2] = a[2] + b[2] * scale;
            return out
        };
        vec3.distance = function(a, b) {
            var x = b[0] - a[0],
                y = b[1] - a[1],
                z = b[2] - a[2];
            return Math.sqrt(x * x + y * y + z * z)
        };
        vec3.dist = vec3.distance;
        vec3.squaredDistance = function(a, b) {
            var x = b[0] - a[0],
                y = b[1] - a[1],
                z = b[2] - a[2];
            return x * x + y * y + z * z
        };
        vec3.sqrDist = vec3.squaredDistance;
        vec3.length = function(a) {
            var x = a[0],
                y = a[1],
                z = a[2];
            return Math.sqrt(x * x + y * y + z * z)
        };
        vec3.len = vec3.length;
        vec3.squaredLength = function(a) {
            var x = a[0],
                y = a[1],
                z = a[2];
            return x * x + y * y + z * z
        };
        vec3.sqrLen = vec3.squaredLength;
        vec3.negate = function(out, a) {
            out[0] = -a[0];
            out[1] = -a[1];
            out[2] = -a[2];
            return out
        };
        vec3.normalize = function(out, a) {
            var x = a[0],
                y = a[1],
                z = a[2];
            var len = x * x + y * y + z * z;
            if (len > 0) {
                len = 1 / Math.sqrt(len);
                out[0] = a[0] * len;
                out[1] = a[1] * len;
                out[2] = a[2] * len
            }
            return out
        };
        vec3.dot = function(a, b) {
            return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
        };
        vec3.cross = function(out, a, b) {
            var ax = a[0],
                ay = a[1],
                az = a[2],
                bx = b[0],
                by = b[1],
                bz = b[2];
            out[0] = ay * bz - az * by;
            out[1] = az * bx - ax * bz;
            out[2] = ax * by - ay * bx;
            return out
        };
        vec3.lerp = function(out, a, b, t) {
            var ax = a[0],
                ay = a[1],
                az = a[2];
            out[0] = ax + t * (b[0] - ax);
            out[1] = ay + t * (b[1] - ay);
            out[2] = az + t * (b[2] - az);
            return out
        };
        vec3.random = function(out, scale) {
            scale = scale || 1;
            var r = GLMAT_RANDOM() * 2 * Math.PI;
            var z = GLMAT_RANDOM() * 2 - 1;
            var zScale = Math.sqrt(1 - z * z) * scale;
            out[0] = Math.cos(r) * zScale;
            out[1] = Math.sin(r) * zScale;
            out[2] = z * scale;
            return out
        };
        vec3.transformMat4 = function(out, a, m) {
            var x = a[0],
                y = a[1],
                z = a[2];
            out[0] = m[0] * x + m[4] * y + m[8] * z + m[12];
            out[1] = m[1] * x + m[5] * y + m[9] * z + m[13];
            out[2] = m[2] * x + m[6] * y + m[10] * z + m[14];
            return out
        };
        vec3.transformMat3 = function(out, a, m) {
            var x = a[0],
                y = a[1],
                z = a[2];
            out[0] = x * m[0] + y * m[3] + z * m[6];
            out[1] = x * m[1] + y * m[4] + z * m[7];
            out[2] = x * m[2] + y * m[5] + z * m[8];
            return out
        };
        vec3.transformQuat = function(out, a, q) {
            var x = a[0],
                y = a[1],
                z = a[2],
                qx = q[0],
                qy = q[1],
                qz = q[2],
                qw = q[3],
                ix = qw * x + qy * z - qz * y,
                iy = qw * y + qz * x - qx * z,
                iz = qw * z + qx * y - qy * x,
                iw = -qx * x - qy * y - qz * z;
            out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
            out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
            out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
            return out
        };
        vec3.rotateX = function(out, a, b, c) {
            var p = [],
                r = [];
            p[0] = a[0] - b[0];
            p[1] = a[1] - b[1];
            p[2] = a[2] - b[2];
            r[0] = p[0];
            r[1] = p[1] * Math.cos(c) - p[2] * Math.sin(c);
            r[2] = p[1] * Math.sin(c) + p[2] * Math.cos(c);
            out[0] = r[0] + b[0];
            out[1] = r[1] + b[1];
            out[2] = r[2] + b[2];
            return out
        };
        vec3.rotateY = function(out, a, b, c) {
            var p = [],
                r = [];
            p[0] = a[0] - b[0];
            p[1] = a[1] - b[1];
            p[2] = a[2] - b[2];
            r[0] = p[2] * Math.sin(c) + p[0] * Math.cos(c);
            r[1] = p[1];
            r[2] = p[2] * Math.cos(c) - p[0] * Math.sin(c);
            out[0] = r[0] + b[0];
            out[1] = r[1] + b[1];
            out[2] = r[2] + b[2];
            return out
        };
        vec3.rotateZ = function(out, a, b, c) {
            var p = [],
                r = [];
            p[0] = a[0] - b[0];
            p[1] = a[1] - b[1];
            p[2] = a[2] - b[2];
            r[0] = p[0] * Math.cos(c) - p[1] * Math.sin(c);
            r[1] = p[0] * Math.sin(c) + p[1] * Math.cos(c);
            r[2] = p[2];
            out[0] = r[0] + b[0];
            out[1] = r[1] + b[1];
            out[2] = r[2] + b[2];
            return out
        };
        vec3.forEach = function() {
            var vec = vec3.create();
            return function(a, stride, offset, count, fn, arg) {
                var i, l;
                if (!stride) {
                    stride = 3
                }
                if (!offset) {
                    offset = 0
                }
                if (count) {
                    l = Math.min(count * stride + offset, a.length)
                } else {
                    l = a.length
                }
                for (i = offset; i < l; i += stride) {
                    vec[0] = a[i];
                    vec[1] = a[i + 1];
                    vec[2] = a[i + 2];
                    fn(vec, vec, arg);
                    a[i] = vec[0];
                    a[i + 1] = vec[1];
                    a[i + 2] = vec[2]
                }
                return a
            }
        }();
        vec3.str = function(a) {
            return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")"
        };
        if (typeof exports !== "undefined") {
            exports.vec3 = vec3
        }
        var vec4 = {};
        vec4.create = function() {
            var out = new GLMAT_ARRAY_TYPE(4);
            out[0] = 0;
            out[1] = 0;
            out[2] = 0;
            out[3] = 0;
            return out
        };
        vec4.clone = function(a) {
            var out = new GLMAT_ARRAY_TYPE(4);
            out[0] = a[0];
            out[1] = a[1];
            out[2] = a[2];
            out[3] = a[3];
            return out
        };
        vec4.fromValues = function(x, y, z, w) {
            var out = new GLMAT_ARRAY_TYPE(4);
            out[0] = x;
            out[1] = y;
            out[2] = z;
            out[3] = w;
            return out
        };
        vec4.copy = function(out, a) {
            out[0] = a[0];
            out[1] = a[1];
            out[2] = a[2];
            out[3] = a[3];
            return out
        };
        vec4.set = function(out, x, y, z, w) {
            out[0] = x;
            out[1] = y;
            out[2] = z;
            out[3] = w;
            return out
        };
        vec4.add = function(out, a, b) {
            out[0] = a[0] + b[0];
            out[1] = a[1] + b[1];
            out[2] = a[2] + b[2];
            out[3] = a[3] + b[3];
            return out
        };
        vec4.subtract = function(out, a, b) {
            out[0] = a[0] - b[0];
            out[1] = a[1] - b[1];
            out[2] = a[2] - b[2];
            out[3] = a[3] - b[3];
            return out
        };
        vec4.sub = vec4.subtract;
        vec4.multiply = function(out, a, b) {
            out[0] = a[0] * b[0];
            out[1] = a[1] * b[1];
            out[2] = a[2] * b[2];
            out[3] = a[3] * b[3];
            return out
        };
        vec4.mul = vec4.multiply;
        vec4.divide = function(out, a, b) {
            out[0] = a[0] / b[0];
            out[1] = a[1] / b[1];
            out[2] = a[2] / b[2];
            out[3] = a[3] / b[3];
            return out
        };
        vec4.div = vec4.divide;
        vec4.min = function(out, a, b) {
            out[0] = Math.min(a[0], b[0]);
            out[1] = Math.min(a[1], b[1]);
            out[2] = Math.min(a[2], b[2]);
            out[3] = Math.min(a[3], b[3]);
            return out
        };
        vec4.max = function(out, a, b) {
            out[0] = Math.max(a[0], b[0]);
            out[1] = Math.max(a[1], b[1]);
            out[2] = Math.max(a[2], b[2]);
            out[3] = Math.max(a[3], b[3]);
            return out
        };
        vec4.scale = function(out, a, b) {
            out[0] = a[0] * b;
            out[1] = a[1] * b;
            out[2] = a[2] * b;
            out[3] = a[3] * b;
            return out
        };
        vec4.scaleAndAdd = function(out, a, b, scale) {
            out[0] = a[0] + b[0] * scale;
            out[1] = a[1] + b[1] * scale;
            out[2] = a[2] + b[2] * scale;
            out[3] = a[3] + b[3] * scale;
            return out
        };
        vec4.distance = function(a, b) {
            var x = b[0] - a[0],
                y = b[1] - a[1],
                z = b[2] - a[2],
                w = b[3] - a[3];
            return Math.sqrt(x * x + y * y + z * z + w * w)
        };
        vec4.dist = vec4.distance;
        vec4.squaredDistance = function(a, b) {
            var x = b[0] - a[0],
                y = b[1] - a[1],
                z = b[2] - a[2],
                w = b[3] - a[3];
            return x * x + y * y + z * z + w * w
        };
        vec4.sqrDist = vec4.squaredDistance;
        vec4.length = function(a) {
            var x = a[0],
                y = a[1],
                z = a[2],
                w = a[3];
            return Math.sqrt(x * x + y * y + z * z + w * w)
        };
        vec4.len = vec4.length;
        vec4.squaredLength = function(a) {
            var x = a[0],
                y = a[1],
                z = a[2],
                w = a[3];
            return x * x + y * y + z * z + w * w
        };
        vec4.sqrLen = vec4.squaredLength;
        vec4.negate = function(out, a) {
            out[0] = -a[0];
            out[1] = -a[1];
            out[2] = -a[2];
            out[3] = -a[3];
            return out
        };
        vec4.normalize = function(out, a) {
            var x = a[0],
                y = a[1],
                z = a[2],
                w = a[3];
            var len = x * x + y * y + z * z + w * w;
            if (len > 0) {
                len = 1 / Math.sqrt(len);
                out[0] = a[0] * len;
                out[1] = a[1] * len;
                out[2] = a[2] * len;
                out[3] = a[3] * len
            }
            return out
        };
        vec4.dot = function(a, b) {
            return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3]
        };
        vec4.lerp = function(out, a, b, t) {
            var ax = a[0],
                ay = a[1],
                az = a[2],
                aw = a[3];
            out[0] = ax + t * (b[0] - ax);
            out[1] = ay + t * (b[1] - ay);
            out[2] = az + t * (b[2] - az);
            out[3] = aw + t * (b[3] - aw);
            return out
        };
        vec4.random = function(out, scale) {
            scale = scale || 1;
            out[0] = GLMAT_RANDOM();
            out[1] = GLMAT_RANDOM();
            out[2] = GLMAT_RANDOM();
            out[3] = GLMAT_RANDOM();
            vec4.normalize(out, out);
            vec4.scale(out, out, scale);
            return out
        };
        vec4.transformMat4 = function(out, a, m) {
            var x = a[0],
                y = a[1],
                z = a[2],
                w = a[3];
            out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
            out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
            out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
            out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
            return out
        };
        vec4.transformQuat = function(out, a, q) {
            var x = a[0],
                y = a[1],
                z = a[2],
                qx = q[0],
                qy = q[1],
                qz = q[2],
                qw = q[3],
                ix = qw * x + qy * z - qz * y,
                iy = qw * y + qz * x - qx * z,
                iz = qw * z + qx * y - qy * x,
                iw = -qx * x - qy * y - qz * z;
            out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
            out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
            out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
            return out
        };
        vec4.forEach = function() {
            var vec = vec4.create();
            return function(a, stride, offset, count, fn, arg) {
                var i, l;
                if (!stride) {
                    stride = 4
                }
                if (!offset) {
                    offset = 0
                }
                if (count) {
                    l = Math.min(count * stride + offset, a.length)
                } else {
                    l = a.length
                }
                for (i = offset; i < l; i += stride) {
                    vec[0] = a[i];
                    vec[1] = a[i + 1];
                    vec[2] = a[i + 2];
                    vec[3] = a[i + 3];
                    fn(vec, vec, arg);
                    a[i] = vec[0];
                    a[i + 1] = vec[1];
                    a[i + 2] = vec[2];
                    a[i + 3] = vec[3]
                }
                return a
            }
        }();
        vec4.str = function(a) {
            return "vec4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")"
        };
        if (typeof exports !== "undefined") {
            exports.vec4 = vec4
        }
        var mat2 = {};
        mat2.create = function() {
            var out = new GLMAT_ARRAY_TYPE(4);
            out[0] = 1;
            out[1] = 0;
            out[2] = 0;
            out[3] = 1;
            return out
        };
        mat2.clone = function(a) {
            var out = new GLMAT_ARRAY_TYPE(4);
            out[0] = a[0];
            out[1] = a[1];
            out[2] = a[2];
            out[3] = a[3];
            return out
        };
        mat2.copy = function(out, a) {
            out[0] = a[0];
            out[1] = a[1];
            out[2] = a[2];
            out[3] = a[3];
            return out
        };
        mat2.identity = function(out) {
            out[0] = 1;
            out[1] = 0;
            out[2] = 0;
            out[3] = 1;
            return out
        };
        mat2.transpose = function(out, a) {
            if (out === a) {
                var a1 = a[1];
                out[1] = a[2];
                out[2] = a1
            } else {
                out[0] = a[0];
                out[1] = a[2];
                out[2] = a[1];
                out[3] = a[3]
            }
            return out
        };
        mat2.invert = function(out, a) {
            var a0 = a[0],
                a1 = a[1],
                a2 = a[2],
                a3 = a[3],
                det = a0 * a3 - a2 * a1;
            if (!det) {
                return null
            }
            det = 1 / det;
            out[0] = a3 * det;
            out[1] = -a1 * det;
            out[2] = -a2 * det;
            out[3] = a0 * det;
            return out
        };
        mat2.adjoint = function(out, a) {
            var a0 = a[0];
            out[0] = a[3];
            out[1] = -a[1];
            out[2] = -a[2];
            out[3] = a0;
            return out
        };
        mat2.determinant = function(a) {
            return a[0] * a[3] - a[2] * a[1]
        };
        mat2.multiply = function(out, a, b) {
            var a0 = a[0],
                a1 = a[1],
                a2 = a[2],
                a3 = a[3];
            var b0 = b[0],
                b1 = b[1],
                b2 = b[2],
                b3 = b[3];
            out[0] = a0 * b0 + a2 * b1;
            out[1] = a1 * b0 + a3 * b1;
            out[2] = a0 * b2 + a2 * b3;
            out[3] = a1 * b2 + a3 * b3;
            return out
        };
        mat2.mul = mat2.multiply;
        mat2.rotate = function(out, a, rad) {
            var a0 = a[0],
                a1 = a[1],
                a2 = a[2],
                a3 = a[3],
                s = Math.sin(rad),
                c = Math.cos(rad);
            out[0] = a0 * c + a2 * s;
            out[1] = a1 * c + a3 * s;
            out[2] = a0 * -s + a2 * c;
            out[3] = a1 * -s + a3 * c;
            return out
        };
        mat2.scale = function(out, a, v) {
            var a0 = a[0],
                a1 = a[1],
                a2 = a[2],
                a3 = a[3],
                v0 = v[0],
                v1 = v[1];
            out[0] = a0 * v0;
            out[1] = a1 * v0;
            out[2] = a2 * v1;
            out[3] = a3 * v1;
            return out
        };
        mat2.str = function(a) {
            return "mat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")"
        };
        mat2.frob = function(a) {
            return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2))
        };
        mat2.LDU = function(L, D, U, a) {
            L[2] = a[2] / a[0];
            U[0] = a[0];
            U[1] = a[1];
            U[3] = a[3] - L[2] * U[1];
            return [L, D, U]
        };
        if (typeof exports !== "undefined") {
            exports.mat2 = mat2
        }
        var mat2d = {};
        mat2d.create = function() {
            var out = new GLMAT_ARRAY_TYPE(6);
            out[0] = 1;
            out[1] = 0;
            out[2] = 0;
            out[3] = 1;
            out[4] = 0;
            out[5] = 0;
            return out
        };
        mat2d.clone = function(a) {
            var out = new GLMAT_ARRAY_TYPE(6);
            out[0] = a[0];
            out[1] = a[1];
            out[2] = a[2];
            out[3] = a[3];
            out[4] = a[4];
            out[5] = a[5];
            return out
        };
        mat2d.copy = function(out, a) {
            out[0] = a[0];
            out[1] = a[1];
            out[2] = a[2];
            out[3] = a[3];
            out[4] = a[4];
            out[5] = a[5];
            return out
        };
        mat2d.identity = function(out) {
            out[0] = 1;
            out[1] = 0;
            out[2] = 0;
            out[3] = 1;
            out[4] = 0;
            out[5] = 0;
            return out
        };
        mat2d.invert = function(out, a) {
            var aa = a[0],
                ab = a[1],
                ac = a[2],
                ad = a[3],
                atx = a[4],
                aty = a[5];
            var det = aa * ad - ab * ac;
            if (!det) {
                return null
            }
            det = 1 / det;
            out[0] = ad * det;
            out[1] = -ab * det;
            out[2] = -ac * det;
            out[3] = aa * det;
            out[4] = (ac * aty - ad * atx) * det;
            out[5] = (ab * atx - aa * aty) * det;
            return out
        };
        mat2d.determinant = function(a) {
            return a[0] * a[3] - a[1] * a[2]
        };
        mat2d.multiply = function(out, a, b) {
            var a0 = a[0],
                a1 = a[1],
                a2 = a[2],
                a3 = a[3],
                a4 = a[4],
                a5 = a[5],
                b0 = b[0],
                b1 = b[1],
                b2 = b[2],
                b3 = b[3],
                b4 = b[4],
                b5 = b[5];
            out[0] = a0 * b0 + a2 * b1;
            out[1] = a1 * b0 + a3 * b1;
            out[2] = a0 * b2 + a2 * b3;
            out[3] = a1 * b2 + a3 * b3;
            out[4] = a0 * b4 + a2 * b5 + a4;
            out[5] = a1 * b4 + a3 * b5 + a5;
            return out
        };
        mat2d.mul = mat2d.multiply;
        mat2d.rotate = function(out, a, rad) {
            var a0 = a[0],
                a1 = a[1],
                a2 = a[2],
                a3 = a[3],
                a4 = a[4],
                a5 = a[5],
                s = Math.sin(rad),
                c = Math.cos(rad);
            out[0] = a0 * c + a2 * s;
            out[1] = a1 * c + a3 * s;
            out[2] = a0 * -s + a2 * c;
            out[3] = a1 * -s + a3 * c;
            out[4] = a4;
            out[5] = a5;
            return out
        };
        mat2d.scale = function(out, a, v) {
            var a0 = a[0],
                a1 = a[1],
                a2 = a[2],
                a3 = a[3],
                a4 = a[4],
                a5 = a[5],
                v0 = v[0],
                v1 = v[1];
            out[0] = a0 * v0;
            out[1] = a1 * v0;
            out[2] = a2 * v1;
            out[3] = a3 * v1;
            out[4] = a4;
            out[5] = a5;
            return out
        };
        mat2d.translate = function(out, a, v) {
            var a0 = a[0],
                a1 = a[1],
                a2 = a[2],
                a3 = a[3],
                a4 = a[4],
                a5 = a[5],
                v0 = v[0],
                v1 = v[1];
            out[0] = a0;
            out[1] = a1;
            out[2] = a2;
            out[3] = a3;
            out[4] = a0 * v0 + a2 * v1 + a4;
            out[5] = a1 * v0 + a3 * v1 + a5;
            return out
        };
        mat2d.str = function(a) {
            return "mat2d(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ")"
        };
        mat2d.frob = function(a) {
            return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1)
        };
        if (typeof exports !== "undefined") {
            exports.mat2d = mat2d
        }
        var mat3 = {};
        mat3.create = function() {
            var out = new GLMAT_ARRAY_TYPE(9);
            out[0] = 1;
            out[1] = 0;
            out[2] = 0;
            out[3] = 0;
            out[4] = 1;
            out[5] = 0;
            out[6] = 0;
            out[7] = 0;
            out[8] = 1;
            return out
        };
        mat3.fromMat4 = function(out, a) {
            out[0] = a[0];
            out[1] = a[1];
            out[2] = a[2];
            out[3] = a[4];
            out[4] = a[5];
            out[5] = a[6];
            out[6] = a[8];
            out[7] = a[9];
            out[8] = a[10];
            return out
        };
        mat3.clone = function(a) {
            var out = new GLMAT_ARRAY_TYPE(9);
            out[0] = a[0];
            out[1] = a[1];
            out[2] = a[2];
            out[3] = a[3];
            out[4] = a[4];
            out[5] = a[5];
            out[6] = a[6];
            out[7] = a[7];
            out[8] = a[8];
            return out
        };
        mat3.copy = function(out, a) {
            out[0] = a[0];
            out[1] = a[1];
            out[2] = a[2];
            out[3] = a[3];
            out[4] = a[4];
            out[5] = a[5];
            out[6] = a[6];
            out[7] = a[7];
            out[8] = a[8];
            return out
        };
        mat3.identity = function(out) {
            out[0] = 1;
            out[1] = 0;
            out[2] = 0;
            out[3] = 0;
            out[4] = 1;
            out[5] = 0;
            out[6] = 0;
            out[7] = 0;
            out[8] = 1;
            return out
        };
        mat3.transpose = function(out, a) {
            if (out === a) {
                var a01 = a[1],
                    a02 = a[2],
                    a12 = a[5];
                out[1] = a[3];
                out[2] = a[6];
                out[3] = a01;
                out[5] = a[7];
                out[6] = a02;
                out[7] = a12
            } else {
                out[0] = a[0];
                out[1] = a[3];
                out[2] = a[6];
                out[3] = a[1];
                out[4] = a[4];
                out[5] = a[7];
                out[6] = a[2];
                out[7] = a[5];
                out[8] = a[8]
            }
            return out
        };
        mat3.invert = function(out, a) {
            var a00 = a[0],
                a01 = a[1],
                a02 = a[2],
                a10 = a[3],
                a11 = a[4],
                a12 = a[5],
                a20 = a[6],
                a21 = a[7],
                a22 = a[8],
                b01 = a22 * a11 - a12 * a21,
                b11 = -a22 * a10 + a12 * a20,
                b21 = a21 * a10 - a11 * a20,
                det = a00 * b01 + a01 * b11 + a02 * b21;
            if (!det) {
                return null
            }
            det = 1 / det;
            out[0] = b01 * det;
            out[1] = (-a22 * a01 + a02 * a21) * det;
            out[2] = (a12 * a01 - a02 * a11) * det;
            out[3] = b11 * det;
            out[4] = (a22 * a00 - a02 * a20) * det;
            out[5] = (-a12 * a00 + a02 * a10) * det;
            out[6] = b21 * det;
            out[7] = (-a21 * a00 + a01 * a20) * det;
            out[8] = (a11 * a00 - a01 * a10) * det;
            return out
        };
        mat3.adjoint = function(out, a) {
            var a00 = a[0],
                a01 = a[1],
                a02 = a[2],
                a10 = a[3],
                a11 = a[4],
                a12 = a[5],
                a20 = a[6],
                a21 = a[7],
                a22 = a[8];
            out[0] = a11 * a22 - a12 * a21;
            out[1] = a02 * a21 - a01 * a22;
            out[2] = a01 * a12 - a02 * a11;
            out[3] = a12 * a20 - a10 * a22;
            out[4] = a00 * a22 - a02 * a20;
            out[5] = a02 * a10 - a00 * a12;
            out[6] = a10 * a21 - a11 * a20;
            out[7] = a01 * a20 - a00 * a21;
            out[8] = a00 * a11 - a01 * a10;
            return out
        };
        mat3.determinant = function(a) {
            var a00 = a[0],
                a01 = a[1],
                a02 = a[2],
                a10 = a[3],
                a11 = a[4],
                a12 = a[5],
                a20 = a[6],
                a21 = a[7],
                a22 = a[8];
            return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20)
        };
        mat3.multiply = function(out, a, b) {
            var a00 = a[0],
                a01 = a[1],
                a02 = a[2],
                a10 = a[3],
                a11 = a[4],
                a12 = a[5],
                a20 = a[6],
                a21 = a[7],
                a22 = a[8],
                b00 = b[0],
                b01 = b[1],
                b02 = b[2],
                b10 = b[3],
                b11 = b[4],
                b12 = b[5],
                b20 = b[6],
                b21 = b[7],
                b22 = b[8];
            out[0] = b00 * a00 + b01 * a10 + b02 * a20;
            out[1] = b00 * a01 + b01 * a11 + b02 * a21;
            out[2] = b00 * a02 + b01 * a12 + b02 * a22;
            out[3] = b10 * a00 + b11 * a10 + b12 * a20;
            out[4] = b10 * a01 + b11 * a11 + b12 * a21;
            out[5] = b10 * a02 + b11 * a12 + b12 * a22;
            out[6] = b20 * a00 + b21 * a10 + b22 * a20;
            out[7] = b20 * a01 + b21 * a11 + b22 * a21;
            out[8] = b20 * a02 + b21 * a12 + b22 * a22;
            return out
        };
        mat3.mul = mat3.multiply;
        mat3.translate = function(out, a, v) {
            var a00 = a[0],
                a01 = a[1],
                a02 = a[2],
                a10 = a[3],
                a11 = a[4],
                a12 = a[5],
                a20 = a[6],
                a21 = a[7],
                a22 = a[8],
                x = v[0],
                y = v[1];
            out[0] = a00;
            out[1] = a01;
            out[2] = a02;
            out[3] = a10;
            out[4] = a11;
            out[5] = a12;
            out[6] = x * a00 + y * a10 + a20;
            out[7] = x * a01 + y * a11 + a21;
            out[8] = x * a02 + y * a12 + a22;
            return out
        };
        mat3.rotate = function(out, a, rad) {
            var a00 = a[0],
                a01 = a[1],
                a02 = a[2],
                a10 = a[3],
                a11 = a[4],
                a12 = a[5],
                a20 = a[6],
                a21 = a[7],
                a22 = a[8],
                s = Math.sin(rad),
                c = Math.cos(rad);
            out[0] = c * a00 + s * a10;
            out[1] = c * a01 + s * a11;
            out[2] = c * a02 + s * a12;
            out[3] = c * a10 - s * a00;
            out[4] = c * a11 - s * a01;
            out[5] = c * a12 - s * a02;
            out[6] = a20;
            out[7] = a21;
            out[8] = a22;
            return out
        };
        mat3.scale = function(out, a, v) {
            var x = v[0],
                y = v[1];
            out[0] = x * a[0];
            out[1] = x * a[1];
            out[2] = x * a[2];
            out[3] = y * a[3];
            out[4] = y * a[4];
            out[5] = y * a[5];
            out[6] = a[6];
            out[7] = a[7];
            out[8] = a[8];
            return out
        };
        mat3.fromMat2d = function(out, a) {
            out[0] = a[0];
            out[1] = a[1];
            out[2] = 0;
            out[3] = a[2];
            out[4] = a[3];
            out[5] = 0;
            out[6] = a[4];
            out[7] = a[5];
            out[8] = 1;
            return out
        };
        mat3.fromQuat = function(out, q) {
            var x = q[0],
                y = q[1],
                z = q[2],
                w = q[3],
                x2 = x + x,
                y2 = y + y,
                z2 = z + z,
                xx = x * x2,
                yx = y * x2,
                yy = y * y2,
                zx = z * x2,
                zy = z * y2,
                zz = z * z2,
                wx = w * x2,
                wy = w * y2,
                wz = w * z2;
            out[0] = 1 - yy - zz;
            out[3] = yx - wz;
            out[6] = zx + wy;
            out[1] = yx + wz;
            out[4] = 1 - xx - zz;
            out[7] = zy - wx;
            out[2] = zx - wy;
            out[5] = zy + wx;
            out[8] = 1 - xx - yy;
            return out
        };
        mat3.normalFromMat4 = function(out, a) {
            var a00 = a[0],
                a01 = a[1],
                a02 = a[2],
                a03 = a[3],
                a10 = a[4],
                a11 = a[5],
                a12 = a[6],
                a13 = a[7],
                a20 = a[8],
                a21 = a[9],
                a22 = a[10],
                a23 = a[11],
                a30 = a[12],
                a31 = a[13],
                a32 = a[14],
                a33 = a[15],
                b00 = a00 * a11 - a01 * a10,
                b01 = a00 * a12 - a02 * a10,
                b02 = a00 * a13 - a03 * a10,
                b03 = a01 * a12 - a02 * a11,
                b04 = a01 * a13 - a03 * a11,
                b05 = a02 * a13 - a03 * a12,
                b06 = a20 * a31 - a21 * a30,
                b07 = a20 * a32 - a22 * a30,
                b08 = a20 * a33 - a23 * a30,
                b09 = a21 * a32 - a22 * a31,
                b10 = a21 * a33 - a23 * a31,
                b11 = a22 * a33 - a23 * a32,
                det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
            if (!det) {
                return null
            }
            det = 1 / det;
            out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
            out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
            out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
            out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
            out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
            out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
            out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
            out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
            out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
            return out
        };
        mat3.str = function(a) {
            return "mat3(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ")"
        };
        mat3.frob = function(a) {
            return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2))
        };
        if (typeof exports !== "undefined") {
            exports.mat3 = mat3
        }
        var mat4 = {};
        mat4.create = function() {
            var out = new GLMAT_ARRAY_TYPE(16);
            out[0] = 1;
            out[1] = 0;
            out[2] = 0;
            out[3] = 0;
            out[4] = 0;
            out[5] = 1;
            out[6] = 0;
            out[7] = 0;
            out[8] = 0;
            out[9] = 0;
            out[10] = 1;
            out[11] = 0;
            out[12] = 0;
            out[13] = 0;
            out[14] = 0;
            out[15] = 1;
            return out
        };
        mat4.clone = function(a) {
            var out = new GLMAT_ARRAY_TYPE(16);
            out[0] = a[0];
            out[1] = a[1];
            out[2] = a[2];
            out[3] = a[3];
            out[4] = a[4];
            out[5] = a[5];
            out[6] = a[6];
            out[7] = a[7];
            out[8] = a[8];
            out[9] = a[9];
            out[10] = a[10];
            out[11] = a[11];
            out[12] = a[12];
            out[13] = a[13];
            out[14] = a[14];
            out[15] = a[15];
            return out
        };
        mat4.copy = function(out, a) {
            out[0] = a[0];
            out[1] = a[1];
            out[2] = a[2];
            out[3] = a[3];
            out[4] = a[4];
            out[5] = a[5];
            out[6] = a[6];
            out[7] = a[7];
            out[8] = a[8];
            out[9] = a[9];
            out[10] = a[10];
            out[11] = a[11];
            out[12] = a[12];
            out[13] = a[13];
            out[14] = a[14];
            out[15] = a[15];
            return out
        };
        mat4.identity = function(out) {
            out[0] = 1;
            out[1] = 0;
            out[2] = 0;
            out[3] = 0;
            out[4] = 0;
            out[5] = 1;
            out[6] = 0;
            out[7] = 0;
            out[8] = 0;
            out[9] = 0;
            out[10] = 1;
            out[11] = 0;
            out[12] = 0;
            out[13] = 0;
            out[14] = 0;
            out[15] = 1;
            return out
        };
        mat4.transpose = function(out, a) {
            if (out === a) {
                var a01 = a[1],
                    a02 = a[2],
                    a03 = a[3],
                    a12 = a[6],
                    a13 = a[7],
                    a23 = a[11];
                out[1] = a[4];
                out[2] = a[8];
                out[3] = a[12];
                out[4] = a01;
                out[6] = a[9];
                out[7] = a[13];
                out[8] = a02;
                out[9] = a12;
                out[11] = a[14];
                out[12] = a03;
                out[13] = a13;
                out[14] = a23
            } else {
                out[0] = a[0];
                out[1] = a[4];
                out[2] = a[8];
                out[3] = a[12];
                out[4] = a[1];
                out[5] = a[5];
                out[6] = a[9];
                out[7] = a[13];
                out[8] = a[2];
                out[9] = a[6];
                out[10] = a[10];
                out[11] = a[14];
                out[12] = a[3];
                out[13] = a[7];
                out[14] = a[11];
                out[15] = a[15]
            }
            return out
        };
        mat4.invert = function(out, a) {
            var a00 = a[0],
                a01 = a[1],
                a02 = a[2],
                a03 = a[3],
                a10 = a[4],
                a11 = a[5],
                a12 = a[6],
                a13 = a[7],
                a20 = a[8],
                a21 = a[9],
                a22 = a[10],
                a23 = a[11],
                a30 = a[12],
                a31 = a[13],
                a32 = a[14],
                a33 = a[15],
                b00 = a00 * a11 - a01 * a10,
                b01 = a00 * a12 - a02 * a10,
                b02 = a00 * a13 - a03 * a10,
                b03 = a01 * a12 - a02 * a11,
                b04 = a01 * a13 - a03 * a11,
                b05 = a02 * a13 - a03 * a12,
                b06 = a20 * a31 - a21 * a30,
                b07 = a20 * a32 - a22 * a30,
                b08 = a20 * a33 - a23 * a30,
                b09 = a21 * a32 - a22 * a31,
                b10 = a21 * a33 - a23 * a31,
                b11 = a22 * a33 - a23 * a32,
                det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
            if (!det) {
                return null
            }
            det = 1 / det;
            out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
            out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
            out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
            out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
            out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
            out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
            out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
            out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
            out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
            out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
            out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
            out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
            out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
            out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
            out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
            out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
            return out
        };
        mat4.adjoint = function(out, a) {
            var a00 = a[0],
                a01 = a[1],
                a02 = a[2],
                a03 = a[3],
                a10 = a[4],
                a11 = a[5],
                a12 = a[6],
                a13 = a[7],
                a20 = a[8],
                a21 = a[9],
                a22 = a[10],
                a23 = a[11],
                a30 = a[12],
                a31 = a[13],
                a32 = a[14],
                a33 = a[15];
            out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
            out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
            out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
            out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
            out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
            out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
            out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
            out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
            out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
            out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
            out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
            out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
            out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
            out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
            out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
            out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
            return out
        };
        mat4.determinant = function(a) {
            var a00 = a[0],
                a01 = a[1],
                a02 = a[2],
                a03 = a[3],
                a10 = a[4],
                a11 = a[5],
                a12 = a[6],
                a13 = a[7],
                a20 = a[8],
                a21 = a[9],
                a22 = a[10],
                a23 = a[11],
                a30 = a[12],
                a31 = a[13],
                a32 = a[14],
                a33 = a[15],
                b00 = a00 * a11 - a01 * a10,
                b01 = a00 * a12 - a02 * a10,
                b02 = a00 * a13 - a03 * a10,
                b03 = a01 * a12 - a02 * a11,
                b04 = a01 * a13 - a03 * a11,
                b05 = a02 * a13 - a03 * a12,
                b06 = a20 * a31 - a21 * a30,
                b07 = a20 * a32 - a22 * a30,
                b08 = a20 * a33 - a23 * a30,
                b09 = a21 * a32 - a22 * a31,
                b10 = a21 * a33 - a23 * a31,
                b11 = a22 * a33 - a23 * a32;
            return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06
        };
        mat4.multiply = function(out, a, b) {
            var a00 = a[0],
                a01 = a[1],
                a02 = a[2],
                a03 = a[3],
                a10 = a[4],
                a11 = a[5],
                a12 = a[6],
                a13 = a[7],
                a20 = a[8],
                a21 = a[9],
                a22 = a[10],
                a23 = a[11],
                a30 = a[12],
                a31 = a[13],
                a32 = a[14],
                a33 = a[15];
            var b0 = b[0],
                b1 = b[1],
                b2 = b[2],
                b3 = b[3];
            out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
            b0 = b[4];
            b1 = b[5];
            b2 = b[6];
            b3 = b[7];
            out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
            b0 = b[8];
            b1 = b[9];
            b2 = b[10];
            b3 = b[11];
            out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
            b0 = b[12];
            b1 = b[13];
            b2 = b[14];
            b3 = b[15];
            out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
            out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
            out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
            out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
            return out
        };
        mat4.mul = mat4.multiply;
        mat4.translate = function(out, a, v) {
            var x = v[0],
                y = v[1],
                z = v[2],
                a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23;
            if (a === out) {
                out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
                out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
                out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
                out[15] = a[3] * x + a[7] * y + a[11] * z + a[15]
            } else {
                a00 = a[0];
                a01 = a[1];
                a02 = a[2];
                a03 = a[3];
                a10 = a[4];
                a11 = a[5];
                a12 = a[6];
                a13 = a[7];
                a20 = a[8];
                a21 = a[9];
                a22 = a[10];
                a23 = a[11];
                out[0] = a00;
                out[1] = a01;
                out[2] = a02;
                out[3] = a03;
                out[4] = a10;
                out[5] = a11;
                out[6] = a12;
                out[7] = a13;
                out[8] = a20;
                out[9] = a21;
                out[10] = a22;
                out[11] = a23;
                out[12] = a00 * x + a10 * y + a20 * z + a[12];
                out[13] = a01 * x + a11 * y + a21 * z + a[13];
                out[14] = a02 * x + a12 * y + a22 * z + a[14];
                out[15] = a03 * x + a13 * y + a23 * z + a[15]
            }
            return out
        };
        mat4.scale = function(out, a, v) {
            var x = v[0],
                y = v[1],
                z = v[2];
            out[0] = a[0] * x;
            out[1] = a[1] * x;
            out[2] = a[2] * x;
            out[3] = a[3] * x;
            out[4] = a[4] * y;
            out[5] = a[5] * y;
            out[6] = a[6] * y;
            out[7] = a[7] * y;
            out[8] = a[8] * z;
            out[9] = a[9] * z;
            out[10] = a[10] * z;
            out[11] = a[11] * z;
            out[12] = a[12];
            out[13] = a[13];
            out[14] = a[14];
            out[15] = a[15];
            return out
        };
        mat4.rotate = function(out, a, rad, axis) {
            var x = axis[0],
                y = axis[1],
                z = axis[2],
                len = Math.sqrt(x * x + y * y + z * z),
                s, c, t, a00, a01, a02, a03, a10, a11, a12, a13, a20, a21, a22, a23, b00, b01, b02, b10, b11, b12, b20, b21, b22;
            if (Math.abs(len) < GLMAT_EPSILON) {
                return null
            }
            len = 1 / len;
            x *= len;
            y *= len;
            z *= len;
            s = Math.sin(rad);
            c = Math.cos(rad);
            t = 1 - c;
            a00 = a[0];
            a01 = a[1];
            a02 = a[2];
            a03 = a[3];
            a10 = a[4];
            a11 = a[5];
            a12 = a[6];
            a13 = a[7];
            a20 = a[8];
            a21 = a[9];
            a22 = a[10];
            a23 = a[11];
            b00 = x * x * t + c;
            b01 = y * x * t + z * s;
            b02 = z * x * t - y * s;
            b10 = x * y * t - z * s;
            b11 = y * y * t + c;
            b12 = z * y * t + x * s;
            b20 = x * z * t + y * s;
            b21 = y * z * t - x * s;
            b22 = z * z * t + c;
            out[0] = a00 * b00 + a10 * b01 + a20 * b02;
            out[1] = a01 * b00 + a11 * b01 + a21 * b02;
            out[2] = a02 * b00 + a12 * b01 + a22 * b02;
            out[3] = a03 * b00 + a13 * b01 + a23 * b02;
            out[4] = a00 * b10 + a10 * b11 + a20 * b12;
            out[5] = a01 * b10 + a11 * b11 + a21 * b12;
            out[6] = a02 * b10 + a12 * b11 + a22 * b12;
            out[7] = a03 * b10 + a13 * b11 + a23 * b12;
            out[8] = a00 * b20 + a10 * b21 + a20 * b22;
            out[9] = a01 * b20 + a11 * b21 + a21 * b22;
            out[10] = a02 * b20 + a12 * b21 + a22 * b22;
            out[11] = a03 * b20 + a13 * b21 + a23 * b22;
            if (a !== out) {
                out[12] = a[12];
                out[13] = a[13];
                out[14] = a[14];
                out[15] = a[15]
            }
            return out
        };
        mat4.rotateX = function(out, a, rad) {
            var s = Math.sin(rad),
                c = Math.cos(rad),
                a10 = a[4],
                a11 = a[5],
                a12 = a[6],
                a13 = a[7],
                a20 = a[8],
                a21 = a[9],
                a22 = a[10],
                a23 = a[11];
            if (a !== out) {
                out[0] = a[0];
                out[1] = a[1];
                out[2] = a[2];
                out[3] = a[3];
                out[12] = a[12];
                out[13] = a[13];
                out[14] = a[14];
                out[15] = a[15]
            }
            out[4] = a10 * c + a20 * s;
            out[5] = a11 * c + a21 * s;
            out[6] = a12 * c + a22 * s;
            out[7] = a13 * c + a23 * s;
            out[8] = a20 * c - a10 * s;
            out[9] = a21 * c - a11 * s;
            out[10] = a22 * c - a12 * s;
            out[11] = a23 * c - a13 * s;
            return out
        };
        mat4.rotateY = function(out, a, rad) {
            var s = Math.sin(rad),
                c = Math.cos(rad),
                a00 = a[0],
                a01 = a[1],
                a02 = a[2],
                a03 = a[3],
                a20 = a[8],
                a21 = a[9],
                a22 = a[10],
                a23 = a[11];
            if (a !== out) {
                out[4] = a[4];
                out[5] = a[5];
                out[6] = a[6];
                out[7] = a[7];
                out[12] = a[12];
                out[13] = a[13];
                out[14] = a[14];
                out[15] = a[15]
            }
            out[0] = a00 * c - a20 * s;
            out[1] = a01 * c - a21 * s;
            out[2] = a02 * c - a22 * s;
            out[3] = a03 * c - a23 * s;
            out[8] = a00 * s + a20 * c;
            out[9] = a01 * s + a21 * c;
            out[10] = a02 * s + a22 * c;
            out[11] = a03 * s + a23 * c;
            return out
        };
        mat4.rotateZ = function(out, a, rad) {
            var s = Math.sin(rad),
                c = Math.cos(rad),
                a00 = a[0],
                a01 = a[1],
                a02 = a[2],
                a03 = a[3],
                a10 = a[4],
                a11 = a[5],
                a12 = a[6],
                a13 = a[7];
            if (a !== out) {
                out[8] = a[8];
                out[9] = a[9];
                out[10] = a[10];
                out[11] = a[11];
                out[12] = a[12];
                out[13] = a[13];
                out[14] = a[14];
                out[15] = a[15]
            }
            out[0] = a00 * c + a10 * s;
            out[1] = a01 * c + a11 * s;
            out[2] = a02 * c + a12 * s;
            out[3] = a03 * c + a13 * s;
            out[4] = a10 * c - a00 * s;
            out[5] = a11 * c - a01 * s;
            out[6] = a12 * c - a02 * s;
            out[7] = a13 * c - a03 * s;
            return out
        };
        mat4.fromRotationTranslation = function(out, q, v) {
            var x = q[0],
                y = q[1],
                z = q[2],
                w = q[3],
                x2 = x + x,
                y2 = y + y,
                z2 = z + z,
                xx = x * x2,
                xy = x * y2,
                xz = x * z2,
                yy = y * y2,
                yz = y * z2,
                zz = z * z2,
                wx = w * x2,
                wy = w * y2,
                wz = w * z2;
            out[0] = 1 - (yy + zz);
            out[1] = xy + wz;
            out[2] = xz - wy;
            out[3] = 0;
            out[4] = xy - wz;
            out[5] = 1 - (xx + zz);
            out[6] = yz + wx;
            out[7] = 0;
            out[8] = xz + wy;
            out[9] = yz - wx;
            out[10] = 1 - (xx + yy);
            out[11] = 0;
            out[12] = v[0];
            out[13] = v[1];
            out[14] = v[2];
            out[15] = 1;
            return out
        };
        mat4.fromQuat = function(out, q) {
            var x = q[0],
                y = q[1],
                z = q[2],
                w = q[3],
                x2 = x + x,
                y2 = y + y,
                z2 = z + z,
                xx = x * x2,
                yx = y * x2,
                yy = y * y2,
                zx = z * x2,
                zy = z * y2,
                zz = z * z2,
                wx = w * x2,
                wy = w * y2,
                wz = w * z2;
            out[0] = 1 - yy - zz;
            out[1] = yx + wz;
            out[2] = zx - wy;
            out[3] = 0;
            out[4] = yx - wz;
            out[5] = 1 - xx - zz;
            out[6] = zy + wx;
            out[7] = 0;
            out[8] = zx + wy;
            out[9] = zy - wx;
            out[10] = 1 - xx - yy;
            out[11] = 0;
            out[12] = 0;
            out[13] = 0;
            out[14] = 0;
            out[15] = 1;
            return out
        };
        mat4.frustum = function(out, left, right, bottom, top, near, far) {
            var rl = 1 / (right - left),
                tb = 1 / (top - bottom),
                nf = 1 / (near - far);
            out[0] = near * 2 * rl;
            out[1] = 0;
            out[2] = 0;
            out[3] = 0;
            out[4] = 0;
            out[5] = near * 2 * tb;
            out[6] = 0;
            out[7] = 0;
            out[8] = (right + left) * rl;
            out[9] = (top + bottom) * tb;
            out[10] = (far + near) * nf;
            out[11] = -1;
            out[12] = 0;
            out[13] = 0;
            out[14] = far * near * 2 * nf;
            out[15] = 0;
            return out
        };
        mat4.perspective = function(out, fovy, aspect, near, far) {
            var f = 1 / Math.tan(fovy / 2),
                nf = 1 / (near - far);
            out[0] = f / aspect;
            out[1] = 0;
            out[2] = 0;
            out[3] = 0;
            out[4] = 0;
            out[5] = f;
            out[6] = 0;
            out[7] = 0;
            out[8] = 0;
            out[9] = 0;
            out[10] = (far + near) * nf;
            out[11] = -1;
            out[12] = 0;
            out[13] = 0;
            out[14] = 2 * far * near * nf;
            out[15] = 0;
            return out
        };
        mat4.ortho = function(out, left, right, bottom, top, near, far) {
            var lr = 1 / (left - right),
                bt = 1 / (bottom - top),
                nf = 1 / (near - far);
            out[0] = -2 * lr;
            out[1] = 0;
            out[2] = 0;
            out[3] = 0;
            out[4] = 0;
            out[5] = -2 * bt;
            out[6] = 0;
            out[7] = 0;
            out[8] = 0;
            out[9] = 0;
            out[10] = 2 * nf;
            out[11] = 0;
            out[12] = (left + right) * lr;
            out[13] = (top + bottom) * bt;
            out[14] = (far + near) * nf;
            out[15] = 1;
            return out
        };
        mat4.lookAt = function(out, eye, center, up) {
            var x0, x1, x2, y0, y1, y2, z0, z1, z2, len, eyex = eye[0],
                eyey = eye[1],
                eyez = eye[2],
                upx = up[0],
                upy = up[1],
                upz = up[2],
                centerx = center[0],
                centery = center[1],
                centerz = center[2];
            if (Math.abs(eyex - centerx) < GLMAT_EPSILON && Math.abs(eyey - centery) < GLMAT_EPSILON && Math.abs(eyez - centerz) < GLMAT_EPSILON) {
                return mat4.identity(out)
            }
            z0 = eyex - centerx;
            z1 = eyey - centery;
            z2 = eyez - centerz;

            len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
            z0 *= len;
            z1 *= len;
            z2 *= len;
            x0 = upy * z2 - upz * z1;
            x1 = upz * z0 - upx * z2;
            x2 = upx * z1 - upy * z0;
            len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
            if (!len) {
                x0 = 0;
                x1 = 0;
                x2 = 0
            } else {
                len = 1 / len;
                x0 *= len;
                x1 *= len;
                x2 *= len
            }
            y0 = z1 * x2 - z2 * x1;
            y1 = z2 * x0 - z0 * x2;
            y2 = z0 * x1 - z1 * x0;
            len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
            if (!len) {
                y0 = 0;
                y1 = 0;
                y2 = 0
            } else {
                len = 1 / len;
                y0 *= len;
                y1 *= len;
                y2 *= len
            }
            out[0] = x0;
            out[1] = y0;
            out[2] = z0;
            out[3] = 0;
            out[4] = x1;
            out[5] = y1;
            out[6] = z1;
            out[7] = 0;
            out[8] = x2;
            out[9] = y2;
            out[10] = z2;
            out[11] = 0;
            out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
            out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
            out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
            out[15] = 1;
            return out
        };
        mat4.str = function(a) {
            return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")"
        };
        mat4.frob = function(a) {
            return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2))
        };
        if (typeof exports !== "undefined") {
            exports.mat4 = mat4
        }
        var quat = {};
        quat.create = function() {
            var out = new GLMAT_ARRAY_TYPE(4);
            out[0] = 0;
            out[1] = 0;
            out[2] = 0;
            out[3] = 1;
            return out
        };
        quat.rotationTo = function() {
            var tmpvec3 = vec3.create();
            var xUnitVec3 = vec3.fromValues(1, 0, 0);
            var yUnitVec3 = vec3.fromValues(0, 1, 0);
            return function(out, a, b) {
                var dot = vec3.dot(a, b);
                if (dot < -.999999) {
                    vec3.cross(tmpvec3, xUnitVec3, a);
                    if (vec3.length(tmpvec3) < 1e-6) vec3.cross(tmpvec3, yUnitVec3, a);
                    vec3.normalize(tmpvec3, tmpvec3);
                    quat.setAxisAngle(out, tmpvec3, Math.PI);
                    return out
                } else if (dot > .999999) {
                    out[0] = 0;
                    out[1] = 0;
                    out[2] = 0;
                    out[3] = 1;
                    return out
                } else {
                    vec3.cross(tmpvec3, a, b);
                    out[0] = tmpvec3[0];
                    out[1] = tmpvec3[1];
                    out[2] = tmpvec3[2];
                    out[3] = 1 + dot;
                    return quat.normalize(out, out)
                }
            }
        }();
        quat.setAxes = function() {
            var matr = mat3.create();
            return function(out, view, right, up) {
                matr[0] = right[0];
                matr[3] = right[1];
                matr[6] = right[2];
                matr[1] = up[0];
                matr[4] = up[1];
                matr[7] = up[2];
                matr[2] = -view[0];
                matr[5] = -view[1];
                matr[8] = -view[2];
                return quat.normalize(out, quat.fromMat3(out, matr))
            }
        }();
        quat.clone = vec4.clone;
        quat.fromValues = vec4.fromValues;
        quat.copy = vec4.copy;
        quat.set = vec4.set;
        quat.identity = function(out) {
            out[0] = 0;
            out[1] = 0;
            out[2] = 0;
            out[3] = 1;
            return out
        };
        quat.setAxisAngle = function(out, axis, rad) {
            rad = rad * .5;
            var s = Math.sin(rad);
            out[0] = s * axis[0];
            out[1] = s * axis[1];
            out[2] = s * axis[2];
            out[3] = Math.cos(rad);
            return out
        };
        quat.add = vec4.add;
        quat.multiply = function(out, a, b) {
            var ax = a[0],
                ay = a[1],
                az = a[2],
                aw = a[3],
                bx = b[0],
                by = b[1],
                bz = b[2],
                bw = b[3];
            out[0] = ax * bw + aw * bx + ay * bz - az * by;
            out[1] = ay * bw + aw * by + az * bx - ax * bz;
            out[2] = az * bw + aw * bz + ax * by - ay * bx;
            out[3] = aw * bw - ax * bx - ay * by - az * bz;
            return out
        };
        quat.mul = quat.multiply;
        quat.scale = vec4.scale;
        quat.rotateX = function(out, a, rad) {
            rad *= .5;
            var ax = a[0],
                ay = a[1],
                az = a[2],
                aw = a[3],
                bx = Math.sin(rad),
                bw = Math.cos(rad);
            out[0] = ax * bw + aw * bx;
            out[1] = ay * bw + az * bx;
            out[2] = az * bw - ay * bx;
            out[3] = aw * bw - ax * bx;
            return out
        };
        quat.rotateY = function(out, a, rad) {
            rad *= .5;
            var ax = a[0],
                ay = a[1],
                az = a[2],
                aw = a[3],
                by = Math.sin(rad),
                bw = Math.cos(rad);
            out[0] = ax * bw - az * by;
            out[1] = ay * bw + aw * by;
            out[2] = az * bw + ax * by;
            out[3] = aw * bw - ay * by;
            return out
        };
        quat.rotateZ = function(out, a, rad) {
            rad *= .5;
            var ax = a[0],
                ay = a[1],
                az = a[2],
                aw = a[3],
                bz = Math.sin(rad),
                bw = Math.cos(rad);
            out[0] = ax * bw + ay * bz;
            out[1] = ay * bw - ax * bz;
            out[2] = az * bw + aw * bz;
            out[3] = aw * bw - az * bz;
            return out
        };
        quat.calculateW = function(out, a) {
            var x = a[0],
                y = a[1],
                z = a[2];
            out[0] = x;
            out[1] = y;
            out[2] = z;
            out[3] = -Math.sqrt(Math.abs(1 - x * x - y * y - z * z));
            return out
        };
        quat.dot = vec4.dot;
        quat.lerp = vec4.lerp;
        quat.slerp = function(out, a, b, t) {
            var ax = a[0],
                ay = a[1],
                az = a[2],
                aw = a[3],
                bx = b[0],
                by = b[1],
                bz = b[2],
                bw = b[3];
            var omega, cosom, sinom, scale0, scale1;
            cosom = ax * bx + ay * by + az * bz + aw * bw;
            if (cosom < 0) {
                cosom = -cosom;
                bx = -bx;
                by = -by;
                bz = -bz;
                bw = -bw
            }
            if (1 - cosom > 1e-6) {
                omega = Math.acos(cosom);
                sinom = Math.sin(omega);
                scale0 = Math.sin((1 - t) * omega) / sinom;
                scale1 = Math.sin(t * omega) / sinom
            } else {
                scale0 = 1 - t;
                scale1 = t
            }
            out[0] = scale0 * ax + scale1 * bx;
            out[1] = scale0 * ay + scale1 * by;
            out[2] = scale0 * az + scale1 * bz;
            out[3] = scale0 * aw + scale1 * bw;
            return out
        };
        quat.invert = function(out, a) {
            var a0 = a[0],
                a1 = a[1],
                a2 = a[2],
                a3 = a[3],
                dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3,
                invDot = dot ? 1 / dot : 0;
            out[0] = -a0 * invDot;
            out[1] = -a1 * invDot;
            out[2] = -a2 * invDot;
            out[3] = a3 * invDot;
            return out
        };
        quat.conjugate = function(out, a) {
            out[0] = -a[0];
            out[1] = -a[1];
            out[2] = -a[2];
            out[3] = a[3];
            return out
        };
        quat.length = vec4.length;
        quat.len = quat.length;
        quat.squaredLength = vec4.squaredLength;
        quat.sqrLen = quat.squaredLength;
        quat.normalize = vec4.normalize;
        quat.fromMat3 = function(out, m) {
            var fTrace = m[0] + m[4] + m[8];
            var fRoot;
            if (fTrace > 0) {
                fRoot = Math.sqrt(fTrace + 1);
                out[3] = .5 * fRoot;
                fRoot = .5 / fRoot;
                out[0] = (m[7] - m[5]) * fRoot;
                out[1] = (m[2] - m[6]) * fRoot;
                out[2] = (m[3] - m[1]) * fRoot
            } else {
                var i = 0;
                if (m[4] > m[0]) i = 1;
                if (m[8] > m[i * 3 + i]) i = 2;
                var j = (i + 1) % 3;
                var k = (i + 2) % 3;
                fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1);
                out[i] = .5 * fRoot;
                fRoot = .5 / fRoot;
                out[3] = (m[k * 3 + j] - m[j * 3 + k]) * fRoot;
                out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
                out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot
            }
            return out
        };
        quat.str = function(a) {
            return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")"
        };
        if (typeof exports !== "undefined") {
            exports.quat = quat
        }
    })(shim.exports)
})(this);
! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var f;
        "undefined" != typeof window ? f = window : "undefined" != typeof global ? f = global : "undefined" != typeof self && (f = self), f.pako = e()
    }
}(function() {
    var define, module, exports;
    return function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = typeof require == "function" && require;
                    if (!u && a) return a(o, !0);
                    if (i) return i(o, !0);
                    throw new Error("Cannot find module '" + o + "'")
                }
                var f = n[o] = {
                    exports: {}
                };
                t[o][0].call(f.exports, function(e) {
                    var n = t[o][1][e];
                    return s(n ? n : e)
                }, f, f.exports, e, t, n, r)
            }
            return n[o].exports
        }
        var i = typeof require == "function" && require;
        for (var o = 0; o < r.length; o++) s(r[o]);
        return s
    }({
        1: [function(_dereq_, module, exports) {
            "use strict";
            var zlib_inflate = _dereq_("./zlib/inflate.js");
            var utils = _dereq_("./utils/common");
            var strings = _dereq_("./utils/strings");
            var c = _dereq_("./zlib/constants");
            var msg = _dereq_("./zlib/messages");
            var zstream = _dereq_("./zlib/zstream");
            var gzheader = _dereq_("./zlib/gzheader");
            var Inflate = function(options) {
                this.options = utils.assign({
                    chunkSize: 16384,
                    windowBits: 0,
                    to: ""
                }, options || {});
                var opt = this.options;
                if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
                    opt.windowBits = -opt.windowBits;
                    if (opt.windowBits === 0) {
                        opt.windowBits = -15
                    }
                }
                if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options && options.windowBits)) {
                    opt.windowBits += 32
                }
                if (opt.windowBits > 15 && opt.windowBits < 48) {
                    if ((opt.windowBits & 15) === 0) {
                        opt.windowBits |= 15
                    }
                }
                this.err = 0;
                this.msg = "";
                this.ended = false;
                this.chunks = [];
                this.strm = new zstream;
                this.strm.avail_out = 0;
                var status = zlib_inflate.inflateInit2(this.strm, opt.windowBits);
                if (status !== c.Z_OK) {
                    throw new Error(msg[status])
                }
                this.header = new gzheader;
                zlib_inflate.inflateGetHeader(this.strm, this.header)
            };
            Inflate.prototype.push = function(data, mode) {
                var strm = this.strm;
                var chunkSize = this.options.chunkSize;
                var status, _mode;
                var next_out_utf8, tail, utf8str;
                if (this.ended) {
                    return false
                }
                _mode = mode === ~~mode ? mode : mode === true ? c.Z_FINISH : c.Z_NO_FLUSH;
                if (typeof data === "string") {
                    strm.input = strings.binstring2buf(data)
                } else {
                    strm.input = data
                }
                strm.next_in = 0;
                strm.avail_in = strm.input.length;
                do {
                    if (strm.avail_out === 0) {
                        strm.output = new utils.Buf8(chunkSize);
                        strm.next_out = 0;
                        strm.avail_out = chunkSize
                    }
                    status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);
                    if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
                        this.onEnd(status);
                        this.ended = true;
                        return false
                    }
                    if (strm.next_out) {
                        if (strm.avail_out === 0 || status === c.Z_STREAM_END || strm.avail_in === 0 && _mode === c.Z_FINISH) {
                            if (this.options.to === "string") {
                                next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
                                tail = strm.next_out - next_out_utf8;
                                utf8str = strings.buf2string(strm.output, next_out_utf8);
                                strm.next_out = tail;
                                strm.avail_out = chunkSize - tail;
                                if (tail) {
                                    utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0)
                                }
                                this.onData(utf8str)
                            } else {
                                this.onData(utils.shrinkBuf(strm.output, strm.next_out))
                            }
                        }
                    }
                } while (strm.avail_in > 0 && status !== c.Z_STREAM_END);
                if (status === c.Z_STREAM_END) {
                    _mode = c.Z_FINISH
                }
                if (_mode === c.Z_FINISH) {
                    status = zlib_inflate.inflateEnd(this.strm);
                    this.onEnd(status);
                    this.ended = true;
                    return status === c.Z_OK
                }
                return true
            };
            Inflate.prototype.onData = function(chunk) {
                this.chunks.push(chunk)
            };
            Inflate.prototype.onEnd = function(status) {
                if (status === c.Z_OK) {
                    if (this.options.to === "string") {
                        this.result = this.chunks.join("")
                    } else {
                        this.result = utils.flattenChunks(this.chunks)
                    }
                }
                this.chunks = [];
                this.err = status;
                this.msg = this.strm.msg
            };

            function inflate(input, options) {
                var inflator = new Inflate(options);
                inflator.push(input, true);
                if (inflator.err) {
                    throw inflator.msg
                }
                return inflator.result
            }

            function inflateRaw(input, options) {
                options = options || {};
                options.raw = true;
                return inflate(input, options)
            }
            exports.Inflate = Inflate;
            exports.inflate = inflate;
            exports.inflateRaw = inflateRaw;
            exports.ungzip = inflate
        }, {
            "./utils/common": 2,
            "./utils/strings": 3,
            "./zlib/constants": 5,
            "./zlib/gzheader": 7,
            "./zlib/inflate.js": 9,
            "./zlib/messages": 11,
            "./zlib/zstream": 12
        }],
        2: [function(_dereq_, module, exports) {
            "use strict";
            var TYPED_OK = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Int32Array !== "undefined";
            exports.assign = function(obj) {
                var sources = Array.prototype.slice.call(arguments, 1);
                while (sources.length) {
                    var source = sources.shift();
                    if (!source) {
                        continue
                    }
                    if (typeof source !== "object") {
                        throw new TypeError(source + "must be non-object")
                    }
                    for (var p in source) {
                        if (source.hasOwnProperty(p)) {
                            obj[p] = source[p]
                        }
                    }
                }
                return obj
            };
            exports.shrinkBuf = function(buf, size) {
                if (buf.length === size) {
                    return buf
                }
                if (buf.subarray) {
                    return buf.subarray(0, size)
                }
                buf.length = size;
                return buf
            };
            var fnTyped = {
                arraySet: function(dest, src, src_offs, len, dest_offs) {
                    if (src.subarray && dest.subarray) {
                        dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
                        return
                    }
                    for (var i = 0; i < len; i++) {
                        dest[dest_offs + i] = src[src_offs + i]
                    }
                },
                flattenChunks: function(chunks) {
                    var i, l, len, pos, chunk, result;
                    len = 0;
                    for (i = 0, l = chunks.length; i < l; i++) {
                        len += chunks[i].length
                    }
                    result = new Uint8Array(len);
                    pos = 0;
                    for (i = 0, l = chunks.length; i < l; i++) {
                        chunk = chunks[i];
                        result.set(chunk, pos);
                        pos += chunk.length
                    }
                    return result
                }
            };
            var fnUntyped = {
                arraySet: function(dest, src, src_offs, len, dest_offs) {
                    for (var i = 0; i < len; i++) {
                        dest[dest_offs + i] = src[src_offs + i]
                    }
                },
                flattenChunks: function(chunks) {
                    return [].concat.apply([], chunks)
                }
            };
            exports.setTyped = function(on) {
                if (on) {
                    exports.Buf8 = Uint8Array;
                    exports.Buf16 = Uint16Array;
                    exports.Buf32 = Int32Array;
                    exports.assign(exports, fnTyped)
                } else {
                    exports.Buf8 = Array;
                    exports.Buf16 = Array;
                    exports.Buf32 = Array;
                    exports.assign(exports, fnUntyped)
                }
            };
            exports.setTyped(TYPED_OK)
        }, {}],
        3: [function(_dereq_, module, exports) {
            "use strict";
            var utils = _dereq_("./common");
            var STR_APPLY_OK = true;
            var STR_APPLY_UIA_OK = true;
            try {
                String.fromCharCode.apply(null, [0])
            } catch (__) {
                STR_APPLY_OK = false
            }
            try {
                String.fromCharCode.apply(null, new Uint8Array(1))
            } catch (__) {
                STR_APPLY_UIA_OK = false
            }
            var _utf8len = new utils.Buf8(256);
            for (var i = 0; i < 256; i++) {
                _utf8len[i] = i >= 252 ? 6 : i >= 248 ? 5 : i >= 240 ? 4 : i >= 224 ? 3 : i >= 192 ? 2 : 1
            }
            _utf8len[254] = _utf8len[254] = 1;
            exports.string2buf = function(str) {
                var buf, c, c2, m_pos, i, str_len = str.length,
                    buf_len = 0;
                for (m_pos = 0; m_pos < str_len; m_pos++) {
                    c = str.charCodeAt(m_pos);
                    if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
                        c2 = str.charCodeAt(m_pos + 1);
                        if ((c2 & 64512) === 56320) {
                            c = 65536 + (c - 55296 << 10) + (c2 - 56320);
                            m_pos++
                        }
                    }
                    buf_len += c < 128 ? 1 : c < 2048 ? 2 : c < 65536 ? 3 : 4
                }
                buf = new utils.Buf8(buf_len);
                for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
                    c = str.charCodeAt(m_pos);
                    if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
                        c2 = str.charCodeAt(m_pos + 1);
                        if ((c2 & 64512) === 56320) {
                            c = 65536 + (c - 55296 << 10) + (c2 - 56320);
                            m_pos++
                        }
                    }
                    if (c < 128) {
                        buf[i++] = c
                    } else if (c < 2048) {
                        buf[i++] = 192 | c >>> 6;
                        buf[i++] = 128 | c & 63
                    } else if (c < 65536) {
                        buf[i++] = 224 | c >>> 12;
                        buf[i++] = 128 | c >>> 6 & 63;
                        buf[i++] = 128 | c & 63
                    } else {
                        buf[i++] = 240 | c >>> 18;
                        buf[i++] = 128 | c >>> 12 & 63;
                        buf[i++] = 128 | c >>> 6 & 63;
                        buf[i++] = 128 | c & 63
                    }
                }
                return buf
            };

            function buf2binstring(buf, len) {
                if (len < 65537) {
                    if (buf.subarray && STR_APPLY_UIA_OK || !buf.subarray && STR_APPLY_OK) {
                        return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len))
                    }
                }
                var result = "";
                for (var i = 0; i < len; i++) {
                    result += String.fromCharCode(buf[i])
                }
                return result
            }
            exports.buf2binstring = function(buf) {
                return buf2binstring(buf, buf.length)
            };
            exports.binstring2buf = function(str) {
                var buf = new utils.Buf8(str.length);
                for (var i = 0, len = buf.length; i < len; i++) {
                    buf[i] = str.charCodeAt(i)
                }
                return buf
            };
            exports.buf2string = function(buf, max) {
                var i, out, c, c_len;
                var len = max || buf.length;
                var utf16buf = new Array(len * 2);
                for (out = 0, i = 0; i < len;) {
                    c = buf[i++];
                    if (c < 128) {
                        utf16buf[out++] = c;
                        continue
                    }
                    c_len = _utf8len[c];
                    if (c_len > 4) {
                        utf16buf[out++] = 65533;
                        i += c_len - 1;
                        continue
                    }
                    c &= c_len === 2 ? 31 : c_len === 3 ? 15 : 7;
                    while (c_len > 1 && i < len) {
                        c = c << 6 | buf[i++] & 63;
                        c_len--
                    }
                    if (c_len > 1) {
                        utf16buf[out++] = 65533;
                        continue
                    }
                    if (c < 65536) {
                        utf16buf[out++] = c
                    } else {
                        c -= 65536;
                        utf16buf[out++] = 55296 | c >> 10 & 1023;
                        utf16buf[out++] = 56320 | c & 1023
                    }
                }
                return buf2binstring(utf16buf, out)
            };
            exports.utf8border = function(buf, max) {
                var pos;
                max = max || buf.length;
                if (max > buf.length) {
                    max = buf.length
                }
                pos = max - 1;
                while (pos >= 0 && (buf[pos] & 192) === 128) {
                    pos--
                }
                if (pos < 0) {
                    return max
                }
                if (pos === 0) {
                    return max
                }
                return pos + _utf8len[buf[pos]] > max ? pos : max
            }
        }, {
            "./common": 2
        }],
        4: [function(_dereq_, module, exports) {
            "use strict";

            function adler32(adler, buf, len, pos) {
                var s1 = adler & 65535 | 0,
                    s2 = adler >>> 16 & 65535 | 0,
                    n = 0;
                while (len !== 0) {
                    n = len > 2e3 ? 2e3 : len;
                    len -= n;
                    do {
                        s1 = s1 + buf[pos++] | 0;
                        s2 = s2 + s1 | 0
                    } while (--n);
                    s1 %= 65521;
                    s2 %= 65521
                }
                return s1 | s2 << 16 | 0
            }
            module.exports = adler32
        }, {}],
        5: [function(_dereq_, module, exports) {
            module.exports = {
                Z_NO_FLUSH: 0,
                Z_PARTIAL_FLUSH: 1,
                Z_SYNC_FLUSH: 2,
                Z_FULL_FLUSH: 3,
                Z_FINISH: 4,
                Z_BLOCK: 5,
                Z_TREES: 6,
                Z_OK: 0,
                Z_STREAM_END: 1,
                Z_NEED_DICT: 2,
                Z_ERRNO: -1,
                Z_STREAM_ERROR: -2,
                Z_DATA_ERROR: -3,
                Z_BUF_ERROR: -5,
                Z_NO_COMPRESSION: 0,
                Z_BEST_SPEED: 1,
                Z_BEST_COMPRESSION: 9,
                Z_DEFAULT_COMPRESSION: -1,
                Z_FILTERED: 1,
                Z_HUFFMAN_ONLY: 2,
                Z_RLE: 3,
                Z_FIXED: 4,
                Z_DEFAULT_STRATEGY: 0,
                Z_BINARY: 0,
                Z_TEXT: 1,
                Z_UNKNOWN: 2,
                Z_DEFLATED: 8
            }
        }, {}],
        6: [function(_dereq_, module, exports) {
            "use strict";

            function makeTable() {
                var c, table = [];
                for (var n = 0; n < 256; n++) {
                    c = n;
                    for (var k = 0; k < 8; k++) {
                        c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1
                    }
                    table[n] = c
                }
                return table
            }
            var crcTable = makeTable();

            function crc32(crc, buf, len, pos) {
                var t = crcTable,
                    end = pos + len;
                crc = crc ^ -1;
                for (var i = pos; i < end; i++) {
                    crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 255]
                }
                return crc ^ -1
            }
            module.exports = crc32
        }, {}],
        7: [function(_dereq_, module, exports) {
            "use strict";

            function GZheader() {
                this.text = 0;
                this.time = 0;
                this.xflags = 0;
                this.os = 0;
                this.extra = null;
                this.extra_len = 0;
                this.name = "";
                this.comment = "";
                this.hcrc = 0;
                this.done = false
            }
            module.exports = GZheader
        }, {}],
        8: [function(_dereq_, module, exports) {
            "use strict";
            var BAD = 30;
            var TYPE = 12;
            module.exports = function inflate_fast(strm, start) {
                var state;
                var _in;
                var last;
                var _out;
                var beg;
                var end;
                var dmax;
                var wsize;
                var whave;
                var wnext;
                var window;
                var hold;
                var bits;
                var lcode;
                var dcode;
                var lmask;
                var dmask;
                var here;
                var op;
                var len;
                var dist;
                var from;
                var from_source;
                var input, output;
                state = strm.state;
                _in = strm.next_in;
                input = strm.input;
                last = _in + (strm.avail_in - 5);
                _out = strm.next_out;
                output = strm.output;
                beg = _out - (start - strm.avail_out);
                end = _out + (strm.avail_out - 257);
                dmax = state.dmax;
                wsize = state.wsize;
                whave = state.whave;
                wnext = state.wnext;
                window = state.window;
                hold = state.hold;
                bits = state.bits;
                lcode = state.lencode;
                dcode = state.distcode;
                lmask = (1 << state.lenbits) - 1;
                dmask = (1 << state.distbits) - 1;
                top: do {
                    if (bits < 15) {
                        hold += input[_in++] << bits;
                        bits += 8;
                        hold += input[_in++] << bits;
                        bits += 8
                    }
                    here = lcode[hold & lmask];
                    dolen: for (;;) {
                        op = here >>> 24;
                        hold >>>= op;
                        bits -= op;
                        op = here >>> 16 & 255;
                        if (op === 0) {
                            output[_out++] = here & 65535
                        } else if (op & 16) {
                            len = here & 65535;
                            op &= 15;
                            if (op) {
                                if (bits < op) {
                                    hold += input[_in++] << bits;
                                    bits += 8
                                }
                                len += hold & (1 << op) - 1;
                                hold >>>= op;
                                bits -= op
                            }
                            if (bits < 15) {
                                hold += input[_in++] << bits;
                                bits += 8;
                                hold += input[_in++] << bits;
                                bits += 8
                            }
                            here = dcode[hold & dmask];
                            dodist: for (;;) {
                                op = here >>> 24;
                                hold >>>= op;
                                bits -= op;
                                op = here >>> 16 & 255;
                                if (op & 16) {
                                    dist = here & 65535;
                                    op &= 15;
                                    if (bits < op) {
                                        hold += input[_in++] << bits;
                                        bits += 8;
                                        if (bits < op) {
                                            hold += input[_in++] << bits;
                                            bits += 8
                                        }
                                    }
                                    dist += hold & (1 << op) - 1;
                                    if (dist > dmax) {
                                        strm.msg = "invalid distance too far back";
                                        state.mode = BAD;
                                        break top
                                    }
                                    hold >>>= op;
                                    bits -= op;
                                    op = _out - beg;
                                    if (dist > op) {
                                        op = dist - op;
                                        if (op > whave) {
                                            if (state.sane) {
                                                strm.msg = "invalid distance too far back";
                                                state.mode = BAD;
                                                break top
                                            }
                                        }
                                        from = 0;
                                        from_source = window;
                                        if (wnext === 0) {
                                            from += wsize - op;
                                            if (op < len) {
                                                len -= op;
                                                do {
                                                    output[_out++] = window[from++]
                                                } while (--op);
                                                from = _out - dist;
                                                from_source = output
                                            }
                                        } else if (wnext < op) {
                                            from += wsize + wnext - op;
                                            op -= wnext;
                                            if (op < len) {
                                                len -= op;
                                                do {
                                                    output[_out++] = window[from++]
                                                } while (--op);
                                                from = 0;
                                                if (wnext < len) {
                                                    op = wnext;
                                                    len -= op;
                                                    do {
                                                        output[_out++] = window[from++]
                                                    } while (--op);
                                                    from = _out - dist;
                                                    from_source = output
                                                }
                                            }
                                        } else {
                                            from += wnext - op;
                                            if (op < len) {
                                                len -= op;
                                                do {
                                                    output[_out++] = window[from++]
                                                } while (--op);
                                                from = _out - dist;
                                                from_source = output
                                            }
                                        }
                                        while (len > 2) {
                                            output[_out++] = from_source[from++];
                                            output[_out++] = from_source[from++];
                                            output[_out++] = from_source[from++];
                                            len -= 3
                                        }
                                        if (len) {
                                            output[_out++] = from_source[from++];
                                            if (len > 1) {
                                                output[_out++] = from_source[from++]
                                            }
                                        }
                                    } else {
                                        from = _out - dist;
                                        do {
                                            output[_out++] = output[from++];
                                            output[_out++] = output[from++];
                                            output[_out++] = output[from++];
                                            len -= 3
                                        } while (len > 2);
                                        if (len) {
                                            output[_out++] = output[from++];
                                            if (len > 1) {
                                                output[_out++] = output[from++]
                                            }
                                        }
                                    }
                                } else if ((op & 64) === 0) {
                                    here = dcode[(here & 65535) + (hold & (1 << op) - 1)];
                                    continue dodist
                                } else {
                                    strm.msg = "invalid distance code";
                                    state.mode = BAD;
                                    break top
                                }
                                break
                            }
                        } else if ((op & 64) === 0) {
                            here = lcode[(here & 65535) + (hold & (1 << op) - 1)];
                            continue dolen
                        } else if (op & 32) {
                            state.mode = TYPE;
                            break top
                        } else {
                            strm.msg = "invalid literal/length code";
                            state.mode = BAD;
                            break top
                        }
                        break
                    }
                } while (_in < last && _out < end);
                len = bits >> 3;
                _in -= len;
                bits -= len << 3;
                hold &= (1 << bits) - 1;
                strm.next_in = _in;
                strm.next_out = _out;
                strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last);
                strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
                state.hold = hold;
                state.bits = bits;
                return
            }
        }, {}],
        9: [function(_dereq_, module, exports) {
            "use strict";
            var utils = _dereq_("../utils/common");
            var adler32 = _dereq_("./adler32");
            var crc32 = _dereq_("./crc32");
            var inflate_fast = _dereq_("./inffast");
            var inflate_table = _dereq_("./inftrees");
            var CODES = 0;
            var LENS = 1;
            var DISTS = 2;
            var Z_FINISH = 4;
            var Z_BLOCK = 5;
            var Z_TREES = 6;
            var Z_OK = 0;
            var Z_STREAM_END = 1;
            var Z_NEED_DICT = 2;
            var Z_STREAM_ERROR = -2;
            var Z_DATA_ERROR = -3;
            var Z_MEM_ERROR = -4;
            var Z_BUF_ERROR = -5;
            var Z_DEFLATED = 8;
            var HEAD = 1;
            var FLAGS = 2;
            var TIME = 3;
            var OS = 4;
            var EXLEN = 5;
            var EXTRA = 6;
            var NAME = 7;
            var COMMENT = 8;
            var HCRC = 9;
            var DICTID = 10;
            var DICT = 11;
            var TYPE = 12;
            var TYPEDO = 13;
            var STORED = 14;
            var COPY_ = 15;
            var COPY = 16;
            var TABLE = 17;
            var LENLENS = 18;
            var CODELENS = 19;
            var LEN_ = 20;
            var LEN = 21;
            var LENEXT = 22;
            var DIST = 23;
            var DISTEXT = 24;
            var MATCH = 25;
            var LIT = 26;
            var CHECK = 27;
            var LENGTH = 28;
            var DONE = 29;
            var BAD = 30;
            var MEM = 31;
            var SYNC = 32;
            var ENOUGH_LENS = 852;
            var ENOUGH_DISTS = 592;
            var MAX_WBITS = 15;
            var DEF_WBITS = MAX_WBITS;

            function ZSWAP32(q) {
                return (q >>> 24 & 255) + (q >>> 8 & 65280) + ((q & 65280) << 8) + ((q & 255) << 24)
            }

            function InflateState() {
                this.mode = 0;
                this.last = false;
                this.wrap = 0;
                this.havedict = false;
                this.flags = 0;
                this.dmax = 0;
                this.check = 0;
                this.total = 0;
                this.head = null;
                this.wbits = 0;
                this.wsize = 0;
                this.whave = 0;
                this.wnext = 0;
                this.window = null;
                this.hold = 0;
                this.bits = 0;
                this.length = 0;
                this.offset = 0;
                this.extra = 0;
                this.lencode = null;
                this.distcode = null;
                this.lenbits = 0;
                this.distbits = 0;
                this.ncode = 0;
                this.nlen = 0;
                this.ndist = 0;
                this.have = 0;
                this.next = null;
                this.lens = new utils.Buf16(320);
                this.work = new utils.Buf16(288);
                this.lendyn = null;
                this.distdyn = null;
                this.sane = 0;
                this.back = 0;
                this.was = 0
            }

            function inflateResetKeep(strm) {
                var state;
                if (!strm || !strm.state) {
                    return Z_STREAM_ERROR
                }
                state = strm.state;
                strm.total_in = strm.total_out = state.total = 0;
                strm.msg = "";
                if (state.wrap) {
                    strm.adler = state.wrap & 1
                }
                state.mode = HEAD;
                state.last = 0;
                state.havedict = 0;
                state.dmax = 32768;
                state.head = null;
                state.hold = 0;
                state.bits = 0;
                state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
                state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);
                state.sane = 1;
                state.back = -1;
                return Z_OK
            }

            function inflateReset(strm) {
                var state;
                if (!strm || !strm.state) {
                    return Z_STREAM_ERROR
                }
                state = strm.state;
                state.wsize = 0;
                state.whave = 0;
                state.wnext = 0;
                return inflateResetKeep(strm)
            }

            function inflateReset2(strm, windowBits) {
                var wrap;
                var state;
                if (!strm || !strm.state) {
                    return Z_STREAM_ERROR
                }
                state = strm.state;
                if (windowBits < 0) {
                    wrap = 0;
                    windowBits = -windowBits
                } else {
                    wrap = (windowBits >> 4) + 1;
                    if (windowBits < 48) {
                        windowBits &= 15
                    }
                }
                if (windowBits && (windowBits < 8 || windowBits > 15)) {
                    return Z_STREAM_ERROR
                }
                if (state.window !== null && state.wbits !== windowBits) {
                    state.window = null
                }
                state.wrap = wrap;
                state.wbits = windowBits;
                return inflateReset(strm)
            }

            function inflateInit2(strm, windowBits) {
                var ret;
                var state;
                if (!strm) {
                    return Z_STREAM_ERROR
                }
                state = new InflateState;
                strm.state = state;
                state.window = null;
                ret = inflateReset2(strm, windowBits);
                if (ret !== Z_OK) {
                    strm.state = null
                }
                return ret
            }

            function inflateInit(strm) {
                return inflateInit2(strm, DEF_WBITS)
            }
            var virgin = true;
            var lenfix, distfix;

            function fixedtables(state) {
                if (virgin) {
                    var sym;
                    lenfix = new utils.Buf32(512);
                    distfix = new utils.Buf32(32);
                    sym = 0;
                    while (sym < 144) {
                        state.lens[sym++] = 8
                    }
                    while (sym < 256) {
                        state.lens[sym++] = 9
                    }
                    while (sym < 280) {
                        state.lens[sym++] = 7
                    }
                    while (sym < 288) {
                        state.lens[sym++] = 8
                    }
                    inflate_table(LENS, state.lens, 0, 288, lenfix, 0, state.work, {
                        bits: 9
                    });
                    sym = 0;
                    while (sym < 32) {
                        state.lens[sym++] = 5
                    }
                    inflate_table(DISTS, state.lens, 0, 32, distfix, 0, state.work, {
                        bits: 5
                    });
                    virgin = false
                }
                state.lencode = lenfix;
                state.lenbits = 9;
                state.distcode = distfix;
                state.distbits = 5
            }

            function updatewindow(strm, src, end, copy) {
                var dist;
                var state = strm.state;
                if (state.window === null) {
                    state.wsize = 1 << state.wbits;
                    state.wnext = 0;
                    state.whave = 0;
                    state.window = new utils.Buf8(state.wsize)
                }
                if (copy >= state.wsize) {
                    utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
                    state.wnext = 0;
                    state.whave = state.wsize
                } else {
                    dist = state.wsize - state.wnext;
                    if (dist > copy) {
                        dist = copy
                    }
                    utils.arraySet(state.window, src, end - copy, dist, state.wnext);
                    copy -= dist;
                    if (copy) {
                        utils.arraySet(state.window, src, end - copy, copy, 0);
                        state.wnext = copy;
                        state.whave = state.wsize
                    } else {
                        state.wnext += dist;
                        if (state.wnext === state.wsize) {
                            state.wnext = 0
                        }
                        if (state.whave < state.wsize) {
                            state.whave += dist
                        }
                    }
                }
                return 0
            }

            function inflate(strm, flush) {
                var state;
                var input, output;
                var next;
                var put;
                var have, left;
                var hold;
                var bits;
                var _in, _out;
                var copy;
                var from;
                var from_source;
                var here = 0;
                var here_bits, here_op, here_val;
                var last_bits, last_op, last_val;
                var len;
                var ret;
                var hbuf = new utils.Buf8(4);
                var opts;
                var n;
                var order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                if (!strm || !strm.state || !strm.output || !strm.input && strm.avail_in !== 0) {
                    return Z_STREAM_ERROR
                }
                state = strm.state;
                if (state.mode === TYPE) {
                    state.mode = TYPEDO
                }
                put = strm.next_out;
                output = strm.output;
                left = strm.avail_out;
                next = strm.next_in;
                input = strm.input;
                have = strm.avail_in;
                hold = state.hold;
                bits = state.bits;
                _in = have;
                _out = left;
                ret = Z_OK;
                inf_leave: for (;;) {
                    switch (state.mode) {
                        case HEAD:
                            if (state.wrap === 0) {
                                state.mode = TYPEDO;
                                break
                            }
                            while (bits < 16) {
                                if (have === 0) {
                                    break inf_leave
                                }
                                have--;
                                hold += input[next++] << bits;
                                bits += 8
                            }
                            if (state.wrap & 2 && hold === 35615) {
                                state.check = 0;
                                hbuf[0] = hold & 255;
                                hbuf[1] = hold >>> 8 & 255;
                                state.check = crc32(state.check, hbuf, 2, 0);
                                hold = 0;
                                bits = 0;
                                state.mode = FLAGS;
                                break
                            }
                            state.flags = 0;
                            if (state.head) {
                                state.head.done = false
                            }
                            if (!(state.wrap & 1) || (((hold & 255) << 8) + (hold >> 8)) % 31) {
                                strm.msg = "incorrect header check";
                                state.mode = BAD;
                                break
                            }
                            if ((hold & 15) !== Z_DEFLATED) {
                                strm.msg = "unknown compression method";
                                state.mode = BAD;
                                break
                            }
                            hold >>>= 4;
                            bits -= 4;
                            len = (hold & 15) + 8;
                            if (state.wbits === 0) {
                                state.wbits = len
                            } else if (len > state.wbits) {
                                strm.msg = "invalid window size";
                                state.mode = BAD;
                                break
                            }
                            state.dmax = 1 << len;
                            strm.adler = state.check = 1;
                            state.mode = hold & 512 ? DICTID : TYPE;
                            hold = 0;
                            bits = 0;
                            break;
                        case FLAGS:
                            while (bits < 16) {
                                if (have === 0) {
                                    break inf_leave
                                }
                                have--;
                                hold += input[next++] << bits;
                                bits += 8
                            }
                            state.flags = hold;
                            if ((state.flags & 255) !== Z_DEFLATED) {
                                strm.msg = "unknown compression method";
                                state.mode = BAD;
                                break
                            }
                            if (state.flags & 57344) {
                                strm.msg = "unknown header flags set";
                                state.mode = BAD;
                                break
                            }
                            if (state.head) {
                                state.head.text = hold >> 8 & 1
                            }
                            if (state.flags & 512) {
                                hbuf[0] = hold & 255;
                                hbuf[1] = hold >>> 8 & 255;
                                state.check = crc32(state.check, hbuf, 2, 0)
                            }
                            hold = 0;
                            bits = 0;
                            state.mode = TIME;
                        case TIME:
                            while (bits < 32) {
                                if (have === 0) {
                                    break inf_leave
                                }
                                have--;
                                hold += input[next++] << bits;
                                bits += 8
                            }
                            if (state.head) {
                                state.head.time = hold
                            }
                            if (state.flags & 512) {
                                hbuf[0] = hold & 255;
                                hbuf[1] = hold >>> 8 & 255;
                                hbuf[2] = hold >>> 16 & 255;
                                hbuf[3] = hold >>> 24 & 255;
                                state.check = crc32(state.check, hbuf, 4, 0)
                            }
                            hold = 0;
                            bits = 0;
                            state.mode = OS;
                        case OS:
                            while (bits < 16) {
                                if (have === 0) {
                                    break inf_leave
                                }
                                have--;
                                hold += input[next++] << bits;
                                bits += 8
                            }
                            if (state.head) {
                                state.head.xflags = hold & 255;
                                state.head.os = hold >> 8
                            }
                            if (state.flags & 512) {
                                hbuf[0] = hold & 255;
                                hbuf[1] = hold >>> 8 & 255;
                                state.check = crc32(state.check, hbuf, 2, 0)
                            }
                            hold = 0;
                            bits = 0;
                            state.mode = EXLEN;
                        case EXLEN:
                            if (state.flags & 1024) {
                                while (bits < 16) {
                                    if (have === 0) {
                                        break inf_leave
                                    }
                                    have--;
                                    hold += input[next++] << bits;
                                    bits += 8
                                }
                                state.length = hold;
                                if (state.head) {
                                    state.head.extra_len = hold
                                }
                                if (state.flags & 512) {
                                    hbuf[0] = hold & 255;
                                    hbuf[1] = hold >>> 8 & 255;
                                    state.check = crc32(state.check, hbuf, 2, 0)
                                }
                                hold = 0;
                                bits = 0
                            } else if (state.head) {
                                state.head.extra = null
                            }
                            state.mode = EXTRA;
                        case EXTRA:
                            if (state.flags & 1024) {
                                copy = state.length;
                                if (copy > have) {
                                    copy = have
                                }
                                if (copy) {
                                    if (state.head) {
                                        len = state.head.extra_len - state.length;
                                        if (!state.head.extra) {
                                            state.head.extra = new Array(state.head.extra_len)
                                        }
                                        utils.arraySet(state.head.extra, input, next, copy, len)
                                    }
                                    if (state.flags & 512) {
                                        state.check = crc32(state.check, input, copy, next)
                                    }
                                    have -= copy;
                                    next += copy;
                                    state.length -= copy
                                }
                                if (state.length) {
                                    break inf_leave
                                }
                            }
                            state.length = 0;
                            state.mode = NAME;
                        case NAME:
                            if (state.flags & 2048) {
                                if (have === 0) {
                                    break inf_leave
                                }
                                copy = 0;
                                do {
                                    len = input[next + copy++];
                                    if (state.head && len && state.length < 65536) {
                                        state.head.name += String.fromCharCode(len)
                                    }
                                } while (len && copy < have);
                                if (state.flags & 512) {
                                    state.check = crc32(state.check, input, copy, next)
                                }
                                have -= copy;
                                next += copy;
                                if (len) {
                                    break inf_leave
                                }
                            } else if (state.head) {
                                state.head.name = null
                            }
                            state.length = 0;
                            state.mode = COMMENT;
                        case COMMENT:
                            if (state.flags & 4096) {
                                if (have === 0) {
                                    break inf_leave
                                }
                                copy = 0;
                                do {
                                    len = input[next + copy++];
                                    if (state.head && len && state.length < 65536) {
                                        state.head.comment += String.fromCharCode(len)
                                    }
                                } while (len && copy < have);
                                if (state.flags & 512) {
                                    state.check = crc32(state.check, input, copy, next)
                                }
                                have -= copy;
                                next += copy;
                                if (len) {
                                    break inf_leave
                                }
                            } else if (state.head) {
                                state.head.comment = null
                            }
                            state.mode = HCRC;
                        case HCRC:
                            if (state.flags & 512) {
                                while (bits < 16) {
                                    if (have === 0) {
                                        break inf_leave
                                    }
                                    have--;
                                    hold += input[next++] << bits;
                                    bits += 8
                                }
                                if (hold !== (state.check & 65535)) {
                                    strm.msg = "header crc mismatch";
                                    state.mode = BAD;
                                    break
                                }
                                hold = 0;
                                bits = 0
                            }
                            if (state.head) {
                                state.head.hcrc = state.flags >> 9 & 1;
                                state.head.done = true
                            }
                            strm.adler = state.check = 0;
                            state.mode = TYPE;
                            break;
                        case DICTID:
                            while (bits < 32) {
                                if (have === 0) {
                                    break inf_leave
                                }
                                have--;
                                hold += input[next++] << bits;
                                bits += 8
                            }
                            strm.adler = state.check = ZSWAP32(hold);
                            hold = 0;
                            bits = 0;
                            state.mode = DICT;
                        case DICT:
                            if (state.havedict === 0) {
                                strm.next_out = put;
                                strm.avail_out = left;
                                strm.next_in = next;
                                strm.avail_in = have;
                                state.hold = hold;
                                state.bits = bits;
                                return Z_NEED_DICT
                            }
                            strm.adler = state.check = 1;
                            state.mode = TYPE;
                        case TYPE:
                            if (flush === Z_BLOCK || flush === Z_TREES) {
                                break inf_leave
                            }
                        case TYPEDO:
                            if (state.last) {
                                hold >>>= bits & 7;
                                bits -= bits & 7;
                                state.mode = CHECK;
                                break
                            }
                            while (bits < 3) {
                                if (have === 0) {
                                    break inf_leave
                                }
                                have--;
                                hold += input[next++] << bits;
                                bits += 8
                            }
                            state.last = hold & 1;
                            hold >>>= 1;
                            bits -= 1;
                            switch (hold & 3) {
                                case 0:
                                    state.mode = STORED;
                                    break;
                                case 1:
                                    fixedtables(state);
                                    state.mode = LEN_;
                                    if (flush === Z_TREES) {
                                        hold >>>= 2;
                                        bits -= 2;
                                        break inf_leave
                                    }
                                    break;
                                case 2:
                                    state.mode = TABLE;
                                    break;
                                case 3:
                                    strm.msg = "invalid block type";
                                    state.mode = BAD
                            }
                            hold >>>= 2;
                            bits -= 2;
                            break;
                        case STORED:
                            hold >>>= bits & 7;
                            bits -= bits & 7;
                            while (bits < 32) {
                                if (have === 0) {
                                    break inf_leave
                                }
                                have--;
                                hold += input[next++] << bits;
                                bits += 8
                            }
                            if ((hold & 65535) !== (hold >>> 16 ^ 65535)) {
                                strm.msg = "invalid stored block lengths";
                                state.mode = BAD;
                                break
                            }
                            state.length = hold & 65535;
                            hold = 0;
                            bits = 0;
                            state.mode = COPY_;
                            if (flush === Z_TREES) {
                                break inf_leave
                            }
                        case COPY_:
                            state.mode = COPY;
                        case COPY:
                            copy = state.length;
                            if (copy) {
                                if (copy > have) {
                                    copy = have
                                }
                                if (copy > left) {
                                    copy = left
                                }
                                if (copy === 0) {
                                    break inf_leave
                                }
                                utils.arraySet(output, input, next, copy, put);
                                have -= copy;
                                next += copy;
                                left -= copy;
                                put += copy;
                                state.length -= copy;
                                break
                            }
                            state.mode = TYPE;
                            break;
                        case TABLE:
                            while (bits < 14) {
                                if (have === 0) {
                                    break inf_leave
                                }
                                have--;
                                hold += input[next++] << bits;
                                bits += 8
                            }
                            state.nlen = (hold & 31) + 257;
                            hold >>>= 5;
                            bits -= 5;
                            state.ndist = (hold & 31) + 1;
                            hold >>>= 5;
                            bits -= 5;
                            state.ncode = (hold & 15) + 4;
                            hold >>>= 4;
                            bits -= 4;
                            if (state.nlen > 286 || state.ndist > 30) {
                                strm.msg = "too many length or distance symbols";
                                state.mode = BAD;
                                break
                            }
                            state.have = 0;
                            state.mode = LENLENS;
                        case LENLENS:
                            while (state.have < state.ncode) {
                                while (bits < 3) {
                                    if (have === 0) {
                                        break inf_leave
                                    }
                                    have--;
                                    hold += input[next++] << bits;
                                    bits += 8
                                }
                                state.lens[order[state.have++]] = hold & 7;
                                hold >>>= 3;
                                bits -= 3
                            }
                            while (state.have < 19) {
                                state.lens[order[state.have++]] = 0
                            }
                            state.lencode = state.lendyn;
                            state.lenbits = 7;
                            opts = {
                                bits: state.lenbits
                            };
                            ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
                            state.lenbits = opts.bits;
                            if (ret) {
                                strm.msg = "invalid code lengths set";
                                state.mode = BAD;
                                break
                            }
                            state.have = 0;
                            state.mode = CODELENS;
                        case CODELENS:
                            while (state.have < state.nlen + state.ndist) {
                                for (;;) {
                                    here = state.lencode[hold & (1 << state.lenbits) - 1];
                                    here_bits = here >>> 24;
                                    here_op = here >>> 16 & 255;
                                    here_val = here & 65535;
                                    if (here_bits <= bits) {
                                        break
                                    }
                                    if (have === 0) {
                                        break inf_leave
                                    }
                                    have--;
                                    hold += input[next++] << bits;
                                    bits += 8
                                }
                                if (here_val < 16) {
                                    hold >>>= here_bits;
                                    bits -= here_bits;
                                    state.lens[state.have++] = here_val
                                } else {
                                    if (here_val === 16) {
                                        n = here_bits + 2;
                                        while (bits < n) {
                                            if (have === 0) {
                                                break inf_leave
                                            }
                                            have--;
                                            hold += input[next++] << bits;
                                            bits += 8
                                        }
                                        hold >>>= here_bits;
                                        bits -= here_bits;
                                        if (state.have === 0) {
                                            strm.msg = "invalid bit length repeat";
                                            state.mode = BAD;
                                            break
                                        }
                                        len = state.lens[state.have - 1];
                                        copy = 3 + (hold & 3);
                                        hold >>>= 2;
                                        bits -= 2
                                    } else if (here_val === 17) {
                                        n = here_bits + 3;
                                        while (bits < n) {
                                            if (have === 0) {
                                                break inf_leave
                                            }
                                            have--;
                                            hold += input[next++] << bits;
                                            bits += 8
                                        }
                                        hold >>>= here_bits;
                                        bits -= here_bits;
                                        len = 0;
                                        copy = 3 + (hold & 7);
                                        hold >>>= 3;
                                        bits -= 3
                                    } else {
                                        n = here_bits + 7;
                                        while (bits < n) {
                                            if (have === 0) {
                                                break inf_leave
                                            }
                                            have--;
                                            hold += input[next++] << bits;
                                            bits += 8
                                        }
                                        hold >>>= here_bits;
                                        bits -= here_bits;
                                        len = 0;
                                        copy = 11 + (hold & 127);
                                        hold >>>= 7;
                                        bits -= 7
                                    }
                                    if (state.have + copy > state.nlen + state.ndist) {
                                        strm.msg = "invalid bit length repeat";
                                        state.mode = BAD;
                                        break
                                    }
                                    while (copy--) {
                                        state.lens[state.have++] = len
                                    }
                                }
                            }
                            if (state.mode === BAD) {
                                break
                            }
                            if (state.lens[256] === 0) {
                                strm.msg = "invalid code -- missing end-of-block";
                                state.mode = BAD;
                                break
                            }
                            state.lenbits = 9;
                            opts = {
                                bits: state.lenbits
                            };
                            ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
                            state.lenbits = opts.bits;
                            if (ret) {
                                strm.msg = "invalid literal/lengths set";
                                state.mode = BAD;
                                break
                            }
                            state.distbits = 6;
                            state.distcode = state.distdyn;
                            opts = {
                                bits: state.distbits
                            };
                            ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
                            state.distbits = opts.bits;
                            if (ret) {
                                strm.msg = "invalid distances set";
                                state.mode = BAD;
                                break
                            }
                            state.mode = LEN_;
                            if (flush === Z_TREES) {
                                break inf_leave
                            }
                        case LEN_:
                            state.mode = LEN;
                        case LEN:
                            if (have >= 6 && left >= 258) {
                                strm.next_out = put;
                                strm.avail_out = left;
                                strm.next_in = next;
                                strm.avail_in = have;
                                state.hold = hold;
                                state.bits = bits;
                                inflate_fast(strm, _out);
                                put = strm.next_out;
                                output = strm.output;
                                left = strm.avail_out;
                                next = strm.next_in;
                                input = strm.input;
                                have = strm.avail_in;
                                hold = state.hold;
                                bits = state.bits;
                                if (state.mode === TYPE) {
                                    state.back = -1
                                }
                                break
                            }
                            state.back = 0;
                            for (;;) {
                                here = state.lencode[hold & (1 << state.lenbits) - 1];
                                here_bits = here >>> 24;
                                here_op = here >>> 16 & 255;
                                here_val = here & 65535;
                                if (here_bits <= bits) {
                                    break
                                }
                                if (have === 0) {
                                    break inf_leave
                                }
                                have--;
                                hold += input[next++] << bits;
                                bits += 8
                            }
                            if (here_op && (here_op & 240) === 0) {
                                last_bits = here_bits;
                                last_op = here_op;
                                last_val = here_val;
                                for (;;) {
                                    here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                                    here_bits = here >>> 24;
                                    here_op = here >>> 16 & 255;
                                    here_val = here & 65535;
                                    if (last_bits + here_bits <= bits) {
                                        break
                                    }
                                    if (have === 0) {
                                        break inf_leave
                                    }
                                    have--;
                                    hold += input[next++] << bits;
                                    bits += 8
                                }
                                hold >>>= last_bits;
                                bits -= last_bits;
                                state.back += last_bits
                            }
                            hold >>>= here_bits;
                            bits -= here_bits;
                            state.back += here_bits;
                            state.length = here_val;
                            if (here_op === 0) {
                                state.mode = LIT;
                                break
                            }
                            if (here_op & 32) {
                                state.back = -1;
                                state.mode = TYPE;
                                break
                            }
                            if (here_op & 64) {
                                strm.msg = "invalid literal/length code";
                                state.mode = BAD;
                                break
                            }
                            state.extra = here_op & 15;
                            state.mode = LENEXT;
                        case LENEXT:
                            if (state.extra) {
                                n = state.extra;
                                while (bits < n) {
                                    if (have === 0) {
                                        break inf_leave
                                    }
                                    have--;
                                    hold += input[next++] << bits;
                                    bits += 8
                                }
                                state.length += hold & (1 << state.extra) - 1;
                                hold >>>= state.extra;
                                bits -= state.extra;
                                state.back += state.extra
                            }
                            state.was = state.length;
                            state.mode = DIST;
                        case DIST:
                            for (;;) {
                                here = state.distcode[hold & (1 << state.distbits) - 1];
                                here_bits = here >>> 24;
                                here_op = here >>> 16 & 255;
                                here_val = here & 65535;
                                if (here_bits <= bits) {
                                    break
                                }
                                if (have === 0) {
                                    break inf_leave
                                }
                                have--;
                                hold += input[next++] << bits;
                                bits += 8
                            }
                            if ((here_op & 240) === 0) {
                                last_bits = here_bits;
                                last_op = here_op;
                                last_val = here_val;

                                for (;;) {
                                    here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                                    here_bits = here >>> 24;
                                    here_op = here >>> 16 & 255;
                                    here_val = here & 65535;
                                    if (last_bits + here_bits <= bits) {
                                        break
                                    }
                                    if (have === 0) {
                                        break inf_leave
                                    }
                                    have--;
                                    hold += input[next++] << bits;
                                    bits += 8
                                }
                                hold >>>= last_bits;
                                bits -= last_bits;
                                state.back += last_bits
                            }
                            hold >>>= here_bits;
                            bits -= here_bits;
                            state.back += here_bits;
                            if (here_op & 64) {
                                strm.msg = "invalid distance code";
                                state.mode = BAD;
                                break
                            }
                            state.offset = here_val;
                            state.extra = here_op & 15;
                            state.mode = DISTEXT;
                        case DISTEXT:
                            if (state.extra) {
                                n = state.extra;
                                while (bits < n) {
                                    if (have === 0) {
                                        break inf_leave
                                    }
                                    have--;
                                    hold += input[next++] << bits;
                                    bits += 8
                                }
                                state.offset += hold & (1 << state.extra) - 1;
                                hold >>>= state.extra;
                                bits -= state.extra;
                                state.back += state.extra
                            }
                            if (state.offset > state.dmax) {
                                strm.msg = "invalid distance too far back";
                                state.mode = BAD;
                                break
                            }
                            state.mode = MATCH;
                        case MATCH:
                            if (left === 0) {
                                break inf_leave
                            }
                            copy = _out - left;
                            if (state.offset > copy) {
                                copy = state.offset - copy;
                                if (copy > state.whave) {
                                    if (state.sane) {
                                        strm.msg = "invalid distance too far back";
                                        state.mode = BAD;
                                        break
                                    }
                                }
                                if (copy > state.wnext) {
                                    copy -= state.wnext;
                                    from = state.wsize - copy
                                } else {
                                    from = state.wnext - copy
                                }
                                if (copy > state.length) {
                                    copy = state.length
                                }
                                from_source = state.window
                            } else {
                                from_source = output;
                                from = put - state.offset;
                                copy = state.length
                            }
                            if (copy > left) {
                                copy = left
                            }
                            left -= copy;
                            state.length -= copy;
                            do {
                                output[put++] = from_source[from++]
                            } while (--copy);
                            if (state.length === 0) {
                                state.mode = LEN
                            }
                            break;
                        case LIT:
                            if (left === 0) {
                                break inf_leave
                            }
                            output[put++] = state.length;
                            left--;
                            state.mode = LEN;
                            break;
                        case CHECK:
                            if (state.wrap) {
                                while (bits < 32) {
                                    if (have === 0) {
                                        break inf_leave
                                    }
                                    have--;
                                    hold |= input[next++] << bits;
                                    bits += 8
                                }
                                _out -= left;
                                strm.total_out += _out;
                                state.total += _out;
                                if (_out) {
                                    strm.adler = state.check = state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out)
                                }
                                _out = left;
                                if ((state.flags ? hold : ZSWAP32(hold)) !== state.check) {
                                    strm.msg = "incorrect data check";
                                    state.mode = BAD;
                                    break
                                }
                                hold = 0;
                                bits = 0
                            }
                            state.mode = LENGTH;
                        case LENGTH:
                            if (state.wrap && state.flags) {
                                while (bits < 32) {
                                    if (have === 0) {
                                        break inf_leave
                                    }
                                    have--;
                                    hold += input[next++] << bits;
                                    bits += 8
                                }
                                if (hold !== (state.total & 4294967295)) {
                                    strm.msg = "incorrect length check";
                                    state.mode = BAD;
                                    break
                                }
                                hold = 0;
                                bits = 0
                            }
                            state.mode = DONE;
                        case DONE:
                            ret = Z_STREAM_END;
                            break inf_leave;
                        case BAD:
                            ret = Z_DATA_ERROR;
                            break inf_leave;
                        case MEM:
                            return Z_MEM_ERROR;
                        case SYNC:
                        default:
                            return Z_STREAM_ERROR
                    }
                }
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits;
                if (state.wsize || _out !== strm.avail_out && state.mode < BAD && (state.mode < CHECK || flush !== Z_FINISH)) {
                    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
                        state.mode = MEM;
                        return Z_MEM_ERROR
                    }
                }
                _in -= strm.avail_in;
                _out -= strm.avail_out;
                strm.total_in += _in;
                strm.total_out += _out;
                state.total += _out;
                if (state.wrap && _out) {
                    strm.adler = state.check = state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out)
                }
                strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
                if ((_in === 0 && _out === 0 || flush === Z_FINISH) && ret === Z_OK) {
                    ret = Z_BUF_ERROR
                }
                return ret
            }

            function inflateEnd(strm) {
                if (!strm || !strm.state) {
                    return Z_STREAM_ERROR
                }
                var state = strm.state;
                if (state.window) {
                    state.window = null
                }
                strm.state = null;
                return Z_OK
            }

            function inflateGetHeader(strm, head) {
                var state;
                if (!strm || !strm.state) {
                    return Z_STREAM_ERROR
                }
                state = strm.state;
                if ((state.wrap & 2) === 0) {
                    return Z_STREAM_ERROR
                }
                state.head = head;
                head.done = false;
                return Z_OK
            }
            exports.inflateReset = inflateReset;
            exports.inflateReset2 = inflateReset2;
            exports.inflateResetKeep = inflateResetKeep;
            exports.inflateInit = inflateInit;
            exports.inflateInit2 = inflateInit2;
            exports.inflate = inflate;
            exports.inflateEnd = inflateEnd;
            exports.inflateGetHeader = inflateGetHeader;
            exports.inflateInfo = "pako inflate (from Nodeca project)"
        }, {
            "../utils/common": 2,
            "./adler32": 4,
            "./crc32": 6,
            "./inffast": 8,
            "./inftrees": 10
        }],
        10: [function(_dereq_, module, exports) {
            "use strict";
            var utils = _dereq_("../utils/common");
            var MAXBITS = 15;
            var ENOUGH_LENS = 852;
            var ENOUGH_DISTS = 592;
            var CODES = 0;
            var LENS = 1;
            var DISTS = 2;
            var lbase = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0];
            var lext = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78];
            var dbase = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0];
            var dext = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
            module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts) {
                var bits = opts.bits;
                var len = 0;
                var sym = 0;
                var min = 0,
                    max = 0;
                var root = 0;
                var curr = 0;
                var drop = 0;
                var left = 0;
                var used = 0;
                var huff = 0;
                var incr;
                var fill;
                var low;
                var mask;
                var next;
                var base = null;
                var base_index = 0;
                var end;
                var count = new utils.Buf16(MAXBITS + 1);
                var offs = new utils.Buf16(MAXBITS + 1);
                var extra = null;
                var extra_index = 0;
                var here_bits, here_op, here_val;
                for (len = 0; len <= MAXBITS; len++) {
                    count[len] = 0
                }
                for (sym = 0; sym < codes; sym++) {
                    count[lens[lens_index + sym]] ++
                }
                root = bits;
                for (max = MAXBITS; max >= 1; max--) {
                    if (count[max] !== 0) {
                        break
                    }
                }
                if (root > max) {
                    root = max
                }
                if (max === 0) {
                    table[table_index++] = 1 << 24 | 64 << 16 | 0;
                    table[table_index++] = 1 << 24 | 64 << 16 | 0;
                    opts.bits = 1;
                    return 0
                }
                for (min = 1; min < max; min++) {
                    if (count[min] !== 0) {
                        break
                    }
                }
                if (root < min) {
                    root = min
                }
                left = 1;
                for (len = 1; len <= MAXBITS; len++) {
                    left <<= 1;
                    left -= count[len];
                    if (left < 0) {
                        return -1
                    }
                }
                if (left > 0 && (type === CODES || max !== 1)) {
                    return -1
                }
                offs[1] = 0;
                for (len = 1; len < MAXBITS; len++) {
                    offs[len + 1] = offs[len] + count[len]
                }
                for (sym = 0; sym < codes; sym++) {
                    if (lens[lens_index + sym] !== 0) {
                        work[offs[lens[lens_index + sym]] ++] = sym
                    }
                }
                if (type === CODES) {
                    base = extra = work;
                    end = 19
                } else if (type === LENS) {
                    base = lbase;
                    base_index -= 257;
                    extra = lext;
                    extra_index -= 257;
                    end = 256
                } else {
                    base = dbase;
                    extra = dext;
                    end = -1
                }
                huff = 0;
                sym = 0;
                len = min;
                next = table_index;
                curr = root;
                drop = 0;
                low = -1;
                used = 1 << root;
                mask = used - 1;
                if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
                    return 1
                }
                var i = 0;
                for (;;) {
                    i++;
                    here_bits = len - drop;
                    if (work[sym] < end) {
                        here_op = 0;
                        here_val = work[sym]
                    } else if (work[sym] > end) {
                        here_op = extra[extra_index + work[sym]];
                        here_val = base[base_index + work[sym]]
                    } else {
                        here_op = 32 + 64;
                        here_val = 0
                    }
                    incr = 1 << len - drop;
                    fill = 1 << curr;
                    min = fill;
                    do {
                        fill -= incr;
                        table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0
                    } while (fill !== 0);
                    incr = 1 << len - 1;
                    while (huff & incr) {
                        incr >>= 1
                    }
                    if (incr !== 0) {
                        huff &= incr - 1;
                        huff += incr
                    } else {
                        huff = 0
                    }
                    sym++;
                    if (--count[len] === 0) {
                        if (len === max) {
                            break
                        }
                        len = lens[lens_index + work[sym]]
                    }
                    if (len > root && (huff & mask) !== low) {
                        if (drop === 0) {
                            drop = root
                        }
                        next += min;
                        curr = len - drop;
                        left = 1 << curr;
                        while (curr + drop < max) {
                            left -= count[curr + drop];
                            if (left <= 0) {
                                break
                            }
                            curr++;
                            left <<= 1
                        }
                        used += 1 << curr;
                        if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
                            return 1
                        }
                        low = huff & mask;
                        table[low] = root << 24 | curr << 16 | next - table_index | 0
                    }
                }
                if (huff !== 0) {
                    table[next + huff] = len - drop << 24 | 64 << 16 | 0
                }
                opts.bits = root;
                return 0
            }
        }, {
            "../utils/common": 2
        }],
        11: [function(_dereq_, module, exports) {
            "use strict";
            module.exports = {
                2: "need dictionary",
                1: "stream end",
                0: "",
                "-1": "file error",
                "-2": "stream error",
                "-3": "data error",
                "-4": "insufficient memory",
                "-5": "buffer error",
                "-6": "incompatible version"
            }
        }, {}],
        12: [function(_dereq_, module, exports) {
            "use strict";

            function ZStream() {
                this.input = null;
                this.next_in = 0;
                this.avail_in = 0;
                this.total_in = 0;
                this.output = null;
                this.next_out = 0;
                this.avail_out = 0;
                this.total_out = 0;
                this.msg = "";
                this.state = null;
                this.data_type = 2;
                this.adler = 0
            }
            module.exports = ZStream
        }, {}]
    }, {}, [1])(1)
});
var swfobject = function() {
    var D = "undefined",
        r = "object",
        T = "Shockwave Flash",
        Z = "ShockwaveFlash.ShockwaveFlash",
        q = "application/x-shockwave-flash",
        S = "SWFObjectExprInst",
        x = "onreadystatechange",
        Q = window,
        h = document,
        t = navigator,
        V = false,
        X = [],
        o = [],
        P = [],
        K = [],
        I, p, E, B, L = false,
        a = false,
        m, G, j = true,
        l = false,
        O = function() {
            var ad = typeof h.getElementById != D && typeof h.getElementsByTagName != D && typeof h.createElement != D,
                ak = t.userAgent.toLowerCase(),
                ab = t.platform.toLowerCase(),
                ah = ab ? /win/.test(ab) : /win/.test(ak),
                af = ab ? /mac/.test(ab) : /mac/.test(ak),
                ai = /webkit/.test(ak) ? parseFloat(ak.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                aa = t.appName === "Microsoft Internet Explorer",
                aj = [0, 0, 0],
                ae = null;
            if (typeof t.plugins != D && typeof t.plugins[T] == r) {
                ae = t.plugins[T].description;
                if (ae && (typeof t.mimeTypes != D && t.mimeTypes[q] && t.mimeTypes[q].enabledPlugin)) {
                    V = true;
                    aa = false;
                    ae = ae.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                    aj[0] = n(ae.replace(/^(.*)\..*$/, "$1"));
                    aj[1] = n(ae.replace(/^.*\.(.*)\s.*$/, "$1"));
                    aj[2] = /[a-zA-Z]/.test(ae) ? n(ae.replace(/^.*[a-zA-Z]+(.*)$/, "$1")) : 0
                }
            } else {
                if (typeof Q.ActiveXObject != D) {
                    try {
                        var ag = new ActiveXObject(Z);
                        if (ag) {
                            ae = ag.GetVariable("$version");
                            if (ae) {
                                aa = true;
                                ae = ae.split(" ")[1].split(",");
                                aj = [n(ae[0]), n(ae[1]), n(ae[2])]
                            }
                        }
                    } catch (ac) {}
                }
            }
            return {
                w3: ad,
                pv: aj,
                wk: ai,
                ie: aa,
                win: ah,
                mac: af
            }
        }(),
        i = function() {
            if (!O.w3) {
                return
            }
            if (typeof h.readyState != D && (h.readyState === "complete" || h.readyState === "interactive") || typeof h.readyState == D && (h.getElementsByTagName("body")[0] || h.body)) {
                f()
            }
            if (!L) {
                if (typeof h.addEventListener != D) {
                    h.addEventListener("DOMContentLoaded", f, false)
                }
                if (O.ie) {
                    h.attachEvent(x, function aa() {
                        if (h.readyState == "complete") {
                            h.detachEvent(x, aa);
                            f()
                        }
                    });
                    if (Q == top) {
                        (function ac() {
                            if (L) {
                                return
                            }
                            try {
                                h.documentElement.doScroll("left")
                            } catch (ad) {
                                setTimeout(ac, 0);
                                return
                            }
                            f()
                        })()
                    }
                }
                if (O.wk) {
                    (function ab() {
                        if (L) {
                            return
                        }
                        if (!/loaded|complete/.test(h.readyState)) {
                            setTimeout(ab, 0);
                            return
                        }
                        f()
                    })()
                }
            }
        }();

    function f() {
        if (L || !document.getElementsByTagName("body")[0]) {
            return
        }
        try {
            var ac, ad = C("span");
            ad.style.display = "none";
            ac = h.getElementsByTagName("body")[0].appendChild(ad);
            ac.parentNode.removeChild(ac);
            ac = null;
            ad = null
        } catch (ae) {
            return
        }
        L = true;
        var aa = X.length;
        for (var ab = 0; ab < aa; ab++) {
            X[ab]()
        }
    }

    function M(aa) {
        if (L) {
            aa()
        } else {
            X[X.length] = aa
        }
    }

    function s(ab) {
        if (typeof Q.addEventListener != D) {
            Q.addEventListener("load", ab, false)
        } else {
            if (typeof h.addEventListener != D) {
                h.addEventListener("load", ab, false)
            } else {
                if (typeof Q.attachEvent != D) {
                    g(Q, "onload", ab)
                } else {
                    if (typeof Q.onload == "function") {
                        var aa = Q.onload;
                        Q.onload = function() {
                            aa();
                            ab()
                        }
                    } else {
                        Q.onload = ab
                    }
                }
            }
        }
    }

    function Y() {
        var aa = h.getElementsByTagName("body")[0];
        var ae = C(r);
        ae.setAttribute("style", "visibility: hidden;");
        ae.setAttribute("type", q);
        var ad = aa.appendChild(ae);
        if (ad) {
            var ac = 0;
            (function ab() {
                if (typeof ad.GetVariable != D) {
                    try {
                        var ag = ad.GetVariable("$version");
                        if (ag) {
                            ag = ag.split(" ")[1].split(",");
                            O.pv = [n(ag[0]), n(ag[1]), n(ag[2])]
                        }
                    } catch (af) {
                        O.pv = [8, 0, 0]
                    }
                } else {
                    if (ac < 10) {
                        ac++;
                        setTimeout(ab, 10);
                        return
                    }
                }
                aa.removeChild(ae);
                ad = null;
                H()
            })()
        } else {
            H()
        }
    }

    function H() {
        var aj = o.length;
        if (aj > 0) {
            for (var ai = 0; ai < aj; ai++) {
                var ab = o[ai].id;
                var ae = o[ai].callbackFn;
                var ad = {
                    success: false,
                    id: ab
                };
                if (O.pv[0] > 0) {
                    var ah = c(ab);
                    if (ah) {
                        if (F(o[ai].swfVersion) && !(O.wk && O.wk < 312)) {
                            w(ab, true);
                            if (ae) {
                                ad.success = true;
                                ad.ref = z(ab);
                                ad.id = ab;
                                ae(ad)
                            }
                        } else {
                            if (o[ai].expressInstall && A()) {
                                var al = {};
                                al.data = o[ai].expressInstall;
                                al.width = ah.getAttribute("width") || "0";
                                al.height = ah.getAttribute("height") || "0";
                                if (ah.getAttribute("class")) {
                                    al.styleclass = ah.getAttribute("class")
                                }
                                if (ah.getAttribute("align")) {
                                    al.align = ah.getAttribute("align")
                                }
                                var ak = {};
                                var aa = ah.getElementsByTagName("param");
                                var af = aa.length;
                                for (var ag = 0; ag < af; ag++) {
                                    if (aa[ag].getAttribute("name").toLowerCase() != "movie") {
                                        ak[aa[ag].getAttribute("name")] = aa[ag].getAttribute("value")
                                    }
                                }
                                R(al, ak, ab, ae)
                            } else {
                                b(ah);
                                if (ae) {
                                    ae(ad)
                                }
                            }
                        }
                    }
                } else {
                    w(ab, true);
                    if (ae) {
                        var ac = z(ab);
                        if (ac && typeof ac.SetVariable != D) {
                            ad.success = true;
                            ad.ref = ac;
                            ad.id = ac.id
                        }
                        ae(ad)
                    }
                }
            }
        }
    }
    X[0] = function() {
        if (V) {
            Y()
        } else {
            H()
        }
    };

    function z(ac) {
        var aa = null,
            ab = c(ac);
        if (ab && ab.nodeName.toUpperCase() === "OBJECT") {
            if (typeof ab.SetVariable !== D) {
                aa = ab
            } else {
                aa = ab.getElementsByTagName(r)[0] || ab
            }
        }
        return aa
    }

    function A() {
        return !a && F("6.0.65") && (O.win || O.mac) && !(O.wk && O.wk < 312)
    }

    function R(ad, ae, aa, ac) {
        var ah = c(aa);
        aa = W(aa);
        a = true;
        E = ac || null;
        B = {
            success: false,
            id: aa
        };
        if (ah) {
            if (ah.nodeName.toUpperCase() == "OBJECT") {
                I = J(ah);
                p = null
            } else {
                I = ah;
                p = aa
            }
            ad.id = S;
            if (typeof ad.width == D || !/%$/.test(ad.width) && n(ad.width) < 310) {
                ad.width = "310"
            }
            if (typeof ad.height == D || !/%$/.test(ad.height) && n(ad.height) < 137) {
                ad.height = "137"
            }
            var ag = O.ie ? "ActiveX" : "PlugIn",
                af = "MMredirectURL=" + encodeURIComponent(Q.location.toString().replace(/&/g, "%26")) + "&MMplayerType=" + ag + "&MMdoctitle=" + encodeURIComponent(h.title.slice(0, 47) + " - Flash Player Installation");
            if (typeof ae.flashvars != D) {
                ae.flashvars += "&" + af
            } else {
                ae.flashvars = af
            }
            if (O.ie && ah.readyState != 4) {
                var ab = C("div");
                aa += "SWFObjectNew";
                ab.setAttribute("id", aa);
                ah.parentNode.insertBefore(ab, ah);
                ah.style.display = "none";
                y(ah)
            }
            u(ad, ae, aa)
        }
    }

    function b(ab) {
        if (O.ie && ab.readyState != 4) {
            ab.style.display = "none";
            var aa = C("div");
            ab.parentNode.insertBefore(aa, ab);
            aa.parentNode.replaceChild(J(ab), aa);
            y(ab)
        } else {
            ab.parentNode.replaceChild(J(ab), ab)
        }
    }

    function J(af) {
        var ae = C("div");
        if (O.win && O.ie) {
            ae.innerHTML = af.innerHTML
        } else {
            var ab = af.getElementsByTagName(r)[0];
            if (ab) {
                var ag = ab.childNodes;
                if (ag) {
                    var aa = ag.length;
                    for (var ad = 0; ad < aa; ad++) {
                        if (!(ag[ad].nodeType == 1 && ag[ad].nodeName == "PARAM") && !(ag[ad].nodeType == 8)) {
                            ae.appendChild(ag[ad].cloneNode(true))
                        }
                    }
                }
            }
        }
        return ae
    }

    function k(aa, ab) {
        var ac = C("div");
        ac.innerHTML = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='" + aa + "'>" + ab + "</object>";
        return ac.firstChild
    }

    function u(ai, ag, ab) {
        var aa, ad = c(ab);
        ab = W(ab);
        if (O.wk && O.wk < 312) {
            return aa
        }
        if (ad) {
            var ac = O.ie ? C("div") : C(r),
                af, ah, ae;
            if (typeof ai.id == D) {
                ai.id = ab
            }
            for (ae in ag) {
                if (ag.hasOwnProperty(ae) && ae.toLowerCase() !== "movie") {
                    e(ac, ae, ag[ae])
                }
            }
            if (O.ie) {
                ac = k(ai.data, ac.innerHTML)
            }
            for (af in ai) {
                if (ai.hasOwnProperty(af)) {
                    ah = af.toLowerCase();
                    if (ah === "styleclass") {
                        ac.setAttribute("class", ai[af])
                    } else {
                        if (ah !== "classid" && ah !== "data") {
                            ac.setAttribute(af, ai[af])
                        }
                    }
                }
            }
            if (O.ie) {
                P[P.length] = ai.id
            } else {
                ac.setAttribute("type", q);
                ac.setAttribute("data", ai.data)
            }
            ad.parentNode.replaceChild(ac, ad);
            aa = ac
        }
        return aa
    }

    function e(ac, aa, ab) {
        var ad = C("param");
        ad.setAttribute("name", aa);
        ad.setAttribute("value", ab);
        ac.appendChild(ad)
    }

    function y(ac) {
        var ab = c(ac);
        if (ab && ab.nodeName.toUpperCase() == "OBJECT") {
            if (O.ie) {
                ab.style.display = "none";
                (function aa() {
                    if (ab.readyState == 4) {
                        for (var ad in ab) {
                            if (typeof ab[ad] == "function") {
                                ab[ad] = null
                            }
                        }
                        ab.parentNode.removeChild(ab)
                    } else {
                        setTimeout(aa, 10)
                    }
                })()
            } else {
                ab.parentNode.removeChild(ab)
            }
        }
    }

    function U(aa) {
        return aa && aa.nodeType && aa.nodeType === 1
    }

    function W(aa) {
        return U(aa) ? aa.id : aa
    }

    function c(ac) {
        if (U(ac)) {
            return ac
        }
        var aa = null;
        try {
            aa = h.getElementById(ac)
        } catch (ab) {}
        return aa
    }

    function C(aa) {
        return h.createElement(aa)
    }

    function n(aa) {
        return parseInt(aa, 10)
    }

    function g(ac, aa, ab) {
        ac.attachEvent(aa, ab);
        K[K.length] = [ac, aa, ab]
    }

    function F(ac) {
        ac += "";
        var ab = O.pv,
            aa = ac.split(".");
        aa[0] = n(aa[0]);
        aa[1] = n(aa[1]) || 0;
        aa[2] = n(aa[2]) || 0;
        return ab[0] > aa[0] || ab[0] == aa[0] && ab[1] > aa[1] || ab[0] == aa[0] && ab[1] == aa[1] && ab[2] >= aa[2] ? true : false
    }

    function v(af, ab, ag, ae) {
        var ad = h.getElementsByTagName("head")[0];
        if (!ad) {
            return
        }
        var aa = typeof ag == "string" ? ag : "screen";
        if (ae) {
            m = null;
            G = null
        }
        if (!m || G != aa) {
            var ac = C("style");
            ac.setAttribute("type", "text/css");
            ac.setAttribute("media", aa);
            m = ad.appendChild(ac);
            if (O.ie && typeof h.styleSheets != D && h.styleSheets.length > 0) {
                m = h.styleSheets[h.styleSheets.length - 1]
            }
            G = aa
        }
        if (m) {
            if (typeof m.addRule != D) {
                m.addRule(af, ab)
            } else {
                if (typeof h.createTextNode != D) {
                    m.appendChild(h.createTextNode(af + " {" + ab + "}"))
                }
            }
        }
    }

    function w(ad, aa) {
        if (!j) {
            return
        }
        var ab = aa ? "visible" : "hidden",
            ac = c(ad);
        if (L && ac) {
            ac.style.visibility = ab
        } else {
            if (typeof ad === "string") {
                v("#" + ad, "visibility:" + ab)
            }
        }
    }

    function N(ab) {
        var ac = /[\\\"<>\.;]/;
        var aa = ac.exec(ab) != null;
        return aa && typeof encodeURIComponent != D ? encodeURIComponent(ab) : ab
    }
    var d = function() {
        if (O.ie) {
            window.attachEvent("onunload", function() {
                var af = K.length;
                for (var ae = 0; ae < af; ae++) {
                    K[ae][0].detachEvent(K[ae][1], K[ae][2])
                }
                var ac = P.length;
                for (var ad = 0; ad < ac; ad++) {
                    y(P[ad])
                }
                for (var ab in O) {
                    O[ab] = null
                }
                O = null;
                for (var aa in swfobject) {
                    swfobject[aa] = null
                }
                swfobject = null
            })
        }
    }();
    return {
        registerObject: function(ae, aa, ad, ac) {
            if (O.w3 && ae && aa) {
                var ab = {};
                ab.id = ae;
                ab.swfVersion = aa;
                ab.expressInstall = ad;
                ab.callbackFn = ac;
                o[o.length] = ab;
                w(ae, false)
            } else {
                if (ac) {
                    ac({
                        success: false,
                        id: ae
                    })
                }
            }
        },
        getObjectById: function(aa) {
            if (O.w3) {
                return z(aa)
            }
        },
        embedSWF: function(af, al, ai, ak, ab, ae, ad, ah, aj, ag) {
            var ac = W(al),
                aa = {
                    success: false,
                    id: ac
                };
            if (O.w3 && !(O.wk && O.wk < 312) && af && al && ai && ak && ab) {
                w(ac, false);
                M(function() {
                    ai += "";
                    ak += "";
                    var an = {};
                    if (aj && typeof aj === r) {
                        for (var aq in aj) {
                            an[aq] = aj[aq]
                        }
                    }
                    an.data = af;
                    an.width = ai;
                    an.height = ak;
                    var ar = {};
                    if (ah && typeof ah === r) {
                        for (var ao in ah) {
                            ar[ao] = ah[ao]
                        }
                    }
                    if (ad && typeof ad === r) {
                        for (var am in ad) {
                            if (ad.hasOwnProperty(am)) {
                                var ap = l ? encodeURIComponent(am) : am,
                                    at = l ? encodeURIComponent(ad[am]) : ad[am];
                                if (typeof ar.flashvars != D) {
                                    ar.flashvars += "&" + ap + "=" + at
                                } else {
                                    ar.flashvars = ap + "=" + at
                                }
                            }
                        }
                    }
                    if (F(ab)) {
                        var au = u(an, ar, al);
                        if (an.id == ac) {
                            w(ac, true)
                        }
                        aa.success = true;
                        aa.ref = au;
                        aa.id = au.id
                    } else {
                        if (ae && A()) {
                            an.data = ae;
                            R(an, ar, al, ag);
                            return
                        } else {
                            w(ac, true)
                        }
                    }
                    if (ag) {
                        ag(aa)
                    }
                })
            } else {
                if (ag) {
                    ag(aa)
                }
            }
        },
        switchOffAutoHideShow: function() {
            j = false
        },
        enableUriEncoding: function(aa) {
            l = typeof aa === D ? true : aa
        },
        ua: O,
        getFlashPlayerVersion: function() {
            return {
                major: O.pv[0],
                minor: O.pv[1],
                release: O.pv[2]
            }
        },
        hasFlashPlayerVersion: F,
        createSWF: function(ac, ab, aa) {
            if (O.w3) {
                return u(ac, ab, aa)
            } else {
                return undefined
            }
        },
        showExpressInstall: function(ac, ad, aa, ab) {
            if (O.w3 && A()) {
                R(ac, ad, aa, ab)
            }
        },
        removeSWF: function(aa) {
            if (O.w3) {
                y(aa)
            }
        },
        createCSS: function(ad, ac, ab, aa) {
            if (O.w3) {
                v(ad, ac, ab, aa)
            }
        },
        addDomLoadEvent: M,
        addLoadEvent: s,
        getQueryParamValue: function(ad) {
            var ac = h.location.search || h.location.hash;
            if (ac) {
                if (/\?/.test(ac)) {
                    ac = ac.split("?")[1]
                }
                if (ad == null) {
                    return N(ac)
                }
                var ab = ac.split("&");
                for (var aa = 0; aa < ab.length; aa++) {
                    if (ab[aa].substring(0, ab[aa].indexOf("=")) == ad) {
                        return N(ab[aa].substring(ab[aa].indexOf("=") + 1))
                    }
                }
            }
            return ""
        },
        expressInstallCallback: function() {
            if (a) {
                var aa = c(S);
                if (aa && I) {
                    aa.parentNode.replaceChild(I, aa);
                    if (p) {
                        w(p, true);
                        if (O.ie) {
                            I.style.display = "block"
                        }
                    }
                    if (E) {
                        E(B)
                    }
                }
                a = false
            }
        },
        version: "2.3"
    }
}();
mat4.extractEulerAngles = function(out, m) {
    out[0] = Math.atan2(m[6], m[10]);
    var c2 = Math.sqrt(m[0] * m[0] + m[1] * m[1]);
    out[1] = Math.atan2(-m[2], c2);
    var s1 = Math.sin(out[0]),
        c1 = Math.cos(out[0]);
    out[2] = Math.atan2(s1 * m[8] - c1 * m[4], c1 * m[5] - s1 * m[9]);
    return out
};
mat4.invert2 = function(out, m) {
    var det = m[0] * (m[5] * m[10] - m[6] * m[9]) + m[4] * (m[2] * m[9] - m[1] * m[10]) + m[8] * (m[1] * m[6] - m[2] * m[5]);
    if (det == 0) return null;
    var invDet = 1 / det;
    out[0] = (m[5] * m[10] - m[6] * m[9]) * invDet;
    out[1] = (m[9] * m[2] - m[10] * m[1]) * invDet;
    out[2] = (m[1] * m[6] - m[2] * m[5]) * invDet;
    out[4] = (m[6] * m[8] - m[4] * m[10]) * invDet;
    out[5] = (m[10] * m[0] - m[8] * m[2]) * invDet;
    out[6] = (m[2] * m[4] - m[0] * m[6]) * invDet;
    out[8] = (m[4] * m[9] - m[5] * m[8]) * invDet;
    out[9] = (m[8] * m[1] - m[9] * m[0]) * invDet;
    out[10] = (m[0] * m[5] - m[1] * m[4]) * invDet;
    out[3] = out[0] * -m[3] + out[1] * -m[7] + out[2] * -m[11];
    out[7] = out[4] * -m[3] + out[5] * -m[7] + out[6] * -m[11];
    out[11] = out[8] * -m[3] + out[9] * -m[7] + out[10] * -m[11];
    out[12] = out[13] = out[14] = 0;
    out[15] = 1;
    return out
};
window.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback, element) {
        window.setTimeout(callback, 1e3 / 60)
    }
}();
jQuery.support.cors = true;
if ($.ajaxTransport) {
    $.ajaxSetup({
        flatOptions: {
            renderer: true
        }
    });
    $.ajaxTransport("+binary", function(options, originalOptions, jqXHR) {
        if (window.FormData && (options.dataType && options.dataType == "binary" || options.data && (window.ArrayBuffer && options.data instanceof ArrayBuffer || window.Blob && options.data instanceof Blob))) {
            return {
                send: function(_, callback) {
                    var xhr = new XMLHttpRequest,
                        url = options.url,
                        type = options.type,
                        dataType = options.responseType || "blob",
                        data = options.data || null;
                    if (options.renderer) {
                        xhr.addEventListener("progress", function(event) {
                            if (event.lengthComputable) {
                                if (!options.renderer.downloads[this.responseURL]) {
                                    options.renderer.downloads[this.responseURL] = {
                                        loaded: event.loaded,
                                        total: event.total
                                    }
                                } else {
                                    options.renderer.downloads[this.responseURL].loaded = event.loaded
                                }
                                options.renderer.updateProgress()
                            }
                        })
                    }
                    xhr.addEventListener("load", function() {
                        if (options.renderer) {
                            delete options.renderer.downloads[this.responseURL];
                            options.renderer.updateProgress()
                        }
                        var data = {};
                        data[options.dataType] = xhr.response;
                        callback(xhr.status, xhr.statusText, data, xhr.getAllResponseHeaders())
                    });
                    xhr.open(type, url, true);
                    xhr.responseType = dataType;
                    xhr.send(data)
                },
                abort: function() {
                    jqXHR.abort()
                }
            }
        }
    })
} else {
    (function() {
        var httpData = $.httpData;
        $.httpData = function(xhr, type, s) {
            if (type == "binary") {
                return xhr.response
            } else {
                return httpData(xhr, type, s)
            }
        }
    })();
    $.ajaxSetup({
        beforeSend: function(xhr, options) {
            if (options.dataType == "binary") {
                xhr.responseType = options.responseType || "arraybuffer";
                xhr.addEventListener("progress", function(event) {
                    if (!options.renderer) return;
                    if (event.lengthComputable) {
                        if (!options.renderer.downloads[this.responseURL]) {
                            options.renderer.downloads[this.responseURL] = {
                                loaded: event.loaded,
                                total: event.total
                            }
                        } else {
                            options.renderer.downloads[this.responseURL].loaded = event.loaded
                        }
                        options.renderer.updateProgress()
                    }
                }, false);
                xhr.addEventListener("load", function() {
                    if (!options.renderer) return;
                    delete options.renderer.downloads[this.responseURL];
                    options.renderer.updateProgress()
                }, false)
            }
        }
    })
}
Math.randomInt = function() {
    return Math.randomInt || function(min, max) {
        return Math.floor(Math.random() * (max - min)) + min
    }
}();
if (typeof Object.create != "function") {
    Object.create = function() {
        var obj = function() {};
        return function(prototype) {
            if (arguments.length > 1) {
                throw Error("Second argument not supported")
            }
            if (typeof prototype != "object") {
                throw TypeError("Argument must be an object")
            }
            obj.prototype = prototype;
            var result = new obj;
            obj.prototype = null;
            return result
        }
    }()
}
window.console = window.console || {
    log: function() {},
    error: function() {},
    warn: function() {}
};

function ZamModelViewer(opts) {
    var self = this;
    if (!opts.type || !self.validTypes[opts.type]) throw "Viewer error: Bad viewer type given";
    if (!opts.container) throw "Viewer error: Bad container given";
    if (!opts.aspect) throw "Viewer error: Bad aspect ratio given";
    if (!opts.contentPath) throw "Viewer error: No content path given";
    self.type = opts.type;
    self.container = opts.container;
    self.aspect = parseFloat(opts.aspect);
    self.renderer = null;
    self.options = opts;
    var width = parseInt(self.container.width());
    var height = Math.round(width / self.aspect);
    self.init(width, height)
}
ZamModelViewer.WEBGL = 1;
ZamModelViewer.FLASH = 2;
ZamModelViewer.TOR = 1;
ZamModelViewer.WOW = 2;
ZamModelViewer.LOL = 3;
ZamModelViewer.GW2 = 4;
ZamModelViewer.WILDSTAR = 5;
ZamModelViewer.HEROES = 6;
ZamModelViewer.DESTINY = 7;
ZamModelViewer.Models = {};
ZamModelViewer.prototype = {
    validTypes: {
        2: "Wowhead",
        3: "LolKing",
        6: "HeroKing",
        7: "DestinyDB"
    },
    destroy: function() {
        var self = this;
        if (self.renderer) self.renderer.destroy();
        self.options = null;
        self.container = null
    },
    init: function(width, height) {
        var self = this,
            glSupport = false;
        if (typeof window["Uint8Array"] !== undefined && typeof window["DataView"] !== undefined) {
            try {
                var canvas = document.createElement("canvas");
                var ctx = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
                if (ctx) glSupport = true
            } catch (e) {}
        }
        if (!self.options.flash && glSupport) {
            self.mode = ZamModelViewer.WEBGL;
            self.renderer = new ZamModelViewer.WebGL(self)
        } else {
            self.mode = ZamModelViewer.FLASH;
            self.renderer = new ZamModelViewer.Flash(self)
        }
        self.renderer.resize(width, height);
        self.renderer.init()
    },
    method: function(name, params) {
        var self = this;
        if (params === undefined) params = [];
        if (self.renderer) return self.renderer.method(name, [].concat(params));
        return null
    },
    option: function(key, val) {
        var self = this;
        if (val !== undefined) {
            self.options[key] = val
        }
        return self.options[key]
    }
};
ZamModelViewer.isFullscreen = function() {
    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) return true;
    return false
};
ZamModelViewer.requestFullscreen = function(e) {
    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) return;
    if (e.requestFullscreen) {
        e.requestFullscreen()
    } else if (e.webkitRequestFullscreen) {
        e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
    } else if (e.mozRequestFullScreen) {
        e.mozRequestFullScreen()
    } else if (e.msRequestFullscreen) {
        e.msRequestFullscreen()
    }
};
ZamModelViewer.exitFullscreen = function() {
    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) return;
    if (document.exitFullscreen) {
        document.exitFullscreen()
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
    }
};
ZamModelViewer.DataView = function(buffer) {
    this.buffer = new DataView(buffer);
    this.position = 0
};
ZamModelViewer.DataView.prototype = {
    getBool: function() {
        var v = this.buffer.getUint8(this.position) != 0;
        this.position += 1;
        return v
    },
    getUint8: function() {
        var v = this.buffer.getUint8(this.position);
        this.position += 1;
        return v
    },
    getInt8: function() {
        var v = this.buffer.getInt8(this.position);
        this.position += 1;
        return v
    },
    getUint16: function() {
        var v = this.buffer.getUint16(this.position, true);
        this.position += 2;
        return v
    },
    getInt16: function() {
        var v = this.buffer.getInt16(this.position, true);
        this.position += 2;
        return v
    },
    getUint32: function() {
        var v = this.buffer.getUint32(this.position, true);
        this.position += 4;
        return v
    },
    getInt32: function() {
        var v = this.buffer.getInt32(this.position, true);
        this.position += 4;
        return v
    },
    getFloat: function() {
        var v = this.buffer.getFloat32(this.position, true);
        this.position += 4;
        return v
    },
    getString: function(len) {
        if (len === undefined) len = this.getUint16();
        var str = "";
        for (var i = 0; i < len; ++i) {
            str += String.fromCharCode(this.getUint8())
        }
        return str
    },
    setBool: function(v) {
        this.buffer.setUint8(this.position, v ? 1 : 0);
        this.position += 1
    },
    setUint8: function(v) {
        this.buffer.setUint8(this.position, v);
        this.position += 1
    },
    setInt8: function(v) {
        this.buffer.setInt8(this.position, v);
        this.position += 1
    },
    setUint16: function(v) {
        this.buffer.setUint16(this.position, v, true);
        this.position += 2
    },
    setInt16: function(v) {
        this.buffer.setInt16(this.position, v, true);
        this.position += 2
    },
    setUint32: function(v) {
        this.buffer.setUint32(this.position, v, true);
        this.position += 4
    },
    setInt32: function(v) {
        this.buffer.setInt32(this.position, v, true);
        this.position += 4
    },
    setFloat: function(v) {
        this.buffer.setFloat32(this.position, v, true);
        this.position += 4
    }
};
ZamModelViewer.WebGL = function(viewer) {
    var self = this;
    self.viewer = viewer;
    self.options = viewer.options;
    self.downloads = {};
    self.context = null;
    self.width = 0;
    self.height = 0;
    self.time = 0;
    self.delta = 0;
    self.models = [];
    self.azimuth = Math.PI * 1.5;
    self.zenith = Math.PI / 2;
    self.distance = 15;
    self.fov = 30;
    self.translation = [0, 0, 0];
    self.target = [0, 0, 0];
    self.eye = [0, 0, 0];
    self.up = [0, 0, 1];
    self.lookDir = vec3.create();
    self.fullscreen = false;
    self.projMatrix = mat4.create();
    self.viewMatrix = mat4.create();
    self.panningMatrix = mat4.create();
    self.viewOffset = vec3.create();
    if (!ZamModelViewer.WebGL.addedCss) {
        ZamModelViewer.WebGL.addedCss = true;
        $("head").append('<link rel="stylesheet" href="//cdn.zamimg.com/zmv/viewer.css" type="text/css" />')
    }
};
ZamModelViewer.WebGL.prototype = {
    updateProgress: function() {
        var self = this,
            totalSize = 0,
            totalLoaded = 0;
        for (var url in self.downloads) {
            totalSize += self.downloads[url].total;
            totalLoaded += self.downloads[url].loaded
        }
        if (totalSize <= 0) {
            if (self.progressShown) {
                self.progressBg.hide();
                self.progressBar.hide();
                self.progressShown = false
            }
        } else {
            if (!self.progressShown) {
                self.progressBg.show();
                self.progressBar.show();
                self.progressShown = true
            }
            var pct = totalLoaded / totalSize;
            self.progressBar.width(Math.round(self.width * pct) + "px")
        }
    },
    destroy: function() {
        var self = this;
        self.stop = true;
        if (self.canvas) {
            self.canvas.detach();
            self.progressBg.detach();
            self.progressBar.detach();
            self.canvas.off("mousedown touchstart", self.onMouseDown).off("DOMMouseScroll", self.onMouseScroll).off("mousewheel", self.onMouseWheel).off("contextmenu", self.onContextMenu);
            $(document).off("mouseup touchend", self.onMouseUp).off("mousemove touchmove", self.onMouseMove);
            self.canvas = self.progressBg = self.progressBar = null
        }
        if (self.context) {
            var gl = self.context;
            if (self.bgTexture) gl.deleteTexture(self.bgTexture);
            self.bgTexture = null;
            if (self.program) gl.deleteProgram(self.program);
            self.program = null;
            if (self.vb) gl.deleteBuffer(self.vb);
            if (self.vs) gl.deleteShader(self.vs);
            if (self.fs) gl.deleteShader(self.fs);
            self.vb = self.vs = self.fs = null
        }
        if (self.bgImg) self.bgImg = null;
        for (var i = 0; i < self.models.length; ++i) {
            self.models[i].destroy();
            self.models[i] = null
        }
        self.models = []
    },
    method: function(name, params) {
        var self = this;
        if (self.models.length > 0 && self.models[0].external && self.models[0].external[name]) {
            return self.models[0].external[name].apply(self.models[0], params)
        } else {
            return null
        }
    },
    getTime: function() {
        if (window.performance && window.performance.now) return window.performance.now();
        else return Date.now()
    },
    draw: function() {
        var self = this,
            gl = self.context,
            i;
        var time = self.getTime();
        self.delta = (time - self.time) * .001;
        self.time = time;
        self.updateCamera();
        gl.viewport(0, 0, self.width, self.height);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        if (self.bgTexture && self.program) {
            gl.useProgram(self.program);
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, self.bgTexture);
            gl.uniform1i(self.uTexture, 0);
            gl.bindBuffer(gl.ARRAY_BUFFER, self.vb);
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
            gl.enableVertexAttribArray(self.aPosition);
            gl.vertexAttribPointer(self.aPosition, 2, gl.FLOAT, false, 16, 0);
            gl.enableVertexAttribArray(self.aTexCoord);
            gl.vertexAttribPointer(self.aTexCoord, 2, gl.FLOAT, false, 16, 8);
            gl.depthMask(false);
            gl.disable(gl.CULL_FACE);
            gl.blendFunc(gl.ONE, gl.ZERO);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            gl.enable(gl.CULL_FACE);
            gl.depthMask(true);
            gl.disableVertexAttribArray(self.aPosition);
            gl.disableVertexAttribArray(self.aTexCoord)
        }
        for (i = 0; i < self.models.length; ++i) self.models[i].draw()
    },
    updateCamera: function() {
        var self = this;
        var d = self.distance,
            a = self.azimuth,
            z = self.zenith;
        if (self.up[2] == 1) {
            self.eye[0] = -d * Math.sin(z) * Math.cos(a) + self.target[0];
            self.eye[1] = -d * Math.sin(z) * Math.sin(a) + self.target[1];
            self.eye[2] = -d * Math.cos(z) + self.target[2]
        } else {
            self.eye[0] = -d * Math.sin(z) * Math.cos(a) + self.target[0];
            self.eye[1] = -d * Math.cos(z) + self.target[1];
            self.eye[2] = -d * Math.sin(z) * Math.sin(a) + self.target[2]
        }
        vec3.subtract(self.lookDir, self.target, self.eye);
        vec3.normalize(self.lookDir, self.lookDir);
        mat4.lookAt(self.viewMatrix, self.eye, self.target, self.up);
        mat4.identity(self.panningMatrix);
        if (self.up[2] == 1) {
            vec3.set(self.viewOffset, self.translation[0], -self.translation[1], 0)
        } else {
            vec3.set(self.viewOffset, self.translation[0], 0, self.translation[1])
        }
        mat4.translate(self.panningMatrix, self.panningMatrix, self.viewOffset);
        mat4.multiply(self.viewMatrix, self.panningMatrix, self.viewMatrix)
    },
    init: function() {
        var self = this,
            gl = self.context,
            i;
        mat4.perspective(self.projMatrix, self.fov * .0174532925, self.viewer.aspect, .1, 5e3);
        self.updateCamera();
        gl.clearColor(0, 0, 0, 1);
        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.enable(gl.BLEND);
        if ((self.options.models || self.options.items) && ZamModelViewer.Models[self.viewer.type]) {
            var Model = ZamModelViewer.Models[self.viewer.type];
            var models = [].concat(self.options.models);
            if (models.length > 0) {
                for (i = 0; i < models.length; ++i) {
                    self.models.push(new Model(self, self.viewer, models[i], i))
                }
            } else if (self.viewer.type == ZamModelViewer.DESTINY && self.options.items) {
                self.models.push(new Model(self, self.viewer))
            }
        }

        function tick() {
            if (self.stop) return;
            requestAnimFrame(tick);
            self.draw()
        }
        tick()
    },
    resize: function(width, height) {
        var self = this;
        if (self.width === width) return;
        if (!self.fullscreen) {
            self.viewer.container.css({
                height: height + "px",
                position: "relative"
            })
        }
        self.width = width;
        self.height = height;
        if (!self.canvas) {
            self.canvas = $("<canvas/>");
            self.canvas.attr({
                width: width,
                height: height
            });
            self.viewer.container.append(self.canvas);
            self.context = self.canvas[0].getContext("webgl") || self.canvas[0].getContext("experimental-webgl");
            self.progressBg = $("<div/>", {
                css: {
                    display: "none",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "10px",
                    backgroundColor: "#000"
                }
            });
            self.progressBar = $("<div/>", {
                css: {
                    display: "none",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: 0,
                    height: "10px",
                    backgroundColor: "#ccc"
                }
            });
            self.viewer.container.append(self.progressBg);
            self.viewer.container.append(self.progressBar);
            if (!self.context) {
                alert("No WebGL support, sorry! You should totally use Chrome.");
                self.canvas.detach();
                self.canvas = null;
                return
            }
            self.toggleSize = function(event) {
                if (!self.resized) {
                    self.restoreWidth = self.width;
                    self.restoreHeight = self.height;

                    self.resized = true;
                    self.resize(640, 480);
                    mat4.perspective(self.projMatrix, self.fov * .0174532925, 640 / 480, .1, 5e3)
                } else {
                    self.resized = false;
                    self.resize(self.restoreWidth, self.restoreHeight);
                    mat4.perspective(self.projMatrix, self.fov * .0174532925, self.viewer.aspect, .1, 5e3)
                }
            };
            self.onDoubleClick = function(event) {
                if (ZamModelViewer.isFullscreen()) {
                    ZamModelViewer.exitFullscreen()
                } else {
                    ZamModelViewer.requestFullscreen(self.canvas[0])
                }
            };
            self.onFullscreen = function(event) {
                if (!self.fullscreen && ZamModelViewer.isFullscreen()) {
                    self.restoreWidth = self.width;
                    self.restoreHeight = self.height;
                    self.fullscreen = true;
                    var $window = $(window);
                    self.resize($window.width(), $window.height());
                    mat4.perspective(self.projMatrix, self.fov * .0174532925, $window.width() / $window.height(), .1, 5e3)
                } else if (self.fullscreen && !ZamModelViewer.isFullscreen()) {
                    self.fullscreen = false;
                    self.resize(self.restoreWidth, self.restoreHeight);
                    mat4.perspective(self.projMatrix, self.fov * .0174532925, self.viewer.aspect, .1, 5e3)
                }
            };
            self.onMouseDown = function(event) {
                if (event.which == 3 || event.ctrlKey) {
                    self.rightMouseDown = true
                } else {
                    self.mouseDown = true
                }
                if (event.type == "touchstart") {
                    self.mouseX = event.originalEvent.touches[0].clientX;
                    self.mouseY = event.originalEvent.touches[0].clientY
                } else {
                    self.mouseX = event.clientX;
                    self.mouseY = event.clientY
                }
                $("body").addClass("unselectable")
            };
            self.onMouseScroll = function(event) {
                if (event.originalEvent.detail > 0) {
                    self.distance *= 1.25
                } else {
                    self.distance *= .75
                }
                event.preventDefault();
                return false
            };
            self.onMouseWheel = function(event) {
                if (event.originalEvent.wheelDelta < 0) {
                    self.distance *= 1.25
                } else {
                    self.distance *= .75
                }
                event.preventDefault();
                return false
            };
            self.onMouseUp = function(event) {
                if (self.mouseDown || self.rightMouseDown) {
                    $("body").removeClass("unselectable");
                    self.mouseDown = false;
                    self.rightMouseDown = false
                }
            };
            self.onMouseMove = function(event) {
                if (!self.mouseDown && !self.rightMouseDown || self.mouseX === undefined) return;
                var x, y;
                if (event.type == "touchmove") {
                    event.preventDefault();
                    x = event.originalEvent.touches[0].clientX;
                    y = event.originalEvent.touches[0].clientY
                } else {
                    x = event.clientX;
                    y = event.clientY
                }
                var dx = (x - self.mouseX) / self.width * Math.PI * 2;
                var dy = (y - self.mouseY) / self.width * Math.PI * 2;
                if (self.mouseDown) {
                    if (self.up[2] == 1) {
                        self.azimuth -= dx
                    } else {
                        self.azimuth += dx
                    }
                    self.zenith += dy;
                    var pi2 = Math.PI * 2;
                    while (self.azimuth < 0) self.azimuth += pi2;
                    while (self.azimuth > pi2) self.azimuth -= pi2;
                    if (self.zenith < 1e-4) self.zenith = 1e-4;
                    if (self.zenith >= Math.PI) self.zenith = Math.PI - 1e-4
                } else {
                    self.translation[0] += dx;
                    self.translation[1] += dy
                }
                self.mouseX = x;
                self.mouseY = y
            };
            self.onContextMenu = function(event) {
                return false
            };
            self.canvas.on("mousedown touchstart", self.onMouseDown).on("DOMMouseScroll", self.onMouseScroll).on("mousewheel", self.onMouseWheel).on("dblclick", self.onDoubleClick).on("contextmenu", self.onContextMenu);
            $(window).on("resize", self.onFullscreen);
            $(document).on("mouseup touchend", self.onMouseUp).on("mousemove touchmove", self.onMouseMove)
        } else {
            self.canvas.attr({
                width: width,
                height: height
            });
            self.context.viewport(0, 0, self.width, self.height)
        }
        if (self.options.background) {
            self.loadBackground()
        }
    },
    loadBackground: function() {
        var self = this,
            gl = self.context;
        var initVb = function() {
            self.vb = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, self.vb);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(16), gl.DYNAMIC_DRAW);
            var vs = self.compileShader(gl.VERTEX_SHADER, self.vertShader);
            var fs = self.compileShader(gl.FRAGMENT_SHADER, self.fragShader);
            var program = gl.createProgram();
            gl.attachShader(program, vs);
            gl.attachShader(program, fs);
            gl.linkProgram(program);
            if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
                console.error("Error linking shaders");
                return
            }
            self.vs = vs;
            self.fs = fs;
            self.program = program;
            self.uTexture = gl.getUniformLocation(program, "uTexture");
            self.aPosition = gl.getAttribLocation(program, "aPosition");
            self.aTexCoord = gl.getAttribLocation(program, "aTexCoord")
        };
        var updateVb = function() {
            var u = self.width / self.bgImg.width,
                v = self.height / self.bgImg.height;
            var vbData = [-1, -1, 0, v, 1, -1, u, v, -1, 1, 0, 0, 1, 1, u, 0];
            gl.bindBuffer(gl.ARRAY_BUFFER, self.vb);
            gl.bufferSubData(gl.ARRAY_BUFFER, 0, new Float32Array(vbData))
        };
        if (!self.bgImg) {
            self.bgImg = new Image;
            self.bgImg.crossOrigin = "";
            self.bgImg.onload = function() {
                self.bgImg.loaded = true;
                self.bgTexture = gl.createTexture();
                gl.bindTexture(gl.TEXTURE_2D, self.bgTexture);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, self.bgImg);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                if (!self.vb) initVb();
                updateVb()
            };
            self.bgImg.onerror = function() {
                self.bgImg = null
            };
            self.bgImg.src = self.options.contentPath + self.options.background
        } else if (self.bgImg.loaded) {
            if (!self.vb) initVb();
            updateVb()
        }
    },
    vertShader: "    attribute vec2 aPosition;    attribute vec2 aTexCoord;        varying vec2 vTexCoord;        void main(void) {        vTexCoord = aTexCoord;        gl_Position = vec4(aPosition, 0, 1);    }    ",
    fragShader: "    precision mediump float;    varying vec2 vTexCoord;        uniform sampler2D uTexture;        void main(void) {        gl_FragColor = texture2D(uTexture, vTexCoord);    }    ",
    compileShader: function(type, source) {
        var self = this,
            gl = self.context;
        var shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            throw "Shader compile error: " + gl.getShaderInfoLog(shader)
        }
        return shader
    }
};
ZamModelViewer.Flash = function(viewer) {
    var self = this;
    self.viewer = viewer;
    self.options = viewer.options;
    self.width = 0;
    self.height = 0;
    self.div = null;
    self.object = null;
    self.divId = "sjfdlkjsfesl32"
};
ZamModelViewer.Flash.prototype = {
    destroy: function() {
        var self = this;
        if (self.div) {
            self.div.detach();
            self.div = null
        }
        if (self.object) {
            self.object.detach();
            self.object = null
        }
    },
    method: function(name, params) {
        var self = this,
            object = $("#" + self.divId);
        if (object.length > 0) {
            return object[0][name].apply(object[0], params)
        } else {
            return null
        }
    },
    resize: function(width, height) {
        var self = this;
        if (self.width === width) return;
        self.viewer.container.css({
            height: height + "px"
        });
        self.width = width;
        self.height = height;
        if (!self.div) {
            self.div = $("<div/>", {
                id: self.divId
            });
            self.viewer.container.append(self.div)
        }
    },
    init: function() {
        var self = this,
            opts = self.options;
        var model = opts.models;
        var flashVars = {
            modelType: model.type,
            model: model.id,
            container: self.divId,
            contentPath: opts.contentPath
        };
        var params = {
            quality: "high",
            allowscriptaccess: "always",
            allowfullscreen: true,
            menu: false,
            bgcolor: "#181818",
            wmode: "direct"
        };
        if (opts.background) flashVars.background = opts.background;
        if (opts.cls !== undefined) flashVars.cls = opts.cls;
        if (opts.hd !== undefined) flashVars.hd = opts.hd;
        if (opts.sk !== undefined) flashVars.sk = opts.sk;
        if (opts.ha !== undefined) flashVars.ha = opts.ha;
        if (opts.hc !== undefined) flashVars.hc = opts.hc;
        if (opts.fa !== undefined) flashVars.fa = opts.fa;
        if (opts.fc !== undefined) flashVars.fc = opts.fc;
        if (opts.fh !== undefined) flashVars.fh = opts.fh;
        if (opts.items) {
            var items = opts.items;
            var equipList = [];
            if ($.isArray(items)) {
                for (var i = 0; i < items.length; ++i) {
                    equipList.push(items[i][0]);
                    equipList.push(items[i][1])
                }
            } else {
                for (var slot in items) {
                    equipList.push(slot);
                    equipList.push(items[slot])
                }
            }
            flashVars.equipList = equipList.join(",")
        }
        swfobject.embedSWF(flashVars.contentPath + "ZAMviewerfp11.swf", self.divId, self.width, self.height, "11.0.0", undefined, flashVars, params, {});
        self.object = $("#" + self.divId);
        if (!self.object.length) self.object = null
    }
};
ZamModelViewer.Wow = function() {};
ZamModelViewer.Wow.Model = function(renderer, viewer, model, index, skipLoad) {
    var self = this;
    self.Texture = ZamModelViewer.Wow.Texture;
    self.renderer = renderer;
    self.viewer = viewer;
    self.model = model;
    self.modelIndex = index;
    self.modelPath = null;
    self.loaded = false;
    self.opts = self.viewer.options;
    self.mount = null;
    self.isMount = self.opts.mount && self.opts.mount.type == ZamModelViewer.Wow.Types.NPC && self.opts.mount.id == self.model.id;
    if (self.model.type == ZamModelViewer.Wow.Types.CHARACTER) {
        if (self.opts.mount && self.opts.mount.type == ZamModelViewer.Wow.Types.NPC && self.opts.mount.id) {
            self.opts.mount.parent = self;
            self.mount = new ZamModelViewer.Wow.Model(renderer, viewer, self.opts.mount, 0)
        }
    }
    self.race = -1;
    self.gender = -1;
    self.class = self.opts.cls ? parseInt(self.opts.cls) : -1;
    self.meta = null;
    self.skinIndex = 0;
    self.hairIndex = 0;
    self.hairColorIndex = 0;
    self.faceIndex = 0;
    self.faceFeatureIndex = 0;
    self.faceColorIndex = 0;
    self.hairVis = true;
    self.faceVis = true;
    self.hairMesh = null;
    self.parent = self.model.parent || null;
    self.items = {};
    self.needsCompositing = false;
    self.textureOverrides = {};
    self.compositeImage = null;
    self.compositeTexture = null;
    self.npcTexture = null;
    self.specialTextures = {};
    self.bakedTextures = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    self.isHD = false;
    self.numGeosets = 21;
    self.geosets = new Array(self.numGeosets);
    self.time = 0;
    self.frame = 0;
    self.animationList = null;
    self.currentAnimation = null;
    self.animStartTime = 0;
    self.slotAttachments = {};
    self.matrix = mat4.create();
    self.vbData = null;
    self.vb = null;
    self.ib = null;
    self.shaderReady = false;
    self.vs = null;
    self.fs = null;
    self.program = null;
    self.uniforms = null;
    self.attribs = null;
    self.ambientColor = [.35, .35, .35, 1];
    self.primaryColor = [1, 1, 1, 1];
    self.secondaryColor = [.35, .35, .35, 1];
    self.lightDir1 = vec3.create();
    self.lightDir2 = vec3.create();
    self.lightDir3 = vec3.create();
    vec3.normalize(self.lightDir1, [5, -3, 3]);
    vec3.normalize(self.lightDir2, [5, 5, 5]);
    vec3.normalize(self.lightDir3, [-5, -5, -5]);
    self.boundsSet = false;
    self.animBounds = false;
    self.boundsMin = [0, 0, 0];
    self.boundsMax = [0, 0, 0];
    self.boundsCenter = [0, 0, 0];
    self.boundsSize = [0, 0, 0];
    self.vertices = null;
    self.indices = null;
    self.animations = null;
    self.animLookup = null;
    self.bones = null;
    self.boneLookup = null;
    self.keyBoneLookup = null;
    self.meshes = null;
    self.texUnits = null;
    self.texUnitLookup = null;
    self.renderFlags = null;
    self.materials = null;
    self.materialLookup = null;
    self.textureAnims = null;
    self.textureAnimLookup = null;
    self.textureReplacements = null;
    self.attachments = null;
    self.attachmentLookup = null;
    self.colors = null;
    self.alphas = null;
    self.alphaLookup = null;
    self.particleEmitters = null;
    self.ribbonEmitters = null;
    self.skins = null;
    self.faces = null;
    self.hairs = null;
    self.tmpMat = mat4.create();
    self.tmpVec = vec3.create();
    self.tmpVec3 = vec3.create();
    self.tmpVec4 = vec4.create();
    self.mountMat = mat4.create();
    if (!skipLoad) {
        self.load()
    }
};
ZamModelViewer.Models[ZamModelViewer.WOW] = ZamModelViewer.Wow.Model;
ZamModelViewer.Wow.Model.prototype = {
    external: {
        getNumAnimations: function() {
            var model = this.mount ? this.mount : this;
            return model.animations ? model.animations.length : 0
        },
        getAnimation: function(idx) {
            var model = this.mount ? this.mount : this;
            if (model.animations && idx > -1 && idx < model.animations.length) {
                return model.animations[idx].name
            } else {
                return ""
            }
        },
        setAnimation: function(name) {
            var model = this.mount ? this.mount : this;
            model.setAnimation(name)
        },
        resetAnimation: function() {
            var model = this.mount ? this.mount : this;
            model.setAnimation("Stand")
        },
        attachList: function(list) {
            var equip = list.split(",");
            var items = [];
            for (var i = 0; i < equip.length; i += 2) {
                items.push([equip[i], equip[i + 1]])
            }
            this.loadItems(items);
            this.needsCompositing = true;
            this.setup()
        },
        clearSlots: function(list) {
            var slots = list.split(",");
            for (var i = 0; i < slots.length; ++i) {
                this.removeSlot(slots[i])
            }
            this.needsCompositing = true;
            this.setup()
        },
        setAppearance: function(hairStyle, hairColor, faceType, skinColor, features, featuresColor) {
            this.skinIndex = skinColor;
            this.hairIndex = hairStyle;
            this.hairColorIndex = hairColor;
            this.faceIndex = faceType;
            this.faceFeatureIndex = features;
            this.faceColorIndex = featuresColor;
            var Region = ZamModelViewer.Wow.Regions;
            var destroyTexture = function(array, key) {
                array[key].destroy();
                delete array[key]
            };
            if (this.specialTextures[1]) destroyTexture(this.specialTextures, 1);
            if (this.specialTextures[6]) destroyTexture(this.specialTextures, 6);
            if (this.specialTextures[8]) destroyTexture(this.specialTextures, 8);
            if (this.bakedTextures[Region.LegUpper][1]) destroyTexture(this.bakedTextures[Region.LegUpper], 1);
            if (this.bakedTextures[Region.TorsoUpper][1]) destroyTexture(this.bakedTextures[Region.TorsoUpper], 1);
            if (this.bakedTextures[Region.FaceLower][1]) destroyTexture(this.bakedTextures[Region.FaceLower], 1);
            if (this.bakedTextures[Region.FaceUpper][1]) destroyTexture(this.bakedTextures[Region.FaceUpper], 1);
            if (this.bakedTextures[Region.FaceLower][2]) destroyTexture(this.bakedTextures[Region.FaceLower], 2);
            if (this.bakedTextures[Region.FaceUpper][2]) destroyTexture(this.bakedTextures[Region.FaceUpper], 2);
            if (this.bakedTextures[Region.FaceLower][3]) destroyTexture(this.bakedTextures[Region.FaceLower], 3);
            if (this.bakedTextures[Region.FaceUpper][3]) destroyTexture(this.bakedTextures[Region.FaceUpper], 3);
            this.needsCompositing = true;
            this.setup()
        },
        isLoaded: function() {
            if (this.mount) {
                return this.mount.loaded && this.loaded
            } else {
                return this.loaded
            }
        }
    },
    setMatrix: function(parent, bone, attach, extra) {
        var self = this;
        mat4.copy(self.matrix, parent);
        mat4.multiply(self.matrix, self.matrix, bone);
        if (attach) mat4.translate(self.matrix, self.matrix, attach);
        if (extra) mat4.multiply(self.matrix, self.matrix, extra)
    },
    setAnimation: function(name) {
        var self = this,
            anim, Wow = ZamModelViewer.Wow;
        self.animationList = [];
        for (var i = 0; i < self.animations.length; ++i) {
            anim = self.animations[i];
            if (!anim.name) continue;
            if (anim.name == name && name == "Stand") {
                if (self.race == Wow.Races.PANDAREN && self.gender == Wow.Genders.MALE && anim.length == 11900) continue;
                self.animationList.push(anim)
            } else if (anim.name == name) {
                self.animationList.push(anim)
            }
        }
        self.animStartTime = 0;
        self.currentAnimation = self.animationList.length > 0 ? self.animationList[0] : null;
        if (name != "Stand" && !self.currentAnimation) {
            self.setAnimation("Stand")
        }
    },
    updateBuffers: function(fillVb) {
        var self = this,
            i, j, vertLength = 8,
            gl = self.renderer.context;
        if (!self.vertices || !self.indices) return;
        var vbLength = self.vertices.length * vertLength;
        if (!self.vbData) self.vbData = new Float32Array(vbLength);
        if (fillVb) {
            var vbData = self.vbData,
                verts = self.vertices;
            for (i = 0, j = 0; i < vbLength; ++j) {
                vbData[i + 0] = verts[j].transPosition[0];
                vbData[i + 1] = verts[j].transPosition[1];
                vbData[i + 2] = verts[j].transPosition[2];
                vbData[i + 3] = verts[j].transNormal[0];
                vbData[i + 4] = verts[j].transNormal[1];
                vbData[i + 5] = verts[j].transNormal[2];
                vbData[i + 6] = verts[j].u;
                vbData[i + 7] = verts[j].v;
                i += 8
            }
        }
        if (!self.vb) {
            self.vb = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, self.vb);
            gl.bufferData(gl.ARRAY_BUFFER, self.vbData, gl.DYNAMIC_DRAW);
            self.ib = gl.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, self.ib);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(self.indices), gl.STATIC_DRAW)
        } else {
            gl.bindBuffer(gl.ARRAY_BUFFER, self.vb);
            gl.bufferSubData(gl.ARRAY_BUFFER, 0, self.vbData)
        }
    },
    updateBounds: function() {
        var self = this,
            t, m, color = [1, 1, 1, 1],
            Wow = ZamModelViewer.Wow;
        var min = self.boundsMin,
            max = self.boundsMax,
            pos, tmp = self.tmpVec;
        vec3.set(min, 9999, 9999, 999);
        vec3.set(max, -9999, -9999, -9999);
        if (!self.texUnits) {
            mat4.identity(self.matrix);
            self.renderer.distance = 1;
            return false
        }
        for (var i = 0; i < self.texUnits.length; ++i) {
            t = self.texUnits[i];
            if (!t.show) continue;
            color[0] = color[1] = color[2] = color[3] = 1;
            if (self.currentAnimation) {
                if (t.color) t.color.getValue(self.currentAnimation.index, self.time, color);
                if (t.alpha) color[3] *= t.alpha.getValue(self.currentAnimation.index, self.time)
            }
            if (color[3] < .01) continue;
            m = t.mesh;
            for (var j = 0; j < m.indexCount; ++j) {
                pos = self.vertices[self.indices[m.indexStart + j]].transPosition;
                vec3.min(min, min, pos);
                vec3.max(max, max, pos)
            }
        }
        if (self.mount && self.mount.loaded) {
            if (self.mount.updateBounds()) {
                vec3.copy(min, vec3.scale(min, self.mount.boundsMin, 1.1));
                vec3.copy(max, vec3.scale(max, self.mount.boundsMax, 1.1));
                max[2] *= 1.75
            }
        }
        if (self.model.type == Wow.Types.NPC) {
            vec3.scale(min, min, self.meta.Scale);
            vec3.scale(max, max, self.meta.Scale)
        }
        vec3.subtract(self.boundsSize, max, min);
        vec3.scaleAndAdd(self.boundsCenter, min, self.boundsSize, .5);
        var hSize = self.boundsSize[2],
            wSize, dSize, scale = self.meta.Scale ? self.meta.Scale : 1;
        if (self.model.type != Wow.Types.ITEM) {
            wSize = self.boundsSize[1];
            dSize = self.boundsSize[0]
        } else {
            wSize = self.boundsSize[0];
            dSize = self.boundsSize[1]
        }
        if (!self.parent) {
            var ratio = self.renderer.width / self.renderer.height;
            var hTan = 2 * Math.tan(self.renderer.fov / 2 * .0174532925);
            var wTan = hTan * ratio;
            var hDist = hSize * 1.2 / hTan;
            var wDist = wSize * 1.2 / wTan;
            self.renderer.distance = Math.max(Math.max(hDist, wDist), dSize * 2)
        }
        mat4.identity(self.matrix);
        if (self.model.type != Wow.Types.ITEM) {
            mat4.rotateZ(self.matrix, self.matrix, Math.PI / 2)
        }
        mat4.translate(self.matrix, self.matrix, vec3.negate(tmp, self.boundsCenter));
        vec3.set(self.tmpVec, scale, scale, scale);
        mat4.scale(self.matrix, self.matrix, self.tmpVec);
        return true
    },
    disabledMeshes: {
        "item/objectcomponents/weapon/knife_1h_outlandraid_d_01.mo3": {
            1: true
        },
        "creature/cat/spectralcat.mo3": {
            1: true
        }
    },
    setup: function() {
        var self = this,
            i, Wow = ZamModelViewer.Wow;
        if (self.model.type != Wow.Types.CHARACTER && self.model.type != Wow.Types.NPC && self.model.type != Wow.Types.HUMANOIDNPC || self.race < 1) {
            if (self.texUnits) {
                if (self.modelPath == "creature/saberon/saberon.mo3") {
                    for (i = 0; i < self.texUnits.length; ++i) {
                        self.texUnits[i].show = self.texUnits[i].meshId == 0
                    }
                } else if (self.disabledMeshes[self.modelPath] !== undefined) {
                    var mesh = self.disabledMeshes[self.modelPath];
                    for (i = 0; i < self.texUnits.length; ++i) {
                        self.texUnits[i].show = mesh[i] === undefined
                    }
                } else {
                    for (i = 0; i < self.texUnits.length; ++i) {
                        self.texUnits[i].show = true
                    }
                }
            }
            return
        }
        if ((self.race == Wow.Races.BROKEN || self.race == Wow.Races.TUSKARR) && self.hairIndex == 0) {
            self.hairIndex = 1
        }
        if (self.model.type == Wow.Types.CHARACTER && self.race == Wow.Races.DWARF && self.opts.fh == undefined) {
            self.faceFeatureIndex = 3
        }
        var skin, face, features, featureTexture, hair, hairTexture, dk = self.class == Wow.Classes.DEATHKNIGHT;
        var skins = Wow.Skin.GetSkins(self.skins, true, dk),
            faces, textures;
        if (skins) {
            if (self.skinIndex >= skins.length) self.skinIndex = 0;
            if (self.skinIndex < skins.length) skin = skins[self.skinIndex];
            if (skin) {
                if (dk) {
                    faces = Wow.Skin.GetFaces(skin.faces, true, dk, skin.skinFlags);
                    if (self.faceIndex >= faces.length) self.faceIndex = 0;
                    if (self.faceIndex < faces.length) face = faces[self.faceIndex]
                } else if (self.faceIndex < skins.length) {
                    faces = Wow.Skin.GetFaces(skins[self.faceIndex].faces, true, dk, 0);
                    var index = self.skinIndex;
                    if (index >= faces.length) index = 0;
                    if (index < faces.length) face = faces[index]
                }
            }
        }
        if (self.faces) {
            if (self.faceFeatureIndex >= self.faces.length) self.faceFeatureIndex = 0;
            if (self.faceFeatureIndex < self.faces.length) features = self.faces[self.faceFeatureIndex];
            if (features) {
                textures = Wow.Face.GetTextures(features.textures, true, dk);
                if (self.faceColorIndex >= textures.length) self.faceColorIndex = 0;
                if (self.faceColorIndex < textures.length) featureTexture = textures[self.faceColorIndex]
            }
        }
        if (self.hairs) {
            if (self.hairIndex >= self.hairs.length) self.hairIndex = 0;
            if (self.hairIndex < self.hairs.length) hair = self.hairs[self.hairIndex];
            if (hair) {
                textures = Wow.Hair.GetTextures(hair.textures, true, dk);
                if (self.hairColorIndex >= textures.length) self.hairColorIndex = 0;
                if (self.hairColorIndex < textures.length) hairTexture = textures[self.hairColorIndex]
            }
        }
        var Region = ZamModelViewer.Wow.Regions;
        if (!self.npcTexture) {
            self.needsCompositing = true;
            if (skin) {
                if (skin.base && !self.specialTextures[1]) self.specialTextures[1] = new self.Texture(self, 1, skin.base);
                if (skin.panties && !self.bakedTextures[Region.LegUpper][1]) self.bakedTextures[Region.LegUpper][1] = new self.Texture(self, Region.LegUpper, skin.panties);
                if (skin.bra && !self.bakedTextures[Region.TorsoUpper][1]) self.bakedTextures[Region.TorsoUpper][1] = new self.Texture(self, Region.TorsoUpper, skin.bra)
            }
            if (face) {
                if (face.lower && !self.bakedTextures[Region.FaceLower][1]) self.bakedTextures[Region.FaceLower][1] = new self.Texture(self, Region.FaceLower, face.lower);
                if (face.upper && !self.bakedTextures[Region.FaceUpper][1]) self.bakedTextures[Region.FaceUpper][1] = new self.Texture(self, Region.FaceUpper, face.upper)
            }
            if (featureTexture) {
                if (featureTexture.lower && !self.bakedTextures[Region.FaceLower][2]) self.bakedTextures[Region.FaceLower][2] = new self.Texture(self, Region.FaceLower, featureTexture.lower);
                if (featureTexture.upper && !self.bakedTextures[Region.FaceUpper][2]) self.bakedTextures[Region.FaceUpper][2] = new self.Texture(self, Region.FaceUpper, featureTexture.upper)
            }
            if (hairTexture) {
                if (hairTexture.lower && !self.bakedTextures[Region.FaceLower][3]) self.bakedTextures[Region.FaceLower][3] = new self.Texture(self, Region.FaceLower, hairTexture.lower);
                if (hairTexture.upper && !self.bakedTextures[Region.FaceUpper][3]) self.bakedTextures[Region.FaceUpper][3] = new self.Texture(self, Region.FaceUpper, hairTexture.upper)
            }
        }
        if (skin && skin.fur && !self.specialTextures[8]) self.specialTextures[8] = new self.Texture(self, 8, skin.fur);
        if (hairTexture && hairTexture.texture && !self.specialTextures[6]) self.specialTextures[6] = new self.Texture(self, 6, hairTexture.texture);
        else if (hairTexture && !hairTexture.texture && !self.specialTextures[6] && self.hairIndex == 0 && self.hairs.length > 1) {
            hair = self.hairs[1];
            if (self.hairColorIndex >= hair.textures.length) self.hairColorIndex = 0;
            if (self.hairColorIndex < hair.textures.length) {
                hairTexture = hair.textures[self.hairColorIndex];
                if (hairTexture.texture) self.specialTextures[6] = new self.Texture(self, 6, hairTexture.texture)
            }
        }
        self.updateMeshes()
    },
    updateMeshes: function() {
        var self = this,
            i, j, u, Wow = ZamModelViewer.Wow,
            Races = Wow.Races,
            Genders = Wow.Genders,
            Slots = Wow.Slots;
        if (!self.texUnits || self.texUnits.length == 0) return;
        var showHair = true;
        if (self.hairMesh) showHair = self.hairMesh.show;
        for (i = 0; i < self.texUnits.length; ++i) {
            self.texUnits[i].show = self.texUnits[i].meshId == 0
        }
        for (i = 0; i < self.numGeosets; ++i) {
            self.geosets[i] = 1
        }
        self.geosets[7] = 2;
        if (self.faceVis) {
            if (self.faces && self.faceFeatureIndex < self.faces.length) {
                var face = self.faces[self.faceFeatureIndex];
                self.geosets[1] = face.geoset1;
                self.geosets[2] = face.geoset2;
                self.geosets[3] = face.geoset3
            }
        }
        if (self.race == Races.GOBLIN) {
            if (self.geosets[1] == 1) self.geosets[1] = 2;
            if (self.geosets[2] == 1) self.geosets[2] = 2;
            if (self.geosets[3] == 1) self.geosets[3] = 2
        }
        var slot, item, hasRobe = false,
            hasBoots = false,
            hasHelm = false;
        for (slot in self.items) {
            item = self.items[slot];
            if (item.slot == Slots.ROBE) hasRobe = true;
            else if (item.slot == Slots.BOOTS) hasBoots = true;
            else if (item.slot == Slots.HEAD) hasHelm = true;
            if (!item.geosets) continue;
            for (j = 0; j < item.geosets.length; ++j) {
                self.geosets[item.geosets[j].index] = item.geosets[j].value
            }
            if (self.geosets[13] == 1) self.geosets[13] += item.geoC;
            if (item.slot == Slots.BELT) self.geosets[18] = 1 + item.geoA;
            if (self.race == Races.PANDAREN && item.slot == Slots.PANTS) self.geosets[14] = 0
        }
        if (self.geosets[13] == 2) self.geosets[5] = self.geosets[12] = 0;
        if (self.geosets[4] > 1) self.geosets[8] = 0;
        if (self.isHD && hasBoots) self.geosets[20] = 2;
        if (!hasHelm) {
            showHair = true;
            self.hairVis = self.faceVis = true
        } else {
            showHair = self.hairVis
        }
        if (self.hairs && self.hairIndex < self.hairs.length) {
            self.hairMesh = null;
            var hair = self.hairs[self.hairIndex];
            for (i = 0; i < self.texUnits.length; ++i) {
                u = self.texUnits[i];
                if (u.meshId != 0 && u.meshId == hair.geoset) {
                    u.show = true;
                    self.hairMesh = u
                }
            }
        }
        var a, b;
        for (i = 0; i < self.texUnits.length; ++i) {
            u = self.texUnits[i];
            if (self.race != Races.HUMAN && !((self.race == Races.DRAENEI || self.race == Races.SCOURGE) && self.gender == Genders.FEMALE) && u.meshId == 0 && u.mesh.indexCount < 36) {
                u.show = false;
                continue
            }
            if (u.meshId == 1 && (!self.hairVis || self.gender == Genders.MALE && self.hairIndex == 0 && (self.race == Races.HUMAN || self.race == Races.GNOME || self.race == Races.TROLL))) {
                u.show = true
            }
            for (j = 1; j < self.numGeosets; ++j) {
                a = j * 100;
                b = (j + 1) * 100;
                if (u.meshId > a && u.meshId < b) u.show = u.meshId == a + self.geosets[j]
            }
            if (self.race == Races.SCOURGE && !self.isHD) {
                if (self.gender == Genders.FEMALE) {
                    if (u.mesh == 49 || u.mesh == 51) u.show = true
                } else {
                    if (u.mesh == 62) u.show = true
                }
            } else if (self.race == Races.GOBLIN) {
                if (self.gender == Genders.FEMALE && u.mesh == 0 || self.gender == Genders.MALE && u.mesh == 3) u.show = false
            } else if (self.race == Races.WORGEN) {
                if (self.gender == Genders.MALE) {
                    if (u.mesh == 5 || u.mesh == 3 || u.mesh >= 36 && u.mesh <= 47) u.show = false
                } else {
                    if (u.mesh == 2 || u.mesh == 3 || u.mesh >= 58 && u.mesh <= 69) u.show = false
                }
            } else if (self.race == Races.PANDAREN) {
                if (self.gender == Genders.FEMALE) {
                    if (hasRobe && u.meshId == 1401) u.show = false
                }
            } else if (self.race == Races.NIGHTELF) {
                if (self.class != Wow.Classes.DEATHKNIGHT && u.meshId == 1702) u.show = true
            }
            if (self.class == Wow.Classes.DEATHKNIGHT) {
                if (u.meshId == 1703) u.show = true
            }
        }
        var attach;
        for (slot in self.items) {
            item = self.items[slot];
            if (!item.models) continue;
            for (i = 0; i < item.models.length; ++i) {
                if (self.slotAttachments[item.slot] && self.slotAttachments[item.slot].length > i) {
                    attach = self.attachments[self.slotAttachments[item.slot][i]];
                    item.models[i].bone = attach.bone;
                    item.models[i].attachment = attach
                }
            }
        }
        if (self.hairMesh) self.hairMesh.show = showHair && self.hairVis
    },
    compositeTextures: function() {
        var self = this,
            i, j, Region = ZamModelViewer.Wow.Regions,
            Slots = ZamModelViewer.Wow.Slots,
            Races = ZamModelViewer.Wow.Races,
            item, t;
        for (i = 0; i < 11; ++i) {
            for (j in self.bakedTextures[i]) {
                if (!self.bakedTextures[i][j].ready()) return
            }
        }
        for (i in self.items) {
            item = self.items[i];
            if (!item.loaded) {
                return
            } else if (item.textures) {
                for (j = 0; j < item.textures.length; ++j) {
                    if (item.textures[j].texture && !item.textures[j].texture.ready()) return
                }
            }
        }
        if (!self.specialTextures[1] || !self.specialTextures[1].ready()) return;
        if (!self.compositeImage) {
            self.compositeImage = document.createElement("canvas");
            self.compositeImage.width = self.specialTextures[1].img.width;
            self.compositeImage.height = self.specialTextures[1].img.height
        }
        var ctx = self.compositeImage.getContext("2d");
        ctx.drawImage(self.specialTextures[1].img, 0, 0, self.compositeImage.width, self.compositeImage.height);
        var w = self.compositeImage.width,
            h = self.compositeImage.height,
            regions = Region.old,
            r;
        if (w != h) regions = Region.new;
        for (i = 1; i <= 3; ++i) {
            if (self.bakedTextures[Region.FaceLower][i]) {
                if (!self.bakedTextures[Region.FaceLower][i].mergeImages()) return;
                r = regions[Region.FaceLower];
                ctx.drawImage(self.bakedTextures[Region.FaceLower][i].mergedImg, w * r.x, h * r.y, w * r.w, h * r.h)
            }
            if (self.bakedTextures[Region.FaceUpper][i]) {
                if (!self.bakedTextures[Region.FaceUpper][i].mergeImages()) return;
                r = regions[Region.FaceUpper];
                ctx.drawImage(self.bakedTextures[Region.FaceUpper][i].mergedImg, w * r.x, h * r.y, w * r.w, h * r.h)
            }
        }
        if (self.isHD) {
            for (i = 2; i <= 3; ++i) {
                if (self.bakedTextures[Region.FaceLower][i]) {
                    if (!self.bakedTextures[Region.FaceLower][i].mergeImages()) return;
                    r = regions[Region.FaceLower2];
                    ctx.drawImage(self.bakedTextures[Region.FaceLower][i].mergedImg, w * r.x, h * r.y, w * r.w, h * r.h)
                }
            }
        }
        var drawBra = true,
            drawPanties = true,
            uniqueSlot;
        for (i in self.items) {
            uniqueSlot = self.items[i].uniqueSlot;
            if (uniqueSlot == Slots.SHIRT || uniqueSlot == Slots.CHEST || uniqueSlot == Slots.TABARD) drawBra = false;
            if (self.items[i].slot == Slots.ROBE || uniqueSlot == Slots.PANTS) drawPanties = false
        }
        if (drawBra && self.bakedTextures[Region.TorsoUpper][1]) {
            if (!self.bakedTextures[Region.TorsoUpper][1].mergeImages()) return;
            r = regions[Region.TorsoUpper];
            ctx.drawImage(self.bakedTextures[Region.TorsoUpper][1].mergedImg, w * r.x, h * r.y, w * r.w, h * r.h)
        }
        if (drawPanties && self.bakedTextures[Region.LegUpper][1]) {
            if (!self.bakedTextures[Region.LegUpper][1].mergeImages()) return;
            r = regions[Region.LegUpper];
            ctx.drawImage(self.bakedTextures[Region.LegUpper][1].mergedImg, w * r.x, h * r.y, w * r.w, h * r.h)
        }
        var items = [];
        for (i in self.items) {
            items.push(self.items[i])
        }
        items.sort(function(a, b) {
            return a.sortValue - b.sortValue
        });
        for (i = 0; i < items.length; ++i) {
            item = items[i];
            if (!item.textures) continue;
            for (j = 0; j < item.textures.length; ++j) {
                t = item.textures[j];
                if (t.gender != self.gender || !t.texture || !t.texture.mergeImages()) continue;
                if (t.region > 0) {
                    if ((self.race == Races.TAUREN || self.race == Races.TROLL || self.race == Races.DRAENEI || self.race == Races.BROKEN || self.race == Races.WORGEN) && t.region == Region.Foot) continue;
                    r = regions[t.region];
                    ctx.drawImage(t.texture.mergedImg, w * r.x, h * r.y, w * r.w, h * r.h)
                }
            }
        }
        var gl = self.renderer.context;
        if (self.compositeTexture) gl.deleteTexture(self.compositeTexture);
        self.compositeTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, self.compositeTexture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, self.compositeImage);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        self.needsCompositing = false
    },
    loadItems: function(items) {
        var self = this;
        if ($.isArray(items)) {
            for (var i = 0; i < items.length; ++i) {
                self.addItem(items[i][0], items[i][1])
            }
        } else {
            for (var slot in items) {
                self.addItem(parseInt(slot), items[slot])
            }
        }
    },
    addItem: function(slot, id) {
        var self = this,
            Wow = ZamModelViewer.Wow;
        var item = new Wow.Item(self, slot, id, self.race, self.gender);
        var uniqueSlot = item.uniqueSlot;
        var altSlot = Wow.SlotAlternate[slot];
        if (!self.items[uniqueSlot] || altSlot == 0) {
            self.items[uniqueSlot] = item
        } else {
            item.uniqueSlot = altSlot;
            self.items[altSlot] = item
        }
    },
    removeSlot: function(slot) {
        var self = this;
        if (self.items[slot]) {
            if (self.items[slot].models) {
                for (var i = 0; i < self.items[slot].models.length; ++i) {
                    if (self.items[slot].models[i].model) self.items[slot].models[i].model.destroy()
                }
            }
            self.items[slot] = null;
            delete self.items[slot]
        }
    },
    onLoaded: function() {
        var self = this,
            i;
        if (self.texUnits) {
            for (i = 0; i < self.texUnits.length; ++i) self.texUnits[i].setup(self);
            self.sortedTexUnits = self.texUnits.concat();
            self.sortedTexUnits.sort(function(a, b) {
                if (a.meshId == b.meshId) return a.meshIndex - b.meshIndex;
                else return a.meshId - b.meshId
            })
        }
        if (self.attachments && self.attachmentLookup) {
            var slotMap = {
                1: [11],
                3: [6, 5],
                22: [2],
                21: [1],
                17: [1],
                15: [2],
                25: [1],
                13: [1],
                14: [0],
                23: [2],
                6: [53],
                26: [1]
            };
            var mountOverrides = {
                21: 26,
                22: 27,
                17: 26,
                15: 28,
                25: 32,
                13: 32,
                23: 33,
                14: 28,
                26: 26
            };
            for (var slot in slotMap) {
                for (i = 0; i < slotMap[slot].length; ++i) {
                    var att = slotMap[slot][i];
                    if (self.mount && mountOverrides[slot]) att = mountOverrides[slot];
                    if (att >= self.attachmentLookup.length || self.attachmentLookup[att] == -1) continue;
                    if (!self.slotAttachments[slot]) self.slotAttachments[slot] = [];
                    self.slotAttachments[slot].push(self.attachmentLookup[att])
                }
            }
        }
        if (self.modelPath == "creature/saberon/saberon.mo3") {
            self.setAnimation("StealthStand")
        } else if (self.mount) {
            if (ZamModelViewer.Wow.StandingMounts[self.mount.model.id]) {
                self.setAnimation("StealthStand")
            } else {
                self.setAnimation("Mount")
            }
        } else {
            self.setAnimation("Stand")
        }
        self.updateBuffers(true);
        self.updateBounds();
        self.setup();
        self.loaded = true;
        if (self.isMount && self.parent.loaded) {
            self.parent.updateBounds()
        }
        if (self.parent && self.parent.loaded) {
            self.parent.updateMeshes()
        }
    }
};
ZamModelViewer.Wow.StandingMounts = {
    28060: true,
    28063: true,
    28082: true,
    41903: true,
    42147: true,
    44808: true,
    45271: true
};
ZamModelViewer.Wow.Types = {
    ITEM: 1,
    HELM: 2,
    SHOULDER: 4,
    NPC: 8,
    CHARACTER: 16,
    HUMANOIDNPC: 32,
    OBJECT: 64,
    ARMOR: 128,
    PATH: 256
};
ZamModelViewer.Wow.Classes = {
    WARRIOR: 1,
    PALADIN: 2,
    HUNTER: 3,
    ROGUE: 4,
    PRIEST: 5,
    DEATHKNIGHT: 6,
    SHAMAN: 7,
    MAGE: 8,
    WARLOCK: 9,
    MONK: 10,
    DRUID: 11
};
ZamModelViewer.Wow.Genders = {
    MALE: 0,
    FEMALE: 1,
    0: "male",
    1: "female"
};
ZamModelViewer.Wow.Races = {
    HUMAN: 1,
    ORC: 2,
    DWARF: 3,
    NIGHTELF: 4,
    SCOURGE: 5,
    TAUREN: 6,
    GNOME: 7,
    TROLL: 8,
    GOBLIN: 9,
    BLOODELF: 10,
    DRAENEI: 11,
    FELORC: 12,
    NAGA: 13,
    BROKEN: 14,
    SKELETON: 15,
    VRYKUL: 16,
    TUSKARR: 17,
    FORESTTROLL: 18,
    TAUNKA: 19,
    NORTHRENDSKELETON: 20,
    ICETROLL: 21,
    WORGEN: 22,
    WORGENHUMAN: 23,
    PANDAREN: 24,
    1: "human",
    2: "orc",
    3: "dwarf",
    4: "nightelf",
    5: "scourge",
    6: "tauren",
    7: "gnome",
    8: "troll",
    9: "goblin",
    10: "bloodelf",
    11: "draenei",
    12: "felorc",
    13: "naga_",
    14: "broken",
    15: "skeleton",
    16: "vrykul",
    17: "tuskarr",
    18: "foresttroll",
    19: "taunka",
    20: "northrendskeleton",
    21: "icetroll",
    22: "worgen",
    23: "human",
    24: "pandaren",
    25: "pandaren",
    26: "pandaren"
};
ZamModelViewer.Wow.UniqueSlots = [0, 1, 0, 3, 4, 5, 6, 7, 8, 9, 10, 0, 0, 21, 22, 22, 16, 21, 0, 19, 5, 21, 22, 22, 0, 21, 21];
ZamModelViewer.Wow.SlotOrder = [0, 16, 0, 15, 1, 8, 10, 5, 6, 6, 7, 0, 0, 17, 18, 19, 14, 20, 0, 9, 8, 21, 22, 23, 0, 24, 25];
ZamModelViewer.Wow.SlotAlternate = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0];
ZamModelViewer.Wow.SlotType = [0, 2, 0, 4, 128, 128, 128, 128, 128, 128, 128, 0, 0, 1, 1, 1, 128, 1, 0, 128, 128, 1, 1, 1, 0, 1, 1];
ZamModelViewer.Wow.Slots = {
    HEAD: 1,
    SHOULDER: 3,
    SHIRT: 4,
    CHEST: 5,
    BELT: 6,
    PANTS: 7,
    BOOTS: 8,
    BRACERS: 9,
    HANDS: 10,
    ONEHAND: 13,
    SHIELD: 14,
    BOW: 15,
    CAPE: 16,
    TWOHAND: 17,
    TABARD: 19,
    ROBE: 20,
    RIGHTHAND: 21,
    LEFTHAND: 22,
    OFFHAND: 23,
    THROWN: 25,
    RANGED: 26
};
ZamModelViewer.Wow.Regions = {
    Base: 0,
    ArmUpper: 1,
    ArmLower: 2,
    Hand: 3,
    FaceUpper: 4,
    FaceLower: 5,
    TorsoUpper: 6,
    TorsoLower: 7,
    LegUpper: 8,
    LegLower: 9,
    Foot: 10,
    FaceLower2: 11,
    old: [{
        x: 0,
        y: 0,
        w: 1,
        h: 1
    }, {
        x: 0,
        y: 0,
        w: .5,
        h: .25
    }, {
        x: 0,
        y: .25,
        w: .5,
        h: .25
    }, {
        x: 0,
        y: .5,
        w: .5,
        h: .125
    }, {
        x: 0,
        y: .625,
        w: .5,
        h: .125
    }, {
        x: 0,
        y: .75,
        w: .5,
        h: .25
    }, {
        x: .5,
        y: 0,
        w: .5,
        h: .25
    }, {
        x: .5,
        y: .25,
        w: .5,
        h: .125
    }, {
        x: .5,
        y: .375,
        w: .5,
        h: .25
    }, {
        x: .5,
        y: .625,
        w: .5,
        h: .25
    }, {
        x: .5,
        y: .875,
        w: .5,
        h: .125
    }],
    "new": [{
        x: 0,
        y: 0,
        w: 1,
        h: 1
    }, {
        x: 0,
        y: 0,
        w: .25,
        h: .25
    }, {
        x: 0,
        y: .25,
        w: .25,
        h: .25
    }, {
        x: 0,
        y: .5,
        w: .25,
        h: .125
    }, {
        x: .5,
        y: 0,
        w: .5,
        h: 1
    }, {
        x: 0,
        y: .75,
        w: .25,
        h: .25
    }, {
        x: .25,
        y: 0,
        w: .25,
        h: .25
    }, {
        x: .25,
        y: .25,
        w: .25,
        h: .125
    }, {
        x: .25,
        y: .375,
        w: .25,
        h: .25
    }, {
        x: .25,
        y: .625,
        w: .25,
        h: .25
    }, {
        x: .25,
        y: .875,
        w: .25,
        h: .125
    }, {
        x: .5,
        y: 0,
        w: .5,
        h: 1
    }]
};
ZamModelViewer.Wow.Model.prototype.load = function() {
    var self = this,
        Type = ZamModelViewer.Wow.Types;
    if (!self.model || !self.model.type || !self.model.id) return;
    self._load(self.model.type, self.model.id)
};
ZamModelViewer.Wow.Model.prototype._load = function(type, id) {
    var self = this,
        Type = ZamModelViewer.Wow.Types,
        url = null;
    if (type == Type.ITEM) url = "meta/item/";
    else if (type == Type.HELM) url = "meta/armor/1/";
    else if (type == Type.SHOULDER) url = "meta/armor/3/";
    else if (type == Type.NPC || type == Type.HUMANOIDNPC) url = "meta/npc/";
    else if (type == Type.OBJECT) url = "meta/object/";
    else if (type == Type.CHARACTER) url = "meta/character/";
    if (url) {
        url = self.opts.contentPath + url + id + ".json";
        (function(type) {
            $.getJSON(url, function(data) {
                self.loadMeta(data, type)
            })
        })(type)
    } else if (type == Type.PATH) {
        self.modelPath = id;
        url = self.opts.contentPath + "mo3/" + id;
        $.ajax({
            url: url,
            type: "GET",
            dataType: "binary",
            responseType: "arraybuffer",
            processData: false,
            renderer: self.renderer,
            success: function(buffer) {
                self.loadMo3(buffer)
            },
            error: function(xhr, status, error) {
                console.log(error)
            }
        })
    }
};
ZamModelViewer.Wow.Model.prototype.loadMeta = function(meta, type) {
    var self = this,
        Type = ZamModelViewer.Wow.Types,
        model, i;
    if (!type) type = self.model.type;
    if (!self.meta) self.meta = meta;
    if (type == Type.CHARACTER) {
        model = meta.Model;
        if (self.opts.hd && meta.HDModel) {
            model = meta.HDModel;
            self.isHD = true
        }
        if (self.isHD && self.meta.HDTexture) {
            self.npcTexture = new self.Texture(self, -1, self.meta.HDTexture)
        } else if (self.meta.Texture) {
            self.npcTexture = new self.Texture(self, -1, self.meta.Texture)
        }
        self.race = meta.Race;
        self.gender = meta.Gender;
        self._load(Type.PATH, model);
        if (self.meta.Equipment) {
            self.loadItems(self.meta.Equipment)
        }
        if (self.opts.items) {
            self.loadItems(self.opts.items)
        }
        if (self.model.type != Type.CHARACTER && self.meta.Race > 0) {
            self.skinIndex = parseInt(self.meta.SkinColor);
            self.hairIndex = parseInt(self.meta.HairStyle);
            self.hairColorIndex = parseInt(self.meta.HairColor);
            self.faceIndex = parseInt(self.meta.FaceType);
            self.faceFeatureIndex = parseInt(self.meta.FacialHair);
            self.faceColorIndex = self.hairColorIndex
        } else {
            if (self.opts.sk) self.skinIndex = parseInt(self.opts.sk);
            if (self.opts.ha) self.hairIndex = parseInt(self.opts.ha);
            if (self.opts.hc) self.hairColorIndex = parseInt(self.opts.hc);
            if (self.opts.fa) self.faceIndex = parseInt(self.opts.fa);
            if (self.opts.fh) self.faceFeatureIndex = parseInt(self.opts.fh);
            if (self.opts.fc) self.faceColorIndex = parseInt(self.opts.fc)
        }
        if (self.opts.cls) self.class = parseInt(self.opts.cls)
    } else if (type == Type.HELM) {
        var race = 1;
        var gender = 0;
        if (self.parent) {
            race = self.parent.race;
            gender = self.parent.gender;
            self.parent.hairVis = meta.ShowHair == 0;
            self.parent.faceVis = meta.ShowFacial1 == 0
        }
        if (meta.RaceModels[gender] && meta.RaceModels[gender][race]) {
            self._load(Type.PATH, meta.RaceModels[gender][race])
        }
        if (meta.Textures) {
            for (i in meta.Textures) {
                self.textureOverrides[i] = new self.Texture(self, parseInt(i), meta.Textures[i])
            }
        }
    } else if (type == Type.SHOULDER) {
        if (self.model.shoulder == 1 || self.model.shoulder === undefined && meta.Model) {
            if (meta.Model) self._load(Type.PATH, meta.Model);
            if (meta.Textures) {
                for (i in meta.Textures) {
                    self.textureOverrides[i] = new self.Texture(self, parseInt(i), meta.Textures[i])
                }
            }
        } else if (self.model.shoulder == 2 || self.model.shoulder === undefined && meta.Model2) {
            if (meta.Model2) self._load(Type.PATH, meta.Model2);
            if (meta.Textures2) {
                for (i in meta.Textures2) {
                    self.textureOverrides[i] = new self.Texture(self, parseInt(i), meta.Textures2[i])
                }
            }
        }
    } else {
        if (meta.Textures) {
            for (i in meta.Textures) {
                self.textureOverrides[i] = new self.Texture(self, parseInt(i), meta.Textures[i])
            }
        } else if (meta.GenderTextures && self.parent) {
            var g = self.parent.gender;
            for (i in meta.GenderTextures[g]) {
                self.textureOverrides[i] = new self.Texture(self, parseInt(i), meta.GenderTextures[g][i])
            }
        }
        if (self.opts.hd && meta.HDModel) {
            self._load(Type.PATH, meta.HDModel)
        } else if (meta.Model) {
            self._load(Type.PATH, meta.Model)
        } else if (meta.GenderModels && self.parent && meta.GenderModels[self.parent.gender]) {
            self._load(Type.PATH, meta.GenderModels[self.parent.gender])
        } else if (meta.Race > 0) {
            model = ZamModelViewer.Wow.Races[meta.Race] + ZamModelViewer.Wow.Genders[meta.Gender];
            self.race = meta.Race;
            self.gender = meta.Gender;
            self._load(Type.CHARACTER, model)
        }
    }
};
ZamModelViewer.Wow.Model.prototype.loadMo3 = function(buffer) {
    if (!buffer) {
        console.error("Bad buffer for DataView");
        return
    }
    var self = this,
        r = new ZamModelViewer.DataView(buffer),
        i, Wow = ZamModelViewer.Wow;
    var magic = r.getUint32();
    if (magic != 604210112) {
        console.log("Bad magic value");
        return
    }
    var version = r.getUint32();
    if (version < 2e3) {
        console.log("Bad version");
        return
    }
    var ofsVertices = r.getUint32();
    var ofsIndices = r.getUint32();
    var ofsSequences = r.getUint32();
    var ofsAnimations = r.getUint32();
    var ofsAnimLookup = r.getUint32();
    var ofsBones = r.getUint32();
    var ofsBoneLookup = r.getUint32();
    var ofsKeyBoneLookup = r.getUint32();
    var ofsMeshes = r.getUint32();
    var ofsTexUnits = r.getUint32();
    var ofsTexUnitLookup = r.getUint32();
    var ofsRenderFlags = r.getUint32();
    var ofsMaterials = r.getUint32();
    var ofsMaterialLookup = r.getUint32();
    var ofsTextureAnims = r.getUint32();
    var ofsTexAnimLookup = r.getUint32();
    var ofsTexReplacements = r.getUint32();
    var ofsAttachments = r.getUint32();
    var ofsAttachmentLookup = r.getUint32();
    var ofsColors = r.getUint32();
    var ofsAlphas = r.getUint32();
    var ofsAlphaLookup = r.getUint32();
    var ofsParticleEmitters = r.getUint32();
    var ofsRibbonEmitters = r.getUint32();
    var ofsSkinColors = r.getUint32();
    var ofsFaceTypes = r.getUint32();
    var ofsFacialStyles = r.getUint32();
    var ofsFacialColors = r.getUint32();
    var ofsHairStyles = r.getUint32();
    var ofsHairColors = r.getUint32();
    var uncompressedSize = r.getUint32();
    var compressedData = new Uint8Array(buffer, r.position);
    var data = null;
    try {
        data = pako.inflate(compressedData)
    } catch (err) {
        console.log("Decompression error: " + err);
        return
    }
    if (data.length < uncompressedSize) {
        console.log("Unexpected data size", data.length, uncompressedSize);
        return
    }
    r = new ZamModelViewer.DataView(data.buffer);
    r.position = ofsVertices;
    var numVertices = r.getInt32();
    if (numVertices > 0) {
        self.vertices = new Array(numVertices);
        for (i = 0; i < numVertices; ++i) {
            self.vertices[i] = new Wow.Vertex(r)
        }
    }
    r.position = ofsIndices;
    var numIndices = r.getInt32();
    if (numIndices > 0) {
        self.indices = new Array(numIndices);
        for (i = 0; i < numIndices; ++i) {
            self.indices[i] = r.getUint16()
        }
    }
    r.position = ofsAnimations;
    var numAnims = r.getInt32();
    if (numAnims > 0) {
        self.animations = new Array(numAnims);
        for (i = 0; i < numAnims; ++i) {
            self.animations[i] = new Wow.Animation(r)
        }
    }
    r.position = ofsAnimLookup;
    var numAnimLookup = r.getInt32();
    if (numAnimLookup > 0) {
        self.animLookup = new Array(numAnimLookup);
        for (i = 0; i < numAnimLookup; ++i) {
            self.animLookup[i] = r.getInt16()
        }
    }
    r.position = ofsBones;
    var numBones = r.getInt32();
    if (numBones > 0) {
        self.bones = new Array(numBones);
        for (i = 0; i < numBones; ++i) {
            self.bones[i] = new Wow.Bone(self, i, r)
        }
    }
    r.position = ofsBoneLookup;
    var numBoneLookup = r.getInt32();
    if (numBoneLookup > 0) {
        self.boneLookup = new Array(numBoneLookup);
        for (i = 0; i < numBoneLookup; ++i) {
            self.boneLookup[i] = r.getInt16()
        }
    }
    r.position = ofsKeyBoneLookup;
    var numKeyBoneLookup = r.getInt32();
    if (numKeyBoneLookup > 0) {
        self.keyBoneLookup = new Array(numKeyBoneLookup);
        for (i = 0; i < numKeyBoneLookup; ++i) {
            self.keyBoneLookup[i] = r.getInt16()
        }
    }
    r.position = ofsMeshes;
    var numMeshes = r.getInt32();
    if (numMeshes > 0) {
        self.meshes = new Array(numMeshes);
        for (i = 0; i < numMeshes; ++i) {
            self.meshes[i] = new Wow.Mesh(r)
        }
    }
    r.position = ofsTexUnits;
    var numTexUnits = r.getInt32();
    if (numTexUnits > 0) {
        self.texUnits = new Array(numTexUnits);
        for (i = 0; i < numTexUnits; ++i) {
            self.texUnits[i] = new Wow.TexUnit(r)
        }
    }
    r.position = ofsTexUnitLookup;
    var numTexUnitLookup = r.getInt32();
    if (numTexUnitLookup > 0) {
        self.texUnitLookup = new Array(numTexUnitLookup);
        for (i = 0; i < numTexUnitLookup; ++i) {
            self.texUnitLookup[i] = r.getInt16()
        }
    }
    r.position = ofsRenderFlags;
    var numRenderFlags = r.getInt32();
    if (numRenderFlags > 0) {
        self.renderFlags = new Array(numRenderFlags);
        for (i = 0; i < numRenderFlags; ++i) {
            self.renderFlags[i] = new Wow.RenderFlag(r)
        }
    }
    r.position = ofsMaterials;
    var numMaterials = r.getInt32();
    if (numMaterials > 0) {
        self.materials = new Array(numMaterials);
        for (i = 0; i < numMaterials; ++i) {
            self.materials[i] = new Wow.Material(self, i, r)
        }
    }
    r.position = ofsMaterialLookup;
    var numMaterialLookup = r.getInt32();
    if (numMaterialLookup > 0) {
        self.materialLookup = new Array(numMaterialLookup);
        for (i = 0; i < numMaterialLookup; ++i) {
            self.materialLookup[i] = r.getInt16()
        }
    }
    r.position = ofsTextureAnims;
    var numTextureAnims = r.getInt32();
    if (numTextureAnims > 0) {
        self.textureAnims = new Array(numTextureAnims);
        for (i = 0; i < numTextureAnims; ++i) {
            self.textureAnims[i] = new Wow.TextureAnimation(r)
        }
    }
    r.position = ofsTexAnimLookup;
    var numTexAnimLookup = r.getInt32();
    if (numTexAnimLookup > 0) {
        self.textureAnimLookup = new Array(numTexAnimLookup);
        for (i = 0; i < numTexAnimLookup; ++i) {
            self.textureAnimLookup[i] = r.getInt16()
        }
    }
    r.position = ofsTexReplacements;
    var numTexReplacements = r.getInt32();
    if (numTexReplacements > 0) {
        self.textureReplacements = new Array(numTexReplacements);
        for (i = 0; i < numTexReplacements; ++i) {
            self.textureReplacements[i] = r.getInt16()
        }
    }
    r.position = ofsAttachments;
    var numAttachments = r.getInt32();
    if (numAttachments > 0) {
        self.attachments = new Array(numAttachments);
        for (i = 0; i < numAttachments; ++i) {
            self.attachments[i] = new Wow.Attachment(r)
        }
    }
    r.position = ofsAttachmentLookup;
    var numAttachmentLookup = r.getInt32();
    if (numAttachmentLookup > 0) {
        self.attachmentLookup = new Array(numAttachmentLookup);
        for (i = 0; i < numAttachmentLookup; ++i) {
            self.attachmentLookup[i] = r.getInt16()
        }
    }
    r.position = ofsColors;
    var numColors = r.getInt32();
    if (numColors > 0) {
        self.colors = new Array(numColors);
        for (i = 0; i < numColors; ++i) {
            self.colors[i] = new Wow.Color(r)
        }
    }
    r.position = ofsAlphas;
    var numAlphas = r.getInt32();
    if (numAlphas > 0) {
        self.alphas = new Array(numAlphas);
        for (i = 0; i < numAlphas; ++i) {
            self.alphas[i] = new Wow.Alpha(r)
        }
    }
    r.position = ofsAlphaLookup;
    var numAlphaLookup = r.getInt32();
    if (numAlphaLookup > 0) {
        self.alphaLookup = new Array(numAlphaLookup);
        for (i = 0; i < numAlphaLookup; ++i) {
            self.alphaLookup[i] = r.getInt16()
        }
    }
    r.position = ofsParticleEmitters;
    var numParticleEmitters = r.getInt32();
    if (numParticleEmitters > 0) {
        self.particleEmitters = new Array(numParticleEmitters);
        for (i = 0; i < numParticleEmitters; ++i) {
            self.particleEmitters[i] = new Wow.ParticleEmitter(self, r)
        }
    }
    r.position = ofsRibbonEmitters;
    var numRibbonEmitters = r.getInt32();
    if (numRibbonEmitters > 0) {
        self.ribbonEmitters = new Array(numRibbonEmitters);
        for (i = 0; i < numRibbonEmitters; ++i) {
            self.ribbonEmitters[i] = new Wow.RibbonEmitter(self, r)
        }
    }
    r.position = ofsSkinColors;
    var numSkinColors = r.getInt32();
    if (numSkinColors > 0) {
        self.skins = new Array(numSkinColors);
        for (i = 0; i < numSkinColors; ++i) {
            self.skins[i] = new Wow.Skin(r, version)
        }
        r.position = ofsFaceTypes;
        for (i = 0; i < numSkinColors; ++i) {
            self.skins[i].readFaces(r, version)
        }
    }
    r.position = ofsFacialStyles;
    var numFaceStyles = r.getInt32();
    if (numFaceStyles > 0) {
        self.faces = new Array(numFaceStyles);
        for (i = 0; i < numFaceStyles; ++i) {
            self.faces[i] = new Wow.Face(r)
        }
        data.position = ofsFacialColors;
        for (i = 0; i < numFaceStyles; ++i) {
            self.faces[i].readTextures(r, version)
        }
    }
    r.position = ofsHairStyles;
    var numHairStyles = r.getInt32();
    if (numHairStyles > 0) {
        self.hairs = new Array(numHairStyles);
        for (i = 0; i < numHairStyles; ++i) {
            self.hairs[i] = new Wow.Hair(r)
        }
        data.position = ofsHairColors;
        for (i = 0; i < numHairStyles; ++i) {
            self.hairs[i].readTextures(r, version)
        }
    }
    self.onLoaded()
};
ZamModelViewer.Wow.Model.prototype.update = function() {
    var self = this,
        i, j;
    if (!self.loaded || !self.texUnits) return;
    self.frame++;
    self.time = self.renderer.time;
    if (self.animationList && self.animationList.length > 0) {
        if (self.animStartTime == 0) self.animStartTime = self.time;
        if (self.time - self.animStartTime >= self.currentAnimation.length) {
            var nextAnim = Math.max(0, Math.randomInt(0, self.animationList.length + 3) - 3);
            self.currentAnimation = self.animationList[nextAnim];
            self.animStartTime = self.time
        }
    }
    var numUnits = self.texUnits.length,
        count, start, u;
    for (i = 0; i < numUnits; ++i) {
        u = self.texUnits[i];
        if (!u.show) continue;
        count = u.mesh.indexCount;
        start = u.mesh.indexStart;
        for (j = 0; j < count; ++j) self.vertices[self.indices[start + j]].frame = self.frame
    }
    var numBones = self.bones.length,
        animTime = self.time - self.animStartTime,
        vb = self.vbData;
    if (self.bones && self.animations) {
        for (i = 0; i < numBones; ++i) self.bones[i].updated = false;
        for (i = 0; i < numBones; ++i) self.bones[i].update(animTime);
        if (self.vertices) {
            var numVerts = self.vertices.length,
                v, b, w, idx, tmpVec3 = self.tmpVec3,
                tmpVec4 = self.tmpVec4;
            for (i = 0; i < numVerts; ++i) {
                v = self.vertices[i];
                if (v.frame != self.frame) continue;
                idx = i * 8;
                vb[idx] = vb[idx + 1] = vb[idx + 2] = vb[idx + 3] = vb[idx + 4] = vb[idx + 5] = 0;
                for (j = 0; j < 4; ++j) {
                    w = v.weights[j] / 255;
                    if (w > 0) {
                        b = self.bones[v.bones[j]];
                        vec3.transformMat4(tmpVec3, v.position, b.matrix);
                        vec4.transformMat4(tmpVec4, v.normal, b.matrix);
                        vb[idx + 0] += tmpVec3[0] * w;
                        vb[idx + 1] += tmpVec3[1] * w;
                        vb[idx + 2] += tmpVec3[2] * w;
                        vb[idx + 3] += tmpVec4[0] * w;
                        vb[idx + 4] += tmpVec4[1] * w;
                        vb[idx + 5] += tmpVec4[2] * w
                    }
                }
                v.transPosition[0] = vb[idx + 0];
                v.transPosition[1] = vb[idx + 1];
                v.transPosition[2] = vb[idx + 2];
                v.transNormal[0] = vb[idx + 3];
                v.transNormal[1] = vb[idx + 4];
                v.transNormal[2] = vb[idx + 5]
            }
            self.updateBuffers(false);
            if (!self.animBounds) {
                self.animBounds = true;
                self.updateBounds()
            }
        }
    }
};
ZamModelViewer.Wow.Model.prototype.draw = function(flipWinding) {
    var self = this,
        gl = self.renderer.context,
        i, Wow = ZamModelViewer.Wow;
    if (self.mount) {
        self.mount.draw();
        if (self.mount.loaded) {
            var attach = self.mount.attachments[self.mount.attachmentLookup[0]];
            var scale = 1 / self.mount.meta.Scale;
            vec3.set(self.tmpVec, scale, scale, scale);
            mat4.identity(self.tmpMat);
            mat4.scale(self.tmpMat, self.tmpMat, self.tmpVec);
            self.setMatrix(self.mount.matrix, self.mount.bones[attach.bone].matrix, attach.position, self.tmpMat)
        }
    }
    if (!self.loaded || !self.texUnits) return;
    self.update();
    if (!self.shaderReady) self.initShader();
    if (!self.program) return;
    if (self.needsCompositing) self.compositeTextures();
    gl.useProgram(self.program);
    gl.uniformMatrix4fv(self.uniforms.vModelMatrix, false, self.matrix);
    gl.uniformMatrix4fv(self.uniforms.vViewMatrix, false, self.renderer.viewMatrix);
    gl.uniformMatrix4fv(self.uniforms.vProjMatrix, false, self.renderer.projMatrix);
    gl.uniform3fv(self.uniforms.vCameraPos, self.renderer.eye);
    gl.uniform4fv(self.uniforms.fAmbientColor, self.ambientColor);
    gl.uniform4fv(self.uniforms.fPrimaryColor, self.primaryColor);
    gl.uniform4fv(self.uniforms.fSecondaryColor, self.secondaryColor);
    gl.uniform3fv(self.uniforms.fLightDir1, self.lightDir1);
    gl.uniform3fv(self.uniforms.fLightDir2, self.lightDir2);
    gl.uniform3fv(self.uniforms.fLightDir3, self.lightDir3);
    gl.bindBuffer(gl.ARRAY_BUFFER, self.vb);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, self.ib);
    for (i in self.attribs) {
        var a = self.attribs[i];
        gl.enableVertexAttribArray(a.loc);
        gl.vertexAttribPointer(a.loc, a.size, a.type, false, a.stride, a.offset)
    }
    if (flipWinding) gl.frontFace(gl.CW);
    for (i = 0; i < self.sortedTexUnits.length; ++i) {
        if (!self.sortedTexUnits[i].show) continue;
        self.sortedTexUnits[i].draw()
    }
    if (flipWinding) gl.frontFace(gl.CCW);
    for (i in self.items) {
        var item = self.items[i];
        if (!item.models) continue;
        for (var j = 0; j < item.models.length; ++j) {
            if (item.models[j].model && item.models[j].bone > -1 && item.models[j].bone < self.bones.length) {
                var winding = false;
                if (item.slot == Wow.Slots.LEFTHAND) {
                    mat4.identity(self.tmpMat);
                    vec3.set(self.tmpVec, 1, -1, 1);
                    mat4.scale(self.tmpMat, self.tmpMat, self.tmpVec);
                    winding = true
                }
                item.models[j].model.setMatrix(self.matrix, self.bones[item.models[j].bone].matrix, item.models[j].attachment.position, item.slot == Wow.Slots.LEFTHAND ? self.tmpMat : null);
                item.models[j].model.update();
                item.models[j].model.draw(winding)
            }
        }
    }
    if (self.particleEmitters) {
        for (i = 0; i < self.particleEmitters.length; ++i) {
            self.particleEmitters[i].update(self.currentAnimation.index, self.time, self.renderer.delta);
            self.particleEmitters[i].draw()
        }
    }
    if (self.ribbonEmitters) {
        for (i = 0; i < self.ribbonEmitters.length; ++i) {
            self.ribbonEmitters[i].update(self.currentAnimation.index, self.time);
            self.ribbonEmitters[i].draw()
        }
    }
    for (i in self.attribs) {
        gl.disableVertexAttribArray(self.attribs[i].loc)
    }
};
ZamModelViewer.Wow.Model.prototype.initShader = function() {
    var self = this,
        gl = self.renderer.context;
    self.shaderReady = true;
    var vs = self.renderer.compileShader(gl.VERTEX_SHADER, self.vertShader);
    var fs = self.renderer.compileShader(gl.FRAGMENT_SHADER, self.fragShader);
    var program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error("Error linking shaders");
        return
    }
    self.vs = vs;
    self.fs = fs;
    self.program = program;
    self.uniforms = {
        vModelMatrix: gl.getUniformLocation(program, "uModelMatrix"),
        vViewMatrix: gl.getUniformLocation(program, "uViewMatrix"),
        vProjMatrix: gl.getUniformLocation(program, "uProjMatrix"),
        vCameraPos: gl.getUniformLocation(program, "uCameraPos"),
        vTextureMatrix: gl.getUniformLocation(program, "uTextureMatrix"),
        fHasTexture: gl.getUniformLocation(program, "uHasTexture"),
        fHasAlpha: gl.getUniformLocation(program, "uHasAlpha"),
        fBlendMode: gl.getUniformLocation(program, "uBlendMode"),
        fUnlit: gl.getUniformLocation(program, "uUnlit"),
        fColor: gl.getUniformLocation(program, "uColor"),
        fAmbientColor: gl.getUniformLocation(program, "uAmbientColor"),
        fPrimaryColor: gl.getUniformLocation(program, "uPrimaryColor"),
        fSecondaryColor: gl.getUniformLocation(program, "uSecondaryColor"),
        fLightDir1: gl.getUniformLocation(program, "uLightDir1"),
        fLightDir2: gl.getUniformLocation(program, "uLightDir2"),
        fLightDir3: gl.getUniformLocation(program, "uLightDir3"),
        fTexture: gl.getUniformLocation(program, "uTexture"),
        fAlpha: gl.getUniformLocation(program, "uAlpha")
    };
    self.attribs = {
        position: {
            loc: gl.getAttribLocation(program, "aPosition"),
            type: gl.FLOAT,
            size: 3,
            offset: 0,
            stride: 32
        },
        normal: {
            loc: gl.getAttribLocation(program, "aNormal"),
            type: gl.FLOAT,
            size: 3,
            offset: 12,
            stride: 32
        },
        texcoord: {
            loc: gl.getAttribLocation(program, "aTexCoord"),
            type: gl.FLOAT,
            size: 2,
            offset: 24,
            stride: 32
        }
    }
};
ZamModelViewer.Wow.Model.prototype.vertShader = "    attribute vec3 aPosition;    attribute vec3 aNormal;    attribute vec2 aTexCoord;        varying vec3 vNormal;    varying vec2 vTexCoord;        uniform mat4 uModelMatrix;    uniform mat4 uPanningMatrix;    uniform mat4 uViewMatrix;    uniform mat4 uProjMatrix;    uniform mat4 uTextureMatrix;    uniform vec3 uCameraPos;        void main(void) {        gl_Position = uProjMatrix * uViewMatrix * uModelMatrix * vec4(aPosition, 1);                vTexCoord = (uTextureMatrix * vec4(aTexCoord, 0, 1)).st;        vNormal = mat3(uViewMatrix * uModelMatrix) * aNormal;    }";
ZamModelViewer.Wow.Model.prototype.fragShader = "    precision mediump float;        varying vec3 vNormal;    varying vec2 vTexCoord;        uniform bool uHasTexture;    uniform bool uHasAlpha;    uniform int uBlendMode;    uniform bool uUnlit;    uniform vec4 uColor;    uniform vec4 uAmbientColor;    uniform vec4 uPrimaryColor;    uniform vec4 uSecondaryColor;    uniform vec3 uLightDir1;    uniform vec3 uLightDir2;    uniform vec3 uLightDir3;    uniform sampler2D uTexture;    uniform sampler2D uAlpha;        void main(void) {        vec4 color = vec4(1, 1, 1, 1);        if (uHasTexture) {            color = texture2D(uTexture, vTexCoord.st);        } else {            color = vec4(vTexCoord.st, 0, 1);        }                if ((uBlendMode == 1 || uBlendMode == 2 || uBlendMode == 4) && uHasAlpha) {            color.a = texture2D(uAlpha, vTexCoord.st).r;        }                color *= uColor;                if (uBlendMode == 1) {            if (color.a < 0.7) {                discard;            }        }                if (!uUnlit) {            vec4 litColor = uAmbientColor;            vec3 normal = normalize(vNormal);                        float dp = max(0.0, dot(normal, uLightDir1));            litColor += uPrimaryColor * dp;                        dp = max(0.0, dot(normal, uLightDir2));            litColor += uSecondaryColor * dp;                        dp = max(0.0, dot(normal, uLightDir3));            litColor += uSecondaryColor * dp;                        litColor = clamp(litColor, vec4(0,0,0,0), vec4(1,1,1,1));            color *= litColor;        }                gl_FragColor = color;    }";
ZamModelViewer.Wow.Model.prototype.destroy = function() {
    var self = this;
    if (!self.renderer) return;
    var gl = self.renderer.context,
        i, j;
    if (self.program) gl.deleteProgram(self.program);
    if (self.vs) gl.deleteShader(self.vs);
    if (self.fs) gl.deleteShader(self.fs);
    if (self.vb) gl.deleteBuffer(self.vb);
    if (self.ib) gl.deleteBuffer(self.ib);
    self.program = null;
    self.vs = null;
    self.fs = null;
    self.vb = null;
    self.ib = null;
    self.vbData = null;
    self.uniforms = null;
    self.attribs = null;
    if (self.compositeTexture) gl.deleteTexture(self.compositeTexture);
    if (self.npcTexture) self.npcTexture.destroy();
    if (self.bakedTextures) {
        for (i = 0; i < 11; ++i) {
            for (j in self.bakedTextures[i]) {
                self.bakedTextures[i][j].destroy()
            }
        }
    }
    if (self.specialTextures) {
        for (i in self.specialTextures) {
            self.specialTextures[i].destroy()
        }
    }
    if (self.textureOverrides) {
        for (i in self.textureOverrides) {
            self.textureOverrides[i].destroy()
        }
    }
    if (self.indices) self.indices = null;
    if (self.animLookup) self.animLookup = null;
    if (self.boneLookup) self.boneLookup = null;
    if (self.keyBoneLookup) self.keyBoneLookup = null;
    if (self.texUnitLookup) self.texUnitLookup = null;
    if (self.materialLookup) self.materialLookup = null;
    if (self.textureAnimLookup) self.textureAnimLookup = null;
    if (self.textureReplacements) self.textureReplacements = null;
    if (self.attachmentLookup) self.attachmentLookup = null;
    if (self.alphaLookup) self.alphaLookup = null;
    if (self.renderFlags)
        for (i = 0; i < self.renderFlags.length; ++i) self.renderFlags[i] = null;
    self.renderFlags = null;
    var destroyArray = function(key) {
        if (self[key]) {
            var arr = self[key];
            for (var i = 0; i < arr.length; ++i) {
                arr[i].destroy();
                arr[i] = null
            }
            self[key] = null
        }
    };
    destroyArray("vertices");
    destroyArray("animations");
    destroyArray("bones");
    destroyArray("meshes");
    destroyArray("texUnits");
    destroyArray("materials");
    destroyArray("textureAnims");
    destroyArray("attachments");
    destroyArray("colors");
    destroyArray("alphas");
    destroyArray("particleEmitters");
    destroyArray("ribbonEmitters");
    destroyArray("skins");
    destroyArray("faces");
    destroyArray("hairs");
    if (self.items) {
        for (i in self.items) {
            self.items[i].destroy();
            self.items[i] = null
        }
    }
    if (self.mount) self.mount.destroy();
    self.mount = null;
    self.renderer = null;
    self.viewer = null;
    self.model = null;
    self.items = null;
    self.textureOverrides = null;
    self.specialTextures = null;
    self.bakedTextures = null;
    self.geosets = null;
    self.slotAttachments = null;
    self.matrix = null;
    self.ambientColor = null;
    self.primaryColor = null;
    self.secondaryColor = null;
    self.lightDir1 = null;
    self.lightDir2 = null;
    self.lightDir3 = null;
    self.boundsMin = null;
    self.boundsMax = null;
    self.boundsCenter = null;
    self.boundsSize = null;
    self.tmpMat = null;
    self.tmpVec = null;
    self.tmpVec2 = null;
    self.tmpVec3 = null;
    self.tmpVec4 = null;
    self.mountMat = null
};
(function() {
    ZamModelViewer.Wow.Animated = function() {};
    ZamModelViewer.Wow.Animated.prototype = {
        destroy: function() {
            var self = this;
            for (var i = 0; i < self.data.length; ++i) self.data[i] = null;
            self.times = null;
            self.data = null;
            return null
        },
        createValue: function() {
            return this.defaultValue
        },
        defaultValue: 0,
        setDefault: function(v) {
            this.defaultValue = v
        },
        interpolate: function(v1, v2, r, result) {
            result = v1 + (v2 - v1) * r;
            return result
        },
        set: function(result, value) {
            result = value;
            return result
        },
        getDefault: function(r) {
            r = this.defaultValue;
            return r
        },
        readValue: function(r) {
            return r.getInt32()
        },
        getValue: function(time, result) {
            var self = this;
            if (result === undefined) result = self.createValue();
            else result = self.getDefault(result);
            if (self.type != 0 || self.data.length > 1) {
                if (self.times.length > 1) {
                    var maxTime = self.times[self.times.length - 1];
                    if (maxTime > 0 && time > maxTime) time %= maxTime;
                    var idx = 0,
                        numTimes = self.times.length;
                    for (var i = 0; i < numTimes; ++i) {
                        if (time >= self.times[i] && time < self.times[i + 1]) {
                            idx = i;
                            break
                        }
                    }
                    var t1 = self.times[idx],
                        t2 = self.times[idx + 1],
                        r = 0;
                    if (t1 != t2) r = (time - t1) / (t2 - t1);
                    if (self.type == 1) return self.interpolate(self.data[idx], self.data[idx + 1], r, result);
                    else {
                        result = self.set(result, self.data[idx]);
                        return result
                    }
                } else if (self.data.length > 0) {
                    result = self.set(result, self.data[0]);
                    return result
                } else {
                    return result
                }
            } else {
                if (self.data.length == 0) return result;
                else {
                    result = self.set(result, self.data[0]);
                    return result
                }
            }
        },
        read: function(r) {
            var self = this,
                i;
            self.type = r.getInt16();
            self.seq = r.getInt16();
            self.used = r.getBool();
            var numTimes = r.getInt32();
            self.times = new Array(numTimes);
            for (i = 0; i < numTimes; ++i) {
                self.times[i] = r.getInt32()
            }
            var numData = r.getInt32();
            self.data = new Array(numData);
            for (i = 0; i < numData; ++i) {
                self.data[i] = self.readValue(r)
            }
        }
    };
    ZamModelViewer.Wow.Animated.destroySet = function(dataset) {
        if (!dataset || dataset.length == 0) return;
        for (var i = 0; i < dataset.length; ++i) {
            dataset[i].destroy();
            dataset[i] = null
        }
        return null
    };
    ZamModelViewer.Wow.Animated.getValue = function(type, dataset, anim, time, result) {
        if (!result) result = type.createValue();
        else result = type.getDefault(result);
        if (!dataset || dataset.length == 0) return result;
        if (anim >= dataset.length) anim = 0;
        return dataset[anim].getValue(time, result)
    };
    ZamModelViewer.Wow.Animated.isUsed = function(dataset, anim) {
        if (!dataset || dataset.length == 0) return false;
        if (anim >= dataset.length) anim = 0;
        return dataset[anim].used
    };
    ZamModelViewer.Wow.AnimatedVec3 = function(r) {
        var self = this;
        self.read(r)
    };
    ZamModelViewer.Wow.AnimatedVec3.prototype = new ZamModelViewer.Wow.Animated;
    ZamModelViewer.Wow.AnimatedVec3.prototype.constructor = ZamModelViewer.Wow.AnimatedVec3;
    ZamModelViewer.Wow.AnimatedVec3.prototype.createValue = function() {
        return vec3.clone(this.defaultValue)
    };
    ZamModelViewer.Wow.AnimatedVec3.prototype.defaultValue = vec3.create();
    ZamModelViewer.Wow.AnimatedVec3.prototype.getDefault = function(result) {
        vec3.copy(result, this.defaultValue);
        return result
    };
    ZamModelViewer.Wow.AnimatedVec3.prototype.interpolate = function(v1, v2, r, result) {
        return vec3.lerp(result, v1, v2, r)
    };
    ZamModelViewer.Wow.AnimatedVec3.prototype.set = function(result, value) {
        result[0] = value[0];
        result[1] = value[1];
        result[2] = value[2]
    };
    ZamModelViewer.Wow.AnimatedVec3.prototype.readValue = function(r) {
        return vec3.set(vec3.create(), r.getFloat(), r.getFloat(), r.getFloat())
    };
    ZamModelViewer.Wow.AnimatedVec3.getValue = function(dataset, anim, time, result) {
        return ZamModelViewer.Wow.Animated.getValue(ZamModelViewer.Wow.AnimatedVec3.prototype, dataset, anim, time, result)
    };
    ZamModelViewer.Wow.AnimatedVec3.readSet = function(r) {
        var count = r.getInt32();
        var data = new Array(count);
        for (var i = 0; i < count; ++i) data[i] = new ZamModelViewer.Wow.AnimatedVec3(r);
        return data
    };
    ZamModelViewer.Wow.AnimatedQuat = function(r) {
        var self = this;
        self.read(r)
    };
    ZamModelViewer.Wow.AnimatedQuat.prototype = new ZamModelViewer.Wow.Animated;
    ZamModelViewer.Wow.AnimatedQuat.prototype.constructor = ZamModelViewer.Wow.AnimatedQuat;
    ZamModelViewer.Wow.AnimatedQuat.prototype.createValue = function() {
        return quat.clone(this.defaultValue)
    };
    ZamModelViewer.Wow.AnimatedQuat.prototype.defaultValue = quat.create();
    ZamModelViewer.Wow.AnimatedQuat.prototype.getDefault = function(result) {
        quat.copy(result, this.defaultValue);
        return result
    };
    ZamModelViewer.Wow.AnimatedQuat.prototype.interpolate = function(v1, v2, r, result) {
        return quat.slerp(result, v1, v2, r)
    };
    ZamModelViewer.Wow.AnimatedQuat.prototype.set = function(result, value) {
        result[0] = value[0];
        result[1] = value[1];
        result[2] = value[2];
        result[3] = value[3]
    };
    ZamModelViewer.Wow.AnimatedQuat.prototype.readValue = function(r) {
        return quat.set(quat.create(), r.getFloat(), r.getFloat(), r.getFloat(), r.getFloat())
    };
    ZamModelViewer.Wow.AnimatedQuat.getValue = function(dataset, anim, time, result) {
        return ZamModelViewer.Wow.Animated.getValue(ZamModelViewer.Wow.AnimatedQuat.prototype, dataset, anim, time, result)
    };
    ZamModelViewer.Wow.AnimatedUint16 = function(r) {
        var self = this;
        self.read(r)
    };
    ZamModelViewer.Wow.AnimatedUint16.prototype = new ZamModelViewer.Wow.Animated;
    ZamModelViewer.Wow.AnimatedUint16.prototype.constructor = ZamModelViewer.Wow.AnimatedUint16;
    ZamModelViewer.Wow.AnimatedUint16.prototype.readValue = function(r) {
        return r.getUint16()
    };
    ZamModelViewer.Wow.AnimatedUint16.getValue = function(dataset, anim, time, result) {
        return ZamModelViewer.Wow.Animated.getValue(ZamModelViewer.Wow.AnimatedUint16.prototype, dataset, anim, time, result)
    };
    ZamModelViewer.Wow.AnimatedUint16.readSet = function(r) {
        var count = r.getInt32();
        var data = new Array(count);
        for (var i = 0; i < count; ++i) data[i] = new ZamModelViewer.Wow.AnimatedUint16(r);
        return data
    };
    ZamModelViewer.Wow.AnimatedFloat = function(r) {
        var self = this;
        self.read(r)
    };
    ZamModelViewer.Wow.AnimatedFloat.prototype = new ZamModelViewer.Wow.Animated;
    ZamModelViewer.Wow.AnimatedFloat.prototype.constructor = ZamModelViewer.Wow.AnimatedFloat;
    ZamModelViewer.Wow.AnimatedFloat.prototype.readValue = function(r) {
        return r.getFloat()
    };
    ZamModelViewer.Wow.AnimatedFloat.getValue = function(dataset, anim, time, result) {
        return ZamModelViewer.Wow.Animated.getValue(ZamModelViewer.Wow.AnimatedFloat.prototype, dataset, anim, time, result)
    };
    ZamModelViewer.Wow.AnimatedFloat.readSet = function(r) {
        var count = r.getInt32();
        var data = new Array(count);
        for (var i = 0; i < count; ++i) data[i] = new ZamModelViewer.Wow.AnimatedFloat(r);
        return data
    };
    ZamModelViewer.Wow.AnimatedUint8 = function(r) {
        var self = this;
        self.read(r)
    };
    ZamModelViewer.Wow.AnimatedUint8.prototype = new ZamModelViewer.Wow.Animated;
    ZamModelViewer.Wow.AnimatedUint8.prototype.constructor = ZamModelViewer.Wow.AnimatedUint8;
    ZamModelViewer.Wow.AnimatedUint8.prototype.readValue = function(r) {
        return r.getUint8()
    };
    ZamModelViewer.Wow.AnimatedUint8.getValue = function(dataset, anim, time, result) {
        return ZamModelViewer.Wow.Animated.getValue(ZamModelViewer.Wow.AnimatedUint8.prototype, dataset, anim, time, result)
    };
    ZamModelViewer.Wow.AnimatedUint8.readSet = function(r) {
        var count = r.getInt32();
        var data = new Array(count);
        for (var i = 0; i < count; ++i) data[i] = new ZamModelViewer.Wow.AnimatedUint8(r);
        return data
    };
    ZamModelViewer.Wow.SAnimated = function() {};
    ZamModelViewer.Wow.SAnimated.prototype = {
        destroy: function() {
            var self = this;
            for (var i = 0; i < self.data.length; ++i) self.data[i] = null;
            self.times = null;
            self.data = null;
            return null
        },
        createValue: function() {
            return this.defaultValue
        },
        defaultValue: 0,
        setDefault: function(v) {
            this.defaultValue = v
        },
        interpolate: function(v1, v2, r, result) {
            result = v1 + (v2 - v1) * r;
            return result
        },
        set: function(result, value) {
            result = value;
            return result
        },
        getDefault: function(r) {
            r = this.defaultValue;
            return r
        },
        readValue: function(r) {
            return r.getInt32()
        },
        getValue: function(time, result) {
            var self = this;
            if (result === undefined) result = self.createValue();
            else result = self.getDefault(result);
            if (self.data.length > 1 && self.times.length > 1) {
                var maxTime = self.times[self.times.length - 1];
                if (maxTime > 0 && time > maxTime) time %= maxTime;
                var idx = 0,
                    numTimes = self.times.length;
                for (var i = 0; i < numTimes; ++i) {
                    if (time >= self.times[i] && time < self.times[i + 1]) {
                        idx = i;
                        break
                    }
                }
                var t1 = self.times[idx],
                    t2 = self.times[idx + 1],
                    r = 0;
                if (t1 != t2) r = (time - t1) / (t2 - t1);
                return self.interpolate(self.data[idx], self.data[idx + 1], r, result)
            } else if (self.data.length > 0) {
                result = self.set(result, self.data[0]);
                return result
            } else {
                return result
            }
        },
        read: function(r) {
            var self = this,
                i;
            var numTimes = r.getInt32();
            self.times = new Array(numTimes);
            for (i = 0; i < numTimes; ++i) {
                self.times[i] = r.getUint32()
            }
            var numData = r.getInt32();
            self.data = new Array(numData);
            for (i = 0; i < numData; ++i) {
                self.data[i] = self.readValue(r)
            }
        }
    };
    ZamModelViewer.Wow.SAnimatedVec2 = function(r) {
        var self = this;
        self.read(r)
    };
    ZamModelViewer.Wow.SAnimatedVec2.prototype = new ZamModelViewer.Wow.SAnimated;
    ZamModelViewer.Wow.SAnimatedVec2.prototype.constructor = ZamModelViewer.Wow.SAnimatedVec2;
    ZamModelViewer.Wow.SAnimatedVec2.prototype.createValue = function() {
        return vec2.clone(this.defaultValue)
    };
    ZamModelViewer.Wow.SAnimatedVec2.prototype.defaultValue = vec2.create();
    ZamModelViewer.Wow.SAnimatedVec2.prototype.getDefault = function(result) {
        vec2.copy(result, this.defaultValue);
        return result
    };
    ZamModelViewer.Wow.SAnimatedVec2.prototype.interpolate = function(v1, v2, r, result) {
        return vec2.lerp(result, v1, v2, r)
    };
    ZamModelViewer.Wow.SAnimatedVec2.prototype.set = function(result, value) {
        result[0] = value[0];
        result[1] = value[1];
        result[2] = value[2]
    };
    ZamModelViewer.Wow.SAnimatedVec2.prototype.readValue = function(r) {
        return vec2.set(vec2.create(), r.getFloat(), r.getFloat())
    };
    ZamModelViewer.Wow.SAnimatedVec2.getValue = function(dataset, anim, time, result) {
        return ZamModelViewer.Wow.Animated.getValue(ZamModelViewer.Wow.SAnimatedVec2.prototype, dataset, anim, time, result)
    };
    ZamModelViewer.Wow.SAnimatedVec3 = function(r) {
        var self = this;
        self.read(r)
    };
    ZamModelViewer.Wow.SAnimatedVec3.prototype = new ZamModelViewer.Wow.SAnimated;
    ZamModelViewer.Wow.SAnimatedVec3.prototype.constructor = ZamModelViewer.Wow.SAnimatedVec3;
    ZamModelViewer.Wow.SAnimatedVec3.prototype.createValue = function() {
        return vec3.clone(this.defaultValue)
    };
    ZamModelViewer.Wow.SAnimatedVec3.prototype.defaultValue = vec3.create();
    ZamModelViewer.Wow.SAnimatedVec3.prototype.getDefault = function(result) {
        vec3.copy(result, this.defaultValue);
        return result
    };
    ZamModelViewer.Wow.SAnimatedVec3.prototype.interpolate = function(v1, v2, r, result) {
        return vec3.lerp(result, v1, v2, r)
    };
    ZamModelViewer.Wow.SAnimatedVec3.prototype.set = function(result, value) {
        result[0] = value[0];
        result[1] = value[1];
        result[2] = value[2]
    };
    ZamModelViewer.Wow.SAnimatedVec3.prototype.readValue = function(r) {
        return vec3.set(vec3.create(), r.getFloat(), r.getFloat(), r.getFloat())
    };

    ZamModelViewer.Wow.SAnimatedVec3.getValue = function(dataset, anim, time, result) {
        return ZamModelViewer.Wow.Animated.getValue(ZamModelViewer.Wow.SAnimatedVec3.prototype, dataset, anim, time, result)
    };
    ZamModelViewer.Wow.SAnimatedUint16 = function(r) {
        var self = this;
        self.read(r)
    };
    ZamModelViewer.Wow.SAnimatedUint16.prototype = new ZamModelViewer.Wow.SAnimated;
    ZamModelViewer.Wow.SAnimatedUint16.prototype.constructor = ZamModelViewer.Wow.SAnimatedUint16;
    ZamModelViewer.Wow.SAnimatedUint16.prototype.readValue = function(r) {
        return r.getUint16()
    };
    ZamModelViewer.Wow.SAnimatedUint16.getValue = function(dataset, anim, time, result) {
        return ZamModelViewer.Wow.SAnimated.getValue(ZamModelViewer.Wow.SAnimatedUint16.prototype, dataset, anim, time, result)
    }
})();
ZamModelViewer.Wow.Texture = function(model, index, file) {
    var self = this,
        gl = model.renderer.context;
    self.model = model;
    self.index = index;
    self.url = model.opts.contentPath + "textures/" + file;
    self.alphaUrl = self.url.replace(".png", ".alpha.png");
    self.texture = null;
    self.alphaTexture = null;
    self.mergedImg = null;
    (function(self, gl) {
        self.img = new Image;
        self.img.crossOrigin = "";
        self.img.onload = function() {
            self.img.loaded = true;
            self.texture = gl.createTexture();
            gl.bindTexture(gl.TEXTURE_2D, self.texture);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, self.img);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
        };
        self.img.onerror = function() {
            self.img = null
        };
        self.img.src = self.url;
        self.alphaImg = new Image;
        self.alphaImg.crossOrigin = "";
        self.alphaImg.onload = function() {
            if (self.alphaImg.width == 0 && self.alphaImg.height == 0) {
                self.alphaImg = null
            } else {
                self.alphaImg.loaded = true;
                self.alphaTexture = gl.createTexture();
                gl.bindTexture(gl.TEXTURE_2D, self.alphaTexture);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, self.alphaImg);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
            }
        };
        self.alphaImg.onerror = function() {
            self.alphaImg = null
        };
        self.alphaImg.src = self.alphaUrl
    })(self, gl)
};
ZamModelViewer.Wow.Texture.prototype = {
    ready: function() {
        var self = this;
        if (self.img && !self.img.loaded) return false;
        if (self.alphaImg && !self.alphaImg.loaded) return false;
        return true
    },
    destroy: function() {
        var self = this;
        if (!self.model) return;
        var gl = self.model.renderer.context;
        if (self.texture) gl.deleteTexture(self.texture);
        if (self.alphaTexture) gl.deleteTexture(self.alphaTexture);
        self.texture = null;
        self.alphaTexture = null;
        self.img = self.alphaImg = self.mergedImg = null;
        self.model = null
    },
    mergeImages: function() {
        var self = this,
            i;
        if (self.mergedImg) return true;
        if (!self.ready()) return false;
        if (!self.alphaImg) {
            self.mergedImg = self.img;
            return true
        }
        var canvas = document.createElement("canvas");
        canvas.width = self.img.width;
        canvas.height = self.img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(self.img, 0, 0, self.img.width, self.img.height);
        var acanvas = document.createElement("canvas");
        acanvas.width = self.img.width;
        acanvas.height = self.img.height;
        var actx = acanvas.getContext("2d");
        actx.drawImage(self.alphaImg, 0, 0, self.alphaImg.width, self.alphaImg.height, 0, 0, self.img.width, self.img.height);
        var rgba = ctx.getImageData(0, 0, self.img.width, self.img.height),
            p = rgba.data;
        var alpha = actx.getImageData(0, 0, self.img.width, self.img.height),
            a = alpha.data;
        for (i = 0; i < p.length; i += 4) {
            p[i + 3] = a[i]
        }
        ctx.putImageData(rgba, 0, 0);
        self.mergedImg = canvas;
        return true
    }
};
ZamModelViewer.Wow.Item = function(model, slot, id, race, gender) {
    var self = this;
    self.model = model;
    self.slot = slot;
    self.uniqueSlot = ZamModelViewer.Wow.UniqueSlots[slot];
    self.sortValue = ZamModelViewer.Wow.SlotOrder[slot];
    self.models = null;
    self.geosets = null;
    self.textures = null;
    self.geoA = 0;
    self.geoB = 0;
    self.geoC = 0;
    self.loaded = false;
    if (id) {
        self.load(id, race, gender)
    }
};
ZamModelViewer.Wow.Item.prototype = {
    destroy: function() {
        var self = this,
            i;
        self.model = null;
        if (self.models) {
            for (i = 0; i < self.models.length; ++i) {
                if (self.models[i].model) self.models[i].model.destroy();
                self.models[i].model = null;
                self.models[i].attachment = null;
                self.models[i] = null
            }
            self.models = null
        }
        if (self.textures) {
            for (i = 0; i < self.textures; ++i) {
                if (self.textures[i].texture) self.textures[i].texture.destroy();
                self.textures[i].texture = null;
                self.textures[i] = null
            }
            self.textures = null
        }
        self.geosets = null
    },
    load: function(id, race, gender) {
        var self = this,
            Wow = ZamModelViewer.Wow;
        self.id = id;
        if (self.slot == Wow.Slots.SHOULDER) {
            self.models = new Array(2)
        } else if (Wow.SlotType[self.slot] != Wow.Types.ARMOR) {
            self.models = new Array(1)
        }
        if (self.models) {
            for (var i = 0; i < self.models.length; ++i) {
                self.models[i] = {
                    race: race,
                    gender: gender,
                    bone: -1,
                    attachment: null,
                    model: null
                };
                var modelInfo = {
                    type: Wow.SlotType[self.slot],
                    id: self.id,
                    parent: self.model
                };
                if (self.slot == Wow.Slots.SHOULDER) {
                    modelInfo.shoulder = i + 1
                }
                self.models[i].model = new Wow.Model(self.model.renderer, self.model.viewer, modelInfo, i)
            }
            self.loaded = true
        } else {
            var url = self.model.opts.contentPath + "meta/armor/" + self.slot + "/" + self.id + ".json";
            $.getJSON(url, function(data) {
                self.loadMeta(data)
            })
        }
    },
    loadMeta: function(meta) {
        var self = this,
            Wow = ZamModelViewer.Wow;
        self.slot = parseInt(meta.Slot);
        if (meta.Geosets) {
            self.geosets = [];
            for (var idx in meta.Geosets) {
                self.geosets.push({
                    index: parseInt(idx),
                    value: meta.Geosets[idx]
                })
            }
        }
        if (meta.GenderTextures) {
            self.textures = [];
            for (var g in meta.GenderTextures) {
                var gender = parseInt(g);
                if (g == self.model.gender && !self.model.npcTexture) {
                    var textures = meta.GenderTextures[g];
                    for (var r in textures) {
                        var region = parseInt(r);
                        var texture = {
                            region: region,
                            gender: gender,
                            file: textures[r],
                            texture: null
                        };
                        if (region > 0) {
                            texture.texture = new Wow.Texture(self.model, r, textures[r])
                        } else if (self.slot == Wow.Slots.CAPE) {
                            self.model.textureOverrides[2] = new Wow.Texture(self.model, 2, textures[r])
                        }
                        self.textures.push(texture)
                    }
                }
            }
        }
        self.geoA = meta.GeosetA;
        self.geoB = meta.GeosetB;
        self.geoC = meta.GeosetC;
        if (self.slot == Wow.Slots.HEAD) {
            self.model.hairVis = meta.ShowHair == 0;
            self.model.faceVis = meta.ShowFacial1 == 0
        } else if (self.slot == Wow.Slots.BELT && meta.GenderModels && meta.GenderModels[self.model.gender]) {
            var model = {
                race: 0,
                gender: 0,
                bone: -1,
                attachment: null,
                model: null
            };
            var modelInfo = {
                type: Wow.SlotType[self.slot],
                id: self.id,
                parent: self.model
            };
            model.model = new Wow.Model(self.model.renderer, self.model.viewer, modelInfo, 0, true);
            model.model.loadMeta(meta, Wow.Types.ARMOR);
            self.models = [model]
        } else if (self.slot == Wow.Slots.PANTS && self.geoC > 0) {
            self.sortValue += 2
        } else if (self.slot == Wow.Slots.HANDS && self.geoA > 0) {
            self.sortValue += 2
        }
        self.loaded = true;
        self.model.updateMeshes()
    }
};
ZamModelViewer.Wow.Vertex = function(r) {
    var self = this;
    self.position = [r.getFloat(), r.getFloat(), r.getFloat()];
    self.normal = [r.getFloat(), r.getFloat(), r.getFloat(), 0];
    self.u = r.getFloat();
    self.v = r.getFloat();
    self.weights = [r.getUint8(), r.getUint8(), r.getUint8(), r.getUint8()];
    self.bones = [r.getUint8(), r.getUint8(), r.getUint8(), r.getUint8()];
    self.transPosition = vec3.clone(self.position);
    self.transNormal = vec4.clone(self.normal)
};
ZamModelViewer.Wow.Vertex.prototype = {
    destroy: function() {
        var self = this;
        self.position = null;
        self.normal = null;
        self.weights = null;
        self.bones = null;
        self.transPosition = null;
        self.transNormal = null
    }
};
ZamModelViewer.Wow.Animation = function(r) {
    var self = this,
        Wow = ZamModelViewer.Wow;
    self.id = r.getUint16();
    self.subId = r.getUint16();
    self.flags = r.getUint32();
    self.length = r.getUint32();
    self.speed = r.getFloat();
    self.next = r.getInt16();
    self.index = r.getUint16();
    self.available = r.getBool();
    if (self.available) {
        self.dbcFlags = r.getUint32();
        self.name = r.getString();
        var numData = r.getInt32();
        if (numData > 0) {
            self.translation = new Array(numData);
            self.rotation = new Array(numData);
            self.scale = new Array(numData);
            for (var i = 0; i < numData; ++i) {
                self.translation[i] = new Wow.AnimatedVec3(r);
                self.rotation[i] = new Wow.AnimatedQuat(r);
                self.scale[i] = new Wow.AnimatedVec3(r)
            }
        }
    }
};
ZamModelViewer.Wow.Animation.prototype = {
    destroy: function() {
        var self = this;
        if (!self.translation) return;
        for (var i = 0; i < self.translation.length; ++i) {
            self.translation[i].destroy();
            self.translation[i] = null;
            self.rotation[i].destroy();
            self.rotation[i] = null;
            self.scale[i].destroy();
            self.scale[i] = null
        }
        self.translation = null;
        self.rotation = null;
        self.scale = null
    }
};
ZamModelViewer.Wow.Bone = function(model, index, r) {
    var self = this;
    self.model = model;
    self.index = index;
    self.keyId = r.getInt32();
    self.parent = r.getInt16();
    self.mesh = r.getUint16();
    self.flags = r.getUint32();
    self.pivot = [r.getFloat(), r.getFloat(), r.getFloat()];
    self.transformedPivot = vec3.create();
    self.matrix = mat4.create();
    self.tmpVec = vec3.create();
    self.tmpQuat = quat.create();
    self.tmpMat = mat4.create();
    self.hidden = false;
    self.updated = false
};
ZamModelViewer.Wow.Bone.prototype = {
    destroy: function() {
        var self = this;
        self.model = null;
        self.pivot = null;
        self.transformedPivot = null;
        self.matrix = null;
        self.tmpVec = null;
        self.tmpQuat = null;
        self.tmpMat = null
    },
    hide: function() {
        var self = this;
        self.hidden = true;
        for (var i = 0; i < 16; ++i) self.matrix[i] = 0
    },
    update: function(time) {
        var self = this,
            Wow = ZamModelViewer.Wow;
        if (self.hidden) {
            self.hide();
            return
        }
        if (self.model.model.type == Wow.Types.CHARACTER && !self.model.isHD) {
            if (self.model.race == Wow.Races.HUMAN && self.model.gender == Wow.Genders.MALE && self.index == 24) {
                self.hide()
            } else if (self.model.race == Wow.Races.WORGEN && self.model.gender == Wow.Genders.FEMALE && self.model.boneLookup[58] == self.index) {
                self.hide()
            }
        }
        if (self.updated) return;
        self.updated = true;
        if (!self.model || !self.model.animations) return;
        mat4.identity(self.matrix);
        var anim = self.model.currentAnimation;
        if (!anim || !anim.translation || !anim.rotation || !anim.scale) return;
        var billboard = (self.flags & 8) > 0;
        if (anim.translation[self.index].used || anim.rotation[self.index].used || anim.scale[self.index].used || billboard) {
            mat4.translate(self.matrix, self.matrix, self.pivot);
            if (anim.translation[self.index].used) {
                anim.translation[self.index].getValue(time, self.tmpVec);
                mat4.translate(self.matrix, self.matrix, self.tmpVec)
            }
            if (anim.rotation[self.index].used) {
                anim.rotation[self.index].getValue(time, self.tmpQuat);
                mat4.fromQuat(self.tmpMat, self.tmpQuat);
                mat4.transpose(self.tmpMat, self.tmpMat);
                mat4.multiply(self.matrix, self.matrix, self.tmpMat)
            }
            if (anim.scale[self.index].used) {
                anim.scale[self.index].getValue(time, self.tmpVec);
                if (self.tmpVec[0] > 10 || Math.abs(self.tmpVec[0]) < 1e-4) self.tmpVec[0] = 1;
                if (self.tmpVec[1] > 10 || Math.abs(self.tmpVec[1]) < 1e-4) self.tmpVec[1] = 1;
                if (self.tmpVec[2] > 10 || Math.abs(self.tmpVec[2]) < 1e-4) self.tmpVec[2] = 1;
                mat4.scale(self.matrix, self.matrix, self.tmpVec)
            }
            if (billboard) {
                var yRot = -self.model.renderer.zenith + Math.PI / 2;
                var zRot;
                if (self.model.model.type == Wow.Types.ITEM) {
                    zRot = self.model.renderer.azimuth - Math.PI
                } else {
                    zRot = self.model.renderer.azimuth - Math.PI * 1.5
                }
                mat4.identity(self.matrix);
                mat4.translate(self.matrix, self.matrix, self.pivot);
                mat4.rotateZ(self.matrix, self.matrix, zRot);
                mat4.rotateY(self.matrix, self.matrix, yRot)
            }
            mat4.translate(self.matrix, self.matrix, vec3.negate(self.tmpVec, self.pivot))
        }
        if (self.parent > -1) {
            self.model.bones[self.parent].update(time);
            mat4.multiply(self.matrix, self.model.bones[self.parent].matrix, self.matrix)
        }
        vec3.transformMat4(self.transformedPivot, self.pivot, self.matrix)
    }
};
ZamModelViewer.Wow.Mesh = function(r) {
    var self = this;
    self.id = r.getUint16();
    self.indexWrap = r.getUint16();
    self.vertexStart = r.getUint16();
    self.vertexCount = r.getUint16();
    self.indexStart = r.getUint16() + self.indexWrap * 65536;
    self.indexCount = r.getUint16();
    self.centerOfMass = [r.getFloat(), r.getFloat(), r.getFloat()];
    self.centerBounds = [r.getFloat(), r.getFloat(), r.getFloat()];
    self.radius = r.getFloat()
};
ZamModelViewer.Wow.Mesh.prototype = {
    destroy: function() {
        var self = this;
        self.centerOfMass = null;
        self.centerBounds = null
    }
};
ZamModelViewer.Wow.TexUnit = function(r) {
    var self = this;
    self.flags = r.getUint16();
    self.shading1 = r.getUint8();
    self.shading2 = r.getUint8();
    self.meshIndex = r.getUint16();
    self.mode = r.getUint16();
    self.colorIndex = r.getInt16();
    self.alphaIndex = r.getInt16();
    self.materialIndex = r.getInt16();
    self.textureAnimIndex = r.getInt16();
    self.renderFlagIndex = r.getUint16();
    self.texUnitIndex = r.getUint16();
    self.show = true;
    self.model = null;
    self.mesh = null;
    self.meshId = 0;
    self.renderFlag = null;
    self.material = null;
    self.textureAnim = null;
    self.color = null;
    self.alpha = null;
    self.unlit = false;
    self.cull = false;
    self.noZWrite = false;
    self.tmpColor = vec4.create();
    self.textureMatrix = mat4.create();
    self.tmpVec = vec3.create();
    self.tmpQuat = quat.create()
};
ZamModelViewer.Wow.TexUnit.prototype = {
    destroy: function() {
        var self = this;
        self.model = null;
        self.mesh = null;
        self.renderFlag = null;
        self.material = null;
        self.textureAnim = null;
        self.color = null;
        self.alpha = null;
        self.tmpColor = null;
        self.textureMatrix = null;
        self.tmpVec = null;
        self.tmpQuat = null
    },
    draw: function() {
        var self = this,
            gl = self.model.renderer.context,
            anim = self.model.currentAnimation.index,
            time = self.model.time;
        self.tmpColor[0] = self.tmpColor[1] = self.tmpColor[2] = self.tmpColor[3] = 1;
        if (self.color) {
            self.color.getValue(anim, time, self.tmpColor)
        }
        if (self.alpha) {
            self.tmpColor[3] *= self.alpha.getValue(anim, time)
        }
        if (self.tmpColor[3] <= .001) return;
        var blend = self.renderFlag.blend;
        if (self.meshId > 1500 && self.meshId < 1600) blend = 0;
        gl.uniform4fv(self.model.uniforms.fColor, self.tmpColor);
        gl.uniform1i(self.model.uniforms.fBlendMode, blend);
        gl.uniform1i(self.model.uniforms.fUnlit, self.unlit);
        var texture = null,
            alphaTexture = null;
        if (self.material) {
            if (self.material.type == 1) {
                if (self.model.npcTexture) {
                    texture = self.model.npcTexture.texture;
                    alphaTexture = self.model.npcTexture.alphaTexture
                } else if (self.model.compositeTexture) {
                    texture = self.model.compositeTexture
                }
            } else if (self.material.texture) {
                texture = self.material.texture.texture;
                alphaTexture = self.material.texture.alphaTexture
            } else if (((self.model.model.type < 8 || self.model.model.type > 32) && self.material.type == 2 || self.material.type >= 11) && self.model.textureOverrides[self.material.index]) {
                texture = self.model.textureOverrides[self.material.index].texture;
                alphaTexture = self.model.textureOverrides[self.material.index].alphaTexture
            } else if (self.material.type != -1 && self.model.textureOverrides[self.material.type]) {
                texture = self.model.textureOverrides[self.material.type].texture;
                alphaTexture = self.model.textureOverrides[self.material.type].alphaTexture
            } else if (self.material.type != -1 && self.model.specialTextures[self.material.type]) {
                texture = self.model.specialTextures[self.material.type].texture;
                alphaTexture = self.model.specialTextures[self.material.type].alphaTexture
            } else if (!self.material.filename) {
                var mat = self.model.materials[self.materialIndex];
                if (mat.texture) {
                    texture = mat.texture.texture;
                    alphaTexture = mat.texture.alphaTexture
                }
            }
        }
        if (texture) {
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, texture);
            gl.uniform1i(self.model.uniforms.fTexture, 0)
        }
        if (alphaTexture) {
            gl.activeTexture(gl.TEXTURE1);
            gl.bindTexture(gl.TEXTURE_2D, alphaTexture);
            gl.uniform1i(self.model.uniforms.fAlpha, 1)
        }
        gl.uniform1i(self.model.uniforms.fHasTexture, texture ? 1 : 0);
        gl.uniform1i(self.model.uniforms.fHasAlpha, alphaTexture ? 1 : 0);
        mat4.identity(self.textureMatrix);
        if (self.textureAnim) {
            var rotTrans = false;
            if (self.textureAnim.translation) {
                ZamModelViewer.Wow.AnimatedVec3.getValue(self.textureAnim.translation, anim, time, self.tmpVec);
                rotTrans = true
            } else {
                vec3.set(self.tmpVec, 0, 0, 0)
            }
            if (self.textureAnim.rotation) {
                ZamModelViewer.Wow.AnimatedQuat.getValue(self.textureAnim.rotation, anim, time, self.tmpQuat);
                rotTrans = true
            } else {
                quat.set(self.tmpQuat, 0, 0, 0, 1)
            }
            if (rotTrans) mat4.fromRotationTranslation(self.textureMatrix, self.tmpQuat, self.tmpVec);
            if (self.textureAnim.scale && ZamModelViewer.Wow.Animated.isUsed(self.textureAnim.scale, anim)) {
                ZamModelViewer.Wow.AnimatedVec3.getValue(self.textureAnim.scale, anim, time, self.tmpVec);
                mat4.scale(self.textureMatrix, self.textureMatrix, self.tmpVec)
            }
        }
        gl.uniformMatrix4fv(self.model.uniforms.vTextureMatrix, false, self.textureMatrix);
        if (blend == 0 || blend == 1) {
            gl.blendFunc(gl.ONE, gl.ZERO)
        } else if (blend == 2) {
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
        } else if (blend == 3) {
            gl.blendFunc(gl.SRC_COLOR, gl.ONE)
        } else if (blend == 4) {
            if (self.mode == 1 || self.mode == 2) {
                gl.blendFunc(gl.SRC_ALPHA, gl.ONE)
            } else {
                gl.blendFunc(gl.ONE, gl.ONE)
            }
        } else if (blend == 5) {
            if (self.mode == 1) {
                gl.blendFunc(gl.ZERO, gl.SRC_COLOR)
            } else {
                gl.blendFunc(gl.DST_COLOR, gl.SRC_COLOR)
            }
        } else if (blend == 6) {
            gl.blendFunc(gl.DST_COLOR, gl.SRC_COLOR)
        } else {
            gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA)
        }
        if (self.cull) {
            gl.enable(gl.CULL_FACE)
        } else {
            gl.disable(gl.CULL_FACE)
        }
        if (self.noZWrite) {
            gl.depthMask(false)
        } else {
            gl.depthMask(true)
        }
        gl.drawElements(gl.TRIANGLES, self.mesh.indexCount, gl.UNSIGNED_SHORT, self.mesh.indexStart * 2)
    },
    setup: function(model) {
        var self = this;
        self.model = model;
        self.mesh = model.meshes[self.meshIndex];
        self.meshId = self.mesh.id;
        self.renderFlag = model.renderFlags[self.renderFlagIndex];
        self.unlit = (self.renderFlag.flags & 1) > 0;
        self.cull = (self.renderFlag.flags & 4) == 0;
        self.noZWrite = (self.renderFlag.flags & 16) > 0;
        if (self.materialIndex > -1 && self.materialIndex < model.materialLookup.length) {
            var matIdx = model.materialLookup[self.materialIndex];
            if (matIdx > -1 && matIdx < model.materials.length) {
                self.material = model.materials[matIdx]
            }
        }
        if (self.textureAnimIndex > -1 && self.textureAnimIndex < model.textureAnimLookup.length) {
            var animIdx = model.textureAnimLookup[self.textureAnimIndex];
            if (animIdx > -1 && animIdx < model.textureAnims.length) {
                self.textureAnim = model.textureAnims[animIdx]
            }
        }
        if (self.colorIndex > -1 && self.colorIndex < model.colors.length) {
            self.color = model.colors[self.colorIndex]
        }
        if (self.alphaIndex > -1 && self.alphaIndex < model.alphaLookup.length) {
            var alphaIdx = model.alphaLookup[self.alphaIndex];
            if (alphaIdx > -1 && alphaIdx < model.alphas.length) {
                self.alpha = model.alphas[alphaIdx]
            }
        }
    }
};
ZamModelViewer.Wow.RenderFlag = function(r) {
    var self = this;
    self.flags = r.getUint16();
    self.blend = r.getUint16()
};
ZamModelViewer.Wow.Material = function(model, index, r) {
    var self = this;
    self.model = model;
    self.index = index;
    self.type = r.getInt32();
    self.flags = r.getUint32();
    self.filename = r.getString();
    self.texture = null;
    self.load()
};
ZamModelViewer.Wow.Material.prototype = {
    destroy: function() {
        var self = this;
        self.model = null;
        if (self.texture) self.texture.destroy();
        self.texture = null
    },
    load: function() {
        var self = this;
        if (self.filename.length == 0) return;
        self.texture = new ZamModelViewer.Wow.Texture(self.model, 0, self.filename)
    }
};
ZamModelViewer.Wow.TextureAnimation = function(r) {
    var Wow = ZamModelViewer.Wow;
    var self = this,
        i;
    var numTrans = r.getInt32();
    if (numTrans > 0) {
        self.translation = new Array(numTrans);
        for (i = 0; i < numTrans; ++i) self.translation[i] = new Wow.AnimatedVec3(r)
    } else self.translation = null;
    var numRot = r.getInt32();
    if (numRot > 0) {
        self.rotation = new Array(numRot);
        for (i = 0; i < numRot; ++i) self.rotation[i] = new Wow.AnimatedQuat(r)
    } else self.rotation = null;
    var numScale = r.getInt32();
    if (numScale > 0) {
        self.scale = new Array(numScale);
        for (i = 0; i < numScale; ++i) self.scale[i] = new Wow.AnimatedVec3(r)
    } else self.scale = null
};
ZamModelViewer.Wow.TextureAnimation.prototype = {
    destroy: function() {
        var self = this,
            i;
        if (self.translation) {
            for (i = 0; i < self.translation.length; ++i) self.translation[i] = self.translation[i].destroy();
            self.translation = null
        }
        if (self.rotation) {
            for (i = 0; i < self.rotation.length; ++i) self.rotation[i] = self.rotation[i].destroy();
            self.rotation = null
        }
        if (self.scale) {
            for (i = 0; i < self.scale.length; ++i) self.scale[i] = self.scale[i].destroy();
            self.scale = null
        }
    }
};
ZamModelViewer.Wow.Attachment = function(r) {
    var self = this;
    self.id = r.getInt32();
    self.bone = r.getInt32();
    self.position = [r.getFloat(), r.getFloat(), r.getFloat()];
    self.slot = -1
};
ZamModelViewer.Wow.Attachment.prototype = {
    destroy: function() {
        var self = this;
        self.position = null
    }
};
ZamModelViewer.Wow.Color = function(r) {
    var Wow = ZamModelViewer.Wow;
    var self = this,
        i;
    var numRgb = r.getInt32();
    if (numRgb > 0) {
        self.rgb = new Array(numRgb);
        for (i = 0; i < numRgb; ++i) {
            self.rgb[i] = new Wow.AnimatedVec3(r)
        }
    }
    var numAlpha = r.getInt32();
    if (numAlpha > 0) {
        self.alpha = new Array(numAlpha);
        for (i = 0; i < numAlpha; ++i) {
            self.alpha[i] = new Wow.AnimatedUint16(r)
        }
    }
};
ZamModelViewer.Wow.Color.prototype = {
    destroy: function() {
        var self = this,
            i;
        if (self.rgb) {
            for (i = 0; i < self.rgb.length; ++i) self.rgb[i] = self.rgb[i].destroy();
            self.rgb = null
        }
        if (self.alpha) {
            for (i = 0; i < self.alpha.length; ++i) self.alpha[i] = self.alpha[i].destroy();
            self.alpha = null
        }
    },
    rgbUsed: function(anim) {
        var self = this;
        if (!self.rgb) return false;
        if (anim < self.rgb.length) return self.rgb[anim].used;
        else return self.rgb[0].used
    },
    alphaUsed: function(anim) {
        var self = this;
        if (!self.alpha) return false;
        if (anim < self.alpha.length) return self.alpha[anim].used;
        else return self.alpha[0].used
    },
    used: function(anim) {
        var self = this;
        return self.rgbUsed(anim) || self.alphaUsed(anim)
    },
    getValue: function(anim, time, result) {
        var self = this;
        if (!result) result = [1, 1, 1, 1];
        else result[0] = result[1] = result[2] = result[3] = 1;
        if (self.rgbUsed(anim)) ZamModelViewer.Wow.AnimatedVec3.getValue(self.rgb, anim, time, result);
        if (self.alphaUsed(anim)) result[3] = ZamModelViewer.Wow.AnimatedUint16.getValue(self.alpha, anim, time, result[3]) / 32767;
        return result
    }
};
ZamModelViewer.Wow.Alpha = function(r) {
    var self = this;
    var count = r.getInt32();
    self.data = new Array(count);
    for (var i = 0; i < count; ++i) {
        self.data[i] = new ZamModelViewer.Wow.AnimatedUint16(r)
    }
};
ZamModelViewer.Wow.Alpha.prototype = {
    destroy: function() {
        var self = this;
        for (var i = 0; i < self.data.length; ++i) self.data[i] = self.data[i].destroy();
        self.data = null
    },
    used: function(anim) {
        var self = this;
        if (self.data.length == 0) return false;
        if (anim < self.data.length) return self.data[anim].used;
        else return self.data[0].used
    },
    getValue: function(anim, time) {
        var self = this,
            a = 1;
        if (self.used(anim)) {
            var val = ZamModelViewer.Wow.AnimatedUint16.getValue(self.data, anim, time, a);
            a = val / 32767
        }
        if (a > 1) a = 1;
        else if (a < 0) a = 0;
        return a
    }
};
ZamModelViewer.Wow.ParticleEmitter = function(model, r) {
    var self = this,
        Wow = ZamModelViewer.Wow;
    self.model = model;
    self.id = r.getInt32();
    self.flags = r.getUint32();
    self.flags2 = r.getUint16();
    self.position = [r.getFloat(), r.getFloat(), r.getFloat()];
    self.boneId = r.getInt16();
    self.textureId = r.getInt16();
    self.blendMode = r.getUint8();
    self.emitterType = r.getUint8();
    self.particleType = r.getUint8();
    self.headTail = r.getUint8();
    self.tileRotation = r.getUint16();
    self.tileRows = r.getUint16();
    self.tileColumns = r.getUint16();
    self.scale = [r.getFloat(), r.getFloat(), r.getFloat()];
    self.slowdown = r.getFloat();
    self.rotation = [r.getFloat(), r.getFloat(), r.getFloat()];
    self.modelRot1 = [r.getFloat(), r.getFloat(), r.getFloat()];
    self.modelRot2 = [r.getFloat(), r.getFloat(), r.getFloat()];
    self.modelTranslation = [r.getFloat(), r.getFloat(), r.getFloat()];
    self.modelPath = r.getString();
    self.particlePath = r.getString();
    self.emissionSpeed = Wow.AnimatedFloat.readSet(r);
    self.speedVariation = Wow.AnimatedFloat.readSet(r);
    self.verticalRange = Wow.AnimatedFloat.readSet(r);
    self.horizontalRange = Wow.AnimatedFloat.readSet(r);
    self.gravity = Wow.AnimatedFloat.readSet(r);
    self.lifespan = Wow.AnimatedFloat.readSet(r);
    self.emissionRate = Wow.AnimatedFloat.readSet(r);
    self.areaLength = Wow.AnimatedFloat.readSet(r);
    self.areaWidth = Wow.AnimatedFloat.readSet(r);
    self.gravity2 = Wow.AnimatedFloat.readSet(r);
    self.color = new Wow.SAnimatedVec3(r);
    self.alpha = new Wow.SAnimatedUint16(r);
    self.size = new Wow.SAnimatedVec2(r);
    self.intensity = new Wow.SAnimatedUint16(r);
    self.enabled = Wow.AnimatedUint8.readSet(r);
    self.bone = self.model.bones[self.boneId];
    self.maxParticles = 500;
    self.particles = new Array(self.maxParticles);
    self.unusedParticles = new Array(self.maxParticles);
    for (var i = self.maxParticles - 1, j = 0; i >= 0; --i, ++j) self.unusedParticles[i] = j;
    self.nextParticle = self.maxParticles - 1;
    self.numParticles = 0;
    self.spawnRemainder = 0;
    self.tmpColors = [vec4.create(), vec4.create(), vec4.create()];
    self.spreadMat = mat4.create();
    self.tmpMat = mat4.create();
    self.init()
};
ZamModelViewer.Wow.ParticleEmitter.prototype = {
    destroy: function() {
        var self = this,
            gl = self.model.renderer.context,
            Animated = ZamModelViewer.Wow.Animated;
        if (self.program) gl.deleteProgram(self.program);
        if (self.vs) gl.deleteShader(self.vs);
        if (self.fs) gl.deleteShader(self.fs);
        if (self.vb) gl.deleteBuffer(self.vb);
        if (self.ib) gl.deleteBuffer(self.ib);
        self.program = null;
        self.vs = null;
        self.fs = null;
        self.vb = null;
        self.ib = null;
        self.vbData = null;
        self.texture = null;
        self.attribs = null;
        self.uniforms = null;
        self.model = null;
        self.bone = null;
        self.position = null;
        self.scale = null;
        self.rotation = null;
        self.modelRot1 = null;
        self.modelRot2 = null;
        self.modelTranslation = null;
        self.emissionSpeed = Animated.destroySet(self.emissionSpeed);
        self.speedVariation = Animated.destroySet(self.speedVariation);
        self.verticalRange = Animated.destroySet(self.verticalRange);
        self.horizontalRange = Animated.destroySet(self.horizontalRange);
        self.gravity = Animated.destroySet(self.gravity);
        self.lifespan = Animated.destroySet(self.lifespan);
        self.emissionRate = Animated.destroySet(self.emissionRate);
        self.areaLength = Animated.destroySet(self.areaLength);
        self.areaWidth = Animated.destroySet(self.areaWidth);
        self.gravity2 = Animated.destroySet(self.gravity2);
        self.enabled = Animated.destroySet(self.enabled);
        self.color = self.color.destroy();
        self.alpha = self.alpha.destroy();
        self.size = self.size.destroy();
        self.intensity = self.intensity.destroy();
        self.particles = null;
        self.unusedParticles = null;
        self.tmpColors[0] = self.tmpColors[1] = self.tmpColors[2] = null;
        self.tmpColors = null;
        self.spreadMat = null;
        self.tmpMat = null
    },
    updateBuffers: function() {
        var self = this,
            gl = self.model.renderer.context,
            i, j;
        if (!self.vbData) {
            self.vbData = new Float32Array(self.maxParticles * 11);
            var ibData = new Uint16Array(self.maxParticles * 6);
            var vert = 0;
            for (i = 0; i < self.maxParticles; ++i) {
                ibData[i * 6 + 0] = vert;
                ibData[i * 6 + 1] = vert + 1;
                ibData[i * 6 + 2] = vert + 2;
                ibData[i * 6 + 3] = vert + 2;
                ibData[i * 6 + 4] = vert + 1;
                ibData[i * 6 + 5] = vert + 3;
                vert += 4
            }
            self.ib = gl.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, self.ib);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, ibData, gl.STATIC_DRAW)
        }
        self.numParticles = 0;
        var p, idx = 0,
            tc, vbData = self.vbData;
        if (self.particleType == 0 || self.particleType == 2) {
            for (i = 0; i < self.maxParticles; ++i) {
                p = self.particles[i];
                if (!p || p.maxLife == 0) continue;
                tc = self.textureCoords[p.tile];
                for (j = 0; j < 4; ++j) {
                    vbData[idx + 0] = p.position[0];
                    vbData[idx + 1] = p.position[1];
                    vbData[idx + 2] = p.position[2];
                    vbData[idx + 3] = p.color[0];
                    vbData[idx + 4] = p.color[1];
                    vbData[idx + 5] = p.color[2];
                    vbData[idx + 6] = p.color[3];
                    vbData[idx + 7] = tc[j].x;
                    vbData[idx + 8] = tc[j].y;
                    vbData[idx + 9] = tc[j].z * p.size[0];
                    vbData[idx + 10] = tc[j].w * p.size[1];
                    idx += 11
                }
                self.numParticles++
            }
        } else {
            for (i = 0; i < self.maxParticles; ++i) {
                p = self.particles[i];
                if (!p || p.maxLife == 0) continue;
                tc = self.textureCoords[p.tile];
                vbData[idx + 0] = p.position[0];
                vbData[idx + 1] = p.position[1];
                vbData[idx + 2] = p.position[2];
                vbData[idx + 11] = p.position[0];
                vbData[idx + 12] = p.position[1];
                vbData[idx + 13] = p.position[2];
                vbData[idx + 22] = p.origin[0];
                vbData[idx + 23] = p.origin[1];
                vbData[idx + 24] = p.origin[2];
                vbData[idx + 33] = p.origin[0];
                vbData[idx + 34] = p.origin[1];
                vbData[idx + 35] = p.origin[2];
                for (j = 0; j < 4; ++j) {
                    vbData[idx + 3] = p.color[0];
                    vbData[idx + 4] = p.color[1];
                    vbData[idx + 5] = p.color[2];
                    vbData[idx + 6] = p.color[3];
                    vbData[idx + 7] = tc[j].x;
                    vbData[idx + 8] = tc[j].y;
                    vbData[idx + 9] = tc[j].z * p.size[0];
                    vbData[idx + 10] = tc[j].w * p.size[1];
                    idx += 11
                }
                self.numParticles++
            }
        }
        if (!self.vb) {
            self.vb = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, self.vb);
            gl.bufferData(gl.ARRAY_BUFFER, self.vbData, gl.DYNAMIC_DRAW)
        } else {
            gl.bindBuffer(gl.ARRAY_BUFFER, self.vb);
            gl.bufferSubData(gl.ARRAY_BUFFER, 0, self.vbData)
        }
    },
    draw: function() {
        var self = this,
            gl = self.model.renderer.context,
            i;
        if (self.numParticles == 0) return;
        if (!self.shaderReady) self.initShader();
        if (!self.program) return;
        if (!self.texture && self.textureId > -1 && self.textureId < self.model.materials.length) {
            var mat = self.model.materials[self.textureId];
            if (mat.texture && mat.texture.texture && (!mat.texture.alphaImg || mat.texture.alphaTexture)) {
                self.texture = mat.texture
            }
        }
        if (!self.texture) return;
        gl.useProgram(self.program);
        gl.uniformMatrix4fv(self.uniforms.vModelMatrix, false, self.model.matrix);
        gl.uniformMatrix4fv(self.uniforms.vViewMatrix, false, self.model.renderer.viewMatrix);
        gl.uniformMatrix4fv(self.uniforms.vProjMatrix, false, self.model.renderer.projMatrix);
        gl.uniform1i(self.uniforms.fBlendMode, self.blendMode);
        if (self.texture) {
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, self.texture.texture);
            gl.uniform1i(self.uniforms.fTexture, 0)
        }
        if (self.texture && self.texture.alphaTexture) {
            gl.activeTexture(gl.TEXTURE1);
            gl.bindTexture(gl.TEXTURE_2D, self.texture.alphaTexture);
            gl.uniform1i(self.uniforms.fAlpha, 1)
        }
        gl.uniform1i(self.uniforms.fHasTexture, self.texture ? 1 : 0);
        gl.uniform1i(self.uniforms.fHasAlpha, self.texture && self.texture.alphaTexture ? 1 : 0);
        var blend = self.blendMode;
        if (blend == 0 || blend == 1) {
            gl.blendFunc(gl.ONE, gl.ZERO)
        } else if (blend == 2) {
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
        } else if (blend == 3) {
            gl.blendFunc(gl.SRC_COLOR, gl.ONE)
        } else if (blend == 4) {
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE)
        } else if (blend == 5 || blend == 6) {
            gl.blendFunc(gl.DST_COLOR, gl.SRC_COLOR)
        } else {
            gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA)
        }
        gl.disable(gl.CULL_FACE);
        gl.depthMask(false);
        gl.bindBuffer(gl.ARRAY_BUFFER, self.vb);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, self.ib);
        for (i in self.attribs) {
            var a = self.attribs[i];
            gl.enableVertexAttribArray(a.loc);
            gl.vertexAttribPointer(a.loc, a.size, a.type, false, a.stride, a.offset)
        }
        gl.drawElements(gl.TRIANGLES, self.numParticles * 6, gl.UNSIGNED_SHORT, 0);
        for (i in self.attribs) {
            gl.disableVertexAttribArray(self.attribs[i].loc)
        }
    },
    initShader: function() {
        var self = this,
            gl = self.model.renderer.context;
        self.shaderReady = true;
        var vs = self.model.renderer.compileShader(gl.VERTEX_SHADER, self.vertShader);
        var fs = self.model.renderer.compileShader(gl.FRAGMENT_SHADER, self.fragShader);
        var program = gl.createProgram();
        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error("Error linking shaders");
            return
        }
        self.vs = vs;
        self.fs = fs;
        self.program = program;
        self.uniforms = {
            vModelMatrix: gl.getUniformLocation(program, "uModelMatrix"),
            vViewMatrix: gl.getUniformLocation(program, "uViewMatrix"),
            vProjMatrix: gl.getUniformLocation(program, "uProjMatrix"),
            fHasTexture: gl.getUniformLocation(program, "uHasTexture"),
            fHasAlpha: gl.getUniformLocation(program, "uHasAlpha"),
            fBlendMode: gl.getUniformLocation(program, "uBlendMode"),
            fTexture: gl.getUniformLocation(program, "uTexture"),
            fAlpha: gl.getUniformLocation(program, "uAlpha")
        };
        self.attribs = {
            position: {
                loc: gl.getAttribLocation(program, "aPosition"),
                type: gl.FLOAT,
                size: 3,
                offset: 0,
                stride: 44
            },
            normal: {
                loc: gl.getAttribLocation(program, "aColor"),
                type: gl.FLOAT,
                size: 4,
                offset: 12,
                stride: 44
            },
            texcoord: {
                loc: gl.getAttribLocation(program, "aTexCoord"),
                type: gl.FLOAT,
                size: 4,
                offset: 28,
                stride: 44
            }
        }
    },
    vertShader: "        attribute vec3 aPosition;        attribute vec4 aColor;        attribute vec4 aTexCoord;                varying vec4 vColor;        varying vec2 vTexCoord;                uniform mat4 uModelMatrix;        uniform mat4 uViewMatrix;        uniform mat4 uProjMatrix;                void main(void) {            vec4 pos = uViewMatrix * uModelMatrix * vec4(aPosition, 1);            pos.xy += aTexCoord.zw;            gl_Position = uProjMatrix * pos;                        vTexCoord = aTexCoord.xy;            vColor = aColor;        }    ",
    fragShader: "        precision mediump float;                varying vec4 vColor;        varying vec2 vTexCoord;                uniform bool uHasTexture;        uniform bool uHasAlpha;        uniform int uBlendMode;        uniform sampler2D uTexture;        uniform sampler2D uAlpha;                void main(void) {            vec4 color = vec4(1, 1, 1, 1);            if (uHasTexture) {                color = texture2D(uTexture, vTexCoord.st);            }            if ((uBlendMode == 1 || uBlendMode == 2 || uBlendMode == 4) && uHasAlpha) {                color.a = texture2D(uAlpha, vTexCoord.st).r;            }                        color *= vColor;                        if (uBlendMode == 1) {                if (color.a < 0.7) { discard; }            }                        gl_FragColor = color;        }    ",
    update: function(anim, time, delta) {
        var self = this,
            Wow = ZamModelViewer.Wow;
        var grav = Wow.AnimatedFloat.getValue(self.gravity, anim, time);
        var deaccel = Wow.AnimatedFloat.getValue(self.gravity2, anim, time);
        var speed, i, j;
        if (self.emitterType == 1 || self.emitterType == 2) {
            var rate = Wow.AnimatedFloat.getValue(self.emissionRate, anim, time);
            var life = Wow.AnimatedFloat.getValue(self.lifespan, anim, time);
            var toSpawn = 0;
            if (life != 0) toSpawn = delta * rate / life + self.spawnRemainder;
            else toSpawn = self.spawnRemainder;
            if (toSpawn < 1) {
                self.spawnRemainder = toSpawn;
                if (self.spawnRemainder < 0) self.spawnRemainder = 0
            } else {
                var count = Math.min(Math.floor(toSpawn), self.nextParticle + 1);
                self.spawnRemainder = toSpawn - count;
                var en = true;
                if (Wow.Animated.isUsed(self.enabled, anim)) en = Wow.AnimatedUint8.getValue(self.enabled, anim, time) != 0;
                if (en && count > 0) {
                    var w = Wow.AnimatedFloat.getValue(self.areaWidth, anim, time) * .5;
                    var l = Wow.AnimatedFloat.getValue(self.areaLength, anim, time) * .5;
                    speed = Wow.AnimatedFloat.getValue(self.emissionSpeed, anim, time);
                    var vary = Wow.AnimatedFloat.getValue(self.speedVariation, anim, time);

                    if (self.emitterType == 1) {
                        for (i = 0; i < count; ++i) self.spawnPlaneParticle(w, l, speed, vary, life)
                    } else {
                        var vSpread = Wow.AnimatedFloat.getValue(self.verticalRange, anim, time);
                        var hSpread = Wow.AnimatedFloat.getValue(self.horizontalRange, anim, time);
                        for (i = 0; i < count; ++i) self.spawnSphereParticle(w, l, speed, vary, vSpread, hSpread)
                    }
                }
            }
            if (isNaN(self.spawnRemainder)) self.spawnRemainder = 0
        }
        speed = 1;
        var gravDelta = grav * delta;
        var deaccelDelta = deaccel * delta;
        var speedDelta = speed * delta;
        var p, lifePos, limit, v, s1, s2, s3;
        s1 = self.size.data[0];
        if (self.size.data.length > 2) {
            s2 = self.size.data[1];
            s3 = self.size.data[2]
        } else if (self.size.data.length > 1) {
            s2 = self.size.data[1];
            s3 = s2
        } else {
            s3 = s2 = s1
        }
        for (i = 0; i < self.maxParticles; ++i) {
            p = self.particles[i];
            if (!p || p.maxLife == 0) continue;
            p.life += delta;
            lifePos = p.life / p.maxLife;
            if (lifePos >= 1) {
                p.maxLife = 0;
                self.nextParticle++;
                self.unusedParticles[self.nextParticle] = p.index;
                continue
            }
            vec3.scaleAndAdd(p.speed, p.speed, p.down, gravDelta);
            vec3.scaleAndAdd(p.speed, p.speed, p.direction, -deaccelDelta);
            if (self.slowdown > 0) {
                speed = Math.exp(-1 * self.slowdown * p.life);
                speedDelta = speed * delta
            }
            vec3.scaleAndAdd(p.position, p.position, p.speed, speedDelta);
            if (lifePos <= .5) {
                vec2.lerp(p.size, s1, s2, lifePos / .5)
            } else {
                vec2.lerp(p.size, s2, s3, (lifePos - .5) / .5)
            }
            vec2.multiply(p.size, p.size, self.scale);
            limit = Math.min(3, self.color.data.length);
            for (j = 0; j < limit; ++j) {
                v = self.color.data[j];
                vec4.set(self.tmpColors[j], v[0] / 255, v[1] / 255, v[2] / 255, self.alpha.data[j] / 32767)
            }
            if (limit < 3) {
                v = self.color.data[limit - 1];
                for (j = limit; j < 3; ++j) vec4.set(self.tmpColors[j], v[0] / 255, v[1] / 255, v[2] / 255, self.alpha.data[j] / 32767)
            }
            if (lifePos <= .5) {
                vec4.lerp(p.color, self.tmpColors[0], self.tmpColors[1], lifePos / .5)
            } else {
                vec4.lerp(p.color, self.tmpColors[1], self.tmpColors[2], (lifePos - .5) / .5)
            }
        }
        self.updateBuffers()
    },
    getNextParticle: function() {
        var self = this;
        if (self.nextParticle < 0) return null;
        var index = self.unusedParticles[self.nextParticle];
        if (!self.particles[index]) {
            self.particles[index] = {
                index: index,
                position: vec3.create(),
                origin: vec3.create(),
                speed: vec4.create(),
                direction: vec4.create(),
                down: vec3.create(),
                color: vec4.create(),
                size: vec2.create(),
                life: 0,
                maxLife: 0,
                tile: 0
            }
        }
        self.nextParticle--;
        return self.particles[index]
    },
    spawnPlaneParticle: function(width, height, speed, vary, life) {
        var self = this,
            p = self.getNextParticle();
        if (!p) return null;
        vec3.copy(p.position, self.position);
        p.position[0] += -width / 2 + width * Math.random();
        p.position[1] += -height / 2 + height * Math.random();
        vec3.transformMat4(p.position, p.position, self.bone.matrix);
        vec4.set(p.direction, 0, 0, 1, 0);
        vec4.transformMat4(p.direction, p.direction, self.bone.matrix);
        vec3.normalize(p.direction, p.direction);
        vec4.copy(p.speed, p.direction);
        var v1 = speed - speed * vary,
            v2 = speed + speed * vary;
        vec4.scale(p.speed, p.speed, v1 + (v2 - v1) * Math.random());
        vec3.set(p.down, 0, 0, -1);
        p.life = 0;
        p.maxLife = life;
        if (!p.maxLife) p.maxLife = 1;
        vec3.copy(p.origin, p.position);
        p.tile = Math.floor(Math.random() * self.tileRows * self.tileColumns);
        vec4.set(p.color, 1, 1, 1, 1);
        return p
    },
    spawnSphereParticle: function(width, height, speed, vary, spread, spread2, life) {
        var self = this,
            p = self.getNextParticle();
        if (!p) return null;
        var radius = Math.random(),
            t = 0;
        if (spread == 0) {
            t = Math.random() * Math.PI * 2 - Math.PI
        } else {
            t = Math.random() * spread * 2 - spread
        }
        self.calcSpread(spread * 2, spread * 2, width, height);
        if ((self.flags & 57) == 57 || (self.flags & 313) == 313) {
            vec3.copy(p.position, self.position);
            vec4.set(p.direction, width * Math.cos(t) * 1.6, height * Math.sin(t) * 1.6, 0, 0);
            vec3.add(p.position, p.position, p.direction);
            vec3.transformMat4(p.position, p.position, self.bone.matrix);
            if (vec3.squaredLength(p.direction) == 0) {
                vec4.set(p.speed, 0, 0, 0, 0)
            } else {
                vec4.transformMat4(p.direction, p.direction, self.bone.matrix);
                vec3.normalize(p.direction, p.direction);
                vec3.copy(p.speed, p.direction);
                vec3.scale(p.speed, p.speed, speed * (1 + Math.random() * vary * 2 - vary))
            }
        } else {
            vec4.set(p.direction, 0, 0, 1, 0);
            vec4.transformMat4(p.direction, p.direction, self.spreadMat);
            vec3.scale(p.direction, p.direction, radius);
            vec3.copy(p.position, self.position);
            vec3.add(p.position, p.position, p.direction);
            vec3.transformMat4(p.position, p.position, self.bone.matrix);
            if (vec3.squaredLength(p.direction) == 0 && (self.flags & 256) == 0) {
                vec4.set(p.speed, 0, 0, 0, 0);
                vec4.set(p.direction, 0, 0, 1, 0);
                vec4.transformMat4(p.direction, p.direction, self.bone.matrix);
                vec3.normalize(p.direction, p.direction)
            } else {
                if ((self.flags & 256) > 0) {
                    vec4.set(p.direction, 0, 0, 1, 0);
                    vec4.transformMat4(p.direction, p.direction, self.bone.matrix)
                }
                vec3.normalize(p.direction, p.direction);
                vec4.copy(p.speed, p.direction);
                vec3.scale(p.speed, p.speed, speed * (1 + Math.random() * vary * 2 - vary))
            }
        }
        vec3.set(p.down, 0, 0, -1);
        p.life = 0;
        p.maxLife = life;
        if (!p.maxLife) p.maxLife = 1;
        vec3.copy(p.origin, p.position);
        p.tile = Math.floor(Math.random() * self.tileRows * self.tileColumns);
        vec4.set(p.color, 1, 1, 1, 1);
        return p
    },
    calcSpread: function(spread1, spread2, width, height) {
        var self = this,
            mat = this.spreadMat,
            tmpMat = this.tmpMat;
        var a0 = (Math.random() * (spread1 * 2) - spread1) / 2,
            a1 = (Math.random() * (spread2 * 2) - spread2) / 2;
        var c0 = Math.cos(a0),
            c1 = Math.cos(a1),
            s0 = Math.sin(a0),
            s1 = Math.sin(a1);
        mat4.identity(mat);
        mat4.identity(tmpMat);
        tmpMat[5] = tmpMat[10] = c0;
        tmpMat[9] = s0;
        tmpMat[6] = -s0;
        mat4.multiply(mat, mat, tmpMat);
        mat4.identity(tmpMat);
        tmpMat[0] = tmpMat[10] = c1;
        tmpMat[2] = s1;
        tmpMat[8] = -s1;
        mat4.multiply(mat, mat, tmpMat);
        var size = Math.abs(c0) * height * Math.abs(s0) * width;
        mat[0] *= size;
        mat[1] *= size;
        mat[2] *= size;
        mat[4] *= size;
        mat[5] *= size;
        mat[6] *= size;
        mat[8] *= size;
        mat[9] *= size;
        mat[10] *= size;
        mat4.multiply(mat, self.bone.matrix, mat);
        return mat
    },
    init: function() {
        var self = this;
        if (self.scale.z == 519) self.scale.z = 1.5;
        var numTiles = self.tileRows * self.tileColumns;
        self.textureCoords = new Array(numTiles);
        var a = {
                x: 0,
                y: 0
            },
            b = {
                x: 0,
                y: 0
            };
        var i, x, y;
        for (i = 0; i < numTiles; ++i) {
            x = i % self.tileColumns;
            y = Math.floor(i / self.tileColumns);
            a.x = x * (1 / self.tileColumns);
            b.x = (x + 1) * (1 / self.tileColumns);
            a.y = y * (1 / self.tileRows);
            b.y = (y + 1) * (1 / self.tileRows);
            self.textureCoords[i] = [{
                x: a.x,
                y: a.y,
                z: -1,
                w: 1
            }, {
                x: b.x,
                y: a.y,
                z: 1,
                w: 1
            }, {
                x: a.x,
                y: b.y,
                z: -1,
                w: -1
            }, {
                x: b.x,
                y: b.y,
                z: 1,
                w: -1
            }]
        }
    }
};
ZamModelViewer.Wow.RibbonEmitter = function(model, r) {
    var self = this,
        Wow = ZamModelViewer.Wow,
        i;
    self.model = model;
    self.id = r.getInt32();
    self.boneId = r.getInt32();
    self.position = [r.getFloat(), r.getFloat(), r.getFloat()];
    self.resolution = r.getFloat();
    self.length = r.getFloat();
    self.emissionAngle = r.getFloat();
    self.s1 = r.getInt16();
    self.s2 = r.getInt16();
    var count = r.getInt32();
    if (count > 0) {
        self.textureIds = new Array(count);
        for (i = 0; i < count; ++i) {
            self.textureIds[i] = r.getInt32()
        }
    }
    self.color = Wow.AnimatedVec3.readSet(r);
    self.alpha = Wow.AnimatedUint16.readSet(r);
    self.above = Wow.AnimatedFloat.readSet(r);
    self.below = Wow.AnimatedFloat.readSet(r);
    self.bone = self.model.bones[self.boneId];
    self.maxSegments = 50;
    self.segments = new Array(self.maxSegments);
    for (i = 0; i < self.maxSegments; ++i) {
        self.segments[i] = {
            position: vec3.create(),
            start: vec3.create(),
            up: vec4.create(),
            length: 0
        }
    }
    self.currentSegment = 0;
    self.numSegments = 0;
    self.totalLength = self.resolution / self.length;
    self.currentPosition = vec3.clone(self.position);
    self.currentColor = vec4.create();
    self.currentAbove = 0;
    self.currentBelow = 0;
    self.currentLength = 0;
    self.tmpPosition = vec3.create();
    self.tmpUp = vec4.create();
    self.tmpVec = vec4.create()
};
ZamModelViewer.Wow.RibbonEmitter.prototype = {
    destroy: function() {
        var self = this,
            gl = self.model.renderer.context,
            Animated = ZamModelViewer.Wow.Animated;
        if (self.program) gl.deleteProgram(self.program);
        if (self.vs) gl.deleteShader(self.vs);
        if (self.fs) gl.deleteShader(self.fs);
        if (self.vb) gl.deleteBuffer(self.vb);
        if (self.ib) gl.deleteBuffer(self.ib);
        self.program = null;
        self.vs = null;
        self.fs = null;
        self.vb = null;
        self.ib = null;
        self.vbData = null;
        self.uniforms = null;
        self.attribs = null;
        self.texture = null;
        self.model = null;
        self.bone = null;
        self.position = null;
        self.textureIds = null;
        for (var i = 0; i < self.maxSegments; ++i) {
            self.segments[i].position = null;
            self.segments[i].start = null;
            self.segments[i].up = null;
            self.segments[i] = null
        }
        self.segments = null;
        self.currentPosition = null;
        self.currentColor = null;
        self.tmpPosition = null;
        self.tmpUp = null;
        self.tmpVec = null;
        self.color = Animated.destroySet(self.color);
        self.alpha = Animated.destroySet(self.alpha);
        self.above = Animated.destroySet(self.above);
        self.below = Animated.destroySet(self.below)
    },
    updateBuffers: function() {
        var self = this,
            gl = self.model.renderer.context,
            i, j;
        if (!self.vbData) {
            self.vbData = new Float32Array((self.maxSegments * 2 + 2) * 5);
            var ibData = new Uint16Array(self.maxSegments * 6);
            var vert = 0;
            for (i = 0; i < self.maxSegments; ++i) {
                ibData[i * 6 + 0] = vert;
                ibData[i * 6 + 1] = vert + 1;
                ibData[i * 6 + 2] = vert + 2;
                ibData[i * 6 + 3] = vert + 2;
                ibData[i * 6 + 4] = vert + 1;
                ibData[i * 6 + 5] = vert + 3;
                vert += 2
            }
            self.ib = gl.createBuffer();
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, self.ib);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, ibData, gl.STATIC_DRAW)
        }
        if (self.numSegments == 0) return;
        var s = self.segments[self.currentSegment],
            n = 0,
            u, u2, l = 0,
            vbData = self.vbData;
        var above = self.currentAbove,
            below = self.currentBelow;
        vbData[n] = s.start[0] + s.up[0] * above;
        vbData[n + 1] = s.start[1] + s.up[1] * above;
        vbData[n + 2] = s.start[2] + s.up[2] * above;
        vbData[n + 3] = 1;
        vbData[n + 4] = 0;
        n += 5;
        vbData[n] = s.start[0] - s.up[0] * below;
        vbData[n + 1] = s.start[1] - s.up[1] * below;
        vbData[n + 2] = s.start[2] - s.up[2] * below;
        vbData[n + 3] = 1;
        vbData[n + 4] = 1;
        n += 5;
        for (i = 0; i < self.numSegments; ++i) {
            s = self.segments[(self.currentSegment + i) % self.maxSegments];
            u = 1 - (self.currentLength != 0 ? l / self.currentLength : 0);
            u2 = 1 - (self.currentLength != 0 ? (l + s.length) / self.currentLength : 1);
            vbData[n] = s.position[0] + s.up[0] * above;
            vbData[n + 1] = s.position[1] + s.up[1] * above;
            vbData[n + 2] = s.position[2] + s.up[2] * above;
            vbData[n + 3] = u2;
            vbData[n + 4] = 0;
            n += 5;
            vbData[n] = s.position[0] - s.up[0] * below;
            vbData[n + 1] = s.position[1] - s.up[1] * below;
            vbData[n + 2] = s.position[2] - s.up[2] * below;
            vbData[n + 3] = u2;
            vbData[n + 4] = 1;
            n += 5;
            l += s.length
        }
        if (!self.vb) {
            self.vb = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, self.vb);
            gl.bufferData(gl.ARRAY_BUFFER, self.vbData, gl.DYNAMIC_DRAW)
        } else {
            gl.bindBuffer(gl.ARRAY_BUFFER, self.vb);
            gl.bufferSubData(gl.ARRAY_BUFFER, 0, self.vbData)
        }
    },
    draw: function() {
        var self = this,
            gl = self.model.renderer.context,
            i;
        if (self.numSegments == 0) return;
        if (!self.shaderReady) self.initShader();
        if (!self.program) return;
        if (!self.texture && self.textureIds[0] > -1 && self.textureIds[0] < self.model.materials.length) {
            var mat = self.model.materials[self.textureIds[0]];
            if (mat.texture && mat.texture.texture && (!mat.texture.alphaImg || mat.texture.alphaTexture)) {
                self.texture = mat.texture
            }
        }
        if (!self.texture) return;
        gl.useProgram(self.program);
        gl.uniformMatrix4fv(self.uniforms.vModelMatrix, false, self.model.matrix);
        gl.uniformMatrix4fv(self.uniforms.vViewMatrix, false, self.model.renderer.viewMatrix);
        gl.uniformMatrix4fv(self.uniforms.vProjMatrix, false, self.model.renderer.projMatrix);
        gl.uniform4fv(self.uniforms.fColor, self.currentColor);
        if (self.texture) {
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, self.texture.texture);
            gl.uniform1i(self.uniforms.fTexture, 0)
        }
        if (self.texture && self.texture.alphaTexture) {
            gl.activeTexture(gl.TEXTURE1);
            gl.bindTexture(gl.TEXTURE_2D, self.texture.alphaTexture);
            gl.uniform1i(self.uniforms.fAlpha, 1)
        }
        gl.uniform1i(self.uniforms.fHasTexture, self.texture ? 1 : 0);
        gl.uniform1i(self.uniforms.fHasAlpha, self.texture && self.texture.alphaTexture ? 1 : 0);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
        gl.disable(gl.CULL_FACE);
        gl.depthMask(false);
        gl.bindBuffer(gl.ARRAY_BUFFER, self.vb);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, self.ib);
        for (i in self.attribs) {
            var a = self.attribs[i];
            gl.enableVertexAttribArray(a.loc);
            gl.vertexAttribPointer(a.loc, a.size, a.type, false, a.stride, a.offset)
        }
        gl.drawElements(gl.TRIANGLES, self.numSegments * 6, gl.UNSIGNED_SHORT, 0);
        for (i in self.attribs) {
            gl.disableVertexAttribArray(self.attribs[i].loc)
        }
    },
    initShader: function() {
        var self = this,
            gl = self.model.renderer.context;
        self.shaderReady = true;
        var vs = self.model.renderer.compileShader(gl.VERTEX_SHADER, self.vertShader);
        var fs = self.model.renderer.compileShader(gl.FRAGMENT_SHADER, self.fragShader);
        var program = gl.createProgram();
        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error("Error linking shaders");
            return
        }
        self.vs = vs;
        self.fs = fs;
        self.program = program;
        self.uniforms = {
            vModelMatrix: gl.getUniformLocation(program, "uModelMatrix"),
            vViewMatrix: gl.getUniformLocation(program, "uViewMatrix"),
            vProjMatrix: gl.getUniformLocation(program, "uProjMatrix"),
            fHasTexture: gl.getUniformLocation(program, "uHasTexture"),
            fHasAlpha: gl.getUniformLocation(program, "uHasAlpha"),
            fTexture: gl.getUniformLocation(program, "uTexture"),
            fAlpha: gl.getUniformLocation(program, "uAlpha"),
            fColor: gl.getUniformLocation(program, "uColor")
        };
        self.attribs = {
            position: {
                loc: gl.getAttribLocation(program, "aPosition"),
                type: gl.FLOAT,
                size: 3,
                offset: 0,
                stride: 20
            },
            texcoord: {
                loc: gl.getAttribLocation(program, "aTexCoord"),
                type: gl.FLOAT,
                size: 2,
                offset: 12,
                stride: 20
            }
        }
    },
    vertShader: "        attribute vec3 aPosition;        attribute vec2 aTexCoord;                varying vec2 vTexCoord;                uniform mat4 uModelMatrix;        uniform mat4 uViewMatrix;        uniform mat4 uProjMatrix;                void main(void) {            gl_Position = uProjMatrix * uViewMatrix * uModelMatrix * vec4(aPosition, 1);                        vTexCoord = aTexCoord;        }    ",
    fragShader: "        precision mediump float;                varying vec2 vTexCoord;                uniform bool uHasTexture;        uniform bool uHasAlpha;        uniform sampler2D uTexture;        uniform sampler2D uAlpha;        uniform vec4 uColor;                void main(void) {            vec4 color = vec4(1, 1, 1, 1);            if (uHasTexture) {                color = texture2D(uTexture, vTexCoord.st);            }            if (uHasAlpha) {                color.a = texture2D(uAlpha, vTexCoord.st).r;            }                        gl_FragColor = color * uColor;        }    ",
    update: function(anim, time) {
        var self = this,
            Wow = ZamModelViewer.Wow,
            i, s;
        vec3.transformMat4(self.tmpPosition, self.position, self.bone.matrix);
        vec4.set(self.tmpUp, 0, 0, 1, 0);
        vec4.transformMat4(self.tmpUp, self.tmpUp, self.bone.matrix);
        vec3.normalize(self.tmpUp, self.tmpUp);
        if (self.numSegments == 0) {
            s = self.pushSegment();
            vec3.copy(s.start, self.tmpPosition);
            vec3.copy(s.position, self.tmpPosition);
            vec4.copy(s.up, self.tmpUp);
            s.length = 0
        } else {
            var currIdx = (self.currentSegment + self.numSegments - 1) % self.maxSegments;
            s = self.segments[currIdx];
            vec3.copy(s.position, self.tmpPosition);
            vec4.copy(s.up, self.tmpUp);
            vec3.subtract(self.tmpVec, s.position, self.currentPosition);
            s.length += vec3.length(self.tmpVec);
            if (s.length >= self.length) {
                s = self.pushSegment();
                vec3.copy(s.start, self.tmpPosition);
                vec3.copy(s.position, self.tmpPosition);
                vec4.copy(s.up, self.tmpUp);
                s.length = 0
            }
        }
        self.currentLength = 0;
        var idx;
        for (i = 0; i < self.numSegments; ++i) {
            idx = (self.currentSegment + i) % self.maxSegments;
            self.currentLength += self.segments[idx].length
        }
        if (self.currentLength > self.totalLength + .1) {
            self.currentLength -= self.segments[self.currentSegment].length;
            self.shiftSegment()
        }
        vec3.copy(self.currentPosition, self.tmpPosition);
        Wow.AnimatedVec3.getValue(self.color, anim, time, self.currentColor);
        self.currentColor[3] = Wow.AnimatedUint16.getValue(self.alpha, anim, time) / 32767;
        self.currentAbove = Wow.AnimatedFloat.getValue(self.above, anim, time);
        self.currentBelow = Wow.AnimatedFloat.getValue(self.below, anim, time);
        self.updateBuffers()
    },
    pushSegment: function() {
        var self = this;
        if (self.numSegments < self.maxSegments) {
            self.numSegments++
        } else {
            self.currentSegment = (self.currentSegment + 1) % self.maxSegments
        }
        return self.segments[self.currentSegment]
    },
    popSegment: function() {
        var self = this;
        self.numSegments--
    },
    shiftSegment: function() {
        var self = this;
        self.currentSegment = (self.currentSegment + 1) % self.maxSegments;
        self.numSegments--
    }
};
ZamModelViewer.Wow.Skin = function(r, version) {
    var self = this;
    self.skinFlags = version > 2e3 ? r.getUint32() : 0;
    self.base = r.getString();
    self.fur = r.getString();
    self.underwearFlags = version > 2e3 ? r.getUint32() : 0;
    self.panties = r.getString();
    self.bra = r.getString();
    self.faces = null
};
ZamModelViewer.Wow.Skin._lastFaces = null;
ZamModelViewer.Wow.Skin.GetSkins = function(skins, playerOnly, dk) {
    if (!skins) return [];
    var list = [];
    for (var i = 0; i < skins.length; ++i) {
        if (playerOnly && (skins[i].skinFlags & 3) > 0) {
            if ((skins[i].skinFlags & 4) > 0) {
                if (dk) list.push(skins[i])
            } else {
                list.push(skins[i])
            }
        } else if (!playerOnly || skins[i].skinFlags == 0) {
            list.push(skins[i])
        }
    }
    return list
};
ZamModelViewer.Wow.Skin.GetFaces = function(faces, playerOnly, dk, skinFlags) {
    if (!faces || dk && (skinFlags & 4) > 0) return [];
    var list = [];
    for (var i = 0; i < faces.length; ++i) {
        if (playerOnly && (faces[i].flags & 3) > 0) {
            if ((faces[i].flags & 4) > 0) {
                if (dk) list.push(faces[i])
            } else {
                list.push(faces[i])
            }
        } else if (!playerOnly || faces[i].flags == 0) {
            list.push(faces[i])
        }
    }
    return list
};
ZamModelViewer.Wow.Skin.prototype = {
    destroy: function() {
        var self = this;
        if (self.faces) {
            for (var i = 0; i < self.faces.length; ++i) self.faces[i] = null;
            self.faces = null
        }
    },
    readFaces: function(r, version) {
        var self = this;
        var count = r.getInt32();
        if (count == 0 && ZamModelViewer.Wow.Skin._lastFaces) {
            self.faces = ZamModelViewer.Wow.Skin._lastFaces
        } else if (count > 0) {
            self.faces = new Array(count);
            for (var i = 0; i < count; ++i) {
                self.faces[i] = {
                    flags: version > 2e3 ? r.getUint32() : 0,
                    lower: r.getString(),
                    upper: r.getString()
                };
                ZamModelViewer.Wow.Skin._lastFaces = self.faces[i]
            }
        }
    }
};
ZamModelViewer.Wow.Face = function(r) {
    var self = this;
    self.geoset1 = r.getInt32();
    self.geoset2 = r.getInt32();
    self.geoset3 = r.getInt32();
    self.textures = null
};
ZamModelViewer.Wow.Face.GetTextures = function(textures, playerOnly, dk) {
    if (!textures) return [];
    var list = [];
    for (var i = 0; i < textures.length; ++i) {
        if (playerOnly && (textures[i].flags & 3) > 0) {
            if ((textures[i].flags & 4) > 0) {
                if (dk) list.push(textures[i])
            } else {
                list.push(textures[i])
            }
        } else if (!playerOnly || textures[i].flags == 0) {
            list.push(textures[i])
        }
    }
    return list
};
ZamModelViewer.Wow.Face.prototype = {
    destroy: function() {
        var self = this;
        if (self.textures) {
            for (var i = 0; i < self.textures.length; ++i) self.textures[i] = null;
            self.textures = null
        }
    },
    readTextures: function(r, version) {
        var self = this;
        var count = r.getInt32();
        if (count > 0) {
            self.textures = new Array(count);
            for (var i = 0; i < count; ++i) {
                self.textures[i] = {
                    flags: version > 2e3 ? r.getUint32() : 0,
                    lower: r.getString(),
                    upper: r.getString()
                }
            }
        }
    }
};
ZamModelViewer.Wow.Hair = function(r) {
    var self = this;
    self.geoset = r.getInt32();
    self.index = r.getInt32();
    self.textures = null
};
ZamModelViewer.Wow.Hair.GetTextures = function(textures, playerOnly, dk) {
    if (!textures) return [];
    var list = [];
    for (var i = 0; i < textures.length; ++i) {
        if (playerOnly && (textures[i].flags & 3) > 0) {
            if ((textures[i].flags & 4) > 0) {
                if (dk) list.push(textures[i])
            } else {
                list.push(textures[i])
            }
        } else if (!playerOnly || textures[i].flags == 0) {
            list.push(textures[i])
        }
    }
    return list
};
ZamModelViewer.Wow.Hair.prototype = {
    destroy: function() {
        var self = this;
        if (self.textures) {
            for (var i = 0; i < self.textures.length; ++i) self.textures[i] = null;
            self.textures = null
        }
    },
    readTextures: function(r, version) {
        var self = this;
        var count = r.getInt32();
        if (count > 0) {
            self.textures = new Array(count);
            for (var i = 0; i < count; ++i) {
                self.textures[i] = {
                    flags: version > 2e3 ? r.getUint32() : 0,
                    texture: r.getString(),
                    lower: r.getString(),
                    upper: r.getString()
                }
            }
        }
    }
};
ZamModelViewer.Destiny = function() {};
ZamModelViewer.Destiny.Model = function(renderer, viewer, model, index, parent) {
    var self = this;
    self.renderer = renderer;
    self.viewer = viewer;
    self.model = model;
    self.modelPath = null;
    self.loaded = false;
    self.opts = self.viewer.options;
    self.gender = self.opts.gender ? parseInt(self.opts.gender) : 0;
    self.meta = null;
    self.index = index;
    self.parent = parent || null;
    self.models = null;
    self.textureLookup = {};
    self.textures = null;
    self.geometry = null;
    self.genderGeometry = [null, null];
    self.genderTextures = [null, null];
    self.dyeGeometry = null;
    self.dyeTextures = null;
    self.gear = null;
    self.matrix = mat4.create();
    self.ib = null;
    self.shaderReady = false;
    self.vs = null;
    self.fs = null;
    self.program = null;
    self.uniforms = null;
    self.attribs = null;
    self.ambientColor = [.35, .35, .35, 1];
    self.primaryColor = [1, 1, 1, 1];
    self.secondaryColor = [.35, .35, .35, 1];
    self.lightDir1 = vec3.create();
    self.lightDir2 = vec3.create();
    self.lightDir3 = vec3.create();
    vec3.normalize(self.lightDir1, [-3, -3, -4]);
    vec3.normalize(self.lightDir2, [3, 1, -3]);
    vec3.normalize(self.lightDir3, [-3, -1, -5]);
    self.lightIntensity = vec4.set(vec4.create(), .7, .15, .15, .25);
    self.animBounds = false;
    self.boundsCenter = [0, 0, 0];
    self.boundsSize = [0, 0, 0];
    self.boundsMin = [0, 0, 0];
    self.boundsMax = [0, 0, 0];
    self.tmpMat = mat4.create();
    self.tmpVec = vec3.create();
    self.load()
};
ZamModelViewer.Models[ZamModelViewer.DESTINY] = ZamModelViewer.Destiny.Model;
ZamModelViewer.Destiny.Model.prototype = {
    destroy: function() {
        var self = this,
            gl = self.renderer.context,
            i, j;
        if (self.program) gl.deleteProgram(self.program);
        if (self.vs) gl.deleteShader(self.vs);
        if (self.fs) gl.deleteShader(self.fs);
        if (self.textures) {
            for (i = 0; i < self.textures.length; ++i) {
                self.textures[i].destroy()
            }
        }
        if (self.models) {
            for (i = 0; i < self.models.length; ++i) {
                self.models[i].destroy()
            }
        }
        if (self.geometry) {
            for (i = 0; i < self.geometry.length; ++i) {
                self.geometry[i].destroy()
            }
        }
    },
    update: function() {
        var self = this,
            i;
        var delta = self.renderer.delta;
        if (self.skeleton) self.skeleton.update(delta);
        if (self.models) {
            for (i = 0; i < self.models.length; ++i) {
                self.models[i].update()
            }
        } else if (self.geometry && self.parent && self.parent.skeleton) {
            for (i = 0; i < self.geometry.length; ++i) {
                self.geometry[i].update()
            }
        }
    },
    draw: function() {
        var self = this,
            gl = self.renderer.context,
            i;
        if (!self.loaded) return;
        if (!self.shaderReady) self.initShader();
        if (!self.program) return;
        self.update();
        gl.useProgram(self.program);
        gl.frontFace(gl.CW);
        gl.disable(gl.CULL_FACE);
        if (self.parent) {
            gl.uniformMatrix4fv(self.uniforms.vModelMatrix, false, self.parent.matrix)
        } else {
            gl.uniformMatrix4fv(self.uniforms.vModelMatrix, false, self.matrix)
        }
        gl.uniformMatrix4fv(self.uniforms.vViewMatrix, false, self.renderer.viewMatrix);
        gl.uniformMatrix4fv(self.uniforms.vProjMatrix, false, self.renderer.projMatrix);
        gl.uniform4fv(self.uniforms.fLightIntensity, self.lightIntensity);
        gl.uniform3fv(self.uniforms.fLightDir1, self.lightDir1);
        gl.uniform3fv(self.uniforms.fLightDir2, self.lightDir2);
        gl.uniform3fv(self.uniforms.fLightDir3, self.lightDir3);
        gl.uniform3fv(self.uniforms.fCameraPos, self.renderer.eye);
        gl.uniform1i(self.uniforms.fHasParent, !!self.parent);
        if (self.models) {
            for (i = 0; i < self.models.length; ++i) {
                self.models[i].draw()
            }
        } else if (self.geometry) {
            var delta = self.renderer.delta;
            for (i = 0; i < self.geometry.length; ++i) {
                self.geometry[i].draw(delta)
            }
        }
    },
    updateBounds: function() {
        var self = this,
            i, j, m, g;
        var min = vec3.set(self.boundsMin, 9999, 9999, 9999),
            max = vec3.set(self.boundsMax, -9999, -9999, -9999);
        if (!self.models) {
            for (i = 0; i < self.geometry.length; ++i) {
                g = self.geometry[i];
                for (j = 0; j < g.meshes.length; ++j) {
                    m = g.meshes[j];
                    min = vec3.min(min, min, m.boundsMin);
                    max = vec3.max(max, max, m.boundsMax)
                }
            }
        } else {
            for (i = 0; i < self.models.length; ++i) {
                m = self.models[i];
                if (!m.loaded) continue;
                min = vec3.min(min, min, m.boundsMin);
                max = vec3.max(max, max, m.boundsMax)
            }
        }
        vec3.subtract(self.boundsSize, max, min);
        vec3.scaleAndAdd(self.boundsCenter, min, self.boundsSize, .5);
        var hSize = self.boundsSize[2],
            wSize = self.boundsSize[0],
            dSize = self.boundsSize[1];
        if (!self.parent) {
            if (self.opts.dist) {
                self.renderer.distance = self.opts.dist
            } else {
                var ratio = self.renderer.width / self.renderer.height;
                var hTan = 2 * Math.tan(self.renderer.fov / 2 * .0174532925);
                var wTan = hTan * ratio;
                var hDist = hSize * 1.2 / hTan;
                var wDist = wSize * 1.2 / wTan;
                self.renderer.distance = Math.max(Math.max(hDist, wDist), dSize * 1.25)
            }
            mat4.identity(self.matrix);
            mat4.rotateZ(self.matrix, self.matrix, Math.PI / 2);
            mat4.translate(self.matrix, self.matrix, vec3.negate(self.tmpVec, self.boundsCenter))
        } else {
            self.parent.updateBounds()
        }
    }
};
ZamModelViewer.Destiny.Model.prototype.load = function() {
    var self = this;
    if (self.model) {
        self._load(self.model)
    } else if (self.opts.items) {
        var items;
        if ($.isArray(self.opts.items)) {
            items = self.opts.items
        } else {
            items = self.opts.items.split(";")
        }
        var excludeIdx = items.indexOf("4248210736");
        if (excludeIdx > -1) items.splice(excludeIdx, 1);
        $.getJSON(self.opts.contentPath + "skeleton.json", function(data) {
            self.skeleton = new ZamModelViewer.Destiny.Skeleton(self, data)
        });
        self.models = new Array(items.length);
        for (var i = 0; i < items.length; ++i) {
            self.models[i] = new ZamModelViewer.Destiny.Model(self.renderer, self.viewer, items[i], i, self)
        }
        self.loaded = true
    }
};
ZamModelViewer.Destiny.Model.prototype._load = function(id) {
    var self = this;
    var url = self.opts.contentPath + "geom/mobile/" + id + ".geom";
    if (self.opts.cacheBuster) {
        url += "?" + self.opts.cacheBuster
    } else {
        url += "?1"
    }
    $.ajax({
        url: url,
        type: "GET",
        dataType: "binary",
        responseType: "arraybuffer",
        processData: false,
        renderer: self.renderer,
        success: function(buffer) {
            self.loadGeom(buffer)
        },
        error: function(xhr, status, error) {
            console.log(error)
        }
    })
};
ZamModelViewer.Destiny.Model.prototype.loadGeom = function(buffer) {
    if (!buffer) {
        console.error("Bad buffer for DataView");
        return
    }
    var self = this,
        r = new ZamModelViewer.DataView(buffer),
        D = ZamModelViewer.Destiny,
        i;
    var magic = r.getUint32();
    if (magic != 572728357) {
        console.log("Bad magic value");
        return
    }
    var compressedData = new Uint8Array(buffer, r.position);
    var data = null;
    try {
        data = pako.inflate(compressedData)
    } catch (err) {
        console.log("Decompression error: " + err);
        return
    }
    r = new ZamModelViewer.DataView(data.buffer);
    var numTextures = r.getInt32();
    self.textures = new Array(numTextures);
    for (i = 0; i < numTextures; ++i) {
        var tex = r.getString();
        self.textures[i] = new D.Texture(self, "textures/mobile/" + tex);
        self.textureLookup[tex] = i
    }
    var numGeometry = r.getInt32();
    self.geometry = new Array(numGeometry);
    for (i = 0; i < numGeometry; ++i) {
        self.geometry[i] = new D.Geometry(self, r)
    }
    var numMaleGeom = r.getInt32();
    self.genderGeometry[0] = new Array(numMaleGeom);
    for (i = 0; i < numMaleGeom; ++i) {
        self.genderGeometry[0][i] = r.getInt32()
    }
    var numMaleTextures = r.getInt32();
    self.genderTextures[0] = new Array(numMaleTextures);
    for (i = 0; i < numMaleTextures; ++i) {
        self.genderTextures[0][i] = r.getInt32()
    }
    var numFemaleGeom = r.getInt32();
    self.genderGeometry[1] = new Array(numFemaleGeom);
    for (i = 0; i < numFemaleGeom; ++i) {
        self.genderGeometry[1][i] = r.getInt32()
    }
    var numFemaleTextures = r.getInt32();
    self.genderTextures[1] = new Array(numFemaleTextures);
    for (i = 0; i < numFemaleTextures; ++i) {
        self.genderTextures[1][i] = r.getInt32()
    }
    var numDyeGeom = r.getInt32();
    self.dyeGeometry = new Array(numDyeGeom);
    for (i = 0; i < numDyeGeom; ++i) {
        self.dyeGeometry[i] = r.getInt32()
    }
    var numDyeTextures = r.getInt32();
    self.dyeTextures = new Array(numDyeTextures);
    for (i = 0; i < numDyeTextures; ++i) {
        self.dyeTextures[i] = r.getInt32()
    }
    var gearLen = r.getInt32();
    var gearStr = r.getString(gearLen);
    self.gear = JSON.parse(gearStr);
    if (self.gear) {
        if (self.gear.locked_dyes && self.gear.locked_dyes.length > 0) {
            self.dyeLocked = true;
            self.dyeInfo = self.gear.locked_dyes
        } else if (self.gear.custom_dyes && self.gear.custom_dyes.length > 0) {
            self.dyeInfo = self.gear.custom_dyes;
            if (self.parent) self.parent.dyeInfo = self.dyeInfo
        } else if (self.gear.default_dyes && self.gear.default_dyes.length > 0) {
            self.dyeInfo = self.gear.default_dyes
        }
    }
    if (numGeometry > 0 && numMaleGeom == 0 && numFemaleGeom == 0) {
        for (i = 0; i < numGeometry; ++i) {
            self.geometry[i].show = true
        }
    } else {
        var geom = self.genderGeometry[self.gender];
        for (i = 0; i < geom.length; ++i) {
            self.geometry[geom[i]].show = true
        }
    }
    self.loaded = true;
    self.updateBounds()
};
ZamModelViewer.Destiny.Model.prototype.initShader = function() {
    var self = this,
        gl = self.renderer.context;
    self.shaderReady = true;
    var vs = self.renderer.compileShader(gl.VERTEX_SHADER, self.vertShader);
    var fs = self.renderer.compileShader(gl.FRAGMENT_SHADER, self.fragShader);
    var program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error("Error linking shaders");
        return
    }
    self.vs = vs;
    self.fs = fs;
    self.program = program;
    self.uniforms = {
        vModelMatrix: gl.getUniformLocation(program, "uModelMatrix"),
        vViewMatrix: gl.getUniformLocation(program, "uViewMatrix"),
        vProjMatrix: gl.getUniformLocation(program, "uProjMatrix"),
        vHasColor: gl.getUniformLocation(program, "uvHasColor"),
        fHasColor: gl.getUniformLocation(program, "ufHasColor"),
        fHasParent: gl.getUniformLocation(program, "uHasParent"),
        fHasDiffuse: gl.getUniformLocation(program, "uHasDiffuse"),
        fHasNormal: gl.getUniformLocation(program, "uHasNormal"),
        fHasStack: gl.getUniformLocation(program, "uHasStack"),
        fLit: gl.getUniformLocation(program, "uLit"),
        fDiffuse: gl.getUniformLocation(program, "uDiffuse"),
        fNormal: gl.getUniformLocation(program, "uNormal"),
        fStack: gl.getUniformLocation(program, "uStack"),
        fColor: gl.getUniformLocation(program, "uColor"),
        fLightIntensity: gl.getUniformLocation(program, "uLightIntensity"),
        fLightDir1: gl.getUniformLocation(program, "uLightDir1"),
        fLightDir2: gl.getUniformLocation(program, "uLightDir2"),
        fLightDir3: gl.getUniformLocation(program, "uLightDir3"),
        fCameraPos: gl.getUniformLocation(program, "uCameraPos")
    };
    self.attribs = {
        position: gl.getAttribLocation(program, "aPosition"),
        normal: gl.getAttribLocation(program, "aNormal"),
        tangent: gl.getAttribLocation(program, "aTangent"),
        color: gl.getAttribLocation(program, "aColor"),
        texcoord: gl.getAttribLocation(program, "aTexCoords")
    }
};
ZamModelViewer.Destiny.Model.prototype.vertShader = "    attribute vec3 aPosition;    attribute vec4 aNormal;    attribute vec4 aTangent;    attribute vec2 aTexCoords;    attribute vec4 aColor;        varying vec3 vPosition;    varying vec3 vNormal;    varying vec3 vTangent;    varying vec3 vBinormal;    varying vec2 vTexCoords;    varying vec4 vColor;        uniform mat4 uModelMatrix;    uniform mat4 uViewMatrix;    uniform mat4 uProjMatrix;    uniform bool uvHasColor;        void main(void) {        gl_Position = uProjMatrix * uViewMatrix * uModelMatrix * vec4(aPosition, 1);        vPosition = (uViewMatrix * uModelMatrix * vec4(aPosition, 1)).xyz;                vTexCoords = aTexCoords;        vec4 normal = normalize(aNormal);        vec4 tangent = normalize(aTangent);        vec4 binormal = vec4(cross(normal.xyz, tangent.xyz) * tangent.w, 1);                vNormal = mat3(uViewMatrix * uModelMatrix) * normal.xyz;        vTangent = mat3(uViewMatrix * uModelMatrix) * tangent.xyz;        vBinormal = mat3(uViewMatrix * uModelMatrix) * binormal.xyz;                if (uvHasColor) {            vColor = aColor;        }    }";
ZamModelViewer.Destiny.Model.prototype.fragShader = "    precision mediump float;        varying vec3 vPosition;    varying vec3 vNormal;    varying vec3 vTangent;    varying vec3 vBinormal;    varying vec2 vTexCoords;    varying vec4 vColor;        uniform bool ufHasColor;    uniform bool uHasParent;    uniform bool uHasDiffuse;    uniform bool uHasNormal;    uniform bool uHasStack;    uniform bool uLit;    uniform sampler2D uDiffuse;    uniform sampler2D uNormal;    uniform sampler2D uStack;    uniform vec4 uColor;    uniform vec3 uLightDir1;    uniform vec3 uLightDir2;    uniform vec3 uLightDir3;    uniform vec4 uLightIntensity;    uniform vec3 uCameraPos;        vec3 saturate(vec3 value) {        return clamp(value, 0.0, 1.0);    }        float saturate(float value) {        return clamp(value, 0.0, 1.0);    }        void main(void) {        vec4 color = vec4(1, 0, 1, 1);        if (uHasDiffuse) { color.rgb = texture2D(uDiffuse, vTexCoords).rgb; }        vec3 tintColor = vec3(1.0, 1.0, 1.0);        vec3 stackColor = vec3(1.0, 1.0, 1.0);        float specExponent = 255.0;        vec3 specColor = vec3(0.2, 0.2, 0.2);                if (uHasStack) {            color.rgb = pow(color.rgb, vec3(2.2, 2.2, 2.2));            stackColor = texture2D(uStack, vTexCoords).rgb;                        if (uHasParent && stackColor.b < 0.05) { discard; }                        tintColor = uColor.rgb * saturate(color.rgb * 4.0) + saturate(color.rgb - 0.25);            color.rgb = tintColor * stackColor.r + color.rgb * (1.0 - stackColor.r);            float invGamma = 1.0 / 2.2;            color.rgb = pow(color.rgb, vec3(invGamma, invGamma, invGamma));                        specExponent = stackColor.g * 255.0;        }                if (uHasNormal && uLit) {            vec3 normalMap = texture2D(uNormal, vTexCoords).rgb;            vec3 tNormal = normalize(vNormal);            vec3 tTangent = normalize(vTangent);            vec3 tBinormal = normalize(vBinormal);                        vec3 normal = mat3(tTangent, tBinormal, tNormal) * normalize(normalMap * 2.0 - vec3(1.0, 1.0, 1.0));            vec3 cameraDir = normalize(uCameraPos - vPosition);                        vec3 litColor = color.rgb * uLightIntensity.a;                        float facing = -1.0 + 2.0 * float(gl_FrontFacing);            float NdotL = saturate(dot(normal, uLightDir1) * facing);            float RdotV = max(0.0, dot(normal * NdotL * 2.0 - uLightDir1, cameraDir));                        vec3 specular = saturate(specColor * pow(RdotV, specExponent)) * stackColor.g * uLightIntensity.x * NdotL * 0.5;            litColor += color.rgb * NdotL * uLightIntensity.x + specular;                        NdotL = saturate(dot(normal, uLightDir2) * facing);            RdotV = max(0.0, dot(normal * NdotL * 2.0 - uLightDir2, cameraDir));                        specular = saturate(specColor * pow(RdotV, specExponent)) * stackColor.g * uLightIntensity.y * NdotL * 0.5;            litColor += color.rgb * NdotL * uLightIntensity.y + specular;                        NdotL = saturate(dot(normal, uLightDir3) * facing);            RdotV = max(0.0, dot(normal * NdotL * 2.0 - uLightDir3, cameraDir));                        specular = saturate(specColor * pow(RdotV, specExponent)) * stackColor.g * uLightIntensity.z * NdotL * 0.5;            litColor += color.rgb * NdotL * uLightIntensity.z + specular;                        color.rgb = saturate(litColor);        }                gl_FragColor = color;    }";

ZamModelViewer.Destiny.Geometry = function(model, r) {
    var self = this,
        D = ZamModelViewer.Destiny,
        i;
    self.model = model;
    self.name = r.getString();
    var numMeshes = r.getInt32();
    self.meshes = new Array(numMeshes);
    for (i = 0; i < numMeshes; ++i) {
        self.meshes[i] = new D.Mesh(self, r)
    }
    var numPlates = r.getInt32();
    self.plates = new Array(numPlates);
    for (i = 0; i < numPlates; ++i) {
        self.plates[i] = new D.TexturePlate(self, r)
    }
    self.show = false
};
ZamModelViewer.Destiny.Geometry.prototype = {
    destroy: function() {
        var self = this,
            i;
        for (i = 0; i < self.meshes.length; ++i) {
            self.meshes[i].destroy()
        }
        for (i = 0; i < self.plates.length; ++i) {
            self.plates[i].destroy()
        }
    },
    update: function() {
        var self = this,
            i;
        if (!self.show) return;
        for (i = 0; i < self.meshes.length; ++i) {
            self.meshes[i].update()
        }
    },
    draw: function(delta) {
        var self = this,
            i;
        if (!self.show) return;
        for (i = 0; i < self.meshes.length; ++i) {
            self.meshes[i].draw(delta, true)
        }
        for (i = 0; i < self.meshes.length; ++i) {
            self.meshes[i].draw(delta)
        }
    },
    load: function() {
        var self = this,
            i;
        for (i = 0; i < self.plates.length; ++i) {
            self.plates[i].load()
        }
    }
};
ZamModelViewer.Destiny.Mesh = function(geometry, r) {
    var self = this,
        D = ZamModelViewer.Destiny,
        i, j;
    self.geometry = geometry;
    self.model = self.geometry.model;
    self.renderer = self.model.renderer;
    var gl = self.renderer.context;
    var numVbs = r.getInt32();
    self.vbs = new Array(numVbs);
    for (i = 0; i < numVbs; ++i) {
        self.vbs[i] = new D.VertexBuffer(self.model, r);
        if (!self.posInfo) {
            self.posInfo = self.vbs[i].getTypeData(D.VertexBuffer.Types.Position);
            if (self.posInfo && self.vbs[i].positions) self.positions = self.vbs[i].positions
        }
        if (!self.normInfo) {
            self.normInfo = self.vbs[i].getTypeData(D.VertexBuffer.Types.Normal);
            if (self.normInfo && self.vbs[i].normals) self.normals = self.vbs[i].normals
        }
        if (!self.tanInfo) {
            self.tanInfo = self.vbs[i].getTypeData(D.VertexBuffer.Types.Tangent);
            if (self.tanInfo && self.vbs[i].tangents) self.tangents = self.vbs[i].tangents
        }
        if (self.vbs[i].hasBlendWeights) self.weights = self.vbs[i].weights;
        if (self.vbs[i].hasBlendIndices) self.indices = self.vbs[i].indices
    }
    var numIndices = r.getInt32();
    var indices = new Uint16Array(numIndices);
    for (i = 0; i < numIndices; ++i) {
        indices[i] = r.getUint16()
    }
    self.boundsMin = [r.getFloat(), r.getFloat(), r.getFloat()];
    self.boundsMax = [r.getFloat(), r.getFloat(), r.getFloat()];
    self.offset = [r.getFloat(), r.getFloat(), r.getFloat()];
    self.scale = [r.getFloat(), r.getFloat(), r.getFloat()];
    self.ibData = [];
    var indexStart, indexCount, numTris;
    var numParts = r.getInt32();
    self.parts = new Array(numParts);
    for (i = 0; i < numParts; ++i) {
        self.parts[i] = new D.MeshPart(r);
        numTris = 0;
        indexStart = self.parts[i].indexStart;
        indexCount = self.parts[i].indexCount;
        self.parts[i].firstIndex = self.ibData.length;
        if (self.parts[i].primitive == 5) {
            for (j = 0; j < indexCount; ++j) {
                self.ibData.push(indices[indexStart + j])
            }
            numTris = indexCount
        } else if (self.parts[i].primitive == 3) {
            for (j = 0; j < indexCount; ++j) {
                self.ibData.push(indices[indexStart + j])
            }
            numTris = indexCount / 3
        } else {
            console.error("unhandled primitive type")
        }
        self.parts[i].triangleCount = numTris;
        self.tmpVec = vec4.create()
    }
    self.ib = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, self.ib);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(self.ibData), gl.STATIC_DRAW)
};
ZamModelViewer.Destiny.Mesh.prototype = {
    destroy: function() {
        var self = this,
            gl = self.renderer.context,
            i;
        if (self.ib) {
            gl.deleteBuffer(self.ib);
            self.ib = null
        }
        for (i = 0; i < self.vbs.length; ++i) {
            self.vbs[i].destroy()
        }
    },
    hasAllTextures: function() {
        var self = this;
        if (!self.texture && (!self.geometry.plates || self.geometry.plates.length > 0)) return false;
        if (!self.normalTexture && (!self.geometry.plates || self.geometry.plates.length > 1)) return false;
        if (!self.stackTexture && (!self.geometry.plates || self.geometry.plates.length > 2)) return false;
        for (var i = 0; i < self.parts.length; ++i) {
            if (self.parts[i].diffuse && !self.parts[i].diffuse.texture) return false;
            if (self.parts[i].normal && !self.parts[i].normal.texture) return false;
            if (self.parts[i].stack && !self.parts[i].stack.texture) return false
        }
        return true
    },
    getSlot: function(type) {
        var self = this,
            o, base = 0;
        for (var i = 0; i < self.vbs.length; ++i) {
            o = self.vbs[i].getSlot(type);
            if (o) {
                for (var idx in o) {
                    o[idx] += base
                }
                return 0
            } else {
                base += self.vbs[i].vbSlots
            }
        }
        return null
    },
    update: function() {
        var self = this;
        if (!self.posInfo || !self.model.parent || !self.model.parent.skeleton) return;
        var i, j, w, b, sk = self.model.parent.skeleton,
            tmpVec = self.tmpVec;
        var posStride = self.posInfo.stride,
            posCount = self.posInfo.count,
            posBuffer = self.posInfo.buffer,
            posOfs = self.posInfo.offset;
        var nrmStride = self.normInfo.stride,
            nrmCount = self.normInfo.count,
            nrmBuffer = self.normInfo.buffer,
            nrmOfs = self.normInfo.offset;
        var tanStride = self.tanInfo.stride,
            tanCount = self.tanInfo.count,
            tanBuffer = self.tanInfo.buffer,
            tanOfs = self.tanInfo.offset;
        for (i = 0; i < posCount; ++i, posOfs += posStride, nrmOfs += nrmStride, tanOfs += tanStride) {
            posBuffer[posOfs + 0] = posBuffer[posOfs + 1] = posBuffer[posOfs + 2] = 0;
            nrmBuffer[nrmOfs + 0] = nrmBuffer[nrmOfs + 1] = nrmBuffer[nrmOfs + 2] = 0;
            tanBuffer[tanOfs + 0] = tanBuffer[tanOfs + 1] = tanBuffer[tanOfs + 2] = 0;
            if (self.weights) {
                for (j = 0; j < 4; ++j) {
                    b = self.indices[i][j];
                    w = self.weights[i][j] / 255;
                    if (w == 0) continue;
                    vec3.transformMat4(tmpVec, self.positions[i], sk.finalMats[b]);
                    posBuffer[posOfs] += tmpVec[0] * w;
                    posBuffer[posOfs + 1] += tmpVec[1] * w;
                    posBuffer[posOfs + 2] += tmpVec[2] * w;
                    vec4.transformMat4(tmpVec, self.normals[i], sk.finalMats[b]);
                    nrmBuffer[nrmOfs] += tmpVec[0] * w;
                    nrmBuffer[nrmOfs + 1] += tmpVec[1] * w;
                    nrmBuffer[nrmOfs + 2] += tmpVec[2] * w;
                    vec4.transformMat4(tmpVec, self.tangents[i], sk.finalMats[b]);
                    tanBuffer[tanOfs] += tmpVec[0] * w;
                    tanBuffer[tanOfs + 1] += tmpVec[1] * w;
                    tanBuffer[tanOfs + 2] += tmpVec[2] * w
                }
            } else if (self.indices) {
                for (j = 0; j < 2; ++j) {
                    b = self.indices[i][j];
                    w = self.indices[i][j + 2] / 255;
                    if (w == 0) continue;
                    vec3.transformMat4(tmpVec, self.positions[i], sk.finalMats[b]);
                    posBuffer[posOfs] += tmpVec[0] * w;
                    posBuffer[posOfs + 1] += tmpVec[1] * w;
                    posBuffer[posOfs + 2] += tmpVec[2] * w;
                    vec4.transformMat4(tmpVec, self.normals[i], sk.finalMats[b]);
                    nrmBuffer[nrmOfs] += tmpVec[0] * w;
                    nrmBuffer[nrmOfs + 1] += tmpVec[1] * w;
                    nrmBuffer[nrmOfs + 2] += tmpVec[2] * w;
                    vec4.transformMat4(tmpVec, self.tangents[i], sk.finalMats[b]);
                    tanBuffer[tanOfs] += tmpVec[0] * w;
                    tanBuffer[tanOfs + 1] += tmpVec[1] * w;
                    tanBuffer[tanOfs + 2] += tmpVec[2] * w
                }
            } else {
                b = self.positions[i][3] | 0;
                vec3.transformMat4(tmpVec, self.positions[i], sk.finalMats[b]);
                posBuffer[posOfs] = tmpVec[0];
                posBuffer[posOfs + 1] = tmpVec[1];
                posBuffer[posOfs + 2] = tmpVec[2];
                vec4.transformMat4(tmpVec, self.normals[i], sk.finalMats[b]);
                nrmBuffer[nrmOfs] = tmpVec[0];
                nrmBuffer[nrmOfs + 1] = tmpVec[1];
                nrmBuffer[nrmOfs + 2] = tmpVec[2];
                vec4.transformMat4(tmpVec, self.tangents[i], sk.finalMats[b]);
                tanBuffer[tanOfs] = tmpVec[0];
                tanBuffer[tanOfs + 1] = tmpVec[1];
                tanBuffer[tanOfs + 2] = tmpVec[2]
            }
        }
        self.posInfo.vb.updateBuffers()
    }
};
ZamModelViewer.Destiny.Mesh.prototype.draw = function(delta, depthOnly) {
    var self = this,
        gl = self.renderer.context,
        i, p, t;
    if (!self.hasTextures) {
        for (i = 0; i < self.parts.length; ++i) {
            p = self.parts[i];
            if (p.diffuseTexture && !p.diffuse && self.model.textureLookup[p.diffuseTexture] !== undefined) {
                t = self.model.textures[self.model.textureLookup[p.diffuseTexture]];
                if (!t.img && !t.error) t.load();
                p.diffuse = t
            } else if (p.normalTexture && !p.normal && self.model.textureLookup[p.normalTexture] !== undefined) {
                t = self.model.textures[self.model.textureLookup[p.normalTexture]];
                if (!t.img && !t.error) t.load();
                p.normal = t
            } else if (p.stackTexture && !p.stack && self.model.textureLookup[p.stackTexture] !== undefined) {
                t = self.model.textures[self.model.textureLookup[p.stackTexture]];
                if (!t.img && !t.error) t.load();
                p.stack = t
            }
        }
        self.geometry.load();
        if (self.geometry.plates.length > 0) {
            p = self.geometry.plates[0];
            if (!self.texture && p.texture != null && p.texture.texture) self.texture = p.texture;
            p = self.geometry.plates[1];
            if (!self.normalTexture && p.texture != null && p.texture.texture) self.normalTexture = p.texture;
            p = self.geometry.plates[2];
            if (!self.stackTexture && p.texture != null && p.texture.texture) self.stackTexture = p.texture
        }
        if (self.hasAllTextures()) self.hasTextures = true
    }
    for (i = 0; i < self.vbs.length; ++i) {
        self.vbs[i].enable()
    }
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, self.ib);
    var hasColor = self.getSlot(ZamModelViewer.Destiny.VertexBuffer.Types.Color) != null;
    gl.uniform1i(self.model.uniforms.vHasColor, hasColor);
    gl.uniform1i(self.model.uniforms.fHasColor, hasColor);
    self.drawParts(depthOnly);
    for (i = 0; i < self.vbs.length; ++i) {
        self.vbs[i].disable()
    }
};
ZamModelViewer.Destiny.Mesh.prototype.drawParts = function(depthOnly) {
    var self = this,
        gl = self.renderer.context,
        dyes = self.model.dyeInfo,
        resetBlending = false,
        resetMask = false;
    if (!self.model.dyeLocked && self.model.parent && self.model.parent.dyeInfo) dyes = self.model.parent.dyeInfo;
    var i, j, k, p, alphaHadTexture = false;
    for (i = 0; i < self.parts.length; ++i) {
        p = self.parts[i];
        if (self.geometry.name == "482021716-1" && p.indexCount == 330 && p.flags == 0) continue;
        if (p.lodName.indexOf("0") == -1) continue;
        if (!depthOnly) {
            if ((p.flags & 32) > 0 || (p.flags & 64) > 0) continue
        } else {
            if ((p.flags & 32) == 0) continue
        }
        if ((p.flags & 32) > 0) {
            if (!resetBlending) {
                resetBlending = true;
                gl.blendFunc(gl.SRC_COLOR, gl.ONE);
                gl.depthMask(false)
            }
            if (p.diffuseTexture) alphaHadTexture = true;
            else if (alphaHadTexture) continue
        } else {
            if (resetBlending) {
                resetBlending = false;
                gl.blendFunc(gl.ONE, gl.ZERO);
                gl.depthMask(true)
            }
            if (resetMask) {
                resetMask = false;
                gl.colorMask(true, true, true, true)
            }
        }
        var hasDiffuse = true,
            hasNormal = true,
            hasStack = true;
        gl.activeTexture(gl.TEXTURE0);
        if (p.diffuse) {
            if (p.diffuse.texture) {
                gl.bindTexture(gl.TEXTURE_2D, p.diffuse.texture)
            } else hasDiffuse = false
        } else if (self.texture && self.texture.texture) {
            gl.bindTexture(gl.TEXTURE_2D, self.texture.texture)
        } else hasDiffuse = false;
        gl.activeTexture(gl.TEXTURE1);
        if (p.normal) {
            if (p.normal.texture) {
                gl.bindTexture(gl.TEXTURE_2D, p.normal.texture)
            } else hasNormal = false
        } else if (self.normalTexture && self.normalTexture.texture) {
            gl.bindTexture(gl.TEXTURE_2D, self.normalTexture.texture)
        } else hasNormal = false;
        gl.activeTexture(gl.TEXTURE2);
        if (p.stack) {
            if (p.stack.texture) {
                gl.bindTexture(gl.TEXTURE_2D, p.stack.texture)
            } else hasStack = false
        } else if (self.stackTexture && self.stackTexture.texture) {
            gl.bindTexture(gl.TEXTURE_2D, self.stackTexture.texture)
        } else hasStack = false;
        if (dyes) {
            for (j = 0; j < dyes.length; ++j) {
                if (dyes[j].slot_type_index == p.dyeIndex) {
                    var dye = dyes[j].material_properties;
                    if (p.usePrimaryColor)
                        for (k = 0; k < 4; ++k) self.tmpVec[k] = dye.primary_color[k];
                    else
                        for (k = 0; k < 4; ++k) self.tmpVec[k] = dye.secondary_color[k];
                    break
                }
            }
        }
        if (!hasDiffuse) {
            continue
        }
        gl.uniform1i(self.model.uniforms.fHasDiffuse, hasDiffuse);
        gl.uniform1i(self.model.uniforms.fHasNormal, hasNormal);
        gl.uniform1i(self.model.uniforms.fHasStack, hasStack);
        gl.uniform1i(self.model.uniforms.fLit, (p.flags & 32) == 0);
        if (hasDiffuse) gl.uniform1i(self.model.uniforms.fDiffuse, 0);
        if (hasNormal) gl.uniform1i(self.model.uniforms.fNormal, 1);
        if (hasStack) gl.uniform1i(self.model.uniforms.fStack, 2);
        gl.uniform4fv(self.model.uniforms.fColor, self.tmpVec);
        if (p.primitive == 5) {
            gl.drawElements(gl.TRIANGLE_STRIP, p.triangleCount, gl.UNSIGNED_SHORT, p.firstIndex * 2)
        } else {
            gl.drawElements(gl.TRIANGLES, p.triangleCount * 3, gl.UNSIGNED_SHORT, p.firstIndex * 2)
        }
    }
    if (resetBlending) {
        gl.blendFunc(gl.ONE, gl.ZERO);
        gl.depthMask(true)
    }
    if (resetMask) {
        gl.colorMask(true, true, true, true)
    }
};
ZamModelViewer.Destiny.MeshPart = function(r) {
    var self = this,
        i;
    self.indexStart = r.getUint16();
    self.indexCount = r.getUint16();
    self.indexMin = r.getUint16();
    self.indexMax = r.getUint16();
    self.flags = r.getUint32();
    self.primitive = r.getInt32();
    var dyeIndex = r.getInt32();
    self.externalId = r.getUint32();
    self.lod = r.getInt32();
    self.lodName = r.getString();
    self.usePrimaryColor = true;
    switch (dyeIndex) {
        case 0:
            self.dyeIndex = 0;
            break;
        case 1:
            self.dyeIndex = 0;
            self.usePrimaryColor = false;
            break;
        case 2:
            self.dyeIndex = 1;
            break;
        case 3:
            self.dyeIndex = 1;
            self.usePrimaryColor = false;
            break;
        case 4:
            self.dyeIndex = 2;
            break;
        case 5:
            self.dyeIndex = 2;
            self.usePrimaryColor = false;
            break;
        case 6:
        case 7:
            self.dyeIndex = 3;
            break
    }
    var numTextures = r.getInt32();
    self.textures = new Array(numTextures);
    for (i = 0; i < numTextures; ++i) {
        self.textures[i] = r.getString();
        if (self.textures[i].indexOf(".") == -1) self.textures[i] += ".png"
    }
    if (numTextures >= 5) {
        self.diffuseTexture = self.textures[0];
        self.normalTexture = self.textures[2];
        self.stackTexture = self.textures[4]
    } else if (numTextures > 0 && self.textures[0].indexOf("detail") == -1) {
        self.diffuseTexture = self.textures[0]
    }
};
ZamModelViewer.Destiny.Texture = function(model, url) {
    var self = this;
    self.model = model;
    self.url = model.opts.contentPath + url;
    if (model.opts.cacheBuster) {
        self.url += "?" + model.opts.cacheBuster
    } else {
        self.url += "?1"
    }
    self.texture = null
};
ZamModelViewer.Destiny.Texture.prototype = {
    destroy: function() {
        var self = this,
            gl = self.model.renderer.context;
        if (self.texture) gl.deleteTexture(self.texture);
        self.img = null
    },
    load: function() {
        var self = this,
            gl = self.model.renderer.context;
        (function(self, gl) {
            self.img = new Image;
            self.img.crossOrigin = "";
            self.img.onload = function() {
                self.img.loaded = true;
                self.texture = gl.createTexture();
                gl.bindTexture(gl.TEXTURE_2D, self.texture);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, self.img);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
            };
            self.img.onerror = function() {
                self.img = null;
                self.error = true
            };
            self.img.src = self.url
        })(self, gl)
    }
};
ZamModelViewer.Destiny.TexturePlate = function(geom, r) {
    var self = this,
        D = ZamModelViewer.Destiny;
    self.geometry = geom;
    self.model = geom.model;
    self.name = r.getString();
    self.id = r.getString();
    self.index = r.getInt32();
    self.width = r.getInt16();
    self.height = r.getInt16();
    var numTextures = r.getInt32();
    self.textures = new Array(numTextures);
    for (var i = 0; i < numTextures; ++i) {
        self.textures[i] = new D.TexturePlate.Part(r)
    }
};
ZamModelViewer.Destiny.TexturePlate.prototype = {
    destroy: function() {
        var self = this;
        if (self.texture) self.texture.destroy()
    },
    load: function() {
        var self = this,
            D = ZamModelViewer.Destiny;
        if (self.name != "diffuse" && self.name != "gearstack" && self.name != "normal") return;
        if (!self.texture) {
            self.texture = new D.Texture(self.model, "textures/mobile/" + self.id + ".png");
            self.texture.load()
        }
    }
};
ZamModelViewer.Destiny.TexturePlate.Part = function(r) {
    var self = this;
    self.name = r.getString();
    self.index = r.getInt32();
    self.width = r.getInt16();
    self.height = r.getInt16();
    self.x = r.getInt16();
    self.y = r.getInt16()
};
ZamModelViewer.Destiny.VertexBuffer = function(model, r) {
    var self = this,
        Types = ZamModelViewer.Destiny.VertexBuffer.Types;
    self.model = model;
    self.renderer = model.renderer;
    self.count = r.getInt32();
    self.stride = r.getInt32();
    var numElements = r.getInt32();
    self.elements = new Array(numElements);
    var slot = 0,
        offset = 0,
        i, j;
    for (i = 0; i < numElements; ++i) {
        var type = r.getUint8();
        var obj = {
            type: type,
            slot: slot,
            offset: offset
        };
        if (type >= Types.Position && type <= Types.MaxPosition) {
            self.positions = new Array(numElements);
            self.hasPosition = true;
            obj.name = "position";
            obj.baseType = Types.Position;
            obj.size = 3;
            obj.read = self.readPosition;
            offset += 3
        } else if (type >= Types.TexCoord && type <= Types.MaxTexCoord) {
            obj.name = "texcoord";
            obj.baseType = Types.TexCoord;
            obj.size = 2;
            obj.read = self.readTexCoord;
            offset += 2
        } else if (type >= Types.Normal && type <= Types.MaxNormal) {
            self.normals = new Array(numElements);
            self.hasNormal = true;
            obj.name = "normal";
            obj.baseType = Types.Normal;
            obj.size = 4;
            obj.read = self.readNormal;
            offset += 4
        } else if (type >= Types.Tangent && type <= Types.MaxTangent) {
            self.tangents = new Array(numElements);
            self.hasTangent = true;
            obj.name = "tangent";
            obj.baseType = Types.Tangent;
            obj.size = 4;
            obj.read = self.readTangent;
            offset += 4
        } else if (type >= Types.Color && type <= Types.MaxColor) {
            obj.name = "color";
            obj.baseType = Types.Color;
            obj.size = 4;
            obj.read = self.readColor;
            offset += 4
        } else if (type >= Types.BlendWeight && type <= Types.MaxWeight) {
            self.weights = new Array(numElements);
            self.hasBlendWeights = true;
            obj.baseType = Types.BlendWeight;
            obj.read = self.readBlendWeight;
            obj.discard = true
        } else if (type >= Types.BlendIndex && type <= Types.MaxIndex) {
            self.indices = new Array(numElements);
            self.hasBlendIndices = true;
            obj.baseType = Types.BlendIndex;
            obj.read = self.readBlendIndex;
            obj.discard = true
        } else {
            throw "bad type"
        }
        self.elements[i] = obj;
        if (obj.discard) continue;
        slot++
    }
    self.vbStride = offset;
    self.vbSlots = slot;
    self.vbData = new Float32Array(self.count * self.vbStride);
    var idx = 0;
    for (i = 0; i < self.count; ++i) {
        for (j = 0; j < numElements; ++j) {
            idx = self.elements[j].read.call(this, r, self.vbData, idx, i)
        }
    }
    self.updateBuffers()
};
ZamModelViewer.Destiny.VertexBuffer.prototype = {
    destroy: function() {
        var self = this,
            gl = self.renderer.context;
        if (self.buffer) {
            gl.deleteBuffer(self.buffer);
            self.buffer = null
        }
    },
    enable: function() {
        var self = this,
            gl = self.renderer.context,
            i, e;
        gl.bindBuffer(gl.ARRAY_BUFFER, self.buffer);
        for (i = 0; i < self.elements.length; ++i) {
            e = self.elements[i];
            if (e.name && e.type == e.baseType) {
                gl.enableVertexAttribArray(self.model.attribs[e.name]);
                gl.vertexAttribPointer(self.model.attribs[e.name], e.size, gl.FLOAT, false, self.vbStride * 4, e.offset * 4)
            }
        }
    },
    disable: function() {
        var self = this,
            gl = self.renderer.context,
            i, e;
        gl.bindBuffer(gl.ARRAY_BUFFER, self.buffer);
        for (i = 0; i < self.elements.length; ++i) {
            e = self.elements[i];
            if (e.name && e.type == e.baseType) {
                gl.disableVertexAttribArray(self.model.attribs[e.name])
            }
        }
    },
    updateBuffers: function() {
        var self = this,
            gl = self.renderer.context;
        if (self.vbStride > 0) {
            if (!self.buffer) {
                self.buffer = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, self.buffer);
                gl.bufferData(gl.ARRAY_BUFFER, self.vbData, gl.DYNAMIC_DRAW)
            } else {
                gl.bindBuffer(gl.ARRAY_BUFFER, self.buffer);
                gl.bufferSubData(gl.ARRAY_BUFFER, 0, self.vbData)
            }
        }
    },
    getTypeData: function(type) {
        var self = this,
            e, i;
        for (i = 0; i < self.elements.length; ++i) {
            e = self.elements[i];
            if (e.type == type) {
                return {
                    buffer: self.vbData,
                    offset: e.offset,
                    stride: self.vbStride,
                    count: self.count,
                    vb: self
                }
            }
        }
        return null
    },
    getSlot: function(type) {
        var self = this,
            obj = {},
            e, i;
        for (i = 0; i < self.elements.length; ++i) {
            e = self.elements[i];
            if (e.discard) continue;
            if (type == e.baseType) {
                var index = e.type - e.baseType;
                obj[index] = e.slot
            }
        }
        var empty = true;
        for (var idx in obj) {
            empty = false;
            break
        }
        if (empty) return null;
        return obj
    },
    readPosition: function(r, vbData, idx, i) {
        var self = this;
        var pos = self.positions[i] = [r.getFloat(), r.getFloat(), r.getFloat(), r.getFloat()];
        vbData[idx++] = pos[0];
        vbData[idx++] = pos[1];
        vbData[idx++] = pos[2];
        return idx
    },
    readTexCoord: function(r, vbData, idx, i) {
        vbData[idx++] = r.getFloat();
        vbData[idx++] = r.getFloat();
        return idx
    },
    readNormal: function(r, vbData, idx, i) {
        var self = this;
        var normal = self.normals[i] = [r.getFloat(), r.getFloat(), r.getFloat(), r.getFloat()];
        vbData[idx++] = normal[0];
        vbData[idx++] = normal[1];
        vbData[idx++] = normal[2];
        vbData[idx++] = normal[3];
        return idx
    },
    readTangent: function(r, vbData, idx, i) {
        var self = this;
        var tangent = self.tangents[i] = [r.getFloat(), r.getFloat(), r.getFloat(), r.getFloat()];
        vbData[idx++] = tangent[0];
        vbData[idx++] = tangent[1];
        vbData[idx++] = tangent[2];
        vbData[idx++] = tangent[3];
        return idx
    },
    readColor: function(r, vbData, idx, i) {
        vbData[idx++] = r.getUint8() / 255;
        vbData[idx++] = r.getUint8() / 255;
        vbData[idx++] = r.getUint8() / 255;
        vbData[idx++] = r.getUint8() / 255;
        return idx
    },
    readBlendWeight: function(r, vbData, idx, i) {
        var self = this;
        self.weights[i] = [r.getUint8(), r.getUint8(), r.getUint8(), r.getUint8()];
        return idx
    },
    readBlendIndex: function(r, vbData, idx, i) {
        var self = this;
        self.indices[i] = [r.getUint8(), r.getUint8(), r.getUint8(), r.getUint8()];
        return idx
    }
};
ZamModelViewer.Destiny.VertexBuffer.Types = {
    Position: 1,
    MaxPosition: 3,
    TexCoord: 4,
    MaxTexCoord: 11,
    Normal: 12,
    MaxNormal: 18,
    Tangent: 19,
    MaxTangent: 25,
    Color: 26,
    MaxColor: 32,
    BlendWeight: 33,
    MaxWeight: 39,
    BlendIndex: 40,
    MaxIndex: 47
};
ZamModelViewer.Destiny.Skeleton = function(model, data) {
    var self = this,
        i, j;
    if (!data || !data.anim || !data.bones) {
        throw "Invalid skeleton data"
    }
    self.model = model;
    var anim = self.anim = data.anim;
    var bones = self.bones = data.bones;
    self.fps = 30;
    self.frameDuration = 1 / self.fps;
    self.frameTime = 0;
    self.frame = 0;
    self.animFrames = new Array(anim.frame_count);
    var tmpMat = mat4.create();
    var staticBoneData = anim.static_bone_data,
        staticScaleMap = staticBoneData.scale_control_map,
        staticRotationMap = staticBoneData.rotation_control_map,
        staticTranslationMap = staticBoneData.translation_control_map,
        staticFrame = staticBoneData.transform_stream_header.streams.frames[0],
        staticScales = staticFrame.scales,
        staticRotations = staticFrame.rotations,
        staticTranslations = staticFrame.translations,
        animBoneData = anim.animated_bone_data,
        animScaleMap = animBoneData.scale_control_map,
        animRotationMap = animBoneData.rotation_control_map,
        animTranslationMap = animBoneData.translation_control_map,
        animTransformFrames = animBoneData.transform_stream_header.streams.frames;
    for (i = 0; i < anim.frame_count; ++i) {
        var frameMats = new Array(anim.node_count);
        var frame = animTransformFrames[i];
        for (j = 0; j < anim.node_count; ++j) {
            var staticScaleIdx = staticScaleMap.indexOf(j),
                staticRotIdx = staticRotationMap.indexOf(j),
                staticTransIdx = staticTranslationMap.indexOf(j);
            var animScaleIdx = animScaleMap.indexOf(j),
                animRotIdx = animRotationMap.indexOf(j),
                animTransIdx = animTranslationMap.indexOf(j);
            var scale = staticScaleIdx >= 0 ? staticScales[staticScaleIdx] : frame.scales[animScaleIdx];
            var rot = staticRotIdx >= 0 ? staticRotations[staticRotIdx] : frame.rotations[animRotIdx];
            var trans = staticTransIdx >= 0 ? staticTranslations[staticTransIdx] : frame.translations[animTransIdx];
            mat4.fromQuat(tmpMat, rot);
            mat4.scale(tmpMat, tmpMat, [scale, scale, scale]);
            tmpMat[12] = trans[0];
            tmpMat[13] = trans[1];
            tmpMat[14] = trans[2];
            frameMats[j] = mat4.clone(tmpMat)
        }
        self.animFrames[i] = frameMats
    }
    self.frameMats = new Array(anim.node_count);
    self.finalMats = new Array(anim.node_count);
    for (i = 0; i < anim.node_count; ++i) {
        self.frameMats[i] = mat4.create();
        self.finalMats[i] = mat4.create()
    }
    self.parentNodes = new Array(bones.definition.nodes.length);
    self.invMatrices = new Array(bones.definition.default_inverse_object_space_transforms.length);
    for (i = 0; i < bones.definition.nodes.length; ++i) {
        self.parentNodes[i] = bones.definition.nodes[i].parent_node_index
    }
    for (i = 0; i < bones.definition.default_inverse_object_space_transforms.length; ++i) {
        var info = bones.definition.default_inverse_object_space_transforms[i];
        mat4.fromQuat(tmpMat, info.r);
        mat4.scale(tmpMat, tmpMat, [info.ts[3], info.ts[3], info.ts[3]]);
        tmpMat[12] = info.ts[0];
        tmpMat[13] = info.ts[1];
        tmpMat[14] = info.ts[2];
        self.invMatrices[i] = mat4.clone(tmpMat)
    }
};
ZamModelViewer.Destiny.Skeleton.prototype = {
    update: function(delta) {
        var self = this;
        self.frameTime += delta;
        while (self.frameTime >= self.frameDuration) {
            self.frameTime -= self.frameDuration;
            self.frame++
        }
        while (self.frame >= self.anim.frame_count) self.frame -= self.anim.frame_count;
        var mat, frameMat, parentId;
        var mats = self.animFrames[self.frame];
        for (var i = 0; i < self.anim.node_count; ++i) {
            mat = mats[i];
            frameMat = self.frameMats[i];
            parentId = self.parentNodes[i];
            if (parentId >= 0) {
                mat4.multiply(frameMat, self.frameMats[parentId], mat)
            } else {
                mat4.copy(frameMat, mat)
            }
            mat4.multiply(self.finalMats[i], frameMat, self.invMatrices[i])
        }
    }
};
ZamModelViewer.Lol = function() {};
ZamModelViewer.Lol.Model = function(renderer, viewer, model, index, parent) {
    var self = this;
    vec3.set(renderer.up, 0, 1, 0);
    self.renderer = renderer;
    self.viewer = viewer;
    self.model = model;
    self.modelIndex = index;
    self.loaded = false;
    self.animsLoaded = false;
    self.opts = self.viewer.options;
    self.meta = null;
    self.parent = parent || null;
    self.texture = null;
    self.meshTextures = {};
    self.animIndex = -1;
    self.animName = null;
    self.meshes = null;
    self.vertices = null;
    self.indices = null;
    self.transforms = null;
    self.bones = null;
    self.boneLookup = {};
    self.matrix = mat4.create();
    self.ib = null;
    self.shaderReady = false;
    self.vs = null;
    self.fs = null;
    self.program = null;
    self.uniforms = null;
    self.attribs = null;
    self.ambientColor = [.35, .35, .35, 1];
    self.primaryColor = [1, 1, 1, 1];
    self.secondaryColor = [.35, .35, .35, 1];
    self.lightDir1 = vec3.create();
    self.lightDir2 = vec3.create();
    self.lightDir3 = vec3.create();
    vec3.normalize(self.lightDir1, [5, 5, -5]);
    vec3.normalize(self.lightDir2, [5, 5, 5]);
    vec3.normalize(self.lightDir3, [-5, -5, -5]);
    self.animBounds = false;
    self.boundsCenter = [0, 0, 0];
    self.boundsSize = [0, 0, 0];
    self.boundsMin = [0, 0, 0];
    self.boundsMax = [0, 0, 0];
    self.modelOffset = 0;
    self.defaultDistance = 0;
    self.newAnimation = false;
    self.tmpMat = mat4.create();
    self.tmpVec = vec4.create();
    self.ANIMATED = true;
    self.load()
};
ZamModelViewer.Models[ZamModelViewer.LOL] = ZamModelViewer.Lol.Model;
ZamModelViewer.Lol.Model.prototype = {
    external: {
        getNumAnimations: function() {
            return this.animations ? this.animations.length : 0
        },
        getAnimation: function(index) {
            if (this.animations && this.animations.length > index && index > -1) {
                return this.animations[index].name
            } else {
                return ""
            }
        },
        setAnimation: function(name) {
            this.setAnimation(name)
        },
        isLoaded: function() {
            return this.loaded && this.animsLoaded
        }
    },
    destroy: function() {
        var self = this,
            gl = self.renderer.context,
            i, j;
        if (self.program) gl.deleteProgram(self.program);
        if (self.vs) gl.deleteShader(self.vs);
        if (self.fs) gl.deleteShader(self.fs);
        if (self.textures) {
            for (i = 0; i < self.textures.length; ++i) {
                self.textures[i].destroy()
            }
        }
        if (self.models) {
            for (i = 0; i < self.models.length; ++i) {
                self.models[i].destroy()
            }
        }
        if (self.geometry) {
            for (i = 0; i < self.geometry.length; ++i) {
                self.geometry[i].destroy()
            }
        }
    },
    setAnimation: function(name) {
        var self = this,
            i;
        self.animIndex = -1;
        if (!self.animations) return;
        name = name.toLowerCase();
        if (name == "idle" || name == "attack") {
            var anims = [],
                re = new RegExp(name + "[0-9]*");
            for (i = 0; i < self.animations.length; ++i) {
                if (self.animations[i].name.search(re) == 0) anims.push(i)
            }
            if (anims.length > 0) {
                self.animIndex = anims[Math.randomInt(0, anims.length)]
            }
        } else {
            for (i = 0; i < self.animations.length; ++i) {
                if (self.animations[i].name == name) {
                    self.animIndex = i;
                    break
                }
            }
        }
        if (self.animIndex == -1) {
            if (name == "idle") {
                self.animIndex = 0;
                self.animName = self.animations[0].name
            } else {
                self.setAnimation("idle")
            }
        } else {
            self.animName = name
        }
        self.animTime = self.renderer.time;
        self.newAnimation = true
    },
    update: function() {
        var self = this,
            i, j, gl = self.renderer.context;
        if (!self.loaded || !self.vertices || !self.animations || self.animations.length == 0) return;
        if (self.animIndex == -1) self.setAnimation("idle");
        var time = self.renderer.time - self.animTime;
        var anim = self.animations[self.animIndex];
        if (time >= anim.duration) {
            self.setAnimation(self.animName);
            anim = self.animations[self.animIndex];
            time = 0
        }
        if (self.ANIMATED) {
            var timePerFrame = 1e3 / anim.fps;
            var frame = Math.floor(time / timePerFrame);
            var r = time % timePerFrame / timePerFrame;
            var b;
            if (self.version >= 2) {
                for (i = 0; i < self.bones.length; ++i) {
                    b = self.bones[i];
                    if (anim.lookup[b.name] === undefined) {
                        if (b.parent != -1) {
                            mat4.multiply(self.transforms[i], self.transforms[b.parent], b.incrMatrix)
                        } else {
                            mat4.copy(self.transforms[i], b.incrMatrix)
                        }
                    } else {
                        anim.bones[anim.lookup[b.name]].update(i, frame, r)
                    }
                }
            } else {
                for (i = 0; i < anim.bones.length; ++i) {
                    b = anim.bones[i];
                    if (self.boneLookup[b.bone] !== undefined) {
                        b.update(self.boneLookup[b.bone], frame, r)
                    } else {
                        var parentBone = anim.bones[i - 1];
                        if (!parentBone) continue;
                        if (parentBone.index + 1 < self.transforms.length) {
                            mat4.copy(self.transforms[parentBone.index + 1], self.transforms[parentBone.index])
                        }
                        b.index = parentBone.index + 1
                    }
                }
            }
            var numBones = Math.min(self.transforms.length, self.bones.length);
            for (i = 0; i < numBones; ++i) {
                mat4.multiply(self.transforms[i], self.transforms[i], self.bones[i].baseMatrix)
            }
            mat4.identity(self.tmpMat);
            var numVerts = self.vertices.length,
                vbData = self.vbData,
                vec = self.tmpVec,
                v, w, m, idx;
            for (i = 0; i < numVerts; ++i) {
                v = self.vertices[i];
                idx = i * 8;
                vbData[idx] = vbData[idx + 1] = vbData[idx + 2] = vbData[idx + 3] = vbData[idx + 4] = vbData[idx + 5] = 0;
                for (j = 0; j < 4; ++j) {
                    if (v.weights[j] > 0) {
                        w = v.weights[j];
                        m = anim.fps == 1 ? self.tmpMat : self.transforms[v.bones[j]];
                        vec3.transformMat4(vec, v.position, m);
                        vbData[idx] += vec[0] * w;
                        vbData[idx + 1] += vec[1] * w;
                        vbData[idx + 2] += vec[2] * w;
                        vec4.transformMat4(vec, v.normal, m);
                        vbData[idx + 3] += vec[0] * w;
                        vbData[idx + 4] += vec[1] * w;
                        vbData[idx + 5] += vec[2] * w
                    }
                }
            }
            if (!self.animBounds) {
                self.updateBounds(true);
                self.animBounds = true
            }
            gl.bindBuffer(gl.ARRAY_BUFFER, self.vb);
            gl.bufferSubData(gl.ARRAY_BUFFER, 0, self.vbData)
        }
        if (self.newAnimation) {
            self.updateBounds(true);
            self.newAnimation = false
        }
    },
    updatePosition: function() {
        var self = this,
            index = self.modelIndex,
            offset = self.renderer.models[0].boundsSize[0] * 1.5;
        if (index > 2) {
            offset += Math.abs(self.renderer.models[index - 2].modelOffset)
        }
        if (self.modelIndex % 2 > 0) offset = -offset;
        self.modelOffset = offset;
        mat4.identity(self.matrix);
        mat4.translate(self.matrix, self.matrix, vec3.negate(self.tmpVec, self.boundsCenter));
        mat4.scale(self.matrix, self.matrix, vec3.set(self.tmpVec, -1, 1, 1));
        vec3.normalize(self.tmpVec, vec3.set(self.tmpVec, 4, 0, -1));
        vec3.scale(self.tmpVec, self.tmpVec, offset);
        if (offset < 0) self.tmpVec[2] = -self.tmpVec[2];
        self.matrix[12] += self.tmpVec[0];
        self.matrix[13] += self.tmpVec[1];
        self.matrix[14] += self.tmpVec[2]
    },
    updateBounds: function(useVb) {
        var self = this,
            i, j, m, idx, verts = self.vertices,
            vbData = self.vbData;
        var min = vec3.set(self.boundsMin, 9999, 9999, 9999),
            max = vec3.set(self.boundsMax, -9999, -9999, -9999),
            pos;
        if (!verts) return;
        if (self.meshes && self.indices) {
            var firstIndex, numIndices, visible;
            for (i = 0; i < self.meshes.length; ++i) {
                m = self.meshes[i];
                visible = !(self.meta && self.meta.meshVis[m.name] === false);
                if (!visible) continue;
                firstIndex = m.iStart;
                numIndices = m.iCount;
                for (j = 0; j < numIndices; ++j) {
                    if (useVb) {
                        idx = self.indices[firstIndex + j] * 8;
                        pos = vec3.set(self.tmpVec, vbData[idx], vbData[idx + 1], vbData[idx + 2])
                    } else {
                        pos = verts[self.indices[firstIndex + j]].position
                    }
                    min = vec3.min(min, min, pos);
                    max = vec3.max(max, max, pos)
                }
            }
        } else {
            for (i = 0; i < verts.length; ++i) {
                if (useVb) {
                    idx = i * 8;
                    pos = vec3.set(self.tmpVec, vbData[idx], vbData[idx + 1], vbData[idx + 2])
                } else {
                    pos = verts[i].position
                }
                min = vec3.min(min, min, pos);
                max = vec3.max(max, max, pos)
            }
        }
        vec3.subtract(self.boundsSize, max, min);
        vec3.scaleAndAdd(self.boundsCenter, min, self.boundsSize, .5);
        mat4.identity(self.matrix);
        mat4.translate(self.matrix, self.matrix, vec3.negate(self.tmpVec, self.boundsCenter));
        mat4.scale(self.matrix, self.matrix, vec3.set(self.tmpVec, -1, 1, 1));
        var models = self.renderer.models;
        if (models.length > 1) {
            for (i = 1; i < models.length; ++i) {
                models[i].updatePosition()
            }
            if (self.modelIndex != 0) models[0].updateDistance()
        }
        if (self.modelIndex == 0) {
            self.updateDistance()
        }
    },
    updateDistance: function() {
        var self = this,
            models = self.renderer.models;
        var wSize = self.boundsSize[0],
            hSize = self.boundsSize[1],
            dSize = self.boundsSize[2];
        if (models.length > 1) {
            var width = Math.abs(models[models.length - 1].modelOffset) + models[models.length - 1].boundsSize[0];
            if (models.length > 2) {
                width += Math.abs(models[models.length - 2].modelOffset) + models[models.length - 2].boundsSize[0]
            } else {
                width *= 2
            }
            wSize = Math.max(wSize, width)
        }
        var dist;
        if (self.opts.dist) {
            dist = self.opts.dist
        } else {
            var ratio = self.renderer.width / self.renderer.height;
            var hTan = 2 * Math.tan(self.renderer.fov / 2 * .0174532925);
            var wTan = hTan * ratio;
            var hDist = hSize * 1.2 / hTan;
            var wDist = wSize * 1.2 / wTan;
            dist = Math.max(Math.max(hDist, wDist), dSize * 2)
        }
        if (self.defaultDistance == 0 || self.defaultDistance == self.renderer.distance) {
            self.defaultDistance = self.renderer.distance = dist
        }
    }
};
ZamModelViewer.Lol.Model.prototype.load = function() {
    var self = this;
    if (self.model && self.model.champion !== undefined && self.model.skin !== undefined) {
        self._load(self.model.champion, self.model.skin)
    }
};
ZamModelViewer.Lol.Model.prototype._load = function(champion, skin) {
    var self = this;
    self.champion = champion;
    self.skin = skin;
    $.getJSON(self.opts.contentPath + "meta/" + champion + "_" + skin + ".json", function(data) {
        self.loadMeta(data)
    });
    var url = self.opts.contentPath + "models/" + champion + "_" + skin + ".lmesh";
    $.ajax({
        url: url,
        type: "GET",
        dataType: "binary",
        responseType: "arraybuffer",
        processData: false,
        renderer: self.renderer,
        success: function(buffer) {
            self.loadMesh(buffer)
        },
        error: function(xhr, status, error) {
            console.log(error)
        }
    })
};
ZamModelViewer.Lol.Model.prototype.loadMeta = function(meta) {
    var self = this;
    self.meta = meta;
    if (self.animations) self.updateBounds(self.animBounds);
    for (var t in meta.meshTextures) {
        self.meshTextures[t] = new ZamModelViewer.Lol.Texture(self, self.champion + "/" + meta.meshTextures[t] + ".png")
    }
};
ZamModelViewer.Lol.Model.prototype.loadMesh = function(buffer) {
    if (!buffer) {
        console.error("Bad buffer for DataView");
        return
    }
    var self = this,
        r = new ZamModelViewer.DataView(buffer),
        i, v, idx, Lol = ZamModelViewer.Lol;
    var gl = self.renderer.context;
    var magic = r.getUint32();
    if (magic != 604210091) {
        console.log("Bad magic value");
        return
    }
    self.version = r.getUint32();
    var animFile = r.getString();
    var textureFile = r.getString();
    if (animFile && animFile.length > 0) {
        var url = self.opts.contentPath + "models/" + animFile + ".lanim";
        $.ajax({
            url: url,
            type: "GET",
            dataType: "binary",
            responseType: "arraybuffer",
            processData: false,
            renderer: self.renderer,
            success: function(buffer) {
                self.loadAnim(buffer)
            },
            error: function(xhr, status, error) {
                console.log(error)
            }
        })
    }
    if (textureFile && textureFile.length > 0) {
        self.texture = new Lol.Texture(self, self.champion + "/" + textureFile + ".png")
    }
    var numMeshes = r.getUint32();
    if (numMeshes > 0) {
        self.meshes = new Array(numMeshes);
        for (i = 0; i < numMeshes; ++i) {
            var name = r.getString().toLowerCase();
            var vStart = r.getUint32();
            var vCount = r.getUint32();
            var iStart = r.getUint32();
            var iCount = r.getUint32();
            self.meshes[i] = {
                name: name,
                vStart: vStart,
                vCount: vCount,
                iStart: iStart,
                iCount: iCount
            }
        }
    }
    var numVerts = r.getUint32();
    if (numVerts > 0) {
        self.vertices = new Array(numVerts);
        self.vbData = new Float32Array(numVerts * 8);
        for (i = 0; i < numVerts; ++i) {
            idx = i * 8;
            self.vertices[i] = v = new Lol.Vertex(r);
            self.vbData[idx] = v.position[0];

            self.vbData[idx + 1] = v.position[1];
            self.vbData[idx + 2] = v.position[2];
            self.vbData[idx + 3] = v.normal[0];
            self.vbData[idx + 4] = v.normal[1];
            self.vbData[idx + 5] = v.normal[2];
            self.vbData[idx + 6] = v.u;
            self.vbData[idx + 7] = v.v
        }
    }
    var numIndices = r.getUint32();
    if (numIndices > 0) {
        self.indices = new Array(numIndices);
        for (i = 0; i < numIndices; ++i) {
            self.indices[i] = r.getUint16()
        }
    }
    var numBones = r.getUint32();
    if (numBones > 0) {
        self.transforms = new Array(numBones);
        self.bones = new Array(numBones);
        for (i = 0; i < numBones; ++i) {
            self.bones[i] = new Lol.Bone(self, i, r);
            if (self.boneLookup[self.bones[i].name] !== undefined) {
                self.bones[i].name = self.bones[i].name + "2"
            }
            self.boneLookup[self.bones[i].name] = i;
            self.transforms[i] = new mat4.create
        }
    }
    if (self.vbData) {
        self.vb = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, self.vb);
        gl.bufferData(gl.ARRAY_BUFFER, self.vbData, gl.DYNAMIC_DRAW)
    }
    if (self.indices) {
        self.ib = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, self.ib);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(self.indices), gl.STATIC_DRAW)
    }
    self.loaded = true;
    self.updateBounds()
};
ZamModelViewer.Lol.Model.prototype.loadAnim = function(buffer) {
    if (!buffer) {
        console.error("Bad buffer for DataView");
        return
    }
    var self = this,
        r = new ZamModelViewer.DataView(buffer),
        i, Lol = ZamModelViewer.Lol;
    var magic = r.getUint32();
    if (magic != 604210092) {
        console.log("Bad magic value");
        return
    }
    var version = r.getUint32();
    if (version >= 2) {
        var compressedData = new Uint8Array(buffer, r.position);
        var data = null;
        try {
            data = pako.inflate(compressedData)
        } catch (err) {
            console.log("Decompression error: " + err);
            return
        }
        r = new ZamModelViewer.DataView(data.buffer)
    }
    var numAnims = r.getUint32();
    if (numAnims > 0) {
        self.animations = new Array(numAnims);
        for (i = 0; i < numAnims; ++i) {
            self.animations[i] = new Lol.Animation(self, r, version)
        }
    }
    self.animsLoaded = true
};
ZamModelViewer.Lol.Model.prototype.draw = function() {
    var self = this,
        gl = self.renderer.context,
        i;
    if (!self.loaded) return;
    if (!self.shaderReady) self.initShader();
    if (!self.program) return;
    self.update();
    gl.useProgram(self.program);
    gl.uniformMatrix4fv(self.uniforms.vModelMatrix, false, self.matrix);
    gl.uniformMatrix4fv(self.uniforms.vViewMatrix, false, self.renderer.viewMatrix);
    gl.uniformMatrix4fv(self.uniforms.vProjMatrix, false, self.renderer.projMatrix);
    gl.uniform4fv(self.uniforms.fAmbientColor, self.ambientColor);
    gl.uniform4fv(self.uniforms.fPrimaryColor, self.primaryColor);
    gl.uniform4fv(self.uniforms.fSecondaryColor, self.secondaryColor);
    gl.uniform3fv(self.uniforms.fLightDir1, self.lightDir1);
    gl.uniform3fv(self.uniforms.fLightDir2, self.lightDir2);
    gl.uniform3fv(self.uniforms.fLightDir3, self.lightDir3);
    gl.uniform1i(self.uniforms.fTexture, 0);
    gl.bindBuffer(gl.ARRAY_BUFFER, self.vb);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, self.ib);
    var cull = gl.getParameter(gl.CULL_FACE);
    if (!cull) gl.enable(gl.CULL_FACE);
    var face = gl.getParameter(gl.FRONT_FACE);
    if (face != gl.CW) gl.frontFace(gl.CW);
    for (i in self.attribs) {
        var a = self.attribs[i];
        gl.enableVertexAttribArray(a.loc);
        gl.vertexAttribPointer(a.loc, a.size, a.type, false, a.stride, a.offset)
    }
    if (self.meshes) {
        var m, visible;
        for (i = 0; i < self.meshes.length; ++i) {
            m = self.meshes[i];
            visible = !(self.meta && self.meta.meshVis[m.name] === false);
            if (self.meta && self.meta.animMeshVis[self.animName] !== undefined && self.meta.animMeshVis[self.animName][m.name] !== undefined) visible = self.meta.animMeshVis[self.animName][m.name];
            if (!visible) continue;
            if (self.meshTextures[m.name] !== undefined) {
                if (self.meshTextures[m.name].texture) {
                    gl.uniform1i(self.uniforms.fHasTexture, true);
                    gl.bindTexture(gl.TEXTURE_2D, self.meshTextures[m.name].texture)
                } else {
                    gl.uniform1i(self.uniforms.fHasTexture, false)
                }
            } else if (self.texture && self.texture.texture) {
                gl.uniform1i(self.uniforms.fHasTexture, true);
                gl.bindTexture(gl.TEXTURE_2D, self.texture.texture)
            } else {
                gl.uniform1i(self.uniforms.fHasTexture, false)
            }
            gl.drawElements(gl.TRIANGLES, m.iCount, gl.UNSIGNED_SHORT, m.iStart * 2)
        }
    } else {
        if (self.texture && self.texture.texture) {
            gl.uniform1i(self.uniforms.fHasTexture, true);
            gl.bindTexture(gl.TEXTURE_2D, self.texture.texture)
        } else {
            gl.uniform1i(self.uniforms.fHasTexture, false)
        }
        gl.drawElements(gl.TRIANGLES, self.indices.length, gl.UNSIGNED_SHORT, 0)
    }
    for (i in self.attribs) {
        gl.disableVertexAttribArray(self.attribs[i].loc)
    }
    if (!cull) gl.disable(gl.CULL_FACE);
    if (face == gl.CCW) gl.frontFace(gl.CCW)
};
ZamModelViewer.Lol.Model.prototype.initShader = function() {
    var self = this,
        gl = self.renderer.context;
    self.shaderReady = true;
    var vs = self.renderer.compileShader(gl.VERTEX_SHADER, self.vertShader);
    var fs = self.renderer.compileShader(gl.FRAGMENT_SHADER, self.fragShader);
    var program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error("Error linking shaders");
        return
    }
    self.vs = vs;
    self.fs = fs;
    self.program = program;
    self.uniforms = {
        vModelMatrix: gl.getUniformLocation(program, "uModelMatrix"),
        vViewMatrix: gl.getUniformLocation(program, "uViewMatrix"),
        vProjMatrix: gl.getUniformLocation(program, "uProjMatrix"),
        fHasTexture: gl.getUniformLocation(program, "uHasTexture"),
        fAmbientColor: gl.getUniformLocation(program, "uAmbientColor"),
        fPrimaryColor: gl.getUniformLocation(program, "uPrimaryColor"),
        fSecondaryColor: gl.getUniformLocation(program, "uSecondaryColor"),
        fLightDir1: gl.getUniformLocation(program, "uLightDir1"),
        fLightDir2: gl.getUniformLocation(program, "uLightDir2"),
        fLightDir3: gl.getUniformLocation(program, "uLightDir3"),
        fTexture: gl.getUniformLocation(program, "uTexture")
    };
    self.attribs = {
        position: {
            loc: gl.getAttribLocation(program, "aPosition"),
            type: gl.FLOAT,
            size: 3,
            offset: 0,
            stride: 32
        },
        normal: {
            loc: gl.getAttribLocation(program, "aNormal"),
            type: gl.FLOAT,
            size: 3,
            offset: 12,
            stride: 32
        },
        texcoord: {
            loc: gl.getAttribLocation(program, "aTexCoord"),
            type: gl.FLOAT,
            size: 2,
            offset: 24,
            stride: 32
        }
    }
};
ZamModelViewer.Lol.Model.prototype.vertShader = "    attribute vec3 aPosition;    attribute vec3 aNormal;    attribute vec2 aTexCoord;        varying vec3 vNormal;    varying vec2 vTexCoord;        uniform mat4 uModelMatrix;    uniform mat4 uViewMatrix;    uniform mat4 uProjMatrix;        void main(void) {        gl_Position = uProjMatrix * uViewMatrix * uModelMatrix * vec4(aPosition, 1);        vNormal = mat3(uViewMatrix * uModelMatrix) * normalize(aNormal);        vTexCoord = aTexCoord;    }";
ZamModelViewer.Lol.Model.prototype.fragShader = "    precision mediump float;        varying vec3 vNormal;    varying vec2 vTexCoord;        uniform bool uHasTexture;    uniform vec4 uAmbientColor;    uniform vec4 uPrimaryColor;    uniform vec4 uSecondaryColor;    uniform vec3 uLightDir1;    uniform vec3 uLightDir2;    uniform vec3 uLightDir3;    uniform sampler2D uTexture;        void main(void) {        vec4 color = vec4(1, 1, 1, 1);        if (uHasTexture) {            color = texture2D(uTexture, vTexCoord.st);        } else {            color = vec4(vTexCoord.st, 0, 1);        }                vec4 litColor = uAmbientColor;        vec3 normal = normalize(vNormal);                float dp = max(0.0, dot(normal, uLightDir1));        litColor += uPrimaryColor * dp;                dp = max(0.0, dot(normal, uLightDir2));        litColor += uSecondaryColor * dp;                dp = max(0.0, dot(normal, uLightDir3));        litColor += uSecondaryColor * dp;                litColor = clamp(litColor, vec4(0,0,0,0), vec4(1,1,1,1));        color *= litColor;                gl_FragColor = color;    }";
ZamModelViewer.Lol.Texture = function(model, url) {
    var self = this;
    self.model = model;
    self.url = model.opts.contentPath + "textures/" + url;
    self.texture = null;
    self.load()
};
ZamModelViewer.Lol.Texture.prototype = {
    destroy: function() {
        var self = this,
            gl = self.model.renderer.context;
        if (self.texture) gl.deleteTexture(self.texture);
        self.img = null
    },
    load: function() {
        var self = this,
            gl = self.model.renderer.context;
        (function(self, gl) {
            self.img = new Image;
            self.img.crossOrigin = "";
            self.img.onload = function() {
                self.img.loaded = true;
                self.texture = gl.createTexture();
                gl.bindTexture(gl.TEXTURE_2D, self.texture);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, self.img);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
            };
            self.img.onerror = function() {
                self.img = null;
                self.error = true
            };
            self.img.src = self.url
        })(self, gl)
    }
};
ZamModelViewer.Lol.Vertex = function(r) {
    var self = this,
        i;
    self.position = [r.getFloat(), r.getFloat(), r.getFloat()];
    self.normal = [r.getFloat(), r.getFloat(), r.getFloat(), 0];
    self.u = r.getFloat();
    self.v = r.getFloat();
    self.bones = new Array(4);
    for (i = 0; i < 4; ++i) self.bones[i] = r.getUint8();
    self.weights = new Array(4);
    for (i = 0; i < 4; ++i) self.weights[i] = r.getFloat()
};
ZamModelViewer.Lol.Bone = function(model, index, r) {
    var self = this,
        i;
    self.model = model;
    self.index = index;
    self.name = r.getString().toLowerCase();
    self.parent = r.getInt32();
    self.scale = r.getFloat();
    self.origMatrix = mat4.create();
    for (i = 0; i < 16; ++i) self.origMatrix[i] = r.getFloat();
    self.baseMatrix = mat4.clone(self.origMatrix);
    mat4.transpose(self.baseMatrix, self.baseMatrix);
    mat4.invert(self.baseMatrix, self.baseMatrix);
    mat4.transpose(self.origMatrix, self.origMatrix);
    if (model.version >= 2) {
        self.incrMatrix = mat4.create();
        for (i = 0; i < 16; ++i) self.incrMatrix[i] = r.getFloat();
        mat4.transpose(self.incrMatrix, self.incrMatrix)
    }
};
ZamModelViewer.Lol.Animation = function(model, r, version) {
    var self = this,
        i, Lol = ZamModelViewer.Lol;
    self.model = model;
    self.meshOverride = {};
    self.name = r.getString().toLowerCase();
    self.fps = r.getInt32();
    var numBones = r.getUint32();
    self.bones = new Array(numBones);
    self.lookup = {};
    for (i = 0; i < numBones; ++i) {
        self.bones[i] = new Lol.AnimationBone(model, self, r, version);
        if (self.lookup[self.bones[i].bone] !== undefined) {
            self.bones[i].bone += "2"
        }
        self.lookup[self.bones[i].bone] = i
    }
    if (numBones == 0 || self.fps <= 1) {
        self.duration = 1e3
    } else {
        self.duration = Math.floor(1e3 * (self.bones[0].frames.length / self.fps))
    }
};
ZamModelViewer.Lol.AnimationBone = function(model, anim, r, version) {
    var self = this;
    self.model = model;
    self.anim = anim;
    var numFrames = r.getUint32();
    self.bone = r.getString().toLowerCase();
    self.flags = r.getUint32();
    self.frames = new Array(numFrames);
    var scale = [1, 1, 1];
    for (var i = 0; i < numFrames; ++i) {
        var pos = [r.getFloat(), r.getFloat(), r.getFloat()];
        var rot = [r.getFloat(), r.getFloat(), r.getFloat(), r.getFloat()];
        if (version >= 3) scale = [r.getFloat(), r.getFloat(), r.getFloat()];
        self.frames[i] = {
            pos: pos,
            rot: rot,
            scale: scale
        }
    }
    self.matrix = mat4.create();
    self.tmpMat = mat4.create();
    self.tmpPos = vec3.create();
    self.tmpRot = quat.create();
    self.tmpScale = vec3.create()
};
ZamModelViewer.Lol.AnimationBone.prototype.update = function(boneId, frame, r) {
    var self = this;
    self.index = boneId;
    var parent = self.model.bones[boneId].parent;
    var f0 = frame % self.frames.length,
        f1 = (frame + 1) % self.frames.length;
    vec3.lerp(self.tmpPos, self.frames[f0].pos, self.frames[f1].pos, r);
    vec3.lerp(self.tmpScale, self.frames[f0].scale, self.frames[f1].scale, r);
    quat.slerp(self.tmpRot, self.frames[f0].rot, self.frames[f1].rot, r);
    mat4.identity(self.matrix);
    mat4.translate(self.matrix, self.matrix, self.tmpPos);
    mat4.transpose(self.matrix, self.matrix);
    mat4.fromQuat(self.tmpMat, self.tmpRot);
    mat4.transpose(self.tmpMat, self.tmpMat);
    mat4.multiply(self.matrix, self.tmpMat, self.matrix);
    mat4.transpose(self.matrix, self.matrix);
    mat4.scale(self.matrix, self.matrix, self.tmpScale);
    if (parent != -1) {
        mat4.multiply(self.matrix, self.model.transforms[parent], self.matrix)
    }
    mat4.copy(self.model.transforms[boneId], self.matrix)
};
ZamModelViewer.Heroes = function() {};
ZamModelViewer.Heroes.Model = function(renderer, viewer, model, parent) {
    var self = this;
    self.renderer = renderer;
    self.viewer = viewer;
    self.model = model;
    self.modelPath = null;
    self.ready = false;
    self.parent = parent;
    self.opts = self.viewer.options;
    self.meta = null;
    self.vertices = null;
    self.indices = null;
    self.materialLookup = null;
    self.materials = null;
    self.meshes = null;
    self.bones = null;
    self.boneLookup = null;
    self.boneNameLookup = {};
    self.baseMatrices = null;
    self.animations = null;
    self.animData = null;
    self.animDataLookup = null;
    self.anims = null;
    self.textures = {};
    self.matrix = mat4.create();
    self.ib = null;
    self.shaderReady = false;
    self.vs = null;
    self.fs = null;
    self.program = null;
    self.uniforms = null;
    self.attribs = null;
    self.ambientColor = [.35, .35, .35, 1];
    self.primaryColor = [1, 1, 1, 1];
    self.secondaryColor = [.35, .35, .35, 1];
    self.lightDir1 = vec3.create();
    self.lightDir2 = vec3.create();
    self.lightDir3 = vec3.create();
    vec3.normalize(self.lightDir1, [-3, -3, -3]);
    vec3.normalize(self.lightDir2, [3, -1, -3]);
    vec3.normalize(self.lightDir3, [3, 2, 2]);
    self.lightIntensity = vec4.set(vec4.create(), .75, .25, .25, .35);
    self.animBounds = false;
    self.boundsCenter = [0, 0, 0];
    self.boundsSize = [0, 0, 0];
    self.boundsMin = [0, 0, 0];
    self.boundsMax = [0, 0, 0];
    self.animTime = 0;
    self.lastTime = self.renderer.time;
    self.tmpMat = mat4.create();
    self.tmpVec = vec4.create();
    self.tmpVec2 = vec4.create();
    self.tmpQuat = quat.create();
    self.load()
};
ZamModelViewer.Models[ZamModelViewer.HEROES] = ZamModelViewer.Heroes.Model;
ZamModelViewer.Heroes.disabledAnims = {
    herofalstad: true,
    falstaddarkiron: true,
    falstadnordic: true,
    falstadskinultimate: true,
    falstadultimatered: true,
    falstadultimatewhite: true,
    falstadstormlord: true,
    falstadstormlorddarkiron: true,
    falstadstormlordnordic: true,
    tyraelskinseraphimchampion: true,
    tyraelseraphimsand: true,
    tyraelseraphimdark: true
};
ZamModelViewer.Heroes.Model.prototype = {
    external: {
        isLoaded: function() {
            return this.ready
        }
    },
    destroy: function() {
        var self = this,
            gl = self.renderer.context,
            i, j;
        if (self.program) gl.deleteProgram(self.program);
        if (self.vs) gl.deleteShader(self.vs);
        if (self.fs) gl.deleteShader(self.fs);
        if (self.vb) gl.deleteBuffer(self.vb);
        if (self.ib) gl.deleteBuffer(self.ib);
        self.program = self.vs = self.fs = self.vb = self.ib = null;
        self.vbData = null
    },
    update: function() {
        var self = this,
            i, j, k;
        self.animTime += self.renderer.time - self.lastTime;
        self.lastTime = self.renderer.time;
        if (!self.ready || !self.vertices) return;
        var vertLength = 10;
        if (self.currentAnim && !ZamModelViewer.Heroes.disabledAnims[self.model]) {
            var numBones = self.bones.length,
                bone, startBone, animBone, anim = self.currentAnim,
                animModel = self.currentAnimModel;
            var hasScale, hasRot, hasTrans;
            for (i = 0; i < numBones; ++i) {
                startBone = bone = self.bones[i];
                mat4.identity(startBone.matrix);
                while (bone) {
                    if (animModel.boneNameLookup[bone.name]) {
                        animBone = animModel.bones[animModel.boneNameLookup[bone.name]]
                    } else {
                        animBone = null
                    }
                    hasScale = hasRot = hasTrans = false;
                    if (animBone && animModel.animDataLookup.length > 0) {
                        var animDataIndex = animModel.animDataLookup[anim.index].indices[0];
                        var animData = animModel.animData[animDataIndex];
                        var numIds = animData.animIds.length;
                        for (j = 0; j < numIds; ++j) {
                            if (animBone.translation.animId == animData.animIds[j]) {
                                var transData = animData.translations[animData.animIndices[j].animIndex];
                                transData.getValue(self.animTime, self.tmpVec);
                                hasTrans = true
                            }
                            if (animBone.rotation.animId == animData.animIds[j]) {
                                var rotData = animData.rotations[animData.animIndices[j].animIndex];
                                rotData.getValue(self.animTime, self.tmpQuat);
                                hasRot = true
                            }
                            if (animBone.scale.animId == animData.animIds[j]) {
                                var scaleData = animData.translations[animData.animIndices[j].animIndex];
                                scaleData.getValue(self.animTime, self.tmpVec2);
                                hasScale = true
                            }
                        }
                    }
                    if (!hasTrans) vec3.copy(self.tmpVec, bone.translation.value);
                    if (!hasRot) quat.copy(self.tmpQuat, bone.rotation.value);
                    if (!hasScale) vec3.copy(self.tmpVec2, bone.scale.value);
                    mat4.fromQuat(self.tmpMat, self.tmpQuat);
                    mat4.scale(self.tmpMat, self.tmpMat, self.tmpVec2);
                    self.tmpMat[12] = self.tmpVec[0];
                    self.tmpMat[13] = self.tmpVec[1];
                    self.tmpMat[14] = self.tmpVec[2];
                    bone.scaleLength = self.tmpVec2[0];
                    mat4.multiply(startBone.matrix, self.tmpMat, startBone.matrix);
                    if (bone.parentId > -1) {
                        bone = self.bones[bone.parentId]
                    } else {
                        bone = null
                    }
                }
                if (!startBone.show) mat4.scale(startBone.matrix, startBone.matrix, vec3.set(self.tmpVec, 0, 0, 0));
                if (animModel.boneNameLookup[startBone.name] !== undefined && animModel.baseMatrices.length > animModel.boneNameLookup[startBone.name]) {
                    mat4.multiply(startBone.matrix, startBone.matrix, animModel.baseMatrices[animModel.boneNameLookup[startBone.name]])
                } else if (self.baseMatrices && self.baseMatrices.length > i) {
                    mat4.multiply(startBone.matrix, startBone.matrix, self.baseMatrices[i])
                }
            }
            var m, v, w, b, boneIndex, vertStart, vertCount, idx, vbData = self.vbData,
                tmpVec = self.tmpVec,
                tmpVec2 = self.tmpVec2;
            for (i = 0; i < self.meshes.length; ++i) {
                m = self.meshes[i];
                if (!m.show) continue;
                boneIndex = m.boneIndex;
                vertStart = m.vStart;
                vertCount = m.vCount;
                for (j = 0; j < vertCount; ++j) {
                    v = self.vertices[vertStart + j];
                    idx = (j + vertStart) * vertLength;
                    vbData[idx] = vbData[idx + 1] = vbData[idx + 2] = vbData[idx + 3] = vbData[idx + 4] = vbData[idx + 5] = 0;
                    for (k = 0; k < 4; ++k) {
                        if (v.weights[k] == 0) continue;
                        w = v.weights[k] / 255;
                        b = self.bones[self.boneLookup[boneIndex + v.bones[k]]];
                        vec3.transformMat4(tmpVec, v.position, b.matrix);
                        vec4.transformMat4(tmpVec2, v.normal, b.matrix);
                        vbData[idx] += tmpVec[0] * w;
                        vbData[idx + 1] += tmpVec[1] * w;
                        vbData[idx + 2] += tmpVec[2] * w;
                        vbData[idx + 3] += tmpVec2[0] * w;
                        vbData[idx + 4] += tmpVec2[1] * w;
                        vbData[idx + 5] += tmpVec2[2] * w
                    }
                    vec3.set(v.transPosition, vbData[idx], vbData[idx + 1], vbData[idx + 2]);
                    vec4.set(v.transNormal, vbData[idx + 3], vbData[idx + 4], vbData[idx + 5], 0)
                }
            }
            self.updateBuffers();
            if (!self.animBounds) {
                self.updateBounds();
                self.animBounds = true
            }
        }
    },
    updateBuffers: function() {
        var self = this,
            gl = self.renderer.context;
        if (!self.vbData) {
            var vertLength = 10;
            var vbLength = self.vertices.length * vertLength;
            self.vbData = new Float32Array(vbLength);
            var v, numVerts = self.vertices.length,
                vbData = self.vbData,
                base;
            for (var i = 0, j = 0; j < numVerts; i += vertLength, ++j) {
                v = self.vertices[j];
                vbData[i] = v.transPosition[0];
                vbData[i + 1] = v.transPosition[1];
                vbData[i + 2] = v.transPosition[2];
                vbData[i + 3] = v.transNormal[0];
                vbData[i + 4] = v.transNormal[1];
                vbData[i + 5] = v.transNormal[2];
                vbData[i + 6] = v.uv1.u;
                vbData[i + 7] = v.uv1.v;
                if (self.hasUv2) {
                    vbData[i + 8] = v.uv2.u;
                    vbData[i + 9] = v.uv2.v
                } else {
                    vbData[i + 8] = vbData[i + 9] = 0
                }
            }
            self.vb = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, self.vb);
            gl.bufferData(gl.ARRAY_BUFFER, self.vbData, gl.DYNAMIC_DRAW)
        } else {
            gl.bindBuffer(gl.ARRAY_BUFFER, self.vb);
            gl.bufferSubData(gl.ARRAY_BUFFER, 0, self.vbData)
        }
    },
    draw: function() {
        var self = this,
            gl = self.renderer.context,
            i;
        if (!self.ready) return;
        if (!self.shaderReady) self.initShader();
        if (!self.program) return;
        self.update();
        gl.useProgram(self.program);
        gl.frontFace(gl.CCW);
        gl.uniformMatrix4fv(self.uniforms.vModelMatrix, false, self.matrix);
        gl.uniformMatrix4fv(self.uniforms.vViewMatrix, false, self.renderer.viewMatrix);
        gl.uniformMatrix4fv(self.uniforms.vProjMatrix, false, self.renderer.projMatrix);
        gl.uniform4fv(self.uniforms.fLightIntensity, self.lightIntensity);
        gl.uniform3fv(self.uniforms.fLightDir1, self.lightDir1);
        gl.uniform3fv(self.uniforms.fLightDir2, self.lightDir2);
        gl.uniform3fv(self.uniforms.fLightDir3, self.lightDir3);
        gl.uniform3fv(self.uniforms.fCameraPos, self.renderer.eye);
        gl.uniform1i(self.uniforms.vHasUv2, self.hasUv2);
        gl.bindBuffer(gl.ARRAY_BUFFER, self.vb);
        for (i in self.attribs) {
            var a = self.attribs[i];
            gl.enableVertexAttribArray(a.loc);
            gl.vertexAttribPointer(a.loc, a.size, a.type, false, a.stride, a.offset)
        }
        if (self.meshes) {
            for (i = 0; i < self.meshes.length; ++i) {
                if (!self.meshes[i].show) continue;
                self.meshes[i].draw()
            }
        }
        for (i in self.attribs) {
            gl.disableVertexAttribArray(self.attribs[i].loc)
        }
    },
    getMaterial: function(idx) {
        var self = this;
        if (idx >= self.materialLookup.length || self.materialLookup[idx].type != 1) return null;
        return self.materials[self.materialLookup[idx].index]
    },
    setAnimation: function(name) {
        var self = this,
            i, j;
        self.animTime = 0;
        if (self.animations) {
            for (i = 0; i < self.animations.length; ++i) {
                if (self.animations[i].name == name) {
                    self.currentAnim = self.animations[i];
                    self.currentAnimModel = self;
                    return
                }
            }
        }
        if (self.anims) {
            for (i = 0; i < self.anims.length; ++i) {
                if (!self.anims[i].animations) continue;
                for (j = 0; j < self.anims[i].animations.length; ++j) {
                    if (self.anims[i].animations[j].name == name) {
                        self.currentAnim = self.anims[i].animations[j];
                        self.currentAnimModel = self.anims[i];
                        return
                    }
                }
            }
        }
        if (self.animations.length > 0) {
            self.currentAnim = self.animations[0];
            self.currentAnimModel = self
        } else {
            self.currentAnim = null;
            self.currentAnimModel = null
        }
    },
    onAnimLoaded: function() {
        var self = this;
        if (self.anims) {
            for (var i = 0; i < self.anims.length; ++i) {
                if (!self.anims[i].ready) break
            }
        }
        self.animsLoaded = true;
        self.setAnimation("Stand")
    },
    updateBounds: function(skipSizing) {
        var self = this,
            i, j, m, p;
        var min = self.boundsMin,
            max = self.boundsMax;
        if (!skipSizing) {
            vec3.set(min, 9999, 9999, 9999);
            vec3.set(max, -9999, -9999, -9999);
            for (i = 0; i < self.meshes.length; ++i) {
                m = self.meshes[i];
                if (!m.show) continue;
                for (j = 0; j < m.vCount; ++j) {
                    p = self.vertices[m.vStart + j].transPosition;
                    if (Math.abs(p[0]) > 15 || Math.abs(p[1]) > 15 || Math.abs(p[2]) > 15) continue;
                    min = vec3.min(min, min, p);
                    max = vec3.max(max, max, p)
                }
            }
        }
        vec3.subtract(self.boundsSize, max, min);
        vec3.scaleAndAdd(self.boundsCenter, min, self.boundsSize, .5);
        var hSize = self.boundsSize[2],
            wSize = self.boundsSize[0],
            dSize = self.boundsSize[1];
        if (!self.parent) {
            if (self.opts.dist) {
                self.renderer.distance = self.opts.dist
            } else {
                var ratio = self.renderer.width / self.renderer.height;
                var hTan = 2 * Math.tan(self.renderer.fov / 2 * .0174532925);
                var wTan = hTan * ratio;
                var hDist = (dSize * .5 + hSize * 1.2) / hTan;
                var wDist = (dSize * .5 + wSize * 1.2) / wTan;
                self.renderer.distance = Math.max(Math.max(hDist, wDist), dSize * 1.25)
            }
            mat4.identity(self.matrix);
            mat4.rotateZ(self.matrix, self.matrix, Math.PI);
            mat4.translate(self.matrix, self.matrix, vec3.negate(self.tmpVec, self.boundsCenter))
        } else {
            self.parent.updateBounds()
        }
    }
};
ZamModelViewer.Heroes.Model.prototype.load = function() {
    var self = this;
    if (!self.model) return;
    self._load(self.model)
};
ZamModelViewer.Heroes.Model.prototype._load = function(model) {
    var self = this;
    $.getJSON(self.opts.contentPath + "meta/" + model + ".json?" + (self.opts.cacheBuster || 1), function(data) {
        self.loadMeta(data)
    })
};
ZamModelViewer.Heroes.Model.prototype._loadModel = function(model) {
    var self = this;
    var url;
    if (model.indexOf(".mdl") > -1) {
        url = model
    } else {
        url = "models/" + model + ".mdl"
    }
    $.ajax({
        url: self.opts.contentPath + url + "?" + (self.opts.cacheBuster || 1),
        type: "GET",
        dataType: "binary",
        responseType: "arraybuffer",
        processData: false,
        renderer: self.renderer,
        success: function(buffer) {
            self.loadModel(buffer)
        },
        error: function(xhr, status, error) {
            console.log(error)
        }
    })
};
ZamModelViewer.Heroes.Model.prototype.loadMeta = function(meta) {
    var self = this;
    self.meta = meta;
    if (meta.Model) {
        self._loadModel(meta.Model)
    }
};
ZamModelViewer.Heroes.Model.prototype.loadModel = function(buffer) {
    if (!buffer) {
        console.error("Bad buffer for DataView");
        return
    }
    var self = this,
        r = new ZamModelViewer.DataView(buffer),
        Heroes = ZamModelViewer.Heroes,
        i;
    var version = r.getUint32();
    if (version > 2) {
        console.log("Bad version");
        return
    }
    var numVertices = r.getInt32();
    self.vertices = new Array(numVertices);
    var uv2 = self.hasUv2 = r.getBool();
    var uv3 = self.hasUv3 = r.getBool();
    var uv4 = self.hasUv4 = r.getBool();
    var uv5 = self.hasUv5 = r.getBool();
    for (i = 0; i < numVertices; ++i) {
        self.vertices[i] = new Heroes.Vertex(r, uv2, uv3, uv4, uv5)
    }
    var numIndices = r.getInt32();
    self.indices = new Array(numIndices);
    for (i = 0; i < numIndices; ++i) self.indices[i] = r.getUint16();
    var numMaterialLookup = r.getInt32();
    self.materialLookup = new Array(numMaterialLookup);
    for (i = 0; i < numMaterialLookup; ++i) {
        self.materialLookup[i] = {
            type: r.getUint32(),
            index: r.getUint32()
        }
    }
    var numMaterials = r.getInt32();
    self.materials = new Array(numMaterials);
    for (i = 0; i < numMaterials; ++i) {
        self.materials[i] = new Heroes.Material(self, r)
    }
    var numMeshes = r.getInt32();
    self.meshes = new Array(numMeshes);
    for (i = 0; i < numMeshes; ++i) {
        self.meshes[i] = new Heroes.Mesh(self, r)
    }
    var numBones = r.getInt32();
    self.bones = new Array(numBones);
    for (i = 0; i < numBones; ++i) {
        self.bones[i] = new Heroes.Bone(self, i, r);
        self.boneNameLookup[self.bones[i].name] = i
    }
    var numBoneLookup = r.getInt32();
    self.boneLookup = new Array(numBoneLookup);
    for (i = 0; i < numBoneLookup; ++i) self.boneLookup[i] = r.getUint16();
    var numMatrices = r.getInt32();
    self.baseMatrices = new Array(numMatrices);
    for (i = 0; i < numMatrices; ++i) {
        var mat = mat4.create();
        for (var j = 0; j < 16; ++j) {
            mat[j] = r.getFloat()
        }
        self.baseMatrices[i] = mat
    }
    var numAnimations = r.getInt32();
    self.animations = new Array(numAnimations);
    for (i = 0; i < numAnimations; ++i) {
        self.animations[i] = new Heroes.Animation(i, r)
    }
    var numAnimData = r.getInt32();
    self.animData = new Array(numAnimData);
    for (i = 0; i < numAnimData; ++i) {
        self.animData[i] = new Heroes.AnimData(r)
    }
    var numAnimDataLookup = r.getInt32();
    self.animDataLookup = new Array(numAnimDataLookup);
    for (i = 0; i < numAnimDataLookup; ++i) {
        self.animDataLookup[i] = new Heroes.AnimData.Lookup(r)
    }
    var numAnimFiles = 1,
        animFile;
    if (version > 1) {
        numAnimFiles = r.getInt32();
        self.anims = new Array(numAnimFiles);
        for (i = 0; i < numAnimFiles; ++i) {
            animFile = r.getString();
            self.anims[i] = new Heroes.Model(self.renderer, self.viewer, null, self);
            self.anims[i]._loadModel(animFile)
        }
    } else {
        animFile = r.getString();
        if (animFile && animFile.length > 0) {
            var anim = new Heroes.Model(self.renderer, self.viewer, null, self);
            anim._loadModel(animFile);
            self.anims = [anim]
        }
    }
    self.ready = true;
    if (!self.parent) {
        self.meshes.sort(function(a, b) {
            var m1 = a.material,
                m2 = b.material;
            var p1 = m1 ? m1.priority : 0,
                p2 = m2 ? m2.priority : 0;
            return p1 - p2
        });
        var HM = ZamModelViewer.Heroes.Mesh.hiddenMeshes;
        if (HM[self.model]) {
            for (i = 0; i < self.meshes.length; ++i) {
                if (HM[self.model][i]) self.meshes[i].show = false
            }
        }
        self.updateBuffers();
        self.updateBounds();
        if (!self.anims) {
            self.setAnimation("Stand")
        }
    } else {
        self.parent.onAnimLoaded()
    }
};
ZamModelViewer.Heroes.Model.prototype.initShader = function() {
    var self = this,
        gl = self.renderer.context;
    self.shaderReady = true;
    var vs = self.renderer.compileShader(gl.VERTEX_SHADER, self.vertShader);
    var fs = self.renderer.compileShader(gl.FRAGMENT_SHADER, self.fragShader);
    var program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error("Error linking shaders");
        return
    }
    self.vs = vs;
    self.fs = fs;
    self.program = program;
    self.uniforms = {
        vModelMatrix: gl.getUniformLocation(program, "uModelMatrix"),
        vViewMatrix: gl.getUniformLocation(program, "uViewMatrix"),
        vProjMatrix: gl.getUniformLocation(program, "uProjMatrix"),
        vHasUv2: gl.getUniformLocation(program, "uHasUv2"),
        fBlendMode: gl.getUniformLocation(program, "uBlendMode"),
        fHasDiffuse: gl.getUniformLocation(program, "uHasDiffuse"),
        fHasDiffuseAlpha: gl.getUniformLocation(program, "uHasDiffuseAlpha"),
        fDiffuse: gl.getUniformLocation(program, "uDiffuse"),
        fDiffuseAlpha: gl.getUniformLocation(program, "uDiffuseAlpha"),
        fLightIntensity: gl.getUniformLocation(program, "uLightIntensity"),
        fLightDir1: gl.getUniformLocation(program, "uLightDir1"),
        fLightDir2: gl.getUniformLocation(program, "uLightDir2"),
        fLightDir3: gl.getUniformLocation(program, "uLightDir3"),
        fCameraPos: gl.getUniformLocation(program, "uCameraPos")
    };
    self.attribs = {
        position: {
            loc: gl.getAttribLocation(program, "aPosition"),
            type: gl.FLOAT,
            size: 3,
            offset: 0,
            stride: 40
        },
        normal: {
            loc: gl.getAttribLocation(program, "aNormal"),
            type: gl.FLOAT,
            size: 3,
            offset: 12,
            stride: 40
        },
        uv1: {
            loc: gl.getAttribLocation(program, "aUv1"),
            type: gl.FLOAT,
            size: 2,
            offset: 24,
            stride: 40
        },
        uv2: {
            loc: gl.getAttribLocation(program, "aUv2"),
            type: gl.FLOAT,
            size: 2,
            offset: 32,
            stride: 40
        }
    }
};
ZamModelViewer.Heroes.Model.prototype.vertShader = "    attribute vec3 aPosition;    attribute vec3 aNormal;    attribute vec2 aUv1;    attribute vec2 aUv2;    attribute vec2 aUv3;    attribute vec2 aUv4;    attribute vec2 aUv5;        varying vec3 vPosition;    varying vec3 vNormal;    varying vec2 vTexCoord;        uniform mat4 uModelMatrix;    uniform mat4 uViewMatrix;    uniform mat4 uProjMatrix;    uniform bool uHasUv2;        void main(void) {        gl_Position = uProjMatrix * uViewMatrix * uModelMatrix * vec4(aPosition, 1);        vPosition = (uViewMatrix * uModelMatrix * vec4(aPosition, 1)).xyz;        vNormal = mat3(uViewMatrix * uModelMatrix) * aNormal;                if (uHasUv2) { vTexCoord = aUv2; }        else { vTexCoord = aUv1; }    }";
ZamModelViewer.Heroes.Model.prototype.fragShader = "    precision mediump float;        varying vec3 vPosition;    varying vec3 vNormal;    varying vec2 vTexCoord;        uniform int uBlendMode;    uniform bool uHasDiffuse;    uniform bool uHasDiffuseAlpha;    uniform sampler2D uDiffuse;    uniform sampler2D uDiffuseAlpha;    uniform vec3 uLightDir1;    uniform vec3 uLightDir2;    uniform vec3 uLightDir3;    uniform vec4 uLightIntensity;    uniform vec3 uCameraPos;        vec3 saturate(vec3 value) {        return clamp(value, 0.0, 1.0);    }        float saturate(float value) {        return clamp(value, 0.0, 1.0);    }        void main(void) {        vec4 color = vec4(1, 0, 1, 1);        if (uHasDiffuse) { color.rgb = texture2D(uDiffuse, vTexCoord).rgb; }        if ((uBlendMode == 1 || uBlendMode == 3 || uBlendMode == 6) && uHasDiffuseAlpha) { color.a = texture2D(uDiffuseAlpha, vTexCoord).r; }                vec3 normal = normalize(vNormal);        vec3 cameraDir = normalize(uCameraPos - vPosition);                vec3 litColor = color.rgb * uLightIntensity.a;                float facing = (-1.0 + 2.0 * float(gl_FrontFacing)) * -1.0;        float NdotL = saturate(dot(normal, uLightDir1) * facing);                litColor += color.rgb * NdotL * uLightIntensity.x;                NdotL = saturate(dot(normal, uLightDir2) * facing);                litColor += color.rgb * NdotL * uLightIntensity.y;                NdotL = saturate(dot(normal, uLightDir3) * facing);                litColor += color.rgb * NdotL * uLightIntensity.z;                color.rgb = saturate(litColor);                gl_FragColor = color;    }";
ZamModelViewer.Heroes.Vertex = function(r, uv2, uv3, uv4, uv5) {
    var self = this;
    self.position = [r.getFloat(), r.getFloat(), r.getFloat()];
    self.weights = [r.getUint8(), r.getUint8(), r.getUint8(), r.getUint8()];
    self.bones = [r.getUint8(), r.getUint8(), r.getUint8(), r.getUint8()];
    self.normal = [r.getFloat(), r.getFloat(), r.getFloat(), r.getFloat()];
    self.tangent = [r.getFloat(), r.getFloat(), r.getFloat(), r.getFloat()];
    self.uv1 = {
        u: r.getFloat(),
        v: r.getFloat()
    };
    if (uv2) self.uv2 = {
        u: r.getFloat(),
        v: r.getFloat()
    };
    if (uv3) self.uv3 = {
        u: r.getFloat(),
        v: r.getFloat()
    };
    if (uv4) self.uv4 = {
        u: r.getFloat(),
        v: r.getFloat()
    };
    if (uv5) self.uv5 = {
        u: r.getFloat(),
        v: r.getFloat()
    };
    self.transPosition = vec3.clone(self.position);
    self.transNormal = vec4.clone(self.normal)
};
ZamModelViewer.Heroes.Vertex.prototype = {
    destroy: function() {
        var self = this;
        self.position = null;
        self.weights = null;
        self.bones = null;
        self.normal = null;
        self.tangent = null;
        self.uv1 = self.uv2 = self.uv3 = self.uv4 = self.uv5 = null;
        self.transPosition = null;
        self.transNormal = null
    }
};
ZamModelViewer.Heroes.Material = function(model, r) {
    var self = this,
        M = ZamModelViewer.Heroes.Material;
    self.model = model;
    self.name = r.getString();
    self.flags = r.getUint32();
    self.blendMode = r.getUint32();
    self.priority = r.getUint32();
    self.specularity = r.getFloat();
    self.cutoutThreshold = r.getUint32();
    self.specularMultiplier = r.getFloat();
    self.emissiveMultiplier = r.getFloat();
    self.layerBlend = r.getUint32();
    self.emissiveBlend = r.getUint32();
    self.specularType = r.getUint32();
    var numTextures = 0;
    if (model.meta && model.meta.Textures) numTextures = model.meta.Textures.length;
    var numLayers = r.getInt32();
    self.layers = new Array(numLayers);
    for (var i = 0; i < numLayers; ++i) {
        var l = self.layers[i] = new M.Layer(r);
        if (l.path) {
            if (M.overrides[model.model] && M.overrides[model.model][self.name] && M.overrides[model.model][self.name][i]) {
                l.path = M.overrides[model.model][self.name][i];
                if (!model.parent) {
                    l.texture = self.getTexture(l.path)
                }
            } else if (i == M.Layer.Diffuse) {
                for (var j = 0; j < numTextures; ++j) {
                    if (model.meta.Textures[j].indexOf("_diff") > -1) {
                        l.path = model.meta.Textures[j];
                        break
                    }
                }
                if (!model.parent) {
                    l.texture = self.getTexture(l.path)
                }
            }
        }
    }
};
ZamModelViewer.Heroes.Material.overrides = {
    novaultimatewhiteteal: {
        Ultimate_Ponytail: {
            0: "storm_hero_novahairgrid_ultimate_blue_diff"
        }
    },
    novaskinultimate: {
        Ultimate_Ponytail: {
            0: "storm_hero_novahairgrid_ultimate_red_diff"
        }
    },
    novaultimatewhitepink: {
        Ultimate_Ponytail: {
            0: "storm_hero_novahairgrid_ultimate_pink_diff"
        }
    }
};
ZamModelViewer.Heroes.Material.blends = {
    EyeLens: 6
};
ZamModelViewer.Heroes.Material.prototype = {
    destroy: function() {
        var self = this,
            i;
        if (self.layers) {
            for (i = 0; i < self.layers.length; ++i) {
                self.layers[i].destroy();
                self.layers[i] = null
            }
            self.layers = null
        }
        self.model = null
    },
    bind: function(blend) {
        var self = this,
            gl = self.model.renderer.context,
            M = ZamModelViewer.Heroes.Material;
        if (M.blends[self.name]) blend = M.blends[self.name];
        if (blend === null) blend = self.blendMode;
        switch (blend) {
            case 0:
                gl.blendFunc(gl.ONE, gl.ZERO);
                break;
            case 1:
                gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
                break;
            case 2:
                gl.blendFunc(gl.SRC_COLOR, gl.ONE);
                break;
            case 3:
                gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
                break;
            case 4:
            case 5:
                gl.blendFunc(gl.DST_COLOR, gl.SRC_COLOR);
                break;
            case 6:
                gl.blendFunc(gl.ONE_MINUS_SRC_ALPHA, gl.SRC_ALPHA);
                break;
            default:
                gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
                break
        }
        if ((self.flags & 8) > 0) {
            gl.disable(gl.CULL_FACE)
        } else {
            gl.enable(gl.CULL_FACE)
        }
        gl.uniform1i(self.model.uniforms.fBlendMode, blend);
        var t = self.layers[M.Layer.Diffuse].texture;
        if (t) {
            if (t.texture) {
                gl.bindTexture(gl.TEXTURE_2D, t.texture);

                gl.uniform1i(self.model.uniforms.fHasDiffuse, true);
                gl.uniform1i(self.model.uniforms.fDiffuse, 0)
            } else {
                gl.uniform1i(self.model.uniforms.fHasDiffuse, false)
            }
            if (t.alphaTexture) {
                gl.activeTexture(gl.TEXTURE1);
                gl.bindTexture(gl.TEXTURE_2D, t.alphaTexture);
                gl.uniform1i(self.model.uniforms.fHasDiffuseAlpha, true);
                gl.uniform1i(self.model.uniforms.fDiffuseAlpha, 1);
                gl.activeTexture(gl.TEXTURE0)
            } else {
                gl.uniform1i(self.model.uniforms.fHasDiffuseAlpha, false)
            }
        } else {
            gl.uniform1i(self.model.uniforms.fHasDiffuse, false);
            gl.uniform1i(self.model.uniforms.fHasDiffuseAlpha, false)
        }
    },
    getTexture: function(path) {
        var self = this;
        if (!self.model.textures[path]) {
            self.model.textures[path] = new ZamModelViewer.Heroes.Texture(self.model, path + ".png")
        }
        return self.model.textures[path]
    }
};
ZamModelViewer.Heroes.Material.Layer = function(r) {
    var self = this;
    self.path = r.getString();
    self.color = r.getUint32();
    self.flags = r.getUint32();
    self.uvChannel = r.getUint32();
    self.alphaFlags = r.getUint32();
    self.uvAngle = [r.getFloat(), r.getFloat(), r.getFloat()];
    self.uvTiling = [r.getFloat(), r.getFloat()];
    self.brightness = r.getFloat();
    self.tintStrenght = r.getFloat();
    self.tintUnk1 = r.getFloat();
    self.tintUnk2 = r.getFloat();
    self.tintUnk3 = r.getFloat()
};
ZamModelViewer.Heroes.Material.Layer.Diffuse = 0;
ZamModelViewer.Heroes.Material.Layer.Emissive = 4;
ZamModelViewer.Heroes.Material.Layer.Normal = 10;
ZamModelViewer.Heroes.Material.Layer.prototype = {
    destroy: function() {
        var self = this;
        if (self.texture) self.texture.destroy();
        self.texture = null;
        self.uvAngle = null;
        self.uvTiling = null
    }
};
ZamModelViewer.Heroes.Mesh = function(model, r) {
    var self = this,
        M = ZamModelViewer.Heroes.Mesh;
    self.model = model;
    self.materialId = r.getUint16();
    self.vStart = r.getUint32();
    self.vCount = r.getUint32();
    self.iStart = r.getUint32();
    self.iCount = r.getUint32();
    self.numBones = r.getUint16();
    self.boneIndex = r.getUint16();
    self.rootBone = r.getUint16();
    var indices = model.indices;
    self.indices = new Array(self.iCount);
    for (var i = 0; i < self.iCount; ++i) {
        self.indices[i] = indices[self.iStart + i] + self.vStart
    }
    self.show = true;
    self.material = model.getMaterial(self.materialId);
    if (!self.material || (self.material.flags & 32) > 0) self.show = false;
    if (M.blendOverrides[model.model] !== undefined) {
        self.blendOverride = M.blendOverrides[model.model]
    } else {
        self.blendOverride = null
    }
};
ZamModelViewer.Heroes.Mesh.blendOverrides = {
    zagaraskininsectoid: 0,
    zagarainsectoidblack: 0,
    zagarainsectoidblue: 0
};
ZamModelViewer.Heroes.Mesh.hiddenMeshes = {
    heroarthas: {
        3: true,
        4: true
    },
    arthasblue: {
        3: true,
        4: true
    },
    arthaswhite: {
        3: true,
        4: true
    },
    arthasskindragonbone: {
        4: true,
        5: true
    },
    arthasfrostwyrmgreen: {
        4: true,
        5: true
    },
    arthasfrostwyrmred: {
        4: true,
        5: true
    },
    arthasskinlichprince: {
        1: true,
        2: true,
        5: true
    },
    arthaslichprincegreen: {
        1: true,
        2: true,
        5: true
    },
    arthaslichprincepurple: {
        1: true,
        2: true,
        5: true
    },
    arthasskinultimate: {
        1: true,
        3: true,
        5: true
    },
    arthasultimategreen: {
        1: true,
        3: true,
        5: true
    },
    arthasultimatepink: {
        1: true,
        3: true,
        5: true
    },
    herozeratul: {
        0: true,
        4: true
    },
    zeratulargent: {
        0: true,
        4: true
    },
    zeratulgreen: {
        0: true,
        4: true
    },
    zeratulskinhightemplar: {
        0: true,
        3: true
    },
    zeratulhightemplarorange: {
        0: true,
        3: true
    },
    zeratulhightemplarwhite: {
        0: true,
        3: true
    },
    zeratulskinninja: {
        3: true,
        2: true
    },
    zeratulroninteal: {
        3: true,
        2: true
    },
    zeratulroninyellow: {
        3: true,
        2: true
    },
    zeratulskinultimate: {
        0: true,
        3: true
    },
    zeratulultimateblue: {
        0: true,
        3: true
    },
    zeratulultimatered: {
        0: true,
        3: true
    },
    heromurky: {
        1: true,
        2: true
    },
    murkyblue: {
        1: true,
        2: true
    },
    murkyorange: {
        1: true,
        2: true
    },
    murkyskingrunty: {
        1: true,
        4: true
    },
    murkygruntyblack: {
        1: true,
        4: true
    },
    murkygruntyred: {
        1: true,
        4: true
    },
    murkyskineaster: {
        1: true,
        3: true,
        4: true
    },
    murkyeasterwhite: {
        1: true,
        3: true,
        4: true
    },
    murkyeasterorange: {
        1: true,
        3: true,
        4: true
    },
    murkyskinultimate: {
        1: true,
        4: true
    },
    murkyultimateblue: {
        1: true,
        4: true
    },
    murkyultimateblack: {
        1: true,
        4: true
    },
    heromuradin: {
        0: true,
        1: true
    },
    muradiniron: {
        0: true,
        1: true
    },
    muradinred: {
        0: true,
        1: true
    },
    muradinskinkandyking: {
        0: true
    },
    muradinkandykingcaramel: {
        0: true
    },
    muradinkandykinggreen: {
        0: true
    },
    muradinskinmagni: {
        3: true
    },
    muradinmagniartic: {
        3: true
    },
    muradinmagnidarkiron: {
        3: true
    },
    muradinskinultimate: {
        1: true
    },
    muradinultimatedarkiron: {
        1: true
    },
    muradinultimatered: {
        1: true
    },
    herofalstad: {
        2: true
    },
    falstaddarkiron: {
        2: true
    },
    falstadnordic: {
        2: true
    },
    falstadskinultimate: {
        3: true
    },
    falstadultimatered: {
        3: true
    },
    falstadultimatewhite: {
        3: true
    },
    falstadstormlord: {
        2: true
    },
    falstadstormlorddarkiron: {
        2: true
    },
    falstadstormlordnordic: {
        2: true
    },
    zagaraskininsectoid: {
        0: true
    },
    zagarainsectoidblack: {
        0: true
    },
    zagarainsectoidblue: {
        0: true
    },
    tyrandeskinwarden: {
        2: true
    },
    tyrandewardenbloodelf: {
        2: true
    },
    tyrandewardenwhite: {
        2: true
    },
    herosylvanas: {
        2: true
    },
    sylvanasblue: {
        2: true
    },
    sylvanasred: {
        2: true
    },
    herojaina: {
        3: true
    },
    jainagreen: {
        3: true
    },
    jainablue: {
        3: true
    },
    herojainaskintempest: {
        4: true
    },
    jainatempestcrimson: {
        4: true
    },
    jainatempestjade: {
        4: true
    },
    herojainaskinultimate: {
        0: true
    },
    jainaultimatered: {
        0: true
    },
    jainaultimategray: {
        0: true
    },
    herobarbarian: {
        4: true
    },
    barbarianred: {
        4: true
    },
    barbarianblue: {
        4: true
    },
    barbarianwrathmodelfemale: {
        0: true
    },
    barbarianwrathfemalered: {
        0: true
    },
    barbarianwrathfemalepink: {
        0: true
    },
    herobarbarianultimatesonya: {
        5: true
    },
    sonyaultimatered: {
        5: true
    },
    sonyaultimatenordic: {
        5: true
    },
    tyrandeskinbloodelf: {
        0: true
    },
    tyrandebloodelfred: {
        0: true
    },
    tyrandebloodelfblue: {
        0: true
    }
};
ZamModelViewer.Heroes.Mesh.prototype = {
    destroy: function() {
        var self = this,
            gl = self.model.renderer.context;
        if (self.ib) gl.deleteBuffer(self.ib);
        self.ib = null;
        self.indices = null;
        self.model = null;
        self.material = null
    }
};
ZamModelViewer.Heroes.Mesh.prototype.draw = function() {
    var self = this,
        gl = self.model.renderer.context;
    if (self.material) self.material.bind(self.blendOverride);
    if (!self.ib) {
        self.ib = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, self.ib);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(self.indices), gl.STATIC_DRAW)
    } else {
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, self.ib)
    }
    gl.drawElements(gl.TRIANGLES, self.iCount, gl.UNSIGNED_SHORT, 0)
};
ZamModelViewer.Heroes.Bone = function(model, index, r) {
    var self = this,
        H = ZamModelViewer.Heroes;
    self.model = model;
    self.index = index;
    self.name = r.getString();
    self.flags = r.getUint32();
    self.parentId = r.getInt16();
    self.translation = new H.AnimVec3(r);
    self.rotation = new H.AnimQuaternion(r);
    self.scale = new H.AnimVec3(r);
    self.matrix = mat4.create();
    self.tmpMat = mat4.create();
    self.tmpVec = vec4.create();
    self.tmpQuat = quat.create();
    self.scaleLength = 0;
    self.updated = false;
    self.show = H.Bone.disabledBones[model.model] && H.Bone.disabledBones[model.model][self.name] ? false : true
};
ZamModelViewer.Heroes.Bone.disabledBones = {};
ZamModelViewer.Heroes.Bone.prototype = {
    destroy: function() {
        var self = this;
        if (self.translation) self.translation.destroy();
        if (self.rotation) self.rotation.destroy();
        if (self.scale) self.scale.destroy();
        self.translation = null;
        self.rotation = null;
        self.scale = null;
        self.matrix = null;
        self.tmpMat = null;
        self.tmpVec = null;
        self.tmpQuat = null;
        self.model = null;
        self.parent = null
    }
};
ZamModelViewer.Heroes.Animation = function(index, r) {
    var self = this;
    self.index = index;
    self.name = r.getString();
    self.seqStart = r.getInt32();
    self.seqEnd = r.getInt32();
    self.flags = r.getUint32();
    self.moveSpeed = r.getFloat();
    self.frequency = r.getInt32();
    self.replayStart = r.getInt32();
    self.replayEnd = r.getInt32()
};
ZamModelViewer.Heroes.AnimData = function(r) {
    var self = this,
        H = ZamModelViewer.Heroes,
        i;
    self.name = r.getString();
    self.index = r.getUint16();
    self.index2 = r.getUint16();
    var numAnimIds = r.getInt32();
    self.animIds = new Array(numAnimIds);
    for (i = 0; i < numAnimIds; ++i) self.animIds[i] = r.getUint32();
    var numAnimIndices = r.getInt32();
    self.animIndices = new Array(numAnimIndices);
    for (i = 0; i < numAnimIndices; ++i) {
        self.animIndices[i] = new H.AnimData.Index(r)
    }
    var numTranslations = r.getInt32();
    self.translations = new Array(numTranslations);
    for (i = 0; i < numTranslations; ++i) {
        self.translations[i] = new H.AnimData.Vec3(r)
    }
    var numRotations = r.getInt32();
    self.rotations = new Array(numRotations);
    for (i = 0; i < numRotations; ++i) {
        self.rotations[i] = new H.AnimData.Quaternion(r)
    }
    var numColors = r.getInt32();
    self.colors = new Array(numColors);
    for (i = 0; i < numColors; ++i) {
        self.colors[i] = new H.AnimData.Color(r)
    }
};
ZamModelViewer.Heroes.AnimData.prototype = {
    destroy: function() {
        var self = this,
            i;
        self.animIds = null;
        if (self.animIndices)
            for (i = 0; i < self.animIndices.length; ++i) self.animIndices[i] = null;
        self.animIndices = null;
        if (self.translations) {
            for (i = 0; i < self.translations.length; ++i) {
                self.translations[i].destroy();
                self.translations[i] = null
            }
            self.translations = null
        }
        if (self.rotations) {
            for (i = 0; i < self.rotations.length; ++i) {
                self.rotations[i].destroy();
                self.rotations[i] = null
            }
            self.rotations = null
        }
        if (self.colors) {
            for (i = 0; i < self.colors.length; ++i) {
                self.colors[i].destroy();
                self.colors[i] = null
            }
            self.colors = null
        }
    }
};
ZamModelViewer.Heroes.AnimData.Index = function(r) {
    var self = this;
    self.animIndex = r.getUint16();
    self.dataIndex = r.getUint16()
};
ZamModelViewer.Heroes.AnimData.Lookup = function(r) {
    var self = this;
    self.name = r.getString();
    var numIndices = r.getInt32();
    self.indices = new Array(numIndices);
    for (var i = 0; i < numIndices; ++i) {
        self.indices[i] = r.getUint32()
    }
};
ZamModelViewer.Heroes.AnimData.Lookup.prototype = {
    destroy: function() {
        this.indices = null
    }
};
ZamModelViewer.Heroes.AnimData.Base = function() {};
ZamModelViewer.Heroes.AnimData.Base.prototype = {
    destroy: function() {
        var self = this,
            i;
        self.timeline = null;
        if (self.values) {
            for (i = 0; i < self.values.length; ++i) {
                self.values[i] = null
            }
            self.values = null
        }
    },
    read: function(r) {
        var self = this,
            i;
        var numTimes = r.getInt32();
        self.timeline = new Array(numTimes);
        for (i = 0; i < numTimes; ++i) {
            self.timeline[i] = r.getInt32()
        }
        self.flags = r.getUint32();
        self.length = r.getUint32();
        var numValues = r.getInt32();
        self.values = new Array(numValues);
        for (i = 0; i < numValues; ++i) {
            self.values[i] = self.readValue(r)
        }
    },
    defaultValue: 0,
    createValue: function() {
        return this.defaultValue
    },
    setDefault: function(v) {
        this.defaultValue = v
    },
    interpolate: function(v1, v2, r, result) {
        result = v1 + (v2 - v1) * r;
        return result
    },
    set: function(result, value) {
        result = value;
        return result
    },
    getDefault: function(r) {
        r = this.defaultValue;
        return r
    },
    readValue: function(r) {
        return null
    },
    getValue: function(time, result) {
        var self = this;
        if (time > self.length) time %= self.length;
        var lastIdx = 0,
            numTimes = self.timeline.length - 1;
        for (var i = 0; i < numTimes; ++i) {
            if (self.timeline[i] < time) lastIdx = i;
            else break
        }
        if (lastIdx < numTimes) {
            var r = (time - self.timeline[lastIdx]) / (self.timeline[lastIdx + 1] - self.timeline[lastIdx]);
            result = self.interpolate(self.values[lastIdx], self.values[lastIdx + 1], r, result)
        } else {
            result = self.set(result, self.values[lastIdx])
        }
        return result
    }
};
ZamModelViewer.Heroes.AnimData.Vec3 = function(r) {
    var self = this;
    self.read(r)
};
ZamModelViewer.Heroes.AnimData.Vec3.prototype = new ZamModelViewer.Heroes.AnimData.Base;
ZamModelViewer.Heroes.AnimData.Vec3.prototype.constructor = ZamModelViewer.Heroes.AnimData.Vec3;
ZamModelViewer.Heroes.AnimData.Vec3.prototype.createValue = function() {
    return vec3.clone(this.defaultValue)
};
ZamModelViewer.Heroes.AnimData.Vec3.prototype.defaultValue = vec3.create();
ZamModelViewer.Heroes.AnimData.Vec3.prototype.getDefault = function(result) {
    vec3.copy(result, this.defaultValue);
    return result
};
ZamModelViewer.Heroes.AnimData.Vec3.prototype.interpolate = function(v1, v2, r, result) {
    return vec3.lerp(result, v1, v2, r)
};
ZamModelViewer.Heroes.AnimData.Vec3.prototype.set = function(result, value) {
    vec3.copy(result, value);
    return result
};
ZamModelViewer.Heroes.AnimData.Vec3.prototype.readValue = function(r) {
    return vec3.set(vec3.create(), r.getFloat(), r.getFloat(), r.getFloat())
};
ZamModelViewer.Heroes.AnimData.Quaternion = function(r) {
    var self = this;
    self.read(r)
};
ZamModelViewer.Heroes.AnimData.Quaternion.prototype = new ZamModelViewer.Heroes.AnimData.Base;
ZamModelViewer.Heroes.AnimData.Quaternion.prototype.constructor = ZamModelViewer.Heroes.AnimData.Quaternion;
ZamModelViewer.Heroes.AnimData.Quaternion.prototype.createValue = function() {
    return quat.clone(this.defaultValue)
};
ZamModelViewer.Heroes.AnimData.Quaternion.prototype.defaultValue = quat.create();
ZamModelViewer.Heroes.AnimData.Quaternion.prototype.getDefault = function(result) {
    quat.copy(result, this.defaultValue);
    return result
};
ZamModelViewer.Heroes.AnimData.Quaternion.prototype.interpolate = function(v1, v2, r, result) {
    return quat.slerp(result, v1, v2, r)
};
ZamModelViewer.Heroes.AnimData.Quaternion.prototype.set = function(result, value) {
    quat.copy(result, value);
    return result
};
ZamModelViewer.Heroes.AnimData.Quaternion.prototype.readValue = function(r) {
    return quat.set(quat.create(), r.getFloat(), r.getFloat(), r.getFloat(), r.getFloat())
};
ZamModelViewer.Heroes.AnimData.Color = function(r) {
    var self = this;
    self.read(r)
};
ZamModelViewer.Heroes.AnimData.Color.prototype = new ZamModelViewer.Heroes.AnimData.Base;
ZamModelViewer.Heroes.AnimData.Color.prototype.constructor = ZamModelViewer.Heroes.AnimData.Color;
ZamModelViewer.Heroes.AnimData.Color.prototype.createValue = function() {
    return vec4.clone(this.defaultValue)
};
ZamModelViewer.Heroes.AnimData.Color.prototype.defaultValue = vec4.create();
ZamModelViewer.Heroes.AnimData.Color.prototype.getDefault = function(result) {
    vec4.copy(result, this.defaultValue);
    return result
};
ZamModelViewer.Heroes.AnimData.Color.prototype.interpolate = function(v1, v2, r, result) {
    return vec4.lerp(result, v1, v2, r)
};
ZamModelViewer.Heroes.AnimData.Color.prototype.set = function(result, value) {
    vec4.copy(result, value);
    return result
};
ZamModelViewer.Heroes.AnimData.Color.prototype.readValue = function(r) {
    return vec4.set(vec4.create(), r.getFloat(), r.getFloat(), r.getFloat(), r.getFloat())
};
ZamModelViewer.Heroes.AnimReference = function() {};
ZamModelViewer.Heroes.AnimReference.prototype = {
    read: function(r) {
        var self = this;
        self.flags = r.getUint16();
        self.animFlags = r.getUint16();
        self.animId = r.getUint32()
    }
};
ZamModelViewer.Heroes.AnimVec3 = function(r) {
    var self = this;
    self.read(r);
    self.value = [r.getFloat(), r.getFloat(), r.getFloat()]
};
ZamModelViewer.Heroes.AnimVec3.prototype = new ZamModelViewer.Heroes.AnimReference;
ZamModelViewer.Heroes.AnimVec3.prototype.constructor = ZamModelViewer.Heroes.AnimVec3;
ZamModelViewer.Heroes.AnimQuaternion = function(r) {
    var self = this;
    self.read(r);
    self.value = [r.getFloat(), r.getFloat(), r.getFloat(), r.getFloat()]
};
ZamModelViewer.Heroes.AnimQuaternion.prototype = new ZamModelViewer.Heroes.AnimReference;
ZamModelViewer.Heroes.AnimQuaternion.prototype.constructor = ZamModelViewer.Heroes.AnimQuaternion;
ZamModelViewer.Heroes.Texture = function(model, url) {
    var self = this;
    self.model = model;
    self.url = model.opts.contentPath + "textures/" + url;
    if (model.opts.cacheBuster) {
        self.url += "?" + model.opts.cacheBuster
    } else {
        self.url += "?1"
    }
    self.alphaUrl = self.url.replace(".png", ".alpha.png");
    self.texture = null;
    self.alphaTexture = null;
    self.load()
};
ZamModelViewer.Heroes.Texture.prototype = {
    destroy: function() {
        var self = this,
            gl = self.model.renderer.context;
        if (self.texture) gl.deleteTexture(self.texture);
        if (self.alphaTexture) gl.deleteTexture(self.alphaTexture);
        self.texture = null;
        self.alphatexture = null;
        self.img = null;
        self.alphaImg = null;
        self.model = null
    },
    load: function() {
        var self = this,
            gl = self.model.renderer.context;
        (function(self, gl) {
            self.img = new Image;
            self.img.crossOrigin = "";
            self.img.onload = function() {
                self.img.loaded = true;
                self.texture = gl.createTexture();
                gl.bindTexture(gl.TEXTURE_2D, self.texture);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, self.img);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
            };
            self.img.onerror = function() {
                self.img = null;
                self.error = true
            };
            self.img.src = self.url;
            self.alphaImg = new Image;
            self.alphaImg.crossOrigin = "";
            self.alphaImg.onload = function() {
                self.alphaImg.loaded = true;
                self.alphaTexture = gl.createTexture();
                gl.bindTexture(gl.TEXTURE_2D, self.alphaTexture);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, self.alphaImg);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
            };
            self.alphaImg.onerror = function() {
                self.alphaImg = null
            };
            self.alphaImg.src = self.alphaUrl
        })(self, gl)
    }
};
//# sourceMappingURL=viewer.min.js.map