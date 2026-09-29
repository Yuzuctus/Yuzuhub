# Yuzuctus — direction de design

Cette note décrit l'identité de Yuzuctus sans en faire un modèle à appliquer aux autres projets. La consigne explicite la plus récente de Sammy prime toujours sur cette note, les maquettes et les préférences générales des outils.

## Positionnement

Yuzuctus présente des projets personnels réels et aide les visiteurs à comprendre ce qu'ils font, à les ouvrir et à trouver les profils associés. Le site est une vitrine de projets, pas une boutique, une landing page SaaS ni un tableau de bord.

Chaque projet mérite une direction pensée pour son contenu. Ne pas reprendre automatiquement les anciens designs de Yuzuctus, le site de CUT × STRATA, ou une composition générique de galerie générée par IA. CUT × STRATA est un projet indépendant; son système visuel ne s'applique pas à Yuzuhub, sauf demande explicite.

## Yuzuhub

Le site d'accueil est un répertoire éditorial compact : les projets arrivent en premier, puis Yuzuctus.fm et les groupes de profils. La composition actuelle privilégie une liste typographique asymétrique à des cartes uniformes. Sur grand écran, la liste principale et le contenu d'appui forment deux colonnes; sur téléphone, ils s'empilent sans agrandir artificiellement le héros. Les groupes « Réseaux et code » et « Jeux » restent clairement identifiables.

Le rendu (fonds, couleurs, filets, grain, typographie IBM Plex, espacements) vient du kit partagé Agrume v3, copié dans `agrume/` ; ce site n'a ni palette ni police propres. La palette Yuzu du kit (sapin, menthe, jaune yuzu) ne commande pas une esthétique ludique : l'interface et les textes restent professionnels, clairs et sobres. Le contraste entre menthe, encre sombre et fonds neutres peut donner du caractère sans effet de template, typographie de jeu vidéo, gros slogan, dégradé décoratif ou accumulation de cartes.

L'illustration de Yuzu ponctue la page et garde son crédit. L'aperçu Osurea montre le produit lui-même, à taille contrôlée et sans cadre noir ajouté. Les portraits OC peuvent varier d'un chargement à l'autre, mais les emplacements d'une même page utilisent des illustrations visuellement distinctes. Ne pas mettre une image identique à côté de chaque réseau social.

## Contenu

Les textes publics sont professionnels, utiles et vérifiables, quels que soient le style des illustrations ou la couleur de la page. Décrire concrètement la fonction, l'état ou la destination d'un projet. Éviter les slogans vagues, l'emphase, la personnification forcée, les formulations mignonnes ou sentimentales et le texte qui parle du design au lieu d'informer.

Ne pas ajouter de recherche, de filtres ou de tags aux projets. Ne pas inventer de fonctionnalités, de métriques, de statut ou de promesses commerciales. Garder les descriptions brèves pour limiter le défilement et permettre de choisir une destination rapidement.

## Comportement et adaptation

Les projets doivent rester faciles à parcourir sur ordinateur et téléphone; éviter qu'un seul portrait ou aperçu remplisse un écran. Conserver les proportions des captures. Les thèmes clair et sombre restent lisibles, avec un pied de page sombre. Les liens, le changement de langue et de thème, la copie des identifiants, le focus clavier et les préférences de mouvement réduit doivent continuer de fonctionner.

## Assets et crédits

Utiliser les œuvres fournies, sans générer de personnage de remplacement, redessiner un OC en CSS ni recolorer une illustration. Respecter leurs proportions et afficher les crédits réels. Les trois emplacements aléatoires actuels tirent sans répétition parmi les trois chibis distincts de Yuzu : `img/Characters/yuzuchibi1_nobg_kourihase.png`, `img/Characters/yuzuchibi2_nobg_kourihase.png` et `img/Characters/yuzuchibi3_nobg_kourihase.png`. Les variantes proches ou les œuvres avec un arrière-plan plein ne sont pas des options interchangeables pour ces emplacements.

## Autres surfaces

Ce document ne prescrit pas la mise en page de ZestEcho, YuZest, Osurea, Yuzuctus.fm, du catalogue de skins ou de CUT × STRATA. Pour chaque projet, partir de ses utilisateurs, fonctions, contenus et assets réels. Concevoir une direction propre à la surface; demander une préférence seulement lorsqu'un choix manquant changerait matériellement le résultat.

## Preuve visuelle

Ne pas conclure à partir du diff seul. Ouvrir et inspecter les rendus dans un navigateur, au minimum sur téléphone et ordinateur, et dans les thèmes proposés. Pour un changement responsive conséquent, vérifier 390, 820, 1024, 1440 et 1728 px, le débordement horizontal, la lisibilité des titres, les interactions, les médias, le clavier et le mouvement réduit. Rapporter précisément toute vérification qui n'a pas pu être faite.
