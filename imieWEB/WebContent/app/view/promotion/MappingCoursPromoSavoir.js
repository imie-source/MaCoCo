Ext.define('ExtJsMVC.view.promotion.MappingCoursPromoSavoir', {
	extend : 'Ext.form.Panel',
	xtype : 'promo-MappingCoursSavoir',
	store: 'PromotionStore',
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