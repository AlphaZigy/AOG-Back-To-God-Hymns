
 function OnStart()
{
 app.SetOrientation( "Portrait" )

 home();
}

function home()
{    
  layMain = app.CreateLayout( "Absolute", "VCenter,FillXY" )
  layMain.SetBackground( "Img/g.jpg" )

   hdr = app.CreateLayout("Linear", "Horizontal,left");
   hdr.SetBackColor("white")
   layMain.AddChild(hdr)
   
  dwr = app.CreateButton( "[fa-list]", 0.2,0.08,"FontAwesome");
  dwr.SetTextSize(22);
  dwr.SetTextColor("white")
  dwr.SetBackground("Img/P5.jpg")
  dwr.SetOnTouch(I(dsid))
  hdr.AddChild( dwr );

  layLight =  app.CreateLayout( "Linear", "VCenter" )
  layLight.SetPadding( 0.1, 0.05, 0.1, 0.05 )
  layMain.AddChild( layLight )

  layFrame = app.CreateLayout( "Frame", "" )
  layLight.AddChild(layFrame)

	img = app.CreateImage( "Img/user.png", 0.4, -1 )
	img.Scale( 0.3, 0.3 )
	img.Move( 0, 0.15 )
	layFrame.AddChild( img )
  
   ThemeSong = app.AddButton( layLight, "Mission Songs", 0.7, -1, "Custom" )
   ThemeSong.SetStyle( "#4285F4", "#4285F4", 4 )
   ThemeSong.SetTextSize(20);
   ThemeSong.SetOnTouch(TS_OnTouch);
   layLight.AddChild(ThemeSong);

     b1 = app.CreateButton( "Hymns", -1, -1, "FillX,Alum" );
     b1.SetTextSize(25)
     b1.SetOnTouch( b1_OnTouch )
     layLight.AddChild( b1 );

    var text = "<big><b>A<img src=Img/aog.png>G History</b></big>";
     b3 = app.CreateButton( text,  -1, -1, "FillX,Alum,Html");
     b3.SetOnTouch( b3_OnTouch )
     layLight.AddChild( b3 ); 
         	
     setInterval( "RotateImage()", 10 )

     app.EnableBackKey(OnBack);

    layFooter = app.CreateLayout("Linear", "Horizontal");
    layFooter.SetPosition(0,0.88,1,0.13);
    layMain.AddChild(layFooter);
  
   var moto = "<p><i>Ndomutevera Jesu. Somulandel' uJesu. I will follow Jesus!!</p>" 
 	txt = app.CreateText( moto, 0.7, -1, "left,Bold,Html" )  
 	txt.SetTextSize(14)   
   txt.SetTextColor("gray")
 	layFooter.AddChild( txt)

  	drawerWidth = 0.75;
    drawerScroll = app.CreateScroller( drawerWidth, -1, "FillY" )
    drawerScroll.SetBackColor( "White" )
	  layDrawer = app.CreateLayout( "Linear", "Left" )
	 drawerScroll.AddChild( layDrawer )
	
 	layDrawerTop = app.CreateLayout( "Absolute" )
 	layDrawerTop.SetBackground( "Img/gpj.jpg" )
 	layDrawerTop.SetSize( drawerWidth, 0.23 )
 	layDrawer.AddChild( layDrawerTop )
	
	var imge = app.CreateImage( "Img/aog.png", 0.15 )
	imge.SetPosition( drawerWidth*0.06, 0.04 )
	layDrawerTop.AddChild( imge )
	
  var text = "<big><b>A<img src=Img/user.png>G Hymns</b></big>";
	var txtUser = app.CreateText( text,-2,-2,"Bold, Html")
	txtUser.SetPosition( drawerWidth*0.07, 0.155 )
	txtUser.SetTextColor( "Red" )
	txtUser.SetTextSize( 14.5, "dip" )
	layDrawerTop.AddChild( txtUser )

	title = app.CreateText( "Assemblies Of God Back To God")
	title.SetPosition( drawerWidth*0.07, 0.185 )
	title.SetTextColor( "Blue" )
	title.SetTextSize( 11, "dip" )
	layDrawerTop.AddChild( title )
	
	var layMenu = app.CreateLayout( "Linear", "Left" )
	layDrawer.AddChild( layMenu )
	
    var listItems = "Home::[fa-home],Somlandela TV::[fa-youtube],Contact us::[fa-phone]";
    lstMenu1 = app.CreateList( listItems, drawerWidth, -1, "Menu,Expand" )
    lstMenu1.SetColumnWidths( -1, 0.35, 0.18 )
    lstMenu1.SelectItemByIndex( 0, true )
    lstMenu1.SetItemByIndex( 0, "Home" )
    lstMenu1.SetOnTouch( lstMenu_OnTouch )
    layMenu.AddChild( lstMenu1 )
    
    var sep = app.CreateImage( null, drawerWidth,0.001,"fix", 2,2 )
    sep.SetSize( -1, 1, "px" )
    sep.SetColor( "#cccccc" )
    layMenu.AddChild( sep )
    
	txtTitle = app.CreateText( "All labels",-1,-1,"Left")
	txtTitle.SetTextColor( "#666666" )
	txtTitle.SetMargins( 16,12,0,0, "dip" )
	txtTitle.SetTextSize( 14, "dip" )
	layMenu.AddChild( txtTitle )
	
    var listItems = "Bible Quiz::[fa-search],Events::[fa-calendar],Acknowledgements::[fa-tag],About::[fa-code]";
    lstMenu2 = app.CreateList( listItems, drawerWidth, -1, "Menu,Expand" )
    lstMenu2.SetColumnWidths( -1, 0.35, 0.18 )
    lstMenu2.SetOnTouch( lstMenu_OnTouch )
    layMenu.AddChild( lstMenu2 )
	
   app.AddLayout(layMain)
	 app.AddDrawer( drawerScroll, "Left", drawerWidth )
}
function OnDrawer( side, state )
{
    console.log( side + " : " + state )
}
function dsid()
{  
   app.OpenDrawer( "left" );
 }

