Ext.define('KitchenSink.view.draw.Intersections', {
    extend: 'Ext.panel.Panel',
    xtype: 'centerPanel',

    requires: [
        'Ext.panel.Panel',
        'Ext.dd.DDTarget'
    ],

    id:'centerContainer',
    layout: 'absolute',
    defaults: {
        bodyPadding: 15,
        width: 200,
        height: 100,
        frame: true
    },
    items: [
        {
            title: 'Panel 1',
            x: 50,
            y: 50,
            html: 'Positioned at x:50, y:50'
        },
        {
            // title: 'Panel 2',
            x: 125,
            y: 125,
            draggable:true,
            resizable:true,
            xtype: 'image',
            style: {
                'transform': 'rotate(45deg)'
                // '-ms-transform': 'rotate(45deg)',
                // '-moz-transform': 'rotate(45deg)',
                // '-webkit-transform': 'rotate(45deg)',
                // '-o-transform': 'rotate(45deg)'
            },
            src: 'http://www.sencha.com/img/20110215-feat-html5.png'
        },
        {
            // update the innerHTML of the bound element
            // when editing completes
            updateEl: true,
            alignment: 'l-l',
            autoSize: {
                width: 'boundEl'
            },
            field: {
                xtype: 'textfield'
            },
            xtype: 'editor',
            x: 145,
            y: 135,
            value:'333'
        }
    ],
    initComponent: function() {
        // constrainedWin.show();
        // constrainedWin2.show();
        // var dd = new Ext.dd.DragDrop("centerContainer", "organizerDD");

        var overrides = {
            onDragEnter: function (e, id) {
                alert(11);
            },
            onMouseUp: function(e) {
                alert(11);
            }
        };
        //we set the drop targets
        var mainTarget = Ext.create('Ext.dd.DDTarget', 'centerContainer', 'organizerDD', {
            ignoreSelf: false
        });

        Ext.apply(mainTarget, overrides);
        this.callParent();
    }
});