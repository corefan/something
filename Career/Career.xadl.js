(function()
{
    return function()  {
        // Theme, Component URI Setting
        this._theme_uri = "./_theme_/";
        this._globalvar_uri = "globalvars.xml";
        
        this.loadTypedefition = function()
        {
            // this._addService(prefixid, type, url, cachelevel, codepage, language, version, communication);
            this._addService("default_typedef.xml", "Base", "form", "./Base/", "", null, "", "0", "0");
            this._addService("default_typedef.xml", "Images", "file", "./Images/", "", null, "", "0", "0");

            
            this._component_uri = (this._arg_compurl ? this._arg_compurl : "./nexacro14lib/component/");
  
            // load components
            var registerclass = [
            		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
            		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
            		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
            		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
            		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
            		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
            		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
            		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
            		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
            		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
            		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
            		{"id":"Tabpage", "classname":"nexacro.Tabpage", "type":"JavaScript"},
            		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
            		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
            		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
            		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
            		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
            		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
            		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
            		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
            		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
            		{"id":"ActiveX", "classname":"nexacro.ActiveX", "type":"JavaScript"},
            		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
            		{"id":"Step", "classname":"nexacro.Step", "type":"JavaScript"},
            		{"id":"AppletComp", "classname":"nexacro.AppletComp", "type":"JavaScript"},
            		{"id":"FlashPlayer", "classname":"nexacro.FlashPlayer", "type":"JavaScript"},
            		{"id":"MediaPlayer", "classname":"nexacro.MediaPlayer", "type":"JavaScript"},
            		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"},
            		{"id":"Sketch", "classname":"nexacro.Sketch", "type":"JavaScript"},
            		{"id":"ExcelExportObject", "classname":"nexacro.ExcelExportObject", "type":"JavaScript"},
            		{"id":"ExcelImportObject", "classname":"nexacro.ExcelImportObject", "type":"JavaScript"},
            		{"id":"FileDownload", "classname":"nexacro.FileDownload", "type":"JavaScript"},
            		{"id":"FileUpload", "classname":"nexacro.FileUpload", "type":"JavaScript"}
            ];
            this._addClasses(registerclass);
        };
        
        this.on_loadGlobalVariables = function()
        {
            // global variable

            // global image

            // global dataset
            var obj = null;

            

        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Career");
            this.set_version("");
            this.set_tracemode("");
            this.set_themeid("default.xtheme");

            if (this._is_attach_childframe)
            	return;

        
            // frame
            var mainframe = this.createMainFrame("mainframe", "absolute", "0", "0", "800", "800", null, null, this);
            mainframe.set_resizable("true");
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("true");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;

        
            // widget
            var widget = null;

        
            // tray
            var tray = null;

        };
        

        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new FrameSet("FrameSet0", "absolute", null, null, null, null, null, null, this);
            this.addChild(frame0.name, frame0);
            this.frame = frame0;

            
            var frame1 = new ChildFrame("ChildFrame0", "absolute", "0", "0", "500", "500", null, null, "Base::Combo_search.xfdl", frame0);
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("Base::Combo_search.xfdl");
            frame1.set_titletext("Combo");
            frame1.style.set_border("1px solid #808080ff");

            var frame2 = new ChildFrame("ChildFrame1", "absolute", "300", "50", "500", "500", null, null, "Base::Dataset_expr.xfdl", frame0);
            frame0.addChild(frame2.name, frame2);
            frame2.set_formurl("Base::Dataset_expr.xfdl");
            frame2.set_titletext("데이터셋");
            frame2.style.set_border("1px solid #808080ff");

            var frame3 = new ChildFrame("ChildFrame2", "absolute", "600", "100", "500", "500", null, null, "Base::Dataset_filter.xfdl", frame0);
            frame0.addChild(frame3.name, frame3);
            frame3.set_formurl("Base::Dataset_filter.xfdl");
            frame3.set_titletext("데이터셋2");
            frame3.style.set_border("1px solid #808080ff");

            var frame4 = new ChildFrame("ChildFrame3", "absolute", "0", "300", "800", "800", null, null, "Base::ExportObject.xfdl", frame0);
            frame0.addChild(frame4.name, frame4);
            frame4.set_formurl("Base::ExportObject.xfdl");
            frame4.set_titletext("엑셀 export");
            frame4.style.set_border("1px solid #808080ff");

            var frame5 = new ChildFrame("ChildFrame4", "absolute", "300", "350", "500", "500", null, null, "Base::FileUpload_tap_test.xfdl", frame0);
            frame0.addChild(frame5.name, frame5);
            frame5.set_formurl("Base::FileUpload_tap_test.xfdl");
            frame5.set_titletext("파일 업로드");
            frame5.style.set_border("1px solid #808080ff");

            var frame6 = new ChildFrame("ChildFrame5", "absolute", "600", "400", "500", "500", null, null, "Base::Form_step.xfdl", frame0);
            frame0.addChild(frame6.name, frame6);
            frame6.set_formurl("Base::Form_step.xfdl");
            frame6.set_titletext("step");
            frame6.style.set_border("1px solid #808080ff");

            var frame7 = new ChildFrame("ChildFrame6", "absolute", "0", "600", "500", "500", null, null, "Base::MedaiPlayer_demo.xfdl", frame0);
            frame0.addChild(frame7.name, frame7);
            frame7.set_formurl("Base::MedaiPlayer_demo.xfdl");
            frame7.set_titletext("비디오");
            frame7.style.set_border("1px solid #808080ff");

            var frame8 = new ChildFrame("ChildFrame7", "absolute", "300", "450", "500", "500", null, null, "Base::Menu_test.xfdl", frame0);
            frame0.addChild(frame8.name, frame8);
            frame8.set_formurl("Base::Menu_test.xfdl");
            frame8.set_titletext("메뉴");
            frame8.style.set_border("1px solid #808080ff");

            var frame9 = new ChildFrame("ChildFrame8", "absolute", "800", "500", "500", "500", null, null, "Base::sketch.xfdl", frame0);
            frame0.addChild(frame9.name, frame9);
            frame9.set_formurl("Base::sketch.xfdl");
            frame9.set_titletext("스케치");
            frame9.style.set_border("1px solid #808080ff");

            var frame10 = new ChildFrame("ChildFrame9", "absolute", "500", "500", "500", "500", null, null, "Base::form_load.xfdl", frame0);
            frame0.addChild(frame10.name, frame10);
            frame10.style.set_border("1px solid #808080ff");
            frame10.set_formurl("Base::form_load.xfdl");

        };
        
        this.on_initEvent = function()
        {

        };
        
        // screeninfo
        this.loadScreenInfo = function()
        {

        }
 
        // script Compiler

        this.checkLicense("");
        
        this.loadTypedefition();
        this.loadScreenInfo();
        this.loadTheme("default.xtheme");


        this.loadIncludeScript("Career.xadl");
    };
}
)();
