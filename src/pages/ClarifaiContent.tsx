<!doctype html><html lang="en"><head>
    <meta charset="utf-8">
    <title>Create and Control Your AI Workloads On Any Compute | Clarifai</title>
    <link rel="shortcut icon" href="https://www.clarifai.com/hubfs/logo/Clarifai/Clarifai%20Computer%20Vision%20Icon.png">
    <meta name="description" content="Create and control your AI workloads on any compute and at any scale to save time and lower your costs while improving AI governance.">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&amp;family=Nunito:ital,wght@0,200..1000;1,200..1000&amp;family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&amp;family=Manrope:wght@200..800&amp;display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://www.clarifai.com/hubfs/switzer-font/switzer-font.css">

    
    
    
    
    
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <script src="/hs/hsstatic/jquery-libs/static-1.4/jquery/jquery-1.11.2.js"></script>
<script>hsjQuery = window['jQuery'];</script>
    <meta property="og:description" content="Create and control your AI workloads on any compute and at any scale to save time and lower your costs while improving AI governance.">
    <meta property="og:title" content="Create and Control Your AI Workloads On Any Compute | Clarifai">
    <meta name="twitter:description" content="Create and control your AI workloads on any compute and at any scale to save time and lower your costs while improving AI governance.">
    <meta name="twitter:title" content="Create and Control Your AI Workloads On Any Compute | Clarifai">

    

    
    <style>
a.cta_button{-moz-box-sizing:content-box !important;-webkit-box-sizing:content-box !important;box-sizing:content-box !important;vertical-align:middle}.hs-breadcrumb-menu{list-style-type:none;margin:0px 0px 0px 0px;padding:0px 0px 0px 0px}.hs-breadcrumb-menu-item{float:left;padding:10px 0px 10px 10px}.hs-breadcrumb-menu-divider:before{content:'›';padding-left:10px}.hs-featured-image-link{border:0}.hs-featured-image{float:right;margin:0 0 20px 20px;max-width:50%}@media (max-width: 568px){.hs-featured-image{float:none;margin:0;width:100%;max-width:100%}}.hs-screen-reader-text{clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;position:absolute !important;width:1px}
</style>

<link rel="stylesheet" href="https://www.clarifai.com/hs-fs/hubfs/hub_generated/template_assets/1/167020980755/1742714344959/template_main.min.css">
<link rel="stylesheet" href="https://www.clarifai.com/hs-fs/hubfs/hub_generated/template_assets/1/167020980752/1742714350164/template_theme-overrides.min.css">

<style>
  #hs_cos_wrapper_module_171541055839529 .top_rail {
  border-bottom:1px solid rgba(255,255,255,0.05);
  background:#1C2235;
  padding:0 40px;
}

#hs_cos_wrapper_module_171541055839529 .top_rail-row {
  display:flex;
  align-items:center;
  justify-content:space-between;
}

#hs_cos_wrapper_module_171541055839529 .top_rail-lft {
  display:flex;
  align-items:center;
  flex-wrap:wrap;
  padding:9px 0 5px;
}

#hs_cos_wrapper_module_171541055839529 .top_rail-badge {
  border-radius:45px;
  background:rgba(2,185,255,0.10);
  padding:2px 10px;
  color:#01BAFF;
  font-size:12px;
  font-weight:400;
  line-height:20px;
}

#hs_cos_wrapper_module_171541055839529 .top_rail-text {
  color:#B1B9D2;
  font-size:12px;
  font-style:normal;
  font-weight:400;
  line-height:20px;
  padding-left:10px;
}

#hs_cos_wrapper_module_171541055839529 .top_rail-link { padding-left:10px; }

#hs_cos_wrapper_module_171541055839529 .top_rail-link a {
  color:#25B6FF;
  font-size:12px;
  font-style:normal;
  font-weight:500;
  line-height:20px;
  text-decoration:none;
  transition:all 300ms ease;
}

#hs_cos_wrapper_module_171541055839529 .top_rail-rgt {
  display:flex;
  align-items:center;
  flex-wrap:wrap;
  justify-content:flex-end;
  padding:9px 0 5px;
}

#hs_cos_wrapper_module_171541055839529 .top_rail-chat {
  display:flex;
  align-items:center;
}

#hs_cos_wrapper_module_171541055839529 .top_rail-chat_icon { flex-shrink:0; }

#hs_cos_wrapper_module_171541055839529 .top_rail-chat_icon img {
  display:block;
  width:16px !important;
  height:16px !important;
}

#hs_cos_wrapper_module_171541055839529 .top_rail-chat_text {
  color:#B1B9D2;
  font-size:12px;
  font-style:normal;
  font-weight:400;
  line-height:normal;
  padding-left:8px;
}

#hs_cos_wrapper_module_171541055839529 .top_rail-chat_text a {
  color:#B1B9D2;
  text-decoration:none;
  transition:all 300ms ease;
}

#hs_cos_wrapper_module_171541055839529 .top_rail-chat_text a:hover { color:#F9FBFF; }

#hs_cos_wrapper_module_171541055839529 .top_rail-discord {
  display:flex;
  align-items:center;
  padding-left:16px;
}

#hs_cos_wrapper_module_171541055839529 .top_rail-discord_icon { flex-shrink:0; }

#hs_cos_wrapper_module_171541055839529 .top_rail-discord_icon img {
  display:block;
  width:16px !important;
  height:16px !important;
}

#hs_cos_wrapper_module_171541055839529 .top_rail-discord_text {
  color:#B1B9D2;
  font-size:12px;
  font-style:normal;
  font-weight:400;
  line-height:normal;
  padding-left:8px;
}

#hs_cos_wrapper_module_171541055839529 .top_rail-discord_text a {
  color:#B1B9D2;
  text-decoration:none;
  transition:all 300ms ease;
}

#hs_cos_wrapper_module_171541055839529 .top_rail-discord_text a:hover { color:#F9FBFF; }

@media screen and (max-width:1199px) {
  #hs_cos_wrapper_module_171541055839529 .top_rail { padding:0 24px; }

  #hs_cos_wrapper_module_171541055839529 .top_rail { display:none; }
}

</style>


<style type="text/css">

  html.mm-blocking, html.mm-blocking body {
    overflow: visible !important;
  }
  .main_menu {
    background: rgba(15, 19, 31, 1);
    padding: 0 40px;
  }
  .main-header {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 9999;
  }
  header.scroll .main_menu {
    top: 0;
  }
  .main_menu-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
  .main_menu-logo {
    position: relative;
  }
  a.menu_logo-link {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  .main_menu-logo img.hs-image-widget {
    display: block;
  }
  .main_navigation {
    padding-left: 128px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: auto;
  }
  .main_menu-nav ul.hs-menu-wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  nav.header__menu--desktop > ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
  }
  .main_menu-nav .header__menu--desktop > ul > .nav-item {
    margin-right: 32px;
    padding: 19px 0;
    position: relative;
    list-style: none;
  }
  .main_menu-nav .header__menu--desktop > ul > .nav-item:last-child {
    margin-right: 0;
  }
  .main_menu-nav .header__menu--desktop > ul > .nav-item.more > a {
    background-image: url(https://www.clarifai.com/hubfs/menu-dropdown-white.svg);
    background-repeat: no-repeat;
    background-position: right center;
    background-size: 17px;
    padding-right: 22px;
  }
  .main_menu-nav .header__menu--desktop > ul > .nav-item > a {
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    text-decoration: none;
  }
  .main_menu-CTAs {
    padding: 9px 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .main_menu-login a {
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    text-decoration: none;
    transition: all 300ms ease;
  }
  .main_menu-start {
    padding-left: 32px;
  }
  .main_menu-start a {
    border-radius: 4px;
    background: #F9FBFF;
    padding: 10px 14px;
    color: #0A0D15;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    display: inline-block;
    vertical-align: middle;
    text-decoration: none;
    transition: all 300ms ease;
  }
  .main_menu-start a:hover {
    background: #EFF3FF;
  }
  .main_menu-nav .header__menu--desktop > ul > .nav-item.more .submenu {
    z-index: 998;
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 230px;
    padding: 24px 24px 12px 40px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    background: rgba(19, 24, 39, 0.85);
    backdrop-filter: blur(7.5px);
    -webkit-backdrop-filter: blur(7.5px);
  }
  .cst-humburger-icon, .mobile-close-icon {
    display: none;
  }
  .main_menu-nav .header__menu--desktop > ul > .nav-item.more .submenu.submenu3 {
    width: 994px;
  }
  .main_menu-nav .header__menu--desktop > ul > .nav-item.more .submenu {
    list-style: none;
    justify-content: space-between;
  }
  .main_menu-nav .header__menu--desktop > ul > .nav-item.more > .submenu li {
    padding-top: 6px;
    padding-right: 56px;
  }
  .main_menu-nav .header__menu--desktop > ul > .nav-item.more > .submenu li a.menulink:hover {
    color: #F9FBFF;
  }
  .main_menu-nav .header__menu--desktop > ul > .nav-item.more > .submenu li a.menulink {
    color: #B1B9D2;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 16px;
    display: block;
    text-decoration: none;
    transition: all 300ms ease;
  }
  .main_menu-nav .header__menu--desktop > ul > .nav-item.more > .submenu li.menu-callout {
    flex: 0 0 311px;
    max-width: 311px;
    padding-top: 0;
    margin-left: auto;
  }
  .main_menu-nav .header__menu--desktop > ul > .nav-item.more > .submenu li:last-child {
    padding-right: 0;
  }
  .nav-item.more .submenu li.menu-callout img.ebook-thumbnail {
    border-radius: 8px;
    margin-bottom: 8px;
  }
  .nav-item.more .submenu li.menu-callout h6 {
    color: #04AFFF;
    font-family: "IBM Plex Mono";
    font-size: 13px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 1.04px;
    text-transform: uppercase;
    margin-bottom: 4px;
  }
  .nav-item.more .submenu li.menu-callout h5 {
    color: #fff;
    font-family: Nunito;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .main_menu-nav .header__menu--desktop > ul > .nav-item.more > .submenu li a.menulink.menu_icon-right {
    display: flex;
    align-items: center;
  }
  .nav-item.more > .submenu li a.menulink.menu_icon-right img.icon-right {
    margin-left: 8px;
  }
  .main_menu-nav nav.header__menu--desktop > ul > .nav-item.more .submenu {
    left: -130%;
  }
  .main_menu-nav nav.header__menu--desktop > ul > .nav-item.more .submenu.submenu1 {
    left: 0;
  }
  .main_menu-nav .header__menu--desktop > ul > .nav-item.more .submenu3.company {
    width: 878px;
  }
  .mobile--menu {
    display: none;
  }
  .header.fixed .main_menu {
    top: 0;
  }
  .submenu-callout {
    position: relative;
  }
  .submenu-callout a.callout_link {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }

  .main_menu-nav .header__menu--desktop > ul > .nav-item.more .submenu.submenu4 {
    width: 1226px;
  }
  .main_menu-nav .header__menu--desktop > ul > .nav-item.more > .submenu li h4 {
    color: #EFF3FF;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 11px;
    min-height: 24px;
    text-transform: uppercase;
  }
  .main_menu-nav .header__menu--desktop > ul > .nav-item.more > .submenu.platform li:nth-child(2) {
    padding-right: 126px;
  }
  .main_menu-nav .header__menu--desktop > ul > .nav-item.more > .submenu.platform li:last-child {
    padding-right: 0px;
  }
  .menu_badge {
    padding: 2px 10px;
    border-radius: 16px;
    background: rgba(2, 185, 255, 0.10);
    margin-left: 6px;
    display: inline-block;
    vertical-align: middle;
    color: #01BAFF;
    text-align: center;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
  .menu_title {
    display: flex;
    align-items: center;
  }



  @media screen and (min-width: 1200px) {

    .main_menu-nav nav.header__menu--desktop > ul > .nav-item.more:hover .submenu {
      display: flex;
    }

  }

  @media screen and (max-width: 1199px) {

    .main-header-main {
      min-height: 89px;
    }
    .cst-humburger-icon {
      display: block;
    }
    .main_menu {
      padding: 12px 24px;
      top: 0;
    }
    .main_navigation.desktop--menu {
      display: none;
    }
    .mobile-open .main_navigation {
      display: block;
    }
    .main_menu-nav ul.hs-menu-wrapper {
      display: block;
    }
    .main_menu-nav .hs-menu-wrapper>li.hs-item-has-children>a {
      background-image: none;
      padding-right: 0;
    }
    .mobile-child-trigger {
      width: 17px;
      height: 16px;
      background-image: url(https://www.clarifai.com/hubfs/menu-dropdown-white.svg);
      background-repeat: no-repeat;
      background-size: contain;
      position: absolute;
      right: 0;
      top: 23px;
      transition: all .5s ease;
    }
    .main_menu-nav .header__menu--desktop > ul > .nav-item {
      margin-right: 0;
    }
    .mobile-open .mobile-close-icon {
      display: block;
    }
    .mobile-open .cst-humburger-icon {
      display: none;
    }
    .main_menu-nav .hs-menu-wrapper>li.hs-item-has-children ul.hs-menu-children-wrapper {
      position: relative;
      top: 0px !important;
      width: 100%;
      margin-top: 19px;
    }
    .main_menu-nav .hs-menu-wrapper .hs-item-has-children.child-open .mobile-child-trigger {
      transform: rotate(180deg);
    }
    .main_menu-CTAs {
      justify-content: center;
    }
    .main_menu-nav .header__menu--desktop > ul > .nav-item {
      width: 100%;
    }
    .main_menu-nav .header__menu--desktop > ul > .nav-item.more a {
      background: no-repeat;
      padding: 0;
    }
    header .main_menu-nav nav.header__menu--desktop > ul > .nav-item.more .submenu {
      left: 0;
      width: 100%;
      max-width: 100%;
      position: relative;
      top: 0;
      margin-top: 20px;
      padding: 24px;
    }
    .main_menu-nav .header__menu--desktop > ul > .nav-item.more > .submenu li.menu-callout {
      display: none;
    }
    .main_menu-nav .header__menu--desktop > ul > .nav-item.more .submenu {
      flex-wrap: wrap;
    }
    header .main_menu-nav nav.header__menu--desktop > ul > .nav-item.more .submenu li {
      width: 100%;
      padding: 0;
    }
    .main_menu-nav .header__menu--desktop > ul > .nav-item.more > .submenu li a.menulink {
      font-size: 14px;
    }

    #nav-menu.mm-opened {
      height: 100%;
    }
    #nav-menu {
      top: 49px;
      height: 0;
      z-index: 999;
      width: 100%;
      min-width: 100%;
      max-width: 100%;
      transition: all .3s ease;
      overflow: hidden;
      border-radius: 8px;
      background: rgba(19, 24, 39, 0.95);
      backdrop-filter: blur(7.5px);
      display: block;
    }
    #nav-menu .mm-panels {
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
    #nav-menu .mm-panel.mm-hasnavbar {
      padding: 32px 38px 55px 40px;
      background: rgba(19, 24, 39, 1);
    }
    #nav-menu .main_menu-nav.mm-panel .mm-navbar {
      display: none !important;
    }
    #nav-menu .mm-panel.mm-hasnavbar .mm-navbar {
      display: flex;
      align-items: center;
      position: relative;
      margin-bottom: 24px;
      border-color: #424B66;
      padding: 21px 0;
      height: auto;
      line-height: normal;
      text-align: left;
    }
    #nav-menu .mm-panel.mm-hasnavbar .mm-navbar a.mm-title {
      color: #FFF;
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 27px;
      padding: 0 0 0 8px;
    }
    #nav-menu .main_menu-nav nav.menu {
      margin-bottom: 153px;
    }
    #nav-menu .main_menu-nav nav.menu li.nav-item {
      padding: 0;
    }
    #nav-menu .main_menu-nav nav.menu .nav-item a {
      padding: 21px 10px;
      border-bottom: 1px solid #424B66;
    }
    #nav-menu .main_menu-nav nav.menu li.nav-item:after {
      display: none;
    }
    #nav-menu .main_menu-nav nav.menu li.nav-item.more a.mm-next {
      background-image: url(https://www.clarifai.com/hubfs/dropdown-right-icon.svg);
      background-position: center;
      background-repeat: no-repeat;
    }
    #nav-menu .main_menu-nav nav.menu li.nav-item.more a:before, #nav-menu .main_menu-nav nav.menu li.nav-item.more a:after {
      display: none;
    }
    #nav-menu .main_menu-login {
      width: 100%;
      text-align: center;
      margin-bottom: 16px;
    }
    #nav-menu .main_menu-login a {
      border-radius: 4px;
      border: 1px solid #424B66;
      background: #121725;
      display: inline-block;
      vertical-align: middle;
      color: #F9FBFF;
      font-family: Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      padding: 9px 14px;
      max-width: 289px;
      width: 100%;
    }
    #nav-menu .main_menu-start {
      padding: 0;
      width: 100%;
      text-align: center;
    }
    #nav-menu .main_menu-start a {
      max-width: 289px;
      width: 100%;
    }
    #nav-menu .main_menu-login a:hover {
      border: 1px solid #606E92;
      background: #121725;
      text-decoration: none;
    }
    #nav-menu .main_menu-start a:hover {
      background: #EFF3FF;
    }
    #nav-menu .mm-panel.mm-hasnavbar:before {
      display: none;
    }
    #nav-menu .mm-panel.mm-hasnavbar .mm-navbar a.mm-btn.mm-prev {
      position: relative;
      margin: 0;
      padding: 0;
      width: 16px;
      height: 16px;
      background-image: url(https://www.clarifai.com/hubfs/dropdown-left-icon.svg);
      background-repeat: no-repeat;
      background-position: center;
    }
    #nav-menu .mm-panel.mm-hasnavbar .mm-navbar a.mm-btn.mm-prev:before {
      display: none;
    }
    #nav-menu .mm-panel.mm-hasnavbar ul.submenu {
      margin: 0;
    }
    #nav-menu .mm-panel.mm-hasnavbar ul.submenu a.menulink {
      color: #B1B9D2;
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 27px;
      padding: 0;
      margin-bottom: 16px;
      white-space: normal;
    }
    #nav-menu .mm-panel.mm-hasnavbar ul.submenu:after {
      display: none;
    }
    #nav-menu .mm-panel.mm-hasnavbar ul.submenu a.menulink.menu_icon-right {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
    #nav-menu .mm-panel.mm-hasnavbar ul.submenu a.menulink.menu_icon-right img.icon-right {
      margin-left: 5px;
    }
    html.mm-opening .mm-slideout {
      -webkit-transform: none !important;
      -ms-transform: none !important;
      transform: none !important;
      -webkit-transform: none !important;
      transform: none !important;
    }
    #nav-menu .mm-panel.mm-hasnavbar ul.submenu li.menu-callout {
      margin-top: 32px;
    }
    #nav-menu .mm-panel.mm-hasnavbar ul.submenu li.menu-callout img.ebook-thumbnail {
      margin-bottom: 8px;
    }
    #nav-menu .mm-panel.mm-hasnavbar ul.submenu li.menu-callout h6 {
      color: #04AFFF;
      font-family: "IBM Plex Mono";
      font-size: 13px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 1.04px;
      text-transform: uppercase;
      margin-bottom: 4px;
    }
    #nav-menu .mm-panel.mm-hasnavbar ul.submenu li.menu-callout h5 {
      color: #fff;
      font-family: Nunito;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    .submenu_callout-block a.callout_link {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
    }
    #nav-menu .mm-panel.mm-hasnavbar ul.submenu h4 {
      color: #EFF3FF;
      font-family: Poppins;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
      margin-bottom: 11px;
      min-height: 24px;
    }

  }


  @media screen and (max-width: 991px) {

    .main-header-main {
      min-height: 50px;
    }

  }


  @media screen and (max-width: 639px) {

    #nav-menu .mm-panel.mm-hasnavbar {
      padding: 32px 24px 55px;
    }
    #nav-menu .mm-panel.mm-hasnavbar ul.submenu a.menulink {
      font-size: 14px;
      line-height: 24px;
    }

  }


</style>


<style>
  #hs_cos_wrapper_widget_1741608348803 .hshero { padding:120px 0 50px; }

#hs_cos_wrapper_widget_1741608348803 .hshero-row {
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
}

#hs_cos_wrapper_widget_1741608348803 .hshero-lft {
  flex:0 0 640px;
  max-width:640px;
}

#hs_cos_wrapper_widget_1741608348803 .hshero-content { margin-bottom:80px; }

#hs_cos_wrapper_widget_1741608348803 .hshero-content h1 {
  font-family:"Manrope",sans-serif;
  font-size:80px;
  font-style:normal;
  font-weight:500;
  line-height:110%;
  letter-spacing:-1.6px;
  margin-bottom:24px;
}

#hs_cos_wrapper_widget_1741608348803 .hshero-content h1,
#hs_cos_wrapper_widget_1741608348803 .hshero-content h2,
#hs_cos_wrapper_widget_1741608348803 .hshero-content h3,
#hs_cos_wrapper_widget_1741608348803 .hshero-content h4,
#hs_cos_wrapper_widget_1741608348803 .hshero-content h5,
#hs_cos_wrapper_widget_1741608348803 .hshero-content h6 { color:#F9FBFF; }

#hs_cos_wrapper_widget_1741608348803 .hshero-content p {
  font-family:Inter;
  font-size:20px;
  font-style:normal;
  font-weight:400;
  line-height:30px;
}

#hs_cos_wrapper_widget_1741608348803 .hshero-content * { color:#C9D5ED; }

#hs_cos_wrapper_widget_1741608348803 .hshero-ctas {
  display:flex;
  flex-wrap:wrap;
  align-items:center;
}

#hs_cos_wrapper_widget_1741608348803 .hshero-start a:after {
  position:absolute;
  content:'';
  top:0;
  left:0;
  width:100%;
  height:100%;
  border-radius:0.3em;
  background-image:linear-gradient(75deg,#52BAF5 -8.19%,#47E6DE 93.37%);
  transition:opacity 300ms ease-out;
  opacity:0;
  z-index:2;
}

#hs_cos_wrapper_widget_1741608348803 .hshero-start a:hover:after { opacity:1; }

#hs_cos_wrapper_widget_1741608348803 .hshero-start a {
  border-radius:4px;
  background:linear-gradient(75deg,#47E6DE -8.19%,#52BAF5 93.37%);
  padding:16px 50px;
  color:#0A0D15;
  font-family:Manrope;
  font-size:18px;
  font-style:normal;
  font-weight:500;
  line-height:28px;
  display:flex;
  align-items:center;
  text-decoration:none;
  transition:all 300ms ease;
  position:relative;
  z-index:1;
}

#hs_cos_wrapper_widget_1741608348803 .hshero-start a span {
  z-index:3;
  position:relative;
  display:flex;
  align-items:center;
}

#hs_cos_wrapper_widget_1741608348803 .hshero-start a svg { margin-left:10px; }

#hs_cos_wrapper_widget_1741608348803 .hshero-methodology { padding-left:24px; }

#hs_cos_wrapper_widget_1741608348803 .hshero-methodology a:hover {
  border-color:#606E92;
  background:#121725;
}

#hs_cos_wrapper_widget_1741608348803 .hshero-methodology a {
  border-radius:4px;
  border:1px solid #424B66;
  background:#121725;
  padding:15px 24px;
  color:#F9FBFF;
  font-family:Manrope;
  font-size:18px;
  font-style:normal;
  font-weight:500;
  line-height:28px;
  text-decoration:none;
  transition:all 300ms ease;
  display:inline-block;
  vertical-align:middle;
}

#hs_cos_wrapper_widget_1741608348803 .hshero-rgt {
  flex:0 0 496px;
  max-width:496px;
}

#hs_cos_wrapper_widget_1741608348803 .hshero-img img {
  max-width:100%;
  height:auto;
}

@media screen and (max-width:1399px) {
  #hs_cos_wrapper_widget_1741608348803 .hshero-content h1 { font-size:60px; }

  #hs_cos_wrapper_widget_1741608348803 .hshero-lft {
    flex:0 0 52%;
    max-width:51%;
  }

  #hs_cos_wrapper_widget_1741608348803 .hshero-rgt {
    flex:0 0 42%;
    max-width:42%;
  }
}

@media screen and (max-width:1199px) {
  #hs_cos_wrapper_widget_1741608348803 .hshero { padding:75px 0 40px; }

  #hs_cos_wrapper_widget_1741608348803 .hshero-lft {
    flex:0 0 50%;
    max-width:50%;
    padding-top:25px;
  }

  #hs_cos_wrapper_widget_1741608348803 .hshero-rgt {
    flex:0 0 50%;
    max-width:50%;
    padding-left:20px;
  }

  #hs_cos_wrapper_widget_1741608348803 .hshero-animate_text .typewrite {
    min-height:62px;
    font-size:32px;
    line-height:normal;
  }

  #hs_cos_wrapper_widget_1741608348803 .hshero-content h1 { font-size:48px; }
}

@media screen and (max-width:991px) {
  #hs_cos_wrapper_widget_1741608348803 .hshero-animate_text .typewrite {
    border-radius:5.419px;
    min-width:100%;
    font-size:24px;
    line-height:45px;
    font-weight:400;
  }

  #hs_cos_wrapper_widget_1741608348803 .hshero-lft {
    flex:0 0 55%;
    max-width:55%;
    padding-top:0px;
  }

  #hs_cos_wrapper_widget_1741608348803 .hshero-rgt {
    flex:0 0 45%;
    max-width:45%;
    padding-left:20px;
  }

  #hs_cos_wrapper_widget_1741608348803 .hshero-content { margin-bottom:45px; }

  #hs_cos_wrapper_widget_1741608348803 .hshero-start a {
    padding:12px 20px;
    font-size:17px;
  }

  #hs_cos_wrapper_widget_1741608348803 .hshero-methodology a {
    padding:11px 20px;
    font-size:17px;
  }
}

@media screen and (max-width:767px) {
  #hs_cos_wrapper_widget_1741608348803 .hshero { padding:60px 0 40px; }

  #hs_cos_wrapper_widget_1741608348803 .hshero-lft {
    flex:0 0 100%;
    max-width:100%;
    padding-top:25px;
    margin-bottom:45px;
  }

  #hs_cos_wrapper_widget_1741608348803 .hshero-rgt {
    flex:0 0 100%;
    max-width:100%;
    padding-left:0;
  }
}

@media screen and (max-width:639px) {
  #hs_cos_wrapper_widget_1741608348803 .hshero-content h1 { font-size:42px; }

  #hs_cos_wrapper_widget_1741608348803 .hshero-content p {
    font-size:18px;
    line-height:28px;
  }

  #hs_cos_wrapper_widget_1741608348803 .hshero-start a { padding:12px 25px; }

  #hs_cos_wrapper_widget_1741608348803 .hshero-methodology a { padding:11px 20px; }

  #hs_cos_wrapper_widget_1741608348803 .hshero-methodology { padding-left:0; }

  #hs_cos_wrapper_widget_1741608348803 .hshero-ctas a {
    margin-right:24px;
    margin-bottom:24px;
  }

  #hs_cos_wrapper_widget_1741608348803 .hshero-ctas>div:last-child a { margin-right:0px; }
}

@media screen and (max-width:499px) {
  #hs_cos_wrapper_widget_1741608348803 .hshero-ctas>div {
    flex:0 0 100%;
    max-width:100%;
  }

  #hs_cos_wrapper_widget_1741608348803 .hshero-methodology a {
    width:100%;
    text-align:center;
  }

  #hs_cos_wrapper_widget_1741608348803 .hshero-ctas a {
    margin-right:0;
    justify-content:center;
  }
}

</style>


<style>
  #hs_cos_wrapper_dnd_area-module-4 .trustedby {
  padding:52px 0 59px;
  overflow:hidden;
}

#hs_cos_wrapper_dnd_area-module-4 .trustedby-title {
  text-align:center;
  margin-bottom:32px;
}

