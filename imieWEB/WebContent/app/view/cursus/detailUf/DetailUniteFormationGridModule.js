Ext.define('ExtJsMVC.view.cursus.detailUf.DetailUniteFormationGridModule', {
    extend : 'ExtJsMVC.view.cursus.grilleEnfant.CursusChildrenGrid',
    xtype  : 'test',
    
    title   : 'Module',
    frame   : true,
    padding : 10,
    bind:{
    	store:'{moduleStore}',
	},
});