function lstMenu_OnTouch( list, item, index)
{
    switch(list )
    {
        case "Home": 
                   app.CloseDrawer( "Left" )  
                   home(); 
                   break;
        
        case "Somlandela TV": 
                   app.CloseDrawer( "Left" )

                   lay = app.CreateLayout( "Linear", "VCenter,FillXY" )  
                   lay.SetBackground( "Img/P5.jpg" )
        
                   player = app.CreateVideoView( 0.9, 0.4 )
                   lay.AddChild( player )
                   player.SetOnReady( player_OnReady )
                   player.SetOnComplete( player_OnComplete )
                 	player.SetOnError( player_OnError )
    
              spin = app.CreateSpinner( "Please select channel,Youtube,AOG Media Facebook")
              spin.SetSize( 0.8, -1 )
              spin.AdjustColor( "Red" )
              spin.SetOnTouch( spn_OnTouch )
              lay.AddChild( spin )
  
              skb = app.CreateSeekBar( 0.8, -1 )
              skb.SetMargins( 0, 0.05, 0, 0 )
              skb.SetRange( 1.0 )
              skb.SetOnTouch( skb_OnTouch )
              lay.AddChild( skb )
    
             btnPlay = app.CreateButton( "Play", 0.4, 0.1 )
             btnPlay.SetMargins( 0, 0.05, 0, 0 )
             btnPlay.AdjustColor( "Green" )
             btnPlay.SetOnTouch( btnPlay_OnTouch )
             lay.AddChild( btnPlay ) 
    
             btnPause = app.CreateButton( "Pause", 0.4, 0.1 )
             btnPause.SetOnTouch( btnPause_OnTouch )
             lay.AddChild( btnPause ) 

             layFooter = app.CreateLayout("Linear", "Horizontal");
             layFooter.SetPosition(0,0.88,1,0.13);
             lay.AddChild(layFooter);

            back = app.CreateButton("[fa-home]", 0.5,0.2,"FontAwesome");
            back.SetTextSize(30);
           back.SetBackColor("#dddddd");
            back.SetTextColor("Blue");
            back.SetPosition(1,0,0.18,0.10);
            back.SetOnTouch(btn5_OnTouch);
            layFooter.AddChild(back)
   
            app.AddLayout( lay )
                   
            setInterval( "Update()", 1000 )
            break;
            
         case "Contact us": 
             contact_us();
            break;
                
        case "Bible Quiz":
            app.CloseDrawer( "Left" )  
            
           lay = app.CreateLayout( "Linear", "Vertical,FillXY" )  
           lay.SetBackground( "Img/P5.jpg" )
             
             var tabs = app.CreateTabs( "For kids,For Youths,For Adults", 1,1, "VCenter" )
              lay.AddChild( tabs )

              layForkids = tabs.GetLayout( "For kids" )
              layLight =  app.CreateLayout( "Linear", "Vertical" )
               layLight.SetPadding( 0.1, 0.05, 0.1, 0.05 )
              layForkids.AddChild( layLight )

            but = app.AddButton( layLight, "Start", 0.7, -1, "Custom" )
              but.SetStyle( "#ff0000", "#aa0000", 10 )
              but.SetTextShadow( 2, 0, 1, "#880000" )
              but.SetOnTouch(biblequiz)
                 lay.AddChild(but)

        qz = app.AddButton( layLight, "Trial", 0.7, -1, "Custom" )
                qz.SetStyle( "#4285F4", "#4285F4", 4 )
                lay.AddChild(qz)
     
          back = app.AddButton(layLight, "[fa-arrow-left]", 0.2,-1,"FontAwesome");
            back.SetTextSize(30);
           back.SetBackColor("#dddddd");
            back.SetTextColor("Red");
            back.SetPosition(1,0,0.18,0.10);
            back.SetOnTouch(btn5_OnTouch);
            lay.AddChild(back)

              layForYouths = tabs.GetLayout( "For Youths" )
              layLight =  app.CreateLayout( "Linear", "Vertical" )
               layLight.SetPadding( 0.1, 0.05, 0.1, 0.05 )
              layForYouths.AddChild( layLight )

            but = app.AddButton( layLight, "Start", 0.7, -1, "Custom" )
              but.SetStyle( "#ff0000", "#aa0000", 10 )
              but.SetTextShadow( 2, 0, 1, "#880000" )
              but.SetOnTouch(biblequiz)
                 lay.AddChild(but)

        qz = app.AddButton( layLight, "Trial", 0.7, -1, "Custom" )
                qz.SetStyle( "#4285F4", "#4285F4", 4 )
                lay.AddChild(qz)
     
          back = app.AddButton(layLight, "[fa-arrow-left]", 0.2,-1,"FontAwesome");
            back.SetTextSize(30);
           back.SetBackColor("#dddddd");
            back.SetTextColor("Red");
            back.SetPosition(1,0,0.18,0.10);
            back.SetOnTouch(btn5_OnTouch);
            lay.AddChild(back)

              layForAdults = tabs.GetLayout( "For Adults" )
              layLight =  app.CreateLayout( "Linear", "Vertical" )
               layLight.SetPadding( 0.1, 0.05, 0.1, 0.05 )
              layForAdults.AddChild( layLight )

              but = app.AddButton( layLight, "Start", 0.7, -1, "Custom" )
              but.SetStyle( "#ff0000", "#aa0000", 10 )
              but.SetTextShadow( 2, 0, 1, "#880000" )
              but.SetOnTouch(biblequiz)
                 lay.AddChild(but)

                qz = app.AddButton( layLight, "Trial", 0.7, -1, "Custom" )
                qz.SetStyle( "#4285F4", "#4285F4", 4 )
                lay.AddChild(qz)
     
            back = app.AddButton(layLight, "[fa-arrow-left]", 0.2,-1,"FontAwesome");
            back.SetTextSize(30);
            back.SetBackColor("#dddddd");
            back.SetTextColor("Red");
            back.SetPosition(1,0,0.18,0.10);
            back.SetOnTouch(btn5_OnTouch);
            lay.AddChild(back)

             app.AddLayout( lay )
            break;
            
   case "Events":
          
            app.CloseDrawer( "Left" )  

            lay = app.CreateLayout("linear", "VCenter,FillXY")

            web = app.CreateWebView( 0.8, 0.8 );
            web.SetBackColor( "#00000000" );
            lay.AddChild( web );

            app.AddLayout( lay );

            web.LoadUrl( "file:///Sys/Html/calendar.html" );
            break;    

  case "Acknowledgements":
            app.CloseDrawer( "Left" )
            b2_OnTouch();
            break

  case "About":
        app.CloseDrawer( "Left" )  

    lay = app.CreateLayout( "Linear", "VCenter,FillXY" )  
    lay.SetBackground( "/Sys/Img/BlueBack.jpg" )

    var text = "<big><b>App Version: 1.0.01</b></big>";
    btn = app.CreateButton( text, 0.6, -1, "Html" )
    btn.SetTextSize(20 )
    btn.SetMargins( 0, 0.03, 0, 0 )
    btn.SetBackAlpha( 0.6 )
    btn.SetTextColor( "#aaaaaa" )
    btn.SetTextShadow( 20, 5,10, "#000000" )
    lay.AddChild( btn )

var data = 
        "Developed ::By^c^ <font color=#77CECF>Alpha Zigara</font><br>" + 
        "<i>(A.O.G Katamba Assembly)</i>:null" +
        ",Contact On:alphazigy@outlook.com^c^ +263 78 544 7337 </font><br>" + 
        "<i>+263 71 786 5911 for all custorm mobile applications</i>:"+
      ",Open Source License:Apache Lisense^c^http://www.apache.org/licenses/</font><br>" +
       "<i></i>:"
      
    lst = app.CreateList( data, 0.8, 0.25, "Html" )
    lst.SetMargins( 0, 0.02, 0, 0 )
    lst.SetBackColor( "#77444444" )
    lst.SetTextColor( "#cccccc" )
    lst.SetEllipsize1( "end" )
    lst.SetTextSize( 15 )
    lst.SetTextShadow1( 2, 2,4, "#000000" )
    lst.SetTextShadow2( 1.5, 2,4, "#000000" )
    lst.SetDivider( 0.002, "#222222" )
    lay.AddChild( lst )


      layFooter = app.CreateLayout("Linear", "Horizontal");
             layFooter.SetPosition(0,0.88,1,0.13);
             lay.AddChild(layFooter);

   	layBut = app.CreateLayout("Linear", "Horizontal") 
	lay.AddChild( layBut ) 

	btnLoad = app.CreateButton( "Report", 0.23, 0.1 ) 
	layBut.AddChild( btnLoad ) 
	
	btnSave = app.CreateButton( "Rate Us", 0.23, 0.1 ) 
	layBut.AddChild( btnSave ) 

     layFooter = app.CreateLayout("Linear", "Horizontal");
             layFooter.SetPosition(0,0.88,1,0.13);
             lay.AddChild(layFooter);

     layFooter = app.CreateLayout("Linear", "Horizontal");
             layFooter.SetPosition(0,0.88,1,0.13);
             lay.AddChild(layFooter);

     layFooter = app.CreateLayout("Linear", "Horizontal");
             layFooter.SetPosition(0,0.88,1,0.13);
             lay.AddChild(layFooter);

            back = app.CreateButton("[fa-home]", 0.5,0.2,"FontAwesome");
            back.SetTextSize(30);
            back.SetBackColor("#dddddd");
            back.SetTextColor("Blue");
            back.SetPosition(1,0,0.18,0.10);
            back.SetOnTouch(btn5_OnTouch);
            layFooter.AddChild(back)
  
            app.AddLayout( lay )
            
            break;    
    }
}
function b1_OnTouch( )
{  

    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" )  
    lay.SetBackground("Img/gpj.jpg")

//List of all hyms
  var songs = "Abatwana:,Alikho emhlabeni ikhaya lami qha:,"+
"All over the world:,All praises to Him who reigns:,Apo Jesu anouya:, "+
"Apo ndatambudzika:, Apo torapito yake Mwari:,A friend in Jesus what a bliss:,"+
"Baba ndiri mwana wenyu:,Baba wedu wakatsidza:,Blessed assurance:,"+
"Changamire muponesi:,Chinjikano ndirero:,Chinyarara moyo wangu:,"+
"Come and dine the Master calleth:,Dzidzisai vadzidzisi:,Esandleni somusa:,"+
"Esiphambanweni:,Emzini kaDavide:,God be with you till we meet again:,"+
"Gory to His Name:,Hakuna hama kupinda Jesu:,Hama yedi ndiShe Jesu:,"+
"Hatina musha panyika:,Have thine own way:,Hlengiwe limnandi lelizwe:,"+
"Hosana wekudenga:,Am weak but thou art strong:,Igama leNkosi liyiyo inqaba:,"+
"Igama laJesu he:,Igama likaJesu:,Indaba emnand:,Ingirizi dzinoimba:,"+
"Ikhona indawo emthimbeni:,Ingonyama kajuda:,Inyang' enkhulu ikhona la:,"+
"Ishe komborera Africa:,Isiphephelo suhuba:,It's the old time Holy Spirit:,"+
"I will sing of the mercies of the Lord:,Itai muponesi wangu izvo zvamunoda:,"+
"I've wondered far away from God:,Jabulani sesingabatwana:,Jabulani bazalwane:,"+
"Jerusarema musha wangu:,UJesu esiphambabweni:,Jesus keep me near the cross:,"+
"Jesus loves me this I know:,Kana Jesu achidzoka:,Kebibhek'uthando lwakhe:,"+
"Kunenzvimbo yakanaka:,Limhloli omuhle:,Lenani izulu ngeculo lwami:,Lets talk about Jesus:,"+
"Lifikile ivangeli:,Limnandi kimi lilo gama:,Mhla ngidhiwa ngikhatele:,Mufudzi ndiye Jehovha:;"+
"Mukai mukai vatendi:,Mumwe ariko kumusoro:,Mumhanzi urikudenga:,Murapi aripano:,"+
"Mununuri ndinomuda:,Musandipfuura Jesu:,Mwari ishe zvandinofungidzira:,"+
"Mwari baba vangu:,Mweya mutsvene wamwari:,Mweya wangu unomuponesi:,"+
"Namhla ngiyaqhutw' umoya:,Ndakabarwa munerima:,Ndanzwa inzwi renyu:,"+
"Ndinoshamiswa kwazvo:,Ndinosimuda Ishe:,Ndinouya nemashoko erudo:, "+
"Ndiyani panezamba:,Ndofamba ndofamba:,Ndozvipira zvese zvangu:,Nhasi ngatimutondere:,"+
"Ngazo zonk' izinsuku:,Ngizifumane umsindisi:,Ngingenwe emoyeni wani:, "+
"Ngingumfokasi lapha emhlabeni:,Ngiqhutshwa ngumoya:,Ngiyeza nginje Nkosiyami:,"+
"Ngomdumis' umhlengi wam:,Ngomusa wakho omukhulu:,Ngomusindisi anami la empani:,"+
"Nguva yakanakisisa:,Nkosi bhek' ibandla lakho:,Nkosi ube isiphepho:,Nxa ebizwa amagama:,"+
"Nzwi renyu ndinonzwa:,O bayede Nkosi engcwele:,O happy day:,O'Msindisi Jesu Kristu:,"+
"Oh it is Jesus:,Oh Lord my God:,Oh what man from Galilee:,Onward Christian soldier:,"+
"Pamusoro pakudenga:,Panenzvimbo yakanaka:,Pass me not oh gentle saviour:,"+
"Pedo wedenga Ishe:,Phaphamani bazwane baka kristu:,Ranaka iro zuva:,"+
"Reach out and touch:,Rejoice in the Lord always:,Riripo tsime rizere:,Rock of ages cleft for me:,"+
"Sewakhile enhlizweni:,She wedenga ave nemiwo:,Shine on me:,Sikhathi somkhululeko:,"+
"When we all get to heaven:,Soqonda ekhaya:,Siyakunxusa Nkosi yethu:,"+
"Sowing in the morning:,Teach me thy way:,That God should love:,Thatha konke nginoJesu:,"+
"Thatha nkosi inhliziyo:,The circuit rider preacher:,The joy of the Lord is my strength:,"+
"There is a land that is fairer than day:,There is a name i love to hear:,"+
"There is a place of quiet rest:,There shall be showers of blessings:,"+
"There were in the upper chamber:,Thina sihlengiwe igazi:,This is the day:, "+
"Tine Chipo chakanaka:,Tofara sei:,Tshala ekuseni thshala imbewu yezwi:,"+
"Tsitsi dzinondishamisa:,Tsitsi hedzi dzamira dzoga:,Ubusisiwe:,Ungatora hako pasi:,"+
"Umhlatshelo wezono:,Urikutambudzikireiko:,Uthando lukha baba:,Uyadlula ngokushesha:,"+
"Uyamazi ujesuyini:,Vanhu uyai kunajesu:,Vukani bandla bo:,Wadzira nhasi here:,"+
"Wauya wauyamucheki mukuru:,Webathandwa yek' inhanhla:,Welikwezi lakusasa:,"+
"Wena' ke omileyo:,We've got a very big God:,When i come to the river:,When the saints:,"+
"When the saviour calls i will answer:,When we all get to heaven:,Wings of snow white dove:,"+
"Would you be free:,Yek' ikhaya elihle nanti liyana:,Yek' inhlahla esinayo:,"+
"Yek' ubuhle bokukholwa:,Yiba nam:,Yimani isibindi:, :, :, :, :, "
    songs = app.AddList( lay, songs , 1, 1,  "Bold, WhiteGrad")
    songs.SetTextSize2( 19 )
    songs.SetTextColor1( "black" ) 
    songs.SetTextColor2( "black" )
    songs.SetOnTouch(hyms_OnTouch)
    lay.AddChild( songs )

     layFooter = app.CreateLayout("Linear", "Horizontal");
     layFooter.SetPosition(0,0.88,1,0.13);
     layFooter.SetBackground( "Img/gpj.jpg" )
     lay.AddChild(layFooter);

      var btns = ["[fa-chevron-circle-left]","[fa-search]","[fa-file]","[fa-heart]"];
      var ontouch = [home,search,recents,favourite]
      for( var i=0; i<btns.length; i++ )
        {
        btn = app.CreateButton( btns[i], 0.25,0.07,"FillX,Alum,FontAwesome" ) 
        btn.icon = btns[i];
        btn.SetTextSize( 22 )
        btn.SetTextColor("white")
        btn.SetOnTouch( ontouch[i] ) 
        layFooter.AddChild( btn ) 
        }
       app.AddLayout( lay )
}
 function hyms_OnTouch( songs )
{
switch (songs)
{
case "Abatwana":
Abatwana();
break;

case "Alikho emhlabeni ikhaya lami qha":
Aliko_emhlabeni_ikhaya_lami_qa();
break;

case "All over the world":
All_over_the_world();
break;

case "All praises to Him who reigns":
All_praises_to_Him_who_reigns();
break

case "Apo Jesu anouya":
Apo_Jesu_anouya();
break

case "Apo ndatambudzika":
Apo_ndatambudzika();
break

case "Apo torapito yake Mwari":
Apo_torapito_yake_Mwari()
break;

case "A friend in Jesus what a bliss":
A_friend_in_Jesus_what_a_bliss()
break;

case "Baba ndiri mwana wenyu":
Baba_ndiri_mwana_wenyu();
break

case "Baba wedu wakatsidza":
Baba_wedu_wakatsidza();
break

case "Blessed assurance":
Blessed_assurance();
break

case "Changamire muponesi":
Changamire_muponesi();
break

case "Chinjikano ndirero":
Chinjikano_ndirero();
break

case "Chinyarara moyo wangu":
Chinyarara_moyo_wangu();
break

case "Come and dine the Master calleth":
Come_and_dine()
break

case "Dzidzisai vadzidzisi":
Dzidzisai_vadzidzisi()
break

case "Esandleni somusa":
Esandleni_somusa();
break

case "Esiphambanweni":
Esiphambanweni()
break

case "Emzini kaDavide":
Emzini_kaDavide()
break

case "God be with you till we meet again":
God_be_with_you()
break

case "Gory to His Name":
Glory_to_his_name()
break

case "Hakuna hama kupinda Jesu":
Hakuna_hama_kupinda_jesu()
break

case "Hama yedi ndiShe Jesu":
Hama_yedu();
break

case "Hatina musha panyika":
Hatina_musha();
break

case "Have thine own way":
Have_thy_own_way();
break

case "Hlengiwe limnandi lelizwe":
Hlengiwe();
break

case "Hosana wekudenga":
Hosana_wekudenga();
break

case "Am weak but thou art strong":
I_am_weak();
break

case "Igama leNkosi liyiyo inqaba":
Igama_lenkosi()
break

case "Igama laJesu he":
Igama_lajesu()
break;

case "Igama likaJesu":
Igama_likajesu()
break

case "Indaba emnand":
Indaba_emnandi();
break

case "Ingirizi dzinoimba":
Ingiroz_dzinoimba()
break

case "Ikhona indawo emthimbeni":
Ikhona_indawo();
break

case "Ingonyama kajuda":
Ingonyama_kajuda();
break

case "Inyang' enkhulu ikhona la":
Inyang_enkulu();
break

case "Ishe komborera Africa":
Ishe_komborera_africa();
break

case "Isiphephelo suhuba":
Isiphephelo();
break

case "It's the old time Holy Spirit":
Its_the_old_time()
break

case "I will sing of the mercies of the Lord":
I_will_sing()
break;

case "Itai muponesi wangu izvo zvamunoda":
Itai_muponesi()
break

case "I've wondered far away from God":
I_have_wondered()
break

case "Jabulani sesingabatwana":
Jabulani_sesingabatwana()
break

case "Jabulani bazalwane":
Jabulani_bazalwane()
break

case "Jerusarema musha wangu":
Jerusarema_musha_wangu()
break

case "UJesu esiphambabweni":
Ujesu_eaiphambanweni()
break

case "Jesus keep me near the cross":
Jesus_keep_me_near()
break

case "Jesus loves me this I know":
Jesus_loves_me()
break

case "Kana Jesu achidzoka":
Kana_jesu_achidzoka()
break

case "Kebibhek'uthando lwakhe":
Kebibhek_uthando()
break

case "Kunenzvimbo yakanaka":
Kunenzvimbo_yakanaka()
break

case "Limhloli omuhle":
Limhloli_omuhle()
break

case "Lenani izulu ngeculo lwami":
Lenani_izulu_ngeculo_lwami()
break

case "Lets talk about Jesus":
Lets_talk_about_jesus()
break

case "Lifikile ivangeli":
Lifikile_ivangeli()
break

case "Limnandi kimi lilo gama":
Limnandi_kimi_lilo_gama()
break

case "Mhla ngidhiwa ngikhatele":
Mhla_ngidhiwa_ngikhatele()
break

case "Mufudzi ndiye Jehovha":
Mufudzi_ndiye_jehovha()
break

case "Mukai mukai vatendi":
Mukai_mukai_vatendi()
break

case "Mumwe ariko kumusoro":
Mumwe_ariko_kumusoro()
break

case "Mumhanzi urikudenga":
Mumhanzi_urikudenga()
break

case " Murapi aripano":
Murapi_aripano()
break

case "Mununuri ndinomuda":
Mununuri_ndinomuda()
break

case "Musandipfuura Jesu":
Musandipfuura_jesu()
break

case "Mwari ishe zvandinofungidzira":
Mwari_ishe_zvandinofungidzira()
break

case "Mwari baba vangu":
Mwari_baba_vangu()
break

case "Mweya mutsvene wamwari":
Mweya_mutsvene_wamwari()
break

case "Mweya wangu unomuponesi":
Mweya_wangu_unomuponesi()
break

case "Namhla ngiyaqhutw' umoya":
Namhla_ngiyaqhutw_umoya()
break

case "Ndakabarwa munerima":
Ndakabarwa_munerima()
break

case "Ndanzwa inzwi renyu":
Ndanzwa_inzwi_renyu()
break

case "Ndinoshamiswa kwazvo":
Ndinoshamiswa_kwazvo()
break

case "Ndinosimuda Ishe":
Ndinosimuda_Ishe()
break 

case "Ndinouya nemashoko erudo":
Ndinouya_nemashoko_erudo()
break

case "Ndiyani panezamba":
Ndiyani_panezamba()
break

case "Ndofamba ndofamba":
Ndofamba_ndofamba()
break

case  "Ndozvipira zvese zvangu":
Ndozvipira_zvese_zvangu()
break

case "Nhasi ngatimutondere":
Nhasi_ngatimutondere()
break

case "Ngazo zonk' izinsuku":
Ngazo_zonk_izinsuku()
break

case "Ngizifumane umsindisi":
Ngizifumane_umsindisi()
break

case "Ngingenwe emoyeni wani":
Ngingenwe_emoyeni_wani()
break

case "Ngingumfokasi lapha emhlabeni":
Ngingumfokasi_lapha_emhlabeni()
break

case "Ngiqhutshwa ngumoya":
Ngiqhutshwa_ngumoya()
break

case "Ngiyeza nginje Nkosiyami":
Ngiyeza_nginje_Nkosiyami()
break

case "Ngomdumis' umhlengi wam":
Ngomdumis_umhlengi_wam()
break

case "Ngomusa wakho omukhulu":
Ngomusa_wakho_omukhulu()
break 

case "Ngomusindisi anami la empani":
Ngomusindisi_anami_la_empani()
break

case "Nguva yakanakisisa":
Nguva_yakanakisisa()
break

case "Nkosi bhek' ibandla lakho":
Nkosi_bhek_ibandla_lakho()
break

case "Nkosi ube isiphepho":
Nkosi_ube_isiphepho()
break

case "Nxa ebizwa amagama":
Nxa_ebizwa_amagama()
break

case "Nzwi renyu ndinonzwa":
Nzwi_renyu_ndinonzwa()
break

case "O bayede Nkosi engcwele":
O_bayede_Nkosi_engcwele()
break

case "O happy day":
O_happy_day()
break

case "O'Msindisi jasu kristu":
O_Msindisi_Jesu_Kristu()
break

case "Oh it is Jesus":
Oh_it_is_Jesus()
break

case "Oh Lord my God":
Oh_Lord_my_God()
break

case "Oh what man from Galilee":
Oh_what_man_from_Galilee()
break 

case "Onward Christian soldier":
Onward_Christian_soldier()
break

case "Pamusoro pakudenga":
Pamusoro_pakudenga()
break

case "Panenzvimbo yakanaka":
Panenzvimbo_yakanaka()
break

case "Pass me not oh gentle saviour":
Pass_me_not_oh_gentle_saviour()
break

case "Pedo wedenga Ishe":
Pedo_wedenga_Ishe()
break

case "Phaphamani bazwane baka kristu":
Phaphamani_bazwane_baka_kristu()
break

case "Ranaka iro zuva":
Ranaka_iro_zuva()
break

case "Reach out and touch":
Reach_out_and_touch()
break

case "Rejoice in the Lord always":
Rejoice_in_the_Lord_always()
break

case "Riripo tsime rizere":
Riripo_tsime_rizere()
break

case "Rock of ages cleft for me":
Rock_of_ages_cleft_for_me()
break

case "Sewakhile enhlizweni":
Sewakhile_enhlizweni()
break

case "She wedenga ave nemiwo":
She_wedenga_ave_nemiwo()
break

case "Shine on me":
Shine_on_me()
break

case "Sikhathi somkhululeko":
Sikhathi_somkhululeko()
break

case "When we all got to heaven":
When_we_all_got_to_heaven()
break

case "Soqonda ekhaya":
Soqonda_ekhaya()
break

case "Siyakunxusa Nkosi yethu":
Siyakunxusa_Nkosi_yethu()
break

case "Sowing in the morning":
Sowing_in_the_morning()
break

case "Teach me thy way":
Teach_me_thy_way()
break

case "That God should love":
That_God_should_love()
break

case "Thatha konke nginoJesu":
Thatha_konke_nginoJesu()
break

case "Thatha nkosi inhliziyo":
Thatha_nkosi_inhliziyo()
break

case "The circuit rider preacher":
The_circuit_rider_preacher()
break

case "The joy of the Lord is my strength":
joy_of_the_Lord_is_my_strength()
break

case "There is a land that is fairer than day":
a_land_that_is_fairer_than_day()
break

case "There is a name i love to hear":
There_is_a_name_i_love_to_hear()
break

case "There is a place of quiet rest":
There_is_a_place_of_quiet_rest()
break

case "There shall be showers of blessings":
shall_be_showers_of_blessings()
break

case "There were in the upper chamber":
There_were_in_the_upper_chamber()
break

case "Thina sihlengiwe igazi":
Thina_sihlengiwe_igazi()
break

case "This is the day":
This_is_the_day()
break

case "Tine Chipo chakanaka":
Tine_Chipo_chakanaka()
break

case "Tofara sei":
Tofara_sei()
break

case "Tshala ekuseni thshala imbewu yezwi":
Tshala_ekuseni_thshala_imbewu_yezwi()
break

case "Tsitsi dzinondishamisa":
Tsitsi_dzinondishamisa()
break

case "Tsitsi hedzi dzamira dzoga":
Tsitsi_hedzi_dzamira_dzoga()
break

case "Ubusisiwe":
Ubusisiwe()
break

case "Ungatora hako pasi":
Ungatora_hako_pasi()
break

case "Umhlatshelo wezono":
Umhlatshelo_wezono()
break

case "Urikutambudzikireiko":
Urikutambudzikireiko()
break

case "Uthando lukha baba":
Uthando_lukha_baba()
break

case "Uyadlula ngokushesha":
Uyadlula_ngokushesha()
break

case "Uyamazi ujesuyini":
Uyamazi_ujesuyini()
break

case "Vanhu uyai kunajesu":
Vanhu_uyai_kunajesu()
break

case "Vukani bandla bo":
Vukani_bandla_bo()
break

case "Wadzira nhasi here":
Wadzira_nhasi_here()
break

case "Wauya wauyamucheki mukuru":
Wauya_wauyamucheki_mukuru()
break

case "Webathandwa yek' inhanhla":
Webathandwa_yek_inhanhla()
break

case "Welikwezi lakusasa":
Welikwezi_lakusasa()
break

case "Wena' ke omileyo":
Wena_ke_omileyo()
break

case "We've got a very big God":
We_ve_got_a_very_big_God()
break

case "When i come to the river":
When_i_come_to_the_river()
break

case "When the saints":
When_the_saints()
break

case "When the saviour calls i will answer":
the_saviour_calls_i_will_answer()
break

case "When we all get to heaven":
When_we_all_get_to_heaven()
break

case "Wings of snow white dove":
Wings_of_snow_white_dove()
break

case "Would you be free":
Would_you_be_free()
break 

case "Yek' ikhaya elihle nanti liyana":
Yek_ikhaya_elihle_nanti_liyana()
break

case "Yek' inhlahla esinayo":
Yek_inhlahla_esinayo()
break

case "Yek' ubuhle bokukholwa":
Yek_ubuhle_bokukholwa()
break

case "Yiba nam":
Yiba_nam()
break

case "Yimani isibindi":
Yimani_isibindi()
break;
}
}
function Abatwana()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("white")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText( "\n\n¹Abatwana abenkosi\nKabanazo izingozi,\n"+
"Bahlez' okwenyon' endlini,\nNenkanyezi ezulwini\n"+
"\n²Oyinkosi yaphezulu\nUbuthanda he, khakulu;\n"+
"Ubufaka ekwapheni\nBangene ekufeni\n"+
"\n³Kakumuntu onamandla\n"+
"Okuchith' elak'ibandla\n"+
"Yen'ungumfo weth' impela\n"+
"Usiphat' Usivikele\n"+
"\n⁴UnguBab' onobubele,\n"+
"Uyabala nezinwele,\n"+
"Usifunz' usigqokisa,\n"+
"Yebo usijabulisa\n"+
"\n5 Jabuleka ngakho bandla,\n"+
"Uvikelwa onamandla,\n"+
"Zonk' ezakhoke izitha\n"+
"Uzisusa ezichita\n"+
"\n6 Noma ungashanywi uvalo\n"+
"Yena ungu yihlo njalo\n"+
"Into inye ayifisa,\n"+
"Yona, ukukusindisa\n", 1,0.8, "Multiline,Left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "black" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("gray")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("gray")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)


   btn = app.CreateButton("[fa-heart]",0.4,0.08, "FontAwesome")
   btn. SetBackColor("gray")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.3,0.08, "FontAwesome")
   fav.SetBackColor("gray")
   fav.SetOnTouch(Aliko_emhlabeni_ikhaya_lami_qa);
   hdr.AddChild(fav)

    app.AddLayout( lay );
}

