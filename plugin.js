/*
*   Plugin developed by CTRL+N.
*
 *   LICENCE: Creative Commons Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0)
 *   https://creativecommons.org/licenses/by-nd/4.0/
 *   NON-COMMERCIAL PLUGIN.
*
*   Website: https://www.ctrplusn.net/
*   Facebook: https://www.facebook.com/ctrlplusn.net/
*
*/
CKEDITOR.plugins.add('videoembed', {
    icons: 'videoembed',
    lang:'fr,en',
    version: 1.0,
    init: function (editor) {
        // Command
        editor.addCommand('videoembed', new CKEDITOR.dialogCommand('videoembedDialog'));
        // Toolbar button
        editor.ui.addButton('VideoEmbed', {
            label: editor.lang.videoembed.button,
            command: 'videoembed',
            toolbar: 'insert'
        });
        // Dialog window
        CKEDITOR.dialog.add( 'videoembedDialog', this.path + 'dialogs/videoembedDialog.js' );
    }
});