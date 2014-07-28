Ext.define('ExtJsMVC.view.cursus.MappingCoursCursusSavoir', {
	extend : 'Ext.form.Panel',
	xtype : 'cursus-MappingCoursSavoir',
	store: 'CursusStore',
	title : 'Liaison Cours-Savoir',
	frame : true,
	padding : 10,
    tpl:  new Ext.XTemplate('<tpl for="savoirs">' +
			'<div class="savoir">hello</div>' +
			'</tpl>'),
	itemSelector: 'div.savoir',
	overItemCls: 'savoir-over',
	selectedItemClass: 'savoir-selected',
	singleSelect: true
    

}); 
        
//        Ext.create('Ext.view.View',  {
//            cls: 'savoir-view',
//
//           /* store: patientStore,*/
//            /*listeners: {
//                render: initializePatientDragZone
//            }*/
//        });