#hs_cos_wrapper_dnd_area-module-4 .trustedby-title h6 {
  font-family:'IBM Plex Mono';
  font-size:13px;
  font-weight:600;
  line-height:24px;
  letter-spacing:1.04px;
  text-transform:uppercase;
}

#hs_cos_wrapper_dnd_area-module-4 .trustedby-row {
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin:0 -15px;
}

#hs_cos_wrapper_dnd_area-module-4 .trustedby-col { padding:0 15px; }

#hs_cos_wrapper_dnd_area-module-4 .trustedby-logo img {
  height:auto !important;
  object-fit:contain;
  vertical-align:middle;
}

@media screen and (max-width:1199px) {
  #hs_cos_wrapper_dnd_area-module-4 .trustedby-row { overflow-y:auto; }

  #hs_cos_wrapper_dnd_area-module-4 .trustedby-col {
    padding:0 25px;
    flex-shrink:0;
  }

  #hs_cos_wrapper_dnd_area-module-4 .trustedby-row::-webkit-scrollbar { opacity:0; }
}

@media screen and (max-width:991px) {
  #hs_cos_wrapper_dnd_area-module-4 .trustedby { padding:45px 0 35px; }
}

@media screen and (max-width:767px) {
  #hs_cos_wrapper_dnd_area-module-4 .trustedby { padding:35px 0; }
}

</style>


<style>
  #hs_cos_wrapper_widget_1741679886204 .hs_ccombo-main {
  padding-top:0px;
  padding-bottom:0px;
}

#hs_cos_wrapper_widget_1741679886204 .hs_ccombo-minr { padding:80px; }

#hs_cos_wrapper_widget_1741679886204 .hs_ccombo {
  border-radius:16px;
  background:#121725;
  position:relative;
  padding:80px 120px;
}

#hs_cos_wrapper_widget_1741679886204 .hs_ccombo:before {
  content:"";
  width:230px;
  height:186px;
  background-image:url(https://www.clarifai.com/hubfs/union-maskII.png);
  background-repeat:no-repeat;
  background-position:center;
  background-size:contain;
  position:absolute;
  left:-60px;
  top:-61px;
}

#hs_cos_wrapper_widget_1741679886204 .hs_ccombo:after {
  content:"";
  width:140.001px;
  height:140px;
  background-image:url(https://www.clarifai.com/hubfs/union-mask.png);
  background-repeat:no-repeat;
  background-position:center;
  background-size:contain;
  position:absolute;
  top:-60px;
  right:-60px;
}

#hs_cos_wrapper_widget_1741679886204 .hs_ccombo-inr { margin-bottom:120px; }

#hs_cos_wrapper_widget_1741679886204 .hs_ccombo-mheading {
  text-align:center;
  margin:0 auto 60px;
  max-width:840px;
}

#hs_cos_wrapper_widget_1741679886204 .hs_ccombo-heading h6 {
  font-family:"IBM Plex Mono";
  font-size:13px;
  font-style:normal;
  font-weight:600;
  line-height:24px;
  letter-spacing:1.04px;
  text-transform:uppercase;
  margin-bottom:24px;
}

#hs_cos_wrapper_widget_1741679886204 .hs_ccombo-micon { margin-bottom:24px; }

#hs_cos_wrapper_widget_1741679886204 .hs_ccombo-heading { margin-bottom:24px; }

#hs_cos_wrapper_widget_1741679886204 .hs_ccombo-heading h2 { margin-bottom:24px; }

#hs_cos_wrapper_widget_1741679886204 .hs_ccombo-heading p {
  color:#B1B9D2;
  font-size:16px;
  line-height:27px;
}

#hs_cos_wrapper_widget_1741679886204 .hs_ccombo-btn a:hover {
  border-color:#606E92;
  background:#121725;
}

#hs_cos_wrapper_widget_1741679886204 .hs_ccombo-btn a {
  border-radius:4px;
  border:1px solid #424B66;
  background:#121725;
  padding:8px 24px;
  display:inline-block;
  text-decoration:none;
  vertical-align:middle;
  color:#F9FBFF;
  font-size:14px;
  font-weight:500;
  line-height:24px;
  transition:all 300ms ease;
}

#hs_cos_wrapper_widget_1741679886204 .hs_ccombo-row {
  display:flex;
  flex-wrap:wrap;
  margin:0 -16px 30px;
}

#hs_cos_wrapper_widget_1741679886204 .hs_ccombo-col {
  padding:0 16px 30px;
  flex:0 0 33.3336%;
  max-width:33.3336%;
}

#hs_cos_wrapper_widget_1741679886204 .hs_ccombo-colInr {
  border-top:1px solid #424B66;
  padding-top:32px;
  height:100%;
}

#hs_cos_wrapper_widget_1741679886204 .hs_ccomboit-title h5 {
  color:#F9FBFF;
  font-size:19px;
  font-weight:500;
  line-height:27px;
  letter-spacing:-0.19px;
  margin-bottom:16px;
}

#hs_cos_wrapper_widget_1741679886204 .hs_ccomboit-desc p:last-child { margin-bottom:0; }

#hs_cos_wrapper_widget_1741679886204 .hs_ccomboit-desc p { color:#B1B9D2; }

#hs_cos_wrapper_widget_1741679886204 .hs_ccomboaa {
  display:flex;
  align-items:center;
  border-radius:var(--Spacing---spacing-03,8px);
  border:1px solid rgba(249,251,255,0.05);
  background:var(--Color-Neutral-Neutral-50,#121725);
}

#hs_cos_wrapper_widget_1741679886204 .hs_ccomboaa-lft {
  flex-shrink:0;
  background:linear-gradient(0deg,rgba(4,175,255,0.05) 0%,rgba(4,175,255,0.05) 100%);
  padding:21px 32px;
}

#hs_cos_wrapper_widget_1741679886204 .hs_ccomboaa-title h6 {
  color:#B1B9D2;
  font-family:'IBM Plex Mono';
  font-size:13px;
  font-weight:600;
  line-height:24px;
  letter-spacing:1.04px;
  text-transform:uppercase;
  margin:0;
}

#hs_cos_wrapper_widget_1741679886204 .hs_ccomboaa-rgt { flex:auto; }

#hs_cos_wrapper_widget_1741679886204 .hs_ccomboaa-logos {
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
}

#hs_cos_wrapper_widget_1741679886204 .hs_ccomboaa-logo { padding:0 32px; }

#hs_cos_wrapper_widget_1741679886204 .hs_hcrd {
  margin-bottom:96px;
  overflow:hidden;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hcrd-heading {
  max-width:640px;
  margin-bottom:60px;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hcrd-heading h1,
#hs_cos_wrapper_widget_1741679886204 .hs_hcrd-heading h2,
#hs_cos_wrapper_widget_1741679886204 .hs_hcrd-heading h3,
#hs_cos_wrapper_widget_1741679886204 .hs_hcrd-heading h4,
#hs_cos_wrapper_widget_1741679886204 .hs_hcrd-heading h5,
#hs_cos_wrapper_widget_1741679886204 .hs_hcrd-heading h6 {
  color:#F9FBFF;
  font-family:Manrope;
  font-weight:500;
  line-height:120%;
  letter-spacing:-0.96px;
  margin-bottom:24px;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hcrd-heading h2 {
  font-size:48px;
  font-style:normal;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hcrd-heading p {
  color:#C9D5ED;
  font-family:Inter;
  font-size:20px;
  font-style:normal;
  font-weight:400;
  line-height:30px;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hcrd-heading * { color:#C9D5ED; }

#hs_cos_wrapper_widget_1741679886204 .hs_hcrd-row {
  display:flex;
  flex-wrap:wrap;
  margin:0 -12px;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hcrd-col {
  flex:0 0 33%;
  max-width:33%;
  padding:0 12px 24px;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hcrd-colInr {
  border-radius:8px;
  border:1px solid rgba(66,75,102,0.50);
  background:#121725;
  padding:24px;
  height:100%;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hcrd-logo { margin-bottom:12px; }

#hs_cos_wrapper_widget_1741679886204 .hs_hcrd-logo img {
  width:auto;
  height:64px !important;
  max-width:100%;
  object-fit:contain;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hcrd-cnt h1,
#hs_cos_wrapper_widget_1741679886204 .hs_hcrd-cnt h2,
#hs_cos_wrapper_widget_1741679886204 .hs_hcrd-cnt h3,
#hs_cos_wrapper_widget_1741679886204 .hs_hcrd-cnt h4,
#hs_cos_wrapper_widget_1741679886204 .hs_hcrd-cnt h5,
#hs_cos_wrapper_widget_1741679886204 .hs_hcrd-cnt h6 {
  color:#F9FBFF;
  font-family:Manrope;
  font-weight:500;
  line-height:120%;
  margin-bottom:12px;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hcrd-cnt h5 {
  font-size:20px;
  font-style:normal;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hcrd-cnt p {
  color:#C9D5ED;
  font-family:Inter;
  font-size:16px;
  font-style:normal;
  font-weight:400;
  line-height:24px;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hcrd-cnt * { color:#C9D5ED; }

#hs_cos_wrapper_widget_1741679886204 .hs_hcrd-link { margin-top:24px; }

#hs_cos_wrapper_widget_1741679886204 .hs_hcrd-link a {
  color:#04AFFF;
  font-family:"IBM Plex Mono";
  font-size:13px;
  font-style:normal;
  font-weight:600;
  line-height:24px;
  letter-spacing:1.04px;
  text-transform:uppercase;
  text-decoration:none;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hcrd-link a:hover { text-decoration:underline; }

#hs_cos_wrapper_widget_1741679886204 .hs_hbwtins {
  margin-bottom:80px;
  overflow:hidden;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hbwtins-heading {
  max-width:680px;
  margin-bottom:40px;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hbwtins-heading h1,
#hs_cos_wrapper_widget_1741679886204 .hs_hbwtins-heading h2,
#hs_cos_wrapper_widget_1741679886204 .hs_hbwtins-heading h3,
#hs_cos_wrapper_widget_1741679886204 .hs_hbwtins-heading h4,
#hs_cos_wrapper_widget_1741679886204 .hs_hbwtins-heading h5,
#hs_cos_wrapper_widget_1741679886204 .hs_hbwtins-heading h6 {
  color:#F9FBFF;
  font-family:Manrope;
  font-weight:500;
  line-height:120%;
  letter-spacing:-0.96px;
  margin-bottom:24px;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hbwtins-heading h2 {
  font-size:48px;
  font-style:normal;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hbwtins-heading p {
  font-size:20px;
  font-style:normal;
  font-weight:400;
  line-height:30px;
  padding-right:40px;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hbwtins-heading * {
  color:#C9D5ED;
  font-family:Inter;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hbwtins-btn { margin-bottom:60px; }

#hs_cos_wrapper_widget_1741679886204 .hs_hbwtins-btn a {
  border-radius:4px;
  background:#F9FBFF;
  padding:10px 14px;
  color:#0A0D15;
  font-family:Poppins;
  font-size:14px;
  font-style:normal;
  font-weight:500;
  line-height:24px;
  text-decoration:none;
  display:inline-block;
  vertical-align:middle;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hbwtins-btn a:hover { background:#EFF3FF; }

#hs_cos_wrapper_widget_1741679886204 .hs_hbwtins-row {
  display:flex;
  flex-wrap:wrap;
  margin:0 -12px;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hbwtins-col {
  flex:0 0 25%;
  max-width:25%;
  padding:0 12px 24px;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hbwtins-colInr {
  border-top:1px solid #424B66;
  padding-top:32px;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hbwtins-hdr {
  display:flex;
  align-items:center;
  margin-bottom:16px;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hbwtins-icon img {
  width:20px !important;
  height:auto !important;
  object-fit:contain;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hbwtins-icon {
  flex-shrink:0;
  padding-right:8px;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hbwtins-title h5 {
  color:#F9FBFF;
  font-size:19px;
  font-weight:500;
  line-height:27px;
  letter-spacing:-0.19px;
  margin:0;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hbwtins-desc p {
  font-size:14px;
  font-style:normal;
  font-weight:400;
  line-height:24px;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hbwtins-desc * {
  color:#B1B9D2;
  font-family:Poppins;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hcntr { overflow:hidden; }

#hs_cos_wrapper_widget_1741679886204 .hs_hcntr-heading {
  max-width:640px;
  margin-bottom:60px;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hcntr-heading h1,
#hs_cos_wrapper_widget_1741679886204 .hs_hcntr-heading h2,
#hs_cos_wrapper_widget_1741679886204 .hs_hcntr-heading h3,
#hs_cos_wrapper_widget_1741679886204 .hs_hcntr-heading h4,
#hs_cos_wrapper_widget_1741679886204 .hs_hcntr-heading h5,
#hs_cos_wrapper_widget_1741679886204 .hs_hcntr-heading h6 {
  color:#F9FBFF;
  font-family:Manrope;
  font-weight:500;
  line-height:120%;
  letter-spacing:-0.96px;
  margin-bottom:24px;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hcntr-heading h2 {
  font-size:48px;
  font-style:normal;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hcntr-heading p {
  font-size:20px;
  font-style:normal;
  font-weight:400;
  line-height:30px;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hcntr-heading * {
  color:#C9D5ED;
  font-family:Inter;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hcntr-row {
  display:flex;
  flex-wrap:wrap;
  margin:0 -12px;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hcntr-col {
  flex:0 0 33%;
  max-width:33%;
  padding:0 12px;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hcntr-colInr {
  border-radius:8px;
  border:1px solid rgba(249,251,255,0.05);
  background:#0A0D15;
  backdrop-filter:blur(8px);
  padding:40px;
  height:100%;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hcntr-num {
  color:#04AFFF;
  font-family:Manrope;
  font-size:80px;
  font-style:normal;
  font-weight:200;
  line-height:110%;
  margin-bottom:8px;
}

#hs_cos_wrapper_widget_1741679886204 .hs_hcntr-desc p {
  color:#C9D5ED;
  font-family:Inter;
  font-size:18px;
  font-style:normal;
  font-weight:400;
  line-height:28px;
  margin:0;
}

@media screen and (max-width:1650px) {
  #hs_cos_wrapper_widget_1741679886204 .hs_ccombo { padding:80px; }
}

@media screen and (max-width:1499px) {
  #hs_cos_wrapper_widget_1741679886204 .hs_hcntr-num {
    font-size:65px;
    line-height:102%;
  }
}

@media screen and (max-width:1399px) {
  #hs_cos_wrapper_widget_1741679886204 .hs_ccombo { padding:80px 30px; }

  #hs_cos_wrapper_widget_1741679886204 .hs_ccombo-minr { padding:80px 40px; }

  #hs_cos_wrapper_widget_1741679886204 .hs_hcntr-colInr { padding:40px 25px; }
}

@media screen and (max-width:1199px) {
  #hs_cos_wrapper_widget_1741679886204 .hs_ccombo .content-wrapper { padding:0; }

  #hs_cos_wrapper_widget_1741679886204 .hs_ccombo:before {
    width:129.768px;
    height:104.863px;
    left:-61px;
    top:-53px;
  }

  #hs_cos_wrapper_widget_1741679886204 .hs_ccombo:after {
    width:78.672px;
    height:78.672px;
    top:-27px;
    right:-6px;
  }

  #hs_cos_wrapper_widget_1741679886204 .hs_ccomboaa-logo { padding:0 10px; }

  #hs_cos_wrapper_widget_1741679886204 .hs_hcntr-num { font-size:50px; }

  #hs_cos_wrapper_widget_1741679886204 .hs_hcntr-desc p {
    font-size:16px;
    line-height:24px;
  }

  #hs_cos_wrapper_widget_1741679886204 .hs_hcntr-colInr { padding:25px 20px; }

  #hs_cos_wrapper_widget_1741679886204 .hs_hbwtins-col {
    flex:0 0 50%;
    max-width:50%;
    padding:0 12px 20px;
  }

  #hs_cos_wrapper_widget_1741679886204 .hs_hcrd-col {
    flex:0 0 50%;
    max-width:50%;
  }

  #hs_cos_wrapper_widget_1741679886204 .hs_ccombo-inr { margin-bottom:75px; }
}

@media screen and (max-width:991px) {
  #hs_cos_wrapper_widget_1741679886204 .hs_ccombo { padding:65px 30px 40px; }

  #hs_cos_wrapper_widget_1741679886204 .hs_ccomboaa { flex-wrap:wrap; }

  #hs_cos_wrapper_widget_1741679886204 .hs_ccomboaa-lft {
    width:100%;
    text-align:center;
  }

  #hs_cos_wrapper_widget_1741679886204 .hs_ccomboaa-rgt { padding:4px 20px; }

  #hs_cos_wrapper_widget_1741679886204 .hs_ccomboaa-logo { padding:20px 20px; }

  #hs_cos_wrapper_widget_1741679886204 .hs_hcrd { margin-bottom:75px; }

  #hs_cos_wrapper_widget_1741679886204 .hs_hcntr-col {
    flex:0 0 50%;
    max-width:50%;
    padding:0 12px 24px;
  }

  #hs_cos_wrapper_widget_1741679886204 .hs_hbwtins { margin-bottom:65px; }
}

@media screen and (max-width:767px) {
  #hs_cos_wrapper_widget_1741679886204 .hs_ccombo:before {
    left:-26px;
    top:-49px;
  }

  #hs_cos_wrapper_widget_1741679886204 .hs_ccombo-heading p {
    font-size:14px;
    line-height:24px;
  }

  #hs_cos_wrapper_widget_1741679886204 .hs_ccombo-row { margin:0 0 32px; }

  #hs_cos_wrapper_widget_1741679886204 .hs_ccombo-col {
    padding:0 0 32px;
    flex:0 0 100%;
    max-width:100%;
  }

  #hs_cos_wrapper_widget_1741679886204 .hs_ccomboit-title h5 {
    font-size:17px;
    line-height:24px;
    letter-spacing:normal;
    margin-bottom:16px;
  }

  #hs_cos_wrapper_widget_1741679886204 .hs_ccomboaa-lft { padding:8px 32px; }

  #hs_cos_wrapper_widget_1741679886204 .hs_hcrd-heading h2 { font-size:34px; }

  #hs_cos_wrapper_widget_1741679886204 .hs_hcrd-heading p {
    font-size:16px;
    line-height:24px;
  }

  #hs_cos_wrapper_widget_1741679886204 .hs_hcrd-heading {
    max-width:100%;
    margin-bottom:45px;
  }

  #hs_cos_wrapper_widget_1741679886204 .hs_hcrd { margin-bottom:45px; }

  #hs_cos_wrapper_widget_1741679886204 .hs_hbwtins-heading h2 { font-size:34px; }

  #hs_cos_wrapper_widget_1741679886204 .hs_hbwtins-heading p {
    font-size:16px;
    line-height:24px;
    padding-right:0;
  }

  #hs_cos_wrapper_widget_1741679886204 .hs_hbwtins { margin-bottom:45px; }

  #hs_cos_wrapper_widget_1741679886204 .hs_hcntr-heading h2 { font-size:34px; }

  #hs_cos_wrapper_widget_1741679886204 .hs_hcntr-heading p {
    font-size:16px;
    line-height:24px;
  }

  #hs_cos_wrapper_widget_1741679886204 .hs_hcntr-num { font-size:45px; }

  #hs_cos_wrapper_widget_1741679886204 .hs_ccombo-minr { padding:65px 25px; }

  #hs_cos_wrapper_widget_1741679886204 .hs_ccombo:after { right:-25px; }

  #hs_cos_wrapper_widget_1741679886204 .hs_ccombo { padding:65px 25px 40px; }
}

@media screen and (max-width:639px) {
  #hs_cos_wrapper_widget_1741679886204 .hs_hcrd-col {
    flex:0 0 100%;
    max-width:100%;
  }

  #hs_cos_wrapper_widget_1741679886204 .hs_hbwtins-col {
    flex:0 0 100%;
    max-width:100%;
  }

  #hs_cos_wrapper_widget_1741679886204 .hs_hcntr-col {
    flex:0 0 100%;
    max-width:100%;
  }
}

</style>


<style>
  #hs_cos_wrapper_widget_1741701110027 .hs_stdPre {
  background:#0A0D15;
  padding-top:80px;
  padding-bottom:80px;
}

#hs_cos_wrapper_widget_1741701110027 .hs_stdPre-head {
  margin-bottom:40px;
  max-width:640px;
}

#hs_cos_wrapper_widget_1741701110027 .hs_stdPre-head h6 {
  font-family:"IBM Plex Mono";
  font-size:13px;
  font-style:normal;
  font-weight:600;
  line-height:24px;
  letter-spacing:1.04px;
  text-transform:uppercase;
  margin-bottom:24px;
}

#hs_cos_wrapper_widget_1741701110027 .hs_stdPre-head h1,
#hs_cos_wrapper_widget_1741701110027 .hs_stdPre-head h2,
#hs_cos_wrapper_widget_1741701110027 .hs_stdPre-head h3,
#hs_cos_wrapper_widget_1741701110027 .hs_stdPre-head h4,
#hs_cos_wrapper_widget_1741701110027 .hs_stdPre-head h5 {
  color:#F9FBFF;
  font-family:Manrope;
  font-weight:500;
  line-height:120%;
  letter-spacing:-0.96px;
  margin-bottom:24px;
}

#hs_cos_wrapper_widget_1741701110027 .hs_stdPre-head h2 {
  font-size:48px;
  font-style:normal;
}

#hs_cos_wrapper_widget_1741701110027 .hs_stdPre-head p {
  color:#C9D5ED;
  font-family:Inter;
  font-size:20px;
  font-style:normal;
  font-weight:400;
  line-height:30px;
}

#hs_cos_wrapper_widget_1741701110027 .hs_stdPre-head * { color:#C9D5ED; }

#hs_cos_wrapper_widget_1741701110027 .hs_stdPre-btn a:hover { background:#EFF3FF; }

#hs_cos_wrapper_widget_1741701110027 .hs_stdPre-btn a {
  border-radius:4px;
  background:#F9FBFF;
  padding:10px 14px;
  color:#0A0D15;
  font-family:Poppins;
  font-size:14px;
  font-style:normal;
  font-weight:500;
  line-height:24px;
  text-decoration:none;
  display:inline-block;
  vertical-align:middle;
  transition:all 300ms ease;
}

@media screen and (max-width:991px) {
  #hs_cos_wrapper_widget_1741701110027 .hs_stdPre {
    padding-top:40.0px;
    padding-bottom:40.0px;
  }
}

@media screen and (max-width:767px) {
  #hs_cos_wrapper_widget_1741701110027 .hs_stdPre-head h2 { font-size:34px; }

  #hs_cos_wrapper_widget_1741701110027 .hs_stdPre-head p {
    font-size:16px;
    line-height:24px;
  }
}

</style>


<style>
  #hs_cos_wrapper_widget_1741704218042 .hs_caccord { padding:0px 0 30px; }

#hs_cos_wrapper_widget_1741704218042 .hs_caccord-row {
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
}

#hs_cos_wrapper_widget_1741704218042 .hs_caccord-lft {
  flex:0 0 600px;
  max-width:600px;
}

#hs_cos_wrapper_widget_1741704218042 .hs_caccord-rgt {
  flex:0 0 560px;
  max-width:560px;
}

#hs_cos_wrapper_widget_1741704218042 .hs_caccord_acc-item { margin-bottom:12px; }

#hs_cos_wrapper_widget_1741704218042 .hs_caccord_acc-hdr {
  display:flex;
  padding:16px;
  cursor:pointer;
}

#hs_cos_wrapper_widget_1741704218042 .hs_caccord_acc-lft { flex-shrink:0; }

#hs_cos_wrapper_widget_1741704218042 .hs_caccord_acc-rgt {
  padding-left:10px;
  flex:auto;
}

#hs_cos_wrapper_widget_1741704218042 .hs_caccord_acc-content {
  padding:24px 24px 24px 40px;
  border-left:1px solid #424B66;
  cursor:pointer;
}

#hs_cos_wrapper_widget_1741704218042 .hs_caccord_acc-content h1,
#hs_cos_wrapper_widget_1741704218042 .hs_caccord_acc-content h2,
#hs_cos_wrapper_widget_1741704218042 .hs_caccord_acc-content h3,
#hs_cos_wrapper_widget_1741704218042 .hs_caccord_acc-content h4,
#hs_cos_wrapper_widget_1741704218042 .hs_caccord_acc-content h5,
#hs_cos_wrapper_widget_1741704218042 .hs_caccord_acc-content h6 {
  color:#F9FBFF;
  font-family:Manrope;
  font-style:normal;
  font-weight:500;
  line-height:120%;
  letter-spacing:-0.4px;
  margin-bottom:12px;
}

#hs_cos_wrapper_widget_1741704218042 .hs_caccord_acc-content h5 { font-size:20px; }

#hs_cos_wrapper_widget_1741704218042 .hs_caccord_acc-content p {
  font-size:16px;
  line-height:24px;
}

#hs_cos_wrapper_widget_1741704218042 .hs_caccord_acc-content p:last-child { margin-bottom:0; }

#hs_cos_wrapper_widget_1741704218042 .hs_caccord_acc-content * {
  color:#C9D5ED;
  font-family:Inter;
  font-weight:400;
  font-style:normal;
}

#hs_cos_wrapper_widget_1741704218042 .hs_caccord_acc-item:last-child { margin-bottom:0; }

#hs_cos_wrapper_widget_1741704218042 .hs_caccord-image img { display:none; }

#hs_cos_wrapper_widget_1741704218042 .hs_caccord-image img.active { display:block; }

#hs_cos_wrapper_widget_1741704218042 .accordion_active .hs_caccord_acc-content { border-color:#04AFFF; }

#hs_cos_wrapper_widget_1741704218042 .hs_caccord_acc-content:hover {
  background:#101828;
  cursor:pointer;
}

@media screen and (max-width:1199px) {
  #hs_cos_wrapper_widget_1741704218042 .hs_caccord-lft {
    flex:0 0 55%;
    max-width:55%;
    padding-right:20px;
  }

  #hs_cos_wrapper_widget_1741704218042 .hs_caccord-image { width:100%; }

  #hs_cos_wrapper_widget_1741704218042 .accordion_images img {
    width:100%;
    bottom:0;
    height:auto;
    margin:auto;
  }

  #hs_cos_wrapper_widget_1741704218042 .hs_caccord-rgt {
    flex:0 0 45%;
    max-width:45%;
  }
}

@media screen and (max-width:991px) {
  #hs_cos_wrapper_widget_1741704218042 .hs_caccord {
    padding-top:0.0px;
    padding-bottom:15.0px;
  }

  #hs_cos_wrapper_widget_1741704218042 .hs_caccord-lft {
    flex:0 0 100%;
    max-width:100%;
    padding-right:0;
  }

  #hs_cos_wrapper_widget_1741704218042 .hs_caccord-image {
    width:100%;
    max-width:515px;
    min-height:auto;
  }

  #hs_cos_wrapper_widget_1741704218042 .accordion_images img {
    width:100%;
    display:none;
    position:relative;
  }

  #hs_cos_wrapper_widget_1741704218042 .accordion_images img.active {
    opacity:1;
    display:block;
  }

  #hs_cos_wrapper_widget_1741704218042 .hs_caccord-rgt {
    flex:0 0 100%;
    max-width:100%;
    order:-1;
    margin-bottom:45px;
  }
}

@media screen and (max-width:767px) {
  #hs_cos_wrapper_widget_1741704218042 .hs_caccord {
    padding-top:0.0px;
    padding-bottom:7.5px;
  }

  #hs_cos_wrapper_widget_1741704218042 .hs_caccord-heading h2 { margin-bottom:8px; }

  #hs_cos_wrapper_widget_1741704218042 .hs_caccord-heading { margin-bottom:8px; }

  #hs_cos_wrapper_widget_1741704218042 .hs_caccord-lft { padding-top:8px; }

  #hs_cos_wrapper_widget_1741704218042 .hs_caccord_acc-content { padding:20px 20px 20px 24px; }

  #hs_cos_wrapper_widget_1741704218042 .hs_caccord_acc-content h5 { font-size:18px; }
}

