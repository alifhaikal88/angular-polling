import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-my-dialog",
  templateUrl: "./my-dialog.component.html",
  styleUrls: ["./my-dialog.component.css"]
})
export class MyDialogComponent implements OnInit {
  constructor(private router: Router, private dialogRef: MatDialogRef<MyDialogComponent>) {}

  ngOnInit() {}

  redirect() {
    this.router.navigateByUrl('home').then(() => {
      this.dialogRef.close()
    });
  }
}
