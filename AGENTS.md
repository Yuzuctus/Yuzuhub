# Instructions pour Codex

Pour toute tâche de création, refonte ou revue visuelle dans ce dépôt :

- Utilise $yuzuctus-design et lis le DESIGN.md à la racine.
- La consigne actuelle de l'utilisateur et les faits du projet font autorité. CUT × STRATA est un projet distinct, pas le système visuel partagé de Yuzuhub; ne t'appuie dessus que si l'utilisateur le demande.
- UI/UX Pro Max est installé comme index de référence secondaire. Dans ce projet, limite-le aux questions ciblées de lisibilité, accessibilité, responsive et interaction; ne lui délègue pas le choix de style, de palette, de typographie ou de système visuel.
- Garde les recommandations d'Impeccable, d'Emil Kowalski et de Vercel dans leurs rôles respectifs décrits par le skill Yuzuctus. Les choix explicites de l'utilisateur priment sur ces références.
- Pour un redesign visible, inspecte le rendu réel dans le navigateur avec le workflow disponible. Capture et regarde les vues mobile et desktop; vérifie les deux thèmes si la surface les prend en charge. Pour une refonte responsive large, contrôle 390, 820, 1024, 1440 et 1728 px.
- Une compilation réussie ne suffit pas à prouver le rendu. Si tu ne peux pas ouvrir ou capturer la page, indique que la revue visuelle reste à faire.

Garde les textes professionnels, utiles et factuels. Préserve les crédits, les faits, les interactions et les assets valides; change les formulations vagues ou mignonnes en descriptions concrètes. N'ajoute pas de dépendance ou de fonction produit uniquement pour obtenir un effet visuel.

Système visuel : le kit Agrume v3 (`../Redesign/Agrume_Design`, voir son `DESIGN.md`). `agrume/css/` et `agrume/fonts/` sont des copies verbatim du kit : ne les modifie pas ici. Le CSS propre au site est `css/site.css`, en tokens `--ag-*` uniquement. Après toute recopie, `node ../Redesign/Agrume_Design/check-parity.mjs agrume/css` doit sortir à 0.