@media screen and (max-width:479px) {
  #hs_cos_wrapper_widget_1741704218042 .accordion_active .hs_caccord_acc-body { max-height:161px; }

  #hs_cos_wrapper_widget_1741704218042 .hs_caccord_acc-title {
    font-size:14px;
    line-height:normal;
  }

  #hs_cos_wrapper_widget_1741704218042 .hs_caccord-heading p {
    font-size:14px;
    line-height:24px;
  }
}

</style>


<style>
  #hs_cos_wrapper_module_17417066005924 .trustedby {
  padding:52px 0 59px;
  overflow:hidden;
}

#hs_cos_wrapper_module_17417066005924 .trustedby-title {
  text-align:center;
  margin-bottom:32px;
}

#hs_cos_wrapper_module_17417066005924 .trustedby-title h6 {
  font-family:'IBM Plex Mono';
  font-size:13px;
  font-weight:600;
  line-height:24px;
  letter-spacing:1.04px;
  text-transform:uppercase;
}

#hs_cos_wrapper_module_17417066005924 .trustedby-row {
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin:0 -15px;
}

#hs_cos_wrapper_module_17417066005924 .trustedby-col { padding:0 15px; }

#hs_cos_wrapper_module_17417066005924 .trustedby-logo img {
  height:auto !important;
  object-fit:contain;
  vertical-align:middle;
}

@media screen and (max-width:1199px) {
  #hs_cos_wrapper_module_17417066005924 .trustedby-row { overflow-y:auto; }

  #hs_cos_wrapper_module_17417066005924 .trustedby-col {
    padding:0 25px;
    flex-shrink:0;
  }

  #hs_cos_wrapper_module_17417066005924 .trustedby-row::-webkit-scrollbar { opacity:0; }
}

@media screen and (max-width:991px) {
  #hs_cos_wrapper_module_17417066005924 .trustedby { padding:45px 0 35px; }
}

@media screen and (max-width:767px) {
  #hs_cos_wrapper_module_17417066005924 .trustedby { padding:35px 0; }
}

</style>


<style>
  #hs_cos_wrapper_dnd_area-module-10 .unlocking_ai {
  padding:68px 0 44px;
  overflow:hidden;
}

#hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-heading {
  max-width:593px;
  margin-bottom:48px;
}

#hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-heading h2 { margin-bottom:16px; }

#hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-heading p {
  color:#7C86A1;
  font-size:20px;
  line-height:30px;
}

#hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-btn a {
  border-radius:4px;
  background:#F9FBFF;
  padding:10px 14px;
  color:#0A0D15;
  font-family:Poppins;
  font-size:14px;
  font-style:normal;
  font-weight:500;
  line-height:24px;
  text-decoration:none;
  display:inline-block;
  vertical-align:middle;
}

#hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-btn a:hover { background:#EFF3FF; }

#hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-btn { margin-bottom:80px; }

#hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-rowtop {
  display:flex;
  flex-wrap:wrap;
  margin:0 -12px;
}

#hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-col {
  flex:0 0 29.4%;
  max-width:29.4%;
  padding:0 12px 21px;
}

#hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-col1 .unlocking_ai-colInr {
  border:1px solid #1F2840;
  background:linear-gradient(83deg,#45E7DD 9.04%,#5DB2F7 110.56%);
}

#hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-colInr {
  border-radius:8px;
  border:1px solid rgba(249,251,255,0.05);
  background:#121725;
  height:100%;
  overflow:hidden;
}

#hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-col1 .unlocking_ai-cnt h5 { color:#0A0D15; }

#hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-cnt h5 {
  color:#FFF;
  font-size:19px;
  font-weight:500;
  line-height:27px;
  letter-spacing:-0.19px;
  margin-bottom:8px;
}

#hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-col1 .unlocking_ai-desc p { color:#424B66; }

#hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-desc p:last-child { margin-bottom:0; }

#hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-desc p { color:#7C86A1; }

#hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-col.unlocking_ai-col2 {
  flex:0 0 41.2%;
  max-width:41.2%;
}

#hs_cos_wrapper_dnd_area-module-10 .background_image .unlocking_ai-bgimg {
  background-repeat:no-repeat;
  background-size:contain;
  background-position:right top;
}

#hs_cos_wrapper_dnd_area-module-10 .background_image .unlocking_org-bgimg {
  background-repeat:no-repeat;
  background-size:contain;
  background-position:right top;
}

#hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-bgimg {
  padding:29px 24px 24px;
  height:100%;
  position:relative;
}

#hs_cos_wrapper_dnd_area-module-10 a.unlocking_ai-link {
  position:absolute;
  left:0;
  top:0;
  right:0;
  bottom:0;
  cursor:auto;
}

#hs_cos_wrapper_dnd_area-module-10 a.unlocking_ai-link[href] { cursor:pointer; }

#hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-img {
  min-height:136px;
  margin-bottom:20px;
  text-align:center;
}

#hs_cos_wrapper_dnd_area-module-10 .unlocking_org-row {
  display:flex;
  flex-wrap:wrap;
  margin:0 -14px;
}

#hs_cos_wrapper_dnd_area-module-10 .unlocking_org-lft {
  flex:0 0 70.6%;
  max-width:70.6%;
  display:flex;
  flex-wrap:wrap;
}

#hs_cos_wrapper_dnd_area-module-10 .unlocking_org-col.unlocking_ai-col4 {
  flex:0 0 100%;
  max-width:100%;
}

#hs_cos_wrapper_dnd_area-module-10 .unlocking_org-col {
  flex:0 0 41.2%;
  max-width:41.2%;
  padding:0 14px 20px;
  height:100;
}

#hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-col4 .unlocking_org-colInr { padding:22px 0 14px 24px; }

#hs_cos_wrapper_dnd_area-module-10 .unlocking_org-colInr {
  border-radius:8px;
  border:1px solid rgba(249,251,255,0.05);
  background:#121725;
  padding:16px 24px 24px;
  height:100%;
}

#hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-col4 .unlocking_org-bgimg {
  display:flex;
  align-items:center;
  justify-content:space-between;
}

#hs_cos_wrapper_dnd_area-module-10 .unlocking_org-bgimg {
  height:100%;
  position:relative;
}

#hs_cos_wrapper_dnd_area-module-10 .unlocking_org-img {
  min-height:168px;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-bottom:9px;
}

#hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-col4 .unlocking_org-cnt {
  flex:0 0 440px;
  max-width:440px;
  order:-1;
}

#hs_cos_wrapper_dnd_area-module-10 .unlocking_org-cnt h5 {
  color:#FFF;
  font-size:19px;
  font-weight:500;
  line-height:27px;
  letter-spacing:-0.19px;
  margin-bottom:14px;
}

#hs_cos_wrapper_dnd_area-module-10 .unlocking_org-desc p:last-child { margin-bottom:0; }

#hs_cos_wrapper_dnd_area-module-10 .unlocking_org-desc p { color:#7C86A1; }

#hs_cos_wrapper_dnd_area-module-10 .unlocking_org-col.unlocking_ai-col5 {
  flex:0 0 58.8%;
  max-width:58.8%;
}

#hs_cos_wrapper_dnd_area-module-10 .unlocking_ai img {
  max-width:100%;
  height:auto;
}

#hs_cos_wrapper_dnd_area-module-10 .unlocking_org-rgt {
  flex:0 0 29.4%;
  max-width:29.4%;
}

#hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-col6 .unlocking_org-img { min-height:144px; }

#hs_cos_wrapper_dnd_area-module-10 .unlocking_org-col.unlocking_ai-col7 {
  flex:0 0 100%;
  max-width:100%;
  height:100%;
}

#hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-col7 .unlocking_org-colInr { padding:35px 0 24px 24px; }

#hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-col7 .unlocking_org-img {
  margin-bottom:0;
  justify-content:flex-end;
  min-height:auto;
}

#hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-col7 .unlocking_org-cnt {
  padding-right:24px;
  align-self:flex-end;
}

#hs_cos_wrapper_dnd_area-module-10 .unlocking_org-colInr.background_image { padding:0; }

#hs_cos_wrapper_dnd_area-module-10 .background_image .unlocking_org-bgimg { padding:16px 24px 24px; }

#hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-col7 .unlocking_org-bgimg {
  display:flex;
  flex-wrap:wrap;
}

@media screen and (max-width:991px) {
  #hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-col {
    flex:0 0 50%;
    max-width:50%;
  }

  #hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-col.unlocking_ai-col2 {
    flex:0 0 50%;
    max-width:50%;
  }

  #hs_cos_wrapper_dnd_area-module-10 .unlocking_org-lft {
    flex:0 0 100%;
    max-width:100%;
  }

  #hs_cos_wrapper_dnd_area-module-10 .unlocking_org-rgt {
    flex:0 0 59%;
    max-width:59%;
  }

  #hs_cos_wrapper_dnd_area-module-10 .unlocking_org-col.unlocking_ai-col4 {
    flex:0 0 100%;
    max-width:100%;
  }

  #hs_cos_wrapper_dnd_area-module-10 .unlocking_org-col.unlocking_ai-col5 {
    flex:0 0 58.8%;
    max-width:58.8%;
  }
}

@media screen and (max-width:767px) {
  #hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-heading p {
    font-size:14px;
    line-height:24px;
  }

  #hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-heading {
    max-width:100%;
    margin-bottom:30px;
  }

  #hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-col4 .unlocking_org-cnt {
    flex:0 0 340px;
    max-width:340px;
  }
}

@media screen and (max-width:639px) {
  #hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-col {
    flex:0 0 100%;
    max-width:100%;
    padding:0 0 24px;
  }

  #hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-col.unlocking_ai-col2 {
    flex:0 0 100%;
    max-width:100%;
  }

  #hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-rowtop { margin:0; }

  #hs_cos_wrapper_dnd_area-module-10 .unlocking_org-row { margin:0; }

  #hs_cos_wrapper_dnd_area-module-10 .unlocking_org-col {
    flex:0 0 100%;
    max-width:100%;
    padding:0 0px 24px;
  }

  #hs_cos_wrapper_dnd_area-module-10 .unlocking_org-col.unlocking_ai-col5 {
    flex:0 0 100%;
    max-width:100%;
  }

  #hs_cos_wrapper_dnd_area-module-10 .unlocking_org-rgt {
    flex:0 0 100%;
    max-width:100%;
  }

  #hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-col4 .unlocking_org-bgimg {
    justify-content:flex-start;
    flex-wrap:wrap;
  }

  #hs_cos_wrapper_dnd_area-module-10 .unlocking_org-img {
    min-height:auto;
    justify-content:center;
    margin-bottom:0;
    flex:0 0 100%;
    max-width:100%;
  }

  #hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-col4 .unlocking_org-cnt {
    flex:0 0 100%;
    max-width:100%;
    order:0;
  }

  #hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-col4 .unlocking_org-colInr { padding:27px 24px 49px 24px; }

  #hs_cos_wrapper_dnd_area-module-10 .unlocking_org-colInr { padding:22px 24px 24px; }

  #hs_cos_wrapper_dnd_area-module-10 .unlocking_ai-img { text-align:center; }
}

</style>


<style>
  #hs_cos_wrapper_widget_1741706775214 .roadmap_ai { padding:64px 0 40px; }

#hs_cos_wrapper_widget_1741706775214 .roadmap_ai-heading {
  max-width:591px;
  margin-bottom:48px;
}

#hs_cos_wrapper_widget_1741706775214 .roadmap_ai-heading p {
  color:#C9D5ED;
  font-family:Inter;
  font-size:20px;
  font-style:normal;
  font-weight:400;
  line-height:30px;
}

#hs_cos_wrapper_widget_1741706775214 .roadmap_ai-row {
  display:flex;
  flex-wrap:wrap;
  margin:0 -12px;
}

#hs_cos_wrapper_widget_1741706775214 .roadmap_ai-lft {
  flex:0 0 70.7%;
  max-width:70.7%;
  padding:0 12px 24px;
  display:flex;
  flex-wrap:wrap;
}

#hs_cos_wrapper_widget_1741706775214 .roadmap_aia-lft {
  background:#DA3743;
  flex:0 0 43.4%;
  max-width:43.4%;
  border-radius:6px 0 0 6px;
}

#hs_cos_wrapper_widget_1741706775214 .roadmap_aia-lftInr {
  background-image:url(https://www.clarifai.com/hubfs/Mask-shape.png);
  background-repeat:no-repeat;
  background-position:102% top;
  background-size:145px;
  padding:69px 32px 32px;
  height:100%;
}

#hs_cos_wrapper_widget_1741706775214 .roadmap_aia-logo { margin-bottom:128px; }

#hs_cos_wrapper_widget_1741706775214 .roadmap_aia-desc {
  max-width:248px;
  margin-bottom:24px;
}

#hs_cos_wrapper_widget_1741706775214 .roadmap_aia-desc h5 {
  font-size:19px;
  font-weight:500;
  line-height:27px;
  letter-spacing:-0.19px;
}

#hs_cos_wrapper_widget_1741706775214 .roadmap_aia-link a:hover { text-decoration:underline; }

#hs_cos_wrapper_widget_1741706775214 .roadmap_aia-link a {
  color:#fff;
  font-family:"Nunito";
  font-size:16px;
  font-weight:600;
  line-height:normal;
  text-decoration:none;
}

#hs_cos_wrapper_widget_1741706775214 .roadmap_aia-rgt {
  flex:0 0 56.6%;
  max-width:56.6%;
}

#hs_cos_wrapper_widget_1741706775214 .roadmap_aia-img {
  height:100%;
  background-repeat:no-repeat;
  background-position:center;
  background-size:cover;
  border-radius:0 6px 6px 0;
}

#hs_cos_wrapper_widget_1741706775214 .roadmap_ai-rgt {
  flex:0 0 29.3%;
  max-width:29.3%;
  padding:0 12px 24px;
  display:flex;
  justify-content:center;
  align-items:center;
}

#hs_cos_wrapper_widget_1741706775214 .roadmap_ai-stats {
  text-align:center;
  max-width:267px;
}

#hs_cos_wrapper_widget_1741706775214 .roadmap_ai-count {
  display:flex;
  justify-content:center;
  align-items:flex-end;
}

#hs_cos_wrapper_widget_1741706775214 .roadmap_ai-num {
  color:#fff;
  font-family:Switzer;
  font-size:160px;
  font-style:normal;
  font-weight:200;
  line-height:151px;
  letter-spacing:-12.8px;
}

#hs_cos_wrapper_widget_1741706775214 .roadmap_ai-percent {
  color:#fff;
  font-family:Switzer;
  font-size:100px;
  font-style:normal;
  font-weight:200;
  line-height:100px;
}

#hs_cos_wrapper_widget_1741706775214 .roadmap_ai-desc p:last-child { margin-bottom:0; }

#hs_cos_wrapper_widget_1741706775214 .roadmap_ai-desc p {
  color:#fff;
  font-size:16px;
  line-height:27px;
}

#hs_cos_wrapper_widget_1741706775214 .roadmap_sas-row {
  display:flex;
  flex-wrap:wrap;
}

#hs_cos_wrapper_widget_1741706775214 .roadmap_sas-col {
  flex:0 0 29.4%;
  max-width:29.4%;
  padding:0 12px 24px;
}

#hs_cos_wrapper_widget_1741706775214 .roadmap_sas-colinr {
  display:flex;
  justify-content:center;
  align-items:center;
  height:100%;
  text-align:center;
}

#hs_cos_wrapper_widget_1741706775214 .roadmap_sas-stats { max-width:279px; }

#hs_cos_wrapper_widget_1741706775214 .roadmap_sas-count {
  display:flex;
  justify-content:center;
  align-items:flex-end;
}

#hs_cos_wrapper_widget_1741706775214 .roadmap_sas-num {
  color:#fff;
  font-size:160px;
  font-weight:200;
  line-height:151px;
}

#hs_cos_wrapper_widget_1741706775214 .roadmap_sas-percent {
  color:#fff;
  font-size:100px;
  font-weight:200;
  line-height:100px;
}

#hs_cos_wrapper_widget_1741706775214 .roadmap_sas-desc p:last-child { margin-bottom:0; }

#hs_cos_wrapper_widget_1741706775214 .roadmap_sas-desc p {
  color:#fff;
  font-size:16px;
  line-height:27px;
}

#hs_cos_wrapper_widget_1741706775214 .roadmap_sas-col.roadmap_sas-col2 {
  padding:0 0 24px;
  flex:0 0 40.6%;
  max-width:40.6%;
}

#hs_cos_wrapper_widget_1741706775214 .roadmap_sas-colinr {
  display:flex;
  justify-content:center;
  align-items:center;
  height:100%;
  text-align:center;
}

#hs_cos_wrapper_widget_1741706775214 .roadmap_sas-img img {
  max-width:100%;
  height:auto;
}

#hs_cos_wrapper_widget_1741706775214 .roadmap_sas-col.roadmap_sas-col3 {
  flex:0 0 29.3%;
  max-width:29.3%;
  padding-left:24px;
}

#hs_cos_wrapper_widget_1741706775214 .roadmap_sas-col3 .roadmap_sas-colinr {
  border-radius:8px;
  border:1px solid rgba(255,255,255,0.05);
  background:linear-gradient(0deg,rgba(38,163,221,0.10) 0%,rgba(38,163,221,0.10) 100%);
  text-align:left;
  padding:76px 36px 34px 32px;
  overflow:hidden;
}

#hs_cos_wrapper_widget_1741706775214 .roadmap_sas-logo { margin-bottom:50px; }

#hs_cos_wrapper_widget_1741706775214 .roadmap_sas-cnt p:last-child { margin-bottom:0; }

#hs_cos_wrapper_widget_1741706775214 .roadmap_sas-cnt p {
  color:#fff;
  font-family:Switzer,serif;
  font-size:19px;
  font-weight:500;
  line-height:27px;
  letter-spacing:-0.19px;
}

#hs_cos_wrapper_widget_1741706775214 .roadmap_sas-col2 .roadmap_sas-colinr {
  border-radius:8px;
  border:1px solid #1F2840;
  background:linear-gradient(0deg,rgba(1,171,173,0.10) 0%,rgba(1,171,173,0.10) 100%);
  justify-content:flex-end;
  align-items:flex-end;
  overflow:hidden;
}

#hs_cos_wrapper_widget_1741706775214 .roadmap_aia-link a svg {
  vertical-align:middle;
  margin-left:5px;
}

@media screen and (max-width:1199px) {
  #hs_cos_wrapper_widget_1741706775214 .roadmap_sas-col3 .roadmap_sas-colinr { padding:76px 24px 32px 24px; }

  #hs_cos_wrapper_widget_1741706775214 .roadmap_sas-cnt p {
    font-size:17px;
    line-height:24px;
    letter-spacing:normal;
  }

  #hs_cos_wrapper_widget_1741706775214 .roadmap_sas-num,
  #hs_cos_wrapper_widget_1741706775214 .roadmap_ai-num {
    font-size:120px;
    line-height:115px;
  }

  #hs_cos_wrapper_widget_1741706775214 .roadmap_sas-percent,
  #hs_cos_wrapper_widget_1741706775214 .roadmap_ai-percent {
    font-size:80px;
    line-height:80px;
  }
}

@media screen and (max-width:991px) {
  #hs_cos_wrapper_widget_1741706775214 .roadmap_ai-lft {
    flex:0 0 60%;
    max-width:60%;
  }

  #hs_cos_wrapper_widget_1741706775214 .roadmap_aia-lft {
    flex:0 0 100%;
    max-width:100%;
    border-radius:6px;
    overflow:hidden;
  }

  #hs_cos_wrapper_widget_1741706775214 .roadmap_aia-rgt { display:none; }

  #hs_cos_wrapper_widget_1741706775214 .roadmap_sas-col {
    flex:0 0 100%;
    max-width:100%;
  }

  #hs_cos_wrapper_widget_1741706775214 .roadmap_sas-num,
  #hs_cos_wrapper_widget_1741706775214 .roadmap_ai-num {
    font-size:80px;
    line-height:90px;
  }

  #hs_cos_wrapper_widget_1741706775214 .roadmap_sas-percent,
  #hs_cos_wrapper_widget_1741706775214 .roadmap_ai-percent {
    font-size:80px;
    line-height:90px;
  }

  #hs_cos_wrapper_widget_1741706775214 .roadmap_sas-col.roadmap_sas-col2 {
    flex:0 0 50%;
    max-width:50%;
  }

  #hs_cos_wrapper_widget_1741706775214 .roadmap_sas-col.roadmap_sas-col3 {
    flex:0 0 50%;
    max-width:50%;
  }
}

@media screen and (max-width:767px) {
  #hs_cos_wrapper_widget_1741706775214 .roadmap_ai-heading {
    max-width:100%;
    margin-bottom:32px;
  }
}

@media screen and (max-width:639px) {
  #hs_cos_wrapper_widget_1741706775214 .roadmap_ai-lft {
    flex:0 0 100%;
    max-width:100%;
    padding:0 0 24px;
  }

  #hs_cos_wrapper_widget_1741706775214 .roadmap_aia-lftInr { padding:69px 24px 32px; }

  #hs_cos_wrapper_widget_1741706775214 .roadmap_aia-logo { margin-bottom:86px; }

  #hs_cos_wrapper_widget_1741706775214 .roadmap_aia-desc h5 {
    font-size:17px;
    line-height:24px;
    letter-spacing:normal;
  }

  #hs_cos_wrapper_widget_1741706775214 .roadmap_ai-rgt {
    flex:0 0 100%;
    max-width:100%;
    padding:0 0 24px;
  }

  #hs_cos_wrapper_widget_1741706775214 .roadmap_sas-num,
  #hs_cos_wrapper_widget_1741706775214 .roadmap_ai-num { letter-spacing:normal; }

  #hs_cos_wrapper_widget_1741706775214 .roadmap_ai-stats {
    max-width:100%;
    display:flex;
    align-items:center;
    text-align:left;
  }

  #hs_cos_wrapper_widget_1741706775214 .roadmap_ai-desc { padding-left:25px; }

  #hs_cos_wrapper_widget_1741706775214 .roadmap_ai-desc p {
    font-size:14px;
    line-height:24px;
  }

  #hs_cos_wrapper_widget_1741706775214 .roadmap_sas-col { padding:0 0 24px; }

  #hs_cos_wrapper_widget_1741706775214 .roadmap_sas-col.roadmap_sas-col2 {
    flex:0 0 100%;
    max-width:100%;
    order:-1;
  }

  #hs_cos_wrapper_widget_1741706775214 .roadmap_sas-col.roadmap_sas-col3 {
    flex:0 0 100%;
    max-width:100%;
    padding-left:0;
  }

  #hs_cos_wrapper_widget_1741706775214 .roadmap_sas-stats {
    max-width:100%;
    display:flex;
    align-items:center;
  }

  #hs_cos_wrapper_widget_1741706775214 .roadmap_sas-desc {
    padding-left:25px;
    text-align:left;
  }

  #hs_cos_wrapper_widget_1741706775214 .roadmap_sas-desc p {
    font-size:14px;
    line-height:24px;
  }
}

</style>


<style>
  #hs_cos_wrapper_widget_1741706964201 .for_develop {
  padding:64px 0 44px;
  overflow:hidden;
}

#hs_cos_wrapper_widget_1741706964201 .for_develop-row {
  display:flex;
  flex-wrap:wrap;
  margin:0 -16px;
}

#hs_cos_wrapper_widget_1741706964201 .for_develop-lft {
  flex:0 0 64%;
  max-width:64%;
  padding:0 16px;
}

#hs_cos_wrapper_widget_1741706964201 .for_develop-lftinr {
  border-radius:8px;
  border:1px solid rgba(255,255,255,0.05);
  background-image:url(https://www.clarifai.com/hubfs/get-started-bg.jpg);
  background-repeat:no-repeat;
  background-position:center;
  background-size:cover;
  height:100%;
  padding:28px 0 28px 48px;
}

#hs_cos_wrapper_widget_1741706964201 .get_started-row {
  display:flex;
  align-items:flex-end;
  justify-content:space-between;
}

#hs_cos_wrapper_widget_1741706964201 .get_started-lft {
  flex:0 0 335px;
  max-width:335px;
  padding-bottom:20px;
}

#hs_cos_wrapper_widget_1741706964201 .get_started-content h4 {
  color:#0A0D15;
  font-size:26px;
  font-weight:500;
  line-height:34px;
  margin-bottom:16px;
}

#hs_cos_wrapper_widget_1741706964201 .get_started-btn a {
  border-radius:4px;
  background:#0A0D15;
  padding:10px 14px;
  display:inline-block;
  vertical-align:middle;
  text-decoration:none;
  color:#F9FBFF;
  font-weight:500;
  line-height:24px;
  transition:all 300ms ease;
}

#hs_cos_wrapper_widget_1741706964201 .get_started-img { margin-right:-1px; }

#hs_cos_wrapper_widget_1741706964201 .get_started-rgt {
  flex:0 0 320px;
  max-width:320px;
  margin-right:-1px;
}

#hs_cos_wrapper_widget_1741706964201 .for_develop-rgt {
  flex:0 0 36%;
  max-width:36%;
  padding:0 16px;
}

#hs_cos_wrapper_widget_1741706964201 .for_develop-rgtinr {
  border-radius:8px;
  border:1px solid rgba(249,251,255,0.05);
  background:#121725;
  height:100%;
  padding:48px;
}

#hs_cos_wrapper_widget_1741706964201 .for_develop-title { margin-bottom:86px; }

#hs_cos_wrapper_widget_1741706964201 .for_develop-title h4 {
  color:#fff;
  font-size:26px;
  font-weight:500;
  line-height:34px;
}

#hs_cos_wrapper_widget_1741706964201 .for_develop-listing ul {
  margin:0;
  padding:0;
}

#hs_cos_wrapper_widget_1741706964201 .for_develop-listing ul li {
  list-style:none;
  margin-bottom:16px;
}

#hs_cos_wrapper_widget_1741706964201 .for_develop-listing ul li:last-child { margin-bottom:0px; }

#hs_cos_wrapper_widget_1741706964201 .for_develop-listing ul a:hover svg { margin-left:7px; }

#hs_cos_wrapper_widget_1741706964201 .for_develop-listing ul a {
  color:#FFF;
  font-weight:500;
  line-height:24px;
  text-decoration:none;
}

#hs_cos_wrapper_widget_1741706964201 .for_develop-listing ul a svg {
  vertical-align:middle;
  margin-left:5px;
  transition:all 300ms ease;
}

#hs_cos_wrapper_widget_1741706964201 .mobile_view { display:none; }

@media screen and (max-width:991px) {
  #hs_cos_wrapper_widget_1741706964201 .for_develop { padding:71px 0 27px; }

  #hs_cos_wrapper_widget_1741706964201 .for_develop-row { margin:0; }

  #hs_cos_wrapper_widget_1741706964201 .for_develop-lft {
    flex:0 0 100%;
    max-width:100%;
    padding:0 0 32px;
  }

  #hs_cos_wrapper_widget_1741706964201 .for_develop-rgt {
    flex:0 0 100%;
    max-width:100%;
    padding:0px;
  }

  #hs_cos_wrapper_widget_1741706964201 .for_develop-title { margin-bottom:93px; }

  #hs_cos_wrapper_widget_1741706964201 .for_develop-rgtinr { padding:48px 24px; }
}

