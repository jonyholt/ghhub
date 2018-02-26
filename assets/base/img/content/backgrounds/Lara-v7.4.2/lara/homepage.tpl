
<div class="clearfix"></div>

{if !empty($maintenancemode)}
    <div class="errorbox" style="font-size:14px;">
        {$_ADMINLANG.home.maintenancemode}
    </div>
    <br />
{/if}

{$infobox}


{foreach from=$addons_html item=addon_html}
    <div class="addon-html-output-container">
        {$addon_html}
    </div>
{/foreach}

<div class="lr-home-widgets-fixed" data-laracontainer="fixed">

{foreach $lara_options.cuser.sorted_widgets as $wID => $widget }
	{if {$widget->getId()|strtolower == "badges"} && {{${"lara_badges_state"}} ne "closed"}}
	<div data-larawidget="badges">
		{$widget->render()}
	</div>
		{break}
	{/if}
{/foreach}


{if {"lrgawidget"|in_array:$lara_options.cuser.permissions} && {{${"lara_lrgawidget_state"}} ne "closed"}}
	  {assign var=globalWidgetPermissions value=$lara_options.cuser.permissions scope="global" nocache}	
	<div data-larawidget="lrgawidget">
		{include file="$template/widgets/lrgawidget.tpl"}
	</div>
{/if}
</div>
<div class="lara-tablet-size-detector"></div>
<div class="lr-home-widgets-container" data-laracontainer="flex">
    <div class="lr-dashboard-panel-sizer"></div>
    {assign var=widgetsIcons value=["overview"       => "fa-line-chart",
									"automation"     => "fa-cogs",
									"support"        => "fa-phone-square",
									"billing"        => "fa-usd",
									"staff"          => "fa-user",
									"todo"           => "fa-list-ol",
									"clientactivity" => "fa-sign-in",
									"networkstatus"  => "fa-sitemap",
									"health"         => "fa-medkit",
									"activity"       => "fa-file-text"]}

    {foreach $lara_options.cuser.sorted_widgets as $wID => $widget name=counter}
		{if {$widget->getId()|strtolower != "badges"} && {{${"lara_`$widget->getId()|strtolower`_state"}} ne "closed"}}
		{assign var=cWidgetColumnSize value=$lara_options.cuser.widgets_sizes[$widget->getId()|strtolower]|default:$widget->getColumnSize()}

        <div id="panel{$widget->getId()}" class="lr-dashboard-panel-item lr-dashboard-panel-item-columns-{$cWidgetColumnSize}" data-larawidget="{$widget->getId()|strtolower}" data-item-id="{$wID}" data-item-columns="{$cWidgetColumnSize}">
            {if $widget->showWrapper()}
                <div class="panel panel-default lr-panel-default widget-{$widget->getId()|strtolower}" data-widget="{$widget->getId()}">
                    <div class="panel-heading">
                        <div class="widget-tools">
							<span class="lara-show-resize">
						    <a href="#" class="lrgawidget-compress" data-lrwidgetools='compress' style="display:none"><i class="fa fa-minus-square-o"></i></a>						
							<a href="#" class="lrgawidget-expand" data-lrwidgetools='expand' style="display:none"><i class="fa fa-plus-square-o"></i></a>
							</span>
                            <a href="#" class="widget-refresh"><i class="fa fa-refresh"></i></a>
							<a href="#" class="lrgawidget-close" data-lrwidgetools='remove'><i class="fa fa-times"></i></a>
                        </div>
                        <h3 class="panel-title"><i class="fa {$widgetsIcons[$widget->getId()|strtolower]|default:'fa-puzzle-piece'}"></i>{$widget->getTitle()}</h3>
                    </div>
                    <div class="panel-body">
            {/if}

            {$widget->render()}

            {if $widget->showWrapper()}
                    </div>
                </div>
            {/if}
        </div>
		{/if}
    {/foreach}
</div>	
<script type="text/javascript" src="templates/{$template}/dist/js/lara-homepage.js?larav={$lara_options.settings.version}"></script>

{$generateInvoices}
{$creditCardCapture}
