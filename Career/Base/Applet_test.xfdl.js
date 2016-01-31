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
                this.set_name("Applet_test");
                this.set_classname("Applet_test");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,580,386);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new AppletComp("AppletComp01", "absolute", "29", "24", "387", "161", null, null, this);
            obj.set_code("Clock.class");
            obj.set_codebase("http://172.10.12.61:8080/xplatform9-ajax/projects/REQ24399/");
            obj.getSetter("popupstyle").set("false");
            obj.set_archive("Clock.jar");
            obj.getSetter("contents").set("<Contents>\n  <Param name=\"bgcolor\"/>\n  <Param name=\"fgcolor1\"/>\n  <Param name=\"fgcolor2\"/>\n</Contents>");
            obj.getSetter("style").set("border:3px solid red ;bordertype:round 20 20 ;opacity:60;shadow:outer 5,5 5 darkorange;");
            obj.getSetter("anchor").set("");
            obj._setContents("<Param name=\"bgcolor\" value=\"\"/><Param name=\"fgcolor1\" value=\"\"/><Param name=\"fgcolor2\" value=\"\"/>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "435", "26", "139", "46", null, null, this);
            obj.set_taborder("1");
            obj.set_text("applet_settting");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 580, 386, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("Applet_test");
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
        this.registerScript("Applet_test.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.AppletComp01.set_codebase("http://172.10.12.61:9090/Career/");
        	this.AppletComp01.set_code("Clock.class");
        	this.AppletComp01.set_archive("Clock.jar");
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);

        };

        this.loadIncludeScript("Applet_test.xfdl");

       
    };
}
)();
