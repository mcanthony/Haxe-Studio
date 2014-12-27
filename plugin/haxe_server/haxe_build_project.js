var haxe_server = (function(obj)
{
	var _c = central;
	var _chs = central.haxe_server;

	obj.haxeCompletionResult = "";
	
	function buildProjectToFindError(buildTarget)
		{
		obj.haxeCompletionResult = "";
		var waiting = true;
		support.exec([
			"cd %CD% %QUOTE%"+central.project.projectFolder+"%QUOTE%",
			"lime build "+buildTarget
			],function(p1,p2,p3){
			if (p1 != "") { debug.debug(""+p1); }
			if (p2 != "") { debug.debug(""+p2); }
			if (p3 != "") { debug.debug(""+p3); }
				/*
				if (p1 == null) // no error
					{
					waiting = false;
					obj.haxeCompletionResult = p3;
					central.event.broadcast("haxeCompletionComplete","haxe_completion.js","");
					}
				*/
			});
		}
		
	obj.haxe_build_project = function()
		{
		buildProjectToFindError(config.defaultBuild);
		}		
	return obj;
})(haxe_server);
