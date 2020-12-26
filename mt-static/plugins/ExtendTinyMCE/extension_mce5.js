(function ($) {

var config   = MT.Editor.TinyMCE.config;
var base_url = StaticURI + 'plugins/ExtendTinyMCE/';

// TinyMCEで利用するプラグイン
var add_plugins = ',table,template';

// ボタン - 1段目
// https://www.tiny.cloud/docs/advanced/editor-control-identifiers/#toolbarcontrols
var buttons1;
if (config.plugin_mt_wysiwyg_buttons1.indexOf('template') > -1) {
    buttons1 = config.plugin_mt_wysiwyg_buttons1;
} else {
    buttons1 = config.plugin_mt_wysiwyg_buttons1 + ' | template';
}

// ボタン - 2段目
var buttons2 = config.plugin_mt_wysiwyg_buttons2.replace('| mt_fullscreen', 'fontsizeselect | mt_fullscreen');

// スタイルプルダウンの定義
// 任意のstyle属性値やclass属性値を付与した要素が挿入可能になる
// https://www.tiny.cloud/docs/configure/content-formatting/#style_formats
// var styles = [
//         { title: 'セクション', block: 'section', wrapper: true, merge_siblings: false },
//         { title: '画像ブロック', block: 'div', wrapper: true, merge_siblings: false, classes: 'clearfix' }
//     ];

// フォントサイズプルダウンの定義
// スペース区切りで指定
// https://www.tinymce.com/docs/configure/content-formatting/#fontsize_formats
var fontsize_formats = '12px 14px 16px 18px 20px';

// 書式プルダウンの定義
// カンマ区切りで要素を指定
// https://www.tiny.cloud/docs/configure/content-formatting/#block_formats
// var blockformats = '段落=p;見出し2=h2;見出し3=h3';

// テンプレートリスト
// 記事の定型文を設定した場合、記事編集画面では定型文がリストアップされます。
// （テンプレートの設定内容は表示されません。）
var tmpl_base_url = parent.window.StaticURI + 'plugins/ExtendTinyMCE/tmpl/';
var tmpl_list = new Array(
        { title: "Image Left", description: "画像左パターンです。", url: tmpl_base_url + "image_left.html" }
    );

if (config.templates) {
    tmpl_list = tmpl_list.concat(config.templates);
}

var convert_urls = true;    // 相対パスを利用する場合はfalseに変更します。
var remove_script_host = true;
var relative_urls = false;
var element_format = 'html';
var schema = "html5";

$.extend(config, {
    plugins: config.plugins + add_plugins,
    plugin_mt_wysiwyg_buttons1: buttons1,
    plugin_mt_wysiwyg_buttons2: buttons2,
    // style_formats: styles,
    fontsize_formats: fontsize_formats,
    // block_formats: blockformats,
    templates: tmpl_list,
    convert_urls: convert_urls,
    remove_script_host: remove_script_host,
    relative_urls: relative_urls,
    element_format: element_format,
    end_container_on_empty_block: true,    // End container block element when pressing enter inside an empty block
    schema: schema
});

}(jQuery));
