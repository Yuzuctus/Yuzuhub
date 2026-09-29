(function () {
  "use strict";

  var HTML = document.documentElement;
  var THEME_KEY = "yuzuctus-theme";
  var LANG_KEY = "yuzuctus-language";
  var DEFAULT_LANG = "fr";
  var currentLanguage = DEFAULT_LANG;

  var I18N = {
    fr: {
      meta: {
        title: "Yuzuctus — projets et profils",
        description: "Découvrez les projets web et logiciels de Yuzuctus, FM.Yuzuctus et ses profils en ligne.",
        locale: "fr_FR"
      },
      nav: {
        aria: "Navigation principale",
        language: "Langue",
        skip: "Aller au contenu",
        home: "Yuzuctus — accueil",
        projects: "Projets",
        profiles: "Profils",
        credits: "Crédits"
      },
      hero: {
        kicker: "PROJETS PERSONNELS / YUZUCTUS.FR",
        lead: "Je construis des outils autour d’osu!, de la musique et de ce que j’aime explorer.",
        projects: "Voir les projets ↓",
        profiles: "Trouver mes profils ↗",
        portraitAlt: "Portrait illustré de Yuzu par Mazuko",
        artBy: "Illustration par"
      },
      osurea: {
        bandLabel: "PROJET À LA UNE",
        bandText: "Comparer deux réglages côte à côte",
        kind: "OUTIL POUR OSU!",
        body: "Comparer deux réglages côte à côte, comprendre leur différence et partager une configuration précise.",
        open: "Ouvrir Osurea ↗",
        source: "Code source ↗",
        alt: "Capture de l’interface Osurea pour comparer deux réglages côte à côte.",
        caption: "Capture de l’interface Osurea"
      },
      projects: {
        title: "Projets",
        intro: "Des outils web, une collection osu! et un logiciel de rendu.",
        previewArea: "Aperçu du projet sélectionné",
        previewLabel: "APERÇU",
        open: "Ouvrir le projet ↗",
        zestechoType: "ÉDITION COLLABORATIVE",
        yuzestType: "LIENS COURTS PRIVÉS",
        skinsType: "COLLECTION OSU!STANDARD",
        yuzucordType: "DISTRIBUTION WINDOWS",
        nectarType: "MARKDOWN VERS PDF / HTML",
        zestecho: "Éditeur collaboratif en temps réel ; les invités rejoignent une session sans compte.",
        yuzest: "Service privé de liens courts à partir d’URL longues.",
        skins: "Collection osu!standard classée par préférence, avec aperçus et téléchargements.",
        yuzucord: "Distribution Windows de Vencord avec plugins tiers identifiés.",
        nectar: "Conversion Markdown vers PDF ou HTML, avec aperçu direct et thèmes personnalisés."
      },
      fm: {
        kind: "PROJET MUSICAL",
        availability: "ACCÈS SUR INVITATION",
        statement: "Statistiques d’écoute, profil public et présence Discord.",
        body: "FM.Yuzuctus rassemble l’historique d’écoute, la présence Discord et un profil public partageable.",
        open: "Découvrir FM.Yuzuctus ↗",
        profileCta: "Découvrir le profil de Yuzuctus ↗",
        detailsLabel: "CE QUE LE PROJET RÉUNIT",
        statistics: "Statistiques d’écoute",
        statisticsDesc: "Activité musicale, artistes, titres et albums analysés au fil des écoutes.",
        presence: "Présence Discord",
        presenceDesc: "La musique écoutée en direct depuis Android et Windows.",
        profile: "Profil public",
        profileDesc: "Un espace partageable dont tu contrôles les sections."
      },
      profiles: {
        title: "Profils",
        intro: "Réseaux, code et jeux : les liens utiles au même endroit.",
        social: "Réseaux et code",
        games: "Jeux",
        copied: "Copié",
        copyDiscord: "Copier le nom d’utilisateur Discord",
        copyRiot: "Copier le Riot ID"
      },
      credits: {
        artAlt: "Croquis illustré de Yuzu par Kourihase",
        sketch: "CROQUIS — KOURIHASE",
        label: "L’ORIGINE DU NOM",
        line1: "Une pâtisserie.",
        line2: "Un cactus.",
        line3: "Du yuzu.",
        line4: "Yuzuctus.",
        lore: "Le lore tient littéralement dans une pâtisserie.",
        intro: "Les illustrations de ce site ont été réalisées par ces artistes et sont utilisées avec leur accord.",
        mazuko: "Portrait d’accueil",
        kourihase: "Croquis et chibis",
        joa: "Autres illustrations"
      },
      footer: {
        topLabel: "Haut de page"
      },
      theme: { toDark: "Passer en thème sombre", toLight: "Passer en thème clair", dark: "Sombre", light: "Clair" }
    },
    en: {
      meta: {
        title: "Yuzuctus — projects and profiles",
        description: "Explore Yuzuctus's web and software projects, FM.Yuzuctus, and online profiles.",
        locale: "en_US"
      },
      nav: {
        aria: "Main navigation",
        language: "Language",
        skip: "Skip to content",
        home: "Yuzuctus — home",
        projects: "Projects",
        profiles: "Profiles",
        credits: "Credits"
      },
      hero: {
        kicker: "PERSONAL PROJECTS / YUZUCTUS.FR",
        lead: "I build tools around osu!, music, and whatever I want to explore.",
        projects: "View projects ↓",
        profiles: "Find my profiles ↗",
        portraitAlt: "Illustrated portrait of Yuzu by Mazuko",
        artBy: "Illustration by"
      },
      osurea: {
        bandLabel: "FEATURED PROJECT",
        bandText: "Compare two setups side by side",
        kind: "TOOL FOR OSU!",
        body: "Compare two setups side by side, understand the difference, and share a precise configuration.",
        open: "Open Osurea ↗",
        source: "Source code ↗",
        alt: "Osurea interface for comparing two setups side by side.",
        caption: "Osurea interface preview"
      },
      projects: {
        title: "Projects",
        intro: "Web tools, an osu! collection, and a rendering app.",
        previewArea: "Preview of the selected project",
        previewLabel: "PREVIEW",
        open: "Open project ↗",
        zestechoType: "COLLABORATIVE EDITING",
        yuzestType: "PRIVATE SHORT LINKS",
        skinsType: "OSU!STANDARD COLLECTION",
        yuzucordType: "WINDOWS DISTRIBUTION",
        nectarType: "MARKDOWN TO PDF / HTML",
        zestecho: "A real-time collaborative editor; guests can join a session without an account.",
        yuzest: "A private short-link service for long URLs.",
        skins: "An osu!standard collection sorted by preference, with previews and downloads.",
        yuzucord: "A Windows distribution of Vencord with identified third-party plugins.",
        nectar: "Converts Markdown to PDF or HTML with live preview and custom themes."
      },
      fm: {
        kind: "MUSIC PROJECT",
        availability: "INVITATION ACCESS",
        statement: "Listening statistics, public profile, and Discord presence.",
        body: "FM.Yuzuctus brings together listening history, Discord presence, and a public profile you can share.",
        open: "Explore FM.Yuzuctus ↗",
        profileCta: "Explore Yuzuctus's profile ↗",
        detailsLabel: "WHAT THE PROJECT BRINGS TOGETHER",
        statistics: "Listening statistics",
        statisticsDesc: "Listening activity, artists, tracks, and albums analyzed over time.",
        presence: "Discord presence",
        presenceDesc: "What you listen to, live from Android and Windows.",
        profile: "Public profile",
        profileDesc: "A shareable space with sections you control."
      },
      profiles: {
        title: "Profiles",
        intro: "Social, code, and games: useful links in one place.",
        social: "Social and code",
        games: "Games",
        copied: "Copied",
        copyDiscord: "Copy Discord username",
        copyRiot: "Copy Riot ID"
      },
      credits: {
        artAlt: "Illustrated sketch of Yuzu by Kourihase",
        sketch: "SKETCH — KOURIHASE",
        label: "THE NAME",
        line1: "A pastry.",
        line2: "A cactus.",
        line3: "Some yuzu.",
        line4: "Yuzuctus.",
        lore: "The lore literally fits inside a pastry.",
        intro: "The illustrations on this site were made by these artists and are used with their permission.",
        mazuko: "Homepage portrait",
        kourihase: "Sketch and chibis",
        joa: "Other illustrations"
      },
      footer: {
        topLabel: "Back to top"
      },
      theme: { toDark: "Switch to dark theme", toLight: "Switch to light theme", dark: "Dark", light: "Light" }
    }
  };

  var OC_ART = [
    "img/Characters/yuzuchibi1_nobg_kourihase.png",
    "img/Characters/yuzuchibi2_nobg_kourihase.png",
    "img/Characters/yuzuchibi3_nobg_kourihase.png"
  ];

  function t(key) {
    var parts = key.split(".");
    var value = parts.reduce(function (node, part) { return node && node[part]; }, I18N[currentLanguage]);
    if (typeof value !== "string") value = parts.reduce(function (node, part) { return node && node[part]; }, I18N[DEFAULT_LANG]);
    if (typeof value !== "string") return "";
    return value;
  }

  function safeGet(key) {
    try { return localStorage.getItem(key); } catch (error) { return null; }
  }
  function safeSet(key, value) {
    try { localStorage.setItem(key, value); } catch (error) { /* Storage is optional. */ }
  }

  function setTheme(theme) {
    var dark = theme === "dark";
    HTML.setAttribute("data-theme", dark ? "dark" : "light");
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = dark ? "#131c17" : "#f3f6ea";
    document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
      button.setAttribute("aria-label", dark ? t("theme.toLight") : t("theme.toDark"));
      var label = button.querySelector("[data-theme-label]");
      if (label) label.textContent = dark ? t("theme.light") : t("theme.dark");
    });
  }

  function initTheme() {
    var saved = safeGet(THEME_KEY);
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(saved === "dark" || saved === "light" ? saved : prefersDark ? "dark" : "light");
    document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
      button.addEventListener("click", function () {
        var next = HTML.getAttribute("data-theme") === "dark" ? "light" : "dark";
        safeSet(THEME_KEY, next);
        setTheme(next);
      });
    });
  }

  function shuffled(count) {
    var order = OC_ART.map(function (_, index) { return index; });
    for (var i = order.length - 1; i > 0; i -= 1) {
      var j = Math.floor(Math.random() * (i + 1));
      var swap = order[i]; order[i] = order[j]; order[j] = swap;
    }
    return order.slice(0, count).map(function (index) { return OC_ART[index]; });
  }

  function initRandomOC() {
    var images = Array.prototype.slice.call(document.querySelectorAll("[data-oc-random]"));
    var chosen = shuffled(images.length);
    images.forEach(function (image, index) {
      if (chosen[index]) image.src = chosen[index];
    });
  }

  function applyLanguage(language) {
    currentLanguage = I18N[language] ? language : DEFAULT_LANG;
    HTML.lang = currentLanguage;
    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var value = t(node.getAttribute("data-i18n"));
      if (value) node.textContent = value;
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (node) {
      node.setAttribute("aria-label", t(node.getAttribute("data-i18n-aria-label")));
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (node) {
      node.alt = t(node.getAttribute("data-i18n-alt"));
    });
    var metaDescription = document.querySelector('meta[name="description"]');
    var ogDescription = document.querySelector('meta[property="og:description"]');
    var ogLocale = document.querySelector('meta[property="og:locale"]');
    document.title = t("meta.title");
    if (metaDescription) metaDescription.content = t("meta.description");
    if (ogDescription) ogDescription.content = t("meta.description");
    if (ogLocale) ogLocale.content = t("meta.locale");
    document.querySelectorAll("[data-lang-option]").forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.dataset.langOption === currentLanguage));
    });
    setTheme(HTML.getAttribute("data-theme"));
  }

  function initLanguage() {
    document.querySelectorAll("[data-lang-option]").forEach(function (button) {
      button.addEventListener("click", function () {
        safeSet(LANG_KEY, button.dataset.langOption);
        applyLanguage(button.dataset.langOption);
      });
    });
    var saved = safeGet(LANG_KEY);
    applyLanguage(I18N[saved] ? saved : DEFAULT_LANG);
  }

  function initSectionState() {
    var sections = Array.prototype.slice.call(document.querySelectorAll("[data-section]"));
    var links = Array.prototype.slice.call(document.querySelectorAll("[data-section-link]"));
    if (!sections.length || !links.length || !("IntersectionObserver" in window)) return;
    var visible = new Map();
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var id = entry.target.dataset.section;
        if (entry.isIntersecting) visible.set(id, entry.boundingClientRect.top);
        else visible.delete(id);
      });
      var best = null;
      visible.forEach(function (top, id) {
        if (best === null || Math.abs(top) < Math.abs(visible.get(best))) best = id;
      });
      links.forEach(function (link) {
        if (link.dataset.sectionLink === best) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    }, { rootMargin: "-28% 0px -58% 0px", threshold: 0 });
    sections.forEach(function (section) { observer.observe(section); });
  }

  function initProjectPreview() {
    var links = Array.prototype.slice.call(document.querySelectorAll("[data-project-link]"));
    var previews = Array.prototype.slice.call(document.querySelectorAll("[data-project-preview]"));
    if (!links.length || !previews.length) return;
    function show(project) {
      links.forEach(function (link) { if (link.dataset.projectLink === project) link.setAttribute("aria-current", "true"); else link.removeAttribute("aria-current"); });
      previews.forEach(function (preview) { preview.hidden = preview.dataset.projectPreview !== project; });
    }
    links.forEach(function (link) {
      link.addEventListener("pointerenter", function () { show(link.dataset.projectLink); });
      link.addEventListener("focus", function () { show(link.dataset.projectLink); });
    });
  }

  function copyText(value) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(value);
    return new Promise(function (resolve, reject) {
      var input = document.createElement("textarea");
      input.value = value; input.setAttribute("readonly", "");
      input.style.position = "fixed"; input.style.opacity = "0";
      document.body.appendChild(input); input.select();
      try { document.execCommand("copy") ? resolve() : reject(new Error("copy failed")); }
      catch (error) { reject(error); }
      finally { document.body.removeChild(input); }
    });
  }

  function initCopy() {
    document.querySelectorAll("[data-copy]").forEach(function (button) {
      var label = button.querySelector("[data-copy-label]");
      var timer = null;
      button.addEventListener("click", function () {
        copyText(button.dataset.copy).then(function () {
          button.classList.add("is-copied");
          if (label) label.textContent = t("profiles.copied");
          window.clearTimeout(timer);
          timer = window.setTimeout(function () {
            button.classList.remove("is-copied");
            if (label) label.textContent = button.dataset.copy;
          }, 1400);
        }).catch(function () { /* The value stays visible for manual copying. */ });
      });
    });
  }

  function initBackToTop() {
    var button = document.querySelector(".ag-to-top");
    if (!button) return;
    function update() { button.classList.toggle("is-visible", window.scrollY > window.innerHeight); }
    window.addEventListener("scroll", update, { passive: true });
    button.addEventListener("click", function () {
      var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    });
    update();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initRandomOC();
    initTheme();
    initLanguage();
    initSectionState();
    initProjectPreview();
    initCopy();
    initBackToTop();
    var year = document.querySelector("[data-year]");
    if (year) year.textContent = String(new Date().getFullYear());
  });
})();
