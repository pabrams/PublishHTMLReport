import Controls = require("VSS/Controls");
import VSS_Service = require("VSS/Service");
import TFS_Build_Contracts = require("TFS/Build/Contracts");
import TFS_Build_Extension_Contracts = require("TFS/Build/ExtensionContracts");
import DT_Client = require("TFS/DistributedTask/TaskRestClient");
import { data } from "jquery";

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

export class InfoTab extends Controls.BaseControl {	
	constructor() {
		super();
	}

	public initialize(): void {
		super.initialize();
		// Get configuration that's shared between extension and the extension host
		var sharedConfig: TFS_Build_Extension_Contracts.IBuildResultsViewExtensionConfig = VSS.getConfiguration();
		var vsoContext = VSS.getWebContext();
		if(sharedConfig) {
			// register your extension with host through callback
			sharedConfig.onBuildChanged((build: TFS_Build_Contracts.Build) => {
				var taskClient = DT_Client.getClient();
				taskClient.getPlanAttachments(
					vsoContext.project.id, 
					"build", 
					build.orchestrationPlan.planId, 
					"firstscriptname"
				).then((taskAttachments)=> {
					$.each(taskAttachments, (index, taskAttachment) => {
						if (taskAttachment._links && taskAttachment._links.self && taskAttachment._links.self.href) {
							var recId = taskAttachment.recordId;
							var timelineId = taskAttachment.timelineId;
							taskClient.getAttachmentContent(vsoContext.project.id, "build", build.orchestrationPlan.planId,timelineId,recId,"firstscriptname",taskAttachment.name).then((attachementContent)=> {
								var first = arrayBufferToString(attachementContent);
								document.body.style.overflow = "visible";
								var s = document.createElement("script");
								s.innerHTML = first;
								s.async = false;
								document.getElementById("firstscript").appendChild(s);
							});
						}
					});
				});
				taskClient.getPlanAttachments(
					vsoContext.project.id, 
					"build", 
					build.orchestrationPlan.planId, 
					"secondscriptname"
				).then((taskAttachments)=> {
					$.each(taskAttachments, (index, taskAttachment) => {
						if (taskAttachment._links && taskAttachment._links.self && taskAttachment._links.self.href) {
							var recId = taskAttachment.recordId;
							var timelineId = taskAttachment.timelineId;
							taskClient.getAttachmentContent(
								vsoContext.project.id, 
								"build", 
								build.orchestrationPlan.planId,
								timelineId,
								recId,
								"secondscriptname",
								taskAttachment.name
							).then((attachementContent)=> {
								var second = arrayBufferToString(attachementContent);
								setTimeout(function() {
									var s = document.createElement("script");
									s.innerHTML = second;
									s.async = false;
									document.getElementById("secondscript").appendChild(s)
								}, 1000);
							});
						}
					});
				});
				taskClient.getPlanAttachments(vsoContext.project.id, "build", build.orchestrationPlan.planId, "fourthscriptname").then((taskAttachments)=> {
					$.each(taskAttachments, (index, taskAttachment) => {
						if (taskAttachment._links && taskAttachment._links.self && taskAttachment._links.self.href) {

							var recId = taskAttachment.recordId;
							var timelineId = taskAttachment.timelineId;
							
							taskClient.getAttachmentContent(vsoContext.project.id, "build", build.orchestrationPlan.planId,timelineId,recId,"fourthscriptname",taskAttachment.name).then((attachementContent)=> {
								var fourth = arrayBufferToString(attachementContent);
								setTimeout(function() {
									var s = document.createElement("script");
									s.innerHTML = fourth;
									s.async = false;
									document.getElementById("fourthscript").appendChild(s)
								}, 1000);
							});
						}
					});
				});
				taskClient.getPlanAttachments(vsoContext.project.id, "build", build.orchestrationPlan.planId, "fifthscriptname").then((taskAttachments)=> {
					$.each(taskAttachments, (index, taskAttachment) => {
						if (taskAttachment._links && taskAttachment._links.self && taskAttachment._links.self.href) {

							var recId = taskAttachment.recordId;
							var timelineId = taskAttachment.timelineId;
							
							taskClient.getAttachmentContent(vsoContext.project.id, "build", build.orchestrationPlan.planId,timelineId,recId,"fifthscriptname",taskAttachment.name).then((attachementContent)=> {
								var fifth = arrayBufferToString(attachementContent);
								setTimeout(function() {
									var s = document.createElement("script");
									s.innerHTML = fifth;
									s.async = false;
									document.getElementById("fifthscript").appendChild(s)
								}, 1000);
							});
						}
					});
				});
				taskClient.getPlanAttachments(vsoContext.project.id, "build", build.orchestrationPlan.planId, "sixthscriptname").then((taskAttachments)=> {
					$.each(taskAttachments, (index, taskAttachment) => {
						if (taskAttachment._links && taskAttachment._links.self && taskAttachment._links.self.href) {

							var recId = taskAttachment.recordId;
							var timelineId = taskAttachment.timelineId;
							
							taskClient.getAttachmentContent(vsoContext.project.id, "build", build.orchestrationPlan.planId,timelineId,recId,"sixthscriptname",taskAttachment.name).then((attachementContent)=> {
								var sixth = arrayBufferToString(attachementContent);
								setTimeout(function() {
									var s = document.createElement("script");
									s.innerHTML = sixth;
									s.async = false;
									document.getElementById("sixthscript").appendChild(s)
								}, 1000);
							});
							
						}
					});
				});
				taskClient.getPlanAttachments(vsoContext.project.id, "build", build.orchestrationPlan.planId, "seventhscriptname").then((taskAttachments)=> {
					$.each(taskAttachments, (index, taskAttachment) => {
						if (taskAttachment._links && taskAttachment._links.self && taskAttachment._links.self.href) {

							var recId = taskAttachment.recordId;
							var timelineId = taskAttachment.timelineId;
							
							taskClient.getAttachmentContent(vsoContext.project.id, "build", build.orchestrationPlan.planId,timelineId,recId,"seventhscriptname",taskAttachment.name).then((attachementContent)=> {
								var seventh = arrayBufferToString(attachementContent);
								setTimeout(function() {
									var s = document.createElement("script");
									s.innerHTML = seventh;
									s.async = false;
									document.getElementById("seventhscript").appendChild(s)
								}, 1000);
							});
						}
					});
				});
				taskClient.getPlanAttachments(vsoContext.project.id, "build", build.orchestrationPlan.planId, "ninthscriptname").then((taskAttachments)=> {
					$.each(taskAttachments, (index, taskAttachment) => {
						if (taskAttachment._links && taskAttachment._links.self && taskAttachment._links.self.href) {
							var recId = taskAttachment.recordId;
							var timelineId = taskAttachment.timelineId;
							taskClient.getAttachmentContent(
								vsoContext.project.id, 
								"build", 
								build.orchestrationPlan.planId,
								timelineId,
								recId,
								"ninthscriptname",
								taskAttachment.name
							).then((attachementContent)=> {
								var ninth = arrayBufferToString2(attachementContent);
								setTimeout(function() {
									var s = document.createElement("script");
									s.innerHTML = ninth;
									s.async = false;
									document.getElementById("ninthscript").appendChild(s)
								}, 1000);
							});
						}
					});
				});
				taskClient.getPlanAttachments(vsoContext.project.id, "build", build.orchestrationPlan.planId, "tenthscriptname").then((taskAttachments)=> {
					$.each(taskAttachments, (index, taskAttachment) => {
						if (taskAttachment._links && taskAttachment._links.self && taskAttachment._links.self.href) {
							var recId = taskAttachment.recordId;
							var timelineId = taskAttachment.timelineId;
							taskClient.getAttachmentContent(
								vsoContext.project.id, 
								"build", 
								build.orchestrationPlan.planId,
								timelineId,
								recId,
								"tenthscriptname",
								taskAttachment.name
							).then((attachementContent)=> {
								var tenth = arrayBufferToString2(attachementContent);
								setTimeout(function() {
									var s = document.createElement("script");
									s.innerHTML = tenth;
									s.async = false;
									document.getElementById("tenthscript").appendChild(s)
								}, 1000);
							});
							
						}
					});
				});
				taskClient.getPlanAttachments(vsoContext.project.id, "build", build.orchestrationPlan.planId, "twefthscriptname").then((taskAttachments)=> {
					$.each(taskAttachments, (index, taskAttachment) => {
						if (taskAttachment._links && taskAttachment._links.self && taskAttachment._links.self.href) {
							var recId = taskAttachment.recordId;
							var timelineId = taskAttachment.timelineId;
							taskClient.getAttachmentContent(
								vsoContext.project.id, 
								"build", 
								build.orchestrationPlan.planId,
								timelineId,
								recId,
								"twefthscriptname",
								taskAttachment.name
							).then((attachementContent)=> {
								var tenth = arrayBufferToString2(attachementContent);
								setTimeout(function() {
									var s = document.createElement("script");
									s.innerHTML = tenth;
									s.async = false;
									document.getElementById("twefthscriptname").appendChild(s)
								}, 1000);
							});
						}
					});
				});
				taskClient.getPlanAttachments(vsoContext.project.id, "build", build.orchestrationPlan.planId, "replacedhtml").then((taskAttachments)=> {
					$.each(taskAttachments, (index, taskAttachment) => {
						if (taskAttachment._links && taskAttachment._links.self && taskAttachment._links.self.href) {
							var recId = taskAttachment.recordId;
							var timelineId = taskAttachment.timelineId;
							
							taskClient.getAttachmentContent(
								vsoContext.project.id, 
								"build", 
								build.orchestrationPlan.planId,
								timelineId,
								recId,
								"replacedhtml",
								taskAttachment.name
							).then((attachementContent)=> {
								var newhtml = arrayBufferToString2(attachementContent);
								document.body.style.overflow = "visible";
								document.getElementById("wrapper").innerHTML = newhtml;
							});
						}
					});
				});
				taskClient.getPlanAttachments(vsoContext.project.id, "build", build.orchestrationPlan.planId, "eleventhscriptname").then((taskAttachments)=> {
					$.each(taskAttachments, (index, taskAttachment) => {
						if (taskAttachment._links && taskAttachment._links.self && taskAttachment._links.self.href) {
							var recId = taskAttachment.recordId;
							var timelineId = taskAttachment.timelineId;
							taskClient.getAttachmentContent(
								vsoContext.project.id, 
								"build", 
								build.orchestrationPlan.planId,
								timelineId,
								recId,
								"eleventhscriptname",
								taskAttachment.name
							).then((attachementContent)=> {
								var eleventh = arrayBufferToString(attachementContent);
								setTimeout(function() {
									var s = document.createElement("script");
									s.innerHTML = eleventh;
									s.async = false;
									document.getElementById("eleventhscript").appendChild(s);
								}, 1000);
							});
						}
					});
				});
			});
		}
	}
}

InfoTab.enhance(InfoTab, $(".wrapper"),{});

// Notify the parent frame that the host has been loaded
VSS.notifyLoadSucceeded();

	
