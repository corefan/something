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
                this.set_name("filedownload_test");
                this.set_classname("filedownload_test");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,768);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new FileDownload("FileDownload03", "absolute", "32", "29", "140", "59", null, null, this);
            obj.set_taborder("7");
            obj.set_downloadurl("http://172.10.12.61:9090/Career/excel.xlsx");
            obj.getSetter("retry").set("0");
            obj.set_text("down_excel");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload04", "absolute", "223", "30", "145", "58", null, null, this);
            obj.set_taborder("9");
            obj.getSetter("retry").set("0");
            obj.set_text("down_jpg");
            obj.set_downloadurl("http://172.10.12.61:9090/Career/test3.jpg");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00", "absolute", "376", "136", "130", "49", null, null, this);
            obj.set_taborder("10");
            obj.getSetter("retry").set("0");
            obj.set_text("down");
            obj.style.setStyleValue("color", "focused", "blue");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "152", "137", "198", "47", null, null, this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "18", "128", "113", "51", null, null, this);
            obj.set_text("업로드한 파일명");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "27", "221", "470", "38", null, null, this);
            obj.set_taborder("12");
            obj.set_value("http://img.naver.net/static/www/u/2013/0819/nmms_111143893.gif");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload01", "absolute", "224", "275", "154", "53", null, null, this);
            obj.set_taborder("13");
            obj.getSetter("retry").set("0");
            obj.set_text("down");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "24", "273", "174", "51", null, null, this);
            obj.set_text("경로 다운로드");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 768, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("filedownload_test");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("Filedownload_test.xfdl", function() {

        this.FileDownload00_onclick = function(obj,e)
        {
        	this.FileDownload00.set_downloadurl("http://172.10.12.61:9090/xtest2/upload/" + this.Edit00.text)
        }

        this.FileDownload01_onclick = function(obj,e)
        {
        	this.FileDownload01.set_downloadurl(this.Edit01.text)	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.FileDownload03.addEventHandler("onclick", this.FileDownload01_onclick, this);
            this.FileDownload00.addEventHandler("onclick", this.FileDownload00_onclick, this);
            this.FileDownload01.addEventHandler("onclick", this.FileDownload01_onclick, this);

        };

        this.loadIncludeScript("Filedownload_test.xfdl");

       
    };
}
)();
