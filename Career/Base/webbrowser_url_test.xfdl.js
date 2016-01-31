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
                this.set_name("webbrowser_url_test");
                this.set_classname("webbrowser_url_test");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }
            this.getSetter("inheritanceid").set("");

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser00", "absolute", "84", "60", "458", "320", null, null, this);
            obj.set_taborder("0");
            obj.style.set_border("3px solid red");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "552", "16", "415", "63", null, null, this);
            obj.set_taborder("1");
            obj.set_text("http://172.10.12.61:9090/XP13/sample3/first.html");
            this.addChild(obj.name, obj);

            obj = new Button("Button03", "absolute", "568", "109", "393", "59", null, null, this);
            obj.set_taborder("4");
            obj.set_text("contentWindow.document.write(\"qweweqeffdfdf\")");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "566", "192", "402", "65", null, null, this);
            obj.set_taborder("5");
            obj.set_text("www.naver.com");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("webbrowser_url_test");
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
        this.registerScript("webbrowser_url_test.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	this.WebBrowser00.set_url("http://172.10.12.61:9090/XP13/sample3/first.html");
        }

        this.WebBrowser00_onloadcompleted = function(obj,e)
        {
        	alert("load complete");
        }

        
        this.Button01_onclick = function(obj,e)
        {
        	alert(this.WebBrowser00.url);
        }

        this.Button02_onclick = function(obj,e)
        {
        	alert(this.WebBrowser00._url);	
        }

        this.Button03_onclick = function(obj,e)
        {
        	if(this.WebBrowser00.document)
        	{	
        		this.WebBrowser00.document.open();
        		this.WebBrowser00.document.write("qweweqeffdfdf");
        		this.WebBrowser00.document.close();
        		alert(this.WebBrowser00.document.location.href);	
        	}else{
        		alert("cross-domain");
        	}
        }

        this.Button04_onclick = function(obj,e)
        {
        	this.WebBrowser00.set_url("www.naver.com");	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.WebBrowser00.addEventHandler("onloadcompleted", this.WebBrowser00_onloadcompleted, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button03.addEventHandler("onclick", this.Button03_onclick, this);
            this.Button04.addEventHandler("onclick", this.Button04_onclick, this);

        };

        this.loadIncludeScript("webbrowser_url_test.xfdl");

       
    };
}
)();
