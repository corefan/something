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
                this.set_name("FileUpload_tap_test");
                this.set_classname("FileUpload_tap_test");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset02", this);
            obj.set_firefirstcount("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TEST1\" type=\"STRING\" size=\"256\"/><Column id=\"TEST2\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TEST1\">1</Col><Col id=\"TEST2\">1</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"TEST1\">1</Col><Col id=\"TEST2\">1</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"TEST1\">1</Col><Col id=\"TEST2\">1</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"TEST1\">1</Col><Col id=\"TEST2\">1</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"TEST1\">1</Col><Col id=\"TEST2\">1</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"TEST1\">1</Col><Col id=\"TEST2\">1</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"TEST1\">1</Col><Col id=\"TEST2\">1</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"TEST1\">1</Col><Col id=\"TEST2\">1</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"TEST1\">1</Col><Col id=\"TEST2\">1</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"TEST1\">1</Col><Col id=\"TEST2\">1</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"TEST1\">1</Col><Col id=\"TEST2\">1</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"TEST1\">1</Col><Col id=\"TEST2\">1</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"TEST1\">1</Col><Col id=\"TEST2\">1</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"TEST1\">1</Col><Col id=\"TEST2\">1</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"TEST1\">1</Col><Col id=\"TEST2\">1</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"TEST1\">1</Col><Col id=\"TEST2\">1</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"TEST1\">1</Col><Col id=\"TEST2\">1</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"TEST1\">1</Col><Col id=\"TEST2\">1</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"TEST1\">1</Col><Col id=\"TEST2\">1</Col><Col id=\"Column0\">1</Col></Row><Row><Col id=\"TEST1\">1</Col><Col id=\"TEST2\">1</Col><Col id=\"Column0\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new TextArea("TextArea00", "absolute", "304", "16", "224", "363", null, null, this);
            obj.set_value("//");
            obj.set_tabstop("false");
            obj.set_taborder("6");
            obj.style.set_background("white");
            obj.style.setStyleValue("background", "focused", "skyblue");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload01", "absolute", "14", "32", "274", "116", null, null, this);
            obj.set_taborder("0");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            obj.set_itemcount("8");
            obj.style.set_editbackground("#ffffffb3");
            obj.style.set_buttoncolor("#f24a00ff");
            obj.style.setStyleValue("editbackground", "focused", "yellow");
            obj.style.setStyleValue("buttoncolor", "focused", "royalblue");
            obj.set_uploadurl("http://172.10.12.61:9090/xtest2/fileUpload.jsp");
            obj.set_multiselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "8", "312", "80", "40", null, null, this);
            obj.set_taborder("2");
            obj.set_text("deleteitem");
            obj.style.set_color("#f24a00ff");
            obj.style.setStyleValue("color", "focused", "blue");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "206", "314", "89", "36", null, null, this);
            obj.set_taborder("4");
            obj.set_text("setItem(4)");
            obj.style.set_color("#f24a00ff");
            obj.style.setStyleValue("color", "focused", "blue");
            this.addChild(obj.name, obj);

            obj = new Button("Button02", "absolute", "104", "312", "84", "39", null, null, this);
            obj.set_taborder("3");
            obj.set_text("appendItem");
            obj.style.set_color("#f24a00ff");
            obj.style.setStyleValue("color", "focused", "blue");
            this.addChild(obj.name, obj);

            obj = new Button("Button04", "absolute", "199", "192", "82", "41", null, null, this);
            obj.set_taborder("1");
            obj.set_text("upload");
            obj.style.setStyleValue("color", "focused", "blue");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00", "absolute", "170", "253", "111", "38", null, null, this);
            obj.set_taborder("7");
            obj.getSetter("retry").set("0");
            obj.set_text("FileDownload00");
            obj.set_enable("false");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("FileUpload_tap_test");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("FileUpload_tap_test.xfdl", function() {
        var list = [];

        this.FileUpload00_onsetfocus = function(obj,e)
        {
        	trace("file");
        		if(this.TextArea00.vscrollbar.visible == true)
        	{
        		this.TextArea00.set_value("//");
        	}

        	this.TextArea00.set_value(this.TextArea00.value + "\n file");
        }

        this.Button00_onsetfocus = function(obj,e)
        {
        	trace("bt0");	
        		if(this.TextArea00.vscrollbar.visible == true)
        	{
        		this.TextArea00.set_value("//");
        	}

        	this.TextArea00.set_value(this.TextArea00.value + "\n bt0");
        }

        this.Button01_onsetfocus = function(obj,e)
        {
        	trace("bt1");	
        	if(this.TextArea00.vscrollbar.visible == true)
        	{
        		this.TextArea00.set_value("//");
        	}
        	this.TextArea00.set_value(this.TextArea00.value + "\n bt1");
        }

        this.Button02_onsetfocus = function(obj,e)
        {
        	trace("bt2");	
        	this.TextArea00.set_value(this.TextArea00.value + "\n bt2");
        }

        this.TextArea00_onsetfocus = function(obj,e)
        {
        	trace("ta00");	
        	this.TextArea00.set_value(this.TextArea00.value + "\n ta00");	
        }

        this.FileUpload00_onkeydown = function(obj,e)
        {
        //	this.TextArea00.set_value(this.TextArea00.value + "\n" + e.keycode);
        //	this.TextArea00.set_value(this.TextArea00.value + "\n" + e.fromreferenceobject);
        	this.TextArea00.set_value(this.TextArea00.value + "\n" + this.FileUpload00.index);
        	this.TextArea00.set_value(this.TextArea00.value + "\n" + this.FileUpload00.value);
        }

        this.Button00_onkeydown = function(obj,e)
        {
        //	this.TextArea00.set_value(this.TextArea00.value + "\n" + e.keycode);
        //	this.TextArea00.set_value(this.TextArea00.value + "\n" + e.fromreferenceobject);
        }

        this.Button00_onclick = function(obj,e)
        {
        	this.FileUpload01.deleteItem(0);
        }

        this.Button02_onclick = function(obj,e)
        {
        	this.FileUpload01.appendItem();
        }

        this.Button01_onclick = function(obj,e)
        {
        	this.FileUpload01.set_itemcount(4);
        }

        this.FileUpload01_onkeydown = function(obj,e)
        {
        	this.TextArea00.set_value(this.TextArea00.value + "\nindex : " + this.FileUpload01.index);
        }

        this.FileUpload01_onsetfocus = function(obj,e)
        {
        	trace("file");
        	if(this.TextArea00.vscrollbar.visible == true)
        	{
        		this.TextArea00.set_value("//");
        	}
        	this.TextArea00.set_value(this.TextArea00.value + "\nindex : " + this.FileUpload01.index);
        }

        this.Button04_onclick = function(obj,e)
        {
        	this.FileUpload01.upload();
        }

        this.FileUpload01_onsuccess = function(obj,e)
        {
        	this.TextArea00.set_value(this.TextArea00.value + "\nsuccess");
        		var arr = this.FileUpload01.filelist;
        	var len = arr.length;
        	
        	trace("========")
        	trace(arr, len);
        	trace("========")
        	for(var i = 0; i < len; i++)
        	{
        		trace(arr[i].filename);
        		trace(arr[i].getFileSize());
        			trace("========")
        	}
        	list = arr;
        	this.FileDownload00.set_enable(true);
        }

        this.FileDownload00_onclick = function(obj,e)
        {
        	for(var i = 0, len = list.length; i < len; i++){
        		this.FileDownload00.download("http://121.134.99.168:9090/xtest2/null/" + list[i].filename);
        	}
        }

        this.FileUpload01_onitemchanged = function(obj,e)
        {
        	this.FileDownload00.set_enable(false);
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.TextArea00.addEventHandler("onsetfocus", this.TextArea00_onsetfocus, this);
            this.FileUpload01.addEventHandler("onkeydown", this.FileUpload01_onkeydown, this);
            this.FileUpload01.addEventHandler("onsetfocus", this.FileUpload01_onsetfocus, this);
            this.FileUpload01.addEventHandler("onsuccess", this.FileUpload01_onsuccess, this);
            this.FileUpload01.addEventHandler("onitemchanged", this.FileUpload01_onitemchanged, this);
            this.Button00.addEventHandler("onsetfocus", this.Button00_onsetfocus, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button00.addEventHandler("onkeydown", this.Button00_onkeydown, this);
            this.Button01.addEventHandler("onsetfocus", this.Button01_onsetfocus, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);
            this.Button02.addEventHandler("onsetfocus", this.Button02_onsetfocus, this);
            this.Button02.addEventHandler("onclick", this.Button02_onclick, this);
            this.Button04.addEventHandler("onclick", this.Button04_onclick, this);
            this.FileDownload00.addEventHandler("onclick", this.FileDownload00_onclick, this);

        };

        this.loadIncludeScript("FileUpload_tap_test.xfdl");

       
    };
}
)();
