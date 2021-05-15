import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { Users } from '../Shared/User';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  
  constructor(private apiservice :ApiService) { }
  logout(){
    this.apiservice.logout();
  }
  ngOnInit(): void {
  }

}
