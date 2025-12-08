/*! For license information please see 43.69795ba1.js.LICENSE.txt */
(self.webpackChunkrsbuild_react_js =
  self.webpackChunkrsbuild_react_js || []).push([
  ["43"],
  {
    186: function (t, e, n) {
      "use strict";
      var a = n(985);
      function r() {}
      function i() {}
      ((i.resetWarningCache = r),
        (t.exports = function () {
          function t(t, e, n, r, i, d) {
            if (d !== a) {
              var o = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
              );
              throw ((o.name = "Invariant Violation"), o);
            }
          }
          function e() {
            return t;
          }
          t.isRequired = t;
          var n = {
            array: t,
            bigint: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            elementType: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes: i,
            resetWarningCache: r,
          };
          return ((n.PropTypes = n), n);
        }));
    },
    736: function (t, e, n) {
      t.exports = n(186)();
    },
    985: function (t) {
      "use strict";
      t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    71: function (t, e, n) {
      "use strict";
      n.d(e, {
        DW4: () => s,
        GRI: () => i,
        Jt$: () => l,
        Ki6: () => f,
        Lmx: () => o,
        Q9Y: () => u,
        QEm: () => a,
        QRE: () => d,
        lEd: () => r,
        mEO: () => c,
      });
      var a = {
          prefix: "fas",
          iconName: "headset",
          icon: [
            448,
            512,
            [],
            "f590",
            "M224 64c-79 0-144.7 57.3-157.7 132.7 9.3-3 19.3-4.7 29.7-4.7l16 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0c-53 0-96-43-96-96l0-64C0 100.3 100.3 0 224 0S448 100.3 448 224l0 168.1c0 66.3-53.8 120-120.1 120l-87.9-.1-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c26.5 0 48 21.5 48 48l0 0 40 0c39.8 0 72-32.2 72-72l0-20.9c-14.1 8.2-30.5 12.8-48 12.8l-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48l16 0c10.4 0 20.3 1.6 29.7 4.7-13-75.3-78.6-132.7-157.7-132.7z",
          ],
        },
        r = {
          prefix: "fas",
          iconName: "circle-exclamation",
          icon: [
            512,
            512,
            ["exclamation-circle"],
            "f06a",
            "M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zm0-192a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.6 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z",
          ],
        },
        i = {
          prefix: "fas",
          iconName: "xmark",
          icon: [
            384,
            512,
            [
              128473,
              10005,
              10006,
              10060,
              215,
              "close",
              "multiply",
              "remove",
              "times",
            ],
            "f00d",
            "M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z",
          ],
        },
        d = {
          prefix: "fas",
          iconName: "circle-check",
          icon: [
            512,
            512,
            [61533, "check-circle"],
            "f058",
            "M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z",
          ],
        },
        o = {
          prefix: "fas",
          iconName: "id-card",
          icon: [
            576,
            512,
            [62147, "drivers-license"],
            "f2c2",
            "M0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64L0 96zm0 48l576 0 0 272c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 144zM247.3 416c20.2 0 35.3-19.4 22.4-35-14.7-17.7-36.9-29-61.7-29l-64 0c-24.8 0-47 11.3-61.7 29-12.9 15.6 2.2 35 22.4 35l142.5 0zM176 312a56 56 0 1 0 0-112 56 56 0 1 0 0 112zM360 208c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0z",
          ],
        },
        l = {
          prefix: "fas",
          iconName: "chevron-down",
          icon: [
            448,
            512,
            [],
            "f078",
            "M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z",
          ],
        },
        s = {
          prefix: "fas",
          iconName: "lock",
          icon: [
            384,
            512,
            [128274],
            "f023",
            "M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z",
          ],
        },
        u = {
          prefix: "fas",
          iconName: "compass",
          icon: [
            512,
            512,
            [129517],
            "f14e",
            "M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z",
          ],
        },
        f = {
          prefix: "fas",
          iconName: "user-gear",
          icon: [
            640,
            512,
            ["user-cog"],
            "f4fe",
            "M256.5 8a120 120 0 1 1 0 240 120 120 0 1 1 0-240zM226.7 304l59.4 0 1.5 0c-12.9 26.8-7.8 58.2 11.5 79.5-20.2 22.3-24.8 55.8-9.4 83.4l22.5 40.4c.9 1.6 1.9 3.2 2.9 4.7l-237 0c-16.4 0-29.7-13.3-29.7-29.7 0-98.5 79.8-178.3 178.3-178.3zm205.9-56.4c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 6.1c0 18.9 24.1 32.8 40.5 23.4l5-2.9c11.6-6.7 26.5-2.6 33 9.1l22.4 40.2c6.2 11.2 2.6 25.2-8.2 32l-4.7 2.9c-16.2 10.1-16.2 39.9 0 50.1l4.6 2.9c10.8 6.8 14.5 20.8 8.3 32L607 483.8c-6.5 11.7-21.4 15.9-33 9.1l-4.9-2.9c-16.4-9.5-40.5 4.5-40.5 23.4l0 6.1c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-5.9c0-19-24.2-33-40.7-23.5l-4.8 2.8c-11.6 6.7-26.4 2.6-33-9.1l-22.6-40.4c-6.2-11.2-2.6-25.3 8.3-32.1l4.4-2.7c16.3-10.1 16.3-40.1 0-50.2l-4.5-2.8c-10.9-6.8-14.5-20.9-8.3-32.1l22.5-40.3c6.5-11.7 21.4-15.8 32.9-9.1l4.8 2.8c16.5 9.5 40.7-4.5 40.7-23.5l0-5.9zm99.9 136.2a52 52 0 1 0 -104 0 52 52 0 1 0 104 0z",
          ],
        },
        c = {
          prefix: "fas",
          iconName: "circle-info",
          icon: [
            512,
            512,
            ["info-circle"],
            "f05a",
            "M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM224 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-8 64l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z",
          ],
        };
    },
    527: function (t, e, n) {
      "use strict";
      n.d(e, { g: () => n$ });
      var a,
        r,
        i,
        d,
        o = n(729);
      function l(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, a = Array(e); n < e; n++) a[n] = t[n];
        return a;
      }
      function s(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = p(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var a = 0,
              r = function () {};
            return {
              s: r,
              n: function () {
                return a >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[a++] };
              },
              e: function (t) {
                throw t;
              },
              f: r,
            };
          }
          throw TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        }
        var i,
          d = !0,
          o = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return ((d = t.done), t);
          },
          e: function (t) {
            ((o = !0), (i = t));
          },
          f: function () {
            try {
              d || null == n.return || n.return();
            } finally {
              if (o) throw i;
            }
          },
        };
      }
      function u(t, e, n) {
        return (
          (e = h(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function f(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t);
          (e &&
            (a = a.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, a));
        }
        return n;
      }
      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? f(Object(n), !0).forEach(function (e) {
                u(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : f(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function $(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var a,
                r,
                i,
                d,
                o = [],
                l = !0,
                s = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (a = i.call(n)).done) &&
                    (o.push(a.value), o.length !== e);
                    l = !0
                  );
              } catch (t) {
                ((s = !0), (r = t));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((d = n.return()), Object(d) !== d)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return o;
            }
          })(t, e) ||
          p(t, e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function m(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return l(t);
          })(t) ||
          (function (t) {
            if (
              ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
              null != t["@@iterator"]
            )
              return Array.from(t);
          })(t) ||
          p(t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function h(t) {
        var e = (function (t, e) {
          if ("object" != typeof t || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var a = n.call(t, e || "default");
            if ("object" != typeof a) return a;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == typeof e ? e : e + "";
      }
      function g(t) {
        return (g =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function p(t, e) {
        if (t) {
          if ("string" == typeof t) return l(t, e);
          var n = {}.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? l(t, e)
                : void 0
          );
        }
      }
      var y = function () {},
        v = {},
        b = {},
        x = null,
        C = { mark: y, measure: y };
      try {
        ("undefined" != typeof window && (v = window),
          "undefined" != typeof document && (b = document),
          "undefined" != typeof MutationObserver && (x = MutationObserver),
          "undefined" != typeof performance && (C = performance));
      } catch (t) {}
      var N = (v.navigator || {}).userAgent,
        P = void 0 === N ? "" : N,
        S = v,
        w = b,
        k = x,
        A = C;
      S.document;
      var I =
          !!w.documentElement &&
          !!w.head &&
          "function" == typeof w.addEventListener &&
          "function" == typeof w.createElement,
        E = ~P.indexOf("MSIE") || ~P.indexOf("Trident/"),
        F = {
          classic: {
            fa: "solid",
            fas: "solid",
            "fa-solid": "solid",
            far: "regular",
            "fa-regular": "regular",
            fal: "light",
            "fa-light": "light",
            fat: "thin",
            "fa-thin": "thin",
            fab: "brands",
            "fa-brands": "brands",
          },
          duotone: {
            fa: "solid",
            fad: "solid",
            "fa-solid": "solid",
            "fa-duotone": "solid",
            fadr: "regular",
            "fa-regular": "regular",
            fadl: "light",
            "fa-light": "light",
            fadt: "thin",
            "fa-thin": "thin",
          },
          sharp: {
            fa: "solid",
            fass: "solid",
            "fa-solid": "solid",
            fasr: "regular",
            "fa-regular": "regular",
            fasl: "light",
            "fa-light": "light",
            fast: "thin",
            "fa-thin": "thin",
          },
          "sharp-duotone": {
            fa: "solid",
            fasds: "solid",
            "fa-solid": "solid",
            fasdr: "regular",
            "fa-regular": "regular",
            fasdl: "light",
            "fa-light": "light",
            fasdt: "thin",
            "fa-thin": "thin",
          },
          slab: { "fa-regular": "regular", faslr: "regular" },
          "slab-press": { "fa-regular": "regular", faslpr: "regular" },
          thumbprint: { "fa-light": "light", fatl: "light" },
          whiteboard: { "fa-semibold": "semibold", fawsb: "semibold" },
          notdog: { "fa-solid": "solid", fans: "solid" },
          "notdog-duo": { "fa-solid": "solid", fands: "solid" },
          etch: { "fa-solid": "solid", faes: "solid" },
          jelly: { "fa-regular": "regular", fajr: "regular" },
          "jelly-fill": { "fa-regular": "regular", fajfr: "regular" },
          "jelly-duo": { "fa-regular": "regular", fajdr: "regular" },
          chisel: { "fa-regular": "regular", facr: "regular" },
        },
        O = [
          "fa-classic",
          "fa-duotone",
          "fa-sharp",
          "fa-sharp-duotone",
          "fa-thumbprint",
          "fa-whiteboard",
          "fa-notdog",
          "fa-notdog-duo",
          "fa-chisel",
          "fa-etch",
          "fa-jelly",
          "fa-jelly-fill",
          "fa-jelly-duo",
          "fa-slab",
          "fa-slab-press",
        ],
        j = "classic",
        M = "duotone",
        T = "sharp",
        D = "sharp-duotone",
        L = "chisel",
        R = "etch",
        z = "jelly",
        _ = "jelly-duo",
        B = "jelly-fill",
        W = "notdog",
        G = "notdog-duo",
        U = "slab",
        K = "slab-press",
        H = "thumbprint",
        V = "whiteboard",
        Y = [j, M, T, D, L, R, z, _, B, W, G, U, K, H, V];
      (u(
        u(
          u(
            u(
              u(
                u(
                  u(
                    u(u(u((i = {}), j, "Classic"), M, "Duotone"), T, "Sharp"),
                    D,
                    "Sharp Duotone",
                  ),
                  L,
                  "Chisel",
                ),
                R,
                "Etch",
              ),
              z,
              "Jelly",
            ),
            _,
            "Jelly Duo",
          ),
          B,
          "Jelly Fill",
        ),
        W,
        "Notdog",
      ),
        u(
          u(
            u(u(u(i, G, "Notdog Duo"), U, "Slab"), K, "Slab Press"),
            H,
            "Thumbprint",
          ),
          V,
          "Whiteboard",
        ));
      var J = new Map([
          [
            "classic",
            {
              defaultShortPrefixId: "fas",
              defaultStyleId: "solid",
              styleIds: ["solid", "regular", "light", "thin", "brands"],
              futureStyleIds: [],
              defaultFontWeight: 900,
            },
          ],
          [
            "duotone",
            {
              defaultShortPrefixId: "fad",
              defaultStyleId: "solid",
              styleIds: ["solid", "regular", "light", "thin"],
              futureStyleIds: [],
              defaultFontWeight: 900,
            },
          ],
          [
            "sharp",
            {
              defaultShortPrefixId: "fass",
              defaultStyleId: "solid",
              styleIds: ["solid", "regular", "light", "thin"],
              futureStyleIds: [],
              defaultFontWeight: 900,
            },
          ],
          [
            "sharp-duotone",
            {
              defaultShortPrefixId: "fasds",
              defaultStyleId: "solid",
              styleIds: ["solid", "regular", "light", "thin"],
              futureStyleIds: [],
              defaultFontWeight: 900,
            },
          ],
          [
            "chisel",
            {
              defaultShortPrefixId: "facr",
              defaultStyleId: "regular",
              styleIds: ["regular"],
              futureStyleIds: [],
              defaultFontWeight: 400,
            },
          ],
          [
            "etch",
            {
              defaultShortPrefixId: "faes",
              defaultStyleId: "solid",
              styleIds: ["solid"],
              futureStyleIds: [],
              defaultFontWeight: 900,
            },
          ],
          [
            "jelly",
            {
              defaultShortPrefixId: "fajr",
              defaultStyleId: "regular",
              styleIds: ["regular"],
              futureStyleIds: [],
              defaultFontWeight: 400,
            },
          ],
          [
            "jelly-duo",
            {
              defaultShortPrefixId: "fajdr",
              defaultStyleId: "regular",
              styleIds: ["regular"],
              futureStyleIds: [],
              defaultFontWeight: 400,
            },
          ],
          [
            "jelly-fill",
            {
              defaultShortPrefixId: "fajfr",
              defaultStyleId: "regular",
              styleIds: ["regular"],
              futureStyleIds: [],
              defaultFontWeight: 400,
            },
          ],
          [
            "notdog",
            {
              defaultShortPrefixId: "fans",
              defaultStyleId: "solid",
              styleIds: ["solid"],
              futureStyleIds: [],
              defaultFontWeight: 900,
            },
          ],
          [
            "notdog-duo",
            {
              defaultShortPrefixId: "fands",
              defaultStyleId: "solid",
              styleIds: ["solid"],
              futureStyleIds: [],
              defaultFontWeight: 900,
            },
          ],
          [
            "slab",
            {
              defaultShortPrefixId: "faslr",
              defaultStyleId: "regular",
              styleIds: ["regular"],
              futureStyleIds: [],
              defaultFontWeight: 400,
            },
          ],
          [
            "slab-press",
            {
              defaultShortPrefixId: "faslpr",
              defaultStyleId: "regular",
              styleIds: ["regular"],
              futureStyleIds: [],
              defaultFontWeight: 400,
            },
          ],
          [
            "thumbprint",
            {
              defaultShortPrefixId: "fatl",
              defaultStyleId: "light",
              styleIds: ["light"],
              futureStyleIds: [],
              defaultFontWeight: 300,
            },
          ],
          [
            "whiteboard",
            {
              defaultShortPrefixId: "fawsb",
              defaultStyleId: "semibold",
              styleIds: ["semibold"],
              futureStyleIds: [],
              defaultFontWeight: 600,
            },
          ],
        ]),
        Z = ["fak", "fa-kit", "fakd", "fa-kit-duotone"];
      u(u({}, "kit", "Kit"), "kit-duotone", "Kit Duotone");
      (u(
        u(
          u(
            u(
              u(
                u(
                  u(
                    u(
                      u(
                        u((d = {}), "classic", "Classic"),
                        "duotone",
                        "Duotone",
                      ),
                      "sharp",
                      "Sharp",
                    ),
                    "sharp-duotone",
                    "Sharp Duotone",
                  ),
                  "chisel",
                  "Chisel",
                ),
                "etch",
                "Etch",
              ),
              "jelly",
              "Jelly",
            ),
            "jelly-duo",
            "Jelly Duo",
          ),
          "jelly-fill",
          "Jelly Fill",
        ),
        "notdog",
        "Notdog",
      ),
        u(
          u(
            u(
              u(u(d, "notdog-duo", "Notdog Duo"), "slab", "Slab"),
              "slab-press",
              "Slab Press",
            ),
            "thumbprint",
            "Thumbprint",
          ),
          "whiteboard",
          "Whiteboard",
        ),
        u(u({}, "kit", "Kit"), "kit-duotone", "Kit Duotone"));
      var X = {
          classic: {
            fab: "fa-brands",
            fad: "fa-duotone",
            fal: "fa-light",
            far: "fa-regular",
            fas: "fa-solid",
            fat: "fa-thin",
          },
          duotone: { fadr: "fa-regular", fadl: "fa-light", fadt: "fa-thin" },
          sharp: {
            fass: "fa-solid",
            fasr: "fa-regular",
            fasl: "fa-light",
            fast: "fa-thin",
          },
          "sharp-duotone": {
            fasds: "fa-solid",
            fasdr: "fa-regular",
            fasdl: "fa-light",
            fasdt: "fa-thin",
          },
          slab: { faslr: "fa-regular" },
          "slab-press": { faslpr: "fa-regular" },
          whiteboard: { fawsb: "fa-semibold" },
          thumbprint: { fatl: "fa-light" },
          notdog: { fans: "fa-solid" },
          "notdog-duo": { fands: "fa-solid" },
          etch: { faes: "fa-solid" },
          jelly: { fajr: "fa-regular" },
          "jelly-fill": { fajfr: "fa-regular" },
          "jelly-duo": { fajdr: "fa-regular" },
          chisel: { facr: "fa-regular" },
        },
        q = [
          "fa",
          "fas",
          "far",
          "fal",
          "fat",
          "fad",
          "fadr",
          "fadl",
          "fadt",
          "fab",
          "fass",
          "fasr",
          "fasl",
          "fast",
          "fasds",
          "fasdr",
          "fasdl",
          "fasdt",
          "faslr",
          "faslpr",
          "fawsb",
          "fatl",
          "fans",
          "fands",
          "faes",
          "fajr",
          "fajfr",
          "fajdr",
          "facr",
        ].concat(
          [
            "fa-classic",
            "fa-duotone",
            "fa-sharp",
            "fa-sharp-duotone",
            "fa-thumbprint",
            "fa-whiteboard",
            "fa-notdog",
            "fa-notdog-duo",
            "fa-chisel",
            "fa-etch",
            "fa-jelly",
            "fa-jelly-fill",
            "fa-jelly-duo",
            "fa-slab",
            "fa-slab-press",
          ],
          [
            "fa-solid",
            "fa-regular",
            "fa-light",
            "fa-thin",
            "fa-duotone",
            "fa-brands",
            "fa-semibold",
          ],
        ),
        Q = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        tt = Q.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
        te = []
          .concat(
            m([
              "classic",
              "duotone",
              "sharp",
              "sharp-duotone",
              "slab",
              "slab-press",
              "whiteboard",
              "thumbprint",
              "notdog",
              "notdog-duo",
              "etch",
              "jelly",
              "jelly-fill",
              "jelly-duo",
              "chisel",
            ]),
            [
              "solid",
              "regular",
              "light",
              "thin",
              "duotone",
              "brands",
              "semibold",
            ],
            ["aw", "fw", "pull-left", "pull-right"],
            [
              "2xs",
              "xs",
              "sm",
              "lg",
              "xl",
              "2xl",
              "beat",
              "border",
              "fade",
              "beat-fade",
              "bounce",
              "flip-both",
              "flip-horizontal",
              "flip-vertical",
              "flip",
              "inverse",
              "layers",
              "layers-bottom-left",
              "layers-bottom-right",
              "layers-counter",
              "layers-text",
              "layers-top-left",
              "layers-top-right",
              "li",
              "pull-end",
              "pull-start",
              "pulse",
              "rotate-180",
              "rotate-270",
              "rotate-90",
              "rotate-by",
              "shake",
              "spin-pulse",
              "spin-reverse",
              "spin",
              "stack-1x",
              "stack-2x",
              "stack",
              "ul",
              "width-auto",
              "width-fixed",
              "duotone-group",
              "swap-opacity",
              "primary",
              "secondary",
            ],
          )
          .concat(
            Q.map(function (t) {
              return "".concat(t, "x");
            }),
          )
          .concat(
            tt.map(function (t) {
              return "w-".concat(t);
            }),
          ),
        tn = "___FONT_AWESOME___",
        ta = "svg-inline--fa",
        tr = "data-fa-i2svg",
        ti = "data-fa-pseudo-element",
        td = "data-prefix",
        to = "data-icon",
        tl = "fontawesome-i2svg",
        ts = ["HTML", "HEAD", "STYLE", "SCRIPT"],
        tu = ["::before", "::after", ":before", ":after"],
        tf = (function () {
          try {
            return !0;
          } catch (t) {
            return !1;
          }
        })();
      function tc(t) {
        return new Proxy(t, {
          get: function (t, e) {
            return e in t ? t[e] : t[j];
          },
        });
      }
      var t$ = c({}, F);
      t$[j] = c(
        c(c(c({}, { "fa-duotone": "duotone" }), F[j]), {
          fak: "kit",
          "fa-kit": "kit",
        }),
        { fakd: "kit-duotone", "fa-kit-duotone": "kit-duotone" },
      );
      var tm = tc(t$),
        th = c(
          {},
          {
            chisel: { regular: "facr" },
            classic: {
              brands: "fab",
              light: "fal",
              regular: "far",
              solid: "fas",
              thin: "fat",
            },
            duotone: {
              light: "fadl",
              regular: "fadr",
              solid: "fad",
              thin: "fadt",
            },
            etch: { solid: "faes" },
            jelly: { regular: "fajr" },
            "jelly-duo": { regular: "fajdr" },
            "jelly-fill": { regular: "fajfr" },
            notdog: { solid: "fans" },
            "notdog-duo": { solid: "fands" },
            sharp: {
              light: "fasl",
              regular: "fasr",
              solid: "fass",
              thin: "fast",
            },
            "sharp-duotone": {
              light: "fasdl",
              regular: "fasdr",
              solid: "fasds",
              thin: "fasdt",
            },
            slab: { regular: "faslr" },
            "slab-press": { regular: "faslpr" },
            thumbprint: { light: "fatl" },
            whiteboard: { semibold: "fawsb" },
          },
        );
      th[j] = c(c(c(c({}, { duotone: "fad" }), th[j]), { kit: "fak" }), {
        "kit-duotone": "fakd",
      });
      var tg = tc(th),
        tp = c({}, X);
      tp[j] = c(c({}, tp[j]), { fak: "fa-kit" });
      var ty = tc(tp),
        tv = c(
          {},
          {
            classic: {
              "fa-brands": "fab",
              "fa-duotone": "fad",
              "fa-light": "fal",
              "fa-regular": "far",
              "fa-solid": "fas",
              "fa-thin": "fat",
            },
            duotone: {
              "fa-regular": "fadr",
              "fa-light": "fadl",
              "fa-thin": "fadt",
            },
            sharp: {
              "fa-solid": "fass",
              "fa-regular": "fasr",
              "fa-light": "fasl",
              "fa-thin": "fast",
            },
            "sharp-duotone": {
              "fa-solid": "fasds",
              "fa-regular": "fasdr",
              "fa-light": "fasdl",
              "fa-thin": "fasdt",
            },
            slab: { "fa-regular": "faslr" },
            "slab-press": { "fa-regular": "faslpr" },
            whiteboard: { "fa-semibold": "fawsb" },
            thumbprint: { "fa-light": "fatl" },
            notdog: { "fa-solid": "fans" },
            "notdog-duo": { "fa-solid": "fands" },
            etch: { "fa-solid": "faes" },
            jelly: { "fa-regular": "fajr" },
            "jelly-fill": { "fa-regular": "fajfr" },
            "jelly-duo": { "fa-regular": "fajdr" },
            chisel: { "fa-regular": "facr" },
          },
        );
      ((tv[j] = c(c({}, tv[j]), { "fa-kit": "fak" })), tc(tv));
      var tb =
          /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
        tx = "fa-layers-text",
        tC =
          /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i;
      tc(
        c(
          {},
          {
            classic: {
              900: "fas",
              400: "far",
              normal: "far",
              300: "fal",
              100: "fat",
            },
            duotone: { 900: "fad", 400: "fadr", 300: "fadl", 100: "fadt" },
            sharp: { 900: "fass", 400: "fasr", 300: "fasl", 100: "fast" },
            "sharp-duotone": {
              900: "fasds",
              400: "fasdr",
              300: "fasdl",
              100: "fasdt",
            },
            slab: { 400: "faslr" },
            "slab-press": { 400: "faslpr" },
            whiteboard: { 600: "fawsb" },
            thumbprint: { 300: "fatl" },
            notdog: { 900: "fans" },
            "notdog-duo": { 900: "fands" },
            etch: { 900: "faes" },
            chisel: { 400: "facr" },
            jelly: { 400: "fajr" },
            "jelly-fill": { 400: "fajfr" },
            "jelly-duo": { 400: "fajdr" },
          },
        ),
      );
      var tN = [
          "class",
          "data-prefix",
          "data-icon",
          "data-fa-transform",
          "data-fa-mask",
        ],
        tP = [].concat(m(["kit"]), m(te)),
        tS = S.FontAwesomeConfig || {};
      w &&
        "function" == typeof w.querySelector &&
        [
          ["data-family-prefix", "familyPrefix"],
          ["data-css-prefix", "cssPrefix"],
          ["data-family-default", "familyDefault"],
          ["data-style-default", "styleDefault"],
          ["data-replacement-class", "replacementClass"],
          ["data-auto-replace-svg", "autoReplaceSvg"],
          ["data-auto-add-css", "autoAddCss"],
          ["data-search-pseudo-elements", "searchPseudoElements"],
          [
            "data-search-pseudo-elements-warnings",
            "searchPseudoElementsWarnings",
          ],
          [
            "data-search-pseudo-elements-full-scan",
            "searchPseudoElementsFullScan",
          ],
          ["data-observe-mutations", "observeMutations"],
          ["data-mutate-approach", "mutateApproach"],
          ["data-keep-original-source", "keepOriginalSource"],
          ["data-measure-performance", "measurePerformance"],
          ["data-show-missing-icons", "showMissingIcons"],
        ].forEach(function (t) {
          var e,
            n = $(t, 2),
            a = n[0],
            r = n[1],
            i =
              "" ===
                (e = (function (t) {
                  var e = w.querySelector("script[" + t + "]");
                  if (e) return e.getAttribute(t);
                })(a)) ||
              ("false" !== e && ("true" === e || e));
          null != i && (tS[r] = i);
        });
      var tw = {
        styleDefault: "solid",
        familyDefault: j,
        cssPrefix: "fa",
        replacementClass: ta,
        autoReplaceSvg: !0,
        autoAddCss: !0,
        searchPseudoElements: !1,
        searchPseudoElementsWarnings: !0,
        searchPseudoElementsFullScan: !1,
        observeMutations: !0,
        mutateApproach: "async",
        keepOriginalSource: !0,
        measurePerformance: !1,
        showMissingIcons: !0,
      };
      tS.familyPrefix && (tS.cssPrefix = tS.familyPrefix);
      var tk = c(c({}, tw), tS);
      tk.autoReplaceSvg || (tk.observeMutations = !1);
      var tA = {};
      (Object.keys(tw).forEach(function (t) {
        Object.defineProperty(tA, t, {
          enumerable: !0,
          set: function (e) {
            ((tk[t] = e),
              tI.forEach(function (t) {
                return t(tA);
              }));
          },
          get: function () {
            return tk[t];
          },
        });
      }),
        Object.defineProperty(tA, "familyPrefix", {
          enumerable: !0,
          set: function (t) {
            ((tk.cssPrefix = t),
              tI.forEach(function (t) {
                return t(tA);
              }));
          },
          get: function () {
            return tk.cssPrefix;
          },
        }),
        (S.FontAwesomeConfig = tA));
      var tI = [],
        tE = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
      function tF() {
        for (var t = 12, e = ""; t-- > 0; )
          e += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[
            (62 * Math.random()) | 0
          ];
        return e;
      }
      function tO(t) {
        for (var e = [], n = (t || []).length >>> 0; n--; ) e[n] = t[n];
        return e;
      }
      function tj(t) {
        return t.classList
          ? tO(t.classList)
          : (t.getAttribute("class") || "").split(" ").filter(function (t) {
              return t;
            });
      }
      function tM(t) {
        return ""
          .concat(t)
          .replace(/&/g, "&amp;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      function tT(t) {
        return Object.keys(t || {}).reduce(function (e, n) {
          return e + "".concat(n, ": ").concat(t[n].trim(), ";");
        }, "");
      }
      function tD(t) {
        return (
          t.size !== tE.size ||
          t.x !== tE.x ||
          t.y !== tE.y ||
          t.rotate !== tE.rotate ||
          t.flipX ||
          t.flipY
        );
      }
      function tL() {
        var t = tA.cssPrefix,
          e = tA.replacementClass,
          n =
            ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";\n  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";\n  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";\n  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";\n  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";\n  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";\n  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";\n  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";\n  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";\n  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";\n  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";\n  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";\n}\n\n.svg-inline--fa {\n  box-sizing: content-box;\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285714em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left,\n.svg-inline--fa .fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-pull-right,\n.svg-inline--fa .fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: var(--fa-width, 1.25em);\n}\n.fa-layers .svg-inline--fa {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-xs {\n  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-sm {\n  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-lg {\n  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-xl {\n  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-2xl {\n  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that\'s relative to the scale\'s 16px base */\n  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it\'s parent */\n  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text\'s descender */\n}\n\n.fa-width-auto {\n  --fa-width: auto;\n}\n\n.fa-fw,\n.fa-width-fixed {\n  --fa-width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-inline-start: var(--fa-li-margin, 2.5em);\n  padding-inline-start: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n/* Heads Up: Bordered Icons will not be supported in the future!\n  - This feature will be deprecated in the next major release of Font Awesome (v8)!\n  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.\n*/\n/* Notes:\n* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)\n* --@{v.$css-prefix}-border-padding =\n  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it\'s vertical alignment)\n  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)\n*/\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.0625em);\n  box-sizing: var(--fa-border-box-sizing, content-box);\n  padding: var(--fa-border-padding, 0.1875em 0.25em);\n}\n\n.fa-pull-left,\n.fa-pull-start {\n  float: inline-start;\n  margin-inline-end: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right,\n.fa-pull-end {\n  float: inline-end;\n  margin-inline-start: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n  .fa-bounce,\n  .fa-fade,\n  .fa-beat-fade,\n  .fa-flip,\n  .fa-pulse,\n  .fa-shake,\n  .fa-spin,\n  .fa-spin-pulse {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.svg-inline--fa.fa-inverse {\n  fill: var(--fa-inverse, #fff);\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  line-height: 2em;\n  position: relative;\n  vertical-align: middle;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  --fa-width: 1.25em;\n  height: 1em;\n  width: var(--fa-width);\n}\n.svg-inline--fa.fa-stack-2x {\n  --fa-width: 2.5em;\n  height: 2em;\n  width: var(--fa-width);\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  inset: 0;\n  margin: auto;\n  position: absolute;\n  z-index: var(--fa-stack-z-index, auto);\n}';
        if ("fa" !== t || e !== ta) {
          var a = RegExp("\\.".concat("fa", "\\-"), "g"),
            r = RegExp("\\--".concat("fa", "\\-"), "g"),
            i = RegExp("\\.".concat(ta), "g");
          n = n
            .replace(a, ".".concat(t, "-"))
            .replace(r, "--".concat(t, "-"))
            .replace(i, ".".concat(e));
        }
        return n;
      }
      var tR = !1;
      function tz() {
        tA.autoAddCss &&
          !tR &&
          (!(function (t) {
            if (t && I) {
              var e = w.createElement("style");
              (e.setAttribute("type", "text/css"), (e.innerHTML = t));
              for (
                var n = w.head.childNodes, a = null, r = n.length - 1;
                r > -1;
                r--
              ) {
                var i = n[r];
                ["STYLE", "LINK"].indexOf((i.tagName || "").toUpperCase()) >
                  -1 && (a = i);
              }
              w.head.insertBefore(e, a);
            }
          })(tL()),
          (tR = !0));
      }
      var t_ = S || {};
      (t_[tn] || (t_[tn] = {}),
        t_[tn].styles || (t_[tn].styles = {}),
        t_[tn].hooks || (t_[tn].hooks = {}),
        t_[tn].shims || (t_[tn].shims = []));
      var tB = t_[tn],
        tW = [],
        tG = function () {
          (w.removeEventListener("DOMContentLoaded", tG),
            (tU = 1),
            tW.map(function (t) {
              return t();
            }));
        },
        tU = !1;
      function tK(t) {
        var e,
          n = t.tag,
          a = t.attributes,
          r = t.children;
        return "string" == typeof t
          ? tM(t)
          : "<"
              .concat(n, " ")
              .concat(
                Object.keys((e = void 0 === a ? {} : a) || {})
                  .reduce(function (t, n) {
                    return t + "".concat(n, '="').concat(tM(e[n]), '" ');
                  }, "")
                  .trim(),
                ">",
              )
              .concat((void 0 === r ? [] : r).map(tK).join(""), "</")
              .concat(n, ">");
      }
      function tH(t, e, n) {
        if (t && t[e] && t[e][n])
          return { prefix: e, iconName: n, icon: t[e][n] };
      }
      I &&
        ((tU = (
          w.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/
        ).test(w.readyState)) ||
          w.addEventListener("DOMContentLoaded", tG));
      var tV = function (t, e, n, a) {
        var r,
          i,
          d,
          o = Object.keys(t),
          l = o.length,
          s =
            void 0 !== a
              ? function (t, n, r, i) {
                  return e.call(a, t, n, r, i);
                }
              : e;
        for (
          void 0 === n ? ((r = 1), (d = t[o[0]])) : ((r = 0), (d = n));
          r < l;
          r++
        )
          d = s(d, t[(i = o[r])], i, t);
        return d;
      };
      function tY(t) {
        return 1 !== m(t).length ? null : t.codePointAt(0).toString(16);
      }
      function tJ(t) {
        return Object.keys(t).reduce(function (e, n) {
          var a = t[n];
          return (a.icon ? (e[a.iconName] = a.icon) : (e[n] = a), e);
        }, {});
      }
      function tZ(t, e) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          a = n.skipHooks,
          r = tJ(e);
        ("function" != typeof tB.hooks.addPack || (void 0 !== a && a)
          ? (tB.styles[t] = c(c({}, tB.styles[t] || {}), r))
          : tB.hooks.addPack(t, tJ(e)),
          "fas" === t && tZ("fa", e));
      }
      var tX = tB.styles,
        tq = tB.shims,
        tQ = Object.keys(ty),
        t0 = tQ.reduce(function (t, e) {
          return ((t[e] = Object.keys(ty[e])), t);
        }, {}),
        t1 = null,
        t2 = {},
        t3 = {},
        t4 = {},
        t9 = {},
        t8 = {},
        t5 = function () {
          var t = function (t) {
            return tV(
              tX,
              function (e, n, a) {
                return ((e[a] = tV(n, t, {})), e);
              },
              {},
            );
          };
          ((t2 = t(function (t, e, n) {
            return (
              e[3] && (t[e[3]] = n),
              e[2] &&
                e[2]
                  .filter(function (t) {
                    return "number" == typeof t;
                  })
                  .forEach(function (e) {
                    t[e.toString(16)] = n;
                  }),
              t
            );
          })),
            (t3 = t(function (t, e, n) {
              return (
                (t[n] = n),
                e[2] &&
                  e[2]
                    .filter(function (t) {
                      return "string" == typeof t;
                    })
                    .forEach(function (e) {
                      t[e] = n;
                    }),
                t
              );
            })),
            (t8 = t(function (t, e, n) {
              var a = e[2];
              return (
                (t[n] = n),
                a.forEach(function (e) {
                  t[e] = n;
                }),
                t
              );
            })));
          var e = "far" in tX || tA.autoFetchSvg,
            n = tV(
              tq,
              function (t, n) {
                var a = n[0],
                  r = n[1],
                  i = n[2];
                return (
                  "far" !== r || e || (r = "fas"),
                  "string" == typeof a &&
                    (t.names[a] = { prefix: r, iconName: i }),
                  "number" == typeof a &&
                    (t.unicodes[a.toString(16)] = { prefix: r, iconName: i }),
                  t
                );
              },
              { names: {}, unicodes: {} },
            );
          ((t4 = n.names),
            (t9 = n.unicodes),
            (t1 = en(tA.styleDefault, { family: tA.familyDefault })));
        };
      function t6(t, e) {
        return (t2[t] || {})[e];
      }
      function t7(t, e) {
        return (t8[t] || {})[e];
      }
      function et(t) {
        return t4[t] || { prefix: null, iconName: null };
      }
      (tI.push(function (t) {
        t1 = en(t.styleDefault, { family: tA.familyDefault });
      }),
        t5());
      var ee = function () {
        return { prefix: null, iconName: null, rest: [] };
      };
      function en(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = e.family,
          a = void 0 === n ? j : n,
          r = tm[a][t];
        if (a === M && !t) return "fad";
        var i = tg[a][t] || tg[a][r],
          d = t in tB.styles ? t : null;
        return i || d || null;
      }
      function ea(t) {
        return t.sort().filter(function (t, e, n) {
          return n.indexOf(t) === e;
        });
      }
      var er = q.concat(Z);
      function ei(t) {
        var e,
          n,
          a,
          r,
          i,
          d,
          o,
          l,
          s,
          u,
          f,
          m,
          h,
          g,
          p,
          y,
          v =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          b = v.skipLookups,
          x = null,
          C = ea(
            t.filter(function (t) {
              return er.includes(t);
            }),
          ),
          N = ea(
            t.filter(function (t) {
              return !er.includes(t);
            }),
          ),
          P = $(
            C.filter(function (t) {
              return ((x = t), !O.includes(t));
            }),
            1,
          )[0],
          S =
            ((h = j),
            (g = tQ.reduce(function (t, e) {
              return ((t[e] = "".concat(tA.cssPrefix, "-").concat(e)), t);
            }, {})),
            Y.forEach(function (t) {
              (C.includes(g[t]) ||
                C.some(function (e) {
                  return t0[t].includes(e);
                })) &&
                (h = t);
            }),
            h),
          w = c(
            c(
              {},
              ((p = []),
              (y = null),
              N.forEach(function (t) {
                var e,
                  n,
                  a,
                  r,
                  i =
                    ((e = tA.cssPrefix),
                    (a = (n = t.split("-"))[0]),
                    (r = n.slice(1).join("-")),
                    a !== e || "" === r || ~tP.indexOf(r) ? null : r);
                i ? (y = i) : t && p.push(t);
              }),
              { iconName: y, rest: p }),
            ),
            {},
            { prefix: en(void 0 === P ? null : P, { family: S }) },
          );
        return c(
          c(
            c({}, w),
            ((n = (e = {
              values: t,
              family: S,
              styles: tX,
              config: tA,
              canonical: w,
              givenPrefix: x,
            }).values),
            (a = e.family),
            (r = e.canonical),
            (i = e.givenPrefix),
            (d = e.styles),
            (l = void 0 === (o = e.config) ? {} : o),
            (s = a === M),
            (u = n.includes("fa-duotone") || n.includes("fad")),
            (f = "duotone" === l.familyDefault),
            (m = "fad" === r.prefix || "fa-duotone" === r.prefix),
            !s && (u || f || m) && (r.prefix = "fad"),
            (n.includes("fa-brands") || n.includes("fab")) &&
              (r.prefix = "fab"),
            !r.prefix &&
              ed.includes(a) &&
              (Object.keys(void 0 === d ? {} : d).find(function (t) {
                return eo.includes(t);
              }) ||
                l.autoFetchSvg) &&
              ((r.prefix = J.get(a).defaultShortPrefixId),
              (r.iconName = t7(r.prefix, r.iconName) || r.iconName)),
            ("fa" === r.prefix || "fa" === (void 0 === i ? "" : i)) &&
              (r.prefix = t1 || "fas"),
            r),
          ),
          (function (t, e, n) {
            var a = n.prefix,
              r = n.iconName;
            if (t || !a || !r) return { prefix: a, iconName: r };
            var i = "fa" === e ? et(r) : {},
              d = t7(a, r);
            return (
              (r = i.iconName || d || r),
              "far" !== (a = i.prefix || a) ||
                tX.far ||
                !tX.fas ||
                tA.autoFetchSvg ||
                (a = "fas"),
              { prefix: a, iconName: r }
            );
          })(void 0 !== b && b, x, w),
        );
      }
      var ed = Y.filter(function (t) {
          return t !== j || t !== M;
        }),
        eo = Object.keys(X)
          .filter(function (t) {
            return t !== j;
          })
          .map(function (t) {
            return Object.keys(X[t]);
          })
          .flat(),
        el =
          ((a = function t() {
            if (!(this instanceof t))
              throw TypeError("Cannot call a class as a function");
            this.definitions = {};
          }),
          (r = [
            {
              key: "add",
              value: function () {
                for (
                  var t = this, e = arguments.length, n = Array(e), a = 0;
                  a < e;
                  a++
                )
                  n[a] = arguments[a];
                var r = n.reduce(this._pullDefinitions, {});
                Object.keys(r).forEach(function (e) {
                  ((t.definitions[e] = c(c({}, t.definitions[e] || {}), r[e])),
                    tZ(e, r[e]));
                  var n = ty[j][e];
                  (n && tZ(n, r[e]), t5());
                });
              },
            },
            {
              key: "reset",
              value: function () {
                this.definitions = {};
              },
            },
            {
              key: "_pullDefinitions",
              value: function (t, e) {
                var n = e.prefix && e.iconName && e.icon ? { 0: e } : e;
                return (
                  Object.keys(n).map(function (e) {
                    var a = n[e],
                      r = a.prefix,
                      i = a.iconName,
                      d = a.icon,
                      o = d[2];
                    (t[r] || (t[r] = {}),
                      o.length > 0 &&
                        o.forEach(function (e) {
                          "string" == typeof e && (t[r][e] = d);
                        }),
                      (t[r][i] = d));
                  }),
                  t
                );
              },
            },
          ]),
          (function (t, e) {
            for (var n = 0; n < e.length; n++) {
              var a = e[n];
              ((a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(t, h(a.key), a));
            }
          })(a.prototype, r),
          Object.defineProperty(a, "prototype", { writable: !1 }),
          a),
        es = [],
        eu = {},
        ef = {},
        ec = Object.keys(ef);
      function e$(t, e) {
        for (
          var n = arguments.length, a = Array(n > 2 ? n - 2 : 0), r = 2;
          r < n;
          r++
        )
          a[r - 2] = arguments[r];
        return (
          (eu[t] || []).forEach(function (t) {
            e = t.apply(null, [e].concat(a));
          }),
          e
        );
      }
      function em(t) {
        for (
          var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), a = 1;
          a < e;
          a++
        )
          n[a - 1] = arguments[a];
        (eu[t] || []).forEach(function (t) {
          t.apply(null, n);
        });
      }
      function eh() {
        var t = arguments[0],
          e = Array.prototype.slice.call(arguments, 1);
        return ef[t] ? ef[t].apply(null, e) : void 0;
      }
      function eg(t) {
        "fa" === t.prefix && (t.prefix = "fas");
        var e = t.iconName,
          n = t.prefix || t1;
        if (e)
          return (
            (e = t7(n, e) || e),
            tH(ep.definitions, n, e) || tH(tB.styles, n, e)
          );
      }
      var ep = new el(),
        ey = {
          noAuto: function () {
            ((tA.autoReplaceSvg = !1),
              (tA.observeMutations = !1),
              em("noAuto"));
          },
          config: tA,
          dom: {
            i2svg: function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return I
                ? (em("beforeI2svg", t),
                  eh("pseudoElements2svg", t),
                  eh("i2svg", t))
                : Promise.reject(
                    Error("Operation requires a DOM of some kind."),
                  );
            },
            watch: function () {
              var t,
                e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = e.autoReplaceSvgRoot;
              (!1 === tA.autoReplaceSvg && (tA.autoReplaceSvg = !0),
                (tA.observeMutations = !0),
                (t = function () {
                  (ev({ autoReplaceSvgRoot: n }), em("watch", e));
                }),
                I && (tU ? setTimeout(t, 0) : tW.push(t)));
            },
          },
          parse: {
            icon: function (t) {
              if (null === t) return null;
              if ("object" === g(t) && t.prefix && t.iconName)
                return {
                  prefix: t.prefix,
                  iconName: t7(t.prefix, t.iconName) || t.iconName,
                };
              if (Array.isArray(t) && 2 === t.length) {
                var e = 0 === t[1].indexOf("fa-") ? t[1].slice(3) : t[1],
                  n = en(t[0]);
                return { prefix: n, iconName: t7(n, e) || e };
              }
              if (
                "string" == typeof t &&
                (t.indexOf("".concat(tA.cssPrefix, "-")) > -1 || t.match(tb))
              ) {
                var a = ei(t.split(" "), { skipLookups: !0 });
                return {
                  prefix: a.prefix || t1,
                  iconName: t7(a.prefix, a.iconName) || a.iconName,
                };
              }
              if ("string" == typeof t) {
                var r = t1;
                return { prefix: r, iconName: t7(r, t) || t };
              }
            },
          },
          library: ep,
          findIconDefinition: eg,
          toHtml: tK,
        },
        ev = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = t.autoReplaceSvgRoot,
            n = void 0 === e ? w : e;
          (Object.keys(tB.styles).length > 0 || tA.autoFetchSvg) &&
            I &&
            tA.autoReplaceSvg &&
            ey.dom.i2svg({ node: n });
        };
      function eb(t, e) {
        return (
          Object.defineProperty(t, "abstract", { get: e }),
          Object.defineProperty(t, "html", {
            get: function () {
              return t.abstract.map(function (t) {
                return tK(t);
              });
            },
          }),
          Object.defineProperty(t, "node", {
            get: function () {
              if (I) {
                var e = w.createElement("div");
                return ((e.innerHTML = t.html), e.children);
              }
            },
          }),
          t
        );
      }
      function ex(t) {
        var e,
          n,
          a,
          r,
          i,
          d,
          o,
          l = t.icons,
          s = l.main,
          u = l.mask,
          f = t.prefix,
          $ = t.iconName,
          m = t.transform,
          h = t.symbol,
          g = t.maskId,
          p = t.extra,
          y = t.watchable,
          v = u.found ? u : s,
          b = v.width,
          x = v.height,
          C = [
            tA.replacementClass,
            $ ? "".concat(tA.cssPrefix, "-").concat($) : "",
          ]
            .filter(function (t) {
              return -1 === p.classes.indexOf(t);
            })
            .filter(function (t) {
              return "" !== t || !!t;
            })
            .concat(p.classes)
            .join(" "),
          N = {
            children: [],
            attributes: c(
              c({}, p.attributes),
              {},
              {
                "data-prefix": f,
                "data-icon": $,
                class: C,
                role: p.attributes.role || "img",
                viewBox: "0 0 ".concat(b, " ").concat(x),
              },
            ),
          };
        ((e = p.attributes),
          ["aria-label", "aria-labelledby", "title", "role"].some(function (t) {
            return t in e;
          }) ||
            p.attributes["aria-hidden"] ||
            (N.attributes["aria-hidden"] = "true"),
          void 0 !== y && y && (N.attributes[tr] = ""));
        var P = c(
            c({}, N),
            {},
            {
              prefix: f,
              iconName: $,
              main: s,
              mask: u,
              maskId: g,
              transform: m,
              symbol: h,
              styles: c({}, p.styles),
            },
          ),
          S =
            u.found && s.found
              ? eh("generateAbstractMask", P) || {
                  children: [],
                  attributes: {},
                }
              : eh("generateAbstractIcon", P) || {
                  children: [],
                  attributes: {},
                },
          w = S.children,
          k = S.attributes;
        return ((P.children = w), (P.attributes = k), h)
          ? ((n = P.prefix),
            (a = P.iconName),
            (r = P.children),
            (i = P.attributes),
            (o =
              !0 === (d = P.symbol)
                ? "".concat(n, "-").concat(tA.cssPrefix, "-").concat(a)
                : d),
            [
              {
                tag: "svg",
                attributes: { style: "display: none;" },
                children: [
                  {
                    tag: "symbol",
                    attributes: c(c({}, i), {}, { id: o }),
                    children: r,
                  },
                ],
              },
            ])
          : (function (t) {
              var e = t.children,
                n = t.main,
                a = t.mask,
                r = t.attributes,
                i = t.styles,
                d = t.transform;
              if (tD(d) && n.found && !a.found) {
                var o = { x: n.width / n.height / 2, y: 0.5 };
                r.style = tT(
                  c(
                    c({}, i),
                    {},
                    {
                      "transform-origin": ""
                        .concat(o.x + d.x / 16, "em ")
                        .concat(o.y + d.y / 16, "em"),
                    },
                  ),
                );
              }
              return [{ tag: "svg", attributes: r, children: e }];
            })(P);
      }
      function eC(t) {
        var e,
          n,
          a,
          r,
          i,
          d,
          o,
          l = t.content,
          s = t.width,
          u = t.height,
          f = t.transform,
          $ = t.extra,
          m = t.watchable,
          h = c(c({}, $.attributes), {}, { class: $.classes.join(" ") });
        void 0 !== m && m && (h[tr] = "");
        var g = c({}, $.styles);
        tD(f) &&
          ((n = (e = { transform: f, startCentered: !0, width: s, height: u })
            .transform),
          (a = e.width),
          (r = e.height),
          (d = void 0 !== (i = e.startCentered) && i),
          (o = ""),
          d && E
            ? (o += "translate("
                .concat(n.x / 16 - (void 0 === a ? 16 : a) / 2, "em, ")
                .concat(n.y / 16 - (void 0 === r ? 16 : r) / 2, "em) "))
            : d
              ? (o += "translate(calc(-50% + "
                  .concat(n.x / 16, "em), calc(-50% + ")
                  .concat(n.y / 16, "em)) "))
              : (o += "translate("
                  .concat(n.x / 16, "em, ")
                  .concat(n.y / 16, "em) ")),
          (o += "scale("
            .concat((n.size / 16) * (n.flipX ? -1 : 1), ", ")
            .concat((n.size / 16) * (n.flipY ? -1 : 1), ") ")),
          (g.transform = o += "rotate(".concat(n.rotate, "deg) ")),
          (g["-webkit-transform"] = g.transform));
        var p = tT(g);
        p.length > 0 && (h.style = p);
        var y = [];
        return (y.push({ tag: "span", attributes: h, children: [l] }), y);
      }
      var eN = tB.styles;
      function eP(t) {
        var e = t[0],
          n = t[1],
          a = $(t.slice(4), 1)[0];
        return {
          found: !0,
          width: e,
          height: n,
          icon: Array.isArray(a)
            ? {
                tag: "g",
                attributes: {
                  class: "".concat(tA.cssPrefix, "-").concat("duotone-group"),
                },
                children: [
                  {
                    tag: "path",
                    attributes: {
                      class: "".concat(tA.cssPrefix, "-").concat("secondary"),
                      fill: "currentColor",
                      d: a[0],
                    },
                  },
                  {
                    tag: "path",
                    attributes: {
                      class: "".concat(tA.cssPrefix, "-").concat("primary"),
                      fill: "currentColor",
                      d: a[1],
                    },
                  },
                ],
              }
            : { tag: "path", attributes: { fill: "currentColor", d: a } },
        };
      }
      var eS = { found: !1, width: 512, height: 512 };
      function ew(t, e) {
        var n = e;
        return (
          "fa" === e && null !== tA.styleDefault && (e = t1),
          new Promise(function (a, r) {
            if ("fa" === n) {
              var i,
                d,
                o = et(t) || {};
              ((t = o.iconName || t), (e = o.prefix || e));
            }
            if (t && e && eN[e] && eN[e][t]) return a(eP(eN[e][t]));
            ((i = t),
              (d = e),
              tf ||
                tA.showMissingIcons ||
                !i ||
                console.error(
                  'Icon with name "'
                    .concat(i, '" and prefix "')
                    .concat(d, '" is missing.'),
                ),
              a(
                c(
                  c({}, eS),
                  {},
                  {
                    icon:
                      (tA.showMissingIcons && t && eh("missingIconAbstract")) ||
                      {},
                  },
                ),
              ));
          })
        );
      }
      var ek = function () {},
        eA =
          tA.measurePerformance && A && A.mark && A.measure
            ? A
            : { mark: ek, measure: ek },
        eI = 'FA "7.0.1"',
        eE = function (t) {
          (eA.mark("".concat(eI, " ").concat(t, " ends")),
            eA.measure(
              "".concat(eI, " ").concat(t),
              "".concat(eI, " ").concat(t, " begins"),
              "".concat(eI, " ").concat(t, " ends"),
            ));
        },
        eF = function (t) {
          return (
            eA.mark("".concat(eI, " ").concat(t, " begins")),
            function () {
              return eE(t);
            }
          );
        },
        eO = function () {};
      function ej(t) {
        return "string" == typeof (t.getAttribute ? t.getAttribute(tr) : null);
      }
      function eM(t) {
        return w.createElementNS("http://www.w3.org/2000/svg", t);
      }
      function eT(t) {
        return w.createElement(t);
      }
      var eD = {
        replace: function (t) {
          var e = t[0];
          if (e.parentNode)
            if (
              (t[1].forEach(function (t) {
                e.parentNode.insertBefore(
                  (function t(e) {
                    var n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      a = n.ceFn,
                      r = void 0 === a ? ("svg" === e.tag ? eM : eT) : a;
                    if ("string" == typeof e) return w.createTextNode(e);
                    var i = r(e.tag);
                    return (
                      Object.keys(e.attributes || []).forEach(function (t) {
                        i.setAttribute(t, e.attributes[t]);
                      }),
                      (e.children || []).forEach(function (e) {
                        i.appendChild(t(e, { ceFn: r }));
                      }),
                      i
                    );
                  })(t),
                  e,
                );
              }),
              null === e.getAttribute(tr) && tA.keepOriginalSource)
            ) {
              var n,
                a = w.createComment(
                  ((n = " ".concat(e.outerHTML, " ")),
                  (n = "".concat(n, "Font Awesome fontawesome.com "))),
                );
              e.parentNode.replaceChild(a, e);
            } else e.remove();
        },
        nest: function (t) {
          var e = t[0],
            n = t[1];
          if (~tj(e).indexOf(tA.replacementClass)) return eD.replace(t);
          var a = new RegExp("".concat(tA.cssPrefix, "-.*"));
          if ((delete n[0].attributes.id, n[0].attributes.class)) {
            var r = n[0].attributes.class.split(" ").reduce(
              function (t, e) {
                return (
                  e === tA.replacementClass || e.match(a)
                    ? t.toSvg.push(e)
                    : t.toNode.push(e),
                  t
                );
              },
              { toNode: [], toSvg: [] },
            );
            ((n[0].attributes.class = r.toSvg.join(" ")),
              0 === r.toNode.length
                ? e.removeAttribute("class")
                : e.setAttribute("class", r.toNode.join(" ")));
          }
          var i = n
            .map(function (t) {
              return tK(t);
            })
            .join("\n");
          (e.setAttribute(tr, ""), (e.innerHTML = i));
        },
      };
      function eL(t) {
        t();
      }
      function eR(t, e) {
        var n = "function" == typeof e ? e : eO;
        if (0 === t.length) n();
        else {
          var a = eL;
          ("async" === tA.mutateApproach && (a = S.requestAnimationFrame || eL),
            a(function () {
              var e =
                  !0 === tA.autoReplaceSvg
                    ? eD.replace
                    : eD[tA.autoReplaceSvg] || eD.replace,
                a = eF("mutate");
              (t.map(e), a(), n());
            }));
        }
      }
      var ez = !1,
        e_ = null;
      function eB(t) {
        if (k && tA.observeMutations) {
          var e = t.treeCallback,
            n = void 0 === e ? eO : e,
            a = t.nodeCallback,
            r = void 0 === a ? eO : a,
            i = t.pseudoElementsCallback,
            d = void 0 === i ? eO : i,
            o = t.observeMutationsRoot,
            l = void 0 === o ? w : o;
          ((e_ = new k(function (t) {
            if (!ez) {
              var e = t1;
              tO(t).forEach(function (t) {
                if (
                  ("childList" === t.type &&
                    t.addedNodes.length > 0 &&
                    !ej(t.addedNodes[0]) &&
                    (tA.searchPseudoElements && d(t.target), n(t.target)),
                  "attributes" === t.type &&
                    t.target.parentNode &&
                    tA.searchPseudoElements &&
                    d([t.target], !0),
                  "attributes" === t.type &&
                    ej(t.target) &&
                    ~tN.indexOf(t.attributeName))
                )
                  if (
                    "class" === t.attributeName &&
                    ((i = (a = t.target).getAttribute
                      ? a.getAttribute(td)
                      : null),
                    (o = a.getAttribute ? a.getAttribute(to) : null),
                    i && o)
                  ) {
                    var a,
                      i,
                      o,
                      l,
                      s = ei(tj(t.target)),
                      u = s.prefix,
                      f = s.iconName;
                    (t.target.setAttribute(td, u || e),
                      f && t.target.setAttribute(to, f));
                  } else
                    (l = t.target) &&
                      l.classList &&
                      l.classList.contains &&
                      l.classList.contains(tA.replacementClass) &&
                      r(t.target);
              });
            }
          })),
            I &&
              e_.observe(l, {
                childList: !0,
                attributes: !0,
                characterData: !0,
                subtree: !0,
              }));
        }
      }
      function eW(t) {
        var e,
          n,
          a,
          r,
          i,
          d,
          o,
          l,
          s,
          u =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { styleParser: !0 },
          f =
            ((r = (e = t).getAttribute("data-prefix")),
            (i = e.getAttribute("data-icon")),
            (d = void 0 !== e.innerText ? e.innerText.trim() : ""),
            ((o = ei(tj(e))).prefix || (o.prefix = t1),
            r && i && ((o.prefix = r), (o.iconName = i)),
            o.iconName && o.prefix)
              ? o
              : (o.prefix &&
                  d.length > 0 &&
                  ((n = o.prefix),
                  (a = e.innerText),
                  (o.iconName =
                    (t3[n] || {})[a] || t6(o.prefix, tY(e.innerText)))),
                !o.iconName &&
                  tA.autoFetchSvg &&
                  e.firstChild &&
                  e.firstChild.nodeType === Node.TEXT_NODE &&
                  (o.iconName = e.firstChild.data),
                o)),
          $ = f.iconName,
          m = f.prefix,
          h = f.rest,
          g = tO(t.attributes).reduce(function (t, e) {
            return (
              "class" !== t.name && "style" !== t.name && (t[e.name] = e.value),
              t
            );
          }, {}),
          p = e$("parseNodeAttributes", {}, t);
        return c(
          {
            iconName: $,
            prefix: m,
            transform: tE,
            mask: { iconName: null, prefix: null, rest: [] },
            maskId: null,
            symbol: !1,
            extra: {
              classes: h,
              styles: u.styleParser
                ? ((l = t.getAttribute("style")),
                  (s = []),
                  l &&
                    (s = l.split(";").reduce(function (t, e) {
                      var n = e.split(":"),
                        a = n[0],
                        r = n.slice(1);
                      return (
                        a && r.length > 0 && (t[a] = r.join(":").trim()),
                        t
                      );
                    }, {})),
                  s)
                : [],
              attributes: g,
            },
          },
          p,
        );
      }
      var eG = tB.styles;
      function eU(t) {
        var e =
          "nest" === tA.autoReplaceSvg ? eW(t, { styleParser: !1 }) : eW(t);
        return ~e.extra.classes.indexOf(tx)
          ? eh("generateLayersText", t, e)
          : eh("generateSvgReplacementMutation", t, e);
      }
      function eK(t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!I) return Promise.resolve();
        var n = w.documentElement.classList,
          a = function (t) {
            return n.add("".concat(tl, "-").concat(t));
          },
          r = function (t) {
            return n.remove("".concat(tl, "-").concat(t));
          },
          i = tA.autoFetchSvg
            ? [].concat(m(Z), m(q))
            : O.concat(Object.keys(eG));
        i.includes("fa") || i.push("fa");
        var d = [".".concat(tx, ":not([").concat(tr, "])")]
          .concat(
            i.map(function (t) {
              return ".".concat(t, ":not([").concat(tr, "])");
            }),
          )
          .join(", ");
        if (0 === d.length) return Promise.resolve();
        var o = [];
        try {
          o = tO(t.querySelectorAll(d));
        } catch (t) {}
        if (!(o.length > 0)) return Promise.resolve();
        (a("pending"), r("complete"));
        var l = eF("onTree"),
          s = o.reduce(function (t, e) {
            try {
              var n = eU(e);
              n && t.push(n);
            } catch (t) {
              tf || "MissingIcon" !== t.name || console.error(t);
            }
            return t;
          }, []);
        return new Promise(function (t, n) {
          Promise.all(s)
            .then(function (n) {
              eR(n, function () {
                (a("active"),
                  a("complete"),
                  r("pending"),
                  "function" == typeof e && e(),
                  l(),
                  t());
              });
            })
            .catch(function (t) {
              (l(), n(t));
            });
        });
      }
      function eH(t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        eU(t).then(function (t) {
          t && eR([t], e);
        });
      }
      var eV = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = e.transform,
            a = void 0 === n ? tE : n,
            r = e.symbol,
            i = void 0 !== r && r,
            d = e.mask,
            o = void 0 === d ? null : d,
            l = e.maskId,
            s = void 0 === l ? null : l,
            u = e.classes,
            f = void 0 === u ? [] : u,
            $ = e.attributes,
            m = void 0 === $ ? {} : $,
            h = e.styles,
            g = void 0 === h ? {} : h;
          if (t) {
            var p = t.prefix,
              y = t.iconName,
              v = t.icon;
            return eb(c({ type: "icon" }, t), function () {
              return (
                em("beforeDOMElementCreation", {
                  iconDefinition: t,
                  params: e,
                }),
                ex({
                  icons: {
                    main: eP(v),
                    mask: o
                      ? eP(o.icon)
                      : { found: !1, width: null, height: null, icon: {} },
                  },
                  prefix: p,
                  iconName: y,
                  transform: c(c({}, tE), a),
                  symbol: i,
                  maskId: s,
                  extra: { attributes: m, styles: g, classes: f },
                })
              );
            });
          }
        },
        eY = RegExp('"', "ug"),
        eJ = c(
          c(
            c(c({}, { FontAwesome: { normal: "fas", 400: "fas" } }), {
              "Font Awesome 7 Free": { 900: "fas", 400: "far" },
              "Font Awesome 7 Pro": {
                900: "fas",
                400: "far",
                normal: "far",
                300: "fal",
                100: "fat",
              },
              "Font Awesome 7 Brands": { 400: "fab", normal: "fab" },
              "Font Awesome 7 Duotone": {
                900: "fad",
                400: "fadr",
                normal: "fadr",
                300: "fadl",
                100: "fadt",
              },
              "Font Awesome 7 Sharp": {
                900: "fass",
                400: "fasr",
                normal: "fasr",
                300: "fasl",
                100: "fast",
              },
              "Font Awesome 7 Sharp Duotone": {
                900: "fasds",
                400: "fasdr",
                normal: "fasdr",
                300: "fasdl",
                100: "fasdt",
              },
              "Font Awesome 7 Jelly": { 400: "fajr", normal: "fajr" },
              "Font Awesome 7 Jelly Fill": { 400: "fajfr", normal: "fajfr" },
              "Font Awesome 7 Jelly Duo": { 400: "fajdr", normal: "fajdr" },
              "Font Awesome 7 Slab": { 400: "faslr", normal: "faslr" },
              "Font Awesome 7 Slab Press": { 400: "faslpr", normal: "faslpr" },
              "Font Awesome 7 Thumbprint": { 300: "fatl", normal: "fatl" },
              "Font Awesome 7 Notdog": { 900: "fans", normal: "fans" },
              "Font Awesome 7 Notdog Duo": { 900: "fands", normal: "fands" },
              "Font Awesome 7 Etch": { 900: "faes", normal: "faes" },
              "Font Awesome 7 Chisel": { 400: "facr", normal: "facr" },
              "Font Awesome 7 Whiteboard": { 600: "fawsb", normal: "fawsb" },
            }),
            {
              "Font Awesome 5 Free": { 900: "fas", 400: "far" },
              "Font Awesome 5 Pro": {
                900: "fas",
                400: "far",
                normal: "far",
                300: "fal",
              },
              "Font Awesome 5 Brands": { 400: "fab", normal: "fab" },
              "Font Awesome 5 Duotone": { 900: "fad" },
            },
          ),
          {
            "Font Awesome Kit": { 400: "fak", normal: "fak" },
            "Font Awesome Kit Duotone": { 400: "fakd", normal: "fakd" },
          },
        ),
        eZ = Object.keys(eJ).reduce(function (t, e) {
          return ((t[e.toLowerCase()] = eJ[e]), t);
        }, {}),
        eX = Object.keys(eZ).reduce(function (t, e) {
          var n = eZ[e];
          return ((t[e] = n[900] || m(Object.entries(n))[0][1]), t);
        }, {});
      function eq(t, e) {
        var n = ""
          .concat("data-fa-pseudo-element-pending")
          .concat(e.replace(":", "-"));
        return new Promise(function (a, r) {
          if (null !== t.getAttribute(n)) return a();
          var i = tO(t.children).filter(function (t) {
              return t.getAttribute(ti) === e;
            })[0],
            d = S.getComputedStyle(t, e),
            o = d.getPropertyValue("font-family"),
            l = o.match(tC),
            s = d.getPropertyValue("font-weight"),
            u = d.getPropertyValue("content");
          if (i && !l) return (t.removeChild(i), a());
          if (l && "none" !== u && "" !== u) {
            var f = d.getPropertyValue("content"),
              $ =
                ((b = o.replace(/^['"]|['"]$/g, "").toLowerCase()),
                (C = isNaN((x = parseInt(s))) ? "normal" : x),
                (eZ[b] || {})[C] || eX[b]),
              h = tY(m(f.replace(eY, ""))[0] || ""),
              g = l[0].startsWith("FontAwesome"),
              p =
                ((N = d
                  .getPropertyValue("font-feature-settings")
                  .includes("ss01")),
                (A =
                  (k = (P = d
                    .getPropertyValue("content")
                    .replace(eY, "")).codePointAt(0)) >= 1105920 &&
                  k <= 1112319),
                (I = 2 === P.length && P[0] === P[1]),
                A || I || N),
              y = t6($, h),
              v = y;
            if (g) {
              var b,
                x,
                C,
                N,
                P,
                k,
                A,
                I,
                E,
                F,
                O =
                  ((E = t9[h]),
                  (F = t6("fas", h)),
                  E ||
                    (F ? { prefix: "fas", iconName: F } : null) || {
                      prefix: null,
                      iconName: null,
                    });
              O.iconName && O.prefix && ((y = O.iconName), ($ = O.prefix));
            }
            if (
              !y ||
              p ||
              (i && i.getAttribute(td) === $ && i.getAttribute(to) === v)
            )
              a();
            else {
              (t.setAttribute(n, v), i && t.removeChild(i));
              var j = {
                  iconName: null,
                  prefix: null,
                  transform: tE,
                  symbol: !1,
                  mask: { iconName: null, prefix: null, rest: [] },
                  maskId: null,
                  extra: { classes: [], styles: {}, attributes: {} },
                },
                M = j.extra;
              ((M.attributes[ti] = e),
                ew(y, $)
                  .then(function (r) {
                    var i = ex(
                        c(
                          c({}, j),
                          {},
                          {
                            icons: { main: r, mask: ee() },
                            prefix: $,
                            iconName: v,
                            extra: M,
                            watchable: !0,
                          },
                        ),
                      ),
                      d = w.createElementNS(
                        "http://www.w3.org/2000/svg",
                        "svg",
                      );
                    ("::before" === e
                      ? t.insertBefore(d, t.firstChild)
                      : t.appendChild(d),
                      (d.outerHTML = i
                        .map(function (t) {
                          return tK(t);
                        })
                        .join("\n")),
                      t.removeAttribute(n),
                      a());
                  })
                  .catch(r));
            }
          } else a();
        });
      }
      function eQ(t) {
        return Promise.all([eq(t, "::before"), eq(t, "::after")]);
      }
      function e0(t) {
        return (
          t.parentNode !== document.head &&
          !~ts.indexOf(t.tagName.toUpperCase()) &&
          !t.getAttribute(ti) &&
          (!t.parentNode || "svg" !== t.parentNode.tagName)
        );
      }
      var e1 = function (t) {
          return (
            !!t &&
            tu.some(function (e) {
              return t.includes(e);
            })
          );
        },
        e2 = function (t) {
          if (!t) return [];
          var e,
            n = new Set(),
            a = t.split(/,(?![^()]*\))/).map(function (t) {
              return t.trim();
            }),
            r = s(
              (a = a.flatMap(function (t) {
                return t.includes("(")
                  ? t
                  : t.split(",").map(function (t) {
                      return t.trim();
                    });
              })),
            );
          try {
            for (r.s(); !(e = r.n()).done; ) {
              var i = e.value;
              if (e1(i)) {
                var d = tu.reduce(function (t, e) {
                  return t.replace(e, "");
                }, i);
                "" !== d && "*" !== d && n.add(d);
              }
            }
          } catch (t) {
            r.e(t);
          } finally {
            r.f();
          }
          return n;
        };
      function e3(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (I) {
          if (e) n = t;
          else if (tA.searchPseudoElementsFullScan) n = t.querySelectorAll("*");
          else {
            var n,
              a,
              r = new Set(),
              i = s(document.styleSheets);
            try {
              for (i.s(); !(a = i.n()).done; ) {
                var d = a.value;
                try {
                  var o,
                    l = s(d.cssRules);
                  try {
                    for (l.s(); !(o = l.n()).done; ) {
                      var u,
                        f = o.value,
                        c = e2(f.selectorText),
                        $ = s(c);
                      try {
                        for ($.s(); !(u = $.n()).done; ) {
                          var m = u.value;
                          r.add(m);
                        }
                      } catch (t) {
                        $.e(t);
                      } finally {
                        $.f();
                      }
                    }
                  } catch (t) {
                    l.e(t);
                  } finally {
                    l.f();
                  }
                } catch (t) {
                  tA.searchPseudoElementsWarnings &&
                    console.warn(
                      "Font Awesome: cannot parse stylesheet: "
                        .concat(d.href, " (")
                        .concat(
                          t.message,
                          ')\nIf it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.',
                        ),
                    );
                }
              }
            } catch (t) {
              i.e(t);
            } finally {
              i.f();
            }
            if (!r.size) return;
            var h = Array.from(r).join(", ");
            try {
              n = t.querySelectorAll(h);
            } catch (t) {}
          }
          return new Promise(function (t, e) {
            var a = tO(n).filter(e0).map(eQ),
              r = eF("searchPseudoElements");
            ((ez = !0),
              Promise.all(a)
                .then(function () {
                  (r(), (ez = !1), t());
                })
                .catch(function () {
                  (r(), (ez = !1), e());
                }));
          });
        }
      }
      var e4 = !1,
        e9 = function (t) {
          return t
            .toLowerCase()
            .split(" ")
            .reduce(
              function (t, e) {
                var n = e.toLowerCase().split("-"),
                  a = n[0],
                  r = n.slice(1).join("-");
                if (a && "h" === r) return ((t.flipX = !0), t);
                if (a && "v" === r) return ((t.flipY = !0), t);
                if (isNaN((r = parseFloat(r)))) return t;
                switch (a) {
                  case "grow":
                    t.size = t.size + r;
                    break;
                  case "shrink":
                    t.size = t.size - r;
                    break;
                  case "left":
                    t.x = t.x - r;
                    break;
                  case "right":
                    t.x = t.x + r;
                    break;
                  case "up":
                    t.y = t.y - r;
                    break;
                  case "down":
                    t.y = t.y + r;
                    break;
                  case "rotate":
                    t.rotate = t.rotate + r;
                }
                return t;
              },
              { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 },
            );
        },
        e8 = { x: 0, y: 0, width: "100%", height: "100%" };
      function e5(t) {
        var e =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return (
          t.attributes &&
            (t.attributes.fill || e) &&
            (t.attributes.fill = "black"),
          t
        );
      }
      ((es = [
        {
          mixout: function () {
            return { dom: { css: tL, insertCss: tz } };
          },
          hooks: function () {
            return {
              beforeDOMElementCreation: function () {
                tz();
              },
              beforeI2svg: function () {
                tz();
              },
            };
          },
        },
        {
          mixout: function () {
            return {
              icon: function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = (t || {}).icon ? t : eg(t || {}),
                  a = e.mask;
                return (
                  a && (a = (a || {}).icon ? a : eg(a || {})),
                  eV(n, c(c({}, e), {}, { mask: a }))
                );
              },
            };
          },
          hooks: function () {
            return {
              mutationObserverCallbacks: function (t) {
                return ((t.treeCallback = eK), (t.nodeCallback = eH), t);
              },
            };
          },
          provides: function (t) {
            ((t.i2svg = function (t) {
              var e = t.node,
                n = void 0 === e ? w : e,
                a = t.callback;
              return eK(n, void 0 === a ? function () {} : a);
            }),
              (t.generateSvgReplacementMutation = function (t, e) {
                var n = e.iconName,
                  a = e.prefix,
                  r = e.transform,
                  i = e.symbol,
                  d = e.mask,
                  o = e.maskId,
                  l = e.extra;
                return new Promise(function (e, s) {
                  Promise.all([
                    ew(n, a),
                    d.iconName
                      ? ew(d.iconName, d.prefix)
                      : Promise.resolve({
                          found: !1,
                          width: 512,
                          height: 512,
                          icon: {},
                        }),
                  ])
                    .then(function (d) {
                      var s = $(d, 2);
                      e([
                        t,
                        ex({
                          icons: { main: s[0], mask: s[1] },
                          prefix: a,
                          iconName: n,
                          transform: r,
                          symbol: i,
                          maskId: o,
                          extra: l,
                          watchable: !0,
                        }),
                      ]);
                    })
                    .catch(s);
                });
              }),
              (t.generateAbstractIcon = function (t) {
                var e,
                  n = t.children,
                  a = t.attributes,
                  r = t.main,
                  i = t.transform,
                  d = tT(t.styles);
                return (
                  d.length > 0 && (a.style = d),
                  tD(i) &&
                    (e = eh("generateAbstractTransformGrouping", {
                      main: r,
                      transform: i,
                      containerWidth: r.width,
                      iconWidth: r.width,
                    })),
                  n.push(e || r.icon),
                  { children: n, attributes: a }
                );
              }));
          },
        },
        {
          mixout: function () {
            return {
              layer: function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = e.classes,
                  a = void 0 === n ? [] : n;
                return eb({ type: "layer" }, function () {
                  em("beforeDOMElementCreation", { assembler: t, params: e });
                  var n = [];
                  return (
                    t(function (t) {
                      Array.isArray(t)
                        ? t.map(function (t) {
                            n = n.concat(t.abstract);
                          })
                        : (n = n.concat(t.abstract));
                    }),
                    [
                      {
                        tag: "span",
                        attributes: {
                          class: ["".concat(tA.cssPrefix, "-layers")]
                            .concat(m(a))
                            .join(" "),
                        },
                        children: n,
                      },
                    ]
                  );
                });
              },
            };
          },
        },
        {
          mixout: function () {
            return {
              counter: function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = e.title,
                  a = void 0 === n ? null : n,
                  r = e.classes,
                  i = void 0 === r ? [] : r,
                  d = e.attributes,
                  o = void 0 === d ? {} : d,
                  l = e.styles,
                  s = void 0 === l ? {} : l;
                return eb({ type: "counter", content: t }, function () {
                  var n, r, d, l, u, f;
                  return (
                    em("beforeDOMElementCreation", { content: t, params: e }),
                    (r = (n = {
                      content: t.toString(),
                      title: a,
                      extra: {
                        attributes: o,
                        styles: s,
                        classes: [
                          "".concat(tA.cssPrefix, "-layers-counter"),
                        ].concat(m(i)),
                      },
                    }).content),
                    (l = c(
                      c({}, (d = n.extra).attributes),
                      {},
                      { class: d.classes.join(" ") },
                    )),
                    (u = tT(d.styles)).length > 0 && (l.style = u),
                    (f = []).push({
                      tag: "span",
                      attributes: l,
                      children: [r],
                    }),
                    f
                  );
                });
              },
            };
          },
        },
        {
          mixout: function () {
            return {
              text: function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = e.transform,
                  a = void 0 === n ? tE : n,
                  r = e.classes,
                  i = void 0 === r ? [] : r,
                  d = e.attributes,
                  o = void 0 === d ? {} : d,
                  l = e.styles,
                  s = void 0 === l ? {} : l;
                return eb({ type: "text", content: t }, function () {
                  return (
                    em("beforeDOMElementCreation", { content: t, params: e }),
                    eC({
                      content: t,
                      transform: c(c({}, tE), a),
                      extra: {
                        attributes: o,
                        styles: s,
                        classes: [
                          "".concat(tA.cssPrefix, "-layers-text"),
                        ].concat(m(i)),
                      },
                    })
                  );
                });
              },
            };
          },
          provides: function (t) {
            t.generateLayersText = function (t, e) {
              var n = e.transform,
                a = e.extra,
                r = null,
                i = null;
              if (E) {
                var d = parseInt(getComputedStyle(t).fontSize, 10),
                  o = t.getBoundingClientRect();
                ((r = o.width / d), (i = o.height / d));
              }
              return Promise.resolve([
                t,
                eC({
                  content: t.innerHTML,
                  width: r,
                  height: i,
                  transform: n,
                  extra: a,
                  watchable: !0,
                }),
              ]);
            };
          },
        },
        {
          hooks: function () {
            return {
              mutationObserverCallbacks: function (t) {
                return ((t.pseudoElementsCallback = e3), t);
              },
            };
          },
          provides: function (t) {
            t.pseudoElements2svg = function (t) {
              var e = t.node,
                n = void 0 === e ? w : e;
              tA.searchPseudoElements && e3(n);
            };
          },
        },
        {
          mixout: function () {
            return {
              dom: {
                unwatch: function () {
                  ((ez = !0), (e4 = !0));
                },
              },
            };
          },
          hooks: function () {
            return {
              bootstrap: function () {
                eB(e$("mutationObserverCallbacks", {}));
              },
              noAuto: function () {
                e_ && e_.disconnect();
              },
              watch: function (t) {
                var e = t.observeMutationsRoot;
                e4
                  ? (ez = !1)
                  : eB(
                      e$("mutationObserverCallbacks", {
                        observeMutationsRoot: e,
                      }),
                    );
              },
            };
          },
        },
        {
          mixout: function () {
            return {
              parse: {
                transform: function (t) {
                  return e9(t);
                },
              },
            };
          },
          hooks: function () {
            return {
              parseNodeAttributes: function (t, e) {
                var n = e.getAttribute("data-fa-transform");
                return (n && (t.transform = e9(n)), t);
              },
            };
          },
          provides: function (t) {
            t.generateAbstractTransformGrouping = function (t) {
              var e = t.main,
                n = t.transform,
                a = t.containerWidth,
                r = t.iconWidth,
                i = "translate(".concat(32 * n.x, ", ").concat(32 * n.y, ") "),
                d = "scale("
                  .concat((n.size / 16) * (n.flipX ? -1 : 1), ", ")
                  .concat((n.size / 16) * (n.flipY ? -1 : 1), ") "),
                o = "rotate(".concat(n.rotate, " 0 0)"),
                l = { transform: "".concat(i, " ").concat(d, " ").concat(o) },
                s = {
                  outer: { transform: "translate(".concat(a / 2, " 256)") },
                  inner: l,
                  path: {
                    transform: "translate(".concat(-((r / 2) * 1), " -256)"),
                  },
                };
              return {
                tag: "g",
                attributes: c({}, s.outer),
                children: [
                  {
                    tag: "g",
                    attributes: c({}, s.inner),
                    children: [
                      {
                        tag: e.icon.tag,
                        children: e.icon.children,
                        attributes: c(c({}, e.icon.attributes), s.path),
                      },
                    ],
                  },
                ],
              };
            };
          },
        },
        {
          hooks: function () {
            return {
              parseNodeAttributes: function (t, e) {
                var n = e.getAttribute("data-fa-mask"),
                  a = n
                    ? ei(
                        n.split(" ").map(function (t) {
                          return t.trim();
                        }),
                      )
                    : ee();
                return (
                  a.prefix || (a.prefix = t1),
                  (t.mask = a),
                  (t.maskId = e.getAttribute("data-fa-mask-id")),
                  t
                );
              },
            };
          },
          provides: function (t) {
            t.generateAbstractMask = function (t) {
              var e,
                n,
                a,
                r,
                i,
                d,
                o,
                l,
                s = t.children,
                u = t.attributes,
                f = t.main,
                $ = t.mask,
                m = t.maskId,
                h = t.transform,
                g = f.width,
                p = f.icon,
                y = $.width,
                v = $.icon,
                b =
                  ((n = (e = { transform: h, containerWidth: y, iconWidth: g })
                    .transform),
                  (a = e.containerWidth),
                  (r = e.iconWidth),
                  (i = "translate("
                    .concat(32 * n.x, ", ")
                    .concat(32 * n.y, ") ")),
                  (d = "scale("
                    .concat((n.size / 16) * (n.flipX ? -1 : 1), ", ")
                    .concat((n.size / 16) * (n.flipY ? -1 : 1), ") ")),
                  (o = "rotate(".concat(n.rotate, " 0 0)")),
                  (l = {
                    transform: "".concat(i, " ").concat(d, " ").concat(o),
                  }),
                  {
                    outer: { transform: "translate(".concat(a / 2, " 256)") },
                    inner: l,
                    path: {
                      transform: "translate(".concat(-((r / 2) * 1), " -256)"),
                    },
                  }),
                x = {
                  tag: "rect",
                  attributes: c(c({}, e8), {}, { fill: "white" }),
                },
                C = p.children ? { children: p.children.map(e5) } : {},
                N = {
                  tag: "g",
                  attributes: c({}, b.inner),
                  children: [
                    e5(
                      c(
                        {
                          tag: p.tag,
                          attributes: c(c({}, p.attributes), b.path),
                        },
                        C,
                      ),
                    ),
                  ],
                },
                P = { tag: "g", attributes: c({}, b.outer), children: [N] },
                S = "mask-".concat(m || tF()),
                w = "clip-".concat(m || tF()),
                k = {
                  tag: "mask",
                  attributes: c(
                    c({}, e8),
                    {},
                    {
                      id: S,
                      maskUnits: "userSpaceOnUse",
                      maskContentUnits: "userSpaceOnUse",
                    },
                  ),
                  children: [x, P],
                },
                A = {
                  tag: "defs",
                  children: [
                    {
                      tag: "clipPath",
                      attributes: { id: w },
                      children: "g" === v.tag ? v.children : [v],
                    },
                    k,
                  ],
                };
              return (
                s.push(A, {
                  tag: "rect",
                  attributes: c(
                    {
                      fill: "currentColor",
                      "clip-path": "url(#".concat(w, ")"),
                      mask: "url(#".concat(S, ")"),
                    },
                    e8,
                  ),
                }),
                { children: s, attributes: u }
              );
            };
          },
        },
        {
          provides: function (t) {
            var e = !1;
            (S.matchMedia &&
              (e = S.matchMedia("(prefers-reduced-motion: reduce)").matches),
              (t.missingIconAbstract = function () {
                var t = [],
                  n = { fill: "currentColor" },
                  a = {
                    attributeType: "XML",
                    repeatCount: "indefinite",
                    dur: "2s",
                  };
                t.push({
                  tag: "path",
                  attributes: c(
                    c({}, n),
                    {},
                    {
                      d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
                    },
                  ),
                });
                var r = c(c({}, a), {}, { attributeName: "opacity" }),
                  i = {
                    tag: "circle",
                    attributes: c(
                      c({}, n),
                      {},
                      { cx: "256", cy: "364", r: "28" },
                    ),
                    children: [],
                  };
                return (
                  e ||
                    i.children.push(
                      {
                        tag: "animate",
                        attributes: c(
                          c({}, a),
                          {},
                          { attributeName: "r", values: "28;14;28;28;14;28;" },
                        ),
                      },
                      {
                        tag: "animate",
                        attributes: c(c({}, r), {}, { values: "1;0;1;1;0;1;" }),
                      },
                    ),
                  t.push(i),
                  t.push({
                    tag: "path",
                    attributes: c(
                      c({}, n),
                      {},
                      {
                        opacity: "1",
                        d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                      },
                    ),
                    children: e
                      ? []
                      : [
                          {
                            tag: "animate",
                            attributes: c(
                              c({}, r),
                              {},
                              { values: "1;0;0;0;0;1;" },
                            ),
                          },
                        ],
                  }),
                  e ||
                    t.push({
                      tag: "path",
                      attributes: c(
                        c({}, n),
                        {},
                        {
                          opacity: "0",
                          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                        },
                      ),
                      children: [
                        {
                          tag: "animate",
                          attributes: c(
                            c({}, r),
                            {},
                            { values: "0;0;1;1;0;0;" },
                          ),
                        },
                      ],
                    }),
                  { tag: "g", attributes: { class: "missing" }, children: t }
                );
              }));
          },
        },
        {
          hooks: function () {
            return {
              parseNodeAttributes: function (t, e) {
                var n = e.getAttribute("data-fa-symbol");
                return ((t.symbol = null !== n && ("" === n || n)), t);
              },
            };
          },
        },
      ]),
        (eu = {}),
        Object.keys(ef).forEach(function (t) {
          -1 === ec.indexOf(t) && delete ef[t];
        }),
        es.forEach(function (t) {
          var e = t.mixout ? t.mixout() : {};
          if (
            (Object.keys(e).forEach(function (t) {
              ("function" == typeof e[t] && (ey[t] = e[t]),
                "object" === g(e[t]) &&
                  Object.keys(e[t]).forEach(function (n) {
                    (ey[t] || (ey[t] = {}), (ey[t][n] = e[t][n]));
                  }));
            }),
            t.hooks)
          ) {
            var n = t.hooks();
            Object.keys(n).forEach(function (t) {
              (eu[t] || (eu[t] = []), eu[t].push(n[t]));
            });
          }
          t.provides && t.provides(ef);
        }),
        ey.noAuto);
      var e6 = ey.config;
      (ey.library, ey.dom);
      var e7 = ey.parse;
      (ey.findIconDefinition, ey.toHtml);
      var nt = ey.icon;
      function ne(t) {
        var e;
        return (e = t - 0) == e
          ? t
          : (t = t.replaceAll(/[_-]+(.)?/g, (t, e) =>
              e ? e.toUpperCase() : "",
            ))
              .charAt(0)
              .toLowerCase() + t.slice(1);
      }
      (ey.layer, ey.text, ey.counter);
      var nn = new Map(),
        na = (t, e) => {
          let n = (0, o.useId)();
          return t || (e ? n : void 0);
        },
        nr = class {
          constructor(t = "react-fontawesome") {
            this.enabled = !1;
            let e = !1;
            try {
              e = "undefined" != typeof process && !1;
            } catch {}
            ((this.scope = t), (this.enabled = e));
          }
          log(...t) {
            this.enabled && console.log(`[${this.scope}]`, ...t);
          }
          warn(...t) {
            this.enabled && console.warn(`[${this.scope}]`, ...t);
          }
          error(...t) {
            this.enabled && console.error(`[${this.scope}]`, ...t);
          }
        };
      "undefined" != typeof process && process.env.FA_VERSION;
      var ni =
          Number.parseInt(
            "searchPseudoElementsFullScan" in e6 ? "7.0.0" : "6.0.0",
          ) >= 7,
        nd = { left: "fa-pull-left", right: "fa-pull-right" },
        no = { 90: "fa-rotate-90", 180: "fa-rotate-180", 270: "fa-rotate-270" },
        nl = {
          "2xs": "fa-2xs",
          xs: "fa-xs",
          sm: "fa-sm",
          lg: "fa-lg",
          xl: "fa-xl",
          "2xl": "fa-2xl",
          "1x": "fa-1x",
          "2x": "fa-2x",
          "3x": "fa-3x",
          "4x": "fa-4x",
          "5x": "fa-5x",
          "6x": "fa-6x",
          "7x": "fa-7x",
          "8x": "fa-8x",
          "9x": "fa-9x",
          "10x": "fa-10x",
        };
      function ns(t) {
        if (t)
          return "object" == typeof t && "icon" in t && t.icon ? t : e7.icon(t);
      }
      var nu = new nr("FontAwesomeIcon"),
        nf = {
          border: !1,
          className: "",
          mask: void 0,
          maskId: void 0,
          fixedWidth: !1,
          inverse: !1,
          flip: !1,
          icon: void 0,
          listItem: !1,
          pull: void 0,
          pulse: !1,
          rotation: void 0,
          rotateBy: !1,
          size: void 0,
          spin: !1,
          spinPulse: !1,
          spinReverse: !1,
          beat: !1,
          fade: !1,
          beatFade: !1,
          bounce: !1,
          shake: !1,
          symbol: !1,
          title: "",
          titleId: void 0,
          transform: void 0,
          swapOpacity: !1,
          widthAuto: !1,
        },
        nc = new Set(Object.keys(nf)),
        n$ = o.forwardRef((t, e) => {
          let n = { ...nf, ...t },
            {
              icon: a,
              mask: r,
              symbol: i,
              title: d,
              titleId: o,
              maskId: l,
              transform: s,
            } = n,
            u = na(l, !!r),
            f = na(o, !!d),
            c = ns(a);
          if (!c) return (nu.error("Icon lookup is undefined", a), null);
          let $ = (function (t) {
              let {
                  beat: e,
                  fade: n,
                  beatFade: a,
                  bounce: r,
                  shake: i,
                  spin: d,
                  spinPulse: o,
                  spinReverse: l,
                  pulse: s,
                  fixedWidth: u,
                  inverse: f,
                  border: c,
                  flip: $,
                  size: m,
                  rotation: h,
                  pull: g,
                  swapOpacity: p,
                  rotateBy: y,
                  widthAuto: v,
                  className: b,
                } = t,
                x = [];
              return (
                b && x.push(...b.split(" ")),
                e && x.push("fa-beat"),
                n && x.push("fa-fade"),
                a && x.push("fa-beat-fade"),
                r && x.push("fa-bounce"),
                i && x.push("fa-shake"),
                d && x.push("fa-spin"),
                l && x.push("fa-spin-reverse"),
                o && x.push("fa-spin-pulse"),
                s && x.push("fa-pulse"),
                u && x.push("fa-fw"),
                f && x.push("fa-inverse"),
                c && x.push("fa-border"),
                !0 === $ && x.push("fa-flip"),
                ("horizontal" === $ || "both" === $) &&
                  x.push("fa-flip-horizontal"),
                ("vertical" === $ || "both" === $) &&
                  x.push("fa-flip-vertical"),
                null != m && x.push(nl[m]),
                null != h && 0 !== h && x.push(no[h]),
                null != g && x.push(nd[g]),
                p && x.push("fa-swap-opacity"),
                ni &&
                  (y && x.push("fa-rotate-by"), v && x.push("fa-width-auto")),
                x
              );
            })(n),
            m = "string" == typeof s ? e7.transform(s) : s,
            h = ns(r),
            g = nt(c, {
              ...($.length > 0 && { classes: $ }),
              ...(m && { transform: m }),
              ...(h && { mask: h }),
              symbol: i,
              title: d,
              titleId: f,
              maskId: u,
            });
          if (!g) return (nu.error("Could not find icon", c), null);
          let { abstract: p } = g,
            y = { ref: e };
          for (let t of Object.keys(n)) nc.has(t) || (y[t] = n[t]);
          return nm(p[0], y);
        });
      n$.displayName = "FontAwesomeIcon";
      var nm = function t(e, n, a = {}) {
        if ("string" == typeof n) return n;
        let r = (n.children || []).map((n) => t(e, n)),
          i = n.attributes || {},
          d = {};
        for (let [t, e] of Object.entries(i))
          switch (!0) {
            case "class" === t:
              ((d.className = e), delete i.class);
              break;
            case "style" === t:
              d.style = (function (t) {
                if (nn.has(t)) return nn.get(t);
                let e = {},
                  n = 0,
                  a = t.length;
                for (; n < a; ) {
                  let r = t.indexOf(";", n),
                    i = -1 === r ? a : r,
                    d = t.slice(n, i).trim();
                  if (d) {
                    let t = d.indexOf(":");
                    if (t > 0) {
                      let n = d.slice(0, t).trim(),
                        a = d.slice(t + 1).trim();
                      if (n && a) {
                        let t = ne(n);
                        e[
                          t.startsWith("webkit")
                            ? t.charAt(0).toUpperCase() + t.slice(1)
                            : t
                        ] = a;
                      }
                    }
                  }
                  n = i + 1;
                }
                if (1e3 === nn.size) {
                  let t = nn.keys().next().value;
                  t && nn.delete(t);
                }
                return (nn.set(t, e), e);
              })(String(e));
              break;
            case t.startsWith("aria-"):
            case t.startsWith("data-"):
              d[t.toLowerCase()] = e;
              break;
            default:
              d[ne(t)] = e;
          }
        let { style: o, "aria-label": l, ...s } = a;
        return (
          o && (d.style = d.style ? { ...d.style, ...o } : o),
          l && ((d["aria-label"] = l), (d["aria-hidden"] = "false")),
          e(n.tag, { ...s, ...d }, ...r)
        );
      }.bind(null, o.createElement);
    },
    102: function (t, e, n) {
      "use strict";
      n.d(e, { A: () => r });
      var a = {}.constructor;
      function r(t) {
        return null != t && t.constructor === a;
      }
    },
    757: function (t, e, n) {
      "use strict";
      function a(t, e) {
        ((t = t.split("-")), (e = e.split("-")));
        for (var n = t[0].split("."), a = e[0].split("."), r = 0; r < 3; r++) {
          var i = Number(n[r]),
            d = Number(a[r]);
          if (i > d) return 1;
          if (d > i) return -1;
          if (!isNaN(i) && isNaN(d)) return 1;
          if (isNaN(i) && !isNaN(d)) return -1;
        }
        return t[1] && e[1]
          ? t[1] > e[1]
            ? 1
            : t[1] < e[1]
              ? -1
              : 0
          : !t[1] && e[1]
            ? 1
            : t[1] && !e[1]
              ? -1
              : 0;
      }
      n.d(e, { aR: () => p, Ay: () => f, Ko: () => v });
      var r = n(102);
      function i(t) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function d(t, e) {
        if (!(t instanceof e))
          throw TypeError("Cannot call a class as a function");
      }
      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          ((a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(
              t,
              (function (t) {
                var e = (function (t, e) {
                  if ("object" != i(t) || !t) return t;
                  var n = t[Symbol.toPrimitive];
                  if (void 0 !== n) {
                    var a = n.call(t, e || "default");
                    if ("object" != i(a)) return a;
                    throw TypeError(
                      "@@toPrimitive must return a primitive value.",
                    );
                  }
                  return ("string" === e ? String : Number)(t);
                })(t, "string");
                return "symbol" == i(e) ? e : e + "";
              })(a.key),
              a,
            ));
        }
      }
      function l(t, e, n) {
        return (
          e && o(t.prototype, e),
          n && o(t, n),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }
      var s = " ext. ",
        u = /^\d+$/,
        f = l(
          function t(e) {
            (d(this, t), p(e), (this.metadata = e), b.call(this, e));
          },
          [
            {
              key: "getCountries",
              value: function () {
                return Object.keys(this.metadata.countries).filter(
                  function (t) {
                    return "001" !== t;
                  },
                );
              },
            },
            {
              key: "getCountryMetadata",
              value: function (t) {
                return this.metadata.countries[t];
              },
            },
            {
              key: "nonGeographic",
              value: function () {
                if (!this.v1 && !this.v2 && !this.v3)
                  return (
                    this.metadata.nonGeographic || this.metadata.nonGeographical
                  );
              },
            },
            {
              key: "hasCountry",
              value: function (t) {
                return void 0 !== this.getCountryMetadata(t);
              },
            },
            {
              key: "hasCallingCode",
              value: function (t) {
                if (this.getCountryCodesForCallingCode(t)) return !0;
                if (this.nonGeographic()) {
                  if (this.nonGeographic()[t]) return !0;
                } else {
                  var e = this.countryCallingCodes()[t];
                  if (e && 1 === e.length && "001" === e[0]) return !0;
                }
              },
            },
            {
              key: "isNonGeographicCallingCode",
              value: function (t) {
                return this.nonGeographic()
                  ? !!this.nonGeographic()[t]
                  : !this.getCountryCodesForCallingCode(t);
              },
            },
            {
              key: "country",
              value: function (t) {
                return this.selectNumberingPlan(t);
              },
            },
            {
              key: "selectNumberingPlan",
              value: function (t, e) {
                if (
                  (t && u.test(t) && ((e = t), (t = null)), t && "001" !== t)
                ) {
                  if (!this.hasCountry(t))
                    throw Error("Unknown country: ".concat(t));
                  this.numberingPlan = new c(this.getCountryMetadata(t), this);
                } else if (e) {
                  if (!this.hasCallingCode(e))
                    throw Error("Unknown calling code: ".concat(e));
                  this.numberingPlan = new c(
                    this.getNumberingPlanMetadata(e),
                    this,
                  );
                } else this.numberingPlan = void 0;
                return this;
              },
            },
            {
              key: "getCountryCodesForCallingCode",
              value: function (t) {
                var e = this.countryCallingCodes()[t];
                if (e) {
                  if (1 === e.length && 3 === e[0].length) return;
                  return e;
                }
              },
            },
            {
              key: "getCountryCodeForCallingCode",
              value: function (t) {
                var e = this.getCountryCodesForCallingCode(t);
                if (e) return e[0];
              },
            },
            {
              key: "getNumberingPlanMetadata",
              value: function (t) {
                var e = this.getCountryCodeForCallingCode(t);
                if (e) return this.getCountryMetadata(e);
                if (this.nonGeographic()) {
                  var n = this.nonGeographic()[t];
                  if (n) return n;
                } else {
                  var a = this.countryCallingCodes()[t];
                  if (a && 1 === a.length && "001" === a[0])
                    return this.metadata.countries["001"];
                }
              },
            },
            {
              key: "countryCallingCode",
              value: function () {
                return this.numberingPlan.callingCode();
              },
            },
            {
              key: "IDDPrefix",
              value: function () {
                return this.numberingPlan.IDDPrefix();
              },
            },
            {
              key: "defaultIDDPrefix",
              value: function () {
                return this.numberingPlan.defaultIDDPrefix();
              },
            },
            {
              key: "nationalNumberPattern",
              value: function () {
                return this.numberingPlan.nationalNumberPattern();
              },
            },
            {
              key: "possibleLengths",
              value: function () {
                return this.numberingPlan.possibleLengths();
              },
            },
            {
              key: "formats",
              value: function () {
                return this.numberingPlan.formats();
              },
            },
            {
              key: "nationalPrefixForParsing",
              value: function () {
                return this.numberingPlan.nationalPrefixForParsing();
              },
            },
            {
              key: "nationalPrefixTransformRule",
              value: function () {
                return this.numberingPlan.nationalPrefixTransformRule();
              },
            },
            {
              key: "leadingDigits",
              value: function () {
                return this.numberingPlan.leadingDigits();
              },
            },
            {
              key: "hasTypes",
              value: function () {
                return this.numberingPlan.hasTypes();
              },
            },
            {
              key: "type",
              value: function (t) {
                return this.numberingPlan.type(t);
              },
            },
            {
              key: "ext",
              value: function () {
                return this.numberingPlan.ext();
              },
            },
            {
              key: "countryCallingCodes",
              value: function () {
                return this.v1
                  ? this.metadata.country_phone_code_to_countries
                  : this.metadata.country_calling_codes;
              },
            },
            {
              key: "chooseCountryByCountryCallingCode",
              value: function (t) {
                return this.selectNumberingPlan(t);
              },
            },
            {
              key: "hasSelectedNumberingPlan",
              value: function () {
                return void 0 !== this.numberingPlan;
              },
            },
          ],
        ),
        c = l(
          function t(e, n) {
            (d(this, t),
              (this.globalMetadataObject = n),
              (this.metadata = e),
              b.call(this, n.metadata));
          },
          [
            {
              key: "callingCode",
              value: function () {
                return this.metadata[0];
              },
            },
            {
              key: "getDefaultCountryMetadataForRegion",
              value: function () {
                return this.globalMetadataObject.getNumberingPlanMetadata(
                  this.callingCode(),
                );
              },
            },
            {
              key: "IDDPrefix",
              value: function () {
                if (!this.v1 && !this.v2) return this.metadata[1];
              },
            },
            {
              key: "defaultIDDPrefix",
              value: function () {
                if (!this.v1 && !this.v2) return this.metadata[12];
              },
            },
            {
              key: "nationalNumberPattern",
              value: function () {
                return this.v1 || this.v2 ? this.metadata[1] : this.metadata[2];
              },
            },
            {
              key: "possibleLengths",
              value: function () {
                if (!this.v1) return this.metadata[this.v2 ? 2 : 3];
              },
            },
            {
              key: "_getFormats",
              value: function (t) {
                return t[this.v1 ? 2 : this.v2 ? 3 : 4];
              },
            },
            {
              key: "formats",
              value: function () {
                var t = this;
                return (
                  this._getFormats(this.metadata) ||
                  this._getFormats(this.getDefaultCountryMetadataForRegion()) ||
                  []
                ).map(function (e) {
                  return new $(e, t);
                });
              },
            },
            {
              key: "nationalPrefix",
              value: function () {
                return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
              },
            },
            {
              key: "_getNationalPrefixFormattingRule",
              value: function (t) {
                return t[this.v1 ? 4 : this.v2 ? 5 : 6];
              },
            },
            {
              key: "nationalPrefixFormattingRule",
              value: function () {
                return (
                  this._getNationalPrefixFormattingRule(this.metadata) ||
                  this._getNationalPrefixFormattingRule(
                    this.getDefaultCountryMetadataForRegion(),
                  )
                );
              },
            },
            {
              key: "_nationalPrefixForParsing",
              value: function () {
                return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
              },
            },
            {
              key: "nationalPrefixForParsing",
              value: function () {
                return (
                  this._nationalPrefixForParsing() || this.nationalPrefix()
                );
              },
            },
            {
              key: "nationalPrefixTransformRule",
              value: function () {
                return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
              },
            },
            {
              key: "_getNationalPrefixIsOptionalWhenFormatting",
              value: function () {
                return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
              },
            },
            {
              key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
              value: function () {
                return (
                  this._getNationalPrefixIsOptionalWhenFormatting(
                    this.metadata,
                  ) ||
                  this._getNationalPrefixIsOptionalWhenFormatting(
                    this.getDefaultCountryMetadataForRegion(),
                  )
                );
              },
            },
            {
              key: "leadingDigits",
              value: function () {
                return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
              },
            },
            {
              key: "types",
              value: function () {
                return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
              },
            },
            {
              key: "hasTypes",
              value: function () {
                return (
                  (!this.types() || 0 !== this.types().length) && !!this.types()
                );
              },
            },
            {
              key: "type",
              value: function (t) {
                if (this.hasTypes() && g(this.types(), t))
                  return new h(g(this.types(), t), this);
              },
            },
            {
              key: "ext",
              value: function () {
                return this.v1 || this.v2 ? s : this.metadata[13] || s;
              },
            },
          ],
        ),
        $ = l(
          function t(e, n) {
            (d(this, t), (this._format = e), (this.metadata = n));
          },
          [
            {
              key: "pattern",
              value: function () {
                return this._format[0];
              },
            },
            {
              key: "format",
              value: function () {
                return this._format[1];
              },
            },
            {
              key: "leadingDigitsPatterns",
              value: function () {
                return this._format[2] || [];
              },
            },
            {
              key: "nationalPrefixFormattingRule",
              value: function () {
                return (
                  this._format[3] ||
                  this.metadata.nationalPrefixFormattingRule()
                );
              },
            },
            {
              key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
              value: function () {
                return (
                  !!this._format[4] ||
                  this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
                );
              },
            },
            {
              key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
              value: function () {
                return (
                  this.usesNationalPrefix() &&
                  !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat()
                );
              },
            },
            {
              key: "usesNationalPrefix",
              value: function () {
                return !(
                  !this.nationalPrefixFormattingRule() ||
                  m.test(this.nationalPrefixFormattingRule())
                );
              },
            },
            {
              key: "internationalFormat",
              value: function () {
                return this._format[5] || this.format();
              },
            },
          ],
        ),
        m = /^\(?\$1\)?$/,
        h = l(
          function t(e, n) {
            (d(this, t), (this.type = e), (this.metadata = n));
          },
          [
            {
              key: "pattern",
              value: function () {
                return this.metadata.v1 ? this.type : this.type[0];
              },
            },
            {
              key: "possibleLengths",
              value: function () {
                if (!this.metadata.v1)
                  return this.type[1] || this.metadata.possibleLengths();
              },
            },
          ],
        );
      function g(t, e) {
        switch (e) {
          case "FIXED_LINE":
            return t[0];
          case "MOBILE":
            return t[1];
          case "TOLL_FREE":
            return t[2];
          case "PREMIUM_RATE":
            return t[3];
          case "PERSONAL_NUMBER":
            return t[4];
          case "VOICEMAIL":
            return t[5];
          case "UAN":
            return t[6];
          case "PAGER":
            return t[7];
          case "VOIP":
            return t[8];
          case "SHARED_COST":
            return t[9];
        }
      }
      function p(t) {
        if (!t)
          throw Error(
            "[libphonenumber-js] `metadata` argument not passed. Check your arguments.",
          );
        if (!(0, r.A)(t) || !(0, r.A)(t.countries))
          throw Error(
            "[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(
              (0, r.A)(t)
                ? "an object of shape: { " + Object.keys(t).join(", ") + " }"
                : "a " + y(t) + ": " + t,
              ".",
            ),
          );
      }
      var y = function (t) {
        return i(t);
      };
      function v(t, e) {
        if ((e = new f(e)).hasCountry(t))
          return e.country(t).countryCallingCode();
        throw Error("Unknown country: ".concat(t));
      }
      function b(t) {
        var e = t.version;
        "number" == typeof e
          ? ((this.v1 = 1 === e),
            (this.v2 = 2 === e),
            (this.v3 = 3 === e),
            (this.v4 = 4 === e))
          : e
            ? -1 === a(e, "1.2.0")
              ? (this.v2 = !0)
              : -1 === a(e, "1.7.35")
                ? (this.v3 = !0)
                : (this.v4 = !0)
            : (this.v1 = !0);
      }
    },
    111: function (t, e, n) {
      "use strict";
      n.d(e, { A: () => a });
      let a = {
        version: 4,
        country_calling_codes: {
          1: [
            "US",
            "AG",
            "AI",
            "AS",
            "BB",
            "BM",
            "BS",
            "CA",
            "DM",
            "DO",
            "GD",
            "GU",
            "JM",
            "KN",
            "KY",
            "LC",
            "MP",
            "MS",
            "PR",
            "SX",
            "TC",
            "TT",
            "VC",
            "VG",
            "VI",
          ],
          7: ["RU", "KZ"],
          20: ["EG"],
          27: ["ZA"],
          30: ["GR"],
          31: ["NL"],
          32: ["BE"],
          33: ["FR"],
          34: ["ES"],
          36: ["HU"],
          39: ["IT", "VA"],
          40: ["RO"],
          41: ["CH"],
          43: ["AT"],
          44: ["GB", "GG", "IM", "JE"],
          45: ["DK"],
          46: ["SE"],
          47: ["NO", "SJ"],
          48: ["PL"],
          49: ["DE"],
          51: ["PE"],
          52: ["MX"],
          53: ["CU"],
          54: ["AR"],
          55: ["BR"],
          56: ["CL"],
          57: ["CO"],
          58: ["VE"],
          60: ["MY"],
          61: ["AU", "CC", "CX"],
          62: ["ID"],
          63: ["PH"],
          64: ["NZ"],
          65: ["SG"],
          66: ["TH"],
          81: ["JP"],
          82: ["KR"],
          84: ["VN"],
          86: ["CN"],
          90: ["TR"],
          91: ["IN"],
          92: ["PK"],
          93: ["AF"],
          94: ["LK"],
          95: ["MM"],
          98: ["IR"],
          211: ["SS"],
          212: ["MA", "EH"],
          213: ["DZ"],
          216: ["TN"],
          218: ["LY"],
          220: ["GM"],
          221: ["SN"],
          222: ["MR"],
          223: ["ML"],
          224: ["GN"],
          225: ["CI"],
          226: ["BF"],
          227: ["NE"],
          228: ["TG"],
          229: ["BJ"],
          230: ["MU"],
          231: ["LR"],
          232: ["SL"],
          233: ["GH"],
          234: ["NG"],
          235: ["TD"],
          236: ["CF"],
          237: ["CM"],
          238: ["CV"],
          239: ["ST"],
          240: ["GQ"],
          241: ["GA"],
          242: ["CG"],
          243: ["CD"],
          244: ["AO"],
          245: ["GW"],
          246: ["IO"],
          247: ["AC"],
          248: ["SC"],
          249: ["SD"],
          250: ["RW"],
          251: ["ET"],
          252: ["SO"],
          253: ["DJ"],
          254: ["KE"],
          255: ["TZ"],
          256: ["UG"],
          257: ["BI"],
          258: ["MZ"],
          260: ["ZM"],
          261: ["MG"],
          262: ["RE", "YT"],
          263: ["ZW"],
          264: ["NA"],
          265: ["MW"],
          266: ["LS"],
          267: ["BW"],
          268: ["SZ"],
          269: ["KM"],
          290: ["SH", "TA"],
          291: ["ER"],
          297: ["AW"],
          298: ["FO"],
          299: ["GL"],
          350: ["GI"],
          351: ["PT"],
          352: ["LU"],
          353: ["IE"],
          354: ["IS"],
          355: ["AL"],
          356: ["MT"],
          357: ["CY"],
          358: ["FI", "AX"],
          359: ["BG"],
          370: ["LT"],
          371: ["LV"],
          372: ["EE"],
          373: ["MD"],
          374: ["AM"],
          375: ["BY"],
          376: ["AD"],
          377: ["MC"],
          378: ["SM"],
          380: ["UA"],
          381: ["RS"],
          382: ["ME"],
          383: ["XK"],
          385: ["HR"],
          386: ["SI"],
          387: ["BA"],
          389: ["MK"],
          420: ["CZ"],
          421: ["SK"],
          423: ["LI"],
          500: ["FK"],
          501: ["BZ"],
          502: ["GT"],
          503: ["SV"],
          504: ["HN"],
          505: ["NI"],
          506: ["CR"],
          507: ["PA"],
          508: ["PM"],
          509: ["HT"],
          590: ["GP", "BL", "MF"],
          591: ["BO"],
          592: ["GY"],
          593: ["EC"],
          594: ["GF"],
          595: ["PY"],
          596: ["MQ"],
          597: ["SR"],
          598: ["UY"],
          599: ["CW", "BQ"],
          670: ["TL"],
          672: ["NF"],
          673: ["BN"],
          674: ["NR"],
          675: ["PG"],
          676: ["TO"],
          677: ["SB"],
          678: ["VU"],
          679: ["FJ"],
          680: ["PW"],
          681: ["WF"],
          682: ["CK"],
          683: ["NU"],
          685: ["WS"],
          686: ["KI"],
          687: ["NC"],
          688: ["TV"],
          689: ["PF"],
          690: ["TK"],
          691: ["FM"],
          692: ["MH"],
          850: ["KP"],
          852: ["HK"],
          853: ["MO"],
          855: ["KH"],
          856: ["LA"],
          880: ["BD"],
          886: ["TW"],
          960: ["MV"],
          961: ["LB"],
          962: ["JO"],
          963: ["SY"],
          964: ["IQ"],
          965: ["KW"],
          966: ["SA"],
          967: ["YE"],
          968: ["OM"],
          970: ["PS"],
          971: ["AE"],
          972: ["IL"],
          973: ["BH"],
          974: ["QA"],
          975: ["BT"],
          976: ["MN"],
          977: ["NP"],
          992: ["TJ"],
          993: ["TM"],
          994: ["AZ"],
          995: ["GE"],
          996: ["KG"],
          998: ["UZ"],
        },
        countries: {
          AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]],
          AD: [
            "376",
            "00",
            "(?:1|6\\d)\\d{7}|[135-9]\\d{5}",
            [6, 8, 9],
            [
              ["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]],
              ["(\\d{4})(\\d{4})", "$1 $2", ["1"]],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]],
            ],
          ],
          AE: [
            "971",
            "00",
            "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",
            [5, 6, 7, 8, 9, 10, 11, 12],
            [
              ["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]],
              [
                "(\\d)(\\d{3})(\\d{4})",
                "$1 $2 $3",
                ["[236]|[479][2-8]"],
                "0$1",
              ],
              ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
            ],
            "0",
          ],
          AF: [
            "93",
            "00",
            "[2-7]\\d{8}",
            [9],
            [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]],
            "0",
          ],
          AG: [
            "1",
            "011",
            "(?:268|[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([457]\\d{6})$|1",
            "268$1",
            0,
            "268",
          ],
          AI: [
            "1",
            "011",
            "(?:264|[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2457]\\d{6})$|1",
            "264$1",
            0,
            "264",
          ],
          AL: [
            "355",
            "00",
            "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}",
            [6, 7, 8, 9],
            [
              ["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"],
              ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"],
              [
                "(\\d{2})(\\d{3})(\\d{3})",
                "$1 $2 $3",
                ["[2358][2-5]|4"],
                "0$1",
              ],
              ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"],
            ],
            "0",
          ],
          AM: [
            "374",
            "00",
            "(?:[1-489]\\d|55|60|77)\\d{6}",
            [8],
            [
              ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"],
              ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"],
              ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"],
              ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"],
            ],
            "0",
          ],
          AO: [
            "244",
            "00",
            "[29]\\d{8}",
            [9],
            [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]],
          ],
          AR: [
            "54",
            "00",
            "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}",
            [10, 11],
            [
              [
                "(\\d{4})(\\d{2})(\\d{4})",
                "$1 $2-$3",
                [
                  "2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])",
                  "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)",
                  "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]",
                  "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]",
                ],
                "0$1",
                1,
              ],
              ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1],
              [
                "(\\d)(\\d{4})(\\d{2})(\\d{4})",
                "$2 15-$3-$4",
                [
                  "9(?:2[2-469]|3[3-578])",
                  "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))",
                  "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)",
                  "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]",
                  "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]",
                ],
                "0$1",
                0,
                "$1 $2 $3-$4",
              ],
              [
                "(\\d)(\\d{2})(\\d{4})(\\d{4})",
                "$2 15-$3-$4",
                ["91"],
                "0$1",
                0,
                "$1 $2 $3-$4",
              ],
              ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"],
              [
                "(\\d)(\\d{3})(\\d{3})(\\d{4})",
                "$2 15-$3-$4",
                ["9"],
                "0$1",
                0,
                "$1 $2 $3-$4",
              ],
            ],
            "0",
            0,
            "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?",
            "9$1",
          ],
          AS: [
            "1",
            "011",
            "(?:[58]\\d\\d|684|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([267]\\d{6})$|1",
            "684$1",
            0,
            "684",
          ],
          AT: [
            "43",
            "00",
            "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}",
            [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
            [
              ["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"],
              ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"],
              ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"],
              [
                "(\\d{3})(\\d{3,10})",
                "$1 $2",
                [
                  "(?:31|4)6|51|6(?:48|5[0-3579]|[6-9])|7(?:20|32|8)|[89]",
                  "(?:31|4)6|51|6(?:485|5[0-3579]|[6-9])|7(?:20|32|8)|[89]",
                ],
                "0$1",
              ],
              ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"],
              ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"],
            ],
            "0",
          ],
          AU: [
            "61",
            "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
            "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}",
            [5, 6, 7, 8, 9, 10, 12],
            [
              ["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"],
              ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"],
              ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]],
            ],
            "0",
            0,
            "(183[12])|0",
            0,
            0,
            0,
            [
              [
                "(?:(?:2(?:(?:[0-26-9]\\d|3[0-8]|5[0135-9])\\d|4(?:[02-9]\\d|10))|3(?:(?:[0-3589]\\d|6[1-9]|7[0-35-9])\\d|4(?:[0-578]\\d|90))|7(?:[013-57-9]\\d|2[0-8])\\d)\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|[34]\\d\\d)|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}",
                [9],
              ],
              [
                "4(?:79[01]|83[0-389]|94[0-478])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-37-9])\\d{6}",
                [9],
              ],
              ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
              ["190[0-26]\\d{6}", [10]],
              0,
              0,
              0,
              ["163\\d{2,6}", [5, 6, 7, 8, 9]],
              ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
              [
                "13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",
                [6, 8, 10, 12],
              ],
            ],
            "0011",
          ],
          AW: [
            "297",
            "00",
            "(?:[25-79]\\d\\d|800)\\d{4}",
            [7],
            [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]],
          ],
          AX: [
            "358",
            "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))",
            "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}",
            [5, 6, 7, 8, 9, 10, 11, 12],
            0,
            "0",
            0,
            0,
            0,
            0,
            "18",
            0,
            "00",
          ],
          AZ: [
            "994",
            "00",
            "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}",
            [9],
            [
              [
                "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["90"],
                "0$1",
              ],
              [
                "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                [
                  "1[28]|2|365|46",
                  "1[28]|2|365[45]|46",
                  "1[28]|2|365(?:4|5[02])|46",
                ],
                "(0$1)",
              ],
              [
                "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[13-9]"],
                "0$1",
              ],
            ],
            "0",
          ],
          BA: [
            "387",
            "00",
            "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}",
            [8, 9],
            [
              ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"],
              ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"],
            ],
            "0",
          ],
          BB: [
            "1",
            "011",
            "(?:246|[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-9]\\d{6})$|1",
            "246$1",
            0,
            "246",
          ],
          BD: [
            "880",
            "00",
            "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}",
            [6, 7, 8, 9, 10],
            [
              ["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"],
              [
                "(\\d{3})(\\d{3,7})",
                "$1-$2",
                [
                  "3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]",
                ],
                "0$1",
              ],
              ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|2[23]"], "0$1"],
              ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"],
            ],
            "0",
          ],
          BE: [
            "32",
            "00",
            "4\\d{8}|[1-9]\\d{7}",
            [8, 9],
            [
              ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"],
              [
                "(\\d)(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[239]|4[23]"],
                "0$1",
              ],
              [
                "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[15-8]"],
                "0$1",
              ],
              ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"],
            ],
            "0",
          ],
          BF: [
            "226",
            "00",
            "(?:[025-7]\\d|44)\\d{6}",
            [8],
            [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[024-7]"]]],
          ],
          BG: [
            "359",
            "00",
            "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}",
            [6, 7, 8, 9, 12],
            [
              ["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"],
              ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"],
              ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"],
              [
                "(\\d{2})(\\d{3})(\\d{2,3})",
                "$1 $2 $3",
                ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],
                "0$1",
              ],
              ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"],
            ],
            "0",
          ],
          BH: [
            "973",
            "00",
            "[136-9]\\d{7}",
            [8],
            [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]],
          ],
          BI: [
            "257",
            "00",
            "(?:[267]\\d|31)\\d{6}",
            [8],
            [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]],
          ],
          BJ: [
            "229",
            "00",
            "(?:01\\d|[24-689])\\d{7}",
            [8, 10],
            [
              ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]],
              [
                "(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4 $5",
                ["0"],
              ],
            ],
          ],
          BL: [
            "590",
            "00",
            "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}",
            [9],
            0,
            "0",
            0,
            0,
            0,
            0,
            0,
            [
              ["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"],
              [
                "(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}",
              ],
              ["80[0-5]\\d{6}"],
              0,
              0,
              0,
              0,
              0,
              ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"],
            ],
          ],
          BM: [
            "1",
            "011",
            "(?:441|[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-9]\\d{6})$|1",
            "441$1",
            0,
            "441",
          ],
          BN: [
            "673",
            "00",
            "[2-578]\\d{6}",
            [7],
            [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]],
          ],
          BO: [
            "591",
            "00(?:1\\d)?",
            "8001\\d{5}|(?:[2-467]\\d|50)\\d{6}",
            [8, 9],
            [
              ["(\\d)(\\d{7})", "$1 $2", ["[235]|4[46]"]],
              ["(\\d{8})", "$1", ["[67]"]],
              ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]],
            ],
            "0",
            0,
            "0(1\\d)?",
          ],
          BQ: [
            "599",
            "00",
            "(?:[34]1|7\\d)\\d{5}",
            [7],
            0,
            0,
            0,
            0,
            0,
            0,
            "[347]",
          ],
          BR: [
            "55",
            "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)",
            "[1-467]\\d{9,10}|55[0-46-9]\\d{8}|[34]\\d{7}|55\\d{7,8}|(?:5[0-46-9]|[89]\\d)\\d{7,9}",
            [8, 9, 10, 11],
            [
              [
                "(\\d{4})(\\d{4})",
                "$1-$2",
                ["300|4(?:0[02]|37|86)", "300|4(?:0(?:0|20)|370|864)"],
              ],
              [
                "(\\d{3})(\\d{2,3})(\\d{4})",
                "$1 $2 $3",
                ["(?:[358]|90)0"],
                "0$1",
              ],
              [
                "(\\d{2})(\\d{4})(\\d{4})",
                "$1 $2-$3",
                ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"],
                "($1)",
              ],
              [
                "(\\d{2})(\\d{5})(\\d{4})",
                "$1 $2-$3",
                ["[16][1-9]|[2-57-9]"],
                "($1)",
              ],
            ],
            "0",
            0,
            "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?",
            "$2",
          ],
          BS: [
            "1",
            "011",
            "(?:242|[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([3-8]\\d{6})$|1",
            "242$1",
            0,
            "242",
          ],
          BT: [
            "975",
            "00",
            "[178]\\d{7}|[2-8]\\d{6}",
            [7, 8],
            [
              ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-6]|7[246]|8[2-4]"]],
              [
                "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["1[67]|[78]"],
              ],
            ],
          ],
          BW: [
            "267",
            "00",
            "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}",
            [7, 8, 10],
            [
              ["(\\d{2})(\\d{5})", "$1 $2", ["90"]],
              ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]],
              ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]],
              ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]],
              ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]],
            ],
          ],
          BY: [
            "375",
            "810",
            "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}",
            [6, 7, 8, 9, 10, 11],
            [
              ["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"],
              ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"],
              [
                "(\\d{4})(\\d{2})(\\d{3})",
                "$1 $2-$3",
                [
                  "1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])",
                  "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])",
                ],
                "8 0$1",
              ],
              [
                "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2-$3-$4",
                ["1(?:[56]|7[467])|2[1-3]"],
                "8 0$1",
              ],
              [
                "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2-$3-$4",
                ["[1-4]"],
                "8 0$1",
              ],
              ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"],
            ],
            "8",
            0,
            "0|80?",
            0,
            0,
            0,
            0,
            "8~10",
          ],
          BZ: [
            "501",
            "00",
            "(?:0800\\d|[2-8])\\d{6}",
            [7, 11],
            [
              ["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]],
              ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]],
            ],
          ],
          CA: [
            "1",
            "011",
            "[2-9]\\d{9}|3\\d{6}",
            [7, 10],
            0,
            "1",
            0,
            0,
            0,
            0,
            0,
            [
              [
                "(?:2(?:04|[23]6|[48]9|5[07]|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\\d{6}",
                [10],
              ],
              ["", [10]],
              ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]],
              ["900[2-9]\\d{6}", [10]],
              [
                "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:2[125-9]|33|44|66|77|88)|6(?:22|33))[2-9]\\d{6}",
                [10],
              ],
              0,
              ["310\\d{4}", [7]],
              0,
              ["600[2-9]\\d{6}", [10]],
            ],
          ],
          CC: [
            "61",
            "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
            "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",
            [6, 7, 8, 9, 10, 12],
            0,
            "0",
            0,
            "([59]\\d{7})$|0",
            "8$1",
            0,
            0,
            [
              [
                "8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}",
                [9],
              ],
              [
                "4(?:79[01]|83[0-389]|94[0-478])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-37-9])\\d{6}",
                [9],
              ],
              ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
              ["190[0-26]\\d{6}", [10]],
              0,
              0,
              0,
              0,
              ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
              [
                "13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",
                [6, 8, 10, 12],
              ],
            ],
            "0011",
          ],
          CD: [
            "243",
            "00",
            "(?:(?:[189]|5\\d)\\d|2)\\d{7}|[1-68]\\d{6}",
            [7, 8, 9, 10],
            [
              ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
              ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"],
              ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"],
              ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["5"], "0$1"],
            ],
            "0",
          ],
          CF: [
            "236",
            "00",
            "(?:[27]\\d{3}|8776)\\d{4}",
            [8],
            [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]],
          ],
          CG: [
            "242",
            "00",
            "222\\d{6}|(?:0\\d|80)\\d{7}",
            [9],
            [
              ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]],
            ],
          ],
          CH: [
            "41",
            "00",
            "8\\d{11}|[2-9]\\d{8}",
            [9, 12],
            [
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"],
              [
                "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[2-79]|81"],
                "0$1",
              ],
              [
                "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4 $5",
                ["8"],
                "0$1",
              ],
            ],
            "0",
          ],
          CI: [
            "225",
            "00",
            "[02]\\d{9}",
            [10],
            [
              ["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]],
              ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]],
            ],
          ],
          CK: [
            "682",
            "00",
            "[2-578]\\d{4}",
            [5],
            [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]],
          ],
          CL: [
            "56",
            "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0",
            "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}",
            [9, 10, 11],
            [
              ["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["60|809"]],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]],
              ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"],
              ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9(?:10|[2-9])"]],
              [
                "(\\d{2})(\\d{3})(\\d{4})",
                "$1 $2 $3",
                ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-8]|[1-9])"],
                "($1)",
              ],
              ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]],
              ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
              ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]],
            ],
          ],
          CM: [
            "237",
            "00",
            "[26]\\d{8}|88\\d{6,7}",
            [8, 9],
            [
              ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]],
              [
                "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4 $5",
                ["[26]|88"],
              ],
            ],
          ],
          CN: [
            "86",
            "00|1(?:[12]\\d|79)\\d\\d00",
            "(?:(?:1[03-689]|2\\d)\\d\\d|6)\\d{8}|1\\d{10}|[126]\\d{6}(?:\\d(?:\\d{2})?)?|86\\d{5,6}|(?:[3-579]\\d|8[0-57-9])\\d{5,9}",
            [7, 8, 9, 10, 11, 12],
            [
              [
                "(\\d{2})(\\d{5,6})",
                "$1 $2",
                [
                  "(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]",
                  "(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1",
                  "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12",
                  "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123",
                  "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123",
                ],
                "0$1",
              ],
              [
                "(\\d{3})(\\d{5,6})",
                "$1 $2",
                [
                  "3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]",
                  "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]",
                  "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])",
                  "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])",
                ],
                "0$1",
              ],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]],
              [
                "(\\d{2})(\\d{4})(\\d{4})",
                "$1 $2 $3",
                [
                  "10|2(?:[02-57-9]|1[1-9])",
                  "10|2(?:[02-57-9]|1[1-9])",
                  "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])",
                ],
                "0$1",
                1,
              ],
              [
                "(\\d{3})(\\d{3})(\\d{4})",
                "$1 $2 $3",
                [
                  "3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]",
                ],
                "0$1",
                1,
              ],
              ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]],
              ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1],
              ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1],
              ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]],
              [
                "(\\d{2})(\\d{3})(\\d{3})(\\d{4})",
                "$1 $2 $3 $4",
                ["[12]"],
                "0$1",
                1,
              ],
            ],
            "0",
            0,
            "(1(?:[12]\\d|79)\\d\\d)|0",
            0,
            0,
            0,
            0,
            "00",
          ],
          CO: [
            "57",
            "00(?:4(?:[14]4|56)|[579])",
            "(?:46|60\\d\\d)\\d{6}|(?:1\\d|[39])\\d{9}",
            [8, 10, 11],
            [
              ["(\\d{4})(\\d{4})", "$1 $2", ["46"]],
              ["(\\d{3})(\\d{7})", "$1 $2", ["6|90"], "($1)"],
              ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|9[14]"]],
              [
                "(\\d)(\\d{3})(\\d{7})",
                "$1-$2-$3",
                ["1"],
                "0$1",
                0,
                "$1 $2 $3",
              ],
            ],
            "0",
            0,
            "0([3579]|4(?:[14]4|56))?",
          ],
          CR: [
            "506",
            "00",
            "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}",
            [8, 10],
            [
              ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]],
            ],
            0,
            0,
            "(19(?:0[0-2468]|1[09]|20|66|77|99))",
          ],
          CU: [
            "53",
            "119",
            "(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}",
            [6, 7, 8, 10],
            [
              ["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"],
              ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"],
              ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"],
              ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"],
            ],
            "0",
          ],
          CV: [
            "238",
            "0",
            "(?:[2-59]\\d\\d|800)\\d{4}",
            [7],
            [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]],
          ],
          CW: [
            "599",
            "00",
            "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}",
            [7, 8],
            [
              ["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]],
              ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]],
            ],
            0,
            0,
            0,
            0,
            0,
            "[69]",
          ],
          CX: [
            "61",
            "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
            "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",
            [6, 7, 8, 9, 10, 12],
            0,
            "0",
            0,
            "([59]\\d{7})$|0",
            "8$1",
            0,
            0,
            [
              [
                "8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}",
                [9],
              ],
              [
                "4(?:79[01]|83[0-389]|94[0-478])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-37-9])\\d{6}",
                [9],
              ],
              ["180(?:0\\d{3}|2)\\d{3}", [7, 10]],
              ["190[0-26]\\d{6}", [10]],
              0,
              0,
              0,
              0,
              ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]],
              [
                "13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",
                [6, 8, 10, 12],
              ],
            ],
            "0011",
          ],
          CY: [
            "357",
            "00",
            "(?:[279]\\d|[58]0)\\d{6}",
            [8],
            [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]],
          ],
          CZ: [
            "420",
            "00",
            "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}",
            [9, 10, 11, 12],
            [
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]],
              ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]],
              ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]],
              ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]],
            ],
          ],
          DE: [
            "49",
            "00",
            "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}",
            [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
            [
              ["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"],
              [
                "(\\d{3})(\\d{3,12})",
                "$1 $2",
                [
                  "2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1",
                  "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1",
                ],
                "0$1",
              ],
              [
                "(\\d{4})(\\d{2,11})",
                "$1 $2",
                [
                  "[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]",
                  "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]",
                ],
                "0$1",
              ],
              ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"],
              ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"],
              ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"],
              ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"],
              ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"],
              ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"],
              ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"],
              ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
              ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"],
              ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"],
              [
                "(\\d{5})(\\d{6})",
                "$1 $2",
                ["15[03568]", "15(?:[0568]|3[13])"],
                "0$1",
              ],
              ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"],
              [
                "(\\d{3})(\\d{2})(\\d{7,8})",
                "$1 $2 $3",
                ["1(?:6[023]|7)"],
                "0$1",
              ],
              ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"],
              ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"],
            ],
            "0",
          ],
          DJ: [
            "253",
            "00",
            "(?:2\\d|77)\\d{6}",
            [8],
            [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]],
          ],
          DK: [
            "45",
            "00",
            "[2-9]\\d{7}",
            [8],
            [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]],
          ],
          DM: [
            "1",
            "011",
            "(?:[58]\\d\\d|767|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-7]\\d{6})$|1",
            "767$1",
            0,
            "767",
          ],
          DO: [
            "1",
            "011",
            "(?:[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            0,
            0,
            0,
            "8001|8[024]9",
          ],
          DZ: [
            "213",
            "00",
            "(?:[1-4]|[5-79]\\d|80)\\d{7}",
            [8, 9],
            [
              [
                "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[1-4]"],
                "0$1",
              ],
              ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"],
              [
                "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[5-8]"],
                "0$1",
              ],
            ],
            "0",
          ],
          EC: [
            "593",
            "00",
            "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}",
            [8, 9, 10, 11],
            [
              [
                "(\\d)(\\d{3})(\\d{4})",
                "$1 $2-$3",
                ["[2-7]"],
                "(0$1)",
                0,
                "$1-$2-$3",
              ],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
              ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]],
            ],
            "0",
          ],
          EE: [
            "372",
            "00",
            "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}",
            [7, 8, 10],
            [
              [
                "(\\d{3})(\\d{4})",
                "$1 $2",
                [
                  "[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88",
                  "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88",
                ],
              ],
              [
                "(\\d{4})(\\d{3,4})",
                "$1 $2",
                ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"],
              ],
              ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]],
              ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
            ],
          ],
          EG: [
            "20",
            "00",
            "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}",
            [8, 9, 10],
            [
              ["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"],
              [
                "(\\d{2})(\\d{6,7})",
                "$1 $2",
                ["1[35]|[4-6]|8[2468]|9[235-7]"],
                "0$1",
              ],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
              ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"],
            ],
            "0",
          ],
          EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"],
          ER: [
            "291",
            "00",
            "[178]\\d{6}",
            [7],
            [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]],
            "0",
          ],
          ES: [
            "34",
            "00",
            "[5-9]\\d{8}",
            [9],
            [
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]],
              ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]],
            ],
          ],
          ET: [
            "251",
            "00",
            "(?:11|[2-579]\\d)\\d{7}",
            [9],
            [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]],
            "0",
          ],
          FI: [
            "358",
            "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))",
            "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}",
            [5, 6, 7, 8, 9, 10, 11, 12],
            [
              ["(\\d{5})", "$1", ["20[2-59]"], "0$1"],
              [
                "(\\d{3})(\\d{3,7})",
                "$1 $2",
                ["(?:[1-3]0|[68])0|70[07-9]"],
                "0$1",
              ],
              ["(\\d{2})(\\d{4,8})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"],
              ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"],
              [
                "(\\d)(\\d{4,9})",
                "$1 $2",
                ["(?:19|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"],
                "0$1",
              ],
            ],
            "0",
            0,
            0,
            0,
            0,
            "1[03-79]|[2-9]",
            0,
            "00",
          ],
          FJ: [
            "679",
            "0(?:0|52)",
            "45\\d{5}|(?:0800\\d|[235-9])\\d{6}",
            [7, 11],
            [
              ["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]],
              ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
          ],
          FK: ["500", "00", "[2-7]\\d{4}", [5]],
          FM: [
            "691",
            "00",
            "(?:[39]\\d\\d|820)\\d{4}",
            [7],
            [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]],
          ],
          FO: [
            "298",
            "00",
            "[2-9]\\d{5}",
            [6],
            [["(\\d{6})", "$1", ["[2-9]"]]],
            0,
            0,
            "(10(?:01|[12]0|88))",
          ],
          FR: [
            "33",
            "00",
            "[1-9]\\d{8}",
            [9],
            [
              [
                "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["8"],
                "0 $1",
              ],
              [
                "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4 $5",
                ["[1-79]"],
                "0$1",
              ],
            ],
            "0",
          ],
          GA: [
            "241",
            "00",
            "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}",
            [7, 8],
            [
              [
                "(\\d)(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[2-7]"],
                "0$1",
              ],
              ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
              [
                "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["11|[67]"],
                "0$1",
              ],
            ],
            0,
            0,
            "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})",
            "$1",
          ],
          GB: [
            "44",
            "00",
            "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",
            [7, 9, 10],
            [
              [
                "(\\d{3})(\\d{4})",
                "$1 $2",
                ["800", "8001", "80011", "800111", "8001111"],
                "0$1",
              ],
              [
                "(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2 $3",
                ["845", "8454", "84546", "845464"],
                "0$1",
              ],
              ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"],
              [
                "(\\d{5})(\\d{4,5})",
                "$1 $2",
                [
                  "1(?:38|5[23]|69|76|94)",
                  "1(?:(?:38|69)7|5(?:24|39)|768|946)",
                  "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)",
                ],
                "0$1",
              ],
              [
                "(\\d{4})(\\d{5,6})",
                "$1 $2",
                ["1(?:[2-69][02-9]|[78])"],
                "0$1",
              ],
              [
                "(\\d{2})(\\d{4})(\\d{4})",
                "$1 $2 $3",
                ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"],
                "0$1",
              ],
              ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"],
            ],
            "0",
            0,
            "0|180020",
            0,
            0,
            0,
            [
              [
                "(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-35])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}",
                [9, 10],
              ],
              [
                "7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}",
                [10],
              ],
              ["80[08]\\d{7}|800\\d{6}|8001111"],
              [
                "(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d",
                [7, 10],
              ],
              ["70\\d{8}", [10]],
              0,
              ["(?:3[0347]|55)\\d{8}", [10]],
              [
                "76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",
                [10],
              ],
              ["56\\d{8}", [10]],
            ],
            0,
            " x",
          ],
          GD: [
            "1",
            "011",
            "(?:473|[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-9]\\d{6})$|1",
            "473$1",
            0,
            "473",
          ],
          GE: [
            "995",
            "00",
            "(?:[3-57]\\d\\d|800)\\d{6}",
            [9],
            [
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
              [
                "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["32"],
                "0$1",
              ],
              ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]],
              [
                "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[348]"],
                "0$1",
              ],
            ],
            "0",
          ],
          GF: [
            "594",
            "00",
            "(?:[56]94\\d|7093)\\d{5}|(?:80|9\\d)\\d{7}",
            [9],
            [
              [
                "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[5-7]|9[47]"],
                "0$1",
              ],
              [
                "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[89]"],
                "0$1",
              ],
            ],
            "0",
          ],
          GG: [
            "44",
            "00",
            "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?",
            [7, 9, 10],
            0,
            "0",
            0,
            "([25-9]\\d{5})$|0|180020",
            "1481$1",
            0,
            0,
            [
              ["1481[25-9]\\d{5}", [10]],
              ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]],
              ["80[08]\\d{7}|800\\d{6}|8001111"],
              [
                "(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d",
                [7, 10],
              ],
              ["70\\d{8}", [10]],
              0,
              ["(?:3[0347]|55)\\d{8}", [10]],
              [
                "76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",
                [10],
              ],
              ["56\\d{8}", [10]],
            ],
          ],
          GH: [
            "233",
            "00",
            "(?:[235]\\d{3}|800)\\d{5}",
            [8, 9],
            [
              ["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"],
            ],
            "0",
          ],
          GI: [
            "350",
            "00",
            "(?:[25]\\d|60)\\d{6}",
            [8],
            [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]],
          ],
          GL: [
            "299",
            "00",
            "(?:19|[2-689]\\d|70)\\d{4}",
            [6],
            [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]],
          ],
          GM: [
            "220",
            "00",
            "[2-9]\\d{6}",
            [7],
            [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]],
          ],
          GN: [
            "224",
            "00",
            "722\\d{6}|(?:3|6\\d)\\d{7}",
            [8, 9],
            [
              ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]],
              ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]],
            ],
          ],
          GP: [
            "590",
            "00",
            "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}",
            [9],
            [
              [
                "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[5-79]"],
                "0$1",
              ],
              ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"],
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            [
              [
                "590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}",
              ],
              [
                "(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}",
              ],
              ["80[0-5]\\d{6}"],
              0,
              0,
              0,
              0,
              0,
              ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"],
            ],
          ],
          GQ: [
            "240",
            "00",
            "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}",
            [9],
            [
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]],
              ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]],
            ],
          ],
          GR: [
            "30",
            "00",
            "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}",
            [10, 11, 12],
            [
              ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]],
              [
                "(\\d{4})(\\d{6})",
                "$1 $2",
                ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"],
              ],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]],
              ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]],
            ],
          ],
          GT: [
            "502",
            "00",
            "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}",
            [8, 11],
            [
              ["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]],
              ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
            ],
          ],
          GU: [
            "1",
            "011",
            "(?:[58]\\d\\d|671|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-9]\\d{6})$|1",
            "671$1",
            0,
            "671",
          ],
          GW: [
            "245",
            "00",
            "[49]\\d{8}|4\\d{6}",
            [7, 9],
            [
              ["(\\d{3})(\\d{4})", "$1 $2", ["40"]],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]],
            ],
          ],
          GY: [
            "592",
            "001",
            "(?:[2-8]\\d{3}|9008)\\d{3}",
            [7],
            [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]],
          ],
          HK: [
            "852",
            "00(?:30|5[09]|[126-9]?)",
            "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}",
            [5, 6, 7, 8, 9, 11],
            [
              ["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]],
              ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
              ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
          ],
          HN: [
            "504",
            "00",
            "8\\d{10}|[237-9]\\d{7}",
            [8, 11],
            [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]],
          ],
          HR: [
            "385",
            "00",
            "[2-69]\\d{8}|80\\d{5,7}|[1-79]\\d{7}|6\\d{6}",
            [7, 8, 9],
            [
              ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["6[01]"], "0$1"],
              ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"],
              ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6|7[245]"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57]"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"],
            ],
            "0",
          ],
          HT: [
            "509",
            "00",
            "[2-589]\\d{7}",
            [8],
            [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]],
          ],
          HU: [
            "36",
            "00",
            "[235-7]\\d{8}|[1-9]\\d{7}",
            [8, 9],
            [
              ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"],
              [
                "(\\d{2})(\\d{3})(\\d{3})",
                "$1 $2 $3",
                ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"],
                "(06 $1)",
              ],
              ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"],
            ],
            "06",
          ],
          ID: [
            "62",
            "00[89]",
            "00[1-9]\\d{9,14}|(?:[1-36]|8\\d{5})\\d{6}|00\\d{9}|[1-9]\\d{8,10}|[2-9]\\d{7}",
            [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
            [
              ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]],
              ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"],
              ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"],
              ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"],
              ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"],
              ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"],
              ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"],
              ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"],
            ],
            "0",
          ],
          IE: [
            "353",
            "00",
            "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}",
            [7, 8, 9, 10],
            [
              [
                "(\\d{2})(\\d{5})",
                "$1 $2",
                ["2[24-9]|47|58|6[237-9]|9[35-9]"],
                "(0$1)",
              ],
              ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"],
              ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"],
              [
                "(\\d{2})(\\d{3})(\\d{3,4})",
                "$1 $2 $3",
                ["[2569]|4[1-69]|7[14]"],
                "(0$1)",
              ],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"],
              ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
              ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"],
              ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"],
            ],
            "0",
          ],
          IL: [
            "972",
            "0(?:0|1[2-9])",
            "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}",
            [7, 8, 9, 10, 11, 12],
            [
              ["(\\d{4})(\\d{3})", "$1-$2", ["125"]],
              ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]],
              ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
              ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]],
              ["(\\d{4})(\\d{6})", "$1-$2", ["159"]],
              ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]],
              ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]],
            ],
            "0",
          ],
          IM: [
            "44",
            "00",
            "1624\\d{6}|(?:[3578]\\d|90)\\d{8}",
            [10],
            0,
            "0",
            0,
            "([25-8]\\d{5})$|0|180020",
            "1624$1",
            0,
            "74576|(?:16|7[56])24",
          ],
          IN: [
            "91",
            "00",
            "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}",
            [8, 9, 10, 11, 12, 13],
            [
              [
                "(\\d{8})",
                "$1",
                [
                  "5(?:0|2[23]|3[03]|[67]1|88)",
                  "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)",
                  "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)",
                ],
                0,
                1,
              ],
              ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1],
              [
                "(\\d{2})(\\d{4})(\\d{4})",
                "$1 $2 $3",
                [
                  "11|2[02]|33|4[04]|79[1-7]|80[2-46]",
                  "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])",
                  "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])",
                ],
                "0$1",
                1,
              ],
              [
                "(\\d{3})(\\d{3})(\\d{4})",
                "$1 $2 $3",
                [
                  "1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]",
                  "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]",
                  "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]",
                ],
                "0$1",
                1,
              ],
              [
                "(\\d{4})(\\d{3})(\\d{3})",
                "$1 $2 $3",
                [
                  "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807",
                  "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]",
                  "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]",
                ],
                "0$1",
                1,
              ],
              ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1],
              [
                "(\\d{4})(\\d{2,4})(\\d{4})",
                "$1 $2 $3",
                ["1(?:6|8[06])", "1(?:6|8[06]0)"],
                0,
                1,
              ],
              ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1],
            ],
            "0",
          ],
          IO: [
            "246",
            "00",
            "3\\d{6}",
            [7],
            [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]],
          ],
          IQ: [
            "964",
            "00",
            "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}",
            [8, 9, 10],
            [
              ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
            ],
            "0",
          ],
          IR: [
            "98",
            "00",
            "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}",
            [4, 5, 6, 7, 10],
            [
              ["(\\d{4,5})", "$1", ["96"], "0$1"],
              [
                "(\\d{2})(\\d{4,5})",
                "$1 $2",
                [
                  "(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]",
                ],
                "0$1",
              ],
              ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"],
              ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"],
            ],
            "0",
          ],
          IS: [
            "354",
            "00|1(?:0(?:01|[12]0)|100)",
            "(?:38\\d|[4-9])\\d{6}",
            [7, 9],
            [
              ["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
          ],
          IT: [
            "39",
            "00",
            "0\\d{5,11}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?",
            [6, 7, 8, 9, 10, 11, 12],
            [
              ["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]],
              [
                "(\\d{3})(\\d{3,6})",
                "$1 $2",
                [
                  "0[13-57-9][0159]|8(?:03|4[17]|9[2-5])",
                  "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))",
                ],
              ],
              [
                "(\\d{4})(\\d{2,6})",
                "$1 $2",
                ["0(?:[13-579][2-46-8]|8[236-8])"],
              ],
              ["(\\d{4})(\\d{4})", "$1 $2", ["894"]],
              ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]],
              [
                "(\\d{3})(\\d{3})(\\d{3,4})",
                "$1 $2 $3",
                ["1(?:44|[679])|[378]|43"],
              ],
              [
                "(\\d{3})(\\d{3,4})(\\d{4})",
                "$1 $2 $3",
                ["0[13-57-9][0159]|14"],
              ],
              ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]],
              ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]],
              ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[03]"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            [
              [
                "0(?:669[0-79]\\d{1,6}|831\\d{2,8})|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[2356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}",
              ],
              ["3[2-9]\\d{7,8}|(?:31|43)\\d{8}", [9, 10]],
              ["80(?:0\\d{3}|3)\\d{3}", [6, 9]],
              [
                "(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}",
                [6, 8, 9, 10],
              ],
              ["1(?:78\\d|99)\\d{6}", [9, 10]],
              ["3[2-8]\\d{9,10}", [11, 12]],
              0,
              0,
              ["55\\d{8}", [10]],
              ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]],
            ],
          ],
          JE: [
            "44",
            "00",
            "1534\\d{6}|(?:[3578]\\d|90)\\d{8}",
            [10],
            0,
            "0",
            0,
            "([0-24-8]\\d{5})$|0|180020",
            "1534$1",
            0,
            0,
            [
              ["1534[0-24-8]\\d{5}"],
              ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"],
              ["80(?:07(?:35|81)|8901)\\d{4}"],
              [
                "(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}",
              ],
              ["701511\\d{4}"],
              0,
              [
                "(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}",
              ],
              [
                "76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",
              ],
              ["56\\d{8}"],
            ],
          ],
          JM: [
            "1",
            "011",
            "(?:[58]\\d\\d|658|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            0,
            0,
            0,
            "658|876",
          ],
          JO: [
            "962",
            "00",
            "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}",
            [8, 9],
            [
              ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"],
              ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"],
              ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"],
              ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
            ],
            "0",
          ],
          JP: [
            "81",
            "010",
            "00[1-9]\\d{6,14}|[25-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}",
            [8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
            [
              [
                "(\\d{3})(\\d{3})(\\d{3})",
                "$1-$2-$3",
                ["(?:12|57|99)0"],
                "0$1",
              ],
              [
                "(\\d{4})(\\d)(\\d{4})",
                "$1-$2-$3",
                [
                  "1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])",
                  "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]",
                  "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]",
                ],
                "0$1",
              ],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"],
              [
                "(\\d)(\\d{4})(\\d{4})",
                "$1-$2-$3",
                [
                  "3|4(?:2[09]|7[01])|6[1-9]",
                  "3|4(?:2(?:0|9[02-69])|7(?:0[019]|1))|6[1-9]",
                ],
                "0$1",
              ],
              [
                "(\\d{2})(\\d{3})(\\d{4})",
                "$1-$2-$3",
                [
                  "1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])",
                  "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]",
                  "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]",
                ],
                "0$1",
              ],
              [
                "(\\d{3})(\\d{2})(\\d{4})",
                "$1-$2-$3",
                ["[14]|[289][2-9]|5[3-9]|7[2-4679]"],
                "0$1",
              ],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"],
              ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[25-9]"], "0$1"],
            ],
            "0",
            0,
            "(000[2569]\\d{4,6})$|(?:(?:003768)0?)|0",
            "$1",
          ],
          KE: [
            "254",
            "000",
            "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}",
            [7, 8, 9, 10],
            [
              ["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"],
              ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"],
            ],
            "0",
          ],
          KG: [
            "996",
            "00",
            "8\\d{9}|[235-9]\\d{8}",
            [9, 10],
            [
              ["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"],
            ],
            "0",
          ],
          KH: [
            "855",
            "00[14-9]",
            "1\\d{9}|[1-9]\\d{7,8}",
            [8, 9, 10],
            [
              ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"],
              ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
            ],
            "0",
          ],
          KI: [
            "686",
            "00",
            "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}",
            [5, 8],
            0,
            "0",
          ],
          KM: [
            "269",
            "00",
            "[3478]\\d{6}",
            [7],
            [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]],
          ],
          KN: [
            "1",
            "011",
            "(?:[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-7]\\d{6})$|1",
            "869$1",
            0,
            "869",
          ],
          KP: [
            "850",
            "00|99",
            "85\\d{6}|(?:19\\d|[2-7])\\d{7}",
            [8, 10],
            [
              ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"],
              ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
            ],
            "0",
          ],
          KR: [
            "82",
            "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))",
            "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}",
            [5, 6, 8, 9, 10, 11, 12, 13, 14],
            [
              [
                "(\\d{2})(\\d{3,4})",
                "$1-$2",
                ["(?:3[1-3]|[46][1-4]|5[1-5])1"],
                "0$1",
              ],
              ["(\\d{4})(\\d{4})", "$1-$2", ["1"]],
              ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[36]0|8"], "0$1"],
              [
                "(\\d{2})(\\d{3,4})(\\d{4})",
                "$1-$2-$3",
                ["[1346]|5[1-5]"],
                "0$1",
              ],
              ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"],
              ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"],
            ],
            "0",
            0,
            "0(8(?:[1-46-8]|5\\d\\d))?",
          ],
          KW: [
            "965",
            "00",
            "18\\d{5}|(?:[2569]\\d|41)\\d{6}",
            [7, 8],
            [
              [
                "(\\d{4})(\\d{3,4})",
                "$1 $2",
                ["[169]|2(?:[235]|4[1-35-9])|52"],
              ],
              ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]],
            ],
          ],
          KY: [
            "1",
            "011",
            "(?:345|[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-9]\\d{6})$|1",
            "345$1",
            0,
            "345",
          ],
          KZ: [
            "7",
            "810",
            "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}",
            [10, 14],
            0,
            "8",
            0,
            0,
            0,
            0,
            "33622|7",
            0,
            "8~10",
          ],
          LA: [
            "856",
            "00",
            "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}",
            [8, 9, 10],
            [
              [
                "(\\d{2})(\\d{3})(\\d{3})",
                "$1 $2 $3",
                ["2[13]|3[14]|[4-8]"],
                "0$1",
              ],
              ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["3"], "0$1"],
              [
                "(\\d{2})(\\d{2})(\\d{3})(\\d{3})",
                "$1 $2 $3 $4",
                ["[23]"],
                "0$1",
              ],
            ],
            "0",
          ],
          LB: [
            "961",
            "00",
            "[27-9]\\d{7}|[13-9]\\d{6}",
            [7, 8],
            [
              [
                "(\\d)(\\d{3})(\\d{3})",
                "$1 $2 $3",
                ["[13-69]|7(?:[2-57]|62|8[0-6]|9[04-9])|8[02-9]"],
                "0$1",
              ],
              ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]],
            ],
            "0",
          ],
          LC: [
            "1",
            "011",
            "(?:[58]\\d\\d|758|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-8]\\d{6})$|1",
            "758$1",
            0,
            "758",
          ],
          LI: [
            "423",
            "00",
            "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}",
            [7, 9],
            [
              [
                "(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2 $3",
                ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"],
              ],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]],
            ],
            "0",
            0,
            "(1001)|0",
          ],
          LK: [
            "94",
            "00",
            "[1-9]\\d{8}",
            [9],
            [
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"],
            ],
            "0",
          ],
          LR: [
            "231",
            "00",
            "(?:[2457]\\d|33|88)\\d{7}|(?:2\\d|[4-6])\\d{6}",
            [7, 8, 9],
            [
              ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["4[67]|[56]"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-578]"], "0$1"],
            ],
            "0",
          ],
          LS: [
            "266",
            "00",
            "(?:[256]\\d\\d|800)\\d{5}",
            [8],
            [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]],
          ],
          LT: [
            "370",
            "00",
            "(?:[3469]\\d|52|[78]0)\\d{6}",
            [8],
            [
              ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(0-$1)", 1],
              ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0 $1", 1],
              [
                "(\\d{2})(\\d{6})",
                "$1 $2",
                ["37|4(?:[15]|6[1-8])"],
                "(0-$1)",
                1,
              ],
              ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(0-$1)", 1],
            ],
            "0",
            0,
            "[08]",
          ],
          LU: [
            "352",
            "00",
            "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}",
            [4, 5, 6, 7, 8, 9, 10, 11],
            [
              [
                "(\\d{2})(\\d{3})",
                "$1 $2",
                [
                  "2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])",
                ],
              ],
              [
                "(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3",
                [
                  "2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])",
                ],
              ],
              ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]],
              [
                "(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})",
                "$1 $2 $3 $4",
                ["2(?:[0367]|4[3-8])"],
              ],
              ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]],
              ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]],
              [
                "(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})",
                "$1 $2 $3 $4 $5",
                ["2(?:[0367]|4[3-8])"],
              ],
              [
                "(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})",
                "$1 $2 $3 $4",
                ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"],
              ],
            ],
            0,
            0,
            "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)",
          ],
          LV: [
            "371",
            "00",
            "(?:[268]\\d|78|90)\\d{6}",
            [8],
            [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2679]|8[01]"]]],
          ],
          LY: [
            "218",
            "00",
            "[2-9]\\d{8}",
            [9],
            [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]],
            "0",
          ],
          MA: [
            "212",
            "00",
            "[5-8]\\d{8}",
            [9],
            [
              [
                "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["5[45]"],
                "0$1",
              ],
              [
                "(\\d{4})(\\d{5})",
                "$1-$2",
                ["5(?:2[2-46-9]|3[3-9]|9)|8(?:0[89]|92)"],
                "0$1",
              ],
              ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"],
              ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"],
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            [
              [
                "5(?:2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}",
              ],
              [
                "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-8]|5[0-5]|8[0-7]))\\d{6}",
              ],
              ["80[0-7]\\d{6}"],
              ["89\\d{7}"],
              0,
              0,
              0,
              0,
              ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"],
            ],
          ],
          MC: [
            "377",
            "00",
            "(?:[3489]|6\\d)\\d{7}",
            [8, 9],
            [
              ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"],
              ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]],
              [
                "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4 $5",
                ["6"],
                "0$1",
              ],
            ],
            "0",
          ],
          MD: [
            "373",
            "00",
            "(?:[235-7]\\d|[89]0)\\d{6}",
            [8],
            [
              ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"],
              ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"],
            ],
            "0",
          ],
          ME: [
            "382",
            "00",
            "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}",
            [8, 9],
            [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]],
            "0",
          ],
          MF: [
            "590",
            "00",
            "(?:590\\d|7090)\\d{5}|(?:69|80|9\\d)\\d{7}",
            [9],
            0,
            "0",
            0,
            0,
            0,
            0,
            0,
            [
              ["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"],
              [
                "(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))|7090[0-4])\\d{4}",
              ],
              ["80[0-5]\\d{6}"],
              0,
              0,
              0,
              0,
              0,
              ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"],
            ],
          ],
          MG: [
            "261",
            "00",
            "[23]\\d{8}",
            [9],
            [
              [
                "(\\d{2})(\\d{2})(\\d{3})(\\d{2})",
                "$1 $2 $3 $4",
                ["[23]"],
                "0$1",
              ],
            ],
            "0",
            0,
            "([24-9]\\d{6})$|0",
            "20$1",
          ],
          MH: [
            "692",
            "011",
            "329\\d{4}|(?:[256]\\d|45)\\d{5}",
            [7],
            [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]],
            "1",
          ],
          MK: [
            "389",
            "00",
            "[2-578]\\d{7}",
            [8],
            [
              [
                "(\\d)(\\d{3})(\\d{4})",
                "$1 $2 $3",
                ["2|34[47]|4(?:[37]7|5[47]|64)"],
                "0$1",
              ],
              ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"],
              ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"],
            ],
            "0",
          ],
          ML: [
            "223",
            "00",
            "[24-9]\\d{7}",
            [8],
            [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]],
          ],
          MM: [
            "95",
            "00",
            "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}",
            [6, 7, 8, 9, 10],
            [
              ["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"],
              [
                "(\\d{2})(\\d{2})(\\d{3})",
                "$1 $2 $3",
                [
                  "4(?:[2-46]|5[3-5])|5|6(?:[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-5]|(?:60|86)[23]",
                ],
                "0$1",
              ],
              [
                "(\\d)(\\d{3})(\\d{3,4})",
                "$1 $2 $3",
                ["[12]|452|678|86", "[12]|452|6788|86"],
                "0$1",
              ],
              [
                "(\\d{2})(\\d{3})(\\d{3,4})",
                "$1 $2 $3",
                ["[4-7]|8[1-35]"],
                "0$1",
              ],
              [
                "(\\d)(\\d{3})(\\d{4,6})",
                "$1 $2 $3",
                ["9(?:2[0-4]|[35-9]|4[137-9])"],
                "0$1",
              ],
              ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"],
              ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"],
              ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"],
            ],
            "0",
          ],
          MN: [
            "976",
            "001",
            "[12]\\d{7,9}|[5-9]\\d{7}",
            [8, 9, 10],
            [
              ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"],
              ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]],
              ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"],
              [
                "(\\d{4})(\\d{5,6})",
                "$1 $2",
                [
                  "[12](?:27|3[2-8]|4[2-68]|5[1-4689])",
                  "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]",
                ],
                "0$1",
              ],
              ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"],
            ],
            "0",
          ],
          MO: [
            "853",
            "00",
            "0800\\d{3}|(?:28|[68]\\d)\\d{6}",
            [7, 8],
            [
              ["(\\d{4})(\\d{3})", "$1 $2", ["0"]],
              ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]],
            ],
          ],
          MP: [
            "1",
            "011",
            "[58]\\d{9}|(?:67|90)0\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-9]\\d{6})$|1",
            "670$1",
            0,
            "670",
          ],
          MQ: [
            "596",
            "00",
            "(?:596\\d|7091)\\d{5}|(?:69|[89]\\d)\\d{7}",
            [9],
            [
              [
                "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[5-79]|8(?:0[6-9]|[36])"],
                "0$1",
              ],
              ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"],
            ],
            "0",
          ],
          MR: [
            "222",
            "00",
            "(?:[2-4]\\d\\d|800)\\d{5}",
            [8],
            [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]],
          ],
          MS: [
            "1",
            "011",
            "(?:[58]\\d\\d|664|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([34]\\d{6})$|1",
            "664$1",
            0,
            "664",
          ],
          MT: [
            "356",
            "00",
            "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}",
            [8],
            [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]],
          ],
          MU: [
            "230",
            "0(?:0|[24-7]0|3[03])",
            "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}",
            [7, 8, 10],
            [
              ["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]],
              ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]],
              ["(\\d{5})(\\d{5})", "$1 $2", ["8"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "020",
          ],
          MV: [
            "960",
            "0(?:0|19)",
            "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}",
            [7, 10],
            [
              ["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
          ],
          MW: [
            "265",
            "00",
            "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}",
            [7, 9],
            [
              ["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"],
              [
                "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[137-9]"],
                "0$1",
              ],
            ],
            "0",
          ],
          MX: [
            "52",
            "0[09]",
            "[2-9]\\d{9}",
            [10],
            [
              ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"]],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
          ],
          MY: [
            "60",
            "00",
            "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}",
            [8, 9, 10],
            [
              ["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"],
              [
                "(\\d{2})(\\d{3})(\\d{3,4})",
                "$1-$2 $3",
                [
                  "1(?:[02469]|[378][1-9]|53)|8",
                  "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8",
                ],
                "0$1",
              ],
              ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"],
              [
                "(\\d)(\\d{3})(\\d{2})(\\d{4})",
                "$1-$2-$3-$4",
                ["1(?:[367]|80)"],
              ],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"],
              ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"],
            ],
            "0",
          ],
          MZ: [
            "258",
            "00",
            "(?:2|8\\d)\\d{7}",
            [8, 9],
            [
              ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]],
            ],
          ],
          NA: [
            "264",
            "00",
            "[68]\\d{7,8}",
            [8, 9],
            [
              ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"],
            ],
            "0",
          ],
          NC: [
            "687",
            "00",
            "(?:050|[2-57-9]\\d\\d)\\d{3}",
            [6],
            [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]],
          ],
          NE: [
            "227",
            "00",
            "[027-9]\\d{7}",
            [8],
            [
              ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]],
              [
                "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[089]|2[013]|7[0467]"],
              ],
            ],
          ],
          NF: [
            "672",
            "00",
            "[13]\\d{5}",
            [6],
            [
              ["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]],
              ["(\\d)(\\d{5})", "$1 $2", ["[13]"]],
            ],
            0,
            0,
            "([0-258]\\d{4})$",
            "3$1",
          ],
          NG: [
            "234",
            "009",
            "(?:20|9\\d)\\d{8}|[78]\\d{9,13}",
            [10, 11, 12, 13, 14],
            [
              ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["20[129]"], "0$1"],
              ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
              ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"],
              ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"],
            ],
            "0",
          ],
          NI: [
            "505",
            "00",
            "(?:1800|[25-8]\\d{3})\\d{4}",
            [8],
            [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]],
          ],
          NL: [
            "31",
            "00",
            "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}",
            [5, 6, 7, 8, 9, 10, 11],
            [
              ["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"],
              ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"],
              ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"],
              [
                "(\\d{3})(\\d{3})(\\d{3})",
                "$1 $2 $3",
                ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],
                "0$1",
              ],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"],
            ],
            "0",
          ],
          NO: [
            "47",
            "00",
            "(?:0|[2-9]\\d{3})\\d{4}",
            [5, 8],
            [
              ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]],
              ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]],
            ],
            0,
            0,
            0,
            0,
            0,
            "[02-689]|7[0-8]",
          ],
          NP: [
            "977",
            "00",
            "(?:1\\d|9)\\d{9}|[1-9]\\d{7}",
            [8, 10, 11],
            [
              ["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"],
              [
                "(\\d{2})(\\d{6})",
                "$1-$2",
                ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"],
                "0$1",
              ],
              ["(\\d{3})(\\d{7})", "$1-$2", ["9"]],
            ],
            "0",
          ],
          NR: [
            "674",
            "00",
            "(?:222|444|(?:55|8\\d)\\d|666|777|999)\\d{4}",
            [7],
            [["(\\d{3})(\\d{4})", "$1 $2", ["[24-9]"]]],
          ],
          NU: [
            "683",
            "00",
            "(?:[4-7]|888\\d)\\d{3}",
            [4, 7],
            [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]],
          ],
          NZ: [
            "64",
            "0(?:0|161)",
            "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}",
            [5, 6, 7, 8, 9, 10],
            [
              ["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"],
              [
                "(\\d{3})(\\d{2})(\\d{2,3})",
                "$1 $2 $3",
                ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"],
                "0$1",
              ],
              [
                "(\\d)(\\d{3})(\\d{4})",
                "$1 $2 $3",
                ["24|[346]|7[2-57-9]|9[2-9]"],
                "0$1",
              ],
              [
                "(\\d{3})(\\d{3})(\\d{3,4})",
                "$1 $2 $3",
                ["2(?:10|74)|[589]"],
                "0$1",
              ],
              ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"],
              [
                "(\\d{2})(\\d{3})(\\d{3,5})",
                "$1 $2 $3",
                ["2(?:[169]|7[0-35-9])|7"],
                "0$1",
              ],
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
          ],
          OM: [
            "968",
            "00",
            "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}",
            [7, 8, 9],
            [
              ["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]],
              ["(\\d{2})(\\d{6})", "$1 $2", ["2"]],
              ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]],
            ],
          ],
          PA: [
            "507",
            "00",
            "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}",
            [7, 8, 10, 11],
            [
              ["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]],
              ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
            ],
          ],
          PE: [
            "51",
            "00|19(?:1[124]|77|90)00",
            "(?:[14-8]|9\\d)\\d{7}",
            [8, 9],
            [
              ["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"],
              ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"],
              ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]],
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
            " Anexo ",
          ],
          PF: [
            "689",
            "00",
            "4\\d{5}(?:\\d{2})?|8\\d{7,8}",
            [6, 8, 9],
            [
              ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]],
              ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]],
              ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
            ],
          ],
          PG: [
            "675",
            "00|140[1-3]",
            "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}",
            [7, 8],
            [
              ["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]],
              ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
          ],
          PH: [
            "63",
            "00",
            "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}",
            [6, 8, 9, 10, 11, 12, 13],
            [
              ["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"],
              [
                "(\\d{4})(\\d{4,6})",
                "$1 $2",
                [
                  "3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2",
                  "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))",
                ],
                "(0$1)",
              ],
              [
                "(\\d{5})(\\d{4})",
                "$1 $2",
                ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"],
                "(0$1)",
              ],
              ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"],
              [
                "(\\d{2})(\\d{3})(\\d{4})",
                "$1 $2 $3",
                ["[3-7]|8[2-8]"],
                "(0$1)",
              ],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
              ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
              ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]],
            ],
            "0",
          ],
          PK: [
            "92",
            "00",
            "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",
            [8, 9, 10, 11, 12],
            [
              ["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"],
              ["(\\d{4})(\\d{5})", "$1 $2", ["1"]],
              [
                "(\\d{3})(\\d{6,7})",
                "$1 $2",
                [
                  "2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])",
                  "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]",
                ],
                "(0$1)",
              ],
              [
                "(\\d{2})(\\d{7,8})",
                "$1 $2",
                ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"],
                "(0$1)",
              ],
              ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"],
              ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"],
              [
                "(\\d{2})(\\d{3})(\\d{3})(\\d{3})",
                "$1 $2 $3 $4",
                ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"],
                "(0$1)",
              ],
              [
                "(\\d{3})(\\d{3})(\\d{3})(\\d{3})",
                "$1 $2 $3 $4",
                ["[24-9]"],
                "(0$1)",
              ],
            ],
            "0",
          ],
          PL: [
            "48",
            "00",
            "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}",
            [6, 7, 8, 9, 10],
            [
              ["(\\d{5})", "$1", ["19"]],
              ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]],
              [
                "(\\d{2})(\\d{2})(\\d{3})",
                "$1 $2 $3",
                [
                  "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1",
                  "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19",
                ],
              ],
              ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]],
              [
                "(\\d{3})(\\d{3})(\\d{3})",
                "$1 $2 $3",
                ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"],
              ],
              [
                "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["1[2-8]|[2-7]|8[1-79]|9[145]"],
              ],
              ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]],
            ],
          ],
          PM: [
            "508",
            "00",
            "[45]\\d{5}|(?:708|8\\d\\d)\\d{6}",
            [6, 9],
            [
              ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]],
              ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"],
            ],
            "0",
          ],
          PR: [
            "1",
            "011",
            "(?:[589]\\d\\d|787)\\d{7}",
            [10],
            0,
            "1",
            0,
            0,
            0,
            0,
            "787|939",
          ],
          PS: [
            "970",
            "00",
            "[2489]2\\d{6}|(?:1\\d|5)\\d{8}",
            [8, 9, 10],
            [
              ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"],
              ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
            ],
            "0",
          ],
          PT: [
            "351",
            "00",
            "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}",
            [9],
            [
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]],
            ],
          ],
          PW: [
            "680",
            "01[12]",
            "(?:[24-8]\\d\\d|345|900)\\d{4}",
            [7],
            [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]],
          ],
          PY: [
            "595",
            "00",
            "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}",
            [6, 7, 8, 9, 10, 11],
            [
              ["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"],
              [
                "(\\d{2})(\\d{5})",
                "$1 $2",
                ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"],
                "(0$1)",
              ],
              [
                "(\\d{3})(\\d{4,5})",
                "$1 $2",
                ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"],
                "(0$1)",
              ],
              [
                "(\\d{2})(\\d{3})(\\d{3,4})",
                "$1 $2 $3",
                ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"],
                "(0$1)",
              ],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]],
              ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-7])"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"],
              ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]],
            ],
            "0",
          ],
          QA: [
            "974",
            "00",
            "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}",
            [7, 8, 9, 11],
            [
              ["(\\d{3})(\\d{4})", "$1 $2", ["2[136]|8"]],
              ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]],
            ],
          ],
          RE: [
            "262",
            "00",
            "709\\d{6}|(?:26|[689]\\d)\\d{7}",
            [9],
            [
              [
                "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[26-9]"],
                "0$1",
              ],
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            [
              ["26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}"],
              [
                "(?:69(?:2\\d\\d|3(?:[06][0-6]|1[0-3]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))|7092[0-3])\\d{4}",
              ],
              ["80\\d{7}"],
              ["89[1-37-9]\\d{6}"],
              0,
              0,
              0,
              0,
              ["9(?:399[0-3]|479[0-6]|76(?:2[278]|3[0-37]))\\d{4}"],
              ["8(?:1[019]|2[0156]|84|90)\\d{6}"],
            ],
          ],
          RO: [
            "40",
            "00",
            "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}",
            [6, 9],
            [
              ["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"],
              ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"], "0$1"],
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            " int ",
          ],
          RS: [
            "381",
            "00",
            "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}",
            [6, 7, 8, 9, 10, 11, 12],
            [
              ["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"],
              ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"],
            ],
            "0",
          ],
          RU: [
            "7",
            "810",
            "8\\d{13}|[347-9]\\d{9}",
            [10, 14],
            [
              [
                "(\\d{4})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                [
                  "7(?:1[0-8]|2[1-9])",
                  "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))",
                  "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2",
                ],
                "8 ($1)",
                1,
              ],
              [
                "(\\d{5})(\\d)(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                [
                  "7(?:1[0-68]|2[1-9])",
                  "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))",
                  "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]",
                ],
                "8 ($1)",
                1,
              ],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1],
              [
                "(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2-$3-$4",
                ["[349]|8(?:[02-7]|1[1-8])"],
                "8 ($1)",
                1,
              ],
              [
                "(\\d{4})(\\d{4})(\\d{3})(\\d{3})",
                "$1 $2 $3 $4",
                ["8"],
                "8 ($1)",
              ],
            ],
            "8",
            0,
            0,
            0,
            0,
            0,
            [
              [
                "336(?:[013-9]\\d|2[013-9])\\d{5}|(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15-7]|6[0-35-79]|7[1-37-9]))\\d{7}",
                [10],
              ],
              ["9\\d{9}", [10]],
              ["8(?:0[04]|108\\d{3})\\d{7}"],
              ["80[39]\\d{7}", [10]],
              ["808\\d{7}", [10]],
            ],
            "8~10",
          ],
          RW: [
            "250",
            "00",
            "(?:06|[27]\\d\\d|[89]00)\\d{6}",
            [8, 9],
            [
              ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"],
            ],
            "0",
          ],
          SA: [
            "966",
            "00",
            "(?:[15]\\d|800|92)\\d{7}",
            [9, 10],
            [
              ["(\\d{4})(\\d{5})", "$1 $2", ["9"]],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
            ],
            "0",
          ],
          SB: [
            "677",
            "0[01]",
            "[6-9]\\d{6}|[1-6]\\d{4}",
            [5, 7],
            [
              [
                "(\\d{2})(\\d{5})",
                "$1 $2",
                ["6[89]|7|8[4-9]|9(?:[1-8]|9[0-8])"],
              ],
            ],
          ],
          SC: [
            "248",
            "010|0[0-2]",
            "(?:[2489]\\d|64)\\d{5}",
            [7],
            [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
          ],
          SD: [
            "249",
            "00",
            "[19]\\d{8}",
            [9],
            [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]],
            "0",
          ],
          SE: [
            "46",
            "00",
            "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}",
            [6, 7, 8, 9, 10, 12],
            [
              [
                "(\\d{2})(\\d{2,3})(\\d{2})",
                "$1-$2 $3",
                ["20"],
                "0$1",
                0,
                "$1 $2 $3",
              ],
              [
                "(\\d{3})(\\d{4})",
                "$1-$2",
                ["9(?:00|39|44|9)"],
                "0$1",
                0,
                "$1 $2",
              ],
              [
                "(\\d{2})(\\d{3})(\\d{2})",
                "$1-$2 $3",
                ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"],
                "0$1",
                0,
                "$1 $2 $3",
              ],
              [
                "(\\d)(\\d{2,3})(\\d{2})(\\d{2})",
                "$1-$2 $3 $4",
                ["8"],
                "0$1",
                0,
                "$1 $2 $3 $4",
              ],
              [
                "(\\d{3})(\\d{2,3})(\\d{2})",
                "$1-$2 $3",
                [
                  "1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])",
                ],
                "0$1",
                0,
                "$1 $2 $3",
              ],
              [
                "(\\d{3})(\\d{2,3})(\\d{3})",
                "$1-$2 $3",
                ["9(?:00|39|44)"],
                "0$1",
                0,
                "$1 $2 $3",
              ],
              [
                "(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})",
                "$1-$2 $3 $4",
                ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"],
                "0$1",
                0,
                "$1 $2 $3 $4",
              ],
              [
                "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                "$1-$2 $3 $4",
                ["10|7"],
                "0$1",
                0,
                "$1 $2 $3 $4",
              ],
              [
                "(\\d)(\\d{3})(\\d{3})(\\d{2})",
                "$1-$2 $3 $4",
                ["8"],
                "0$1",
                0,
                "$1 $2 $3 $4",
              ],
              [
                "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                "$1-$2 $3 $4",
                [
                  "[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])",
                ],
                "0$1",
                0,
                "$1 $2 $3 $4",
              ],
              [
                "(\\d{3})(\\d{2})(\\d{2})(\\d{3})",
                "$1-$2 $3 $4",
                ["9"],
                "0$1",
                0,
                "$1 $2 $3 $4",
              ],
              [
                "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                "$1-$2 $3 $4 $5",
                ["[26]"],
                "0$1",
                0,
                "$1 $2 $3 $4 $5",
              ],
            ],
            "0",
          ],
          SG: [
            "65",
            "0[0-3]\\d",
            "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}",
            [8, 10, 11],
            [
              ["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-9]|[1-9])"]],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
              ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]],
              ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]],
            ],
          ],
          SH: [
            "290",
            "00",
            "(?:[256]\\d|8)\\d{3}",
            [4, 5],
            0,
            0,
            0,
            0,
            0,
            0,
            "[256]",
          ],
          SI: [
            "386",
            "00|10(?:22|66|88|99)",
            "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}",
            [5, 6, 7, 8],
            [
              ["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"],
              ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"],
              [
                "(\\d{2})(\\d{3})(\\d{3})",
                "$1 $2 $3",
                ["[37][01]|4[0139]|51|6"],
                "0$1",
              ],
              [
                "(\\d)(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[1-57]"],
                "(0$1)",
              ],
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
          ],
          SJ: [
            "47",
            "00",
            "0\\d{4}|(?:[489]\\d|79)\\d{6}",
            [5, 8],
            0,
            0,
            0,
            0,
            0,
            0,
            "79",
          ],
          SK: [
            "421",
            "00",
            "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",
            [6, 7, 9],
            [
              ["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"],
              [
                "(\\d{2})(\\d{2})(\\d{2,3})",
                "$1 $2 $3",
                ["[3-5][1-8]1", "[3-5][1-8]1[67]"],
                "0$1",
              ],
              ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"],
              [
                "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                "$1/$2 $3 $4",
                ["[3-5]"],
                "0$1",
              ],
            ],
            "0",
          ],
          SL: [
            "232",
            "00",
            "(?:[237-9]\\d|66)\\d{6}",
            [8],
            [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]],
            "0",
          ],
          SM: [
            "378",
            "00",
            "(?:0549|[5-7]\\d)\\d{6}",
            [8, 10],
            [
              ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]],
              ["(\\d{4})(\\d{6})", "$1 $2", ["0"]],
            ],
            0,
            0,
            "([89]\\d{5})$",
            "0549$1",
          ],
          SN: [
            "221",
            "00",
            "(?:[378]\\d|93)\\d{7}",
            [9],
            [
              ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
              ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]],
            ],
          ],
          SO: [
            "252",
            "00",
            "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}",
            [6, 7, 8, 9],
            [
              ["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]],
              ["(\\d{6})", "$1", ["[134]"]],
              ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],
              ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]],
              ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|7[67]|9[2-9]"]],
            ],
            "0",
          ],
          SR: [
            "597",
            "00",
            "(?:[2-5]|[6-8]\\d|90)\\d{5}",
            [6, 7],
            [
              ["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]],
              ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]],
              ["(\\d{3})(\\d{4})", "$1-$2", ["[6-9]"]],
            ],
          ],
          SS: [
            "211",
            "00",
            "[19]\\d{8}",
            [9],
            [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]],
            "0",
          ],
          ST: [
            "239",
            "00",
            "(?:22|9\\d)\\d{5}",
            [7],
            [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]],
          ],
          SV: [
            "503",
            "00",
            "[267]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?",
            [7, 8, 11],
            [
              ["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]],
              ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]],
              ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]],
            ],
          ],
          SX: [
            "1",
            "011",
            "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "(5\\d{6})$|1",
            "721$1",
            0,
            "721",
          ],
          SY: [
            "963",
            "00",
            "[1-359]\\d{8}|[1-5]\\d{7}",
            [8, 9],
            [
              [
                "(\\d{2})(\\d{3})(\\d{3,4})",
                "$1 $2 $3",
                ["[1-4]|5[1-3]"],
                "0$1",
                1,
              ],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[59]"], "0$1", 1],
            ],
            "0",
          ],
          SZ: [
            "268",
            "00",
            "0800\\d{4}|(?:[237]\\d|900)\\d{6}",
            [8, 9],
            [
              ["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]],
              ["(\\d{5})(\\d{4})", "$1 $2", ["9"]],
            ],
          ],
          TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"],
          TC: [
            "1",
            "011",
            "(?:[58]\\d\\d|649|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-479]\\d{6})$|1",
            "649$1",
            0,
            "649",
          ],
          TD: [
            "235",
            "00|16",
            "(?:22|30|[689]\\d|77)\\d{6}",
            [8],
            [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[236-9]"]]],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
          ],
          TG: [
            "228",
            "00",
            "[279]\\d{7}",
            [8],
            [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]],
          ],
          TH: [
            "66",
            "00[1-9]",
            "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}",
            [8, 9, 10, 13],
            [
              ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"],
              ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]],
            ],
            "0",
          ],
          TJ: [
            "992",
            "810",
            "[0-57-9]\\d{8}",
            [9],
            [
              ["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]],
              ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]],
              ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3(?:[1245]|3[12])"]],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "8~10",
          ],
          TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]],
          TL: [
            "670",
            "00",
            "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}",
            [7, 8],
            [
              ["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]],
              ["(\\d{4})(\\d{4})", "$1 $2", ["7"]],
            ],
          ],
          TM: [
            "993",
            "810",
            "(?:[1-6]\\d|71)\\d{6}",
            [8],
            [
              [
                "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2-$3-$4",
                ["12"],
                "(8 $1)",
              ],
              [
                "(\\d{3})(\\d)(\\d{2})(\\d{2})",
                "$1 $2-$3-$4",
                ["[1-5]"],
                "(8 $1)",
              ],
              ["(\\d{2})(\\d{6})", "$1 $2", ["[67]"], "8 $1"],
            ],
            "8",
            0,
            0,
            0,
            0,
            0,
            0,
            "8~10",
          ],
          TN: [
            "216",
            "00",
            "[2-57-9]\\d{7}",
            [8],
            [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]],
          ],
          TO: [
            "676",
            "00",
            "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}",
            [5, 7],
            [
              [
                "(\\d{2})(\\d{3})",
                "$1-$2",
                ["[2-4]|50|6[09]|7[0-24-69]|8[05]"],
              ],
              ["(\\d{4})(\\d{3})", "$1 $2", ["0"]],
              ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]],
            ],
          ],
          TR: [
            "90",
            "00",
            "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}",
            [7, 10, 12, 13],
            [
              [
                "(\\d{3})(\\d{3})(\\d{4})",
                "$1 $2 $3",
                ["512|8[01589]|90"],
                "0$1",
                1,
              ],
              [
                "(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"],
                "0$1",
                1,
              ],
              [
                "(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[24][1-8]|3[1-9]"],
                "(0$1)",
                1,
              ],
              ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1],
            ],
            "0",
          ],
          TT: [
            "1",
            "011",
            "(?:[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-46-8]\\d{6})$|1",
            "868$1",
            0,
            "868",
          ],
          TV: [
            "688",
            "00",
            "(?:2|7\\d\\d|90)\\d{4}",
            [5, 6, 7],
            [
              ["(\\d{2})(\\d{3})", "$1 $2", ["2"]],
              ["(\\d{2})(\\d{4})", "$1 $2", ["90"]],
              ["(\\d{2})(\\d{5})", "$1 $2", ["7"]],
            ],
          ],
          TW: [
            "886",
            "0(?:0[25-79]|19)",
            "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}",
            [7, 8, 9, 10, 11],
            [
              ["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"],
              [
                "(\\d)(\\d{3,4})(\\d{4})",
                "$1 $2 $3",
                [
                  "[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]",
                  "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]",
                ],
                "0$1",
              ],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"],
              ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"],
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            "#",
          ],
          TZ: [
            "255",
            "00[056]",
            "(?:[25-8]\\d|41|90)\\d{7}",
            [9],
            [
              ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"],
              ["(\\d{2})(\\d{7})", "$1 $2", ["5"]],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"],
            ],
            "0",
          ],
          UA: [
            "380",
            "00",
            "[89]\\d{9}|[3-9]\\d{8}",
            [9, 10],
            [
              [
                "(\\d{3})(\\d{3})(\\d{3})",
                "$1 $2 $3",
                [
                  "6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]",
                  "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]",
                ],
                "0$1",
              ],
              [
                "(\\d{4})(\\d{5})",
                "$1 $2",
                [
                  "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])",
                  "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])",
                ],
                "0$1",
              ],
              [
                "(\\d{2})(\\d{3})(\\d{4})",
                "$1 $2 $3",
                ["[3-7]|89|9[1-9]"],
                "0$1",
              ],
              ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"],
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            0,
            "0~0",
          ],
          UG: [
            "256",
            "00[057]",
            "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}",
            [9],
            [
              ["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"],
              ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"],
              ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"],
            ],
            "0",
          ],
          US: [
            "1",
            "011",
            "[2-9]\\d{9}|3\\d{6}",
            [10],
            [
              ["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1],
              [
                "(\\d{3})(\\d{3})(\\d{4})",
                "($1) $2-$3",
                ["[2-9]"],
                0,
                1,
                "$1-$2-$3",
              ],
            ],
            "1",
            0,
            0,
            0,
            0,
            0,
            [
              [
                "(?:3052(?:0[0-8]|[1-9]\\d)|5056(?:[0-35-9]\\d|4[0-68]))\\d{4}|(?:2742|305[3-9]|(?:472|983)[2-47-9]|505[2-57-9])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-47-9]|1[02-9]|2[0135-79]|3[0-24679]|4[167]|5[0-2]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-269])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[0-247]|4[0378]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[0168]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\d{6}",
              ],
              [""],
              ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],
              ["900[2-9]\\d{6}"],
              [
                "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",
              ],
              0,
              0,
              0,
              ["305209\\d{4}"],
            ],
          ],
          UY: [
            "598",
            "0(?:0|1[3-9]\\d)",
            "0004\\d{2,9}|[1249]\\d{7}|2\\d{3,4}|(?:[49]\\d|80)\\d{5}",
            [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
            [
              ["(\\d{4,5})", "$1", ["21"]],
              ["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]],
              ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"],
              ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]],
              ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]],
              ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]],
            ],
            "0",
            0,
            0,
            0,
            0,
            0,
            0,
            "00",
            " int. ",
          ],
          UZ: [
            "998",
            "00",
            "(?:20|33|[5-9]\\d)\\d{7}",
            [9],
            [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"]]],
          ],
          VA: [
            "39",
            "00",
            "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",
            [6, 7, 8, 9, 10, 11, 12],
            0,
            0,
            0,
            0,
            0,
            0,
            "06698",
          ],
          VC: [
            "1",
            "011",
            "(?:[58]\\d\\d|784|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-7]\\d{6})$|1",
            "784$1",
            0,
            "784",
          ],
          VE: [
            "58",
            "00",
            "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}",
            [10],
            [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]],
            "0",
          ],
          VG: [
            "1",
            "011",
            "(?:284|[58]\\d\\d|900)\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-578]\\d{6})$|1",
            "284$1",
            0,
            "284",
          ],
          VI: [
            "1",
            "011",
            "[58]\\d{9}|(?:34|90)0\\d{7}",
            [10],
            0,
            "1",
            0,
            "([2-9]\\d{6})$|1",
            "340$1",
            0,
            "340",
          ],
          VN: [
            "84",
            "00",
            "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}",
            [7, 8, 9, 10],
            [
              ["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1],
              ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1],
              [
                "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["6"],
                "0$1",
                1,
              ],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1],
              ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1],
              ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1],
            ],
            "0",
          ],
          VU: [
            "678",
            "00",
            "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}",
            [5, 7],
            [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]],
          ],
          WF: [
            "681",
            "00",
            "(?:40|72|8\\d{4})\\d{4}|[89]\\d{5}",
            [6, 9],
            [
              ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[47-9]"]],
              ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]],
            ],
          ],
          WS: [
            "685",
            "0",
            "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}",
            [5, 6, 7, 10],
            [
              ["(\\d{5})", "$1", ["[2-5]|6[1-9]"]],
              ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]],
              ["(\\d{2})(\\d{5})", "$1 $2", ["7"]],
            ],
          ],
          XK: [
            "383",
            "00",
            "2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}",
            [8, 9, 10, 11, 12],
            [
              ["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2|39"], "0$1"],
              ["(\\d{2})(\\d{7,10})", "$1 $2", ["3"], "0$1"],
            ],
            "0",
          ],
          YE: [
            "967",
            "00",
            "(?:1|7\\d)\\d{7}|[1-7]\\d{6}",
            [7, 8, 9],
            [
              [
                "(\\d)(\\d{3})(\\d{3,4})",
                "$1 $2 $3",
                ["[1-6]|7(?:[24-6]|8[0-7])"],
                "0$1",
              ],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"],
            ],
            "0",
          ],
          YT: [
            "262",
            "00",
            "7093\\d{5}|(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}",
            [9],
            0,
            "0",
            0,
            0,
            0,
            0,
            0,
            [
              ["269(?:0[0-467]|15|5[0-4]|6\\d|[78]0)\\d{4}"],
              [
                "(?:639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])|7093[5-7])\\d{4}",
              ],
              ["80\\d{7}"],
              0,
              0,
              0,
              0,
              0,
              ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"],
            ],
          ],
          ZA: [
            "27",
            "00",
            "[1-79]\\d{8}|8\\d{4,9}",
            [5, 6, 7, 8, 9, 10],
            [
              ["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"],
            ],
            "0",
          ],
          ZM: [
            "260",
            "00",
            "800\\d{6}|(?:21|[579]\\d|63)\\d{7}",
            [9],
            [
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"],
              ["(\\d{2})(\\d{7})", "$1 $2", ["[579]"], "0$1"],
            ],
            "0",
          ],
          ZW: [
            "263",
            "00",
            "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}",
            [5, 6, 7, 8, 9, 10],
            [
              [
                "(\\d{3})(\\d{3,5})",
                "$1 $2",
                [
                  "2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]",
                ],
                "0$1",
              ],
              ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"],
              ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"],
              [
                "(\\d{2})(\\d{7})",
                "$1 $2",
                [
                  "24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2",
                  "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]",
                ],
                "(0$1)",
              ],
              ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
              [
                "(\\d{3})(\\d{3})(\\d{3,4})",
                "$1 $2 $3",
                [
                  "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)",
                  "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)",
                ],
                "0$1",
              ],
              ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"],
              [
                "(\\d{2})(\\d{3,5})",
                "$1 $2",
                [
                  "1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]",
                ],
                "0$1",
              ],
              [
                "(\\d{2})(\\d{3})(\\d{3,4})",
                "$1 $2 $3",
                ["29[013-9]|39|54"],
                "0$1",
              ],
              [
                "(\\d{4})(\\d{3,5})",
                "$1 $2",
                ["(?:25|54)8", "258|5483"],
                "0$1",
              ],
            ],
            "0",
          ],
        },
        nonGeographic: {
          800: [
            "800",
            0,
            "(?:00|[1-9]\\d)\\d{6}",
            [8],
            [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]],
            0,
            0,
            0,
            0,
            0,
            0,
            [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]],
          ],
          808: [
            "808",
            0,
            "[1-9]\\d{7}",
            [8],
            [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]],
            0,
            0,
            0,
            0,
            0,
            0,
            [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]],
          ],
          870: [
            "870",
            0,
            "7\\d{11}|[235-7]\\d{8}",
            [9, 12],
            [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-7]"]]],
            0,
            0,
            0,
            0,
            0,
            0,
            [
              0,
              ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"],
              0,
              0,
              0,
              0,
              0,
              0,
              ["2\\d{8}", [9]],
            ],
          ],
          878: [
            "878",
            0,
            "10\\d{10}",
            [12],
            [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]],
            0,
            0,
            0,
            0,
            0,
            0,
            [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]],
          ],
          881: [
            "881",
            0,
            "6\\d{9}|[0-36-9]\\d{8}",
            [9, 10],
            [
              ["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]],
              ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            [0, ["6\\d{9}|[0-36-9]\\d{8}"]],
          ],
          882: [
            "882",
            0,
            "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?",
            [7, 8, 9, 10, 11, 12],
            [
              ["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]],
              ["(\\d{2})(\\d{6})", "$1 $2", ["49"]],
              ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]],
              ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]],
              ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]],
              [
                "(\\d{2})(\\d{4})(\\d{4})",
                "$1 $2 $3",
                ["10|23|3(?:[15]|4[57])|4|51"],
              ],
              ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]],
              ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            [
              0,
              [
                "342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}",
                [7, 8, 9, 10, 12],
              ],
              0,
              0,
              0,
              ["348[57]\\d{7}", [11]],
              0,
              0,
              [
                "1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}",
              ],
            ],
          ],
          883: [
            "883",
            0,
            "(?:[1-4]\\d|51)\\d{6,10}",
            [8, 9, 10, 11, 12],
            [
              [
                "(\\d{3})(\\d{3})(\\d{2,8})",
                "$1 $2 $3",
                ["[14]|2[24-689]|3[02-689]|51[24-9]"],
              ],
              ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]],
              ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]],
              ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]],
              ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]],
            ],
            0,
            0,
            0,
            0,
            0,
            0,
            [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              [
                "(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}",
              ],
            ],
          ],
          888: [
            "888",
            0,
            "\\d{11}",
            [11],
            [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]],
            0,
            0,
            0,
            0,
            0,
            0,
            [0, 0, 0, 0, 0, 0, ["\\d{11}"]],
          ],
          979: [
            "979",
            0,
            "[1359]\\d{8}",
            [9],
            [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]],
            0,
            0,
            0,
            0,
            0,
            0,
            [0, 0, 0, ["[1359]\\d{8}"]],
          ],
        },
      };
    },
    859: function (t, e, n) {
      "use strict";
      n.d(e, { Q: () => tD });
      var a,
        r,
        i,
        d,
        o,
        l,
        s,
        u,
        f,
        c,
        $,
        m,
        h,
        g,
        p = n(111),
        y = n(757);
      function v(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, a = Array(e); n < e; n++) a[n] = t[n];
        return a;
      }
      function b(t, e) {
        return (function t(e, n, a) {
          var r = a.type(n),
            i = (r && r.possibleLengths()) || a.possibleLengths();
          if (!i) return "IS_POSSIBLE";
          if ("FIXED_LINE_OR_MOBILE" === n) {
            if (!a.type("FIXED_LINE")) return t(e, "MOBILE", a);
            var d = a.type("MOBILE");
            d &&
              (i = (function (t, e) {
                for (
                  var n,
                    a = t.slice(),
                    r = (function (t, e) {
                      var n =
                        ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                        t["@@iterator"];
                      if (n) return (n = n.call(t)).next.bind(n);
                      if (
                        Array.isArray(t) ||
                        (n = (function (t, e) {
                          if (t) {
                            if ("string" == typeof t) return v(t, void 0);
                            var n = {}.toString.call(t).slice(8, -1);
                            return (
                              "Object" === n &&
                                t.constructor &&
                                (n = t.constructor.name),
                              "Map" === n || "Set" === n
                                ? Array.from(t)
                                : "Arguments" === n ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                      n,
                                    )
                                  ? v(t, e)
                                  : void 0
                            );
                          }
                        })(t))
                      ) {
                        n && (t = n);
                        var a = 0;
                        return function () {
                          return a >= t.length
                            ? { done: !0 }
                            : { done: !1, value: t[a++] };
                        };
                      }
                      throw TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                      );
                    })(e);
                  !(n = r()).done;

                ) {
                  var i = n.value;
                  0 > t.indexOf(i) && a.push(i);
                }
                return a.sort(function (t, e) {
                  return t - e;
                });
              })(i, d.possibleLengths()));
          } else if (n && !r) return "INVALID_LENGTH";
          var o = e.length,
            l = i[0];
          return l === o
            ? "IS_POSSIBLE"
            : l > o
              ? "TOO_SHORT"
              : i[i.length - 1] < o
                ? "TOO_LONG"
                : i.indexOf(o, 1) >= 0
                  ? "IS_POSSIBLE"
                  : "INVALID_LENGTH";
        })(t, void 0, e);
      }
      function x(t, e) {
        return ((t = t || ""), RegExp("^(?:" + e + ")$").test(t));
      }
      function C(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, a = Array(e); n < e; n++) a[n] = t[n];
        return a;
      }
      var N = [
        "MOBILE",
        "PREMIUM_RATE",
        "TOLL_FREE",
        "SHARED_COST",
        "VOIP",
        "PERSONAL_NUMBER",
        "PAGER",
        "UAN",
        "VOICEMAIL",
      ];
      function P(t, e, n) {
        if (((e = e || {}), t.country || t.countryCallingCode)) {
          (n = new y.Ay(n)).selectNumberingPlan(
            t.country,
            t.countryCallingCode,
          );
          var a = e.v2 ? t.nationalNumber : t.phone;
          if (x(a, n.nationalNumberPattern())) {
            if (S(a, "FIXED_LINE", n))
              return (n.type("MOBILE") && "" === n.type("MOBILE").pattern()) ||
                !n.type("MOBILE") ||
                S(a, "MOBILE", n)
                ? "FIXED_LINE_OR_MOBILE"
                : "FIXED_LINE";
            for (
              var r,
                i = (function (t, e) {
                  var n =
                    ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
                  if (n) return (n = n.call(t)).next.bind(n);
                  if (
                    Array.isArray(t) ||
                    (n = (function (t, e) {
                      if (t) {
                        if ("string" == typeof t) return C(t, void 0);
                        var n = {}.toString.call(t).slice(8, -1);
                        return (
                          "Object" === n &&
                            t.constructor &&
                            (n = t.constructor.name),
                          "Map" === n || "Set" === n
                            ? Array.from(t)
                            : "Arguments" === n ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                  n,
                                )
                              ? C(t, e)
                              : void 0
                        );
                      }
                    })(t))
                  ) {
                    n && (t = n);
                    var a = 0;
                    return function () {
                      return a >= t.length
                        ? { done: !0 }
                        : { done: !1, value: t[a++] };
                    };
                  }
                  throw TypeError(
                    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                  );
                })(N);
              !(r = i()).done;

            ) {
              var d = r.value;
              if (S(a, d, n)) return d;
            }
          }
        }
      }
      function S(t, e, n) {
        return (
          !(
            !(e = n.type(e)) ||
            !e.pattern() ||
            (e.possibleLengths() && 0 > e.possibleLengths().indexOf(t.length))
          ) && x(t, e.pattern())
        );
      }
      var w = "0-9０-９٠-٩۰-۹",
        k = ""
          .concat("-‐-―−ー－")
          .concat("／/")
          .concat("．.")
          .concat(" \xa0\xad​⁠　")
          .concat("()（）［］\\[\\]")
          .concat("~⁓∼～"),
        A = RegExp("([" + w + "])");
      function I(t, e, n, a) {
        if (e) {
          var r = new y.Ay(a);
          r.selectNumberingPlan(e, n);
          var i = new RegExp(r.IDDPrefix());
          if (0 === t.search(i)) {
            var d = (t = t.slice(t.match(i)[0].length)).match(A);
            if (!d || null == d[1] || !(d[1].length > 0) || "0" !== d[1])
              return t;
          }
        }
      }
      function E(t, e) {
        if (t && e.numberingPlan.nationalPrefixForParsing()) {
          var n = RegExp(
              "^(?:" + e.numberingPlan.nationalPrefixForParsing() + ")",
            ),
            a = n.exec(t);
          if (a) {
            var r,
              i,
              d,
              o = a.length - 1,
              l = o > 0 && a[o];
            if (e.nationalPrefixTransformRule() && l)
              ((r = t.replace(n, e.nationalPrefixTransformRule())),
                o > 1 && (i = a[1]));
            else {
              var s = a[0];
              ((r = t.slice(s.length)), l && (i = a[1]));
            }
            if (l) {
              var u = t.indexOf(a[1]);
              t.slice(0, u) === e.numberingPlan.nationalPrefix() &&
                (d = e.numberingPlan.nationalPrefix());
            } else d = a[0];
            return { nationalNumber: r, nationalPrefix: d, carrierCode: i };
          }
        }
        return { nationalNumber: t };
      }
      function F(t, e) {
        var n,
          a,
          r,
          i = E(t, e),
          d = i.carrierCode,
          o = i.nationalNumber;
        return o !== t &&
          ((n = t),
          (a = o),
          !(
            !x(n, (r = e).nationalNumberPattern()) ||
            x(a, r.nationalNumberPattern())
          ) ||
            (e.possibleLengths() &&
              !(function (t, e) {
                switch (b(t, e)) {
                  case "TOO_SHORT":
                  case "INVALID_LENGTH":
                    return !1;
                  default:
                    return !0;
                }
              })(o, e)))
          ? { nationalNumber: t }
          : { nationalNumber: o, carrierCode: d };
      }
      function O(t, e, n, a) {
        var r = e ? (0, y.Ko)(e, a) : n;
        if (0 === t.indexOf(r)) {
          (a = new y.Ay(a)).selectNumberingPlan(e, n);
          var i = t.slice(r.length),
            d = F(i, a).nationalNumber,
            o = F(t, a).nationalNumber;
          if (
            (!x(o, a.nationalNumberPattern()) &&
              x(d, a.nationalNumberPattern())) ||
            "TOO_LONG" === b(o, a)
          )
            return { countryCallingCode: r, number: i };
        }
        return { number: t };
      }
      function j(t, e, n, a) {
        if (!t) return {};
        if ("+" !== t[0]) {
          var r,
            i = I(t, e, n, a);
          if (i && i !== t) ((r = !0), (t = "+" + i));
          else {
            if (e || n) {
              var d = O(t, e, n, a),
                o = d.countryCallingCode,
                l = d.number;
              if (o)
                return {
                  countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
                  countryCallingCode: o,
                  number: l,
                };
            }
            return { number: t };
          }
        }
        if ("0" === t[1]) return {};
        a = new y.Ay(a);
        for (var s = 2; s - 1 <= 3 && s <= t.length; ) {
          var u = t.slice(1, s);
          if (a.hasCallingCode(u))
            return (
              a.selectNumberingPlan(u),
              {
                countryCallingCodeSource: r
                  ? "FROM_NUMBER_WITH_IDD"
                  : "FROM_NUMBER_WITH_PLUS_SIGN",
                countryCallingCode: u,
                number: t.slice(s),
              }
            );
          s++;
        }
        return {};
      }
      var M = n(102);
      function T(t) {
        return t.replace(RegExp("[".concat(k, "]+"), "g"), " ").trim();
      }
      var D = /(\$\d)/;
      function L(t, e, n) {
        var a = n.useInternationalFormat,
          r = n.withNationalPrefix;
        (n.carrierCode, n.metadata);
        var i = t.replace(
          new RegExp(e.pattern()),
          a
            ? e.internationalFormat()
            : r && e.nationalPrefixFormattingRule()
              ? e.format().replace(D, e.nationalPrefixFormattingRule())
              : e.format(),
        );
        return a ? T(i) : i;
      }
      var R = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
      function z(t) {
        return (z =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function _(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, a = Array(e); n < e; n++) a[n] = t[n];
        return a;
      }
      function B(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t);
          (e &&
            (a = a.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, a));
        }
        return n;
      }
      function W(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? B(Object(n), !0).forEach(function (e) {
                var a, r, i;
                ((a = t),
                  (r = e),
                  (i = n[e]),
                  (r = (function (t) {
                    var e = (function (t, e) {
                      if ("object" != z(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var a = n.call(t, e || "default");
                        if ("object" != z(a)) return a;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == z(e) ? e : e + "";
                  })(r)) in a
                    ? Object.defineProperty(a, r, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (a[r] = i));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : B(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      var G = {
        formatExtension: function (t, e, n) {
          return "".concat(t).concat(n.ext()).concat(e);
        },
      };
      function U(t, e, n, a, r) {
        var i = (function (t, e) {
          for (
            var n,
              a = (function (t, e) {
                var n =
                  ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
                if (n) return (n = n.call(t)).next.bind(n);
                if (
                  Array.isArray(t) ||
                  (n = (function (t, e) {
                    if (t) {
                      if ("string" == typeof t) return _(t, void 0);
                      var n = {}.toString.call(t).slice(8, -1);
                      return (
                        "Object" === n &&
                          t.constructor &&
                          (n = t.constructor.name),
                        "Map" === n || "Set" === n
                          ? Array.from(t)
                          : "Arguments" === n ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                            ? _(t, e)
                            : void 0
                      );
                    }
                  })(t))
                ) {
                  n && (t = n);
                  var a = 0;
                  return function () {
                    return a >= t.length
                      ? { done: !0 }
                      : { done: !1, value: t[a++] };
                  };
                }
                throw TypeError(
                  "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
              })(t);
            !(n = a()).done;

          ) {
            var r = n.value;
            if (r.leadingDigitsPatterns().length > 0) {
              var i =
                r.leadingDigitsPatterns()[r.leadingDigitsPatterns().length - 1];
              if (0 !== e.search(i)) continue;
            }
            if (x(e, r.pattern())) return r;
          }
        })(a.formats(), t);
        return i
          ? L(t, i, {
              useInternationalFormat: "INTERNATIONAL" === n,
              withNationalPrefix:
                !i.nationalPrefixIsOptionalWhenFormattingInNationalFormat() ||
                !r ||
                !1 !== r.nationalPrefix,
              carrierCode: e,
              metadata: a,
            })
          : t;
      }
      function K(t) {
        return (K =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function H(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t);
          (e &&
            (a = a.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, a));
        }
        return n;
      }
      function V(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? H(Object(n), !0).forEach(function (e) {
                var a, r, i;
                ((a = t),
                  (r = e),
                  (i = n[e]),
                  (r = Y(r)) in a
                    ? Object.defineProperty(a, r, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (a[r] = i));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : H(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e),
                  );
                });
        }
        return t;
      }
      function Y(t) {
        var e = (function (t, e) {
          if ("object" != K(t) || !t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var a = n.call(t, e || "default");
            if ("object" != K(a)) return a;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == K(e) ? e : e + "";
      }
      var J =
          ((a = function t(e, n, a) {
            if (!(this instanceof t))
              throw TypeError("Cannot call a class as a function");
            if (!e) throw TypeError("First argument is required");
            if ("string" != typeof e)
              throw TypeError("First argument must be a string");
            if ("+" === e[0] && !n)
              throw TypeError("`metadata` argument not passed");
            if ((0, M.A)(n) && (0, M.A)(n.countries)) {
              a = n;
              var r = e;
              if (!Z.test(r))
                throw Error(
                  'Invalid `number` argument passed: must consist of a "+" followed by digits',
                );
              var i = j(r, void 0, void 0, a),
                d = i.countryCallingCode;
              if (((n = i.number), (e = d), !n))
                throw Error("Invalid `number` argument passed: too short");
            }
            if (!n) throw TypeError("`nationalNumber` argument is required");
            if ("string" != typeof n)
              throw TypeError("`nationalNumber` argument must be a string");
            (0, y.aR)(a);
            var o = (function (t, e) {
                var n,
                  a,
                  r = new y.Ay(e);
                return (
                  /^[A-Z]{2}$/.test(t)
                    ? ((n = t),
                      r.selectNumberingPlan(n),
                      (a = r.countryCallingCode()))
                    : (a = t),
                  { country: n, countryCallingCode: a }
                );
              })(e, a),
              l = o.country,
              s = o.countryCallingCode;
            ((this.country = l),
              (this.countryCallingCode = s),
              (this.nationalNumber = n),
              (this.number =
                "+" + this.countryCallingCode + this.nationalNumber),
              (this.getMetadata = function () {
                return a;
              }));
          }),
          (r = [
            {
              key: "setExt",
              value: function (t) {
                this.ext = t;
              },
            },
            {
              key: "getPossibleCountries",
              value: function () {
                var t, e, n, a;
                return this.country
                  ? [this.country]
                  : ((t = this.countryCallingCode),
                    (e = this.nationalNumber),
                    (n = this.getMetadata()),
                    (a = new y.Ay(n).getCountryCodesForCallingCode(t))
                      ? a.filter(function (t) {
                          var a, r, i, d;
                          return (
                            (a = e),
                            (r = t),
                            (i = n),
                            (d = new y.Ay(i)).selectNumberingPlan(r),
                            d.numberingPlan
                              .possibleLengths()
                              .indexOf(a.length) >= 0
                          );
                        })
                      : []);
              },
            },
            {
              key: "isPossible",
              value: function () {
                return (function (t, e, n) {
                  if ((void 0 === e && (e = {}), (n = new y.Ay(n)), e.v2)) {
                    if (!t.countryCallingCode)
                      throw Error("Invalid phone number object passed");
                    n.selectNumberingPlan(t.countryCallingCode);
                  } else {
                    if (!t.phone) return !1;
                    if (t.country) {
                      if (!n.hasCountry(t.country))
                        throw Error("Unknown country: ".concat(t.country));
                      n.country(t.country);
                    } else {
                      if (!t.countryCallingCode)
                        throw Error("Invalid phone number object passed");
                      n.selectNumberingPlan(t.countryCallingCode);
                    }
                  }
                  if (n.possibleLengths()) {
                    var a;
                    return (
                      (a = t.phone || t.nationalNumber),
                      "IS_POSSIBLE" === b(a, n)
                    );
                  }
                  if (
                    t.countryCallingCode &&
                    n.isNonGeographicCallingCode(t.countryCallingCode)
                  )
                    return !0;
                  throw Error(
                    'Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.',
                  );
                })(this, { v2: !0 }, this.getMetadata());
              },
            },
            {
              key: "isValid",
              value: function () {
                var t, e;
                return (
                  (t = { v2: !0 }),
                  (e = this.getMetadata()),
                  ((t = t || {}),
                  (e = new y.Ay(e)).selectNumberingPlan(
                    this.country,
                    this.countryCallingCode,
                  ),
                  e.hasTypes())
                    ? void 0 !== P(this, t, e.metadata)
                    : x(
                        t.v2 ? this.nationalNumber : this.phone,
                        e.nationalNumberPattern(),
                      )
                );
              },
            },
            {
              key: "isNonGeographic",
              value: function () {
                return new y.Ay(this.getMetadata()).isNonGeographicCallingCode(
                  this.countryCallingCode,
                );
              },
            },
            {
              key: "isEqual",
              value: function (t) {
                return this.number === t.number && this.ext === t.ext;
              },
            },
            {
              key: "getType",
              value: function () {
                return P(this, { v2: !0 }, this.getMetadata());
              },
            },
            {
              key: "format",
              value: function (t, e) {
                return (function (t, e, n, a) {
                  if (
                    ((n = n ? W(W({}, G), n) : G),
                    (a = new y.Ay(a)),
                    t.country && "001" !== t.country)
                  ) {
                    if (!a.hasCountry(t.country))
                      throw Error("Unknown country: ".concat(t.country));
                    a.country(t.country);
                  } else {
                    if (!t.countryCallingCode) return t.phone || "";
                    a.selectNumberingPlan(t.countryCallingCode);
                  }
                  var r,
                    i,
                    d,
                    o,
                    l,
                    s,
                    u,
                    f,
                    c,
                    $,
                    m,
                    h,
                    g,
                    p = a.countryCallingCode(),
                    v = n.v2 ? t.nationalNumber : t.phone;
                  switch (e) {
                    case "NATIONAL":
                      if (!v) return "";
                      return (
                        (r = g = U(v, t.carrierCode, "NATIONAL", a, n)),
                        (i = t.ext),
                        (d = a),
                        (o = n.formatExtension),
                        i ? o(r, i, d) : r
                      );
                    case "INTERNATIONAL":
                      if (!v) return "+".concat(p);
                      return (
                        (g = U(v, null, "INTERNATIONAL", a, n)),
                        (l = g = "+".concat(p, " ").concat(g)),
                        (s = t.ext),
                        (u = a),
                        (f = n.formatExtension),
                        s ? f(l, s, u) : l
                      );
                    case "E.164":
                      return "+".concat(p).concat(v);
                    case "RFC3966":
                      var b = { number: "+".concat(p).concat(v), ext: t.ext },
                        x = b.number,
                        C = b.ext;
                      if (!x) return "";
                      if ("+" !== x[0])
                        throw Error(
                          '"formatRFC3966()" expects "number" to be in E.164 format.',
                        );
                      return "tel:".concat(x).concat(C ? ";ext=" + C : "");
                    case "IDD":
                      if (!n.fromCountry) return;
                      return (
                        (c = (function (t, e, n, a, r) {
                          if ((0, y.Ko)(a, r.metadata) === n) {
                            var i,
                              d,
                              o,
                              l = U(t, e, "NATIONAL", r);
                            return "1" === n ? n + " " + l : l;
                          }
                          var s =
                            ((i = void 0),
                            (d = r.metadata),
                            ((o = new y.Ay(d)).selectNumberingPlan(a, i),
                            o.defaultIDDPrefix())
                              ? o.defaultIDDPrefix()
                              : R.test(o.IDDPrefix())
                                ? o.IDDPrefix()
                                : void 0);
                          if (s)
                            return ""
                              .concat(s, " ")
                              .concat(n, " ")
                              .concat(U(t, null, "INTERNATIONAL", r));
                        })(v, t.carrierCode, p, n.fromCountry, a)),
                        ($ = t.ext),
                        (m = a),
                        (h = n.formatExtension),
                        $ ? h(c, $, m) : c
                      );
                    default:
                      throw Error(
                        'Unknown "format" argument passed to "formatNumber()": "'.concat(
                          e,
                          '"',
                        ),
                      );
                  }
                })(
                  this,
                  t,
                  e ? V(V({}, e), {}, { v2: !0 }) : { v2: !0 },
                  this.getMetadata(),
                );
              },
            },
            {
              key: "formatNational",
              value: function (t) {
                return this.format("NATIONAL", t);
              },
            },
            {
              key: "formatInternational",
              value: function (t) {
                return this.format("INTERNATIONAL", t);
              },
            },
            {
              key: "getURI",
              value: function (t) {
                return this.format("RFC3966", t);
              },
            },
          ]),
          (function (t, e) {
            for (var n = 0; n < e.length; n++) {
              var a = e[n];
              ((a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(t, Y(a.key), a));
            }
          })(a.prototype, r),
          Object.defineProperty(a, "prototype", { writable: !1 }),
          a),
        Z = /^\+\d+$/;
      function X(t) {
        return (X =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var q =
        ((i = function t(e) {
          var n = e.onCountryChange,
            a = e.onCallingCodeChange;
          if (!(this instanceof t))
            throw TypeError("Cannot call a class as a function");
          ((this.onCountryChange = n), (this.onCallingCodeChange = a));
        }),
        (d = [
          {
            key: "reset",
            value: function (t) {
              var e = t.country,
                n = t.callingCode;
              ((this.international = !1),
                (this.missingPlus = !1),
                (this.IDDPrefix = void 0),
                (this.callingCode = void 0),
                (this.digits = ""),
                this.resetNationalSignificantNumber(),
                this.initCountryAndCallingCode(e, n));
            },
          },
          {
            key: "resetNationalSignificantNumber",
            value: function () {
              ((this.nationalSignificantNumber = this.getNationalDigits()),
                (this.nationalSignificantNumberMatchesInput = !0),
                (this.nationalPrefix = void 0),
                (this.carrierCode = void 0),
                (this.complexPrefixBeforeNationalSignificantNumber = void 0));
            },
          },
          {
            key: "update",
            value: function (t) {
              for (var e = 0, n = Object.keys(t); e < n.length; e++) {
                var a = n[e];
                this[a] = t[a];
              }
            },
          },
          {
            key: "initCountryAndCallingCode",
            value: function (t, e) {
              (this.setCountry(t), this.setCallingCode(e));
            },
          },
          {
            key: "setCountry",
            value: function (t) {
              ((this.country = t), this.onCountryChange(t));
            },
          },
          {
            key: "setCallingCode",
            value: function (t) {
              ((this.callingCode = t),
                this.onCallingCodeChange(t, this.country));
            },
          },
          {
            key: "startInternationalNumber",
            value: function (t, e) {
              ((this.international = !0), this.initCountryAndCallingCode(t, e));
            },
          },
          {
            key: "appendDigits",
            value: function (t) {
              this.digits += t;
            },
          },
          {
            key: "appendNationalSignificantNumberDigits",
            value: function (t) {
              this.nationalSignificantNumber += t;
            },
          },
          {
            key: "getNationalDigits",
            value: function () {
              return this.international
                ? this.digits.slice(
                    (this.IDDPrefix ? this.IDDPrefix.length : 0) +
                      (this.callingCode ? this.callingCode.length : 0),
                  )
                : this.digits;
            },
          },
          {
            key: "getDigitsWithoutInternationalPrefix",
            value: function () {
              return this.international && this.IDDPrefix
                ? this.digits.slice(this.IDDPrefix.length)
                : this.digits;
            },
          },
        ]),
        (function (t, e) {
          for (var n = 0; n < e.length; n++) {
            var a = e[n];
            ((a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              "value" in a && (a.writable = !0),
              Object.defineProperty(
                t,
                (function (t) {
                  var e = (function (t, e) {
                    if ("object" != X(t) || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                      var a = n.call(t, e || "default");
                      if ("object" != X(a)) return a;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === e ? String : Number)(t);
                  })(t, "string");
                  return "symbol" == X(e) ? e : e + "";
                })(a.key),
                a,
              ));
          }
        })(i.prototype, d),
        Object.defineProperty(i, "prototype", { writable: !1 }),
        i);
      function Q(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, a = Array(e); n < e; n++) a[n] = t[n];
        return a;
      }
      var tt = /x/;
      function te(t, e) {
        if (e < 1) return "";
        for (var n = ""; e > 1; ) (1 & e && (n += t), (e >>= 1), (t += t));
        return n + t;
      }
      function tn(t, e) {
        return (
          ")" === t[e] && e++,
          (function (t) {
            for (var e = [], n = 0; n < t.length; )
              ("(" === t[n] ? e.push(n) : ")" === t[n] && e.pop(), n++);
            var a = 0,
              r = "";
            e.push(t.length);
            for (var i = 0; i < e.length; i++) {
              var d = e[i];
              ((r += t.slice(a, d)), (a = d + 1));
            }
            return r;
          })(t.slice(0, e))
        );
      }
      function ta(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, a = Array(e); n < e; n++) a[n] = t[n];
        return a;
      }
      var tr = {
        0: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        "０": "0",
        "１": "1",
        "２": "2",
        "３": "3",
        "４": "4",
        "５": "5",
        "６": "6",
        "７": "7",
        "８": "8",
        "９": "9",
        "٠": "0",
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        "۰": "0",
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
      };
      function ti(t) {
        for (
          var e,
            n = "",
            a = (function (t, e) {
              var n =
                ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                t["@@iterator"];
              if (n) return (n = n.call(t)).next.bind(n);
              if (
                Array.isArray(t) ||
                (n = (function (t, e) {
                  if (t) {
                    if ("string" == typeof t) return ta(t, void 0);
                    var n = {}.toString.call(t).slice(8, -1);
                    return (
                      "Object" === n &&
                        t.constructor &&
                        (n = t.constructor.name),
                      "Map" === n || "Set" === n
                        ? Array.from(t)
                        : "Arguments" === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? ta(t, e)
                          : void 0
                    );
                  }
                })(t))
              ) {
                n && (t = n);
                var a = 0;
                return function () {
                  return a >= t.length
                    ? { done: !0 }
                    : { done: !1, value: t[a++] };
                };
              }
              throw TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })(t.split(""));
          !(e = a()).done;

        ) {
          var r = tr[e.value];
          r && (n += r);
        }
        return n;
      }
      function td(t, e, n) {
        var a,
          r,
          i = n.metadata,
          d = n.useNationalPrefixFormattingRule,
          o = n.getSeparatorAfterNationalPrefix,
          l = L(t.nationalSignificantNumber, e, {
            carrierCode: t.carrierCode,
            useInternationalFormat: t.international,
            withNationalPrefix: d,
            metadata: i,
          });
        if (
          (!d &&
            (t.nationalPrefix
              ? (l = t.nationalPrefix + o(e) + l)
              : t.complexPrefixBeforeNationalSignificantNumber &&
                (l = t.complexPrefixBeforeNationalSignificantNumber + " " + l)),
          (a = l),
          (r = t),
          ti(a) === r.getNationalDigits())
        )
          return l;
      }
      function to(t) {
        return (to =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var tl =
          ((o = function t() {
            if (!(this instanceof t))
              throw TypeError("Cannot call a class as a function");
          }),
          (l = [
            {
              key: "parse",
              value: function (t) {
                if (
                  ((this.context = [{ or: !0, instructions: [] }]),
                  this.parsePattern(t),
                  1 !== this.context.length)
                )
                  throw Error(
                    "Non-finalized contexts left when pattern parse ended",
                  );
                var e = this.context[0],
                  n = e.branches,
                  a = e.instructions;
                if (n) return { op: "|", args: n.concat([tf(a)]) };
                if (0 === a.length) throw Error("Pattern is required");
                return 1 === a.length ? a[0] : a;
              },
            },
            {
              key: "startContext",
              value: function (t) {
                this.context.push(t);
              },
            },
            {
              key: "endContext",
              value: function () {
                this.context.pop();
              },
            },
            {
              key: "getContext",
              value: function () {
                return this.context[this.context.length - 1];
              },
            },
            {
              key: "parsePattern",
              value: function (t) {
                if (!t) throw Error("Pattern is required");
                var e = t.match(tu);
                if (!e) {
                  if (ts.test(t))
                    throw Error(
                      "Illegal characters found in a pattern: ".concat(t),
                    );
                  this.getContext().instructions =
                    this.getContext().instructions.concat(t.split(""));
                  return;
                }
                var n = e[1],
                  a = t.slice(0, e.index),
                  r = t.slice(e.index + n.length);
                switch (n) {
                  case "(?:":
                    (a && this.parsePattern(a),
                      this.startContext({
                        or: !0,
                        instructions: [],
                        branches: [],
                      }));
                    break;
                  case ")":
                    if (!this.getContext().or)
                      throw Error(
                        '")" operator must be preceded by "(?:" operator',
                      );
                    if (
                      (a && this.parsePattern(a),
                      0 === this.getContext().instructions.length)
                    )
                      throw Error(
                        'No instructions found after "|" operator in an "or" group',
                      );
                    var i = this.getContext().branches;
                    (i.push(tf(this.getContext().instructions)),
                      this.endContext(),
                      this.getContext().instructions.push({
                        op: "|",
                        args: i,
                      }));
                    break;
                  case "|":
                    if (!this.getContext().or)
                      throw Error(
                        '"|" operator can only be used inside "or" groups',
                      );
                    if (
                      (a && this.parsePattern(a), !this.getContext().branches)
                    )
                      if (1 === this.context.length)
                        this.getContext().branches = [];
                      else
                        throw Error(
                          '"branches" not found in an "or" group context',
                        );
                    (this.getContext().branches.push(
                      tf(this.getContext().instructions),
                    ),
                      (this.getContext().instructions = []));
                    break;
                  case "[":
                    (a && this.parsePattern(a),
                      this.startContext({ oneOfSet: !0 }));
                    break;
                  case "]":
                    if (!this.getContext().oneOfSet)
                      throw Error(
                        '"]" operator must be preceded by "[" operator',
                      );
                    (this.endContext(),
                      this.getContext().instructions.push({
                        op: "[]",
                        args: (function (t) {
                          for (var e = [], n = 0; n < t.length; ) {
                            if ("-" === t[n]) {
                              if (0 === n || n === t.length - 1)
                                throw Error(
                                  "Couldn't parse a one-of set pattern: ".concat(
                                    t,
                                  ),
                                );
                              for (
                                var a = t[n - 1].charCodeAt(0) + 1,
                                  r = t[n + 1].charCodeAt(0) - 1,
                                  i = a;
                                i <= r;

                              )
                                (e.push(String.fromCharCode(i)), i++);
                            } else e.push(t[n]);
                            n++;
                          }
                          return e;
                        })(a),
                      }));
                    break;
                  default:
                    throw Error("Unknown operator: ".concat(n));
                }
                r && this.parsePattern(r);
              },
            },
          ]),
          (function (t, e) {
            for (var n = 0; n < e.length; n++) {
              var a = e[n];
              ((a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(
                  t,
                  (function (t) {
                    var e = (function (t, e) {
                      if ("object" != to(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var a = n.call(t, e || "default");
                        if ("object" != to(a)) return a;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == to(e) ? e : e + "";
                  })(a.key),
                  a,
                ));
            }
          })(o.prototype, l),
          Object.defineProperty(o, "prototype", { writable: !1 }),
          o),
        ts = /[\(\)\[\]\?\:\|]/,
        tu = RegExp("(\\||\\(\\?\\:|\\)|\\[|\\])");
      function tf(t) {
        return 1 === t.length ? t[0] : t;
      }
      function tc(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (n) return (n = n.call(t)).next.bind(n);
        if (
          Array.isArray(t) ||
          (n = (function (t, e) {
            if (t) {
              if ("string" == typeof t) return t$(t, void 0);
              var n = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? t$(t, e)
                    : void 0
              );
            }
          })(t)) ||
          (e && t && "number" == typeof t.length)
        ) {
          n && (t = n);
          var a = 0;
          return function () {
            return a >= t.length ? { done: !0 } : { done: !1, value: t[a++] };
          };
        }
        throw TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      }
      function t$(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, a = Array(e); n < e; n++) a[n] = t[n];
        return a;
      }
      function tm(t) {
        return (tm =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var th =
        ((s = function t(e) {
          if (!(this instanceof t))
            throw TypeError("Cannot call a class as a function");
          this.matchTree = new tl().parse(e);
        }),
        (u = [
          {
            key: "match",
            value: function (t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = e.allowOverflow;
              if (!t) throw Error("String is required");
              var a = (function t(e, n, a) {
                if ("string" == typeof n) {
                  var r = e.join("");
                  return 0 === n.indexOf(r)
                    ? e.length === n.length
                      ? { match: !0, matchedChars: e }
                      : { partialMatch: !0 }
                    : 0 === r.indexOf(n)
                      ? a && e.length > n.length
                        ? { overflow: !0 }
                        : { match: !0, matchedChars: e.slice(0, n.length) }
                      : void 0;
                }
                if (Array.isArray(n)) {
                  for (var i = e.slice(), d = 0; d < n.length; ) {
                    var o = t(i, n[d], a && d === n.length - 1);
                    if (!o) return;
                    if (o.overflow) return o;
                    if (o.match) {
                      if (0 === (i = i.slice(o.matchedChars.length)).length)
                        if (d === n.length - 1)
                          return { match: !0, matchedChars: e };
                        else return { partialMatch: !0 };
                    } else if (o.partialMatch) return { partialMatch: !0 };
                    else
                      throw Error(
                        "Unsupported match result:\n".concat(
                          JSON.stringify(o, null, 2),
                        ),
                      );
                    d++;
                  }
                  return a
                    ? { overflow: !0 }
                    : {
                        match: !0,
                        matchedChars: e.slice(0, e.length - i.length),
                      };
                }
                switch (n.op) {
                  case "|":
                    for (var l, s, u = tc(n.args); !(s = u()).done; ) {
                      var f = t(e, s.value, a);
                      if (f)
                        if (f.overflow) return f;
                        else if (f.match)
                          return { match: !0, matchedChars: f.matchedChars };
                        else if (f.partialMatch) l = !0;
                        else
                          throw Error(
                            "Unsupported match result:\n".concat(
                              JSON.stringify(f, null, 2),
                            ),
                          );
                    }
                    if (l) return { partialMatch: !0 };
                    return;
                  case "[]":
                    for (var c, $ = tc(n.args); !(c = $()).done; ) {
                      var m = c.value;
                      if (e[0] === m) {
                        if (1 === e.length)
                          return { match: !0, matchedChars: e };
                        if (a) return { overflow: !0 };
                        return { match: !0, matchedChars: [m] };
                      }
                    }
                    return;
                  default:
                    throw Error("Unsupported instruction tree: ".concat(n));
                }
              })(t.split(""), this.matchTree, !0);
              if (
                (a && a.match && delete a.matchedChars, !a || !a.overflow || n)
              )
                return a;
            },
          },
        ]),
        (function (t, e) {
          for (var n = 0; n < e.length; n++) {
            var a = e[n];
            ((a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              "value" in a && (a.writable = !0),
              Object.defineProperty(
                t,
                (function (t) {
                  var e = (function (t, e) {
                    if ("object" != tm(t) || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                      var a = n.call(t, e || "default");
                      if ("object" != tm(a)) return a;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === e ? String : Number)(t);
                  })(t, "string");
                  return "symbol" == tm(e) ? e : e + "";
                })(a.key),
                a,
              ));
          }
        })(s.prototype, u),
        Object.defineProperty(s, "prototype", { writable: !1 }),
        s);
      function tg(t) {
        return (tg =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function tp(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (n) return (n = n.call(t)).next.bind(n);
        if (
          Array.isArray(t) ||
          (n = (function (t, e) {
            if (t) {
              if ("string" == typeof t) return ty(t, void 0);
              var n = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? ty(t, e)
                    : void 0
              );
            }
          })(t)) ||
          (e && t && "number" == typeof t.length)
        ) {
          n && (t = n);
          var a = 0;
          return function () {
            return a >= t.length ? { done: !0 } : { done: !1, value: t[a++] };
          };
        }
        throw TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      }
      function ty(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, a = Array(e); n < e; n++) a[n] = t[n];
        return a;
      }
      var tv = te("9", 15),
        tb = /[- ]/,
        tx = RegExp("[" + k + "]*\\$1[" + k + "]*(\\$\\d[" + k + "]*)*$"),
        tC =
          ((f = function t(e) {
            e.state;
            var n = e.metadata;
            if (!(this instanceof t))
              throw TypeError("Cannot call a class as a function");
            ((this.metadata = n), this.resetFormat());
          }),
          (c = [
            {
              key: "resetFormat",
              value: function () {
                ((this.chosenFormat = void 0),
                  (this.template = void 0),
                  (this.nationalNumberTemplate = void 0),
                  (this.populatedNationalNumberTemplate = void 0),
                  (this.populatedNationalNumberTemplatePosition = -1));
              },
            },
            {
              key: "reset",
              value: function (t, e) {
                (this.resetFormat(),
                  t
                    ? ((this.isNANP = "1" === t.callingCode()),
                      (this.matchingFormats = t.formats()),
                      e.nationalSignificantNumber &&
                        this.narrowDownMatchingFormats(e))
                    : ((this.isNANP = void 0), (this.matchingFormats = [])));
              },
            },
            {
              key: "format",
              value: function (t, e) {
                var n = this;
                if (
                  "IS_POSSIBLE" ===
                  b(e.nationalSignificantNumber, this.metadata)
                )
                  for (var a, r = tp(this.matchingFormats); !(a = r()).done; ) {
                    var i = a.value,
                      d = (function (t, e, n) {
                        var a = n.metadata,
                          r = n.shouldTryNationalPrefixFormattingRule,
                          i = n.getSeparatorAfterNationalPrefix;
                        if (
                          new RegExp("^(?:".concat(e.pattern(), ")$")).test(
                            t.nationalSignificantNumber,
                          )
                        )
                          return (function (t, e, n) {
                            var a = n.metadata,
                              r = n.shouldTryNationalPrefixFormattingRule,
                              i = n.getSeparatorAfterNationalPrefix;
                            if (
                              (t.nationalSignificantNumber,
                              t.international,
                              t.nationalPrefix,
                              t.carrierCode,
                              r(e))
                            ) {
                              var d = td(t, e, {
                                useNationalPrefixFormattingRule: !0,
                                getSeparatorAfterNationalPrefix: i,
                                metadata: a,
                              });
                              if (d) return d;
                            }
                            return td(t, e, {
                              useNationalPrefixFormattingRule: !1,
                              getSeparatorAfterNationalPrefix: i,
                              metadata: a,
                            });
                          })(t, e, {
                            metadata: a,
                            shouldTryNationalPrefixFormattingRule: r,
                            getSeparatorAfterNationalPrefix: i,
                          });
                      })(e, i, {
                        metadata: this.metadata,
                        shouldTryNationalPrefixFormattingRule: function (t) {
                          return n.shouldTryNationalPrefixFormattingRule(t, {
                            international: e.international,
                            nationalPrefix: e.nationalPrefix,
                          });
                        },
                        getSeparatorAfterNationalPrefix: function (t) {
                          return n.getSeparatorAfterNationalPrefix(t);
                        },
                      });
                    if (d)
                      return (
                        this.resetFormat(),
                        (this.chosenFormat = i),
                        this.setNationalNumberTemplate(
                          d.replace(/\d/g, "x"),
                          e,
                        ),
                        (this.populatedNationalNumberTemplate = d),
                        (this.populatedNationalNumberTemplatePosition =
                          this.template.lastIndexOf("x")),
                        d
                      );
                  }
                return this.formatNationalNumberWithNextDigits(t, e);
              },
            },
            {
              key: "formatNationalNumberWithNextDigits",
              value: function (t, e) {
                var n = this.chosenFormat,
                  a = this.chooseFormat(e);
                if (a)
                  if (a === n) return this.formatNextNationalNumberDigits(t);
                  else
                    return this.formatNextNationalNumberDigits(
                      e.getNationalDigits(),
                    );
              },
            },
            {
              key: "narrowDownMatchingFormats",
              value: function (t) {
                var e = this,
                  n = t.nationalSignificantNumber,
                  a = t.nationalPrefix,
                  r = t.international,
                  i = n.length - 3;
                (i < 0 && (i = 0),
                  (this.matchingFormats = this.matchingFormats.filter(
                    function (t) {
                      return e.formatSuits(t, r, a) && e.formatMatches(t, n, i);
                    },
                  )),
                  this.chosenFormat &&
                    -1 === this.matchingFormats.indexOf(this.chosenFormat) &&
                    this.resetFormat());
              },
            },
            {
              key: "formatSuits",
              value: function (t, e, n) {
                return !(
                  (n &&
                    !t.usesNationalPrefix() &&
                    !t.nationalPrefixIsOptionalWhenFormattingInNationalFormat()) ||
                  (!e &&
                    !n &&
                    t.nationalPrefixIsMandatoryWhenFormattingInNationalFormat())
                );
              },
            },
            {
              key: "formatMatches",
              value: function (t, e, n) {
                var a = t.leadingDigitsPatterns().length;
                if (0 === a) return !0;
                n = Math.min(n, a - 1);
                var r = t.leadingDigitsPatterns()[n];
                if (e.length < 3)
                  try {
                    return void 0 !== new th(r).match(e, { allowOverflow: !0 });
                  } catch (t) {
                    return (console.error(t), !0);
                  }
                return new RegExp("^(".concat(r, ")")).test(e);
              },
            },
            {
              key: "getFormatFormat",
              value: function (t, e) {
                return e ? t.internationalFormat() : t.format();
              },
            },
            {
              key: "chooseFormat",
              value: function (t) {
                for (
                  var e, n, a, r = this, i = tp(this.matchingFormats.slice());
                  !(a = i()).done &&
                  0 !==
                    ((e = a.value),
                    (n =
                      r.chosenFormat === e
                        ? 0
                        : tx.test(r.getFormatFormat(e, t.international))
                          ? r.createTemplateForFormat(e, t)
                            ? ((r.chosenFormat = e), 0)
                            : ((r.matchingFormats = r.matchingFormats.filter(
                                function (t) {
                                  return t !== e;
                                },
                              )),
                              1)
                          : 1));

                )
                  if (1 === n) continue;
                return (
                  this.chosenFormat || this.resetFormat(),
                  this.chosenFormat
                );
              },
            },
            {
              key: "createTemplateForFormat",
              value: function (t, e) {
                if (!(t.pattern().indexOf("|") >= 0)) {
                  var n = this.getTemplateForFormat(t, e);
                  if (n) return (this.setNationalNumberTemplate(n, e), !0);
                }
              },
            },
            {
              key: "getSeparatorAfterNationalPrefix",
              value: function (t) {
                return this.isNANP ||
                  (t &&
                    t.nationalPrefixFormattingRule() &&
                    tb.test(t.nationalPrefixFormattingRule()))
                  ? " "
                  : "";
              },
            },
            {
              key: "getInternationalPrefixBeforeCountryCallingCode",
              value: function (t, e) {
                var n = t.IDDPrefix,
                  a = t.missingPlus;
                return n ? (e && !1 === e.spacing ? n : n + " ") : a ? "" : "+";
              },
            },
            {
              key: "getTemplate",
              value: function (t) {
                if (this.template) {
                  for (
                    var e = -1,
                      n = 0,
                      a = t.international
                        ? this.getInternationalPrefixBeforeCountryCallingCode(
                            t,
                            { spacing: !1 },
                          )
                        : "";
                    n <
                    a.length + t.getDigitsWithoutInternationalPrefix().length;

                  )
                    ((e = this.template.indexOf("x", e + 1)), n++);
                  return tn(this.template, e + 1);
                }
              },
            },
            {
              key: "setNationalNumberTemplate",
              value: function (t, e) {
                ((this.nationalNumberTemplate = t),
                  (this.populatedNationalNumberTemplate = t),
                  (this.populatedNationalNumberTemplatePosition = -1),
                  e.international
                    ? (this.template =
                        this.getInternationalPrefixBeforeCountryCallingCode(
                          e,
                        ).replace(/[\d\+]/g, "x") +
                        te("x", e.callingCode.length) +
                        " " +
                        t)
                    : (this.template = t));
              },
            },
            {
              key: "getTemplateForFormat",
              value: function (t, e) {
                var n,
                  a = e.nationalSignificantNumber,
                  r = e.international,
                  i = e.nationalPrefix,
                  d = e.complexPrefixBeforeNationalSignificantNumber,
                  o = t.pattern();
                o = o
                  .replace(/\[([^\[\]])*\]/g, "\\d")
                  .replace(/\d(?=[^,}][^,}])/g, "\\d");
                var l = tv.match(o)[0];
                if (!(a.length > l.length)) {
                  var s = RegExp("^" + o + "$"),
                    u = a.replace(/\d/g, "9");
                  s.test(u) && (l = u);
                  var f = this.getFormatFormat(t, r);
                  if (
                    this.shouldTryNationalPrefixFormattingRule(t, {
                      international: r,
                      nationalPrefix: i,
                    })
                  ) {
                    var c = f.replace(D, t.nationalPrefixFormattingRule());
                    if (
                      ti(t.nationalPrefixFormattingRule()) ===
                        (i || "") + ti("$1") &&
                      ((f = c), (n = !0), i)
                    )
                      for (var $ = i.length; $ > 0; )
                        ((f = f.replace(/\d/, "x")), $--);
                  }
                  var m = l.replace(new RegExp(o), f).replace(/9/g, "x");
                  return (
                    !n &&
                      (d
                        ? (m = te("x", d.length) + " " + m)
                        : i &&
                          (m =
                            te("x", i.length) +
                            this.getSeparatorAfterNationalPrefix(t) +
                            m)),
                    r && (m = T(m)),
                    m
                  );
                }
              },
            },
            {
              key: "formatNextNationalNumberDigits",
              value: function (t) {
                var e = (function (t, e, n) {
                  for (
                    var a,
                      r = (function (t, e) {
                        var n =
                          ("undefined" != typeof Symbol &&
                            t[Symbol.iterator]) ||
                          t["@@iterator"];
                        if (n) return (n = n.call(t)).next.bind(n);
                        if (
                          Array.isArray(t) ||
                          (n = (function (t, e) {
                            if (t) {
                              if ("string" == typeof t) return Q(t, void 0);
                              var n = {}.toString.call(t).slice(8, -1);
                              return (
                                "Object" === n &&
                                  t.constructor &&
                                  (n = t.constructor.name),
                                "Map" === n || "Set" === n
                                  ? Array.from(t)
                                  : "Arguments" === n ||
                                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                        n,
                                      )
                                    ? Q(t, e)
                                    : void 0
                              );
                            }
                          })(t))
                        ) {
                          n && (t = n);
                          var a = 0;
                          return function () {
                            return a >= t.length
                              ? { done: !0 }
                              : { done: !1, value: t[a++] };
                          };
                        }
                        throw TypeError(
                          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                        );
                      })(n.split(""));
                    !(a = r()).done;

                  ) {
                    var i = a.value;
                    if (0 > t.slice(e + 1).search(tt)) return;
                    ((e = t.search(tt)), (t = t.replace(tt, i)));
                  }
                  return [t, e];
                })(
                  this.populatedNationalNumberTemplate,
                  this.populatedNationalNumberTemplatePosition,
                  t,
                );
                return e
                  ? ((this.populatedNationalNumberTemplate = e[0]),
                    (this.populatedNationalNumberTemplatePosition = e[1]),
                    tn(
                      this.populatedNationalNumberTemplate,
                      this.populatedNationalNumberTemplatePosition + 1,
                    ))
                  : void this.resetFormat();
              },
            },
            {
              key: "shouldTryNationalPrefixFormattingRule",
              value: function (t, e) {
                var n = e.international,
                  a = e.nationalPrefix;
                if (t.nationalPrefixFormattingRule()) {
                  var r = t.usesNationalPrefix();
                  if ((r && a) || (!r && !n)) return !0;
                }
              },
            },
          ]),
          (function (t, e) {
            for (var n = 0; n < e.length; n++) {
              var a = e[n];
              ((a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(
                  t,
                  (function (t) {
                    var e = (function (t, e) {
                      if ("object" != tg(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var a = n.call(t, e || "default");
                        if ("object" != tg(a)) return a;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == tg(e) ? e : e + "";
                  })(a.key),
                  a,
                ));
            }
          })(f.prototype, c),
          Object.defineProperty(f, "prototype", { writable: !1 }),
          f);
      function tN(t) {
        return (tN =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function tP(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var a,
                r,
                i,
                d,
                o = [],
                l = !0,
                s = !1;
              try {
                if (((i = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (a = i.call(n)).done) &&
                    (o.push(a.value), o.length !== e);
                    l = !0
                  );
              } catch (t) {
                ((s = !0), (r = t));
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((d = n.return()), Object(d) !== d)
                  )
                    return;
                } finally {
                  if (s) throw r;
                }
              }
              return o;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return tS(t, e);
              var n = {}.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? tS(t, e)
                    : void 0
              );
            }
          })(t, e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function tS(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, a = Array(e); n < e; n++) a[n] = t[n];
        return a;
      }
      var tw = RegExp("^[" + k + w + "]+$", "i"),
        tk = "(?:[+＋][" + k + w + "]*|[" + k + w + "]+)",
        tA = RegExp("[^" + k + w + "]+.*$"),
        tI = /[^\d\[\]]/,
        tE =
          (($ = function t(e) {
            var n = e.defaultCountry,
              a = e.defaultCallingCode,
              r = e.metadata,
              i = e.onNationalSignificantNumberChange;
            if (!(this instanceof t))
              throw TypeError("Cannot call a class as a function");
            ((this.defaultCountry = n),
              (this.defaultCallingCode = a),
              (this.metadata = r),
              (this.onNationalSignificantNumberChange = i));
          }),
          (m = [
            {
              key: "input",
              value: function (t, e) {
                var n,
                  a,
                  r,
                  i,
                  d,
                  o = tP(
                    ((r = (a = tP(
                      "+" ===
                        (n =
                          (function (t) {
                            var e,
                              n = t.search(tk);
                            if (!(n < 0))
                              return (
                                "+" === (t = t.slice(n))[0] &&
                                  ((e = !0), (t = t.slice(1))),
                                (t = t.replace(tA, "")),
                                e && (t = "+" + t),
                                t
                              );
                          })(t) || "")[0]
                        ? [n.slice(1), !0]
                        : [n],
                      2,
                    ))[0]),
                    (i = a[1]),
                    tw.test(r) || (r = ""),
                    [r, i]),
                    2,
                  ),
                  l = o[0],
                  s = o[1],
                  u = ti(l);
                return (
                  s &&
                    !e.digits &&
                    (e.startInternationalNumber(), u || (d = !0)),
                  u && this.inputDigits(u, e),
                  { digits: u, justLeadingPlus: d }
                );
              },
            },
            {
              key: "inputDigits",
              value: function (t, e) {
                var n = e.digits,
                  a = n.length < 3 && n.length + t.length >= 3;
                if (
                  (e.appendDigits(t),
                  a && this.extractIddPrefix(e),
                  this.isWaitingForCountryCallingCode(e))
                ) {
                  if (!this.extractCountryCallingCode(e)) return;
                } else e.appendNationalSignificantNumberDigits(t);
                e.international ||
                  this.hasExtractedNationalSignificantNumber ||
                  this.extractNationalSignificantNumber(
                    e.getNationalDigits(),
                    function (t) {
                      return e.update(t);
                    },
                  );
              },
            },
            {
              key: "isWaitingForCountryCallingCode",
              value: function (t) {
                var e = t.international,
                  n = t.callingCode;
                return e && !n;
              },
            },
            {
              key: "extractCountryCallingCode",
              value: function (t) {
                var e = j(
                    "+" + t.getDigitsWithoutInternationalPrefix(),
                    this.defaultCountry,
                    this.defaultCallingCode,
                    this.metadata.metadata,
                  ),
                  n = e.countryCallingCode,
                  a = e.number;
                if (n)
                  return (
                    t.setCallingCode(n),
                    t.update({ nationalSignificantNumber: a }),
                    !0
                  );
              },
            },
            {
              key: "reset",
              value: function (t) {
                if (t) {
                  this.hasSelectedNumberingPlan = !0;
                  var e = t._nationalPrefixForParsing();
                  this.couldPossiblyExtractAnotherNationalSignificantNumber =
                    e && tI.test(e);
                } else
                  ((this.hasSelectedNumberingPlan = void 0),
                    (this.couldPossiblyExtractAnotherNationalSignificantNumber =
                      void 0));
              },
            },
            {
              key: "extractNationalSignificantNumber",
              value: function (t, e) {
                if (this.hasSelectedNumberingPlan) {
                  var n = E(t, this.metadata),
                    a = n.nationalPrefix,
                    r = n.nationalNumber,
                    i = n.carrierCode;
                  if (r !== t)
                    return (this.onExtractedNationalNumber(a, i, r, t, e), !0);
                }
              },
            },
            {
              key: "extractAnotherNationalSignificantNumber",
              value: function (t, e, n) {
                if (!this.hasExtractedNationalSignificantNumber)
                  return this.extractNationalSignificantNumber(t, n);
                if (this.couldPossiblyExtractAnotherNationalSignificantNumber) {
                  var a = E(t, this.metadata),
                    r = a.nationalPrefix,
                    i = a.nationalNumber,
                    d = a.carrierCode;
                  if (i !== e)
                    return (this.onExtractedNationalNumber(r, d, i, t, n), !0);
                }
              },
            },
            {
              key: "onExtractedNationalNumber",
              value: function (t, e, n, a, r) {
                var i,
                  d,
                  o = a.lastIndexOf(n);
                if (o >= 0 && o === a.length - n.length) {
                  d = !0;
                  var l = a.slice(0, o);
                  l !== t && (i = l);
                }
                (r({
                  nationalPrefix: t,
                  carrierCode: e,
                  nationalSignificantNumber: n,
                  nationalSignificantNumberMatchesInput: d,
                  complexPrefixBeforeNationalSignificantNumber: i,
                }),
                  (this.hasExtractedNationalSignificantNumber = !0),
                  this.onNationalSignificantNumberChange());
              },
            },
            {
              key: "reExtractNationalSignificantNumber",
              value: function (t) {
                return (
                  !!this.extractAnotherNationalSignificantNumber(
                    t.getNationalDigits(),
                    t.nationalSignificantNumber,
                    function (e) {
                      return t.update(e);
                    },
                  ) ||
                  (this.extractIddPrefix(t) || this.fixMissingPlus(t)
                    ? (this.extractCallingCodeAndNationalSignificantNumber(t),
                      !0)
                    : void 0)
                );
              },
            },
            {
              key: "extractIddPrefix",
              value: function (t) {
                var e = t.international,
                  n = t.IDDPrefix,
                  a = t.digits;
                if ((t.nationalSignificantNumber, !e && !n)) {
                  var r = I(
                    a,
                    this.defaultCountry,
                    this.defaultCallingCode,
                    this.metadata.metadata,
                  );
                  if (void 0 !== r && r !== a)
                    return (
                      t.update({ IDDPrefix: a.slice(0, a.length - r.length) }),
                      this.startInternationalNumber(t, {
                        country: void 0,
                        callingCode: void 0,
                      }),
                      !0
                    );
                }
              },
            },
            {
              key: "fixMissingPlus",
              value: function (t) {
                if (!t.international) {
                  var e = O(
                      t.digits,
                      this.defaultCountry,
                      this.defaultCallingCode,
                      this.metadata.metadata,
                    ),
                    n = e.countryCallingCode;
                  if ((e.number, n))
                    return (
                      t.update({ missingPlus: !0 }),
                      this.startInternationalNumber(t, {
                        country: t.country,
                        callingCode: n,
                      }),
                      !0
                    );
                }
              },
            },
            {
              key: "startInternationalNumber",
              value: function (t, e) {
                var n = e.country,
                  a = e.callingCode;
                (t.startInternationalNumber(n, a),
                  t.nationalSignificantNumber &&
                    (t.resetNationalSignificantNumber(),
                    this.onNationalSignificantNumberChange(),
                    (this.hasExtractedNationalSignificantNumber = void 0)));
              },
            },
            {
              key: "extractCallingCodeAndNationalSignificantNumber",
              value: function (t) {
                this.extractCountryCallingCode(t) &&
                  this.extractNationalSignificantNumber(
                    t.getNationalDigits(),
                    function (e) {
                      return t.update(e);
                    },
                  );
              },
            },
          ]),
          (function (t, e) {
            for (var n = 0; n < e.length; n++) {
              var a = e[n];
              ((a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(
                  t,
                  (function (t) {
                    var e = (function (t, e) {
                      if ("object" != tN(t) || !t) return t;
                      var n = t[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var a = n.call(t, e || "default");
                        if ("object" != tN(a)) return a;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return ("string" === e ? String : Number)(t);
                    })(t, "string");
                    return "symbol" == tN(e) ? e : e + "";
                  })(a.key),
                  a,
                ));
            }
          })($.prototype, m),
          Object.defineProperty($, "prototype", { writable: !1 }),
          $);
      function tF(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, a = Array(e); n < e; n++) a[n] = t[n];
        return a;
      }
      function tO(t, e) {
        var n = e.countries,
          a = (e.defaultCountry, e.metadata);
        a = new y.Ay(a);
        for (
          var r,
            i = (function (t, e) {
              var n =
                ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                t["@@iterator"];
              if (n) return (n = n.call(t)).next.bind(n);
              if (
                Array.isArray(t) ||
                (n = (function (t, e) {
                  if (t) {
                    if ("string" == typeof t) return tF(t, void 0);
                    var n = {}.toString.call(t).slice(8, -1);
                    return (
                      "Object" === n &&
                        t.constructor &&
                        (n = t.constructor.name),
                      "Map" === n || "Set" === n
                        ? Array.from(t)
                        : "Arguments" === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? tF(t, e)
                          : void 0
                    );
                  }
                })(t))
              ) {
                n && (t = n);
                var a = 0;
                return function () {
                  return a >= t.length
                    ? { done: !0 }
                    : { done: !1, value: t[a++] };
                };
              }
              throw TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })(n);
          !(r = i()).done;

        ) {
          var d = r.value;
          if ((a.country(d), a.leadingDigits())) {
            if (t && 0 === t.search(a.leadingDigits())) return d;
          } else if (P({ phone: t, country: d }, void 0, a.metadata)) return d;
        }
      }
      function tj(t) {
        return (tj =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function tM(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, a = Array(e); n < e; n++) a[n] = t[n];
        return a;
      }
      var tT =
        ((h = function t(e, n) {
          if (!(this instanceof t))
            throw TypeError("Cannot call a class as a function");
          this.metadata = new y.Ay(n);
          var a,
            r =
              (function (t) {
                if (Array.isArray(t)) return t;
              })((a = this.getCountryAndCallingCode(e))) ||
              (function (t, e) {
                var n =
                  null == t
                    ? null
                    : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                      t["@@iterator"];
                if (null != n) {
                  var a,
                    r,
                    i,
                    d,
                    o = [],
                    l = !0,
                    s = !1;
                  try {
                    ((i = (n = n.call(t)).next), !1);
                    for (
                      ;
                      !(l = (a = i.call(n)).done) &&
                      (o.push(a.value), o.length !== e);
                      l = !0
                    );
                  } catch (t) {
                    ((s = !0), (r = t));
                  } finally {
                    try {
                      if (
                        !l &&
                        null != n.return &&
                        ((d = n.return()), Object(d) !== d)
                      )
                        return;
                    } finally {
                      if (s) throw r;
                    }
                  }
                  return o;
                }
              })(a, 2) ||
              (function (t, e) {
                if (t) {
                  if ("string" == typeof t) return tM(t, 2);
                  var n = {}.toString.call(t).slice(8, -1);
                  return (
                    "Object" === n && t.constructor && (n = t.constructor.name),
                    "Map" === n || "Set" === n
                      ? Array.from(t)
                      : "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? tM(t, e)
                        : void 0
                  );
                }
              })(a, 2) ||
              (function () {
                throw TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
              })(),
            i = r[0],
            d = r[1];
          ((this.defaultCountry = i),
            (this.defaultCallingCode = d),
            this.reset());
        }),
        (g = [
          {
            key: "getCountryAndCallingCode",
            value: function (t) {
              var e, n;
              return (
                t &&
                  ((0, M.A)(t)
                    ? ((e = t.defaultCountry), (n = t.defaultCallingCode))
                    : (e = t)),
                e && !this.metadata.hasCountry(e) && (e = void 0),
                [e, n]
              );
            },
          },
          {
            key: "input",
            value: function (t) {
              var e = this.parser.input(t, this.state),
                n = e.digits;
              if (e.justLeadingPlus) this.formattedOutput = "+";
              else if (n) {
                if (
                  (this.determineTheCountryIfNeeded(),
                  this.state.nationalSignificantNumber &&
                    this.formatter.narrowDownMatchingFormats(this.state),
                  this.metadata.hasSelectedNumberingPlan() &&
                    (a = this.formatter.format(n, this.state)),
                  void 0 === a &&
                    this.parser.reExtractNationalSignificantNumber(this.state))
                ) {
                  this.determineTheCountryIfNeeded();
                  var a,
                    r = this.state.getNationalDigits();
                  r && (a = this.formatter.format(r, this.state));
                }
                this.formattedOutput = a
                  ? this.getFullNumber(a)
                  : this.getNonFormattedNumber();
              }
              return this.formattedOutput;
            },
          },
          {
            key: "reset",
            value: function () {
              var t = this;
              return (
                (this.state = new q({
                  onCountryChange: function (e) {
                    t.country = e;
                  },
                  onCallingCodeChange: function (e, n) {
                    (t.metadata.selectNumberingPlan(n, e),
                      t.formatter.reset(t.metadata.numberingPlan, t.state),
                      t.parser.reset(t.metadata.numberingPlan));
                  },
                })),
                (this.formatter = new tC({
                  state: this.state,
                  metadata: this.metadata,
                })),
                (this.parser = new tE({
                  defaultCountry: this.defaultCountry,
                  defaultCallingCode: this.defaultCallingCode,
                  metadata: this.metadata,
                  state: this.state,
                  onNationalSignificantNumberChange: function () {
                    (t.determineTheCountryIfNeeded(),
                      t.formatter.reset(t.metadata.numberingPlan, t.state));
                  },
                })),
                this.state.reset({
                  country: this.defaultCountry,
                  callingCode: this.defaultCallingCode,
                }),
                (this.formattedOutput = ""),
                this
              );
            },
          },
          {
            key: "isInternational",
            value: function () {
              return this.state.international;
            },
          },
          {
            key: "getCallingCode",
            value: function () {
              if (this.isInternational()) return this.state.callingCode;
            },
          },
          {
            key: "getCountryCallingCode",
            value: function () {
              return this.getCallingCode();
            },
          },
          {
            key: "getCountry",
            value: function () {
              if (this.state.digits) return this._getCountry();
            },
          },
          {
            key: "_getCountry",
            value: function () {
              var t = this.state.country;
              return t;
            },
          },
          {
            key: "determineTheCountryIfNeeded",
            value: function () {
              (!this.state.country || this.isCountryCallingCodeAmbiguous()) &&
                this.determineTheCountry();
            },
          },
          {
            key: "getFullNumber",
            value: function (t) {
              var e = this;
              if (this.isInternational()) {
                var n = function (t) {
                    return (
                      e.formatter.getInternationalPrefixBeforeCountryCallingCode(
                        e.state,
                        { spacing: !!t },
                      ) + t
                    );
                  },
                  a = this.state.callingCode;
                return n(
                  a
                    ? t
                      ? "".concat(a, " ").concat(t)
                      : a
                    : "".concat(
                        this.state.getDigitsWithoutInternationalPrefix(),
                      ),
                );
              }
              return t;
            },
          },
          {
            key: "getNonFormattedNationalNumberWithPrefix",
            value: function () {
              var t = this.state,
                e = t.nationalSignificantNumber,
                n = t.complexPrefixBeforeNationalSignificantNumber,
                a = t.nationalPrefix,
                r = e,
                i = n || a;
              return (i && (r = i + r), r);
            },
          },
          {
            key: "getNonFormattedNumber",
            value: function () {
              var t = this.state.nationalSignificantNumberMatchesInput;
              return this.getFullNumber(
                t
                  ? this.getNonFormattedNationalNumberWithPrefix()
                  : this.state.getNationalDigits(),
              );
            },
          },
          {
            key: "getNonFormattedTemplate",
            value: function () {
              var t = this.getNonFormattedNumber();
              if (t) return t.replace(/[\+\d]/g, "x");
            },
          },
          {
            key: "isCountryCallingCodeAmbiguous",
            value: function () {
              var t = this.state.callingCode,
                e = this.metadata.getCountryCodesForCallingCode(t);
              return e && e.length > 1;
            },
          },
          {
            key: "determineTheCountry",
            value: function () {
              this.state.setCountry(
                (function (t, e) {
                  var n = e.nationalNumber,
                    a = e.defaultCountry,
                    r = e.metadata,
                    i = r.getCountryCodesForCallingCode(t);
                  if (i)
                    return 1 === i.length
                      ? i[0]
                      : tO(n, {
                          countries: i,
                          defaultCountry: a,
                          metadata: r.metadata,
                        });
                })(
                  this.isInternational()
                    ? this.state.callingCode
                    : this.defaultCallingCode,
                  {
                    nationalNumber: this.state.nationalSignificantNumber,
                    defaultCountry: this.defaultCountry,
                    metadata: this.metadata,
                  },
                ),
              );
            },
          },
          {
            key: "getNumberValue",
            value: function () {
              var t = this.state,
                e = t.digits,
                n = t.callingCode,
                a = t.country,
                r = t.nationalSignificantNumber;
              if (e) {
                if (this.isInternational())
                  if (n) return "+" + n + r;
                  else return "+" + e;
                else if (a || n)
                  return "+" + (a ? this.metadata.countryCallingCode() : n) + r;
              }
            },
          },
          {
            key: "getNumber",
            value: function () {
              var t = this.state,
                e = t.nationalSignificantNumber,
                n = t.carrierCode,
                a = t.callingCode,
                r = this._getCountry();
              if (e && (r || a)) {
                if (r && r === this.defaultCountry) {
                  var i = new y.Ay(this.metadata.metadata);
                  i.selectNumberingPlan(r);
                  var d = i.numberingPlan.callingCode(),
                    o = this.metadata.getCountryCodesForCallingCode(d);
                  if (o.length > 1) {
                    var l = tO(e, {
                      countries: o,
                      defaultCountry: this.defaultCountry,
                      metadata: this.metadata.metadata,
                    });
                    l && (r = l);
                  }
                }
                var s = new J(r || a, e, this.metadata.metadata);
                return (n && (s.carrierCode = n), s);
              }
            },
          },
          {
            key: "isPossible",
            value: function () {
              var t = this.getNumber();
              return !!t && t.isPossible();
            },
          },
          {
            key: "isValid",
            value: function () {
              var t = this.getNumber();
              return !!t && t.isValid();
            },
          },
          {
            key: "getNationalNumber",
            value: function () {
              return this.state.nationalSignificantNumber;
            },
          },
          {
            key: "getChars",
            value: function () {
              return (this.state.international ? "+" : "") + this.state.digits;
            },
          },
          {
            key: "getTemplate",
            value: function () {
              return (
                this.formatter.getTemplate(this.state) ||
                this.getNonFormattedTemplate() ||
                ""
              );
            },
          },
        ]),
        (function (t, e) {
          for (var n = 0; n < e.length; n++) {
            var a = e[n];
            ((a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              "value" in a && (a.writable = !0),
              Object.defineProperty(
                t,
                (function (t) {
                  var e = (function (t, e) {
                    if ("object" != tj(t) || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                      var a = n.call(t, e || "default");
                      if ("object" != tj(a)) return a;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value.",
                      );
                    }
                    return ("string" === e ? String : Number)(t);
                  })(t, "string");
                  return "symbol" == tj(e) ? e : e + "";
                })(a.key),
                a,
              ));
          }
        })(h.prototype, g),
        Object.defineProperty(h, "prototype", { writable: !1 }),
        h);
      function tD(t) {
        return tT.call(this, t, p.A);
      }
      ((tD.prototype = Object.create(tT.prototype, {})),
        (tD.prototype.constructor = tD));
    },
    315: function (t, e, n) {
      "use strict";
      n.d(e, { K: () => i });
      var a = n(111),
        r = n(757);
      function i() {
        return (function (t, e) {
          var n = Array.prototype.slice.call(e);
          return (n.push(a.A), t.apply(this, n));
        })(r.Ko, arguments);
      }
    },
  },
]);
