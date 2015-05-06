Ext.define('ExtJsMVC.view.home.CursusAdminWindowForm',{
	extend:'Ext.form.Panel',
	alias:'widget.cursusAdminWindowForm',
	requires:[
	          'Ext.form.field.Text',
	],

	resizable : true,
	draggable : true,
	floating : true,
	width : 500,
	height : 200,
	shadow : 'sides',
	bodyPadding:10,
	id : 'cursusAdminWindowForm',
	modelValidation:true,
	fieldDefaults:{
		labelWidth:200,
		labelAlign:'right',
		selectOnFocus:true,
		flex:1,
		anchor:'100%'
	},
	items:[{
				fieldLabel:'Cursus',
				bind:'{currentCursus.curNom}',
				xtype:'textfield'
			},
			{
				fieldLabel:'Sélectionner un référentiel',
				displayField : 'refNom',

				valueField : 'refId',
				store : {
					model:'ExtJsMVC.model.referentiel.Referentiel',
					autoLoad:true
				},

				xtype:'combobox',
				queryMode : 'remote',
				bind:'{currentCursus.refId}',
				

		}
			],
		
		buttons:[{
			text:'Enregistrer',
			handler:'onCommit',
			glyph:0xf00c,
			disabled:true,
			bind:{
				disabled:'{!cursusStatus.dirtyAndValid}'
			}
		},
		{
			text:'Annuler',
			handler:'onReject',
			glyph:0xf0e2,

		},

		]
	
});
