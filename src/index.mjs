var LIB = (function (t) {
  var n = {};
  function r(e) {
    if (n[e]) return n[e].exports;
    var o = (n[e] = { i: e, l: !1, exports: {} });
    return t[e].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  return (
    (r.m = t),
    (r.c = n),
    (r.d = function (t, n, e) {
      r.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: e });
    }),
    (r.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, n) {
      if ((1 & n && (t = r(t)), 8 & n)) return t;
      if (4 & n && "object" == typeof t && t && t.__esModule) return t;
      var e = Object.create(null);
      if (
        (r.r(e),
        Object.defineProperty(e, "default", { enumerable: !0, value: t }),
        2 & n && "string" != typeof t)
      )
        for (var o in t)
          r.d(
            e,
            o,
            function (n) {
              return t[n];
            }.bind(null, o),
          );
      return e;
    }),
    (r.n = function (t) {
      var n =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(n, "a", n), n;
    }),
    (r.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (r.p = ""),
    r((r.s = 7))
  );
})([
  function (t, n, r) {
    var e = r(8);
    t.exports = function (t) {
      return (null == t ? 0 : t.length) ? e(t, 1 / 0) : [];
    };
  },
  function (t, n, r) {
    var e = r(11).Symbol;
    t.exports = e;
  },
  function (t, n, r) {
    var e = r(1),
      o = r(16),
      u = r(17),
      i = e ? e.toStringTag : void 0;
    t.exports = function (t) {
      return null == t
        ? void 0 === t
          ? "[object Undefined]"
          : "[object Null]"
        : i && i in Object(t)
        ? o(t)
        : u(t);
    };
  },
  function (t, n) {
    t.exports = function (t) {
      return null != t && "object" == typeof t;
    };
  },
  function (t, n) {
    t.exports = function (t) {
      var n = typeof t;
      return null != t && ("object" == n || "function" == n);
    };
  },
  function (t, n) {
    var r = Array.prototype.join;
    t.exports = function (t, n) {
      return null == t ? "" : r.call(t, n);
    };
  },
  function (t, n, r) {
    var e = r(19),
      o = r(20),
      u = r(26),
      i = Math.ceil,
      c = Math.max;
    t.exports = function (t, n, r) {
      n = (r ? o(t, n, r) : void 0 === n) ? 1 : c(u(n), 0);
      var l = null == t ? 0 : t.length;
      if (!l || n < 1) return [];
      for (var f = 0, a = 0, s = Array(i(l / n)); f < l; )
        s[a++] = e(t, f, (f += n));
      return s;
    };
  },
  function (t, n, r) {
    "use strict";
    r.r(n);
    var e = r(5),
      o = r.n(e),
      u = r(0),
      i = r.n(u),
      c = r(6),
      l = r.n(c);
    const f = {
        0: "không",
        1: "một",
        2: "hai",
        3: "ba",
        4: "bốn",
        5: "năm",
        6: "sáu",
        7: "bẩy",
        8: "tám",
        9: "chín",
      },
      a = { 1: "mốt", 4: "tư", 5: "lăm" },
      s = (t) => {
        let n = t[0],
          r = t[1];
        return 1 == n
          ? 0 == r
            ? "mười"
            : "mười " + f[r]
          : 0 == r && 1 != n
          ? f[n] + " mươi"
          : 1 == r && 1 != n
          ? f[n] + " mươi " + a[1]
          : 5 == r
          ? 1 == n
            ? a[n] + " " + f[5]
            : f[n] + " mươi " + a[5]
          : 4 == r
          ? 1 == n
            ? a[n] + " " + f[4]
            : f[n] + " mươi " + a[4]
          : f[n] + " mươi " + f[r];
      },
      p = (t) =>
        1 === t.length
          ? f[t[0]]
          : 2 === t.length
          ? s(t)
          : ((t) => {
              let n = t[0],
                r = t[1],
                e = t[2];
              return 0 == n && 0 == r && 0 == e
                ? ""
                : 0 == r && 0 == e
                ? f[n] + " trăm"
                : 0 != e && 0 == r
                ? f[n] + " trăm linh " + f[e]
                : f[n] + " trăm " + s([r, e]);
            })(t),
      g = (t) =>
        "000000" === o()(i()(t), "")
          ? ""
          : "" === p(t[0])
          ? "không nghìn " + p(t[1])
          : p(t[0]) + " nghìn " + p(t[1]),
      v = (t) => {
        if ("000000000" === o()(i()(t), "")) return "";
        if ("" === p(t[0])) return t.splice(0, 1), "không triệu " + g(t);
        {
          let n = "";
          return (n += p(t[0]) + " triệu "), t.splice(0, 1), (n += g(t)), n;
        }
      },
      h = (t, n) => {
        const r = t.length % n;
        return r ? [t.slice(0, r), ...l()(t.slice(r), n)] : l()(t, n);
      };
    n.default = function (t) {
      var n = "";
      let r = (t = BigInt(t)).toString().split(""),
        e = h(r, 3);
      if (
        (1 === e.length
          ? (n += p(e[0]))
          : 2 === e.length
          ? (n += g(e))
          : 3 === e.length && (n += v(e)),
        e.length >= 4)
      ) {
        var o = h(e, 3);
        let t = [...o];
        if (
          (t.shift(),
          (t = i()(t)),
          (t = t.find(function (t) {
            return 0 != t;
          })),
          null == t)
        ) {
          1 === o[0].length
            ? (n += p(e[0]))
            : 2 === o[0].length
            ? (n += g(e))
            : 3 === o[0].length && (n += v(e));
          for (let t = 1; t <= o.length - 1; t++) n += " tỷ";
        } else {
          let t = o.length;
          for (let r = 0; r <= o.length - 1; r++) {
            let e = "";
            (t -= 1),
              1 === o[r].length
                ? (e += p(o[r][0]))
                : 2 === o[r].length
                ? (e += g(o[r]))
                : 3 === o[r].length && (e += v(o[r])),
              (n += "" == e ? "không" : e);
            for (let r = 1; r <= t; r++) n += " tỷ ";
            n = (n = n.replace(/(\s)+/gi, " ")).replace(/không (tỷ )+/gi, " ");
          }
        }
      }
      return (n = (n = (n = (n = (n = (n = n.replace(/(\s)+/gi, " ")).replace(
        /không (((?<=[\s,.:;"']|^)tỷ(?=[\s,.:;"']|$)(\s+\1)+)+)(không triệu) (không nghìn)/gi,
        " ",
      )).replace(/(\s)+/gi, " ")).replace(
        /không triệu không nghìn/gi,
        " ",
      )).replace(/(\s)+/gi, " ")).replace());
    };
  },
  function (t, n, r) {
    var e = r(9),
      o = r(10);
    t.exports = function t(n, r, u, i, c) {
      var l = -1,
        f = n.length;
      for (u || (u = o), c || (c = []); ++l < f; ) {
        var a = n[l];
        r > 0 && u(a)
          ? r > 1
            ? t(a, r - 1, u, i, c)
            : e(c, a)
          : i || (c[c.length] = a);
      }
      return c;
    };
  },
  function (t, n) {
    t.exports = function (t, n) {
      for (var r = -1, e = n.length, o = t.length; ++r < e; ) t[o + r] = n[r];
      return t;
    };
  },
  function (t, n, r) {
    var e = r(1),
      o = r(14),
      u = r(18),
      i = e ? e.isConcatSpreadable : void 0;
    t.exports = function (t) {
      return u(t) || o(t) || !!(i && t && t[i]);
    };
  },
  function (t, n, r) {
    var e = r(12),
      o = "object" == typeof self && self && self.Object === Object && self,
      u = e || o || Function("return this")();
    t.exports = u;
  },
  function (t, n, r) {
    (function (n) {
      var r = "object" == typeof n && n && n.Object === Object && n;
      t.exports = r;
    }).call(this, r(13));
  },
  function (t, n) {
    var r;
    r = (function () {
      return this;
    })();
    try {
      r = r || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (r = window);
    }
    t.exports = r;
  },
  function (t, n, r) {
    var e = r(15),
      o = r(3),
      u = Object.prototype,
      i = u.hasOwnProperty,
      c = u.propertyIsEnumerable,
      l = e(
        (function () {
          return arguments;
        })(),
      )
        ? e
        : function (t) {
            return o(t) && i.call(t, "callee") && !c.call(t, "callee");
          };
    t.exports = l;
  },
  function (t, n, r) {
    var e = r(2),
      o = r(3);
    t.exports = function (t) {
      return o(t) && "[object Arguments]" == e(t);
    };
  },
  function (t, n, r) {
    var e = r(1),
      o = Object.prototype,
      u = o.hasOwnProperty,
      i = o.toString,
      c = e ? e.toStringTag : void 0;
    t.exports = function (t) {
      var n = u.call(t, c),
        r = t[c];
      try {
        t[c] = void 0;
        var e = !0;
      } catch (t) {}
      var o = i.call(t);
      return e && (n ? (t[c] = r) : delete t[c]), o;
    };
  },
  function (t, n) {
    var r = Object.prototype.toString;
    t.exports = function (t) {
      return r.call(t);
    };
  },
  function (t, n) {
    var r = Array.isArray;
    t.exports = r;
  },
  function (t, n) {
    t.exports = function (t, n, r) {
      var e = -1,
        o = t.length;
      n < 0 && (n = -n > o ? 0 : o + n),
        (r = r > o ? o : r) < 0 && (r += o),
        (o = n > r ? 0 : (r - n) >>> 0),
        (n >>>= 0);
      for (var u = Array(o); ++e < o; ) u[e] = t[e + n];
      return u;
    };
  },
  function (t, n, r) {
    var e = r(21),
      o = r(22),
      u = r(25),
      i = r(4);
    t.exports = function (t, n, r) {
      if (!i(r)) return !1;
      var c = typeof n;
      return (
        !!("number" == c ? o(r) && u(n, r.length) : "string" == c && n in r) &&
        e(r[n], t)
      );
    };
  },
  function (t, n) {
    t.exports = function (t, n) {
      return t === n || (t != t && n != n);
    };
  },
  function (t, n, r) {
    var e = r(23),
      o = r(24);
    t.exports = function (t) {
      return null != t && o(t.length) && !e(t);
    };
  },
  function (t, n, r) {
    var e = r(2),
      o = r(4);
    t.exports = function (t) {
      if (!o(t)) return !1;
      var n = e(t);
      return (
        "[object Function]" == n ||
        "[object GeneratorFunction]" == n ||
        "[object AsyncFunction]" == n ||
        "[object Proxy]" == n
      );
    };
  },
  function (t, n) {
    t.exports = function (t) {
      return (
        "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
      );
    };
  },
  function (t, n) {
    var r = /^(?:0|[1-9]\d*)$/;
    t.exports = function (t, n) {
      var e = typeof t;
      return (
        !!(n = null == n ? 9007199254740991 : n) &&
        ("number" == e || ("symbol" != e && r.test(t))) &&
        t > -1 &&
        t % 1 == 0 &&
        t < n
      );
    };
  },
  function (t, n, r) {
    var e = r(27);
    t.exports = function (t) {
      var n = e(t),
        r = n % 1;
      return n == n ? (r ? n - r : n) : 0;
    };
  },
  function (t, n, r) {
    var e = r(28);
    t.exports = function (t) {
      return t
        ? (t = e(t)) === 1 / 0 || t === -1 / 0
          ? 17976931348623157e292 * (t < 0 ? -1 : 1)
          : t == t
          ? t
          : 0
        : 0 === t
        ? t
        : 0;
    };
  },
  function (t, n, r) {
    var e = r(4),
      o = r(29),
      u = /^\s+|\s+$/g,
      i = /^[-+]0x[0-9a-f]+$/i,
      c = /^0b[01]+$/i,
      l = /^0o[0-7]+$/i,
      f = parseInt;
    t.exports = function (t) {
      if ("number" == typeof t) return t;
      if (o(t)) return NaN;
      if (e(t)) {
        var n = "function" == typeof t.valueOf ? t.valueOf() : t;
        t = e(n) ? n + "" : n;
      }
      if ("string" != typeof t) return 0 === t ? t : +t;
      t = t.replace(u, "");
      var r = c.test(t);
      return r || l.test(t) ? f(t.slice(2), r ? 2 : 8) : i.test(t) ? NaN : +t;
    };
  },
  function (t, n, r) {
    var e = r(2),
      o = r(3);
    t.exports = function (t) {
      return "symbol" == typeof t || (o(t) && "[object Symbol]" == e(t));
    };
  },
]);
export default LIB.default;