function Aliko_emhlabeni_ikhaya_lami_qa()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText( "\n\n¹Alikho emhlabeni ikhaya lami qha\n"+
"Nginguwe ohambayo ngizula zula la\n"+
"Ikhaya lami nantolise zulwini, ha!\n"+
"Alikho la elinje nalodwa,\n"+
"\n2. Khaya lami lihle hle!\n"+
"Muzi wami muhle hle!\n"+
"Ukhona sizohuba sithi Halleluya!\n"+
"Bhekha le buso bami\n"+
"Yizwa ke ndlebe yami\n"+
"Ikhaya lami nanto phezulu\n"+
"\n3. Kungaba yini mange ezongibamba pha\n"+
"Ngifuna inhlizito enhlope ithe la\n"+
"Ngakuba kungengene ikhaya leliya\n"+
"Into engcolileyo nayodwa\n"+
"\n4. Mhla sabasingenile siboni umuzi le\n"+
"Nay' umusindisi wethu nobuhle  buthe hle\n"+
"Angitshelwanga noma inxengwe\n"+
"\n5. Sengiyancela, Nkosi\n"+
"Uba ngiphiwe - ke\n"+
"Lamandla engiwandinga\n"+
"U'ba ngifike le\n"+
"Ngokuba izilingo\n"+
"Zingihaqile, he\n"+
"Ngiyohluleka uma\n"+
"Uma ngingedwa\n"+
"\n6. Ungubab' onobubele,\n"+
"Uyabala nezinwele,\n"+
"Usifunzi usigqokisa,\n"+
"Yebo usijabulisa,\n"+
"\n7. Jabuleka ngakho bandla\n"+
"Uvikelwa onamandla\n"+
"Zonk' ezakho ke izitha\n"+
"Uzisuse ezichita\n"+
"\n8. Noma ungashaywi uvalo\n"+
"Yena ungyihlo njalo\n"+
"Into inye ayifisa\n"+
"Yona, ukukusindisa\n", 1,0.8, "Multiline,Left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Abatwana)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(All_over_the_world)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}

function All_over_the_world()
{
   lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText( "\n\n\t\t¹All over the world\n"+
"\t\tThe Spirit is moving,\n"+
"\t\tAll over the world\n"+
"\t\tAs the prophet sait it would be\n"+
"\t\tAll over  the the world\n"+
"\t\tThere's a might revelation\n"+
"\t\tOf the Glory of the Lord\n"+
"\t\tAs the waters cover the sea\n"+
"\n\t\t²Deep down in my heart\n"+
"\t\tThe Spirit is moving,\n"+
"\t\tDeep down in my heart\n"+
"\t\tAs the prophet sait it would be\n"+
"\t\tDeep down in my heart\n"+
"\t\tThere's a might revelation\n"+
"\t\tOf the Glory of the Lord\n"+
"\t\tAs the waters cover the sea\n"+
"\n\t\t³Right here in this place\n"+
"\t\tThe Spirit is moving,\n"+
"\t\tRight here in this place\n"+
"\t\tAs the prophet sait it would be\n"+
"\t\tRight here in this place\n"+
"\t\tThere's a might revelation\n"+
"\t\tOf the Glory of the Lord\n"+
"\t\tAs the waters cover the sea\n", 1,0.8, "Multiline,Left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Aliko_emhlabeni_ikhaya_lami_qa)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(All_praises_to_Him_who_reigns)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function All_praises_to_Him_who_reigns()
{
   lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText( "\n\n\t\t¹All praise to Him  who reigns above\n"+
"\t\tIn majesty supreme\n"+
"\t\tWho gave His son for man to die\n"+
"\t\tThat He might man redeem\n"+
"\n\t\tChorus\n"+
"\t\tBlessed be the name, blesed be the name\n"+
"\t\tBlessed be the name of the Lord\n"+
"\t\tBlessed be the name, blessed be the name\n"+
"\t\tBlessed be the name of the Lord\n"+
"\t\t(Jesus is the name.....)\n"+
"\t\t(Magnify His namme.....)\n"+
"\n\t\t²His name above all names shall stand\n"+
"\t\tExalted more and more\n"+
"\t\tAt God the Father''s own right hand\n"+
"\t\tWhen angel hosts adore\n"+
"\n\t\t³Redeemer, saviour,  friend of man\n"+
"\t\tOnce ruined by the fall\n"+
"\t\tThou hast devised salvation's plan\n"+
"\t\tFor thou hast died for all\n"+
"\n\t\t⁴His name shall be cancellor\n"+
"\t\tThe might prince of peace\n"+
"\t\tOf the earth's kingdom conqueror\n"+
"\t\tWhose reign shall never cease\n", 1,0.8, "Multiline,Left" );
    txt.SetTextSize( 25);
     txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(All_over_the_world)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Apo_Jesu_anouya)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Apo_Jesu_anouya()
{
  lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\n1. APO Jesu anouya kotora varume,\n"+
"Anotora vakanaka, avo vanomuda.\n"+
"\nKorus:\n"+
"Vanhu vake vatsvene, vasine zvitema\n"+
"Vanotenda kudenga kugara naJesu.\n"+
"\n2. Apo Jesu anouya kotora vakadzi,\n"+
"Anotora vakanaka, avo vanomuda.\n"+
"\n3. Apo Jesu anouya kotora vacheche,\n"+
"Anotora vakanaka avo vanomuda.\n"+
"\n4. Vana vake pasi pano, uyanyi kwaari,\n"+
"Anomuda zvirokwazvo ngerudo rukuru.\n"+
"\n5. Ngatiedze misi yese kufadza M’ponesi,\n"+
"Kuti tizotorwa ndiye kudenga kumsoro.\n",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(All_praises_to_Him_who_reigns)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Apo_ndatambudzika)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Apo_ndatambudzika()
{
  lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\n¹Apo ndatambudzika\n"+
"Nezvakaipa zvangu,\n"+
"Nezvirunziro zvangu\n"+
"Ndinzwei Baba vangu.\n"+
"\nChorus\n"+
"Ndicherechedze Baba we!\n"+
"Ndicherechedze Baba we!\n"+
"\n²O Baba Samasimba,\n"+
"Ndipeyi simba renyu,\n"+
"Nekuti ndinoshaya\n"+
"\n³Kugara zvakanaka.\n"+
"\nPanguva yekuchema,\n"+
"Nenguva yekutamba,\n"+
"Nenguva dzeusiku,\n"+
"Pabasa rangu rese.\n"+
"\n⁴Parwendo rweupenyu,\n"+
"Nditongei nguva dzese.\n"+
"Mudenda rakaipa,\n"+
"Ndichengeteyi, Baba.\n",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Apo_Jesu_anouya)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Apo_torapito_yake_Mwari)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Apo_torapito_yake_Mwari()
{
  lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\n¹Apo toropito yake Mwari inorira kwazvo\n"+
"Inotaura kune vese kuti uyai,\n"+
"Tese tinobvira kuenda iyo hakusari munhu\n"+
"Nemazita edu achazodaidzwa.\n"+
"\nChorus\n"+
"Kuti ndodaidzwa ndiye\n"+
"Kuti ndodaidzwa ndiye\n"+
"Kuti ndodaidzwa ndiye\n"+
"Kuti ndodaidzwa ndiye ndovayo\n"+
"\n²Asi hatizivi musi uyo tichadanwa naiye,\n"+
"Ndizvo ngatigadzirire zvino pano\n"+
"Tirindire uyo musi, tizonatsa kuenda iko,\n"+
"Nemazita edu achazodaidzwa.\n"+
"\n³Ngatibate basa redu nemasimba misi yese,\n"+
"Ngatitaure zvishamiso zvake zvese,\n"+
"Tichiita zvakanaka kune vanhu wese wese,\n"+
"Nemazita edu achazodaidwza.\n"+
"\n⁴Asi isu veMakristu hatizotyi kuenda iko,\n"+
"Mwari ndiye Baba wedu wakanaka,\n"+
"Jesu Kristu ndishamwari ndiye anotonga wese,\n"+
"Nemazita edu achazodaidzwa.\n",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
     txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Apo_ndatambudzika)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(A_friend_in_Jesus_what_a_bliss)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function A_friend_in_Jesus_what_a_bliss()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\n1. A friend of Jesus O what bliss.\n"+
  "\t\t\tThat one so vile as I\n"+
  "\t\t\tShould ever have a friend like this\n"+
  "\t\t\tT lead to the sky\n"+
"\nChorus\n"+
"\t\t\tFriendship with Jesus\n"+
"\t\t\tFellowship devine\n"+
"\t\t\tO what blessed sweet communion\n"+
"\t\t\tJesus is a friend of mine\n"+
"\n2. A  friend when other friendships cease\n"+
"\t\t\tA friend when others fail\n"+
"\t\t\tA friend who gives joy and peace\n"+
"\t\t\tA friend when foes assail\n"+
"\n3. A friende when sickness lays me low\n"+
"\t\t\tA friend when death draws near\n"+
"\t\t\tA friend as if He vale I go\n"+
"\t\t\tA friend to help and cheer\n"+
"\n4. As friend when life's short race is over\n"+
"\t\t\tA friend when earth is past\n"+
"\t\t\tA friend to me on heaven's shore\n"+
"\t\t\tA friend when home at last\n",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Apo_torapito_yake_Mwari)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Baba_ndiri_mwana_wenyu)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Baba_ndiri_mwana_wenyu()
{
  lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\n1.BABA ndiri mwana wako,\n"+
"Kana ndakatadza;\n"+
"Ndinochema mberi kwako,\n"+
"Baba ndiregerere.\n"+
"\n2. Zvitadzo zvangu zvizhinji,\n"+
"Hazvingaverengwi;\n"+
"Ndinozviisa kwauri;\n"+
"Baba ndiregerere.\n"+
"\n3.Mirau yako ndakatyora,\n"+
"Iwe ndakuzvidza;\n"+
"Mununuri ndamurasa,\n"+
"Baba ndiregerere.\n"+
"\n4.Ndakatadza nokureva,\n"+
"Ndakatadza kufunga,\n"+
"Ndakatadza namabasa;\n"+
"Baba ndiregerere.\n"+
"\n5. Kana ndanga ndafanira\n"+
"Nokukurumbidza,\n"+
"Ndatadza nokukanganwa,\n"+
"Baba ndiregerere.\n"+
"\n6. Nezvakaipa zvizhinji\n"+
"Baba ndakatadza,\n"+
"Ndakakunyadzisa iwe,\n"+
"Baba ndiregerere.\n"+
"\n7. Uri Mwari une ngoni,\n"+
"Dzisina kupera,\n"+
"Naizvozvo ndinochema,\n"+
"Baba ndiregerere.\n ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
     txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(A_friend_in_Jesus_what_a_bliss)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Baba_wedu_wakatsidza)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Baba_wedu_wakatsidza()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\n1. Baba wedu wakatsidza\n"+
