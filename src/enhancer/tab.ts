import Controls = require("VSS/Controls");
import TFS_Build_Contracts = require("TFS/Build/Contracts");
import TFS_Build_Extension_Contracts = require("TFS/Build/ExtensionContracts");
import DT_Client = require("TFS/DistributedTask/TaskRestClient");

function arrayBufferToString(buffer){
	var arr = new Uint8Array(buffer);
	var str = String.fromCharCode.apply(String, arr);
	return str;
}

function arrayBufferToString2(buffer){
	var newstring = '';
	var arr = new Uint8Array(buffer);
	var len = arr.byteLength;
	for (var i = 0; i < len; i++) {
		newstring += String.fromCharCode( arr[ i ] );
	}
   //var str = String.fromCharCode.apply(String, arr);
   return newstring;
}

function setStupidTimeout(someStupidString, attachementContent){
	setTimeout(function() {
		var s = document.createElement("script");
		s.innerHTML = arrayBufferToString(attachementContent);
		s.async = false;
		document.getElementById(someStupidString).appendChild(s)
	}, 1000);
}

function setStupidTimeout2(someStupidString, attachementContent){
	setTimeout(function() {
		var s = document.createElement("script");
		s.innerHTML = arrayBufferToString2(attachementContent);
		s.async = false;
		document.getElementById(someStupidString).appendChild(s)
	}, 1000);
}

function renderAttachmentContent(taskClient, build, projectId, attachmentType, scriptName1, scriptName2){
	taskClient.getPlanAttachments(
		projectId, 
		attachmentType, 
		build.orchestrationPlan.planId, 
		scriptName1
	).then((taskAttachments)=> {
		$.each(taskAttachments, (index, taskAttachment) => {
			if (taskAttachment._links && taskAttachment._links.self && taskAttachment._links.self.href) {
				taskClient.getAttachmentContent(
					projectId, 
					attachmentType, 
					build.orchestrationPlan.planId,
					taskAttachment.timelineId,
					taskAttachment.recordId,
					scriptName1,
					taskAttachment.name
				).then((attachementContent)=> {
					setStupidTimeout(scriptName2, attachementContent);
				});
			}
		});
	});
}

function renderAttachmentContent2(taskClient, build, projectId, attachmentType, scriptName1, scriptName2){
	taskClient.getPlanAttachments(
		projectId, 
		attachmentType, 
		build.orchestrationPlan.planId, 
		scriptName1
	).then((taskAttachments)=> {
		$.each(taskAttachments, (index, taskAttachment) => {
			if (taskAttachment._links && taskAttachment._links.self && taskAttachment._links.self.href) {
				taskClient.getAttachmentContent(
					projectId, 
					attachmentType, 
					build.orchestrationPlan.planId,
					taskAttachment.timelineId,
					taskAttachment.recordId,
					scriptName1,
					taskAttachment.name
				).then((attachementContent)=> {
					document.body.style.overflow = "visible";
					setStupidTimeout2(scriptName2, attachementContent);
				});
			}
		});
	});
}

export class InfoTab extends Controls.BaseControl {	
	constructor() {
		super();
	}

	public initialize(): void {
		super.initialize();
		// Get configuration that's shared between extension and the extension host
		var sharedConfig: TFS_Build_Extension_Contracts.IBuildResultsViewExtensionConfig = VSS.getConfiguration();
		let projectId = VSS.getWebContext().project.id;
		if(sharedConfig) {
			// register your extension with host through callback
			sharedConfig.onBuildChanged((build: TFS_Build_Contracts.Build) => {
				var taskClient = DT_Client.getClient();

				var list1 = [
					{name1: "firstscriptname", name2: "firstscript"},
					{name1: "fourthscriptname", name2: "fourthscript"},
					{name1: "fifthscriptname", name2: "fifthscript"},
					{name1: "sixthscriptname", name2: "sixthscript"},
					{name1: "seventhscriptname", name2: "seventhscript"},
					{name1: "ninthscriptname", name2: "ninthscript"},
					{name1: "eleventhscriptname", name2: "eleventhscript"},
				];				
				var list2 = [
					{name1: "tenthscriptname", name2: "tenthscript"},
					{name1: "twefthscriptname", name2: "twefthscript"},
					{name1: "replacedhtml", name2: "wrapper"},
					{name1: "eleventhscriptname", name2: "eleventhscript"},
				];
				list1.forEach(function (thing) {
					renderAttachmentContent(
						taskClient,
						build,
						projectId,
						"build",
						thing.name1,
						thing.name2
					);
				}); 
				list2.forEach(function (thing) {
					renderAttachmentContent2(
						taskClient,
						build,
						projectId,
						"build",
						thing.name1,
						thing.name2
					);
				});
			});
		} // if(sharedConfig) 
	} // initialize
}

InfoTab.enhance(InfoTab, $(".wrapper"),{});

// Notify the parent frame that the host has been loaded
VSS.notifyLoadSucceeded();

	
