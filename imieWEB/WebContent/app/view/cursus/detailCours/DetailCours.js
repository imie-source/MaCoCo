Ext.define('ExtJsMVC.view.cursus.detailCours.DetailCours', {
    extend : 'Ext.form.Panel',
    xtype : 'cursus-DetailCours',
    store: 'CursusStore',
    title : 'Detail Cours',
    requires : [
	            'ExtJsMVC.view.cursus.detailCours.DetailCoursCursusViewController',
	],
	
	controller : 'DetailCoursCursusViewController',
    frame : true,
    padding : 10,
    
    items : 
    [
        {
        	id : 'seleniumDetailCoursNom',
        	itemId : 'detailCoursNom',
            xtype : 'textareafield',
            name : 'text',
            fieldLabel : 'Intitule',
            bind:'{currentSecondTreeItem.text}',
            width : 500
        },
        {
        	id : 'seleniumDetailCoursDuree',
            xtype : 'textfield',
            name : 'cocDuree',
            bind:'{currentSecondTreeItem.cocDuree}',
            fieldLabel : 'Duree'
        },
        {
        	id : 'seleniumDetailCoursType',
            xtype : 'textfield',
            name : 'cocType',
            bind:'{currentSecondTreeItem.cocType}',
            fieldLabel : 'Type'
        },
        {
        	id : 'seleniumDetailCoursObj',
            xtype : 'textareafield',
            name : 'cocObjectifs',
            fieldLabel : 'Objectifs',
            bind:'{currentSecondTreeItem.cocObjectifs}',
            width : 500,
            height : 100
        },
        {
        	id : 'seleniumDetailCoursEval',
            xtype : 'textfield',
            name : 'cocEvaluation',
            fieldLabel : 'Evaluation',
            bind:'{currentSecondTreeItem.cocEvaluation}',
            width : 500
        },
        {
        	id : 'seleniumDetailCoursComm',
            xtype : 'textareafield',
            name : 'cocCommentaires',
            fieldLabel : 'Commentaires',
            bind:'{currentSecondTreeItem.cocCommentaires}',
            width : 500,
            height : 100
        },
        {
        	id : 'seleniumDetailCoursSave',
            xtype : 'button',
            text : 'Enregistrer',
            itemId : 'SaveRecord',
            handler : 'onSaveCoursCursusClick',
            disabled:true,
			bind:{
				disabled:'{!itemStatus.dirtyAndValid}'
			},
        },
        {
        	itemId : 'detailBottomView',
        	layout : 
  			{
        		type  : 'hbox'
    
  			},
        }
        ],
});