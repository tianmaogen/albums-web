document.title = 'Ext JS Portal';

Ext.define('albums.view.main.Header', {
    extend: 'Ext.Container',

    xtype: 'albums-header',

    title: document.title,
    cls: 'app-header',
    height: 52,

    layout: {
        type: 'hbox',
        align: 'middle'
    },

    items: [{
        xtype: 'component',
        cls: 'app-header-logo'
    },{
        xtype: 'component',
        cls: 'app-header-title',
        html: document.title,
        flex: 1
    }]
});
