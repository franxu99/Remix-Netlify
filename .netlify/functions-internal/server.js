var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 47,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react4 = require("react"), import_react5 = require("@remix-run/react");

// app/styles/index.css
var styles_default = "/build/_assets/index-4CGGPCYM.css";

// app/components/header.jsx
var import_react3 = require("@remix-run/react");

// public/img/logo.svg
var logo_default = "/build/_assets/logo-YZ2KDQEU.svg";

// app/components/navegacion.jsx
var import_react2 = require("@remix-run/react");

// public/img/carrito.png
var carrito_default = "/build/_assets/carrito-2445OMQO.png";

// app/components/navegacion.jsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Navegacion() {
  let location = (0, import_react2.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "navegacion", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.Link,
      {
        to: "/",
        className: location.pathname === "/" ? "active" : "",
        children: "Inicio"
      },
      void 0,
      !1,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 9,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.Link,
      {
        to: "/nosotros",
        className: location.pathname === "/nosotros" ? "active" : "",
        children: "Nosotros"
      },
      void 0,
      !1,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 15,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.Link,
      {
        to: "/guitarras",
        className: location.pathname === "/guitarras" ? "active" : "",
        children: "Tienda"
      },
      void 0,
      !1,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 21,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.Link,
      {
        to: "/posts",
        className: location.pathname === "/posts" ? "active" : "",
        children: "Blog"
      },
      void 0,
      !1,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 27,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.Link,
      {
        to: "/carrito",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: carrito_default, alt: "Carrito de compras" }, void 0, !1, {
          fileName: "app/components/navegacion.jsx",
          lineNumber: 36,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/navegacion.jsx",
        lineNumber: 33,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/navegacion.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
var navegacion_default = Navegacion;

// app/components/header.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "contenedor barra", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      import_react3.Link,
      {
        to: "/",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "logo", src: logo_default, alt: "Imagen logo" }, void 0, !1, {
          fileName: "app/components/header.jsx",
          lineNumber: 13,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/header.jsx",
        lineNumber: 10,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(navegacion_default, {}, void 0, !1, {
      fileName: "app/components/header.jsx",
      lineNumber: 15,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/header.jsx",
    lineNumber: 9,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/header.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
var header_default = Header;

// app/components/footer.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("footer", { className: "footer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "contenedor contenido", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(navegacion_default, {}, void 0, !1, {
      fileName: "app/components/footer.jsx",
      lineNumber: 10,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "copyright", children: [
      "Todos los derechos reservados ",
      (/* @__PURE__ */ new Date()).getFullYear()
    ] }, void 0, !0, {
      fileName: "app/components/footer.jsx",
      lineNumber: 12,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/footer.jsx",
    lineNumber: 8,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/footer.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var footer_default = Footer;

// app/root.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function meta() {
  return [
    { charset: "utf-8" },
    { title: "GuitarLA - Remix" },
    { name: "viewport", content: "width=device-width,initial-scale=1" }
  ];
}
function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,900;1,700&family=Outfit:wght@400;700;900&display=swap"
    },
    {
      rel: "stylesheet",
      href: styles_default
    }
  ];
}
function App() {
  let carritoLS = typeof window < "u" ? JSON.parse(localStorage.getItem("carrito")) ?? [] : null, [carrito, setCarrito] = (0, import_react4.useState)(carritoLS);
  return (0, import_react4.useEffect)(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]), /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    import_react5.Outlet,
    {
      context: {
        agregarCarrito: (guitarra) => {
          if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
            let carritoActualizado = carrito.map((guitarraState) => (guitarraState.id === guitarra.id && (guitarraState.cantidad += guitarra.cantidad), guitarraState));
            setCarrito(carritoActualizado);
          } else
            setCarrito([...carrito, guitarra]);
        },
        carrito,
        actualizarCantidad: (guitarra) => {
          let carritoActualizado = carrito.map((guitarraState) => (guitarraState.id === guitarra.id && (guitarraState.cantidad = guitarra.cantidad), guitarraState));
          setCarrito(carritoActualizado);
        },
        eliminarProducto: (id) => {
          let carritoActualizado = carrito.filter((guitarraState) => guitarraState.id !== id);
          setCarrito(carritoActualizado);
        }
      }
    },
    void 0,
    !1,
    {
      fileName: "app/root.jsx",
      lineNumber: 95,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 94,
    columnNumber: 5
  }, this);
}
function Document({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("head", { lang: "es-ES", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 112,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 113,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 111,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(header_default, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 116,
        columnNumber: 13
      }, this),
      " ",
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(footer_default, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 118,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 119,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 120,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 115,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 110,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  let error = (0, import_react5.useRouteError)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Document, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "error", children: [
      error.status,
      " ",
      error.statusText,
      " "
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 136,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Link, { className: "error-enlace", to: "/", children: "Tal vez quieras volver a la p\xE1gina principal" }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 137,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 134,
    columnNumber: 5
  }, this);
}

// app/routes/guitarras.$guitarraUrl.jsx
var guitarras_guitarraUrl_exports = {};
__export(guitarras_guitarraUrl_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => guitarras_guitarraUrl_default,
  loader: () => loader,
  meta: () => meta2
});

// app/models/guitarras.server.js
async function getGuitarras() {
  return await (await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)).json();
}
async function getGuitarra(url) {
  return (await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)).json();
}

