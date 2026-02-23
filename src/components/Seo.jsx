import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function normalizeBase(base) {
  if (!base) return "/";
  return base.endsWith("/") ? base : `${base}/`;
}

function joinBaseAndPath(base, path) {
  // base sempre termina com "/"
  // path geralmente começa com "/"
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}

function isAbsoluteUrl(url) {
  return /^https?:\/\//i.test(url);
}

function makeAssetAbsolute(origin, base, asset) {
  if (!origin) return "";
  if (!asset) return "";
  if (isAbsoluteUrl(asset)) return asset;

  // asset pode vir como "/og.jpg" ou "og.jpg"
  const clean = asset.startsWith("/") ? asset.slice(1) : asset;
  return `${origin}${base}${clean}`;
}

function upsertMeta({ name, property, content }) {
  const selector = name
    ? `meta[name="${name}"]`
    : `meta[property="${property}"]`;

  let el = document.head.querySelector(selector);

  if (content == null || content === "") {
    if (el) el.remove();
    return;
  }

  if (!el) {
    el = document.createElement("meta");
    if (name) el.setAttribute("name", name);
    if (property) el.setAttribute("property", property);
    document.head.appendChild(el);
  }

  el.setAttribute("content", content);
}

function upsertLinkCanonical(href) {
  let el = document.head.querySelector(`link[rel="canonical"]`);

  if (!href) {
    if (el) el.remove();
    return;
  }

  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }

  el.setAttribute("href", href);
}

export default function Seo({
  title,
  description,
  image, // opcional: "/og.jpg" ou "og.jpg" ou "https://..."
  noindex = false,
}) {
  const { pathname } = useLocation();

  useEffect(() => {
    const siteName = "Consultório Médico Marques";
    const origin = window.location.origin;

    const base = normalizeBase(import.meta.env.BASE_URL || "/");

    const fullTitle = title ? `${title} | ${siteName}` : siteName;

    const canonical = `${origin}${joinBaseAndPath(base, pathname)}`;

    // fallback: sua foto atual (em public/)
    const ogImage = makeAssetAbsolute(
      origin,
      base,
      image || "foto_simara.jpg"
    );

    // TITLE
    document.title = fullTitle;

    // META BÁSICO
    upsertMeta({ name: "description", content: description });
    upsertMeta({
      name: "robots",
      content: noindex ? "noindex,nofollow" : "index,follow",
    });

    // CANONICAL
    upsertLinkCanonical(canonical);

    // OPEN GRAPH
    upsertMeta({ property: "og:site_name", content: siteName });
    upsertMeta({ property: "og:title", content: fullTitle });
    upsertMeta({ property: "og:description", content: description });
    upsertMeta({ property: "og:url", content: canonical });
    upsertMeta({ property: "og:type", content: "website" });
    upsertMeta({ property: "og:locale", content: "pt_BR" });
    upsertMeta({ property: "og:image", content: ogImage });

    // TWITTER
    upsertMeta({ name: "twitter:card", content: "summary_large_image" });
    upsertMeta({ name: "twitter:title", content: fullTitle });
    upsertMeta({ name: "twitter:description", content: description });
    upsertMeta({ name: "twitter:image", content: ogImage });

    // THEME COLOR (opcional)
    upsertMeta({ name: "theme-color", content: "#F59E0B" });
  }, [title, description, image, noindex, pathname]);

  return null;
}