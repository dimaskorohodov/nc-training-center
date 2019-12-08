package ua.com.nc.nctrainingproject.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ua.com.nc.nctrainingproject.models.Action;
import ua.com.nc.nctrainingproject.services.ActionService;

import java.util.List;

@CrossOrigin
@Controller
@RequestMapping("/action")
public class ActionController {

	private final ActionService actionService;

	@Autowired
	public ActionController(ActionService actionService) {
		this.actionService = actionService;
	}

	@RequestMapping(value = "/all", method = RequestMethod.POST)
	@ResponseBody
	public List<Action> getAllActions() {
		return actionService.getAllActions();
	}

	@RequestMapping(value = "/create", method = RequestMethod.POST)
	@ResponseBody
	public Action createAction(@RequestParam(name = "actionId") int actionId,
							   @RequestParam(name = "userId") int userId,
							   @RequestParam(name = "actionTypeId") int actionTypeId) {
		Action action = new Action(actionId, userId, actionTypeId);
		actionService.createAction(action);
		return action;
	}

	@RequestMapping(value = "/delete", method = RequestMethod.POST)
	@ResponseBody
	public void deleteActionType(@RequestParam(name = "actionId") int actionId) {
		actionService.deleteActionByActionId(actionId);
	}

	@RequestMapping(value = "/update", method = RequestMethod.POST)
	@ResponseBody
	public Action updateAction(@RequestParam(name = "actionId") int actionId,
							   @RequestParam(name = "userId") int userId,
							   @RequestParam(name = "actionTypeId") int actionTypeId) {

		Action action = new Action(actionId, userId, actionTypeId);
		actionService.updateAction(actionId, action);
		return action;
	}

	@RequestMapping(value = "/get/{actionId}", method = RequestMethod.GET)
	@ResponseBody
	public Action getActionById(@PathVariable(name = "actionId") int actionId) {
		return actionService.getActionById(actionId);
	}

	@RequestMapping(value = "/get/{actionTypeId}", method = RequestMethod.GET)
	public Action getActionByTypeId(@PathVariable(name = "actionTypeId") int actionTypeId) {
		return actionService.getActionByActionTypeId(actionTypeId);
	}

	@RequestMapping(value = "/get/{userId}", method = RequestMethod.GET)
	@ResponseBody
	public Action getActionByUserId(@PathVariable(name = "userId") int userId) {
		return actionService.getActionByUserId(userId);
	}
}
