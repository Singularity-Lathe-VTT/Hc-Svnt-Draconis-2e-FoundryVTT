// Import Modules
import { HSDActor } from "./actor/actor.js";
import { HSDActorSheet } from "./actor/actor-sheet.js";
import { HSDItem } from "./item/item.js";
import { HSDItemSheet } from "./item/item-sheet.js";

Hooks.once('init', async function() {

  game.hcsvntdraconis2e = {
    HSDActor,
    HSDItem
  };

  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: "1d20",
    decimals: 2
  };

  // Define custom Entity classes
  CONFIG.Actor.entityClass = HSDActor;
  CONFIG.Item.entityClass = HSDItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("hcsvntdraconis2e", HSDActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("hcsvntdraconis2e", HSDItemSheet, { makeDefault: true });

  // If you need to add Handlebars helpers, here are a few useful examples:
  Handlebars.registerHelper('concat', function() {
    var outStr = '';
    for (var arg in arguments) {
      if (typeof arguments[arg] != 'object') {
        outStr += arguments[arg];
      }
    }
    return outStr;
  });

  Handlebars.registerHelper('toLowerCase', function(str) {
    return str.toLowerCase();
  });
});