"Ndinokutungamira,\n"+
"Kuti usarasikeba\n"+
"Pane rwendo kune denga.\n"+
"\nChorus\n"+
"\nNdinokutungamira\n"+
"Ndinokutungamira\n"+
"Pakukwira kune denga\n"+
"Ndinokutungamira\n"+
"\nApo unotambudzika,\n"+
"Nekushaya zano zviya,\n"+
"Unofadzwa neaya mazwi,\n"+
"Ndinokutungamirira.\n"+
"\n2. Kuti hama dzako dzafa,\n"+
"Uchidzichemera kwazvo,\n"+
"Unafunga aya mazwi,\n"+
"Ndinokutungamirira.\n"+
"\n3. Apo unokomborerwa,\n"+
"Mwoyo wako unofara,\n"+
"Unodisa aya mazwi,\n"+
"Ndinokutungamirira.\n"+
"\n4. Mangwanani ese ese,\n"+
"Unorangarira iye,\n"+
"Nechitsidzo chakanaka,\n"+
"Ndinokutungamirira.\n"+
"\n5. Apo unobata basa,\n"+
"Unafunga mazwi ake,\n"+
"Uyo wakakutsidzira,\n"+
"Ndinokutungamirira.\n"+
"\n6. Apo unorara pasi,\n"+
"Pausiku uri wega,\n"+
"Unatenda aya mazwi,\n"+
"Ndinokutungamirira.\n",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
     txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Baba_ndiri_mwana_wenyu)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Blessed_assurance)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Blessed_assurance()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Baba_wedu_wakatsidza)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Changamire_muponesi)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Changamire_muponesi()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\n1.CHANGAMIRE , Muponisi\n"+
"Ishe wakambozvidzwa;\n"+
"Nezvirwadzo zvako, tenzi,\n"+
"Kwakwaniswa kupona.\n"+
"Changamire, Mambo Jesu!\n"+
"Mutakuri wemhosva;\n"+
"Nako kufa kwakakomba\n"+
"Takapiwa upenyu.\n"+
"\n2. Gwayana raMwari baba\n"+
"Tonamata kwauri;\n"+
"Ropa rakaparadzirwa\n"+
"Isu vakarasika.\n"+
"Vanhu vako vose, Ishe\n"+
"Vakatengerwa nzwimbo;\n"+
"Vakazarurirwa musuwo\n"+
"Webako rokudenga.\n"+
"\n3.Changamire! Wakagadzwa\n"+
"Pachigaro chitswene,\n"+
"Hondo dzose dzokudenga\n"+
"Dzinokukurumbidza.\n"+
"Unoteurira isu,\n"+
"Unotireverera;\n"+
"Pamusha wako mutswene\n"+
"Unoda kutipinza.\n"+
"\n4. Wafanira kugam’chira\n"+
"Kukudzwa noutsvene;\n"+
"Kukurumbidzwa kukuru,\n"+
"Rudo rusingaperi.\n"+
"Tiyamurei ngirozi,\n"+
"Uyai nenziyo dzenyu;\n"+
"Tose tiimbire Mambo\n"+
"Tine mwoyo michena\n",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Blessed_assurance)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Chinjikano_ndirero)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Chinjikano_ndirero()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\n1. Chinjikano ndirero\n"+
"Tsime rweupenyu;\n"+
"Rinopodza vose\n"+
"She vanouya kwenyu.\n"+
"\nKorus:\n"+
"Ipapo, Ipapo, Jesu ndichakudza;\n"+
"Kusvikira ikweyo ndichimurumbiza.\n"+
"\n2. Chinjikano, ipapo\n"+
"Ndanga ndichihuta;\n"+
"Bva nenyasha ndipapo\n"+
"Pandakazofara.\n"+
"\n3. Maratidza ipapo\n"+
"Tsitsi dzenyu huru;\n"+
"Zvino mundibetserei\n"+
"Kuifunga kwazvo!\n"+
"\n4. Ndorambira ipapo,\n"+
"Ndichitenda kwoga;\n"+
"Pamwe handizivi’po.\n"+
"Asi apo poga.\n",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Changamire_muponesi)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Chinyarara_moyo_wangu)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Chinyarara_moyo_wangu()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\n1.CHINYARARA , mwoyo wangu, Jesu ndiye Mwari,\n"+
"Zviro zvese zviri pasi zvakasikwa ndiye.\n"+
"\nKorus:\n"+
"Kristu uyanyi, Kristu uyanyi,\n"+
"Hunde, uyai, Tenzi.\n"+
"\n2. Chinyarara, mwoyo wangu, Jesu Mambo kwaye,\n"+
"Unotenda kuna Mwari, tenda kuna Jesu.\n"+
"\n3. Chinyarara, mwoyo wangu, unokomborerwa,\n"+
"Haugari nguva ndefu, uchasvika denga.\n"+
"\n4. Chinyarara, mwoyo wangu, Jesu anowaka\n"+
"Imba yako yakanaka kune denga rake.\n"+
"\n5. Chinyarara, mwoyo wangu, Jesu ndiye Mwari,\n"+
"Kuda kwake kwakanaka, ngakuitwe ndiwe.\n",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Chinjikano_ndirero)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Come_and_dine)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Come_and_dine()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\n1. Jesus as a table spread where\nthe saints of God are fed\n"+
"He invites His chosen people \"come and dine\"\n"+
"With His manna He doth feed and\nsupplies iur every need;\n"+
"O it is sweet to sup with Jesus all the time\n"+
"\nChorus\n"+
"\nCome and dine, the master calleth\n"+
"Come and dine!\n"+
"You may feast at Jesus' table\n"+
"All the time;\n"+
"He who fed the multitude, turned\n"+
"The waters into wine\n"+
"To the hungry calleth now.\n"+
"Come and dine!\n"+
"\n2. The disciples came to the land, thus\nobeying Christ's command\n"+
"Gor the master calleth to them.\n"+
"Come and dine!\n"+
"There they found their heart's desires\n"+
"Bread and fish upon the fire;\n"+
"Thus He satisfies the hungry every time\n"+
"\n3. Soon the lamp will take His bride to\n"+
"Be with His side\n"+
"All the hosts of heave will be assembled\n"+
"I it will be a glorious sight;\n"+
"All the saints in spotless white;\n"+
"And with Jesus they will feast eternally\n",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Chinyarara_moyo_wangu)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Dzidzisai_vadzidzisi)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Dzidzisai_vadzidzisi()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\n1.DZIDZISAI vadzidzisi,\n"+
"Imi vanhu vake!\n"+
"Mudzidzise izwi rake\n"+
"Kudzo dzose nyika.\n"+
"\n2. Asi ngoro yezwi rako\n"+
"Ngaifambe iyo;\n"+
"Kudzo dzose nzvimbo, Jesu,\n"+
"Ngaifambe iyo.\n"+
"\n3. Vadzidzisi dzidzisai,\n"+
"Imi vanhu vake!\n"+
"Ngarinzwiwe dama rake\n"+
"Navo vanhu vose.\n"+
"\n4. Asi dama rako, Ishe,\n"+
"Ngarisvike muno;\n"+
"Ngarikwane nyika yose,\n"+
"Kudzo dzose nzwimbo.\n"+
"\n5.Asi nyika ndiri kure,\n"+
"Ngadzizive idzo;\n"+
"Dzitarire kuna Jesu,\n"+
"Dzichitenda Iye.\n",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Come_and_dine)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Esandleni_somusa)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Esandleni_somusa()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Dzidzisai_vadzidzisi)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Baba_ndiri_mwana_wenyu)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Esiphambanweni()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Esandleni_somusa)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Emzini_kaDavide)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Emzini_kaDavide()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
     txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Esiphambanweni)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(God_be_with_you)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function God_be_with_you()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Apo_torapito_yake_Mwari)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Glory_to_his_name)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Glory_to_his_name()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Apo_torapito_yake_Mwari)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Hakuna_hama_kupinda_jesu)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Hakuna_hama_kupinda_jesu()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\n1.HAKUNA hama kupinda Jesu,\n"+
