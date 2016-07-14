/**
 * @class Ext.org.ImageView
 * @extends Ext.view.View
 * @xtype imageview
 *
 * This class implements the "My Images" view (the images in the organizer). This class
 * incorporates {@link Ext.ux.DataView.Draggable Draggable} to enable dragging items as
 * well as {@link Ext.ux.DataView.DragSelector DragSelector} to allow multiple selection
 * by simply clicking and dragging the mouse.
 */
Ext.define('Ext.org.ImageView', {
    extend: 'Ext.view.View',
    alias : 'widget.imageview',
    requires: ['Ext.data.Store'],
    mixins: {
        dragSelector: 'Ext.ux.DataView.DragSelector',
        draggable   : 'Ext.ux.DataView.Draggable'
    },
    // controller: 'imageView',
    tpl: [
        '<tpl for=".">',
            '<div class="thumb-wrap">',
                '<div class="thumb">',
                    '<img src="../resources/icons/{thumb}" />',
                '</div>',
                '<span>{name}</span>',
            '</div>',
        '</tpl>'
    ],

    id:'main-imageviewContainer',
    itemSelector: 'div.thumb-wrap',
    multiSelect: false,
    singleSelect: true,
    cls: 'x-image-view',
    scrollable: 'vertical',

    initComponent: function() {
        this.store = new Ext.data.Store({
            autoLoad: true,
            model: 'Ext.org.Image',
            proxy: {
                type: 'ajax',
                url : '../resources/icons.json',
                reader: {
                    type: 'json'
                }
            }
        });

        this.mixins.dragSelector.init(this);
        this.mixins.draggable.init(this, {
            ddConfig: {
                ddGroup: 'organizerDD',
                onEndDrag: function (data, e) {
                    // alert(this.invalidDrop);
                    if(!this.invalidDrop) {
                        var x = e.getX();
                        var y = e.getY();
                        // var src = data.get('thumb');
                        // alert(src);
                        var src = '../resources/icons/' + data.records[0].data.thumb;
                        var name = data.records[0].data.name;
                        var imageView = Ext.getCmp('main-imageviewContainer');
                        var imageStore = imageView.getStore();
                        var delImage = imageStore.getById(name);
                        imageStore.remove(delImage);
                        var centerContainer = Ext.getCmp('centerContainer');
                        var image = Ext.create('Ext.Img', {
                            src: src,
                            width: 120,
                            height: 90,
                            draggable: {
                                constrain: true,
                                constrainTo: centerContainer
                            },
                            resizable:true,
                            x: x-250,
                            y: y-52
                        });
                        centerContainer.add(image);
                    }
                    delete this.invalidDrop;
                },
                beforeInvalidDrop : function(target, e, id) {
                    // Set a flag to invoke the animated repair
                    this.invalidDrop = true;
                }
            },
            ghostTpl: [
                '<tpl for=".">',
                    '<img src="../view/chooser/icons/{thumb}" />',
                    '<tpl if="xindex % 4 == 0"><br /></tpl>',
                '</tpl>',
                '<div class="count">',
                    '{[values.length]} images selected',
                '<div>'
            ]
        });

        //we set the drop targets
        // var mainTarget = Ext.create('Ext.dd.DDTarget', 'panel-1018-innerCt', 'organizerDD', {
        //     ignoreSelf: false
        // });


        this.callParent();
    }
});