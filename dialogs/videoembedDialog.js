/*
*   Plugin developed by CTRL+N.
*
*   LICENCE: GPL, LGPL, MPL
*   NON-COMMERCIAL PLUGIN.
*
*   Website: https://www.ctrplusn.net/
*   Facebook: https://www.facebook.com/ctrlplusn.net/
*
*/
CKEDITOR.dialog.add('videoembedDialog', function (editor) {
    return {
        title: 'Video URL',
        minWidth: 400,
        minHeight: 200,
        contents: [
            {
                id: 'tab-basic',
                label: 'Basic Settings',
                elements: [
                    {
                        type: 'text',
                        id: 'url_video',
                        label: 'Video URL',
                        validate: CKEDITOR.dialog.validate.notEmpty("Empty!")
                    }
                ]
            }
        ],
        onOk: function () {
            var dialog = this;
            var div = new CKEDITOR.dom.element('div');
            div.setAttribute('class', 'videoEmbed');

            var url = detect(dialog.getValueOf('tab-basic', 'url_video'));
            var iframe = new CKEDITOR.dom.element.createFromHtml('<iframe frameborder="0" width="560" height="349" src="' + url + '" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');

            div.append(iframe);
            editor.insertElement(div);
        }
    };
});
function detect(url) {
    embed_url = '';
    if (url.indexOf('youtube') > 0) {
        id = url.substring(url.lastIndexOf("?v=") + 3, url.length);
        var embed_url = 'https://www.youtube.com/embed/' + id;
    }
    if (url.indexOf('vimeo') > 0) {
        id = url.substring(url.lastIndexOf("/") + 1, url.length);
        var embed_url = 'https://player.vimeo.com/video/' + id + '?badge=0';
    }
    if (url.indexOf('dailymotion') > 0) {
        id = url.substring(url.lastIndexOf("/") + 1, url.length);
        var embed_url = 'https://www.dailymotion.com/embed/video/' + id;
    }
    return embed_url;
}


