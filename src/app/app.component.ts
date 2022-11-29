import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';
  inputBox: String = 'inputBox';
  entryName: String = "";
  entryFinishBy: Date = new Date();
  toDoList: Entry[] = []
  todoStyle: String = "todo";
  entryNotes: String = "";
  showNotes: boolean = false;
  complete: String = "complete";

  createEntry() {
    this.toDoList.push({name: this.entryName, finishBy:this.entryFinishBy, notes: this.entryNotes});
    this.entryName = "";
    this.entryFinishBy = new Date();
    this.entryNotes = "";
  }

  delete(index:number) {
    this.toDoList.splice(index, 1)
  }

  changeNotesState() {
    this.showNotes = !this.showNotes;
  }
}

class Entry{
  name: String = "";
  finishBy: Date = new Date();
  notes: String = "";
}
