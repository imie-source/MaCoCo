Ext.define('ExtJsMVC.view.cursus.detailCours.MappingCoursCursusEnseignement', {
	extend : 'Ext.form.Panel',
	xtype : 'cursus-MappingCoursEnseignement',
	store: 'CursusStore',
	title : 'Liaison Cours-Enseignement',
	frame : true,
	padding : 10,
    tpl:  new Ext.XTemplate('<tpl for="enseignements">' +
			'<div class="enseignement">hello</div>' +
			'</tpl>'),
	itemSelector: 'div.enseignement',
	overItemCls: 'enseignement-over',
	selectedItemClass: 'enseignement-selected',
	singleSelect: true
    

}); 