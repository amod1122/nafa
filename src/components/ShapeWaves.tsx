// @ts-nocheck
"use client";

// ../../Users/apro7/.gemini/antigravity/brain/40f95756-c90a-47c5-b197-cc74f344bcf2/scratch/preload-helper-gVl0bFl0.js
import * as React from "react";
import * as jsxRuntime from "react/jsx-runtime";
var r = React;
var j = jsxRuntime;

// ../../Users/apro7/.gemini/antigravity/brain/40f95756-c90a-47c5-b197-cc74f344bcf2/scratch/index-BwhfdwL4.js
var Vs = Object.defineProperty;
var ar = (e) => {
  throw TypeError(e);
};
var Ns = (e, t, n) => t in e ? Vs(e, t, { enumerable: true, configurable: true, writable: true, value: n }) : e[t] = n;
var m = (e, t, n) => Ns(e, typeof t != "symbol" ? t + "" : t, n);
var an = (e, t, n) => t.has(e) || ar("Cannot " + n);
var l = (e, t, n) => (an(e, t, "read from private field"), n ? n.call(e) : t.get(e));
var $ = (e, t, n) => t.has(e) ? ar("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n);
var F = (e, t, n, r2) => (an(e, t, "write to private field"), r2 ? r2.call(e, n) : t.set(e, n), n);
var w = (e, t, n) => (an(e, t, "access private method"), n);
var Nn = class extends Error {
  constructor(n) {
    super(n.message, { cause: n.cause });
    m(this, "code");
    m(this, "severity");
    m(this, "fix");
    m(this, "where");
    m(this, "cause");
    m(this, "detail");
    this.name = "VGPUError", this.code = n.code, this.severity = n.severity ?? "error", this.fix = n.fix, this.where = n.where, this.cause = n.cause, this.detail = n.detail;
  }
};
var ie = class extends Nn {
  constructor(t) {
    super({ ...t, severity: "error" }), this.name = "ValidationError";
  }
};
function Os(e) {
  return new Nn({ code: "VGPU-FEATURE-UNSUPPORTED", message: `Adapter does not support requested feature(s): ${e.map((t) => `"${t}"`).join(", ")}.`, fix: "Remove the unsupported name(s) from init({ requiredFeatures: [...] }) or run on an adapter that supports them; gate optional code paths on device.features after init.", where: "init" });
}
function _s(e, t) {
  if (!e) return;
  const n = (t ?? []).filter((r2) => !e.has(r2));
  if (n.length) throw Os(n);
}
var Bs = { map_read: 1, map_write: 2, copy_src: 4, copy_dst: 8, index: 16, vertex: 32, uniform: 64, storage: 128, indirect: 256, query_resolve: 512 };
function Pt(e) {
  const t = globalThis.GPUBufferUsage;
  return e.reduce((n, r2) => n | zs(r2, t), 0);
}
function zs(e, t) {
  const n = e.toUpperCase();
  return (t == null ? void 0 : t[n]) ?? Bs[e];
}
function cr() {
  var e;
  return ((e = globalThis.GPUMapMode) == null ? void 0 : e.READ) ?? 1;
}
var Ws = { copy_src: 1, copy_dst: 2, texture_binding: 4, storage_binding: 8, render_attachment: 16 };
function js(e) {
  const t = globalThis.GPUTextureUsage;
  return e.reduce((n, r2) => n | Ks(r2, t), 0);
}
function Ks(e, t) {
  const n = e.toUpperCase();
  return (t == null ? void 0 : t[n]) ?? Ws[e];
}
function fi(e) {
  return "__vgpuMockBytes" in e;
}
function ur(e) {
  return "__vgpuMockBytes" in e;
}
var qs = 1;
function en(e) {
  return Object.freeze({ kind: e, id: qs++ });
}
var tn = class {
  constructor() {
    m(this, "callbacks", /* @__PURE__ */ new Set());
    m(this, "destroyed", false);
  }
  onDestroy(t, n) {
    return this.destroyed ? (n(t), () => {
    }) : (this.callbacks.add(n), () => {
      this.callbacks.delete(n);
    });
  }
  emit(t) {
    if (this.destroyed) return false;
    this.destroyed = true;
    const n = [...this.callbacks];
    this.callbacks.clear();
    for (const r2 of n) r2(t);
    return true;
  }
};
var Le;
var mt;
var Ie = class {
  constructor(t, n, r2, i = "owned") {
    $(this, Le);
    m(this, "device");
    m(this, "gpu");
    m(this, "options");
    m(this, "ownership");
    m(this, "destroySignal", new tn());
    m(this, "identity", en("buffer"));
    m(this, "destroyed", false);
    this.device = t, this.gpu = n, this.options = r2, this.ownership = i, Object.defineProperty(this, "assertUsable", { value: (s) => w(this, Le, mt).call(this, s) });
  }
  get resourceIdentity() {
    return this.identity;
  }
  onDestroy(t) {
    return this.destroySignal.onDestroy(this, t);
  }
  write(t, n = 0) {
    w(this, Le, mt).call(this, "Buffer.write"), this.ownership === "external" && this.validateExternalOperation("write", n, t.byteLength, "copy_dst");
    try {
      this.device.queue.writeBuffer(this.gpu, n, t);
    } catch (r2) {
      throw this.ownership !== "external" ? r2 : At("Buffer.write", "The external GPUBuffer rejected the write operation.", r2);
    }
  }
  async read(t, n = 0) {
    w(this, Le, mt).call(this, "Buffer.read"), this.ownership === "external" && this.validateExternalOperation("read", n, t, "copy_src");
    try {
      const r2 = await this.device.readback.read(this.gpu, t, n);
      return w(this, Le, mt).call(this, "Buffer.read"), r2;
    } catch (r2) {
      throw r2 instanceof ie || this.ownership !== "external" ? r2 : At("Buffer.read", "The external GPUBuffer rejected the read operation.", r2);
    }
  }
  destroy() {
    this.destroyed || (this.destroyed = true, this.destroySignal.emit(this), this.ownership === "owned" && !fi(this.gpu) && this.gpu.destroy());
  }
  dispose() {
    this.destroy();
  }
  validateExternalOperation(t, n, r2, i) {
    if (!(Number.isSafeInteger(n) && n >= 0 && n % 4 === 0 && Number.isSafeInteger(r2) && r2 >= 0 && r2 % 4 === 0 && n <= this.options.size && r2 <= this.options.size - n)) throw At(`Buffer.${t}`, "External buffer offsets and lengths must be non-negative, 4-byte aligned, and within the buffer size.");
    if (!(this.gpu.usage & Pt([i]))) throw At(`Buffer.${t}`, `External buffer is missing ${i.toUpperCase()} usage.`);
  }
};
Le = /* @__PURE__ */ new WeakSet(), mt = function(t = "Buffer") {
  if (this.destroyed) throw new ie({ code: "VGPU-BUFFER-DISPOSED", message: "Buffer is destroyed.", where: t, fix: "Wrap or create a live GPUBuffer before using it." });
  this.device.assertUsable(t);
};
function At(e, t, n) {
  return new ie({ code: "VGPU-EXTERNAL-BUFFER-VALIDATION", message: t, where: e, cause: n, fix: "Use a buffer with the required usage flags and an aligned in-range operation." });
}
function Hs(e) {
  if (Zs(e)) throw Js();
  const t = { version: 1, mappings: [] }, n = { version: 1, modules: [{ path: "<runtime>", text: e }], diagnostics: [], sourceMap: t, cacheKey: Ys(e) };
  return { kind: "wgsl", wgsl: e, source: { text: e, path: "<runtime>", imports: [] }, ast: n, sourceMap: t, diagnostics: [], cacheKey: n.cacheKey, entryPoints: Xs(e), stats: { lines: e.split(/\r?\n/).length, bytes: new TextEncoder().encode(e).byteLength, bindGroups: 0 } };
}
function Ys(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++) t = Math.imul(t ^ e.charCodeAt(n), 16777619);
  return { default: `vgpu-wgsl-1:${(t >>> 0).toString(16).padStart(8, "0")}` };
}
function Xs(e) {
  const t = [], n = /@(vertex|fragment|compute)\s+fn\s+([A-Za-z_][A-Za-z0-9_]*)/g;
  for (const r2 of e.matchAll(n)) t.push(r2[2]);
  return t;
}
function Zs(e) {
  const t = e.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "").trimStart();
  return t.startsWith("import ") || t.startsWith("import{");
}
function Js() {
  const e = new Error("Runtime WGSL strings cannot contain import statements. Use a build-time loader or @vgpu/wgsl/runtime.");
  return e.name = "VGPUWGSLRuntimeImportError", e.code = "VGPU-WGSL-RUNTIME-IMPORT", e.severity = "error", e.source = "wgsl", e;
}
var fr = Pt(["copy_dst", "map_read"]);
var Qs = class {
  constructor(t) {
    m(this, "device");
    this.device = t;
  }
  async read(t, n, r2) {
    if (fi(t)) return t.__vgpuMockBytes.slice(r2, r2 + n).buffer;
    const i = this.device.createBuffer({ size: n, usage: fr });
    try {
      const s = this.device.createCommandEncoder();
      s.copyBufferToBuffer(t, r2, i, 0, n), this.device.queue.submit([s.finish()]), await i.mapAsync(cr());
      const o = i.getMappedRange().slice(0);
      return dr(i), o;
    } finally {
      lr(i);
    }
  }
  async readTexture(t, n, r2) {
    const [i, s] = n, o = jt(r2, "Readback.readTexture"), a = o.bytesPerPixel, c = eo(i * a, 256), u = c * s, f = this.device.createBuffer({ size: u, usage: fr });
    let d;
    try {
      const p = this.device.createCommandEncoder();
      p.copyTextureToBuffer({ texture: t }, { buffer: f, bytesPerRow: c, rowsPerImage: s }, { width: i, height: s }), this.device.queue.submit([p.finish()]), await f.mapAsync(cr());
      const g = new Uint8Array(f.getMappedRange());
      d = new Uint8Array(i * s * a);
      for (let x = 0; x < s; x++) {
        const y = x * c, v = x * i * a;
        d.set(g.subarray(y, y + i * a), v);
      }
      dr(f);
    } finally {
      lr(f);
    }
    return o.swizzle === "bgra-to-rgba" && di(d), d;
  }
  destroy() {
  }
};
function dr(e) {
  try {
    e.unmap();
  } catch {
  }
}
function lr(e) {
  try {
    e.destroy();
  } catch {
  }
}
function eo(e, t) {
  return Math.ceil(e / t) * t;
}
var hr = { r8unorm: { bytesPerPixel: 1, components: 1, componentType: "unorm8" }, rg8unorm: { bytesPerPixel: 2, components: 2, componentType: "unorm8" }, rgba8unorm: { bytesPerPixel: 4, components: 4, componentType: "unorm8" }, "rgba8unorm-srgb": { bytesPerPixel: 4, components: 4, componentType: "unorm8" }, bgra8unorm: { bytesPerPixel: 4, components: 4, componentType: "unorm8", swizzle: "bgra-to-rgba" }, "bgra8unorm-srgb": { bytesPerPixel: 4, components: 4, componentType: "unorm8", swizzle: "bgra-to-rgba" }, r16float: { bytesPerPixel: 2, components: 1, componentType: "float16" }, rg16float: { bytesPerPixel: 4, components: 2, componentType: "float16" }, rgba16float: { bytesPerPixel: 8, components: 4, componentType: "float16" }, r32float: { bytesPerPixel: 4, components: 1, componentType: "float32" }, rg32float: { bytesPerPixel: 8, components: 2, componentType: "float32" }, rgba32float: { bytesPerPixel: 16, components: 4, componentType: "float32" } };
function jt(e, t) {
  const n = hr[e];
  if (n) return n;
  throw new ie({ code: "VGPU-CORE-UNSUPPORTED-FORMAT", message: `Texture.read does not support format ${e}. Supported formats: ${Object.keys(hr).join(", ")}.`, where: t });
}
function to(e, t, n = "Texture.readFloats") {
  const r2 = jt(t, n), i = r2.bytesPerPixel / r2.components, s = Math.floor(e.byteLength / i), o = new Float32Array(s), a = new DataView(e.buffer, e.byteOffset, e.byteLength);
  for (let c = 0; c < s; c++) r2.componentType === "unorm8" ? o[c] = a.getUint8(c) / 255 : r2.componentType === "float16" ? o[c] = no(a.getUint16(c * 2, true)) : o[c] = a.getFloat32(c * 4, true);
  return o;
}
function no(e) {
  const t = e & 32768 ? -1 : 1, n = e >> 10 & 31, r2 = e & 1023;
  return n === 0 ? t * r2 * 2 ** -24 : n === 31 ? r2 === 0 ? t * Number.POSITIVE_INFINITY : Number.NaN : t * (r2 + 1024) * 2 ** (n - 25);
}
function ro(e, t, n) {
  const r2 = e.slice(0, t[0] * t[1] * n.bytesPerPixel);
  return n.swizzle === "bgra-to-rgba" && di(r2), r2;
}
function di(e) {
  for (let t = 0; t < e.length; t += 4) {
    const n = e[t];
    e[t] = e[t + 2], e[t + 2] = n;
  }
}
function io(e) {
  return { size: e, usage: Pt(["copy_src", "copy_dst"]) };
}
var so = class {
  constructor(t, n = () => {
  }) {
    m(this, "gpu");
    m(this, "guard");
    this.gpu = t, this.guard = n;
  }
  writeBuffer(t, n, r2) {
    this.guard("Queue.writeBuffer"), this.gpu.writeBuffer(t, n, r2);
  }
  async flush() {
    var t, n;
    this.guard("Queue.flush"), await ((n = (t = this.gpu).onSubmittedWorkDone) == null ? void 0 : n.call(t)), this.guard("Queue.flush");
  }
};
var oo = class {
  constructor(t, n) {
    m(this, "gpu");
    m(this, "resolved");
    this.gpu = t, this.resolved = n;
  }
  dispose() {
  }
  get kind() {
    return this.resolved.kind;
  }
  get source() {
    return this.resolved.source;
  }
  get code() {
    return this.resolved.wgsl;
  }
  get entryPoints() {
    return this.resolved.entryPoints;
  }
  get stats() {
    return this.resolved.stats;
  }
};
var ao = /* @__PURE__ */ Symbol.for("vgpu/Texture");
var co = /* @__PURE__ */ Symbol.for("vgpu/Texture/resizeLock");
var ui;
ui = ao;
var ut = class {
  constructor(t, n, r2, i = "owned") {
    m(this, "device");
    m(this, "ownership");
    m(this, ui, true);
    m(this, "destroySignal", new tn());
    m(this, "identity", en("texture"));
    m(this, "currentGpu");
    m(this, "currentOptions");
    m(this, "defaultView", null);
    m(this, "resizeLock");
    m(this, "destroyed", false);
    this.device = t, this.ownership = i, this.currentGpu = n, this.currentOptions = r2, Object.defineProperty(this, co, { value: (s) => {
      this.resizeLock = s;
    } });
  }
  get gpu() {
    return this.currentGpu;
  }
  get options() {
    return this.currentOptions;
  }
  get size() {
    return this.options.size;
  }
  get format() {
    return this.options.format;
  }
  get usage() {
    return this.options.usage;
  }
  get mipLevelCount() {
    return this.options.mipLevelCount ?? 1;
  }
  get sampleCount() {
    return this.options.sampleCount ?? 1;
  }
  get dimension() {
    return this.options.dimension ?? "2d";
  }
  get viewFormats() {
    return this.options.viewFormats ?? [];
  }
  get label() {
    return this.options.label;
  }
  get resourceIdentity() {
    return this.identity;
  }
  onDestroy(t) {
    return this.destroySignal.onDestroy(this, t);
  }
  get view() {
    return this.assertAlive(), this.defaultView ?? (this.defaultView = this.createView()), this.defaultView;
  }
  createView(t) {
    return this.assertAlive("Texture.createView"), this.gpu.createView(t);
  }
  resize(t) {
    if (this.assertAlive(), this.ownership === "external") throw new ie({ code: "VGPU-CORE-EXTERNAL-TEXTURE", message: "Texture wraps an externally owned GPUTexture and cannot be resized.", where: "Texture.resize" });
    if (this.resizeLock) throw new ie({ code: "VGPU-CORE-TEXTURE-RESIZE-LOCKED", message: this.resizeLock, where: "Texture.resize" });
    const n = this.options.size[2] ?? 1, r2 = t[2] ?? n;
    if (this.options.size[0] === t[0] && this.options.size[1] === t[1] && n === r2) return false;
    const i = t[2] === void 0 && this.options.size[2] === void 0 ? [t[0], t[1]] : [t[0], t[1], r2], s = { ...this.options, size: i }, o = this.gpu;
    return this.currentGpu = this.device.gpu.createTexture(li(s)), this.currentOptions = s, this.defaultView = null, o.destroy(), true;
  }
  async read() {
    this.assertAlive("Texture.read");
    const t = jt(this.options.format, "Texture.read");
    if (ur(this.gpu)) return ro(this.gpu.__vgpuMockBytes, this.options.size, t);
    const n = await this.device.readback.readTexture(this.gpu, this.options.size, this.options.format);
    return this.assertAlive("Texture.read"), n;
  }
  async readFloats() {
    return jt(this.options.format, "Texture.readFloats"), to(await this.read(), this.options.format);
  }
  destroy() {
    this.destroyed || (this.destroyed = true, this.defaultView = null, this.destroySignal.emit(this), this.ownership !== "external" && (ur(this.gpu) || this.gpu.destroy()));
  }
  dispose() {
    this.destroy();
  }
  assertAlive(t = "Texture") {
    var n, r2;
    if (this.destroyed) throw new ie({ code: "VGPU-CORE-TEXTURE-DESTROYED", message: "Texture is destroyed", where: t });
    (r2 = (n = this.device).assertUsable) == null || r2.call(n, t);
  }
};
function li(e) {
  const t = { label: e.label, size: { width: e.size[0], height: e.size[1], depthOrArrayLayers: e.size[2] ?? 1 }, format: e.format, usage: js(e.usage) };
  return e.mipLevelCount !== void 0 && (t.mipLevelCount = e.mipLevelCount), e.sampleCount !== void 0 && (t.sampleCount = e.sampleCount), e.dimension !== void 0 && (t.dimension = e.dimension), e.viewFormats !== void 0 && (t.viewFormats = [...e.viewFormats]), t;
}
var W;
var Q;
var uo = class {
  constructor(t, n = null, r2 = "owned", i = {}) {
    $(this, W);
    m(this, "gpu");
    m(this, "adapterInfo");
    m(this, "queue");
    m(this, "readback");
    m(this, "isCompatibilityMode");
    m(this, "scopes", []);
    m(this, "ownership");
    m(this, "state", "alive");
    m(this, "lossInfo");
    m(this, "observeLoss", true);
    this.gpu = t, this.adapterInfo = n, Object.defineProperty(this, "assertUsable", { value: (a) => w(this, W, Q).call(this, a) }), this.ownership = typeof r2 == "string" ? r2 : "owned";
    const s = typeof r2 == "string" ? i : r2;
    this.isCompatibilityMode = s.isCompatibilityMode ?? false, this.queue = new so(t.queue, (a) => w(this, W, Q).call(this, a)), this.readback = new Qs(t);
    const o = t.lost;
    o && typeof o.then == "function" && Promise.resolve(o).then((a) => {
      !this.observeLoss || this.state !== "alive" || (this.lossInfo = a, this.state = "lost");
    }, () => {
    });
  }
  get limits() {
    return w(this, W, Q).call(this, "Device.limits"), this.gpu.limits;
  }
  get features() {
    return w(this, W, Q).call(this, "Device.features"), this.gpu.features;
  }
  createShader(t) {
    w(this, W, Q).call(this, "Device.createShader");
    const n = typeof t == "string" ? Hs(t) : t;
    return new oo(this.gpu.createShaderModule({ code: n.wgsl }), n);
  }
  createTexture(t) {
    return w(this, W, Q).call(this, "Device.createTexture"), new ut(this, this.gpu.createTexture(li(t)), t);
  }
  createBuffer(t) {
    w(this, W, Q).call(this, "Device.createBuffer");
    const n = fo(t);
    n && this.captureError(n);
    const r2 = n ? io(Math.max(4, t.size || 4)) : lo(t);
    return new Ie(this, this.gpu.createBuffer(r2), t);
  }
  wrapBuffer(t) {
    if (w(this, W, Q).call(this, "Device.wrapBuffer"), !po(t)) throw new ie({ code: "VGPU-EXTERNAL-BUFFER-INVALID", message: "Device.wrapBuffer requires a GPUBuffer with finite size and usage properties.", where: "Device.wrapBuffer", fix: "Pass a live GPUBuffer created for this GPUDevice." });
    const n = { size: t.size, usage: go(t.usage), ...t.label ? { label: t.label } : {} };
    return new Ie(this, t, n, "external");
  }
  pushErrorScope(t) {
    var n, r2;
    w(this, W, Q).call(this, "Device.pushErrorScope"), this.scopes.push([]), (r2 = (n = this.gpu).pushErrorScope) == null || r2.call(n, t);
  }
  async popErrorScope() {
    var r2, i;
    w(this, W, Q).call(this, "Device.popErrorScope");
    const t = this.scopes.pop(), n = await ((i = (r2 = this.gpu).popErrorScope) == null ? void 0 : i.call(r2));
    return w(this, W, Q).call(this, "Device.popErrorScope"), (t == null ? void 0 : t[0]) ?? ho(n) ?? null;
  }
  destroy() {
    if (this.state === "disposed") return;
    const t = this.state === "lost";
    this.state = "disposed", this.observeLoss = false, this.scopes.length = 0, this.readback.destroy(), this.ownership === "owned" && !t && this.gpu.destroy();
  }
  dispose() {
    this.destroy();
  }
  captureError(t) {
    const n = this.scopes.at(-1);
    if (n) n.push(t);
    else throw t;
  }
};
W = /* @__PURE__ */ new WeakSet(), Q = function(t) {
  var i, s;
  if (this.state === "alive") return;
  if (this.state === "disposed") throw new ie({ code: "VGPU-DEVICE-DISPOSED", message: "The GPU device wrapper has been disposed.", where: t, fix: "Create a new Gpu instance before performing more work." });
  const n = (i = this.lossInfo) == null ? void 0 : i.reason, r2 = (s = this.lossInfo) == null ? void 0 : s.message;
  throw new ie({ code: "VGPU-DEVICE-LOST", message: `The GPU device was lost${n ? ` (${n})` : ""}${r2 ? `: ${r2}` : "."}`, where: t, cause: this.lossInfo });
};
function fo(e) {
  return !Number.isFinite(e.size) || e.size <= 0 ? pr("Buffer size must be greater than zero.") : e.usage.length === 0 ? pr("Buffer usage must not be empty.") : null;
}
function pr(e) {
  return new ie({ code: "VGPU-CORE-INVALID-USAGE", message: e, where: "Device.createBuffer" });
}
function lo(e) {
  return { label: e.label, size: e.size, usage: Pt(e.usage) };
}
function ho(e) {
  return e ? new ie({ code: "VGPU-CORE-VALIDATION", message: e.message, where: "GPUDevice.popErrorScope", cause: e }) : null;
}
function po(e) {
  if (typeof e != "object" && typeof e != "function" || e === null) return false;
  const t = e;
  return Number.isSafeInteger(t.size) && (t.size ?? -1) >= 0 && Number.isSafeInteger(t.usage) && (t.usage ?? -1) >= 0 && typeof t.destroy == "function";
}
var mo = ["map_read", "map_write", "copy_src", "copy_dst", "index", "vertex", "uniform", "storage", "indirect", "query_resolve"];
function go(e) {
  return mo.filter((t) => (e & Pt([t])) !== 0);
}
var hi = /* @__PURE__ */ new WeakMap();
var wo = /* @__PURE__ */ new WeakMap();
function bo(e, t) {
  return hi.set(e, xo(t)), e;
}
function yt(e) {
  return hi.get(e);
}
function pi(e) {
  return wo.get(e);
}
function xo(e) {
  return { entries: e.entries.map((t) => ({ ...t })) };
}
var S = class extends Nn {
};
function yo(e, t, n, r2, i, s) {
  const o = t === "vertex" ? "Vertex" : "Fragment", a = t === "vertex" ? "VERTEX" : "FRAGMENT", c = `maxStorageBuffersIn${o}Stage`;
  return new S({ code: `VGPU-LIMIT-STORAGE-${a}`, message: `${o} entry '${n}' in '${e}' uses ${r2} storage buffer(s), but device limit ${c} is ${i}.`, fix: t === "vertex" ? `Request init({ requiredLimits: { ${c}: ${r2} } }) if the adapter supports it, or move vertex data to geometry(gpu, ...) vertex streams.` : `Request init({ requiredLimits: { ${c}: ${r2} } }) if the adapter supports it, or reduce fragment storage buffers.`, where: `${e}.pipelineLayout`, detail: { stage: t, entryPoint: n, count: r2, limit: i, bindings: s.map(({ name: u, group: f, binding: d }) => ({ name: u, group: f, binding: d })) } });
}
function So(e, t, n, r2, i) {
  return new S({ code: "VGPU-SET-TEXTURE-FILTERABILITY", message: `${r2} (${n}) cannot satisfy filtering texture '${t.name}' @group(${t.group}) @binding(${t.binding}).`, fix: "Use a filterable format; request float32-filterable for rgba32float when supported; or use textureLoad without a sampler.", where: `${e}.set`, detail: { format: n, group: t.group, binding: t.binding, bindingName: t.name, resourceName: r2, samplerName: i == null ? void 0 : i.name, samplerGroup: i == null ? void 0 : i.group, samplerBinding: i == null ? void 0 : i.binding } });
}
function vo(e, t) {
  const n = Yo(e, t);
  return new S({ code: "VGPU-R1-BINDING-NEVER-SET", message: `Unset \`${t.name}\` @group(${t.group}) @binding(${t.binding}) in '${e}'. Fix: ${n}; or ${e}.group(${t.group}, bindGroup).`, where: `${e}.draw` });
}
function mi(e, t) {
  const n = t === "lib" ? "lib-owned by its first JS set()" : "user-owned by its first resource set()", r2 = t === "lib" ? `Fix: pass a resource from the start: wave.set({ ${e}: new Uniform(gpu.device, { size: 4 }) }).` : `Fix: pass JS values from the first set(): wave.set({ ${e}: jsValue }).`;
  return new S({ code: "VGPU-R1-OWNERSHIP-FLIP", message: `\`${e}\` is ${n}; ownership cannot change. ${r2}`, where: "set" });
}
function $o(e, t) {
  return new S({ code: "VGPU-R4-GROUP-CLAIMED", message: `group ${t} of '${e}' is claimed; set() cannot update it.`, fix: `Call set() first, or build from ${e}.layout(${t}); pass dynamic offsets to p.draw().`, where: `${e}.set` });
}
function Eo(e, t, n, r2) {
  return new S({ code: "VGPU-R4-GROUP-INCOMPATIBLE", message: `claimed group ${t} in '${e}' is incompatible: ${n}.`, fix: `Build from ${e}.layout(${t}, { dynamicOffsets? }) then call ${e}.group(${t}, bindGroup).`, where: `${e}.group`, cause: r2 });
}
function ct(e, t, n) {
  return new S({ code: "VGPU-R4-GROUP-VALIDATION", message: `WebGPU rejected claimed group ${t} in '${e}'.`, fix: `Build from ${e}.layout(${t}); pass offsets via p.draw(draw, { offsets: { ${t}: [...] } }).`, where: `${e}.draw`, cause: n, detail: { drawLabel: e, group: t } });
}
function mr(e, t) {
  return new S({ code: "VGPU-BLEND-INVALID", message: `Invalid blend '${String(t)}' in '${e}'.`, fix: 'Use "alpha", "additive", "premultiplied", or { color, alpha? } components.', where: "draw" });
}
function gr(e, t) {
  return new S({ code: "VGPU-BLEND-CONSTANT-INVALID", message: `Invalid blendConstant in '${e}': ${t}`, fix: 'Use [r, g, b, a] finite numbers with a blend whose color or alpha uses "constant"/"one-minus-constant"; omit it to keep the pass default (0, 0, 0, 0).', where: "draw" });
}
function wr(e, t) {
  return new S({ code: "VGPU-WRITEMASK-INVALID", message: `Invalid writeMask ${t} in '${e}'.`, fix: "Use an array of r/g/b/a; omit it for all channels.", where: "draw" });
}
function hn(e, t, n = "draw") {
  return new S({ code: "VGPU-COLORS-INVALID", message: `Invalid colors in '${e}': ${t}`, fix: "Use one { blend?, writeMask? } or null entry per color attachment of the target, aligned by index; omit colors to apply the top-level blend/writeMask to every attachment.", where: n });
}
function Io(e, t) {
  return new S({ code: "VGPU-CULL-INVALID", message: `Invalid cull '${String(t)}' in '${e}'.`, fix: 'Use "none", "front", or "back"; omit it for no culling.', where: "draw" });
}
function To(e, t) {
  return new S({ code: "VGPU-FRONTFACE-INVALID", message: `Invalid frontFace '${String(t)}' in '${e}'.`, fix: 'Use "ccw" or "cw"; omit it for counter-clockwise.', where: "draw" });
}
function br(e, t) {
  return new S({ code: "VGPU-UNCLIPPED-DEPTH-INVALID", message: `Invalid unclippedDepth in '${e}': ${t}`, fix: 'Use a boolean. unclippedDepth: true needs the "depth-clip-control" device feature \u2014 request it with init({ requiredFeatures: ["depth-clip-control"] }) on an adapter that supports it. Omit the option to keep depth clipping.', where: "draw" });
}
function ue(e, t) {
  return new S({ code: "VGPU-DEPTH-INVALID", message: `Invalid depth in '${e}': ${t}`, fix: 'Use false or { write?, compare?, bias?, biasSlopeScale?, biasClamp? }; omit it for { write: true, compare: "less-equal" }.', where: "draw" });
}
function Ze(e, t, n = "draw") {
  return new S({ code: "VGPU-STENCIL-INVALID", message: `Invalid stencil in '${e}': ${t}`, fix: `Use { front?, back?, readMask?, writeMask?, ref? } with GPUCompareFunction/GPUStencilOperation faces and u32 masks, against a target whose depth format has a stencil aspect (depth: "depth24plus-stencil8"); omit it for WebGPU's pass-through defaults.`, where: n });
}
function Mt(e, t, n = "draw") {
  return new S({ code: "VGPU-MULTISAMPLE-INVALID", message: `Invalid multisample in '${e}': ${t}`, fix: "Use { alphaToCoverage?, mask? }: alphaToCoverage needs a target created with msaa: true, and mask must be an integer in [0, 0xFFFFFFFF] (bits above the target's sampleCount are ignored). Omit multisample for full-coverage defaults.", where: n });
}
function Ut(e, t, n = "draw") {
  return new S({ code: "VGPU-CONSTANTS-INVALID", message: `Invalid constants in '${e}': ${t}`, fix: "Key WGSL `override` constants by name, or by the decimal string of N when the declaration has @id(N); values are finite numbers or booleans, converted to the override's WGSL type (bool/i32/u32/f32/f16). Every override without a default value must be provided. Omit constants to keep the WGSL defaults.", where: n });
}
function Vt(e, t, n = "draw") {
  return new S({ code: "VGPU-ENTRY-INVALID", message: `Invalid entry in '${e}': ${t}`, fix: "Name an entry point declared in the shader with the matching stage \u2014 { vertex?, fragment? } strings for draw, one @compute name string for compute. Omit entry (or a field) to use the first entry point of that stage.", where: n });
}
function He(e, t, n) {
  return new S({ code: "VGPU-INDIRECT-INVALID", message: `Invalid indirect in '${e}': ${t}`, fix: "Pass a storage buffer created with storage(gpu, bytes, { indirect: true }) \u2014 bare, or as { buffer, offset? } with a 4-aligned byte offset \u2014 sized so the GPU-read arguments fit: 16 bytes for drawIndirect, 20 for drawIndexedIndirect, 12 for dispatchWorkgroupsIndirect. Omit indirect to use CPU-side counts.", where: n });
}
function ko() {
  return new S({ code: "VGPU-PASS-PRESERVE-MSAA", message: "clear:false cannot preserve MSAA; use a non-MSAA target.", fix: "Use non-MSAA for accumulation.", where: "Frame.pass" });
}
function xr(e, t = "expected a number in [0, 1].", n = 'Use 1 (default), or 0 with depth: { compare: "greater" } for reversed-Z.') {
  return new S({ code: "VGPU-PASS-CLEARDEPTH-INVALID", message: `clearDepth received ${String(e)}; ${t}`, fix: n, where: "Frame.pass" });
}
function fe(e) {
  return new S({ code: "VGPU-PASS-VIEWPORT-INVALID", message: `Invalid viewport: ${e}`, fix: "Use { x?, y?, width, height, minDepth?, maxDepth? } finite numbers within device limits; omit it for the full target.", where: "Frame.pass" });
}
function cn(e) {
  return new S({ code: "VGPU-PASS-SCISSOR-INVALID", message: `Invalid scissor: ${e}`, fix: "Use [x, y, width, height] non-negative integers with x + width and y + height within the target's current pixel size; omit it for the full target.", where: "Frame.pass" });
}
function Fo() {
  return new S({ code: "VGPU-PASS-PRESERVE-CLEARDEPTH", message: "clear:false preserves depth; clearDepth cannot apply.", fix: "Remove clearDepth, or let the pass clear.", where: "Frame.pass" });
}
function yr(e) {
  return new S({ code: "VGPU-PASS-CLEARSTENCIL-INVALID", message: `clearStencil ${e}`, fix: `Use an integer in [0, 0xFFFFFFFF] on a target whose depth format has a stencil aspect, e.g. depth: "depth24plus-stencil8"; the value is masked to the stencil aspect's bit width.`, where: "Frame.pass" });
}
function Po() {
  return new S({ code: "VGPU-PASS-PRESERVE-CLEARSTENCIL", message: "clear:false preserves stencil; clearStencil cannot apply.", fix: "Remove clearStencil, or let the pass clear.", where: "Frame.pass" });
}
function Ue(e, t, n = "Frame.pass") {
  return new S({ code: "VGPU-PASS-DEPTH-READONLY", message: `depthReadOnly ${e}`, fix: t, where: n });
}
function Co() {
  return new S({ code: "VGPU-PASS-DEPTH-READONLY-MSAA", message: `depthReadOnly cannot read an MSAA target's depth: multisampled depth is stored with storeOp "discard", so a read-only pass tests against discarded contents.`, fix: "Use a non-MSAA target for read-only depth, or drop depthReadOnly and let the pass own its depth.", where: "Frame.pass" });
}
function Ao(e, t, n = "timer") {
  return new S({ code: "VGPU-TIMER-INVALID", message: `Invalid timer use: ${e}`, fix: t, where: n });
}
function Uo(e, t, n = "visibility") {
  return new S({ code: "VGPU-VIS-INVALID", message: `Invalid visibility use: ${e}`, fix: t, where: n });
}
function Lo() {
  return new S({ code: "VGPU-QUERY-NO-VISIBILITY", message: "occlusion() needs the pass to be opened with a visibility instance; the render pass has no occlusionQuerySet to write into.", fix: "Open the pass with f.pass({ target, visibility: vis }, ...) using the visibility(gpu) instance that created the query handle.", where: "FramePass.occlusion" });
}
function Ro() {
  return new S({ code: "VGPU-QUERY-NESTED", message: "occlusion() cannot nest inside an active occlusion() body; WebGPU allows one active occlusion query per pass at a time.", fix: "Encode each occlusion scope sequentially: p.occlusion(a, ...); p.occlusion(b, ...).", where: "FramePass.occlusion" });
}
function pn(e = "Frame.pass") {
  return new S({ code: "VGPU-TARGET-REQUIRED", message: "Target required. Fix: pass surface(gpu, canvas) or target(gpu, { size }) as { target }.", where: e });
}
function Go(e, t, n, r2) {
  return new S({ code: e, message: `${e}: ${n}`, fix: r2, where: t });
}
function On(e, t) {
  return Go("VGPU-MESH-RANGE-INVALID", e, t, "Use index ranges for indexed geometries, vertex ranges otherwise, within geometry counts.");
}
function Do(e) {
  return new S({ code: "VGPU-PIPELINE-LAYOUT-GAP", message: `Pipeline bind group ${e} is missing.`, fix: "Use consecutive @group() indices starting at 0.", where: "pipeline layout" });
}
function ht(e, t, n) {
  return new S({ code: "VGPU-COMPILE-FAILED", message: "WebGPU pipeline compilation failed.", fix: "Check WGSL, vertex layouts, and target signature.", where: e, cause: t, detail: n ? { signature: n } : void 0 });
}
function Sr(e) {
  return new S({ code: "VGPU-COMPILE-DISPOSED", message: "GPU disposed during pipeline compilation.", where: e });
}
function Lt(e, t) {
  return new S({ code: "VGPU-COMPILE-SIGNATURE-INVALID", message: `Invalid TargetSignature: ${t}`, fix: "Pass { colors, depth?, sampleCount?:1|4 } or a Target.", where: e });
}
function Mo(e) {
  return new S({ code: "VGPU-TARGET-DEPTH-STENCIL-ONLY", message: `depth received '${e}'; stencil-only depth targets are not supported yet.`, fix: 'Use a format with a depth aspect such as "depth24plus" or "depth24plus-stencil8".', where: "target" });
}
function gi() {
  return new S({ code: "VGPU-TARGET-SIZE-REQUIRED", message: "Target size required. Fix: target(gpu, { size: [w,h] }); update surface-derived targets in onResize.", where: "target" });
}
function wi(e) {
  return new S({ code: "VGPU-SURFACE-NOT-IN-FRAME", message: "Surface targets are only available inside frame(gpu).", fix: "surface passes must run inside frame(gpu, ...); precompile against an offscreen target(gpu, ...) instead", where: e });
}
function Vo() {
  return new S({ code: "VGPU-SURFACE-CONTEXT", message: "Canvas WebGPU context failed. Fix: check navigator.gpu and remove any existing 2d/webgl context.", where: "surface" });
}
function No(e) {
  return new S({ code: "VGPU-SURFACE-DUPLICATE", message: `Canvas already has surface${e ? ` '${e}'` : ""}. Fix: reuse or dispose it.`, where: "surface" });
}
function Oo(e) {
  return new S({ code: "VGPU-SURFACE-DISPOSED", message: `Surface '${e ?? "surface"}' is disposed. Fix: call surface(gpu, canvas).`, where: "surface" });
}
function _o() {
  return new S({ code: "VGPU-SURFACE-AUTORESIZE-UNSUPPORTED", message: "autoResize needs clientWidth. Fix: call surface.resize([w,h]) for OffscreenCanvas; onResize still fires.", where: "surface" });
}
function Bo(e) {
  return new S({ code: "VGPU-SURFACE-RESIZE-REENTRANT", message: `Cannot resize this surface${e ? ` '${e}'` : ""} in onResize. Fix: resize derived targets only.`, where: "surface.resize" });
}
function zo(e) {
  return new S({ code: "VGPU-CLEAR-COLOR-INVALID", message: `Invalid ${e}: expected four finite numbers.`, fix: "Assign [r, g, b, a] or a GPUColor object ({ r, g, b, a }).", where: e });
}
function bi() {
  return new S({ code: "VGPU-FRAME-REENTRANT", message: "Nested frame(gpu) is invalid. Fix: queue work for the next frame.", where: "frame" });
}
function vr(e) {
  return new S({ code: "VGPU-FRAME-CANCELED", message: "the frame was canceled; its command encoder was dropped and nothing more can be encoded or submitted on it.", fix: "Open a new frame(gpu) for further work; cancel() is the last operation on a frame.", where: e });
}
function Wo(e) {
  return new S({ code: "VGPU-FRAME-PASS-ACTIVE", message: "the frame cannot be canceled while a pass callback is active.", fix: "Return from the frame.pass(...) callback first, then call frame.cancel(); this keeps pass descriptor resources alive until the pass is closed.", where: e });
}
function jo(e) {
  return new S({ code: "VGPU-FRAME-SUBMITTED", message: "the frame was already submitted; submitted GPU work cannot be canceled.", fix: "Call cancel() only on a frame you decided not to submit; the frame you did submit needs no cleanup.", where: e });
}
function ge(e, t, n) {
  return new S({ code: "VGPU-R1-BINDING-INCOMPATIBLE-RESOURCE", message: `binding \`${e.name}\` @group(${e.group}) @binding(${e.binding}) needs ${t}.`, fix: n, where: "set" });
}
function O(e, t, n) {
  return new S({ code: "VGPU-RING1-UNSUPPORTED", message: t, fix: n, where: e });
}
function Rt(e) {
  return qo(e) && e.version !== 1 ? new S({ code: "VGPU-SHADER-SOURCE-INVALID", message: `VGPU-SHADER-SOURCE-INVALID: unsupported ShaderSource v${String(e.version)}; expected v1. Fix: update vgpu or regenerate it.`, where: "shader source" }) : new S({ code: "VGPU-SHADER-SOURCE-INVALID", message: `VGPU-SHADER-SOURCE-INVALID: expected WGSL or { version, wgsl }, got ${Ho(e)}. Fix: configure @vgpu/wgsl loader-vite or loader-webpack.`, where: "shader source" });
}
function Ko(e) {
  return new S({ code: "VGPU-R1-SHARED-UNIFORMS-LAYOUT-MISMATCH", message: `Uniform '${e.bindingName}' layout ${e.adoptedLayout} from ${e.adoptedSource} != ${e.incomingLayout} from ${e.incomingSource}. Fix: align structs or split uniforms.`, where: "uniforms" });
}
function qo(e) {
  return typeof e == "object" && e !== null && "version" in e;
}
function Ho(e) {
  if (typeof e != "object" || e === null) return typeof e;
  try {
    const t = JSON.stringify(e);
    return t.length > 80 ? `${t.slice(0, 77)}...` : t;
  } catch {
    return "object";
  }
}
function Yo(e, t) {
  switch (t.kind) {
    case "sampler":
      return `${e}.set({${t.name}:sampler(gpu)})`;
    case "texture":
      return `${e}.set({${t.name}:scene.color})`;
    case "buffer":
      return t.addressSpace === "uniform" ? `${e}.set({${t.name}:{ /* values */ }})` : `${e}.set({${t.name}:buffer})`;
    default:
      return `${e}.set({${t.name}:resource})`;
  }
}
var $r = ["scheduler", "resource", "service"];
function nn(e) {
  return { name: e };
}
var xi = /* @__PURE__ */ new WeakMap();
function Xo(e) {
  const t = xi.get(e);
  if (!t) throw new S({ code: "VGPU-GPU-FOREIGN", message: "This object was not created by init(); it has no vgpu kernel.", fix: "Pass the gpu returned by init() from vgpu, vgpu/node or vgpu/mock.", where: "gpu" });
  return t;
}
var Re;
var It;
var Ge;
var Qe;
var De;
var Me;
var Zo = class {
  constructor(t) {
    m(this, "device");
    $(this, Re, /* @__PURE__ */ new Map());
    $(this, It, new Map($r.map((t2) => [t2, /* @__PURE__ */ new Set()])));
    $(this, Ge, /* @__PURE__ */ new Set());
    $(this, Qe, /* @__PURE__ */ new Set());
    $(this, De, /* @__PURE__ */ new Set());
    $(this, Me, false);
    this.device = t;
  }
  get disposed() {
    return l(this, Me);
  }
  service(t, n) {
    const r2 = l(this, Re).get(t);
    if (r2 !== void 0) return r2;
    const i = n(this);
    return l(this, Re).set(t, i), i;
  }
  peekService(t) {
    return l(this, Re).get(t);
  }
  own(t, n) {
    const r2 = l(this, It).get(t);
    return r2.add(n), () => {
      r2.delete(n);
    };
  }
  addErrorListener(t) {
    return l(this, Ge).add(t), () => {
      l(this, Ge).delete(t);
    };
  }
  reportError(t) {
    if (l(this, Me)) return Promise.resolve();
    const n = Promise.resolve().then(() => {
      const r2 = [...l(this, Ge)];
      if (!r2.length) {
        console.error(t);
        return;
      }
      for (const i of r2) try {
        i(t);
      } catch (s) {
        console.error(s);
      }
    });
    return this.trackDelivery(n);
  }
  trackDelivery(t) {
    const n = Promise.resolve(t).then(() => {
    }, (r2) => {
      console.error(r2);
    });
    return l(this, Qe).add(n), n.finally(() => l(this, Qe).delete(n)), n;
  }
  registerSettledSource(t) {
    return l(this, De).add(t), () => {
      l(this, De).delete(t);
    };
  }
  async settled() {
    const t = [...l(this, Qe), ...[...l(this, De)].flatMap((n) => n())];
    await Promise.allSettled(t);
  }
  dispose() {
    if (!l(this, Me)) {
      F(this, Me, true);
      for (const t of $r) {
        const n = l(this, It).get(t);
        for (const r2 of [...n]) r2();
        n.clear();
      }
      l(this, Re).clear(), l(this, De).clear(), l(this, Ge).clear(), this.device.dispose();
    }
  }
};
Re = /* @__PURE__ */ new WeakMap(), It = /* @__PURE__ */ new WeakMap(), Ge = /* @__PURE__ */ new WeakMap(), Qe = /* @__PURE__ */ new WeakMap(), De = /* @__PURE__ */ new WeakMap(), Me = /* @__PURE__ */ new WeakMap();
function Jo(e) {
  const t = new Zo(e), n = { device: e, gpu: e.gpu, get disposed() {
    return t.disposed;
  }, onError: (r2) => t.addErrorListener(r2), settled: () => t.settled(), dispose: () => {
    t.dispose();
  } };
  return xi.set(n, t), n;
}
async function Qo(e, t = {}, n) {
  return Jo(await ea(e, t, n));
}
async function ea(e, t, n) {
  return t.adapter || n ? (t.adapter ?? n()).requestDevice(t) : ta(t);
}
async function ta(e) {
  var i;
  const n = await ((i = globalThis.navigator.gpu) == null ? void 0 : i.requestAdapter({ powerPreference: e.powerPreference }));
  if (!n) throw O("init", "navigator.gpu.requestAdapter() returned null.");
  _s(n.features, e.requiredFeatures);
  const r2 = await n.requestDevice({ requiredFeatures: e.requiredFeatures, requiredLimits: e.requiredLimits });
  return new uo(r2, n.info ?? null);
}
function N(e, t) {
  e.assertUsable(t);
}
function mn(e, t) {
  e.assertUsable(t);
}
var _n = /* @__PURE__ */ Symbol("vgpu.bindingResource");
function na(e) {
  return typeof (typeof e == "object" && e !== null ? e[_n] : void 0) == "function" ? e : void 0;
}
var gn = /* @__PURE__ */ Symbol("vgpu.geometry.layoutResolver");
function ke(e, t) {
  const n = Xo(e);
  if (n.disposed) throw ra(t);
  return n;
}
function ra(e) {
  return new S({ code: "VGPU-GPU-DISPOSED", message: `${e}() ran after gpu.dispose(); the device and everything it owned are gone.`, fix: "Create resources before disposing the gpu, or init() a new one.", where: e });
}
function yi(e, t, n, r2) {
  const i = e.own("resource", () => n(t));
  return r2 == null || r2(i), t;
}
var Si = class extends Error {
  constructor(n, r2, i = 1, s = 1, o = "error") {
    super(r2);
    m(this, "code");
    m(this, "line");
    m(this, "column");
    m(this, "severity");
    m(this, "metadata");
    m(this, "relatedDiagnostics");
    m(this, "fix");
    m(this, "where");
    m(this, "cause");
    this.name = "VGPUError", this.code = n, this.line = i, this.column = s, this.severity = o;
  }
};
function ia(e, t, n = {}) {
  const r2 = new Si(e, t, n.line ?? 1, n.column ?? 1, n.severity ?? "error");
  return n.fix !== void 0 && (r2.fix = n.fix), n.where !== void 0 && (r2.where = n.where), n.cause !== void 0 && (r2.cause = n.cause), n.metadata !== void 0 && (r2.metadata = n.metadata), r2;
}
function R(e, t, n = 1, r2 = 1) {
  return new Si(e, t, n, r2);
}
var sa = /* @__PURE__ */ new Set(["fn", "struct", "const", "alias", "var", "override"]);
function oa(e) {
  var a, c, u, f;
  const t = [], n = [], r2 = [];
  let i = 0, s = false, o = 0;
  for (; i < e.length; ) {
    const d = e[i];
    if (d.text === "{") {
      o++, i++;
      continue;
    }
    if (d.text === "}") {
      o = Math.max(0, o - 1), i++;
      continue;
    }
    if (vi(d)) {
      i++;
      continue;
    }
    if (o > 0) {
      i++;
      continue;
    }
    if (d.text === "import") {
      if (s) throw R("VGPU-WGSL-IMP-ORDER", "Imports must precede declarations", d.line, d.column);
      const [y, v] = aa(e, i);
      t.push(y), i = v;
      continue;
    }
    if (d.text === "export" && ((a = e[i + 1]) == null ? void 0 : a.text) === "{") throw R("VGPU-WGSL-EXP-REEXPORT-CYCLE", "Re-export cycles are not supported", d.line, d.column);
    if (d.text === "@" && ((c = e[i + 2]) == null ? void 0 : c.text) === "export" && ((u = e[i + 3]) == null ? void 0 : u.text) === "@") throw R("VGPU-WGSL-EXP-NOTDECL", "Repeated export attributes", d.line, d.column);
    const p = d.text === "export" || d.text === "@" && ((f = e[i + 2]) == null ? void 0 : f.text) === "export", g = p ? ca(e, d.text === "export" ? i + 1 : i + 3) : i, x = e[g];
    if (x && sa.has(x.text)) {
      const y = ua(e, g);
      n.push({ name: y, localName: y, kind: x.text }), p && r2.push({ name: y, localName: y, kind: x.text }), s = true;
    }
    i++;
  }
  return { imports: t, exports: r2, locals: n };
}
function aa(e, t) {
  var o, a, c, u, f, d, p, g;
  let n = t + 1;
  const r2 = [];
  if (((o = e[n]) == null ? void 0 : o.text) === "{") {
    for (n++; e[n] && e[n].text !== "}"; ) {
      if (vi(e[n])) {
        n++;
        continue;
      }
      const x = fn(e[n]);
      let y = x;
      n++, ((a = e[n]) == null ? void 0 : a.text) === "as" && (y = fn(e[n + 1]), n += 2), r2.push({ imported: x, local: y }), ((c = e[n]) == null ? void 0 : c.text) === "," && n++;
    }
    n++, un(e[n], "from"), n++;
  } else if (((u = e[n]) == null ? void 0 : u.text) === "*") un(e[n + 1], "as"), r2.push({ imported: "*", local: fn(e[n + 2]), namespace: true }), n += 3, un(e[n], "from"), n++;
  else throw ((f = e[n]) == null ? void 0 : f.kind) === "string" ? R("VGPU-WGSL-IMP-SIDEEFFECT", "Side-effect imports are not supported", e[n].line, e[n].column) : R("VGPU-WGSL-IMP-DEFAULT", "Default imports are not supported", (d = e[n]) == null ? void 0 : d.line, (p = e[n]) == null ? void 0 : p.column);
  const i = e[n];
  if ((i == null ? void 0 : i.kind) !== "string") throw R("VGPU-WGSL-RES-NOTFOUND", "Import path must be a string", i == null ? void 0 : i.line, i == null ? void 0 : i.column);
  const s = i.text.slice(1, -1);
  return n++, ((g = e[n]) == null ? void 0 : g.text) === ";" && n++, [{ from: s, bindings: r2, start: e[t].start, end: e[n - 1].end }, n];
}
function ca(e, t) {
  var n, r2, i;
  for (; ((n = e[t]) == null ? void 0 : n.text) === "@"; ) {
    if (t += 2, ((r2 = e[t]) == null ? void 0 : r2.text) === "(") for (; e[t] && e[t].text !== ")"; ) t++;
    ((i = e[t]) == null ? void 0 : i.text) === ")" && t++;
  }
  return t;
}
function ua(e, t) {
  var r2, i, s, o;
  let n = t + 1;
  if (((r2 = e[t]) == null ? void 0 : r2.text) === "var" && ((i = e[n]) == null ? void 0 : i.text) === "<") for (; e[n] && e[n].text !== ">"; ) n++;
  for (; n < e.length; n++) if (e[n].kind === "ident") return e[n].text;
  throw R("VGPU-WGSL-EXP-NOTDECL", "Exported declaration has no name", (s = e[t]) == null ? void 0 : s.line, (o = e[t]) == null ? void 0 : o.column);
}
function un(e, t) {
  if ((e == null ? void 0 : e.text) !== t) throw R("VGPU-WGSL-IMP-DEFAULT", `Expected ${t}`, e == null ? void 0 : e.line, e == null ? void 0 : e.column);
}
function fn(e) {
  if ((e == null ? void 0 : e.kind) !== "ident") throw R("VGPU-WGSL-IMP-DEFAULT", "Expected identifier", e == null ? void 0 : e.line, e == null ? void 0 : e.column);
  return e.text;
}
function vi(e) {
  return e.kind === "lineComment" || e.kind === "blockComment";
}
function fa(e, t) {
  return t === "uniform" || t === "storage" ? "buffer" : e.kind === "sampler" ? "sampler" : e.kind === "texture" ? e.textureKind === "texture_external" ? "externalTexture" : "texture" : "unknown";
}
function da(e, t, n, r2, i) {
  if (e === "buffer") return la(t, n, i);
  if (r2.kind === "sampler") return ha(r2);
  if (r2.kind === "texture") return r2.textureKind === "texture_external" ? { kind: "externalTexture", externalTexture: {} } : r2.textureKind.startsWith("texture_storage_") ? pa(r2) : ma(r2);
}
function la(e, t, n) {
  return { kind: "buffer", buffer: { type: e === "uniform" ? "uniform" : t === "read" ? "read-only-storage" : "storage", hasDynamicOffset: false, minBindingSize: n == null ? void 0 : n.size } };
}
function ha(e) {
  return { kind: "sampler", sampler: { type: e.comparison ? "comparison" : "filtering" } };
}
function pa(e) {
  return { kind: "storageTexture", storageTexture: { access: wa(e.access), format: e.texelFormat ?? "rgba8unorm", viewDimension: $i(e.dimension) } };
}
function ma(e) {
  return { kind: "texture", texture: { sampleType: ga(e), viewDimension: $i(e.dimension), multisampled: e.dimension === "multisampled_2d" || e.dimension === "depth_multisampled_2d" } };
}
function ga(e) {
  if (e.textureKind.startsWith("texture_depth_")) return "depth";
  const t = e.sampleType;
  return (t == null ? void 0 : t.kind) === "scalar" && t.name === "i32" ? "sint" : (t == null ? void 0 : t.kind) === "scalar" && t.name === "u32" ? "uint" : "unfilterable-float";
}
function $i(e) {
  switch (e) {
    case "1d":
      return "1d";
    case "2d_array":
    case "depth_2d_array":
      return "2d-array";
    case "cube":
    case "depth_cube":
      return "cube";
    case "cube_array":
    case "depth_cube_array":
      return "cube-array";
    case "3d":
      return "3d";
    default:
      return "2d";
  }
}
function wa(e) {
  return e === "read" ? "read-only" : e === "read_write" ? "read-write" : "write-only";
}
var ne = (1n << 64n) - 1n;
var Ae = 11400714785074694791n;
var gt = 14029467366897019727n;
var Er = 1609587929392839161n;
var Ei = 9650029242287828579n;
var Ir = 2870177450012600261n;
function ba(e, t = 0n) {
  const n = new TextEncoder().encode(e);
  let r2 = 0, i;
  if (n.length >= 32) {
    let s = t + Ae + gt, o = t + gt, a = t, c = t - Ae;
    const u = n.length - 32;
    do
      s = Ye(s, pt(n, r2)), r2 += 8, o = Ye(o, pt(n, r2)), r2 += 8, a = Ye(a, pt(n, r2)), r2 += 8, c = Ye(c, pt(n, r2)), r2 += 8;
    while (r2 <= u);
    i = xe(s, 1n) + xe(o, 7n) + xe(a, 12n) + xe(c, 18n), i = Gt(i, s), i = Gt(i, o), i = Gt(i, a), i = Gt(i, c);
  } else i = t + Ir;
  for (i = i + BigInt(n.length) & ne; r2 + 8 <= n.length; ) i ^= Ye(0n, pt(n, r2)), i = xe(i, 27n) * Ae + Ei & ne, r2 += 8;
  for (r2 + 4 <= n.length && (i ^= xa(n, r2) * Ae & ne, i = xe(i, 23n) * gt + Er & ne, r2 += 4); r2 < n.length; ) i ^= BigInt(n[r2]) * Ir & ne, i = xe(i, 11n) * Ae & ne, r2++;
  return i ^= i >> 33n, i = i * gt & ne, i ^= i >> 29n, i = i * Er & ne, i ^= i >> 32n, i.toString(16).padStart(16, "0");
}
function Ye(e, t) {
  return xe(e + t * gt & ne, 31n) * Ae & ne;
}
function Gt(e, t) {
  return e ^= Ye(0n, t), e * Ae + Ei & ne;
}
function xe(e, t) {
  return (e << t | e >> 64n - t) & ne;
}
function pt(e, t) {
  let n = 0n;
  for (let r2 = 7; r2 >= 0; r2--) n = (n << 8n) + BigInt(e[t + r2]);
  return n;
}
function xa(e, t) {
  return BigInt(e[t]) | BigInt(e[t + 1]) << 8n | BigInt(e[t + 2]) << 16n | BigInt(e[t + 3]) << 24n;
}
function ya(e) {
  return ba(e);
}
function Sa(e) {
  return ya(e).slice(0, 8);
}
function va(e, t) {
  return `_vgsl_${Sa(e)}__${t}`;
}
function H(e, t) {
  const n = e.find((s) => s.name === t);
  if (!n) return;
  const r2 = n.args.map((s) => s.text).join(""), i = Number(r2.replace(/[ui]$/, ""));
  return Number.isFinite(i) ? i : void 0;
}
function Bn(e) {
  const t = [[]];
  let n = 0, r2 = 0;
  for (const i of e) {
    if (i.text === "<" ? n++ : i.text === ">" ? n = Math.max(0, n - 1) : i.text === "(" ? r2++ : i.text === ")" && (r2 = Math.max(0, r2 - 1)), i.text === "," && n === 0 && r2 === 0) {
      t.push([]);
      continue;
    }
    t[t.length - 1].push(i);
  }
  return t.map(Ii).filter((i) => i.length > 0);
}
function Ii(e) {
  let t = 0, n = e.length;
  for (; t < n && e[t].text === ","; ) t++;
  for (; n > t && e[n - 1].text === ","; ) n--;
  return e.slice(t, n);
}
function $a(e) {
  if (e !== void 0 && Ti(e)) return Number(e.replace(/[ui]$/, ""));
}
function Ti(e) {
  return /^(0|[1-9][0-9]*)([ui])?$/.test(e);
}
function ki(e) {
  if (e === "read" || e === "write" || e === "read_write") return e;
}
function Ea(e) {
  return ["f32", "f16", "i32", "u32", "bool"].find((t) => t === e);
}
function Ia(e) {
  return { kind: "scalar", name: e === "f" ? "f32" : e === "h" ? "f16" : e === "i" ? "i32" : "u32" };
}
function Fi(e) {
  return e === "f16" ? 2 : 4;
}
function Ke(e, t) {
  return Math.ceil(t / e) * e;
}
function ae(e) {
  var s;
  const t = Ii(e);
  if (t.length === 0) throw R("VGPU-WGSL-REFLECT-TYPE", "Expected WGSL type");
  const n = t.map((o) => o.text).join(""), r2 = Ta(n);
  if (r2) return r2;
  if (((s = t[1]) == null ? void 0 : s.text) === "<") {
    const o = t[0].text, a = Bn(t.slice(2, -1)), c = ka(o, a);
    if (c) return c;
  }
  const i = Fa(n);
  return i || Pa(n);
}
function Ta(e) {
  const t = Ea(e);
  if (t) return { kind: "scalar", name: t };
  const n = e.match(/^vec([234])([fiuh])$/);
  if (n) return { kind: "vector", width: Number(n[1]), element: Ia(n[2]) };
  const r2 = e.match(/^mat([234])x([234])([fh])$/);
  if (r2) {
    const i = r2[3] === "h" ? { kind: "scalar", name: "f16" } : { kind: "scalar", name: "f32" };
    return { kind: "matrix", columns: Number(r2[1]), rows: Number(r2[2]), element: i };
  }
}
function ka(e, t) {
  var n, r2, i, s, o;
  if (e === "array") {
    const a = (n = t[1]) == null ? void 0 : n.map((u) => u.text).join(""), c = a === void 0 ? void 0 : $a(a);
    return { kind: "array", element: ae(t[0] ?? []), count: c, countExpression: a };
  }
  if (e === "atomic") return { kind: "atomic", element: ae(t[0] ?? []) };
  if (e === "vec2" || e === "vec3" || e === "vec4") return { kind: "vector", width: Number(e.slice(3)), element: ae(t[0] ?? []) };
  if (/^mat[234]x[234]$/.test(e)) return { kind: "matrix", columns: Number(e[3]), rows: Number(e[5]), element: ae(t[0] ?? []) };
  if (e === "ptr") return { kind: "ptr", addressSpace: ((r2 = t[0]) == null ? void 0 : r2.map((a) => a.text).join("")) ?? "", element: ae(t[1] ?? []), access: (i = t[2]) == null ? void 0 : i.map((a) => a.text).join("") };
  if (e === "sampler") return { kind: "sampler", comparison: false };
  if (e.startsWith("texture_storage_")) return { kind: "texture", textureKind: e, dimension: e.slice(16), texelFormat: (s = t[0]) == null ? void 0 : s.map((a) => a.text).join(""), access: ki((o = t[1]) == null ? void 0 : o.map((a) => a.text).join("")) };
  if (e.startsWith("texture_")) return { kind: "texture", textureKind: e, dimension: e.slice(8), sampleType: t[0] ? ae(t[0]) : void 0 };
}
function Fa(e) {
  if (e === "sampler" || e === "sampler_comparison") return { kind: "sampler", comparison: e === "sampler_comparison" };
  if (e === "texture_external") return { kind: "texture", textureKind: e };
  if (e.startsWith("texture_depth_")) return { kind: "texture", textureKind: e, dimension: e.slice(8) };
  if (e.startsWith("texture_")) return { kind: "texture", textureKind: e, dimension: e.slice(8) };
}
function Pa(e) {
  return { kind: "identifier", name: e };
}
function Fe(e) {
  if ((e == null ? void 0 : e.kind) !== "ident" && (e == null ? void 0 : e.kind) !== "keyword") throw R("VGPU-WGSL-REFLECT-PARSE", "Expected identifier", e == null ? void 0 : e.line, e == null ? void 0 : e.column);
  return e.text;
}
function qe(e, t, n) {
  var r2, i;
  for (let s = t; s < e.length; s++) if (e[s].text === n) return s;
  throw R("VGPU-WGSL-REFLECT-PARSE", `Expected ${n}`, (r2 = e[t]) == null ? void 0 : r2.line, (i = e[t]) == null ? void 0 : i.column);
}
function Ca(e, t, n, r2) {
  for (let i = t; i < n; i++) if (e[i].text === r2) return i;
}
function rn(e, t, n) {
  let r2 = 0;
  for (let i = t; i < e.length; i++) if ((e[i].text === "{" || e[i].text === "(") && r2++, (e[i].text === "}" || e[i].text === ")") && (r2 = Math.max(0, r2 - 1)), r2 === 0 && e[i].text === n) return i;
  return e.length;
}
function zn(e, t) {
  var s, o;
  const n = e[t].text, r2 = n === "(" ? ")" : n === "{" ? "}" : ">";
  let i = 0;
  for (let a = t; a < e.length; a++) if (e[a].text === n && i++, e[a].text === r2 && (i--, i === 0)) return a;
  throw R("VGPU-WGSL-REFLECT-PARSE", `Unclosed ${n}`, (s = e[t]) == null ? void 0 : s.line, (o = e[t]) == null ? void 0 : o.column);
}
function Wn(e, t) {
  var i, s;
  const n = [];
  let r2 = t;
  for (; ((i = e[r2]) == null ? void 0 : i.text) === "@"; ) {
    const o = e[r2], a = Fe(e[r2 + 1]);
    r2 += 2;
    let c = [];
    if (((s = e[r2]) == null ? void 0 : s.text) === "(") {
      const u = zn(e, r2);
      c = e.slice(r2 + 1, u), r2 = u + 1;
    }
    n.push({ name: a, args: c, token: o });
  }
  return [n, r2];
}
function Je(e) {
  switch (e.kind) {
    case "scalar":
      return e.name;
    case "identifier":
      return e.name;
    case "vector":
      return `vec${e.width}<${Je(e.element)}>`;
    case "matrix":
      return `mat${e.columns}x${e.rows}<${Je(e.element)}>`;
    case "array":
      return `array<${Je(e.element)}${e.count === void 0 ? "" : `,${e.count}`}>`;
    default:
      return e.kind;
  }
}
function Aa(e) {
  const t = e.find((r2) => r2.name === "workgroup_size");
  if (!t) return;
  const n = Bn(t.args).map((r2) => Number(r2.map((i) => i.text).join("")));
  return [n[0] ?? 1, n[1] ?? 1, n[2] ?? 1];
}
function Ua(e, t) {
  var i;
  if (((i = e[t]) == null ? void 0 : i.text) !== "<") return { after: t };
  const n = qe(e, t, ">"), r2 = Bn(e.slice(t + 1, n)).map((s) => s.map((o) => o.text).join(""));
  return { addressSpace: r2[0], access: ki(r2[1]), after: n + 1 };
}
function La(e) {
  var f, d, p;
  const t = [], n = [], r2 = [], i = [], s = [], o = [], a = e.tokens.filter((g) => g.kind !== "lineComment" && g.kind !== "blockComment");
  let c = 0, u = 0;
  for (; c < a.length; ) {
    const g = a[c];
    if (g.text === "{") {
      u++, c++;
      continue;
    }
    if (g.text === "}") {
      u = Math.max(0, u - 1), c++;
      continue;
    }
    if (u > 0) {
      c++;
      continue;
    }
    const x = c, [y, v] = Wn(a, c);
    c = v, ((f = a[c]) == null ? void 0 : f.text) === "export" && c++;
    const P = (d = a[c]) == null ? void 0 : d.text;
    if (P === "enable") {
      ((p = a[c + 1]) == null ? void 0 : p.kind) === "ident" && o.push(a[c + 1].text), c = rn(a, c, ";") + 1;
      continue;
    }
    if (P === "struct") {
      const I = Ra(e, a, c);
      I.item && t.push(I.item), c = I.next;
      continue;
    }
    if (P === "alias") {
      const I = Ga(e, a, c);
      I.item && n.push(I.item), c = I.next;
      continue;
    }
    if (P === "var") {
      const I = Da(e, a, c, y);
      I.item && r2.push(I.item), c = I.next;
      continue;
    }
    if (P === "fn") {
      const I = Ma(e, a, c, y);
      I.item && i.push(I.item), c = I.next;
      continue;
    }
    if (P === "override") {
      const I = Na(a, c, y);
      I.item && s.push(I.item), c = I.next;
      continue;
    }
    c = Math.max(x + 1, c + 1);
  }
  return { structs: t, aliases: n, vars: r2, entries: i, overrides: s, features: o };
}
function Ra(e, t, n, r2) {
  const i = Fe(t[n + 1]), s = qe(t, n + 2, "{"), o = zn(t, s);
  return { item: { name: i, originalName: i, mangledName: jn(e, i, "struct"), members: Oa(t.slice(s + 1, o)), path: e.path }, next: o + 1 };
}
function Ga(e, t, n, r2) {
  const i = Fe(t[n + 1]), s = qe(t, n + 2, "="), o = rn(t, s + 1, ";");
  return { item: { name: i, originalName: i, mangledName: jn(e, i, "alias"), target: ae(t.slice(s + 1, o)), path: e.path }, next: o + 1 };
}
function Da(e, t, n, r2) {
  const { addressSpace: i, access: s, after: o } = Ua(t, n + 1), a = Fe(t[o]), c = qe(t, o + 1, ":"), u = rn(t, c + 1, ";");
  return { item: { path: e.path, name: a, mangledName: _a(r2) ? a : jn(e, a, "var"), attrs: r2, addressSpace: i, access: s, type: ae(t.slice(c + 1, u)) }, next: u + 1 };
}
function Ma(e, t, n, r2) {
  var c;
  const i = Fe(t[n + 1]), s = (c = r2.find((u) => u.name === "vertex" || u.name === "fragment" || u.name === "compute")) == null ? void 0 : c.name;
  if (!s) return { item: void 0, next: n + 1 };
  const o = qe(t, n + 2, "("), a = zn(t, o);
  return { item: { name: i, mangledName: i, stage: s, workgroupSize: Aa(r2), path: e.path, params: Va(t.slice(o + 1, a)) }, next: a + 1 };
}
function Va(e) {
  const t = [];
  let n = 0;
  for (; n < e.length; ) {
    const [r2, i] = Wn(e, n);
    if (n = i, !e[n] || e[n].text === ",") {
      n++;
      continue;
    }
    const s = Fe(e[n]), o = qe(e, n + 1, ":");
    let a = o + 1, c = 0;
    for (; a < e.length && (e[a].text === "<" && c++, e[a].text === ">" && (c = Math.max(0, c - 1)), !(c === 0 && e[a].text === ",")); ) a++;
    t.push({ name: s, attrs: r2, type: ae(e.slice(o + 1, a)) }), n = a + 1;
  }
  return t;
}
function Na(e, t, n) {
  const r2 = Fe(e[t + 1]), i = rn(e, t + 1, ";"), s = Ca(e, t + 2, i, "=");
  return { item: { name: r2, mangledName: r2, id: H(n, "id"), defaultValue: s === void 0 ? void 0 : e.slice(s + 1, i).map((o) => o.text).join("") }, next: i + 1 };
}
function Oa(e) {
  const t = [];
  let n = 0;
  for (; n < e.length; ) {
    const [r2, i] = Wn(e, n);
    if (n = i, !e[n] || e[n].text === "," || e[n].text === ";") {
      n++;
      continue;
    }
    const s = Fe(e[n]), o = qe(e, n + 1, ":");
    let a = o + 1, c = 0;
    for (; a < e.length && (e[a].text === "<" && c++, e[a].text === ">" && (c = Math.max(0, c - 1)), !(c === 0 && (e[a].text === "," || e[a].text === ";"))); ) a++;
    t.push({ name: s, attrs: r2, type: ae(e.slice(o + 1, a)), align: H(r2, "align"), size: H(r2, "size") }), n = a + 1;
  }
  return t;
}
function jn(e, t, n) {
  return n === "override" ? t : va(e.path, t);
}
function _a(e) {
  return H(e, "group") !== void 0 || H(e, "binding") !== void 0;
}
var Ba = "literal length required for auto layout; use draw.group(n, bg) manual binding";
var za = "VGPUError: `bool` is not host-shareable in uniform/storage. Fix: use `u32` (0 | 1) \u2192 struct Params { enabled: u32 }";
var Pi = "use a manual group claim (`draw.group(n, bg)`)";
function Wa(e = 1, t = 1) {
  return R("VGPU-WGSL-REFLECT-ARRAY-LENGTH", Ba, e, t);
}
function Ci(e = 1, t = 1) {
  return R("VGPU-WGSL-REFLECT-BOOL-HOST-SHAREABLE", za, e, t);
}
function Kt(e, t, n = 1, r2 = 1) {
  return R("VGPU-WGSL-REFLECT-UNKNOWN-TYPE", `type '${e}' is unknown in ${t}; ${Pi}`, n, r2);
}
function Tr(e, t, n = 1, r2 = 1) {
  return R("VGPU-WGSL-REFLECT-NS-TYPE", `type '${e}' is a namespace-member import; use a named import or manual @group(1+) binding`, n, r2);
}
function Ai(e, t = 1, n = 1) {
  return R("VGPU-WGSL-REFLECT-NON-HOST-SHAREABLE", `Type ${e} is not host-shareable; ${Pi}`, t, n);
}
var ft = "naga-standard";
function ja(e, t, n) {
  var o, a, c;
  const r2 = /* @__PURE__ */ new Map();
  for (const u of t) {
    const f = /* @__PURE__ */ new Map();
    for (const d of [...u.structs, ...u.aliases]) f.set(d.originalName, { path: d.path, name: d.originalName, mangledName: d.mangledName, kind: "members" in d ? "struct" : "alias" });
    r2.set(((o = u.structs[0]) == null ? void 0 : o.path) ?? ((a = u.aliases[0]) == null ? void 0 : a.path) ?? ((c = u.vars[0]) == null ? void 0 : c.path) ?? "", f);
  }
  const i = new Map(e.map((u) => [u.path, r2.get(u.path) ?? /* @__PURE__ */ new Map()])), s = /* @__PURE__ */ new Map();
  for (const u of e) {
    const f = new Map(i.get(u.path));
    for (const d of u.parsed.imports) Ka(u, d, f, e, i);
    s.set(u.path, f);
  }
  return s;
}
function Ka(e, t, n, r2, i, s) {
  const o = Ha(t, e.path, r2), a = i.get(o);
  for (const c of t.bindings) {
    if (c.namespace) {
      n.set(c.local, { path: o, name: c.local, mangledName: c.local, kind: "namespace" });
      continue;
    }
    const u = a == null ? void 0 : a.get(c.imported);
    u && n.set(c.local, u);
  }
}
function qa(e, t) {
  const n = /* @__PURE__ */ new Map(), r2 = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  for (const s of e) {
    for (const o of s.structs) {
      const a = { name: o.name, mangledName: o.mangledName, members: o.members.map((c) => ({ name: c.name, type: je(c.type, o.path, t), align: c.align, size: c.size })) };
      n.set(o.mangledName, a), i.set(o.mangledName, a);
    }
    for (const o of s.aliases) {
      const a = { name: o.name, mangledName: o.mangledName, target: je(o.target, o.path, t) };
      r2.set(o.mangledName, a), i.set(o.mangledName, a);
    }
  }
  return { structs: n, aliases: r2, byMangled: i };
}
function je(e, t, n, r2) {
  var i, s;
  switch (e.kind) {
    case "identifier": {
      const o = e.name.indexOf(".");
      if (o > 0) {
        const c = e.name.slice(0, o), u = (i = n.get(t)) == null ? void 0 : i.get(c);
        if ((u == null ? void 0 : u.kind) === "namespace") throw Tr(e.name);
      }
      const a = (s = n.get(t)) == null ? void 0 : s.get(e.name);
      if ((a == null ? void 0 : a.kind) === "namespace") throw Tr(e.name);
      if (!a) throw Kt(e.name, t);
      return { kind: "identifier", name: a.name, mangledName: a.mangledName };
    }
    case "array":
    case "atomic":
    case "vector":
    case "matrix":
    case "ptr":
      return { ...e, element: je(e.element, t, n) };
    case "texture":
      return { ...e, sampleType: e.sampleType ? je(e.sampleType, t, n) : void 0 };
    default:
      return e;
  }
}
function dt(e, t) {
  if (!t || e.kind !== "identifier") return e;
  const n = t.aliases.get(e.mangledName ?? e.name);
  return n ? dt(n.target, t) : e;
}
function wn(e, t) {
  const n = dt(e, t);
  switch (n.kind) {
    case "array":
    case "atomic":
    case "vector":
    case "matrix":
    case "ptr":
      return { ...n, element: wn(n.element, t) };
    case "texture":
      return { ...n, sampleType: n.sampleType ? wn(n.sampleType, t) : void 0 };
    default:
      return n;
  }
}
function Ha(e, t, n, r2) {
  const i = void 0;
  if (i !== void 0 && n.some((u) => u.path === i)) return i;
  const s = e.from, o = t.slice(0, t.lastIndexOf("/") + 1), a = s.startsWith("/") ? s : Ya(`${o}${s}`);
  return [s, a].find((u) => n.some((f) => f.path === u)) ?? i ?? a;
}
function Ya(e) {
  const t = e.startsWith("/"), n = [];
  for (const r2 of e.split("/")) !r2 || r2 === "." || (r2 === ".." ? n.pop() : n.push(r2));
  return `${t ? "/" : ""}${n.join("/")}`;
}
function Ct(e, t, n = Je(e), r2 = n, i) {
  const s = i ? wn(e, i) : e;
  return Xa(s, t, n, r2, i);
}
function Xa(e, t, n, r2, i) {
  switch (e.kind) {
    case "scalar":
      return Za(e, t, n, r2);
    case "atomic":
      return Ja(e, t, n, r2);
    case "vector":
      return Qa(e, t, n, r2, i);
    case "matrix":
      return ec(e, t, n, r2, i);
    case "array":
      return tc(e, t, n, r2, i);
    case "identifier":
      return rc(e, t, n, r2, i);
    default:
      throw Ai(Je(e));
  }
}
function Za(e, t, n, r2) {
  const i = Fi(e.name);
  if (e.name === "bool") throw Ci();
  return { name: n, mangledName: r2, addressSpace: t, layoutMode: ft, type: e, align: i, size: i };
}
function Ja(e, t, n, r2) {
  return { name: n, mangledName: r2, addressSpace: t, layoutMode: ft, type: e, align: 4, size: 4 };
}
function Qa(e, t, n, r2, i) {
  const o = Ct(e.element, t, n, r2, i).size ?? 4, a = e.width === 2 ? o * 2 : o * 4;
  return { name: n, mangledName: r2, addressSpace: t, layoutMode: ft, type: e, align: a, size: o * e.width };
}
function ec(e, t, n, r2, i) {
  const s = { kind: "vector", width: e.rows, element: e.element }, o = Ct(s, t, `${n}[]`, `${r2}[]`, i), a = Ke(o.align, o.size ?? 0);
  return { name: n, mangledName: r2, addressSpace: t, layoutMode: ft, type: e, align: o.align, size: a * e.columns, stride: a, element: o };
}
function tc(e, t, n, r2, i) {
  nc(e.countExpression);
  const s = Ct(e.element, t, `${n}[]`, `${r2}[]`, i), o = Ke(vt(e.element, t, i), s.size ?? 0);
  return { name: n, mangledName: r2, addressSpace: t, layoutMode: ft, type: e, align: vt(e, t, i), size: e.count === void 0 ? void 0 : o * e.count, stride: o, element: s, runtimeSized: e.count === void 0 };
}
function nc(e) {
  if (e !== void 0 && !Ti(e)) throw Wa();
}
function rc(e, t, n, r2, i) {
  if (!i) throw Kt(e.name, "<unknown>");
  const s = i.structs.get(e.mangledName ?? e.name);
  if (!s) throw Kt(e.name, "<unknown>");
  const o = [];
  let a = 0, c = 1;
  for (const f of s.members) {
    const d = ic(f, t, a, i);
    o.push(d.member), a = sc(t, f.type, d.offset, d.member.size ?? 0, i), c = Math.max(c, d.member.align);
  }
  const u = ac(t, c);
  return { name: n, mangledName: r2, addressSpace: t, layoutMode: ft, type: e, align: u, size: Ke(u, a), members: o };
}
function ic(e, t, n, r2) {
  const i = Ct(e.type, t, e.name, e.name, r2), s = Math.max(vt(e.type, t, r2), e.align ?? 1), o = Math.max(i.size ?? 0, e.size ?? 0), a = Ke(s, n);
  return { member: { name: e.name, offset: a, align: s, size: o, type: e.type, layout: i, explicitAlign: e.align, explicitSize: e.size }, offset: a };
}
function sc(e, t, n, r2, i) {
  return n + (e === "uniform" && oc(t, i) ? Ke(16, r2) : r2);
}
function oc(e, t) {
  const n = dt(e, t);
  return n.kind === "identifier" && t.structs.has(n.mangledName ?? n.name);
}
function ac(e, t) {
  return e === "uniform" ? Ke(16, t) : t;
}
function vt(e, t, n) {
  const r2 = n ? dt(e, n) : e, i = Nt(r2, t, n);
  return t === "uniform" && cc(r2, n) ? Ke(16, i) : i;
}
function cc(e, t) {
  return e.kind === "array" || e.kind === "identifier" && !!(t != null && t.structs.get(e.mangledName ?? e.name));
}
function Nt(e, t, n) {
  const r2 = n ? dt(e, n) : e;
  switch (r2.kind) {
    case "scalar":
      return uc(r2.name);
    case "atomic":
      return 4;
    case "vector":
      return r2.width === 2 ? Nt(r2.element, t, n) * 2 : Nt(r2.element, t, n) * 4;
    case "matrix":
      return Nt({ kind: "vector", width: r2.rows, element: r2.element }, t, n);
    case "array":
      return vt(r2.element, t, n);
    case "identifier":
      return fc(r2, t, n);
    default:
      throw Ai(Je(r2));
  }
}
function uc(e) {
  if (e === "bool") throw Ci();
  return Fi(e);
}
function fc(e, t, n) {
  const r2 = n == null ? void 0 : n.structs.get(e.mangledName ?? e.name);
  if (!r2) throw Kt(e.name, "<unknown>");
  return Math.max(1, ...r2.members.map((i) => Math.max(vt(i.type, t, n), i.align ?? 1)));
}
var dc = /* @__PURE__ */ new Set(["alias", "break", "case", "const", "const_assert", "continue", "continuing", "default", "diagnostic", "discard", "else", "enable", "false", "fn", "for", "if", "let", "loop", "override", "requires", "return", "struct", "switch", "true", "var", "while"]);
var lc = /* @__PURE__ */ new Set(["import", "export", "from", "as"]);
var Ui = /* @__PURE__ */ new Set([...dc, ...lc]);
var hc = /* @__PURE__ */ new Set(["NULL", "Self", "abstract", "active", "alignas", "alignof", "as", "asm", "asm_fragment", "async", "attribute", "auto", "await", "become", "cast", "catch", "class", "co_await", "co_return", "co_yield", "coherent", "column_major", "common", "compile", "compile_fragment", "concept", "const_cast", "consteval", "constexpr", "constinit", "crate", "debugger", "decltype", "delete", "demote", "demote_to_helper", "do", "dynamic_cast", "enum", "explicit", "export", "extends", "extern", "external", "fallthrough", "filter", "final", "finally", "friend", "from", "fxgroup", "get", "goto", "groupshared", "highp", "impl", "implements", "import", "inline", "instanceof", "interface", "layout", "lowp", "macro", "macro_rules", "match", "mediump", "meta", "mod", "module", "move", "mut", "mutable", "namespace", "new", "nil", "noexcept", "noinline", "nointerpolation", "non_coherent", "noncoherent", "noperspective", "null", "nullptr", "of", "operator", "package", "packoffset", "partition", "pass", "patch", "pixelfragment", "precise", "precision", "premerge", "priv", "protected", "pub", "public", "readonly", "ref", "regardless", "register", "reinterpret_cast", "require", "resource", "restrict", "self", "set", "shared", "sizeof", "smooth", "snorm", "static", "static_assert", "static_cast", "std", "subroutine", "super", "target", "template", "this", "thread_local", "throw", "trait", "try", "type", "typedef", "typeid", "typename", "typeof", "union", "unless", "unorm", "unsafe", "unsized", "use", "using", "varying", "virtual", "volatile", "wgsl", "where", "with", "writeonly", "yield"]);
var pc = /* @__PURE__ */ new Set(["binding_array"]);
var mc = /* @__PURE__ */ new Set(["array", "atomic", "bool", "f16", "f32", "i32", "mat2x2", "mat2x3", "mat2x4", "mat3x2", "mat3x3", "mat3x4", "mat4x2", "mat4x3", "mat4x4", "ptr", "sampler", "sampler_comparison", "texture_1d", "texture_2d", "texture_2d_array", "texture_3d", "texture_cube", "texture_cube_array", "texture_depth_2d", "texture_depth_2d_array", "texture_depth_cube", "texture_depth_cube_array", "texture_depth_multisampled_2d", "texture_external", "texture_multisampled_2d", "texture_storage_1d", "texture_storage_2d", "texture_storage_2d_array", "texture_storage_3d", "u32", "vec2", "vec2f", "vec2h", "vec2i", "vec2u", "vec3", "vec3f", "vec3h", "vec3i", "vec3u", "vec4", "vec4f", "vec4h", "vec4i", "vec4u"]);
var gc = /* @__PURE__ */ new Set(["abs", "acos", "acosh", "all", "any", "arrayLength", "asin", "asinh", "atan", "atan2", "atanh", "ceil", "clamp", "cos", "cosh", "countLeadingZeros", "countOneBits", "countTrailingZeros", "cross", "degrees", "determinant", "distance", "dot", "dot4I8Packed", "dot4U8Packed", "dpdx", "dpdxCoarse", "dpdxFine", "dpdy", "dpdyCoarse", "dpdyFine", "exp", "exp2", "extractBits", "faceForward", "firstLeadingBit", "firstTrailingBit", "floor", "fma", "fract", "frexp", "fwidth", "fwidthCoarse", "fwidthFine", "insertBits", "inverseSqrt", "ldexp", "length", "log", "log2", "max", "min", "mix", "modf", "normalize", "pack2x16float", "pack2x16snorm", "pack2x16unorm", "pack4x8snorm", "pack4x8unorm", "pack4xI8", "pack4xU8", "pack4xI8Clamp", "pack4xU8Clamp", "pow", "quantizeToF16", "radians", "reflect", "refract", "reverseBits", "round", "saturate", "select", "sign", "sin", "sinh", "smoothstep", "sqrt", "step", "storageBarrier", "tan", "tanh", "textureBarrier", "textureDimensions", "textureGather", "textureGatherCompare", "textureLoad", "textureNumLayers", "textureNumLevels", "textureNumSamples", "textureSample", "textureSampleBaseClampToEdge", "textureSampleBias", "textureSampleCompare", "textureSampleCompareLevel", "textureSampleGrad", "textureSampleLevel", "textureStore", "transpose", "trunc", "unpack2x16float", "unpack2x16snorm", "unpack2x16unorm", "unpack4x8snorm", "unpack4x8unorm", "unpack4xI8", "unpack4xU8", "workgroupBarrier"]);
var wc = /* @__PURE__ */ new Set(["frag_depth", "front_facing", "global_invocation_id", "instance_index", "local_invocation_id", "local_invocation_index", "num_workgroups", "position", "sample_index", "sample_mask", "subgroup_invocation_id", "subgroup_size", "vertex_index", "workgroup_id"]);
var bc = /* @__PURE__ */ new Set(["align", "binding", "blend_src", "builtin", "compute", "diagnostic", "fragment", "group", "id", "interpolate", "invariant", "location", "must_use", "size", "vertex", "workgroup_size"]);
var xc = /* @__PURE__ */ new Set(["function", "private", "storage", "uniform", "workgroup"]);
var yc = /* @__PURE__ */ new Set(["read", "read_write", "write"]);
var Sc = /* @__PURE__ */ new Set(["bgra8unorm", "r32float", "r32sint", "r32uint", "rg32float", "rg32sint", "rg32uint", "rgba16float", "rgba16sint", "rgba16uint", "rgba32float", "rgba32sint", "rgba32uint", "rgba8sint", "rgba8snorm", "rgba8uint", "rgba8unorm"]);
[...Ui, ...hc, ...pc, ...mc, ...gc, ...wc, ...bc, ...xc, ...yc, ...Sc];
var vc = "VGPU-WGSL-IDENT-NONASCII";
var $c = "https://github.com/vercel-labs/vgpu/issues/294";
function Ec(e, t) {
  const n = [];
  let r2 = 0, i = 1, s = 1;
  const o = (c, u, f, d, p) => n.push({ kind: c, text: e.slice(u, f), start: u, end: f, line: d, column: p }), a = () => {
    e[r2] === `
` ? (i++, s = 1) : s++, r2++;
  };
  for (; r2 < e.length; ) {
    const c = e[r2];
    if (/\s/.test(c)) {
      a();
      continue;
    }
    const u = r2, f = i, d = s;
    if (c === "/" && e[r2 + 1] === "/") {
      for (; r2 < e.length && e[r2] !== `
`; ) a();
      o("lineComment", u, r2, f, d);
      continue;
    }
    if (c === "/" && e[r2 + 1] === "*") {
      let p = 0;
      for (; r2 < e.length; ) {
        if (e[r2] === "/" && e[r2 + 1] === "*") {
          p++, a(), a();
          continue;
        }
        if (e[r2] === "*" && e[r2 + 1] === "/") {
          if (p--, a(), a(), p === 0) {
            o("blockComment", u, r2, f, d);
            break;
          }
          continue;
        }
        a();
      }
      if (p !== 0) throw R("VGPU-WGSL-LEX-UNTERM-COMMENT", "Unterminated block comment", f, d);
      continue;
    }
    if (c === '"' || c === "'") {
      const p = c;
      for (a(); r2 < e.length && e[r2] !== p; ) {
        if (e[r2] === `
`) throw R("VGPU-WGSL-LEX-UNTERM-STRING", "Unterminated string", f, d);
        e[r2] === "\\" && a(), a();
      }
      if (r2 >= e.length) throw R("VGPU-WGSL-LEX-UNTERM-STRING", "Unterminated string", f, d);
      a(), o("string", u, r2, f, d);
      continue;
    }
    if (/[A-Za-z_]/.test(c)) {
      for (; r2 < e.length && /[A-Za-z0-9_]/.test(e[r2]); ) a();
      const p = e.slice(u, r2);
      o(Ui.has(p) ? "keyword" : "ident", u, r2, f, d);
      continue;
    }
    if (/[0-9]/.test(c) || c === "." && /[0-9]/.test(e[r2 + 1] ?? "")) {
      for (c === "." && a(); r2 < e.length; ) {
        const p = e[r2];
        if (/[A-Za-z0-9_.]/.test(p)) {
          a();
          continue;
        }
        if ((p === "+" || p === "-") && Tc(e[r2 - 1]) && /[0-9]/.test(e[r2 + 1] ?? "")) {
          a();
          continue;
        }
        break;
      }
      o("number", u, r2, f, d);
      continue;
    }
    if (c.charCodeAt(0) > 127) throw Ic(e, r2, i, s, t);
    a(), o("punct", u, r2, f, d);
  }
  return n;
}
function Ic(e, t, n, r2, i) {
  let s = t;
  for (; s > 0 && kr(e[s - 1]); ) s--;
  let o = t + 1;
  for (; o < e.length && kr(e[o]); ) o++;
  const a = e.slice(s, o), c = r2 - (t - s), u = i === void 0 ? "" : ` in ${i}`, f = ia(vc, `Non-ASCII identifier '${a}'${u} at line ${n} column ${c}; vgpu's WGSL pipeline supports ASCII identifiers only`, { fix: `Rename '${a}' using ASCII letters, digits and '_'. Unicode (XID) identifiers are tracked in ${$c}`, line: n, column: c });
  return f.range = { file: i, start: { line: n, column: c } }, f;
}
function kr(e) {
  return e.charCodeAt(0) > 127 || /[A-Za-z0-9_]/.test(e);
}
function Tc(e) {
  return e === "e" || e === "E" || e === "p" || e === "P";
}
var kc = /^_vgsl_[0-9a-f]{8,16}__[A-Za-z_][A-Za-z0-9_]*$/;
var Fc = /* @__PURE__ */ new Set(["fn", "struct", "const", "alias", "var", "override"]);
function Li(e) {
  return new Pc(e).analyze();
}
var Pc = class {
  constructor(t) {
    m(this, "tokens");
    m(this, "scopes", []);
    m(this, "declarations", []);
    m(this, "references", []);
    m(this, "functions", []);
    m(this, "preserved", /* @__PURE__ */ new Map());
    m(this, "symbolsByScope", /* @__PURE__ */ new Map());
    m(this, "moduleFallbackReasons", []);
    m(this, "pendingSymbols", []);
    m(this, "moduleScopeId");
    this.tokens = t, this.moduleScopeId = this.createScope("module", void 0, void 0, 0);
  }
  analyze() {
    this.collectTopLevel();
    for (const t of this.functions) this.walkFunction(t);
    return { tokens: this.tokens, scopes: this.scopes, declarations: this.declarations, references: this.references, functions: this.functions, preservedTokens: [...this.preserved.entries()].map(([t, n]) => ({ tokenIndex: t, reason: n })), fallback: { wholeModule: this.moduleFallbackReasons.length > 0, reasons: this.moduleFallbackReasons } };
  }
  collectTopLevel() {
    let t = 0;
    for (let n = 0; n < this.tokens.length; n++) {
      const r2 = this.tokens[n];
      if (!de(r2)) {
        if (r2.text === "{") {
          t++;
          continue;
        }
        if (r2.text === "}") {
          t--, t < 0 && (this.moduleFallback("unmatched top-level closing brace", n), t = 0);
          continue;
        }
        if (t === 0) {
          if (r2.text === "@") {
            n = this.preserveAttribute(n);
            continue;
          }
          if (r2.text === "enable" || r2.text === "requires" || r2.text === "diagnostic" || r2.text === "const_assert") {
            n = this.preserveStatement(n, "directive");
            continue;
          }
          if (r2.text !== "export") {
            if (r2.text === "struct") {
              n = this.collectStruct(n);
              continue;
            }
            if (r2.text === "fn") {
              n = this.collectFunction(n);
              continue;
            }
            if (r2.text === "const" || r2.text === "alias" || r2.text === "var" || r2.text === "override") {
              n = this.preserveGlobalDeclaration(n);
              continue;
            }
            r2.kind === "keyword" && !Fc.has(r2.text) && this.moduleFallback(`unexpected top-level keyword '${r2.text}'`, n);
          }
        }
      }
    }
    t !== 0 && this.moduleFallback("unclosed top-level brace", this.tokens.length - 1), this.scopes[this.moduleScopeId].endToken = Math.max(0, this.tokens.length - 1);
  }
  collectStruct(t) {
    var s, o, a;
    const n = this.nextSig(t);
    if (n === void 0 || ((s = this.tokens[n]) == null ? void 0 : s.kind) !== "ident") return this.moduleFallback("struct without name", t), t;
    this.preserveToken(n, "global");
    const r2 = this.nextSig(n);
    if (r2 === void 0 || ((o = this.tokens[r2]) == null ? void 0 : o.text) !== "{") return this.moduleFallback("struct without body", t), n;
    const i = this.findMatching(r2, "{", "}");
    if (i === void 0) return this.moduleFallback("unclosed struct body", r2), r2;
    for (let c = r2; c <= i; c++) ((a = this.tokens[c]) == null ? void 0 : a.kind) === "ident" && this.preserveToken(c, "struct");
    return i;
  }
  collectFunction(t) {
    var f, d;
    const n = this.nextSig(t);
    if (n === void 0 || ((f = this.tokens[n]) == null ? void 0 : f.kind) !== "ident") return this.moduleFallback("function without name", t), t;
    const r2 = this.tokens[n].text, i = kc.test(r2) && !this.hasEntryAttributeBefore(t);
    this.addDeclaration(r2, "function", n, this.moduleScopeId, void 0, i), i || this.preserveToken(n, "global");
    const s = this.nextSig(n);
    if (s === void 0 || ((d = this.tokens[s]) == null ? void 0 : d.text) !== "(") return this.moduleFallback("function without parameter list", n), n;
    const o = this.findMatching(s, "(", ")");
    if (o === void 0) return this.moduleFallback("unclosed function parameter list", s), s;
    const a = this.findNextText(o + 1, "{");
    if (a === void 0) return this.moduleFallback("function without body", o), o;
    this.preserveFunctionSignatureTail(o + 1, a);
    const c = this.findMatching(a, "{", "}");
    if (c === void 0) return this.moduleFallback("unclosed function body", a), a;
    const u = this.createScope("function", this.moduleScopeId, this.functions.length, s);
    return this.functions.push({ id: this.functions.length, name: r2, nameTokenIndex: n, scopeId: u, bodyStartToken: a, bodyEndToken: c, skipped: false, fallbackReasons: [] }), this.collectParams(s, o, u, this.functions.length - 1), this.scopes[u].endToken = c, c;
  }
  collectParams(t, n, r2, i) {
    var s;
    for (let o = t + 1; o < n; o++) {
      const a = this.tokens[o];
      if (!de(a)) {
        if (a.text === "@") {
          o = this.preserveAttribute(o);
          continue;
        }
        if (a.kind === "ident" && this.nextSig(o) !== void 0 && ((s = this.tokens[this.nextSig(o)]) == null ? void 0 : s.text) === ":") {
          this.addDeclaration(a.text, "param", o, r2, i, true);
          const c = this.nextSig(o);
          o = this.preserveTypeFrom(c + 1, [",", ")"], n);
        }
      }
    }
  }
  preserveFunctionSignatureTail(t, n) {
    for (let r2 = t; r2 < n; r2++) {
      const i = this.tokens[r2];
      if (!de(i)) {
        if (i.text === "@") {
          r2 = this.preserveAttribute(r2);
          continue;
        }
        i.kind === "ident" && this.preserveToken(r2, "type");
      }
    }
  }
  preserveGlobalDeclaration(t) {
    var s, o, a;
    let n = t + 1;
    if (((s = this.tokens[t]) == null ? void 0 : s.text) === "var") {
      const c = this.nextSig(t);
      if (c !== void 0 && ((o = this.tokens[c]) == null ? void 0 : o.text) === "<") {
        const u = this.findMatching(c, "<", ">");
        if (u === void 0) return this.moduleFallback("unparseable top-level var template", c), c;
        this.preserveRange(c, u, "type"), n = u + 1;
      }
    }
    const r2 = this.findNextIdent(n);
    r2 !== void 0 && (this.preserveToken(r2, "global"), this.addDeclaration(this.tokens[r2].text, "global", r2, this.moduleScopeId, void 0, false));
    const i = this.findStatementEnd(t);
    for (let c = t; c <= i; c++) ((a = this.tokens[c]) == null ? void 0 : a.kind) === "ident" && this.preserveToken(c, "global");
    return i;
  }
  walkFunction(t) {
    var a, c, u;
    const n = [this.moduleScopeId, t.scopeId], r2 = [], i = (f, d) => {
      const p = this.createScope(f, n[n.length - 1], t.id, d);
      return n.push(p), p;
    }, s = (f) => {
      if (n.length <= 2) {
        this.functionFallback(t, "scope frame underflow", f);
        return;
      }
      const d = n.pop();
      return this.scopes[d].endToken = f, d;
    };
    i("block", t.bodyStartToken);
    let o = 1;
    for (let f = t.bodyStartToken + 1; f < t.bodyEndToken; f++) {
      this.activatePendingSymbols(f);
      const d = this.tokens[f];
      if (de(d)) continue;
      if (d.text === "@") {
        f = this.preserveAttribute(f);
        continue;
      }
      if (d.text === ".") {
        const g = this.nextSig(f);
        g !== void 0 && ((a = this.tokens[g]) == null ? void 0 : a.kind) === "ident" && this.preserveToken(g, "member");
        continue;
      }
      if (d.text === "enable" || d.text === "requires" || d.text === "diagnostic") {
        f = this.preserveStatement(f, "directive");
        continue;
      }
      if (d.text === "for") {
        const g = i("for-init", f), x = this.nextSig(f);
        (x === void 0 || ((c = this.tokens[x]) == null ? void 0 : c.text) !== "(") && this.functionFallback(t, "for without parenthesized header", f), r2.push({ scopeId: g, headerDepth: 0, awaitingBody: false });
        continue;
      }
      const p = r2[r2.length - 1];
      if (p && p.bodyDepth === void 0 && (d.text === "(" && p.headerDepth++, d.text === ")" && (p.headerDepth--, p.headerDepth <= 0 && (p.awaitingBody = true))), d.text === "{") {
        o++;
        const g = Cc(r2, (x) => x.awaitingBody && x.bodyDepth === void 0);
        g && (g.bodyDepth = o), i("block", f);
        continue;
      }
      if (d.text === "}") {
        const g = o;
        for (s(f), o--; r2.length > 0 && r2[r2.length - 1].bodyDepth === g; ) s(f), r2.pop();
        o < 0 && this.functionFallback(t, "unmatched closing brace", f);
        continue;
      }
      if (d.text === ":") {
        f = this.preserveTypeFrom(f + 1, ["=", ";", ",", ")", "{"], t.bodyEndToken);
        continue;
      }
      if (d.text === "-" && ((u = this.tokens[this.nextSig(f) ?? -1]) == null ? void 0 : u.text) === ">") {
        f = this.preserveTypeFrom((this.nextSig(f) ?? f) + 1, ["{"], t.bodyEndToken);
        continue;
      }
      if (d.text === "let" || d.text === "const" || d.text === "var") {
        f = this.collectLocalDeclaration(f, n[n.length - 1], t);
        continue;
      }
      if (d.kind === "ident" && !this.preserved.has(f)) {
        const g = this.resolve(d.text, n);
        g !== void 0 ? this.references.push({ name: d.text, tokenIndex: f, declarationId: g, scopeId: n[n.length - 1], functionId: t.id }) : this.preserveToken(f, "unknown");
      }
    }
    for (; n.length > 2; ) s(t.bodyEndToken);
  }
  collectLocalDeclaration(t, n, r2) {
    var c, u;
    const i = this.tokens[t].text;
    let s = t + 1;
    if (i === "var") {
      const f = this.nextSig(t);
      if (f !== void 0 && ((c = this.tokens[f]) == null ? void 0 : c.text) === "<") {
        const d = this.findMatching(f, "<", ">");
        if (d === void 0) return this.functionFallback(r2, "unparseable var template", f), f;
        this.preserveRange(f, d, "type"), s = d + 1;
      }
    }
    const o = this.findNextIdent(s);
    if (o === void 0 || o >= r2.bodyEndToken) return this.functionFallback(r2, `${i} without identifier`, t), t;
    this.addDeclaration(this.tokens[o].text, i, o, n, r2.id, true, this.findStatementEnd(t));
    const a = this.nextSig(o);
    return a !== void 0 && ((u = this.tokens[a]) == null ? void 0 : u.text) === ":" ? this.preserveTypeFrom(a + 1, ["=", ";", ",", ")"], r2.bodyEndToken) : o;
  }
  addDeclaration(t, n, r2, i, s, o, a) {
    const c = this.declarations.length;
    return this.declarations.push({ id: c, name: t, kind: n, tokenIndex: r2, scopeId: i, functionId: s, safeToRename: o }), a !== void 0 ? this.pendingSymbols.push({ name: t, id: c, scopeId: i, activateAfter: a }) : this.activateSymbol(t, c, i), c;
  }
  activatePendingSymbols(t) {
    for (let n = this.pendingSymbols.length - 1; n >= 0; n--) {
      const r2 = this.pendingSymbols[n];
      r2.activateAfter >= t || (this.activateSymbol(r2.name, r2.id, r2.scopeId), this.pendingSymbols.splice(n, 1));
    }
  }
  activateSymbol(t, n, r2) {
    let i = this.symbolsByScope.get(r2);
    i || (i = /* @__PURE__ */ new Map(), this.symbolsByScope.set(r2, i)), i.has(t) || i.set(t, n);
  }
  resolve(t, n) {
    var r2;
    for (let i = n.length - 1; i >= 0; i--) {
      const s = (r2 = this.symbolsByScope.get(n[i])) == null ? void 0 : r2.get(t);
      if (s !== void 0) return s;
    }
  }
  preserveAttribute(t) {
    var s;
    this.preserveToken(t, "attribute");
    const n = this.nextSig(t);
    if (n === void 0) return t;
    this.preserveToken(n, "attribute");
    const r2 = this.nextSig(n);
    if (r2 === void 0 || ((s = this.tokens[r2]) == null ? void 0 : s.text) !== "(") return n;
    const i = this.findMatching(r2, "(", ")");
    return i === void 0 ? (this.preserveRange(r2, r2, "attribute"), r2) : (this.preserveRange(r2, i, "attribute"), i);
  }
  preserveTypeFrom(t, n, r2) {
    let i = 0, s = 0, o = 0, a = t - 1;
    for (let c = t; c < r2; c++) {
      const u = this.tokens[c];
      if (!de(u)) {
        if (i === 0 && s === 0 && o === 0 && n.includes(u.text)) return Math.max(t - 1, c - 1);
        if (u.text === "<") i++;
        else if (u.text === ">") i = Math.max(0, i - 1);
        else if (u.text === "(") s++;
        else if (u.text === ")") {
          if (s === 0 && n.includes(")")) return Math.max(t - 1, c - 1);
          s = Math.max(0, s - 1);
        } else u.text === "[" ? o++ : u.text === "]" && (o = Math.max(0, o - 1));
        u.kind === "ident" && this.preserveToken(c, "type"), a = c;
      }
    }
    return a;
  }
  preserveStatement(t, n) {
    const r2 = this.findStatementEnd(t);
    return this.preserveRange(t, r2, n), r2;
  }
  preserveRange(t, n, r2) {
    for (let i = t; i <= n; i++) this.tokens[i] && this.tokens[i].kind !== "lineComment" && this.tokens[i].kind !== "blockComment" && this.preserveToken(i, r2);
  }
  preserveToken(t, n) {
    this.preserved.has(t) || this.preserved.set(t, n);
  }
  createScope(t, n, r2, i) {
    const s = this.scopes.length;
    return this.scopes.push({ id: s, kind: t, parentId: n, functionId: r2, startToken: i }), s;
  }
  nextSig(t) {
    for (let n = t + 1; n < this.tokens.length; n++) if (!de(this.tokens[n])) return n;
  }
  findNextIdent(t) {
    for (let n = t; n < this.tokens.length; n++) {
      const r2 = this.tokens[n];
      if (!de(r2)) {
        if (r2.kind === "ident") return n;
        if (r2.text !== "@") return;
      }
    }
  }
  findNextText(t, n) {
    for (let r2 = t; r2 < this.tokens.length; r2++) if (!de(this.tokens[r2]) && this.tokens[r2].text === n) return r2;
  }
  findStatementEnd(t) {
    let n = 0;
    for (let r2 = t; r2 < this.tokens.length; r2++) {
      const i = this.tokens[r2].text;
      if (i === "(") n++;
      else if (i === ")") n = Math.max(0, n - 1);
      else if (n === 0 && (i === ";" || i === "{" || i === "}")) return r2;
    }
    return this.tokens.length - 1;
  }
  findMatching(t, n, r2) {
    let i = 0;
    for (let s = t; s < this.tokens.length; s++) {
      const o = this.tokens[s].text;
      if (o === n && i++, o === r2 && (i--, i === 0)) return s;
    }
  }
  hasEntryAttributeBefore(t) {
    for (let n = t - 1; n >= 0; n--) {
      const r2 = this.tokens[n];
      if (!de(r2)) {
        if (r2.text === ")" || r2.kind === "ident" || r2.text === "@") {
          const i = r2.text;
          if (i === "compute" || i === "vertex" || i === "fragment") return true;
          continue;
        }
        break;
      }
    }
    return false;
  }
  moduleFallback(t, n) {
    this.moduleFallbackReasons.push(`${t} at token ${n}`);
  }
  functionFallback(t, n, r2) {
    t.skipped = true, t.fallbackReasons.push(`${n} at token ${r2}`);
  }
};
function Cc(e, t) {
  for (let n = e.length - 1; n >= 0; n--) if (t(e[n])) return e[n];
}
function de(e) {
  return e.kind === "lineComment" || e.kind === "blockComment";
}
var Ac = /* @__PURE__ */ new Set(["textureSample", "textureSampleBias", "textureSampleLevel", "textureSampleGrad", "textureGather", "textureSampleBaseClampToEdge"]);
var Uc = /* @__PURE__ */ new Set(["textureSampleCompare", "textureSampleCompareLevel", "textureGatherCompare"]);
function Lc(e, t, n) {
  const r2 = /* @__PURE__ */ new Map();
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = t[i], a = Li(s.tokens), c = /* @__PURE__ */ new Map();
    for (const f of o.vars) {
      const d = H(f.attrs, "group"), p = H(f.attrs, "binding"), g = a.declarations.find((x) => x.kind === "global" && x.name === f.name);
      d !== void 0 && p !== void 0 && g && c.set(g.id, { group: d, binding: p });
    }
    const u = /* @__PURE__ */ new Map();
    for (const f of a.declarations) {
      if (f.kind !== "function") continue;
      const d = a.functions.find((p) => p.nameTokenIndex === f.tokenIndex);
      d && u.set(f.id, d.id);
    }
    for (const f of o.entries) {
      const d = a.functions.find((y) => y.name === f.name), p = [];
      let g = a.fallback.wholeModule || !d;
      !g && d && (g = !Ri(d.id, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Set(), a, c, u, p));
      const x = d ? Vc(d.id, a, c, u) : n.map(bn);
      r2.set(f, g ? Nc(n, x) : Oc(p));
    }
  }
  return r2;
}
function Ri(e, t, n, r2, i, s, o) {
  var d, p;
  const a = r2.functions[e];
  if (!a || a.skipped) return false;
  const c = `${e}|${[...t].map(([g, x]) => `${g}:${x.group}:${x.binding}`).join(",")}`;
  if (n.has(c)) return true;
  n.add(c);
  const u = r2.references.filter((g) => g.functionId === e), f = new Map(u.map((g) => [g.tokenIndex, g]));
  for (let g = a.bodyStartToken + 1; g < a.bodyEndToken; g++) {
    const x = (d = r2.tokens[g]) == null ? void 0 : d.text, y = Ac.has(x ?? "") ? "filtering" : Uc.has(x ?? "") ? "comparison" : void 0, v = f.get(g), P = v && s.get(v.declarationId);
    if (!y && P === void 0) continue;
    const I = Mc(r2, g);
    if (I === void 0 || ((p = r2.tokens[I]) == null ? void 0 : p.text) !== "(") continue;
    const G = Dc(r2, I);
    if (!G) return false;
    const X = G.map(([Z, K]) => Rc(Z, K, r2, i, t));
    if (y) {
      const Z = x === "textureGather" && !Gc(G[0], r2, i, t) ? 1 : 0, K = X[Z], B = X[Z + 1];
      if (!K || !B) return false;
      o.push({ texture: K, sampler: B, mode: y });
    } else {
      const Z = r2.declarations.filter((B) => B.kind === "param" && B.functionId === P).sort((B, h) => B.tokenIndex - h.tokenIndex), K = /* @__PURE__ */ new Map();
      for (let B = 0; B < Z.length; B++) X[B] && K.set(Z[B].id, X[B]);
      if (!Ri(P, K, n, r2, i, s, o)) return false;
    }
  }
  return true;
}
function Rc(e, t, n, r2, i) {
  for (const s of n.references) {
    if (s.tokenIndex < e || s.tokenIndex > t) continue;
    const o = r2.get(s.declarationId) ?? i.get(s.declarationId);
    if (o) return o;
  }
}
function Gc(e, t, n, r2) {
  const i = t.references.find((s) => s.tokenIndex >= e[0] && s.tokenIndex <= e[1]);
  return (i == null ? void 0 : i.tokenIndex) === e[0] ? n.get(i.declarationId) ?? r2.get(i.declarationId) : void 0;
}
function Dc(e, t) {
  const n = [];
  let r2 = 1, i = 0, s = 0, o = 0, a = t + 1;
  for (let c = t + 1; c < e.tokens.length; c++) {
    const u = e.tokens[c].text;
    if (u === "(") r2++;
    else if (u === ")") {
      if (r2--, r2 === 0) return n.push([a, c - 1]), n;
    } else u === "[" ? i++ : u === "]" ? i-- : u === "{" ? s++ : u === "}" ? s-- : u === "<" ? o++ : u === ">" ? o-- : u === "," && r2 === 1 && i === 0 && s === 0 && o === 0 && (n.push([a, c - 1]), a = c + 1);
  }
}
function Mc(e, t) {
  for (let n = t + 1; n < e.tokens.length; n++) if (e.tokens[n].kind !== "lineComment" && e.tokens[n].kind !== "blockComment") return n;
}
function Vc(e, t, n, r2) {
  const i = [e], s = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
  for (; i.length; ) {
    const a = i.pop();
    if (!s.has(a)) {
      s.add(a);
      for (const c of t.references) {
        if (c.functionId !== a) continue;
        const u = n.get(c.declarationId);
        u && o.set(`${u.group}:${u.binding}`, u);
        const f = r2.get(c.declarationId);
        f !== void 0 && i.push(f);
      }
    }
  }
  return [...o.values()];
}
function Nc(e, t) {
  const n = new Set(t.map((o) => `${o.group}:${o.binding}`)), r2 = e.filter((o) => n.has(`${o.group}:${o.binding}`)), i = r2.filter((o) => {
    var a;
    return ((a = o.bindingLayout) == null ? void 0 : a.kind) === "texture" && o.bindingLayout.texture.sampleType === "unfilterable-float" && !o.bindingLayout.texture.multisampled;
  }), s = r2.filter((o) => {
    var a;
    return ((a = o.bindingLayout) == null ? void 0 : a.kind) === "sampler" && o.bindingLayout.sampler.type === "filtering";
  });
  return i.flatMap((o) => s.map((a) => ({ texture: bn(o), sampler: bn(a), mode: "filtering" })));
}
function bn(e) {
  return { group: e.group, binding: e.binding };
}
function Oc(e) {
  const t = /* @__PURE__ */ new Set();
  return e.filter((n) => {
    const r2 = `${n.texture.group}:${n.texture.binding}:${n.sampler.group}:${n.sampler.binding}:${n.mode}`;
    return t.has(r2) ? false : (t.add(r2), true);
  });
}
function _c(e, t) {
  const n = e.map(La), r2 = ja(e, n), i = qa(n, r2), s = [], o = [];
  for (const u of n) for (const f of u.vars) {
    const d = H(f.attrs, "group"), p = H(f.attrs, "binding");
    if (d === void 0 || p === void 0) continue;
    const g = je(f.type, f.path, r2), x = fa(g, f.addressSpace), y = f.addressSpace === "uniform" || f.addressSpace === "storage" ? Ct(g, f.addressSpace, f.name, f.mangledName, i) : void 0;
    y && o.push(y), s.push({ group: d, binding: p, name: f.name, mangledName: f.mangledName, type: g, kind: x, addressSpace: f.addressSpace, access: f.access, struct: g.kind === "identifier" ? i.structs.get(g.mangledName ?? g.name) : void 0, layout: y, bindingLayout: da(x, f.addressSpace, f.access, g, y) });
  }
  s.sort((u, f) => u.group - f.group || u.binding - f.binding);
  const a = Bc(e, n, s), c = Lc(e, n, s);
  return { bindings: s, entryPoints: n.flatMap((u) => u.entries.map((f) => zc(f, n.flatMap((d) => d.structs), r2, i, a.get(f) ?? s, c.get(f) ?? []))), overrides: n.flatMap((u) => u.overrides), featuresRequired: [...new Set(n.flatMap((u) => u.features))], aliases: [...i.aliases.values()], structs: [...i.structs.values()], hostShareableLayouts: o };
}
function Bc(e, t, n) {
  const r2 = /* @__PURE__ */ new Map();
  for (let i = 0; i < e.length; i++) {
    const s = e[i], o = t[i], a = Li(s.tokens), c = a.fallback.wholeModule, u = /* @__PURE__ */ new Map();
    for (const d of a.declarations) {
      if (d.kind !== "function") continue;
      const p = a.functions.find((g) => g.nameTokenIndex === d.tokenIndex);
      p && u.set(d.id, p.id);
    }
    const f = /* @__PURE__ */ new Map();
    for (const d of o.vars) {
      const p = H(d.attrs, "group"), g = H(d.attrs, "binding");
      if (p === void 0 || g === void 0) continue;
      const x = a.declarations.find((y) => y.kind === "global" && y.name === d.name);
      x && f.set(x.id, { group: p, binding: g });
    }
    for (const d of o.entries) {
      const p = a.functions.find((v) => v.name === d.name);
      if (c || !p) {
        r2.set(d, n);
        continue;
      }
      const g = [p.id], x = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Map();
      for (; g.length; ) {
        const v = g.pop();
        if (!x.has(v) && (x.add(v), !!a.functions[v])) for (const P of a.references) {
          if (P.functionId !== v) continue;
          const I = f.get(P.declarationId);
          I && y.set(`${I.group}:${I.binding}`, I);
          const G = u.get(P.declarationId);
          G !== void 0 && g.push(G);
        }
      }
      r2.set(d, [...y.values()].sort((v, P) => v.group - P.group || v.binding - P.binding));
    }
  }
  return r2;
}
function zc(e, t, n, r2, i, s) {
  return { name: e.name, mangledName: e.mangledName, stage: e.stage, ...e.workgroupSize ? { workgroupSize: e.workgroupSize } : {}, bindings: i.map(({ group: o, binding: a }) => ({ group: o, binding: a })), samplingPairs: s, ...e.stage === "vertex" ? { inputs: Wc(e, t, n, r2) } : {} };
}
function Wc(e, t, n, r2) {
  var s;
  const i = [];
  for (const o of e.params) {
    if (Fr(o.attrs, "builtin")) continue;
    const a = je(o.type, e.path, n), c = H(o.attrs, "location");
    if (c !== void 0) {
      i.push({ name: o.name, location: c, type: a });
      continue;
    }
    const u = dt(a, r2);
    if (u.kind !== "identifier") continue;
    const f = t.find((p) => p.mangledName === (u.mangledName ?? u.name)), d = r2.structs.get(u.mangledName ?? u.name);
    if (f) for (let p = 0; p < f.members.length; p++) {
      const g = f.members[p];
      if (Fr(g.attrs, "builtin")) continue;
      const x = H(g.attrs, "location");
      x !== void 0 && i.push({ name: g.name, location: x, type: ((s = d == null ? void 0 : d.members[p]) == null ? void 0 : s.type) ?? je(g.type, f.path, n) });
    }
  }
  return i;
}
function Fr(e, t) {
  return e.some((n) => n.name === t);
}
function Gi(e, t = "<runtime>") {
  const n = Ec(e, t), r2 = oa(n);
  if (r2.imports.length > 0) throw R("VGPU-WGSL-REFLECT-SOURCE-IMPORT", "reflectSource() accepts a single raw WGSL string; use resolveShader() for WGSL import graphs.");
  return _c([{ path: t, source: e, tokens: n, parsed: r2 }]);
}
function Di() {
  const e = /* @__PURE__ */ new Map();
  return { getOrCreate(t, n, r2, i) {
    const s = r2.map(xn), o = `${t}:${n}:${s.join("|")}`, a = e.get(o);
    if (a) return a.bindGroup;
    const c = i();
    return e.set(o, { identities: s, bindGroup: c }), c;
  }, evictIdentity(t) {
    const n = xn(t);
    for (const [r2, i] of e) i.identities.includes(n) && e.delete(r2);
  }, clearDraw(t) {
    const n = `${t}:`;
    for (const r2 of e.keys()) r2.startsWith(n) && e.delete(r2);
  }, dispose() {
    e.clear();
  } };
}
function xn(e) {
  return typeof e == "string" || typeof e == "number" ? String(e) : `${e.kind}:${e.id}`;
}
function qt(e, t, n) {
  const r2 = e[t];
  if (!r2) throw new S({ code: "VGPU-REFLECT-ENTRY-METADATA-MISSING", message: `Entry point '${e.name}' has no reflected ${t}.`, fix: "Pass the reflection from reflectSource()/resolveShader().", where: n });
  return r2;
}
var Ht = /* @__PURE__ */ new WeakMap();
function St(e, t) {
  if (!e.gpu.pushErrorScope || !e.gpu.popErrorScope) return;
  e.gpu.pushErrorScope("validation");
  const n = Ht.get(e.gpu);
  n ? n.push(t) : Ht.set(e.gpu, [t]);
}
function re(e) {
  const t = Ht.get(e.gpu);
  if (!(t != null && t.length) || !e.gpu.popErrorScope) return;
  const n = t.pop();
  return t.length || Ht.delete(e.gpu), { context: n, error: e.gpu.popErrorScope() };
}
function Mi(e) {
  const t = [];
  let n = re(e);
  for (; n; ) t.push(n), n = re(e);
  return t;
}
function jc(e) {
  const t = re(e);
  t && qn(t);
}
function Vi(e) {
  for (const t of Mi(e)) qn(t);
}
function q(e) {
  for (const t of e) qn(t);
}
function Kn(e) {
  var t, n;
  return ((n = (t = e.gpu.queue).onSubmittedWorkDone) == null ? void 0 : n.call(t)) ?? Promise.resolve();
}
function Ni(e, t = [], n = {}) {
  return qc(e, t, n.errorSink ?? Hc);
}
function Yt(e, t) {
  return { context: e.context, error: Kc(e.error, t.error) };
}
async function Kc(e, t) {
  const n = await Promise.allSettled([e, t]);
  for (const i of n) if (i.status === "fulfilled" && i.value) return i.value;
  const r2 = n.find((i) => i.status === "rejected");
  if ((r2 == null ? void 0 : r2.status) === "rejected") throw r2.reason;
  return null;
}
async function qc(e, t, n) {
  await Kn(e);
  for (const r2 of t) try {
    const i = await r2.error;
    i && await n(ct(r2.context.label, r2.context.group, i));
  } catch (i) {
    await n(ct(r2.context.label, r2.context.group, i));
  }
}
function qn(e) {
  e.error.catch(() => {
  });
}
function Hc(e) {
  console.error(e);
}
function Oi(e, t, n, r2) {
  var i;
  try {
    t.end();
  } catch (s) {
    const o = Mi(e);
    q(n), q(o), n.length = 0;
    const a = ((i = o[0]) == null ? void 0 : i.context) ?? r2;
    throw a ? ct(a.label, a.group, s) : s;
  }
}
var Yc = 1;
var Pr = /* @__PURE__ */ new WeakMap();
function Xc(e) {
  return e === null || typeof e != "object" || ArrayBuffer.isView(e) || e instanceof ArrayBuffer || Array.isArray(e) ? true : e instanceof Ie || e instanceof ut ? false : !Bi(e);
}
function yn(e) {
  return typeof e != "object" || e === null || Array.isArray(e) || ArrayBuffer.isView(e) || e instanceof ArrayBuffer || e instanceof Ie || e instanceof ut ? false : !Bi(e);
}
function Cr(e, t, n) {
  var r2;
  switch ((r2 = e.bindingLayout) == null ? void 0 : r2.kind) {
    case "buffer":
      return Zc(e, t, n);
    case "texture":
      return Jc(e, t, n);
    case "sampler":
      return Qc(e, t);
    case "storageTexture":
      throw ge(e, "storage texture", "Pass a storage-compatible texture.");
    case "externalTexture":
      throw ge(e, "external texture", "Pass a compatible GPUExternalTexture.");
    default:
      throw ge(e, "reflected resource", "Fix shader reflection bindingLayout.");
  }
}
function Zc(e, t, n) {
  const r2 = na(t);
  if (r2) return r2[_n](e, n.sourceHint);
  if (t instanceof Ie) return mn(t, `${n.sourceHint}.set`), tu(e, t.options.usage), { resource: { buffer: t.gpu }, identity: t.resourceIdentity, unsubscribe: (i) => t.onDestroy(i) };
  if (ru(t)) return mn(t.buffer, `${n.sourceHint}.set`), { resource: { buffer: t.gpu, offset: 0, size: t.size }, identity: t.buffer.resourceIdentity, unsubscribe: (i) => t.buffer.onDestroy(i) };
  if (Wi(t)) return { resource: t, identity: $t(t.buffer) };
  if (Hn(t)) return { resource: { buffer: t }, identity: $t(t) };
  throw ge(e, "buffer", `Pass a compatible Buffer/Uniform: ${e.name}.set({ ${e.name}: gpu.device.createBuffer(...) }).`);
}
function Jc(e, t, n) {
  var i;
  const r2 = _i(t);
  if (r2) {
    const s = r2.color;
    Ar(e, s, n);
    const o = (i = r2.onTexturesRecreated) == null ? void 0 : i.bind(r2);
    return { resource: s.createView(), identity: s.resourceIdentity, unsubscribe: (a) => r2.onDestroy(a), onRecreate: o ? (a) => o(a) : void 0 };
  }
  if (t instanceof ut) return nu(e, t.usage), Ar(e, t, n), { resource: t.createView(), identity: t.resourceIdentity, unsubscribe: (s) => t.onDestroy(s) };
  if (zi(t)) return { resource: t.createView(), identity: t.resourceIdentity ?? $t(t) };
  if (typeof t == "object" && t !== null) return { resource: t, identity: $t(t) };
  throw ge(e, "texture/target", `Pass a Texture or Target: ${e.name}.set({ ${e.name}: scene.color }) or set({ ${e.name}: scene }).`);
}
function Qc(e, t) {
  if (eu(t)) return { resource: t, identity: $t(t) };
  throw ge(e, "sampler", `Use the cached sampler: set({ ${e.name}: sampler(gpu) }).`);
}
function eu(e) {
  return typeof e != "object" || e === null || e instanceof Ie || e instanceof ut ? false : !Hn(e) && !Wi(e) && !zi(e) && !_i(e);
}
function tu(e, t) {
  var r2;
  const n = ((r2 = e.bindingLayout) == null ? void 0 : r2.kind) === "buffer" ? e.bindingLayout.buffer.type : void 0;
  if (n === "uniform" && !t.includes("uniform")) throw ge(e, "uniform buffer", "Create with usage: ['uniform','copy_dst'].");
  if ((n === "storage" || n === "read-only-storage") && !t.includes("storage")) throw ge(e, "storage buffer", "Create with usage: ['storage','copy_dst'].");
}
function nu(e, t) {
  if (!t.includes("texture_binding") && !t.includes("render_attachment")) throw ge(e, "sampled texture", "Use texture_binding usage or a sampleable Target.");
}
function Ar(e, t, n) {
  if (!(!n.filterableTexture || n.float32Filterable) && (t.format === "r32float" || t.format === "rg32float" || t.format === "rgba32float")) throw So(n.sourceHint, e, t.format, t.label ?? "texture", n.pairedSampler);
}
function _i(e) {
  if (typeof e != "object" || e === null) return;
  const t = e;
  if (!(!t.resourceIdentity || !t.color || typeof t.onDestroy != "function")) return t;
}
function Bi(e) {
  const t = e;
  return "gpu" in t || "bindGroup" in t || "createView" in t || "resourceIdentity" in t;
}
function $t(e) {
  if (typeof e != "object" || e === null) return `value:${String(e)}`;
  let t = Pr.get(e);
  return t || (t = { kind: "external", id: Yc++ }, Pr.set(e, t)), t;
}
function ru(e) {
  return typeof e == "object" && e !== null && "gpu" in e && "size" in e && "buffer" in e && e.buffer instanceof Ie;
}
function zi(e) {
  return typeof e == "object" && e !== null && typeof e.createView == "function";
}
function Wi(e) {
  return typeof e == "object" && e !== null && "buffer" in e && Hn(e.buffer);
}
function Hn(e) {
  return typeof e == "object" && e !== null && "size" in e && "usage" in e && typeof e.destroy == "function";
}
function ji(e, t) {
  iu(e);
  const n = new ArrayBuffer(e.size);
  return Yn(new DataView(n), e, 0, t), n;
}
function iu(e) {
  if (e.size === void 0) throw O("set", `No se puede inferir byteLength para layout runtime-sized '${e.name}'.`);
}
function Yn(e, t, n, r2) {
  if (t.members) return su(e, t.members, n, r2);
  ou(e, t, n, r2);
}
function su(e, t, n, r2) {
  const i = r2;
  for (const s of t) Yn(e, s.layout, n + s.offset, i == null ? void 0 : i[s.name]);
}
function ou(e, t, n, r2) {
  switch (t.type.kind) {
    case "scalar":
      return Xn(e, n, t.type.name, r2);
    case "vector":
      return au(e, n, t.type, r2);
    case "matrix":
      return cu(e, t, n, r2);
    case "array":
      return uu(e, t, n, r2);
    default:
      throw O("set", `No hay writer para layout ${t.type.kind}.`);
  }
}
function Xn(e, t, n, r2) {
  n === "f32" ? e.setFloat32(t, Number(r2 ?? 0), true) : n === "i32" ? e.setInt32(t, Number(r2 ?? 0), true) : n === "u32" || n === "bool" ? e.setUint32(t, n === "bool" ? r2 ? 1 : 0 : Number(r2 ?? 0), true) : e.setUint16(t, fu(Number(r2 ?? 0)), true);
}
function au(e, t, n, r2) {
  const i = r2, s = Ki(n.element);
  for (let o = 0; o < n.width; o++) Xn(e, t + o * s, Zn(n.element), (i == null ? void 0 : i[o]) ?? 0);
}
function cu(e, t, n, r2) {
  const i = t.type, s = r2, o = Ki(i.element), a = t.stride ?? 16;
  for (let c = 0; c < i.columns; c++) for (let u = 0; u < i.rows; u++) Xn(e, n + c * a + u * o, Zn(i.element), (s == null ? void 0 : s[c * i.rows + u]) ?? 0);
}
function uu(e, t, n, r2) {
  var o;
  const i = r2, s = t.stride ?? ((o = t.element) == null ? void 0 : o.size) ?? 0;
  if (!t.element) throw O("set", "Array layout sin element layout.");
  for (let a = 0; a < ((i == null ? void 0 : i.length) ?? 0); a++) Yn(e, t.element, n + a * s, i[a]);
}
function Ki(e) {
  return Zn(e) === "f16" ? 2 : 4;
}
function Zn(e) {
  if (e.kind !== "scalar") throw O("set", `Expected scalar, got ${e.kind}`);
  return e.name;
}
function fu(e) {
  const t = new Float32Array(1), n = new Uint32Array(t.buffer);
  t[0] = e;
  const r2 = n[0], i = r2 >> 16 & 32768, s = r2 & 8388607, o = r2 >> 23 & 255;
  if (o === 255) return i | (s ? 32256 : 31744);
  const a = o - 127 + 15;
  return a >= 31 ? i | 31744 : a <= 0 ? a < -10 ? i : i | (s | 8388608) >> 1 - a + 13 : i | a << 10 | s >> 13;
}
var Ur = /* @__PURE__ */ new WeakMap();
function du(e, t) {
  const n = /* @__PURE__ */ new Map(), r2 = /* @__PURE__ */ new Set();
  for (const s of t) {
    const o = s.stage === "vertex" ? 1 : s.stage === "fragment" ? 2 : 4;
    for (const a of qt(s, "bindings", "visibility")) {
      const c = `${a.group}:${a.binding}`;
      n.set(c, (n.get(c) ?? 0) | o);
    }
    for (const a of qt(s, "samplingPairs", "visibility")) a.mode === "filtering" && r2.add(`${a.texture.group}:${a.texture.binding}`);
  }
  const i = (s) => n.get(`${s.group}:${s.binding}`) ?? 0;
  return Object.defineProperty(i, "filterable", { value: r2 }), i;
}
function qi(e, t, n = Jn) {
  return e.flatMap((r2) => {
    var s;
    if (r2.group !== t) return [];
    const i = n(r2);
    return i === 0 ? [] : [{ binding: r2.binding, visibility: i, ...pu(r2, ((s = n.filterable) == null ? void 0 : s.has(`${r2.group}:${r2.binding}`)) ?? false) }];
  });
}
function lu(e, t, n, r2 = Jn) {
  const i = /* @__PURE__ */ new Map(), s = n.bindings.filter((a) => r2(a) !== 0).map((a) => a.group), o = Math.max(-1, ...s);
  for (let a = 0; a <= o; a++) i.set(a, hu(e, t, n, a, r2));
  return i;
}
function hu(e, t, n, r2, i = Jn) {
  return Hi(e, `${t}.group${r2}.bgl`, qi(n.bindings, r2, i));
}
function Hi(e, t, n) {
  let r2 = Ur.get(e.gpu);
  r2 || (r2 = /* @__PURE__ */ new Map(), Ur.set(e.gpu, r2));
  const i = JSON.stringify(n), s = r2.get(i);
  if (s) return s;
  const o = bo(e.gpu.createBindGroupLayout({ label: t, entries: n }), { entries: n });
  return r2.set(i, o), o;
}
function pu(e, t) {
  const n = e.bindingLayout;
  if (!n) throw O("bindGroupLayout", `Binding '${e.name}' does not have a reflected bindingLayout.`);
  return t && n.kind === "texture" && n.texture.sampleType === "unfilterable-float" && !n.texture.multisampled ? { texture: { ...n.texture, sampleType: "float" } } : mu(n);
}
function mu(e) {
  switch (e.kind) {
    case "buffer":
      return { buffer: { ...e.buffer } };
    case "sampler":
      return { sampler: { ...e.sampler } };
    case "texture":
      return { texture: { ...e.texture } };
    case "storageTexture":
      return { storageTexture: { ...e.storageTexture } };
    case "externalTexture":
      return { externalTexture: {} };
  }
}
function Jn(e) {
  const t = globalThis.GPUShaderStage, n = (t == null ? void 0 : t.VERTEX) ?? 1, r2 = (t == null ? void 0 : t.FRAGMENT) ?? 2, i = (t == null ? void 0 : t.COMPUTE) ?? 4;
  return e.kind === "buffer" ? n | r2 | i : r2 | i;
}
function gu(e) {
  const t = wu(e.reflection), n = [...e.bindGroupLayouts.keys()].sort((h, b) => h - b), r2 = /* @__PURE__ */ new Map();
  function i(h) {
    const b = [];
    for (const [E, T] of Object.entries(h)) b.push(...o(E, T));
    return b;
  }
  function s(h) {
    var E;
    const b = e.bindGroupLayouts.get(h.info.group);
    return !!b && !!((E = yt(b)) != null && E.entries.some((T) => T.binding === h.info.binding));
  }
  function o(h, b) {
    const E = t.get(h);
    if (E) return a(E, h, b);
    const T = bu(h, t, e.label);
    if (!T) throw O(`${e.label}.set`, `Binding '${h}' does not exist in '${e.label}'.`);
    return c(T, h, b);
  }
  function a(h, b, E) {
    Z(h.info.group);
    const T = Lr(h.info, E);
    Rr(h, b, T);
    const z = Ot(h.identity);
    return T === "lib" ? u(h, vu(h.libValue, E)) : d(h, E), s(h) ? dn(h, z) : [];
  }
  function c(h, b, E) {
    Z(h.info.group);
    const T = Lr(h.info, E);
    if (Rr(h, b, T), xu(h, b, T), T !== "lib") throw O(`${e.label}.set`, `Member '${b}' needs a JS value; set resource '${h.info.name}' instead.`);
    const z = Ot(h.identity);
    return u(h, { ...$u(h.libValue), [b]: E }), s(h) ? dn(h, z) : [];
  }
  function u(h, b) {
    const E = B(h);
    h.libValue = b;
    const T = ji(E, b);
    h.buffer || K(h, E.size), h.bytes = T, h.buffer.write(T, 0);
  }
  function f(h) {
    var z, J;
    const b = (z = yt(e.bindGroupLayouts.get(h.group))) == null ? void 0 : z.entries.find((D) => D.binding === h.binding), E = e.reflection.entryPoints.flatMap((D) => qt(D, "samplingPairs", e.label)).find((D) => D.mode === "filtering" && D.texture.group === h.group && D.texture.binding === h.binding), T = E && e.reflection.bindings.find((D) => D.group === E.sampler.group && D.binding === E.sampler.binding);
    return { sourceHint: e.label, filterableTexture: ((J = b == null ? void 0 : b.texture) == null ? void 0 : J.sampleType) === "float", float32Filterable: e.device.features.has("float32-filterable"), pairedSampler: T };
  }
  function d(h, b) {
    var T, z, J, D;
    const E = Cr(h.info, b, f(h.info));
    (T = h.unsubscribe) == null || T.call(h), (z = h.unsubscribeRecreate) == null || z.call(h), h.resource = E.resource, h.identity = E.identity, h.unsubscribe = (J = E.unsubscribe) == null ? void 0 : J.call(E, () => {
      h.identity && e.cache.evictIdentity(h.identity);
    }), h.unsubscribeRecreate = (D = E.onRecreate) == null ? void 0 : D.call(E, () => p(h, b));
  }
  function p(h, b) {
    var z, J, D, Pe, ce;
    const E = Ot(h.identity);
    h.identity && e.cache.evictIdentity(h.identity);
    const T = Cr(h.info, b, f(h.info));
    if ((z = h.unsubscribe) == null || z.call(h), (J = h.unsubscribeRecreate) == null || J.call(h), h.resource = T.resource, h.identity = T.identity, h.unsubscribe = (D = T.unsubscribe) == null ? void 0 : D.call(T, () => {
      h.identity && e.cache.evictIdentity(h.identity);
    }), h.unsubscribeRecreate = (Pe = T.onRecreate) == null ? void 0 : Pe.call(T, () => p(h, b)), s(h)) for (const on of dn(h, E)) (ce = e.onIdentityChange) == null || ce.call(e, on);
  }
  function g(h, b, E) {
    x(h), yu(e.label, h, b, E);
    const T = r2.has(h) ? `claimed-group:${h}` : void 0;
    return r2.set(h, b), T;
  }
  function x(h) {
    const b = e.bindGroupLayouts.get(h);
    if (!b) throw O(`${e.label}.layout`, `@group(${h}) does not exist in '${e.label}'.`);
    return b;
  }
  function y() {
    return n.map(v);
  }
  function v(h) {
    var Pe;
    const b = r2.get(h);
    if (b) return { group: h, bindGroup: b, offsets: [], claimValidation: P(b, h) };
    const E = new Set((Pe = yt(x(h))) == null ? void 0 : Pe.entries.map((ce) => ce.binding)), T = e.reflection.bindings.filter((ce) => ce.group === h && E.has(ce.binding)), z = I(T), J = G(T), D = e.cache.getOrCreate(e.drawId, h, J, () => e.device.gpu.createBindGroup({ label: `${e.label}.group${h}`, layout: x(h), entries: z }));
    return { group: h, bindGroup: D, offsets: [] };
  }
  function P(h, b) {
    return pi(h) ? void 0 : { label: e.label, group: b };
  }
  function I(h) {
    return h.map((b) => {
      const E = X(b);
      return { binding: b.binding, resource: E.resource };
    });
  }
  function G(h) {
    return h.map((b) => X(b).identity);
  }
  function X(h) {
    const b = t.get(h.name);
    if (!(b != null && b.resource) || !b.identity) throw vo(e.label, h);
    return b;
  }
  function Z(h) {
    if (r2.has(h)) throw $o(e.label, h);
  }
  function K(h, b) {
    h.buffer = e.device.createBuffer({ size: b, usage: ["uniform", "copy_dst"], label: `${e.label}.${h.info.name}` }), h.resource = { buffer: h.buffer.gpu, offset: 0, size: b }, h.identity = h.buffer.resourceIdentity, h.unsubscribe = h.buffer.onDestroy(() => e.cache.evictIdentity(h.buffer.resourceIdentity));
  }
  function B(h) {
    var b;
    if (h.info.kind !== "buffer" || !((b = h.info.layout) != null && b.size)) throw O(`${e.label}.set`, `Binding '${h.info.name}' needs a compatible resource, not JS.`);
    return h.info.layout;
  }
  return { get groups() {
    return n;
  }, set: i, claimGroup: g, layout: x, bindGroups: y, bindingState(h) {
    const b = t.get(h);
    if (!(!(b != null && b.ownership) || !b.resource || !b.identity)) return { info: b.info, ownership: b.ownership, resource: b.resource, identity: b.identity };
  } };
}
function wu(e) {
  return new Map(e.bindings.map((t) => [t.name, { info: t, memberOwnership: /* @__PURE__ */ new Map() }]));
}
function bu(e, t, n) {
  var i, s;
  let r2;
  for (const o of t.values()) if ((s = (i = o.info.layout) == null ? void 0 : i.members) != null && s.some((a) => a.name === e)) {
    if (r2) throw O(`${n}.set`, `Binding member '${e}' is ambiguous in '${n}'; set the complete binding.`);
    r2 = o;
  }
  return r2;
}
function Lr(e, t) {
  var n;
  return ((n = e.bindingLayout) == null ? void 0 : n.kind) === "buffer" && Xc(t) ? "lib" : "user";
}
function Rr(e, t, n) {
  if (e.ownership && e.ownership !== n) throw mi(t, e.ownership);
  e.ownership ?? (e.ownership = n);
}
function xu(e, t, n) {
  const r2 = e.memberOwnership.get(t);
  if (r2 && r2 !== n) throw mi(t, r2);
  e.memberOwnership.set(t, n);
}
function yu(e, t, n, r2) {
  const i = pi(n);
  if (!i) return;
  const s = yt(r2);
  if (!s) return;
  const o = Su(s.entries, i.layout.entries);
  if (o) throw Eo(e, t, o);
}
function Su(e, t) {
  if (e.length !== t.length) return `expected ${e.length} bindings and received ${t.length}`;
  const n = Gr(e), r2 = Gr(t);
  for (const [i, s] of n) {
    const o = r2.get(i);
    if (!o) return `missing @binding(${i})`;
    if (Dr(s) !== Dr(o)) return `@binding(${i}) does not match the reflected layout`;
  }
}
function Gr(e) {
  return new Map(e.map((t) => [t.binding, t]));
}
function Dr(e) {
  return JSON.stringify({ binding: e.binding, visibility: e.visibility, buffer: e.buffer, sampler: e.sampler, texture: e.texture, storageTexture: e.storageTexture, externalTexture: e.externalTexture ? {} : void 0 });
}
function dn(e, t) {
  const n = Ot(e.identity);
  return !n || t === n ? [] : [{ group: e.info.group, binding: e.info.binding, bindingName: e.info.name, bindingKind: e.info.kind, previousIdentity: t, newIdentity: n }];
}
function Ot(e) {
  return e === void 0 ? void 0 : xn(e);
}
function vu(e, t) {
  return yn(e) && yn(t) ? { ...e, ...t } : t;
}
function $u(e) {
  return yn(e) ? e : {};
}
var Eu = "rgba8unorm";
var Qn = Object.freeze([0, 0, 0, 1]);
function Xt(e, t) {
  const n = e, r2 = Array.isArray(e) ? e : [n == null ? void 0 : n.r, n == null ? void 0 : n.g, n == null ? void 0 : n.b, n == null ? void 0 : n.a];
  if (r2.length !== 4 || !r2.every((i) => typeof i == "number" && Number.isFinite(i))) throw zo(t);
  return er(e);
}
function er(e) {
  const t = e;
  return Array.isArray(e) ? [e[0], e[1], e[2], e[3]] : { r: t.r, g: t.g, b: t.b, a: t.a };
}
function _t(e) {
  return e.colors ?? [{ format: e.format ?? Eu }];
}
function Yi(e) {
  return e.depth === true ? "depth24plus" : e.depth || void 0;
}
function Xi(e) {
  const t = e.msaa;
  if (t === true || t === 4) return 4;
  if (t === void 0 || t === false) return 1;
  const n = gi();
  throw n.code = "VGPU-TARGET-MSAA-INVALID", n.message = `msaa received ${t}; WebGPU 1|4; use true`, n;
}
function Iu(e, t) {
  if (!(e != null && e.size)) throw gi();
  const n = Yi(e);
  if (n === "stencil8") throw Mo(n);
  if (Xi(e) === 4) for (const r2 of _t(e)) Tu(r2.format, t);
}
function Tu(e, t) {
  if (t.isCompatibilityMode && e === "rgba16float") throw O("target", "Dawn compatibility mode does not support rgba16float+msaa.", "Use rgba8unorm for MSAA here, or disable msaa.");
}
function ku(e, t, n, r2) {
  const i = { view: (t ?? e).createView(), resolveTarget: t ? e.createView() : void 0, loadOp: r2 ? "load" : "clear", storeOp: t ? "discard" : "store" };
  return r2 || (i.clearValue = Zi(n)), i;
}
function Fu(e, t, n, r2, i) {
  if (i) {
    const o = { view: e.createView(), depthReadOnly: true };
    return Et(e.format) && (o.stencilReadOnly = true), o;
  }
  const s = { view: e.createView(), depthLoadOp: t ? "load" : "clear", depthStoreOp: e.sampleCount > 1 ? "discard" : "store" };
  return t || (s.depthClearValue = n ?? 1), e.format && Et(e.format) && (s.stencilLoadOp = t ? "load" : "clear", s.stencilStoreOp = e.sampleCount > 1 ? "discard" : "store", t || (s.stencilClearValue = r2 ?? 0)), s;
}
function Et(e) {
  return !!e && e.includes("stencil");
}
function Zi(e) {
  return Array.isArray(e) ? { r: e[0], g: e[1], b: e[2], a: e[3] } : e;
}
function Ji(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}
function sn(e) {
  return typeof e == "object" && e !== null && typeof e.renderPassDescriptor == "function";
}
var Pu = 1;
var Cu = 1;
var Au = /* @__PURE__ */ new WeakMap();
var Uu = /* @__PURE__ */ new WeakMap();
function Lu(e) {
  var t;
  return sn(e) ? { colors: e.colors.map((n) => n.format), depth: (t = e.depth) == null ? void 0 : t.format, sampleCount: e.sampleCount } : typeof e != "object" || e === null ? { colors: [] } : { colors: Array.isArray(e.colors) ? [...e.colors] : e.colors ?? [], depth: e.depth, sampleCount: e.sampleCount ?? 1 };
}
function Qi(e) {
  return `${e.colors.join(",")}:${e.depth ?? "none"}:${e.sampleCount ?? 1}`;
}
function Ru(e, t) {
  if (!Array.isArray(e.colors) || e.colors.length === 0) throw Lt(t, "colors must be a non-empty array.");
  const n = e.colors.find((i) => typeof i != "string" || i.length === 0);
  if (n !== void 0) throw Lt(t, `colors must contain only GPUTextureFormat strings; received ${String(n)}.`);
  if (e.depth !== void 0 && (typeof e.depth != "string" || e.depth.length === 0)) throw Lt(t, "depth must be a GPUTextureFormat string.");
  const r2 = e.sampleCount ?? 1;
  if (r2 !== 1 && r2 !== 4) throw Lt(t, `sampleCount must be 1 or 4; received ${String(r2)}.`);
}
function Gu(e) {
  const t = `${Or(Au, e.module, () => Pu++)}|${Or(Uu, e.pipelineLayout, () => Cu++)}|${_u(e.vertexBufferLayouts ?? [])}|${Qi(e.signature)}`, n = e.topology || e.stripIndexFormat ? `${t}|${e.topology ?? "triangle-list"}|${e.stripIndexFormat ?? "none"}` : t, r2 = e.cullMode || e.frontFace ? `${n}|${e.cullMode ?? "none"}|${e.frontFace ?? "ccw"}` : n, i = e.unclippedDepth ? `${r2}|unclipped` : r2, s = e.depthKey ? `${i}|${e.depthKey}` : i, o = e.stencilKey ? `${s}|${e.stencilKey}` : s, a = e.multisampleKey ? `${o}|${e.multisampleKey}` : o, c = e.constantsKey ? `${a}|${e.constantsKey}` : a, u = e.entryKey ? `${c}|${e.entryKey}` : c;
  return e.fragmentKey ? `${u}|${e.fragmentKey}` : u;
}
function Mr(e, t, n, r2, i) {
  if (r2 === void 0) return t.find((o) => o.stage === n);
  if (typeof r2 != "string") throw Vt(e, `${n} received ${Sn(r2)}; expected an entry point name string.`, i);
  const s = t.find((o) => o.name === r2);
  if (!s) throw Vt(e, `"${r2}" matches no entry point in the shader; available entry points: ${Vr(t)}.`, i);
  if (s.stage !== n) throw Vt(e, `"${r2}" is a @${s.stage} entry point, not @${n}; available entry points: ${Vr(t)}.`, i);
  return s;
}
function Vr(e) {
  return e.length ? e.map((t) => `"${t.name}" (@${t.stage})`).join(", ") : "none";
}
function Du(e, t, n, r2) {
  if (t !== void 0 && (typeof t != "object" || t === null || Array.isArray(t))) throw Ut(e, `received ${Sn(t)}; expected { overrideNameOrId: number | boolean }.`, r2);
  const i = new Map(n.map((o) => [Nr(o), o])), s = {};
  for (const [o, a] of Object.entries(t ?? {})) {
    if (!i.has(o)) throw Ut(e, `"${o}" matches no override in the shader; available overrides: ${Mu(n)}.`, r2);
    if (typeof a == "boolean") {
      s[o] = a ? 1 : 0;
      continue;
    }
    if (typeof a != "number" || !Number.isFinite(a)) throw Ut(e, `"${o}" received ${Sn(a)}; use a finite number or a boolean (WebGPU converts the value to the override's WGSL type, and NaN/Infinity fail that conversion).`, r2);
    s[o] = a;
  }
  for (const o of n) {
    const a = Nr(o);
    if (o.defaultValue === void 0 && !(a in s)) throw Ut(e, `override '${o.name}' has no default value and must be provided; add constants: { "${a}": value }.`, r2);
  }
  return Object.keys(s).length === 0 ? {} : { constants: s, constantsKey: Vu(s) };
}
function Nr(e) {
  return e.id !== void 0 ? String(e.id) : e.name;
}
function Mu(e) {
  return e.length ? e.map((t) => t.id !== void 0 ? `"${t.id}" (@id of ${t.name})` : `"${t.name}"`).join(", ") : "none";
}
function Vu(e) {
  return `cn~${Object.entries(e).sort(([t], [n]) => t < n ? -1 : t > n ? 1 : 0).map(([t, n]) => `${t}=${n}`).join("~")}`;
}
function Sn(e) {
  if (typeof e == "string") return `"${e}"`;
  try {
    return JSON.stringify(e) ?? String(e);
  } catch {
    return String(e);
  }
}
function es(e) {
  const t = /* @__PURE__ */ new Map();
  return { get(n, r2) {
    let i = t.get(n);
    return i || (i = e.gpu.createShaderModule({ label: r2, code: n }), t.set(n, i)), i;
  }, dispose() {
    t.clear();
  } };
}
function ts(e) {
  const t = /* @__PURE__ */ new Map();
  return { get(n) {
    const r2 = Bu(n);
    let i = t.get(r2);
    return i || (i = e.gpu.createPipelineLayout({ bindGroupLayouts: zu(n) }), t.set(r2, i)), i;
  }, dispose() {
    t.clear();
  } };
}
function ns(e, t = {}) {
  return new Nu(e, t);
}
var V;
var ye;
var Ve;
var Tt;
var et;
var j2;
var rs;
var is;
var ss;
var vn;
var $n;
var Nu = class {
  constructor(t, n) {
    $(this, j2);
    m(this, "device");
    $(this, V, /* @__PURE__ */ new Map());
    $(this, ye, /* @__PURE__ */ new Set());
    $(this, Ve);
    $(this, Tt);
    $(this, et, false);
    var r2;
    this.device = t, F(this, Ve, n.errorSink ?? (() => {
    })), F(this, Tt, (r2 = n.registerSettledSource) == null ? void 0 : r2.call(n, () => [...l(this, ye)]));
  }
  getReady(t) {
    var n;
    return (n = l(this, V).get(t)) == null ? void 0 : n.pipeline;
  }
  getSync(t, n, r2) {
    var a;
    w(this, j2, vn).call(this, r2.where);
    const i = l(this, V).get(t);
    if (i != null && i.pipeline) return i.pipeline;
    const s = i ?? {};
    i || l(this, V).set(t, s);
    const o = w(this, j2, rs).call(this, t, s, n, r2);
    if (!o) {
      s.pending || l(this, V).delete(t);
      return;
    }
    return s.pipeline = o, (a = s.pending) == null || a.resolve(o), s.pending = void 0, o;
  }
  getAsync(t, n, r2) {
    w(this, j2, vn).call(this, r2.where);
    const i = l(this, V).get(t);
    if (i != null && i.pipeline) return Promise.resolve(i.pipeline);
    if (i != null && i.pending) return i.pending.promise;
    const s = {}, o = Ou();
    s.pending = o, l(this, V).set(t, s);
    let a;
    try {
      a = n();
    } catch (c) {
      const u = ht(r2.where, c, r2.signature);
      return o.reject(u), l(this, V).delete(t), o.promise;
    }
    return w(this, j2, $n).call(this, a), a.then((c) => {
      l(this, V).get(t) !== s || s.pipeline || s.pending !== o || (s.pipeline = c, s.pending = void 0, o.resolve(c));
    }, (c) => {
      l(this, V).get(t) !== s || s.pipeline || s.pending !== o || (s.pending = void 0, l(this, V).delete(t), o.reject(ht(r2.where, c, r2.signature)));
    }), o.promise;
  }
  dispose() {
    var n, r2;
    if (l(this, et)) return;
    F(this, et, true);
    const t = Sr("gpu.dispose");
    for (const i of l(this, V).values()) (n = i.pending) == null || n.reject(t);
    l(this, V).clear(), l(this, ye).clear(), (r2 = l(this, Tt)) == null || r2.call(this);
  }
};
V = /* @__PURE__ */ new WeakMap(), ye = /* @__PURE__ */ new WeakMap(), Ve = /* @__PURE__ */ new WeakMap(), Tt = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ new WeakMap(), j2 = /* @__PURE__ */ new WeakSet(), rs = function(t, n, r2, i) {
  const s = this.device.gpu, o = typeof s.pushErrorScope == "function" && typeof s.popErrorScope == "function";
  o && s.pushErrorScope("validation");
  try {
    const a = r2();
    return o && w(this, j2, is).call(this, t, n, i), a;
  } catch (a) {
    o && w(this, j2, ss).call(this);
    const c = ht(i.where, a, i.signature);
    l(this, Ve).call(this, c);
    return;
  }
}, is = function(t, n, r2) {
  const i = this.device.gpu.popErrorScope().then((s) => {
    if (!s) return;
    const o = ht(r2.where, s, r2.signature);
    return l(this, V).get(t) === n && l(this, V).delete(t), l(this, Ve).call(this, o);
  }, (s) => {
    const o = ht(r2.where, s, r2.signature);
    return l(this, V).get(t) === n && l(this, V).delete(t), l(this, Ve).call(this, o);
  });
  w(this, j2, $n).call(this, i);
}, ss = function() {
  var n, r2;
  const t = (r2 = (n = this.device.gpu).popErrorScope) == null ? void 0 : r2.call(n);
  t && t.catch(() => {
  });
}, vn = function(t) {
  if (l(this, et)) throw Sr(t);
}, $n = function(t) {
  l(this, ye).add(t), t.catch(() => {
  }).then(() => l(this, ye).delete(t), () => l(this, ye).delete(t));
};
function Ou() {
  let e, t;
  const n = new Promise((r2, i) => {
    e = r2, t = i;
  });
  return n.catch(() => {
  }), { promise: n, resolve: e, reject: t };
}
function Or(e, t, n) {
  let r2 = e.get(t);
  return r2 || (r2 = n(), e.set(t, r2)), r2;
}
function _u(e) {
  return JSON.stringify(e.map((t) => ({ arrayStride: t.arrayStride, stepMode: t.stepMode ?? "vertex", attributes: [...t.attributes].map((n) => ({ shaderLocation: n.shaderLocation, offset: n.offset, format: n.format })) })));
}
function Bu(e) {
  return JSON.stringify([...e.entries()].map(([t, n]) => ({ group: t, entries: ju(n) })));
}
function zu(e) {
  const t = Math.max(-1, ...e.keys()), n = [];
  for (let r2 = 0; r2 <= t; r2++) n.push(Wu(e, r2));
  return n;
}
function Wu(e, t) {
  const n = e.get(t);
  if (!n) throw Do(t);
  return n;
}
function ju(e) {
  var t;
  return (((t = yt(e)) == null ? void 0 : t.entries) ?? []).map((n) => ({ binding: n.binding, visibility: n.visibility, buffer: n.buffer ? { ...n.buffer } : void 0, sampler: n.sampler ? { ...n.sampler } : void 0, texture: n.texture ? { ...n.texture } : void 0, storageTexture: n.storageTexture ? { ...n.storageTexture } : void 0, externalTexture: n.externalTexture ? { ...n.externalTexture } : void 0 }));
}
var Ku = nn("frame-state");
function os(e) {
  return e.service(Ku, qu);
}
function qu() {
  const e = /* @__PURE__ */ new Set();
  let t = _r(), n = false, r2 = false;
  const i = { time: 0, deltaTime: 0, frameCount: 0, advanceBy(s) {
    i.deltaTime = s, i.time += s, r2 = true;
  }, tick() {
    if (n) throw bi();
    n = true;
    try {
      const s = _r();
      r2 ? r2 = false : (i.deltaTime = Math.max(0, (s - t) / 1e3), i.time += i.deltaTime), t = s, i.frameCount += 1;
      for (const o of [...e]) o();
    } finally {
      n = false;
    }
  }, onAdvance(s) {
    return e.add(s), () => {
      e.delete(s);
    };
  } };
  return i;
}
function _r() {
  var e, t;
  return ((t = (e = globalThis.performance) == null ? void 0 : e.now) == null ? void 0 : t.call(e)) ?? Date.now();
}
function Td(e, t, n = {}) {
  const r2 = ke(e, "surface"), i = Yu(r2), s = i.get(t);
  if (s && !s.disposed) throw No(s.label);
  const o = new cs(r2.device, t, n, (u) => {
    i.get(u.canvas) === u && i.delete(u.canvas), a(), c();
  }), a = os(r2).onAdvance(() => o.applyAutoResize()), c = r2.own("resource", () => o.dispose());
  return i.set(t, o), o;
}
var Hu = nn("surfaces");
function Yu(e) {
  return e.service(Hu, () => /* @__PURE__ */ new Map());
}
var wt = 0;
var tr = 0;
function Xu() {
  return wt > 0;
}
function Zu() {
  return tr > 0;
}
function Ju() {
  tr += 1;
}
function Qu() {
  tr -= 1;
}
function as(e) {
  return e instanceof cs;
}
var kt;
var Ne;
var Oe;
var le;
var tt;
var Se;
var ve;
var U;
var En;
var us;
var fs;
var In;
var ee;
var cs = class {
  constructor(t, n, r2, i) {
    $(this, U);
    m(this, "device");
    m(this, "canvas");
    m(this, "options");
    m(this, "unregister");
    m(this, "resourceIdentity", en("render-target"));
    m(this, "label");
    m(this, "context");
    m(this, "autoResize");
    m(this, "layoutBacked");
    m(this, "format");
    $(this, kt, new tn());
    $(this, Ne, /* @__PURE__ */ new Set());
    $(this, Oe, /* @__PURE__ */ new Set());
    $(this, le);
    $(this, tt);
    $(this, Se, false);
    $(this, ve, false);
    this.device = t, this.canvas = n, this.options = r2, this.unregister = i, this.label = r2.label, F(this, tt, r2.clearColor === void 0 ? Qn : Xt(r2.clearColor, "surface.clearColor"));
    const s = n.getContext("webgpu");
    if (!s) throw Vo();
    if (this.context = s, this.layoutBacked = ef(n), r2.autoResize === true && !this.layoutBacked) throw _o();
    this.autoResize = r2.autoResize ?? (r2.size ? false : this.layoutBacked), F(this, le, zr(r2.dpr)), this.format = r2.format ?? nf();
    const o = tf(n, r2, this.layoutBacked, l(this, le));
    (r2.size || this.layoutBacked) && Br(n, o), s.configure({ device: t.gpu, format: this.format, alphaMode: r2.alphaMode ?? "premultiplied", colorSpace: r2.colorSpace ?? "srgb", usage: rf() });
  }
  get gpu() {
    return this.context;
  }
  get size() {
    return w(this, U, ee).call(this), Bt(this.canvas);
  }
  get texelSize() {
    const t = this.size;
    return [1 / t[0], 1 / t[1]];
  }
  get color() {
    return w(this, U, ee).call(this), new ut(this.device, this.context.getCurrentTexture(), { size: this.size, format: this.format, usage: ["render_attachment", "texture_binding", "copy_src"], label: this.options.label ? `${this.options.label}.color` : "surface.color" }, "external");
  }
  get colors() {
    return [this.color];
  }
  get depth() {
    w(this, U, ee).call(this);
  }
  get sampleCount() {
    return w(this, U, ee).call(this), 1;
  }
  get dpr() {
    return l(this, le);
  }
  get clearColor() {
    return er(l(this, tt));
  }
  set clearColor(t) {
    F(this, tt, Xt(t, "surface.clearColor"));
  }
  get disposed() {
    return l(this, Se);
  }
  resize(t) {
    if (w(this, U, ee).call(this), l(this, ve)) throw Bo(this.options.label);
    w(this, U, En).call(this, Zt(t), l(this, le), true);
  }
  applyAutoResize() {
    if (l(this, Se) || !this.autoResize || !this.layoutBacked) return;
    const t = zr(this.options.dpr), n = ds(this.canvas, t);
    w(this, U, En).call(this, n, t, true);
  }
  onResize(t) {
    w(this, U, ee).call(this), l(this, Ne).add(t), F(this, ve, true), wt += 1;
    try {
      t(w(this, U, In).call(this));
    } finally {
      wt -= 1, F(this, ve, false);
    }
    return () => {
      l(this, Ne).delete(t);
    };
  }
  async read() {
    return w(this, U, ee).call(this), this.color.read();
  }
  async readFloats() {
    return w(this, U, ee).call(this), this.color.readFloats();
  }
  onDestroy(t) {
    return w(this, U, ee).call(this), l(this, kt).onDestroy(this, t);
  }
  onTexturesRecreated(t) {
    return w(this, U, ee).call(this), l(this, Oe).add(t), () => {
      l(this, Oe).delete(t);
    };
  }
  renderPassDescriptor(t = {}) {
    const { clear: n = [0, 0, 0, 1], preserve: r2 } = t;
    w(this, U, ee).call(this);
    const i = { view: this.context.getCurrentTexture().createView(), loadOp: r2 ? "load" : "clear", storeOp: "store" };
    return r2 || (i.clearValue = Zi(n)), { colorAttachments: [i] };
  }
  dispose() {
    var t, n;
    if (!l(this, Se)) {
      F(this, Se, true);
      try {
        (n = (t = this.context).unconfigure) == null || n.call(t);
      } catch {
      }
      this.unregister(this), l(this, Ne).clear(), l(this, Oe).clear(), l(this, kt).emit(this);
    }
  }
};
kt = /* @__PURE__ */ new WeakMap(), Ne = /* @__PURE__ */ new WeakMap(), Oe = /* @__PURE__ */ new WeakMap(), le = /* @__PURE__ */ new WeakMap(), tt = /* @__PURE__ */ new WeakMap(), Se = /* @__PURE__ */ new WeakMap(), ve = /* @__PURE__ */ new WeakMap(), U = /* @__PURE__ */ new WeakSet(), En = function(t, n, r2) {
  const i = !Ji(Bt(this.canvas), t);
  F(this, le, n), i && (Br(this.canvas, t), w(this, U, us).call(this), r2 && w(this, U, fs).call(this));
}, us = function() {
  for (const t of [...l(this, Oe)]) t();
}, fs = function() {
  F(this, ve, true), wt += 1;
  try {
    const t = w(this, U, In).call(this);
    for (const n of [...l(this, Ne)]) n(t);
  } finally {
    wt -= 1, F(this, ve, false);
  }
}, In = function() {
  const t = Bt(this.canvas);
  return { width: t[0], height: t[1], dpr: l(this, le), surface: this };
}, ee = function() {
  if (l(this, Se)) throw Oo(this.options.label);
};
function ef(e) {
  return typeof e.clientWidth == "number";
}
function tf(e, t, n, r2) {
  return t.size ? Zt(t.size) : n ? ds(e, r2) : Zt(Bt(e));
}
function ds(e, t) {
  const n = e;
  return Zt([Math.round(n.clientWidth * t), Math.round(n.clientHeight * t)]);
}
function Bt(e) {
  const t = e;
  return [t.width, t.height];
}
function Br(e, t) {
  const n = e;
  n.width = t[0], n.height = t[1];
}
function Zt(e) {
  return [Math.max(1, Math.floor(e[0])), Math.max(1, Math.floor(e[1]))];
}
function zr(e) {
  const t = globalThis.devicePixelRatio ?? 1;
  return Array.isArray(e) ? Math.min(e[1], Math.max(e[0], t)) : typeof e == "number" ? e : t;
}
function nf() {
  var e, t, n;
  return ((n = (t = (e = globalThis.navigator) == null ? void 0 : e.gpu) == null ? void 0 : t.getPreferredCanvasFormat) == null ? void 0 : n.call(t)) ?? "bgra8unorm";
}
function rf() {
  const e = globalThis.GPUTextureUsage;
  return e ? e.RENDER_ATTACHMENT | e.TEXTURE_BINDING | e.COPY_SRC : void 0;
}
var sf = { drawIndirect: { bytes: 16, args: "4 u32 values: vertexCount, instanceCount, firstVertex, firstInstance" }, drawIndexedIndirect: { bytes: 20, args: "5 32-bit values: indexCount, instanceCount, firstIndex, baseVertex (signed), firstInstance" }, dispatchWorkgroupsIndirect: { bytes: 12, args: "3 u32 values: workgroupCountX, workgroupCountY, workgroupCountZ" } };
function of(e, t, n, r2) {
  const i = typeof n == "object" && n !== null ? n.buffer : void 0, s = Wr(n) ? n : Wr(i) ? i : void 0;
  if (!s) throw He(e, `received ${jr(n)}; expected a StorageBuffer or { buffer, offset? }.`, t);
  const o = s === n ? 0 : n.offset ?? 0;
  if (typeof o != "number" || !Number.isInteger(o) || o < 0) throw He(e, `offset must be an integer >= 0; received ${jr(o)}.`, t);
  if (o % 4 !== 0) throw He(e, `offset must be a multiple of 4 (WebGPU requires "indirectOffset is a multiple of 4"); received ${o}.`, t);
  if (!s.buffer.options.usage.includes("indirect")) throw He(e, `the buffer lacks the "indirect" usage (WebGPU requires "indirectBuffer.usage contains INDIRECT"); create it with storage(gpu, ${s.size}, { indirect: true }).`, t);
  const { bytes: a, args: c } = sf[r2];
  if (o + a > s.size) throw He(e, `${r2} reads ${a} bytes (${c}) at offset ${o}, but offset + ${a} = ${o + a} exceeds the buffer size ${s.size}.`, t);
  return { buffer: s.gpu, offset: o };
}
function Wr(e) {
  return typeof e == "object" && e !== null && "gpu" in e && "size" in e && e.buffer instanceof Ie;
}
function jr(e) {
  if (typeof e == "string") return `"${e}"`;
  try {
    return JSON.stringify(e) ?? String(e);
  } catch {
    return String(e);
  }
}
var Jt = /* @__PURE__ */ Symbol("vgpu.frame.drawable");
function af(e) {
  return e == null ? void 0 : e[Jt];
}
var cf = /* @__PURE__ */ Symbol("vgpu.frame.bundle");
function uf(e) {
  return e == null ? void 0 : e[cf];
}
var ls = /* @__PURE__ */ Symbol("vgpu.frame.passAttachment");
function ff(e) {
  return typeof (e == null ? void 0 : e[ls]) == "function" ? e : void 0;
}
function kd(e, t) {
  return nr(ke(e, "sampler")).sampler(t);
}
var Kr = 1;
function df(e) {
  const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new WeakMap();
  return { sampler(r2 = {}) {
    const i = Tn(r2);
    let s = t.get(i);
    return s || (s = e.gpu.createSampler(r2), t.set(i, s), n.set(s, { kind: "sampler", id: Kr++ })), s;
  }, identity(r2) {
    let i = n.get(r2);
    return i || (i = { kind: "sampler", id: Kr++ }, n.set(r2, i)), i;
  } };
}
function Tn(e) {
  if (e === null || typeof e != "object") return JSON.stringify(e);
  if (Array.isArray(e)) return `[${e.map(Tn).join(",")}]`;
  const t = e;
  return `{${Object.keys(t).sort().map((n) => `${JSON.stringify(n)}:${Tn(t[n])}`).join(",")}}`;
}
var lf = nn("render-service");
function nr(e) {
  return e.service(lf, hf);
}
function hf(e) {
  const t = e.device, n = Di(), r2 = ns(t, { errorSink: (a) => e.reportError(a), registerSettledSource: (a) => e.registerSettledSource(a) }), i = es(t), s = ts(t), o = df(t);
  return e.own("service", () => {
    r2.dispose(), i.dispose(), s.dispose(), n.dispose();
  }), { binds: n, pipelines: r2, shaderModules: i, pipelineLayouts: s, sampler: (a) => o.sampler(a) };
}
function hs(e) {
  if (typeof e == "string") return e;
  if (!pf(e) || !("version" in e) || e.version !== 1) throw Rt(e);
  const n = e.wgsl;
  if (typeof n != "string") throw Rt(e);
  return n;
}
function pf(e) {
  return typeof e == "object" && e !== null;
}
var mf = 1;
var ps = /* @__PURE__ */ new WeakMap();
var nt;
var A;
var gs;
var ws;
var bt;
var bs;
var xs;
var ys;
var Ss;
var kn;
var Fn;
var ms = class {
  constructor(t, n, r2, i = Di(), s, o = ns(t), a = es(t), c = ts(t), u, f) {
    $(this, A);
    m(this, "source");
    m(this, "label");
    $(this, nt, /* @__PURE__ */ new Map());
    this.source = n, N(t, "Draw.constructor"), this.label = r2.label ?? "draw";
    const d = mf++, p = Gi(n, `${this.label}.wgsl`), g = Ef(this.label, r2.entry), x = Mr(this.label, p.entryPoints, "vertex", g.vertex, "draw"), y = Mr(this.label, p.entryPoints, "fragment", g.fragment, "draw"), v = If(p, x, y), P = [x, y].filter((lt) => !!lt), I = du(p.bindings, P);
    gf(t, this.label, p.bindings, P, I);
    const G = r2.geometry, X = x ? qt(x, "inputs", this.label) : [], Z = G && gn in G ? G[gn](X, `${this.label}.geometry`) : G == null ? void 0 : G.vertexBufferLayouts, K = new Map(lu(t, this.label, p, I)), B = c.get(K), h = a.get(n, `${this.label}.shader`), b = Bf(), E = xf(this.label, r2), T = Sf(this.label, r2, E), z = Tf(t, this.label, r2), J = Cf(t, this.label, r2), D = Rf(this.label, r2), Pe = Df(this.label, r2), ce = Du(this.label, r2.constants, p.overrides, "draw"), on = gu({ device: t, label: this.label, drawId: d, reflection: p, bindGroupLayouts: K, cache: i, onIdentityChange: (lt) => b.markStale({ kind: "binding-identity", drawLabel: this.label, ...lt }) });
    ps.set(this, { id: d, device: t, opts: r2, vertexBufferLayouts: Z, cache: i, defaultTarget: s, reflection: p, visibility: I, vertexEntry: (x == null ? void 0 : x.name) ?? "vs_main", fragmentEntry: (y == null ? void 0 : y.name) ?? "fs_main", entryKey: v, setCore: on, bindGroupLayouts: K, pipelineLayout: B, shaderModule: h, pipelineStore: o, pipelineLayouts: c, errorSink: u, trackSettled: f, resolvedPipelineKeys: /* @__PURE__ */ new Set(), recordedIn: b, ...E, ...T, ...z, ...J, ...D, ...Pe, ...ce }), r2.set && this.set(r2.set);
    for (const lt of r2.targets ?? []) this.compileSync(lt);
  }
  get gpu() {
    const t = k(this);
    for (const n of t.resolvedPipelineKeys) {
      const r2 = t.pipelineStore.getReady(n);
      if (r2) return r2;
    }
  }
  get targets() {
    return k(this).opts.targets;
  }
  get [Jt]() {
    return this;
  }
  writesDepth() {
    return Nf(this);
  }
  stencilWritingOps() {
    return Of(this);
  }
  set(t) {
    const n = k(this);
    N(n.device, `${this.label}.set`);
    for (const r2 of n.setCore.set(t)) n.recordedIn.markStale({ kind: "binding-identity", drawLabel: this.label, ...r2 });
    return this;
  }
  group(t, n) {
    const r2 = k(this);
    N(r2.device, `${this.label}.group`);
    const i = l(this, nt).get(t) ?? this.layout(t), s = r2.setCore.claimGroup(t, n, i);
    return r2.recordedIn.markStale({ kind: "group-claim", drawLabel: this.label, group: t, previousIdentity: s, newIdentity: `claimed-group:${t}` }), this;
  }
  layout(t, n = {}) {
    return N(k(this).device, `${this.label}.layout`), n.dynamicOffsets ? w(this, A, gs).call(this, t) : k(this).setCore.layout(t);
  }
  draw(t = {}) {
    var d, p, g, x;
    N(k(this).device, `${this.label}.draw`);
    const n = sn(t) ? { target: t } : t, r2 = k(this), i = n.target ?? r2.defaultTarget;
    if (!i) throw pn(`${this.label}.draw`);
    oi(i, `${this.label}.draw`);
    const s = r2.device.gpu.createCommandEncoder(), o = s.beginRenderPass(i.renderPassDescriptor()), a = [];
    try {
      this.encode(o, i, n, (y) => a.push(y));
    } catch (y) {
      q(a), Vi(r2.device);
      try {
        o.end();
      } catch {
      }
      throw y;
    }
    Oi(r2.device, o, a, (d = a[0]) == null ? void 0 : d.context);
    let c;
    const u = (p = a[0]) == null ? void 0 : p.context;
    u && St(r2.device, u);
    try {
      c = s.finish();
    } catch (y) {
      const v = u ? re(r2.device) : void 0;
      q(a), v && q([v]);
      const P = (v == null ? void 0 : v.context) ?? u;
      if (P) {
        si(r2, P.label, P.group, y);
        return;
      }
      throw y;
    }
    if (u) {
      const y = re(r2.device);
      y && (a[0] = a[0] ? Yt(y, a[0]) : y);
    }
    const f = (g = a[0]) == null ? void 0 : g.context;
    f && St(r2.device, f);
    try {
      r2.device.gpu.queue.submit([c]);
    } catch (y) {
      const v = f ? re(r2.device) : void 0;
      q(a), v && q([v]);
      const P = (v == null ? void 0 : v.context) ?? f;
      if (P) {
        si(r2, P.label, P.group, y);
        return;
      }
      throw y;
    }
    if (f) {
      const y = re(r2.device);
      y && (a[0] = a[0] ? Yt(y, a[0]) : y);
    }
    if (a.length) {
      const y = Ni(r2.device, a, { errorSink: r2.errorSink });
      (x = r2.trackSettled) == null || x.call(r2, y);
    }
  }
  encode(t, n, r2 = {}, i) {
    N(k(this).device, `${this.label}.encode`);
    const s = this.pipelineFor(n, true);
    if (!s) return;
    t.setPipeline(s);
    const o = k(this);
    o.blendConstant && t.setBlendConstant(o.blendConstant), o.stencilRef !== void 0 && t.setStencilReference(o.stencilRef);
    for (const a of o.setCore.bindGroups()) w(this, A, ws).call(this, t, a, r2, i);
    w(this, A, ys).call(this, t, r2);
  }
  compile(t) {
    N(k(this).device, `${this.label}.compile`);
    const { key: n, signature: r2, signatureKey: i } = w(this, A, bt).call(this, t, `${this.label}.compile`);
    return k(this).pipelineStore.getAsync(n, () => w(this, A, Fn).call(this, r2), { where: `${this.label}.compile`, signature: i }).then(() => (N(k(this).device, `${this.label}.compile`), k(this).resolvedPipelineKeys.add(n), this));
  }
  compileSync(t) {
    N(k(this).device, `${this.label}.compileSync`);
    const { key: n, signature: r2, signatureKey: i } = w(this, A, bt).call(this, t, `${this.label}.compileSync`);
    return k(this).pipelineStore.getSync(n, () => w(this, A, kn).call(this, r2), { where: `${this.label}.compileSync`, signature: i }) && k(this).resolvedPipelineKeys.add(n), this;
  }
  pipelineFor(t, n = false) {
    N(k(this).device, `${this.label}.pipelineFor`);
    const { key: r2, signature: i, signatureKey: s } = w(this, A, bt).call(this, t, `${this.label}.pipelineFor`, n), o = k(this).pipelineStore.getSync(r2, () => w(this, A, kn).call(this, i), { where: `${this.label}.pipelineFor`, signature: s });
    return o && k(this).resolvedPipelineKeys.add(r2), o;
  }
  pipelineForAsync(t) {
    N(k(this).device, `${this.label}.pipelineForAsync`);
    const { key: n, signature: r2, signatureKey: i } = w(this, A, bt).call(this, t, `${this.label}.pipelineForAsync`);
    return k(this).pipelineStore.getAsync(n, () => w(this, A, Fn).call(this, r2), { where: `${this.label}.pipelineForAsync`, signature: i }).then((o) => (N(k(this).device, `${this.label}.pipelineForAsync`), k(this).resolvedPipelineKeys.add(n), o));
  }
};
nt = /* @__PURE__ */ new WeakMap(), A = /* @__PURE__ */ new WeakSet(), gs = function(t) {
  const n = k(this);
  n.setCore.layout(t);
  const r2 = l(this, nt).get(t);
  if (r2) return r2;
  const i = Wf(this, t), s = Hi(n.device, `${this.label}.group${t}.dynamic.bgl`, i);
  return l(this, nt).set(t, s), n.bindGroupLayouts.set(t, s), n.pipelineLayout = n.pipelineLayouts.get(n.bindGroupLayouts), s;
}, ws = function(t, n, r2, i) {
  const s = zf(r2.offsets, n.group, n.offsets);
  if (!n.claimValidation || !i) {
    t.setBindGroup(n.group, n.bindGroup, s);
    return;
  }
  St(k(this).device, n.claimValidation);
  try {
    t.setBindGroup(n.group, n.bindGroup, s);
  } catch (a) {
    throw jc(k(this).device), ct(n.claimValidation.label, n.claimValidation.group, a);
  }
  const o = re(k(this).device);
  o && i(o);
}, bt = function(t, n, r2 = false) {
  const i = w(this, A, bs).call(this, t, n, r2), s = Qi(i);
  return { signature: i, signatureKey: s, key: w(this, A, xs).call(this, i) };
}, bs = function(t, n, r2 = false) {
  var a;
  const i = k(this), s = t ?? i.defaultTarget;
  if (!s) throw pn(n);
  r2 || oi(s, n);
  const o = Lu(s);
  if (Ru(o, n), i.colorStates && i.colorStates.length !== o.colors.length) throw hn(this.label, `expected one entry per color attachment; colors has ${i.colorStates.length}, but the target signature has ${o.colors.length}.`, n);
  if ((a = i.multisampleState) != null && a.alphaToCoverageEnabled && (o.sampleCount ?? 1) <= 1) throw Mt(this.label, `alphaToCoverage requires a multisampled target, but the target signature has sampleCount ${o.sampleCount ?? 1}; create the target with msaa: true.`, n);
  if ((i.stencilState || i.stencilRef !== void 0) && !Et(o.depth)) throw Ze(this.label, `stencil requires a depth format with a stencil aspect, but the target signature has ${o.depth ? `"${o.depth}"` : "no depth"}; create the target with depth: "depth24plus-stencil8".`, n);
  return o;
}, xs = function(t) {
  const n = k(this), r2 = n.opts.geometry;
  return Gu({ module: n.shaderModule, pipelineLayout: n.pipelineLayout, vertexBufferLayouts: n.vertexBufferLayouts, signature: t, fragmentKey: n.fragmentKey, topology: r2 == null ? void 0 : r2.topology, stripIndexFormat: vs(r2), cullMode: n.cullMode, frontFace: n.frontFace, unclippedDepth: n.unclippedDepth, depthKey: n.depthKey, stencilKey: n.stencilKey, multisampleKey: n.multisampleKey, constantsKey: n.constantsKey, entryKey: n.entryKey });
}, ys = function(t, n = {}) {
  const r2 = k(this).opts.geometry;
  if (r2 != null && r2.vertexBuffers && r2.vertexBuffers.forEach((s, o) => t.setVertexBuffer(o, s)), n.indirect !== void 0) return w(this, A, Ss).call(this, t, r2, n);
  const i = bf(this.label, r2, k(this).opts, n);
  if (!(r2 != null && r2.indexBuffer)) return t.draw(i.vertexCount, i.instanceCount, i.firstVertex, i.firstInstance);
  t.setIndexBuffer(r2.indexBuffer, r2.indexFormat ?? "uint32"), t.drawIndexed(i.indexCount, i.instanceCount, i.firstIndex, i.baseVertex, i.firstInstance);
}, Ss = function(t, n, r2) {
  const i = `${this.label}.draw`, s = wf.find((u) => r2[u] !== void 0);
  if (s !== void 0) throw He(this.label, `indirect cannot be combined with ${s} in the same call; the GPU reads the draw arguments from the buffer, so the CPU-side value would be ignored.`, i);
  const o = !!(n != null && n.indexBuffer), { buffer: a, offset: c } = of(this.label, i, r2.indirect, o ? "drawIndexedIndirect" : "drawIndirect");
  if (!o) return t.drawIndirect(a, c);
  t.setIndexBuffer(n.indexBuffer, n.indexFormat ?? "uint32"), t.drawIndexedIndirect(a, c);
}, kn = function(t) {
  const n = k(this);
  return n.device.gpu.createRenderPipeline({ label: `${this.label}.pipeline`, layout: n.pipelineLayout, vertex: { module: n.shaderModule, entryPoint: n.vertexEntry, buffers: [...n.vertexBufferLayouts ?? []], ...n.constants ? { constants: n.constants } : {} }, fragment: { module: n.shaderModule, entryPoint: n.fragmentEntry, targets: qr(t, n), ...n.constants ? { constants: n.constants } : {} }, primitive: Hr(n.opts.geometry, n.cullMode, n.frontFace, n.unclippedDepth), depthStencil: ei(t, n), multisample: ri(t, n) });
}, Fn = function(t) {
  const n = k(this);
  return n.device.gpu.createRenderPipelineAsync({ label: `${this.label}.pipeline`, layout: n.pipelineLayout, vertex: { module: n.shaderModule, entryPoint: n.vertexEntry, buffers: [...n.vertexBufferLayouts ?? []], ...n.constants ? { constants: n.constants } : {} }, fragment: { module: n.shaderModule, entryPoint: n.fragmentEntry, targets: qr(t, n), ...n.constants ? { constants: n.constants } : {} }, primitive: Hr(n.opts.geometry, n.cullMode, n.frontFace, n.unclippedDepth), depthStencil: ei(t, n), multisample: ri(t, n) });
};
function gf(e, t, n, r2, i) {
  const s = e.limits;
  for (const [o, a, c] of [["vertex", 1, "maxStorageBuffersInVertexStage"], ["fragment", 2, "maxStorageBuffersInFragmentStage"]]) {
    const u = r2.find((p) => p.stage === o);
    if (!u) continue;
    const f = n.filter((p) => {
      var g;
      return ((g = p.bindingLayout) == null ? void 0 : g.kind) === "buffer" && p.bindingLayout.buffer.type !== "uniform" && i(p) & a;
    }), d = s[c] ?? s.maxStorageBuffersPerShaderStage;
    if (d !== void 0 && f.length > d) throw yo(t, o, u.name, f.length, d, f);
  }
}
var wf = ["vertices", "indices", "instances", "firstVertex", "firstIndex", "baseVertex", "firstInstance"];
function qr(e, t) {
  return e.colors.map((n, r2) => {
    var c;
    const i = (c = t.colorStates) == null ? void 0 : c[r2], s = (i == null ? void 0 : i.blendState) ?? t.blendState, o = (i == null ? void 0 : i.writeMask) ?? t.writeMask, a = { format: n };
    return s && (a.blend = s), o !== void 0 && (a.writeMask = o), a;
  });
}
function bf(e, t, n, r2) {
  be(e, "DrawOptions.instances", n.instances), be(e, "DrawOptions.vertices", n.vertices), be(e, "DrawOptions.firstInstance", n.firstInstance), be(e, "DrawCallOptions.instances", r2.instances), we(e, "DrawCallOptions.vertices", r2.vertices), we(e, "DrawCallOptions.indices", r2.indices), we(e, "DrawCallOptions.firstVertex", r2.firstVertex), we(e, "DrawCallOptions.firstIndex", r2.firstIndex), we(e, "DrawCallOptions.baseVertex", r2.baseVertex), be(e, "DrawCallOptions.firstInstance", r2.firstInstance), be(e, "GeometryLike.vertexCount", t == null ? void 0 : t.vertexCount), be(e, "GeometryLike.indexCount", t == null ? void 0 : t.indexCount), be(e, "GeometryLike.instanceCount", t == null ? void 0 : t.instanceCount), we(e, "GeometryLike.firstVertex", t == null ? void 0 : t.firstVertex), we(e, "GeometryLike.firstIndex", t == null ? void 0 : t.firstIndex), we(e, "GeometryLike.baseVertex", t == null ? void 0 : t.baseVertex);
  const i = !!(t != null && t.indexBuffer), o = (t == null ? void 0 : t.geometry) ?? (t && gn in t ? t : void 0), a = r2.firstVertex ?? (t == null ? void 0 : t.firstVertex) ?? 0, c = r2.vertices ?? (t == null ? void 0 : t.vertexCount) ?? n.vertices ?? 3, u = r2.firstIndex ?? (t == null ? void 0 : t.firstIndex) ?? 0, f = r2.indices ?? (t == null ? void 0 : t.indexCount) ?? 0, d = r2.baseVertex ?? (t == null ? void 0 : t.baseVertex) ?? 0;
  if (i) Yr(e, "index", u, f, o == null ? void 0 : o.indexCount);
  else if (r2.indices !== void 0 || r2.firstIndex !== void 0 || r2.baseVertex !== void 0) throw On(`${e}.draw`, "Index range needs an indexed geometry.");
  return i || Yr(e, "vertex", a, c, o == null ? void 0 : o.vertexCount), { instanceCount: r2.instances ?? n.instances ?? (t == null ? void 0 : t.instanceCount) ?? 1, firstInstance: r2.firstInstance ?? n.firstInstance ?? 0, vertexCount: c, firstVertex: a, indexCount: f, firstIndex: u, baseVertex: d };
}
function vs(e) {
  const t = (e == null ? void 0 : e.topology) ?? "triangle-list";
  return (e == null ? void 0 : e.stripIndexFormat) ?? (t.endsWith("strip") ? e == null ? void 0 : e.indexFormat : void 0);
}
function Hr(e, t, n, r2) {
  const i = (e == null ? void 0 : e.topology) ?? "triangle-list", s = vs(e), o = s ? { topology: i, stripIndexFormat: s } : { topology: i };
  return t !== void 0 && (o.cullMode = t), n !== void 0 && (o.frontFace = n), r2 && (o.unclippedDepth = true), o;
}
function Yr(e, t, n, r2, i) {
  if (!(i === void 0 || n + r2 <= i)) throw On(`${e}.draw`, `${t} range [${n}, ${n + r2}) exceeds parent geometry ${t} count ${i}.`);
}
function we(e, t, n) {
  if (!(n === void 0 || Number.isInteger(n) && n >= 0)) throw On(`${e}.draw`, `${t} must be an integer >= 0; received ${String(n)}.`);
}
function be(e, t, n) {
  if (n !== void 0 && !(Number.isInteger(n) && n >= 0)) throw new S({ code: "VGPU-R1-DRAW-COUNT", message: `${t} of '${e}' must be an integer >= 0; received ${String(n)}. Use 0 only when you want to issue a valid draw with no vertices/instances.`, where: `${e}.draw` });
}
function xf(e, t) {
  const n = t.blend === void 0 ? void 0 : $s(e, t.blend), r2 = t.writeMask === void 0 ? void 0 : Ts(e, t.writeMask), i = t.colors === void 0 ? void 0 : yf(e, t.colors), s = i ? `${ii(n, r2)}@${i.map(Vf).join("@")}` : n || r2 !== void 0 ? ii(n, r2) : void 0;
  return { blendState: n, writeMask: r2, colorStates: i, fragmentKey: s };
}
function yf(e, t) {
  if (!Array.isArray(t)) throw hn(e, `colors must be an array; received ${L(t)}.`);
  return t.map((n, r2) => {
    if (n == null) return null;
    if (typeof n != "object" || Array.isArray(n)) throw hn(e, `colors[${r2}] must be null or { blend?, writeMask? }; received ${L(n)}.`);
    const i = n.blend === void 0 ? void 0 : $s(`${e}.colors[${r2}]`, n.blend), s = n.writeMask === void 0 ? void 0 : Ts(`${e}.colors[${r2}]`, n.writeMask);
    return !i && s === void 0 ? null : { blendState: i, writeMask: s };
  });
}
function $s(e, t) {
  if (t === "alpha") return Dt({ src: "src-alpha", dst: "one-minus-src-alpha" }, { src: "one", dst: "one-minus-src-alpha" });
  if (t === "premultiplied") return Dt({ src: "one", dst: "one-minus-src-alpha" }, { src: "one", dst: "one-minus-src-alpha" });
  if (t === "additive") return Dt({ src: "one", dst: "one" }, { src: "one", dst: "one" });
  if (typeof t != "object" || t === null || !Xr(t.color)) throw mr(e, t);
  const n = t.color, r2 = t.alpha;
  if (r2 !== void 0 && !Xr(r2)) throw mr(e, t);
  return Dt(n, r2 ?? n);
}
function Xr(e) {
  return typeof e == "object" && e !== null && typeof e.src == "string" && typeof e.dst == "string";
}
function Dt(e, t) {
  return { color: Zr(e), alpha: Zr(t) };
}
function Zr(e) {
  return { srcFactor: e.src, dstFactor: e.dst, operation: e.op ?? "add" };
}
function Sf(e, t, n) {
  if (t.blendConstant === void 0) return {};
  const r2 = t.blendConstant;
  if (!Array.isArray(r2) || r2.length !== 4 || r2.some((i) => typeof i != "number" || !Number.isFinite(i))) throw gr(e, `received ${L(r2)}; expected [r, g, b, a] finite numbers.`);
  if (!vf(n).some((i) => i && $f(i))) throw gr(e, `no color target's effective blend uses a "constant"/"one-minus-constant" factor (colors[i].blend replaces the top-level blend for that target), so blendConstant would have no effect.`);
  return { blendConstant: { r: r2[0], g: r2[1], b: r2[2], a: r2[3] } };
}
function vf(e) {
  return e.colorStates ? e.colorStates.map((t) => (t == null ? void 0 : t.blendState) ?? e.blendState) : [e.blendState];
}
function $f(e) {
  return [e.color.srcFactor, e.color.dstFactor, e.alpha.srcFactor, e.alpha.dstFactor].some((t) => t === "constant" || t === "one-minus-constant");
}
function Ef(e, t) {
  if (t === void 0) return {};
  if (typeof t != "object" || t === null || Array.isArray(t)) throw Vt(e, `received ${L(t)}; expected { vertex?, fragment? } entry point names.`);
  return t;
}
function If(e, t, n) {
  const r2 = e.entryPoints.find((s) => s.stage === "vertex"), i = e.entryPoints.find((s) => s.stage === "fragment");
  if (!(t === r2 && n === i)) return `en~${(t == null ? void 0 : t.name) ?? ""}~${(n == null ? void 0 : n.name) ?? ""}`;
}
function Tf(e, t, n) {
  const r2 = n.cull === void 0 ? void 0 : Ff(t, n.cull), i = n.frontFace === void 0 ? void 0 : Pf(t, n.frontFace), s = n.unclippedDepth === void 0 ? void 0 : kf(e, t, n.unclippedDepth);
  return { cullMode: r2, frontFace: i, unclippedDepth: s };
}
function kf(e, t, n) {
  if (typeof n != "boolean") throw br(t, `received ${L(n)}; expected a boolean.`);
  if (n) {
    if (!e.features.has("depth-clip-control")) throw br(t, 'the device lacks the "depth-clip-control" feature; request it at init: init({ requiredFeatures: ["depth-clip-control"] }) on an adapter that supports it.');
    return true;
  }
}
function Ff(e, t) {
  if (t === "none" || t === "front" || t === "back") return t;
  throw Io(e, t);
}
function Pf(e, t) {
  if (t === "ccw" || t === "cw") return t;
  throw To(e, t);
}
var Es = { depthWriteEnabled: true, depthCompare: "less-equal" };
var Is = ["never", "less", "equal", "less-equal", "greater", "not-equal", "greater-equal", "always"];
var Jr = -2147483648;
var Qr = 2147483647;
function ei(e, t) {
  if (e.depth) return { format: e.depth, ...t.depthState ?? Es, ...t.stencilState ?? {} };
}
function Cf(e, t, n) {
  var i;
  if (n.depth === void 0) return {};
  const r2 = Af(e, t, n.depth, ((i = n.geometry) == null ? void 0 : i.topology) ?? "triangle-list");
  return { depthState: r2, depthKey: Uf(r2) };
}
function Af(e, t, n, r2) {
  if (n === false) return { depthWriteEnabled: false, depthCompare: "always" };
  if (typeof n != "object" || n === null) throw ue(t, `received ${L(n)}.`);
  if (n.write !== void 0 && typeof n.write != "boolean") throw ue(t, `write must be a boolean; received ${L(n.write)}.`);
  if (n.compare !== void 0 && !Is.includes(n.compare)) throw ue(t, `compare must be a GPUCompareFunction; received ${L(n.compare)}.`);
  if (n.bias !== void 0 && !Number.isInteger(n.bias)) throw ue(t, `bias must be an integer (WebGPU depthBias is i32); received ${L(n.bias)}.`);
  if (n.bias !== void 0 && (n.bias < Jr || n.bias > Qr)) throw ue(t, `bias must fit in the i32 range [${Jr}, ${Qr}] (WebGPU depthBias is i32); received ${L(n.bias)}.`);
  if (n.biasSlopeScale !== void 0 && !Number.isFinite(n.biasSlopeScale)) throw ue(t, `biasSlopeScale must be a finite number; received ${L(n.biasSlopeScale)}.`);
  if (n.biasClamp !== void 0 && !Number.isFinite(n.biasClamp)) throw ue(t, `biasClamp must be a finite number; received ${L(n.biasClamp)}.`);
  const i = n.bias ?? 0, s = n.biasSlopeScale ?? 0, o = n.biasClamp ?? 0;
  if ((i !== 0 || s !== 0 || o !== 0) && !r2.startsWith("triangle")) throw ue(t, `bias, biasSlopeScale, and biasClamp must be 0 for "${r2}" topology.`);
  if (o !== 0 && e.isCompatibilityMode) throw ue(t, `biasClamp must be 0 on a compatibility-mode device; received ${L(n.biasClamp)}.`);
  return { depthWriteEnabled: n.write ?? true, depthCompare: n.compare ?? "less-equal", ...i !== 0 ? { depthBias: i } : {}, ...s !== 0 ? { depthBiasSlopeScale: s } : {}, ...o !== 0 ? { depthBiasClamp: o } : {} };
}
function Uf(e) {
  return `${e.depthWriteEnabled ? 1 : 0}~${e.depthCompare}~${e.depthBias ?? 0}~${e.depthBiasSlopeScale ?? 0}~${e.depthBiasClamp ?? 0}`;
}
var Lf = ["keep", "zero", "replace", "invert", "increment-clamp", "decrement-clamp", "increment-wrap", "decrement-wrap"];
function Rf(e, t) {
  if (t.stencil === void 0) return {};
  const n = t.stencil;
  if (typeof n != "object" || n === null || Array.isArray(n)) throw Ze(e, `received ${L(n)}; expected { front?, back?, readMask?, writeMask?, ref? }.`);
  const r2 = n.front === void 0 ? void 0 : ti(e, "front", n.front), i = n.back === void 0 ? void 0 : ti(e, "back", n.back);
  ln(e, "readMask", n.readMask), ln(e, "writeMask", n.writeMask), ln(e, "ref", n.ref);
  const s = { ...r2 ? { stencilFront: r2 } : {}, ...i ?? r2 ? { stencilBack: i ?? { ...r2 } } : {}, ...n.readMask !== void 0 ? { stencilReadMask: n.readMask } : {}, ...n.writeMask !== void 0 ? { stencilWriteMask: n.writeMask } : {} }, o = s.stencilFront !== void 0 || s.stencilBack !== void 0 || s.stencilReadMask !== void 0 || s.stencilWriteMask !== void 0;
  return !o && n.ref === void 0 ? {} : { ...o ? { stencilState: s, stencilKey: Gf(s) } : {}, ...n.ref !== void 0 ? { stencilRef: n.ref } : {} };
}
function ti(e, t, n) {
  if (typeof n != "object" || n === null || Array.isArray(n)) throw Ze(e, `${t} must be a { compare?, fail?, depthFail?, pass? } object; received ${L(n)}.`);
  if (n.compare !== void 0 && !Is.includes(n.compare)) throw Ze(e, `${t}.compare must be a GPUCompareFunction; received ${L(n.compare)}.`);
  for (const [r2, i] of [["fail", n.fail], ["depthFail", n.depthFail], ["pass", n.pass]]) if (i !== void 0 && !Lf.includes(i)) throw Ze(e, `${t}.${r2} must be a GPUStencilOperation; received ${L(i)}.`);
  return { compare: n.compare ?? "always", failOp: n.fail ?? "keep", depthFailOp: n.depthFail ?? "keep", passOp: n.pass ?? "keep" };
}
function ln(e, t, n) {
  if (n !== void 0 && (typeof n != "number" || !Number.isInteger(n) || n < 0 || n > 4294967295)) throw Ze(e, `${t} must be an integer in [0, 0xFFFFFFFF] (WebGPU GPUStencilValue is u32); received ${L(n)}.`);
}
function Gf(e) {
  return `st~${ni(e.stencilFront)}~${ni(e.stencilBack)}~${e.stencilReadMask ?? 4294967295}~${e.stencilWriteMask ?? 4294967295}`;
}
function ni(e) {
  return e ? `${e.compare},${e.failOp},${e.depthFailOp},${e.passOp}` : "default";
}
function ri(e, t) {
  return { count: e.sampleCount ?? 1, ...t.multisampleState ?? {} };
}
function Df(e, t) {
  if (t.multisample === void 0) return {};
  const n = t.multisample;
  if (typeof n != "object" || n === null || Array.isArray(n)) throw Mt(e, `received ${L(n)}; expected { alphaToCoverage?, mask? }.`);
  if (n.alphaToCoverage !== void 0 && typeof n.alphaToCoverage != "boolean") throw Mt(e, `alphaToCoverage must be a boolean; received ${L(n.alphaToCoverage)}.`);
  if (n.mask !== void 0 && (typeof n.mask != "number" || !Number.isInteger(n.mask) || n.mask < 0 || n.mask > 4294967295)) throw Mt(e, `mask must be an integer in [0, 0xFFFFFFFF] (WebGPU GPUSampleMask is u32); received ${L(n.mask)}.`);
  const r2 = { ...n.alphaToCoverage !== void 0 ? { alphaToCoverageEnabled: n.alphaToCoverage } : {}, ...n.mask !== void 0 ? { mask: n.mask } : {} };
  return r2.alphaToCoverageEnabled === void 0 && r2.mask === void 0 ? {} : { multisampleState: r2, multisampleKey: Mf(r2) };
}
function Mf(e) {
  return `ms~${e.alphaToCoverageEnabled ? 1 : 0}~${e.mask ?? 4294967295}`;
}
function Ts(e, t) {
  if (!Array.isArray(t)) throw wr(e, L(t));
  let n = 0;
  for (const r2 of t) if (r2 === "r") n |= 1;
  else if (r2 === "g") n |= 2;
  else if (r2 === "b") n |= 4;
  else if (r2 === "a") n |= 8;
  else throw wr(e, L(r2));
  return n;
}
function ii(e, t) {
  return `${ks(e)};${t ?? 15}`;
}
function ks(e) {
  if (!e) return "none;none";
  const t = e.color, n = e.alpha;
  return `${t.srcFactor},${t.dstFactor},${t.operation};${n.srcFactor},${n.dstFactor},${n.operation}`;
}
function Vf(e) {
  return e ? `${e.blendState ? ks(e.blendState) : "inherit"};${e.writeMask ?? "inherit"}` : "inherit";
}
function L(e) {
  if (typeof e == "string") return `"${e}"`;
  try {
    return JSON.stringify(e) ?? String(e);
  } catch {
    return String(e);
  }
}
function Nf(e) {
  return (k(e).depthState ?? Es).depthWriteEnabled;
}
function Of(e) {
  const t = k(e), n = t.stencilState;
  if (!n || n.stencilWriteMask === 0) return [];
  const r2 = t.cullMode ?? "none", i = [], s = (o, a) => {
    if (a) for (const [c, u] of [["fail", a.failOp], ["depthFail", a.depthFailOp], ["pass", a.passOp]]) u !== void 0 && u !== "keep" && i.push(`${o}.${c}: "${u}"`);
  };
  return r2 !== "front" && s("front", n.stencilFront), r2 !== "back" && s("back", n.stencilBack), i;
}
function _f(e, t, n, r2 = {}, i) {
  e.encode(t, n, r2, i);
}
function k(e) {
  const t = ps.get(e);
  if (!t) throw new TypeError("Invalid Draw instance");
  return t;
}
function si(e, t, n, r2) {
  var s;
  const i = (async () => {
    await Kn(e.device), N(e.device, `${t}.validation`);
    const o = ct(t, n, r2);
    e.errorSink ? await e.errorSink(o) : console.error(o);
  })();
  return (s = e.trackSettled) == null || s.call(e, i), i;
}
function Bf() {
  const e = /* @__PURE__ */ new Set();
  return { add(t) {
    e.add(t);
  }, delete(t) {
    e.delete(t);
  }, list() {
    return [...e];
  }, markStale(t) {
    for (const n of e) n.markStale(t);
  } };
}
function zf(e, t, n) {
  return e ? Array.isArray(e) ? e : e[t] ?? n : n;
}
function Wf(e, t) {
  const n = k(e);
  return qi(n.reflection.bindings, t, n.visibility).map(jf);
}
function jf(e) {
  return e.buffer ? { ...e, buffer: { ...e.buffer, hasDynamicOffset: true } } : e;
}
function oi(e, t) {
  if (as(e) && !Zu()) throw wi(t);
}
function Pd(e, t, n = {}) {
  if ("geometry" in n) throw O("effect", "effect() never accepts vertex buffers; use draw(gpu, { shader, geometry: geometry(gpu, descriptor) }).");
  const r2 = ke(e, "effect"), i = nr(r2);
  return new Kf(r2.device, hs(t), n, i.binds, void 0, i.pipelines, i.shaderModules, i.pipelineLayouts, (s) => r2.reportError(s), (s) => {
    r2.trackDelivery(s);
  });
}
var Fs = /* @__PURE__ */ new WeakMap();
var Kf = class {
  get gpu() {
    return Ce(this).gpu;
  }
  constructor(t, n, r2 = {}, i, s, o, a, c, u, f) {
    const d = qf(n), p = new ms(t, d, { shader: d, set: r2.set, label: r2.label ?? "effect", blend: r2.blend, writeMask: r2.writeMask }, i, s, o, a, c, u, f);
    Fs.set(this, p);
  }
  set(t) {
    return Ce(this).set(t), this;
  }
  draw(t = {}) {
    Ce(this).draw(sn(t) ? { target: t } : t);
  }
  compile(t) {
    return Ce(this).compile(t).then(() => this);
  }
  compileSync(t) {
    return Ce(this).compileSync(t), this;
  }
  encode(t, n, r2 = {}, i) {
    _f(Ce(this), t, n, r2, i);
  }
  get [Jt]() {
    return Ce(this)[Jt];
  }
};
function Ce(e) {
  const t = Fs.get(e);
  if (!t) throw new TypeError("Invalid Effect instance");
  return t;
}
function qf(e) {
  return Hf(e) ? e : `
struct VgpuFullscreenVertexOut {
  @builtin(position) position: vec4f,
  @location(0) uv: vec2f,
};
@vertex fn vgpu_fullscreen_vs(@builtin(vertex_index) vi: u32) -> VgpuFullscreenVertexOut {
  var pos = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0));
  var uv = array<vec2f, 3>(vec2f(0.0, 1.0), vec2f(2.0, 1.0), vec2f(0.0, -1.0));
  var out: VgpuFullscreenVertexOut;
  out.position = vec4f(pos[vi], 0.0, 1.0);
  out.uv = uv[vi];
  return out;
}
${e}`;
}
function Hf(e) {
  return Gi(e, "effect.wgsl").entryPoints.some((t) => t.stage === "vertex");
}
function Cd(e, t) {
  return Xf(ke(e, "frame")).frame(t);
}
var Yf = nn("frame-runner");
function Xf(e) {
  return e.service(Yf, (t) => {
    const n = os(t);
    return new ad(() => {
      let r2 = () => {
      };
      const i = new Zf(t.device, void 0, (s) => t.reportError(s), (s) => {
        t.trackDelivery(s);
      }, () => r2());
      return r2 = t.own("scheduler", () => i.cancel()), i;
    }, () => n.tick(), (r2) => t.own("scheduler", () => r2.stop()));
  });
}
var _e;
var M;
var he;
var $e;
var Be;
var Ee;
var rt;
var C;
var xt;
var zt;
var Pn;
var Cn;
var An;
var Un;
var Wt;
var Zf = class {
  constructor(t, n, r2, i, s) {
    $(this, C);
    m(this, "device");
    m(this, "defaultTarget");
    m(this, "errorSink");
    m(this, "trackSettled");
    m(this, "releaseLifecycle");
    m(this, "done", Promise.resolve());
    $(this, _e);
    $(this, M, []);
    $(this, he, /* @__PURE__ */ new Set());
    $(this, $e, /* @__PURE__ */ new Set());
    $(this, Be, false);
    $(this, Ee, false);
    $(this, rt, false);
    this.device = t, this.defaultTarget = n, this.errorSink = r2, this.trackSettled = i, this.releaseLifecycle = s, N(t, "Frame.constructor"), F(this, _e, t.gpu.createCommandEncoder({ label: "vgpu.frame" }));
  }
  pass(t, n) {
    var y;
    if (l(this, Ee)) throw vr("Frame.pass");
    N(this.device, "Frame.pass");
    const r2 = sn(t), i = typeof n == "function" ? n : (v) => v.draw(n), s = r2 ? t : t.target ?? this.defaultTarget;
    if (!s) throw pn("Frame.pass");
    if (as(s) && l(this, Be)) throw wi("Frame.pass");
    const o = r2 ? void 0 : t.clear, a = o === false;
    if (a && s.sampleCount === 4) throw ko();
    const c = r2 ? void 0 : t.clearDepth;
    if (c !== void 0) {
      if (typeof c != "number" || !(c >= 0 && c <= 1)) throw xr(c);
      if (a) throw Fo();
      if (!s.depth) throw xr(c, "but the target has no depth attachment, so clearDepth would have no effect.", "Create the target with depth: true (or a depth format), or drop clearDepth.");
    }
    const u = r2 ? void 0 : t.clearStencil;
    if (u !== void 0) {
      if (typeof u != "number" || !Number.isInteger(u) || u < 0 || u > 4294967295) throw yr(`received ${String(u)}; expected an integer in [0, 0xFFFFFFFF] (WebGPU GPUStencilValue).`);
      if (a) throw Po();
      const v = (y = s.depth) == null ? void 0 : y.format;
      if (!Et(v)) throw yr(`received ${String(u)}, but the target's depth format ${v ? `"${v}"` : "(none)"} has no stencil aspect, so clearStencil would have no effect.`);
    }
    const f = r2 ? void 0 : t.depthReadOnly;
    if (f !== void 0 && typeof f != "boolean") throw Ue(`received ${Te(f)}; expected a boolean.`, "Pass depthReadOnly: true to open the pass with a read-only depth attachment, or omit it.");
    if (f) {
      if (!s.depth) throw Ue("is set, but the target has no depth attachment, so there is nothing to make read-only.", "Create the target with depth: true (or a depth format), or drop depthReadOnly.");
      if (s.sampleCount === 4) throw Co();
      if (c !== void 0) throw Ue("cannot be combined with clearDepth; a read-only depth aspect omits its load/store ops and is never cleared.", "Remove clearDepth, or drop depthReadOnly.");
      if (u !== void 0) throw Ue("cannot be combined with clearStencil; a read-only stencil aspect omits its load/store ops and is never cleared.", "Remove clearStencil, or drop depthReadOnly.");
    }
    const d = r2 ? void 0 : id(t.viewport, this.device.gpu.limits, s.size), p = r2 ? void 0 : sd(t.scissor, s.size), g = [];
    let x;
    try {
      const v = r2 || t.timer === void 0 ? void 0 : w(this, C, An).call(this, t.timer, s, g, nd), P = r2 || t.visibility === void 0 ? void 0 : w(this, C, An).call(this, t.visibility, s, g, rd), I = P == null ? void 0 : P.occlusion;
      let G = s.renderPassDescriptor({ clear: o === void 0 || o === true || o === false ? s.clearColor ?? Qn : o, preserve: a, clearDepth: c, clearStencil: u, depthReadOnly: f });
      v != null && v.timestampWrites && (G = { ...G, timestampWrites: v.timestampWrites }), I && (G = { ...G, occlusionQuerySet: I.querySet }), x = l(this, _e).beginRenderPass(G), d && x.setViewport(d.x, d.y, d.width, d.height, d.minDepth, d.maxDepth), p && x.setScissorRect(p[0], p[1], p[2], p[3]), F(this, rt, true);
      try {
        i(new Jf(x, s, l(this, M), f === true, I, this, (X) => {
          if (N(this.device, X), l(this, Ee)) throw vr(X);
        }));
      } finally {
        F(this, rt, false);
      }
    } catch (v) {
      w(this, C, Pn).call(this, g), q(l(this, M)), l(this, M).length = 0, Vi(this.device);
      try {
        x == null || x.end();
      } catch {
      }
      throw v;
    }
    Oi(this.device, x, l(this, M));
  }
  submit() {
    var i, s, o;
    if (l(this, Be) || l(this, Ee)) return;
    N(this.device, "Frame.submit"), F(this, Be, true), (i = this.releaseLifecycle) == null || i.call(this);
    for (const a of w(this, C, Cn).call(this)) a.finalizeFrame(this, l(this, _e));
    let t;
    const n = (s = l(this, M)[0]) == null ? void 0 : s.context;
    n && St(this.device, n);
    try {
      t = l(this, _e).finish();
    } catch (a) {
      w(this, C, xt).call(this, w(this, C, zt).call(this));
      const c = n ? re(this.device) : void 0;
      q(l(this, M)), c && q([c]);
      const u = (c == null ? void 0 : c.context) ?? n;
      if (!u) throw a;
      this.done = w(this, C, Wt).call(this, w(this, C, Un).call(this, u.label, u.group, a));
      return;
    }
    if (n) {
      const a = re(this.device);
      a && (l(this, M)[0] = l(this, M)[0] ? Yt(a, l(this, M)[0]) : a);
    }
    const r2 = (o = l(this, M)[0]) == null ? void 0 : o.context;
    r2 && St(this.device, r2);
    try {
      this.device.gpu.queue.submit([t]);
    } catch (a) {
      w(this, C, xt).call(this, w(this, C, zt).call(this));
      const c = r2 ? re(this.device) : void 0;
      q(l(this, M)), c && q([c]);
      const u = (c == null ? void 0 : c.context) ?? r2;
      if (!u) throw a;
      this.done = w(this, C, Wt).call(this, w(this, C, Un).call(this, u.label, u.group, a));
      return;
    }
    if (r2) {
      const a = re(this.device);
      a && (l(this, M)[0] = l(this, M)[0] ? Yt(a, l(this, M)[0]) : a);
    }
    for (const a of w(this, C, Cn).call(this)) a.frameSubmitted(this);
    w(this, C, xt).call(this, l(this, $e)), this.done = w(this, C, Wt).call(this, Ni(this.device, l(this, M), { errorSink: this.errorSink }));
  }
  cancel() {
    var t;
    if (!l(this, Ee)) {
      if (l(this, Be)) throw jo("Frame.cancel");
      if (l(this, rt)) throw Wo("Frame.cancel");
      F(this, Ee, true), (t = this.releaseLifecycle) == null || t.call(this), w(this, C, xt).call(this, w(this, C, zt).call(this)), l(this, he).clear(), l(this, $e).clear(), q(l(this, M)), l(this, M).length = 0;
    }
  }
};
_e = /* @__PURE__ */ new WeakMap(), M = /* @__PURE__ */ new WeakMap(), he = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ new WeakMap(), Be = /* @__PURE__ */ new WeakMap(), Ee = /* @__PURE__ */ new WeakMap(), rt = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakSet(), xt = function(t) {
  for (const n of [...t]) n.frameAbandoned(this);
}, zt = function() {
  return [...l(this, he), ...l(this, $e)];
}, Pn = function(t) {
  for (const n of [...t]) l(this, he).delete(n), l(this, $e).add(n);
}, Cn = function() {
  return [...l(this, he)].filter((t) => !l(this, $e).has(t));
}, An = function(t, n, r2, i) {
  const s = ff(t);
  if (!s) throw i(t);
  let o;
  try {
    o = s[ls]({ frame: this, device: this.device, target: n });
  } catch (a) {
    throw w(this, C, Pn).call(this, l(this, he)), a;
  }
  return l(this, he).add(o.owner), r2.push(o.owner), o;
}, Un = async function(t, n, r2) {
  await Kn(this.device), N(this.device, "Frame.validation");
  const i = ct(t, n, r2);
  this.errorSink ? await this.errorSink(i) : console.error(i);
}, Wt = function(t) {
  var n;
  return (n = this.trackSettled) == null || n.call(this, t), t;
};
var it;
var Jf = class {
  constructor(t, n, r2, i = false, s, o, a) {
    m(this, "encoder");
    m(this, "target");
    m(this, "validations");
    m(this, "depthReadOnly");
    m(this, "occlusionSource");
    m(this, "frame");
    m(this, "assertFrameOpen");
    $(this, it, false);
    this.encoder = t, this.target = n, this.validations = r2, this.depthReadOnly = i, this.occlusionSource = s, this.frame = o, this.assertFrameOpen = a;
  }
  draw(t, n = {}) {
    var i;
    (i = this.assertFrameOpen) == null || i.call(this, "FramePass.draw");
    const r2 = ed(t);
    this.depthReadOnly && Qf(r2, this.target), r2.encode(this.encoder, this.target, n, (s) => this.validations.push(s));
  }
  occlusion(t, n) {
    var i;
    if ((i = this.assertFrameOpen) == null || i.call(this, "FramePass.occlusion"), !this.occlusionSource) throw Lo();
    if (l(this, it)) throw Ro();
    const r2 = this.occlusionSource.beginQuery(t, this.frame);
    this.encoder.beginOcclusionQuery(r2), F(this, it, true);
    try {
      typeof n == "function" ? n() : this.draw(n);
    } finally {
      F(this, it, false), this.encoder.endOcclusionQuery();
    }
  }
  bundles(...t) {
    var r2;
    if ((r2 = this.assertFrameOpen) == null || r2.call(this, "FramePass.bundles"), this.depthReadOnly) throw Ue("pass cannot replay bundles: bundle records bundles with writable depth/stencil, and WebGPU only executes read-only-recorded bundles in a read-only pass.", "Encode the draws directly with pass.draw(...) inside the depthReadOnly pass.", "FramePass.bundles");
    const n = t.map((i) => uf(i) ?? td());
    for (const i of n) i.assertReplayable(this.target);
    this.encoder.executeBundles(n.map((i) => i.gpu));
  }
};
it = /* @__PURE__ */ new WeakMap();
function Qf(e, t) {
  var n;
  if (e.writesDepth()) throw Ue(`pass cannot encode draw '${e.label}': its depth state writes depth (the default is write: true). Give the draw depth: { write: false } (or depth: false to disable depth testing).`, "Use depth: { write: false } on the draw, or open the pass without depthReadOnly.", "FramePass.draw");
  if (Et((n = t.depth) == null ? void 0 : n.format)) {
    const r2 = e.stencilWritingOps();
    if (r2.length) throw Ue(`pass cannot encode draw '${e.label}': its stencil ops can write (${r2.join(", ")}), and the pass's stencil aspect is read-only too.`, 'Use "keep" for those ops or stencil writeMask: 0, or open the pass without depthReadOnly.', "FramePass.draw");
  }
}
function ed(e) {
  const t = af(e);
  if (!t) throw new TypeError("Invalid Effect instance: pass.draw() expects a Draw or an Effect created by this library.");
  return t;
}
function td() {
  throw new S({ code: "VGPU-R3-BUNDLE-INVALID", message: "p.bundles() expected bundles created by bundle(gpu, { target }, cb).", where: "FramePass.bundles" });
}
function nd(e) {
  return Ao(`FramePassOptions.timer received ${Te(e)}; expected a TimerSpan from timer.span(name).`, 'Create const passTimer = timer(gpu) once, then pass passTimer.span("name") per pass.', "Frame.pass");
}
function rd(e) {
  return Uo(`FramePassOptions.visibility received ${Te(e)}; expected a Visibility from visibility(gpu).`, "Create const vis = visibility(gpu) once, then pass { target, visibility: vis } per pass.", "Frame.pass");
}
function id(e, t, n) {
  if (e === void 0) return;
  if (typeof e != "object" || e === null || Array.isArray(e)) throw fe(`received ${Te(e)}; expected { x?, y?, width, height, minDepth?, maxDepth? }.`);
  const { x: r2 = 0, y: i = 0, width: s, height: o, minDepth: a = 0, maxDepth: c = 1 } = e;
  for (const [p, g] of [["x", r2], ["y", i], ["width", s], ["height", o], ["minDepth", a], ["maxDepth", c]]) if (typeof g != "number" || !Number.isFinite(g)) throw fe(`${p} received ${Te(g)}; expected a finite number.`);
  const u = t.maxTextureDimension2D, f = u * 2, d = `target is ${n[0]}x${n[1]}px, device maxTextureDimension2D is ${u}`;
  if (!(s >= 0 && s <= u)) throw fe(`width ${s} is outside [0, ${u}] (${d}).`);
  if (!(o >= 0 && o <= u)) throw fe(`height ${o} is outside [0, ${u}] (${d}).`);
  if (!(r2 >= -f && r2 + s <= f - 1)) throw fe(`x ${r2} with width ${s} is outside [${-f}, ${f - 1}] (${d}).`);
  if (!(i >= -f && i + o <= f - 1)) throw fe(`y ${i} with height ${o} is outside [${-f}, ${f - 1}] (${d}).`);
  if (!(a >= 0 && a <= 1)) throw fe(`minDepth ${a} is outside [0, 1].`);
  if (!(c >= 0 && c <= 1)) throw fe(`maxDepth ${c} is outside [0, 1].`);
  if (!(a <= c)) throw fe(`minDepth ${a} exceeds maxDepth ${c}.`);
  return { x: r2, y: i, width: s, height: o, minDepth: a, maxDepth: c };
}
function sd(e, t) {
  if (e === void 0) return;
  if (!Array.isArray(e) || e.length !== 4) throw cn(`received ${Te(e)}; expected [x, y, width, height].`);
  const [n, r2, i, s] = e;
  for (const [c, u] of [["x", n], ["y", r2], ["width", i], ["height", s]]) if (typeof u != "number" || !Number.isInteger(u) || u < 0) throw cn(`${c} received ${Te(u)}; expected a non-negative integer.`);
  const [o, a] = t;
  if (n + i > o || r2 + s > a) throw cn(`[${n}, ${r2}, ${i}, ${s}] exceeds the target's current size ${o}x${a}px (x + width <= ${o}, y + height <= ${a}).`);
  return [n, r2, i, s];
}
function Te(e) {
  return typeof e == "string" ? `'${e}'` : Array.isArray(e) ? `[${e.map((t) => Te(t)).join(", ")}]` : typeof e == "object" && e !== null ? "an object" : String(e);
}
function od(e) {
  const t = e == null ? void 0 : e.code;
  return t === "VGPU-DEVICE-DISPOSED" || t === "VGPU-DEVICE-LOST";
}
var st;
var ad = class {
  constructor(t, n, r2) {
    m(this, "createFrame");
    m(this, "advance");
    m(this, "trackLoop");
    $(this, st, false);
    this.createFrame = t, this.advance = n, this.trackLoop = r2;
  }
  frame(t) {
    if (l(this, st) || Xu()) throw bi();
    F(this, st, true), Ju();
    try {
      this.advance();
      const n = this.createFrame();
      if (t) try {
        t(n);
      } finally {
        try {
          n.submit();
        } catch (r2) {
          if (!od(r2)) throw r2;
        }
      }
      return n;
    } finally {
      Qu(), F(this, st, false);
    }
  }
  loop(t, n = {}) {
    var p;
    let r2 = false;
    const i = globalThis.requestAnimationFrame ?? ((g) => setTimeout(() => g(performance.now()), 16)), s = globalThis.cancelAnimationFrame ?? ((g) => clearTimeout(g)), o = n.fps && n.fps > 0 ? 1e3 / n.fps : 0;
    let a, c = 0;
    const u = (g) => {
      r2 || (cd(g, a, o) && (a = g, this.frame(t)), r2 || (c = i(u)));
    };
    c = i(u);
    let f;
    const d = { stop() {
      r2 = true, s(c), f == null || f(), f = void 0;
    } };
    return f = (p = this.trackLoop) == null ? void 0 : p.call(this, d), d;
  }
};
st = /* @__PURE__ */ new WeakMap();
function cd(e, t, n) {
  return t === void 0 || n <= 0 ? true : e - t >= n;
}
function Ad(e, t) {
  return new ud(ke(e, "target").device, t);
}
var Ft;
var ze;
var te;
var pe;
var We;
var me;
var ot;
var _;
var Ps;
var Cs;
var Ln;
var Rn;
var Gn;
var Dn;
var ud = class {
  constructor(t, n) {
    $(this, _);
    m(this, "device");
    m(this, "options");
    m(this, "resourceIdentity", en("render-target"));
    $(this, Ft, new tn());
    $(this, ze, /* @__PURE__ */ new Set());
    $(this, te);
    $(this, pe);
    $(this, We);
    $(this, me);
    $(this, ot);
    this.device = t, this.options = n, Iu(n, t), F(this, ot, n.clearColor === void 0 ? Qn : Xt(n.clearColor, "target.clearColor")), F(this, te, n.size), F(this, pe, w(this, _, Rn).call(this)), F(this, We, this.sampleCount === 4 ? w(this, _, Gn).call(this) : void 0), F(this, me, w(this, _, Dn).call(this));
  }
  get gpu() {
    return this.color.gpu;
  }
  get size() {
    return l(this, te);
  }
  get texelSize() {
    return [1 / l(this, te)[0], 1 / l(this, te)[1]];
  }
  get color() {
    return l(this, pe)[0];
  }
  get colors() {
    return l(this, pe);
  }
  get depth() {
    return l(this, me);
  }
  get format() {
    var t;
    return ((t = _t(this.options)[0]) == null ? void 0 : t.format) ?? "rgba8unorm";
  }
  get clearColor() {
    return er(l(this, ot));
  }
  set clearColor(t) {
    F(this, ot, Xt(t, "target.clearColor"));
  }
  get sampleCount() {
    return Xi(this.options);
  }
  resize(t) {
    Ji(l(this, te), t) || w(this, _, Ps).call(this, t);
  }
  async read() {
    return this.color.read();
  }
  async readFloats() {
    return this.color.readFloats();
  }
  onDestroy(t) {
    return l(this, Ft).onDestroy(this, t);
  }
  onTexturesRecreated(t) {
    return l(this, ze).add(t), () => {
      l(this, ze).delete(t);
    };
  }
  destroy() {
    l(this, Ft).emit(this), l(this, ze).clear(), w(this, _, Ln).call(this);
  }
  renderPassDescriptor(t = {}) {
    const { clear: n = [0, 0, 0, 1], preserve: r2, clearDepth: i, clearStencil: s, depthReadOnly: o } = t;
    return { colorAttachments: l(this, pe).map((a, c) => {
      var u;
      return ku(a, (u = l(this, We)) == null ? void 0 : u[c], n, r2);
    }), depthStencilAttachment: l(this, me) ? Fu(l(this, me), r2, i, s, o) : void 0 };
  }
};
Ft = /* @__PURE__ */ new WeakMap(), ze = /* @__PURE__ */ new WeakMap(), te = /* @__PURE__ */ new WeakMap(), pe = /* @__PURE__ */ new WeakMap(), We = /* @__PURE__ */ new WeakMap(), me = /* @__PURE__ */ new WeakMap(), ot = /* @__PURE__ */ new WeakMap(), _ = /* @__PURE__ */ new WeakSet(), Ps = function(t) {
  w(this, _, Ln).call(this), F(this, te, [t[0], t[1]]), F(this, pe, w(this, _, Rn).call(this)), F(this, We, this.sampleCount === 4 ? w(this, _, Gn).call(this) : void 0), F(this, me, w(this, _, Dn).call(this)), w(this, _, Cs).call(this);
}, Cs = function() {
  for (const t of [...l(this, ze)]) t();
}, Ln = function() {
  var t;
  for (const n of l(this, pe)) n.destroy();
  for (const n of l(this, We) ?? []) n.destroy();
  (t = l(this, me)) == null || t.destroy();
}, Rn = function() {
  return _t(this.options).map((t, n) => this.device.createTexture({ size: l(this, te), format: t.format, usage: ["render_attachment", "texture_binding", "copy_src"], sampleCount: 1, label: this.options.label ? `${this.options.label}.color${n}.resolve` : void 0 }));
}, Gn = function() {
  return _t(this.options).map((t, n) => this.device.createTexture({ size: l(this, te), format: t.format, usage: ["render_attachment"], sampleCount: 4, label: this.options.label ? `${this.options.label}.color${n}` : void 0 }));
}, Dn = function() {
  const t = Yi(this.options);
  return t ? this.device.createTexture({ size: l(this, te), format: t, usage: ["render_attachment", "texture_binding"], sampleCount: this.sampleCount, label: this.options.label ? `${this.options.label}.depth` : void 0 }) : void 0;
};
function Ud(e, t, n = "read-write") {
  const r2 = ke(e, "storage"), i = typeof n == "string" ? { access: n } : n, s = fd(r2.device, t, i.access ?? "read-write", void 0, i.indirect ?? false);
  return yi(r2, s, (o) => o.destroy(), (o) => {
    s.onDestroy(o);
  });
}
var rr = class _rr {
  constructor(t, n) {
    m(this, "size");
    m(this, "access");
    m(this, "buffer");
    this.buffer = t, this.access = n, this.size = t.options.size;
  }
  static create(t, n, r2, i, s = false) {
    const o = s ? ["storage", "copy_dst", "copy_src", "indirect"] : ["storage", "copy_dst", "copy_src"], a = t.createBuffer({ size: n, usage: o, label: i });
    return new _rr(a, r2);
  }
  read() {
    return this.buffer.read(this.size);
  }
  write(t, n = 0) {
    this.buffer.write(dd(t), n);
  }
  get gpu() {
    return this.buffer.gpu;
  }
  get resourceIdentity() {
    return this.buffer.resourceIdentity;
  }
  onDestroy(t) {
    return this.buffer.onDestroy(t);
  }
  destroy() {
    this.buffer.destroy();
  }
};
function fd(e, t, n, r2, i = false) {
  return rr.create(e, t, n, r2, i);
}
function dd(e) {
  if (e instanceof ArrayBuffer || ArrayBuffer.isView(e)) return e;
  throw new TypeError("StorageBuffer.write() requires ArrayBuffer or ArrayBufferView.");
}
function ai(e) {
  return JSON.stringify(ir(e));
}
function Qt(e, t = {}) {
  var n;
  return (n = e.members) != null && n.length ? hd(e.members, t.abbreviated === true) : e.element ? pd(e) : sr(e.type);
}
function ir(e) {
  var t;
  return { type: Xe(e.type), align: e.align, size: e.size, stride: e.stride, members: (t = e.members) == null ? void 0 : t.map(ld), element: e.element ? ir(e.element) : void 0 };
}
function ld(e) {
  return { name: e.name, offset: e.offset, align: e.align, size: e.size, explicitAlign: e.explicitAlign, explicitSize: e.explicitSize, type: Xe(e.type), layout: ir(e.layout) };
}
function Xe(e) {
  switch (e.kind) {
    case "scalar":
      return { scalar: e.name };
    case "vector":
      return { vector: e.width, element: Xe(e.element) };
    case "matrix":
      return { matrix: [e.columns, e.rows], element: Xe(e.element) };
    case "array":
      return { array: Xe(e.element), count: e.count ?? e.countExpression };
    case "atomic":
      return { atomic: Xe(e.element) };
    default:
      return e.kind;
  }
}
function hd(e, t) {
  const n = t ? e.slice(0, 1) : e, r2 = t && e.length > 1 ? ", ..." : "";
  return `{ ${n.map(md).join(", ")}${r2} }`;
}
function pd(e) {
  const t = wd(e.type), n = t === void 0 ? "" : `, ${t}`;
  return `array<${Qt(e.element)}${n}>`;
}
function md(e) {
  return `${e.name}: ${Qt(e.layout)}`;
}
function sr(e) {
  switch (e.kind) {
    case "scalar":
      return e.name;
    case "vector":
      return `vec${e.width}${ci(e.element)}`;
    case "matrix":
      return `mat${e.columns}x${e.rows}${ci(e.element)}`;
    case "array":
      return gd(e);
    case "identifier":
      return e.name;
    case "atomic":
      return `atomic<${sr(e.element)}>`;
    default:
      return e.kind;
  }
}
function gd(e) {
  const t = e.count ?? e.countExpression, n = t === void 0 ? "" : `, ${t}`;
  return `array<${sr(e.element)}${n}>`;
}
function ci(e) {
  return e.kind !== "scalar" ? "" : e.name === "bool" ? "b" : e.name.slice(0, 1);
}
function wd(e) {
  return e.kind === "array" ? e.count ?? e.countExpression : void 0;
}
var at;
var se;
var oe;
var Y;
var As;
var Us;
var Ls;
var Mn;
var Rs;
var bd = class {
  constructor(t, n) {
    $(this, Y);
    m(this, "device");
    $(this, at);
    $(this, se);
    $(this, oe);
    this.device = t, F(this, at, Ds(n));
  }
  get buffer() {
    return l(this, oe);
  }
  get gpu() {
    var t;
    return (t = l(this, oe)) == null ? void 0 : t.gpu;
  }
  get size() {
    var t;
    return (t = l(this, se)) == null ? void 0 : t.layout.size;
  }
  set(t) {
    Gs(l(this, at), t), w(this, Y, Mn).call(this);
  }
  [_n](t, n) {
    xd(t);
    const r2 = w(this, Y, As).call(this, t, n), i = w(this, Y, Rs).call(this);
    return mn(i, `${n}.set`), { resource: { buffer: i.gpu, offset: 0, size: r2.layout.size }, identity: i.resourceIdentity, unsubscribe: (s) => i.onDestroy(s) };
  }
  destroy() {
    var t;
    (t = l(this, oe)) == null || t.destroy();
  }
};
at = /* @__PURE__ */ new WeakMap(), se = /* @__PURE__ */ new WeakMap(), oe = /* @__PURE__ */ new WeakMap(), Y = /* @__PURE__ */ new WeakSet(), As = function(t, n) {
  const r2 = yd(t), i = vd(t.addressSpace);
  return l(this, se) ? (w(this, Y, Ls).call(this, t, r2, i, n), l(this, se)) : w(this, Y, Us).call(this, t, r2, i, n);
}, Us = function(t, n, r2, i) {
  return F(this, se, { layout: n, layoutSignature: ai(n), layoutText: Qt(n), sourceHint: i, bindingName: t.name, addressSpace: r2 }), F(this, oe, this.device.createBuffer({ size: n.size, usage: r2 === "storage" ? ["storage", "copy_dst"] : ["uniform", "copy_dst"], label: `${t.name}.sharedUniform` })), w(this, Y, Mn).call(this), l(this, se);
}, Ls = function(t, n, r2, i) {
  const s = l(this, se);
  if (s.addressSpace !== r2) throw O("uniforms", `shared uniforms '${s.bindingName}' already adopted address space ${s.addressSpace}; '${t.name}' uses ${r2}.`);
  if (ai(n) !== s.layoutSignature) throw Ko({ bindingName: s.bindingName, adoptedLayout: s.layoutText, adoptedSource: s.sourceHint, incomingLayout: Qt(n, { abbreviated: true }), incomingSource: i });
}, Mn = function() {
  !l(this, se) || !l(this, oe) || l(this, oe).write(ji(l(this, se).layout, l(this, at)), 0);
}, Rs = function() {
  if (!l(this, oe)) throw O("uniforms", "shared uniforms have not adopted a layout yet.");
  return l(this, oe);
};
function Ld(e, t) {
  const n = ke(e, "uniforms");
  return yi(n, new bd(n.device, t), (r2) => r2.destroy());
}
function xd(e) {
  var t, n;
  if (((t = e.bindingLayout) == null ? void 0 : t.kind) !== "buffer") throw O("uniforms", `Binding '${e.name}' does not accept shared uniforms; the shader reflected ${((n = e.bindingLayout) == null ? void 0 : n.kind) ?? "none"}.`);
}
function yd(e) {
  if (!e.layout) throw O("uniforms", `Binding '${e.name}' does not expose a host-shareable layout.`);
  if (e.layout.size === void 0) throw O("uniforms", `Binding '${e.name}' has a runtime-sized layout; it cannot be shared.`);
  return e.layout;
}
function Gs(e, t) {
  for (const [n, r2] of Object.entries(t)) Ms(n) || (Vn(r2) && Vn(e[n]) ? Gs(e[n], r2) : e[n] = or(r2));
}
function Ds(e) {
  const t = {};
  for (const [n, r2] of Object.entries(e)) Ms(n) || (t[n] = or(r2));
  return t;
}
function Ms(e) {
  return e === "__proto__" || e === "constructor" || e === "prototype";
}
function or(e) {
  return Array.isArray(e) ? e.map(or) : ArrayBuffer.isView(e) ? Sd(e) : Vn(e) ? Ds(e) : e;
}
function Sd(e) {
  return e instanceof Float32Array || e instanceof Uint32Array || e instanceof Int32Array ? e.slice() : e;
}
function Vn(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e) && !ArrayBuffer.isView(e);
}
function vd(e) {
  return e === "storage" ? "storage" : "uniform";
}
function Rd(e) {
  return Qo("browser", e);
}

