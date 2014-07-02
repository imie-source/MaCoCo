Ext.define('ExtJsMVC.view.cursus.LiaisonReferentielEnseignement', {
    extend : 'Ext.form.Panel',
    xtype : 'cursus-LiaisonReferentielEnseignement',
    store: 'CursusStore',
    title : 'Liaison Referentiel-Enseignement',
    frame : true,
    padding : 10,
    
    items : 
    [

        {
            xtype : 'button',
            text : ' + ',
            itemId : 'SaveRecord'
        }
    ]
}); 