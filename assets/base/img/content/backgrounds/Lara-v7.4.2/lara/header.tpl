<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="{$charset}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

    <title>{$lara_options.settings.logo_lg_txt|default:'WHMCS'} - {$pagetitle}</title>

    <link href="//fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic" rel="stylesheet">
    <link href="templates/{$template}/css/all.min.css?v={$versionHash}" rel="stylesheet" />
	
	<script type="text/javascript">
		var adminBaseRoutePath = "{\WHMCS\Admin\AdminServiceProvider::getAdminRouteBase()}",
            whmcsBaseUrl = "{\WHMCS\Utility\Environment\WebHelper::getBaseUrl()}";
			
		function getlrFullPath(lrpath){
			return whmcsBaseUrl + adminBaseRoutePath + '/' + lrpath;
		}
	</script>
	
    <script type="text/javascript" src="templates/{$template}/js/scripts.min.js?v={$versionHash}"></script>
	
	{if {$sidebar eq "home"} && {"lrgawidget"|in_array:$lara_options.cuser.permissions} && {{${"lara_lrgawidget_state"}} ne "closed"}}
	<link rel="stylesheet" href="templates/{$template}/dist/css/lrgapro-main.css?larav={$lara_options.settings.version}">
	{/if}
	
	<!-- Lara Javascript -->
	<script type="text/javascript" src="templates/{$template}/dist/js/lara-main.js?larav={$lara_options.settings.version}"></script>
	
    <script type="text/javascript">
	
		$(function () {
			setNavigation();
			$.AdminLTE.layout.fix();
		});

		function setNavigation() {
			var fullpath = $(location).attr("href");
			var path = fullpath.substr(fullpath.lastIndexOf('/') + 1);
			var newPath = $(location).attr('pathname')+$(location).attr('search'); 

			$(".sidebar-menu a").each(function () {
				var href = $(this).attr('href');
				if ((decodeURI(path) === href) || (decodeURI(newPath) === href)) {
					if($(this).attr('id')){
						$(this).parents('li').addClass('active');
					}
				}
			});
		}	
	
        var datepickerformat = "{$datepickerformat}",
            csrfToken="{$csrfToken}";

        {if $jquerycode}
            $(document).ready(function(){ldelim}
                {$jquerycode}
            {rdelim});
        {/if}
        {if $jscode}
            {$jscode}
        {/if}
    </script>

    {$headoutput}

	<!-- Lara main CSS -->
    <link href="templates/{$template}/dist/css/lara-main.css?larav={$lara_options.settings.version}" rel="stylesheet" type="text/css" />
	
	<!-- Custom JavaScript and Style Sheets-->
	{if file_exists("{$smarty.current_dir}/custom/custom.css")}
	<link href="templates/{$template}/custom/custom.css" rel="stylesheet" type="text/css" />
	{/if}
	{if file_exists("{$smarty.current_dir}/custom/custom.js")}
	<script type="text/javascript" src="templates/{$template}/custom/custom.js" ></script>
	{/if}
    
  </head>
 
  <body class="{if $lara_current_skin} {$lara_current_skin} {else} skin-blue {/if} sidebar-mini {if {$minsidebar} || {$lara_lrsidebar eq 'expandonhover'}} sidebar-collapse {/if} {$lara_lrlayout} {$lara_lrsidebar}" data-phone-cc-input="{$phoneNumberInputStyle}">
    
	<script type="text/javascript">
	{literal}
		if (typeof (Storage) !== "undefined") {	if (localStorage.getItem('controlsidebaropen') == 1){ $('body').addClass('control-sidebar-open');}}
	{/literal}
	</script>
  
  {$headeroutput}
  
    <div class="wrapper">
	

      <!-- Main Header -->
      <header class="main-header">

        <!-- Logo -->
        <a href="index.php" class="logo">
          <!-- mini logo for sidebar mini 50x50 pixels -->
			<span class="logo-mini">
			  {if !empty($lara_options.settings.logo_mini_img)}
				<img src="{$lara_options.settings.logo_mini_img}"></img>
			  {else}
				{$lara_options.settings.logo_mini_txt|default:'WHM'}
			  {/if}
			</span>
		  <!-- logo for regular state and mobile devices -->
			<span class="logo-lg">
			  {if !empty($lara_options.settings.logo_lg_img)}
				<img src="{$lara_options.settings.logo_lg_img}"></img>
			  {else}
				{$lara_options.settings.logo_lg_txt|default:'WHMCS'}
			  {/if}
			</span>
        </a>

        <!-- Header Navbar -->
        <nav class="navbar navbar-static-top" role="navigation">
          <!-- Sidebar toggle button-->
          <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span class="sr-only">Toggle navigation</span>
          </a>
          <!-- Navbar Right Menu -->
          <div class="navbar-custom-menu">

		  <ul class="nav navbar-nav">
			
				<li class="dropdown messages-menu hidden-xs " id="tnsearchbox" >
				   <!-- the search button -->
				   <form class="navbar-form " role="search" id="navbarfrmintellisearch" class="dropdown-toggle" data-toggle="dropdown">
						<input type="hidden" name="intellisearch" value="1" />
						<input type="hidden" name="token" value="{$csrfToken}" />	  
						<div class="input-group" >
							<input type="text" name="value" class="form-control" id="navbar-search-input" placeholder="{$_ADMINLANG.global.intellisearch}...">
							<span class="input-group-btn" >
								<button type="submit" name="search" id="tnsearch-btn" class="btn btn-flat" style="margin-left: 0px;"><i id="tnsearch-icon" class="fa fa-search fa-fw"></i></button>
							</span>

						</div>
					</form>

					<ul class="dropdown-menu navbar-form-results">
						<li class="header">
								<span class="pull-left" id="tnsearchstats"></span>
								<span class="pull-right">
									<input type="checkbox" class="lara-bootstrap-switch" {if $lara_qstoggle == "true"} checked="true" {/if} name="qstoggle" data-label-text="Quick Search" data-size="mini" />
								</span>
						</li>
						<li>
							<ul class="menu sscroll" id="tnsearchresults"></ul>
						</li>
						<li class="footer"><a href="#" onclick="($('#tnsearchbox').removeClass('open'));">{$_ADMINLANG.global.close}</a></li>
					</ul>
				</li>
				
				{if {"lrchatwidget"|in_array:$lara_options.cuser.permissions}}
					{include file="$template/widgets/chat/chat_main_nav.tpl"}
				{/if}

				<li class="lr_tooltip">
					 <span class="lr_tooltiptext">({$sidebarstats.orders.pending|default:'0'}) - {$_ADMINLANG.stats.pendingorders}</span>
					<a href="orders.php?status=Pending">
						<i class="fa fa-shopping-cart"></i>
						{if $sidebarstats.orders.pending > 0 } 
						<span class="label label-warning">{$sidebarstats.orders.pending}</span>
						{/if}						
					</a>
				</li>				
				
				<li class="lr_tooltip">
					 <span class="lr_tooltiptext">({$sidebarstats.invoices.overdue|default:'0'}) - {$_ADMINLANG.stats.overdueinvoices}</span>				
					<a href="invoices.php?status=Overdue">
						<i class="fa fa-usd"></i>
						{if $sidebarstats.invoices.overdue > 0 } 
						<span class="label label-warning">{$sidebarstats.invoices.overdue}</span>
						{/if}						
					</a>
				</li>

				<li class="lr_tooltip">
					 <span class="lr_tooltiptext">({$ticketsawaitingreply|default:'0'}) - {$_ADMINLANG.stats.ticketsawaitingreply}</span>				
					<a href="supporttickets.php">
						<i class="fa fa-ticket"></i>
						{if $ticketsawaitingreply > 0 } 
						<span class="label label-warning">{$ticketsawaitingreply}</span>
						{/if}						
					</a>
				</li>
				
			{if {$topBarNotification}}
				<li class="dropdown notifications-menu hidden-xs">
				  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
					<i class="fa fa-exclamation-triangle"></i>
					<span class="label label-warning">*</span>
				  </a>
				  <ul class="dropdown-menu">
					<li class="header">Notifications</li>
					<li>
					  <!-- inner menu: contains the actual data -->
					  <ul class="menu">
						<li>
							{$topBarNotification}
						</li>
					  </ul>
					</li>
				  </ul>
				</li>
			{/if}				

				<!-- User Account Menu -->
				<li class="dropdown user user-menu">
				  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
					<img class="user-image" src="//www.gravatar.com/avatar.php?gravatar_id={$lara_adminemail_md5}" style="background-color: #ffffff;"/>
					<span class="hidden-xs hidden-sm">{$admin_username}</span>
				  </a>
				  <ul class="dropdown-menu">
					<!-- User image -->
					<li class="user-header">
					  <img src="//www.gravatar.com/avatar.php?gravatar_id={$lara_adminemail_md5}" class="img-circle"  style="background-color: #ffffff;" />
					</li>
					<div class="box">
						<div class="box-body">
							<a href="index.php" class="btn btn-block btn-primary btn-social"><i class="fa fa-home "></i>{$_ADMINLANG.home.title}</a>
							<a href="../" class="btn btn-block btn-primary btn-social"><i class="fa fa-sign-in "></i>{$_ADMINLANG.global.clientarea}</a>
							<a href="#" data-toggle="modal" data-target="#myNotes" class="btn btn-block btn-primary btn-social"><i class="fa fa-files-o"></i>{$_ADMINLANG.global.mynotes}</a>
							<a href="myaccount.php" class="btn btn-block btn-primary btn-social"><i class="fa fa-wrench"></i>{$_ADMINLANG.global.myaccount}</a>
							<a id="logout" href="logout.php" class="btn btn-block btn-danger btn-social"><i class="fa fa-sign-out "></i>{$_ADMINLANG.global.logout}</a>
						</div>
					</div>
					<!-- Menu Body -->
					<!-- Menu Footer-->
				  </ul>
				</li>				

			    <!-- Control Sidebar Toggle Button -->
				  {if ($sidebar eq "support") && $inticket}{assign var=sidebaractiveicon value="fa-ticket" nocache}{assign var=ticketTabStatus value="active" scope="global" nocache}
				  {elseif ($sidebar eq "addonmodules") && ($addon_module_sidebar) }{assign var=sidebaractiveicon value="fa-puzzle-piece" nocache}{assign var=addonmodulesTabStatus value="active" scope="global" nocache}
				  {else}{assign var=sidebaractiveicon value="fa-cogs" nocache}{assign var=homeTabStatus value="active" scope="global" nocache}
				  {/if}	
				   <li>
					<a href="#" data-toggle="control-sidebar" ><i id="sidebar-menu-active-icon" class="fa {$sidebaractiveicon}"></i></a>
				  </li>
            </ul>
          </div>
        </nav>
      </header>
	  
    {include file="$template/menu.tpl"}

    <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper" id="contentarea">
        <!-- Content Header (Page header) -->
		{if ($sidebar ne "home")}
        <section class="content-header">

            {if $helplink}
                <div class="contexthelp">
                    <a href="http://docs.whmcs.com/{$helplink}" target="_blank">
                        <img src="images/icons/help.png" border="0" align="absmiddle" />
                        {$_ADMINLANG.help.contextlink}
                    </a>
                </div>
            {/if}
			
	
          <h1>{$pagetitle}</h1>
        </section>
		{/if}

        <!-- Main content -->
        <section class="content">
		
		<div class="global-admin-warning{if !$globalAdminWarningMsg} hidden{/if}">
		     {$globalAdminWarningMsg}
		</div>		
		
		{include file="$template/widgets/lara_errors.tpl"}
