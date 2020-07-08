({
    // Load items from Salesforce
    doInit: function(component, event, helper) {
        var action = component.get("c.saveItem");
        action.setParams({"item": newItem});
        action.setCallback(this, function(response){
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                // all good, nothing to do.
            }
        });
        $A.enqueueAction(action);
    },


    handleAddItem: function(component, event, helper) {
        event.getParam("item");
        //helper.createItem(component, newItem);
        this.saveItem(component, item, function(response){
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                var items = component.get("v.items");
                items.push(response.getReturnValue());
                component.set("v.items", items);
            }
        });
    }
})