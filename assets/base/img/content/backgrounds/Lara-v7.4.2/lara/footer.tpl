	{if {"lrchatwidget"|in_array:$lara_options.cuser.permissions}}	 
		 {include file="$template/widgets/chat/chat_pop_up.tpl"}
	{/if}


        </section><!-- /.content -->
      </div><!-- /.content-wrapper -->


	  
      <!-- Main Footer -->
      <footer class="main-footer">
        <!-- To the right -->
        <div class="pull-right hidden-xs">
          {$smarty.now|date_format:"%A, %d %B %Y, %H:%M"}
        </div>
        <!-- Default to the left -->
        <strong>Copyright &copy; <a href="http://www.whmcs.com/" target="_blank">WHMCompleteSolution</a>.</strong> All rights reserved.
      </footer>
	  {include file="$template/sidebar.tpl"}


		<div id="greyout"></div>

			<form id="frmmynotes">
				<input type="hidden" name="action" value="savenotes" />
				<input type="hidden" name="token" value="{$csrfToken}" />
				<div class="modal fade modal-my-notes" id="myNotes">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header modal-warning">
								<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
								<h4 class="modal-title">{$_ADMINLANG.global.mynotes}</h4>
							</div>
							<div class="modal-body">
								<textarea id="mynotesbox" name="notes" rows="12" class="form-control">{$admin_notes}</textarea>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-default" data-dismiss="modal">{$_ADMINLANG.global.cancel}</button>
								<button type="button" class="btn btn-primary" onclick="notesclose('1')">{$_ADMINLANG.global.savechanges}</button>
							</div>
						</div>
					</div>
				</div>
			</form>

			{if $clientLimitNotification}
				<div class="client-limit-notification client-limit-notification-form panel panel-{$clientLimitNotification.class}" id="clientLimitNotification">
					<div class="panel-heading">
						<button type="button" class="close" id="btnClientLimitNotificationDismiss"><span aria-hidden="true">&times;</span></button>
						<h3 class="panel-title">
							<i class="fa {$clientLimitNotification.icon}"></i>
							<span>{$clientLimitNotification.title}</span>
							<small>({$clientLimitNotification.numberOfActiveClients} / {$clientLimitNotification.clientLimit})</small>
						</h3>
					</div>
					<div class="panel-body">
						<p>{$clientLimitNotification.body}</p>
						<form method="post" action="{$clientLimitNotification.upgradeUrl}" target="_blank" data-fetch-url="{routePath('admin-help-license-upgrade-data')}">
							<input type="hidden" name="token" value="{$csrfToken}">
							<input type="hidden" name="getupgradedata" value="1">
							<input type="hidden" name="license_key" value="" class="input-license-key">
							<input type="hidden" name="member_data" value="" class="input-member-data">
							<div class="links">
								<a href="#" id="btnClientLimitNotificationDontShowAgain" class="btn btn-xs btn-link pull-right">Don't show this again</a>
								<button type="submit" class="btn btn-xs btn-{$clientLimitNotification.class}{if $clientLimitNotification.autoUpgradeEnabled} hidden{/if}" id="btnClientLimitNotificationUpgrade">Upgrade Now</button>
								{if $clientLimitNotification.learnMoreUrl}
									<a href="{$clientLimitNotification.learnMoreUrl}" class="btn btn-xs {if $clientLimitNotification.autoUpgradeEnabled}btn-{$clientLimitNotification.class}{else}btn-link{/if}" target="_blank">Learn more &raquo;</a>
								{/if}
							</div>
						</form>
					</div>
				</div>
			{/if}

			<div class="modal whmcs-modal fade" id="modalAjax" tabindex="-1" role="dialog" aria-hidden="true">
				<div class="modal-dialog">
					<div class="modal-content panel panel-primary">
						<div class="modal-header panel-heading" id="modalAjaxHeader">
							<button id="modalAjaxCloseSmall" type="button" class="close" data-dismiss="modal">
								<span aria-hidden="true">&times;</span>
								<span class="sr-only">Close</span>
							</button>
							<h4 class="modal-title" id="modalAjaxTitle">Title</h4>
						</div>
						<div class="modal-body panel-body" id="modalAjaxBody">
							Loading...
						</div>
						<div class="modal-footer panel-footer" id="modalAjaxFooter">
							<div id="modalFooterLeft"></div>
							<div class="pull-left loader" id="modalAjaxLoader">
								<i class="fa fa-circle-o-notch fa-spin"></i> Loading...
							</div>
							<button id="modalAjaxClose" type="button" class="btn btn-default" data-dismiss="modal">
								Close
							</button>
							<button type="button" class="btn btn-primary modal-submit" id="modalAjaxSubmit">
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
    </div><!-- ./wrapper -->
	{if {"lrchatwidget"|in_array:$lara_options.cuser.permissions}}
		<!-- https://notificationsounds.com/wake-up-tones/soft-bells-495 , license : https://creativecommons.org/licenses/by/4.0/legalcode -->
		<script type="text/javascript">
			var lrchataudio = new Audio(getlrFullPath('templates/{$template}/dist/media/soft-bells.mp3'));
		</script>
		<script src="templates/{$template}/dist/js/lrchat.js?larav={$lara_options.settings.version}"></script>	
	{/if}

	{if {$sidebar eq "home"} && {"lrgawidget"|in_array:$lara_options.cuser.permissions} && {{${"lara_lrgawidget_state"}} ne "closed"}}
		<script src="templates/{$template}/dist/js/lrgapro-main.js?larav={$lara_options.settings.version}"></script>
	{/if}
	
	{$footeroutput}
	
  </body>
</html>
