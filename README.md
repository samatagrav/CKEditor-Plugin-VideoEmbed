# CKEdito : VideoEmbed Plugin
Intégrer facilement des vidéos de Youtube, Vimeo et Dailymotion dans votre éditeur CKEditor.

## Installation
`config.extraPlugins = 'videoembed';`

## Utilisation
Entrer simplement l'adresse d'une vidéo dans le champs, exemple :https://www.youtube.com/watch?v=EOIvnRUa3ik. Le Plugin se chargera d'apadter le code automatiquement si la vidéo vient de youtube, dailymotion ou vimeo.

## Video Responsive
Un peu de CSS pour rendre les vidéos en iframe responsive.
```sass
.videoEmbed {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
    
    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}
```