@media screen and (max-width:639px) {
  #hs_cos_wrapper_widget_1741706964201 .for_develop { padding:61px 0 27px; }

  #hs_cos_wrapper_widget_1741706964201 .for_develop-lft {
    flex:0 0 100%;
    max-width:100%;
    padding:0 0 32px;
  }

  #hs_cos_wrapper_widget_1741706964201 .for_develop-lftinr { padding:0 6px 24px 12px; }

  #hs_cos_wrapper_widget_1741706964201 .get_started-row { flex-wrap:wrap; }

  #hs_cos_wrapper_widget_1741706964201 .get_started-lft {
    flex:0 0 100%;
    max-width:100%;
    padding:0 18px 0 12px;
  }

  #hs_cos_wrapper_widget_1741706964201 .get_started-content h4 {
    font-size:19px;
    line-height:27px;
    letter-spacing:-0.19px;
  }

  #hs_cos_wrapper_widget_1741706964201 .get_started-rgt {
    flex:0 0 100%;
    max-width:100%;
    margin-right:0;
    order:-1;
    margin-bottom:36px;
  }

  #hs_cos_wrapper_widget_1741706964201 .get_started-img {
    margin-right:0;
    padding:0 18px;
  }

  #hs_cos_wrapper_widget_1741706964201 .get_started-img img {
    width:100%;
    height:auto;
  }

  #hs_cos_wrapper_widget_1741706964201 .mobile_view { display:block; }

  #hs_cos_wrapper_widget_1741706964201 .desktop_view { display:none; }
}

</style>


<style type="text/css">
  #hs_cos_wrapper_module_171560324903472 .main_footer { padding:44px 0 35px; }

#hs_cos_wrapper_module_171560324903472 .main_ftr-top {
  display:flex;
  flex-wrap:wrap;
  margin-bottom:58px;
}

#hs_cos_wrapper_module_171560324903472 .main_ftr-lft {
  flex:0 0 18%;
  max-width:18%;
  padding-right:20px;
}

#hs_cos_wrapper_module_171560324903472 .main_ftr-logo {
  margin-bottom:33px;
  position:relative;
}

#hs_cos_wrapper_module_171560324903472 a.ftr_logo-link {
  position:absolute;
  left:0;
  top:0;
  right:0;
  bottom:0;
}

#hs_cos_wrapper_module_171560324903472 .main_ftr-social-links ul {
  margin:0;
  padding:0;
  list-style:none;
  display:flex;
  flex-wrap:wrap;
  align-items:center;
}

#hs_cos_wrapper_module_171560324903472 .main_ftr-social-links ul li {
  margin-right:17px;
  margin-bottom:15px;
}

#hs_cos_wrapper_module_171560324903472 .main_ftr-social-links ul li:last-child { margin-right:0; }

#hs_cos_wrapper_module_171560324903472 .main_ftr-rgt {
  flex:0 0 82%;
  max-width:82%;
  display:flex;
  justify-content:space-between;
}

#hs_cos_wrapper_module_171560324903472 .main_ftr-col {
  margin-bottom:30px;
  padding:0 10px;
}

#hs_cos_wrapper_module_171560324903472 .main_ftr-title { margin-bottom:13px; }

#hs_cos_wrapper_module_171560324903472 .main_ftr-title h6 {
  color:#F9FBFF;
  font-family:Poppins;
  font-size:16px;
  font-style:normal;
  font-weight:500;
  line-height:27px;
}

#hs_cos_wrapper_module_171560324903472 .main_ftr-menu ul { display:block; }

#hs_cos_wrapper_module_171560324903472 .main_ftr-menu li.hs-menu-item { margin-bottom:8px; }

#hs_cos_wrapper_module_171560324903472 .main_ftr-menu li.hs-menu-item:last-child { margin-bottom:0px; }

#hs_cos_wrapper_module_171560324903472 .main_ftr-menu li.hs-menu-item a:hover { color:#B1B9D2; }

#hs_cos_wrapper_module_171560324903472 .main_ftr-menu li.hs-menu-item a {
  color:#7C86A1;
  line-height:24px;
  text-decoration:none;
  transition:all 300ms ease;
}

#hs_cos_wrapper_module_171560324903472 .main_ftr-btm {
  border-top:1px solid #424B66;
  display:flex;
  justify-content:space-between;
  align-items:center;
}

#hs_cos_wrapper_module_171560324903472 .main_ftr-copyright { padding-top:16px; }

#hs_cos_wrapper_module_171560324903472 .main_ftr-copyright p {
  color:#7C86A1;
  font-size:12px;
  line-height:20px;
  margin:0;
}

#hs_cos_wrapper_module_171560324903472 .main_ftr-plinks { padding-top:16px; }

#hs_cos_wrapper_module_171560324903472 .main_ftr-plinks li.hs-menu-item { padding-left:24px; }

#hs_cos_wrapper_module_171560324903472 .main_ftr-plinks li.hs-menu-item a:hover { color:#B1B9D2; }

#hs_cos_wrapper_module_171560324903472 .main_ftr-plinks li.hs-menu-item a {
  color:#7C86A1;
  font-size:12px;
  line-height:20px;
  text-decoration:none;
  transition:all 300ms ease;
}

#hs_cos_wrapper_module_171560324903472 .main_ftr-plinks li.hs-menu-item:first-child { padding-left:0; }

#hs_cos_wrapper_module_171560324903472 .main_ftr-social-links.tab-view { display:none; }

@media screen and (max-width:991px) {
  #hs_cos_wrapper_module_171560324903472 .main_ftr-lft {
    flex:0 0 100%;
    max-width:100%;
    padding-right:0;
    margin-bottom:40px;
  }

  #hs_cos_wrapper_module_171560324903472 .main_ftr-rgt {
    flex:0 0 100%;
    max-width:100%;
  }

  #hs_cos_wrapper_module_171560324903472 .main_ftr-social-links { display:none; }

  #hs_cos_wrapper_module_171560324903472 .main_ftr-logo { margin-bottom:0; }

  #hs_cos_wrapper_module_171560324903472 .main_ftr-social-links.tab-view {
    display:block;
    margin-bottom:25px;
  }
}

@media screen and (max-width:767px) {
  #hs_cos_wrapper_module_171560324903472 .main_ftr-rgt {
    flex-wrap:wrap;
    justify-content:flex-start;
  }

  #hs_cos_wrapper_module_171560324903472 .main_ftr-col {
    padding:0 20px 0 0;
    flex:0 0 33%;
    max-width:33%;
    margin-bottom:24px;
  }

  #hs_cos_wrapper_module_171560324903472 .main_ftr-copyright { width:100%; }

  #hs_cos_wrapper_module_171560324903472 .main_ftr-btm { flex-wrap:wrap; }

  #hs_cos_wrapper_module_171560324903472 .main_ftr-plinks { width:100%; }

  #hs_cos_wrapper_module_171560324903472 .main_ftr-plinks ul { flex-direction:row; }

  #hs_cos_wrapper_module_171560324903472 .main_ftr-top { margin-bottom:16px; }

  #hs_cos_wrapper_module_171560324903472 .main_ftr-title h6 {
    font-size:14px;
    line-height:24px;
    margin-bottom:15px;
  }

  #hs_cos_wrapper_module_171560324903472 .main_ftr-menu li.hs-menu-item a {
    line-height:20px;
    font-size:12px;
  }

  #hs_cos_wrapper_module_171560324903472 .main_ftr-plinks li.hs-menu-item {
    padding-left:0;
    padding-right:24px;
  }

  #hs_cos_wrapper_module_171560324903472 .main_ftr-plinks li.hs-menu-item:last-child { padding-right:0; }
}

@media screen and (max-width:639px) {
  #hs_cos_wrapper_module_171560324903472 .main_ftr-col {
    padding:0 10px 0 0;
    flex:0 0 50%;
    max-width:50%;
  }
}

</style>

<style>
  @font-face {
    font-family: "Poppins";
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: url("/_hcms/googlefonts/Poppins/regular.woff2") format("woff2"), url("/_hcms/googlefonts/Poppins/regular.woff") format("woff");
  }
</style>

