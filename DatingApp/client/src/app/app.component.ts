import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {NgFor} from "@angular/common";
import {of} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

  http = inject(HttpClient);
  title = 'DatingApp';
  users: any;

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/users', {
      headers: new HttpHeaders({ 'ignore-certificate-errors': 'true' })
    }).subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Completed!')
    })

  }

  protected readonly of = of;
}
