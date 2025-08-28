(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/Header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Header)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Header() {
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    };
    const handleKeyDown = (event)=>{
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleMenu();
        }
    };
    const scrollToSection = (sectionId)=>{
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        setIsMenuOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "relative z-50 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 shadow-lg",
        role: "banner",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center py-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl md:text-4xl font-bold text-white drop-shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-orange-100",
                                        children: "Tropi"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-pink-100",
                                        children: "cá"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-yellow-100",
                                        children: "lia"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden md:block",
                            role: "navigation",
                            "aria-label": "Navegação principal",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "flex space-x-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>scrollToSection('main-content'),
                                            className: "text-white hover:text-orange-200 transition-colors duration-300 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-3 py-2",
                                            "aria-label": "Ir para a seção Início",
                                            children: "Início"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 54,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>scrollToSection('galeria'),
                                            className: "text-white hover:text-pink-200 transition-colors duration-300 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-3 py-2",
                                            "aria-label": "Ir para a seção Galeria",
                                            children: "Galeria"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>scrollToSection('contato'),
                                            className: "text-white hover:text-yellow-200 transition-colors duration-300 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-3 py-2",
                                            "aria-label": "Ir para a seção Contato",
                                            children: "Contato"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleMenu,
                                onKeyDown: handleKeyDown,
                                className: "text-white hover:text-orange-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded p-2",
                                "aria-expanded": isMenuOpen,
                                "aria-controls": "mobile-menu",
                                "aria-label": isMenuOpen ? 'Fechar menu' : 'Abrir menu',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "h-6 w-6",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    "aria-hidden": "true",
                                    children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 101,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M4 6h16M4 12h16M4 18h16"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 108,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    id: "mobile-menu",
                    className: "md:hidden pb-6",
                    role: "navigation",
                    "aria-label": "Navegação móvel",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scrollToSection('main-content'),
                                    className: "block w-full text-left text-white hover:text-orange-200 transition-colors duration-300 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-3 py-2",
                                    "aria-label": "Ir para a seção Início",
                                    children: "Início"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 130,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 129,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scrollToSection('galeria'),
                                    className: "block w-full text-left text-white hover:text-pink-200 transition-colors duration-300 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-3 py-2",
                                    "aria-label": "Ir para a seção Galeria",
                                    children: "Galeria"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 139,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 138,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scrollToSection('contato'),
                                    className: "block w-full text-left text-white hover:text-yellow-200 transition-colors duration-300 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-3 py-2",
                                    "aria-label": "Ir para a seção Contato",
                                    children: "Contato"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 148,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 147,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 128,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 122,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(Header, "vK10R+uCyHfZ4DZVnxbYkMWJB8g=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/HeroSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HeroSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function HeroSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-screen flex items-center justify-center overflow-hidden",
        "aria-labelledby": "hero-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-orange-400 via-pink-400 to-yellow-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 w-full h-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "absolute top-0 left-0 w-full h-full",
                            viewBox: "0 0 1200 800",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            "aria-hidden": "true",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M0,400 C300,200 600,600 1200,300 L1200,0 L0,0 Z",
                                    fill: "url(#gradient1)",
                                    opacity: "0.7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroSection.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M0,600 C400,400 800,800 1200,500 L1200,800 L0,800 Z",
                                    fill: "url(#gradient2)",
                                    opacity: "0.6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroSection.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M0,300 C200,100 800,500 1200,200 L1200,0 L0,0 Z",
                                    fill: "url(#gradient3)",
                                    opacity: "0.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroSection.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                            id: "gradient1",
                                            x1: "0%",
                                            y1: "0%",
                                            x2: "100%",
                                            y2: "100%",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "0%",
                                                    stopColor: "#FF6B35",
                                                    stopOpacity: "0.8"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HeroSection.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "50%",
                                                    stopColor: "#FF8C42",
                                                    stopOpacity: "0.6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HeroSection.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "100%",
                                                    stopColor: "#FFA500",
                                                    stopOpacity: "0.4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HeroSection.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/HeroSection.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                            id: "gradient2",
                                            x1: "0%",
                                            y1: "0%",
                                            x2: "100%",
                                            y2: "100%",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "0%",
                                                    stopColor: "#FF69B4",
                                                    stopOpacity: "0.7"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HeroSection.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "50%",
                                                    stopColor: "#FFB6C1",
                                                    stopOpacity: "0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HeroSection.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "100%",
                                                    stopColor: "#FFC0CB",
                                                    stopOpacity: "0.3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HeroSection.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/HeroSection.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                            id: "gradient3",
                                            x1: "0%",
                                            y1: "0%",
                                            x2: "100%",
                                            y2: "100%",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "0%",
                                                    stopColor: "#FFD700",
                                                    stopOpacity: "0.6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HeroSection.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "50%",
                                                    stopColor: "#FFA500",
                                                    stopOpacity: "0.4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HeroSection.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "100%",
                                                    stopColor: "#FF8C00",
                                                    stopOpacity: "0.2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HeroSection.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/HeroSection.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HeroSection.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HeroSection.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-20 left-10 w-32 h-32 bg-white bg-opacity-20 rounded-full blur-xl animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-32 right-16 w-24 h-24 bg-yellow-300 bg-opacity-30 rounded-full blur-lg animate-bounce"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/4 w-16 h-16 bg-pink-300 bg-opacity-40 rounded-full blur-md animate-pulse delay-1000"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeroSection.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            id: "hero-title",
                            className: "text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-2xl leading-tight",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block text-orange-100 animate-fade-in-up",
                                    children: "Boas-vindas"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroSection.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block text-pink-100 animate-fade-in-up animation-delay-300",
                                    children: "a"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroSection.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block text-yellow-100 animate-fade-in-up animation-delay-600",
                                    children: [
                                        "Tropi",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-orange-200",
                                            children: "cá"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HeroSection.tsx",
                                            lineNumber: 75,
                                            columnNumber: 20
                                        }, this),
                                        "lia"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HeroSection.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HeroSection.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl sm:text-2xl md:text-3xl text-white font-light max-w-4xl mx-auto leading-relaxed drop-shadow-lg animate-fade-in-up animation-delay-900",
                            children: "Mergulhe na vibrante cultura tropicalista brasileira, onde música, arte e revolução se encontram em perfeita harmonia."
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSection.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-8 animate-fade-in-up animation-delay-1200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    const element = document.getElementById('galeria');
                                    if (element) {
                                        element.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'start'
                                        });
                                    }
                                },
                                className: "bg-white bg-opacity-20 backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-full text-lg hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 shadow-2xl",
                                "aria-label": "Explorar a galeria Tropicália",
                                children: "Explorar a Jornada"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroSection.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSection.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/HeroSection.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 right-8 w-48 h-32 bg-gradient-to-br from-purple-400 to-blue-400 rounded-lg shadow-2xl overflow-hidden opacity-80",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "https://placehold.co/400x300?text=Vintage+Tropicalia+Musicians+Performing+Live+Concert",
                    alt: "Músicos tropicalistas em apresentação vintage",
                    className: "w-full h-full object-cover",
                    loading: "lazy"
                }, void 0, false, {
                    fileName: "[project]/src/components/HeroSection.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/HeroSection.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-6 h-10 border-2 border-white rounded-full flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-1 h-3 bg-white rounded-full mt-2 animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HeroSection.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white text-sm mt-2 font-light",
                        children: "Role para baixo"
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeroSection.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HeroSection.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ScrollRevealWrapper.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ScrollRevealWrapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function ScrollRevealWrapper({ children, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ScrollRevealWrapper.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = ScrollRevealWrapper;
var _c;
__turbopack_context__.k.register(_c, "ScrollRevealWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HeroSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScrollRevealWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ScrollRevealWrapper.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Home() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            // Configuração global do ScrollReveal
            if ("TURBOPACK compile-time truthy", 1) {
                const ScrollReveal = __turbopack_context__.r("[project]/node_modules/scrollreveal/dist/scrollreveal.es.js [app-client] (ecmascript)").default;
                ScrollReveal({
                    distance: '60px',
                    duration: 2000,
                    delay: 400,
                    reset: true,
                    easing: 'cubic-bezier(0.5, 0, 0, 1)'
                });
                // Animações específicas
                ScrollReveal().reveal('.reveal-top', {
                    origin: 'top',
                    delay: 200
                });
                ScrollReveal().reveal('.reveal-left', {
                    origin: 'left',
                    delay: 400
                });
                ScrollReveal().reveal('.reveal-right', {
                    origin: 'right',
                    delay: 600
                });
                ScrollReveal().reveal('.reveal-bottom', {
                    origin: 'bottom',
                    delay: 800
                });
            }
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        id: "main-content",
        className: "min-h-screen bg-gradient-to-br from-orange-200 via-pink-200 to-yellow-200",
        role: "main",
        "aria-label": "Página principal do site Tropicália",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScrollRevealWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "reveal-top",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScrollRevealWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                className: "reveal-bottom",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "galeria",
                className: "min-h-screen flex items-center justify-center p-8",
                "aria-labelledby": "galeria-title",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScrollRevealWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "reveal-left",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center max-w-4xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "galeria-title",
                                className: "text-4xl md:text-6xl font-bold text-orange-800 mb-8",
                                children: "Galeria"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl text-orange-700 leading-relaxed",
                                children: "Explore nossa coleção de momentos e memórias que capturam a essência do movimento tropicalista."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "contato",
                className: "min-h-screen flex items-center justify-center p-8 bg-gradient-to-t from-yellow-300 to-orange-300",
                "aria-labelledby": "contato-title",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ScrollRevealWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "reveal-right",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center max-w-4xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "contato-title",
                                className: "text-4xl md:text-6xl font-bold text-orange-900 mb-8",
                                children: "Contato"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl text-orange-800 leading-relaxed mb-8",
                                children: "Entre em contato conosco e faça parte desta jornada musical e cultural."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 text-orange-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Email:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "mailto:contato@tropicalia.com.br",
                                                className: "ml-2 underline hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 rounded",
                                                "aria-label": "Enviar email para contato@tropicalia.com.br",
                                                children: "contato@tropicalia.com.br"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 100,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Telefone:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "tel:+5511999999999",
                                                className: "ml-2 underline hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 rounded",
                                                "aria-label": "Ligar para (11) 99999-9999",
                                                children: "(11) 99999-9999"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 110,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(Home, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        "react-stack-bottom-frame": function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React["react-stack-bottom-frame"].bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
"[project]/node_modules/is-dom-node/dist/is-dom-node.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
function isDomNode(x) {
    return typeof window.Node === 'object' ? x instanceof window.Node : x !== null && typeof x === 'object' && typeof x.nodeType === 'number' && typeof x.nodeName === 'string';
}
const __TURBOPACK__default__export__ = isDomNode;
}}),
"[project]/node_modules/is-dom-node-list/dist/is-dom-node-list.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$is$2d$dom$2d$node$2f$dist$2f$is$2d$dom$2d$node$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/is-dom-node/dist/is-dom-node.es.js [app-client] (ecmascript)");
;
function isDomNodeList(x) {
    var prototypeToString = Object.prototype.toString.call(x);
    var regex = /^\[object (HTMLCollection|NodeList|Object)\]$/;
    return typeof window.NodeList === 'object' ? x instanceof window.NodeList : x !== null && typeof x === 'object' && typeof x.length === 'number' && regex.test(prototypeToString) && (x.length === 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$is$2d$dom$2d$node$2f$dist$2f$is$2d$dom$2d$node$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(x[0]));
}
const __TURBOPACK__default__export__ = isDomNodeList;
}}),
"[project]/node_modules/tealight/dist/tealight.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$is$2d$dom$2d$node$2f$dist$2f$is$2d$dom$2d$node$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/is-dom-node/dist/is-dom-node.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$is$2d$dom$2d$node$2d$list$2f$dist$2f$is$2d$dom$2d$node$2d$list$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/is-dom-node-list/dist/is-dom-node-list.es.js [app-client] (ecmascript)");
;
;
function tealight(target, context) {
    if (context === void 0) context = document;
    if (target instanceof Array) {
        return target.filter(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$is$2d$dom$2d$node$2f$dist$2f$is$2d$dom$2d$node$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$is$2d$dom$2d$node$2f$dist$2f$is$2d$dom$2d$node$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(target)) {
        return [
            target
        ];
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$is$2d$dom$2d$node$2d$list$2f$dist$2f$is$2d$dom$2d$node$2d$list$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(target)) {
        return Array.prototype.slice.call(target);
    }
    if (typeof target === "string") {
        try {
            var query = context.querySelectorAll(target);
            return Array.prototype.slice.call(query);
        } catch (err) {
            return [];
        }
    }
    return [];
}
const __TURBOPACK__default__export__ = tealight;
}}),
"[project]/node_modules/rematrix/dist/rematrix.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/ /**
 * @module Rematrix
 */ /**
 * Transformation matrices in the browser come in two flavors:
 *
 *  - `matrix` using 6 values (short)
 *  - `matrix3d` using 16 values (long)
 *
 * This utility follows this [conversion guide](https://goo.gl/EJlUQ1)
 * to expand short form matrices to their equivalent long form.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {array}
 */ __turbopack_context__.s({
    "format": (()=>format),
    "identity": (()=>identity),
    "inverse": (()=>inverse),
    "multiply": (()=>multiply),
    "parse": (()=>parse),
    "rotate": (()=>rotate),
    "rotateX": (()=>rotateX),
    "rotateY": (()=>rotateY),
    "rotateZ": (()=>rotateZ),
    "scale": (()=>scale),
    "scaleX": (()=>scaleX),
    "scaleY": (()=>scaleY),
    "scaleZ": (()=>scaleZ),
    "skew": (()=>skew),
    "skewX": (()=>skewX),
    "skewY": (()=>skewY),
    "toString": (()=>toString),
    "translate": (()=>translate),
    "translateX": (()=>translateX),
    "translateY": (()=>translateY),
    "translateZ": (()=>translateZ)
});
function format(source) {
    if (source.constructor !== Array) {
        throw new TypeError('Expected array.');
    }
    if (source.length === 16) {
        return source;
    }
    if (source.length === 6) {
        var matrix = identity();
        matrix[0] = source[0];
        matrix[1] = source[1];
        matrix[4] = source[2];
        matrix[5] = source[3];
        matrix[12] = source[4];
        matrix[13] = source[5];
        return matrix;
    }
    throw new RangeError('Expected array with either 6 or 16 values.');
}
/**
 * Returns a matrix representing no transformation. The product of any matrix
 * multiplied by the identity matrix will be the original matrix.
 *
 * > **Tip:** Similar to how `5 * 1 === 5`, where `1` is the identity.
 *
 * @return {array}
 */ function identity() {
    var matrix = [];
    for(var i = 0; i < 16; i++){
        i % 5 == 0 ? matrix.push(1) : matrix.push(0);
    }
    return matrix;
}
/**
 * Returns a matrix describing the inverse transformation of the source
 * matrix. The product of any matrix multiplied by its inverse will be the
 * identity matrix.
 *
 * > **Tip:** Similar to how `5 * (1/5) === 1`, where `1/5` is the inverse.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {array}
 */ function inverse(source) {
    var m = format(source);
    var s0 = m[0] * m[5] - m[4] * m[1];
    var s1 = m[0] * m[6] - m[4] * m[2];
    var s2 = m[0] * m[7] - m[4] * m[3];
    var s3 = m[1] * m[6] - m[5] * m[2];
    var s4 = m[1] * m[7] - m[5] * m[3];
    var s5 = m[2] * m[7] - m[6] * m[3];
    var c5 = m[10] * m[15] - m[14] * m[11];
    var c4 = m[9] * m[15] - m[13] * m[11];
    var c3 = m[9] * m[14] - m[13] * m[10];
    var c2 = m[8] * m[15] - m[12] * m[11];
    var c1 = m[8] * m[14] - m[12] * m[10];
    var c0 = m[8] * m[13] - m[12] * m[9];
    var determinant = 1 / (s0 * c5 - s1 * c4 + s2 * c3 + s3 * c2 - s4 * c1 + s5 * c0);
    if (isNaN(determinant) || determinant === Infinity) {
        throw new Error('Inverse determinant attempted to divide by zero.');
    }
    return [
        (m[5] * c5 - m[6] * c4 + m[7] * c3) * determinant,
        (-m[1] * c5 + m[2] * c4 - m[3] * c3) * determinant,
        (m[13] * s5 - m[14] * s4 + m[15] * s3) * determinant,
        (-m[9] * s5 + m[10] * s4 - m[11] * s3) * determinant,
        (-m[4] * c5 + m[6] * c2 - m[7] * c1) * determinant,
        (m[0] * c5 - m[2] * c2 + m[3] * c1) * determinant,
        (-m[12] * s5 + m[14] * s2 - m[15] * s1) * determinant,
        (m[8] * s5 - m[10] * s2 + m[11] * s1) * determinant,
        (m[4] * c4 - m[5] * c2 + m[7] * c0) * determinant,
        (-m[0] * c4 + m[1] * c2 - m[3] * c0) * determinant,
        (m[12] * s4 - m[13] * s2 + m[15] * s0) * determinant,
        (-m[8] * s4 + m[9] * s2 - m[11] * s0) * determinant,
        (-m[4] * c3 + m[5] * c1 - m[6] * c0) * determinant,
        (m[0] * c3 - m[1] * c1 + m[2] * c0) * determinant,
        (-m[12] * s3 + m[13] * s1 - m[14] * s0) * determinant,
        (m[8] * s3 - m[9] * s1 + m[10] * s0) * determinant
    ];
}
/**
 * Returns a 4x4 matrix describing the combined transformations
 * of both arguments.
 *
 * > **Note:** Order is very important. For example, rotating 45°
 * along the Z-axis, followed by translating 500 pixels along the
 * Y-axis... is not the same as translating 500 pixels along the
 * Y-axis, followed by rotating 45° along on the Z-axis.
 *
 * @param  {array} m - Accepts both short and long form matrices.
 * @param  {array} x - Accepts both short and long form matrices.
 * @return {array}
 */ function multiply(m, x) {
    var fm = format(m);
    var fx = format(x);
    var product = [];
    for(var i = 0; i < 4; i++){
        var row = [
            fm[i],
            fm[i + 4],
            fm[i + 8],
            fm[i + 12]
        ];
        for(var j = 0; j < 4; j++){
            var k = j * 4;
            var col = [
                fx[k],
                fx[k + 1],
                fx[k + 2],
                fx[k + 3]
            ];
            var result = row[0] * col[0] + row[1] * col[1] + row[2] * col[2] + row[3] * col[3];
            product[i + k] = result;
        }
    }
    return product;
}
/**
 * Attempts to return a 4x4 matrix describing the CSS transform
 * matrix passed in, but will return the identity matrix as a
 * fallback.
 *
 * > **Tip:** This method is used to convert a CSS matrix (retrieved as a
 * `string` from computed styles) to its equivalent array format.
 *
 * @param  {string} source - `matrix` or `matrix3d` CSS Transform value.
 * @return {array}
 */ function parse(source) {
    if (typeof source === 'string') {
        var match = source.match(/matrix(3d)?\(([^)]+)\)/);
        if (match) {
            var raw = match[2].split(', ').map(parseFloat);
            return format(raw);
        }
    }
    return identity();
}
/**
 * Returns a 4x4 matrix describing Z-axis rotation.
 *
 * > **Tip:** This is just an alias for `Rematrix.rotateZ` for parity with CSS
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */ function rotate(angle) {
    return rotateZ(angle);
}
/**
 * Returns a 4x4 matrix describing X-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */ function rotateX(angle) {
    var theta = Math.PI / 180 * angle;
    var matrix = identity();
    matrix[5] = matrix[10] = Math.cos(theta);
    matrix[6] = matrix[9] = Math.sin(theta);
    matrix[9] *= -1;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing Y-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */ function rotateY(angle) {
    var theta = Math.PI / 180 * angle;
    var matrix = identity();
    matrix[0] = matrix[10] = Math.cos(theta);
    matrix[2] = matrix[8] = Math.sin(theta);
    matrix[2] *= -1;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing Z-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */ function rotateZ(angle) {
    var theta = Math.PI / 180 * angle;
    var matrix = identity();
    matrix[0] = matrix[5] = Math.cos(theta);
    matrix[1] = matrix[4] = Math.sin(theta);
    matrix[4] *= -1;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing 2D scaling. The first argument
 * is used for both X and Y-axis scaling, unless an optional
 * second argument is provided to explicitly define Y-axis scaling.
 *
 * @param  {number} scalar    - Decimal multiplier.
 * @param  {number} [scalarY] - Decimal multiplier.
 * @return {array}
 */ function scale(scalar, scalarY) {
    var matrix = identity();
    matrix[0] = scalar;
    matrix[5] = typeof scalarY === 'number' ? scalarY : scalar;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing X-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */ function scaleX(scalar) {
    var matrix = identity();
    matrix[0] = scalar;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing Y-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */ function scaleY(scalar) {
    var matrix = identity();
    matrix[5] = scalar;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing Z-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */ function scaleZ(scalar) {
    var matrix = identity();
    matrix[10] = scalar;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing shear. The first argument
 * defines X-axis shearing, and an optional second argument
 * defines Y-axis shearing.
 *
 * @param  {number} angleX   - Measured in degrees.
 * @param  {number} [angleY] - Measured in degrees.
 * @return {array}
 */ function skew(angleX, angleY) {
    var thetaX = Math.PI / 180 * angleX;
    var matrix = identity();
    matrix[4] = Math.tan(thetaX);
    if (angleY) {
        var thetaY = Math.PI / 180 * angleY;
        matrix[1] = Math.tan(thetaY);
    }
    return matrix;
}
/**
 * Returns a 4x4 matrix describing X-axis shear.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */ function skewX(angle) {
    var theta = Math.PI / 180 * angle;
    var matrix = identity();
    matrix[4] = Math.tan(theta);
    return matrix;
}
/**
 * Returns a 4x4 matrix describing Y-axis shear.
 *
 * @param  {number} angle - Measured in degrees
 * @return {array}
 */ function skewY(angle) {
    var theta = Math.PI / 180 * angle;
    var matrix = identity();
    matrix[1] = Math.tan(theta);
    return matrix;
}
/**
 * Returns a CSS Transform property value equivalent to the source matrix.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {string}
 */ function toString(source) {
    return "matrix3d(" + format(source).join(', ') + ")";
}
/**
 * Returns a 4x4 matrix describing 2D translation. The first
 * argument defines X-axis translation, and an optional second
 * argument defines Y-axis translation.
 *
 * @param  {number} distanceX   - Measured in pixels.
 * @param  {number} [distanceY] - Measured in pixels.
 * @return {array}
 */ function translate(distanceX, distanceY) {
    var matrix = identity();
    matrix[12] = distanceX;
    if (distanceY) {
        matrix[13] = distanceY;
    }
    return matrix;
}
/**
 * Returns a 4x4 matrix describing X-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */ function translateX(distance) {
    var matrix = identity();
    matrix[12] = distance;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing Y-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */ function translateY(distance) {
    var matrix = identity();
    matrix[13] = distance;
    return matrix;
}
/**
 * Returns a 4x4 matrix describing Z-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */ function translateZ(distance) {
    var matrix = identity();
    matrix[14] = distance;
    return matrix;
}
;
}}),
"[project]/node_modules/miniraf/dist/miniraf.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var polyfill = function() {
    var clock = Date.now();
    return function(callback) {
        var currentTime = Date.now();
        if (currentTime - clock > 16) {
            clock = currentTime;
            callback(currentTime);
        } else {
            setTimeout(function() {
                return polyfill(callback);
            }, 0);
        }
    };
}();
var index = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || polyfill;
const __TURBOPACK__default__export__ = index;
}}),
"[project]/node_modules/scrollreveal/dist/scrollreveal.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/ __turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tealight$2f$dist$2f$tealight$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tealight/dist/tealight.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rematrix$2f$dist$2f$rematrix$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rematrix/dist/rematrix.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$miniraf$2f$dist$2f$miniraf$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/miniraf/dist/miniraf.es.js [app-client] (ecmascript)");
;
;
;
var defaults = {
    delay: 0,
    distance: '0',
    duration: 600,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 0,
    opacity: 0,
    origin: 'bottom',
    rotate: {
        x: 0,
        y: 0,
        z: 0
    },
    scale: 1,
    cleanup: false,
    container: document.documentElement,
    desktop: true,
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.0,
    viewOffset: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    afterReset: function afterReset() {},
    afterReveal: function afterReveal() {},
    beforeReset: function beforeReset() {},
    beforeReveal: function beforeReveal() {}
};
function failure() {
    document.documentElement.classList.remove('sr');
    return {
        clean: function clean() {},
        destroy: function destroy() {},
        reveal: function reveal() {},
        sync: function sync() {},
        get noop () {
            return true;
        }
    };
}
function success() {
    document.documentElement.classList.add('sr');
    if (document.body) {
        document.body.style.height = '100%';
    } else {
        document.addEventListener('DOMContentLoaded', function() {
            document.body.style.height = '100%';
        });
    }
}
var mount = {
    success: success,
    failure: failure
};
function isObject(x) {
    return x !== null && x instanceof Object && (x.constructor === Object || Object.prototype.toString.call(x) === '[object Object]');
}
function each(collection, callback) {
    if (isObject(collection)) {
        var keys = Object.keys(collection);
        return keys.forEach(function(key) {
            return callback(collection[key], key, collection);
        });
    }
    if (collection instanceof Array) {
        return collection.forEach(function(item, i) {
            return callback(item, i, collection);
        });
    }
    throw new TypeError('Expected either an array or object literal.');
}
function logger(message) {
    var details = [], len = arguments.length - 1;
    while(len-- > 0)details[len] = arguments[len + 1];
    if (this.constructor.debug && console) {
        var report = "%cScrollReveal: " + message;
        details.forEach(function(detail) {
            return report += "\n — " + detail;
        });
        console.log(report, 'color: #ea654b;'); // eslint-disable-line no-console
    }
}
function rinse() {
    var this$1 = this;
    var struct = function() {
        return {
            active: [],
            stale: []
        };
    };
    var elementIds = struct();
    var sequenceIds = struct();
    var containerIds = struct();
    /**
	 * Take stock of active element IDs.
	 */ try {
        each((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tealight$2f$dist$2f$tealight$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('[data-sr-id]'), function(node) {
            var id = parseInt(node.getAttribute('data-sr-id'));
            elementIds.active.push(id);
        });
    } catch (e) {
        throw e;
    }
    /**
	 * Destroy stale elements.
	 */ each(this.store.elements, function(element) {
        if (elementIds.active.indexOf(element.id) === -1) {
            elementIds.stale.push(element.id);
        }
    });
    each(elementIds.stale, function(staleId) {
        return delete this$1.store.elements[staleId];
    });
    /**
	 * Take stock of active container and sequence IDs.
	 */ each(this.store.elements, function(element) {
        if (containerIds.active.indexOf(element.containerId) === -1) {
            containerIds.active.push(element.containerId);
        }
        if (element.hasOwnProperty('sequence')) {
            if (sequenceIds.active.indexOf(element.sequence.id) === -1) {
                sequenceIds.active.push(element.sequence.id);
            }
        }
    });
    /**
	 * Destroy stale containers.
	 */ each(this.store.containers, function(container) {
        if (containerIds.active.indexOf(container.id) === -1) {
            containerIds.stale.push(container.id);
        }
    });
    each(containerIds.stale, function(staleId) {
        var stale = this$1.store.containers[staleId].node;
        stale.removeEventListener('scroll', this$1.delegate);
        stale.removeEventListener('resize', this$1.delegate);
        delete this$1.store.containers[staleId];
    });
    /**
	 * Destroy stale sequences.
	 */ each(this.store.sequences, function(sequence) {
        if (sequenceIds.active.indexOf(sequence.id) === -1) {
            sequenceIds.stale.push(sequence.id);
        }
    });
    each(sequenceIds.stale, function(staleId) {
        return delete this$1.store.sequences[staleId];
    });
}
var getPrefixedCssProp = function() {
    var properties = {};
    var style = document.documentElement.style;
    function getPrefixedCssProperty(name, source) {
        if (source === void 0) source = style;
        if (name && typeof name === 'string') {
            if (properties[name]) {
                return properties[name];
            }
            if (typeof source[name] === 'string') {
                return properties[name] = name;
            }
            if (typeof source["-webkit-" + name] === 'string') {
                return properties[name] = "-webkit-" + name;
            }
            throw new RangeError("Unable to find \"" + name + "\" style property.");
        }
        throw new TypeError('Expected a string.');
    }
    getPrefixedCssProperty.clearCache = function() {
        return properties = {};
    };
    return getPrefixedCssProperty;
}();
function style(element) {
    var computed = window.getComputedStyle(element.node);
    var position = computed.position;
    var config = element.config;
    /**
	 * Generate inline styles
	 */ var inline = {};
    var inlineStyle = element.node.getAttribute('style') || '';
    var inlineMatch = inlineStyle.match(/[\w-]+\s*:\s*[^;]+\s*/gi) || [];
    inline.computed = ("TURBOPACK compile-time truthy", 1) ? inlineMatch.map(function(m) {
        return m.trim();
    }).join('; ') + ';' : ("TURBOPACK unreachable", undefined);
    inline.generated = inlineMatch.some(function(m) {
        return m.match(/visibility\s?:\s?visible/i);
    }) ? inline.computed : inlineMatch.concat([
        'visibility: visible'
    ]).map(function(m) {
        return m.trim();
    }).join('; ') + ';';
    /**
	 * Generate opacity styles
	 */ var computedOpacity = parseFloat(computed.opacity);
    var configOpacity = !isNaN(parseFloat(config.opacity)) ? parseFloat(config.opacity) : parseFloat(computed.opacity);
    var opacity = {
        computed: computedOpacity !== configOpacity ? "opacity: " + computedOpacity + ";" : '',
        generated: computedOpacity !== configOpacity ? "opacity: " + configOpacity + ";" : ''
    };
    /**
	 * Generate transformation styles
	 */ var transformations = [];
    if (parseFloat(config.distance)) {
        var axis = config.origin === 'top' || config.origin === 'bottom' ? 'Y' : 'X';
        /**
		 * Let’s make sure our our pixel distances are negative for top and left.
		 * e.g. { origin: 'top', distance: '25px' } starts at `top: -25px` in CSS.
		 */ var distance = config.distance;
        if (config.origin === 'top' || config.origin === 'left') {
            distance = /^-/.test(distance) ? distance.substr(1) : "-" + distance;
        }
        var ref = distance.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g);
        var value = ref[0];
        var unit = ref[1];
        switch(unit){
            case 'em':
                distance = parseInt(computed.fontSize) * value;
                break;
            case 'px':
                distance = value;
                break;
            case '%':
                /**
				 * Here we use `getBoundingClientRect` instead of
				 * the existing data attached to `element.geometry`
				 * because only the former includes any transformations
				 * current applied to the element.
				 *
				 * If that behavior ends up being unintuitive, this
				 * logic could instead utilize `element.geometry.height`
				 * and `element.geoemetry.width` for the distance calculation
				 */ distance = axis === 'Y' ? element.node.getBoundingClientRect().height * value / 100 : element.node.getBoundingClientRect().width * value / 100;
                break;
            default:
                throw new RangeError('Unrecognized or missing distance unit.');
        }
        if (axis === 'Y') {
            transformations.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rematrix$2f$dist$2f$rematrix$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateY"])(distance));
        } else {
            transformations.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rematrix$2f$dist$2f$rematrix$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateX"])(distance));
        }
    }
    if (config.rotate.x) {
        transformations.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rematrix$2f$dist$2f$rematrix$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateX"])(config.rotate.x));
    }
    if (config.rotate.y) {
        transformations.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rematrix$2f$dist$2f$rematrix$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateY"])(config.rotate.y));
    }
    if (config.rotate.z) {
        transformations.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rematrix$2f$dist$2f$rematrix$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rotateZ"])(config.rotate.z));
    }
    if (config.scale !== 1) {
        if (config.scale === 0) {
            /**
			 * The CSS Transforms matrix interpolation specification
			 * basically disallows transitions of non-invertible
			 * matrixes, which means browsers won't transition
			 * elements with zero scale.
			 *
			 * That’s inconvenient for the API and developer
			 * experience, so we simply nudge their value
			 * slightly above zero; this allows browsers
			 * to transition our element as expected.
			 *
			 * `0.0002` was the smallest number
			 * that performed across browsers.
			 */ transformations.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rematrix$2f$dist$2f$rematrix$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(0.0002));
        } else {
            transformations.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rematrix$2f$dist$2f$rematrix$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(config.scale));
        }
    }
    var transform = {};
    if (transformations.length) {
        transform.property = getPrefixedCssProp('transform');
        /**
		 * The default computed transform value should be one of:
		 * undefined || 'none' || 'matrix()' || 'matrix3d()'
		 */ transform.computed = {
            raw: computed[transform.property],
            matrix: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rematrix$2f$dist$2f$rematrix$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parse"])(computed[transform.property])
        };
        transformations.unshift(transform.computed.matrix);
        var product = transformations.reduce(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rematrix$2f$dist$2f$rematrix$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["multiply"]);
        transform.generated = {
            initial: transform.property + ": matrix3d(" + product.join(', ') + ");",
            final: transform.property + ": matrix3d(" + transform.computed.matrix.join(', ') + ");"
        };
    } else {
        transform.generated = {
            initial: '',
            final: ''
        };
    }
    /**
	 * Generate transition styles
	 */ var transition = {};
    if (opacity.generated || transform.generated.initial) {
        transition.property = getPrefixedCssProp('transition');
        transition.computed = computed[transition.property];
        transition.fragments = [];
        var delay = config.delay;
        var duration = config.duration;
        var easing = config.easing;
        if (opacity.generated) {
            transition.fragments.push({
                delayed: "opacity " + duration / 1000 + "s " + easing + " " + delay / 1000 + "s",
                instant: "opacity " + duration / 1000 + "s " + easing + " 0s"
            });
        }
        if (transform.generated.initial) {
            transition.fragments.push({
                delayed: transform.property + " " + duration / 1000 + "s " + easing + " " + delay / 1000 + "s",
                instant: transform.property + " " + duration / 1000 + "s " + easing + " 0s"
            });
        }
        /**
		 * The default computed transition property should be undefined, or one of:
		 * '' || 'none 0s ease 0s' || 'all 0s ease 0s' || 'all 0s 0s cubic-bezier()'
		 */ var hasCustomTransition = transition.computed && !transition.computed.match(/all 0s|none 0s/);
        if (hasCustomTransition) {
            transition.fragments.unshift({
                delayed: transition.computed,
                instant: transition.computed
            });
        }
        var composed = transition.fragments.reduce(function(composition, fragment, i) {
            composition.delayed += i === 0 ? fragment.delayed : ", " + fragment.delayed;
            composition.instant += i === 0 ? fragment.instant : ", " + fragment.instant;
            return composition;
        }, {
            delayed: '',
            instant: ''
        });
        transition.generated = {
            delayed: transition.property + ": " + composed.delayed + ";",
            instant: transition.property + ": " + composed.instant + ";"
        };
    } else {
        transition.generated = {
            delayed: '',
            instant: ''
        };
    }
    return {
        inline: inline,
        opacity: opacity,
        position: position,
        transform: transform,
        transition: transition
    };
}
/**
 * apply a CSS string to an element using the CSSOM (element.style) rather
 * than setAttribute, which may violate the content security policy.
 *
 * @param {Node}   [el]  Element to receive styles.
 * @param {string} [declaration] Styles to apply.
 */ function applyStyle(el, declaration) {
    declaration.split(';').forEach(function(pair) {
        var ref = pair.split(':');
        var property = ref[0];
        var value = ref.slice(1);
        if (property && value) {
            el.style[property.trim()] = value.join(':');
        }
    });
}
function clean(target) {
    var this$1 = this;
    var dirty;
    try {
        each((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tealight$2f$dist$2f$tealight$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(target), function(node) {
            var id = node.getAttribute('data-sr-id');
            if (id !== null) {
                dirty = true;
                var element = this$1.store.elements[id];
                if (element.callbackTimer) {
                    window.clearTimeout(element.callbackTimer.clock);
                }
                applyStyle(element.node, element.styles.inline.generated);
                node.removeAttribute('data-sr-id');
                delete this$1.store.elements[id];
            }
        });
    } catch (e) {
        return logger.call(this, 'Clean failed.', e.message);
    }
    if (dirty) {
        try {
            rinse.call(this);
        } catch (e) {
            return logger.call(this, 'Clean failed.', e.message);
        }
    }
}
function destroy() {
    var this$1 = this;
    /**
	 * Remove all generated styles and element ids
	 */ each(this.store.elements, function(element) {
        applyStyle(element.node, element.styles.inline.generated);
        element.node.removeAttribute('data-sr-id');
    });
    /**
	 * Remove all event listeners.
	 */ each(this.store.containers, function(container) {
        var target = container.node === document.documentElement ? window : container.node;
        target.removeEventListener('scroll', this$1.delegate);
        target.removeEventListener('resize', this$1.delegate);
    });
    /**
	 * Clear all data from the store
	 */ this.store = {
        containers: {},
        elements: {},
        history: [],
        sequences: {}
    };
}
function deepAssign(target) {
    var sources = [], len = arguments.length - 1;
    while(len-- > 0)sources[len] = arguments[len + 1];
    if (isObject(target)) {
        each(sources, function(source) {
            each(source, function(data, key) {
                if (isObject(data)) {
                    if (!target[key] || !isObject(target[key])) {
                        target[key] = {};
                    }
                    deepAssign(target[key], data);
                } else {
                    target[key] = data;
                }
            });
        });
        return target;
    } else {
        throw new TypeError('Target must be an object literal.');
    }
}
function isMobile(agent) {
    if (agent === void 0) agent = navigator.userAgent;
    return /Android|iPhone|iPad|iPod/i.test(agent);
}
var nextUniqueId = function() {
    var uid = 0;
    return function() {
        return uid++;
    };
}();
function initialize() {
    var this$1 = this;
    rinse.call(this);
    each(this.store.elements, function(element) {
        var styles = [
            element.styles.inline.generated
        ];
        if (element.visible) {
            styles.push(element.styles.opacity.computed);
            styles.push(element.styles.transform.generated.final);
            element.revealed = true;
        } else {
            styles.push(element.styles.opacity.generated);
            styles.push(element.styles.transform.generated.initial);
            element.revealed = false;
        }
        applyStyle(element.node, styles.filter(function(s) {
            return s !== '';
        }).join(' '));
    });
    each(this.store.containers, function(container) {
        var target = container.node === document.documentElement ? window : container.node;
        target.addEventListener('scroll', this$1.delegate);
        target.addEventListener('resize', this$1.delegate);
    });
    /**
	 * Manually invoke delegate once to capture
	 * element and container dimensions, container
	 * scroll position, and trigger any valid reveals
	 */ this.delegate();
    /**
	 * Wipe any existing `setTimeout` now
	 * that initialization has completed.
	 */ this.initTimeout = null;
}
function animate(element, force) {
    if (force === void 0) force = {};
    var pristine = force.pristine || this.pristine;
    var delayed = element.config.useDelay === 'always' || element.config.useDelay === 'onload' && pristine || element.config.useDelay === 'once' && !element.seen;
    var shouldReveal = element.visible && !element.revealed;
    var shouldReset = !element.visible && element.revealed && element.config.reset;
    if (force.reveal || shouldReveal) {
        return triggerReveal.call(this, element, delayed);
    }
    if (force.reset || shouldReset) {
        return triggerReset.call(this, element);
    }
}
function triggerReveal(element, delayed) {
    var styles = [
        element.styles.inline.generated,
        element.styles.opacity.computed,
        element.styles.transform.generated.final
    ];
    if (delayed) {
        styles.push(element.styles.transition.generated.delayed);
    } else {
        styles.push(element.styles.transition.generated.instant);
    }
    element.revealed = element.seen = true;
    applyStyle(element.node, styles.filter(function(s) {
        return s !== '';
    }).join(' '));
    registerCallbacks.call(this, element, delayed);
}
function triggerReset(element) {
    var styles = [
        element.styles.inline.generated,
        element.styles.opacity.generated,
        element.styles.transform.generated.initial,
        element.styles.transition.generated.instant
    ];
    element.revealed = false;
    applyStyle(element.node, styles.filter(function(s) {
        return s !== '';
    }).join(' '));
    registerCallbacks.call(this, element);
}
function registerCallbacks(element, isDelayed) {
    var this$1 = this;
    var duration = isDelayed ? element.config.duration + element.config.delay : element.config.duration;
    var beforeCallback = element.revealed ? element.config.beforeReveal : element.config.beforeReset;
    var afterCallback = element.revealed ? element.config.afterReveal : element.config.afterReset;
    var elapsed = 0;
    if (element.callbackTimer) {
        elapsed = Date.now() - element.callbackTimer.start;
        window.clearTimeout(element.callbackTimer.clock);
    }
    beforeCallback(element.node);
    element.callbackTimer = {
        start: Date.now(),
        clock: window.setTimeout(function() {
            afterCallback(element.node);
            element.callbackTimer = null;
            if (element.revealed && !element.config.reset && element.config.cleanup) {
                clean.call(this$1, element.node);
            }
        }, duration - elapsed)
    };
}
function sequence(element, pristine) {
    if (pristine === void 0) pristine = this.pristine;
    /**
	 * We first check if the element should reset.
	 */ if (!element.visible && element.revealed && element.config.reset) {
        return animate.call(this, element, {
            reset: true
        });
    }
    var seq = this.store.sequences[element.sequence.id];
    var i = element.sequence.index;
    if (seq) {
        var visible = new SequenceModel(seq, 'visible', this.store);
        var revealed = new SequenceModel(seq, 'revealed', this.store);
        seq.models = {
            visible: visible,
            revealed: revealed
        };
        /**
		 * If the sequence has no revealed members,
		 * then we reveal the first visible element
		 * within that sequence.
		 *
		 * The sequence then cues a recursive call
		 * in both directions.
		 */ if (!revealed.body.length) {
            var nextId = seq.members[visible.body[0]];
            var nextElement = this.store.elements[nextId];
            if (nextElement) {
                cue.call(this, seq, visible.body[0], -1, pristine);
                cue.call(this, seq, visible.body[0], +1, pristine);
                return animate.call(this, nextElement, {
                    reveal: true,
                    pristine: pristine
                });
            }
        }
        /**
		 * If our element isn’t resetting, we check the
		 * element sequence index against the head, and
		 * then the foot of the sequence.
		 */ if (!seq.blocked.head && i === [].concat(revealed.head).pop() && i >= [].concat(visible.body).shift()) {
            cue.call(this, seq, i, -1, pristine);
            return animate.call(this, element, {
                reveal: true,
                pristine: pristine
            });
        }
        if (!seq.blocked.foot && i === [].concat(revealed.foot).shift() && i <= [].concat(visible.body).pop()) {
            cue.call(this, seq, i, +1, pristine);
            return animate.call(this, element, {
                reveal: true,
                pristine: pristine
            });
        }
    }
}
function Sequence(interval) {
    var i = Math.abs(interval);
    if (!isNaN(i)) {
        this.id = nextUniqueId();
        this.interval = Math.max(i, 16);
        this.members = [];
        this.models = {};
        this.blocked = {
            head: false,
            foot: false
        };
    } else {
        throw new RangeError('Invalid sequence interval.');
    }
}
function SequenceModel(seq, prop, store) {
    var this$1 = this;
    this.head = [];
    this.body = [];
    this.foot = [];
    each(seq.members, function(id, index) {
        var element = store.elements[id];
        if (element && element[prop]) {
            this$1.body.push(index);
        }
    });
    if (this.body.length) {
        each(seq.members, function(id, index) {
            var element = store.elements[id];
            if (element && !element[prop]) {
                if (index < this$1.body[0]) {
                    this$1.head.push(index);
                } else {
                    this$1.foot.push(index);
                }
            }
        });
    }
}
function cue(seq, i, direction, pristine) {
    var this$1 = this;
    var blocked = [
        'head',
        null,
        'foot'
    ][1 + direction];
    var nextId = seq.members[i + direction];
    var nextElement = this.store.elements[nextId];
    seq.blocked[blocked] = true;
    setTimeout(function() {
        seq.blocked[blocked] = false;
        if (nextElement) {
            sequence.call(this$1, nextElement, pristine);
        }
    }, seq.interval);
}
function reveal(target, options, syncing) {
    var this$1 = this;
    if (options === void 0) options = {};
    if (syncing === void 0) syncing = false;
    var containerBuffer = [];
    var sequence$$1;
    var interval = options.interval || defaults.interval;
    try {
        if (interval) {
            sequence$$1 = new Sequence(interval);
        }
        var nodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tealight$2f$dist$2f$tealight$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(target);
        if (!nodes.length) {
            throw new Error('Invalid reveal target.');
        }
        var elements = nodes.reduce(function(elementBuffer, elementNode) {
            var element = {};
            var existingId = elementNode.getAttribute('data-sr-id');
            if (existingId) {
                deepAssign(element, this$1.store.elements[existingId]);
                /**
				 * In order to prevent previously generated styles
				 * from throwing off the new styles, the style tag
				 * has to be reverted to its pre-reveal state.
				 */ applyStyle(element.node, element.styles.inline.computed);
            } else {
                element.id = nextUniqueId();
                element.node = elementNode;
                element.seen = false;
                element.revealed = false;
                element.visible = false;
            }
            var config = deepAssign({}, element.config || this$1.defaults, options);
            if (!config.mobile && isMobile() || !config.desktop && !isMobile()) {
                if (existingId) {
                    clean.call(this$1, element);
                }
                return elementBuffer // skip elements that are disabled
                ;
            }
            var containerNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tealight$2f$dist$2f$tealight$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(config.container)[0];
            if (!containerNode) {
                throw new Error('Invalid container.');
            }
            if (!containerNode.contains(elementNode)) {
                return elementBuffer // skip elements found outside the container
                ;
            }
            var containerId;
            {
                containerId = getContainerId(containerNode, containerBuffer, this$1.store.containers);
                if (containerId === null) {
                    containerId = nextUniqueId();
                    containerBuffer.push({
                        id: containerId,
                        node: containerNode
                    });
                }
            }
            element.config = config;
            element.containerId = containerId;
            element.styles = style(element);
            if (sequence$$1) {
                element.sequence = {
                    id: sequence$$1.id,
                    index: sequence$$1.members.length
                };
                sequence$$1.members.push(element.id);
            }
            elementBuffer.push(element);
            return elementBuffer;
        }, []);
        /**
		 * Modifying the DOM via setAttribute needs to be handled
		 * separately from reading computed styles in the map above
		 * for the browser to batch DOM changes (limiting reflows)
		 */ each(elements, function(element) {
            this$1.store.elements[element.id] = element;
            element.node.setAttribute('data-sr-id', element.id);
        });
    } catch (e) {
        return logger.call(this, 'Reveal failed.', e.message);
    }
    /**
	 * Now that element set-up is complete...
	 * Let’s commit any container and sequence data we have to the store.
	 */ each(containerBuffer, function(container) {
        this$1.store.containers[container.id] = {
            id: container.id,
            node: container.node
        };
    });
    if (sequence$$1) {
        this.store.sequences[sequence$$1.id] = sequence$$1;
    }
    /**
	 * If reveal wasn't invoked by sync, we want to
	 * make sure to add this call to the history.
	 */ if (syncing !== true) {
        this.store.history.push({
            target: target,
            options: options
        });
        /**
		 * Push initialization to the event queue, giving
		 * multiple reveal calls time to be interpreted.
		 */ if (this.initTimeout) {
            window.clearTimeout(this.initTimeout);
        }
        this.initTimeout = window.setTimeout(initialize.bind(this), 0);
    }
}
function getContainerId(node) {
    var collections = [], len = arguments.length - 1;
    while(len-- > 0)collections[len] = arguments[len + 1];
    var id = null;
    each(collections, function(collection) {
        each(collection, function(container) {
            if (id === null && container.node === node) {
                id = container.id;
            }
        });
    });
    return id;
}
/**
 * Re-runs the reveal method for each record stored in history,
 * for capturing new content asynchronously loaded into the DOM.
 */ function sync() {
    var this$1 = this;
    each(this.store.history, function(record) {
        reveal.call(this$1, record.target, record.options, true);
    });
    initialize.call(this);
}
var polyfill = function(x) {
    return (x > 0) - (x < 0) || +x;
};
var mathSign = Math.sign || polyfill;
function getGeometry(target, isContainer) {
    /**
	 * We want to ignore padding and scrollbars for container elements.
	 * More information here: https://goo.gl/vOZpbz
	 */ var height = isContainer ? target.node.clientHeight : target.node.offsetHeight;
    var width = isContainer ? target.node.clientWidth : target.node.offsetWidth;
    var offsetTop = 0;
    var offsetLeft = 0;
    var node = target.node;
    do {
        if (!isNaN(node.offsetTop)) {
            offsetTop += node.offsetTop;
        }
        if (!isNaN(node.offsetLeft)) {
            offsetLeft += node.offsetLeft;
        }
        node = node.offsetParent;
    }while (node)
    return {
        bounds: {
            top: offsetTop,
            right: offsetLeft + width,
            bottom: offsetTop + height,
            left: offsetLeft
        },
        height: height,
        width: width
    };
}
function getScrolled(container) {
    var top, left;
    if (container.node === document.documentElement) {
        top = window.pageYOffset;
        left = window.pageXOffset;
    } else {
        top = container.node.scrollTop;
        left = container.node.scrollLeft;
    }
    return {
        top: top,
        left: left
    };
}
function isElementVisible(element) {
    if (element === void 0) element = {};
    var container = this.store.containers[element.containerId];
    if (!container) {
        return;
    }
    var viewFactor = Math.max(0, Math.min(1, element.config.viewFactor));
    var viewOffset = element.config.viewOffset;
    var elementBounds = {
        top: element.geometry.bounds.top + element.geometry.height * viewFactor,
        right: element.geometry.bounds.right - element.geometry.width * viewFactor,
        bottom: element.geometry.bounds.bottom - element.geometry.height * viewFactor,
        left: element.geometry.bounds.left + element.geometry.width * viewFactor
    };
    var containerBounds = {
        top: container.geometry.bounds.top + container.scroll.top + viewOffset.top,
        right: container.geometry.bounds.right + container.scroll.left - viewOffset.right,
        bottom: container.geometry.bounds.bottom + container.scroll.top - viewOffset.bottom,
        left: container.geometry.bounds.left + container.scroll.left + viewOffset.left
    };
    return elementBounds.top < containerBounds.bottom && elementBounds.right > containerBounds.left && elementBounds.bottom > containerBounds.top && elementBounds.left < containerBounds.right || element.styles.position === 'fixed';
}
function delegate(event, elements) {
    var this$1 = this;
    if (event === void 0) event = {
        type: 'init'
    };
    if (elements === void 0) elements = this.store.elements;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$miniraf$2f$dist$2f$miniraf$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function() {
        var stale = event.type === 'init' || event.type === 'resize';
        each(this$1.store.containers, function(container) {
            if (stale) {
                container.geometry = getGeometry.call(this$1, container, true);
            }
            var scroll = getScrolled.call(this$1, container);
            if (container.scroll) {
                container.direction = {
                    x: mathSign(scroll.left - container.scroll.left),
                    y: mathSign(scroll.top - container.scroll.top)
                };
            }
            container.scroll = scroll;
        });
        /**
		 * Due to how the sequencer is implemented, it’s
		 * important that we update the state of all
		 * elements, before any animation logic is
		 * evaluated (in the second loop below).
		 */ each(elements, function(element) {
            if (stale || element.geometry === undefined) {
                element.geometry = getGeometry.call(this$1, element);
            }
            element.visible = isElementVisible.call(this$1, element);
        });
        each(elements, function(element) {
            if (element.sequence) {
                sequence.call(this$1, element);
            } else {
                animate.call(this$1, element);
            }
        });
        this$1.pristine = false;
    });
}
function isTransformSupported() {
    var style = document.documentElement.style;
    return 'transform' in style || 'WebkitTransform' in style;
}
function isTransitionSupported() {
    var style = document.documentElement.style;
    return 'transition' in style || 'WebkitTransition' in style;
}
var version = "4.0.9";
var boundDelegate;
var boundDestroy;
var boundReveal;
var boundClean;
var boundSync;
var config;
var debug;
var instance;
function ScrollReveal(options) {
    if (options === void 0) options = {};
    var invokedWithoutNew = typeof this === 'undefined' || Object.getPrototypeOf(this) !== ScrollReveal.prototype;
    if (invokedWithoutNew) {
        return new ScrollReveal(options);
    }
    if (!ScrollReveal.isSupported()) {
        logger.call(this, 'Instantiation failed.', 'This browser is not supported.');
        return mount.failure();
    }
    var buffer;
    try {
        buffer = config ? deepAssign({}, config, options) : deepAssign({}, defaults, options);
    } catch (e) {
        logger.call(this, 'Invalid configuration.', e.message);
        return mount.failure();
    }
    try {
        var container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tealight$2f$dist$2f$tealight$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(buffer.container)[0];
        if (!container) {
            throw new Error('Invalid container.');
        }
    } catch (e) {
        logger.call(this, e.message);
        return mount.failure();
    }
    config = buffer;
    if (!config.mobile && isMobile() || !config.desktop && !isMobile()) {
        logger.call(this, 'This device is disabled.', "desktop: " + config.desktop, "mobile: " + config.mobile);
        return mount.failure();
    }
    mount.success();
    this.store = {
        containers: {},
        elements: {},
        history: [],
        sequences: {}
    };
    this.pristine = true;
    boundDelegate = boundDelegate || delegate.bind(this);
    boundDestroy = boundDestroy || destroy.bind(this);
    boundReveal = boundReveal || reveal.bind(this);
    boundClean = boundClean || clean.bind(this);
    boundSync = boundSync || sync.bind(this);
    Object.defineProperty(this, 'delegate', {
        get: function() {
            return boundDelegate;
        }
    });
    Object.defineProperty(this, 'destroy', {
        get: function() {
            return boundDestroy;
        }
    });
    Object.defineProperty(this, 'reveal', {
        get: function() {
            return boundReveal;
        }
    });
    Object.defineProperty(this, 'clean', {
        get: function() {
            return boundClean;
        }
    });
    Object.defineProperty(this, 'sync', {
        get: function() {
            return boundSync;
        }
    });
    Object.defineProperty(this, 'defaults', {
        get: function() {
            return config;
        }
    });
    Object.defineProperty(this, 'version', {
        get: function() {
            return version;
        }
    });
    Object.defineProperty(this, 'noop', {
        get: function() {
            return false;
        }
    });
    return instance ? instance : instance = this;
}
ScrollReveal.isSupported = function() {
    return isTransformSupported() && isTransitionSupported();
};
Object.defineProperty(ScrollReveal, 'debug', {
    get: function() {
        return debug || false;
    },
    set: function(value) {
        return debug = typeof value === 'boolean' ? value : debug;
    }
});
ScrollReveal();
const __TURBOPACK__default__export__ = ScrollReveal;
}}),
}]);

//# sourceMappingURL=_e1b7966b._.js.map