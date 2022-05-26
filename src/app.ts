///<reference path="models/drag-drop.ts"/>
///<reference path="models/project.ts"/>
///<reference path="state/project-state.ts"/>
///<reference path="util/validation.ts"/>
///<reference path="decorators/autobinder.ts"/>
///<reference path="components/base-component.ts"/>
///<reference path="components/project-item.ts"/>
///<reference path="components/project-list.ts"/>
///<reference path="components/project-input.ts"/>



namespace App{
// project Type
// 
// Project State Management
//Validation
//autobind decorator
// Component Base Class
//ProjectItem Class
// Projectlist Class
//ProjectInput Class
const prjInput = new ProjectInput();
const activePrjList =new ProjectList('active');
const finishedPrjList =new ProjectList('finished');
}