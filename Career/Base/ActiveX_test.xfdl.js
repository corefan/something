(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("ActiveX_test");
                this.set_classname("ActiveX_test");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ActiveX("ActiveX00", "absolute", "16", "17", "649", "447", null, null, this);
            obj.set_codebase("http://211.254.32.45:9090/Career/rdviewer50.cab#version=5,0,0,258");
            obj.set_progid("{ADB6D20D-80A1-4AA4-88AE-B2DC820DA076}");
            obj.getSetter("style").set("border:3px solid red ;bordertype:round 20 20 ;opacity:60;shadow:outer 5,5 5 darkorange;");
            obj.set_taborder("0");
            obj.getSetter("usepersistdata").set("true");
            obj.set_pluginsrc("http://211.254.32.45:9090/Career/rdviewer50.cab#version=5,0,0,258");
            obj._setContents("");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("ActiveX_test");
            		p.getSetter("inheritanceid").set("");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("ActiveX_test.xfdl");

       
    };
}
)();
