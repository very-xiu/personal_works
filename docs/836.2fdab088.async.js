(self['webpackChunk'] = self['webpackChunk'] || []).push([
  [836],
  {
    44545: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var o = n(28991),
        r = n(67294),
        i = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z',
                },
              },
            ],
          },
          name: 'ellipsis',
          theme: 'outlined',
        },
        a = i,
        u = n(27029),
        c = function (e, t) {
          return r.createElement(
            u.Z,
            (0, o.Z)((0, o.Z)({}, e), {}, { ref: t, icon: a }),
          );
        };
      c.displayName = 'EllipsisOutlined';
      var l = r.forwardRef(c);
    },
    67724: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var o = n(28991),
        r = n(67294),
        i = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z',
                },
              },
            ],
          },
          name: 'left',
          theme: 'outlined',
        },
        a = i,
        u = n(27029),
        c = function (e, t) {
          return r.createElement(
            u.Z,
            (0, o.Z)((0, o.Z)({}, e), {}, { ref: t, icon: a }),
          );
        };
      c.displayName = 'LeftOutlined';
      var l = r.forwardRef(c);
    },
    8812: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var o = n(28991),
        r = n(67294),
        i = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z',
                },
              },
            ],
          },
          name: 'right',
          theme: 'outlined',
        },
        a = i,
        u = n(27029),
        c = function (e, t) {
          return r.createElement(
            u.Z,
            (0, o.Z)((0, o.Z)({}, e), {}, { ref: t, icon: a }),
          );
        };
      c.displayName = 'RightOutlined';
      var l = r.forwardRef(c);
    },
    81256: function (e, t, n) {
      'use strict';
      var o = n(67294),
        r = (0, o.createContext)({});
      t['Z'] = r;
    },
    26083: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return M;
        },
      });
      var o = n(28481),
        r = n(67294),
        i = n(73935),
        a = n(20064),
        u = n(78703),
        c = r.createContext(null),
        l = c,
        s = n(85061),
        f = n(31234),
        d = [];
      function p(e, t) {
        var n = r.useState(function () {
            if (!(0, a.Z)()) return null;
            var e = document.createElement('div');
            return e;
          }),
          i = (0, o.Z)(n, 1),
          u = i[0],
          c = r.useRef(!1),
          p = r.useContext(l),
          v = r.useState(d),
          m = (0, o.Z)(v, 2),
          h = m[0],
          g = m[1],
          y =
            p ||
            (c.current
              ? void 0
              : function (e) {
                  g(function (t) {
                    var n = [e].concat((0, s.Z)(t));
                    return n;
                  });
                });
        function b() {
          u.parentElement || document.body.appendChild(u), (c.current = !0);
        }
        function w() {
          var e;
          null === (e = u.parentElement) || void 0 === e || e.removeChild(u),
            (c.current = !1);
        }
        return (
          (0, f.Z)(
            function () {
              return e ? (p ? p(b) : b()) : w(), w;
            },
            [e],
          ),
          (0, f.Z)(
            function () {
              h.length &&
                (h.forEach(function (e) {
                  return e();
                }),
                g(d));
            },
            [h],
          ),
          [u, y]
        );
      }
      var v,
        m = n(78536);
      function h(e) {
        if ('undefined' === typeof document) return 0;
        if (e || void 0 === v) {
          var t = document.createElement('div');
          (t.style.width = '100%'), (t.style.height = '200px');
          var n = document.createElement('div'),
            o = n.style;
          (o.position = 'absolute'),
            (o.top = '0'),
            (o.left = '0'),
            (o.pointerEvents = 'none'),
            (o.visibility = 'hidden'),
            (o.width = '200px'),
            (o.height = '150px'),
            (o.overflow = 'hidden'),
            n.appendChild(t),
            document.body.appendChild(n);
          var r = t.offsetWidth;
          n.style.overflow = 'scroll';
          var i = t.offsetWidth;
          r === i && (i = n.clientWidth),
            document.body.removeChild(n),
            (v = r - i);
        }
        return v;
      }
      function g() {
        return (
          document.body.scrollHeight >
            (window.innerHeight || document.documentElement.clientHeight) &&
          window.innerWidth > document.body.offsetWidth
        );
      }
      var y = 'rc-util-locker-'.concat(Date.now()),
        b = 0;
      function w(e) {
        var t = !!e,
          n = r.useState(function () {
            return (b += 1), ''.concat(y, '_').concat(b);
          }),
          i = (0, o.Z)(n, 1),
          a = i[0];
        (0, f.Z)(
          function () {
            if (t) {
              var e = h(),
                n = g();
              (0, m.hq)(
                '\nhtml body {\n  overflow-y: hidden;\n  '.concat(
                  n ? 'width: calc(100% - '.concat(e, 'px);') : '',
                  '\n}',
                ),
                a,
              );
            } else (0, m.jL)(a);
            return function () {
              (0, m.jL)(a);
            };
          },
          [t, a],
        );
      }
      var Z = !1;
      function E(e) {
        return 'boolean' === typeof e && (Z = e), Z;
      }
      var C = function (e) {
          return (
            !1 !== e &&
            ((0, a.Z)() && e
              ? 'string' === typeof e
                ? document.querySelector(e)
                : 'function' === typeof e
                ? e()
                : e
              : null)
          );
        },
        x = r.forwardRef(function (e, t) {
          var n = e.open,
            c = e.autoLock,
            s = e.getContainer,
            f = e.debug,
            d = e.autoDestroy,
            v = void 0 === d || d,
            m = e.children,
            h = r.useState(n),
            g = (0, o.Z)(h, 2),
            y = g[0],
            b = g[1],
            Z = y || n;
          r.useEffect(
            function () {
              (v || n) && b(n);
            },
            [n, v],
          );
          var x = r.useState(function () {
              return C(s);
            }),
            O = (0, o.Z)(x, 2),
            M = O[0],
            N = O[1];
          r.useEffect(function () {
            var e = C(s);
            N(null !== e && void 0 !== e ? e : null);
          });
          var P = p(Z && !M, f),
            T = (0, o.Z)(P, 2),
            S = T[0],
            k = T[1],
            R = null !== M && void 0 !== M ? M : S;
          w(c && n && (0, a.Z)() && (R === S || R === document.body));
          var _ = null;
          if (m && (0, u.Yr)(m) && t) {
            var I = m;
            _ = I.ref;
          }
          var A = (0, u.x1)(_, t);
          if (!Z || !(0, a.Z)() || void 0 === M) return null;
          var D = !1 === R || E(),
            L = m;
          return (
            t && (L = r.cloneElement(m, { ref: A })),
            r.createElement(
              l.Provider,
              { value: k },
              D ? L : (0, i.createPortal)(L, R),
            )
          );
        });
      var O = x,
        M = O;
    },
    31064: function (e, t, n) {
      'use strict';
      n.d(t, {
        mL: function () {
          return l;
        },
      });
      var o = n(4381),
        r = function () {
          return { height: 0, opacity: 0 };
        },
        i = function (e) {
          var t = e.scrollHeight;
          return { height: t, opacity: 1 };
        },
        a = function (e) {
          return { height: e ? e.offsetHeight : 0 };
        },
        u = function (e, t) {
          return (
            !0 === (null === t || void 0 === t ? void 0 : t.deadline) ||
            'height' === t.propertyName
          );
        },
        c = {
          motionName: 'ant-motion-collapse',
          onAppearStart: r,
          onEnterStart: r,
          onAppearActive: i,
          onEnterActive: i,
          onLeaveStart: a,
          onLeaveActive: r,
          onAppearEnd: u,
          onEnterEnd: u,
          onLeaveEnd: u,
          motionDeadline: 500,
        },
        l =
          ((0, o.b)('bottomLeft', 'bottomRight', 'topLeft', 'topRight'),
          function (e, t, n) {
            return void 0 !== n ? n : ''.concat(e, '-').concat(t);
          });
      t['ZP'] = c;
    },
    19405: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var o = n(22122),
        r = n(81412),
        i = { adjustX: 1, adjustY: 1 },
        a = { adjustX: 0, adjustY: 0 },
        u = [0, 0];
      function c(e) {
        return 'boolean' === typeof e
          ? e
            ? i
            : a
          : (0, o.Z)((0, o.Z)({}, a), e);
      }
      function l(e) {
        var t = e.arrowWidth,
          n = void 0 === t ? 4 : t,
          i = e.horizontalArrowShift,
          a = void 0 === i ? 16 : i,
          l = e.verticalArrowShift,
          s = void 0 === l ? 8 : l,
          f = e.autoAdjustOverflow,
          d = e.arrowPointAtCenter,
          p = {
            left: { points: ['cr', 'cl'], offset: [-4, 0] },
            right: { points: ['cl', 'cr'], offset: [4, 0] },
            top: { points: ['bc', 'tc'], offset: [0, -4] },
            bottom: { points: ['tc', 'bc'], offset: [0, 4] },
            topLeft: { points: ['bl', 'tc'], offset: [-(a + n), -4] },
            leftTop: { points: ['tr', 'cl'], offset: [-4, -(s + n)] },
            topRight: { points: ['br', 'tc'], offset: [a + n, -4] },
            rightTop: { points: ['tl', 'cr'], offset: [4, -(s + n)] },
            bottomRight: { points: ['tr', 'bc'], offset: [a + n, 4] },
            rightBottom: { points: ['bl', 'cr'], offset: [4, s + n] },
            bottomLeft: { points: ['tl', 'bc'], offset: [-(a + n), 4] },
            leftBottom: { points: ['br', 'cl'], offset: [-4, s + n] },
          };
        return (
          Object.keys(p).forEach(function (e) {
            (p[e] = d
              ? (0, o.Z)((0, o.Z)({}, p[e]), {
                  overflow: c(f),
                  targetOffset: u,
                })
              : (0, o.Z)((0, o.Z)({}, r.C[e]), { overflow: c(f) })),
              (p[e].ignoreShake = !0);
          }),
          p
        );
      }
    },
    27495: function (e, t, n) {
      'use strict';
      n.d(t, {
        Ux: function () {
          return a;
        },
      });
      var o = n(22122),
        r = (n(587), n(67294)),
        i = r.createContext({}),
        a = function (e) {
          var t = e.children,
            n = e.status,
            a = e.override,
            u = (0, r.useContext)(i),
            c = (0, r.useMemo)(
              function () {
                var e = (0, o.Z)({}, u);
                return (
                  a && delete e.isFormItemInput,
                  n &&
                    (delete e.status,
                    delete e.hasFeedback,
                    delete e.feedbackIcon),
                  e
                );
              },
              [n, a, u],
            );
          return r.createElement(i.Provider, { value: c }, t);
        };
    },
    22540: function (e, t, n) {
      'use strict';
      n.d(t, {
        D: function () {
          return x;
        },
        Z: function () {
          return N;
        },
      });
      var o = n(96156),
        r = n(22122),
        i = n(28481),
        a = n(28991),
        u = n(67294),
        c = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z',
                },
              },
            ],
          },
          name: 'bars',
          theme: 'outlined',
        },
        l = c,
        s = n(27029),
        f = function (e, t) {
          return u.createElement(
            s.Z,
            (0, a.Z)((0, a.Z)({}, e), {}, { ref: t, icon: l }),
          );
        };
      f.displayName = 'BarsOutlined';
      var d = u.forwardRef(f),
        p = n(67724),
        v = n(8812),
        m = n(35510),
        h = n.n(m),
        g = n(26670),
        y = n(9054),
        b = function (e) {
          return !isNaN(parseFloat(e)) && isFinite(e);
        },
        w = b,
        Z = n(51763),
        E = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        },
        C = {
          xs: '479.98px',
          sm: '575.98px',
          md: '767.98px',
          lg: '991.98px',
          xl: '1199.98px',
          xxl: '1599.98px',
        },
        x = u.createContext({}),
        O = (function () {
          var e = 0;
          return function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : '';
            return (e += 1), ''.concat(t).concat(e);
          };
        })(),
        M = u.forwardRef(function (e, t) {
          var n = e.prefixCls,
            a = e.className,
            c = e.trigger,
            l = e.children,
            s = e.defaultCollapsed,
            f = void 0 !== s && s,
            m = e.theme,
            b = void 0 === m ? 'dark' : m,
            M = e.style,
            N = void 0 === M ? {} : M,
            P = e.collapsible,
            T = void 0 !== P && P,
            S = e.reverseArrow,
            k = void 0 !== S && S,
            R = e.width,
            _ = void 0 === R ? 200 : R,
            I = e.collapsedWidth,
            A = void 0 === I ? 80 : I,
            D = e.zeroWidthTriggerStyle,
            L = e.breakpoint,
            H = e.onCollapse,
            j = e.onBreakpoint,
            V = E(e, [
              'prefixCls',
              'className',
              'trigger',
              'children',
              'defaultCollapsed',
              'theme',
              'style',
              'collapsible',
              'reverseArrow',
              'width',
              'collapsedWidth',
              'zeroWidthTriggerStyle',
              'breakpoint',
              'onCollapse',
              'onBreakpoint',
            ]),
            W = (0, u.useContext)(Z.Gs),
            z = W.siderHook,
            K = (0, u.useState)('collapsed' in V ? V.collapsed : f),
            F = (0, i.Z)(K, 2),
            U = F[0],
            B = F[1],
            Y = (0, u.useState)(!1),
            X = (0, i.Z)(Y, 2),
            G = X[0],
            q = X[1];
          (0, u.useEffect)(
            function () {
              'collapsed' in V && B(V.collapsed);
            },
            [V.collapsed],
          );
          var Q = function (e, t) {
              'collapsed' in V || B(e), null === H || void 0 === H || H(e, t);
            },
            $ = (0, u.useRef)();
          ($.current = function (e) {
            q(e.matches),
              null === j || void 0 === j || j(e.matches),
              U !== e.matches && Q(e.matches, 'responsive');
          }),
            (0, u.useEffect)(
              function () {
                function e(e) {
                  return $.current(e);
                }
                var t;
                if ('undefined' !== typeof window) {
                  var n = window,
                    o = n.matchMedia;
                  if (o && L && L in C) {
                    t = o('(max-width: '.concat(C[L], ')'));
                    try {
                      t.addEventListener('change', e);
                    } catch (r) {
                      t.addListener(e);
                    }
                    e(t);
                  }
                }
                return function () {
                  try {
                    null === t ||
                      void 0 === t ||
                      t.removeEventListener('change', e);
                  } catch (r) {
                    null === t || void 0 === t || t.removeListener(e);
                  }
                };
              },
              [L],
            ),
            (0, u.useEffect)(function () {
              var e = O('ant-sider-');
              return (
                z.addSider(e),
                function () {
                  return z.removeSider(e);
                }
              );
            }, []);
          var J = function () {
              Q(!U, 'clickTrigger');
            },
            ee = (0, u.useContext)(y.E_),
            te = ee.getPrefixCls,
            ne = function () {
              var e,
                i = te('layout-sider', n),
                s = (0, g.Z)(V, ['collapsed']),
                f = U ? A : _,
                m = w(f) ? ''.concat(f, 'px') : String(f),
                y =
                  0 === parseFloat(String(A || 0))
                    ? u.createElement(
                        'span',
                        {
                          onClick: J,
                          className: h()(
                            ''.concat(i, '-zero-width-trigger'),
                            ''
                              .concat(i, '-zero-width-trigger-')
                              .concat(k ? 'right' : 'left'),
                          ),
                          style: D,
                        },
                        c || u.createElement(d, null),
                      )
                    : null,
                Z = {
                  expanded: k
                    ? u.createElement(v.Z, null)
                    : u.createElement(p.Z, null),
                  collapsed: k
                    ? u.createElement(p.Z, null)
                    : u.createElement(v.Z, null),
                },
                E = U ? 'collapsed' : 'expanded',
                C = Z[E],
                x =
                  null !== c
                    ? y ||
                      u.createElement(
                        'div',
                        {
                          className: ''.concat(i, '-trigger'),
                          onClick: J,
                          style: { width: m },
                        },
                        c || C,
                      )
                    : null,
                O = (0, r.Z)((0, r.Z)({}, N), {
                  flex: '0 0 '.concat(m),
                  maxWidth: m,
                  minWidth: m,
                  width: m,
                }),
                M = h()(
                  i,
                  ''.concat(i, '-').concat(b),
                  ((e = {}),
                  (0, o.Z)(e, ''.concat(i, '-collapsed'), !!U),
                  (0, o.Z)(
                    e,
                    ''.concat(i, '-has-trigger'),
                    T && null !== c && !y,
                  ),
                  (0, o.Z)(e, ''.concat(i, '-below'), !!G),
                  (0, o.Z)(e, ''.concat(i, '-zero-width'), 0 === parseFloat(m)),
                  e),
                  a,
                );
              return u.createElement(
                'aside',
                (0, r.Z)({ className: M }, s, { style: O, ref: t }),
                u.createElement(
                  'div',
                  { className: ''.concat(i, '-children') },
                  l,
                ),
                T || (G && y) ? x : null,
              );
            },
            oe = u.useMemo(
              function () {
                return { siderCollapsed: U };
              },
              [U],
            );
          return u.createElement(x.Provider, { value: oe }, ne());
        });
      var N = M;
    },
    51763: function (e, t, n) {
      'use strict';
      n.d(t, {
        Gs: function () {
          return d;
        },
        h4: function () {
          return g;
        },
        $_: function () {
          return y;
        },
        VY: function () {
          return b;
        },
      });
      var o = n(85061),
        r = n(96156),
        i = n(28481),
        a = n(22122),
        u = n(35510),
        c = n.n(u),
        l = n(67294),
        s = n(9054),
        f = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        },
        d = l.createContext({
          siderHook: {
            addSider: function () {
              return null;
            },
            removeSider: function () {
              return null;
            },
          },
        });
      function p(e) {
        var t = e.suffixCls,
          n = e.tagName;
        e.displayName;
        return function (e) {
          var o = l.forwardRef(function (o, r) {
            var i = l.useContext(s.E_),
              u = i.getPrefixCls,
              c = o.prefixCls,
              f = u(t, c);
            return l.createElement(
              e,
              (0, a.Z)({ ref: r, prefixCls: f, tagName: n }, o),
            );
          });
          return o;
        };
      }
      var v = l.forwardRef(function (e, t) {
          var n = e.prefixCls,
            o = e.className,
            r = e.children,
            i = e.tagName,
            u = f(e, ['prefixCls', 'className', 'children', 'tagName']),
            s = c()(n, o);
          return l.createElement(
            i,
            (0, a.Z)((0, a.Z)({ className: s }, u), { ref: t }),
            r,
          );
        }),
        m = l.forwardRef(function (e, t) {
          var n,
            u = l.useContext(s.E_),
            p = u.direction,
            v = l.useState([]),
            m = (0, i.Z)(v, 2),
            h = m[0],
            g = m[1],
            y = e.prefixCls,
            b = e.className,
            w = e.children,
            Z = e.hasSider,
            E = e.tagName,
            C = f(e, [
              'prefixCls',
              'className',
              'children',
              'hasSider',
              'tagName',
            ]),
            x = c()(
              y,
              ((n = {}),
              (0, r.Z)(
                n,
                ''.concat(y, '-has-sider'),
                'boolean' === typeof Z ? Z : h.length > 0,
              ),
              (0, r.Z)(n, ''.concat(y, '-rtl'), 'rtl' === p),
              n),
              b,
            ),
            O = l.useMemo(function () {
              return {
                siderHook: {
                  addSider: function (e) {
                    g(function (t) {
                      return [].concat((0, o.Z)(t), [e]);
                    });
                  },
                  removeSider: function (e) {
                    g(function (t) {
                      return t.filter(function (t) {
                        return t !== e;
                      });
                    });
                  },
                },
              };
            }, []);
          return l.createElement(
            d.Provider,
            { value: O },
            l.createElement(E, (0, a.Z)({ ref: t, className: x }, C), w),
          );
        }),
        h = p({
          suffixCls: 'layout',
          tagName: 'section',
          displayName: 'Layout',
        })(m),
        g = p({
          suffixCls: 'layout-header',
          tagName: 'header',
          displayName: 'Header',
        })(v),
        y = p({
          suffixCls: 'layout-footer',
          tagName: 'footer',
          displayName: 'Footer',
        })(v),
        b = p({
          suffixCls: 'layout-content',
          tagName: 'main',
          displayName: 'Content',
        })(v);
      t['ZP'] = h;
    },
    66948: function (e, t, n) {
      'use strict';
      n.d(t, {
        J: function () {
          return u;
        },
      });
      var o = n(22122),
        r = n(67294),
        i = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        },
        a = r.createContext(null),
        u = function (e) {
          var t = e.children,
            n = i(e, ['children']),
            u = r.useContext(a),
            c = r.useMemo(
              function () {
                return (0, o.Z)((0, o.Z)({}, u), n);
              },
              [u, n.prefixCls, n.mode, n.selectable],
            );
          return r.createElement(a.Provider, { value: c }, t);
        };
      t['Z'] = a;
    },
    91522: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return j;
        },
      });
      var o = n(6610),
        r = n(5991),
        i = n(10379),
        a = n(54070),
        u = n(22122),
        c = n(44545),
        l = n(35510),
        s = n.n(l),
        f = n(12773),
        d = n(89027),
        p = n(26670),
        v = n(67294),
        m = n(9054),
        h = n(22540),
        g = n(31064),
        y = n(75447),
        b = n(90484),
        w = n(96156),
        Z = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        },
        E = function (e) {
          var t = e.prefixCls,
            n = e.className,
            o = e.dashed,
            r = Z(e, ['prefixCls', 'className', 'dashed']),
            i = v.useContext(m.E_),
            a = i.getPrefixCls,
            c = a('menu', t),
            l = s()((0, w.Z)({}, ''.concat(c, '-item-divider-dashed'), !!o), n);
          return v.createElement(f.iz, (0, u.Z)({ className: l }, r));
        },
        C = E,
        x = n(10048),
        O = n(26636),
        M = (0, v.createContext)({
          prefixCls: '',
          firstLevel: !0,
          inlineCollapsed: !1,
        }),
        N = M,
        P = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        },
        T = (function (e) {
          (0, i.Z)(n, e);
          var t = (0, a.Z)(n);
          function n() {
            var e;
            return (
              (0, o.Z)(this, n),
              (e = t.apply(this, arguments)),
              (e.renderItem = function (t) {
                var n,
                  o,
                  r = t.siderCollapsed,
                  i = e.context,
                  a = i.prefixCls,
                  c = i.firstLevel,
                  l = i.inlineCollapsed,
                  d = i.direction,
                  p = i.disableMenuItemTitleTooltip,
                  m = e.props,
                  h = m.className,
                  g = m.children,
                  b = e.props,
                  Z = b.title,
                  E = b.icon,
                  C = b.danger,
                  M = P(b, ['title', 'icon', 'danger']),
                  N = Z;
                'undefined' === typeof Z
                  ? (N = c ? g : '')
                  : !1 === Z && (N = '');
                var T = { title: N };
                r || l || ((T.title = null), (T.open = !1));
                var S = (0, x.Z)(g).length,
                  k = v.createElement(
                    f.ck,
                    (0, u.Z)({}, M, {
                      className: s()(
                        ((n = {}),
                        (0, w.Z)(n, ''.concat(a, '-item-danger'), C),
                        (0, w.Z)(
                          n,
                          ''.concat(a, '-item-only-child'),
                          1 === (E ? S + 1 : S),
                        ),
                        n),
                        h,
                      ),
                      title: 'string' === typeof Z ? Z : void 0,
                    }),
                    (0, y.Tm)(E, {
                      className: s()(
                        (0, y.l$)(E)
                          ? null === (o = E.props) || void 0 === o
                            ? void 0
                            : o.className
                          : '',
                        ''.concat(a, '-item-icon'),
                      ),
                    }),
                    e.renderItemChildren(l),
                  );
                return (
                  p ||
                    (k = v.createElement(
                      O.Z,
                      (0, u.Z)({}, T, {
                        placement: 'rtl' === d ? 'left' : 'right',
                        overlayClassName: ''.concat(
                          a,
                          '-inline-collapsed-tooltip',
                        ),
                      }),
                      k,
                    )),
                  k
                );
              }),
              e
            );
          }
          return (
            (0, r.Z)(n, [
              {
                key: 'renderItemChildren',
                value: function (e) {
                  var t = this.context,
                    n = t.prefixCls,
                    o = t.firstLevel,
                    r = this.props,
                    i = r.icon,
                    a = r.children,
                    u = v.createElement(
                      'span',
                      { className: ''.concat(n, '-title-content') },
                      a,
                    );
                  return (!i || ((0, y.l$)(a) && 'span' === a.type)) &&
                    a &&
                    e &&
                    o &&
                    'string' === typeof a
                    ? v.createElement(
                        'div',
                        { className: ''.concat(n, '-inline-collapsed-noicon') },
                        a.charAt(0),
                      )
                    : u;
                },
              },
              {
                key: 'render',
                value: function () {
                  return v.createElement(h.D.Consumer, null, this.renderItem);
                },
              },
            ]),
            n
          );
        })(v.Component);
      function S(e) {
        var t,
          n,
          o = e.popupClassName,
          r = e.icon,
          i = e.title,
          a = e.theme,
          c = v.useContext(N),
          l = c.prefixCls,
          d = c.inlineCollapsed,
          m = c.antdMenuTheme,
          h = (0, f.Xl)();
        if (r) {
          var g = (0, y.l$)(i) && 'span' === i.type;
          n = v.createElement(
            v.Fragment,
            null,
            (0, y.Tm)(r, {
              className: s()(
                (0, y.l$)(r)
                  ? null === (t = r.props) || void 0 === t
                    ? void 0
                    : t.className
                  : '',
                ''.concat(l, '-item-icon'),
              ),
            }),
            g
              ? i
              : v.createElement(
                  'span',
                  { className: ''.concat(l, '-title-content') },
                  i,
                ),
          );
        } else
          n =
            d && !h.length && i && 'string' === typeof i
              ? v.createElement(
                  'div',
                  { className: ''.concat(l, '-inline-collapsed-noicon') },
                  i.charAt(0),
                )
              : v.createElement(
                  'span',
                  { className: ''.concat(l, '-title-content') },
                  i,
                );
        var b = v.useMemo(
          function () {
            return (0, u.Z)((0, u.Z)({}, c), { firstLevel: !1 });
          },
          [c],
        );
        return v.createElement(
          N.Provider,
          { value: b },
          v.createElement(
            f.Wd,
            (0, u.Z)({}, (0, p.Z)(e, ['icon']), {
              title: n,
              popupClassName: s()(l, ''.concat(l, '-').concat(a || m), o),
            }),
          ),
        );
      }
      T.contextType = N;
      var k = S,
        R = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        };
      function _(e) {
        return (e || [])
          .map(function (e, t) {
            if (e && 'object' === (0, b.Z)(e)) {
              var n = e,
                o = n.label,
                r = n.children,
                i = n.key,
                a = n.type,
                c = R(n, ['label', 'children', 'key', 'type']),
                l = null !== i && void 0 !== i ? i : 'tmp-'.concat(t);
              return r || 'group' === a
                ? 'group' === a
                  ? v.createElement(
                      f.BW,
                      (0, u.Z)({ key: l }, c, { title: o }),
                      _(r),
                    )
                  : v.createElement(
                      k,
                      (0, u.Z)({ key: l }, c, { title: o }),
                      _(r),
                    )
                : 'divider' === a
                ? v.createElement(C, (0, u.Z)({ key: l }, c))
                : v.createElement(T, (0, u.Z)({ key: l }, c), o);
            }
            return null;
          })
          .filter(function (e) {
            return e;
          });
      }
      function I(e) {
        return v.useMemo(
          function () {
            return e ? _(e) : e;
          },
          [e],
        );
      }
      var A = n(66948),
        D = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        },
        L = (0, v.forwardRef)(function (e, t) {
          var n,
            o = v.useContext(A.Z) || {},
            r = v.useContext(m.E_),
            i = r.getPrefixCls,
            a = r.getPopupContainer,
            l = r.direction,
            h = i(),
            b = e.prefixCls,
            w = e.className,
            Z = e.theme,
            E = void 0 === Z ? 'light' : Z,
            C = e.expandIcon,
            x = e._internalDisableMenuItemTitleTooltip,
            O = e.inlineCollapsed,
            M = e.siderCollapsed,
            P = e.items,
            T = e.children,
            S = e.mode,
            k = e.selectable,
            R = e.onClick,
            _ = D(e, [
              'prefixCls',
              'className',
              'theme',
              'expandIcon',
              '_internalDisableMenuItemTitleTooltip',
              'inlineCollapsed',
              'siderCollapsed',
              'items',
              'children',
              'mode',
              'selectable',
              'onClick',
            ]),
            L = (0, p.Z)(_, ['collapsedWidth']),
            H = I(P) || T;
          null === (n = o.validator) || void 0 === n || n.call(o, { mode: S });
          var j,
            V = (0, d.Z)(function () {
              var e;
              null === R || void 0 === R || R.apply(void 0, arguments),
                null ===
                  (e = null === o || void 0 === o ? void 0 : o.onClick) ||
                  void 0 === e ||
                  e.call(o);
            }),
            W = o.mode || S,
            z = null !== k && void 0 !== k ? k : o.selectable,
            K = v.useMemo(
              function () {
                return void 0 !== M ? M : O;
              },
              [O, M],
            ),
            F = {
              horizontal: { motionName: ''.concat(h, '-slide-up') },
              inline: g.ZP,
              other: { motionName: ''.concat(h, '-zoom-big') },
            },
            U = i('menu', b || o.prefixCls),
            B = s()(''.concat(U, '-').concat(E), w);
          j =
            'function' === typeof C
              ? C
              : (0, y.Tm)(C || o.expandIcon, {
                  className: ''.concat(U, '-submenu-expand-icon'),
                });
          var Y = v.useMemo(
            function () {
              return {
                prefixCls: U,
                inlineCollapsed: K || !1,
                antdMenuTheme: E,
                direction: l,
                firstLevel: !0,
                disableMenuItemTitleTooltip: x,
              };
            },
            [U, K, E, l, x],
          );
          return v.createElement(
            A.Z.Provider,
            { value: null },
            v.createElement(
              N.Provider,
              { value: Y },
              v.createElement(
                f.ZP,
                (0, u.Z)(
                  {
                    getPopupContainer: a,
                    overflowedIndicator: v.createElement(c.Z, null),
                    overflowedIndicatorPopupClassName: ''
                      .concat(U, '-')
                      .concat(E),
                    mode: W,
                    selectable: z,
                    onClick: V,
                  },
                  L,
                  {
                    inlineCollapsed: K,
                    className: B,
                    prefixCls: U,
                    direction: l,
                    defaultMotions: F,
                    expandIcon: j,
                    ref: t,
                  },
                ),
                H,
              ),
            ),
          );
        }),
        H = (function (e) {
          (0, i.Z)(n, e);
          var t = (0, a.Z)(n);
          function n() {
            var e;
            return (
              (0, o.Z)(this, n),
              (e = t.apply(this, arguments)),
              (e.focus = function (t) {
                var n;
                null === (n = e.menu) || void 0 === n || n.focus(t);
              }),
              e
            );
          }
          return (
            (0, r.Z)(n, [
              {
                key: 'render',
                value: function () {
                  var e = this;
                  return v.createElement(h.D.Consumer, null, function (t) {
                    return v.createElement(
                      L,
                      (0, u.Z)(
                        {
                          ref: function (t) {
                            e.menu = t;
                          },
                        },
                        e.props,
                        t,
                      ),
                    );
                  });
                },
              },
            ]),
            n
          );
        })(v.Component);
      (H.Divider = C), (H.Item = T), (H.SubMenu = k), (H.ItemGroup = f.BW);
      var j = H;
    },
    1358: function (e, t, n) {
      'use strict';
      n.d(t, {
        ri: function () {
          return d;
        },
        BR: function () {
          return p;
        },
      });
      var o = n(22122),
        r = n(96156),
        i = n(35510),
        a = n.n(i),
        u = n(10048),
        c = n(67294),
        l = n(9054),
        s = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        },
        f = c.createContext(null),
        d = function (e, t) {
          var n = c.useContext(f),
            o = c.useMemo(
              function () {
                var o;
                if (!n) return '';
                var i = n.compactDirection,
                  u = n.isFirstItem,
                  c = n.isLastItem,
                  l = 'vertical' === i ? '-vertical-' : '-';
                return a()(
                  ((o = {}),
                  (0, r.Z)(o, ''.concat(e, '-compact').concat(l, 'item'), !0),
                  (0, r.Z)(
                    o,
                    ''.concat(e, '-compact').concat(l, 'first-item'),
                    u,
                  ),
                  (0, r.Z)(
                    o,
                    ''.concat(e, '-compact').concat(l, 'last-item'),
                    c,
                  ),
                  (0, r.Z)(
                    o,
                    ''.concat(e, '-compact').concat(l, 'item-rtl'),
                    'rtl' === t,
                  ),
                  o),
                );
              },
              [e, t, n],
            );
          return {
            compactSize: null === n || void 0 === n ? void 0 : n.compactSize,
            compactDirection:
              null === n || void 0 === n ? void 0 : n.compactDirection,
            compactItemClassnames: o,
          };
        },
        p = function (e) {
          var t = e.children;
          return c.createElement(f.Provider, { value: null }, t);
        },
        v = function (e) {
          var t = e.children,
            n = s(e, ['children']);
          return c.createElement(f.Provider, { value: n }, t);
        },
        m = function (e) {
          var t,
            n = c.useContext(l.E_),
            i = n.getPrefixCls,
            d = n.direction,
            p = e.size,
            m = void 0 === p ? 'middle' : p,
            h = e.direction,
            g = e.block,
            y = e.prefixCls,
            b = e.className,
            w = e.children,
            Z = s(e, [
              'size',
              'direction',
              'block',
              'prefixCls',
              'className',
              'children',
            ]),
            E = i('space-compact', y),
            C = a()(
              E,
              ((t = {}),
              (0, r.Z)(t, ''.concat(E, '-rtl'), 'rtl' === d),
              (0, r.Z)(t, ''.concat(E, '-block'), g),
              (0, r.Z)(t, ''.concat(E, '-vertical'), 'vertical' === h),
              t),
              b,
            ),
            x = c.useContext(f),
            O = (0, u.Z)(w),
            M = c.useMemo(
              function () {
                return O.map(function (e, t) {
                  var n = (e && e.key) || ''.concat(E, '-item-').concat(t);
                  return c.createElement(
                    v,
                    {
                      key: n,
                      compactSize: m,
                      compactDirection: h,
                      isFirstItem:
                        0 === t &&
                        (!x ||
                          (null === x || void 0 === x
                            ? void 0
                            : x.isFirstItem)),
                      isLastItem:
                        t === O.length - 1 &&
                        (!x ||
                          (null === x || void 0 === x ? void 0 : x.isLastItem)),
                    },
                    e,
                  );
                });
              },
              [m, O, x],
            );
          return 0 === O.length
            ? null
            : c.createElement('div', (0, o.Z)({ className: C }, Z), M);
        };
      t['ZP'] = m;
    },
    26636: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return S;
        },
      });
      var o = n(96156),
        r = n(28481),
        i = n(22122),
        a = n(35510),
        u = n.n(a),
        c = n(90484),
        l = n(28991),
        s = n(81253),
        f = n(67294),
        d = n(77814),
        p = n(81412);
      function v(e) {
        var t = e.showArrow,
          n = e.arrowContent,
          o = e.children,
          r = e.prefixCls,
          i = e.id,
          a = e.overlayInnerStyle,
          c = e.className,
          l = e.style;
        return f.createElement(
          'div',
          { className: u()(''.concat(r, '-content'), c), style: l },
          !1 !== t &&
            f.createElement(
              'div',
              { className: ''.concat(r, '-arrow'), key: 'arrow' },
              n,
            ),
          f.createElement(
            'div',
            {
              className: ''.concat(r, '-inner'),
              id: i,
              role: 'tooltip',
              style: a,
            },
            'function' === typeof o ? o() : o,
          ),
        );
      }
      var m = function (e, t) {
          var n = e.overlayClassName,
            o = e.trigger,
            r = void 0 === o ? ['hover'] : o,
            a = e.mouseEnterDelay,
            u = void 0 === a ? 0 : a,
            m = e.mouseLeaveDelay,
            h = void 0 === m ? 0.1 : m,
            g = e.overlayStyle,
            y = e.prefixCls,
            b = void 0 === y ? 'rc-tooltip' : y,
            w = e.children,
            Z = e.onVisibleChange,
            E = e.afterVisibleChange,
            C = e.transitionName,
            x = e.animation,
            O = e.motion,
            M = e.placement,
            N = void 0 === M ? 'right' : M,
            P = e.align,
            T = void 0 === P ? {} : P,
            S = e.destroyTooltipOnHide,
            k = void 0 !== S && S,
            R = e.defaultVisible,
            _ = e.getTooltipContainer,
            I = e.overlayInnerStyle,
            A = e.arrowContent,
            D = e.overlay,
            L = e.id,
            H = e.showArrow,
            j = (0, s.Z)(e, [
              'overlayClassName',
              'trigger',
              'mouseEnterDelay',
              'mouseLeaveDelay',
              'overlayStyle',
              'prefixCls',
              'children',
              'onVisibleChange',
              'afterVisibleChange',
              'transitionName',
              'animation',
              'motion',
              'placement',
              'align',
              'destroyTooltipOnHide',
              'defaultVisible',
              'getTooltipContainer',
              'overlayInnerStyle',
              'arrowContent',
              'overlay',
              'id',
              'showArrow',
            ]),
            V = (0, f.useRef)(null);
          (0, f.useImperativeHandle)(t, function () {
            return V.current;
          });
          var W = (0, l.Z)({}, j);
          'visible' in e && (W.popupVisible = e.visible);
          var z = function () {
              return f.createElement(
                v,
                {
                  showArrow: H,
                  arrowContent: A,
                  key: 'content',
                  prefixCls: b,
                  id: L,
                  overlayInnerStyle: I,
                },
                D,
              );
            },
            K = !1,
            F = !1;
          if ('boolean' === typeof k) K = k;
          else if (k && 'object' === (0, c.Z)(k)) {
            var U = k.keepParent;
            (K = !0 === U), (F = !1 === U);
          }
          return f.createElement(
            d.Z,
            (0, i.Z)(
              {
                popupClassName: n,
                prefixCls: b,
                popup: z,
                action: r,
                builtinPlacements: p.C,
                popupPlacement: N,
                ref: V,
                popupAlign: T,
                getPopupContainer: _,
                onPopupVisibleChange: Z,
                afterPopupVisibleChange: E,
                popupTransitionName: C,
                popupAnimation: x,
                popupMotion: O,
                defaultPopupVisible: R,
                destroyPopupOnHide: K,
                autoDestroy: F,
                mouseLeaveDelay: h,
                popupStyle: g,
                mouseEnterDelay: u,
              },
              W,
            ),
            w,
          );
        },
        h = (0, f.forwardRef)(m),
        g = h,
        y = n(82321),
        b = n(9054),
        w = n(4381),
        Z =
          ((0, w.b)('success', 'processing', 'error', 'default', 'warning'),
          (0, w.b)(
            'pink',
            'red',
            'yellow',
            'orange',
            'cyan',
            'green',
            'blue',
            'purple',
            'geekblue',
            'magenta',
            'volcano',
            'gold',
            'lime',
          )),
        E = n(31064),
        C = n(19405),
        x = n(75447),
        O = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        },
        M = function (e, t) {
          var n = {},
            o = (0, i.Z)({}, e);
          return (
            t.forEach(function (t) {
              e && t in e && ((n[t] = e[t]), delete o[t]);
            }),
            { picked: n, omitted: o }
          );
        },
        N = new RegExp('^('.concat(Z.join('|'), ')(-inverse)?$'));
      function P(e, t) {
        var n = e.type;
        if (
          ((!0 === n.__ANT_BUTTON || 'button' === e.type) &&
            e.props.disabled) ||
          (!0 === n.__ANT_SWITCH && (e.props.disabled || e.props.loading)) ||
          (!0 === n.__ANT_RADIO && e.props.disabled)
        ) {
          var o = M(e.props.style, [
              'position',
              'left',
              'right',
              'top',
              'bottom',
              'float',
              'display',
              'zIndex',
            ]),
            r = o.picked,
            a = o.omitted,
            c = (0, i.Z)((0, i.Z)({ display: 'inline-block' }, r), {
              cursor: 'not-allowed',
              width: e.props.block ? '100%' : void 0,
            }),
            l = (0, i.Z)((0, i.Z)({}, a), { pointerEvents: 'none' }),
            s = (0, x.Tm)(e, { style: l, className: null });
          return f.createElement(
            'span',
            {
              style: c,
              className: u()(
                e.props.className,
                ''.concat(t, '-disabled-compatible-wrapper'),
              ),
            },
            s,
          );
        }
        return e;
      }
      var T = f.forwardRef(function (e, t) {
        var n,
          a = f.useContext(b.E_),
          c = a.getPopupContainer,
          l = a.getPrefixCls,
          s = a.direction;
        var d = (0, y.Z)(!1, {
            value: void 0 !== e.open ? e.open : e.visible,
            defaultValue:
              void 0 !== e.defaultOpen ? e.defaultOpen : e.defaultVisible,
          }),
          p = (0, r.Z)(d, 2),
          v = p[0],
          m = p[1],
          h = function () {
            var t = e.title,
              n = e.overlay;
            return !t && !n && 0 !== t;
          },
          w = function (t) {
            var n, o;
            m(!h() && t),
              h() ||
                (null === (n = e.onOpenChange) || void 0 === n || n.call(e, t),
                null === (o = e.onVisibleChange) ||
                  void 0 === o ||
                  o.call(e, t));
          },
          Z = function () {
            var t = e.builtinPlacements,
              n = e.arrowPointAtCenter,
              o = void 0 !== n && n,
              r = e.autoAdjustOverflow,
              i = void 0 === r || r;
            return (
              t || (0, C.Z)({ arrowPointAtCenter: o, autoAdjustOverflow: i })
            );
          },
          M = function (e, t) {
            var n = Z(),
              o = Object.keys(n).find(function (e) {
                var o, r;
                return (
                  n[e].points[0] ===
                    (null === (o = t.points) || void 0 === o ? void 0 : o[0]) &&
                  n[e].points[1] ===
                    (null === (r = t.points) || void 0 === r ? void 0 : r[1])
                );
              });
            if (o) {
              var r = e.getBoundingClientRect(),
                i = { top: '50%', left: '50%' };
              /top|Bottom/.test(o)
                ? (i.top = ''.concat(r.height - t.offset[1], 'px'))
                : /Top|bottom/.test(o) &&
                  (i.top = ''.concat(-t.offset[1], 'px')),
                /left|Right/.test(o)
                  ? (i.left = ''.concat(r.width - t.offset[0], 'px'))
                  : /right|Left/.test(o) &&
                    (i.left = ''.concat(-t.offset[0], 'px')),
                (e.style.transformOrigin = ''
                  .concat(i.left, ' ')
                  .concat(i.top));
            }
          },
          T = function () {
            var t = e.title,
              n = e.overlay;
            return 0 === t ? t : n || t || '';
          },
          S = e.getPopupContainer,
          k = e.placement,
          R = void 0 === k ? 'top' : k,
          _ = e.mouseEnterDelay,
          I = void 0 === _ ? 0.1 : _,
          A = e.mouseLeaveDelay,
          D = void 0 === A ? 0.1 : A,
          L = O(e, [
            'getPopupContainer',
            'placement',
            'mouseEnterDelay',
            'mouseLeaveDelay',
          ]),
          H = e.prefixCls,
          j = e.openClassName,
          V = e.getTooltipContainer,
          W = e.overlayClassName,
          z = e.color,
          K = e.overlayInnerStyle,
          F = e.children,
          U = l('tooltip', H),
          B = l(),
          Y = v;
        'open' in e || 'visible' in e || !h() || (Y = !1);
        var X = P(
            (0, x.l$)(F) && !(0, x.M2)(F)
              ? F
              : f.createElement('span', null, F),
            U,
          ),
          G = X.props,
          q =
            G.className && 'string' !== typeof G.className
              ? G.className
              : u()(G.className, (0, o.Z)({}, j || ''.concat(U, '-open'), !0)),
          Q = u()(
            W,
            ((n = {}),
            (0, o.Z)(n, ''.concat(U, '-rtl'), 'rtl' === s),
            (0, o.Z)(n, ''.concat(U, '-').concat(z), z && N.test(z)),
            n),
          ),
          $ = K,
          J = {};
        return (
          z &&
            !N.test(z) &&
            (($ = (0, i.Z)((0, i.Z)({}, K), { background: z })),
            (J = { '--antd-arrow-background-color': z })),
          f.createElement(
            g,
            (0, i.Z)({}, L, {
              placement: R,
              mouseEnterDelay: I,
              mouseLeaveDelay: D,
              prefixCls: U,
              overlayClassName: Q,
              getTooltipContainer: S || V || c,
              ref: t,
              builtinPlacements: Z(),
              overlay: T(),
              visible: Y,
              onVisibleChange: w,
              onPopupAlign: M,
              overlayInnerStyle: $,
              arrowContent: f.createElement('span', {
                className: ''.concat(U, '-arrow-content'),
                style: J,
              }),
              motion: {
                motionName: (0, E.mL)(B, 'zoom-big-fast', e.transitionName),
                motionDeadline: 1e3,
              },
            }),
            Y ? (0, x.Tm)(X, { className: q }) : X,
          )
        );
      });
      var S = T;
    },
    3305: function (e, t) {
      'use strict';
      function n(e, t) {
        for (var n = Object.assign({}, e), o = 0; o < t.length; o += 1) {
          var r = t[o];
          delete n[r];
        }
        return n;
      }
      t['Z'] = n;
    },
    12773: function (e, t, n) {
      'use strict';
      n.d(t, {
        iz: function () {
          return xt;
        },
        ck: function () {
          return Be;
        },
        BW: function () {
          return Ct;
        },
        sN: function () {
          return Be;
        },
        GP: function () {
          return Ct;
        },
        Wd: function () {
          return mt;
        },
        ZP: function () {
          return Mt;
        },
        Xl: function () {
          return J;
        },
      });
      var o = n(22122),
        r = n(96156),
        i = n(28991),
        a = n(85061),
        u = n(28481),
        c = n(81253),
        l = n(35510),
        s = n.n(l),
        f = n(67294),
        d = n(83710),
        p = n(31234),
        v = [
          'prefixCls',
          'invalidate',
          'item',
          'renderItem',
          'responsive',
          'responsiveDisabled',
          'registerSize',
          'itemKey',
          'className',
          'style',
          'children',
          'display',
          'order',
          'component',
        ],
        m = void 0;
      function h(e, t) {
        var n = e.prefixCls,
          r = e.invalidate,
          a = e.item,
          u = e.renderItem,
          l = e.responsive,
          p = e.responsiveDisabled,
          h = e.registerSize,
          g = e.itemKey,
          y = e.className,
          b = e.style,
          w = e.children,
          Z = e.display,
          E = e.order,
          C = e.component,
          x = void 0 === C ? 'div' : C,
          O = (0, c.Z)(e, v),
          M = l && !Z;
        function N(e) {
          h(g, e);
        }
        f.useEffect(function () {
          return function () {
            N(null);
          };
        }, []);
        var P,
          T = u && a !== m ? u(a) : w;
        r ||
          (P = {
            opacity: M ? 0 : 1,
            height: M ? 0 : m,
            overflowY: M ? 'hidden' : m,
            order: l ? E : m,
            pointerEvents: M ? 'none' : m,
            position: M ? 'absolute' : m,
          });
        var S = {};
        M && (S['aria-hidden'] = !0);
        var k = f.createElement(
          x,
          (0, o.Z)(
            { className: s()(!r && n, y), style: (0, i.Z)((0, i.Z)({}, P), b) },
            S,
            O,
            { ref: t },
          ),
          T,
        );
        return (
          l &&
            (k = f.createElement(
              d.Z,
              {
                onResize: function (e) {
                  var t = e.offsetWidth;
                  N(t);
                },
                disabled: p,
              },
              k,
            )),
          k
        );
      }
      var g = f.forwardRef(h);
      g.displayName = 'Item';
      var y = g,
        b = n(90468),
        w = n(66493);
      function Z() {
        var e = (0, w.Z)({}),
          t = (0, u.Z)(e, 2),
          n = t[1],
          o = (0, f.useRef)([]),
          r = 0,
          i = 0;
        function a(e) {
          var t = r;
          (r += 1), o.current.length < t + 1 && (o.current[t] = e);
          var a = o.current[t];
          function u(e) {
            (o.current[t] = 'function' === typeof e ? e(o.current[t]) : e),
              b.Z.cancel(i),
              (i = (0, b.Z)(function () {
                n({}, !0);
              }));
          }
          return [a, u];
        }
        return a;
      }
      var E = ['component'],
        C = ['className'],
        x = ['className'],
        O = function (e, t) {
          var n = f.useContext(T);
          if (!n) {
            var r = e.component,
              i = void 0 === r ? 'div' : r,
              a = (0, c.Z)(e, E);
            return f.createElement(i, (0, o.Z)({}, a, { ref: t }));
          }
          var u = n.className,
            l = (0, c.Z)(n, C),
            d = e.className,
            p = (0, c.Z)(e, x);
          return f.createElement(
            T.Provider,
            { value: null },
            f.createElement(
              y,
              (0, o.Z)({ ref: t, className: s()(u, d) }, l, p),
            ),
          );
        },
        M = f.forwardRef(O);
      M.displayName = 'RawItem';
      var N = M,
        P = [
          'prefixCls',
          'data',
          'renderItem',
          'renderRawItem',
          'itemKey',
          'itemWidth',
          'ssr',
          'style',
          'className',
          'maxCount',
          'renderRest',
          'renderRawRest',
          'suffix',
          'component',
          'itemComponent',
          'onVisibleChange',
        ],
        T = f.createContext(null),
        S = 'responsive',
        k = 'invalidate';
      function R(e) {
        return '+ '.concat(e.length, ' ...');
      }
      function _(e, t) {
        var n = e.prefixCls,
          r = void 0 === n ? 'rc-overflow' : n,
          a = e.data,
          l = void 0 === a ? [] : a,
          v = e.renderItem,
          m = e.renderRawItem,
          h = e.itemKey,
          g = e.itemWidth,
          b = void 0 === g ? 10 : g,
          w = e.ssr,
          E = e.style,
          C = e.className,
          x = e.maxCount,
          O = e.renderRest,
          M = e.renderRawRest,
          N = e.suffix,
          _ = e.component,
          I = void 0 === _ ? 'div' : _,
          A = e.itemComponent,
          D = e.onVisibleChange,
          L = (0, c.Z)(e, P),
          H = Z(),
          j = 'full' === w,
          V = H(null),
          W = (0, u.Z)(V, 2),
          z = W[0],
          K = W[1],
          F = z || 0,
          U = H(new Map()),
          B = (0, u.Z)(U, 2),
          Y = B[0],
          X = B[1],
          G = H(0),
          q = (0, u.Z)(G, 2),
          Q = q[0],
          $ = q[1],
          J = H(0),
          ee = (0, u.Z)(J, 2),
          te = ee[0],
          ne = ee[1],
          oe = H(0),
          re = (0, u.Z)(oe, 2),
          ie = re[0],
          ae = re[1],
          ue = (0, f.useState)(null),
          ce = (0, u.Z)(ue, 2),
          le = ce[0],
          se = ce[1],
          fe = (0, f.useState)(null),
          de = (0, u.Z)(fe, 2),
          pe = de[0],
          ve = de[1],
          me = f.useMemo(
            function () {
              return null === pe && j ? Number.MAX_SAFE_INTEGER : pe || 0;
            },
            [pe, z],
          ),
          he = (0, f.useState)(!1),
          ge = (0, u.Z)(he, 2),
          ye = ge[0],
          be = ge[1],
          we = ''.concat(r, '-item'),
          Ze = Math.max(Q, te),
          Ee = x === S,
          Ce = l.length && Ee,
          xe = x === k,
          Oe = Ce || ('number' === typeof x && l.length > x),
          Me = (0, f.useMemo)(
            function () {
              var e = l;
              return (
                Ce
                  ? (e =
                      null === z && j
                        ? l
                        : l.slice(0, Math.min(l.length, F / b)))
                  : 'number' === typeof x && (e = l.slice(0, x)),
                e
              );
            },
            [l, b, z, x, Ce],
          ),
          Ne = (0, f.useMemo)(
            function () {
              return Ce ? l.slice(me + 1) : l.slice(Me.length);
            },
            [l, Me, Ce, me],
          ),
          Pe = (0, f.useCallback)(
            function (e, t) {
              var n;
              return 'function' === typeof h
                ? h(e)
                : null !==
                    (n = h && (null === e || void 0 === e ? void 0 : e[h])) &&
                  void 0 !== n
                ? n
                : t;
            },
            [h],
          ),
          Te = (0, f.useCallback)(
            v ||
              function (e) {
                return e;
              },
            [v],
          );
        function Se(e, t, n) {
          (pe !== e || (void 0 !== t && t !== le)) &&
            (ve(e),
            n || (be(e < l.length - 1), null === D || void 0 === D || D(e)),
            void 0 !== t && se(t));
        }
        function ke(e, t) {
          K(t.clientWidth);
        }
        function Re(e, t) {
          X(function (n) {
            var o = new Map(n);
            return null === t ? o['delete'](e) : o.set(e, t), o;
          });
        }
        function _e(e, t) {
          ne(t), $(te);
        }
        function Ie(e, t) {
          ae(t);
        }
        function Ae(e) {
          return Y.get(Pe(Me[e], e));
        }
        (0, p.Z)(
          function () {
            if (F && Ze && Me) {
              var e = ie,
                t = Me.length,
                n = t - 1;
              if (!t) return void Se(0, null);
              for (var o = 0; o < t; o += 1) {
                var r = Ae(o);
                if ((j && (r = r || 0), void 0 === r)) {
                  Se(o - 1, void 0, !0);
                  break;
                }
                if (
                  ((e += r),
                  (0 === n && e <= F) || (o === n - 1 && e + Ae(n) <= F))
                ) {
                  Se(n, null);
                  break;
                }
                if (e + Ze > F) {
                  Se(o - 1, e - r - ie + te);
                  break;
                }
              }
              N && Ae(0) + ie > F && se(null);
            }
          },
          [F, Y, te, ie, Pe, Me],
        );
        var De = ye && !!Ne.length,
          Le = {};
        null !== le && Ce && (Le = { position: 'absolute', left: le, top: 0 });
        var He,
          je = { prefixCls: we, responsive: Ce, component: A, invalidate: xe },
          Ve = m
            ? function (e, t) {
                var n = Pe(e, t);
                return f.createElement(
                  T.Provider,
                  {
                    key: n,
                    value: (0, i.Z)(
                      (0, i.Z)({}, je),
                      {},
                      {
                        order: t,
                        item: e,
                        itemKey: n,
                        registerSize: Re,
                        display: t <= me,
                      },
                    ),
                  },
                  m(e, t),
                );
              }
            : function (e, t) {
                var n = Pe(e, t);
                return f.createElement(
                  y,
                  (0, o.Z)({}, je, {
                    order: t,
                    key: n,
                    item: e,
                    renderItem: Te,
                    itemKey: n,
                    registerSize: Re,
                    display: t <= me,
                  }),
                );
              },
          We = {
            order: De ? me : Number.MAX_SAFE_INTEGER,
            className: ''.concat(we, '-rest'),
            registerSize: _e,
            display: De,
          };
        if (M)
          M &&
            (He = f.createElement(
              T.Provider,
              { value: (0, i.Z)((0, i.Z)({}, je), We) },
              M(Ne),
            ));
        else {
          var ze = O || R;
          He = f.createElement(
            y,
            (0, o.Z)({}, je, We),
            'function' === typeof ze ? ze(Ne) : ze,
          );
        }
        var Ke = f.createElement(
          I,
          (0, o.Z)({ className: s()(!xe && r, C), style: E, ref: t }, L),
          Me.map(Ve),
          Oe ? He : null,
          N &&
            f.createElement(
              y,
              (0, o.Z)({}, je, {
                responsive: Ee,
                responsiveDisabled: !Ce,
                order: me,
                className: ''.concat(we, '-suffix'),
                registerSize: Ie,
                display: !0,
                style: Le,
              }),
              N,
            ),
        );
        return (
          Ee &&
            (Ke = f.createElement(d.Z, { onResize: ke, disabled: !Ce }, Ke)),
          Ke
        );
      }
      var I = f.forwardRef(_);
      (I.displayName = 'Overflow'),
        (I.Item = N),
        (I.RESPONSIVE = S),
        (I.INVALIDATE = k);
      var A = I,
        D = A,
        L = n(82321),
        H = n(32503),
        j = n(73935),
        V = n(86423),
        W = f.createContext(null);
      function z(e, t) {
        return void 0 === e ? null : ''.concat(e, '-').concat(t);
      }
      function K(e) {
        var t = f.useContext(W);
        return z(t, e);
      }
      var F = n(45851),
        U = ['children', 'locked'],
        B = f.createContext(null);
      function Y(e, t) {
        var n = (0, i.Z)({}, e);
        return (
          Object.keys(t).forEach(function (e) {
            var o = t[e];
            void 0 !== o && (n[e] = o);
          }),
          n
        );
      }
      function X(e) {
        var t = e.children,
          n = e.locked,
          o = (0, c.Z)(e, U),
          r = f.useContext(B),
          i = (0, F.Z)(
            function () {
              return Y(r, o);
            },
            [r, o],
            function (e, t) {
              return !n && (e[0] !== t[0] || !(0, V.Z)(e[1], t[1], !0));
            },
          );
        return f.createElement(B.Provider, { value: i }, t);
      }
      var G = [],
        q = f.createContext(null);
      function Q() {
        return f.useContext(q);
      }
      var $ = f.createContext(G);
      function J(e) {
        var t = f.useContext($);
        return f.useMemo(
          function () {
            return void 0 !== e ? [].concat((0, a.Z)(t), [e]) : t;
          },
          [t, e],
        );
      }
      var ee = f.createContext(null),
        te = f.createContext({}),
        ne = te,
        oe = n(90826),
        re = n(63616),
        ie = oe.Z.LEFT,
        ae = oe.Z.RIGHT,
        ue = oe.Z.UP,
        ce = oe.Z.DOWN,
        le = oe.Z.ENTER,
        se = oe.Z.ESC,
        fe = oe.Z.HOME,
        de = oe.Z.END,
        pe = [ue, ce, ie, ae];
      function ve(e, t, n, o) {
        var i,
          a,
          u,
          c,
          l = 'prev',
          s = 'next',
          f = 'children',
          d = 'parent';
        if ('inline' === e && o === le) return { inlineTrigger: !0 };
        var p = ((i = {}), (0, r.Z)(i, ue, l), (0, r.Z)(i, ce, s), i),
          v =
            ((a = {}),
            (0, r.Z)(a, ie, n ? s : l),
            (0, r.Z)(a, ae, n ? l : s),
            (0, r.Z)(a, ce, f),
            (0, r.Z)(a, le, f),
            a),
          m =
            ((u = {}),
            (0, r.Z)(u, ue, l),
            (0, r.Z)(u, ce, s),
            (0, r.Z)(u, le, f),
            (0, r.Z)(u, se, d),
            (0, r.Z)(u, ie, n ? f : d),
            (0, r.Z)(u, ae, n ? d : f),
            u),
          h = {
            inline: p,
            horizontal: v,
            vertical: m,
            inlineSub: p,
            horizontalSub: m,
            verticalSub: m,
          },
          g =
            null === (c = h[''.concat(e).concat(t ? '' : 'Sub')]) ||
            void 0 === c
              ? void 0
              : c[o];
        switch (g) {
          case l:
            return { offset: -1, sibling: !0 };
          case s:
            return { offset: 1, sibling: !0 };
          case d:
            return { offset: -1, sibling: !1 };
          case f:
            return { offset: 1, sibling: !1 };
          default:
            return null;
        }
      }
      function me(e) {
        var t = e;
        while (t) {
          if (t.getAttribute('data-menu-list')) return t;
          t = t.parentElement;
        }
        return null;
      }
      function he(e, t) {
        var n = e || document.activeElement;
        while (n) {
          if (t.has(n)) return n;
          n = n.parentElement;
        }
        return null;
      }
      function ge(e, t) {
        var n = (0, re.tS)(e, !0);
        return n.filter(function (e) {
          return t.has(e);
        });
      }
      function ye(e, t, n) {
        var o =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        if (!e) return null;
        var r = ge(e, t),
          i = r.length,
          a = r.findIndex(function (e) {
            return n === e;
          });
        return (
          o < 0 ? (-1 === a ? (a = i - 1) : (a -= 1)) : o > 0 && (a += 1),
          (a = (a + i) % i),
          r[a]
        );
      }
      function be(e, t, n, o, r, i, a, u, c, l) {
        var s = f.useRef(),
          d = f.useRef();
        d.current = t;
        var p = function () {
          b.Z.cancel(s.current);
        };
        return (
          f.useEffect(function () {
            return function () {
              p();
            };
          }, []),
          function (f) {
            var v = f.which;
            if ([].concat(pe, [le, se, fe, de]).includes(v)) {
              var m,
                h,
                g,
                y = function () {
                  (m = new Set()), (h = new Map()), (g = new Map());
                  var e = i();
                  return (
                    e.forEach(function (e) {
                      var t = document.querySelector(
                        "[data-menu-id='".concat(z(o, e), "']"),
                      );
                      t && (m.add(t), g.set(t, e), h.set(e, t));
                    }),
                    m
                  );
                };
              y();
              var w = h.get(t),
                Z = he(w, m),
                E = g.get(Z),
                C = ve(e, 1 === a(E, !0).length, n, v);
              if (!C && v !== fe && v !== de) return;
              (pe.includes(v) || [fe, de].includes(v)) && f.preventDefault();
              var x = function (e) {
                if (e) {
                  var t = e,
                    n = e.querySelector('a');
                  null !== n &&
                    void 0 !== n &&
                    n.getAttribute('href') &&
                    (t = n);
                  var o = g.get(e);
                  u(o),
                    p(),
                    (s.current = (0, b.Z)(function () {
                      d.current === o && t.focus();
                    }));
                }
              };
              if ([fe, de].includes(v) || C.sibling || !Z) {
                var O, M;
                O = Z && 'inline' !== e ? me(Z) : r.current;
                var N = ge(O, m);
                (M =
                  v === fe
                    ? N[0]
                    : v === de
                    ? N[N.length - 1]
                    : ye(O, m, Z, C.offset)),
                  x(M);
              } else if (C.inlineTrigger) c(E);
              else if (C.offset > 0)
                c(E, !0),
                  p(),
                  (s.current = (0, b.Z)(function () {
                    y();
                    var e = Z.getAttribute('aria-controls'),
                      t = document.getElementById(e),
                      n = ye(t, m);
                    x(n);
                  }, 5));
              else if (C.offset < 0) {
                var P = a(E, !0),
                  T = P[P.length - 2],
                  S = h.get(T);
                c(T, !1), x(S);
              }
            }
            null === l || void 0 === l || l(f);
          }
        );
      }
      function we(e) {
        Promise.resolve().then(e);
      }
      var Ze = '__RC_UTIL_PATH_SPLIT__',
        Ee = function (e) {
          return e.join(Ze);
        },
        Ce = function (e) {
          return e.split(Ze);
        },
        xe = 'rc-menu-more';
      function Oe() {
        var e = f.useState({}),
          t = (0, u.Z)(e, 2),
          n = t[1],
          o = (0, f.useRef)(new Map()),
          r = (0, f.useRef)(new Map()),
          i = f.useState([]),
          c = (0, u.Z)(i, 2),
          l = c[0],
          s = c[1],
          d = (0, f.useRef)(0),
          p = (0, f.useRef)(!1),
          v = function () {
            p.current || n({});
          },
          m = (0, f.useCallback)(function (e, t) {
            var n = Ee(t);
            r.current.set(n, e), o.current.set(e, n), (d.current += 1);
            var i = d.current;
            we(function () {
              i === d.current && v();
            });
          }, []),
          h = (0, f.useCallback)(function (e, t) {
            var n = Ee(t);
            r.current['delete'](n), o.current['delete'](e);
          }, []),
          g = (0, f.useCallback)(function (e) {
            s(e);
          }, []),
          y = (0, f.useCallback)(
            function (e, t) {
              var n = o.current.get(e) || '',
                r = Ce(n);
              return t && l.includes(r[0]) && r.unshift(xe), r;
            },
            [l],
          ),
          b = (0, f.useCallback)(
            function (e, t) {
              return e.some(function (e) {
                var n = y(e, !0);
                return n.includes(t);
              });
            },
            [y],
          ),
          w = function () {
            var e = (0, a.Z)(o.current.keys());
            return l.length && e.push(xe), e;
          },
          Z = (0, f.useCallback)(function (e) {
            var t = ''.concat(o.current.get(e)).concat(Ze),
              n = new Set();
            return (
              (0, a.Z)(r.current.keys()).forEach(function (e) {
                e.startsWith(t) && n.add(r.current.get(e));
              }),
              n
            );
          }, []);
        return (
          f.useEffect(function () {
            return function () {
              p.current = !0;
            };
          }, []),
          {
            registerPath: m,
            unregisterPath: h,
            refreshOverflowKeys: g,
            isSubPathKey: b,
            getKeyPath: y,
            getKeys: w,
            getSubPathKeys: Z,
          }
        );
      }
      function Me(e) {
        var t = f.useRef(e);
        t.current = e;
        var n = f.useCallback(function () {
          for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
            o[r] = arguments[r];
          return null === (e = t.current) || void 0 === e
            ? void 0
            : e.call.apply(e, [t].concat(o));
        }, []);
        return e ? n : void 0;
      }
      var Ne = Math.random().toFixed(5).toString().slice(2),
        Pe = 0;
      function Te(e) {
        var t = (0, L.Z)(e, { value: e }),
          n = (0, u.Z)(t, 2),
          o = n[0],
          r = n[1];
        return (
          f.useEffect(function () {
            Pe += 1;
            var e = ''.concat(Ne, '-').concat(Pe);
            r('rc-menu-uuid-'.concat(e));
          }, []),
          o
        );
      }
      var Se = n(6610),
        ke = n(5991),
        Re = n(10379),
        _e = n(54070),
        Ie = n(26670);
      function Ae(e, t, n, o) {
        var r = f.useContext(B),
          i = r.activeKey,
          a = r.onActive,
          u = r.onInactive,
          c = { active: i === e };
        return (
          t ||
            ((c.onMouseEnter = function (t) {
              null === n || void 0 === n || n({ key: e, domEvent: t }), a(e);
            }),
            (c.onMouseLeave = function (t) {
              null === o || void 0 === o || o({ key: e, domEvent: t }), u(e);
            })),
          c
        );
      }
      var De = ['item'];
      function Le(e) {
        var t = e.item,
          n = (0, c.Z)(e, De);
        return (
          Object.defineProperty(n, 'item', {
            get: function () {
              return (
                (0, H.ZP)(
                  !1,
                  '`info.item` is deprecated since we will move to function component that not provides React Node instance in future.',
                ),
                t
              );
            },
          }),
          n
        );
      }
      function He(e) {
        var t,
          n = e.icon,
          o = e.props,
          r = e.children;
        return (
          (t =
            'function' === typeof n ? f.createElement(n, (0, i.Z)({}, o)) : n),
          t || r || null
        );
      }
      function je(e) {
        var t = f.useContext(B),
          n = t.mode,
          o = t.rtl,
          r = t.inlineIndent;
        if ('inline' !== n) return null;
        var i = e;
        return o ? { paddingRight: i * r } : { paddingLeft: i * r };
      }
      var Ve = ['title', 'attribute', 'elementRef'],
        We = [
          'style',
          'className',
          'eventKey',
          'warnKey',
          'disabled',
          'itemIcon',
          'children',
          'role',
          'onMouseEnter',
          'onMouseLeave',
          'onClick',
          'onKeyDown',
          'onFocus',
        ],
        ze = ['active'],
        Ke = (function (e) {
          (0, Re.Z)(n, e);
          var t = (0, _e.Z)(n);
          function n() {
            return (0, Se.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, ke.Z)(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.title,
                    n = e.attribute,
                    r = e.elementRef,
                    i = (0, c.Z)(e, Ve),
                    a = (0, Ie.Z)(i, ['eventKey']);
                  return (
                    (0, H.ZP)(
                      !n,
                      '`attribute` of Menu.Item is deprecated. Please pass attribute directly.',
                    ),
                    f.createElement(
                      D.Item,
                      (0, o.Z)(
                        {},
                        n,
                        { title: 'string' === typeof t ? t : void 0 },
                        a,
                        { ref: r },
                      ),
                    )
                  );
                },
              },
            ]),
            n
          );
        })(f.Component),
        Fe = function (e) {
          var t,
            n = e.style,
            u = e.className,
            l = e.eventKey,
            d = (e.warnKey, e.disabled),
            p = e.itemIcon,
            v = e.children,
            m = e.role,
            h = e.onMouseEnter,
            g = e.onMouseLeave,
            y = e.onClick,
            b = e.onKeyDown,
            w = e.onFocus,
            Z = (0, c.Z)(e, We),
            E = K(l),
            C = f.useContext(B),
            x = C.prefixCls,
            O = C.onItemClick,
            M = C.disabled,
            N = C.overflowDisabled,
            P = C.itemIcon,
            T = C.selectedKeys,
            S = C.onActive,
            k = f.useContext(ne),
            R = k._internalRenderMenuItem,
            _ = ''.concat(x, '-item'),
            I = f.useRef(),
            A = f.useRef(),
            D = M || d,
            L = J(l);
          var H = function (e) {
              return {
                key: l,
                keyPath: (0, a.Z)(L).reverse(),
                item: I.current,
                domEvent: e,
              };
            },
            j = p || P,
            V = Ae(l, D, h, g),
            W = V.active,
            z = (0, c.Z)(V, ze),
            F = T.includes(l),
            U = je(L.length),
            Y = function (e) {
              if (!D) {
                var t = H(e);
                null === y || void 0 === y || y(Le(t)), O(t);
              }
            },
            X = function (e) {
              if (
                (null === b || void 0 === b || b(e), e.which === oe.Z.ENTER)
              ) {
                var t = H(e);
                null === y || void 0 === y || y(Le(t)), O(t);
              }
            },
            G = function (e) {
              S(l), null === w || void 0 === w || w(e);
            },
            q = {};
          'option' === e.role && (q['aria-selected'] = F);
          var Q = f.createElement(
            Ke,
            (0, o.Z)(
              {
                ref: I,
                elementRef: A,
                role: null === m ? 'none' : m || 'menuitem',
                tabIndex: d ? null : -1,
                'data-menu-id': N && E ? null : E,
              },
              Z,
              z,
              q,
              {
                component: 'li',
                'aria-disabled': d,
                style: (0, i.Z)((0, i.Z)({}, U), n),
                className: s()(
                  _,
                  ((t = {}),
                  (0, r.Z)(t, ''.concat(_, '-active'), W),
                  (0, r.Z)(t, ''.concat(_, '-selected'), F),
                  (0, r.Z)(t, ''.concat(_, '-disabled'), D),
                  t),
                  u,
                ),
                onClick: Y,
                onKeyDown: X,
                onFocus: G,
              },
            ),
            v,
            f.createElement(He, {
              props: (0, i.Z)((0, i.Z)({}, e), {}, { isSelected: F }),
              icon: j,
            }),
          );
          return R && (Q = R(Q, e, { selected: F })), Q;
        };
      function Ue(e) {
        var t = e.eventKey,
          n = Q(),
          o = J(t);
        return (
          f.useEffect(
            function () {
              if (n)
                return (
                  n.registerPath(t, o),
                  function () {
                    n.unregisterPath(t, o);
                  }
                );
            },
            [o],
          ),
          n ? null : f.createElement(Fe, e)
        );
      }
      var Be = Ue,
        Ye = ['className', 'children'],
        Xe = function (e, t) {
          var n = e.className,
            r = e.children,
            i = (0, c.Z)(e, Ye),
            a = f.useContext(B),
            u = a.prefixCls,
            l = a.mode,
            d = a.rtl;
          return f.createElement(
            'ul',
            (0, o.Z)(
              {
                className: s()(
                  u,
                  d && ''.concat(u, '-rtl'),
                  ''.concat(u, '-sub'),
                  ''
                    .concat(u, '-')
                    .concat('inline' === l ? 'inline' : 'vertical'),
                  n,
                ),
                role: 'menu',
              },
              i,
              { 'data-menu-list': !0, ref: t },
            ),
            r,
          );
        },
        Ge = f.forwardRef(Xe);
      Ge.displayName = 'SubMenuList';
      var qe = Ge,
        Qe = n(90484),
        $e = n(10048),
        Je = ['label', 'children', 'key', 'type'];
      function et(e, t) {
        return (0, $e.Z)(e).map(function (e, n) {
          if (f.isValidElement(e)) {
            var o,
              r,
              i = e.key,
              u =
                null !==
                  (o =
                    null === (r = e.props) || void 0 === r
                      ? void 0
                      : r.eventKey) && void 0 !== o
                  ? o
                  : i,
              c = null === u || void 0 === u;
            c && (u = 'tmp_key-'.concat([].concat((0, a.Z)(t), [n]).join('-')));
            var l = { key: u, eventKey: u };
            return f.cloneElement(e, l);
          }
          return e;
        });
      }
      function tt(e) {
        return (e || [])
          .map(function (e, t) {
            if (e && 'object' === (0, Qe.Z)(e)) {
              var n = e,
                r = n.label,
                i = n.children,
                a = n.key,
                u = n.type,
                l = (0, c.Z)(n, Je),
                s = null !== a && void 0 !== a ? a : 'tmp-'.concat(t);
              return i || 'group' === u
                ? 'group' === u
                  ? f.createElement(
                      Ct,
                      (0, o.Z)({ key: s }, l, { title: r }),
                      tt(i),
                    )
                  : f.createElement(
                      mt,
                      (0, o.Z)({ key: s }, l, { title: r }),
                      tt(i),
                    )
                : 'divider' === u
                ? f.createElement(xt, (0, o.Z)({ key: s }, l))
                : f.createElement(Be, (0, o.Z)({ key: s }, l), r);
            }
            return null;
          })
          .filter(function (e) {
            return e;
          });
      }
      function nt(e, t, n) {
        var o = e;
        return t && (o = tt(t)), et(o, n);
      }
      var ot = n(77814),
        rt = { adjustX: 1, adjustY: 1 },
        it = {
          topLeft: { points: ['bl', 'tl'], overflow: rt, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: rt, offset: [0, 7] },
          leftTop: { points: ['tr', 'tl'], overflow: rt, offset: [-4, 0] },
          rightTop: { points: ['tl', 'tr'], overflow: rt, offset: [4, 0] },
        },
        at = {
          topLeft: { points: ['bl', 'tl'], overflow: rt, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: rt, offset: [0, 7] },
          rightTop: { points: ['tr', 'tl'], overflow: rt, offset: [-4, 0] },
          leftTop: { points: ['tl', 'tr'], overflow: rt, offset: [4, 0] },
        };
      function ut(e, t, n) {
        return t || (n ? n[e] || n.other : void 0);
      }
      var ct = {
        horizontal: 'bottomLeft',
        vertical: 'rightTop',
        'vertical-left': 'rightTop',
        'vertical-right': 'leftTop',
      };
      function lt(e) {
        var t = e.prefixCls,
          n = e.visible,
          o = e.children,
          a = e.popup,
          c = e.popupClassName,
          l = e.popupOffset,
          d = e.disabled,
          p = e.mode,
          v = e.onVisibleChange,
          m = f.useContext(B),
          h = m.getPopupContainer,
          g = m.rtl,
          y = m.subMenuOpenDelay,
          w = m.subMenuCloseDelay,
          Z = m.builtinPlacements,
          E = m.triggerSubMenuAction,
          C = m.forceSubMenuRender,
          x = m.rootClassName,
          O = m.motion,
          M = m.defaultMotions,
          N = f.useState(!1),
          P = (0, u.Z)(N, 2),
          T = P[0],
          S = P[1],
          k = g ? (0, i.Z)((0, i.Z)({}, at), Z) : (0, i.Z)((0, i.Z)({}, it), Z),
          R = ct[p],
          _ = ut(p, O, M),
          I = f.useRef(_);
        'inline' !== p && (I.current = _);
        var A = (0, i.Z)(
            (0, i.Z)({}, I.current),
            {},
            {
              leavedClassName: ''.concat(t, '-hidden'),
              removeOnLeave: !1,
              motionAppear: !0,
            },
          ),
          D = f.useRef();
        return (
          f.useEffect(
            function () {
              return (
                (D.current = (0, b.Z)(function () {
                  S(n);
                })),
                function () {
                  b.Z.cancel(D.current);
                }
              );
            },
            [n],
          ),
          f.createElement(
            ot.Z,
            {
              prefixCls: t,
              popupClassName: s()(
                ''.concat(t, '-popup'),
                (0, r.Z)({}, ''.concat(t, '-rtl'), g),
                c,
                x,
              ),
              stretch: 'horizontal' === p ? 'minWidth' : null,
              getPopupContainer: h,
              builtinPlacements: k,
              popupPlacement: R,
              popupVisible: T,
              popup: a,
              popupAlign: l && { offset: l },
              action: d ? [] : [E],
              mouseEnterDelay: y,
              mouseLeaveDelay: w,
              onPopupVisibleChange: v,
              forceRender: C,
              popupMotion: A,
            },
            o,
          )
        );
      }
      var st = n(80289);
      function ft(e) {
        var t = e.id,
          n = e.open,
          r = e.keyPath,
          a = e.children,
          c = 'inline',
          l = f.useContext(B),
          s = l.prefixCls,
          d = l.forceSubMenuRender,
          p = l.motion,
          v = l.defaultMotions,
          m = l.mode,
          h = f.useRef(!1);
        h.current = m === c;
        var g = f.useState(!h.current),
          y = (0, u.Z)(g, 2),
          b = y[0],
          w = y[1],
          Z = !!h.current && n;
        f.useEffect(
          function () {
            h.current && w(!1);
          },
          [m],
        );
        var E = (0, i.Z)({}, ut(c, p, v));
        r.length > 1 && (E.motionAppear = !1);
        var C = E.onVisibleChanged;
        return (
          (E.onVisibleChanged = function (e) {
            return (
              h.current || e || w(!0),
              null === C || void 0 === C ? void 0 : C(e)
            );
          }),
          b
            ? null
            : f.createElement(
                X,
                { mode: c, locked: !h.current },
                f.createElement(
                  st.Z,
                  (0, o.Z)({ visible: Z }, E, {
                    forceRender: d,
                    removeOnLeave: !1,
                    leavedClassName: ''.concat(s, '-hidden'),
                  }),
                  function (e) {
                    var n = e.className,
                      o = e.style;
                    return f.createElement(
                      qe,
                      { id: t, className: n, style: o },
                      a,
                    );
                  },
                ),
              )
        );
      }
      var dt = [
          'style',
          'className',
          'title',
          'eventKey',
          'warnKey',
          'disabled',
          'internalPopupClose',
          'children',
          'itemIcon',
          'expandIcon',
          'popupClassName',
          'popupOffset',
          'onClick',
          'onMouseEnter',
          'onMouseLeave',
          'onTitleClick',
          'onTitleMouseEnter',
          'onTitleMouseLeave',
        ],
        pt = ['active'],
        vt = function (e) {
          var t,
            n = e.style,
            a = e.className,
            l = e.title,
            d = e.eventKey,
            p = (e.warnKey, e.disabled),
            v = e.internalPopupClose,
            m = e.children,
            h = e.itemIcon,
            g = e.expandIcon,
            y = e.popupClassName,
            b = e.popupOffset,
            w = e.onClick,
            Z = e.onMouseEnter,
            E = e.onMouseLeave,
            C = e.onTitleClick,
            x = e.onTitleMouseEnter,
            O = e.onTitleMouseLeave,
            M = (0, c.Z)(e, dt),
            N = K(d),
            P = f.useContext(B),
            T = P.prefixCls,
            S = P.mode,
            k = P.openKeys,
            R = P.disabled,
            _ = P.overflowDisabled,
            I = P.activeKey,
            A = P.selectedKeys,
            L = P.itemIcon,
            H = P.expandIcon,
            j = P.onItemClick,
            V = P.onOpenChange,
            W = P.onActive,
            z = f.useContext(ne),
            F = z._internalRenderSubMenuItem,
            U = f.useContext(ee),
            Y = U.isSubPathKey,
            G = J(),
            q = ''.concat(T, '-submenu'),
            Q = R || p,
            $ = f.useRef(),
            te = f.useRef();
          var oe = h || L,
            re = g || H,
            ie = k.includes(d),
            ae = !_ && ie,
            ue = Y(A, d),
            ce = Ae(d, Q, x, O),
            le = ce.active,
            se = (0, c.Z)(ce, pt),
            fe = f.useState(!1),
            de = (0, u.Z)(fe, 2),
            pe = de[0],
            ve = de[1],
            me = function (e) {
              Q || ve(e);
            },
            he = function (e) {
              me(!0), null === Z || void 0 === Z || Z({ key: d, domEvent: e });
            },
            ge = function (e) {
              me(!1), null === E || void 0 === E || E({ key: d, domEvent: e });
            },
            ye = f.useMemo(
              function () {
                return le || ('inline' !== S && (pe || Y([I], d)));
              },
              [S, le, I, pe, d, Y],
            ),
            be = je(G.length),
            we = function (e) {
              Q ||
                (null === C || void 0 === C || C({ key: d, domEvent: e }),
                'inline' === S && V(d, !ie));
            },
            Ze = Me(function (e) {
              null === w || void 0 === w || w(Le(e)), j(e);
            }),
            Ee = function (e) {
              'inline' !== S && V(d, e);
            },
            Ce = function () {
              W(d);
            },
            xe = N && ''.concat(N, '-popup'),
            Oe = f.createElement(
              'div',
              (0, o.Z)(
                {
                  role: 'menuitem',
                  style: be,
                  className: ''.concat(q, '-title'),
                  tabIndex: Q ? null : -1,
                  ref: $,
                  title: 'string' === typeof l ? l : null,
                  'data-menu-id': _ && N ? null : N,
                  'aria-expanded': ae,
                  'aria-haspopup': !0,
                  'aria-controls': xe,
                  'aria-disabled': Q,
                  onClick: we,
                  onFocus: Ce,
                },
                se,
              ),
              l,
              f.createElement(
                He,
                {
                  icon: 'horizontal' !== S ? re : null,
                  props: (0, i.Z)(
                    (0, i.Z)({}, e),
                    {},
                    { isOpen: ae, isSubMenu: !0 },
                  ),
                },
                f.createElement('i', { className: ''.concat(q, '-arrow') }),
              ),
            ),
            Ne = f.useRef(S);
          if (
            ('inline' !== S && G.length > 1
              ? (Ne.current = 'vertical')
              : (Ne.current = S),
            !_)
          ) {
            var Pe = Ne.current;
            Oe = f.createElement(
              lt,
              {
                mode: Pe,
                prefixCls: q,
                visible: !v && ae && 'inline' !== S,
                popupClassName: y,
                popupOffset: b,
                popup: f.createElement(
                  X,
                  { mode: 'horizontal' === Pe ? 'vertical' : Pe },
                  f.createElement(qe, { id: xe, ref: te }, m),
                ),
                disabled: Q,
                onVisibleChange: Ee,
              },
              Oe,
            );
          }
          var Te = f.createElement(
            D.Item,
            (0, o.Z)({ role: 'none' }, M, {
              component: 'li',
              style: n,
              className: s()(
                q,
                ''.concat(q, '-').concat(S),
                a,
                ((t = {}),
                (0, r.Z)(t, ''.concat(q, '-open'), ae),
                (0, r.Z)(t, ''.concat(q, '-active'), ye),
                (0, r.Z)(t, ''.concat(q, '-selected'), ue),
                (0, r.Z)(t, ''.concat(q, '-disabled'), Q),
                t),
              ),
              onMouseEnter: he,
              onMouseLeave: ge,
            }),
            Oe,
            !_ && f.createElement(ft, { id: xe, open: ae, keyPath: G }, m),
          );
          return (
            F &&
              (Te = F(Te, e, {
                selected: ue,
                active: ye,
                open: ae,
                disabled: Q,
              })),
            f.createElement(
              X,
              {
                onItemClick: Ze,
                mode: 'horizontal' === S ? 'vertical' : S,
                itemIcon: oe,
                expandIcon: re,
              },
              Te,
            )
          );
        };
      function mt(e) {
        var t,
          n = e.eventKey,
          o = e.children,
          r = J(n),
          i = et(o, r),
          a = Q();
        return (
          f.useEffect(
            function () {
              if (a)
                return (
                  a.registerPath(n, r),
                  function () {
                    a.unregisterPath(n, r);
                  }
                );
            },
            [r],
          ),
          (t = a ? i : f.createElement(vt, e, i)),
          f.createElement($.Provider, { value: r }, t)
        );
      }
      var ht = [
          'prefixCls',
          'rootClassName',
          'style',
          'className',
          'tabIndex',
          'items',
          'children',
          'direction',
          'id',
          'mode',
          'inlineCollapsed',
          'disabled',
          'disabledOverflow',
          'subMenuOpenDelay',
          'subMenuCloseDelay',
          'forceSubMenuRender',
          'defaultOpenKeys',
          'openKeys',
          'activeKey',
          'defaultActiveFirst',
          'selectable',
          'multiple',
          'defaultSelectedKeys',
          'selectedKeys',
          'onSelect',
          'onDeselect',
          'inlineIndent',
          'motion',
          'defaultMotions',
          'triggerSubMenuAction',
          'builtinPlacements',
          'itemIcon',
          'expandIcon',
          'overflowedIndicator',
          'overflowedIndicatorPopupClassName',
          'getPopupContainer',
          'onClick',
          'onOpenChange',
          'onKeyDown',
          'openAnimation',
          'openTransitionName',
          '_internalRenderMenuItem',
          '_internalRenderSubMenuItem',
        ],
        gt = [],
        yt = f.forwardRef(function (e, t) {
          var n,
            l,
            d = e,
            p = d.prefixCls,
            v = void 0 === p ? 'rc-menu' : p,
            m = d.rootClassName,
            h = d.style,
            g = d.className,
            y = d.tabIndex,
            b = void 0 === y ? 0 : y,
            w = d.items,
            Z = d.children,
            E = d.direction,
            C = d.id,
            x = d.mode,
            O = void 0 === x ? 'vertical' : x,
            M = d.inlineCollapsed,
            N = d.disabled,
            P = d.disabledOverflow,
            T = d.subMenuOpenDelay,
            S = void 0 === T ? 0.1 : T,
            k = d.subMenuCloseDelay,
            R = void 0 === k ? 0.1 : k,
            _ = d.forceSubMenuRender,
            I = d.defaultOpenKeys,
            A = d.openKeys,
            H = d.activeKey,
            K = d.defaultActiveFirst,
            F = d.selectable,
            U = void 0 === F || F,
            B = d.multiple,
            Y = void 0 !== B && B,
            G = d.defaultSelectedKeys,
            Q = d.selectedKeys,
            $ = d.onSelect,
            J = d.onDeselect,
            te = d.inlineIndent,
            oe = void 0 === te ? 24 : te,
            re = d.motion,
            ie = d.defaultMotions,
            ae = d.triggerSubMenuAction,
            ue = void 0 === ae ? 'hover' : ae,
            ce = d.builtinPlacements,
            le = d.itemIcon,
            se = d.expandIcon,
            fe = d.overflowedIndicator,
            de = void 0 === fe ? '...' : fe,
            pe = d.overflowedIndicatorPopupClassName,
            ve = d.getPopupContainer,
            me = d.onClick,
            he = d.onOpenChange,
            ge = d.onKeyDown,
            ye =
              (d.openAnimation,
              d.openTransitionName,
              d._internalRenderMenuItem),
            we = d._internalRenderSubMenuItem,
            Ze = (0, c.Z)(d, ht),
            Ee = f.useMemo(
              function () {
                return nt(Z, w, gt);
              },
              [Z, w],
            ),
            Ce = f.useState(!1),
            Ne = (0, u.Z)(Ce, 2),
            Pe = Ne[0],
            Se = Ne[1],
            ke = f.useRef(),
            Re = Te(C),
            _e = 'rtl' === E;
          var Ie = (0, L.Z)(I, {
              value: A,
              postState: function (e) {
                return e || gt;
              },
            }),
            Ae = (0, u.Z)(Ie, 2),
            De = Ae[0],
            He = Ae[1],
            je = function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              function n() {
                He(e), null === he || void 0 === he || he(e);
              }
              t ? (0, j.flushSync)(n) : n();
            },
            Ve = f.useState(De),
            We = (0, u.Z)(Ve, 2),
            ze = We[0],
            Ke = We[1],
            Fe = f.useRef(!1),
            Ue = f.useMemo(
              function () {
                return ('inline' !== O && 'vertical' !== O) || !M
                  ? [O, !1]
                  : ['vertical', M];
              },
              [O, M],
            ),
            Ye = (0, u.Z)(Ue, 2),
            Xe = Ye[0],
            Ge = Ye[1],
            qe = 'inline' === Xe,
            Qe = f.useState(Xe),
            $e = (0, u.Z)(Qe, 2),
            Je = $e[0],
            et = $e[1],
            tt = f.useState(Ge),
            ot = (0, u.Z)(tt, 2),
            rt = ot[0],
            it = ot[1];
          f.useEffect(
            function () {
              et(Xe), it(Ge), Fe.current && (qe ? He(ze) : je(gt));
            },
            [Xe, Ge],
          );
          var at = f.useState(0),
            ut = (0, u.Z)(at, 2),
            ct = ut[0],
            lt = ut[1],
            st = ct >= Ee.length - 1 || 'horizontal' !== Je || P;
          f.useEffect(
            function () {
              qe && Ke(De);
            },
            [De],
          ),
            f.useEffect(function () {
              return (
                (Fe.current = !0),
                function () {
                  Fe.current = !1;
                }
              );
            }, []);
          var ft = Oe(),
            dt = ft.registerPath,
            pt = ft.unregisterPath,
            vt = ft.refreshOverflowKeys,
            yt = ft.isSubPathKey,
            bt = ft.getKeyPath,
            wt = ft.getKeys,
            Zt = ft.getSubPathKeys,
            Et = f.useMemo(
              function () {
                return { registerPath: dt, unregisterPath: pt };
              },
              [dt, pt],
            ),
            Ct = f.useMemo(
              function () {
                return { isSubPathKey: yt };
              },
              [yt],
            );
          f.useEffect(
            function () {
              vt(
                st
                  ? gt
                  : Ee.slice(ct + 1).map(function (e) {
                      return e.key;
                    }),
              );
            },
            [ct, st],
          );
          var xt = (0, L.Z)(
              H ||
                (K && (null === (n = Ee[0]) || void 0 === n ? void 0 : n.key)),
              { value: H },
            ),
            Ot = (0, u.Z)(xt, 2),
            Mt = Ot[0],
            Nt = Ot[1],
            Pt = Me(function (e) {
              Nt(e);
            }),
            Tt = Me(function () {
              Nt(void 0);
            });
          (0, f.useImperativeHandle)(t, function () {
            return {
              list: ke.current,
              focus: function (e) {
                var t,
                  n,
                  o,
                  r,
                  i =
                    null !== Mt && void 0 !== Mt
                      ? Mt
                      : null ===
                          (t = Ee.find(function (e) {
                            return !e.props.disabled;
                          })) || void 0 === t
                      ? void 0
                      : t.key;
                i &&
                  (null === (n = ke.current) ||
                    void 0 === n ||
                    null ===
                      (o = n.querySelector(
                        "li[data-menu-id='".concat(z(Re, i), "']"),
                      )) ||
                    void 0 === o ||
                    null === (r = o.focus) ||
                    void 0 === r ||
                    r.call(o, e));
              },
            };
          });
          var St = (0, L.Z)(G || [], {
              value: Q,
              postState: function (e) {
                return Array.isArray(e)
                  ? e
                  : null === e || void 0 === e
                  ? gt
                  : [e];
              },
            }),
            kt = (0, u.Z)(St, 2),
            Rt = kt[0],
            _t = kt[1],
            It = function (e) {
              if (U) {
                var t,
                  n = e.key,
                  o = Rt.includes(n);
                (t = Y
                  ? o
                    ? Rt.filter(function (e) {
                        return e !== n;
                      })
                    : [].concat((0, a.Z)(Rt), [n])
                  : [n]),
                  _t(t);
                var r = (0, i.Z)((0, i.Z)({}, e), {}, { selectedKeys: t });
                o
                  ? null === J || void 0 === J || J(r)
                  : null === $ || void 0 === $ || $(r);
              }
              !Y && De.length && 'inline' !== Je && je(gt);
            },
            At = Me(function (e) {
              null === me || void 0 === me || me(Le(e)), It(e);
            }),
            Dt = Me(function (e, t) {
              var n = De.filter(function (t) {
                return t !== e;
              });
              if (t) n.push(e);
              else if ('inline' !== Je) {
                var o = Zt(e);
                n = n.filter(function (e) {
                  return !o.has(e);
                });
              }
              (0, V.Z)(De, n, !0) || je(n, !0);
            }),
            Lt = Me(ve),
            Ht = function (e, t) {
              var n = null !== t && void 0 !== t ? t : !De.includes(e);
              Dt(e, n);
            },
            jt = be(Je, Mt, _e, Re, ke, wt, bt, Nt, Ht, ge);
          f.useEffect(function () {
            Se(!0);
          }, []);
          var Vt = f.useMemo(
              function () {
                return {
                  _internalRenderMenuItem: ye,
                  _internalRenderSubMenuItem: we,
                };
              },
              [ye, we],
            ),
            Wt =
              'horizontal' !== Je || P
                ? Ee
                : Ee.map(function (e, t) {
                    return f.createElement(
                      X,
                      { key: e.key, overflowDisabled: t > ct },
                      e,
                    );
                  }),
            zt = f.createElement(
              D,
              (0, o.Z)(
                {
                  id: C,
                  ref: ke,
                  prefixCls: ''.concat(v, '-overflow'),
                  component: 'ul',
                  itemComponent: Be,
                  className: s()(
                    v,
                    ''.concat(v, '-root'),
                    ''.concat(v, '-').concat(Je),
                    g,
                    ((l = {}),
                    (0, r.Z)(l, ''.concat(v, '-inline-collapsed'), rt),
                    (0, r.Z)(l, ''.concat(v, '-rtl'), _e),
                    l),
                    m,
                  ),
                  dir: E,
                  style: h,
                  role: 'menu',
                  tabIndex: b,
                  data: Wt,
                  renderRawItem: function (e) {
                    return e;
                  },
                  renderRawRest: function (e) {
                    var t = e.length,
                      n = t ? Ee.slice(-t) : null;
                    return f.createElement(
                      mt,
                      {
                        eventKey: xe,
                        title: de,
                        disabled: st,
                        internalPopupClose: 0 === t,
                        popupClassName: pe,
                      },
                      n,
                    );
                  },
                  maxCount:
                    'horizontal' !== Je || P ? D.INVALIDATE : D.RESPONSIVE,
                  ssr: 'full',
                  'data-menu-list': !0,
                  onVisibleChange: function (e) {
                    lt(e);
                  },
                  onKeyDown: jt,
                },
                Ze,
              ),
            );
          return f.createElement(
            ne.Provider,
            { value: Vt },
            f.createElement(
              W.Provider,
              { value: Re },
              f.createElement(
                X,
                {
                  prefixCls: v,
                  rootClassName: m,
                  mode: Je,
                  openKeys: De,
                  rtl: _e,
                  disabled: N,
                  motion: Pe ? re : null,
                  defaultMotions: Pe ? ie : null,
                  activeKey: Mt,
                  onActive: Pt,
                  onInactive: Tt,
                  selectedKeys: Rt,
                  inlineIndent: oe,
                  subMenuOpenDelay: S,
                  subMenuCloseDelay: R,
                  forceSubMenuRender: _,
                  builtinPlacements: ce,
                  triggerSubMenuAction: ue,
                  getPopupContainer: Lt,
                  itemIcon: le,
                  expandIcon: se,
                  onItemClick: At,
                  onOpenChange: Dt,
                },
                f.createElement(ee.Provider, { value: Ct }, zt),
                f.createElement(
                  'div',
                  { style: { display: 'none' }, 'aria-hidden': !0 },
                  f.createElement(q.Provider, { value: Et }, Ee),
                ),
              ),
            ),
          );
        }),
        bt = yt,
        wt = ['className', 'title', 'eventKey', 'children'],
        Zt = ['children'],
        Et = function (e) {
          var t = e.className,
            n = e.title,
            r = (e.eventKey, e.children),
            i = (0, c.Z)(e, wt),
            a = f.useContext(B),
            u = a.prefixCls,
            l = ''.concat(u, '-item-group');
          return f.createElement(
            'li',
            (0, o.Z)({ role: 'presentation' }, i, {
              onClick: function (e) {
                return e.stopPropagation();
              },
              className: s()(l, t),
            }),
            f.createElement(
              'div',
              {
                role: 'presentation',
                className: ''.concat(l, '-title'),
                title: 'string' === typeof n ? n : void 0,
              },
              n,
            ),
            f.createElement(
              'ul',
              { role: 'group', className: ''.concat(l, '-list') },
              r,
            ),
          );
        };
      function Ct(e) {
        var t = e.children,
          n = (0, c.Z)(e, Zt),
          o = J(n.eventKey),
          r = et(t, o),
          i = Q();
        return i ? r : f.createElement(Et, (0, Ie.Z)(n, ['warnKey']), r);
      }
      function xt(e) {
        var t = e.className,
          n = e.style,
          o = f.useContext(B),
          r = o.prefixCls,
          i = Q();
        return i
          ? null
          : f.createElement('li', {
              className: s()(''.concat(r, '-item-divider'), t),
              style: n,
            });
      }
      var Ot = bt;
      (Ot.Item = Be), (Ot.SubMenu = mt), (Ot.ItemGroup = Ct), (Ot.Divider = xt);
      var Mt = Ot;
    },
    83710: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return P;
        },
      });
      var o = n(22122),
        r = n(67294),
        i = n(10048),
        a = (n(32503), n(28991)),
        u = n(78703),
        c = n(97560),
        l = n(55065),
        s = new Map();
      function f(e) {
        e.forEach(function (e) {
          var t,
            n = e.target;
          null === (t = s.get(n)) ||
            void 0 === t ||
            t.forEach(function (e) {
              return e(n);
            });
        });
      }
      var d = new l.Z(f);
      function p(e, t) {
        s.has(e) || (s.set(e, new Set()), d.observe(e)), s.get(e).add(t);
      }
      function v(e, t) {
        s.has(e) &&
          (s.get(e)['delete'](t),
          s.get(e).size || (d.unobserve(e), s['delete'](e)));
      }
      var m = n(6610),
        h = n(5991),
        g = n(10379),
        y = n(54070),
        b = (function (e) {
          (0, g.Z)(n, e);
          var t = (0, y.Z)(n);
          function n() {
            return (0, m.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, h.Z)(n, [
              {
                key: 'render',
                value: function () {
                  return this.props.children;
                },
              },
            ]),
            n
          );
        })(r.Component),
        w = r.createContext(null);
      function Z(e) {
        var t = e.children,
          n = e.onBatchResize,
          o = r.useRef(0),
          i = r.useRef([]),
          a = r.useContext(w),
          u = r.useCallback(
            function (e, t, r) {
              o.current += 1;
              var u = o.current;
              i.current.push({ size: e, element: t, data: r }),
                Promise.resolve().then(function () {
                  u === o.current &&
                    (null === n || void 0 === n || n(i.current),
                    (i.current = []));
                }),
                null === a || void 0 === a || a(e, t, r);
            },
            [n, a],
          );
        return r.createElement(w.Provider, { value: u }, t);
      }
      function E(e, t) {
        var n = e.children,
          o = e.disabled,
          i = r.useRef(null),
          l = r.useRef(null),
          s = r.useContext(w),
          f = 'function' === typeof n,
          d = f ? n(i) : n,
          m = r.useRef({
            width: -1,
            height: -1,
            offsetWidth: -1,
            offsetHeight: -1,
          }),
          h = !f && r.isValidElement(d) && (0, u.Yr)(d),
          g = h ? d.ref : null,
          y = r.useMemo(
            function () {
              return (0, u.sQ)(g, i);
            },
            [g, i],
          ),
          Z = function () {
            return (0, c.Z)(i.current) || (0, c.Z)(l.current);
          };
        r.useImperativeHandle(t, function () {
          return Z();
        });
        var E = r.useRef(e);
        E.current = e;
        var C = r.useCallback(function (e) {
          var t = E.current,
            n = t.onResize,
            o = t.data,
            r = e.getBoundingClientRect(),
            i = r.width,
            u = r.height,
            c = e.offsetWidth,
            l = e.offsetHeight,
            f = Math.floor(i),
            d = Math.floor(u);
          if (
            m.current.width !== f ||
            m.current.height !== d ||
            m.current.offsetWidth !== c ||
            m.current.offsetHeight !== l
          ) {
            var p = { width: f, height: d, offsetWidth: c, offsetHeight: l };
            m.current = p;
            var v = c === Math.round(i) ? i : c,
              h = l === Math.round(u) ? u : l,
              g = (0, a.Z)(
                (0, a.Z)({}, p),
                {},
                { offsetWidth: v, offsetHeight: h },
              );
            null === s || void 0 === s || s(g, e, o),
              n &&
                Promise.resolve().then(function () {
                  n(g, e);
                });
          }
        }, []);
        return (
          r.useEffect(
            function () {
              var e = Z();
              return (
                e && !o && p(e, C),
                function () {
                  return v(e, C);
                }
              );
            },
            [i.current, o],
          ),
          r.createElement(b, { ref: l }, h ? r.cloneElement(d, { ref: y }) : d)
        );
      }
      var C = r.forwardRef(E);
      var x = C,
        O = 'rc-observer-key';
      function M(e, t) {
        var n = e.children,
          a = 'function' === typeof n ? [n] : (0, i.Z)(n);
        return a.map(function (n, i) {
          var a =
            (null === n || void 0 === n ? void 0 : n.key) ||
            ''.concat(O, '-').concat(i);
          return r.createElement(
            x,
            (0, o.Z)({}, e, { key: a, ref: 0 === i ? t : void 0 }),
            n,
          );
        });
      }
      var N = r.forwardRef(M);
      N.Collection = Z;
      var P = N;
    },
    81412: function (e, t, n) {
      'use strict';
      n.d(t, {
        C: function () {
          return i;
        },
      });
      var o = { adjustX: 1, adjustY: 1 },
        r = [0, 0],
        i = {
          left: {
            points: ['cr', 'cl'],
            overflow: o,
            offset: [-4, 0],
            targetOffset: r,
          },
          right: {
            points: ['cl', 'cr'],
            overflow: o,
            offset: [4, 0],
            targetOffset: r,
          },
          top: {
            points: ['bc', 'tc'],
            overflow: o,
            offset: [0, -4],
            targetOffset: r,
          },
          bottom: {
            points: ['tc', 'bc'],
            overflow: o,
            offset: [0, 4],
            targetOffset: r,
          },
          topLeft: {
            points: ['bl', 'tl'],
            overflow: o,
            offset: [0, -4],
            targetOffset: r,
          },
          leftTop: {
            points: ['tr', 'tl'],
            overflow: o,
            offset: [-4, 0],
            targetOffset: r,
          },
          topRight: {
            points: ['br', 'tr'],
            overflow: o,
            offset: [0, -4],
            targetOffset: r,
          },
          rightTop: {
            points: ['tl', 'tr'],
            overflow: o,
            offset: [4, 0],
            targetOffset: r,
          },
          bottomRight: {
            points: ['tr', 'br'],
            overflow: o,
            offset: [0, 4],
            targetOffset: r,
          },
          rightBottom: {
            points: ['bl', 'br'],
            overflow: o,
            offset: [4, 0],
            targetOffset: r,
          },
          bottomLeft: {
            points: ['tl', 'bl'],
            overflow: o,
            offset: [0, 4],
            targetOffset: r,
          },
          leftBottom: {
            points: ['br', 'bl'],
            overflow: o,
            offset: [-4, 0],
            targetOffset: r,
          },
        };
    },
    77814: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return At;
        },
      });
      var o = n(28991),
        r = n(22122),
        i = n(6610),
        a = n(5991),
        u = n(63349),
        c = n(10379),
        l = n(54070),
        s = n(96156),
        f = n(67294),
        d = n(73935),
        p = n(90468),
        v = n(80207),
        m = n(97560),
        h = n(78703),
        g = n(48198),
        y = n(20064),
        b = (0, f.forwardRef)(function (e, t) {
          var n = e.didUpdate,
            o = e.getContainer,
            r = e.children,
            i = (0, f.useRef)(),
            a = (0, f.useRef)();
          (0, f.useImperativeHandle)(t, function () {
            return {};
          });
          var u = (0, f.useRef)(!1);
          return (
            !u.current &&
              (0, y.Z)() &&
              ((a.current = o()),
              (i.current = a.current.parentNode),
              (u.current = !0)),
            (0, f.useEffect)(function () {
              null === n || void 0 === n || n(e);
            }),
            (0, f.useEffect)(function () {
              return (
                null === a.current.parentNode &&
                  null !== i.current &&
                  i.current.appendChild(a.current),
                function () {
                  var e, t;
                  null === (e = a.current) ||
                    void 0 === e ||
                    null === (t = e.parentNode) ||
                    void 0 === t ||
                    t.removeChild(a.current);
                }
              );
            }, []),
            a.current ? d.createPortal(r, a.current) : null
          );
        }),
        w = b,
        Z = n(35510),
        E = n.n(Z);
      function C(e, t, n) {
        return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
      }
      function x(e, t, n) {
        var r = e[t] || {};
        return (0, o.Z)((0, o.Z)({}, r), n);
      }
      function O(e, t, n, o) {
        for (
          var r = n.points, i = Object.keys(e), a = 0;
          a < i.length;
          a += 1
        ) {
          var u = i[a];
          if (C(e[u].points, r, o))
            return ''.concat(t, '-placement-').concat(u);
        }
        return '';
      }
      var M = n(28481),
        N = n(81253),
        P = n(44581),
        T = n(80289);
      function S(e) {
        var t = e.prefixCls,
          n = e.motion,
          o = e.animation,
          r = e.transitionName;
        return (
          n ||
          (o
            ? { motionName: ''.concat(t, '-').concat(o) }
            : r
            ? { motionName: r }
            : null)
        );
      }
      function k(e) {
        var t = e.prefixCls,
          n = e.visible,
          i = e.zIndex,
          a = e.mask,
          u = e.maskMotion,
          c = e.maskAnimation,
          l = e.maskTransitionName;
        if (!a) return null;
        var s = {};
        return (
          (u || l || c) &&
            (s = (0, o.Z)(
              { motionAppear: !0 },
              S({ motion: u, prefixCls: t, transitionName: l, animation: c }),
            )),
          f.createElement(
            T.Z,
            (0, r.Z)({}, s, { visible: n, removeOnLeave: !0 }),
            function (e) {
              var n = e.className;
              return f.createElement('div', {
                style: { zIndex: i },
                className: E()(''.concat(t, '-mask'), n),
              });
            },
          )
        );
      }
      var R,
        _ = n(90484);
      function I(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? I(Object(n), !0).forEach(function (t) {
                L(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : I(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function D(e) {
        return (
          (D =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          D(e)
        );
      }
      function L(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var H = { Webkit: '-webkit-', Moz: '-moz-', ms: '-ms-', O: '-o-' };
      function j() {
        if (void 0 !== R) return R;
        R = '';
        var e = document.createElement('p').style,
          t = 'Transform';
        for (var n in H) n + t in e && (R = n);
        return R;
      }
      function V() {
        return j()
          ? ''.concat(j(), 'TransitionProperty')
          : 'transitionProperty';
      }
      function W() {
        return j() ? ''.concat(j(), 'Transform') : 'transform';
      }
      function z(e, t) {
        var n = V();
        n &&
          ((e.style[n] = t),
          'transitionProperty' !== n && (e.style.transitionProperty = t));
      }
      function K(e, t) {
        var n = W();
        n && ((e.style[n] = t), 'transform' !== n && (e.style.transform = t));
      }
      function F(e) {
        return e.style.transitionProperty || e.style[V()];
      }
      function U(e) {
        var t = window.getComputedStyle(e, null),
          n = t.getPropertyValue('transform') || t.getPropertyValue(W());
        if (n && 'none' !== n) {
          var o = n.replace(/[^0-9\-.,]/g, '').split(',');
          return {
            x: parseFloat(o[12] || o[4], 0),
            y: parseFloat(o[13] || o[5], 0),
          };
        }
        return { x: 0, y: 0 };
      }
      var B = /matrix\((.*)\)/,
        Y = /matrix3d\((.*)\)/;
      function X(e, t) {
        var n = window.getComputedStyle(e, null),
          o = n.getPropertyValue('transform') || n.getPropertyValue(W());
        if (o && 'none' !== o) {
          var r,
            i = o.match(B);
          if (i)
            (i = i[1]),
              (r = i.split(',').map(function (e) {
                return parseFloat(e, 10);
              })),
              (r[4] = t.x),
              (r[5] = t.y),
              K(e, 'matrix('.concat(r.join(','), ')'));
          else {
            var a = o.match(Y)[1];
            (r = a.split(',').map(function (e) {
              return parseFloat(e, 10);
            })),
              (r[12] = t.x),
              (r[13] = t.y),
              K(e, 'matrix3d('.concat(r.join(','), ')'));
          }
        } else
          K(
            e,
            'translateX('
              .concat(t.x, 'px) translateY(')
              .concat(t.y, 'px) translateZ(0)'),
          );
      }
      var G,
        q = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
      function Q(e) {
        var t = e.style.display;
        (e.style.display = 'none'), e.offsetHeight, (e.style.display = t);
      }
      function $(e, t, n) {
        var o = n;
        if ('object' !== D(t))
          return 'undefined' !== typeof o
            ? ('number' === typeof o && (o = ''.concat(o, 'px')),
              void (e.style[t] = o))
            : G(e, t);
        for (var r in t) t.hasOwnProperty(r) && $(e, r, t[r]);
      }
      function J(e) {
        var t,
          n,
          o,
          r = e.ownerDocument,
          i = r.body,
          a = r && r.documentElement;
        return (
          (t = e.getBoundingClientRect()),
          (n = Math.floor(t.left)),
          (o = Math.floor(t.top)),
          (n -= a.clientLeft || i.clientLeft || 0),
          (o -= a.clientTop || i.clientTop || 0),
          { left: n, top: o }
        );
      }
      function ee(e, t) {
        var n = e['page'.concat(t ? 'Y' : 'X', 'Offset')],
          o = 'scroll'.concat(t ? 'Top' : 'Left');
        if ('number' !== typeof n) {
          var r = e.document;
          (n = r.documentElement[o]), 'number' !== typeof n && (n = r.body[o]);
        }
        return n;
      }
      function te(e) {
        return ee(e);
      }
      function ne(e) {
        return ee(e, !0);
      }
      function oe(e) {
        var t = J(e),
          n = e.ownerDocument,
          o = n.defaultView || n.parentWindow;
        return (t.left += te(o)), (t.top += ne(o)), t;
      }
      function re(e) {
        return null !== e && void 0 !== e && e == e.window;
      }
      function ie(e) {
        return re(e) ? e.document : 9 === e.nodeType ? e : e.ownerDocument;
      }
      function ae(e, t, n) {
        var o = n,
          r = '',
          i = ie(e);
        return (
          (o = o || i.defaultView.getComputedStyle(e, null)),
          o && (r = o.getPropertyValue(t) || o[t]),
          r
        );
      }
      var ue = new RegExp('^('.concat(q, ')(?!px)[a-z%]+$'), 'i'),
        ce = /^(top|right|bottom|left)$/,
        le = 'currentStyle',
        se = 'runtimeStyle',
        fe = 'left',
        de = 'px';
      function pe(e, t) {
        var n = e[le] && e[le][t];
        if (ue.test(n) && !ce.test(t)) {
          var o = e.style,
            r = o[fe],
            i = e[se][fe];
          (e[se][fe] = e[le][fe]),
            (o[fe] = 'fontSize' === t ? '1em' : n || 0),
            (n = o.pixelLeft + de),
            (o[fe] = r),
            (e[se][fe] = i);
        }
        return '' === n ? 'auto' : n;
      }
      function ve(e, t) {
        return 'left' === e
          ? t.useCssRight
            ? 'right'
            : e
          : t.useCssBottom
          ? 'bottom'
          : e;
      }
      function me(e) {
        return 'left' === e
          ? 'right'
          : 'right' === e
          ? 'left'
          : 'top' === e
          ? 'bottom'
          : 'bottom' === e
          ? 'top'
          : void 0;
      }
      function he(e, t, n) {
        'static' === $(e, 'position') && (e.style.position = 'relative');
        var o = -999,
          r = -999,
          i = ve('left', n),
          a = ve('top', n),
          u = me(i),
          c = me(a);
        'left' !== i && (o = 999), 'top' !== a && (r = 999);
        var l = '',
          s = oe(e);
        ('left' in t || 'top' in t) && ((l = F(e) || ''), z(e, 'none')),
          'left' in t && ((e.style[u] = ''), (e.style[i] = ''.concat(o, 'px'))),
          'top' in t && ((e.style[c] = ''), (e.style[a] = ''.concat(r, 'px'))),
          Q(e);
        var f = oe(e),
          d = {};
        for (var p in t)
          if (t.hasOwnProperty(p)) {
            var v = ve(p, n),
              m = 'left' === p ? o : r,
              h = s[p] - f[p];
            d[v] = v === p ? m + h : m - h;
          }
        $(e, d), Q(e), ('left' in t || 'top' in t) && z(e, l);
        var g = {};
        for (var y in t)
          if (t.hasOwnProperty(y)) {
            var b = ve(y, n),
              w = t[y] - s[y];
            g[b] = y === b ? d[b] + w : d[b] - w;
          }
        $(e, g);
      }
      function ge(e, t) {
        var n = oe(e),
          o = U(e),
          r = { x: o.x, y: o.y };
        'left' in t && (r.x = o.x + t.left - n.left),
          'top' in t && (r.y = o.y + t.top - n.top),
          X(e, r);
      }
      function ye(e, t, n) {
        if (n.ignoreShake) {
          var o = oe(e),
            r = o.left.toFixed(0),
            i = o.top.toFixed(0),
            a = t.left.toFixed(0),
            u = t.top.toFixed(0);
          if (r === a && i === u) return;
        }
        n.useCssRight || n.useCssBottom
          ? he(e, t, n)
          : n.useCssTransform && W() in document.body.style
          ? ge(e, t)
          : he(e, t, n);
      }
      function be(e, t) {
        for (var n = 0; n < e.length; n++) t(e[n]);
      }
      function we(e) {
        return 'border-box' === G(e, 'boxSizing');
      }
      'undefined' !== typeof window && (G = window.getComputedStyle ? ae : pe);
      var Ze = ['margin', 'border', 'padding'],
        Ee = -1,
        Ce = 2,
        xe = 1,
        Oe = 0;
      function Me(e, t, n) {
        var o,
          r = {},
          i = e.style;
        for (o in t) t.hasOwnProperty(o) && ((r[o] = i[o]), (i[o] = t[o]));
        for (o in (n.call(e), t)) t.hasOwnProperty(o) && (i[o] = r[o]);
      }
      function Ne(e, t, n) {
        var o,
          r,
          i,
          a = 0;
        for (r = 0; r < t.length; r++)
          if (((o = t[r]), o))
            for (i = 0; i < n.length; i++) {
              var u = void 0;
              (u =
                'border' === o ? ''.concat(o).concat(n[i], 'Width') : o + n[i]),
                (a += parseFloat(G(e, u)) || 0);
            }
        return a;
      }
      var Pe = {
        getParent: function (e) {
          var t = e;
          do {
            t = 11 === t.nodeType && t.host ? t.host : t.parentNode;
          } while (t && 1 !== t.nodeType && 9 !== t.nodeType);
          return t;
        },
      };
      function Te(e, t, n) {
        var o = n;
        if (re(e))
          return 'width' === t ? Pe.viewportWidth(e) : Pe.viewportHeight(e);
        if (9 === e.nodeType)
          return 'width' === t ? Pe.docWidth(e) : Pe.docHeight(e);
        var r = 'width' === t ? ['Left', 'Right'] : ['Top', 'Bottom'],
          i =
            'width' === t
              ? Math.floor(e.getBoundingClientRect().width)
              : Math.floor(e.getBoundingClientRect().height),
          a = we(e),
          u = 0;
        (null === i || void 0 === i || i <= 0) &&
          ((i = void 0),
          (u = G(e, t)),
          (null === u || void 0 === u || Number(u) < 0) &&
            (u = e.style[t] || 0),
          (u = Math.floor(parseFloat(u)) || 0)),
          void 0 === o && (o = a ? xe : Ee);
        var c = void 0 !== i || a,
          l = i || u;
        return o === Ee
          ? c
            ? l - Ne(e, ['border', 'padding'], r)
            : u
          : c
          ? o === xe
            ? l
            : l + (o === Ce ? -Ne(e, ['border'], r) : Ne(e, ['margin'], r))
          : u + Ne(e, Ze.slice(o), r);
      }
      be(['Width', 'Height'], function (e) {
        (Pe['doc'.concat(e)] = function (t) {
          var n = t.document;
          return Math.max(
            n.documentElement['scroll'.concat(e)],
            n.body['scroll'.concat(e)],
            Pe['viewport'.concat(e)](n),
          );
        }),
          (Pe['viewport'.concat(e)] = function (t) {
            var n = 'client'.concat(e),
              o = t.document,
              r = o.body,
              i = o.documentElement,
              a = i[n];
            return ('CSS1Compat' === o.compatMode && a) || (r && r[n]) || a;
          });
      });
      var Se = { position: 'absolute', visibility: 'hidden', display: 'block' };
      function ke() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var o,
          r = t[0];
        return (
          0 !== r.offsetWidth
            ? (o = Te.apply(void 0, t))
            : Me(r, Se, function () {
                o = Te.apply(void 0, t);
              }),
          o
        );
      }
      function Re(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e;
      }
      be(['width', 'height'], function (e) {
        var t = e.charAt(0).toUpperCase() + e.slice(1);
        Pe['outer'.concat(t)] = function (t, n) {
          return t && ke(t, e, n ? Oe : xe);
        };
        var n = 'width' === e ? ['Left', 'Right'] : ['Top', 'Bottom'];
        Pe[e] = function (t, o) {
          var r = o;
          if (void 0 === r) return t && ke(t, e, Ee);
          if (t) {
            var i = we(t);
            return i && (r += Ne(t, ['padding', 'border'], n)), $(t, e, r);
          }
        };
      });
      var _e = {
        getWindow: function (e) {
          if (e && e.document && e.setTimeout) return e;
          var t = e.ownerDocument || e;
          return t.defaultView || t.parentWindow;
        },
        getDocument: ie,
        offset: function (e, t, n) {
          if ('undefined' === typeof t) return oe(e);
          ye(e, t, n || {});
        },
        isWindow: re,
        each: be,
        css: $,
        clone: function (e) {
          var t,
            n = {};
          for (t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
          var o = e.overflow;
          if (o)
            for (t in e) e.hasOwnProperty(t) && (n.overflow[t] = e.overflow[t]);
          return n;
        },
        mix: Re,
        getWindowScrollLeft: function (e) {
          return te(e);
        },
        getWindowScrollTop: function (e) {
          return ne(e);
        },
        merge: function () {
          for (var e = {}, t = 0; t < arguments.length; t++)
            _e.mix(e, t < 0 || arguments.length <= t ? void 0 : arguments[t]);
          return e;
        },
        viewportWidth: 0,
        viewportHeight: 0,
      };
      Re(_e, Pe);
      var Ie = _e.getParent;
      function Ae(e) {
        if (_e.isWindow(e) || 9 === e.nodeType) return null;
        var t,
          n = _e.getDocument(e),
          o = n.body,
          r = _e.css(e, 'position'),
          i = 'fixed' === r || 'absolute' === r;
        if (!i) return 'html' === e.nodeName.toLowerCase() ? null : Ie(e);
        for (t = Ie(e); t && t !== o && 9 !== t.nodeType; t = Ie(t))
          if (((r = _e.css(t, 'position')), 'static' !== r)) return t;
        return null;
      }
      var De = _e.getParent;
      function Le(e) {
        if (_e.isWindow(e) || 9 === e.nodeType) return !1;
        var t = _e.getDocument(e),
          n = t.body,
          o = null;
        for (o = De(e); o && o !== n && o !== t; o = De(o)) {
          var r = _e.css(o, 'position');
          if ('fixed' === r) return !0;
        }
        return !1;
      }
      function He(e, t) {
        var n = { left: 0, right: 1 / 0, top: 0, bottom: 1 / 0 },
          o = Ae(e),
          r = _e.getDocument(e),
          i = r.defaultView || r.parentWindow,
          a = r.body,
          u = r.documentElement;
        while (o) {
          if (
            (-1 !== navigator.userAgent.indexOf('MSIE') &&
              0 === o.clientWidth) ||
            o === a ||
            o === u ||
            'visible' === _e.css(o, 'overflow')
          ) {
            if (o === a || o === u) break;
          } else {
            var c = _e.offset(o);
            (c.left += o.clientLeft),
              (c.top += o.clientTop),
              (n.top = Math.max(n.top, c.top)),
              (n.right = Math.min(n.right, c.left + o.clientWidth)),
              (n.bottom = Math.min(n.bottom, c.top + o.clientHeight)),
              (n.left = Math.max(n.left, c.left));
          }
          o = Ae(o);
        }
        var l = null;
        if (!_e.isWindow(e) && 9 !== e.nodeType) {
          l = e.style.position;
          var s = _e.css(e, 'position');
          'absolute' === s && (e.style.position = 'fixed');
        }
        var f = _e.getWindowScrollLeft(i),
          d = _e.getWindowScrollTop(i),
          p = _e.viewportWidth(i),
          v = _e.viewportHeight(i),
          m = u.scrollWidth,
          h = u.scrollHeight,
          g = window.getComputedStyle(a);
        if (
          ('hidden' === g.overflowX && (m = i.innerWidth),
          'hidden' === g.overflowY && (h = i.innerHeight),
          e.style && (e.style.position = l),
          t || Le(e))
        )
          (n.left = Math.max(n.left, f)),
            (n.top = Math.max(n.top, d)),
            (n.right = Math.min(n.right, f + p)),
            (n.bottom = Math.min(n.bottom, d + v));
        else {
          var y = Math.max(m, f + p);
          n.right = Math.min(n.right, y);
          var b = Math.max(h, d + v);
          n.bottom = Math.min(n.bottom, b);
        }
        return n.top >= 0 && n.left >= 0 && n.bottom > n.top && n.right > n.left
          ? n
          : null;
      }
      function je(e, t, n, o) {
        var r = _e.clone(e),
          i = { width: t.width, height: t.height };
        return (
          o.adjustX && r.left < n.left && (r.left = n.left),
          o.resizeWidth &&
            r.left >= n.left &&
            r.left + i.width > n.right &&
            (i.width -= r.left + i.width - n.right),
          o.adjustX &&
            r.left + i.width > n.right &&
            (r.left = Math.max(n.right - i.width, n.left)),
          o.adjustY && r.top < n.top && (r.top = n.top),
          o.resizeHeight &&
            r.top >= n.top &&
            r.top + i.height > n.bottom &&
            (i.height -= r.top + i.height - n.bottom),
          o.adjustY &&
            r.top + i.height > n.bottom &&
            (r.top = Math.max(n.bottom - i.height, n.top)),
          _e.mix(r, i)
        );
      }
      function Ve(e) {
        var t, n, o;
        if (_e.isWindow(e) || 9 === e.nodeType) {
          var r = _e.getWindow(e);
          (t = {
            left: _e.getWindowScrollLeft(r),
            top: _e.getWindowScrollTop(r),
          }),
            (n = _e.viewportWidth(r)),
            (o = _e.viewportHeight(r));
        } else
          (t = _e.offset(e)), (n = _e.outerWidth(e)), (o = _e.outerHeight(e));
        return (t.width = n), (t.height = o), t;
      }
      function We(e, t) {
        var n = t.charAt(0),
          o = t.charAt(1),
          r = e.width,
          i = e.height,
          a = e.left,
          u = e.top;
        return (
          'c' === n ? (u += i / 2) : 'b' === n && (u += i),
          'c' === o ? (a += r / 2) : 'r' === o && (a += r),
          { left: a, top: u }
        );
      }
      function ze(e, t, n, o, r) {
        var i = We(t, n[1]),
          a = We(e, n[0]),
          u = [a.left - i.left, a.top - i.top];
        return {
          left: Math.round(e.left - u[0] + o[0] - r[0]),
          top: Math.round(e.top - u[1] + o[1] - r[1]),
        };
      }
      function Ke(e, t, n) {
        return e.left < n.left || e.left + t.width > n.right;
      }
      function Fe(e, t, n) {
        return e.top < n.top || e.top + t.height > n.bottom;
      }
      function Ue(e, t, n) {
        return e.left > n.right || e.left + t.width < n.left;
      }
      function Be(e, t, n) {
        return e.top > n.bottom || e.top + t.height < n.top;
      }
      function Ye(e, t, n) {
        var o = [];
        return (
          _e.each(e, function (e) {
            o.push(
              e.replace(t, function (e) {
                return n[e];
              }),
            );
          }),
          o
        );
      }
      function Xe(e, t) {
        return (e[t] = -e[t]), e;
      }
      function Ge(e, t) {
        var n;
        return (
          (n = /%$/.test(e)
            ? (parseInt(e.substring(0, e.length - 1), 10) / 100) * t
            : parseInt(e, 10)),
          n || 0
        );
      }
      function qe(e, t) {
        (e[0] = Ge(e[0], t.width)), (e[1] = Ge(e[1], t.height));
      }
      function Qe(e, t, n, o) {
        var r = n.points,
          i = n.offset || [0, 0],
          a = n.targetOffset || [0, 0],
          u = n.overflow,
          c = n.source || e;
        (i = [].concat(i)), (a = [].concat(a)), (u = u || {});
        var l = {},
          s = 0,
          f = !(!u || !u.alwaysByViewport),
          d = He(c, f),
          p = Ve(c);
        qe(i, p), qe(a, t);
        var v = ze(p, t, r, i, a),
          m = _e.merge(p, v);
        if (d && (u.adjustX || u.adjustY) && o) {
          if (u.adjustX && Ke(v, p, d)) {
            var h = Ye(r, /[lr]/gi, { l: 'r', r: 'l' }),
              g = Xe(i, 0),
              y = Xe(a, 0),
              b = ze(p, t, h, g, y);
            Ue(b, p, d) || ((s = 1), (r = h), (i = g), (a = y));
          }
          if (u.adjustY && Fe(v, p, d)) {
            var w = Ye(r, /[tb]/gi, { t: 'b', b: 't' }),
              Z = Xe(i, 1),
              E = Xe(a, 1),
              C = ze(p, t, w, Z, E);
            Be(C, p, d) || ((s = 1), (r = w), (i = Z), (a = E));
          }
          s && ((v = ze(p, t, r, i, a)), _e.mix(m, v));
          var x = Ke(v, p, d),
            O = Fe(v, p, d);
          if (x || O) {
            var M = r;
            x && (M = Ye(r, /[lr]/gi, { l: 'r', r: 'l' })),
              O && (M = Ye(r, /[tb]/gi, { t: 'b', b: 't' })),
              (r = M),
              (i = n.offset || [0, 0]),
              (a = n.targetOffset || [0, 0]);
          }
          (l.adjustX = u.adjustX && x),
            (l.adjustY = u.adjustY && O),
            (l.adjustX || l.adjustY) && (m = je(v, p, d, l));
        }
        return (
          m.width !== p.width &&
            _e.css(c, 'width', _e.width(c) + m.width - p.width),
          m.height !== p.height &&
            _e.css(c, 'height', _e.height(c) + m.height - p.height),
          _e.offset(
            c,
            { left: m.left, top: m.top },
            {
              useCssRight: n.useCssRight,
              useCssBottom: n.useCssBottom,
              useCssTransform: n.useCssTransform,
              ignoreShake: n.ignoreShake,
            },
          ),
          { points: r, offset: i, targetOffset: a, overflow: l }
        );
      }
      function $e(e, t) {
        var n = He(e, t),
          o = Ve(e);
        return (
          !n ||
          o.left + o.width <= n.left ||
          o.top + o.height <= n.top ||
          o.left >= n.right ||
          o.top >= n.bottom
        );
      }
      function Je(e, t, n) {
        var o = n.target || t,
          r = Ve(o),
          i = !$e(o, n.overflow && n.overflow.alwaysByViewport);
        return Qe(e, r, n, i);
      }
      function et(e, t, n) {
        var o,
          r,
          i = _e.getDocument(e),
          a = i.defaultView || i.parentWindow,
          u = _e.getWindowScrollLeft(a),
          c = _e.getWindowScrollTop(a),
          l = _e.viewportWidth(a),
          s = _e.viewportHeight(a);
        (o = 'pageX' in t ? t.pageX : u + t.clientX),
          (r = 'pageY' in t ? t.pageY : c + t.clientY);
        var f = { left: o, top: r, width: 0, height: 0 },
          d = o >= 0 && o <= u + l && r >= 0 && r <= c + s,
          p = [n.points[0], 'cc'];
        return Qe(e, f, A(A({}, n), {}, { points: p }), d);
      }
      (Je.__getOffsetParent = Ae), (Je.__getVisibleRectForElement = He);
      var tt = n(86423),
        nt = n(26917),
        ot = n(31234),
        rt = function (e, t) {
          var n = f.useRef(!1),
            o = f.useRef(null);
          function r() {
            window.clearTimeout(o.current);
          }
          function i(a) {
            if ((r(), n.current && !0 !== a))
              o.current = window.setTimeout(function () {
                (n.current = !1), i();
              }, t);
            else {
              if (!1 === e(a)) return;
              (n.current = !0),
                (o.current = window.setTimeout(function () {
                  n.current = !1;
                }, t));
            }
          }
          return [
            i,
            function () {
              (n.current = !1), r();
            },
          ];
        },
        it = n(55065);
      function at(e, t) {
        return (
          e === t ||
          (!(!e || !t) &&
            ('pageX' in t && 'pageY' in t
              ? e.pageX === t.pageX && e.pageY === t.pageY
              : 'clientX' in t &&
                'clientY' in t &&
                e.clientX === t.clientX &&
                e.clientY === t.clientY))
        );
      }
      function ut(e, t) {
        e !== document.activeElement &&
          (0, v.Z)(t, e) &&
          'function' === typeof e.focus &&
          e.focus();
      }
      function ct(e, t) {
        var n = null,
          o = null;
        function r(e) {
          var r = (0, M.Z)(e, 1),
            i = r[0].target;
          if (document.documentElement.contains(i)) {
            var a = i.getBoundingClientRect(),
              u = a.width,
              c = a.height,
              l = Math.floor(u),
              s = Math.floor(c);
            (n === l && o === s) ||
              Promise.resolve().then(function () {
                t({ width: l, height: s });
              }),
              (n = l),
              (o = s);
          }
        }
        var i = new it.Z(r);
        return (
          e && i.observe(e),
          function () {
            i.disconnect();
          }
        );
      }
      function lt(e) {
        return 'function' !== typeof e ? null : e();
      }
      function st(e) {
        return 'object' === (0, _.Z)(e) && e ? e : null;
      }
      var ft = function (e, t) {
          var n = e.children,
            o = e.disabled,
            r = e.target,
            i = e.align,
            a = e.onAlign,
            u = e.monitorWindowResize,
            c = e.monitorBufferTime,
            l = void 0 === c ? 0 : c,
            s = f.useRef({}),
            d = f.useRef(),
            p = f.Children.only(n),
            v = f.useRef({});
          (v.current.disabled = o),
            (v.current.target = r),
            (v.current.align = i),
            (v.current.onAlign = a);
          var m = rt(function () {
              var e = v.current,
                t = e.disabled,
                n = e.target,
                o = e.align,
                r = e.onAlign,
                i = d.current;
              if (!t && n && i) {
                var a,
                  u = lt(n),
                  c = st(n);
                (s.current.element = u),
                  (s.current.point = c),
                  (s.current.align = o);
                var l = document,
                  f = l.activeElement;
                return (
                  u && (0, nt.Z)(u)
                    ? (a = Je(i, u, o))
                    : c && (a = et(i, c, o)),
                  ut(f, i),
                  r && a && r(i, a),
                  !0
                );
              }
              return !1;
            }, l),
            y = (0, M.Z)(m, 2),
            b = y[0],
            w = y[1],
            Z = f.useState(),
            E = (0, M.Z)(Z, 2),
            C = E[0],
            x = E[1],
            O = f.useState(),
            N = (0, M.Z)(O, 2),
            P = N[0],
            T = N[1];
          return (
            (0, ot.Z)(function () {
              x(lt(r)), T(st(r));
            }),
            f.useEffect(function () {
              (s.current.element === C &&
                at(s.current.point, P) &&
                (0, tt.Z)(s.current.align, i)) ||
                b();
            }),
            f.useEffect(
              function () {
                var e = ct(d.current, b);
                return e;
              },
              [d.current],
            ),
            f.useEffect(
              function () {
                var e = ct(C, b);
                return e;
              },
              [C],
            ),
            f.useEffect(
              function () {
                o ? w() : b();
              },
              [o],
            ),
            f.useEffect(
              function () {
                if (u) {
                  var e = (0, g.Z)(window, 'resize', b);
                  return e.remove;
                }
              },
              [u],
            ),
            f.useEffect(function () {
              return function () {
                w();
              };
            }, []),
            f.useImperativeHandle(t, function () {
              return {
                forceAlign: function () {
                  return b(!0);
                },
              };
            }),
            f.isValidElement(p) &&
              (p = f.cloneElement(p, { ref: (0, h.sQ)(p.ref, d) })),
            p
          );
        },
        dt = f.forwardRef(ft);
      dt.displayName = 'Align';
      var pt = dt,
        vt = pt,
        mt = n(55507),
        ht = n(92137),
        gt = n(66493),
        yt = ['measure', 'alignPre', 'align', null, 'motion'],
        bt = function (e, t) {
          var n = (0, gt.Z)(null),
            o = (0, M.Z)(n, 2),
            r = o[0],
            i = o[1],
            a = (0, f.useRef)();
          function u(e) {
            i(e, !0);
          }
          function c() {
            p.Z.cancel(a.current);
          }
          function l(e) {
            c(),
              (a.current = (0, p.Z)(function () {
                u(function (e) {
                  switch (r) {
                    case 'align':
                      return 'motion';
                    case 'motion':
                      return 'stable';
                    default:
                  }
                  return e;
                }),
                  null === e || void 0 === e || e();
              }));
          }
          return (
            (0, f.useEffect)(
              function () {
                u('measure');
              },
              [e],
            ),
            (0, f.useEffect)(
              function () {
                switch (r) {
                  case 'measure':
                    t();
                    break;
                  default:
                }
                r &&
                  (a.current = (0, p.Z)(
                    (0, ht.Z)(
                      (0, mt.Z)().mark(function e() {
                        var t, n;
                        return (0, mt.Z)().wrap(function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (t = yt.indexOf(r)),
                                  (n = yt[t + 1]),
                                  n && -1 !== t && u(n);
                              case 3:
                              case 'end':
                                return e.stop();
                            }
                        }, e);
                      }),
                    ),
                  ));
              },
              [r],
            ),
            (0, f.useEffect)(function () {
              return function () {
                c();
              };
            }, []),
            [r, l]
          );
        },
        wt = function (e) {
          var t = f.useState({ width: 0, height: 0 }),
            n = (0, M.Z)(t, 2),
            o = n[0],
            r = n[1];
          function i(e) {
            var t = e.offsetWidth,
              n = e.offsetHeight,
              o = e.getBoundingClientRect(),
              i = o.width,
              a = o.height;
            Math.abs(t - i) < 1 && Math.abs(n - a) < 1 && ((t = i), (n = a)),
              r({ width: t, height: n });
          }
          var a = f.useMemo(
            function () {
              var t = {};
              if (e) {
                var n = o.width,
                  r = o.height;
                -1 !== e.indexOf('height') && r
                  ? (t.height = r)
                  : -1 !== e.indexOf('minHeight') && r && (t.minHeight = r),
                  -1 !== e.indexOf('width') && n
                    ? (t.width = n)
                    : -1 !== e.indexOf('minWidth') && n && (t.minWidth = n);
              }
              return t;
            },
            [e, o],
          );
          return [a, i];
        },
        Zt = f.forwardRef(function (e, t) {
          var n = e.visible,
            i = e.prefixCls,
            a = e.className,
            u = e.style,
            c = e.children,
            l = e.zIndex,
            s = e.stretch,
            d = e.destroyPopupOnHide,
            p = e.forceRender,
            v = e.align,
            m = e.point,
            h = e.getRootDomNode,
            g = e.getClassNameFromAlign,
            y = e.onAlign,
            b = e.onMouseEnter,
            w = e.onMouseLeave,
            Z = e.onMouseDown,
            C = e.onTouchStart,
            x = e.onClick,
            O = (0, f.useRef)(),
            N = (0, f.useRef)(),
            P = (0, f.useState)(),
            k = (0, M.Z)(P, 2),
            R = k[0],
            _ = k[1],
            I = wt(s),
            A = (0, M.Z)(I, 2),
            D = A[0],
            L = A[1];
          function H() {
            s && L(h());
          }
          var j = bt(n, H),
            V = (0, M.Z)(j, 2),
            W = V[0],
            z = V[1],
            K = (0, f.useState)(0),
            F = (0, M.Z)(K, 2),
            U = F[0],
            B = F[1],
            Y = (0, f.useRef)();
          function X() {
            return m || h;
          }
          function G() {
            var e;
            null === (e = O.current) || void 0 === e || e.forceAlign();
          }
          function q(e, t) {
            var n = g(t);
            R !== n && _(n),
              B(function (e) {
                return e + 1;
              }),
              'align' === W && (null === y || void 0 === y || y(e, t));
          }
          (0, ot.Z)(
            function () {
              'alignPre' === W && B(0);
            },
            [W],
          ),
            (0, ot.Z)(
              function () {
                'align' === W &&
                  (U < 3
                    ? G()
                    : z(function () {
                        var e;
                        null === (e = Y.current) || void 0 === e || e.call(Y);
                      }));
              },
              [U],
            );
          var Q = (0, o.Z)({}, S(e));
          function $() {
            return new Promise(function (e) {
              Y.current = e;
            });
          }
          ['onAppearEnd', 'onEnterEnd', 'onLeaveEnd'].forEach(function (e) {
            var t = Q[e];
            Q[e] = function (e, n) {
              return z(), null === t || void 0 === t ? void 0 : t(e, n);
            };
          }),
            f.useEffect(
              function () {
                Q.motionName || 'motion' !== W || z();
              },
              [Q.motionName, W],
            ),
            f.useImperativeHandle(t, function () {
              return {
                forceAlign: G,
                getElement: function () {
                  return N.current;
                },
              };
            });
          var J = (0, o.Z)(
              (0, o.Z)({}, D),
              {},
              {
                zIndex: l,
                opacity: 'motion' !== W && 'stable' !== W && n ? 0 : void 0,
                pointerEvents: n || 'stable' === W ? void 0 : 'none',
              },
              u,
            ),
            ee = !0;
          null === v ||
            void 0 === v ||
            !v.points ||
            ('align' !== W && 'stable' !== W) ||
            (ee = !1);
          var te = c;
          return (
            f.Children.count(c) > 1 &&
              (te = f.createElement(
                'div',
                { className: ''.concat(i, '-content') },
                c,
              )),
            f.createElement(
              T.Z,
              (0, r.Z)(
                {
                  visible: n,
                  ref: N,
                  leavedClassName: ''.concat(i, '-hidden'),
                },
                Q,
                {
                  onAppearPrepare: $,
                  onEnterPrepare: $,
                  removeOnLeave: d,
                  forceRender: p,
                },
              ),
              function (e, t) {
                var n = e.className,
                  r = e.style,
                  u = E()(i, a, R, n);
                return f.createElement(
                  vt,
                  {
                    target: X(),
                    key: 'popup',
                    ref: O,
                    monitorWindowResize: !0,
                    disabled: ee,
                    align: v,
                    onAlign: q,
                  },
                  f.createElement(
                    'div',
                    {
                      ref: t,
                      className: u,
                      onMouseEnter: b,
                      onMouseLeave: w,
                      onMouseDownCapture: Z,
                      onTouchStartCapture: C,
                      onClick: x,
                      style: (0, o.Z)((0, o.Z)({}, r), J),
                    },
                    te,
                  ),
                );
              },
            )
          );
        });
      Zt.displayName = 'PopupInner';
      var Et = Zt,
        Ct = f.forwardRef(function (e, t) {
          var n = e.prefixCls,
            i = e.visible,
            a = e.zIndex,
            u = e.children,
            c = e.mobile;
          c = void 0 === c ? {} : c;
          var l = c.popupClassName,
            s = c.popupStyle,
            d = c.popupMotion,
            p = void 0 === d ? {} : d,
            v = c.popupRender,
            m = e.onClick,
            h = f.useRef();
          f.useImperativeHandle(t, function () {
            return {
              forceAlign: function () {},
              getElement: function () {
                return h.current;
              },
            };
          });
          var g = (0, o.Z)({ zIndex: a }, s),
            y = u;
          return (
            f.Children.count(u) > 1 &&
              (y = f.createElement(
                'div',
                { className: ''.concat(n, '-content') },
                u,
              )),
            v && (y = v(y)),
            f.createElement(
              T.Z,
              (0, r.Z)({ visible: i, ref: h, removeOnLeave: !0 }, p),
              function (e, t) {
                var r = e.className,
                  i = e.style,
                  a = E()(n, l, r);
                return f.createElement(
                  'div',
                  {
                    ref: t,
                    className: a,
                    onClick: m,
                    style: (0, o.Z)((0, o.Z)({}, i), g),
                  },
                  y,
                );
              },
            )
          );
        });
      Ct.displayName = 'MobilePopupInner';
      var xt = Ct,
        Ot = ['visible', 'mobile'],
        Mt = f.forwardRef(function (e, t) {
          var n = e.visible,
            i = e.mobile,
            a = (0, N.Z)(e, Ot),
            u = (0, f.useState)(n),
            c = (0, M.Z)(u, 2),
            l = c[0],
            s = c[1],
            d = (0, f.useState)(!1),
            p = (0, M.Z)(d, 2),
            v = p[0],
            m = p[1],
            h = (0, o.Z)((0, o.Z)({}, a), {}, { visible: l });
          (0, f.useEffect)(
            function () {
              s(n), n && i && m((0, P.Z)());
            },
            [n, i],
          );
          var g = v
            ? f.createElement(xt, (0, r.Z)({}, h, { mobile: i, ref: t }))
            : f.createElement(Et, (0, r.Z)({}, h, { ref: t }));
          return f.createElement('div', null, f.createElement(k, h), g);
        });
      Mt.displayName = 'Popup';
      var Nt = Mt,
        Pt = f.createContext(null),
        Tt = Pt;
      function St() {}
      function kt() {
        return '';
      }
      function Rt(e) {
        return e ? e.ownerDocument : window.document;
      }
      var _t = [
        'onClick',
        'onMouseDown',
        'onTouchStart',
        'onMouseEnter',
        'onMouseLeave',
        'onFocus',
        'onBlur',
        'onContextMenu',
      ];
      function It(e) {
        var t = (function (t) {
          (0, c.Z)(y, t);
          var n = (0, l.Z)(y);
          function y(e) {
            var t, o;
            return (
              (0, i.Z)(this, y),
              (t = n.call(this, e)),
              (0, s.Z)((0, u.Z)(t), 'popupRef', f.createRef()),
              (0, s.Z)((0, u.Z)(t), 'triggerRef', f.createRef()),
              (0, s.Z)((0, u.Z)(t), 'portalContainer', void 0),
              (0, s.Z)((0, u.Z)(t), 'attachId', void 0),
              (0, s.Z)((0, u.Z)(t), 'clickOutsideHandler', void 0),
              (0, s.Z)((0, u.Z)(t), 'touchOutsideHandler', void 0),
              (0, s.Z)((0, u.Z)(t), 'contextMenuOutsideHandler1', void 0),
              (0, s.Z)((0, u.Z)(t), 'contextMenuOutsideHandler2', void 0),
              (0, s.Z)((0, u.Z)(t), 'mouseDownTimeout', void 0),
              (0, s.Z)((0, u.Z)(t), 'focusTime', void 0),
              (0, s.Z)((0, u.Z)(t), 'preClickTime', void 0),
              (0, s.Z)((0, u.Z)(t), 'preTouchTime', void 0),
              (0, s.Z)((0, u.Z)(t), 'delayTimer', void 0),
              (0, s.Z)((0, u.Z)(t), 'hasPopupMouseDown', void 0),
              (0, s.Z)((0, u.Z)(t), 'onMouseEnter', function (e) {
                var n = t.props.mouseEnterDelay;
                t.fireEvents('onMouseEnter', e),
                  t.delaySetPopupVisible(!0, n, n ? null : e);
              }),
              (0, s.Z)((0, u.Z)(t), 'onMouseMove', function (e) {
                t.fireEvents('onMouseMove', e), t.setPoint(e);
              }),
              (0, s.Z)((0, u.Z)(t), 'onMouseLeave', function (e) {
                t.fireEvents('onMouseLeave', e),
                  t.delaySetPopupVisible(!1, t.props.mouseLeaveDelay);
              }),
              (0, s.Z)((0, u.Z)(t), 'onPopupMouseEnter', function () {
                t.clearDelayTimer();
              }),
              (0, s.Z)((0, u.Z)(t), 'onPopupMouseLeave', function (e) {
                var n;
                (e.relatedTarget &&
                  !e.relatedTarget.setTimeout &&
                  (0, v.Z)(
                    null === (n = t.popupRef.current) || void 0 === n
                      ? void 0
                      : n.getElement(),
                    e.relatedTarget,
                  )) ||
                  t.delaySetPopupVisible(!1, t.props.mouseLeaveDelay);
              }),
              (0, s.Z)((0, u.Z)(t), 'onFocus', function (e) {
                t.fireEvents('onFocus', e),
                  t.clearDelayTimer(),
                  t.isFocusToShow() &&
                    ((t.focusTime = Date.now()),
                    t.delaySetPopupVisible(!0, t.props.focusDelay));
              }),
              (0, s.Z)((0, u.Z)(t), 'onMouseDown', function (e) {
                t.fireEvents('onMouseDown', e), (t.preClickTime = Date.now());
              }),
              (0, s.Z)((0, u.Z)(t), 'onTouchStart', function (e) {
                t.fireEvents('onTouchStart', e), (t.preTouchTime = Date.now());
              }),
              (0, s.Z)((0, u.Z)(t), 'onBlur', function (e) {
                t.fireEvents('onBlur', e),
                  t.clearDelayTimer(),
                  t.isBlurToHide() &&
                    t.delaySetPopupVisible(!1, t.props.blurDelay);
              }),
              (0, s.Z)((0, u.Z)(t), 'onContextMenu', function (e) {
                e.preventDefault(),
                  t.fireEvents('onContextMenu', e),
                  t.setPopupVisible(!0, e);
              }),
              (0, s.Z)((0, u.Z)(t), 'onContextMenuClose', function () {
                t.isContextMenuToShow() && t.close();
              }),
              (0, s.Z)((0, u.Z)(t), 'onClick', function (e) {
                if ((t.fireEvents('onClick', e), t.focusTime)) {
                  var n;
                  if (
                    (t.preClickTime && t.preTouchTime
                      ? (n = Math.min(t.preClickTime, t.preTouchTime))
                      : t.preClickTime
                      ? (n = t.preClickTime)
                      : t.preTouchTime && (n = t.preTouchTime),
                    Math.abs(n - t.focusTime) < 20)
                  )
                    return;
                  t.focusTime = 0;
                }
                (t.preClickTime = 0),
                  (t.preTouchTime = 0),
                  t.isClickToShow() &&
                    (t.isClickToHide() || t.isBlurToHide()) &&
                    e &&
                    e.preventDefault &&
                    e.preventDefault();
                var o = !t.state.popupVisible;
                ((t.isClickToHide() && !o) || (o && t.isClickToShow())) &&
                  t.setPopupVisible(!t.state.popupVisible, e);
              }),
              (0, s.Z)((0, u.Z)(t), 'onPopupMouseDown', function () {
                var e;
                ((t.hasPopupMouseDown = !0),
                clearTimeout(t.mouseDownTimeout),
                (t.mouseDownTimeout = window.setTimeout(function () {
                  t.hasPopupMouseDown = !1;
                }, 0)),
                t.context) &&
                  (e = t.context).onPopupMouseDown.apply(e, arguments);
              }),
              (0, s.Z)((0, u.Z)(t), 'onDocumentClick', function (e) {
                if (!t.props.mask || t.props.maskClosable) {
                  var n = e.target,
                    o = t.getRootDomNode(),
                    r = t.getPopupDomNode();
                  ((0, v.Z)(o, n) && !t.isContextMenuOnly()) ||
                    (0, v.Z)(r, n) ||
                    t.hasPopupMouseDown ||
                    t.close();
                }
              }),
              (0, s.Z)((0, u.Z)(t), 'getRootDomNode', function () {
                var e = t.props.getTriggerDOMNode;
                if (e) return e(t.triggerRef.current);
                try {
                  var n = (0, m.Z)(t.triggerRef.current);
                  if (n) return n;
                } catch (o) {}
                return d.findDOMNode((0, u.Z)(t));
              }),
              (0, s.Z)((0, u.Z)(t), 'getPopupClassNameFromAlign', function (e) {
                var n = [],
                  o = t.props,
                  r = o.popupPlacement,
                  i = o.builtinPlacements,
                  a = o.prefixCls,
                  u = o.alignPoint,
                  c = o.getPopupClassNameFromAlign;
                return (
                  r && i && n.push(O(i, a, e, u)),
                  c && n.push(c(e)),
                  n.join(' ')
                );
              }),
              (0, s.Z)((0, u.Z)(t), 'getComponent', function () {
                var e = t.props,
                  n = e.prefixCls,
                  o = e.destroyPopupOnHide,
                  i = e.popupClassName,
                  a = e.onPopupAlign,
                  u = e.popupMotion,
                  c = e.popupAnimation,
                  l = e.popupTransitionName,
                  s = e.popupStyle,
                  d = e.mask,
                  p = e.maskAnimation,
                  v = e.maskTransitionName,
                  m = e.maskMotion,
                  h = e.zIndex,
                  g = e.popup,
                  y = e.stretch,
                  b = e.alignPoint,
                  w = e.mobile,
                  Z = e.forceRender,
                  E = e.onPopupClick,
                  C = t.state,
                  x = C.popupVisible,
                  O = C.point,
                  M = t.getPopupAlign(),
                  N = {};
                return (
                  t.isMouseEnterToShow() &&
                    (N.onMouseEnter = t.onPopupMouseEnter),
                  t.isMouseLeaveToHide() &&
                    (N.onMouseLeave = t.onPopupMouseLeave),
                  (N.onMouseDown = t.onPopupMouseDown),
                  (N.onTouchStart = t.onPopupMouseDown),
                  f.createElement(
                    Nt,
                    (0, r.Z)(
                      {
                        prefixCls: n,
                        destroyPopupOnHide: o,
                        visible: x,
                        point: b && O,
                        className: i,
                        align: M,
                        onAlign: a,
                        animation: c,
                        getClassNameFromAlign: t.getPopupClassNameFromAlign,
                      },
                      N,
                      {
                        stretch: y,
                        getRootDomNode: t.getRootDomNode,
                        style: s,
                        mask: d,
                        zIndex: h,
                        transitionName: l,
                        maskAnimation: p,
                        maskTransitionName: v,
                        maskMotion: m,
                        ref: t.popupRef,
                        motion: u,
                        mobile: w,
                        forceRender: Z,
                        onClick: E,
                      },
                    ),
                    'function' === typeof g ? g() : g,
                  )
                );
              }),
              (0, s.Z)((0, u.Z)(t), 'attachParent', function (e) {
                p.Z.cancel(t.attachId);
                var n,
                  o = t.props,
                  r = o.getPopupContainer,
                  i = o.getDocument,
                  a = t.getRootDomNode();
                r
                  ? (a || 0 === r.length) && (n = r(a))
                  : (n = i(t.getRootDomNode()).body),
                  n
                    ? n.appendChild(e)
                    : (t.attachId = (0, p.Z)(function () {
                        t.attachParent(e);
                      }));
              }),
              (0, s.Z)((0, u.Z)(t), 'getContainer', function () {
                if (!t.portalContainer) {
                  var e = t.props.getDocument,
                    n = e(t.getRootDomNode()).createElement('div');
                  (n.style.position = 'absolute'),
                    (n.style.top = '0'),
                    (n.style.left = '0'),
                    (n.style.width = '100%'),
                    (t.portalContainer = n);
                }
                return t.attachParent(t.portalContainer), t.portalContainer;
              }),
              (0, s.Z)((0, u.Z)(t), 'setPoint', function (e) {
                var n = t.props.alignPoint;
                n &&
                  e &&
                  t.setState({ point: { pageX: e.pageX, pageY: e.pageY } });
              }),
              (0, s.Z)((0, u.Z)(t), 'handlePortalUpdate', function () {
                t.state.prevPopupVisible !== t.state.popupVisible &&
                  t.props.afterPopupVisibleChange(t.state.popupVisible);
              }),
              (0, s.Z)((0, u.Z)(t), 'triggerContextValue', {
                onPopupMouseDown: t.onPopupMouseDown,
              }),
              (o =
                'popupVisible' in e
                  ? !!e.popupVisible
                  : !!e.defaultPopupVisible),
              (t.state = { prevPopupVisible: o, popupVisible: o }),
              _t.forEach(function (e) {
                t['fire'.concat(e)] = function (n) {
                  t.fireEvents(e, n);
                };
              }),
              t
            );
          }
          return (
            (0, a.Z)(
              y,
              [
                {
                  key: 'componentDidMount',
                  value: function () {
                    this.componentDidUpdate();
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function () {
                    var e,
                      t = this.props,
                      n = this.state;
                    if (n.popupVisible)
                      return (
                        this.clickOutsideHandler ||
                          (!this.isClickToHide() &&
                            !this.isContextMenuToShow()) ||
                          ((e = t.getDocument(this.getRootDomNode())),
                          (this.clickOutsideHandler = (0, g.Z)(
                            e,
                            'mousedown',
                            this.onDocumentClick,
                          ))),
                        this.touchOutsideHandler ||
                          ((e = e || t.getDocument(this.getRootDomNode())),
                          (this.touchOutsideHandler = (0, g.Z)(
                            e,
                            'touchstart',
                            this.onDocumentClick,
                          ))),
                        !this.contextMenuOutsideHandler1 &&
                          this.isContextMenuToShow() &&
                          ((e = e || t.getDocument(this.getRootDomNode())),
                          (this.contextMenuOutsideHandler1 = (0, g.Z)(
                            e,
                            'scroll',
                            this.onContextMenuClose,
                          ))),
                        void (
                          !this.contextMenuOutsideHandler2 &&
                          this.isContextMenuToShow() &&
                          (this.contextMenuOutsideHandler2 = (0, g.Z)(
                            window,
                            'blur',
                            this.onContextMenuClose,
                          ))
                        )
                      );
                    this.clearOutsideHandler();
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    this.clearDelayTimer(),
                      this.clearOutsideHandler(),
                      clearTimeout(this.mouseDownTimeout),
                      p.Z.cancel(this.attachId);
                  },
                },
                {
                  key: 'getPopupDomNode',
                  value: function () {
                    var e;
                    return (
                      (null === (e = this.popupRef.current) || void 0 === e
                        ? void 0
                        : e.getElement()) || null
                    );
                  },
                },
                {
                  key: 'getPopupAlign',
                  value: function () {
                    var e = this.props,
                      t = e.popupPlacement,
                      n = e.popupAlign,
                      o = e.builtinPlacements;
                    return t && o ? x(o, t, n) : n;
                  },
                },
                {
                  key: 'setPopupVisible',
                  value: function (e, t) {
                    var n = this.props.alignPoint,
                      o = this.state.popupVisible;
                    this.clearDelayTimer(),
                      o !== e &&
                        ('popupVisible' in this.props ||
                          this.setState({
                            popupVisible: e,
                            prevPopupVisible: o,
                          }),
                        this.props.onPopupVisibleChange(e)),
                      n && t && e && this.setPoint(t);
                  },
                },
                {
                  key: 'delaySetPopupVisible',
                  value: function (e, t, n) {
                    var o = this,
                      r = 1e3 * t;
                    if ((this.clearDelayTimer(), r)) {
                      var i = n ? { pageX: n.pageX, pageY: n.pageY } : null;
                      this.delayTimer = window.setTimeout(function () {
                        o.setPopupVisible(e, i), o.clearDelayTimer();
                      }, r);
                    } else this.setPopupVisible(e, n);
                  },
                },
                {
                  key: 'clearDelayTimer',
                  value: function () {
                    this.delayTimer &&
                      (clearTimeout(this.delayTimer), (this.delayTimer = null));
                  },
                },
                {
                  key: 'clearOutsideHandler',
                  value: function () {
                    this.clickOutsideHandler &&
                      (this.clickOutsideHandler.remove(),
                      (this.clickOutsideHandler = null)),
                      this.contextMenuOutsideHandler1 &&
                        (this.contextMenuOutsideHandler1.remove(),
                        (this.contextMenuOutsideHandler1 = null)),
                      this.contextMenuOutsideHandler2 &&
                        (this.contextMenuOutsideHandler2.remove(),
                        (this.contextMenuOutsideHandler2 = null)),
                      this.touchOutsideHandler &&
                        (this.touchOutsideHandler.remove(),
                        (this.touchOutsideHandler = null));
                  },
                },
                {
                  key: 'createTwoChains',
                  value: function (e) {
                    var t = this.props.children.props,
                      n = this.props;
                    return t[e] && n[e] ? this['fire'.concat(e)] : t[e] || n[e];
                  },
                },
                {
                  key: 'isClickToShow',
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.showAction;
                    return (
                      -1 !== t.indexOf('click') || -1 !== n.indexOf('click')
                    );
                  },
                },
                {
                  key: 'isContextMenuOnly',
                  value: function () {
                    var e = this.props.action;
                    return (
                      'contextMenu' === e ||
                      (1 === e.length && 'contextMenu' === e[0])
                    );
                  },
                },
                {
                  key: 'isContextMenuToShow',
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.showAction;
                    return (
                      -1 !== t.indexOf('contextMenu') ||
                      -1 !== n.indexOf('contextMenu')
                    );
                  },
                },
                {
                  key: 'isClickToHide',
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.hideAction;
                    return (
                      -1 !== t.indexOf('click') || -1 !== n.indexOf('click')
                    );
                  },
                },
                {
                  key: 'isMouseEnterToShow',
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.showAction;
                    return (
                      -1 !== t.indexOf('hover') ||
                      -1 !== n.indexOf('mouseEnter')
                    );
                  },
                },
                {
                  key: 'isMouseLeaveToHide',
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.hideAction;
                    return (
                      -1 !== t.indexOf('hover') ||
                      -1 !== n.indexOf('mouseLeave')
                    );
                  },
                },
                {
                  key: 'isFocusToShow',
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.showAction;
                    return (
                      -1 !== t.indexOf('focus') || -1 !== n.indexOf('focus')
                    );
                  },
                },
                {
                  key: 'isBlurToHide',
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.hideAction;
                    return (
                      -1 !== t.indexOf('focus') || -1 !== n.indexOf('blur')
                    );
                  },
                },
                {
                  key: 'forcePopupAlign',
                  value: function () {
                    var e;
                    this.state.popupVisible &&
                      (null === (e = this.popupRef.current) ||
                        void 0 === e ||
                        e.forceAlign());
                  },
                },
                {
                  key: 'fireEvents',
                  value: function (e, t) {
                    var n = this.props.children.props[e];
                    n && n(t);
                    var o = this.props[e];
                    o && o(t);
                  },
                },
                {
                  key: 'close',
                  value: function () {
                    this.setPopupVisible(!1);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var t = this.state.popupVisible,
                      n = this.props,
                      r = n.children,
                      i = n.forceRender,
                      a = n.alignPoint,
                      u = n.className,
                      c = n.autoDestroy,
                      l = f.Children.only(r),
                      s = { key: 'trigger' };
                    this.isContextMenuToShow()
                      ? (s.onContextMenu = this.onContextMenu)
                      : (s.onContextMenu =
                          this.createTwoChains('onContextMenu')),
                      this.isClickToHide() || this.isClickToShow()
                        ? ((s.onClick = this.onClick),
                          (s.onMouseDown = this.onMouseDown),
                          (s.onTouchStart = this.onTouchStart))
                        : ((s.onClick = this.createTwoChains('onClick')),
                          (s.onMouseDown = this.createTwoChains('onMouseDown')),
                          (s.onTouchStart =
                            this.createTwoChains('onTouchStart'))),
                      this.isMouseEnterToShow()
                        ? ((s.onMouseEnter = this.onMouseEnter),
                          a && (s.onMouseMove = this.onMouseMove))
                        : (s.onMouseEnter =
                            this.createTwoChains('onMouseEnter')),
                      this.isMouseLeaveToHide()
                        ? (s.onMouseLeave = this.onMouseLeave)
                        : (s.onMouseLeave =
                            this.createTwoChains('onMouseLeave')),
                      this.isFocusToShow() || this.isBlurToHide()
                        ? ((s.onFocus = this.onFocus), (s.onBlur = this.onBlur))
                        : ((s.onFocus = this.createTwoChains('onFocus')),
                          (s.onBlur = this.createTwoChains('onBlur')));
                    var d = E()(l && l.props && l.props.className, u);
                    d && (s.className = d);
                    var p = (0, o.Z)({}, s);
                    (0, h.Yr)(l) && (p.ref = (0, h.sQ)(this.triggerRef, l.ref));
                    var v,
                      m = f.cloneElement(l, p);
                    return (
                      (t || this.popupRef.current || i) &&
                        (v = f.createElement(
                          e,
                          {
                            key: 'portal',
                            getContainer: this.getContainer,
                            didUpdate: this.handlePortalUpdate,
                          },
                          this.getComponent(),
                        )),
                      !t && c && (v = null),
                      f.createElement(
                        Tt.Provider,
                        { value: this.triggerContextValue },
                        m,
                        v,
                      )
                    );
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    var n = e.popupVisible,
                      o = {};
                    return (
                      void 0 !== n &&
                        t.popupVisible !== n &&
                        ((o.popupVisible = n),
                        (o.prevPopupVisible = t.popupVisible)),
                      o
                    );
                  },
                },
              ],
            ),
            y
          );
        })(f.Component);
        return (
          (0, s.Z)(t, 'contextType', Tt),
          (0, s.Z)(t, 'defaultProps', {
            prefixCls: 'rc-trigger-popup',
            getPopupClassNameFromAlign: kt,
            getDocument: Rt,
            onPopupVisibleChange: St,
            afterPopupVisibleChange: St,
            onPopupAlign: St,
            popupClassName: '',
            mouseEnterDelay: 0,
            mouseLeaveDelay: 0.1,
            focusDelay: 0,
            blurDelay: 0.15,
            popupStyle: {},
            destroyPopupOnHide: !1,
            popupAlign: {},
            defaultPopupVisible: !1,
            mask: !1,
            maskClosable: !0,
            action: [],
            showAction: [],
            hideAction: [],
            autoDestroy: !1,
          }),
          t
        );
      }
      var At = It(w);
    },
    48198: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var o = n(73935);
      function r(e, t, n, r) {
        var i = o.unstable_batchedUpdates
          ? function (e) {
              o.unstable_batchedUpdates(n, e);
            }
          : n;
        return (
          e.addEventListener && e.addEventListener(t, i, r),
          {
            remove: function () {
              e.removeEventListener && e.removeEventListener(t, i, r);
            },
          }
        );
      }
    },
    63616: function (e, t, n) {
      'use strict';
      n.d(t, {
        tS: function () {
          return a;
        },
      });
      var o = n(85061),
        r = n(26917);
      function i(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if ((0, r.Z)(e)) {
          var n = e.nodeName.toLowerCase(),
            o =
              ['input', 'select', 'textarea', 'button'].includes(n) ||
              e.isContentEditable ||
              ('a' === n && !!e.getAttribute('href')),
            i = e.getAttribute('tabindex'),
            a = Number(i),
            u = null;
          return (
            i && !Number.isNaN(a) ? (u = a) : o && null === u && (u = 0),
            o && e.disabled && (u = null),
            null !== u && (u >= 0 || (t && u < 0))
          );
        }
        return !1;
      }
      function a(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = (0, o.Z)(e.querySelectorAll('*')).filter(function (e) {
            return i(e, t);
          });
        return i(e, t) && n.unshift(e), n;
      }
    },
    26917: function (e, t) {
      'use strict';
      t['Z'] = function (e) {
        if (!e) return !1;
        if (e instanceof HTMLElement && e.offsetParent) return !0;
        if (e instanceof SVGGraphicsElement && e.getBBox) {
          var t = e.getBBox(),
            n = t.width,
            o = t.height;
          if (n || o) return !0;
        }
        if (e instanceof HTMLElement && e.getBoundingClientRect) {
          var r = e.getBoundingClientRect(),
            i = r.width,
            a = r.height;
          if (i || a) return !0;
        }
        return !1;
      };
    },
    90826: function (e, t) {
      'use strict';
      var n = {
        MAC_ENTER: 3,
        BACKSPACE: 8,
        TAB: 9,
        NUM_CENTER: 12,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAUSE: 19,
        CAPS_LOCK: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        PRINT_SCREEN: 44,
        INSERT: 45,
        DELETE: 46,
        ZERO: 48,
        ONE: 49,
        TWO: 50,
        THREE: 51,
        FOUR: 52,
        FIVE: 53,
        SIX: 54,
        SEVEN: 55,
        EIGHT: 56,
        NINE: 57,
        QUESTION_MARK: 63,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        META: 91,
        WIN_KEY_RIGHT: 92,
        CONTEXT_MENU: 93,
        NUM_ZERO: 96,
        NUM_ONE: 97,
        NUM_TWO: 98,
        NUM_THREE: 99,
        NUM_FOUR: 100,
        NUM_FIVE: 101,
        NUM_SIX: 102,
        NUM_SEVEN: 103,
        NUM_EIGHT: 104,
        NUM_NINE: 105,
        NUM_MULTIPLY: 106,
        NUM_PLUS: 107,
        NUM_MINUS: 109,
        NUM_PERIOD: 110,
        NUM_DIVISION: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        NUMLOCK: 144,
        SEMICOLON: 186,
        DASH: 189,
        EQUALS: 187,
        COMMA: 188,
        PERIOD: 190,
        SLASH: 191,
        APOSTROPHE: 192,
        SINGLE_QUOTE: 222,
        OPEN_SQUARE_BRACKET: 219,
        BACKSLASH: 220,
        CLOSE_SQUARE_BRACKET: 221,
        WIN_KEY: 224,
        MAC_FF_META: 224,
        WIN_IME: 229,
        isTextModifyingKeyEvent: function (e) {
          var t = e.keyCode;
          if (
            (e.altKey && !e.ctrlKey) ||
            e.metaKey ||
            (t >= n.F1 && t <= n.F12)
          )
            return !1;
          switch (t) {
            case n.ALT:
            case n.CAPS_LOCK:
            case n.CONTEXT_MENU:
            case n.CTRL:
            case n.DOWN:
            case n.END:
            case n.ESC:
            case n.HOME:
            case n.INSERT:
            case n.LEFT:
            case n.MAC_FF_META:
            case n.META:
            case n.NUMLOCK:
            case n.NUM_CENTER:
            case n.PAGE_DOWN:
            case n.PAGE_UP:
            case n.PAUSE:
            case n.PRINT_SCREEN:
            case n.RIGHT:
            case n.SHIFT:
            case n.UP:
            case n.WIN_KEY:
            case n.WIN_KEY_RIGHT:
              return !1;
            default:
              return !0;
          }
        },
        isCharacterKey: function (e) {
          if (e >= n.ZERO && e <= n.NINE) return !0;
          if (e >= n.NUM_ZERO && e <= n.NUM_MULTIPLY) return !0;
          if (e >= n.A && e <= n.Z) return !0;
          if (-1 !== window.navigator.userAgent.indexOf('WebKit') && 0 === e)
            return !0;
          switch (e) {
            case n.SPACE:
            case n.QUESTION_MARK:
            case n.NUM_PLUS:
            case n.NUM_MINUS:
            case n.NUM_PERIOD:
            case n.NUM_DIVISION:
            case n.SEMICOLON:
            case n.DASH:
            case n.EQUALS:
            case n.COMMA:
            case n.PERIOD:
            case n.SLASH:
            case n.APOSTROPHE:
            case n.SINGLE_QUOTE:
            case n.OPEN_SQUARE_BRACKET:
            case n.BACKSLASH:
            case n.CLOSE_SQUARE_BRACKET:
              return !0;
            default:
              return !1;
          }
        },
      };
      t['Z'] = n;
    },
    89027: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var o = n(67294);
      function r(e) {
        var t = o.useRef();
        t.current = e;
        var n = o.useCallback(function () {
          for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
            o[r] = arguments[r];
          return null === (e = t.current) || void 0 === e
            ? void 0
            : e.call.apply(e, [t].concat(o));
        }, []);
        return n;
      }
    },
    31234: function (e, t, n) {
      'use strict';
      n.d(t, {
        o: function () {
          return a;
        },
      });
      var o = n(67294),
        r = n(20064),
        i = (0, r.Z)() ? o.useLayoutEffect : o.useEffect;
      t['Z'] = i;
      var a = function (e, t) {
        var n = o.useRef(!0);
        i(function () {
          if (!n.current) return e();
        }, t),
          i(function () {
            return (
              (n.current = !1),
              function () {
                n.current = !0;
              }
            );
          }, []);
      };
    },
    82321: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var o = n(28481),
        r = n(89027),
        i = n(31234),
        a = n(66493);
      function u(e) {
        return void 0 !== e;
      }
      function c(e, t) {
        var n = t || {},
          c = n.defaultValue,
          l = n.value,
          s = n.onChange,
          f = n.postState,
          d = (0, a.Z)(function () {
            return u(l)
              ? l
              : u(c)
              ? 'function' === typeof c
                ? c()
                : c
              : 'function' === typeof e
              ? e()
              : e;
          }),
          p = (0, o.Z)(d, 2),
          v = p[0],
          m = p[1],
          h = void 0 !== l ? l : v,
          g = f ? f(h) : h,
          y = (0, r.Z)(s),
          b = (0, a.Z)([h]),
          w = (0, o.Z)(b, 2),
          Z = w[0],
          E = w[1];
        (0, i.o)(
          function () {
            var e = Z[0];
            v !== e && y(v, e);
          },
          [Z],
        ),
          (0, i.o)(
            function () {
              u(l) || m(l);
            },
            [l],
          );
        var C = (0, r.Z)(function (e, t) {
          m(e, t), E([h], t);
        });
        return [g, C];
      }
    },
    86423: function (e, t, n) {
      'use strict';
      var o = n(90484),
        r = n(32503);
      function i(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = new Set();
        function a(e, t) {
          var u =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1,
            c = i.has(e);
          if (((0, r.ZP)(!c, 'Warning: There may be circular references'), c))
            return !1;
          if (e === t) return !0;
          if (n && u > 1) return !1;
          i.add(e);
          var l = u + 1;
          if (Array.isArray(e)) {
            if (!Array.isArray(t) || e.length !== t.length) return !1;
            for (var s = 0; s < e.length; s++) if (!a(e[s], t[s], l)) return !1;
            return !0;
          }
          if (e && t && 'object' === (0, o.Z)(e) && 'object' === (0, o.Z)(t)) {
            var f = Object.keys(e);
            return (
              f.length === Object.keys(t).length &&
              f.every(function (n) {
                return a(e[n], t[n], l);
              })
            );
          }
          return !1;
        }
        return a(e, t);
      }
      t['Z'] = i;
    },
    44581: function (e, t) {
      'use strict';
      t['Z'] = function () {
        if ('undefined' === typeof navigator || 'undefined' === typeof window)
          return !1;
        var e = navigator.userAgent || navigator.vendor || window.opera;
        return (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
            e,
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
            null === e || void 0 === e ? void 0 : e.substr(0, 4),
          )
        );
      };
    },
    55065: function (e, t, n) {
      'use strict';
      var o = (function () {
          if ('undefined' !== typeof Map) return Map;
          function e(e, t) {
            var n = -1;
            return (
              e.some(function (e, o) {
                return e[0] === t && ((n = o), !0);
              }),
              n
            );
          }
          return (function () {
            function t() {
              this.__entries__ = [];
            }
            return (
              Object.defineProperty(t.prototype, 'size', {
                get: function () {
                  return this.__entries__.length;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (t.prototype.get = function (t) {
                var n = e(this.__entries__, t),
                  o = this.__entries__[n];
                return o && o[1];
              }),
              (t.prototype.set = function (t, n) {
                var o = e(this.__entries__, t);
                ~o
                  ? (this.__entries__[o][1] = n)
                  : this.__entries__.push([t, n]);
              }),
              (t.prototype['delete'] = function (t) {
                var n = this.__entries__,
                  o = e(n, t);
                ~o && n.splice(o, 1);
              }),
              (t.prototype.has = function (t) {
                return !!~e(this.__entries__, t);
              }),
              (t.prototype.clear = function () {
                this.__entries__.splice(0);
              }),
              (t.prototype.forEach = function (e, t) {
                void 0 === t && (t = null);
                for (var n = 0, o = this.__entries__; n < o.length; n++) {
                  var r = o[n];
                  e.call(t, r[1], r[0]);
                }
              }),
              t
            );
          })();
        })(),
        r =
          'undefined' !== typeof window &&
          'undefined' !== typeof document &&
          window.document === document,
        i = (function () {
          return 'undefined' !== typeof n.g && n.g.Math === Math
            ? n.g
            : 'undefined' !== typeof self && self.Math === Math
            ? self
            : 'undefined' !== typeof window && window.Math === Math
            ? window
            : Function('return this')();
        })(),
        a = (function () {
          return 'function' === typeof requestAnimationFrame
            ? requestAnimationFrame.bind(i)
            : function (e) {
                return setTimeout(function () {
                  return e(Date.now());
                }, 1e3 / 60);
              };
        })(),
        u = 2;
      function c(e, t) {
        var n = !1,
          o = !1,
          r = 0;
        function i() {
          n && ((n = !1), e()), o && l();
        }
        function c() {
          a(i);
        }
        function l() {
          var e = Date.now();
          if (n) {
            if (e - r < u) return;
            o = !0;
          } else (n = !0), (o = !1), setTimeout(c, t);
          r = e;
        }
        return l;
      }
      var l = 20,
        s = [
          'top',
          'right',
          'bottom',
          'left',
          'width',
          'height',
          'size',
          'weight',
        ],
        f = 'undefined' !== typeof MutationObserver,
        d = (function () {
          function e() {
            (this.connected_ = !1),
              (this.mutationEventsAdded_ = !1),
              (this.mutationsObserver_ = null),
              (this.observers_ = []),
              (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
              (this.refresh = c(this.refresh.bind(this), l));
          }
          return (
            (e.prototype.addObserver = function (e) {
              ~this.observers_.indexOf(e) || this.observers_.push(e),
                this.connected_ || this.connect_();
            }),
            (e.prototype.removeObserver = function (e) {
              var t = this.observers_,
                n = t.indexOf(e);
              ~n && t.splice(n, 1),
                !t.length && this.connected_ && this.disconnect_();
            }),
            (e.prototype.refresh = function () {
              var e = this.updateObservers_();
              e && this.refresh();
            }),
            (e.prototype.updateObservers_ = function () {
              var e = this.observers_.filter(function (e) {
                return e.gatherActive(), e.hasActive();
              });
              return (
                e.forEach(function (e) {
                  return e.broadcastActive();
                }),
                e.length > 0
              );
            }),
            (e.prototype.connect_ = function () {
              r &&
                !this.connected_ &&
                (document.addEventListener(
                  'transitionend',
                  this.onTransitionEnd_,
                ),
                window.addEventListener('resize', this.refresh),
                f
                  ? ((this.mutationsObserver_ = new MutationObserver(
                      this.refresh,
                    )),
                    this.mutationsObserver_.observe(document, {
                      attributes: !0,
                      childList: !0,
                      characterData: !0,
                      subtree: !0,
                    }))
                  : (document.addEventListener(
                      'DOMSubtreeModified',
                      this.refresh,
                    ),
                    (this.mutationEventsAdded_ = !0)),
                (this.connected_ = !0));
            }),
            (e.prototype.disconnect_ = function () {
              r &&
                this.connected_ &&
                (document.removeEventListener(
                  'transitionend',
                  this.onTransitionEnd_,
                ),
                window.removeEventListener('resize', this.refresh),
                this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                this.mutationEventsAdded_ &&
                  document.removeEventListener(
                    'DOMSubtreeModified',
                    this.refresh,
                  ),
                (this.mutationsObserver_ = null),
                (this.mutationEventsAdded_ = !1),
                (this.connected_ = !1));
            }),
            (e.prototype.onTransitionEnd_ = function (e) {
              var t = e.propertyName,
                n = void 0 === t ? '' : t,
                o = s.some(function (e) {
                  return !!~n.indexOf(e);
                });
              o && this.refresh();
            }),
            (e.getInstance = function () {
              return (
                this.instance_ || (this.instance_ = new e()), this.instance_
              );
            }),
            (e.instance_ = null),
            e
          );
        })(),
        p = function (e, t) {
          for (var n = 0, o = Object.keys(t); n < o.length; n++) {
            var r = o[n];
            Object.defineProperty(e, r, {
              value: t[r],
              enumerable: !1,
              writable: !1,
              configurable: !0,
            });
          }
          return e;
        },
        v = function (e) {
          var t = e && e.ownerDocument && e.ownerDocument.defaultView;
          return t || i;
        },
        m = O(0, 0, 0, 0);
      function h(e) {
        return parseFloat(e) || 0;
      }
      function g(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        return t.reduce(function (t, n) {
          var o = e['border-' + n + '-width'];
          return t + h(o);
        }, 0);
      }
      function y(e) {
        for (
          var t = ['top', 'right', 'bottom', 'left'], n = {}, o = 0, r = t;
          o < r.length;
          o++
        ) {
          var i = r[o],
            a = e['padding-' + i];
          n[i] = h(a);
        }
        return n;
      }
      function b(e) {
        var t = e.getBBox();
        return O(0, 0, t.width, t.height);
      }
      function w(e) {
        var t = e.clientWidth,
          n = e.clientHeight;
        if (!t && !n) return m;
        var o = v(e).getComputedStyle(e),
          r = y(o),
          i = r.left + r.right,
          a = r.top + r.bottom,
          u = h(o.width),
          c = h(o.height);
        if (
          ('border-box' === o.boxSizing &&
            (Math.round(u + i) !== t && (u -= g(o, 'left', 'right') + i),
            Math.round(c + a) !== n && (c -= g(o, 'top', 'bottom') + a)),
          !E(e))
        ) {
          var l = Math.round(u + i) - t,
            s = Math.round(c + a) - n;
          1 !== Math.abs(l) && (u -= l), 1 !== Math.abs(s) && (c -= s);
        }
        return O(r.left, r.top, u, c);
      }
      var Z = (function () {
        return 'undefined' !== typeof SVGGraphicsElement
          ? function (e) {
              return e instanceof v(e).SVGGraphicsElement;
            }
          : function (e) {
              return (
                e instanceof v(e).SVGElement && 'function' === typeof e.getBBox
              );
            };
      })();
      function E(e) {
        return e === v(e).document.documentElement;
      }
      function C(e) {
        return r ? (Z(e) ? b(e) : w(e)) : m;
      }
      function x(e) {
        var t = e.x,
          n = e.y,
          o = e.width,
          r = e.height,
          i = 'undefined' !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
          a = Object.create(i.prototype);
        return (
          p(a, {
            x: t,
            y: n,
            width: o,
            height: r,
            top: n,
            right: t + o,
            bottom: r + n,
            left: t,
          }),
          a
        );
      }
      function O(e, t, n, o) {
        return { x: e, y: t, width: n, height: o };
      }
      var M = (function () {
          function e(e) {
            (this.broadcastWidth = 0),
              (this.broadcastHeight = 0),
              (this.contentRect_ = O(0, 0, 0, 0)),
              (this.target = e);
          }
          return (
            (e.prototype.isActive = function () {
              var e = C(this.target);
              return (
                (this.contentRect_ = e),
                e.width !== this.broadcastWidth ||
                  e.height !== this.broadcastHeight
              );
            }),
            (e.prototype.broadcastRect = function () {
              var e = this.contentRect_;
              return (
                (this.broadcastWidth = e.width),
                (this.broadcastHeight = e.height),
                e
              );
            }),
            e
          );
        })(),
        N = (function () {
          function e(e, t) {
            var n = x(t);
            p(this, { target: e, contentRect: n });
          }
          return e;
        })(),
        P = (function () {
          function e(e, t, n) {
            if (
              ((this.activeObservations_ = []),
              (this.observations_ = new o()),
              'function' !== typeof e)
            )
              throw new TypeError(
                'The callback provided as parameter 1 is not a function.',
              );
            (this.callback_ = e),
              (this.controller_ = t),
              (this.callbackCtx_ = n);
          }
          return (
            (e.prototype.observe = function (e) {
              if (!arguments.length)
                throw new TypeError('1 argument required, but only 0 present.');
              if ('undefined' !== typeof Element && Element instanceof Object) {
                if (!(e instanceof v(e).Element))
                  throw new TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) ||
                  (t.set(e, new M(e)),
                  this.controller_.addObserver(this),
                  this.controller_.refresh());
              }
            }),
            (e.prototype.unobserve = function (e) {
              if (!arguments.length)
                throw new TypeError('1 argument required, but only 0 present.');
              if ('undefined' !== typeof Element && Element instanceof Object) {
                if (!(e instanceof v(e).Element))
                  throw new TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) &&
                  (t['delete'](e),
                  t.size || this.controller_.removeObserver(this));
              }
            }),
            (e.prototype.disconnect = function () {
              this.clearActive(),
                this.observations_.clear(),
                this.controller_.removeObserver(this);
            }),
            (e.prototype.gatherActive = function () {
              var e = this;
              this.clearActive(),
                this.observations_.forEach(function (t) {
                  t.isActive() && e.activeObservations_.push(t);
                });
            }),
            (e.prototype.broadcastActive = function () {
              if (this.hasActive()) {
                var e = this.callbackCtx_,
                  t = this.activeObservations_.map(function (e) {
                    return new N(e.target, e.broadcastRect());
                  });
                this.callback_.call(e, t, e), this.clearActive();
              }
            }),
            (e.prototype.clearActive = function () {
              this.activeObservations_.splice(0);
            }),
            (e.prototype.hasActive = function () {
              return this.activeObservations_.length > 0;
            }),
            e
          );
        })(),
        T = 'undefined' !== typeof WeakMap ? new WeakMap() : new o(),
        S = (function () {
          function e(t) {
            if (!(this instanceof e))
              throw new TypeError('Cannot call a class as a function.');
            if (!arguments.length)
              throw new TypeError('1 argument required, but only 0 present.');
            var n = d.getInstance(),
              o = new P(t, n, this);
            T.set(this, o);
          }
          return e;
        })();
      ['observe', 'unobserve', 'disconnect'].forEach(function (e) {
        S.prototype[e] = function () {
          var t;
          return (t = T.get(this))[e].apply(t, arguments);
        };
      });
      var k = (function () {
        return 'undefined' !== typeof i.ResizeObserver ? i.ResizeObserver : S;
      })();
      t['Z'] = k;
    },
  },
]);
