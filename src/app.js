"use strict";
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById("project-input");
        this.hostElement = document.getElementById("app");
        const importedNode = document.importNode(this.templateElement.content, true);
        this.formElement = importedNode.firstElementChild;
        this.formElement.id = "user-input";
        this.attachToApp();
    }
    attachToApp() {
        // this.hostElement.append(this.formElement);
        this.hostElement.insertAdjacentElement("afterbegin", this.formElement);
    }
}
const projectInput = new ProjectInput();
