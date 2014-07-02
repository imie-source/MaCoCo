Ext.define('ExtJsMVC.model.cursus.UniteFormationCursusModel',
{
	extend : 'Ext.data.TreeModel',
	fields : [
		         {name: 'ufcId'}, 
		         {name: 'text', mapping: 'ufcNom'}, 
		         {name: 'ufcObjectifs'}, 	
		         {name: 'cursus'}, 	
		         {name: 'children', mapping: 'moduleCursuses'}
		     ],
		     
    belongsTo: [
                {
                	name: 'cursus',
                	instanceName: 'cursus',
                	model: 'ExtJsMVC.model.cursus.CursusModel',
                	getterName:'getCursus',
                	setterName:'setCursus',
                	associationKey: 'cursus',
                	foreignKey: 'cursus'
                }
               ],

		     
	childType : 'ExtJsMVC.model.cursus.ModuleCursusModel',
	hasMany:  {model: 'ExtJsMVC.model.cursus.ModuleCursusModel', name: 'moduleCursuses'},	
		     
     proxy: 
     {
         type: 'rest',
         url: '/imieWEB/webapi/uniteformationcursus/',
    	writer : 
    	{
    		nameProperty: 'mapping',
    		writeAllFields: true,
            transform: 
            {
                fn: function(data, request) 
                {
                    data.id = undefined;
                    data.leaf = undefined;
                    data.parentId = undefined;
                    data.children = undefined;
                    data.text = undefined;
                    return data;
                },
                scope: this
            }
    	} 
     },
     
    pseudoWriting: function()
    {
    	var pseudoWriter = this.getProxy().getWriter();
    	return pseudoWriter.getRecordData(this);
    }
});