// app/routes/guitarras.$guitarraUrl.jsx
var import_react6 = require("@remix-run/react"), import_react7 = require("react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
async function loader({ params }) {
  let { guitarraUrl } = params, guitarra = await getGuitarra(guitarraUrl);
  if (guitarra.data.length === 0)
    throw new Response("", {
      status: 404,
      statusText: "Guitarra No Encontrada",
      data: {}
    });
  return guitarra;
}
function ErrorBoundary() {
  let error = (0, import_react6.useRouteError)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "error", children: [
      error.status,
      "  ",
      error.statusText,
      " "
    ] }, void 0, !0, {
      fileName: "app/routes/guitarras.$guitarraUrl.jsx",
      lineNumber: 28,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react6.Link, { className: "error-enlace", to: "/", children: "Tal vez quieras volver a la p\xE1gina principal" }, void 0, !1, {
      fileName: "app/routes/guitarras.$guitarraUrl.jsx",
      lineNumber: 29,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/guitarras.$guitarraUrl.jsx",
    lineNumber: 26,
    columnNumber: 9
  }, this);
}
var meta2 = ({ data }) => data ? [
  {
    title: `GuitarLA - Remix ${data.data[0].attributes.nombre.toUpperCase()}`,
    descripcion: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre.toUpperCase()}`
  }
] : [
  {
    title: "Guitarra No Encontrada"
  },
  {
    descripcion: "Guitarras, venta de guitarras, guitarra no encontrada"
  }
];
function Guitarra() {
  let { agregarCarrito } = (0, import_react6.useOutletContext)(), [cantidad, setCantidad] = (0, import_react7.useState)(0), guitarra = (0, import_react6.useLoaderData)(), { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes, handleSubmit = (e) => {
    if (e.preventDefault(), cantidad < 1) {
      alert("debes seleccionar una cantidad");
      return;
    }
    let guitarraSeleccionada = {
      id: guitarra.data[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      //Al ser el mismo nombre la clave y el valor no hace falta colocarlo dos veces
      precio,
      cantidad
    };
    agregarCarrito(guitarraSeleccionada);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "guitarra", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { className: "imagen", src: imagen.data.attributes.url, alt: `Imagen de la guitarra ${nombre}` }, void 0, !1, {
      fileName: "app/routes/guitarras.$guitarraUrl.jsx",
      lineNumber: 79,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { children: nombre }, void 0, !1, {
        fileName: "app/routes/guitarras.$guitarraUrl.jsx",
        lineNumber: 82,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "descripcion", children: descripcion }, void 0, !1, {
        fileName: "app/routes/guitarras.$guitarraUrl.jsx",
        lineNumber: 85,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "precio", children: precio.toLocaleString("es-ES", { style: "currency", currency: "EUR" }) }, void 0, !1, {
        fileName: "app/routes/guitarras.$guitarraUrl.jsx",
        lineNumber: 88,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("form", { onSubmit: handleSubmit, className: "formulario", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: "cantidad", children: "Cantidad" }, void 0, !1, {
          fileName: "app/routes/guitarras.$guitarraUrl.jsx",
          lineNumber: 93,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "select",
          {
            name: "",
            id: "cantidad",
            onChange: (e) => setCantidad(parseInt(e.target.value)),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "", children: "-- Seleccione --" }, void 0, !1, {
                fileName: "app/routes/guitarras.$guitarraUrl.jsx",
                lineNumber: 97,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "1", children: "1" }, void 0, !1, {
                fileName: "app/routes/guitarras.$guitarraUrl.jsx",
                lineNumber: 98,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "2", children: "2" }, void 0, !1, {
                fileName: "app/routes/guitarras.$guitarraUrl.jsx",
                lineNumber: 99,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "3", children: "3" }, void 0, !1, {
                fileName: "app/routes/guitarras.$guitarraUrl.jsx",
                lineNumber: 100,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "4", children: "4" }, void 0, !1, {
                fileName: "app/routes/guitarras.$guitarraUrl.jsx",
                lineNumber: 101,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: "5", children: "5" }, void 0, !1, {
                fileName: "app/routes/guitarras.$guitarraUrl.jsx",
                lineNumber: 102,
                columnNumber: 21
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/guitarras.$guitarraUrl.jsx",
            lineNumber: 95,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "submit", value: "Agregar al Carrito" }, void 0, !1, {
          fileName: "app/routes/guitarras.$guitarraUrl.jsx",
          lineNumber: 104,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/guitarras.$guitarraUrl.jsx",
        lineNumber: 92,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/guitarras.$guitarraUrl.jsx",
      lineNumber: 81,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/guitarras.$guitarraUrl.jsx",
    lineNumber: 78,
    columnNumber: 5
  }, this);
}
var guitarras_guitarraUrl_default = Guitarra;

// app/routes/guitarras._index.jsx
var guitarras_index_exports = {};
__export(guitarras_index_exports, {
  default: () => guitarras_index_default,
  loader: () => loader2,
  meta: () => meta3
});
var import_react9 = require("@remix-run/react");

// app/components/guitarra.jsx
var import_react8 = require("@remix-run/react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Guitarra2({ guitarra }) {
  let { nombre, descripcion, precio, imagen, url } = guitarra;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "guitarra", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: imagen.data.attributes.formats.medium.url, alt: `Imagen guitarra ${nombre}` }, void 0, !1, {
      fileName: "app/components/guitarra.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { children: nombre }, void 0, !1, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 9,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "descripcion", children: descripcion }, void 0, !1, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 10,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "precio", children: precio.toLocaleString("es-ES", { style: "currency", currency: "EUR" }) }, void 0, !1, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 11,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        import_react8.Link,
        {
          className: "enlace",
          to: `/guitarras/${url}`,
          children: "Ver Producto"
        },
        void 0,
        !1,
        {
          fileName: "app/components/guitarra.jsx",
          lineNumber: 12,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/guitarra.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/guitarra.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
var guitarra_default = Guitarra2;

// app/components/listado-guitarras.jsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function ListadoGuitarras({ guitarras }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "heading", children: "Nuestra Colecci\xF3n" }, void 0, !1, {
      fileName: "app/components/listado-guitarras.jsx",
      lineNumber: 6,
      columnNumber: 9
    }, this),
    guitarras.length && //Si hay guitarras generamos el div con todas las guitarras que nos devuelva nuestra API
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "guitarras-grid", children: guitarras.map((guitarra) => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      guitarra_default,
      {
        guitarra: guitarra == null ? void 0 : guitarra.attributes
      },
      guitarra == null ? void 0 : guitarra.id,
      !1,
      {
        fileName: "app/components/listado-guitarras.jsx",
        lineNumber: 12,
        columnNumber: 21
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/listado-guitarras.jsx",
      lineNumber: 10,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/listado-guitarras.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var listado_guitarras_default = ListadoGuitarras;

// app/routes/guitarras._index.jsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function meta3() {
  return [
    {
      title: "GuitarLA - Tienda de Guitarras",
      descripcion: "GuitarLA - Nuestra coleccion de guitarras"
    }
  ];
}
async function loader2() {
  return (await getGuitarras()).data;
}
function Tienda() {
  let guitarras = (0, import_react9.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    listado_guitarras_default,
    {
      guitarras
    },
    void 0,
    !1,
    {
      fileName: "app/routes/guitarras._index.jsx",
      lineNumber: 24,
      columnNumber: 5
    },
    this
  );
}
var guitarras_index_default = Tienda;

// app/routes/posts.$postUrl.jsx
var posts_postUrl_exports = {};
__export(posts_postUrl_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  default: () => posts_postUrl_default,
  loader: () => loader3,
  meta: () => meta4
});

// app/models/posts.server.js
async function getPosts() {
  return await (await fetch(`${process.env.API_URL}/posts?populate=imagen`)).json();
}
async function getPost(url) {
  return (await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)).json();
}

// app/routes/posts.$postUrl.jsx
var import_react10 = require("@remix-run/react");

// app/utils/helpers.js
var formatearFecha = (fecha) => {
  let nuevaFecha = new Date(fecha), opciones = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return nuevaFecha.toLocaleDateString("es-ES", opciones);
};

// app/routes/posts.$postUrl.jsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
async function loader3({ params }) {
  let post = await getPost(params.postUrl);
  if (post.data.length === 0)
    throw new Response("", {
      status: 404,
      statusText: "Guitarra No Encontrada",
      data: {}
    });
  return post;
}
function ErrorBoundary2() {
  let error = (0, import_react10.useRouteError)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "error", children: [
      error.status,
      "  ",
      error.statusText,
      " "
    ] }, void 0, !0, {
      fileName: "app/routes/posts.$postUrl.jsx",
      lineNumber: 27,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react10.Link, { className: "error-enlace", to: "/", children: "Tal vez quieras volver a la p\xE1gina principal" }, void 0, !1, {
      fileName: "app/routes/posts.$postUrl.jsx",
      lineNumber: 28,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/posts.$postUrl.jsx",
    lineNumber: 25,
    columnNumber: 13
  }, this);
}
function meta4({ data }) {
  return data ? [
    {
      title: `GuitarLA - Remix ${data.data[0].attributes.titulo}`
    },
    {
      descripcion: `Post ${data.data[0].attributes.titulo}`
    }
  ] : [
    {
      title: "Post No Encontrado"
    },
    {
      descripcion: "Post, post no encontrado"
    }
  ];
}
function Post() {
  let post = (0, import_react10.useLoaderData)(), { titulo, contenido, imagen, publishedAt } = post.data[0].attributes;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("article", { className: "post mt-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h3", { className: "titulo", children: titulo }, void 0, !1, {
      fileName: "app/routes/posts.$postUrl.jsx",
      lineNumber: 63,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("img", { className: "imagen", src: imagen.data.attributes.url, alt: `Imagen blog ${titulo}` }, void 0, !1, {
      fileName: "app/routes/posts.$postUrl.jsx",
      lineNumber: 64,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "fecha", children: formatearFecha(publishedAt) }, void 0, !1, {
        fileName: "app/routes/posts.$postUrl.jsx",
        lineNumber: 66,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "texto", children: contenido }, void 0, !1, {
        fileName: "app/routes/posts.$postUrl.jsx",
        lineNumber: 67,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/posts.$postUrl.jsx",
      lineNumber: 65,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/posts.$postUrl.jsx",
    lineNumber: 62,
    columnNumber: 5
  }, this);
}
var posts_postUrl_default = Post;

// app/routes/posts._index.jsx
var posts_index_exports = {};
__export(posts_index_exports, {
  default: () => posts_index_default,
  loader: () => loader4
});
var import_react11 = require("@remix-run/react");

// app/components/post.jsx
var import_react_router_dom = require("react-router-dom");
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function Post2({ post }) {
  let { titulo, contenido, url, imagen, publishedAt } = post.attributes;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("article", { className: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { className: "imagen", src: imagen.data.attributes.formats.small.url, alt: `Imagen blog ${titulo}` }, void 0, !1, {
      fileName: "app/components/post.jsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h3", { className: "titulo-post", children: titulo }, void 0, !1, {
        fileName: "app/components/post.jsx",
        lineNumber: 12,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "fecha", children: formatearFecha(publishedAt) }, void 0, !1, {
        fileName: "app/components/post.jsx",
        lineNumber: 13,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "resumen", children: contenido }, void 0, !1, {
        fileName: "app/components/post.jsx",
        lineNumber: 14,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react_router_dom.Link, { className: "enlace", to: `/posts/${url}`, children: "Leer Post" }, void 0, !1, {
        fileName: "app/components/post.jsx",
        lineNumber: 15,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/post.jsx",
      lineNumber: 11,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/post.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/components/listado-posts.jsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function ListadoPosts({ posts }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { className: "heading", children: "Blog" }, void 0, !1, {
      fileName: "app/components/listado-posts.jsx",
      lineNumber: 6,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "blog", children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      Post2,
      {
        post
      },
      post.id,
      !1,
      {
        fileName: "app/components/listado-posts.jsx",
        lineNumber: 9,
        columnNumber: 17
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/listado-posts.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/listado-posts.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var listado_posts_default = ListadoPosts;

// app/routes/posts._index.jsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
async function loader4() {
  return (await getPosts()).data;
}
function Blog() {
  let posts = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    listado_posts_default,
    {
      posts
    },
    void 0,
    !1,
    {
      fileName: "app/routes/posts._index.jsx",
      lineNumber: 14,
      columnNumber: 7
    },
    this
  );
}
var posts_index_default = Blog;

// app/routes/guitarras.jsx
var guitarras_exports = {};
__export(guitarras_exports, {
  default: () => guitarras_default2,
  links: () => links2
});
var import_react12 = require("@remix-run/react");

// app/styles/guitarras.css
var guitarras_default = "/build/_assets/guitarras-46ZMUC5L.css";

// app/routes/guitarras.jsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function links2() {
  return [
    {
      rel: "stylesheet",
      href: guitarras_default
    }
  ];
}
function Tienda2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    import_react12.Outlet,
    {
      context: (0, import_react12.useOutletContext)()
    },
    void 0,
    !1,
    {
      fileName: "app/routes/guitarras.jsx",
      lineNumber: 20,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/guitarras.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
var guitarras_default2 = Tienda2;

// app/routes/nosotros.jsx
var nosotros_exports = {};
__export(nosotros_exports, {
  default: () => nosotros_default3,
  links: () => links3,
  meta: () => meta5
});

// public/img/nosotros.jpg
var nosotros_default = "/build/_assets/nosotros-55PFFMUZ.jpg";

// app/styles/nosotros.css
var nosotros_default2 = "/build/_assets/nosotros-CXXP4N52.css";

// app/routes/nosotros.jsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function meta5() {
  return [
    { title: "GuitarLA - Nosotros" }
  ];
}
function links3() {
  return [
    {
      rel: "stylesheet",
      href: nosotros_default2
    },
    {
      rel: "preload",
      href: nosotros_default,
      as: "image"
    }
  ];
}
function Nosotros() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("main", { className: "contenedor nosotros", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { className: "heading", children: "Nosotros" }, void 0, !1, {
      fileName: "app/routes/nosotros.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("img", { src: nosotros_default, alt: "Imagen sobre nosotros" }, void 0, !1, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: "Nulla mi dui, accumsan eu rhoncus sit amet, dignissim non neque. Aenean sagittis cursus tellus, id varius lacus laoreet id. Quisque fringilla nunc a mauris vulputate bibendum. Phasellus elit ante, lobortis quis venenatis et, gravida nec orci. Donec vel accumsan metus. Ut ultricies vestibulum enim, non ornare magna volutpat egestas. Pellentesque sagittis elit a placerat elementum." }, void 0, !1, {
          fileName: "app/routes/nosotros.jsx",
          lineNumber: 37,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: "Quisque vel mauris egestas, condimentum enim in, rutrum velit. Sed accumsan laoreet ex. Aenean ac consequat velit, a pellentesque tellus. Vestibulum eleifend risus pretium, rutrum sem eu, viverra quam. Ut ultrices pulvinar suscipit. Nulla facilisi. Praesent finibus sagittis ipsum nec mattis. Duis pretium quam id enim porta, eu posuere est sodales. Curabitur ut accumsan urna. Pellentesque vitae ipsum dui. Aliquam ac dignissim tellus, vitae sollicitudin neque. Donec vel ligula placerat turpis laoreet ornare. Nunc dapibus eu libero id fermentum. Cras ac ornare quam. Nam sit amet volutpat nisl, auctor sagittis erat." }, void 0, !1, {
          fileName: "app/routes/nosotros.jsx",
          lineNumber: 38,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/nosotros.jsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/nosotros.jsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
var nosotros_default3 = Nosotros;

// app/routes/carrito.jsx
var carrito_exports = {};
__export(carrito_exports, {
  default: () => carrito_default3,
  links: () => links4,
  meta: () => meta6
});
var import_react13 = require("@remix-run/react"), import_react14 = require("react"), import_remix_utils = require("remix-utils");

// app/styles/carrito.css
var carrito_default2 = "/build/_assets/carrito-XHMADJPL.css";

// app/routes/carrito.jsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function links4() {
  return [
    {
      rel: "stylesheet",
      href: carrito_default2
    }
  ];
}
function meta6() {
  return [
    {
      title: "GuitarLA - Carrito de Compras",
      description: "Venta de guitarras, m\xFAsica, blog, carrito de compras, tienda"
    }
  ];
}
function Carrito() {
  let { carrito, actualizarCantidad, eliminarProducto } = (0, import_react13.useOutletContext)(), [total, setTotal] = (0, import_react14.useState)(0);
  return (0, import_react14.useEffect)(() => {
    let calculoTotal = carrito.reduce((total2, producto) => total2 + producto.cantidad * producto.precio, 0);
    setTotal(calculoTotal);
  }, [carrito]), /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_remix_utils.ClientOnly, { children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("main", { className: "contenedor", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h1", { className: "heading", children: "Carrito de Compras" }, void 0, !1, {
      fileName: "app/routes/carrito.jsx",
      lineNumber: 39,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "carrito", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { children: "Articulos" }, void 0, !1, {
          fileName: "app/routes/carrito.jsx",
          lineNumber: 43,
          columnNumber: 25
        }, this),
        (carrito == null ? void 0 : carrito.length) === 0 ? "Carrito Vac\xEDo" : carrito == null ? void 0 : carrito.map(
          (producto) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "producto", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("img", { src: producto.imagen, alt: `Imagen del producto ${producto.nombre}` }, void 0, !1, {
              fileName: "app/routes/carrito.jsx",
              lineNumber: 49,
              columnNumber: 41
            }, this) }, void 0, !1, {
              fileName: "app/routes/carrito.jsx",
              lineNumber: 48,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "nombre", children: producto.nombre }, void 0, !1, {
                fileName: "app/routes/carrito.jsx",
                lineNumber: 52,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "cantidad", children: "Cantidad: " }, void 0, !1, {
                fileName: "app/routes/carrito.jsx",
                lineNumber: 53,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
                "select",
                {
                  value: producto.cantidad,
                  className: "select",
                  onChange: (e) => actualizarCantidad({
                    cantidad: +e.target.value,
                    id: producto.id
                  }),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("option", { value: "1", children: "1" }, void 0, !1, {
                      fileName: "app/routes/carrito.jsx",
                      lineNumber: 62,
                      columnNumber: 45
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("option", { value: "2", children: "2" }, void 0, !1, {
                      fileName: "app/routes/carrito.jsx",
                      lineNumber: 63,
                      columnNumber: 45
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("option", { value: "3", children: "3" }, void 0, !1, {
                      fileName: "app/routes/carrito.jsx",
                      lineNumber: 64,
                      columnNumber: 45
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("option", { value: "4", children: "4" }, void 0, !1, {
                      fileName: "app/routes/carrito.jsx",
                      lineNumber: 65,
                      columnNumber: 45
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("option", { value: "5", children: "5" }, void 0, !1, {
                      fileName: "app/routes/carrito.jsx",
                      lineNumber: 66,
                      columnNumber: 45
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/carrito.jsx",
                  lineNumber: 55,
                  columnNumber: 41
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "precio", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { children: producto.precio.toLocaleString("es-ES", { style: "currency", currency: "EUR" }) }, void 0, !1, {
                fileName: "app/routes/carrito.jsx",
                lineNumber: 69,
                columnNumber: 63
              }, this) }, void 0, !1, {
                fileName: "app/routes/carrito.jsx",
                lineNumber: 69,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "subtotal", children: [
                "Subtotal: ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { children: (producto.cantidad * producto.precio).toLocaleString("es-ES", { style: "currency", currency: "EUR" }) }, void 0, !1, {
                  fileName: "app/routes/carrito.jsx",
                  lineNumber: 70,
                  columnNumber: 75
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/carrito.jsx",
                lineNumber: 70,
                columnNumber: 41
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/carrito.jsx",
              lineNumber: 51,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              "button",
              {
                type: "button",
                className: "btn-eliminar",
                onClick: () => eliminarProducto(producto.id),
                children: "X"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/carrito.jsx",
                lineNumber: 72,
                columnNumber: 37
              },
              this
            )
          ] }, producto.id, !0, {
            fileName: "app/routes/carrito.jsx",
            lineNumber: 47,
            columnNumber: 13
          }, this)
        )
      ] }, void 0, !0, {
        fileName: "app/routes/carrito.jsx",
        lineNumber: 42,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("aside", { className: "resumen", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h3", { children: "Resumen del Pedido" }, void 0, !1, {
          fileName: "app/routes/carrito.jsx",
          lineNumber: 83,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { children: [
          "Total a pagar: ",
          total.toLocaleString("es-ES", { style: "currency", currency: "EUR" })
        ] }, void 0, !0, {
          fileName: "app/routes/carrito.jsx",
          lineNumber: 84,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/carrito.jsx",
        lineNumber: 82,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/carrito.jsx",
      lineNumber: 40,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/carrito.jsx",
    lineNumber: 38,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/carrito.jsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}
var carrito_default3 = Carrito;

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => index_default,
  links: () => links5,
  loader: () => loader5,
  meta: () => meta7
});

// app/models/curso.server.js
async function getCurso() {
  return await (await fetch(`${process.env.API_URL}/curso?populate=imagen`)).json();
}

// app/routes/_index.jsx
var import_react15 = require("@remix-run/react");

// app/components/curso.jsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function Curso({ curso }) {
  let { titulo, contenido, imagen, publishedAt } = curso;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("section", { className: "curso", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("style", { jsx: "true", children: `
                .curso{
                    background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7) ), url(${imagen.data.attributes.url})
                }
            ` }, void 0, !1, {
      fileName: "app/components/curso.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "contenedor curso-grid", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h2", { className: "heading", children: titulo }, void 0, !1, {
        fileName: "app/components/curso.jsx",
        lineNumber: 17,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "texto", children: contenido }, void 0, !1, {
        fileName: "app/components/curso.jsx",
        lineNumber: 18,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/curso.jsx",
      lineNumber: 16,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/curso.jsx",
      lineNumber: 15,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/curso.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var curso_default = Curso;

// app/styles/blog.css
var blog_default = "/build/_assets/blog-CDKKIW6C.css";

// app/styles/curso.css
var curso_default2 = "/build/_assets/curso-WYUSFDQR.css";

// app/routes/_index.jsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function meta7() {
}
function links5() {
  return [
    {
      rel: "stylesheet",
      href: guitarras_default
    },
    {
      rel: "stylesheet",
      href: blog_default
    },
    {
      rel: "stylesheet",
      href: curso_default2
    }
  ];
}
async function loader5() {
  let [guitarras, posts, curso] = await Promise.all(
    [
      getGuitarras(),
      getPosts(),
      getCurso()
    ]
  );
  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso: curso.data
  };
}
function Index() {
  let { guitarras, posts, curso } = (0, import_react15.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      listado_guitarras_default,
      {
        guitarras
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.jsx",
        lineNumber: 56,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      curso_default,
      {
        curso: curso.attributes
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.jsx",
        lineNumber: 61,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("section", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      listado_posts_default,
      {
        posts
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.jsx",
        lineNumber: 66,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 65,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}
var index_default = Index;

// app/routes/posts.jsx
var posts_exports = {};
__export(posts_exports, {
  default: () => posts_default,
  links: () => links6
});
var import_react16 = require("@remix-run/react");
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function links6() {
  return [
    {
      rel: "stylesheet",
      href: blog_default
    }
  ];
}
function Blog2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react16.Outlet, {}, void 0, !1, {
    fileName: "app/routes/posts.jsx",
    lineNumber: 18,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/posts.jsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
var posts_default = Blog2;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-K7Q4GE2U.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-U7GVGMU5.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-CYUV4RUY.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-DGA7JCTG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-OUQN5T7K.js", imports: ["/build/_shared/chunk-XDJZHEFP.js", "/build/_shared/chunk-GVMXJZQI.js", "/build/_shared/chunk-2PLMSAU3.js", "/build/_shared/chunk-HJT4BV7J.js", "/build/_shared/chunk-HLBUWOW7.js", "/build/_shared/chunk-XL5NEHBQ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/carrito": { id: "routes/carrito", parentId: "root", path: "carrito", index: void 0, caseSensitive: void 0, module: "/build/routes/carrito-SGDM26LO.js", imports: ["/build/_shared/chunk-NMZL6IDN.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/guitarras": { id: "routes/guitarras", parentId: "root", path: "guitarras", index: void 0, caseSensitive: void 0, module: "/build/routes/guitarras-CUCT4BGH.js", imports: ["/build/_shared/chunk-XL5NEHBQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/guitarras.$guitarraUrl": { id: "routes/guitarras.$guitarraUrl", parentId: "routes/guitarras", path: ":guitarraUrl", index: void 0, caseSensitive: void 0, module: "/build/routes/guitarras.$guitarraUrl-V5WCKXBS.js", imports: ["/build/_shared/chunk-2PLMSAU3.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/guitarras._index": { id: "routes/guitarras._index", parentId: "routes/guitarras", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/guitarras._index-JPCQGU6Q.js", imports: ["/build/_shared/chunk-GVMXJZQI.js", "/build/_shared/chunk-2PLMSAU3.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/nosotros": { id: "routes/nosotros", parentId: "root", path: "nosotros", index: void 0, caseSensitive: void 0, module: "/build/routes/nosotros-KSKXGZK2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts": { id: "routes/posts", parentId: "root", path: "posts", index: void 0, caseSensitive: void 0, module: "/build/routes/posts-4U5ETTIP.js", imports: ["/build/_shared/chunk-XDJZHEFP.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts.$postUrl": { id: "routes/posts.$postUrl", parentId: "routes/posts", path: ":postUrl", index: void 0, caseSensitive: void 0, module: "/build/routes/posts.$postUrl-ZLRZ26XP.js", imports: ["/build/_shared/chunk-HLBUWOW7.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/posts._index": { id: "routes/posts._index", parentId: "routes/posts", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/posts._index-WMTA7FYL.js", imports: ["/build/_shared/chunk-HJT4BV7J.js", "/build/_shared/chunk-HLBUWOW7.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "58cbbcf1", hmr: { runtime: "/build/_shared\\chunk-CYUV4RUY.js", timestamp: 1692274725776 }, url: "/build/manifest-58CBBCF1.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/guitarras.$guitarraUrl": {
    id: "routes/guitarras.$guitarraUrl",
    parentId: "routes/guitarras",
    path: ":guitarraUrl",
    index: void 0,
    caseSensitive: void 0,
    module: guitarras_guitarraUrl_exports
  },
  "routes/guitarras._index": {
    id: "routes/guitarras._index",
    parentId: "routes/guitarras",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: guitarras_index_exports
  },
  "routes/posts.$postUrl": {
    id: "routes/posts.$postUrl",
    parentId: "routes/posts",
    path: ":postUrl",
    index: void 0,
    caseSensitive: void 0,
    module: posts_postUrl_exports
  },
  "routes/posts._index": {
    id: "routes/posts._index",
    parentId: "routes/posts",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: posts_index_exports
  },
  "routes/guitarras": {
    id: "routes/guitarras",
    parentId: "root",
    path: "guitarras",
    index: void 0,
    caseSensitive: void 0,
    module: guitarras_exports
  },
  "routes/nosotros": {
    id: "routes/nosotros",
    parentId: "root",
    path: "nosotros",
    index: void 0,
    caseSensitive: void 0,
    module: nosotros_exports
  },
  "routes/carrito": {
    id: "routes/carrito",
    parentId: "root",
    path: "carrito",
    index: void 0,
    caseSensitive: void 0,
    module: carrito_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/posts": {
    id: "routes/posts",
    parentId: "root",
    path: "posts",
    index: void 0,
    caseSensitive: void 0,
    module: posts_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=server.js.map
