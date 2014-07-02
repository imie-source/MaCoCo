Ext.define('ExtJsMVC.store.SavoirStore', 
{
	extend : 'Ext.data.TreeStore',
	
	storeId : 'SavoirStore',
	
    model : 'ExtJsMVC.model.RefModel',
	
    root: 
    {	
        text: 'Ref',
        expanded: true,
        children :
		[

			{
				itemId: 1,
			    text: 'AT',
			    children: 
			    [
			    	{
			    		itemId: 1,
				        text: 'savoir 1',
				        leaf: true
			        },
			        {
			        	itemId: 2,
				        text: 'savoir 2',
				        leaf: true
			        },
			        {
			        	itemId: 3,
				        text: 'savoir 3',
				        leaf: true
			        },
			        {
			        	itemId: 4,
				        text: 'savoir 4',
				        leaf: true
			        }
			    ]
			},
			
			{
				itemId: 2,
			    text: 'AT 2',
			    children: 
			    [
			    	{
			    		itemId: 5,
				        text: 'savoir 5',
				        leaf: true
			        },
			        {
			        	itemId: 6,
				        text: 'savoir 6',
				        leaf: true
			        },
			        {
			        	itemId: 7,
				        text: 'savoir 7',
				        leaf: true
			        },
			        {
			        	itemId: 8,
				        text: 'savoir 8',
				        leaf: true
			        }
			    ]
			}
		
		]
	}
});


    
    /*
     proxy: {
         type: 'ajax',
         url: 'savoirs.json',
         reader: {

             type: 'json',
             rootProperty: 'savoirs'
         }
     },
     autoLoad: true
*/