"Hakunaba, hakuchina.\n"+
"Hakuna umwe kurapa vese,\n"+
"Hakunaba, hakuchina.\n"+
"\nKorus:\n"+
"Jesu ndiye shamwari yedu,\n"+
"Anonatsa kutungamira,\n"+
"Hakuna umwe kupinda Jesu,\n"+
"Hakunaba, hakuchina.\n"+
"\n2. Hakuna mumwe mukuru zveba.\n"+
"Hakunaba, hakuchina.\n"+
"Hakuna umwe mununudziri,\n"+
"Hakunaba, hakuchina.\n"+
"\n3. Hakuna chipo chikuru zveba,\n"+
"Hakunaba, hakuchina.\n"+
"Hakuna umwe kurapa mwoyo,\n"+
"Hakunaba, hakuchina.\n"+
"\n4. Hakuna nguva tisingaonwi,\n"+
"Hakunaba, hakuchina.\n"+
"Hapana nzvimbo asingazivi,\n"+
"Hakunaba, hakuchina.\n",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
     txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Glory_to_his_name)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Hama_yedu)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Hama_yedu()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Hakuna_hama_kupinda_jesu)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Hatina_musha)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Hatina_musha()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\1. HATINA musha panyika,\n"+
"Hatifari kuva pano,\n"+
"Zvinofadza mweya yedu\n"+
"Kutsvaka musha unouya\n"+
"\n2. Hatinamusha panyika,\n"+
"Tinoda musha uri kure,\n"+
"Zita rawo iZioni\n"+
"Unopenya nguva dzese.\n"+
"\n3. Musha une runyararo\n"+
"Vafambi vachazorora,\n"+
"Dai ndine mapapiro,\n"+
"Ndaiuya ndizorore.\n"+
"\n4. Mweya wangu Chinyarara\n"+
"Mwari Anoziva nguva,\n"+
"Ndichaita kuda kwake,\n"+
"Iye wondipa zororo.\n",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Hama_yedu)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Have_thy_own_way)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Have_thy_own_way()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
     txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Hatina_musha)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Hlengiwe)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Hlengiwe()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Have_thy_own_way)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Hosana_wekudenga)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Hosana_wekudenga()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\n1.HOSANA wokudenga,\n"+
"Ndoimba nezwi rangu,\n"+
"KuMwana waDavid,\n"+
"Wauya Kwandiri,\n"+
"Hosana, ndiyamure\n"+
"Pakurema kwangu:\n"+
"Wauya asadanwa\n"+
"Muponisi wangu.\n"+
"\n2.Ndoshonge dzakadini\n"+
"Azondishanyira?\n"+
"Mugadziriri iwe\n"+
"Moyo wako wose,\n"+
"Ndoupira kwauri\n"+
"Mununuri wangu,\n"+
"Upfugame namabvi\n"+
"Chokwadi ‘she wangu.\n"+
"\n3.Ndasunungurwa newe\n"+
"Mudhorongo rangu:\n"+
"Rakadimurwa newe\n"+
"Iro joti rangu\n"+
"Rakandirasikisa\n"+
"Ndasiya upenyu\n"+
"Wakandifarisazve\n"+
"Pakuchema kwangu.\n",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Hlengiwe)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(I_am_weak)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function I_am_weak()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Hosana_wekudenga)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Igama_lenkosi)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Igama_lenkosi()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(I_am_weak)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Igama_lajesu)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Igama_lajesu()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
     txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Igama_lenkosi)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Igama_likajesu)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Igama_likajesu()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Igama_lajesu)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Hosana_wekudenga)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Indaba_emnandi()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
     txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Igama_likajesu)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Ingiroz_dzinoimba)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Ingiroz_dzinoimba()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\n1. INGIROSI dzinoimba,\n"+
"Dzinokuwa nokufara,\n"+
"Denga rese rinofadzwa,\n"+
"Mazambara azarurwa;\n"+
"Jesu Mambo wakauya,\n"+
"Tenzi wevatendi vese;\n"+
"Haleluya kuna Jesu!\n"+
"Haleluya kuna Mambo!\n"+
"\n2. Jesu watokwidzwa denga,\n"+
"Ane mbiri yakakomba,\n"+
"Matomupa simba rese;\n"+
"Wonai ari pachigaro,\n"+
"Jesu anotonga ega;\n"+
"Haleluya kuna Jesu!\n"+
"Haleluya kuna Mambo!\n"+
"\n3. Jesu watokwidzwa denga,\n"+
"Kuna Baba wake iyo,\n"+
"Basa rake pasi pano\n"+
"Rakapera zvakanaka;\n"+
"Zvino ari kutunhidzwa\n"+
"Ngevatsvene vekudenga;\n"+
"Haleluya kuna Jesu!\n"+
"Haleluya kuna Mambo!\n"+
"\n4. Jesu watokwidzwa denga,\n"+
"Zvino watogadzwa Mambo,\n"+
"Anotonga nechisepe,\n"+
"Mambo wedu wakanaka;\n"+
"Ngatikudze zita rake;\n"+
"Haleluya kuna Jesu!\n"+
"Haleluya kuna Mambo!\n",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
     txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Indaba_emnandi)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Ikhona_indawo)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Ikhona_indawo()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Ingiroz_dzinoimba)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Ingonyama_kajuda)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Ingonyama_kajuda()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Ikhona_indawo)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Inyang_enkulu)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Inyang_enkulu()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Ingonyama_kajuda)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Ishe_komborera_africa)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Ishe_komborera_africa()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Inyang_enkulu)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Isiphephelo)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Isiphephelo()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
     txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Ishe_komborera_africa)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Its_the_old_time)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Its_the_old_time()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Isiphephelo)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(I_will_sing)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function I_will_sing()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
     txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Its_the_old_time)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Itai_muponesi_wangu)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Itai_muponesi_wangu()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\n1. ITAI , M’ponesi izvo munoda,\n"+
"Muri muumbi, ndiriwo dongo;\n"+
"Ndiumbei, Tenzi, sezvo munoda.\n"+
"Ndakamirira, ndakatiwira.\n"+
"\n2. Itai, M’ponesi izvo munoda,\n"+
"Ndinangisenyi nekundiedza;\n"+
"Sukai mumwoyo, kuti ndichene,\n"+
"Ndizofanire denga kumusoro.\n"+
"\n3. Itai, M’ponesi izvo munoda,\n"+
"Ndakakuvadzwa, ngandirapwe:\n"+
"Simba ngerenyu kuda ngekwenyu,\n"+
"Ngandisimbiswe Mwana waMwari.\n"+
"Itai, M’ponesi izvo munoda,\n"+
"Pisai kuipa kotsai kunaka;\n"+
"Nditungamirenyi zvakarurama,\n"+
"Nditambirenyi, Tenzi, ndapota.\n"+
"\n4. Itai, M’ponesi izvo munoda,\n"+
"Ndidzidzisenyi zvese zvaBaba;\n"+
"Ndigadzirenyi umba kumsoro,\n"+
"Ndoda kugara nemwi M’ponesi.\n",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(I_will_sing)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(I_have_wondered)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function I_have_wondered()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Itai_muponesi_wangu)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Jabulani_sesingabatwana)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Jabulani_sesingabatwana()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
     txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(I_have_wondered)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Jabulani_bazalwane)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Jabulani_bazalwane()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Jabulani_sesingabatwana)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Jerusalema_musha_wangu)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Jerusarema_musha_wangu()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\n\t1. JERUSAREMA , musha wangu,\n"+