<!-- Editor Styles -->
<style id="hs_editor_style" type="text/css">
.dnd_area-row-0-force-full-width-section > .row-fluid {
  max-width: none !important;
}
.dnd_area-row-1-force-full-width-section > .row-fluid {
  max-width: none !important;
}
.dnd_area-row-2-force-full-width-section > .row-fluid {
  max-width: none !important;
}
.dnd_area-row-3-force-full-width-section > .row-fluid {
  max-width: none !important;
}
.dnd_area-row-4-force-full-width-section > .row-fluid {
  max-width: none !important;
}
.dnd_area-row-5-force-full-width-section > .row-fluid {
  max-width: none !important;
}
.dnd_area-row-6-force-full-width-section > .row-fluid {
  max-width: none !important;
}
.dnd_area-row-7-force-full-width-section > .row-fluid {
  max-width: none !important;
}
/* HubSpot Non-stacked Media Query Styles */
@media (min-width:768px) {
  .dnd_area-row-1-vertical-alignment > .row-fluid {
    display: -ms-flexbox !important;
    -ms-flex-direction: row;
    display: flex !important;
    flex-direction: row;
  }
  .dnd_area-row-3-vertical-alignment > .row-fluid {
    display: -ms-flexbox !important;
    -ms-flex-direction: row;
    display: flex !important;
    flex-direction: row;
  }
  .dnd_area-column-3-vertical-alignment {
    display: -ms-flexbox !important;
    -ms-flex-direction: column !important;
    -ms-flex-pack: center !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
  }
  .dnd_area-column-3-vertical-alignment > div {
    flex-shrink: 0 !important;
  }
  .dnd_area-column-9-vertical-alignment {
    display: -ms-flexbox !important;
    -ms-flex-direction: column !important;
    -ms-flex-pack: center !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
  }
  .dnd_area-column-9-vertical-alignment > div {
    flex-shrink: 0 !important;
  }
}
/* HubSpot Styles (default) */
.dnd_area-row-0-padding {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.dnd_area-row-1-padding {
  padding-top: 0px !important;
  padding-bottom: 21px !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.dnd_area-row-2-padding {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.dnd_area-row-3-padding {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.dnd_area-row-4-padding {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.dnd_area-row-5-padding {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.dnd_area-row-6-padding {
  padding-top: 16px !important;
  padding-bottom: 16px !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.dnd_area-row-7-padding {
  padding-top: 16px !important;
  padding-bottom: 0px !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.cell_17416083491962-padding {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.dnd_area-column-3-padding {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.dnd_area-column-3-row-0-padding {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.cell_17416798866282-padding {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.dnd_area-column-9-padding {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.dnd_area-column-9-row-0-padding {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.cell_17417011104822-padding {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.cell_17417066952042-padding {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.module_17417066005924-hidden {
  display: none !important;
}
.cell_17417067756572-padding {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.cell_17417069646492-padding {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
/* HubSpot Styles (mobile) */
@media (max-width: 767px) {
  .dnd_area-row-1-padding {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .dnd_area-row-3-padding {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .dnd_area-row-6-padding {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
  }
  .dnd_area-row-7-padding {
    padding-top: 0px !important;
  }
  .dnd_area-column-3-padding {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .dnd_area-column-3-row-0-padding {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .dnd_area-column-9-padding {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .dnd_area-column-9-row-0-padding {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
}
</style>
    

    
    <link rel="canonical" href="https://www.clarifai.com">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet" type="text/css" media="none" onload="if(media!='all')media='all'">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&amp;family=Nunito:ital,wght@0,200..1000;1,200..1000&amp;family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap" rel="stylesheet">

<link rel="stylesheet" href="https://www.clarifai.com/hubfs/switzer-font/switzer-font.css"> 
<link rel="dns-prefetch" href="//cdn2.hubspot.net" crossorigin="">
<link rel="preconnect" href="//cdn2.hubspot.net" crossorigin="">
<link rel="dns-prefetch" href="//f.hubspotusercontent20.net" crossorigin="">
<link rel="preconnect" href="//f.hubspotusercontent20.net" crossorigin="">
<link rel="preconnect" href="//no-cache.hubspot.com" crossorigin="">
<link rel="dns-prefetch" href="//track.hubspot.com" crossorigin="">
<link rel="dns-prefetch" href="//cdnjs.cloudflare.com" crossorigin="">

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-PLV65FL');</script>
<!-- End Google Tag Manager -->

<!-- <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script> -->

<!-- <meta name="google-site-verification" content="CM08cmZ7mMAuH25_6d7PEncojnMgtV7hUpsNmq3ozuU" /> -->

<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.1/styles/railscasts.min.css" type="text/css" media="none" onload="if(media!='all')media='all'">
<noscript><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.1/styles/railscasts.min.css"></noscript>
<!-- Lazyload HTW -->
<script>!function(e){var t=function(u,D,f){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=u.lazySizesConfig||u.lazysizesConfig||{};for(e in t){if(!(e in H)){H[e]=t[e]}}}(),!D||!D.getElementsByClassName){return{init:function(){},cfg:H,noSupport:true}}var O=D.documentElement,i=u.HTMLPictureElement,P="addEventListener",$="getAttribute",q=u[P].bind(u),I=u.setTimeout,U=u.requestAnimationFrame||I,o=u.requestIdleCallback,j=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],a={},G=Array.prototype.forEach,J=function(e,t){if(!a[t]){a[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return a[t].test(e[$]("class")||"")&&a[t]},K=function(e,t){if(!J(e,t)){e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)}},Q=function(e,t){var a;if(a=J(e,t)){e.setAttribute("class",(e[$]("class")||"").replace(a," "))}},V=function(t,a,e){var i=e?P:"removeEventListener";if(e){V(t,a)}r.forEach(function(e){t[i](e,a)})},X=function(e,t,a,i,r){var n=D.createEvent("Event");if(!a){a={}}a.instance=k;n.initEvent(t,!i,!r);n.detail=a;e.dispatchEvent(n);return n},Y=function(e,t){var a;if(!i&&(a=u.picturefill||H.pf)){if(t&&t.src&&!e[$]("srcset")){e.setAttribute("srcset",t.src)}a({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},s=function(e,t,a){a=a||e.offsetWidth;while(a<H.minSize&&t&&!e._lazysizesWidth){a=t.offsetWidth;t=t.parentNode}return a},ee=function(){var a,i;var t=[];var r=[];var n=t;var s=function(){var e=n;n=t.length?r:t;a=true;i=false;while(e.length){e.shift()()}a=false};var e=function(e,t){if(a&&!t){e.apply(this,arguments)}else{n.push(e);if(!i){i=true;(D.hidden?I:U)(s)}}};e._lsFlush=s;return e}(),te=function(a,e){return e?function(){ee(a)}:function(){var e=this;var t=arguments;ee(function(){a.apply(e,t)})}},ae=function(e){var a;var i=0;var r=H.throttleDelay;var n=H.ricTimeout;var t=function(){a=false;i=f.now();e()};var s=o&&n>49?function(){o(t,{timeout:n});if(n!==H.ricTimeout){n=H.ricTimeout}}:te(function(){I(t)},true);return function(e){var t;if(e=e===true){n=33}if(a){return}a=true;t=r-(f.now()-i);if(t<0){t=0}if(e||t<9){s()}else{I(s,t)}}},ie=function(e){var t,a;var i=99;var r=function(){t=null;e()};var n=function(){var e=f.now()-a;if(e<i){I(n,i-e)}else{(o||r)(r)}};return function(){a=f.now();if(!t){t=I(n,i)}}},e=function(){var v,m,c,h,e;var y,z,g,p,C,b,A;var n=/^img$/i;var d=/^iframe$/i;var E="onscroll"in u&&!/(gle|ing)bot/.test(navigator.userAgent);var _=0;var w=0;var M=0;var N=-1;var L=function(e){M--;if(!e||M<0||!e.target){M=0}};var x=function(e){if(A==null){A=Z(D.body,"visibility")=="hidden"}return A||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden")};var W=function(e,t){var a;var i=e;var r=x(e);g-=t;b+=t;p-=t;C+=t;while(r&&(i=i.offsetParent)&&i!=D.body&&i!=O){r=(Z(i,"opacity")||1)>0;if(r&&Z(i,"overflow")!="visible"){a=i.getBoundingClientRect();r=C>a.left&&p<a.right&&b>a.top-1&&g<a.bottom+1}}return r};var t=function(){var e,t,a,i,r,n,s,o,l,u,f,c;var d=k.elements;if((h=H.loadMode)&&M<8&&(e=d.length)){t=0;N++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!E||k.prematureUnveil&&k.prematureUnveil(d[t])){R(d[t]);continue}if(!(o=d[t][$]("data-expand"))||!(n=o*1)){n=w}if(!u){u=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand;k._defEx=u;f=u*H.expFactor;c=H.hFac;A=null;if(w<f&&M<1&&N>2&&h>2&&!D.hidden){w=f;N=0}else if(h>1&&N>1&&M<6){w=u}else{w=_}}if(l!==n){y=innerWidth+n*c;z=innerHeight+n;s=n*-1;l=n}a=d[t].getBoundingClientRect();if((b=a.bottom)>=s&&(g=a.top)<=z&&(C=a.right)>=s*c&&(p=a.left)<=y&&(b||C||p||g)&&(H.loadHidden||x(d[t]))&&(m&&M<3&&!o&&(h<3||N<4)||W(d[t],n))){R(d[t]);r=true;if(M>9){break}}else if(!r&&m&&!i&&M<4&&N<4&&h>2&&(v[0]||H.preloadAfterLoad)&&(v[0]||!o&&(b||C||p||g||d[t][$](H.sizesAttr)!="auto"))){i=v[0]||d[t]}}if(i&&!r){R(i)}}};var a=ae(t);var S=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}L(e);K(t,H.loadedClass);Q(t,H.loadingClass);V(t,B);X(t,"lazyloaded")};var i=te(S);var B=function(e){i({target:e.target})};var T=function(e,t){var a=e.getAttribute("data-load-mode")||H.iframeLoadMode;if(a==0){e.contentWindow.location.replace(t)}else if(a==1){e.src=t}};var F=function(e){var t;var a=e[$](H.srcsetAttr);if(t=H.customMedia[e[$]("data-media")||e[$]("media")]){e.setAttribute("media",t)}if(a){e.setAttribute("srcset",a)}};var s=te(function(t,e,a,i,r){var n,s,o,l,u,f;if(!(u=X(t,"lazybeforeunveil",e)).defaultPrevented){if(i){if(a){K(t,H.autosizesClass)}else{t.setAttribute("sizes",i)}}s=t[$](H.srcsetAttr);n=t[$](H.srcAttr);if(r){o=t.parentNode;l=o&&j.test(o.nodeName||"")}f=e.firesLoad||"src"in t&&(s||n||l);u={target:t};K(t,H.loadingClass);if(f){clearTimeout(c);c=I(L,2500);V(t,B,true)}if(l){G.call(o.getElementsByTagName("source"),F)}if(s){t.setAttribute("srcset",s)}else if(n&&!l){if(d.test(t.nodeName)){T(t,n)}else{t.src=n}}if(r&&(s||l)){Y(t,{src:n})}}if(t._lazyRace){delete t._lazyRace}Q(t,H.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!f||e){if(e){K(t,H.fastLoadedClass)}S(u);t._lazyCache=true;I(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){M--}},true)});var R=function(e){if(e._lazyRace){return}var t;var a=n.test(e.nodeName);var i=a&&(e[$](H.sizesAttr)||e[$]("sizes"));var r=i=="auto";if((r||!m)&&a&&(e[$]("src")||e.srcset)&&!e.complete&&!J(e,H.errorClass)&&J(e,H.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(r){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;M++;s(e,t,r,i,a)};var r=ie(function(){H.loadMode=3;a()});var o=function(){if(H.loadMode==3){H.loadMode=2}r()};var l=function(){if(m){return}if(f.now()-e<999){I(l,999);return}m=true;H.loadMode=3;a();q("scroll",o,true)};return{_:function(){e=f.now();k.elements=D.getElementsByClassName(H.lazyClass);v=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass);q("scroll",a,true);q("resize",a,true);q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);if(t.length&&t.forEach){U(function(){t.forEach(function(e){if(e.complete){R(e)}})})}}});if(u.MutationObserver){new MutationObserver(a).observe(O,{childList:true,subtree:true,attributes:true})}else{O[P]("DOMNodeInserted",a,true);O[P]("DOMAttrModified",a,true);setInterval(a,999)}q("hashchange",a,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,a,true)});if(/d$|^c/.test(D.readyState)){l()}else{q("load",l);D[P]("DOMContentLoaded",a);I(l,2e4)}if(k.elements.length){t();ee._lsFlush()}else{a()}},checkElems:a,unveil:R,_aLSL:o}}(),re=function(){var a;var n=te(function(e,t,a,i){var r,n,s;e._lazysizesWidth=i;i+="px";e.setAttribute("sizes",i);if(j.test(t.nodeName||"")){r=t.getElementsByTagName("source");for(n=0,s=r.length;n<s;n++){r[n].setAttribute("sizes",i)}}if(!a.detail.dataAttr){Y(e,a.detail)}});var i=function(e,t,a){var i;var r=e.parentNode;if(r){a=s(e,r,a);i=X(e,"lazybeforesizes",{width:a,dataAttr:!!t});if(!i.defaultPrevented){a=i.detail.width;if(a&&a!==e._lazysizesWidth){n(e,r,i,a)}}}};var e=function(){var e;var t=a.length;if(t){e=0;for(;e<t;e++){i(a[e])}}};var t=ie(e);return{_:function(){a=D.getElementsByClassName(H.autosizesClass);q("resize",t)},checkElems:t,updateElem:i}}(),t=function(){if(!t.i&&D.getElementsByClassName){t.i=true;re._();e._()}};return I(function(){H.init&&t()}),k={cfg:H,autoSizer:re,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:s,rAF:ee}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});!function(e,t){var a=function(){t(e.lazySizes),e.removeEventListener("lazyunveilread",a,!0)};t=t.bind(null,e,e.document),"object"==typeof module&&module.exports?t(require("lazysizes")):"function"==typeof define&&define.amd?define(["lazysizes"],t):e.lazySizes?a():e.addEventListener("lazyunveilread",a,!0)}(window,function(e,t,a){"use strict";var n,r,i={};function o(e,a,n){if(!i[e]){var r=t.createElement(a?"link":"script"),o=t.getElementsByTagName("script")[0];a?(r.rel="stylesheet",r.href=e):(r.onload=function(){r.onerror=null,r.onload=null,n()},r.onerror=r.onload,r.src=e),i[e]=!0,i[r.src||r.href]=!0,o.parentNode.insertBefore(r,o)}}t.addEventListener&&(r=/\(|\)|\s|'/,n=function(e,a){var n=t.createElement("img");n.onload=function(){n.onload=null,n.onerror=null,n=null,a()},n.onerror=n.onload,n.src=e,n&&n.complete&&n.onload&&n.onload()},addEventListener("lazybeforeunveil",function(e){var t,i,l;if(e.detail.instance==a&&!e.defaultPrevented){var d=e.target;if("none"==d.preload&&(d.preload=d.getAttribute("data-preload")||"auto"),null!=d.getAttribute("data-autoplay"))if(d.getAttribute("data-expand")&&!d.autoplay)try{d.play()}catch(e){}else requestAnimationFrame(function(){d.setAttribute("data-expand","-10"),a.aC(d,a.cfg.lazyClass)});(t=d.getAttribute("data-link"))&&o(t,!0),(t=d.getAttribute("data-script"))&&(e.detail.firesLoad=!0,o(t,null,function(){e.detail.firesLoad=!1,a.fire(d,"_lazyloaded",{},!0,!0)})),(t=d.getAttribute("data-require"))&&(a.cfg.requireJs?a.cfg.requireJs([t]):o(t)),(i=d.getAttribute("data-bg"))&&(e.detail.firesLoad=!0,n(i,function(){d.style.backgroundImage="url("+(r.test(i)?JSON.stringify(i):i)+")",e.detail.firesLoad=!1,a.fire(d,"_lazyloaded",{},!0,!0)})),(l=d.getAttribute("data-poster"))&&(e.detail.firesLoad=!0,n(l,function(){d.poster=l,e.detail.firesLoad=!1,a.fire(d,"_lazyloaded",{},!0,!0)}))}},!1))});</script>
<!-- Lazyload -->
<script type="application/ld+json">
{
  "@context": "http://www.schema.org",
  "@type": "Organization",
  "name": " Clarifai | The World's AI Company ",
  "url": "https://www.clarifai.com/",
  "sameAs": [
    "https://twitter.com/clarifai",
    "https://www.linkedin.com/company/clarifai",
    "https://www.youtube.com/channel/UCGmfV4cQHwk6qCnLEYfgzIA",
    "https://www.facebook.com/Clarifai",
    "https://www.instagram.com/clarifai/"
  ],
  "logo": "https://www.clarifai.com/hs-fs/hubfs/logo/Clarifai/clarifai-740x150.png?width=120&name=clarifai-740x150.png",
  "description": "Clarifai is the leading deep learning AI lifecycle platform for computer vision, natural language processing and automatic speech recognition. We help commercial and public sector organizations transform unstructured images, video and text data into structured data, significantly faster and more accurately than humans would be able to do on their own. Our seamlessly integrated platform allow you to label, train and deploy AI models in one integrated tool. It comes with the broadest repository of pre-trained, out-of-the-box AI models built with millions of inputs and context. Our models give you a head start; extending your own custom AI models. Founded in 2013 by Matt Zeiler, Ph.D., Clarifai has been recognized by leading industry analysts, Forrester and Gartner, and has been a market leader in AI since winning the top five places in image classification at the 2013 ImageNet Challenge. ",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2801 Centerville Road",
    "addressLocality": "Wilmington",
    "addressRegion": "DE",
    "postalCode": "19808",
    "addressCountry": "USA"
  },
"contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "1 866 464 7326",
      "contactType": "sales",
      "email": "marketing-team@clarifai.com",
      "areaServed": "US"
    }
  ]
}
</script>

<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://www.clarifai.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.clarifai.com/search?q={Home}"
        },
        "query-input": "required name=Home"
      }
    }
</script>






<script type="application/ld+json">{
	    "@context":"http:\/\/schema.org",
	    "@type":"BreadcrumbList",
	    "itemListElement":[ {
	        "@type":"ListItem",
	        "position":1,
	        "item": {
	            "@id": "https://www.clarifai.com",
	            "name": "Home"
	        }
	    }
	    ]
	}</script>

<meta property="og:image" content="https://www.clarifai.com/hubfs/clarifai-featured.png">
<meta property="og:image:width" content="1227">
<meta property="og:image:height" content="610">

<meta name="twitter:image" content="https://www.clarifai.com/hubfs/clarifai-featured.png">


<meta property="og:url" content="https://www.clarifai.com">
<meta name="twitter:card" content="summary_large_image">
<meta http-equiv="content-language" content="en">





<style>

  div#hs_cos_wrapper_module_171541055839529 {
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 9999;
  }
  .main-header {
    top: 39px;
  }

  @media screen and (max-width: 1199px) {
    .main-header {
      top: 0;
    }
  }

</style>
  <meta name="generator" content="HubSpot"></head>
  <body>
    <div class="body-wrapper   hs-content-id-167227799209 hs-site-page page ">
      

      <div id="hs_cos_wrapper_module_171541055839529" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" style="" data-hs-cos-general-type="widget" data-hs-cos-type="module">
<div class="top_rail-main">
  <div class="top_rail">
    <div class="content_wrapper">
      <div class="top_rail-row">
        <div class="top_rail-lft">
          <div class="top_rail-badge">
            🔥 Just Launched 
          </div>
          <div class="top_rail-text">
            Introducing the AI Playground — Your LLM Battleground to Test Powerful AI Models!
          </div>
          <div class="top_rail-link">
            
            
            <a href="https://clarifai.com/playground?model=Qwen2_5-VL-7B-Instruct" target="_blank" rel="noopener">
              Try now
            </a>
          </div>
        </div>
        <div class="top_rail-rgt">
          <div class="top_rail-chat">
            <div class="top_rail-chat_icon">
              
              
              
              
              
              
              <img src="https://www.clarifai.com/hubfs/Chat%20with%20sales.svg" alt="Contact us" loading="lazy" width="16" height="16" style="max-width: 100%; height: auto;">
              
            </div>
            <div class="top_rail-chat_text">
              
              
              <a href="https://www.clarifai.com/explore/contact-us">
                Contact us
              </a>
            </div>
          </div>
          <div class="top_rail-discord">
            <div class="top_rail-discord_icon">
              
              
              
              
              
              
              <img src="https://www.clarifai.com/hubfs/Join%20the%20Discord.svg" alt="Join the Discord" loading="lazy" width="16" height="16" style="max-width: 100%; height: auto;">
              
            </div>
            <div class="top_rail-discord_text">
              
              
              <a href="https://discord.com/invite/WgUvPK4pVD" target="_blank" rel="noopener">
                Join the Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



</div>
      <div class="main-header">
        <div data-global-resource-path="Clarifai_2024/templates/partials/header.html"><header class="header">

  <div id="hs_cos_wrapper_module_171594037400218" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" style="" data-hs-cos-general-type="widget" data-hs-cos-type="module"><!-- Include jQuery.mmenu .css files -->
<link type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/5.7.3/css/jquery.mmenu.all.css" rel="stylesheet">

<!-- Include jQuery and the jQuery.mmenu .js files -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/5.7.3/js/jquery.mmenu.all.min.js"></script>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/5.7.3/addons/navbars/jquery.mmenu.navbars.min.js"></script>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/5.7.3/wrappers/bootstrap/jquery.mmenu.bootstrap.min.js"></script>


<link type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/5.7.3/addons/navbars/jquery.mmenu.navbars.min.css" rel="stylesheet">
<link type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/5.7.3/css/jquery.mmenu.all.css" rel="stylesheet">
<link type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/5.7.3/css/jquery.mmenu.css" rel="stylesheet">  

<div class="main_menu">
  <div class="content_wrapper">
    <div class="main_menu-row">
      <div class="main_menu-logo">

        
        
        <a class="menu_logo-link" href="https://www.clarifai.com/">
        </a>

        

        <span id="hs_cos_wrapper_module_171594037400218_" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_logo" style="" data-hs-cos-general-type="widget" data-hs-cos-type="logo"><a href="https://www.clarifai.com/" id="hs-link-module_171594037400218_" style="border-width:0px;border:0px;"><img src="https://www.clarifai.com/hubfs/clarifai-logo-new.svg" class="hs-image-widget " height="25" style="height: auto;width:112px;border-width:0px;border:0px;" width="112" alt="clarifai-logo-new" title="clarifai-logo-new" loading="lazy"></a></span>

      </div>

      <div class="main_navigation desktop--menu">
        <div class="main_menu-nav">
          <nav class="menu menu--desktop header__menu--desktop" aria-label="Main menu">
            <ul>
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              <li class="nav-item">
                
                
                
                
                
                <a href="https://www.clarifai.com/why">
                  <span>Why</span></a>
              </li>
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              <li class="nav-item more">
                
                
                
                
                
                <a href="https://www.clarifai.com/products/platform">
                  <span>Platform</span>
                </a>
                <ul class="submenu submenu4 callout3 platform">
                  
                  <li class="li25 ">

                    
                    
                    <h4>Deploy</h4>  
                    
                    
                    
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/products/compute-orchestration">
                      

                      <div class="menu_title "><div class="title--text">Compute Orchestration</div> <span class="menu_badge">New</span>
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/products/flare-edge-ai-computing">
                      

                      <div class="menu_title "><div class="title--text">Edge AI</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    <h4>Data lifecycle</h4>  
                    
                    
                    
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/products/scribe-data-labeling-platform?__hstc=45788219.784daf187a6aa33c60eac9c343b2566e.1732575568560.1733415366032.1739377860844.3&amp;__hssc=45788219.1.1739377860844&amp;__hsfp=3414075492">
                      

                      <div class="menu_title "><div class="title--text">Automated Data Labeling</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/products/spacetime-ai-search-engine">
                      

                      <div class="menu_title "><div class="title--text">Data Management and Search</div> 
                        
                      </div>
                      
                    </a> 
                    
                    

                    
                  </li>
                  
                  <li class="li25 ">

                    
                    
                    <h4>Model Lifecycle</h4>  
                    
                    
                    
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/products/armada-ml-prediction">
                      

                      <div class="menu_title "><div class="title--text">Model Inference</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/products/enlight-model-training">
                      

                      <div class="menu_title "><div class="title--text">Model Training</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/products/mesh-workflows">
                      

                      <div class="menu_title "><div class="title--text">AI Workflows</div> 
                        
                      </div>
                      
                    </a> 
                    
                    

                    
                  </li>
                  
                  <li class="li25 ">

                    
                    
                    <h4>Governance &amp; Control</h4>  
                    
                    
                    
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/products/control-center">
                      

                      <div class="menu_title "><div class="title--text">Control Center</div> <span class="menu_badge">New</span>
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/products/ai-lake">
                      

                      <div class="menu_title "><div class="title--text">AI Lake</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/products/modules">
                      

                      <div class="menu_title "><div class="title--text">UI Modules</div> 
                        
                      </div>
                      
                    </a> 
                    
                    

                    
                  </li>
                  
                  <li class="li25 menu-callout">

                    
                    
                    
                    <div class="submenu-callout">
                      
                      
                      <a class="callout_link" href="https://www.clarifai.com/products/platform">
                      </a>
                      
                      
                      
                      
                      
                      <img data-src="https://www.clarifai.com/hubfs/platform-overview-image.svg" class="lozad ebook-thumbnail" alt="platform-overview-image" loading="" width="311" height="159">
                      
                      
                      <h6><span style="color: #04afff;">Platform overview</span></h6>
<h5>Learn more about Clarifai's AI Lifecycle Platform</h5>
                      
                    </div>
                    
                    
                    
                    

                    
                  </li>
                  
                </ul> 
              </li>
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              <li class="nav-item more">
                
                
                
                
                
                <a href="">
                  <span>Solutions</span>
                </a>
                <ul class="submenu submenu3 callout3 solutions">
                  
                  <li class="li33 ">

                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/computer-vision">
                      

                      <div class="menu_title "><div class="title--text">Computer Vision</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/solutions/operationalize-ai">
                      

                      <div class="menu_title "><div class="title--text">Operationalizing AI</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/solutions/retreival-augmented-generation">
                      

                      <div class="menu_title "><div class="title--text">Retrieval Augmented Generation (RAG)</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/solutions/generative-ai">
                      

                      <div class="menu_title "><div class="title--text">Generative AI</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/accelerate-ai-with-clarifais-new-ai-sprints">
                      

                      <div class="menu_title "><div class="title--text">AI Sprints</div> <span class="menu_badge">New</span>
                        
                      </div>
                      
                    </a> 
                    
                    

                    
                  </li>
                  
                  <li class="li33 ">

                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/solutions/visual-inspection">
                      

                      <div class="menu_title "><div class="title--text">Visual Inspection</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/solutions/digital-asset-management">
                      

                      <div class="menu_title "><div class="title--text">Digital Asset Management</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/solutions/content-moderation">
                      

                      <div class="menu_title "><div class="title--text">Content Moderation</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/government">
                      

                      <div class="menu_title "><div class="title--text">Government</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/solutions/overview">
                      

                      <div class="menu_title "><div class="title--text"><span style="color: #04AFFF">Solutions by Industries</span></div> 
                        
                      </div>
                      
                    </a> 
                    
                    

                    
                  </li>
                  
                  <li class="li33 menu-callout">

                    
                    
                    
                    <div class="submenu-callout">
                      
                      
                      <a class="callout_link" href="https://www.clarifai.com/webinar-founders-ama-maximize-the-value-of-your-ai-investments">
                      </a>
                      
                      
                      
                      
                      
                      
                      
                      <img data-src="https://www.clarifai.com/hubfs/Nav%20bar-Jan-16-2025-06-14-18-4775-PM.png" class="lozad ebook-thumbnail" alt="Founder's AMA: Maximize the value of your AI investments" loading="" width="467" height="239" style="max-width: 100%; height: auto;">
                      
                      
                      <h6><span style="color: #04afff;">ON-Demand WEBINAR</span></h6>
<h5>Founder's AMA: Maximize the value of your AI investments</h5>
                      
                    </div>
                    
                    
                    
                    

                    
                  </li>
                  
                </ul> 
              </li>
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              <li class="nav-item more">
                
                
                
                
                
                <a href="">
                  <span>Company</span>
                </a>
                <ul class="submenu submenu3 callout3 company">
                  
                  <li class="li33 ">

                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/company/about">
                      

                      <div class="menu_title "><div class="title--text">About</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/blog">
                      

                      <div class="menu_title "><div class="title--text">Blog</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink   menu_icon-right" href="https://www.clarifai.com/company/careers">
                      

                      <div class="menu_title "><div class="title--text">Careers</div> 
                        
                      </div>
                      
                      
                      
                      
                      
                      
                      <img data-src="https://www.clarifai.com/hubfs/career-icon.svg" class="icon-right lozad" alt="career-icon" loading="" width="24" height="24" style="max-width: 100%; height: auto;">
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/company/press">
                      

                      <div class="menu_title "><div class="title--text">Press</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/company/events">
                      

                      <div class="menu_title "><div class="title--text">Events</div> 
                        
                      </div>
                      
                    </a> 
                    
                    

                    
                  </li>
                  
                  <li class="li33 ">

                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/company/customers">
                      

                      <div class="menu_title "><div class="title--text">Customers</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/company/partners">
                      

                      <div class="menu_title "><div class="title--text">Partners</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/company/awards">
                      

                      <div class="menu_title "><div class="title--text">Awards</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/explore/contact-us">
                      

                      <div class="menu_title "><div class="title--text"><span style="color: #04AFFF">Contact us</span></div> 
                        
                      </div>
                      
                    </a> 
                    
                    

                    
                  </li>
                  
                  <li class="li33 menu-callout">

                    
                    
                    
                    <div class="submenu-callout">
                      
                      
                      <a class="callout_link" href="https://www.clarifai.com/products/compute-orchestration">
                      </a>
                      
                      
                      
                      
                      
                      
                      
                      <img data-src="https://www.clarifai.com/hubfs/1Hero%20CO.svg.svg" class="lozad ebook-thumbnail" alt="1Hero CO.svg" loading="" width="1062" height="650" style="max-width: 100%; height: auto;">
                      
                      
                      <h6>AI Compute Orchestration</h6>
<h5>Create and control your AI workloads on any compute infrastructure</h5>
                      
                    </div>
                    
                    
                    
                    

                    
                  </li>
                  
                </ul> 
              </li>
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              <li class="nav-item more">
                
                
                
                
                
                <a href="">
                  <span>Developers</span>
                </a>
                <ul class="submenu submenu1  developers">
                  
                  <li class="li100 ">

                    
                    
                    
                    
                    <a class="menulink  " target="_blank" rel="noopener noreferrer" href="https://www.clarifai.com/developers">
                      

                      <div class="menu_title "><div class="title--text">Overview</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " target="_blank" rel="noopener noreferrer" href="http://clarifai.com/explore">
                      

                      <div class="menu_title "><div class="title--text">Explore Community</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " target="_blank" rel="noopener noreferrer" href="https://docs.clarifai.com/">
                      

                      <div class="menu_title "><div class="title--text">Docs</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/company/resources">
                      

                      <div class="menu_title "><div class="title--text">Resource Library</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink   menu_icon-right" target="_blank" rel="noopener noreferrer" href="https://discord.com/invite/WgUvPK4pVD">
                      

                      <div class="menu_title "><div class="title--text">Discord</div> 
                        
                      </div>
                      
                      
                      
                      
                      
                      
                      <img data-src="https://www.clarifai.com/hubfs/Discord.svg" class="icon-right lozad" alt="Discord" loading="" width="18" height="14" style="max-width: 100%; height: auto;">
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " target="_blank" rel="noopener noreferrer" href="http://www.youtube.com/@theworldsai">
                      

                      <div class="menu_title "><div class="title--text">YouTube</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " target="_blank" rel="noopener noreferrer" href="mailto:support@clarifai.com">
                      

                      <div class="menu_title "><div class="title--text"><span style="color: #04AFFF">Support</span></div> 
                        
                      </div>
                      
                    </a> 
                    
                    

                    
                  </li>
                  
                </ul> 
              </li>
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              <li class="nav-item">
                
                
                
                
                
                <a href="https://www.clarifai.com/pricing">
                  <span>Pricing</span></a>
              </li>
              
              
            </ul>
          </nav>

        </div>

        <div class="main_menu-CTAs">
          <div class="main_menu-login">
            
            
            <a href="https://clarifai.com/login?__hstc=56460205.941fd3bdff0d161c2f70ccba4c9dcb6b.1707280236564.1715406292479.1715409915530.11&amp;__hssc=56460205.1.1715409915530&amp;__hsfp=1566939966" target="_blank" rel="noopener">
              Login
            </a>
          </div>
          <div class="main_menu-start">
            
            
            <a href="https://clarifai.com/signup?__hstc=56460205.941fd3bdff0d161c2f70ccba4c9dcb6b.1707280236564.1715406292479.1715409915530.11&amp;__hssc=56460205.1.1715409915530&amp;__hsfp=1566939966" target="_blank" rel="noopener">
              Start for free
            </a>
          </div>
        </div>

      </div>

      <div id="nav-menu" class="main_navigation mobile--menu">
        <div class="main_menu-nav">
          <nav class="menu menu--desktop header__menu--desktop" aria-label="Main menu">
            <ul>
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              <li class="nav-item">
                
                
                
                
                
                <a href="https://www.clarifai.com/why">
                  <span>Why</span></a>
              </li>
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              <li class="nav-item more">
                
                
                
                
                
                <a href="https://www.clarifai.com/products/platform">
                  <span>Platform</span>
                </a>
                <ul class="submenu submenu4 callout3 platform">
                  

                  <li class="li25 ">

                    
                    
                    <h4>Deploy</h4>  
                    
                    
                    
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/products/compute-orchestration">
                      

                      <div class="menu_title "><div class="title--text">Compute Orchestration</div> <span class="menu_badge">New</span>
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/products/flare-edge-ai-computing">
                      

                      <div class="menu_title "><div class="title--text">Edge AI</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    <h4>Data lifecycle</h4>  
                    
                    
                    
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/products/scribe-data-labeling-platform?__hstc=45788219.784daf187a6aa33c60eac9c343b2566e.1732575568560.1733415366032.1739377860844.3&amp;__hssc=45788219.1.1739377860844&amp;__hsfp=3414075492">
                      

                      <div class="menu_title "><div class="title--text">Automated Data Labeling</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/products/spacetime-ai-search-engine">
                      

                      <div class="menu_title "><div class="title--text">Data Management and Search</div> 
                        
                      </div>
                      
                    </a> 
                    
                    

                    
                  </li>
                  

                  <li class="li25 ">

                    
                    
                    <h4>Model Lifecycle</h4>  
                    
                    
                    
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/products/armada-ml-prediction">
                      

                      <div class="menu_title "><div class="title--text">Model Inference</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/products/enlight-model-training">
                      

                      <div class="menu_title "><div class="title--text">Model Training</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/products/mesh-workflows">
                      

                      <div class="menu_title "><div class="title--text">AI Workflows</div> 
                        
                      </div>
                      
                    </a> 
                    
                    

                    
                  </li>
                  

                  <li class="li25 ">

                    
                    
                    <h4>Governance &amp; Control</h4>  
                    
                    
                    
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/products/control-center">
                      

                      <div class="menu_title "><div class="title--text">Control Center</div> <span class="menu_badge">New</span>
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/products/ai-lake">
                      

                      <div class="menu_title "><div class="title--text">AI Lake</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/products/modules">
                      

                      <div class="menu_title "><div class="title--text">UI Modules</div> 
                        
                      </div>
                      
                    </a> 
                    
                    

                    
                  </li>
                  

                  <li class="li25 menu-callout">

                    
                    
                    
                    <span class="submenu_callout-block">
                      
                      
                      <a class="callout_link" href="https://www.clarifai.com/products/platform">
                      </a>
                      
                      
                      
                      
                      
                      <img data-src="https://www.clarifai.com/hubfs/platform-overview-image.svg" class="lozad ebook-thumbnail" alt="platform-overview-image" loading="" width="311" height="159">
                      
                      
                      <h6><span style="color: #04afff;">Platform overview</span></h6>
<h5>Learn more about Clarifai's AI Lifecycle Platform</h5>
                      
                    </span>
                    
                    
                    
                    

                    
                  </li>
                  
                </ul> 
              </li>
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              <li class="nav-item more">
                
                
                
                
                
                <a href="">
                  <span>Solutions</span>
                </a>
                <ul class="submenu submenu3 callout3 solutions">
                  

                  <li class="li33 ">

                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/computer-vision">
                      

                      <div class="menu_title "><div class="title--text">Computer Vision</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/solutions/operationalize-ai">
                      

                      <div class="menu_title "><div class="title--text">Operationalizing AI</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/solutions/retreival-augmented-generation">
                      

                      <div class="menu_title "><div class="title--text">Retrieval Augmented Generation (RAG)</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/solutions/generative-ai">
                      

                      <div class="menu_title "><div class="title--text">Generative AI</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/accelerate-ai-with-clarifais-new-ai-sprints">
                      

                      <div class="menu_title "><div class="title--text">AI Sprints</div> <span class="menu_badge">New</span>
                        
                      </div>
                      
                    </a> 
                    
                    

                    
                  </li>
                  

                  <li class="li33 ">

                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/solutions/visual-inspection">
                      

                      <div class="menu_title "><div class="title--text">Visual Inspection</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/solutions/digital-asset-management">
                      

                      <div class="menu_title "><div class="title--text">Digital Asset Management</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/solutions/content-moderation">
                      

                      <div class="menu_title "><div class="title--text">Content Moderation</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/government">
                      

                      <div class="menu_title "><div class="title--text">Government</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/solutions/overview">
                      

                      <div class="menu_title "><div class="title--text"><span style="color: #04AFFF">Solutions by Industries</span></div> 
                        
                      </div>
                      
                    </a> 
                    
                    

                    
                  </li>
                  

                  <li class="li33 menu-callout">

                    
                    
                    
                    <span class="submenu_callout-block">
                      
                      
                      <a class="callout_link" href="https://www.clarifai.com/webinar-founders-ama-maximize-the-value-of-your-ai-investments">
                      </a>
                      
                      
                      
                      
                      
                      
                      
                      <img data-src="https://www.clarifai.com/hubfs/Nav%20bar-Jan-16-2025-06-14-18-4775-PM.png" class="lozad ebook-thumbnail" alt="Founder's AMA: Maximize the value of your AI investments" loading="" width="467" height="239" style="max-width: 100%; height: auto;">
                      
                      
                      <h6><span style="color: #04afff;">ON-Demand WEBINAR</span></h6>
<h5>Founder's AMA: Maximize the value of your AI investments</h5>
                      
                    </span>
                    
                    
                    
                    

                    
                  </li>
                  
                </ul> 
              </li>
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              <li class="nav-item more">
                
                
                
                
                
                <a href="">
                  <span>Company</span>
                </a>
                <ul class="submenu submenu3 callout3 company">
                  

                  <li class="li33 ">

                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/company/about">
                      

                      <div class="menu_title "><div class="title--text">About</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/blog">
                      

                      <div class="menu_title "><div class="title--text">Blog</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink   menu_icon-right" href="https://www.clarifai.com/company/careers">
                      

                      <div class="menu_title "><div class="title--text">Careers</div> 
                        
                      </div>
                      
                      
                      
                      
                      
                      
                      <img data-src="https://www.clarifai.com/hubfs/career-icon.svg" class="icon-right lozad" alt="career-icon" loading="" width="24" height="24" style="max-width: 100%; height: auto;">
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/company/press">
                      

                      <div class="menu_title "><div class="title--text">Press</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/company/events">
                      

                      <div class="menu_title "><div class="title--text">Events</div> 
                        
                      </div>
                      
                    </a> 
                    
                    

                    
                  </li>
                  

                  <li class="li33 ">

                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/company/customers">
                      

                      <div class="menu_title "><div class="title--text">Customers</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/company/partners">
                      

                      <div class="menu_title "><div class="title--text">Partners</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/company/awards">
                      

                      <div class="menu_title "><div class="title--text">Awards</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/explore/contact-us">
                      

                      <div class="menu_title "><div class="title--text"><span style="color: #04AFFF">Contact us</span></div> 
                        
                      </div>
                      
                    </a> 
                    
                    

                    
                  </li>
                  

                  <li class="li33 menu-callout">

                    
                    
                    
                    <span class="submenu_callout-block">
                      
                      
                      <a class="callout_link" href="https://www.clarifai.com/products/compute-orchestration">
                      </a>
                      
                      
                      
                      
                      
                      
                      
                      <img data-src="https://www.clarifai.com/hubfs/1Hero%20CO.svg.svg" class="lozad ebook-thumbnail" alt="1Hero CO.svg" loading="" width="1062" height="650" style="max-width: 100%; height: auto;">
                      
                      
                      <h6>AI Compute Orchestration</h6>
<h5>Create and control your AI workloads on any compute infrastructure</h5>
                      
                    </span>
                    
                    
                    
                    

                    
                  </li>
                  
                </ul> 
              </li>
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              <li class="nav-item more">
                
                
                
                
                
                <a href="">
                  <span>Developers</span>
                </a>
                <ul class="submenu submenu1  developers">
                  

                  <li class="li100 ">

                    
                    
                    
                    
                    <a class="menulink  " target="_blank" rel="noopener noreferrer" href="https://www.clarifai.com/developers">
                      

                      <div class="menu_title "><div class="title--text">Overview</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " target="_blank" rel="noopener noreferrer" href="http://clarifai.com/explore">
                      

                      <div class="menu_title "><div class="title--text">Explore Community</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " target="_blank" rel="noopener noreferrer" href="https://docs.clarifai.com/">
                      

                      <div class="menu_title "><div class="title--text">Docs</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " href="https://www.clarifai.com/company/resources">
                      

                      <div class="menu_title "><div class="title--text">Resource Library</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink   menu_icon-right" target="_blank" rel="noopener noreferrer" href="https://discord.com/invite/WgUvPK4pVD">
                      

                      <div class="menu_title "><div class="title--text">Discord</div> 
                        
                      </div>
                      
                      
                      
                      
                      
                      
                      <img data-src="https://www.clarifai.com/hubfs/Discord.svg" class="icon-right lozad" alt="Discord" loading="" width="18" height="14" style="max-width: 100%; height: auto;">
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " target="_blank" rel="noopener noreferrer" href="http://www.youtube.com/@theworldsai">
                      

                      <div class="menu_title "><div class="title--text">YouTube</div> 
                        
                      </div>
                      
                    </a> 
                    
                    
                    
                    
                    
                    <a class="menulink  " target="_blank" rel="noopener noreferrer" href="mailto:support@clarifai.com">
                      

                      <div class="menu_title "><div class="title--text"><span style="color: #04AFFF">Support</span></div> 
                        
                      </div>
                      
                    </a> 
                    
                    

                    
                  </li>
                  
                </ul> 
              </li>
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              <li class="nav-item">
                
                
                
                
                
                <a href="https://www.clarifai.com/pricing">
                  <span>Pricing</span></a>
              </li>
              
              
            </ul>
          </nav>

          <div class="main_menu-CTAs">
            <div class="main_menu-login">
              
              
              <a href="https://clarifai.com/login?__hstc=56460205.941fd3bdff0d161c2f70ccba4c9dcb6b.1707280236564.1715406292479.1715409915530.11&amp;__hssc=56460205.1.1715409915530&amp;__hsfp=1566939966" target="_blank" rel="noopener">
                Login
              </a>
            </div>
            <div class="main_menu-start">
              
              
              <a href="https://clarifai.com/signup?__hstc=56460205.941fd3bdff0d161c2f70ccba4c9dcb6b.1707280236564.1715406292479.1715409915530.11&amp;__hssc=56460205.1.1715409915530&amp;__hsfp=1566939966" target="_blank" rel="noopener">
                Start for free
              </a>
            </div>
          </div>

        </div>

        <div class="main_menu-CTAs">
          <div class="main_menu-login">
            
            
            <a href="https://clarifai.com/login?__hstc=56460205.941fd3bdff0d161c2f70ccba4c9dcb6b.1707280236564.1715406292479.1715409915530.11&amp;__hssc=56460205.1.1715409915530&amp;__hsfp=1566939966" target="_blank" rel="noopener">
              Login
            </a>
          </div>
          <div class="main_menu-start">
            
            
            <a href="https://clarifai.com/signup?__hstc=56460205.941fd3bdff0d161c2f70ccba4c9dcb6b.1707280236564.1715406292479.1715409915530.11&amp;__hssc=56460205.1.1715409915530&amp;__hsfp=1566939966" target="_blank" rel="noopener">
              Start for free
            </a>
          </div>
        </div>

      </div>

      <div class="cst-humburger-icon">
        <a href="#nav-menu">
          <img src="https://www.clarifai.com/hubfs/menu-toggle.svg" alt="humburger-icon">
        </a>
      </div>
      <div class="mobile-close-icon">
        <img src="https://www.clarifai.com/hubfs/menu-close.svg" alt="menu-close">
      </div>
    </div>
  </div>
</div>

</div>

</header></div>
      </div>
      

      

      <main id="main-content" class="body-container-wrapper">
        



<div class="container-fluid body-container body-container--home">
<div class="row-fluid-wrapper">
<div class="row-fluid">
<div class="span12 widget-span widget-type-cell " style="" data-widget-type="cell" data-x="0" data-w="12">

<div class="row-fluid-wrapper row-depth-1 row-number-1 dnd_area-row-0-force-full-width-section dnd-section dnd_area-row-0-padding">
<div class="row-fluid ">
<div class="span12 widget-span widget-type-cell cell_17416083491962-padding dnd-column" style="" data-widget-type="cell" data-x="0" data-w="12">

<div class="row-fluid-wrapper row-depth-1 row-number-2 dnd-row">
<div class="row-fluid ">
<div class="span12 widget-span widget-type-custom_widget dnd-module" style="" data-widget-type="custom_widget" data-x="0" data-w="12">
<div id="hs_cos_wrapper_widget_1741608348803" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" style="" data-hs-cos-general-type="widget" data-hs-cos-type="module"><div class="hshero">
  <div class="content-wrapper">
    <div class="hshero-row">
      <div class="hshero-lft">
        <div class="hshero-content">
          <h1>The Hybrid Cloud AI Orchestration Platform for Enterprises</h1>
<p>Create and control your AI workloads on any compute.</p>
        </div>
        <div class="hshero-ctas">
          <div class="hshero-start">
            
            
            <a href="https://clarifai.com/signup">
              <span>Get started today<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewbox="0 0 21 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.125 4.625L16.875 9.375L1.75 9.375L1.75 10.625L16.875 10.625L12.125 15.375L13 16.25L19.25 10L13 3.75L12.125 4.625Z" fill="black" /></svg></span>
            </a>
          </div>
          <div class="hshero-methodology">
            
            
            <a href="https://www.clarifai.com/explore/contact-us-co">
              Talk to sales
            </a>
          </div>
        </div>
      </div>
      <div class="hshero-rgt">
        <div class="hshero-img">
          
          
          
          
          <img src="https://www.clarifai.com/hubfs/hero-new.svg" alt="hero-new" loading="" width="500" height="467">
          
        </div>
      </div>
    </div>
  </div>
</div>

</div>

</div><!--end widget-span -->
</div><!--end row-->
</div><!--end row-wrapper -->

</div><!--end widget-span -->
</div><!--end row-->
</div><!--end row-wrapper -->

<div class="row-fluid-wrapper row-depth-1 row-number-3 dnd_area-row-1-padding dnd_area-row-1-vertical-alignment dnd-section dnd_area-row-1-force-full-width-section">
<div class="row-fluid ">
<div class="span12 widget-span widget-type-cell dnd_area-column-3-padding dnd-column dnd_area-column-3-vertical-alignment" style="" data-widget-type="cell" data-x="0" data-w="12">

<div class="row-fluid-wrapper row-depth-1 row-number-4 dnd-row dnd_area-column-3-row-0-padding">
<div class="row-fluid ">
<div class="span12 widget-span widget-type-custom_widget dnd-module" style="" data-widget-type="custom_widget" data-x="0" data-w="12">
<div id="hs_cos_wrapper_dnd_area-module-4" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" style="" data-hs-cos-general-type="widget" data-hs-cos-type="module"><div class="trustedby">
  <div class="content-wrapper">
    
    <div class="trustedby-row">
      
      <div class="trustedby-col">
        <div class="trustedby-logo">
          
          
          
          
          <img src="https://www.clarifai.com/hubfs/Open%20table.svg" alt="Open table" loading="" width="115" height="27">
          
        </div>
      </div>
      
      <div class="trustedby-col">
        <div class="trustedby-logo">
          
          
          
          
          <img src="https://www.clarifai.com/hubfs/Vimep.svg" alt="Vimep" loading="" width="92" height="27">
          
        </div>
      </div>
      
      <div class="trustedby-col">
        <div class="trustedby-logo">
          
          
          
          
          <img src="https://www.clarifai.com/hubfs/Canva.svg" alt="Canva" loading="" width="81" height="31">
          
        </div>
      </div>
      
      <div class="trustedby-col">
        <div class="trustedby-logo">
          
          
          
          
          <img src="https://www.clarifai.com/hubfs/vevo-1.svg" alt="vevo-1" loading="" width="104" height="27">
          
        </div>
      </div>
      
      <div class="trustedby-col">
        <div class="trustedby-logo">
          
          
          
          
          <img src="https://www.clarifai.com/hubfs/Amazon.svg" alt="Amazon" loading="" width="101" height="31">
          
        </div>
      </div>
      
      <div class="trustedby-col">
        <div class="trustedby-logo">
          
          
          
          
          <img src="https://www.clarifai.com/hubfs/Simens.svg" alt="Simens" loading="" width="166" height="27">
          
        </div>
      </div>
      
      <div class="trustedby-col">
        <div class="trustedby-logo">
          
          
          
          
          <img src="https://www.clarifai.com/hubfs/Nvidia-1.svg" alt="Nvidia-1" loading="" width="148" height="29">
          
        </div>
      </div>
      
    </div>
  </div>
</div>

</div>

</div><!--end widget-span -->
</div><!--end row-->
</div><!--end row-wrapper -->

</div><!--end widget-span -->
</div><!--end row-->
</div><!--end row-wrapper -->

<div class="row-fluid-wrapper row-depth-1 row-number-5 dnd_area-row-2-force-full-width-section dnd_area-row-2-padding dnd-section">
<div class="row-fluid ">
<div class="span12 widget-span widget-type-cell dnd-column cell_17416798866282-padding" style="" data-widget-type="cell" data-x="0" data-w="12">

<div class="row-fluid-wrapper row-depth-1 row-number-6 dnd-row">
<div class="row-fluid ">
<div class="span12 widget-span widget-type-custom_widget dnd-module" style="" data-widget-type="custom_widget" data-x="0" data-w="12">
<div id="hs_cos_wrapper_widget_1741679886204" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" style="" data-hs-cos-general-type="widget" data-hs-cos-type="module"><div class="hs_ccombo-main">
  <div class="hs_ccombo-minr">
    <div class="hs_ccombo">
      <div class="content-wrapper">

        

        <div class="hs_ccombo-inr">
          <div class="hs_ccombo-mheading">
            <div class="hs_ccombo-heading">
              <h6><span style="color: #04afff;">COMPUTE</span></h6>
<h2>One Platform for Community, Private, and Self-Hosted AI Models.</h2>
<p>Deploy AI models faster, reduce costs, and run workloads anywhere. Scale effortlessly across cloud, on-prem, hybrid, and edge—all via a unified control plane.</p>
            </div>
          </div>
          <div class="hs_ccomboaa">
            <div class="hs_ccomboaa-lft">
              <div class="hs_ccomboaa-title">
                <h6>Available anywhere</h6>
              </div>
            </div>
            <div class="hs_ccomboaa-rgt">
              <div class="hs_ccomboaa-logos">
                
                <div class="hs_ccomboaa-logo">
                  
                  
                  
                  
                  
                  
                  <img src="https://www.clarifai.com/hubfs/Cloud.svg" alt="Cloud" loading="lazy" width="76" height="25" style="max-width: 100%; height: auto;">
                  
                </div>
                
                <div class="hs_ccomboaa-logo">
                  
                  
                  
                  
                  
                  
                  <img src="https://www.clarifai.com/hubfs/on-premises.svg" alt="on-premises" loading="lazy" width="127" height="25" style="max-width: 100%; height: auto;">
                  
                </div>
                
                <div class="hs_ccomboaa-logo">
                  
                  
                  
                  
                  
                  
                  <img src="https://www.clarifai.com/hubfs/Hybrid.svg" alt="Hybrid" loading="lazy" width="80" height="25" style="max-width: 100%; height: auto;">
                  
                </div>
                
                <div class="hs_ccomboaa-logo">
                  
                  
                  
                  
                  
                  
                  <img src="https://www.clarifai.com/hubfs/Air%20gapped.svg" alt="Air gapped" loading="lazy" width="117" height="25" style="max-width: 100%; height: auto;">
                  
                </div>
                
                <div class="hs_ccomboaa-logo">
                  
                  
                  
                  
                  
                  
                  <img src="https://www.clarifai.com/hubfs/Edge.svg" alt="Edge" loading="lazy" width="68" height="25" style="max-width: 100%; height: auto;">
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
        

        

        <div class="hs_hcrd">
          <div class="hs_hcrd-heading">
            <h2>Serverless AI Models. No Setup Needed.</h2>
<p>Clarifai’s Compute Orchestration powers these models, enabling fast deployment, scaling, and optimization across environments.</p>
          </div>
          <div class="hs_hcrd-row">
            
            <div class="hs_hcrd-col">
              <div class="hs_hcrd-colInr">
                <div class="hs_hcrd-logo">
                  
                  
                  
                  
                  
                  
                  <img src="https://www.clarifai.com/hs-fs/hubfs/deepseek.png?width=128&amp;height=128&amp;name=deepseek.png" alt="deepseek" loading="lazy" width="128" height="128" style="max-width: 100%; height: auto;" srcset="https://www.clarifai.com/hs-fs/hubfs/deepseek.png?width=64&amp;height=64&amp;name=deepseek.png 64w, https://www.clarifai.com/hs-fs/hubfs/deepseek.png?width=128&amp;height=128&amp;name=deepseek.png 128w, https://www.clarifai.com/hs-fs/hubfs/deepseek.png?width=192&amp;height=192&amp;name=deepseek.png 192w, https://www.clarifai.com/hs-fs/hubfs/deepseek.png?width=256&amp;height=256&amp;name=deepseek.png 256w, https://www.clarifai.com/hs-fs/hubfs/deepseek.png?width=320&amp;height=320&amp;name=deepseek.png 320w, https://www.clarifai.com/hs-fs/hubfs/deepseek.png?width=384&amp;height=384&amp;name=deepseek.png 384w" sizes="(max-width: 128px) 100vw, 128px">
                  
                </div>
                <div class="hs_hcrd-cnt">
                  <h5>DeepSeek-R1-Distill-Qwen-7B</h5>
<p>A 7B-parameter dense model distilled from DeepSeek-R1 based on Qwen-7B.</p>
                </div>
                
                <div class="hs_hcrd-link">
                  <a href="https://clarifai.com/deepseek-ai/deepseek-chat/models/DeepSeek-R1-Distill-Qwen-7B">TRY MODEL NOW</a>
                </div>
                
              </div>
            </div>
            
            <div class="hs_hcrd-col">
              <div class="hs_hcrd-colInr">
                <div class="hs_hcrd-logo">
                  
                  
                  
                  
                  <img src="https://www.clarifai.com/hs-fs/hubfs/meta.png?width=128&amp;height=128&amp;name=meta.png" alt="meta" loading="" width="128" height="128" srcset="https://www.clarifai.com/hs-fs/hubfs/meta.png?width=64&amp;height=64&amp;name=meta.png 64w, https://www.clarifai.com/hs-fs/hubfs/meta.png?width=128&amp;height=128&amp;name=meta.png 128w, https://www.clarifai.com/hs-fs/hubfs/meta.png?width=192&amp;height=192&amp;name=meta.png 192w, https://www.clarifai.com/hs-fs/hubfs/meta.png?width=256&amp;height=256&amp;name=meta.png 256w, https://www.clarifai.com/hs-fs/hubfs/meta.png?width=320&amp;height=320&amp;name=meta.png 320w, https://www.clarifai.com/hs-fs/hubfs/meta.png?width=384&amp;height=384&amp;name=meta.png 384w" sizes="(max-width: 128px) 100vw, 128px">
                  
                </div>
                <div class="hs_hcrd-cnt">
                  <h5>Llama-3.2-3B-Instruct</h5>
<p>A 3B-parameter Mixture-of-Experts model optimized for instructions.</p>
                </div>
                
                <div class="hs_hcrd-link">
                  <a href="https://clarifai.com/meta/Llama-3/models/Llama-3_2-3B-Instruct">TRY MODEL NOW</a>
                </div>
                
              </div>
            </div>
            
            <div class="hs_hcrd-col">
              <div class="hs_hcrd-colInr">
                <div class="hs_hcrd-logo">
                  
                  
                  
                  
                  <img src="https://www.clarifai.com/hs-fs/hubfs/microsoft.png?width=128&amp;height=128&amp;name=microsoft.png" alt="microsoft" loading="" width="128" height="128" srcset="https://www.clarifai.com/hs-fs/hubfs/microsoft.png?width=64&amp;height=64&amp;name=microsoft.png 64w, https://www.clarifai.com/hs-fs/hubfs/microsoft.png?width=128&amp;height=128&amp;name=microsoft.png 128w, https://www.clarifai.com/hs-fs/hubfs/microsoft.png?width=192&amp;height=192&amp;name=microsoft.png 192w, https://www.clarifai.com/hs-fs/hubfs/microsoft.png?width=256&amp;height=256&amp;name=microsoft.png 256w, https://www.clarifai.com/hs-fs/hubfs/microsoft.png?width=320&amp;height=320&amp;name=microsoft.png 320w, https://www.clarifai.com/hs-fs/hubfs/microsoft.png?width=384&amp;height=384&amp;name=microsoft.png 384w" sizes="(max-width: 128px) 100vw, 128px">
                  
                </div>
                <div class="hs_hcrd-cnt">
                  <h5>phi-4</h5>
<p>Microsoft’s high-accuracy AI for complex problem-solving tasks.</p>
                </div>
                
                <div class="hs_hcrd-link">
                  <a href="https://clarifai.com/microsoft/text-generation/models/phi-4">TRY MODEL NOW</a>
                </div>
                
              </div>
            </div>
            
            <div class="hs_hcrd-col">
              <div class="hs_hcrd-colInr">
                <div class="hs_hcrd-logo">
                  
                  
                  
                  
                  <img src="https://www.clarifai.com/hs-fs/hubfs/qwen-1.png?width=128&amp;height=128&amp;name=qwen-1.png" alt="qwen" loading="" width="128" height="128" srcset="https://www.clarifai.com/hs-fs/hubfs/qwen-1.png?width=64&amp;height=64&amp;name=qwen-1.png 64w, https://www.clarifai.com/hs-fs/hubfs/qwen-1.png?width=128&amp;height=128&amp;name=qwen-1.png 128w, https://www.clarifai.com/hs-fs/hubfs/qwen-1.png?width=192&amp;height=192&amp;name=qwen-1.png 192w, https://www.clarifai.com/hs-fs/hubfs/qwen-1.png?width=256&amp;height=256&amp;name=qwen-1.png 256w, https://www.clarifai.com/hs-fs/hubfs/qwen-1.png?width=320&amp;height=320&amp;name=qwen-1.png 320w, https://www.clarifai.com/hs-fs/hubfs/qwen-1.png?width=384&amp;height=384&amp;name=qwen-1.png 384w" sizes="(max-width: 128px) 100vw, 128px">
                  
                </div>
                <div class="hs_hcrd-cnt">
                  <h5>Qwen2.5-7B-Coder-Instruct</h5>
<p>A 7B-parameter AI fine-tuned for coding and multilingual tasks.</p>
                </div>
                
                <div class="hs_hcrd-link">
                  <a href="https://clarifai.com/qwen/qwenCoder/models/Qwen2_5-Coder-7B-Instruct-vllm">TRY MODEL NOW</a>
                </div>
                
              </div>
            </div>
            
            <div class="hs_hcrd-col">
              <div class="hs_hcrd-colInr">
                <div class="hs_hcrd-logo">
                  
                  
                  
                  
                  <img src="https://www.clarifai.com/hs-fs/hubfs/qwen-1.png?width=128&amp;height=128&amp;name=qwen-1.png" alt="qwen" loading="" width="128" height="128" srcset="https://www.clarifai.com/hs-fs/hubfs/qwen-1.png?width=64&amp;height=64&amp;name=qwen-1.png 64w, https://www.clarifai.com/hs-fs/hubfs/qwen-1.png?width=128&amp;height=128&amp;name=qwen-1.png 128w, https://www.clarifai.com/hs-fs/hubfs/qwen-1.png?width=192&amp;height=192&amp;name=qwen-1.png 192w, https://www.clarifai.com/hs-fs/hubfs/qwen-1.png?width=256&amp;height=256&amp;name=qwen-1.png 256w, https://www.clarifai.com/hs-fs/hubfs/qwen-1.png?width=320&amp;height=320&amp;name=qwen-1.png 320w, https://www.clarifai.com/hs-fs/hubfs/qwen-1.png?width=384&amp;height=384&amp;name=qwen-1.png 384w" sizes="(max-width: 128px) 100vw, 128px">
                  
                </div>
                <div class="hs_hcrd-cnt">
                  <h5>QwQ-32B-AWQ</h5>
<p>A 32B Mixture-of-Experts model designed for top-tier AI tasks.</p>
                </div>
                
                <div class="hs_hcrd-link">
                  <a href="https://clarifai.com/qwen/qwenLM/models/QwQ-32B-AWQ">TRY MODEL NOW</a>
                </div>
                
              </div>
            </div>
            
            <div class="hs_hcrd-col">
              <div class="hs_hcrd-colInr">
                <div class="hs_hcrd-logo">
                  
                  
                  
                  
                  <img src="https://www.clarifai.com/hs-fs/hubfs/qwen-1.png?width=128&amp;height=128&amp;name=qwen-1.png" alt="qwen" loading="" width="128" height="128" srcset="https://www.clarifai.com/hs-fs/hubfs/qwen-1.png?width=64&amp;height=64&amp;name=qwen-1.png 64w, https://www.clarifai.com/hs-fs/hubfs/qwen-1.png?width=128&amp;height=128&amp;name=qwen-1.png 128w, https://www.clarifai.com/hs-fs/hubfs/qwen-1.png?width=192&amp;height=192&amp;name=qwen-1.png 192w, https://www.clarifai.com/hs-fs/hubfs/qwen-1.png?width=256&amp;height=256&amp;name=qwen-1.png 256w, https://www.clarifai.com/hs-fs/hubfs/qwen-1.png?width=320&amp;height=320&amp;name=qwen-1.png 320w, https://www.clarifai.com/hs-fs/hubfs/qwen-1.png?width=384&amp;height=384&amp;name=qwen-1.png 384w" sizes="(max-width: 128px) 100vw, 128px">
                  
                </div>
                <div class="hs_hcrd-cnt">
                  <h5>Qwen2.5-VL-7B-Instruct</h5>
<p>A vision-language model optimized for reasoning and broad tasks.</p>
                </div>
                
                <div class="hs_hcrd-link">
                  <a href="https://clarifai.com/qwen/qwen-VL/models/Qwen2_5-VL-7B-Instruct">TRY MODEL NOW</a>
                </div>
                
              </div>
            </div>
            
            <div class="hs_hcrd-col">
              <div class="hs_hcrd-colInr">
                <div class="hs_hcrd-logo">
                  
                  
                  
                  
                  <img src="https://www.clarifai.com/hs-fs/hubfs/openbmb.png?width=128&amp;height=128&amp;name=openbmb.png" alt="openbmb" loading="" width="128" height="128" srcset="https://www.clarifai.com/hs-fs/hubfs/openbmb.png?width=64&amp;height=64&amp;name=openbmb.png 64w, https://www.clarifai.com/hs-fs/hubfs/openbmb.png?width=128&amp;height=128&amp;name=openbmb.png 128w, https://www.clarifai.com/hs-fs/hubfs/openbmb.png?width=192&amp;height=192&amp;name=openbmb.png 192w, https://www.clarifai.com/hs-fs/hubfs/openbmb.png?width=256&amp;height=256&amp;name=openbmb.png 256w, https://www.clarifai.com/hs-fs/hubfs/openbmb.png?width=320&amp;height=320&amp;name=openbmb.png 320w, https://www.clarifai.com/hs-fs/hubfs/openbmb.png?width=384&amp;height=384&amp;name=openbmb.png 384w" sizes="(max-width: 128px) 100vw, 128px">
                  
                </div>
                <div class="hs_hcrd-cnt">
                  <h5>MiniCPM-o-2.6</h5>
<p>A multilingual 2.6B model handling text, images, video, and audio.</p>
                </div>
                
                <div class="hs_hcrd-link">
                  <a href="https://clarifai.com/openbmb/miniCPM/models/MiniCPM-o-2_6-language">TRY MODEL NOW</a>
                </div>
                
              </div>
            </div>
            
            <div class="hs_hcrd-col">
              <div class="hs_hcrd-colInr">
                <div class="hs_hcrd-logo">
                  
                  
                  
                  
                  <img src="https://www.clarifai.com/hs-fs/hubfs/deepmind.png?width=128&amp;height=128&amp;name=deepmind.png" alt="deepmind" loading="" width="128" height="128" srcset="https://www.clarifai.com/hs-fs/hubfs/deepmind.png?width=64&amp;height=64&amp;name=deepmind.png 64w, https://www.clarifai.com/hs-fs/hubfs/deepmind.png?width=128&amp;height=128&amp;name=deepmind.png 128w, https://www.clarifai.com/hs-fs/hubfs/deepmind.png?width=192&amp;height=192&amp;name=deepmind.png 192w, https://www.clarifai.com/hs-fs/hubfs/deepmind.png?width=256&amp;height=256&amp;name=deepmind.png 256w, https://www.clarifai.com/hs-fs/hubfs/deepmind.png?width=320&amp;height=320&amp;name=deepmind.png 320w, https://www.clarifai.com/hs-fs/hubfs/deepmind.png?width=384&amp;height=384&amp;name=deepmind.png 384w" sizes="(max-width: 128px) 100vw, 128px">
                  
                </div>
                <div class="hs_hcrd-cnt">
                  <h5>Gemma-3-1B-IT-GGUF</h5>
<p>A multilingual AI model by Google, built for text generation and efficient deployment.</p>
                </div>
                
                <div class="hs_hcrd-link">
                  <a href="https://clarifai.com/gcp/generate/models/gemma-3-1b-it-GGUF">TRY MODEL NOW</a>
                </div>
                
              </div>
            </div>
            
            <div class="hs_hcrd-col">
              <div class="hs_hcrd-colInr">
                <div class="hs_hcrd-logo">
                  
                  
                  
                  
                  <img src="https://www.clarifai.com/hs-fs/hubfs/clarifai.png?width=128&amp;height=128&amp;name=clarifai.png" alt="clarifai" loading="" width="128" height="128" srcset="https://www.clarifai.com/hs-fs/hubfs/clarifai.png?width=64&amp;height=64&amp;name=clarifai.png 64w, https://www.clarifai.com/hs-fs/hubfs/clarifai.png?width=128&amp;height=128&amp;name=clarifai.png 128w, https://www.clarifai.com/hs-fs/hubfs/clarifai.png?width=192&amp;height=192&amp;name=clarifai.png 192w, https://www.clarifai.com/hs-fs/hubfs/clarifai.png?width=256&amp;height=256&amp;name=clarifai.png 256w, https://www.clarifai.com/hs-fs/hubfs/clarifai.png?width=320&amp;height=320&amp;name=clarifai.png 320w, https://www.clarifai.com/hs-fs/hubfs/clarifai.png?width=384&amp;height=384&amp;name=clarifai.png 384w" sizes="(max-width: 128px) 100vw, 128px">
                  
                </div>
                <div class="hs_hcrd-cnt">
                  <h5>general-image-recognition</h5>
<p>Identifies over 10,000 concepts in images and videos, including objects, and themes.</p>
                </div>
                
                <div class="hs_hcrd-link">
                  <a href="https://clarifai.com/clarifai/main/models/general-image-recognition">TRY MODEL NOW</a>
                </div>
                
              </div>
            </div>
            
            <div class="hs_hcrd-col">
              <div class="hs_hcrd-colInr">
                <div class="hs_hcrd-logo">
                  
                  
                  
                  
                  
                  
                  <img src="https://www.clarifai.com/hs-fs/hubfs/clarifai.png?width=128&amp;height=128&amp;name=clarifai.png" alt="clarifai" loading="lazy" width="128" height="128" style="max-width: 100%; height: auto;" srcset="https://www.clarifai.com/hs-fs/hubfs/clarifai.png?width=64&amp;height=64&amp;name=clarifai.png 64w, https://www.clarifai.com/hs-fs/hubfs/clarifai.png?width=128&amp;height=128&amp;name=clarifai.png 128w, https://www.clarifai.com/hs-fs/hubfs/clarifai.png?width=192&amp;height=192&amp;name=clarifai.png 192w, https://www.clarifai.com/hs-fs/hubfs/clarifai.png?width=256&amp;height=256&amp;name=clarifai.png 256w, https://www.clarifai.com/hs-fs/hubfs/clarifai.png?width=320&amp;height=320&amp;name=clarifai.png 320w, https://www.clarifai.com/hs-fs/hubfs/clarifai.png?width=384&amp;height=384&amp;name=clarifai.png 384w" sizes="(max-width: 128px) 100vw, 128px">
                  
                </div>
                <div class="hs_hcrd-cnt">
                  <h5>general-image-detection</h5>
<p>Detects and labels common objects in images by creating bounding boxes.</p>
                </div>
                
                <div class="hs_hcrd-link">
                  <a href="https://clarifai.com/clarifai/main/models/general-image-detection">TRY MODEL NOW</a>
                </div>
                
              </div>
            </div>
            
            <div class="hs_hcrd-col">
              <div class="hs_hcrd-colInr">
                <div class="hs_hcrd-logo">
                  
                  
                  
                  
                  
                  
                  <img src="https://www.clarifai.com/hs-fs/hubfs/clarifai.png?width=128&amp;height=128&amp;name=clarifai.png" alt="clarifai" loading="lazy" width="128" height="128" style="max-width: 100%; height: auto;" srcset="https://www.clarifai.com/hs-fs/hubfs/clarifai.png?width=64&amp;height=64&amp;name=clarifai.png 64w, https://www.clarifai.com/hs-fs/hubfs/clarifai.png?width=128&amp;height=128&amp;name=clarifai.png 128w, https://www.clarifai.com/hs-fs/hubfs/clarifai.png?width=192&amp;height=192&amp;name=clarifai.png 192w, https://www.clarifai.com/hs-fs/hubfs/clarifai.png?width=256&amp;height=256&amp;name=clarifai.png 256w, https://www.clarifai.com/hs-fs/hubfs/clarifai.png?width=320&amp;height=320&amp;name=clarifai.png 320w, https://www.clarifai.com/hs-fs/hubfs/clarifai.png?width=384&amp;height=384&amp;name=clarifai.png 384w" sizes="(max-width: 128px) 100vw, 128px">
                  
                </div>
                <div class="hs_hcrd-cnt">
                  <h5>moderation-recognition</h5>
<p>Identifies inappropriate content in images and videos, assisting in content moderation.</p>
                </div>
                
                <div class="hs_hcrd-link">
                  <a href="https://clarifai.com/clarifai/main/models/moderation-recognition">TRY MODEL NOW</a>
                </div>
                
              </div>
            </div>
            
            <div class="hs_hcrd-col">
              <div class="hs_hcrd-colInr">
                <div class="hs_hcrd-logo">
                  
                  
                  
                  
                  
                  
                  <img src="https://www.clarifai.com/hs-fs/hubfs/clarifai.png?width=128&amp;height=128&amp;name=clarifai.png" alt="clarifai" loading="lazy" width="128" height="128" style="max-width: 100%; height: auto;" srcset="https://www.clarifai.com/hs-fs/hubfs/clarifai.png?width=64&amp;height=64&amp;name=clarifai.png 64w, https://www.clarifai.com/hs-fs/hubfs/clarifai.png?width=128&amp;height=128&amp;name=clarifai.png 128w, https://www.clarifai.com/hs-fs/hubfs/clarifai.png?width=192&amp;height=192&amp;name=clarifai.png 192w, https://www.clarifai.com/hs-fs/hubfs/clarifai.png?width=256&amp;height=256&amp;name=clarifai.png 256w, https://www.clarifai.com/hs-fs/hubfs/clarifai.png?width=320&amp;height=320&amp;name=clarifai.png 320w, https://www.clarifai.com/hs-fs/hubfs/clarifai.png?width=384&amp;height=384&amp;name=clarifai.png 384w" sizes="(max-width: 128px) 100vw, 128px">
                  
                </div>
                <div class="hs_hcrd-cnt">
                  <h5>face-detection</h5>
<p>Detects and locates human faces within images and videos.</p>
                </div>
                
                <div class="hs_hcrd-link">
                  <a href="https://clarifai.com/clarifai/main/models/face-detection">TRY MODEL NOW</a>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
        

        

        <div class="hs_hbwtins">
          <div class="hs_hbwtins-heading">
            <h2>Deploy, Scale, and Optimize AI with Compute Orchestration.</h2>
<p>Clarifai’s Compute Orchestration powers these models, enabling fast deployment, scaling, and optimization across environments.</p>
          </div>
          
          <div class="hs_hbwtins-btn">
            
            
            <a href="https://www.clarifai.com/products/compute-orchestration">
              Learn more about Compute Orchestration
            </a>
          </div>
          
          <div class="hs_hbwtins-row">
            
            <div class="hs_hbwtins-col">
              <div class="hs_hbwtins-colInr">
                <div class="hs_hbwtins-hdr">
                  
                  <div class="hs_hbwtins-icon">
                    
                    
                    
                    
                    
                    
                    <img src="https://www.clarifai.com/hubfs/server-05%20-.svg" alt="server-05 -" loading="lazy" width="20" height="21" style="max-width: 100%; height: auto;">
                    
                  </div>
                  
                  <div class="hs_hbwtins-title">
                    <h5>Deploy AI Anywhere</h5>
                  </div>
                </div>
                <div class="hs_hbwtins-desc">
                  <p>Run AI on any hardware, in any cloud, or on-prem, including private VPCs or Clarifai’s managed infrastructure.</p>
                </div>
              </div>
            </div>
            
            <div class="hs_hbwtins-col">
              <div class="hs_hbwtins-colInr">
                <div class="hs_hbwtins-hdr">
                  
                  <div class="hs_hbwtins-icon">
                    
                    
                    
                    
                    <img src="https://www.clarifai.com/hubfs/piggy-bank-02%20-.svg" alt="piggy-bank-02 -" loading="" width="20" height="21">
                    
                  </div>
                  
                  <div class="hs_hbwtins-title">
                    <h5>Cut Costs, Maximize Compute</h5>
                  </div>
                </div>
                <div class="hs_hbwtins-desc">
                  <p>Reduce costs with GPU fractioning, auto-scaling, inference streaming, and spot instances for maximum efficiency.</p>
                </div>
              </div>
            </div>
            
            <div class="hs_hbwtins-col">
              <div class="hs_hbwtins-colInr">
                <div class="hs_hbwtins-hdr">
                  
                  <div class="hs_hbwtins-icon">
                    
                    
                    
                    
                    <img src="https://www.clarifai.com/hubfs/shield-tick%20-.svg" alt="shield-tick -" loading="" width="20" height="21">
                    
                  </div>
                  
                  <div class="hs_hbwtins-title">
                    <h5>Enterprise-Grade Security</h5>
                  </div>
                </div>
                <div class="hs_hbwtins-desc">
                  <p>Manage AI with enterprise security, role-based access, and a unified control pane for billions of requests.</p>
                </div>
              </div>
            </div>
            
            <div class="hs_hbwtins-col">
              <div class="hs_hbwtins-colInr">
                <div class="hs_hbwtins-hdr">
                  
                  <div class="hs_hbwtins-icon">
                    
                    
                    
                    
                    <img src="https://www.clarifai.com/hubfs/rocket-02%20-.svg" alt="rocket-02 -" loading="" width="20" height="21">
                    
                  </div>
                  
                  <div class="hs_hbwtins-title">
                    <h5>Accelerate AI to Production</h5>
                  </div>
                </div>
                <div class="hs_hbwtins-desc">
                  <p>Streamline model deployment with automated workflows, push-button builds, and simplified scaling.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        

        

        <div class="hs_hcntr">
          <div class="hs_hcntr-heading">
            <h2>Faster. Smarter. More Efficient AI.</h2>
<p>Clarifai’s Compute Orchestration maximizes AI performance, reduces costs, and scales effortlessly. More speed. Less waste. Total control.</p>
          </div>
          <div class="hs_hcntr-row">
            
            <div class="hs_hcntr-col">
              <div class="hs_hcntr-colInr">
                <div class="hs_hcntr-num">
                  90%
                </div>
                <div class="hs_hcntr-desc">
                  <p>cost savings via compute savings</p>
                </div>
              </div>
            </div>
            
            <div class="hs_hcntr-col">
              <div class="hs_hcntr-colInr">
                <div class="hs_hcntr-num">
                  1.6M+
                </div>
                <div class="hs_hcntr-desc">
                  <p>inference requests/sec supported</p>
                </div>
              </div>
            </div>
            
            <div class="hs_hcntr-col">
              <div class="hs_hcntr-colInr">
                <div class="hs_hcntr-num">
                  99.99%
                </div>
                <div class="hs_hcntr-desc">
                  <p>reliability under extreme load</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        

      </div>
    </div>
  </div>
</div>

</div>

</div><!--end widget-span -->
</div><!--end row-->
</div><!--end row-wrapper -->

</div><!--end widget-span -->
</div><!--end row-->
</div><!--end row-wrapper -->

<div class="row-fluid-wrapper row-depth-1 row-number-7 dnd-section dnd_area-row-3-padding dnd_area-row-3-force-full-width-section dnd_area-row-3-vertical-alignment">
<div class="row-fluid ">
<div class="span12 widget-span widget-type-cell dnd_area-column-9-vertical-alignment dnd_area-column-9-padding dnd-column" style="" data-widget-type="cell" data-x="0" data-w="12">

<div class="row-fluid-wrapper row-depth-1 row-number-8 dnd_area-column-9-row-0-padding dnd-row">
<div class="row-fluid ">
</div><!--end row-->
</div><!--end row-wrapper -->

</div><!--end widget-span -->
</div><!--end row-->
</div><!--end row-wrapper -->

<div class="row-fluid-wrapper row-depth-1 row-number-9 dnd-section dnd_area-row-4-force-full-width-section dnd_area-row-4-padding">
<div class="row-fluid ">
<div class="span12 widget-span widget-type-cell cell_17417011104822-padding dnd-column" style="" data-widget-type="cell" data-x="0" data-w="12">

<div class="row-fluid-wrapper row-depth-1 row-number-10 dnd-row">
<div class="row-fluid ">
<div class="span12 widget-span widget-type-custom_widget dnd-module" style="" data-widget-type="custom_widget" data-x="0" data-w="12">
<div id="hs_cos_wrapper_widget_1741701110027" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" style="" data-hs-cos-general-type="widget" data-hs-cos-type="module"><div class="hs_stdPre">
  <div class="content-wrapper">
    <div class="hs_stdPre-head">
      <h6><span style="color: #04afff;">CONTROL</span></h6>
<h2>Enterprise Ready Governance and Control.&nbsp;</h2>
<p>Our platform offers a unified control plane that provides a single pane of glass to manage your AI resources, monitor performance, track costs, and control usage across all your deployments.</p>
    </div>
    
    <div class="hs_stdPre-btn">
      
      
      <a href="https://www.clarifai.com/products/control-center">
        Learn more about Control Center
      </a>
    </div>
    
  </div>
</div>

</div>

</div><!--end widget-span -->
</div><!--end row-->
</div><!--end row-wrapper -->

</div><!--end widget-span -->
</div><!--end row-->
</div><!--end row-wrapper -->

<div class="row-fluid-wrapper row-depth-1 row-number-11 dnd-section dnd_area-row-5-padding dnd_area-row-5-force-full-width-section">
<div class="row-fluid ">
<div class="span12 widget-span widget-type-cell dnd-column cell_17417066952042-padding" style="" data-widget-type="cell" data-x="0" data-w="12">

<div class="row-fluid-wrapper row-depth-1 row-number-12 dnd-row">
<div class="row-fluid ">
<div class="span12 widget-span widget-type-custom_widget dnd-module" style="" data-widget-type="custom_widget" data-x="0" data-w="12">
<div id="hs_cos_wrapper_widget_1741704218042" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" style="" data-hs-cos-general-type="widget" data-hs-cos-type="module"><div class="hs_caccord">
  <div class="content-wrapper">
    <div class="hs_caccord-row">
      <div class="hs_caccord-lft">
        <div class="hs_caccord_accordion">
          
          <div class="accordion hs_caccord_acc-item">
            <div class="hs_caccord_acc-content accordion_intro">
              <h5>AI Operations &amp; Performance</h5>
<p>Gain real-time insights into model activity, search operations, and system performance to optimize efficiency.</p>
            </div>
            <div class="accordion_content">

            </div>
          </div>
          
          <div class="accordion hs_caccord_acc-item">
            <div class="hs_caccord_acc-content accordion_intro">
              <h5>Cost &amp; Resource Monitoring</h5>
<p>Track AI resource usage and expenses across deployments. Optimize costs, prevent overages, and maintain efficient allocation.</p>
            </div>
            <div class="accordion_content">

            </div>
          </div>
          
          <div class="accordion hs_caccord_acc-item">
            <div class="hs_caccord_acc-content accordion_intro">
              <h5>Activity &amp; Change Logs</h5>
<p>Monitor all user actions with time-stamped logs. Track workflow updates, application changes, and system events for full transparency.</p>
            </div>
            <div class="accordion_content">

            </div>
          </div>
          
          <div class="accordion hs_caccord_acc-item">
            <div class="hs_caccord_acc-content accordion_intro">
              <h5>User Roles &amp; Access Control</h5>
<p>Manage permissions for AI resources with role-based access. Control who can create, update, or delete applications, models, and clusters.</p>
            </div>
            <div class="accordion_content">

            </div>
          </div>
          
        </div>
      </div>
      <div class="hs_caccord-rgt accordion_images">
        <div class="hs_caccord-image">
          
          
          
          
          
          
          
          <img src="https://www.clarifai.com/hs-fs/hubfs/AI%20Operations.png?width=1120&amp;height=1180&amp;name=AI%20Operations.png" alt="AI Operations" loading="" width="1120" height="1180" style="max-width: 100%; height: auto;" srcset="https://www.clarifai.com/hs-fs/hubfs/AI%20Operations.png?width=560&amp;height=590&amp;name=AI%20Operations.png 560w, https://www.clarifai.com/hs-fs/hubfs/AI%20Operations.png?width=1120&amp;height=1180&amp;name=AI%20Operations.png 1120w, https://www.clarifai.com/hs-fs/hubfs/AI%20Operations.png?width=1680&amp;height=1770&amp;name=AI%20Operations.png 1680w, https://www.clarifai.com/hs-fs/hubfs/AI%20Operations.png?width=2240&amp;height=2360&amp;name=AI%20Operations.png 2240w, https://www.clarifai.com/hs-fs/hubfs/AI%20Operations.png?width=2800&amp;height=2950&amp;name=AI%20Operations.png 2800w, https://www.clarifai.com/hs-fs/hubfs/AI%20Operations.png?width=3360&amp;height=3540&amp;name=AI%20Operations.png 3360w" sizes="(max-width: 1120px) 100vw, 1120px">
          
          
          
          
          
          
          
          
          <img src="https://www.clarifai.com/hs-fs/hubfs/Resource%20Monitoring.png?width=1120&amp;height=1180&amp;name=Resource%20Monitoring.png" alt="Resource Monitoring" loading="" width="1120" height="1180" style="max-width: 100%; height: auto;" srcset="https://www.clarifai.com/hs-fs/hubfs/Resource%20Monitoring.png?width=560&amp;height=590&amp;name=Resource%20Monitoring.png 560w, https://www.clarifai.com/hs-fs/hubfs/Resource%20Monitoring.png?width=1120&amp;height=1180&amp;name=Resource%20Monitoring.png 1120w, https://www.clarifai.com/hs-fs/hubfs/Resource%20Monitoring.png?width=1680&amp;height=1770&amp;name=Resource%20Monitoring.png 1680w, https://www.clarifai.com/hs-fs/hubfs/Resource%20Monitoring.png?width=2240&amp;height=2360&amp;name=Resource%20Monitoring.png 2240w, https://www.clarifai.com/hs-fs/hubfs/Resource%20Monitoring.png?width=2800&amp;height=2950&amp;name=Resource%20Monitoring.png 2800w, https://www.clarifai.com/hs-fs/hubfs/Resource%20Monitoring.png?width=3360&amp;height=3540&amp;name=Resource%20Monitoring.png 3360w" sizes="(max-width: 1120px) 100vw, 1120px">
          
          
          
          
          
          
          
          
          <img src="https://www.clarifai.com/hs-fs/hubfs/Change%20Logs.png?width=1120&amp;height=1180&amp;name=Change%20Logs.png" alt="Change Logs" loading="" width="1120" height="1180" style="max-width: 100%; height: auto;" srcset="https://www.clarifai.com/hs-fs/hubfs/Change%20Logs.png?width=560&amp;height=590&amp;name=Change%20Logs.png 560w, https://www.clarifai.com/hs-fs/hubfs/Change%20Logs.png?width=1120&amp;height=1180&amp;name=Change%20Logs.png 1120w, https://www.clarifai.com/hs-fs/hubfs/Change%20Logs.png?width=1680&amp;height=1770&amp;name=Change%20Logs.png 1680w, https://www.clarifai.com/hs-fs/hubfs/Change%20Logs.png?width=2240&amp;height=2360&amp;name=Change%20Logs.png 2240w, https://www.clarifai.com/hs-fs/hubfs/Change%20Logs.png?width=2800&amp;height=2950&amp;name=Change%20Logs.png 2800w, https://www.clarifai.com/hs-fs/hubfs/Change%20Logs.png?width=3360&amp;height=3540&amp;name=Change%20Logs.png 3360w" sizes="(max-width: 1120px) 100vw, 1120px">
          
          
          
          
          
          
          
          
          <img src="https://www.clarifai.com/hs-fs/hubfs/Access%20Control.png?width=1120&amp;height=1180&amp;name=Access%20Control.png" alt="Access Control" loading="" width="1120" height="1180" style="max-width: 100%; height: auto;" srcset="https://www.clarifai.com/hs-fs/hubfs/Access%20Control.png?width=560&amp;height=590&amp;name=Access%20Control.png 560w, https://www.clarifai.com/hs-fs/hubfs/Access%20Control.png?width=1120&amp;height=1180&amp;name=Access%20Control.png 1120w, https://www.clarifai.com/hs-fs/hubfs/Access%20Control.png?width=1680&amp;height=1770&amp;name=Access%20Control.png 1680w, https://www.clarifai.com/hs-fs/hubfs/Access%20Control.png?width=2240&amp;height=2360&amp;name=Access%20Control.png 2240w, https://www.clarifai.com/hs-fs/hubfs/Access%20Control.png?width=2800&amp;height=2950&amp;name=Access%20Control.png 2800w, https://www.clarifai.com/hs-fs/hubfs/Access%20Control.png?width=3360&amp;height=3540&amp;name=Access%20Control.png 3360w" sizes="(max-width: 1120px) 100vw, 1120px">
          
          
        </div>
      </div>
    </div>
  </div>
</div>



</div>

</div><!--end widget-span -->
</div><!--end row-->
</div><!--end row-wrapper -->

<div class="row-fluid-wrapper row-depth-1 row-number-13 dnd-row">
<div class="row-fluid ">
<div class="span12 widget-span widget-type-custom_widget module_17417066005924-hidden dnd-module" style="" data-widget-type="custom_widget" data-x="0" data-w="12">
<div id="hs_cos_wrapper_module_17417066005924" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" style="" data-hs-cos-general-type="widget" data-hs-cos-type="module"><div class="trustedby">
  <div class="content-wrapper">
    
    <div class="trustedby-row">
      
      <div class="trustedby-col">
        <div class="trustedby-logo">
          
          
          
          
          <img src="https://www.clarifai.com/hubfs/Vimep.svg" alt="Vimep" loading="" width="92" height="27">
          
        </div>
      </div>
      
      <div class="trustedby-col">
        <div class="trustedby-logo">
          
          
          
          
          <img src="https://www.clarifai.com/hubfs/Canva.svg" alt="Canva" loading="" width="81" height="31">
          
        </div>
      </div>
      
      <div class="trustedby-col">
        <div class="trustedby-logo">
          
          
          
          
          <img src="https://www.clarifai.com/hubfs/vevo-1.svg" alt="vevo-1" loading="" width="104" height="27">
          
        </div>
      </div>
      
      <div class="trustedby-col">
        <div class="trustedby-logo">
          
          
          
          
          <img src="https://www.clarifai.com/hubfs/Amazon.svg" alt="Amazon" loading="" width="101" height="31">
          
        </div>
      </div>
      
      <div class="trustedby-col">
        <div class="trustedby-logo">
          
          
          
          
          <img src="https://www.clarifai.com/hubfs/Simens.svg" alt="Simens" loading="" width="166" height="27">
          
        </div>
      </div>
      
      <div class="trustedby-col">
        <div class="trustedby-logo">
          
          
          
          
          <img src="https://www.clarifai.com/hubfs/Nvidia-1.svg" alt="Nvidia-1" loading="" width="148" height="29">
          
        </div>
      </div>
      
    </div>
  </div>
</div>

</div>

</div><!--end widget-span -->
</div><!--end row-->
</div><!--end row-wrapper -->

<div class="row-fluid-wrapper row-depth-1 row-number-14 dnd-row">
<div class="row-fluid ">
<div class="span12 widget-span widget-type-custom_widget dnd-module" style="" data-widget-type="custom_widget" data-x="0" data-w="12">
<div id="hs_cos_wrapper_dnd_area-module-10" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" style="" data-hs-cos-general-type="widget" data-hs-cos-type="module"><div class="unlocking_ai">
  <div class="content-wrapper">
    <div class="unlocking_ai-heading">
      <h6><span style="color: #04afff;">CREATE</span></h6>
<h2>Every AI Lifecycle Tool You Need to Customize Your AI Workloads.</h2>
<p>Auto-label, train, fine-tune, and deploy models with our full AI toolset—backed by world-class AI expertise.</p>
    </div>
    
    <div class="unlocking_ai-btn">
      
      
      <a href="https://www.clarifai.com/products/platform">
        Learn more about Clarifai AI Lifecycle Platform
      </a>
    </div>
    
    <div class="unlocking_ai-rowtop">
      <div class="unlocking_ai-col unlocking_ai-col1">
        <div class="unlocking_ai-colInr image">
          <div class="unlocking_ai-bgimg">
            <div class="unlocking_ai-img">
              
              
              
              
              
              <img src="https://www.clarifai.com/hs-fs/hubfs/Automated%20Data%20Labeling.png?width=252&amp;height=136&amp;name=Automated%20Data%20Labeling.png" alt="Automated Data Labeling" loading="lazy" width="252" height="136" srcset="https://www.clarifai.com/hs-fs/hubfs/Automated%20Data%20Labeling.png?width=126&amp;height=68&amp;name=Automated%20Data%20Labeling.png 126w, https://www.clarifai.com/hs-fs/hubfs/Automated%20Data%20Labeling.png?width=252&amp;height=136&amp;name=Automated%20Data%20Labeling.png 252w, https://www.clarifai.com/hs-fs/hubfs/Automated%20Data%20Labeling.png?width=378&amp;height=204&amp;name=Automated%20Data%20Labeling.png 378w, https://www.clarifai.com/hs-fs/hubfs/Automated%20Data%20Labeling.png?width=504&amp;height=272&amp;name=Automated%20Data%20Labeling.png 504w, https://www.clarifai.com/hs-fs/hubfs/Automated%20Data%20Labeling.png?width=630&amp;height=340&amp;name=Automated%20Data%20Labeling.png 630w, https://www.clarifai.com/hs-fs/hubfs/Automated%20Data%20Labeling.png?width=756&amp;height=408&amp;name=Automated%20Data%20Labeling.png 756w" sizes="(max-width: 252px) 100vw, 252px">
              
              
            </div>
            <div class="unlocking_ai-cnt">
              <h5>Automated Data Labeling</h5>
              <div class="unlocking_ai-desc">
                <p>Auto-label images, videos, and text faster and more accurately</p>
              </div>
            </div>
            
            
            <a class="unlocking_ai-link" href="https://www.clarifai.com/products/scribe-data-labeling-platform">
            </a>
          </div>
        </div>
      </div>
      <div class="unlocking_ai-col unlocking_ai-col2">
        <div class="unlocking_ai-colInr image">
          <div class="unlocking_ai-bgimg">
            <div class="unlocking_ai-img">
              
              
              
              
              
              <img src="https://www.clarifai.com/hs-fs/hubfs/Group%20633094.png?width=322&amp;height=164&amp;name=Group%20633094.png" alt="Group 633094" loading="lazy" width="322" height="164" srcset="https://www.clarifai.com/hs-fs/hubfs/Group%20633094.png?width=161&amp;height=82&amp;name=Group%20633094.png 161w, https://www.clarifai.com/hs-fs/hubfs/Group%20633094.png?width=322&amp;height=164&amp;name=Group%20633094.png 322w, https://www.clarifai.com/hs-fs/hubfs/Group%20633094.png?width=483&amp;height=246&amp;name=Group%20633094.png 483w, https://www.clarifai.com/hs-fs/hubfs/Group%20633094.png?width=644&amp;height=328&amp;name=Group%20633094.png 644w, https://www.clarifai.com/hs-fs/hubfs/Group%20633094.png?width=805&amp;height=410&amp;name=Group%20633094.png 805w, https://www.clarifai.com/hs-fs/hubfs/Group%20633094.png?width=966&amp;height=492&amp;name=Group%20633094.png 966w" sizes="(max-width: 322px) 100vw, 322px">
              
              
            </div>
            <div class="unlocking_ai-cnt">
              <h5>Vector Search</h5>
              <div class="unlocking_ai-desc">
                <p>Find a needle in the haystack across all of your unstructured data to create highly relevant content with pinpoint accuracy.</p>
              </div>
            </div>
            
            
            <a class="unlocking_ai-link" href="https://www.clarifai.com/products/spacetime-ai-search-engine">
            </a>
          </div>
        </div>
      </div>
      <div class="unlocking_ai-col unlocking_ai-col3">
        <div class="unlocking_ai-colInr image">
          <div class="unlocking_ai-bgimg">
            <div class="unlocking_ai-img">
              
              
              
              
              
              <img src="https://www.clarifai.com/hs-fs/hubfs/Group%201261161766.png?width=241&amp;height=141&amp;name=Group%201261161766.png" alt="Group 1261161766" loading="lazy" width="241" height="141" srcset="https://www.clarifai.com/hs-fs/hubfs/Group%201261161766.png?width=121&amp;height=71&amp;name=Group%201261161766.png 121w, https://www.clarifai.com/hs-fs/hubfs/Group%201261161766.png?width=241&amp;height=141&amp;name=Group%201261161766.png 241w, https://www.clarifai.com/hs-fs/hubfs/Group%201261161766.png?width=362&amp;height=212&amp;name=Group%201261161766.png 362w, https://www.clarifai.com/hs-fs/hubfs/Group%201261161766.png?width=482&amp;height=282&amp;name=Group%201261161766.png 482w, https://www.clarifai.com/hs-fs/hubfs/Group%201261161766.png?width=603&amp;height=353&amp;name=Group%201261161766.png 603w, https://www.clarifai.com/hs-fs/hubfs/Group%201261161766.png?width=723&amp;height=423&amp;name=Group%201261161766.png 723w" sizes="(max-width: 241px) 100vw, 241px">
              
              
            </div>
            <div class="unlocking_ai-cnt">
              <h5>Dataset Managment</h5>
              <div class="unlocking_ai-desc">
                <p>Manage datasets for model training, model&nbsp; evaluation, and data labeling.&nbsp;</p>
              </div>
            </div>
            
            
            <a class="unlocking_ai-link">
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="unlocking_org-row">
      <div class="unlocking_org-lft">
        <div class="unlocking_org-col unlocking_ai-col4">
          <div class="unlocking_org-colInr image">
            <div class="unlocking_org-bgimg">
              <div class="unlocking_org-img">
                
                
                
                
                
                <img src="https://www.clarifai.com/hs-fs/hubfs/Frame%201261162293.png?width=288&amp;height=173&amp;name=Frame%201261162293.png" alt="Model Training &amp; Evaluation" loading="" width="288" height="173" srcset="https://www.clarifai.com/hs-fs/hubfs/Frame%201261162293.png?width=144&amp;height=87&amp;name=Frame%201261162293.png 144w, https://www.clarifai.com/hs-fs/hubfs/Frame%201261162293.png?width=288&amp;height=173&amp;name=Frame%201261162293.png 288w, https://www.clarifai.com/hs-fs/hubfs/Frame%201261162293.png?width=432&amp;height=260&amp;name=Frame%201261162293.png 432w, https://www.clarifai.com/hs-fs/hubfs/Frame%201261162293.png?width=576&amp;height=346&amp;name=Frame%201261162293.png 576w, https://www.clarifai.com/hs-fs/hubfs/Frame%201261162293.png?width=720&amp;height=433&amp;name=Frame%201261162293.png 720w, https://www.clarifai.com/hs-fs/hubfs/Frame%201261162293.png?width=864&amp;height=519&amp;name=Frame%201261162293.png 864w" sizes="(max-width: 288px) 100vw, 288px">
                
                
              </div>
              <div class="unlocking_org-cnt">
                <h5>Model Training &amp; Evaluation</h5>
                <div class="unlocking_org-desc">
                  <p>Easily customize state-of-the-art AI models to fit custom needs. One-click training templates simplify training custom models and make custom AI accessible across teams.<br><br></p>
                </div>
              </div>
              
              
              <a class="unlocking_ai-link" href="https://www.clarifai.com/products/enlight-model-training">
              </a>
            </div>
          </div>
        </div>
        <div class="unlocking_org-col unlocking_ai-col5">
          <div class="unlocking_org-colInr background_image">
            <div class="unlocking_org-bgimg" style="background-image:url(https://www.clarifai.com/hubfs/Retrieval%20Augmented%20Generation.png);">
              <div class="unlocking_org-img">
                
              </div>
              <div class="unlocking_org-cnt">
                <h5>AI Workflows</h5>
                <div class="unlocking_org-desc">
                  <p>Assemble models, agents, operators, and nodes with an intuitive drag-and-drop interface to address diverse business use cases effortlessly.</p>
                </div>
              </div>
              
              
              <a class="unlocking_ai-link" href="https://www.clarifai.com/products/mesh-workflows">
              </a>
            </div>
          </div>
        </div>
        <div class="unlocking_org-col unlocking_ai-col6">
          <div class="unlocking_org-colInr image">
            <div class="unlocking_org-bgimg">
              <div class="unlocking_org-img">
                
                
                
                
                
                <img src="https://www.clarifai.com/hs-fs/hubfs/Frame%20633085.png?width=181&amp;height=117&amp;name=Frame%20633085.png" alt="AI Modules" loading="lazy" width="181" height="117" srcset="https://www.clarifai.com/hs-fs/hubfs/Frame%20633085.png?width=91&amp;height=59&amp;name=Frame%20633085.png 91w, https://www.clarifai.com/hs-fs/hubfs/Frame%20633085.png?width=181&amp;height=117&amp;name=Frame%20633085.png 181w, https://www.clarifai.com/hs-fs/hubfs/Frame%20633085.png?width=272&amp;height=176&amp;name=Frame%20633085.png 272w, https://www.clarifai.com/hs-fs/hubfs/Frame%20633085.png?width=362&amp;height=234&amp;name=Frame%20633085.png 362w, https://www.clarifai.com/hs-fs/hubfs/Frame%20633085.png?width=453&amp;height=293&amp;name=Frame%20633085.png 453w, https://www.clarifai.com/hs-fs/hubfs/Frame%20633085.png?width=543&amp;height=351&amp;name=Frame%20633085.png 543w" sizes="(max-width: 181px) 100vw, 181px">
                
                
              </div>
              <div class="unlocking_org-cnt">
                <h5>AI Modules</h5>
                <div class="unlocking_org-desc">
                  <p>Make reusable web apps for any AI task. Extend Clarifai's SDKs with new views, features,&nbsp; or processing capabilities.</p>
                </div>
              </div>
              
              
              <a class="unlocking_ai-link" href="https://www.clarifai.com/products/modules">
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="unlocking_org-rgt">
        <div class="unlocking_org-col unlocking_ai-col7">
          <div class="unlocking_org-colInr image">
            <div class="unlocking_org-bgimg">
              <div class="unlocking_org-img">
                
                
                
                
                
                <img src="https://www.clarifai.com/hs-fs/hubfs/Group%20633095-1.png?width=266&amp;height=186&amp;name=Group%20633095-1.png" alt="Retrieval Augmented Generation" loading="lazy" width="266" height="186" srcset="https://www.clarifai.com/hs-fs/hubfs/Group%20633095-1.png?width=133&amp;height=93&amp;name=Group%20633095-1.png 133w, https://www.clarifai.com/hs-fs/hubfs/Group%20633095-1.png?width=266&amp;height=186&amp;name=Group%20633095-1.png 266w, https://www.clarifai.com/hs-fs/hubfs/Group%20633095-1.png?width=399&amp;height=279&amp;name=Group%20633095-1.png 399w, https://www.clarifai.com/hs-fs/hubfs/Group%20633095-1.png?width=532&amp;height=372&amp;name=Group%20633095-1.png 532w, https://www.clarifai.com/hs-fs/hubfs/Group%20633095-1.png?width=665&amp;height=465&amp;name=Group%20633095-1.png 665w, https://www.clarifai.com/hs-fs/hubfs/Group%20633095-1.png?width=798&amp;height=558&amp;name=Group%20633095-1.png 798w" sizes="(max-width: 266px) 100vw, 266px">
                
                
              </div>
              <div class="unlocking_org-cnt">
                <h5>Retrieval Augmented Generation</h5>
                <div class="unlocking_org-desc">
                  <p>Develop Retrieval Augmented Generation (RAG) applications by securely combining Foundation Models with your private data.&nbsp;</p>
                </div>
              </div>
              
              
              <a class="unlocking_ai-link" href="https://www.clarifai.com/solutions/retreival-augmented-generation">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>

</div><!--end widget-span -->
</div><!--end row-->
</div><!--end row-wrapper -->

</div><!--end widget-span -->
</div><!--end row-->
</div><!--end row-wrapper -->

<div class="row-fluid-wrapper row-depth-1 row-number-15 dnd_area-row-6-padding dnd-section dnd_area-row-6-force-full-width-section">
<div class="row-fluid ">
<div class="span12 widget-span widget-type-cell cell_17417067756572-padding dnd-column" style="" data-widget-type="cell" data-x="0" data-w="12">

<div class="row-fluid-wrapper row-depth-1 row-number-16 dnd-row">
<div class="row-fluid ">
<div class="span12 widget-span widget-type-custom_widget dnd-module" style="" data-widget-type="custom_widget" data-x="0" data-w="12">
<div id="hs_cos_wrapper_widget_1741706775214" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" style="" data-hs-cos-general-type="widget" data-hs-cos-type="module"><div class="roadmap_ai">
  <div class="content-wrapper">
    <div class="roadmap_ai-heading">
      <h2>AI That Delivers Real Results.</h2>
<p>From content moderation to AI automation, Clarifai helps companies deploy AI at scale.</p>
    </div>
    <div class="roadmap_ai-row">
      <div class="roadmap_ai-lft">
        <div class="roadmap_aia-lft">
          <div class="roadmap_aia-lftInr">
            <div class="roadmap_aia-logo">
              
              
              
              
              
              
              <img src="https://www.clarifai.com/hs-fs/hubfs/openTable-1.png?width=154&amp;height=35&amp;name=openTable-1.png" alt="openTable-1" loading="lazy" width="154" height="35" style="max-width: 100%; height: auto;" srcset="https://www.clarifai.com/hs-fs/hubfs/openTable-1.png?width=77&amp;height=18&amp;name=openTable-1.png 77w, https://www.clarifai.com/hs-fs/hubfs/openTable-1.png?width=154&amp;height=35&amp;name=openTable-1.png 154w, https://www.clarifai.com/hs-fs/hubfs/openTable-1.png?width=231&amp;height=53&amp;name=openTable-1.png 231w, https://www.clarifai.com/hs-fs/hubfs/openTable-1.png?width=308&amp;height=70&amp;name=openTable-1.png 308w, https://www.clarifai.com/hs-fs/hubfs/openTable-1.png?width=385&amp;height=88&amp;name=openTable-1.png 385w, https://www.clarifai.com/hs-fs/hubfs/openTable-1.png?width=462&amp;height=105&amp;name=openTable-1.png 462w" sizes="(max-width: 154px) 100vw, 154px">
              
            </div>
            <div class="roadmap_aia-desc">
              <h5>Opentable reduced support tickets by 48% by leveraging AI deployed by Clarifai</h5>
            </div>
            <div class="roadmap_aia-link">
              
              
              <a href="">
                Read more<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewbox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.3 3.7L13.1 7.5L1 7.5L1 8.5L13.1 8.5L9.3 12.3L10 13L15 8L10 3L9.3 3.7Z" fill="white" /></svg>
              </a>
            </div>
          </div>
        </div>
        <div class="roadmap_aia-rgt">
          <div class="roadmap_aia-img" style="background-image: url(https://www.clarifai.com/hubfs/image%20247.jpg);">

          </div>
        </div>
      </div>
      <div class="roadmap_ai-rgt">
        <div class="roadmap_ai-stats">
          <div class="roadmap_ai-count">
            <div class="roadmap_ai-num">
              67
            </div>
            <div class="roadmap_ai-percent">
              %
            </div>
          </div>
          <div class="roadmap_ai-desc">
            <p>of orgs are concerned with misuse of data or compliance.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="roadmap_sas-row">
      <div class="roadmap_sas-col roadmap_sas-col1">
        <div class="roadmap_sas-colinr">
          <div class="roadmap_sas-stats">
            <div class="roadmap_sas-count">
              <div class="roadmap_sas-num">
                78
              </div>
              <div class="roadmap_sas-percent">
                %
              </div>
            </div>
            <div class="roadmap_sas-desc">
              <p>of orgs believe they face challenges hiring AI talent</p>
            </div>
          </div>
        </div>
      </div>
      <div class="roadmap_sas-col roadmap_sas-col2">
        <div class="roadmap_sas-colinr">
          <div class="roadmap_sas-img">
            
            
            
            
            <img src="https://www.clarifai.com/hs-fs/hubfs/canva-img.png?width=493&amp;height=300&amp;name=canva-img.png" alt="canva-img" loading="" width="493" height="300" srcset="https://www.clarifai.com/hs-fs/hubfs/canva-img.png?width=247&amp;height=150&amp;name=canva-img.png 247w, https://www.clarifai.com/hs-fs/hubfs/canva-img.png?width=493&amp;height=300&amp;name=canva-img.png 493w, https://www.clarifai.com/hs-fs/hubfs/canva-img.png?width=740&amp;height=450&amp;name=canva-img.png 740w, https://www.clarifai.com/hs-fs/hubfs/canva-img.png?width=986&amp;height=600&amp;name=canva-img.png 986w, https://www.clarifai.com/hs-fs/hubfs/canva-img.png?width=1233&amp;height=750&amp;name=canva-img.png 1233w, https://www.clarifai.com/hs-fs/hubfs/canva-img.png?width=1479&amp;height=900&amp;name=canva-img.png 1479w" sizes="(max-width: 493px) 100vw, 493px">
            
          </div>
        </div>
      </div>
      <div class="roadmap_sas-col roadmap_sas-col3">
        <div class="roadmap_sas-colinr">
          <div class="roadmap_sas-wrap">
            <div class="roadmap_sas-logo">
              
              
              
              
              
              
              <img src="https://www.clarifai.com/hubfs/Acquia.svg" alt="Acquia" loading="lazy" width="145" height="32" style="max-width: 100%; height: auto;">
              
            </div>
            <div class="roadmap_sas-cnt">
              <p>Acquia integrated Clarifai to automate metadata tagging to speed labeling by 100x and improve asset searchability.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>

</div><!--end widget-span -->
</div><!--end row-->
</div><!--end row-wrapper -->

</div><!--end widget-span -->
</div><!--end row-->
</div><!--end row-wrapper -->

<div class="row-fluid-wrapper row-depth-1 row-number-17 dnd-section dnd_area-row-7-force-full-width-section dnd_area-row-7-padding">
<div class="row-fluid ">
<div class="span12 widget-span widget-type-cell dnd-column cell_17417069646492-padding" style="" data-widget-type="cell" data-x="0" data-w="12">

<div class="row-fluid-wrapper row-depth-1 row-number-18 dnd-row">
<div class="row-fluid ">
<div class="span12 widget-span widget-type-custom_widget dnd-module" style="" data-widget-type="custom_widget" data-x="0" data-w="12">
<div id="hs_cos_wrapper_widget_1741706964201" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" style="" data-hs-cos-general-type="widget" data-hs-cos-type="module"><div class="for_develop">
  <div class="content-wrapper">
    <div class="for_develop-row">
      <div class="for_develop-lft">
        <div class="for_develop-lftinr">
          <div class="get_started-row">
            <div class="get_started-lft">
              <div class="get_started-content">
                <h4>Need services? Contact us for professional services ranging from AI Sprints to Custom AI development.</h4>
              </div>
              <div class="get_started-btn">
                
                
                <a href="">
                  Contact us
                </a>
              </div>
            </div>
            <div class="get_started-rgt">
              <div class="get_started-img desktop_view">
                
                
                
                
                
                
                <img src="https://www.clarifai.com/hs-fs/hubfs/mesh-gradient.png?width=320&amp;height=344&amp;name=mesh-gradient.png" alt="mesh-gradient" loading="lazy" width="320" height="344" style="max-width: 100%; height: auto;" srcset="https://www.clarifai.com/hs-fs/hubfs/mesh-gradient.png?width=160&amp;height=172&amp;name=mesh-gradient.png 160w, https://www.clarifai.com/hs-fs/hubfs/mesh-gradient.png?width=320&amp;height=344&amp;name=mesh-gradient.png 320w, https://www.clarifai.com/hs-fs/hubfs/mesh-gradient.png?width=480&amp;height=516&amp;name=mesh-gradient.png 480w, https://www.clarifai.com/hs-fs/hubfs/mesh-gradient.png?width=640&amp;height=688&amp;name=mesh-gradient.png 640w, https://www.clarifai.com/hs-fs/hubfs/mesh-gradient.png?width=800&amp;height=860&amp;name=mesh-gradient.png 800w, https://www.clarifai.com/hs-fs/hubfs/mesh-gradient.png?width=960&amp;height=1032&amp;name=mesh-gradient.png 960w" sizes="(max-width: 320px) 100vw, 320px">
                
              </div>
              <div class="get_started-img mobile_view">
                
                
                
                
                <img src="https://www.clarifai.com/hs-fs/hubfs/mesh-gradient--2.png?width=580&amp;height=450&amp;name=mesh-gradient--2.png" alt="mesh-gradient--2" loading="" width="580" height="450" srcset="https://www.clarifai.com/hs-fs/hubfs/mesh-gradient--2.png?width=290&amp;height=225&amp;name=mesh-gradient--2.png 290w, https://www.clarifai.com/hs-fs/hubfs/mesh-gradient--2.png?width=580&amp;height=450&amp;name=mesh-gradient--2.png 580w, https://www.clarifai.com/hs-fs/hubfs/mesh-gradient--2.png?width=870&amp;height=675&amp;name=mesh-gradient--2.png 870w, https://www.clarifai.com/hs-fs/hubfs/mesh-gradient--2.png?width=1160&amp;height=900&amp;name=mesh-gradient--2.png 1160w, https://www.clarifai.com/hs-fs/hubfs/mesh-gradient--2.png?width=1450&amp;height=1125&amp;name=mesh-gradient--2.png 1450w, https://www.clarifai.com/hs-fs/hubfs/mesh-gradient--2.png?width=1740&amp;height=1350&amp;name=mesh-gradient--2.png 1740w" sizes="(max-width: 580px) 100vw, 580px">
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="for_develop-rgt">
        <div class="for_develop-rgtinr">
          <div class="for_develop-title">
            <h4>For Developers</h4>
          </div>
          <div class="for_develop-listing">
            <ul>
              
              <li>
                
                
                <a href="https://www.clarifai.com/accelerate-ai-with-clarifais-new-ai-sprints">
                  AI Sprints<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewbox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.3 3.7L13.1 7.5L1 7.5L1 8.5L13.1 8.5L9.3 12.3L10 13L15 8L10 3L9.3 3.7Z" fill="white" /></svg>
                </a>
              </li>
              
              <li>
                
                
                <a href="https://docs.clarifai.com/">
                  Documentation<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewbox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.3 3.7L13.1 7.5L1 7.5L1 8.5L13.1 8.5L9.3 12.3L10 13L15 8L10 3L9.3 3.7Z" fill="white" /></svg>
                </a>
              </li>
              
              <li>
                
                
                <a href="https://www.clarifai.com/company/resources">
                  Resources<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewbox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.3 3.7L13.1 7.5L1 7.5L1 8.5L13.1 8.5L9.3 12.3L10 13L15 8L10 3L9.3 3.7Z" fill="white" /></svg>
                </a>
              </li>
              
              <li>
                
                
                <a href="https://discord.com/invite/WgUvPK4pVD">
                  Discord<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewbox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.3 3.7L13.1 7.5L1 7.5L1 8.5L13.1 8.5L9.3 12.3L10 13L15 8L10 3L9.3 3.7Z" fill="white" /></svg>
                </a>
              </li>
              
              <li>
                
                
                
                
                <a href="mailto:support@clarifai.com">
                  Support<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewbox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.3 3.7L13.1 7.5L1 7.5L1 8.5L13.1 8.5L9.3 12.3L10 13L15 8L10 3L9.3 3.7Z" fill="white" /></svg>
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>

</div><!--end widget-span -->
</div><!--end row-->
</div><!--end row-wrapper -->

</div><!--end widget-span -->
</div><!--end row-->
</div><!--end row-wrapper -->

</div><!--end widget-span -->
</div>
</div>
</div>

      </main>

      
      <div data-global-resource-path="Clarifai_2024/templates/partials/footer.html"><footer class="footer">
  <div id="hs_cos_wrapper_module_171560324903472" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_module" style="" data-hs-cos-general-type="widget" data-hs-cos-type="module"><div class="main_footer">
  <div class="content-wrapper">
    <div class="main_ftr-top">
      <div class="main_ftr-lft">
        <div class="main_ftr-logo">
          
          
          <a class="ftr_logo-link" href="https://www.clarifai.com/" target="_blank" rel="noopener">
          </a>
          

          <span id="hs_cos_wrapper_module_171560324903472_" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_logo" style="" data-hs-cos-general-type="widget" data-hs-cos-type="logo"><a href="https://www.clarifai.com/" id="hs-link-module_171560324903472_" style="border-width:0px;border:0px;"><img src="https://www.clarifai.com/hubfs/footer-logo-icon.svg" class="hs-image-widget " height="35" style="height: auto;width:40px;border-width:0px;border:0px;" width="40" alt="footer-logo-icon" title="footer-logo-icon" loading=""></a></span>
        </div>
        <div class="main_ftr-social-links">
          <ul>
            
            <li>
              
              
              <a href="https://www.linkedin.com/company/clarifai/" target="_blank" rel="noopener">
                
                
                
                
                
                
                <img src="https://www.clarifai.com/hubfs/linkedin-1.svg" alt="linkedin" loading="lazy" width="25" height="25" style="max-width: 100%; height: auto;">
                
              </a>
            </li>
            
            <li>
              
              
              <a href="https://twitter.com/clarifai" target="_blank" rel="noopener">
                
                
                
                
                <img src="https://www.clarifai.com/hubfs/twitter-1.svg" alt="twitter-1" loading="" width="19" height="21">
                
              </a>
            </li>
            
            <li>
              
              
              <a href="https://www.youtube.com/channel/UCGmfV4cQHwk6qCnLEYfgzIA" target="_blank" rel="noopener">
                
                
                
                
                <img src="https://www.clarifai.com/hubfs/youtube.svg" alt="youtube" loading="" width="26" height="25">
                
              </a>
            </li>
            
            <li>
              
              
              <a href="https://www.facebook.com/Clarifai" target="_blank" rel="noopener">
                
                
                
                
                <img src="https://www.clarifai.com/hubfs/facebook.svg" alt="facebook" loading="" width="25" height="25">
                
              </a>
            </li>
            
            <li>
              
              
              <a href="https://www.linkedin.com/company/clarifai/" target="_blank" rel="noopener">
                
                
                
                
                
                
                <img src="https://www.clarifai.com/hubfs/linkedin-1.svg" alt="linkedin" loading="lazy" width="25" height="25" style="max-width: 100%; height: auto;">
                
              </a>
            </li>
            
          </ul>
        </div>
      </div>
      <div class="main_ftr-rgt">
        <div class="main_ftr-col">
          <div class="main_ftr-colInr">
            <div class="main_ftr-title">
              <h6>Why Clarifai</h6>
            </div>
            <div class="main_ftr-menu">
              <span id="hs_cos_wrapper_module_171560324903472_" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_simple_menu" style="" data-hs-cos-general-type="widget" data-hs-cos-type="simple_menu"><div id="hs_menu_wrapper_module_171560324903472_" class="hs-menu-wrapper active-branch flyouts hs-menu-flow-horizontal" role="navigation" data-sitemap-name="" data-menu-id="" aria-label="Navigation Menu">
 <ul role="menu">
  <li class="hs-menu-item hs-menu-depth-1" role="none"><a href="https://www.clarifai.com/why" role="menuitem" target="_self">Our methodology</a></li>
 </ul>
</div></span>
            </div>
          </div>
        </div>
        <div class="main_ftr-col">
          <div class="main_ftr-colInr">
            <div class="main_ftr-title">
              <h6>The Platform</h6>
            </div>
            <div class="main_ftr-menu">
              <span id="hs_cos_wrapper_module_171560324903472_" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_simple_menu" style="" data-hs-cos-general-type="widget" data-hs-cos-type="simple_menu"><div id="hs_menu_wrapper_module_171560324903472_" class="hs-menu-wrapper active-branch flyouts hs-menu-flow-horizontal" role="navigation" data-sitemap-name="" data-menu-id="" aria-label="Navigation Menu">
 <ul role="menu">
  <li class="hs-menu-item hs-menu-depth-1" role="none"><a href="https://www.clarifai.com/products/platform" role="menuitem" target="_self">Platform overview</a></li>
 </ul>
</div></span>
            </div>
          </div>
        </div>
        <div class="main_ftr-col">
          <div class="main_ftr-colInr">
            <div class="main_ftr-title">
              <h6>Solutions</h6>
            </div>
            <div class="main_ftr-menu">
              <span id="hs_cos_wrapper_module_171560324903472_" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_simple_menu" style="" data-hs-cos-general-type="widget" data-hs-cos-type="simple_menu"><div id="hs_menu_wrapper_module_171560324903472_" class="hs-menu-wrapper active-branch flyouts hs-menu-flow-horizontal" role="navigation" data-sitemap-name="" data-menu-id="" aria-label="Navigation Menu">
 <ul role="menu">
  <li class="hs-menu-item hs-menu-depth-1" role="none"><a href="https://www.clarifai.com/solutions/content-moderation" role="menuitem" target="_self">Content Moderation</a></li>
  <li class="hs-menu-item hs-menu-depth-1" role="none"><a href="https://www.clarifai.com/solutions/digital-asset-management" role="menuitem" target="_self">Digital Asset Management</a></li>
  <li class="hs-menu-item hs-menu-depth-1" role="none"><a href="https://www.clarifai.com/solutions/operationalize-ai" role="menuitem" target="_self">Operationalize AI</a></li>
  <li class="hs-menu-item hs-menu-depth-1" role="none"><a href="https://www.clarifai.com/solutions/retreival-augmented-generation" role="menuitem" target="_self">Retrieval augmented generation</a></li>
  <li class="hs-menu-item hs-menu-depth-1" role="none"><a href="https://www.clarifai.com/solutions/visual-inspection" role="menuitem" target="_self">Visual Inspection</a></li>
  <li class="hs-menu-item hs-menu-depth-1" role="none"><a href="https://www.clarifai.com/solutions/generative-ai" role="menuitem" target="_self">Generative AI</a></li>
 </ul>
</div></span>
            </div>
          </div>
        </div>
        <div class="main_ftr-col">
          <div class="main_ftr-colInr">
            <div class="main_ftr-title">
              <h6>Resources</h6>
            </div>
            <div class="main_ftr-menu">
              <span id="hs_cos_wrapper_module_171560324903472_" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_simple_menu" style="" data-hs-cos-general-type="widget" data-hs-cos-type="simple_menu"><div id="hs_menu_wrapper_module_171560324903472_" class="hs-menu-wrapper active-branch flyouts hs-menu-flow-horizontal" role="navigation" data-sitemap-name="" data-menu-id="" aria-label="Navigation Menu">
 <ul role="menu">
  <li class="hs-menu-item hs-menu-depth-1" role="none"><a href="https://docs.clarifai.com/" role="menuitem" target="_self">Docs</a></li>
  <li class="hs-menu-item hs-menu-depth-1" role="none"><a href="https://www.clarifai.com/company/resources" role="menuitem" target="_self">Resource Library</a></li>
  <li class="hs-menu-item hs-menu-depth-1" role="none"><a href="https://discord.com/invite/WgUvPK4pVD" role="menuitem" target="_self">Discord</a></li>
  <li class="hs-menu-item hs-menu-depth-1" role="none"><a href="https://www.clarifai.com/blog" role="menuitem" target="_self">Blog</a></li>
  <li class="hs-menu-item hs-menu-depth-1" role="none"><a href="https://www.clarifai.com/pricing" role="menuitem" target="_self">Pricing</a></li>
 </ul>
</div></span>
            </div>
          </div>
        </div>
        <div class="main_ftr-col">
          <div class="main_ftr-colInr">
            <div class="main_ftr-title">
              <h6>Company</h6>
            </div>
            <div class="main_ftr-menu">
              <span id="hs_cos_wrapper_module_171560324903472_" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_simple_menu" style="" data-hs-cos-general-type="widget" data-hs-cos-type="simple_menu"><div id="hs_menu_wrapper_module_171560324903472_" class="hs-menu-wrapper active-branch flyouts hs-menu-flow-horizontal" role="navigation" data-sitemap-name="" data-menu-id="" aria-label="Navigation Menu">
 <ul role="menu">
  <li class="hs-menu-item hs-menu-depth-1" role="none"><a href="https://www.clarifai.com/company/about" role="menuitem" target="_self">About</a></li>
  <li class="hs-menu-item hs-menu-depth-1" role="none"><a href="https://www.clarifai.com/company/careers" role="menuitem" target="_self">Careers</a></li>
  <li class="hs-menu-item hs-menu-depth-1" role="none"><a href="https://www.clarifai.com/company/press" role="menuitem" target="_self">Press</a></li>
  <li class="hs-menu-item hs-menu-depth-1" role="none"><a href="https://www.clarifai.com/company/events" role="menuitem" target="_self">Events</a></li>
  <li class="hs-menu-item hs-menu-depth-1" role="none"><a href="https://www.clarifai.com/company/awards" role="menuitem" target="_self">Awards</a></li>
  <li class="hs-menu-item hs-menu-depth-1" role="none"><a href="https://trust.clarifai.com/" role="menuitem" target="_self">Security Trust Center</a></li>
 </ul>
</div></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main_ftr-social-links tab-view">
      <ul>
        
        <li>
          
          
          <a href="https://www.linkedin.com/company/clarifai/" target="_blank" rel="noopener">
            
            
            
            
            
            
            <img src="https://www.clarifai.com/hubfs/linkedin-1.svg" alt="linkedin" loading="lazy" width="25" height="25" style="max-width: 100%; height: auto;">
            
          </a>
        </li>
        
        <li>
          
          
          <a href="https://twitter.com/clarifai" target="_blank" rel="noopener">
            
            
            
            
            <img src="https://www.clarifai.com/hubfs/twitter-1.svg" alt="twitter-1" loading="" width="19" height="21">
            
          </a>
        </li>
        
        <li>
          
          
          <a href="https://www.youtube.com/channel/UCGmfV4cQHwk6qCnLEYfgzIA" target="_blank" rel="noopener">
            
            
            
            
            <img src="https://www.clarifai.com/hubfs/youtube.svg" alt="youtube" loading="" width="26" height="25">
            
          </a>
        </li>
        
        <li>
          
          
          <a href="https://www.facebook.com/Clarifai" target="_blank" rel="noopener">
            
            
            
            
            <img src="https://www.clarifai.com/hubfs/facebook.svg" alt="facebook" loading="" width="25" height="25">
            
          </a>
        </li>
        
        <li>
          
          
          <a href="https://www.linkedin.com/company/clarifai/" target="_blank" rel="noopener">
            
            
            
            
            
            
            <img src="https://www.clarifai.com/hubfs/linkedin-1.svg" alt="linkedin" loading="lazy" width="25" height="25" style="max-width: 100%; height: auto;">
            
          </a>
        </li>
        
      </ul>
    </div>

    <div class="main_ftr-btm">
      <div class="main_ftr-copyright">
        <p>©&nbsp;2024&nbsp;Clarifai, Inc. | All rights reserved</p>
      </div>
      <div class="main_ftr-plinks">
        <span id="hs_cos_wrapper_module_171560324903472_" class="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_simple_menu" style="" data-hs-cos-general-type="widget" data-hs-cos-type="simple_menu"><div id="hs_menu_wrapper_module_171560324903472_" class="hs-menu-wrapper active-branch flyouts hs-menu-flow-horizontal" role="navigation" data-sitemap-name="" data-menu-id="" aria-label="Navigation Menu">
 <ul role="menu">
  <li class="hs-menu-item hs-menu-depth-1" role="none"><a href="https://www.clarifai.com/company/terms" role="menuitem" target="_self">Terms of Service</a></li>
  <li class="hs-menu-item hs-menu-depth-1" role="none"><a href="https://www.clarifai.com/company/dmca" role="menuitem" target="_self">Content Takedown</a></li>
  <li class="hs-menu-item hs-menu-depth-1" role="none"><a href="https://www.clarifai.com/company/privacy-policy" role="menuitem" target="_self">Privacy Policy</a></li>
 </ul>
</div></span>
      </div>
    </div>
  </div>
</div>

</div>
</footer></div>
      
    </div>
    
    
    
<!-- HubSpot performance collection script -->
<script defer src="/hs/hsstatic/content-cwv-embed/static-1.1293/embed.js"></script>
<script src="https://www.clarifai.com/hs-fs/hubfs/hub_generated/template_assets/1/167022450794/1742714364549/template_main.min.js"></script>
<script>
var hsVars = hsVars || {}; hsVars['language'] = 'en';
</script>

<script src="/hs/hsstatic/cos-i18n/static-1.53/bundles/project.js"></script>
<script src="https://www.clarifai.com/hs-fs/hubfs/hub_generated/module_assets/1/167701623670/1742810339724/module_Header.min.js"></script>

<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script>

  const accordions = document.querySelectorAll(".accordion");
  const accordionImages = document.querySelector(".accordion_images"); // Get the accordion_images container

  const openAccordion = (accordion) => {
    const content = accordion.querySelector(".accordion_content");
    accordion.classList.add("accordion_active");

  };

  const closeAccordion = (accordion) => {
    const content = accordion.querySelector(".accordion_content");
    accordion.classList.remove("accordion_active");

  };

  const activateImages = (index) => {
    const images = accordionImages.querySelectorAll("img");
    images.forEach((img, i) => {
      if (i === index) {
        img.classList.add("active");
      } else {
        img.classList.remove("active");
      }
    });
  };

  accordions.forEach((accordion, index) => {
    const intro = accordion.querySelector(".accordion_intro");
    const content = accordion.querySelector(".accordion_content");

    intro.onclick = () => {
      if (content.style.maxHeight) {
        closeAccordion(accordion);
        activateImages(-1);
      } else {
        accordions.forEach((accordion) => closeAccordion(accordion));
        openAccordion(accordion);
        activateImages(index);
      }
    };
  });

  //default click first accordion
  const firstAccordion = document.querySelectorAll(".accordion_intro")[0];
  firstAccordion.click();


</script>

<script src="https://www.clarifai.com/hs-fs/hubfs/hub_generated/template_assets/1/32403573546/1742714365368/template_main-v2.min.js"></script>

<!-- Start of HubSpot Analytics Code -->
<script type="text/javascript">
var _hsq = _hsq || [];
_hsq.push(["setContentType", "standard-page"]);
_hsq.push(["setCanonicalUrl", "https:\/\/www.clarifai.com"]);
_hsq.push(["setPageId", "167227799209"]);
_hsq.push(["setContentMetadata", {
    "contentPageId": 167227799209,
    "legacyPageId": "167227799209",
    "contentFolderId": null,
    "contentGroupId": null,
    "abTestId": null,
    "languageVariantId": 167227799209,
    "languageCode": "en",
    
    
}]);
</script>

<script type="text/javascript" id="hs-script-loader" async defer src="/hs/scriptloader/4505120.js"></script>
<!-- End of HubSpot Analytics Code -->


<script type="text/javascript">
var hsVars = {
    render_id: "8d5019f6-ec19-4b97-9393-3d5a899c5793",
    ticks: 1742942632640,
    page_id: 167227799209,
    
    content_group_id: 0,
    portal_id: 4505120,
    app_hs_base_url: "https://app.hubspot.com",
    cp_hs_base_url: "https://cp.hubspot.com",
    language: "en",
    analytics_page_type: "standard-page",
    scp_content_type: "",
    
    analytics_page_id: "167227799209",
    category_id: 1,
    folder_id: 0,
    is_hubspot_user: false
}
</script>


<script defer src="/hs/hsstatic/HubspotToolsMenu/static-1.432/js/index.js"></script>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PLV65FL" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.1/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>


  
</body></html>
