import { Component, OnInit } from '@angular/core';
import { EmployeeRaw } from '../data/EmployeeRaw'; // THIS MIGHT COULD CAUSE ERROR './data/EmployeeRaw' <-- is this better? 
import { EmployeeService } from '../data/employee.service';
import { PositionService } from '../data/position.service';
import { ActivatedRoute } from '@angular/router';
import { Position } from '../data/position';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  private paramSubScription: any;
  private employeeSubscription: any;
  // private getPositionsSubcription: any;
  private getPositionsSub: any;
  private saveEmployeeSubscription: any;
  private employee: EmployeeRaw;
  private positions: Position[];
  private successMessage = false;
  private failMessage = false;


  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private positionService: PositionService) { }

  ngOnInit() {
    this.paramSubScription = this.route.params.subscribe((params) => {
      this.employeeSubscription = this.employeeService.getEmployee(params['_id']).subscribe((emp) => {
        this.employee = emp[0];

        this.getPositionsSub = this.positionService.getPositions().subscribe(data => {
          this.positions = data;
        });

      });
    });
  }



}