"\tMusha wakanaka!\n"+
"\tKana ndapedza mabasa,\n"+
"\tNdinoenda kwauri.\n"+
"\n\t2. Ndichauona rinhiko,\n"+
"\tUyo musha wangu?\n"+
"\tUne dzimba dzakanaka,\n"+
"\tNokudya kutsvene.\n"+
"\n\t2. Hapasisina kuipa,\n"+
"\tHapana nenhamu,\n"+
"\tNdinoramba ndichienda,\n"+
"\tKumusha mutsvene.\n"+
"\n\t3. Ndingatye here kurwadza?\n"+
"\tNdingatize kufa?\n"+
"\tKwete ndinoenda kuKenani,\n"+
"\tNyika yandinoda.\n"+
"\n\t4. Vaprofita vadzidzisi,\n"+
"\tVakafira Jesu,\n"+
"\tVaripo pamwe naKristu,\n"+
"\tNeni ndichienda.\n"+
"\n\t5. Jesusarema musha wangu,\n"+
"\tWandinotsvakisa!\n"+
"\tKana ndasvika kwauri,\n"+
"\tNdichafara kwazvo.\n",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Jabulani_bazalwane)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Ujesu_esiphambanweni)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Ujesu_esiphambanweni()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Jerusalema_musha_wangu)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Jesus_keep_me_near)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Jesus_keep_me_near()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
     txt.SetOnLongTouch(cpy)
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Ujesu_esiphambanweni)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Jesus_loves_me)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Jesus_loves_me()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Jesus_keep_me_near)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Hosana_wekudenga)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Kana_jesu_achidzoka()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Jesus_loves_me)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Kebibhek_uthando)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Kebibhek_uthando()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Kana_jesu_achidzoka)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Kunenzvimbo_yakanaka)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Kunenzvimbo_yakanaka()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Kebibhek_uthando)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Limhloli_omuhle)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Limhloli_omuhle()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Kunenzvimbo_yakanaka)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Lenani_izulu_ngenculo_lwami)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Lenani_izulu_ngeculo_lwami()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Limhloli_omuhle)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Lets_talk_about_jesus)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Lets_talk_about_jesus()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Lenani_izulu_ngenculo_lwami)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Lifikile_ivangeli)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Lifikile_ivangeli()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Lets_talk_about_jesus)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Limnandi_kimi_lilo_gama)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Limnandi_kimi_lilo_gama()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Lifikile_ivangeli)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Mhla_ngidhiwa_ngikhatele)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Mhla_ngidhiwa_ngikhatele()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Limnandi_kimi_lilo_gama)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Mufudzi_ndiye_jehovha)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Mufudzi_ndiye_jehovha()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Mhla_ngidhiwa_ngikhatele)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Mukai_mukai_vatendi)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Mukai_mukai_vatendi()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Mufudzi_ndiye_jehovha)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Mumwe_ariko_kumusoro)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Mumwe_ariko_kumusoro()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Mukai_mukai_vatendi)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Mumhanzi_urikudenga)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Mumhanzi_urikudenga()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Mumwe_ariko_kumusoro)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Murapi_aripano)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Murapi_aripano()
{
  lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Mumhanzi_urikudenga)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Mununuri_ndinomuda)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Mununuri_ndinomuda()
{
  lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Murapi_aripano)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Musandipfuura_jesu)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Musandipfuura_jesu()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Mununuri_ndinomuda)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Mwari_ishe_zvandinofungidzira)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Mwari_ishe_zvandinofungidzira()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Musandipfuura_jesu)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Mwari_baba_vangu)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Mwari_baba_vangu()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Mwari_ishe_zvandinofungidzira)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Mweya_mutsvene_wamwari)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Mweya_mutsvene_wamwari()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Mwari_baba_vangu)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Mweya_wangu_unomuponesi)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Mweya_wangu_unomuponesi()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Mweya_mutsvene_wamwari)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Namhla_ngiyaqhutw_umoya)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Namhla_ngiyaqhutw_umoya()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Mweya_wangu_unomuponesi)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Ndakabarwa_munerima)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Ndakabarwa_munerima()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Namhla_ngiyaqhutw_umoya)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Ndanzwa_inzwi_renyu)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Ndanzwa_inzwi_renyu()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Ndakabarwa_munerima)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Ndinoshamiswa_kwazvo)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Ndinoshamiswa_kwazvo()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Ndanzwa_inzwi_renyu)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Ndinosimuda_Ishe)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Ndinosimuda_Ishe()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Ndinoshamiswa_kwazvo)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Ndinouya_nemashoko_erudo)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Ndinouya_nemashoko_erudo()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Ndinosimuda_Ishe)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Ndiyani_panezamba)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Ndiyani_panezamba()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Ndinouya_nemashoko_erudo)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Ndofamba_ndofamba)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Ndofamba_ndofamba()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Ndiyani_panezamba)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Ndozvipira_zvese_zvangu)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Ndozvipira_zvese_zvangu()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Ndofamba_ndofamba)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Nhasi_ngandimutondere)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Nhasi_ngatimutondere()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Ndozvipira_zvese_zvangu)
   hdr.AddChild(prev)


   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Ngazo_zonk_izinsuku)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Ngazo_zonk_izinsuku()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Nhasi_ngandimutondere)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Ngifumane_umusindisi)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Ngizifumane_umsindisi()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Ngazo_zonk_izinsuku)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Ngingenwe_emoyeni_wami)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Ngingenwe_emoyeni_wani()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Ngifumane_umusindisi)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Ngingumfokasi_lapha_emhlabeni)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Ngingumfokasi_lapha_emhlabeni()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Ngingenwe_emoyeni_wami)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Ngiqhutshwa_ngumoya)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Ngiqhutshwa_ngumoya()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Ngingumfokasi_lapha_emhlabeni)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Ngiyeza_nginje_Nkosiyami)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Ngiyeza_nginje_Nkosiyami()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Ngiqhutshwa_ngumoya)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Ngomdumis_umhlengi_wami)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Ngomdumis_umhlengi_wami()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Ngiyeza_nginje_Nkosiyami)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Ngomusa_wakho_omukhulu)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Ngomusa_wakho_omukhulu()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Ngomdumis_umuhlengi_wami)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Ngomusindisi_anami_la_empani)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Ngomusindisi_anami_la_empani()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Ngomusa_wakho_omukhulu)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Nguva_yakanakisisa)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Nguva_yakanakisisa()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Ngomusindisi_anami_la_empani)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Nkosi_bhek_ibandla_lakho)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Nkosi_bhek_ibandla_lakho()
{
lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Nguva_yakanakisisa)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Nkosi_ube_isiphepho)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Nkosi_ube_isiphepho()
{
lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Nkosi_bhek_ibandla_lakho)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Nxa_ebizwa_amagama)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Nxa_ebizwa_amagama()
{
lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Nkosi_ube_isiphepho)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Nzwi_renyu_ndinonzwa)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Nzwi_renyu_ndinonzwa()
{
lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Nxa_ebizwa_amagama)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(O_bayede_Nkosi_engcwele)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function O_bayede_Nkosi_engcwele()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Nzwi_renyu_ndinonzwa)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(O_happy_day)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 

}
function O_happy_day()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(O_bayede_Nkosi_engcwele)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(O_Msindisi_Jesu_Kristu)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 

}
function O_Msindisi_Jesu_Kristu()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(O_happy_day)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Oh_it_is_Jesus)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Oh_it_is_Jesus()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(O_Msindisi_Jesu_Kristu)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Oh_Lord_my_God)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 
}
function Oh_Lord_my_God()
{
  lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Oh_it_is_Jesus)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Oh_what_man_from_Galilee)
   hdr.AddChild(fav)

    app.AddLayout( lay ); 

}
function Oh_what_man_from_Galilee()
{
   lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Oh_Lord_my_God)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Onward_Christian_soldier)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Onward_Christian_soldier()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Oh_what_man_from_Galilee)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Pamusoro_pakudenga)
   hdr.AddChild(fav)

    app.AddLayout( lay );

}
function Pamusoro_pakudenga()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Onward_Christian_soldier)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Panenzvimbo_yakanaka)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Panenzvimbo_yakanaka()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Pamusoro_pakudenga)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Pass_me_not_oh_gentle_saviour)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Pass_me_not_oh_gentle_saviour()
{
 lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Panenzvimbo_yakanaka)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Pedo_wedenga_Ishe)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Pedo_wedenga_Ishe()
{
lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Pass_me_not_oh_gentle_saviour)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Phaphamani_bazwane_baka_kristu)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Phaphamani_bazwane_baka_kristu()
{
lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Pedo_wedenga_Ishe)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Ranaka_iro_zuva)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Ranaka_iro_zuva()
{
lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Phaphamani_bazwane_baka_kristu)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Reach_out_and_touch)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Reach_out_and_touch()
{
lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Ranaka_iro_zuva)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Rejoice_in_the_Lord_always)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Rejoice_in_the_Lord_always()
{
lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Ranaka_iro_zuva)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Riripo_tsime_rizere)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Riripo_tsime_rizere()
{
lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Rejoice_in_the_Lord_always)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Rock_of_ages_cleft_for_me)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Rock_of_ages_cleft_for_me()
{
lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Riripo_tsime_rizere)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Sewakhile_enhlizweni)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Sewakhile_enhlizweni()
{
lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Rock_of_ages_cleft_for_me)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(She_wedenga_ave_nemiwo)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function She_wedenga_ave_nemiwo()
{
lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Sewakhile_enhlizweni)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Shine_on_me)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Shine_on_me()
{
lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(She_wedenga_ave_nemiwo)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Sikhathi_somkhululeko)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Sikhathi_somkhululeko()
{
lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Shine_on_me)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(When_we_all_get_to_heaven)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function When_we_all_get_to_heaven()
{
lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Sikhathi_somkhululeko)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Soqonda_ekhaya)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Soqonda_ekhaya()
{
lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(When_we_all_get_to_heaven)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Siyakunxusa_Nkosi_yethu)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Siyakunxusa_Nkosi_yethu()
{
lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Soqonda_ekhaya)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Sowing_in_the_morning)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Sowing_in_the_morning()
{
lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Siyakunxusa_Nkosi_yethu)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Teach_me_thy_way)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Teach_me_thy_way()
{
lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Sowing_in_the_morning)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(That_God_should_love)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function That_God_should_love()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Teach_me_thy_way)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Thatha_konke_nginoJesu)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Thatha_konke_nginoJesu()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(That_God_should_love)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Thatha_nkosi_inhliziyo)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Thatha_nkosi_inhliziyo()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Thatha_konke_nginoJesu)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(The_circuit_rider_preacher)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function The_circuit_rider_preacher()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Thatha_nkosi_inhliziyo)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(joy_of_the_Lord_is_my_strength)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function joy_of_the_Lord_is_my_strength()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(The_circuit_rider_preacher)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(a_land_that_is_fairer_than_day)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function a_land_that_is_fairer_than_day()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(joy_of_the_Lord_is_my_strength)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(There_is_a_name_i_love_to_hear)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function There_is_a_name_i_love_to_hear()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(a_land_that_is_fairer_than_day)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(There_is_a_place_of_quiet_rest)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function There_is_a_place_of_quiet_rest()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(There_is_a_name_i_love_to_hear)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(shall_be_showers_of_blessings)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function shall_be_showers_of_blessings()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(There_is_a_place_of_quiet_rest)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(There_were_in_the_upper_chamber)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function There_were_in_the_upper_chamber()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(shall_be_showers_of_blessings)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Thina_sihlengiwe_igazi)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Thina_sihlengiwe_igazi()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(There_were_in_the_upper_chamber)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(This_is_the_day)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function This_is_the_day()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Thina_sihlengiwe_igazi)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Tine_Chipo_chakanaka)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Tine_Chipo_chakanaka()
{
lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(This_is_the_day)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Tofara_sei)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Tofara_sei()
{
lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Tine_Chipo_chakanaka)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(ekuseni_thshala_imbewu_yezwi)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function ekuseni_thshala_imbewu_yezwi()
{
lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Tofara_sei)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Tsitsi_dzinondishamisa)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Tsitsi_dzinondishamisa()
{
lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(ekuseni_thshala_imbewu_yezwi)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Tsitsi_hedzi_dzamira_dzoga)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Tsitsi_hedzi_dzamira_dzoga()
{
lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Tsitsi_dzinondishamisa)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Ubusisiwe)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Ubusisiwe()
{
lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Tsitsi_hedzi_dzamira_dzoga)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Ungatora_hako_pasi)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Ungatora_hako_pasi()
{
lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Ubusisiwe)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Umhlatshelo_wezono)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Umhlatshelo_wezono()
{
lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Ungatora_hako_pasi)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Urikutambudzikireiko)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Urikutambudzikireiko()
{
lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Umhlatshelo_wezono)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Uthando_lukha_baba)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Uthando_lukha_baba()
{
lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Urikutambudzikireiko)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Uyadlula_ngokushesha)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Uyadlula_ngokushesha()
{
lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Uthando_lukha_baba)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Uyamazi_ujesuyini)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Uyamazi_ujesuyini()
{
lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Uyadlula_ngokushesha)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Vanhu_uyai_kunajesu)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Vanhu_uyai_kunajesu()
{
lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Uyamazi_ujesuyini)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Vukani_bandla_bo)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Vukani_bandla_bo()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Vanhu_uyai_kunajesu)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Wadzira_nhasi_here)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Wadzira_nhasi_here()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Vukani_bandla_bo)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Wauya_wauyamucheki_mukuru)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Wauya_wauyamucheki_mukuru()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Wadzira_nhasi_here)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Webathandwa_yek_inhanhla)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Webathandwa_yek_inhanhla()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Wauya_wauyamucheki_mukuru)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Welikwezi_lakusasa)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Welikwezi_lakusasa()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Webathandwa_yek_inhanhla)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Wena_ke_omileyo)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Wena_ke_omileyo()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Welikwezi_lakusasa)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(We_ve_got_a_very_big_God)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function We_ve_got_a_very_big_God()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Wena_ke_omileyo)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(When_i_come_to_the_river)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function When_i_come_to_the_river()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(We_ve_got_a_very_big_God)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(When_the_saints)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function When_the_saints()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(When_i_come_to_the_river)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(the_saviour_calls_i_will_answer)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function the_saviour_calls_i_will_answer()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(When_the_saints)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(When_we_all_get_to_heaven)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function When_we_all_get_to_heaven()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(the_saviour_calls_i_will_answer)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Wings_of_snow_white_dove)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Wings_of_snow_white_dove()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(When_we_all_get_to_heaven)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Would_you_be_free)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Would_you_be_free()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Wings_of_snow_white_dove)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Yek_ikhaya_elihle_nanti_liyana)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Yek_ikhaya_elihle_nanti_liyana()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Would_you_be_free)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Yek_inhlahla_esinayo)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Yek_inhlahla_esinayo()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Yek_ikhaya_elihle_nanti_liyana)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Yek_ubuhle_bokukholwa)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Yek_ubuhle_bokukholwa()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Yek_inhlahla_esinayo)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Yiba_nam)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Yiba_nam()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.2,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Yek_ubuhle_bokukholwa)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.3,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)
  
   fav = app.CreateButton("[fa-arrow-right]",0.2,0.08, "FontAwesome")
   fav.SetBackColor("blue")
   fav.SetOnTouch(Yimani_isibindi)
   hdr.AddChild(fav)

    app.AddLayout( lay );
}
function Yimani_isibindi()
{
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" );
    lay.SetBackColor("blue")

    scroll = app.CreateScroller("wrap")
    lay.AddChild( scroll )
    
  txt = app.CreateText("\n\nnot yet.\n"+
"there! ",1,0.8, "Multiline,left" );
    txt.SetTextSize( 25);
    txt.SetOnLongTouch(cpy)  
    txt.SetTextColor( "White" );
   scroll.AddChild(txt)

    hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackColor("blue")
    lay.AddChild(hdr)

   bck = app.CreateButton("[fa-list]",0.3,0.08, "FontAwesome")      
   bck.SetBackColor("blue")
   bck.SetOnTouch(b1_OnTouch)
   hdr.AddChild(bck)

   prev = app.CreateButton("[fa-arrow-left]",0.3,0.08, "FontAwesome")      
   prev.SetBackColor("blue")
   prev.SetOnTouch(Yiba_nam)
   hdr.AddChild(prev)

   btn = app.CreateButton("[fa-heart]",0.4,0.08, "FontAwesome")
   btn. SetBackColor("blue")
   hdr.AddChild(btn)

    app.AddLayout( lay );
}
function b2_OnTouch( )
{ 
    lay = app.CreateLayout( "Linear", "VCenter,FillXY" )  
    lay.SetBackground( "/Sys/Img/BlueBack.jpg" )

    var text = "<big><b>Acknowledgements</b></big>";
    btn = app.CreateButton( text, 0.6, -1, "Html" )
    btn.SetTextSize( 20 )
    btn.SetMargins( 0, 0.03, 0, 0 )
    btn.SetBackAlpha( 0.6 )
    btn.SetTextColor( "#aaaaaa" )
    btn.SetTextShadow( 20, 5,10, "#000000" )
    lay.AddChild( btn )
    
    var text = "<p><font color=#77CECF><i>The Assemblies Of God</i> have in past used 'Icilomgo Le Vangeli' and 'Ngoma' as their hymn books." + 
    "<br><small>....<small> and...</small></small></font></p>" + 
    "This hym book has been compiled from the common hymns and songs from these and other books<font color=#00aa00>Acknoeledgements</font> " + 
    "<tt>is hereby made to the respective</tt>publishers of these hymn books.<u></u> " +
    ""
    "<ac>" + 
    "&#8482;</a>";
    txt = app.CreateText( text, 0.8, -1, "Html,Link" )
    txt.SetMargins( 0, 0.02, 0, 0 )
    txt.SetPadding( 0.03, 0.03, 0.03, 0.03 )
    txt.SetTextSize( 20 )
    txt.SetTextColor( "#F7E273" )
    lay.AddChild( txt )
    
  var data = 
        "Compiled By:By^c^ <font color=#77CECF>Pastor A.B Moyo</font><br>" + 
        "<i>(Assemblies of God)</i>:null" +
        ",Published By The National Executive AOG:Copyright^c^ <font color=#77CECF>May2003Bulawayo</font><br>" + 
        "<i>(All Rights Reserved)</i>:null";
    lst = app.CreateList( data, 0.8, 0.25, "Html" )
    lst.SetMargins( 0, 0.02, 0, 0 )
    lst.SetBackColor( "#77444444" )
    lst.SetTextColor( "#cccccc" )
    lst.SetEllipsize1( "end" )
    lst.SetTextSize( 18 )
    lst.SetTextShadow1( 2, 2,4, "#000000" )
    lst.SetTextShadow2( 1.5, 2,4, "#000000" )
    lst.SetDivider( 0.002, "#222222" )
    lay.AddChild( lst )

     layFooter = app.CreateLayout("Linear", "Horizontal");
             layFooter.SetPosition(0,0.88,1,0.13);
             lay.AddChild(layFooter);

     layFooter = app.CreateLayout("Linear", "Horizontal");
             layFooter.SetPosition(0,0.88,1,0.13);
             lay.AddChild(layFooter);

        back = app.CreateButton("[fa-home]", 0.5,0.2,"FontAwesome");
            back.SetTextSize(30);
           back.SetBackColor("#dddddd");
            back.SetTextColor("Blue");
            back.SetPosition(1,0,0.18,0.10);
            back.SetOnTouch(btn5_OnTouch);
            layFooter.AddChild(back)
   
    app.AddLayout( lay )
}

