Ext.define('albums.view.main.Photo', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.layout.container.VBox'
    ],
    xtype: 'albums-main-photo',

    layout: {
        type: 'vbox'
    },

    bodyPadding: 10,

    defaults: {
        frame: false
        // bodyPadding: 10
    },

    items: [{
        flex: 1.5,
        layout:'hbox',
        items:[{
            flex:1,
            margin: '0 -30 0 -50',
            xtype: 'fileuploadfield', // Same as filefield above
            buttonOnly: true,
            buttonText:'添加照片',
            hideLabel: true,
            text:'11'
        },{
            flex:1,
            xtype: 'button', // Same as filefield above
            buttonOnly: true,
            hideLabel: true,
            text:'自动排版'
        }]
    },{
        flex: 1,
        margin: '-30 0 0 0',
        xtype: 'checkboxfield',
        boxLabel: '隐藏已经添加的照片'
    },{
        flex: 8,
        frame:true,
        // html:'11111111111111111111111',
        width: '100%',
        xtype: 'imageview',
        trackOver: false
    }]
});