(() => {
    var __webpack_modules__ = {
        958: function(module) {
            /*!
 * dist/inputmask.min
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2024 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.9
 */
            !function(e, t) {
                if (true) module.exports = t(); else ;
            }("undefined" != typeof self && self, (function() {
                return function() {
                    "use strict";
                    var e = {
                        3976: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            t.default = {
                                _maxTestPos: 500,
                                placeholder: "_",
                                optionalmarker: [ "[", "]" ],
                                quantifiermarker: [ "{", "}" ],
                                groupmarker: [ "(", ")" ],
                                alternatormarker: "|",
                                escapeChar: "\\",
                                mask: null,
                                regex: null,
                                oncomplete: function() {},
                                onincomplete: function() {},
                                oncleared: function() {},
                                repeat: 0,
                                greedy: !1,
                                autoUnmask: !1,
                                removeMaskOnSubmit: !1,
                                clearMaskOnLostFocus: !0,
                                insertMode: !0,
                                insertModeVisual: !0,
                                clearIncomplete: !1,
                                alias: null,
                                onKeyDown: function() {},
                                onBeforeMask: null,
                                onBeforePaste: function(e, t) {
                                    return "function" == typeof t.onBeforeMask ? t.onBeforeMask.call(this, e, t) : e;
                                },
                                onBeforeWrite: null,
                                onUnMask: null,
                                showMaskOnFocus: !0,
                                showMaskOnHover: !0,
                                onKeyValidation: function() {},
                                skipOptionalPartCharacter: " ",
                                numericInput: !1,
                                rightAlign: !1,
                                undoOnEscape: !0,
                                radixPoint: "",
                                _radixDance: !1,
                                groupSeparator: "",
                                keepStatic: null,
                                positionCaretOnTab: !0,
                                tabThrough: !1,
                                supportsInputType: [ "text", "tel", "url", "password", "search" ],
                                isComplete: null,
                                preValidation: null,
                                postValidation: null,
                                staticDefinitionSymbol: void 0,
                                jitMasking: !1,
                                nullable: !0,
                                inputEventOnly: !1,
                                noValuePatching: !1,
                                positionCaretOnClick: "lvp",
                                casing: null,
                                inputmode: "text",
                                importDataAttributes: !0,
                                shiftPositions: !0,
                                usePrototypeDefinitions: !0,
                                validationEventTimeOut: 3e3,
                                substitutes: {}
                            };
                        },
                        7392: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            t.default = {
                                9: {
                                    validator: "[0-9０-９]",
                                    definitionSymbol: "*"
                                },
                                a: {
                                    validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                                    definitionSymbol: "*"
                                },
                                "*": {
                                    validator: "[0-9０-９A-Za-zА-яЁёÀ-ÿµ]"
                                }
                            };
                        },
                        253: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = function(e, t, n) {
                                if (void 0 === n) return e.__data ? e.__data[t] : null;
                                e.__data = e.__data || {}, e.__data[t] = n;
                            };
                        },
                        3776: function(e, t, n) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.Event = void 0, t.off = function(e, t) {
                                var n, i;
                                u(this[0]) && e && (n = this[0].eventRegistry, i = this[0], e.split(" ").forEach((function(e) {
                                    var a = o(e.split("."), 2);
                                    (function(e, i) {
                                        var a, r, o = [];
                                        if (e.length > 0) if (void 0 === t) for (a = 0, r = n[e][i].length; a < r; a++) o.push({
                                            ev: e,
                                            namespace: i && i.length > 0 ? i : "global",
                                            handler: n[e][i][a]
                                        }); else o.push({
                                            ev: e,
                                            namespace: i && i.length > 0 ? i : "global",
                                            handler: t
                                        }); else if (i.length > 0) for (var l in n) for (var s in n[l]) if (s === i) if (void 0 === t) for (a = 0, 
                                        r = n[l][s].length; a < r; a++) o.push({
                                            ev: l,
                                            namespace: s,
                                            handler: n[l][s][a]
                                        }); else o.push({
                                            ev: l,
                                            namespace: s,
                                            handler: t
                                        });
                                        return o;
                                    })(a[0], a[1]).forEach((function(e) {
                                        var t = e.ev, a = e.handler;
                                        !function(e, t, a) {
                                            if (e in n == 1) if (i.removeEventListener ? i.removeEventListener(e, a, !1) : i.detachEvent && i.detachEvent("on".concat(e), a), 
                                            "global" === t) for (var r in n[e]) n[e][r].splice(n[e][r].indexOf(a), 1); else n[e][t].splice(n[e][t].indexOf(a), 1);
                                        }(t, e.namespace, a);
                                    }));
                                })));
                                return this;
                            }, t.on = function(e, t) {
                                if (u(this[0])) {
                                    var n = this[0].eventRegistry, i = this[0];
                                    e.split(" ").forEach((function(e) {
                                        var a = o(e.split("."), 2), r = a[0], l = a[1];
                                        !function(e, a) {
                                            i.addEventListener ? i.addEventListener(e, t, !1) : i.attachEvent && i.attachEvent("on".concat(e), t), 
                                            n[e] = n[e] || {}, n[e][a] = n[e][a] || [], n[e][a].push(t);
                                        }(r, void 0 === l ? "global" : l);
                                    }));
                                }
                                return this;
                            }, t.trigger = function(e) {
                                var t = arguments;
                                if (u(this[0])) for (var n = this[0].eventRegistry, i = this[0], o = "string" == typeof e ? e.split(" ") : [ e.type ], l = 0; l < o.length; l++) {
                                    var s = o[l].split("."), f = s[0], p = s[1] || "global";
                                    if (void 0 !== c && "global" === p) {
                                        var d, h = {
                                            bubbles: !0,
                                            cancelable: !0,
                                            composed: !0,
                                            detail: arguments[1]
                                        };
                                        if (c.createEvent) {
                                            try {
                                                if ("input" === f) h.inputType = "insertText", d = new InputEvent(f, h); else d = new CustomEvent(f, h);
                                            } catch (e) {
                                                (d = c.createEvent("CustomEvent")).initCustomEvent(f, h.bubbles, h.cancelable, h.detail);
                                            }
                                            e.type && (0, a.default)(d, e), i.dispatchEvent(d);
                                        } else (d = c.createEventObject()).eventType = f, d.detail = arguments[1], e.type && (0, 
                                        a.default)(d, e), i.fireEvent("on" + d.eventType, d);
                                    } else if (void 0 !== n[f]) {
                                        arguments[0] = arguments[0].type ? arguments[0] : r.default.Event(arguments[0]), 
                                        arguments[0].detail = arguments.slice(1);
                                        var v = n[f];
                                        ("global" === p ? Object.values(v).flat() : v[p]).forEach((function(e) {
                                            return e.apply(i, t);
                                        }));
                                    }
                                }
                                return this;
                            };
                            var i = s(n(9380)), a = s(n(600)), r = s(n(4963));
                            function o(e, t) {
                                return function(e) {
                                    if (Array.isArray(e)) return e;
                                }(e) || function(e, t) {
                                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (null != n) {
                                        var i, a, r, o, l = [], s = !0, c = !1;
                                        try {
                                            if (r = (n = n.call(e)).next, 0 === t) {
                                                if (Object(n) !== n) return;
                                                s = !1;
                                            } else for (;!(s = (i = r.call(n)).done) && (l.push(i.value), l.length !== t); s = !0) ;
                                        } catch (e) {
                                            c = !0, a = e;
                                        } finally {
                                            try {
                                                if (!s && null != n.return && (o = n.return(), Object(o) !== o)) return;
                                            } finally {
                                                if (c) throw a;
                                            }
                                        }
                                        return l;
                                    }
                                }(e, t) || function(e, t) {
                                    if (!e) return;
                                    if ("string" == typeof e) return l(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    "Object" === n && e.constructor && (n = e.constructor.name);
                                    if ("Map" === n || "Set" === n) return Array.from(e);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t);
                                }(e, t) || function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }();
                            }
                            function l(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                                return i;
                            }
                            function s(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var c = i.default.document;
                            function u(e) {
                                return e instanceof Element;
                            }
                            var f = t.Event = void 0;
                            "function" == typeof i.default.CustomEvent ? t.Event = f = i.default.CustomEvent : i.default.Event && c && c.createEvent ? (t.Event = f = function(e, t) {
                                t = t || {
                                    bubbles: !1,
                                    cancelable: !1,
                                    composed: !0,
                                    detail: void 0
                                };
                                var n = c.createEvent("CustomEvent");
                                return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
                            }, f.prototype = i.default.Event.prototype) : "undefined" != typeof Event && (t.Event = f = Event);
                        },
                        600: function(e, t) {
                            function n(e) {
                                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, n(e);
                            }
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = function e() {
                                var t, i, a, r, o, l, s = arguments[0] || {}, c = 1, u = arguments.length, f = !1;
                                "boolean" == typeof s && (f = s, s = arguments[c] || {}, c++);
                                "object" !== n(s) && "function" != typeof s && (s = {});
                                for (;c < u; c++) if (null != (t = arguments[c])) for (i in t) a = s[i], s !== (r = t[i]) && (f && r && ("[object Object]" === Object.prototype.toString.call(r) || (o = Array.isArray(r))) ? (o ? (o = !1, 
                                l = a && Array.isArray(a) ? a : []) : l = a && "[object Object]" === Object.prototype.toString.call(a) ? a : {}, 
                                s[i] = e(f, l, r)) : void 0 !== r && (s[i] = r));
                                return s;
                            };
                        },
                        4963: function(e, t, n) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            var i = l(n(9380)), a = l(n(253)), r = n(3776), o = l(n(600));
                            function l(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var s = i.default.document;
                            function c(e) {
                                return e instanceof c ? e : this instanceof c ? void (null != e && e !== i.default && (this[0] = e.nodeName ? e : void 0 !== e[0] && e[0].nodeName ? e[0] : s.querySelector(e), 
                                void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new c(e);
                            }
                            c.prototype = {
                                on: r.on,
                                off: r.off,
                                trigger: r.trigger
                            }, c.extend = o.default, c.data = a.default, c.Event = r.Event;
                            t.default = c;
                        },
                        9845: function(e, t, n) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.mobile = t.iphone = t.ie = void 0;
                            var i, a = (i = n(9380)) && i.__esModule ? i : {
                                default: i
                            };
                            var r = a.default.navigator && a.default.navigator.userAgent || "";
                            t.ie = r.indexOf("MSIE ") > 0 || r.indexOf("Trident/") > 0, t.mobile = a.default.navigator && a.default.navigator.userAgentData && a.default.navigator.userAgentData.mobile || a.default.navigator && a.default.navigator.maxTouchPoints || "ontouchstart" in a.default, 
                            t.iphone = /iphone/i.test(r);
                        },
                        7184: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = function(e) {
                                return e.replace(n, "\\$1");
                            };
                            var n = new RegExp("(\\" + [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ].join("|\\") + ")", "gim");
                        },
                        6030: function(e, t, n) {
                            function i(e) {
                                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, i(e);
                            }
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.EventHandlers = void 0;
                            var a, r = n(9845), o = (a = n(9380)) && a.__esModule ? a : {
                                default: a
                            }, l = n(7760), s = n(2839), c = n(8711), u = n(7215), f = n(4713);
                            function p() {
                                /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ p = function() {
                                    return t;
                                };
                                var e, t = {}, n = Object.prototype, a = n.hasOwnProperty, r = Object.defineProperty || function(e, t, n) {
                                    e[t] = n.value;
                                }, o = "function" == typeof Symbol ? Symbol : {}, l = o.iterator || "@@iterator", s = o.asyncIterator || "@@asyncIterator", c = o.toStringTag || "@@toStringTag";
                                function u(e, t, n) {
                                    return Object.defineProperty(e, t, {
                                        value: n,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }), e[t];
                                }
                                try {
                                    u({}, "");
                                } catch (e) {
                                    u = function(e, t, n) {
                                        return e[t] = n;
                                    };
                                }
                                function f(e, t, n, i) {
                                    var a = t && t.prototype instanceof k ? t : k, o = Object.create(a.prototype), l = new D(i || []);
                                    return r(o, "_invoke", {
                                        value: E(e, n, l)
                                    }), o;
                                }
                                function d(e, t, n) {
                                    try {
                                        return {
                                            type: "normal",
                                            arg: e.call(t, n)
                                        };
                                    } catch (e) {
                                        return {
                                            type: "throw",
                                            arg: e
                                        };
                                    }
                                }
                                t.wrap = f;
                                var h = "suspendedStart", v = "suspendedYield", m = "executing", g = "completed", y = {};
                                function k() {}
                                function b() {}
                                function x() {}
                                var w = {};
                                u(w, l, (function() {
                                    return this;
                                }));
                                var P = Object.getPrototypeOf, S = P && P(P(L([])));
                                S && S !== n && a.call(S, l) && (w = S);
                                var O = x.prototype = k.prototype = Object.create(w);
                                function _(e) {
                                    [ "next", "throw", "return" ].forEach((function(t) {
                                        u(e, t, (function(e) {
                                            return this._invoke(t, e);
                                        }));
                                    }));
                                }
                                function M(e, t) {
                                    function n(r, o, l, s) {
                                        var c = d(e[r], e, o);
                                        if ("throw" !== c.type) {
                                            var u = c.arg, f = u.value;
                                            return f && "object" == i(f) && a.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                                n("next", e, l, s);
                                            }), (function(e) {
                                                n("throw", e, l, s);
                                            })) : t.resolve(f).then((function(e) {
                                                u.value = e, l(u);
                                            }), (function(e) {
                                                return n("throw", e, l, s);
                                            }));
                                        }
                                        s(c.arg);
                                    }
                                    var o;
                                    r(this, "_invoke", {
                                        value: function(e, i) {
                                            function a() {
                                                return new t((function(t, a) {
                                                    n(e, i, t, a);
                                                }));
                                            }
                                            return o = o ? o.then(a, a) : a();
                                        }
                                    });
                                }
                                function E(t, n, i) {
                                    var a = h;
                                    return function(r, o) {
                                        if (a === m) throw new Error("Generator is already running");
                                        if (a === g) {
                                            if ("throw" === r) throw o;
                                            return {
                                                value: e,
                                                done: !0
                                            };
                                        }
                                        for (i.method = r, i.arg = o; ;) {
                                            var l = i.delegate;
                                            if (l) {
                                                var s = j(l, i);
                                                if (s) {
                                                    if (s === y) continue;
                                                    return s;
                                                }
                                            }
                                            if ("next" === i.method) i.sent = i._sent = i.arg; else if ("throw" === i.method) {
                                                if (a === h) throw a = g, i.arg;
                                                i.dispatchException(i.arg);
                                            } else "return" === i.method && i.abrupt("return", i.arg);
                                            a = m;
                                            var c = d(t, n, i);
                                            if ("normal" === c.type) {
                                                if (a = i.done ? g : v, c.arg === y) continue;
                                                return {
                                                    value: c.arg,
                                                    done: i.done
                                                };
                                            }
                                            "throw" === c.type && (a = g, i.method = "throw", i.arg = c.arg);
                                        }
                                    };
                                }
                                function j(t, n) {
                                    var i = n.method, a = t.iterator[i];
                                    if (a === e) return n.delegate = null, "throw" === i && t.iterator.return && (n.method = "return", 
                                    n.arg = e, j(t, n), "throw" === n.method) || "return" !== i && (n.method = "throw", 
                                    n.arg = new TypeError("The iterator does not provide a '" + i + "' method")), y;
                                    var r = d(a, t.iterator, n.arg);
                                    if ("throw" === r.type) return n.method = "throw", n.arg = r.arg, n.delegate = null, 
                                    y;
                                    var o = r.arg;
                                    return o ? o.done ? (n[t.resultName] = o.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", 
                                    n.arg = e), n.delegate = null, y) : o : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), 
                                    n.delegate = null, y);
                                }
                                function T(e) {
                                    var t = {
                                        tryLoc: e[0]
                                    };
                                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), 
                                    this.tryEntries.push(t);
                                }
                                function A(e) {
                                    var t = e.completion || {};
                                    t.type = "normal", delete t.arg, e.completion = t;
                                }
                                function D(e) {
                                    this.tryEntries = [ {
                                        tryLoc: "root"
                                    } ], e.forEach(T, this), this.reset(!0);
                                }
                                function L(t) {
                                    if (t || "" === t) {
                                        var n = t[l];
                                        if (n) return n.call(t);
                                        if ("function" == typeof t.next) return t;
                                        if (!isNaN(t.length)) {
                                            var r = -1, o = function n() {
                                                for (;++r < t.length; ) if (a.call(t, r)) return n.value = t[r], n.done = !1, n;
                                                return n.value = e, n.done = !0, n;
                                            };
                                            return o.next = o;
                                        }
                                    }
                                    throw new TypeError(i(t) + " is not iterable");
                                }
                                return b.prototype = x, r(O, "constructor", {
                                    value: x,
                                    configurable: !0
                                }), r(x, "constructor", {
                                    value: b,
                                    configurable: !0
                                }), b.displayName = u(x, c, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
                                    var t = "function" == typeof e && e.constructor;
                                    return !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name));
                                }, t.mark = function(e) {
                                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, x) : (e.__proto__ = x, u(e, c, "GeneratorFunction")), 
                                    e.prototype = Object.create(O), e;
                                }, t.awrap = function(e) {
                                    return {
                                        __await: e
                                    };
                                }, _(M.prototype), u(M.prototype, s, (function() {
                                    return this;
                                })), t.AsyncIterator = M, t.async = function(e, n, i, a, r) {
                                    void 0 === r && (r = Promise);
                                    var o = new M(f(e, n, i, a), r);
                                    return t.isGeneratorFunction(n) ? o : o.next().then((function(e) {
                                        return e.done ? e.value : o.next();
                                    }));
                                }, _(O), u(O, c, "Generator"), u(O, l, (function() {
                                    return this;
                                })), u(O, "toString", (function() {
                                    return "[object Generator]";
                                })), t.keys = function(e) {
                                    var t = Object(e), n = [];
                                    for (var i in t) n.push(i);
                                    return n.reverse(), function e() {
                                        for (;n.length; ) {
                                            var i = n.pop();
                                            if (i in t) return e.value = i, e.done = !1, e;
                                        }
                                        return e.done = !0, e;
                                    };
                                }, t.values = L, D.prototype = {
                                    constructor: D,
                                    reset: function(t) {
                                        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, 
                                        this.method = "next", this.arg = e, this.tryEntries.forEach(A), !t) for (var n in this) "t" === n.charAt(0) && a.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
                                    },
                                    stop: function() {
                                        this.done = !0;
                                        var e = this.tryEntries[0].completion;
                                        if ("throw" === e.type) throw e.arg;
                                        return this.rval;
                                    },
                                    dispatchException: function(t) {
                                        if (this.done) throw t;
                                        var n = this;
                                        function i(i, a) {
                                            return l.type = "throw", l.arg = t, n.next = i, a && (n.method = "next", n.arg = e), 
                                            !!a;
                                        }
                                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                            var o = this.tryEntries[r], l = o.completion;
                                            if ("root" === o.tryLoc) return i("end");
                                            if (o.tryLoc <= this.prev) {
                                                var s = a.call(o, "catchLoc"), c = a.call(o, "finallyLoc");
                                                if (s && c) {
                                                    if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                                                    if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                                                } else if (s) {
                                                    if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                                                } else {
                                                    if (!c) throw new Error("try statement without catch or finally");
                                                    if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                                                }
                                            }
                                        }
                                    },
                                    abrupt: function(e, t) {
                                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                            var i = this.tryEntries[n];
                                            if (i.tryLoc <= this.prev && a.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                                var r = i;
                                                break;
                                            }
                                        }
                                        r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                                        var o = r ? r.completion : {};
                                        return o.type = e, o.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, 
                                        y) : this.complete(o);
                                    },
                                    complete: function(e, t) {
                                        if ("throw" === e.type) throw e.arg;
                                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, 
                                        this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), 
                                        y;
                                    },
                                    finish: function(e) {
                                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                            var n = this.tryEntries[t];
                                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), A(n), y;
                                        }
                                    },
                                    catch: function(e) {
                                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                            var n = this.tryEntries[t];
                                            if (n.tryLoc === e) {
                                                var i = n.completion;
                                                if ("throw" === i.type) {
                                                    var a = i.arg;
                                                    A(n);
                                                }
                                                return a;
                                            }
                                        }
                                        throw new Error("illegal catch attempt");
                                    },
                                    delegateYield: function(t, n, i) {
                                        return this.delegate = {
                                            iterator: L(t),
                                            resultName: n,
                                            nextLoc: i
                                        }, "next" === this.method && (this.arg = e), y;
                                    }
                                }, t;
                            }
                            function d(e, t) {
                                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (!n) {
                                    if (Array.isArray(e) || (n = function(e, t) {
                                        if (!e) return;
                                        if ("string" == typeof e) return h(e, t);
                                        var n = Object.prototype.toString.call(e).slice(8, -1);
                                        "Object" === n && e.constructor && (n = e.constructor.name);
                                        if ("Map" === n || "Set" === n) return Array.from(e);
                                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t);
                                    }(e)) || t && e && "number" == typeof e.length) {
                                        n && (e = n);
                                        var i = 0, a = function() {};
                                        return {
                                            s: a,
                                            n: function() {
                                                return i >= e.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: e[i++]
                                                };
                                            },
                                            e: function(e) {
                                                throw e;
                                            },
                                            f: a
                                        };
                                    }
                                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }
                                var r, o = !0, l = !1;
                                return {
                                    s: function() {
                                        n = n.call(e);
                                    },
                                    n: function() {
                                        var e = n.next();
                                        return o = e.done, e;
                                    },
                                    e: function(e) {
                                        l = !0, r = e;
                                    },
                                    f: function() {
                                        try {
                                            o || null == n.return || n.return();
                                        } finally {
                                            if (l) throw r;
                                        }
                                    }
                                };
                            }
                            function h(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                                return i;
                            }
                            function v(e, t, n, i, a, r, o) {
                                try {
                                    var l = e[r](o), s = l.value;
                                } catch (e) {
                                    return void n(e);
                                }
                                l.done ? t(s) : Promise.resolve(s).then(i, a);
                            }
                            var m, g, y = t.EventHandlers = {
                                keyEvent: function(e, t, n, i, a) {
                                    var o = this.inputmask, p = o.opts, d = o.dependencyLib, h = o.maskset, v = this, m = d(v), g = e.key, k = c.caret.call(o, v), b = p.onKeyDown.call(this, e, c.getBuffer.call(o), k, p);
                                    if (void 0 !== b) return b;
                                    if (g === s.keys.Backspace || g === s.keys.Delete || r.iphone && g === s.keys.BACKSPACE_SAFARI || e.ctrlKey && g === s.keys.x && !("oncut" in v)) e.preventDefault(), 
                                    u.handleRemove.call(o, v, g, k), (0, l.writeBuffer)(v, c.getBuffer.call(o, !0), h.p, e, v.inputmask._valueGet() !== c.getBuffer.call(o).join("")); else if (g === s.keys.End || g === s.keys.PageDown) {
                                        e.preventDefault();
                                        var x = c.seekNext.call(o, c.getLastValidPosition.call(o));
                                        c.caret.call(o, v, e.shiftKey ? k.begin : x, x, !0);
                                    } else g === s.keys.Home && !e.shiftKey || g === s.keys.PageUp ? (e.preventDefault(), 
                                    c.caret.call(o, v, 0, e.shiftKey ? k.begin : 0, !0)) : p.undoOnEscape && g === s.keys.Escape && !0 !== e.altKey ? ((0, 
                                    l.checkVal)(v, !0, !1, o.undoValue.split("")), m.trigger("click")) : g !== s.keys.Insert || e.shiftKey || e.ctrlKey || void 0 !== o.userOptions.insertMode ? !0 === p.tabThrough && g === s.keys.Tab ? !0 === e.shiftKey ? (k.end = c.seekPrevious.call(o, k.end, !0), 
                                    !0 === f.getTest.call(o, k.end - 1).match.static && k.end--, k.begin = c.seekPrevious.call(o, k.end, !0), 
                                    k.begin >= 0 && k.end > 0 && (e.preventDefault(), c.caret.call(o, v, k.begin, k.end))) : (k.begin = c.seekNext.call(o, k.begin, !0), 
                                    k.end = c.seekNext.call(o, k.begin, !0), k.end < h.maskLength && k.end--, k.begin <= h.maskLength && (e.preventDefault(), 
                                    c.caret.call(o, v, k.begin, k.end))) : e.shiftKey || (p.insertModeVisual && !1 === p.insertMode ? g === s.keys.ArrowRight ? setTimeout((function() {
                                        var e = c.caret.call(o, v);
                                        c.caret.call(o, v, e.begin);
                                    }), 0) : g === s.keys.ArrowLeft && setTimeout((function() {
                                        var e = c.translatePosition.call(o, v.inputmask.caretPos.begin);
                                        c.translatePosition.call(o, v.inputmask.caretPos.end);
                                        o.isRTL ? c.caret.call(o, v, e + (e === h.maskLength ? 0 : 1)) : c.caret.call(o, v, e - (0 === e ? 0 : 1));
                                    }), 0) : void 0 === o.keyEventHook || o.keyEventHook(e)) : u.isSelection.call(o, k) ? p.insertMode = !p.insertMode : (p.insertMode = !p.insertMode, 
                                    c.caret.call(o, v, k.begin, k.begin));
                                    return o.isComposing = g == s.keys.Process || g == s.keys.Unidentified, o.ignorable = g.length > 1 && !("textarea" === v.tagName.toLowerCase() && g == s.keys.Enter), 
                                    y.keypressEvent.call(this, e, t, n, i, a);
                                },
                                keypressEvent: function(e, t, n, i, a) {
                                    var r = this.inputmask || this, o = r.opts, f = r.dependencyLib, p = r.maskset, d = r.el, h = f(d), v = e.key;
                                    if (!0 === t || e.ctrlKey && e.altKey && !r.ignorable || !(e.ctrlKey || e.metaKey || r.ignorable)) {
                                        if (v) {
                                            var m, g = t ? {
                                                begin: a,
                                                end: a
                                            } : c.caret.call(r, d);
                                            t || (v = o.substitutes[v] || v), p.writeOutBuffer = !0;
                                            var y = u.isValid.call(r, g, v, i, void 0, void 0, void 0, t);
                                            if (!1 !== y && (c.resetMaskSet.call(r, !0), m = void 0 !== y.caret ? y.caret : c.seekNext.call(r, y.pos.begin ? y.pos.begin : y.pos), 
                                            p.p = m), m = o.numericInput && void 0 === y.caret ? c.seekPrevious.call(r, m) : m, 
                                            !1 !== n && (setTimeout((function() {
                                                o.onKeyValidation.call(d, v, y);
                                            }), 0), p.writeOutBuffer && !1 !== y)) {
                                                var k = c.getBuffer.call(r);
                                                (0, l.writeBuffer)(d, k, m, e, !0 !== t);
                                            }
                                            if (e.preventDefault(), t) return !1 !== y && (y.forwardPosition = m), y;
                                        }
                                    } else v === s.keys.Enter && r.undoValue !== r._valueGet(!0) && (r.undoValue = r._valueGet(!0), 
                                    setTimeout((function() {
                                        h.trigger("change");
                                    }), 0));
                                },
                                pasteEvent: (m = p().mark((function e(t) {
                                    var n, i, a, r, s, u;
                                    return p().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                          case 0:
                                            n = function(e, n, i, a, o) {
                                                var s = c.caret.call(e, n, void 0, void 0, !0), u = i.substr(0, s.begin), f = i.substr(s.end, i.length);
                                                if (u == (e.isRTL ? c.getBufferTemplate.call(e).slice().reverse() : c.getBufferTemplate.call(e)).slice(0, s.begin).join("") && (u = ""), 
                                                f == (e.isRTL ? c.getBufferTemplate.call(e).slice().reverse() : c.getBufferTemplate.call(e)).slice(s.end).join("") && (f = ""), 
                                                a = u + a + f, e.isRTL && !0 !== r.numericInput) {
                                                    a = a.split("");
                                                    var p, h = d(c.getBufferTemplate.call(e));
                                                    try {
                                                        for (h.s(); !(p = h.n()).done; ) {
                                                            var v = p.value;
                                                            a[0] === v && a.shift();
                                                        }
                                                    } catch (e) {
                                                        h.e(e);
                                                    } finally {
                                                        h.f();
                                                    }
                                                    a = a.reverse().join("");
                                                }
                                                var m = a;
                                                if ("function" == typeof o) {
                                                    if (!1 === (m = o.call(e, m, r))) return !1;
                                                    m || (m = i);
                                                }
                                                (0, l.checkVal)(n, !0, !1, m.toString().split(""), t);
                                            }, i = this, a = this.inputmask, r = a.opts, s = a._valueGet(!0), a.skipInputEvent = !0, 
                                            t.clipboardData && t.clipboardData.getData ? u = t.clipboardData.getData("text/plain") : o.default.clipboardData && o.default.clipboardData.getData && (u = o.default.clipboardData.getData("Text")), 
                                            n(a, i, s, u, r.onBeforePaste), t.preventDefault();

                                          case 7:
                                          case "end":
                                            return e.stop();
                                        }
                                    }), e, this);
                                })), g = function() {
                                    var e = this, t = arguments;
                                    return new Promise((function(n, i) {
                                        var a = m.apply(e, t);
                                        function r(e) {
                                            v(a, n, i, r, o, "next", e);
                                        }
                                        function o(e) {
                                            v(a, n, i, r, o, "throw", e);
                                        }
                                        r(void 0);
                                    }));
                                }, function(e) {
                                    return g.apply(this, arguments);
                                }),
                                inputFallBackEvent: function(e) {
                                    var t = this.inputmask, n = t.opts, i = t.dependencyLib;
                                    var a, o = this, u = o.inputmask._valueGet(!0), p = (t.isRTL ? c.getBuffer.call(t).slice().reverse() : c.getBuffer.call(t)).join(""), d = c.caret.call(t, o, void 0, void 0, !0);
                                    if (p !== u) {
                                        if (a = function(e, i, a) {
                                            for (var r, o, l, s = e.substr(0, a.begin).split(""), u = e.substr(a.begin).split(""), p = i.substr(0, a.begin).split(""), d = i.substr(a.begin).split(""), h = s.length >= p.length ? s.length : p.length, v = u.length >= d.length ? u.length : d.length, m = "", g = [], y = "~"; s.length < h; ) s.push(y);
                                            for (;p.length < h; ) p.push(y);
                                            for (;u.length < v; ) u.unshift(y);
                                            for (;d.length < v; ) d.unshift(y);
                                            var k = s.concat(u), b = p.concat(d);
                                            for (o = 0, r = k.length; o < r; o++) switch (l = f.getPlaceholder.call(t, c.translatePosition.call(t, o)), 
                                            m) {
                                              case "insertText":
                                                b[o - 1] === k[o] && a.begin == k.length - 1 && g.push(k[o]), o = r;
                                                break;

                                              case "insertReplacementText":
                                              case "deleteContentBackward":
                                                k[o] === y ? a.end++ : o = r;
                                                break;

                                              default:
                                                k[o] !== b[o] && (k[o + 1] !== y && k[o + 1] !== l && void 0 !== k[o + 1] || (b[o] !== l || b[o + 1] !== y) && b[o] !== y ? b[o + 1] === y && b[o] === k[o + 1] ? (m = "insertText", 
                                                g.push(k[o]), a.begin--, a.end--) : k[o] !== l && k[o] !== y && (k[o + 1] === y || b[o] !== k[o] && b[o + 1] === k[o + 1]) ? (m = "insertReplacementText", 
                                                g.push(k[o]), a.begin--) : k[o] === y ? (m = "deleteContentBackward", (c.isMask.call(t, c.translatePosition.call(t, o), !0) || b[o] === n.radixPoint) && a.end++) : o = r : (m = "insertText", 
                                                g.push(k[o]), a.begin--, a.end--));
                                            }
                                            return {
                                                action: m,
                                                data: g,
                                                caret: a
                                            };
                                        }(u, p, d), (o.inputmask.shadowRoot || o.ownerDocument).activeElement !== o && o.focus(), 
                                        (0, l.writeBuffer)(o, c.getBuffer.call(t)), c.caret.call(t, o, d.begin, d.end, !0), 
                                        !r.mobile && t.skipNextInsert && "insertText" === e.inputType && "insertText" === a.action && t.isComposing) return !1;
                                        switch ("insertCompositionText" === e.inputType && "insertText" === a.action && t.isComposing ? t.skipNextInsert = !0 : t.skipNextInsert = !1, 
                                        a.action) {
                                          case "insertText":
                                          case "insertReplacementText":
                                            a.data.forEach((function(e, n) {
                                                var a = new i.Event("keypress");
                                                a.key = e, t.ignorable = !1, y.keypressEvent.call(o, a);
                                            })), setTimeout((function() {
                                                t.$el.trigger("keyup");
                                            }), 0);
                                            break;

                                          case "deleteContentBackward":
                                            var h = new i.Event("keydown");
                                            h.key = s.keys.Backspace, y.keyEvent.call(o, h);
                                            break;

                                          default:
                                            (0, l.applyInputValue)(o, u), c.caret.call(t, o, d.begin, d.end, !0);
                                        }
                                        e.preventDefault();
                                    }
                                },
                                setValueEvent: function(e) {
                                    var t = this.inputmask, n = t.dependencyLib, i = this, a = e && e.detail ? e.detail[0] : arguments[1];
                                    void 0 === a && (a = i.inputmask._valueGet(!0)), (0, l.applyInputValue)(i, a, new n.Event("input")), 
                                    (e.detail && void 0 !== e.detail[1] || void 0 !== arguments[2]) && c.caret.call(t, i, e.detail ? e.detail[1] : arguments[2]);
                                },
                                focusEvent: function(e) {
                                    var t = this.inputmask, n = t.opts, i = t && t._valueGet();
                                    n.showMaskOnFocus && i !== c.getBuffer.call(t).join("") && (0, l.writeBuffer)(this, c.getBuffer.call(t), c.seekNext.call(t, c.getLastValidPosition.call(t))), 
                                    !0 !== n.positionCaretOnTab || !1 !== t.mouseEnter || u.isComplete.call(t, c.getBuffer.call(t)) && -1 !== c.getLastValidPosition.call(t) || y.clickEvent.apply(this, [ e, !0 ]), 
                                    t.undoValue = t && t._valueGet(!0);
                                },
                                invalidEvent: function(e) {
                                    this.inputmask.validationEvent = !0;
                                },
                                mouseleaveEvent: function() {
                                    var e = this.inputmask, t = e.opts, n = this;
                                    e.mouseEnter = !1, t.clearMaskOnLostFocus && (n.inputmask.shadowRoot || n.ownerDocument).activeElement !== n && (0, 
                                    l.HandleNativePlaceholder)(n, e.originalPlaceholder);
                                },
                                clickEvent: function(e, t) {
                                    var n = this.inputmask;
                                    n.clicked++;
                                    var i = this;
                                    if ((i.inputmask.shadowRoot || i.ownerDocument).activeElement === i) {
                                        var a = c.determineNewCaretPosition.call(n, c.caret.call(n, i), t);
                                        void 0 !== a && c.caret.call(n, i, a);
                                    }
                                },
                                cutEvent: function(e) {
                                    var t = this.inputmask, n = t.maskset, i = this, a = c.caret.call(t, i), r = t.isRTL ? c.getBuffer.call(t).slice(a.end, a.begin) : c.getBuffer.call(t).slice(a.begin, a.end), f = t.isRTL ? r.reverse().join("") : r.join("");
                                    o.default.navigator && o.default.navigator.clipboard ? o.default.navigator.clipboard.writeText(f) : o.default.clipboardData && o.default.clipboardData.getData && o.default.clipboardData.setData("Text", f), 
                                    u.handleRemove.call(t, i, s.keys.Delete, a), (0, l.writeBuffer)(i, c.getBuffer.call(t), n.p, e, t.undoValue !== t._valueGet(!0));
                                },
                                blurEvent: function(e) {
                                    var t = this.inputmask, n = t.opts, i = t.dependencyLib;
                                    t.clicked = 0;
                                    var a = i(this), r = this;
                                    if (r.inputmask) {
                                        (0, l.HandleNativePlaceholder)(r, t.originalPlaceholder);
                                        var o = r.inputmask._valueGet(), s = c.getBuffer.call(t).slice();
                                        "" !== o && (n.clearMaskOnLostFocus && (-1 === c.getLastValidPosition.call(t) && o === c.getBufferTemplate.call(t).join("") ? s = [] : l.clearOptionalTail.call(t, s)), 
                                        !1 === u.isComplete.call(t, s) && (setTimeout((function() {
                                            a.trigger("incomplete");
                                        }), 0), n.clearIncomplete && (c.resetMaskSet.call(t, !1), s = n.clearMaskOnLostFocus ? [] : c.getBufferTemplate.call(t).slice())), 
                                        (0, l.writeBuffer)(r, s, void 0, e)), o = t._valueGet(!0), t.undoValue !== o && ("" != o || t.undoValue != c.getBufferTemplate.call(t).join("") || t.undoValue == c.getBufferTemplate.call(t).join("") && t.maskset.validPositions.length > 0) && (t.undoValue = o, 
                                        a.trigger("change"));
                                    }
                                },
                                mouseenterEvent: function() {
                                    var e = this.inputmask, t = e.opts.showMaskOnHover, n = this;
                                    if (e.mouseEnter = !0, (n.inputmask.shadowRoot || n.ownerDocument).activeElement !== n) {
                                        var i = (e.isRTL ? c.getBufferTemplate.call(e).slice().reverse() : c.getBufferTemplate.call(e)).join("");
                                        t && (0, l.HandleNativePlaceholder)(n, i);
                                    }
                                },
                                submitEvent: function() {
                                    var e = this.inputmask, t = e.opts;
                                    e.undoValue !== e._valueGet(!0) && e.$el.trigger("change"), -1 === c.getLastValidPosition.call(e) && e._valueGet && e._valueGet() === c.getBufferTemplate.call(e).join("") && e._valueSet(""), 
                                    t.clearIncomplete && !1 === u.isComplete.call(e, c.getBuffer.call(e)) && e._valueSet(""), 
                                    t.removeMaskOnSubmit && (e._valueSet(e.unmaskedvalue(), !0), setTimeout((function() {
                                        (0, l.writeBuffer)(e.el, c.getBuffer.call(e));
                                    }), 0));
                                },
                                resetEvent: function() {
                                    var e = this.inputmask;
                                    e.refreshValue = !0, setTimeout((function() {
                                        (0, l.applyInputValue)(e.el, e._valueGet(!0));
                                    }), 0);
                                }
                            };
                        },
                        9716: function(e, t, n) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.EventRuler = void 0;
                            var i, a = n(7760), r = (i = n(2394)) && i.__esModule ? i : {
                                default: i
                            }, o = n(2839), l = n(8711);
                            t.EventRuler = {
                                on: function(e, t, n) {
                                    var i = e.inputmask.dependencyLib, s = function(t) {
                                        t.originalEvent && (t = t.originalEvent || t, arguments[0] = t);
                                        var s, c = this, u = c.inputmask, f = u ? u.opts : void 0;
                                        if (void 0 === u && "FORM" !== this.nodeName) {
                                            var p = i.data(c, "_inputmask_opts");
                                            i(c).off(), p && new r.default(p).mask(c);
                                        } else {
                                            if ([ "submit", "reset", "setvalue" ].includes(t.type) || "FORM" === this.nodeName || !(c.disabled || c.readOnly && !("keydown" === t.type && t.ctrlKey && t.key === o.keys.c || !1 === f.tabThrough && t.key === o.keys.Tab))) {
                                                switch (t.type) {
                                                  case "input":
                                                    if (!0 === u.skipInputEvent) return u.skipInputEvent = !1, t.preventDefault();
                                                    break;

                                                  case "click":
                                                  case "focus":
                                                    return u.validationEvent ? (u.validationEvent = !1, e.blur(), (0, a.HandleNativePlaceholder)(e, (u.isRTL ? l.getBufferTemplate.call(u).slice().reverse() : l.getBufferTemplate.call(u)).join("")), 
                                                    setTimeout((function() {
                                                        e.focus();
                                                    }), f.validationEventTimeOut), !1) : (s = arguments, void setTimeout((function() {
                                                        e.inputmask && n.apply(c, s);
                                                    }), 0));
                                                }
                                                var d = n.apply(c, arguments);
                                                return !1 === d && (t.preventDefault(), t.stopPropagation()), d;
                                            }
                                            t.preventDefault();
                                        }
                                    };
                                    [ "submit", "reset" ].includes(t) ? (s = s.bind(e), null !== e.form && i(e.form).on(t, s)) : i(e).on(t, s), 
                                    e.inputmask.events[t] = e.inputmask.events[t] || [], e.inputmask.events[t].push(s);
                                },
                                off: function(e, t) {
                                    if (e.inputmask && e.inputmask.events) {
                                        var n = e.inputmask.dependencyLib, i = e.inputmask.events;
                                        for (var a in t && ((i = [])[t] = e.inputmask.events[t]), i) {
                                            for (var r = i[a]; r.length > 0; ) {
                                                var o = r.pop();
                                                [ "submit", "reset" ].includes(a) ? null !== e.form && n(e.form).off(a, o) : n(e).off(a, o);
                                            }
                                            delete e.inputmask.events[a];
                                        }
                                    }
                                }
                            };
                        },
                        219: function(e, t, n) {
                            var i = p(n(7184)), a = p(n(2394)), r = n(2839), o = n(8711), l = n(4713);
                            function s(e, t) {
                                return function(e) {
                                    if (Array.isArray(e)) return e;
                                }(e) || function(e, t) {
                                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (null != n) {
                                        var i, a, r, o, l = [], s = !0, c = !1;
                                        try {
                                            if (r = (n = n.call(e)).next, 0 === t) {
                                                if (Object(n) !== n) return;
                                                s = !1;
                                            } else for (;!(s = (i = r.call(n)).done) && (l.push(i.value), l.length !== t); s = !0) ;
                                        } catch (e) {
                                            c = !0, a = e;
                                        } finally {
                                            try {
                                                if (!s && null != n.return && (o = n.return(), Object(o) !== o)) return;
                                            } finally {
                                                if (c) throw a;
                                            }
                                        }
                                        return l;
                                    }
                                }(e, t) || function(e, t) {
                                    if (!e) return;
                                    if ("string" == typeof e) return c(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    "Object" === n && e.constructor && (n = e.constructor.name);
                                    if ("Map" === n || "Set" === n) return Array.from(e);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t);
                                }(e, t) || function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }();
                            }
                            function c(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                                return i;
                            }
                            function u(e) {
                                return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, u(e);
                            }
                            function f(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var i = t[n];
                                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                                    Object.defineProperty(e, (a = i.key, r = void 0, r = function(e, t) {
                                        if ("object" !== u(e) || null === e) return e;
                                        var n = e[Symbol.toPrimitive];
                                        if (void 0 !== n) {
                                            var i = n.call(e, t || "default");
                                            if ("object" !== u(i)) return i;
                                            throw new TypeError("@@toPrimitive must return a primitive value.");
                                        }
                                        return ("string" === t ? String : Number)(e);
                                    }(a, "string"), "symbol" === u(r) ? r : String(r)), i);
                                }
                                var a, r;
                            }
                            function p(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            n(1313);
                            var d = a.default.dependencyLib, h = function() {
                                function e(t, n, i, a) {
                                    !function(e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                    }(this, e), this.mask = t, this.format = n, this.opts = i, this.inputmask = a, this._date = new Date(1, 0, 1), 
                                    this.initDateObject(t, this.opts, this.inputmask);
                                }
                                var t, n, i;
                                return t = e, (n = [ {
                                    key: "date",
                                    get: function() {
                                        return void 0 === this._date && (this._date = new Date(1, 0, 1), this.initDateObject(void 0, this.opts, this.inputmask)), 
                                        this._date;
                                    }
                                }, {
                                    key: "initDateObject",
                                    value: function(e, t, n) {
                                        var i;
                                        for (P(t).lastIndex = 0; i = P(t).exec(this.format); ) {
                                            var a = /\d+$/.exec(i[0]), r = a ? i[0][0] + "x" : i[0], o = void 0;
                                            if (void 0 !== e) {
                                                if (a) {
                                                    var s = P(t).lastIndex, c = j.call(n, i.index, t, n && n.maskset);
                                                    P(t).lastIndex = s, o = e.slice(0, e.indexOf(c.nextMatch[0]));
                                                } else {
                                                    for (var u = i[0][0], f = i.index; n && (t.placeholder[l.getTest.call(n, f).match.placeholder] || l.getTest.call(n, f).match.placeholder) === u; ) f++;
                                                    var p = f - i.index;
                                                    o = e.slice(0, p || y[r] && y[r][4] || r.length);
                                                }
                                                e = e.slice(o.length);
                                            }
                                            Object.prototype.hasOwnProperty.call(y, r) && this.setValue(this, o, r, y[r][2], y[r][1]);
                                        }
                                    }
                                }, {
                                    key: "setValue",
                                    value: function(e, t, n, i, a) {
                                        if (void 0 !== t) switch (i) {
                                          case "ampm":
                                            e[i] = t, e["raw" + i] = t.replace(/\s/g, "_");
                                            break;

                                          case "month":
                                            if ("mmm" === n || "mmmm" === n) {
                                                e[i] = _("mmm" === n ? m.monthNames.slice(0, 12).findIndex((function(e) {
                                                    return t.toLowerCase() === e.toLowerCase();
                                                })) + 1 : m.monthNames.slice(12, 24).findIndex((function(e) {
                                                    return t.toLowerCase() === e.toLowerCase();
                                                })) + 1, 2), e[i] = "00" === e[i] ? "" : e[i].toString(), e["raw" + i] = e[i];
                                                break;
                                            }

                                          default:
                                            e[i] = t.replace(/[^0-9]/g, "0"), e["raw" + i] = t.replace(/\s/g, "_");
                                        }
                                        if (void 0 !== a) {
                                            var r = e[i];
                                            ("day" === i && 29 === parseInt(r) || "month" === i && 2 === parseInt(r)) && (29 !== parseInt(e.day) || 2 !== parseInt(e.month) || "" !== e.year && void 0 !== e.year || e._date.setFullYear(2012, 1, 29)), 
                                            "day" === i && (g = !0, 0 === parseInt(r) && (r = 1)), "month" === i && (g = !0), 
                                            "year" === i && (g = !0, r.length < y[n][4] && (r = _(r, y[n][4], !0))), ("" !== r && !isNaN(r) || "ampm" === i) && a.call(e._date, r);
                                        }
                                    }
                                }, {
                                    key: "reset",
                                    value: function() {
                                        this._date = new Date(1, 0, 1);
                                    }
                                }, {
                                    key: "reInit",
                                    value: function() {
                                        this._date = void 0, this.date;
                                    }
                                } ]) && f(t.prototype, n), i && f(t, i), Object.defineProperty(t, "prototype", {
                                    writable: !1
                                }), e;
                            }(), v = (new Date).getFullYear(), m = a.default.prototype.i18n, g = !1, y = {
                                d: [ "[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate ],
                                dd: [ "0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                                    return _(Date.prototype.getDate.call(this), 2);
                                } ],
                                ddd: [ "" ],
                                dddd: [ "" ],
                                m: [ "[1-9]|1[012]", function(e) {
                                    var t = e ? parseInt(e) : 0;
                                    return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                                }, "month", function() {
                                    return Date.prototype.getMonth.call(this) + 1;
                                } ],
                                mm: [ "0[1-9]|1[012]", function(e) {
                                    var t = e ? parseInt(e) : 0;
                                    return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                                }, "month", function() {
                                    return _(Date.prototype.getMonth.call(this) + 1, 2);
                                } ],
                                mmm: [ m.monthNames.slice(0, 12).join("|"), function(e) {
                                    var t = m.monthNames.slice(0, 12).findIndex((function(t) {
                                        return e.toLowerCase() === t.toLowerCase();
                                    }));
                                    return -1 !== t && Date.prototype.setMonth.call(this, t);
                                }, "month", function() {
                                    return m.monthNames.slice(0, 12)[Date.prototype.getMonth.call(this)];
                                } ],
                                mmmm: [ m.monthNames.slice(12, 24).join("|"), function(e) {
                                    var t = m.monthNames.slice(12, 24).findIndex((function(t) {
                                        return e.toLowerCase() === t.toLowerCase();
                                    }));
                                    return -1 !== t && Date.prototype.setMonth.call(this, t);
                                }, "month", function() {
                                    return m.monthNames.slice(12, 24)[Date.prototype.getMonth.call(this)];
                                } ],
                                yy: [ "[0-9]{2}", function(e) {
                                    var t = (new Date).getFullYear().toString().slice(0, 2);
                                    Date.prototype.setFullYear.call(this, "".concat(t).concat(e));
                                }, "year", function() {
                                    return _(Date.prototype.getFullYear.call(this), 2);
                                }, 2 ],
                                yyyy: [ "[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                                    return _(Date.prototype.getFullYear.call(this), 4);
                                }, 4 ],
                                h: [ "[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                                hh: [ "0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                                    return _(Date.prototype.getHours.call(this), 2);
                                } ],
                                hx: [ function(e) {
                                    return "[0-9]{".concat(e, "}");
                                }, Date.prototype.setHours, "hours", function(e) {
                                    return Date.prototype.getHours;
                                } ],
                                H: [ "1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                                HH: [ "0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                                    return _(Date.prototype.getHours.call(this), 2);
                                } ],
                                Hx: [ function(e) {
                                    return "[0-9]{".concat(e, "}");
                                }, Date.prototype.setHours, "hours", function(e) {
                                    return function() {
                                        return _(Date.prototype.getHours.call(this), e);
                                    };
                                } ],
                                M: [ "[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes ],
                                MM: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() {
                                    return _(Date.prototype.getMinutes.call(this), 2);
                                } ],
                                s: [ "[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds ],
                                ss: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function() {
                                    return _(Date.prototype.getSeconds.call(this), 2);
                                } ],
                                l: [ "[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                                    return _(Date.prototype.getMilliseconds.call(this), 3);
                                }, 3 ],
                                L: [ "[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                                    return _(Date.prototype.getMilliseconds.call(this), 2);
                                }, 2 ],
                                t: [ "[ap]", b, "ampm", x, 1 ],
                                tt: [ "[ap]m", b, "ampm", x, 2 ],
                                T: [ "[AP]", b, "ampm", x, 1 ],
                                TT: [ "[AP]M", b, "ampm", x, 2 ],
                                Z: [ ".*", void 0, "Z", function() {
                                    var e = this.toString().match(/\((.+)\)/)[1];
                                    e.includes(" ") && (e = (e = e.replace("-", " ").toUpperCase()).split(" ").map((function(e) {
                                        return s(e, 1)[0];
                                    })).join(""));
                                    return e;
                                } ],
                                o: [ "" ],
                                S: [ "" ]
                            }, k = {
                                isoDate: "yyyy-mm-dd",
                                isoTime: "HH:MM:ss",
                                isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                                isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
                            };
                            function b(e) {
                                var t = this.getHours();
                                e.toLowerCase().includes("p") ? this.setHours(t + 12) : e.toLowerCase().includes("a") && t >= 12 && this.setHours(t - 12);
                            }
                            function x() {
                                var e = this.getHours();
                                return (e = e || 12) >= 12 ? "PM" : "AM";
                            }
                            function w(e) {
                                var t = /\d+$/.exec(e[0]);
                                if (t && void 0 !== t[0]) {
                                    var n = y[e[0][0] + "x"].slice("");
                                    return n[0] = n[0](t[0]), n[3] = n[3](t[0]), n;
                                }
                                if (y[e[0]]) return y[e[0]];
                            }
                            function P(e) {
                                if (!e.tokenizer) {
                                    var t = [], n = [];
                                    for (var i in y) if (/\.*x$/.test(i)) {
                                        var a = i[0] + "\\d+";
                                        -1 === n.indexOf(a) && n.push(a);
                                    } else -1 === t.indexOf(i[0]) && t.push(i[0]);
                                    e.tokenizer = "(" + (n.length > 0 ? n.join("|") + "|" : "") + t.join("+|") + ")+?|.", 
                                    e.tokenizer = new RegExp(e.tokenizer, "g");
                                }
                                return e.tokenizer;
                            }
                            function S(e, t, n) {
                                if (!g) return !0;
                                if (void 0 === e.rawday || !isFinite(e.rawday) && new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day || "29" == e.day && (!isFinite(e.rawyear) || void 0 === e.rawyear || "" === e.rawyear) || new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day) return t;
                                if ("29" == e.day) {
                                    var i = j.call(this, t.pos, n, this.maskset);
                                    if (i.targetMatch && "yyyy" === i.targetMatch[0] && t.pos - i.targetMatchIndex == 2) return t.remove = t.pos + 1, 
                                    t;
                                } else if (2 == e.date.getMonth() && "30" == e.day && void 0 !== t.c) return e.day = "03", 
                                e.date.setDate(3), e.date.setMonth(1), t.insert = [ {
                                    pos: t.pos,
                                    c: "0"
                                }, {
                                    pos: t.pos + 1,
                                    c: t.c
                                } ], t.caret = o.seekNext.call(this, t.pos + 1), t;
                                return !1;
                            }
                            function O(e, t, n, a) {
                                var r, o, l = "", s = 0, c = {};
                                for (P(n).lastIndex = 0; r = P(n).exec(e); ) {
                                    if (void 0 === t) if (o = w(r)) l += "(" + o[0] + ")", n.placeholder && "" !== n.placeholder ? (c[s] = n.placeholder[r.index % n.placeholder.length], 
                                    c[n.placeholder[r.index % n.placeholder.length]] = r[0].charAt(0)) : c[s] = r[0].charAt(0); else switch (r[0]) {
                                      case "[":
                                        l += "(";
                                        break;

                                      case "]":
                                        l += ")?";
                                        break;

                                      default:
                                        l += (0, i.default)(r[0]), c[s] = r[0].charAt(0);
                                    } else if (o = w(r)) if (!0 !== a && o[3]) l += o[3].call(t.date); else o[2] ? l += t["raw" + o[2]] : l += r[0]; else l += r[0];
                                    s++;
                                }
                                return void 0 === t && (n.placeholder = c), l;
                            }
                            function _(e, t, n) {
                                for (e = String(e), t = t || 2; e.length < t; ) e = n ? e + "0" : "0" + e;
                                return e;
                            }
                            function M(e, t, n) {
                                return "string" == typeof e ? new h(e, t, n, this) : e && "object" === u(e) && Object.prototype.hasOwnProperty.call(e, "date") ? e : void 0;
                            }
                            function E(e, t) {
                                return O(t.inputFormat, {
                                    date: e
                                }, t);
                            }
                            function j(e, t, n) {
                                var i, a, r = this, o = n && n.tests[e] ? t.placeholder[n.tests[e][0].match.placeholder] || n.tests[e][0].match.placeholder : "", s = 0, c = 0;
                                for (P(t).lastIndex = 0; a = P(t).exec(t.inputFormat); ) {
                                    var u = /\d+$/.exec(a[0]);
                                    if (u) c = parseInt(u[0]); else {
                                        for (var f = a[0][0], p = s; r && (t.placeholder[l.getTest.call(r, p).match.placeholder] || l.getTest.call(r, p).match.placeholder) === f; ) p++;
                                        0 === (c = p - s) && (c = a[0].length);
                                    }
                                    if (s += c, -1 != a[0].indexOf(o) || s >= e + 1) {
                                        i = a, a = P(t).exec(t.inputFormat);
                                        break;
                                    }
                                }
                                return {
                                    targetMatchIndex: s - c,
                                    nextMatch: a,
                                    targetMatch: i
                                };
                            }
                            a.default.extendAliases({
                                datetime: {
                                    mask: function(e) {
                                        return e.numericInput = !1, y.S = m.ordinalSuffix.join("|"), e.inputFormat = k[e.inputFormat] || e.inputFormat, 
                                        e.displayFormat = k[e.displayFormat] || e.displayFormat || e.inputFormat, e.outputFormat = k[e.outputFormat] || e.outputFormat || e.inputFormat, 
                                        e.regex = O(e.inputFormat, void 0, e), e.min = M(e.min, e.inputFormat, e), e.max = M(e.max, e.inputFormat, e), 
                                        null;
                                    },
                                    placeholder: "",
                                    inputFormat: "isoDateTime",
                                    displayFormat: null,
                                    outputFormat: null,
                                    min: null,
                                    max: null,
                                    skipOptionalPartCharacter: "",
                                    preValidation: function(e, t, n, i, a, r, o, l) {
                                        if (l) return !0;
                                        if (isNaN(n) && e[t] !== n) {
                                            var s = j.call(this, t, a, r);
                                            if (s.nextMatch && s.nextMatch[0] === n && s.targetMatch[0].length > 1) {
                                                var c = w(s.targetMatch)[0];
                                                if (new RegExp(c).test("0" + e[t - 1])) return e[t] = e[t - 1], e[t - 1] = "0", 
                                                {
                                                    fuzzy: !0,
                                                    buffer: e,
                                                    refreshFromBuffer: {
                                                        start: t - 1,
                                                        end: t + 1
                                                    },
                                                    pos: t + 1
                                                };
                                            }
                                        }
                                        return !0;
                                    },
                                    postValidation: function(e, t, n, i, a, r, o, s) {
                                        var c, u, f = this;
                                        if (o) return !0;
                                        if (!1 === i && (((c = j.call(f, t + 1, a, r)).targetMatch && c.targetMatchIndex === t && c.targetMatch[0].length > 1 && void 0 !== y[c.targetMatch[0]] || (c = j.call(f, t + 2, a, r)).targetMatch && c.targetMatchIndex === t + 1 && c.targetMatch[0].length > 1 && void 0 !== y[c.targetMatch[0]]) && (u = w(c.targetMatch)[0]), 
                                        void 0 !== u && (void 0 !== r.validPositions[t + 1] && new RegExp(u).test(n + "0") ? (e[t] = n, 
                                        e[t + 1] = "0", i = {
                                            pos: t + 2,
                                            caret: t
                                        }) : new RegExp(u).test("0" + n) && (e[t] = "0", e[t + 1] = n, i = {
                                            pos: t + 2
                                        })), !1 === i)) return i;
                                        if (i.fuzzy && (e = i.buffer, t = i.pos), (c = j.call(f, t, a, r)).targetMatch && c.targetMatch[0] && void 0 !== y[c.targetMatch[0]]) {
                                            var p = w(c.targetMatch);
                                            u = p[0];
                                            var d = e.slice(c.targetMatchIndex, c.targetMatchIndex + c.targetMatch[0].length);
                                            if (!1 === new RegExp(u).test(d.join("")) && 2 === c.targetMatch[0].length && r.validPositions[c.targetMatchIndex] && r.validPositions[c.targetMatchIndex + 1] && (r.validPositions[c.targetMatchIndex + 1].input = "0"), 
                                            "year" == p[2]) for (var h = l.getMaskTemplate.call(f, !1, 1, void 0, !0), m = t + 1; m < e.length; m++) e[m] = h[m], 
                                            r.validPositions.splice(t + 1, 1);
                                        }
                                        var g = i, k = M.call(f, e.join(""), a.inputFormat, a);
                                        return g && !isNaN(k.date.getTime()) && (a.prefillYear && (g = function(e, t, n) {
                                            if (e.year !== e.rawyear) {
                                                var i = v.toString(), a = e.rawyear.replace(/[^0-9]/g, ""), r = i.slice(0, a.length), o = i.slice(a.length);
                                                if (2 === a.length && a === r) {
                                                    var l = new Date(v, e.month - 1, e.day);
                                                    e.day == l.getDate() && (!n.max || n.max.date.getTime() >= l.getTime()) && (e.date.setFullYear(v), 
                                                    e.year = i, t.insert = [ {
                                                        pos: t.pos + 1,
                                                        c: o[0]
                                                    }, {
                                                        pos: t.pos + 2,
                                                        c: o[1]
                                                    } ]);
                                                }
                                            }
                                            return t;
                                        }(k, g, a)), g = function(e, t, n, i) {
                                            if (!t) return t;
                                            if (t && n.min && !isNaN(n.min.date.getTime())) {
                                                var r;
                                                for (e.reset(), P(n).lastIndex = 0; r = P(n).exec(n.inputFormat); ) {
                                                    var o;
                                                    if ((o = w(r)) && o[3]) {
                                                        for (var l = o[1], s = e[o[2]], c = n.min[o[2]], u = n.max ? n.max[o[2]] : c + 1, f = [], p = !1, d = 0; d < c.length; d++) void 0 !== i.validPositions[d + r.index] || p ? (f[d] = s[d], 
                                                        p = p || s[d] > c[d]) : (d + r.index == 0 && s[d] < c[d] ? (f[d] = s[d], p = !0) : f[d] = c[d], 
                                                        "year" === o[2] && s.length - 1 == d && c != u && (f = (parseInt(f.join("")) + 1).toString().split("")), 
                                                        "ampm" === o[2] && c != u && n.min.date.getTime() > e.date.getTime() && (f[d] = u[d]));
                                                        l.call(e._date, f.join(""));
                                                    }
                                                }
                                                t = n.min.date.getTime() <= e.date.getTime(), e.reInit();
                                            }
                                            return t && n.max && (isNaN(n.max.date.getTime()) || (t = n.max.date.getTime() >= e.date.getTime())), 
                                            t;
                                        }(k, g = S.call(f, k, g, a), a, r)), void 0 !== t && g && i.pos !== t ? {
                                            buffer: O(a.inputFormat, k, a).split(""),
                                            refreshFromBuffer: {
                                                start: t,
                                                end: i.pos
                                            },
                                            pos: i.caret || i.pos
                                        } : g;
                                    },
                                    onKeyDown: function(e, t, n, i) {
                                        e.ctrlKey && e.key === r.keys.ArrowRight && (this.inputmask._valueSet(E(new Date, i)), 
                                        d(this).trigger("setvalue"));
                                    },
                                    onUnMask: function(e, t, n) {
                                        return t ? O(n.outputFormat, M.call(this, e, n.inputFormat, n), n, !0) : t;
                                    },
                                    casing: function(e, t, n, i) {
                                        if (0 == t.nativeDef.indexOf("[ap]")) return e.toLowerCase();
                                        if (0 == t.nativeDef.indexOf("[AP]")) return e.toUpperCase();
                                        var a = l.getTest.call(this, [ n - 1 ]);
                                        return 0 == a.match.def.indexOf("[AP]") || 0 === n || a && a.input === String.fromCharCode(r.keyCode.Space) || a && a.match.def === String.fromCharCode(r.keyCode.Space) ? e.toUpperCase() : e.toLowerCase();
                                    },
                                    onBeforeMask: function(e, t) {
                                        return "[object Date]" === Object.prototype.toString.call(e) && (e = E(e, t)), e;
                                    },
                                    insertMode: !1,
                                    insertModeVisual: !1,
                                    shiftPositions: !1,
                                    keepStatic: !1,
                                    inputmode: "numeric",
                                    prefillYear: !0
                                }
                            });
                        },
                        1313: function(e, t, n) {
                            var i, a = (i = n(2394)) && i.__esModule ? i : {
                                default: i
                            };
                            a.default.dependencyLib.extend(!0, a.default.prototype.i18n, {
                                dayNames: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                                monthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                                ordinalSuffix: [ "st", "nd", "rd", "th" ]
                            });
                        },
                        3851: function(e, t, n) {
                            var i, a = (i = n(2394)) && i.__esModule ? i : {
                                default: i
                            }, r = n(8711), o = n(4713);
                            function l(e) {
                                return function(e) {
                                    if (Array.isArray(e)) return s(e);
                                }(e) || function(e) {
                                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
                                }(e) || function(e, t) {
                                    if (!e) return;
                                    if ("string" == typeof e) return s(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    "Object" === n && e.constructor && (n = e.constructor.name);
                                    if ("Map" === n || "Set" === n) return Array.from(e);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t);
                                }(e) || function() {
                                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }();
                            }
                            function s(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                                return i;
                            }
                            a.default.extendDefinitions({
                                A: {
                                    validator: "[A-Za-zА-яЁёÀ-ÿµ]",
                                    casing: "upper"
                                },
                                "&": {
                                    validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
                                    casing: "upper"
                                },
                                "#": {
                                    validator: "[0-9A-Fa-f]",
                                    casing: "upper"
                                }
                            });
                            var c = /25[0-5]|2[0-4][0-9]|[01][0-9][0-9]/;
                            function u(e, t, n, i, a) {
                                if (n - 1 > -1 && "." !== t.buffer[n - 1] ? (e = t.buffer[n - 1] + e, e = n - 2 > -1 && "." !== t.buffer[n - 2] ? t.buffer[n - 2] + e : "0" + e) : e = "00" + e, 
                                a.greedy && parseInt(e) > 255 && c.test("00" + e.charAt(2))) {
                                    var r = [].concat(l(t.buffer.slice(0, n)), [ ".", e.charAt(2) ]);
                                    if (r.join("").match(/\./g).length < 4) return {
                                        refreshFromBuffer: !0,
                                        buffer: r,
                                        caret: n + 2
                                    };
                                }
                                return c.test(e);
                            }
                            a.default.extendAliases({
                                cssunit: {
                                    regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
                                },
                                url: {
                                    regex: "(https?|ftp)://.*",
                                    autoUnmask: !1,
                                    keepStatic: !1,
                                    tabThrough: !0
                                },
                                ip: {
                                    mask: "i{1,3}.j{1,3}.k{1,3}.l{1,3}",
                                    definitions: {
                                        i: {
                                            validator: u
                                        },
                                        j: {
                                            validator: u
                                        },
                                        k: {
                                            validator: u
                                        },
                                        l: {
                                            validator: u
                                        }
                                    },
                                    onUnMask: function(e, t, n) {
                                        return e;
                                    },
                                    inputmode: "decimal",
                                    substitutes: {
                                        ",": "."
                                    }
                                },
                                email: {
                                    mask: function(e) {
                                        var t = e.separator, n = e.quantifier, i = "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]", a = i;
                                        if (t) for (var r = 0; r < n; r++) a += "[".concat(t).concat(i, "]");
                                        return a;
                                    },
                                    greedy: !1,
                                    casing: "lower",
                                    separator: null,
                                    quantifier: 5,
                                    skipOptionalPartCharacter: "",
                                    onBeforePaste: function(e, t) {
                                        return (e = e.toLowerCase()).replace("mailto:", "");
                                    },
                                    definitions: {
                                        "*": {
                                            validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ!#$%&'*+/=?^_`{|}~-]"
                                        },
                                        "-": {
                                            validator: "[0-9A-Za-z-]"
                                        }
                                    },
                                    onUnMask: function(e, t, n) {
                                        return e;
                                    },
                                    inputmode: "email"
                                },
                                mac: {
                                    mask: "##:##:##:##:##:##"
                                },
                                vin: {
                                    mask: "V{13}9{4}",
                                    definitions: {
                                        V: {
                                            validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                                            casing: "upper"
                                        }
                                    },
                                    clearIncomplete: !0,
                                    autoUnmask: !0
                                },
                                ssn: {
                                    mask: "999-99-9999",
                                    postValidation: function(e, t, n, i, a, l, s) {
                                        var c = o.getMaskTemplate.call(this, !0, r.getLastValidPosition.call(this), !0, !0);
                                        return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(c.join(""));
                                    }
                                }
                            });
                        },
                        207: function(e, t, n) {
                            var i = l(n(7184)), a = l(n(2394)), r = n(2839), o = n(8711);
                            function l(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var s = a.default.dependencyLib;
                            function c(e, t) {
                                for (var n = "", i = 0; i < e.length; i++) a.default.prototype.definitions[e.charAt(i)] || t.definitions[e.charAt(i)] || t.optionalmarker[0] === e.charAt(i) || t.optionalmarker[1] === e.charAt(i) || t.quantifiermarker[0] === e.charAt(i) || t.quantifiermarker[1] === e.charAt(i) || t.groupmarker[0] === e.charAt(i) || t.groupmarker[1] === e.charAt(i) || t.alternatormarker === e.charAt(i) ? n += "\\" + e.charAt(i) : n += e.charAt(i);
                                return n;
                            }
                            function u(e, t, n, i) {
                                if (e.length > 0 && t > 0 && (!n.digitsOptional || i)) {
                                    var a = e.indexOf(n.radixPoint), r = !1;
                                    n.negationSymbol.back === e[e.length - 1] && (r = !0, e.length--), -1 === a && (e.push(n.radixPoint), 
                                    a = e.length - 1);
                                    for (var o = 1; o <= t; o++) isFinite(e[a + o]) || (e[a + o] = "0");
                                }
                                return r && e.push(n.negationSymbol.back), e;
                            }
                            function f(e, t) {
                                var n = 0;
                                for (var i in "+" === e && (n = o.seekNext.call(this, t.validPositions.length - 1)), 
                                t.tests) if ((i = parseInt(i)) >= n) for (var a = 0, r = t.tests[i].length; a < r; a++) if ((void 0 === t.validPositions[i] || "-" === e) && t.tests[i][a].match.def === e) return i + (void 0 !== t.validPositions[i] && "-" !== e ? 1 : 0);
                                return n;
                            }
                            function p(e, t) {
                                for (var n = -1, i = 0, a = t.validPositions.length; i < a; i++) {
                                    var r = t.validPositions[i];
                                    if (r && r.match.def === e) {
                                        n = i;
                                        break;
                                    }
                                }
                                return n;
                            }
                            function d(e, t, n, i, a) {
                                var r = t.buffer ? t.buffer.indexOf(a.radixPoint) : -1, o = (-1 !== r || i && a.jitMasking) && new RegExp(a.definitions[9].validator).test(e);
                                return !i && a._radixDance && -1 !== r && o && null == t.validPositions[r] ? {
                                    insert: {
                                        pos: r === n ? r + 1 : r,
                                        c: a.radixPoint
                                    },
                                    pos: n
                                } : o;
                            }
                            a.default.extendAliases({
                                numeric: {
                                    mask: function(e) {
                                        e.repeat = 0, e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), 
                                        " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0), e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)), 
                                        "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && (e.positionCaretOnClick = "lvp");
                                        var t = "0", n = e.radixPoint;
                                        !0 === e.numericInput && void 0 === e.__financeInput ? (t = "1", e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, 
                                        e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e._radixDance = !1, n = "," === e.radixPoint ? "?" : "!", 
                                        "" !== e.radixPoint && void 0 === e.definitions[n] && (e.definitions[n] = {}, e.definitions[n].validator = "[" + e.radixPoint + "]", 
                                        e.definitions[n].placeholder = e.radixPoint, e.definitions[n].static = !0, e.definitions[n].generated = !0)) : (e.__financeInput = !1, 
                                        e.numericInput = !0);
                                        var a, r = "[+]";
                                        if (r += c(e.prefix, e), "" !== e.groupSeparator ? (void 0 === e.definitions[e.groupSeparator] && (e.definitions[e.groupSeparator] = {}, 
                                        e.definitions[e.groupSeparator].validator = "[" + e.groupSeparator + "]", e.definitions[e.groupSeparator].placeholder = e.groupSeparator, 
                                        e.definitions[e.groupSeparator].static = !0, e.definitions[e.groupSeparator].generated = !0), 
                                        r += e._mask(e)) : r += "9{+}", void 0 !== e.digits && 0 !== e.digits) {
                                            var o = e.digits.toString().split(",");
                                            isFinite(o[0]) && o[1] && isFinite(o[1]) ? r += n + t + "{" + e.digits + "}" : (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.digitsOptional || e.jitMasking ? (a = r + n + t + "{0," + e.digits + "}", 
                                            e.keepStatic = !0) : r += n + t + "{" + e.digits + "}");
                                        } else e.inputmode = "numeric";
                                        return r += c(e.suffix, e), r += "[-]", a && (r = [ a + c(e.suffix, e) + "[-]", r ]), 
                                        e.greedy = !1, function(e) {
                                            void 0 === e.parseMinMaxOptions && (null !== e.min && (e.min = e.min.toString().replace(new RegExp((0, 
                                            i.default)(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), 
                                            e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, isNaN(e.min) && (e.min = Number.MIN_VALUE)), 
                                            null !== e.max && (e.max = e.max.toString().replace(new RegExp((0, i.default)(e.groupSeparator), "g"), ""), 
                                            "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, 
                                            isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done");
                                        }(e), "" !== e.radixPoint && e.substituteRadixPoint && (e.substitutes["." == e.radixPoint ? "," : "."] = e.radixPoint), 
                                        r;
                                    },
                                    _mask: function(e) {
                                        return "(" + e.groupSeparator + "999){+|1}";
                                    },
                                    digits: "*",
                                    digitsOptional: !0,
                                    enforceDigitsOnBlur: !1,
                                    radixPoint: ".",
                                    positionCaretOnClick: "radixFocus",
                                    _radixDance: !0,
                                    groupSeparator: "",
                                    allowMinus: !0,
                                    negationSymbol: {
                                        front: "-",
                                        back: ""
                                    },
                                    prefix: "",
                                    suffix: "",
                                    min: null,
                                    max: null,
                                    SetMaxOnOverflow: !1,
                                    step: 1,
                                    inputType: "text",
                                    unmaskAsNumber: !1,
                                    roundingFN: Math.round,
                                    inputmode: "decimal",
                                    shortcuts: {
                                        k: "1000",
                                        m: "1000000"
                                    },
                                    placeholder: "0",
                                    greedy: !1,
                                    rightAlign: !0,
                                    insertMode: !0,
                                    autoUnmask: !1,
                                    skipOptionalPartCharacter: "",
                                    usePrototypeDefinitions: !1,
                                    stripLeadingZeroes: !0,
                                    substituteRadixPoint: !0,
                                    definitions: {
                                        0: {
                                            validator: d
                                        },
                                        1: {
                                            validator: d,
                                            definitionSymbol: "9"
                                        },
                                        9: {
                                            validator: "[0-9０-９٠-٩۰-۹]",
                                            definitionSymbol: "*"
                                        },
                                        "+": {
                                            validator: function(e, t, n, i, a) {
                                                return a.allowMinus && ("-" === e || e === a.negationSymbol.front);
                                            }
                                        },
                                        "-": {
                                            validator: function(e, t, n, i, a) {
                                                return a.allowMinus && e === a.negationSymbol.back;
                                            }
                                        }
                                    },
                                    preValidation: function(e, t, n, i, a, r, o, l) {
                                        var s = this;
                                        if (!1 !== a.__financeInput && n === a.radixPoint) return !1;
                                        var c = e.indexOf(a.radixPoint), u = t;
                                        if (t = function(e, t, n, i, a) {
                                            return a._radixDance && a.numericInput && t !== a.negationSymbol.back && e <= n && (n > 0 || t == a.radixPoint) && (void 0 === i.validPositions[e - 1] || i.validPositions[e - 1].input !== a.negationSymbol.back) && (e -= 1), 
                                            e;
                                        }(t, n, c, r, a), "-" === n || n === a.negationSymbol.front) {
                                            if (!0 !== a.allowMinus) return !1;
                                            var d = !1, h = p("+", r), v = p("-", r);
                                            return -1 !== h && (d = [ h ], -1 !== v && d.push(v)), !1 !== d ? {
                                                remove: d,
                                                caret: u - a.negationSymbol.back.length
                                            } : {
                                                insert: [ {
                                                    pos: f.call(s, "+", r),
                                                    c: a.negationSymbol.front,
                                                    fromIsValid: !0
                                                }, {
                                                    pos: f.call(s, "-", r),
                                                    c: a.negationSymbol.back,
                                                    fromIsValid: void 0
                                                } ],
                                                caret: u + a.negationSymbol.back.length
                                            };
                                        }
                                        if (n === a.groupSeparator) return {
                                            caret: u
                                        };
                                        if (l) return !0;
                                        if (-1 !== c && !0 === a._radixDance && !1 === i && n === a.radixPoint && void 0 !== a.digits && (isNaN(a.digits) || parseInt(a.digits) > 0) && c !== t) {
                                            var m = f.call(s, a.radixPoint, r);
                                            return r.validPositions[m] && (r.validPositions[m].generatedInput = r.validPositions[m].generated || !1), 
                                            {
                                                caret: a._radixDance && t === c - 1 ? c + 1 : c
                                            };
                                        }
                                        if (!1 === a.__financeInput) if (i) {
                                            if (a.digitsOptional) return {
                                                rewritePosition: o.end
                                            };
                                            if (!a.digitsOptional) {
                                                if (o.begin > c && o.end <= c) return n === a.radixPoint ? {
                                                    insert: {
                                                        pos: c + 1,
                                                        c: "0",
                                                        fromIsValid: !0
                                                    },
                                                    rewritePosition: c
                                                } : {
                                                    rewritePosition: c + 1
                                                };
                                                if (o.begin < c) return {
                                                    rewritePosition: o.begin - 1
                                                };
                                            }
                                        } else if (!a.showMaskOnHover && !a.showMaskOnFocus && !a.digitsOptional && a.digits > 0 && "" === this.__valueGet.call(this.el)) return {
                                            rewritePosition: c
                                        };
                                        return {
                                            rewritePosition: t
                                        };
                                    },
                                    postValidation: function(e, t, n, i, a, r, o) {
                                        if (!1 === i) return i;
                                        if (o) return !0;
                                        if (null !== a.min || null !== a.max) {
                                            var l = a.onUnMask(e.slice().reverse().join(""), void 0, s.extend({}, a, {
                                                unmaskAsNumber: !0
                                            }));
                                            if (null !== a.min && l < a.min && (l.toString().length > a.min.toString().length || l < 0)) return !1;
                                            if (null !== a.max && l > a.max) return !!a.SetMaxOnOverflow && {
                                                refreshFromBuffer: !0,
                                                buffer: u(a.max.toString().replace(".", a.radixPoint).split(""), a.digits, a).reverse()
                                            };
                                        }
                                        return i;
                                    },
                                    onUnMask: function(e, t, n) {
                                        if ("" === t && !0 === n.nullable) return t;
                                        var a = e.replace(n.prefix, "");
                                        return a = (a = a.replace(n.suffix, "")).replace(new RegExp((0, i.default)(n.groupSeparator), "g"), ""), 
                                        "" !== n.placeholder.charAt(0) && (a = a.replace(new RegExp(n.placeholder.charAt(0), "g"), "0")), 
                                        n.unmaskAsNumber ? ("" !== n.radixPoint && -1 !== a.indexOf(n.radixPoint) && (a = a.replace(i.default.call(this, n.radixPoint), ".")), 
                                        a = (a = a.replace(new RegExp("^" + (0, i.default)(n.negationSymbol.front)), "-")).replace(new RegExp((0, 
                                        i.default)(n.negationSymbol.back) + "$"), ""), Number(a)) : a;
                                    },
                                    isComplete: function(e, t) {
                                        var n = (t.numericInput ? e.slice().reverse() : e).join("");
                                        return n = (n = (n = (n = (n = n.replace(new RegExp("^" + (0, i.default)(t.negationSymbol.front)), "-")).replace(new RegExp((0, 
                                        i.default)(t.negationSymbol.back) + "$"), "")).replace(t.prefix, "")).replace(t.suffix, "")).replace(new RegExp((0, 
                                        i.default)(t.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === t.radixPoint && (n = n.replace((0, 
                                        i.default)(t.radixPoint), ".")), isFinite(n);
                                    },
                                    onBeforeMask: function(e, t) {
                                        var n;
                                        e = null !== (n = e) && void 0 !== n ? n : "";
                                        var a = t.radixPoint || ",";
                                        isFinite(t.digits) && (t.digits = parseInt(t.digits)), "number" != typeof e && "number" !== t.inputType || "" === a || (e = e.toString().replace(".", a));
                                        var r = "-" === e.charAt(0) || e.charAt(0) === t.negationSymbol.front, o = e.split(a), l = o[0].replace(/[^\-0-9]/g, ""), s = o.length > 1 ? o[1].replace(/[^0-9]/g, "") : "", c = o.length > 1;
                                        e = l + ("" !== s ? a + s : s);
                                        var f = 0;
                                        if ("" !== a && (f = t.digitsOptional ? t.digits < s.length ? t.digits : s.length : t.digits, 
                                        "" !== s || !t.digitsOptional)) {
                                            var p = Math.pow(10, f || 1);
                                            e = e.replace((0, i.default)(a), "."), isNaN(parseFloat(e)) || (e = (t.roundingFN(parseFloat(e) * p) / p).toFixed(f)), 
                                            e = e.toString().replace(".", a);
                                        }
                                        if (0 === t.digits && -1 !== e.indexOf(a) && (e = e.substring(0, e.indexOf(a))), 
                                        null !== t.min || null !== t.max) {
                                            var d = e.toString().replace(a, ".");
                                            null !== t.min && d < t.min ? e = t.min.toString().replace(".", a) : null !== t.max && d > t.max && (e = t.max.toString().replace(".", a));
                                        }
                                        return r && "-" !== e.charAt(0) && (e = "-" + e), u(e.toString().split(""), f, t, c).join("");
                                    },
                                    onBeforeWrite: function(e, t, n, a) {
                                        function r(e, t) {
                                            if (!1 !== a.__financeInput || t) {
                                                var n = e.indexOf(a.radixPoint);
                                                -1 !== n && e.splice(n, 1);
                                            }
                                            if ("" !== a.groupSeparator) for (;-1 !== (n = e.indexOf(a.groupSeparator)); ) e.splice(n, 1);
                                            return e;
                                        }
                                        var o, l;
                                        if (a.stripLeadingZeroes && (l = function(e, t) {
                                            var n = new RegExp("(^" + ("" !== t.negationSymbol.front ? (0, i.default)(t.negationSymbol.front) + "?" : "") + (0, 
                                            i.default)(t.prefix) + ")(.*)(" + (0, i.default)(t.suffix) + ("" != t.negationSymbol.back ? (0, 
                                            i.default)(t.negationSymbol.back) + "?" : "") + "$)").exec(e.slice().reverse().join("")), a = n ? n[2] : "", r = !1;
                                            return a && (a = a.split(t.radixPoint.charAt(0))[0], r = new RegExp("^[0" + t.groupSeparator + "]*").exec(a)), 
                                            !(!r || !(r[0].length > 1 || r[0].length > 0 && r[0].length < a.length)) && r;
                                        }(t, a))) for (var c = t.join("").lastIndexOf(l[0].split("").reverse().join("")) - (l[0] == l.input ? 0 : 1), f = l[0] == l.input ? 1 : 0, p = l[0].length - f; p > 0; p--) this.maskset.validPositions.splice(c + p, 1), 
                                        delete t[c + p];
                                        if (e) switch (e.type) {
                                          case "blur":
                                          case "checkval":
                                            if (null !== a.min) {
                                                var d = a.onUnMask(t.slice().reverse().join(""), void 0, s.extend({}, a, {
                                                    unmaskAsNumber: !0
                                                }));
                                                if (null !== a.min && d < a.min) return {
                                                    refreshFromBuffer: !0,
                                                    buffer: u(a.min.toString().replace(".", a.radixPoint).split(""), a.digits, a).reverse()
                                                };
                                            }
                                            if (t[t.length - 1] === a.negationSymbol.front) {
                                                var h = new RegExp("(^" + ("" != a.negationSymbol.front ? (0, i.default)(a.negationSymbol.front) + "?" : "") + (0, 
                                                i.default)(a.prefix) + ")(.*)(" + (0, i.default)(a.suffix) + ("" != a.negationSymbol.back ? (0, 
                                                i.default)(a.negationSymbol.back) + "?" : "") + "$)").exec(r(t.slice(), !0).reverse().join(""));
                                                0 == (h ? h[2] : "") && (o = {
                                                    refreshFromBuffer: !0,
                                                    buffer: [ 0 ]
                                                });
                                            } else if ("" !== a.radixPoint) t.indexOf(a.radixPoint) === a.suffix.length && (o && o.buffer ? o.buffer.splice(0, 1 + a.suffix.length) : (t.splice(0, 1 + a.suffix.length), 
                                            o = {
                                                refreshFromBuffer: !0,
                                                buffer: r(t)
                                            }));
                                            if (a.enforceDigitsOnBlur) {
                                                var v = (o = o || {}) && o.buffer || t.slice().reverse();
                                                o.refreshFromBuffer = !0, o.buffer = u(v, a.digits, a, !0).reverse();
                                            }
                                        }
                                        return o;
                                    },
                                    onKeyDown: function(e, t, n, i) {
                                        var a, o = s(this);
                                        if (3 != e.location) {
                                            var l, c = e.key;
                                            if ((l = i.shortcuts && i.shortcuts[c]) && l.length > 1) return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) * parseInt(l)), 
                                            o.trigger("setvalue"), !1;
                                        }
                                        if (e.ctrlKey) switch (e.key) {
                                          case r.keys.ArrowUp:
                                            return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(i.step)), 
                                            o.trigger("setvalue"), !1;

                                          case r.keys.ArrowDown:
                                            return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(i.step)), 
                                            o.trigger("setvalue"), !1;
                                        }
                                        if (!e.shiftKey && (e.key === r.keys.Delete || e.key === r.keys.Backspace || e.key === r.keys.BACKSPACE_SAFARI) && n.begin !== t.length) {
                                            if (t[e.key === r.keys.Delete ? n.begin - 1 : n.end] === i.negationSymbol.front) return a = t.slice().reverse(), 
                                            "" !== i.negationSymbol.front && a.shift(), "" !== i.negationSymbol.back && a.pop(), 
                                            o.trigger("setvalue", [ a.join(""), n.begin ]), !1;
                                            if (!0 === i._radixDance) {
                                                var f, p = t.indexOf(i.radixPoint);
                                                if (i.digitsOptional) {
                                                    if (0 === p) return (a = t.slice().reverse()).pop(), o.trigger("setvalue", [ a.join(""), n.begin >= a.length ? a.length : n.begin ]), 
                                                    !1;
                                                } else if (-1 !== p && (n.begin < p || n.end < p || e.key === r.keys.Delete && (n.begin === p || n.begin - 1 === p))) return n.begin === n.end && (e.key === r.keys.Backspace || e.key === r.keys.BACKSPACE_SAFARI ? n.begin++ : e.key === r.keys.Delete && n.begin - 1 === p && (f = s.extend({}, n), 
                                                n.begin--, n.end--)), (a = t.slice().reverse()).splice(a.length - n.begin, n.begin - n.end + 1), 
                                                a = u(a, i.digits, i).join(""), f && (n = f), o.trigger("setvalue", [ a, n.begin >= a.length ? p + 1 : n.begin ]), 
                                                !1;
                                            }
                                        }
                                    }
                                },
                                currency: {
                                    prefix: "",
                                    groupSeparator: ",",
                                    alias: "numeric",
                                    digits: 2,
                                    digitsOptional: !1
                                },
                                decimal: {
                                    alias: "numeric"
                                },
                                integer: {
                                    alias: "numeric",
                                    inputmode: "numeric",
                                    digits: 0
                                },
                                percentage: {
                                    alias: "numeric",
                                    min: 0,
                                    max: 100,
                                    suffix: " %",
                                    digits: 0,
                                    allowMinus: !1
                                },
                                indianns: {
                                    alias: "numeric",
                                    _mask: function(e) {
                                        return "(" + e.groupSeparator + "99){*|1}(" + e.groupSeparator + "999){1|1}";
                                    },
                                    groupSeparator: ",",
                                    radixPoint: ".",
                                    placeholder: "0",
                                    digits: 2,
                                    digitsOptional: !1
                                }
                            });
                        },
                        9380: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            var n = !("undefined" == typeof window || !window.document || !window.document.createElement);
                            t.default = n ? window : {};
                        },
                        7760: function(e, t, n) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.HandleNativePlaceholder = function(e, t) {
                                var n = e ? e.inputmask : this;
                                if (i.ie) {
                                    if (e.inputmask._valueGet() !== t && (e.placeholder !== t || "" === e.placeholder)) {
                                        var a = o.getBuffer.call(n).slice(), r = e.inputmask._valueGet();
                                        if (r !== t) {
                                            var l = o.getLastValidPosition.call(n);
                                            -1 === l && r === o.getBufferTemplate.call(n).join("") ? a = [] : -1 !== l && u.call(n, a), 
                                            p(e, a);
                                        }
                                    }
                                } else e.placeholder !== t && (e.placeholder = t, "" === e.placeholder && e.removeAttribute("placeholder"));
                            }, t.applyInputValue = c, t.checkVal = f, t.clearOptionalTail = u, t.unmaskedvalue = function(e) {
                                var t = e ? e.inputmask : this, n = t.opts, i = t.maskset;
                                if (e) {
                                    if (void 0 === e.inputmask) return e.value;
                                    e.inputmask && e.inputmask.refreshValue && c(e, e.inputmask._valueGet(!0));
                                }
                                for (var a = [], r = i.validPositions, l = 0, s = r.length; l < s; l++) r[l] && r[l].match && (1 != r[l].match.static || Array.isArray(i.metadata) && !0 !== r[l].generatedInput) && a.push(r[l].input);
                                var u = 0 === a.length ? "" : (t.isRTL ? a.reverse() : a).join("");
                                if ("function" == typeof n.onUnMask) {
                                    var f = (t.isRTL ? o.getBuffer.call(t).slice().reverse() : o.getBuffer.call(t)).join("");
                                    u = n.onUnMask.call(t, f, u, n);
                                }
                                return u;
                            }, t.writeBuffer = p;
                            var i = n(9845), a = n(6030), r = n(2839), o = n(8711), l = n(7215), s = n(4713);
                            function c(e, t, n) {
                                var i = e ? e.inputmask : this, a = i.opts;
                                e.inputmask.refreshValue = !1, "function" == typeof a.onBeforeMask && (t = a.onBeforeMask.call(i, t, a) || t), 
                                f(e, !0, !1, t = (t || "").toString().split(""), n), i.undoValue = i._valueGet(!0), 
                                (a.clearMaskOnLostFocus || a.clearIncomplete) && e.inputmask._valueGet() === o.getBufferTemplate.call(i).join("") && -1 === o.getLastValidPosition.call(i) && e.inputmask._valueSet("");
                            }
                            function u(e) {
                                e.length = 0;
                                for (var t, n = s.getMaskTemplate.call(this, !0, 0, !0, void 0, !0); void 0 !== (t = n.shift()); ) e.push(t);
                                return e;
                            }
                            function f(e, t, n, i, r) {
                                var c, u = e ? e.inputmask : this, f = u.maskset, d = u.opts, h = u.dependencyLib, v = i.slice(), m = "", g = -1, y = d.skipOptionalPartCharacter;
                                d.skipOptionalPartCharacter = "", o.resetMaskSet.call(u, !1), u.clicked = 0, g = d.radixPoint ? o.determineNewCaretPosition.call(u, {
                                    begin: 0,
                                    end: 0
                                }, !1, !1 === d.__financeInput ? "radixFocus" : void 0).begin : 0, f.p = g, u.caretPos = {
                                    begin: g
                                };
                                var k = [], b = u.caretPos;
                                if (v.forEach((function(e, t) {
                                    if (void 0 !== e) {
                                        var i = new h.Event("_checkval");
                                        i.key = e, m += e;
                                        var r = o.getLastValidPosition.call(u, void 0, !0);
                                        !function(e, t) {
                                            for (var n = s.getMaskTemplate.call(u, !0, 0).slice(e, o.seekNext.call(u, e, !1, !1)).join("").replace(/'/g, ""), i = n.indexOf(t); i > 0 && " " === n[i - 1]; ) i--;
                                            var a = 0 === i && !o.isMask.call(u, e) && (s.getTest.call(u, e).match.nativeDef === t.charAt(0) || !0 === s.getTest.call(u, e).match.static && s.getTest.call(u, e).match.nativeDef === "'" + t.charAt(0) || " " === s.getTest.call(u, e).match.nativeDef && (s.getTest.call(u, e + 1).match.nativeDef === t.charAt(0) || !0 === s.getTest.call(u, e + 1).match.static && s.getTest.call(u, e + 1).match.nativeDef === "'" + t.charAt(0)));
                                            if (!a && i > 0 && !o.isMask.call(u, e, !1, !0)) {
                                                var r = o.seekNext.call(u, e);
                                                u.caretPos.begin < r && (u.caretPos = {
                                                    begin: r
                                                });
                                            }
                                            return a;
                                        }(g, m) ? (c = a.EventHandlers.keypressEvent.call(u, i, !0, !1, n, u.caretPos.begin)) && (g = u.caretPos.begin + 1, 
                                        m = "") : c = a.EventHandlers.keypressEvent.call(u, i, !0, !1, n, r + 1), c ? (void 0 !== c.pos && f.validPositions[c.pos] && !0 === f.validPositions[c.pos].match.static && void 0 === f.validPositions[c.pos].alternation && (k.push(c.pos), 
                                        u.isRTL || (c.forwardPosition = c.pos + 1)), p.call(u, void 0, o.getBuffer.call(u), c.forwardPosition, i, !1), 
                                        u.caretPos = {
                                            begin: c.forwardPosition,
                                            end: c.forwardPosition
                                        }, b = u.caretPos) : void 0 === f.validPositions[t] && v[t] === s.getPlaceholder.call(u, t) && o.isMask.call(u, t, !0) ? u.caretPos.begin++ : u.caretPos = b;
                                    }
                                })), k.length > 0) {
                                    var x, w, P = o.seekNext.call(u, -1, void 0, !1);
                                    if (!l.isComplete.call(u, o.getBuffer.call(u)) && k.length <= P || l.isComplete.call(u, o.getBuffer.call(u)) && k.length > 0 && k.length !== P && 0 === k[0]) for (var S = P; void 0 !== (x = k.shift()); ) if (x < S) {
                                        var O = new h.Event("_checkval");
                                        if ((w = f.validPositions[x]).generatedInput = !0, O.key = w.input, (c = a.EventHandlers.keypressEvent.call(u, O, !0, !1, n, S)) && void 0 !== c.pos && c.pos !== x && f.validPositions[c.pos] && !0 === f.validPositions[c.pos].match.static) k.push(c.pos); else if (!c) break;
                                        S++;
                                    }
                                }
                                t && p.call(u, e, o.getBuffer.call(u), c ? c.forwardPosition : u.caretPos.begin, r || new h.Event("checkval"), r && ("input" === r.type && u.undoValue !== o.getBuffer.call(u).join("") || "paste" === r.type)), 
                                d.skipOptionalPartCharacter = y;
                            }
                            function p(e, t, n, i, a) {
                                var s = e ? e.inputmask : this, c = s.opts, u = s.dependencyLib;
                                if (i && "function" == typeof c.onBeforeWrite) {
                                    var f = c.onBeforeWrite.call(s, i, t, n, c);
                                    if (f) {
                                        if (f.refreshFromBuffer) {
                                            var p = f.refreshFromBuffer;
                                            l.refreshFromBuffer.call(s, !0 === p ? p : p.start, p.end, f.buffer || t), t = o.getBuffer.call(s, !0);
                                        }
                                        void 0 !== n && (n = void 0 !== f.caret ? f.caret : n);
                                    }
                                }
                                if (void 0 !== e && (e.inputmask._valueSet(t.join("")), void 0 === n || void 0 !== i && "blur" === i.type || o.caret.call(s, e, n, void 0, void 0, void 0 !== i && "keydown" === i.type && (i.key === r.keys.Delete || i.key === r.keys.Backspace)), 
                                void 0 === e.inputmask.writeBufferHook || e.inputmask.writeBufferHook(n), !0 === a)) {
                                    var d = u(e), h = e.inputmask._valueGet();
                                    e.inputmask.skipInputEvent = !0, d.trigger("input"), setTimeout((function() {
                                        h === o.getBufferTemplate.call(s).join("") ? d.trigger("cleared") : !0 === l.isComplete.call(s, t) && d.trigger("complete");
                                    }), 0);
                                }
                            }
                        },
                        2394: function(e, t, n) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = void 0;
                            var i = v(n(3976)), a = v(n(7392)), r = v(n(4963)), o = n(9716), l = v(n(9380)), s = n(7760), c = n(157), u = n(2391), f = n(8711), p = n(7215), d = n(4713);
                            function h(e) {
                                return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, h(e);
                            }
                            function v(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var m = l.default.document, g = "_inputmask_opts";
                            function y(e, t, n) {
                                if (!(this instanceof y)) return new y(e, t, n);
                                this.dependencyLib = r.default, this.el = void 0, this.events = {}, this.maskset = void 0, 
                                !0 !== n && ("[object Object]" === Object.prototype.toString.call(e) ? t = e : (t = t || {}, 
                                e && (t.alias = e)), this.opts = r.default.extend(!0, {}, this.defaults, t), this.noMasksCache = t && void 0 !== t.definitions, 
                                this.userOptions = t || {}, k(this.opts.alias, t, this.opts)), this.refreshValue = !1, 
                                this.undoValue = void 0, this.$el = void 0, this.skipInputEvent = !1, this.validationEvent = !1, 
                                this.ignorable = !1, this.maxLength, this.mouseEnter = !1, this.clicked = 0, this.originalPlaceholder = void 0, 
                                this.isComposing = !1, this.hasAlternator = !1;
                            }
                            function k(e, t, n) {
                                var i = y.prototype.aliases[e];
                                return i ? (i.alias && k(i.alias, void 0, n), r.default.extend(!0, n, i), r.default.extend(!0, n, t), 
                                !0) : (null === n.mask && (n.mask = e), !1);
                            }
                            y.prototype = {
                                dataAttribute: "data-inputmask",
                                defaults: i.default,
                                definitions: a.default,
                                aliases: {},
                                masksCache: {},
                                i18n: {},
                                get isRTL() {
                                    return this.opts.isRTL || this.opts.numericInput;
                                },
                                mask: function(e) {
                                    var t = this;
                                    return "string" == typeof e && (e = m.getElementById(e) || m.querySelectorAll(e)), 
                                    (e = e.nodeName ? [ e ] : Array.isArray(e) ? e : [].slice.call(e)).forEach((function(e, n) {
                                        var i = r.default.extend(!0, {}, t.opts);
                                        if (function(e, t, n, i) {
                                            function a(t, a) {
                                                var r = "" === i ? t : i + "-" + t;
                                                null !== (a = void 0 !== a ? a : e.getAttribute(r)) && ("string" == typeof a && (0 === t.indexOf("on") ? a = l.default[a] : "false" === a ? a = !1 : "true" === a && (a = !0)), 
                                                n[t] = a);
                                            }
                                            if (!0 === t.importDataAttributes) {
                                                var o, s, c, u, f = e.getAttribute(i);
                                                if (f && "" !== f && (f = f.replace(/'/g, '"'), s = JSON.parse("{" + f + "}")), 
                                                s) for (u in c = void 0, s) if ("alias" === u.toLowerCase()) {
                                                    c = s[u];
                                                    break;
                                                }
                                                for (o in a("alias", c), n.alias && k(n.alias, n, t), t) {
                                                    if (s) for (u in c = void 0, s) if (u.toLowerCase() === o.toLowerCase()) {
                                                        c = s[u];
                                                        break;
                                                    }
                                                    a(o, c);
                                                }
                                            }
                                            r.default.extend(!0, t, n), ("rtl" === e.dir || t.rightAlign) && (e.style.textAlign = "right");
                                            ("rtl" === e.dir || t.numericInput) && (e.dir = "ltr", e.removeAttribute("dir"), 
                                            t.isRTL = !0);
                                            return Object.keys(n).length;
                                        }(e, i, r.default.extend(!0, {}, t.userOptions), t.dataAttribute)) {
                                            var a = (0, u.generateMaskSet)(i, t.noMasksCache);
                                            void 0 !== a && (void 0 !== e.inputmask && (e.inputmask.opts.autoUnmask = !0, e.inputmask.remove()), 
                                            e.inputmask = new y(void 0, void 0, !0), e.inputmask.opts = i, e.inputmask.noMasksCache = t.noMasksCache, 
                                            e.inputmask.userOptions = r.default.extend(!0, {}, t.userOptions), e.inputmask.el = e, 
                                            e.inputmask.$el = (0, r.default)(e), e.inputmask.maskset = a, r.default.data(e, g, t.userOptions), 
                                            c.mask.call(e.inputmask));
                                        }
                                    })), e && e[0] && e[0].inputmask || this;
                                },
                                option: function(e, t) {
                                    return "string" == typeof e ? this.opts[e] : "object" === h(e) ? (r.default.extend(this.userOptions, e), 
                                    this.el && !0 !== t && this.mask(this.el), this) : void 0;
                                },
                                unmaskedvalue: function(e) {
                                    if (this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache), 
                                    void 0 === this.el || void 0 !== e) {
                                        var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                                        s.checkVal.call(this, void 0, !1, !1, t), "function" == typeof this.opts.onBeforeWrite && this.opts.onBeforeWrite.call(this, void 0, f.getBuffer.call(this), 0, this.opts);
                                    }
                                    return s.unmaskedvalue.call(this, this.el);
                                },
                                remove: function() {
                                    if (this.el) {
                                        r.default.data(this.el, g, null);
                                        var e = this.opts.autoUnmask ? (0, s.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask);
                                        e !== f.getBufferTemplate.call(this).join("") ? this._valueSet(e, this.opts.autoUnmask) : this._valueSet(""), 
                                        o.EventRuler.off(this.el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value") && this.__valueGet && Object.defineProperty(this.el, "value", {
                                            get: this.__valueGet,
                                            set: this.__valueSet,
                                            configurable: !0
                                        }) : m.__lookupGetter__ && this.el.__lookupGetter__("value") && this.__valueGet && (this.el.__defineGetter__("value", this.__valueGet), 
                                        this.el.__defineSetter__("value", this.__valueSet)), this.el.inputmask = void 0;
                                    }
                                    return this.el;
                                },
                                getemptymask: function() {
                                    return this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache), 
                                    (this.isRTL ? f.getBufferTemplate.call(this).reverse() : f.getBufferTemplate.call(this)).join("");
                                },
                                hasMaskedValue: function() {
                                    return !this.opts.autoUnmask;
                                },
                                isComplete: function() {
                                    return this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache), 
                                    p.isComplete.call(this, f.getBuffer.call(this));
                                },
                                getmetadata: function() {
                                    if (this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache), 
                                    Array.isArray(this.maskset.metadata)) {
                                        var e = d.getMaskTemplate.call(this, !0, 0, !1).join("");
                                        return this.maskset.metadata.forEach((function(t) {
                                            return t.mask !== e || (e = t, !1);
                                        })), e;
                                    }
                                    return this.maskset.metadata;
                                },
                                isValid: function(e) {
                                    if (this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache), 
                                    e) {
                                        var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                                        s.checkVal.call(this, void 0, !0, !1, t);
                                    } else e = this.isRTL ? f.getBuffer.call(this).slice().reverse().join("") : f.getBuffer.call(this).join("");
                                    for (var n = f.getBuffer.call(this), i = f.determineLastRequiredPosition.call(this), a = n.length - 1; a > i && !f.isMask.call(this, a); a--) ;
                                    return n.splice(i, a + 1 - i), p.isComplete.call(this, n) && e === (this.isRTL ? f.getBuffer.call(this).slice().reverse().join("") : f.getBuffer.call(this).join(""));
                                },
                                format: function(e, t) {
                                    this.maskset = this.maskset || (0, u.generateMaskSet)(this.opts, this.noMasksCache);
                                    var n = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                                    s.checkVal.call(this, void 0, !0, !1, n);
                                    var i = this.isRTL ? f.getBuffer.call(this).slice().reverse().join("") : f.getBuffer.call(this).join("");
                                    return t ? {
                                        value: i,
                                        metadata: this.getmetadata()
                                    } : i;
                                },
                                setValue: function(e) {
                                    this.el && (0, r.default)(this.el).trigger("setvalue", [ e ]);
                                },
                                analyseMask: u.analyseMask
                            }, y.extendDefaults = function(e) {
                                r.default.extend(!0, y.prototype.defaults, e);
                            }, y.extendDefinitions = function(e) {
                                r.default.extend(!0, y.prototype.definitions, e);
                            }, y.extendAliases = function(e) {
                                r.default.extend(!0, y.prototype.aliases, e);
                            }, y.format = function(e, t, n) {
                                return y(t).format(e, n);
                            }, y.unmask = function(e, t) {
                                return y(t).unmaskedvalue(e);
                            }, y.isValid = function(e, t) {
                                return y(t).isValid(e);
                            }, y.remove = function(e) {
                                "string" == typeof e && (e = m.getElementById(e) || m.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                                    e.inputmask && e.inputmask.remove();
                                }));
                            }, y.setValue = function(e, t) {
                                "string" == typeof e && (e = m.getElementById(e) || m.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                                    e.inputmask ? e.inputmask.setValue(t) : (0, r.default)(e).trigger("setvalue", [ t ]);
                                }));
                            }, y.dependencyLib = r.default, l.default.Inputmask = y;
                            t.default = y;
                        },
                        5296: function(e, t, n) {
                            function i(e) {
                                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, i(e);
                            }
                            var a = d(n(9380)), r = d(n(2394));
                            function o(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var a = t[n];
                                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                                    Object.defineProperty(e, (r = a.key, o = void 0, o = function(e, t) {
                                        if ("object" !== i(e) || null === e) return e;
                                        var n = e[Symbol.toPrimitive];
                                        if (void 0 !== n) {
                                            var a = n.call(e, t || "default");
                                            if ("object" !== i(a)) return a;
                                            throw new TypeError("@@toPrimitive must return a primitive value.");
                                        }
                                        return ("string" === t ? String : Number)(e);
                                    }(r, "string"), "symbol" === i(o) ? o : String(o)), a);
                                }
                                var r, o;
                            }
                            function l(e) {
                                var t = u();
                                return function() {
                                    var n, a = p(e);
                                    if (t) {
                                        var r = p(this).constructor;
                                        n = Reflect.construct(a, arguments, r);
                                    } else n = a.apply(this, arguments);
                                    return function(e, t) {
                                        if (t && ("object" === i(t) || "function" == typeof t)) return t;
                                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                                        return function(e) {
                                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                            return e;
                                        }(e);
                                    }(this, n);
                                };
                            }
                            function s(e) {
                                var t = "function" == typeof Map ? new Map : void 0;
                                return s = function(e) {
                                    if (null === e || !function(e) {
                                        try {
                                            return -1 !== Function.toString.call(e).indexOf("[native code]");
                                        } catch (t) {
                                            return "function" == typeof e;
                                        }
                                    }(e)) return e;
                                    if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                                    if (void 0 !== t) {
                                        if (t.has(e)) return t.get(e);
                                        t.set(e, n);
                                    }
                                    function n() {
                                        return c(e, arguments, p(this).constructor);
                                    }
                                    return n.prototype = Object.create(e.prototype, {
                                        constructor: {
                                            value: n,
                                            enumerable: !1,
                                            writable: !0,
                                            configurable: !0
                                        }
                                    }), f(n, e);
                                }, s(e);
                            }
                            function c(e, t, n) {
                                return c = u() ? Reflect.construct.bind() : function(e, t, n) {
                                    var i = [ null ];
                                    i.push.apply(i, t);
                                    var a = new (Function.bind.apply(e, i));
                                    return n && f(a, n.prototype), a;
                                }, c.apply(null, arguments);
                            }
                            function u() {
                                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                                if (Reflect.construct.sham) return !1;
                                if ("function" == typeof Proxy) return !0;
                                try {
                                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                                    !0;
                                } catch (e) {
                                    return !1;
                                }
                            }
                            function f(e, t) {
                                return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                                    return e.__proto__ = t, e;
                                }, f(e, t);
                            }
                            function p(e) {
                                return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                                    return e.__proto__ || Object.getPrototypeOf(e);
                                }, p(e);
                            }
                            function d(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                            var h = a.default.document;
                            if (h && h.head && h.head.attachShadow && a.default.customElements && void 0 === a.default.customElements.get("input-mask")) {
                                var v = function(e) {
                                    !function(e, t) {
                                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                        e.prototype = Object.create(t && t.prototype, {
                                            constructor: {
                                                value: e,
                                                writable: !0,
                                                configurable: !0
                                            }
                                        }), Object.defineProperty(e, "prototype", {
                                            writable: !1
                                        }), t && f(e, t);
                                    }(s, e);
                                    var t, n, i, a = l(s);
                                    function s() {
                                        var e;
                                        !function(e, t) {
                                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                                        }(this, s);
                                        var t = (e = a.call(this)).getAttributeNames(), n = e.attachShadow({
                                            mode: "closed"
                                        });
                                        for (var i in e.input = h.createElement("input"), e.input.type = "text", n.appendChild(e.input), 
                                        t) Object.prototype.hasOwnProperty.call(t, i) && e.input.setAttribute(t[i], e.getAttribute(t[i]));
                                        var o = new r.default;
                                        return o.dataAttribute = "", o.mask(e.input), e.input.inputmask.shadowRoot = n, 
                                        e;
                                    }
                                    return t = s, (n = [ {
                                        key: "attributeChangedCallback",
                                        value: function(e, t, n) {
                                            this.input.setAttribute(e, n);
                                        }
                                    }, {
                                        key: "value",
                                        get: function() {
                                            return this.input.value;
                                        },
                                        set: function(e) {
                                            this.input.value = e;
                                        }
                                    } ]) && o(t.prototype, n), i && o(t, i), Object.defineProperty(t, "prototype", {
                                        writable: !1
                                    }), s;
                                }(s(HTMLElement));
                                a.default.customElements.define("input-mask", v);
                            }
                        },
                        2839: function(e, t) {
                            function n(e) {
                                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, n(e);
                            }
                            function i(e, t) {
                                return function(e) {
                                    if (Array.isArray(e)) return e;
                                }(e) || function(e, t) {
                                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (null != n) {
                                        var i, a, r, o, l = [], s = !0, c = !1;
                                        try {
                                            if (r = (n = n.call(e)).next, 0 === t) {
                                                if (Object(n) !== n) return;
                                                s = !1;
                                            } else for (;!(s = (i = r.call(n)).done) && (l.push(i.value), l.length !== t); s = !0) ;
                                        } catch (e) {
                                            c = !0, a = e;
                                        } finally {
                                            try {
                                                if (!s && null != n.return && (o = n.return(), Object(o) !== o)) return;
                                            } finally {
                                                if (c) throw a;
                                            }
                                        }
                                        return l;
                                    }
                                }(e, t) || function(e, t) {
                                    if (!e) return;
                                    if ("string" == typeof e) return a(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    "Object" === n && e.constructor && (n = e.constructor.name);
                                    if ("Map" === n || "Set" === n) return Array.from(e);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t);
                                }(e, t) || function() {
                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }();
                            }
                            function a(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                                return i;
                            }
                            function r(e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    t && (i = i.filter((function(t) {
                                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                                    }))), n.push.apply(n, i);
                                }
                                return n;
                            }
                            function o(e, t, i) {
                                return (t = function(e) {
                                    var t = function(e, t) {
                                        if ("object" !== n(e) || null === e) return e;
                                        var i = e[Symbol.toPrimitive];
                                        if (void 0 !== i) {
                                            var a = i.call(e, t || "default");
                                            if ("object" !== n(a)) return a;
                                            throw new TypeError("@@toPrimitive must return a primitive value.");
                                        }
                                        return ("string" === t ? String : Number)(e);
                                    }(e, "string");
                                    return "symbol" === n(t) ? t : String(t);
                                }(t)) in e ? Object.defineProperty(e, t, {
                                    value: i,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : e[t] = i, e;
                            }
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.keys = t.keyCode = void 0, t.toKey = function(e, t) {
                                return s[e] || (t ? String.fromCharCode(e) : String.fromCharCode(e).toLowerCase());
                            }, t.toKeyCode = function(e) {
                                return l[e];
                            };
                            var l = t.keyCode = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? r(Object(n), !0).forEach((function(t) {
                                        o(e, t, n[t]);
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                    }));
                                }
                                return e;
                            }({
                                c: 67,
                                x: 88,
                                z: 90,
                                BACKSPACE_SAFARI: 127,
                                Enter: 13,
                                Meta_LEFT: 91,
                                Meta_RIGHT: 92,
                                Space: 32
                            }, {
                                Alt: 18,
                                AltGraph: 18,
                                ArrowDown: 40,
                                ArrowLeft: 37,
                                ArrowRight: 39,
                                ArrowUp: 38,
                                Backspace: 8,
                                CapsLock: 20,
                                Control: 17,
                                ContextMenu: 93,
                                Dead: 221,
                                Delete: 46,
                                End: 35,
                                Escape: 27,
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
                                Home: 36,
                                Insert: 45,
                                NumLock: 144,
                                PageDown: 34,
                                PageUp: 33,
                                Pause: 19,
                                PrintScreen: 44,
                                Process: 229,
                                Shift: 16,
                                ScrollLock: 145,
                                Tab: 9,
                                Unidentified: 229
                            }), s = Object.entries(l).reduce((function(e, t) {
                                var n = i(t, 2), a = n[0], r = n[1];
                                return e[r] = void 0 === e[r] ? a : e[r], e;
                            }), {});
                            t.keys = Object.entries(l).reduce((function(e, t) {
                                var n = i(t, 2), a = n[0];
                                n[1];
                                return e[a] = "Space" === a ? " " : a, e;
                            }), {});
                        },
                        2391: function(e, t, n) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.analyseMask = function(e, t, n) {
                                var i, a, s, c, u, f, p = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, d = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, h = !1, v = new o.default, m = [], g = [], y = !1;
                                function k(e, i, a) {
                                    a = void 0 !== a ? a : e.matches.length;
                                    var o = e.matches[a - 1];
                                    if (t) {
                                        if (0 === i.indexOf("[") || h && /\\d|\\s|\\w|\\p/i.test(i) || "." === i) {
                                            var s = n.casing ? "i" : "";
                                            /\\p\{.*}/i.test(i) && (s += "u"), e.matches.splice(a++, 0, {
                                                fn: new RegExp(i, s),
                                                static: !1,
                                                optionality: !1,
                                                newBlockMarker: void 0 === o ? "master" : o.def !== i,
                                                casing: null,
                                                def: i,
                                                placeholder: "object" === l(n.placeholder) ? n.placeholder[v.matches.length] : void 0,
                                                nativeDef: i
                                            });
                                        } else h && (i = i[i.length - 1]), i.split("").forEach((function(t, i) {
                                            o = e.matches[a - 1], e.matches.splice(a++, 0, {
                                                fn: /[a-z]/i.test(n.staticDefinitionSymbol || t) ? new RegExp("[" + (n.staticDefinitionSymbol || t) + "]", n.casing ? "i" : "") : null,
                                                static: !0,
                                                optionality: !1,
                                                newBlockMarker: void 0 === o ? "master" : o.def !== t && !0 !== o.static,
                                                casing: null,
                                                def: n.staticDefinitionSymbol || t,
                                                placeholder: void 0 !== n.staticDefinitionSymbol ? t : "object" === l(n.placeholder) ? n.placeholder[v.matches.length] : void 0,
                                                nativeDef: (h ? "'" : "") + t
                                            });
                                        }));
                                        h = !1;
                                    } else {
                                        var c = n.definitions && n.definitions[i] || n.usePrototypeDefinitions && r.default.prototype.definitions[i];
                                        c && !h ? e.matches.splice(a++, 0, {
                                            fn: c.validator ? "string" == typeof c.validator ? new RegExp(c.validator, n.casing ? "i" : "") : new function() {
                                                this.test = c.validator;
                                            } : /./,
                                            static: c.static || !1,
                                            optionality: c.optional || !1,
                                            defOptionality: c.optional || !1,
                                            newBlockMarker: void 0 === o || c.optional ? "master" : o.def !== (c.definitionSymbol || i),
                                            casing: c.casing,
                                            def: c.definitionSymbol || i,
                                            placeholder: c.placeholder,
                                            nativeDef: i,
                                            generated: c.generated
                                        }) : (e.matches.splice(a++, 0, {
                                            fn: /[a-z]/i.test(n.staticDefinitionSymbol || i) ? new RegExp("[" + (n.staticDefinitionSymbol || i) + "]", n.casing ? "i" : "") : null,
                                            static: !0,
                                            optionality: !1,
                                            newBlockMarker: void 0 === o ? "master" : o.def !== i && !0 !== o.static,
                                            casing: null,
                                            def: n.staticDefinitionSymbol || i,
                                            placeholder: void 0 !== n.staticDefinitionSymbol ? i : void 0,
                                            nativeDef: (h ? "'" : "") + i
                                        }), h = !1);
                                    }
                                }
                                function b() {
                                    if (m.length > 0) {
                                        if (k(c = m[m.length - 1], a), c.isAlternator) {
                                            u = m.pop();
                                            for (var e = 0; e < u.matches.length; e++) u.matches[e].isGroup && (u.matches[e].isGroup = !1);
                                            m.length > 0 ? (c = m[m.length - 1]).matches.push(u) : v.matches.push(u);
                                        }
                                    } else k(v, a);
                                }
                                function x(e) {
                                    var t = new o.default(!0);
                                    return t.openGroup = !1, t.matches = e, t;
                                }
                                function w() {
                                    if ((s = m.pop()).openGroup = !1, void 0 !== s) if (m.length > 0) {
                                        if ((c = m[m.length - 1]).matches.push(s), c.isAlternator) {
                                            u = m.pop();
                                            for (var e = 0; e < u.matches.length; e++) u.matches[e].isGroup = !1, u.matches[e].alternatorGroup = !1;
                                            m.length > 0 ? (c = m[m.length - 1]).matches.push(u) : v.matches.push(u);
                                        }
                                    } else v.matches.push(s); else b();
                                }
                                function P(e) {
                                    var t = e.pop();
                                    return t.isQuantifier && (t = x([ e.pop(), t ])), t;
                                }
                                t && (n.optionalmarker[0] = void 0, n.optionalmarker[1] = void 0);
                                for (;i = t ? d.exec(e) : p.exec(e); ) {
                                    if (a = i[0], t) {
                                        switch (a.charAt(0)) {
                                          case "?":
                                            a = "{0,1}";
                                            break;

                                          case "+":
                                          case "*":
                                            a = "{" + a + "}";
                                            break;

                                          case "|":
                                            if (0 === m.length) {
                                                var S = x(v.matches);
                                                S.openGroup = !0, m.push(S), v.matches = [], y = !0;
                                            }
                                        }
                                        switch (a) {
                                          case "\\d":
                                            a = "[0-9]";
                                            break;

                                          case "\\p":
                                            a += d.exec(e)[0], a += d.exec(e)[0];
                                        }
                                    }
                                    if (h) b(); else switch (a.charAt(0)) {
                                      case "$":
                                      case "^":
                                        t || b();
                                        break;

                                      case n.escapeChar:
                                        h = !0, t && b();
                                        break;

                                      case n.optionalmarker[1]:
                                      case n.groupmarker[1]:
                                        w();
                                        break;

                                      case n.optionalmarker[0]:
                                        m.push(new o.default(!1, !0));
                                        break;

                                      case n.groupmarker[0]:
                                        m.push(new o.default(!0));
                                        break;

                                      case n.quantifiermarker[0]:
                                        var O = new o.default(!1, !1, !0), _ = (a = a.replace(/[{}?]/g, "")).split("|"), M = _[0].split(","), E = isNaN(M[0]) ? M[0] : parseInt(M[0]), j = 1 === M.length ? E : isNaN(M[1]) ? M[1] : parseInt(M[1]), T = isNaN(_[1]) ? _[1] : parseInt(_[1]);
                                        "*" !== E && "+" !== E || (E = "*" === j ? 0 : 1), O.quantifier = {
                                            min: E,
                                            max: j,
                                            jit: T
                                        };
                                        var A = m.length > 0 ? m[m.length - 1].matches : v.matches;
                                        (i = A.pop()).isGroup || (i = x([ i ])), A.push(i), A.push(O);
                                        break;

                                      case n.alternatormarker:
                                        if (m.length > 0) {
                                            var D = (c = m[m.length - 1]).matches[c.matches.length - 1];
                                            f = c.openGroup && (void 0 === D.matches || !1 === D.isGroup && !1 === D.isAlternator) ? m.pop() : P(c.matches);
                                        } else f = P(v.matches);
                                        if (f.isAlternator) m.push(f); else if (f.alternatorGroup ? (u = m.pop(), f.alternatorGroup = !1) : u = new o.default(!1, !1, !1, !0), 
                                        u.matches.push(f), m.push(u), f.openGroup) {
                                            f.openGroup = !1;
                                            var L = new o.default(!0);
                                            L.alternatorGroup = !0, m.push(L);
                                        }
                                        break;

                                      default:
                                        b();
                                    }
                                }
                                y && w();
                                for (;m.length > 0; ) s = m.pop(), v.matches.push(s);
                                v.matches.length > 0 && (!function e(i) {
                                    i && i.matches && i.matches.forEach((function(a, r) {
                                        var o = i.matches[r + 1];
                                        (void 0 === o || void 0 === o.matches || !1 === o.isQuantifier) && a && a.isGroup && (a.isGroup = !1, 
                                        t || (k(a, n.groupmarker[0], 0), !0 !== a.openGroup && k(a, n.groupmarker[1]))), 
                                        e(a);
                                    }));
                                }(v), g.push(v));
                                (n.numericInput || n.isRTL) && function e(t) {
                                    for (var i in t.matches = t.matches.reverse(), t.matches) if (Object.prototype.hasOwnProperty.call(t.matches, i)) {
                                        var a = parseInt(i);
                                        if (t.matches[i].isQuantifier && t.matches[a + 1] && t.matches[a + 1].isGroup) {
                                            var r = t.matches[i];
                                            t.matches.splice(i, 1), t.matches.splice(a + 1, 0, r);
                                        }
                                        void 0 !== t.matches[i].matches ? t.matches[i] = e(t.matches[i]) : t.matches[i] = ((o = t.matches[i]) === n.optionalmarker[0] ? o = n.optionalmarker[1] : o === n.optionalmarker[1] ? o = n.optionalmarker[0] : o === n.groupmarker[0] ? o = n.groupmarker[1] : o === n.groupmarker[1] && (o = n.groupmarker[0]), 
                                        o);
                                    }
                                    var o;
                                    return t;
                                }(g[0]);
                                return g;
                            }, t.generateMaskSet = function(e, t) {
                                var n;
                                function o(e, t) {
                                    var n = t.repeat, i = t.groupmarker, r = t.quantifiermarker, o = t.keepStatic;
                                    if (n > 0 || "*" === n || "+" === n) {
                                        var l = "*" === n ? 0 : "+" === n ? 1 : n;
                                        if (l != n) e = i[0] + e + i[1] + r[0] + l + "," + n + r[1]; else for (var c = e, u = 1; u < l; u++) e += c;
                                    }
                                    if (!0 === o) {
                                        var f = e.match(new RegExp("(.)\\[([^\\]]*)\\]", "g"));
                                        f && f.forEach((function(t, n) {
                                            var i = function(e, t) {
                                                return function(e) {
                                                    if (Array.isArray(e)) return e;
                                                }(e) || function(e, t) {
                                                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                                    if (null != n) {
                                                        var i, a, r, o, l = [], s = !0, c = !1;
                                                        try {
                                                            if (r = (n = n.call(e)).next, 0 === t) {
                                                                if (Object(n) !== n) return;
                                                                s = !1;
                                                            } else for (;!(s = (i = r.call(n)).done) && (l.push(i.value), l.length !== t); s = !0) ;
                                                        } catch (e) {
                                                            c = !0, a = e;
                                                        } finally {
                                                            try {
                                                                if (!s && null != n.return && (o = n.return(), Object(o) !== o)) return;
                                                            } finally {
                                                                if (c) throw a;
                                                            }
                                                        }
                                                        return l;
                                                    }
                                                }(e, t) || function(e, t) {
                                                    if (!e) return;
                                                    if ("string" == typeof e) return s(e, t);
                                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                                    "Object" === n && e.constructor && (n = e.constructor.name);
                                                    if ("Map" === n || "Set" === n) return Array.from(e);
                                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return s(e, t);
                                                }(e, t) || function() {
                                                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                                }();
                                            }(t.split("["), 2), r = i[0], o = i[1];
                                            o = o.replace("]", ""), e = e.replace(new RegExp("".concat((0, a.default)(r), "\\[").concat((0, 
                                            a.default)(o), "\\]")), r.charAt(0) === o.charAt(0) ? "(".concat(r, "|").concat(r).concat(o, ")") : "".concat(r, "[").concat(o, "]"));
                                        }));
                                    }
                                    return e;
                                }
                                function c(e, n, a) {
                                    var s, c, u = !1;
                                    return null !== e && "" !== e || ((u = null !== a.regex) ? e = (e = a.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (u = !0, 
                                    e = ".*")), 1 === e.length && !1 === a.greedy && 0 !== a.repeat && (a.placeholder = ""), 
                                    e = o(e, a), c = u ? "regex_" + a.regex : a.numericInput ? e.split("").reverse().join("") : e, 
                                    null !== a.keepStatic && (c = "ks_" + a.keepStatic + c), "object" === l(a.placeholder) && (c = "ph_" + JSON.stringify(a.placeholder) + c), 
                                    void 0 === r.default.prototype.masksCache[c] || !0 === t ? (s = {
                                        mask: e,
                                        maskToken: r.default.prototype.analyseMask(e, u, a),
                                        validPositions: [],
                                        _buffer: void 0,
                                        buffer: void 0,
                                        tests: {},
                                        excludes: {},
                                        metadata: n,
                                        maskLength: void 0,
                                        jitOffset: {}
                                    }, !0 !== t && (r.default.prototype.masksCache[c] = s, s = i.default.extend(!0, {}, r.default.prototype.masksCache[c]))) : s = i.default.extend(!0, {}, r.default.prototype.masksCache[c]), 
                                    s;
                                }
                                "function" == typeof e.mask && (e.mask = e.mask(e));
                                if (Array.isArray(e.mask)) {
                                    if (e.mask.length > 1) {
                                        null === e.keepStatic && (e.keepStatic = !0);
                                        var u = e.groupmarker[0];
                                        return (e.isRTL ? e.mask.reverse() : e.mask).forEach((function(t) {
                                            u.length > 1 && (u += e.alternatormarker), void 0 !== t.mask && "function" != typeof t.mask ? u += t.mask : u += t;
                                        })), c(u += e.groupmarker[1], e.mask, e);
                                    }
                                    e.mask = e.mask.pop();
                                }
                                n = e.mask && void 0 !== e.mask.mask && "function" != typeof e.mask.mask ? c(e.mask.mask, e.mask, e) : c(e.mask, e.mask, e);
                                null === e.keepStatic && (e.keepStatic = !1);
                                return n;
                            };
                            var i = c(n(4963)), a = c(n(7184)), r = c(n(2394)), o = c(n(9695));
                            function l(e) {
                                return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, l(e);
                            }
                            function s(e, t) {
                                (null == t || t > e.length) && (t = e.length);
                                for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                                return i;
                            }
                            function c(e) {
                                return e && e.__esModule ? e : {
                                    default: e
                                };
                            }
                        },
                        157: function(e, t, n) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.mask = function() {
                                var e = this, t = this.opts, n = this.el, c = this.dependencyLib;
                                r.EventRuler.off(n);
                                var u = function(t, n) {
                                    var i = t.getAttribute("type"), a = "input" === t.tagName.toLowerCase() && n.supportsInputType.includes(i) || t.isContentEditable || "textarea" === t.tagName.toLowerCase();
                                    if (!a) if ("input" === t.tagName.toLowerCase()) {
                                        var s = document.createElement("input");
                                        s.setAttribute("type", i), a = "text" === s.type, s = null;
                                    } else a = "partial";
                                    return !1 !== a ? function(t) {
                                        var i, a;
                                        function s() {
                                            return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== l.getLastValidPosition.call(e) || !0 !== n.nullable ? (this.inputmask.shadowRoot || this.ownerDocument).activeElement === this && n.clearMaskOnLostFocus ? (e.isRTL ? o.clearOptionalTail.call(e, l.getBuffer.call(e).slice()).reverse() : o.clearOptionalTail.call(e, l.getBuffer.call(e).slice())).join("") : i.call(this) : "" : i.call(this);
                                        }
                                        function u(e) {
                                            a.call(this, e), this.inputmask && (0, o.applyInputValue)(this, e);
                                        }
                                        if (!t.inputmask.__valueGet) {
                                            if (!0 !== n.noValuePatching) {
                                                if (Object.getOwnPropertyDescriptor) {
                                                    var f = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : void 0;
                                                    f && f.get && f.set ? (i = f.get, a = f.set, Object.defineProperty(t, "value", {
                                                        get: s,
                                                        set: u,
                                                        configurable: !0
                                                    })) : "input" !== t.tagName.toLowerCase() && (i = function() {
                                                        return this.textContent;
                                                    }, a = function(e) {
                                                        this.textContent = e;
                                                    }, Object.defineProperty(t, "value", {
                                                        get: s,
                                                        set: u,
                                                        configurable: !0
                                                    }));
                                                } else document.__lookupGetter__ && t.__lookupGetter__("value") && (i = t.__lookupGetter__("value"), 
                                                a = t.__lookupSetter__("value"), t.__defineGetter__("value", s), t.__defineSetter__("value", u));
                                                t.inputmask.__valueGet = i, t.inputmask.__valueSet = a;
                                            }
                                            t.inputmask._valueGet = function(t) {
                                                return e.isRTL && !0 !== t ? i.call(this.el).split("").reverse().join("") : i.call(this.el);
                                            }, t.inputmask._valueSet = function(t, n) {
                                                a.call(this.el, null == t ? "" : !0 !== n && e.isRTL ? t.split("").reverse().join("") : t);
                                            }, void 0 === i && (i = function() {
                                                return this.value;
                                            }, a = function(e) {
                                                this.value = e;
                                            }, function(t) {
                                                if (c.valHooks && (void 0 === c.valHooks[t] || !0 !== c.valHooks[t].inputmaskpatch)) {
                                                    var i = c.valHooks[t] && c.valHooks[t].get ? c.valHooks[t].get : function(e) {
                                                        return e.value;
                                                    }, a = c.valHooks[t] && c.valHooks[t].set ? c.valHooks[t].set : function(e, t) {
                                                        return e.value = t, e;
                                                    };
                                                    c.valHooks[t] = {
                                                        get: function(t) {
                                                            if (t.inputmask) {
                                                                if (t.inputmask.opts.autoUnmask) return t.inputmask.unmaskedvalue();
                                                                var a = i(t);
                                                                return -1 !== l.getLastValidPosition.call(e, void 0, void 0, t.inputmask.maskset.validPositions) || !0 !== n.nullable ? a : "";
                                                            }
                                                            return i(t);
                                                        },
                                                        set: function(e, t) {
                                                            var n = a(e, t);
                                                            return e.inputmask && (0, o.applyInputValue)(e, t), n;
                                                        },
                                                        inputmaskpatch: !0
                                                    };
                                                }
                                            }(t.type), function(e) {
                                                r.EventRuler.on(e, "mouseenter", (function() {
                                                    var e = this, t = e.inputmask._valueGet(!0);
                                                    t != (e.inputmask.isRTL ? l.getBuffer.call(e.inputmask).slice().reverse() : l.getBuffer.call(e.inputmask)).join("") && (0, 
                                                    o.applyInputValue)(e, t);
                                                }));
                                            }(t));
                                        }
                                    }(t) : t.inputmask = void 0, a;
                                }(n, t);
                                if (!1 !== u) {
                                    e.originalPlaceholder = n.placeholder, e.maxLength = void 0 !== n ? n.maxLength : void 0, 
                                    -1 === e.maxLength && (e.maxLength = void 0), "inputMode" in n && null === n.getAttribute("inputmode") && (n.inputMode = t.inputmode, 
                                    n.setAttribute("inputmode", t.inputmode)), !0 === u && (t.showMaskOnFocus = t.showMaskOnFocus && -1 === [ "cc-number", "cc-exp" ].indexOf(n.autocomplete), 
                                    i.iphone && (t.insertModeVisual = !1, n.setAttribute("autocorrect", "off")), r.EventRuler.on(n, "submit", a.EventHandlers.submitEvent), 
                                    r.EventRuler.on(n, "reset", a.EventHandlers.resetEvent), r.EventRuler.on(n, "blur", a.EventHandlers.blurEvent), 
                                    r.EventRuler.on(n, "focus", a.EventHandlers.focusEvent), r.EventRuler.on(n, "invalid", a.EventHandlers.invalidEvent), 
                                    r.EventRuler.on(n, "click", a.EventHandlers.clickEvent), r.EventRuler.on(n, "mouseleave", a.EventHandlers.mouseleaveEvent), 
                                    r.EventRuler.on(n, "mouseenter", a.EventHandlers.mouseenterEvent), r.EventRuler.on(n, "paste", a.EventHandlers.pasteEvent), 
                                    r.EventRuler.on(n, "cut", a.EventHandlers.cutEvent), r.EventRuler.on(n, "complete", t.oncomplete), 
                                    r.EventRuler.on(n, "incomplete", t.onincomplete), r.EventRuler.on(n, "cleared", t.oncleared), 
                                    !0 !== t.inputEventOnly && r.EventRuler.on(n, "keydown", a.EventHandlers.keyEvent), 
                                    (i.mobile || t.inputEventOnly) && n.removeAttribute("maxLength"), r.EventRuler.on(n, "input", a.EventHandlers.inputFallBackEvent)), 
                                    r.EventRuler.on(n, "setvalue", a.EventHandlers.setValueEvent), void 0 === e.applyMaskHook || e.applyMaskHook(), 
                                    l.getBufferTemplate.call(e).join(""), e.undoValue = e._valueGet(!0);
                                    var f = (n.inputmask.shadowRoot || n.ownerDocument).activeElement;
                                    if ("" !== n.inputmask._valueGet(!0) || !1 === t.clearMaskOnLostFocus || f === n) {
                                        (0, o.applyInputValue)(n, n.inputmask._valueGet(!0), t);
                                        var p = l.getBuffer.call(e).slice();
                                        !1 === s.isComplete.call(e, p) && t.clearIncomplete && l.resetMaskSet.call(e, !1), 
                                        t.clearMaskOnLostFocus && f !== n && (-1 === l.getLastValidPosition.call(e) ? p = [] : o.clearOptionalTail.call(e, p)), 
                                        (!1 === t.clearMaskOnLostFocus || t.showMaskOnFocus && f === n || "" !== n.inputmask._valueGet(!0)) && (0, 
                                        o.writeBuffer)(n, p), f === n && l.caret.call(e, n, l.seekNext.call(e, l.getLastValidPosition.call(e)));
                                    }
                                }
                            };
                            var i = n(9845), a = n(6030), r = n(9716), o = n(7760), l = n(8711), s = n(7215);
                        },
                        9695: function(e, t) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.default = function(e, t, n, i) {
                                this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, 
                                this.isOptional = t || !1, this.isQuantifier = n || !1, this.isAlternator = i || !1, 
                                this.quantifier = {
                                    min: 1,
                                    max: 1
                                };
                            };
                        },
                        3194: function() {
                            Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                                value: function(e, t) {
                                    if (null == this) throw new TypeError('"this" is null or not defined');
                                    var n = Object(this), i = n.length >>> 0;
                                    if (0 === i) return !1;
                                    for (var a = 0 | t, r = Math.max(a >= 0 ? a : i - Math.abs(a), 0); r < i; ) {
                                        if (n[r] === e) return !0;
                                        r++;
                                    }
                                    return !1;
                                }
                            });
                        },
                        9302: function() {
                            var e = Function.bind.call(Function.call, Array.prototype.reduce), t = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable), n = Function.bind.call(Function.call, Array.prototype.concat), i = Object.keys;
                            Object.entries || (Object.entries = function(a) {
                                return e(i(a), (function(e, i) {
                                    return n(e, "string" == typeof i && t(a, i) ? [ [ i, a[i] ] ] : []);
                                }), []);
                            });
                        },
                        7149: function() {
                            function e(t) {
                                return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, e(t);
                            }
                            "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === e("test".__proto__) ? function(e) {
                                return e.__proto__;
                            } : function(e) {
                                return e.constructor.prototype;
                            });
                        },
                        4013: function() {
                            String.prototype.includes || (String.prototype.includes = function(e, t) {
                                return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t);
                            });
                        },
                        8711: function(e, t, n) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.caret = function(e, t, n, i, r) {
                                var o, l = this, s = this.opts;
                                if (void 0 === t) return "selectionStart" in e && "selectionEnd" in e ? (t = e.selectionStart, 
                                n = e.selectionEnd) : a.default.getSelection ? (o = a.default.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && o.commonAncestorContainer !== e || (t = o.startOffset, 
                                n = o.endOffset) : document.selection && document.selection.createRange && (n = (t = 0 - (o = document.selection.createRange()).duplicate().moveStart("character", -e.inputmask._valueGet().length)) + o.text.length), 
                                {
                                    begin: i ? t : f.call(l, t),
                                    end: i ? n : f.call(l, n)
                                };
                                if (Array.isArray(t) && (n = l.isRTL ? t[0] : t[1], t = l.isRTL ? t[1] : t[0]), 
                                void 0 !== t.begin && (n = l.isRTL ? t.begin : t.end, t = l.isRTL ? t.end : t.begin), 
                                "number" == typeof t) {
                                    t = i ? t : f.call(l, t), n = "number" == typeof (n = i ? n : f.call(l, n)) ? n : t;
                                    var c = parseInt(((e.ownerDocument.defaultView || a.default).getComputedStyle ? (e.ownerDocument.defaultView || a.default).getComputedStyle(e, null) : e.currentStyle).fontSize) * n;
                                    if (e.scrollLeft = c > e.scrollWidth ? c : 0, e.inputmask.caretPos = {
                                        begin: t,
                                        end: n
                                    }, s.insertModeVisual && !1 === s.insertMode && t === n && (r || n++), e === (e.inputmask.shadowRoot || e.ownerDocument).activeElement) {
                                        if ("setSelectionRange" in e) e.setSelectionRange(t, n); else if (a.default.getSelection) {
                                            if (o = document.createRange(), void 0 === e.firstChild || null === e.firstChild) {
                                                var u = document.createTextNode("");
                                                e.appendChild(u);
                                            }
                                            o.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length), 
                                            o.setEnd(e.firstChild, n < e.inputmask._valueGet().length ? n : e.inputmask._valueGet().length), 
                                            o.collapse(!0);
                                            var p = a.default.getSelection();
                                            p.removeAllRanges(), p.addRange(o);
                                        } else e.createTextRange && ((o = e.createTextRange()).collapse(!0), o.moveEnd("character", n), 
                                        o.moveStart("character", t), o.select());
                                        void 0 === e.inputmask.caretHook || e.inputmask.caretHook.call(l, {
                                            begin: t,
                                            end: n
                                        });
                                    }
                                }
                            }, t.determineLastRequiredPosition = function(e) {
                                var t, n, i = this, a = i.maskset, l = i.dependencyLib, c = s.call(i), u = {}, f = a.validPositions[c], p = o.getMaskTemplate.call(i, !0, s.call(i), !0, !0), d = p.length, h = void 0 !== f ? f.locator.slice() : void 0;
                                for (t = c + 1; t < p.length; t++) h = (n = o.getTestTemplate.call(i, t, h, t - 1)).locator.slice(), 
                                u[t] = l.extend(!0, {}, n);
                                var v = f && void 0 !== f.alternation ? f.locator[f.alternation] : void 0;
                                for (t = d - 1; t > c && ((n = u[t]).match.optionality || n.match.optionalQuantifier && n.match.newBlockMarker || v && (v !== u[t].locator[f.alternation] && !0 !== n.match.static || !0 === n.match.static && n.locator[f.alternation] && r.checkAlternationMatch.call(i, n.locator[f.alternation].toString().split(","), v.toString().split(",")) && "" !== o.getTests.call(i, t)[0].def)) && p[t] === o.getPlaceholder.call(i, t, n.match); t--) d--;
                                return e ? {
                                    l: d,
                                    def: u[d] ? u[d].match : void 0
                                } : d;
                            }, t.determineNewCaretPosition = function(e, t, n) {
                                var i, a, r, f = this, p = f.maskset, d = f.opts;
                                t && (f.isRTL ? e.end = e.begin : e.begin = e.end);
                                if (e.begin === e.end) {
                                    switch (n = n || d.positionCaretOnClick) {
                                      case "none":
                                        break;

                                      case "select":
                                        e = {
                                            begin: 0,
                                            end: l.call(f).length
                                        };
                                        break;

                                      case "ignore":
                                        e.end = e.begin = u.call(f, s.call(f));
                                        break;

                                      case "radixFocus":
                                        if (f.clicked > 1 && 0 === p.validPositions.length) break;
                                        if (function(e) {
                                            if ("" !== d.radixPoint && 0 !== d.digits) {
                                                var t = p.validPositions;
                                                if (void 0 === t[e] || void 0 === t[e].input) {
                                                    if (e < u.call(f, -1)) return !0;
                                                    var n = l.call(f).indexOf(d.radixPoint);
                                                    if (-1 !== n) {
                                                        for (var i = 0, a = t.length; i < a; i++) if (t[i] && n < i && t[i].input !== o.getPlaceholder.call(f, i)) return !1;
                                                        return !0;
                                                    }
                                                }
                                            }
                                            return !1;
                                        }(e.begin)) {
                                            var h = l.call(f).join("").indexOf(d.radixPoint);
                                            e.end = e.begin = d.numericInput ? u.call(f, h) : h;
                                            break;
                                        }

                                      default:
                                        if (i = e.begin, a = s.call(f, i, !0), i <= (r = u.call(f, -1 !== a || c.call(f, 0) ? a : -1))) e.end = e.begin = c.call(f, i, !1, !0) ? i : u.call(f, i); else {
                                            var v = p.validPositions[a], m = o.getTestTemplate.call(f, r, v ? v.match.locator : void 0, v), g = o.getPlaceholder.call(f, r, m.match);
                                            if ("" !== g && l.call(f)[r] !== g && !0 !== m.match.optionalQuantifier && !0 !== m.match.newBlockMarker || !c.call(f, r, d.keepStatic, !0) && m.match.def === g) {
                                                var y = u.call(f, r);
                                                (i >= y || i === r) && (r = y);
                                            }
                                            e.end = e.begin = r;
                                        }
                                    }
                                    return e;
                                }
                            }, t.getBuffer = l, t.getBufferTemplate = function() {
                                var e = this.maskset;
                                void 0 === e._buffer && (e._buffer = o.getMaskTemplate.call(this, !1, 1), void 0 === e.buffer && (e.buffer = e._buffer.slice()));
                                return e._buffer;
                            }, t.getLastValidPosition = s, t.isMask = c, t.resetMaskSet = function(e) {
                                var t = this.maskset;
                                t.buffer = void 0, !0 !== e && (t.validPositions = [], t.p = 0);
                                !1 === e && (t.tests = {}, t.jitOffset = {});
                            }, t.seekNext = u, t.seekPrevious = function(e, t) {
                                var n = this, i = e - 1;
                                if (e <= 0) return 0;
                                for (;i > 0 && (!0 === t && (!0 !== o.getTest.call(n, i).match.newBlockMarker || !c.call(n, i, void 0, !0)) || !0 !== t && !c.call(n, i, void 0, !0)); ) i--;
                                return i;
                            }, t.translatePosition = f;
                            var i, a = (i = n(9380)) && i.__esModule ? i : {
                                default: i
                            }, r = n(7215), o = n(4713);
                            function l(e) {
                                var t = this, n = t.maskset;
                                return void 0 !== n.buffer && !0 !== e || (n.buffer = o.getMaskTemplate.call(t, !0, s.call(t), !0), 
                                void 0 === n._buffer && (n._buffer = n.buffer.slice())), n.buffer;
                            }
                            function s(e, t, n) {
                                var i = this.maskset, a = -1, r = -1, o = n || i.validPositions;
                                void 0 === e && (e = -1);
                                for (var l = 0, s = o.length; l < s; l++) o[l] && (t || !0 !== o[l].generatedInput) && (l <= e && (a = l), 
                                l >= e && (r = l));
                                return -1 === a || a === e ? r : -1 === r || e - a < r - e ? a : r;
                            }
                            function c(e, t, n) {
                                var i = this, a = this.maskset, r = o.getTestTemplate.call(i, e).match;
                                if ("" === r.def && (r = o.getTest.call(i, e).match), !0 !== r.static) return r.fn;
                                if (!0 === n && void 0 !== a.validPositions[e] && !0 !== a.validPositions[e].generatedInput) return !0;
                                if (!0 !== t && e > -1) {
                                    if (n) {
                                        var l = o.getTests.call(i, e);
                                        return l.length > 1 + ("" === l[l.length - 1].match.def ? 1 : 0);
                                    }
                                    var s = o.determineTestTemplate.call(i, e, o.getTests.call(i, e)), c = o.getPlaceholder.call(i, e, s.match);
                                    return s.match.def !== c;
                                }
                                return !1;
                            }
                            function u(e, t, n) {
                                var i = this;
                                void 0 === n && (n = !0);
                                for (var a = e + 1; "" !== o.getTest.call(i, a).match.def && (!0 === t && (!0 !== o.getTest.call(i, a).match.newBlockMarker || !c.call(i, a, void 0, !0)) || !0 !== t && !c.call(i, a, void 0, n)); ) a++;
                                return a;
                            }
                            function f(e) {
                                var t = this.opts, n = this.el;
                                return !this.isRTL || "number" != typeof e || t.greedy && "" === t.placeholder || !n || (e = this._valueGet().length - e) < 0 && (e = 0), 
                                e;
                            }
                        },
                        4713: function(e, t, n) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.determineTestTemplate = f, t.getDecisionTaker = s, t.getMaskTemplate = function(e, t, n, i, a) {
                                var r = this, o = this.opts, l = this.maskset, s = o.greedy;
                                a && o.greedy && (o.greedy = !1, r.maskset.tests = {});
                                t = t || 0;
                                var p, d, v, m, g = [], y = 0;
                                do {
                                    if (!0 === e && l.validPositions[y]) d = (v = a && l.validPositions[y].match.optionality && void 0 === l.validPositions[y + 1] && (!0 === l.validPositions[y].generatedInput || l.validPositions[y].input == o.skipOptionalPartCharacter && y > 0) ? f.call(r, y, h.call(r, y, p, y - 1)) : l.validPositions[y]).match, 
                                    p = v.locator.slice(), g.push(!0 === n ? v.input : !1 === n ? d.nativeDef : c.call(r, y, d)); else {
                                        d = (v = u.call(r, y, p, y - 1)).match, p = v.locator.slice();
                                        var k = !0 !== i && (!1 !== o.jitMasking ? o.jitMasking : d.jit);
                                        (m = (m || l.validPositions[y - 1]) && d.static && d.def !== o.groupSeparator && null === d.fn) || !1 === k || void 0 === k || "number" == typeof k && isFinite(k) && k > y ? g.push(!1 === n ? d.nativeDef : c.call(r, g.length, d)) : m = !1;
                                    }
                                    y++;
                                } while (!0 !== d.static || "" !== d.def || t > y);
                                "" === g[g.length - 1] && g.pop();
                                !1 === n && void 0 !== l.maskLength || (l.maskLength = y - 1);
                                return o.greedy = s, g;
                            }, t.getPlaceholder = c, t.getTest = p, t.getTestTemplate = u, t.getTests = h, t.isSubsetOf = d;
                            var i, a = (i = n(2394)) && i.__esModule ? i : {
                                default: i
                            }, r = n(8711);
                            function o(e) {
                                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                    return typeof e;
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                }, o(e);
                            }
                            function l(e, t) {
                                var n = (null != e.alternation ? e.mloc[s(e)] : e.locator).join("");
                                if ("" !== n) for (n = n.split(":")[0]; n.length < t; ) n += "0";
                                return n;
                            }
                            function s(e) {
                                var t = e.locator[e.alternation];
                                return "string" == typeof t && t.length > 0 && (t = t.split(",")[0]), void 0 !== t ? t.toString() : "";
                            }
                            function c(e, t, n) {
                                var i = this, a = this.opts, l = this.maskset;
                                if (void 0 !== (t = t || p.call(i, e).match).placeholder || !0 === n) {
                                    if ("" !== t.placeholder && !0 === t.static && !0 !== t.generated) {
                                        var s = r.getLastValidPosition.call(i, e), c = r.seekNext.call(i, s);
                                        return (n ? e <= c : e < c) ? a.staticDefinitionSymbol && t.static ? t.nativeDef : t.def : "function" == typeof t.placeholder ? t.placeholder(a) : t.placeholder;
                                    }
                                    return "function" == typeof t.placeholder ? t.placeholder(a) : t.placeholder;
                                }
                                if (!0 === t.static) {
                                    if (e > -1 && void 0 === l.validPositions[e]) {
                                        var u, f = h.call(i, e), d = [];
                                        if ("string" == typeof a.placeholder && f.length > 1 + ("" === f[f.length - 1].match.def ? 1 : 0)) for (var v = 0; v < f.length; v++) if ("" !== f[v].match.def && !0 !== f[v].match.optionality && !0 !== f[v].match.optionalQuantifier && (!0 === f[v].match.static || void 0 === u || !1 !== f[v].match.fn.test(u.match.def, l, e, !0, a)) && (d.push(f[v]), 
                                        !0 === f[v].match.static && (u = f[v]), d.length > 1 && /[0-9a-bA-Z]/.test(d[0].match.def))) return a.placeholder.charAt(e % a.placeholder.length);
                                    }
                                    return t.def;
                                }
                                return "object" === o(a.placeholder) ? t.def : a.placeholder.charAt(e % a.placeholder.length);
                            }
                            function u(e, t, n) {
                                return this.maskset.validPositions[e] || f.call(this, e, h.call(this, e, t ? t.slice() : t, n));
                            }
                            function f(e, t) {
                                var n = this.opts, i = 0, a = function(e, t) {
                                    var n = 0, i = !1;
                                    t.forEach((function(e) {
                                        e.match.optionality && (0 !== n && n !== e.match.optionality && (i = !0), (0 === n || n > e.match.optionality) && (n = e.match.optionality));
                                    })), n && (0 == e || 1 == t.length ? n = 0 : i || (n = 0));
                                    return n;
                                }(e, t);
                                e = e > 0 ? e - 1 : 0;
                                var r, o, s, c = l(p.call(this, e));
                                n.greedy && t.length > 1 && "" === t[t.length - 1].match.def && (i = 1);
                                for (var u = 0; u < t.length - i; u++) {
                                    var f = t[u];
                                    r = l(f, c.length);
                                    var d = Math.abs(r - c);
                                    (!0 !== f.unMatchedAlternationStopped || t.filter((function(e) {
                                        return !0 !== e.unMatchedAlternationStopped;
                                    })).length <= 1) && (void 0 === o || "" !== r && d < o || s && !n.greedy && s.match.optionality && s.match.optionality - a > 0 && "master" === s.match.newBlockMarker && (!f.match.optionality || f.match.optionality - a < 1 || !f.match.newBlockMarker) || s && !n.greedy && s.match.optionalQuantifier && !f.match.optionalQuantifier) && (o = d, 
                                    s = f);
                                }
                                return s;
                            }
                            function p(e, t) {
                                var n = this.maskset;
                                return n.validPositions[e] ? n.validPositions[e] : (t || h.call(this, e))[0];
                            }
                            function d(e, t, n) {
                                function i(e) {
                                    for (var t, n = [], i = -1, a = 0, r = e.length; a < r; a++) if ("-" === e.charAt(a)) for (t = e.charCodeAt(a + 1); ++i < t; ) n.push(String.fromCharCode(i)); else i = e.charCodeAt(a), 
                                    n.push(e.charAt(a));
                                    return n.join("");
                                }
                                return e.match.def === t.match.nativeDef || !(!(n.regex || e.match.fn instanceof RegExp && t.match.fn instanceof RegExp) || !0 === e.match.static || !0 === t.match.static) && ("." === t.match.fn.source || -1 !== i(t.match.fn.source.replace(/[[\]/]/g, "")).indexOf(i(e.match.fn.source.replace(/[[\]/]/g, ""))));
                            }
                            function h(e, t, n) {
                                var i, r, o = this, l = this.dependencyLib, s = this.maskset, c = this.opts, u = this.el, p = s.maskToken, h = t ? n : 0, v = t ? t.slice() : [ 0 ], m = [], g = !1, y = t ? t.join("") : "", k = !1;
                                function b(t, n, r, l) {
                                    function f(r, l, p) {
                                        function v(e, t) {
                                            var n = 0 === t.matches.indexOf(e);
                                            return n || t.matches.every((function(i, a) {
                                                return !0 === i.isQuantifier ? n = v(e, t.matches[a - 1]) : Object.prototype.hasOwnProperty.call(i, "matches") && (n = v(e, i)), 
                                                !n;
                                            })), n;
                                        }
                                        function w(e, t, n) {
                                            var i, a;
                                            if ((s.tests[e] || s.validPositions[e]) && (s.validPositions[e] ? [ s.validPositions[e] ] : s.tests[e]).every((function(e, r) {
                                                if (e.mloc[t]) return i = e, !1;
                                                var o = void 0 !== n ? n : e.alternation, l = void 0 !== e.locator[o] ? e.locator[o].toString().indexOf(t) : -1;
                                                return (void 0 === a || l < a) && -1 !== l && (i = e, a = l), !0;
                                            })), i) {
                                                var r = i.locator[i.alternation], o = i.mloc[t] || i.mloc[r] || i.locator;
                                                if (-1 !== o[o.length - 1].toString().indexOf(":")) o.pop();
                                                return o.slice((void 0 !== n ? n : i.alternation) + 1);
                                            }
                                            return void 0 !== n ? w(e, t) : void 0;
                                        }
                                        function P(t, n) {
                                            return !0 === t.match.static && !0 !== n.match.static && n.match.fn.test(t.match.def, s, e, !1, c, !1);
                                        }
                                        function S(e, t) {
                                            var n = e.alternation, i = void 0 === t || n <= t.alternation && -1 === e.locator[n].toString().indexOf(t.locator[n]);
                                            if (!i && n > t.alternation) for (var a = 0; a < n; a++) if (e.locator[a] !== t.locator[a]) {
                                                n = a, i = !0;
                                                break;
                                            }
                                            return !!i && function(n) {
                                                e.mloc = e.mloc || {};
                                                var i = e.locator[n];
                                                if (void 0 !== i) {
                                                    if ("string" == typeof i && (i = i.split(",")[0]), void 0 === e.mloc[i] && (e.mloc[i] = e.locator.slice(), 
                                                    e.mloc[i].push(":".concat(e.alternation))), void 0 !== t) {
                                                        for (var a in t.mloc) "string" == typeof a && (a = parseInt(a.split(",")[0])), e.mloc[a + 0] = t.mloc[a];
                                                        e.locator[n] = Object.keys(e.mloc).join(",");
                                                    }
                                                    return e.alternation > n && (e.alternation = n), !0;
                                                }
                                                return e.alternation = void 0, !1;
                                            }(n);
                                        }
                                        function O(e, t) {
                                            if (e.locator.length !== t.locator.length) return !1;
                                            for (var n = e.alternation + 1; n < e.locator.length; n++) if (e.locator[n] !== t.locator[n]) return !1;
                                            return !0;
                                        }
                                        if (h > e + c._maxTestPos) throw new Error("Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. ".concat(s.mask));
                                        if (h === e && void 0 === r.matches) {
                                            if (m.push({
                                                match: r,
                                                locator: l.reverse(),
                                                cd: y,
                                                mloc: {}
                                            }), !r.optionality || void 0 !== p || !(c.definitions && c.definitions[r.nativeDef] && c.definitions[r.nativeDef].optional || a.default.prototype.definitions[r.nativeDef] && a.default.prototype.definitions[r.nativeDef].optional)) return !0;
                                            g = !0, h = e;
                                        } else if (void 0 !== r.matches) {
                                            if (r.isGroup && p !== r) return function() {
                                                if (r = f(t.matches[t.matches.indexOf(r) + 1], l, p)) return !0;
                                            }();
                                            if (r.isOptional) return function() {
                                                var t = r, a = m.length;
                                                if (r = b(r, n, l, p), m.length > 0) {
                                                    if (m.forEach((function(e, t) {
                                                        t >= a && (e.match.optionality = e.match.optionality ? e.match.optionality + 1 : 1);
                                                    })), i = m[m.length - 1].match, void 0 !== p || !v(i, t)) return r;
                                                    g = !0, h = e;
                                                }
                                            }();
                                            if (r.isAlternator) return function() {
                                                function i(e) {
                                                    for (var t, n = e.matches[0].matches ? e.matches[0].matches.length : 1, i = 0; i < e.matches.length && n === (t = e.matches[i].matches ? e.matches[i].matches.length : 1); i++) ;
                                                    return n !== t;
                                                }
                                                o.hasAlternator = !0;
                                                var a, v = r, y = [], b = m.slice(), x = l.length, _ = n.length > 0 ? n.shift() : -1;
                                                if (-1 === _ || "string" == typeof _) {
                                                    var M, E = h, j = n.slice(), T = [];
                                                    if ("string" == typeof _) T = _.split(","); else for (M = 0; M < v.matches.length; M++) T.push(M.toString());
                                                    if (void 0 !== s.excludes[e]) {
                                                        for (var A = T.slice(), D = 0, L = s.excludes[e].length; D < L; D++) {
                                                            var C = s.excludes[e][D].toString().split(":");
                                                            l.length == C[1] && T.splice(T.indexOf(C[0]), 1);
                                                        }
                                                        0 === T.length && (delete s.excludes[e], T = A);
                                                    }
                                                    (!0 === c.keepStatic || isFinite(parseInt(c.keepStatic)) && E >= c.keepStatic) && (T = T.slice(0, 1));
                                                    for (var B = 0; B < T.length; B++) {
                                                        M = parseInt(T[B]), m = [], n = "string" == typeof _ && w(h, M, x) || j.slice();
                                                        var I = v.matches[M];
                                                        if (I && f(I, [ M ].concat(l), p)) r = !0; else if (0 === B && (k = i(v)), I && I.matches && I.matches.length > v.matches[0].matches.length) break;
                                                        a = m.slice(), h = E, m = [];
                                                        for (var R = 0; R < a.length; R++) {
                                                            var F = a[R], N = !1;
                                                            F.alternation = F.alternation || x, S(F);
                                                            for (var V = 0; V < y.length; V++) {
                                                                var G = y[V];
                                                                if ("string" != typeof _ || void 0 !== F.alternation && T.includes(F.locator[F.alternation].toString())) {
                                                                    if (F.match.nativeDef === G.match.nativeDef) {
                                                                        N = !0, S(G, F);
                                                                        break;
                                                                    }
                                                                    if (d(F, G, c)) {
                                                                        S(F, G) && (N = !0, y.splice(y.indexOf(G), 0, F));
                                                                        break;
                                                                    }
                                                                    if (d(G, F, c)) {
                                                                        S(G, F);
                                                                        break;
                                                                    }
                                                                    if (P(F, G)) {
                                                                        O(F, G) || void 0 !== u.inputmask.userOptions.keepStatic ? S(F, G) && (N = !0, y.splice(y.indexOf(G), 0, F)) : c.keepStatic = !0;
                                                                        break;
                                                                    }
                                                                    if (P(G, F)) {
                                                                        S(G, F);
                                                                        break;
                                                                    }
                                                                }
                                                            }
                                                            N || y.push(F);
                                                        }
                                                    }
                                                    m = b.concat(y), h = e, g = m.length > 0 && k, r = y.length > 0 && !k, k && g && !r && m.forEach((function(e, t) {
                                                        e.unMatchedAlternationStopped = !0;
                                                    })), n = j.slice();
                                                } else r = f(v.matches[_] || t.matches[_], [ _ ].concat(l), p);
                                                if (r) return !0;
                                            }();
                                            if (r.isQuantifier && p !== t.matches[t.matches.indexOf(r) - 1]) return function() {
                                                for (var a = r, o = !1, u = n.length > 0 ? n.shift() : 0; u < (isNaN(a.quantifier.max) ? u + 1 : a.quantifier.max) && h <= e; u++) {
                                                    var p = t.matches[t.matches.indexOf(a) - 1];
                                                    if (r = f(p, [ u ].concat(l), p)) {
                                                        if (m.forEach((function(t, n) {
                                                            (i = x(p, t.match) ? t.match : m[m.length - 1].match).optionalQuantifier = u >= a.quantifier.min, 
                                                            i.jit = (u + 1) * (p.matches.indexOf(i) + 1) > a.quantifier.jit, i.optionalQuantifier && v(i, p) && (g = !0, 
                                                            h = e, c.greedy && null == s.validPositions[e - 1] && u > a.quantifier.min && -1 != [ "*", "+" ].indexOf(a.quantifier.max) && (m.pop(), 
                                                            y = void 0), o = !0, r = !1), !o && i.jit && (s.jitOffset[e] = p.matches.length - p.matches.indexOf(i));
                                                        })), o) break;
                                                        return !0;
                                                    }
                                                }
                                            }();
                                            if (r = b(r, n, l, p)) return !0;
                                        } else h++;
                                    }
                                    for (var p = n.length > 0 ? n.shift() : 0; p < t.matches.length; p++) if (!0 !== t.matches[p].isQuantifier) {
                                        var v = f(t.matches[p], [ p ].concat(r), l);
                                        if (v && h === e) return v;
                                        if (h > e) break;
                                    }
                                }
                                function x(e, t) {
                                    var n = -1 != e.matches.indexOf(t);
                                    return n || e.matches.forEach((function(e, i) {
                                        void 0 === e.matches || n || (n = x(e, t));
                                    })), n;
                                }
                                if (e > -1) {
                                    if (void 0 === t) {
                                        for (var w, P = e - 1; void 0 === (w = s.validPositions[P] || s.tests[P]) && P > -1; ) P--;
                                        void 0 !== w && P > -1 && (v = function(e, t) {
                                            var n, i = [];
                                            return Array.isArray(t) || (t = [ t ]), t.length > 0 && (void 0 === t[0].alternation || !0 === c.keepStatic ? 0 === (i = f.call(o, e, t.slice()).locator.slice()).length && (i = t[0].locator.slice()) : t.forEach((function(e) {
                                                "" !== e.def && (0 === i.length ? (n = e.alternation, i = e.locator.slice()) : e.locator[n] && -1 === i[n].toString().indexOf(e.locator[n]) && (i[n] += "," + e.locator[n]));
                                            }))), i;
                                        }(P, w), y = v.join(""), h = P);
                                    }
                                    if (s.tests[e] && s.tests[e][0].cd === y) return s.tests[e];
                                    for (var S = v.shift(); S < p.length; S++) if (b(p[S], v, [ S ]) && h === e || h > e) break;
                                }
                                return (0 === m.length || g) && m.push({
                                    match: {
                                        fn: null,
                                        static: !0,
                                        optionality: !1,
                                        casing: null,
                                        def: "",
                                        placeholder: ""
                                    },
                                    locator: k && 0 === m.filter((function(e) {
                                        return !0 !== e.unMatchedAlternationStopped;
                                    })).length ? [ 0 ] : [],
                                    mloc: {},
                                    cd: y
                                }), void 0 !== t && s.tests[e] ? r = l.extend(!0, [], m) : (s.tests[e] = l.extend(!0, [], m), 
                                r = s.tests[e]), m.forEach((function(e) {
                                    e.match.optionality = e.match.defOptionality || !1;
                                })), r;
                            }
                        },
                        7215: function(e, t, n) {
                            Object.defineProperty(t, "__esModule", {
                                value: !0
                            }), t.alternate = l, t.checkAlternationMatch = function(e, t, n) {
                                for (var i, a = this.opts.greedy ? t : t.slice(0, 1), r = !1, o = void 0 !== n ? n.split(",") : [], l = 0; l < o.length; l++) -1 !== (i = e.indexOf(o[l])) && e.splice(i, 1);
                                for (var s = 0; s < e.length; s++) if (a.includes(e[s])) {
                                    r = !0;
                                    break;
                                }
                                return r;
                            }, t.handleRemove = function(e, t, n, i, s) {
                                var c = this, u = this.maskset, f = this.opts;
                                if ((f.numericInput || c.isRTL) && (t === a.keys.Backspace ? t = a.keys.Delete : t === a.keys.Delete && (t = a.keys.Backspace), 
                                c.isRTL)) {
                                    var p = n.end;
                                    n.end = n.begin, n.begin = p;
                                }
                                var d, h = r.getLastValidPosition.call(c, void 0, !0);
                                n.end >= r.getBuffer.call(c).length && h >= n.end && (n.end = h + 1);
                                t === a.keys.Backspace ? n.end - n.begin < 1 && (n.begin = r.seekPrevious.call(c, n.begin)) : t === a.keys.Delete && n.begin === n.end && (n.end = r.isMask.call(c, n.end, !0, !0) ? n.end + 1 : r.seekNext.call(c, n.end) + 1);
                                !1 !== (d = v.call(c, n)) && ((!0 !== i && !1 !== f.keepStatic || null !== f.regex && -1 !== o.getTest.call(c, n.begin).match.def.indexOf("|")) && l.call(c, !0), 
                                !0 !== i && (u.p = t === a.keys.Delete ? n.begin + d : n.begin, u.p = r.determineNewCaretPosition.call(c, {
                                    begin: u.p,
                                    end: u.p
                                }, !1, !1 === f.insertMode && t === a.keys.Backspace ? "none" : void 0).begin));
                            }, t.isComplete = c, t.isSelection = u, t.isValid = f, t.refreshFromBuffer = d, 
                            t.revalidateMask = v;
                            var i = n(6030), a = n(2839), r = n(8711), o = n(4713);
                            function l(e, t, n, i, a, s) {
                                var c = this, u = this.dependencyLib, p = this.opts, d = c.maskset;
                                if (!c.hasAlternator) return !1;
                                var h, v, m, g, y, k, b, x, w, P, S, O = u.extend(!0, [], d.validPositions), _ = u.extend(!0, {}, d.tests), M = !1, E = !1, j = void 0 !== a ? a : r.getLastValidPosition.call(c);
                                if (s && (P = s.begin, S = s.end, s.begin > s.end && (P = s.end, S = s.begin)), 
                                -1 === j && void 0 === a) h = 0, v = (g = o.getTest.call(c, h)).alternation; else for (;j >= 0; j--) if ((m = d.validPositions[j]) && void 0 !== m.alternation) {
                                    if (j <= (e || 0) && g && g.locator[m.alternation] !== m.locator[m.alternation]) break;
                                    h = j, v = d.validPositions[h].alternation, g = m;
                                }
                                if (void 0 !== v) {
                                    b = parseInt(h), d.excludes[b] = d.excludes[b] || [], !0 !== e && d.excludes[b].push((0, 
                                    o.getDecisionTaker)(g) + ":" + g.alternation);
                                    var T = [], A = -1;
                                    for (y = b; b < r.getLastValidPosition.call(c, void 0, !0) + 1; y++) -1 === A && e <= y && void 0 !== t && (T.push(t), 
                                    A = T.length - 1), (k = d.validPositions[b]) && !0 !== k.generatedInput && (void 0 === s || y < P || y >= S) && T.push(k.input), 
                                    d.validPositions.splice(b, 1);
                                    for (-1 === A && void 0 !== t && (T.push(t), A = T.length - 1); void 0 !== d.excludes[b] && d.excludes[b].length < 10; ) {
                                        for (d.tests = {}, r.resetMaskSet.call(c, !0), M = !0, y = 0; y < T.length && (x = M.caret || 0 == p.insertMode && null != x ? r.seekNext.call(c, x) : r.getLastValidPosition.call(c, void 0, !0) + 1, 
                                        w = T[y], M = f.call(c, x, w, !1, i, !0)); y++) y === A && (E = M), 1 == e && M && (E = {
                                            caretPos: y
                                        });
                                        if (M) break;
                                        if (r.resetMaskSet.call(c), g = o.getTest.call(c, b), d.validPositions = u.extend(!0, [], O), 
                                        d.tests = u.extend(!0, {}, _), !d.excludes[b]) {
                                            E = l.call(c, e, t, n, i, b - 1, s);
                                            break;
                                        }
                                        if (null != g.alternation) {
                                            var D = (0, o.getDecisionTaker)(g);
                                            if (-1 !== d.excludes[b].indexOf(D + ":" + g.alternation)) {
                                                E = l.call(c, e, t, n, i, b - 1, s);
                                                break;
                                            }
                                            for (d.excludes[b].push(D + ":" + g.alternation), y = b; y < r.getLastValidPosition.call(c, void 0, !0) + 1; y++) d.validPositions.splice(b);
                                        } else delete d.excludes[b];
                                    }
                                }
                                return E && !1 === p.keepStatic || delete d.excludes[b], E;
                            }
                            function s(e, t, n) {
                                var i = this.opts, r = this.maskset;
                                switch (i.casing || t.casing) {
                                  case "upper":
                                    e = e.toUpperCase();
                                    break;

                                  case "lower":
                                    e = e.toLowerCase();
                                    break;

                                  case "title":
                                    var o = r.validPositions[n - 1];
                                    e = 0 === n || o && o.input === String.fromCharCode(a.keyCode.Space) ? e.toUpperCase() : e.toLowerCase();
                                    break;

                                  default:
                                    if ("function" == typeof i.casing) {
                                        var l = Array.prototype.slice.call(arguments);
                                        l.push(r.validPositions), e = i.casing.apply(this, l);
                                    }
                                }
                                return e;
                            }
                            function c(e) {
                                var t = this, n = this.opts, i = this.maskset;
                                if ("function" == typeof n.isComplete) return n.isComplete(e, n);
                                if ("*" !== n.repeat) {
                                    var a = !1, l = r.determineLastRequiredPosition.call(t, !0), s = l.l;
                                    if (void 0 === l.def || l.def.newBlockMarker || l.def.optionality || l.def.optionalQuantifier) {
                                        a = !0;
                                        for (var c = 0; c <= s; c++) {
                                            var u = o.getTestTemplate.call(t, c).match;
                                            if (!0 !== u.static && void 0 === i.validPositions[c] && (!1 === u.optionality || void 0 === u.optionality || u.optionality && 0 == u.newBlockMarker) && (!1 === u.optionalQuantifier || void 0 === u.optionalQuantifier) || !0 === u.static && "" != u.def && e[c] !== o.getPlaceholder.call(t, c, u)) {
                                                a = !1;
                                                break;
                                            }
                                        }
                                    }
                                    return a;
                                }
                            }
                            function u(e) {
                                var t = this.opts.insertMode ? 0 : 1;
                                return this.isRTL ? e.begin - e.end > t : e.end - e.begin > t;
                            }
                            function f(e, t, n, i, a, p, m) {
                                var g = this, y = this.dependencyLib, k = this.opts, b = g.maskset;
                                n = !0 === n;
                                var x = e;
                                function w(e) {
                                    if (void 0 !== e) {
                                        if (void 0 !== e.remove && (Array.isArray(e.remove) || (e.remove = [ e.remove ]), 
                                        e.remove.sort((function(e, t) {
                                            return g.isRTL ? e.pos - t.pos : t.pos - e.pos;
                                        })).forEach((function(e) {
                                            v.call(g, {
                                                begin: e,
                                                end: e + 1
                                            });
                                        })), e.remove = void 0), void 0 !== e.insert && (Array.isArray(e.insert) || (e.insert = [ e.insert ]), 
                                        e.insert.sort((function(e, t) {
                                            return g.isRTL ? t.pos - e.pos : e.pos - t.pos;
                                        })).forEach((function(e) {
                                            "" !== e.c && f.call(g, e.pos, e.c, void 0 === e.strict || e.strict, void 0 !== e.fromIsValid ? e.fromIsValid : i);
                                        })), e.insert = void 0), e.refreshFromBuffer && e.buffer) {
                                            var t = e.refreshFromBuffer;
                                            d.call(g, !0 === t ? t : t.start, t.end, e.buffer), e.refreshFromBuffer = void 0;
                                        }
                                        void 0 !== e.rewritePosition && (x = e.rewritePosition, e = !0);
                                    }
                                    return e;
                                }
                                function P(t, n, a) {
                                    var l = !1;
                                    return o.getTests.call(g, t).every((function(c, f) {
                                        var p = c.match;
                                        if (r.getBuffer.call(g, !0), !1 !== (l = (!p.jit || void 0 !== b.validPositions[r.seekPrevious.call(g, t)]) && (null != p.fn ? p.fn.test(n, b, t, a, k, u.call(g, e)) : (n === p.def || n === k.skipOptionalPartCharacter) && "" !== p.def && {
                                            c: o.getPlaceholder.call(g, t, p, !0) || p.def,
                                            pos: t
                                        }))) {
                                            var d = void 0 !== l.c ? l.c : n, h = t;
                                            return d = d === k.skipOptionalPartCharacter && !0 === p.static ? o.getPlaceholder.call(g, t, p, !0) || p.def : d, 
                                            !0 !== (l = w(l)) && void 0 !== l.pos && l.pos !== t && (h = l.pos), !0 !== l && void 0 === l.pos && void 0 === l.c ? !1 : (!1 === v.call(g, e, y.extend({}, c, {
                                                input: s.call(g, d, p, h)
                                            }), i, h) && (l = !1), !1);
                                        }
                                        return !0;
                                    })), l;
                                }
                                void 0 !== e.begin && (x = g.isRTL ? e.end : e.begin);
                                var S = !0, O = y.extend(!0, [], b.validPositions);
                                if (!1 === k.keepStatic && void 0 !== b.excludes[x] && !0 !== a && !0 !== i) for (var _ = x; _ < (g.isRTL ? e.begin : e.end); _++) void 0 !== b.excludes[_] && (b.excludes[_] = void 0, 
                                delete b.tests[_]);
                                if ("function" == typeof k.preValidation && !0 !== i && !0 !== p && (S = w(S = k.preValidation.call(g, r.getBuffer.call(g), x, t, u.call(g, e), k, b, e, n || a))), 
                                !0 === S) {
                                    if (S = P(x, t, n), (!n || !0 === i) && !1 === S && !0 !== p) {
                                        var M = b.validPositions[x];
                                        if (!M || !0 !== M.match.static || M.match.def !== t && t !== k.skipOptionalPartCharacter) {
                                            if (k.insertMode || void 0 === b.validPositions[r.seekNext.call(g, x)] || e.end > x) {
                                                var E = !1;
                                                if (b.jitOffset[x] && void 0 === b.validPositions[r.seekNext.call(g, x)] && !1 !== (S = f.call(g, x + b.jitOffset[x], t, !0, !0)) && (!0 !== a && (S.caret = x), 
                                                E = !0), e.end > x && (b.validPositions[x] = void 0), !E && !r.isMask.call(g, x, k.keepStatic && 0 === x)) for (var j = x + 1, T = r.seekNext.call(g, x, !1, 0 !== x); j <= T; j++) if (!1 !== (S = P(j, t, n))) {
                                                    S = h.call(g, x, void 0 !== S.pos ? S.pos : j) || S, x = j;
                                                    break;
                                                }
                                            }
                                        } else S = {
                                            caret: r.seekNext.call(g, x)
                                        };
                                    }
                                    g.hasAlternator && !0 !== a && !n && (a = !0, !1 === S && k.keepStatic && (c.call(g, r.getBuffer.call(g)) || 0 === x) ? S = l.call(g, x, t, n, i, void 0, e) : (u.call(g, e) && b.tests[x] && b.tests[x].length > 1 && k.keepStatic || 1 == S && !0 !== k.numericInput && b.tests[x] && b.tests[x].length > 1 && r.getLastValidPosition.call(g, void 0, !0) > x) && (S = l.call(g, !0))), 
                                    !0 === S && (S = {
                                        pos: x
                                    });
                                }
                                if ("function" == typeof k.postValidation && !0 !== i && !0 !== p) {
                                    var A = k.postValidation.call(g, r.getBuffer.call(g, !0), void 0 !== e.begin ? g.isRTL ? e.end : e.begin : e, t, S, k, b, n, m);
                                    void 0 !== A && (S = !0 === A ? S : A);
                                }
                                S && void 0 === S.pos && (S.pos = x), !1 === S || !0 === p ? (r.resetMaskSet.call(g, !0), 
                                b.validPositions = y.extend(!0, [], O)) : h.call(g, void 0, x, !0);
                                var D = w(S);
                                void 0 !== g.maxLength && r.getBuffer.call(g).length > g.maxLength && !i && (r.resetMaskSet.call(g, !0), 
                                b.validPositions = y.extend(!0, [], O), D = !1);
                                return D;
                            }
                            function p(e, t, n) {
                                for (var i = this.maskset, a = !1, r = o.getTests.call(this, e), l = 0; l < r.length; l++) {
                                    if (r[l].match && (r[l].match.nativeDef === t.match[n.shiftPositions ? "def" : "nativeDef"] && (!n.shiftPositions || !t.match.static) || r[l].match.nativeDef === t.match.nativeDef || n.regex && !r[l].match.static && r[l].match.fn.test(t.input, i, e, !1, n))) {
                                        a = !0;
                                        break;
                                    }
                                    if (r[l].match && r[l].match.def === t.match.nativeDef) {
                                        a = void 0;
                                        break;
                                    }
                                }
                                return !1 === a && void 0 !== i.jitOffset[e] && (a = p.call(this, e + i.jitOffset[e], t, n)), 
                                a;
                            }
                            function d(e, t, n) {
                                var a, o, l = this, s = this.maskset, c = this.opts, u = this.dependencyLib, f = c.skipOptionalPartCharacter, p = l.isRTL ? n.slice().reverse() : n;
                                if (c.skipOptionalPartCharacter = "", !0 === e) r.resetMaskSet.call(l, !1), e = 0, 
                                t = n.length, o = r.determineNewCaretPosition.call(l, {
                                    begin: 0,
                                    end: 0
                                }, !1).begin; else {
                                    for (a = e; a < t; a++) s.validPositions.splice(e, 0);
                                    o = e;
                                }
                                var d = new u.Event("keypress");
                                for (a = e; a < t; a++) {
                                    d.key = p[a].toString(), l.ignorable = !1;
                                    var h = i.EventHandlers.keypressEvent.call(l, d, !0, !1, !1, o);
                                    !1 !== h && void 0 !== h && (o = h.forwardPosition);
                                }
                                c.skipOptionalPartCharacter = f;
                            }
                            function h(e, t, n) {
                                var i = this, a = this.maskset, l = this.dependencyLib;
                                if (void 0 === e) for (e = t - 1; e > 0 && !a.validPositions[e]; e--) ;
                                for (var s = e; s < t; s++) if (void 0 === a.validPositions[s] && !r.isMask.call(i, s, !1)) if (0 == s ? o.getTest.call(i, s) : a.validPositions[s - 1]) {
                                    var c = o.getTests.call(i, s).slice();
                                    "" === c[c.length - 1].match.def && c.pop();
                                    var u, p = o.determineTestTemplate.call(i, s, c);
                                    if (p && (!0 !== p.match.jit || "master" === p.match.newBlockMarker && (u = a.validPositions[s + 1]) && !0 === u.match.optionalQuantifier) && ((p = l.extend({}, p, {
                                        input: o.getPlaceholder.call(i, s, p.match, !0) || p.match.def
                                    })).generatedInput = !0, v.call(i, s, p, !0), !0 !== n)) {
                                        var d = a.validPositions[t].input;
                                        return a.validPositions[t] = void 0, f.call(i, t, d, !0, !0);
                                    }
                                }
                            }
                            function v(e, t, n, i) {
                                var a = this, l = this.maskset, s = this.opts, c = this.dependencyLib;
                                function d(e, t, n) {
                                    var i = t[e];
                                    if (void 0 !== i && !0 === i.match.static && !0 !== i.match.optionality && (void 0 === t[0] || void 0 === t[0].alternation)) {
                                        var a = n.begin <= e - 1 ? t[e - 1] && !0 === t[e - 1].match.static && t[e - 1] : t[e - 1], r = n.end > e + 1 ? t[e + 1] && !0 === t[e + 1].match.static && t[e + 1] : t[e + 1];
                                        return a && r;
                                    }
                                    return !1;
                                }
                                var h = 0, v = void 0 !== e.begin ? e.begin : e, m = void 0 !== e.end ? e.end : e, g = !0;
                                if (e.begin > e.end && (v = e.end, m = e.begin), i = void 0 !== i ? i : v, void 0 === n && (v !== m || s.insertMode && void 0 !== l.validPositions[i] || void 0 === t || t.match.optionalQuantifier || t.match.optionality)) {
                                    var y, k = c.extend(!0, [], l.validPositions), b = r.getLastValidPosition.call(a, void 0, !0);
                                    l.p = v;
                                    var x = u.call(a, e) ? v : i;
                                    for (y = b; y >= x; y--) l.validPositions.splice(y, 1), void 0 === t && delete l.tests[y + 1];
                                    var w, P, S = i, O = S;
                                    for (t && (l.validPositions[i] = c.extend(!0, {}, t), O++, S++), null == k[m] && l.jitOffset[m] && (m += l.jitOffset[m] + 1), 
                                    y = t ? m : m - 1; y <= b; y++) {
                                        if (void 0 !== (w = k[y]) && !0 !== w.generatedInput && (y >= m || y >= v && d(y, k, {
                                            begin: v,
                                            end: m
                                        }))) {
                                            for (;"" !== o.getTest.call(a, O).match.def; ) {
                                                if (!1 !== (P = p.call(a, O, w, s)) || "+" === w.match.def) {
                                                    "+" === w.match.def && r.getBuffer.call(a, !0);
                                                    var _ = f.call(a, O, w.input, "+" !== w.match.def, !0);
                                                    if (g = !1 !== _, S = (_.pos || O) + 1, !g && P) break;
                                                } else g = !1;
                                                if (g) {
                                                    void 0 === t && w.match.static && y === e.begin && h++;
                                                    break;
                                                }
                                                if (!g && r.getBuffer.call(a), O > l.maskLength) break;
                                                O++;
                                            }
                                            "" == o.getTest.call(a, O).match.def && (g = !1), O = S;
                                        }
                                        if (!g) break;
                                    }
                                    if (!g) return l.validPositions = c.extend(!0, [], k), r.resetMaskSet.call(a, !0), 
                                    !1;
                                } else t && o.getTest.call(a, i).match.cd === t.match.cd && (l.validPositions[i] = c.extend(!0, {}, t));
                                return r.resetMaskSet.call(a, !0), h;
                            }
                        }
                    }, t = {};
                    function n(i) {
                        var a = t[i];
                        if (void 0 !== a) return a.exports;
                        var r = t[i] = {
                            exports: {}
                        };
                        return e[i](r, r.exports, n), r.exports;
                    }
                    var i = {};
                    return function() {
                        var e = i;
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.default = void 0, n(7149), n(3194), n(9302), n(4013), n(3851), n(219), n(207), 
                        n(5296);
                        var t, a = (t = n(2394)) && t.__esModule ? t : {
                            default: t
                        };
                        e.default = a.default;
                    }(), i;
                }();
            }));
        },
        144: function(module) {
            !function(e, t) {
                true ? module.exports = t() : 0;
            }(0, (function() {
                "use strict";
                const e = "undefined" != typeof window, t = e && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), a = e && window.devicePixelRatio > 1, n = {
                    elements_selector: ".lazy",
                    container: t || e ? document : null,
                    threshold: 300,
                    thresholds: null,
                    data_src: "src",
                    data_srcset: "srcset",
                    data_sizes: "sizes",
                    data_bg: "bg",
                    data_bg_hidpi: "bg-hidpi",
                    data_bg_multi: "bg-multi",
                    data_bg_multi_hidpi: "bg-multi-hidpi",
                    data_bg_set: "bg-set",
                    data_poster: "poster",
                    class_applied: "applied",
                    class_loading: "loading",
                    class_loaded: "loaded",
                    class_error: "error",
                    class_entered: "entered",
                    class_exited: "exited",
                    unobserve_completed: !0,
                    unobserve_entered: !1,
                    cancel_on_exit: !0,
                    callback_enter: null,
                    callback_exit: null,
                    callback_applied: null,
                    callback_loading: null,
                    callback_loaded: null,
                    callback_error: null,
                    callback_finish: null,
                    callback_cancel: null,
                    use_native: !1,
                    restore_on_error: !1
                }, s = e => Object.assign({}, n, e), l = function(e, t) {
                    let a;
                    const n = "LazyLoad::Initialized", s = new e(t);
                    try {
                        a = new CustomEvent(n, {
                            detail: {
                                instance: s
                            }
                        });
                    } catch (e) {
                        a = document.createEvent("CustomEvent"), a.initCustomEvent(n, !1, !1, {
                            instance: s
                        });
                    }
                    window.dispatchEvent(a);
                }, o = "src", r = "srcset", i = "sizes", d = "poster", c = "llOriginalAttrs", _ = "data", u = "loading", g = "loaded", b = "applied", h = "error", m = "native", p = "data-", f = "ll-status", v = (e, t) => e.getAttribute(p + t), E = e => v(e, f), I = (e, t) => ((e, t, a) => {
                    const n = p + t;
                    null !== a ? e.setAttribute(n, a) : e.removeAttribute(n);
                })(e, f, t), y = e => I(e, null), k = e => null === E(e), A = e => E(e) === m, L = [ u, g, b, h ], w = (e, t, a, n) => {
                    e && "function" == typeof e && (void 0 === n ? void 0 === a ? e(t) : e(t, a) : e(t, a, n));
                }, x = (t, a) => {
                    e && "" !== a && t.classList.add(a);
                }, C = (t, a) => {
                    e && "" !== a && t.classList.remove(a);
                }, O = e => e.llTempImage, M = (e, t) => {
                    if (!t) return;
                    const a = t._observer;
                    a && a.unobserve(e);
                }, z = (e, t) => {
                    e && (e.loadingCount += t);
                }, N = (e, t) => {
                    e && (e.toLoadCount = t);
                }, T = e => {
                    let t = [];
                    for (let a, n = 0; a = e.children[n]; n += 1) "SOURCE" === a.tagName && t.push(a);
                    return t;
                }, R = (e, t) => {
                    const a = e.parentNode;
                    a && "PICTURE" === a.tagName && T(a).forEach(t);
                }, G = (e, t) => {
                    T(e).forEach(t);
                }, D = [ o ], H = [ o, d ], V = [ o, r, i ], F = [ _ ], j = e => !!e[c], B = e => e[c], J = e => delete e[c], S = (e, t) => {
                    if (j(e)) return;
                    const a = {};
                    t.forEach((t => {
                        a[t] = e.getAttribute(t);
                    })), e[c] = a;
                }, P = (e, t) => {
                    if (!j(e)) return;
                    const a = B(e);
                    t.forEach((t => {
                        ((e, t, a) => {
                            a ? e.setAttribute(t, a) : e.removeAttribute(t);
                        })(e, t, a[t]);
                    }));
                }, U = (e, t, a) => {
                    x(e, t.class_applied), I(e, b), a && (t.unobserve_completed && M(e, t), w(t.callback_applied, e, a));
                }, $ = (e, t, a) => {
                    x(e, t.class_loading), I(e, u), a && (z(a, 1), w(t.callback_loading, e, a));
                }, q = (e, t, a) => {
                    a && e.setAttribute(t, a);
                }, K = (e, t) => {
                    q(e, i, v(e, t.data_sizes)), q(e, r, v(e, t.data_srcset)), q(e, o, v(e, t.data_src));
                }, Q = {
                    IMG: (e, t) => {
                        R(e, (e => {
                            S(e, V), K(e, t);
                        })), S(e, V), K(e, t);
                    },
                    IFRAME: (e, t) => {
                        S(e, D), q(e, o, v(e, t.data_src));
                    },
                    VIDEO: (e, t) => {
                        G(e, (e => {
                            S(e, D), q(e, o, v(e, t.data_src));
                        })), S(e, H), q(e, d, v(e, t.data_poster)), q(e, o, v(e, t.data_src)), e.load();
                    },
                    OBJECT: (e, t) => {
                        S(e, F), q(e, _, v(e, t.data_src));
                    }
                }, W = [ "IMG", "IFRAME", "VIDEO", "OBJECT" ], X = (e, t) => {
                    !t || (e => e.loadingCount > 0)(t) || (e => e.toLoadCount > 0)(t) || w(e.callback_finish, t);
                }, Y = (e, t, a) => {
                    e.addEventListener(t, a), e.llEvLisnrs[t] = a;
                }, Z = (e, t, a) => {
                    e.removeEventListener(t, a);
                }, ee = e => !!e.llEvLisnrs, te = e => {
                    if (!ee(e)) return;
                    const t = e.llEvLisnrs;
                    for (let a in t) {
                        const n = t[a];
                        Z(e, a, n);
                    }
                    delete e.llEvLisnrs;
                }, ae = (e, t, a) => {
                    (e => {
                        delete e.llTempImage;
                    })(e), z(a, -1), (e => {
                        e && (e.toLoadCount -= 1);
                    })(a), C(e, t.class_loading), t.unobserve_completed && M(e, a);
                }, ne = (e, t, a) => {
                    const n = O(e) || e;
                    ee(n) || ((e, t, a) => {
                        ee(e) || (e.llEvLisnrs = {});
                        const n = "VIDEO" === e.tagName ? "loadeddata" : "load";
                        Y(e, n, t), Y(e, "error", a);
                    })(n, (s => {
                        ((e, t, a, n) => {
                            const s = A(t);
                            ae(t, a, n), x(t, a.class_loaded), I(t, g), w(a.callback_loaded, t, n), s || X(a, n);
                        })(0, e, t, a), te(n);
                    }), (s => {
                        ((e, t, a, n) => {
                            const s = A(t);
                            ae(t, a, n), x(t, a.class_error), I(t, h), w(a.callback_error, t, n), a.restore_on_error && P(t, V), 
                            s || X(a, n);
                        })(0, e, t, a), te(n);
                    }));
                }, se = (e, t, n) => {
                    (e => W.indexOf(e.tagName) > -1)(e) ? ((e, t, a) => {
                        ne(e, t, a), ((e, t, a) => {
                            const n = Q[e.tagName];
                            n && (n(e, t), $(e, t, a));
                        })(e, t, a);
                    })(e, t, n) : ((e, t, n) => {
                        (e => {
                            e.llTempImage = document.createElement("IMG");
                        })(e), ne(e, t, n), (e => {
                            j(e) || (e[c] = {
                                backgroundImage: e.style.backgroundImage
                            });
                        })(e), ((e, t, n) => {
                            const s = v(e, t.data_bg), l = v(e, t.data_bg_hidpi), r = a && l ? l : s;
                            r && (e.style.backgroundImage = `url("${r}")`, O(e).setAttribute(o, r), $(e, t, n));
                        })(e, t, n), ((e, t, n) => {
                            const s = v(e, t.data_bg_multi), l = v(e, t.data_bg_multi_hidpi), o = a && l ? l : s;
                            o && (e.style.backgroundImage = o, U(e, t, n));
                        })(e, t, n), ((e, t, a) => {
                            const n = v(e, t.data_bg_set);
                            if (!n) return;
                            let s = n.split("|").map((e => `image-set(${e})`));
                            e.style.backgroundImage = s.join(), U(e, t, a);
                        })(e, t, n);
                    })(e, t, n);
                }, le = e => {
                    e.removeAttribute(o), e.removeAttribute(r), e.removeAttribute(i);
                }, oe = e => {
                    R(e, (e => {
                        P(e, V);
                    })), P(e, V);
                }, re = {
                    IMG: oe,
                    IFRAME: e => {
                        P(e, D);
                    },
                    VIDEO: e => {
                        G(e, (e => {
                            P(e, D);
                        })), P(e, H), e.load();
                    },
                    OBJECT: e => {
                        P(e, F);
                    }
                }, ie = (e, t) => {
                    (e => {
                        const t = re[e.tagName];
                        t ? t(e) : (e => {
                            if (!j(e)) return;
                            const t = B(e);
                            e.style.backgroundImage = t.backgroundImage;
                        })(e);
                    })(e), ((e, t) => {
                        k(e) || A(e) || (C(e, t.class_entered), C(e, t.class_exited), C(e, t.class_applied), 
                        C(e, t.class_loading), C(e, t.class_loaded), C(e, t.class_error));
                    })(e, t), y(e), J(e);
                }, de = [ "IMG", "IFRAME", "VIDEO" ], ce = e => e.use_native && "loading" in HTMLImageElement.prototype, _e = (e, t, a) => {
                    e.forEach((e => (e => e.isIntersecting || e.intersectionRatio > 0)(e) ? ((e, t, a, n) => {
                        const s = (e => L.indexOf(E(e)) >= 0)(e);
                        I(e, "entered"), x(e, a.class_entered), C(e, a.class_exited), ((e, t, a) => {
                            t.unobserve_entered && M(e, a);
                        })(e, a, n), w(a.callback_enter, e, t, n), s || se(e, a, n);
                    })(e.target, e, t, a) : ((e, t, a, n) => {
                        k(e) || (x(e, a.class_exited), ((e, t, a, n) => {
                            a.cancel_on_exit && (e => E(e) === u)(e) && "IMG" === e.tagName && (te(e), (e => {
                                R(e, (e => {
                                    le(e);
                                })), le(e);
                            })(e), oe(e), C(e, a.class_loading), z(n, -1), y(e), w(a.callback_cancel, e, t, n));
                        })(e, t, a, n), w(a.callback_exit, e, t, n));
                    })(e.target, e, t, a)));
                }, ue = e => Array.prototype.slice.call(e), ge = e => e.container.querySelectorAll(e.elements_selector), be = e => (e => E(e) === h)(e), he = (e, t) => (e => ue(e).filter(k))(e || ge(t)), me = function(t, a) {
                    const n = s(t);
                    this._settings = n, this.loadingCount = 0, ((e, t) => {
                        ce(e) || (t._observer = new IntersectionObserver((a => {
                            _e(a, e, t);
                        }), (e => ({
                            root: e.container === document ? null : e.container,
                            rootMargin: e.thresholds || e.threshold + "px"
                        }))(e)));
                    })(n, this), ((t, a) => {
                        e && (a._onlineHandler = () => {
                            ((e, t) => {
                                var a;
                                (a = ge(e), ue(a).filter(be)).forEach((t => {
                                    C(t, e.class_error), y(t);
                                })), t.update();
                            })(t, a);
                        }, window.addEventListener("online", a._onlineHandler));
                    })(n, this), this.update(a);
                };
                return me.prototype = {
                    update: function(e) {
                        const a = this._settings, n = he(e, a);
                        var s, l;
                        N(this, n.length), t ? this.loadAll(n) : ce(a) ? ((e, t, a) => {
                            e.forEach((e => {
                                -1 !== de.indexOf(e.tagName) && ((e, t, a) => {
                                    e.setAttribute("loading", "lazy"), ne(e, t, a), ((e, t) => {
                                        const a = Q[e.tagName];
                                        a && a(e, t);
                                    })(e, t), I(e, m);
                                })(e, t, a);
                            })), N(a, 0);
                        })(n, a, this) : (l = n, (e => {
                            e.disconnect();
                        })(s = this._observer), ((e, t) => {
                            t.forEach((t => {
                                e.observe(t);
                            }));
                        })(s, l));
                    },
                    destroy: function() {
                        this._observer && this._observer.disconnect(), e && window.removeEventListener("online", this._onlineHandler), 
                        ge(this._settings).forEach((e => {
                            J(e);
                        })), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, 
                        delete this.toLoadCount;
                    },
                    loadAll: function(e) {
                        const t = this._settings;
                        he(e, t).forEach((e => {
                            M(e, this), se(e, t, this);
                        }));
                    },
                    restoreAll: function() {
                        const e = this._settings;
                        ge(e).forEach((t => {
                            ie(t, e);
                        }));
                    }
                }, me.load = (e, t) => {
                    const a = s(t);
                    se(e, a);
                }, me.resetStatus = e => {
                    y(e);
                }, e && ((e, t) => {
                    if (t) if (t.length) for (let a, n = 0; a = t[n]; n += 1) l(e, a); else l(e, t);
                })(me, window.lazyLoadOptions), me;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        const modules_flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        function addLoadedClass() {
            if (!document.documentElement.classList.contains("loading")) window.addEventListener("load", (function() {
                setTimeout((function() {
                    document.documentElement.classList.add("loaded");
                }), 0);
            }));
        }
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            if (bodyLockStatus) {
                const lockPaddingElements = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    lockPaddingElements.forEach((lockPaddingElement => {
                        lockPaddingElement.style.paddingRight = "";
                    }));
                    document.body.style.paddingRight = "";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            if (bodyLockStatus) {
                const lockPaddingElements = document.querySelectorAll("[data-lp]");
                const lockPaddingValue = window.innerWidth - document.body.offsetWidth + "px";
                lockPaddingElements.forEach((lockPaddingElement => {
                    lockPaddingElement.style.paddingRight = lockPaddingValue;
                }));
                document.body.style.paddingRight = lockPaddingValue;
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function menuInit() {
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                }
            }));
        }
        function functions_menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
        }
        function FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        const t = (t, e = 1e4) => (t = parseFloat(t + "") || 0, Math.round((t + Number.EPSILON) * e) / e), e = function(t) {
            if (!(t && t instanceof Element && t.offsetParent)) return !1;
            const e = t.scrollHeight > t.clientHeight, i = window.getComputedStyle(t).overflowY, n = -1 !== i.indexOf("hidden"), s = -1 !== i.indexOf("visible");
            return e && !n && !s;
        }, i = function(t, n = void 0) {
            return !(!t || t === document.body || n && t === n) && (e(t) ? t : i(t.parentElement, n));
        }, n = function(t) {
            var e = (new DOMParser).parseFromString(t, "text/html").body;
            if (e.childElementCount > 1) {
                for (var i = document.createElement("div"); e.firstChild; ) i.appendChild(e.firstChild);
                return i;
            }
            return e.firstChild;
        }, s = t => `${t || ""}`.split(" ").filter((t => !!t)), o = (t, e, i) => {
            t && s(e).forEach((e => {
                t.classList.toggle(e, i || !1);
            }));
        };
        class a {
            constructor(t) {
                Object.defineProperty(this, "pageX", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "pageY", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "clientX", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "clientY", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "id", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "time", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "nativePointer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), this.nativePointer = t, this.pageX = t.pageX, this.pageY = t.pageY, this.clientX = t.clientX, 
                this.clientY = t.clientY, this.id = self.Touch && t instanceof Touch ? t.identifier : -1, 
                this.time = Date.now();
            }
        }
        const r = {
            passive: !1
        };
        class l {
            constructor(t, {start: e = () => !0, move: i = () => {}, end: n = () => {}}) {
                Object.defineProperty(this, "element", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "startCallback", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "moveCallback", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "endCallback", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "currentPointers", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }), Object.defineProperty(this, "startPointers", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }), this.element = t, this.startCallback = e, this.moveCallback = i, this.endCallback = n;
                for (const t of [ "onPointerStart", "onTouchStart", "onMove", "onTouchEnd", "onPointerEnd", "onWindowBlur" ]) this[t] = this[t].bind(this);
                this.element.addEventListener("mousedown", this.onPointerStart, r), this.element.addEventListener("touchstart", this.onTouchStart, r), 
                this.element.addEventListener("touchmove", this.onMove, r), this.element.addEventListener("touchend", this.onTouchEnd), 
                this.element.addEventListener("touchcancel", this.onTouchEnd);
            }
            onPointerStart(t) {
                if (!t.buttons || 0 !== t.button) return;
                const e = new a(t);
                this.currentPointers.some((t => t.id === e.id)) || this.triggerPointerStart(e, t) && (window.addEventListener("mousemove", this.onMove), 
                window.addEventListener("mouseup", this.onPointerEnd), window.addEventListener("blur", this.onWindowBlur));
            }
            onTouchStart(t) {
                for (const e of Array.from(t.changedTouches || [])) this.triggerPointerStart(new a(e), t);
                window.addEventListener("blur", this.onWindowBlur);
            }
            onMove(t) {
                const e = this.currentPointers.slice(), i = "changedTouches" in t ? Array.from(t.changedTouches || []).map((t => new a(t))) : [ new a(t) ], n = [];
                for (const t of i) {
                    const e = this.currentPointers.findIndex((e => e.id === t.id));
                    e < 0 || (n.push(t), this.currentPointers[e] = t);
                }
                n.length && this.moveCallback(t, this.currentPointers.slice(), e);
            }
            onPointerEnd(t) {
                t.buttons > 0 && 0 !== t.button || (this.triggerPointerEnd(t, new a(t)), window.removeEventListener("mousemove", this.onMove), 
                window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur));
            }
            onTouchEnd(t) {
                for (const e of Array.from(t.changedTouches || [])) this.triggerPointerEnd(t, new a(e));
            }
            triggerPointerStart(t, e) {
                return !!this.startCallback(e, t, this.currentPointers.slice()) && (this.currentPointers.push(t), 
                this.startPointers.push(t), !0);
            }
            triggerPointerEnd(t, e) {
                const i = this.currentPointers.findIndex((t => t.id === e.id));
                i < 0 || (this.currentPointers.splice(i, 1), this.startPointers.splice(i, 1), this.endCallback(t, e, this.currentPointers.slice()));
            }
            onWindowBlur() {
                this.clear();
            }
            clear() {
                for (;this.currentPointers.length; ) {
                    const t = this.currentPointers[this.currentPointers.length - 1];
                    this.currentPointers.splice(this.currentPointers.length - 1, 1), this.startPointers.splice(this.currentPointers.length - 1, 1), 
                    this.endCallback(new Event("touchend", {
                        bubbles: !0,
                        cancelable: !0,
                        clientX: t.clientX,
                        clientY: t.clientY
                    }), t, this.currentPointers.slice());
                }
            }
            stop() {
                this.element.removeEventListener("mousedown", this.onPointerStart, r), this.element.removeEventListener("touchstart", this.onTouchStart, r), 
                this.element.removeEventListener("touchmove", this.onMove, r), this.element.removeEventListener("touchend", this.onTouchEnd), 
                this.element.removeEventListener("touchcancel", this.onTouchEnd), window.removeEventListener("mousemove", this.onMove), 
                window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur);
            }
        }
        function c(t, e) {
            return e ? Math.sqrt(Math.pow(e.clientX - t.clientX, 2) + Math.pow(e.clientY - t.clientY, 2)) : 0;
        }
        function h(t, e) {
            return e ? {
                clientX: (t.clientX + e.clientX) / 2,
                clientY: (t.clientY + e.clientY) / 2
            } : t;
        }
        const d = t => "object" == typeof t && null !== t && t.constructor === Object && "[object Object]" === Object.prototype.toString.call(t), u = (t, ...e) => {
            const i = e.length;
            for (let n = 0; n < i; n++) {
                const i = e[n] || {};
                Object.entries(i).forEach((([e, i]) => {
                    const n = Array.isArray(i) ? [] : {};
                    t[e] || Object.assign(t, {
                        [e]: n
                    }), d(i) ? Object.assign(t[e], u(n, i)) : Array.isArray(i) ? Object.assign(t, {
                        [e]: [ ...i ]
                    }) : Object.assign(t, {
                        [e]: i
                    });
                }));
            }
            return t;
        }, p = function(t, e) {
            return t.split(".").reduce(((t, e) => "object" == typeof t ? t[e] : void 0), e);
        };
        class f {
            constructor(t = {}) {
                Object.defineProperty(this, "options", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }), Object.defineProperty(this, "events", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new Map
                }), this.setOptions(t);
                for (const t of Object.getOwnPropertyNames(Object.getPrototypeOf(this))) t.startsWith("on") && "function" == typeof this[t] && (this[t] = this[t].bind(this));
            }
            setOptions(t) {
                this.options = t ? u({}, this.constructor.defaults, t) : {};
                for (const [t, e] of Object.entries(this.option("on") || {})) this.on(t, e);
            }
            option(t, ...e) {
                let i = p(t, this.options);
                return i && "function" == typeof i && (i = i.call(this, this, ...e)), i;
            }
            optionFor(t, e, i, ...n) {
                let s = p(e, t);
                var o;
                "string" != typeof (o = s) || isNaN(o) || isNaN(parseFloat(o)) || (s = parseFloat(s)), 
                "true" === s && (s = !0), "false" === s && (s = !1), s && "function" == typeof s && (s = s.call(this, this, t, ...n));
                let a = p(e, this.options);
                return a && "function" == typeof a ? s = a.call(this, this, t, ...n, s) : void 0 === s && (s = a), 
                void 0 === s ? i : s;
            }
            cn(t) {
                const e = this.options.classes;
                return e && e[t] || "";
            }
            localize(t, e = []) {
                t = String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g, ((t, e, i) => {
                    let n = "";
                    return i ? n = this.option(`${e[0] + e.toLowerCase().substring(1)}.l10n.${i}`) : e && (n = this.option(`l10n.${e}`)), 
                    n || (n = t), n;
                }));
                for (let i = 0; i < e.length; i++) t = t.split(e[i][0]).join(e[i][1]);
                return t = t.replace(/\{\{(.*?)\}\}/g, ((t, e) => e));
            }
            on(t, e) {
                let i = [];
                "string" == typeof t ? i = t.split(" ") : Array.isArray(t) && (i = t), this.events || (this.events = new Map), 
                i.forEach((t => {
                    let i = this.events.get(t);
                    i || (this.events.set(t, []), i = []), i.includes(e) || i.push(e), this.events.set(t, i);
                }));
            }
            off(t, e) {
                let i = [];
                "string" == typeof t ? i = t.split(" ") : Array.isArray(t) && (i = t), i.forEach((t => {
                    const i = this.events.get(t);
                    if (Array.isArray(i)) {
                        const t = i.indexOf(e);
                        t > -1 && i.splice(t, 1);
                    }
                }));
            }
            emit(t, ...e) {
                [ ...this.events.get(t) || [] ].forEach((t => t(this, ...e))), "*" !== t && this.emit("*", t, ...e);
            }
        }
        Object.defineProperty(f, "version", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "5.0.36"
        }), Object.defineProperty(f, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {}
        });
        class g extends f {
            constructor(t = {}) {
                super(t), Object.defineProperty(this, "plugins", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {}
                });
            }
            attachPlugins(t = {}) {
                const e = new Map;
                for (const [i, n] of Object.entries(t)) {
                    const t = this.option(i), s = this.plugins[i];
                    s || !1 === t ? s && !1 === t && (s.detach(), delete this.plugins[i]) : e.set(i, new n(this, t || {}));
                }
                for (const [t, i] of e) this.plugins[t] = i, i.attach();
            }
            detachPlugins(t) {
                t = t || Object.keys(this.plugins);
                for (const e of t) {
                    const t = this.plugins[e];
                    t && t.detach(), delete this.plugins[e];
                }
                return this.emit("detachPlugins"), this;
            }
        }
        var m;
        !function(t) {
            t[t.Init = 0] = "Init", t[t.Error = 1] = "Error", t[t.Ready = 2] = "Ready", t[t.Panning = 3] = "Panning", 
            t[t.Mousemove = 4] = "Mousemove", t[t.Destroy = 5] = "Destroy";
        }(m || (m = {}));
        const v = [ "a", "b", "c", "d", "e", "f" ], b = {
            PANUP: "Move up",
            PANDOWN: "Move down",
            PANLEFT: "Move left",
            PANRIGHT: "Move right",
            ZOOMIN: "Zoom in",
            ZOOMOUT: "Zoom out",
            TOGGLEZOOM: "Toggle zoom level",
            TOGGLE1TO1: "Toggle zoom level",
            ITERATEZOOM: "Toggle zoom level",
            ROTATECCW: "Rotate counterclockwise",
            ROTATECW: "Rotate clockwise",
            FLIPX: "Flip horizontally",
            FLIPY: "Flip vertically",
            FITX: "Fit horizontally",
            FITY: "Fit vertically",
            RESET: "Reset",
            TOGGLEFS: "Toggle fullscreen"
        }, y = {
            content: null,
            width: "auto",
            height: "auto",
            panMode: "drag",
            touch: !0,
            dragMinThreshold: 3,
            lockAxis: !1,
            mouseMoveFactor: 1,
            mouseMoveFriction: .12,
            zoom: !0,
            pinchToZoom: !0,
            panOnlyZoomed: "auto",
            minScale: 1,
            maxScale: 2,
            friction: .25,
            dragFriction: .35,
            decelFriction: .05,
            click: "toggleZoom",
            dblClick: !1,
            wheel: "zoom",
            wheelLimit: 7,
            spinner: !0,
            bounds: "auto",
            infinite: !1,
            rubberband: !0,
            bounce: !0,
            maxVelocity: 75,
            transformParent: !1,
            classes: {
                content: "f-panzoom__content",
                isLoading: "is-loading",
                canZoomIn: "can-zoom_in",
                canZoomOut: "can-zoom_out",
                isDraggable: "is-draggable",
                isDragging: "is-dragging",
                inFullscreen: "in-fullscreen",
                htmlHasFullscreen: "with-panzoom-in-fullscreen"
            },
            l10n: b
        }, w = '<circle cx="25" cy="25" r="20"></circle>', x = '<div class="f-spinner"><svg viewBox="0 0 50 50">' + w + w + "</svg></div>", E = t => t && null !== t && t instanceof Element && "nodeType" in t, S = (t, e) => {
            t && s(e).forEach((e => {
                t.classList.remove(e);
            }));
        }, P = (t, e) => {
            t && s(e).forEach((e => {
                t.classList.add(e);
            }));
        }, C = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: 0,
            f: 0
        }, T = 1e5, M = 1e4, O = "mousemove", A = "drag", L = "content", z = "auto";
        let R = null, k = null;
        class I extends g {
            get fits() {
                return this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1;
            }
            get isTouchDevice() {
                return null === k && (k = window.matchMedia("(hover: none)").matches), k;
            }
            get isMobile() {
                return null === R && (R = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)), 
                R;
            }
            get panMode() {
                return this.options.panMode !== O || this.isTouchDevice ? A : O;
            }
            get panOnlyZoomed() {
                const t = this.options.panOnlyZoomed;
                return t === z ? this.isTouchDevice : t;
            }
            get isInfinite() {
                return this.option("infinite");
            }
            get angle() {
                return 180 * Math.atan2(this.current.b, this.current.a) / Math.PI || 0;
            }
            get targetAngle() {
                return 180 * Math.atan2(this.target.b, this.target.a) / Math.PI || 0;
            }
            get scale() {
                const {a: t, b: e} = this.current;
                return Math.sqrt(t * t + e * e) || 1;
            }
            get targetScale() {
                const {a: t, b: e} = this.target;
                return Math.sqrt(t * t + e * e) || 1;
            }
            get minScale() {
                return this.option("minScale") || 1;
            }
            get fullScale() {
                const {contentRect: t} = this;
                return t.fullWidth / t.fitWidth || 1;
            }
            get maxScale() {
                return this.fullScale * (this.option("maxScale") || 1) || 1;
            }
            get coverScale() {
                const {containerRect: t, contentRect: e} = this, i = Math.max(t.height / e.fitHeight, t.width / e.fitWidth) || 1;
                return Math.min(this.fullScale, i);
            }
            get isScaling() {
                return Math.abs(this.targetScale - this.scale) > 1e-5 && !this.isResting;
            }
            get isContentLoading() {
                const t = this.content;
                return !!(t && t instanceof HTMLImageElement) && !t.complete;
            }
            get isResting() {
                if (this.isBouncingX || this.isBouncingY) return !1;
                for (const t of v) {
                    const e = "e" == t || "f" === t ? 1e-4 : 1e-5;
                    if (Math.abs(this.target[t] - this.current[t]) > e) return !1;
                }
                return !(!this.ignoreBounds && !this.checkBounds().inBounds);
            }
            constructor(t, e = {}, i = {}) {
                var s;
                if (super(e), Object.defineProperty(this, "pointerTracker", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "resizeObserver", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "updateTimer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "clickTimer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "rAF", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "isTicking", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "ignoreBounds", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "isBouncingX", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "isBouncingY", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "clicks", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "trackingPoints", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }), Object.defineProperty(this, "pwt", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "cwd", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "pmme", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "friction", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: m.Init
                }), Object.defineProperty(this, "isDragging", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "content", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "spinner", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "containerRect", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0
                    }
                }), Object.defineProperty(this, "contentRect", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        fullWidth: 0,
                        fullHeight: 0,
                        fitWidth: 0,
                        fitHeight: 0,
                        width: 0,
                        height: 0
                    }
                }), Object.defineProperty(this, "dragStart", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        x: 0,
                        y: 0,
                        top: 0,
                        left: 0,
                        time: 0
                    }
                }), Object.defineProperty(this, "dragOffset", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        x: 0,
                        y: 0,
                        time: 0
                    }
                }), Object.defineProperty(this, "current", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: Object.assign({}, C)
                }), Object.defineProperty(this, "target", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: Object.assign({}, C)
                }), Object.defineProperty(this, "velocity", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        a: 0,
                        b: 0,
                        c: 0,
                        d: 0,
                        e: 0,
                        f: 0
                    }
                }), Object.defineProperty(this, "lockedAxis", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), !t) throw new Error("Container Element Not Found");
                this.container = t, this.initContent(), this.attachPlugins(Object.assign(Object.assign({}, I.Plugins), i)), 
                this.emit("attachPlugins"), this.emit("init");
                const o = this.content;
                if (o.addEventListener("load", this.onLoad), o.addEventListener("error", this.onError), 
                this.isContentLoading) {
                    if (this.option("spinner")) {
                        t.classList.add(this.cn("isLoading"));
                        const e = n(x);
                        !t.contains(o) || o.parentElement instanceof HTMLPictureElement ? this.spinner = t.appendChild(e) : this.spinner = (null === (s = o.parentElement) || void 0 === s ? void 0 : s.insertBefore(e, o)) || null;
                    }
                    this.emit("beforeLoad");
                } else queueMicrotask((() => {
                    this.enable();
                }));
            }
            initContent() {
                const {container: t} = this, e = this.cn(L);
                let i = this.option(L) || t.querySelector(`.${e}`);
                if (i || (i = t.querySelector("img,picture") || t.firstElementChild, i && P(i, e)), 
                i instanceof HTMLPictureElement && (i = i.querySelector("img")), !i) throw new Error("No content found");
                this.content = i;
            }
            onLoad() {
                const {spinner: t, container: e, state: i} = this;
                t && (t.remove(), this.spinner = null), this.option("spinner") && e.classList.remove(this.cn("isLoading")), 
                this.emit("afterLoad"), i === m.Init ? this.enable() : this.updateMetrics();
            }
            onError() {
                this.state !== m.Destroy && (this.spinner && (this.spinner.remove(), this.spinner = null), 
                this.stop(), this.detachEvents(), this.state = m.Error, this.emit("error"));
            }
            getNextScale(t) {
                const {fullScale: e, targetScale: i, coverScale: n, maxScale: s, minScale: o} = this;
                let a = o;
                switch (t) {
                  case "toggleMax":
                    a = i - o < .5 * (s - o) ? s : o;
                    break;

                  case "toggleCover":
                    a = i - o < .5 * (n - o) ? n : o;
                    break;

                  case "toggleZoom":
                    a = i - o < .5 * (e - o) ? e : o;
                    break;

                  case "iterateZoom":
                    let t = [ 1, e, s ].sort(((t, e) => t - e)), r = t.findIndex((t => t > i + 1e-5));
                    a = t[r] || 1;
                }
                return a;
            }
            attachObserver() {
                var t;
                const e = () => {
                    const {container: t, containerRect: e} = this;
                    return Math.abs(e.width - t.getBoundingClientRect().width) > .1 || Math.abs(e.height - t.getBoundingClientRect().height) > .1;
                };
                this.resizeObserver || void 0 === window.ResizeObserver || (this.resizeObserver = new ResizeObserver((() => {
                    this.updateTimer || (e() ? (this.onResize(), this.isMobile && (this.updateTimer = setTimeout((() => {
                        e() && this.onResize(), this.updateTimer = null;
                    }), 500))) : this.updateTimer && (clearTimeout(this.updateTimer), this.updateTimer = null));
                }))), null === (t = this.resizeObserver) || void 0 === t || t.observe(this.container);
            }
            detachObserver() {
                var t;
                null === (t = this.resizeObserver) || void 0 === t || t.disconnect();
            }
            attachEvents() {
                const {container: t} = this;
                t.addEventListener("click", this.onClick, {
                    passive: !1,
                    capture: !1
                }), t.addEventListener("wheel", this.onWheel, {
                    passive: !1
                }), this.pointerTracker = new l(t, {
                    start: this.onPointerDown,
                    move: this.onPointerMove,
                    end: this.onPointerUp
                }), document.addEventListener(O, this.onMouseMove);
            }
            detachEvents() {
                var t;
                const {container: e} = this;
                e.removeEventListener("click", this.onClick, {
                    passive: !1,
                    capture: !1
                }), e.removeEventListener("wheel", this.onWheel, {
                    passive: !1
                }), null === (t = this.pointerTracker) || void 0 === t || t.stop(), this.pointerTracker = null, 
                document.removeEventListener(O, this.onMouseMove), document.removeEventListener("keydown", this.onKeydown, !0), 
                this.clickTimer && (clearTimeout(this.clickTimer), this.clickTimer = null), this.updateTimer && (clearTimeout(this.updateTimer), 
                this.updateTimer = null);
            }
            animate() {
                this.setTargetForce();
                const t = this.friction, e = this.option("maxVelocity");
                for (const i of v) t ? (this.velocity[i] *= 1 - t, e && !this.isScaling && (this.velocity[i] = Math.max(Math.min(this.velocity[i], e), -1 * e)), 
                this.current[i] += this.velocity[i]) : this.current[i] = this.target[i];
                this.setTransform(), this.setEdgeForce(), !this.isResting || this.isDragging ? this.rAF = requestAnimationFrame((() => this.animate())) : this.stop("current");
            }
            setTargetForce() {
                for (const t of v) "e" === t && this.isBouncingX || "f" === t && this.isBouncingY || (this.velocity[t] = (1 / (1 - this.friction) - 1) * (this.target[t] - this.current[t]));
            }
            checkBounds(t = 0, e = 0) {
                const {current: i} = this, n = i.e + t, s = i.f + e, o = this.getBounds(), {x: a, y: r} = o, l = a.min, c = a.max, h = r.min, d = r.max;
                let u = 0, p = 0;
                return l !== 1 / 0 && n < l ? u = l - n : c !== 1 / 0 && n > c && (u = c - n), h !== 1 / 0 && s < h ? p = h - s : d !== 1 / 0 && s > d && (p = d - s), 
                Math.abs(u) < 1e-4 && (u = 0), Math.abs(p) < 1e-4 && (p = 0), Object.assign(Object.assign({}, o), {
                    xDiff: u,
                    yDiff: p,
                    inBounds: !u && !p
                });
            }
            clampTargetBounds() {
                const {target: t} = this, {x: e, y: i} = this.getBounds();
                e.min !== 1 / 0 && (t.e = Math.max(t.e, e.min)), e.max !== 1 / 0 && (t.e = Math.min(t.e, e.max)), 
                i.min !== 1 / 0 && (t.f = Math.max(t.f, i.min)), i.max !== 1 / 0 && (t.f = Math.min(t.f, i.max));
            }
            calculateContentDim(t = this.current) {
                const {content: e, contentRect: i} = this, {fitWidth: n, fitHeight: s, fullWidth: o, fullHeight: a} = i;
                let r = o, l = a;
                if (this.option("zoom") || 0 !== this.angle) {
                    const i = !(e instanceof HTMLImageElement) && ("none" === window.getComputedStyle(e).maxWidth || "none" === window.getComputedStyle(e).maxHeight), c = i ? o : n, h = i ? a : s, d = this.getMatrix(t), u = new DOMPoint(0, 0).matrixTransform(d), p = new DOMPoint(0 + c, 0).matrixTransform(d), f = new DOMPoint(0 + c, 0 + h).matrixTransform(d), g = new DOMPoint(0, 0 + h).matrixTransform(d), m = Math.abs(f.x - u.x), v = Math.abs(f.y - u.y), b = Math.abs(g.x - p.x), y = Math.abs(g.y - p.y);
                    r = Math.max(m, b), l = Math.max(v, y);
                }
                return {
                    contentWidth: r,
                    contentHeight: l
                };
            }
            setEdgeForce() {
                if (this.ignoreBounds || this.isDragging || this.panMode === O || this.targetScale < this.scale) return this.isBouncingX = !1, 
                void (this.isBouncingY = !1);
                const {target: t} = this, {x: e, y: i, xDiff: n, yDiff: s} = this.checkBounds();
                const o = this.option("maxVelocity");
                let a = this.velocity.e, r = this.velocity.f;
                0 !== n ? (this.isBouncingX = !0, n * a <= 0 ? a += .14 * n : (a = .14 * n, e.min !== 1 / 0 && (this.target.e = Math.max(t.e, e.min)), 
                e.max !== 1 / 0 && (this.target.e = Math.min(t.e, e.max))), o && (a = Math.max(Math.min(a, o), -1 * o))) : this.isBouncingX = !1, 
                0 !== s ? (this.isBouncingY = !0, s * r <= 0 ? r += .14 * s : (r = .14 * s, i.min !== 1 / 0 && (this.target.f = Math.max(t.f, i.min)), 
                i.max !== 1 / 0 && (this.target.f = Math.min(t.f, i.max))), o && (r = Math.max(Math.min(r, o), -1 * o))) : this.isBouncingY = !1, 
                this.isBouncingX && (this.velocity.e = a), this.isBouncingY && (this.velocity.f = r);
            }
            enable() {
                const {content: t} = this, e = new DOMMatrixReadOnly(window.getComputedStyle(t).transform);
                for (const t of v) this.current[t] = this.target[t] = e[t];
                this.updateMetrics(), this.attachObserver(), this.attachEvents(), this.state = m.Ready, 
                this.emit("ready");
            }
            onClick(t) {
                var e;
                "click" === t.type && 0 === t.detail && (this.dragOffset.x = 0, this.dragOffset.y = 0), 
                this.isDragging && (null === (e = this.pointerTracker) || void 0 === e || e.clear(), 
                this.trackingPoints = [], this.startDecelAnim());
                const i = t.target;
                if (!i || t.defaultPrevented) return;
                if (i.hasAttribute("disabled")) return t.preventDefault(), void t.stopPropagation();
                if ((() => {
                    const t = window.getSelection();
                    return t && "Range" === t.type;
                })() && !i.closest("button")) return;
                const n = i.closest("[data-panzoom-action]"), s = i.closest("[data-panzoom-change]"), o = n || s, a = o && E(o) ? o.dataset : null;
                if (a) {
                    const e = a.panzoomChange, i = a.panzoomAction;
                    if ((e || i) && t.preventDefault(), e) {
                        let t = {};
                        try {
                            t = JSON.parse(e);
                        } catch (t) {
                            console && console.warn("The given data was not valid JSON");
                        }
                        return void this.applyChange(t);
                    }
                    if (i) return void (this[i] && this[i]());
                }
                if (Math.abs(this.dragOffset.x) > 3 || Math.abs(this.dragOffset.y) > 3) return t.preventDefault(), 
                void t.stopPropagation();
                if (i.closest("[data-fancybox]")) return;
                const r = this.content.getBoundingClientRect(), l = this.dragStart;
                if (l.time && !this.canZoomOut() && (Math.abs(r.x - l.x) > 2 || Math.abs(r.y - l.y) > 2)) return;
                this.dragStart.time = 0;
                const c = e => {
                    this.option("zoom", t) && e && "string" == typeof e && /(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(e) && "function" == typeof this[e] && (t.preventDefault(), 
                    this[e]({
                        event: t
                    }));
                }, h = this.option("click", t), d = this.option("dblClick", t);
                d ? (this.clicks++, 1 == this.clicks && (this.clickTimer = setTimeout((() => {
                    1 === this.clicks ? (this.emit("click", t), !t.defaultPrevented && h && c(h)) : (this.emit("dblClick", t), 
                    t.defaultPrevented || c(d)), this.clicks = 0, this.clickTimer = null;
                }), 350))) : (this.emit("click", t), !t.defaultPrevented && h && c(h));
            }
            addTrackingPoint(t) {
                const e = this.trackingPoints.filter((t => t.time > Date.now() - 100));
                e.push(t), this.trackingPoints = e;
            }
            onPointerDown(t, e, i) {
                var n;
                if (!1 === this.option("touch", t)) return !1;
                this.pwt = 0, this.dragOffset = {
                    x: 0,
                    y: 0,
                    time: 0
                }, this.trackingPoints = [];
                const s = this.content.getBoundingClientRect();
                if (this.dragStart = {
                    x: s.x,
                    y: s.y,
                    top: s.top,
                    left: s.left,
                    time: Date.now()
                }, this.clickTimer) return !1;
                if (this.panMode === O && this.targetScale > 1) return t.preventDefault(), t.stopPropagation(), 
                !1;
                const o = t.composedPath()[0];
                if (!i.length) {
                    if ([ "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO", "IFRAME" ].includes(o.nodeName) || o.closest("[contenteditable],[data-selectable],[data-draggable],[data-clickable],[data-panzoom-change],[data-panzoom-action]")) return !1;
                    null === (n = window.getSelection()) || void 0 === n || n.removeAllRanges();
                }
                if ("mousedown" === t.type) [ "A", "BUTTON" ].includes(o.nodeName) || t.preventDefault(); else if (Math.abs(this.velocity.a) > .3) return !1;
                return this.target.e = this.current.e, this.target.f = this.current.f, this.stop(), 
                this.isDragging || (this.isDragging = !0, this.addTrackingPoint(e), this.emit("touchStart", t)), 
                !0;
            }
            onPointerMove(e, n, s) {
                if (!1 === this.option("touch", e)) return;
                if (!this.isDragging) return;
                if (n.length < 2 && this.panOnlyZoomed && t(this.targetScale) <= t(this.minScale)) return;
                if (this.emit("touchMove", e), e.defaultPrevented) return;
                this.addTrackingPoint(n[0]);
                const {content: o} = this, a = h(s[0], s[1]), r = h(n[0], n[1]);
                let l = 0, d = 0;
                if (n.length > 1) {
                    const t = o.getBoundingClientRect();
                    l = a.clientX - t.left - .5 * t.width, d = a.clientY - t.top - .5 * t.height;
                }
                const u = c(s[0], s[1]), p = c(n[0], n[1]);
                let f = u ? p / u : 1, g = r.clientX - a.clientX, m = r.clientY - a.clientY;
                this.dragOffset.x += g, this.dragOffset.y += m, this.dragOffset.time = Date.now() - this.dragStart.time;
                let v = t(this.targetScale) === t(this.minScale) && this.option("lockAxis");
                if (v && !this.lockedAxis) if ("xy" === v || "y" === v || "touchmove" === e.type) {
                    if (Math.abs(this.dragOffset.x) < 6 && Math.abs(this.dragOffset.y) < 6) return void e.preventDefault();
                    const t = Math.abs(180 * Math.atan2(this.dragOffset.y, this.dragOffset.x) / Math.PI);
                    this.lockedAxis = t > 45 && t < 135 ? "y" : "x", this.dragOffset.x = 0, this.dragOffset.y = 0, 
                    g = 0, m = 0;
                } else this.lockedAxis = v;
                if (i(e.target, this.content) && (v = "x", this.dragOffset.y = 0), v && "xy" !== v && this.lockedAxis !== v && t(this.targetScale) === t(this.minScale)) return;
                e.cancelable && e.preventDefault(), this.container.classList.add(this.cn("isDragging"));
                const b = this.checkBounds(g, m);
                this.option("rubberband") ? ("x" !== this.isInfinite && (b.xDiff > 0 && g < 0 || b.xDiff < 0 && g > 0) && (g *= Math.max(0, .5 - Math.abs(.75 / this.contentRect.fitWidth * b.xDiff))), 
                "y" !== this.isInfinite && (b.yDiff > 0 && m < 0 || b.yDiff < 0 && m > 0) && (m *= Math.max(0, .5 - Math.abs(.75 / this.contentRect.fitHeight * b.yDiff)))) : (b.xDiff && (g = 0), 
                b.yDiff && (m = 0));
                const y = this.targetScale, w = this.minScale, x = this.maxScale;
                y < .5 * w && (f = Math.max(f, w)), y > 1.5 * x && (f = Math.min(f, x)), "y" === this.lockedAxis && t(y) === t(w) && (g = 0), 
                "x" === this.lockedAxis && t(y) === t(w) && (m = 0), this.applyChange({
                    originX: l,
                    originY: d,
                    panX: g,
                    panY: m,
                    scale: f,
                    friction: this.option("dragFriction"),
                    ignoreBounds: !0
                });
            }
            onPointerUp(t, e, n) {
                if (n.length) return this.dragOffset.x = 0, this.dragOffset.y = 0, void (this.trackingPoints = []);
                this.container.classList.remove(this.cn("isDragging")), this.isDragging && (this.addTrackingPoint(e), 
                this.panOnlyZoomed && this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1 && (this.trackingPoints = []), 
                i(t.target, this.content) && "y" === this.lockedAxis && (this.trackingPoints = []), 
                this.emit("touchEnd", t), this.isDragging = !1, this.lockedAxis = !1, this.state !== m.Destroy && (t.defaultPrevented || this.startDecelAnim()));
            }
            startDecelAnim() {
                var e;
                const i = this.isScaling;
                this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = !1, 
                this.isBouncingY = !1;
                for (const t of v) this.velocity[t] = 0;
                this.target.e = this.current.e, this.target.f = this.current.f, S(this.container, "is-scaling"), 
                S(this.container, "is-animating"), this.isTicking = !1;
                const {trackingPoints: n} = this, s = n[0], o = n[n.length - 1];
                let a = 0, r = 0, l = 0;
                o && s && (a = o.clientX - s.clientX, r = o.clientY - s.clientY, l = o.time - s.time);
                const c = (null === (e = window.visualViewport) || void 0 === e ? void 0 : e.scale) || 1;
                1 !== c && (a *= c, r *= c);
                let h = 0, d = 0, u = 0, p = 0, f = this.option("decelFriction");
                const g = this.targetScale;
                if (l > 0) {
                    u = Math.abs(a) > 3 ? a / (l / 30) : 0, p = Math.abs(r) > 3 ? r / (l / 30) : 0;
                    const t = this.option("maxVelocity");
                    t && (u = Math.max(Math.min(u, t), -1 * t), p = Math.max(Math.min(p, t), -1 * t));
                }
                u && (h = u / (1 / (1 - f) - 1)), p && (d = p / (1 / (1 - f) - 1)), ("y" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "y" === this.lockedAxis && t(g) === this.minScale) && (h = u = 0), 
                ("x" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "x" === this.lockedAxis && t(g) === this.minScale) && (d = p = 0);
                const m = this.dragOffset.x, b = this.dragOffset.y, y = this.option("dragMinThreshold") || 0;
                Math.abs(m) < y && Math.abs(b) < y && (h = d = 0, u = p = 0), (this.option("zoom") && (g < this.minScale - 1e-5 || g > this.maxScale + 1e-5) || i && !h && !d) && (f = .35), 
                this.applyChange({
                    panX: h,
                    panY: d,
                    friction: f
                }), this.emit("decel", u, p, m, b);
            }
            onWheel(t) {
                var e = [ -t.deltaX || 0, -t.deltaY || 0, -t.detail || 0 ].reduce((function(t, e) {
                    return Math.abs(e) > Math.abs(t) ? e : t;
                }));
                const i = Math.max(-1, Math.min(1, e));
                if (this.emit("wheel", t, i), this.panMode === O) return;
                if (t.defaultPrevented) return;
                const n = this.option("wheel");
                "pan" === n ? (t.preventDefault(), this.panOnlyZoomed && !this.canZoomOut() || this.applyChange({
                    panX: 2 * -t.deltaX,
                    panY: 2 * -t.deltaY,
                    bounce: !1
                })) : "zoom" === n && !1 !== this.option("zoom") && this.zoomWithWheel(t);
            }
            onMouseMove(t) {
                this.panWithMouse(t);
            }
            onKeydown(t) {
                "Escape" === t.key && this.toggleFS();
            }
            onResize() {
                this.updateMetrics(), this.checkBounds().inBounds || this.requestTick();
            }
            setTransform() {
                this.emit("beforeTransform");
                const {current: e, target: i, content: n, contentRect: s} = this, o = Object.assign({}, C);
                for (const n of v) {
                    const s = "e" == n || "f" === n ? M : T;
                    o[n] = t(e[n], s), Math.abs(i[n] - e[n]) < ("e" == n || "f" === n ? .51 : .001) && (e[n] = i[n]);
                }
                let {a, b: r, c: l, d: c, e: h, f: d} = o, u = `matrix(${a}, ${r}, ${l}, ${c}, ${h}, ${d})`, p = n.parentElement instanceof HTMLPictureElement ? n.parentElement : n;
                if (this.option("transformParent") && (p = p.parentElement || p), p.style.transform === u) return;
                p.style.transform = u;
                const {contentWidth: f, contentHeight: g} = this.calculateContentDim();
                s.width = f, s.height = g, this.emit("afterTransform");
            }
            updateMetrics(e = !1) {
                var i;
                if (!this || this.state === m.Destroy) return;
                if (this.isContentLoading) return;
                const n = Math.max(1, (null === (i = window.visualViewport) || void 0 === i ? void 0 : i.scale) || 1), {container: s, content: o} = this, a = o instanceof HTMLImageElement, r = s.getBoundingClientRect(), l = getComputedStyle(this.container);
                let c = r.width * n, h = r.height * n;
                const d = parseFloat(l.paddingTop) + parseFloat(l.paddingBottom), u = c - (parseFloat(l.paddingLeft) + parseFloat(l.paddingRight)), p = h - d;
                this.containerRect = {
                    width: c,
                    height: h,
                    innerWidth: u,
                    innerHeight: p
                };
                const f = parseFloat(o.dataset.width || "") || (t => {
                    let e = 0;
                    return e = t instanceof HTMLImageElement ? t.naturalWidth : t instanceof SVGElement ? t.width.baseVal.value : Math.max(t.offsetWidth, t.scrollWidth), 
                    e || 0;
                })(o), g = parseFloat(o.dataset.height || "") || (t => {
                    let e = 0;
                    return e = t instanceof HTMLImageElement ? t.naturalHeight : t instanceof SVGElement ? t.height.baseVal.value : Math.max(t.offsetHeight, t.scrollHeight), 
                    e || 0;
                })(o);
                let v = this.option("width", f) || z, b = this.option("height", g) || z;
                const y = v === z, w = b === z;
                "number" != typeof v && (v = f), "number" != typeof b && (b = g), y && (v = f * (b / g)), 
                w && (b = g / (f / v));
                let x = o.parentElement instanceof HTMLPictureElement ? o.parentElement : o;
                this.option("transformParent") && (x = x.parentElement || x);
                const E = x.getAttribute("style") || "";
                x.style.setProperty("transform", "none", "important"), a && (x.style.width = "", 
                x.style.height = ""), x.offsetHeight;
                const S = o.getBoundingClientRect();
                let P = S.width * n, C = S.height * n, T = P, M = C;
                P = Math.min(P, v), C = Math.min(C, b), a ? ({width: P, height: C} = ((t, e, i, n) => {
                    const s = i / t, o = n / e, a = Math.min(s, o);
                    return {
                        width: t *= a,
                        height: e *= a
                    };
                })(v, b, P, C)) : (P = Math.min(P, v), C = Math.min(C, b));
                let O = .5 * (M - C), A = .5 * (T - P);
                this.contentRect = Object.assign(Object.assign({}, this.contentRect), {
                    top: S.top - r.top + O,
                    bottom: r.bottom - S.bottom + O,
                    left: S.left - r.left + A,
                    right: r.right - S.right + A,
                    fitWidth: P,
                    fitHeight: C,
                    width: P,
                    height: C,
                    fullWidth: v,
                    fullHeight: b
                }), x.style.cssText = E, a && (x.style.width = `${P}px`, x.style.height = `${C}px`), 
                this.setTransform(), !0 !== e && this.emit("refresh"), this.ignoreBounds || (t(this.targetScale) < t(this.minScale) ? this.zoomTo(this.minScale, {
                    friction: 0
                }) : this.targetScale > this.maxScale ? this.zoomTo(this.maxScale, {
                    friction: 0
                }) : this.state === m.Init || this.checkBounds().inBounds || this.requestTick()), 
                this.updateControls();
            }
            calculateBounds() {
                const {contentWidth: e, contentHeight: i} = this.calculateContentDim(this.target), {targetScale: n, lockedAxis: s} = this, {fitWidth: o, fitHeight: a} = this.contentRect;
                let r = 0, l = 0, c = 0, h = 0;
                const d = this.option("infinite");
                if (!0 === d || s && d === s) r = -1 / 0, c = 1 / 0, l = -1 / 0, h = 1 / 0; else {
                    let {containerRect: s, contentRect: d} = this, u = t(o * n, M), p = t(a * n, M), {innerWidth: f, innerHeight: g} = s;
                    if (s.width === u && (f = s.width), s.width === p && (g = s.height), e > f) {
                        c = .5 * (e - f), r = -1 * c;
                        let t = .5 * (d.right - d.left);
                        r += t, c += t;
                    }
                    if (o > f && e < f && (r -= .5 * (o - f), c -= .5 * (o - f)), i > g) {
                        h = .5 * (i - g), l = -1 * h;
                        let t = .5 * (d.bottom - d.top);
                        l += t, h += t;
                    }
                    a > g && i < g && (r -= .5 * (a - g), c -= .5 * (a - g));
                }
                return {
                    x: {
                        min: r,
                        max: c
                    },
                    y: {
                        min: l,
                        max: h
                    }
                };
            }
            getBounds() {
                const t = this.option("bounds");
                return t !== z ? t : this.calculateBounds();
            }
            updateControls() {
                const e = this, i = e.container, {panMode: n, contentRect: s, targetScale: a, minScale: r} = e;
                let l = r, c = e.option("click") || !1;
                c && (l = e.getNextScale(c));
                let h = e.canZoomIn(), d = e.canZoomOut(), u = n === A && !!this.option("touch"), p = d && u;
                if (u && (t(a) < t(r) && !this.panOnlyZoomed && (p = !0), (t(s.width, 1) > t(s.fitWidth, 1) || t(s.height, 1) > t(s.fitHeight, 1)) && (p = !0)), 
                t(s.width * a, 1) < t(s.fitWidth, 1) && (p = !1), n === O && (p = !1), o(i, this.cn("isDraggable"), p), 
                !this.option("zoom")) return;
                let f = h && t(l) > t(a), g = !f && !p && d && t(l) < t(a);
                o(i, this.cn("canZoomIn"), f), o(i, this.cn("canZoomOut"), g);
                for (const t of i.querySelectorAll("[data-panzoom-action]")) {
                    let e = !1, i = !1;
                    switch (t.dataset.panzoomAction) {
                      case "zoomIn":
                        h ? e = !0 : i = !0;
                        break;

                      case "zoomOut":
                        d ? e = !0 : i = !0;
                        break;

                      case "toggleZoom":
                      case "iterateZoom":
                        h || d ? e = !0 : i = !0;
                        const n = t.querySelector("g");
                        n && (n.style.display = h ? "" : "none");
                    }
                    e ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex")) : i && (t.setAttribute("disabled", ""), 
                    t.setAttribute("tabindex", "-1"));
                }
            }
            panTo({x: t = this.target.e, y: e = this.target.f, scale: i = this.targetScale, friction: n = this.option("friction"), angle: s = 0, originX: o = 0, originY: a = 0, flipX: r = !1, flipY: l = !1, ignoreBounds: c = !1}) {
                this.state !== m.Destroy && this.applyChange({
                    panX: t - this.target.e,
                    panY: e - this.target.f,
                    scale: i / this.targetScale,
                    angle: s,
                    originX: o,
                    originY: a,
                    friction: n,
                    flipX: r,
                    flipY: l,
                    ignoreBounds: c
                });
            }
            applyChange({panX: e = 0, panY: i = 0, scale: n = 1, angle: s = 0, originX: o = -this.current.e, originY: a = -this.current.f, friction: r = this.option("friction"), flipX: l = !1, flipY: c = !1, ignoreBounds: h = !1, bounce: d = this.option("bounce")}) {
                const u = this.state;
                if (u === m.Destroy) return;
                this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.friction = r || 0, 
                this.ignoreBounds = h;
                const {current: p} = this, f = p.e, g = p.f, b = this.getMatrix(this.target);
                let y = (new DOMMatrix).translate(f, g).translate(o, a).translate(e, i);
                if (this.option("zoom")) {
                    if (!h) {
                        const t = this.targetScale, e = this.minScale, i = this.maxScale;
                        t * n < e && (n = e / t), t * n > i && (n = i / t);
                    }
                    y = y.scale(n);
                }
                y = y.translate(-o, -a).translate(-f, -g).multiply(b), s && (y = y.rotate(s)), l && (y = y.scale(-1, 1)), 
                c && (y = y.scale(1, -1));
                for (const e of v) "e" !== e && "f" !== e && (y[e] > this.minScale + 1e-5 || y[e] < this.minScale - 1e-5) ? this.target[e] = y[e] : this.target[e] = t(y[e], M);
                (this.targetScale < this.scale || Math.abs(n - 1) > .1 || this.panMode === O || !1 === d) && !h && this.clampTargetBounds(), 
                u === m.Init ? this.animate() : this.isResting || (this.state = m.Panning, this.requestTick());
            }
            stop(t = !1) {
                if (this.state === m.Init || this.state === m.Destroy) return;
                const e = this.isTicking;
                this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = !1, 
                this.isBouncingY = !1;
                for (const e of v) this.velocity[e] = 0, "current" === t ? this.current[e] = this.target[e] : "target" === t && (this.target[e] = this.current[e]);
                this.setTransform(), S(this.container, "is-scaling"), S(this.container, "is-animating"), 
                this.isTicking = !1, this.state = m.Ready, e && (this.emit("endAnimation"), this.updateControls());
            }
            requestTick() {
                this.isTicking || (this.emit("startAnimation"), this.updateControls(), P(this.container, "is-animating"), 
                this.isScaling && P(this.container, "is-scaling")), this.isTicking = !0, this.rAF || (this.rAF = requestAnimationFrame((() => this.animate())));
            }
            panWithMouse(e, i = this.option("mouseMoveFriction")) {
                if (this.pmme = e, this.panMode !== O || !e) return;
                if (t(this.targetScale) <= t(this.minScale)) return;
                this.emit("mouseMove", e);
                const {container: n, containerRect: s, contentRect: o} = this, a = s.width, r = s.height, l = n.getBoundingClientRect(), c = (e.clientX || 0) - l.left, h = (e.clientY || 0) - l.top;
                let {contentWidth: d, contentHeight: u} = this.calculateContentDim(this.target);
                const p = this.option("mouseMoveFactor");
                p > 1 && (d !== a && (d *= p), u !== r && (u *= p));
                let f = .5 * (d - a) - c / a * 100 / 100 * (d - a);
                f += .5 * (o.right - o.left);
                let g = .5 * (u - r) - h / r * 100 / 100 * (u - r);
                g += .5 * (o.bottom - o.top), this.applyChange({
                    panX: f - this.target.e,
                    panY: g - this.target.f,
                    friction: i
                });
            }
            zoomWithWheel(e) {
                if (this.state === m.Destroy || this.state === m.Init) return;
                const i = Date.now();
                if (i - this.pwt < 45) return void e.preventDefault();
                this.pwt = i;
                var n = [ -e.deltaX || 0, -e.deltaY || 0, -e.detail || 0 ].reduce((function(t, e) {
                    return Math.abs(e) > Math.abs(t) ? e : t;
                }));
                const s = Math.max(-1, Math.min(1, n)), {targetScale: o, maxScale: a, minScale: r} = this;
                let l = o * (100 + 45 * s) / 100;
                t(l) < t(r) && t(o) <= t(r) ? (this.cwd += Math.abs(s), l = r) : t(l) > t(a) && t(o) >= t(a) ? (this.cwd += Math.abs(s), 
                l = a) : (this.cwd = 0, l = Math.max(Math.min(l, a), r)), this.cwd > this.option("wheelLimit") || (e.preventDefault(), 
                t(l) !== t(o) && this.zoomTo(l, {
                    event: e
                }));
            }
            canZoomIn() {
                return this.option("zoom") && (t(this.contentRect.width, 1) < t(this.contentRect.fitWidth, 1) || t(this.targetScale) < t(this.maxScale));
            }
            canZoomOut() {
                return this.option("zoom") && t(this.targetScale) > t(this.minScale);
            }
            zoomIn(t = 1.25, e) {
                this.zoomTo(this.targetScale * t, e);
            }
            zoomOut(t = .8, e) {
                this.zoomTo(this.targetScale * t, e);
            }
            zoomToFit(t) {
                this.zoomTo("fit", t);
            }
            zoomToCover(t) {
                this.zoomTo("cover", t);
            }
            zoomToFull(t) {
                this.zoomTo("full", t);
            }
            zoomToMax(t) {
                this.zoomTo("max", t);
            }
            toggleZoom(t) {
                this.zoomTo(this.getNextScale("toggleZoom"), t);
            }
            toggleMax(t) {
                this.zoomTo(this.getNextScale("toggleMax"), t);
            }
            toggleCover(t) {
                this.zoomTo(this.getNextScale("toggleCover"), t);
            }
            iterateZoom(t) {
                this.zoomTo("next", t);
            }
            zoomTo(t = 1, {friction: e = z, originX: i = z, originY: n = z, event: s} = {}) {
                if (this.isContentLoading || this.state === m.Destroy) return;
                const {targetScale: o, fullScale: a, maxScale: r, coverScale: l} = this;
                if (this.stop(), this.panMode === O && (s = this.pmme || s), s || i === z || n === z) {
                    const t = this.content.getBoundingClientRect(), e = this.container.getBoundingClientRect(), o = s ? s.clientX : e.left + .5 * e.width, a = s ? s.clientY : e.top + .5 * e.height;
                    i = o - t.left - .5 * t.width, n = a - t.top - .5 * t.height;
                }
                let c = 1;
                "number" == typeof t ? c = t : "full" === t ? c = a : "cover" === t ? c = l : "max" === t ? c = r : "fit" === t ? c = 1 : "next" === t && (c = this.getNextScale("iterateZoom")), 
                c = c / o || 1, e = e === z ? c > 1 ? .15 : .25 : e, this.applyChange({
                    scale: c,
                    originX: i,
                    originY: n,
                    friction: e
                }), s && this.panMode === O && this.panWithMouse(s, e);
            }
            rotateCCW() {
                this.applyChange({
                    angle: -90
                });
            }
            rotateCW() {
                this.applyChange({
                    angle: 90
                });
            }
            flipX() {
                this.applyChange({
                    flipX: !0
                });
            }
            flipY() {
                this.applyChange({
                    flipY: !0
                });
            }
            fitX() {
                this.stop("target");
                const {containerRect: t, contentRect: e, target: i} = this;
                this.applyChange({
                    panX: .5 * t.width - (e.left + .5 * e.fitWidth) - i.e,
                    panY: .5 * t.height - (e.top + .5 * e.fitHeight) - i.f,
                    scale: t.width / e.fitWidth / this.targetScale,
                    originX: 0,
                    originY: 0,
                    ignoreBounds: !0
                });
            }
            fitY() {
                this.stop("target");
                const {containerRect: t, contentRect: e, target: i} = this;
                this.applyChange({
                    panX: .5 * t.width - (e.left + .5 * e.fitWidth) - i.e,
                    panY: .5 * t.innerHeight - (e.top + .5 * e.fitHeight) - i.f,
                    scale: t.height / e.fitHeight / this.targetScale,
                    originX: 0,
                    originY: 0,
                    ignoreBounds: !0
                });
            }
            toggleFS() {
                const {container: t} = this, e = this.cn("inFullscreen"), i = this.cn("htmlHasFullscreen");
                t.classList.toggle(e);
                const n = t.classList.contains(e);
                n ? (document.documentElement.classList.add(i), document.addEventListener("keydown", this.onKeydown, !0)) : (document.documentElement.classList.remove(i), 
                document.removeEventListener("keydown", this.onKeydown, !0)), this.updateMetrics(), 
                this.emit(n ? "enterFS" : "exitFS");
            }
            getMatrix(t = this.current) {
                const {a: e, b: i, c: n, d: s, e: o, f: a} = t;
                return new DOMMatrix([ e, i, n, s, o, a ]);
            }
            reset(t) {
                if (this.state !== m.Init && this.state !== m.Destroy) {
                    this.stop("current");
                    for (const t of v) this.target[t] = C[t];
                    this.target.a = this.minScale, this.target.d = this.minScale, this.clampTargetBounds(), 
                    this.isResting || (this.friction = void 0 === t ? this.option("friction") : t, this.state = m.Panning, 
                    this.requestTick());
                }
            }
            destroy() {
                this.stop(), this.state = m.Destroy, this.detachEvents(), this.detachObserver();
                const {container: t, content: e} = this, i = this.option("classes") || {};
                for (const e of Object.values(i)) t.classList.remove(e + "");
                e && (e.removeEventListener("load", this.onLoad), e.removeEventListener("error", this.onError)), 
                this.detachPlugins();
            }
        }
        Object.defineProperty(I, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: y
        }), Object.defineProperty(I, "Plugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {}
        });
        const D = function(t, e) {
            let i = !0;
            return (...n) => {
                i && (i = !1, t(...n), setTimeout((() => {
                    i = !0;
                }), e));
            };
        }, F = (t, e) => {
            let i = [];
            return t.childNodes.forEach((t => {
                t.nodeType !== Node.ELEMENT_NODE || e && !t.matches(e) || i.push(t);
            })), i;
        }, j = {
            viewport: null,
            track: null,
            enabled: !0,
            slides: [],
            axis: "x",
            transition: "fade",
            preload: 1,
            slidesPerPage: "auto",
            initialPage: 0,
            friction: .12,
            Panzoom: {
                decelFriction: .12
            },
            center: !0,
            infinite: !0,
            fill: !0,
            dragFree: !1,
            adaptiveHeight: !1,
            direction: "ltr",
            classes: {
                container: "f-carousel",
                viewport: "f-carousel__viewport",
                track: "f-carousel__track",
                slide: "f-carousel__slide",
                isLTR: "is-ltr",
                isRTL: "is-rtl",
                isHorizontal: "is-horizontal",
                isVertical: "is-vertical",
                inTransition: "in-transition",
                isSelected: "is-selected"
            },
            l10n: {
                NEXT: "Next slide",
                PREV: "Previous slide",
                GOTO: "Go to slide #%d"
            }
        };
        var B;
        !function(t) {
            t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Destroy = 2] = "Destroy";
        }(B || (B = {}));
        const H = t => {
            if ("string" == typeof t || t instanceof HTMLElement) t = {
                html: t
            }; else {
                const e = t.thumb;
                void 0 !== e && ("string" == typeof e && (t.thumbSrc = e), e instanceof HTMLImageElement && (t.thumbEl = e, 
                t.thumbElSrc = e.src, t.thumbSrc = e.src), delete t.thumb);
            }
            return Object.assign({
                html: "",
                el: null,
                isDom: !1,
                class: "",
                customClass: "",
                index: -1,
                dim: 0,
                gap: 0,
                pos: 0,
                transition: !1
            }, t);
        }, N = (t = {}) => Object.assign({
            index: -1,
            slides: [],
            dim: 0,
            pos: -1
        }, t);
        class _ extends f {
            constructor(t, e) {
                super(e), Object.defineProperty(this, "instance", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                });
            }
            attach() {}
            detach() {}
        }
        const $ = {
            classes: {
                list: "f-carousel__dots",
                isDynamic: "is-dynamic",
                hasDots: "has-dots",
                dot: "f-carousel__dot",
                isBeforePrev: "is-before-prev",
                isPrev: "is-prev",
                isCurrent: "is-current",
                isNext: "is-next",
                isAfterNext: "is-after-next"
            },
            dotTpl: '<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>',
            dynamicFrom: 11,
            maxCount: 1 / 0,
            minCount: 2
        };
        class W extends _ {
            constructor() {
                super(...arguments), Object.defineProperty(this, "isDynamic", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "list", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                });
            }
            onRefresh() {
                this.refresh();
            }
            build() {
                let t = this.list;
                if (!t) {
                    t = document.createElement("ul"), P(t, this.cn("list")), t.setAttribute("role", "tablist");
                    const e = this.instance.container;
                    e.appendChild(t), P(e, this.cn("hasDots")), this.list = t;
                }
                return t;
            }
            refresh() {
                var t;
                const e = this.instance.pages.length, i = Math.min(2, this.option("minCount")), n = Math.max(2e3, this.option("maxCount")), s = this.option("dynamicFrom");
                if (e < i || e > n) return void this.cleanup();
                const a = "number" == typeof s && e > 5 && e >= s, r = !this.list || this.isDynamic !== a || this.list.children.length !== e;
                r && this.cleanup();
                const l = this.build();
                if (o(l, this.cn("isDynamic"), !!a), r) for (let t = 0; t < e; t++) l.append(this.createItem(t));
                let c, h = 0;
                for (const e of [ ...l.children ]) {
                    const i = h === this.instance.page;
                    i && (c = e), o(e, this.cn("isCurrent"), i), null === (t = e.children[0]) || void 0 === t || t.setAttribute("aria-selected", i ? "true" : "false");
                    for (const t of [ "isBeforePrev", "isPrev", "isNext", "isAfterNext" ]) S(e, this.cn(t));
                    h++;
                }
                if (c = c || l.firstChild, a && c) {
                    const t = c.previousElementSibling, e = t && t.previousElementSibling;
                    P(t, this.cn("isPrev")), P(e, this.cn("isBeforePrev"));
                    const i = c.nextElementSibling, n = i && i.nextElementSibling;
                    P(i, this.cn("isNext")), P(n, this.cn("isAfterNext"));
                }
                this.isDynamic = a;
            }
            createItem(t = 0) {
                var e;
                const i = document.createElement("li");
                i.setAttribute("role", "presentation");
                const s = n(this.instance.localize(this.option("dotTpl"), [ [ "%d", t + 1 ] ]).replace(/\%i/g, t + ""));
                return i.appendChild(s), null === (e = i.children[0]) || void 0 === e || e.setAttribute("role", "tab"), 
                i;
            }
            cleanup() {
                this.list && (this.list.remove(), this.list = null), this.isDynamic = !1, S(this.instance.container, this.cn("hasDots"));
            }
            attach() {
                this.instance.on([ "refresh", "change" ], this.onRefresh);
            }
            detach() {
                this.instance.off([ "refresh", "change" ], this.onRefresh), this.cleanup();
            }
        }
        Object.defineProperty(W, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: $
        });
        const X = "disabled", q = "next", Y = "prev";
        class V extends _ {
            constructor() {
                super(...arguments), Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "prev", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "next", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "isDom", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                });
            }
            onRefresh() {
                const t = this.instance, e = t.pages.length, i = t.page;
                if (e < 2) return void this.cleanup();
                this.build();
                let n = this.prev, s = this.next;
                n && s && (n.removeAttribute(X), s.removeAttribute(X), t.isInfinite || (i <= 0 && n.setAttribute(X, ""), 
                i >= e - 1 && s.setAttribute(X, "")));
            }
            addBtn(t) {
                var e;
                const i = this.instance, n = document.createElement("button");
                n.setAttribute("tabindex", "0"), n.setAttribute("title", i.localize(`{{${t.toUpperCase()}}}`)), 
                P(n, this.cn("button") + " " + this.cn(t === q ? "isNext" : "isPrev"));
                const s = i.isRTL ? t === q ? Y : q : t;
                var o;
                return n.innerHTML = i.localize(this.option(`${s}Tpl`)), n.dataset[`carousel${o = t, 
                o ? o.match("^[a-z]") ? o.charAt(0).toUpperCase() + o.substring(1) : o : ""}`] = "true", 
                null === (e = this.container) || void 0 === e || e.appendChild(n), n;
            }
            build() {
                const t = this.instance.container, e = this.cn("container");
                let {container: i, prev: n, next: s} = this;
                i || (i = t.querySelector("." + e), this.isDom = !!i), i || (i = document.createElement("div"), 
                P(i, e), t.appendChild(i)), this.container = i, s || (s = i.querySelector("[data-carousel-next]")), 
                s || (s = this.addBtn(q)), this.next = s, n || (n = i.querySelector("[data-carousel-prev]")), 
                n || (n = this.addBtn(Y)), this.prev = n;
            }
            cleanup() {
                this.isDom || (this.prev && this.prev.remove(), this.next && this.next.remove(), 
                this.container && this.container.remove()), this.prev = null, this.next = null, 
                this.container = null, this.isDom = !1;
            }
            attach() {
                this.instance.on([ "refresh", "change" ], this.onRefresh);
            }
            detach() {
                this.instance.off([ "refresh", "change" ], this.onRefresh), this.cleanup();
            }
        }
        Object.defineProperty(V, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                classes: {
                    container: "f-carousel__nav",
                    button: "f-button",
                    isNext: "is-next",
                    isPrev: "is-prev"
                },
                nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
                prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>'
            }
        });
        class Z extends _ {
            constructor() {
                super(...arguments), Object.defineProperty(this, "selectedIndex", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "target", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "nav", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                });
            }
            addAsTargetFor(t) {
                this.target = this.instance, this.nav = t, this.attachEvents();
            }
            addAsNavFor(t) {
                this.nav = this.instance, this.target = t, this.attachEvents();
            }
            attachEvents() {
                const {nav: t, target: e} = this;
                t && e && (t.options.initialSlide = e.options.initialPage, t.state === B.Ready ? this.onNavReady(t) : t.on("ready", this.onNavReady), 
                e.state === B.Ready ? this.onTargetReady(e) : e.on("ready", this.onTargetReady));
            }
            onNavReady(t) {
                t.on("createSlide", this.onNavCreateSlide), t.on("Panzoom.click", this.onNavClick), 
                t.on("Panzoom.touchEnd", this.onNavTouch), this.onTargetChange();
            }
            onTargetReady(t) {
                t.on("change", this.onTargetChange), t.on("Panzoom.refresh", this.onTargetChange), 
                this.onTargetChange();
            }
            onNavClick(t, e, i) {
                this.onNavTouch(t, t.panzoom, i);
            }
            onNavTouch(t, e, i) {
                var n, s;
                if (Math.abs(e.dragOffset.x) > 3 || Math.abs(e.dragOffset.y) > 3) return;
                const o = i.target, {nav: a, target: r} = this;
                if (!a || !r || !o) return;
                const l = o.closest("[data-index]");
                if (i.stopPropagation(), i.preventDefault(), !l) return;
                const c = parseInt(l.dataset.index || "", 10) || 0, h = r.getPageForSlide(c), d = a.getPageForSlide(c);
                a.slideTo(d), r.slideTo(h, {
                    friction: (null === (s = null === (n = this.nav) || void 0 === n ? void 0 : n.plugins) || void 0 === s ? void 0 : s.Sync.option("friction")) || 0
                }), this.markSelectedSlide(c);
            }
            onNavCreateSlide(t, e) {
                e.index === this.selectedIndex && this.markSelectedSlide(e.index);
            }
            onTargetChange() {
                var t, e;
                const {target: i, nav: n} = this;
                if (!i || !n) return;
                if (n.state !== B.Ready || i.state !== B.Ready) return;
                const s = null === (e = null === (t = i.pages[i.page]) || void 0 === t ? void 0 : t.slides[0]) || void 0 === e ? void 0 : e.index, o = n.getPageForSlide(s);
                this.markSelectedSlide(s), n.slideTo(o, null === n.prevPage && null === i.prevPage ? {
                    friction: 0
                } : void 0);
            }
            markSelectedSlide(t) {
                const e = this.nav;
                e && e.state === B.Ready && (this.selectedIndex = t, [ ...e.slides ].map((e => {
                    e.el && e.el.classList[e.index === t ? "add" : "remove"]("is-nav-selected");
                })));
            }
            attach() {
                const t = this;
                let e = t.options.target, i = t.options.nav;
                e ? t.addAsNavFor(e) : i && t.addAsTargetFor(i);
            }
            detach() {
                const t = this, e = t.nav, i = t.target;
                e && (e.off("ready", t.onNavReady), e.off("createSlide", t.onNavCreateSlide), e.off("Panzoom.click", t.onNavClick), 
                e.off("Panzoom.touchEnd", t.onNavTouch)), t.nav = null, i && (i.off("ready", t.onTargetReady), 
                i.off("refresh", t.onTargetChange), i.off("change", t.onTargetChange)), t.target = null;
            }
        }
        Object.defineProperty(Z, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                friction: .35
            }
        });
        const U = {
            Navigation: V,
            Dots: W,
            Sync: Z
        }, G = "animationend", K = "isSelected", J = "slide";
        class Q extends g {
            get axis() {
                return this.isHorizontal ? "e" : "f";
            }
            get isEnabled() {
                return this.state === B.Ready;
            }
            get isInfinite() {
                let t = !1;
                const {contentDim: e, viewportDim: i, pages: n, slides: s} = this, o = s[0];
                return n.length >= 2 && o && e + o.dim >= i && (t = this.option("infinite")), t;
            }
            get isRTL() {
                return "rtl" === this.option("direction");
            }
            get isHorizontal() {
                return "x" === this.option("axis");
            }
            constructor(t, e = {}, i = {}) {
                if (super(), Object.defineProperty(this, "bp", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: ""
                }), Object.defineProperty(this, "lp", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "userOptions", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {}
                }), Object.defineProperty(this, "userPlugins", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {}
                }), Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: B.Init
                }), Object.defineProperty(this, "page", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "prevPage", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "viewport", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "track", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "slides", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }), Object.defineProperty(this, "pages", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }), Object.defineProperty(this, "panzoom", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "inTransition", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new Set
                }), Object.defineProperty(this, "contentDim", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "viewportDim", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), "string" == typeof t && (t = document.querySelector(t)), !t || !E(t)) throw new Error("No Element found");
                this.container = t, this.slideNext = D(this.slideNext.bind(this), 150), this.slidePrev = D(this.slidePrev.bind(this), 150), 
                this.userOptions = e, this.userPlugins = i, queueMicrotask((() => {
                    this.processOptions();
                }));
            }
            processOptions() {
                var t, e;
                const i = u({}, Q.defaults, this.userOptions);
                let n = "";
                const s = i.breakpoints;
                if (s && d(s)) for (const [t, e] of Object.entries(s)) window.matchMedia(t).matches && d(e) && (n += t, 
                u(i, e));
                n === this.bp && this.state !== B.Init || (this.bp = n, this.state === B.Ready && (i.initialSlide = (null === (e = null === (t = this.pages[this.page]) || void 0 === t ? void 0 : t.slides[0]) || void 0 === e ? void 0 : e.index) || 0), 
                this.state !== B.Init && this.destroy(), super.setOptions(i), !1 === this.option("enabled") ? this.attachEvents() : setTimeout((() => {
                    this.init();
                }), 0));
            }
            init() {
                this.state = B.Init, this.emit("init"), this.attachPlugins(Object.assign(Object.assign({}, Q.Plugins), this.userPlugins)), 
                this.emit("attachPlugins"), this.initLayout(), this.initSlides(), this.updateMetrics(), 
                this.setInitialPosition(), this.initPanzoom(), this.attachEvents(), this.state = B.Ready, 
                this.emit("ready");
            }
            initLayout() {
                const {container: t} = this, e = this.option("classes");
                P(t, this.cn("container")), o(t, e.isLTR, !this.isRTL), o(t, e.isRTL, this.isRTL), 
                o(t, e.isVertical, !this.isHorizontal), o(t, e.isHorizontal, this.isHorizontal);
                let i = this.option("viewport") || t.querySelector(`.${e.viewport}`);
                i || (i = document.createElement("div"), P(i, e.viewport), i.append(...F(t, `.${e.slide}`)), 
                t.prepend(i)), i.addEventListener("scroll", this.onScroll);
                let n = this.option("track") || t.querySelector(`.${e.track}`);
                n || (n = document.createElement("div"), P(n, e.track), n.append(...Array.from(i.childNodes))), 
                n.setAttribute("aria-live", "polite"), i.contains(n) || i.prepend(n), this.viewport = i, 
                this.track = n, this.emit("initLayout");
            }
            initSlides() {
                const {track: t} = this;
                if (!t) return;
                const e = [ ...this.slides ], i = [];
                [ ...F(t, `.${this.cn(J)}`) ].forEach((t => {
                    if (E(t)) {
                        const e = H({
                            el: t,
                            isDom: !0,
                            index: this.slides.length
                        });
                        i.push(e);
                    }
                }));
                for (let t of [ ...this.option("slides", []) || [], ...e ]) i.push(H(t));
                this.slides = i;
                for (let t = 0; t < this.slides.length; t++) this.slides[t].index = t;
                for (const t of i) this.emit("beforeInitSlide", t, t.index), this.emit("initSlide", t, t.index);
                this.emit("initSlides");
            }
            setInitialPage() {
                const t = this.option("initialSlide");
                this.page = "number" == typeof t ? this.getPageForSlide(t) : parseInt(this.option("initialPage", 0) + "", 10) || 0;
            }
            setInitialPosition() {
                const {track: t, pages: e, isHorizontal: i} = this;
                if (!t || !e.length) return;
                let n = this.page;
                e[n] || (this.page = n = 0);
                const s = (e[n].pos || 0) * (this.isRTL && i ? 1 : -1), o = i ? `${s}px` : "0", a = i ? "0" : `${s}px`;
                t.style.transform = `translate3d(${o}, ${a}, 0) scale(1)`, this.option("adaptiveHeight") && this.setViewportHeight();
            }
            initPanzoom() {
                this.panzoom && (this.panzoom.destroy(), this.panzoom = null);
                const t = this.option("Panzoom") || {};
                this.panzoom = new I(this.viewport, u({}, {
                    content: this.track,
                    zoom: !1,
                    panOnlyZoomed: !1,
                    lockAxis: this.isHorizontal ? "x" : "y",
                    infinite: this.isInfinite,
                    click: !1,
                    dblClick: !1,
                    touch: t => !(this.pages.length < 2 && !t.options.infinite),
                    bounds: () => this.getBounds(),
                    maxVelocity: t => Math.abs(t.target[this.axis] - t.current[this.axis]) < 2 * this.viewportDim ? 100 : 0
                }, t)), this.panzoom.on("*", ((t, e, ...i) => {
                    this.emit(`Panzoom.${e}`, t, ...i);
                })), this.panzoom.on("decel", this.onDecel), this.panzoom.on("refresh", this.onRefresh), 
                this.panzoom.on("beforeTransform", this.onBeforeTransform), this.panzoom.on("endAnimation", this.onEndAnimation);
            }
            attachEvents() {
                const t = this.container;
                t && (t.addEventListener("click", this.onClick, {
                    passive: !1,
                    capture: !1
                }), t.addEventListener("slideTo", this.onSlideTo)), window.addEventListener("resize", this.onResize);
            }
            createPages() {
                let t = [];
                const {contentDim: e, viewportDim: i} = this;
                let n = this.option("slidesPerPage");
                n = ("auto" === n || e <= i) && !1 !== this.option("fill") ? 1 / 0 : parseFloat(n + "");
                let s = 0, o = 0, a = 0;
                for (const e of this.slides) (!t.length || o + e.dim - i > .05 || a >= n) && (t.push(N()), 
                s = t.length - 1, o = 0, a = 0), t[s].slides.push(e), o += e.dim + e.gap, a++;
                return t;
            }
            processPages() {
                const e = this.pages, {contentDim: i, viewportDim: n, isInfinite: s} = this, o = this.option("center"), a = this.option("fill"), r = a && o && i > n && !s;
                if (e.forEach(((t, e) => {
                    var s;
                    t.index = e, t.pos = (null === (s = t.slides[0]) || void 0 === s ? void 0 : s.pos) || 0, 
                    t.dim = 0;
                    for (const [e, i] of t.slides.entries()) t.dim += i.dim, e < t.slides.length - 1 && (t.dim += i.gap);
                    r && t.pos + .5 * t.dim < .5 * n ? t.pos = 0 : r && t.pos + .5 * t.dim >= i - .5 * n ? t.pos = i - n : o && (t.pos += -.5 * (n - t.dim));
                })), e.forEach((e => {
                    a && !s && i > n && (e.pos = Math.max(e.pos, 0), e.pos = Math.min(e.pos, i - n)), 
                    e.pos = t(e.pos, 1e3), e.dim = t(e.dim, 1e3), Math.abs(e.pos) <= .1 && (e.pos = 0);
                })), s) return e;
                const l = [];
                let c;
                return e.forEach((t => {
                    const e = Object.assign({}, t);
                    c && e.pos === c.pos ? (c.dim += e.dim, c.slides = [ ...c.slides, ...e.slides ]) : (e.index = l.length, 
                    c = e, l.push(e));
                })), l;
            }
            getPageFromIndex(t = 0) {
                const e = this.pages.length;
                let i;
                return t = parseInt((t || 0).toString()) || 0, i = this.isInfinite ? (t % e + e) % e : Math.max(Math.min(t, e - 1), 0), 
                i;
            }
            getSlideMetrics(e) {
                var i, n;
                const s = this.isHorizontal ? "width" : "height";
                let o = 0, a = 0, r = e.el;
                const l = !(!r || r.parentNode);
                if (r ? o = parseFloat(r.dataset[s] || "") || 0 : (r = document.createElement("div"), 
                r.style.visibility = "hidden", (this.track || document.body).prepend(r)), P(r, this.cn(J) + " " + e.class + " " + e.customClass), 
                o) r.style[s] = `${o}px`, r.style["width" === s ? "height" : "width"] = ""; else {
                    l && (this.track || document.body).prepend(r), o = r.getBoundingClientRect()[s] * Math.max(1, (null === (i = window.visualViewport) || void 0 === i ? void 0 : i.scale) || 1);
                    let t = r[this.isHorizontal ? "offsetWidth" : "offsetHeight"];
                    t - 1 > o && (o = t);
                }
                const c = getComputedStyle(r);
                return "content-box" === c.boxSizing && (this.isHorizontal ? (o += parseFloat(c.paddingLeft) || 0, 
                o += parseFloat(c.paddingRight) || 0) : (o += parseFloat(c.paddingTop) || 0, o += parseFloat(c.paddingBottom) || 0)), 
                a = parseFloat(c[this.isHorizontal ? "marginRight" : "marginBottom"]) || 0, l ? null === (n = r.parentElement) || void 0 === n || n.removeChild(r) : e.el || r.remove(), 
                {
                    dim: t(o, 1e3),
                    gap: t(a, 1e3)
                };
            }
            getBounds() {
                const {isInfinite: t, isRTL: e, isHorizontal: i, pages: n} = this;
                let s = {
                    min: 0,
                    max: 0
                };
                if (t) s = {
                    min: -1 / 0,
                    max: 1 / 0
                }; else if (n.length) {
                    const t = n[0].pos, o = n[n.length - 1].pos;
                    s = e && i ? {
                        min: t,
                        max: o
                    } : {
                        min: -1 * o,
                        max: -1 * t
                    };
                }
                return {
                    x: i ? s : {
                        min: 0,
                        max: 0
                    },
                    y: i ? {
                        min: 0,
                        max: 0
                    } : s
                };
            }
            repositionSlides() {
                let e, {isHorizontal: i, isRTL: n, isInfinite: s, viewport: o, viewportDim: a, contentDim: r, page: l, pages: c, slides: h, panzoom: d} = this, u = 0, p = 0, f = 0, g = 0;
                d ? g = -1 * d.current[this.axis] : c[l] && (g = c[l].pos || 0), e = i ? n ? "right" : "left" : "top", 
                n && i && (g *= -1);
                for (const i of h) {
                    const n = i.el;
                    n ? ("top" === e ? (n.style.right = "", n.style.left = "") : n.style.top = "", i.index !== u ? n.style[e] = 0 === p ? "" : `${t(p, 1e3)}px` : n.style[e] = "", 
                    f += i.dim + i.gap, u++) : p += i.dim + i.gap;
                }
                if (s && f && o) {
                    let n = getComputedStyle(o), s = "padding", l = i ? "Right" : "Bottom", c = parseFloat(n[s + (i ? "Left" : "Top")]);
                    g -= c, a += c, a += parseFloat(n[s + l]);
                    for (const i of h) i.el && (t(i.pos) < t(a) && t(i.pos + i.dim + i.gap) < t(g) && t(g) > t(r - a) && (i.el.style[e] = `${t(p + f, 1e3)}px`), 
                    t(i.pos + i.gap) >= t(r - a) && t(i.pos) > t(g + a) && t(g) < t(a) && (i.el.style[e] = `-${t(f, 1e3)}px`));
                }
                let m, v, b = [ ...this.inTransition ];
                if (b.length > 1 && (m = c[b[0]], v = c[b[1]]), m && v) {
                    let i = 0;
                    for (const n of h) n.el ? this.inTransition.has(n.index) && m.slides.indexOf(n) < 0 && (n.el.style[e] = `${t(i + (m.pos - v.pos), 1e3)}px`) : i += n.dim + n.gap;
                }
            }
            createSlideEl(t) {
                const {track: e, slides: i} = this;
                if (!e || !t) return;
                if (t.el && t.el.parentNode) return;
                const n = t.el || document.createElement("div");
                P(n, this.cn(J)), P(n, t.class), P(n, t.customClass);
                const s = t.html;
                s && (s instanceof HTMLElement ? n.appendChild(s) : n.innerHTML = t.html + "");
                const o = [];
                i.forEach(((t, e) => {
                    t.el && o.push(e);
                }));
                const a = t.index;
                let r = null;
                if (o.length) r = i[o.reduce(((t, e) => Math.abs(e - a) < Math.abs(t - a) ? e : t))];
                const l = r && r.el && r.el.parentNode ? r.index < t.index ? r.el.nextSibling : r.el : null;
                e.insertBefore(n, e.contains(l) ? l : null), t.el = n, this.emit("createSlide", t);
            }
            removeSlideEl(t, e = !1) {
                const i = null == t ? void 0 : t.el;
                if (!i || !i.parentNode) return;
                const n = this.cn(K);
                if (i.classList.contains(n) && (S(i, n), this.emit("unselectSlide", t)), t.isDom && !e) return i.removeAttribute("aria-hidden"), 
                i.removeAttribute("data-index"), void (i.style.left = "");
                this.emit("removeSlide", t);
                const s = new CustomEvent(G);
                i.dispatchEvent(s), t.el && (t.el.remove(), t.el = null);
            }
            transitionTo(t = 0, e = this.option("transition")) {
                var i, n, s, o;
                if (!e) return !1;
                const a = this.page, {pages: r, panzoom: l} = this;
                t = parseInt((t || 0).toString()) || 0;
                const c = this.getPageFromIndex(t);
                if (!l || !r[c] || r.length < 2 || Math.abs(((null === (n = null === (i = r[a]) || void 0 === i ? void 0 : i.slides[0]) || void 0 === n ? void 0 : n.dim) || 0) - this.viewportDim) > 1) return !1;
                let h = t > a ? 1 : -1;
                this.isInfinite && (0 === a && t === r.length - 1 && (h = -1), a === r.length - 1 && 0 === t && (h = 1));
                const d = r[c].pos * (this.isRTL ? 1 : -1);
                if (a === c && Math.abs(d - l.target[this.axis]) < 1) return !1;
                this.clearTransitions();
                const u = l.isResting;
                P(this.container, this.cn("inTransition"));
                const p = (null === (s = r[a]) || void 0 === s ? void 0 : s.slides[0]) || null, f = (null === (o = r[c]) || void 0 === o ? void 0 : o.slides[0]) || null;
                this.inTransition.add(f.index), this.createSlideEl(f);
                let g = p.el, m = f.el;
                u || e === J || (e = "fadeFast", g = null);
                const v = this.isRTL ? "next" : "prev", b = this.isRTL ? "prev" : "next";
                return g && (this.inTransition.add(p.index), p.transition = e, g.addEventListener(G, this.onAnimationEnd), 
                g.classList.add(`f-${e}Out`, `to-${h > 0 ? b : v}`)), m && (f.transition = e, m.addEventListener(G, this.onAnimationEnd), 
                m.classList.add(`f-${e}In`, `from-${h > 0 ? v : b}`)), l.current[this.axis] = d, 
                l.target[this.axis] = d, l.requestTick(), this.onChange(c), !0;
            }
            manageSlideVisiblity() {
                const t = new Set, e = new Set, i = this.getVisibleSlides(parseFloat(this.option("preload", 0) + "") || 0);
                for (const n of this.slides) i.has(n) ? t.add(n) : e.add(n);
                for (const e of this.inTransition) t.add(this.slides[e]);
                for (const e of t) this.createSlideEl(e), this.lazyLoadSlide(e);
                for (const i of e) t.has(i) || this.removeSlideEl(i);
                this.markSelectedSlides(), this.repositionSlides();
            }
            markSelectedSlides() {
                if (!this.pages[this.page] || !this.pages[this.page].slides) return;
                const t = "aria-hidden";
                let e = this.cn(K);
                if (e) for (const i of this.slides) {
                    const n = i.el;
                    n && (n.dataset.index = `${i.index}`, n.classList.contains("f-thumbs__slide") ? this.getVisibleSlides(0).has(i) ? n.removeAttribute(t) : n.setAttribute(t, "true") : this.pages[this.page].slides.includes(i) ? (n.classList.contains(e) || (P(n, e), 
                    this.emit("selectSlide", i)), n.removeAttribute(t)) : (n.classList.contains(e) && (S(n, e), 
                    this.emit("unselectSlide", i)), n.setAttribute(t, "true")));
                }
            }
            flipInfiniteTrack() {
                const {axis: t, isHorizontal: e, isInfinite: i, isRTL: n, viewportDim: s, contentDim: o} = this, a = this.panzoom;
                if (!a || !i) return;
                let r = a.current[t], l = a.target[t] - r, c = 0, h = .5 * s;
                n && e ? (r < -h && (c = -1, r += o), r > o - h && (c = 1, r -= o)) : (r > h && (c = 1, 
                r -= o), r < -o + h && (c = -1, r += o)), c && (a.current[t] = r, a.target[t] = r + l);
            }
            lazyLoadImg(t, e) {
                const i = this, s = "f-fadeIn", o = "is-preloading";
                let a = !1, r = null;
                const l = () => {
                    a || (a = !0, r && (r.remove(), r = null), S(e, o), e.complete && (P(e, s), setTimeout((() => {
                        S(e, s);
                    }), 350)), this.option("adaptiveHeight") && t.el && this.pages[this.page].slides.indexOf(t) > -1 && (i.updateMetrics(), 
                    i.setViewportHeight()), this.emit("load", t));
                };
                P(e, o), e.src = e.dataset.lazySrcset || e.dataset.lazySrc || "", delete e.dataset.lazySrc, 
                delete e.dataset.lazySrcset, e.addEventListener("error", (() => {
                    l();
                })), e.addEventListener("load", (() => {
                    l();
                })), setTimeout((() => {
                    const i = e.parentNode;
                    i && t.el && (e.complete ? l() : a || (r = n(x), i.insertBefore(r, e)));
                }), 300);
            }
            lazyLoadSlide(t) {
                const e = t && t.el;
                if (!e) return;
                const i = new Set;
                let n = Array.from(e.querySelectorAll("[data-lazy-src],[data-lazy-srcset]"));
                e.dataset.lazySrc && n.push(e), n.map((t => {
                    t instanceof HTMLImageElement ? i.add(t) : t instanceof HTMLElement && t.dataset.lazySrc && (t.style.backgroundImage = `url('${t.dataset.lazySrc}')`, 
                    delete t.dataset.lazySrc);
                }));
                for (const e of i) this.lazyLoadImg(t, e);
            }
            onAnimationEnd(t) {
                var e;
                const i = t.target, n = i ? parseInt(i.dataset.index || "", 10) || 0 : -1, s = this.slides[n], o = t.animationName;
                if (!i || !s || !o) return;
                const a = !!this.inTransition.has(n) && s.transition;
                a && o.substring(0, a.length + 2) === `f-${a}` && this.inTransition.delete(n), this.inTransition.size || this.clearTransitions(), 
                n === this.page && (null === (e = this.panzoom) || void 0 === e ? void 0 : e.isResting) && this.emit("settle");
            }
            onDecel(t, e = 0, i = 0, n = 0, s = 0) {
                if (this.option("dragFree")) return void this.setPageFromPosition();
                const {isRTL: o, isHorizontal: a, axis: r, pages: l} = this, c = l.length, h = Math.abs(Math.atan2(i, e) / (Math.PI / 180));
                let d = 0;
                if (d = h > 45 && h < 135 ? a ? 0 : i : a ? e : 0, !c) return;
                let u = this.page, p = o && a ? 1 : -1;
                const f = t.current[r] * p;
                let {pageIndex: g} = this.getPageFromPosition(f);
                Math.abs(d) > 5 ? (l[u].dim < document.documentElement["client" + (this.isHorizontal ? "Width" : "Height")] - 1 && (u = g), 
                u = o && a ? d < 0 ? u - 1 : u + 1 : d < 0 ? u + 1 : u - 1) : u = 0 === n && 0 === s ? u : g, 
                this.slideTo(u, {
                    transition: !1,
                    friction: t.option("decelFriction")
                });
            }
            onClick(t) {
                const e = t.target, i = e && E(e) ? e.dataset : null;
                let n, s;
                i && (void 0 !== i.carouselPage ? (s = "slideTo", n = i.carouselPage) : void 0 !== i.carouselNext ? s = "slideNext" : void 0 !== i.carouselPrev && (s = "slidePrev")), 
                s ? (t.preventDefault(), t.stopPropagation(), e && !e.hasAttribute("disabled") && this[s](n)) : this.emit("click", t);
            }
            onSlideTo(t) {
                const e = t.detail || 0;
                this.slideTo(this.getPageForSlide(e), {
                    friction: 0
                });
            }
            onChange(t, e = 0) {
                const i = this.page;
                this.prevPage = i, this.page = t, this.option("adaptiveHeight") && this.setViewportHeight(), 
                t !== i && (this.markSelectedSlides(), this.emit("change", t, i, e));
            }
            onRefresh() {
                let t = this.contentDim, e = this.viewportDim;
                this.updateMetrics(), this.contentDim === t && this.viewportDim === e || this.slideTo(this.page, {
                    friction: 0,
                    transition: !1
                });
            }
            onScroll() {
                var t;
                null === (t = this.viewport) || void 0 === t || t.scroll(0, 0);
            }
            onResize() {
                this.option("breakpoints") && this.processOptions();
            }
            onBeforeTransform(t) {
                this.lp !== t.current[this.axis] && (this.flipInfiniteTrack(), this.manageSlideVisiblity()), 
                this.lp = t.current.e;
            }
            onEndAnimation() {
                this.inTransition.size || this.emit("settle");
            }
            reInit(t = null, e = null) {
                this.destroy(), this.state = B.Init, this.prevPage = null, this.userOptions = t || this.userOptions, 
                this.userPlugins = e || this.userPlugins, this.processOptions();
            }
            slideTo(t = 0, {friction: e = this.option("friction"), transition: i = this.option("transition")} = {}) {
                if (this.state === B.Destroy) return;
                t = parseInt((t || 0).toString()) || 0;
                const n = this.getPageFromIndex(t), {axis: s, isHorizontal: o, isRTL: a, pages: r, panzoom: l} = this, c = r.length, h = a && o ? 1 : -1;
                if (!l || !c) return;
                if (this.page !== n) {
                    const e = new Event("beforeChange", {
                        bubbles: !0,
                        cancelable: !0
                    });
                    if (this.emit("beforeChange", e, t), e.defaultPrevented) return;
                }
                if (this.transitionTo(t, i)) return;
                let d = r[n].pos;
                if (this.isInfinite) {
                    const e = this.contentDim, i = l.target[s] * h;
                    if (2 === c) d += e * Math.floor(parseFloat(t + "") / 2); else d = [ d, d - e, d + e ].reduce((function(t, e) {
                        return Math.abs(e - i) < Math.abs(t - i) ? e : t;
                    }));
                }
                d *= h, Math.abs(l.target[s] - d) < 1 || (l.panTo({
                    x: o ? d : 0,
                    y: o ? 0 : d,
                    friction: e
                }), this.onChange(n));
            }
            slideToClosest(t) {
                if (this.panzoom) {
                    const {pageIndex: e} = this.getPageFromPosition();
                    this.slideTo(e, t);
                }
            }
            slideNext() {
                this.slideTo(this.page + 1);
            }
            slidePrev() {
                this.slideTo(this.page - 1);
            }
            clearTransitions() {
                this.inTransition.clear(), S(this.container, this.cn("inTransition"));
                const t = [ "to-prev", "to-next", "from-prev", "from-next" ];
                for (const e of this.slides) {
                    const i = e.el;
                    if (i) {
                        i.removeEventListener(G, this.onAnimationEnd), i.classList.remove(...t);
                        const n = e.transition;
                        n && i.classList.remove(`f-${n}Out`, `f-${n}In`);
                    }
                }
                this.manageSlideVisiblity();
            }
            addSlide(t, e) {
                var i, n, s, o;
                const a = this.panzoom, r = (null === (i = this.pages[this.page]) || void 0 === i ? void 0 : i.pos) || 0, l = (null === (n = this.pages[this.page]) || void 0 === n ? void 0 : n.dim) || 0, c = this.contentDim < this.viewportDim;
                let h = Array.isArray(e) ? e : [ e ];
                const d = [];
                for (const t of h) d.push(H(t));
                this.slides.splice(t, 0, ...d);
                for (let t = 0; t < this.slides.length; t++) this.slides[t].index = t;
                for (const t of d) this.emit("beforeInitSlide", t, t.index);
                if (this.page >= t && (this.page += d.length), this.updateMetrics(), a) {
                    const e = (null === (s = this.pages[this.page]) || void 0 === s ? void 0 : s.pos) || 0, i = (null === (o = this.pages[this.page]) || void 0 === o ? void 0 : o.dim) || 0, n = this.pages.length || 1, h = this.isRTL ? l - i : i - l, d = this.isRTL ? r - e : e - r;
                    c && 1 === n ? (t <= this.page && (a.current[this.axis] -= h, a.target[this.axis] -= h), 
                    a.panTo({
                        [this.isHorizontal ? "x" : "y"]: -1 * e
                    })) : d && t <= this.page && (a.target[this.axis] -= d, a.current[this.axis] -= d, 
                    a.requestTick());
                }
                for (const t of d) this.emit("initSlide", t, t.index);
            }
            prependSlide(t) {
                this.addSlide(0, t);
            }
            appendSlide(t) {
                this.addSlide(this.slides.length, t);
            }
            removeSlide(t) {
                const e = this.slides.length;
                t = (t % e + e) % e;
                const i = this.slides[t];
                if (i) {
                    this.removeSlideEl(i, !0), this.slides.splice(t, 1);
                    for (let t = 0; t < this.slides.length; t++) this.slides[t].index = t;
                    this.updateMetrics(), this.slideTo(this.page, {
                        friction: 0,
                        transition: !1
                    }), this.emit("destroySlide", i);
                }
            }
            updateMetrics() {
                const {panzoom: e, viewport: i, track: n, slides: s, isHorizontal: o, isInfinite: a} = this;
                if (!n) return;
                const r = o ? "width" : "height", l = o ? "offsetWidth" : "offsetHeight";
                if (i) {
                    let e = Math.max(i[l], t(i.getBoundingClientRect()[r], 1e3)), n = getComputedStyle(i), s = "padding", a = o ? "Right" : "Bottom";
                    e -= parseFloat(n[s + (o ? "Left" : "Top")]) + parseFloat(n[s + a]), this.viewportDim = e;
                }
                let c, h = 0;
                for (const [e, i] of s.entries()) {
                    let n = 0, o = 0;
                    !i.el && c ? (n = c.dim, o = c.gap) : (({dim: n, gap: o} = this.getSlideMetrics(i)), 
                    c = i), n = t(n, 1e3), o = t(o, 1e3), i.dim = n, i.gap = o, i.pos = h, h += n, (a || e < s.length - 1) && (h += o);
                }
                h = t(h, 1e3), this.contentDim = h, e && (e.contentRect[r] = h, e.contentRect[o ? "fullWidth" : "fullHeight"] = h), 
                this.pages = this.createPages(), this.pages = this.processPages(), this.state === B.Init && this.setInitialPage(), 
                this.page = Math.max(0, Math.min(this.page, this.pages.length - 1)), this.manageSlideVisiblity(), 
                this.emit("refresh");
            }
            getProgress(e, i = !1, n = !1) {
                void 0 === e && (e = this.page);
                const s = this, o = s.panzoom, a = s.contentDim, r = s.pages[e] || 0;
                if (!r || !o) return e > this.page ? -1 : 1;
                let l = -1 * o.current.e, c = t((l - r.pos) / (1 * r.dim), 1e3), h = c, d = c;
                this.isInfinite && !0 !== n && (h = t((l - r.pos + a) / (1 * r.dim), 1e3), d = t((l - r.pos - a) / (1 * r.dim), 1e3));
                let u = [ c, h, d ].reduce((function(t, e) {
                    return Math.abs(e) < Math.abs(t) ? e : t;
                }));
                return i ? u : u > 1 ? 1 : u < -1 ? -1 : u;
            }
            setViewportHeight() {
                const {page: t, pages: e, viewport: i, isHorizontal: n} = this;
                if (!i || !e[t]) return;
                let s = 0;
                n && this.track && (this.track.style.height = "auto", e[t].slides.forEach((t => {
                    t.el && (s = Math.max(s, t.el.offsetHeight));
                }))), i.style.height = s ? `${s}px` : "";
            }
            getPageForSlide(t) {
                for (const e of this.pages) for (const i of e.slides) if (i.index === t) return e.index;
                return -1;
            }
            getVisibleSlides(t = 0) {
                var e;
                const i = new Set;
                let {panzoom: n, contentDim: s, viewportDim: o, pages: a, page: r} = this;
                if (o) {
                    s = s + (null === (e = this.slides[this.slides.length - 1]) || void 0 === e ? void 0 : e.gap) || 0;
                    let l = 0;
                    l = n && n.state !== m.Init && n.state !== m.Destroy ? -1 * n.current[this.axis] : a[r] && a[r].pos || 0, 
                    this.isInfinite && (l -= Math.floor(l / s) * s), this.isRTL && this.isHorizontal && (l *= -1);
                    const c = l - o * t, h = l + o * (t + 1), d = this.isInfinite ? [ -1, 0, 1 ] : [ 0 ];
                    for (const t of this.slides) for (const e of d) {
                        const n = t.pos + e * s, o = n + t.dim + t.gap;
                        n < h && o > c && i.add(t);
                    }
                }
                return i;
            }
            getPageFromPosition(t) {
                const {viewportDim: e, contentDim: i, slides: n, pages: s, panzoom: o} = this, a = s.length, r = n.length, l = n[0], c = n[r - 1], h = this.option("center");
                let d = 0, u = 0, p = 0, f = void 0 === t ? -1 * ((null == o ? void 0 : o.target[this.axis]) || 0) : t;
                h && (f += .5 * e), this.isInfinite ? (f < l.pos - .5 * c.gap && (f -= i, p = -1), 
                f > c.pos + c.dim + .5 * c.gap && (f -= i, p = 1)) : f = Math.max(l.pos || 0, Math.min(f, c.pos));
                let g = c, m = n.find((t => {
                    const e = t.pos - .5 * g.gap, i = t.pos + t.dim + .5 * t.gap;
                    return g = t, f >= e && f < i;
                }));
                return m || (m = c), u = this.getPageForSlide(m.index), d = u + p * a, {
                    page: d,
                    pageIndex: u
                };
            }
            setPageFromPosition() {
                const {pageIndex: t} = this.getPageFromPosition();
                this.onChange(t);
            }
            destroy() {
                if ([ B.Destroy ].includes(this.state)) return;
                this.state = B.Destroy;
                const {container: t, viewport: e, track: i, slides: n, panzoom: s} = this, o = this.option("classes");
                t.removeEventListener("click", this.onClick, {
                    passive: !1,
                    capture: !1
                }), t.removeEventListener("slideTo", this.onSlideTo), window.removeEventListener("resize", this.onResize), 
                s && (s.destroy(), this.panzoom = null), n && n.forEach((t => {
                    this.removeSlideEl(t);
                })), this.detachPlugins(), e && (e.removeEventListener("scroll", this.onScroll), 
                e.offsetParent && i && i.offsetParent && e.replaceWith(...i.childNodes));
                for (const [e, i] of Object.entries(o)) "container" !== e && i && t.classList.remove(i);
                this.track = null, this.viewport = null, this.page = 0, this.slides = [];
                const a = this.events.get("ready");
                this.events = new Map, a && this.events.set("ready", a);
            }
        }
        Object.defineProperty(Q, "Panzoom", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: I
        }), Object.defineProperty(Q, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: j
        }), Object.defineProperty(Q, "Plugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: U
        });
        const tt = function(t) {
            if (!E(t)) return 0;
            const e = window.scrollY, i = window.innerHeight, n = e + i, s = t.getBoundingClientRect(), o = s.y + e, a = s.height, r = o + a;
            if (e > r || n < o) return 0;
            if (e < o && n > r) return 100;
            if (o < e && r > n) return 100;
            let l = a;
            o < e && (l -= e - o), r > n && (l -= r - n);
            const c = l / i * 100;
            return Math.round(c);
        }, et = !("undefined" == typeof window || !window.document || !window.document.createElement);
        let it;
        const nt = [ "a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])' ].join(","), st = t => {
            if (t && et) {
                void 0 === it && document.createElement("div").focus({
                    get preventScroll() {
                        return it = !0, !1;
                    }
                });
                try {
                    if (it) t.focus({
                        preventScroll: !0
                    }); else {
                        const e = window.scrollY || document.body.scrollTop, i = window.scrollX || document.body.scrollLeft;
                        t.focus(), document.body.scrollTo({
                            top: e,
                            left: i,
                            behavior: "auto"
                        });
                    }
                } catch (t) {}
            }
        }, ot = () => {
            const t = document;
            let e, i = "", n = "", s = "";
            return t.fullscreenEnabled ? (i = "requestFullscreen", n = "exitFullscreen", s = "fullscreenElement") : t.webkitFullscreenEnabled && (i = "webkitRequestFullscreen", 
            n = "webkitExitFullscreen", s = "webkitFullscreenElement"), i && (e = {
                request: function(e = t.documentElement) {
                    return "webkitRequestFullscreen" === i ? e[i](Element.ALLOW_KEYBOARD_INPUT) : e[i]();
                },
                exit: function() {
                    return t[s] && t[n]();
                },
                isFullscreen: function() {
                    return t[s];
                }
            }), e;
        }, at = {
            animated: !0,
            autoFocus: !0,
            backdropClick: "close",
            Carousel: {
                classes: {
                    container: "fancybox__carousel",
                    viewport: "fancybox__viewport",
                    track: "fancybox__track",
                    slide: "fancybox__slide"
                }
            },
            closeButton: "auto",
            closeExisting: !1,
            commonCaption: !1,
            compact: () => window.matchMedia("(max-width: 578px), (max-height: 578px)").matches,
            contentClick: "toggleZoom",
            contentDblClick: !1,
            defaultType: "image",
            defaultDisplay: "flex",
            dragToClose: !0,
            Fullscreen: {
                autoStart: !1
            },
            groupAll: !1,
            groupAttr: "data-fancybox",
            hideClass: "f-fadeOut",
            hideScrollbar: !0,
            idle: 3500,
            keyboard: {
                Escape: "close",
                Delete: "close",
                Backspace: "close",
                PageUp: "next",
                PageDown: "prev",
                ArrowUp: "prev",
                ArrowDown: "next",
                ArrowRight: "next",
                ArrowLeft: "prev"
            },
            l10n: Object.assign(Object.assign({}, b), {
                CLOSE: "Close",
                NEXT: "Next",
                PREV: "Previous",
                MODAL: "You can close this modal content with the ESC key",
                ERROR: "Something Went Wrong, Please Try Again Later",
                IMAGE_ERROR: "Image Not Found",
                ELEMENT_NOT_FOUND: "HTML Element Not Found",
                AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
                AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
                IFRAME_ERROR: "Error Loading Page",
                TOGGLE_ZOOM: "Toggle zoom level",
                TOGGLE_THUMBS: "Toggle thumbnails",
                TOGGLE_SLIDESHOW: "Toggle slideshow",
                TOGGLE_FULLSCREEN: "Toggle full-screen mode",
                DOWNLOAD: "Download"
            }),
            parentEl: null,
            placeFocusBack: !0,
            showClass: "f-zoomInUp",
            startIndex: 0,
            tpl: {
                closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',
                main: '<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>'
            },
            trapFocus: !0,
            wheel: "zoom"
        };
        var rt, lt;
        !function(t) {
            t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Closing = 2] = "Closing", 
            t[t.CustomClosing = 3] = "CustomClosing", t[t.Destroy = 4] = "Destroy";
        }(rt || (rt = {})), function(t) {
            t[t.Loading = 0] = "Loading", t[t.Opening = 1] = "Opening", t[t.Ready = 2] = "Ready", 
            t[t.Closing = 3] = "Closing";
        }(lt || (lt = {}));
        let ct = "", ht = !1, dt = !1, ut = null;
        const pt = () => {
            let t = "", e = "";
            const i = Oe.getInstance();
            if (i) {
                const n = i.carousel, s = i.getSlide();
                if (n && s) {
                    let o = s.slug || void 0, a = s.triggerEl || void 0;
                    e = o || i.option("slug") || "", !e && a && a.dataset && (e = a.dataset.fancybox || ""), 
                    e && "true" !== e && (t = "#" + e + (!o && n.slides.length > 1 ? "-" + (s.index + 1) : ""));
                }
            }
            return {
                hash: t,
                slug: e,
                index: 1
            };
        }, ft = () => {
            const t = new URL(document.URL).hash, e = t.slice(1).split("-"), i = e[e.length - 1], n = i && /^\+?\d+$/.test(i) && parseInt(e.pop() || "1", 10) || 1;
            return {
                hash: t,
                slug: e.join("-"),
                index: n
            };
        }, gt = () => {
            const {slug: t, index: e} = ft();
            if (!t) return;
            let i = document.querySelector(`[data-slug="${t}"]`);
            if (i && i.dispatchEvent(new CustomEvent("click", {
                bubbles: !0,
                cancelable: !0
            })), Oe.getInstance()) return;
            const n = document.querySelectorAll(`[data-fancybox="${t}"]`);
            n.length && (i = n[e - 1], i && i.dispatchEvent(new CustomEvent("click", {
                bubbles: !0,
                cancelable: !0
            })));
        }, mt = () => {
            if (!1 === Oe.defaults.Hash) return;
            const t = Oe.getInstance();
            if (!1 === (null == t ? void 0 : t.options.Hash)) return;
            const {slug: e, index: i} = ft(), {slug: n} = pt();
            t && (e === n ? t.jumpTo(i - 1) : (ht = !0, t.close())), gt();
        }, vt = () => {
            ut && clearTimeout(ut), queueMicrotask((() => {
                mt();
            }));
        }, bt = () => {
            window.addEventListener("hashchange", vt, !1), setTimeout((() => {
                mt();
            }), 500);
        };
        et && (/complete|interactive|loaded/.test(document.readyState) ? bt() : document.addEventListener("DOMContentLoaded", bt));
        const yt = "is-zooming-in";
        class wt extends _ {
            onCreateSlide(t, e, i) {
                const n = this.instance.optionFor(i, "src") || "";
                i.el && "image" === i.type && "string" == typeof n && this.setImage(i, n);
            }
            onRemoveSlide(t, e, i) {
                i.panzoom && i.panzoom.destroy(), i.panzoom = void 0, i.imageEl = void 0;
            }
            onChange(t, e, i, n) {
                S(this.instance.container, yt);
                for (const t of e.slides) {
                    const e = t.panzoom;
                    e && t.index !== i && e.reset(.35);
                }
            }
            onClose() {
                var t;
                const e = this.instance, i = e.container, n = e.getSlide();
                if (!i || !i.parentElement || !n) return;
                const {el: s, contentEl: o, panzoom: a, thumbElSrc: r} = n;
                if (!s || !r || !o || !a || a.isContentLoading || a.state === m.Init || a.state === m.Destroy) return;
                a.updateMetrics();
                let l = this.getZoomInfo(n);
                if (!l) return;
                this.instance.state = rt.CustomClosing, i.classList.remove(yt), i.classList.add("is-zooming-out"), 
                o.style.backgroundImage = `url('${r}')`;
                const c = i.getBoundingClientRect();
                1 === ((null === (t = window.visualViewport) || void 0 === t ? void 0 : t.scale) || 1) && Object.assign(i.style, {
                    position: "absolute",
                    top: `${i.offsetTop + window.scrollY}px`,
                    left: `${i.offsetLeft + window.scrollX}px`,
                    bottom: "auto",
                    right: "auto",
                    width: `${c.width}px`,
                    height: `${c.height}px`,
                    overflow: "hidden"
                });
                const {x: h, y: d, scale: u, opacity: p} = l;
                if (p) {
                    const t = ((t, e, i, n) => {
                        const s = e - t, o = n - i;
                        return e => i + ((e - t) / s * o || 0);
                    })(a.scale, u, 1, 0);
                    a.on("afterTransform", (() => {
                        o.style.opacity = t(a.scale) + "";
                    }));
                }
                a.on("endAnimation", (() => {
                    e.destroy();
                })), a.target.a = u, a.target.b = 0, a.target.c = 0, a.target.d = u, a.panTo({
                    x: h,
                    y: d,
                    scale: u,
                    friction: p ? .2 : .33,
                    ignoreBounds: !0
                }), a.isResting && e.destroy();
            }
            setImage(t, e) {
                const i = this.instance;
                t.src = e, this.process(t, e).then((e => {
                    const {contentEl: n, imageEl: s, thumbElSrc: o, el: a} = t;
                    if (i.isClosing() || !n || !s) return;
                    n.offsetHeight;
                    const r = !!i.isOpeningSlide(t) && this.getZoomInfo(t);
                    if (this.option("protected") && a) {
                        a.addEventListener("contextmenu", (t => {
                            t.preventDefault();
                        }));
                        const t = document.createElement("div");
                        P(t, "fancybox-protected"), n.appendChild(t);
                    }
                    if (o && r) {
                        const s = e.contentRect, a = Math.max(s.fullWidth, s.fullHeight);
                        let c = null;
                        !r.opacity && a > 1200 && (c = document.createElement("img"), P(c, "fancybox-ghost"), 
                        c.src = o, n.appendChild(c));
                        const h = () => {
                            c && (P(c, "f-fadeFastOut"), setTimeout((() => {
                                c && (c.remove(), c = null);
                            }), 200));
                        };
                        (l = o, new Promise(((t, e) => {
                            const i = new Image;
                            i.onload = t, i.onerror = e, i.src = l;
                        }))).then((() => {
                            i.hideLoading(t), t.state = lt.Opening, this.instance.emit("reveal", t), this.zoomIn(t).then((() => {
                                h(), this.instance.done(t);
                            }), (() => {})), c && setTimeout((() => {
                                h();
                            }), a > 2500 ? 800 : 200);
                        }), (() => {
                            i.hideLoading(t), i.revealContent(t);
                        }));
                    } else {
                        const n = this.optionFor(t, "initialSize"), s = this.optionFor(t, "zoom"), o = {
                            event: i.prevMouseMoveEvent || i.options.event,
                            friction: s ? .12 : 0
                        };
                        let a = i.optionFor(t, "showClass") || void 0, r = !0;
                        i.isOpeningSlide(t) && ("full" === n ? e.zoomToFull(o) : "cover" === n ? e.zoomToCover(o) : "max" === n ? e.zoomToMax(o) : r = !1, 
                        e.stop("current")), r && a && (a = e.isDragging ? "f-fadeIn" : ""), i.hideLoading(t), 
                        i.revealContent(t, a);
                    }
                    var l;
                }), (() => {
                    i.setError(t, "{{IMAGE_ERROR}}");
                }));
            }
            process(t, e) {
                return new Promise(((i, s) => {
                    var o;
                    const a = this.instance, r = t.el;
                    a.clearContent(t), a.showLoading(t);
                    let l = this.optionFor(t, "content");
                    if ("string" == typeof l && (l = n(l)), !l || !E(l)) {
                        if (l = document.createElement("img"), l instanceof HTMLImageElement) {
                            let i = "", n = t.caption;
                            i = "string" == typeof n && n ? n.replace(/<[^>]+>/gi, "").substring(0, 1e3) : `Image ${t.index + 1} of ${(null === (o = a.carousel) || void 0 === o ? void 0 : o.pages.length) || 1}`, 
                            l.src = e || "", l.alt = i, l.draggable = !1, t.srcset && l.setAttribute("srcset", t.srcset), 
                            this.instance.isOpeningSlide(t) && (l.fetchPriority = "high");
                        }
                        t.sizes && l.setAttribute("sizes", t.sizes);
                    }
                    P(l, "fancybox-image"), t.imageEl = l, a.setContent(t, l, !1);
                    t.panzoom = new I(r, u({
                        transformParent: !0
                    }, this.option("Panzoom") || {}, {
                        content: l,
                        width: (e, i) => a.optionFor(t, "width", "auto", i) || "auto",
                        height: (e, i) => a.optionFor(t, "height", "auto", i) || "auto",
                        wheel: () => {
                            const t = a.option("wheel");
                            return ("zoom" === t || "pan" == t) && t;
                        },
                        click: (e, i) => {
                            var n, s;
                            if (a.isCompact || a.isClosing()) return !1;
                            if (t.index !== (null === (n = a.getSlide()) || void 0 === n ? void 0 : n.index)) return !1;
                            if (i) {
                                const t = i.composedPath()[0];
                                if ([ "A", "BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO" ].includes(t.nodeName)) return !1;
                            }
                            let o = !i || i.target && (null === (s = t.contentEl) || void 0 === s ? void 0 : s.contains(i.target));
                            return a.option(o ? "contentClick" : "backdropClick") || !1;
                        },
                        dblClick: () => a.isCompact ? "toggleZoom" : a.option("contentDblClick") || !1,
                        spinner: !1,
                        panOnlyZoomed: !0,
                        wheelLimit: 1 / 0,
                        on: {
                            ready: t => {
                                i(t);
                            },
                            error: () => {
                                s();
                            },
                            destroy: () => {
                                s();
                            }
                        }
                    }));
                }));
            }
            zoomIn(t) {
                return new Promise(((e, i) => {
                    const n = this.instance, s = n.container, {panzoom: o, contentEl: a, el: r} = t;
                    o && o.updateMetrics();
                    const l = this.getZoomInfo(t);
                    if (!(l && r && a && o && s)) return void i();
                    const {x: c, y: h, scale: d, opacity: u} = l, p = () => {
                        t.state !== lt.Closing && (u && (a.style.opacity = Math.max(Math.min(1, 1 - (1 - o.scale) / (1 - d)), 0) + ""), 
                        o.scale >= 1 && o.scale > o.targetScale - .1 && e(o));
                    }, f = t => {
                        (t.scale < .99 || t.scale > 1.01) && !t.isDragging || (S(s, yt), a.style.opacity = "", 
                        t.off("endAnimation", f), t.off("touchStart", f), t.off("afterTransform", p), e(t));
                    };
                    o.on("endAnimation", f), o.on("touchStart", f), o.on("afterTransform", p), o.on([ "error", "destroy" ], (() => {
                        i();
                    })), o.panTo({
                        x: c,
                        y: h,
                        scale: d,
                        friction: 0,
                        ignoreBounds: !0
                    }), o.stop("current");
                    const g = {
                        event: "mousemove" === o.panMode ? n.prevMouseMoveEvent || n.options.event : void 0
                    }, m = this.optionFor(t, "initialSize");
                    P(s, yt), n.hideLoading(t), "full" === m ? o.zoomToFull(g) : "cover" === m ? o.zoomToCover(g) : "max" === m ? o.zoomToMax(g) : o.reset(.172);
                }));
            }
            getZoomInfo(t) {
                const {el: e, imageEl: i, thumbEl: n, panzoom: s} = t, o = this.instance, a = o.container;
                if (!e || !i || !n || !s || tt(n) < 3 || !this.optionFor(t, "zoom") || !a || o.state === rt.Destroy) return !1;
                if ("0" === getComputedStyle(a).getPropertyValue("--f-images-zoom")) return !1;
                const r = window.visualViewport || null;
                if (1 !== (r ? r.scale : 1)) return !1;
                let {top: l, left: c, width: h, height: d} = n.getBoundingClientRect(), {top: u, left: p, fitWidth: f, fitHeight: g} = s.contentRect;
                if (!(h && d && f && g)) return !1;
                const m = s.container.getBoundingClientRect();
                p += m.left, u += m.top;
                const v = -1 * (p + .5 * f - (c + .5 * h)), b = -1 * (u + .5 * g - (l + .5 * d)), y = h / f;
                let w = this.option("zoomOpacity") || !1;
                return "auto" === w && (w = Math.abs(h / d - f / g) > .1), {
                    x: v,
                    y: b,
                    scale: y,
                    opacity: w
                };
            }
            attach() {
                const t = this, e = t.instance;
                e.on("Carousel.change", t.onChange), e.on("Carousel.createSlide", t.onCreateSlide), 
                e.on("Carousel.removeSlide", t.onRemoveSlide), e.on("close", t.onClose);
            }
            detach() {
                const t = this, e = t.instance;
                e.off("Carousel.change", t.onChange), e.off("Carousel.createSlide", t.onCreateSlide), 
                e.off("Carousel.removeSlide", t.onRemoveSlide), e.off("close", t.onClose);
            }
        }
        Object.defineProperty(wt, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                initialSize: "fit",
                Panzoom: {
                    maxScale: 1
                },
                protected: !1,
                zoom: !0,
                zoomOpacity: "auto"
            }
        }), "function" == typeof SuppressedError && SuppressedError;
        const xt = "html", Et = "image", St = "map", Pt = "youtube", Ct = "vimeo", Tt = "html5video", Mt = (t, e = {}) => {
            const i = new URL(t), n = new URLSearchParams(i.search), s = new URLSearchParams;
            for (const [t, i] of [ ...n, ...Object.entries(e) ]) {
                let e = i + "";
                if ("t" === t) {
                    let t = e.match(/((\d*)m)?(\d*)s?/);
                    t && s.set("start", 60 * parseInt(t[2] || "0") + parseInt(t[3] || "0") + "");
                } else s.set(t, e);
            }
            let o = s + "", a = t.match(/#t=((.*)?\d+s)/);
            return a && (o += `#t=${a[1]}`), o;
        }, Ot = {
            ajax: null,
            autoSize: !0,
            iframeAttr: {
                allow: "autoplay; fullscreen",
                scrolling: "auto"
            },
            preload: !0,
            videoAutoplay: !0,
            videoRatio: 16 / 9,
            videoTpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
            videoFormat: "",
            vimeo: {
                byline: 1,
                color: "00adef",
                controls: 1,
                dnt: 1,
                muted: 0
            },
            youtube: {
                controls: 1,
                enablejsapi: 1,
                nocookie: 1,
                rel: 0,
                fs: 1
            }
        }, At = [ "image", "html", "ajax", "inline", "clone", "iframe", "map", "pdf", "html5video", "youtube", "vimeo" ];
        class Lt extends _ {
            onBeforeInitSlide(t, e, i) {
                this.processType(i);
            }
            onCreateSlide(t, e, i) {
                this.setContent(i);
            }
            onClearContent(t, e) {
                e.xhr && (e.xhr.abort(), e.xhr = null);
                const i = e.iframeEl;
                i && (i.onload = i.onerror = null, i.src = "//about:blank", e.iframeEl = null);
                const n = e.contentEl, s = e.placeholderEl;
                if ("inline" === e.type && n && s) n.classList.remove("fancybox__content"), "none" !== getComputedStyle(n).getPropertyValue("display") && (n.style.display = "none"), 
                setTimeout((() => {
                    s && (n && s.parentNode && s.parentNode.insertBefore(n, s), s.remove());
                }), 0), e.contentEl = void 0, e.placeholderEl = void 0; else for (;e.el && e.el.firstChild; ) e.el.removeChild(e.el.firstChild);
            }
            onSelectSlide(t, e, i) {
                i.state === lt.Ready && this.playVideo();
            }
            onUnselectSlide(t, e, i) {
                var n, s;
                if (i.type === Tt) {
                    try {
                        null === (s = null === (n = i.el) || void 0 === n ? void 0 : n.querySelector("video")) || void 0 === s || s.pause();
                    } catch (t) {}
                    return;
                }
                let o;
                i.type === Ct ? o = {
                    method: "pause",
                    value: "true"
                } : i.type === Pt && (o = {
                    event: "command",
                    func: "pauseVideo"
                }), o && i.iframeEl && i.iframeEl.contentWindow && i.iframeEl.contentWindow.postMessage(JSON.stringify(o), "*"), 
                i.poller && clearTimeout(i.poller);
            }
            onDone(t, e) {
                t.isCurrentSlide(e) && !t.isClosing() && this.playVideo();
            }
            onRefresh(t, e) {
                e.slides.forEach((t => {
                    t.el && (this.resizeIframe(t), this.setAspectRatio(t));
                }));
            }
            onMessage(t) {
                try {
                    let e = JSON.parse(t.data);
                    if ("https://player.vimeo.com" === t.origin) {
                        if ("ready" === e.event) for (let e of Array.from(document.getElementsByClassName("fancybox__iframe"))) e instanceof HTMLIFrameElement && e.contentWindow === t.source && (e.dataset.ready = "true");
                    } else if (t.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) && "onReady" === e.event) {
                        const t = document.getElementById(e.id);
                        t && (t.dataset.ready = "true");
                    }
                } catch (t) {}
            }
            loadAjaxContent(t) {
                const e = this.instance.optionFor(t, "src") || "";
                this.instance.showLoading(t);
                const i = this.instance, n = new XMLHttpRequest;
                i.showLoading(t), n.onreadystatechange = function() {
                    n.readyState === XMLHttpRequest.DONE && i.state === rt.Ready && (i.hideLoading(t), 
                    200 === n.status ? i.setContent(t, n.responseText) : i.setError(t, 404 === n.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"));
                };
                const s = t.ajax || null;
                n.open(s ? "POST" : "GET", e + ""), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), 
                n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n.send(s), t.xhr = n;
            }
            setInlineContent(t) {
                let e = null;
                if (E(t.src)) e = t.src; else if ("string" == typeof t.src) {
                    const i = t.src.split("#", 2).pop();
                    e = i ? document.getElementById(i) : null;
                }
                if (e) {
                    if ("clone" === t.type || e.closest(".fancybox__slide")) {
                        e = e.cloneNode(!0);
                        const i = e.dataset.animationName;
                        i && (e.classList.remove(i), delete e.dataset.animationName);
                        let n = e.getAttribute("id");
                        n = n ? `${n}--clone` : `clone-${this.instance.id}-${t.index}`, e.setAttribute("id", n);
                    } else if (e.parentNode) {
                        const i = document.createElement("div");
                        i.classList.add("fancybox-placeholder"), e.parentNode.insertBefore(i, e), t.placeholderEl = i;
                    }
                    this.instance.setContent(t, e);
                } else this.instance.setError(t, "{{ELEMENT_NOT_FOUND}}");
            }
            setIframeContent(t) {
                const {src: e, el: i} = t;
                if (!e || "string" != typeof e || !i) return;
                i.classList.add("is-loading");
                const n = this.instance, s = document.createElement("iframe");
                s.className = "fancybox__iframe", s.setAttribute("id", `fancybox__iframe_${n.id}_${t.index}`);
                for (const [e, i] of Object.entries(this.optionFor(t, "iframeAttr") || {})) s.setAttribute(e, i);
                s.onerror = () => {
                    n.setError(t, "{{IFRAME_ERROR}}");
                }, t.iframeEl = s;
                const o = this.optionFor(t, "preload");
                if ("iframe" !== t.type || !1 === o) return s.setAttribute("src", t.src + ""), n.setContent(t, s, !1), 
                this.resizeIframe(t), void n.revealContent(t);
                n.showLoading(t), s.onload = () => {
                    if (!s.src.length) return;
                    const e = "true" !== s.dataset.ready;
                    s.dataset.ready = "true", this.resizeIframe(t), e ? n.revealContent(t) : n.hideLoading(t);
                }, s.setAttribute("src", e), n.setContent(t, s, !1);
            }
            resizeIframe(t) {
                const {type: e, iframeEl: i} = t;
                if (e === Pt || e === Ct) return;
                const n = null == i ? void 0 : i.parentElement;
                if (!i || !n) return;
                let s = t.autoSize;
                void 0 === s && (s = this.optionFor(t, "autoSize"));
                let o = t.width || 0, a = t.height || 0;
                o && a && (s = !1);
                const r = n && n.style;
                if (!1 !== t.preload && !1 !== s && r) try {
                    const t = window.getComputedStyle(n), e = parseFloat(t.paddingLeft) + parseFloat(t.paddingRight), s = parseFloat(t.paddingTop) + parseFloat(t.paddingBottom), l = i.contentWindow;
                    if (l) {
                        const t = l.document, i = t.getElementsByTagName(xt)[0], n = t.body;
                        r.width = "", n.style.overflow = "hidden", o = o || i.scrollWidth + e, r.width = `${o}px`, 
                        n.style.overflow = "", r.flex = "0 0 auto", r.height = `${n.scrollHeight}px`, a = i.scrollHeight + s;
                    }
                } catch (t) {}
                if (o || a) {
                    const t = {
                        flex: "0 1 auto",
                        width: "",
                        height: ""
                    };
                    o && "auto" !== o && (t.width = `${o}px`), a && "auto" !== a && (t.height = `${a}px`), 
                    Object.assign(r, t);
                }
            }
            playVideo() {
                const t = this.instance.getSlide();
                if (!t) return;
                const {el: e} = t;
                if (!e || !e.offsetParent) return;
                if (!this.optionFor(t, "videoAutoplay")) return;
                if (t.type === Tt) try {
                    const t = e.querySelector("video");
                    if (t) {
                        const e = t.play();
                        void 0 !== e && e.then((() => {})).catch((e => {
                            t.muted = !0, t.play();
                        }));
                    }
                } catch (t) {}
                if (t.type !== Pt && t.type !== Ct) return;
                const i = () => {
                    if (t.iframeEl && t.iframeEl.contentWindow) {
                        let e;
                        if ("true" === t.iframeEl.dataset.ready) return e = t.type === Pt ? {
                            event: "command",
                            func: "playVideo"
                        } : {
                            method: "play",
                            value: "true"
                        }, e && t.iframeEl.contentWindow.postMessage(JSON.stringify(e), "*"), void (t.poller = void 0);
                        t.type === Pt && (e = {
                            event: "listening",
                            id: t.iframeEl.getAttribute("id")
                        }, t.iframeEl.contentWindow.postMessage(JSON.stringify(e), "*"));
                    }
                    t.poller = setTimeout(i, 250);
                };
                i();
            }
            processType(t) {
                if (t.html) return t.type = xt, t.src = t.html, void (t.html = "");
                const e = this.instance.optionFor(t, "src", "");
                if (!e || "string" != typeof e) return;
                let i = t.type, n = null;
                if (n = e.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
                    const s = this.optionFor(t, Pt), {nocookie: o} = s, a = function(t, e) {
                        var i = {};
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (i[n] = t[n]);
                        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                            var s = 0;
                            for (n = Object.getOwnPropertySymbols(t); s < n.length; s++) e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (i[n[s]] = t[n[s]]);
                        }
                        return i;
                    }(s, [ "nocookie" ]), r = `www.youtube${o ? "-nocookie" : ""}.com`, l = Mt(e, a), c = encodeURIComponent(n[2]);
                    t.videoId = c, t.src = `https://${r}/embed/${c}?${l}`, t.thumbSrc = t.thumbSrc || `https://i.ytimg.com/vi/${c}/mqdefault.jpg`, 
                    i = Pt;
                } else if (n = e.match(/^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/)) {
                    const s = Mt(e, this.optionFor(t, Ct)), o = encodeURIComponent(n[1]), a = n[4] || "";
                    t.videoId = o, t.src = `https://player.vimeo.com/video/${o}?${a ? `h=${a}${s ? "&" : ""}` : ""}${s}`, 
                    i = Ct;
                }
                if (!i && t.triggerEl) {
                    const e = t.triggerEl.dataset.type;
                    At.includes(e) && (i = e);
                }
                i || "string" == typeof e && ("#" === e.charAt(0) ? i = "inline" : (n = e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (i = Tt, 
                t.videoFormat = t.videoFormat || "video/" + ("ogv" === n[1] ? "ogg" : n[1])) : e.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? i = Et : e.match(/\.(pdf)((\?|#).*)?$/i) && (i = "pdf")), 
                (n = e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (t.src = `https://maps.google.${n[1]}/?ll=${(n[2] ? n[2] + "&z=" + Math.floor(parseFloat(n[3])) + (n[4] ? n[4].replace(/^\//, "&") : "") : n[4] + "").replace(/\?/, "&")}&output=${n[4] && n[4].indexOf("layer=c") > 0 ? "svembed" : "embed"}`, 
                i = St) : (n = e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (t.src = `https://maps.google.${n[1]}/maps?q=${n[2].replace("query=", "q=").replace("api=1", "")}&output=embed`, 
                i = St), i = i || this.instance.option("defaultType"), t.type = i, i === Et && (t.thumbSrc = t.thumbSrc || t.src);
            }
            setContent(t) {
                const e = this.instance.optionFor(t, "src") || "";
                if (t && t.type && e) {
                    switch (t.type) {
                      case xt:
                        this.instance.setContent(t, e);
                        break;

                      case Tt:
                        const i = this.option("videoTpl");
                        i && this.instance.setContent(t, i.replace(/\{\{src\}\}/gi, e + "").replace(/\{\{format\}\}/gi, this.optionFor(t, "videoFormat") || "").replace(/\{\{poster\}\}/gi, t.poster || t.thumbSrc || ""));
                        break;

                      case "inline":
                      case "clone":
                        this.setInlineContent(t);
                        break;

                      case "ajax":
                        this.loadAjaxContent(t);
                        break;

                      case "pdf":
                      case St:
                      case Pt:
                      case Ct:
                        t.preload = !1;

                      case "iframe":
                        this.setIframeContent(t);
                    }
                    this.setAspectRatio(t);
                }
            }
            setAspectRatio(t) {
                const e = t.contentEl;
                if (!(t.el && e && t.type && [ Pt, Ct, Tt ].includes(t.type))) return;
                let i, n = t.width || "auto", s = t.height || "auto";
                if ("auto" === n || "auto" === s) {
                    i = this.optionFor(t, "videoRatio");
                    const e = (i + "").match(/(\d+)\s*\/\s?(\d+)/);
                    i = e && e.length > 2 ? parseFloat(e[1]) / parseFloat(e[2]) : parseFloat(i + "");
                } else n && s && (i = n / s);
                if (!i) return;
                e.style.aspectRatio = "", e.style.width = "", e.style.height = "", e.offsetHeight;
                const o = e.getBoundingClientRect(), a = o.width || 1, r = o.height || 1;
                e.style.aspectRatio = i + "", i < a / r ? (s = "auto" === s ? r : Math.min(r, s), 
                e.style.width = "auto", e.style.height = `${s}px`) : (n = "auto" === n ? a : Math.min(a, n), 
                e.style.width = `${n}px`, e.style.height = "auto");
            }
            attach() {
                const t = this, e = t.instance;
                e.on("Carousel.beforeInitSlide", t.onBeforeInitSlide), e.on("Carousel.createSlide", t.onCreateSlide), 
                e.on("Carousel.selectSlide", t.onSelectSlide), e.on("Carousel.unselectSlide", t.onUnselectSlide), 
                e.on("Carousel.Panzoom.refresh", t.onRefresh), e.on("done", t.onDone), e.on("clearContent", t.onClearContent), 
                window.addEventListener("message", t.onMessage);
            }
            detach() {
                const t = this, e = t.instance;
                e.off("Carousel.beforeInitSlide", t.onBeforeInitSlide), e.off("Carousel.createSlide", t.onCreateSlide), 
                e.off("Carousel.selectSlide", t.onSelectSlide), e.off("Carousel.unselectSlide", t.onUnselectSlide), 
                e.off("Carousel.Panzoom.refresh", t.onRefresh), e.off("done", t.onDone), e.off("clearContent", t.onClearContent), 
                window.removeEventListener("message", t.onMessage);
            }
        }
        Object.defineProperty(Lt, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ot
        });
        const zt = "play", Rt = "pause", kt = "ready";
        class It extends _ {
            constructor() {
                super(...arguments), Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: kt
                }), Object.defineProperty(this, "inHover", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "timer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "progressBar", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                });
            }
            get isActive() {
                return this.state !== kt;
            }
            onReady(t) {
                this.option("autoStart") && (t.isInfinite || t.page < t.pages.length - 1) && this.start();
            }
            onChange() {
                this.removeProgressBar(), this.pause();
            }
            onSettle() {
                this.resume();
            }
            onVisibilityChange() {
                "visible" === document.visibilityState ? this.resume() : this.pause();
            }
            onMouseEnter() {
                this.inHover = !0, this.pause();
            }
            onMouseLeave() {
                var t;
                this.inHover = !1, (null === (t = this.instance.panzoom) || void 0 === t ? void 0 : t.isResting) && this.resume();
            }
            onTimerEnd() {
                const t = this.instance;
                "play" === this.state && (t.isInfinite || t.page !== t.pages.length - 1 ? t.slideNext() : t.slideTo(0));
            }
            removeProgressBar() {
                this.progressBar && (this.progressBar.remove(), this.progressBar = null);
            }
            createProgressBar() {
                var t;
                if (!this.option("showProgress")) return null;
                this.removeProgressBar();
                const e = this.instance, i = (null === (t = e.pages[e.page]) || void 0 === t ? void 0 : t.slides) || [];
                let n = this.option("progressParentEl");
                if (n || (n = (1 === i.length ? i[0].el : null) || e.viewport), !n) return null;
                const s = document.createElement("div");
                return P(s, "f-progress"), n.prepend(s), this.progressBar = s, s.offsetHeight, s;
            }
            set() {
                const t = this, e = t.instance;
                if (e.pages.length < 2) return;
                if (t.timer) return;
                const i = t.option("timeout");
                t.state = zt, P(e.container, "has-autoplay");
                let n = t.createProgressBar();
                n && (n.style.transitionDuration = `${i}ms`, n.style.transform = "scaleX(1)"), t.timer = setTimeout((() => {
                    t.timer = null, t.inHover || t.onTimerEnd();
                }), i), t.emit("set");
            }
            clear() {
                const t = this;
                t.timer && (clearTimeout(t.timer), t.timer = null), t.removeProgressBar();
            }
            start() {
                const t = this;
                if (t.set(), t.state !== kt) {
                    if (t.option("pauseOnHover")) {
                        const e = t.instance.container;
                        e.addEventListener("mouseenter", t.onMouseEnter, !1), e.addEventListener("mouseleave", t.onMouseLeave, !1);
                    }
                    document.addEventListener("visibilitychange", t.onVisibilityChange, !1), t.emit("start");
                }
            }
            stop() {
                const t = this, e = t.state, i = t.instance.container;
                t.clear(), t.state = kt, i.removeEventListener("mouseenter", t.onMouseEnter, !1), 
                i.removeEventListener("mouseleave", t.onMouseLeave, !1), document.removeEventListener("visibilitychange", t.onVisibilityChange, !1), 
                S(i, "has-autoplay"), e !== kt && t.emit("stop");
            }
            pause() {
                const t = this;
                t.state === zt && (t.state = Rt, t.clear(), t.emit(Rt));
            }
            resume() {
                const t = this, e = t.instance;
                if (e.isInfinite || e.page !== e.pages.length - 1) if (t.state !== zt) {
                    if (t.state === Rt && !t.inHover) {
                        const e = new Event("resume", {
                            bubbles: !0,
                            cancelable: !0
                        });
                        t.emit("resume", e), e.defaultPrevented || t.set();
                    }
                } else t.set(); else t.stop();
            }
            toggle() {
                this.state === zt || this.state === Rt ? this.stop() : this.start();
            }
            attach() {
                const t = this, e = t.instance;
                e.on("ready", t.onReady), e.on("Panzoom.startAnimation", t.onChange), e.on("Panzoom.endAnimation", t.onSettle), 
                e.on("Panzoom.touchMove", t.onChange);
            }
            detach() {
                const t = this, e = t.instance;
                e.off("ready", t.onReady), e.off("Panzoom.startAnimation", t.onChange), e.off("Panzoom.endAnimation", t.onSettle), 
                e.off("Panzoom.touchMove", t.onChange), t.stop();
            }
        }
        Object.defineProperty(It, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                autoStart: !0,
                pauseOnHover: !0,
                progressParentEl: null,
                showProgress: !0,
                timeout: 3e3
            }
        });
        class Dt extends _ {
            constructor() {
                super(...arguments), Object.defineProperty(this, "ref", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                });
            }
            onPrepare(t) {
                const e = t.carousel;
                if (!e) return;
                const i = t.container;
                i && (e.options.Autoplay = u({
                    autoStart: !1
                }, this.option("Autoplay") || {}, {
                    pauseOnHover: !1,
                    timeout: this.option("timeout"),
                    progressParentEl: () => this.option("progressParentEl") || null,
                    on: {
                        start: () => {
                            t.emit("startSlideshow");
                        },
                        set: e => {
                            var n;
                            i.classList.add("has-slideshow"), (null === (n = t.getSlide()) || void 0 === n ? void 0 : n.state) !== lt.Ready && e.pause();
                        },
                        stop: () => {
                            i.classList.remove("has-slideshow"), t.isCompact || t.endIdle(), t.emit("endSlideshow");
                        },
                        resume: (e, i) => {
                            var n, s, o;
                            !i || !i.cancelable || (null === (n = t.getSlide()) || void 0 === n ? void 0 : n.state) === lt.Ready && (null === (o = null === (s = t.carousel) || void 0 === s ? void 0 : s.panzoom) || void 0 === o ? void 0 : o.isResting) || i.preventDefault();
                        }
                    }
                }), e.attachPlugins({
                    Autoplay: It
                }), this.ref = e.plugins.Autoplay);
            }
            onReady(t) {
                const e = t.carousel, i = this.ref;
                i && e && this.option("playOnStart") && (e.isInfinite || e.page < e.pages.length - 1) && i.start();
            }
            onDone(t, e) {
                const i = this.ref, n = t.carousel;
                if (!i || !n) return;
                const s = e.panzoom;
                s && s.on("startAnimation", (() => {
                    t.isCurrentSlide(e) && i.stop();
                })), t.isCurrentSlide(e) && i.resume();
            }
            onKeydown(t, e) {
                var i;
                const n = this.ref;
                n && e === this.option("key") && "BUTTON" !== (null === (i = document.activeElement) || void 0 === i ? void 0 : i.nodeName) && n.toggle();
            }
            attach() {
                const t = this, e = t.instance;
                e.on("Carousel.init", t.onPrepare), e.on("Carousel.ready", t.onReady), e.on("done", t.onDone), 
                e.on("keydown", t.onKeydown);
            }
            detach() {
                const t = this, e = t.instance;
                e.off("Carousel.init", t.onPrepare), e.off("Carousel.ready", t.onReady), e.off("done", t.onDone), 
                e.off("keydown", t.onKeydown);
            }
        }
        Object.defineProperty(Dt, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                key: " ",
                playOnStart: !1,
                progressParentEl: t => {
                    var e;
                    return (null === (e = t.instance.container) || void 0 === e ? void 0 : e.querySelector(".fancybox__toolbar [data-fancybox-toggle-slideshow]")) || t.instance.container;
                },
                timeout: 3e3
            }
        });
        const Ft = {
            classes: {
                container: "f-thumbs f-carousel__thumbs",
                viewport: "f-thumbs__viewport",
                track: "f-thumbs__track",
                slide: "f-thumbs__slide",
                isResting: "is-resting",
                isSelected: "is-selected",
                isLoading: "is-loading",
                hasThumbs: "has-thumbs"
            },
            minCount: 2,
            parentEl: null,
            thumbTpl: '<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',
            type: "modern"
        };
        var jt;
        !function(t) {
            t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Hidden = 2] = "Hidden";
        }(jt || (jt = {}));
        const Bt = "isResting", Ht = "thumbWidth", Nt = "thumbHeight", _t = "thumbClipWidth";
        let $t = class extends _ {
            constructor() {
                super(...arguments), Object.defineProperty(this, "type", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "modern"
                }), Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "track", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "carousel", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "thumbWidth", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "thumbClipWidth", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "thumbHeight", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "thumbGap", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "thumbExtraGap", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: jt.Init
                });
            }
            get isModern() {
                return "modern" === this.type;
            }
            onInitSlide(t, e) {
                const i = e.el ? e.el.dataset : void 0;
                i && (e.thumbSrc = i.thumbSrc || e.thumbSrc || "", e[_t] = parseFloat(i[_t] || "") || e[_t] || 0, 
                e[Nt] = parseFloat(i.thumbHeight || "") || e[Nt] || 0), this.addSlide(e);
            }
            onInitSlides() {
                this.build();
            }
            onChange() {
                var t;
                if (!this.isModern) return;
                const e = this.container, i = this.instance, n = i.panzoom, s = this.carousel, a = s ? s.panzoom : null, r = i.page;
                if (n && s && a) {
                    if (n.isDragging) {
                        S(e, this.cn(Bt));
                        let n = (null === (t = s.pages[r]) || void 0 === t ? void 0 : t.pos) || 0;
                        n += i.getProgress(r) * (this[_t] + this.thumbGap);
                        let o = a.getBounds();
                        -1 * n > o.x.min && -1 * n < o.x.max && a.panTo({
                            x: -1 * n,
                            friction: .12
                        });
                    } else o(e, this.cn(Bt), n.isResting);
                    this.shiftModern();
                }
            }
            onRefresh() {
                this.updateProps();
                for (const t of this.instance.slides || []) this.resizeModernSlide(t);
                this.shiftModern();
            }
            isDisabled() {
                const t = this.option("minCount") || 0;
                if (t) {
                    const e = this.instance;
                    let i = 0;
                    for (const t of e.slides || []) t.thumbSrc && i++;
                    if (i < t) return !0;
                }
                const e = this.option("type");
                return [ "modern", "classic" ].indexOf(e) < 0;
            }
            getThumb(t) {
                const e = this.option("thumbTpl") || "";
                return {
                    html: this.instance.localize(e, [ [ "%i", t.index ], [ "%d", t.index + 1 ], [ "%s", t.thumbSrc || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ] ])
                };
            }
            addSlide(t) {
                const e = this.carousel;
                e && e.addSlide(t.index, this.getThumb(t));
            }
            getSlides() {
                const t = [];
                for (const e of this.instance.slides || []) t.push(this.getThumb(e));
                return t;
            }
            resizeModernSlide(t) {
                this.isModern && (t[Ht] = t[_t] && t[Nt] ? Math.round(this[Nt] * (t[_t] / t[Nt])) : this[Ht]);
            }
            updateProps() {
                const t = this.container;
                if (!t) return;
                const e = e => parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-" + e)) || 0;
                this.thumbGap = e("gap"), this.thumbExtraGap = e("extra-gap"), this[Ht] = e("width") || 40, 
                this[_t] = e("clip-width") || 40, this[Nt] = e("height") || 40;
            }
            build() {
                const t = this;
                if (t.state !== jt.Init) return;
                if (t.isDisabled()) return void t.emit("disabled");
                const e = t.instance, i = e.container, n = t.getSlides(), s = t.option("type");
                t.type = s;
                const o = t.option("parentEl"), a = t.cn("container"), r = t.cn("track");
                let l = null == o ? void 0 : o.querySelector("." + a);
                l || (l = document.createElement("div"), P(l, a), o ? o.appendChild(l) : i.after(l)), 
                P(l, `is-${s}`), P(i, t.cn("hasThumbs")), t.container = l, t.updateProps();
                let c = l.querySelector("." + r);
                c || (c = document.createElement("div"), P(c, t.cn("track")), l.appendChild(c)), 
                t.track = c;
                const h = u({}, {
                    track: c,
                    infinite: !1,
                    center: !0,
                    fill: "classic" === s,
                    dragFree: !0,
                    slidesPerPage: 1,
                    transition: !1,
                    preload: .25,
                    friction: .12,
                    Panzoom: {
                        maxVelocity: 0
                    },
                    Dots: !1,
                    Navigation: !1,
                    classes: {
                        container: "f-thumbs",
                        viewport: "f-thumbs__viewport",
                        track: "f-thumbs__track",
                        slide: "f-thumbs__slide"
                    }
                }, t.option("Carousel") || {}, {
                    Sync: {
                        target: e
                    },
                    slides: n
                }), d = new e.constructor(l, h);
                d.on("createSlide", ((e, i) => {
                    t.setProps(i.index), t.emit("createSlide", i, i.el);
                })), d.on("ready", (() => {
                    t.shiftModern(), t.emit("ready");
                })), d.on("refresh", (() => {
                    t.shiftModern();
                })), d.on("Panzoom.click", ((e, i, n) => {
                    t.onClick(n);
                })), t.carousel = d, t.state = jt.Ready;
            }
            onClick(t) {
                t.preventDefault(), t.stopPropagation();
                const e = this.instance, {pages: i, page: n} = e, s = t => {
                    if (t) {
                        const e = t.closest("[data-carousel-index]");
                        if (e) return [ parseInt(e.dataset.carouselIndex || "", 10) || 0, e ];
                    }
                    return [ -1, void 0 ];
                }, o = (t, e) => {
                    const i = document.elementFromPoint(t, e);
                    return i ? s(i) : [ -1, void 0 ];
                };
                let [a, r] = s(t.target);
                if (a > -1) return;
                const l = this[_t], c = t.clientX, h = t.clientY;
                let [d, u] = o(c - l, h), [p, f] = o(c + l, h);
                u && f ? (a = Math.abs(c - u.getBoundingClientRect().right) < Math.abs(c - f.getBoundingClientRect().left) ? d : p, 
                a === n && (a = a === d ? p : d)) : u ? a = d : f && (a = p), a > -1 && i[a] && e.slideTo(a);
            }
            getShift(t) {
                var e;
                const i = this, {instance: n} = i, s = i.carousel;
                if (!n || !s) return 0;
                const o = i[Ht], a = i[_t], r = i.thumbGap, l = i.thumbExtraGap;
                if (!(null === (e = s.slides[t]) || void 0 === e ? void 0 : e.el)) return 0;
                const c = .5 * (o - a), h = n.pages.length - 1;
                let d = n.getProgress(0), u = n.getProgress(h), p = n.getProgress(t, !1, !0), f = 0, g = c + l + r;
                const m = d < 0 && d > -1, v = u > 0 && u < 1;
                return 0 === t ? (f = g * Math.abs(d), v && 1 === d && (f -= g * Math.abs(u))) : t === h ? (f = g * Math.abs(u) * -1, 
                m && -1 === u && (f += g * Math.abs(d))) : m || v ? (f = -1 * g, f += g * Math.abs(d), 
                f += g * (1 - Math.abs(u))) : f = g * p, f;
            }
            setProps(e) {
                var i;
                const n = this;
                if (!n.isModern) return;
                const {instance: s} = n, o = n.carousel;
                if (s && o) {
                    const a = null === (i = o.slides[e]) || void 0 === i ? void 0 : i.el;
                    if (a && a.childNodes.length) {
                        let i = t(1 - Math.abs(s.getProgress(e))), o = t(n.getShift(e));
                        a.style.setProperty("--progress", i ? i + "" : ""), a.style.setProperty("--shift", o + "");
                    }
                }
            }
            shiftModern() {
                const t = this;
                if (!t.isModern) return;
                const {instance: e, track: i} = t, n = e.panzoom, s = t.carousel;
                if (!(e && i && n && s)) return;
                if (n.state === m.Init || n.state === m.Destroy) return;
                for (const i of e.slides) t.setProps(i.index);
                let o = (t[_t] + t.thumbGap) * (s.slides.length || 0);
                i.style.setProperty("--width", o + "");
            }
            cleanup() {
                const t = this;
                t.carousel && t.carousel.destroy(), t.carousel = null, t.container && t.container.remove(), 
                t.container = null, t.track && t.track.remove(), t.track = null, t.state = jt.Init, 
                S(t.instance.container, t.cn("hasThumbs"));
            }
            attach() {
                const t = this, e = t.instance;
                e.on("initSlide", t.onInitSlide), e.state === B.Init ? e.on("initSlides", t.onInitSlides) : t.onInitSlides(), 
                e.on([ "change", "Panzoom.afterTransform" ], t.onChange), e.on("Panzoom.refresh", t.onRefresh);
            }
            detach() {
                const t = this, e = t.instance;
                e.off("initSlide", t.onInitSlide), e.off("initSlides", t.onInitSlides), e.off([ "change", "Panzoom.afterTransform" ], t.onChange), 
                e.off("Panzoom.refresh", t.onRefresh), t.cleanup();
            }
        };
        Object.defineProperty($t, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ft
        });
        const Wt = Object.assign(Object.assign({}, Ft), {
            key: "t",
            showOnStart: !0,
            parentEl: null
        }), Xt = "is-masked", qt = "aria-hidden";
        class Yt extends _ {
            constructor() {
                super(...arguments), Object.defineProperty(this, "ref", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "hidden", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                });
            }
            get isEnabled() {
                const t = this.ref;
                return t && !t.isDisabled();
            }
            get isHidden() {
                return this.hidden;
            }
            onClick(t, e) {
                e.stopPropagation();
            }
            onCreateSlide(t, e) {
                var i, n, s;
                const o = (null === (s = null === (n = null === (i = this.instance) || void 0 === i ? void 0 : i.carousel) || void 0 === n ? void 0 : n.slides[e.index]) || void 0 === s ? void 0 : s.type) || "", a = e.el;
                if (a && o) {
                    let t = `for-${o}`;
                    [ "video", "youtube", "vimeo", "html5video" ].includes(o) && (t += " for-video"), 
                    P(a, t);
                }
            }
            onInit() {
                var t;
                const e = this, i = e.instance, n = i.carousel;
                if (e.ref || !n) return;
                const s = e.option("parentEl") || i.footer || i.container;
                if (!s) return;
                const o = u({}, e.options, {
                    parentEl: s,
                    classes: {
                        container: "f-thumbs fancybox__thumbs"
                    },
                    Carousel: {
                        Sync: {
                            friction: i.option("Carousel.friction") || 0
                        }
                    },
                    on: {
                        ready: t => {
                            const i = t.container;
                            i && this.hidden && (e.refresh(), i.style.transition = "none", e.hide(), i.offsetHeight, 
                            queueMicrotask((() => {
                                i.style.transition = "", e.show();
                            })));
                        }
                    }
                });
                o.Carousel = o.Carousel || {}, o.Carousel.on = u((null === (t = e.options.Carousel) || void 0 === t ? void 0 : t.on) || {}, {
                    click: this.onClick,
                    createSlide: this.onCreateSlide
                }), n.options.Thumbs = o, n.attachPlugins({
                    Thumbs: $t
                }), e.ref = n.plugins.Thumbs, e.option("showOnStart") || (e.ref.state = jt.Hidden, 
                e.hidden = !0);
            }
            onResize() {
                var t;
                const e = null === (t = this.ref) || void 0 === t ? void 0 : t.container;
                e && (e.style.maxHeight = "");
            }
            onKeydown(t, e) {
                const i = this.option("key");
                i && i === e && this.toggle();
            }
            toggle() {
                const t = this.ref;
                if (t && !t.isDisabled()) return t.state === jt.Hidden ? (t.state = jt.Init, void t.build()) : void (this.hidden ? this.show() : this.hide());
            }
            show() {
                const t = this.ref;
                if (!t || t.isDisabled()) return;
                const e = t.container;
                e && (this.refresh(), e.offsetHeight, e.removeAttribute(qt), e.classList.remove(Xt), 
                this.hidden = !1);
            }
            hide() {
                const t = this.ref, e = t && t.container;
                e && (this.refresh(), e.offsetHeight, e.classList.add(Xt), e.setAttribute(qt, "true")), 
                this.hidden = !0;
            }
            refresh() {
                const t = this.ref;
                if (!t || !t.state) return;
                const e = t.container, i = (null == e ? void 0 : e.firstChild) || null;
                e && i && i.childNodes.length && (e.style.maxHeight = `${i.getBoundingClientRect().height}px`);
            }
            attach() {
                const t = this, e = t.instance;
                e.state === rt.Init ? e.on("Carousel.init", t.onInit) : t.onInit(), e.on("resize", t.onResize), 
                e.on("keydown", t.onKeydown);
            }
            detach() {
                var t;
                const e = this, i = e.instance;
                i.off("Carousel.init", e.onInit), i.off("resize", e.onResize), i.off("keydown", e.onKeydown), 
                null === (t = i.carousel) || void 0 === t || t.detachPlugins([ "Thumbs" ]), e.ref = null;
            }
        }
        Object.defineProperty(Yt, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Wt
        });
        const Vt = {
            panLeft: {
                icon: '<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>',
                change: {
                    panX: -100
                }
            },
            panRight: {
                icon: '<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>',
                change: {
                    panX: 100
                }
            },
            panUp: {
                icon: '<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>',
                change: {
                    panY: -100
                }
            },
            panDown: {
                icon: '<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>',
                change: {
                    panY: 100
                }
            },
            zoomIn: {
                icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',
                action: "zoomIn"
            },
            zoomOut: {
                icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
                action: "zoomOut"
            },
            toggle1to1: {
                icon: '<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>',
                action: "toggleZoom"
            },
            toggleZoom: {
                icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
                action: "toggleZoom"
            },
            iterateZoom: {
                icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
                action: "iterateZoom"
            },
            rotateCCW: {
                icon: '<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>',
                action: "rotateCCW"
            },
            rotateCW: {
                icon: '<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>',
                action: "rotateCW"
            },
            flipX: {
                icon: '<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>',
                action: "flipX"
            },
            flipY: {
                icon: '<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>',
                action: "flipY"
            },
            fitX: {
                icon: '<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>',
                action: "fitX"
            },
            fitY: {
                icon: '<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>',
                action: "fitY"
            },
            reset: {
                icon: '<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',
                action: "reset"
            },
            toggleFS: {
                icon: '<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>',
                action: "toggleFS"
            }
        };
        var Zt;
        !function(t) {
            t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Disabled = 2] = "Disabled";
        }(Zt || (Zt = {}));
        const Ut = {
            absolute: "auto",
            display: {
                left: [ "infobar" ],
                middle: [],
                right: [ "iterateZoom", "slideshow", "fullscreen", "thumbs", "close" ]
            },
            enabled: "auto",
            items: {
                infobar: {
                    tpl: '<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>'
                },
                download: {
                    tpl: '<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>'
                },
                prev: {
                    tpl: '<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>'
                },
                next: {
                    tpl: '<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>'
                },
                slideshow: {
                    tpl: '<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>'
                },
                fullscreen: {
                    tpl: '<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>'
                },
                thumbs: {
                    tpl: '<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>'
                },
                close: {
                    tpl: '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>'
                }
            },
            parentEl: null
        }, Gt = {
            tabindex: "-1",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg"
        }, Kt = "has-toolbar", Jt = "fancybox__toolbar";
        class Qt extends _ {
            constructor() {
                super(...arguments), Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: Zt.Init
                }), Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                });
            }
            onReady(t) {
                var e;
                if (!t.carousel) return;
                let i = this.option("display"), n = this.option("absolute"), s = this.option("enabled");
                if ("auto" === s) {
                    const t = this.instance.carousel;
                    let e = 0;
                    if (t) for (const i of t.slides) (i.panzoom || "image" === i.type) && e++;
                    e || (s = !1);
                }
                s || (i = void 0);
                let o = 0;
                const a = {
                    left: [],
                    middle: [],
                    right: []
                };
                if (i) for (const t of [ "left", "middle", "right" ]) for (const n of i[t]) {
                    const i = this.createEl(n);
                    i && (null === (e = a[t]) || void 0 === e || e.push(i), o++);
                }
                let r = null;
                if (o && (r = this.createContainer()), r) {
                    for (const [t, e] of Object.entries(a)) {
                        const i = document.createElement("div");
                        P(i, Jt + "__column is-" + t);
                        for (const t of e) i.appendChild(t);
                        "auto" !== n || "middle" !== t || e.length || (n = !0), r.appendChild(i);
                    }
                    !0 === n && P(r, "is-absolute"), this.state = Zt.Ready, this.onRefresh();
                } else this.state = Zt.Disabled;
            }
            onClick(t) {
                var e, i;
                const n = this.instance, s = n.getSlide(), o = null == s ? void 0 : s.panzoom, a = t.target, r = a && E(a) ? a.dataset : null;
                if (!r) return;
                if (void 0 !== r.fancyboxToggleThumbs) return t.preventDefault(), t.stopPropagation(), 
                void (null === (e = n.plugins.Thumbs) || void 0 === e || e.toggle());
                if (void 0 !== r.fancyboxToggleFullscreen) return t.preventDefault(), t.stopPropagation(), 
                void this.instance.toggleFullscreen();
                if (void 0 !== r.fancyboxToggleSlideshow) {
                    t.preventDefault(), t.stopPropagation();
                    const e = null === (i = n.carousel) || void 0 === i ? void 0 : i.plugins.Autoplay;
                    let s = e.isActive;
                    return o && "mousemove" === o.panMode && !s && o.reset(), void (s ? e.stop() : e.start());
                }
                const l = r.panzoomAction, c = r.panzoomChange;
                if ((c || l) && (t.preventDefault(), t.stopPropagation()), c) {
                    let t = {};
                    try {
                        t = JSON.parse(c);
                    } catch (t) {}
                    o && o.applyChange(t);
                } else l && o && o[l] && o[l]();
            }
            onChange() {
                this.onRefresh();
            }
            onRefresh() {
                if (this.instance.isClosing()) return;
                const t = this.container;
                if (!t) return;
                const e = this.instance.getSlide();
                if (!e || e.state !== lt.Ready) return;
                const i = e && !e.error && e.panzoom;
                for (const e of t.querySelectorAll("[data-panzoom-action]")) i ? (e.removeAttribute("disabled"), 
                e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
                let n = i && i.canZoomIn(), s = i && i.canZoomOut();
                for (const e of t.querySelectorAll('[data-panzoom-action="zoomIn"]')) n ? (e.removeAttribute("disabled"), 
                e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
                for (const e of t.querySelectorAll('[data-panzoom-action="zoomOut"]')) s ? (e.removeAttribute("disabled"), 
                e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
                for (const e of t.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')) {
                    s || n ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""), 
                    e.setAttribute("tabindex", "-1"));
                    const t = e.querySelector("g");
                    t && (t.style.display = n ? "" : "none");
                }
            }
            onDone(t, e) {
                var i;
                null === (i = e.panzoom) || void 0 === i || i.on("afterTransform", (() => {
                    this.instance.isCurrentSlide(e) && this.onRefresh();
                })), this.instance.isCurrentSlide(e) && this.onRefresh();
            }
            createContainer() {
                const t = this.instance.container;
                if (!t) return null;
                const e = this.option("parentEl") || t;
                let i = e.querySelector("." + Jt);
                return i || (i = document.createElement("div"), P(i, Jt), e.prepend(i)), i.addEventListener("click", this.onClick, {
                    passive: !1,
                    capture: !0
                }), t && P(t, Kt), this.container = i, i;
            }
            createEl(t) {
                const e = this.instance, i = e.carousel;
                if (!i) return null;
                if ("toggleFS" === t) return null;
                if ("fullscreen" === t && !ot()) return null;
                let s = null;
                const o = i.slides.length || 0;
                let a = 0, r = 0;
                for (const t of i.slides) (t.panzoom || "image" === t.type) && a++, ("image" === t.type || t.downloadSrc) && r++;
                if (o < 2 && [ "infobar", "prev", "next" ].includes(t)) return s;
                if (void 0 !== Vt[t] && !a) return null;
                if ("download" === t && !r) return null;
                if ("thumbs" === t) {
                    const t = e.plugins.Thumbs;
                    if (!t || !t.isEnabled) return null;
                }
                if ("slideshow" === t) if (!i.plugins.Autoplay || o < 2) return null;
                if (void 0 !== Vt[t]) {
                    const e = Vt[t];
                    s = document.createElement("button"), s.setAttribute("title", this.instance.localize(`{{${t.toUpperCase()}}}`)), 
                    P(s, "f-button"), e.action && (s.dataset.panzoomAction = e.action), e.change && (s.dataset.panzoomChange = JSON.stringify(e.change)), 
                    s.appendChild(n(this.instance.localize(e.icon)));
                } else {
                    const e = (this.option("items") || [])[t];
                    e && (s = n(this.instance.localize(e.tpl)), "function" == typeof e.click && s.addEventListener("click", (t => {
                        t.preventDefault(), t.stopPropagation(), "function" == typeof e.click && e.click.call(this, this, t);
                    })));
                }
                const l = null == s ? void 0 : s.querySelector("svg");
                if (l) for (const [t, e] of Object.entries(Gt)) l.getAttribute(t) || l.setAttribute(t, String(e));
                return s;
            }
            removeContainer() {
                const t = this.container;
                t && t.remove(), this.container = null, this.state = Zt.Disabled;
                const e = this.instance.container;
                e && S(e, Kt);
            }
            attach() {
                const t = this, e = t.instance;
                e.on("Carousel.initSlides", t.onReady), e.on("done", t.onDone), e.on([ "reveal", "Carousel.change" ], t.onChange), 
                t.onReady(t.instance);
            }
            detach() {
                const t = this, e = t.instance;
                e.off("Carousel.initSlides", t.onReady), e.off("done", t.onDone), e.off([ "reveal", "Carousel.change" ], t.onChange), 
                t.removeContainer();
            }
        }
        Object.defineProperty(Qt, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ut
        });
        const te = {
            Hash: class extends _ {
                onReady() {
                    ht = !1;
                }
                onChange(t) {
                    ut && clearTimeout(ut);
                    const {hash: e} = pt(), {hash: i} = ft(), n = t.isOpeningSlide(t.getSlide());
                    n && (ct = i === e ? "" : i), e && e !== i && (ut = setTimeout((() => {
                        try {
                            if (t.state === rt.Ready) {
                                let t = "replaceState";
                                n && !dt && (t = "pushState", dt = !0), window.history[t]({}, document.title, window.location.pathname + window.location.search + e);
                            }
                        } catch (t) {}
                    }), 300));
                }
                onClose(t) {
                    if (ut && clearTimeout(ut), !ht && dt) return dt = !1, ht = !1, void window.history.back();
                    if (!ht) try {
                        window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (ct || ""));
                    } catch (t) {}
                }
                attach() {
                    const t = this.instance;
                    t.on("ready", this.onReady), t.on([ "Carousel.ready", "Carousel.change" ], this.onChange), 
                    t.on("close", this.onClose);
                }
                detach() {
                    const t = this.instance;
                    t.off("ready", this.onReady), t.off([ "Carousel.ready", "Carousel.change" ], this.onChange), 
                    t.off("close", this.onClose);
                }
                static parseURL() {
                    return ft();
                }
                static startFromUrl() {
                    gt();
                }
                static destroy() {
                    window.removeEventListener("hashchange", vt, !1);
                }
            },
            Html: Lt,
            Images: wt,
            Slideshow: Dt,
            Thumbs: Yt,
            Toolbar: Qt
        }, ee = "with-fancybox", ie = "hide-scrollbar", ne = "--fancybox-scrollbar-compensate", se = "--fancybox-body-margin", oe = "aria-hidden", ae = "is-using-tab", re = "is-animated", le = "is-compact", ce = "is-loading", he = "is-opening", de = "has-caption", ue = "disabled", pe = "tabindex", fe = "download", ge = "href", me = "src", ve = t => "string" == typeof t, be = function() {
            var t = window.getSelection();
            return !!t && "Range" === t.type;
        };
        let ye, we = null, xe = null, Ee = 0, Se = 0, Pe = 0, Ce = 0;
        const Te = new Map;
        let Me = 0;
        class Oe extends g {
            get isIdle() {
                return this.idle;
            }
            get isCompact() {
                return this.option("compact");
            }
            constructor(t = [], e = {}, i = {}) {
                super(e), Object.defineProperty(this, "userSlides", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }), Object.defineProperty(this, "userPlugins", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {}
                }), Object.defineProperty(this, "idle", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "idleTimer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "clickTimer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "pwt", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "ignoreFocusChange", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "startedFs", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: rt.Init
                }), Object.defineProperty(this, "id", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "caption", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "footer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "carousel", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "lastFocus", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "prevMouseMoveEvent", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), ye || (ye = ot()), this.id = e.id || ++Me, Te.set(this.id, this), this.userSlides = t, 
                this.userPlugins = i, queueMicrotask((() => {
                    this.init();
                }));
            }
            init() {
                if (this.state === rt.Destroy) return;
                this.state = rt.Init, this.attachPlugins(Object.assign(Object.assign({}, Oe.Plugins), this.userPlugins)), 
                this.emit("init"), this.emit("attachPlugins"), !0 === this.option("hideScrollbar") && (() => {
                    if (!et) return;
                    const t = document, e = t.body, i = t.documentElement;
                    if (e.classList.contains(ie)) return;
                    let n = window.innerWidth - i.getBoundingClientRect().width;
                    const s = parseFloat(window.getComputedStyle(e).marginRight);
                    n < 0 && (n = 0), i.style.setProperty(ne, `${n}px`), s && e.style.setProperty(se, `${s}px`), 
                    e.classList.add(ie);
                })(), this.initLayout(), this.scale();
                const t = () => {
                    this.initCarousel(this.userSlides), this.state = rt.Ready, this.attachEvents(), 
                    this.emit("ready"), setTimeout((() => {
                        this.container && this.container.setAttribute(oe, "false");
                    }), 16);
                };
                this.option("Fullscreen.autoStart") && ye && !ye.isFullscreen() ? ye.request().then((() => {
                    this.startedFs = !0, t();
                })).catch((() => t())) : t();
            }
            initLayout() {
                var t, e;
                const i = this.option("parentEl") || document.body, s = n(this.localize(this.option("tpl.main") || ""));
                if (s) {
                    if (s.setAttribute("id", `fancybox-${this.id}`), s.setAttribute("aria-label", this.localize("{{MODAL}}")), 
                    s.classList.toggle(le, this.isCompact), P(s, this.option("mainClass") || ""), P(s, he), 
                    this.container = s, this.footer = s.querySelector(".fancybox__footer"), i.appendChild(s), 
                    P(document.documentElement, ee), we && xe || (we = document.createElement("span"), 
                    P(we, "fancybox-focus-guard"), we.setAttribute(pe, "0"), we.setAttribute(oe, "true"), 
                    we.setAttribute("aria-label", "Focus guard"), xe = we.cloneNode(), null === (t = s.parentElement) || void 0 === t || t.insertBefore(we, s), 
                    null === (e = s.parentElement) || void 0 === e || e.append(xe)), s.addEventListener("mousedown", (t => {
                        Ee = t.pageX, Se = t.pageY, S(s, ae);
                    })), this.option("closeExisting")) for (const t of Te.values()) t.id !== this.id && t.close(); else this.option("animated") && (P(s, re), 
                    setTimeout((() => {
                        this.isClosing() || S(s, re);
                    }), 350));
                    this.emit("initLayout");
                }
            }
            initCarousel(t) {
                const i = this.container;
                if (!i) return;
                const n = i.querySelector(".fancybox__carousel");
                if (!n) return;
                const s = this.carousel = new Q(n, u({}, {
                    slides: t,
                    transition: "fade",
                    Panzoom: {
                        lockAxis: this.option("dragToClose") ? "xy" : "x",
                        infinite: !!this.option("dragToClose") && "y"
                    },
                    Dots: !1,
                    Navigation: {
                        classes: {
                            container: "fancybox__nav",
                            button: "f-button",
                            isNext: "is-next",
                            isPrev: "is-prev"
                        }
                    },
                    initialPage: this.option("startIndex"),
                    l10n: this.option("l10n")
                }, this.option("Carousel") || {}));
                s.on("*", ((t, e, ...i) => {
                    this.emit(`Carousel.${e}`, t, ...i);
                })), s.on([ "ready", "change" ], (() => {
                    this.manageCaption();
                })), this.on("Carousel.removeSlide", ((t, e, i) => {
                    this.clearContent(i), i.state = void 0;
                })), s.on("Panzoom.touchStart", (() => {
                    var t, e;
                    this.isCompact || this.endIdle(), (null === (t = document.activeElement) || void 0 === t ? void 0 : t.closest(".f-thumbs")) && (null === (e = this.container) || void 0 === e || e.focus());
                })), s.on("settle", (() => {
                    this.idleTimer || this.isCompact || !this.option("idle") || this.setIdle(), this.option("autoFocus") && !this.isClosing && this.checkFocus();
                })), this.option("dragToClose") && (s.on("Panzoom.afterTransform", ((t, i) => {
                    const n = this.getSlide();
                    if (n && e(n.el)) return;
                    const s = this.container;
                    if (s) {
                        const t = Math.abs(i.current.f), e = t < 1 ? "" : Math.max(.5, Math.min(1, 1 - t / i.contentRect.fitHeight * 1.5));
                        s.style.setProperty("--fancybox-ts", e ? "0s" : ""), s.style.setProperty("--fancybox-opacity", e + "");
                    }
                })), s.on("Panzoom.touchEnd", ((t, i, n) => {
                    var s;
                    const o = this.getSlide();
                    if (o && e(o.el)) return;
                    if (i.isMobile && document.activeElement && -1 !== [ "TEXTAREA", "INPUT" ].indexOf(null === (s = document.activeElement) || void 0 === s ? void 0 : s.nodeName)) return;
                    const a = Math.abs(i.dragOffset.y);
                    "y" === i.lockedAxis && (a >= 200 || a >= 50 && i.dragOffset.time < 300) && (n && n.cancelable && n.preventDefault(), 
                    this.close(n, "f-throwOut" + (i.current.f < 0 ? "Up" : "Down")));
                }))), s.on("change", (t => {
                    var e;
                    let i = null === (e = this.getSlide()) || void 0 === e ? void 0 : e.triggerEl;
                    if (i) {
                        const e = new CustomEvent("slideTo", {
                            bubbles: !0,
                            cancelable: !0,
                            detail: t.page
                        });
                        i.dispatchEvent(e);
                    }
                })), s.on([ "refresh", "change" ], (t => {
                    const e = this.container;
                    if (!e) return;
                    for (const i of e.querySelectorAll("[data-fancybox-current-index]")) i.innerHTML = t.page + 1;
                    for (const i of e.querySelectorAll("[data-fancybox-count]")) i.innerHTML = t.pages.length;
                    if (!t.isInfinite) {
                        for (const i of e.querySelectorAll("[data-fancybox-next]")) t.page < t.pages.length - 1 ? (i.removeAttribute(ue), 
                        i.removeAttribute(pe)) : (i.setAttribute(ue, ""), i.setAttribute(pe, "-1"));
                        for (const i of e.querySelectorAll("[data-fancybox-prev]")) t.page > 0 ? (i.removeAttribute(ue), 
                        i.removeAttribute(pe)) : (i.setAttribute(ue, ""), i.setAttribute(pe, "-1"));
                    }
                    const i = this.getSlide();
                    if (!i) return;
                    let n = i.downloadSrc || "";
                    n || "image" !== i.type || i.error || !ve(i[me]) || (n = i[me]);
                    for (const t of e.querySelectorAll("[data-fancybox-download]")) {
                        const e = i.downloadFilename;
                        n ? (t.removeAttribute(ue), t.removeAttribute(pe), t.setAttribute(ge, n), t.setAttribute(fe, e || n), 
                        t.setAttribute("target", "_blank")) : (t.setAttribute(ue, ""), t.setAttribute(pe, "-1"), 
                        t.removeAttribute(ge), t.removeAttribute(fe));
                    }
                })), this.emit("initCarousel");
            }
            attachEvents() {
                const t = this, e = t.container;
                if (!e) return;
                e.addEventListener("click", t.onClick, {
                    passive: !1,
                    capture: !1
                }), e.addEventListener("wheel", t.onWheel, {
                    passive: !1,
                    capture: !1
                }), document.addEventListener("keydown", t.onKeydown, {
                    passive: !1,
                    capture: !0
                }), document.addEventListener("visibilitychange", t.onVisibilityChange, !1), document.addEventListener("mousemove", t.onMousemove), 
                t.option("trapFocus") && document.addEventListener("focus", t.onFocus, !0), window.addEventListener("resize", t.onResize);
                const i = window.visualViewport;
                i && (i.addEventListener("scroll", t.onResize), i.addEventListener("resize", t.onResize));
            }
            detachEvents() {
                const t = this, e = t.container;
                if (!e) return;
                document.removeEventListener("keydown", t.onKeydown, {
                    passive: !1,
                    capture: !0
                }), e.removeEventListener("wheel", t.onWheel, {
                    passive: !1,
                    capture: !1
                }), e.removeEventListener("click", t.onClick, {
                    passive: !1,
                    capture: !1
                }), document.removeEventListener("mousemove", t.onMousemove), window.removeEventListener("resize", t.onResize);
                const i = window.visualViewport;
                i && (i.removeEventListener("resize", t.onResize), i.removeEventListener("scroll", t.onResize)), 
                document.removeEventListener("visibilitychange", t.onVisibilityChange, !1), document.removeEventListener("focus", t.onFocus, !0);
            }
            scale() {
                const t = this.container;
                if (!t) return;
                const e = window.visualViewport, i = Math.max(1, (null == e ? void 0 : e.scale) || 1);
                let n = "", s = "", o = "";
                if (e && i > 1) {
                    let t = `${e.offsetLeft}px`, a = `${e.offsetTop}px`;
                    n = e.width * i + "px", s = e.height * i + "px", o = `translate3d(${t}, ${a}, 0) scale(${1 / i})`;
                }
                t.style.transform = o, t.style.width = n, t.style.height = s;
            }
            onClick(t) {
                var e;
                const {container: i, isCompact: n} = this;
                if (!i || this.isClosing()) return;
                !n && this.option("idle") && this.resetIdle();
                const s = t.composedPath()[0];
                if (s.closest(".fancybox-spinner") || s.closest("[data-fancybox-close]")) return t.preventDefault(), 
                void this.close(t);
                if (s.closest("[data-fancybox-prev]")) return t.preventDefault(), void this.prev();
                if (s.closest("[data-fancybox-next]")) return t.preventDefault(), void this.next();
                if ("click" === t.type && 0 === t.detail) return;
                if (Math.abs(t.pageX - Ee) > 30 || Math.abs(t.pageY - Se) > 30) return;
                const o = document.activeElement;
                if (be() && o && i.contains(o)) return;
                if (n && "image" === (null === (e = this.getSlide()) || void 0 === e ? void 0 : e.type)) return void (this.clickTimer ? (clearTimeout(this.clickTimer), 
                this.clickTimer = null) : this.clickTimer = setTimeout((() => {
                    this.toggleIdle(), this.clickTimer = null;
                }), 350));
                if (this.emit("click", t), t.defaultPrevented) return;
                let a = !1;
                if (s.closest(".fancybox__content")) {
                    if (o) {
                        if (o.closest("[contenteditable]")) return;
                        s.matches(nt) || o.blur();
                    }
                    if (be()) return;
                    a = this.option("contentClick");
                } else s.closest(".fancybox__carousel") && !s.matches(nt) && (a = this.option("backdropClick"));
                "close" === a ? (t.preventDefault(), this.close(t)) : "next" === a ? (t.preventDefault(), 
                this.next()) : "prev" === a && (t.preventDefault(), this.prev());
            }
            onWheel(t) {
                const e = t.target;
                let n = this.option("wheel", t);
                e.closest(".fancybox__thumbs") && (n = "slide");
                const s = "slide" === n, o = [ -t.deltaX || 0, -t.deltaY || 0, -t.detail || 0 ].reduce((function(t, e) {
                    return Math.abs(e) > Math.abs(t) ? e : t;
                })), a = Math.max(-1, Math.min(1, o)), r = Date.now();
                this.pwt && r - this.pwt < 300 ? s && t.preventDefault() : (this.pwt = r, this.emit("wheel", t, a), 
                t.defaultPrevented || ("close" === n ? (t.preventDefault(), this.close(t)) : "slide" === n && (i(e) || (t.preventDefault(), 
                this[a > 0 ? "prev" : "next"]()))));
            }
            onScroll() {
                window.scrollTo(Pe, Ce);
            }
            onKeydown(t) {
                if (!this.isTopmost()) return;
                this.isCompact || !this.option("idle") || this.isClosing() || this.resetIdle();
                const e = t.key, i = this.option("keyboard");
                if (!i) return;
                const n = t.composedPath()[0], s = document.activeElement && document.activeElement.classList, o = s && s.contains("f-button") || n.dataset.carouselPage || n.dataset.carouselIndex;
                if ("Escape" !== e && !o && E(n)) if (n.isContentEditable || -1 !== [ "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO" ].indexOf(n.nodeName)) return;
                if ("Tab" === t.key ? P(this.container, ae) : S(this.container, ae), t.ctrlKey || t.altKey || t.shiftKey) return;
                this.emit("keydown", e, t);
                const a = i[e];
                a && "function" == typeof this[a] && (t.preventDefault(), this[a]());
            }
            onResize() {
                const t = this.container;
                if (!t) return;
                const e = this.isCompact;
                t.classList.toggle(le, e), this.manageCaption(this.getSlide()), this.isCompact ? this.clearIdle() : this.endIdle(), 
                this.scale(), this.emit("resize");
            }
            onFocus(t) {
                this.isTopmost() && this.checkFocus(t);
            }
            onMousemove(t) {
                this.prevMouseMoveEvent = t, !this.isCompact && this.option("idle") && this.resetIdle();
            }
            onVisibilityChange() {
                "visible" === document.visibilityState ? this.checkFocus() : this.endIdle();
            }
            manageCloseBtn(t) {
                const e = this.optionFor(t, "closeButton") || !1;
                if ("auto" === e) {
                    const t = this.plugins.Toolbar;
                    if (t && t.state === Zt.Ready) return;
                }
                if (!e) return;
                if (!t.contentEl || t.closeBtnEl) return;
                const i = this.option("tpl.closeButton");
                if (i) {
                    const e = n(this.localize(i));
                    t.closeBtnEl = t.contentEl.appendChild(e), t.el && P(t.el, "has-close-btn");
                }
            }
            manageCaption(t = void 0) {
                var e, i;
                const n = "fancybox__caption", s = this.container;
                if (!s) return;
                S(s, de);
                const o = this.isCompact || this.option("commonCaption"), a = !o;
                if (this.caption && this.stop(this.caption), a && this.caption && (this.caption.remove(), 
                this.caption = null), o && !this.caption) for (const t of (null === (e = this.carousel) || void 0 === e ? void 0 : e.slides) || []) t.captionEl && (t.captionEl.remove(), 
                t.captionEl = void 0, S(t.el, de), null === (i = t.el) || void 0 === i || i.removeAttribute("aria-labelledby"));
                if (t || (t = this.getSlide()), !t || o && !this.isCurrentSlide(t)) return;
                const r = t.el;
                let l = this.optionFor(t, "caption", "");
                if (!l) return void (o && this.caption && this.animate(this.caption, "f-fadeOut", (() => {
                    this.caption && (this.caption.innerHTML = "");
                })));
                let c = null;
                if (a) {
                    if (c = t.captionEl || null, r && !c) {
                        const e = n + `_${this.id}_${t.index}`;
                        c = document.createElement("div"), P(c, n), c.setAttribute("id", e), t.captionEl = r.appendChild(c), 
                        P(r, de), r.setAttribute("aria-labelledby", e);
                    }
                } else {
                    if (c = this.caption, c || (c = s.querySelector("." + n)), !c) {
                        c = document.createElement("div"), c.dataset.fancyboxCaption = "", P(c, n);
                        (this.footer || s).prepend(c);
                    }
                    P(s, de), this.caption = c;
                }
                c && (c.innerHTML = "", ve(l) || "number" == typeof l ? c.innerHTML = l + "" : l instanceof HTMLElement && c.appendChild(l));
            }
            checkFocus(t) {
                this.focus(t);
            }
            focus(t) {
                var e;
                if (this.ignoreFocusChange) return;
                const i = document.activeElement || null, n = (null == t ? void 0 : t.target) || null, s = this.container, o = null === (e = this.carousel) || void 0 === e ? void 0 : e.viewport;
                if (!s || !o) return;
                if (!t && i && s.contains(i)) return;
                const a = this.getSlide(), r = a && a.state === lt.Ready ? a.el : null;
                if (!r || r.contains(i) || s === i) return;
                t && t.cancelable && t.preventDefault(), this.ignoreFocusChange = !0;
                const l = Array.from(s.querySelectorAll(nt));
                let c = [], h = null;
                for (let t of l) {
                    const e = !t.offsetParent || !!t.closest('[aria-hidden="true"]'), i = r && r.contains(t), n = !o.contains(t);
                    if (t === s || (i || n) && !e) {
                        c.push(t);
                        const e = t.dataset.origTabindex;
                        void 0 !== e && e && (t.tabIndex = parseFloat(e)), t.removeAttribute("data-orig-tabindex"), 
                        !t.hasAttribute("autoFocus") && h || (h = t);
                    } else {
                        const e = void 0 === t.dataset.origTabindex ? t.getAttribute("tabindex") || "" : t.dataset.origTabindex;
                        e && (t.dataset.origTabindex = e), t.tabIndex = -1;
                    }
                }
                let d = null;
                t ? (!n || c.indexOf(n) < 0) && (d = h || s, c.length && (i === xe ? d = c[0] : this.lastFocus !== s && i !== we || (d = c[c.length - 1]))) : d = a && "image" === a.type ? s : h || s, 
                d && st(d), this.lastFocus = document.activeElement, this.ignoreFocusChange = !1;
            }
            next() {
                const t = this.carousel;
                t && t.pages.length > 1 && t.slideNext();
            }
            prev() {
                const t = this.carousel;
                t && t.pages.length > 1 && t.slidePrev();
            }
            jumpTo(...t) {
                this.carousel && this.carousel.slideTo(...t);
            }
            isTopmost() {
                var t;
                return (null === (t = Oe.getInstance()) || void 0 === t ? void 0 : t.id) == this.id;
            }
            animate(t = null, e = "", i) {
                if (!t || !e) return void (i && i());
                this.stop(t);
                const n = s => {
                    s.target === t && t.dataset.animationName && (t.removeEventListener("animationend", n), 
                    delete t.dataset.animationName, i && i(), S(t, e));
                };
                t.dataset.animationName = e, t.addEventListener("animationend", n), P(t, e);
            }
            stop(t) {
                t && t.dispatchEvent(new CustomEvent("animationend", {
                    bubbles: !1,
                    cancelable: !0,
                    currentTarget: t
                }));
            }
            setContent(t, e = "", i = !0) {
                if (this.isClosing()) return;
                const s = t.el;
                if (!s) return;
                let o = null;
                if (E(e) ? o = e : (o = n(e + ""), E(o) || (o = document.createElement("div"), o.innerHTML = e + "")), 
                [ "img", "picture", "iframe", "video", "audio" ].includes(o.nodeName.toLowerCase())) {
                    const t = document.createElement("div");
                    t.appendChild(o), o = t;
                }
                E(o) && t.filter && !t.error && (o = o.querySelector(t.filter)), o && E(o) ? (P(o, "fancybox__content"), 
                t.id && o.setAttribute("id", t.id), s.classList.add(`has-${t.error ? "error" : t.type || "unknown"}`), 
                s.prepend(o), "none" === o.style.display && (o.style.display = ""), "none" === getComputedStyle(o).getPropertyValue("display") && (o.style.display = t.display || this.option("defaultDisplay") || "flex"), 
                t.contentEl = o, i && this.revealContent(t), this.manageCloseBtn(t), this.manageCaption(t)) : this.setError(t, "{{ELEMENT_NOT_FOUND}}");
            }
            revealContent(t, e) {
                const i = t.el, n = t.contentEl;
                i && n && (this.emit("reveal", t), this.hideLoading(t), t.state = lt.Opening, (e = this.isOpeningSlide(t) ? void 0 === e ? this.optionFor(t, "showClass") : e : "f-fadeIn") ? this.animate(n, e, (() => {
                    this.done(t);
                })) : this.done(t));
            }
            done(t) {
                this.isClosing() || (t.state = lt.Ready, this.emit("done", t), P(t.el, "is-done"), 
                this.isCurrentSlide(t) && this.option("autoFocus") && queueMicrotask((() => {
                    var e;
                    null === (e = t.panzoom) || void 0 === e || e.updateControls(), this.option("autoFocus") && this.focus();
                })), this.isOpeningSlide(t) && (S(this.container, he), !this.isCompact && this.option("idle") && this.setIdle()));
            }
            isCurrentSlide(t) {
                const e = this.getSlide();
                return !(!t || !e) && e.index === t.index;
            }
            isOpeningSlide(t) {
                var e, i;
                return null === (null === (e = this.carousel) || void 0 === e ? void 0 : e.prevPage) && t && t.index === (null === (i = this.getSlide()) || void 0 === i ? void 0 : i.index);
            }
            showLoading(t) {
                t.state = lt.Loading;
                const e = t.el;
                if (!e) return;
                P(e, ce), this.emit("loading", t), t.spinnerEl || setTimeout((() => {
                    if (!this.isClosing() && !t.spinnerEl && t.state === lt.Loading) {
                        let i = n(x);
                        P(i, "fancybox-spinner"), t.spinnerEl = i, e.prepend(i), this.animate(i, "f-fadeIn");
                    }
                }), 250);
            }
            hideLoading(t) {
                const e = t.el;
                if (!e) return;
                const i = t.spinnerEl;
                this.isClosing() ? null == i || i.remove() : (S(e, ce), i && this.animate(i, "f-fadeOut", (() => {
                    i.remove();
                })), t.state === lt.Loading && (this.emit("loaded", t), t.state = lt.Ready));
            }
            setError(t, e) {
                if (this.isClosing()) return;
                const i = new Event("error", {
                    bubbles: !0,
                    cancelable: !0
                });
                if (this.emit("error", i, t), i.defaultPrevented) return;
                t.error = e, this.hideLoading(t), this.clearContent(t);
                const n = document.createElement("div");
                n.classList.add("fancybox-error"), n.innerHTML = this.localize(e || "<p>{{ERROR}}</p>"), 
                this.setContent(t, n);
            }
            clearContent(t) {
                if (void 0 === t.state) return;
                this.emit("clearContent", t), t.contentEl && (t.contentEl.remove(), t.contentEl = void 0);
                const e = t.el;
                e && (S(e, "has-error"), S(e, "has-unknown"), S(e, `has-${t.type || "unknown"}`)), 
                t.closeBtnEl && t.closeBtnEl.remove(), t.closeBtnEl = void 0, t.captionEl && t.captionEl.remove(), 
                t.captionEl = void 0, t.spinnerEl && t.spinnerEl.remove(), t.spinnerEl = void 0;
            }
            getSlide() {
                var t;
                const e = this.carousel;
                return (null === (t = null == e ? void 0 : e.pages[null == e ? void 0 : e.page]) || void 0 === t ? void 0 : t.slides[0]) || void 0;
            }
            close(t, e) {
                if (this.isClosing()) return;
                const i = new Event("shouldClose", {
                    bubbles: !0,
                    cancelable: !0
                });
                if (this.emit("shouldClose", i, t), i.defaultPrevented) return;
                t && t.cancelable && (t.preventDefault(), t.stopPropagation());
                const n = () => {
                    this.proceedClose(t, e);
                };
                this.startedFs && ye && ye.isFullscreen() ? Promise.resolve(ye.exit()).then((() => n())) : n();
            }
            clearIdle() {
                this.idleTimer && clearTimeout(this.idleTimer), this.idleTimer = null;
            }
            setIdle(t = !1) {
                const e = () => {
                    this.clearIdle(), this.idle = !0, P(this.container, "is-idle"), this.emit("setIdle");
                };
                if (this.clearIdle(), !this.isClosing()) if (t) e(); else {
                    const t = this.option("idle");
                    t && (this.idleTimer = setTimeout(e, t));
                }
            }
            endIdle() {
                this.clearIdle(), this.idle && !this.isClosing() && (this.idle = !1, S(this.container, "is-idle"), 
                this.emit("endIdle"));
            }
            resetIdle() {
                this.endIdle(), this.setIdle();
            }
            toggleIdle() {
                this.idle ? this.endIdle() : this.setIdle(!0);
            }
            toggleFullscreen() {
                ye && (ye.isFullscreen() ? ye.exit() : ye.request().then((() => {
                    this.startedFs = !0;
                })));
            }
            isClosing() {
                return [ rt.Closing, rt.CustomClosing, rt.Destroy ].includes(this.state);
            }
            proceedClose(t, e) {
                var i, n;
                this.state = rt.Closing, this.clearIdle(), this.detachEvents();
                const s = this.container, o = this.carousel, a = this.getSlide(), r = a && this.option("placeFocusBack") ? a.triggerEl || this.option("triggerEl") : null;
                if (r && (tt(r) ? st(r) : r.focus()), s && (S(s, he), P(s, "is-closing"), s.setAttribute(oe, "true"), 
                this.option("animated") && P(s, re), s.style.pointerEvents = "none"), o) {
                    o.clearTransitions(), null === (i = o.panzoom) || void 0 === i || i.destroy(), null === (n = o.plugins.Navigation) || void 0 === n || n.detach();
                    for (const t of o.slides) {
                        t.state = lt.Closing, this.hideLoading(t);
                        const e = t.contentEl;
                        e && this.stop(e);
                        const i = null == t ? void 0 : t.panzoom;
                        i && (i.stop(), i.detachEvents(), i.detachObserver()), this.isCurrentSlide(t) || o.emit("removeSlide", t);
                    }
                }
                Pe = window.scrollX, Ce = window.scrollY, window.addEventListener("scroll", this.onScroll), 
                this.emit("close", t), this.state !== rt.CustomClosing ? (void 0 === e && a && (e = this.optionFor(a, "hideClass")), 
                e && a ? (this.animate(a.contentEl, e, (() => {
                    o && o.emit("removeSlide", a);
                })), setTimeout((() => {
                    this.destroy();
                }), 500)) : this.destroy()) : setTimeout((() => {
                    this.destroy();
                }), 500);
            }
            destroy() {
                var t;
                if (this.state === rt.Destroy) return;
                window.removeEventListener("scroll", this.onScroll), this.state = rt.Destroy, null === (t = this.carousel) || void 0 === t || t.destroy();
                const e = this.container;
                e && e.remove(), Te.delete(this.id);
                const i = Oe.getInstance();
                i ? i.focus() : (we && (we.remove(), we = null), xe && (xe.remove(), xe = null), 
                S(document.documentElement, ee), (() => {
                    if (!et) return;
                    const t = document, e = t.body;
                    e.classList.remove(ie), e.style.setProperty(se, ""), t.documentElement.style.setProperty(ne, "");
                })(), this.emit("destroy"));
            }
            static bind(t, e, i) {
                if (!et) return;
                let n, s = "", o = {};
                if (void 0 === t ? n = document.body : ve(t) ? (n = document.body, s = t, "object" == typeof e && (o = e || {})) : (n = t, 
                ve(e) && (s = e), "object" == typeof i && (o = i || {})), !n || !E(n)) return;
                s = s || "[data-fancybox]";
                const a = Oe.openers.get(n) || new Map;
                a.set(s, o), Oe.openers.set(n, a), 1 === a.size && n.addEventListener("click", Oe.fromEvent);
            }
            static unbind(t, e) {
                let i, n = "";
                if (ve(t) ? (i = document.body, n = t) : (i = t, ve(e) && (n = e)), !i) return;
                const s = Oe.openers.get(i);
                s && n && s.delete(n), n && s || (Oe.openers.delete(i), i.removeEventListener("click", Oe.fromEvent));
            }
            static destroy() {
                let t;
                for (;t = Oe.getInstance(); ) t.destroy();
                for (const t of Oe.openers.keys()) t.removeEventListener("click", Oe.fromEvent);
                Oe.openers = new Map;
            }
            static fromEvent(t) {
                if (t.defaultPrevented) return;
                if (t.button && 0 !== t.button) return;
                if (t.ctrlKey || t.metaKey || t.shiftKey) return;
                let e = t.composedPath()[0];
                const i = e.closest("[data-fancybox-trigger]");
                if (i) {
                    const t = i.dataset.fancyboxTrigger || "", n = document.querySelectorAll(`[data-fancybox="${t}"]`), s = parseInt(i.dataset.fancyboxIndex || "", 10) || 0;
                    e = n[s] || e;
                }
                if (!(e && e instanceof Element)) return;
                let n, s, o, a;
                if ([ ...Oe.openers ].reverse().find((([t, i]) => !(!t.contains(e) || ![ ...i ].reverse().find((([i, r]) => {
                    let l = e.closest(i);
                    return !!l && (n = t, s = i, o = l, a = r, !0);
                }))))), !n || !s || !o) return;
                a = a || {}, t.preventDefault(), e = o;
                let r = [], l = u({}, at, a);
                l.event = t, l.triggerEl = e, l.delegate = i;
                const c = l.groupAll, h = l.groupAttr, d = h && e ? e.getAttribute(`${h}`) : "";
                if ((!e || d || c) && (r = [].slice.call(n.querySelectorAll(s))), e && !c && (r = d ? r.filter((t => t.getAttribute(`${h}`) === d)) : [ e ]), 
                !r.length) return;
                const p = Oe.getInstance();
                return p && p.options.triggerEl && r.indexOf(p.options.triggerEl) > -1 ? void 0 : (e && (l.startIndex = r.indexOf(e)), 
                Oe.fromNodes(r, l));
            }
            static fromSelector(t, e, i) {
                let n = null, s = "", o = {};
                if (ve(t) ? (n = document.body, s = t, "object" == typeof e && (o = e || {})) : t instanceof HTMLElement && ve(e) && (n = t, 
                s = e, "object" == typeof i && (o = i || {})), !n || !s) return !1;
                const a = Oe.openers.get(n);
                return !!a && (o = u({}, a.get(s) || {}, o), !!o && Oe.fromNodes(Array.from(n.querySelectorAll(s)), o));
            }
            static fromNodes(t, e) {
                e = u({}, at, e || {});
                const i = [];
                for (const n of t) {
                    const t = n.dataset || {}, s = t[me] || n.getAttribute(ge) || n.getAttribute("currentSrc") || n.getAttribute(me) || void 0;
                    let o;
                    const a = e.delegate;
                    let r;
                    a && i.length === e.startIndex && (o = a instanceof HTMLImageElement ? a : a.querySelector("img:not([aria-hidden])")), 
                    o || (o = n instanceof HTMLImageElement ? n : n.querySelector("img:not([aria-hidden])")), 
                    o && (r = o.currentSrc || o[me] || void 0, !r && o.dataset && (r = o.dataset.lazySrc || o.dataset[me] || void 0));
                    const l = {
                        src: s,
                        triggerEl: n,
                        thumbEl: o,
                        thumbElSrc: r,
                        thumbSrc: r
                    };
                    for (const e in t) {
                        let i = t[e] + "";
                        i = "false" !== i && ("true" === i || i), l[e] = i;
                    }
                    i.push(l);
                }
                return new Oe(i, e);
            }
            static getInstance(t) {
                if (t) return Te.get(t);
                return Array.from(Te.values()).reverse().find((t => !t.isClosing() && t)) || null;
            }
            static getSlide() {
                var t;
                return (null === (t = Oe.getInstance()) || void 0 === t ? void 0 : t.getSlide()) || null;
            }
            static show(t = [], e = {}) {
                return new Oe(t, e);
            }
            static next() {
                const t = Oe.getInstance();
                t && t.next();
            }
            static prev() {
                const t = Oe.getInstance();
                t && t.prev();
            }
            static close(t = !0, ...e) {
                if (t) for (const t of Te.values()) t.close(...e); else {
                    const t = Oe.getInstance();
                    t && t.close(...e);
                }
            }
        }
        Object.defineProperty(Oe, "version", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "5.0.36"
        }), Object.defineProperty(Oe, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: at
        }), Object.defineProperty(Oe, "Plugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: te
        }), Object.defineProperty(Oe, "openers", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: new Map
        });
        Oe.bind('[data-fancybox="gallery"]');
        let gotoblock_gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
            const targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                let headerItem = "";
                let headerItemHeight = 0;
                if (noHeader) {
                    headerItem = "header.header";
                    const headerElement = document.querySelector(headerItem);
                    if (!headerElement.classList.contains("_header-scroll")) {
                        headerElement.style.cssText = `transition-duration: 0s;`;
                        headerElement.classList.add("_header-scroll");
                        headerItemHeight = headerElement.offsetHeight;
                        headerElement.classList.remove("_header-scroll");
                        setTimeout((() => {
                            headerElement.style.cssText = ``;
                        }), 0);
                    } else headerItemHeight = headerElement.offsetHeight;
                }
                let options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? functions_menuClose() : null;
                if (typeof SmoothScroll !== "undefined") (new SmoothScroll).animateScroll(targetBlockElement, "", options); else {
                    let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                }
                FLS(`[gotoBlock]: Юхуу...їдемо до ${targetBlock}`);
            } else FLS(`[gotoBlock]: Йой... Такого блоку немає на сторінці: ${targetBlock}`);
        };
        let formValidate = {
            getErrors(form) {
                let error = 0;
                let formRequiredItems = form.querySelectorAll("*[data-required]");
                if (formRequiredItems.length) formRequiredItems.forEach((formRequiredItem => {
                    if ((formRequiredItem.offsetParent !== null || formRequiredItem.tagName === "SELECT") && !formRequiredItem.disabled) error += this.validateInput(formRequiredItem);
                }));
                return error;
            },
            validateInput(formRequiredItem) {
                let error = 0;
                if (formRequiredItem.dataset.required === "email") {
                    formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                    if (this.emailTest(formRequiredItem)) {
                        this.addError(formRequiredItem);
                        error++;
                    } else this.removeError(formRequiredItem);
                } else if (formRequiredItem.type === "checkbox" && !formRequiredItem.checked) {
                    this.addError(formRequiredItem);
                    error++;
                } else if (!formRequiredItem.value.trim()) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem);
                return error;
            },
            addError(formRequiredItem) {
                formRequiredItem.classList.add("_form-error");
                formRequiredItem.parentElement.classList.add("_form-error");
                let inputError = formRequiredItem.parentElement.querySelector(".form__error");
                if (inputError) formRequiredItem.parentElement.removeChild(inputError);
                if (formRequiredItem.dataset.error) formRequiredItem.parentElement.insertAdjacentHTML("beforeend", `<div class="form__error">${formRequiredItem.dataset.error}</div>`);
            },
            removeError(formRequiredItem) {
                formRequiredItem.classList.remove("_form-error");
                formRequiredItem.parentElement.classList.remove("_form-error");
                if (formRequiredItem.parentElement.querySelector(".form__error")) formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error"));
            },
            formClean(form) {
                form.reset();
                setTimeout((() => {
                    let inputs = form.querySelectorAll("input,textarea");
                    for (let index = 0; index < inputs.length; index++) {
                        const el = inputs[index];
                        el.parentElement.classList.remove("_form-focus");
                        el.classList.remove("_form-focus");
                        formValidate.removeError(el);
                    }
                    let checkboxes = form.querySelectorAll(".checkbox__input");
                    if (checkboxes.length > 0) for (let index = 0; index < checkboxes.length; index++) {
                        const checkbox = checkboxes[index];
                        checkbox.checked = false;
                    }
                    if (modules_flsModules.select) {
                        let selects = form.querySelectorAll("div.select");
                        if (selects.length) for (let index = 0; index < selects.length; index++) {
                            const select = selects[index].querySelector("select");
                            modules_flsModules.select.selectBuild(select);
                        }
                    }
                }), 0);
            },
            emailTest(formRequiredItem) {
                return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
            }
        };
        function formSubmit() {
            const forms = document.forms;
            if (forms.length) for (const form of forms) {
                form.addEventListener("submit", (function(e) {
                    const form = e.target;
                    formSubmitAction(form, e);
                }));
                form.addEventListener("reset", (function(e) {
                    const form = e.target;
                    formValidate.formClean(form);
                }));
            }
            async function formSubmitAction(form, e) {
                const error = !form.hasAttribute("data-no-validate") ? formValidate.getErrors(form) : 0;
                if (error === 0) {
                    const ajax = form.hasAttribute("data-ajax");
                    if (ajax) {
                        e.preventDefault();
                        const formAction = form.getAttribute("action") ? form.getAttribute("action").trim() : "#";
                        const formMethod = form.getAttribute("method") ? form.getAttribute("method").trim() : "GET";
                        const formData = new FormData(form);
                        form.classList.add("_sending");
                        const response = await fetch(formAction, {
                            method: formMethod,
                            body: formData
                        });
                        if (response.ok) {
                            let responseResult = await response.json();
                            form.classList.remove("_sending");
                            formSent(form, responseResult);
                        } else {
                            alert("Помилка");
                            form.classList.remove("_sending");
                        }
                    } else if (form.hasAttribute("data-dev")) {
                        e.preventDefault();
                        formSent(form);
                    }
                } else {
                    e.preventDefault();
                    if (form.querySelector("._form-error") && form.hasAttribute("data-goto-error")) {
                        const formGoToErrorClass = form.dataset.gotoError ? form.dataset.gotoError : "._form-error";
                        gotoblock_gotoBlock(formGoToErrorClass, true, 1e3);
                    }
                }
            }
            function formSent(form, responseResult = ``) {
                document.dispatchEvent(new CustomEvent("formSent", {
                    detail: {
                        form
                    }
                }));
                setTimeout((() => {
                    if (modules_flsModules.popup) {
                        const popup = form.dataset.popupMessage;
                        popup ? modules_flsModules.popup.open(popup) : null;
                    }
                }), 0);
                formValidate.formClean(form);
                formLogging(`Форму відправлено!`);
            }
            function formLogging(message) {
                FLS(`[Форми]: ${message}`);
            }
        }
        function formRating() {
            const ratings = document.querySelectorAll("[data-rating]");
            if (ratings) ratings.forEach((rating => {
                const ratingValue = +rating.dataset.ratingValue;
                const ratingSize = +rating.dataset.ratingSize ? +rating.dataset.ratingSize : 5;
                formRatingInit(rating, ratingSize);
                ratingValue ? formRatingSet(rating, ratingValue) : null;
                document.addEventListener("click", formRatingAction);
            }));
            function formRatingAction(e) {
                const targetElement = e.target;
                if (targetElement.closest(".rating__input")) {
                    const currentElement = targetElement.closest(".rating__input");
                    const ratingValue = +currentElement.value;
                    const rating = currentElement.closest(".rating");
                    const ratingSet = rating.dataset.rating === "set";
                    ratingSet ? formRatingGet(rating, ratingValue) : null;
                }
            }
            function formRatingInit(rating, ratingSize) {
                let ratingItems = ``;
                for (let index = 0; index < ratingSize; index++) {
                    index === 0 ? ratingItems += `<div class="rating__items">` : null;
                    ratingItems += `\n\t\t\t\t<label class="rating__item">\n\t\t\t\t\t<input class="rating__input" type="radio" name="rating" value="${index + 1}">\n\t\t\t\t</label>`;
                    index === ratingSize ? ratingItems += `</div">` : null;
                }
                rating.insertAdjacentHTML("beforeend", ratingItems);
            }
            function formRatingGet(rating, ratingValue) {
                const resultRating = ratingValue;
                formRatingSet(rating, resultRating);
            }
            function formRatingSet(rating, value) {
                const ratingItems = rating.querySelectorAll(".rating__item");
                const resultFullItems = parseInt(value);
                const resultPartItem = value - resultFullItems;
                rating.hasAttribute("data-rating-title") ? rating.title = value : null;
                ratingItems.forEach(((ratingItem, index) => {
                    ratingItem.classList.remove("rating__item--active");
                    ratingItem.querySelector("span") ? ratingItems[index].querySelector("span").remove() : null;
                    if (index <= resultFullItems - 1) ratingItem.classList.add("rating__item--active");
                    if (index === resultFullItems && resultPartItem) ratingItem.insertAdjacentHTML("beforeend", `<span style="width:${resultPartItem * 100}%"></span>`);
                }));
            }
        }
        __webpack_require__(958);
        const inputMasks = document.querySelectorAll('input[type="tel"]');
        if (inputMasks.length) modules_flsModules.inputmask = Inputmask("+48 (999) 999-99-99", {
            placeholderVisible: true
        }).mask(inputMasks);
        function ssr_window_esm_isObject(obj) {
            return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target, src) {
            if (target === void 0) target = {};
            if (src === void 0) src = {};
            Object.keys(src).forEach((key => {
                if (typeof target[key] === "undefined") target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = typeof document !== "undefined" ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if (typeof setTimeout === "undefined") {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if (typeof setTimeout === "undefined") return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = typeof window !== "undefined" ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function utils_classesToTokens(classes) {
            if (classes === void 0) classes = "";
            return classes.trim().split(" ").filter((c => !!c.trim()));
        }
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay) {
            if (delay === void 0) delay = 0;
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis) {
            if (axis === void 0) axis = "x";
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if (axis === "x") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if (axis === "y") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
        }
        function isNode(node) {
            if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
            return node && (node.nodeType === 1 || node.nodeType === 11);
        }
        function utils_extend() {
            const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < arguments.length; i += 1) {
                const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== void 0 && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll(_ref) {
            let {swiper, targetPosition, side} = _ref;
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => dir === "next" && current >= target || dir === "prev" && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (startTime === null) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        function utils_elementChildren(element, selector) {
            if (selector === void 0) selector = "";
            const children = [ ...element.children ];
            if (element instanceof HTMLSlotElement) children.push(...element.assignedElements());
            if (!selector) return children;
            return children.filter((el => el.matches(selector)));
        }
        function elementIsChildOf(el, parent) {
            const isChild = parent.contains(el);
            if (!isChild && parent instanceof HTMLSlotElement) {
                const children = [ ...parent.assignedElements() ];
                return children.includes(el);
            }
            return isChild;
        }
        function showWarning(text) {
            try {
                console.warn(text);
                return;
            } catch (err) {}
        }
        function utils_createElement(tag, classes) {
            if (classes === void 0) classes = [];
            const el = document.createElement(tag);
            el.classList.add(...Array.isArray(classes) ? classes : utils_classesToTokens(classes));
            return el;
        }
        function elementPrevAll(el, selector) {
            const prevEls = [];
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (prev.matches(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return prevEls;
        }
        function elementNextAll(el, selector) {
            const nextEls = [];
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (next.matches(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return nextEls;
        }
        function elementStyle(el, prop) {
            const window = ssr_window_esm_getWindow();
            return window.getComputedStyle(el, null).getPropertyValue(prop);
        }
        function utils_elementIndex(el) {
            let child = el;
            let i;
            if (child) {
                i = 0;
                while ((child = child.previousSibling) !== null) if (child.nodeType === 1) i += 1;
                return i;
            }
            return;
        }
        function utils_elementParents(el, selector) {
            const parents = [];
            let parent = el.parentElement;
            while (parent) {
                if (selector) {
                    if (parent.matches(selector)) parents.push(parent);
                } else parents.push(parent);
                parent = parent.parentElement;
            }
            return parents;
        }
        function utils_elementOuterSize(el, size, includeMargins) {
            const window = ssr_window_esm_getWindow();
            if (includeMargins) return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
            return el.offsetWidth;
        }
        function utils_makeElementsArray(el) {
            return (Array.isArray(el) ? el : [ el ]).filter((e => !!e));
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && document.documentElement.style && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice(_temp) {
            let {userAgent} = _temp === void 0 ? {} : _temp;
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = platform === "Win32";
            let macos = platform === "MacIntel";
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides) {
            if (overrides === void 0) overrides = {};
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            const device = getDevice();
            let needPerspectiveFix = false;
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            if (isSafari()) {
                const ua = String(window.navigator.userAgent);
                if (ua.includes("Version/")) {
                    const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num => Number(num)));
                    needPerspectiveFix = major < 16 || major === 16 && minor < 2;
                }
            }
            const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent);
            const isSafariBrowser = isSafari();
            const need3dFix = isSafariBrowser || isWebView && device.ios;
            return {
                isSafari: needPerspectiveFix || isSafariBrowser,
                needPerspectiveFix,
                need3dFix,
                isWebView
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize(_ref) {
            let {swiper, on, emit} = _ref;
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((_ref2 => {
                            let {contentBoxSize, contentRect, target} = _ref2;
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = function(target, options) {
                if (options === void 0) options = {};
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (swiper.__preventObserver__) return;
                    if (mutations.length === 1) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: typeof options.attributes === "undefined" ? true : options.attributes,
                    childList: swiper.isElement || (typeof options.childList === "undefined" ? true : options).childList,
                    characterData: typeof options.characterData === "undefined" ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = utils_elementParents(swiper.hostEl);
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.hostEl, {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.wrapperEl, {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        var eventsEmitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                function onceHandler() {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if (typeof handler === "undefined") self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit() {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                if (typeof args[0] === "string" || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const el = swiper.el;
            if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width; else width = el.clientWidth;
            if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height; else height = el.clientHeight;
            if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
            width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
            height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {wrapperEl, slidesEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = utils_elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if (typeof swiperSize === "undefined") return;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            swiper.virtualSize = -spaceBetween;
            slides.forEach((slideEl => {
                if (rtl) slideEl.style.marginLeft = ""; else slideEl.style.marginRight = "";
                slideEl.style.marginBottom = "";
                slideEl.style.marginTop = "";
            }));
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slides); else if (swiper.grid) swiper.grid.unsetSlides();
            let slideSize;
            const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key => typeof params.breakpoints[key].slidesPerView !== "undefined")).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                let slide;
                if (slides[i]) slide = slides[i];
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slides);
                if (slides[i] && elementStyle(slide, "display") === "none") continue;
                if (params.slidesPerView === "auto") {
                    if (shouldResetSlideSize) slides[i].style[swiper.getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide);
                    const currentTransform = slide.style.transform;
                    const currentWebKitTransform = slide.style.webkitTransform;
                    if (currentTransform) slide.style.transform = "none";
                    if (currentWebKitTransform) slide.style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? utils_elementOuterSize(slide, "width", true) : utils_elementOuterSize(slide, "height", true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide;
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide.style.transform = currentTransform;
                    if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
            if (params.setWrapperSize) wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (isVirtual && params.loop) {
                const size = slidesSizesGrid[0] + spaceBetween;
                if (params.slidesPerGroup > 1) {
                    const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
                    const groupSize = size * params.slidesPerGroup;
                    for (let i = 0; i < groups; i += 1) snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
                }
                for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
                    if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
                    slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
                    swiper.virtualSize += size;
                }
            }
            if (snapGrid.length === 0) snapGrid = [ 0 ];
            if (spaceBetween !== 0) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode || params.loop) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).forEach((slideEl => {
                    slideEl.style[key] = `${spaceBetween}px`;
                }));
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap <= 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                const offsetSize = (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0);
                if (allSlidesSize + offsetSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            swiper.emit("slidesUpdated");
            if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if (typeof speed === "number") swiper.setTransition(speed); else if (speed === true) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides[swiper.getSlideIndexByData(index)];
                return swiper.slides[index];
            };
            if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if (typeof activeSlides[i] !== "undefined") {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
        }
        const toggleSlideClasses$1 = (slideEl, condition, className) => {
            if (condition && !slideEl.classList.contains(className)) slideEl.classList.add(className); else if (!condition && slideEl.classList.contains(className)) slideEl.classList.remove(className);
        };
        function updateSlidesProgress(translate) {
            if (translate === void 0) translate = this && this.translate || 0;
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (slides.length === 0) return;
            if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            let spaceBetween = params.spaceBetween;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                }
                toggleSlideClasses$1(slide, isVisible, params.slideVisibleClass);
                toggleSlideClasses$1(slide, isFullyVisible, params.slideFullyVisibleClass);
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
        }
        function updateProgress(translate) {
            const swiper = this;
            if (typeof translate === "undefined") {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd, progressLoop} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (translatesDiff === 0) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
                const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
                isBeginning = isBeginningRounded || progress <= 0;
                isEnd = isEndRounded || progress >= 1;
                if (isBeginningRounded) progress = 0;
                if (isEndRounded) progress = 1;
            }
            if (params.loop) {
                const firstSlideIndex = swiper.getSlideIndexByData(0);
                const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
                const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
                const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
                const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
                const translateAbs = Math.abs(translate);
                if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax; else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
                if (progressLoop > 1) progressLoop -= 1;
            }
            Object.assign(swiper, {
                progress,
                progressLoop,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        const toggleSlideClasses = (slideEl, condition, className) => {
            if (condition && !slideEl.classList.contains(className)) slideEl.classList.add(className); else if (!condition && slideEl.classList.contains(className)) slideEl.classList.remove(className);
        };
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, slidesEl, activeIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            const getFilteredSlide = selector => utils_elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
            let activeSlide;
            let prevSlide;
            let nextSlide;
            if (isVirtual) if (params.loop) {
                let slideIndex = activeIndex - swiper.virtual.slidesBefore;
                if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
                if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
                activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
            } else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`); else if (gridEnabled) {
                activeSlide = slides.filter((slideEl => slideEl.column === activeIndex))[0];
                nextSlide = slides.filter((slideEl => slideEl.column === activeIndex + 1))[0];
                prevSlide = slides.filter((slideEl => slideEl.column === activeIndex - 1))[0];
            } else activeSlide = slides[activeIndex];
            if (activeSlide) if (!gridEnabled) {
                nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !nextSlide) nextSlide = slides[0];
                prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !prevSlide === 0) prevSlide = slides[slides.length - 1];
            }
            slides.forEach((slideEl => {
                toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
                toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
                toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
            }));
            swiper.emitSlidesClasses();
        }
        const processLazyPreloader = (swiper, imageEl) => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
            const slideEl = imageEl.closest(slideSelector());
            if (slideEl) {
                let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                if (!lazyEl && swiper.isElement) if (slideEl.shadowRoot) lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`); else requestAnimationFrame((() => {
                    if (slideEl.shadowRoot) {
                        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                        if (lazyEl) lazyEl.remove();
                    }
                }));
                if (lazyEl) lazyEl.remove();
            }
        };
        const unlazy = (swiper, index) => {
            if (!swiper.slides[index]) return;
            const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
            if (imageEl) imageEl.removeAttribute("loading");
        };
        const preload = swiper => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            let amount = swiper.params.lazyPreloadPrevNext;
            const len = swiper.slides.length;
            if (!len || !amount || amount < 0) return;
            amount = Math.min(amount, len);
            const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
            const activeIndex = swiper.activeIndex;
            if (swiper.params.grid && swiper.params.grid.rows > 1) {
                const activeColumn = activeIndex;
                const preloadColumns = [ activeColumn - amount ];
                preloadColumns.push(...Array.from({
                    length: amount
                }).map(((_, i) => activeColumn + slidesPerView + i)));
                swiper.slides.forEach(((slideEl, i) => {
                    if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
                }));
                return;
            }
            const slideIndexLastInView = activeIndex + slidesPerView - 1;
            if (swiper.params.rewind || swiper.params.loop) for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
                const realIndex = (i % len + len) % len;
                if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
            } else for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) unlazy(swiper, i);
        };
        function getActiveIndexByTranslate(swiper) {
            const {slidesGrid, params} = swiper;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            let activeIndex;
            for (let i = 0; i < slidesGrid.length; i += 1) if (typeof slidesGrid[i + 1] !== "undefined") {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
            } else if (translate >= slidesGrid[i]) activeIndex = i;
            if (params.normalizeSlideIndex) if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
            return activeIndex;
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            const getVirtualRealIndex = aIndex => {
                let realIndex = aIndex - swiper.virtual.slidesBefore;
                if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
                if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
                return realIndex;
            };
            if (typeof activeIndex === "undefined") activeIndex = getActiveIndexByTranslate(swiper);
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex && !swiper.params.loop) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                return;
            }
            if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
                swiper.realIndex = getVirtualRealIndex(activeIndex);
                return;
            }
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            let realIndex;
            if (swiper.virtual && params.virtual.enabled && params.loop) realIndex = getVirtualRealIndex(activeIndex); else if (gridEnabled) {
                const firstSlideInColumn = swiper.slides.filter((slideEl => slideEl.column === activeIndex))[0];
                let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
                if (Number.isNaN(activeSlideIndex)) activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
                realIndex = Math.floor(activeSlideIndex / params.grid.rows);
            } else if (swiper.slides[activeIndex]) {
                const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
                if (slideIndex) realIndex = parseInt(slideIndex, 10); else realIndex = activeIndex;
            } else realIndex = activeIndex;
            Object.assign(swiper, {
                previousSnapIndex,
                snapIndex,
                previousRealIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            if (swiper.initialized) preload(swiper);
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) {
                if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
                swiper.emit("slideChange");
            }
        }
        function updateClickedSlide(el, path) {
            const swiper = this;
            const params = swiper.params;
            let slide = el.closest(`.${params.slideClass}, swiper-slide`);
            if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) [ ...path.slice(path.indexOf(el) + 1, path.length) ].forEach((pathEl => {
                if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) slide = pathEl;
            }));
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        var update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis) {
            if (axis === void 0) axis = this.isHorizontal() ? "x" : "y";
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate(wrapperEl, axis);
            currentTranslate += swiper.cssOverflowAdjustment();
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) {
                if (swiper.isHorizontal()) x -= swiper.cssOverflowAdjustment(); else y -= swiper.cssOverflowAdjustment();
                wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
            }
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
            if (translate === void 0) translate = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (translateBounds === void 0) translateBounds = true;
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (speed === 0) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        swiper.animating = false;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        var translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) {
                swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
                swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
            }
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit(_ref) {
            let {swiper, runCallbacks, direction, step} = _ref;
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if (dir === "reset") {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if (dir === "next") swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        var transition = {
            setTransition,
            transitionStart,
            transitionEnd
        };
        function slideTo(index, speed, runCallbacks, internal, initial) {
            if (index === void 0) index = 0;
            if (runCallbacks === void 0) runCallbacks = true;
            if (typeof index === "string") index = parseInt(index, 10);
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) return false;
            if (typeof speed === "undefined") speed = swiper.params.speed;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            const translate = -snapGrid[snapIndex];
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(translate * 100);
                const normalizedGrid = Math.floor(slidesGrid[i] * 100);
                const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
                if (typeof slidesGrid[i + 1] !== "undefined") {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            swiper.updateProgress(translate);
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if (params.effect !== "slide") swiper.setTranslate(translate);
                if (direction !== "reset") {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (speed === 0) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                        swiper._cssModeVirtualInitialSet = true;
                        requestAnimationFrame((() => {
                            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                        }));
                    } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._immediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (speed === 0) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index, speed, runCallbacks, internal) {
            if (index === void 0) index = 0;
            if (runCallbacks === void 0) runCallbacks = true;
            if (typeof index === "string") {
                const indexAsNumber = parseInt(index, 10);
                index = indexAsNumber;
            }
            const swiper = this;
            if (swiper.destroyed) return;
            if (typeof speed === "undefined") speed = swiper.params.speed;
            const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
            let newIndex = index;
            if (swiper.params.loop) if (swiper.virtual && swiper.params.virtual.enabled) newIndex += swiper.virtual.slidesBefore; else {
                let targetSlideIndex;
                if (gridEnabled) {
                    const slideIndex = newIndex * swiper.params.grid.rows;
                    targetSlideIndex = swiper.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex))[0].column;
                } else targetSlideIndex = swiper.getSlideIndexByData(newIndex);
                const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
                const {centeredSlides} = swiper.params;
                let slidesPerView = swiper.params.slidesPerView;
                if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic(); else {
                    slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
                    if (centeredSlides && slidesPerView % 2 === 0) slidesPerView += 1;
                }
                let needLoopFix = cols - targetSlideIndex < slidesPerView;
                if (centeredSlides) needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
                if (internal && centeredSlides && swiper.params.slidesPerView !== "auto" && !gridEnabled) needLoopFix = false;
                if (needLoopFix) {
                    const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
                    swiper.loopFix({
                        direction,
                        slideTo: true,
                        activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
                        slideRealIndex: direction === "next" ? swiper.realIndex : void 0
                    });
                }
                if (gridEnabled) {
                    const slideIndex = newIndex * swiper.params.grid.rows;
                    newIndex = swiper.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex))[0].column;
                } else newIndex = swiper.getSlideIndexByData(newIndex);
            }
            requestAnimationFrame((() => {
                swiper.slideTo(newIndex, speed, runCallbacks, internal);
            }));
            return swiper;
        }
        function slideNext(speed, runCallbacks, internal) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {enabled, params, animating} = swiper;
            if (!enabled || swiper.destroyed) return swiper;
            if (typeof speed === "undefined") speed = swiper.params.speed;
            let perGroup = params.slidesPerGroup;
            if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "next"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
                if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
                    requestAnimationFrame((() => {
                        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
                    }));
                    return true;
                }
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed, runCallbacks, internal) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params, snapGrid, slidesGrid, rtlTranslate, enabled, animating} = swiper;
            if (!enabled || swiper.destroyed) return swiper;
            if (typeof speed === "undefined") speed = swiper.params.speed;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "prev"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if (typeof prevSnap === "undefined" && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if (typeof prevSnap !== "undefined") {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
                requestAnimationFrame((() => {
                    swiper.slideTo(prevIndex, speed, runCallbacks, internal);
                }));
                return true;
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed, runCallbacks, internal) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            if (swiper.destroyed) return;
            if (typeof speed === "undefined") speed = swiper.params.speed;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed, runCallbacks, internal, threshold) {
            if (runCallbacks === void 0) runCallbacks = true;
            if (threshold === void 0) threshold = .5;
            const swiper = this;
            if (swiper.destroyed) return;
            if (typeof speed === "undefined") speed = swiper.params.speed;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            if (swiper.destroyed) return;
            const {params, slidesEl} = swiper;
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        var slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate(slideRealIndex) {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            const initSlides = () => {
                const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                slides.forEach(((el, index) => {
                    el.setAttribute("data-swiper-slide-index", index);
                }));
            };
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
            const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
            const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
            const addBlankSlides = amountOfSlides => {
                for (let i = 0; i < amountOfSlides; i += 1) {
                    const slideEl = swiper.isElement ? utils_createElement("swiper-slide", [ params.slideBlankClass ]) : utils_createElement("div", [ params.slideClass, params.slideBlankClass ]);
                    swiper.slidesEl.append(slideEl);
                }
            };
            if (shouldFillGroup) {
                if (params.loopAddBlankSlides) {
                    const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
                    addBlankSlides(slidesToAdd);
                    swiper.recalcSlides();
                    swiper.updateSlides();
                } else showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                initSlides();
            } else if (shouldFillGrid) {
                if (params.loopAddBlankSlides) {
                    const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
                    addBlankSlides(slidesToAdd);
                    swiper.recalcSlides();
                    swiper.updateSlides();
                } else showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                initSlides();
            } else initSlides();
            swiper.loopFix({
                slideRealIndex,
                direction: params.centeredSlides ? void 0 : "next"
            });
        }
        function loopFix(_temp) {
            let {slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex, byController, byMousewheel} = _temp === void 0 ? {} : _temp;
            const swiper = this;
            if (!swiper.params.loop) return;
            swiper.emit("beforeLoopFix");
            const {slides, allowSlidePrev, allowSlideNext, slidesEl, params} = swiper;
            const {centeredSlides} = params;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            if (swiper.virtual && params.virtual.enabled) {
                if (slideTo) if (!params.centeredSlides && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true); else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true); else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
                swiper.allowSlidePrev = allowSlidePrev;
                swiper.allowSlideNext = allowSlideNext;
                swiper.emit("loopFix");
                return;
            }
            let slidesPerView = params.slidesPerView;
            if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic(); else {
                slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
                if (centeredSlides && slidesPerView % 2 === 0) slidesPerView += 1;
            }
            const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
            let loopedSlides = slidesPerGroup;
            if (loopedSlides % slidesPerGroup !== 0) loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
            loopedSlides += params.loopAdditionalSlides;
            swiper.loopedSlides = loopedSlides;
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            if (slides.length < slidesPerView + loopedSlides) showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"); else if (gridEnabled && params.grid.fill === "row") showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const prependSlidesIndexes = [];
            const appendSlidesIndexes = [];
            let activeIndex = swiper.activeIndex;
            if (typeof activeSlideIndex === "undefined") activeSlideIndex = swiper.getSlideIndex(slides.filter((el => el.classList.contains(params.slideActiveClass)))[0]); else activeIndex = activeSlideIndex;
            const isNext = direction === "next" || !direction;
            const isPrev = direction === "prev" || !direction;
            let slidesPrepended = 0;
            let slidesAppended = 0;
            const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
            const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
            const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate === "undefined" ? -slidesPerView / 2 + .5 : 0);
            if (activeColIndexWithShift < loopedSlides) {
                slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
                for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
                    const index = i - Math.floor(i / cols) * cols;
                    if (gridEnabled) {
                        const colIndexToPrepend = cols - index - 1;
                        for (let i = slides.length - 1; i >= 0; i -= 1) if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
                    } else prependSlidesIndexes.push(cols - index - 1);
                }
            } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
                slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
                for (let i = 0; i < slidesAppended; i += 1) {
                    const index = i - Math.floor(i / cols) * cols;
                    if (gridEnabled) slides.forEach(((slide, slideIndex) => {
                        if (slide.column === index) appendSlidesIndexes.push(slideIndex);
                    })); else appendSlidesIndexes.push(index);
                }
            }
            swiper.__preventObserver__ = true;
            requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
            if (isPrev) prependSlidesIndexes.forEach((index => {
                slides[index].swiperLoopMoveDOM = true;
                slidesEl.prepend(slides[index]);
                slides[index].swiperLoopMoveDOM = false;
            }));
            if (isNext) appendSlidesIndexes.forEach((index => {
                slides[index].swiperLoopMoveDOM = true;
                slidesEl.append(slides[index]);
                slides[index].swiperLoopMoveDOM = false;
            }));
            swiper.recalcSlides();
            if (params.slidesPerView === "auto") swiper.updateSlides(); else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) swiper.slides.forEach(((slide, slideIndex) => {
                swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
            }));
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (slideTo) if (prependSlidesIndexes.length > 0 && isPrev) {
                if (typeof slideRealIndex === "undefined") {
                    const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                    const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                    const diff = newSlideTranslate - currentSlideTranslate;
                    if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                        swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
                        if (setTranslate) {
                            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                        }
                    }
                } else if (setTranslate) {
                    const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
                    swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
                    swiper.touchEventsData.currentTranslate = swiper.translate;
                }
            } else if (appendSlidesIndexes.length > 0 && isNext) if (typeof slideRealIndex === "undefined") {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                    swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                    if (setTranslate) {
                        swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                        swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                    }
                }
            } else {
                const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
                swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.controller && swiper.controller.control && !byController) {
                const loopParams = {
                    slideRealIndex,
                    direction,
                    setTranslate,
                    activeSlideIndex,
                    byController: true
                };
                if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c => {
                    if (!c.destroyed && c.params.loop) c.loopFix({
                        ...loopParams,
                        slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
                    });
                })); else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix({
                    ...loopParams,
                    slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
                });
            }
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            swiper.recalcSlides();
            const newSlidesOrder = [];
            swiper.slides.forEach((slideEl => {
                const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
                newSlidesOrder[index] = slideEl;
            }));
            swiper.slides.forEach((slideEl => {
                slideEl.removeAttribute("data-swiper-slide-index");
            }));
            newSlidesOrder.forEach((slideEl => {
                slidesEl.append(slideEl);
            }));
            swiper.recalcSlides();
            swiper.slideTo(swiper.realIndex, 0);
        }
        var loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        var grabCursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base) {
            if (base === void 0) base = this;
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function preventEdgeSwipe(swiper, event, startX) {
            const window = ssr_window_esm_getWindow();
            const {params} = swiper;
            const edgeSwipeDetection = params.edgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
                if (edgeSwipeDetection === "prevent") {
                    event.preventDefault();
                    return true;
                }
                return false;
            }
            return true;
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            const data = swiper.touchEventsData;
            if (e.type === "pointerdown") {
                if (data.pointerId !== null && data.pointerId !== e.pointerId) return;
                data.pointerId = e.pointerId;
            } else if (e.type === "touchstart" && e.targetTouches.length === 1) data.touchId = e.targetTouches[0].identifier;
            if (e.type === "touchstart") {
                preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
                return;
            }
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && e.pointerType === "mouse") return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let targetEl = e.target;
            if (params.touchEventsTarget === "wrapper") if (!elementIsChildOf(targetEl, swiper.wrapperEl)) return;
            if ("which" in e && e.which === 3) return;
            if ("button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
            const eventPath = e.composedPath ? e.composedPath() : e.path;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!targetEl.closest(params.swipeHandler)) return;
            touches.currentX = e.pageX;
            touches.currentY = e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            if (!preventEdgeSwipe(swiper, e, startX)) return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            let preventDefault = true;
            if (targetEl.matches(data.focusableElements)) {
                preventDefault = false;
                if (targetEl.nodeName === "SELECT") data.isTouched = false;
            }
            if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) document.activeElement.blur();
            const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
            if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (e.type === "pointermove") {
                if (data.touchId !== null) return;
                const id = e.pointerId;
                if (id !== data.pointerId) return;
            }
            let targetTouch;
            if (e.type === "touchmove") {
                targetTouch = [ ...e.changedTouches ].filter((t => t.identifier === data.touchId))[0];
                if (!targetTouch || targetTouch.identifier !== data.touchId) return;
            } else targetTouch = e;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            const pageX = targetTouch.pageX;
            const pageY = targetTouch.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (document.activeElement) if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            touches.previousX = touches.currentX;
            touches.previousY = touches.currentY;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if (typeof data.isScrolling === "undefined") {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if (typeof data.startMoving === "undefined") if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling || e.type === "touchmove" && data.preventTouchMoveFromPointerMove) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            let diff = swiper.isHorizontal() ? diffX : diffY;
            let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
            if (params.oneWayMovement) {
                diff = Math.abs(diff) * (rtl ? 1 : -1);
                touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
            }
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) {
                diff = -diff;
                touchesDiff = -touchesDiff;
            }
            const prevTouchesDirection = swiper.touchesDirection;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
            const isLoop = swiper.params.loop && !params.cssMode;
            const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
            if (!data.isMoved) {
                if (isLoop && allowLoopFix) swiper.loopFix({
                    direction: swiper.swipeDirection
                });
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) {
                    const evt = new window.CustomEvent("transitionend", {
                        bubbles: true,
                        cancelable: true,
                        detail: {
                            bySwiperTouchMove: true
                        }
                    });
                    swiper.wrapperEl.dispatchEvent(evt);
                }
                data.allowMomentumBounce = false;
                if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            let loopFixed;
            (new Date).getTime();
            if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
                Object.assign(touches, {
                    startX: pageX,
                    startY: pageY,
                    currentX: pageX,
                    currentY: pageY,
                    startTranslate: data.currentTranslate
                });
                data.loopSwapReset = true;
                data.startTranslate = data.currentTranslate;
                return;
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0) {
                if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) swiper.loopFix({
                    direction: "prev",
                    setTranslate: true,
                    activeSlideIndex: 0
                });
                if (data.currentTranslate > swiper.minTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
                }
            } else if (diff < 0) {
                if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) swiper.loopFix({
                    direction: "next",
                    setTranslate: true,
                    activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
                });
                if (data.currentTranslate < swiper.maxTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
                }
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let targetTouch;
            const isTouchEvent = e.type === "touchend" || e.type === "touchcancel";
            if (!isTouchEvent) {
                if (data.touchId !== null) return;
                if (e.pointerId !== data.pointerId) return;
                targetTouch = e;
            } else {
                targetTouch = [ ...e.changedTouches ].filter((t => t.identifier === data.touchId))[0];
                if (!targetTouch || targetTouch.identifier !== data.touchId) return;
            }
            if ([ "pointercancel", "pointerout", "pointerleave", "contextmenu" ].includes(e.type)) {
                const proceed = [ "pointercancel", "contextmenu" ].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
                if (!proceed) return;
            }
            data.pointerId = null;
            data.touchId = null;
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && e.pointerType === "mouse") return;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if (typeof slidesGrid[i + increment] !== "undefined") {
                    if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (swipeToLast || currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if (swiper.swipeDirection === "next") if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if (swiper.swipeDirection === "prev") if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                    if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && el.offsetWidth === 0) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            const isVirtualLoop = isVirtual && params.loop;
            if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
                clearTimeout(swiper.autoplay.resizeTimeout);
                swiper.autoplay.resizeTimeout = setTimeout((() => {
                    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
                }), 500);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (swiper.translate === 0) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        function onLoad(e) {
            const swiper = this;
            processLazyPreloader(swiper, e.target);
            if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) return;
            swiper.update();
        }
        function onDocumentTouchStart() {
            const swiper = this;
            if (swiper.documentTouchHandlerProceeded) return;
            swiper.documentTouchHandlerProceeded = true;
            if (swiper.params.touchReleaseOnEdges) swiper.el.style.touchAction = "auto";
        }
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, el, wrapperEl, device} = swiper;
            const capture = !!params.nested;
            const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            if (!el || typeof el === "string") return;
            document[domMethod]("touchstart", swiper.onDocumentTouchStart, {
                passive: false,
                capture
            });
            el[domMethod]("touchstart", swiper.onTouchStart, {
                passive: false
            });
            el[domMethod]("pointerdown", swiper.onTouchStart, {
                passive: false
            });
            document[domMethod]("touchmove", swiper.onTouchMove, {
                passive: false,
                capture
            });
            document[domMethod]("pointermove", swiper.onTouchMove, {
                passive: false,
                capture
            });
            document[domMethod]("touchend", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerup", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointercancel", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("touchcancel", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerout", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerleave", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("contextmenu", swiper.onTouchEnd, {
                passive: true
            });
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
            el[domMethod]("load", swiper.onLoad, {
                capture: true
            });
        };
        function attachEvents() {
            const swiper = this;
            const {params} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            swiper.onLoad = onLoad.bind(swiper);
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        var events$1 = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {realIndex, initialized, params, el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasGrabCursor = swiper.params.grabCursor;
            const isGrabCursor = breakpointParams.grabCursor;
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                el.classList.add(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") el.classList.add(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            if (wasGrabCursor && !isGrabCursor) swiper.unsetGrabCursor(); else if (!wasGrabCursor && isGrabCursor) swiper.setGrabCursor();
            [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                if (typeof breakpointParams[prop] === "undefined") return;
                const wasModuleEnabled = params[prop] && params[prop].enabled;
                const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
            }));
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            const wasLoop = params.loop;
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            const hasLoop = swiper.params.loop;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (initialized) if (needsReLoop) {
                swiper.loopDestroy();
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            } else if (!wasLoop && hasLoop) {
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            } else if (wasLoop && !hasLoop) swiper.loopDestroy();
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base, containerEl) {
            if (base === void 0) base = "window";
            if (!breakpoints || base === "container" && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if (typeof point === "string" && point.indexOf("@") === 0) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if (base === "window") {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        var breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if (typeof item === "object") Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if (typeof item === "string") resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, el, device} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            el.classList.add(...classNames);
            swiper.emitContainerClasses();
        }
        function swiper_core_removeClasses() {
            const swiper = this;
            const {el, classNames} = swiper;
            if (!el || typeof el === "string") return;
            el.classList.remove(...classNames);
            swiper.emitContainerClasses();
        }
        var classes = {
            addClasses,
            removeClasses: swiper_core_removeClasses
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = swiper.snapGrid.length === 1;
            if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
            if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        var checkOverflow$1 = {
            checkOverflow
        };
        var defaults = {
            init: true,
            direction: "horizontal",
            oneWayMovement: false,
            swiperElementNodeName: "SWIPER-CONTAINER",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            eventsPrefix: "swiper",
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 5,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            loop: false,
            loopAddBlankSlides: true,
            loopAdditionalSlides: 0,
            loopPreventsSliding: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-blank",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideFullyVisibleClass: "swiper-slide-fully-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            lazyPreloadPrevNext: 0,
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj) {
                if (obj === void 0) obj = {};
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if (typeof moduleParams !== "object" || moduleParams === null) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (params[moduleParamName] === true) params[moduleParamName] = {
                    enabled: true
                };
                if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) params[moduleParamName].auto = true;
                if ([ "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) params[moduleParamName].auto = true;
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter,
            update,
            translate,
            transition,
            slide,
            loop,
            grabCursor,
            events: events$1,
            breakpoints,
            checkOverflow: checkOverflow$1,
            classes
        };
        const extendedDefaults = {};
        class swiper_core_Swiper {
            constructor() {
                let el;
                let params;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                const document = ssr_window_esm_getDocument();
                if (params.el && typeof params.el === "string" && document.querySelectorAll(params.el).length > 1) {
                    const swipers = [];
                    document.querySelectorAll(params.el).forEach((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new swiper_core_Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        params,
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return swiper.params.direction === "horizontal";
                    },
                    isVertical() {
                        return swiper.params.direction === "vertical";
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    cssOverflowAdjustment() {
                        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                    },
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        pointerId: null,
                        touchId: null
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            getDirectionLabel(property) {
                if (this.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            getSlideIndex(slideEl) {
                const {slidesEl, params} = this;
                const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                const firstSlideIndex = utils_elementIndex(slides[0]);
                return utils_elementIndex(slideEl) - firstSlideIndex;
            }
            getSlideIndexByData(index) {
                return this.getSlideIndex(this.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === index))[0]);
            }
            recalcSlides() {
                const swiper = this;
                const {slidesEl, params} = swiper;
                swiper.slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0)).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.forEach((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view, exact) {
                if (view === void 0) view = "current";
                if (exact === void 0) exact = false;
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (typeof params.slidesPerView === "number") return params.slidesPerView;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += Math.ceil(slides[i].swiperSlideSize);
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if (view === "current") for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl);
                }));
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
                    setTranslate();
                    if (params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
                        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                        translated = swiper.slideTo(slides.length - 1, 0, false, true);
                    } else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate) {
                if (needUpdate === void 0) needUpdate = true;
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
                if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
                swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
                swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.forEach((slideEl => {
                    if (newDirection === "vertical") slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            changeLanguageDirection(direction) {
                const swiper = this;
                if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
                swiper.rtl = direction === "rtl";
                swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
                if (swiper.rtl) {
                    swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "rtl";
                } else {
                    swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "ltr";
                }
                swiper.update();
            }
            mount(element) {
                const swiper = this;
                if (swiper.mounted) return true;
                let el = element || swiper.params.el;
                if (typeof el === "string") el = document.querySelector(el);
                if (!el) return false;
                el.swiper = swiper;
                if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) swiper.isElement = true;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = el.shadowRoot.querySelector(getWrapperSelector());
                        return res;
                    }
                    return utils_elementChildren(el, getWrapperSelector())[0];
                };
                let wrapperEl = getWrapper();
                if (!wrapperEl && swiper.params.createElements) {
                    wrapperEl = utils_createElement("div", swiper.params.wrapperClass);
                    el.append(wrapperEl);
                    utils_elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl => {
                        wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    el,
                    wrapperEl,
                    slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
                    hostEl: swiper.isElement ? el.parentNode.host : el,
                    mounted: true,
                    rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
                    rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
                    wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (mounted === false) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                if (swiper.params.loop) swiper.loopCreate();
                swiper.attachEvents();
                const lazyElements = [ ...swiper.el.querySelectorAll('[loading="lazy"]') ];
                if (swiper.isElement) lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
                lazyElements.forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl); else imageEl.addEventListener("load", (e => {
                        processLazyPreloader(swiper, e.target);
                    }));
                }));
                preload(swiper);
                swiper.initialized = true;
                preload(swiper);
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance, cleanStyles) {
                if (deleteInstance === void 0) deleteInstance = true;
                if (cleanStyles === void 0) cleanStyles = true;
                const swiper = this;
                const {params, el, wrapperEl, slides} = swiper;
                if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    if (el && typeof el !== "string") el.removeAttribute("style");
                    if (wrapperEl) wrapperEl.removeAttribute("style");
                    if (slides && slides.length) slides.forEach((slideEl => {
                        slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                        slideEl.removeAttribute("style");
                        slideEl.removeAttribute("data-swiper-slide-index");
                    }));
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (deleteInstance !== false) {
                    if (swiper.el && typeof swiper.el !== "string") swiper.el.swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!swiper_core_Swiper.prototype.__modules__) swiper_core_Swiper.prototype.__modules__ = [];
                const modules = swiper_core_Swiper.prototype.__modules__;
                if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => swiper_core_Swiper.installModule(m)));
                    return swiper_core_Swiper;
                }
                swiper_core_Swiper.installModule(module);
                return swiper_core_Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                swiper_core_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        swiper_core_Swiper.use([ Resize, Observer ]);
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && params.auto === true) {
                    let element = utils_elementChildren(swiper.el, `.${checkProps[key]}`)[0];
                    if (!element) {
                        element = utils_createElement("div", checkProps[key]);
                        element.className = checkProps[key];
                        swiper.el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function Navigation(_ref) {
            let {swiper, extendParams, on, emit} = _ref;
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            });
            swiper.navigation = {
                nextEl: null,
                prevEl: null
            };
            function getEl(el) {
                let res;
                if (el && typeof el === "string" && swiper.isElement) {
                    res = swiper.el.querySelector(el);
                    if (res) return res;
                }
                if (el) {
                    if (typeof el === "string") res = [ ...document.querySelectorAll(el) ];
                    if (swiper.params.uniqueNavElements && typeof el === "string" && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) res = swiper.el.querySelector(el); else if (res && res.length === 1) res = res[0];
                }
                if (el && !res) return el;
                return res;
            }
            function toggleEl(el, disabled) {
                const params = swiper.params.navigation;
                el = utils_makeElementsArray(el);
                el.forEach((subEl => {
                    if (subEl) {
                        subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
                        if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
                        if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                    }
                }));
            }
            function update() {
                const {nextEl, prevEl} = swiper.navigation;
                if (swiper.params.loop) {
                    toggleEl(prevEl, false);
                    toggleEl(nextEl, false);
                    return;
                }
                toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
                emit("navigationPrev");
            }
            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
                emit("navigationNext");
            }
            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                });
                if (!(params.nextEl || params.prevEl)) return;
                let nextEl = getEl(params.nextEl);
                let prevEl = getEl(params.prevEl);
                Object.assign(swiper.navigation, {
                    nextEl,
                    prevEl
                });
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                const initButton = (el, dir) => {
                    if (el) el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    if (!swiper.enabled && el) el.classList.add(...params.lockClass.split(" "));
                };
                nextEl.forEach((el => initButton(el, "next")));
                prevEl.forEach((el => initButton(el, "prev")));
            }
            function destroy() {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                const destroyButton = (el, dir) => {
                    el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
                };
                nextEl.forEach((el => destroyButton(el, "next")));
                prevEl.forEach((el => destroyButton(el, "prev")));
            }
            on("init", (() => {
                if (swiper.params.navigation.enabled === false) disable(); else {
                    init();
                    update();
                }
            }));
            on("toEdge fromEdge lock unlock", (() => {
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                if (swiper.enabled) {
                    update();
                    return;
                }
                [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.add(swiper.params.navigation.lockClass)));
            }));
            on("click", ((_s, e) => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = utils_makeElementsArray(nextEl);
                prevEl = utils_makeElementsArray(prevEl);
                const targetEl = e.target;
                let targetIsButton = prevEl.includes(targetEl) || nextEl.includes(targetEl);
                if (swiper.isElement && !targetIsButton) {
                    const path = e.path || e.composedPath && e.composedPath();
                    if (path) targetIsButton = path.find((pathEl => nextEl.includes(pathEl) || prevEl.includes(pathEl)));
                }
                if (swiper.params.navigation.hideOnClick && !targetIsButton) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    let isHidden;
                    if (nextEl.length) isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass); else if (prevEl.length) isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
                    if (isHidden === true) emit("navigationShow"); else emit("navigationHide");
                    [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.toggle(swiper.params.navigation.hiddenClass)));
                }
            }));
            const enable = () => {
                swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
                init();
                update();
            };
            const disable = () => {
                swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
                destroy();
            };
            Object.assign(swiper.navigation, {
                enable,
                disable,
                update,
                init,
                destroy
            });
        }
        function initSliders() {
            if (document.querySelector(".gallery__slider")) new swiper_core_Swiper(".gallery__slider", {
                modules: [ Navigation ],
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 0,
                speed: 800,
                loop: true,
                navigation: {
                    prevEl: ".gallery__btn-arrow_prev",
                    nextEl: ".gallery__btn-arrow_next"
                },
                breakpoints: {
                    651: {
                        slidesPerView: 2
                    },
                    1025: {
                        slidesPerView: 5
                    }
                },
                on: {}
            });
        }
        window.addEventListener("load", (function(e) {
            initSliders();
        }));
        var lazyload_min = __webpack_require__(144);
        new lazyload_min({
            elements_selector: "[data-src],[data-srcset]",
            class_loaded: "_lazy-loaded",
            use_native: true
        });
        let addWindowScrollEvent = false;
        function headerScroll() {
            addWindowScrollEvent = true;
            const header = document.querySelector("header.header");
            const headerShow = header.hasAttribute("data-scroll-show");
            const headerShowTimer = header.dataset.scrollShow ? header.dataset.scrollShow : 500;
            const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
            let scrollDirection = 0;
            let timer;
            document.addEventListener("windowScroll", (function(e) {
                const scrollTop = window.scrollY;
                clearTimeout(timer);
                if (scrollTop >= startPoint) {
                    !header.classList.contains("_header-scroll") ? header.classList.add("_header-scroll") : null;
                    if (headerShow) {
                        if (scrollTop > scrollDirection) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null; else !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        timer = setTimeout((() => {
                            !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        }), headerShowTimer);
                    }
                } else {
                    header.classList.contains("_header-scroll") ? header.classList.remove("_header-scroll") : null;
                    if (headerShow) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null;
                }
                scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
            }));
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        window["FLS"] = false;
        isWebp();
        addLoadedClass();
        menuInit();
        formSubmit();
        formRating();
        headerScroll();
    })();
})();