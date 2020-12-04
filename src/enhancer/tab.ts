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
				taskClient.getPlanAttachments(
					projectId, 
					"build", 
					build.orchestrationPlan.planId, 
					"firstscriptname"
				).then((taskAttachments)=> {
					$.each(taskAttachments, (index, taskAttachment) => {
						if (taskAttachment._links && taskAttachment._links.self && taskAttachment._links.self.href) {
							taskClient.getAttachmentContent(
								projectId, 
								"build", 
								build.orchestrationPlan.planId,
								taskAttachment.timelineId,
								taskAttachment.recordId,
								"firstscriptname",
								taskAttachment.name
							).then((attachementContent)=> {
								document.body.style.overflow = "visible";
								var s = document.createElement("script");
								s.innerHTML = arrayBufferToString(attachementContent);
								s.async = false;
								document.getElementById("firstscript").appendChild(s);
							});
						}
					});
				});
				taskClient.getPlanAttachments(
					projectId, 
					"build", 
					build.orchestrationPlan.planId, 
					"secondscriptname"
				).then((taskAttachments)=> {
					$.each(taskAttachments, (index, taskAttachment) => {
						if (taskAttachment._links && taskAttachment._links.self && taskAttachment._links.self.href) {
							taskClient.getAttachmentContent(
								projectId, 
								"build", 
								build.orchestrationPlan.planId,
								taskAttachment.timelineId,
								taskAttachment.recordId,
								"secondscriptname",
								taskAttachment.name
							).then((attachementContent)=> {
								setStupidTimeout("secondscript", attachementContent);
							});
						}
					});
				});
				taskClient.getPlanAttachments(
					projectId, 
					"build", 
					build.orchestrationPlan.planId, 
					"fourthscriptname"
				).then((taskAttachments)=> {
					$.each(taskAttachments, (index, taskAttachment) => {
						if (taskAttachment._links && taskAttachment._links.self && taskAttachment._links.self.href) {							
							taskClient.getAttachmentContent(
								projectId, 
								"build", 
								build.orchestrationPlan.planId,
								taskAttachment.timelineId,
								taskAttachment.recordId,
								"fourthscriptname",
								taskAttachment.name
							).then((attachementContent)=> {
								setStupidTimeout("fourthscript", attachementContent);
							});
						}
					});
				});
				taskClient.getPlanAttachments(
					projectId, 
					"build", 
					build.orchestrationPlan.planId, 
					"fifthscriptname"
				).then((taskAttachments)=> {
					$.each(taskAttachments, (index, taskAttachment) => {
						if (taskAttachment._links && taskAttachment._links.self && taskAttachment._links.self.href) {
							taskClient.getAttachmentContent(
								projectId, 
								"build", 
								build.orchestrationPlan.planId,
								taskAttachment.timelineId,
								taskAttachment.recordId,
								"fifthscriptname",
								taskAttachment.name
							).then((attachementContent)=> {
								setStupidTimeout("fifthscript", attachementContent);
							});
						}
					});
				});
				taskClient.getPlanAttachments(
					projectId, 
					"build", 
					build.orchestrationPlan.planId, 
					"sixthscriptname"
				).then((taskAttachments)=> {
					$.each(taskAttachments, (index, taskAttachment) => {
						if (taskAttachment._links && 
							taskAttachment._links.self && 
							taskAttachment._links.self.href
						) {
							taskClient.getAttachmentContent(
								projectId, 
								"build", 
								build.orchestrationPlan.planId,
								taskAttachment.timelineId,
								taskAttachment.recordId,
								"sixthscriptname",
								taskAttachment.name
							).then((attachementContent)=> {
								setStupidTimeout("sixthscript", attachementContent);
							});
						}
					});
				});
				taskClient.getPlanAttachments(
					projectId, 
					"build", 
					build.orchestrationPlan.planId, 
					"seventhscriptname"
				).then((taskAttachments)=> {
					$.each(taskAttachments, (index, taskAttachment) => {
						if (taskAttachment._links && taskAttachment._links.self && taskAttachment._links.self.href) {
							taskClient.getAttachmentContent(
								projectId, 
								"build", 
								build.orchestrationPlan.planId,
								taskAttachment.timelineId,
								taskAttachment.recordId,
								"seventhscriptname",
								taskAttachment.name
							).then((attachementContent)=> {
								setStupidTimeout("seventhscript", attachementContent);
							});
						}
					});
				});
				taskClient.getPlanAttachments(
					projectId, 
					"build", 
					build.orchestrationPlan.planId, 
					"ninthscriptname"
				).then((taskAttachments)=> {
					$.each(taskAttachments, (index, taskAttachment) => {
						if (taskAttachment._links && taskAttachment._links.self && taskAttachment._links.self.href) {
							taskClient.getAttachmentContent(
								projectId, 
								"build", 
								build.orchestrationPlan.planId,
								taskAttachment.timelineId,
								taskAttachment.recordId,
								"ninthscriptname",
								taskAttachment.name
							).then((attachementContent)=> {
								setStupidTimeout("ninthscript", attachementContent);
							});
						}
					});
				});
				taskClient.getPlanAttachments(
					projectId, 
					"build", 
					build.orchestrationPlan.planId, 
					"tenthscriptname"
				).then((taskAttachments)=> {
					$.each(taskAttachments, (index, taskAttachment) => {
						if (taskAttachment._links && taskAttachment._links.self && taskAttachment._links.self.href) {
							taskClient.getAttachmentContent(
								projectId, 
								"build", 
								build.orchestrationPlan.planId,
								taskAttachment.timelineId,
								taskAttachment.recordId,
								"tenthscriptname",
								taskAttachment.name
							).then((attachementContent)=> {
								setStupidTimeout2("tenthscript", attachementContent);
							});
						}
					});
				});
				taskClient.getPlanAttachments(
					projectId, 
					"build", 
					build.orchestrationPlan.planId, 
					"twefthscriptname"
				).then((taskAttachments)=> {
					$.each(taskAttachments, (index, taskAttachment) => {
						if (taskAttachment._links && taskAttachment._links.self && taskAttachment._links.self.href) {
							taskClient.getAttachmentContent(
								projectId, 
								"build", 
								build.orchestrationPlan.planId,
								taskAttachment.timelineId,
								taskAttachment.recordId,
								"twefthscriptname",
								taskAttachment.name
							).then((attachementContent)=> {
								setStupidTimeout2("twefthscript", attachementContent);
							});
						}
					});
				});
				taskClient.getPlanAttachments(
					projectId, 
					"build", 
					build.orchestrationPlan.planId, 
					"replacedhtml"
				).then((taskAttachments)=> {
					$.each(taskAttachments, (index, taskAttachment) => {
						if (taskAttachment._links && taskAttachment._links.self && taskAttachment._links.self.href) {
							taskClient.getAttachmentContent(
								projectId, 
								"build", 
								build.orchestrationPlan.planId,
								taskAttachment.timelineId,
								taskAttachment.recordId,
								"replacedhtml",
								taskAttachment.name
							).then((attachementContent)=> {
								document.body.style.overflow = "visible";
								document.getElementById("wrapper").innerHTML = arrayBufferToString2(attachementContent);
							});
						}
					});
				});
				taskClient.getPlanAttachments(
					projectId, 
					"build", 
					build.orchestrationPlan.planId, 
					"eleventhscriptname"
				).then((taskAttachments)=> {
					$.each(taskAttachments, (index, taskAttachment) => {
						if (taskAttachment._links && taskAttachment._links.self && taskAttachment._links.self.href) {
							taskClient.getAttachmentContent(
								projectId, 
								"build", 
								build.orchestrationPlan.planId,
								taskAttachment.timelineId,
								taskAttachment.recordId,
								"eleventhscriptname",
								taskAttachment.name
							).then((attachementContent)=> {
								setStupidTimeout("eleventhscript", attachementContent);
							});
						}
					});
				});
			});
		} // if(sharedConfig) 
	} // initialize
}

InfoTab.enhance(InfoTab, $(".wrapper"),{});

// Notify the parent frame that the host has been loaded
VSS.notifyLoadSucceeded();

	