// ../../Users/apro7/.gemini/antigravity/brain/40f95756-c90a-47c5-b197-cc74f344bcf2/scratch/ShapeWaves-component.js
var It2 = { mixed: 0, squares: 1, circles: 2, triangles: 3 };
var qt2 = 2;
var Dt2 = 1024;
var Ct2 = 32;
var Ft2 = 0.1;
var De2 = 1 / 60;
var Bt2 = 0.42;
var $t2 = 0.94;
var Ht2 = 0.972;
var Wt2 = 0.01;
var ht2 = 0.2;
var Fe2 = 0.3;
var yt2 = 0.16;
var ne2 = 1 + Fe2 + yt2 + ht2;
var Ot2 = `
fn mod289v3(x: vec3f) -> vec3f { return x - floor(x * (1.0 / 289.0)) * 289.0; }
fn mod289v4(x: vec4f) -> vec4f { return x - floor(x * (1.0 / 289.0)) * 289.0; }
fn permute(x: vec4f) -> vec4f { return mod289v4(((x * 34.0) + 10.0) * x); }
fn taylorInvSqrt(r: vec4f) -> vec4f { return 1.79284291400159 - 0.85373472095314 * r; }
fn fadeCurve(t: vec3f) -> vec3f { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }

fn cnoise(P: vec3f) -> f32 {
  var Pi0 = floor(P);
  var Pi1 = Pi0 + vec3f(1.0);
  Pi0 = mod289v3(Pi0);
  Pi1 = mod289v3(Pi1);
  let Pf0 = fract(P);
  let Pf1 = Pf0 - vec3f(1.0);
  let ix = vec4f(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  let iy = vec4f(Pi0.yy, Pi1.yy);
  let iz0 = Pi0.zzzz;
  let iz1 = Pi1.zzzz;

  let ixy = permute(permute(ix) + iy);
  let ixy0 = permute(ixy + iz0);
  let ixy1 = permute(ixy + iz1);

  var gx0 = ixy0 * (1.0 / 7.0);
  var gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  let gz0 = vec4f(0.5) - abs(gx0) - abs(gy0);
  let sz0 = step(gz0, vec4f(0.0));
  gx0 -= sz0 * (step(vec4f(0.0), gx0) - 0.5);
  gy0 -= sz0 * (step(vec4f(0.0), gy0) - 0.5);

  var gx1 = ixy1 * (1.0 / 7.0);
  var gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  let gz1 = vec4f(0.5) - abs(gx1) - abs(gy1);
  let sz1 = step(gz1, vec4f(0.0));
  gx1 -= sz1 * (step(vec4f(0.0), gx1) - 0.5);
  gy1 -= sz1 * (step(vec4f(0.0), gy1) - 0.5);

  var g000 = vec3f(gx0.x, gy0.x, gz0.x);
  var g100 = vec3f(gx0.y, gy0.y, gz0.y);
  var g010 = vec3f(gx0.z, gy0.z, gz0.z);
  var g110 = vec3f(gx0.w, gy0.w, gz0.w);
  var g001 = vec3f(gx1.x, gy1.x, gz1.x);
  var g101 = vec3f(gx1.y, gy1.y, gz1.y);
  var g011 = vec3f(gx1.z, gy1.z, gz1.z);
  var g111 = vec3f(gx1.w, gy1.w, gz1.w);

  let norm0 = taylorInvSqrt(vec4f(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  let norm1 = taylorInvSqrt(vec4f(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  let n000 = dot(g000, Pf0);
  let n100 = dot(g100, vec3f(Pf1.x, Pf0.yz));
  let n010 = dot(g010, vec3f(Pf0.x, Pf1.y, Pf0.z));
  let n110 = dot(g110, vec3f(Pf1.xy, Pf0.z));
  let n001 = dot(g001, vec3f(Pf0.xy, Pf1.z));
  let n101 = dot(g101, vec3f(Pf1.x, Pf0.y, Pf1.z));
  let n011 = dot(g011, vec3f(Pf0.x, Pf1.yz));
  let n111 = dot(g111, Pf1);

  let f = fadeCurve(Pf0);
  let nz = mix(vec4f(n000, n100, n010, n110), vec4f(n001, n101, n011, n111), f.z);
  let ny = mix(nz.xy, nz.zw, f.y);
  return 2.2 * mix(ny.x, ny.y, f.x);
}

fn fbm(p: vec3f) -> f32 {
  var total = 0.0;
  var amplitude = 1.0;
  var weight = 0.0;
  var frequency = 1.0;
  for (var i = 0; i < 2; i++) {
    total += amplitude * cnoise(p * frequency);
    weight += amplitude;
    amplitude *= 0.5;
    frequency *= 2.0;
  }
  return total / weight;
}
`;
var Nt2 = `
struct Params {
  resolution: vec4f,
  placement: vec4f,
  grid: vec4f,
  field: vec4f,
  motion: vec4f,
  color: vec4f,
  hover: vec4f,
  background: vec4f,
}
@group(0) @binding(0) var<uniform> params: Params;
@group(0) @binding(1) var maskTexture: texture_2d<f32>;
@group(0) @binding(2) var maskSampler: sampler;
@group(0) @binding(3) var<storage, read> charges: array<f32>;

const SEED = vec2f(12.9898, 78.233);
const GLOW_THRESHOLD = 0.6;
${Ot2}

fn sdIsoscelesTriangle(point: vec2f, q: vec2f) -> f32 {
  let p = vec2f(abs(point.x), point.y);
  let a = p - q * clamp(dot(p, q) / dot(q, q), 0.0, 1.0);
  let b = p - q * vec2f(clamp(p.x / q.x, 0.0, 1.0), 1.0);
  let s = -sign(q.y);
  let d = min(vec2f(dot(a, a), s * (p.x * q.y - p.y * q.x)), vec2f(dot(b, b), s * (p.y - q.y)));
  return -sqrt(d.x) * sign(d.y);
}

fn shapeDistance(p: vec2f, shape: i32, c: f32) -> f32 {
  if (shape == 0) { return max(abs(p.x), abs(p.y)) - c; }
  if (shape == 1) { return length(p) - c; }
  return sdIsoscelesTriangle(vec2f(p.x, p.y + c), vec2f(c, 2.0 * c));
}

fn hash21(p: vec2f) -> f32 {
  return fract(sin(dot(p, vec2f(127.1, 311.7))) * 43758.5453);
}

@fragment fn fs_main(@location(0) uv: vec2f) -> @location(0) vec4f {
  let resolution = params.resolution.xy;
  let cellPx = params.grid.x;
  let dotSize = params.grid.y;
  let mode = i32(params.grid.z + 0.5);
  let cols = i32(params.grid.w + 0.5);
  let background = params.background.rgb;
  let toSurface = params.hover.w < 0.5;

  let pixel = uv * resolution;
  let origin = params.placement.xy;
  let rows = i32(params.placement.z + 0.5);
  let cell = floor((pixel - origin) / cellPx);
  if (cell.y < 0.0 || i32(cell.y) >= rows || cell.x < 0.0 || i32(cell.x) >= cols) {
    return vec4f(background, select(0.0, 1.0, toSurface));
  }
  let center = origin + (cell + 0.5) * cellPx;
  let local = (pixel - center) / (cellPx * 0.5);
  let cellUv = center / resolution;

  if (params.motion.z > 0.5 && textureSampleLevel(maskTexture, maskSampler, cellUv, 0.0).r > 0.5) {
    return vec4f(background, select(0.0, 1.0, toSurface));
  }

  var level = 1.0;
  let fade = params.motion.w;
  if (fade > 0.0) {
    let q = abs(uv * 2.0 - 1.0);
    let radius = pow(pow(q.x, 2.5) + pow(q.y, 2.5), 1.0 / 2.5) / pow(2.0, 1.0 / 2.5);
    level = 1.0 - smoothstep(max(0.0, 1.0 - fade * 2.2), 1.0, radius);
  }
  let noise = fbm(vec3f((center + params.motion.xy) / params.field.x + SEED, params.field.w));
  let tone = clamp((noise * 0.5 + 0.5 - params.field.y) * params.field.z + 0.5, 0.0, 1.0);
  let band = i32(min(tone, 0.999999) * 3.0);

  var charge = 0.0;
  let index = i32(cell.y) * cols + i32(cell.x);
  if (index >= 0 && index < i32(arrayLength(&charges))) { charge = charges[index]; }
  let stepped = (band + i32(clamp(charge, 0.0, 0.999) * 3.0)) % 3;

  var shape = 2 - stepped;
  var size = dotSize;
  if (mode != 0) {
    shape = mode - 1;
    size = dotSize * mix(0.45, 1.0, f32(stepped) / 2.0);
  }
  let introProgress = params.placement.w;
  var front = 0.0;
  if (introProgress < ${ne2.toFixed(2)}) {
    let radial = length((center - resolution * 0.5) / (resolution * 0.5)) * 0.70710678;
    let warp = cnoise(vec3f(cellUv * vec2f(3.2, 2.4) + SEED, 4.7)) * ${Fe2.toFixed(2)};
    let jitter = hash21(cell) * ${yt2.toFixed(2)};
    let spread = radial + warp + jitter + ${Fe2.toFixed(2)};
    let band = ${ht2.toFixed(2)} * (0.6 + 0.8 * hash21(cell + vec2f(17.0, 9.0)));
    let t = clamp((introProgress - spread) / band, 0.0, 1.0);
    if (t <= 0.0) {
      return vec4f(background, select(0.0, 1.0, toSurface));
    }
    let back = t - 1.0;
    size = max(size * (1.0 + 2.70158 * back * back * back + 1.70158 * back * back), 0.02);
    front = 1.0 - smoothstep(0.0, 1.0, abs(introProgress - spread) / band);
  }
  let aa = 2.0 / cellPx;
  let coverage = smoothstep(aa, -aa, shapeDistance(local, shape, size));

  let tint = mix(params.color.rgb, params.hover.rgb, max(smoothstep(0.15, 0.85, charge), front * 0.35));

  let rgb = mix(background, tint, coverage * level);
  if (toSurface) { return vec4f(rgb, 1.0); }
  let luminance = dot(tint * level, vec3f(0.2126, 0.7152, 0.0722));
  let glow = max(0.0, (luminance - GLOW_THRESHOLD) / (1.0 - GLOW_THRESHOLD)) * coverage;
  return vec4f(rgb, glow);
}
`;
var vt2 = `
struct Blur { direction: vec4f }
@group(0) @binding(0) var<uniform> blur: Blur;
@group(0) @binding(1) var sourceTexture: texture_2d<f32>;
@group(0) @binding(2) var sourceSampler: sampler;

@fragment fn fs_main(@location(0) uv: vec2f) -> @location(0) vec4f {
  let sigma = blur.direction.z;
  let radius = i32(ceil(3.0 * sigma));
  var sum = vec3f(0.0);
  var weight = 0.0;
  for (var i = -radius; i <= radius; i++) {
    let offset = f32(i);
    let w = exp(-(offset * offset) / (2.0 * sigma * sigma));
    let sample = textureSampleLevel(sourceTexture, sourceSampler, uv + offset * blur.direction.xy, 0.0);
    sum += select(sample.rgb, sample.rgb * sample.a, blur.direction.w > 0.5) * w;
    weight += w;
  }
  return vec4f(sum / weight, 1.0);
}
`;
var jt2 = `
struct Composite { strength: vec4f }
@group(0) @binding(0) var<uniform> composite: Composite;
@group(0) @binding(1) var sceneTexture: texture_2d<f32>;
@group(0) @binding(2) var glowTexture: texture_2d<f32>;
@group(0) @binding(3) var linearSampler: sampler;

@fragment fn fs_main(@location(0) uv: vec2f) -> @location(0) vec4f {
  let scene = textureSampleLevel(sceneTexture, linearSampler, uv, 0.0).rgb;
  let glow = textureSampleLevel(glowTexture, linearSampler, uv, 0.0).rgb;
  return vec4f(scene + glow * composite.strength.x, 1.0);
}
`;
var Ce2 = (G, ae2) => {
  const se2 = typeof G == "string" ? G.trim() : "";
  let B = (/^#?([\da-f]{3}|[\da-f]{6})$/i.exec(se2) || /^#?([\da-f]{6})$/i.exec(ae2))[1];
  return B.length === 3 && (B = B.replace(/./g, (L2) => L2 + L2)), [0, 2, 4].map((L2) => parseInt(B.slice(L2, L2 + 2), 16) / 255);
};
function Vt2({ text: G = "", fontFamily: ae2 = 'Geist, "Geist Sans", system-ui, sans-serif', fontWeight: se2 = 500, textSize: Se2 = 0.6, shapes: B = "mixed", cellSize: L2 = 10, dotSize: Be2 = 0.75, color: $e2 = "#929292", hoverColor: He2 = "#ffffff", backgroundColor: Pe = "#000000", speed: We2 = 1, scale: Oe2 = 1, contrast: Ne2 = 1, brightness: je2 = 0.4, flow: Ue2 = 0, direction: Xe2 = 0, fade: Ve2 = 0.25, interactive: Ye2 = true, splashRadius: Ge2 = 40, splashStrength: Je2 = 0.4, glow: Ze2 = 0.35, intro: Qe2 = true, introDuration: Ke2 = 1.6, introKey: Me2 = 0, paused: et2 = false, onError: tt2, className: wt2 = "" }) {
  const rt2 = r.useRef(null), nt2 = r.useRef(null), [zt2, at2] = r.useState(false), m2 = r.useRef(null), oe2 = r.useRef(() => {
  }), ce = r.useRef(() => {
  }), ie2 = r.useRef(tt2);
  m2.current = { text: String(G ?? ""), fontFamily: ae2, fontWeight: se2, textSize: Se2, shapes: B, cellSize: Math.max(2, L2), dotSize: Be2, color: $e2, hoverColor: He2, backgroundColor: Pe, speed: We2, scale: Math.max(0.05, Oe2), contrast: Ne2, brightness: je2, flow: Ue2, direction: Xe2, fade: Ve2, interactive: Ye2, splashRadius: Ge2, splashStrength: Je2, glow: Ze2, intro: Qe2, introDuration: Math.max(0.1, Ke2), introKey: Me2, paused: et2 }, ie2.current = tt2;
  const bt2 = [B, L2, Be2, $e2, He2, Pe, We2, Oe2, Ne2, je2, Ue2, Xe2, Ve2, Ye2, Ge2, Je2, Ze2, Qe2, Ke2, et2].join("|"), St2 = [G, ae2, se2, Se2].join("|"), Ee2 = r.useRef(() => {
  });
  return r.useEffect(() => {
    oe2.current();
  }, [bt2]), r.useEffect(() => {
    ce.current();
  }, [St2]), r.useEffect(() => {
    Me2 && Ee2.current();
  }, [Me2]), r.useEffect(() => {
    const le2 = rt2.current, fe2 = nt2.current;
    if (!le2 || !fe2) return;
    let v = false, E = false, r2, $2, S2, R2 = 0, ge2 = 0, st2 = 0, J = [0, 0], I = 1, ue2 = true, ot2 = false, f = 1, h = 1, T = 10, H2 = [0, 0], P = new Float32Array(1), d = new Float32Array(1), W2 = new Float32Array(1), me2 = 0, ct2 = 0, Z = ne2, de2 = false, O2 = false, N2 = null, j3, q2, D, C2 = () => {
    };
    const k2 = { x: 0, y: 0, at: 0, inside: false }, Q2 = window.matchMedia("(prefers-reduced-motion: reduce)"), pe2 = document.createElement("canvas"), M2 = pe2.getContext("2d"), xe2 = () => C2(), Re2 = () => {
      N2 = null;
    }, Pt2 = (a, p, s) => {
      const g = m2.current, y = Math.max(0.5, g.splashRadius * I / T * 0.5), _2 = Math.ceil(y * 2.5), w2 = (a * I - H2[0]) / T - 0.5, z = (p * I - H2[1]) / T - 0.5, K = Math.max(0, Math.floor(z - _2)), V2 = Math.min(h - 1, Math.ceil(z + _2)), Y2 = Math.max(0, Math.floor(w2 - _2)), ve2 = Math.min(f - 1, Math.ceil(w2 + _2));
      for (let U2 = K; U2 <= V2; U2++) {
        const ee2 = U2 - z;
        for (let X = Y2; X <= ve2; X++) {
          const te2 = X - w2, he2 = s * Math.exp(-(te2 * te2 + ee2 * ee2) / (2 * y * y)), re2 = U2 * f + X;
          d[re2] = Math.min(1.2, d[re2] + he2);
        }
      }
      O2 = true;
    }, it2 = (a) => {
      if (!m2.current.interactive) return;
      N2 || (N2 = le2.getBoundingClientRect());
      const p = performance.now(), s = a.clientX - N2.left, g = a.clientY - N2.top, y = s >= 0 && g >= 0 && s <= N2.width && g <= N2.height;
      if (y) {
        const _2 = k2.inside ? Math.max(8, p - k2.at) : 16, z = (k2.inside ? Math.hypot(s - k2.x, g - k2.y) : 0) / _2 * 1e3;
        Pt2(s, g, Math.min(1, 0.22 + z * 6e-4) * m2.current.splashStrength), C2();
      }
      k2.x = s, k2.y = g, k2.at = p, k2.inside = y;
    }, Te2 = (a) => {
      var s;
      if (v || E) return;
      E = true, R2 && cancelAnimationFrame(R2), R2 = 0, q2 == null || q2.disconnect(), D == null || D.disconnect(), j3 == null || j3(), oe2.current = () => {
      }, ce.current = () => {
      };
      const p = r2;
      r2 = void 0, p == null || p.dispose(), at2(false), (s = ie2.current) == null || s.call(ie2, a instanceof Error ? a : new Error(String(a)));
    }, lt = () => (I = Math.min(window.devicePixelRatio || 1, qt2), [Math.max(1, Math.round(fe2.clientWidth * I)), Math.max(1, Math.round(fe2.clientHeight * I))]);
    return (async () => {
      try {
        if (r2 = await Rd({ powerPreference: "low-power" }), v) return r2.dispose();
        j3 = r2.onError(Te2);
        const a = lt(), p = navigator.gpu.getPreferredCanvasFormat(), s = Td(r2, fe2, { dpr: I, size: a, autoResize: false, format: p }), g = Ld(r2, { resolution: [a[0], a[1], 1 / a[0], 1 / a[1]], placement: [0, 0, 1, 0], grid: [10, 0.75, 0, 1], field: [320, 0.5, 2.8, 0], motion: [0, 0, 0, 0.25], color: [0.573, 0.573, 0.573, 1], hover: [1, 1, 1, 0], background: [0, 0, 0, 1] }), y = kd(r2, { minFilter: "linear", magFilter: "linear", addressModeU: "clamp-to-edge", addressModeV: "clamp-to-edge" }), _2 = (e, t) => r2.device.createTexture({ size: [e, t], format: "rgba8unorm", usage: ["texture_binding", "copy_dst", "render_attachment"], label: "shape-waves-mask" });
        $2 = _2(1, 1), S2 = Ud(r2, 4, "read"), S2.write(P);
        const w2 = Pd(r2, Nt2, { label: "shape-waves-scene", set: { params: g, maskTexture: $2, maskSampler: y, charges: S2 } }), z = Ad(r2, { size: a, format: "rgba8unorm", label: "shape-waves-scene" }), K = (e) => [Math.max(1, Math.ceil(e[0] / 2)), Math.max(1, Math.ceil(e[1] / 2))], V2 = Ad(r2, { size: K(a), format: "rgba8unorm", label: "shape-waves-glow-a" }), Y2 = Ad(r2, { size: K(a), format: "rgba8unorm", label: "shape-waves-glow-b" }), ve2 = Ld(r2, { direction: [0, 0, 4, 1] }), U2 = Ld(r2, { direction: [0, 0, 4, 0] }), ee2 = Pd(r2, vt2, { label: "shape-waves-glow-x", set: { blur: ve2, sourceTexture: z, sourceSampler: y } }), X = Pd(r2, vt2, { label: "shape-waves-glow-y", set: { blur: U2, sourceTexture: V2, sourceSampler: y } }), te2 = Ld(r2, { strength: [2, 0, 0, 0] }), he2 = Pd(r2, jt2, { label: "shape-waves-composite", set: { composite: te2, sceneTexture: z, glowTexture: Y2, linearSampler: y } });
        if (await Promise.all([w2.compile({ colors: [p] }), w2.compile(z), ee2.compile(V2), X.compile(Y2), he2.compile({ colors: [p] })]), v) return;
        const re2 = () => m2.current.glow > 0;
        let ft2 = false;
        const Mt2 = () => {
          const e = m2.current, [t, c] = s.size, i = Math.max(1, Math.round(t / (e.cellSize * I)));
          T = t / i;
          const n = Math.max(1, Math.floor(c / T));
          if (H2 = [0, (c - n * T) / 2], i === f && n === h && P.length === f * h) return;
          f = i, h = n, P = new Float32Array(f * h), d = new Float32Array(f * h), W2 = new Float32Array(f * h), O2 = false;
          const b = Ud(r2, P.byteLength, "read");
          b.write(P), w2.set({ charges: b }), S2.destroy(), S2 = b;
        }, Et2 = () => {
          const e = f - 1, t = h - 1;
          let c = 0;
          for (let n = 0; n < h; n++) {
            const b = (n === 0 ? n : n - 1) * f, o = (n === t ? n : n + 1) * f, u = n * f;
            for (let l2 = 0; l2 < f; l2++) {
              const A2 = u + l2, ye2 = u + (l2 === 0 ? l2 : l2 - 1), we2 = u + (l2 === e ? l2 : l2 + 1), F2 = d[A2], Ae2 = d[ye2] + d[we2] + d[b + l2] + d[o + l2] - 4 * F2, Le2 = (F2 - W2[A2]) * $t2, dt2 = (F2 + Le2 + Bt2 * Ae2) * Ht2;
              W2[A2] = dt2;
              const Ie2 = Math.min(1, Math.max(0, dt2));
              P[A2] = Ie2, Ie2 > c && (c = Ie2);
            }
          }
          const i = d;
          return d = W2, W2 = i, c;
        }, Rt2 = (e) => {
          if (!O2) return false;
          me2 = Math.min(me2 + e, De2 * 4);
          let t = 1;
          for (; me2 >= De2; ) me2 -= De2, t = Et2();
          return t < Wt2 && (d.fill(0), W2.fill(0), P.fill(0), O2 = false), S2.write(P), O2;
        }, Tt2 = () => {
          const e = m2.current;
          return ue2 && !document.hidden && !e.paused && e.speed > 0 && !Q2.matches;
        }, gt2 = (e) => {
          if (R2 = 0, v || E) return;
          const t = m2.current, c = ge2 ? Math.min(0.1, (e - ge2) / 1e3) : 0;
          ge2 = e;
          const i = Tt2();
          if (i) {
            st2 += c * Ft2 * t.speed;
            const o = t.direction * Math.PI / 180, u = t.flow * T * c;
            J = [J[0] + Math.cos(o) * u, J[1] + Math.sin(o) * u];
          }
          const n = ue2 && !document.hidden && Rt2(c);
          de2 && (de2 = false, ct2 = e, Z = 0);
          const b = Z < ne2;
          b && (Z = Math.min(ne2, (e - ct2) / 1e3 / t.introDuration * ne2)), g.set({ placement: [H2[0], H2[1], h, Z] }), g.set({ field: [Ct2 * T * t.scale, 0.5 - (t.brightness - 0.5) * 0.4, 2.8 * t.contrast, st2] }), g.set({ motion: [J[0], J[1], t.text.trim() ? 1 : 0, t.fade] });
          try {
            Cd(r2, (o) => {
              if (!re2()) {
                o.pass(s, w2);
                return;
              }
              o.pass(z, w2), o.pass(V2, ee2), o.pass(Y2, X), o.pass(s, he2);
            });
          } catch (o) {
            Te2(o);
            return;
          }
          ot2 || (ot2 = true, at2(true)), i || n || b ? R2 = requestAnimationFrame(gt2) : ge2 = 0;
        };
        C2 = () => {
          v || E || R2 || (R2 = requestAnimationFrame(gt2));
        };
        const ke2 = () => {
          const e = m2.current, t = e.text.trim(), [c, i] = s.size, n = t.length > 0, b = n ? Math.min(1, Dt2 / Math.max(c, i)) : 0, o = n ? Math.max(1, Math.round(c * b)) : 1, u = n ? Math.max(1, Math.round(i * b)) : 1;
          if (pe2.width = o, pe2.height = u, M2.fillStyle = "#000", M2.fillRect(0, 0, o, u), n) {
            let A2 = Math.max(1, e.textSize * u);
            M2.font = `${e.fontWeight} ${A2}px ${e.fontFamily}`;
            const ye2 = M2.measureText(t).width, we2 = o * 0.9;
            ye2 > we2 && (A2 = Math.max(1, A2 * we2 / ye2), M2.font = `${e.fontWeight} ${A2}px ${e.fontFamily}`), M2.textAlign = "center", M2.textBaseline = "alphabetic";
            const F2 = M2.measureText(t), Ae2 = (o + F2.actualBoundingBoxLeft - F2.actualBoundingBoxRight) / 2, Le2 = (u + F2.actualBoundingBoxAscent - F2.actualBoundingBoxDescent) / 2;
            M2.fillStyle = "#fff", M2.fillText(t, Ae2, Le2);
          }
          const l2 = _2(o, u);
          r2.gpu.queue.copyExternalImageToTexture({ source: pe2 }, { texture: l2.gpu }, [o, u]), w2.set({ maskTexture: l2 }), $2.destroy(), $2 = l2;
        }, _e2 = () => {
          if (v || E) return;
          const e = m2.current;
          Mt2(), g.set({ placement: [H2[0], H2[1], h, Z], grid: [T, Math.min(1, Math.max(0.1, e.dotSize)), It2[e.shapes] ?? 0, f], color: [...Ce2(e.color, "#929292"), 1], hover: [...Ce2(e.hoverColor, "#ffffff"), re2() ? 1 : 0], background: [...Ce2(e.backgroundColor, "#000000"), 1] }), te2.set({ strength: [2 * e.glow, 0, 0, 0] }), e.intro !== ft2 && (ft2 = e.intro, e.intro && !Q2.matches && (de2 = true)), !e.interactive && O2 && (d.fill(0), W2.fill(0), P.fill(0), O2 = false, S2.write(P)), C2();
        }, ut2 = () => {
          var t;
          if (v || E) return;
          ke2(), _e2();
          const e = m2.current;
          !e.text.trim() || !((t = document.fonts) != null && t.load) || document.fonts.load(`${e.fontWeight} 32px ${e.fontFamily}`).then(() => {
            v || E || (ke2(), C2());
          }).catch(() => {
          });
        }, mt2 = () => {
          if (v || E) return;
          Re2();
          const e = lt();
          (e[0] !== s.size[0] || e[1] !== s.size[1]) && s.resize(e);
          const [t, c] = s.size;
          z.resize([t, c]);
          const i = K([t, c]);
          V2.resize(i), Y2.resize(i), ve2.set({ direction: [1 / i[0], 0, 4, 1] }), U2.set({ direction: [0, 1 / i[1], 4, 0] }), g.set({ resolution: [t, c, 1 / t, 1 / c] }), ke2(), _e2();
        };
        oe2.current = _e2, ce.current = ut2, Ee2.current = () => {
          v || E || !m2.current.intro || Q2.matches || (de2 = true, C2());
        }, q2 = new ResizeObserver(mt2), q2.observe(le2), D = new IntersectionObserver((e) => {
          ue2 = e.some((t) => t.isIntersecting), ue2 && C2();
        }, { threshold: 0 }), D.observe(le2), document.addEventListener("visibilitychange", xe2), Q2.addEventListener("change", xe2), window.addEventListener("pointermove", it2, { passive: true }), window.addEventListener("scroll", Re2, { capture: true, passive: true }), mt2(), ut2();
      } catch (a) {
        Te2(a);
      }
    })(), () => {
      v = true, C2 = () => {
      }, oe2.current = () => {
      }, ce.current = () => {
      }, Ee2.current = () => {
      }, document.removeEventListener("visibilitychange", xe2), Q2.removeEventListener("change", xe2), window.removeEventListener("pointermove", it2), window.removeEventListener("scroll", Re2, { capture: true }), q2 == null || q2.disconnect(), D == null || D.disconnect(), j3 == null || j3(), R2 && cancelAnimationFrame(R2), $2 == null || $2.destroy(), S2 == null || S2.destroy(), r2 == null || r2.dispose();
    };
  }, []), j.jsx("div", { ref: rt2, className: `shape-waves ${wt2}`, "data-ready": zt2, style: { backgroundColor: Pe }, "aria-hidden": "true", children: j.jsx("canvas", { ref: nt2, className: "shape-waves__canvas" }) });
}
const ShapeWavesComponent: React.FC<any> = Vt2;

export default ShapeWavesComponent;

