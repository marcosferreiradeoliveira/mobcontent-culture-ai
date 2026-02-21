import { useEffect } from "react";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://www.mobcontent.com.br";

function setMeta(nameOrProp: string, content: string, isProperty = false) {
  const attr = isProperty ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${nameOrProp}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, nameOrProp);
    document.head.appendChild(el);
  }
  el.content = content;
}

export interface PageMetaOptions {
  title: string;
  description: string;
  /** Caminho da imagem de preview (ex: /og-ia.jpg). Será usado como SITE_URL + path */
  ogImage: string;
  /** Caminho da página (ex: /ai). Será usado como SITE_URL + path para og:url */
  path: string;
}

/**
 * Atualiza título e meta tags (og:*, twitter:*) para preview em redes sociais.
 * Usar em cada página interna para que o compartilhamento mostre título, descrição e imagem corretos.
 */
export function usePageMeta({ title, description, ogImage, path }: PageMetaOptions) {
  useEffect(() => {
    const fullTitle = title.includes("|") ? title : `${title} | mobCONTENT`;
    const url = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
    const imageUrl = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage.startsWith("/") ? ogImage : `/${ogImage}`}`;

    document.title = fullTitle;

    setMeta("description", description);

    setMeta("og:title", fullTitle, true);
    setMeta("og:description", description, true);
    setMeta("og:url", url, true);
    setMeta("og:image", imageUrl, true);
    setMeta("og:image:secure_url", imageUrl, true);
    setMeta("og:image:alt", fullTitle, true);
    setMeta("og:type", "website", true);

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", imageUrl);
    setMeta("twitter:image:alt", fullTitle);
  }, [title, description, ogImage, path]);
}
