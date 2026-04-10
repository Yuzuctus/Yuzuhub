/*
  Yuzuhub script
  Theme toggle + language switch + scroll reveal + nav scroll + copy actions.
*/

(function () {
  var THEME_STORAGE_KEY = 'yuzuctus-theme';
  var LANGUAGE_STORAGE_KEY = 'yuzuctus-language';
  var DEFAULT_LANGUAGE = 'en';
  var HTML = document.documentElement;
  var currentLanguage = DEFAULT_LANGUAGE;

  var I18N = {
    en: {
      meta: {
        title: 'Yuzuctus | projects, socials, and tools',
        description: 'Official Yuzuctus hub on yuzuctus.fr: projects, socials, and practical tools built in my own style.',
        ogLocale: 'en_US'
      },
      nav: {
        mainAria: 'Main navigation',
        featured: 'Featured',
        socials: 'Socials',
        gaming: 'Gaming',
        projects: 'Projects',
        music: 'Music'
      },
      language: {
        selectorAria: 'Language selector'
      },
      hero: {
        subtitle: 'I build practical web tools with personality: sharp, playful, and clean.',
        muted: 'This is my home base for projects, profiles, and experiments shipped in public.',
        ctaFeatured: 'See featured project',
        ctaFindMe: 'Find me online',
        avatarAlt: 'Official Yuzuctus avatar'
      },
      featured: {
        kicker: 'Featured project',
        description: 'My flagship project for comparing tablet area setups, visualizing differences, and sharing settings quickly.',
        body: 'A focused app to compare tablet area setups, spot differences fast, and share exact values.',
        openApp: 'Open app',
        previewAria: 'View Osurea preview',
        previewAlt: 'Preview of the Osurea interface'
      },
      social: {
        kicker: 'Social',
        title: 'Socials and channels',
        description: 'Follow my updates, videos, and latest builds.',
        discordAria: 'Copy Discord username'
      },
      gaming: {
        kicker: 'Gaming',
        title: 'Gaming profiles',
        description: 'Main game profiles and Riot tag in one place.',
        riotAria: 'Copy Riot Games username'
      },
      projects: {
        kicker: 'Other projects',
        title: 'Tools and side builds',
        nectarDescription: 'Convert Markdown to PDF or HTML with live preview, custom themes, and precise export control.',
        nectarComingSoonAria: 'Site coming soon',
        comingSoon: 'Coming soon',
        yuzestDescription: 'My private short-link service for clean URLs and instant sharing.',
        open: 'Open',
        skinsDescription: 'A curated osu! skin hub to browse, preview, and download my go-to picks.',
        openSite: 'Open site'
      },
      footer: {
        linksAria: 'Footer links',
        backToTop: 'Back to top',
        creditsHtml: 'Built by Yuzuctus. Character art by <a href="https://x.com/Kourihase" target="_blank" rel="noopener noreferrer">KouriHase</a> and <a href="https://x.com/dreepies" target="_blank" rel="noopener noreferrer">Joa</a>.'
      },
      music: {
        kicker: 'Favorite albums',
        title: 'Album gallery',
        description: 'A few records I replay all the time. Click a cover to open direct streaming links.',
        galleryAria: 'Favorite album covers',
        selected: 'Selected album',
        hint: 'Click another cover to switch album.',
        open: 'Open',
        unavailable: 'Not available',
        by: 'by'
      },
      theme: {
        switchToDay: 'Switch to day mode',
        switchToNight: 'Switch to night mode'
      },
      copy: {
        success: 'Copied!',
        error: 'Copy error'
      }
    },
    fr: {
      meta: {
        title: 'Yuzuctus | projets, reseaux et outils',
        description: 'Hub officiel de Yuzuctus sur yuzuctus.fr : projets, reseaux et outils pratiques, construits dans mon propre style.',
        ogLocale: 'fr_FR'
      },
      nav: {
        mainAria: 'Navigation principale',
        featured: 'A la une',
        socials: 'Reseaux',
        gaming: 'Gaming',
        projects: 'Projets',
        music: 'Musique'
      },
      language: {
        selectorAria: 'Selecteur de langue'
      },
      hero: {
        subtitle: 'Je cree des outils web pratiques avec de la personnalite : precis, ludiques et propres.',
        muted: 'Ici, c\'est ma base pour mes projets, profils et experiences publiees publiquement.',
        ctaFeatured: 'Voir le projet a la une',
        ctaFindMe: 'Me trouver en ligne',
        avatarAlt: 'Avatar officiel de Yuzuctus'
      },
      featured: {
        kicker: 'Projet a la une',
        description: 'Mon projet principal pour comparer des zones de tablette, visualiser les differences et partager des reglages rapidement.',
        body: 'Une app ciblee pour comparer des zones de tablette, reperer vite les differences et partager des valeurs exactes.',
        openApp: 'Ouvrir l\'app',
        previewAria: 'Voir l\'apercu d\'Osurea',
        previewAlt: 'Apercu de linterface Osurea'
      },
      social: {
        kicker: 'Social',
        title: 'Reseaux et chaines',
        description: 'Suis mes actus, videos et derniers builds.',
        discordAria: 'Copier le pseudo Discord'
      },
      gaming: {
        kicker: 'Gaming',
        title: 'Profils gaming',
        description: 'Mes profils de jeu principaux et mon tag Riot au meme endroit.',
        riotAria: 'Copier le pseudo Riot Games'
      },
      projects: {
        kicker: 'Autres projets',
        title: 'Outils et side builds',
        nectarDescription: 'Convertis du Markdown en PDF ou HTML avec apercu live, themes personnalisables et export precis.',
        nectarComingSoonAria: 'Site bientot disponible',
        comingSoon: 'Bientot',
        yuzestDescription: 'Mon service prive de liens courts pour des URL propres et un partage instantane.',
        open: 'Ouvrir',
        skinsDescription: 'Un hub osu! skin selectionne pour parcourir, previsualiser et telecharger mes choix preferes.',
        openSite: 'Ouvrir le site'
      },
      footer: {
        linksAria: 'Liens de pied de page',
        backToTop: 'Retour en haut',
        creditsHtml: 'Cree par Yuzuctus. Character art par <a href="https://x.com/Kourihase" target="_blank" rel="noopener noreferrer">KouriHase</a> et <a href="https://x.com/dreepies" target="_blank" rel="noopener noreferrer">Joa</a>.'
      },
      music: {
        kicker: 'Albums favoris',
        title: 'Galerie dalbums',
        description: 'Une selection dalbums que je relance souvent. Clique une cover pour ouvrir les liens directs.',
        galleryAria: 'Covers dalbums favoris',
        selected: 'Album selectionne',
        hint: 'Clique une autre cover pour changer dalbum.',
        open: 'Ouvrir',
        unavailable: 'Indisponible',
        by: 'par'
      },
      theme: {
        switchToDay: 'Passer au mode jour',
        switchToNight: 'Passer au mode nuit'
      },
      copy: {
        success: 'Copie!',
        error: 'Erreur de copie'
      }
    }
  };

  var MUSIC_ALBUMS = [
    {
      id: 'ekkolaptomenos',
      title: 'ekkolaptomenos',
      artist: 'Haru Nemuri',
      cover: 'img/Music/%20ekkolapt%C3%B3menos-Haru-Nemuri.jpeg',
      links: {
        spotify: 'https://open.spotify.com/intl-fr/album/5q6OyujHwhzA03WtZjnGeO',
        apple: 'https://music.apple.com/fr/album/ekkolapt%CF%8Cmenos/1822374813',
        youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_lRfwrzYJ7vMrAv3nYj1lxabFayIerRom4'
      }
    },
    {
      id: '8th-album-untitled',
      title: '8th Album "Untitled"',
      artist: 'downy',
      cover: 'img/Music/8th-AlbumUntitled-Downy.jpeg',
      links: {
        spotify: 'https://open.spotify.com/album/5TBBlMEtWjQEabI5ZDslAU',
        apple: 'https://music.apple.com/us/album/8th-album-untitled/1791909902',
        youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_mFguSormoMr550Pt1FUQw67oERHT-EeRs'
      }
    },
    {
      id: 'ados-utattemita-album',
      title: 'Ado\'s Utattemita Album',
      artist: 'Ado',
      cover: 'img/Music/Ado\'s-Utattemita-Album-Ado.webp',
      links: {
        spotify: 'https://open.spotify.com/album/2tGokYNjX87AAodtbLBYuf',
        apple: 'https://music.apple.com/fr/album/ados-utattemita-album/1718531990',
        youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_ned61ggF_96UkOKn1G77I2y-nTZ3hR1uo'
      }
    },
    {
      id: 'cest-quand-meme-bizarre',
      title: 'C\'est quand meme bizarre',
      artist: 'jean',
      cover: 'img/Music/Cest-quand-meme-bizzare-jean.jpeg',
      links: {
        spotify: 'https://open.spotify.com/intl-fr/album/0nckDoL0xyJrbQi6jIIyt2',
        apple: 'https://music.apple.com/fr/album/cest-quand-m%C3%AAme-bizarre/1809953204',
        youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_lMd_TDxp4P12SVLFCL5kO9171HViC30XQ'
      }
    },
    {
      id: 'dos-moons',
      title: 'Dos Moons',
      artist: 'Dos Monos',
      cover: 'img/Music/Dos-Moons-DosMonos.webp',
      links: {
        spotify: 'https://open.spotify.com/album/52qBc4aYWtzM1fSyjTDpGv',
        apple: 'https://music.apple.com/us/album/dos-moons-ep/1808837376',
        youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_kRyD3DUViuo404uc0uLEk9UZ1plTsJPoM'
      }
    },
    {
      id: 'enfant-lune',
      title: 'Enfant lune',
      artist: 'Gringe',
      cover: 'img/Music/Enfantlune-Gringe.webp',
      links: {
        spotify: 'https://open.spotify.com/intl-fr/album/2EyvuNubSqB5b62dgWxvCV',
        apple: 'https://music.apple.com/fr/album/enfant-lune/1439432689',
        youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_lKywNEUD4fgjQWy6cC8GkFa4Iq1YJl1KE'
      }
    },
    {
      id: 'en-premier-lamour',
      title: 'En premier l\'amour',
      artist: 'Susanoo',
      cover: 'img/Music/En-premier-amour-Susanoo.jpeg',
      links: {
        spotify: 'https://open.spotify.com/intl-fr/album/5sTrbMpnS8Sw3qlbwK2Ibv',
        apple: 'https://music.apple.com/fr/album/en-premier-lamour/1868411248',
        youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_nNvJwbV-7zHlcRZpjAWU2lkGuLVX7wczk'
      }
    },
    {
      id: 'girlhood-memories',
      title: 'Girlhood Memories',
      artist: 'Phantom Siita',
      cover: 'img/Music/Girlhood Memories-PhantomSiita.jpeg',
      links: {
        spotify: 'https://open.spotify.com/intl-fr/album/41HnLbFzWQXZQdoVOcoYV8',
        apple: 'https://music.apple.com/fr/album/girlhood-memories/1774402354',
        youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_mGe2uT0SHKNQzxf8Jaaj0dO817SGzxwy8'
      }
    },
    {
      id: 'inferno',
      title: 'Inferno (La jeune fille et la mort)',
      artist: 'VII',
      cover: 'img/Music/Inferno-VII.jpeg',
      links: {
        spotify: 'https://open.spotify.com/album/38y4wZCkzB7EtmTOtWGZLE',
        apple: null,
        youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_mL00UCP-_3LgXVsktpZf7xNb0dfCL4fwU'
      }
    },
    {
      id: 'jeudi',
      title: 'Jeudi',
      artist: 'Hugo TSR',
      cover: 'img/Music/Jeudi-HugoTSR.webp',
      links: {
        spotify: 'https://open.spotify.com/album/5hsx2pYxt1GQ9PDRRHFgjw',
        apple: 'https://music.apple.com/fr/album/jeudi/1718815646',
        youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_kn8xvlXXCPtsnrxeYQq1XacWzypN9IdQA'
      }
    },
    {
      id: 'jungle-des-illusions-vol-2',
      title: 'JUNGLE DES ILLUSIONS VOL 2',
      artist: 'Jungle Jack',
      cover: 'img/Music/JUNGLE-DES-ILLUSIONS-VOL-2-JungleJack.webp',
      links: {
        spotify: 'https://open.spotify.com/intl-fr/album/3tFfZvWj3GYjONfRlTkMzc',
        apple: 'https://music.apple.com/fr/album/jungle-des-illusions-vol-2/1760462220',
        youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_k0edgDDb8bhceyv5yF4zTF-DweKr-Gjsw'
      }
    },
    {
      id: 'la-fiev',
      title: 'LA FIEV',
      artist: 'Mairo',
      cover: 'img/Music/LA-FIEV-Mairo.webp',
      links: {
        spotify: 'https://open.spotify.com/intl-fr/album/4YtctFMzVZeJbrF2pdUsJe',
        apple: 'https://music.apple.com/fr/album/la-fiev/1794312094',
        youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_mP9lnCD-ThVCk9xb192lXLxrpSwbZQT_k'
      }
    },
    {
      id: 'le-chant-des-sirenes',
      title: 'Le chant des sirenes',
      artist: 'Orelsan',
      cover: 'img/Music/Le-chant-des-sirenes-Orelsan.jpeg',
      links: {
        spotify: 'https://open.spotify.com/intl-fr/album/5GfsaNstrK8rszTX5XYtXU',
        apple: 'https://music.apple.com/fr/album/le-chant-des-sir%C3%A8nes/1788305509',
        youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_kU7UPQxpwAekNi0fPHlf88QC1IBcfxX3Y'
      }
    },
    {
      id: 'les-amants-terribles',
      title: 'Les Amants Terribles',
      artist: 'Tuerie',
      cover: 'img/Music/Les-Amants-Terribles-Tuerie.jpeg',
      links: {
        spotify: 'https://open.spotify.com/intl-fr/album/0iyrJcC2eEKxmSzSonnXUv',
        apple: 'https://music.apple.com/fr/album/les-amants-terribles/1804087113',
        youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_mWUe3YSAN0ZOxLeZvjgz2YqR0iOkhICyo'
      }
    },
    {
      id: 'magnificat',
      title: 'Magnificat',
      artist: 'VALD',
      cover: 'img/Music/Magnificat-VALD.webp',
      links: {
        spotify: 'https://open.spotify.com/intl-fr/album/50aUxrW8cVj0Phidp3SDR1',
        apple: 'https://music.apple.com/fr/album/magnificat/1856568398',
        youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_miJrYujOSkGUwpv3co3rL9PRLilMfOTG4'
      }
    },
    {
      id: 'negative-spaces',
      title: 'Negative Spaces',
      artist: 'Poppy',
      cover: 'img/Music/Negative-space-Poppy.webp',
      links: {
        spotify: 'https://open.spotify.com/album/0YIOpXQvcbiDNPusSqi5Ew',
        apple: 'https://music.apple.com/cr/album/negative-spaces/1765104290',
        youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_nf2eih3uEUS8uADLzsysxOjnxulfzjoR4'
      }
    },
    {
      id: 'nirvana',
      title: 'Nirvana',
      artist: 'Jazzy Bazz',
      cover: 'img/Music/Nirvana-JazzyBazz.webp',
      links: {
        spotify: 'https://open.spotify.com/intl-fr/album/5p583Gi2HJlcjJDQ7R2Tox',
        apple: 'https://music.apple.com/fr/album/nirvana/1798341054',
        youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_mszbClEl1i_jlccub84hCicTFrhhsE8Iw'
      }
    },
    {
      id: 'ou-les-garcons-grandissent',
      title: 'Ou les garcons grandissent',
      artist: 'Jewel Usain',
      cover: 'img/Music/Ou-les-garcon-grandissent-JellewUsain.jpeg',
      links: {
        spotify: 'https://open.spotify.com/intl-fr/album/6pEbfS09Hwul0U3MVbWRyj',
        apple: 'https://music.apple.com/fr/album/o%C3%B9-les-gar%C3%A7ons-grandissent/1709699499',
        youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_mb-fRMVG1Bzm0tr00ml78QH9nWzU1X7v8'
      }
    },
    {
      id: 'phoenix',
      title: 'Phoenix',
      artist: 'Lord Esperanza',
      cover: 'img/Music/Phoenix-LordEsperenza.jpeg',
      links: {
        spotify: 'https://open.spotify.com/album/0fcoU7MAFSI8LQjy4pvE6A',
        apple: 'https://music.apple.com/us/album/phoenix/1673781020',
        youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_lQ5MeJfk8w-lsW1mqwbybNUrW7QgoDgik'
      }
    },
    {
      id: 'pirouette',
      title: 'Pirouette',
      artist: 'Model/Actriz',
      cover: 'img/Music/Pirouette-ModelActriz.jpeg',
      links: {
        spotify: 'https://open.spotify.com/album/2I25MrGGWAIRtjjcZcf6xP',
        apple: 'https://music.apple.com/fr/album/pirouette/1794340138',
        youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_lX9umN_aZU3avY_qDne2Zw1wIFekTfQGU'
      }
    },
    {
      id: 'si-on-sombre-ce-sera-beau',
      title: 'Si on sombre ce sera beau',
      artist: 'Solann',
      cover: 'img/Music/Si-on-sombre-se-sera-beau-Solann.jpeg',
      links: {
        spotify: 'https://open.spotify.com/intl-fr/album/3F6QXyRhmIV75vrrcE7Qdv',
        apple: 'https://music.apple.com/fr/album/si-on-sombre-ce-sera-beau/1777043502',
        youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_nxmfRlHvol8ZMQmQh9W8hw_o0NYFfllKQ'
      }
    },
    {
      id: 'si-tessayais-detre-heureux',
      title: 'Si t\'essayais d\'etre heureux ?',
      artist: 'L\'enfant',
      cover: 'img/Music/si-t-esseyais-etre-heureux-lenfant.jpeg',
      links: {
        spotify: 'https://open.spotify.com/album/0JAuF1R6ZwlprcI5fnEnXc',
        apple: 'https://music.apple.com/fr/album/si-tessayais-d%C3%AAtre-heureux/1867452093',
        youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_lu38tpHfoLfyibDujIkKnrSEnINgtEymE'
      }
    },
    {
      id: 'slmjvvmrl0',
      title: 'SLMJVVMRL0',
      artist: 'C\'typeencostume',
      cover: 'img/Music/SLMJVVMRL0+Ctypeencostume.png',
      links: {
        spotify: 'https://open.spotify.com/album/2c2xKu6RR3VTikwleBHQ9a',
        apple: 'https://music.apple.com/us/album/slmjvvmrl0/1714326867',
        youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_nwqcFu6CgXCE1i6sZjo2Iw3qv2nkuH5Sc'
      }
    },
    {
      id: 'the-human-fear',
      title: 'The Human Fear',
      artist: 'Franz Ferdinand',
      cover: 'img/Music/The-humans-fear-FranzFerdinand.jpeg',
      links: {
        spotify: 'https://open.spotify.com/album/7LbR1L8thzNldHceu3tj1a',
        apple: 'https://music.apple.com/md/album/the-human-fear/1763093106',
        youtube: 'https://music.youtube.com/playlist?list=OLAK5uy_kHYNEAN609TWgFV6xu30nDMljPsAJuZ5A'
      }
    }
  ];

  var MUSIC_PLATFORMS = [
    { key: 'spotify', label: 'Spotify' },
    { key: 'apple', label: 'Apple Music' },
    { key: 'youtube', label: 'YouTube Music' }
  ];

  var MUSIC_CARD_SHAPES = [
    'square',
    'portrait',
    'square',
    'wide',
    'square',
    'portrait',
    'wide',
    'square',
    'portrait',
    'square'
  ];

  var musicState = {
    initialized: false,
    activeId: null,
    galleryEl: null,
    panelEl: null,
    panelArrowEl: null,
    panelTitleEl: null,
    panelArtistEl: null,
    panelLinksEl: null,
    hasAnimatedIn: false,
    transitionToken: 0,
    panelCloseTimer: null,
    panelVisibilityToken: 0,
    resizeTimer: null,
    relayoutRafId: 0
  };

  function getMusicCardShape(index) {
    return MUSIC_CARD_SHAPES[index % MUSIC_CARD_SHAPES.length];
  }

  function findMusicAlbumById(id) {
    for (var i = 0; i < MUSIC_ALBUMS.length; i += 1) {
      if (MUSIC_ALBUMS[i].id === id) return MUSIC_ALBUMS[i];
    }
    return null;
  }

  function getMusicCardById(id) {
    if (!musicState.galleryEl || !id) return null;
    return musicState.galleryEl.querySelector('.music-card[data-album-id="' + id + '"]');
  }

  function createMusicLink(platform, url) {
    if (url) {
      var anchor = document.createElement('a');
      anchor.className = 'btn btn--pebble btn--sm music-link-btn';
      anchor.dataset.platform = platform.key;
      anchor.href = url;
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
      anchor.textContent = platform.label;
      return anchor;
    }

    var unavailable = document.createElement('span');
    unavailable.className = 'music-link-btn music-link-btn--disabled';
    unavailable.textContent = platform.label + ' - ' + t('music.unavailable');
    return unavailable;
  }

  function createMusicCard(album, index, animateIn) {
    var isActive = musicState.activeId === album.id;
    var shape = getMusicCardShape(index);

    var card = document.createElement('article');
    card.className = 'music-card';
    card.dataset.albumId = album.id;
    card.dataset.shape = shape;
    if (animateIn) {
      card.classList.add('is-entering');
      card.style.setProperty('--music-delay', index * 35 + 'ms');
    }
    card.setAttribute('role', 'listitem');
    if (isActive) card.classList.add('is-selected');

    var tile = document.createElement('button');
    tile.type = 'button';
    tile.className = 'music-tile';
    if (isActive) tile.classList.add('is-active');
    tile.dataset.albumId = album.id;
    tile.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    tile.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    tile.setAttribute('aria-controls', 'music-panel');
    tile.setAttribute('aria-label', album.title + ' ' + t('music.by') + ' ' + album.artist);

    var image = document.createElement('img');
    image.className = 'music-tile-cover';
    image.src = album.cover;
    image.alt = album.title + ' cover';
    image.loading = 'lazy';
    image.width = 700;
    image.height = 700;
    tile.appendChild(image);

    var meta = document.createElement('span');
    meta.className = 'music-tile-meta';

    var title = document.createElement('span');
    title.className = 'music-tile-title';
    title.textContent = album.title;

    var artist = document.createElement('span');
    artist.className = 'music-tile-artist';
    artist.textContent = album.artist;

    meta.appendChild(title);
    meta.appendChild(artist);
    tile.appendChild(meta);

    card.appendChild(tile);
    return card;
  }

  function createMusicPanel() {
    var panel = document.createElement('article');
    panel.id = 'music-panel';
    panel.className = 'music-panel';
    panel.hidden = true;
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-live', 'polite');

    var arrow = document.createElement('span');
    arrow.className = 'music-panel-arrow';
    arrow.setAttribute('aria-hidden', 'true');

    var content = document.createElement('div');
    content.className = 'music-panel-content';

    var heading = document.createElement('div');
    heading.className = 'music-panel-heading';

    var title = document.createElement('h3');
    title.className = 'music-panel-title';

    var artist = document.createElement('p');
    artist.className = 'music-panel-artist';

    var links = document.createElement('div');
    links.className = 'music-links';

    heading.appendChild(title);
    heading.appendChild(artist);

    content.appendChild(heading);
    content.appendChild(links);

    panel.appendChild(arrow);
    panel.appendChild(content);

    musicState.panelEl = panel;
    musicState.panelArrowEl = arrow;
    musicState.panelTitleEl = title;
    musicState.panelArtistEl = artist;
    musicState.panelLinksEl = links;

    return panel;
  }

  function ensureMusicPanel() {
    if (!musicState.galleryEl) return;
    if (musicState.panelEl && musicState.panelEl.isConnected) return;

    var panel = createMusicPanel();
    musicState.galleryEl.appendChild(panel);
  }

  function getMusicCards() {
    if (!musicState.galleryEl) return [];
    return Array.prototype.slice.call(musicState.galleryEl.querySelectorAll('.music-card'));
  }

  function clampNumber(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function getMusicGridMetrics() {
    if (!musicState.galleryEl) {
      return { rowSize: 8, rowGap: 16 };
    }

    var styles = window.getComputedStyle(musicState.galleryEl);
    var rowSize = parseFloat(styles.getPropertyValue('grid-auto-rows')) || 8;
    var rowGap = parseFloat(styles.getPropertyValue('row-gap')) || parseFloat(styles.getPropertyValue('grid-row-gap')) || 16;
    return { rowSize: rowSize, rowGap: rowGap };
  }

  function clearMusicPanelInlineStyles() {
    if (!musicState.panelEl) return;
    musicState.panelEl.style.removeProperty('max-height');
    musicState.panelEl.style.removeProperty('padding-top');
    musicState.panelEl.style.removeProperty('padding-bottom');
    musicState.panelEl.style.removeProperty('--music-panel-open-height');
  }

  function setMusicItemRowSpan(item, forcedHeight) {
    if (!item || !musicState.galleryEl) return;

    var metrics = getMusicGridMetrics();
    var itemHeight = typeof forcedHeight === 'number' ? forcedHeight : item.getBoundingClientRect().height;
    var span = Math.max(1, Math.ceil((itemHeight + metrics.rowGap) / (metrics.rowSize + metrics.rowGap)));
    item.style.gridRowEnd = 'span ' + span;
  }

  function relayoutMusicMasonry() {
    if (!musicState.galleryEl) return;

    var cards = getMusicCards();
    cards.forEach(function (card) {
      setMusicItemRowSpan(card);
    });
  }

  function scheduleMusicRelayout() {
    if (musicState.relayoutRafId) {
      window.cancelAnimationFrame(musicState.relayoutRafId);
    }

    musicState.relayoutRafId = window.requestAnimationFrame(function () {
      musicState.relayoutRafId = 0;
      relayoutMusicMasonry();
    });
  }

  function updateMusicPanelArrowPosition(card) {
    if (!card || !musicState.panelEl || !musicState.panelArrowEl) return;

    var anchor = card.querySelector('.music-tile') || card;
    var cardRect = card.getBoundingClientRect();
    var anchorRect = anchor.getBoundingClientRect();
    var panelRect = musicState.panelEl.getBoundingClientRect();
    if (!panelRect.width || !cardRect.width) return;

    var anchorCenterInCard = anchorRect.left + anchorRect.width / 2 - cardRect.left;
    var desiredLeft = anchorCenterInCard - panelRect.width / 2;

    var viewportGap = 8;
    var minLeft = viewportGap - cardRect.left;
    var maxLeft = window.innerWidth - viewportGap - cardRect.left - panelRect.width;
    var clampedLeft = desiredLeft;

    if (maxLeft < minLeft) {
      clampedLeft = minLeft;
    } else {
      clampedLeft = clampNumber(desiredLeft, minLeft, maxLeft);
    }

    musicState.panelEl.style.setProperty('--music-panel-offset-x', Math.round(clampedLeft) + 'px');

    var targetX = anchorCenterInCard - clampedLeft;
    var clampedX = clampNumber(targetX, 20, panelRect.width - 20);
    musicState.panelEl.style.setProperty('--music-arrow-x', clampedX + 'px');
  }

  function placeMusicPanelAfterCard(card) {
    if (!card || !musicState.panelEl) return;

    card.appendChild(musicState.panelEl);
    updateMusicPanelArrowPosition(card);
  }

  function setMusicSelectionState(activeId) {
    var cards = getMusicCards();
    cards.forEach(function (card) {
      var isSelected = card.getAttribute('data-album-id') === activeId;
      card.classList.toggle('is-selected', isSelected);

      var tile = card.querySelector('.music-tile');
      if (!tile) return;
      tile.classList.toggle('is-active', isSelected);
      tile.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
      tile.setAttribute('aria-expanded', isSelected ? 'true' : 'false');
    });
  }

  function clearMusicPanelCloseTimer() {
    if (musicState.panelCloseTimer) {
      window.clearTimeout(musicState.panelCloseTimer);
      musicState.panelCloseTimer = null;
    }
  }

  function ensureMusicPanelInView() {
    if (!musicState.panelEl || musicState.panelEl.hidden) return;

    var rect = musicState.panelEl.getBoundingClientRect();
    var visualHeight = Math.max(rect.height, musicState.panelEl.scrollHeight || 0);
    if (visualHeight <= 0) return;

    var topSafe = 88;
    var bottomSafe = 24;
    var viewportBottom = window.innerHeight - bottomSafe;
    var maxVisibleHeight = Math.max(120, viewportBottom - topSafe);
    var panelBottom = rect.top + visualHeight;
    var targetTop = null;

    if (visualHeight >= maxVisibleHeight) {
      targetTop = window.scrollY + rect.top - topSafe;
    } else if (panelBottom > viewportBottom) {
      targetTop = window.scrollY + (panelBottom - viewportBottom);
    } else if (rect.top < topSafe) {
      targetTop = window.scrollY + (rect.top - topSafe);
    }

    if (targetTop === null) return;

    targetTop = Math.max(0, Math.round(targetTop));
    if (Math.abs(targetTop - window.scrollY) < 2) return;

    window.scrollTo({
      top: targetTop,
      behavior: 'smooth'
    });
  }

  function scheduleMusicPanelInViewCheck() {
    var token = musicState.panelVisibilityToken + 1;
    musicState.panelVisibilityToken = token;

    window.setTimeout(function () {
      if (token !== musicState.panelVisibilityToken) return;
      ensureMusicPanelInView();
    }, 160);

    window.setTimeout(function () {
      if (token !== musicState.panelVisibilityToken) return;
      ensureMusicPanelInView();
    }, 360);

    window.setTimeout(function () {
      if (token !== musicState.panelVisibilityToken) return;
      ensureMusicPanelInView();
    }, 620);
  }

  function renderMusicPanelContent(album) {
    ensureMusicPanel();
    if (!album || !musicState.panelEl) return;

    musicState.panelEl.setAttribute('aria-label', album.title + ' ' + t('music.by') + ' ' + album.artist);
    musicState.panelTitleEl.textContent = album.title;
    musicState.panelArtistEl.textContent = t('music.by') + ' ' + album.artist;

    musicState.panelLinksEl.innerHTML = '';
    MUSIC_PLATFORMS.forEach(function (platform) {
      var url = album.links && album.links[platform.key] ? album.links[platform.key] : null;
      musicState.panelLinksEl.appendChild(createMusicLink(platform, url));
    });
  }

  function applyMusicPanelHeight(open) {
    if (!musicState.panelEl) return;
    if (!open) {
      clearMusicPanelInlineStyles();
      return;
    }
  }

  function animateMusicPanelOpen(card, done) {
    if (!musicState.panelEl || !card) {
      if (done) done();
      return;
    }

    var panel = musicState.panelEl;
    clearMusicPanelCloseTimer();

    panel.hidden = false;
    panel.classList.remove('is-closing');
    placeMusicPanelAfterCard(card);
    updateMusicPanelArrowPosition(card);

    panel.classList.add('is-open');
    applyMusicPanelHeight(true);
    scheduleMusicRelayout();
    scheduleMusicPanelInViewCheck();
    if (done) done();
  }

  function animateMusicPanelClose(done) {
    if (!musicState.panelEl) {
      if (done) done();
      return;
    }

    var panel = musicState.panelEl;
    clearMusicPanelCloseTimer();
    panel.classList.remove('is-open', 'is-closing', 'is-refreshing');
    clearMusicPanelInlineStyles();
    applyMusicPanelHeight(false);
    panel.hidden = true;
    scheduleMusicRelayout();
    if (done) done();
  }

  function closeMusicPanel(animate) {
    if (!musicState.panelEl) return;

    musicState.panelVisibilityToken += 1;
    musicState.transitionToken += 1;
    if (!animate) {
      animateMusicPanelClose();
      return;
    }

    animateMusicPanelClose();
  }

  function openMusicPanel(card, album) {
    ensureMusicPanel();
    if (!musicState.panelEl || !card || !album) return;

    renderMusicPanelContent(album);

    var token = musicState.transitionToken + 1;
    musicState.transitionToken = token;

    animateMusicPanelOpen(card, function () {
      if (token !== musicState.transitionToken) return;
    });
  }

  function renderMusicTiles() {
    if (!musicState.galleryEl) return;

    clearMusicPanelCloseTimer();

    var animateIn = !musicState.hasAnimatedIn;
    musicState.galleryEl.innerHTML = '';
    MUSIC_ALBUMS.forEach(function (album, index) {
      musicState.galleryEl.appendChild(createMusicCard(album, index, animateIn));
    });

    musicState.panelEl = null;
    musicState.panelArrowEl = null;
    musicState.panelTitleEl = null;
    musicState.panelArtistEl = null;
    musicState.panelLinksEl = null;

    ensureMusicPanel();

    if (musicState.activeId) {
      var selectedAlbum = findMusicAlbumById(musicState.activeId);
      var selectedCard = getMusicCardById(musicState.activeId);
      if (selectedAlbum && selectedCard) {
        setMusicSelectionState(musicState.activeId);
        renderMusicPanelContent(selectedAlbum);
        placeMusicPanelAfterCard(selectedCard);
        musicState.panelEl.classList.remove('is-closing');
        musicState.panelEl.classList.add('is-open');
        applyMusicPanelHeight(true);
        musicState.panelEl.hidden = false;
      }
    } else if (musicState.panelEl) {
      musicState.panelEl.hidden = true;
    }

    scheduleMusicRelayout();

    musicState.hasAnimatedIn = true;
  }

  function selectMusicAlbum(id) {
    var album = findMusicAlbumById(id);
    if (!album) return;

    var card = getMusicCardById(id);
    if (!card) return;

    if (musicState.activeId === id) {
      musicState.activeId = null;
      setMusicSelectionState(null);
      closeMusicPanel(true);
      return;
    }

    musicState.activeId = id;
    setMusicSelectionState(id);
    openMusicPanel(card, album);

    // Keep interaction stable: avoid auto-scroll jumps.
  }

  function realignMusicPanel() {
    if (!musicState.activeId || !musicState.panelEl || !musicState.panelEl.classList.contains('is-open')) return;

    var card = getMusicCardById(musicState.activeId);
    if (!card) return;
    placeMusicPanelAfterCard(card);
    updateMusicPanelArrowPosition(card);
    applyMusicPanelHeight(true);
    scheduleMusicRelayout();
  }

  function updateMusicCardsAria() {
    var tiles = musicState.galleryEl ? musicState.galleryEl.querySelectorAll('.music-tile') : [];
    tiles.forEach(function (tile) {
      var id = tile.getAttribute('data-album-id');
      var album = findMusicAlbumById(id);
      if (!album) return;
      tile.setAttribute('aria-label', album.title + ' ' + t('music.by') + ' ' + album.artist);
    });
  }

  function handleMusicResize() {
    if (!musicState.initialized) return;

    if (musicState.resizeTimer) {
      window.clearTimeout(musicState.resizeTimer);
    }

    musicState.resizeTimer = window.setTimeout(function () {
      realignMusicPanel();
      scheduleMusicRelayout();
    }, 120);
  }

  function initMusicGallery() {
    var galleryEl = document.getElementById('music-gallery');

    if (!galleryEl) return;

    musicState.galleryEl = galleryEl;
    musicState.initialized = true;

    renderMusicTiles();

    galleryEl.addEventListener('click', function (event) {
      var tile = event.target.closest('.music-tile');
      if (!tile || !galleryEl.contains(tile)) return;
      var id = tile.getAttribute('data-album-id');
      if (!id) return;
      if (!findMusicAlbumById(id)) return;
      selectMusicAlbum(id);
    });

    window.addEventListener('load', relayoutMusicMasonry);

    musicState.galleryEl.querySelectorAll('.music-tile-cover').forEach(function (image) {
      if (image.complete) return;
      image.addEventListener('load', scheduleMusicRelayout, { once: true });
      image.addEventListener('error', scheduleMusicRelayout, { once: true });
    });

    window.addEventListener('resize', handleMusicResize);
  }

  function refreshMusicGalleryLanguage() {
    if (!musicState.initialized) return;

    updateMusicCardsAria();

    if (musicState.activeId) {
      var album = findMusicAlbumById(musicState.activeId);
      var card = getMusicCardById(musicState.activeId);
      if (album && card) {
        renderMusicPanelContent(album);
        musicState.panelEl.hidden = false;
        musicState.panelEl.classList.remove('is-closing');
        musicState.panelEl.classList.add('is-open');
        placeMusicPanelAfterCard(card);
        applyMusicPanelHeight(true);
        updateMusicPanelArrowPosition(card);
        scheduleMusicPanelInViewCheck();
      }
    } else if (musicState.panelEl) {
      musicState.panelEl.classList.remove('is-open', 'is-closing', 'is-refreshing');
      musicState.panelEl.hidden = true;
    }

    scheduleMusicRelayout();
  }

  function getTranslation(language, key) {
    var node = I18N[language];
    if (!node) return null;

    var parts = key.split('.');
    for (var i = 0; i < parts.length; i += 1) {
      if (!node || !Object.prototype.hasOwnProperty.call(node, parts[i])) {
        return null;
      }
      node = node[parts[i]];
    }

    return typeof node === 'string' ? node : null;
  }

  function t(key) {
    var value = getTranslation(currentLanguage, key);
    if (value !== null) return value;

    var fallback = getTranslation(DEFAULT_LANGUAGE, key);
    if (fallback !== null) return fallback;

    return key;
  }

  function normalizeLanguage(language) {
    return language === 'fr' ? 'fr' : DEFAULT_LANGUAGE;
  }

  function getSystemPreference() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day';
  }

  function updateThemeMeta(theme) {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) return;
    meta.setAttribute('content', theme === 'night' ? '#0d1716' : '#fff8f0');
  }

  function updateToggleLabels(isNight) {
    var label = isNight ? t('theme.switchToDay') : t('theme.switchToNight');
    var toggles = document.querySelectorAll('.theme-toggle');
    toggles.forEach(function (toggle) {
      toggle.setAttribute('aria-label', label);
    });
  }

  function applyTheme(theme) {
    if (theme === 'night') {
      HTML.setAttribute('data-theme', 'night');
    } else {
      HTML.removeAttribute('data-theme');
    }

    updateToggleLabels(theme === 'night');
    updateThemeMeta(theme);
  }

  function getStoredTheme() {
    try {
      return localStorage.getItem(THEME_STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (e) {
    }
  }

  function cycleTheme() {
    var current = HTML.getAttribute('data-theme') === 'night' ? 'night' : 'day';
    var next = current === 'night' ? 'day' : 'night';
    setStoredTheme(next);
    applyTheme(next);
  }

  function initTheme() {
    var stored = getStoredTheme();
    if (stored) {
      applyTheme(stored);
    } else {
      applyTheme(getSystemPreference());
    }
  }

  function setStoredLanguage(language) {
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch (e) {
    }
  }

  function getStoredLanguage() {
    try {
      var stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      return stored ? normalizeLanguage(stored) : null;
    } catch (e) {
      return null;
    }
  }

  function setLanguageSwitchState(language) {
    var buttons = document.querySelectorAll('[data-lang-option]');
    buttons.forEach(function (button) {
      var buttonLanguage = button.getAttribute('data-lang-option');
      var isActive = buttonLanguage === language;
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      button.disabled = isActive;
    });
  }

  function applyLanguageAttributes() {
    var textNodes = document.querySelectorAll('[data-i18n]');
    textNodes.forEach(function (node) {
      var key = node.getAttribute('data-i18n');
      node.textContent = t(key);
    });

    var htmlNodes = document.querySelectorAll('[data-i18n-html]');
    htmlNodes.forEach(function (node) {
      var key = node.getAttribute('data-i18n-html');
      node.innerHTML = t(key);
    });

    var ariaNodes = document.querySelectorAll('[data-i18n-aria-label]');
    ariaNodes.forEach(function (node) {
      var key = node.getAttribute('data-i18n-aria-label');
      node.setAttribute('aria-label', t(key));
    });

    var altNodes = document.querySelectorAll('[data-i18n-alt]');
    altNodes.forEach(function (node) {
      var key = node.getAttribute('data-i18n-alt');
      node.setAttribute('alt', t(key));
    });

    var contentNodes = document.querySelectorAll('[data-i18n-content]');
    contentNodes.forEach(function (node) {
      var key = node.getAttribute('data-i18n-content');
      node.setAttribute('content', t(key));
    });
  }

  function applyLanguage(language) {
    currentLanguage = normalizeLanguage(language);
    HTML.setAttribute('lang', currentLanguage);

    applyLanguageAttributes();
    document.title = t('meta.title');
    setLanguageSwitchState(currentLanguage);
    updateToggleLabels(HTML.getAttribute('data-theme') === 'night');
    refreshMusicGalleryLanguage();
  }

  function initLanguageSwitch() {
    var buttons = document.querySelectorAll('[data-lang-option]');
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        var language = normalizeLanguage(button.getAttribute('data-lang-option'));
        if (language === currentLanguage) return;
        setStoredLanguage(language);
        applyLanguage(language);
      });
    });
  }

  function initLanguage() {
    var stored = getStoredLanguage();
    applyLanguage(stored || DEFAULT_LANGUAGE);
    initLanguageSwitch();
  }

  function initScrollReveal() {
    var reveals = document.querySelectorAll('.reveal');
    if (!reveals.length || !('IntersectionObserver' in window)) {
      reveals.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  }

  function initNavScroll() {
    var nav = document.querySelector('.desert-nav');
    if (!nav) return;

    var scrolled = false;
    window.addEventListener('scroll', function () {
      var now = window.scrollY > 20;
      if (now !== scrolled) {
        scrolled = now;
        nav.classList.toggle('scrolled', scrolled);
      }
    }, { passive: true });
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }

    return new Promise(function (resolve, reject) {
      try {
        var temp = document.createElement('textarea');
        temp.value = text;
        temp.setAttribute('readonly', '');
        temp.style.position = 'absolute';
        temp.style.left = '-9999px';
        document.body.appendChild(temp);
        temp.select();
        var ok = document.execCommand('copy');
        document.body.removeChild(temp);
        if (ok) resolve();
        else reject(new Error('copy failed'));
      } catch (err) {
        reject(err);
      }
    });
  }

  function initCopyButtons() {
    var copyCards = document.querySelectorAll('[data-copy]');
    copyCards.forEach(function (card) {
      card.addEventListener('click', function () {
        var textToCopy = card.getAttribute('data-copy');
        var subtitleEl = card.querySelector('.link-tile-subtitle');
        if (!textToCopy || !subtitleEl) return;

        var originalText = subtitleEl.textContent;
        copyToClipboard(textToCopy).then(function () {
          subtitleEl.textContent = t('copy.success');
          card.classList.add('is-copied');
          window.setTimeout(function () {
            subtitleEl.textContent = originalText;
            card.classList.remove('is-copied');
          }, 1800);
        }).catch(function () {
          subtitleEl.textContent = t('copy.error');
          window.setTimeout(function () {
            subtitleEl.textContent = originalText;
          }, 1800);
        });
      });

      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initLanguage();
    initTheme();
    initScrollReveal();
    initNavScroll();
    initCopyButtons();
    initMusicGallery();

    var toggles = document.querySelectorAll('.theme-toggle');
    toggles.forEach(function (toggle) {
      toggle.addEventListener('click', cycleTheme);
    });
  });
})();
