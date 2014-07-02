Ext.define('ExtJsMVC.view.cursus.DetailCours', {
    extend : 'Ext.form.Panel',
    xtype : 'cursus-DetailCours',
    store: 'CursusStore',
    title : 'Detail Cours',
    frame : true,
    padding : 10,
    
    items : 
    [
        {
        	itemId : 'detailCoursNom',
            xtype : 'textfield',
            name : 'text',
            fieldLabel : 'Intitule'
        },
        {
            xtype : 'textfield',
            name : 'cocDuree',
            fieldLabel : 'Duree'
        },
        {
            xtype : 'textfield',
            name : 'cocType',
            fieldLabel : 'Type'
        },
        {
            xtype : 'textfield',
            name : 'cocObjectifs',
            fieldLabel : 'Objectifs'
        },
        {
            xtype : 'textfield',
            name : 'cocEvaluation',
            fieldLabel : 'Evaluation'
        },
        {
            xtype : 'textfield',
            name : 'cocCommentaires',
            fieldLabel : 'Commentaires'
        },
        {
            xtype : 'button',
            text : 'Valider',
            itemId : 'SaveRecord'
        }
    ]
});