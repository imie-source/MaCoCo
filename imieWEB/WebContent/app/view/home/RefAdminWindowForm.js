Ext.define('ExtJsMVC.view.home.RefAdminWindowForm',{
	extend:'Ext.form.Panel',
	alias:'widget.refAdminWindowForm',
	requires:[
	          'Ext.form.field.Text'
	],

	bodyPadding:10,
	bind:{
		title:'<b>{currentReferentiel.refNom}</b>'
	},
	id : 'refAdminWindowForm',
	modelValidation:true,
	fieldDefaults:{
		labelWidth:70,
		labelAlign:'right',
		selectOnFocus:true,
		flex:1,
		anchor:'100%'
	},
	items:[{
				fieldLabel:'Référentiel',
				bind:'{currentReferentiel.refNom}',
				xtype:'textfield'
			
		}],
		
		buttons:[{
			text:'Enregistrer',
			handler:'onCommit',
			glyph:0xf00c,
			disabled:true,
			bind:{
				disabled:'{!refStatus.dirtyAndValid}'
			}
		},
		{
			text:'Annuler',
			handler:'onReject',
			glyph:0xf0e2,
			
		},

		]
	
});
