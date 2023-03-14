(self['webpackChunk'] = self['webpackChunk'] || []).push([
  [579],
  {
    56264: function () {},
    53645: function () {},
    12395: function () {},
    70883: function () {},
    52683: function () {},
    81262: function () {},
    53469: function () {},
    41412: function () {},
    59903: function () {},
    31930: function () {},
    25414: function () {},
    58475: function (e, t, n) {
      'use strict';
      n.d(t, {
        ZP: function () {
          return dr;
        },
      });
      n(38663), n(70883);
      var r = n(22122),
        o = n(96156),
        a = n(6610),
        i = n(5991),
        c = n(10379),
        l = n(54070),
        s = n(90484),
        u = n(35510),
        f = n.n(u),
        d = n(83710),
        m = n(26670),
        v = n(67294),
        p = n(9054),
        h = n(85061),
        g = n(90468);
      function y(e) {
        var t,
          n = function (n) {
            return function () {
              (t = null), e.apply(void 0, (0, h.Z)(n));
            };
          },
          r = function () {
            if (null == t) {
              for (
                var e = arguments.length, r = new Array(e), o = 0;
                o < e;
                o++
              )
                r[o] = arguments[o];
              t = (0, g.Z)(n(r));
            }
          };
        return (
          (r.cancel = function () {
            g.Z.cancel(t), (t = null);
          }),
          r
        );
      }
      function b() {
        return function (e, t, n) {
          var r = n.value,
            o = !1;
          return {
            configurable: !0,
            get: function () {
              if (o || this === e.prototype || this.hasOwnProperty(t)) return r;
              var n = y(r.bind(this));
              return (
                (o = !0),
                Object.defineProperty(this, t, {
                  value: n,
                  configurable: !0,
                  writable: !0,
                }),
                (o = !1),
                n
              );
            },
          };
        };
      }
      var C = n(48198);
      function Z(e) {
        return e !== window
          ? e.getBoundingClientRect()
          : { top: 0, bottom: window.innerHeight };
      }
      function x(e, t, n) {
        if (void 0 !== n && t.top > e.top - n) return n + t.top;
      }
      function E(e, t, n) {
        if (void 0 !== n && t.bottom < e.bottom + n) {
          var r = window.innerHeight - t.bottom;
          return n + r;
        }
      }
      var w = [
          'resize',
          'scroll',
          'touchstart',
          'touchmove',
          'touchend',
          'pageshow',
          'load',
        ],
        N = [];
      function k(e, t) {
        if (e) {
          var n = N.find(function (t) {
            return t.target === e;
          });
          n
            ? n.affixList.push(t)
            : ((n = { target: e, affixList: [t], eventHandlers: {} }),
              N.push(n),
              w.forEach(function (t) {
                n.eventHandlers[t] = (0, C.Z)(e, t, function () {
                  n.affixList.forEach(function (e) {
                    e.lazyUpdatePosition();
                  });
                });
              }));
        }
      }
      function P(e) {
        var t = N.find(function (t) {
          var n = t.affixList.some(function (t) {
            return t === e;
          });
          return (
            n &&
              (t.affixList = t.affixList.filter(function (t) {
                return t !== e;
              })),
            n
          );
        });
        t &&
          0 === t.affixList.length &&
          ((N = N.filter(function (e) {
            return e !== t;
          })),
          w.forEach(function (e) {
            var n = t.eventHandlers[e];
            n && n.remove && n.remove();
          }));
      }
      var O,
        S = function (e, t, n, r) {
          var o,
            a = arguments.length,
            i =
              a < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, n))
                : r;
          if (
            'object' ===
              ('undefined' === typeof Reflect
                ? 'undefined'
                : (0, s.Z)(Reflect)) &&
            'function' === typeof Reflect.decorate
          )
            i = Reflect.decorate(e, t, n, r);
          else
            for (var c = e.length - 1; c >= 0; c--)
              (o = e[c]) &&
                (i = (a < 3 ? o(i) : a > 3 ? o(t, n, i) : o(t, n)) || i);
          return a > 3 && i && Object.defineProperty(t, n, i), i;
        };
      function T() {
        return 'undefined' !== typeof window ? window : null;
      }
      (function (e) {
        (e[(e['None'] = 0)] = 'None'), (e[(e['Prepare'] = 1)] = 'Prepare');
      })(O || (O = {}));
      var R = (function (e) {
        (0, c.Z)(n, e);
        var t = (0, l.Z)(n);
        function n() {
          var e;
          return (
            (0, a.Z)(this, n),
            (e = t.apply(this, arguments)),
            (e.state = { status: O.None, lastAffix: !1, prevTarget: null }),
            (e.getOffsetTop = function () {
              var t = e.props,
                n = t.offsetBottom,
                r = t.offsetTop;
              return void 0 === n && void 0 === r ? 0 : r;
            }),
            (e.getOffsetBottom = function () {
              return e.props.offsetBottom;
            }),
            (e.savePlaceholderNode = function (t) {
              e.placeholderNode = t;
            }),
            (e.saveFixedNode = function (t) {
              e.fixedNode = t;
            }),
            (e.measure = function () {
              var t = e.state,
                n = t.status,
                r = t.lastAffix,
                o = e.props.onChange,
                a = e.getTargetFunc();
              if (n === O.Prepare && e.fixedNode && e.placeholderNode && a) {
                var i = e.getOffsetTop(),
                  c = e.getOffsetBottom(),
                  l = a();
                if (l) {
                  var s = { status: O.None },
                    u = Z(l),
                    f = Z(e.placeholderNode),
                    d = x(f, u, i),
                    m = E(f, u, c);
                  (0 === f.top &&
                    0 === f.left &&
                    0 === f.width &&
                    0 === f.height) ||
                    (void 0 !== d
                      ? ((s.affixStyle = {
                          position: 'fixed',
                          top: d,
                          width: f.width,
                          height: f.height,
                        }),
                        (s.placeholderStyle = {
                          width: f.width,
                          height: f.height,
                        }))
                      : void 0 !== m &&
                        ((s.affixStyle = {
                          position: 'fixed',
                          bottom: m,
                          width: f.width,
                          height: f.height,
                        }),
                        (s.placeholderStyle = {
                          width: f.width,
                          height: f.height,
                        })),
                    (s.lastAffix = !!s.affixStyle),
                    o && r !== s.lastAffix && o(s.lastAffix),
                    e.setState(s));
                }
              }
            }),
            (e.prepareMeasure = function () {
              e.setState({
                status: O.Prepare,
                affixStyle: void 0,
                placeholderStyle: void 0,
              });
            }),
            e
          );
        }
        return (
          (0, i.Z)(n, [
            {
              key: 'getTargetFunc',
              value: function () {
                var e = this.context.getTargetContainer,
                  t = this.props.target;
                return void 0 !== t ? t : null !== e && void 0 !== e ? e : T;
              },
            },
            {
              key: 'componentDidMount',
              value: function () {
                var e = this,
                  t = this.getTargetFunc();
                t &&
                  (this.timeout = setTimeout(function () {
                    k(t(), e), e.updatePosition();
                  }));
              },
            },
            {
              key: 'componentDidUpdate',
              value: function (e) {
                var t = this.state.prevTarget,
                  n = this.getTargetFunc(),
                  r = (null === n || void 0 === n ? void 0 : n()) || null;
                t !== r &&
                  (P(this),
                  r && (k(r, this), this.updatePosition()),
                  this.setState({ prevTarget: r })),
                  (e.offsetTop === this.props.offsetTop &&
                    e.offsetBottom === this.props.offsetBottom) ||
                    this.updatePosition(),
                  this.measure();
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                clearTimeout(this.timeout),
                  P(this),
                  this.updatePosition.cancel(),
                  this.lazyUpdatePosition.cancel();
              },
            },
            {
              key: 'updatePosition',
              value: function () {
                this.prepareMeasure();
              },
            },
            {
              key: 'lazyUpdatePosition',
              value: function () {
                var e = this.getTargetFunc(),
                  t = this.state.affixStyle;
                if (e && t) {
                  var n = this.getOffsetTop(),
                    r = this.getOffsetBottom(),
                    o = e();
                  if (o && this.placeholderNode) {
                    var a = Z(o),
                      i = Z(this.placeholderNode),
                      c = x(i, a, n),
                      l = E(i, a, r);
                    if (
                      (void 0 !== c && t.top === c) ||
                      (void 0 !== l && t.bottom === l)
                    )
                      return;
                  }
                }
                this.prepareMeasure();
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = this.state,
                  n = t.affixStyle,
                  a = t.placeholderStyle,
                  i = this.props,
                  c = i.affixPrefixCls,
                  l = i.children,
                  s = f()((0, o.Z)({}, c, !!n)),
                  u = (0, m.Z)(this.props, [
                    'prefixCls',
                    'offsetTop',
                    'offsetBottom',
                    'target',
                    'onChange',
                    'affixPrefixCls',
                  ]);
                return v.createElement(
                  d.Z,
                  {
                    onResize: function () {
                      e.updatePosition();
                    },
                  },
                  v.createElement(
                    'div',
                    (0, r.Z)({}, u, { ref: this.savePlaceholderNode }),
                    n &&
                      v.createElement('div', {
                        style: a,
                        'aria-hidden': 'true',
                      }),
                    v.createElement(
                      'div',
                      { className: s, ref: this.saveFixedNode, style: n },
                      v.createElement(
                        d.Z,
                        {
                          onResize: function () {
                            e.updatePosition();
                          },
                        },
                        l,
                      ),
                    ),
                  ),
                );
              },
            },
          ]),
          n
        );
      })(v.Component);
      (R.contextType = p.E_),
        S([b()], R.prototype, 'updatePosition', null),
        S([b()], R.prototype, 'lazyUpdatePosition', null);
      var j = v.forwardRef(function (e, t) {
        var n = e.prefixCls,
          o = v.useContext(p.E_),
          a = o.getPrefixCls,
          i = a('affix', n),
          c = (0, r.Z)((0, r.Z)({}, e), { affixPrefixCls: i });
        return v.createElement(R, (0, r.Z)({}, c, { ref: t }));
      });
      var M = j,
        I = (n(35635), n(63224)),
        L =
          (n(59903),
          n(52683),
          n(31930),
          n(81262),
          n(19597),
          n(37482),
          n(25324),
          n(28481)),
        z = n(28991),
        A = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z',
                },
              },
            ],
          },
          name: 'arrow-left',
          theme: 'outlined',
        },
        D = A,
        B = n(27029),
        H = function (e, t) {
          return v.createElement(
            B.Z,
            (0, z.Z)((0, z.Z)({}, e), {}, { ref: t, icon: D }),
          );
        };
      H.displayName = 'ArrowLeftOutlined';
      var F = v.forwardRef(H),
        V = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z',
                },
              },
            ],
          },
          name: 'arrow-right',
          theme: 'outlined',
        },
        _ = V,
        W = function (e, t) {
          return v.createElement(
            B.Z,
            (0, z.Z)((0, z.Z)({}, e), {}, { ref: t, icon: _ }),
          );
        };
      W.displayName = 'ArrowRightOutlined';
      var U = v.forwardRef(W),
        K = n(66493),
        G = n(78703);
      function Y() {
        var e = v.useReducer(function (e) {
            return e + 1;
          }, 0),
          t = (0, L.Z)(e, 2),
          n = t[1];
        return n;
      }
      var X = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        q = {
          xs: '(max-width: 575px)',
          sm: '(min-width: 576px)',
          md: '(min-width: 768px)',
          lg: '(min-width: 992px)',
          xl: '(min-width: 1200px)',
          xxl: '(min-width: 1600px)',
        },
        J = new Map(),
        Q = -1,
        $ = {},
        ee = {
          matchHandlers: {},
          dispatch: function (e) {
            return (
              ($ = e),
              J.forEach(function (e) {
                return e($);
              }),
              J.size >= 1
            );
          },
          subscribe: function (e) {
            return J.size || this.register(), (Q += 1), J.set(Q, e), e($), Q;
          },
          unsubscribe: function (e) {
            J['delete'](e), J.size || this.unregister();
          },
          unregister: function () {
            var e = this;
            Object.keys(q).forEach(function (t) {
              var n = q[t],
                r = e.matchHandlers[n];
              null === r ||
                void 0 === r ||
                r.mql.removeListener(
                  null === r || void 0 === r ? void 0 : r.listener,
                );
            }),
              J.clear();
          },
          register: function () {
            var e = this;
            Object.keys(q).forEach(function (t) {
              var n = q[t],
                a = function (n) {
                  var a = n.matches;
                  e.dispatch((0, r.Z)((0, r.Z)({}, $), (0, o.Z)({}, t, a)));
                },
                i = window.matchMedia(n);
              i.addListener(a),
                (e.matchHandlers[n] = { mql: i, listener: a }),
                a(i);
            });
          },
        },
        te = ee;
      function ne() {
        var e =
            !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          t = (0, v.useRef)({}),
          n = Y();
        return (
          (0, v.useEffect)(function () {
            var r = te.subscribe(function (r) {
              (t.current = r), e && n();
            });
            return function () {
              return te.unsubscribe(r);
            };
          }, []),
          t.current
        );
      }
      var re = ne,
        oe = v.createContext('default'),
        ae = function (e) {
          var t = e.children,
            n = e.size;
          return v.createElement(oe.Consumer, null, function (e) {
            return v.createElement(oe.Provider, { value: n || e }, t);
          });
        },
        ie = oe,
        ce = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        },
        le = function (e, t) {
          var n,
            a,
            i = v.useContext(ie),
            c = v.useState(1),
            l = (0, L.Z)(c, 2),
            u = l[0],
            m = l[1],
            h = v.useState(!1),
            g = (0, L.Z)(h, 2),
            y = g[0],
            b = g[1],
            C = v.useState(!0),
            Z = (0, L.Z)(C, 2),
            x = Z[0],
            E = Z[1],
            w = v.useRef(null),
            N = v.useRef(null),
            k = (0, G.sQ)(t, w),
            P = v.useContext(p.E_),
            O = P.getPrefixCls,
            S = function () {
              if (N.current && w.current) {
                var t = N.current.offsetWidth,
                  n = w.current.offsetWidth;
                if (0 !== t && 0 !== n) {
                  var r = e.gap,
                    o = void 0 === r ? 4 : r;
                  2 * o < n && m(n - 2 * o < t ? (n - 2 * o) / t : 1);
                }
              }
            };
          v.useEffect(function () {
            b(!0);
          }, []),
            v.useEffect(
              function () {
                E(!0), m(1);
              },
              [e.src],
            ),
            v.useEffect(
              function () {
                S();
              },
              [e.gap],
            );
          var T,
            R = function () {
              var t = e.onError,
                n = t ? t() : void 0;
              !1 !== n && E(!1);
            },
            j = e.prefixCls,
            M = e.shape,
            I = void 0 === M ? 'circle' : M,
            z = e.size,
            A = void 0 === z ? 'default' : z,
            D = e.src,
            B = e.srcSet,
            H = e.icon,
            F = e.className,
            V = e.alt,
            _ = e.draggable,
            W = e.children,
            U = e.crossOrigin,
            K = ce(e, [
              'prefixCls',
              'shape',
              'size',
              'src',
              'srcSet',
              'icon',
              'className',
              'alt',
              'draggable',
              'children',
              'crossOrigin',
            ]),
            Y = 'default' === A ? i : A,
            q = Object.keys(('object' === (0, s.Z)(Y) && Y) || {}).some(
              function (e) {
                return ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].includes(e);
              },
            ),
            J = re(q),
            Q = v.useMemo(
              function () {
                if ('object' !== (0, s.Z)(Y)) return {};
                var e = X.find(function (e) {
                    return J[e];
                  }),
                  t = Y[e];
                return t
                  ? {
                      width: t,
                      height: t,
                      lineHeight: ''.concat(t, 'px'),
                      fontSize: H ? t / 2 : 18,
                    }
                  : {};
              },
              [J, Y],
            ),
            $ = O('avatar', j),
            ee = f()(
              ((n = {}),
              (0, o.Z)(n, ''.concat($, '-lg'), 'large' === Y),
              (0, o.Z)(n, ''.concat($, '-sm'), 'small' === Y),
              n),
            ),
            te = v.isValidElement(D),
            ne = f()(
              $,
              ee,
              ((a = {}),
              (0, o.Z)(a, ''.concat($, '-').concat(I), !!I),
              (0, o.Z)(a, ''.concat($, '-image'), te || (D && x)),
              (0, o.Z)(a, ''.concat($, '-icon'), !!H),
              a),
              F,
            ),
            oe =
              'number' === typeof Y
                ? {
                    width: Y,
                    height: Y,
                    lineHeight: ''.concat(Y, 'px'),
                    fontSize: H ? Y / 2 : 18,
                  }
                : {};
          if ('string' === typeof D && x)
            T = v.createElement('img', {
              src: D,
              draggable: _,
              srcSet: B,
              onError: R,
              alt: V,
              crossOrigin: U,
            });
          else if (te) T = D;
          else if (H) T = H;
          else if (y || 1 !== u) {
            var ae = 'scale('.concat(u, ') translateX(-50%)'),
              le = { msTransform: ae, WebkitTransform: ae, transform: ae },
              se =
                'number' === typeof Y ? { lineHeight: ''.concat(Y, 'px') } : {};
            T = v.createElement(
              d.Z,
              { onResize: S },
              v.createElement(
                'span',
                {
                  className: ''.concat($, '-string'),
                  ref: N,
                  style: (0, r.Z)((0, r.Z)({}, se), le),
                },
                W,
              ),
            );
          } else
            T = v.createElement(
              'span',
              {
                className: ''.concat($, '-string'),
                style: { opacity: 0 },
                ref: N,
              },
              W,
            );
          return (
            delete K.onError,
            delete K.gap,
            v.createElement(
              'span',
              (0, r.Z)({}, K, {
                style: (0, r.Z)((0, r.Z)((0, r.Z)({}, oe), Q), K.style),
                className: ne,
                ref: k,
              }),
              T,
            )
          );
        },
        se = v.forwardRef(le);
      var ue = se,
        fe = n(10048),
        de = n(26636),
        me = function (e) {
          return e ? ('function' === typeof e ? e() : e) : null;
        },
        ve = n(31064),
        pe = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        },
        he = function (e) {
          var t = e.title,
            n = e.content,
            r = e.prefixCls;
          return t || n
            ? v.createElement(
                v.Fragment,
                null,
                t &&
                  v.createElement(
                    'div',
                    { className: ''.concat(r, '-title') },
                    me(t),
                  ),
                v.createElement(
                  'div',
                  { className: ''.concat(r, '-inner-content') },
                  me(n),
                ),
              )
            : null;
        },
        ge = v.forwardRef(function (e, t) {
          var n = e.prefixCls,
            o = e.title,
            a = e.content,
            i = e._overlay,
            c = e.placement,
            l = void 0 === c ? 'top' : c,
            s = e.trigger,
            u = void 0 === s ? 'hover' : s,
            f = e.mouseEnterDelay,
            d = void 0 === f ? 0.1 : f,
            m = e.mouseLeaveDelay,
            h = void 0 === m ? 0.1 : m,
            g = e.overlayStyle,
            y = void 0 === g ? {} : g,
            b = pe(e, [
              'prefixCls',
              'title',
              'content',
              '_overlay',
              'placement',
              'trigger',
              'mouseEnterDelay',
              'mouseLeaveDelay',
              'overlayStyle',
            ]),
            C = v.useContext(p.E_),
            Z = C.getPrefixCls,
            x = Z('popover', n),
            E = Z();
          return v.createElement(
            de.Z,
            (0, r.Z)(
              {
                placement: l,
                trigger: u,
                mouseEnterDelay: d,
                mouseLeaveDelay: h,
                overlayStyle: y,
              },
              b,
              {
                prefixCls: x,
                ref: t,
                overlay:
                  i ||
                  v.createElement(he, { prefixCls: x, title: o, content: a }),
                transitionName: (0, ve.mL)(E, 'zoom-big', b.transitionName),
              },
            ),
          );
        });
      var ye = ge,
        be = n(75447),
        Ce = function (e) {
          var t = v.useContext(p.E_),
            n = t.getPrefixCls,
            r = t.direction,
            a = e.prefixCls,
            i = e.className,
            c = void 0 === i ? '' : i,
            l = e.maxCount,
            s = e.maxStyle,
            u = e.size,
            d = n('avatar-group', a),
            m = f()(d, (0, o.Z)({}, ''.concat(d, '-rtl'), 'rtl' === r), c),
            h = e.children,
            g = e.maxPopoverPlacement,
            y = void 0 === g ? 'top' : g,
            b = e.maxPopoverTrigger,
            C = void 0 === b ? 'hover' : b,
            Z = (0, fe.Z)(h).map(function (e, t) {
              return (0, be.Tm)(e, { key: 'avatar-key-'.concat(t) });
            }),
            x = Z.length;
          if (l && l < x) {
            var E = Z.slice(0, l),
              w = Z.slice(l, x);
            return (
              E.push(
                v.createElement(
                  ye,
                  {
                    key: 'avatar-popover-key',
                    content: w,
                    trigger: C,
                    placement: y,
                    overlayClassName: ''.concat(d, '-popover'),
                  },
                  v.createElement(ue, { style: s }, '+'.concat(x - l)),
                ),
              ),
              v.createElement(
                ae,
                { size: u },
                v.createElement('div', { className: m, style: e.style }, E),
              )
            );
          }
          return v.createElement(
            ae,
            { size: u },
            v.createElement('div', { className: m, style: e.style }, Z),
          );
        },
        Ze = Ce,
        xe = ue;
      xe.Group = Ze;
      var Ee = xe,
        we = n(91522),
        Ne = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z',
                },
              },
            ],
          },
          name: 'down',
          theme: 'outlined',
        },
        ke = Ne,
        Pe = function (e, t) {
          return v.createElement(
            B.Z,
            (0, z.Z)((0, z.Z)({}, e), {}, { ref: t, icon: ke }),
          );
        };
      Pe.displayName = 'DownOutlined';
      var Oe = v.forwardRef(Pe),
        Se = n(8812),
        Te = n(81253),
        Re = n(77814),
        je = { adjustX: 1, adjustY: 1 },
        Me = [0, 0],
        Ie = {
          topLeft: {
            points: ['bl', 'tl'],
            overflow: je,
            offset: [0, -4],
            targetOffset: Me,
          },
          topCenter: {
            points: ['bc', 'tc'],
            overflow: je,
            offset: [0, -4],
            targetOffset: Me,
          },
          topRight: {
            points: ['br', 'tr'],
            overflow: je,
            offset: [0, -4],
            targetOffset: Me,
          },
          bottomLeft: {
            points: ['tl', 'bl'],
            overflow: je,
            offset: [0, 4],
            targetOffset: Me,
          },
          bottomCenter: {
            points: ['tc', 'bc'],
            overflow: je,
            offset: [0, 4],
            targetOffset: Me,
          },
          bottomRight: {
            points: ['tr', 'br'],
            overflow: je,
            offset: [0, 4],
            targetOffset: Me,
          },
        },
        Le = Ie,
        ze = n(90826),
        Ae = n(63616),
        De = ze.Z.ESC,
        Be = ze.Z.TAB;
      function He(e) {
        var t = e.visible,
          n = e.setTriggerVisible,
          r = e.triggerRef,
          o = e.onVisibleChange,
          a = e.autoFocus,
          i = v.useRef(!1),
          c = function () {
            var e, a, i, c;
            t &&
              r.current &&
              (null === (e = r.current) ||
                void 0 === e ||
                null === (a = e.triggerRef) ||
                void 0 === a ||
                null === (i = a.current) ||
                void 0 === i ||
                null === (c = i.focus) ||
                void 0 === c ||
                c.call(i),
              n(!1),
              'function' === typeof o && o(!1));
          },
          l = function () {
            var e,
              t,
              n,
              o,
              a = (0, Ae.tS)(
                null === (e = r.current) ||
                  void 0 === e ||
                  null === (t = e.popupRef) ||
                  void 0 === t ||
                  null === (n = t.current) ||
                  void 0 === n ||
                  null === (o = n.getElement) ||
                  void 0 === o
                  ? void 0
                  : o.call(n),
              ),
              c = a[0];
            return (
              !!(null === c || void 0 === c ? void 0 : c.focus) &&
              (c.focus(), (i.current = !0), !0)
            );
          },
          s = function (e) {
            switch (e.keyCode) {
              case De:
                c();
                break;
              case Be:
                var t = !1;
                i.current || (t = l()), t ? e.preventDefault() : c();
                break;
            }
          };
        v.useEffect(
          function () {
            return t
              ? (window.addEventListener('keydown', s),
                a && (0, g.Z)(l, 3),
                function () {
                  window.removeEventListener('keydown', s), (i.current = !1);
                })
              : function () {
                  i.current = !1;
                };
          },
          [t],
        );
      }
      var Fe = [
        'arrow',
        'prefixCls',
        'transitionName',
        'animation',
        'align',
        'placement',
        'placements',
        'getPopupContainer',
        'showAction',
        'hideAction',
        'overlayClassName',
        'overlayStyle',
        'visible',
        'trigger',
        'autoFocus',
      ];
      function Ve(e, t) {
        var n = e.arrow,
          r = void 0 !== n && n,
          a = e.prefixCls,
          i = void 0 === a ? 'rc-dropdown' : a,
          c = e.transitionName,
          l = e.animation,
          s = e.align,
          u = e.placement,
          d = void 0 === u ? 'bottomLeft' : u,
          m = e.placements,
          p = void 0 === m ? Le : m,
          h = e.getPopupContainer,
          g = e.showAction,
          y = e.hideAction,
          b = e.overlayClassName,
          C = e.overlayStyle,
          Z = e.visible,
          x = e.trigger,
          E = void 0 === x ? ['hover'] : x,
          w = e.autoFocus,
          N = (0, Te.Z)(e, Fe),
          k = v.useState(),
          P = (0, L.Z)(k, 2),
          O = P[0],
          S = P[1],
          T = 'visible' in e ? Z : O,
          R = v.useRef(null);
        v.useImperativeHandle(t, function () {
          return R.current;
        }),
          He({
            visible: T,
            setTriggerVisible: S,
            triggerRef: R,
            onVisibleChange: e.onVisibleChange,
            autoFocus: w,
          });
        var j = function () {
            var t,
              n = e.overlay;
            return (t = 'function' === typeof n ? n() : n), t;
          },
          M = function (t) {
            var n = e.onOverlayClick;
            S(!1), n && n(t);
          },
          I = function (t) {
            var n = e.onVisibleChange;
            S(t), 'function' === typeof n && n(t);
          },
          A = function () {
            var e = j();
            return v.createElement(
              v.Fragment,
              null,
              r &&
                v.createElement('div', { className: ''.concat(i, '-arrow') }),
              e,
            );
          },
          D = function () {
            var t = e.overlay;
            return 'function' === typeof t ? A : A();
          },
          B = function () {
            var t = e.minOverlayWidthMatchTrigger,
              n = e.alignPoint;
            return 'minOverlayWidthMatchTrigger' in e ? t : !n;
          },
          H = function () {
            var t = e.openClassName;
            return void 0 !== t ? t : ''.concat(i, '-open');
          },
          F = function () {
            var t = e.children,
              n = t.props ? t.props : {},
              r = f()(n.className, H());
            return T && t ? v.cloneElement(t, { className: r }) : t;
          },
          V = y;
        return (
          V || -1 === E.indexOf('contextMenu') || (V = ['click']),
          v.createElement(
            Re.Z,
            (0, z.Z)(
              (0, z.Z)({ builtinPlacements: p }, N),
              {},
              {
                prefixCls: i,
                ref: R,
                popupClassName: f()(
                  b,
                  (0, o.Z)({}, ''.concat(i, '-show-arrow'), r),
                ),
                popupStyle: C,
                action: E,
                showAction: g,
                hideAction: V || [],
                popupPlacement: d,
                popupAlign: s,
                popupTransitionName: c,
                popupAnimation: l,
                popupVisible: T,
                stretch: B() ? 'minWidth' : '',
                popup: D(),
                onPopupVisibleChange: I,
                onPopupClick: M,
                getPopupContainer: h,
              },
            ),
            F(),
          )
        );
      }
      var _e = v.forwardRef(Ve),
        We = _e,
        Ue = n(89027),
        Ke = n(82321),
        Ge = n(66948),
        Ye = n(19405),
        Xe = n(4381),
        qe = n(44545),
        Je = n(48429),
        Qe = n(1358),
        $e = n(55835),
        et = function () {
          var e = v.useState(!1),
            t = (0, L.Z)(e, 2),
            n = t[0],
            r = t[1];
          return (
            v.useEffect(function () {
              r((0, $e.fk)());
            }, []),
            n
          );
        };
      function tt(e) {
        var t = e.className,
          n = e.direction,
          a = e.index,
          i = e.marginDirection,
          c = e.children,
          l = e.split,
          s = e.wrap,
          u = v.useContext(rt),
          f = u.horizontalSize,
          d = u.verticalSize,
          m = u.latestIndex,
          p = u.supportFlexGap,
          h = {};
        return (
          p ||
            ('vertical' === n
              ? a < m && (h = { marginBottom: f / (l ? 2 : 1) })
              : (h = (0, r.Z)(
                  (0, r.Z)({}, a < m && (0, o.Z)({}, i, f / (l ? 2 : 1))),
                  s && { paddingBottom: d },
                ))),
          null === c || void 0 === c
            ? null
            : v.createElement(
                v.Fragment,
                null,
                v.createElement('div', { className: t, style: h }, c),
                a < m &&
                  l &&
                  v.createElement(
                    'span',
                    { className: ''.concat(t, '-split'), style: h },
                    l,
                  ),
              )
        );
      }
      var nt = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        },
        rt = v.createContext({
          latestIndex: 0,
          horizontalSize: 0,
          verticalSize: 0,
          supportFlexGap: !1,
        }),
        ot = { small: 8, middle: 16, large: 24 };
      function at(e) {
        return 'string' === typeof e ? ot[e] : e || 0;
      }
      var it = function (e) {
          var t,
            n = v.useContext(p.E_),
            a = n.getPrefixCls,
            i = n.space,
            c = n.direction,
            l = e.size,
            s =
              void 0 === l
                ? (null === i || void 0 === i ? void 0 : i.size) || 'small'
                : l,
            u = e.align,
            d = e.className,
            m = e.children,
            h = e.direction,
            g = void 0 === h ? 'horizontal' : h,
            y = e.prefixCls,
            b = e.split,
            C = e.style,
            Z = e.wrap,
            x = void 0 !== Z && Z,
            E = nt(e, [
              'size',
              'align',
              'className',
              'children',
              'direction',
              'prefixCls',
              'split',
              'style',
              'wrap',
            ]),
            w = et(),
            N = v.useMemo(
              function () {
                return (Array.isArray(s) ? s : [s, s]).map(function (e) {
                  return at(e);
                });
              },
              [s],
            ),
            k = (0, L.Z)(N, 2),
            P = k[0],
            O = k[1],
            S = (0, fe.Z)(m, { keepEmpty: !0 }),
            T = void 0 === u && 'horizontal' === g ? 'center' : u,
            R = a('space', y),
            j = f()(
              R,
              ''.concat(R, '-').concat(g),
              ((t = {}),
              (0, o.Z)(t, ''.concat(R, '-rtl'), 'rtl' === c),
              (0, o.Z)(t, ''.concat(R, '-align-').concat(T), T),
              t),
              d,
            ),
            M = ''.concat(R, '-item'),
            I = 'rtl' === c ? 'marginLeft' : 'marginRight',
            z = 0,
            A = S.map(function (e, t) {
              null !== e && void 0 !== e && (z = t);
              var n = (e && e.key) || ''.concat(M, '-').concat(t);
              return v.createElement(
                tt,
                {
                  className: M,
                  key: n,
                  direction: g,
                  index: t,
                  marginDirection: I,
                  split: b,
                  wrap: x,
                },
                e,
              );
            }),
            D = v.useMemo(
              function () {
                return {
                  horizontalSize: P,
                  verticalSize: O,
                  latestIndex: z,
                  supportFlexGap: w,
                };
              },
              [P, O, z, w],
            );
          if (0 === S.length) return null;
          var B = {};
          return (
            x && ((B.flexWrap = 'wrap'), w || (B.marginBottom = -O)),
            w && ((B.columnGap = P), (B.rowGap = O)),
            v.createElement(
              'div',
              (0, r.Z)(
                { className: j, style: (0, r.Z)((0, r.Z)({}, B), C) },
                E,
              ),
              v.createElement(rt.Provider, { value: D }, A),
            )
          );
        },
        ct = it;
      ct.Compact = Qe.ZP;
      var lt = ct,
        st = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        },
        ut = function (e) {
          var t = v.useContext(p.E_),
            n = t.getPopupContainer,
            o = t.getPrefixCls,
            a = t.direction,
            i = e.prefixCls,
            c = e.type,
            l = void 0 === c ? 'default' : c,
            s = e.danger,
            u = e.disabled,
            d = e.loading,
            m = e.onClick,
            h = e.htmlType,
            g = e.children,
            y = e.className,
            b = e.menu,
            C = e.arrow,
            Z = e.autoFocus,
            x = e.overlay,
            E = e.trigger,
            w = e.align,
            N = e.visible,
            k = e.open,
            P = e.onVisibleChange,
            O = e.onOpenChange,
            S = e.placement,
            T = e.getPopupContainer,
            R = e.href,
            j = e.icon,
            M = void 0 === j ? v.createElement(qe.Z, null) : j,
            I = e.title,
            z = e.buttonsRender,
            A =
              void 0 === z
                ? function (e) {
                    return e;
                  }
                : z,
            D = e.mouseEnterDelay,
            B = e.mouseLeaveDelay,
            H = e.overlayClassName,
            F = e.overlayStyle,
            V = e.destroyPopupOnHide,
            _ = st(e, [
              'prefixCls',
              'type',
              'danger',
              'disabled',
              'loading',
              'onClick',
              'htmlType',
              'children',
              'className',
              'menu',
              'arrow',
              'autoFocus',
              'overlay',
              'trigger',
              'align',
              'visible',
              'open',
              'onVisibleChange',
              'onOpenChange',
              'placement',
              'getPopupContainer',
              'href',
              'icon',
              'title',
              'buttonsRender',
              'mouseEnterDelay',
              'mouseLeaveDelay',
              'overlayClassName',
              'overlayStyle',
              'destroyPopupOnHide',
            ]),
            W = o('dropdown-button', i),
            U = {
              menu: b,
              arrow: C,
              autoFocus: Z,
              align: w,
              disabled: u,
              trigger: u ? [] : E,
              onOpenChange: O || P,
              getPopupContainer: T || n,
              mouseEnterDelay: D,
              mouseLeaveDelay: B,
              overlayClassName: H,
              overlayStyle: F,
              destroyPopupOnHide: V,
            },
            K = (0, Qe.ri)(W, a),
            G = K.compactSize,
            Y = K.compactItemClassnames,
            X = f()(W, Y, y);
          'overlay' in e && (U.overlay = x),
            'open' in e ? (U.open = k) : 'visible' in e && (U.open = N),
            (U.placement =
              'placement' in e
                ? S
                : 'rtl' === a
                ? 'bottomLeft'
                : 'bottomRight');
          var q = v.createElement(
              Je.Z,
              {
                type: l,
                danger: s,
                disabled: u,
                loading: d,
                onClick: m,
                htmlType: h,
                href: R,
                title: I,
              },
              g,
            ),
            J = v.createElement(Je.Z, { type: l, danger: s, icon: M }),
            Q = A([q, J]),
            $ = (0, L.Z)(Q, 2),
            ee = $[0],
            te = $[1];
          return v.createElement(
            lt.Compact,
            (0, r.Z)({ className: X, size: G, block: !0 }, _),
            ee,
            v.createElement(mt, (0, r.Z)({}, U), te),
          );
        };
      ut.__ANT_BUTTON = !0;
      var ft = ut,
        dt =
          ((0, Xe.b)(
            'topLeft',
            'topCenter',
            'topRight',
            'bottomLeft',
            'bottomCenter',
            'bottomRight',
            'top',
            'bottom',
          ),
          function (e) {
            var t = v.useContext(p.E_),
              n = t.getPopupContainer,
              a = t.getPrefixCls,
              i = t.direction;
            var c,
              l = function () {
                var t = a(),
                  n = e.placement,
                  r = void 0 === n ? '' : n,
                  o = e.transitionName;
                return void 0 !== o
                  ? o
                  : r.includes('top')
                  ? ''.concat(t, '-slide-down')
                  : ''.concat(t, '-slide-up');
              },
              u = function () {
                var t = e.placement;
                if (!t) return 'rtl' === i ? 'bottomRight' : 'bottomLeft';
                if (t.includes('Center')) {
                  var n = t.slice(0, t.indexOf('Center'));
                  return n;
                }
                return t;
              },
              d = e.menu,
              m = e.arrow,
              h = e.prefixCls,
              g = e.children,
              y = e.trigger,
              b = e.disabled,
              C = e.dropdownRender,
              Z = e.getPopupContainer,
              x = e.overlayClassName,
              E = e.visible,
              w = e.open,
              N = e.onVisibleChange,
              k = e.onOpenChange,
              P = e.mouseEnterDelay,
              O = void 0 === P ? 0.15 : P,
              S = e.mouseLeaveDelay,
              T = void 0 === S ? 0.1 : S,
              R = e.autoAdjustOverflow,
              j = void 0 === R || R,
              M = a('dropdown', h),
              I = v.Children.only(g),
              z = (0, be.Tm)(I, {
                className: f()(
                  ''.concat(M, '-trigger'),
                  (0, o.Z)({}, ''.concat(M, '-rtl'), 'rtl' === i),
                  I.props.className,
                ),
                disabled: b,
              }),
              A = b ? [] : y;
            A && A.includes('contextMenu') && (c = !0);
            var D = (0, Ke.Z)(!1, { value: void 0 !== w ? w : E }),
              B = (0, L.Z)(D, 2),
              H = B[0],
              F = B[1],
              V = (0, Ue.Z)(function (e) {
                null === N || void 0 === N || N(e),
                  null === k || void 0 === k || k(e),
                  F(e);
              }),
              _ = f()(x, (0, o.Z)({}, ''.concat(M, '-rtl'), 'rtl' === i)),
              W = (0, Ye.Z)({
                arrowPointAtCenter: 'object' === (0, s.Z)(m) && m.pointAtCenter,
                autoAdjustOverflow: j,
              }),
              U = v.useCallback(function () {
                F(!1);
              }, []),
              K = function () {
                var t,
                  n = e.overlay;
                return (
                  (t = (null === d || void 0 === d ? void 0 : d.items)
                    ? v.createElement(we.Z, (0, r.Z)({}, d))
                    : 'function' === typeof n
                    ? n()
                    : n),
                  C && (t = C(t)),
                  (t = v.Children.only(
                    'string' === typeof t
                      ? v.createElement('span', null, t)
                      : t,
                  )),
                  v.createElement(
                    Ge.J,
                    {
                      prefixCls: ''.concat(M, '-menu'),
                      expandIcon: v.createElement(
                        'span',
                        { className: ''.concat(M, '-menu-submenu-arrow') },
                        v.createElement(Se.Z, {
                          className: ''.concat(M, '-menu-submenu-arrow-icon'),
                        }),
                      ),
                      mode: 'vertical',
                      selectable: !1,
                      onClick: U,
                      validator: function (e) {
                        e.mode;
                      },
                    },
                    v.createElement(Qe.BR, null, t),
                  )
                );
              };
            return v.createElement(
              We,
              (0, r.Z)({ alignPoint: c }, e, {
                mouseEnterDelay: O,
                mouseLeaveDelay: T,
                visible: H,
                builtinPlacements: W,
                arrow: !!m,
                overlayClassName: _,
                prefixCls: M,
                getPopupContainer: Z || n,
                transitionName: l(),
                trigger: A,
                overlay: K,
                placement: u(),
                onVisibleChange: V,
              }),
              z,
            );
          });
      dt.Button = ft;
      var mt = dt,
        vt = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        },
        pt = function (e) {
          var t = e.prefixCls,
            n = e.separator,
            o = void 0 === n ? '/' : n,
            a = e.children,
            i = e.menu,
            c = e.overlay,
            l = e.dropdownProps,
            s = vt(e, [
              'prefixCls',
              'separator',
              'children',
              'menu',
              'overlay',
              'dropdownProps',
            ]),
            u = v.useContext(p.E_),
            f = u.getPrefixCls,
            d = f('breadcrumb', t);
          var m,
            h = function (e) {
              return i || c
                ? v.createElement(
                    mt,
                    (0, r.Z)({ menu: i, overlay: c, placement: 'bottom' }, l),
                    v.createElement(
                      'span',
                      { className: ''.concat(d, '-overlay-link') },
                      e,
                      v.createElement(Oe, null),
                    ),
                  )
                : e;
            };
          return (
            (m =
              'href' in s
                ? v.createElement(
                    'a',
                    (0, r.Z)({ className: ''.concat(d, '-link') }, s),
                    a,
                  )
                : v.createElement(
                    'span',
                    (0, r.Z)({ className: ''.concat(d, '-link') }, s),
                    a,
                  )),
            (m = h(m)),
            void 0 !== a && null !== a
              ? v.createElement(
                  'li',
                  null,
                  m,
                  o &&
                    v.createElement(
                      'span',
                      { className: ''.concat(d, '-separator') },
                      o,
                    ),
                )
              : null
          );
        };
      pt.__ANT_BREADCRUMB_ITEM = !0;
      var ht = pt,
        gt = function (e) {
          var t = e.children,
            n = v.useContext(p.E_),
            r = n.getPrefixCls,
            o = r('breadcrumb');
          return v.createElement(
            'span',
            { className: ''.concat(o, '-separator') },
            t || '/',
          );
        };
      gt.__ANT_BREADCRUMB_SEPARATOR = !0;
      var yt = gt,
        bt = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        };
      function Ct(e, t) {
        if (!e.breadcrumbName) return null;
        var n = Object.keys(t).join('|'),
          r = e.breadcrumbName.replace(
            new RegExp(':('.concat(n, ')'), 'g'),
            function (e, n) {
              return t[n] || e;
            },
          );
        return r;
      }
      function Zt(e, t, n, r) {
        var o = n.indexOf(e) === n.length - 1,
          a = Ct(e, t);
        return o
          ? v.createElement('span', null, a)
          : v.createElement('a', { href: '#/'.concat(r.join('/')) }, a);
      }
      var xt = function (e, t) {
          return (
            (e = (e || '').replace(/^\//, '')),
            Object.keys(t).forEach(function (n) {
              e = e.replace(':'.concat(n), t[n]);
            }),
            e
          );
        },
        Et = function (e, t, n) {
          var r = (0, h.Z)(e),
            o = xt(t || '', n);
          return o && r.push(o), r;
        },
        wt = function (e) {
          var t,
            n = e.prefixCls,
            a = e.separator,
            i = void 0 === a ? '/' : a,
            c = e.style,
            l = e.className,
            s = e.routes,
            u = e.children,
            d = e.itemRender,
            m = void 0 === d ? Zt : d,
            h = e.params,
            g = void 0 === h ? {} : h,
            y = bt(e, [
              'prefixCls',
              'separator',
              'style',
              'className',
              'routes',
              'children',
              'itemRender',
              'params',
            ]),
            b = v.useContext(p.E_),
            C = b.getPrefixCls,
            Z = b.direction,
            x = C('breadcrumb', n);
          if (s && s.length > 0) {
            var E = [];
            t = s.map(function (e) {
              var t,
                n = xt(e.path, g);
              n && E.push(n),
                e.children &&
                  e.children.length &&
                  (t = v.createElement(we.Z, {
                    items: e.children.map(function (e) {
                      return {
                        key: e.path || e.breadcrumbName,
                        label: m(e, g, s, Et(E, e.path, g)),
                      };
                    }),
                  }));
              var o = { separator: i };
              return (
                t && (o.overlay = t),
                v.createElement(
                  ht,
                  (0, r.Z)({}, o, { key: n || e.breadcrumbName }),
                  m(e, g, s, E),
                )
              );
            });
          } else
            u &&
              (t = (0, fe.Z)(u).map(function (e, t) {
                return e ? (0, be.Tm)(e, { separator: i, key: t }) : e;
              }));
          var w = f()(x, (0, o.Z)({}, ''.concat(x, '-rtl'), 'rtl' === Z), l);
          return v.createElement(
            'nav',
            (0, r.Z)({ className: w, style: c }, y),
            v.createElement('ol', null, t),
          );
        };
      (wt.Item = ht), (wt.Separator = yt);
      var Nt = wt,
        kt = Nt,
        Pt = n(56701),
        Ot = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        },
        St = {
          border: 0,
          background: 'transparent',
          padding: 0,
          lineHeight: 'inherit',
          display: 'inline-block',
        },
        Tt = v.forwardRef(function (e, t) {
          var n = function (e) {
              var t = e.keyCode;
              t === ze.Z.ENTER && e.preventDefault();
            },
            o = function (t) {
              var n = t.keyCode,
                r = e.onClick;
              n === ze.Z.ENTER && r && r();
            },
            a = e.style,
            i = e.noStyle,
            c = e.disabled,
            l = Ot(e, ['style', 'noStyle', 'disabled']),
            s = {};
          return (
            i || (s = (0, r.Z)({}, St)),
            c && (s.pointerEvents = 'none'),
            (s = (0, r.Z)((0, r.Z)({}, s), a)),
            v.createElement(
              'div',
              (0, r.Z)({ role: 'button', tabIndex: 0, ref: t }, l, {
                onKeyDown: n,
                onKeyUp: o,
                style: s,
              }),
            )
          );
        }),
        Rt = Tt,
        jt = function (e, t, n) {
          return t && n
            ? v.createElement(
                Pt.Z,
                { componentName: 'PageHeader' },
                function (r) {
                  return v.createElement(
                    'div',
                    { className: ''.concat(e, '-back') },
                    v.createElement(
                      Rt,
                      {
                        onClick: function (e) {
                          null === n || void 0 === n || n(e);
                        },
                        className: ''.concat(e, '-back-button'),
                        'aria-label': r.back,
                      },
                      t,
                    ),
                  );
                },
              )
            : null;
        },
        Mt = function (e) {
          return v.createElement(kt, (0, r.Z)({}, e));
        },
        It = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 'ltr';
          return void 0 !== e.backIcon
            ? e.backIcon
            : 'rtl' === t
            ? v.createElement(U, null)
            : v.createElement(F, null);
        },
        Lt = function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 'ltr',
            o = t.title,
            a = t.avatar,
            i = t.subTitle,
            c = t.tags,
            l = t.extra,
            s = t.onBack,
            u = ''.concat(e, '-heading'),
            f = o || i || c || l;
          if (!f) return null;
          var d = It(t, n),
            m = jt(e, d, s),
            p = m || a || f;
          return v.createElement(
            'div',
            { className: u },
            p &&
              v.createElement(
                'div',
                { className: ''.concat(u, '-left') },
                m,
                a && v.createElement(Ee, (0, r.Z)({}, a)),
                o &&
                  v.createElement(
                    'span',
                    {
                      className: ''.concat(u, '-title'),
                      title: 'string' === typeof o ? o : void 0,
                    },
                    o,
                  ),
                i &&
                  v.createElement(
                    'span',
                    {
                      className: ''.concat(u, '-sub-title'),
                      title: 'string' === typeof i ? i : void 0,
                    },
                    i,
                  ),
                c &&
                  v.createElement(
                    'span',
                    { className: ''.concat(u, '-tags') },
                    c,
                  ),
              ),
            l &&
              v.createElement(
                'span',
                { className: ''.concat(u, '-extra') },
                v.createElement(lt, null, l),
              ),
          );
        },
        zt = function (e, t) {
          return t
            ? v.createElement('div', { className: ''.concat(e, '-footer') }, t)
            : null;
        },
        At = function (e, t) {
          return v.createElement(
            'div',
            { className: ''.concat(e, '-content') },
            t,
          );
        },
        Dt = function (e) {
          var t = (0, K.Z)(!1),
            n = (0, L.Z)(t, 2),
            r = n[0],
            a = n[1],
            i = function (e) {
              var t = e.width;
              a(t < 768, !0);
            };
          return v.createElement(p.C, null, function (t) {
            var n,
              a,
              c = t.getPrefixCls,
              l = t.pageHeader,
              s = t.direction,
              u = e.prefixCls,
              m = e.style,
              p = e.footer,
              h = e.children,
              g = e.breadcrumb,
              y = e.breadcrumbRender,
              b = e.className,
              C = !0;
            'ghost' in e ? (C = e.ghost) : l && 'ghost' in l && (C = l.ghost);
            var Z = c('page-header', u),
              x = function () {
                return (null === g || void 0 === g ? void 0 : g.routes)
                  ? Mt(g)
                  : null;
              },
              E = x(),
              w = g && 'props' in g,
              N =
                null !== (a = null === y || void 0 === y ? void 0 : y(e, E)) &&
                void 0 !== a
                  ? a
                  : E,
              k = w ? g : N,
              P = f()(
                Z,
                b,
                ((n = { 'has-breadcrumb': !!k, 'has-footer': !!p }),
                (0, o.Z)(n, ''.concat(Z, '-ghost'), C),
                (0, o.Z)(n, ''.concat(Z, '-rtl'), 'rtl' === s),
                (0, o.Z)(n, ''.concat(Z, '-compact'), r),
                n),
              );
            return v.createElement(
              d.Z,
              { onResize: i },
              v.createElement(
                'div',
                { className: P, style: m },
                k,
                Lt(Z, e, s),
                h && At(Z, h),
                zt(Z, p),
              ),
            );
          });
        },
        Bt = Dt,
        Ht = (n(25414), n(54549)),
        Ft = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'defs',
                attrs: {},
                children: [{ tag: 'style', attrs: {} }],
              },
              {
                tag: 'path',
                attrs: {
                  d: 'M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z',
                },
              },
              {
                tag: 'path',
                attrs: {
                  d: 'M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z',
                },
              },
            ],
          },
          name: 'plus',
          theme: 'outlined',
        },
        Vt = Ft,
        _t = function (e, t) {
          return v.createElement(
            B.Z,
            (0, z.Z)((0, z.Z)({}, e), {}, { ref: t, icon: Vt }),
          );
        };
      _t.displayName = 'PlusOutlined';
      var Wt = v.forwardRef(_t),
        Ut = n(44581),
        Kt = n(80289),
        Gt = (0, v.createContext)(null),
        Yt = v.forwardRef(function (e, t) {
          var n = e.prefixCls,
            r = e.className,
            o = e.style,
            a = e.id,
            i = e.active,
            c = e.tabKey,
            l = e.children;
          return v.createElement(
            'div',
            {
              id: a && ''.concat(a, '-panel-').concat(c),
              role: 'tabpanel',
              tabIndex: i ? 0 : -1,
              'aria-labelledby': a && ''.concat(a, '-tab-').concat(c),
              'aria-hidden': !i,
              style: o,
              className: f()(n, i && ''.concat(n, '-active'), r),
              ref: t,
            },
            l,
          );
        });
      var Xt = Yt,
        qt = ['key', 'forceRender', 'style', 'className'];
      function Jt(e) {
        var t = e.id,
          n = e.activeKey,
          a = e.animated,
          i = e.tabPosition,
          c = e.destroyInactiveTabPane,
          l = v.useContext(Gt),
          s = l.prefixCls,
          u = l.tabs,
          d = a.tabPane,
          m = ''.concat(s, '-tabpane');
        return v.createElement(
          'div',
          { className: f()(''.concat(s, '-content-holder')) },
          v.createElement(
            'div',
            {
              className: f()(
                ''.concat(s, '-content'),
                ''.concat(s, '-content-').concat(i),
                (0, o.Z)({}, ''.concat(s, '-content-animated'), d),
              ),
            },
            u.map(function (e) {
              var o = e.key,
                i = e.forceRender,
                l = e.style,
                s = e.className,
                u = (0, Te.Z)(e, qt),
                p = o === n;
              return v.createElement(
                Kt.Z,
                (0, r.Z)(
                  {
                    key: o,
                    visible: p,
                    forceRender: i,
                    removeOnLeave: !!c,
                    leavedClassName: ''.concat(m, '-hidden'),
                  },
                  a.tabPaneMotion,
                ),
                function (e, n) {
                  var a = e.style,
                    i = e.className;
                  return v.createElement(
                    Xt,
                    (0, r.Z)({}, u, {
                      prefixCls: m,
                      id: t,
                      tabKey: o,
                      animated: d,
                      active: p,
                      style: (0, z.Z)((0, z.Z)({}, l), a),
                      className: f()(s, i),
                      ref: n,
                    }),
                  );
                },
              );
            }),
          ),
        );
      }
      var Qt = { width: 0, height: 0, left: 0, top: 0 };
      function $t(e, t, n) {
        return (0, v.useMemo)(
          function () {
            for (
              var n,
                r = new Map(),
                o =
                  t.get(null === (n = e[0]) || void 0 === n ? void 0 : n.key) ||
                  Qt,
                a = o.left + o.width,
                i = 0;
              i < e.length;
              i += 1
            ) {
              var c,
                l = e[i].key,
                s = t.get(l);
              if (!s)
                s =
                  t.get(
                    null === (c = e[i - 1]) || void 0 === c ? void 0 : c.key,
                  ) || Qt;
              var u = r.get(l) || (0, z.Z)({}, s);
              (u.right = a - u.left - u.width), r.set(l, u);
            }
            return r;
          },
          [
            e
              .map(function (e) {
                return e.key;
              })
              .join('_'),
            t,
            n,
          ],
        );
      }
      function en(e, t) {
        var n = v.useRef(e),
          r = v.useState({}),
          o = (0, L.Z)(r, 2),
          a = o[1];
        function i(e) {
          var r = 'function' === typeof e ? e(n.current) : e;
          r !== n.current && t(r, n.current), (n.current = r), a({});
        }
        return [n.current, i];
      }
      var tn = 0.1,
        nn = 0.01,
        rn = 20,
        on = Math.pow(0.995, rn);
      function an(e, t) {
        var n = (0, v.useState)(),
          r = (0, L.Z)(n, 2),
          o = r[0],
          a = r[1],
          i = (0, v.useState)(0),
          c = (0, L.Z)(i, 2),
          l = c[0],
          s = c[1],
          u = (0, v.useState)(0),
          f = (0, L.Z)(u, 2),
          d = f[0],
          m = f[1],
          p = (0, v.useState)(),
          h = (0, L.Z)(p, 2),
          g = h[0],
          y = h[1],
          b = (0, v.useRef)();
        function C(e) {
          var t = e.touches[0],
            n = t.screenX,
            r = t.screenY;
          a({ x: n, y: r }), window.clearInterval(b.current);
        }
        function Z(e) {
          if (o) {
            e.preventDefault();
            var n = e.touches[0],
              r = n.screenX,
              i = n.screenY;
            a({ x: r, y: i });
            var c = r - o.x,
              u = i - o.y;
            t(c, u);
            var f = Date.now();
            s(f), m(f - l), y({ x: c, y: u });
          }
        }
        function x() {
          if (o && (a(null), y(null), g)) {
            var e = g.x / d,
              n = g.y / d,
              r = Math.abs(e),
              i = Math.abs(n);
            if (Math.max(r, i) < tn) return;
            var c = e,
              l = n;
            b.current = window.setInterval(function () {
              Math.abs(c) < nn && Math.abs(l) < nn
                ? window.clearInterval(b.current)
                : ((c *= on), (l *= on), t(c * rn, l * rn));
            }, rn);
          }
        }
        var E = (0, v.useRef)();
        function w(e) {
          var n = e.deltaX,
            r = e.deltaY,
            o = 0,
            a = Math.abs(n),
            i = Math.abs(r);
          a === i
            ? (o = 'x' === E.current ? n : r)
            : a > i
            ? ((o = n), (E.current = 'x'))
            : ((o = r), (E.current = 'y')),
            t(-o, -o) && e.preventDefault();
        }
        var N = (0, v.useRef)(null);
        (N.current = {
          onTouchStart: C,
          onTouchMove: Z,
          onTouchEnd: x,
          onWheel: w,
        }),
          v.useEffect(function () {
            function t(e) {
              N.current.onTouchStart(e);
            }
            function n(e) {
              N.current.onTouchMove(e);
            }
            function r(e) {
              N.current.onTouchEnd(e);
            }
            function o(e) {
              N.current.onWheel(e);
            }
            return (
              document.addEventListener('touchmove', n, { passive: !1 }),
              document.addEventListener('touchend', r, { passive: !1 }),
              e.current.addEventListener('touchstart', t, { passive: !1 }),
              e.current.addEventListener('wheel', o),
              function () {
                document.removeEventListener('touchmove', n),
                  document.removeEventListener('touchend', r);
              }
            );
          }, []);
      }
      var cn = n(31234);
      function ln(e) {
        var t = (0, v.useState)(0),
          n = (0, L.Z)(t, 2),
          r = n[0],
          o = n[1],
          a = (0, v.useRef)(0),
          i = (0, v.useRef)();
        return (
          (i.current = e),
          (0, cn.o)(
            function () {
              var e;
              null === (e = i.current) || void 0 === e || e.call(i);
            },
            [r],
          ),
          function () {
            a.current === r && ((a.current += 1), o(a.current));
          }
        );
      }
      function sn(e) {
        var t = (0, v.useRef)([]),
          n = (0, v.useState)({}),
          r = (0, L.Z)(n, 2),
          o = r[1],
          a = (0, v.useRef)('function' === typeof e ? e() : e),
          i = ln(function () {
            var e = a.current;
            t.current.forEach(function (t) {
              e = t(e);
            }),
              (t.current = []),
              (a.current = e),
              o({});
          });
        function c(e) {
          t.current.push(e), i();
        }
        return [a.current, c];
      }
      var un = { width: 0, height: 0, left: 0, top: 0, right: 0 };
      function fn(e, t, n, r, o, a, i) {
        var c,
          l,
          s,
          u = i.tabs,
          f = i.tabPosition,
          d = i.rtl;
        return (
          ['top', 'bottom'].includes(f)
            ? ((c = 'width'), (l = d ? 'right' : 'left'), (s = Math.abs(n)))
            : ((c = 'height'), (l = 'top'), (s = -n)),
          (0, v.useMemo)(
            function () {
              if (!u.length) return [0, 0];
              for (var n = u.length, r = n, o = 0; o < n; o += 1) {
                var a = e.get(u[o].key) || un;
                if (a[l] + a[c] > s + t) {
                  r = o - 1;
                  break;
                }
              }
              for (var i = 0, f = n - 1; f >= 0; f -= 1) {
                var d = e.get(u[f].key) || un;
                if (d[l] < s) {
                  i = f + 1;
                  break;
                }
              }
              return [i, r];
            },
            [
              e,
              t,
              r,
              o,
              a,
              s,
              f,
              u
                .map(function (e) {
                  return e.key;
                })
                .join('_'),
              d,
            ],
          )
        );
      }
      function dn(e) {
        var t;
        return (
          e instanceof Map
            ? ((t = {}),
              e.forEach(function (e, n) {
                t[n] = e;
              }))
            : (t = e),
          JSON.stringify(t)
        );
      }
      function mn(e, t) {
        var n = e.prefixCls,
          r = e.editable,
          o = e.locale,
          a = e.style;
        return r && !1 !== r.showAdd
          ? v.createElement(
              'button',
              {
                ref: t,
                type: 'button',
                className: ''.concat(n, '-nav-add'),
                style: a,
                'aria-label':
                  (null === o || void 0 === o ? void 0 : o.addAriaLabel) ||
                  'Add tab',
                onClick: function (e) {
                  r.onEdit('add', { event: e });
                },
              },
              r.addIcon || '+',
            )
          : null;
      }
      var vn = v.forwardRef(mn),
        pn = v.forwardRef(function (e, t) {
          var n,
            r = e.position,
            o = e.prefixCls,
            a = e.extra;
          if (!a) return null;
          var i = {};
          return (
            'object' !== (0, s.Z)(a) || v.isValidElement(a)
              ? (i.right = a)
              : (i = a),
            'right' === r && (n = i.right),
            'left' === r && (n = i.left),
            n
              ? v.createElement(
                  'div',
                  { className: ''.concat(o, '-extra-content'), ref: t },
                  n,
                )
              : null
          );
        });
      var hn = pn,
        gn = n(12773);
      function yn(e, t) {
        var n = e.prefixCls,
          r = e.id,
          a = e.tabs,
          i = e.locale,
          c = e.mobile,
          l = e.moreIcon,
          s = void 0 === l ? 'More' : l,
          u = e.moreTransitionName,
          d = e.style,
          m = e.className,
          p = e.editable,
          h = e.tabBarGutter,
          g = e.rtl,
          y = e.removeAriaLabel,
          b = e.onTabClick,
          C = e.getPopupContainer,
          Z = e.popupClassName,
          x = (0, v.useState)(!1),
          E = (0, L.Z)(x, 2),
          w = E[0],
          N = E[1],
          k = (0, v.useState)(null),
          P = (0, L.Z)(k, 2),
          O = P[0],
          S = P[1],
          T = ''.concat(r, '-more-popup'),
          R = ''.concat(n, '-dropdown'),
          j = null !== O ? ''.concat(T, '-').concat(O) : null,
          M = null === i || void 0 === i ? void 0 : i.dropdownAriaLabel;
        function I(e, t) {
          e.preventDefault(),
            e.stopPropagation(),
            p.onEdit('remove', { key: t, event: e });
        }
        var z = v.createElement(
          gn.ZP,
          {
            onClick: function (e) {
              var t = e.key,
                n = e.domEvent;
              b(t, n), N(!1);
            },
            prefixCls: ''.concat(R, '-menu'),
            id: T,
            tabIndex: -1,
            role: 'listbox',
            'aria-activedescendant': j,
            selectedKeys: [O],
            'aria-label': void 0 !== M ? M : 'expanded dropdown',
          },
          a.map(function (e) {
            var t = p && !1 !== e.closable && !e.disabled;
            return v.createElement(
              gn.sN,
              {
                key: e.key,
                id: ''.concat(T, '-').concat(e.key),
                role: 'option',
                'aria-controls': r && ''.concat(r, '-panel-').concat(e.key),
                disabled: e.disabled,
              },
              v.createElement('span', null, e.label),
              t &&
                v.createElement(
                  'button',
                  {
                    type: 'button',
                    'aria-label': y || 'remove',
                    tabIndex: 0,
                    className: ''.concat(R, '-menu-item-remove'),
                    onClick: function (t) {
                      t.stopPropagation(), I(t, e.key);
                    },
                  },
                  e.closeIcon || p.removeIcon || '\xd7',
                ),
            );
          }),
        );
        function A(e) {
          for (
            var t = a.filter(function (e) {
                return !e.disabled;
              }),
              n =
                t.findIndex(function (e) {
                  return e.key === O;
                }) || 0,
              r = t.length,
              o = 0;
            o < r;
            o += 1
          ) {
            n = (n + e + r) % r;
            var i = t[n];
            if (!i.disabled) return void S(i.key);
          }
        }
        function D(e) {
          var t = e.which;
          if (w)
            switch (t) {
              case ze.Z.UP:
                A(-1), e.preventDefault();
                break;
              case ze.Z.DOWN:
                A(1), e.preventDefault();
                break;
              case ze.Z.ESC:
                N(!1);
                break;
              case ze.Z.SPACE:
              case ze.Z.ENTER:
                null !== O && b(O, e);
                break;
            }
          else
            [ze.Z.DOWN, ze.Z.SPACE, ze.Z.ENTER].includes(t) &&
              (N(!0), e.preventDefault());
        }
        (0, v.useEffect)(
          function () {
            var e = document.getElementById(j);
            e && e.scrollIntoView && e.scrollIntoView(!1);
          },
          [O],
        ),
          (0, v.useEffect)(
            function () {
              w || S(null);
            },
            [w],
          );
        var B = (0, o.Z)({}, g ? 'marginRight' : 'marginLeft', h);
        a.length || ((B.visibility = 'hidden'), (B.order = 1));
        var H = f()((0, o.Z)({}, ''.concat(R, '-rtl'), g)),
          F = c
            ? null
            : v.createElement(
                We,
                {
                  prefixCls: R,
                  overlay: z,
                  trigger: ['hover'],
                  visible: !!a.length && w,
                  transitionName: u,
                  onVisibleChange: N,
                  overlayClassName: f()(H, Z),
                  mouseEnterDelay: 0.1,
                  mouseLeaveDelay: 0.1,
                  getPopupContainer: C,
                },
                v.createElement(
                  'button',
                  {
                    type: 'button',
                    className: ''.concat(n, '-nav-more'),
                    style: B,
                    tabIndex: -1,
                    'aria-hidden': 'true',
                    'aria-haspopup': 'listbox',
                    'aria-controls': T,
                    id: ''.concat(r, '-more'),
                    'aria-expanded': w,
                    onKeyDown: D,
                  },
                  s,
                ),
              );
        return v.createElement(
          'div',
          {
            className: f()(''.concat(n, '-nav-operations'), m),
            style: d,
            ref: t,
          },
          F,
          v.createElement(vn, { prefixCls: n, locale: i, editable: p }),
        );
      }
      var bn = v.memo(v.forwardRef(yn), function (e, t) {
        return t.tabMoving;
      });
      function Cn(e) {
        var t,
          n = e.prefixCls,
          r = e.id,
          a = e.active,
          i = e.tab,
          c = i.key,
          l = i.label,
          s = i.disabled,
          u = i.closeIcon,
          d = e.closable,
          m = e.renderWrapper,
          p = e.removeAriaLabel,
          h = e.editable,
          g = e.onClick,
          y = e.onFocus,
          b = e.style,
          C = ''.concat(n, '-tab'),
          Z = h && !1 !== d && !s;
        function x(e) {
          s || g(e);
        }
        function E(e) {
          e.preventDefault(),
            e.stopPropagation(),
            h.onEdit('remove', { key: c, event: e });
        }
        var w = v.createElement(
          'div',
          {
            key: c,
            'data-node-key': c,
            className: f()(
              C,
              ((t = {}),
              (0, o.Z)(t, ''.concat(C, '-with-remove'), Z),
              (0, o.Z)(t, ''.concat(C, '-active'), a),
              (0, o.Z)(t, ''.concat(C, '-disabled'), s),
              t),
            ),
            style: b,
            onClick: x,
          },
          v.createElement(
            'div',
            {
              role: 'tab',
              'aria-selected': a,
              id: r && ''.concat(r, '-tab-').concat(c),
              className: ''.concat(C, '-btn'),
              'aria-controls': r && ''.concat(r, '-panel-').concat(c),
              'aria-disabled': s,
              tabIndex: s ? null : 0,
              onClick: function (e) {
                e.stopPropagation(), x(e);
              },
              onKeyDown: function (e) {
                [ze.Z.SPACE, ze.Z.ENTER].includes(e.which) &&
                  (e.preventDefault(), x(e));
              },
              onFocus: y,
            },
            l,
          ),
          Z &&
            v.createElement(
              'button',
              {
                type: 'button',
                'aria-label': p || 'remove',
                tabIndex: 0,
                className: ''.concat(C, '-remove'),
                onClick: function (e) {
                  e.stopPropagation(), E(e);
                },
              },
              u || h.removeIcon || '\xd7',
            ),
        );
        return m ? m(w) : w;
      }
      var Zn = Cn,
        xn = function (e) {
          var t = e.current || {},
            n = t.offsetWidth,
            r = void 0 === n ? 0 : n,
            o = t.offsetHeight,
            a = void 0 === o ? 0 : o;
          return [r, a];
        },
        En = function (e, t) {
          return e[t ? 0 : 1];
        };
      function wn(e, t) {
        var n,
          a = v.useContext(Gt),
          i = a.prefixCls,
          c = a.tabs,
          l = e.className,
          s = e.style,
          u = e.id,
          m = e.animated,
          p = e.activeKey,
          y = e.rtl,
          b = e.extra,
          C = e.editable,
          Z = e.locale,
          x = e.tabPosition,
          E = e.tabBarGutter,
          w = e.children,
          N = e.onTabClick,
          k = e.onTabScroll,
          P = (0, v.useRef)(),
          O = (0, v.useRef)(),
          S = (0, v.useRef)(),
          T = (0, v.useRef)(),
          R = (0, v.useRef)(),
          j = (0, v.useRef)(),
          M = (0, v.useRef)(),
          I = 'top' === x || 'bottom' === x,
          A = en(0, function (e, t) {
            I && k && k({ direction: e > t ? 'left' : 'right' });
          }),
          D = (0, L.Z)(A, 2),
          B = D[0],
          H = D[1],
          F = en(0, function (e, t) {
            !I && k && k({ direction: e > t ? 'top' : 'bottom' });
          }),
          V = (0, L.Z)(F, 2),
          _ = V[0],
          W = V[1],
          U = (0, v.useState)([0, 0]),
          K = (0, L.Z)(U, 2),
          Y = K[0],
          X = K[1],
          q = (0, v.useState)([0, 0]),
          J = (0, L.Z)(q, 2),
          Q = J[0],
          $ = J[1],
          ee = (0, v.useState)([0, 0]),
          te = (0, L.Z)(ee, 2),
          ne = te[0],
          re = te[1],
          oe = (0, v.useState)([0, 0]),
          ae = (0, L.Z)(oe, 2),
          ie = ae[0],
          ce = ae[1],
          le = sn(new Map()),
          se = (0, L.Z)(le, 2),
          ue = se[0],
          fe = se[1],
          de = $t(c, ue, Q[0]),
          me = En(Y, I),
          ve = En(Q, I),
          pe = En(ne, I),
          he = En(ie, I),
          ge = me < ve + pe,
          ye = ge ? me - he : me - pe,
          be = ''.concat(i, '-nav-operations-hidden'),
          Ce = 0,
          Ze = 0;
        function xe(e) {
          return e < Ce ? Ce : e > Ze ? Ze : e;
        }
        I && y
          ? ((Ce = 0), (Ze = Math.max(0, ve - ye)))
          : ((Ce = Math.min(0, ye - ve)), (Ze = 0));
        var Ee = (0, v.useRef)(),
          we = (0, v.useState)(),
          Ne = (0, L.Z)(we, 2),
          ke = Ne[0],
          Pe = Ne[1];
        function Oe() {
          Pe(Date.now());
        }
        function Se() {
          window.clearTimeout(Ee.current);
        }
        an(T, function (e, t) {
          function n(e, t) {
            e(function (e) {
              var n = xe(e + t);
              return n;
            });
          }
          return !!ge && (I ? n(H, e) : n(W, t), Se(), Oe(), !0);
        }),
          (0, v.useEffect)(
            function () {
              return (
                Se(),
                ke &&
                  (Ee.current = window.setTimeout(function () {
                    Pe(0);
                  }, 100)),
                Se
              );
            },
            [ke],
          );
        var Te = fn(
            de,
            ye,
            I ? B : _,
            ve,
            pe,
            he,
            (0, z.Z)((0, z.Z)({}, e), {}, { tabs: c }),
          ),
          Re = (0, L.Z)(Te, 2),
          je = Re[0],
          Me = Re[1],
          Ie = (0, Ue.Z)(function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : p,
              t = de.get(e) || {
                width: 0,
                height: 0,
                left: 0,
                right: 0,
                top: 0,
              };
            if (I) {
              var n = B;
              y
                ? t.right < B
                  ? (n = t.right)
                  : t.right + t.width > B + ye && (n = t.right + t.width - ye)
                : t.left < -B
                ? (n = -t.left)
                : t.left + t.width > -B + ye && (n = -(t.left + t.width - ye)),
                W(0),
                H(xe(n));
            } else {
              var r = _;
              t.top < -_
                ? (r = -t.top)
                : t.top + t.height > -_ + ye && (r = -(t.top + t.height - ye)),
                H(0),
                W(xe(r));
            }
          }),
          Le = {};
        'top' === x || 'bottom' === x
          ? (Le[y ? 'marginRight' : 'marginLeft'] = E)
          : (Le.marginTop = E);
        var ze = c.map(function (e, t) {
            var n = e.key;
            return v.createElement(Zn, {
              id: u,
              prefixCls: i,
              key: n,
              tab: e,
              style: 0 === t ? void 0 : Le,
              closable: e.closable,
              editable: C,
              active: n === p,
              renderWrapper: w,
              removeAriaLabel:
                null === Z || void 0 === Z ? void 0 : Z.removeAriaLabel,
              onClick: function (e) {
                N(n, e);
              },
              onFocus: function () {
                Ie(n),
                  Oe(),
                  T.current &&
                    (y || (T.current.scrollLeft = 0),
                    (T.current.scrollTop = 0));
              },
            });
          }),
          Ae = function () {
            return fe(function () {
              var e = new Map();
              return (
                c.forEach(function (t) {
                  var n,
                    r = t.key,
                    o =
                      null === (n = R.current) || void 0 === n
                        ? void 0
                        : n.querySelector('[data-node-key="'.concat(r, '"]'));
                  o &&
                    e.set(r, {
                      width: o.offsetWidth,
                      height: o.offsetHeight,
                      left: o.offsetLeft,
                      top: o.offsetTop,
                    });
                }),
                e
              );
            });
          };
        (0, v.useEffect)(
          function () {
            Ae();
          },
          [
            c
              .map(function (e) {
                return e.key;
              })
              .join('_'),
          ],
        );
        var De = ln(function () {
            var e = xn(P),
              t = xn(O),
              n = xn(S);
            X([e[0] - t[0] - n[0], e[1] - t[1] - n[1]]);
            var r = xn(M);
            re(r);
            var o = xn(j);
            ce(o);
            var a = xn(R);
            $([a[0] - r[0], a[1] - r[1]]), Ae();
          }),
          Be = c.slice(0, je),
          He = c.slice(Me + 1),
          Fe = [].concat((0, h.Z)(Be), (0, h.Z)(He)),
          Ve = (0, v.useState)(),
          _e = (0, L.Z)(Ve, 2),
          We = _e[0],
          Ke = _e[1],
          Ge = de.get(p),
          Ye = (0, v.useRef)();
        function Xe() {
          g.Z.cancel(Ye.current);
        }
        (0, v.useEffect)(
          function () {
            var e = {};
            return (
              Ge &&
                (I
                  ? (y ? (e.right = Ge.right) : (e.left = Ge.left),
                    (e.width = Ge.width))
                  : ((e.top = Ge.top), (e.height = Ge.height))),
              Xe(),
              (Ye.current = (0, g.Z)(function () {
                Ke(e);
              })),
              Xe
            );
          },
          [Ge, I, y],
        ),
          (0, v.useEffect)(
            function () {
              Ie();
            },
            [p, Ce, Ze, dn(Ge), dn(de), I],
          ),
          (0, v.useEffect)(
            function () {
              De();
            },
            [y],
          );
        var qe,
          Je,
          Qe,
          $e,
          et = !!Fe.length,
          tt = ''.concat(i, '-nav-wrap');
        return (
          I
            ? y
              ? ((Je = B > 0), (qe = B !== Ze))
              : ((qe = B < 0), (Je = B !== Ce))
            : ((Qe = _ < 0), ($e = _ !== Ce)),
          v.createElement(
            d.Z,
            { onResize: De },
            v.createElement(
              'div',
              {
                ref: (0, G.x1)(t, P),
                role: 'tablist',
                className: f()(''.concat(i, '-nav'), l),
                style: s,
                onKeyDown: function () {
                  Oe();
                },
              },
              v.createElement(hn, {
                ref: O,
                position: 'left',
                extra: b,
                prefixCls: i,
              }),
              v.createElement(
                'div',
                {
                  className: f()(
                    tt,
                    ((n = {}),
                    (0, o.Z)(n, ''.concat(tt, '-ping-left'), qe),
                    (0, o.Z)(n, ''.concat(tt, '-ping-right'), Je),
                    (0, o.Z)(n, ''.concat(tt, '-ping-top'), Qe),
                    (0, o.Z)(n, ''.concat(tt, '-ping-bottom'), $e),
                    n),
                  ),
                  ref: T,
                },
                v.createElement(
                  d.Z,
                  { onResize: De },
                  v.createElement(
                    'div',
                    {
                      ref: R,
                      className: ''.concat(i, '-nav-list'),
                      style: {
                        transform: 'translate('
                          .concat(B, 'px, ')
                          .concat(_, 'px)'),
                        transition: ke ? 'none' : void 0,
                      },
                    },
                    ze,
                    v.createElement(vn, {
                      ref: M,
                      prefixCls: i,
                      locale: Z,
                      editable: C,
                      style: (0, z.Z)(
                        (0, z.Z)({}, 0 === ze.length ? void 0 : Le),
                        {},
                        { visibility: et ? 'hidden' : null },
                      ),
                    }),
                    v.createElement('div', {
                      className: f()(
                        ''.concat(i, '-ink-bar'),
                        (0, o.Z)(
                          {},
                          ''.concat(i, '-ink-bar-animated'),
                          m.inkBar,
                        ),
                      ),
                      style: We,
                    }),
                  ),
                ),
              ),
              v.createElement(
                bn,
                (0, r.Z)({}, e, {
                  removeAriaLabel:
                    null === Z || void 0 === Z ? void 0 : Z.removeAriaLabel,
                  ref: j,
                  prefixCls: i,
                  tabs: Fe,
                  className: !et && be,
                  tabMoving: !!ke,
                }),
              ),
              v.createElement(hn, {
                ref: S,
                position: 'right',
                extra: b,
                prefixCls: i,
              }),
            ),
          )
        );
      }
      var Nn = v.forwardRef(wn),
        kn = ['renderTabBar'],
        Pn = ['label', 'key'];
      function On(e) {
        var t = e.renderTabBar,
          n = (0, Te.Z)(e, kn),
          o = v.useContext(Gt),
          a = o.tabs;
        if (t) {
          var i = (0, z.Z)(
            (0, z.Z)({}, n),
            {},
            {
              panes: a.map(function (e) {
                var t = e.label,
                  n = e.key,
                  o = (0, Te.Z)(e, Pn);
                return v.createElement(
                  Xt,
                  (0, r.Z)({ tab: t, key: n, tabKey: n }, o),
                );
              }),
            },
          );
          return t(i, Nn);
        }
        return v.createElement(Nn, n);
      }
      n(32503);
      function Sn() {
        var e,
          t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : { inkBar: !0, tabPane: !1 };
        return (
          (e =
            !1 === t
              ? { inkBar: !1, tabPane: !1 }
              : !0 === t
              ? { inkBar: !0, tabPane: !1 }
              : (0, z.Z)({ inkBar: !0 }, 'object' === (0, s.Z)(t) ? t : {})),
          e.tabPaneMotion && void 0 === e.tabPane && (e.tabPane = !0),
          !e.tabPaneMotion && e.tabPane && (e.tabPane = !1),
          e
        );
      }
      var Tn = [
          'id',
          'prefixCls',
          'className',
          'items',
          'direction',
          'activeKey',
          'defaultActiveKey',
          'editable',
          'animated',
          'tabPosition',
          'tabBarGutter',
          'tabBarStyle',
          'tabBarExtraContent',
          'locale',
          'moreIcon',
          'moreTransitionName',
          'destroyInactiveTabPane',
          'renderTabBar',
          'onChange',
          'onTabClick',
          'onTabScroll',
          'getPopupContainer',
          'popupClassName',
        ],
        Rn = 0;
      function jn(e, t) {
        var n,
          a = e.id,
          i = e.prefixCls,
          c = void 0 === i ? 'rc-tabs' : i,
          l = e.className,
          u = e.items,
          d = e.direction,
          m = e.activeKey,
          p = e.defaultActiveKey,
          h = e.editable,
          g = e.animated,
          y = e.tabPosition,
          b = void 0 === y ? 'top' : y,
          C = e.tabBarGutter,
          Z = e.tabBarStyle,
          x = e.tabBarExtraContent,
          E = e.locale,
          w = e.moreIcon,
          N = e.moreTransitionName,
          k = e.destroyInactiveTabPane,
          P = e.renderTabBar,
          O = e.onChange,
          S = e.onTabClick,
          T = e.onTabScroll,
          R = e.getPopupContainer,
          j = e.popupClassName,
          M = (0, Te.Z)(e, Tn),
          I = v.useMemo(
            function () {
              return (u || []).filter(function (e) {
                return e && 'object' === (0, s.Z)(e) && 'key' in e;
              });
            },
            [u],
          ),
          A = 'rtl' === d,
          D = Sn(g),
          B = (0, v.useState)(!1),
          H = (0, L.Z)(B, 2),
          F = H[0],
          V = H[1];
        (0, v.useEffect)(function () {
          V((0, Ut.Z)());
        }, []);
        var _ = (0, Ke.Z)(
            function () {
              var e;
              return null === (e = I[0]) || void 0 === e ? void 0 : e.key;
            },
            { value: m, defaultValue: p },
          ),
          W = (0, L.Z)(_, 2),
          U = W[0],
          K = W[1],
          G = (0, v.useState)(function () {
            return I.findIndex(function (e) {
              return e.key === U;
            });
          }),
          Y = (0, L.Z)(G, 2),
          X = Y[0],
          q = Y[1];
        (0, v.useEffect)(
          function () {
            var e,
              t = I.findIndex(function (e) {
                return e.key === U;
              });
            -1 === t &&
              ((t = Math.max(0, Math.min(X, I.length - 1))),
              K(null === (e = I[t]) || void 0 === e ? void 0 : e.key));
            q(t);
          },
          [
            I.map(function (e) {
              return e.key;
            }).join('_'),
            U,
            X,
          ],
        );
        var J = (0, Ke.Z)(null, { value: a }),
          Q = (0, L.Z)(J, 2),
          $ = Q[0],
          ee = Q[1];
        function te(e, t) {
          null === S || void 0 === S || S(e, t);
          var n = e !== U;
          K(e), n && (null === O || void 0 === O || O(e));
        }
        (0, v.useEffect)(function () {
          a || (ee('rc-tabs-'.concat(Rn)), (Rn += 1));
        }, []);
        var ne,
          re = {
            id: $,
            activeKey: U,
            animated: D,
            tabPosition: b,
            rtl: A,
            mobile: F,
          },
          oe = (0, z.Z)(
            (0, z.Z)({}, re),
            {},
            {
              editable: h,
              locale: E,
              moreIcon: w,
              moreTransitionName: N,
              tabBarGutter: C,
              onTabClick: te,
              onTabScroll: T,
              extra: x,
              style: Z,
              panes: null,
              getPopupContainer: R,
              popupClassName: j,
            },
          );
        return v.createElement(
          Gt.Provider,
          { value: { tabs: I, prefixCls: c } },
          v.createElement(
            'div',
            (0, r.Z)(
              {
                ref: t,
                id: a,
                className: f()(
                  c,
                  ''.concat(c, '-').concat(b),
                  ((n = {}),
                  (0, o.Z)(n, ''.concat(c, '-mobile'), F),
                  (0, o.Z)(n, ''.concat(c, '-editable'), h),
                  (0, o.Z)(n, ''.concat(c, '-rtl'), A),
                  n),
                  l,
                ),
              },
              M,
            ),
            ne,
            v.createElement(On, (0, r.Z)({}, oe, { renderTabBar: P })),
            v.createElement(
              Jt,
              (0, r.Z)({ destroyInactiveTabPane: k }, re, { animated: D }),
            ),
          ),
        );
      }
      var Mn = v.forwardRef(jn);
      var In = Mn,
        Ln = In,
        zn = n(10772),
        An = { motionAppear: !1, motionEnter: !0, motionLeave: !0 };
      function Dn(e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { inkBar: !0, tabPane: !1 };
        return (
          (t =
            !1 === n
              ? { inkBar: !1, tabPane: !1 }
              : !0 === n
              ? { inkBar: !0, tabPane: !0 }
              : (0, r.Z)({ inkBar: !0 }, 'object' === (0, s.Z)(n) ? n : {})),
          t.tabPane &&
            (t.tabPaneMotion = (0, r.Z)((0, r.Z)({}, An), {
              motionName: (0, ve.mL)(e, 'switch'),
            })),
          t
        );
      }
      var Bn = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        }
        return n;
      };
      function Hn(e) {
        return e.filter(function (e) {
          return e;
        });
      }
      function Fn(e, t) {
        if (e) return e;
        var n = (0, fe.Z)(t).map(function (e) {
          if (v.isValidElement(e)) {
            var t = e.key,
              n = e.props,
              o = n || {},
              a = o.tab,
              i = Bn(o, ['tab']),
              c = (0, r.Z)((0, r.Z)({ key: String(t) }, i), { label: a });
            return c;
          }
          return null;
        });
        return Hn(n);
      }
      var Vn = function () {
        return null;
      };
      var _n = Vn,
        Wn = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        };
      function Un(e) {
        var t,
          n = e.type,
          a = e.className,
          i = e.size,
          c = e.onEdit,
          l = e.hideAdd,
          s = e.centered,
          u = e.addIcon,
          d = e.children,
          m = e.items,
          h = e.animated,
          g = Wn(e, [
            'type',
            'className',
            'size',
            'onEdit',
            'hideAdd',
            'centered',
            'addIcon',
            'children',
            'items',
            'animated',
          ]),
          y = g.prefixCls,
          b = g.moreIcon,
          C = void 0 === b ? v.createElement(qe.Z, null) : b,
          Z = v.useContext(p.E_),
          x = Z.getPrefixCls,
          E = Z.direction,
          w = Z.getPopupContainer,
          N = x('tabs', y);
        'editable-card' === n &&
          (t = {
            onEdit: function (e, t) {
              var n = t.key,
                r = t.event;
              null === c || void 0 === c || c('add' === e ? r : n, e);
            },
            removeIcon: v.createElement(Ht.Z, null),
            addIcon: u || v.createElement(Wt, null),
            showAdd: !0 !== l,
          });
        var k = x(),
          P = Fn(m, d),
          O = Dn(N, h);
        return v.createElement(zn.Z.Consumer, null, function (e) {
          var c,
            l = void 0 !== i ? i : e;
          return v.createElement(
            Ln,
            (0, r.Z)(
              {
                direction: E,
                getPopupContainer: w,
                moreTransitionName: ''.concat(k, '-slide-up'),
              },
              g,
              {
                items: P,
                className: f()(
                  ((c = {}),
                  (0, o.Z)(c, ''.concat(N, '-').concat(l), l),
                  (0, o.Z)(
                    c,
                    ''.concat(N, '-card'),
                    ['card', 'editable-card'].includes(n),
                  ),
                  (0, o.Z)(
                    c,
                    ''.concat(N, '-editable-card'),
                    'editable-card' === n,
                  ),
                  (0, o.Z)(c, ''.concat(N, '-centered'), s),
                  c),
                  a,
                ),
                editable: t,
                moreIcon: C,
                prefixCls: N,
                animated: O,
              },
            ),
          );
        });
      }
      Un.TabPane = _n;
      var Kn = Un,
        Gn = n(85893),
        Yn = n(81256),
        Xn = n(3305),
        qn =
          (n(56264),
          ['children', 'className', 'extra', 'style', 'renderContent']),
        Jn = function (e) {
          var t = e.children,
            n = e.className,
            r = e.extra,
            o = e.style,
            a = e.renderContent,
            i = (0, Te.Z)(e, qn),
            c = (0, v.useContext)(I.ZP.ConfigContext),
            l = c.getPrefixCls,
            s = e.prefixCls || l('pro'),
            u = ''.concat(s, '-footer-bar'),
            d = (0, v.useContext)(Yn.Z),
            m = (0, v.useMemo)(
              function () {
                var e = d.hasSiderMenu,
                  t = d.isMobile,
                  n = d.siderWidth;
                if (e)
                  return n
                    ? t
                      ? '100%'
                      : 'calc(100% - '.concat(n, 'px)')
                    : '100%';
              },
              [d.collapsed, d.hasSiderMenu, d.isMobile, d.siderWidth],
            ),
            p = (0, Gn.jsxs)(Gn.Fragment, {
              children: [
                (0, Gn.jsx)('div', {
                  className: ''.concat(u, '-left'),
                  children: r,
                }),
                (0, Gn.jsx)('div', {
                  className: ''.concat(u, '-right'),
                  children: t,
                }),
              ],
            });
          return (
            (0, v.useEffect)(function () {
              return d &&
                (null === d || void 0 === d ? void 0 : d.setHasFooterToolbar)
                ? (null === d || void 0 === d || d.setHasFooterToolbar(!0),
                  function () {
                    var e;
                    null === d ||
                      void 0 === d ||
                      null === (e = d.setHasFooterToolbar) ||
                      void 0 === e ||
                      e.call(d, !1);
                  })
                : function () {};
            }, []),
            (0, Gn.jsx)(
              'div',
              (0, z.Z)(
                (0, z.Z)(
                  {
                    className: f()(n, ''.concat(u)),
                    style: (0, z.Z)({ width: m }, o),
                  },
                  (0, Xn.Z)(i, ['prefixCls']),
                ),
                {},
                {
                  children: a
                    ? a(
                        (0, z.Z)(
                          (0, z.Z)((0, z.Z)({}, e), d),
                          {},
                          { leftWidth: m },
                        ),
                        p,
                      )
                    : p,
                },
              ),
            )
          );
        },
        Qn = Jn,
        $n =
          (n(53645),
          function (e) {
            var t = (0, v.useContext)(Yn.Z),
              n = e.children,
              r = e.contentWidth,
              o = e.className,
              a = e.style,
              i = (0, v.useContext)(I.ZP.ConfigContext),
              c = i.getPrefixCls,
              l = e.prefixCls || c('pro'),
              s = r || t.contentWidth,
              u = ''.concat(l, '-grid-content');
            return (0, Gn.jsx)('div', {
              className: f()(u, o, { wide: 'Fixed' === s }),
              style: a,
              children: (0, Gn.jsx)('div', {
                className: ''.concat(l, '-grid-content-children'),
                children: n,
              }),
            });
          }),
        er = $n,
        tr = n(56463),
        nr = function (e) {
          if (!e) return 1;
          var t =
            e.backingStorePixelRatio ||
            e.webkitBackingStorePixelRatio ||
            e.mozBackingStorePixelRatio ||
            e.msBackingStorePixelRatio ||
            e.oBackingStorePixelRatio ||
            e.backingStorePixelRatio ||
            1;
          return (window.devicePixelRatio || 1) / t;
        },
        rr = function (e) {
          var t = e.children,
            n = e.style,
            r = e.className,
            o = e.markStyle,
            a = e.markClassName,
            i = e.zIndex,
            c = void 0 === i ? 9 : i,
            l = e.gapX,
            s = void 0 === l ? 212 : l,
            u = e.gapY,
            d = void 0 === u ? 222 : u,
            m = e.width,
            p = void 0 === m ? 120 : m,
            h = e.height,
            g = void 0 === h ? 64 : h,
            y = e.rotate,
            b = void 0 === y ? -22 : y,
            C = e.image,
            Z = e.content,
            x = e.offsetLeft,
            E = e.offsetTop,
            w = e.fontStyle,
            N = void 0 === w ? 'normal' : w,
            k = e.fontWeight,
            P = void 0 === k ? 'normal' : k,
            O = e.fontColor,
            S = void 0 === O ? 'rgba(0,0,0,.15)' : O,
            T = e.fontSize,
            R = void 0 === T ? 16 : T,
            j = e.fontFamily,
            M = void 0 === j ? 'sans-serif' : j,
            A = e.prefixCls,
            D = (0, v.useContext)(I.ZP.ConfigContext),
            B = D.getPrefixCls,
            H = B('pro-layout-watermark', A),
            F = f()(''.concat(H, '-wrapper'), r),
            V = f()(H, a),
            _ = (0, v.useState)(''),
            W = (0, L.Z)(_, 2),
            U = W[0],
            K = W[1];
          return (
            (0, v.useEffect)(
              function () {
                var e = document.createElement('canvas'),
                  t = e.getContext('2d'),
                  n = nr(t),
                  r = ''.concat((s + p) * n, 'px'),
                  o = ''.concat((d + g) * n, 'px'),
                  a = x || s / 2,
                  i = E || d / 2;
                if (
                  (e.setAttribute('width', r), e.setAttribute('height', o), t)
                ) {
                  t.translate(a * n, i * n),
                    t.rotate((Math.PI / 180) * Number(b));
                  var c = p * n,
                    l = g * n;
                  if (C) {
                    var u = new Image();
                    (u.crossOrigin = 'anonymous'),
                      (u.referrerPolicy = 'no-referrer'),
                      (u.src = C),
                      (u.onload = function () {
                        t.drawImage(u, 0, 0, c, l), K(e.toDataURL());
                      });
                  } else if (Z) {
                    var f = Number(R) * n;
                    (t.font = ''
                      .concat(N, ' normal ')
                      .concat(P, ' ')
                      .concat(f, 'px/')
                      .concat(l, 'px ')
                      .concat(M)),
                      (t.fillStyle = S),
                      Array.isArray(Z)
                        ? null === Z ||
                          void 0 === Z ||
                          Z.forEach(function (e, n) {
                            return t.fillText(e, 0, 50 * n);
                          })
                        : t.fillText(Z, 0, 0),
                      K(e.toDataURL());
                  }
                } else
                  console.error(
                    '\u5f53\u524d\u73af\u5883\u4e0d\u652f\u6301Canvas',
                  );
              },
              [s, d, x, E, b, N, P, p, g, M, S, C, Z, R],
            ),
            (0, Gn.jsxs)('div', {
              style: (0, z.Z)({ position: 'relative' }, n),
              className: F,
              children: [
                t,
                (0, Gn.jsx)('div', {
                  className: V,
                  style: (0, z.Z)(
                    (0, z.Z)(
                      {
                        zIndex: c,
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '100%',
                        height: '100%',
                        backgroundSize: ''.concat(s + p, 'px'),
                        pointerEvents: 'none',
                        backgroundRepeat: 'repeat',
                      },
                      U ? { backgroundImage: "url('".concat(U, "')") } : null,
                    ),
                    o,
                  ),
                }),
              ],
            })
          );
        },
        or = rr,
        ar =
          (n(12395),
          [
            'title',
            'content',
            'pageHeaderRender',
            'header',
            'prefixedClassName',
            'extraContent',
            'style',
            'prefixCls',
            'breadcrumbRender',
          ]),
        ir = [
          'children',
          'loading',
          'className',
          'style',
          'footer',
          'affixProps',
          'ghost',
          'fixedHeader',
          'breadcrumbRender',
        ];
      function cr(e) {
        return 'object' === (0, s.Z)(e) ? e : { spinning: e };
      }
      var lr = function (e) {
          var t = e.tabList,
            n = e.tabActiveKey,
            r = e.onTabChange,
            o = e.tabBarExtraContent,
            a = e.tabProps,
            i = e.prefixedClassName;
          return Array.isArray(t) || o
            ? (0, Gn.jsx)(
                Kn,
                (0, z.Z)(
                  (0, z.Z)(
                    {
                      className: ''.concat(i, '-tabs'),
                      activeKey: n,
                      onChange: function (e) {
                        r && r(e);
                      },
                      tabBarExtraContent: o,
                    },
                    a,
                  ),
                  {},
                  {
                    children:
                      null === t || void 0 === t
                        ? void 0
                        : t.map(function (e, t) {
                            return (0,
                            v.createElement)(Kn.TabPane, (0, z.Z)((0, z.Z)({}, e), {}, { tab: e.tab, key: e.key || t }));
                          }),
                  },
                ),
              )
            : null;
        },
        sr = function (e, t, n) {
          return e || t
            ? (0, Gn.jsx)('div', {
                className: ''.concat(n, '-detail'),
                children: (0, Gn.jsx)('div', {
                  className: ''.concat(n, '-main'),
                  children: (0, Gn.jsxs)('div', {
                    className: ''.concat(n, '-row'),
                    children: [
                      e &&
                        (0, Gn.jsx)('div', {
                          className: ''.concat(n, '-content'),
                          children: e,
                        }),
                      t &&
                        (0, Gn.jsx)('div', {
                          className: ''.concat(n, '-extraContent'),
                          children: t,
                        }),
                    ],
                  }),
                }),
              })
            : null;
        },
        ur = function (e) {
          var t,
            n = (0, v.useContext)(Yn.Z),
            r = e.title,
            o = e.content,
            a = e.pageHeaderRender,
            i = e.header,
            c = e.prefixedClassName,
            l = e.extraContent,
            s = (e.style, e.prefixCls),
            u = e.breadcrumbRender,
            f = (0, Te.Z)(e, ar),
            d = (0, v.useMemo)(
              function () {
                if (u) return u;
              },
              [u],
            );
          if (!1 === a) return null;
          if (a)
            return (0, Gn.jsxs)(Gn.Fragment, {
              children: [' ', a((0, z.Z)((0, z.Z)({}, e), n))],
            });
          var m = r;
          r || !1 === r || (m = n.title);
          var p = (0, z.Z)(
              (0, z.Z)((0, z.Z)({}, n), {}, { title: m }, f),
              {},
              {
                footer: lr(
                  (0, z.Z)(
                    (0, z.Z)({}, f),
                    {},
                    { breadcrumbRender: u, prefixedClassName: c },
                  ),
                ),
              },
              i,
            ),
            h = p.breadcrumb,
            g =
              (!h ||
                (!(null === h || void 0 === h ? void 0 : h.itemRender) &&
                  !(null === h ||
                  void 0 === h ||
                  null === (t = h.routes) ||
                  void 0 === t
                    ? void 0
                    : t.length))) &&
              !u;
          return [
            'title',
            'subTitle',
            'extra',
            'tags',
            'footer',
            'avatar',
            'backIcon',
          ].every(function (e) {
            return !p[e];
          }) &&
            g &&
            !o &&
            !l
            ? null
            : (0, Gn.jsx)('div', {
                className: ''.concat(c, '-warp'),
                children: (0, Gn.jsx)(
                  Bt,
                  (0, z.Z)(
                    (0, z.Z)({}, p),
                    {},
                    {
                      breadcrumb:
                        !1 === u
                          ? void 0
                          : (0, z.Z)(
                              (0, z.Z)({}, p.breadcrumb),
                              n.breadcrumbProps,
                            ),
                      breadcrumbRender: d,
                      prefixCls: s,
                      children:
                        (null === i || void 0 === i ? void 0 : i.children) ||
                        sr(o, l, c),
                    },
                  ),
                ),
              });
        },
        fr = function (e) {
          var t,
            n,
            r = e.children,
            a = e.loading,
            i = void 0 !== a && a,
            c = e.className,
            l = e.style,
            s = e.footer,
            u = e.affixProps,
            d = e.ghost,
            m = e.fixedHeader,
            p = e.breadcrumbRender,
            h = (0, Te.Z)(e, ir),
            g = (0, v.useContext)(Yn.Z),
            y = (0, v.useContext)(I.ZP.ConfigContext),
            b = y.getPrefixCls,
            C = e.prefixCls || b('pro'),
            Z = ''.concat(C, '-page-container'),
            x = f()(
              Z,
              c,
              ((t = {}),
              (0, o.Z)(t, ''.concat(C, '-page-container-ghost'), d),
              (0, o.Z)(t, ''.concat(C, '-page-container-with-footer'), s),
              t),
            ),
            E = (0, v.useMemo)(
              function () {
                return r
                  ? (0, Gn.jsxs)(Gn.Fragment, {
                      children: [
                        (0, Gn.jsx)('div', {
                          className: ''.concat(Z, '-children-content'),
                          children: r,
                        }),
                        g.hasFooterToolbar &&
                          (0, Gn.jsx)('div', {
                            style: { height: 48, marginTop: 24 },
                          }),
                      ],
                    })
                  : null;
              },
              [r, Z, g.hasFooterToolbar],
            ),
            w = (0, v.useMemo)(
              function () {
                var e;
                return (
                  0 != p &&
                  (p ||
                    (null === h ||
                    void 0 === h ||
                    null === (e = h.header) ||
                    void 0 === e
                      ? void 0
                      : e.breadcrumbRender))
                );
              },
              [
                p,
                null === h ||
                void 0 === h ||
                null === (n = h.header) ||
                void 0 === n
                  ? void 0
                  : n.breadcrumbRender,
              ],
            ),
            N = (0, Gn.jsx)(
              ur,
              (0, z.Z)(
                (0, z.Z)({}, h),
                {},
                {
                  breadcrumbRender: w,
                  ghost: d,
                  prefixCls: void 0,
                  prefixedClassName: Z,
                },
              ),
            ),
            k = (0, v.useMemo)(
              function () {
                if (v.isValidElement(i)) return i;
                if ('boolean' === typeof i && !i) return null;
                var e = cr(i);
                return e.spinning ? (0, Gn.jsx)(tr.Z, (0, z.Z)({}, e)) : null;
              },
              [i],
            ),
            P = (0, v.useMemo)(
              function () {
                var t = k || E;
                if (e.waterMarkProps || g.waterMarkProps) {
                  var n = (0, z.Z)(
                    (0, z.Z)({}, g.waterMarkProps),
                    e.waterMarkProps,
                  );
                  return (0, Gn.jsx)(
                    or,
                    (0, z.Z)((0, z.Z)({}, n), {}, { children: t }),
                  );
                }
                return t;
              },
              [e.waterMarkProps, g.waterMarkProps, k, E],
            );
          return (0, Gn.jsxs)('div', {
            style: l,
            className: x,
            children: [
              m && N
                ? (0, Gn.jsx)(
                    M,
                    (0, z.Z)(
                      (0, z.Z)(
                        {
                          offsetTop:
                            g.hasHeader && g.fixedHeader ? g.headerHeight : 0,
                        },
                        u,
                      ),
                      {},
                      { children: N },
                    ),
                  )
                : N,
              P && (0, Gn.jsx)(er, { children: P }),
              s && (0, Gn.jsx)(Qn, { prefixCls: C, children: s }),
            ],
          });
        },
        dr = fr;
    },
    55835: function (e, t, n) {
      'use strict';
      n.d(t, {
        jD: function () {
          return a;
        },
        fk: function () {
          return i;
        },
      });
      var r,
        o = n(20064),
        a = function () {
          return (0, o.Z)() && window.document.documentElement;
        },
        i = function () {
          if (!a()) return !1;
          if (void 0 !== r) return r;
          var e = document.createElement('div');
          return (
            (e.style.display = 'flex'),
            (e.style.flexDirection = 'column'),
            (e.style.rowGap = '1px'),
            e.appendChild(document.createElement('div')),
            e.appendChild(document.createElement('div')),
            document.body.appendChild(e),
            (r = 1 === e.scrollHeight),
            document.body.removeChild(e),
            r
          );
        };
    },
    98791: function (e, t, n) {
      'use strict';
      n.d(t, {
        n: function () {
          return J;
        },
        Z: function () {
          return ee;
        },
      });
      var r,
        o = n(22122),
        a = n(96156),
        i = n(28481),
        c = n(90484),
        l = n(35510),
        s = n.n(l),
        u = n(26670),
        f = n(67294),
        d = n(9054),
        m = n(99469),
        v = n(10772),
        p = n(1358),
        h = n(75447),
        g = n(4381),
        y = n(6610),
        b = n(5991),
        C = n(63349),
        Z = n(10379),
        x = n(54070),
        E = n(78536),
        w = n(78703),
        N = n(90468),
        k = 0,
        P = {};
      function O(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          n = k++,
          r = t;
        function o() {
          (r -= 1), r <= 0 ? (e(), delete P[n]) : (P[n] = (0, N.Z)(o));
        }
        return (P[n] = (0, N.Z)(o)), n;
      }
      function S(e) {
        return !e || null === e.offsetParent || e.hidden;
      }
      function T(e) {
        return e instanceof Document
          ? e.body
          : Array.from(e.childNodes).find(function (e) {
              return (
                (null === e || void 0 === e ? void 0 : e.nodeType) ===
                Node.ELEMENT_NODE
              );
            });
      }
      function R(e) {
        var t = (e || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
        return (
          !(t && t[1] && t[2] && t[3]) || !(t[1] === t[2] && t[2] === t[3])
        );
      }
      (O.cancel = function (e) {
        void 0 !== e && (N.Z.cancel(P[e]), delete P[e]);
      }),
        (O.ids = P);
      var j = (function (e) {
        (0, Z.Z)(n, e);
        var t = (0, x.Z)(n);
        function n() {
          var e;
          return (
            (0, y.Z)(this, n),
            (e = t.apply(this, arguments)),
            (e.containerRef = f.createRef()),
            (e.animationStart = !1),
            (e.destroyed = !1),
            (e.onClick = function (t, n) {
              var o,
                a,
                i = e.props,
                c = i.insertExtraNode,
                l = i.disabled;
              if (!l && t && !S(t) && !t.className.includes('-leave')) {
                e.extraNode = document.createElement('div');
                var s = (0, C.Z)(e),
                  u = s.extraNode,
                  f = e.context.getPrefixCls;
                u.className = ''.concat(f(''), '-click-animating-node');
                var d = e.getAttributeName();
                if (
                  (t.setAttribute(d, 'true'),
                  n &&
                    '#fff' !== n &&
                    '#ffffff' !== n &&
                    'rgb(255, 255, 255)' !== n &&
                    'rgba(255, 255, 255, 1)' !== n &&
                    R(n) &&
                    !/rgba\((?:\d*, ){3}0\)/.test(n) &&
                    'transparent' !== n)
                ) {
                  u.style.borderColor = n;
                  var m =
                      (null === (o = t.getRootNode) || void 0 === o
                        ? void 0
                        : o.call(t)) || t.ownerDocument,
                    v = null !== (a = T(m)) && void 0 !== a ? a : m;
                  r = (0, E.hq)(
                    '\n      ['
                      .concat(
                        f(''),
                        "-click-animating-without-extra-node='true']::after, .",
                      )
                      .concat(
                        f(''),
                        '-click-animating-node {\n        --antd-wave-shadow-color: ',
                      )
                      .concat(n, ';\n      }'),
                    'antd-wave',
                    { csp: e.csp, attachTo: v },
                  );
                }
                c && t.appendChild(u),
                  ['transition', 'animation'].forEach(function (n) {
                    t.addEventListener(
                      ''.concat(n, 'start'),
                      e.onTransitionStart,
                    ),
                      t.addEventListener(
                        ''.concat(n, 'end'),
                        e.onTransitionEnd,
                      );
                  });
              }
            }),
            (e.onTransitionStart = function (t) {
              if (!e.destroyed) {
                var n = e.containerRef.current;
                t && t.target === n && !e.animationStart && e.resetEffect(n);
              }
            }),
            (e.onTransitionEnd = function (t) {
              t && 'fadeEffect' === t.animationName && e.resetEffect(t.target);
            }),
            (e.bindAnimationEvent = function (t) {
              if (
                t &&
                t.getAttribute &&
                !t.getAttribute('disabled') &&
                !t.className.includes('disabled')
              ) {
                var n = function (n) {
                  if ('INPUT' !== n.target.tagName && !S(n.target)) {
                    e.resetEffect(t);
                    var r =
                      getComputedStyle(t).getPropertyValue(
                        'border-top-color',
                      ) ||
                      getComputedStyle(t).getPropertyValue('border-color') ||
                      getComputedStyle(t).getPropertyValue('background-color');
                    (e.clickWaveTimeoutId = window.setTimeout(function () {
                      return e.onClick(t, r);
                    }, 0)),
                      O.cancel(e.animationStartId),
                      (e.animationStart = !0),
                      (e.animationStartId = O(function () {
                        e.animationStart = !1;
                      }, 10));
                  }
                };
                return (
                  t.addEventListener('click', n, !0),
                  {
                    cancel: function () {
                      t.removeEventListener('click', n, !0);
                    },
                  }
                );
              }
            }),
            (e.renderWave = function (t) {
              var n = t.csp,
                r = e.props.children;
              if (((e.csp = n), !f.isValidElement(r))) return r;
              var o = e.containerRef;
              return (
                (0, w.Yr)(r) && (o = (0, w.sQ)(r.ref, e.containerRef)),
                (0, h.Tm)(r, { ref: o })
              );
            }),
            e
          );
        }
        return (
          (0, b.Z)(n, [
            {
              key: 'componentDidMount',
              value: function () {
                this.destroyed = !1;
                var e = this.containerRef.current;
                e &&
                  1 === e.nodeType &&
                  (this.instance = this.bindAnimationEvent(e));
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                this.instance && this.instance.cancel(),
                  this.clickWaveTimeoutId &&
                    clearTimeout(this.clickWaveTimeoutId),
                  (this.destroyed = !0);
              },
            },
            {
              key: 'getAttributeName',
              value: function () {
                var e = this.context.getPrefixCls,
                  t = this.props.insertExtraNode;
                return ''.concat(
                  e(''),
                  t
                    ? '-click-animating'
                    : '-click-animating-without-extra-node',
                );
              },
            },
            {
              key: 'resetEffect',
              value: function (e) {
                var t = this;
                if (e && e !== this.extraNode && e instanceof Element) {
                  var n = this.props.insertExtraNode,
                    o = this.getAttributeName();
                  e.setAttribute(o, 'false'),
                    r && (r.innerHTML = ''),
                    n &&
                      this.extraNode &&
                      e.contains(this.extraNode) &&
                      e.removeChild(this.extraNode),
                    ['transition', 'animation'].forEach(function (n) {
                      e.removeEventListener(
                        ''.concat(n, 'start'),
                        t.onTransitionStart,
                      ),
                        e.removeEventListener(
                          ''.concat(n, 'end'),
                          t.onTransitionEnd,
                        );
                    });
                }
              },
            },
            {
              key: 'render',
              value: function () {
                return f.createElement(d.C, null, this.renderWave);
              },
            },
          ]),
          n
        );
      })(f.Component);
      j.contextType = d.E_;
      var M = j,
        I = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        },
        L = f.createContext(void 0),
        z = function (e) {
          var t,
            n = f.useContext(d.E_),
            r = n.getPrefixCls,
            i = n.direction,
            c = e.prefixCls,
            l = e.size,
            u = e.className,
            m = I(e, ['prefixCls', 'size', 'className']),
            v = r('btn-group', c),
            p = '';
          switch (l) {
            case 'large':
              p = 'lg';
              break;
            case 'small':
              p = 'sm';
              break;
            case 'middle':
            case void 0:
              break;
            default:
          }
          var h = s()(
            v,
            ((t = {}),
            (0, a.Z)(t, ''.concat(v, '-').concat(p), p),
            (0, a.Z)(t, ''.concat(v, '-rtl'), 'rtl' === i),
            t),
            u,
          );
          return f.createElement(
            L.Provider,
            { value: l },
            f.createElement('div', (0, o.Z)({}, m, { className: h })),
          );
        },
        A = z,
        D = n(7085),
        B = n(80289),
        H = function () {
          return { width: 0, opacity: 0, transform: 'scale(0)' };
        },
        F = function (e) {
          return { width: e.scrollWidth, opacity: 1, transform: 'scale(1)' };
        },
        V = function (e) {
          var t = e.prefixCls,
            n = e.loading,
            r = e.existIcon,
            o = !!n;
          return r
            ? f.createElement(
                'span',
                { className: ''.concat(t, '-loading-icon') },
                f.createElement(D.Z, null),
              )
            : f.createElement(
                B.Z,
                {
                  visible: o,
                  motionName: ''.concat(t, '-loading-icon-motion'),
                  removeOnLeave: !0,
                  onAppearStart: H,
                  onAppearActive: F,
                  onEnterStart: H,
                  onEnterActive: F,
                  onLeaveStart: F,
                  onLeaveActive: H,
                },
                function (e, n) {
                  var r = e.className,
                    o = e.style;
                  return f.createElement(
                    'span',
                    {
                      className: ''.concat(t, '-loading-icon'),
                      style: o,
                      ref: n,
                    },
                    f.createElement(D.Z, { className: r }),
                  );
                },
              );
        },
        _ = V,
        W = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        },
        U = /^[\u4e00-\u9fa5]{2}$/,
        K = U.test.bind(U);
      function G(e) {
        return 'string' === typeof e;
      }
      function Y(e) {
        return 'text' === e || 'link' === e;
      }
      function X(e, t) {
        if (null !== e && void 0 !== e) {
          var n = t ? ' ' : '';
          return 'string' !== typeof e &&
            'number' !== typeof e &&
            G(e.type) &&
            K(e.props.children)
            ? (0, h.Tm)(e, { children: e.props.children.split('').join(n) })
            : 'string' === typeof e
            ? K(e)
              ? f.createElement('span', null, e.split('').join(n))
              : f.createElement('span', null, e)
            : (0, h.M2)(e)
            ? f.createElement('span', null, e)
            : e;
        }
      }
      function q(e, t) {
        var n = !1,
          r = [];
        return (
          f.Children.forEach(e, function (e) {
            var t = (0, c.Z)(e),
              o = 'string' === t || 'number' === t;
            if (n && o) {
              var a = r.length - 1,
                i = r[a];
              r[a] = ''.concat(i).concat(e);
            } else r.push(e);
            n = o;
          }),
          f.Children.map(r, function (e) {
            return X(e, t);
          })
        );
      }
      (0, g.b)('default', 'primary', 'ghost', 'dashed', 'link', 'text'),
        (0, g.b)('default', 'circle', 'round'),
        (0, g.b)('submit', 'button', 'reset');
      function J(e) {
        return 'danger' === e ? { danger: !0 } : { type: e };
      }
      var Q = function (e, t) {
          var n,
            r = e.loading,
            c = void 0 !== r && r,
            l = e.prefixCls,
            h = e.type,
            g = void 0 === h ? 'default' : h,
            y = e.danger,
            b = e.shape,
            C = void 0 === b ? 'default' : b,
            Z = e.size,
            x = e.disabled,
            E = e.className,
            w = e.children,
            N = e.icon,
            k = e.ghost,
            P = void 0 !== k && k,
            O = e.block,
            S = void 0 !== O && O,
            T = e.htmlType,
            R = void 0 === T ? 'button' : T,
            j = W(e, [
              'loading',
              'prefixCls',
              'type',
              'danger',
              'shape',
              'size',
              'disabled',
              'className',
              'children',
              'icon',
              'ghost',
              'block',
              'htmlType',
            ]),
            I = f.useContext(v.Z),
            z = f.useContext(m.Z),
            A = null !== x && void 0 !== x ? x : z,
            D = f.useContext(L),
            B = f.useState(!!c),
            H = (0, i.Z)(B, 2),
            F = H[0],
            V = H[1],
            U = f.useState(!1),
            G = (0, i.Z)(U, 2),
            X = G[0],
            J = G[1],
            Q = f.useContext(d.E_),
            $ = Q.getPrefixCls,
            ee = Q.autoInsertSpaceInButton,
            te = Q.direction,
            ne = t || f.createRef(),
            re = function () {
              return 1 === f.Children.count(w) && !N && !Y(g);
            },
            oe = function () {
              if (ne && ne.current && !1 !== ee) {
                var e = ne.current.textContent;
                re() && K(e) ? X || J(!0) : X && J(!1);
              }
            },
            ae =
              'boolean' === typeof c
                ? c
                : (null === c || void 0 === c ? void 0 : c.delay) || !0;
          f.useEffect(
            function () {
              var e = null;
              return (
                'number' === typeof ae
                  ? (e = window.setTimeout(function () {
                      (e = null), V(ae);
                    }, ae))
                  : V(ae),
                function () {
                  e && (window.clearTimeout(e), (e = null));
                }
              );
            },
            [ae],
          ),
            f.useEffect(oe, [ne]);
          var ie = function (t) {
              var n = e.onClick;
              F || A ? t.preventDefault() : null === n || void 0 === n || n(t);
            },
            ce = $('btn', l),
            le = !1 !== ee,
            se = (0, p.ri)(ce, te),
            ue = se.compactSize,
            fe = se.compactItemClassnames,
            de = { large: 'lg', small: 'sm', middle: void 0 },
            me = ue || D || Z || I,
            ve = (me && de[me]) || '',
            pe = F ? 'loading' : N,
            he = (0, u.Z)(j, ['navigate']),
            ge = s()(
              ce,
              ((n = {}),
              (0, a.Z)(n, ''.concat(ce, '-').concat(C), 'default' !== C && C),
              (0, a.Z)(n, ''.concat(ce, '-').concat(g), g),
              (0, a.Z)(n, ''.concat(ce, '-').concat(ve), ve),
              (0, a.Z)(n, ''.concat(ce, '-icon-only'), !w && 0 !== w && !!pe),
              (0, a.Z)(n, ''.concat(ce, '-background-ghost'), P && !Y(g)),
              (0, a.Z)(n, ''.concat(ce, '-loading'), F),
              (0, a.Z)(n, ''.concat(ce, '-two-chinese-chars'), X && le && !F),
              (0, a.Z)(n, ''.concat(ce, '-block'), S),
              (0, a.Z)(n, ''.concat(ce, '-dangerous'), !!y),
              (0, a.Z)(n, ''.concat(ce, '-rtl'), 'rtl' === te),
              (0, a.Z)(n, ''.concat(ce, '-disabled'), void 0 !== he.href && A),
              n),
              fe,
              E,
            ),
            ye =
              N && !F
                ? N
                : f.createElement(_, {
                    existIcon: !!N,
                    prefixCls: ce,
                    loading: !!F,
                  }),
            be = w || 0 === w ? q(w, re() && le) : null;
          if (void 0 !== he.href)
            return f.createElement(
              'a',
              (0, o.Z)({}, he, { className: ge, onClick: ie, ref: ne }),
              ye,
              be,
            );
          var Ce = f.createElement(
            'button',
            (0, o.Z)({}, j, {
              type: R,
              className: ge,
              onClick: ie,
              disabled: A,
              ref: ne,
            }),
            ye,
            be,
          );
          return Y(g) ? Ce : f.createElement(M, { disabled: !!F }, Ce);
        },
        $ = f.forwardRef(Q);
      ($.Group = A), ($.__ANT_BUTTON = !0);
      var ee = $;
    },
    48429: function (e, t, n) {
      'use strict';
      var r = n(98791);
      t['Z'] = r.Z;
    },
    19300: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return ke;
        },
      });
      var r = n(22122),
        o = n(90484),
        a = n(28991),
        i = n(67294),
        c = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z',
                },
              },
            ],
          },
          name: 'eye',
          theme: 'outlined',
        },
        l = c,
        s = n(27029),
        u = function (e, t) {
          return i.createElement(
            s.Z,
            (0, a.Z)((0, a.Z)({}, e), {}, { ref: t, icon: l }),
          );
        };
      u.displayName = 'EyeOutlined';
      var f = i.forwardRef(u),
        d = n(96156),
        m = n(28481),
        v = n(81253),
        p = n(35510),
        h = n.n(p);
      function g() {
        var e = document.documentElement.clientWidth,
          t = window.innerHeight || document.documentElement.clientHeight;
        return { width: e, height: t };
      }
      function y(e) {
        var t = e.getBoundingClientRect(),
          n = document.documentElement;
        return {
          left:
            t.left +
            (window.pageXOffset || n.scrollLeft) -
            (n.clientLeft || document.body.clientLeft || 0),
          top:
            t.top +
            (window.pageYOffset || n.scrollTop) -
            (n.clientTop || document.body.clientTop || 0),
        };
      }
      var b = n(82321),
        C = n(15984),
        Z = n(48198),
        x = n(90826),
        E = n(32503),
        w = [
          'visible',
          'onVisibleChange',
          'getContainer',
          'current',
          'countRender',
        ],
        N = i.createContext({
          previewUrls: new Map(),
          setPreviewUrls: function () {
            return null;
          },
          current: null,
          setCurrent: function () {
            return null;
          },
          setShowPreview: function () {
            return null;
          },
          setMousePosition: function () {
            return null;
          },
          registerImage: function () {
            return function () {
              return null;
            };
          },
          rootClassName: '',
        }),
        k = N.Provider,
        P = function (e) {
          var t = e.previewPrefixCls,
            n = void 0 === t ? 'rc-image-preview' : t,
            a = e.children,
            c = e.icons,
            l = void 0 === c ? {} : c,
            s = e.preview,
            u = 'object' === (0, o.Z)(s) ? s : {},
            f = u.visible,
            d = void 0 === f ? void 0 : f,
            p = u.onVisibleChange,
            h = void 0 === p ? void 0 : p,
            g = u.getContainer,
            y = void 0 === g ? void 0 : g,
            C = u.current,
            Z = void 0 === C ? 0 : C,
            x = u.countRender,
            E = void 0 === x ? void 0 : x,
            N = (0, v.Z)(u, w),
            P = (0, i.useState)(new Map()),
            O = (0, m.Z)(P, 2),
            S = O[0],
            T = O[1],
            R = (0, i.useState)(),
            j = (0, m.Z)(R, 2),
            M = j[0],
            I = j[1],
            L = (0, b.Z)(!!d, { value: d, onChange: h }),
            z = (0, m.Z)(L, 2),
            A = z[0],
            D = z[1],
            B = (0, i.useState)(null),
            H = (0, m.Z)(B, 2),
            F = H[0],
            V = H[1],
            _ = void 0 !== d,
            U = Array.from(S.keys()),
            K = U[Z],
            G = new Map(
              Array.from(S)
                .filter(function (e) {
                  var t = (0, m.Z)(e, 2),
                    n = t[1].canPreview;
                  return !!n;
                })
                .map(function (e) {
                  var t = (0, m.Z)(e, 2),
                    n = t[0],
                    r = t[1].url;
                  return [n, r];
                }),
            ),
            Y = function (e, t) {
              var n =
                  !(arguments.length > 2 && void 0 !== arguments[2]) ||
                  arguments[2],
                r = function () {
                  T(function (t) {
                    var n = new Map(t),
                      r = n['delete'](e);
                    return r ? n : t;
                  });
                };
              return (
                T(function (r) {
                  return new Map(r).set(e, { url: t, canPreview: n });
                }),
                r
              );
            },
            X = function (e) {
              e.stopPropagation(), D(!1), V(null);
            };
          return (
            i.useEffect(
              function () {
                I(K);
              },
              [K],
            ),
            i.useEffect(
              function () {
                !A && _ && I(K);
              },
              [K, _, A],
            ),
            i.createElement(
              k,
              {
                value: {
                  isPreviewGroup: !0,
                  previewUrls: G,
                  setPreviewUrls: T,
                  current: M,
                  setCurrent: I,
                  setShowPreview: D,
                  setMousePosition: V,
                  registerImage: Y,
                },
              },
              a,
              i.createElement(
                W,
                (0, r.Z)(
                  {
                    'aria-hidden': !A,
                    visible: A,
                    prefixCls: n,
                    onClose: X,
                    mousePosition: F,
                    src: G.get(M),
                    icons: l,
                    getContainer: y,
                    countRender: E,
                  },
                  N,
                ),
              ),
            )
          );
        },
        O = P,
        S = n(80289),
        T = n(26083),
        R = 1,
        j = 50,
        M = 1,
        I = 0.2,
        L = function (e) {
          var t,
            n = e.visible,
            r = e.maskTransitionName,
            o = e.getContainer,
            a = e.prefixCls,
            c = e.rootClassName,
            l = e.icons,
            s = e.countRender,
            u = e.showSwitch,
            f = e.showProgress,
            m = e.current,
            v = e.count,
            p = e.scale,
            g = e.onSwitchLeft,
            y = e.onSwitchRight,
            b = e.onClose,
            C = e.onZoomIn,
            Z = e.onZoomOut,
            x = e.onRotateRight,
            E = e.onRotateLeft,
            w = l.rotateLeft,
            N = l.rotateRight,
            k = l.zoomIn,
            P = l.zoomOut,
            O = l.close,
            M = l.left,
            I = l.right,
            L = ''.concat(a, '-operations-operation'),
            z = ''.concat(a, '-operations-icon'),
            A = [
              { icon: O, onClick: b, type: 'close' },
              { icon: k, onClick: C, type: 'zoomIn', disabled: p === j },
              { icon: P, onClick: Z, type: 'zoomOut', disabled: p === R },
              { icon: N, onClick: x, type: 'rotateRight' },
              { icon: w, onClick: E, type: 'rotateLeft' },
            ],
            D = i.createElement(
              i.Fragment,
              null,
              u &&
                i.createElement(
                  i.Fragment,
                  null,
                  i.createElement(
                    'div',
                    {
                      className: h()(
                        ''.concat(a, '-switch-left'),
                        (0, d.Z)(
                          {},
                          ''.concat(a, '-switch-left-disabled'),
                          0 === m,
                        ),
                      ),
                      onClick: g,
                    },
                    M,
                  ),
                  i.createElement(
                    'div',
                    {
                      className: h()(
                        ''.concat(a, '-switch-right'),
                        (0, d.Z)(
                          {},
                          ''.concat(a, '-switch-right-disabled'),
                          m === v - 1,
                        ),
                      ),
                      onClick: y,
                    },
                    I,
                  ),
                ),
              i.createElement(
                'ul',
                { className: ''.concat(a, '-operations') },
                f &&
                  i.createElement(
                    'li',
                    { className: ''.concat(a, '-operations-progress') },
                    null !==
                      (t = null === s || void 0 === s ? void 0 : s(m + 1, v)) &&
                      void 0 !== t
                      ? t
                      : ''.concat(m + 1, ' / ').concat(v),
                  ),
                A.map(function (e) {
                  var t,
                    n = e.icon,
                    r = e.onClick,
                    o = e.type,
                    c = e.disabled;
                  return i.createElement(
                    'li',
                    {
                      className: h()(
                        L,
                        ((t = {}),
                        (0, d.Z)(
                          t,
                          ''.concat(a, '-operations-operation-').concat(o),
                          !0,
                        ),
                        (0, d.Z)(
                          t,
                          ''.concat(a, '-operations-operation-disabled'),
                          !!c,
                        ),
                        t),
                      ),
                      onClick: r,
                      key: o,
                    },
                    i.isValidElement(n)
                      ? i.cloneElement(n, { className: z })
                      : n,
                  );
                }),
              ),
            );
          return i.createElement(
            S.Z,
            { visible: n, motionName: r },
            function (e) {
              var t = e.className,
                n = e.style;
              return i.createElement(
                T.Z,
                {
                  open: !0,
                  getContainer: null !== o && void 0 !== o ? o : document.body,
                },
                i.createElement(
                  'div',
                  {
                    className: h()(''.concat(a, '-operations-wrapper'), t, c),
                    style: n,
                  },
                  D,
                ),
              );
            },
          );
        },
        z = L,
        A = n(90468),
        D = { x: 0, y: 0, rotate: 0, scale: 1 };
      function B(e) {
        var t = (0, i.useRef)(null),
          n = (0, i.useRef)([]),
          r = (0, i.useState)(D),
          o = (0, m.Z)(r, 2),
          c = o[0],
          l = o[1],
          s = function () {
            l(D);
          },
          u = function (e) {
            null === t.current &&
              ((n.current = []),
              (t.current = (0, A.Z)(function () {
                l(function (e) {
                  var r = e;
                  return (
                    n.current.forEach(function (e) {
                      r = (0, a.Z)((0, a.Z)({}, r), e);
                    }),
                    (t.current = null),
                    r
                  );
                });
              }))),
              n.current.push((0, a.Z)((0, a.Z)({}, c), e));
          },
          f = function (t, n, r) {
            var o = e.current,
              a = o.width,
              i = o.height,
              l = o.offsetWidth,
              s = o.offsetHeight,
              f = o.offsetLeft,
              d = o.offsetTop,
              m = t,
              v = c.scale * t;
            v > j
              ? ((m = j / c.scale), (v = j))
              : v < R && ((m = R / c.scale), (v = R));
            var p = null !== n && void 0 !== n ? n : innerWidth / 2,
              h = null !== r && void 0 !== r ? r : innerHeight / 2,
              y = m - 1,
              b = y * a * 0.5,
              C = y * i * 0.5,
              Z = y * (p - c.x - f),
              x = y * (h - c.y - d),
              E = c.x - (Z - b),
              w = c.y - (x - C);
            if (t < 1 && 1 === v) {
              var N = l * v,
                k = s * v,
                P = g(),
                O = P.width,
                S = P.height;
              N <= O && k <= S && ((E = 0), (w = 0));
            }
            u({ x: E, y: w, scale: v });
          };
        return {
          transform: c,
          resetTransform: s,
          updateTransform: u,
          dispatchZoonChange: f,
        };
      }
      function H(e, t, n, r) {
        var o = t + n,
          a = (n - r) / 2;
        if (n > r) {
          if (t > 0) return (0, d.Z)({}, e, a);
          if (t < 0 && o < r) return (0, d.Z)({}, e, -a);
        } else if (t < 0 || o > r) return (0, d.Z)({}, e, t < 0 ? a : -a);
        return {};
      }
      function F(e, t, n, r) {
        var o = g(),
          i = o.width,
          c = o.height,
          l = null;
        return (
          e <= i && t <= c
            ? (l = { x: 0, y: 0 })
            : (e > i || t > c) &&
              (l = (0, a.Z)((0, a.Z)({}, H('x', n, e, i)), H('y', r, t, c))),
          l
        );
      }
      var V = [
          'prefixCls',
          'src',
          'alt',
          'onClose',
          'afterClose',
          'visible',
          'icons',
          'rootClassName',
          'getContainer',
          'countRender',
          'scaleStep',
          'transitionName',
          'maskTransitionName',
        ],
        _ = function (e) {
          var t = e.prefixCls,
            n = e.src,
            o = e.alt,
            c = e.onClose,
            l = (e.afterClose, e.visible),
            s = e.icons,
            u = void 0 === s ? {} : s,
            f = e.rootClassName,
            p = e.getContainer,
            g = e.countRender,
            y = e.scaleStep,
            b = void 0 === y ? 0.5 : y,
            w = e.transitionName,
            k = void 0 === w ? 'zoom' : w,
            P = e.maskTransitionName,
            O = void 0 === P ? 'fade' : P,
            S = (0, v.Z)(e, V),
            T = (0, i.useRef)(),
            R = (0, i.useRef)({
              deltaX: 0,
              deltaY: 0,
              transformX: 0,
              transformY: 0,
            }),
            j = (0, i.useState)(!1),
            L = (0, m.Z)(j, 2),
            A = L[0],
            D = L[1],
            H = (0, i.useContext)(N),
            _ = H.previewUrls,
            W = H.current,
            U = H.isPreviewGroup,
            K = H.setCurrent,
            G = _.size,
            Y = Array.from(_.keys()),
            X = Y.indexOf(W),
            q = U ? _.get(W) : n,
            J = U && G > 1,
            Q = U && G >= 1,
            $ = B(T),
            ee = $.transform,
            te = $.resetTransform,
            ne = $.updateTransform,
            re = $.dispatchZoonChange,
            oe = ee.rotate,
            ae = ee.scale,
            ie = h()((0, d.Z)({}, ''.concat(t, '-moving'), A)),
            ce = function () {
              te();
            },
            le = function () {
              re(M + b);
            },
            se = function () {
              re(M - b);
            },
            ue = function () {
              ne({ rotate: oe + 90 });
            },
            fe = function () {
              ne({ rotate: oe - 90 });
            },
            de = function (e) {
              e.preventDefault(), e.stopPropagation(), X > 0 && K(Y[X - 1]);
            },
            me = function (e) {
              e.preventDefault(), e.stopPropagation(), X < G - 1 && K(Y[X + 1]);
            },
            ve = function () {
              if (l && A) {
                D(!1);
                var e = R.current,
                  t = e.transformX,
                  n = e.transformY,
                  r = ee.x !== t && ee.y !== n;
                if (!r) return;
                var o = T.current.offsetWidth * ae,
                  i = T.current.offsetHeight * ae,
                  c = T.current.getBoundingClientRect(),
                  s = c.left,
                  u = c.top,
                  f = oe % 180 !== 0,
                  d = F(f ? i : o, f ? o : i, s, u);
                d && ne((0, a.Z)({}, d));
              }
            },
            pe = function (e) {
              0 === e.button &&
                (e.preventDefault(),
                e.stopPropagation(),
                (R.current = {
                  deltaX: e.pageX - ee.x,
                  deltaY: e.pageY - ee.y,
                  transformX: ee.x,
                  transformY: ee.y,
                }),
                D(!0));
            },
            he = function (e) {
              l &&
                A &&
                ne({
                  x: e.pageX - R.current.deltaX,
                  y: e.pageY - R.current.deltaY,
                });
            },
            ge = function (e) {
              if (l && 0 != e.deltaY) {
                var t = Math.abs(e.deltaY / 100),
                  n = Math.min(t, I),
                  r = M + n * b;
                e.deltaY > 0 && (r = M / r), re(r, e.clientX, e.clientY);
              }
            },
            ye = (0, i.useCallback)(
              function (e) {
                l &&
                  J &&
                  (e.keyCode === x.Z.LEFT
                    ? X > 0 && K(Y[X - 1])
                    : e.keyCode === x.Z.RIGHT && X < G - 1 && K(Y[X + 1]));
              },
              [X, G, Y, K, J, l],
            ),
            be = function (e) {
              l &&
                (1 !== ae
                  ? ne({ x: 0, y: 0, scale: 1 })
                  : re(M + b, e.clientX, e.clientY));
            };
          return (
            (0, i.useEffect)(
              function () {
                var e,
                  t,
                  n = (0, Z.Z)(window, 'mouseup', ve, !1),
                  r = (0, Z.Z)(window, 'mousemove', he, !1),
                  o = (0, Z.Z)(window, 'keydown', ye, !1);
                try {
                  window.top !== window.self &&
                    ((e = (0, Z.Z)(window.top, 'mouseup', ve, !1)),
                    (t = (0, Z.Z)(window.top, 'mousemove', he, !1)));
                } catch (a) {
                  (0, E.Kp)(!1, '[rc-image] '.concat(a));
                }
                return function () {
                  var a, i;
                  n.remove(),
                    r.remove(),
                    o.remove(),
                    null === (a = e) || void 0 === a || a.remove(),
                    null === (i = t) || void 0 === i || i.remove();
                };
              },
              [l, A, ye],
            ),
            i.createElement(
              i.Fragment,
              null,
              i.createElement(
                C.Z,
                (0, r.Z)(
                  {
                    transitionName: k,
                    maskTransitionName: O,
                    closable: !1,
                    keyboard: !0,
                    prefixCls: t,
                    onClose: c,
                    afterClose: ce,
                    visible: l,
                    wrapClassName: ie,
                    rootClassName: f,
                    getContainer: p,
                  },
                  S,
                ),
                i.createElement(
                  'div',
                  { className: ''.concat(t, '-img-wrapper') },
                  i.createElement('img', {
                    width: e.width,
                    height: e.height,
                    onWheel: ge,
                    onMouseDown: pe,
                    onDoubleClick: be,
                    ref: T,
                    className: ''.concat(t, '-img'),
                    src: q,
                    alt: o,
                    style: {
                      transform: 'translate3d('
                        .concat(ee.x, 'px, ')
                        .concat(ee.y, 'px, 0) scale3d(')
                        .concat(ae, ', ')
                        .concat(ae, ', 1) rotate(')
                        .concat(oe, 'deg)'),
                    },
                  }),
                ),
              ),
              i.createElement(z, {
                visible: l,
                maskTransitionName: O,
                getContainer: p,
                prefixCls: t,
                rootClassName: f,
                icons: u,
                countRender: g,
                showSwitch: J,
                showProgress: Q,
                current: X,
                count: G,
                scale: ae,
                onSwitchLeft: de,
                onSwitchRight: me,
                onZoomIn: le,
                onZoomOut: se,
                onRotateRight: ue,
                onRotateLeft: fe,
                onClose: c,
              }),
            )
          );
        },
        W = _,
        U = [
          'src',
          'alt',
          'onPreviewClose',
          'prefixCls',
          'previewPrefixCls',
          'placeholder',
          'fallback',
          'width',
          'height',
          'style',
          'preview',
          'className',
          'onClick',
          'onError',
          'wrapperClassName',
          'wrapperStyle',
          'rootClassName',
          'crossOrigin',
          'decoding',
          'loading',
          'referrerPolicy',
          'sizes',
          'srcSet',
          'useMap',
          'draggable',
        ],
        K = [
          'src',
          'visible',
          'onVisibleChange',
          'getContainer',
          'mask',
          'maskClassName',
          'icons',
          'scaleStep',
        ],
        G = 0,
        Y = function (e) {
          var t,
            n = e.src,
            c = e.alt,
            l = e.onPreviewClose,
            s = e.prefixCls,
            u = void 0 === s ? 'rc-image' : s,
            f = e.previewPrefixCls,
            p = void 0 === f ? ''.concat(u, '-preview') : f,
            g = e.placeholder,
            C = e.fallback,
            Z = e.width,
            x = e.height,
            E = e.style,
            w = e.preview,
            k = void 0 === w || w,
            P = e.className,
            O = e.onClick,
            S = e.onError,
            T = e.wrapperClassName,
            R = e.wrapperStyle,
            j = e.rootClassName,
            M = e.crossOrigin,
            I = e.decoding,
            L = e.loading,
            z = e.referrerPolicy,
            A = e.sizes,
            D = e.srcSet,
            B = e.useMap,
            H = e.draggable,
            F = (0, v.Z)(e, U),
            V = g && !0 !== g,
            _ = 'object' === (0, o.Z)(k) ? k : {},
            Y = _.src,
            X = _.visible,
            q = void 0 === X ? void 0 : X,
            J = _.onVisibleChange,
            Q = void 0 === J ? l : J,
            $ = _.getContainer,
            ee = void 0 === $ ? void 0 : $,
            te = _.mask,
            ne = _.maskClassName,
            re = _.icons,
            oe = _.scaleStep,
            ae = (0, v.Z)(_, K),
            ie = null !== Y && void 0 !== Y ? Y : n,
            ce = void 0 !== q,
            le = (0, b.Z)(!!q, { value: q, onChange: Q }),
            se = (0, m.Z)(le, 2),
            ue = se[0],
            fe = se[1],
            de = (0, i.useState)(V ? 'loading' : 'normal'),
            me = (0, m.Z)(de, 2),
            ve = me[0],
            pe = me[1],
            he = (0, i.useState)(null),
            ge = (0, m.Z)(he, 2),
            ye = ge[0],
            be = ge[1],
            Ce = 'error' === ve,
            Ze = i.useContext(N),
            xe = Ze.isPreviewGroup,
            Ee = Ze.setCurrent,
            we = Ze.setShowPreview,
            Ne = Ze.setMousePosition,
            ke = Ze.registerImage,
            Pe = i.useState(function () {
              return (G += 1), G;
            }),
            Oe = (0, m.Z)(Pe, 1),
            Se = Oe[0],
            Te = !!k,
            Re = i.useRef(!1),
            je = function () {
              pe('normal');
            },
            Me = function (e) {
              S && S(e), pe('error');
            },
            Ie = function (e) {
              if (!ce) {
                var t = y(e.target),
                  n = t.left,
                  r = t.top;
                xe ? (Ee(Se), Ne({ x: n, y: r })) : be({ x: n, y: r });
              }
              xe ? we(!0) : fe(!0), O && O(e);
            },
            Le = function (e) {
              e.stopPropagation(), fe(!1), ce || be(null);
            },
            ze = function (e) {
              (Re.current = !1),
                'loading' === ve &&
                  null !== e &&
                  void 0 !== e &&
                  e.complete &&
                  (e.naturalWidth || e.naturalHeight) &&
                  ((Re.current = !0), je());
            };
          i.useEffect(function () {
            var e = ke(Se, ie);
            return e;
          }, []),
            i.useEffect(
              function () {
                ke(Se, ie, Te);
              },
              [ie, Te],
            ),
            i.useEffect(
              function () {
                Ce && pe('normal'), V && !Re.current && pe('loading');
              },
              [n],
            );
          var Ae = h()(u, T, j, (0, d.Z)({}, ''.concat(u, '-error'), Ce)),
            De = Ce && C ? C : ie,
            Be = {
              crossOrigin: M,
              decoding: I,
              draggable: H,
              loading: L,
              referrerPolicy: z,
              sizes: A,
              srcSet: D,
              useMap: B,
              alt: c,
              className: h()(
                ''.concat(u, '-img'),
                (0, d.Z)({}, ''.concat(u, '-img-placeholder'), !0 === g),
                P,
              ),
              style: (0, a.Z)({ height: x }, E),
            };
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              'div',
              (0, r.Z)({}, F, {
                className: Ae,
                onClick: Te ? Ie : O,
                style: (0, a.Z)({ width: Z, height: x }, R),
              }),
              i.createElement(
                'img',
                (0, r.Z)(
                  {},
                  Be,
                  { ref: ze },
                  Ce && C ? { src: C } : { onLoad: je, onError: Me, src: n },
                  { width: Z, height: x },
                ),
              ),
              'loading' === ve &&
                i.createElement(
                  'div',
                  {
                    'aria-hidden': 'true',
                    className: ''.concat(u, '-placeholder'),
                  },
                  g,
                ),
              te &&
                Te &&
                i.createElement(
                  'div',
                  {
                    className: h()(''.concat(u, '-mask'), ne),
                    style: {
                      display:
                        'none' ===
                        (null === (t = Be.style) || void 0 === t
                          ? void 0
                          : t.display)
                          ? 'none'
                          : void 0,
                    },
                  },
                  te,
                ),
            ),
            !xe &&
              Te &&
              i.createElement(
                W,
                (0, r.Z)(
                  {
                    'aria-hidden': !ue,
                    visible: ue,
                    prefixCls: p,
                    onClose: Le,
                    mousePosition: ye,
                    src: De,
                    alt: c,
                    getContainer: ee,
                    icons: re,
                    scaleStep: oe,
                    rootClassName: j,
                  },
                  ae,
                ),
              ),
          );
        };
      (Y.PreviewGroup = O), (Y.displayName = 'Image');
      var X = Y,
        q = X,
        J = n(9054),
        Q = n(33387),
        $ = Q.Z,
        ee = n(31064),
        te = n(54549),
        ne = n(67724),
        re = n(8812),
        oe = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'defs',
                attrs: {},
                children: [{ tag: 'style', attrs: {} }],
              },
              {
                tag: 'path',
                attrs: {
                  d: 'M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z',
                },
              },
              {
                tag: 'path',
                attrs: {
                  d: 'M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z',
                },
              },
            ],
          },
          name: 'rotate-left',
          theme: 'outlined',
        },
        ae = oe,
        ie = function (e, t) {
          return i.createElement(
            s.Z,
            (0, a.Z)((0, a.Z)({}, e), {}, { ref: t, icon: ae }),
          );
        };
      ie.displayName = 'RotateLeftOutlined';
      var ce = i.forwardRef(ie),
        le = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'defs',
                attrs: {},
                children: [{ tag: 'style', attrs: {} }],
              },
              {
                tag: 'path',
                attrs: {
                  d: 'M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z',
                },
              },
              {
                tag: 'path',
                attrs: {
                  d: 'M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z',
                },
              },
            ],
          },
          name: 'rotate-right',
          theme: 'outlined',
        },
        se = le,
        ue = function (e, t) {
          return i.createElement(
            s.Z,
            (0, a.Z)((0, a.Z)({}, e), {}, { ref: t, icon: se }),
          );
        };
      ue.displayName = 'RotateRightOutlined';
      var fe = i.forwardRef(ue),
        de = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z',
                },
              },
            ],
          },
          name: 'zoom-in',
          theme: 'outlined',
        },
        me = de,
        ve = function (e, t) {
          return i.createElement(
            s.Z,
            (0, a.Z)((0, a.Z)({}, e), {}, { ref: t, icon: me }),
          );
        };
      ve.displayName = 'ZoomInOutlined';
      var pe = i.forwardRef(ve),
        he = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z',
                },
              },
            ],
          },
          name: 'zoom-out',
          theme: 'outlined',
        },
        ge = he,
        ye = function (e, t) {
          return i.createElement(
            s.Z,
            (0, a.Z)((0, a.Z)({}, e), {}, { ref: t, icon: ge }),
          );
        };
      ye.displayName = 'ZoomOutOutlined';
      var be = i.forwardRef(ye),
        Ce = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        },
        Ze = {
          rotateLeft: i.createElement(ce, null),
          rotateRight: i.createElement(fe, null),
          zoomIn: i.createElement(pe, null),
          zoomOut: i.createElement(be, null),
          close: i.createElement(te.Z, null),
          left: i.createElement(ne.Z, null),
          right: i.createElement(re.Z, null),
        },
        xe = function (e) {
          var t = e.previewPrefixCls,
            n = e.preview,
            a = Ce(e, ['previewPrefixCls', 'preview']),
            c = i.useContext(J.E_),
            l = c.getPrefixCls,
            s = l('image-preview', t),
            u = l(),
            f = i.useMemo(
              function () {
                if (!1 === n) return n;
                var e = 'object' === (0, o.Z)(n) ? n : {};
                return (0, r.Z)((0, r.Z)({}, e), {
                  transitionName: (0, ee.mL)(u, 'zoom', e.transitionName),
                  maskTransitionName: (0, ee.mL)(
                    u,
                    'fade',
                    e.maskTransitionName,
                  ),
                });
              },
              [n],
            );
          return i.createElement(
            q.PreviewGroup,
            (0, r.Z)({ preview: f, previewPrefixCls: s, icons: Ze }, a),
          );
        },
        Ee = xe,
        we = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        },
        Ne = function (e) {
          var t = e.prefixCls,
            n = e.preview,
            a = we(e, ['prefixCls', 'preview']),
            c = (0, i.useContext)(J.E_),
            l = c.getPrefixCls,
            s = c.locale,
            u = void 0 === s ? $ : s,
            d = c.getPopupContainer,
            m = l('image', t),
            v = l(),
            p = u.Image || $.Image,
            h = i.useMemo(
              function () {
                if (!1 === n) return n;
                var e = 'object' === (0, o.Z)(n) ? n : {},
                  t = e.getContainer,
                  a = we(e, ['getContainer']);
                return (0, r.Z)(
                  (0, r.Z)(
                    {
                      mask: i.createElement(
                        'div',
                        { className: ''.concat(m, '-mask-info') },
                        i.createElement(f, null),
                        null === p || void 0 === p ? void 0 : p.preview,
                      ),
                      icons: Ze,
                    },
                    a,
                  ),
                  {
                    getContainer: t || d,
                    transitionName: (0, ee.mL)(v, 'zoom', e.transitionName),
                    maskTransitionName: (0, ee.mL)(
                      v,
                      'fade',
                      e.maskTransitionName,
                    ),
                  },
                );
              },
              [n, p],
            );
          return i.createElement(q, (0, r.Z)({ prefixCls: m, preview: h }, a));
        };
      Ne.PreviewGroup = Ee;
      var ke = Ne;
    },
    90577: function (e, t, n) {
      'use strict';
      n(38663), n(53469);
    },
    78930: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return ae;
        },
      });
      var r = n(85061),
        o = n(22122),
        a = n(15873),
        i = n(73218),
        c = n(57119),
        l = n(68628),
        s = n(6393),
        u = n(67294),
        f = n(63224),
        d = n(96156),
        m = n(35510),
        v = n.n(m),
        p = n(28481),
        h = n(66493),
        g = n(48429),
        y = n(98791);
      function b(e) {
        return !(!e || !e.then);
      }
      var C,
        Z = function (e) {
          var t = u.useRef(!1),
            n = u.useRef(null),
            r = (0, h.Z)(!1),
            a = (0, p.Z)(r, 2),
            i = a[0],
            c = a[1],
            l = e.close,
            s = function () {
              null === l || void 0 === l || l.apply(void 0, arguments);
            };
          u.useEffect(function () {
            var t = null;
            return (
              e.autoFocus &&
                (t = setTimeout(function () {
                  var e;
                  null === (e = n.current) || void 0 === e || e.focus();
                })),
              function () {
                t && clearTimeout(t);
              }
            );
          }, []);
          var f = function (e) {
              b(e) &&
                (c(!0),
                e.then(
                  function () {
                    c(!1, !0), s.apply(void 0, arguments), (t.current = !1);
                  },
                  function (e) {
                    console.error(e), c(!1, !0), (t.current = !1);
                  },
                ));
            },
            d = function (n) {
              var r = e.actionFn;
              if (!t.current)
                if (((t.current = !0), r)) {
                  var o;
                  if (e.emitEvent) {
                    if (((o = r(n)), e.quitOnNullishReturnValue && !b(o)))
                      return (t.current = !1), void s(n);
                  } else if (r.length) (o = r(l)), (t.current = !1);
                  else if (((o = r()), !o)) return void s();
                  f(o);
                } else s();
            },
            m = e.type,
            v = e.children,
            C = e.prefixCls,
            Z = e.buttonProps;
          return u.createElement(
            g.Z,
            (0, o.Z)(
              {},
              (0, y.n)(m),
              { onClick: d, loading: i, prefixCls: C },
              Z,
              { ref: n },
            ),
            v,
          );
        },
        x = Z,
        E = n(31064),
        w = n(54549),
        N = n(15984),
        k = n(9054),
        P = n(27495),
        O = n(56701),
        S = n(1358),
        T = n(55835),
        R = n(26016),
        j = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        },
        M = function (e) {
          (C = { x: e.pageX, y: e.pageY }),
            setTimeout(function () {
              C = null;
            }, 100);
        };
      (0, T.jD)() && document.documentElement.addEventListener('click', M, !0);
      var I = function (e) {
          var t,
            n,
            r = u.useContext(k.E_),
            a = r.getPopupContainer,
            i = r.getPrefixCls,
            c = r.direction,
            l = function (t) {
              var n = e.onCancel;
              null === n || void 0 === n || n(t);
            },
            s = function (t) {
              var n = e.onOk;
              null === n || void 0 === n || n(t);
            },
            f = e.prefixCls,
            m = e.footer,
            p = e.visible,
            h = e.open,
            b = void 0 !== h && h,
            Z = e.wrapClassName,
            x = e.centered,
            T = e.getContainer,
            M = e.closeIcon,
            I = e.focusTriggerAfterClose,
            L = void 0 === I || I,
            z = e.width,
            A = void 0 === z ? 520 : z,
            D = j(e, [
              'prefixCls',
              'footer',
              'visible',
              'open',
              'wrapClassName',
              'centered',
              'getContainer',
              'closeIcon',
              'focusTriggerAfterClose',
              'width',
            ]),
            B = i('modal', f),
            H = i(),
            F = u.createElement(
              O.Z,
              { componentName: 'Modal', defaultLocale: (0, R.A)() },
              function (t) {
                var n = e.okText,
                  r = e.okType,
                  a = void 0 === r ? 'primary' : r,
                  i = e.cancelText,
                  c = e.confirmLoading,
                  f = void 0 !== c && c;
                return u.createElement(
                  u.Fragment,
                  null,
                  u.createElement(
                    g.Z,
                    (0, o.Z)({ onClick: l }, e.cancelButtonProps),
                    i || t.cancelText,
                  ),
                  u.createElement(
                    g.Z,
                    (0, o.Z)(
                      {},
                      (0, y.n)(a),
                      { loading: f, onClick: s },
                      e.okButtonProps,
                    ),
                    null !== n && void 0 !== n ? n : t.okText,
                  ),
                );
              },
            ),
            V = u.createElement(
              'span',
              { className: ''.concat(B, '-close-x') },
              M ||
                u.createElement(w.Z, {
                  className: ''.concat(B, '-close-icon'),
                }),
            ),
            _ = v()(
              Z,
              ((t = {}),
              (0, d.Z)(t, ''.concat(B, '-centered'), !!x),
              (0, d.Z)(t, ''.concat(B, '-wrap-rtl'), 'rtl' === c),
              t),
            );
          return u.createElement(
            S.BR,
            null,
            u.createElement(
              P.Ux,
              { status: !0, override: !0 },
              u.createElement(
                N.Z,
                (0, o.Z)({ width: A }, D, {
                  getContainer: void 0 === T ? a : T,
                  prefixCls: B,
                  wrapClassName: _,
                  footer: void 0 === m ? F : m,
                  visible: b || p,
                  mousePosition:
                    null !== (n = D.mousePosition) && void 0 !== n ? n : C,
                  onClose: l,
                  closeIcon: V,
                  focusTriggerAfterClose: L,
                  transitionName: (0, E.mL)(H, 'zoom', e.transitionName),
                  maskTransitionName: (0, E.mL)(
                    H,
                    'fade',
                    e.maskTransitionName,
                  ),
                }),
              ),
            ),
          );
        },
        L = I,
        z = function (e) {
          var t = e.icon,
            n = e.onCancel,
            r = e.onOk,
            o = e.close,
            a = e.zIndex,
            i = e.afterClose,
            c = e.visible,
            l = e.open,
            s = e.keyboard,
            m = e.centered,
            p = e.getContainer,
            h = e.maskStyle,
            g = e.okText,
            y = e.okButtonProps,
            b = e.cancelText,
            C = e.cancelButtonProps,
            Z = e.direction,
            w = e.prefixCls,
            N = e.wrapClassName,
            k = e.rootPrefixCls,
            P = e.iconPrefixCls,
            O = e.bodyStyle,
            S = e.closable,
            T = void 0 !== S && S,
            R = e.closeIcon,
            j = e.modalRender,
            M = e.focusTriggerAfterClose;
          var I = e.okType || 'primary',
            z = ''.concat(w, '-confirm'),
            A = !('okCancel' in e) || e.okCancel,
            D = e.width || 416,
            B = e.style || {},
            H = void 0 === e.mask || e.mask,
            F = void 0 !== e.maskClosable && e.maskClosable,
            V = null !== e.autoFocusButton && (e.autoFocusButton || 'ok'),
            _ = v()(
              z,
              ''.concat(z, '-').concat(e.type),
              (0, d.Z)({}, ''.concat(z, '-rtl'), 'rtl' === Z),
              e.className,
            ),
            W =
              A &&
              u.createElement(
                x,
                {
                  actionFn: n,
                  close: o,
                  autoFocus: 'cancel' === V,
                  buttonProps: C,
                  prefixCls: ''.concat(k, '-btn'),
                },
                b,
              );
          return u.createElement(
            f.ZP,
            { prefixCls: k, iconPrefixCls: P, direction: Z },
            u.createElement(
              L,
              {
                prefixCls: w,
                className: _,
                wrapClassName: v()(
                  (0, d.Z)({}, ''.concat(z, '-centered'), !!e.centered),
                  N,
                ),
                onCancel: function () {
                  return null === o || void 0 === o
                    ? void 0
                    : o({ triggerCancel: !0 });
                },
                open: l || c,
                title: '',
                footer: '',
                transitionName: (0, E.mL)(k, 'zoom', e.transitionName),
                maskTransitionName: (0, E.mL)(k, 'fade', e.maskTransitionName),
                mask: H,
                maskClosable: F,
                maskStyle: h,
                style: B,
                bodyStyle: O,
                width: D,
                zIndex: a,
                afterClose: i,
                keyboard: s,
                centered: m,
                getContainer: p,
                closable: T,
                closeIcon: R,
                modalRender: j,
                focusTriggerAfterClose: M,
              },
              u.createElement(
                'div',
                { className: ''.concat(z, '-body-wrapper') },
                u.createElement(
                  'div',
                  { className: ''.concat(z, '-body') },
                  t,
                  void 0 === e.title
                    ? null
                    : u.createElement(
                        'span',
                        { className: ''.concat(z, '-title') },
                        e.title,
                      ),
                  u.createElement(
                    'div',
                    { className: ''.concat(z, '-content') },
                    e.content,
                  ),
                ),
                u.createElement(
                  'div',
                  { className: ''.concat(z, '-btns') },
                  W,
                  u.createElement(
                    x,
                    {
                      type: I,
                      actionFn: r,
                      close: o,
                      autoFocus: 'ok' === V,
                      buttonProps: y,
                      prefixCls: ''.concat(k, '-btn'),
                    },
                    g,
                  ),
                ),
              ),
            ),
          );
        },
        A = z,
        D = [],
        B = D,
        H = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
              t.indexOf(r[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                (n[r[o]] = e[r[o]]);
          }
          return n;
        },
        F = '';
      function V() {
        return F;
      }
      function _(e) {
        var t,
          n = document.createDocumentFragment(),
          a = (0, o.Z)((0, o.Z)({}, e), { close: l, open: !0 });
        function i() {
          for (var t = arguments.length, o = new Array(t), a = 0; a < t; a++)
            o[a] = arguments[a];
          var i = o.some(function (e) {
            return e && e.triggerCancel;
          });
          e.onCancel &&
            i &&
            e.onCancel.apply(e, [function () {}].concat((0, r.Z)(o.slice(1))));
          for (var c = 0; c < B.length; c++) {
            var u = B[c];
            if (u === l) {
              B.splice(c, 1);
              break;
            }
          }
          (0, s.v)(n);
        }
        function c(e) {
          var r = e.okText,
            a = e.cancelText,
            i = e.prefixCls,
            c = H(e, ['okText', 'cancelText', 'prefixCls']);
          clearTimeout(t),
            (t = setTimeout(function () {
              var e = (0, R.A)(),
                t = (0, f.w6)(),
                l = t.getPrefixCls,
                d = t.getIconPrefixCls,
                m = l(void 0, V()),
                v = i || ''.concat(m, '-modal'),
                p = d();
              (0,
              s.s)(u.createElement(A, (0, o.Z)({}, c, { prefixCls: v, rootPrefixCls: m, iconPrefixCls: p, okText: r || (c.okCancel ? e.okText : e.justOkText), cancelText: a || e.cancelText })), n);
            }));
        }
        function l() {
          for (
            var t = this, n = arguments.length, r = new Array(n), l = 0;
            l < n;
            l++
          )
            r[l] = arguments[l];
          (a = (0, o.Z)((0, o.Z)({}, a), {
            open: !1,
            afterClose: function () {
              'function' === typeof e.afterClose && e.afterClose(),
                i.apply(t, r);
            },
          })),
            a.visible && delete a.visible,
            c(a);
        }
        function d(e) {
          (a = 'function' === typeof e ? e(a) : (0, o.Z)((0, o.Z)({}, a), e)),
            c(a);
        }
        return c(a), B.push(l), { destroy: l, update: d };
      }
      function W(e) {
        return (0, o.Z)(
          (0, o.Z)({ icon: u.createElement(c.Z, null), okCancel: !1 }, e),
          { type: 'warning' },
        );
      }
      function U(e) {
        return (0, o.Z)(
          (0, o.Z)({ icon: u.createElement(l.Z, null), okCancel: !1 }, e),
          { type: 'info' },
        );
      }
      function K(e) {
        return (0, o.Z)(
          (0, o.Z)({ icon: u.createElement(a.Z, null), okCancel: !1 }, e),
          { type: 'success' },
        );
      }
      function G(e) {
        return (0, o.Z)(
          (0, o.Z)({ icon: u.createElement(i.Z, null), okCancel: !1 }, e),
          { type: 'error' },
        );
      }
      function Y(e) {
        return (0, o.Z)(
          (0, o.Z)({ icon: u.createElement(c.Z, null), okCancel: !0 }, e),
          { type: 'confirm' },
        );
      }
      function X(e) {
        var t = e.rootPrefixCls;
        F = t;
      }
      function q() {
        var e = u.useState([]),
          t = (0, p.Z)(e, 2),
          n = t[0],
          o = t[1],
          a = u.useCallback(function (e) {
            return (
              o(function (t) {
                return [].concat((0, r.Z)(t), [e]);
              }),
              function () {
                o(function (t) {
                  return t.filter(function (t) {
                    return t !== e;
                  });
                });
              }
            );
          }, []);
        return [n, a];
      }
      var J = n(33387),
        Q = function (e, t) {
          var n = e.afterClose,
            a = e.config,
            i = u.useState(!0),
            c = (0, p.Z)(i, 2),
            l = c[0],
            s = c[1],
            f = u.useState(a),
            d = (0, p.Z)(f, 2),
            m = d[0],
            v = d[1],
            h = u.useContext(k.E_),
            g = h.direction,
            y = h.getPrefixCls,
            b = y('modal'),
            C = y(),
            Z = function () {
              s(!1);
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              var o = t.some(function (e) {
                return e && e.triggerCancel;
              });
              m.onCancel &&
                o &&
                m.onCancel.apply(
                  m,
                  [function () {}].concat((0, r.Z)(t.slice(1))),
                );
            };
          return (
            u.useImperativeHandle(t, function () {
              return {
                destroy: Z,
                update: function (e) {
                  v(function (t) {
                    return (0, o.Z)((0, o.Z)({}, t), e);
                  });
                },
              };
            }),
            u.createElement(
              O.Z,
              { componentName: 'Modal', defaultLocale: J.Z.Modal },
              function (e) {
                return u.createElement(
                  A,
                  (0, o.Z)({ prefixCls: b, rootPrefixCls: C }, m, {
                    close: Z,
                    open: l,
                    afterClose: n,
                    okText: m.okText || (m.okCancel ? e.okText : e.justOkText),
                    direction: g,
                    cancelText: m.cancelText || e.cancelText,
                  }),
                );
              },
            )
          );
        },
        $ = u.forwardRef(Q),
        ee = 0,
        te = u.memo(
          u.forwardRef(function (e, t) {
            var n = q(),
              r = (0, p.Z)(n, 2),
              o = r[0],
              a = r[1];
            return (
              u.useImperativeHandle(
                t,
                function () {
                  return { patchElement: a };
                },
                [],
              ),
              u.createElement(u.Fragment, null, o)
            );
          }),
        );
      function ne() {
        var e = u.useRef(null),
          t = u.useState([]),
          n = (0, p.Z)(t, 2),
          o = n[0],
          a = n[1];
        u.useEffect(
          function () {
            if (o.length) {
              var e = (0, r.Z)(o);
              e.forEach(function (e) {
                e();
              }),
                a([]);
            }
          },
          [o],
        );
        var i = u.useCallback(function (t) {
            return function (n) {
              var o;
              ee += 1;
              var i,
                c = u.createRef(),
                l = u.createElement($, {
                  key: 'modal-'.concat(ee),
                  config: t(n),
                  ref: c,
                  afterClose: function () {
                    null === i || void 0 === i || i();
                  },
                });
              return (
                (i =
                  null === (o = e.current) || void 0 === o
                    ? void 0
                    : o.patchElement(l)),
                {
                  destroy: function () {
                    function e() {
                      var e;
                      null === (e = c.current) || void 0 === e || e.destroy();
                    }
                    c.current
                      ? e()
                      : a(function (t) {
                          return [].concat((0, r.Z)(t), [e]);
                        });
                  },
                  update: function (e) {
                    function t() {
                      var t;
                      null === (t = c.current) || void 0 === t || t.update(e);
                    }
                    c.current
                      ? t()
                      : a(function (e) {
                          return [].concat((0, r.Z)(e), [t]);
                        });
                  },
                }
              );
            };
          }, []),
          c = u.useMemo(function () {
            return {
              info: i(U),
              success: i(K),
              error: i(G),
              warning: i(W),
              confirm: i(Y),
            };
          }, []);
        return [c, u.createElement(te, { ref: e })];
      }
      function re(e) {
        return _(W(e));
      }
      var oe = L;
      (oe.useModal = ne),
        (oe.info = function (e) {
          return _(U(e));
        }),
        (oe.success = function (e) {
          return _(K(e));
        }),
        (oe.error = function (e) {
          return _(G(e));
        }),
        (oe.warning = re),
        (oe.warn = re),
        (oe.confirm = function (e) {
          return _(Y(e));
        }),
        (oe.destroyAll = function () {
          while (B.length) {
            var e = B.pop();
            e && e();
          }
        }),
        (oe.config = X);
      var ae = oe;
    },
    26780: function (e, t, n) {
      'use strict';
      n(38663), n(41412), n(13753);
    },
    15984: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return A;
        },
      });
      var r = n(22122),
        o = n(28481),
        a = n(67294),
        i = n.t(a, 2),
        c = n(26083),
        l = n(28991),
        s = n(35510),
        u = n.n(s),
        f = n(90826);
      function d() {
        var e = (0, l.Z)({}, i);
        return e.useId;
      }
      var m = 0;
      function v(e) {
        var t = a.useState('ssr-id'),
          n = (0, o.Z)(t, 2),
          r = n[0],
          i = n[1],
          c = d(),
          l = null === c || void 0 === c ? void 0 : c();
        return (
          a.useEffect(function () {
            if (!c) {
              var e = m;
              (m += 1), i('rc_unique_'.concat(e));
            }
          }, []),
          e || l || r
        );
      }
      var p = n(80207),
        h =
          'accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap',
        g =
          'onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError',
        y = ''
          .concat(h, ' ')
          .concat(g)
          .split(/[\s\n]+/),
        b = 'aria-',
        C = 'data-';
      function Z(e, t) {
        return 0 === e.indexOf(t);
      }
      function x(e) {
        var t,
          n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        t =
          !1 === n
            ? { aria: !0, data: !0, attr: !0 }
            : !0 === n
            ? { aria: !0 }
            : (0, l.Z)({}, n);
        var r = {};
        return (
          Object.keys(e).forEach(function (n) {
            ((t.aria && ('role' === n || Z(n, b))) ||
              (t.data && Z(n, C)) ||
              (t.attr && y.includes(n))) &&
              (r[n] = e[n]);
          }),
          r
        );
      }
      var E = n(80289);
      function w(e) {
        var t = e.prefixCls,
          n = e.style,
          o = e.visible,
          i = e.maskProps,
          c = e.motionName;
        return a.createElement(
          E.Z,
          {
            key: 'mask',
            visible: o,
            motionName: c,
            leavedClassName: ''.concat(t, '-mask-hidden'),
          },
          function (e, o) {
            var c = e.className,
              s = e.style;
            return a.createElement(
              'div',
              (0, r.Z)(
                {
                  ref: o,
                  style: (0, l.Z)((0, l.Z)({}, s), n),
                  className: u()(''.concat(t, '-mask'), c),
                },
                i,
              ),
            );
          },
        );
      }
      function N(e, t, n) {
        var r = t;
        return !r && n && (r = ''.concat(e, '-').concat(n)), r;
      }
      function k(e, t) {
        var n = e['page'.concat(t ? 'Y' : 'X', 'Offset')],
          r = 'scroll'.concat(t ? 'Top' : 'Left');
        if ('number' !== typeof n) {
          var o = e.document;
          (n = o.documentElement[r]), 'number' !== typeof n && (n = o.body[r]);
        }
        return n;
      }
      function P(e) {
        var t = e.getBoundingClientRect(),
          n = { left: t.left, top: t.top },
          r = e.ownerDocument,
          o = r.defaultView || r.parentWindow;
        return (n.left += k(o)), (n.top += k(o, !0)), n;
      }
      var O = a.memo(
          function (e) {
            var t = e.children;
            return t;
          },
          function (e, t) {
            var n = t.shouldUpdate;
            return !n;
          },
        ),
        S = { width: 0, height: 0, overflow: 'hidden', outline: 'none' },
        T = a.forwardRef(function (e, t) {
          var n = e.prefixCls,
            o = e.className,
            i = e.style,
            c = e.title,
            s = e.ariaId,
            f = e.footer,
            d = e.closable,
            m = e.closeIcon,
            v = e.onClose,
            p = e.children,
            h = e.bodyStyle,
            g = e.bodyProps,
            y = e.modalRender,
            b = e.onMouseDown,
            C = e.onMouseUp,
            Z = e.holderRef,
            x = e.visible,
            E = e.forceRender,
            w = e.width,
            N = e.height,
            k = (0, a.useRef)(),
            P = (0, a.useRef)();
          a.useImperativeHandle(t, function () {
            return {
              focus: function () {
                var e;
                null === (e = k.current) || void 0 === e || e.focus();
              },
              changeActive: function (e) {
                var t = document,
                  n = t.activeElement;
                e && n === P.current
                  ? k.current.focus()
                  : e || n !== k.current || P.current.focus();
              },
            };
          });
          var T,
            R,
            j,
            M = {};
          void 0 !== w && (M.width = w),
            void 0 !== N && (M.height = N),
            f &&
              (T = a.createElement(
                'div',
                { className: ''.concat(n, '-footer') },
                f,
              )),
            c &&
              (R = a.createElement(
                'div',
                { className: ''.concat(n, '-header') },
                a.createElement(
                  'div',
                  { className: ''.concat(n, '-title'), id: s },
                  c,
                ),
              )),
            d &&
              (j = a.createElement(
                'button',
                {
                  type: 'button',
                  onClick: v,
                  'aria-label': 'Close',
                  className: ''.concat(n, '-close'),
                },
                m ||
                  a.createElement('span', {
                    className: ''.concat(n, '-close-x'),
                  }),
              ));
          var I = a.createElement(
            'div',
            { className: ''.concat(n, '-content') },
            j,
            R,
            a.createElement(
              'div',
              (0, r.Z)({ className: ''.concat(n, '-body'), style: h }, g),
              p,
            ),
            T,
          );
          return a.createElement(
            'div',
            {
              key: 'dialog-element',
              role: 'dialog',
              'aria-labelledby': c ? s : null,
              'aria-modal': 'true',
              ref: Z,
              style: (0, l.Z)((0, l.Z)({}, i), M),
              className: u()(n, o),
              onMouseDown: b,
              onMouseUp: C,
            },
            a.createElement('div', {
              tabIndex: 0,
              ref: k,
              style: S,
              'aria-hidden': 'true',
            }),
            a.createElement(O, { shouldUpdate: x || E }, y ? y(I) : I),
            a.createElement('div', {
              tabIndex: 0,
              ref: P,
              style: S,
              'aria-hidden': 'true',
            }),
          );
        });
      var R = T,
        j = a.forwardRef(function (e, t) {
          var n = e.prefixCls,
            i = e.title,
            c = e.style,
            s = e.className,
            f = e.visible,
            d = e.forceRender,
            m = e.destroyOnClose,
            v = e.motionName,
            p = e.ariaId,
            h = e.onVisibleChanged,
            g = e.mousePosition,
            y = (0, a.useRef)(),
            b = a.useState(),
            C = (0, o.Z)(b, 2),
            Z = C[0],
            x = C[1],
            w = {};
          function N() {
            var e = P(y.current);
            x(
              g ? ''.concat(g.x - e.left, 'px ').concat(g.y - e.top, 'px') : '',
            );
          }
          return (
            Z && (w.transformOrigin = Z),
            a.createElement(
              E.Z,
              {
                visible: f,
                onVisibleChanged: h,
                onAppearPrepare: N,
                onEnterPrepare: N,
                forceRender: d,
                motionName: v,
                removeOnLeave: m,
                ref: y,
              },
              function (o, f) {
                var d = o.className,
                  m = o.style;
                return a.createElement(
                  R,
                  (0, r.Z)({}, e, {
                    ref: t,
                    title: i,
                    ariaId: p,
                    prefixCls: n,
                    holderRef: f,
                    style: (0, l.Z)((0, l.Z)((0, l.Z)({}, m), c), w),
                    className: u()(s, d),
                  }),
                );
              },
            )
          );
        });
      j.displayName = 'Content';
      var M = j;
      function I(e) {
        var t = e.prefixCls,
          n = void 0 === t ? 'rc-dialog' : t,
          i = e.zIndex,
          c = e.visible,
          s = void 0 !== c && c,
          d = e.keyboard,
          m = void 0 === d || d,
          h = e.focusTriggerAfterClose,
          g = void 0 === h || h,
          y = e.wrapStyle,
          b = e.wrapClassName,
          C = e.wrapProps,
          Z = e.onClose,
          E = e.afterClose,
          k = e.transitionName,
          P = e.animation,
          O = e.closable,
          S = void 0 === O || O,
          T = e.mask,
          R = void 0 === T || T,
          j = e.maskTransitionName,
          I = e.maskAnimation,
          L = e.maskClosable,
          z = void 0 === L || L,
          A = e.maskStyle,
          D = e.maskProps,
          B = e.rootClassName,
          H = (0, a.useRef)(),
          F = (0, a.useRef)(),
          V = (0, a.useRef)(),
          _ = a.useState(s),
          W = (0, o.Z)(_, 2),
          U = W[0],
          K = W[1],
          G = v();
        function Y() {
          (0, p.Z)(F.current, document.activeElement) ||
            (H.current = document.activeElement);
        }
        function X() {
          var e;
          (0, p.Z)(F.current, document.activeElement) ||
            null === (e = V.current) ||
            void 0 === e ||
            e.focus();
        }
        function q(e) {
          if (e) X();
          else {
            if ((K(!1), R && H.current && g)) {
              try {
                H.current.focus({ preventScroll: !0 });
              } catch (t) {}
              H.current = null;
            }
            U && (null === E || void 0 === E || E());
          }
        }
        function J(e) {
          null === Z || void 0 === Z || Z(e);
        }
        var Q = (0, a.useRef)(!1),
          $ = (0, a.useRef)(),
          ee = function () {
            clearTimeout($.current), (Q.current = !0);
          },
          te = function () {
            $.current = setTimeout(function () {
              Q.current = !1;
            });
          },
          ne = null;
        function re(e) {
          if (m && e.keyCode === f.Z.ESC) return e.stopPropagation(), void J(e);
          s && e.keyCode === f.Z.TAB && V.current.changeActive(!e.shiftKey);
        }
        return (
          z &&
            (ne = function (e) {
              Q.current ? (Q.current = !1) : F.current === e.target && J(e);
            }),
          (0, a.useEffect)(
            function () {
              s && (K(!0), Y());
            },
            [s],
          ),
          (0, a.useEffect)(function () {
            return function () {
              clearTimeout($.current);
            };
          }, []),
          a.createElement(
            'div',
            (0, r.Z)(
              { className: u()(''.concat(n, '-root'), B) },
              x(e, { data: !0 }),
            ),
            a.createElement(w, {
              prefixCls: n,
              visible: R && s,
              motionName: N(n, j, I),
              style: (0, l.Z)({ zIndex: i }, A),
              maskProps: D,
            }),
            a.createElement(
              'div',
              (0, r.Z)(
                {
                  tabIndex: -1,
                  onKeyDown: re,
                  className: u()(''.concat(n, '-wrap'), b),
                  ref: F,
                  onClick: ne,
                  style: (0, l.Z)(
                    (0, l.Z)({ zIndex: i }, y),
                    {},
                    { display: U ? null : 'none' },
                  ),
                },
                C,
              ),
              a.createElement(
                M,
                (0, r.Z)({}, e, {
                  onMouseDown: ee,
                  onMouseUp: te,
                  ref: V,
                  closable: S,
                  ariaId: G,
                  prefixCls: n,
                  visible: s && U,
                  onClose: J,
                  onVisibleChanged: q,
                  motionName: N(n, k, P),
                }),
              ),
            ),
          )
        );
      }
      var L = function (e) {
        var t = e.visible,
          n = e.getContainer,
          i = e.forceRender,
          l = e.destroyOnClose,
          s = void 0 !== l && l,
          u = e.afterClose,
          f = a.useState(t),
          d = (0, o.Z)(f, 2),
          m = d[0],
          v = d[1];
        return (
          a.useEffect(
            function () {
              t && v(!0);
            },
            [t],
          ),
          i || !s || m
            ? a.createElement(
                c.Z,
                {
                  open: t || i || m,
                  autoDestroy: !1,
                  getContainer: n,
                  autoLock: t || m,
                },
                a.createElement(
                  I,
                  (0, r.Z)({}, e, {
                    destroyOnClose: s,
                    afterClose: function () {
                      null === u || void 0 === u || u(), v(!1);
                    },
                  }),
                ),
              )
            : null
        );
      };
      L.displayName = 'Dialog';
      var z = L,
        A = z;
    },
  },
]);