function b3_OnTouch()
{
    lay = app.CreateLayout( "linear", "Vertical,FillXY" ) 
    lay.SetBackground( "/Sys/Img/BlueBack.jpg" )

	layFrame = app.CreateLayout( "Frame", "" )
  lay.AddChild(layFrame)

	img = app.CreateImage( "/Sys/Img/Droid1.png", 0.4, -1 )
	layFrame.AddChild( img )
	
	img = app.CreateImage( "Img/aog.png", 0.4, -1 )
	img.Scale( 0.3, 0.3 )
	img.Move( 0, 0.15 )
	layFrame.AddChild( img )

   hdr = app.CreateLayout("linear", "Horizontal");
    hdr.SetBackground( "/Sys/Img/BlueBack.jpg" )
    lay.AddChild(hdr)

	btn = app.AddButton( hdr, "History", 0.3,0.08 )
	btn.SetMargins( 0, 0.05, 0, 0 )
  btn.SetBackground( "/Sys/Img/BlueBack.jpg" )
	btn.SetOnTouch( historyaog )

  bck = app.CreateButton("Home",0.3,0.08)
	bck.SetMargins( 0, 0.05, 0, 0 )      
   bck.SetBackground( "/Sys/Img/BlueBack.jpg" )
   bck.SetOnTouch(home)
   hdr.AddChild(bck)
	
	app.AddLayout( lay )
	
	setInterval( "RotateImage()", 10 )
}

var angle = 0;
function RotateImage( ev )
{

	img.Rotate( angle )
	angle += 3;
}

function spn_OnTouch( item )
{
    if( item=="Youtube" ) {
		app.ShowProgress( "Buffering..." )
		setTimeout( "app.HideProgress()", 7000 )
		player.SetFile( "http://youtube.com/Somlandela tv" )
	}
	else if( item=="AOG Media Facebook" ) {
		app.ShowProgress( "Buffering..." )
		setTimeout( "app.HideProgress()", 10000 )
		player.SetFile( "http://facebook.com/aog media")
		skb.SetVisibility( "Show" )
	}
}
function player_OnReady()
{
	app.HideProgress()
    player.Play()
}
function player_OnComplete()
{
    app.ShowPopup( "Finished" )
}
function player_OnError()
{
    app.ShowPopup( "Error" )
}
function btnPlay_OnTouch() 
{
    player.Play()
}
function btnPause_OnTouch() 
{
    player.Pause()
}

function skb_OnTouch( value )
{
	player.SeekTo( dur * value )
}

function Update()
{
	dur = player.GetDuration()
	prog = player.GetPosition()
	if( dur ) skb.SetValue( prog / dur )
}

function btn5_OnTouch( )
{
 home();
}

function OnBack()
{
    var yesNo = app.CreateYesNoDialog( "Do you want to exit AOG Back To God Hymns?" );
    yesNo.SetOnTouch( yesNo_OnTouch );
    yesNo.Show();
}

function yesNo_OnTouch( selection )
{
    if( selection =="Yes" ) app.Exit();
    if( selection =="No" ) home();
    
}
function contact_us()
{
       app.CloseDrawer( "Left" )

               lay = app.CreateLayout( "Absolute", "Vertical,FillXY" )  
               lay.SetBackground( "Img/about.jpg" )
              
             layFooter = app.CreateLayout("Linear", "Horizontal");
             layFooter.SetPosition(0,0.88,1,0.13);
             layFooter.SetBackColor("Blue");
             lay.AddChild(layFooter);

             btn5 = app.CreateButton("[fa-chevron-circle-left]",0.25,0.12,"FontAwesome");
             btn5.SetBackColor("#dddddd");
             btn5.SetTextColor("#333333");
             btn5.SetTextSize(36);
             btn5.SetOnTouch(btn5_OnTouch);
             layFooter.AddChild(btn5);

              btn6 = app.CreateButton("[fa-send]",0.25,0.12,"FontAwesome");
             btn6.SetBackColor("#dddddd");
             btn6.SetTextColor("#333333");
             btn6.SetTextSize(36);
             btn6.SetOnTouch(btn6_OnTouch);
             layFooter.AddChild(btn6);

             btn7 = app.CreateButton("[fa-phone]",0.25,0.12,"FontAwesome");
             btn7.SetBackColor("#dddddd");
             btn7.SetTextColor("#333333");
             btn7.SetTextSize(36);
             btn7.SetOnTouch(Ontouch_bt7);
             layFooter.AddChild(btn7);

             btn8 = app.CreateButton("[fa-home]",0.25,0.12,"FontAwesome");
             btn8.SetBackColor("#dddddd");
             btn8.SetTextColor("#333333");
             btn8.SetTextSize(36);
             btn8.SetOnTouch(btn5_OnTouch);
             layFooter.AddChild(btn8);

             app.AddLayout( lay )
}

function btn6_OnTouch()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )
  lay.SetBackColor( "blue" )	

    bck = app.CreateButton( "Back" );
    bck.SetOnTouch( contact_us );
    lay.AddChild( bck );

  app.AddLayout( lay )
	
var yesNo = app.CreateYesNoDialog( "Send email to AOG?" );
    yesNo.SetOnTouch( choice );
    yesNo.Show();
}

function choice( result )
{
    if( result=="Yes" ) 
     {
        send_email();
      }
   if( result=="No" ) 
      {
      contact_us();
       }
}
function Ontouch_bt7()
{
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );
    lay.SetBackColor( "white" )

    edtNumber = app.CreateTextEdit( "+263773872721", .8, -1, "singleline,number,center" );
    edtNumber.SetTextSize(20);
    edtNumber.SetTextColor("blue");
    lay.AddChild(edtNumber);

    btnPhone = app.CreateButton( "Call", 0.5, 0.1 );
    btnPhone.SetOnTouch( btnCall_OnTouch );
    lay.AddChild( btnPhone );

 	layBut = app.CreateLayout("Linear", "Horizontal") 
	lay.AddChild( layBut ) 

	btnLoad = app.CreateButton( "Cancel", 0.23, 0.1 )
  btnLoad.SetOnTouch(home);
	layBut.AddChild( btnLoad ) 
	
	btnSave = app.CreateButton( "Back", 0.23, 0.1 ) 
  btnSave.SetOnTouch(contact_us)
	layBut.AddChild( btnSave ) 

   app.AddLayout( lay );
}
function btnCall_OnTouch()
{
    app.Call( edtNumber.GetText() );
}

function send_email()
{
    var packageName = "com.google.android.gm";
    var className = "com.google.android.gm.ComposeActivityGmailExternal";
    var action = "android.intent.action.VIEW";
    var category = null;
    var uri = "aoghq@zol.co.zw";
    var type = "message/rfc822";
    
    var extras = [ 
        {name:"android.intent.extra.EMAIL", type:"list", value:"aoghq@zol.co.zw"},
        {name:"android.intent.extra.SUBJECT", type:"string", value:"Please add subject here"},
        {name:"android.intent.extra.TEXT", type:"string", value:"Please write your massage here!"} 
    ];
    extras = JSON.stringify( extras )

    app.SendIntent( packageName, className, action, category, uri, type, extras ) 
}
function TS_OnTouch( )
{
   
    lay = app.CreateLayout( "Linear", "VCenter,FillXY" )  
    lay.SetBackground( "/Sys/Img/StarField.jpg" )

   txt = app.CreateText( "These are the mission songs of\n"+
   "The Back To God Crusade, an outreach\n"+
     "arm of The Assemblies Of God", 0.8, 0.2, "Multiline" );
    txt.SetTextSize( 23 );
    txt.SetTextColor( "Grey" );
    lay.AddChild( txt );
   
  var sep = app.CreateImage( null, 1,0.001,"fix", 2,2 )
    sep.SetSize( -1, 1, "px" )
    sep.SetColor( "blue" )
    lay.AddChild( sep )

    lst = app.CreateList( "Africa Back To God, If You Believe and I Believe", 0.8, 0.4 )
    lst.SetOnTouch(msongs_ontouch);
    lay.AddChild( lst );

     layFooter = app.CreateLayout("Linear", "Horizontal");
             layFooter.SetPosition(0,0.88,1,0.13);
             lay.AddChild(layFooter);

        layFooter = app.CreateLayout("Linear", "Horizontal");
             layFooter.SetPosition(0,0.88,1,0.13);
             layFooter.SetBackColor("Black");
             lay.AddChild(layFooter);

            back = app.CreateButton("[fa-home]", 0.5,0.2,"FontAwesome");
            back.SetTextSize(30);
           back.SetBackColor("#dddddd");
            back.SetTextColor("Blue");
            back.SetPosition(0,0,0.18,0.10);
            back.SetOnTouch(btn5_OnTouch);
            layFooter.AddChild(back)

    app.AddLayout( lay )
}

