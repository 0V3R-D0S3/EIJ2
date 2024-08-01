
class JohnCharacterSheet extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["everyone-is-john", "sheet", "character"],
      template: "modules/everyone-is-john/templates/character-sheet.html",
      width: 400,
      height: 400,
      resizable: false,
    });
  }

  getData() {
    const data = super.getData();
    // Add additional data needed by the template here
    return data;
  }

  activateListeners(html) {
    super.activateListeners(html);
    // Add event listeners for interactive elements here
  }
}

// Register the sheet
Actors.registerSheet("everyone-is-john", JohnCharacterSheet, {
  types: ["character"],
  makeDefault: true,
});
    