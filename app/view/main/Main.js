var shortLorem =
    '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed metus nibh, '+
    'sodales a, porta at, vulputate eget, dui. Pellentesque ut nisl. Maecenas tortor turpis, interdum non, sodales '+
    'non, iaculis ac, lacus. Vestibulum auctor, tortor quis iaculis malesuada, libero lectus bibendum purus, sit amet '+
    'tincidunt quam turpis vel lacus. In pellentesque nisl non sem. Suspendisse nunc sem, pretium eget, cursus a, fringilla.</p>';

/**
 * A sample portal layout application class.
 */
Ext.define('albums.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype:'albums-main',
    requires: [
        'Ext.plugin.Viewport',
        'Ext.layout.container.Border'
    ],

    layout: {
        type: 'border'
    },
    plugins: 'viewport',
    controller: 'main',

    items: [{
        id: 'albums-header',
        xtype: 'albums-header',
        region: 'north'
    },{
        id: 'app-options',
        title: '选项',
        region: 'west',
        animCollapse: true,
        width: 250,
        minWidth: 150,
        maxWidth: 400,
        split: true,
        collapsible: true,
        layout:{
            type: 'accordion',
            animate: true
        },
        items: [{
            xtype: 'albums-main-photo',
            title:'照片',
            scrollable: true,
            border: false,
            glyph: '9798@'
            //iconCls: 'nav'
        },{
            title:'更多功能',
            html: '<div class="portlet-content">' + shortLorem + '</div>',
            border: false,
            scrollable: true,
            iconCls: 'settings'
        }]
    },{
        region: 'center',
        // html:'<div id="centernRoom"></div>',
        xtype:'centerPanel'
    }]
});