function msongs_ontouch ( list, item, index )
{
  switch( list )
{
    case "Africa Back To God":
    
    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" )  
    lay.SetBackground( "/Sys/Img/StarField.jpg" )

   txt = app.CreateText( "\n\n\n\n\nAFRICA BACK TO GOD\n"+
"We are singing\n AFRICA BACK TO GOD\n"+
"We are bringing\n We are singing\n We are bringing\n"+
"Africa back to God.", 1, 0.4, "Multiline,left" );
    txt.SetTextSize( 23 );
    txt.SetTextColor( "White" );
    lay.AddChild( txt );

    layFooter = app.CreateLayout("Linear", "Horizontal");
             layFooter.SetPosition(0,0.88,1,0.13);
             layFooter.SetBackColor("Black");
             lay.AddChild(layFooter);

            back = app.CreateButton("[fa-arrow-left]", -1,-1,"FontAwesome");
            back.SetTextSize(30);
            back.SetBackColor("#dddddd");
            back.SetTextColor("Blue");
            back.SetPosition(0,0,0.18,0.10);
             back.SetOnTouch(TS_OnTouch);
            layFooter.AddChild(back)

             fav = app.CreateButton("[fa-heart]", -1,-1,"FontAwesome");
            fav.SetTextSize(30);
            fav.SetBackColor("#dddddd");
            fav.SetTextColor("Blue");
            fav.SetPosition(0.82,0,0.18,0.10);
            layFooter.AddChild(fav)

app.AddLayout(lay)

break;

case "If You Believe and I Believe":

    lay = app.CreateLayout( "Absolute", "VCenter,FillXY" )  
    lay.SetBackground( "/Sys/Img/StarField.jpg" )

     txt = app.CreateText( "\n\n\n\n\n¹If you believe and i belive\n"+
"And we together pray\n The Holy Spirit must come down\n"+
"And Africa must be saved\n"+
"\n²And Africa must be saved  ×2\n"+
"The Holy Spiri must come down\n"+
"And Africa must be saved", 1, 0.4, "Multiline,left" );
    txt.SetTextSize( 23 );
    txt.SetTextColor( "White" );
    lay.AddChild( txt );

            layFooter = app.CreateLayout("Linear", "Horizontal");
             layFooter.SetPosition(0,0.88,1,0.13);
             layFooter.SetBackColor("Black");
             lay.AddChild(layFooter);

            back = app.CreateButton("[fa-arrow-left]", -1,-1,"FontAwesome");
            back.SetTextSize(30);
            back.SetBackColor("#dddddd");
            back.SetTextColor("Blue");
            back.SetPosition(0,0,0.18,0.10);
            back.SetOnTouch(TS_OnTouch);
            layFooter.AddChild(back)

             fav = app.CreateButton("[fa-heart]", -1,-1,"FontAwesome");
            fav.SetTextSize(30);
            fav.SetBackColor("#dddddd");
            fav.SetTextColor("Blue");
            fav.SetPosition(0.82,0,0.18,0.10);
            layFooter.AddChild(fav)

app.AddLayout(lay)

break;
}
}

function biblequiz( )
{
var score = 0;

             var question =  [
              { 
                  prompt: "Who is the first man? \n (A) David\n (B) Abel\n(C) Adam",
                  answer: "C"
                },
                {
                   prompt: "Who succeded Moses\nA. Daniel\nB. Aron\nC. Joshua",
                 answer: "C"
               },
               {
               prompt:"Where did Jacob saw uptairs to heaven?\nA. Bethel\nB. Jericho\nC. Laban's house",
               answer: "A"
              },
             {
              prompt: "On which mountain were the Ten Commandments given to Moses?\nA. Mount Sinai\nB. Mount Seir\nC. Mount Hermmon",
             answer: "A"
            },
            {
            prompt: "Name the site outside Jerusalem's walls where Jesus was crucfied?\nA. Getsmane\nB. Calvary/Gogotha\nC. Capenum",
            answer: "B"
           },
           {
            prompt: "Who is said to have died at the age of 969?\nA. Noah\nB. Adam\nC. Methuselah",
            answer: "C"
            },
            {
            prompt: "Name the third book of the Old Testament?\nA. Luke\nB. Job\nC. Levitcus",
            answer: "C"
            },
            {
           prompt: "Enoch in the Book of Geness is described as whose son?\nA. Cain’s\nB. Adam\nC. Noah",
           answer: "A"
            },
            {
             prompt: "What is the last book in the Old Testament?\nA. Malachi\nB. Psalms\nC. Revelations",
              answer: "A"
             },
                 {
            prompt: "What was the first plague of Egypt?\nA. Turnng water into blood\nB. Plague of flies\nC. Killing of firstborns",
            answer: "A"
            },
           {
           prompt: "Which prophet was lifted to heaven in a whirl wind when a charot of fire and horses appeared?\nA. Isaiah\nB.  Elisha\nC. Eijah",
           answer: "C"
           },
           {
           prompt: "Name the ruler of Judea who ordered the ‘Massacre of the Innocents’at the time of the birth of Jesus?\nA. Pilate\nB. Festas\nC. Herod",
           answer: "C"
           },
           {
           prompt: "What type of wood did Noah build his ark with?\nA. Gopher wood\nB. Olive wood\nC. Palm wood",
           answer: "A"
           },
{
prompt: "The giant Goliath belonged to which group of peopes?\nA. Philistines\nB. Egyptians\nC. Anakites",
answer: "A"
},
{
prompt: "Who demanded and received the head of John the Baptst?\nA. Salome\nB. Satan\nC. Herod",
answer: "A"
},
{
prompt: "Who doubted Jesus' resurrection when told of it?\nA. Marry\nB. Peter\nC. Thomas",
answer: "C"
},
{prompt: "The Tower of Babel narrative in Genesis was meant to explain about what?\nA. About why they speak different languages\nB. About Nimrod\nC. About Tamuz",
answer: "A"
},
{
prompt: "Who is the father of a multitude of nations?\nA. David\nB. Abraham\nC. Abel",
answer: "B"
},
{
prompt: "Lot's wife became a pillar of salt after she looked back at which city?\nA. Egypt\nB. Banylon\nC. Sodom",
answer: "C"
},
{
prompt: "Hadassah is the Jewish name of which queen?\nA. Queen Esther\nB. Vashity\nC. Abigail",
answer: "A"
},
{
prompt: "Jesus fasted for how many days and nights in the desert?\nA. Fourteen days\nB. Forty\nC. Sixty",
},
{
prompt: "How many pecies of siver did Judas Iscarot betray Jesus for?\nA. Ten\nB. Twenty\nC. Thirty peces",
answer: "C"
},
{
primpt: "What did the Romans compel Simon of Cyrene to do?\nA. Carry the cross of Jesus of Nazareth\nB. Put Jesus in the tomb\nC. Crown Jesus with a crown of thorns",
answer: "A"
},
{
prompt: "According to the Book of Deuteronomy, how old was Moses when he died?\nA. 60\nB. 500\nC. 120",
answer: "C"
},
{
prompt: "Who built the Hoy Temple in ancient Jerusaem that was destroyed by Nebuchadnezzar?\nA. Soomon\nB. David\nC. Nehemiah",
answer: "A"
},
{
prompt: "Samson successfuly fought against an army while welding the jawbone of which animal?\nA. Lion\nB. Elephant\nC. Ass (donkey)",
answer: "C"
},
{
prompt: "How many days does Jonah spend in the stomach of a large fish?\nA. 7 days\nB. 3 days\nC. He did not spent any day",
answer: "B"
},
{
prompt: "What are the first 4 books of the New Testament colectivey called?\nA. The Epistles\nB. The Gospels\nC. The History",
answer: "B"
},
{
prompt: "Who sidescribed as the older sister of Moses?\nA. Miriam\nB. Pharaoh's daughter\nC. Aron",
answer: "A"
},
{
prompt: "Jesus fed five thousand men with two fushes and how many loaves of bread?\nA. 3 loaves\nB. 5 loaves\nC. 50 loaves",
answer: "B"
},
{
prompt: "The Twelve Tribes of Israel are descended from the 12 sons of which patriarch?\nA. Abraham\nB. Jacob\nC. Noah",
answer: "B"
},
              ]
          
            for (var i = 0; i<question.length; i++) {
                var response = window.prompt(question[i].prompt);
               if(response == question[i].answer) {
                score ++;
               alert("Correct");
              }
              else  {
               alert ("Wrong\nThe correct answer is  " + question[i].answer);
               }
              }
              alert("you got" + score + "/" + question.length);
}

function historyaog()
{
   app.Alert("\n\n"+
"The history of the AOG in Zim started in the late\n 1940s to early "+
"1950s with the arrival of the\n Pentecostal Missionaries from USA, Canada\n,"+
   "Europe especially the UK and the\n South African Assemblies of God which included \n"+
"the Back to God Crusade of Rev Nicholas Bhengu.\n These were products of the Azusa"+
" street revivals \n and they included the Apostolic Faith Church,\n General Council of the"+
" Assemblies of America,\n the Pentecostal Assemblies of God of Canada,\n"+
" the Full Gospel Church of America and the South African brand \nof the Assemblies of God"+
" Church which included\n the Back to God Crusade of Rev Nicholas Bhengu.\n"+
"After ministering for more than ten years in this country which was Rhodesia\n "+
"some of these groups of Pentecostals started having Conventions together.\n"+
" It was at these Conventions that Rev Nicholas Bhengu would be invited\n"+
" from South Africa to come and minister. His popularity saw him being invited by\n "+
"Pastor John Bond to come and carry out revivals at Highfield in HARARE in 1959.\n "+
"These became very popular as this was  also the time for Africans starting to fight for\n"+
" Independence.So it became easy for Africans from different Pentecostal\n "+
"groups to come and fellowship with the Crusades at Highfield in HARARE.\n "+
"\n"+
"It was at about this time that Pastor Ezekiel Guti also came in to join the \n"+
"Assemblies of God Church under Rev Bhengu.\n"+
"When the work grew into 1960s Rev Guti who had moved from\n "+
"Apostolic Faith Church to join the Assemblies of God Church pulled out of the\n "+
"Assemblies of God Church to form his own Church with the help of other missionaries \n"+
"who were not comfortable with the South African Assemblies of God Church influence. \n"+
"\n"+
"Also in the mid 1960s Rev Nicholas Bhengu appointed Rev Geoffrey Mkwanazi\n"+
" to lead the work in Rhodesia and this did not go down well with others who were already\n"+
" workers in the Assemblies of God Church in the country.\n "+
"They felt sidelined. Rev GB Mkwanazi was saved in the Lord in South Africa \n"+
"yet he was from Rhodesia by birth.So some of these workers who did not understand\n"+
" why GB Mkwanazi was brought in to lead them then pulled out to form their  Churches as well.\n"+
" Then in the mid 1970s and effort was made to unite the existing works of the\n"+
" Assemblies of God Church people in  Rhodesia which comprised both blacks and\n"+
" whites into one church under one leadership for both whites and blacks.\n"+
" Then a National Conference of all AOG churches in the country was convened in\n "+
"Gweru and they elected the First National Executive of the Assemblies of God \n"+
"to manage the fellowship of the Assemblies of God churches countrywide.\n"+
" It is at this point that some Assemblies of God people who were already in the country \n"+
"but did not want to join were left out to run their own ministries under different names.\n"+
"The new Assemblies of God Church in Rhodesia was chaired by a white man but included \n"+
"Rev Geoffrey Mkwanazi and other black Pastors. Rev Nicholas Bhengu and\n "+
"Rev John Bond both from South Africa were made Apostolic Overseers \n"+
"of the new formation of the Assemblies of  God Church in Rhodesia.\n"+
"\n So they became members of that Executive.The General Secretary was also\n"+
" a white man then. It was in 1980 January that a Conference was held in Harare \n"+
"which moved a motion to remove Apostolic oversight of both Rev Nicholas Bhengu \n"+
"and Rev John Bond. Also at that Conference a new National Executive was elected\n"+
" which was chaired by Rev Geoffrey Mkwanazi (a black man) with AB Robertson (a white nam) \n"+
"as Secretary.Rev Nicholas Bhengu was also elected as an ordinary member of that\n "+
"National Executive. The Conferences of the Assemblies of God were being \n"+
"held every two years but somehow a Conference had to be held in 1985 \n"+
"at which Pastor Tham (Mathamsanqa Dube) was elected into the National Executive \n"+
"being young and from the group of young leaders called Youth Organisers.\n "+
"He was both a Pastor at Mbizo Assemblies of God  Church and also a \n"+
"Youth Organiser for Midlands Region.Rev Geoffrey Mkwanazi was still \n"+
"elected Chairman with AB Robertson being Secretary of the National Executive.\n "+
"Rev Nicholas Bhengu was also elected as a member of that National Executive.\n "+
"However Rev Nicholas Bhengu passed on to be with the Lord in October of that year 1985.\n"+
"During that period the whites were no longer comfortable working with the black\n"+
" leadership under Rev Geoffrey  Mkwanazi who was Chairman and the coming in of\n"+
" Pastor Tham as one of the young Pastors into the National Executive made it more\n"+
" uncomfortable for them.So in 1986 June all the White brethren of the Assemblies of God\n "+
"Church moved out of Assemblies of God Church in Zimbabwe to form their own\n "+
"New Covenant Assemblies of God Church.\n"+
"\nSo the Assemblies of God Church in Zimbabwe then remained a fully \n"+
"black church after the departure of the White brethren and some black Pastors who\n "+
"were sympathetic to their vision.Then in 1987 the Assemblies of God\n"+
" Church in Zimbabwe convened an irregular  National Conference which\n"+
" elected Dr Cuthbert Chidoori (a young man who was also a Youth Organiser) \n"+
"as Chairman of the National Executive.This appeared as effectively\n "+
"removing Rev GB Mkwanazi from the leadership of the Church yet he had been \n"+
"elected as a member of the National Executive.\n"+
" Issues around this  irregularly elected National Executive and  misunderstandings in\n "+
"Church leadership led the Church into a split that lasted 11 years.\n "+
"The AOG was then reconciled in 1998 at a National Conference held at the Baptist\n "+
"National Conference center outside Gweru.Once this was resolved the Assemblies\n "+
"of God Church has since then remained unified under the National Executive until today. \n"+
"The Rev GB Mkwanazi has since passed on to be with the Lord but\n "+
"the work still continues unified.","A brief history of the AOG in Zimbabwe:")
}
function search()
{
}
function recents()
{
}
function favourite()
{
}
function cpy()
{
   app.SetClipboardText( txt.GetText() )

   app.ShowPopup( "Hymn copied to clipboard")
}